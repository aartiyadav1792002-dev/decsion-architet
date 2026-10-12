import { LeMondeArticle } from '../types';

export const LEMONDE_ARTICLES: LeMondeArticle[] = [
  {
    id: 'france-nation-on-edge',
    title: 'From farms to high schools, France is a nation on edge',
    frenchTitle: 'Des campagnes aux lycées, la France au bord de la rupture',
    deck: 'The country is wavering between revolt and despair as it faces a whirlwind of crises: devastating heatwaves, spiralling debt, spiking interest rates, rising cost of living, housing shortages, and protests over conditions in high schools.',
    frenchDeck: 'Le pays vacille entre colère et désarroi face à un tourbillon d’épreuves : dette souveraine en hausse, inflation persistante et mobilisation inédite de la jeunesse lycéenne.',
    kicker: 'France in crisis',
    kickerColor: '#c00',
    isSubscriberOnly: true,
    author: 'Sylvia Zappi and Matthieu Goar',
    authorLocation: 'in Paris and Rennes',
    authorRole: 'Senior Domestic Correspondents',
    readTime: '7 min read',
    publishedAt: 'October 12, 2026, 7:15 AM CET',
    section: 'France',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Demonstrators gather outside the Ministry of Education in Paris as nationwide student blockades enter their second week.',
    imageCredit: 'ADRIENNE SURPRENANT/MYOP FOR LE MONDE',
    mostReadRank: 1,
    pullQuote: {
      quote: 'We are witnessing a sudden intersection between agricultural despondency and youth disenchantment that traditional party politics can no longer absorb.',
      attribution: 'Jérôme Fourquet, Director of IFOP Opinion Department'
    },
    content: [
      'In the courtyard of the Lycée Voltaire in eastern Paris, plastic recycling bins were stacked four high against the wrought-iron entrance gates before sunrise on Monday. Chants of “Students united against precarity” bounced off Haussmannian facades as police vans arrived in numbers.',
      'Three hundred kilometers to the southwest, near Poitiers, grain farmers parked heavy tractors across highway roundabouts, protesting diesel tax levies and EU agricultural pacts. While their grievances differ in policy details, the emotional undertone is striking in its symmetry: an exhausting sense that social contracts in the Fifth Republic are fraying at every seam.',
      'Prime Minister Gabriel Attal’s government finds itself squeezed between fiscal orthodoxy dictated by European Union deficit reprimands and a electorate growing increasingly impatient with purchasing-power freezes. With sovereign debt exceeding 112 percent of gross domestic product, the state’s fiscal room for maneuver has effectively vanished.',
      '“Our parents were told to tighten their belts, and now we are told there is no money for classrooms or campus heating,” says 17-year-old Inès, a terminale student leading the Paris assembly. “This is not just about class schedules; it is about our right to envision a tolerable future.”'
    ],
    frenchContent: [
      'Dans la cour du lycée Voltaire, dans l’est parisien, des conteneurs à poubelles bloquaient les grilles dès l’aube ce lundi matin. Les slogans réclamant davantage de moyens pour l’éducation résonnaient dans les rues adjacentes.',
      'Pendant ce temps, dans le Poitou, des exploitants agricoles bloquaient plusieurs échangeurs routiers. Deux mondes a priori distincts mais réunis par un même sentiment de déclassement.',
      'Le gouvernement se retrouve pris en étau entre la discipline budgétaire imposée par Bruxelles et une colère sociale multiforme.',
      '« On nous demande de nous résigner, mais la jeunesse refuse d’hériter d’une société en panne », affirme Inès, 17 ans, déléguée lycéenne.'
    ]
  },
  {
    id: 'high-school-grievances',
    title: "Timetables top list of French high schoolers' grievances to government",
    frenchTitle: 'Emplois du temps : les revendications des lycéens face au ministère',
    deck: 'Unstable schedules, overcrowded classes, and missing substitute teachers have turned daily school life into an administrative ordeal.',
    frenchDeck: 'Horaires décalés, classes surchargées et pénurie d’enseignants : le quotidien des élèves devenu un casse-tête permanent.',
    kicker: 'Education',
    isSubscriberOnly: true,
    author: 'Violaine Morin',
    authorLocation: 'in Paris',
    readTime: '5 min read',
    publishedAt: 'October 12, 2026, 6:30 AM CET',
    section: 'France',
    mostReadRank: 3,
    content: [
      'Beyond broader ideological calls for reform, the spark that ignited recent high school walkouts across France is remarkably concrete: chaotic class schedules.',
      'According to student union surveys, over 40 percent of secondary school students experience weekly schedule holes exceeding three consecutive hours, accompanied by persistent shortages of specialized science and language instructors.',
      'The Ministry of Education has promised an emergency task force, but administrators on the ground cite structural teacher recruitment crises that cannot be patched with short-term decrees.'
    ]
  },
  {
    id: 'france-debt-crisis-global',
    title: "France's debt crisis and high school protests draw global attention",
    frenchTitle: 'La crise de la dette française et les blocages lycéens vus de l’étranger',
    deck: 'French high school student protests have drawn major media coverage and political reactions in the US, Italy, Belgium, and the UK.',
    frenchDeck: 'Les médias internationaux décryptent avec inquiétude les turbulences budgétaires et sociales qui secouent Paris.',
    kicker: 'In Depth',
    isSubscriberOnly: true,
    author: 'Arnaud Leparmentier and Eric Albert',
    authorLocation: 'in New York and London',
    readTime: '4 min read',
    publishedAt: 'October 12, 2026, 8:00 AM CET',
    section: 'Economy',
    isEditorPick: true,
    mostReadRank: 2,
    content: [
      'From London’s financial district to the halls of Capitol Hill in Washington, observers are watching France’s mounting budgetary stalemate with heightened concern.',
      'Bond yield spreads between French OATs and German Bunds have widened to their highest levels since the euro sovereign debt crisis, reflecting investor wariness toward Emmanuel Macron’s minority governing coalition.',
      'International editorial boards note that France’s confrontation between austerity imperatives and civil resistance represents an early stress test for Western European social democracies in an era of elevated borrowing costs.'
    ]
  },
  {
    id: 'glucksmann-primary-win',
    title: 'Raphaël Glucksmann wins French center-left presidential primary',
    frenchTitle: 'Raphaël Glucksmann remporte la primaire du centre-gauche',
    deck: 'The European deputy secured 58% of votes among social-democratic delegates, proposing a pro-European defense surge and green reindustrialization.',
    frenchDeck: 'L’eurodéputé s’impose largement avec 58 % des voix en prônant un réarmement démocratique et écologique de l’Europe.',
    kicker: 'French politics',
    isSubscriberOnly: false,
    author: 'Sandrine Cassini',
    authorLocation: 'in Paris',
    readTime: '4 min read',
    publishedAt: 'October 11, 2026, 10:45 PM CET',
    section: 'French politics',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Raphaël Glucksmann addressing delegates during the center-left convention in Lyon.',
    imageCredit: 'ROMAIN PERROCHEAU/AFP',
    mostReadRank: 4,
    content: [
      'In a decisive internal ballot concluded on Sunday evening, MEP Raphaël Glucksmann secured the presidential nomination for the French center-left coalition, decisively beating more radical socialist factions.',
      'His victory cements a political realignment that emphasizes steadfast military support for Ukraine, robust European strategic sovereignty, and state-backed investments in renewable energy and green industrial infrastructure.',
      '“We cannot confront the rise of authoritarianism with timid compromises,” Glucksmann declared to cheering delegates in Lyon. “France must lead Europe with clear moral conviction and industrial boldness.”'
    ]
  },
  {
    id: 'filiu-column-netanyahu',
    title: "‘Netanyahu’s diatribes against antisemitism aim above all to silence his critics’",
    frenchTitle: '« Les diatribes de Nétanyahou contre l’antisémitisme visent avant tout à museler ses détracteurs »',
    deck: 'Israeli Prime Minister Benjamin Netanyahu uses the fight against antisemitism to legitimize alliances with Jewish supremacists and the European far right, writes historian Jean-Pierre Filiu.',
    frenchDeck: 'En amalgamant toute critique politique à de l’antisémitisme, le premier ministre israélien dévoie un combat vital, analyse Jean-Pierre Filiu.',
    kicker: 'Column',
    isSubscriberOnly: true,
    author: 'Jean-Pierre Filiu',
    authorRole: 'Historian & Professor at Sciences Po',
    authorLocation: 'in Paris',
    readTime: '6 min read',
    publishedAt: 'October 12, 2026, 6:00 AM CET',
    section: 'Opinion',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'AMMAR AWAD/REUTERS',
    mostReadRank: 5,
    pullQuote: {
      quote: 'Weaponizing genuine antisemitic threats to shield far-right government ministers does a grave disservice to Jewish communities worldwide.',
      attribution: 'Jean-Pierre Filiu'
    },
    content: [
      'Whenever international scrutiny focuses on devastating civilian tolls or settler violence in the West Bank, Benjamin Netanyahu’s rhetorical playbook follows an immutable script: identifying any critic with existential hostility toward the Jewish people.',
      'Yet this strategy conceals a troubling irony. The very coalition that Netanyahu heads includes ultra-nationalist ministers whose political ancestry traces directly to militant ideological factions once condemned by Israel’s own founding fathers.',
      'Furthermore, the Israeli premier has systematically cultivated close diplomatic ties with European far-right leaders whose movements historically sheltered antisemitic sympathizers, as long as those politicians endorse unconditional territorial expansion.',
      'By conflating legitimate opposition to government conduct with hatred of Jews, Netanyahu trivializes the urgent, non-negotiable fight against real antisemitism across Western societies.'
    ]
  },
  {
    id: 'thales-azerbaijan-investigation',
    title: 'France investigates Thales contracts in Azerbaijan denounced by jailed former employee',
    frenchTitle: 'La justice française enquête sur les contrats de Thales en Azerbaïdjan',
    deck: '‘A forgotten Frenchman in Baku’ (Part 2). Mehmet Sahan, detained in Azerbaijan after a complaint by Thales, has alleged systematic corruption.',
    frenchDeck: 'Mehmet Sahan, détenu à Bakou depuis 2022, accuse le géant de la défense de corruption dans la région du Caucase.',
    kicker: 'Investigation',
    kickerColor: '#c00',
    isSubscriberOnly: true,
    author: 'Stéphane Mandard and Simon Piel',
    authorLocation: 'in Paris and Baku',
    readTime: '9 min read',
    publishedAt: 'October 12, 2026, 5:45 AM CET',
    section: 'Investigation',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'LEA GIRARDOT/LE MONDE FROM ISTOCK',
    mostReadRank: 6,
    content: [
      'Financial prosecutors from France’s Parquet National Financier (PNF) conducted thorough search operations across Thales executive offices in Courbevoie, following grave allegations of illicit commissions paid in connection with radar and air traffic management contracts in the Caucasus.',
      'The probe was triggered by whistleblower testimonies smuggled from Baku’s Prison No. 1 by former Thales regional engineer Mehmet Sahan, who claims he was framed by local authorities after refusing to sign off on phantom consultancy invoices.',
      'Defense representatives for Thales maintain that all foreign transactions complied strictly with OECD anti-bribery standards, pledging full transparency with investigating magistrates.'
    ]
  },
  {
    id: 'esports-sexual-violence',
    title: "‘We are still in the Middle Ages’: Women on sexual violence in e-sports",
    frenchTitle: '« On est encore au Moyen Âge » : la parole des femmes se libère dans l’e-sport',
    deck: 'Le Monde has learned that a well-known League of Legends streamer and commentator was charged with rape in July, uncovering a male-dominated culture of silence.',
    frenchDeck: 'La mise en examen d’un streamer renommé met en lumière les dérives machistes d’un milieu compétitif peu régulé.',
    kicker: 'Investigation',
    kickerColor: '#c00',
    isSubscriberOnly: true,
    author: 'Aurélien Defer',
    authorLocation: 'in Paris',
    readTime: '9 min read',
    publishedAt: 'October 11, 2026, 3:30 PM CET',
    section: 'Investigation',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'LE MONDE ARCHIVES',
    mostReadRank: 7,
    content: [
      'Beneath the neon glow and lucrative sponsorship deals of professional gaming tournaments lies an unregulated environment where young female streamers and production assistants encounter systemic harassment.',
      'Following a formal indictment handed down by a Paris court in July against a prominent European commentator, dozens of testimonies have reached judicial investigators describing predatory backstage dynamics and retaliation against whistleblowers.',
      'Industry organizers are now facing fierce pressure from major corporate partners to establish independent safeguarding protocols and terminate contracts with abusive talent.'
    ]
  },
  {
    id: 'm-magazine-dark-suit',
    title: 'Is it ever a good idea to... wear a dark suit-shirt-tie combination?',
    frenchTitle: 'Est-ce vraiment une bonne idée de porter un costume noir intégrale ?',
    deck: 'In both fashion and life, it is important to know which boundaries to never cross, or at least when to cross them with sartorial intention.',
    frenchDeck: 'Entre élégance cinématographique et faux-pas vestimentaire, les règles du costume monochrome décryptées.',
    kicker: 'M Le Magazine du Monde',
    isSubscriberOnly: false,
    author: 'Marc Beaugé',
    authorRole: 'Style Critic',
    authorLocation: 'in Paris',
    readTime: '3 min read',
    publishedAt: 'October 11, 2026, 11:00 AM CET',
    section: 'Culture',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'JEAN-MICHEL TIXIER FOR M LE MAGAZINE DU MONDE',
    content: [
      'The all-black or midnight-navy suit, shirt, and tie triumvirate has long oscillated between Reservoir Dogs coolness and high-end catering staff uniforms.',
      'According to M Le Magazine’s arbiter of elegance, the key difference lies in texture and lapel proportion. Matte worsted wool paired with a poplin shirt risks looking like a bodyguard in a B-movie, whereas mixing silk knit ties with textured cashmere achieves genuine Parisian nonchalance.',
      '“Wear it to an opening night at the Palais de Tokyo,” our critic advises, “but never to an 8 AM commercial arbitration meeting.”'
    ]
  },
  {
    id: 'hasan-piker-profile',
    title: "Hasan Piker, the controversial streamer seducing America's radical left",
    frenchTitle: 'Hasan Piker, le streameur qui électrise la gauche radicale américaine',
    deck: 'The 35-year-old has established himself on Twitch as one of the most-followed political commentators in the US, combining socialist critique with streaming entertainment.',
    frenchDeck: 'Sur Twitch, le trentenaire réunit chaque soir des dizaines de milliers de jeunes autour d’analyses politiques sans filtre.',
    kicker: 'Profile',
    isSubscriberOnly: true,
    author: 'Piotr Smolar',
    authorLocation: 'in Washington',
    readTime: '14 min read',
    publishedAt: 'October 10, 2026, 2:00 PM CET',
    section: 'World',
    isEditorPick: true,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'TWITCH / GETTY IMAGES',
    content: [
      'Broadcasting live eight hours a day from his West Hollywood studio, Hasan Piker commands an audience larger than many cable news prime-time lineups.',
      'With razor-sharp rhetoric and gamer irreverence, Piker translates complex anti-imperialist theory and labor union politics for Generation Z, while navigating fierce controversies over his commentary on Middle Eastern geopolitics.'
    ]
  },
  {
    id: 'parcoursup-explainer',
    title: 'Why French students are so angry about Parcoursup, the university admissions platform',
    frenchTitle: 'Pourquoi Parcoursup cristallise-t-il la colère des lycéens ?',
    deck: 'Criticism of France’s algorithmic admissions platform for higher learning institutions is one of the main drivers of student walkouts.',
    frenchDeck: 'L’algorithme d’orientation post-bac continue d’alimenter l’angoisse et le ressentiment des candidats.',
    kicker: 'Explainer',
    isSubscriberOnly: true,
    author: 'Elisabeth Pineau',
    authorLocation: 'in Paris',
    readTime: '4 min read',
    publishedAt: 'October 11, 2026, 4:15 PM CET',
    section: 'France',
    isEditorPick: true,
    content: [
      'Since its introduction in 2018, Parcoursup was billed as an objective system to replace the chaotic lottery of university enrollment.',
      'Yet for hundreds of thousands of French high school seniors, the opaque algorithmic weighting of high school prestige and motivation letters has generated unprecedented levels of stress and perceived unfairness.'
    ]
  },
  {
    id: 'editorial-arrests-france',
    title: 'What the mass arrests of high schoolers say about France',
    frenchTitle: 'Ce que les interpellations massives de lycéens révèlent de la France',
    deck: 'When a republic relies on riot shields to answer adolescent anxieties about education and debt, it reveals a profound institutional paralysis.',
    frenchDeck: 'La réponse policière aux angoisses légitimes de la jeunesse témoigne d’une panne démocratique inquiétante.',
    kicker: 'Editorial',
    isSubscriberOnly: true,
    author: 'The Editorial Board',
    authorLocation: 'Le Monde Editorial Board',
    readTime: '3 min read',
    publishedAt: 'October 12, 2026, 5:00 AM CET',
    section: 'Opinion',
    content: [
      'Images of dozens of students kneeling with their hands behind their heads in front of their lycées have shocked international observers. While illegal blockades and property damage cannot be condoned, treating classroom walkouts primarily as public order violations is a profound political error.',
      'A mature democratic state must engage in dialogue with its youth rather than criminalizing their civic disquiet.'
    ]
  }
];

