/*
MIT License

Copyright (c) [2018] [Justin Adams]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

var sen = "Dashing through the | <br>\
On a | open sleigh,<br>\
Over the | we go,<br>\
| all the way;<br>\
Bells on | ring,<br>\
Making spirits |,<br>\
What fun it is to | and sing<br>\
A | song tonight<br>\
Jingle | , jingle |,<br>\
| all the way!<br>\
";

/*
Contributors
By Darius Kazemi and Many Wonderful Contributors
https://github.com/dariusk/corpora/graphs/contributors
 */
var nouns = {
    "description": "A list of English nouns.",
    "nouns":
        [ "Armour",
            "Barrymore",
            "Cabot",
            "Catholicism",
            "Chihuahua",
            "Christianity",
            "Easter",
            "Frenchman",
            "Lowry",
            "Mayer",
            "Orientalism",
            "Pharaoh",
            "Pueblo",
            "Pullman",
            "Rodeo",
            "Saturday",
            "Sister",
            "Snead",
            "Syrah",
            "Tuesday",
            "Woodward",
            "abbey",
            "absence",
            "absorption",
            "abstinence",
            "absurdity",
            "abundance",
            "acceptance",
            "accessibility",
            "accommodation",
            "accomplice",
            "accountability",
            "accounting",
            "accreditation",
            "accuracy",
            "acquiescence",
            "acreage",
            "actress",
            "actuality",
            "adage",
            "adaptation",
            "adherence",
            "adjustment",
            "adoption",
            "adultery",
            "advancement",
            "advert",
            "advertisement",
            "advertising",
            "advice",
            "aesthetics",
            "affinity",
            "aggression",
            "agriculture",
            "aircraft",
            "airtime",
            "allegation",
            "allegiance",
            "allegory",
            "allergy",
            "allies",
            "alligator",
            "allocation",
            "allotment",
            "altercation",
            "ambulance",
            "ammonia",
            "anatomy",
            "anemia",
            "ankle",
            "announcement",
            "annoyance",
            "annuity",
            "anomaly",
            "anthropology",
            "anxiety",
            "apartheid",
            "apologise",
            "apostle",
            "apparatus",
            "appeasement",
            "appellation",
            "appendix",
            "applause",
            "appointment",
            "appraisal",
            "archery",
            "archipelago",
            "architecture",
            "ardor",
            "arrears",
            "arrow",
            "artisan",
            "artistry",
            "ascent",
            "assembly",
            "assignment",
            "association",
            "asthma",
            "atheism",
            "attacker",
            "attraction",
            "attractiveness",
            "auspices",
            "authority",
            "avarice",
            "aversion",
            "aviation",
            "babbling",
            "backlash",
            "baker",
            "ballet",
            "balls",
            "banjo",
            "baron",
            "barrier",
            "barrister",
            "bases",
            "basin",
            "basis",
            "battery",
            "battling",
            "bedtime",
            "beginner",
            "begun",
            "bending",
            "bicycle",
            "billing",
            "bingo",
            "biography",
            "biology",
            "birthplace",
            "blackberry",
            "blather",
            "blossom",
            "boardroom",
            "boasting",
            "bodyguard",
            "boldness",
            "bomber",
            "bondage",
            "bonding",
            "bones",
            "bonus",
            "bookmark",
            "boomer",
            "booty",
            "bounds",
            "bowling",
            "brainstorming",
            "breadth",
            "breaker",
            "brewer",
            "brightness",
            "broccoli",
            "broth",
            "brotherhood",
            "browsing",
            "brunch",
            "brunt",
            "building",
            "bullion",
            "bureaucracy",
            "burglary",
            "buyout",
            "by-election",
            "cabal",
            "cabbage",
            "calamity",
            "campaign",
            "canonization",
            "captaincy",
            "carcass",
            "carrier",
            "cartridge",
            "cassette",
            "catfish",
            "caught",
            "celebrity",
            "cemetery",
            "certainty",
            "certification",
            "charade",
            "chasm",
            "check-in",
            "cheerleader",
            "cheesecake",
            "chemotherapy",
            "chili",
            "china",
            "chivalry",
            "cholera",
            "cilantro",
            "circus",
            "civilisation",
            "civility",
            "clearance",
            "clearing",
            "clerk",
            "climber",
            "closeness",
            "clothing",
            "clutches",
            "coaster",
            "coconut",
            "coding",
            "collaborator",
            "colleague",
            "college",
            "collision",
            "colors",
            "combustion",
            "comedian",
            "comer",
            "commander",
            "commemoration",
            "commenter",
            "commissioner",
            "commune",
            "competition",
            "completeness",
            "complexity",
            "computing",
            "comrade",
            "concur",
            "condominium",
            "conduit",
            "confidant",
            "configuration",
            "confiscation",
            "conflagration",
            "conflict",
            "consist",
            "consistency",
            "consolidation",
            "conspiracy",
            "constable",
            "consul",
            "consultancy",
            "contentment",
            "contents",
            "contractor",
            "conversation",
            "cornerstone",
            "corpus",
            "correlation",
            "councilman",
            "counselor",
            "countdown",
            "countryman",
            "coverage",
            "covering",
            "coyote",
            "cracker",
            "creator",
            "criminality",
            "crocodile",
            "cropping",
            "cross-examination",
            "crossover",
            "crossroads",
            "culprit",
            "cumin",
            "curator",
            "curfew",
            "cursor",
            "custard",
            "cutter",
            "cyclist",
            "cyclone",
            "cylinder",
            "cynicism",
            "daddy",
            "damsel",
            "darkness",
            "dawning",
            "daybreak",
            "dealing",
            "dedication",
            "deduction",
            "defection",
            "deference",
            "deficiency",
            "definition",
            "deflation",
            "degeneration",
            "delegation",
            "delicacy",
            "delirium",
            "deliverance",
            "demeanor",
            "demon",
            "demonstration",
            "denomination",
            "dentist",
            "departure",
            "depletion",
            "depression",
            "designation",
            "despotism",
            "detention",
            "developer",
            "devolution",
            "dexterity",
            "diagnosis",
            "dialect",
            "differentiation",
            "digger",
            "digress",
            "dioxide",
            "diploma",
            "disability",
            "disarmament",
            "discord",
            "discovery",
            "dishonesty",
            "dismissal",
            "disobedience",
            "dispatcher",
            "disservice",
            "distribution",
            "distributor",
            "diver",
            "diversity",
            "docking",
            "dollar",
            "dominance",
            "domination",
            "dominion",
            "donkey",
            "doorstep",
            "doorway",
            "dossier",
            "downside",
            "drafting",
            "drank",
            "drilling",
            "driver",
            "drumming",
            "drunkenness",
            "duchess",
            "ducking",
            "dugout",
            "dumps",
            "dwelling",
            "dynamics",
            "eagerness",
            "earnestness",
            "earnings",
            "eater",
            "editor",
            "effectiveness",
            "electricity",
            "elements",
            "eloquence",
            "emancipation",
            "embodiment",
            "embroidery",
            "emperor",
            "employment",
            "encampment",
            "enclosure",
            "encouragement",
            "endangerment",
            "enlightenment",
            "enthusiasm",
            "environment",
            "environs",
            "envoy",
            "epilepsy",
            "equation",
            "equator",
            "error",
            "espionage",
            "estimation",
            "evacuation",
            "exaggeration",
            "examination",
            "exclamation",
            "expediency",
            "exploitation",
            "extinction",
            "eyewitness",
            "falls",
            "fascism",
            "fastball",
            "feces",
            "feedback",
            "ferocity",
            "fertilization",
            "fetish",
            "finale",
            "firing",
            "fixing",
            "flashing",
            "flask",
            "flora",
            "fluke",
            "folklore",
            "follower",
            "foothold",
            "footing",
            "forefinger",
            "forefront",
            "forgiveness",
            "formality",
            "formation",
            "formula",
            "foyer",
            "fragmentation",
            "framework",
            "fraud",
            "freestyle",
            "frequency",
            "friendliness",
            "fries",
            "frigate",
            "fulfillment",
            "function",
            "functionality",
            "fundraiser",
            "fusion",
            "futility",
            "gallantry",
            "gallery",
            "genesis",
            "genitals",
            "girlfriend",
            "glamour",
            "glitter",
            "glucose",
            "google",
            "grandeur",
            "grappling",
            "greens",
            "gridlock",
            "grocer",
            "groundwork",
            "grouping",
            "gunman",
            "gusto",
            "habitation",
            "hacker",
            "hallway",
            "hamburger",
            "hammock",
            "handling",
            "hands",
            "handshake",
            "happiness",
            "hardship",
            "headcount",
            "header",
            "headquarters",
            "heads",
            "headset",
            "hearth",
            "hearts",
            "heath",
            "hegemony",
            "height",
            "hello",
            "helper",
            "helping",
            "helplessness",
            "hierarchy",
            "hoarding",
            "hockey",
            "homeland",
            "homer",
            "honesty",
            "horror",
            "horseman",
            "hostility",
            "housing",
            "humility",
            "hurricane",
            "iceberg",
            "ignition",
            "illness",
            "illustration",
            "illustrator",
            "immunity",
            "immunization",
            "imperialism",
            "imprisonment",
            "inaccuracy",
            "inaction",
            "inactivity",
            "inauguration",
            "indecency",
            "indicator",
            "inevitability",
            "infamy",
            "infiltration",
            "influx",
            "iniquity",
            "innocence",
            "innovation",
            "insanity",
            "inspiration",
            "instruction",
            "instructor",
            "insurer",
            "interact",
            "intercession",
            "intercourse",
            "intermission",
            "interpretation",
            "intersection",
            "interval",
            "intolerance",
            "intruder",
            "invasion",
            "investment",
            "involvement",
            "irrigation",
            "iteration",
            "jenny",
            "jogging",
            "jones",
            "joseph",
            "juggernaut",
            "juncture",
            "jurisprudence",
            "juror",
            "kangaroo",
            "kingdom",
            "knocking",
            "laborer",
            "larceny",
            "laurels",
            "layout",
            "leadership",
            "leasing",
            "legislation",
            "leopard",
            "liberation",
            "licence",
            "lifeblood",
            "lifeline",
            "ligament",
            "lighting",
            "likeness",
            "line-up",
            "lineage",
            "liner",
            "lineup",
            "liquidation",
            "listener",
            "literature",
            "litigation",
            "litre",
            "loathing",
            "locality",
            "lodging",
            "logic",
            "longevity",
            "lookout",
            "lordship",
            "lustre",
            "ma'am",
            "machinery",
            "madness",
            "magnificence",
            "mahogany",
            "mailing",
            "mainframe",
            "maintenance",
            "majority",
            "manga",
            "mango",
            "manifesto",
            "mantra",
            "manufacturer",
            "maple",
            "martin",
            "martyrdom",
            "mathematician",
            "matrix",
            "matron",
            "mayhem",
            "mayor",
            "means",
            "meantime",
            "measurement",
            "mechanics",
            "mediator",
            "medics",
            "melodrama",
            "memory",
            "mentality",
            "metaphysics",
            "method",
            "metre",
            "miner",
            "mirth",
            "misconception",
            "misery",
            "mishap",
            "misunderstanding",
            "mobility",
            "molasses",
            "momentum",
            "monarchy",
            "monument",
            "morale",
            "mortality",
            "motto",
            "mouthful",
            "mouthpiece",
            "mover",
            "movie",
            "mowing",
            "murderer",
            "musician",
            "mutation",
            "mythology",
            "narration",
            "narrator",
            "nationality",
            "negligence",
            "neighborhood",
            "neighbour",
            "nervousness",
            "networking",
            "nexus",
            "nightmare",
            "nobility",
            "nobody",
            "noodle",
            "normalcy",
            "notification",
            "nourishment",
            "novella",
            "nucleus",
            "nuisance",
            "nursery",
            "nutrition",
            "nylon",
            "oasis",
            "obscenity",
            "obscurity",
            "observer",
            "offense",
            "onslaught",
            "operation",
            "opportunity",
            "opposition",
            "oracle",
            "orchestra",
            "organisation",
            "organizer",
            "orientation",
            "originality",
            "ounce",
            "outage",
            "outcome",
            "outdoors",
            "outfield",
            "outing",
            "outpost",
            "outset",
            "overseer",
            "owner",
            "oxygen",
            "pairing",
            "panther",
            "paradox",
            "parliament",
            "parsley",
            "parson",
            "passenger",
            "pasta",
            "patchwork",
            "pathos",
            "patriotism",
            "pendulum",
            "penguin",
            "permission",
            "persona",
            "perusal",
            "pessimism",
            "peter",
            "philosopher",
            "phosphorus",
            "phrasing",
            "physique",
            "piles",
            "plateau",
            "playing",
            "plaza",
            "plethora",
            "plurality",
            "pneumonia",
            "pointer",
            "poker",
            "policeman",
            "polling",
            "poster",
            "posterity",
            "posting",
            "postponement",
            "potassium",
            "pottery",
            "poultry",
            "pounding",
            "pragmatism",
            "precedence",
            "precinct",
            "preoccupation",
            "pretense",
            "priesthood",
            "prisoner",
            "privacy",
            "probation",
            "proceeding",
            "proceedings",
            "processing",
            "processor",
            "progression",
            "projection",
            "prominence",
            "propensity",
            "prophecy",
            "prorogation",
            "prospectus",
            "protein",
            "prototype",
            "providence",
            "provider",
            "provocation",
            "proximity",
            "puberty",
            "publicist",
            "publicity",
            "publisher",
            "pundit",
            "putting",
            "quantity",
            "quart",
            "quilting",
            "quorum",
            "racism",
            "radiance",
            "ralph",
            "rancher",
            "ranger",
            "rapidity",
            "rapport",
            "ratification",
            "rationality",
            "reaction",
            "reader",
            "reassurance",
            "rebirth",
            "receptor",
            "recipe",
            "recognition",
            "recourse",
            "recreation",
            "rector",
            "recurrence",
            "redemption",
            "redistribution",
            "redundancy",
            "refinery",
            "reformer",
            "refrigerator",
            "regularity",
            "regulator",
            "reinforcement",
            "reins",
            "reinstatement",
            "relativism",
            "relaxation",
            "rendition",
            "repayment",
            "repentance",
            "repertoire",
            "repository",
            "republic",
            "reputation",
            "resentment",
            "residency",
            "resignation",
            "restaurant",
            "resurgence",
            "retailer",
            "retention",
            "retirement",
            "reviewer",
            "riches",
            "righteousness",
            "roadblock",
            "robber",
            "rocks",
            "rubbing",
            "runoff",
            "saloon",
            "salvation",
            "sarcasm",
            "saucer",
            "savior",
            "scarcity",
            "scenario",
            "scenery",
            "schism",
            "scholarship",
            "schoolboy",
            "schooner",
            "scissors",
            "scolding",
            "scooter",
            "scouring",
            "scrimmage",
            "scrum",
            "seating",
            "sediment",
            "seduction",
            "seeder",
            "seizure",
            "self-confidence",
            "self-control",
            "self-respect",
            "semicolon",
            "semiconductor",
            "semifinal",
            "senator",
            "sending",
            "serenity",
            "seriousness",
            "servitude",
            "sesame",
            "setup",
            "sewing",
            "sharpness",
            "shaving",
            "shoplifting",
            "shopping",
            "siding",
            "simplicity",
            "simulation",
            "sinking",
            "skate",
            "sloth",
            "slugger",
            "snack",
            "snail",
            "snapshot",
            "snark",
            "soccer",
            "solemnity",
            "solicitation",
            "solitude",
            "somewhere",
            "sophistication",
            "sorcery",
            "souvenir",
            "spaghetti",
            "specification",
            "specimen",
            "specs",
            "spectacle",
            "spectre",
            "speculation",
            "sperm",
            "spoiler",
            "squad",
            "squid",
            "staging",
            "stagnation",
            "staircase",
            "stairway",
            "stamina",
            "standpoint",
            "standstill",
            "stanza",
            "statement",
            "stillness",
            "stimulus",
            "stocks",
            "stole",
            "stoppage",
            "storey",
            "storyteller",
            "stylus",
            "subcommittee",
            "subscription",
            "subsidy",
            "suburb",
            "success",
            "sufferer",
            "supposition",
            "suspension",
            "sweater",
            "sweepstakes",
            "swimmer",
            "syndrome",
            "synopsis",
            "syntax",
            "system",
            "tablespoon",
            "taker",
            "tavern",
            "technology",
            "telephony",
            "template",
            "tempo",
            "tendency",
            "tendon",
            "terrier",
            "terror",
            "terry",
            "theater",
            "theology",
            "therapy",
            "thicket",
            "thoroughfare",
            "threshold",
            "thriller",
            "thunderstorm",
            "ticker",
            "tiger",
            "tights",
            "to-day",
            "tossing",
            "touchdown",
            "tourist",
            "tourney",
            "toxicity",
            "tracing",
            "tractor",
            "translation",
            "transmission",
            "transmitter",
            "trauma",
            "traveler",
            "treadmill",
            "trilogy",
            "trout",
            "tuning",
            "twenties",
            "tycoon",
            "tyrant",
            "ultimatum",
            "underdog",
            "underwear",
            "unhappiness",
            "unification",
            "university",
            "uprising",
            "vaccination",
            "validity",
            "vampire",
            "vanguard",
            "variation",
            "vegetation",
            "verification",
            "viability",
            "vicinity",
            "victory",
            "viewpoint",
            "villa",
            "vindication",
            "violation",
            "vista",
            "vocalist",
            "vogue",
            "volcano",
            "voltage",
            "vomiting",
            "vulnerability",
            "waistcoat",
            "waitress",
            "wardrobe",
            "warmth",
            "watchdog",
            "wealth",
            "weariness",
            "whereabouts",
            "whisky",
            "whiteness",
            "widget",
            "width",
            "windfall",
            "wiring",
            "witchcraft",
            "withholding",
            "womanhood",
            "words",
            "workman",
            "youngster" ]
};
var adjs = {
    "description": "A list of English adjectives.",
    "adjs":
        [ "Aristotelian",
            "Arthurian",
            "Bohemian",
            "Brethren",
            "Mosaic",
            "Oceanic",
            "Proctor",
            "Terran",
            "Tudor",
            "abroad",
            "absorbing",
            "abstract",
            "academic",
            "accelerated",
            "accented",
            "accountant",
            "acquainted",
            "acute",
            "addicting",
            "addictive",
            "adjustable",
            "admired",
            "adult",
            "adverse",
            "advised",
            "aerosol",
            "afraid",
            "aggravated",
            "aggressive",
            "agreeable",
            "alienate",
            "aligned",
            "all-round",
            "alleged",
            "almond",
            "alright",
            "altruistic",
            "ambient",
            "ambivalent",
            "amiable",
            "amino",
            "amorphous",
            "amused",
            "anatomical",
            "ancestral",
            "angelic",
            "angrier",
            "answerable",
            "antiquarian",
            "antiretroviral",
            "appellate",
            "applicable",
            "apportioned",
            "approachable",
            "appropriated",
            "archer",
            "aroused",
            "arrested",
            "assertive",
            "assigned",
            "athletic",
            "atrocious",
            "attained",
            "authoritarian",
            "autobiographical",
            "avaricious",
            "avocado",
            "awake",
            "awsome",
            "backstage",
            "backwoods",
            "balding",
            "bandaged",
            "banded",
            "banned",
            "barreled",
            "battle",
            "beaten",
            "begotten",
            "beguiled",
            "bellied",
            "belted",
            "beneficent",
            "besieged",
            "betting",
            "big-money",
            "biggest",
            "biochemical",
            "bipolar",
            "blackened",
            "blame",
            "blessed",
            "blindfolded",
            "bloat",
            "blocked",
            "blooded",
            "blue-collar",
            "blushing",
            "boastful",
            "bolder",
            "bolstered",
            "bonnie",
            "bored",
            "boundary",
            "bounded",
            "bounding",
            "branched",
            "brawling",
            "brazen",
            "breeding",
            "bridged",
            "brimming",
            "brimstone",
            "broadest",
            "broiled",
            "broker",
            "bronze",
            "bruising",
            "buffy",
            "bullied",
            "bungling",
            "burial",
            "buttery",
            "candied",
            "canonical",
            "cantankerous",
            "cardinal",
            "carefree",
            "caretaker",
            "casual",
            "cathartic",
            "causal",
            "chapel",
            "characterized",
            "charcoal",
            "cheeky",
            "cherished",
            "chipotle",
            "chirping",
            "chivalrous",
            "circumstantial",
            "civic",
            "civil",
            "civilised",
            "clanking",
            "clapping",
            "claptrap",
            "classless",
            "cleansed",
            "cleric",
            "cloistered",
            "codified",
            "colloquial",
            "colour",
            "combat",
            "combined",
            "comely",
            "commissioned",
            "commonplace",
            "commuter",
            "commuting",
            "comparable",
            "complementary",
            "compromising",
            "conceding",
            "concentrated",
            "conceptual",
            "conditioned",
            "confederate",
            "confident",
            "confidential",
            "confining",
            "confuse",
            "congressional",
            "consequential",
            "conservative",
            "constituent",
            "contaminated",
            "contemporaneous",
            "contraceptive",
            "convertible",
            "convex",
            "cooked",
            "coronary",
            "corporatist",
            "correlated",
            "corroborated",
            "cosmic",
            "cover",
            "crash",
            "crypto",
            "culminate",
            "cushioned",
            "dandy",
            "dashing",
            "dazzled",
            "decreased",
            "decrepit",
            "dedicated",
            "defaced",
            "defective",
            "defenseless",
            "deluded",
            "deodorant",
            "departed",
            "depress",
            "designing",
            "despairing",
            "destitute",
            "detective",
            "determined",
            "devastating",
            "deviant",
            "devilish",
            "devoted",
            "diagonal",
            "dictated",
            "didactic",
            "differentiated",
            "diffused",
            "dirtier",
            "disabling",
            "disconnected",
            "discovered",
            "disdainful",
            "diseased",
            "disfigured",
            "disheartened",
            "disheveled",
            "disillusioned",
            "disparate",
            "dissident",
            "doable",
            "doctrinal",
            "doing",
            "dotted",
            "double-blind",
            "downbeat",
            "dozen",
            "draining",
            "draught",
            "dread",
            "dried",
            "dropped",
            "dulled",
            "duplicate",
            "eaten",
            "echoing",
            "economical",
            "elaborated",
            "elastic",
            "elective",
            "electoral",
            "elven",
            "embryo",
            "emerald",
            "emergency",
            "emissary",
            "emotional",
            "employed",
            "enamel",
            "encased",
            "encrusted",
            "endangered",
            "engraved",
            "engrossing",
            "enlarged",
            "enlisted",
            "enlivened",
            "ensconced",
            "entangled",
            "enthralling",
            "entire",
            "envious",
            "eradicated",
            "eroded",
            "esoteric",
            "essential",
            "evaporated",
            "ever-present",
            "evergreen",
            "everlasting",
            "exacting",
            "exasperated",
            "excess",
            "exciting",
            "executable",
            "existent",
            "exonerated",
            "exorbitant",
            "exponential",
            "export",
            "extraordinary",
            "exultant",
            "exulting",
            "facsimile",
            "fading",
            "fainter",
            "faith-based",
            "fallacious",
            "faltering",
            "famous",
            "fancier",
            "fast-growing",
            "fated",
            "favourable",
            "fearless",
            "feathered",
            "fellow",
            "fermented",
            "ferocious",
            "fiddling",
            "filling",
            "firmer",
            "fitted",
            "flammable",
            "flawed",
            "fledgling",
            "fleshy",
            "flexible",
            "flickering",
            "floral",
            "flowering",
            "flowing",
            "foggy",
            "folic",
            "foolhardy",
            "foolish",
            "footy",
            "forehand",
            "forked",
            "formative",
            "formulaic",
            "foul-mouthed",
            "fractional",
            "fragrant",
            "fraudulent",
            "freakish",
            "freckled",
            "freelance",
            "freight",
            "fresh",
            "fretted",
            "frugal",
            "fulfilling",
            "fuming",
            "funded",
            "funny",
            "garbled",
            "gathered",
            "geologic",
            "geometric",
            "gibberish",
            "gilded",
            "ginger",
            "glare",
            "glaring",
            "gleaming",
            "glorified",
            "glorious",
            "goalless",
            "gold-plated",
            "goody",
            "grammatical",
            "grande",
            "grateful",
            "gratuitous",
            "graven",
            "greener",
            "grinding",
            "grizzly",
            "groaning",
            "grudging",
            "guaranteed",
            "gusty",
            "half-breed",
            "hand-held",
            "handheld",
            "hands-off",
            "hard-pressed",
            "harlot",
            "healing",
            "healthier",
            "healthiest",
            "heart",
            "heart-shaped",
            "heathen",
            "hedonistic",
            "heralded",
            "herbal",
            "high-density",
            "high-performance",
            "high-res",
            "high-yield",
            "hissy",
            "hitless",
            "holiness",
            "homesick",
            "honorable",
            "hooded",
            "hopeless",
            "horrendous",
            "horrible",
            "hot-button",
            "huddled",
            "human",
            "humbling",
            "humid",
            "humiliating",
            "hypnotized",
            "idealistic",
            "idiosyncratic",
            "ignited",
            "illustrated",
            "illustrative",
            "imitated",
            "immense",
            "immersive",
            "immigrant",
            "immoral",
            "impassive",
            "impressionable",
            "improbable",
            "impulsive",
            "in-between",
            "in-flight",
            "inattentive",
            "inbound",
            "inbounds",
            "incalculable",
            "incomprehensible",
            "indefatigable",
            "indigo",
            "indiscriminate",
            "indomitable",
            "inert",
            "inflate",
            "inform",
            "inheriting",
            "injured",
            "injurious",
            "inking",
            "inoffensive",
            "insane",
            "insensible",
            "insidious",
            "insincere",
            "insistent",
            "insolent",
            "insufferable",
            "intemperate",
            "interdependent",
            "interesting",
            "interfering",
            "intern",
            "interpreted",
            "intersecting",
            "intolerable",
            "intolerant",
            "intuitive",
            "irresolute",
            "irritate",
            "jealous",
            "jerking",
            "joining",
            "joint",
            "journalistic",
            "joyful",
            "keyed",
            "knowing",
            "lacklustre",
            "laden",
            "lagging",
            "lamented",
            "laughable",
            "layered",
            "leather",
            "leathern",
            "leery",
            "left-footed",
            "legible",
            "leisure",
            "lessening",
            "liberating",
            "life-size",
            "lifted",
            "lightest",
            "limitless",
            "listening",
            "literary",
            "liver",
            "livid",
            "lobster",
            "locked",
            "long-held",
            "long-lasting",
            "long-running",
            "long-suffering",
            "loudest",
            "loveliest",
            "low-budget",
            "low-carb",
            "lowering",
            "lucid",
            "luckless",
            "lusty",
            "luxurious",
            "magazine",
            "maniac",
            "manmade",
            "maroon",
            "mastered",
            "mated",
            "material",
            "materialistic",
            "meaningful",
            "measuring",
            "mediaeval",
            "medical",
            "meditated",
            "medley",
            "melodic",
            "memorable",
            "memorial",
            "metabolic",
            "metallic",
            "metallurgical",
            "metering",
            "midair",
            "midterm",
            "midway",
            "mighty",
            "migrating",
            "mind-blowing",
            "mind-boggling",
            "minor",
            "mirrored",
            "misguided",
            "misshapen",
            "mitigated",
            "mixed",
            "modernized",
            "molecular",
            "monarch",
            "monastic",
            "morbid",
            "motley",
            "motorized",
            "mounted",
            "multi-million",
            "multidisciplinary",
            "muscled",
            "muscular",
            "muted",
            "mysterious",
            "mythic",
            "nail-biting",
            "natural",
            "nauseous",
            "negative",
            "networked",
            "neurological",
            "neutered",
            "newest",
            "night",
            "nitrous",
            "no-fly",
            "noncommercial",
            "nonsense",
            "north",
            "nuanced",
            "occurring",
            "offensive",
            "oldest",
            "oncoming",
            "one-eyed",
            "one-year",
            "onstage",
            "onward",
            "opaque",
            "open-ended",
            "operating",
            "opportunist",
            "opposing",
            "opt-in",
            "ordinate",
            "outdone",
            "outlaw",
            "outsized",
            "overboard",
            "overheated",
            "oversize",
            "overworked",
            "oyster",
            "paced",
            "panting",
            "paralyzed",
            "paramount",
            "parental",
            "parted",
            "partisan",
            "passive",
            "pastel",
            "patriot",
            "peacekeeping",
            "pedestrian",
            "peevish",
            "penal",
            "penned",
            "pensive",
            "perceptual",
            "perky",
            "permissible",
            "pernicious",
            "perpetuate",
            "perplexed",
            "pervasive",
            "petrochemical",
            "philosophical",
            "picturesque",
            "pillaged",
            "piped",
            "piquant",
            "pitching",
            "plausible",
            "pliable",
            "plumb",
            "politician",
            "polygamous",
            "poorest",
            "portmanteau",
            "posed",
            "positive",
            "possible",
            "postpartum",
            "prank",
            "pre-emptive",
            "precocious",
            "predicted",
            "premium",
            "preparatory",
            "prerequisite",
            "prescient",
            "preserved",
            "presidential",
            "pressed",
            "pressurized",
            "presumed",
            "prewar",
            "priced",
            "pricier",
            "primal",
            "primer",
            "primetime",
            "printed",
            "private",
            "problem",
            "procedural",
            "process",
            "prodigious",
            "professional",
            "programmed",
            "progressive",
            "prolific",
            "promising",
            "promulgated",
            "pronged",
            "proportionate",
            "protracted",
            "pulled",
            "pulsed",
            "purgatory",
            "quick",
            "rapid-fire",
            "raunchy",
            "razed",
            "reactive",
            "readable",
            "realizing",
            "recognised",
            "recovering",
            "recurrent",
            "recycled",
            "redeemable",
            "reflecting",
            "regal",
            "registering",
            "reliable",
            "reminiscent",
            "remorseless",
            "removable",
            "renewable",
            "repeating",
            "repellent",
            "reserve",
            "resigned",
            "respectful",
            "rested",
            "restrict",
            "resultant",
            "retaliatory",
            "retiring",
            "revelatory",
            "reverend",
            "reversing",
            "revolving",
            "ridiculous",
            "right-hand",
            "ringed",
            "risque",
            "robust",
            "roomful",
            "rotating",
            "roused",
            "rubber",
            "run-down",
            "running",
            "runtime",
            "rustling",
            "safest",
            "salient",
            "sanctioned",
            "saute",
            "saved",
            "scandalized",
            "scarlet",
            "scattering",
            "sceptical",
            "scheming",
            "scoundrel",
            "scratched",
            "scratchy",
            "scrolled",
            "seated",
            "second-best",
            "segregated",
            "self-taught",
            "semiautomatic",
            "senior",
            "sensed",
            "sentient",
            "sexier",
            "shadowy",
            "shaken",
            "shaker",
            "shameless",
            "shaped",
            "shiny",
            "shipped",
            "shivering",
            "shoestring",
            "short",
            "short-lived",
            "signed",
            "simplest",
            "simplistic",
            "sizable",
            "skeleton",
            "skinny",
            "skirting",
            "skyrocketed",
            "slamming",
            "slanting",
            "slapstick",
            "sleek",
            "sleepless",
            "sleepy",
            "slender",
            "slimmer",
            "smacking",
            "smokeless",
            "smothered",
            "smouldering",
            "snuff",
            "socialized",
            "solid-state",
            "sometime",
            "sought",
            "spanking",
            "sparing",
            "spattered",
            "specialized",
            "specific",
            "speedy",
            "spherical",
            "spiky",
            "spineless",
            "sprung",
            "squint",
            "stainless",
            "standing",
            "starlight",
            "startled",
            "stately",
            "statewide",
            "stereoscopic",
            "sticky",
            "stimulant",
            "stinky",
            "stoked",
            "stolen",
            "storied",
            "strained",
            "strapping",
            "strengthened",
            "stubborn",
            "stylized",
            "suave",
            "subjective",
            "subjugated",
            "subordinate",
            "succeeding",
            "suffering",
            "summary",
            "sunset",
            "sunshine",
            "supernatural",
            "supervisory",
            "supply-side",
            "surrogate",
            "suspended",
            "suspenseful",
            "swarthy",
            "sweating",
            "sweeping",
            "swinging",
            "swooning",
            "sympathize",
            "synchronized",
            "synonymous",
            "synthetic",
            "tailed",
            "tallest",
            "tangible",
            "tanked",
            "tarry",
            "technical",
            "tectonic",
            "telepathic",
            "tenderest",
            "territorial",
            "testimonial",
            "theistic",
            "thicker",
            "threatening",
            "tight-lipped",
            "timed",
            "timely",
            "timid",
            "torrent",
            "totalled",
            "tougher",
            "traditional",
            "transformed",
            "trapped",
            "traveled",
            "traverse",
            "treated",
            "trial",
            "trunk",
            "trusting",
            "trying",
            "twisted",
            "two-lane",
            "tyrannical",
            "unaided",
            "unassisted",
            "unassuming",
            "unattractive",
            "uncapped",
            "uncomfortable",
            "uncontrolled",
            "uncooked",
            "uncooperative",
            "underground",
            "undersea",
            "undisturbed",
            "unearthly",
            "uneasy",
            "unequal",
            "unfazed",
            "unfinished",
            "unforeseen",
            "unforgivable",
            "unidentified",
            "unimaginative",
            "uninspired",
            "unintended",
            "uninvited",
            "universal",
            "unmasked",
            "unorthodox",
            "unparalleled",
            "unpleasant",
            "unprincipled",
            "unread",
            "unreasonable",
            "unregulated",
            "unreliable",
            "unremitting",
            "unsafe",
            "unsanitary",
            "unsealed",
            "unsuccessful",
            "unsupervised",
            "untimely",
            "unwary",
            "unwrapped",
            "uppity",
            "upstart",
            "useless",
            "utter",
            "valiant",
            "valid",
            "valued",
            "vanilla",
            "vaulting",
            "vaunted",
            "veering",
            "vegetative",
            "vented",
            "verbal",
            "verifying",
            "veritable",
            "versed",
            "vinyl",
            "virgin",
            "visceral",
            "visual",
            "voluptuous",
            "walk-on",
            "wanton",
            "warlike",
            "washed",
            "waterproof",
            "waved",
            "weakest",
            "well-bred",
            "well-chosen",
            "well-informed",
            "wetting",
            "wheeled",
            "whirlwind",
            "widen",
            "widening",
            "willful",
            "willing",
            "winnable",
            "winningest",
            "wireless",
            "wistful",
            "woeful",
            "wooded",
            "woodland",
            "wordless",
            "workable",
            "worldly",
            "worldwide",
            "worst-case",
            "worsted",
            "worthless"]
};
var verbs = {
    "description": "A list of English verbs.",
    "verbs": [
        {
            "present": "accept",
            "past": "accepted"
        },
        {
            "present": "add",
            "past": "added"
        },
        {
            "present": "admire",
            "past": "admired"
        },
        {
            "present": "admit",
            "past": "admitted"
        },
        {
            "present": "advise",
            "past": "advised"
        },
        {
            "present": "afford",
            "past": "afforded"
        },
        {
            "present": "agree",
            "past": "agreed"
        },
        {
            "present": "alert",
            "past": "alerted"
        },
        {
            "present": "allow",
            "past": "allowed"
        },
        {
            "present": "amuse",
            "past": "amused"
        },
        {
            "present": "analyse",
            "past": "analysed"
        },
        {
            "present": "announce",
            "past": "announced"
        },
        {
            "present": "annoy",
            "past": "annoyed"
        },
        {
            "present": "answer",
            "past": "answered"
        },
        {
            "present": "apologise",
            "past": "apologised"
        },
        {
            "present": "appear",
            "past": "appeared"
        },
        {
            "present": "applaud",
            "past": "applauded"
        },
        {
            "present": "appreciate",
            "past": "appreciated"
        },
        {
            "present": "approve",
            "past": "approved"
        },
        {
            "present": "argue",
            "past": "argued"
        },
        {
            "present": "arrange",
            "past": "arranged"
        },
        {
            "present": "arrest",
            "past": "arrested"
        },
        {
            "present": "arrive",
            "past": "arrived"
        },
        {
            "present": "ask",
            "past": "asked"
        },
        {
            "present": "attach",
            "past": "attached"
        },
        {
            "present": "attack",
            "past": "attacked"
        },
        {
            "present": "attempt",
            "past": "attempted"
        },
        {
            "present": "attend",
            "past": "attended"
        },
        {
            "present": "attract",
            "past": "attracted"
        },
        {
            "present": "avoid",
            "past": "avoided"
        },
        {
            "present": "back",
            "past": "backed"
        },
        {
            "present": "bake",
            "past": "baked"
        },
        {
            "present": "balance",
            "past": "balanced"
        },
        {
            "present": "ban",
            "past": "banned"
        },
        {
            "present": "bang",
            "past": "banged"
        },
        {
            "present": "bare",
            "past": "bared"
        },
        {
            "present": "bat",
            "past": "batted"
        },
        {
            "present": "bathe",
            "past": "bathed"
        },
        {
            "present": "battle",
            "past": "battled"
        },
        {
            "present": "beam",
            "past": "beamed"
        },
        {
            "present": "beg",
            "past": "begged"
        },
        {
            "present": "behave",
            "past": "behaved"
        },
        {
            "present": "belong",
            "past": "belonged"
        },
        {
            "present": "bleach",
            "past": "bleached"
        },
        {
            "present": "bless",
            "past": "blessed"
        },
        {
            "present": "blind",
            "past": "blinded"
        },
        {
            "present": "blink",
            "past": "blinked"
        },
        {
            "present": "blot",
            "past": "blotted"
        },
        {
            "present": "blush",
            "past": "blushed"
        },
        {
            "present": "boast",
            "past": "boasted"
        },
        {
            "present": "boil",
            "past": "boiled"
        },
        {
            "present": "bolt",
            "past": "bolted"
        },
        {
            "present": "bomb",
            "past": "bombed"
        },
        {
            "present": "book",
            "past": "booked"
        },
        {
            "present": "bore",
            "past": "bored"
        },
        {
            "present": "borrow",
            "past": "borrowed"
        },
        {
            "present": "bounce",
            "past": "bounced"
        },
        {
            "present": "bow",
            "past": "bowed"
        },
        {
            "present": "box",
            "past": "boxed"
        },
        {
            "present": "brake",
            "past": "braked"
        },
        {
            "present": "branch",
            "past": "branched"
        },
        {
            "present": "breathe",
            "past": "breathed"
        },
        {
            "present": "bruise",
            "past": "bruised"
        },
        {
            "present": "brush",
            "past": "brushed"
        },
        {
            "present": "bubble",
            "past": "bubbled"
        },
        {
            "present": "bump",
            "past": "bumped"
        },
        {
            "present": "burn",
            "past": "burned"
        },
        {
            "present": "bury",
            "past": "buried"
        },
        {
            "present": "buzz",
            "past": "buzzed"
        },
        {
            "present": "calculate",
            "past": "calculated"
        },
        {
            "present": "call",
            "past": "called"
        },
        {
            "present": "camp",
            "past": "camped"
        },
        {
            "present": "care",
            "past": "cared"
        },
        {
            "present": "carry",
            "past": "carried"
        },
        {
            "present": "carve",
            "past": "carved"
        },
        {
            "present": "cause",
            "past": "caused"
        },
        {
            "present": "challenge",
            "past": "challenged"
        },
        {
            "present": "change",
            "past": "changed"
        },
        {
            "present": "charge",
            "past": "charged"
        },
        {
            "present": "chase",
            "past": "chased"
        },
        {
            "present": "cheat",
            "past": "cheated"
        },
        {
            "present": "check",
            "past": "checked"
        },
        {
            "present": "cheer",
            "past": "cheered"
        },
        {
            "present": "chew",
            "past": "chewed"
        },
        {
            "present": "choke",
            "past": "choked"
        },
        {
            "present": "chop",
            "past": "chopped"
        },
        {
            "present": "claim",
            "past": "claimed"
        },
        {
            "present": "clap",
            "past": "clapped"
        },
        {
            "present": "clean",
            "past": "cleaned"
        },
        {
            "present": "clear",
            "past": "cleared"
        },
        {
            "present": "clip",
            "past": "clipped"
        },
        {
            "present": "close",
            "past": "closed"
        },
        {
            "present": "coach",
            "past": "coached"
        },
        {
            "present": "coil",
            "past": "coiled"
        },
        {
            "present": "collect",
            "past": "collected"
        },
        {
            "present": "colour",
            "past": "coloured"
        },
        {
            "present": "comb",
            "past": "combed"
        },
        {
            "present": "command",
            "past": "commanded"
        },
        {
            "present": "communicate",
            "past": "communicated"
        },
        {
            "present": "compare",
            "past": "compared"
        },
        {
            "present": "compete",
            "past": "competed"
        },
        {
            "present": "complain",
            "past": "complained"
        },
        {
            "present": "complete",
            "past": "completed"
        },
        {
            "present": "concentrate",
            "past": "concentrated"
        },
        {
            "present": "concern",
            "past": "concerned"
        },
        {
            "present": "confess",
            "past": "confessed"
        },
        {
            "present": "confuse",
            "past": "confused"
        },
        {
            "present": "connect",
            "past": "connected"
        },
        {
            "present": "consider",
            "past": "considered"
        },
        {
            "present": "consist",
            "past": "consisted"
        },
        {
            "present": "contain",
            "past": "contained"
        },
        {
            "present": "continue",
            "past": "continued"
        },
        {
            "present": "copy",
            "past": "copied"
        },
        {
            "present": "correct",
            "past": "corrected"
        },
        {
            "present": "cough",
            "past": "coughed"
        },
        {
            "present": "count",
            "past": "counted"
        },
        {
            "present": "cover",
            "past": "covered"
        },
        {
            "present": "crack",
            "past": "cracked"
        },
        {
            "present": "crash",
            "past": "crashed"
        },
        {
            "present": "crawl",
            "past": "crawled"
        },
        {
            "present": "cross",
            "past": "crossed"
        },
        {
            "present": "crush",
            "past": "crushed"
        },
        {
            "present": "cry",
            "past": "cried"
        },
        {
            "present": "cure",
            "past": "cured"
        },
        {
            "present": "curl",
            "past": "curled"
        },
        {
            "present": "curve",
            "past": "curved"
        },
        {
            "present": "cycle",
            "past": "cycled"
        },
        {
            "present": "dam",
            "past": "dammed"
        },
        {
            "present": "damage",
            "past": "damaged"
        },
        {
            "present": "dance",
            "past": "danced"
        },
        {
            "present": "dare",
            "past": "dared"
        },
        {
            "present": "decay",
            "past": "decayed"
        },
        {
            "present": "deceive",
            "past": "deceived"
        },
        {
            "present": "decide",
            "past": "decided"
        },
        {
            "present": "decorate",
            "past": "decorated"
        },
        {
            "present": "delay",
            "past": "delayed"
        },
        {
            "present": "delight",
            "past": "delighted"
        },
        {
            "present": "deliver",
            "past": "delivered"
        },
        {
            "present": "depend",
            "past": "depended"
        },
        {
            "present": "describe",
            "past": "described"
        },
        {
            "present": "desert",
            "past": "deserted"
        },
        {
            "present": "deserve",
            "past": "deserved"
        },
        {
            "present": "destroy",
            "past": "destroyed"
        },
        {
            "present": "detect",
            "past": "detected"
        },
        {
            "present": "develop",
            "past": "developed"
        },
        {
            "present": "disagree",
            "past": "disagreed"
        },
        {
            "present": "disappear",
            "past": "disappeared"
        },
        {
            "present": "disapprove",
            "past": "disapproved"
        },
        {
            "present": "disarm",
            "past": "disarmed"
        },
        {
            "present": "discover",
            "past": "discovered"
        },
        {
            "present": "dislike",
            "past": "disliked"
        },
        {
            "present": "divide",
            "past": "divided"
        },
        {
            "present": "double",
            "past": "doubled"
        },
        {
            "present": "doubt",
            "past": "doubted"
        },
        {
            "present": "drag",
            "past": "dragged"
        },
        {
            "present": "drain",
            "past": "drained"
        },
        {
            "present": "dream",
            "past": "dreamed"
        },
        {
            "present": "dress",
            "past": "dressed"
        },
        {
            "present": "drip",
            "past": "dripped"
        },
        {
            "present": "drop",
            "past": "dropped"
        },
        {
            "present": "drown",
            "past": "drowned"
        },
        {
            "present": "drum",
            "past": "drummed"
        },
        {
            "present": "dry",
            "past": "dried"
        },
        {
            "present": "dust",
            "past": "dusted"
        },
        {
            "present": "earn",
            "past": "earned"
        },
        {
            "present": "educate",
            "past": "educated"
        },
        {
            "present": "embarrass",
            "past": "embarrassed"
        },
        {
            "present": "employ",
            "past": "employed"
        },
        {
            "present": "empty",
            "past": "emptied"
        },
        {
            "present": "encourage",
            "past": "encouraged"
        },
        {
            "present": "end",
            "past": "ended"
        },
        {
            "present": "enjoy",
            "past": "enjoyed"
        },
        {
            "present": "enter",
            "past": "entered"
        },
        {
            "present": "entertain",
            "past": "entertained"
        },
        {
            "present": "escape",
            "past": "escaped"
        },
        {
            "present": "examine",
            "past": "examined"
        },
        {
            "present": "excite",
            "past": "excited"
        },
        {
            "present": "excuse",
            "past": "excused"
        },
        {
            "present": "exercise",
            "past": "exercised"
        },
        {
            "present": "exist",
            "past": "existed"
        },
        {
            "present": "expand",
            "past": "expand"
        },
        {
            "present": "expect",
            "past": "expected"
        },
        {
            "present": "explain",
            "past": "explained"
        },
        {
            "present": "explode",
            "past": "exploded"
        },
        {
            "present": "extend",
            "past": "extended"
        },
        {
            "present": "face",
            "past": "faced"
        },
        {
            "present": "fade",
            "past": "faded"
        },
        {
            "present": "fail",
            "past": "failed"
        },
        {
            "present": "fancy",
            "past": "fancied"
        },
        {
            "present": "fasten",
            "past": "fastened"
        },
        {
            "present": "fax",
            "past": "faxed"
        },
        {
            "present": "fear",
            "past": "feared"
        },
        {
            "present": "fence",
            "past": "fenced"
        },
        {
            "present": "fetch",
            "past": "fetched"
        },
        {
            "present": "file",
            "past": "filed"
        },
        {
            "present": "fill",
            "past": "filled"
        },
        {
            "present": "film",
            "past": "filmed"
        },
        {
            "present": "fire",
            "past": "fired"
        },
        {
            "present": "fit",
            "past": "fitted"
        },
        {
            "present": "fix",
            "past": "fixed"
        },
        {
            "present": "flap",
            "past": "flapped"
        },
        {
            "present": "flash",
            "past": "flashed"
        },
        {
            "present": "float",
            "past": "floated"
        },
        {
            "present": "flood",
            "past": "flooded"
        },
        {
            "present": "flow",
            "past": "flowed"
        },
        {
            "present": "flower",
            "past": "flowered"
        },
        {
            "present": "fold",
            "past": "folded"
        },
        {
            "present": "follow",
            "past": "followed"
        },
        {
            "present": "fool",
            "past": "fooled"
        },
        {
            "present": "force",
            "past": "forced"
        },
        {
            "present": "form",
            "past": "formed"
        },
        {
            "present": "found",
            "past": "founded"
        },
        {
            "present": "frame",
            "past": "framed"
        },
        {
            "present": "frighten",
            "past": "frightened"
        },
        {
            "present": "fry",
            "past": "fried"
        },
        {
            "present": "gather",
            "past": "gathered"
        },
        {
            "present": "gaze",
            "past": "gazed"
        },
        {
            "present": "glow",
            "past": "glowed"
        },
        {
            "present": "glue",
            "past": "glued"
        },
        {
            "present": "grab",
            "past": "grabbed"
        },
        {
            "present": "grate",
            "past": "grated"
        },
        {
            "present": "grease",
            "past": "greased"
        },
        {
            "present": "greet",
            "past": "greeted"
        },
        {
            "present": "grin",
            "past": "grinned"
        },
        {
            "present": "grip",
            "past": "gripped"
        },
        {
            "present": "groan",
            "past": "groaned"
        },
        {
            "present": "guarantee",
            "past": "guaranteed"
        },
        {
            "present": "guard",
            "past": "guarded"
        },
        {
            "present": "guess",
            "past": "guessed"
        },
        {
            "present": "guide",
            "past": "guided"
        },
        {
            "present": "hammer",
            "past": "hammered"
        },
        {
            "present": "hand",
            "past": "handed"
        },
        {
            "present": "handle",
            "past": "handled"
        },
        {
            "present": "hang",
            "past": "hung"
        },
        {
            "present": "happen",
            "past": "happened"
        },
        {
            "present": "harass",
            "past": "harassed"
        },
        {
            "present": "harm",
            "past": "harmed"
        },
        {
            "present": "hate",
            "past": "hated"
        },
        {
            "present": "haunt",
            "past": "haunted"
        },
        {
            "present": "head",
            "past": "headed"
        },
        {
            "present": "heal",
            "past": "healed"
        },
        {
            "present": "heap",
            "past": "heaped"
        },
        {
            "present": "heat",
            "past": "heated"
        },
        {
            "present": "help",
            "past": "helped"
        },
        {
            "present": "hook",
            "past": "hooked"
        },
        {
            "present": "hop",
            "past": "hopped"
        },
        {
            "present": "hope",
            "past": "hoped"
        },
        {
            "present": "hover",
            "past": "hovered"
        },
        {
            "present": "hug",
            "past": "hugged"
        },
        {
            "present": "hum",
            "past": "hummed"
        },
        {
            "present": "hunt",
            "past": "hunted"
        },
        {
            "present": "hurry",
            "past": "hurried"
        },
        {
            "present": "identify",
            "past": "identified"
        },
        {
            "present": "ignore",
            "past": "ignored"
        },
        {
            "present": "imagine",
            "past": "imagined"
        },
        {
            "present": "impress",
            "past": "impressed"
        },
        {
            "present": "improve",
            "past": "improved"
        },
        {
            "present": "include",
            "past": "included"
        },
        {
            "present": "increase",
            "past": "increased"
        },
        {
            "present": "influence",
            "past": "influenced"
        },
        {
            "present": "inform",
            "past": "informed"
        },
        {
            "present": "inject",
            "past": "injected"
        },
        {
            "present": "injure",
            "past": "injured"
        },
        {
            "present": "instruct",
            "past": "instructed"
        },
        {
            "present": "intend",
            "past": "intended"
        },
        {
            "present": "interest",
            "past": "interested"
        },
        {
            "present": "interfere",
            "past": "interfered"
        },
        {
            "present": "interrupt",
            "past": "interrupted"
        },
        {
            "present": "introduce",
            "past": "introduced"
        },
        {
            "present": "invent",
            "past": "invented"
        },
        {
            "present": "invite",
            "past": "invited"
        },
        {
            "present": "irritate",
            "past": "irritated"
        },
        {
            "present": "itch",
            "past": "itched"
        },
        {
            "present": "jail",
            "past": "jailed"
        },
        {
            "present": "jam",
            "past": "jammed"
        },
        {
            "present": "jog",
            "past": "jogged"
        },
        {
            "present": "join",
            "past": "joined"
        },
        {
            "present": "joke",
            "past": "joked"
        },
        {
            "present": "judge",
            "past": "judged"
        },
        {
            "present": "juggle",
            "past": "juggled"
        },
        {
            "present": "jump",
            "past": "jumped"
        },
        {
            "present": "kick",
            "past": "kicked"
        },
        {
            "present": "kill",
            "past": "killed"
        },
        {
            "present": "kiss",
            "past": "kissed"
        },
        {
            "present": "kneel",
            "past": "knelt"
        },
        {
            "present": "knit",
            "past": "knitted"
        },
        {
            "present": "knock",
            "past": "knocked"
        },
        {
            "present": "knot",
            "past": "knotted"
        },
        {
            "present": "label",
            "past": "labelled"
        },
        {
            "present": "land",
            "past": "landed"
        },
        {
            "present": "last",
            "past": "lasted"
        },
        {
            "present": "laugh",
            "past": "laughed"
        },
        {
            "present": "launch",
            "past": "launched"
        },
        {
            "present": "learn",
            "past": "learned"
        },
        {
            "present": "level",
            "past": "levelled"
        },
        {
            "present": "license",
            "past": "licensed"
        },
        {
            "present": "lick",
            "past": "licked"
        },
        {
            "present": "lie",
            "past": "lied"
        },
        {
            "present": "lighten",
            "past": "lightened"
        },
        {
            "present": "like",
            "past": "liked"
        },
        {
            "present": "list",
            "past": "listed"
        },
        {
            "present": "listen",
            "past": "listened"
        },
        {
            "present": "live",
            "past": "lived"
        },
        {
            "present": "load",
            "past": "loaded"
        },
        {
            "present": "lock",
            "past": "locked"
        },
        {
            "present": "long",
            "past": "longed"
        },
        {
            "present": "look",
            "past": "look"
        },
        {
            "present": "love",
            "past": "loved"
        },
        {
            "present": "man",
            "past": "manned"
        },
        {
            "present": "manage",
            "past": "managed"
        },
        {
            "present": "march",
            "past": "marched"
        },
        {
            "present": "mark",
            "past": "marked"
        },
        {
            "present": "marry",
            "past": "married"
        },
        {
            "present": "match",
            "past": "matched"
        },
        {
            "present": "mate",
            "past": "mated"
        },
        {
            "present": "matter",
            "past": "mattered"
        },
        {
            "present": "measure",
            "past": "measured"
        },
        {
            "present": "meddle",
            "past": "meddled"
        },
        {
            "present": "melt",
            "past": "melted"
        },
        {
            "present": "memorise",
            "past": "memorised"
        },
        {
            "present": "mend",
            "past": "mended"
        },
        {
            "present": "mess up",
            "past": "messed up"
        },
        {
            "present": "milk",
            "past": "milked"
        },
        {
            "present": "mine",
            "past": "mined"
        },
        {
            "present": "miss",
            "past": "missed"
        },
        {
            "present": "mix",
            "past": "mixed"
        },
        {
            "present": "moan",
            "past": "moaned"
        },
        {
            "present": "moor",
            "past": "moored"
        },
        {
            "present": "mourn",
            "past": "mourned"
        },
        {
            "present": "move",
            "past": "moved"
        },
        {
            "present": "muddle",
            "past": "muddled"
        },
        {
            "present": "mug",
            "past": "mugged"
        },
        {
            "present": "multiply",
            "past": "multiplied"
        },
        {
            "present": "murder",
            "past": "murdered"
        },
        {
            "present": "nail",
            "past": "nailed"
        },
        {
            "present": "name",
            "past": "named"
        },
        {
            "present": "need",
            "past": "needed"
        },
        {
            "present": "nest",
            "past": "nested"
        },
        {
            "present": "nod",
            "past": "nodded"
        },
        {
            "present": "note",
            "past": "noted"
        },
        {
            "present": "notice",
            "past": "noticed"
        },
        {
            "present": "number",
            "past": "numbered"
        },
        {
            "present": "obey",
            "past": "obeyed"
        },
        {
            "present": "object",
            "past": "objected"
        },
        {
            "present": "observe",
            "past": "observed"
        },
        {
            "present": "obtain",
            "past": "obtained"
        },
        {
            "present": "occur",
            "past": "occurred"
        },
        {
            "present": "offend",
            "past": "offended"
        },
        {
            "present": "offer",
            "past": "offered"
        },
        {
            "present": "open",
            "past": "opened"
        },
        {
            "present": "order",
            "past": "ordered"
        },
        {
            "present": "overflow",
            "past": "overflowed"
        },
        {
            "present": "owe",
            "past": "owed"
        },
        {
            "present": "own",
            "past": "owned"
        },
        {
            "present": "pack",
            "past": "packed"
        },
        {
            "present": "paddle",
            "past": "paddled"
        },
        {
            "present": "paint",
            "past": "painted"
        },
        {
            "present": "park",
            "past": "parked"
        },
        {
            "present": "part",
            "past": "parted"
        },
        {
            "present": "pass",
            "past": "passed"
        },
        {
            "present": "paste",
            "past": "pasted"
        },
        {
            "present": "pat",
            "past": "patted"
        },
        {
            "present": "pause",
            "past": "paused"
        },
        {
            "present": "peck",
            "past": "pecked"
        },
        {
            "present": "pedal",
            "past": "pedalled"
        },
        {
            "present": "peel",
            "past": "peeled"
        },
        {
            "present": "peep",
            "past": "peeped"
        },
        {
            "present": "perform",
            "past": "performed"
        },
        {
            "present": "permit",
            "past": "permitted"
        },
        {
            "present": "phone",
            "past": "phoned"
        },
        {
            "present": "pick",
            "past": "picked"
        },
        {
            "present": "pinch",
            "past": "pinched"
        },
        {
            "present": "pine",
            "past": "pined"
        },
        {
            "present": "place",
            "past": "placed"
        },
        {
            "present": "plan",
            "past": "planned"
        },
        {
            "present": "plant",
            "past": "planted"
        },
        {
            "present": "play",
            "past": "played"
        },
        {
            "present": "please",
            "past": "pleased"
        },
        {
            "present": "plug",
            "past": "plugged"
        },
        {
            "present": "point",
            "past": "pointed"
        },
        {
            "present": "poke",
            "past": "poked"
        },
        {
            "present": "polish",
            "past": "polished"
        },
        {
            "present": "pop",
            "past": "popped"
        },
        {
            "present": "possess",
            "past": "possessed"
        },
        {
            "present": "post",
            "past": "posted"
        },
        {
            "present": "pour",
            "past": "poured"
        },
        {
            "present": "practise",
            "past": "practised"
        },
        {
            "present": "pray",
            "past": "prayed"
        },
        {
            "present": "preach",
            "past": "preached"
        },
        {
            "present": "precede",
            "past": "preceded"
        },
        {
            "present": "prefer",
            "past": "preferred"
        },
        {
            "present": "prepare",
            "past": "prepared"
        },
        {
            "present": "present",
            "past": "presented"
        },
        {
            "present": "preserve",
            "past": "preserved"
        },
        {
            "present": "press",
            "past": "pressed"
        },
        {
            "present": "pretend",
            "past": "pretended"
        },
        {
            "present": "prevent",
            "past": "prevented"
        },
        {
            "present": "prick",
            "past": "pricked"
        },
        {
            "present": "print",
            "past": "printed"
        },
        {
            "present": "produce",
            "past": "produced"
        },
        {
            "present": "program",
            "past": "programmed"
        },
        {
            "present": "promise",
            "past": "promised"
        },
        {
            "present": "protect",
            "past": "protected"
        },
        {
            "present": "provide",
            "past": "provided"
        },
        {
            "present": "pull",
            "past": "pulled"
        },
        {
            "present": "pump",
            "past": "pumped"
        },
        {
            "present": "punch",
            "past": "punched"
        },
        {
            "present": "puncture",
            "past": "punctured"
        },
        {
            "present": "punish",
            "past": "punished"
        },
        {
            "present": "push",
            "past": "pushed"
        },
        {
            "present": "question",
            "past": "questioned"
        },
        {
            "present": "queue",
            "past": "questioned"
        },
        {
            "present": "race",
            "past": "raced"
        },
        {
            "present": "radiate",
            "past": "radiated"
        },
        {
            "present": "rain",
            "past": "rained"
        },
        {
            "present": "raise",
            "past": "raised"
        },
        {
            "present": "reach",
            "past": "reached"
        },
        {
            "present": "realise",
            "past": "realised"
        },
        {
            "present": "receive",
            "past": "received"
        },
        {
            "present": "recognise",
            "past": "recognised"
        },
        {
            "present": "record",
            "past": "recorded"
        },
        {
            "present": "reduce",
            "past": "reduced"
        },
        {
            "present": "reflect",
            "past": "reflected"
        },
        {
            "present": "refuse",
            "past": "refused"
        },
        {
            "present": "regret",
            "past": "regretted"
        },
        {
            "present": "reign",
            "past": "reigned"
        },
        {
            "present": "reject",
            "past": "rejected"
        },
        {
            "present": "rejoice",
            "past": "rejoiced"
        },
        {
            "present": "relax",
            "past": "relaxed"
        },
        {
            "present": "release",
            "past": "released"
        },
        {
            "present": "rely",
            "past": "relied"
        },
        {
            "present": "remain",
            "past": "remained"
        },
        {
            "present": "remember",
            "past": "remembered"
        },
        {
            "present": "remind",
            "past": "reminded"
        },
        {
            "present": "remove",
            "past": "removed"
        },
        {
            "present": "repair",
            "past": "repaired"
        },
        {
            "present": "repeat",
            "past": "repeated"
        },
        {
            "present": "replace",
            "past": "replaced"
        },
        {
            "present": "reply",
            "past": "replied"
        },
        {
            "present": "report",
            "past": "reported"
        },
        {
            "present": "reproduce",
            "past": "reproduced"
        },
        {
            "present": "request",
            "past": "requested"
        },
        {
            "present": "rescue",
            "past": "rescued"
        },
        {
            "present": "retire",
            "past": "retired"
        },
        {
            "present": "return",
            "past": "returned"
        },
        {
            "present": "rhyme",
            "past": "rhyme"
        },
        {
            "present": "rinse",
            "past": "rinsed"
        },
        {
            "present": "risk",
            "past": "risked"
        },
        {
            "present": "rob",
            "past": "robbed"
        },
        {
            "present": "rock",
            "past": "rocked"
        },
        {
            "present": "roll",
            "past": "rolled"
        },
        {
            "present": "rot",
            "past": "rotted"
        },
        {
            "present": "rub",
            "past": "rubbed"
        },
        {
            "present": "ruin",
            "past": "ruined"
        },
        {
            "present": "rule",
            "past": "ruled"
        },
        {
            "present": "rush",
            "past": "rushed"
        },
        {
            "present": "sack",
            "past": "sacked"
        },
        {
            "present": "sail",
            "past": "sailed"
        },
        {
            "present": "satisfy",
            "past": "satisfied"
        },
        {
            "present": "save",
            "past": "saved"
        },
        {
            "present": "saw",
            "past": "sawed"
        },
        {
            "present": "scare",
            "past": "scared"
        },
        {
            "present": "scatter",
            "past": "scattered"
        },
        {
            "present": "scold",
            "past": "scolded"
        },
        {
            "present": "scorch",
            "past": "scorched"
        },
        {
            "present": "scrape",
            "past": "scraped"
        },
        {
            "present": "scratch",
            "past": "scratched"
        },
        {
            "present": "scream",
            "past": "screamed"
        },
        {
            "present": "screw",
            "past": "screwed"
        },
        {
            "present": "scribble",
            "past": "scribbled"
        },
        {
            "present": "scrub",
            "past": "scrubbed"
        },
        {
            "present": "seal",
            "past": "sealed"
        },
        {
            "present": "search",
            "past": "searched"
        },
        {
            "present": "separate",
            "past": "separate"
        },
        {
            "present": "serve",
            "past": "served"
        },
        {
            "present": "settle",
            "past": "settled"
        },
        {
            "present": "shade",
            "past": "shaded"
        },
        {
            "present": "share",
            "past": "shared"
        },
        {
            "present": "shave",
            "past": "shaved"
        },
        {
            "present": "shelter",
            "past": "sheltered"
        },
        {
            "present": "shiver",
            "past": "shivered"
        },
        {
            "present": "shock",
            "past": "shocked"
        },
        {
            "present": "shop",
            "past": "shopped"
        },
        {
            "present": "shrug",
            "past": "shrugged"
        },
        {
            "present": "sigh",
            "past": "sighed"
        },
        {
            "present": "sign",
            "past": "signed"
        },
        {
            "present": "signal",
            "past": "signalled"
        },
        {
            "present": "sin",
            "past": "sinned"
        },
        {
            "present": "sip",
            "past": "sipped"
        },
        {
            "present": "ski",
            "past": "skied"
        },
        {
            "present": "skip",
            "past": "skipped"
        },
        {
            "present": "slap",
            "past": "slapped"
        },
        {
            "present": "slip",
            "past": "slipped"
        },
        {
            "present": "slow",
            "past": "slowed"
        },
        {
            "present": "smash",
            "past": "smashed"
        },
        {
            "present": "smell",
            "past": "smelled"
        },
        {
            "present": "smile",
            "past": "smiled"
        },
        {
            "present": "smoke",
            "past": "smoked"
        },
        {
            "present": "snatch",
            "past": "snatched"
        },
        {
            "present": "sneeze",
            "past": "sneezed"
        },
        {
            "present": "sniff",
            "past": "sniffed"
        },
        {
            "present": "snore",
            "past": "snored"
        },
        {
            "present": "snow",
            "past": "snowed"
        },
        {
            "present": "soak",
            "past": "soaked"
        },
        {
            "present": "soothe",
            "past": "soothed"
        },
        {
            "present": "sound",
            "past": "sounded"
        },
        {
            "present": "spare",
            "past": "spared"
        },
        {
            "present": "spark",
            "past": "sparked"
        },
        {
            "present": "sparkle",
            "past": "sparkled"
        },
        {
            "present": "spell",
            "past": "spelled"
        },
        {
            "present": "spill",
            "past": "spilled"
        },
        {
            "present": "spoil",
            "past": "spoiled"
        },
        {
            "present": "spot",
            "past": "spotted"
        },
        {
            "present": "spray",
            "past": "sprayed"
        },
        {
            "present": "sprout",
            "past": "sprouted"
        },
        {
            "present": "squash",
            "past": "squashed"
        },
        {
            "present": "squeak",
            "past": "squeaked"
        },
        {
            "present": "squeal",
            "past": "squealed"
        },
        {
            "present": "squeeze",
            "past": "squeezed"
        },
        {
            "present": "stain",
            "past": "stained"
        },
        {
            "present": "stamp",
            "past": "stamped"
        },
        {
            "present": "stare",
            "past": "stared"
        },
        {
            "present": "start",
            "past": "started"
        },
        {
            "present": "stay",
            "past": "stayed"
        },
        {
            "present": "steer",
            "past": "steered"
        },
        {
            "present": "step",
            "past": "stepped"
        },
        {
            "present": "stir",
            "past": "stirred"
        },
        {
            "present": "stitch",
            "past": "stitched"
        },
        {
            "present": "stop",
            "past": "stopped"
        },
        {
            "present": "store",
            "past": "stored"
        },
        {
            "present": "strap",
            "past": "strapped"
        },
        {
            "present": "strengthen",
            "past": "strengthened"
        },
        {
            "present": "stretch",
            "past": "stretched"
        },
        {
            "present": "strip",
            "past": "stripped"
        },
        {
            "present": "stroke",
            "past": "stroked"
        },
        {
            "present": "stuff",
            "past": "stuffed"
        },
        {
            "present": "subtract",
            "past": "subtracted"
        },
        {
            "present": "succeed",
            "past": "succeeded"
        },
        {
            "present": "suck",
            "past": "sucked"
        },
        {
            "present": "suffer",
            "past": "suffered"
        },
        {
            "present": "suggest",
            "past": "suggested"
        },
        {
            "present": "suit",
            "past": "suited"
        },
        {
            "present": "supply",
            "past": "supplied"
        },
        {
            "present": "support",
            "past": "supported"
        },
        {
            "present": "suppose",
            "past": "supposed"
        },
        {
            "present": "surprise",
            "past": "surprised"
        },
        {
            "present": "surround",
            "past": "surrounded"
        },
        {
            "present": "suspect",
            "past": "suspected"
        },
        {
            "present": "suspend",
            "past": "suspended"
        },
        {
            "present": "switch",
            "past": "switched"
        },
        {
            "present": "talk",
            "past": "talked"
        },
        {
            "present": "tame",
            "past": "tamed"
        },
        {
            "present": "tap",
            "past": "tapped"
        },
        {
            "present": "taste",
            "past": "tasted"
        },
        {
            "present": "tease",
            "past": "teased"
        },
        {
            "present": "telephone",
            "past": "telephoned"
        },
        {
            "present": "tempt",
            "past": "tempted"
        },
        {
            "present": "terrify",
            "past": "terrified"
        },
        {
            "present": "test",
            "past": "tested"
        },
        {
            "present": "thank",
            "past": "thanked"
        },
        {
            "present": "thaw",
            "past": "thawed"
        },
        {
            "present": "tick",
            "past": "ticked"
        },
        {
            "present": "tickle",
            "past": "tickled"
        },
        {
            "present": "tie",
            "past": "tied"
        },
        {
            "present": "time",
            "past": "timed"
        },
        {
            "present": "tip",
            "past": "tipped"
        },
        {
            "present": "tire",
            "past": "tired"
        },
        {
            "present": "touch",
            "past": "touched"
        },
        {
            "present": "tour",
            "past": "toured"
        },
        {
            "present": "tow",
            "past": "towed"
        },
        {
            "present": "trace",
            "past": "traced"
        },
        {
            "present": "trade",
            "past": "traded"
        },
        {
            "present": "train",
            "past": "trained"
        },
        {
            "present": "transport",
            "past": "transported"
        },
        {
            "present": "trap",
            "past": "trapped"
        },
        {
            "present": "travel",
            "past": "travelled"
        },
        {
            "present": "treat",
            "past": "treated"
        },
        {
            "present": "tremble",
            "past": "trembled"
        },
        {
            "present": "trick",
            "past": "tricked"
        },
        {
            "present": "trip",
            "past": "tripped"
        },
        {
            "present": "trot",
            "past": "trotted"
        },
        {
            "present": "trouble",
            "past": "troubled"
        },
        {
            "present": "trust",
            "past": "trusted"
        },
        {
            "present": "try",
            "past": "tried"
        },
        {
            "present": "tug",
            "past": "tugged"
        },
        {
            "present": "tumble",
            "past": "tumbled"
        },
        {
            "present": "turn",
            "past": "turned"
        },
        {
            "present": "twist",
            "past": "twisted"
        },
        {
            "present": "type",
            "past": "typed"
        },
        {
            "present": "undress",
            "past": "undressed"
        },
        {
            "present": "unfasten",
            "past": "unfastened"
        },
        {
            "present": "unite",
            "past": "united"
        },
        {
            "present": "unlock",
            "past": "unlocked"
        },
        {
            "present": "unpack",
            "past": "unpacked"
        },
        {
            "present": "untidy",
            "past": "untidied"
        },
        {
            "present": "use",
            "past": "used"
        },
        {
            "present": "vanish",
            "past": "vanished"
        },
        {
            "present": "visit",
            "past": "visited"
        },
        {
            "present": "wail",
            "past": "wailed"
        },
        {
            "present": "wait",
            "past": "waited"
        },
        {
            "present": "walk",
            "past": "walked"
        },
        {
            "present": "wander",
            "past": "wandered"
        },
        {
            "present": "want",
            "past": "wanted"
        },
        {
            "present": "warm",
            "past": "warmed"
        },
        {
            "present": "warn",
            "past": "warned"
        },
        {
            "present": "wash",
            "past": "washed"
        },
        {
            "present": "waste",
            "past": "wasted"
        },
        {
            "present": "watch",
            "past": "watched"
        },
        {
            "present": "water",
            "past": "watered"
        },
        {
            "present": "wave",
            "past": "waved"
        },
        {
            "present": "weigh",
            "past": "weighed"
        },
        {
            "present": "welcome",
            "past": "welcomed"
        },
        {
            "present": "whine",
            "past": "whined"
        },
        {
            "present": "whip",
            "past": "whipped"
        },
        {
            "present": "whirl",
            "past": "whirled"
        },
        {
            "present": "whisper",
            "past": "whispered"
        },
        {
            "present": "whistle",
            "past": "whistled"
        },
        {
            "present": "wink",
            "past": "winked"
        },
        {
            "present": "wipe",
            "past": "wiped"
        },
        {
            "present": "wish",
            "past": "wished"
        },
        {
            "present": "wobble",
            "past": "wobbled"
        },
        {
            "present": "wonder",
            "past": "wondered"
        },
        {
            "present": "work",
            "past": "worked"
        },
        {
            "present": "worry",
            "past": "worried"
        },
        {
            "present": "wrap",
            "past": "wrapped"
        },
        {
            "present": "wreck",
            "past": "wrecked"
        },
        {
            "present": "wrestle",
            "past": "wrestled"
        },
        {
            "present": "wriggle",
            "past": "wriggled"
        },
        {
            "present": "x-ray",
            "past": "x-rayed"
        },
        {
            "present": "yawn",
            "past": "yawned"
        },
        {
            "present": "yell",
            "past": "yelled"
        },
        {
            "present": "zip",
            "past": "zipped"
        },
        {
            "present": "zoom",
            "past": "zoomed"
        }
    ]
};

