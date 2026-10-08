#!/bin/bash
# deploy.sh — Run from sporeGate or any gate with relay SSH access
# Creates Forgejo repos, clones to relay, builds with Zola, configures Caddy
# Usage: bash deploy.sh
set -euo pipefail

RELAY_SSH="root@10.13.37.1"  # Adjust if relay uses different user/IP
FORGEJO_URL="https://git.primals.eco"
FORGEJO_API="${FORGEJO_URL}/api/v1"

echo "=== TUEBOR/BARRY DEPLOYMENT ==="
echo "=== $(date -u +%Y-%m-%dT%H:%M:%SZ) ==="

# -------------------------------------------------------
# STEP 1: Create Forgejo repos (run from gate with API token)
# -------------------------------------------------------
echo ""
echo "--- Step 1: Forgejo repo creation ---"
echo "If repos don't exist yet, create them via Forgejo web UI:"
echo "  ${FORGEJO_URL}/org/publicRecord/repo/create"
echo "  Name: barry"
echo "  Visibility: Public"
echo ""
echo "  ${FORGEJO_URL}/org/amicusContra/repo/create  (or org/publicRecord)"
echo "  Name: tuebor"
echo "  Visibility: Public"
echo ""
echo "Or via API with token:"
echo '  curl -X POST "${FORGEJO_API}/orgs/publicRecord/repos" \'
echo '    -H "Authorization: token YOUR_TOKEN" \'
echo '    -H "Content-Type: application/json" \'
echo '    -d '"'"'{"name":"barry","description":"Michigan public record — tuebor.primals.eco","private":false}'"'"
echo ""
read -p "Press Enter when repos are created (or Ctrl-C to abort)..."

# -------------------------------------------------------
# STEP 2: Push content to Forgejo
# -------------------------------------------------------
echo ""
echo "--- Step 2: Push to Forgejo ---"
echo "From wateringHole (Windows):"
echo "  cd publicRecord-barry"
echo "  git remote set-url forgejo ssh://git@git.primals.eco:2222/publicRecord/barry.git"
echo "  git push forgejo main"
echo ""
read -p "Press Enter when pushed (or Ctrl-C)..."

# -------------------------------------------------------
# STEP 3: Deploy on relay
# -------------------------------------------------------
echo ""
echo "--- Step 3: Deploy on relay ---"

ssh ${RELAY_SSH} bash -s << 'RELAY_DEPLOY'
set -euo pipefail

echo "=== Relay deployment starting ==="

# Create site directories
mkdir -p /srv/tuebor/public
mkdir -p /srv/barry/public

# Clone repo
if [ -d /srv/tuebor/repo ]; then
    echo "Repo exists, pulling..."
    cd /srv/tuebor/repo
    git pull --ff-only
else
    echo "Cloning repo..."
    git clone https://git.primals.eco/publicRecord/barry.git /srv/tuebor/repo \
      || git clone https://github.com/amicusContra/tuebor.git /srv/tuebor/repo
fi

# Build with Zola
cd /srv/tuebor/repo/site

if ! command -v zola &>/dev/null; then
    echo "Installing zola..."
    curl -sL https://github.com/getzola/zola/releases/download/v0.19.2/zola-v0.19.2-x86_64-unknown-linux-gnu.tar.gz \
      | tar xz -C /usr/local/bin/
fi

echo "Building site..."
zola build --output-dir /srv/tuebor/public --force

# Symlink for barry (same content for now)
rm -rf /srv/barry/public
ln -sf /srv/tuebor/public /srv/barry/public

# Count output
HTML_COUNT=$(find /srv/tuebor/public -name '*.html' | wc -l)
echo "✓ Build complete: ${HTML_COUNT} HTML files"

# Add Caddy site blocks (if not already present)
CADDYFILE="/etc/caddy/Caddyfile"
[ -f /etc/membrane/Caddyfile ] && CADDYFILE="/etc/membrane/Caddyfile"

if ! grep -q "tuebor.primals.eco" "${CADDYFILE}" 2>/dev/null; then
    echo ""
    echo "Adding Caddy site blocks..."
    cat >> "${CADDYFILE}" << 'CADDY'

tuebor.primals.eco {
    root * /srv/tuebor/public
    file_server
    encode gzip
    header {
        X-Content-Type-Options "nosniff"
        X-Frame-Options "DENY"
        Referrer-Policy "strict-origin-when-cross-origin"
        Permissions-Policy "interest-cohort=()"
    }
}

barry.primals.eco {
    root * /srv/tuebor/public
    file_server
    encode gzip
    header {
        X-Content-Type-Options "nosniff"
        X-Frame-Options "DENY"
        Referrer-Policy "strict-origin-when-cross-origin"
        Permissions-Policy "interest-cohort=()"
    }
}
CADDY
    echo "✓ Caddy blocks added"
else
    echo "✓ Caddy blocks already present"
fi

# Reload Caddy
if systemctl is-active --quiet caddy; then
    caddy reload --config "${CADDYFILE}" --adapter caddyfile 2>/dev/null \
      || systemctl reload caddy
    echo "✓ Caddy reloaded"
fi

# Create rebuild script
cat > /srv/tuebor/rebuild.sh << 'REBUILD'
#!/bin/bash
set -euo pipefail
cd /srv/tuebor/repo
git pull --ff-only
cd site
zola build --output-dir /srv/tuebor/public --force
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) — tuebor rebuilt" >> /srv/tuebor/build.log
REBUILD
chmod +x /srv/tuebor/rebuild.sh

# Add cron rebuild (every 5 min check for new commits)
if ! crontab -l 2>/dev/null | grep -q "tuebor/rebuild"; then
    (crontab -l 2>/dev/null; echo "*/5 * * * * cd /srv/tuebor/repo && git fetch origin main --quiet && git diff --quiet origin/main || /srv/tuebor/rebuild.sh") | crontab -
    echo "✓ Cron auto-rebuild configured (5 min)"
fi

echo ""
echo "=== DEPLOYMENT COMPLETE ==="
echo "=== tuebor.primals.eco and barry.primals.eco ready ==="
echo "=== DNS records needed: ==="
echo "    tuebor.primals.eco  A  $(curl -s4 ifconfig.me 2>/dev/null || echo '<RELAY_IP>')"
echo "    barry.primals.eco   A  $(curl -s4 ifconfig.me 2>/dev/null || echo '<RELAY_IP>')"

RELAY_DEPLOY

echo ""
echo "=== Deploy script complete ==="
echo "=== Verify: curl -I https://tuebor.primals.eco ==="
echo "=== Verify: curl -I https://barry.primals.eco ==="
