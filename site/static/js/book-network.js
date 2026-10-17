// book-network.js — subgraph extracted from "It Had 2 Happen" (ISBN 173575403X)
// Source: Banks's own published words. Party admission under MRE 801(d)(2)(A).
// Every node and edge here is documented in the defendant's autobiography.
// Overlay on network-data.js to validate found network and discover new nodes.
//
// Generated: 2026-10-05
// Method: epub text extraction + OCR transcript cross-reference

(function() {
  'use strict';

  // ── BOOK-ADMITTED NODES ──────────────────────────────────────────
  // Nodes that exist ONLY in the book admission graph (not yet in main network)
  // Nodes already in main network are referenced by their existing ID.

  var BOOK_NODES = [
    // === FAMILY ===
    { id: 'bk_od_banks_sr', label: 'O.D. Banks Sr.', tier: 3, type: 'family',
      detail: 'Grandfather. GM 25+ years. Posted $60K cash bail. "The only father I really knew." Died Apr 5, 2011.',
      bookRef: 'Dedication, Ch.1-5', mentions: 50, role: 'enabler_financial' },
    { id: 'bk_joyce_banks', label: 'Joyce Banks', tier: 4, type: 'family',
      detail: 'Mother. "Quiet, petite lady." Attended campaign events. "This has to be political" re: AG prosecution.',
      bookRef: 'Acknowledgments, throughout', mentions: 30, role: 'family' },
    { id: 'bk_justin', label: 'Justin', tier: 4, type: 'family',
      detail: 'Brother. 13 years younger. Present at swearing-in with Joe.',
      bookRef: 'Acknowledgments, throughout', mentions: 15, role: 'family' },
    { id: 'bk_marvin_stokes', label: 'Marvin Stokes', tier: 5, type: 'family',
      detail: 'Biological father. Absent. Discovered via church member Felicia\'s birth certificate.',
      bookRef: 'Who\'s My Daddy? ch.', mentions: 3, role: 'absent_parent' },
    { id: 'bk_felicia', label: 'Felicia', tier: 5, type: 'family',
      detail: 'Half-sister (same father Marvin Stokes). Discovered at church.',
      bookRef: 'Who\'s My Daddy? ch.', mentions: 2, role: 'family' },
    { id: 'bk_debbie', label: 'Debbie', tier: 5, type: 'family',
      detail: 'Cousin. "Listening ear... came to my rescue when I was in the middle of my mess."',
      bookRef: 'Acknowledgments', mentions: 1, role: 'family' },

    // === JUDGES (book-only detail) ===
    // langford_morris, vonda_evans, miller already exist in main graph
    { id: 'bk_bryant', label: 'J. E. Lynise Bryant', tier: 3, type: 'judge',
      detail: 'Wayne County judge. Thanked as friend in acknowledgments.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'network_judge' },
    { id: 'bk_regina_thomas', label: 'J. Regina Thomas', tier: 3, type: 'judge',
      detail: 'Wayne County judge. Thanked as friend in acknowledgments.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'network_judge' },
    { id: 'bk_greg_mathis', label: 'J. Greg Mathis', tier: 5, type: 'judge',
      detail: 'TV judge. Mentioned as cultural reference.',
      bookRef: 'Story text', mentions: 1, role: 'cultural_reference' },

    // === KEY BRIDGE NODES ===
    { id: 'bk_roeiah', label: 'Roeiah', tier: 2, type: 'bridge',
      detail: 'MSU Law classmate. 33 mentions. Bridge between Banks and Langford Morris. Arranged Brandy\'s restaurant meeting. LEO Program together.',
      bookRef: 'Throughout', mentions: 33, role: 'bridge_judiciary' },
    { id: 'bk_condino', label: 'Mr. Condino', tier: 3, type: 'legal',
      detail: 'Defense attorney in Oakland County felony case before Langford Morris. 9 mentions.',
      bookRef: 'The Wrong Side of the Bench, Revelation Day', mentions: 9, role: 'defense_attorney' },
    { id: 'bk_ben_gonek', label: 'Ben Gonek', tier: 3, type: 'legal',
      detail: 'Attorney retained when FBI + AG arrived. Holland went to his office with Banks. Recognized FBI agent.',
      bookRef: 'When the Bottom Falls Out', mentions: 2, role: 'defense_attorney' },

    // === MSU LAW SCHOOL ===
    { id: 'bk_mary_ferguson', label: 'Mary Ferguson', tier: 3, type: 'institutional',
      detail: 'Director of Diversity Services, MSU College of Law. Shepherded Banks + Roeiah into LEO Program.',
      bookRef: 'D\'s Get Degrees', mentions: 5, role: 'institutional_enabler' },
    { id: 'bk_dean_alsup', label: 'Dean Connell Alsup', tier: 3, type: 'institutional',
      detail: 'African-American dean at MSU Law. Took personal interest in Banks. "Remember the marathon runner." 21 mentions.',
      bookRef: 'D\'s Get Degrees', mentions: 21, role: 'institutional_enabler' },
    { id: 'bk_prof_mulligan', label: 'Prof. Mulligan', tier: 4, type: 'institutional',
      detail: 'Contracts professor. Gave Banks the "D" that became a chapter title. 14 mentions.',
      bookRef: 'D\'s Get Degrees', mentions: 14, role: 'law_professor' },
    { id: 'bk_prof_filiatrault', label: 'Prof. Filiatrault', tier: 5, type: 'institutional',
      detail: 'Civil Procedure professor at MSU Law.',
      bookRef: 'D\'s Get Degrees', mentions: 1, role: 'law_professor' },
    { id: 'bk_miss_linda', label: 'Miss Linda', tier: 5, type: 'institutional',
      detail: 'Admissions staff at MSU Law. First contact for campus tour.',
      bookRef: 'D\'s Get Degrees', mentions: 2, role: 'institutional' },

    // === POLITICAL NETWORK (book-only) ===
    { id: 'bk_cathy_garrett', label: 'Cathy Garrett', tier: 4, type: 'political',
      detail: 'Wayne County Clerk. Thanked as friend.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'political_ally' },
    { id: 'bk_karen_dumas', label: 'Karen Dumas', tier: 3, type: 'political',
      detail: 'Detroit comms/media figure. Thanked as friend. Was Bing\'s comms chief.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'media_access' },
    { id: 'bk_mildred_gaddis', label: 'Mildred Gaddis', tier: 4, type: 'political',
      detail: 'Detroit radio host. Thanked as friend. Media access node.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'media_access' },

    // === CHURCH/SPIRITUAL ===
    { id: 'bk_sheard', label: 'Bp. J. Drew Sheard', tier: 4, type: 'spiritual',
      detail: 'Greater Emmanuel COGIC pastor. "Wisdom, support, and teaching." Karen Clark-Sheard is First Lady.',
      bookRef: 'Acknowledgments', mentions: 4, role: 'spiritual_cover' },
    { id: 'bk_valerie_messiah', label: 'Rev. V. Messiah', tier: 5, type: 'spiritual',
      detail: 'Friend who died of COVID March 29, 2020. Dedicated in book.',
      bookRef: 'Dedication', mentions: 1, role: 'spiritual' },
    { id: 'bk_ronald_alexander', label: 'P. Ron Alexander', tier: 5, type: 'spiritual',
      detail: '"Bishop" Alexander. Thanked as friend.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'spiritual' },
    { id: 'bk_elder_moore', label: 'Elder R. Moore', tier: 5, type: 'spiritual',
      detail: 'Robert Moore. Thanked as friend.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'spiritual' },

    // === CAMPAIGN/BUSINESS ===
    { id: 'bk_carles_whitlow', label: 'Carles Whitlow', tier: 4, type: 'vendor',
      detail: 'Nine Thirty Marketing. Book cover team. Senate campaign payee ($9,400).',
      bookRef: 'Acknowledgments', mentions: 1, role: 'vendor' },
    { id: 'bk_deshon_gale', label: 'DeShon Gale', tier: 5, type: 'vendor',
      detail: 'DG Creative Studios. Designed book cover — "Brian Banks, J.D."',
      bookRef: 'Acknowledgments', mentions: 2, role: 'vendor' },
    { id: 'bk_tiffanie_lewis', label: 'Tiffanie Y. Lewis', tier: 5, type: 'vendor',
      detail: 'Book editor/coach. Love1Ministries@gmail.com.',
      bookRef: 'Copyright page, Acknowledgments', mentions: 2, role: 'vendor' },
    { id: 'bk_blanche', label: 'Blanche McAllister', tier: 4, type: 'entertainment',
      detail: 'Gospel artist. Banks managed her career. "Traveled the world with her." 7 mentions.',
      bookRef: 'Friends chapter', mentions: 7, role: 'managed_artist' },

    // === LEGISLATIVE STAFF ===
    { id: 'bk_schmidtke', label: 'B. Schmidtke Esq.', tier: 5, type: 'legal',
      detail: 'Legislative staff. Licensed attorney working under unlicensed Banks.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'staff' },
    { id: 'bk_fadel', label: 'Rebecca Fadel J.D.', tier: 5, type: 'legal',
      detail: 'Legislative staff. J.D. holder under non-licensed supervisor.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'staff' },
    { id: 'bk_giallonardo', label: 'Kyle Giallonardo J.D.', tier: 5, type: 'legal',
      detail: 'Legislative staff. J.D. holder under non-licensed supervisor.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'staff' },

    // === FRIENDS (high-frequency / strategically important) ===
    { id: 'bk_ebony_ford', label: 'Ebony Ford', tier: 4, type: 'friend',
      detail: 'BFF. Maryland. Sports industry. "Loyal to a fault." 12 mentions.',
      bookRef: 'Friends chapter', mentions: 12, role: 'inner_circle' },
    { id: 'bk_terrence_tarver', label: 'Terrence Tarver', tier: 4, type: 'friend',
      detail: 'D.C. friend. Chicago native. "Brothers ever since." 6 mentions.',
      bookRef: 'Friends chapter', mentions: 6, role: 'inner_circle' },
    { id: 'bk_jillian_martin', label: 'Jillian Martin Esq.', tier: 4, type: 'legal',
      detail: 'Thanked as friend. Licensed attorney. 13 mentions (including "Jillian").',
      bookRef: 'Acknowledgments + Friends', mentions: 13, role: 'friend_attorney' },
    { id: 'bk_kristine_longstreet', label: 'Kristine Longstreet Esq.', tier: 5, type: 'legal',
      detail: 'Thanked as friend. Licensed attorney.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'friend_attorney' },
    { id: 'bk_jewel_ware', label: 'Cmsr. Jewel Ware', tier: 4, type: 'political',
      detail: 'Commissioner. Thanked as friend. Volunteer Margaret Ware also thanked.',
      bookRef: 'Acknowledgments', mentions: 1, role: 'political_ally' },

    // === LOCATIONS AS NODES (for geographic mapping) ===
    { id: 'bk_brandys', label: 'Brandy\'s Restaurant', tier: 0, type: 'location',
      detail: 'Telegraph Rd, Pontiac. Where Langford Morris discussed her morning docket with civilians. ~2006-2007.',
      bookRef: 'Revelation Day', mentions: 1, role: 'crime_scene' },
    { id: 'bk_lutheran_east', label: 'Lutheran East HS', tier: 0, type: 'location',
      detail: '20100 Kelly Rd, Harper Woods MI 48225. Banks\'s actual high school (NOT Denby). Suburban private school.',
      bookRef: 'School and the Extra Push', mentions: 2, role: 'impeachment' },
    { id: 'bk_troy_mall', label: 'Troy (arrest)', tier: 0, type: 'location',
      detail: 'Suburban mall where Banks was arrested for retail fraud. "Troy police arrived." $60K bond.',
      bookRef: 'The Wrong Side of the Bench', mentions: 1, role: 'crime_scene' },
    { id: 'bk_oakland_jail', label: 'Oakland County Jail', tier: 0, type: 'location',
      detail: 'Booked April 2, 1998. Grandfather posted $60K cash bail from credit union.',
      bookRef: 'The Wrong Side of the Bench', mentions: 3, role: 'incarceration' },
    { id: 'bk_baker_college', label: 'Baker College', tier: 0, type: 'location',
      detail: 'Where Banks taught Criminal Justice as adjunct professor — while not bar-admitted. Met "Curtis."',
      bookRef: 'Bank on Banks', mentions: 2, role: 'upl_venue' },
  ];

  // ── BOOK-ADMITTED EDGES ──────────────────────────────────────────
  // Every edge is a relationship described in Banks's own published words.
  // source: 'book' means the relationship is established by party admission.

  var BOOK_EDGES = [
    // === FAMILY SUPPORT (financial enablement) ===
    { source: 'bk_od_banks_sr', target: 'banks', type: 'family', label: '"Only father I knew" — $60K cash bail', flow: 'money', admitted: true },
    { source: 'bk_joyce_banks', target: 'banks', type: 'family', label: 'Mother — attended campaign events', flow: 'influence', admitted: true },
    { source: 'bk_justin', target: 'banks', type: 'family', label: 'Brother — at swearing-in with Holland', flow: 'influence', admitted: true },
    { source: 'bk_marvin_stokes', target: 'banks', type: 'family', label: 'Absent biological father', flow: 'influence', admitted: true },
    { source: 'bk_marvin_stokes', target: 'bk_felicia', type: 'family', label: 'Same father — half-siblings', flow: 'influence', admitted: true },

    // === THE LANGFORD MORRIS ARC (judicial corruption chain) ===
    { source: 'langford_morris', target: 'banks', type: 'judicial', label: '1999: Lenient sentence (probation + tether)', flow: 'power', admitted: true },
    { source: 'langford_morris', target: 'banks', type: 'judicial', label: 'Removed tether early', flow: 'power', admitted: true },
    { source: 'langford_morris', target: 'banks', type: 'judicial', label: '"Go to someone\'s law school!"', flow: 'influence', admitted: true },
    { source: 'bk_roeiah', target: 'langford_morris', type: 'social', label: 'Met judge, exchanged info, arranged lunch', flow: 'influence', admitted: true },
    { source: 'bk_roeiah', target: 'banks', type: 'social', label: '"This is your opportunity to let the judge know"', flow: 'influence', admitted: true },
    { source: 'langford_morris', target: 'bk_brandys', type: 'judicial_misconduct', label: 'Discussed morning docket with civilians at restaurant', flow: 'power', admitted: true },
    { source: 'banks', target: 'langford_morris', type: 'political', label: 'Volunteered on Supreme Court campaign', flow: 'influence', admitted: true },
    { source: 'langford_morris', target: 'banks', type: 'endorsement', label: 'Book foreword for "Brian Banks, J.D."', flow: 'influence', admitted: true },
    { source: 'langford_morris', target: 'banks', type: 'social', label: 'Graduation dinner with "several other judges"', flow: 'influence', admitted: true },

    // === VONDA EVANS ARC ===
    { source: 'vonda_evans', target: 'banks', type: 'social', label: '"Friends almost sixteen years" through mutual attorney', flow: 'influence', admitted: true },
    { source: 'vonda_evans', target: 'banks', type: 'political', label: 'Coined "Bank on Banks" campaign slogan', flow: 'influence', admitted: true },
    { source: 'vonda_evans', target: 'banks', type: 'social', label: 'Hospital bedside — grandfather dying', flow: 'influence', admitted: true },
    { source: 'vonda_evans', target: 'banks', type: 'political', label: 'Campaign strategy advisor', flow: 'power', admitted: true },

    // === CYLENTHIA MILLER ARC ===
    { source: 'miller', target: 'banks', type: 'social', label: '"My mentor in law school, became like family, my big sister"', flow: 'influence', admitted: true },
    { source: 'miller', target: 'banks', type: 'social', label: 'Hospital bedside — grandfather dying (with Vonda Evans)', flow: 'influence', admitted: true },

    // === HOLLAND DOMESTIC UNIT ===
    { source: 'holland', target: 'banks', type: 'family', label: '"Best friend and brother, permanent fixture in our family"', flow: 'influence', admitted: true },
    { source: 'holland', target: 'banks', type: 'social', label: 'First call when FBI arrived — went to attorney together', flow: 'influence', admitted: true },
    { source: 'holland', target: 'bk_ben_gonek', type: 'legal', label: 'At attorney\'s office together during FBI crisis', flow: 'influence', admitted: true },
    { source: 'holland', target: 'bk_od_banks_sr', type: 'family', label: '"Gave grandfather one last haircut" in casket', flow: 'influence', admitted: true },
    { source: 'holland', target: 'banks', type: 'social', label: 'At master\'s graduation, at swearing-in, at hospital', flow: 'influence', admitted: true },

    // === YANCEY (same street, same schools, now judge) ===
    { source: 'yancey', target: 'banks', type: 'social', label: '"Same street, same elementary + high school, one street over now"', flow: 'influence', admitted: true },
    { source: 'yancey', target: 'banks', type: 'political', label: '"Succeeded me after I resigned from office"', flow: 'position', admitted: true },
    { source: 'banks', target: 'yancey', type: 'party_admission', label: 'Banks published: Yancey had "felonies and misdemeanors" + "month or two in jail"', flow: 'influence', admitted: true },

    // === GAY-DAGNOGO ===
    { source: 'gay_dagnogo', target: 'banks', type: 'social', label: '"Friends over twenty-four years through church"', flow: 'influence', admitted: true },
    { source: 'gay_dagnogo', target: 'banks', type: 'social', label: 'Hospital night — grandfather dying (with Vonda Evans)', flow: 'influence', admitted: true },
    { source: 'gay_dagnogo', target: 'banks', type: 'political', label: '"We align on a matter before we\'re in front of others"', flow: 'influence', admitted: true },

    // === STALLWORTH ===
    { source: 'stallworth_t', target: 'banks', type: 'political', label: '"My mentor" — took Banks to Governor Snyder meeting', flow: 'influence', admitted: true },

    // === MSU LAW SCHOOL CHAIN ===
    { source: 'bk_mary_ferguson', target: 'banks', type: 'institutional', label: 'Shepherded into LEO Program', flow: 'power', admitted: true },
    { source: 'bk_mary_ferguson', target: 'bk_roeiah', type: 'institutional', label: 'Shepherded into LEO Program (same day)', flow: 'power', admitted: true },
    { source: 'bk_mary_ferguson', target: 'bk_dean_alsup', type: 'institutional', label: '"Called to see if one of the deans were available"', flow: 'influence', admitted: true },
    { source: 'bk_dean_alsup', target: 'banks', type: 'institutional', label: '"Seemed immediately interested" — admitted to LEO', flow: 'power', admitted: true },
    { source: 'bk_dean_alsup', target: 'bk_roeiah', type: 'institutional', label: 'Admitted to LEO Program', flow: 'power', admitted: true },
    { source: 'bk_prof_mulligan', target: 'banks', type: 'institutional', label: 'Gave the "D" — "D\'s Get Degrees"', flow: 'power', admitted: true },

    // === BMF CONNECTION ===
    { source: 'welch', target: 'banks', type: 'family', label: '"To this day, Toni and I remain close"', flow: 'influence', admitted: true },
    { source: 'welch', target: 'bk_od_banks_sr', type: 'family', label: 'Grandfather cosigned house, went to closing', flow: 'money', admitted: true },

    // === DEFENSE / AG PROSECUTION ===
    { source: 'bk_condino', target: 'banks', type: 'legal', label: 'Defense attorney — Oakland County felonies', flow: 'influence', admitted: true },
    { source: 'bk_ben_gonek', target: 'banks', type: 'legal', label: 'Attorney when FBI arrived — recognized agent', flow: 'influence', admitted: true },

    // === BOOK PRODUCTION ===
    { source: 'bk_tiffanie_lewis', target: 'banks', type: 'vendor', label: 'Book editor — edited "Brian Banks, J.D."', flow: 'influence', admitted: true },
    { source: 'bk_deshon_gale', target: 'banks', type: 'vendor', label: 'Cover designer — created "Brian Banks, J.D." cover', flow: 'influence', admitted: true },
    { source: 'bk_carles_whitlow', target: 'banks', type: 'vendor', label: 'Nine Thirty Marketing + $9,400 Senate campaign', flow: 'money', admitted: true },

    // === CHURCH COVER ===
    { source: 'bk_sheard', target: 'banks', type: 'spiritual', label: '"Wisdom, support, and teaching" — COGIC pastor', flow: 'influence', admitted: true },

    // === ENTERTAINMENT ===
    { source: 'bk_blanche', target: 'banks', type: 'social', label: '"Trusted me to manage her... traveled the world"', flow: 'money', admitted: true },

    // === ACKNOWLEDGED ATTORNEYS ===
    { source: 'bk_jillian_martin', target: 'banks', type: 'legal', label: 'Friend — licensed attorney in network', flow: 'influence', admitted: true },
    { source: 'bk_kristine_longstreet', target: 'banks', type: 'legal', label: 'Friend — licensed attorney in network', flow: 'influence', admitted: true },
    { source: 'bk_schmidtke', target: 'banks', type: 'staff', label: 'Licensed Esq. working under unlicensed Banks', flow: 'position', admitted: true },
    { source: 'bk_fadel', target: 'banks', type: 'staff', label: 'J.D. holder under non-licensed supervisor', flow: 'position', admitted: true },
    { source: 'bk_giallonardo', target: 'banks', type: 'staff', label: 'J.D. holder under non-licensed supervisor', flow: 'position', admitted: true },

    // === POLITICAL ALLIES ===
    { source: 'bk_cathy_garrett', target: 'banks', type: 'political', label: 'Wayne County Clerk — friend', flow: 'influence', admitted: true },
    { source: 'bk_karen_dumas', target: 'banks', type: 'political', label: 'Media/comms figure — friend (Bing\'s former comms chief)', flow: 'influence', admitted: true },
    { source: 'bk_mildred_gaddis', target: 'banks', type: 'political', label: 'Detroit radio host — friend', flow: 'influence', admitted: true },
    { source: 'bk_jewel_ware', target: 'banks', type: 'political', label: 'Commissioner — friend', flow: 'influence', admitted: true },
    { source: 'johnson_l', target: 'banks', type: 'social', label: 'Thanked as friend in acknowledgments', flow: 'influence', admitted: true },
    { source: 'hutchings', target: 'banks', type: 'social', label: 'Thanked as friend — "first client"', flow: 'influence', admitted: true },

    // === NEPO BABY CHAIN (who paid for what) ===
    { source: 'bk_od_banks_sr', target: 'bk_oakland_jail', type: 'money', label: '$60,000 cash bail from credit union', flow: 'money', admitted: true },
    { source: 'bk_od_banks_sr', target: 'banks', type: 'money', label: 'Funded everything — car, housing, school, bail', flow: 'money', admitted: true },
    { source: 'langford_morris', target: 'banks', type: 'judicial', label: 'Probation instead of prison (50+ yrs exposure)', flow: 'power', admitted: true },
  ];

  // ── VALIDATION OVERLAY ──────────────────────────────────────────
  // Map book nodes to existing main network nodes for overlay matching

  // ── COLLAPSED LEGAL REALITIES ─────────────────────────────────────
  // Each person exists across multiple formal systems. The book admissions
  // confirm the social reality that connects these separate legal identities.
  //
  // Pattern: book_name → { main_graph_id, lara_entities[], campaign_finance[], board_seats[], bar_status }
  // This IS the collapse. Every overlay = one more proof the network is real.

  var COLLAPSED = {
    'whitlow': {
      bookName: 'Carles Whitlow', bookRole: 'Nine Thirty Marketing, book cover team',
      mainId: null,
      lara: ['WhitlowBanks LLC (802085022, filed 04/20/2017, Pontiac)', 'Whitlow Forerunner Restaurant Inc (800215280, Muskegon)'],
      campaign: ['$8,500 payee — Banks for Senate (5th largest individual payee)'],
      note: 'Entity name literally = "Whitlow" + "Banks." Filed during Banks career era.'
    },
    'terrence_tarver': {
      bookName: 'Terrence Tarver', bookRole: '"Brothers ever since" — D.C. friend',
      mainId: null,
      lara: ['Right Turn Project — Director (16500 North Park Dr, Southfield)'],
      campaign: [],
      board: ['Right Turn Project — alongside Holland and Carlton Ross'],
      note: 'Banks\'s "brother" is a DIRECTOR of the charity that cycled PAC money through Ross Catering. Same charity never registered with MI AG.'
    },
    'kristine_longstreet': {
      bookName: 'Kristine Longstreet, Esq.', bookRole: 'Thanked as friend in acknowledgments',
      mainId: 'longstreet-kristine',
      lara: [],
      board: ['MacDowell Preparatory Academy — Board Director'],
      bar: 'Licensed attorney',
      note: '"Friend" → Board Director of the school Banks runs. Social relationship predates governance role.'
    },
    'rebecca_fadel': {
      bookName: 'Rebecca Fadel, J.D.', bookRole: 'Legislative staff — J.D. under non-licensed supervisor',
      mainId: null,
      campaign: ['On Yancey campaign payroll'],
      note: 'Banks\'s former staff member now on the payroll of the judge who took his House seat and lives one street over.'
    },
    'karen_dumas': {
      bookName: 'Karen Dumas', bookRole: 'Thanked as friend',
      mainId: 'dumas',
      lara: ['Images & Ideas Inc'],
      campaign: [],
      note: 'Kwame\'s comms chief → Bing\'s comms chief → Banks PR. Book confirms 3-administration bridge.'
    },
    'brandi_neal': {
      bookName: 'Brandi Neal', bookRole: 'Thanked as friend',
      mainId: null,
      campaign: ['$2,000 contributor to Banks for Senate'],
      note: 'Book friendship admission + campaign finance = validated social-financial connection.'
    },
    'jewel_ware': {
      bookName: 'Commissioner Jewel Ware', bookRole: 'Thanked as friend',
      mainId: null,
      campaign: [],
      note: 'Commissioner. Margaret Ware also a "Team Bank on Banks" volunteer — family operation.'
    },
    'sheard': {
      bookName: 'Bishop J. Drew Sheard / Karen Clark-Sheard', bookRole: 'Pastor + First Lady',
      mainId: null,
      lara: ['Greater Emmanuel Institutional COGIC (multiple entity IDs)'],
      note: 'Spiritual institutional cover. COGIC = major denomational presence. Karen Clark-Sheard = The Clark Sisters.'
    },
    'blanche_mcallister': {
      bookName: 'Blanche McAllister-Dykes', bookRole: 'Gospel artist Banks manages',
      mainId: null,
      note: 'Banks served as her music MANAGER while a State Rep. Traveled the world. Performed at legislative events.'
    },
    'iris_taylor': {
      bookName: 'Dr. Iris A. Taylor', bookRole: 'Thanked as friend',
      mainId: null,
      note: 'Appears in 9 case documents — already identified in Banks OSINT brief.'
    },
    'stallworth_thomas': {
      bookName: 'Thomas Stallworth IV (Tommy)', bookRole: '"My mentor" — took Banks to Gov. Snyder meeting',
      mainId: 'stallworth_t',
      lara: ['Stallworth Consulting Group LLC (801840092, filed 10/06/2015)'],
      campaign: ['$1,250 to Banks campaigns'],
      board: [],
      family: 'Married to Nicole Wells Stallworth (MacDowell Board Chair). Father of Misha (DPSCD Board). Brother Keith (federal financial crime plea).',
      note: 'Book says "my mentor Tommy." Found network shows: wife = MacDowell Board Chair, daughter = DPSCD Board, brother = federal plea. The entire dynasty enables Banks.'
    },
    'true_vine': {
      bookName: 'True Vine Publishing Co.', bookRole: 'Publisher — P.O. Box 22448, Nashville TN 37202',
      mainId: null,
      lara: [],
      note: 'Published "Brian Banks, J.D." — the commercial instrument of credential fraud. www.TrueVinePublishing.org. LARA lookup pending.'
    },
    'ben_gonek': {
      bookName: 'Ben Gonek', bookRole: 'Attorney when FBI arrived',
      mainId: null,
      bar: 'Licensed attorney (needs bar search)',
      note: 'Banks and Holland went to his office TOGETHER when FBI showed up. He recognized the FBI agent from prior cases.'
    },
    'condino': {
      bookName: 'Mr. Condino', bookRole: 'Defense attorney — Oakland County felonies',
      mainId: null,
      bar: 'Licensed attorney (needs bar search)',
      note: 'Represented Banks before Langford Morris. Banks could not afford him for tether removal so went pro se.'
    },
    'mary_ferguson': {
      bookName: 'Mary Ferguson', bookRole: 'Director of Diversity Services, MSU College of Law',
      mainId: null,
      note: 'Shepherded Banks + Roeiah into LEO Program. Introduced them to Dean Alsup. The institutional enabler who opened the door to the J.D.'
    },
    'roeiah': {
      bookName: 'Roeiah', bookRole: '33 mentions — bridge between Banks and judiciary',
      mainId: null,
      bar: 'Possible J.D. from MSU Law (LEO Program classmate)',
      note: 'The MOST mentioned non-family name after Langford Morris. Bridge to judiciary. Law school classmate. Bar search needed — if she passed the bar while Banks didn\'t, that\'s another data point.'
    },
  };

  var BOOK_TO_MAIN = {
    'banks': 'banks',
    'holland': 'holland',
    'langford_morris': 'langford_morris',
    'vonda_evans': 'vonda_evans',
    'miller': 'miller',
    'yancey': 'yancey',
    'gay_dagnogo': 'gay_dagnogo',
    'stallworth_t': 'stallworth_t',
    'welch': 'welch',
    'johnson_l': 'johnson_l',
    'hutchings': 'hutchings',
    'bk_karen_dumas': 'dumas',
    'bk_kristine_longstreet': 'longstreet-kristine',
  };

  // Nodes in book but NOT in main network = new targets
  var NEW_TARGETS = BOOK_NODES.filter(function(n) {
    return !BOOK_TO_MAIN[n.id];
  });

  // Edges that VALIDATE existing found network connections
  var VALIDATED = BOOK_EDGES.filter(function(e) {
    return BOOK_TO_MAIN[e.source] && BOOK_TO_MAIN[e.target];
  });

  // ── STATISTICS ───────────────────────────────────────────────────

  var BOOK_STATS = {
    totalNodes: BOOK_NODES.length,
    totalEdges: BOOK_EDGES.length,
    newTargets: NEW_TARGETS.length,
    validatedEdges: VALIDATED.length,
    judgesNamed: BOOK_NODES.filter(function(n) { return n.type === 'judge'; }).length + 3, // +3 for main-graph judges
    attorneysNamed: BOOK_NODES.filter(function(n) { return n.type === 'legal'; }).length,
    topMentions: [
      { name: 'Langford Morris', count: 42 },
      { name: 'Roeiah', count: 33 },
      { name: 'Dean Alsup', count: 21 },
      { name: 'Professor Mulligan', count: 14 },
      { name: 'Jillian (Martin)', count: 13 },
      { name: 'Ebony (Ford)', count: 12 },
      { name: 'Condino', count: 9 },
      { name: 'Vonda Evans', count: 9 },
      { name: 'Holland ("Joe")', count: 8 },
      { name: 'Cylenthia Miller', count: 7 },
      { name: 'Blanche (McAllister)', count: 7 },
    ],
    chapters: [
      'Introduction',
      'A Blended Family',
      'What\'s This Lady\'s Problem?',
      'Who\'s My Daddy?',
      'The Wrong Side of the Bench',
      'Revelation Day',
      'School and the Extra Push',
      'D\'s Get Degrees',
      'Keeping It Together',
      'Bank on Banks',
      'From Law Breaker to Law Maker',
      'When the Bottom Falls Out',
      'Friends, How Many of Us Have Them?',
      'If I Had Known in the Beginning...',
      'Biography'
    ],
    isbn: '173575403X',
    author: 'Brian Banks, J.D.',
    publisher: 'True Vine Publishing Co.',
    published: '2020/2021',
    evidentiary: 'Party admission — MRE 801(d)(2)(A), FRE 801(d)(2)(A)',
  };

  // ── EXPORT ───────────────────────────────────────────────────────

  window.DETROIT_BOOK_NETWORK = {
    nodes: BOOK_NODES,
    edges: BOOK_EDGES,
    collapsed: COLLAPSED,
    bookToMain: BOOK_TO_MAIN,
    newTargets: NEW_TARGETS,
    validated: VALIDATED,
    stats: BOOK_STATS,
    graphData: function() { return { nodes: BOOK_NODES, links: BOOK_EDGES }; },
    mergedData: function(mainNodes, mainEdges) {
      var existingIds = {};
      mainNodes.forEach(function(n) { existingIds[n.id] = true; });
      var newNodes = BOOK_NODES.filter(function(n) { return !existingIds[n.id] && !BOOK_TO_MAIN[n.id]; });
      var allNodes = mainNodes.concat(newNodes);
      var bookEdgesMapped = BOOK_EDGES.map(function(e) {
        return {
          source: BOOK_TO_MAIN[e.source] || e.source,
          target: BOOK_TO_MAIN[e.target] || e.target,
          type: e.type,
          label: '[BOOK] ' + e.label,
          flow: e.flow,
          amount: e.amount || null,
          bookAdmission: true
        };
      });
      return { nodes: allNodes, links: mainEdges.concat(bookEdgesMapped) };
    }
  };

})();