function madLibs() {
    const formEl = document.querySelector('form[name="madLibsForm');
    if(formEl.checkValidity()){
        grabWords();
        formEl.classList.add('d-none');
        const welcomeContent = document.querySelector('#resultsDisplay');
        welcomeContent.classList.remove('d-none');
        renderResults();
    }
    else {
        formEl.classList.remove('needs-validation');
        formEl.classList.add('was-validated');
    }
    event.preventDefault();
    event.stopPropagation();
}

function renderResults() {
    const outputEl = document.querySelector('#resultsDisplay');
    let outputTemplate = '';
    outputTemplate += '<h4>';
    outputTemplate += sen;
    outputTemplate += '</h4>';
    outputEl.innerHTML = outputTemplate;
}

function grabWords() {
    const formEl = document.querySelector('form[name="madLibs"]');
    addWords({
        noun1: document.querySelector('#noun1').value,
        adjective1: document.querySelector('#adjective1').value,
        noun2: document.querySelector('#noun2').value,
        verb1: document.querySelector('#verb1').value,
        adjective2: document.querySelector('#adjective2').value,
        adjective3: document.querySelector('#adjective3').value,
        verb2: document.querySelector('#verb2').value,
        verb3: document.querySelector('#verb3').value,
        noun3: document.querySelector('#noun3').value,
        verb4: document.querySelector('#verb4').value,
    })
}