export const MOST_READ_TITLES = [
  'From farms to high schools, France is a nation on edge',
  'Raphaël Glucksmann wins French center-left presidential primary',
  "Timetables top list of French high schoolers' grievances to government",
  'France investigates Thales contracts in Azerbaijan denounced by jailed former employee',
  "‘Netanyahu’s diatribes against antisemitism aim above all to silence his critics’",
  "‘We are still in the Middle Ages’: Women on sexual violence in e-sports",
  "How the French left wants to reclaim the idea of the nation",
  'Saudi Arabia weighs response after Houthi attack on Riyadh',
  'Is it ever a good idea to... wear a dark suit-shirt-tie combination?',
  'Why French students are so angry about Parcoursup platform'
];

export const DECODEURS_FACT_CHECKS = [
  {
    claim: 'Fact Check: Did the French education budget decrease by 12% this year?',
    verdict: 'FALSE',
    details: 'While inflation reduced real purchasing power, overall education credits were nominally maintained at €63.6 billion.'
  },
  {
    claim: 'Fact Check: Are foreign grain shipments exempt from EU pesticide rules?',
    verdict: 'MOSTLY FALSE',
    details: 'Strict sanitary maximum residue limits apply to all imports, though reciprocity clauses remain debated in Brussels.'
  }
];