function addWords(userObj) {
    sen = sen.replace("|", userObj.noun1.fontcolor("blue"));
    sen = sen.replace("|", userObj.adjective1.fontcolor("blue"));
    sen = sen.replace("|", userObj.noun2.fontcolor("blue"));
    sen = sen.replace("|", userObj.verb1.fontcolor("blue"));
    sen = sen.replace("|", userObj.adjective2.fontcolor("blue"));
    sen = sen.replace("|", userObj.adjective3.fontcolor("blue"));
    sen = sen.replace("|", userObj.verb2.fontcolor("blue"));
    sen = sen.replace("|", userObj.verb3.fontcolor("blue"));
    sen = sen.replace("|", userObj.noun3.fontcolor("blue"));
    sen = sen.replace("|", userObj.noun3.fontcolor("blue"));
    sen = sen.replace("|", userObj.verb4.fontcolor("blue"));
}

function loadNouns(loc) {
    var count = Object.keys(nouns.nouns).length;
    //console.log(count)
    var pos = Math.floor(Math.random() * count);
    //console.log(pos)
    //var noun = nouns.nouns[pos]
    //console.log(noun)
    document.getElementById(loc).value = nouns.nouns[pos];
}

function loadAdjs(loc) {
    var count = Object.keys(adjs.adjs).length;
    //console.log(count)
    var pos = Math.floor(Math.random() * count);
    //console.log(pos)
    //var noun = nouns.nouns[pos]
    //console.log(noun)
    document.getElementById(loc).value = nouns.nouns[pos];
}

function loadVerbs(loc) {
    var count = Object.keys(verbs.verbs).length;
    //console.log(count)
    var pos = Math.floor(Math.random() * count);
    //console.log(pos)
    //var noun = nouns.nouns[pos]
    //console.log(noun)
    document.getElementById(loc).value = nouns.nouns[pos];
}
