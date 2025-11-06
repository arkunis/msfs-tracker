// Base de données des aéroports mondiaux
// Source: OurAirports (https://ourairports.com/data/)
// Généré automatiquement - Ne pas modifier manuellement

export interface Airport {
  icao: string;      // Code ICAO (ex: LFPG)
  iata: string;      // Code IATA (ex: CDG)
  name: string;      // Nom complet de l'aéroport
  city: string;      // Ville
  country: string;   // Code pays ISO
  lat: number;       // Latitude en degrés
  lon: number;       // Longitude en degrés
  elevation: number; // Altitude en pieds
}

export const AIRPORTS: Airport[] = [
  {
    "icao": "5A8",
    "iata": "WKK",
    "name": "Aleknagik / New Airport",
    "city": "Aleknagik",
    "country": "US",
    "lat": 59.2826004028,
    "lon": -158.617996216,
    "elevation": 66
  },
  {
    "icao": "AGGH",
    "iata": "HIR",
    "name": "Honiara International Airport",
    "city": "Honiara",
    "country": "SB",
    "lat": -9.428,
    "lon": 160.054993,
    "elevation": 28
  },
  {
    "icao": "LFAY",
    "iata": "QAM",
    "name": "Aérodrome d’Amiens-Glisy",
    "city": "Amiens / Glisy",
    "country": "FR",
    "lat": 49.8730,
    "lon": 2.3871,
    "elevation": 63
  },
  {
    "icao": "AGGM",
    "iata": "MUA",
    "name": "Munda Airport",
    "city": "Munda",
    "country": "SB",
    "lat": -8.32797,
    "lon": 157.263,
    "elevation": 10
  },
  {
    "icao": "ANYN",
    "iata": "INU",
    "name": "Nauru International Airport",
    "city": "Yaren District",
    "country": "NR",
    "lat": -0.547458,
    "lon": 166.919006,
    "elevation": 22
  },
  {
    "icao": "AT98",
    "iata": "WFR",
    "name": "Wolf's Fang Runway",
    "city": "",
    "country": "AQ",
    "lat": -71.517,
    "lon": 8.8,
    "elevation": 3707
  },
  {
    "icao": "ZBAL",
    "iata": "AXF",
    "name": "Alxa Left Banner Bayanhot Airport",
    "city": "Bayanhot",
    "country": "CN",
    "lat": 38.748317,
    "lon": 105.58416,
    "elevation": 4560
  },
  {
    "icao": "AYBA",
    "iata": "VMU",
    "name": "Baimuru Airport",
    "city": "Baimuru",
    "country": "PG",
    "lat": -7.496955,
    "lon": 144.821756,
    "elevation": 27
  },
  {
    "icao": "AYBK",
    "iata": "BUA",
    "name": "Buka Airport",
    "city": "Buka Island",
    "country": "PG",
    "lat": -5.422299,
    "lon": 154.672698,
    "elevation": 11
  },
  {
    "icao": "AYBM",
    "iata": "OPU",
    "name": "Balimo Airport",
    "city": "Balimo",
    "country": "PG",
    "lat": -8.05000019073,
    "lon": 142.932998657,
    "elevation": 51
  },
  {
    "icao": "AYCH",
    "iata": "CMU",
    "name": "Chimbu Airport",
    "city": "Kundiawa",
    "country": "PG",
    "lat": -6.024290084838867,
    "lon": 144.9709930419922,
    "elevation": 4974
  },
  {
    "icao": "AYDU",
    "iata": "DAU",
    "name": "Daru Airport",
    "city": "Daru",
    "country": "PG",
    "lat": -9.08676,
    "lon": 143.207993,
    "elevation": 20
  },
  {
    "icao": "AYGA",
    "iata": "GKA",
    "name": "Goroka Airport",
    "city": "Goronka",
    "country": "PG",
    "lat": -6.081689834590001,
    "lon": 145.391998291,
    "elevation": 5282
  },
  {
    "icao": "AYGN",
    "iata": "GUR",
    "name": "Gurney Airport",
    "city": "Gurney",
    "country": "PG",
    "lat": -10.3114995956,
    "lon": 150.333999634,
    "elevation": 88
  },
  {
    "icao": "AYGR",
    "iata": "PNP",
    "name": "Girua Airport",
    "city": "Popondetta",
    "country": "PG",
    "lat": -8.80453968048,
    "lon": 148.309005737,
    "elevation": 311
  },
  {
    "icao": "AYHK",
    "iata": "HKN",
    "name": "Hoskins Airport",
    "city": "Kimbe",
    "country": "PG",
    "lat": -5.463846,
    "lon": 150.407327,
    "elevation": 66
  },
  {
    "icao": "AYKM",
    "iata": "KMA",
    "name": "Kerema Airport",
    "city": "Kerema",
    "country": "PG",
    "lat": -7.96361017227,
    "lon": 145.770996094,
    "elevation": 10
  },
  {
    "icao": "AYKV",
    "iata": "KVG",
    "name": "Kavieng Airport",
    "city": "Kavieng",
    "country": "PG",
    "lat": -2.57940006256,
    "lon": 150.807998657,
    "elevation": 7
  },
  {
    "icao": "AYMD",
    "iata": "MAG",
    "name": "Madang Airport",
    "city": "Madang",
    "country": "PG",
    "lat": -5.20707988739,
    "lon": 145.789001465,
    "elevation": 20
  },
  {
    "icao": "AYMH",
    "iata": "HGU",
    "name": "Mount Hagen Kagamuga Airport",
    "city": "Mount Hagen",
    "country": "PG",
    "lat": -5.828212,
    "lon": 144.299412,
    "elevation": 5388
  },
  {
    "icao": "AYMN",
    "iata": "MDU",
    "name": "Mendi Airport",
    "city": "Mendi",
    "country": "PG",
    "lat": -6.14774,
    "lon": 143.656998,
    "elevation": 5680
  },
  {
    "icao": "AYMO",
    "iata": "MAS",
    "name": "Momote Airport",
    "city": "Manus Island",
    "country": "PG",
    "lat": -2.06189,
    "lon": 147.423996,
    "elevation": 12
  },
  {
    "icao": "AYNZ",
    "iata": "LAE",
    "name": "Nadzab Airport",
    "city": "Lae",
    "country": "PG",
    "lat": -6.569803,
    "lon": 146.725977,
    "elevation": 239
  },
  {
    "icao": "AYPY",
    "iata": "POM",
    "name": "Port Moresby Jacksons International Airport",
    "city": "Port Moresby",
    "country": "PG",
    "lat": -9.443380355834961,
    "lon": 147.22000122070312,
    "elevation": 146
  },
  {
    "icao": "AYTK",
    "iata": "RAB",
    "name": "Tokua Airport",
    "city": "Kokopo",
    "country": "PG",
    "lat": -4.34046,
    "lon": 152.380005,
    "elevation": 49
  },
  {
    "icao": "AYVN",
    "iata": "VAI",
    "name": "Vanimo Airport",
    "city": "Vanimo",
    "country": "PG",
    "lat": -2.6926,
    "lon": 141.3028,
    "elevation": 10
  },
  {
    "icao": "AYWD",
    "iata": "WBM",
    "name": "Wapenamanda Airport",
    "city": "Wapenamanda",
    "country": "PG",
    "lat": -5.635293,
    "lon": 143.892231,
    "elevation": 5889
  },
  {
    "icao": "AYWK",
    "iata": "WWK",
    "name": "Wewak International Airport",
    "city": "Wewak",
    "country": "PG",
    "lat": -3.58383011818,
    "lon": 143.669006348,
    "elevation": 19
  },
  {
    "icao": "UBTT",
    "iata": "ZXT",
    "name": "Zabrat Airport",
    "city": "Zabrat",
    "country": "AZ",
    "lat": 40.494884,
    "lon": 49.977065,
    "elevation": 36
  },
  {
    "icao": "BCW",
    "iata": "BCW",
    "name": "Benguera Island Airport",
    "city": "Benguera Island",
    "country": "MZ",
    "lat": -21.8533,
    "lon": 35.438301,
    "elevation": 0
  },
  {
    "icao": "LBIA",
    "iata": "JAM",
    "name": "Bezmer Air Base",
    "city": "Bezmer",
    "country": "BG",
    "lat": 42.454899,
    "lon": 26.3522,
    "elevation": 509
  },
  {
    "icao": "BGAA",
    "iata": "JEG",
    "name": "Aasiaat Airport",
    "city": "Aasiaat",
    "country": "GL",
    "lat": 68.721802,
    "lon": -52.784698,
    "elevation": 74
  },
  {
    "icao": "BGBW",
    "iata": "UAK",
    "name": "Narsarsuaq Airport",
    "city": "Narsarsuaq",
    "country": "GL",
    "lat": 61.1605,
    "lon": -45.425999,
    "elevation": 112
  },
  {
    "icao": "BGGH",
    "iata": "GOH",
    "name": "Nuuk Airport",
    "city": "Nuuk",
    "country": "GL",
    "lat": 64.191066,
    "lon": -51.67914,
    "elevation": 283
  },
  {
    "icao": "BGJN",
    "iata": "JAV",
    "name": "Ilulissat Airport",
    "city": "Ilulissat",
    "country": "GL",
    "lat": 69.243202,
    "lon": -51.057098,
    "elevation": 95
  },
  {
    "icao": "BGKK",
    "iata": "KUS",
    "name": "Kulusuk Airport",
    "city": "Kulusuk",
    "country": "GL",
    "lat": 65.573601,
    "lon": -37.1236,
    "elevation": 117
  },
  {
    "icao": "BGSF",
    "iata": "SFJ",
    "name": "Kangerlussuaq Airport",
    "city": "Kangerlussuaq",
    "country": "GL",
    "lat": 67.010446,
    "lon": -50.715294,
    "elevation": 165
  },
  {
    "icao": "BGSS",
    "iata": "JHS",
    "name": "Sisimiut Airport",
    "city": "Sisimiut",
    "country": "GL",
    "lat": 66.951302,
    "lon": -53.729301,
    "elevation": 33
  },
  {
    "icao": "BGTL",
    "iata": "THU",
    "name": "Pituffik Space Base",
    "city": "Pituffik",
    "country": "GL",
    "lat": 76.531197,
    "lon": -68.703201,
    "elevation": 251
  },
  {
    "icao": "BIAR",
    "iata": "AEY",
    "name": "Akureyri Airport",
    "city": "Akureyri",
    "country": "IS",
    "lat": 65.656573,
    "lon": -18.072018,
    "elevation": 6
  },
  {
    "icao": "BIEG",
    "iata": "EGS",
    "name": "Egilsstaðir Airport",
    "city": "Egilsstaðir",
    "country": "IS",
    "lat": 65.2833023071289,
    "lon": -14.401399612426758,
    "elevation": 76
  },
  {
    "icao": "BIHN",
    "iata": "HFN",
    "name": "Hornafjörður Airport",
    "city": "Höfn",
    "country": "IS",
    "lat": 64.295601,
    "lon": -15.2272,
    "elevation": 24
  },
  {
    "icao": "BIHU",
    "iata": "HZK",
    "name": "Húsavík Airport",
    "city": "Húsavík",
    "country": "IS",
    "lat": 65.952301,
    "lon": -17.426001,
    "elevation": 48
  },
  {
    "icao": "BIIS",
    "iata": "IFJ",
    "name": "Ísafjörður Airport",
    "city": "Ísafjörður",
    "country": "IS",
    "lat": 66.058098,
    "lon": -23.1353,
    "elevation": 8
  },
  {
    "icao": "BIKF",
    "iata": "KEF",
    "name": "Keflavik International Airport",
    "city": "Reykjavík",
    "country": "IS",
    "lat": 63.985001,
    "lon": -22.6056,
    "elevation": 171
  },
  {
    "icao": "BIRK",
    "iata": "RKV",
    "name": "Reykjavík Domestic Airport",
    "city": "Reykjavík",
    "country": "IS",
    "lat": 64.128732,
    "lon": -21.93759,
    "elevation": 48
  },
  {
    "icao": "BISI",
    "iata": "SIJ",
    "name": "Siglufjörður Airport",
    "city": "Siglufjörður",
    "country": "IS",
    "lat": 66.137847,
    "lon": -18.908157,
    "elevation": 10
  },
  {
    "icao": "BIVM",
    "iata": "VEY",
    "name": "Vestmannaeyjar Airport",
    "city": "Vestmannaeyjar",
    "country": "IS",
    "lat": 63.42430114746094,
    "lon": -20.278900146484375,
    "elevation": 326
  },
  {
    "icao": "BKPR",
    "iata": "PRN",
    "name": "Priština Adem Jashari International Airport",
    "city": "Prishtina",
    "country": "XK",
    "lat": 42.5728,
    "lon": 21.035801,
    "elevation": 1789
  },
  {
    "icao": "SBVC",
    "iata": "VDC",
    "name": "Glauber de Andrade Rocha Airport",
    "city": "Vitória da Conquista",
    "country": "BR",
    "lat": -14.907885,
    "lon": -40.914804,
    "elevation": 2940
  },
  {
    "icao": "VTSY",
    "iata": "BTZ",
    "name": "Betong International Airport",
    "city": "Betong",
    "country": "TH",
    "lat": 5.79,
    "lon": 101.15,
    "elevation": 785
  },
  {
    "icao": "UMIO",
    "iata": "TXC",
    "name": "Orsha Airport - Balbasovo Air Base",
    "city": "Orsha",
    "country": "BY",
    "lat": 54.439999,
    "lon": 30.2967,
    "elevation": 620
  },
  {
    "icao": "MZCK",
    "iata": "CUK",
    "name": "Caye Caulker Airport",
    "city": "Caye Caulker",
    "country": "BZ",
    "lat": 17.735015,
    "lon": -88.032862,
    "elevation": 2
  },
  {
    "icao": "MZCP",
    "iata": "CYC",
    "name": "Caye Chapel Airport",
    "city": "Caye Chapel",
    "country": "BZ",
    "lat": 17.683792,
    "lon": -88.044985,
    "elevation": 3
  },
  {
    "icao": "MZCZ",
    "iata": "CZH",
    "name": "Corozal Airport",
    "city": "Corozal",
    "country": "BZ",
    "lat": 18.3822,
    "lon": -88.411903,
    "elevation": 40
  },
  {
    "icao": "MZPB",
    "iata": "DGA",
    "name": "Dangriga Airport",
    "city": "Dangriga",
    "country": "BZ",
    "lat": 16.98251,
    "lon": -88.230988,
    "elevation": 10
  },
  {
    "icao": "MZPG",
    "iata": "PND",
    "name": "Punta Gorda Airport",
    "city": "Punta Gorda",
    "country": "BZ",
    "lat": 16.1024,
    "lon": -88.808296,
    "elevation": 7
  },
  {
    "icao": "MZSJ",
    "iata": "SJX",
    "name": "Sartaneja Airport",
    "city": "Sartaneja",
    "country": "BZ",
    "lat": 18.3561,
    "lon": -88.130798,
    "elevation": 3
  },
  {
    "icao": "MZSP",
    "iata": "SPR",
    "name": "John Greif II Airport",
    "city": "San Pedro",
    "country": "BZ",
    "lat": 17.9139,
    "lon": -87.9711,
    "elevation": 4
  },
  {
    "icao": "MZBE",
    "iata": "TZA",
    "name": "Sir Barry Bowen Municipal Airport",
    "city": "Belize City",
    "country": "BZ",
    "lat": 17.517239,
    "lon": -88.195775,
    "elevation": 8
  },
  {
    "icao": "BZB",
    "iata": "BZB",
    "name": "Bazaruto Island Airport",
    "city": "Bazaruto Island",
    "country": "MZ",
    "lat": -21.5411,
    "lon": 35.4729,
    "elevation": 0
  },
  {
    "icao": "CAJ4",
    "iata": "YAA",
    "name": "Anahim Lake Airport",
    "city": "Anahim Lake",
    "country": "CA",
    "lat": 52.451501,
    "lon": -125.303776,
    "elevation": 3635
  },
  {
    "icao": "CAT4",
    "iata": "XQU",
    "name": "Qualicum Beach Airport",
    "city": "Qualicum Beach",
    "country": "CA",
    "lat": 49.337456,
    "lon": -124.393086,
    "elevation": 191
  },
  {
    "icao": "CAZ5",
    "iata": "YZA",
    "name": "Cache Creek-Ashcroft Regional Airport",
    "city": "Cache Creek",
    "country": "CA",
    "lat": 50.775258,
    "lon": -121.321314,
    "elevation": 2034
  },
  {
    "icao": "CBBC",
    "iata": "ZEL",
    "name": "Bella Bella (Campbell Island) Airport",
    "city": "Bella Bella",
    "country": "CA",
    "lat": 52.185001,
    "lon": -128.156994,
    "elevation": 141
  },
  {
    "icao": "ZGSG",
    "iata": "HSC",
    "name": "Shaoguan Danxia Airport",
    "city": "Shaoguan",
    "country": "CN",
    "lat": 24.9786,
    "lon": 113.420998,
    "elevation": 280
  },
  {
    "icao": "ZSGS",
    "iata": "JGS",
    "name": "Jinggangshan Airport",
    "city": "Ji'an",
    "country": "CN",
    "lat": 26.856899,
    "lon": 114.737,
    "elevation": 281
  },
  {
    "icao": "ZSJX",
    "iata": "JNH",
    "name": "Jiaxing Airport / Jiaxing Air Base",
    "city": "Xiuzhou, Hangzhou",
    "country": "CN",
    "lat": 30.705535,
    "lon": 120.679779,
    "elevation": 17
  },
  {
    "icao": "CN-0178",
    "iata": "WHN",
    "name": "Wuhan Hannan Municipal Airport",
    "city": "Wuhan (Hannan)",
    "country": "CN",
    "lat": 30.25521,
    "lon": 114.062805,
    "elevation": 85
  },
  {
    "icao": "ZBNY",
    "iata": "NAY",
    "name": "Beijing Nanjiao Airport",
    "city": "Beijing",
    "country": "CN",
    "lat": 39.48595,
    "lon": 116.37236,
    "elevation": 0
  },
  {
    "icao": "ZUDR",
    "iata": "DDR",
    "name": "Rikaze Dingri Airport",
    "city": "Xigazê (Dingri)",
    "country": "CN",
    "lat": 28.604567,
    "lon": 86.798,
    "elevation": 14108
  },
  {
    "icao": "ZWTK",
    "iata": "HQL",
    "name": "Tashikuergan Hongqilafu Airport",
    "city": "Tashikuergan",
    "country": "CN",
    "lat": 37.661333,
    "lon": 75.288877,
    "elevation": 10499
  },
  {
    "icao": "ZUPL",
    "iata": "APJ",
    "name": "Ali Pulan Airport",
    "city": "Burang Town",
    "country": "CN",
    "lat": 30.397898,
    "lon": 81.13317,
    "elevation": 13943
  },
  {
    "icao": "ZSBA",
    "iata": "BFY",
    "name": "Bengbu Tenghu Airport (U.C.)",
    "city": "Bengbu",
    "country": "CN",
    "lat": 33.165808,
    "lon": 117.057295,
    "elevation": 72
  },
  {
    "icao": "CYAG",
    "iata": "YAG",
    "name": "Fort Frances Municipal Airport",
    "city": "Fort Frances",
    "country": "CA",
    "lat": 48.655749,
    "lon": -93.44349,
    "elevation": 1125
  },
  {
    "icao": "CYAH",
    "iata": "YAH",
    "name": "La Grande-4 Airport",
    "city": "La Grande-4",
    "country": "CA",
    "lat": 53.754699707,
    "lon": -73.6753005981,
    "elevation": 1005
  },
  {
    "icao": "CYAM",
    "iata": "YAM",
    "name": "Sault Ste Marie Airport",
    "city": "Sault Ste Marie",
    "country": "CA",
    "lat": 46.483216,
    "lon": -84.508467,
    "elevation": 630
  },
  {
    "icao": "CYAQ",
    "iata": "XKS",
    "name": "Kasabonika Airport",
    "city": "Kasabonika",
    "country": "CA",
    "lat": 53.52470016479492,
    "lon": -88.6427993774414,
    "elevation": 672
  },
  {
    "icao": "CYAY",
    "iata": "YAY",
    "name": "St. Anthony Airport",
    "city": "St. Anthony",
    "country": "CA",
    "lat": 51.391909,
    "lon": -56.08321,
    "elevation": 108
  },
  {
    "icao": "CYAZ",
    "iata": "YAZ",
    "name": "Tofino / Long Beach Airport",
    "city": "Tofino",
    "country": "CA",
    "lat": 49.079833,
    "lon": -125.775583,
    "elevation": 80
  },
  {
    "icao": "CYBC",
    "iata": "YBC",
    "name": "Baie-Comeau Airport",
    "city": "Baie-Comeau",
    "country": "CA",
    "lat": 49.1325,
    "lon": -68.204399,
    "elevation": 71
  },
  {
    "icao": "CYBD",
    "iata": "QBC",
    "name": "Bella Coola Airport",
    "city": "Bella Coola",
    "country": "CA",
    "lat": 52.387501,
    "lon": -126.596001,
    "elevation": 117
  },
  {
    "icao": "CYBF",
    "iata": "YBY",
    "name": "Bonnyville Airport",
    "city": "Bonnyville",
    "country": "CA",
    "lat": 54.304199,
    "lon": -110.744003,
    "elevation": 1836
  },
  {
    "icao": "CYBG",
    "iata": "YBG",
    "name": "CFB Bagotville / Saguenay-Bagotville Airport",
    "city": "La Baie",
    "country": "CA",
    "lat": 48.331908,
    "lon": -70.992909,
    "elevation": 522
  },
  {
    "icao": "CYBK",
    "iata": "YBK",
    "name": "Baker Lake Airport",
    "city": "Baker Lake",
    "country": "CA",
    "lat": 64.29889678960001,
    "lon": -96.077796936,
    "elevation": 59
  },
  {
    "icao": "CYBL",
    "iata": "YBL",
    "name": "Campbell River Airport",
    "city": "Campbell River",
    "country": "CA",
    "lat": 49.950802,
    "lon": -125.271004,
    "elevation": 346
  },
  {
    "icao": "CYBR",
    "iata": "YBR",
    "name": "Brandon Municipal Airport",
    "city": "Brandon",
    "country": "CA",
    "lat": 49.91,
    "lon": -99.951897,
    "elevation": 1343
  },
  {
    "icao": "CYBX",
    "iata": "YBX",
    "name": "Lourdes-de-Blanc-Sablon Airport",
    "city": "Blanc-Sablon",
    "country": "CA",
    "lat": 51.4436,
    "lon": -57.185299,
    "elevation": 121
  },
  {
    "icao": "CYCB",
    "iata": "YCB",
    "name": "Cambridge Bay Airport",
    "city": "Cambridge Bay",
    "country": "CA",
    "lat": 69.1081008911,
    "lon": -105.138000488,
    "elevation": 90
  },
  {
    "icao": "CYCC",
    "iata": "YCC",
    "name": "Cornwall Regional Airport",
    "city": "Cornwall",
    "country": "CA",
    "lat": 45.092637,
    "lon": -74.567724,
    "elevation": 175
  },
  {
    "icao": "CYCD",
    "iata": "YCD",
    "name": "Nanaimo Airport",
    "city": "Nanaimo",
    "country": "CA",
    "lat": 49.05497,
    "lon": -123.869863,
    "elevation": 92
  },
  {
    "icao": "CYCE",
    "iata": "YCE",
    "name": "Centralia / James T. Field Memorial Aerodrome",
    "city": "Huron Park",
    "country": "CA",
    "lat": 43.285599,
    "lon": -81.508301,
    "elevation": 824
  },
  {
    "icao": "CYCG",
    "iata": "YCG",
    "name": "Castlegar/West Kootenay Regional Airport",
    "city": "Castlegar",
    "country": "CA",
    "lat": 49.296398,
    "lon": -117.632004,
    "elevation": 1624
  },
  {
    "icao": "CYCH",
    "iata": "YCH",
    "name": "Miramichi Airport",
    "city": "Miramichi",
    "country": "CA",
    "lat": 47.007801,
    "lon": -65.449203,
    "elevation": 108
  },
  {
    "icao": "CYCL",
    "iata": "YCL",
    "name": "Charlo Airport",
    "city": "Charlo",
    "country": "CA",
    "lat": 47.990799,
    "lon": -66.330299,
    "elevation": 132
  },
  {
    "icao": "CYCN",
    "iata": "YCN",
    "name": "Cochrane Airport",
    "city": "Cochrane",
    "country": "CA",
    "lat": 49.10559844970703,
    "lon": -81.01360321044922,
    "elevation": 861
  },
  {
    "icao": "CYCQ",
    "iata": "YCQ",
    "name": "Chetwynd Airport",
    "city": "Chetwynd",
    "country": "CA",
    "lat": 55.687198638916016,
    "lon": -121.62699890136719,
    "elevation": 2000
  },
  {
    "icao": "CYDA",
    "iata": "YDA",
    "name": "Dawson City Airport",
    "city": "Dawson City",
    "country": "CA",
    "lat": 64.04309844970703,
    "lon": -139.1280059814453,
    "elevation": 1215
  },
  {
    "icao": "CYDB",
    "iata": "YDB",
    "name": "Burwash Airport",
    "city": "Burwash Landing",
    "country": "CA",
    "lat": 61.371101,
    "lon": -139.041,
    "elevation": 2647
  },
  {
    "icao": "CYDF",
    "iata": "YDF",
    "name": "Deer Lake Airport",
    "city": "Deer Lake",
    "country": "CA",
    "lat": 49.2108,
    "lon": -57.391399,
    "elevation": 72
  },
  {
    "icao": "CYDM",
    "iata": "XRR",
    "name": "Ross River Airport",
    "city": "Ross River",
    "country": "CA",
    "lat": 61.9706001282,
    "lon": -132.42300415,
    "elevation": 2314
  },
  {
    "icao": "CYDN",
    "iata": "YDN",
    "name": "Dauphin Barker Airport",
    "city": "Dauphin",
    "country": "CA",
    "lat": 51.1008,
    "lon": -100.052002,
    "elevation": 999
  },
  {
    "icao": "CYDO",
    "iata": "YDO",
    "name": "Dolbeau-Saint-Felicien Airport",
    "city": "Dolbeau-Saint-Felicien",
    "country": "CA",
    "lat": 48.7785,
    "lon": -72.375,
    "elevation": 372
  },
  {
    "icao": "CYDQ",
    "iata": "YDQ",
    "name": "Dawson Creek Airport",
    "city": "Dawson Creek",
    "country": "CA",
    "lat": 55.741245,
    "lon": -120.183263,
    "elevation": 2148
  },
  {
    "icao": "CYEG",
    "iata": "YEG",
    "name": "Edmonton International Airport",
    "city": "Edmonton",
    "country": "CA",
    "lat": 53.3097,
    "lon": -113.580002,
    "elevation": 2373
  },
  {
    "icao": "CYEL",
    "iata": "YEL",
    "name": "Elliot Lake Municipal Airport",
    "city": "Elliot Lake",
    "country": "CA",
    "lat": 46.351398468,
    "lon": -82.5614013672,
    "elevation": 1087
  },
  {
    "icao": "CYEM",
    "iata": "YEM",
    "name": "Manitoulin East Municipal Airport",
    "city": "Sheguiandah",
    "country": "CA",
    "lat": 45.842435,
    "lon": -81.857595,
    "elevation": 869
  },
  {
    "icao": "CYEN",
    "iata": "YEN",
    "name": "Estevan Airport",
    "city": "Estevan",
    "country": "CA",
    "lat": 49.2103004456,
    "lon": -102.966003418,
    "elevation": 1905
  },
  {
    "icao": "CYET",
    "iata": "YET",
    "name": "Edson Airport",
    "city": "Edson",
    "country": "CA",
    "lat": 53.578899383499994,
    "lon": -116.464996338,
    "elevation": 3043
  },
  {
    "icao": "CYEV",
    "iata": "YEV",
    "name": "Inuvik Mike Zubko Airport",
    "city": "Inuvik",
    "country": "CA",
    "lat": 68.30419921880001,
    "lon": -133.483001709,
    "elevation": 224
  },
  {
    "icao": "CYEY",
    "iata": "YEY",
    "name": "Amos/Magny Airport",
    "city": "Amos",
    "country": "CA",
    "lat": 48.563903,
    "lon": -78.249702,
    "elevation": 1068
  },
  {
    "icao": "CYFB",
    "iata": "YFB",
    "name": "Iqaluit Airport",
    "city": "Iqaluit",
    "country": "CA",
    "lat": 63.756402,
    "lon": -68.555801,
    "elevation": 110
  },
  {
    "icao": "CYFC",
    "iata": "YFC",
    "name": "Fredericton Airport",
    "city": "Fredericton",
    "country": "CA",
    "lat": 45.868900299072266,
    "lon": -66.53720092773438,
    "elevation": 68
  },
  {
    "icao": "CYFE",
    "iata": "YFE",
    "name": "Forestville Airport",
    "city": "Forestville",
    "country": "CA",
    "lat": 48.74610137939453,
    "lon": -69.09719848632812,
    "elevation": 293
  },
  {
    "icao": "CYFJ",
    "iata": "YTM",
    "name": "Mont-Tremblant International Airport",
    "city": "La Macaza",
    "country": "CA",
    "lat": 46.409401,
    "lon": -74.779999,
    "elevation": 827
  },
  {
    "icao": "CYFR",
    "iata": "YFR",
    "name": "Fort Resolution Airport",
    "city": "Fort Resolution",
    "country": "CA",
    "lat": 61.1808013916,
    "lon": -113.690002441,
    "elevation": 526
  },
  {
    "icao": "CYFS",
    "iata": "YFS",
    "name": "Fort Simpson Airport",
    "city": "Fort Simpson",
    "country": "CA",
    "lat": 61.76020050048828,
    "lon": -121.23699951171875,
    "elevation": 555
  },
  {
    "icao": "CYGK",
    "iata": "YGK",
    "name": "Kingston Norman Rogers Airport",
    "city": "Kingston",
    "country": "CA",
    "lat": 44.2253,
    "lon": -76.596901,
    "elevation": 305
  },
  {
    "icao": "CYGL",
    "iata": "YGL",
    "name": "La Grande Rivière Airport",
    "city": "La Grande Rivière",
    "country": "CA",
    "lat": 53.625301361083984,
    "lon": -77.7042007446289,
    "elevation": 639
  },
  {
    "icao": "CYGM",
    "iata": "YGM",
    "name": "Gimli Industrial Park Airport",
    "city": "Gimli",
    "country": "CA",
    "lat": 50.62810134887695,
    "lon": -97.04329681396484,
    "elevation": 753
  },
  {
    "icao": "CYGP",
    "iata": "YGP",
    "name": "Michel-Pouliot Gaspé Airport",
    "city": "Gaspé",
    "country": "CA",
    "lat": 48.774915,
    "lon": -64.481893,
    "elevation": 112
  },
  {
    "icao": "CYGQ",
    "iata": "YGQ",
    "name": "Geraldton Greenstone Regional Airport",
    "city": "Geraldton",
    "country": "CA",
    "lat": 49.77830123901367,
    "lon": -86.93939971923828,
    "elevation": 1144
  },
  {
    "icao": "CYGR",
    "iata": "YGR",
    "name": "Îles-de-la-Madeleine Airport",
    "city": "Les Îles-de-la-Madeleine",
    "country": "CA",
    "lat": 47.425242,
    "lon": -61.778612,
    "elevation": 35
  },
  {
    "icao": "CYGV",
    "iata": "YGV",
    "name": "Havre-Saint-Pierre Airport",
    "city": "Havre-Saint-Pierre",
    "country": "CA",
    "lat": 50.281898,
    "lon": -63.611401,
    "elevation": 124
  },
  {
    "icao": "CYGW",
    "iata": "YGW",
    "name": "Kuujjuarapik Airport",
    "city": "Kuujjuarapik",
    "country": "CA",
    "lat": 55.281898498535156,
    "lon": -77.76529693603516,
    "elevation": 34
  },
  {
    "icao": "CYHD",
    "iata": "YHD",
    "name": "Dryden Regional Airport",
    "city": "Dryden",
    "country": "CA",
    "lat": 49.831699,
    "lon": -92.744202,
    "elevation": 1354
  },
  {
    "icao": "CYHF",
    "iata": "YHF",
    "name": "Hearst René Fontaine Municipal Airport",
    "city": "Hearst",
    "country": "CA",
    "lat": 49.71419906616211,
    "lon": -83.68609619140625,
    "elevation": 827
  },
  {
    "icao": "CYHM",
    "iata": "YHM",
    "name": "John C. Munro Hamilton International Airport",
    "city": "Hamilton",
    "country": "CA",
    "lat": 43.173599243199995,
    "lon": -79.93499755859999,
    "elevation": 780
  },
  {
    "icao": "CYHN",
    "iata": "YHN",
    "name": "Hornepayne Municipal Airport",
    "city": "Hornepayne",
    "country": "CA",
    "lat": 49.19309997558594,
    "lon": -84.75890350341797,
    "elevation": 1099
  },
  {
    "icao": "CYHT",
    "iata": "YHT",
    "name": "Haines Junction Airport",
    "city": "Haines Junction",
    "country": "CA",
    "lat": 60.7892,
    "lon": -137.546005,
    "elevation": 2150
  },
  {
    "icao": "CYHU",
    "iata": "YHU",
    "name": "Montréal / Saint-Hubert Metropolitan Airport",
    "city": "Montréal",
    "country": "CA",
    "lat": 45.517502,
    "lon": -73.416901,
    "elevation": 90
  },
  {
    "icao": "CYHY",
    "iata": "YHY",
    "name": "Hay River / Merlyn Carter Airport",
    "city": "Hay River",
    "country": "CA",
    "lat": 60.8396987915,
    "lon": -115.782997131,
    "elevation": 541
  },
  {
    "icao": "CYHZ",
    "iata": "YHZ",
    "name": "Halifax / Stanfield International Airport",
    "city": "Halifax",
    "country": "CA",
    "lat": 44.8807983398,
    "lon": -63.5085983276,
    "elevation": 477
  },
  {
    "icao": "CYIB",
    "iata": "YIB",
    "name": "Atikokan Municipal Airport",
    "city": "Atikokan",
    "country": "CA",
    "lat": 48.773899,
    "lon": -91.638603,
    "elevation": 1408
  },
  {
    "icao": "CYID",
    "iata": "YDG",
    "name": "Digby / Annapolis Regional Airport",
    "city": "Digby",
    "country": "CA",
    "lat": 44.5458450365,
    "lon": -65.7854247093,
    "elevation": 499
  },
  {
    "icao": "CYIF",
    "iata": "YIF",
    "name": "St Augustin Airport",
    "city": "St-Augustin",
    "country": "CA",
    "lat": 51.2117,
    "lon": -58.658298,
    "elevation": 20
  },
  {
    "icao": "CYIV",
    "iata": "YIV",
    "name": "Island Lake Airport",
    "city": "Island Lake",
    "country": "CA",
    "lat": 53.857200622558594,
    "lon": -94.65360260009766,
    "elevation": 770
  },
  {
    "icao": "CYJF",
    "iata": "YJF",
    "name": "Fort Liard Airport",
    "city": "Fort Liard",
    "country": "CA",
    "lat": 60.235801696799996,
    "lon": -123.46900177,
    "elevation": 708
  },
  {
    "icao": "CYJN",
    "iata": "YJN",
    "name": "St Jean Airport",
    "city": "St Jean",
    "country": "CA",
    "lat": 45.29439926147461,
    "lon": -73.28109741210938,
    "elevation": 136
  },
  {
    "icao": "CYJT",
    "iata": "YJT",
    "name": "Dymond Airport",
    "city": "Stephenville",
    "country": "CA",
    "lat": 48.544201,
    "lon": -58.549999,
    "elevation": 84
  },
  {
    "icao": "CYKA",
    "iata": "YKA",
    "name": "Kamloops John Moose Fulton Field Regional Airport",
    "city": "Kamloops",
    "country": "CA",
    "lat": 50.703038,
    "lon": -120.448641,
    "elevation": 1133
  },
  {
    "icao": "CYKF",
    "iata": "YKF",
    "name": "Region of Waterloo International Airport",
    "city": "Breslau",
    "country": "CA",
    "lat": 43.4608,
    "lon": -80.378601,
    "elevation": 1054
  },
  {
    "icao": "CYKJ",
    "iata": "YKJ",
    "name": "Key Lake Airport",
    "city": "Key Lake",
    "country": "CA",
    "lat": 57.256099700927734,
    "lon": -105.61799621582031,
    "elevation": 1679
  },
  {
    "icao": "CYKL",
    "iata": "YKL",
    "name": "Schefferville Airport",
    "city": "Schefferville",
    "country": "CA",
    "lat": 54.805301666259766,
    "lon": -66.8052978515625,
    "elevation": 1709
  },
  {
    "icao": "CYKM",
    "iata": "YKD",
    "name": "Kincardine Municipal Airport",
    "city": "Kincardine",
    "country": "CA",
    "lat": 44.201401,
    "lon": -81.606697,
    "elevation": 772
  },
  {
    "icao": "CYKX",
    "iata": "YKX",
    "name": "Kirkland Lake Airport",
    "city": "Kirkland Lake",
    "country": "CA",
    "lat": 48.21030044555664,
    "lon": -79.98139953613281,
    "elevation": 1157
  },
  {
    "icao": "CYKY",
    "iata": "YKY",
    "name": "Kindersley Airport",
    "city": "Kindersley",
    "country": "CA",
    "lat": 51.5175018311,
    "lon": -109.180999756,
    "elevation": 2277
  },
  {
    "icao": "CYLD",
    "iata": "YLD",
    "name": "Chapleau Airport",
    "city": "Chapleau",
    "country": "CA",
    "lat": 47.81999969482422,
    "lon": -83.3467025756836,
    "elevation": 1470
  },
  {
    "icao": "CYLJ",
    "iata": "YLJ",
    "name": "Meadow Lake Airport",
    "city": "Meadow Lake",
    "country": "CA",
    "lat": 54.125301361083984,
    "lon": -108.52300262451172,
    "elevation": 1576
  },
  {
    "icao": "CYLL",
    "iata": "YLL",
    "name": "Lloydminster Airport",
    "city": "Lloydminster",
    "country": "CA",
    "lat": 53.3092,
    "lon": -110.072998,
    "elevation": 2193
  },
  {
    "icao": "CYLR",
    "iata": "YLR",
    "name": "Leaf Rapids Airport",
    "city": "Leaf Rapids",
    "country": "CA",
    "lat": 56.513301849365234,
    "lon": -99.98529815673828,
    "elevation": 959
  },
  {
    "icao": "CYLS",
    "iata": "YLK",
    "name": "Barrie-Lake Simcoe Regional Airport",
    "city": "Barrie",
    "country": "CA",
    "lat": 44.485056,
    "lon": -79.554663,
    "elevation": 972
  },
  {
    "icao": "CYLT",
    "iata": "YLT",
    "name": "Alert Airport",
    "city": "Alert",
    "country": "CA",
    "lat": 82.517799,
    "lon": -62.280602,
    "elevation": 100
  },
  {
    "icao": "CYLW",
    "iata": "YLW",
    "name": "Kelowna International Airport",
    "city": "Kelowna",
    "country": "CA",
    "lat": 49.9561,
    "lon": -119.377998,
    "elevation": 1421
  },
  {
    "icao": "CYMA",
    "iata": "YMA",
    "name": "Mayo Airport",
    "city": "Mayo",
    "country": "CA",
    "lat": 63.61640167236328,
    "lon": -135.8679962158203,
    "elevation": 1653
  },
  {
    "icao": "CYME",
    "iata": "YME",
    "name": "Matane Airport",
    "city": "Matane",
    "country": "CA",
    "lat": 48.85689926147461,
    "lon": -67.45330047607422,
    "elevation": 102
  },
  {
    "icao": "CYMG",
    "iata": "YMG",
    "name": "Manitouwadge Airport",
    "city": "Manitouwadge",
    "country": "CA",
    "lat": 49.083900451660156,
    "lon": -85.86060333251953,
    "elevation": 1198
  },
  {
    "icao": "CYMJ",
    "iata": "YMJ",
    "name": "Moose Jaw Air Vice Marshal C. M. McEwen Airport",
    "city": "Moose Jaw",
    "country": "CA",
    "lat": 50.330299377441406,
    "lon": -105.55899810791016,
    "elevation": 1892
  },
  {
    "icao": "CYML",
    "iata": "YML",
    "name": "Charlevoix Airport",
    "city": "Charlevoix",
    "country": "CA",
    "lat": 47.59749984741211,
    "lon": -70.2238998413086,
    "elevation": 977
  },
  {
    "icao": "CYMM",
    "iata": "YMM",
    "name": "Fort McMurray Airport",
    "city": "Fort McMurray",
    "country": "CA",
    "lat": 56.653301239,
    "lon": -111.222000122,
    "elevation": 1211
  },
  {
    "icao": "CYMO",
    "iata": "YMO",
    "name": "Moosonee Airport",
    "city": "Moosonee",
    "country": "CA",
    "lat": 51.291099548339844,
    "lon": -80.60780334472656,
    "elevation": 30
  },
  {
    "icao": "CYMT",
    "iata": "YMT",
    "name": "Chapais Airport",
    "city": "Chibougamau",
    "country": "CA",
    "lat": 49.77190017700195,
    "lon": -74.5280990600586,
    "elevation": 1270
  },
  {
    "icao": "CYMX",
    "iata": "YMX",
    "name": "Montreal International (Mirabel) Airport",
    "city": "Montréal",
    "country": "CA",
    "lat": 45.679501,
    "lon": -74.038696,
    "elevation": 270
  },
  {
    "icao": "CYNA",
    "iata": "YNA",
    "name": "Natashquan Airport",
    "city": "Natashquan",
    "country": "CA",
    "lat": 50.190114,
    "lon": -61.78898,
    "elevation": 39
  },
  {
    "icao": "CYND",
    "iata": "YND",
    "name": "Ottawa / Gatineau Airport",
    "city": "Gatineau",
    "country": "CA",
    "lat": 45.521702,
    "lon": -75.563599,
    "elevation": 211
  },
  {
    "icao": "CYNJ",
    "iata": "YLY",
    "name": "Langley Airport",
    "city": "Langley",
    "country": "CA",
    "lat": 49.1008,
    "lon": -122.630997,
    "elevation": 34
  },
  {
    "icao": "CYNL",
    "iata": "YNL",
    "name": "Points North Landing Airport",
    "city": "Points North Landing",
    "country": "CA",
    "lat": 58.27669906616211,
    "lon": -104.08200073242188,
    "elevation": 1605
  },
  {
    "icao": "CYNM",
    "iata": "YNM",
    "name": "Matagami Airport",
    "city": "Matagami",
    "country": "CA",
    "lat": 49.76169967651367,
    "lon": -77.80280303955078,
    "elevation": 918
  },
  {
    "icao": "CYOA",
    "iata": "YOA",
    "name": "Ekati Airport",
    "city": "Ekati",
    "country": "CA",
    "lat": 64.6988983154,
    "lon": -110.614997864,
    "elevation": 1536
  },
  {
    "icao": "CYOD",
    "iata": "YOD",
    "name": "CFB Cold Lake",
    "city": "Cold Lake",
    "country": "CA",
    "lat": 54.404998779296875,
    "lon": -110.27899932861328,
    "elevation": 1775
  },
  {
    "icao": "CYOJ",
    "iata": "YOJ",
    "name": "High Level Airport",
    "city": "High Level",
    "country": "CA",
    "lat": 58.62139892578125,
    "lon": -117.16500091552734,
    "elevation": 1110
  },
  {
    "icao": "CYOO",
    "iata": "YOO",
    "name": "Oshawa Executive Airport",
    "city": "Oshawa",
    "country": "CA",
    "lat": 43.922798,
    "lon": -78.894997,
    "elevation": 460
  },
  {
    "icao": "CYOP",
    "iata": "YOP",
    "name": "Rainbow Lake Airport",
    "city": "Rainbow Lake",
    "country": "CA",
    "lat": 58.491402,
    "lon": -119.407997,
    "elevation": 1759
  },
  {
    "icao": "CYOS",
    "iata": "YOS",
    "name": "Owen Sound / Billy Bishop Regional Airport",
    "city": "Owen Sound",
    "country": "CA",
    "lat": 44.5903015137,
    "lon": -80.8375015259,
    "elevation": 1007
  },
  {
    "icao": "CYOW",
    "iata": "YOW",
    "name": "Ottawa Macdonald-Cartier International Airport",
    "city": "Ottawa",
    "country": "CA",
    "lat": 45.322498,
    "lon": -75.669197,
    "elevation": 374
  },
  {
    "icao": "CYPA",
    "iata": "YPA",
    "name": "Prince Albert Glass Field",
    "city": "Prince Albert",
    "country": "CA",
    "lat": 53.214199066199996,
    "lon": -105.672996521,
    "elevation": 1405
  },
  {
    "icao": "CYPD",
    "iata": "YPS",
    "name": "Port Hawkesbury Airport",
    "city": "Port Hawkesbury",
    "country": "CA",
    "lat": 45.6567001343,
    "lon": -61.3680992126,
    "elevation": 377
  },
  {
    "icao": "CYPE",
    "iata": "YPE",
    "name": "Peace River Airport",
    "city": "Peace River",
    "country": "CA",
    "lat": 56.226898,
    "lon": -117.446999,
    "elevation": 1873
  },
  {
    "icao": "CYPG",
    "iata": "YPG",
    "name": "Portage-la-Prairie / Southport Airport",
    "city": "Portage la Prairie",
    "country": "CA",
    "lat": 49.903099,
    "lon": -98.273817,
    "elevation": 885
  },
  {
    "icao": "CYPL",
    "iata": "YPL",
    "name": "Pickle Lake Airport",
    "city": "Pickle Lake",
    "country": "CA",
    "lat": 51.4463996887207,
    "lon": -90.21420288085938,
    "elevation": 1267
  },
  {
    "icao": "CYPN",
    "iata": "YPN",
    "name": "Port-Menier Airport",
    "city": "Port-Menier",
    "country": "CA",
    "lat": 49.836399,
    "lon": -64.288597,
    "elevation": 167
  },
  {
    "icao": "CYPQ",
    "iata": "YPQ",
    "name": "Peterborough Municipal Airport",
    "city": "Peterborough",
    "country": "CA",
    "lat": 44.23,
    "lon": -78.363297,
    "elevation": 628
  },
  {
    "icao": "CYPR",
    "iata": "YPR",
    "name": "Prince Rupert Airport",
    "city": "Prince Rupert",
    "country": "CA",
    "lat": 54.286098480199996,
    "lon": -130.445007324,
    "elevation": 116
  },
  {
    "icao": "CYPW",
    "iata": "YPW",
    "name": "Powell River Airport",
    "city": "Powell River",
    "country": "CA",
    "lat": 49.83420181274414,
    "lon": -124.5,
    "elevation": 425
  },
  {
    "icao": "CYPX",
    "iata": "YPX",
    "name": "Puvirnituq Airport",
    "city": "Puvirnituq",
    "country": "CA",
    "lat": 60.050598,
    "lon": -77.286903,
    "elevation": 74
  },
  {
    "icao": "CYPY",
    "iata": "YPY",
    "name": "Fort Chipewyan Airport",
    "city": "Fort Chipewyan",
    "country": "CA",
    "lat": 58.7672004699707,
    "lon": -111.11699676513672,
    "elevation": 761
  },
  {
    "icao": "CYPZ",
    "iata": "YPZ",
    "name": "Burns Lake Airport",
    "city": "Burns Lake",
    "country": "CA",
    "lat": 54.3764,
    "lon": -125.950996,
    "elevation": 2343
  },
  {
    "icao": "CYQA",
    "iata": "YQA",
    "name": "Muskoka Airport",
    "city": "Gravenhurst",
    "country": "CA",
    "lat": 44.975376,
    "lon": -79.306546,
    "elevation": 925
  },
  {
    "icao": "CYQB",
    "iata": "YQB",
    "name": "Quebec Jean Lesage International Airport",
    "city": "Quebec",
    "country": "CA",
    "lat": 46.7911,
    "lon": -71.393303,
    "elevation": 244
  },
  {
    "icao": "CYQD",
    "iata": "YQD",
    "name": "The Pas Airport",
    "city": "The Pas",
    "country": "CA",
    "lat": 53.97140121459961,
    "lon": -101.09100341796875,
    "elevation": 887
  },
  {
    "icao": "CYQF",
    "iata": "YQF",
    "name": "Red Deer Regional Airport",
    "city": "Springbrook",
    "country": "CA",
    "lat": 52.182201,
    "lon": -113.893997,
    "elevation": 2968
  },
  {
    "icao": "CYQG",
    "iata": "YQG",
    "name": "Windsor Airport",
    "city": "Windsor",
    "country": "CA",
    "lat": 42.27560043334961,
    "lon": -82.95559692382812,
    "elevation": 622
  },
  {
    "icao": "CYQH",
    "iata": "YQH",
    "name": "Watson Lake Airport",
    "city": "Watson Lake",
    "country": "CA",
    "lat": 60.116839,
    "lon": -128.821993,
    "elevation": 2255
  },
  {
    "icao": "CYQI",
    "iata": "YQI",
    "name": "Yarmouth Airport",
    "city": "Yarmouth",
    "country": "CA",
    "lat": 43.826900482177734,
    "lon": -66.08809661865234,
    "elevation": 141
  },
  {
    "icao": "CYQK",
    "iata": "YQK",
    "name": "Kenora Airport",
    "city": "Kenora",
    "country": "CA",
    "lat": 49.788299560546875,
    "lon": -94.36309814453125,
    "elevation": 1332
  },
  {
    "icao": "CYQL",
    "iata": "YQL",
    "name": "Lethbridge County Airport",
    "city": "Lethbridge",
    "country": "CA",
    "lat": 49.6302986145,
    "lon": -112.800003052,
    "elevation": 3048
  },
  {
    "icao": "CYQM",
    "iata": "YQM",
    "name": "Greater Moncton Roméo LeBlanc International Airport",
    "city": "Moncton",
    "country": "CA",
    "lat": 46.112202,
    "lon": -64.678596,
    "elevation": 232
  },
  {
    "icao": "CYQN",
    "iata": "YQN",
    "name": "Nakina Airport",
    "city": "Nakina",
    "country": "CA",
    "lat": 50.18280029296875,
    "lon": -86.69640350341797,
    "elevation": 1057
  },
  {
    "icao": "CYQQ",
    "iata": "YQQ",
    "name": "Comox Valley Airport / CFB Comox",
    "city": "Comox",
    "country": "CA",
    "lat": 49.7108,
    "lon": -124.887001,
    "elevation": 84
  },
  {
    "icao": "CYQR",
    "iata": "YQR",
    "name": "Regina International Airport",
    "city": "Regina",
    "country": "CA",
    "lat": 50.43190002441406,
    "lon": -104.66600036621094,
    "elevation": 1894
  },
  {
    "icao": "CYQS",
    "iata": "YQS",
    "name": "St Thomas Municipal Airport",
    "city": "St Thomas",
    "country": "CA",
    "lat": 42.77000045776367,
    "lon": -81.11080169677734,
    "elevation": 778
  },
  {
    "icao": "CYQT",
    "iata": "YQT",
    "name": "Thunder Bay Airport",
    "city": "Thunder Bay",
    "country": "CA",
    "lat": 48.37189865112305,
    "lon": -89.32389831542969,
    "elevation": 653
  },
  {
    "icao": "CYQU",
    "iata": "YQU",
    "name": "Grande Prairie Airport",
    "city": "Grande Prairie",
    "country": "CA",
    "lat": 55.1796989441,
    "lon": -118.885002136,
    "elevation": 2195
  },
  {
    "icao": "CYQV",
    "iata": "YQV",
    "name": "Yorkton Municipal Airport",
    "city": "Yorkton",
    "country": "CA",
    "lat": 51.26470184326172,
    "lon": -102.46199798583984,
    "elevation": 1635
  },
  {
    "icao": "CYQW",
    "iata": "YQW",
    "name": "North Battleford Airport",
    "city": "North Battleford",
    "country": "CA",
    "lat": 52.769409,
    "lon": -108.243742,
    "elevation": 1799
  },
  {
    "icao": "CYQX",
    "iata": "YQX",
    "name": "Gander International Airport / CFB Gander",
    "city": "Gander",
    "country": "CA",
    "lat": 48.936258,
    "lon": -54.567719,
    "elevation": 496
  },
  {
    "icao": "CYQY",
    "iata": "YQY",
    "name": "Sydney / J.A. Douglas McCurdy Airport",
    "city": "Sydney",
    "country": "CA",
    "lat": 46.1614,
    "lon": -60.047798,
    "elevation": 203
  },
  {
    "icao": "CYQZ",
    "iata": "YQZ",
    "name": "Quesnel Airport",
    "city": "Quesnel",
    "country": "CA",
    "lat": 53.026100158691406,
    "lon": -122.51000213623047,
    "elevation": 1789
  },
  {
    "icao": "CYRB",
    "iata": "YRB",
    "name": "Resolute Bay Airport",
    "city": "Resolute Bay",
    "country": "CA",
    "lat": 74.7169036865,
    "lon": -94.9693984985,
    "elevation": 215
  },
  {
    "icao": "CYRI",
    "iata": "YRI",
    "name": "Rivière-du-Loup Airport",
    "city": "Rivière-du-Loup",
    "country": "CA",
    "lat": 47.764400482177734,
    "lon": -69.58470153808594,
    "elevation": 427
  },
  {
    "icao": "CYRJ",
    "iata": "YRJ",
    "name": "Roberval Airport",
    "city": "Roberval",
    "country": "CA",
    "lat": 48.519665,
    "lon": -72.265735,
    "elevation": 586
  },
  {
    "icao": "CYRL",
    "iata": "YRL",
    "name": "Red Lake Airport",
    "city": "Red Lake",
    "country": "CA",
    "lat": 51.066898345947266,
    "lon": -93.79309844970703,
    "elevation": 1265
  },
  {
    "icao": "CYRO",
    "iata": "YRO",
    "name": "Ottawa / Rockcliffe Airport",
    "city": "Ottawa",
    "country": "CA",
    "lat": 45.4603004456,
    "lon": -75.64610290530001,
    "elevation": 188
  },
  {
    "icao": "CYRQ",
    "iata": "YRQ",
    "name": "Trois-Rivières Airport",
    "city": "Trois-Rivières",
    "country": "CA",
    "lat": 46.35279846191406,
    "lon": -72.67939758300781,
    "elevation": 199
  },
  {
    "icao": "CYRT",
    "iata": "YRT",
    "name": "Rankin Inlet Airport",
    "city": "Rankin Inlet",
    "country": "CA",
    "lat": 62.8114013672,
    "lon": -92.1157989502,
    "elevation": 94
  },
  {
    "icao": "CYRV",
    "iata": "YRV",
    "name": "Revelstoke Airport",
    "city": "Revelstoke",
    "country": "CA",
    "lat": 50.962245,
    "lon": -118.184258,
    "elevation": 1459
  },
  {
    "icao": "CYSB",
    "iata": "YSB",
    "name": "Sudbury Airport",
    "city": "Sudbury",
    "country": "CA",
    "lat": 46.625,
    "lon": -80.79889678955078,
    "elevation": 1141
  },
  {
    "icao": "CYSC",
    "iata": "YSC",
    "name": "Sherbrooke Airport",
    "city": "Sherbrooke",
    "country": "CA",
    "lat": 45.438599,
    "lon": -71.691399,
    "elevation": 792
  },
  {
    "icao": "CYSF",
    "iata": "YSF",
    "name": "Stony Rapids Airport",
    "city": "Stony Rapids",
    "country": "CA",
    "lat": 59.250301361083984,
    "lon": -105.84100341796875,
    "elevation": 805
  },
  {
    "icao": "CYSH",
    "iata": "YSH",
    "name": "Smiths Falls-Montague (Russ Beach) Airport",
    "city": "Smiths Falls",
    "country": "CA",
    "lat": 44.945801,
    "lon": -75.940598,
    "elevation": 416
  },
  {
    "icao": "CYSJ",
    "iata": "YSJ",
    "name": "Saint John Airport",
    "city": "Saint John",
    "country": "CA",
    "lat": 45.31610107421875,
    "lon": -65.89029693603516,
    "elevation": 357
  },
  {
    "icao": "CYSL",
    "iata": "YSL",
    "name": "Saint-Léonard Airport",
    "city": "Saint-Léonard",
    "country": "CA",
    "lat": 47.157097,
    "lon": -67.836242,
    "elevation": 793
  },
  {
    "icao": "CYSM",
    "iata": "YSM",
    "name": "Fort Smith Airport",
    "city": "Fort Smith",
    "country": "CA",
    "lat": 60.020302,
    "lon": -111.961998,
    "elevation": 671
  },
  {
    "icao": "CYSN",
    "iata": "YCM",
    "name": "Niagara District Airport",
    "city": "Niagara-on-the-Lake",
    "country": "CA",
    "lat": 43.191598,
    "lon": -79.171686,
    "elevation": 321
  },
  {
    "icao": "CYSP",
    "iata": "YSP",
    "name": "Marathon Airport",
    "city": "Marathon",
    "country": "CA",
    "lat": 48.75529861450195,
    "lon": -86.34439849853516,
    "elevation": 1035
  },
  {
    "icao": "CYSU",
    "iata": "YSU",
    "name": "Summerside Airport",
    "city": "Slemon Park",
    "country": "CA",
    "lat": 46.440601,
    "lon": -63.833599,
    "elevation": 56
  },
  {
    "icao": "CYTA",
    "iata": "YTA",
    "name": "Pembroke Airport",
    "city": "Pembroke",
    "country": "CA",
    "lat": 45.86439895629883,
    "lon": -77.25170135498047,
    "elevation": 529
  },
  {
    "icao": "CYTF",
    "iata": "YTF",
    "name": "Alma Airport",
    "city": "Alma",
    "country": "CA",
    "lat": 48.5089,
    "lon": -71.641899,
    "elevation": 445
  },
  {
    "icao": "CYTH",
    "iata": "YTH",
    "name": "Thompson Airport",
    "city": "Thompson",
    "country": "CA",
    "lat": 55.80110168457031,
    "lon": -97.86419677734375,
    "elevation": 729
  },
  {
    "icao": "CYTR",
    "iata": "YTR",
    "name": "CFB Trenton",
    "city": "Trenton",
    "country": "CA",
    "lat": 44.118900299072266,
    "lon": -77.5280990600586,
    "elevation": 283
  },
  {
    "icao": "CYTS",
    "iata": "YTS",
    "name": "Timmins/Victor M. Power",
    "city": "Timmins",
    "country": "CA",
    "lat": 48.569698333699996,
    "lon": -81.376701355,
    "elevation": 967
  },
  {
    "icao": "CYTZ",
    "iata": "YTZ",
    "name": "Billy Bishop Toronto City Centre Airport",
    "city": "Toronto",
    "country": "CA",
    "lat": 43.627499,
    "lon": -79.396202,
    "elevation": 252
  },
  {
    "icao": "CYUL",
    "iata": "YUL",
    "name": "Montreal / Pierre Elliott Trudeau International Airport",
    "city": "Montréal",
    "country": "CA",
    "lat": 45.467837,
    "lon": -73.742294,
    "elevation": 118
  },
  {
    "icao": "CYUX",
    "iata": "YUX",
    "name": "Hall Beach Airport",
    "city": "Sanirajak",
    "country": "CA",
    "lat": 68.7761,
    "lon": -81.2425,
    "elevation": 30
  },
  {
    "icao": "CYUY",
    "iata": "YUY",
    "name": "Rouyn Noranda Airport",
    "city": "Rouyn-Noranda",
    "country": "CA",
    "lat": 48.20610046386719,
    "lon": -78.83560180664062,
    "elevation": 988
  },
  {
    "icao": "CYVB",
    "iata": "YVB",
    "name": "Bonaventure Airport",
    "city": "Bonaventure",
    "country": "CA",
    "lat": 48.071098,
    "lon": -65.460297,
    "elevation": 123
  },
  {
    "icao": "CYVC",
    "iata": "YVC",
    "name": "La Ronge Airport",
    "city": "La Ronge",
    "country": "CA",
    "lat": 55.151401519800004,
    "lon": -105.262001038,
    "elevation": 1242
  },
  {
    "icao": "CYVK",
    "iata": "YVE",
    "name": "Vernon Regional Airport",
    "city": "Vernon",
    "country": "CA",
    "lat": 50.246163,
    "lon": -119.330963,
    "elevation": 1140
  },
  {
    "icao": "CYVO",
    "iata": "YVO",
    "name": "Val-d'Or Airport",
    "city": "Val-d'Or",
    "country": "CA",
    "lat": 48.0532989502,
    "lon": -77.7827987671,
    "elevation": 1107
  },
  {
    "icao": "CYVP",
    "iata": "YVP",
    "name": "Kuujjuaq Airport",
    "city": "Kuujjuaq",
    "country": "CA",
    "lat": 58.096099853515625,
    "lon": -68.4269027709961,
    "elevation": 129
  },
  {
    "icao": "CYVQ",
    "iata": "YVQ",
    "name": "Norman Wells Airport",
    "city": "Norman Wells",
    "country": "CA",
    "lat": 65.28160095214844,
    "lon": -126.7979965209961,
    "elevation": 238
  },
  {
    "icao": "CYVR",
    "iata": "YVR",
    "name": "Vancouver International Airport",
    "city": "Vancouver",
    "country": "CA",
    "lat": 49.193901062,
    "lon": -123.183998108,
    "elevation": 14
  },
  {
    "icao": "CYVV",
    "iata": "YVV",
    "name": "Wiarton Airport",
    "city": "Wiarton",
    "country": "CA",
    "lat": 44.7458,
    "lon": -81.107201,
    "elevation": 729
  },
  {
    "icao": "CYWG",
    "iata": "YWG",
    "name": "Winnipeg / James Armstrong Richardson International Airport",
    "city": "Winnipeg",
    "country": "CA",
    "lat": 49.909999847399995,
    "lon": -97.2398986816,
    "elevation": 783
  },
  {
    "icao": "CYWK",
    "iata": "YWK",
    "name": "Wabush Airport",
    "city": "Wabush",
    "country": "CA",
    "lat": 52.92190170288086,
    "lon": -66.8644027709961,
    "elevation": 1808
  },
  {
    "icao": "CYWL",
    "iata": "YWL",
    "name": "Williams Lake Airport",
    "city": "Williams Lake",
    "country": "CA",
    "lat": 52.1831016541,
    "lon": -122.054000854,
    "elevation": 3085
  },
  {
    "icao": "CYWY",
    "iata": "YWY",
    "name": "Wrigley Airport",
    "city": "Wrigley",
    "country": "CA",
    "lat": 63.20940017700195,
    "lon": -123.43699645996094,
    "elevation": 489
  },
  {
    "icao": "CYXC",
    "iata": "YXC",
    "name": "Cranbrook/Canadian Rockies International Airport",
    "city": "Cranbrook",
    "country": "CA",
    "lat": 49.610801696777,
    "lon": -115.78199768066,
    "elevation": 3082
  },
  {
    "icao": "CYXE",
    "iata": "YXE",
    "name": "Saskatoon John G. Diefenbaker International Airport",
    "city": "Saskatoon",
    "country": "CA",
    "lat": 52.170799255371094,
    "lon": -106.69999694824219,
    "elevation": 1653
  },
  {
    "icao": "CYXH",
    "iata": "YXH",
    "name": "Medicine Hat Regional Airport",
    "city": "Medicine Hat",
    "country": "CA",
    "lat": 50.018902,
    "lon": -110.721001,
    "elevation": 2352
  },
  {
    "icao": "CYXJ",
    "iata": "YXJ",
    "name": "Fort St John / North Peace Regional Airport",
    "city": "Fort Saint John",
    "country": "CA",
    "lat": 56.238098,
    "lon": -120.739998,
    "elevation": 2280
  },
  {
    "icao": "CYXK",
    "iata": "YXK",
    "name": "Rimouski Airport",
    "city": "Rimouski",
    "country": "CA",
    "lat": 48.477644,
    "lon": -68.496323,
    "elevation": 82
  },
  {
    "icao": "CYXL",
    "iata": "YXL",
    "name": "Sioux Lookout Airport",
    "city": "Sioux Lookout",
    "country": "CA",
    "lat": 50.11389923095703,
    "lon": -91.9052963256836,
    "elevation": 1258
  },
  {
    "icao": "CYXQ",
    "iata": "YXQ",
    "name": "Beaver Creek Airport",
    "city": "Beaver Creek",
    "country": "CA",
    "lat": 62.410301208496094,
    "lon": -140.86700439453125,
    "elevation": 2131
  },
  {
    "icao": "CYXR",
    "iata": "YXR",
    "name": "Earlton (Timiskaming Regional) Airport",
    "city": "Earlton",
    "country": "CA",
    "lat": 47.697400654599996,
    "lon": -79.8473453522,
    "elevation": 800
  },
  {
    "icao": "CYXS",
    "iata": "YXS",
    "name": "Prince George Airport",
    "city": "Prince George",
    "country": "CA",
    "lat": 53.884311,
    "lon": -122.666554,
    "elevation": 2267
  },
  {
    "icao": "CYXT",
    "iata": "YXT",
    "name": "Northwest Regional Airport Terrace-Kitimat",
    "city": "Terrace",
    "country": "CA",
    "lat": 54.468498,
    "lon": -128.576009,
    "elevation": 713
  },
  {
    "icao": "CYXU",
    "iata": "YXU",
    "name": "London Airport",
    "city": "London",
    "country": "CA",
    "lat": 43.035599,
    "lon": -81.1539,
    "elevation": 912
  },
  {
    "icao": "CYXX",
    "iata": "YXX",
    "name": "Abbotsford International Airport",
    "city": "Abbotsford",
    "country": "CA",
    "lat": 49.025299,
    "lon": -122.361,
    "elevation": 195
  },
  {
    "icao": "CYXY",
    "iata": "YXY",
    "name": "Whitehorse / Erik Nielsen International Airport",
    "city": "Whitehorse",
    "country": "CA",
    "lat": 60.709599,
    "lon": -135.067001,
    "elevation": 2317
  },
  {
    "icao": "CYXZ",
    "iata": "YXZ",
    "name": "Wawa Airport",
    "city": "Wawa",
    "country": "CA",
    "lat": 47.96670150756836,
    "lon": -84.78669738769531,
    "elevation": 942
  },
  {
    "icao": "CYYB",
    "iata": "YYB",
    "name": "North Bay Jack Garland Airport",
    "city": "North Bay",
    "country": "CA",
    "lat": 46.363602,
    "lon": -79.422798,
    "elevation": 1215
  },
  {
    "icao": "CYYC",
    "iata": "YYC",
    "name": "Calgary International Airport",
    "city": "Calgary",
    "country": "CA",
    "lat": 51.118822,
    "lon": -114.009933,
    "elevation": 3557
  },
  {
    "icao": "CYYD",
    "iata": "YYD",
    "name": "Smithers Airport",
    "city": "Smithers",
    "country": "CA",
    "lat": 54.82469940185547,
    "lon": -127.18299865722656,
    "elevation": 1712
  },
  {
    "icao": "CYYE",
    "iata": "YYE",
    "name": "Fort Nelson Airport",
    "city": "Fort Nelson",
    "country": "CA",
    "lat": 58.8363990784,
    "lon": -122.597000122,
    "elevation": 1253
  },
  {
    "icao": "CYYF",
    "iata": "YYF",
    "name": "Penticton Airport",
    "city": "Penticton",
    "country": "CA",
    "lat": 49.46310043334961,
    "lon": -119.60199737548828,
    "elevation": 1129
  },
  {
    "icao": "CYYG",
    "iata": "YYG",
    "name": "Charlottetown Airport",
    "city": "Charlottetown",
    "country": "CA",
    "lat": 46.290000915527344,
    "lon": -63.12110137939453,
    "elevation": 160
  },
  {
    "icao": "CYYJ",
    "iata": "YYJ",
    "name": "Victoria International Airport",
    "city": "Victoria",
    "country": "CA",
    "lat": 48.647201,
    "lon": -123.427792,
    "elevation": 63
  },
  {
    "icao": "CYYL",
    "iata": "YYL",
    "name": "Lynn Lake Airport",
    "city": "Lynn Lake",
    "country": "CA",
    "lat": 56.86389923095703,
    "lon": -101.07599639892578,
    "elevation": 1170
  },
  {
    "icao": "CYYN",
    "iata": "YYN",
    "name": "Swift Current Airport",
    "city": "Swift Current",
    "country": "CA",
    "lat": 50.291900634799994,
    "lon": -107.691001892,
    "elevation": 2680
  },
  {
    "icao": "CYYQ",
    "iata": "YYQ",
    "name": "Churchill Airport",
    "city": "Churchill",
    "country": "CA",
    "lat": 58.739200592041016,
    "lon": -94.06500244140625,
    "elevation": 94
  },
  {
    "icao": "CYYR",
    "iata": "YYR",
    "name": "Goose Bay Airport",
    "city": "Goose Bay",
    "country": "CA",
    "lat": 53.3191986084,
    "lon": -60.4258003235,
    "elevation": 160
  },
  {
    "icao": "CYYT",
    "iata": "YYT",
    "name": "St. John's International Airport",
    "city": "St. John's",
    "country": "CA",
    "lat": 47.618599,
    "lon": -52.7519,
    "elevation": 461
  },
  {
    "icao": "CYYU",
    "iata": "YYU",
    "name": "Kapuskasing Airport",
    "city": "Kapuskasing",
    "country": "CA",
    "lat": 49.411587,
    "lon": -82.469645,
    "elevation": 743
  },
  {
    "icao": "CYYW",
    "iata": "YYW",
    "name": "Armstrong Airport",
    "city": "Armstrong",
    "country": "CA",
    "lat": 50.29029846191406,
    "lon": -88.90969848632812,
    "elevation": 1058
  },
  {
    "icao": "CYYY",
    "iata": "YYY",
    "name": "Mont Joli Airport",
    "city": "Mont-Joli",
    "country": "CA",
    "lat": 48.60860061645508,
    "lon": -68.20809936523438,
    "elevation": 172
  },
  {
    "icao": "CYYZ",
    "iata": "YYZ",
    "name": "Toronto Lester B. Pearson International Airport",
    "city": "Toronto",
    "country": "CA",
    "lat": 43.6772,
    "lon": -79.6306,
    "elevation": 569
  },
  {
    "icao": "CYZE",
    "iata": "YZE",
    "name": "Gore Bay Manitoulin Airport",
    "city": "Gore Bay",
    "country": "CA",
    "lat": 45.8853,
    "lon": -82.567802,
    "elevation": 623
  },
  {
    "icao": "CYZF",
    "iata": "YZF",
    "name": "Yellowknife International Airport",
    "city": "Yellowknife",
    "country": "CA",
    "lat": 62.462799,
    "lon": -114.440002,
    "elevation": 675
  },
  {
    "icao": "CYZH",
    "iata": "YZH",
    "name": "Slave Lake Airport",
    "city": "Slave Lake",
    "country": "CA",
    "lat": 55.292945,
    "lon": -114.777276,
    "elevation": 1912
  },
  {
    "icao": "CYZP",
    "iata": "YZP",
    "name": "Sandspit Airport",
    "city": "Sandspit",
    "country": "CA",
    "lat": 53.25429916379999,
    "lon": -131.813995361,
    "elevation": 21
  },
  {
    "icao": "CYZR",
    "iata": "YZR",
    "name": "Chris Hadfield Airport",
    "city": "Sarnia",
    "country": "CA",
    "lat": 42.999401,
    "lon": -82.308899,
    "elevation": 594
  },
  {
    "icao": "CYZS",
    "iata": "YZS",
    "name": "Coral Harbour Airport",
    "city": "Coral Harbour",
    "country": "CA",
    "lat": 64.1932983398,
    "lon": -83.3593978882,
    "elevation": 210
  },
  {
    "icao": "CYZT",
    "iata": "YZT",
    "name": "Port Hardy Airport",
    "city": "Port Hardy",
    "country": "CA",
    "lat": 50.680599212646484,
    "lon": -127.36699676513672,
    "elevation": 71
  },
  {
    "icao": "CYZU",
    "iata": "YZU",
    "name": "Whitecourt Airport",
    "city": "Whitecourt",
    "country": "CA",
    "lat": 54.143902,
    "lon": -115.787003,
    "elevation": 2567
  },
  {
    "icao": "CYZV",
    "iata": "YZV",
    "name": "Sept-Îles Airport",
    "city": "Sept-Îles",
    "country": "CA",
    "lat": 50.22330093383789,
    "lon": -66.2656021118164,
    "elevation": 180
  },
  {
    "icao": "CYZW",
    "iata": "YZW",
    "name": "Teslin Airport",
    "city": "Teslin",
    "country": "CA",
    "lat": 60.17279815673828,
    "lon": -132.7429962158203,
    "elevation": 2313
  },
  {
    "icao": "CYZX",
    "iata": "YZX",
    "name": "CFB Greenwood",
    "city": "Greenwood",
    "country": "CA",
    "lat": 44.98440170288086,
    "lon": -64.91690063476562,
    "elevation": 92
  },
  {
    "icao": "CZAM",
    "iata": "YSN",
    "name": "Shuswap Regional Airport",
    "city": "Salmon Arm",
    "country": "CA",
    "lat": 50.682802,
    "lon": -119.228996,
    "elevation": 1751
  },
  {
    "icao": "CZBB",
    "iata": "YDT",
    "name": "Boundary Bay Airport",
    "city": "Delta",
    "country": "CA",
    "lat": 49.0742,
    "lon": -123.012001,
    "elevation": 6
  },
  {
    "icao": "CZBF",
    "iata": "ZBF",
    "name": "Bathurst Airport",
    "city": "South Tetagouche",
    "country": "CA",
    "lat": 47.6297,
    "lon": -65.738899,
    "elevation": 193
  },
  {
    "icao": "CZBM",
    "iata": "ZBM",
    "name": "Bromont (Roland Désourdy) Airport",
    "city": "Bromont",
    "country": "CA",
    "lat": 45.290798,
    "lon": -72.741402,
    "elevation": 375
  },
  {
    "icao": "CZEE",
    "iata": "KES",
    "name": "Kelsey Airport",
    "city": "Kelsey",
    "country": "CA",
    "lat": 56.0374984741,
    "lon": -96.50969696039999,
    "elevation": 600
  },
  {
    "icao": "CZFA",
    "iata": "ZFA",
    "name": "Faro Airport",
    "city": "Faro",
    "country": "CA",
    "lat": 62.20750045776367,
    "lon": -133.37600708007812,
    "elevation": 2351
  },
  {
    "icao": "CZGF",
    "iata": "ZGF",
    "name": "Grand Forks Airport",
    "city": "Grand Forks",
    "country": "CA",
    "lat": 49.015598,
    "lon": -118.431,
    "elevation": 1720
  },
  {
    "icao": "CZJG",
    "iata": "ZJG",
    "name": "Jenpeg Airport",
    "city": "Jenpeg",
    "country": "CA",
    "lat": 54.51890182495117,
    "lon": -98.04609680175781,
    "elevation": 729
  },
  {
    "icao": "CZJN",
    "iata": "ZJN",
    "name": "Swan River Airport",
    "city": "Swan River",
    "country": "CA",
    "lat": 52.120602,
    "lon": -101.236,
    "elevation": 1100
  },
  {
    "icao": "CZLQ",
    "iata": "YTD",
    "name": "Thicket Portage Airport",
    "city": "Thicket Portage",
    "country": "CA",
    "lat": 55.31890106201172,
    "lon": -97.70780181884766,
    "elevation": 678
  },
  {
    "icao": "CZMN",
    "iata": "PIW",
    "name": "Pikwitonei Airport",
    "city": "Pikwitonei",
    "country": "CA",
    "lat": 55.58890151977539,
    "lon": -97.16419982910156,
    "elevation": 630
  },
  {
    "icao": "CZMT",
    "iata": "ZMT",
    "name": "Masset Airport",
    "city": "Masset",
    "country": "CA",
    "lat": 54.0275,
    "lon": -132.125,
    "elevation": 25
  },
  {
    "icao": "CZPC",
    "iata": "WPC",
    "name": "Pincher Creek Airport",
    "city": "Pincher Creek",
    "country": "CA",
    "lat": 49.520429,
    "lon": -113.997002,
    "elevation": 3903
  },
  {
    "icao": "CZSJ",
    "iata": "ZSJ",
    "name": "Sandy Lake Airport",
    "city": "Sandy Lake",
    "country": "CA",
    "lat": 53.06420135498047,
    "lon": -93.34439849853516,
    "elevation": 951
  },
  {
    "icao": "CZST",
    "iata": "ZST",
    "name": "Stewart Airport",
    "city": "Stewart",
    "country": "CA",
    "lat": 55.935410448,
    "lon": -129.982434511,
    "elevation": 24
  },
  {
    "icao": "CZUC",
    "iata": "ZUC",
    "name": "Ignace Municipal Airport",
    "city": "Ignace",
    "country": "CA",
    "lat": 49.428204,
    "lon": -91.720418,
    "elevation": 1435
  },
  {
    "icao": "DAAD",
    "iata": "BUJ",
    "name": "Bou Saada Airport",
    "city": "Ouled Sidi Brahim",
    "country": "DZ",
    "lat": 35.3325,
    "lon": 4.20639,
    "elevation": 1506
  },
  {
    "icao": "DAAE",
    "iata": "BJA",
    "name": "Soummam–Abane Ramdane Airport",
    "city": "Béjaïa",
    "country": "DZ",
    "lat": 36.711952,
    "lon": 5.069804,
    "elevation": 20
  },
  {
    "icao": "DAAG",
    "iata": "ALG",
    "name": "Houari Boumediene Airport",
    "city": "Algiers",
    "country": "DZ",
    "lat": 36.693886,
    "lon": 3.214531,
    "elevation": 82
  },
  {
    "icao": "DAAJ",
    "iata": "DJG",
    "name": "Djanet Inedbirene Airport",
    "city": "Djanet",
    "country": "DZ",
    "lat": 24.292801,
    "lon": 9.45244,
    "elevation": 3176
  },
  {
    "icao": "DAAP",
    "iata": "VVZ",
    "name": "Illizi Takhamalt Airport",
    "city": "Illizi",
    "country": "DZ",
    "lat": 26.723499,
    "lon": 8.62265,
    "elevation": 1778
  },
  {
    "icao": "DAAS",
    "iata": "QSF",
    "name": "Ain Arnat Airport",
    "city": "Sétif",
    "country": "DZ",
    "lat": 36.178100585900005,
    "lon": 5.3244900703399995,
    "elevation": 3360
  },
  {
    "icao": "DAAT",
    "iata": "TMR",
    "name": "Aguenar – Hadj Bey Akhamok Airport",
    "city": "Tamanrasset",
    "country": "DZ",
    "lat": 22.811501,
    "lon": 5.45108,
    "elevation": 4518
  },
  {
    "icao": "DAAV",
    "iata": "GJL",
    "name": "Jijel Ferhat Abbas Airport",
    "city": "Tahir",
    "country": "DZ",
    "lat": 36.795101,
    "lon": 5.87361,
    "elevation": 36
  },
  {
    "icao": "DAAY",
    "iata": "MZW",
    "name": "Mecheria Airport",
    "city": "Mecheria",
    "country": "DZ",
    "lat": 33.535900116,
    "lon": -0.242353007197,
    "elevation": 3855
  },
  {
    "icao": "DABB",
    "iata": "AAE",
    "name": "Annaba Rabah Bitat Airport",
    "city": "Annaba",
    "country": "DZ",
    "lat": 36.826781,
    "lon": 7.81334,
    "elevation": 16
  },
  {
    "icao": "DABC",
    "iata": "CZL",
    "name": "Mohamed Boudiaf International Airport",
    "city": "Constantine",
    "country": "DZ",
    "lat": 36.2760009765625,
    "lon": 6.620389938354492,
    "elevation": 2265
  },
  {
    "icao": "DABS",
    "iata": "TEE",
    "name": "Cheikh Larbi Tébessi Airport",
    "city": "Tébessi",
    "country": "DZ",
    "lat": 35.4315986633,
    "lon": 8.12071990967,
    "elevation": 2661
  },
  {
    "icao": "DABT",
    "iata": "BLJ",
    "name": "Batna Mostefa Ben Boulaid Airport",
    "city": "Batna",
    "country": "DZ",
    "lat": 35.752102,
    "lon": 6.30859,
    "elevation": 2697
  },
  {
    "icao": "DAFH",
    "iata": "HRM",
    "name": "Hassi R'Mel Airport",
    "city": "Hassi R'Mel",
    "country": "DZ",
    "lat": 32.930401,
    "lon": 3.31154,
    "elevation": 2540
  },
  {
    "icao": "DAOB",
    "iata": "TID",
    "name": "Abdelhafid Boussouf Bou Chekif Airport",
    "city": "Tiaret",
    "country": "DZ",
    "lat": 35.341099,
    "lon": 1.46315,
    "elevation": 3245
  },
  {
    "icao": "DAOF",
    "iata": "TIN",
    "name": "Tindouf Airport",
    "city": "Tindouf",
    "country": "DZ",
    "lat": 27.7003993988,
    "lon": -8.167099952700001,
    "elevation": 1453
  },
  {
    "icao": "DAOI",
    "iata": "CFK",
    "name": "Chlef Aboubakr Belkaid International Airport",
    "city": "Chlef",
    "country": "DZ",
    "lat": 36.217166,
    "lon": 1.342237,
    "elevation": 463
  },
  {
    "icao": "DAOL",
    "iata": "TAF",
    "name": "Oran Tafraoui Airport",
    "city": "Tafraoui",
    "country": "DZ",
    "lat": 35.5424,
    "lon": -0.532278,
    "elevation": 367
  },
  {
    "icao": "DAON",
    "iata": "TLM",
    "name": "Zenata – Messali El Hadj Airport",
    "city": "Zenata",
    "country": "DZ",
    "lat": 35.013426,
    "lon": -1.457191,
    "elevation": 814
  },
  {
    "icao": "DAOO",
    "iata": "ORN",
    "name": "Oran Es-Sénia (Ahmed Ben Bella) International Airport",
    "city": "Es-Sénia",
    "country": "DZ",
    "lat": 35.623901,
    "lon": -0.621183,
    "elevation": 295
  },
  {
    "icao": "DAOR",
    "iata": "CBH",
    "name": "Béchar Boudghene Ben Ali Lotfi Airport",
    "city": "Béchar",
    "country": "DZ",
    "lat": 31.645700454711914,
    "lon": -2.269860029220581,
    "elevation": 2661
  },
  {
    "icao": "DAOV",
    "iata": "MUW",
    "name": "Ghriss Airport",
    "city": "Ghriss",
    "country": "DZ",
    "lat": 35.207699,
    "lon": 0.147142,
    "elevation": 1686
  },
  {
    "icao": "DAUA",
    "iata": "AZR",
    "name": "Touat Cheikh Sidi Mohamed Belkebir Airport",
    "city": "Adrar",
    "country": "DZ",
    "lat": 27.837601,
    "lon": -0.186414,
    "elevation": 919
  },
  {
    "icao": "DAUB",
    "iata": "BSK",
    "name": "Biskra - Mohamed Khider Airport",
    "city": "Biskra",
    "country": "DZ",
    "lat": 34.793301,
    "lon": 5.73823,
    "elevation": 289
  },
  {
    "icao": "DAUE",
    "iata": "ELG",
    "name": "El Golea Airport",
    "city": "El Menia",
    "country": "DZ",
    "lat": 30.580732,
    "lon": 2.861595,
    "elevation": 1306
  },
  {
    "icao": "DAUG",
    "iata": "GHA",
    "name": "Noumérat - Moufdi Zakaria Airport",
    "city": "El Atteuf",
    "country": "DZ",
    "lat": 32.384102,
    "lon": 3.79411,
    "elevation": 1512
  },
  {
    "icao": "DAUH",
    "iata": "HME",
    "name": "Hassi Messaoud-Oued Irara Krim Belkacem Airport",
    "city": "Hassi Messaoud",
    "country": "DZ",
    "lat": 31.673,
    "lon": 6.14044,
    "elevation": 463
  },
  {
    "icao": "DAUI",
    "iata": "INZ",
    "name": "In Salah Airport",
    "city": "In Salah",
    "country": "DZ",
    "lat": 27.250999,
    "lon": 2.51202,
    "elevation": 896
  },
  {
    "icao": "DAUK",
    "iata": "TGR",
    "name": "Touggourt Sidi Madhi Airport",
    "city": "Touggourt",
    "country": "DZ",
    "lat": 33.067799,
    "lon": 6.08867,
    "elevation": 279
  },
  {
    "icao": "DAUL",
    "iata": "LOO",
    "name": "Laghouat - Molay Ahmed Medeghri Airport",
    "city": "Laghouat",
    "country": "DZ",
    "lat": 33.7644,
    "lon": 2.92834,
    "elevation": 2510
  },
  {
    "icao": "DAUO",
    "iata": "ELU",
    "name": "Guemar Airport - مطار قمار بالوادي",
    "city": "Guemar",
    "country": "DZ",
    "lat": 33.511398,
    "lon": 6.77679,
    "elevation": 203
  },
  {
    "icao": "DAUT",
    "iata": "TMX",
    "name": "Timimoun Airport",
    "city": "Timimoun",
    "country": "DZ",
    "lat": 29.237101,
    "lon": 0.276033,
    "elevation": 1027
  },
  {
    "icao": "DAUU",
    "iata": "OGX",
    "name": "Ain Beida Airport",
    "city": "Ouargla",
    "country": "DZ",
    "lat": 31.9172,
    "lon": 5.41278,
    "elevation": 492
  },
  {
    "icao": "DAUZ",
    "iata": "IAM",
    "name": "Zarzaitine - In Aménas Airport",
    "city": "In Aménas",
    "country": "DZ",
    "lat": 28.0515,
    "lon": 9.64291,
    "elevation": 1847
  },
  {
    "icao": "DBBB",
    "iata": "COO",
    "name": "Cadjehoun Airport",
    "city": "Cotonou",
    "country": "BJ",
    "lat": 6.357230186462402,
    "lon": 2.384350061416626,
    "elevation": 19
  },
  {
    "icao": "DFFD",
    "iata": "OUA",
    "name": "Ouagadougou Airport",
    "city": "Ouagadougou",
    "country": "BF",
    "lat": 12.3532,
    "lon": -1.51242,
    "elevation": 1037
  },
  {
    "icao": "DFOO",
    "iata": "BOY",
    "name": "Bobo Dioulasso Airport",
    "city": "Bobo Dioulasso",
    "country": "BF",
    "lat": 11.160099983215332,
    "lon": -4.33096981048584,
    "elevation": 1511
  },
  {
    "icao": "DGAA",
    "iata": "ACC",
    "name": "Kotoka International Airport",
    "city": "Accra",
    "country": "GH",
    "lat": 5.605189800262451,
    "lon": -0.16678600013256073,
    "elevation": 205
  },
  {
    "icao": "DGLE",
    "iata": "TML",
    "name": "Tamale Airport",
    "city": "Tamale",
    "country": "GH",
    "lat": 9.55718994140625,
    "lon": -0.8632140159606934,
    "elevation": 553
  },
  {
    "icao": "DGSI",
    "iata": "KMS",
    "name": "Kumasi Airport",
    "city": "Kumasi",
    "country": "GH",
    "lat": 6.714560031890869,
    "lon": -1.5908199548721313,
    "elevation": 942
  },
  {
    "icao": "DGSN",
    "iata": "NYI",
    "name": "Sunyani Airport",
    "city": "Sunyani",
    "country": "GH",
    "lat": 7.36183,
    "lon": -2.32876,
    "elevation": 1014
  },
  {
    "icao": "DGTK",
    "iata": "TKD",
    "name": "Takoradi Airport",
    "city": "Sekondi-Takoradi",
    "country": "GH",
    "lat": 4.896059989929199,
    "lon": -1.7747600078582764,
    "elevation": 21
  },
  {
    "icao": "DIAP",
    "iata": "ABJ",
    "name": "Félix-Houphouët-Boigny International Airport",
    "city": "Abidjan",
    "country": "CI",
    "lat": 5.26139,
    "lon": -3.92629,
    "elevation": 21
  },
  {
    "icao": "DIBK",
    "iata": "BYK",
    "name": "Bouaké Airport",
    "city": "Bouaké",
    "country": "CI",
    "lat": 7.7388,
    "lon": -5.07367,
    "elevation": 1230
  },
  {
    "icao": "DIDL",
    "iata": "DJO",
    "name": "Daloa Airport",
    "city": "",
    "country": "CI",
    "lat": 6.79281,
    "lon": -6.47319,
    "elevation": 823
  },
  {
    "icao": "DIKO",
    "iata": "HGO",
    "name": "Korhogo Airport",
    "city": "Korhogo",
    "country": "CI",
    "lat": 9.38718,
    "lon": -5.55666,
    "elevation": 1214
  },
  {
    "icao": "DIMN",
    "iata": "MJC",
    "name": "Man Airport",
    "city": "",
    "country": "CI",
    "lat": 7.27207,
    "lon": -7.58736,
    "elevation": 1089
  },
  {
    "icao": "DISP",
    "iata": "SPY",
    "name": "San Pedro Airport",
    "city": "",
    "country": "CI",
    "lat": 4.74672,
    "lon": -6.66082,
    "elevation": 26
  },
  {
    "icao": "DIYO",
    "iata": "ASK",
    "name": "Yamoussoukro Airport",
    "city": "Yamoussoukro",
    "country": "CI",
    "lat": 6.9031701088,
    "lon": -5.36558008194,
    "elevation": 699
  },
  {
    "icao": "DNAA",
    "iata": "ABV",
    "name": "Nnamdi Azikiwe International Airport",
    "city": "Abuja",
    "country": "NG",
    "lat": 9.00679,
    "lon": 7.26317,
    "elevation": 1123
  },
  {
    "icao": "DNAI",
    "iata": "QUO",
    "name": "Akwa Ibom International Airport",
    "city": "Uyo",
    "country": "NG",
    "lat": 4.8725,
    "lon": 8.093,
    "elevation": 170
  },
  {
    "icao": "DNAK",
    "iata": "AKR",
    "name": "Akure Airport",
    "city": "Akure",
    "country": "NG",
    "lat": 7.246739864349365,
    "lon": 5.3010101318359375,
    "elevation": 1100
  },
  {
    "icao": "DNAS",
    "iata": "ABB",
    "name": "Asaba International Airport",
    "city": "Asaba",
    "country": "NG",
    "lat": 6.204167,
    "lon": 6.665278,
    "elevation": 305
  },
  {
    "icao": "DNBC",
    "iata": "BCU",
    "name": "Sir Abubakar Tafawa Balewa International Airport",
    "city": "Bauchi",
    "country": "NG",
    "lat": 10.482833,
    "lon": 9.744,
    "elevation": 1965
  },
  {
    "icao": "DNBE",
    "iata": "BNI",
    "name": "Benin Airport",
    "city": "Benin",
    "country": "NG",
    "lat": 6.316979885101318,
    "lon": 5.5995001792907715,
    "elevation": 258
  },
  {
    "icao": "DNCA",
    "iata": "CBQ",
    "name": "Margaret Ekpo International Airport",
    "city": "Calabar",
    "country": "NG",
    "lat": 4.976019859313965,
    "lon": 8.347200393676758,
    "elevation": 210
  },
  {
    "icao": "DNEN",
    "iata": "ENU",
    "name": "Akanu Ibiam International Airport",
    "city": "Enegu",
    "country": "NG",
    "lat": 6.474269866943359,
    "lon": 7.561960220336914,
    "elevation": 466
  },
  {
    "icao": "DNGO",
    "iata": "GMO",
    "name": "Gombe Lawanti International Airport",
    "city": "Gombe",
    "country": "NG",
    "lat": 10.298889,
    "lon": 10.9,
    "elevation": 1590
  },
  {
    "icao": "DNIB",
    "iata": "IBA",
    "name": "Ibadan Airport",
    "city": "Ibadan",
    "country": "NG",
    "lat": 7.362460136413574,
    "lon": 3.97832989692688,
    "elevation": 725
  },
  {
    "icao": "DNIL",
    "iata": "ILR",
    "name": "Ilorin International Airport",
    "city": "Ilorin",
    "country": "NG",
    "lat": 8.440210342407227,
    "lon": 4.493919849395752,
    "elevation": 1126
  },
  {
    "icao": "DNIM",
    "iata": "QOW",
    "name": "Sam Mbakwe International Airport",
    "city": "Owerri",
    "country": "NG",
    "lat": 5.427060127258301,
    "lon": 7.206029891967773,
    "elevation": 373
  },
  {
    "icao": "DNJO",
    "iata": "JOS",
    "name": "Yakubu Gowon Airport",
    "city": "Jos",
    "country": "NG",
    "lat": 9.639829635620117,
    "lon": 8.869050025939941,
    "elevation": 4232
  },
  {
    "icao": "DNKA",
    "iata": "KAD",
    "name": "Kaduna Airport",
    "city": "Kaduna",
    "country": "NG",
    "lat": 10.696000099182129,
    "lon": 7.320109844207764,
    "elevation": 2073
  },
  {
    "icao": "DNKN",
    "iata": "KAN",
    "name": "Mallam Aminu International Airport",
    "city": "Kano",
    "country": "NG",
    "lat": 12.0476,
    "lon": 8.52462,
    "elevation": 1562
  },
  {
    "icao": "DNMA",
    "iata": "MIU",
    "name": "Maiduguri International Airport",
    "city": "Maiduguri",
    "country": "NG",
    "lat": 11.855299949645996,
    "lon": 13.080900192260742,
    "elevation": 1099
  },
  {
    "icao": "DNMK",
    "iata": "MDI",
    "name": "Makurdi Airport",
    "city": "Makurdi",
    "country": "NG",
    "lat": 7.70388,
    "lon": 8.61394,
    "elevation": 371
  },
  {
    "icao": "DNMM",
    "iata": "LOS",
    "name": "Murtala Muhammed International Airport",
    "city": "Lagos",
    "country": "NG",
    "lat": 6.57737,
    "lon": 3.32116,
    "elevation": 135
  },
  {
    "icao": "DNMN",
    "iata": "MXJ",
    "name": "Minna Airport",
    "city": "Minna",
    "country": "NG",
    "lat": 9.652170181274414,
    "lon": 6.462259769439697,
    "elevation": 834
  },
  {
    "icao": "DNPO",
    "iata": "PHC",
    "name": "Port Harcourt International Airport",
    "city": "Port Harcourt",
    "country": "NG",
    "lat": 5.0154900550842285,
    "lon": 6.94959020614624,
    "elevation": 87
  },
  {
    "icao": "DNSO",
    "iata": "SKO",
    "name": "Sadiq Abubakar III International Airport",
    "city": "Sokoto",
    "country": "NG",
    "lat": 12.916299819946289,
    "lon": 5.207190036773682,
    "elevation": 1010
  },
  {
    "icao": "DNSU",
    "iata": "QRW",
    "name": "Warri Airport",
    "city": "Okpe",
    "country": "NG",
    "lat": 5.59821,
    "lon": 5.8187,
    "elevation": 242
  },
  {
    "icao": "DNYO",
    "iata": "YOL",
    "name": "Yola Airport",
    "city": "Yola",
    "country": "NG",
    "lat": 9.257550239562988,
    "lon": 12.430399894714355,
    "elevation": 599
  },
  {
    "icao": "DNZA",
    "iata": "ZAR",
    "name": "Zaria Airport",
    "city": "Zaria",
    "country": "NG",
    "lat": 11.1302,
    "lon": 7.68581,
    "elevation": 2170
  },
  {
    "icao": "DRRM",
    "iata": "MFQ",
    "name": "Maradi Airport",
    "city": "Maradi",
    "country": "NE",
    "lat": 13.5025,
    "lon": 7.12675,
    "elevation": 1240
  },
  {
    "icao": "DRRN",
    "iata": "NIM",
    "name": "Diori Hamani International Airport",
    "city": "Niamey",
    "country": "NE",
    "lat": 13.4815,
    "lon": 2.18361,
    "elevation": 732
  },
  {
    "icao": "DRRT",
    "iata": "THZ",
    "name": "Tahoua Airport",
    "city": "Tahoua",
    "country": "NE",
    "lat": 14.8757,
    "lon": 5.26536,
    "elevation": 1266
  },
  {
    "icao": "DRZA",
    "iata": "AJY",
    "name": "Mano Dayak International Airport",
    "city": "Agadez",
    "country": "NE",
    "lat": 16.965999603271484,
    "lon": 8.000109672546387,
    "elevation": 1657
  },
  {
    "icao": "DRZR",
    "iata": "ZND",
    "name": "Zinder Airport",
    "city": "Zinder",
    "country": "NE",
    "lat": 13.779000282287598,
    "lon": 8.983759880065918,
    "elevation": 1516
  },
  {
    "icao": "DTKA",
    "iata": "TBJ",
    "name": "Tabarka-Aïn Draham International Airport",
    "city": "Tabarka",
    "country": "TN",
    "lat": 36.98,
    "lon": 8.87694,
    "elevation": 230
  },
  {
    "icao": "DTMB",
    "iata": "MIR",
    "name": "Monastir Habib Bourguiba International Airport",
    "city": "Monastir",
    "country": "TN",
    "lat": 35.75809860229492,
    "lon": 10.75469970703125,
    "elevation": 9
  },
  {
    "icao": "DTNH",
    "iata": "NBE",
    "name": "Enfidha - Hammamet International Airport",
    "city": "Enfidha",
    "country": "TN",
    "lat": 36.075833,
    "lon": 10.438611,
    "elevation": 21
  },
  {
    "icao": "DTTA",
    "iata": "TUN",
    "name": "Tunis Carthage International Airport",
    "city": "Tunis",
    "country": "TN",
    "lat": 36.851002,
    "lon": 10.2272,
    "elevation": 22
  },
  {
    "icao": "DTTF",
    "iata": "GAF",
    "name": "Gafsa Ksar International Airport",
    "city": "Gafsa",
    "country": "TN",
    "lat": 34.422000885009766,
    "lon": 8.822500228881836,
    "elevation": 1060
  },
  {
    "icao": "DTTG",
    "iata": "GAE",
    "name": "Gabès Matmata International Airport",
    "city": "Gabès",
    "country": "TN",
    "lat": 33.733691,
    "lon": 9.91941,
    "elevation": 407
  },
  {
    "icao": "DTTJ",
    "iata": "DJE",
    "name": "Djerba Zarzis International Airport",
    "city": "Mellita",
    "country": "TN",
    "lat": 33.875,
    "lon": 10.7755,
    "elevation": 19
  },
  {
    "icao": "DTTR",
    "iata": "EBM",
    "name": "El Borma Airport",
    "city": "El Borma",
    "country": "TN",
    "lat": 31.7043,
    "lon": 9.25462,
    "elevation": 827
  },
  {
    "icao": "DTTX",
    "iata": "SFA",
    "name": "Sfax Thyna International Airport",
    "city": "Sfax",
    "country": "TN",
    "lat": 34.71799850463867,
    "lon": 10.690999984741211,
    "elevation": 85
  },
  {
    "icao": "DTTZ",
    "iata": "TOE",
    "name": "Tozeur Nefta International Airport",
    "city": "Tozeur",
    "country": "TN",
    "lat": 33.939701080322266,
    "lon": 8.110560417175293,
    "elevation": 287
  },
  {
    "icao": "DXNG",
    "iata": "LRL",
    "name": "Niamtougou International Airport",
    "city": "Niamtougou",
    "country": "TG",
    "lat": 9.767330169677734,
    "lon": 1.091249942779541,
    "elevation": 1515
  },
  {
    "icao": "DXXX",
    "iata": "LFW",
    "name": "Lomé–Tokoin International Airport",
    "city": "Lomé",
    "country": "TG",
    "lat": 6.16561,
    "lon": 1.25451,
    "elevation": 72
  },
  {
    "icao": "EBAW",
    "iata": "ANR",
    "name": "Antwerp International Airport (Deurne)",
    "city": "Antwerp",
    "country": "BE",
    "lat": 51.190667,
    "lon": 4.463153,
    "elevation": 39
  },
  {
    "icao": "EBBR",
    "iata": "BRU",
    "name": "Brussels Airport",
    "city": "Zaventem",
    "country": "BE",
    "lat": 50.901402,
    "lon": 4.48444,
    "elevation": 175
  },
  {
    "icao": "EBCI",
    "iata": "CRL",
    "name": "Brussels South Charleroi Airport",
    "city": "Charleroi",
    "country": "BE",
    "lat": 50.460982,
    "lon": 4.457158,
    "elevation": 614
  },
  {
    "icao": "EBKT",
    "iata": "KJK",
    "name": "Flanders International Airport Kortrijk-Wevelgem",
    "city": "Wevelgem",
    "country": "BE",
    "lat": 50.818878,
    "lon": 3.209551,
    "elevation": 55
  },
  {
    "icao": "EBLG",
    "iata": "LGG",
    "name": "Liège Airport",
    "city": "Grâce-Hollogne",
    "country": "BE",
    "lat": 50.638574,
    "lon": 5.443897,
    "elevation": 659
  },
  {
    "icao": "EBOS",
    "iata": "OST",
    "name": "Oostende-Brugge International Airport",
    "city": "Oostende",
    "country": "BE",
    "lat": 51.1998,
    "lon": 2.874673,
    "elevation": 13
  },
  {
    "icao": "EDAC",
    "iata": "AOC",
    "name": "Leipzig–Altenburg Airport",
    "city": "Nobitz",
    "country": "DE",
    "lat": 50.981945,
    "lon": 12.506389,
    "elevation": 640
  },
  {
    "icao": "EDAH",
    "iata": "HDF",
    "name": "Heringsdorf Airport",
    "city": "Zirchow",
    "country": "DE",
    "lat": 53.8787,
    "lon": 14.1523,
    "elevation": 94
  },
  {
    "icao": "EDBN",
    "iata": "FNB",
    "name": "Neubrandenburg Trollenhagen Airport",
    "city": "Trollenhagen",
    "country": "DE",
    "lat": 53.6022,
    "lon": 13.306,
    "elevation": 228
  },
  {
    "icao": "EDDB",
    "iata": "BER",
    "name": "Berlin Brandenburg Airport",
    "city": "Berlin",
    "country": "DE",
    "lat": 52.362247,
    "lon": 13.500672,
    "elevation": 157
  },
  {
    "icao": "EDDC",
    "iata": "DRS",
    "name": "Dresden Airport",
    "city": "Dresden",
    "country": "DE",
    "lat": 51.134123,
    "lon": 13.767831,
    "elevation": 755
  },
  {
    "icao": "EDDE",
    "iata": "ERF",
    "name": "Erfurt-Weimar Airport",
    "city": "Erfurt",
    "country": "DE",
    "lat": 50.979801,
    "lon": 10.9581,
    "elevation": 1036
  },
  {
    "icao": "EDDF",
    "iata": "FRA",
    "name": "Frankfurt Airport",
    "city": "Frankfurt am Main",
    "country": "DE",
    "lat": 50.030241,
    "lon": 8.561096,
    "elevation": 364
  },
  {
    "icao": "EDDG",
    "iata": "FMO",
    "name": "Münster Osnabrück Airport",
    "city": "Greven",
    "country": "DE",
    "lat": 52.134602,
    "lon": 7.68483,
    "elevation": 160
  },
  {
    "icao": "EDDH",
    "iata": "HAM",
    "name": "Hamburg Helmut Schmidt Airport",
    "city": "Hamburg",
    "country": "DE",
    "lat": 53.630402,
    "lon": 9.98823,
    "elevation": 53
  },
  {
    "icao": "EDDK",
    "iata": "CGN",
    "name": "Cologne Bonn Airport",
    "city": "Köln (Cologne)",
    "country": "DE",
    "lat": 50.865898,
    "lon": 7.14274,
    "elevation": 302
  },
  {
    "icao": "EDDL",
    "iata": "DUS",
    "name": "Düsseldorf Airport",
    "city": "Düsseldorf",
    "country": "DE",
    "lat": 51.289501,
    "lon": 6.76678,
    "elevation": 147
  },
  {
    "icao": "EDDM",
    "iata": "MUC",
    "name": "Munich Airport",
    "city": "Munich",
    "country": "DE",
    "lat": 48.353802,
    "lon": 11.7861,
    "elevation": 1487
  },
  {
    "icao": "EDDN",
    "iata": "NUE",
    "name": "Nuremberg Airport",
    "city": "Nuremberg",
    "country": "DE",
    "lat": 49.498699,
    "lon": 11.078056,
    "elevation": 1046
  },
  {
    "icao": "EDDP",
    "iata": "LEJ",
    "name": "Leipzig/Halle Airport",
    "city": "Schkeuditz",
    "country": "DE",
    "lat": 51.420657,
    "lon": 12.232705,
    "elevation": 465
  },
  {
    "icao": "EDDR",
    "iata": "SCN",
    "name": "Saarbrücken Airport",
    "city": "Saarbrücken",
    "country": "DE",
    "lat": 49.214599609400004,
    "lon": 7.10950994492,
    "elevation": 1058
  },
  {
    "icao": "EDDS",
    "iata": "STR",
    "name": "Stuttgart Airport",
    "city": "Stuttgart",
    "country": "DE",
    "lat": 48.689899,
    "lon": 9.22196,
    "elevation": 1276
  },
  {
    "icao": "EDDV",
    "iata": "HAJ",
    "name": "Hannover Airport",
    "city": "Hannover",
    "country": "DE",
    "lat": 52.461102,
    "lon": 9.68508,
    "elevation": 183
  },
  {
    "icao": "EDDW",
    "iata": "BRE",
    "name": "Bremen Airport",
    "city": "Bremen",
    "country": "DE",
    "lat": 53.046786,
    "lon": 8.78932,
    "elevation": 14
  },
  {
    "icao": "EDFH",
    "iata": "HHN",
    "name": "Frankfurt-Hahn Airport",
    "city": "Frankfurt am Main (Lautzenhausen)",
    "country": "DE",
    "lat": 49.9487,
    "lon": 7.26389,
    "elevation": 1649
  },
  {
    "icao": "EDFM",
    "iata": "MHG",
    "name": "Mannheim-City Airport",
    "city": "Mannheim",
    "country": "DE",
    "lat": 49.473057,
    "lon": 8.514167,
    "elevation": 308
  },
  {
    "icao": "EDGE",
    "iata": "EIB",
    "name": "Eisenach-Kindel Airport",
    "city": "Hörselberg-Hainich",
    "country": "DE",
    "lat": 50.991604,
    "lon": 10.47973,
    "elevation": 1112
  },
  {
    "icao": "EDGS",
    "iata": "SGE",
    "name": "Siegerland Airport",
    "city": "Burbach",
    "country": "DE",
    "lat": 50.707699,
    "lon": 8.08297,
    "elevation": 1966
  },
  {
    "icao": "EDHI",
    "iata": "XFW",
    "name": "Hamburg-Finkenwerder Airport",
    "city": "Hamburg",
    "country": "DE",
    "lat": 53.5352783203125,
    "lon": 9.835556030273438,
    "elevation": 23
  },
  {
    "icao": "EDHK",
    "iata": "KEL",
    "name": "Kiel-Holtenau Airport",
    "city": "Kiel",
    "country": "DE",
    "lat": 54.37957,
    "lon": 10.145266,
    "elevation": 102
  },
  {
    "icao": "EDHL",
    "iata": "LBC",
    "name": "Lübeck Blankensee Airport",
    "city": "Lübeck",
    "country": "DE",
    "lat": 53.805401,
    "lon": 10.7192,
    "elevation": 53
  },
  {
    "icao": "EDJA",
    "iata": "FMM",
    "name": "Memmingen Allgau Airport",
    "city": "Memmingen",
    "country": "DE",
    "lat": 47.988800048799995,
    "lon": 10.2395000458,
    "elevation": 2077
  },
  {
    "icao": "EDLN",
    "iata": "MGL",
    "name": "Mönchengladbach Airport",
    "city": "Mönchengladbach",
    "country": "DE",
    "lat": 51.230278,
    "lon": 6.504444,
    "elevation": 125
  },
  {
    "icao": "EDLP",
    "iata": "PAD",
    "name": "Paderborn Lippstadt Airport",
    "city": "Büren",
    "country": "DE",
    "lat": 51.614101,
    "lon": 8.61632,
    "elevation": 699
  },
  {
    "icao": "EDLV",
    "iata": "NRN",
    "name": "Weeze Airport",
    "city": "Weeze",
    "country": "DE",
    "lat": 51.6024017334,
    "lon": 6.14216995239,
    "elevation": 106
  },
  {
    "icao": "EDLW",
    "iata": "DTM",
    "name": "Dortmund Airport",
    "city": "Dortmund",
    "country": "DE",
    "lat": 51.518299,
    "lon": 7.61224,
    "elevation": 425
  },
  {
    "icao": "EDMA",
    "iata": "AGB",
    "name": "Augsburg Airport",
    "city": "Augsburg",
    "country": "DE",
    "lat": 48.425278,
    "lon": 10.931667,
    "elevation": 1516
  },
  {
    "icao": "EDMO",
    "iata": "OBF",
    "name": "Oberpfaffenhofen Airport",
    "city": "Weßling",
    "country": "DE",
    "lat": 48.081402,
    "lon": 11.2831,
    "elevation": 1947
  },
  {
    "icao": "EDNY",
    "iata": "FDH",
    "name": "Friedrichshafen Airport",
    "city": "Friedrichshafen",
    "country": "DE",
    "lat": 47.671299,
    "lon": 9.51149,
    "elevation": 1367
  },
  {
    "icao": "EDQD",
    "iata": "BYU",
    "name": "Bayreuth Airport",
    "city": "Bindlach",
    "country": "DE",
    "lat": 49.985001,
    "lon": 11.64,
    "elevation": 1601
  },
  {
    "icao": "EDQM",
    "iata": "HOQ",
    "name": "Hof-Plauen Airport",
    "city": "Hof",
    "country": "DE",
    "lat": 50.288544,
    "lon": 11.852876,
    "elevation": 1959
  },
  {
    "icao": "EDSB",
    "iata": "FKB",
    "name": "Karlsruhe Baden-Baden Airport",
    "city": "Rheinmünster",
    "country": "DE",
    "lat": 48.7794,
    "lon": 8.0805,
    "elevation": 408
  },
  {
    "icao": "EDTL",
    "iata": "LHA",
    "name": "Lahr Airport",
    "city": "Lahr/Schwarzwald",
    "country": "DE",
    "lat": 48.369301,
    "lon": 7.82772,
    "elevation": 511
  },
  {
    "icao": "EDVE",
    "iata": "BWE",
    "name": "Braunschweig-Wolfsburg Airport",
    "city": "Braunschweig",
    "country": "DE",
    "lat": 52.319199,
    "lon": 10.5561,
    "elevation": 295
  },
  {
    "icao": "EDVK",
    "iata": "KSF",
    "name": "Kassel Airport",
    "city": "Calden",
    "country": "DE",
    "lat": 51.420699,
    "lon": 9.392152,
    "elevation": 820
  },
  {
    "icao": "EDXW",
    "iata": "GWT",
    "name": "Westerland Sylt Airport",
    "city": "Sylt",
    "country": "DE",
    "lat": 54.9132,
    "lon": 8.34047,
    "elevation": 51
  },
  {
    "icao": "EEKA",
    "iata": "KDL",
    "name": "Kärdla Airport",
    "city": "Kärdla",
    "country": "EE",
    "lat": 58.99079895019531,
    "lon": 22.830699920654297,
    "elevation": 18
  },
  {
    "icao": "EEKE",
    "iata": "URE",
    "name": "Kuressaare Airport",
    "city": "Kuressaare",
    "country": "EE",
    "lat": 58.22990036010742,
    "lon": 22.50950050354004,
    "elevation": 14
  },
  {
    "icao": "EEPU",
    "iata": "EPU",
    "name": "Pärnu Airport",
    "city": "Pärnu",
    "country": "EE",
    "lat": 58.41899871826172,
    "lon": 24.47279930114746,
    "elevation": 47
  },
  {
    "icao": "HEBR",
    "iata": "EES",
    "name": "Berenice International Airport / Banas Cape Air Base",
    "city": "Berenice Troglodytica",
    "country": "EG",
    "lat": 23.980437,
    "lon": 35.460277,
    "elevation": 108
  },
  {
    "icao": "EETN",
    "iata": "TLL",
    "name": "Lennart Meri Tallinn Airport",
    "city": "Tallinn",
    "country": "EE",
    "lat": 59.413246,
    "lon": 24.83264,
    "elevation": 131
  },
  {
    "icao": "EETU",
    "iata": "TAY",
    "name": "Tartu Airport",
    "city": "Reola",
    "country": "EE",
    "lat": 58.307438,
    "lon": 26.686473,
    "elevation": 220
  },
  {
    "icao": "EFET",
    "iata": "ENF",
    "name": "Enontekio Airport",
    "city": "Enontekio",
    "country": "FI",
    "lat": 68.362602233887,
    "lon": 23.424299240112,
    "elevation": 1005
  },
  {
    "icao": "EFHA",
    "iata": "KEV",
    "name": "Halli Airport",
    "city": "Jämsä",
    "country": "FI",
    "lat": 61.856039,
    "lon": 24.786686,
    "elevation": 479
  },
  {
    "icao": "EFHK",
    "iata": "HEL",
    "name": "Helsinki Vantaa Airport",
    "city": "Helsinki (Vantaa)",
    "country": "FI",
    "lat": 60.318363,
    "lon": 24.963341,
    "elevation": 179
  },
  {
    "icao": "EFIT",
    "iata": "KTQ",
    "name": "Kitee Airport",
    "city": "Kitee",
    "country": "FI",
    "lat": 62.1661,
    "lon": 30.073601,
    "elevation": 364
  },
  {
    "icao": "EFIV",
    "iata": "IVL",
    "name": "Ivalo Airport",
    "city": "Ivalo",
    "country": "FI",
    "lat": 68.607299804688,
    "lon": 27.405300140381,
    "elevation": 481
  },
  {
    "icao": "EFJO",
    "iata": "JOE",
    "name": "Joensuu Airport",
    "city": "Joensuu",
    "country": "FI",
    "lat": 62.658815,
    "lon": 29.619398,
    "elevation": 398
  },
  {
    "icao": "EFJY",
    "iata": "JYV",
    "name": "Jyväskylä Airport",
    "city": "Jyväskylän Maalaiskunta",
    "country": "FI",
    "lat": 62.399502,
    "lon": 25.678301,
    "elevation": 459
  },
  {
    "icao": "EFKA",
    "iata": "KAU",
    "name": "Kauhava Airfield",
    "city": "Kauhava",
    "country": "FI",
    "lat": 63.127102,
    "lon": 23.051399,
    "elevation": 151
  },
  {
    "icao": "EFKE",
    "iata": "KEM",
    "name": "Kemi-Tornio Airport",
    "city": "Kemi / Tornio",
    "country": "FI",
    "lat": 65.778701782227,
    "lon": 24.582099914551,
    "elevation": 61
  },
  {
    "icao": "EFKI",
    "iata": "KAJ",
    "name": "Kajaani Airport",
    "city": "Kajaani",
    "country": "FI",
    "lat": 64.2855,
    "lon": 27.6924,
    "elevation": 483
  },
  {
    "icao": "EFKJ",
    "iata": "KHJ",
    "name": "Kauhajoki Airfield",
    "city": "Kauhajoki",
    "country": "FI",
    "lat": 62.463212,
    "lon": 22.390817,
    "elevation": 407
  },
  {
    "icao": "EFKK",
    "iata": "KOK",
    "name": "Kokkola-Pietarsaari Airport",
    "city": "Kokkola / Kruunupyy",
    "country": "FI",
    "lat": 63.721199,
    "lon": 23.143101,
    "elevation": 84
  },
  {
    "icao": "EFKS",
    "iata": "KAO",
    "name": "Kuusamo Airport",
    "city": "Kuusamo",
    "country": "FI",
    "lat": 65.987602,
    "lon": 29.239401,
    "elevation": 866
  },
  {
    "icao": "EFKT",
    "iata": "KTT",
    "name": "Kittilä Airport",
    "city": "Kittilä",
    "country": "FI",
    "lat": 67.700996398926,
    "lon": 24.846799850464,
    "elevation": 644
  },
  {
    "icao": "EFKU",
    "iata": "KUO",
    "name": "Kuopio Airport",
    "city": "Kuopio / Siilinjärvi",
    "country": "FI",
    "lat": 63.007099,
    "lon": 27.7978,
    "elevation": 323
  },
  {
    "icao": "EFLP",
    "iata": "LPP",
    "name": "Lappeenranta Airport",
    "city": "Lappeenranta",
    "country": "FI",
    "lat": 61.044601,
    "lon": 28.144743,
    "elevation": 349
  },
  {
    "icao": "EFMA",
    "iata": "MHQ",
    "name": "Mariehamn Airport",
    "city": "Mariehamn",
    "country": "FI",
    "lat": 60.1222,
    "lon": 19.898199,
    "elevation": 17
  },
  {
    "icao": "EFMI",
    "iata": "MIK",
    "name": "Mikkeli Airport",
    "city": "Mikkeli",
    "country": "FI",
    "lat": 61.6866,
    "lon": 27.201799,
    "elevation": 329
  },
  {
    "icao": "EFOU",
    "iata": "OUL",
    "name": "Oulu Airport",
    "city": "Oulu / Oulunsalo",
    "country": "FI",
    "lat": 64.930099,
    "lon": 25.354601,
    "elevation": 47
  },
  {
    "icao": "EFPO",
    "iata": "POR",
    "name": "Pori Airport",
    "city": "Pori",
    "country": "FI",
    "lat": 61.4617,
    "lon": 21.799999,
    "elevation": 44
  },
  {
    "icao": "EFRO",
    "iata": "RVN",
    "name": "Rovaniemi Airport",
    "city": "Rovaniemi",
    "country": "FI",
    "lat": 66.564796447754,
    "lon": 25.830400466919,
    "elevation": 642
  },
  {
    "icao": "EFSA",
    "iata": "SVL",
    "name": "Savonlinna Airport",
    "city": "Savonlinna",
    "country": "FI",
    "lat": 61.9431,
    "lon": 28.945101,
    "elevation": 311
  },
  {
    "icao": "EFSI",
    "iata": "SJY",
    "name": "Seinäjoki Airport",
    "city": "Seinäjoki / Ilmajoki",
    "country": "FI",
    "lat": 62.692101,
    "lon": 22.8323,
    "elevation": 302
  },
  {
    "icao": "EFSO",
    "iata": "SOT",
    "name": "Sodankyla Airport",
    "city": "Sodankyla",
    "country": "FI",
    "lat": 67.3949966431,
    "lon": 26.6191005707,
    "elevation": 602
  },
  {
    "icao": "EFTP",
    "iata": "TMP",
    "name": "Tampere-Pirkkala Airport",
    "city": "Tampere / Pirkkala",
    "country": "FI",
    "lat": 61.414101,
    "lon": 23.604401,
    "elevation": 390
  },
  {
    "icao": "EFTU",
    "iata": "TKU",
    "name": "Turku Airport",
    "city": "Turku",
    "country": "FI",
    "lat": 60.514099,
    "lon": 22.2628,
    "elevation": 161
  },
  {
    "icao": "EFUT",
    "iata": "UTI",
    "name": "Utti Air Base",
    "city": "Utti / Valkeala",
    "country": "FI",
    "lat": 60.8964,
    "lon": 26.9384,
    "elevation": 339
  },
  {
    "icao": "EFVA",
    "iata": "VAA",
    "name": "Vaasa Airport",
    "city": "Vaasa",
    "country": "FI",
    "lat": 63.050701,
    "lon": 21.762199,
    "elevation": 19
  },
  {
    "icao": "EFVR",
    "iata": "VRK",
    "name": "Varkaus Airport",
    "city": "Varkaus / Joroinen",
    "country": "FI",
    "lat": 62.171101,
    "lon": 27.868601,
    "elevation": 286
  },
  {
    "icao": "EFYL",
    "iata": "YLI",
    "name": "Ylivieska Airfield",
    "city": "Ylivieska",
    "country": "FI",
    "lat": 64.054722,
    "lon": 24.725278,
    "elevation": 252
  },
  {
    "icao": "EGAA",
    "iata": "BFS",
    "name": "Belfast International Airport",
    "city": "Belfast",
    "country": "GB",
    "lat": 54.6575012207,
    "lon": -6.2158298492399995,
    "elevation": 268
  },
  {
    "icao": "EGAB",
    "iata": "ENK",
    "name": "Enniskillen/St Angelo Airport",
    "city": "Enniskillen, Fermanagh and Omagh",
    "country": "GB",
    "lat": 54.398274,
    "lon": -7.651179,
    "elevation": 155
  },
  {
    "icao": "EGAC",
    "iata": "BHD",
    "name": "George Best Belfast City Airport",
    "city": "Belfast",
    "country": "GB",
    "lat": 54.618099,
    "lon": -5.8725,
    "elevation": 15
  },
  {
    "icao": "EGAE",
    "iata": "LDY",
    "name": "City of Derry Airport",
    "city": "Derry",
    "country": "GB",
    "lat": 55.04280090332031,
    "lon": -7.161109924316406,
    "elevation": 22
  },
  {
    "icao": "EGBB",
    "iata": "BHX",
    "name": "Birmingham Airport",
    "city": "Birmingham, West Midlands",
    "country": "GB",
    "lat": 52.453899,
    "lon": -1.74803,
    "elevation": 327
  },
  {
    "icao": "EGBE",
    "iata": "CVT",
    "name": "Coventry Airport",
    "city": "Coventry, West Midlands",
    "country": "GB",
    "lat": 52.369701,
    "lon": -1.47972,
    "elevation": 267
  },
  {
    "icao": "EGBJ",
    "iata": "GLO",
    "name": "Gloucestershire Airport",
    "city": "Staverton",
    "country": "GB",
    "lat": 51.89419937133789,
    "lon": -2.167220115661621,
    "elevation": 101
  },
  {
    "icao": "EGCC",
    "iata": "MAN",
    "name": "Manchester Airport",
    "city": "Manchester, Greater Manchester",
    "country": "GB",
    "lat": 53.349375,
    "lon": -2.279521,
    "elevation": 257
  },
  {
    "icao": "EGDY",
    "iata": "YEO",
    "name": "RNAS Yeovilton",
    "city": "Yeovil, Somerset",
    "country": "GB",
    "lat": 51.009399,
    "lon": -2.63882,
    "elevation": 75
  },
  {
    "icao": "EGEC",
    "iata": "CAL",
    "name": "Campbeltown Airport",
    "city": "Campbeltown",
    "country": "GB",
    "lat": 55.437198638916016,
    "lon": -5.686389923095703,
    "elevation": 42
  },
  {
    "icao": "EGED",
    "iata": "EOI",
    "name": "Eday Airport",
    "city": "Eday",
    "country": "GB",
    "lat": 59.19060134887695,
    "lon": -2.7722198963165283,
    "elevation": 10
  },
  {
    "icao": "EGFE",
    "iata": "HAW",
    "name": "Haverfordwest Airport",
    "city": "Haverfordwest",
    "country": "GB",
    "lat": 51.833099365234375,
    "lon": -4.9611101150512695,
    "elevation": 159
  },
  {
    "icao": "EGFF",
    "iata": "CWL",
    "name": "Cardiff International Airport",
    "city": "Cardiff",
    "country": "GB",
    "lat": 51.396702,
    "lon": -3.34333,
    "elevation": 220
  },
  {
    "icao": "EGFH",
    "iata": "SWS",
    "name": "Swansea Airport",
    "city": "Swansea",
    "country": "GB",
    "lat": 51.601366,
    "lon": -4.071006,
    "elevation": 299
  },
  {
    "icao": "EGGD",
    "iata": "BRS",
    "name": "Bristol Airport",
    "city": "Bristol",
    "country": "GB",
    "lat": 51.382702,
    "lon": -2.71909,
    "elevation": 622
  },
  {
    "icao": "EGGP",
    "iata": "LPL",
    "name": "Liverpool John Lennon Airport",
    "city": "Liverpool",
    "country": "GB",
    "lat": 53.333599,
    "lon": -2.84972,
    "elevation": 80
  },
  {
    "icao": "EGGW",
    "iata": "LTN",
    "name": "London Luton Airport",
    "city": "Luton, Bedfordshire",
    "country": "GB",
    "lat": 51.874699,
    "lon": -0.368333,
    "elevation": 526
  },
  {
    "icao": "EGHH",
    "iata": "BOH",
    "name": "Bournemouth Airport",
    "city": "Bournemouth",
    "country": "GB",
    "lat": 50.780483,
    "lon": -1.839576,
    "elevation": 38
  },
  {
    "icao": "EGHI",
    "iata": "SOU",
    "name": "Southampton Airport",
    "city": "Southampton",
    "country": "GB",
    "lat": 50.950298,
    "lon": -1.3568,
    "elevation": 44
  },
  {
    "icao": "EGHQ",
    "iata": "NQY",
    "name": "Cornwall Airport Newquay",
    "city": "Newquay",
    "country": "GB",
    "lat": 50.440601,
    "lon": -4.99541,
    "elevation": 390
  },
  {
    "icao": "EGJA",
    "iata": "ACI",
    "name": "Alderney Airport",
    "city": "Saint Anne",
    "country": "GG",
    "lat": 49.706104,
    "lon": -2.21472,
    "elevation": 290
  },
  {
    "icao": "EGJB",
    "iata": "GCI",
    "name": "Guernsey Airport",
    "city": "Saint Peter Port",
    "country": "GG",
    "lat": 49.435001,
    "lon": -2.60197,
    "elevation": 336
  },
  {
    "icao": "EGJJ",
    "iata": "JER",
    "name": "Jersey Airport",
    "city": "St. Peter",
    "country": "JE",
    "lat": 49.207901,
    "lon": -2.19551,
    "elevation": 277
  },
  {
    "icao": "EGKA",
    "iata": "ESH",
    "name": "Brighton City Airport",
    "city": "Brighton, East Sussex",
    "country": "GB",
    "lat": 50.835602,
    "lon": -0.297222,
    "elevation": 7
  },
  {
    "icao": "EGKB",
    "iata": "BQH",
    "name": "London Biggin Hill Airport",
    "city": "London",
    "country": "GB",
    "lat": 51.33079910279999,
    "lon": 0.0324999988079,
    "elevation": 598
  },
  {
    "icao": "EGKK",
    "iata": "LGW",
    "name": "London Gatwick Airport",
    "city": "London",
    "country": "GB",
    "lat": 51.148771,
    "lon": -0.192089,
    "elevation": 202
  },
  {
    "icao": "EGLC",
    "iata": "LCY",
    "name": "London City Airport",
    "city": "London",
    "country": "GB",
    "lat": 51.505299,
    "lon": 0.055278,
    "elevation": 19
  },
  {
    "icao": "EGLF",
    "iata": "FAB",
    "name": "Farnborough Airport",
    "city": "Farnborough, Hampshire",
    "country": "GB",
    "lat": 51.275799,
    "lon": -0.776333,
    "elevation": 238
  },
  {
    "icao": "EGLK",
    "iata": "BBS",
    "name": "Blackbushe Airport",
    "city": "Camberley, Surrey",
    "country": "GB",
    "lat": 51.323898,
    "lon": -0.8475,
    "elevation": 325
  },
  {
    "icao": "EGLL",
    "iata": "LHR",
    "name": "London Heathrow Airport",
    "city": "London",
    "country": "GB",
    "lat": 51.4706,
    "lon": -0.461941,
    "elevation": 83
  },
  {
    "icao": "EGMC",
    "iata": "SEN",
    "name": "London Southend Airport",
    "city": "Southend-on-Sea, Essex",
    "country": "GB",
    "lat": 51.570562,
    "lon": 0.693627,
    "elevation": 49
  },
  {
    "icao": "EGMD",
    "iata": "LYX",
    "name": "Lydd London Ashford Airport",
    "city": "Romney Marsh, Kent",
    "country": "GB",
    "lat": 50.956246,
    "lon": 0.939074,
    "elevation": 13
  },
  {
    "icao": "EGNC",
    "iata": "CAX",
    "name": "Carlisle Lake District Airport",
    "city": "Carlisle, Cumbria",
    "country": "GB",
    "lat": 54.9375,
    "lon": -2.80917,
    "elevation": 190
  },
  {
    "icao": "EGNH",
    "iata": "BLK",
    "name": "Blackpool Airport",
    "city": "Blackpool",
    "country": "GB",
    "lat": 53.771702,
    "lon": -3.02861,
    "elevation": 34
  },
  {
    "icao": "EGNJ",
    "iata": "HUY",
    "name": "Humberside Airport",
    "city": "Grimsby, Lincolnshire",
    "country": "GB",
    "lat": 53.576152,
    "lon": -0.34954,
    "elevation": 121
  },
  {
    "icao": "EGNL",
    "iata": "BWF",
    "name": "Barrow Walney Island Airport",
    "city": "Barrow-in-Furness",
    "country": "GB",
    "lat": 54.1286111,
    "lon": -3.2675,
    "elevation": 173
  },
  {
    "icao": "EGNM",
    "iata": "LBA",
    "name": "Leeds Bradford Airport",
    "city": "Leeds, West Yorkshire",
    "country": "GB",
    "lat": 53.865898,
    "lon": -1.66057,
    "elevation": 681
  },
  {
    "icao": "EGNO",
    "iata": "WRT",
    "name": "Warton Aerodrome",
    "city": "Warton",
    "country": "GB",
    "lat": 53.745098,
    "lon": -2.88306,
    "elevation": 55
  },
  {
    "icao": "EGNR",
    "iata": "CEG",
    "name": "Hawarden Airport",
    "city": "Broughton",
    "country": "GB",
    "lat": 53.178101,
    "lon": -2.97778,
    "elevation": 45
  },
  {
    "icao": "EGNS",
    "iata": "IOM",
    "name": "Isle of Man Airport",
    "city": "Castletown",
    "country": "IM",
    "lat": 54.083302,
    "lon": -4.62389,
    "elevation": 52
  },
  {
    "icao": "EGNT",
    "iata": "NCL",
    "name": "Newcastle International Airport",
    "city": "Newcastle upon Tyne, Tyne and Wear",
    "country": "GB",
    "lat": 55.037958,
    "lon": -1.689577,
    "elevation": 266
  },
  {
    "icao": "EGNV",
    "iata": "MME",
    "name": "Teesside International Airport",
    "city": "Darlington, Durham",
    "country": "GB",
    "lat": 54.509201,
    "lon": -1.42941,
    "elevation": 120
  },
  {
    "icao": "EGNX",
    "iata": "EMA",
    "name": "East Midlands Airport",
    "city": "Nottingham",
    "country": "GB",
    "lat": 52.8311,
    "lon": -1.32806,
    "elevation": 306
  },
  {
    "icao": "EGOV",
    "iata": "VLY",
    "name": "Anglesey Airport",
    "city": "Angelsey",
    "country": "GB",
    "lat": 53.2481,
    "lon": -4.53534,
    "elevation": 37
  },
  {
    "icao": "EGPA",
    "iata": "KOI",
    "name": "Kirkwall Airport",
    "city": "Orkney Islands",
    "country": "GB",
    "lat": 58.957801818847656,
    "lon": -2.9049999713897705,
    "elevation": 50
  },
  {
    "icao": "EGPB",
    "iata": "LSI",
    "name": "Sumburgh Airport",
    "city": "Lerwick, Shetland",
    "country": "GB",
    "lat": 59.878899,
    "lon": -1.29556,
    "elevation": 20
  },
  {
    "icao": "EGPC",
    "iata": "WIC",
    "name": "Wick John O'Groats Airport",
    "city": "Wick",
    "country": "GB",
    "lat": 58.4589,
    "lon": -3.09306,
    "elevation": 126
  },
  {
    "icao": "EGPD",
    "iata": "ABZ",
    "name": "Aberdeen International Airport",
    "city": "Aberdeen",
    "country": "GB",
    "lat": 57.2019,
    "lon": -2.19778,
    "elevation": 215
  },
  {
    "icao": "EGPE",
    "iata": "INV",
    "name": "Inverness Airport",
    "city": "Inverness",
    "country": "GB",
    "lat": 57.54249954223633,
    "lon": -4.047500133514404,
    "elevation": 31
  },
  {
    "icao": "EGPF",
    "iata": "GLA",
    "name": "Glasgow Airport",
    "city": "Glasgow",
    "country": "GB",
    "lat": 55.871899,
    "lon": -4.43306,
    "elevation": 26
  },
  {
    "icao": "EGPH",
    "iata": "EDI",
    "name": "Edinburgh Airport",
    "city": "Edinburgh",
    "country": "GB",
    "lat": 55.950145,
    "lon": -3.372288,
    "elevation": 135
  },
  {
    "icao": "EGPI",
    "iata": "ILY",
    "name": "Islay Airport",
    "city": "Isle of Islay, Argyll and Bute",
    "country": "GB",
    "lat": 55.682708,
    "lon": -6.257525,
    "elevation": 56
  },
  {
    "icao": "EGPK",
    "iata": "PIK",
    "name": "Glasgow Prestwick Airport",
    "city": "Prestwick, South Ayrshire",
    "country": "GB",
    "lat": 55.502003,
    "lon": -4.587019,
    "elevation": 65
  },
  {
    "icao": "EGPL",
    "iata": "BEB",
    "name": "Benbecula Airport",
    "city": "Balivanich",
    "country": "GB",
    "lat": 57.48109817504883,
    "lon": -7.3627800941467285,
    "elevation": 19
  },
  {
    "icao": "EGPN",
    "iata": "DND",
    "name": "Dundee Airport",
    "city": "Dundee",
    "country": "GB",
    "lat": 56.45249938964844,
    "lon": -3.025830030441284,
    "elevation": 17
  },
  {
    "icao": "EGPO",
    "iata": "SYY",
    "name": "Stornoway Airport",
    "city": "Stornoway, Western Isles",
    "country": "GB",
    "lat": 58.215599,
    "lon": -6.33111,
    "elevation": 26
  },
  {
    "icao": "EGPR",
    "iata": "BRR",
    "name": "Barra Airport",
    "city": "Eoligarry",
    "country": "GB",
    "lat": 57.0228,
    "lon": -7.44306,
    "elevation": 5
  },
  {
    "icao": "EGPU",
    "iata": "TRE",
    "name": "Tiree Airport",
    "city": "Balemartine",
    "country": "GB",
    "lat": 56.49919891357422,
    "lon": -6.869170188903809,
    "elevation": 38
  },
  {
    "icao": "EGQL",
    "iata": "ADX",
    "name": "Leuchars Station Airfield",
    "city": "Leuchars, Fife",
    "country": "GB",
    "lat": 56.37398,
    "lon": -2.868862,
    "elevation": 38
  },
  {
    "icao": "EGQS",
    "iata": "LMO",
    "name": "RAF Lossiemouth",
    "city": "Lossiemouth",
    "country": "GB",
    "lat": 57.7052001953125,
    "lon": -3.339169979095459,
    "elevation": 42
  },
  {
    "icao": "EGSC",
    "iata": "CBG",
    "name": "Cambridge City Airport",
    "city": "Cambridge, Cambridgeshire",
    "country": "GB",
    "lat": 52.205002,
    "lon": 0.175,
    "elevation": 47
  },
  {
    "icao": "EGSH",
    "iata": "NWI",
    "name": "Norwich Airport",
    "city": "Norwich, Norfolk",
    "country": "GB",
    "lat": 52.6758,
    "lon": 1.28278,
    "elevation": 117
  },
  {
    "icao": "EGSS",
    "iata": "STN",
    "name": "London Stansted Airport",
    "city": "London",
    "country": "GB",
    "lat": 51.884998,
    "lon": 0.235,
    "elevation": 348
  },
  {
    "icao": "EGTE",
    "iata": "EXT",
    "name": "Exeter International Airport",
    "city": "Exeter, Devon",
    "country": "GB",
    "lat": 50.734261,
    "lon": -3.413984,
    "elevation": 102
  },
  {
    "icao": "EGTK",
    "iata": "OXF",
    "name": "London Oxford Airport",
    "city": "Kidlington, Oxfordshire",
    "country": "GB",
    "lat": 51.836899,
    "lon": -1.32,
    "elevation": 270
  },
  {
    "icao": "EGUB",
    "iata": "BEX",
    "name": "RAF Benson",
    "city": "Wallingford, Oxfordshire",
    "country": "GB",
    "lat": 51.614366,
    "lon": -1.095991,
    "elevation": 226
  },
  {
    "icao": "EGUL",
    "iata": "LKZ",
    "name": "RAF Lakenheath",
    "city": "Brandon, Suffolk",
    "country": "GB",
    "lat": 52.40954,
    "lon": 0.561161,
    "elevation": 32
  },
  {
    "icao": "EGUN",
    "iata": "MHZ",
    "name": "RAF Mildenhall",
    "city": "Bury Saint Edmunds, Suffolk",
    "country": "GB",
    "lat": 52.3619,
    "lon": 0.486406,
    "elevation": 33
  },
  {
    "icao": "EGVA",
    "iata": "FFD",
    "name": "RAF Fairford",
    "city": "Fairford, Gloucestershire",
    "country": "GB",
    "lat": 51.683568,
    "lon": -1.789172,
    "elevation": 286
  },
  {
    "icao": "EGVN",
    "iata": "BZZ",
    "name": "RAF Brize Norton",
    "city": "Carterton, Oxfordshire",
    "country": "GB",
    "lat": 51.75,
    "lon": -1.58362,
    "elevation": 288
  },
  {
    "icao": "EGVO",
    "iata": "ODH",
    "name": "RAF Odiham",
    "city": "Hook, Hampshire",
    "country": "GB",
    "lat": 51.2341,
    "lon": -0.942825,
    "elevation": 405
  },
  {
    "icao": "EGWU",
    "iata": "NHT",
    "name": "RAF Northolt",
    "city": "London",
    "country": "GB",
    "lat": 51.553001,
    "lon": -0.418167,
    "elevation": 124
  },
  {
    "icao": "EGXC",
    "iata": "QCY",
    "name": "RAF Coningsby",
    "city": "Lincoln, Lincolnshire",
    "country": "GB",
    "lat": 53.092999,
    "lon": -0.166014,
    "elevation": 25
  },
  {
    "icao": "EGXH",
    "iata": "BEQ",
    "name": "RAF Honington",
    "city": "Bury Saint Edmunds, Suffolk",
    "country": "GB",
    "lat": 52.342602,
    "lon": 0.772939,
    "elevation": 174
  },
  {
    "icao": "EGXW",
    "iata": "WTN",
    "name": "RAF Waddington",
    "city": "Lincoln, Lincolnshire",
    "country": "GB",
    "lat": 53.166199,
    "lon": -0.523811,
    "elevation": 231
  },
  {
    "icao": "EGYM",
    "iata": "KNF",
    "name": "RAF Marham",
    "city": "King's Lynn, Norfolk",
    "country": "GB",
    "lat": 52.648395,
    "lon": 0.550692,
    "elevation": 75
  },
  {
    "icao": "EGYP",
    "iata": "MPN",
    "name": "Mount Pleasant Airport",
    "city": "Mount Pleasant",
    "country": "FK",
    "lat": -51.82279968261719,
    "lon": -58.447200775146484,
    "elevation": 244
  },
  {
    "icao": "EHAM",
    "iata": "AMS",
    "name": "Amsterdam Airport Schiphol",
    "city": "Amsterdam",
    "country": "NL",
    "lat": 52.308601,
    "lon": 4.76389,
    "elevation": -11
  },
  {
    "icao": "EHBK",
    "iata": "MST",
    "name": "Maastricht Aachen Airport",
    "city": "Maastricht",
    "country": "NL",
    "lat": 50.911701,
    "lon": 5.77014,
    "elevation": 375
  },
  {
    "icao": "EHEH",
    "iata": "EIN",
    "name": "Eindhoven Airport",
    "city": "Eindhoven",
    "country": "NL",
    "lat": 51.4500999451,
    "lon": 5.37452983856,
    "elevation": 74
  },
  {
    "icao": "EHGG",
    "iata": "GRQ",
    "name": "Groningen Airport Eelde",
    "city": "Groningen",
    "country": "NL",
    "lat": 53.119701,
    "lon": 6.57944,
    "elevation": 17
  },
  {
    "icao": "EHGR",
    "iata": "GLZ",
    "name": "Gilze Rijen Air Base",
    "city": "Rijen",
    "country": "NL",
    "lat": 51.567402,
    "lon": 4.93183,
    "elevation": 49
  },
  {
    "icao": "EHKD",
    "iata": "DHR",
    "name": "De Kooy Airfield / Den Helder Naval Air Station",
    "city": "Den Helder",
    "country": "NL",
    "lat": 52.923401,
    "lon": 4.78062,
    "elevation": 3
  },
  {
    "icao": "EHLE",
    "iata": "LEY",
    "name": "Lelystad Airport",
    "city": "Lelystad",
    "country": "NL",
    "lat": 52.453188,
    "lon": 5.514622,
    "elevation": -13
  },
  {
    "icao": "EHLW",
    "iata": "LWR",
    "name": "Leeuwarden Air Base",
    "city": "Leeuwarden",
    "country": "NL",
    "lat": 53.228599548339844,
    "lon": 5.760560035705566,
    "elevation": 3
  },
  {
    "icao": "EHRD",
    "iata": "RTM",
    "name": "Rotterdam The Hague Airport",
    "city": "Rotterdam",
    "country": "NL",
    "lat": 51.956902,
    "lon": 4.43722,
    "elevation": -15
  },
  {
    "icao": "EHTW",
    "iata": "ENS",
    "name": "Twente Airport",
    "city": "Enschede",
    "country": "NL",
    "lat": 52.275833,
    "lon": 6.889167,
    "elevation": 114
  },
  {
    "icao": "EHVK",
    "iata": "UDE",
    "name": "Volkel Air Base",
    "city": "Uden",
    "country": "NL",
    "lat": 51.657222,
    "lon": 5.707778,
    "elevation": 72
  },
  {
    "icao": "EHWO",
    "iata": "WOE",
    "name": "Woensdrecht Air Base",
    "city": "Hoogerheide",
    "country": "NL",
    "lat": 51.4491,
    "lon": 4.34203,
    "elevation": 63
  },
  {
    "icao": "EICK",
    "iata": "ORK",
    "name": "Cork Airport",
    "city": "Cork",
    "country": "IE",
    "lat": 51.841301,
    "lon": -8.49111,
    "elevation": 502
  },
  {
    "icao": "EIDL",
    "iata": "CFN",
    "name": "Donegal Airport",
    "city": "Donegal",
    "country": "IE",
    "lat": 55.0442008972168,
    "lon": -8.340999603271484,
    "elevation": 30
  },
  {
    "icao": "EIDW",
    "iata": "DUB",
    "name": "Dublin Airport",
    "city": "Dublin",
    "country": "IE",
    "lat": 53.428713,
    "lon": -6.262121,
    "elevation": 242
  },
  {
    "icao": "EIKN",
    "iata": "NOC",
    "name": "Ireland West Knock Airport",
    "city": "Charlestown",
    "country": "IE",
    "lat": 53.910301,
    "lon": -8.81849,
    "elevation": 665
  },
  {
    "icao": "EIKY",
    "iata": "KIR",
    "name": "Kerry Airport",
    "city": "Farranfore",
    "country": "IE",
    "lat": 52.180901,
    "lon": -9.52378,
    "elevation": 112
  },
  {
    "icao": "EINN",
    "iata": "SNN",
    "name": "Shannon Airport",
    "city": "Shannon",
    "country": "IE",
    "lat": 52.702,
    "lon": -8.92482,
    "elevation": 46
  },
  {
    "icao": "EISG",
    "iata": "SXL",
    "name": "Sligo Airport",
    "city": "Sligo",
    "country": "IE",
    "lat": 54.280200958252,
    "lon": -8.5992097854614,
    "elevation": 11
  },
  {
    "icao": "EIWF",
    "iata": "WAT",
    "name": "Waterford Airport",
    "city": "Waterford",
    "country": "IE",
    "lat": 52.187199,
    "lon": -7.08696,
    "elevation": 119
  },
  {
    "icao": "EKAH",
    "iata": "AAR",
    "name": "Aarhus Airport",
    "city": "Aarhus",
    "country": "DK",
    "lat": 56.303331,
    "lon": 10.618286,
    "elevation": 82
  },
  {
    "icao": "EKBI",
    "iata": "BLL",
    "name": "Billund Airport",
    "city": "Billund",
    "country": "DK",
    "lat": 55.740335,
    "lon": 9.157019,
    "elevation": 247
  },
  {
    "icao": "EKCH",
    "iata": "CPH",
    "name": "Copenhagen Kastrup Airport",
    "city": "Copenhagen",
    "country": "DK",
    "lat": 55.617900848389,
    "lon": 12.656000137329,
    "elevation": 17
  },
  {
    "icao": "EKEB",
    "iata": "EBJ",
    "name": "Esbjerg Airport",
    "city": "Esbjerg",
    "country": "DK",
    "lat": 55.525902,
    "lon": 8.5534,
    "elevation": 97
  },
  {
    "icao": "EKKA",
    "iata": "KRP",
    "name": "Midtjyllands Airport / Air Base Karup",
    "city": "Karup",
    "country": "DK",
    "lat": 56.297139,
    "lon": 9.104311,
    "elevation": 170
  },
  {
    "icao": "EKMB",
    "iata": "MRW",
    "name": "Lolland Falster Maribo Airport",
    "city": "Rødby",
    "country": "DK",
    "lat": 54.699447,
    "lon": 11.438163,
    "elevation": 16
  },
  {
    "icao": "EKOD",
    "iata": "ODE",
    "name": "Odense Hans Christian Andersen Airport",
    "city": "Odense",
    "country": "DK",
    "lat": 55.475307,
    "lon": 10.327206,
    "elevation": 56
  },
  {
    "icao": "EKRK",
    "iata": "RKE",
    "name": "Copenhagen Roskilde Airport",
    "city": "Roskilde",
    "country": "DK",
    "lat": 55.585602,
    "lon": 12.1314,
    "elevation": 146
  },
  {
    "icao": "EKRN",
    "iata": "RNN",
    "name": "Bornholm Airport",
    "city": "Rønne",
    "country": "DK",
    "lat": 55.063301,
    "lon": 14.7596,
    "elevation": 52
  },
  {
    "icao": "EKSB",
    "iata": "SGD",
    "name": "Sønderborg Airport",
    "city": "Sønderborg",
    "country": "DK",
    "lat": 54.96440124511719,
    "lon": 9.791729927062988,
    "elevation": 24
  },
  {
    "icao": "EKSN",
    "iata": "CNL",
    "name": "Sindal Airport",
    "city": "Sindal",
    "country": "DK",
    "lat": 57.503502,
    "lon": 10.2294,
    "elevation": 92
  },
  {
    "icao": "EKSP",
    "iata": "SKS",
    "name": "Skrydstrup Air Base",
    "city": "Vojens",
    "country": "DK",
    "lat": 55.221048,
    "lon": 9.26702,
    "elevation": 141
  },
  {
    "icao": "EKSV",
    "iata": "SQW",
    "name": "Skive Airport",
    "city": "Skive",
    "country": "DK",
    "lat": 56.550201,
    "lon": 9.17298,
    "elevation": 74
  },
  {
    "icao": "EKTS",
    "iata": "TED",
    "name": "Thisted Airport",
    "city": "Thisted",
    "country": "DK",
    "lat": 57.068802,
    "lon": 8.70522,
    "elevation": 23
  },
  {
    "icao": "EKVG",
    "iata": "FAE",
    "name": "Vágar Airport",
    "city": "Vágar",
    "country": "FO",
    "lat": 62.063256,
    "lon": -7.275782,
    "elevation": 280
  },
  {
    "icao": "EKVJ",
    "iata": "STA",
    "name": "Stauning Vestjylland  Airport",
    "city": "Skjern",
    "country": "DK",
    "lat": 55.990101,
    "lon": 8.35391,
    "elevation": 17
  },
  {
    "icao": "EKYT",
    "iata": "AAL",
    "name": "Aalborg Airport",
    "city": "Aalborg",
    "country": "DK",
    "lat": 57.094763,
    "lon": 9.84993,
    "elevation": 10
  },
  {
    "icao": "ELLX",
    "iata": "LUX",
    "name": "Luxembourg-Findel International Airport",
    "city": "Luxembourg",
    "country": "LU",
    "lat": 49.6233333,
    "lon": 6.2044444,
    "elevation": 1234
  },
  {
    "icao": "ENAL",
    "iata": "AES",
    "name": "Ålesund Airport, Vigra",
    "city": "Ålesund",
    "country": "NO",
    "lat": 62.5625,
    "lon": 6.1197,
    "elevation": 69
  },
  {
    "icao": "ENAN",
    "iata": "ANX",
    "name": "Andøya Airport, Andenes",
    "city": "Andenes",
    "country": "NO",
    "lat": 69.292503,
    "lon": 16.144199,
    "elevation": 43
  },
  {
    "icao": "ENAT",
    "iata": "ALF",
    "name": "Alta Airport",
    "city": "Alta",
    "country": "NO",
    "lat": 69.976097,
    "lon": 23.3717,
    "elevation": 9
  },
  {
    "icao": "ENBN",
    "iata": "BNN",
    "name": "Brønnøysund Airport, Brønnøy",
    "city": "Brønnøy",
    "country": "NO",
    "lat": 65.461098,
    "lon": 12.2175,
    "elevation": 25
  },
  {
    "icao": "ENBO",
    "iata": "BOO",
    "name": "Bodø Airport",
    "city": "Bodø",
    "country": "NO",
    "lat": 67.269203,
    "lon": 14.3653,
    "elevation": 42
  },
  {
    "icao": "ENBR",
    "iata": "BGO",
    "name": "Bergen Airport, Flesland",
    "city": "Bergen",
    "country": "NO",
    "lat": 60.2934,
    "lon": 5.21814,
    "elevation": 170
  },
  {
    "icao": "ENBS",
    "iata": "BJF",
    "name": "Båtsfjord Airport",
    "city": "Båtsfjord",
    "country": "NO",
    "lat": 70.60025,
    "lon": 29.692612,
    "elevation": 490
  },
  {
    "icao": "ENBV",
    "iata": "BVG",
    "name": "Berlevåg Airport",
    "city": "Berlevåg",
    "country": "NO",
    "lat": 70.871517,
    "lon": 29.034097,
    "elevation": 42
  },
  {
    "icao": "ENCN",
    "iata": "KRS",
    "name": "Kristiansand Airport, Kjevik",
    "city": "Kjevik",
    "country": "NO",
    "lat": 58.204201,
    "lon": 8.08537,
    "elevation": 57
  },
  {
    "icao": "ENDU",
    "iata": "BDU",
    "name": "Bardufoss Airport",
    "city": "Målselv",
    "country": "NO",
    "lat": 69.055801,
    "lon": 18.5404,
    "elevation": 252
  },
  {
    "icao": "ENEV",
    "iata": "EVE",
    "name": "Harstad/Narvik Airport, Evenes",
    "city": "Evenes",
    "country": "NO",
    "lat": 68.491302490234,
    "lon": 16.678100585938,
    "elevation": 84
  },
  {
    "icao": "ENFL",
    "iata": "FRO",
    "name": "Florø Airport",
    "city": "Florø",
    "country": "NO",
    "lat": 61.583599090576,
    "lon": 5.0247201919556,
    "elevation": 37
  },
  {
    "icao": "ENGM",
    "iata": "OSL",
    "name": "Oslo Airport, Gardermoen",
    "city": "Oslo (Gardermoen)",
    "country": "NO",
    "lat": 60.193901,
    "lon": 11.1004,
    "elevation": 681
  },
  {
    "icao": "ENHD",
    "iata": "HAU",
    "name": "Haugesund Airport, Karmøy",
    "city": "Karmøy",
    "country": "NO",
    "lat": 59.345299,
    "lon": 5.20836,
    "elevation": 86
  },
  {
    "icao": "ENHF",
    "iata": "HFT",
    "name": "Hammerfest Airport",
    "city": "Hammerfest",
    "country": "NO",
    "lat": 70.679703,
    "lon": 23.6686,
    "elevation": 266
  },
  {
    "icao": "ENHV",
    "iata": "HVG",
    "name": "Honningsvåg Airport, Valan",
    "city": "Honningsvåg",
    "country": "NO",
    "lat": 71.009697,
    "lon": 25.983601,
    "elevation": 44
  },
  {
    "icao": "ENKB",
    "iata": "KSU",
    "name": "Kristiansund Airport, Kvernberget",
    "city": "Kvernberget",
    "country": "NO",
    "lat": 63.111801,
    "lon": 7.82452,
    "elevation": 204
  },
  {
    "icao": "ENKR",
    "iata": "KKN",
    "name": "Kirkenes Airport, Høybuktmoen",
    "city": "Kirkenes",
    "country": "NO",
    "lat": 69.7258,
    "lon": 29.8913,
    "elevation": 283
  },
  {
    "icao": "ENLK",
    "iata": "LKN",
    "name": "Leknes Airport",
    "city": "Leknes",
    "country": "NO",
    "lat": 68.152496337891,
    "lon": 13.609399795532,
    "elevation": 78
  },
  {
    "icao": "ENMH",
    "iata": "MEH",
    "name": "Mehamn Airport",
    "city": "Mehamn",
    "country": "NO",
    "lat": 71.029701,
    "lon": 27.8267,
    "elevation": 39
  },
  {
    "icao": "ENML",
    "iata": "MOL",
    "name": "Molde Airport, Årø",
    "city": "Årø",
    "country": "NO",
    "lat": 62.744701,
    "lon": 7.2625,
    "elevation": 10
  },
  {
    "icao": "ENMS",
    "iata": "MJF",
    "name": "Mosjøen Airport, Kjærstad",
    "city": "Mosjøen",
    "country": "NO",
    "lat": 65.783997,
    "lon": 13.2149,
    "elevation": 237
  },
  {
    "icao": "ENNA",
    "iata": "LKL",
    "name": "Lakselv Airport, Banak",
    "city": "Lakselv",
    "country": "NO",
    "lat": 70.068802,
    "lon": 24.973499,
    "elevation": 25
  },
  {
    "icao": "ENNO",
    "iata": "NTB",
    "name": "Notodden Airport",
    "city": "Notodden",
    "country": "NO",
    "lat": 59.565071,
    "lon": 9.213152,
    "elevation": 63
  },
  {
    "icao": "ENOL",
    "iata": "OLA",
    "name": "Ørland Airport",
    "city": "Ørland",
    "country": "NO",
    "lat": 63.69889831542969,
    "lon": 9.604000091552734,
    "elevation": 28
  },
  {
    "icao": "ENOV",
    "iata": "HOV",
    "name": "Ørsta-Volda Airport, Hovden",
    "city": "Ørsta",
    "country": "NO",
    "lat": 62.180000305176,
    "lon": 6.0741000175476,
    "elevation": 243
  },
  {
    "icao": "ENRA",
    "iata": "MQN",
    "name": "Mo i Rana Airport, Røssvoll",
    "city": "Mo i Rana",
    "country": "NO",
    "lat": 66.363899230957,
    "lon": 14.301400184631,
    "elevation": 229
  },
  {
    "icao": "ENRM",
    "iata": "RVK",
    "name": "Rørvik Airport, Ryum",
    "city": "Rørvik",
    "country": "NO",
    "lat": 64.838302612305,
    "lon": 11.14610004425,
    "elevation": 14
  },
  {
    "icao": "ENRO",
    "iata": "RRS",
    "name": "Røros Airport",
    "city": "Røros",
    "country": "NO",
    "lat": 62.578399658203,
    "lon": 11.342300415039,
    "elevation": 2054
  },
  {
    "icao": "ENSB",
    "iata": "LYR",
    "name": "Svalbard Airport, Longyear",
    "city": "Longyearbyen",
    "country": "NO",
    "lat": 78.246101379395,
    "lon": 15.465600013733,
    "elevation": 88
  },
  {
    "icao": "ENSH",
    "iata": "SVJ",
    "name": "Svolvær Airport, Helle",
    "city": "Svolvær",
    "country": "NO",
    "lat": 68.243301,
    "lon": 14.6692,
    "elevation": 27
  },
  {
    "icao": "ENSK",
    "iata": "SKN",
    "name": "Stokmarknes Airport, Skagen",
    "city": "Hadsel",
    "country": "NO",
    "lat": 68.578827,
    "lon": 15.033417,
    "elevation": 11
  },
  {
    "icao": "ENSO",
    "iata": "SRP",
    "name": "Stord Airport, Sørstokken",
    "city": "Leirvik",
    "country": "NO",
    "lat": 59.791901,
    "lon": 5.34085,
    "elevation": 160
  },
  {
    "icao": "ENSR",
    "iata": "SOJ",
    "name": "Sørkjosen Airport",
    "city": "Sørkjosen",
    "country": "NO",
    "lat": 69.786797,
    "lon": 20.9594,
    "elevation": 16
  },
  {
    "icao": "ENSS",
    "iata": "VAW",
    "name": "Vardø Airport, Svartnes",
    "city": "Vardø",
    "country": "NO",
    "lat": 70.3554,
    "lon": 31.044901,
    "elevation": 42
  },
  {
    "icao": "ENST",
    "iata": "SSJ",
    "name": "Sandnessjøen Airport, Stokka",
    "city": "Alstahaug",
    "country": "NO",
    "lat": 65.956802,
    "lon": 12.4689,
    "elevation": 56
  },
  {
    "icao": "ENTC",
    "iata": "TOS",
    "name": "Tromsø Airport, Langnes",
    "city": "Tromsø",
    "country": "NO",
    "lat": 69.683296,
    "lon": 18.9189,
    "elevation": 31
  },
  {
    "icao": "ENTO",
    "iata": "TRF",
    "name": "Sandefjord Airport, Torp",
    "city": "Torp",
    "country": "NO",
    "lat": 59.186699,
    "lon": 10.2586,
    "elevation": 286
  },
  {
    "icao": "ENVA",
    "iata": "TRD",
    "name": "Trondheim Airport, Værnes",
    "city": "Trondheim",
    "country": "NO",
    "lat": 63.457802,
    "lon": 10.924,
    "elevation": 56
  },
  {
    "icao": "ENVD",
    "iata": "VDS",
    "name": "Vadsø Airport",
    "city": "Vadsø",
    "country": "NO",
    "lat": 70.0653,
    "lon": 29.8447,
    "elevation": 127
  },
  {
    "icao": "ENZV",
    "iata": "SVG",
    "name": "Stavanger Airport, Sola",
    "city": "Stavanger",
    "country": "NO",
    "lat": 58.876701,
    "lon": 5.63778,
    "elevation": 29
  },
  {
    "icao": "EPBY",
    "iata": "BZG",
    "name": "Bydgoszcz Ignacy Jan Paderewski Airport",
    "city": "Bydgoszcz",
    "country": "PL",
    "lat": 53.096802,
    "lon": 17.977699,
    "elevation": 235
  },
  {
    "icao": "EPGD",
    "iata": "GDN",
    "name": "Gdańsk Lech Wałęsa Airport",
    "city": "Gdańsk",
    "country": "PL",
    "lat": 54.377602,
    "lon": 18.4662,
    "elevation": 489
  },
  {
    "icao": "EPKK",
    "iata": "KRK",
    "name": "Kraków John Paul II International Airport",
    "city": "Balice",
    "country": "PL",
    "lat": 50.077702,
    "lon": 19.7848,
    "elevation": 791
  },
  {
    "icao": "EPKT",
    "iata": "KTW",
    "name": "Katowice Wojciech Korfanty International Airport",
    "city": "Katowice",
    "country": "PL",
    "lat": 50.476015,
    "lon": 19.080705,
    "elevation": 995
  },
  {
    "icao": "EPLB",
    "iata": "LUZ",
    "name": "Lublin Airport",
    "city": "Lublin",
    "country": "PL",
    "lat": 51.240157,
    "lon": 22.713461,
    "elevation": 633
  },
  {
    "icao": "EPLL",
    "iata": "LCJ",
    "name": "Łódź Władysław Reymont Airport",
    "city": "Łódź",
    "country": "PL",
    "lat": 51.721901,
    "lon": 19.3981,
    "elevation": 604
  },
  {
    "icao": "EPMO",
    "iata": "WMI",
    "name": "Modlin Airport",
    "city": "Nowy Dwór Mazowiecki",
    "country": "PL",
    "lat": 52.451099,
    "lon": 20.6518,
    "elevation": 341
  },
  {
    "icao": "EPPO",
    "iata": "POZ",
    "name": "Poznań-Ławica Airport",
    "city": "Poznań",
    "country": "PL",
    "lat": 52.421598,
    "lon": 16.823359,
    "elevation": 308
  },
  {
    "icao": "EPRA",
    "iata": "RDO",
    "name": "Warsaw Radom Airport",
    "city": "Radom",
    "country": "PL",
    "lat": 51.38937,
    "lon": 21.214742,
    "elevation": 610
  },
  {
    "icao": "EPRZ",
    "iata": "RZE",
    "name": "Rzeszów-Jasionka Airport",
    "city": "Jasionka",
    "country": "PL",
    "lat": 50.109791,
    "lon": 22.024155,
    "elevation": 693
  },
  {
    "icao": "EPSC",
    "iata": "SZZ",
    "name": "Solidarity Szczecin–Goleniów Airport",
    "city": "Glewice",
    "country": "PL",
    "lat": 53.584702,
    "lon": 14.9022,
    "elevation": 154
  },
  {
    "icao": "EPSY",
    "iata": "SZY",
    "name": "Olsztyn-Mazury Airport",
    "city": "Szymany",
    "country": "PL",
    "lat": 53.481899,
    "lon": 20.9377,
    "elevation": 463
  },
  {
    "icao": "EPWA",
    "iata": "WAW",
    "name": "Warsaw Chopin Airport",
    "city": "Warsaw",
    "country": "PL",
    "lat": 52.165699,
    "lon": 20.9671,
    "elevation": 362
  },
  {
    "icao": "EPWR",
    "iata": "WRO",
    "name": "Copernicus Wrocław Airport",
    "city": "Wrocław",
    "country": "PL",
    "lat": 51.103719,
    "lon": 16.882096,
    "elevation": 404
  },
  {
    "icao": "EPZG",
    "iata": "IEG",
    "name": "Zielona Góra-Babimost Airport",
    "city": "Nowe Kramsko",
    "country": "PL",
    "lat": 52.1385,
    "lon": 15.7986,
    "elevation": 194
  },
  {
    "icao": "ESDF",
    "iata": "RNB",
    "name": "Ronneby Airport",
    "city": "Ronneby",
    "country": "SE",
    "lat": 56.266701,
    "lon": 15.265,
    "elevation": 191
  },
  {
    "icao": "ESGG",
    "iata": "GOT",
    "name": "Göteborg Landvetter Airport",
    "city": "Göteborg",
    "country": "SE",
    "lat": 57.6628,
    "lon": 12.2798,
    "elevation": 506
  },
  {
    "icao": "ESGJ",
    "iata": "JKG",
    "name": "Jönköping Airport",
    "city": "Jönköping",
    "country": "SE",
    "lat": 57.757598876953125,
    "lon": 14.068699836730957,
    "elevation": 741
  },
  {
    "icao": "ESGP",
    "iata": "GSE",
    "name": "Säve Airport",
    "city": "Göteborg",
    "country": "SE",
    "lat": 57.7747,
    "lon": 11.8704,
    "elevation": 59
  },
  {
    "icao": "ESGR",
    "iata": "KVB",
    "name": "Skövde Airport",
    "city": "Skövde",
    "country": "SE",
    "lat": 58.456402,
    "lon": 13.9727,
    "elevation": 324
  },
  {
    "icao": "ESGT",
    "iata": "THN",
    "name": "Trollhättan-Vänersborg Airport",
    "city": "Trollhättan",
    "country": "SE",
    "lat": 58.31809997558594,
    "lon": 12.345000267028809,
    "elevation": 137
  },
  {
    "icao": "ESKK",
    "iata": "KSK",
    "name": "Karlskoga Airport",
    "city": "Karlskoga",
    "country": "SE",
    "lat": 59.345901,
    "lon": 14.4959,
    "elevation": 407
  },
  {
    "icao": "ESKM",
    "iata": "MXX",
    "name": "Mora Airport",
    "city": "Mora",
    "country": "SE",
    "lat": 60.957901,
    "lon": 14.5114,
    "elevation": 634
  },
  {
    "icao": "ESKN",
    "iata": "NYO",
    "name": "Stockholm Skavsta Airport",
    "city": "Nyköping",
    "country": "SE",
    "lat": 58.788601,
    "lon": 16.912201,
    "elevation": 140
  },
  {
    "icao": "ESKS",
    "iata": "SCR",
    "name": "Scandinavian Mountains Airport",
    "city": "Malung-Sälen",
    "country": "SE",
    "lat": 61.158393,
    "lon": 12.842503,
    "elevation": 1608
  },
  {
    "icao": "ESMK",
    "iata": "KID",
    "name": "Kristianstad Airport",
    "city": "Kristianstad",
    "country": "SE",
    "lat": 55.9217,
    "lon": 14.0855,
    "elevation": 76
  },
  {
    "icao": "ESMQ",
    "iata": "KLR",
    "name": "Kalmar Airport",
    "city": "Kalmar",
    "country": "SE",
    "lat": 56.685501,
    "lon": 16.2876,
    "elevation": 17
  },
  {
    "icao": "ESMS",
    "iata": "MMX",
    "name": "Malmö Sturup Airport",
    "city": "Malmö",
    "country": "SE",
    "lat": 55.535564,
    "lon": 13.376327,
    "elevation": 236
  },
  {
    "icao": "ESMT",
    "iata": "HAD",
    "name": "Halmstad Airport",
    "city": "Halmstad",
    "country": "SE",
    "lat": 56.69110107421875,
    "lon": 12.820199966430664,
    "elevation": 101
  },
  {
    "icao": "ESMX",
    "iata": "VXO",
    "name": "Växjö Kronoberg Airport",
    "city": "Växjö",
    "country": "SE",
    "lat": 56.929100036621094,
    "lon": 14.727999687194824,
    "elevation": 610
  },
  {
    "icao": "ESNG",
    "iata": "GEV",
    "name": "Gällivare Airport",
    "city": "Gällivare",
    "country": "SE",
    "lat": 67.13240051269531,
    "lon": 20.814599990844727,
    "elevation": 1027
  },
  {
    "icao": "ESNK",
    "iata": "KRF",
    "name": "Kramfors-Sollefteå Höga Kusten Airport",
    "city": "Nyland",
    "country": "SE",
    "lat": 63.048599,
    "lon": 17.7689,
    "elevation": 34
  },
  {
    "icao": "ESNL",
    "iata": "LYC",
    "name": "Lycksele Airport",
    "city": "Lycksele",
    "country": "SE",
    "lat": 64.548302,
    "lon": 18.7162,
    "elevation": 705
  },
  {
    "icao": "ESNN",
    "iata": "SDL",
    "name": "Sundsvall-Härnösand Airport",
    "city": "Sundsvall/ Härnösand",
    "country": "SE",
    "lat": 62.528099060058594,
    "lon": 17.443899154663086,
    "elevation": 16
  },
  {
    "icao": "ESNO",
    "iata": "OER",
    "name": "Örnsköldsvik Airport",
    "city": "Örnsköldsvik",
    "country": "SE",
    "lat": 63.40829849243164,
    "lon": 18.989999771118164,
    "elevation": 354
  },
  {
    "icao": "ESNQ",
    "iata": "KRN",
    "name": "Kiruna Airport",
    "city": "Kiruna",
    "country": "SE",
    "lat": 67.821998596191,
    "lon": 20.336799621582,
    "elevation": 1508
  },
  {
    "icao": "ESNS",
    "iata": "SFT",
    "name": "Skellefteå Airport",
    "city": "Skellefteå",
    "country": "SE",
    "lat": 64.62480163574219,
    "lon": 21.076900482177734,
    "elevation": 157
  },
  {
    "icao": "ESNU",
    "iata": "UME",
    "name": "Umeå Airport",
    "city": "Umeå",
    "country": "SE",
    "lat": 63.791801452637,
    "lon": 20.282800674438,
    "elevation": 24
  },
  {
    "icao": "ESNV",
    "iata": "VHM",
    "name": "Vilhelmina South Lapland Airport",
    "city": "Vilhelmina",
    "country": "SE",
    "lat": 64.579102,
    "lon": 16.833599,
    "elevation": 1140
  },
  {
    "icao": "ESNX",
    "iata": "AJR",
    "name": "Arvidsjaur Airport",
    "city": "Arvidsjaur",
    "country": "SE",
    "lat": 65.59030151367188,
    "lon": 19.28190040588379,
    "elevation": 1245
  },
  {
    "icao": "ESNY",
    "iata": "SOO",
    "name": "Söderhamn Airport",
    "city": "Söderhamn",
    "country": "SE",
    "lat": 61.261501,
    "lon": 17.0991,
    "elevation": 88
  },
  {
    "icao": "ESNZ",
    "iata": "OSD",
    "name": "Åre Östersund Airport",
    "city": "Östersund",
    "country": "SE",
    "lat": 63.194135,
    "lon": 14.500322,
    "elevation": 1233
  },
  {
    "icao": "ESOE",
    "iata": "ORB",
    "name": "Örebro Airport",
    "city": "Örebro",
    "country": "SE",
    "lat": 59.22370147705078,
    "lon": 15.038000106811523,
    "elevation": 188
  },
  {
    "icao": "ESOK",
    "iata": "KSD",
    "name": "Karlstad Airport",
    "city": "Karlstad",
    "country": "SE",
    "lat": 59.444698,
    "lon": 13.3374,
    "elevation": 352
  },
  {
    "icao": "ESOW",
    "iata": "VST",
    "name": "Stockholm Västerås Airport",
    "city": "Stockholm / Västerås",
    "country": "SE",
    "lat": 59.58940124511719,
    "lon": 16.63360023498535,
    "elevation": 21
  },
  {
    "icao": "ESPA",
    "iata": "LLA",
    "name": "Luleå Airport",
    "city": "Luleå",
    "country": "SE",
    "lat": 65.5438,
    "lon": 22.122,
    "elevation": 65
  },
  {
    "icao": "ESSA",
    "iata": "ARN",
    "name": "Stockholm-Arlanda Airport",
    "city": "Stockholm",
    "country": "SE",
    "lat": 59.64849,
    "lon": 17.928829,
    "elevation": 137
  },
  {
    "icao": "ESSB",
    "iata": "BMA",
    "name": "Stockholm-Bromma Airport",
    "city": "Stockholm",
    "country": "SE",
    "lat": 59.354400634765625,
    "lon": 17.941699981689453,
    "elevation": 47
  },
  {
    "icao": "ESSD",
    "iata": "BLE",
    "name": "Dala Airport",
    "city": "Borlange",
    "country": "SE",
    "lat": 60.422001,
    "lon": 15.5152,
    "elevation": 503
  },
  {
    "icao": "ESSK",
    "iata": "GVX",
    "name": "Gävle Sandviken Airport",
    "city": "Gävle / Sandviken",
    "country": "SE",
    "lat": 60.5933,
    "lon": 16.951401,
    "elevation": 224
  },
  {
    "icao": "ESSL",
    "iata": "LPI",
    "name": "Linköping City Airport",
    "city": "Linköping",
    "country": "SE",
    "lat": 58.4062004089,
    "lon": 15.680500030500001,
    "elevation": 172
  },
  {
    "icao": "ESSP",
    "iata": "NRK",
    "name": "Norrköping Airport",
    "city": "Norrköping",
    "country": "SE",
    "lat": 58.586299896240234,
    "lon": 16.250600814819336,
    "elevation": 32
  },
  {
    "icao": "ESST",
    "iata": "TYF",
    "name": "Torsby Airport",
    "city": "Torsby",
    "country": "SE",
    "lat": 60.1576,
    "lon": 12.9913,
    "elevation": 393
  },
  {
    "icao": "ESSU",
    "iata": "EKT",
    "name": "Eskilstuna Airport",
    "city": "Eskilstuna",
    "country": "SE",
    "lat": 59.351101,
    "lon": 16.708401,
    "elevation": 139
  },
  {
    "icao": "ESSV",
    "iata": "VBY",
    "name": "Visby Airport",
    "city": "Visby",
    "country": "SE",
    "lat": 57.662799835205,
    "lon": 18.346200942993,
    "elevation": 164
  },
  {
    "icao": "ESTA",
    "iata": "AGH",
    "name": "Ängelholm-Helsingborg Airport",
    "city": "Ängelholm",
    "country": "SE",
    "lat": 56.29610061645508,
    "lon": 12.847100257873535,
    "elevation": 68
  },
  {
    "icao": "ESUD",
    "iata": "SQO",
    "name": "Storuman Airport",
    "city": "Storuman",
    "country": "SE",
    "lat": 64.960899,
    "lon": 17.6966,
    "elevation": 915
  },
  {
    "icao": "ETAD",
    "iata": "SPM",
    "name": "Spangdahlem Air Base",
    "city": "Trier",
    "country": "DE",
    "lat": 49.976507,
    "lon": 6.698413,
    "elevation": 1197
  },
  {
    "icao": "ETAR",
    "iata": "RMS",
    "name": "Ramstein Air Base",
    "city": "Ramstein-Miesenbach",
    "country": "DE",
    "lat": 49.436901,
    "lon": 7.60028,
    "elevation": 776
  },
  {
    "icao": "ETHF",
    "iata": "FRZ",
    "name": "Fritzlar Army Airfield",
    "city": "Fritzlar",
    "country": "DE",
    "lat": 51.1146,
    "lon": 9.286,
    "elevation": 565
  },
  {
    "icao": "ETMN",
    "iata": "FCN",
    "name": "Sea-Airport Cuxhaven/Nordholz / Nordholz Naval Airbase",
    "city": "Wurster Nordseeküste",
    "country": "DE",
    "lat": 53.767689,
    "lon": 8.659201,
    "elevation": 74
  },
  {
    "icao": "ETNG",
    "iata": "GKE",
    "name": "Geilenkirchen Air Base",
    "city": "Geilenkirchen",
    "country": "DE",
    "lat": 50.9608,
    "lon": 6.04242,
    "elevation": 296
  },
  {
    "icao": "ETNL",
    "iata": "RLG",
    "name": "Rostock-Laage Airport",
    "city": "Laage",
    "country": "DE",
    "lat": 53.918201,
    "lon": 12.2783,
    "elevation": 138
  },
  {
    "icao": "ETNS",
    "iata": "WBG",
    "name": "Schleswig Air Base",
    "city": "Jagel",
    "country": "DE",
    "lat": 54.459301,
    "lon": 9.51633,
    "elevation": 70
  },
  {
    "icao": "ETOU",
    "iata": "WIE",
    "name": "Wiesbaden Army Airfield",
    "city": "Wiesbaden",
    "country": "DE",
    "lat": 50.049800872802734,
    "lon": 8.325400352478027,
    "elevation": 461
  },
  {
    "icao": "ETSI",
    "iata": "IGS",
    "name": "Ingolstadt Manching Airport",
    "city": "Manching",
    "country": "DE",
    "lat": 48.7156982421875,
    "lon": 11.534000396728516,
    "elevation": 1202
  },
  {
    "icao": "EVLA",
    "iata": "LPX",
    "name": "Liepāja International Airport",
    "city": "Liepāja",
    "country": "LV",
    "lat": 56.517502,
    "lon": 21.096901,
    "elevation": 16
  },
  {
    "icao": "EVRA",
    "iata": "RIX",
    "name": "Riga International Airport",
    "city": "Riga",
    "country": "LV",
    "lat": 56.920752,
    "lon": 23.970711,
    "elevation": 36
  },
  {
    "icao": "EYKA",
    "iata": "KUN",
    "name": "Kaunas International Airport",
    "city": "Kaunas",
    "country": "LT",
    "lat": 54.96390151977539,
    "lon": 24.084800720214844,
    "elevation": 256
  },
  {
    "icao": "EYPA",
    "iata": "PLQ",
    "name": "Palanga International Airport",
    "city": "Palanga",
    "country": "LT",
    "lat": 55.973201751708984,
    "lon": 21.093900680541992,
    "elevation": 33
  },
  {
    "icao": "EYPP",
    "iata": "PNV",
    "name": "Panevėžys Air Base",
    "city": "Panevėžys",
    "country": "LT",
    "lat": 55.729400634765625,
    "lon": 24.460800170898438,
    "elevation": 197
  },
  {
    "icao": "EYSA",
    "iata": "SQQ",
    "name": "Šiauliai International Airport",
    "city": "Šiauliai",
    "country": "LT",
    "lat": 55.89390182495117,
    "lon": 23.395000457763672,
    "elevation": 443
  },
  {
    "icao": "EYVI",
    "iata": "VNO",
    "name": "Vilnius International Airport",
    "city": "Vilnius",
    "country": "LT",
    "lat": 54.634102,
    "lon": 25.285801,
    "elevation": 648
  },
  {
    "icao": "FAAB",
    "iata": "ALJ",
    "name": "Alexander Bay Airport",
    "city": "Alexander Bay",
    "country": "ZA",
    "lat": -28.575001,
    "lon": 16.5333,
    "elevation": 98
  },
  {
    "icao": "FAAG",
    "iata": "AGZ",
    "name": "Aggeneys Airport",
    "city": "Aggeneys",
    "country": "ZA",
    "lat": -29.281799,
    "lon": 18.8139,
    "elevation": 2648
  },
  {
    "icao": "FABE",
    "iata": "BIY",
    "name": "Bisho Airport",
    "city": "Bisho",
    "country": "ZA",
    "lat": -32.897099,
    "lon": 27.2791,
    "elevation": 1950
  },
  {
    "icao": "FABL",
    "iata": "BFN",
    "name": "Bram Fischer International Airport",
    "city": "Bloemfontain",
    "country": "ZA",
    "lat": -29.092699,
    "lon": 26.302401,
    "elevation": 4457
  },
  {
    "icao": "FACT",
    "iata": "CPT",
    "name": "Cape Town International Airport",
    "city": "Cape Town",
    "country": "ZA",
    "lat": -33.9648017883,
    "lon": 18.6016998291,
    "elevation": 151
  },
  {
    "icao": "FAEL",
    "iata": "ELS",
    "name": "King Phalo Airport",
    "city": "East London",
    "country": "ZA",
    "lat": -33.035599,
    "lon": 27.825899,
    "elevation": 435
  },
  {
    "icao": "FAFB",
    "iata": "FCB",
    "name": "Ficksburg Sentraoes Airport",
    "city": "Ficksburg",
    "country": "ZA",
    "lat": -28.82309913635254,
    "lon": 27.908899307250977,
    "elevation": 5315
  },
  {
    "icao": "FAGC",
    "iata": "GCJ",
    "name": "Grand Central Airport",
    "city": "Midrand",
    "country": "ZA",
    "lat": -25.986299514799995,
    "lon": 28.1401004791,
    "elevation": 5325
  },
  {
    "icao": "FAGG",
    "iata": "GRJ",
    "name": "George Airport",
    "city": "George",
    "country": "ZA",
    "lat": -34.0056,
    "lon": 22.378902,
    "elevation": 648
  },
  {
    "icao": "FAGM",
    "iata": "QRA",
    "name": "Rand Airport",
    "city": "Johannesburg",
    "country": "ZA",
    "lat": -26.2425,
    "lon": 28.151199,
    "elevation": 5483
  },
  {
    "icao": "FAHR",
    "iata": "HRS",
    "name": "Harrismith Airport",
    "city": "Harrismith",
    "country": "ZA",
    "lat": -28.2351,
    "lon": 29.106199,
    "elevation": 5585
  },
  {
    "icao": "FAKD",
    "iata": "KXE",
    "name": "P C Pelser Airport",
    "city": "Klerksdorp",
    "country": "ZA",
    "lat": -26.871099,
    "lon": 26.718,
    "elevation": 4444
  },
  {
    "icao": "FAKM",
    "iata": "KIM",
    "name": "Kimberley Airport",
    "city": "Kimberley",
    "country": "ZA",
    "lat": -28.802799224900003,
    "lon": 24.7651996613,
    "elevation": 3950
  },
  {
    "icao": "FAKN",
    "iata": "MQP",
    "name": "Kruger Mpumalanga International Airport",
    "city": "Mpumalanga",
    "country": "ZA",
    "lat": -25.3831996918,
    "lon": 31.1056003571,
    "elevation": 2829
  },
  {
    "icao": "FAKU",
    "iata": "KMH",
    "name": "Johan Pienaar Airport",
    "city": "Kuruman",
    "country": "ZA",
    "lat": -27.45669937133789,
    "lon": 23.411399841308594,
    "elevation": 4382
  },
  {
    "icao": "FAKZ",
    "iata": "KLZ",
    "name": "Kleinsee Airport",
    "city": "Kleinsee",
    "country": "ZA",
    "lat": -29.6884002686,
    "lon": 17.093999862700002,
    "elevation": 270
  },
  {
    "icao": "FALA",
    "iata": "HLA",
    "name": "Lanseria International Airport",
    "city": "Johannesburg",
    "country": "ZA",
    "lat": -25.938499,
    "lon": 27.9261,
    "elevation": 4517
  },
  {
    "icao": "FALC",
    "iata": "LMR",
    "name": "Lime Acres Finsch Mine Airport",
    "city": "Lime Acres",
    "country": "ZA",
    "lat": -28.36009979248047,
    "lon": 23.43910026550293,
    "elevation": 4900
  },
  {
    "icao": "FALE",
    "iata": "DUR",
    "name": "King Shaka International Airport",
    "city": "Durban",
    "country": "ZA",
    "lat": -29.6144444444,
    "lon": 31.1197222222,
    "elevation": 295
  },
  {
    "icao": "FALW",
    "iata": "SDB",
    "name": "Langebaanweg Airport",
    "city": "Langebaanweg",
    "country": "ZA",
    "lat": -32.968898773199996,
    "lon": 18.1602993011,
    "elevation": 108
  },
  {
    "icao": "FALY",
    "iata": "LAY",
    "name": "Ladysmith Airport",
    "city": "Ladysmith",
    "country": "ZA",
    "lat": -28.5816993713,
    "lon": 29.749700546299998,
    "elevation": 3548
  },
  {
    "icao": "FAMD",
    "iata": "AAM",
    "name": "Malamala Airport",
    "city": "Malamala",
    "country": "ZA",
    "lat": -24.816866,
    "lon": 31.544085,
    "elevation": 1124
  },
  {
    "icao": "FAMG",
    "iata": "MGH",
    "name": "Margate Airport",
    "city": "Margate",
    "country": "ZA",
    "lat": -30.8574008942,
    "lon": 30.343000412,
    "elevation": 495
  },
  {
    "icao": "FAMM",
    "iata": "MBD",
    "name": "Mmabatho International Airport",
    "city": "Mafeking",
    "country": "ZA",
    "lat": -25.798400878900004,
    "lon": 25.548000335699996,
    "elevation": 4181
  },
  {
    "icao": "FAMU",
    "iata": "MZQ",
    "name": "Mkuze Airport",
    "city": "Mkuze",
    "country": "ZA",
    "lat": -27.626100540161133,
    "lon": 32.0443000793457,
    "elevation": 400
  },
  {
    "icao": "FANC",
    "iata": "NCS",
    "name": "Newcastle Airport",
    "city": "Newcastle",
    "country": "ZA",
    "lat": -27.7705993652,
    "lon": 29.976900100699996,
    "elevation": 4074
  },
  {
    "icao": "FAOH",
    "iata": "OUH",
    "name": "Oudtshoorn Airport",
    "city": "Oudtshoorn",
    "country": "ZA",
    "lat": -33.6069984436,
    "lon": 22.188999176,
    "elevation": 1063
  },
  {
    "icao": "FAOR",
    "iata": "JNB",
    "name": "O.R. Tambo International Airport",
    "city": "Johannesburg",
    "country": "ZA",
    "lat": -26.1392,
    "lon": 28.246,
    "elevation": 5558
  },
  {
    "icao": "FAPE",
    "iata": "PLZ",
    "name": "Chief Dawid Stuurman International Airport",
    "city": "Gqeberha (Port Elizabeth)",
    "country": "ZA",
    "lat": -33.984901,
    "lon": 25.6173,
    "elevation": 226
  },
  {
    "icao": "FAPG",
    "iata": "PBZ",
    "name": "Plettenberg Bay Airport",
    "city": "Plettenberg Bay",
    "country": "ZA",
    "lat": -34.08816,
    "lon": 23.328723,
    "elevation": 465
  },
  {
    "icao": "FAPH",
    "iata": "PHW",
    "name": "Hendrik Van Eck Airport",
    "city": "Phalaborwa",
    "country": "ZA",
    "lat": -23.937200546299998,
    "lon": 31.1553993225,
    "elevation": 1432
  },
  {
    "icao": "FAPJ",
    "iata": "JOH",
    "name": "Port St Johns Airport",
    "city": "Port St Johns",
    "country": "ZA",
    "lat": -31.60612,
    "lon": 29.52175,
    "elevation": 1227
  },
  {
    "icao": "FAPM",
    "iata": "PZB",
    "name": "Pietermaritzburg Airport",
    "city": "Pietermaritzburg",
    "country": "ZA",
    "lat": -29.649000167799997,
    "lon": 30.3987007141,
    "elevation": 2423
  },
  {
    "icao": "FAPP",
    "iata": "PTG",
    "name": "Polokwane International Airport",
    "city": "Polokwane",
    "country": "ZA",
    "lat": -23.845269,
    "lon": 29.458615,
    "elevation": 4076
  },
  {
    "icao": "FAPS",
    "iata": "PCF",
    "name": "Potchefstroom Airport",
    "city": "Potchefstroom",
    "country": "ZA",
    "lat": -26.670999527,
    "lon": 27.0818996429,
    "elevation": 4520
  },
  {
    "icao": "FAQT",
    "iata": "UTW",
    "name": "Queenstown Airport",
    "city": "Queenstown",
    "country": "ZA",
    "lat": -31.92020034790039,
    "lon": 26.882200241088867,
    "elevation": 3637
  },
  {
    "icao": "FARB",
    "iata": "RCB",
    "name": "Richards Bay Airport",
    "city": "Richards Bay",
    "country": "ZA",
    "lat": -28.740999221800003,
    "lon": 32.0920982361,
    "elevation": 109
  },
  {
    "icao": "FARS",
    "iata": "ROD",
    "name": "Robertson Airport",
    "city": "Robertson",
    "country": "ZA",
    "lat": -33.812199,
    "lon": 19.9028,
    "elevation": 640
  },
  {
    "icao": "FASB",
    "iata": "SBU",
    "name": "Springbok Airport",
    "city": "Springbok",
    "country": "ZA",
    "lat": -29.689300537109375,
    "lon": 17.939599990844727,
    "elevation": 2690
  },
  {
    "icao": "FASC",
    "iata": "ZEC",
    "name": "Secunda Airport",
    "city": "Secunda",
    "country": "ZA",
    "lat": -26.52409935,
    "lon": 29.170099258399997,
    "elevation": 5250
  },
  {
    "icao": "FASS",
    "iata": "SIS",
    "name": "Sishen Airport",
    "city": "Sishen",
    "country": "ZA",
    "lat": -27.6486,
    "lon": 22.9993,
    "elevation": 3848
  },
  {
    "icao": "FASZ",
    "iata": "SZK",
    "name": "Skukuza Airport",
    "city": "Skukuza",
    "country": "ZA",
    "lat": -24.960899353,
    "lon": 31.5886993408,
    "elevation": 1020
  },
  {
    "icao": "FATZ",
    "iata": "LTA",
    "name": "Tzaneen Airport",
    "city": "Tzaneen",
    "country": "ZA",
    "lat": -23.8244,
    "lon": 30.3293,
    "elevation": 1914
  },
  {
    "icao": "FAUL",
    "iata": "ULD",
    "name": "Prince Mangosuthu Buthelezi Airport",
    "city": "Ulundi",
    "country": "ZA",
    "lat": -28.3206005096,
    "lon": 31.4165000916,
    "elevation": 1720
  },
  {
    "icao": "FAUP",
    "iata": "UTN",
    "name": "Pierre Van Ryneveld Airport",
    "city": "Upington",
    "country": "ZA",
    "lat": -28.39909935,
    "lon": 21.260200500499998,
    "elevation": 2782
  },
  {
    "icao": "FAUT",
    "iata": "UTT",
    "name": "K. D. Matanzima Airport",
    "city": "Mthatha",
    "country": "ZA",
    "lat": -31.546363184900002,
    "lon": 28.6733551025,
    "elevation": 2400
  },
  {
    "icao": "FAVB",
    "iata": "VRU",
    "name": "Vryburg Airport",
    "city": "Vyrburg",
    "country": "ZA",
    "lat": -26.9824008942,
    "lon": 24.7287998199,
    "elevation": 3920
  },
  {
    "icao": "FAVG",
    "iata": "VIR",
    "name": "Virginia Airport",
    "city": "Durban",
    "country": "ZA",
    "lat": -29.770599,
    "lon": 31.058399,
    "elevation": 20
  },
  {
    "icao": "FAVR",
    "iata": "VRE",
    "name": "Vredendal Airport",
    "city": "Vredendal",
    "country": "ZA",
    "lat": -31.641000747680664,
    "lon": 18.5447998046875,
    "elevation": 330
  },
  {
    "icao": "FAWB",
    "iata": "PRY",
    "name": "Wonderboom Airport",
    "city": "Pretoria",
    "country": "ZA",
    "lat": -25.6539,
    "lon": 28.224199,
    "elevation": 4095
  },
  {
    "icao": "FAWK",
    "iata": "WKF",
    "name": "Waterkloof Air Force Base",
    "city": "Pretoria",
    "country": "ZA",
    "lat": -25.829999923699997,
    "lon": 28.222499847399998,
    "elevation": 4940
  },
  {
    "icao": "FBPM",
    "iata": "FRW",
    "name": "P G Matante Intl",
    "city": "Francistown",
    "country": "BW",
    "lat": -21.15914,
    "lon": 27.468545,
    "elevation": 3283
  },
  {
    "icao": "FBJW",
    "iata": "JWA",
    "name": "Jwaneng Airport",
    "city": "Jwaneng",
    "country": "BW",
    "lat": -24.602301,
    "lon": 24.691,
    "elevation": 3900
  },
  {
    "icao": "FBKE",
    "iata": "BBK",
    "name": "Kasane Airport",
    "city": "Kasane",
    "country": "BW",
    "lat": -17.832899,
    "lon": 25.162399,
    "elevation": 3289
  },
  {
    "icao": "FBMN",
    "iata": "MUB",
    "name": "Maun Airport",
    "city": "Maun",
    "country": "BW",
    "lat": -19.970491,
    "lon": 23.431409,
    "elevation": 3093
  },
  {
    "icao": "FBSK",
    "iata": "GBE",
    "name": "Sir Seretse Khama International Airport",
    "city": "Gaborone",
    "country": "BW",
    "lat": -24.555201,
    "lon": 25.9182,
    "elevation": 3299
  },
  {
    "icao": "FBSN",
    "iata": "SXN",
    "name": "Sua Pan Airport",
    "city": "Sowa",
    "country": "BW",
    "lat": -20.5534,
    "lon": 26.115801,
    "elevation": 2985
  },
  {
    "icao": "FBSP",
    "iata": "PKW",
    "name": "Selebi Phikwe Airport",
    "city": "Selebi Phikwe",
    "country": "BW",
    "lat": -22.0583,
    "lon": 27.8288,
    "elevation": 2925
  },
  {
    "icao": "FCBB",
    "iata": "BZV",
    "name": "Maya-Maya Airport",
    "city": "Brazzaville",
    "country": "CG",
    "lat": -4.251699924468994,
    "lon": 15.253000259399414,
    "elevation": 1048
  },
  {
    "icao": "FCOD",
    "iata": "OLL",
    "name": "Oyo Ollombo Airport",
    "city": "Oyo",
    "country": "CG",
    "lat": -1.226666,
    "lon": 15.91,
    "elevation": 1073
  },
  {
    "icao": "FCOO",
    "iata": "FTX",
    "name": "Owando Airport",
    "city": "Owando",
    "country": "CG",
    "lat": -0.524566,
    "lon": 15.93782,
    "elevation": 1214
  },
  {
    "icao": "FCOU",
    "iata": "OUE",
    "name": "Ouesso Airport",
    "city": "",
    "country": "CG",
    "lat": 1.61599,
    "lon": 16.037901,
    "elevation": 1158
  },
  {
    "icao": "FCPD",
    "iata": "DIS",
    "name": "Ngot Nzoungou Airport",
    "city": "Dolisie",
    "country": "CG",
    "lat": -4.20635,
    "lon": 12.6599,
    "elevation": 1079
  },
  {
    "icao": "FCPP",
    "iata": "PNR",
    "name": "Antonio Agostinho-Neto International Airport",
    "city": "Pointe Noire",
    "country": "CG",
    "lat": -4.81603,
    "lon": 11.8866,
    "elevation": 55
  },
  {
    "icao": "FDMS",
    "iata": "MTS",
    "name": "Matsapha Airport",
    "city": "Manzini",
    "country": "SZ",
    "lat": -26.528999,
    "lon": 31.307501,
    "elevation": 2075
  },
  {
    "icao": "FDSK",
    "iata": "SHO",
    "name": "King Mswati III International Airport",
    "city": "Mpaka",
    "country": "SZ",
    "lat": -26.358611,
    "lon": 31.716944,
    "elevation": 1092
  },
  {
    "icao": "FEFF",
    "iata": "BGF",
    "name": "Bangui M'Poko International Airport",
    "city": "Bangui",
    "country": "CF",
    "lat": 4.39847993850708,
    "lon": 18.518800735473633,
    "elevation": 1208
  },
  {
    "icao": "FEFT",
    "iata": "BBT",
    "name": "Berbérati Airport",
    "city": "Berbérati",
    "country": "CF",
    "lat": 4.2215800285339355,
    "lon": 15.786399841308594,
    "elevation": 1929
  },
  {
    "icao": "FGBT",
    "iata": "BSG",
    "name": "Bata Airport",
    "city": "Bata",
    "country": "GQ",
    "lat": 1.90547,
    "lon": 9.80568,
    "elevation": 13
  },
  {
    "icao": "FGSL",
    "iata": "SSG",
    "name": "Malabo Airport",
    "city": "Malabo",
    "country": "GQ",
    "lat": 3.755270004272461,
    "lon": 8.708720207214355,
    "elevation": 76
  },
  {
    "icao": "FHAW",
    "iata": "ASI",
    "name": "RAF Ascension Island",
    "city": "Cat Hill",
    "country": "SH",
    "lat": -7.9696,
    "lon": -14.3937,
    "elevation": 278
  },
  {
    "icao": "FIMP",
    "iata": "MRU",
    "name": "Sir Seewoosagur Ramgoolam International Airport",
    "city": "Plaine Magnien",
    "country": "MU",
    "lat": -20.430201,
    "lon": 57.683601,
    "elevation": 186
  },
  {
    "icao": "FIMR",
    "iata": "RRG",
    "name": "Sir Charles Gaetan Duval Airport",
    "city": "Port Mathurin",
    "country": "MU",
    "lat": -19.7577,
    "lon": 63.361,
    "elevation": 95
  },
  {
    "icao": "FJDG",
    "iata": "NKW",
    "name": "Diego Garcia Naval Support Facility",
    "city": "Diego Garcia",
    "country": "IO",
    "lat": -7.31327,
    "lon": 72.411102,
    "elevation": 9
  },
  {
    "icao": "FKKC",
    "iata": "TKC",
    "name": "Tiko Airport",
    "city": "Tiko",
    "country": "CM",
    "lat": 4.08919000626,
    "lon": 9.360529899600001,
    "elevation": 151
  },
  {
    "icao": "FKKD",
    "iata": "DLA",
    "name": "Douala International Airport",
    "city": "Douala",
    "country": "CM",
    "lat": 4.0060801506,
    "lon": 9.719479560849999,
    "elevation": 33
  },
  {
    "icao": "FKKL",
    "iata": "MVR",
    "name": "Salak Airport",
    "city": "Maroua",
    "country": "CM",
    "lat": 10.451399803161621,
    "lon": 14.257399559020996,
    "elevation": 1390
  },
  {
    "icao": "FKKM",
    "iata": "FOM",
    "name": "Foumban Nkounja Airport",
    "city": "Foumban",
    "country": "CM",
    "lat": 5.63692,
    "lon": 10.7508,
    "elevation": 3963
  },
  {
    "icao": "FKKN",
    "iata": "NGE",
    "name": "N'Gaoundéré Airport",
    "city": "N'Gaoundéré",
    "country": "CM",
    "lat": 7.3570098876953125,
    "lon": 13.559200286865234,
    "elevation": 3655
  },
  {
    "icao": "FKKR",
    "iata": "GOU",
    "name": "Garoua International Airport",
    "city": "Garoua",
    "country": "CM",
    "lat": 9.33588981628418,
    "lon": 13.370100021362305,
    "elevation": 794
  },
  {
    "icao": "FKKU",
    "iata": "BFX",
    "name": "Bafoussam Airport",
    "city": "Bafoussam",
    "country": "CM",
    "lat": 5.536920070650001,
    "lon": 10.354599952700001,
    "elevation": 4347
  },
  {
    "icao": "FKKV",
    "iata": "BPC",
    "name": "Bamenda Airport",
    "city": "Bamenda",
    "country": "CM",
    "lat": 6.03924,
    "lon": 10.1226,
    "elevation": 4065
  },
  {
    "icao": "FKKY",
    "iata": "YAO",
    "name": "Yaoundé Airport",
    "city": "Yaoundé",
    "country": "CM",
    "lat": 3.83604,
    "lon": 11.5235,
    "elevation": 2464
  },
  {
    "icao": "FKYS",
    "iata": "NSI",
    "name": "Yaoundé Nsimalen International Airport",
    "city": "Yaoundé",
    "country": "CM",
    "lat": 3.72256,
    "lon": 11.5533,
    "elevation": 2278
  },
  {
    "icao": "FLKE",
    "iata": "CGJ",
    "name": "Kasompe Airport",
    "city": "Chingola",
    "country": "ZM",
    "lat": -12.5728,
    "lon": 27.8939,
    "elevation": 4636
  },
  {
    "icao": "FLHN",
    "iata": "LVI",
    "name": "Harry Mwanga Nkumbula International Airport",
    "city": "Livingstone",
    "country": "ZM",
    "lat": -17.8218,
    "lon": 25.822701,
    "elevation": 3302
  },
  {
    "icao": "FLKK",
    "iata": "LUN",
    "name": "Kenneth Kaunda International Airport",
    "city": "Lusaka",
    "country": "ZM",
    "lat": -15.330833,
    "lon": 28.452722,
    "elevation": 3779
  },
  {
    "icao": "FLMF",
    "iata": "MFU",
    "name": "Mfuwe Airport",
    "city": "Mfuwe",
    "country": "ZM",
    "lat": -13.258899688720703,
    "lon": 31.936599731445312,
    "elevation": 1853
  },
  {
    "icao": "FLMG",
    "iata": "MNR",
    "name": "Mongu Airport",
    "city": "Mongu",
    "country": "ZM",
    "lat": -15.2545,
    "lon": 23.1623,
    "elevation": 3488
  },
  {
    "icao": "FLSK",
    "iata": "NLA",
    "name": "Simon Mwansa Kapwepwe International Airport",
    "city": "Ndola",
    "country": "ZM",
    "lat": -12.961667,
    "lon": 28.516667,
    "elevation": 4308
  },
  {
    "icao": "FLSO",
    "iata": "KIW",
    "name": "Southdowns Airport",
    "city": "Kitwe",
    "country": "ZM",
    "lat": -12.9005,
    "lon": 28.1499,
    "elevation": 4145
  },
  {
    "icao": "FMCH",
    "iata": "HAH",
    "name": "Prince Said Ibrahim International Airport",
    "city": "Moroni",
    "country": "KM",
    "lat": -11.5337,
    "lon": 43.2719,
    "elevation": 93
  },
  {
    "icao": "FMCI",
    "iata": "NWA",
    "name": "Mohéli Bandar Es Eslam Airport",
    "city": "Fomboni",
    "country": "KM",
    "lat": -12.2981,
    "lon": 43.766399,
    "elevation": 46
  },
  {
    "icao": "FMCV",
    "iata": "AJN",
    "name": "Ouani Airport",
    "city": "Ouani",
    "country": "KM",
    "lat": -12.131047,
    "lon": 44.430044,
    "elevation": 62
  },
  {
    "icao": "FMCZ",
    "iata": "DZA",
    "name": "Dzaoudzi Pamandzi International Airport",
    "city": "Dzaoudzi",
    "country": "YT",
    "lat": -12.809319,
    "lon": 45.281815,
    "elevation": 23
  },
  {
    "icao": "FMEE",
    "iata": "RUN",
    "name": "Roland Garros Airport",
    "city": "Sainte-Marie",
    "country": "RE",
    "lat": -20.890087,
    "lon": 55.518894,
    "elevation": 66
  },
  {
    "icao": "FMEP",
    "iata": "ZSE",
    "name": "Pierrefonds Airport",
    "city": "Saint-Pierre",
    "country": "RE",
    "lat": -21.319362,
    "lon": 55.422506,
    "elevation": 59
  },
  {
    "icao": "FMMI",
    "iata": "TNR",
    "name": "Ivato Airport",
    "city": "Antananarivo",
    "country": "MG",
    "lat": -18.7969,
    "lon": 47.478802,
    "elevation": 4198
  },
  {
    "icao": "FMMN",
    "iata": "ZVA",
    "name": "Miandrivazo Airport",
    "city": "Miandrivazo",
    "country": "MG",
    "lat": -19.562799,
    "lon": 45.450802,
    "elevation": 203
  },
  {
    "icao": "FMMS",
    "iata": "SMS",
    "name": "Sainte Marie Airport",
    "city": "Vohilava",
    "country": "MG",
    "lat": -17.093901,
    "lon": 49.8158,
    "elevation": 7
  },
  {
    "icao": "FMMT",
    "iata": "TMM",
    "name": "Toamasina Ambalamanasy Airport",
    "city": "Toamasina",
    "country": "MG",
    "lat": -18.109501,
    "lon": 49.392502,
    "elevation": 22
  },
  {
    "icao": "FMMV",
    "iata": "MOQ",
    "name": "Morondava Airport",
    "city": "Morondava",
    "country": "MG",
    "lat": -20.2847,
    "lon": 44.3176,
    "elevation": 30
  },
  {
    "icao": "FMNA",
    "iata": "DIE",
    "name": "Arrachart Airport",
    "city": "Antisiranana",
    "country": "MG",
    "lat": -12.3494,
    "lon": 49.291698,
    "elevation": 374
  },
  {
    "icao": "FMNC",
    "iata": "WMR",
    "name": "Mananara Nord Airport",
    "city": "Mananara Nord",
    "country": "MG",
    "lat": -16.1639,
    "lon": 49.7738,
    "elevation": 9
  },
  {
    "icao": "FMND",
    "iata": "ZWA",
    "name": "Andapa Airport",
    "city": "",
    "country": "MG",
    "lat": -14.651700019836426,
    "lon": 49.620601654052734,
    "elevation": 1552
  },
  {
    "icao": "FMNH",
    "iata": "ANM",
    "name": "Antsirabe Airport",
    "city": "Antsirabe",
    "country": "MG",
    "lat": -14.9994,
    "lon": 50.320202,
    "elevation": 20
  },
  {
    "icao": "FMNL",
    "iata": "HVA",
    "name": "Analalava Airport",
    "city": "Analalava",
    "country": "MG",
    "lat": -14.629514,
    "lon": 47.763555,
    "elevation": 345
  },
  {
    "icao": "FMNM",
    "iata": "MJN",
    "name": "Amborovy Airport",
    "city": "Mahajanga",
    "country": "MG",
    "lat": -15.666842,
    "lon": 46.351233,
    "elevation": 87
  },
  {
    "icao": "FMNN",
    "iata": "NOS",
    "name": "Fascene Airport",
    "city": "Nosy Be",
    "country": "MG",
    "lat": -13.3121,
    "lon": 48.3148,
    "elevation": 36
  },
  {
    "icao": "FMNQ",
    "iata": "BPY",
    "name": "Besalampy Airport",
    "city": "Besalampy",
    "country": "MG",
    "lat": -16.74453,
    "lon": 44.482484,
    "elevation": 125
  },
  {
    "icao": "FMNR",
    "iata": "WMN",
    "name": "Maroantsetra Airport",
    "city": "Maroantsetra",
    "country": "MG",
    "lat": -15.437742,
    "lon": 49.689081,
    "elevation": 9
  },
  {
    "icao": "FMNS",
    "iata": "SVB",
    "name": "Sambava Airport",
    "city": "Sambava",
    "country": "MG",
    "lat": -14.2786,
    "lon": 50.174702,
    "elevation": 20
  },
  {
    "icao": "FMNV",
    "iata": "VOH",
    "name": "Vohemar Airport",
    "city": "Vohemar",
    "country": "MG",
    "lat": -13.3758,
    "lon": 50.0028,
    "elevation": 19
  },
  {
    "icao": "FMNW",
    "iata": "WAI",
    "name": "Ambalabe Airport",
    "city": "Antsohihy",
    "country": "MG",
    "lat": -14.8988,
    "lon": 47.9939,
    "elevation": 92
  },
  {
    "icao": "FMSD",
    "iata": "FTU",
    "name": "Tôlanaro Airport",
    "city": "Tôlanaro",
    "country": "MG",
    "lat": -25.038099,
    "lon": 46.9561,
    "elevation": 29
  },
  {
    "icao": "FMSF",
    "iata": "WFI",
    "name": "Fianarantsoa Airport",
    "city": "Fianarantsoa",
    "country": "MG",
    "lat": -21.441601,
    "lon": 47.111698,
    "elevation": 3658
  },
  {
    "icao": "FMSK",
    "iata": "WVK",
    "name": "Manakara Airport",
    "city": "Manakara",
    "country": "MG",
    "lat": -22.119699,
    "lon": 48.021702,
    "elevation": 33
  },
  {
    "icao": "FMSM",
    "iata": "MNJ",
    "name": "Mananjary Airport",
    "city": "Mananjary",
    "country": "MG",
    "lat": -21.201799,
    "lon": 48.358299,
    "elevation": 20
  },
  {
    "icao": "FMSR",
    "iata": "MXM",
    "name": "Morombe Airport",
    "city": "Morombe",
    "country": "MG",
    "lat": -21.753837,
    "lon": 43.374753,
    "elevation": 16
  },
  {
    "icao": "FMST",
    "iata": "TLE",
    "name": "Toliara Airport",
    "city": "Toliara",
    "country": "MG",
    "lat": -23.3834,
    "lon": 43.7285,
    "elevation": 29
  },
  {
    "icao": "FNBC",
    "iata": "SSY",
    "name": "Mbanza Congo Airport",
    "city": "Mbanza Congo",
    "country": "AO",
    "lat": -6.269899845123291,
    "lon": 14.246999740600586,
    "elevation": 1860
  },
  {
    "icao": "FNBG",
    "iata": "BUG",
    "name": "Benguela Airport",
    "city": "Benguela",
    "country": "AO",
    "lat": -12.609,
    "lon": 13.4037,
    "elevation": 118
  },
  {
    "icao": "FNBJ",
    "iata": "NBJ",
    "name": "Dr. Antonio Agostinho Neto International Airport",
    "city": "Luanda (Ícolo e Bengo)",
    "country": "AO",
    "lat": -9.050734,
    "lon": 13.499078,
    "elevation": 550
  },
  {
    "icao": "FNCA",
    "iata": "CAB",
    "name": "Cabinda Airport",
    "city": "Cabinda",
    "country": "AO",
    "lat": -5.59699010848999,
    "lon": 12.188400268554688,
    "elevation": 66
  },
  {
    "icao": "FNCT",
    "iata": "CBT",
    "name": "Catumbela Airport",
    "city": "Catumbela",
    "country": "AO",
    "lat": -12.4792,
    "lon": 13.4869,
    "elevation": 23
  },
  {
    "icao": "FNDU",
    "iata": "DUE",
    "name": "Dundo Airport",
    "city": "Chitato",
    "country": "AO",
    "lat": -7.400889873504639,
    "lon": 20.818500518798828,
    "elevation": 2451
  },
  {
    "icao": "FNGI",
    "iata": "VPE",
    "name": "Ngjiva Pereira Airport",
    "city": "Ngiva",
    "country": "AO",
    "lat": -17.0435009003,
    "lon": 15.683799743700002,
    "elevation": 3566
  },
  {
    "icao": "FNHU",
    "iata": "NOV",
    "name": "Albano Machado Airport",
    "city": "Huambo",
    "country": "AO",
    "lat": -12.8089,
    "lon": 15.7605,
    "elevation": 5587
  },
  {
    "icao": "FNKU",
    "iata": "SVP",
    "name": "Kuito Airport",
    "city": "Kuito",
    "country": "AO",
    "lat": -12.404600143433,
    "lon": 16.947399139404,
    "elevation": 5618
  },
  {
    "icao": "FNLU",
    "iata": "LAD",
    "name": "Quatro de Fevereiro International Airport",
    "city": "Luanda",
    "country": "AO",
    "lat": -8.85837,
    "lon": 13.2312,
    "elevation": 243
  },
  {
    "icao": "FNMA",
    "iata": "MEG",
    "name": "Malanje Airport",
    "city": "Malanje",
    "country": "AO",
    "lat": -9.525090217590332,
    "lon": 16.312400817871094,
    "elevation": 3868
  },
  {
    "icao": "FNME",
    "iata": "SPP",
    "name": "Menongue Airport",
    "city": "Menongue",
    "country": "AO",
    "lat": -14.657600402832031,
    "lon": 17.71980094909668,
    "elevation": 4469
  },
  {
    "icao": "FNMO",
    "iata": "MSZ",
    "name": "Welwitschia Mirabilis International Airport",
    "city": "Moçâmedes",
    "country": "AO",
    "lat": -15.2612,
    "lon": 12.1468,
    "elevation": 210
  },
  {
    "icao": "FNNG",
    "iata": "GXG",
    "name": "Negage Airport",
    "city": "Negage",
    "country": "AO",
    "lat": -7.754509925842285,
    "lon": 15.287699699401855,
    "elevation": 4105
  },
  {
    "icao": "FNPA",
    "iata": "PBN",
    "name": "Porto Amboim Airport",
    "city": "Port Amboim",
    "country": "AO",
    "lat": -10.722,
    "lon": 13.7655,
    "elevation": 16
  },
  {
    "icao": "FNSA",
    "iata": "VHC",
    "name": "Saurimo Airport",
    "city": "Saurimo",
    "country": "AO",
    "lat": -9.68907,
    "lon": 20.4319,
    "elevation": 3584
  },
  {
    "icao": "FNSO",
    "iata": "SZA",
    "name": "Soyo Airport",
    "city": "Soyo",
    "country": "AO",
    "lat": -6.141089916229248,
    "lon": 12.371800422668457,
    "elevation": 15
  },
  {
    "icao": "FNSU",
    "iata": "NDD",
    "name": "Sumbe Airport",
    "city": "Sumbe",
    "country": "AO",
    "lat": -11.1679,
    "lon": 13.8475,
    "elevation": 36
  },
  {
    "icao": "FNUB",
    "iata": "SDD",
    "name": "Lubango Airport",
    "city": "Lubango",
    "country": "AO",
    "lat": -14.924699783325195,
    "lon": 13.574999809265137,
    "elevation": 5778
  },
  {
    "icao": "FNUE",
    "iata": "LUO",
    "name": "Luena Airport",
    "city": "Luena",
    "country": "AO",
    "lat": -11.7681,
    "lon": 19.897699,
    "elevation": 4360
  },
  {
    "icao": "FNUG",
    "iata": "UGO",
    "name": "Uige Airport",
    "city": "Uige",
    "country": "AO",
    "lat": -7.60307,
    "lon": 15.0278,
    "elevation": 2720
  },
  {
    "icao": "FNXA",
    "iata": "XGN",
    "name": "Xangongo Airport",
    "city": "Xangongo",
    "country": "AO",
    "lat": -16.755399703979492,
    "lon": 14.965299606323242,
    "elevation": 3635
  },
  {
    "icao": "FOGK",
    "iata": "KOU",
    "name": "Koulamoutou Mabimbi Airport",
    "city": "Koulamoutou",
    "country": "GA",
    "lat": -1.18461,
    "lon": 12.4413,
    "elevation": 1070
  },
  {
    "icao": "FOGM",
    "iata": "MJL",
    "name": "Mouilla Ville Airport",
    "city": "Mouila",
    "country": "GA",
    "lat": -1.84514,
    "lon": 11.0567,
    "elevation": 295
  },
  {
    "icao": "FOGO",
    "iata": "OYE",
    "name": "Oyem Airport",
    "city": "Oyem",
    "country": "GA",
    "lat": 1.5431100130081177,
    "lon": 11.581399917602539,
    "elevation": 2158
  },
  {
    "icao": "FOGQ",
    "iata": "OKN",
    "name": "Okondja Airport",
    "city": "Okondja",
    "country": "GA",
    "lat": -0.665214,
    "lon": 13.6731,
    "elevation": 1325
  },
  {
    "icao": "FOGR",
    "iata": "LBQ",
    "name": "Lambarene Airport",
    "city": "Lambarene",
    "country": "GA",
    "lat": -0.704389,
    "lon": 10.2457,
    "elevation": 82
  },
  {
    "icao": "FOOB",
    "iata": "BMM",
    "name": "Bitam Airport",
    "city": "Bitam",
    "country": "GA",
    "lat": 2.07564,
    "lon": 11.4932,
    "elevation": 1969
  },
  {
    "icao": "FOOG",
    "iata": "POG",
    "name": "Port Gentil Airport",
    "city": "Port Gentil",
    "country": "GA",
    "lat": -0.7117390036582947,
    "lon": 8.754380226135254,
    "elevation": 13
  },
  {
    "icao": "FOOH",
    "iata": "OMB",
    "name": "Omboue Hospital Airport",
    "city": "Omboue",
    "country": "GA",
    "lat": -1.57473,
    "lon": 9.26269,
    "elevation": 33
  },
  {
    "icao": "FOOK",
    "iata": "MKU",
    "name": "Makokou Airport",
    "city": "Makokou",
    "country": "GA",
    "lat": 0.5792109966278076,
    "lon": 12.890899658203125,
    "elevation": 1726
  },
  {
    "icao": "FOOL",
    "iata": "LBV",
    "name": "Libreville Leon M'ba International Airport",
    "city": "Libreville",
    "country": "GA",
    "lat": 0.458600014448,
    "lon": 9.412280082699999,
    "elevation": 39
  },
  {
    "icao": "FOON",
    "iata": "MVB",
    "name": "M'Vengue El Hadj Omar Bongo Ondimba International Airport",
    "city": "Franceville",
    "country": "GA",
    "lat": -1.6561599969863892,
    "lon": 13.437999725341797,
    "elevation": 1450
  },
  {
    "icao": "FPPR",
    "iata": "PCP",
    "name": "Principe Airport",
    "city": "São Tomé & Príncipe",
    "country": "ST",
    "lat": 1.66294,
    "lon": 7.41174,
    "elevation": 591
  },
  {
    "icao": "FPST",
    "iata": "TMS",
    "name": "São Tomé International Airport",
    "city": "São Tomé",
    "country": "ST",
    "lat": 0.378175,
    "lon": 6.71215,
    "elevation": 33
  },
  {
    "icao": "FQBR",
    "iata": "BEW",
    "name": "Beira Airport",
    "city": "Beira",
    "country": "MZ",
    "lat": -19.7964,
    "lon": 34.9076,
    "elevation": 33
  },
  {
    "icao": "FQCH",
    "iata": "VPY",
    "name": "Chimoio Airport",
    "city": "Chimoio",
    "country": "MZ",
    "lat": -19.15130043029785,
    "lon": 33.42900085449219,
    "elevation": 2287
  },
  {
    "icao": "FQIN",
    "iata": "INH",
    "name": "Inhambane Airport",
    "city": "Inhambane",
    "country": "MZ",
    "lat": -23.8764,
    "lon": 35.408501,
    "elevation": 30
  },
  {
    "icao": "FQLC",
    "iata": "VXC",
    "name": "Lichinga Airport",
    "city": "Lichinga",
    "country": "MZ",
    "lat": -13.274,
    "lon": 35.2663,
    "elevation": 4505
  },
  {
    "icao": "FQMA",
    "iata": "MPM",
    "name": "Maputo Airport",
    "city": "Maputo",
    "country": "MZ",
    "lat": -25.920799,
    "lon": 32.572601,
    "elevation": 145
  },
  {
    "icao": "FQMD",
    "iata": "MUD",
    "name": "Mueda Airport",
    "city": "Mueda",
    "country": "MZ",
    "lat": -11.6729,
    "lon": 39.563099,
    "elevation": 2789
  },
  {
    "icao": "FQMP",
    "iata": "MZB",
    "name": "Mocímboa da Praia Airport",
    "city": "Mocímboa da Praia",
    "country": "MZ",
    "lat": -11.3618,
    "lon": 40.3549,
    "elevation": 89
  },
  {
    "icao": "FQNP",
    "iata": "APL",
    "name": "Nampula Airport",
    "city": "Nampula",
    "country": "MZ",
    "lat": -15.105600357055664,
    "lon": 39.28179931640625,
    "elevation": 1444
  },
  {
    "icao": "FQPB",
    "iata": "POL",
    "name": "Pemba Airport",
    "city": "Pemba",
    "country": "MZ",
    "lat": -12.993302,
    "lon": 40.524867,
    "elevation": 331
  },
  {
    "icao": "FQQL",
    "iata": "UEL",
    "name": "Quelimane Airport",
    "city": "Quelimane",
    "country": "MZ",
    "lat": -17.855499267578125,
    "lon": 36.86909866333008,
    "elevation": 36
  },
  {
    "icao": "FQTT",
    "iata": "TET",
    "name": "Chingozi Airport",
    "city": "Tete",
    "country": "MZ",
    "lat": -16.104799270629883,
    "lon": 33.640201568603516,
    "elevation": 525
  },
  {
    "icao": "FQVL",
    "iata": "VNX",
    "name": "Vilankulo Airport",
    "city": "Vilanculo",
    "country": "MZ",
    "lat": -22.018400192260742,
    "lon": 35.31330108642578,
    "elevation": 46
  },
  {
    "icao": "FSIA",
    "iata": "SEZ",
    "name": "Seychelles International Airport",
    "city": "Mahe Island",
    "country": "SC",
    "lat": -4.67434,
    "lon": 55.521801,
    "elevation": 10
  },
  {
    "icao": "FSPP",
    "iata": "PRI",
    "name": "Praslin Island Airport",
    "city": "Praslin Island",
    "country": "SC",
    "lat": -4.319256,
    "lon": 55.691561,
    "elevation": 10
  },
  {
    "icao": "FTTC",
    "iata": "AEH",
    "name": "Abeche Airport",
    "city": "Abeche",
    "country": "TD",
    "lat": 13.847,
    "lon": 20.844299,
    "elevation": 1788
  },
  {
    "icao": "FTTD",
    "iata": "MQQ",
    "name": "Moundou Airport",
    "city": "Moundou",
    "country": "TD",
    "lat": 8.628503,
    "lon": 16.074241,
    "elevation": 1407
  },
  {
    "icao": "FTTJ",
    "iata": "NDJ",
    "name": "N'Djamena International Airport",
    "city": "N'Djamena",
    "country": "TD",
    "lat": 12.1337,
    "lon": 15.034,
    "elevation": 968
  },
  {
    "icao": "FTTY",
    "iata": "FYT",
    "name": "Faya-Largeau Airport",
    "city": "Faya-Largeau",
    "country": "TD",
    "lat": 17.917101,
    "lon": 19.111099,
    "elevation": 771
  },
  {
    "icao": "FVJN",
    "iata": "BUQ",
    "name": "Joshua Mqabuko Nkomo International Airport",
    "city": "Bulawayo",
    "country": "ZW",
    "lat": -20.021254,
    "lon": 28.626296,
    "elevation": 4359
  },
  {
    "icao": "FVCZ",
    "iata": "BFO",
    "name": "Buffalo Range Airport",
    "city": "Chiredzi",
    "country": "ZW",
    "lat": -21.008101,
    "lon": 31.5786,
    "elevation": 1421
  },
  {
    "icao": "FVFA",
    "iata": "VFA",
    "name": "Victoria Falls International Airport",
    "city": "Victoria Falls",
    "country": "ZW",
    "lat": -18.09589958190918,
    "lon": 25.839000701904297,
    "elevation": 3490
  },
  {
    "icao": "FVRG",
    "iata": "HRE",
    "name": "Robert Gabriel Mugabe International Airport",
    "city": "Harare",
    "country": "ZW",
    "lat": -17.931801,
    "lon": 31.0928,
    "elevation": 4887
  },
  {
    "icao": "FVKB",
    "iata": "KAB",
    "name": "Kariba International Airport",
    "city": "Kariba",
    "country": "ZW",
    "lat": -16.5198,
    "lon": 28.885,
    "elevation": 1706
  },
  {
    "icao": "FVMV",
    "iata": "MVZ",
    "name": "Masvingo International Airport",
    "city": "Masvingo",
    "country": "ZW",
    "lat": -20.0553,
    "lon": 30.8591,
    "elevation": 3595
  },
  {
    "icao": "FVTL",
    "iata": "GWE",
    "name": "Gweru - Thornhill Air Base",
    "city": "Gweru",
    "country": "ZW",
    "lat": -19.436718,
    "lon": 29.861945,
    "elevation": 4680
  },
  {
    "icao": "FVWN",
    "iata": "HWN",
    "name": "Hwange National Park Airport",
    "city": "Gwayi River Farms",
    "country": "ZW",
    "lat": -18.6299,
    "lon": 27.021,
    "elevation": 3543
  },
  {
    "icao": "FWCL",
    "iata": "BLZ",
    "name": "Chileka International Airport",
    "city": "Blantyre",
    "country": "MW",
    "lat": -15.679100036621094,
    "lon": 34.9739990234375,
    "elevation": 2555
  },
  {
    "icao": "FWDW",
    "iata": "DWA",
    "name": "Dwangwa Airport",
    "city": "Dwangwa",
    "country": "MW",
    "lat": -12.517527,
    "lon": 34.131877,
    "elevation": 1605
  },
  {
    "icao": "FWKA",
    "iata": "KGJ",
    "name": "Karonga Airport",
    "city": "Karonga",
    "country": "MW",
    "lat": -9.953571,
    "lon": 33.893264,
    "elevation": 1765
  },
  {
    "icao": "FWKI",
    "iata": "LLW",
    "name": "Kamuzu International Airport",
    "city": "Lumbadzi",
    "country": "MW",
    "lat": -13.7894,
    "lon": 33.780998,
    "elevation": 4035
  },
  {
    "icao": "FWUU",
    "iata": "ZZU",
    "name": "Mzuzu Airport",
    "city": "Mzuzu",
    "country": "MW",
    "lat": -11.4447,
    "lon": 34.011799,
    "elevation": 4115
  },
  {
    "icao": "FXMM",
    "iata": "MSU",
    "name": "Moshoeshoe I International Airport",
    "city": "Mazenod",
    "country": "LS",
    "lat": -29.462299,
    "lon": 27.5525,
    "elevation": 5348
  },
  {
    "icao": "FYAR",
    "iata": "ADI",
    "name": "Arandis Airport",
    "city": "Arandis",
    "country": "NA",
    "lat": -22.461875,
    "lon": 14.979322,
    "elevation": 1905
  },
  {
    "icao": "FYGF",
    "iata": "GFY",
    "name": "Grootfontein Airport",
    "city": "Grootfontein",
    "country": "NA",
    "lat": -19.6022,
    "lon": 18.1227,
    "elevation": 4636
  },
  {
    "icao": "FYKM",
    "iata": "MPA",
    "name": "Katima Mulilo Airport",
    "city": "Mpacha",
    "country": "NA",
    "lat": -17.634258,
    "lon": 24.176688,
    "elevation": 3144
  },
  {
    "icao": "FYKT",
    "iata": "KMP",
    "name": "Keetmanshoop Airport",
    "city": "Keetmanshoop",
    "country": "NA",
    "lat": -26.539801,
    "lon": 18.111401,
    "elevation": 3506
  },
  {
    "icao": "FYLZ",
    "iata": "LUD",
    "name": "Luderitz Airport",
    "city": "Luderitz",
    "country": "NA",
    "lat": -26.687400817871094,
    "lon": 15.242899894714355,
    "elevation": 457
  },
  {
    "icao": "FYOA",
    "iata": "OND",
    "name": "Ondangwa Airport",
    "city": "Ondangwa",
    "country": "NA",
    "lat": -17.878201,
    "lon": 15.9526,
    "elevation": 3599
  },
  {
    "icao": "FYOG",
    "iata": "OMD",
    "name": "Oranjemund Airport",
    "city": "Oranjemund",
    "country": "NA",
    "lat": -28.5847,
    "lon": 16.446699,
    "elevation": 14
  },
  {
    "icao": "FYRU",
    "iata": "NDU",
    "name": "Rundu Airport",
    "city": "Rundu",
    "country": "NA",
    "lat": -17.956499099731,
    "lon": 19.719400405884,
    "elevation": 3627
  },
  {
    "icao": "FYTM",
    "iata": "TSB",
    "name": "Tsumeb Airport",
    "city": "Tsumeb",
    "country": "NA",
    "lat": -19.26189994812,
    "lon": 17.732500076294,
    "elevation": 4353
  },
  {
    "icao": "FYWB",
    "iata": "WVB",
    "name": "Walvis Bay Airport",
    "city": "Rooikop",
    "country": "NA",
    "lat": -22.979332,
    "lon": 14.647102,
    "elevation": 299
  },
  {
    "icao": "FYWE",
    "iata": "ERS",
    "name": "Eros Airport",
    "city": "Windhoek",
    "country": "NA",
    "lat": -22.612199783325195,
    "lon": 17.080400466918945,
    "elevation": 5575
  },
  {
    "icao": "FYWH",
    "iata": "WDH",
    "name": "Hosea Kutako International Airport",
    "city": "Windhoek",
    "country": "NA",
    "lat": -22.4799,
    "lon": 17.4709,
    "elevation": 5640
  },
  {
    "icao": "FZAA",
    "iata": "FIH",
    "name": "Ndjili International Airport",
    "city": "Kinshasa",
    "country": "CD",
    "lat": -4.38575,
    "lon": 15.4446,
    "elevation": 1027
  },
  {
    "icao": "FZAB",
    "iata": "NLO",
    "name": "Ndolo Airport",
    "city": "N'dolo",
    "country": "CD",
    "lat": -4.32666015625,
    "lon": 15.327500343323,
    "elevation": 915
  },
  {
    "icao": "FZBO",
    "iata": "FDU",
    "name": "Bandundu Airport",
    "city": "Bandundu",
    "country": "CD",
    "lat": -3.31132,
    "lon": 17.381701,
    "elevation": 1063
  },
  {
    "icao": "FZCA",
    "iata": "KKW",
    "name": "Kikwit Airport",
    "city": "Kikwit",
    "country": "CD",
    "lat": -5.03577,
    "lon": 18.785601,
    "elevation": 1572
  },
  {
    "icao": "FZEA",
    "iata": "MDK",
    "name": "Mbandaka Airport",
    "city": "Mbandaka",
    "country": "CD",
    "lat": 0.0226000007242,
    "lon": 18.2887001038,
    "elevation": 1040
  },
  {
    "icao": "FZFD",
    "iata": "BDT",
    "name": "Gbadolite Airport",
    "city": "Gbadolite",
    "country": "CD",
    "lat": 4.252745,
    "lon": 20.975271,
    "elevation": 1509
  },
  {
    "icao": "FZFK",
    "iata": "GMA",
    "name": "Gemena Airport",
    "city": "Gemena",
    "country": "CD",
    "lat": 3.23537,
    "lon": 19.771299,
    "elevation": 1378
  },
  {
    "icao": "FZGA",
    "iata": "LIQ",
    "name": "Lisala Airport",
    "city": "Lisala",
    "country": "CD",
    "lat": 2.17066,
    "lon": 21.496901,
    "elevation": 1509
  },
  {
    "icao": "FZIC",
    "iata": "FKI",
    "name": "Bangoka International Airport",
    "city": "Kisangani",
    "country": "CD",
    "lat": 0.481638997793,
    "lon": 25.3379993439,
    "elevation": 1417
  },
  {
    "icao": "FZJH",
    "iata": "IRP",
    "name": "Matari Airport",
    "city": "Isiro",
    "country": "CD",
    "lat": 2.82761,
    "lon": 27.588301,
    "elevation": 2438
  },
  {
    "icao": "FZKA",
    "iata": "BUX",
    "name": "Bunia Airport",
    "city": "Bunia",
    "country": "CD",
    "lat": 1.565743,
    "lon": 30.220685,
    "elevation": 4045
  },
  {
    "icao": "FZKJ",
    "iata": "BZU",
    "name": "Buta Zega Airport",
    "city": "Buta",
    "country": "CD",
    "lat": 2.818058,
    "lon": 24.793997,
    "elevation": 1378
  },
  {
    "icao": "FZMA",
    "iata": "BKY",
    "name": "Bukavu Kavumu Airport",
    "city": "Kamakombe",
    "country": "CD",
    "lat": -2.30898,
    "lon": 28.8088,
    "elevation": 5643
  },
  {
    "icao": "FZNA",
    "iata": "GOM",
    "name": "Goma International Airport",
    "city": "Goma",
    "country": "CD",
    "lat": -1.66617,
    "lon": 29.237929,
    "elevation": 5089
  },
  {
    "icao": "FZOA",
    "iata": "KND",
    "name": "Kindu Airport",
    "city": "Kindu",
    "country": "CD",
    "lat": -2.91917991638,
    "lon": 25.915399551399997,
    "elevation": 1630
  },
  {
    "icao": "FZQA",
    "iata": "FBM",
    "name": "Lubumbashi International Airport",
    "city": "Lubumbashi",
    "country": "CD",
    "lat": -11.5913000107,
    "lon": 27.5308990479,
    "elevation": 4295
  },
  {
    "icao": "FZQM",
    "iata": "KWZ",
    "name": "Kolwezi Airport",
    "city": "Kolwezi",
    "country": "CD",
    "lat": -10.7659,
    "lon": 25.505699,
    "elevation": 5007
  },
  {
    "icao": "FZRF",
    "iata": "FMI",
    "name": "Kalemie Airport",
    "city": "Kalemie",
    "country": "CD",
    "lat": -5.87556,
    "lon": 29.25,
    "elevation": 2569
  },
  {
    "icao": "FZUA",
    "iata": "KGA",
    "name": "Kananga Airport",
    "city": "Kananga",
    "country": "CD",
    "lat": -5.90005,
    "lon": 22.4692,
    "elevation": 2139
  },
  {
    "icao": "FZWA",
    "iata": "MJM",
    "name": "Mbuji Mayi Airport",
    "city": "Mbuji Mayi",
    "country": "CD",
    "lat": -6.121240139010001,
    "lon": 23.569000244099996,
    "elevation": 2221
  },
  {
    "icao": "GABS",
    "iata": "BKO",
    "name": "Modibo Keita International Airport",
    "city": "Bamako",
    "country": "ML",
    "lat": 12.5335,
    "lon": -7.94994,
    "elevation": 1247
  },
  {
    "icao": "GAGO",
    "iata": "GAQ",
    "name": "Gao Airport",
    "city": "",
    "country": "ML",
    "lat": 16.2484,
    "lon": -0.005456,
    "elevation": 870
  },
  {
    "icao": "GAKD",
    "iata": "KYS",
    "name": "Kayes Dag Dag Airport",
    "city": "",
    "country": "ML",
    "lat": 14.482473,
    "lon": -11.39971,
    "elevation": 164
  },
  {
    "icao": "GAMB",
    "iata": "MZI",
    "name": "Mopti Ambodédjo International Airport",
    "city": "Sévaré",
    "country": "ML",
    "lat": 14.5128,
    "lon": -4.07956,
    "elevation": 906
  },
  {
    "icao": "GATB",
    "iata": "TOM",
    "name": "Timbuktu Airport",
    "city": "Timbuktu",
    "country": "ML",
    "lat": 16.730499,
    "lon": -3.00758,
    "elevation": 863
  },
  {
    "icao": "GBYD",
    "iata": "BJL",
    "name": "Banjul International Airport",
    "city": "Yundum",
    "country": "GM",
    "lat": 13.338,
    "lon": -16.652201,
    "elevation": 95
  },
  {
    "icao": "GCFV",
    "iata": "FUE",
    "name": "Fuerteventura Airport",
    "city": "El Matorral",
    "country": "ES",
    "lat": 28.4527,
    "lon": -13.8638,
    "elevation": 85
  },
  {
    "icao": "GCHI",
    "iata": "VDE",
    "name": "El Hierro Airport",
    "city": "El Hierro Island",
    "country": "ES",
    "lat": 27.8148,
    "lon": -17.8871,
    "elevation": 103
  },
  {
    "icao": "GCLA",
    "iata": "SPC",
    "name": "La Palma Airport",
    "city": "Sta Cruz de la Palma, La Palma Island",
    "country": "ES",
    "lat": 28.626499,
    "lon": -17.7556,
    "elevation": 107
  },
  {
    "icao": "GCLP",
    "iata": "LPA",
    "name": "Gran Canaria Airport",
    "city": "Gran Canaria Island",
    "country": "ES",
    "lat": 27.9319,
    "lon": -15.3866,
    "elevation": 78
  },
  {
    "icao": "GCRR",
    "iata": "ACE",
    "name": "César Manrique-Lanzarote Airport",
    "city": "San Bartolomé",
    "country": "ES",
    "lat": 28.945499,
    "lon": -13.6052,
    "elevation": 46
  },
  {
    "icao": "GCTS",
    "iata": "TFS",
    "name": "Tenerife Sur Airport",
    "city": "Tenerife",
    "country": "ES",
    "lat": 28.0445,
    "lon": -16.5725,
    "elevation": 209
  },
  {
    "icao": "GCXO",
    "iata": "TFN",
    "name": "Tenerife Norte-Ciudad de La Laguna Airport",
    "city": "Tenerife",
    "country": "ES",
    "lat": 28.4827,
    "lon": -16.341499,
    "elevation": 2076
  },
  {
    "icao": "GEML",
    "iata": "MLN",
    "name": "Melilla Airport",
    "city": "Melilla",
    "country": "ES",
    "lat": 35.2798,
    "lon": -2.95626,
    "elevation": 156
  },
  {
    "icao": "GFBO",
    "iata": "KBS",
    "name": "Bo Airport",
    "city": "Bo",
    "country": "SL",
    "lat": 7.9444,
    "lon": -11.761,
    "elevation": 328
  },
  {
    "icao": "GFKE",
    "iata": "KEN",
    "name": "Kenema Airport",
    "city": "Kenema",
    "country": "SL",
    "lat": 7.896364,
    "lon": -11.174126,
    "elevation": 485
  },
  {
    "icao": "GFLL",
    "iata": "FNA",
    "name": "Lungi International Airport",
    "city": "Freetown (Lungi-Town)",
    "country": "SL",
    "lat": 8.61644,
    "lon": -13.1955,
    "elevation": 84
  },
  {
    "icao": "GFYE",
    "iata": "WYE",
    "name": "Yengema Airport",
    "city": "Yengema",
    "country": "SL",
    "lat": 8.61047,
    "lon": -11.0454,
    "elevation": 1300
  },
  {
    "icao": "GGOV",
    "iata": "OXB",
    "name": "Osvaldo Vieira International Airport",
    "city": "Bissau",
    "country": "GW",
    "lat": 11.894800186157227,
    "lon": -15.65369987487793,
    "elevation": 129
  },
  {
    "icao": "GLMR",
    "iata": "MLW",
    "name": "Spriggs Payne Airport",
    "city": "Monrovia",
    "country": "LR",
    "lat": 6.28906,
    "lon": -10.7587,
    "elevation": 25
  },
  {
    "icao": "GLRB",
    "iata": "ROB",
    "name": "Roberts International Airport",
    "city": "Monrovia",
    "country": "LR",
    "lat": 6.23379,
    "lon": -10.3623,
    "elevation": 31
  },
  {
    "icao": "GMAD",
    "iata": "AGA",
    "name": "Al Massira Airport",
    "city": "Agadir (Temsia)",
    "country": "MA",
    "lat": 30.322478,
    "lon": -9.412003,
    "elevation": 250
  },
  {
    "icao": "GMAT",
    "iata": "TTA",
    "name": "Tan Tan Airport",
    "city": "Tan Tan",
    "country": "MA",
    "lat": 28.448200225830078,
    "lon": -11.161299705505371,
    "elevation": 653
  },
  {
    "icao": "GMAZ",
    "iata": "OZG",
    "name": "Zagora Airport",
    "city": "Zagora",
    "country": "MA",
    "lat": 30.263858,
    "lon": -5.853341,
    "elevation": 2414
  },
  {
    "icao": "GMFB",
    "iata": "UAR",
    "name": "Bouarfa Airport",
    "city": "Bouarfa",
    "country": "MA",
    "lat": 32.514306,
    "lon": -1.983056,
    "elevation": 3630
  },
  {
    "icao": "GMFF",
    "iata": "FEZ",
    "name": "Fes Saïss International Airport",
    "city": "Saïss",
    "country": "MA",
    "lat": 33.927299,
    "lon": -4.97796,
    "elevation": 1900
  },
  {
    "icao": "GMFK",
    "iata": "ERH",
    "name": "Moulay Ali Cherif Airport",
    "city": "Errachidia",
    "country": "MA",
    "lat": 31.9475002289,
    "lon": -4.39833021164,
    "elevation": 3428
  },
  {
    "icao": "GMFM",
    "iata": "MEK",
    "name": "Bassatine Airport",
    "city": "Meknes",
    "country": "MA",
    "lat": 33.879101,
    "lon": -5.51512,
    "elevation": 1890
  },
  {
    "icao": "GMFO",
    "iata": "OUD",
    "name": "Oujda Angads Airport",
    "city": "Ahl Angad",
    "country": "MA",
    "lat": 34.789558,
    "lon": -1.926041,
    "elevation": 1535
  },
  {
    "icao": "GMMA",
    "iata": "SMW",
    "name": "Smara Airport",
    "city": "Smara",
    "country": "EH",
    "lat": 26.731987,
    "lon": -11.683655,
    "elevation": 350
  },
  {
    "icao": "GMME",
    "iata": "RBA",
    "name": "Rabat-Salé Airport",
    "city": "Rabat",
    "country": "MA",
    "lat": 34.051498,
    "lon": -6.75152,
    "elevation": 276
  },
  {
    "icao": "GMMH",
    "iata": "VIL",
    "name": "Dakhla Airport",
    "city": "Dakhla",
    "country": "EH",
    "lat": 23.7183,
    "lon": -15.932,
    "elevation": 36
  },
  {
    "icao": "GMMI",
    "iata": "ESU",
    "name": "Essaouira-Mogador Airport",
    "city": "Essaouira",
    "country": "MA",
    "lat": 31.397499,
    "lon": -9.68167,
    "elevation": 384
  },
  {
    "icao": "GMML",
    "iata": "EUN",
    "name": "Hassan I Airport",
    "city": "El Aaiún",
    "country": "EH",
    "lat": 27.142467,
    "lon": -13.224947,
    "elevation": 207
  },
  {
    "icao": "GMMN",
    "iata": "CMN",
    "name": "Mohammed V International Airport",
    "city": "Casablanca",
    "country": "MA",
    "lat": 33.3675,
    "lon": -7.58997,
    "elevation": 656
  },
  {
    "icao": "GMMW",
    "iata": "NDR",
    "name": "Nador Al Aaroui International Airport",
    "city": "Al Aaroui",
    "country": "MA",
    "lat": 34.9888,
    "lon": -3.02821,
    "elevation": 574
  },
  {
    "icao": "GMMX",
    "iata": "RAK",
    "name": "Menara Airport",
    "city": "Marrakech",
    "country": "MA",
    "lat": 31.606899,
    "lon": -8.0363,
    "elevation": 1545
  },
  {
    "icao": "GMMP",
    "iata": "NNA",
    "name": "Kenitra Air Base",
    "city": "Kenitra",
    "country": "MA",
    "lat": 34.298901,
    "lon": -6.59588,
    "elevation": 16
  },
  {
    "icao": "GMMZ",
    "iata": "OZZ",
    "name": "Ouarzazate Airport",
    "city": "Ouarzazate",
    "country": "MA",
    "lat": 30.9391002655,
    "lon": -6.909430027010001,
    "elevation": 3782
  },
  {
    "icao": "GMTA",
    "iata": "AHU",
    "name": "Cherif Al Idrissi Airport",
    "city": "Al Hoceima",
    "country": "MA",
    "lat": 35.177101,
    "lon": -3.83952,
    "elevation": 95
  },
  {
    "icao": "GMTN",
    "iata": "TTU",
    "name": "Sania Ramel Airport",
    "city": "Tétouan",
    "country": "MA",
    "lat": 35.594299,
    "lon": -5.32002,
    "elevation": 10
  },
  {
    "icao": "GMTT",
    "iata": "TNG",
    "name": "Tangier Ibn Battuta Airport",
    "city": "Tangier",
    "country": "MA",
    "lat": 35.731741,
    "lon": -5.921459,
    "elevation": 62
  },
  {
    "icao": "GOBD",
    "iata": "DSS",
    "name": "Blaise Diagne International Airport",
    "city": "Dakar",
    "country": "SN",
    "lat": 14.670878,
    "lon": -17.072829,
    "elevation": 290
  },
  {
    "icao": "GOGG",
    "iata": "ZIG",
    "name": "Ziguinchor Airport",
    "city": "Ziguinchor",
    "country": "SN",
    "lat": 12.5556,
    "lon": -16.281799,
    "elevation": 75
  },
  {
    "icao": "GOGS",
    "iata": "CSK",
    "name": "Cap Skirring Airport",
    "city": "Cap Skirring",
    "country": "SN",
    "lat": 12.39533,
    "lon": -16.748,
    "elevation": 52
  },
  {
    "icao": "GOOK",
    "iata": "KLC",
    "name": "Kaolack Airport",
    "city": "Kaolack",
    "country": "SN",
    "lat": 14.146900177001953,
    "lon": -16.051300048828125,
    "elevation": 26
  },
  {
    "icao": "GOOY",
    "iata": "DKR",
    "name": "Léopold Sédar Senghor International Airport",
    "city": "Dakar",
    "country": "SN",
    "lat": 14.7397,
    "lon": -17.4902,
    "elevation": 85
  },
  {
    "icao": "GOSM",
    "iata": "MAX",
    "name": "Ouro Sogui Airport",
    "city": "Ouro Sogui",
    "country": "SN",
    "lat": 15.5936,
    "lon": -13.3228,
    "elevation": 85
  },
  {
    "icao": "GOSS",
    "iata": "XLS",
    "name": "Saint Louis Airport",
    "city": "Saint Louis",
    "country": "SN",
    "lat": 16.049814,
    "lon": -16.461039,
    "elevation": 9
  },
  {
    "icao": "GOTB",
    "iata": "BXE",
    "name": "Bakel Airport",
    "city": "Bakel",
    "country": "SN",
    "lat": 14.847299575805664,
    "lon": -12.468299865722656,
    "elevation": 98
  },
  {
    "icao": "GOTK",
    "iata": "KGG",
    "name": "Kédougou Airport",
    "city": "Kédougou",
    "country": "SN",
    "lat": 12.57229995727539,
    "lon": -12.22029972076416,
    "elevation": 584
  },
  {
    "icao": "GOTT",
    "iata": "TUD",
    "name": "Tambacounda Airport",
    "city": "Tambacounda",
    "country": "SN",
    "lat": 13.7368,
    "lon": -13.6531,
    "elevation": 161
  },
  {
    "icao": "GQNO",
    "iata": "NKC",
    "name": "Nouakchott–Oumtounsy International Airport",
    "city": "Nouakchott",
    "country": "MR",
    "lat": 18.31,
    "lon": -15.969722,
    "elevation": 9
  },
  {
    "icao": "GQPA",
    "iata": "ATR",
    "name": "Atar International Airport",
    "city": "Atar",
    "country": "MR",
    "lat": 20.506799697875977,
    "lon": -13.04319953918457,
    "elevation": 734
  },
  {
    "icao": "GQPP",
    "iata": "NDB",
    "name": "Nouadhibou International Airport",
    "city": "Nouadhibou",
    "country": "MR",
    "lat": 20.9330997467041,
    "lon": -17.030000686645508,
    "elevation": 24
  },
  {
    "icao": "GUCY",
    "iata": "CKY",
    "name": "Conakry International Airport",
    "city": "Conakry",
    "country": "GN",
    "lat": 9.57689,
    "lon": -13.612,
    "elevation": 72
  },
  {
    "icao": "GVAC",
    "iata": "SID",
    "name": "Amílcar Cabral International Airport",
    "city": "Espargos",
    "country": "CV",
    "lat": 16.7414,
    "lon": -22.9494,
    "elevation": 177
  },
  {
    "icao": "GVBA",
    "iata": "BVC",
    "name": "Rabil Airport",
    "city": "Rabil",
    "country": "CV",
    "lat": 16.136499404907227,
    "lon": -22.888900756835938,
    "elevation": 69
  },
  {
    "icao": "GVMA",
    "iata": "MMO",
    "name": "Maio Airport",
    "city": "Vila do Maio",
    "country": "CV",
    "lat": 15.155900001525879,
    "lon": -23.213699340820312,
    "elevation": 36
  },
  {
    "icao": "GVNP",
    "iata": "RAI",
    "name": "Nelson Mandela International Airport",
    "city": "Praia",
    "country": "CV",
    "lat": 14.941126,
    "lon": -23.484728,
    "elevation": 230
  },
  {
    "icao": "GVSN",
    "iata": "SNE",
    "name": "Preguiça Airport",
    "city": "Preguiça",
    "country": "CV",
    "lat": 16.588852,
    "lon": -24.284132,
    "elevation": 669
  },
  {
    "icao": "GVSV",
    "iata": "VXE",
    "name": "São Pedro Airport",
    "city": "São Pedro",
    "country": "CV",
    "lat": 16.8332,
    "lon": -25.0553,
    "elevation": 66
  },
  {
    "icao": "HAAB",
    "iata": "ADD",
    "name": "Addis Ababa Bole International Airport",
    "city": "Addis Ababa",
    "country": "ET",
    "lat": 8.97789,
    "lon": 38.799301,
    "elevation": 7630
  },
  {
    "icao": "HAAM",
    "iata": "AMH",
    "name": "Arba Minch Airport",
    "city": "Arba Minch",
    "country": "ET",
    "lat": 6.03939,
    "lon": 37.5905,
    "elevation": 3901
  },
  {
    "icao": "HAAX",
    "iata": "AXU",
    "name": "Axum Airport",
    "city": "Axum",
    "country": "ET",
    "lat": 14.1468,
    "lon": 38.7728,
    "elevation": 6959
  },
  {
    "icao": "HABD",
    "iata": "BJR",
    "name": "Bahir Dar Airport",
    "city": "Bahir Dar",
    "country": "ET",
    "lat": 11.6081,
    "lon": 37.321602,
    "elevation": 5978
  },
  {
    "icao": "HADR",
    "iata": "DIR",
    "name": "Aba Tenna Dejazmach Yilma International Airport",
    "city": "Dire Dawa",
    "country": "ET",
    "lat": 9.624699592590332,
    "lon": 41.85419845581055,
    "elevation": 3827
  },
  {
    "icao": "HAGM",
    "iata": "GMB",
    "name": "Gambela Airport",
    "city": "Gambela",
    "country": "ET",
    "lat": 8.12876,
    "lon": 34.563099,
    "elevation": 1614
  },
  {
    "icao": "HAGN",
    "iata": "GDQ",
    "name": "Gondar Airport",
    "city": "Azezo",
    "country": "ET",
    "lat": 12.5199,
    "lon": 37.433998,
    "elevation": 6449
  },
  {
    "icao": "HAGO",
    "iata": "GDE",
    "name": "Gode Airport",
    "city": "Gode",
    "country": "ET",
    "lat": 5.93513011932,
    "lon": 43.5786018372,
    "elevation": 834
  },
  {
    "icao": "HAHM",
    "iata": "QHR",
    "name": "Harar Meda Airport",
    "city": "Debre Zeyit",
    "country": "ET",
    "lat": 8.7163,
    "lon": 39.0059,
    "elevation": 6201
  },
  {
    "icao": "HAJJ",
    "iata": "JIJ",
    "name": "Wilwal International Airport",
    "city": "Jijiga",
    "country": "ET",
    "lat": 9.3325,
    "lon": 42.9121,
    "elevation": 5954
  },
  {
    "icao": "HAJM",
    "iata": "JIM",
    "name": "Jimma Airport",
    "city": "Jimma",
    "country": "ET",
    "lat": 7.66609001159668,
    "lon": 36.81660079956055,
    "elevation": 5500
  },
  {
    "icao": "HAKD",
    "iata": "ABK",
    "name": "Kebri Dahar Airport",
    "city": "Kebri Dahar",
    "country": "ET",
    "lat": 6.732577,
    "lon": 44.241339,
    "elevation": 1800
  },
  {
    "icao": "HALA",
    "iata": "AWA",
    "name": "Hawassa International Airport",
    "city": "Hawassa",
    "country": "ET",
    "lat": 7.099869,
    "lon": 38.396187,
    "elevation": 5450
  },
  {
    "icao": "HAMK",
    "iata": "MQX",
    "name": "Alula Aba Nega Airport",
    "city": "Mekele",
    "country": "ET",
    "lat": 13.4674,
    "lon": 39.533501,
    "elevation": 7396
  },
  {
    "icao": "HASO",
    "iata": "ASO",
    "name": "Asosa Airport",
    "city": "Asosa",
    "country": "ET",
    "lat": 10.018500328063965,
    "lon": 34.586299896240234,
    "elevation": 5100
  },
  {
    "icao": "HBBA",
    "iata": "BJM",
    "name": "Bujumbura Melchior Ndadaye International Airport",
    "city": "Bujumbura",
    "country": "BI",
    "lat": -3.32402,
    "lon": 29.318501,
    "elevation": 2582
  },
  {
    "icao": "HCMH",
    "iata": "HGA",
    "name": "Egal International Airport",
    "city": "Hargeisa",
    "country": "SO",
    "lat": 9.513207,
    "lon": 44.082389,
    "elevation": 4471
  },
  {
    "icao": "HCMI",
    "iata": "BBO",
    "name": "Berbera Airport",
    "city": "Berbera",
    "country": "SO",
    "lat": 10.385035,
    "lon": 44.936723,
    "elevation": 30
  },
  {
    "icao": "HCMK",
    "iata": "KMU",
    "name": "Kismayo Airport",
    "city": "Kismayo",
    "country": "SO",
    "lat": -0.377353,
    "lon": 42.459202,
    "elevation": 49
  },
  {
    "icao": "HCMM",
    "iata": "MGQ",
    "name": "Aden Adde International Airport",
    "city": "Mogadishu",
    "country": "SO",
    "lat": 2.0144400596618652,
    "lon": 45.3046989440918,
    "elevation": 29
  },
  {
    "icao": "HDAM",
    "iata": "JIB",
    "name": "Djibouti-Ambouli Airport",
    "city": "Djibouti City",
    "country": "DJ",
    "lat": 11.5473,
    "lon": 43.1595,
    "elevation": 49
  },
  {
    "icao": "HE36",
    "iata": "RDL",
    "name": "Bardawil International Airport",
    "city": "El Hassana",
    "country": "EG",
    "lat": 30.410714,
    "lon": 33.15535,
    "elevation": 1060
  },
  {
    "icao": "HEAL",
    "iata": "DBB",
    "name": "El Alamein International Airport",
    "city": "El Alamein",
    "country": "EG",
    "lat": 30.924324,
    "lon": 28.46161,
    "elevation": 154
  },
  {
    "icao": "HEAR",
    "iata": "AAC",
    "name": "El Arish International Airport",
    "city": "El Arish",
    "country": "EG",
    "lat": 31.078565,
    "lon": 33.836791,
    "elevation": 118
  },
  {
    "icao": "HEAT",
    "iata": "ATZ",
    "name": "Asyut International Airport",
    "city": "Asyut",
    "country": "EG",
    "lat": 27.050818,
    "lon": 31.016309,
    "elevation": 748
  },
  {
    "icao": "HEBA",
    "iata": "HBE",
    "name": "Alexandria International Airport",
    "city": "Alexandria",
    "country": "EG",
    "lat": 30.93249,
    "lon": 29.696437,
    "elevation": 171
  },
  {
    "icao": "HEBL",
    "iata": "ABS",
    "name": "Abu Simbel Airport",
    "city": "Abu Simbel",
    "country": "EG",
    "lat": 22.367657,
    "lon": 31.609962,
    "elevation": 614
  },
  {
    "icao": "HECA",
    "iata": "CAI",
    "name": "Cairo International Airport",
    "city": "Cairo",
    "country": "EG",
    "lat": 30.111534,
    "lon": 31.396694,
    "elevation": 322
  },
  {
    "icao": "HECP",
    "iata": "CCE",
    "name": "Capital International Airport",
    "city": "New Cairo",
    "country": "EG",
    "lat": 30.074293,
    "lon": 31.84296,
    "elevation": 761
  },
  {
    "icao": "HEGN",
    "iata": "HRG",
    "name": "Hurghada International Airport",
    "city": "Hurghada",
    "country": "EG",
    "lat": 27.176776,
    "lon": 33.796692,
    "elevation": 32
  },
  {
    "icao": "HEGR",
    "iata": "EGH",
    "name": "El Jora Airport",
    "city": "El Jora",
    "country": "EG",
    "lat": 31.078138,
    "lon": 34.153131,
    "elevation": 331
  },
  {
    "icao": "HELX",
    "iata": "LXR",
    "name": "Luxor International Airport",
    "city": "Luxor",
    "country": "EG",
    "lat": 25.671037,
    "lon": 32.706451,
    "elevation": 276
  },
  {
    "icao": "HEMA",
    "iata": "RMF",
    "name": "Marsa Alam International Airport",
    "city": "Marsa Alam",
    "country": "EG",
    "lat": 25.555548,
    "lon": 34.59245,
    "elevation": 213
  },
  {
    "icao": "HEMM",
    "iata": "MUH",
    "name": "Marsa Matruh International Airport",
    "city": "Marsa Matruh",
    "country": "EG",
    "lat": 31.325464,
    "lon": 27.221716,
    "elevation": 75
  },
  {
    "icao": "HEPS",
    "iata": "PSD",
    "name": "Port Said International Airport",
    "city": "Port Said",
    "country": "EG",
    "lat": 31.279285,
    "lon": 32.240582,
    "elevation": 10
  },
  {
    "icao": "HESC",
    "iata": "SKV",
    "name": "Saint Catherine International Airport",
    "city": "Saint Catherine",
    "country": "EG",
    "lat": 28.684601,
    "lon": 34.062681,
    "elevation": 4402
  },
  {
    "icao": "HESG",
    "iata": "HMB",
    "name": "Sohag International Airport",
    "city": "Suhaj",
    "country": "EG",
    "lat": 26.342515,
    "lon": 31.743017,
    "elevation": 322
  },
  {
    "icao": "HESH",
    "iata": "SSH",
    "name": "Sharm El Sheikh International Airport",
    "city": "Sharm El Sheikh",
    "country": "EG",
    "lat": 27.977272,
    "lon": 34.394717,
    "elevation": 191
  },
  {
    "icao": "HESN",
    "iata": "ASW",
    "name": "Aswan International Airport",
    "city": "Aswan",
    "country": "EG",
    "lat": 23.968137,
    "lon": 32.824445,
    "elevation": 650
  },
  {
    "icao": "HESX",
    "iata": "SPX",
    "name": "Sphinx International Airport",
    "city": "Al Jiza",
    "country": "EG",
    "lat": 30.108179,
    "lon": 30.895728,
    "elevation": 510
  },
  {
    "icao": "HETB",
    "iata": "TCP",
    "name": "Taba International Airport",
    "city": "Taba",
    "country": "EG",
    "lat": 29.594496,
    "lon": 34.775752,
    "elevation": 2425
  },
  {
    "icao": "HHAS",
    "iata": "ASM",
    "name": "Asmara International Airport",
    "city": "Asmara",
    "country": "ER",
    "lat": 15.291899681091309,
    "lon": 38.910701751708984,
    "elevation": 7661
  },
  {
    "icao": "HHMS",
    "iata": "MSW",
    "name": "Massawa International Airport",
    "city": "Massawa",
    "country": "ER",
    "lat": 15.67,
    "lon": 39.370098,
    "elevation": 194
  },
  {
    "icao": "HHSB",
    "iata": "ASA",
    "name": "Assab International Airport",
    "city": "Assab",
    "country": "ER",
    "lat": 13.0718,
    "lon": 42.645,
    "elevation": 46
  },
  {
    "icao": "HJJJ",
    "iata": "JUB",
    "name": "Juba International Airport",
    "city": "Juba",
    "country": "SS",
    "lat": 4.87201,
    "lon": 31.601101,
    "elevation": 1513
  },
  {
    "icao": "HKAM",
    "iata": "ASV",
    "name": "Amboseli Airport",
    "city": "Amboseli National Park",
    "country": "KE",
    "lat": -2.645050048828125,
    "lon": 37.25310134887695,
    "elevation": 3755
  },
  {
    "icao": "HKEL",
    "iata": "EDL",
    "name": "Eldoret International Airport",
    "city": "Eldoret",
    "country": "KE",
    "lat": 0.4044579863548279,
    "lon": 35.23889923095703,
    "elevation": 6941
  },
  {
    "icao": "HKJK",
    "iata": "NBO",
    "name": "Jomo Kenyatta International Airport",
    "city": "Nairobi",
    "country": "KE",
    "lat": -1.31923997402,
    "lon": 36.9277992249,
    "elevation": 5330
  },
  {
    "icao": "HKKI",
    "iata": "KIS",
    "name": "Kisumu Airport",
    "city": "Kisumu",
    "country": "KE",
    "lat": -0.0861390009522438,
    "lon": 34.72890090942383,
    "elevation": 3734
  },
  {
    "icao": "HKKT",
    "iata": "KTL",
    "name": "Kitale Airport",
    "city": "Kitale",
    "country": "KE",
    "lat": 0.971989,
    "lon": 34.958599,
    "elevation": 6070
  },
  {
    "icao": "HKLK",
    "iata": "LKG",
    "name": "Lokichogio Airport",
    "city": "Lokichogio",
    "country": "KE",
    "lat": 4.20412,
    "lon": 34.348202,
    "elevation": 2074
  },
  {
    "icao": "HKLO",
    "iata": "LOK",
    "name": "Lodwar Airport",
    "city": "Lodwar",
    "country": "KE",
    "lat": 3.12197,
    "lon": 35.6087,
    "elevation": 1715
  },
  {
    "icao": "HKLU",
    "iata": "LAU",
    "name": "Manda Airport",
    "city": "Lamu",
    "country": "KE",
    "lat": -2.252431,
    "lon": 40.912892,
    "elevation": 20
  },
  {
    "icao": "HKML",
    "iata": "MYD",
    "name": "Malindi Airport",
    "city": "Malindi",
    "country": "KE",
    "lat": -3.2293100357055664,
    "lon": 40.10169982910156,
    "elevation": 80
  },
  {
    "icao": "HKMO",
    "iata": "MBA",
    "name": "Moi International Airport",
    "city": "Mombasa",
    "country": "KE",
    "lat": -4.03483,
    "lon": 39.5942,
    "elevation": 200
  },
  {
    "icao": "HKMS",
    "iata": "MRE",
    "name": "Mara Serena Lodge Airstrip",
    "city": "Masai Mara",
    "country": "KE",
    "lat": -1.406111,
    "lon": 35.008057,
    "elevation": 5200
  },
  {
    "icao": "HKNL",
    "iata": "NYK",
    "name": "Nanyuki Airport",
    "city": "Nanyuki",
    "country": "KE",
    "lat": -0.062399,
    "lon": 37.041008,
    "elevation": 6250
  },
  {
    "icao": "HKNW",
    "iata": "WIL",
    "name": "Nairobi Wilson Airport",
    "city": "Nairobi",
    "country": "KE",
    "lat": -1.321720004081726,
    "lon": 36.81480026245117,
    "elevation": 5536
  },
  {
    "icao": "HKWJ",
    "iata": "WJR",
    "name": "Wajir Airport",
    "city": "Wajir",
    "country": "KE",
    "lat": 1.73324,
    "lon": 40.091599,
    "elevation": 770
  },
  {
    "icao": "HLGD",
    "iata": "SRX",
    "name": "Sirt International Airport / Ghardabiya Airbase",
    "city": "Sirt",
    "country": "LY",
    "lat": 31.063499,
    "lon": 16.594999,
    "elevation": 267
  },
  {
    "icao": "HLGT",
    "iata": "GHT",
    "name": "Ghat Airport",
    "city": "Ghat",
    "country": "LY",
    "lat": 25.1455993652,
    "lon": 10.142600059500001,
    "elevation": 2296
  },
  {
    "icao": "HLKF",
    "iata": "AKF",
    "name": "Kufra Airport",
    "city": "Kufra",
    "country": "LY",
    "lat": 24.178699493408203,
    "lon": 23.31399917602539,
    "elevation": 1367
  },
  {
    "icao": "HLLB",
    "iata": "BEN",
    "name": "Benina International Airport",
    "city": "Benina",
    "country": "LY",
    "lat": 32.096802,
    "lon": 20.269501,
    "elevation": 433
  },
  {
    "icao": "HLLM",
    "iata": "MJI",
    "name": "Mitiga International Airport",
    "city": "Tripoli",
    "country": "LY",
    "lat": 32.89177,
    "lon": 13.287878,
    "elevation": 36
  },
  {
    "icao": "HLLQ",
    "iata": "LAQ",
    "name": "Al Abraq International Airport",
    "city": "Al Albraq",
    "country": "LY",
    "lat": 32.7887,
    "lon": 21.9643,
    "elevation": 2157
  },
  {
    "icao": "HLLS",
    "iata": "SEB",
    "name": "Sabha Airport",
    "city": "Sabha",
    "country": "LY",
    "lat": 26.992452,
    "lon": 14.466162,
    "elevation": 1427
  },
  {
    "icao": "HLMB",
    "iata": "LMQ",
    "name": "Marsa al Brega Airport",
    "city": "Marsa al Brega",
    "country": "LY",
    "lat": 30.378099,
    "lon": 19.576401,
    "elevation": 50
  },
  {
    "icao": "HLTD",
    "iata": "LTD",
    "name": "Ghadames East Airport",
    "city": "Ghadames",
    "country": "LY",
    "lat": 30.151699,
    "lon": 9.71531,
    "elevation": 1122
  },
  {
    "icao": "HRYG",
    "iata": "GYI",
    "name": "Gisenyi Airport",
    "city": "Gisenyi",
    "country": "RW",
    "lat": -1.6771999597549438,
    "lon": 29.258899688720703,
    "elevation": 5082
  },
  {
    "icao": "HRYR",
    "iata": "KGL",
    "name": "Kigali International Airport",
    "city": "Kigali",
    "country": "RW",
    "lat": -1.96863,
    "lon": 30.1395,
    "elevation": 4859
  },
  {
    "icao": "HRZA",
    "iata": "KME",
    "name": "Kamembe Airport",
    "city": "Kamembe",
    "country": "RW",
    "lat": -2.462239980697632,
    "lon": 28.907899856567383,
    "elevation": 5192
  },
  {
    "icao": "HSDN",
    "iata": "DOG",
    "name": "Dongola Airport",
    "city": "Dongola",
    "country": "SD",
    "lat": 19.153900146499996,
    "lon": 30.430099487299998,
    "elevation": 772
  },
  {
    "icao": "HSFS",
    "iata": "ELF",
    "name": "El Fasher Airport",
    "city": "El Fasher",
    "country": "SD",
    "lat": 13.614899635314941,
    "lon": 25.324600219726562,
    "elevation": 2393
  },
  {
    "icao": "HSKA",
    "iata": "KSL",
    "name": "Kassala Airport",
    "city": "Kassala",
    "country": "SD",
    "lat": 15.387499809265137,
    "lon": 36.328800201416016,
    "elevation": 1671
  },
  {
    "icao": "HSMN",
    "iata": "MWE",
    "name": "Merowe Airport",
    "city": "Merowe",
    "country": "SD",
    "lat": 18.443333,
    "lon": 31.843333,
    "elevation": 897
  },
  {
    "icao": "HSNN",
    "iata": "UYL",
    "name": "Nyala Airport",
    "city": "Nyala",
    "country": "SD",
    "lat": 12.0535,
    "lon": 24.9562,
    "elevation": 2106
  },
  {
    "icao": "HSOB",
    "iata": "EBD",
    "name": "El-Obeid Airport",
    "city": "El-Obeid",
    "country": "SD",
    "lat": 13.1532,
    "lon": 30.2327,
    "elevation": 1927
  },
  {
    "icao": "HSPN",
    "iata": "PZU",
    "name": "Port Sudan New International Airport",
    "city": "Port Sudan",
    "country": "SD",
    "lat": 19.4335994720459,
    "lon": 37.234100341796875,
    "elevation": 135
  },
  {
    "icao": "HSSK",
    "iata": "KRT",
    "name": "Khartoum International Airport",
    "city": "Khartoum",
    "country": "SD",
    "lat": 15.5895,
    "lon": 32.5532,
    "elevation": 1265
  },
  {
    "icao": "HJMK",
    "iata": "MAK",
    "name": "Malakal Airport",
    "city": "Malakal",
    "country": "SS",
    "lat": 9.55897,
    "lon": 31.652201,
    "elevation": 1291
  },
  {
    "icao": "HJWW",
    "iata": "WUU",
    "name": "Wau Airport",
    "city": "Wau",
    "country": "SS",
    "lat": 7.72583,
    "lon": 27.975,
    "elevation": 1529
  },
  {
    "icao": "HTAR",
    "iata": "ARK",
    "name": "Arusha Airport",
    "city": "Arusha",
    "country": "TZ",
    "lat": -3.3677899837493896,
    "lon": 36.63330078125,
    "elevation": 4550
  },
  {
    "icao": "HTDA",
    "iata": "DAR",
    "name": "Julius Nyerere International Airport",
    "city": "Dar es Salaam",
    "country": "TZ",
    "lat": -6.87811,
    "lon": 39.202599,
    "elevation": 182
  },
  {
    "icao": "HTDO",
    "iata": "DOD",
    "name": "Dodoma Airport",
    "city": "Dodoma",
    "country": "TZ",
    "lat": -6.17044,
    "lon": 35.752602,
    "elevation": 3673
  },
  {
    "icao": "HTGW",
    "iata": "MBI",
    "name": "Songwe Airport",
    "city": "Mbeya",
    "country": "TZ",
    "lat": -8.919942,
    "lon": 33.273981,
    "elevation": 4412
  },
  {
    "icao": "HTIR",
    "iata": "IRI",
    "name": "Iringa Airport",
    "city": "Nduli",
    "country": "TZ",
    "lat": -7.66863,
    "lon": 35.752102,
    "elevation": 4678
  },
  {
    "icao": "HTKJ",
    "iata": "JRO",
    "name": "Kilimanjaro International Airport",
    "city": "Arusha",
    "country": "TZ",
    "lat": -3.42941,
    "lon": 37.074501,
    "elevation": 2932
  },
  {
    "icao": "HTLM",
    "iata": "LKY",
    "name": "Lake Manyara Airport",
    "city": "Lake Manyara National Park",
    "country": "TZ",
    "lat": -3.37631,
    "lon": 35.818298,
    "elevation": 4150
  },
  {
    "icao": "HTMT",
    "iata": "MYW",
    "name": "Mtwara Airport",
    "city": "Mtwara",
    "country": "TZ",
    "lat": -10.336204,
    "lon": 40.181997,
    "elevation": 371
  },
  {
    "icao": "HTMW",
    "iata": "MWZ",
    "name": "Mwanza Airport",
    "city": "Mwanza",
    "country": "TZ",
    "lat": -2.4444899559020996,
    "lon": 32.932701110839844,
    "elevation": 3763
  },
  {
    "icao": "HTPE",
    "iata": "PMA",
    "name": "Pemba Airport",
    "city": "Chake Chake",
    "country": "TZ",
    "lat": -5.25726,
    "lon": 39.811401,
    "elevation": 80
  },
  {
    "icao": "HTTG",
    "iata": "TGT",
    "name": "Tanga Airport",
    "city": "Tanga",
    "country": "TZ",
    "lat": -5.09236,
    "lon": 39.071201,
    "elevation": 129
  },
  {
    "icao": "HTZA",
    "iata": "ZNZ",
    "name": "Abeid Amani Karume International Airport",
    "city": "Zanzibar",
    "country": "TZ",
    "lat": -6.22202,
    "lon": 39.224899,
    "elevation": 54
  },
  {
    "icao": "HUAR",
    "iata": "RUA",
    "name": "Arua Airport",
    "city": "Arua",
    "country": "UG",
    "lat": 3.049152,
    "lon": 30.911714,
    "elevation": 3951
  },
  {
    "icao": "HUEN",
    "iata": "EBB",
    "name": "Entebbe International Airport",
    "city": "Kampala",
    "country": "UG",
    "lat": 0.042386,
    "lon": 32.443501,
    "elevation": 3782
  },
  {
    "icao": "HUGU",
    "iata": "ULU",
    "name": "Gulu Airport",
    "city": "Gulu",
    "country": "UG",
    "lat": 2.8055601119995117,
    "lon": 32.27180099487305,
    "elevation": 3510
  },
  {
    "icao": "HUSO",
    "iata": "SRT",
    "name": "Soroti Airport",
    "city": "Soroti",
    "country": "UG",
    "lat": 1.7276899814605713,
    "lon": 33.622798919677734,
    "elevation": 3697
  },
  {
    "icao": "HZU",
    "iata": "HZU",
    "name": "Chengdu Huaizhou Airport",
    "city": "Chengdu (Jintang)",
    "country": "CN",
    "lat": 30.677339,
    "lon": 104.529397,
    "elevation": 1453
  },
  {
    "icao": "IBL",
    "iata": "IBL",
    "name": "Indigo Bay Lodge Airport",
    "city": "Bazaruto Island",
    "country": "MZ",
    "lat": -21.708,
    "lon": 35.452801,
    "elevation": 20
  },
  {
    "icao": "WARD",
    "iata": "DHX",
    "name": "Dhoho International Airport",
    "city": "Kediri",
    "country": "ID",
    "lat": -7.750278,
    "lon": 111.947222,
    "elevation": 380
  },
  {
    "icao": "WAYB",
    "iata": "UGU",
    "name": "Bilorai Airport",
    "city": "Bilogai",
    "country": "ID",
    "lat": -3.739503,
    "lon": 137.031183,
    "elevation": 7348
  },
  {
    "icao": "VEAY",
    "iata": "AYJ",
    "name": "Ayodhya Airport",
    "city": "Faizabad",
    "country": "IN",
    "lat": 26.751283,
    "lon": 82.155295,
    "elevation": 335
  },
  {
    "icao": "VOSR",
    "iata": "SDW",
    "name": "Sindhudurg Airport",
    "city": "Chipi",
    "country": "IN",
    "lat": 16.002552,
    "lon": 73.529846,
    "elevation": 203
  },
  {
    "icao": "IN-0276",
    "iata": "NMI",
    "name": "Navi Mumbai International Airport",
    "city": "Navi Mumbai",
    "country": "IN",
    "lat": 18.984597,
    "lon": 73.065253,
    "elevation": 184
  },
  {
    "icao": "VOSH",
    "iata": "RQY",
    "name": "Rashtrakavi Kuvempu Airport",
    "city": "Shimoga",
    "country": "IN",
    "lat": 13.858024,
    "lon": 75.618868,
    "elevation": 2017
  },
  {
    "icao": "VEHO",
    "iata": "HGI",
    "name": "Itanagar Donyi Polo Hollongi Airport",
    "city": "Hollongi",
    "country": "IN",
    "lat": 26.96683,
    "lon": 93.638792,
    "elevation": 328
  },
  {
    "icao": "IN-0393",
    "iata": "AHA",
    "name": "Maa Mahamaya Airport",
    "city": "Ambikapur",
    "country": "IN",
    "lat": 22.98753,
    "lon": 83.19612,
    "elevation": 1930
  },
  {
    "icao": "KBVU",
    "iata": "BLD",
    "name": "Boulder City Municipal Airport",
    "city": "Boulder City",
    "country": "US",
    "lat": 35.947161,
    "lon": -114.858799,
    "elevation": 2201
  },
  {
    "icao": "K67L",
    "iata": "MFH",
    "name": "Mesquite Airport",
    "city": "Mesquite",
    "country": "US",
    "lat": 36.833105,
    "lon": -114.055928,
    "elevation": 1978
  },
  {
    "icao": "KABE",
    "iata": "ABE",
    "name": "Lehigh Valley International Airport",
    "city": "Allentown",
    "country": "US",
    "lat": 40.651773,
    "lon": -75.442797,
    "elevation": 393
  },
  {
    "icao": "KABI",
    "iata": "ABI",
    "name": "Abilene Regional Airport",
    "city": "Abilene",
    "country": "US",
    "lat": 32.4113006592,
    "lon": -99.68190002440001,
    "elevation": 1791
  },
  {
    "icao": "KABQ",
    "iata": "ABQ",
    "name": "Albuquerque International Sunport",
    "city": "Albuquerque",
    "country": "US",
    "lat": 35.039976,
    "lon": -106.608925,
    "elevation": 5355
  },
  {
    "icao": "KABR",
    "iata": "ABR",
    "name": "Aberdeen Regional Airport",
    "city": "Aberdeen",
    "country": "US",
    "lat": 45.449100494384766,
    "lon": -98.42179870605469,
    "elevation": 1302
  },
  {
    "icao": "KABY",
    "iata": "ABY",
    "name": "Southwest Georgia Regional Airport",
    "city": "Albany",
    "country": "US",
    "lat": 31.532946,
    "lon": -84.196215,
    "elevation": 197
  },
  {
    "icao": "KACK",
    "iata": "ACK",
    "name": "Nantucket Memorial Airport",
    "city": "Nantucket",
    "country": "US",
    "lat": 41.25310135,
    "lon": -70.06020355,
    "elevation": 47
  },
  {
    "icao": "KACT",
    "iata": "ACT",
    "name": "Waco Regional Airport",
    "city": "Waco",
    "country": "US",
    "lat": 31.611299514770508,
    "lon": -97.23049926757812,
    "elevation": 516
  },
  {
    "icao": "KACV",
    "iata": "ACV",
    "name": "California Redwood Coast-Humboldt County Airport",
    "city": "Arcata/Eureka",
    "country": "US",
    "lat": 40.978101,
    "lon": -124.109,
    "elevation": 221
  },
  {
    "icao": "KACY",
    "iata": "ACY",
    "name": "Atlantic City International Airport",
    "city": "Atlantic City",
    "country": "US",
    "lat": 39.45759963989258,
    "lon": -74.57720184326172,
    "elevation": 75
  },
  {
    "icao": "KADH",
    "iata": "ADT",
    "name": "Ada Regional Airport",
    "city": "Ada",
    "country": "US",
    "lat": 34.805214,
    "lon": -96.671988,
    "elevation": 1016
  },
  {
    "icao": "KADW",
    "iata": "ADW",
    "name": "Joint Base Andrews",
    "city": "Camp Springs",
    "country": "US",
    "lat": 38.810799,
    "lon": -76.866997,
    "elevation": 280
  },
  {
    "icao": "KAEX",
    "iata": "AEX",
    "name": "Alexandria International Airport",
    "city": "Alexandria",
    "country": "US",
    "lat": 31.3274,
    "lon": -92.549797,
    "elevation": 89
  },
  {
    "icao": "KAFW",
    "iata": "AFW",
    "name": "Perot Field/Fort Worth Alliance Airport",
    "city": "Fort Worth",
    "country": "US",
    "lat": 32.99044,
    "lon": -97.31947,
    "elevation": 722
  },
  {
    "icao": "KAGC",
    "iata": "AGC",
    "name": "Allegheny County Airport",
    "city": "Pittsburgh",
    "country": "US",
    "lat": 40.354401,
    "lon": -79.930199,
    "elevation": 1252
  },
  {
    "icao": "KAGS",
    "iata": "AGS",
    "name": "Augusta Regional At Bush Field",
    "city": "Augusta",
    "country": "US",
    "lat": 33.3699,
    "lon": -81.9645,
    "elevation": 144
  },
  {
    "icao": "KAHN",
    "iata": "AHN",
    "name": "Athens Ben Epps Airport",
    "city": "Athens",
    "country": "US",
    "lat": 33.948842,
    "lon": -83.325634,
    "elevation": 808
  },
  {
    "icao": "KAIA",
    "iata": "AIA",
    "name": "Alliance Municipal Airport",
    "city": "Alliance",
    "country": "US",
    "lat": 42.052543,
    "lon": -102.803965,
    "elevation": 3931
  },
  {
    "icao": "KAKR",
    "iata": "AKC",
    "name": "Akron Fulton International Airport",
    "city": "Akron",
    "country": "US",
    "lat": 41.037355,
    "lon": -81.46784,
    "elevation": 1067
  },
  {
    "icao": "KALB",
    "iata": "ALB",
    "name": "Albany International Airport",
    "city": "Albany",
    "country": "US",
    "lat": 42.74829864501953,
    "lon": -73.80169677734375,
    "elevation": 285
  },
  {
    "icao": "KALI",
    "iata": "ALI",
    "name": "Alice International Airport",
    "city": "Alice",
    "country": "US",
    "lat": 27.7409,
    "lon": -98.026901,
    "elevation": 178
  },
  {
    "icao": "KALM",
    "iata": "ALM",
    "name": "Alamogordo White Sands Regional Airport",
    "city": "Alamogordo",
    "country": "US",
    "lat": 32.837818,
    "lon": -105.993149,
    "elevation": 4200
  },
  {
    "icao": "KALN",
    "iata": "ALN",
    "name": "St Louis Regional Airport",
    "city": "Alton/St Louis",
    "country": "US",
    "lat": 38.89030075069999,
    "lon": -90.0459976196,
    "elevation": 544
  },
  {
    "icao": "KALO",
    "iata": "ALO",
    "name": "Waterloo Regional Airport",
    "city": "Waterloo",
    "country": "US",
    "lat": 42.557098388671875,
    "lon": -92.40029907226562,
    "elevation": 873
  },
  {
    "icao": "KALS",
    "iata": "ALS",
    "name": "San Luis Valley Regional Airport/Bergman Field",
    "city": "Alamosa",
    "country": "US",
    "lat": 37.434898,
    "lon": -105.866997,
    "elevation": 7539
  },
  {
    "icao": "KALW",
    "iata": "ALW",
    "name": "Walla Walla Regional Airport",
    "city": "Walla Walla",
    "country": "US",
    "lat": 46.09489822,
    "lon": -118.288002,
    "elevation": 1194
  },
  {
    "icao": "KAMA",
    "iata": "AMA",
    "name": "Rick Husband Amarillo International Airport",
    "city": "Amarillo",
    "country": "US",
    "lat": 35.219398,
    "lon": -101.706001,
    "elevation": 3607
  },
  {
    "icao": "KANB",
    "iata": "ANB",
    "name": "Anniston Regional Airport",
    "city": "Anniston",
    "country": "US",
    "lat": 33.5882,
    "lon": -85.8581,
    "elevation": 612
  },
  {
    "icao": "KAND",
    "iata": "AND",
    "name": "Anderson Regional Airport",
    "city": "Anderson",
    "country": "US",
    "lat": 34.4945983887,
    "lon": -82.70939636230001,
    "elevation": 782
  },
  {
    "icao": "KAOO",
    "iata": "AOO",
    "name": "Altoona Blair County Airport",
    "city": "Altoona",
    "country": "US",
    "lat": 40.296398,
    "lon": -78.32,
    "elevation": 1503
  },
  {
    "icao": "KAPA",
    "iata": "APA",
    "name": "Centennial Airport",
    "city": "Denver",
    "country": "US",
    "lat": 39.57009888,
    "lon": -104.848999,
    "elevation": 5885
  },
  {
    "icao": "KAPF",
    "iata": "APF",
    "name": "Naples Municipal Airport",
    "city": "Naples",
    "country": "US",
    "lat": 26.1525993347,
    "lon": -81.7752990723,
    "elevation": 8
  },
  {
    "icao": "KAPG",
    "iata": "APG",
    "name": "Phillips Army Air Field",
    "city": "Aberdeen",
    "country": "US",
    "lat": 39.466202,
    "lon": -76.1688,
    "elevation": 57
  },
  {
    "icao": "KAPN",
    "iata": "APN",
    "name": "Alpena County Regional Airport",
    "city": "Alpena",
    "country": "US",
    "lat": 45.0780983,
    "lon": -83.56030273,
    "elevation": 690
  },
  {
    "icao": "KARA",
    "iata": "ARA",
    "name": "Acadiana Regional Airport",
    "city": "New Iberia",
    "country": "US",
    "lat": 30.0378,
    "lon": -91.883904,
    "elevation": 24
  },
  {
    "icao": "KART",
    "iata": "ART",
    "name": "Watertown International Airport",
    "city": "Watertown",
    "country": "US",
    "lat": 43.991901,
    "lon": -76.021698,
    "elevation": 325
  },
  {
    "icao": "KASE",
    "iata": "ASE",
    "name": "Aspen-Pitkin County Airport (Sardy Field)",
    "city": "Aspen",
    "country": "US",
    "lat": 39.223202,
    "lon": -106.869003,
    "elevation": 7820
  },
  {
    "icao": "KAST",
    "iata": "AST",
    "name": "Astoria Regional Airport",
    "city": "Astoria",
    "country": "US",
    "lat": 46.158000946,
    "lon": -123.878997803,
    "elevation": 15
  },
  {
    "icao": "KATL",
    "iata": "ATL",
    "name": "Hartsfield Jackson Atlanta International Airport",
    "city": "Atlanta",
    "country": "US",
    "lat": 33.6367,
    "lon": -84.428101,
    "elevation": 1026
  },
  {
    "icao": "KATW",
    "iata": "ATW",
    "name": "Appleton International Airport",
    "city": "Appleton",
    "country": "US",
    "lat": 44.258099,
    "lon": -88.519096,
    "elevation": 918
  },
  {
    "icao": "KATY",
    "iata": "ATY",
    "name": "Watertown Regional Airport",
    "city": "Watertown",
    "country": "US",
    "lat": 44.91400146,
    "lon": -97.15470123,
    "elevation": 1749
  },
  {
    "icao": "KAUG",
    "iata": "AUG",
    "name": "Augusta State Airport",
    "city": "Augusta",
    "country": "US",
    "lat": 44.320598602299995,
    "lon": -69.7973022461,
    "elevation": 352
  },
  {
    "icao": "KAUS",
    "iata": "AUS",
    "name": "Austin Bergstrom International Airport",
    "city": "Austin",
    "country": "US",
    "lat": 30.197535,
    "lon": -97.662015,
    "elevation": 542
  },
  {
    "icao": "KAUW",
    "iata": "AUW",
    "name": "Wausau Downtown Airport",
    "city": "Wausau",
    "country": "US",
    "lat": 44.9262008667,
    "lon": -89.6266021729,
    "elevation": 1201
  },
  {
    "icao": "KAVL",
    "iata": "AVL",
    "name": "Asheville Regional Airport",
    "city": "Asheville",
    "country": "US",
    "lat": 35.436199,
    "lon": -82.541801,
    "elevation": 2165
  },
  {
    "icao": "KAVP",
    "iata": "AVP",
    "name": "Wilkes Barre Scranton International Airport",
    "city": "Wilkes-Barre/Scranton",
    "country": "US",
    "lat": 41.338500976599995,
    "lon": -75.72339630130001,
    "elevation": 962
  },
  {
    "icao": "KAXN",
    "iata": "AXN",
    "name": "Chandler Field",
    "city": "Alexandria",
    "country": "US",
    "lat": 45.866299,
    "lon": -95.394699,
    "elevation": 1425
  },
  {
    "icao": "KAZO",
    "iata": "AZO",
    "name": "Kalamazoo Battle Creek International Airport",
    "city": "Kalamazoo",
    "country": "US",
    "lat": 42.234901428222656,
    "lon": -85.5521011352539,
    "elevation": 874
  },
  {
    "icao": "KBAB",
    "iata": "BAB",
    "name": "Beale Air Force Base",
    "city": "Beale Air Force Base",
    "country": "US",
    "lat": 39.136101,
    "lon": -121.436996,
    "elevation": 113
  },
  {
    "icao": "KBAD",
    "iata": "BAD",
    "name": "Barksdale Air Force Base",
    "city": "Bossier City",
    "country": "US",
    "lat": 32.501801,
    "lon": -93.662697,
    "elevation": 166
  },
  {
    "icao": "KBAF",
    "iata": "BAF",
    "name": "Westfield-Barnes Regional Airport",
    "city": "Westfield",
    "country": "US",
    "lat": 42.157799,
    "lon": -72.715599,
    "elevation": 271
  },
  {
    "icao": "KBAK",
    "iata": "CLU",
    "name": "Columbus Municipal Airport",
    "city": "Columbus",
    "country": "US",
    "lat": 39.262386,
    "lon": -85.895576,
    "elevation": 656
  },
  {
    "icao": "KBBD",
    "iata": "BBD",
    "name": "Curtis Field",
    "city": "Brady",
    "country": "US",
    "lat": 31.178931,
    "lon": -99.324732,
    "elevation": 1827
  },
  {
    "icao": "KBBG",
    "iata": "BKG",
    "name": "Branson Airport",
    "city": "Branson",
    "country": "US",
    "lat": 36.532082,
    "lon": -93.200544,
    "elevation": 1302
  },
  {
    "icao": "KBCE",
    "iata": "BCE",
    "name": "Bryce Canyon Airport",
    "city": "Bryce Canyon",
    "country": "US",
    "lat": 37.706401825,
    "lon": -112.144996643,
    "elevation": 7590
  },
  {
    "icao": "KBCT",
    "iata": "BCT",
    "name": "Boca Raton Airport",
    "city": "Boca Raton",
    "country": "US",
    "lat": 26.3785,
    "lon": -80.107697,
    "elevation": 13
  },
  {
    "icao": "KBDE",
    "iata": "BDE",
    "name": "Baudette International Airport",
    "city": "Baudette",
    "country": "US",
    "lat": 48.7284011841,
    "lon": -94.612197876,
    "elevation": 1086
  },
  {
    "icao": "KBDL",
    "iata": "BDL",
    "name": "Bradley International Airport",
    "city": "Hartford",
    "country": "US",
    "lat": 41.93851,
    "lon": -72.688066,
    "elevation": 173
  },
  {
    "icao": "KBDR",
    "iata": "BDR",
    "name": "Igor I Sikorsky Memorial Airport",
    "city": "Bridgeport",
    "country": "US",
    "lat": 41.163502,
    "lon": -73.126198,
    "elevation": 9
  },
  {
    "icao": "KBED",
    "iata": "BED",
    "name": "Laurence G Hanscom Field",
    "city": "Bedford",
    "country": "US",
    "lat": 42.470001,
    "lon": -71.289001,
    "elevation": 133
  },
  {
    "icao": "KBFD",
    "iata": "BFD",
    "name": "Bradford Regional Airport",
    "city": "Bradford",
    "country": "US",
    "lat": 41.8031005859375,
    "lon": -78.64009857177734,
    "elevation": 2143
  },
  {
    "icao": "KBFF",
    "iata": "BFF",
    "name": "Western Neb. Rgnl/William B. Heilig Airport",
    "city": "Scottsbluff",
    "country": "US",
    "lat": 41.87400055,
    "lon": -103.5960007,
    "elevation": 3967
  },
  {
    "icao": "KBFI",
    "iata": "BFI",
    "name": "Boeing Field King County International Airport",
    "city": "Seattle",
    "country": "US",
    "lat": 47.529999,
    "lon": -122.302002,
    "elevation": 21
  },
  {
    "icao": "KBFL",
    "iata": "BFL",
    "name": "Meadows Field",
    "city": "Bakersfield",
    "country": "US",
    "lat": 35.433601,
    "lon": -119.056999,
    "elevation": 510
  },
  {
    "icao": "KBFM",
    "iata": "BFM",
    "name": "Mobile Downtown Airport",
    "city": "Mobile",
    "country": "US",
    "lat": 30.626800537100003,
    "lon": -88.06809997559999,
    "elevation": 26
  },
  {
    "icao": "KBGM",
    "iata": "BGM",
    "name": "Greater Binghamton/Edwin A Link field",
    "city": "Binghamton",
    "country": "US",
    "lat": 42.20869827,
    "lon": -75.97979736,
    "elevation": 1636
  },
  {
    "icao": "KBGR",
    "iata": "BGR",
    "name": "Bangor International Airport",
    "city": "Bangor",
    "country": "US",
    "lat": 44.8074,
    "lon": -68.828102,
    "elevation": 192
  },
  {
    "icao": "KBHB",
    "iata": "BHB",
    "name": "Hancock County-Bar Harbor Airport",
    "city": "Bar Harbor",
    "country": "US",
    "lat": 44.45000076,
    "lon": -68.3615036,
    "elevation": 83
  },
  {
    "icao": "KBHM",
    "iata": "BHM",
    "name": "Birmingham-Shuttlesworth International Airport",
    "city": "Birmingham",
    "country": "US",
    "lat": 33.562901,
    "lon": -86.753502,
    "elevation": 650
  },
  {
    "icao": "KBIF",
    "iata": "BIF",
    "name": "Biggs Army Air Field (Fort Bliss)",
    "city": "Fort Bliss/El Paso",
    "country": "US",
    "lat": 31.84950066,
    "lon": -106.3799973,
    "elevation": 3946
  },
  {
    "icao": "KBIH",
    "iata": "BIH",
    "name": "Eastern Sierra Regional Airport",
    "city": "Bishop",
    "country": "US",
    "lat": 37.3731,
    "lon": -118.363998,
    "elevation": 4124
  },
  {
    "icao": "KBIL",
    "iata": "BIL",
    "name": "Billings Logan International Airport",
    "city": "Billings",
    "country": "US",
    "lat": 45.807701,
    "lon": -108.542999,
    "elevation": 3652
  },
  {
    "icao": "KBIS",
    "iata": "BIS",
    "name": "Bismarck Municipal Airport",
    "city": "Bismarck",
    "country": "US",
    "lat": 46.772701263427734,
    "lon": -100.74600219726562,
    "elevation": 1661
  },
  {
    "icao": "KBIX",
    "iata": "BIX",
    "name": "Keesler Air Force Base",
    "city": "Biloxi",
    "country": "US",
    "lat": 30.4104003906,
    "lon": -88.92440032959999,
    "elevation": 33
  },
  {
    "icao": "KBJC",
    "iata": "BJC",
    "name": "Rocky Mountain Metropolitan Airport",
    "city": "Denver",
    "country": "US",
    "lat": 39.908798,
    "lon": -105.116997,
    "elevation": 5673
  },
  {
    "icao": "KBJI",
    "iata": "BJI",
    "name": "Bemidji Regional Airport",
    "city": "Bemidji",
    "country": "US",
    "lat": 47.50939941,
    "lon": -94.93370056,
    "elevation": 1391
  },
  {
    "icao": "KBKE",
    "iata": "BKE",
    "name": "Baker City Municipal Airport",
    "city": "Baker City",
    "country": "US",
    "lat": 44.837299346900004,
    "lon": -117.808998108,
    "elevation": 3373
  },
  {
    "icao": "KBKF",
    "iata": "BFK",
    "name": "Buckley Space Force Base",
    "city": "Aurora",
    "country": "US",
    "lat": 39.701698,
    "lon": -104.751999,
    "elevation": 5662
  },
  {
    "icao": "KBKL",
    "iata": "BKL",
    "name": "Burke Lakefront Airport",
    "city": "Cleveland",
    "country": "US",
    "lat": 41.51750183105469,
    "lon": -81.68329620361328,
    "elevation": 583
  },
  {
    "icao": "KBKW",
    "iata": "BKW",
    "name": "Raleigh County Memorial Airport",
    "city": "Beaver",
    "country": "US",
    "lat": 37.7873,
    "lon": -81.124199,
    "elevation": 2504
  },
  {
    "icao": "KBLF",
    "iata": "BLF",
    "name": "Mercer County Airport",
    "city": "Bluefield",
    "country": "US",
    "lat": 37.295799,
    "lon": -81.207703,
    "elevation": 2857
  },
  {
    "icao": "KBLH",
    "iata": "BLH",
    "name": "Blythe Airport",
    "city": "Blythe",
    "country": "US",
    "lat": 33.6192016602,
    "lon": -114.717002869,
    "elevation": 399
  },
  {
    "icao": "KBLI",
    "iata": "BLI",
    "name": "Bellingham International Airport",
    "city": "Bellingham",
    "country": "US",
    "lat": 48.79280090332031,
    "lon": -122.53800201416016,
    "elevation": 170
  },
  {
    "icao": "KBLV",
    "iata": "BLV",
    "name": "Scott AFB/Midamerica Airport",
    "city": "Belleville",
    "country": "US",
    "lat": 38.5452,
    "lon": -89.835197,
    "elevation": 459
  },
  {
    "icao": "KBMG",
    "iata": "BMG",
    "name": "Monroe County Airport",
    "city": "Bloomington",
    "country": "US",
    "lat": 39.145999908447266,
    "lon": -86.61669921875,
    "elevation": 846
  },
  {
    "icao": "KBMI",
    "iata": "BMI",
    "name": "Central Illinois Regional Airport at Bloomington-Normal",
    "city": "Bloomington/Normal",
    "country": "US",
    "lat": 40.4771,
    "lon": -88.915901,
    "elevation": 871
  },
  {
    "icao": "KBNA",
    "iata": "BNA",
    "name": "Nashville International Airport",
    "city": "Nashville",
    "country": "US",
    "lat": 36.1245,
    "lon": -86.6782,
    "elevation": 599
  },
  {
    "icao": "KBNO",
    "iata": "BNO",
    "name": "Burns Municipal Airport",
    "city": "Burns",
    "country": "US",
    "lat": 43.590463,
    "lon": -118.955154,
    "elevation": 4148
  },
  {
    "icao": "KBOI",
    "iata": "BOI",
    "name": "Boise Air Terminal/Gowen Field",
    "city": "Boise",
    "country": "US",
    "lat": 43.5644,
    "lon": -116.223,
    "elevation": 2871
  },
  {
    "icao": "KBOS",
    "iata": "BOS",
    "name": "Logan International Airport",
    "city": "Boston",
    "country": "US",
    "lat": 42.36197,
    "lon": -71.0079,
    "elevation": 20
  },
  {
    "icao": "KBPI",
    "iata": "BPI",
    "name": "Miley Memorial Field",
    "city": "Big Piney",
    "country": "US",
    "lat": 42.58509827,
    "lon": -110.1110001,
    "elevation": 6990
  },
  {
    "icao": "KBPK",
    "iata": "WMH",
    "name": "Ozark Regional Airport",
    "city": "Mountain Home",
    "country": "US",
    "lat": 36.3689002991,
    "lon": -92.47049713130001,
    "elevation": 928
  },
  {
    "icao": "KBPT",
    "iata": "BPT",
    "name": "Jack Brooks Regional Airport",
    "city": "Beaumont/Port Arthur",
    "country": "US",
    "lat": 29.9508,
    "lon": -94.020699,
    "elevation": 15
  },
  {
    "icao": "KBQK",
    "iata": "BQK",
    "name": "Brunswick Golden Isles Airport",
    "city": "Brunswick",
    "country": "US",
    "lat": 31.258801,
    "lon": -81.466499,
    "elevation": 26
  },
  {
    "icao": "KBRD",
    "iata": "BRD",
    "name": "Brainerd Lakes Regional Airport",
    "city": "Brainerd",
    "country": "US",
    "lat": 46.402861,
    "lon": -94.129727,
    "elevation": 1232
  },
  {
    "icao": "KBRL",
    "iata": "BRL",
    "name": "Southeast Iowa Regional Airport",
    "city": "Burlington",
    "country": "US",
    "lat": 40.783199310302734,
    "lon": -91.12550354003906,
    "elevation": 698
  },
  {
    "icao": "KBRO",
    "iata": "BRO",
    "name": "Brownsville South Padre Island International Airport",
    "city": "Brownsville",
    "country": "US",
    "lat": 25.90679931640625,
    "lon": -97.4259033203125,
    "elevation": 22
  },
  {
    "icao": "KBTL",
    "iata": "BTL",
    "name": "Battle Creek Executive Airport at Kellogg Field",
    "city": "Battle Creek",
    "country": "US",
    "lat": 42.307301,
    "lon": -85.251503,
    "elevation": 952
  },
  {
    "icao": "KBTM",
    "iata": "BTM",
    "name": "Bert Mooney Airport",
    "city": "Butte",
    "country": "US",
    "lat": 45.95479965209961,
    "lon": -112.49700164794922,
    "elevation": 5550
  },
  {
    "icao": "KBTR",
    "iata": "BTR",
    "name": "Baton Rouge Metropolitan Airport",
    "city": "Baton Rouge",
    "country": "US",
    "lat": 30.533199,
    "lon": -91.149597,
    "elevation": 70
  },
  {
    "icao": "KBTV",
    "iata": "BTV",
    "name": "Burlington International Airport",
    "city": "South Burlington",
    "country": "US",
    "lat": 44.471901,
    "lon": -73.153297,
    "elevation": 335
  },
  {
    "icao": "KBUF",
    "iata": "BUF",
    "name": "Buffalo Niagara International Airport",
    "city": "Buffalo",
    "country": "US",
    "lat": 42.940498,
    "lon": -78.732201,
    "elevation": 728
  },
  {
    "icao": "KBUR",
    "iata": "BUR",
    "name": "Hollywood Burbank Airport",
    "city": "Burbank",
    "country": "US",
    "lat": 34.197703,
    "lon": -118.356378,
    "elevation": 778
  },
  {
    "icao": "KBVI",
    "iata": "BFP",
    "name": "Beaver County Airport",
    "city": "Beaver Falls",
    "country": "US",
    "lat": 40.772499,
    "lon": -80.391403,
    "elevation": 1253
  },
  {
    "icao": "KBVY",
    "iata": "BVY",
    "name": "Beverly Regional Airport",
    "city": "Beverly / Danvers",
    "country": "US",
    "lat": 42.584202,
    "lon": -70.916496,
    "elevation": 107
  },
  {
    "icao": "KBWG",
    "iata": "BWG",
    "name": "Bowling Green Warren County Regional Airport",
    "city": "Bowling Green",
    "country": "US",
    "lat": 36.964500427199994,
    "lon": -86.41970062259999,
    "elevation": 547
  },
  {
    "icao": "KBWI",
    "iata": "BWI",
    "name": "Baltimore/Washington International Thurgood Marshall Airport",
    "city": "Baltimore",
    "country": "US",
    "lat": 39.1754,
    "lon": -76.668297,
    "elevation": 146
  },
  {
    "icao": "KBXM",
    "iata": "NHZ",
    "name": "Brunswick Executive Airport",
    "city": "Brunswick",
    "country": "US",
    "lat": 43.89220047,
    "lon": -69.93859863,
    "elevation": 72
  },
  {
    "icao": "KBYH",
    "iata": "BYH",
    "name": "Arkansas International Airport",
    "city": "Blytheville",
    "country": "US",
    "lat": 35.9642982483,
    "lon": -89.94400024410001,
    "elevation": 254
  },
  {
    "icao": "KBYI",
    "iata": "BYI",
    "name": "Burley Municipal Airport",
    "city": "Burley",
    "country": "US",
    "lat": 42.542598724399994,
    "lon": -113.772003174,
    "elevation": 4150
  },
  {
    "icao": "KBYS",
    "iata": "BYS",
    "name": "Bicycle Lake Army Air Field",
    "city": "Fort Irwin/Barstow",
    "country": "US",
    "lat": 35.2804985046,
    "lon": -116.629997253,
    "elevation": 2350
  },
  {
    "icao": "KBZN",
    "iata": "BZN",
    "name": "Bozeman Yellowstone International Airport",
    "city": "Bozeman",
    "country": "US",
    "lat": 45.7775,
    "lon": -111.153,
    "elevation": 4473
  },
  {
    "icao": "KCAE",
    "iata": "CAE",
    "name": "Columbia Metropolitan Airport",
    "city": "Columbia",
    "country": "US",
    "lat": 33.938801,
    "lon": -81.119499,
    "elevation": 236
  },
  {
    "icao": "KCAK",
    "iata": "CAK",
    "name": "Akron Canton Regional Airport",
    "city": "Akron",
    "country": "US",
    "lat": 40.916099548339844,
    "lon": -81.44219970703125,
    "elevation": 1228
  },
  {
    "icao": "KCAR",
    "iata": "CAR",
    "name": "Caribou Municipal Airport",
    "city": "Caribou",
    "country": "US",
    "lat": 46.871498,
    "lon": -68.017899,
    "elevation": 626
  },
  {
    "icao": "KCBM",
    "iata": "CBM",
    "name": "Columbus Air Force Base",
    "city": "Columbus",
    "country": "US",
    "lat": 33.643799,
    "lon": -88.443802,
    "elevation": 219
  },
  {
    "icao": "KCCR",
    "iata": "CCR",
    "name": "Buchanan Field",
    "city": "Concord",
    "country": "US",
    "lat": 37.9897,
    "lon": -122.056999,
    "elevation": 26
  },
  {
    "icao": "KCCY",
    "iata": "CCY",
    "name": "Northeast Iowa Regional Airport",
    "city": "Charles City",
    "country": "US",
    "lat": 43.0726013184,
    "lon": -92.6108016968,
    "elevation": 1125
  },
  {
    "icao": "KCDC",
    "iata": "CDC",
    "name": "Cedar City Regional Airport",
    "city": "Cedar City",
    "country": "US",
    "lat": 37.70100021362305,
    "lon": -113.0989990234375,
    "elevation": 5622
  },
  {
    "icao": "KCDR",
    "iata": "CDR",
    "name": "Chadron Municipal Airport",
    "city": "Chadron",
    "country": "US",
    "lat": 42.837601,
    "lon": -103.095001,
    "elevation": 3297
  },
  {
    "icao": "KCDS",
    "iata": "CDS",
    "name": "Childress Municipal Airport",
    "city": "Childress",
    "country": "US",
    "lat": 34.4337997437,
    "lon": -100.288002014,
    "elevation": 1954
  },
  {
    "icao": "KCEC",
    "iata": "CEC",
    "name": "Jack Mc Namara Field Airport",
    "city": "Crescent City",
    "country": "US",
    "lat": 41.778929,
    "lon": -124.236403,
    "elevation": 61
  },
  {
    "icao": "KCEF",
    "iata": "CEF",
    "name": "Westover Metropolitan Airport / Westover Air Reserve Base",
    "city": "Chicopee",
    "country": "US",
    "lat": 42.194,
    "lon": -72.534798,
    "elevation": 241
  },
  {
    "icao": "KCEW",
    "iata": "CEW",
    "name": "Bob Sikes Airport",
    "city": "Crestview",
    "country": "US",
    "lat": 30.778799057,
    "lon": -86.522102356,
    "elevation": 213
  },
  {
    "icao": "KCEZ",
    "iata": "CEZ",
    "name": "Cortez Municipal Airport",
    "city": "Cortez",
    "country": "US",
    "lat": 37.303001,
    "lon": -108.627998,
    "elevation": 5918
  },
  {
    "icao": "KCGF",
    "iata": "CGF",
    "name": "Cuyahoga County Airport",
    "city": "Cleveland",
    "country": "US",
    "lat": 41.5651016235,
    "lon": -81.4863967896,
    "elevation": 879
  },
  {
    "icao": "KCGI",
    "iata": "CGI",
    "name": "Cape Girardeau Regional Airport",
    "city": "Cape Girardeau",
    "country": "US",
    "lat": 37.2253,
    "lon": -89.570801,
    "elevation": 342
  },
  {
    "icao": "KCHA",
    "iata": "CHA",
    "name": "Chattanooga Metropolitan Airport (Lovell Field)",
    "city": "Chattanooga",
    "country": "US",
    "lat": 35.035301,
    "lon": -85.203796,
    "elevation": 683
  },
  {
    "icao": "KCHO",
    "iata": "CHO",
    "name": "Charlottesville Albemarle Airport",
    "city": "Charlottesville",
    "country": "US",
    "lat": 38.13859939575195,
    "lon": -78.4529037475586,
    "elevation": 639
  },
  {
    "icao": "KCHS",
    "iata": "CHS",
    "name": "Charleston International Airport",
    "city": "Charleston",
    "country": "US",
    "lat": 32.898602,
    "lon": -80.040497,
    "elevation": 46
  },
  {
    "icao": "KCID",
    "iata": "CID",
    "name": "The Eastern Iowa Airport",
    "city": "Cedar Rapids",
    "country": "US",
    "lat": 41.884701,
    "lon": -91.7108,
    "elevation": 869
  },
  {
    "icao": "KCIU",
    "iata": "CIU",
    "name": "Chippewa County International Airport",
    "city": "Kincheloe",
    "country": "US",
    "lat": 46.247707,
    "lon": -84.471379,
    "elevation": 800
  },
  {
    "icao": "KCKB",
    "iata": "CKB",
    "name": "North Central West Virginia Airport",
    "city": "Bridgeport",
    "country": "US",
    "lat": 39.2966,
    "lon": -80.228104,
    "elevation": 1217
  },
  {
    "icao": "KCLE",
    "iata": "CLE",
    "name": "Cleveland Hopkins International Airport",
    "city": "Cleveland",
    "country": "US",
    "lat": 41.411701,
    "lon": -81.8498,
    "elevation": 791
  },
  {
    "icao": "KCLL",
    "iata": "CLL",
    "name": "Easterwood Field",
    "city": "College Station",
    "country": "US",
    "lat": 30.5886,
    "lon": -96.3638,
    "elevation": 320
  },
  {
    "icao": "KCLM",
    "iata": "CLM",
    "name": "William R Fairchild International Airport",
    "city": "Port Angeles",
    "country": "US",
    "lat": 48.120201,
    "lon": -123.5,
    "elevation": 291
  },
  {
    "icao": "KCLT",
    "iata": "CLT",
    "name": "Charlotte Douglas International Airport",
    "city": "Charlotte",
    "country": "US",
    "lat": 35.2140007019043,
    "lon": -80.94309997558594,
    "elevation": 748
  },
  {
    "icao": "KCMH",
    "iata": "CMH",
    "name": "John Glenn Columbus International Airport",
    "city": "Columbus",
    "country": "US",
    "lat": 39.998001,
    "lon": -82.891899,
    "elevation": 815
  },
  {
    "icao": "KCMI",
    "iata": "CMI",
    "name": "University of Illinois Willard Airport",
    "city": "Savoy",
    "country": "US",
    "lat": 40.039819,
    "lon": -88.276249,
    "elevation": 755
  },
  {
    "icao": "KCMX",
    "iata": "CMX",
    "name": "Houghton County Memorial Airport",
    "city": "Hancock",
    "country": "US",
    "lat": 47.168399810791016,
    "lon": -88.48909759521484,
    "elevation": 1095
  },
  {
    "icao": "KCNM",
    "iata": "CNM",
    "name": "Cavern City Air Terminal",
    "city": "Carlsbad",
    "country": "US",
    "lat": 32.337501525878906,
    "lon": -104.26300048828125,
    "elevation": 3295
  },
  {
    "icao": "KCNU",
    "iata": "CNU",
    "name": "Chanute Martin Johnson Airport",
    "city": "Chanute",
    "country": "US",
    "lat": 37.668173,
    "lon": -95.486727,
    "elevation": 1002
  },
  {
    "icao": "KCNY",
    "iata": "CNY",
    "name": "Canyonlands Regional Airport",
    "city": "Moab",
    "country": "US",
    "lat": 38.755001,
    "lon": -109.754997,
    "elevation": 4557
  },
  {
    "icao": "KCOD",
    "iata": "COD",
    "name": "Yellowstone Regional Airport",
    "city": "Cody",
    "country": "US",
    "lat": 44.520199,
    "lon": -109.024002,
    "elevation": 5102
  },
  {
    "icao": "KCOE",
    "iata": "COE",
    "name": "Coeur D'Alene Airport - Pappy Boyington Field",
    "city": "Coeur d'Alene",
    "country": "US",
    "lat": 47.7743,
    "lon": -116.82,
    "elevation": 2320
  },
  {
    "icao": "KCOF",
    "iata": "COF",
    "name": "Patrick Space Force Base",
    "city": "Cocoa Beach",
    "country": "US",
    "lat": 28.2349,
    "lon": -80.6101,
    "elevation": 8
  },
  {
    "icao": "KCON",
    "iata": "CON",
    "name": "Concord Municipal Airport",
    "city": "Concord",
    "country": "US",
    "lat": 43.20270157,
    "lon": -71.50229645,
    "elevation": 342
  },
  {
    "icao": "KCOS",
    "iata": "COS",
    "name": "City of Colorado Springs Municipal Airport",
    "city": "Colorado Springs",
    "country": "US",
    "lat": 38.805801,
    "lon": -104.700996,
    "elevation": 6187
  },
  {
    "icao": "KCOU",
    "iata": "COU",
    "name": "Columbia Regional Airport",
    "city": "Columbia",
    "country": "US",
    "lat": 38.8181,
    "lon": -92.219597,
    "elevation": 889
  },
  {
    "icao": "KCPR",
    "iata": "CPR",
    "name": "Casper-Natrona County International Airport",
    "city": "Casper",
    "country": "US",
    "lat": 42.908001,
    "lon": -106.463997,
    "elevation": 5350
  },
  {
    "icao": "KCRE",
    "iata": "CRE",
    "name": "Grand Strand Airport",
    "city": "North Myrtle Beach",
    "country": "US",
    "lat": 33.8116989136,
    "lon": -78.72389984130001,
    "elevation": 32
  },
  {
    "icao": "KCRG",
    "iata": "CRG",
    "name": "Jacksonville Executive at Craig Airport",
    "city": "Jacksonville",
    "country": "US",
    "lat": 30.3362998962,
    "lon": -81.51439666750001,
    "elevation": 41
  },
  {
    "icao": "KCRP",
    "iata": "CRP",
    "name": "Corpus Christi International Airport",
    "city": "Corpus Christi",
    "country": "US",
    "lat": 27.770399,
    "lon": -97.501198,
    "elevation": 44
  },
  {
    "icao": "KCRQ",
    "iata": "CLD",
    "name": "McClellan-Palomar Airport",
    "city": "Carlsbad",
    "country": "US",
    "lat": 33.1283,
    "lon": -117.279999,
    "elevation": 331
  },
  {
    "icao": "KCRW",
    "iata": "CRW",
    "name": "Yeager Airport",
    "city": "Charleston",
    "country": "US",
    "lat": 38.3731,
    "lon": -81.593201,
    "elevation": 981
  },
  {
    "icao": "KCSG",
    "iata": "CSG",
    "name": "Columbus Metropolitan Airport",
    "city": "Columbus",
    "country": "US",
    "lat": 32.516300201416016,
    "lon": -84.93890380859375,
    "elevation": 397
  },
  {
    "icao": "KCSV",
    "iata": "CSV",
    "name": "Crossville Memorial Airport Whitson Field",
    "city": "Crossville",
    "country": "US",
    "lat": 35.95131,
    "lon": -85.08499,
    "elevation": 1881
  },
  {
    "icao": "KCTB",
    "iata": "CTB",
    "name": "Cut Bank International Airport",
    "city": "Cut Bank",
    "country": "US",
    "lat": 48.608657,
    "lon": -112.378183,
    "elevation": 3854
  },
  {
    "icao": "KCUB",
    "iata": "CUB",
    "name": "Jim Hamilton L.B. Owens Airport",
    "city": "Columbia",
    "country": "US",
    "lat": 33.970500946,
    "lon": -80.9952011108,
    "elevation": 193
  },
  {
    "icao": "KCVG",
    "iata": "CVG",
    "name": "Cincinnati Northern Kentucky International Airport",
    "city": "Cincinnati / Covington",
    "country": "US",
    "lat": 39.048801,
    "lon": -84.667801,
    "elevation": 896
  },
  {
    "icao": "KCVN",
    "iata": "CVN",
    "name": "Clovis Municipal Airport",
    "city": "Clovis",
    "country": "US",
    "lat": 34.426594,
    "lon": -103.078794,
    "elevation": 4216
  },
  {
    "icao": "KCVO",
    "iata": "CVO",
    "name": "Corvallis Municipal Airport",
    "city": "Corvallis",
    "country": "US",
    "lat": 44.49720001,
    "lon": -123.2900009,
    "elevation": 250
  },
  {
    "icao": "KCVS",
    "iata": "CVS",
    "name": "Cannon Air Force Base",
    "city": "Clovis",
    "country": "US",
    "lat": 34.382801,
    "lon": -103.321999,
    "elevation": 4295
  },
  {
    "icao": "KCWA",
    "iata": "CWA",
    "name": "Central Wisconsin Airport",
    "city": "Mosinee",
    "country": "US",
    "lat": 44.777448,
    "lon": -89.670238,
    "elevation": 1277
  },
  {
    "icao": "KCXO",
    "iata": "CXO",
    "name": "Conroe-North Houston Regional Airport",
    "city": "Houston",
    "country": "US",
    "lat": 30.351801,
    "lon": -95.414497,
    "elevation": 245
  },
  {
    "icao": "KCYS",
    "iata": "CYS",
    "name": "Cheyenne Regional Jerry Olson Field",
    "city": "Cheyenne",
    "country": "US",
    "lat": 41.155701,
    "lon": -104.811997,
    "elevation": 6159
  },
  {
    "icao": "KDAA",
    "iata": "DAA",
    "name": "Davison Army Air Field",
    "city": "Fort Belvoir",
    "country": "US",
    "lat": 38.715000152600005,
    "lon": -77.1809997559,
    "elevation": 73
  },
  {
    "icao": "KDAB",
    "iata": "DAB",
    "name": "Daytona Beach International Airport",
    "city": "Daytona Beach",
    "country": "US",
    "lat": 29.179899,
    "lon": -81.058098,
    "elevation": 34
  },
  {
    "icao": "KDAG",
    "iata": "DAG",
    "name": "Barstow Daggett Airport",
    "city": "Daggett",
    "country": "US",
    "lat": 34.85369873,
    "lon": -116.7870026,
    "elevation": 1930
  },
  {
    "icao": "KDAL",
    "iata": "DAL",
    "name": "Dallas Love Field",
    "city": "Dallas",
    "country": "US",
    "lat": 32.847099,
    "lon": -96.851799,
    "elevation": 487
  },
  {
    "icao": "KDAN",
    "iata": "DAN",
    "name": "Danville Regional Airport",
    "city": "Danville",
    "country": "US",
    "lat": 36.572899,
    "lon": -79.336098,
    "elevation": 571
  },
  {
    "icao": "KDAY",
    "iata": "DAY",
    "name": "James M Cox Dayton International Airport",
    "city": "Dayton",
    "country": "US",
    "lat": 39.902401,
    "lon": -84.219398,
    "elevation": 1009
  },
  {
    "icao": "KDBQ",
    "iata": "DBQ",
    "name": "Dubuque Regional Airport",
    "city": "Dubuque",
    "country": "US",
    "lat": 42.402,
    "lon": -90.709503,
    "elevation": 1077
  },
  {
    "icao": "KDCA",
    "iata": "DCA",
    "name": "Ronald Reagan Washington National Airport",
    "city": "Washington",
    "country": "US",
    "lat": 38.8521,
    "lon": -77.037697,
    "elevation": 15
  },
  {
    "icao": "KDDC",
    "iata": "DDC",
    "name": "Dodge City Regional Airport",
    "city": "Dodge City",
    "country": "US",
    "lat": 37.76340103149414,
    "lon": -99.9655990600586,
    "elevation": 2594
  },
  {
    "icao": "KDEC",
    "iata": "DEC",
    "name": "Decatur Airport",
    "city": "Decatur",
    "country": "US",
    "lat": 39.834598541259766,
    "lon": -88.8656997680664,
    "elevation": 682
  },
  {
    "icao": "KDEN",
    "iata": "DEN",
    "name": "Denver International Airport",
    "city": "Denver",
    "country": "US",
    "lat": 39.861698150635,
    "lon": -104.672996521,
    "elevation": 5431
  },
  {
    "icao": "KDET",
    "iata": "DET",
    "name": "Coleman A. Young Municipal Airport",
    "city": "Detroit",
    "country": "US",
    "lat": 42.40919876,
    "lon": -83.00990295,
    "elevation": 626
  },
  {
    "icao": "KDFW",
    "iata": "DFW",
    "name": "Dallas Fort Worth International Airport",
    "city": "Dallas-Fort Worth",
    "country": "US",
    "lat": 32.896801,
    "lon": -97.038002,
    "elevation": 607
  },
  {
    "icao": "KDHN",
    "iata": "DHN",
    "name": "Dothan Regional Airport",
    "city": "Dothan",
    "country": "US",
    "lat": 31.321300506591797,
    "lon": -85.44960021972656,
    "elevation": 401
  },
  {
    "icao": "KDHT",
    "iata": "DHT",
    "name": "Dalhart Municipal Airport",
    "city": "Dalhart",
    "country": "US",
    "lat": 36.0225982666,
    "lon": -102.54699707,
    "elevation": 3991
  },
  {
    "icao": "KDIK",
    "iata": "DIK",
    "name": "Dickinson Theodore Roosevelt Regional Airport",
    "city": "Dickinson",
    "country": "US",
    "lat": 46.797533,
    "lon": -102.801905,
    "elevation": 2592
  },
  {
    "icao": "KDLF",
    "iata": "DLF",
    "name": "Laughlin Air Force Base",
    "city": "Del Rio",
    "country": "US",
    "lat": 29.359501,
    "lon": -100.778002,
    "elevation": 1082
  },
  {
    "icao": "KDLH",
    "iata": "DLH",
    "name": "Duluth International Airport",
    "city": "Duluth",
    "country": "US",
    "lat": 46.842098,
    "lon": -92.193604,
    "elevation": 1428
  },
  {
    "icao": "KDLS",
    "iata": "DLS",
    "name": "Columbia Gorge Regional Airport",
    "city": "Dallesport / The Dalles",
    "country": "US",
    "lat": 45.620979,
    "lon": -121.170777,
    "elevation": 247
  },
  {
    "icao": "KDMA",
    "iata": "DMA",
    "name": "Davis Monthan Air Force Base",
    "city": "Tucson",
    "country": "US",
    "lat": 32.1665000916,
    "lon": -110.883003235,
    "elevation": 2704
  },
  {
    "icao": "KDMN",
    "iata": "DMN",
    "name": "Deming Municipal Airport",
    "city": "Deming",
    "country": "US",
    "lat": 32.262298584,
    "lon": -107.721000671,
    "elevation": 4314
  },
  {
    "icao": "KDNL",
    "iata": "DNL",
    "name": "Daniel Field",
    "city": "Augusta",
    "country": "US",
    "lat": 33.4664993286,
    "lon": -82.0393981934,
    "elevation": 423
  },
  {
    "icao": "KDOV",
    "iata": "DOV",
    "name": "Dover Air Force Base",
    "city": "Dover",
    "country": "US",
    "lat": 39.129501,
    "lon": -75.466003,
    "elevation": 24
  },
  {
    "icao": "KDPA",
    "iata": "DPA",
    "name": "Dupage Airport",
    "city": "Chicago/West Chicago",
    "country": "US",
    "lat": 41.90779877,
    "lon": -88.24859619,
    "elevation": 759
  },
  {
    "icao": "KDRA",
    "iata": "DRA",
    "name": "Desert Rock Airport",
    "city": "Mercury",
    "country": "US",
    "lat": 36.6194,
    "lon": -116.032997,
    "elevation": 3314
  },
  {
    "icao": "KDRI",
    "iata": "DRI",
    "name": "Beauregard Regional Airport",
    "city": "DeRidder",
    "country": "US",
    "lat": 30.831699,
    "lon": -93.339897,
    "elevation": 202
  },
  {
    "icao": "KDRO",
    "iata": "DRO",
    "name": "Durango La Plata County Airport",
    "city": "Durango",
    "country": "US",
    "lat": 37.151501,
    "lon": -107.753998,
    "elevation": 6685
  },
  {
    "icao": "KDRT",
    "iata": "DRT",
    "name": "Del Rio International Airport",
    "city": "Del Rio",
    "country": "US",
    "lat": 29.3742008209,
    "lon": -100.927001953,
    "elevation": 1002
  },
  {
    "icao": "KDSM",
    "iata": "DSM",
    "name": "Des Moines International Airport",
    "city": "Des Moines",
    "country": "US",
    "lat": 41.534,
    "lon": -93.663101,
    "elevation": 958
  },
  {
    "icao": "KDTS",
    "iata": "DSI",
    "name": "Destin Executive Airport",
    "city": "Destin",
    "country": "US",
    "lat": 30.400101,
    "lon": -86.471497,
    "elevation": 23
  },
  {
    "icao": "KDTW",
    "iata": "DTW",
    "name": "Detroit Metropolitan Wayne County Airport",
    "city": "Detroit",
    "country": "US",
    "lat": 42.21377,
    "lon": -83.353786,
    "elevation": 645
  },
  {
    "icao": "KDUA",
    "iata": "DUA",
    "name": "Durant Regional Airport - Eaker Field",
    "city": "Durant",
    "country": "US",
    "lat": 33.939675,
    "lon": -96.395072,
    "elevation": 699
  },
  {
    "icao": "KDUG",
    "iata": "DUG",
    "name": "Bisbee Douglas International Airport",
    "city": "Douglas Bisbee",
    "country": "US",
    "lat": 31.4689998627,
    "lon": -109.603996277,
    "elevation": 4154
  },
  {
    "icao": "KDUJ",
    "iata": "DUJ",
    "name": "DuBois Regional Airport",
    "city": "Dubois",
    "country": "US",
    "lat": 41.17829895,
    "lon": -78.8986969,
    "elevation": 1817
  },
  {
    "icao": "KDVL",
    "iata": "DVL",
    "name": "Devils Lake Regional Airport",
    "city": "Devils Lake",
    "country": "US",
    "lat": 48.115454,
    "lon": -98.908796,
    "elevation": 1456
  },
  {
    "icao": "KDXR",
    "iata": "DXR",
    "name": "Danbury Municipal Airport",
    "city": "Danbury",
    "country": "US",
    "lat": 41.371656,
    "lon": -73.482227,
    "elevation": 458
  },
  {
    "icao": "KDYS",
    "iata": "DYS",
    "name": "Dyess Air Force Base",
    "city": "Abilene",
    "country": "US",
    "lat": 32.420799,
    "lon": -99.854599,
    "elevation": 1789
  },
  {
    "icao": "KEAR",
    "iata": "EAR",
    "name": "Kearney Regional Airport",
    "city": "Kearney",
    "country": "US",
    "lat": 40.727001,
    "lon": -99.006798,
    "elevation": 2131
  },
  {
    "icao": "KEAT",
    "iata": "EAT",
    "name": "Pangborn Memorial Airport",
    "city": "Wenatchee",
    "country": "US",
    "lat": 47.398899,
    "lon": -120.207001,
    "elevation": 1249
  },
  {
    "icao": "KEAU",
    "iata": "EAU",
    "name": "Chippewa Valley Regional Airport",
    "city": "Eau Claire",
    "country": "US",
    "lat": 44.86579895019531,
    "lon": -91.48429870605469,
    "elevation": 913
  },
  {
    "icao": "KECG",
    "iata": "ECG",
    "name": "Elizabeth City Regional Airport & Coast Guard Air Station",
    "city": "Elizabeth City",
    "country": "US",
    "lat": 36.260601,
    "lon": -76.174599,
    "elevation": 11
  },
  {
    "icao": "KECP",
    "iata": "ECP",
    "name": "Northwest Florida Beaches International Airport",
    "city": "Panama City Beach",
    "country": "US",
    "lat": 30.357106,
    "lon": -85.795414,
    "elevation": 69
  },
  {
    "icao": "KEDW",
    "iata": "EDW",
    "name": "Edwards Air Force Base",
    "city": "Edwards",
    "country": "US",
    "lat": 34.910781,
    "lon": -117.886391,
    "elevation": 2312
  },
  {
    "icao": "KEED",
    "iata": "EED",
    "name": "Needles Airport",
    "city": "Needles",
    "country": "US",
    "lat": 34.7663002014,
    "lon": -114.623001099,
    "elevation": 983
  },
  {
    "icao": "KEEN",
    "iata": "EEN",
    "name": "Dillant Hopkins Airport",
    "city": "Keene",
    "country": "US",
    "lat": 42.898399,
    "lon": -72.270798,
    "elevation": 488
  },
  {
    "icao": "KEFD",
    "iata": "EFD",
    "name": "Ellington Airport",
    "city": "Houston",
    "country": "US",
    "lat": 29.607299804700002,
    "lon": -95.1587982178,
    "elevation": 32
  },
  {
    "icao": "KEGE",
    "iata": "EGE",
    "name": "Eagle County Regional Airport",
    "city": "Eagle",
    "country": "US",
    "lat": 39.64260101,
    "lon": -106.9179993,
    "elevation": 6548
  },
  {
    "icao": "KEGI",
    "iata": "EGI",
    "name": "Duke Field",
    "city": "Crestview",
    "country": "US",
    "lat": 30.65040016,
    "lon": -86.52290344,
    "elevation": 191
  },
  {
    "icao": "KEKA",
    "iata": "EKA",
    "name": "Murray Field",
    "city": "Eureka",
    "country": "US",
    "lat": 40.803398,
    "lon": -124.112999,
    "elevation": 7
  },
  {
    "icao": "KEKN",
    "iata": "EKN",
    "name": "Elkins-Randolph County Regional Airport",
    "city": "Elkins",
    "country": "US",
    "lat": 38.889759,
    "lon": -79.857651,
    "elevation": 1987
  },
  {
    "icao": "KEKO",
    "iata": "EKO",
    "name": "Elko Regional Airport",
    "city": "Elko",
    "country": "US",
    "lat": 40.82490158081055,
    "lon": -115.79199981689453,
    "elevation": 5140
  },
  {
    "icao": "KELD",
    "iata": "ELD",
    "name": "South Arkansas Regional Airport at Goodwin Field",
    "city": "El Dorado",
    "country": "US",
    "lat": 33.221001,
    "lon": -92.813301,
    "elevation": 277
  },
  {
    "icao": "KELM",
    "iata": "ELM",
    "name": "Elmira Corning Regional Airport",
    "city": "Elmira/Corning",
    "country": "US",
    "lat": 42.1599006652832,
    "lon": -76.8916015625,
    "elevation": 954
  },
  {
    "icao": "KELO",
    "iata": "LYU",
    "name": "Ely Municipal Airport",
    "city": "Ely",
    "country": "US",
    "lat": 47.82450104,
    "lon": -91.83070374,
    "elevation": 1456
  },
  {
    "icao": "KELP",
    "iata": "ELP",
    "name": "El Paso International Airport",
    "city": "El Paso",
    "country": "US",
    "lat": 31.807199,
    "lon": -106.377998,
    "elevation": 3959
  },
  {
    "icao": "KELY",
    "iata": "ELY",
    "name": "Ely Airport Yelland Field",
    "city": "Ely",
    "country": "US",
    "lat": 39.29970169,
    "lon": -114.8420029,
    "elevation": 6259
  },
  {
    "icao": "KEND",
    "iata": "END",
    "name": "Vance Air Force Base",
    "city": "Enid",
    "country": "US",
    "lat": 36.339199,
    "lon": -97.916496,
    "elevation": 1307
  },
  {
    "icao": "KENV",
    "iata": "ENV",
    "name": "Wendover Airport",
    "city": "Wendover",
    "country": "US",
    "lat": 40.7187004089,
    "lon": -114.03099823,
    "elevation": 4237
  },
  {
    "icao": "KENW",
    "iata": "ENW",
    "name": "Kenosha Regional Airport",
    "city": "Kenosha",
    "country": "US",
    "lat": 42.59569931,
    "lon": -87.92780304,
    "elevation": 742
  },
  {
    "icao": "KERI",
    "iata": "ERI",
    "name": "Erie International Tom Ridge Field",
    "city": "Erie",
    "country": "US",
    "lat": 42.083127,
    "lon": -80.173867,
    "elevation": 732
  },
  {
    "icao": "KESC",
    "iata": "ESC",
    "name": "Delta County Airport",
    "city": "Escanaba",
    "country": "US",
    "lat": 45.723199,
    "lon": -87.088623,
    "elevation": 609
  },
  {
    "icao": "KESF",
    "iata": "ESF",
    "name": "Esler Army Airfield / Esler Regional Airport",
    "city": "Alexandria",
    "country": "US",
    "lat": 31.394266,
    "lon": -92.294082,
    "elevation": 112
  },
  {
    "icao": "KEUG",
    "iata": "EUG",
    "name": "Mahlon Sweet Field",
    "city": "Eugene",
    "country": "US",
    "lat": 44.12459945678711,
    "lon": -123.21199798583984,
    "elevation": 374
  },
  {
    "icao": "KEVV",
    "iata": "EVV",
    "name": "Evansville Regional Airport",
    "city": "Evansville",
    "country": "US",
    "lat": 38.0369987488,
    "lon": -87.5324020386,
    "elevation": 418
  },
  {
    "icao": "KEVW",
    "iata": "EVW",
    "name": "Evanston-Uinta County Airport-Burns Field",
    "city": "Evanston",
    "country": "US",
    "lat": 41.27479935,
    "lon": -111.0350037,
    "elevation": 7143
  },
  {
    "icao": "KEWB",
    "iata": "EWB",
    "name": "New Bedford Regional Airport",
    "city": "New Bedford",
    "country": "US",
    "lat": 41.67610168457031,
    "lon": -70.95690155029297,
    "elevation": 80
  },
  {
    "icao": "KEWN",
    "iata": "EWN",
    "name": "Coastal Carolina Regional Airport",
    "city": "New Bern",
    "country": "US",
    "lat": 35.0730018616,
    "lon": -77.04290008539999,
    "elevation": 18
  },
  {
    "icao": "KEWR",
    "iata": "EWR",
    "name": "Newark Liberty International Airport",
    "city": "Newark",
    "country": "US",
    "lat": 40.692501,
    "lon": -74.168701,
    "elevation": 18
  },
  {
    "icao": "KEYW",
    "iata": "EYW",
    "name": "Key West International Airport",
    "city": "Key West",
    "country": "US",
    "lat": 24.556101,
    "lon": -81.759598,
    "elevation": 3
  },
  {
    "icao": "KFAF",
    "iata": "FAF",
    "name": "Felker Army Air Field",
    "city": "Newport News (Fort Eustis)",
    "country": "US",
    "lat": 37.1325,
    "lon": -76.608803,
    "elevation": 12
  },
  {
    "icao": "KFAR",
    "iata": "FAR",
    "name": "Hector International Airport",
    "city": "Fargo",
    "country": "US",
    "lat": 46.92070007324219,
    "lon": -96.81580352783203,
    "elevation": 902
  },
  {
    "icao": "KFAT",
    "iata": "FAT",
    "name": "Fresno Yosemite International Airport",
    "city": "Fresno",
    "country": "US",
    "lat": 36.776199,
    "lon": -119.718002,
    "elevation": 336
  },
  {
    "icao": "KFAY",
    "iata": "FAY",
    "name": "Fayetteville Regional Airport - Grannis Field",
    "city": "Fayetteville",
    "country": "US",
    "lat": 34.991199,
    "lon": -78.880302,
    "elevation": 189
  },
  {
    "icao": "KFBG",
    "iata": "FBG",
    "name": "Simmons Army Air Field",
    "city": "Fort Bragg",
    "country": "US",
    "lat": 35.13180161,
    "lon": -78.93669891,
    "elevation": 244
  },
  {
    "icao": "KFCS",
    "iata": "FCS",
    "name": "Butts AAF (Fort Carson) Air Field",
    "city": "Fort Carson",
    "country": "US",
    "lat": 38.67839813,
    "lon": -104.7570038,
    "elevation": 5838
  },
  {
    "icao": "KFDY",
    "iata": "FDY",
    "name": "Findlay Airport",
    "city": "Findlay",
    "country": "US",
    "lat": 41.013500213600004,
    "lon": -83.66870117190001,
    "elevation": 813
  },
  {
    "icao": "KFFO",
    "iata": "FFO",
    "name": "Wright-Patterson Air Force Base",
    "city": "Dayton",
    "country": "US",
    "lat": 39.826099,
    "lon": -84.048302,
    "elevation": 823
  },
  {
    "icao": "KFHR",
    "iata": "FRD",
    "name": "Friday Harbor Airport",
    "city": "Friday Harbor",
    "country": "US",
    "lat": 48.523654,
    "lon": -123.024645,
    "elevation": 113
  },
  {
    "icao": "KFHU",
    "iata": "FHU",
    "name": "Sierra Vista Municipal Airport / Libby Army Air Field",
    "city": "Fort Huachuca / Sierra Vista",
    "country": "US",
    "lat": 31.587383,
    "lon": -110.348225,
    "elevation": 4719
  },
  {
    "icao": "KFKL",
    "iata": "FKL",
    "name": "Venango Regional Airport",
    "city": "Franklin",
    "country": "US",
    "lat": 41.3778991699,
    "lon": -79.8603973389,
    "elevation": 1540
  },
  {
    "icao": "KFLG",
    "iata": "FLG",
    "name": "Flagstaff Pulliam International Airport",
    "city": "Flagstaff",
    "country": "US",
    "lat": 35.1385,
    "lon": -111.670998,
    "elevation": 7014
  },
  {
    "icao": "KFLL",
    "iata": "FLL",
    "name": "Fort Lauderdale Hollywood International Airport",
    "city": "Fort Lauderdale",
    "country": "US",
    "lat": 26.072599,
    "lon": -80.152702,
    "elevation": 9
  },
  {
    "icao": "KFLO",
    "iata": "FLO",
    "name": "Florence Regional Airport",
    "city": "Florence",
    "country": "US",
    "lat": 34.18539810180664,
    "lon": -79.7238998413086,
    "elevation": 146
  },
  {
    "icao": "KFME",
    "iata": "FME",
    "name": "Tipton Airport",
    "city": "Fort Meade(Odenton)",
    "country": "US",
    "lat": 39.08539962769999,
    "lon": -76.7593994141,
    "elevation": 150
  },
  {
    "icao": "KFMN",
    "iata": "FMN",
    "name": "Four Corners Regional Airport",
    "city": "Farmington",
    "country": "US",
    "lat": 36.741199,
    "lon": -108.230003,
    "elevation": 5506
  },
  {
    "icao": "KFMY",
    "iata": "FMY",
    "name": "Page Field",
    "city": "Fort Myers",
    "country": "US",
    "lat": 26.58659935,
    "lon": -81.86329650879999,
    "elevation": 17
  },
  {
    "icao": "KFNL",
    "iata": "FNL",
    "name": "Northern Colorado Regional Airport",
    "city": "Loveland",
    "country": "US",
    "lat": 40.44969,
    "lon": -105.011272,
    "elevation": 5016
  },
  {
    "icao": "KFNT",
    "iata": "FNT",
    "name": "Bishop International Airport",
    "city": "Flint",
    "country": "US",
    "lat": 42.96540069580078,
    "lon": -83.74359893798828,
    "elevation": 782
  },
  {
    "icao": "KFOD",
    "iata": "FOD",
    "name": "Fort Dodge Regional Airport",
    "city": "Fort Dodge",
    "country": "US",
    "lat": 42.552624,
    "lon": -94.191237,
    "elevation": 1156
  },
  {
    "icao": "KFOE",
    "iata": "FOE",
    "name": "Topeka Regional Airport",
    "city": "Topeka",
    "country": "US",
    "lat": 38.950901,
    "lon": -95.663597,
    "elevation": 1078
  },
  {
    "icao": "KFPR",
    "iata": "FPR",
    "name": "St Lucie County International Airport",
    "city": "Fort Pierce",
    "country": "US",
    "lat": 27.49510002,
    "lon": -80.36830139,
    "elevation": 24
  },
  {
    "icao": "KFRG",
    "iata": "FRG",
    "name": "Republic Airport",
    "city": "Farmingdale",
    "country": "US",
    "lat": 40.7288017273,
    "lon": -73.4133987427,
    "elevation": 82
  },
  {
    "icao": "KFRI",
    "iata": "FRI",
    "name": "Marshall Army Air Field",
    "city": "Fort Riley (Junction City)",
    "country": "US",
    "lat": 39.053021,
    "lon": -96.764202,
    "elevation": 1065
  },
  {
    "icao": "KFSD",
    "iata": "FSD",
    "name": "Sioux Falls Regional Airport / Joe Foss Field",
    "city": "Sioux Falls",
    "country": "US",
    "lat": 43.585463,
    "lon": -96.741152,
    "elevation": 1429
  },
  {
    "icao": "KFSI",
    "iata": "FSI",
    "name": "Henry Post Army Air Field",
    "city": "Fort Sill",
    "country": "US",
    "lat": 34.649799,
    "lon": -98.402199,
    "elevation": 1189
  },
  {
    "icao": "KFSM",
    "iata": "FSM",
    "name": "Fort Smith Regional Airport",
    "city": "Fort Smith",
    "country": "US",
    "lat": 35.336601,
    "lon": -94.367401,
    "elevation": 469
  },
  {
    "icao": "KFST",
    "iata": "FST",
    "name": "Fort Stockton Pecos County Airport",
    "city": "Fort Stockton",
    "country": "US",
    "lat": 30.9157009125,
    "lon": -102.916000366,
    "elevation": 3011
  },
  {
    "icao": "KFTK",
    "iata": "FTK",
    "name": "Godman Army Air Field",
    "city": "Fort Knox",
    "country": "US",
    "lat": 37.907100677500004,
    "lon": -85.9720993042,
    "elevation": 756
  },
  {
    "icao": "KFTW",
    "iata": "FTW",
    "name": "Fort Worth Meacham International Airport",
    "city": "Fort Worth",
    "country": "US",
    "lat": 32.819801,
    "lon": -97.362396,
    "elevation": 710
  },
  {
    "icao": "KFTY",
    "iata": "FTY",
    "name": "Fulton County Airport Brown Field",
    "city": "Atlanta",
    "country": "US",
    "lat": 33.7790985107,
    "lon": -84.5214004517,
    "elevation": 841
  },
  {
    "icao": "KFWA",
    "iata": "FWA",
    "name": "Fort Wayne International Airport",
    "city": "Fort Wayne",
    "country": "US",
    "lat": 40.9785,
    "lon": -85.195099,
    "elevation": 814
  },
  {
    "icao": "KFXE",
    "iata": "FXE",
    "name": "Fort Lauderdale Executive Airport",
    "city": "Fort Lauderdale",
    "country": "US",
    "lat": 26.1972999573,
    "lon": -80.1707000732,
    "elevation": 13
  },
  {
    "icao": "KFYV",
    "iata": "FYV",
    "name": "Drake Field",
    "city": "Fayetteville",
    "country": "US",
    "lat": 36.00510025024414,
    "lon": -94.17009735107422,
    "elevation": 1251
  },
  {
    "icao": "KGCC",
    "iata": "GCC",
    "name": "Northeast Wyoming Regional Airport",
    "city": "Gillette",
    "country": "US",
    "lat": 44.3489,
    "lon": -105.539001,
    "elevation": 4365
  },
  {
    "icao": "KGCK",
    "iata": "GCK",
    "name": "Garden City Regional Airport",
    "city": "Garden City",
    "country": "US",
    "lat": 37.9275016785,
    "lon": -100.723999023,
    "elevation": 2891
  },
  {
    "icao": "KGCN",
    "iata": "GCN",
    "name": "Grand Canyon National Park Airport",
    "city": "Grand Canyon - Tusayan",
    "country": "US",
    "lat": 35.9524,
    "lon": -112.147003,
    "elevation": 6609
  },
  {
    "icao": "KGDV",
    "iata": "GDV",
    "name": "Dawson Community Airport",
    "city": "Glendive",
    "country": "US",
    "lat": 47.137658,
    "lon": -104.80691,
    "elevation": 2458
  },
  {
    "icao": "KGEG",
    "iata": "GEG",
    "name": "Spokane International Airport",
    "city": "Spokane",
    "country": "US",
    "lat": 47.6199,
    "lon": -117.533997,
    "elevation": 2376
  },
  {
    "icao": "KGFK",
    "iata": "GFK",
    "name": "Grand Forks International Airport",
    "city": "Grand Forks",
    "country": "US",
    "lat": 47.949299,
    "lon": -97.176102,
    "elevation": 845
  },
  {
    "icao": "KGFL",
    "iata": "GFL",
    "name": "Floyd Bennett Memorial Airport",
    "city": "Glens Falls",
    "country": "US",
    "lat": 43.3412017822,
    "lon": -73.6102981567,
    "elevation": 328
  },
  {
    "icao": "KGGG",
    "iata": "GGG",
    "name": "East Texas Regional Airport",
    "city": "Longview",
    "country": "US",
    "lat": 32.38399887084961,
    "lon": -94.71150207519531,
    "elevation": 365
  },
  {
    "icao": "KGGW",
    "iata": "GGW",
    "name": "Glasgow Valley County Airport Wokal Field",
    "city": "Glasgow",
    "country": "US",
    "lat": 48.212502,
    "lon": -106.614998,
    "elevation": 2296
  },
  {
    "icao": "KGJT",
    "iata": "GJT",
    "name": "Grand Junction Regional Airport",
    "city": "Grand Junction",
    "country": "US",
    "lat": 39.126663,
    "lon": -108.529387,
    "elevation": 4858
  },
  {
    "icao": "KGLD",
    "iata": "GLD",
    "name": "Goodland Municipal Airport",
    "city": "Goodland",
    "country": "US",
    "lat": 39.370701,
    "lon": -101.699753,
    "elevation": 3656
  },
  {
    "icao": "KGLH",
    "iata": "GLH",
    "name": "Mid Delta Regional Airport",
    "city": "Greenville",
    "country": "US",
    "lat": 33.482899,
    "lon": -90.985603,
    "elevation": 131
  },
  {
    "icao": "KGLS",
    "iata": "GLS",
    "name": "Scholes International At Galveston Airport",
    "city": "Galveston",
    "country": "US",
    "lat": 29.265301,
    "lon": -94.860397,
    "elevation": 6
  },
  {
    "icao": "KGMU",
    "iata": "GMU",
    "name": "Greenville Downtown Airport",
    "city": "Greenville",
    "country": "US",
    "lat": 34.847903,
    "lon": -82.350217,
    "elevation": 1048
  },
  {
    "icao": "KGNV",
    "iata": "GNV",
    "name": "Gainesville Regional Airport",
    "city": "Gainesville",
    "country": "US",
    "lat": 29.6900997162,
    "lon": -82.2717971802,
    "elevation": 152
  },
  {
    "icao": "KGON",
    "iata": "GON",
    "name": "Groton New London Airport",
    "city": "Groton",
    "country": "US",
    "lat": 41.330101,
    "lon": -72.045097,
    "elevation": 9
  },
  {
    "icao": "KGPI",
    "iata": "FCA",
    "name": "Glacier Park International Airport",
    "city": "Kalispell",
    "country": "US",
    "lat": 48.31050109863281,
    "lon": -114.25599670410156,
    "elevation": 2977
  },
  {
    "icao": "KGPT",
    "iata": "GPT",
    "name": "Gulfport Biloxi International Airport",
    "city": "Gulfport",
    "country": "US",
    "lat": 30.407301,
    "lon": -89.070099,
    "elevation": 28
  },
  {
    "icao": "KGRB",
    "iata": "GRB",
    "name": "Austin Straubel International Airport",
    "city": "Green Bay",
    "country": "US",
    "lat": 44.483459,
    "lon": -88.130805,
    "elevation": 695
  },
  {
    "icao": "KGRF",
    "iata": "GRF",
    "name": "Gray Army Air Field",
    "city": "Fort Lewis/Tacoma",
    "country": "US",
    "lat": 47.07920074,
    "lon": -122.5810013,
    "elevation": 300
  },
  {
    "icao": "KGRI",
    "iata": "GRI",
    "name": "Central Nebraska Regional Airport",
    "city": "Grand Island",
    "country": "US",
    "lat": 40.967498779296875,
    "lon": -98.30960083007812,
    "elevation": 1847
  },
  {
    "icao": "KGRK",
    "iata": "GRK",
    "name": "Killeen Regional Airport / Robert Gray Army Airfield",
    "city": "Fort Cavazos",
    "country": "US",
    "lat": 31.0672,
    "lon": -97.828903,
    "elevation": 1015
  },
  {
    "icao": "KGRR",
    "iata": "GRR",
    "name": "Gerald R. Ford International Airport",
    "city": "Grand Rapids",
    "country": "US",
    "lat": 42.88079834,
    "lon": -85.52279663,
    "elevation": 794
  },
  {
    "icao": "KGSB",
    "iata": "GSB",
    "name": "Seymour Johnson Air Force Base",
    "city": "Goldsboro",
    "country": "US",
    "lat": 35.339401,
    "lon": -77.960602,
    "elevation": 109
  },
  {
    "icao": "KGSO",
    "iata": "GSO",
    "name": "Piedmont Triad International Airport",
    "city": "Greensboro",
    "country": "US",
    "lat": 36.097801,
    "lon": -79.937302,
    "elevation": 925
  },
  {
    "icao": "KGSP",
    "iata": "GSP",
    "name": "Greenville Spartanburg International Airport",
    "city": "Greer",
    "country": "US",
    "lat": 34.895699,
    "lon": -82.218903,
    "elevation": 964
  },
  {
    "icao": "KGTF",
    "iata": "GTF",
    "name": "Great Falls International Airport",
    "city": "Great Falls",
    "country": "US",
    "lat": 47.48199844,
    "lon": -111.3710022,
    "elevation": 3680
  },
  {
    "icao": "KGTR",
    "iata": "GTR",
    "name": "Golden Triangle Regional Airport",
    "city": "Columbus/W Point/Starkville",
    "country": "US",
    "lat": 33.450298,
    "lon": -88.5914,
    "elevation": 264
  },
  {
    "icao": "KGUC",
    "iata": "GUC",
    "name": "Gunnison Crested Butte Regional Airport",
    "city": "Gunnison",
    "country": "US",
    "lat": 38.534672,
    "lon": -106.934566,
    "elevation": 7680
  },
  {
    "icao": "KGUP",
    "iata": "GUP",
    "name": "Gallup Municipal Airport",
    "city": "Gallup",
    "country": "US",
    "lat": 35.511653,
    "lon": -108.788166,
    "elevation": 6472
  },
  {
    "icao": "KGUS",
    "iata": "GUS",
    "name": "Grissom Air Reserve Base",
    "city": "Peru",
    "country": "US",
    "lat": 40.648102,
    "lon": -86.1521,
    "elevation": 812
  },
  {
    "icao": "KGUY",
    "iata": "GUY",
    "name": "Guymon Municipal Airport",
    "city": "Guymon",
    "country": "US",
    "lat": 36.6851005554,
    "lon": -101.508003235,
    "elevation": 3123
  },
  {
    "icao": "KGWO",
    "iata": "GWO",
    "name": "Greenwood–Leflore Airport",
    "city": "Greenwood",
    "country": "US",
    "lat": 33.495025,
    "lon": -90.088204,
    "elevation": 162
  },
  {
    "icao": "KGYI",
    "iata": "PNX",
    "name": "North Texas Regional Airport Perrin Field",
    "city": "Denison",
    "country": "US",
    "lat": 33.7141,
    "lon": -96.673698,
    "elevation": 749
  },
  {
    "icao": "KGYY",
    "iata": "GYY",
    "name": "Gary Chicago International Airport",
    "city": "Gary",
    "country": "US",
    "lat": 41.61629867553711,
    "lon": -87.41280364990234,
    "elevation": 591
  },
  {
    "icao": "VDTI",
    "iata": "KTI",
    "name": "Techo International Airport",
    "city": "Phnom Penh (Boeng Khyang)",
    "country": "KH",
    "lat": 11.359987,
    "lon": 104.921272,
    "elevation": 20
  },
  {
    "icao": "KHBG",
    "iata": "HBG",
    "name": "Hattiesburg Bobby L Chain Municipal Airport",
    "city": "Hattiesburg",
    "country": "US",
    "lat": 31.26479912,
    "lon": -89.25279999,
    "elevation": 151
  },
  {
    "icao": "KHBR",
    "iata": "HBR",
    "name": "Hobart Regional Airport",
    "city": "Hobart",
    "country": "US",
    "lat": 34.991317,
    "lon": -99.051313,
    "elevation": 1563
  },
  {
    "icao": "KHDN",
    "iata": "HDN",
    "name": "Yampa Valley Airport",
    "city": "Hayden",
    "country": "US",
    "lat": 40.481201,
    "lon": -107.218002,
    "elevation": 6606
  },
  {
    "icao": "KHEF",
    "iata": "MNZ",
    "name": "Manassas Regional Airport/Harry P. Davis Field",
    "city": "Manassas",
    "country": "US",
    "lat": 38.721401,
    "lon": -77.515404,
    "elevation": 192
  },
  {
    "icao": "KHFD",
    "iata": "HFD",
    "name": "Hartford Brainard Airport",
    "city": "Hartford",
    "country": "US",
    "lat": 41.736698150635,
    "lon": -72.649398803711,
    "elevation": 18
  },
  {
    "icao": "KHGR",
    "iata": "HGR",
    "name": "Hagerstown Regional Richard A Henson Field",
    "city": "Hagerstown",
    "country": "US",
    "lat": 39.708771,
    "lon": -77.728014,
    "elevation": 703
  },
  {
    "icao": "KHHR",
    "iata": "HHR",
    "name": "Jack Northrop Field Hawthorne Municipal Airport",
    "city": "Hawthorne",
    "country": "US",
    "lat": 33.922798,
    "lon": -118.334999,
    "elevation": 66
  },
  {
    "icao": "KHIB",
    "iata": "HIB",
    "name": "Range Regional Airport",
    "city": "Hibbing",
    "country": "US",
    "lat": 47.384831,
    "lon": -92.836905,
    "elevation": 1354
  },
  {
    "icao": "KHIF",
    "iata": "HIF",
    "name": "Hill Air Force Base",
    "city": "Ogden",
    "country": "US",
    "lat": 41.12403,
    "lon": -111.973086,
    "elevation": 4789
  },
  {
    "icao": "KHII",
    "iata": "HII",
    "name": "Lake Havasu City International Airport",
    "city": "Lake Havasu City",
    "country": "US",
    "lat": 34.571098,
    "lon": -114.358002,
    "elevation": 783
  },
  {
    "icao": "KHIO",
    "iata": "HIO",
    "name": "Portland Hillsboro Airport",
    "city": "Portland",
    "country": "US",
    "lat": 45.540401,
    "lon": -122.949997,
    "elevation": 208
  },
  {
    "icao": "KHKY",
    "iata": "HKY",
    "name": "Hickory Regional Airport",
    "city": "Hickory",
    "country": "US",
    "lat": 35.74110031,
    "lon": -81.38950348,
    "elevation": 1190
  },
  {
    "icao": "KHLG",
    "iata": "HLG",
    "name": "Wheeling Ohio County Airport",
    "city": "Wheeling",
    "country": "US",
    "lat": 40.1749992371,
    "lon": -80.6463012695,
    "elevation": 1195
  },
  {
    "icao": "KHLN",
    "iata": "HLN",
    "name": "Helena Regional Airport",
    "city": "Helena",
    "country": "US",
    "lat": 46.6068,
    "lon": -111.983002,
    "elevation": 3877
  },
  {
    "icao": "KHMN",
    "iata": "HMN",
    "name": "Holloman Air Force Base",
    "city": "Alamogordo",
    "country": "US",
    "lat": 32.852501,
    "lon": -106.107002,
    "elevation": 4093
  },
  {
    "icao": "KHOB",
    "iata": "HOB",
    "name": "Lea County Regional Airport",
    "city": "Hobbs",
    "country": "US",
    "lat": 32.6875,
    "lon": -103.217003,
    "elevation": 3661
  },
  {
    "icao": "KHON",
    "iata": "HON",
    "name": "Huron Regional Airport",
    "city": "Huron",
    "country": "US",
    "lat": 44.385201,
    "lon": -98.2285,
    "elevation": 1289
  },
  {
    "icao": "KHOP",
    "iata": "HOP",
    "name": "Campbell Army Airfield (Fort Campbell)",
    "city": "Fort Campbell",
    "country": "US",
    "lat": 36.674154,
    "lon": -87.48974,
    "elevation": 573
  },
  {
    "icao": "KHOT",
    "iata": "HOT",
    "name": "Memorial Field Airport",
    "city": "Hot Springs",
    "country": "US",
    "lat": 34.4788,
    "lon": -93.096262,
    "elevation": 540
  },
  {
    "icao": "KHOU",
    "iata": "HOU",
    "name": "William P Hobby Airport",
    "city": "Houston",
    "country": "US",
    "lat": 29.645399,
    "lon": -95.2789,
    "elevation": 46
  },
  {
    "icao": "KHPN",
    "iata": "HPN",
    "name": "Westchester County Airport",
    "city": "White Plains",
    "country": "US",
    "lat": 41.06700134277344,
    "lon": -73.70760345458984,
    "elevation": 439
  },
  {
    "icao": "KHQM",
    "iata": "HQM",
    "name": "Bowerman Airport",
    "city": "Hoquiam",
    "country": "US",
    "lat": 46.971199035599994,
    "lon": -123.93699646,
    "elevation": 18
  },
  {
    "icao": "KHRL",
    "iata": "HRL",
    "name": "Valley International Airport",
    "city": "Harlingen",
    "country": "US",
    "lat": 26.228500366210938,
    "lon": -97.65440368652344,
    "elevation": 36
  },
  {
    "icao": "KHRO",
    "iata": "HRO",
    "name": "Boone County Airport",
    "city": "Harrison",
    "country": "US",
    "lat": 36.26150131225586,
    "lon": -93.15470123291016,
    "elevation": 1365
  },
  {
    "icao": "KHST",
    "iata": "HST",
    "name": "Homestead ARB Airport",
    "city": "Homestead",
    "country": "US",
    "lat": 25.48859978,
    "lon": -80.38359833,
    "elevation": 5
  },
  {
    "icao": "KHSV",
    "iata": "HSV",
    "name": "Huntsville International Carl T Jones Field",
    "city": "Huntsville",
    "country": "US",
    "lat": 34.637199,
    "lon": -86.775101,
    "elevation": 629
  },
  {
    "icao": "KHTS",
    "iata": "HTS",
    "name": "Tri-State Airport / Milton J. Ferguson Field",
    "city": "Huntington",
    "country": "US",
    "lat": 38.366699,
    "lon": -82.557999,
    "elevation": 828
  },
  {
    "icao": "KHUA",
    "iata": "HUA",
    "name": "Redstone Army Air Field",
    "city": "Redstone Arsnl Huntsville",
    "country": "US",
    "lat": 34.67869949,
    "lon": -86.68479919,
    "elevation": 684
  },
  {
    "icao": "KHUF",
    "iata": "HUF",
    "name": "Terre Haute Regional Airport, Hulman Field",
    "city": "Terre Haute",
    "country": "US",
    "lat": 39.4515,
    "lon": -87.307602,
    "elevation": 589
  },
  {
    "icao": "KHUL",
    "iata": "HUL",
    "name": "Houlton International Airport",
    "city": "Houlton",
    "country": "US",
    "lat": 46.1231002808,
    "lon": -67.792098999,
    "elevation": 489
  },
  {
    "icao": "KHUT",
    "iata": "HUT",
    "name": "Hutchinson Municipal Airport",
    "city": "Hutchinson",
    "country": "US",
    "lat": 38.0654983521,
    "lon": -97.86060333250002,
    "elevation": 1543
  },
  {
    "icao": "KHVN",
    "iata": "HVN",
    "name": "Tweed New Haven Airport",
    "city": "New Haven",
    "country": "US",
    "lat": 41.26369858,
    "lon": -72.88680267,
    "elevation": 12
  },
  {
    "icao": "KHVR",
    "iata": "HVR",
    "name": "Havre City County Airport",
    "city": "Havre",
    "country": "US",
    "lat": 48.541387,
    "lon": -109.762859,
    "elevation": 2591
  },
  {
    "icao": "KHXD",
    "iata": "HHH",
    "name": "Hilton Head Airport",
    "city": "Hilton Head Island",
    "country": "US",
    "lat": 32.2244,
    "lon": -80.697502,
    "elevation": 19
  },
  {
    "icao": "KHYA",
    "iata": "HYA",
    "name": "Cape Cod Gateway Airport",
    "city": "Hyannis",
    "country": "US",
    "lat": 41.6693,
    "lon": -70.280403,
    "elevation": 54
  },
  {
    "icao": "KHYR",
    "iata": "HYR",
    "name": "Sawyer County Airport",
    "city": "Hayward",
    "country": "US",
    "lat": 46.025199890100005,
    "lon": -91.44429779050002,
    "elevation": 1216
  },
  {
    "icao": "KHYS",
    "iata": "HYS",
    "name": "Hays Regional Airport",
    "city": "Hays",
    "country": "US",
    "lat": 38.844521,
    "lon": -99.273148,
    "elevation": 1999
  },
  {
    "icao": "KHZY",
    "iata": "JFN",
    "name": "Northeast Ohio Regional Airport",
    "city": "Ashtabula",
    "country": "US",
    "lat": 41.778,
    "lon": -80.695503,
    "elevation": 924
  },
  {
    "icao": "KIAB",
    "iata": "IAB",
    "name": "McConnell Air Force Base",
    "city": "Wichita",
    "country": "US",
    "lat": 37.621899,
    "lon": -97.268204,
    "elevation": 1371
  },
  {
    "icao": "KIAD",
    "iata": "IAD",
    "name": "Washington Dulles International Airport",
    "city": "Dulles",
    "country": "US",
    "lat": 38.9445,
    "lon": -77.455803,
    "elevation": 312
  },
  {
    "icao": "KIAG",
    "iata": "IAG",
    "name": "Niagara Falls International Airport",
    "city": "Niagara Falls",
    "country": "US",
    "lat": 43.1073,
    "lon": -78.946198,
    "elevation": 589
  },
  {
    "icao": "KIAH",
    "iata": "IAH",
    "name": "George Bush Intercontinental Houston Airport",
    "city": "Houston",
    "country": "US",
    "lat": 29.984399795532227,
    "lon": -95.34140014648438,
    "elevation": 97
  },
  {
    "icao": "KICT",
    "iata": "ICT",
    "name": "Wichita Eisenhower National Airport",
    "city": "Wichita",
    "country": "US",
    "lat": 37.649899,
    "lon": -97.433098,
    "elevation": 1333
  },
  {
    "icao": "KIDA",
    "iata": "IDA",
    "name": "Idaho Falls Regional Airport",
    "city": "Idaho Falls",
    "country": "US",
    "lat": 43.514599,
    "lon": -112.070999,
    "elevation": 4744
  },
  {
    "icao": "KIFP",
    "iata": "IFP",
    "name": "Laughlin Bullhead International Airport",
    "city": "Bullhead City",
    "country": "US",
    "lat": 35.157398,
    "lon": -114.559998,
    "elevation": 701
  },
  {
    "icao": "KIGM",
    "iata": "IGM",
    "name": "Kingman Airport",
    "city": "Kingman",
    "country": "US",
    "lat": 35.259499,
    "lon": -113.938004,
    "elevation": 3449
  },
  {
    "icao": "KIKK",
    "iata": "IKK",
    "name": "Greater Kankakee Airport",
    "city": "Kankakee",
    "country": "US",
    "lat": 41.07139968869999,
    "lon": -87.8462982178,
    "elevation": 630
  },
  {
    "icao": "KILG",
    "iata": "ILG",
    "name": "Wilmington Airport",
    "city": "Wilmington",
    "country": "US",
    "lat": 39.678699,
    "lon": -75.606499,
    "elevation": 80
  },
  {
    "icao": "KILM",
    "iata": "ILM",
    "name": "Wilmington International Airport",
    "city": "Wilmington",
    "country": "US",
    "lat": 34.270599365234375,
    "lon": -77.90260314941406,
    "elevation": 32
  },
  {
    "icao": "KILN",
    "iata": "ILN",
    "name": "Wilmington Airpark",
    "city": "Wilmington",
    "country": "US",
    "lat": 39.427898407,
    "lon": -83.792098999,
    "elevation": 1077
  },
  {
    "icao": "KIMT",
    "iata": "IMT",
    "name": "Ford Airport",
    "city": "Kingsford",
    "country": "US",
    "lat": 45.81911,
    "lon": -88.114557,
    "elevation": 1182
  },
  {
    "icao": "KIND",
    "iata": "IND",
    "name": "Indianapolis International Airport",
    "city": "Indianapolis",
    "country": "US",
    "lat": 39.7173,
    "lon": -86.294403,
    "elevation": 797
  },
  {
    "icao": "KINK",
    "iata": "INK",
    "name": "Winkler County Airport",
    "city": "Wink",
    "country": "US",
    "lat": 31.779600143399996,
    "lon": -103.200996399,
    "elevation": 2822
  },
  {
    "icao": "KINL",
    "iata": "INL",
    "name": "Falls International Airport",
    "city": "International Falls",
    "country": "US",
    "lat": 48.566200256347656,
    "lon": -93.4030990600586,
    "elevation": 1185
  },
  {
    "icao": "KINT",
    "iata": "INT",
    "name": "Smith Reynolds Airport",
    "city": "Winston Salem",
    "country": "US",
    "lat": 36.13370132446289,
    "lon": -80.22200012207031,
    "elevation": 969
  },
  {
    "icao": "KINW",
    "iata": "INW",
    "name": "Winslow Lindbergh Regional Airport",
    "city": "Winslow",
    "country": "US",
    "lat": 35.021900177,
    "lon": -110.722999573,
    "elevation": 4941
  },
  {
    "icao": "KIPL",
    "iata": "IPL",
    "name": "Imperial County Airport",
    "city": "Imperial",
    "country": "US",
    "lat": 32.83539,
    "lon": -115.574026,
    "elevation": -54
  },
  {
    "icao": "KIPT",
    "iata": "IPT",
    "name": "Williamsport Regional Airport",
    "city": "Williamsport",
    "country": "US",
    "lat": 41.242126,
    "lon": -76.92245,
    "elevation": 529
  },
  {
    "icao": "KIRK",
    "iata": "IRK",
    "name": "Kirksville Regional Airport",
    "city": "Kirksville",
    "country": "US",
    "lat": 40.09349822998047,
    "lon": -92.5448989868164,
    "elevation": 966
  },
  {
    "icao": "KISM",
    "iata": "ISM",
    "name": "Kissimmee Gateway Airport",
    "city": "Orlando",
    "country": "US",
    "lat": 28.2898006439,
    "lon": -81.4371032715,
    "elevation": 82
  },
  {
    "icao": "KISO",
    "iata": "ISO",
    "name": "Kinston Regional Jetport At Stallings Field",
    "city": "Kinston",
    "country": "US",
    "lat": 35.331401825,
    "lon": -77.60880279540001,
    "elevation": 93
  },
  {
    "icao": "KISP",
    "iata": "ISP",
    "name": "Long Island Mac Arthur Airport",
    "city": "Islip",
    "country": "US",
    "lat": 40.79520035,
    "lon": -73.10019684,
    "elevation": 99
  },
  {
    "icao": "KITH",
    "iata": "ITH",
    "name": "Ithaca Tompkins Regional Airport",
    "city": "Ithaca",
    "country": "US",
    "lat": 42.49100112915039,
    "lon": -76.4583969116211,
    "elevation": 1099
  },
  {
    "icao": "KIWA",
    "iata": "AZA",
    "name": "Mesa Gateway Airport",
    "city": "Mesa",
    "country": "US",
    "lat": 33.3078,
    "lon": -111.654999,
    "elevation": 1382
  },
  {
    "icao": "KJAC",
    "iata": "JAC",
    "name": "Jackson Hole Airport",
    "city": "Jackson",
    "country": "US",
    "lat": 43.6072998046875,
    "lon": -110.73799896240234,
    "elevation": 6451
  },
  {
    "icao": "KJAN",
    "iata": "JAN",
    "name": "Jackson-Medgar Wiley Evers International Airport",
    "city": "Jackson",
    "country": "US",
    "lat": 32.311199,
    "lon": -90.075897,
    "elevation": 346
  },
  {
    "icao": "KJAX",
    "iata": "JAX",
    "name": "Jacksonville International Airport",
    "city": "Jacksonville",
    "country": "US",
    "lat": 30.492469,
    "lon": -81.687813,
    "elevation": 30
  },
  {
    "icao": "KJBR",
    "iata": "JBR",
    "name": "Jonesboro Municipal Airport",
    "city": "Jonesboro",
    "country": "US",
    "lat": 35.83169937133789,
    "lon": -90.64640045166016,
    "elevation": 262
  },
  {
    "icao": "KJCT",
    "iata": "JCT",
    "name": "Kimble County Airport",
    "city": "Junction",
    "country": "US",
    "lat": 30.5112991333,
    "lon": -99.7634963989,
    "elevation": 1749
  },
  {
    "icao": "KJFK",
    "iata": "JFK",
    "name": "John F Kennedy International Airport",
    "city": "New York",
    "country": "US",
    "lat": 40.639447,
    "lon": -73.779317,
    "elevation": 13
  },
  {
    "icao": "KJHW",
    "iata": "JHW",
    "name": "Chautauqua County-Jamestown Airport",
    "city": "Jamestown",
    "country": "US",
    "lat": 42.15425,
    "lon": -79.254008,
    "elevation": 1723
  },
  {
    "icao": "KJLN",
    "iata": "JLN",
    "name": "Joplin Regional Airport",
    "city": "Joplin",
    "country": "US",
    "lat": 37.151798,
    "lon": -94.498299,
    "elevation": 981
  },
  {
    "icao": "KJMS",
    "iata": "JMS",
    "name": "Jamestown Regional Airport",
    "city": "Jamestown",
    "country": "US",
    "lat": 46.92969894,
    "lon": -98.67819977,
    "elevation": 1500
  },
  {
    "icao": "KJQF",
    "iata": "USA",
    "name": "Concord-Padgett Regional Airport",
    "city": "Concord",
    "country": "US",
    "lat": 35.387798,
    "lon": -80.709099,
    "elevation": 705
  },
  {
    "icao": "KJST",
    "iata": "JST",
    "name": "John Murtha Johnstown Cambria County Airport",
    "city": "Johnstown",
    "country": "US",
    "lat": 40.31610107421875,
    "lon": -78.83390045166016,
    "elevation": 2284
  },
  {
    "icao": "KJXN",
    "iata": "JXN",
    "name": "Jackson County Airport/Reynolds Field",
    "city": "Jackson",
    "country": "US",
    "lat": 42.260509,
    "lon": -84.463019,
    "elevation": 1001
  },
  {
    "icao": "KKLS",
    "iata": "KLS",
    "name": "Southwest Washington Regional Airport",
    "city": "Kelso",
    "country": "US",
    "lat": 46.11800003049999,
    "lon": -122.898002625,
    "elevation": 20
  },
  {
    "icao": "KLAA",
    "iata": "LAA",
    "name": "Southeast Colorado Regional Airport",
    "city": "Lamar",
    "country": "US",
    "lat": 38.066407,
    "lon": -102.691373,
    "elevation": 3706
  },
  {
    "icao": "KLAF",
    "iata": "LAF",
    "name": "Purdue University Airport",
    "city": "West Lafayette",
    "country": "US",
    "lat": 40.412875,
    "lon": -86.939363,
    "elevation": 606
  },
  {
    "icao": "KLAL",
    "iata": "LAL",
    "name": "Lakeland Linder International Airport",
    "city": "Lakeland",
    "country": "US",
    "lat": 27.987656,
    "lon": -82.018776,
    "elevation": 142
  },
  {
    "icao": "KLAN",
    "iata": "LAN",
    "name": "Capital City Airport",
    "city": "Lansing",
    "country": "US",
    "lat": 42.77870178222656,
    "lon": -84.58740234375,
    "elevation": 861
  },
  {
    "icao": "KLAR",
    "iata": "LAR",
    "name": "Laramie Regional Airport",
    "city": "Laramie",
    "country": "US",
    "lat": 41.31209945678711,
    "lon": -105.67500305175781,
    "elevation": 7284
  },
  {
    "icao": "KLAS",
    "iata": "LAS",
    "name": "Harry Reid International Airport",
    "city": "Las Vegas",
    "country": "US",
    "lat": 36.083361,
    "lon": -115.151817,
    "elevation": 2181
  },
  {
    "icao": "KLAW",
    "iata": "LAW",
    "name": "Lawton Fort Sill Regional Airport",
    "city": "Lawton",
    "country": "US",
    "lat": 34.567699,
    "lon": -98.416603,
    "elevation": 1110
  },
  {
    "icao": "KLAX",
    "iata": "LAX",
    "name": "Los Angeles International Airport",
    "city": "Los Angeles",
    "country": "US",
    "lat": 33.942501,
    "lon": -118.407997,
    "elevation": 125
  },
  {
    "icao": "KLBB",
    "iata": "LBB",
    "name": "Lubbock Preston Smith International Airport",
    "city": "Lubbock",
    "country": "US",
    "lat": 33.663601,
    "lon": -101.822998,
    "elevation": 3282
  },
  {
    "icao": "KLBE",
    "iata": "LBE",
    "name": "Arnold Palmer Regional Airport",
    "city": "Latrobe",
    "country": "US",
    "lat": 40.275902,
    "lon": -79.4048,
    "elevation": 1199
  },
  {
    "icao": "KLBF",
    "iata": "LBF",
    "name": "North Platte Regional Airport Lee Bird Field",
    "city": "North Platte",
    "country": "US",
    "lat": 41.12620163,
    "lon": -100.6839981,
    "elevation": 2777
  },
  {
    "icao": "KLBL",
    "iata": "LBL",
    "name": "Liberal Mid-America Regional Airport",
    "city": "Liberal",
    "country": "US",
    "lat": 37.0442009,
    "lon": -100.9599991,
    "elevation": 2885
  },
  {
    "icao": "KLBT",
    "iata": "LBT",
    "name": "Lumberton Regional Airport",
    "city": "Lumberton",
    "country": "US",
    "lat": 34.610773,
    "lon": -79.05943,
    "elevation": 126
  },
  {
    "icao": "KLBX",
    "iata": "LJN",
    "name": "Texas Gulf Coast Regional Airport",
    "city": "Angleton",
    "country": "US",
    "lat": 29.108601,
    "lon": -95.462097,
    "elevation": 25
  },
  {
    "icao": "KLCH",
    "iata": "LCH",
    "name": "Lake Charles Regional Airport",
    "city": "Lake Charles",
    "country": "US",
    "lat": 30.126100540161133,
    "lon": -93.22329711914062,
    "elevation": 15
  },
  {
    "icao": "KLCK",
    "iata": "LCK",
    "name": "Rickenbacker International Airport",
    "city": "Columbus",
    "country": "US",
    "lat": 39.813801,
    "lon": -82.927803,
    "elevation": 744
  },
  {
    "icao": "KLEB",
    "iata": "LEB",
    "name": "Lebanon Municipal Airport",
    "city": "Lebanon",
    "country": "US",
    "lat": 43.626098632799994,
    "lon": -72.30419921880001,
    "elevation": 603
  },
  {
    "icao": "KLEE",
    "iata": "LEE",
    "name": "Leesburg International Airport",
    "city": "Leesburg",
    "country": "US",
    "lat": 28.82309914,
    "lon": -81.80870056,
    "elevation": 76
  },
  {
    "icao": "KLEX",
    "iata": "LEX",
    "name": "Blue Grass Airport",
    "city": "Lexington",
    "country": "US",
    "lat": 38.036499,
    "lon": -84.605904,
    "elevation": 979
  },
  {
    "icao": "KLFI",
    "iata": "LFI",
    "name": "Langley Air Force Base",
    "city": "Hampton",
    "country": "US",
    "lat": 37.082901,
    "lon": -76.360497,
    "elevation": 11
  },
  {
    "icao": "KLFK",
    "iata": "LFK",
    "name": "Angelina County Airport",
    "city": "Lufkin",
    "country": "US",
    "lat": 31.2339992523,
    "lon": -94.75,
    "elevation": 296
  },
  {
    "icao": "KLFT",
    "iata": "LFT",
    "name": "Lafayette Regional Airport",
    "city": "Lafayette",
    "country": "US",
    "lat": 30.205299,
    "lon": -91.987602,
    "elevation": 42
  },
  {
    "icao": "KLGA",
    "iata": "LGA",
    "name": "LaGuardia Airport",
    "city": "New York",
    "country": "US",
    "lat": 40.777199,
    "lon": -73.872597,
    "elevation": 21
  },
  {
    "icao": "KLGB",
    "iata": "LGB",
    "name": "Long Beach Airport (Daugherty Field)",
    "city": "Long Beach",
    "country": "US",
    "lat": 33.816523,
    "lon": -118.149891,
    "elevation": 60
  },
  {
    "icao": "KLGU",
    "iata": "LGU",
    "name": "Logan-Cache Airport",
    "city": "Logan",
    "country": "US",
    "lat": 41.7911987305,
    "lon": -111.851997375,
    "elevation": 4457
  },
  {
    "icao": "KLIT",
    "iata": "LIT",
    "name": "Bill & Hillary Clinton National Airport/Adams Field",
    "city": "Little Rock",
    "country": "US",
    "lat": 34.729582,
    "lon": -92.223728,
    "elevation": 262
  },
  {
    "icao": "KLMT",
    "iata": "LMT",
    "name": "Crater Lake-Klamath Regional Airport",
    "city": "Klamath Falls",
    "country": "US",
    "lat": 42.156101,
    "lon": -121.733002,
    "elevation": 4095
  },
  {
    "icao": "KLND",
    "iata": "LND",
    "name": "Hunt Field",
    "city": "Lander",
    "country": "US",
    "lat": 42.815201,
    "lon": -108.730003,
    "elevation": 5586
  },
  {
    "icao": "KLNK",
    "iata": "LNK",
    "name": "Lincoln Airport",
    "city": "Lincoln",
    "country": "US",
    "lat": 40.85100173950195,
    "lon": -96.75920104980469,
    "elevation": 1219
  },
  {
    "icao": "KLNS",
    "iata": "LNS",
    "name": "Lancaster Airport",
    "city": "Lancaster",
    "country": "US",
    "lat": 40.121700286865234,
    "lon": -76.29609680175781,
    "elevation": 403
  },
  {
    "icao": "KLOL",
    "iata": "LOL",
    "name": "Derby Field",
    "city": "Lovelock",
    "country": "US",
    "lat": 40.0663986206,
    "lon": -118.565002441,
    "elevation": 3904
  },
  {
    "icao": "KLOU",
    "iata": "LOU",
    "name": "Bowman Field",
    "city": "Louisville",
    "country": "US",
    "lat": 38.2280006409,
    "lon": -85.6636962891,
    "elevation": 546
  },
  {
    "icao": "KLOZ",
    "iata": "LOZ",
    "name": "London-Corbin Airport/Magee Field",
    "city": "London",
    "country": "US",
    "lat": 37.0821990967,
    "lon": -84.08489990230001,
    "elevation": 1212
  },
  {
    "icao": "KLRD",
    "iata": "LRD",
    "name": "Laredo International Airport",
    "city": "Laredo",
    "country": "US",
    "lat": 27.543800354003906,
    "lon": -99.46160125732422,
    "elevation": 508
  },
  {
    "icao": "KLRF",
    "iata": "LRF",
    "name": "Little Rock Air Force Base",
    "city": "Jacksonville",
    "country": "US",
    "lat": 34.916900634799994,
    "lon": -92.14969635010002,
    "elevation": 311
  },
  {
    "icao": "KLRU",
    "iata": "LRU",
    "name": "Las Cruces International Airport",
    "city": "Las Cruces",
    "country": "US",
    "lat": 32.289398,
    "lon": -106.921997,
    "elevation": 4456
  },
  {
    "icao": "KLSE",
    "iata": "LSE",
    "name": "La Crosse Regional Airport",
    "city": "La Crosse",
    "country": "US",
    "lat": 43.879002,
    "lon": -91.256699,
    "elevation": 655
  },
  {
    "icao": "KLSF",
    "iata": "LSF",
    "name": "Lawson Army Air Field",
    "city": "Fort Benning",
    "country": "US",
    "lat": 32.332546,
    "lon": -84.988003,
    "elevation": 232
  },
  {
    "icao": "KLSV",
    "iata": "LSV",
    "name": "Nellis Air Force Base",
    "city": "Las Vegas",
    "country": "US",
    "lat": 36.2361984253,
    "lon": -115.033996582,
    "elevation": 1870
  },
  {
    "icao": "KLTS",
    "iata": "LTS",
    "name": "Altus Air Force Base",
    "city": "Altus",
    "country": "US",
    "lat": 34.667099,
    "lon": -99.266701,
    "elevation": 1382
  },
  {
    "icao": "KLUF",
    "iata": "LUF",
    "name": "Luke Air Force Base",
    "city": "Glendale",
    "country": "US",
    "lat": 33.535,
    "lon": -112.383003,
    "elevation": 1085
  },
  {
    "icao": "KLUK",
    "iata": "LUK",
    "name": "Cincinnati Municipal Airport Lunken Field",
    "city": "Cincinnati",
    "country": "US",
    "lat": 39.102357,
    "lon": -84.418945,
    "elevation": 483
  },
  {
    "icao": "KLVM",
    "iata": "LVM",
    "name": "Mission Field",
    "city": "Livingston",
    "country": "US",
    "lat": 45.6994018555,
    "lon": -110.447998047,
    "elevation": 4660
  },
  {
    "icao": "KLVS",
    "iata": "LVS",
    "name": "Las Vegas Municipal Airport",
    "city": "Las Vegas",
    "country": "US",
    "lat": 35.654202,
    "lon": -105.141998,
    "elevation": 6877
  },
  {
    "icao": "KLWB",
    "iata": "LWB",
    "name": "Greenbrier Valley Airport",
    "city": "Lewisburg",
    "country": "US",
    "lat": 37.857914,
    "lon": -80.400438,
    "elevation": 2302
  },
  {
    "icao": "KLWM",
    "iata": "LWM",
    "name": "Lawrence Municipal Airport",
    "city": "Lawrence",
    "country": "US",
    "lat": 42.717201232899995,
    "lon": -71.1233978271,
    "elevation": 148
  },
  {
    "icao": "KLWS",
    "iata": "LWS",
    "name": "Lewiston Nez Perce County Airport",
    "city": "Lewiston",
    "country": "US",
    "lat": 46.3745002746582,
    "lon": -117.01499938964844,
    "elevation": 1442
  },
  {
    "icao": "KLWT",
    "iata": "LWT",
    "name": "Lewistown Municipal Airport",
    "city": "Lewistown",
    "country": "US",
    "lat": 47.048429,
    "lon": -109.466143,
    "elevation": 4170
  },
  {
    "icao": "KLYH",
    "iata": "LYH",
    "name": "Lynchburg Regional Airport - Preston Glenn Field",
    "city": "Lynchburg",
    "country": "US",
    "lat": 37.326698,
    "lon": -79.200401,
    "elevation": 938
  },
  {
    "icao": "KMAF",
    "iata": "MAF",
    "name": "Midland International Air and Space Port",
    "city": "Midland",
    "country": "US",
    "lat": 31.942499,
    "lon": -102.202003,
    "elevation": 2871
  },
  {
    "icao": "KMBG",
    "iata": "MBG",
    "name": "Mobridge Municipal Airport",
    "city": "Mobridge",
    "country": "US",
    "lat": 45.54650116,
    "lon": -100.4079971,
    "elevation": 1716
  },
  {
    "icao": "KMBS",
    "iata": "MBS",
    "name": "MBS International Airport",
    "city": "Freeland",
    "country": "US",
    "lat": 43.531913,
    "lon": -84.082275,
    "elevation": 668
  },
  {
    "icao": "KMCB",
    "iata": "MCB",
    "name": "McComb-Pike County Airport / John E Lewis Field",
    "city": "McComb",
    "country": "US",
    "lat": 31.178499,
    "lon": -90.471901,
    "elevation": 413
  },
  {
    "icao": "KMCC",
    "iata": "MCC",
    "name": "McClellan Airfield",
    "city": "Sacramento",
    "country": "US",
    "lat": 38.667599,
    "lon": -121.401001,
    "elevation": 77
  },
  {
    "icao": "KMCE",
    "iata": "MCE",
    "name": "Merced Regional Macready Field",
    "city": "Merced",
    "country": "US",
    "lat": 37.284698,
    "lon": -120.514,
    "elevation": 155
  },
  {
    "icao": "KMCF",
    "iata": "MCF",
    "name": "MacDill Air Force Base",
    "city": "Tampa",
    "country": "US",
    "lat": 27.8493,
    "lon": -82.521202,
    "elevation": 14
  },
  {
    "icao": "KMCI",
    "iata": "MCI",
    "name": "Kansas City International Airport",
    "city": "Kansas City",
    "country": "US",
    "lat": 39.2976,
    "lon": -94.713898,
    "elevation": 1026
  },
  {
    "icao": "KMCK",
    "iata": "MCK",
    "name": "McCook Ben Nelson Regional Airport",
    "city": "McCook",
    "country": "US",
    "lat": 40.207787,
    "lon": -100.592794,
    "elevation": 2583
  },
  {
    "icao": "KMCN",
    "iata": "MCN",
    "name": "Middle Georgia Regional Airport",
    "city": "Macon",
    "country": "US",
    "lat": 32.69279861450195,
    "lon": -83.64920043945312,
    "elevation": 354
  },
  {
    "icao": "KMCO",
    "iata": "MCO",
    "name": "Orlando International Airport",
    "city": "Orlando",
    "country": "US",
    "lat": 28.429399490356445,
    "lon": -81.30899810791016,
    "elevation": 96
  },
  {
    "icao": "KMCW",
    "iata": "MCW",
    "name": "Mason City Municipal Airport",
    "city": "Mason City",
    "country": "US",
    "lat": 43.159801,
    "lon": -93.329716,
    "elevation": 1213
  },
  {
    "icao": "KMDH",
    "iata": "MDH",
    "name": "Southern Illinois Airport",
    "city": "Murphysboro",
    "country": "US",
    "lat": 37.778099,
    "lon": -89.251999,
    "elevation": 411
  },
  {
    "icao": "KMDT",
    "iata": "MDT",
    "name": "Harrisburg International Airport",
    "city": "Harrisburg",
    "country": "US",
    "lat": 40.193501,
    "lon": -76.763397,
    "elevation": 310
  },
  {
    "icao": "KMDW",
    "iata": "MDW",
    "name": "Chicago Midway International Airport",
    "city": "Chicago",
    "country": "US",
    "lat": 41.785999,
    "lon": -87.752403,
    "elevation": 620
  },
  {
    "icao": "KMEI",
    "iata": "MEI",
    "name": "Key Field / Meridian Regional Airport",
    "city": "Meridian",
    "country": "US",
    "lat": 32.3326,
    "lon": -88.7519,
    "elevation": 297
  },
  {
    "icao": "KMEM",
    "iata": "MEM",
    "name": "Memphis International Airport",
    "city": "Memphis",
    "country": "US",
    "lat": 35.0424,
    "lon": -89.9767,
    "elevation": 341
  },
  {
    "icao": "KMER",
    "iata": "MER",
    "name": "Castle Airport",
    "city": "Merced",
    "country": "US",
    "lat": 37.38050079,
    "lon": -120.5680008,
    "elevation": 191
  },
  {
    "icao": "KMFD",
    "iata": "MFD",
    "name": "Mansfield Lahm Regional Airport",
    "city": "Mansfield",
    "country": "US",
    "lat": 40.82139968869999,
    "lon": -82.5166015625,
    "elevation": 1297
  },
  {
    "icao": "KMFE",
    "iata": "MFE",
    "name": "McAllen Miller International Airport",
    "city": "McAllen",
    "country": "US",
    "lat": 26.176141,
    "lon": -98.237965,
    "elevation": 107
  },
  {
    "icao": "KMFR",
    "iata": "MFR",
    "name": "Rogue Valley International Medford Airport",
    "city": "Medford",
    "country": "US",
    "lat": 42.37419891357422,
    "lon": -122.87300109863281,
    "elevation": 1335
  },
  {
    "icao": "KMGE",
    "iata": "MGE",
    "name": "Dobbins Air Reserve Base",
    "city": "Marietta",
    "country": "US",
    "lat": 33.915401,
    "lon": -84.516296,
    "elevation": 1068
  },
  {
    "icao": "KMGM",
    "iata": "MGM",
    "name": "Montgomery Regional (Dannelly Field) Airport",
    "city": "Montgomery",
    "country": "US",
    "lat": 32.300598,
    "lon": -86.393997,
    "elevation": 221
  },
  {
    "icao": "KMGW",
    "iata": "MGW",
    "name": "Morgantown Municipal Airport Walter L. (Bill) Hart Field",
    "city": "Morgantown",
    "country": "US",
    "lat": 39.643305,
    "lon": -79.917598,
    "elevation": 1248
  },
  {
    "icao": "KMHK",
    "iata": "MHK",
    "name": "Manhattan Regional Airport",
    "city": "Manhattan",
    "country": "US",
    "lat": 39.14099884033203,
    "lon": -96.6707992553711,
    "elevation": 1057
  },
  {
    "icao": "KMHR",
    "iata": "MHR",
    "name": "Sacramento Mather Airport",
    "city": "Sacramento",
    "country": "US",
    "lat": 38.554744,
    "lon": -121.297989,
    "elevation": 98
  },
  {
    "icao": "KMHT",
    "iata": "MHT",
    "name": "Manchester-Boston Regional Airport",
    "city": "Manchester",
    "country": "US",
    "lat": 42.932598,
    "lon": -71.435699,
    "elevation": 266
  },
  {
    "icao": "KMIA",
    "iata": "MIA",
    "name": "Miami International Airport",
    "city": "Miami",
    "country": "US",
    "lat": 25.79319953918457,
    "lon": -80.29060363769531,
    "elevation": 8
  },
  {
    "icao": "KMIB",
    "iata": "MIB",
    "name": "Minot Air Force Base",
    "city": "Minot",
    "country": "US",
    "lat": 48.4156,
    "lon": -101.358002,
    "elevation": 1667
  },
  {
    "icao": "KMIE",
    "iata": "MIE",
    "name": "Delaware County Johnson Field",
    "city": "Muncie",
    "country": "US",
    "lat": 40.242298,
    "lon": -85.395897,
    "elevation": 937
  },
  {
    "icao": "KMIV",
    "iata": "MIV",
    "name": "Millville Municipal Airport",
    "city": "Millville",
    "country": "US",
    "lat": 39.367802,
    "lon": -75.072197,
    "elevation": 85
  },
  {
    "icao": "KMKC",
    "iata": "MKC",
    "name": "Charles B. Wheeler Downtown Airport",
    "city": "Kansas City",
    "country": "US",
    "lat": 39.123199,
    "lon": -94.592796,
    "elevation": 759
  },
  {
    "icao": "KMKE",
    "iata": "MKE",
    "name": "General Mitchell International Airport",
    "city": "Milwaukee",
    "country": "US",
    "lat": 42.947201,
    "lon": -87.896599,
    "elevation": 723
  },
  {
    "icao": "KMKG",
    "iata": "MKG",
    "name": "Muskegon County Airport",
    "city": "Muskegon",
    "country": "US",
    "lat": 43.169498,
    "lon": -86.238197,
    "elevation": 629
  },
  {
    "icao": "KMKL",
    "iata": "MKL",
    "name": "McKellar-Sipes Regional Airport",
    "city": "Jackson",
    "country": "US",
    "lat": 35.599899,
    "lon": -88.915604,
    "elevation": 434
  },
  {
    "icao": "KMLB",
    "iata": "MLB",
    "name": "Melbourne Orlando International Airport",
    "city": "Melbourne",
    "country": "US",
    "lat": 28.1028,
    "lon": -80.645302,
    "elevation": 33
  },
  {
    "icao": "KMLC",
    "iata": "MLC",
    "name": "Mc Alester Regional Airport",
    "city": "Mc Alester",
    "country": "US",
    "lat": 34.882401,
    "lon": -95.783501,
    "elevation": 770
  },
  {
    "icao": "KMLI",
    "iata": "MLI",
    "name": "Quad City International Airport",
    "city": "Moline",
    "country": "US",
    "lat": 41.448502,
    "lon": -90.5075,
    "elevation": 590
  },
  {
    "icao": "KMLS",
    "iata": "MLS",
    "name": "Miles City Airport - Frank Wiley Field",
    "city": "Miles City",
    "country": "US",
    "lat": 46.427268,
    "lon": -105.885372,
    "elevation": 2630
  },
  {
    "icao": "KMLU",
    "iata": "MLU",
    "name": "Monroe Regional Airport",
    "city": "Monroe",
    "country": "US",
    "lat": 32.510899,
    "lon": -92.037697,
    "elevation": 79
  },
  {
    "icao": "KMMT",
    "iata": "MMT",
    "name": "Mc Entire Joint National Guard Base",
    "city": "Eastover",
    "country": "US",
    "lat": 33.92079926,
    "lon": -80.80130005,
    "elevation": 254
  },
  {
    "icao": "KMMU",
    "iata": "MMU",
    "name": "Morristown Municipal Airport",
    "city": "Morristown",
    "country": "US",
    "lat": 40.799062,
    "lon": -74.414949,
    "elevation": 187
  },
  {
    "icao": "KMOB",
    "iata": "MOB",
    "name": "Mobile Regional Airport",
    "city": "Mobile",
    "country": "US",
    "lat": 30.6912,
    "lon": -88.242798,
    "elevation": 219
  },
  {
    "icao": "KMOD",
    "iata": "MOD",
    "name": "Modesto City Co-Harry Sham Field",
    "city": "Modesto",
    "country": "US",
    "lat": 37.625801,
    "lon": -120.954002,
    "elevation": 97
  },
  {
    "icao": "KMOT",
    "iata": "MOT",
    "name": "Minot International Airport",
    "city": "Minot",
    "country": "US",
    "lat": 48.2593994140625,
    "lon": -101.27999877929688,
    "elevation": 1716
  },
  {
    "icao": "KMPV",
    "iata": "MPV",
    "name": "Edward F Knapp State Airport",
    "city": "Barre/Montpelier",
    "country": "US",
    "lat": 44.20349884,
    "lon": -72.56230164,
    "elevation": 1166
  },
  {
    "icao": "KMQY",
    "iata": "MQY",
    "name": "Smyrna Airport",
    "city": "Smyrna",
    "country": "US",
    "lat": 36.0089988708,
    "lon": -86.5201034546,
    "elevation": 543
  },
  {
    "icao": "KMRB",
    "iata": "MRB",
    "name": "Eastern WV Regional Airport/Shepherd Field",
    "city": "Martinsburg",
    "country": "US",
    "lat": 39.40190125,
    "lon": -77.98459625,
    "elevation": 565
  },
  {
    "icao": "KMRY",
    "iata": "MRY",
    "name": "Monterey Peninsula Airport",
    "city": "Monterey",
    "country": "US",
    "lat": 36.58700180053711,
    "lon": -121.84300231933594,
    "elevation": 257
  },
  {
    "icao": "KMSL",
    "iata": "MSL",
    "name": "Northwest Alabama Regional Airport",
    "city": "Muscle Shoals",
    "country": "US",
    "lat": 34.745123,
    "lon": -87.612981,
    "elevation": 551
  },
  {
    "icao": "KMSN",
    "iata": "MSN",
    "name": "Dane County Regional Truax Field",
    "city": "Madison",
    "country": "US",
    "lat": 43.1399,
    "lon": -89.337502,
    "elevation": 887
  },
  {
    "icao": "KMSO",
    "iata": "MSO",
    "name": "Missoula International Airport",
    "city": "Missoula",
    "country": "US",
    "lat": 46.91630173,
    "lon": -114.0910034,
    "elevation": 3206
  },
  {
    "icao": "KMSP",
    "iata": "MSP",
    "name": "Minneapolis–Saint Paul International Airport / Wold–Chamberlain Field",
    "city": "Minneapolis",
    "country": "US",
    "lat": 44.880081,
    "lon": -93.221741,
    "elevation": 841
  },
  {
    "icao": "KMSS",
    "iata": "MSS",
    "name": "Massena International Airport Richards Field",
    "city": "Massena",
    "country": "US",
    "lat": 44.936157,
    "lon": -74.844304,
    "elevation": 215
  },
  {
    "icao": "KMSY",
    "iata": "MSY",
    "name": "Louis Armstrong New Orleans International Airport",
    "city": "New Orleans",
    "country": "US",
    "lat": 29.993401,
    "lon": -90.258003,
    "elevation": 4
  },
  {
    "icao": "KMTC",
    "iata": "MTC",
    "name": "Selfridge Air National Guard Base Airport",
    "city": "Mount Clemens",
    "country": "US",
    "lat": 42.613463,
    "lon": -82.836919,
    "elevation": 580
  },
  {
    "icao": "KMTH",
    "iata": "MTH",
    "name": "The Florida Keys Marathon Airport",
    "city": "Marathon",
    "country": "US",
    "lat": 24.726101,
    "lon": -81.051399,
    "elevation": 5
  },
  {
    "icao": "KMTJ",
    "iata": "MTJ",
    "name": "Montrose Regional Airport",
    "city": "Montrose",
    "country": "US",
    "lat": 38.5098,
    "lon": -107.893997,
    "elevation": 5759
  },
  {
    "icao": "KMTN",
    "iata": "MTN",
    "name": "Martin State Airport",
    "city": "Baltimore",
    "country": "US",
    "lat": 39.325699,
    "lon": -76.413803,
    "elevation": 21
  },
  {
    "icao": "KMUI",
    "iata": "MUI",
    "name": "Muir Army Air Field (Fort Indiantown Gap) Airport",
    "city": "Fort Indiantown Gap(Annville)",
    "country": "US",
    "lat": 40.435214,
    "lon": -76.568661,
    "elevation": 488
  },
  {
    "icao": "KMUO",
    "iata": "MUO",
    "name": "Mountain Home Air Force Base",
    "city": "Mountain Home",
    "country": "US",
    "lat": 43.043598,
    "lon": -115.872002,
    "elevation": 2996
  },
  {
    "icao": "KMWA",
    "iata": "MWA",
    "name": "Veterans Airport of Southern Illinois",
    "city": "Marion",
    "country": "US",
    "lat": 37.751208,
    "lon": -89.016568,
    "elevation": 472
  },
  {
    "icao": "KMWH",
    "iata": "MWH",
    "name": "Grant County International Airport",
    "city": "Moses Lake",
    "country": "US",
    "lat": 47.20769882,
    "lon": -119.3199997,
    "elevation": 1189
  },
  {
    "icao": "KMXF",
    "iata": "MXF",
    "name": "Maxwell Air Force Base",
    "city": "Montgomery",
    "country": "US",
    "lat": 32.3829,
    "lon": -86.365799,
    "elevation": 171
  },
  {
    "icao": "KMYL",
    "iata": "MYL",
    "name": "McCall Municipal Airport",
    "city": "McCall",
    "country": "US",
    "lat": 44.888837,
    "lon": -116.101112,
    "elevation": 5024
  },
  {
    "icao": "KMYR",
    "iata": "MYR",
    "name": "Myrtle Beach International Airport",
    "city": "Myrtle Beach",
    "country": "US",
    "lat": 33.679699,
    "lon": -78.928299,
    "elevation": 25
  },
  {
    "icao": "KMYV",
    "iata": "MYV",
    "name": "Yuba County Airport",
    "city": "Marysville",
    "country": "US",
    "lat": 39.09780121,
    "lon": -121.5699997,
    "elevation": 64
  },
  {
    "icao": "KNBG",
    "iata": "NBG",
    "name": "New Orleans NAS JRB/Alvin Callender Field",
    "city": "New Orleans",
    "country": "US",
    "lat": 29.82530022,
    "lon": -90.03500366,
    "elevation": 2
  },
  {
    "icao": "KNEL",
    "iata": "NEL",
    "name": "Lakehurst Maxfield Field Airport",
    "city": "Lakehurst",
    "country": "US",
    "lat": 40.03329849,
    "lon": -74.353302,
    "elevation": 101
  },
  {
    "icao": "KNEW",
    "iata": "NEW",
    "name": "Lakefront Airport",
    "city": "New Orleans",
    "country": "US",
    "lat": 30.042400360107,
    "lon": -90.028297424316,
    "elevation": 8
  },
  {
    "icao": "KNFL",
    "iata": "NFL",
    "name": "Fallon Naval Air Station",
    "city": "Fallon",
    "country": "US",
    "lat": 39.41659927,
    "lon": -118.7009964,
    "elevation": 3934
  },
  {
    "icao": "KNFW",
    "iata": "FWH",
    "name": "NAS Fort Worth JRB / Carswell Field",
    "city": "Fort Worth",
    "country": "US",
    "lat": 32.769199,
    "lon": -97.441498,
    "elevation": 650
  },
  {
    "icao": "KNGP",
    "iata": "NGP",
    "name": "Naval Air Station Corpus Christi Truax Field",
    "city": "Corpus Christi",
    "country": "US",
    "lat": 27.6926,
    "lon": -97.2911,
    "elevation": 18
  },
  {
    "icao": "KNGU",
    "iata": "NGU",
    "name": "Norfolk Naval Station (Chambers Field)",
    "city": "Norfolk",
    "country": "US",
    "lat": 36.937599,
    "lon": -76.289299,
    "elevation": 17
  },
  {
    "icao": "KNHK",
    "iata": "NHK",
    "name": "Patuxent River Naval Air Station (Trapnell Field)",
    "city": "Patuxent River",
    "country": "US",
    "lat": 38.285999,
    "lon": -76.411797,
    "elevation": 39
  },
  {
    "icao": "KNIP",
    "iata": "NIP",
    "name": "Jacksonville Naval Air Station (Towers Field)",
    "city": "Jacksonville",
    "country": "US",
    "lat": 30.2358,
    "lon": -81.680603,
    "elevation": 21
  },
  {
    "icao": "KNJK",
    "iata": "NJK",
    "name": "El Centro NAF Airport (Vraciu Field)",
    "city": "El Centro",
    "country": "US",
    "lat": 32.829201,
    "lon": -115.671996,
    "elevation": -42
  },
  {
    "icao": "KNKX",
    "iata": "NKX",
    "name": "Miramar Marine Corps Air Station - Mitscher Field",
    "city": "San Diego",
    "country": "US",
    "lat": 32.86840057,
    "lon": -117.1429977,
    "elevation": 477
  },
  {
    "icao": "KNLC",
    "iata": "NLC",
    "name": "Lemoore Naval Air Station (Reeves Field) Airport",
    "city": "Lemoore",
    "country": "US",
    "lat": 36.33300018,
    "lon": -119.9520035,
    "elevation": 232
  },
  {
    "icao": "KNPA",
    "iata": "NPA",
    "name": "Naval Air Station Pensacola Forrest Sherman Field",
    "city": "Pensacola",
    "country": "US",
    "lat": 30.352699,
    "lon": -87.318604,
    "elevation": 28
  },
  {
    "icao": "KNQA",
    "iata": "NQA",
    "name": "Millington-Memphis Airport",
    "city": "Millington",
    "country": "US",
    "lat": 35.356701,
    "lon": -89.8703,
    "elevation": 320
  },
  {
    "icao": "KNQI",
    "iata": "NQI",
    "name": "Kingsville Naval Air Station",
    "city": "Kingsville",
    "country": "US",
    "lat": 27.5072002411,
    "lon": -97.8097000122,
    "elevation": 50
  },
  {
    "icao": "KNQX",
    "iata": "NQX",
    "name": "Naval Air Station Key West/Boca Chica Field",
    "city": "Key West",
    "country": "US",
    "lat": 24.57579994,
    "lon": -81.68890381,
    "elevation": 6
  },
  {
    "icao": "KNRB",
    "iata": "NRB",
    "name": "Naval Station Mayport / Admiral David L McDonald Field",
    "city": "Jacksonville",
    "country": "US",
    "lat": 30.3911,
    "lon": -81.424698,
    "elevation": 15
  },
  {
    "icao": "KNSE",
    "iata": "NSE",
    "name": "Whiting Field Naval Air Station - North",
    "city": "Milton",
    "country": "US",
    "lat": 30.7241993,
    "lon": -87.02189636,
    "elevation": 199
  },
  {
    "icao": "KNTD",
    "iata": "NTD",
    "name": "Point Mugu Naval Air Station (Naval Base Ventura Co)",
    "city": "Point Mugu",
    "country": "US",
    "lat": 34.120300293,
    "lon": -119.121002197,
    "elevation": 13
  },
  {
    "icao": "KNTU",
    "iata": "NTU",
    "name": "Oceana Naval Air Station",
    "city": "Virginia Beach",
    "country": "US",
    "lat": 36.820702,
    "lon": -76.033501,
    "elevation": 23
  },
  {
    "icao": "KNUQ",
    "iata": "NUQ",
    "name": "Moffett Federal Airfield",
    "city": "Mountain View",
    "country": "US",
    "lat": 37.4161,
    "lon": -122.049004,
    "elevation": 32
  },
  {
    "icao": "KNUW",
    "iata": "NUW",
    "name": "Whidbey Island Naval Air Station (Ault Field)",
    "city": "Oak Harbor",
    "country": "US",
    "lat": 48.351799,
    "lon": -122.655998,
    "elevation": 47
  },
  {
    "icao": "KNYG",
    "iata": "NYG",
    "name": "Quantico Marine Corps Airfield / Turner Field",
    "city": "Quantico",
    "country": "US",
    "lat": 38.501701,
    "lon": -77.305298,
    "elevation": 10
  },
  {
    "icao": "KNYL",
    "iata": "YUM",
    "name": "Yuma International Airport / Marine Corps Air Station Yuma",
    "city": "Yuma",
    "country": "US",
    "lat": 32.650938,
    "lon": -114.609375,
    "elevation": 213
  },
  {
    "icao": "KNZY",
    "iata": "NZY",
    "name": "North Island Naval Air Station-Halsey Field",
    "city": "San Diego",
    "country": "US",
    "lat": 32.69919968,
    "lon": -117.2149963,
    "elevation": 26
  },
  {
    "icao": "KOAJ",
    "iata": "OAJ",
    "name": "Albert J Ellis Airport",
    "city": "Richlands",
    "country": "US",
    "lat": 34.829201,
    "lon": -77.612099,
    "elevation": 94
  },
  {
    "icao": "KOAK",
    "iata": "OAK",
    "name": "San Francisco Bay Oakland International Airport",
    "city": "Oakland",
    "country": "US",
    "lat": 37.720085,
    "lon": -122.221184,
    "elevation": 9
  },
  {
    "icao": "KOFF",
    "iata": "OFF",
    "name": "Offutt Air Force Base",
    "city": "Omaha",
    "country": "US",
    "lat": 41.119307,
    "lon": -95.90851,
    "elevation": 1052
  },
  {
    "icao": "KOFK",
    "iata": "OFK",
    "name": "Karl Stefan Memorial Airport",
    "city": "Norfolk",
    "country": "US",
    "lat": 41.985500335693,
    "lon": -97.435096740723,
    "elevation": 1573
  },
  {
    "icao": "KOGB",
    "iata": "OGB",
    "name": "Orangeburg Municipal Airport",
    "city": "Orangeburg",
    "country": "US",
    "lat": 33.456798553467,
    "lon": -80.859497070312,
    "elevation": 195
  },
  {
    "icao": "KOGD",
    "iata": "OGD",
    "name": "Ogden Hinckley Airport",
    "city": "Ogden",
    "country": "US",
    "lat": 41.195899963379,
    "lon": -112.0120010376,
    "elevation": 4473
  },
  {
    "icao": "KOGS",
    "iata": "OGS",
    "name": "Ogdensburg International Airport",
    "city": "Ogdensburg",
    "country": "US",
    "lat": 44.6819,
    "lon": -75.4655,
    "elevation": 297
  },
  {
    "icao": "KOKC",
    "iata": "OKC",
    "name": "Will Rogers World Airport",
    "city": "Oklahoma City",
    "country": "US",
    "lat": 35.393388,
    "lon": -97.598248,
    "elevation": 1295
  },
  {
    "icao": "KOLF",
    "iata": "OLF",
    "name": "L M Clayton Airport",
    "city": "Wolf Point",
    "country": "US",
    "lat": 48.094501,
    "lon": -105.574997,
    "elevation": 1986
  },
  {
    "icao": "KOLM",
    "iata": "OLM",
    "name": "Olympia Regional Airport",
    "city": "Olympia",
    "country": "US",
    "lat": 46.969399,
    "lon": -122.903,
    "elevation": 209
  },
  {
    "icao": "KOLS",
    "iata": "OLS",
    "name": "Nogales International Airport",
    "city": "Nogales",
    "country": "US",
    "lat": 31.4177,
    "lon": -110.848,
    "elevation": 3955
  },
  {
    "icao": "KOLU",
    "iata": "OLU",
    "name": "Columbus Municipal Airport",
    "city": "Columbus",
    "country": "US",
    "lat": 41.448145,
    "lon": -97.340174,
    "elevation": 1447
  },
  {
    "icao": "KOMA",
    "iata": "OMA",
    "name": "Eppley Airfield",
    "city": "Omaha",
    "country": "US",
    "lat": 41.3032,
    "lon": -95.894096,
    "elevation": 984
  },
  {
    "icao": "KONO",
    "iata": "ONO",
    "name": "Ontario Municipal Airport",
    "city": "Oregon",
    "country": "US",
    "lat": 44.0198,
    "lon": -117.013289,
    "elevation": 2193
  },
  {
    "icao": "KONP",
    "iata": "ONP",
    "name": "Newport Municipal Airport",
    "city": "Newport",
    "country": "US",
    "lat": 44.580399,
    "lon": -124.057999,
    "elevation": 160
  },
  {
    "icao": "KONT",
    "iata": "ONT",
    "name": "Ontario International Airport",
    "city": "Ontario",
    "country": "US",
    "lat": 34.056,
    "lon": -117.600998,
    "elevation": 944
  },
  {
    "icao": "KOPF",
    "iata": "OPF",
    "name": "Miami-Opa Locka Executive Airport",
    "city": "Miami",
    "country": "US",
    "lat": 25.907,
    "lon": -80.278397,
    "elevation": 8
  },
  {
    "icao": "KOQU",
    "iata": "NCO",
    "name": "Quonset State Airport",
    "city": "North Kingstown",
    "country": "US",
    "lat": 41.597099304199,
    "lon": -71.412101745605,
    "elevation": 18
  },
  {
    "icao": "KORD",
    "iata": "ORD",
    "name": "Chicago O'Hare International Airport",
    "city": "Chicago",
    "country": "US",
    "lat": 41.9786,
    "lon": -87.9048,
    "elevation": 680
  },
  {
    "icao": "KORF",
    "iata": "ORF",
    "name": "Norfolk International Airport",
    "city": "Norfolk",
    "country": "US",
    "lat": 36.895341,
    "lon": -76.201,
    "elevation": 26
  },
  {
    "icao": "KORH",
    "iata": "ORH",
    "name": "Worcester Regional Airport",
    "city": "Worcester",
    "country": "US",
    "lat": 42.2673,
    "lon": -71.875702,
    "elevation": 1009
  },
  {
    "icao": "KORS",
    "iata": "ESD",
    "name": "Orcas Island Airport",
    "city": "Eastsound",
    "country": "US",
    "lat": 48.708199,
    "lon": -122.910004,
    "elevation": 31
  },
  {
    "icao": "KOSH",
    "iata": "OSH",
    "name": "Wittman Regional Airport",
    "city": "Oshkosh",
    "country": "US",
    "lat": 43.98440170288086,
    "lon": -88.55699920654297,
    "elevation": 808
  },
  {
    "icao": "KOSU",
    "iata": "OSU",
    "name": "The Ohio State University Airport - Don Scott Field",
    "city": "Columbus",
    "country": "US",
    "lat": 40.0798,
    "lon": -83.072998,
    "elevation": 905
  },
  {
    "icao": "KOTH",
    "iata": "OTH",
    "name": "Southwest Oregon Regional Airport",
    "city": "North Bend",
    "country": "US",
    "lat": 43.41709899902344,
    "lon": -124.24600219726562,
    "elevation": 17
  },
  {
    "icao": "KOTM",
    "iata": "OTM",
    "name": "Ottumwa Regional Airport",
    "city": "Ottumwa",
    "country": "US",
    "lat": 41.106368,
    "lon": -92.449837,
    "elevation": 845
  },
  {
    "icao": "KOWB",
    "iata": "OWB",
    "name": "Owensboro Daviess County Airport",
    "city": "Owensboro",
    "country": "US",
    "lat": 37.74010086,
    "lon": -87.16680145,
    "elevation": 407
  },
  {
    "icao": "KOWD",
    "iata": "OWD",
    "name": "Norwood Memorial Airport",
    "city": "Norwood",
    "country": "US",
    "lat": 42.1904983521,
    "lon": -71.1728973389,
    "elevation": 49
  },
  {
    "icao": "KOXR",
    "iata": "OXR",
    "name": "Oxnard Airport",
    "city": "Oxnard",
    "country": "US",
    "lat": 34.200801849365,
    "lon": -119.20700073242,
    "elevation": 45
  },
  {
    "icao": "KOZR",
    "iata": "OZR",
    "name": "Cairns AAF (Fort Rucker) Air Field",
    "city": "Fort Rucker/Ozark",
    "country": "US",
    "lat": 31.27569962,
    "lon": -85.71340179,
    "elevation": 301
  },
  {
    "icao": "KPAE",
    "iata": "PAE",
    "name": "Seattle Paine Field International Airport",
    "city": "Everett",
    "country": "US",
    "lat": 47.9063,
    "lon": -122.281998,
    "elevation": 606
  },
  {
    "icao": "KPAH",
    "iata": "PAH",
    "name": "Barkley Regional Airport",
    "city": "Paducah",
    "country": "US",
    "lat": 37.06079864501953,
    "lon": -88.7738037109375,
    "elevation": 410
  },
  {
    "icao": "KPAM",
    "iata": "PAM",
    "name": "Tyndall Air Force Base",
    "city": "Panama City",
    "country": "US",
    "lat": 30.069599,
    "lon": -85.575401,
    "elevation": 17
  },
  {
    "icao": "KPAO",
    "iata": "PAO",
    "name": "Palo Alto Airport",
    "city": "Palo Alto",
    "country": "US",
    "lat": 37.461102,
    "lon": -122.114998,
    "elevation": 4
  },
  {
    "icao": "KPBF",
    "iata": "PBF",
    "name": "Pine Bluff Regional Airport, Grider Field",
    "city": "Pine Bluff",
    "country": "US",
    "lat": 34.174121,
    "lon": -91.935643,
    "elevation": 206
  },
  {
    "icao": "KPBG",
    "iata": "PBG",
    "name": "Plattsburgh International Airport",
    "city": "Plattsburgh",
    "country": "US",
    "lat": 44.650901794433594,
    "lon": -73.46810150146484,
    "elevation": 234
  },
  {
    "icao": "KPBI",
    "iata": "PBI",
    "name": "Palm Beach International Airport",
    "city": "West Palm Beach",
    "country": "US",
    "lat": 26.683201,
    "lon": -80.095596,
    "elevation": 19
  },
  {
    "icao": "KPDK",
    "iata": "PDK",
    "name": "DeKalb Peachtree Airport",
    "city": "Atlanta",
    "country": "US",
    "lat": 33.87633,
    "lon": -84.30213,
    "elevation": 1003
  },
  {
    "icao": "KPDT",
    "iata": "PDT",
    "name": "Eastern Oregon Regional Airport at Pendleton",
    "city": "Pendleton",
    "country": "US",
    "lat": 45.695099,
    "lon": -118.841003,
    "elevation": 1497
  },
  {
    "icao": "KPDX",
    "iata": "PDX",
    "name": "Portland International Airport",
    "city": "Portland",
    "country": "US",
    "lat": 45.588699,
    "lon": -122.598,
    "elevation": 31
  },
  {
    "icao": "KPGA",
    "iata": "PGA",
    "name": "Page Municipal Airport",
    "city": "Page",
    "country": "US",
    "lat": 36.924234,
    "lon": -111.447716,
    "elevation": 4316
  },
  {
    "icao": "KPGD",
    "iata": "PGD",
    "name": "Punta Gorda Airport",
    "city": "Punta Gorda",
    "country": "US",
    "lat": 26.9202,
    "lon": -81.990501,
    "elevation": 26
  },
  {
    "icao": "KPGV",
    "iata": "PGV",
    "name": "Pitt-Greenville Airport",
    "city": "Greenville",
    "country": "US",
    "lat": 35.635535,
    "lon": -77.384262,
    "elevation": 26
  },
  {
    "icao": "KPHF",
    "iata": "PHF",
    "name": "Newport News Williamsburg International Airport",
    "city": "Newport News",
    "country": "US",
    "lat": 37.131901,
    "lon": -76.492996,
    "elevation": 42
  },
  {
    "icao": "KPHL",
    "iata": "PHL",
    "name": "Philadelphia International Airport",
    "city": "Philadelphia",
    "country": "US",
    "lat": 39.871899,
    "lon": -75.241096,
    "elevation": 36
  },
  {
    "icao": "KPHX",
    "iata": "PHX",
    "name": "Phoenix Sky Harbor International Airport",
    "city": "Phoenix",
    "country": "US",
    "lat": 33.435302,
    "lon": -112.005905,
    "elevation": 1135
  },
  {
    "icao": "KPIA",
    "iata": "PIA",
    "name": "General Wayne A. Downing Peoria International Airport",
    "city": "Peoria",
    "country": "US",
    "lat": 40.6642,
    "lon": -89.693298,
    "elevation": 660
  },
  {
    "icao": "KPIB",
    "iata": "PIB",
    "name": "Hattiesburg Laurel Regional Airport",
    "city": "Moselle",
    "country": "US",
    "lat": 31.4671,
    "lon": -89.337097,
    "elevation": 298
  },
  {
    "icao": "KPIE",
    "iata": "PIE",
    "name": "St. Petersburg Clearwater International Airport",
    "city": "Pinellas Park",
    "country": "US",
    "lat": 27.9102,
    "lon": -82.687401,
    "elevation": 11
  },
  {
    "icao": "KPIH",
    "iata": "PIH",
    "name": "Pocatello Regional Airport",
    "city": "Pocatello",
    "country": "US",
    "lat": 42.9098014831543,
    "lon": -112.59600067138672,
    "elevation": 4452
  },
  {
    "icao": "KPIR",
    "iata": "PIR",
    "name": "Pierre Regional Airport",
    "city": "Pierre",
    "country": "US",
    "lat": 44.38270187,
    "lon": -100.2860031,
    "elevation": 1744
  },
  {
    "icao": "KPIT",
    "iata": "PIT",
    "name": "Pittsburgh International Airport",
    "city": "Pittsburgh",
    "country": "US",
    "lat": 40.491501,
    "lon": -80.232903,
    "elevation": 1203
  },
  {
    "icao": "KPKB",
    "iata": "PKB",
    "name": "Mid Ohio Valley Regional Airport",
    "city": "Parkersburg (Williamstown)",
    "country": "US",
    "lat": 39.3451,
    "lon": -81.439201,
    "elevation": 858
  },
  {
    "icao": "KPLN",
    "iata": "PLN",
    "name": "Pellston Regional Airport of Emmet County Airport",
    "city": "Pellston",
    "country": "US",
    "lat": 45.57089996,
    "lon": -84.79669952,
    "elevation": 721
  },
  {
    "icao": "KPMD",
    "iata": "PMD",
    "name": "Palmdale Regional Airport / USAF Plant 42 Airport",
    "city": "Palmdale",
    "country": "US",
    "lat": 34.629398,
    "lon": -118.084999,
    "elevation": 2543
  },
  {
    "icao": "KPNA",
    "iata": "PWY",
    "name": "Ralph Wenz Field",
    "city": "Pinedale",
    "country": "US",
    "lat": 42.79550171,
    "lon": -109.8069992,
    "elevation": 7102
  },
  {
    "icao": "KPNC",
    "iata": "PNC",
    "name": "Ponca City Regional Airport",
    "city": "Ponca City",
    "country": "US",
    "lat": 36.73199844,
    "lon": -97.09980011,
    "elevation": 1008
  },
  {
    "icao": "KPNE",
    "iata": "PNE",
    "name": "Northeast Philadelphia Airport",
    "city": "Philadelphia",
    "country": "US",
    "lat": 40.082406,
    "lon": -75.010614,
    "elevation": 120
  },
  {
    "icao": "KPNS",
    "iata": "PNS",
    "name": "Pensacola International Airport",
    "city": "Pensacola",
    "country": "US",
    "lat": 30.4734,
    "lon": -87.1866,
    "elevation": 121
  },
  {
    "icao": "KPOB",
    "iata": "POB",
    "name": "Pope Field",
    "city": "Fort Bragg",
    "country": "US",
    "lat": 35.170898,
    "lon": -79.014503,
    "elevation": 217
  },
  {
    "icao": "KPOE",
    "iata": "POE",
    "name": "Polk Army Air Field",
    "city": "Fort Polk",
    "country": "US",
    "lat": 31.0447998,
    "lon": -93.1917038,
    "elevation": 330
  },
  {
    "icao": "KPOU",
    "iata": "POU",
    "name": "Dutchess County Airport",
    "city": "Poughkeepsie",
    "country": "US",
    "lat": 41.6265983581543,
    "lon": -73.88420104980469,
    "elevation": 165
  },
  {
    "icao": "KPQI",
    "iata": "PQI",
    "name": "Presque Isle International Airport",
    "city": "Presque Isle",
    "country": "US",
    "lat": 46.688999,
    "lon": -68.0448,
    "elevation": 534
  },
  {
    "icao": "KPRB",
    "iata": "PRB",
    "name": "Paso Robles Municipal Airport",
    "city": "Paso Robles",
    "country": "US",
    "lat": 35.67290115,
    "lon": -120.6269989,
    "elevation": 840
  },
  {
    "icao": "KPRC",
    "iata": "PRC",
    "name": "Prescott International Airport - Ernest A. Love Field",
    "city": "Prescott",
    "country": "US",
    "lat": 34.654499,
    "lon": -112.419998,
    "elevation": 5045
  },
  {
    "icao": "KPRX",
    "iata": "PRX",
    "name": "Cox Field",
    "city": "Paris",
    "country": "US",
    "lat": 33.636600494385,
    "lon": -95.450798034668,
    "elevation": 547
  },
  {
    "icao": "KPSC",
    "iata": "PSC",
    "name": "Tri Cities Airport",
    "city": "Pasco",
    "country": "US",
    "lat": 46.264702,
    "lon": -119.119003,
    "elevation": 410
  },
  {
    "icao": "KPSM",
    "iata": "PSM",
    "name": "Portsmouth International at Pease Airport",
    "city": "Portsmouth",
    "country": "US",
    "lat": 43.0778999329,
    "lon": -70.8233032227,
    "elevation": 100
  },
  {
    "icao": "KPSP",
    "iata": "PSP",
    "name": "Palm Springs International Airport",
    "city": "Palm Springs",
    "country": "US",
    "lat": 33.8297,
    "lon": -116.507004,
    "elevation": 477
  },
  {
    "icao": "KPTK",
    "iata": "PTK",
    "name": "Oakland County International Airport",
    "city": "Pontiac",
    "country": "US",
    "lat": 42.665500640869,
    "lon": -83.420097351074,
    "elevation": 980
  },
  {
    "icao": "KPUB",
    "iata": "PUB",
    "name": "Pueblo Memorial Airport",
    "city": "Pueblo",
    "country": "US",
    "lat": 38.289101,
    "lon": -104.497002,
    "elevation": 4726
  },
  {
    "icao": "KPUW",
    "iata": "PUW",
    "name": "Pullman-Moscow Regional Airport",
    "city": "Pullman",
    "country": "US",
    "lat": 46.741601,
    "lon": -117.11163,
    "elevation": 2556
  },
  {
    "icao": "KPVD",
    "iata": "PVD",
    "name": "Theodore Francis Green State Airport",
    "city": "Warwick",
    "country": "US",
    "lat": 41.725038,
    "lon": -71.425668,
    "elevation": 55
  },
  {
    "icao": "KPVU",
    "iata": "PVU",
    "name": "Provo-Utah Lake International Airport",
    "city": "Provo",
    "country": "US",
    "lat": 40.2192,
    "lon": -111.723,
    "elevation": 4497
  },
  {
    "icao": "KPWK",
    "iata": "PWK",
    "name": "Chicago Executive Airport",
    "city": "Chicago/Prospect Heights/Wheeling",
    "country": "US",
    "lat": 42.114222,
    "lon": -87.901494,
    "elevation": 647
  },
  {
    "icao": "KPWM",
    "iata": "PWM",
    "name": "Portland International Jetport",
    "city": "Portland",
    "country": "US",
    "lat": 43.646198,
    "lon": -70.309303,
    "elevation": 76
  },
  {
    "icao": "KPWT",
    "iata": "PWT",
    "name": "Bremerton National Airport",
    "city": "Bremerton",
    "country": "US",
    "lat": 47.490200042725,
    "lon": -122.76499938965,
    "elevation": 444
  },
  {
    "icao": "KRAL",
    "iata": "RAL",
    "name": "Riverside Municipal Airport",
    "city": "Riverside",
    "country": "US",
    "lat": 33.9519,
    "lon": -117.445,
    "elevation": 819
  },
  {
    "icao": "KRAP",
    "iata": "RAP",
    "name": "Rapid City Regional Airport",
    "city": "Rapid City",
    "country": "US",
    "lat": 44.0452995300293,
    "lon": -103.05699920654297,
    "elevation": 3204
  },
  {
    "icao": "KRBL",
    "iata": "RBL",
    "name": "Red Bluff Municipal Airport",
    "city": "Red Bluff",
    "country": "US",
    "lat": 40.1506996155,
    "lon": -122.251998901,
    "elevation": 352
  },
  {
    "icao": "KRCA",
    "iata": "RCA",
    "name": "Ellsworth Air Force Base",
    "city": "Rapid City",
    "country": "US",
    "lat": 44.14500046,
    "lon": -103.1039963,
    "elevation": 3276
  },
  {
    "icao": "KRDD",
    "iata": "RDD",
    "name": "Redding Municipal Airport",
    "city": "Redding",
    "country": "US",
    "lat": 40.50899887,
    "lon": -122.2929993,
    "elevation": 505
  },
  {
    "icao": "KRDG",
    "iata": "RDG",
    "name": "Reading Regional Airport (Carl A Spaatz Field)",
    "city": "Reading",
    "country": "US",
    "lat": 40.378502,
    "lon": -75.965202,
    "elevation": 344
  },
  {
    "icao": "KRDM",
    "iata": "RDM",
    "name": "Roberts Field",
    "city": "Redmond",
    "country": "US",
    "lat": 44.254101,
    "lon": -121.150002,
    "elevation": 3080
  },
  {
    "icao": "KRDR",
    "iata": "RDR",
    "name": "Grand Forks Air Force Base",
    "city": "Grand Forks",
    "country": "US",
    "lat": 47.961101532,
    "lon": -97.4011993408,
    "elevation": 913
  },
  {
    "icao": "KRDU",
    "iata": "RDU",
    "name": "Raleigh Durham International Airport",
    "city": "Raleigh/Durham",
    "country": "US",
    "lat": 35.877602,
    "lon": -78.787498,
    "elevation": 435
  },
  {
    "icao": "KRFD",
    "iata": "RFD",
    "name": "Chicago Rockford International Airport",
    "city": "Chicago/Rockford",
    "country": "US",
    "lat": 42.1954,
    "lon": -89.097198,
    "elevation": 742
  },
  {
    "icao": "KRHI",
    "iata": "RHI",
    "name": "Rhinelander Oneida County Airport",
    "city": "Rhinelander",
    "country": "US",
    "lat": 45.63119888305664,
    "lon": -89.46749877929688,
    "elevation": 1624
  },
  {
    "icao": "KRIC",
    "iata": "RIC",
    "name": "Richmond International Airport",
    "city": "Richmond",
    "country": "US",
    "lat": 37.505199,
    "lon": -77.319702,
    "elevation": 167
  },
  {
    "icao": "KRIL",
    "iata": "RIL",
    "name": "Garfield County Regional Airport",
    "city": "Rifle",
    "country": "US",
    "lat": 39.526299,
    "lon": -107.726997,
    "elevation": 5548
  },
  {
    "icao": "KRIV",
    "iata": "RIV",
    "name": "March Air Reserve Base",
    "city": "Riverside",
    "country": "US",
    "lat": 33.880699,
    "lon": -117.259003,
    "elevation": 1536
  },
  {
    "icao": "KRIW",
    "iata": "RIW",
    "name": "Central Wyoming Regional Airport",
    "city": "Riverton",
    "country": "US",
    "lat": 43.064201,
    "lon": -108.459999,
    "elevation": 5525
  },
  {
    "icao": "KRKD",
    "iata": "RKD",
    "name": "Knox County Regional Airport",
    "city": "Rockland",
    "country": "US",
    "lat": 44.060101,
    "lon": -69.099197,
    "elevation": 56
  },
  {
    "icao": "KRKS",
    "iata": "RKS",
    "name": "Southwest Wyoming Regional Airport",
    "city": "Rock Springs",
    "country": "US",
    "lat": 41.5942,
    "lon": -109.065001,
    "elevation": 6764
  },
  {
    "icao": "KRME",
    "iata": "RME",
    "name": "Griffiss International Airport",
    "city": "Rome",
    "country": "US",
    "lat": 43.23379898,
    "lon": -75.40699768,
    "elevation": 504
  },
  {
    "icao": "KRMG",
    "iata": "RMG",
    "name": "Richard B Russell Airport",
    "city": "Rome",
    "country": "US",
    "lat": 34.3506011963,
    "lon": -85.15799713130001,
    "elevation": 644
  },
  {
    "icao": "KRND",
    "iata": "RND",
    "name": "Randolph Air Force Base",
    "city": "Universal City",
    "country": "US",
    "lat": 29.529699,
    "lon": -98.2789,
    "elevation": 761
  },
  {
    "icao": "KRNH",
    "iata": "RNH",
    "name": "New Richmond Regional Airport",
    "city": "New Richmond",
    "country": "US",
    "lat": 45.1483,
    "lon": -92.538101,
    "elevation": 998
  },
  {
    "icao": "KRNO",
    "iata": "RNO",
    "name": "Reno Tahoe International Airport",
    "city": "Reno",
    "country": "US",
    "lat": 39.4991,
    "lon": -119.767998,
    "elevation": 4415
  },
  {
    "icao": "KROA",
    "iata": "ROA",
    "name": "Roanoke–Blacksburg Regional Airport",
    "city": "Roanoke",
    "country": "US",
    "lat": 37.3255,
    "lon": -79.975403,
    "elevation": 1175
  },
  {
    "icao": "KROC",
    "iata": "ROC",
    "name": "Frederick Douglass Greater Rochester International Airport",
    "city": "Rochester",
    "country": "US",
    "lat": 43.1189,
    "lon": -77.672401,
    "elevation": 559
  },
  {
    "icao": "KROW",
    "iata": "ROW",
    "name": "Roswell Air Center Airport",
    "city": "Roswell",
    "country": "US",
    "lat": 33.301601,
    "lon": -104.530998,
    "elevation": 3671
  },
  {
    "icao": "KRSL",
    "iata": "RSL",
    "name": "Russell Municipal Airport",
    "city": "Russell",
    "country": "US",
    "lat": 38.872100830078,
    "lon": -98.811798095703,
    "elevation": 1862
  },
  {
    "icao": "KRST",
    "iata": "RST",
    "name": "Rochester International Airport",
    "city": "Rochester",
    "country": "US",
    "lat": 43.908298,
    "lon": -92.5,
    "elevation": 1317
  },
  {
    "icao": "KRSW",
    "iata": "RSW",
    "name": "Southwest Florida International Airport",
    "city": "Fort Myers",
    "country": "US",
    "lat": 26.53619956970215,
    "lon": -81.75520324707031,
    "elevation": 30
  },
  {
    "icao": "KRUT",
    "iata": "RUT",
    "name": "Rutland - Southern Vermont Regional Airport",
    "city": "Rutland",
    "country": "US",
    "lat": 43.5294,
    "lon": -72.9496,
    "elevation": 787
  },
  {
    "icao": "KRVS",
    "iata": "RVS",
    "name": "Tulsa Riverside Airport",
    "city": "Tulsa",
    "country": "US",
    "lat": 36.0396,
    "lon": -95.984596,
    "elevation": 638
  },
  {
    "icao": "KRWF",
    "iata": "RWF",
    "name": "Redwood Falls Municipal Airport",
    "city": "Redwood Falls",
    "country": "US",
    "lat": 44.547199,
    "lon": -95.082298,
    "elevation": 1024
  },
  {
    "icao": "KRWI",
    "iata": "RWI",
    "name": "Rocky Mount Wilson Regional Airport",
    "city": "Rocky Mount",
    "country": "US",
    "lat": 35.8563,
    "lon": -77.891899,
    "elevation": 159
  },
  {
    "icao": "KRWL",
    "iata": "RWL",
    "name": "Rawlins Municipal Airport/Harvey Field",
    "city": "Rawlins",
    "country": "US",
    "lat": 41.80559921,
    "lon": -107.1999969,
    "elevation": 6813
  },
  {
    "icao": "KSAC",
    "iata": "SAC",
    "name": "Sacramento Executive Airport",
    "city": "Sacramento",
    "country": "US",
    "lat": 38.5125007629,
    "lon": -121.492996216,
    "elevation": 24
  },
  {
    "icao": "KSAF",
    "iata": "SAF",
    "name": "Santa Fe Municipal Airport",
    "city": "Santa Fe",
    "country": "US",
    "lat": 35.6171,
    "lon": -106.088997,
    "elevation": 6348
  },
  {
    "icao": "KSAN",
    "iata": "SAN",
    "name": "San Diego International Airport",
    "city": "San Diego",
    "country": "US",
    "lat": 32.7336006165,
    "lon": -117.190002441,
    "elevation": 17
  },
  {
    "icao": "KSAT",
    "iata": "SAT",
    "name": "San Antonio International Airport",
    "city": "San Antonio",
    "country": "US",
    "lat": 29.533701,
    "lon": -98.469803,
    "elevation": 809
  },
  {
    "icao": "KSAV",
    "iata": "SAV",
    "name": "Savannah Hilton Head International Airport",
    "city": "Savannah",
    "country": "US",
    "lat": 32.127602,
    "lon": -81.202103,
    "elevation": 50
  },
  {
    "icao": "KSAW",
    "iata": "MQT",
    "name": "Marquette/Sawyer International Airport",
    "city": "Gwinn",
    "country": "US",
    "lat": 46.3536,
    "lon": -87.395401,
    "elevation": 1221
  },
  {
    "icao": "KSBA",
    "iata": "SBA",
    "name": "Santa Barbara Municipal Airport",
    "city": "Santa Barbara",
    "country": "US",
    "lat": 34.426201,
    "lon": -119.839996,
    "elevation": 13
  },
  {
    "icao": "KSBD",
    "iata": "SBD",
    "name": "San Bernardino International Airport",
    "city": "San Bernardino",
    "country": "US",
    "lat": 34.095402,
    "lon": -117.235001,
    "elevation": 1159
  },
  {
    "icao": "KSBN",
    "iata": "SBN",
    "name": "South Bend Regional Airport",
    "city": "South Bend",
    "country": "US",
    "lat": 41.708698,
    "lon": -86.317299,
    "elevation": 799
  },
  {
    "icao": "KSBP",
    "iata": "SBP",
    "name": "San Luis County Regional Airport",
    "city": "San Luis Obispo",
    "country": "US",
    "lat": 35.236801147499996,
    "lon": -120.641998291,
    "elevation": 212
  },
  {
    "icao": "KSBY",
    "iata": "SBY",
    "name": "Salisbury Ocean City Wicomico Regional Airport",
    "city": "Salisbury",
    "country": "US",
    "lat": 38.34049987792969,
    "lon": -75.51029968261719,
    "elevation": 52
  },
  {
    "icao": "KSCH",
    "iata": "SCH",
    "name": "Schenectady County Airport",
    "city": "Schenectady",
    "country": "US",
    "lat": 42.852500915527,
    "lon": -73.928901672363,
    "elevation": 378
  },
  {
    "icao": "KSCK",
    "iata": "SCK",
    "name": "Stockton Metropolitan Airport",
    "city": "Stockton",
    "country": "US",
    "lat": 37.893279,
    "lon": -121.238079,
    "elevation": 33
  },
  {
    "icao": "KSDF",
    "iata": "SDF",
    "name": "Louisville Muhammad Ali International Airport",
    "city": "Louisville",
    "country": "US",
    "lat": 38.1744,
    "lon": -85.736,
    "elevation": 501
  },
  {
    "icao": "KSDM",
    "iata": "SDM",
    "name": "Brown Field Municipal Airport",
    "city": "San Diego",
    "country": "US",
    "lat": 32.572639,
    "lon": -116.980019,
    "elevation": 526
  },
  {
    "icao": "KSDY",
    "iata": "SDY",
    "name": "Sidney - Richland Regional Airport",
    "city": "Sidney",
    "country": "US",
    "lat": 47.705141,
    "lon": -104.194422,
    "elevation": 1985
  },
  {
    "icao": "KSEA",
    "iata": "SEA",
    "name": "Seattle–Tacoma International Airport",
    "city": "Seattle",
    "country": "US",
    "lat": 47.447943,
    "lon": -122.310276,
    "elevation": 433
  },
  {
    "icao": "KSFB",
    "iata": "SFB",
    "name": "Orlando Sanford International Airport",
    "city": "Orlando",
    "country": "US",
    "lat": 28.777599334716797,
    "lon": -81.23750305175781,
    "elevation": 55
  },
  {
    "icao": "KSFF",
    "iata": "SFF",
    "name": "Felts Field",
    "city": "Spokane",
    "country": "US",
    "lat": 47.682899,
    "lon": -117.321925,
    "elevation": 1953
  },
  {
    "icao": "KSFO",
    "iata": "SFO",
    "name": "San Francisco International Airport",
    "city": "San Francisco",
    "country": "US",
    "lat": 37.619806,
    "lon": -122.374821,
    "elevation": 13
  },
  {
    "icao": "KSGF",
    "iata": "SGF",
    "name": "Springfield Branson National Airport",
    "city": "Springfield",
    "country": "US",
    "lat": 37.245701,
    "lon": -93.388603,
    "elevation": 1268
  },
  {
    "icao": "KSGH",
    "iata": "SGH",
    "name": "Springfield-Beckley Municipal Airport",
    "city": "Springfield",
    "country": "US",
    "lat": 39.840301513672,
    "lon": -83.840202331543,
    "elevation": 1051
  },
  {
    "icao": "KSGJ",
    "iata": "UST",
    "name": "Northeast Florida Regional Airport",
    "city": "St Augustine",
    "country": "US",
    "lat": 29.9592,
    "lon": -81.339798,
    "elevation": 10
  },
  {
    "icao": "KSGR",
    "iata": "SGR",
    "name": "Sugar Land Regional Airport",
    "city": "Houston",
    "country": "US",
    "lat": 29.622299194336,
    "lon": -95.65650177002,
    "elevation": 82
  },
  {
    "icao": "KSGU",
    "iata": "SGU",
    "name": "St George Regional Airport",
    "city": "St George",
    "country": "US",
    "lat": 37.036389,
    "lon": -113.510306,
    "elevation": 2941
  },
  {
    "icao": "KSHD",
    "iata": "SHD",
    "name": "Shenandoah Valley Regional Airport",
    "city": "Weyers Cave",
    "country": "US",
    "lat": 38.263802,
    "lon": -78.8964,
    "elevation": 1201
  },
  {
    "icao": "KSHR",
    "iata": "SHR",
    "name": "Sheridan County Airport",
    "city": "Sheridan",
    "country": "US",
    "lat": 44.76919937133789,
    "lon": -106.9800033569336,
    "elevation": 4021
  },
  {
    "icao": "KSHV",
    "iata": "SHV",
    "name": "Shreveport Regional Airport",
    "city": "Shreveport",
    "country": "US",
    "lat": 32.446602,
    "lon": -93.8256,
    "elevation": 258
  },
  {
    "icao": "KSJC",
    "iata": "SJC",
    "name": "Norman Y. Mineta San Jose International Airport",
    "city": "San Jose",
    "country": "US",
    "lat": 37.362452,
    "lon": -121.929188,
    "elevation": 62
  },
  {
    "icao": "KSJT",
    "iata": "SJT",
    "name": "San Angelo Regional Mathis Field",
    "city": "San Angelo",
    "country": "US",
    "lat": 31.35770034790039,
    "lon": -100.49600219726562,
    "elevation": 1919
  },
  {
    "icao": "KSKA",
    "iata": "SKA",
    "name": "Fairchild Air Force Base",
    "city": "Spokane",
    "country": "US",
    "lat": 47.615101,
    "lon": -117.655998,
    "elevation": 2461
  },
  {
    "icao": "KSKF",
    "iata": "SKF",
    "name": "Lackland Air Force Base",
    "city": "San Antonio",
    "country": "US",
    "lat": 29.38419914,
    "lon": -98.58110046,
    "elevation": 691
  },
  {
    "icao": "KSKX",
    "iata": "TSM",
    "name": "Taos Regional Airport",
    "city": "Taos",
    "country": "US",
    "lat": 36.452494,
    "lon": -105.67749,
    "elevation": 7095
  },
  {
    "icao": "KSLC",
    "iata": "SLC",
    "name": "Salt Lake City International Airport",
    "city": "Salt Lake City",
    "country": "US",
    "lat": 40.78886,
    "lon": -111.979866,
    "elevation": 4227
  },
  {
    "icao": "KSLE",
    "iata": "SLE",
    "name": "Salem-Willamette Valley Airport/McNary Field",
    "city": "Salem",
    "country": "US",
    "lat": 44.9095,
    "lon": -123.002998,
    "elevation": 214
  },
  {
    "icao": "KSLK",
    "iata": "SLK",
    "name": "Adirondack Regional Airport",
    "city": "Saranac Lake",
    "country": "US",
    "lat": 44.38691,
    "lon": -74.204629,
    "elevation": 1663
  },
  {
    "icao": "KSLN",
    "iata": "SLN",
    "name": "Salina Municipal Airport",
    "city": "Salina",
    "country": "US",
    "lat": 38.79100036621094,
    "lon": -97.6521987915039,
    "elevation": 1288
  },
  {
    "icao": "KSME",
    "iata": "SME",
    "name": "Lake Cumberland Regional Airport",
    "city": "Somerset",
    "country": "US",
    "lat": 37.053398132299996,
    "lon": -84.6158981323,
    "elevation": 927
  },
  {
    "icao": "KSMF",
    "iata": "SMF",
    "name": "Sacramento International Airport",
    "city": "Sacramento",
    "country": "US",
    "lat": 38.6954,
    "lon": -121.591003,
    "elevation": 27
  },
  {
    "icao": "KSMN",
    "iata": "SMN",
    "name": "Lemhi County Airport",
    "city": "Salmon",
    "country": "US",
    "lat": 45.122233,
    "lon": -113.88196,
    "elevation": 4043
  },
  {
    "icao": "KSMO",
    "iata": "SMO",
    "name": "Santa Monica Municipal Airport",
    "city": "Santa Monica",
    "country": "US",
    "lat": 34.0158,
    "lon": -118.450996,
    "elevation": 170
  },
  {
    "icao": "KSMX",
    "iata": "SMX",
    "name": "Santa Maria Public Airport Captain G Allan Hancock Field",
    "city": "Santa Maria",
    "country": "US",
    "lat": 34.898899,
    "lon": -120.457001,
    "elevation": 261
  },
  {
    "icao": "KSNA",
    "iata": "SNA",
    "name": "John Wayne Orange County International Airport",
    "city": "Santa Ana",
    "country": "US",
    "lat": 33.675701,
    "lon": -117.867996,
    "elevation": 56
  },
  {
    "icao": "KSNS",
    "iata": "SNS",
    "name": "Salinas Municipal Airport",
    "city": "Salinas",
    "country": "US",
    "lat": 36.662799835205,
    "lon": -121.60600280762,
    "elevation": 85
  },
  {
    "icao": "KSNY",
    "iata": "SNY",
    "name": "Sidney Municipal Airport Lloyd W Carr Field",
    "city": "Sidney",
    "country": "US",
    "lat": 41.101299,
    "lon": -102.985001,
    "elevation": 4313
  },
  {
    "icao": "KSOW",
    "iata": "SOW",
    "name": "Show Low Regional Airport",
    "city": "Show Low",
    "country": "US",
    "lat": 34.264062,
    "lon": -110.007091,
    "elevation": 6415
  },
  {
    "icao": "KSPI",
    "iata": "SPI",
    "name": "Abraham Lincoln Capital Airport",
    "city": "Springfield",
    "country": "US",
    "lat": 39.844101,
    "lon": -89.677902,
    "elevation": 598
  },
  {
    "icao": "KSPS",
    "iata": "SPS",
    "name": "Wichita Falls Municipal Airport / Sheppard Air Force Base",
    "city": "Wichita Falls",
    "country": "US",
    "lat": 33.9888,
    "lon": -98.491898,
    "elevation": 1019
  },
  {
    "icao": "KSQL",
    "iata": "SQL",
    "name": "San Carlos Airport",
    "city": "San Carlos",
    "country": "US",
    "lat": 37.51313,
    "lon": -122.250838,
    "elevation": 5
  },
  {
    "icao": "KSRQ",
    "iata": "SRQ",
    "name": "Sarasota Bradenton International Airport",
    "city": "Sarasota/Bradenton",
    "country": "US",
    "lat": 27.394631,
    "lon": -82.554359,
    "elevation": 30
  },
  {
    "icao": "KSRR",
    "iata": "RUI",
    "name": "Sierra Blanca Regional Airport",
    "city": "Alto",
    "country": "US",
    "lat": 33.462799,
    "lon": -105.535004,
    "elevation": 6814
  },
  {
    "icao": "KSSC",
    "iata": "SSC",
    "name": "Shaw Air Force Base",
    "city": "Sumter",
    "country": "US",
    "lat": 33.972698,
    "lon": -80.470596,
    "elevation": 241
  },
  {
    "icao": "KSSF",
    "iata": "SSF",
    "name": "Stinson Municipal Airport",
    "city": "San Antonio",
    "country": "US",
    "lat": 29.336999893188,
    "lon": -98.471099853516,
    "elevation": 577
  },
  {
    "icao": "KSSI",
    "iata": "SSI",
    "name": "St Simons Island Airport",
    "city": "St Simons Island",
    "country": "US",
    "lat": 31.1518,
    "lon": -81.391296,
    "elevation": 19
  },
  {
    "icao": "KSTC",
    "iata": "STC",
    "name": "Saint Cloud Regional Airport",
    "city": "Saint Cloud",
    "country": "US",
    "lat": 45.5466,
    "lon": -94.059898,
    "elevation": 1031
  },
  {
    "icao": "KSTJ",
    "iata": "STJ",
    "name": "Rosecrans Memorial Airport",
    "city": "St Joseph",
    "country": "US",
    "lat": 39.771900177002,
    "lon": -94.909698486328,
    "elevation": 826
  },
  {
    "icao": "KSTL",
    "iata": "STL",
    "name": "St. Louis Lambert International Airport",
    "city": "St Louis",
    "country": "US",
    "lat": 38.748697,
    "lon": -90.370003,
    "elevation": 618
  },
  {
    "icao": "KSTP",
    "iata": "STP",
    "name": "Saint Paul Downtown Holman Field",
    "city": "Saint Paul",
    "country": "US",
    "lat": 44.93479,
    "lon": -93.060036,
    "elevation": 705
  },
  {
    "icao": "KSTS",
    "iata": "STS",
    "name": "Charles M. Schulz Sonoma County Airport",
    "city": "Santa Rosa",
    "country": "US",
    "lat": 38.50899887,
    "lon": -122.8130035,
    "elevation": 128
  },
  {
    "icao": "KSUN",
    "iata": "SUN",
    "name": "Friedman Memorial Airport",
    "city": "Hailey",
    "country": "US",
    "lat": 43.50439835,
    "lon": -114.2959976,
    "elevation": 5318
  },
  {
    "icao": "KSUS",
    "iata": "SUS",
    "name": "Spirit of St Louis Airport",
    "city": "St Louis",
    "country": "US",
    "lat": 38.662102,
    "lon": -90.652,
    "elevation": 463
  },
  {
    "icao": "KSUU",
    "iata": "SUU",
    "name": "Travis Air Force Base",
    "city": "Fairfield",
    "country": "US",
    "lat": 38.262699,
    "lon": -121.927002,
    "elevation": 62
  },
  {
    "icao": "KSUX",
    "iata": "SUX",
    "name": "Sioux Gateway Airport / Brigadier General Bud Day Field",
    "city": "Sioux City",
    "country": "US",
    "lat": 42.397605,
    "lon": -96.382237,
    "elevation": 1098
  },
  {
    "icao": "KSVC",
    "iata": "SVC",
    "name": "Grant County Airport",
    "city": "Silver City",
    "country": "US",
    "lat": 32.636701,
    "lon": -108.154736,
    "elevation": 5446
  },
  {
    "icao": "KSVN",
    "iata": "SVN",
    "name": "Hunter Army Air Field",
    "city": "Savannah",
    "country": "US",
    "lat": 32.00999832,
    "lon": -81.14569855,
    "elevation": 41
  },
  {
    "icao": "KSWF",
    "iata": "SWF",
    "name": "New York Stewart International Airport",
    "city": "Newburgh",
    "country": "US",
    "lat": 41.504101,
    "lon": -74.104797,
    "elevation": 491
  },
  {
    "icao": "KSWO",
    "iata": "SWO",
    "name": "Stillwater Regional Airport",
    "city": "Stillwater",
    "country": "US",
    "lat": 36.162132,
    "lon": -97.085581,
    "elevation": 1000
  },
  {
    "icao": "KSYR",
    "iata": "SYR",
    "name": "Syracuse Hancock International Airport",
    "city": "Syracuse",
    "country": "US",
    "lat": 43.11119842529297,
    "lon": -76.1063003540039,
    "elevation": 421
  },
  {
    "icao": "KSZL",
    "iata": "SZL",
    "name": "Whiteman Air Force Base",
    "city": "Knob Noster",
    "country": "US",
    "lat": 38.730301,
    "lon": -93.547897,
    "elevation": 870
  },
  {
    "icao": "KTBN",
    "iata": "TBN",
    "name": "Waynesville-St. Robert Regional Airport-Forney Field",
    "city": "Fort Leonard Wood",
    "country": "US",
    "lat": 37.7416,
    "lon": -92.140701,
    "elevation": 1159
  },
  {
    "icao": "KTCC",
    "iata": "TCC",
    "name": "Tucumcari Municipal Airport",
    "city": "Tucumcari",
    "country": "US",
    "lat": 35.182800293,
    "lon": -103.602996826,
    "elevation": 4065
  },
  {
    "icao": "KTCL",
    "iata": "TCL",
    "name": "Tuscaloosa National Airport",
    "city": "Tuscaloosa",
    "country": "US",
    "lat": 33.2206,
    "lon": -87.611397,
    "elevation": 170
  },
  {
    "icao": "KTCM",
    "iata": "TCM",
    "name": "McChord Air Force Base",
    "city": "Tacoma",
    "country": "US",
    "lat": 47.137699,
    "lon": -122.475998,
    "elevation": 322
  },
  {
    "icao": "KTCS",
    "iata": "TCS",
    "name": "Truth or Consequences Municipal Airport",
    "city": "Truth or Consequences",
    "country": "US",
    "lat": 33.2369,
    "lon": -107.272003,
    "elevation": 4853
  },
  {
    "icao": "KTEB",
    "iata": "TEB",
    "name": "Teterboro Airport",
    "city": "Teterboro",
    "country": "US",
    "lat": 40.850101,
    "lon": -74.060799,
    "elevation": 9
  },
  {
    "icao": "KTEX",
    "iata": "TEX",
    "name": "Telluride Regional Airport",
    "city": "Telluride",
    "country": "US",
    "lat": 37.9538,
    "lon": -107.907997,
    "elevation": 9070
  },
  {
    "icao": "KTIK",
    "iata": "TIK",
    "name": "Tinker Air Force Base",
    "city": "Oklahoma City",
    "country": "US",
    "lat": 35.4147,
    "lon": -97.386597,
    "elevation": 1291
  },
  {
    "icao": "KTIW",
    "iata": "TIW",
    "name": "Tacoma Narrows Airport",
    "city": "Tacoma",
    "country": "US",
    "lat": 47.267407,
    "lon": -122.577295,
    "elevation": 294
  },
  {
    "icao": "KTIX",
    "iata": "TIX",
    "name": "Space Coast Regional Airport",
    "city": "Titusville",
    "country": "US",
    "lat": 28.514799118042,
    "lon": -80.799201965332,
    "elevation": 34
  },
  {
    "icao": "KTLH",
    "iata": "TLH",
    "name": "Tallahassee Regional Airport",
    "city": "Tallahassee",
    "country": "US",
    "lat": 30.3965,
    "lon": -84.350304,
    "elevation": 81
  },
  {
    "icao": "KTMB",
    "iata": "TMB",
    "name": "Miami Executive Airport",
    "city": "Miami",
    "country": "US",
    "lat": 25.6479,
    "lon": -80.4328,
    "elevation": 8
  },
  {
    "icao": "KTOI",
    "iata": "TOI",
    "name": "Troy Municipal Airport at N Kenneth Campbell Field",
    "city": "Troy",
    "country": "US",
    "lat": 31.860399,
    "lon": -86.012101,
    "elevation": 398
  },
  {
    "icao": "KTOL",
    "iata": "TOL",
    "name": "Eugene F. Kranz Toledo Express Airport",
    "city": "Toledo",
    "country": "US",
    "lat": 41.5868,
    "lon": -83.8078,
    "elevation": 683
  },
  {
    "icao": "KTOP",
    "iata": "TOP",
    "name": "Philip Billard Municipal Airport",
    "city": "Topeka",
    "country": "US",
    "lat": 39.069899,
    "lon": -95.622606,
    "elevation": 881
  },
  {
    "icao": "KTPA",
    "iata": "TPA",
    "name": "Tampa International Airport",
    "city": "Tampa",
    "country": "US",
    "lat": 27.9755,
    "lon": -82.533203,
    "elevation": 26
  },
  {
    "icao": "KTPH",
    "iata": "TPH",
    "name": "Tonopah Airport",
    "city": "Tonopah",
    "country": "US",
    "lat": 38.06019974,
    "lon": -117.086998,
    "elevation": 5430
  },
  {
    "icao": "KTPL",
    "iata": "TPL",
    "name": "Draughon Miller Central Texas Regional Airport",
    "city": "Temple",
    "country": "US",
    "lat": 31.1525,
    "lon": -97.407799,
    "elevation": 682
  },
  {
    "icao": "KTRI",
    "iata": "TRI",
    "name": "Tri-Cities Regional TN/VA Airport",
    "city": "Blountville",
    "country": "US",
    "lat": 36.475201,
    "lon": -82.407401,
    "elevation": 1519
  },
  {
    "icao": "KTRK",
    "iata": "TKF",
    "name": "Truckee Tahoe Airport",
    "city": "Truckee",
    "country": "US",
    "lat": 39.318628,
    "lon": -120.140562,
    "elevation": 5900
  },
  {
    "icao": "KTRM",
    "iata": "TRM",
    "name": "Jacqueline Cochran Regional Airport",
    "city": "Palm Springs",
    "country": "US",
    "lat": 33.62670135498,
    "lon": -116.16000366211,
    "elevation": -115
  },
  {
    "icao": "KTTD",
    "iata": "TTD",
    "name": "Portland Troutdale Airport",
    "city": "Portland",
    "country": "US",
    "lat": 45.54940032959,
    "lon": -122.40100097656,
    "elevation": 39
  },
  {
    "icao": "KTTN",
    "iata": "TTN",
    "name": "Trenton Mercer Airport",
    "city": "Ewing Township",
    "country": "US",
    "lat": 40.276699,
    "lon": -74.813499,
    "elevation": 213
  },
  {
    "icao": "KTUL",
    "iata": "TUL",
    "name": "Tulsa International Airport",
    "city": "Tulsa",
    "country": "US",
    "lat": 36.19839859008789,
    "lon": -95.88809967041016,
    "elevation": 677
  },
  {
    "icao": "KTUP",
    "iata": "TUP",
    "name": "Tupelo Regional Airport",
    "city": "Tupelo",
    "country": "US",
    "lat": 34.26810073852539,
    "lon": -88.7698974609375,
    "elevation": 346
  },
  {
    "icao": "KTUS",
    "iata": "TUS",
    "name": "Tucson International Airport / Morris Air National Guard Base",
    "city": "Tucson",
    "country": "US",
    "lat": 32.115004,
    "lon": -110.938053,
    "elevation": 2643
  },
  {
    "icao": "KTVC",
    "iata": "TVC",
    "name": "Cherry Capital Airport",
    "city": "Traverse City",
    "country": "US",
    "lat": 44.74140167236328,
    "lon": -85.58219909667969,
    "elevation": 624
  },
  {
    "icao": "KTVF",
    "iata": "TVF",
    "name": "Thief River Falls Regional Airport",
    "city": "Thief River Falls",
    "country": "US",
    "lat": 48.065701,
    "lon": -96.184998,
    "elevation": 1119
  },
  {
    "icao": "KTVL",
    "iata": "TVL",
    "name": "Lake Tahoe Airport",
    "city": "South Lake Tahoe",
    "country": "US",
    "lat": 38.89390182495117,
    "lon": -119.99500274658203,
    "elevation": 6264
  },
  {
    "icao": "KTWF",
    "iata": "TWF",
    "name": "Joslin Field Magic Valley Regional Airport",
    "city": "Twin Falls",
    "country": "US",
    "lat": 42.4818,
    "lon": -114.487999,
    "elevation": 4154
  },
  {
    "icao": "KTXK",
    "iata": "TXK",
    "name": "Texarkana Regional Airport (Webb Field)",
    "city": "Texarkana",
    "country": "US",
    "lat": 33.453701,
    "lon": -93.990997,
    "elevation": 390
  },
  {
    "icao": "KTYR",
    "iata": "TYR",
    "name": "Tyler Pounds Regional Airport",
    "city": "Tyler",
    "country": "US",
    "lat": 32.35409927368164,
    "lon": -95.40239715576172,
    "elevation": 544
  },
  {
    "icao": "KTYS",
    "iata": "TYS",
    "name": "McGhee Tyson Airport",
    "city": "Alcoa",
    "country": "US",
    "lat": 35.811001,
    "lon": -83.994003,
    "elevation": 981
  },
  {
    "icao": "KUIN",
    "iata": "UIN",
    "name": "Quincy Regional Airport Baldwin Field",
    "city": "Quincy",
    "country": "US",
    "lat": 39.942699,
    "lon": -91.194603,
    "elevation": 768
  },
  {
    "icao": "KUKI",
    "iata": "UKI",
    "name": "Ukiah Municipal Airport",
    "city": "Ukiah",
    "country": "US",
    "lat": 39.125999,
    "lon": -123.200996,
    "elevation": 614
  },
  {
    "icao": "KUNV",
    "iata": "SCE",
    "name": "State College Regional Airport",
    "city": "State College",
    "country": "US",
    "lat": 40.849374,
    "lon": -77.84852,
    "elevation": 1239
  },
  {
    "icao": "KUOX",
    "iata": "UOX",
    "name": "University Oxford Airport",
    "city": "Oxford",
    "country": "US",
    "lat": 34.384300231934,
    "lon": -89.536796569824,
    "elevation": 452
  },
  {
    "icao": "KUTS",
    "iata": "HTV",
    "name": "Huntsville Regional Airport",
    "city": "Huntsville",
    "country": "US",
    "lat": 30.7469005585,
    "lon": -95.5871963501,
    "elevation": 363
  },
  {
    "icao": "KVAD",
    "iata": "VAD",
    "name": "Moody Air Force Base",
    "city": "Valdosta",
    "country": "US",
    "lat": 30.9678001404,
    "lon": -83.1930007935,
    "elevation": 233
  },
  {
    "icao": "KVBG",
    "iata": "VBG",
    "name": "Vandenberg Space Force Base",
    "city": "Lompoc",
    "country": "US",
    "lat": 34.737301,
    "lon": -120.584,
    "elevation": 369
  },
  {
    "icao": "KVCT",
    "iata": "VCT",
    "name": "Victoria Regional Airport",
    "city": "Victoria",
    "country": "US",
    "lat": 28.85260009765625,
    "lon": -96.91850280761719,
    "elevation": 115
  },
  {
    "icao": "KVEL",
    "iata": "VEL",
    "name": "Vernal Regional Airport",
    "city": "Vernal",
    "country": "US",
    "lat": 40.436214,
    "lon": -109.511661,
    "elevation": 5278
  },
  {
    "icao": "KVGT",
    "iata": "VGT",
    "name": "North Las Vegas Metropolitan International Airport",
    "city": "Las Vegas",
    "country": "US",
    "lat": 36.210701,
    "lon": -115.194,
    "elevation": 2205
  },
  {
    "icao": "KVIS",
    "iata": "VIS",
    "name": "Visalia Municipal Airport",
    "city": "Visalia",
    "country": "US",
    "lat": 36.318699,
    "lon": -119.392998,
    "elevation": 295
  },
  {
    "icao": "KVLD",
    "iata": "VLD",
    "name": "Valdosta Regional Airport",
    "city": "Valdosta",
    "country": "US",
    "lat": 30.782499313354492,
    "lon": -83.27670288085938,
    "elevation": 203
  },
  {
    "icao": "KVNY",
    "iata": "VNY",
    "name": "Van Nuys Airport",
    "city": "Van Nuys",
    "country": "US",
    "lat": 34.209800720215,
    "lon": -118.48999786377,
    "elevation": 802
  },
  {
    "icao": "KVOK",
    "iata": "VOK",
    "name": "Volk Field",
    "city": "Camp Douglas",
    "country": "US",
    "lat": 43.938999,
    "lon": -90.253403,
    "elevation": 912
  },
  {
    "icao": "KVPS",
    "iata": "VPS",
    "name": "Destin-Fort Walton Beach Airport",
    "city": "Valparaiso",
    "country": "US",
    "lat": 30.4832,
    "lon": -86.525398,
    "elevation": 87
  },
  {
    "icao": "KVPZ",
    "iata": "VPZ",
    "name": "Porter County Municipal Airport",
    "city": "Valparaiso",
    "country": "US",
    "lat": 41.45399857,
    "lon": -87.00710297,
    "elevation": 770
  },
  {
    "icao": "KVQQ",
    "iata": "VQQ",
    "name": "Cecil Airport",
    "city": "Jacksonville",
    "country": "US",
    "lat": 30.2187,
    "lon": -81.876701,
    "elevation": 81
  },
  {
    "icao": "KVRB",
    "iata": "VRB",
    "name": "Vero Beach Regional Airport",
    "city": "Vero Beach",
    "country": "US",
    "lat": 27.6556,
    "lon": -80.417901,
    "elevation": 24
  },
  {
    "icao": "KVTN",
    "iata": "VTN",
    "name": "Miller Field",
    "city": "Valentine",
    "country": "US",
    "lat": 42.856211,
    "lon": -100.549192,
    "elevation": 2596
  },
  {
    "icao": "KWJF",
    "iata": "WJF",
    "name": "General William J Fox Airfield",
    "city": "Lancaster",
    "country": "US",
    "lat": 34.7411,
    "lon": -118.219002,
    "elevation": 2351
  },
  {
    "icao": "KWMC",
    "iata": "WMC",
    "name": "Winnemucca Municipal Airport",
    "city": "Winnemucca",
    "country": "US",
    "lat": 40.8965988159,
    "lon": -117.805999756,
    "elevation": 4308
  },
  {
    "icao": "KWRB",
    "iata": "WRB",
    "name": "Robins Air Force Base",
    "city": "Warner Robins",
    "country": "US",
    "lat": 32.640099,
    "lon": -83.591904,
    "elevation": 294
  },
  {
    "icao": "KWRI",
    "iata": "WRI",
    "name": "Mc Guire Air Force Base",
    "city": "Wrightstown",
    "country": "US",
    "lat": 40.0155983,
    "lon": -74.59169769,
    "elevation": 131
  },
  {
    "icao": "KWRL",
    "iata": "WRL",
    "name": "Worland Municipal Airport",
    "city": "Worland",
    "country": "US",
    "lat": 43.965698,
    "lon": -107.950996,
    "elevation": 4227
  },
  {
    "icao": "KWST",
    "iata": "WST",
    "name": "Westerly State Airport",
    "city": "Westerly",
    "country": "US",
    "lat": 41.349602,
    "lon": -71.803398,
    "elevation": 81
  },
  {
    "icao": "KWWD",
    "iata": "WWD",
    "name": "Cape May County Airport",
    "city": "Wildwood",
    "country": "US",
    "lat": 39.008499145500004,
    "lon": -74.9083023071,
    "elevation": 23
  },
  {
    "icao": "KWWR",
    "iata": "WWR",
    "name": "West Woodward Airport",
    "city": "Woodward",
    "country": "US",
    "lat": 36.438,
    "lon": -99.5226667,
    "elevation": 2189
  },
  {
    "icao": "KWY",
    "iata": "KWY",
    "name": "Kiwayu Airport",
    "city": "Kiwayu",
    "country": "KE",
    "lat": -1.96056,
    "lon": 41.297501,
    "elevation": 21
  },
  {
    "icao": "KWYS",
    "iata": "WYS",
    "name": "Yellowstone Airport",
    "city": "West Yellowstone",
    "country": "US",
    "lat": 44.6884,
    "lon": -111.117996,
    "elevation": 6649
  },
  {
    "icao": "KXNA",
    "iata": "XNA",
    "name": "Northwest Arkansas National Airport",
    "city": "Fayetteville/Springdale/Rogers",
    "country": "US",
    "lat": 36.281898,
    "lon": -94.306801,
    "elevation": 1287
  },
  {
    "icao": "KXWA",
    "iata": "XWA",
    "name": "Williston Basin International Airport",
    "city": "Williston",
    "country": "US",
    "lat": 48.258387,
    "lon": -103.748797,
    "elevation": 2344
  },
  {
    "icao": "KYIP",
    "iata": "YIP",
    "name": "Willow Run Airport",
    "city": "Detroit",
    "country": "US",
    "lat": 42.2379,
    "lon": -83.530403,
    "elevation": 716
  },
  {
    "icao": "KYKM",
    "iata": "YKM",
    "name": "Yakima Air Terminal McAllister Field",
    "city": "Yakima",
    "country": "US",
    "lat": 46.56819916,
    "lon": -120.5439987,
    "elevation": 1099
  },
  {
    "icao": "KYKN",
    "iata": "YKN",
    "name": "Chan Gurney Municipal Airport",
    "city": "Yankton",
    "country": "US",
    "lat": 42.916698455811,
    "lon": -97.385902404785,
    "elevation": 1306
  },
  {
    "icao": "KYNG",
    "iata": "YNG",
    "name": "Youngstown Warren Regional Airport",
    "city": "Youngstown/Warren",
    "country": "US",
    "lat": 41.26070023,
    "lon": -80.67910004,
    "elevation": 1192
  },
  {
    "icao": "KZZV",
    "iata": "ZZV",
    "name": "Zanesville Municipal Airport",
    "city": "Zanesville",
    "country": "US",
    "lat": 39.9444007874,
    "lon": -81.89209747310001,
    "elevation": 900
  },
  {
    "icao": "LA-0006",
    "iata": "BOR",
    "name": "Bokeo International Airport",
    "city": "Ton Phueng",
    "country": "LA",
    "lat": 20.323986,
    "lon": 100.165392,
    "elevation": 1175
  },
  {
    "icao": "LAKU",
    "iata": "KFZ",
    "name": "Kukës International Airport",
    "city": "Kukës",
    "country": "AL",
    "lat": 42.035802,
    "lon": 20.415955,
    "elevation": 1120
  },
  {
    "icao": "LATI",
    "iata": "TIA",
    "name": "Tirana International Airport Mother Teresa",
    "city": "Rinas",
    "country": "AL",
    "lat": 41.4147,
    "lon": 19.7206,
    "elevation": 126
  },
  {
    "icao": "LBBG",
    "iata": "BOJ",
    "name": "Burgas Airport",
    "city": "Burgas",
    "country": "BG",
    "lat": 42.569917,
    "lon": 27.515173,
    "elevation": 135
  },
  {
    "icao": "LBGO",
    "iata": "GOZ",
    "name": "Gorna Oryahovitsa Airport",
    "city": "Gorna Oryahovitsa",
    "country": "BG",
    "lat": 43.151402,
    "lon": 25.7129,
    "elevation": 285
  },
  {
    "icao": "LBPD",
    "iata": "PDV",
    "name": "Plovdiv International Airport",
    "city": "Plovdiv",
    "country": "BG",
    "lat": 42.067799,
    "lon": 24.8508,
    "elevation": 597
  },
  {
    "icao": "LBSF",
    "iata": "SOF",
    "name": "Sofia Airport",
    "city": "Sofia",
    "country": "BG",
    "lat": 42.696357,
    "lon": 23.417671,
    "elevation": 1742
  },
  {
    "icao": "LBWN",
    "iata": "VAR",
    "name": "Varna Airport",
    "city": "Varna",
    "country": "BG",
    "lat": 43.232101,
    "lon": 27.8251,
    "elevation": 230
  },
  {
    "icao": "LCEN",
    "iata": "ECN",
    "name": "Nicosia (Lefkoşa) Ercan International Airport",
    "city": "Tymbou (Kirklar)",
    "country": "CY",
    "lat": 35.152337,
    "lon": 33.506584,
    "elevation": 404
  },
  {
    "icao": "LCGK",
    "iata": "GEC",
    "name": "Lefkoniko Airport / Geçitkale Air Base",
    "city": "Lefkoniko (Geçitkale)",
    "country": "CY",
    "lat": 35.23591,
    "lon": 33.720088,
    "elevation": 146
  },
  {
    "icao": "LCLK",
    "iata": "LCA",
    "name": "Larnaca International Airport",
    "city": "Larnaca",
    "country": "CY",
    "lat": 34.875099,
    "lon": 33.624901,
    "elevation": 8
  },
  {
    "icao": "LCPH",
    "iata": "PFO",
    "name": "Paphos International Airport",
    "city": "Paphos",
    "country": "CY",
    "lat": 34.717999,
    "lon": 32.485699,
    "elevation": 41
  },
  {
    "icao": "LCRA",
    "iata": "AKT",
    "name": "RAF Akrotiri",
    "city": "Akrotiri",
    "country": "CY",
    "lat": 34.590401,
    "lon": 32.9879,
    "elevation": 76
  },
  {
    "icao": "LDDU",
    "iata": "DBV",
    "name": "Dubrovnik Ruđer Bošković Airport",
    "city": "Čilipi",
    "country": "HR",
    "lat": 42.562247,
    "lon": 18.265543,
    "elevation": 527
  },
  {
    "icao": "LDOS",
    "iata": "OSI",
    "name": "Osijek Airport",
    "city": "Klisa",
    "country": "HR",
    "lat": 45.462355,
    "lon": 18.811278,
    "elevation": 290
  },
  {
    "icao": "LDPL",
    "iata": "PUY",
    "name": "Pula Airport",
    "city": "Pula",
    "country": "HR",
    "lat": 44.893501,
    "lon": 13.9222,
    "elevation": 274
  },
  {
    "icao": "LDRI",
    "iata": "RJK",
    "name": "Rijeka Airport",
    "city": "Omišalj",
    "country": "HR",
    "lat": 45.2169,
    "lon": 14.5703,
    "elevation": 278
  },
  {
    "icao": "LDSB",
    "iata": "BWK",
    "name": "Brač Airport",
    "city": "Gornji Humac",
    "country": "HR",
    "lat": 43.284454,
    "lon": 16.678362,
    "elevation": 1776
  },
  {
    "icao": "LDSP",
    "iata": "SPU",
    "name": "Split Airport",
    "city": "Kaštel Štafilić",
    "country": "HR",
    "lat": 43.538898,
    "lon": 16.298,
    "elevation": 79
  },
  {
    "icao": "LDZA",
    "iata": "ZAG",
    "name": "Zagreb Franjo Tuđman International Airport",
    "city": "Velika Gorica",
    "country": "HR",
    "lat": 45.742901,
    "lon": 16.0688,
    "elevation": 353
  },
  {
    "icao": "LDZD",
    "iata": "ZAD",
    "name": "Zadar Airport",
    "city": "Zemunik Donji (Zadar)",
    "country": "HR",
    "lat": 44.094988,
    "lon": 15.354879,
    "elevation": 289
  },
  {
    "icao": "LEAB",
    "iata": "ABC",
    "name": "Albacete Airport / Los Llanos Air Base",
    "city": "Albacete",
    "country": "ES",
    "lat": 38.948502,
    "lon": -1.86352,
    "elevation": 2302
  },
  {
    "icao": "LEAL",
    "iata": "ALC",
    "name": "Alicante-Elche Miguel Hernández Airport",
    "city": "Alicante",
    "country": "ES",
    "lat": 38.2822,
    "lon": -0.558156,
    "elevation": 142
  },
  {
    "icao": "LEAM",
    "iata": "LEI",
    "name": "Almería Airport",
    "city": "Almería",
    "country": "ES",
    "lat": 36.843899,
    "lon": -2.3701,
    "elevation": 70
  },
  {
    "icao": "LEAS",
    "iata": "OVD",
    "name": "Asturias Airport",
    "city": "Ranón",
    "country": "ES",
    "lat": 43.563599,
    "lon": -6.03462,
    "elevation": 416
  },
  {
    "icao": "LEBA",
    "iata": "ODB",
    "name": "Córdoba Airport",
    "city": "Córdoba",
    "country": "ES",
    "lat": 37.841999,
    "lon": -4.84888,
    "elevation": 297
  },
  {
    "icao": "LEBB",
    "iata": "BIO",
    "name": "Bilbao Airport",
    "city": "Bilbao",
    "country": "ES",
    "lat": 43.301102,
    "lon": -2.91061,
    "elevation": 138
  },
  {
    "icao": "LEBG",
    "iata": "RGS",
    "name": "Burgos Airport",
    "city": "Burgos",
    "country": "ES",
    "lat": 42.357601,
    "lon": -3.62076,
    "elevation": 2962
  },
  {
    "icao": "LEBL",
    "iata": "BCN",
    "name": "Josep Tarradellas Barcelona-El Prat Airport",
    "city": "Barcelona",
    "country": "ES",
    "lat": 41.2971,
    "lon": 2.07846,
    "elevation": 12
  },
  {
    "icao": "LEBZ",
    "iata": "BJZ",
    "name": "Badajoz Airport",
    "city": "Badajoz",
    "country": "ES",
    "lat": 38.8913,
    "lon": -6.82133,
    "elevation": 609
  },
  {
    "icao": "LECH",
    "iata": "CDT",
    "name": "Castellón-Costa Azahar Airport",
    "city": "Castellón de la Plana",
    "country": "ES",
    "lat": 40.213889,
    "lon": 0.073333,
    "elevation": 1182
  },
  {
    "icao": "LECO",
    "iata": "LCG",
    "name": "A Coruña Airport",
    "city": "Culleredo",
    "country": "ES",
    "lat": 43.302101,
    "lon": -8.37726,
    "elevation": 326
  },
  {
    "icao": "LEDA",
    "iata": "ILD",
    "name": "Lleida-Alguaire Airport",
    "city": "Lleida",
    "country": "ES",
    "lat": 41.728185,
    "lon": 0.535023,
    "elevation": 1152
  },
  {
    "icao": "LEGE",
    "iata": "GRO",
    "name": "Girona-Costa Brava Airport",
    "city": "Girona",
    "country": "ES",
    "lat": 41.904639,
    "lon": 2.761774,
    "elevation": 468
  },
  {
    "icao": "LEGR",
    "iata": "GRX",
    "name": "F.G.L. Airport Granada-Jaén Airport",
    "city": "Granada",
    "country": "ES",
    "lat": 37.188702,
    "lon": -3.77736,
    "elevation": 1860
  },
  {
    "icao": "LEIB",
    "iata": "IBZ",
    "name": "Ibiza Airport",
    "city": "Ibiza (Eivissa)",
    "country": "ES",
    "lat": 38.872898,
    "lon": 1.37312,
    "elevation": 24
  },
  {
    "icao": "LEJR",
    "iata": "XRY",
    "name": "Jerez Airport",
    "city": "Jerez de la Frontera",
    "country": "ES",
    "lat": 36.744598,
    "lon": -6.06011,
    "elevation": 93
  },
  {
    "icao": "LELN",
    "iata": "LEN",
    "name": "León Int'l Airport",
    "city": "La Virgen Del Camino",
    "country": "ES",
    "lat": 42.589001,
    "lon": -5.65556,
    "elevation": 3006
  },
  {
    "icao": "LERJ",
    "iata": "RJL",
    "name": "Logroño-Agoncillo Airport",
    "city": "Logroño",
    "country": "ES",
    "lat": 42.460953,
    "lon": -2.322235,
    "elevation": 1161
  },
  {
    "icao": "LEMD",
    "iata": "MAD",
    "name": "Adolfo Suárez Madrid–Barajas Airport",
    "city": "Madrid",
    "country": "ES",
    "lat": 40.471926,
    "lon": -3.56264,
    "elevation": 1998
  },
  {
    "icao": "LEMG",
    "iata": "AGP",
    "name": "Málaga-Costa del Sol Airport",
    "city": "Málaga",
    "country": "ES",
    "lat": 36.6749,
    "lon": -4.49911,
    "elevation": 53
  },
  {
    "icao": "LEMH",
    "iata": "MAH",
    "name": "Menorca Airport",
    "city": "Mahón (Maó)",
    "country": "ES",
    "lat": 39.862598,
    "lon": 4.21865,
    "elevation": 302
  },
  {
    "icao": "LEMI",
    "iata": "RMU",
    "name": "Región de Murcia International Airport",
    "city": "Corvera",
    "country": "ES",
    "lat": 37.803,
    "lon": -1.125,
    "elevation": 644
  },
  {
    "icao": "LEMO",
    "iata": "OZP",
    "name": "Moron Air Base",
    "city": "Morón",
    "country": "ES",
    "lat": 37.17490005493164,
    "lon": -5.615940093994141,
    "elevation": 285
  },
  {
    "icao": "LEPA",
    "iata": "PMI",
    "name": "Palma de Mallorca Airport",
    "city": "Palma de Mallorca",
    "country": "ES",
    "lat": 39.551701,
    "lon": 2.73881,
    "elevation": 27
  },
  {
    "icao": "LEPP",
    "iata": "PNA",
    "name": "Pamplona Airport",
    "city": "Pamplona",
    "country": "ES",
    "lat": 42.77,
    "lon": -1.64633,
    "elevation": 1504
  },
  {
    "icao": "LERL",
    "iata": "CQM",
    "name": "Ciudad Real International Airport",
    "city": "Ciudad Real",
    "country": "ES",
    "lat": 38.856479,
    "lon": -3.969944,
    "elevation": 2120
  },
  {
    "icao": "LERS",
    "iata": "REU",
    "name": "Reus Airport",
    "city": "Reus",
    "country": "ES",
    "lat": 41.1474,
    "lon": 1.16717,
    "elevation": 233
  },
  {
    "icao": "LERT",
    "iata": "ROZ",
    "name": "Rota Naval Station Airport",
    "city": "Rota",
    "country": "ES",
    "lat": 36.645198822,
    "lon": -6.34946012497,
    "elevation": 86
  },
  {
    "icao": "LESA",
    "iata": "SLM",
    "name": "Salamanca Airport",
    "city": "Salamanca",
    "country": "ES",
    "lat": 40.952099,
    "lon": -5.50199,
    "elevation": 2595
  },
  {
    "icao": "LESO",
    "iata": "EAS",
    "name": "San Sebastián Airport",
    "city": "Hondarribia",
    "country": "ES",
    "lat": 43.356499,
    "lon": -1.79061,
    "elevation": 16
  },
  {
    "icao": "LEST",
    "iata": "SCQ",
    "name": "Santiago-Rosalía de Castro Airport",
    "city": "Santiago de Compostela",
    "country": "ES",
    "lat": 42.896301,
    "lon": -8.41514,
    "elevation": 1213
  },
  {
    "icao": "LETL",
    "iata": "TEV",
    "name": "Teruel Airport",
    "city": "Teruel",
    "country": "ES",
    "lat": 40.410269,
    "lon": -1.217366,
    "elevation": 3380
  },
  {
    "icao": "LETO",
    "iata": "TOJ",
    "name": "Madrid–Torrejón Airport / Torrejón Air Base",
    "city": "Madrid",
    "country": "ES",
    "lat": 40.487875,
    "lon": -3.456808,
    "elevation": 2026
  },
  {
    "icao": "LEVC",
    "iata": "VLC",
    "name": "Valencia Airport",
    "city": "Valencia",
    "country": "ES",
    "lat": 39.4893,
    "lon": -0.481625,
    "elevation": 240
  },
  {
    "icao": "LEVD",
    "iata": "VLL",
    "name": "Valladolid Airport",
    "city": "Valladolid",
    "country": "ES",
    "lat": 41.7061,
    "lon": -4.85194,
    "elevation": 2776
  },
  {
    "icao": "LEVT",
    "iata": "VIT",
    "name": "Vitoria Airport",
    "city": "Alava",
    "country": "ES",
    "lat": 42.882801,
    "lon": -2.72447,
    "elevation": 1682
  },
  {
    "icao": "LEVX",
    "iata": "VGO",
    "name": "Vigo Airport",
    "city": "Vigo",
    "country": "ES",
    "lat": 42.2318,
    "lon": -8.62677,
    "elevation": 856
  },
  {
    "icao": "LEXJ",
    "iata": "SDR",
    "name": "Seve Ballesteros-Santander Airport",
    "city": "Santander",
    "country": "ES",
    "lat": 43.427101,
    "lon": -3.82001,
    "elevation": 16
  },
  {
    "icao": "LEZG",
    "iata": "ZAZ",
    "name": "Zaragoza Airport",
    "city": "Zaragoza",
    "country": "ES",
    "lat": 41.666199,
    "lon": -1.04155,
    "elevation": 863
  },
  {
    "icao": "LEZL",
    "iata": "SVQ",
    "name": "Sevilla Airport",
    "city": "Sevilla",
    "country": "ES",
    "lat": 37.417999,
    "lon": -5.89311,
    "elevation": 112
  },
  {
    "icao": "LFAC",
    "iata": "CQF",
    "name": "Calais Marck Airport",
    "city": "Calais",
    "country": "FR",
    "lat": 50.962101,
    "lon": 1.95476,
    "elevation": 12
  },
  {
    "icao": "LFAT",
    "iata": "LTQ",
    "name": "Le Touquet-Côte d'Opale Airport",
    "city": "Le Touquet-Paris-Plage",
    "country": "FR",
    "lat": 50.518284,
    "lon": 1.621656,
    "elevation": 36
  },
  {
    "icao": "LFBA",
    "iata": "AGF",
    "name": "Agen La Garenne airport",
    "city": "Agen",
    "country": "FR",
    "lat": 44.174171,
    "lon": 0.59309,
    "elevation": 204
  },
  {
    "icao": "LFBD",
    "iata": "BOD",
    "name": "Bordeaux–Mérignac Airport",
    "city": "Bordeaux",
    "country": "FR",
    "lat": 44.82865,
    "lon": -0.715356,
    "elevation": 162
  },
  {
    "icao": "LFBE",
    "iata": "EGC",
    "name": "Bergerac Dordogne-Périgord airport",
    "city": "Bergerac",
    "country": "FR",
    "lat": 44.825298,
    "lon": 0.518611,
    "elevation": 171
  },
  {
    "icao": "LFBG",
    "iata": "CNG",
    "name": "Cognac-Châteaubernard (BA 709) Air Base",
    "city": "Cognac/Châteaubernard",
    "country": "FR",
    "lat": 45.658298,
    "lon": -0.3175,
    "elevation": 102
  },
  {
    "icao": "LFBH",
    "iata": "LRH",
    "name": "La Rochelle Île de Ré Airport",
    "city": "La Rochelle",
    "country": "FR",
    "lat": 46.179199,
    "lon": -1.19528,
    "elevation": 74
  },
  {
    "icao": "LFBI",
    "iata": "PIS",
    "name": "Poitiers-Biard Airport",
    "city": "Poitiers/Biard",
    "country": "FR",
    "lat": 46.5877,
    "lon": 0.306666,
    "elevation": 423
  },
  {
    "icao": "LFBK",
    "iata": "MCU",
    "name": "Montluçon-Guéret Airport",
    "city": "Lépaud, Creuse",
    "country": "FR",
    "lat": 46.222599,
    "lon": 2.36396,
    "elevation": 1497
  },
  {
    "icao": "LFBL",
    "iata": "LIG",
    "name": "Limoges Airport",
    "city": "Limoges/Bellegarde",
    "country": "FR",
    "lat": 45.862801,
    "lon": 1.17944,
    "elevation": 1300
  },
  {
    "icao": "LFBN",
    "iata": "NIT",
    "name": "Niort - Marais Poitevin Airport",
    "city": "Niort/Souché",
    "country": "FR",
    "lat": 46.313477,
    "lon": -0.394529,
    "elevation": 203
  },
  {
    "icao": "LFBO",
    "iata": "TLS",
    "name": "Toulouse-Blagnac Airport",
    "city": "Toulouse/Blagnac",
    "country": "FR",
    "lat": 43.629101,
    "lon": 1.36382,
    "elevation": 499
  },
  {
    "icao": "LFBP",
    "iata": "PUF",
    "name": "Pau Pyrénées Airport",
    "city": "Pau/Pyrénées (Uzein)",
    "country": "FR",
    "lat": 43.380001,
    "lon": -0.418611,
    "elevation": 616
  },
  {
    "icao": "LFBT",
    "iata": "LDE",
    "name": "Tarbes-Lourdes-Pyrénées Airport",
    "city": "Tarbes/Lourdes/Pyrénées",
    "country": "FR",
    "lat": 43.178699,
    "lon": -0.006439,
    "elevation": 1260
  },
  {
    "icao": "LFBU",
    "iata": "ANG",
    "name": "Angoulême Brie-Champniers airport",
    "city": "Angoulême",
    "country": "FR",
    "lat": 45.729198,
    "lon": 0.221456,
    "elevation": 436
  },
  {
    "icao": "LFBX",
    "iata": "PGX",
    "name": "Périgueux-Bassillac Airport",
    "city": "Périgueux/Bassillac",
    "country": "FR",
    "lat": 45.198101,
    "lon": 0.815556,
    "elevation": 328
  },
  {
    "icao": "LFBZ",
    "iata": "BIQ",
    "name": "Biarritz Pays Basque airport",
    "city": "Biarritz",
    "country": "FR",
    "lat": 43.468372,
    "lon": -1.523223,
    "elevation": 245
  },
  {
    "icao": "LFCC",
    "iata": "ZAO",
    "name": "Cahors Lalbenque airport",
    "city": "Cahors",
    "country": "FR",
    "lat": 44.351398,
    "lon": 1.47528,
    "elevation": 912
  },
  {
    "icao": "LFCI",
    "iata": "LBI",
    "name": "Albi Le Sequestre airport",
    "city": "Albi",
    "country": "FR",
    "lat": 43.913898,
    "lon": 2.11306,
    "elevation": 564
  },
  {
    "icao": "LFCK",
    "iata": "DCM",
    "name": "Castres Mazamet Airport",
    "city": "Castres",
    "country": "FR",
    "lat": 43.556301,
    "lon": 2.28918,
    "elevation": 788
  },
  {
    "icao": "LFCR",
    "iata": "RDZ",
    "name": "Rodez–Aveyron Airport",
    "city": "Rodez/Marcillac",
    "country": "FR",
    "lat": 44.407902,
    "lon": 2.48267,
    "elevation": 1910
  },
  {
    "icao": "LFCY",
    "iata": "RYN",
    "name": "Royan-Médis Airport",
    "city": "Royan/Médis",
    "country": "FR",
    "lat": 45.628101,
    "lon": -0.9725,
    "elevation": 72
  },
  {
    "icao": "LFDN",
    "iata": "RCO",
    "name": "Rochefort-Saint-Agnant (BA 721) Airport",
    "city": "Rochefort/Saint-Agnant",
    "country": "FR",
    "lat": 45.887798,
    "lon": -0.983056,
    "elevation": 60
  },
  {
    "icao": "LFGA",
    "iata": "CMR",
    "name": "Colmar Houssen airport",
    "city": "Colmar",
    "country": "FR",
    "lat": 48.109901,
    "lon": 7.35901,
    "elevation": 628
  },
  {
    "icao": "LFGJ",
    "iata": "DLE",
    "name": "Dole Tavaux Airport",
    "city": "Dole",
    "country": "FR",
    "lat": 47.038955,
    "lon": 5.427589,
    "elevation": 645
  },
  {
    "icao": "LFHO",
    "iata": "OBS",
    "name": "Aubenas-South Ardèche Airport",
    "city": "Lanas, Ardèche",
    "country": "FR",
    "lat": 44.544367,
    "lon": 4.372194,
    "elevation": 923
  },
  {
    "icao": "LFJL",
    "iata": "ETZ",
    "name": "Metz-Nancy-Lorraine Airport",
    "city": "Goin",
    "country": "FR",
    "lat": 48.982101,
    "lon": 6.25132,
    "elevation": 870
  },
  {
    "icao": "LFJR",
    "iata": "ANE",
    "name": "Angers Marcé airport",
    "city": "Angers",
    "country": "FR",
    "lat": 47.560299,
    "lon": -0.312222,
    "elevation": 194
  },
  {
    "icao": "LFKB",
    "iata": "BIA",
    "name": "Bastia Poretta airport",
    "city": "Bastia",
    "country": "FR",
    "lat": 42.5527,
    "lon": 9.48373,
    "elevation": 26
  },
  {
    "icao": "LFKC",
    "iata": "CLY",
    "name": "Calvi Sainte Catherine Airport",
    "city": "Calvi",
    "country": "FR",
    "lat": 42.530422,
    "lon": 8.792984,
    "elevation": 209
  },
  {
    "icao": "LFKF",
    "iata": "FSC",
    "name": "Figari Sud-Corse Airport",
    "city": "Figari",
    "country": "FR",
    "lat": 41.500599,
    "lon": 9.09778,
    "elevation": 85
  },
  {
    "icao": "LFKJ",
    "iata": "AJA",
    "name": "Ajaccio Napoléon Bonaparte airport",
    "city": "Ajaccio",
    "country": "FR",
    "lat": 41.923599,
    "lon": 8.80292,
    "elevation": 18
  },
  {
    "icao": "LFKS",
    "iata": "SOZ",
    "name": "Solenzara (BA 126) Air Base",
    "city": "Solenzara",
    "country": "FR",
    "lat": 41.9244,
    "lon": 9.406,
    "elevation": 28
  },
  {
    "icao": "LFLA",
    "iata": "AUF",
    "name": "Auxerre Branches airport",
    "city": "Auxerre",
    "country": "FR",
    "lat": 47.850201,
    "lon": 3.49711,
    "elevation": 523
  },
  {
    "icao": "LFLB",
    "iata": "CMF",
    "name": "Chambéry Aix les Bains airport",
    "city": "Chambéry",
    "country": "FR",
    "lat": 45.6381,
    "lon": 5.88023,
    "elevation": 779
  },
  {
    "icao": "LFLC",
    "iata": "CFE",
    "name": "Clermont-Ferrand Auvergne airport",
    "city": "Clermont-Ferrand",
    "country": "FR",
    "lat": 45.786701,
    "lon": 3.16917,
    "elevation": 1090
  },
  {
    "icao": "LFLD",
    "iata": "BOU",
    "name": "Bourges airport",
    "city": "Bourges",
    "country": "FR",
    "lat": 47.060158,
    "lon": 2.369633,
    "elevation": 529
  },
  {
    "icao": "LFLL",
    "iata": "LYS",
    "name": "Lyon Saint-Exupéry Airport",
    "city": "Colombier-Saugnieu, Rhône",
    "country": "FR",
    "lat": 45.725996,
    "lon": 5.090139,
    "elevation": 821
  },
  {
    "icao": "LFLN",
    "iata": "SYT",
    "name": "Saint-Yan Airport",
    "city": "L'Hôpital-le-Mercier, Saône-et-Loire",
    "country": "FR",
    "lat": 46.414019,
    "lon": 4.014177,
    "elevation": 796
  },
  {
    "icao": "LFLO",
    "iata": "RNE",
    "name": "Roanne-Renaison Airport",
    "city": "Saint-Léger-sur-Roanne",
    "country": "FR",
    "lat": 46.053818,
    "lon": 3.999023,
    "elevation": 1106
  },
  {
    "icao": "LFLP",
    "iata": "NCY",
    "name": "Annecy Meythet airport",
    "city": "Annecy",
    "country": "FR",
    "lat": 45.928947,
    "lon": 6.0987,
    "elevation": 1521
  },
  {
    "icao": "LFLS",
    "iata": "GNB",
    "name": "Grenoble Alpes Isère Airport",
    "city": "Grenoble",
    "country": "FR",
    "lat": 45.3629,
    "lon": 5.32937,
    "elevation": 1302
  },
  {
    "icao": "LFLU",
    "iata": "VAF",
    "name": "Valence-Chabeuil Airport",
    "city": "Chabeuil, Drôme",
    "country": "FR",
    "lat": 44.9216,
    "lon": 4.9699,
    "elevation": 525
  },
  {
    "icao": "LFLV",
    "iata": "VHY",
    "name": "Vichy-Charmeil Airport",
    "city": "Charmeil, Allier",
    "country": "FR",
    "lat": 46.16969,
    "lon": 3.403637,
    "elevation": 817
  },
  {
    "icao": "LFLW",
    "iata": "AUR",
    "name": "Aurillac airport",
    "city": "Aurillac",
    "country": "FR",
    "lat": 44.891399,
    "lon": 2.42194,
    "elevation": 2096
  },
  {
    "icao": "LFLX",
    "iata": "CHR",
    "name": "Châteauroux Déols airport",
    "city": "Châteauroux",
    "country": "FR",
    "lat": 46.860221,
    "lon": 1.728326,
    "elevation": 529
  },
  {
    "icao": "LFLY",
    "iata": "LYN",
    "name": "Lyon Bron Airport",
    "city": "Chassieu, Lyon",
    "country": "FR",
    "lat": 45.727947,
    "lon": 4.943991,
    "elevation": 659
  },
  {
    "icao": "LFMD",
    "iata": "CEQ",
    "name": "Cannes Mandelieu Airport",
    "city": "Cannes",
    "country": "FR",
    "lat": 43.547998,
    "lon": 6.955176,
    "elevation": 13
  },
  {
    "icao": "LFMH",
    "iata": "EBU",
    "name": "Saint-Étienne-Bouthéon Airport",
    "city": "Andrézieux-Bouthéon, Loire",
    "country": "FR",
    "lat": 45.5406,
    "lon": 4.29639,
    "elevation": 1325
  },
  {
    "icao": "LFMK",
    "iata": "CCF",
    "name": "Carcassonne Salvaza Airport",
    "city": "Carcassonne",
    "country": "FR",
    "lat": 43.216,
    "lon": 2.30632,
    "elevation": 433
  },
  {
    "icao": "LFML",
    "iata": "MRS",
    "name": "Marseille Provence Airport",
    "city": "Marignane, Bouches-du-Rhône",
    "country": "FR",
    "lat": 43.438088,
    "lon": 5.2125,
    "elevation": 74
  },
  {
    "icao": "LFMN",
    "iata": "NCE",
    "name": "Nice-Côte d'Azur Airport",
    "city": "Nice, Alpes-Maritimes",
    "country": "FR",
    "lat": 43.658401,
    "lon": 7.21587,
    "elevation": 12
  },
  {
    "icao": "LFMP",
    "iata": "PGF",
    "name": "Perpignan-Rivesaltes (Llabanère) Airport",
    "city": "Perpignan/Rivesaltes",
    "country": "FR",
    "lat": 42.740398,
    "lon": 2.87067,
    "elevation": 144
  },
  {
    "icao": "LFMQ",
    "iata": "CTT",
    "name": "Le Castellet Airport",
    "city": "Le Castellet, Var",
    "country": "FR",
    "lat": 43.252499,
    "lon": 5.78519,
    "elevation": 1391
  },
  {
    "icao": "LFMT",
    "iata": "MPL",
    "name": "Montpellier-Méditerranée Airport",
    "city": "Montpellier/Méditerranée",
    "country": "FR",
    "lat": 43.576199,
    "lon": 3.96301,
    "elevation": 17
  },
  {
    "icao": "LFMU",
    "iata": "BZR",
    "name": "Béziers Vias airport",
    "city": "Béziers",
    "country": "FR",
    "lat": 43.323502,
    "lon": 3.3539,
    "elevation": 56
  },
  {
    "icao": "LFMV",
    "iata": "AVN",
    "name": "Avignon Caumont airport",
    "city": "Avignon",
    "country": "FR",
    "lat": 43.907299,
    "lon": 4.90183,
    "elevation": 124
  },
  {
    "icao": "LFNB",
    "iata": "MEN",
    "name": "Mende-Brenoux Airfield",
    "city": "Mende/Brénoux",
    "country": "FR",
    "lat": 44.502102,
    "lon": 3.53282,
    "elevation": 3362
  },
  {
    "icao": "LFOB",
    "iata": "BVA",
    "name": "Beauvais Tillé airport",
    "city": "Beauvais",
    "country": "FR",
    "lat": 49.454399,
    "lon": 2.11278,
    "elevation": 359
  },
  {
    "icao": "LFOE",
    "iata": "EVX",
    "name": "Évreux-Fauville (BA 105) Air Base",
    "city": "Fauville, Eure",
    "country": "FR",
    "lat": 49.028702,
    "lon": 1.21986,
    "elevation": 464
  },
  {
    "icao": "LFOH",
    "iata": "LEH",
    "name": "Le Havre-Octeville Airport",
    "city": "Le Havre",
    "country": "FR",
    "lat": 49.534038,
    "lon": 0.088406,
    "elevation": 313
  },
  {
    "icao": "LFOK",
    "iata": "XCR",
    "name": "Chalons Vatry airport",
    "city": "Chalons en Champagne",
    "country": "FR",
    "lat": 48.77333,
    "lon": 4.20611,
    "elevation": 587
  },
  {
    "icao": "LFOP",
    "iata": "URO",
    "name": "Rouen Vallée de Seine Airport",
    "city": "Boos",
    "country": "FR",
    "lat": 49.384887,
    "lon": 1.179142,
    "elevation": 512
  },
  {
    "icao": "LFOT",
    "iata": "TUF",
    "name": "Tours Val de Loire Airport",
    "city": "Tours, Indre-et-Loire",
    "country": "FR",
    "lat": 47.432201,
    "lon": 0.727606,
    "elevation": 357
  },
  {
    "icao": "LFOV",
    "iata": "LVA",
    "name": "Laval-Entrammes Airport",
    "city": "Laval, Mayenne",
    "country": "FR",
    "lat": 48.032208,
    "lon": -0.743999,
    "elevation": 330
  },
  {
    "icao": "LFPB",
    "iata": "LBG",
    "name": "Paris-Le Bourget Airport",
    "city": "Paris",
    "country": "FR",
    "lat": 48.969398,
    "lon": 2.44139,
    "elevation": 218
  },
  {
    "icao": "LFPC",
    "iata": "CSF",
    "name": "Creil Air Base",
    "city": "Creil",
    "country": "FR",
    "lat": 49.253502,
    "lon": 2.51914,
    "elevation": 291
  },
  {
    "icao": "LFPG",
    "iata": "CDG",
    "name": "Charles de Gaulle International Airport",
    "city": "Paris (Roissy-en-France, Val-d'Oise)",
    "country": "FR",
    "lat": 49.012798,
    "lon": 2.55,
    "elevation": 392
  },
  {
    "icao": "LFPN",
    "iata": "TNF",
    "name": "Toussus-le-Noble Airport",
    "city": "Toussus-le-Noble, Yvelines",
    "country": "FR",
    "lat": 48.7519,
    "lon": 2.10619,
    "elevation": 538
  },
  {
    "icao": "LFPO",
    "iata": "ORY",
    "name": "Paris-Orly Airport",
    "city": "Paris (Orly, Val-de-Marne)",
    "country": "FR",
    "lat": 48.72333,
    "lon": 2.37944,
    "elevation": 291
  },
  {
    "icao": "LFPT",
    "iata": "POX",
    "name": "Pontoise-Cormeilles Aerodrome",
    "city": "Cormeilles-en-Vexin, Val-d'Oise",
    "country": "FR",
    "lat": 49.096064,
    "lon": 2.035543,
    "elevation": 325
  },
  {
    "icao": "LFPV",
    "iata": "VIY",
    "name": "Vélizy-Villacoublay Air Base",
    "city": "Vélizy-Villacoublay, Yvelines",
    "country": "FR",
    "lat": 48.774406,
    "lon": 2.203102,
    "elevation": 584
  },
  {
    "icao": "LFQG",
    "iata": "NVS",
    "name": "Nevers-Fourchambault Airport",
    "city": "Marzy, Nièvre",
    "country": "FR",
    "lat": 47.002913,
    "lon": 3.113114,
    "elevation": 602
  },
  {
    "icao": "LFQQ",
    "iata": "LIL",
    "name": "Lille Airport",
    "city": "Lesquin",
    "country": "FR",
    "lat": 50.563332,
    "lon": 3.086886,
    "elevation": 157
  },
  {
    "icao": "LFQT",
    "iata": "HZB",
    "name": "Merville-Calonne Airport",
    "city": "Merville, Nord",
    "country": "FR",
    "lat": 50.618401,
    "lon": 2.64224,
    "elevation": 61
  },
  {
    "icao": "LFRB",
    "iata": "BES",
    "name": "Brest Bretagne airport",
    "city": "Brest",
    "country": "FR",
    "lat": 48.447899,
    "lon": -4.41854,
    "elevation": 325
  },
  {
    "icao": "LFRC",
    "iata": "CER",
    "name": "Cherbourg Manche airport",
    "city": "Cherbourg",
    "country": "FR",
    "lat": 49.650101,
    "lon": -1.47028,
    "elevation": 459
  },
  {
    "icao": "LFRD",
    "iata": "DNR",
    "name": "Dinard Pleurtuit Saint-Malo airport",
    "city": "Dinard",
    "country": "FR",
    "lat": 48.5877,
    "lon": -2.07996,
    "elevation": 219
  },
  {
    "icao": "LFRE",
    "iata": "LBY",
    "name": "La Baule-Escoublac Airport",
    "city": "La Baule-Escoublac",
    "country": "FR",
    "lat": 47.289398,
    "lon": -2.34639,
    "elevation": 105
  },
  {
    "icao": "LFRF",
    "iata": "GFR",
    "name": "Granville Airport",
    "city": "Bréville-sur-Mer, Manche",
    "country": "FR",
    "lat": 48.883099,
    "lon": -1.56417,
    "elevation": 45
  },
  {
    "icao": "LFRG",
    "iata": "DOL",
    "name": "Deauville Normandie airport",
    "city": "Deauville",
    "country": "FR",
    "lat": 49.365237,
    "lon": 0.154481,
    "elevation": 479
  },
  {
    "icao": "LFRH",
    "iata": "LRT",
    "name": "Lorient South Brittany (Bretagne Sud) Airport",
    "city": "Lorient/Lann/Bihoué",
    "country": "FR",
    "lat": 47.760601,
    "lon": -3.44,
    "elevation": 160
  },
  {
    "icao": "LFRI",
    "iata": "EDM",
    "name": "La Roche-sur-Yon Les Ajoncs Airport",
    "city": "La Roche-sur-Yon",
    "country": "FR",
    "lat": 46.7019,
    "lon": -1.37863,
    "elevation": 299
  },
  {
    "icao": "LFRJ",
    "iata": "LDV",
    "name": "Landivisiau Air Base",
    "city": "Landivisiau",
    "country": "FR",
    "lat": 48.5303,
    "lon": -4.15164,
    "elevation": 348
  },
  {
    "icao": "LFRK",
    "iata": "CFR",
    "name": "Caen Carpiquet airport",
    "city": "Caen",
    "country": "FR",
    "lat": 49.17678,
    "lon": -0.454883,
    "elevation": 256
  },
  {
    "icao": "LFRM",
    "iata": "LME",
    "name": "Le Mans-Arnage Airport",
    "city": "Le Mans, Sarthe",
    "country": "FR",
    "lat": 47.948604,
    "lon": 0.201702,
    "elevation": 194
  },
  {
    "icao": "LFRN",
    "iata": "RNS",
    "name": "Rennes-Saint-Jacques Airport",
    "city": "Saint-Jacques-de-la-Lande, Ille-et-Vilaine",
    "country": "FR",
    "lat": 48.0695,
    "lon": -1.73479,
    "elevation": 124
  },
  {
    "icao": "LFRO",
    "iata": "LAI",
    "name": "Lannion Airport",
    "city": "Lannion",
    "country": "FR",
    "lat": 48.754398,
    "lon": -3.47166,
    "elevation": 290
  },
  {
    "icao": "LFRQ",
    "iata": "UIP",
    "name": "Quimper-Cornouaille Airport",
    "city": "Quimper/Pluguffan",
    "country": "FR",
    "lat": 47.973031,
    "lon": -4.169655,
    "elevation": 297
  },
  {
    "icao": "LFRS",
    "iata": "NTE",
    "name": "Nantes Atlantique Airport",
    "city": "Nantes",
    "country": "FR",
    "lat": 47.153198,
    "lon": -1.61073,
    "elevation": 90
  },
  {
    "icao": "LFRT",
    "iata": "SBK",
    "name": "Saint-Brieuc-Armor Airport",
    "city": "Trémuson, Côtes-d'Armor",
    "country": "FR",
    "lat": 48.538628,
    "lon": -2.853518,
    "elevation": 453
  },
  {
    "icao": "LFRU",
    "iata": "MXN",
    "name": "Morlaix-Ploujean Airport",
    "city": "Morlaix/Ploujean",
    "country": "FR",
    "lat": 48.6031990051,
    "lon": -3.81577992439,
    "elevation": 272
  },
  {
    "icao": "LFRV",
    "iata": "VNE",
    "name": "Vannes-Meucon Airport",
    "city": "Vannes/Meucon",
    "country": "FR",
    "lat": 47.723301,
    "lon": -2.71856,
    "elevation": 446
  },
  {
    "icao": "LFRZ",
    "iata": "SNR",
    "name": "Saint-Nazaire-Montoir Airport",
    "city": "Saint-Nazaire/Montoir",
    "country": "FR",
    "lat": 47.31142,
    "lon": -2.152634,
    "elevation": 13
  },
  {
    "icao": "LFSB",
    "iata": "BSL",
    "name": "EuroAirport Basel–Mulhouse–Freiburg",
    "city": "Bâle / Mulhouse",
    "country": "FR",
    "lat": 47.60068,
    "lon": 7.521117,
    "elevation": 885
  },
  {
    "icao": "LFSD",
    "iata": "DIJ",
    "name": "Dijon Longvic airport",
    "city": "Dijon",
    "country": "FR",
    "lat": 47.268902,
    "lon": 5.09,
    "elevation": 726
  },
  {
    "icao": "LFSG",
    "iata": "EPL",
    "name": "Épinal Mirecourt Airport",
    "city": "Épinal",
    "country": "FR",
    "lat": 48.325001,
    "lon": 6.06998,
    "elevation": 1084
  },
  {
    "icao": "LFSL",
    "iata": "BVE",
    "name": "Brive Souillac airport",
    "city": "Brive",
    "country": "FR",
    "lat": 45.039722,
    "lon": 1.485556,
    "elevation": 1016
  },
  {
    "icao": "LFSN",
    "iata": "ENC",
    "name": "Nancy-Essey Airport",
    "city": "Tomblaine, Meurthe-et-Moselle",
    "country": "FR",
    "lat": 48.692101,
    "lon": 6.23046,
    "elevation": 751
  },
  {
    "icao": "LFST",
    "iata": "SXB",
    "name": "Strasbourg Airport",
    "city": "Strasbourg",
    "country": "FR",
    "lat": 48.538299560546875,
    "lon": 7.628230094909668,
    "elevation": 505
  },
  {
    "icao": "LFTH",
    "iata": "TLN",
    "name": "Toulon-Hyères Airport",
    "city": "Hyères, Var",
    "country": "FR",
    "lat": 43.097301,
    "lon": 6.14603,
    "elevation": 7
  },
  {
    "icao": "LFTW",
    "iata": "FNI",
    "name": "Nîmes-Arles-Camargue Airport",
    "city": "Nîmes/Garons",
    "country": "FR",
    "lat": 43.757401,
    "lon": 4.41635,
    "elevation": 309
  },
  {
    "icao": "LFVP",
    "iata": "FSP",
    "name": "St Pierre Airport",
    "city": "Saint-Pierre",
    "country": "PM",
    "lat": 46.762901306152344,
    "lon": -56.173099517822266,
    "elevation": 27
  },
  {
    "icao": "LGAD",
    "iata": "PYR",
    "name": "Andravida Air Base",
    "city": "Andravida",
    "country": "GR",
    "lat": 37.9207,
    "lon": 21.292601,
    "elevation": 55
  },
  {
    "icao": "LGAL",
    "iata": "AXD",
    "name": "Alexandroupoli Democritus Airport",
    "city": "Alexandroupolis",
    "country": "GR",
    "lat": 40.8559,
    "lon": 25.956301,
    "elevation": 24
  },
  {
    "icao": "LGAV",
    "iata": "ATH",
    "name": "Athens Eleftherios Venizelos International Airport",
    "city": "Spata-Artemida",
    "country": "GR",
    "lat": 37.936401,
    "lon": 23.9445,
    "elevation": 308
  },
  {
    "icao": "LGBL",
    "iata": "VOL",
    "name": "Nea Anchialos National Airport",
    "city": "Nea Anchialos",
    "country": "GR",
    "lat": 39.219601,
    "lon": 22.7943,
    "elevation": 83
  },
  {
    "icao": "LGHI",
    "iata": "JKH",
    "name": "Chios Island National Airport",
    "city": "Chios Island",
    "country": "GR",
    "lat": 38.34320068359375,
    "lon": 26.140600204467773,
    "elevation": 15
  },
  {
    "icao": "LGIO",
    "iata": "IOA",
    "name": "Ioannina King Pyrrhus National Airport",
    "city": "Ioannina",
    "country": "GR",
    "lat": 39.6964,
    "lon": 20.8225,
    "elevation": 1558
  },
  {
    "icao": "LGIR",
    "iata": "HER",
    "name": "Heraklion International Nikos Kazantzakis Airport",
    "city": "Heraklion",
    "country": "GR",
    "lat": 35.339699,
    "lon": 25.1803,
    "elevation": 115
  },
  {
    "icao": "LGKF",
    "iata": "EFL",
    "name": "Kefallinia Airport",
    "city": "Kefallinia Island",
    "country": "GR",
    "lat": 38.12009811401367,
    "lon": 20.500499725341797,
    "elevation": 59
  },
  {
    "icao": "LGKL",
    "iata": "KLX",
    "name": "Kalamata Airport",
    "city": "Kalamata",
    "country": "GR",
    "lat": 37.06829833984375,
    "lon": 22.02549934387207,
    "elevation": 26
  },
  {
    "icao": "LGKO",
    "iata": "KGS",
    "name": "Kos Airport",
    "city": "Kos Island",
    "country": "GR",
    "lat": 36.794523,
    "lon": 27.09115,
    "elevation": 412
  },
  {
    "icao": "LGKP",
    "iata": "AOK",
    "name": "Karpathos Airport",
    "city": "Karpathos Island",
    "country": "GR",
    "lat": 35.421398,
    "lon": 27.146,
    "elevation": 66
  },
  {
    "icao": "LGKR",
    "iata": "CFU",
    "name": "Corfu Ioannis Kapodistrias International Airport",
    "city": "Kerkyra (Corfu)",
    "country": "GR",
    "lat": 39.602024,
    "lon": 19.912038,
    "elevation": 6
  },
  {
    "icao": "LGKV",
    "iata": "KVA",
    "name": "Kavala Alexander the Great International Airport",
    "city": "Kavala",
    "country": "GR",
    "lat": 40.9133,
    "lon": 24.6192,
    "elevation": 18
  },
  {
    "icao": "LGKZ",
    "iata": "KZI",
    "name": "Kozani National Airport Filippos",
    "city": "Kozani",
    "country": "GR",
    "lat": 40.286098,
    "lon": 21.840799,
    "elevation": 2059
  },
  {
    "icao": "LGMK",
    "iata": "JMK",
    "name": "Mykonos Island National Airport",
    "city": "Mykonos",
    "country": "GR",
    "lat": 37.435101,
    "lon": 25.348101,
    "elevation": 405
  },
  {
    "icao": "LGMT",
    "iata": "MJT",
    "name": "Mytilene International Airport",
    "city": "Mytilene",
    "country": "GR",
    "lat": 39.057272,
    "lon": 26.598887,
    "elevation": 60
  },
  {
    "icao": "LGPZ",
    "iata": "PVK",
    "name": "Aktion National Airport",
    "city": "Preveza",
    "country": "GR",
    "lat": 38.925499,
    "lon": 20.765301,
    "elevation": 11
  },
  {
    "icao": "LGRP",
    "iata": "RHO",
    "name": "Diagoras Airport",
    "city": "Rhodes",
    "country": "GR",
    "lat": 36.405399,
    "lon": 28.086201,
    "elevation": 17
  },
  {
    "icao": "LGRX",
    "iata": "GPA",
    "name": "Patras Araxos Agamemnon Airport",
    "city": "Patras",
    "country": "GR",
    "lat": 38.1511,
    "lon": 21.4256,
    "elevation": 46
  },
  {
    "icao": "LGSA",
    "iata": "CHQ",
    "name": "Chania International Airport",
    "city": "Souda",
    "country": "GR",
    "lat": 35.5317,
    "lon": 24.1497,
    "elevation": 490
  },
  {
    "icao": "LGSK",
    "iata": "JSI",
    "name": "Skiathos Island National Airport",
    "city": "Skiathos",
    "country": "GR",
    "lat": 39.177101,
    "lon": 23.5037,
    "elevation": 54
  },
  {
    "icao": "LGSM",
    "iata": "SMI",
    "name": "Samos Airport",
    "city": "Samos Island",
    "country": "GR",
    "lat": 37.689999,
    "lon": 26.911699,
    "elevation": 19
  },
  {
    "icao": "LGSR",
    "iata": "JTR",
    "name": "Santorini Airport",
    "city": "Santorini Island",
    "country": "GR",
    "lat": 36.399200439453125,
    "lon": 25.479299545288086,
    "elevation": 127
  },
  {
    "icao": "LGST",
    "iata": "JSH",
    "name": "Sitia Airport",
    "city": "Crete Island",
    "country": "GR",
    "lat": 35.21609878540039,
    "lon": 26.101299285888672,
    "elevation": 376
  },
  {
    "icao": "LGTS",
    "iata": "SKG",
    "name": "Thessaloniki Macedonia International Airport",
    "city": "Thessaloniki",
    "country": "GR",
    "lat": 40.51928,
    "lon": 22.970009,
    "elevation": 22
  },
  {
    "icao": "LGZA",
    "iata": "ZTH",
    "name": "Zakynthos International Airport Dionysios Solomos",
    "city": "Zakynthos",
    "country": "GR",
    "lat": 37.7509,
    "lon": 20.8843,
    "elevation": 12
  },
  {
    "icao": "LHBP",
    "iata": "BUD",
    "name": "Budapest Liszt Ferenc International Airport",
    "city": "Budapest",
    "country": "HU",
    "lat": 47.43018,
    "lon": 19.262393,
    "elevation": 495
  },
  {
    "icao": "LHDC",
    "iata": "DEB",
    "name": "Debrecen International Airport",
    "city": "Debrecen",
    "country": "HU",
    "lat": 47.488899,
    "lon": 21.615299,
    "elevation": 359
  },
  {
    "icao": "LHPP",
    "iata": "PEV",
    "name": "Pécs-Pogány Airport",
    "city": "Pécs",
    "country": "HU",
    "lat": 45.988891,
    "lon": 18.242044,
    "elevation": 651
  },
  {
    "icao": "LHSM",
    "iata": "SOB",
    "name": "Hévíz–Balaton Airport",
    "city": "Sármellék",
    "country": "HU",
    "lat": 46.686391,
    "lon": 17.159084,
    "elevation": 408
  },
  {
    "icao": "LIBC",
    "iata": "CRV",
    "name": "Crotone Sant'Anna Pythagoras Airport",
    "city": "Isola di Capo Rizzuto (KR)",
    "country": "IT",
    "lat": 38.9972,
    "lon": 17.0802,
    "elevation": 522
  },
  {
    "icao": "LIBD",
    "iata": "BRI",
    "name": "Bari Karol Wojtyła International Airport",
    "city": "Bari",
    "country": "IT",
    "lat": 41.138901,
    "lon": 16.760599,
    "elevation": 193
  },
  {
    "icao": "LIBF",
    "iata": "FOG",
    "name": "Foggia Gino Lisa Airport",
    "city": "Foggia (FG)",
    "country": "IT",
    "lat": 41.433596,
    "lon": 15.534566,
    "elevation": 265
  },
  {
    "icao": "LIBG",
    "iata": "TAR",
    "name": "Taranto-Grottaglie Marcello Arlotta Airport",
    "city": "Grottaglie",
    "country": "IT",
    "lat": 40.517502,
    "lon": 17.4032,
    "elevation": 215
  },
  {
    "icao": "LIBN",
    "iata": "LCC",
    "name": "Lecce Galatina Air Base / Galatina Fortunato Cesari Airport",
    "city": "Galatina (LE)",
    "country": "IT",
    "lat": 40.239201,
    "lon": 18.133301,
    "elevation": 156
  },
  {
    "icao": "LIBP",
    "iata": "PSR",
    "name": "Abruzzo Airport",
    "city": "Pescara",
    "country": "IT",
    "lat": 42.431702,
    "lon": 14.1811,
    "elevation": 48
  },
  {
    "icao": "LIBR",
    "iata": "BDS",
    "name": "Brindisi Airport",
    "city": "Brindisi",
    "country": "IT",
    "lat": 40.6576,
    "lon": 17.947001,
    "elevation": 47
  },
  {
    "icao": "LICA",
    "iata": "SUF",
    "name": "Lamezia Terme Sant'Eufemia International Airport",
    "city": "Lamezia Terme (CZ)",
    "country": "IT",
    "lat": 38.905197,
    "lon": 16.243762,
    "elevation": 39
  },
  {
    "icao": "LICB",
    "iata": "CIY",
    "name": "Comiso Airport",
    "city": "Comiso",
    "country": "IT",
    "lat": 36.99583,
    "lon": 14.60889,
    "elevation": 756
  },
  {
    "icao": "LICC",
    "iata": "CTA",
    "name": "Catania-Fontanarossa Airport",
    "city": "Catania",
    "country": "IT",
    "lat": 37.466801,
    "lon": 15.0664,
    "elevation": 39
  },
  {
    "icao": "LICD",
    "iata": "LMP",
    "name": "Lampedusa Airport",
    "city": "Lampedusa",
    "country": "IT",
    "lat": 35.497898,
    "lon": 12.6181,
    "elevation": 70
  },
  {
    "icao": "LICG",
    "iata": "PNL",
    "name": "Pantelleria Airport",
    "city": "Pantelleria (TP)",
    "country": "IT",
    "lat": 36.816502,
    "lon": 11.9689,
    "elevation": 628
  },
  {
    "icao": "LICJ",
    "iata": "PMO",
    "name": "Falcone–Borsellino Airport",
    "city": "Palermo",
    "country": "IT",
    "lat": 38.175999,
    "lon": 13.091,
    "elevation": 65
  },
  {
    "icao": "LICR",
    "iata": "REG",
    "name": "Reggio Calabria Airport",
    "city": "Reggio Calabria",
    "country": "IT",
    "lat": 38.071201,
    "lon": 15.6516,
    "elevation": 96
  },
  {
    "icao": "LICT",
    "iata": "TPS",
    "name": "Vincenzo Florio Airport Trapani-Birgi",
    "city": "Trapani (TP)",
    "country": "IT",
    "lat": 37.9114,
    "lon": 12.488,
    "elevation": 25
  },
  {
    "icao": "LIEA",
    "iata": "AHO",
    "name": "Alghero-Fertilia Airport",
    "city": "Alghero",
    "country": "IT",
    "lat": 40.632099,
    "lon": 8.29077,
    "elevation": 87
  },
  {
    "icao": "LIED",
    "iata": "DCI",
    "name": "Decimomannu Air Base",
    "city": "Decimomannu",
    "country": "IT",
    "lat": 39.354198,
    "lon": 8.97248,
    "elevation": 100
  },
  {
    "icao": "LIEE",
    "iata": "CAG",
    "name": "Cagliari Elmas Airport",
    "city": "Cagliari",
    "country": "IT",
    "lat": 39.251499,
    "lon": 9.05428,
    "elevation": 13
  },
  {
    "icao": "LIEO",
    "iata": "OLB",
    "name": "Olbia Costa Smeralda Airport",
    "city": "Olbia (SS)",
    "country": "IT",
    "lat": 40.898701,
    "lon": 9.51763,
    "elevation": 37
  },
  {
    "icao": "LIMC",
    "iata": "MXP",
    "name": "Milan Malpensa International Airport",
    "city": "Ferno (VA)",
    "country": "IT",
    "lat": 45.6306,
    "lon": 8.72811,
    "elevation": 768
  },
  {
    "icao": "LIME",
    "iata": "BGY",
    "name": "Milan Bergamo Airport / Antonio Locatelli Air Base",
    "city": "Orio al Serio (BG)",
    "country": "IT",
    "lat": 45.670725,
    "lon": 9.709223,
    "elevation": 782
  },
  {
    "icao": "LIMF",
    "iata": "TRN",
    "name": "Turin Airport",
    "city": "Caselle Torinese (TO)",
    "country": "IT",
    "lat": 45.200802,
    "lon": 7.64963,
    "elevation": 989
  },
  {
    "icao": "LIMJ",
    "iata": "GOA",
    "name": "Genoa Cristoforo Colombo Airport",
    "city": "Genova (GE)",
    "country": "IT",
    "lat": 44.412039,
    "lon": 8.840732,
    "elevation": 13
  },
  {
    "icao": "LIML",
    "iata": "LIN",
    "name": "Milano Linate Airport",
    "city": "Segrate (MI)",
    "country": "IT",
    "lat": 45.445099,
    "lon": 9.27674,
    "elevation": 353
  },
  {
    "icao": "LIMP",
    "iata": "PMF",
    "name": "Parma Airport",
    "city": "Parma (PR)",
    "country": "IT",
    "lat": 44.826351,
    "lon": 10.29705,
    "elevation": 161
  },
  {
    "icao": "LIMW",
    "iata": "AOT",
    "name": "Aosta Corrado Gex Airport",
    "city": "Saint-Christophe (AO)",
    "country": "IT",
    "lat": 45.738552,
    "lon": 7.3683,
    "elevation": 1791
  },
  {
    "icao": "LIMZ",
    "iata": "CUF",
    "name": "Cuneo International Airport",
    "city": "Levaldigi (CN)",
    "country": "IT",
    "lat": 44.547001,
    "lon": 7.62322,
    "elevation": 1267
  },
  {
    "icao": "LIPA",
    "iata": "AVB",
    "name": "Aviano Air Base",
    "city": "Aviano (PN)",
    "country": "IT",
    "lat": 46.031898,
    "lon": 12.596503,
    "elevation": 410
  },
  {
    "icao": "LIPB",
    "iata": "BZO",
    "name": "Bolzano Airport",
    "city": "Bolzano (BZ)",
    "country": "IT",
    "lat": 46.460201,
    "lon": 11.3264,
    "elevation": 789
  },
  {
    "icao": "LIPE",
    "iata": "BLQ",
    "name": "Bologna Guglielmo Marconi Airport",
    "city": "Bologna",
    "country": "IT",
    "lat": 44.5354,
    "lon": 11.2887,
    "elevation": 123
  },
  {
    "icao": "LIPH",
    "iata": "TSF",
    "name": "Treviso Antonio Canova Airport",
    "city": "Treviso (TV)",
    "country": "IT",
    "lat": 45.648399,
    "lon": 12.1944,
    "elevation": 59
  },
  {
    "icao": "LIPK",
    "iata": "FRL",
    "name": "Forlì Luigi Ridolfi Airport",
    "city": "Forlì (FC)",
    "country": "IT",
    "lat": 44.194801,
    "lon": 12.0701,
    "elevation": 97
  },
  {
    "icao": "LIPO",
    "iata": "VBS",
    "name": "Brescia Gabriele d'Annunzio Airport",
    "city": "Montichiari (BS)",
    "country": "IT",
    "lat": 45.428902,
    "lon": 10.3306,
    "elevation": 355
  },
  {
    "icao": "LIPQ",
    "iata": "TRS",
    "name": "Trieste–Friuli Venezia Giulia Airport",
    "city": "Ronchi dei Legionari (GO)",
    "country": "IT",
    "lat": 45.827499,
    "lon": 13.4722,
    "elevation": 39
  },
  {
    "icao": "LIPR",
    "iata": "RMI",
    "name": "Federico Fellini International Airport",
    "city": "Rimini (RN)",
    "country": "IT",
    "lat": 44.020302,
    "lon": 12.6117,
    "elevation": 40
  },
  {
    "icao": "LIPX",
    "iata": "VRN",
    "name": "Verona Villafranca Valerio Catullo Airport",
    "city": "Caselle (VR)",
    "country": "IT",
    "lat": 45.394955,
    "lon": 10.887303,
    "elevation": 239
  },
  {
    "icao": "LIPY",
    "iata": "AOI",
    "name": "Marche Airport",
    "city": "Falconara Marittima (AN)",
    "country": "IT",
    "lat": 43.616299,
    "lon": 13.3623,
    "elevation": 49
  },
  {
    "icao": "LIPZ",
    "iata": "VCE",
    "name": "Venice Marco Polo Airport",
    "city": "Venezia (VE)",
    "country": "IT",
    "lat": 45.505299,
    "lon": 12.3519,
    "elevation": 7
  },
  {
    "icao": "LIRA",
    "iata": "CIA",
    "name": "Ciampino–G. B. Pastine International Airport",
    "city": "Rome",
    "country": "IT",
    "lat": 41.7994,
    "lon": 12.5949,
    "elevation": 427
  },
  {
    "icao": "LIRF",
    "iata": "FCO",
    "name": "Rome–Fiumicino Leonardo da Vinci International Airport",
    "city": "Rome",
    "country": "IT",
    "lat": 41.804532,
    "lon": 12.251998,
    "elevation": 13
  },
  {
    "icao": "LIRI",
    "iata": "QSR",
    "name": "Salerno Costa d'Amalfi Airport",
    "city": "Salerno",
    "country": "IT",
    "lat": 40.620399,
    "lon": 14.9113,
    "elevation": 123
  },
  {
    "icao": "LIRJ",
    "iata": "EBA",
    "name": "Marina di Campo Airport",
    "city": "Campo nell'Elba (LI)",
    "country": "IT",
    "lat": 42.760871,
    "lon": 10.239811,
    "elevation": 31
  },
  {
    "icao": "LIRN",
    "iata": "NAP",
    "name": "Naples International Airport",
    "city": "Napoli",
    "country": "IT",
    "lat": 40.886002,
    "lon": 14.2908,
    "elevation": 294
  },
  {
    "icao": "LIRP",
    "iata": "PSA",
    "name": "Pisa International Airport",
    "city": "Pisa (PI)",
    "country": "IT",
    "lat": 43.683899,
    "lon": 10.3927,
    "elevation": 6
  },
  {
    "icao": "LIRQ",
    "iata": "FLR",
    "name": "Florence Airport, Peretola",
    "city": "Firenze (FI)",
    "country": "IT",
    "lat": 43.808558,
    "lon": 11.202822,
    "elevation": 142
  },
  {
    "icao": "LIRS",
    "iata": "GRS",
    "name": "Grosseto Corrado Baccarini Air Base / Grosseto Airport",
    "city": "Grosseto (GR)",
    "country": "IT",
    "lat": 42.759701,
    "lon": 11.0719,
    "elevation": 17
  },
  {
    "icao": "LIRZ",
    "iata": "PEG",
    "name": "Perugia San Francesco d'Assisi – Umbria International Airport",
    "city": "Perugia (PG)",
    "country": "IT",
    "lat": 43.095901,
    "lon": 12.5132,
    "elevation": 697
  },
  {
    "icao": "LJLJ",
    "iata": "LJU",
    "name": "Ljubljana Jože Pučnik Airport",
    "city": "Zgornji Brnik",
    "country": "SI",
    "lat": 46.223701,
    "lon": 14.4576,
    "elevation": 1273
  },
  {
    "icao": "LJMB",
    "iata": "MBX",
    "name": "Maribor Edvard Rusjan Airport",
    "city": "Orehova Vas",
    "country": "SI",
    "lat": 46.4799,
    "lon": 15.6861,
    "elevation": 876
  },
  {
    "icao": "LJPZ",
    "iata": "POW",
    "name": "Portorož Airport",
    "city": "Sečovlje",
    "country": "SI",
    "lat": 45.47201,
    "lon": 13.615951,
    "elevation": 7
  },
  {
    "icao": "LKKU",
    "iata": "UHE",
    "name": "Kunovice Airport",
    "city": "Uherské Hradiště",
    "country": "CZ",
    "lat": 49.0294,
    "lon": 17.439699,
    "elevation": 581
  },
  {
    "icao": "LKKV",
    "iata": "KLV",
    "name": "Karlovy Vary Airport",
    "city": "Karlovy Vary",
    "country": "CZ",
    "lat": 50.202999,
    "lon": 12.915,
    "elevation": 1989
  },
  {
    "icao": "LKMT",
    "iata": "OSR",
    "name": "Ostrava Leos Janáček Airport",
    "city": "Mošnov",
    "country": "CZ",
    "lat": 49.696301,
    "lon": 18.111099,
    "elevation": 844
  },
  {
    "icao": "LKPD",
    "iata": "PED",
    "name": "Pardubice Airport",
    "city": "Pardubice",
    "country": "CZ",
    "lat": 50.01340103149414,
    "lon": 15.73859977722168,
    "elevation": 741
  },
  {
    "icao": "LKPO",
    "iata": "PRV",
    "name": "Přerov Air Base",
    "city": "Přerov",
    "country": "CZ",
    "lat": 49.4258,
    "lon": 17.404699,
    "elevation": 676
  },
  {
    "icao": "LKPR",
    "iata": "PRG",
    "name": "Václav Havel Airport Prague",
    "city": "Prague",
    "country": "CZ",
    "lat": 50.100874,
    "lon": 14.259911,
    "elevation": 1247
  },
  {
    "icao": "LKTB",
    "iata": "BRQ",
    "name": "Brno-Tuřany Airport",
    "city": "Brno",
    "country": "CZ",
    "lat": 49.15129852294922,
    "lon": 16.694400787353516,
    "elevation": 778
  },
  {
    "icao": "LKVO",
    "iata": "VOD",
    "name": "Vodochody Airport",
    "city": "Vodochody",
    "country": "CZ",
    "lat": 50.216599,
    "lon": 14.3958,
    "elevation": 919
  },
  {
    "icao": "LLBG",
    "iata": "TLV",
    "name": "Ben Gurion International Airport",
    "city": "Tel Aviv",
    "country": "IL",
    "lat": 32.011398,
    "lon": 34.8867,
    "elevation": 135
  },
  {
    "icao": "LLER",
    "iata": "ETM",
    "name": "Ramon International Airport",
    "city": "Eilat",
    "country": "IL",
    "lat": 29.727009,
    "lon": 35.014116,
    "elevation": 288
  },
  {
    "icao": "LLHA",
    "iata": "HFA",
    "name": "Haifa International Airport",
    "city": "Haifa",
    "country": "IL",
    "lat": 32.80939865112305,
    "lon": 35.04309844970703,
    "elevation": 28
  },
  {
    "icao": "LLIB",
    "iata": "RPN",
    "name": "Rosh Pina Airport",
    "city": "Rosh Pina",
    "country": "IL",
    "lat": 32.980999,
    "lon": 35.571899,
    "elevation": 884
  },
  {
    "icao": "LLMZ",
    "iata": "MTZ",
    "name": "Bar Yehuda Airfield",
    "city": "Masada",
    "country": "IL",
    "lat": 31.328199,
    "lon": 35.388599,
    "elevation": -1266
  },
  {
    "icao": "LLNV",
    "iata": "VTM",
    "name": "Nevatim Air Base",
    "city": "Beersheba",
    "country": "IL",
    "lat": 31.208299636799996,
    "lon": 35.012298584,
    "elevation": 1330
  },
  {
    "icao": "LLRM",
    "iata": "MIP",
    "name": "Ramon Air Base",
    "city": "Beersheba",
    "country": "IL",
    "lat": 30.7761,
    "lon": 34.666698,
    "elevation": 2126
  },
  {
    "icao": "LMML",
    "iata": "MLA",
    "name": "Malta International Airport",
    "city": "Valletta",
    "country": "MT",
    "lat": 35.857498,
    "lon": 14.4775,
    "elevation": 300
  },
  {
    "icao": "LOWG",
    "iata": "GRZ",
    "name": "Graz Airport",
    "city": "Feldkirchen bei Graz",
    "country": "AT",
    "lat": 46.9911,
    "lon": 15.4396,
    "elevation": 1115
  },
  {
    "icao": "LOWI",
    "iata": "INN",
    "name": "Innsbruck Airport",
    "city": "Innsbruck",
    "country": "AT",
    "lat": 47.260201,
    "lon": 11.344,
    "elevation": 1907
  },
  {
    "icao": "LOWK",
    "iata": "KLU",
    "name": "Klagenfurt Airport",
    "city": "Klagenfurt am Wörthersee",
    "country": "AT",
    "lat": 46.642502,
    "lon": 14.3377,
    "elevation": 1472
  },
  {
    "icao": "LOWL",
    "iata": "LNZ",
    "name": "Linz-Hörsching Airport / Vogler Air Base",
    "city": "Linz",
    "country": "AT",
    "lat": 48.2332,
    "lon": 14.1875,
    "elevation": 980
  },
  {
    "icao": "LOWS",
    "iata": "SZG",
    "name": "Salzburg Airport",
    "city": "Salzburg",
    "country": "AT",
    "lat": 47.793301,
    "lon": 13.0043,
    "elevation": 1411
  },
  {
    "icao": "LOWW",
    "iata": "VIE",
    "name": "Vienna International Airport",
    "city": "Vienna",
    "country": "AT",
    "lat": 48.110298,
    "lon": 16.5697,
    "elevation": 600
  },
  {
    "icao": "LPAZ",
    "iata": "SMA",
    "name": "Santa Maria Airport",
    "city": "Vila do Porto",
    "country": "PT",
    "lat": 36.97140121459961,
    "lon": -25.17060089111328,
    "elevation": 308
  },
  {
    "icao": "LPBG",
    "iata": "BGC",
    "name": "Bragança Airport",
    "city": "Bragança",
    "country": "PT",
    "lat": 41.8578,
    "lon": -6.70713,
    "elevation": 2241
  },
  {
    "icao": "LPBJ",
    "iata": "BYJ",
    "name": "Beja Airport / Airbase",
    "city": "Beja",
    "country": "PT",
    "lat": 38.078899,
    "lon": -7.9324,
    "elevation": 636
  },
  {
    "icao": "LPCS",
    "iata": "CAT",
    "name": "Cascais Airport",
    "city": "Cascais",
    "country": "PT",
    "lat": 38.724998,
    "lon": -9.35523,
    "elevation": 325
  },
  {
    "icao": "LPFL",
    "iata": "FLW",
    "name": "Flores Airport",
    "city": "Santa Cruz das Flores",
    "country": "PT",
    "lat": 39.455299377441406,
    "lon": -31.131399154663086,
    "elevation": 112
  },
  {
    "icao": "LPFR",
    "iata": "FAO",
    "name": "Faro Airport",
    "city": "Faro",
    "country": "PT",
    "lat": 37.0144004822,
    "lon": -7.96590995789,
    "elevation": 24
  },
  {
    "icao": "LPGR",
    "iata": "GRW",
    "name": "Graciosa Airport",
    "city": "Santa Cruz da Graciosa",
    "country": "PT",
    "lat": 39.092201232910156,
    "lon": -28.029800415039062,
    "elevation": 86
  },
  {
    "icao": "LPHR",
    "iata": "HOR",
    "name": "Horta Airport",
    "city": "Horta",
    "country": "PT",
    "lat": 38.519901275634766,
    "lon": -28.715900421142578,
    "elevation": 118
  },
  {
    "icao": "LPLA",
    "iata": "TER",
    "name": "Lajes Airport",
    "city": "Praia da Vitória",
    "country": "PT",
    "lat": 38.761799,
    "lon": -27.090799,
    "elevation": 180
  },
  {
    "icao": "LPMA",
    "iata": "FNC",
    "name": "Madeira International Airport Cristiano Ronaldo",
    "city": "Funchal",
    "country": "PT",
    "lat": 32.697899,
    "lon": -16.7745,
    "elevation": 192
  },
  {
    "icao": "LPPD",
    "iata": "PDL",
    "name": "João Paulo II Airport",
    "city": "Ponta Delgada",
    "country": "PT",
    "lat": 37.7411994934,
    "lon": -25.6979007721,
    "elevation": 259
  },
  {
    "icao": "LPPI",
    "iata": "PIX",
    "name": "Pico Airport",
    "city": "Pico Island",
    "country": "PT",
    "lat": 38.554298,
    "lon": -28.441299,
    "elevation": 109
  },
  {
    "icao": "LPPM",
    "iata": "PRM",
    "name": "Portimão Airport",
    "city": "Portimão",
    "country": "PT",
    "lat": 37.1493,
    "lon": -8.58396,
    "elevation": 5
  },
  {
    "icao": "LPPR",
    "iata": "OPO",
    "name": "Francisco de Sá Carneiro Airport",
    "city": "Porto",
    "country": "PT",
    "lat": 41.2481002808,
    "lon": -8.68138980865,
    "elevation": 228
  },
  {
    "icao": "LPPS",
    "iata": "PXO",
    "name": "Porto Santo Airport",
    "city": "Vila Baleira",
    "country": "PT",
    "lat": 33.0733985901,
    "lon": -16.3500003815,
    "elevation": 341
  },
  {
    "icao": "LPPT",
    "iata": "LIS",
    "name": "Lisbon Humberto Delgado Airport",
    "city": "Lisbon",
    "country": "PT",
    "lat": 38.7813,
    "lon": -9.13592,
    "elevation": 374
  },
  {
    "icao": "LPSJ",
    "iata": "SJZ",
    "name": "São Jorge Airport",
    "city": "Velas",
    "country": "PT",
    "lat": 38.665501,
    "lon": -28.1758,
    "elevation": 311
  },
  {
    "icao": "LPVR",
    "iata": "VRL",
    "name": "Vila Real Airport",
    "city": "Vila Real",
    "country": "PT",
    "lat": 41.2743,
    "lon": -7.72047,
    "elevation": 1805
  },
  {
    "icao": "LPVZ",
    "iata": "VSE",
    "name": "Aerodromo Goncalves Lobato (Viseu Airport)",
    "city": "Viseu",
    "country": "PT",
    "lat": 40.725498,
    "lon": -7.88899,
    "elevation": 2060
  },
  {
    "icao": "LQBK",
    "iata": "BNX",
    "name": "Banja Luka International Airport",
    "city": "Mahovljani",
    "country": "BA",
    "lat": 44.941399,
    "lon": 17.297501,
    "elevation": 400
  },
  {
    "icao": "LQMO",
    "iata": "OMO",
    "name": "Mostar International Airport",
    "city": "Mostar",
    "country": "BA",
    "lat": 43.282901763916016,
    "lon": 17.84589958190918,
    "elevation": 156
  },
  {
    "icao": "LQSA",
    "iata": "SJJ",
    "name": "Sarajevo International Airport",
    "city": "Sarajevo",
    "country": "BA",
    "lat": 43.8246,
    "lon": 18.331499,
    "elevation": 1708
  },
  {
    "icao": "LQTZ",
    "iata": "TZL",
    "name": "Tuzla International Airport",
    "city": "Dubrave Gornje",
    "country": "BA",
    "lat": 44.458698,
    "lon": 18.7248,
    "elevation": 784
  },
  {
    "icao": "LRAR",
    "iata": "ARW",
    "name": "Arad International Airport",
    "city": "Arad",
    "country": "RO",
    "lat": 46.176601,
    "lon": 21.261999,
    "elevation": 352
  },
  {
    "icao": "LRBC",
    "iata": "BCM",
    "name": "Bacău George Enescu International  Airport",
    "city": "Bacău",
    "country": "RO",
    "lat": 46.5219,
    "lon": 26.910299,
    "elevation": 607
  },
  {
    "icao": "LRBM",
    "iata": "BAY",
    "name": "Maramureș International Airport",
    "city": "Tăuții-Măgherăuș",
    "country": "RO",
    "lat": 47.658444,
    "lon": 23.464445,
    "elevation": 605
  },
  {
    "icao": "LRBS",
    "iata": "BBU",
    "name": "Bucharest Băneasa Aurel Vlaicu International Airport",
    "city": "Bucharest",
    "country": "RO",
    "lat": 44.503201,
    "lon": 26.1021,
    "elevation": 297
  },
  {
    "icao": "LRBV",
    "iata": "GHV",
    "name": "Brașov-Ghimbav International Airport",
    "city": "Brașov (Ghimbav)",
    "country": "RO",
    "lat": 45.70558,
    "lon": 25.522871,
    "elevation": 1740
  },
  {
    "icao": "LRCK",
    "iata": "CND",
    "name": "Mihail Kogălniceanu International Airport",
    "city": "Mihail Kogălniceanu",
    "country": "RO",
    "lat": 44.362202,
    "lon": 28.4883,
    "elevation": 353
  },
  {
    "icao": "LRCL",
    "iata": "CLJ",
    "name": "Cluj Avram Iancu International Airport",
    "city": "Cluj-Napoca",
    "country": "RO",
    "lat": 46.787425,
    "lon": 23.684292,
    "elevation": 1039
  },
  {
    "icao": "LRCS",
    "iata": "CSB",
    "name": "Caransebeş Airport",
    "city": "Caransebeş",
    "country": "RO",
    "lat": 45.420142,
    "lon": 22.252507,
    "elevation": 866
  },
  {
    "icao": "LRCV",
    "iata": "CRA",
    "name": "Craiova International Airport",
    "city": "Craiova",
    "country": "RO",
    "lat": 44.3181,
    "lon": 23.888599,
    "elevation": 626
  },
  {
    "icao": "LRIA",
    "iata": "IAS",
    "name": "Iaşi Airport",
    "city": "Iaşi",
    "country": "RO",
    "lat": 47.180278,
    "lon": 27.620833,
    "elevation": 411
  },
  {
    "icao": "LROD",
    "iata": "OMR",
    "name": "Oradea International Airport",
    "city": "Oradea",
    "country": "RO",
    "lat": 47.025299072265625,
    "lon": 21.90250015258789,
    "elevation": 465
  },
  {
    "icao": "LROP",
    "iata": "OTP",
    "name": "Bucharest Henri Coandă International Airport",
    "city": "Otopeni",
    "country": "RO",
    "lat": 44.572127,
    "lon": 26.103396,
    "elevation": 314
  },
  {
    "icao": "LRSB",
    "iata": "SBZ",
    "name": "Sibiu International Airport",
    "city": "Sibiu",
    "country": "RO",
    "lat": 45.785841,
    "lon": 24.086666,
    "elevation": 1496
  },
  {
    "icao": "LRSM",
    "iata": "SUJ",
    "name": "Satu Mare International Airport",
    "city": "Satu Mare",
    "country": "RO",
    "lat": 47.7033,
    "lon": 22.8857,
    "elevation": 405
  },
  {
    "icao": "LRSV",
    "iata": "SCV",
    "name": "Suceava Stefan cel Mare Airport",
    "city": "Suceava",
    "country": "RO",
    "lat": 47.6875,
    "lon": 26.35409927368164,
    "elevation": 1375
  },
  {
    "icao": "LRTC",
    "iata": "TCE",
    "name": "Tulcea Danube Delta Airport",
    "city": "Mihail Kogălniceanu",
    "country": "RO",
    "lat": 45.0625,
    "lon": 28.7143,
    "elevation": 200
  },
  {
    "icao": "LRTM",
    "iata": "TGM",
    "name": "Târgu Mureş Transilvania International Airport",
    "city": "Recea",
    "country": "RO",
    "lat": 46.467701,
    "lon": 24.4125,
    "elevation": 963
  },
  {
    "icao": "LRTR",
    "iata": "TSR",
    "name": "Timişoara Traian Vuia Airport",
    "city": "Timişoara",
    "country": "RO",
    "lat": 45.809898,
    "lon": 21.3379,
    "elevation": 348
  },
  {
    "icao": "LSGG",
    "iata": "GVA",
    "name": "Geneva Cointrin International Airport",
    "city": "Geneva",
    "country": "CH",
    "lat": 46.238098,
    "lon": 6.10895,
    "elevation": 1411
  },
  {
    "icao": "LSGS",
    "iata": "SIR",
    "name": "Sion Airport",
    "city": "Sion",
    "country": "CH",
    "lat": 46.219166,
    "lon": 7.326944,
    "elevation": 1582
  },
  {
    "icao": "LSME",
    "iata": "EML",
    "name": "Emmen Air Base",
    "city": "Emmen",
    "country": "CH",
    "lat": 47.092444,
    "lon": 8.305184,
    "elevation": 1400
  },
  {
    "icao": "LSMP",
    "iata": "VIP",
    "name": "Payerne Air Base",
    "city": "Payerne",
    "country": "CH",
    "lat": 46.8432,
    "lon": 6.91506,
    "elevation": 1465
  },
  {
    "icao": "LSZA",
    "iata": "LUG",
    "name": "Lugano Airport",
    "city": "Agno",
    "country": "CH",
    "lat": 46.004299,
    "lon": 8.91058,
    "elevation": 915
  },
  {
    "icao": "LSZB",
    "iata": "BRN",
    "name": "Bern Airport",
    "city": "Bern",
    "country": "CH",
    "lat": 46.912868,
    "lon": 7.498512,
    "elevation": 1671
  },
  {
    "icao": "LSZH",
    "iata": "ZRH",
    "name": "Zürich Airport",
    "city": "Zurich",
    "country": "CH",
    "lat": 47.458056,
    "lon": 8.548056,
    "elevation": 1417
  },
  {
    "icao": "LSZR",
    "iata": "ACH",
    "name": "Sankt Gallen Altenrhein Airport",
    "city": "St. Gallen",
    "country": "CH",
    "lat": 47.485001,
    "lon": 9.56077,
    "elevation": 1306
  },
  {
    "icao": "LSZS",
    "iata": "SMV",
    "name": "Samedan Airport",
    "city": "Samedan",
    "country": "CH",
    "lat": 46.5341,
    "lon": 9.88411,
    "elevation": 5600
  },
  {
    "icao": "LTAC",
    "iata": "ESB",
    "name": "Esenboğa International Airport",
    "city": "Ankara",
    "country": "TR",
    "lat": 40.128101,
    "lon": 32.995098,
    "elevation": 3125
  },
  {
    "icao": "LTAD",
    "iata": "ANK",
    "name": "Etimesgut Air Base",
    "city": "Ankara",
    "country": "TR",
    "lat": 39.949798584,
    "lon": 32.6885986328,
    "elevation": 2653
  },
  {
    "icao": "LTAF",
    "iata": "ADA",
    "name": "Adana Şakirpaşa Airport",
    "city": "Seyhan",
    "country": "TR",
    "lat": 36.982201,
    "lon": 35.280399,
    "elevation": 65
  },
  {
    "icao": "LTAG",
    "iata": "UAB",
    "name": "İncirlik Air Base",
    "city": "Sarıçam",
    "country": "TR",
    "lat": 37.002102,
    "lon": 35.4259,
    "elevation": 238
  },
  {
    "icao": "LTAH",
    "iata": "AFY",
    "name": "Afyon Air Base",
    "city": "Afyonkarahisar",
    "country": "TR",
    "lat": 38.726398,
    "lon": 30.601101,
    "elevation": 3310
  },
  {
    "icao": "LTAI",
    "iata": "AYT",
    "name": "Antalya International Airport",
    "city": "Antalya",
    "country": "TR",
    "lat": 36.898701,
    "lon": 30.800501,
    "elevation": 177
  },
  {
    "icao": "LTAJ",
    "iata": "GZT",
    "name": "Gaziantep International Airport",
    "city": "Gaziantep",
    "country": "TR",
    "lat": 36.947201,
    "lon": 37.478699,
    "elevation": 2315
  },
  {
    "icao": "LTAL",
    "iata": "KFS",
    "name": "Kastamonu Airport",
    "city": "Kastamonu",
    "country": "TR",
    "lat": 41.314201,
    "lon": 33.795799,
    "elevation": 3520
  },
  {
    "icao": "LTAN",
    "iata": "KYA",
    "name": "Konya Airport",
    "city": "Konya",
    "country": "TR",
    "lat": 37.979,
    "lon": 32.561901,
    "elevation": 3392
  },
  {
    "icao": "LTAS",
    "iata": "ONQ",
    "name": "Zonguldak Çaycuma Airport",
    "city": "Zonguldak",
    "country": "TR",
    "lat": 41.506401,
    "lon": 32.0886,
    "elevation": 44
  },
  {
    "icao": "LTAT",
    "iata": "MLX",
    "name": "Malatya Erhaç Airport",
    "city": "Malatya",
    "country": "TR",
    "lat": 38.435298919699996,
    "lon": 38.0909996033,
    "elevation": 2828
  },
  {
    "icao": "LTAU",
    "iata": "ASR",
    "name": "Kayseri Erkilet Airport",
    "city": "Kayseri",
    "country": "TR",
    "lat": 38.770401001,
    "lon": 35.4953994751,
    "elevation": 3463
  },
  {
    "icao": "LTAW",
    "iata": "TJK",
    "name": "Tokat Airport",
    "city": "Tokat",
    "country": "TR",
    "lat": 40.32472,
    "lon": 36.39056,
    "elevation": 1859
  },
  {
    "icao": "LTAY",
    "iata": "DNZ",
    "name": "Çardak Airport",
    "city": "Denizli",
    "country": "TR",
    "lat": 37.7855987549,
    "lon": 29.7012996674,
    "elevation": 2795
  },
  {
    "icao": "LTBA",
    "iata": "ISL",
    "name": "İstanbul Atatürk Airport",
    "city": "Bakırköy, Istanbul",
    "country": "TR",
    "lat": 40.971913,
    "lon": 28.823714,
    "elevation": 163
  },
  {
    "icao": "LTBF",
    "iata": "BZI",
    "name": "Balıkesir Airport",
    "city": "Balıkesir",
    "country": "TR",
    "lat": 39.619301,
    "lon": 27.926001,
    "elevation": 340
  },
  {
    "icao": "LTBG",
    "iata": "BDM",
    "name": "Bandırma Airport",
    "city": "Bandırma",
    "country": "TR",
    "lat": 40.318001,
    "lon": 27.977699,
    "elevation": 170
  },
  {
    "icao": "LTBH",
    "iata": "CKZ",
    "name": "Çanakkale Airport",
    "city": "Çanakkale",
    "country": "TR",
    "lat": 40.1376991272,
    "lon": 26.4267997742,
    "elevation": 23
  },
  {
    "icao": "LTBI",
    "iata": "ESK",
    "name": "Eskişehir Air Base",
    "city": "Eskişehir",
    "country": "TR",
    "lat": 39.7841,
    "lon": 30.5821,
    "elevation": 2581
  },
  {
    "icao": "LTBJ",
    "iata": "ADB",
    "name": "Adnan Menderes International Airport",
    "city": "Gaziemir",
    "country": "TR",
    "lat": 38.2924,
    "lon": 27.157,
    "elevation": 412
  },
  {
    "icao": "LTBL",
    "iata": "IGL",
    "name": "Çiğli Airbase",
    "city": "Çiğli",
    "country": "TR",
    "lat": 38.513,
    "lon": 27.010099,
    "elevation": 16
  },
  {
    "icao": "LTBO",
    "iata": "USQ",
    "name": "Uşak Airport",
    "city": "Uşak",
    "country": "TR",
    "lat": 38.681499,
    "lon": 29.471701,
    "elevation": 2897
  },
  {
    "icao": "LTBQ",
    "iata": "KCO",
    "name": "Cengiz Topel Airport",
    "city": "Kartepe",
    "country": "TR",
    "lat": 40.735001,
    "lon": 30.0833,
    "elevation": 182
  },
  {
    "icao": "LTBR",
    "iata": "YEI",
    "name": "Bursa Yenişehir Airport",
    "city": "Yenişehir",
    "country": "TR",
    "lat": 40.255199,
    "lon": 29.562599,
    "elevation": 764
  },
  {
    "icao": "LTBS",
    "iata": "DLM",
    "name": "Dalaman International Airport",
    "city": "Dalaman",
    "country": "TR",
    "lat": 36.7131004333,
    "lon": 28.7924995422,
    "elevation": 20
  },
  {
    "icao": "LTBU",
    "iata": "TEQ",
    "name": "Tekirdağ Çorlu Airport",
    "city": "Çorlu",
    "country": "TR",
    "lat": 41.13819885253906,
    "lon": 27.919099807739258,
    "elevation": 574
  },
  {
    "icao": "LTBY",
    "iata": "AOE",
    "name": "Anadolu Airport",
    "city": "Eskişehir",
    "country": "TR",
    "lat": 39.809898,
    "lon": 30.5194,
    "elevation": 2588
  },
  {
    "icao": "LTCA",
    "iata": "EZS",
    "name": "Elazığ Airport",
    "city": "Elazığ",
    "country": "TR",
    "lat": 38.597974,
    "lon": 39.28348,
    "elevation": 2927
  },
  {
    "icao": "LTCB",
    "iata": "OGU",
    "name": "Ordu–Giresun Airport",
    "city": "Ordu",
    "country": "TR",
    "lat": 40.966872,
    "lon": 38.085995,
    "elevation": 11
  },
  {
    "icao": "LTCC",
    "iata": "DIY",
    "name": "Diyarbakır Airport",
    "city": "Diyarbakır",
    "country": "TR",
    "lat": 37.893902,
    "lon": 40.201,
    "elevation": 2251
  },
  {
    "icao": "LTCD",
    "iata": "ERC",
    "name": "Erzincan Airport",
    "city": "Erzincan",
    "country": "TR",
    "lat": 39.7102012634,
    "lon": 39.527000427199994,
    "elevation": 3783
  },
  {
    "icao": "LTCE",
    "iata": "ERZ",
    "name": "Erzurum International Airport",
    "city": "Erzurum",
    "country": "TR",
    "lat": 39.956501,
    "lon": 41.1702,
    "elevation": 5763
  },
  {
    "icao": "LTCF",
    "iata": "KSY",
    "name": "Kars Airport",
    "city": "Kars",
    "country": "TR",
    "lat": 40.562198638916016,
    "lon": 43.1150016784668,
    "elevation": 5889
  },
  {
    "icao": "LTCG",
    "iata": "TZX",
    "name": "Trabzon International Airport",
    "city": "Trabzon",
    "country": "TR",
    "lat": 40.995098,
    "lon": 39.7897,
    "elevation": 104
  },
  {
    "icao": "LTCI",
    "iata": "VAN",
    "name": "Van Ferit Melen Airport",
    "city": "Van",
    "country": "TR",
    "lat": 38.46820068359375,
    "lon": 43.332298278808594,
    "elevation": 5480
  },
  {
    "icao": "LTCJ",
    "iata": "BAL",
    "name": "Batman Airport",
    "city": "Batman",
    "country": "TR",
    "lat": 37.929000854499996,
    "lon": 41.1166000366,
    "elevation": 1822
  },
  {
    "icao": "LTCK",
    "iata": "MSR",
    "name": "Muş Airport",
    "city": "Muş",
    "country": "TR",
    "lat": 38.747798919677734,
    "lon": 41.66120147705078,
    "elevation": 4157
  },
  {
    "icao": "LTCL",
    "iata": "SXZ",
    "name": "Siirt Airport",
    "city": "Siirt",
    "country": "TR",
    "lat": 37.97890090942383,
    "lon": 41.84040069580078,
    "elevation": 2001
  },
  {
    "icao": "LTCM",
    "iata": "NOP",
    "name": "Sinop Airport",
    "city": "Sinop",
    "country": "TR",
    "lat": 42.018313,
    "lon": 35.071774,
    "elevation": 20
  },
  {
    "icao": "LTCN",
    "iata": "KCM",
    "name": "Kahramanmaraş Airport",
    "city": "Kahramanmaraş",
    "country": "TR",
    "lat": 37.5388259888,
    "lon": 36.9535217285,
    "elevation": 1723
  },
  {
    "icao": "LTCO",
    "iata": "AJI",
    "name": "Ağrı Airport",
    "city": "Ağrı",
    "country": "TR",
    "lat": 39.655642,
    "lon": 43.025742,
    "elevation": 5462
  },
  {
    "icao": "LTCP",
    "iata": "ADF",
    "name": "Adıyaman Airport",
    "city": "Adıyaman",
    "country": "TR",
    "lat": 37.7314,
    "lon": 38.468899,
    "elevation": 2216
  },
  {
    "icao": "LTCR",
    "iata": "MQM",
    "name": "Mardin Airport",
    "city": "Mardin",
    "country": "TR",
    "lat": 37.223300933800004,
    "lon": 40.6316986084,
    "elevation": 1729
  },
  {
    "icao": "LTCS",
    "iata": "GNY",
    "name": "Şanlıurfa GAP Airport",
    "city": "Şanlıurfa",
    "country": "TR",
    "lat": 37.445663,
    "lon": 38.895592,
    "elevation": 2708
  },
  {
    "icao": "LTCT",
    "iata": "IGD",
    "name": "Iğdır Airport",
    "city": "Iğdır",
    "country": "TR",
    "lat": 39.976627,
    "lon": 43.876648,
    "elevation": 3101
  },
  {
    "icao": "LTCV",
    "iata": "NKT",
    "name": "Şırnak Şerafettin Elçi Airport",
    "city": "Şırnak",
    "country": "TR",
    "lat": 37.3647,
    "lon": 42.0582,
    "elevation": 2038
  },
  {
    "icao": "LTCW",
    "iata": "YKO",
    "name": "Hakkari Yüksekova Airport",
    "city": "Hakkari",
    "country": "TR",
    "lat": 37.5497,
    "lon": 44.2381,
    "elevation": 6400
  },
  {
    "icao": "LTDA",
    "iata": "HTY",
    "name": "Hatay Airport",
    "city": "Antakya",
    "country": "TR",
    "lat": 36.362778,
    "lon": 36.282223,
    "elevation": 269
  },
  {
    "icao": "LTDB",
    "iata": "COV",
    "name": "Çukurova International Airport",
    "city": "Tarsus",
    "country": "TR",
    "lat": 36.890908,
    "lon": 35.070522,
    "elevation": 35
  },
  {
    "icao": "LTFC",
    "iata": "ISE",
    "name": "Süleyman Demirel International Airport",
    "city": "Isparta",
    "country": "TR",
    "lat": 37.8554,
    "lon": 30.368401,
    "elevation": 2835
  },
  {
    "icao": "LTFD",
    "iata": "EDO",
    "name": "Balıkesir Koca Seyit Airport",
    "city": "Edremit",
    "country": "TR",
    "lat": 39.5546,
    "lon": 27.0138,
    "elevation": 50
  },
  {
    "icao": "LTFE",
    "iata": "BJV",
    "name": "Milas Bodrum International Airport",
    "city": "Bodrum",
    "country": "TR",
    "lat": 37.250599,
    "lon": 27.664301,
    "elevation": 21
  },
  {
    "icao": "LTFG",
    "iata": "GZP",
    "name": "Gazipaşa-Alanya Airport",
    "city": "Gazipaşa",
    "country": "TR",
    "lat": 36.299217,
    "lon": 32.300598,
    "elevation": 92
  },
  {
    "icao": "LTFH",
    "iata": "SZF",
    "name": "Samsun-Çarşamba Airport",
    "city": "Samsun",
    "country": "TR",
    "lat": 41.253988,
    "lon": 36.567546,
    "elevation": 18
  },
  {
    "icao": "LTFJ",
    "iata": "SAW",
    "name": "Istanbul Sabiha Gökçen International Airport",
    "city": "Pendik, Istanbul",
    "country": "TR",
    "lat": 40.898602,
    "lon": 29.3092,
    "elevation": 312
  },
  {
    "icao": "LTFM",
    "iata": "IST",
    "name": "İstanbul Airport",
    "city": "Arnavutköy, Istanbul",
    "country": "TR",
    "lat": 41.261297,
    "lon": 28.741951,
    "elevation": 325
  },
  {
    "icao": "LTFO",
    "iata": "RZV",
    "name": "Rize–Artvin Airport",
    "city": "Rize",
    "country": "TR",
    "lat": 41.179766,
    "lon": 40.848802,
    "elevation": 16
  },
  {
    "icao": "LUBL",
    "iata": "BZY",
    "name": "Bălți International Airport",
    "city": "Bălți",
    "country": "MD",
    "lat": 47.837666,
    "lon": 27.781108,
    "elevation": 758
  },
  {
    "icao": "LUKK",
    "iata": "RMO",
    "name": "Chişinău International Airport",
    "city": "Chişinău",
    "country": "MD",
    "lat": 46.9277,
    "lon": 28.931,
    "elevation": 399
  },
  {
    "icao": "LWOH",
    "iata": "OHD",
    "name": "Ohrid St. Paul the Apostle Airport",
    "city": "Ohrid",
    "country": "MK",
    "lat": 41.18,
    "lon": 20.7423,
    "elevation": 2313
  },
  {
    "icao": "LWSK",
    "iata": "SKP",
    "name": "Skopje International Airport",
    "city": "Ilinden",
    "country": "MK",
    "lat": 41.958087,
    "lon": 21.622581,
    "elevation": 781
  },
  {
    "icao": "LXGB",
    "iata": "GIB",
    "name": "Gibraltar Airport",
    "city": "Gibraltar",
    "country": "GI",
    "lat": 36.151199,
    "lon": -5.34966,
    "elevation": 12
  },
  {
    "icao": "LY-BCQ",
    "iata": "BCQ",
    "name": "Brak Airport",
    "city": "Brak",
    "country": "LY",
    "lat": 27.653,
    "lon": 14.272,
    "elevation": 1056
  },
  {
    "icao": "LYBE",
    "iata": "BEG",
    "name": "Belgrade Nikola Tesla Airport",
    "city": "Belgrade",
    "country": "RS",
    "lat": 44.818401,
    "lon": 20.309099,
    "elevation": 335
  },
  {
    "icao": "LYBT",
    "iata": "BJY",
    "name": "Batajnica Air Base",
    "city": "Zemun",
    "country": "RS",
    "lat": 44.935299,
    "lon": 20.2575,
    "elevation": 265
  },
  {
    "icao": "LYKV",
    "iata": "KVO",
    "name": "Morava Airport",
    "city": "Kraljevo",
    "country": "RS",
    "lat": 43.817519,
    "lon": 20.586662,
    "elevation": 686
  },
  {
    "icao": "LYNI",
    "iata": "INI",
    "name": "Niš Constantine the Great Airport",
    "city": "Niš",
    "country": "RS",
    "lat": 43.337009,
    "lon": 21.85451,
    "elevation": 648
  },
  {
    "icao": "LYPG",
    "iata": "TGD",
    "name": "Podgorica Airport / Podgorica Golubovci Airbase",
    "city": "Podgorica",
    "country": "ME",
    "lat": 42.359402,
    "lon": 19.2519,
    "elevation": 141
  },
  {
    "icao": "LYTV",
    "iata": "TIV",
    "name": "Tivat Airport",
    "city": "Tivat",
    "country": "ME",
    "lat": 42.404701232910156,
    "lon": 18.72330093383789,
    "elevation": 20
  },
  {
    "icao": "LYUZ",
    "iata": "UZC",
    "name": "Ponikve Airport",
    "city": "Stapari",
    "country": "RS",
    "lat": 43.898899,
    "lon": 19.697701,
    "elevation": 2966
  },
  {
    "icao": "ZULA",
    "iata": "LZG",
    "name": "Langzhong Gucheng Airport",
    "city": "Nanchong (Langzhong)",
    "country": "CN",
    "lat": 31.50191,
    "lon": 106.034417,
    "elevation": 1444
  },
  {
    "icao": "LZIB",
    "iata": "BTS",
    "name": "M. R. Štefánik Airport",
    "city": "Bratislava",
    "country": "SK",
    "lat": 48.1702,
    "lon": 17.2127,
    "elevation": 436
  },
  {
    "icao": "LZKZ",
    "iata": "KSC",
    "name": "Košice International Airport",
    "city": "Košice",
    "country": "SK",
    "lat": 48.663101,
    "lon": 21.2411,
    "elevation": 755
  },
  {
    "icao": "LZPP",
    "iata": "PZY",
    "name": "Piešťany Airport",
    "city": "Piešťany",
    "country": "SK",
    "lat": 48.62519836425781,
    "lon": 17.828399658203125,
    "elevation": 545
  },
  {
    "icao": "LZSL",
    "iata": "SLD",
    "name": "Sliač Airport",
    "city": "Sliač",
    "country": "SK",
    "lat": 48.63779830932617,
    "lon": 19.13409996032715,
    "elevation": 1043
  },
  {
    "icao": "LZTT",
    "iata": "TAT",
    "name": "Poprad-Tatry Airport",
    "city": "Poprad",
    "country": "SK",
    "lat": 49.073601,
    "lon": 20.2411,
    "elevation": 2356
  },
  {
    "icao": "LZZI",
    "iata": "ILZ",
    "name": "Žilina-Dolný Hričov Airport",
    "city": "Dolný Hričov",
    "country": "SK",
    "lat": 49.233292,
    "lon": 18.613386,
    "elevation": 1020
  },
  {
    "icao": "MBGT",
    "iata": "GDT",
    "name": "JAGS McCartney International Airport",
    "city": "Cockburn Town",
    "country": "TC",
    "lat": 21.4445,
    "lon": -71.142303,
    "elevation": 13
  },
  {
    "icao": "MBNC",
    "iata": "NCA",
    "name": "North Caicos Airport",
    "city": "North Caicos",
    "country": "TC",
    "lat": 21.916094,
    "lon": -71.942954,
    "elevation": 10
  },
  {
    "icao": "MBPV",
    "iata": "PLS",
    "name": "Providenciales International Airport",
    "city": "Providenciales",
    "country": "TC",
    "lat": 21.773697,
    "lon": -72.268321,
    "elevation": 15
  },
  {
    "icao": "MBSC",
    "iata": "XSC",
    "name": "South Caicos Airport",
    "city": "South Caicos",
    "country": "TC",
    "lat": 21.515699,
    "lon": -71.528503,
    "elevation": 6
  },
  {
    "icao": "MDBH",
    "iata": "BRX",
    "name": "Maria Montez International Airport",
    "city": "Barahona",
    "country": "DO",
    "lat": 18.25149917602539,
    "lon": -71.12039947509766,
    "elevation": 10
  },
  {
    "icao": "MDCR",
    "iata": "CBJ",
    "name": "Cabo Rojo Airport",
    "city": "Cabo Rojo",
    "country": "DO",
    "lat": 17.929000854492188,
    "lon": -71.6447982788086,
    "elevation": 262
  },
  {
    "icao": "MDCY",
    "iata": "AZS",
    "name": "Samaná El Catey International Airport",
    "city": "Samana",
    "country": "DO",
    "lat": 19.269259,
    "lon": -69.737405,
    "elevation": 30
  },
  {
    "icao": "MDJB",
    "iata": "JBQ",
    "name": "La Isabela International Airport",
    "city": "La Isabela",
    "country": "DO",
    "lat": 18.572500228881836,
    "lon": -69.98560333251953,
    "elevation": 98
  },
  {
    "icao": "MDLR",
    "iata": "LRM",
    "name": "Casa De Campo International Airport",
    "city": "La Romana",
    "country": "DO",
    "lat": 18.452222,
    "lon": -68.911111,
    "elevation": 213
  },
  {
    "icao": "MDPC",
    "iata": "PUJ",
    "name": "Punta Cana International Airport",
    "city": "Punta Cana",
    "country": "DO",
    "lat": 18.5674,
    "lon": -68.363403,
    "elevation": 47
  },
  {
    "icao": "MDPP",
    "iata": "POP",
    "name": "Gregorio Luperon International Airport",
    "city": "Puerto Plata",
    "country": "DO",
    "lat": 19.7579,
    "lon": -70.57,
    "elevation": 15
  },
  {
    "icao": "MDSD",
    "iata": "SDQ",
    "name": "Las Américas International Airport",
    "city": "Santo Domingo",
    "country": "DO",
    "lat": 18.42970085144,
    "lon": -69.668899536133,
    "elevation": 59
  },
  {
    "icao": "MDST",
    "iata": "STI",
    "name": "Cibao International Airport",
    "city": "Santiago",
    "country": "DO",
    "lat": 19.406099319458008,
    "lon": -70.60469818115234,
    "elevation": 565
  },
  {
    "icao": "MGCB",
    "iata": "CBV",
    "name": "Coban Airport",
    "city": "Coban",
    "country": "GT",
    "lat": 15.469,
    "lon": -90.4067,
    "elevation": 4339
  },
  {
    "icao": "MGGT",
    "iata": "GUA",
    "name": "La Aurora Airport",
    "city": "Guatemala City",
    "country": "GT",
    "lat": 14.5833,
    "lon": -90.527496,
    "elevation": 4952
  },
  {
    "icao": "MGPB",
    "iata": "PBR",
    "name": "Puerto Barrios Airport",
    "city": "Puerto Barrios",
    "country": "GT",
    "lat": 15.7309,
    "lon": -88.583801,
    "elevation": 33
  },
  {
    "icao": "MGRB",
    "iata": "RUV",
    "name": "Rubelsanto Airport",
    "city": "Rubelsanto",
    "country": "GT",
    "lat": 15.992,
    "lon": -90.445297,
    "elevation": 426
  },
  {
    "icao": "MGRT",
    "iata": "RER",
    "name": "Retalhuleu Airport",
    "city": "Retalhuleu",
    "country": "GT",
    "lat": 14.521431,
    "lon": -91.697001,
    "elevation": 656
  },
  {
    "icao": "MGSJ",
    "iata": "GSJ",
    "name": "San José Airport",
    "city": "Puerto San José",
    "country": "GT",
    "lat": 13.9362,
    "lon": -90.8358,
    "elevation": 29
  },
  {
    "icao": "MGMM",
    "iata": "FRS",
    "name": "Mundo Maya International Airport",
    "city": "San Benito",
    "country": "GT",
    "lat": 16.913799,
    "lon": -89.866402,
    "elevation": 427
  },
  {
    "icao": "MHLC",
    "iata": "LCE",
    "name": "Goloson International Airport",
    "city": "La Ceiba",
    "country": "HN",
    "lat": 15.7425,
    "lon": -86.852997,
    "elevation": 39
  },
  {
    "icao": "MHLM",
    "iata": "SAP",
    "name": "Ramón Villeda Morales International Airport",
    "city": "San Pedro Sula",
    "country": "HN",
    "lat": 15.4526,
    "lon": -87.923599,
    "elevation": 91
  },
  {
    "icao": "MHNJ",
    "iata": "GJA",
    "name": "La Laguna Airport",
    "city": "Guanaja",
    "country": "HN",
    "lat": 16.4454,
    "lon": -85.906601,
    "elevation": 49
  },
  {
    "icao": "MHRO",
    "iata": "RTB",
    "name": "Juan Manuel Gálvez International Airport",
    "city": "Coxen Hole",
    "country": "HN",
    "lat": 16.316799,
    "lon": -86.523003,
    "elevation": 39
  },
  {
    "icao": "MHPR",
    "iata": "XPL",
    "name": "Palmerola International Airport / José Enrique Soto Cano Air Base",
    "city": "Palmerola",
    "country": "HN",
    "lat": 14.3824,
    "lon": -87.621201,
    "elevation": 2061
  },
  {
    "icao": "MHTE",
    "iata": "TEA",
    "name": "Tela Airport",
    "city": "Tela",
    "country": "HN",
    "lat": 15.7759,
    "lon": -87.4758,
    "elevation": 7
  },
  {
    "icao": "MHTG",
    "iata": "TGU",
    "name": "Toncontín International Airport",
    "city": "Tegucigalpa",
    "country": "HN",
    "lat": 14.0609,
    "lon": -87.217201,
    "elevation": 3294
  },
  {
    "icao": "MHTJ",
    "iata": "TJI",
    "name": "Trujillo Airport",
    "city": "Trujillo",
    "country": "HN",
    "lat": 15.926599,
    "lon": -85.938573,
    "elevation": 3
  },
  {
    "icao": "MKBS",
    "iata": "OCJ",
    "name": "Ian Fleming International Airport",
    "city": "Boscobel",
    "country": "JM",
    "lat": 18.404079,
    "lon": -76.969754,
    "elevation": 90
  },
  {
    "icao": "MKJP",
    "iata": "KIN",
    "name": "Norman Manley International Airport",
    "city": "Kingston",
    "country": "JM",
    "lat": 17.935699462890625,
    "lon": -76.7874984741211,
    "elevation": 10
  },
  {
    "icao": "MKJS",
    "iata": "MBJ",
    "name": "Sangster International Airport",
    "city": "Montego Bay",
    "country": "JM",
    "lat": 18.5037,
    "lon": -77.913399,
    "elevation": 4
  },
  {
    "icao": "MKKJ",
    "iata": "POT",
    "name": "Ken Jones Airport",
    "city": "Ken Jones",
    "country": "JM",
    "lat": 18.1987991333,
    "lon": -76.53450012210001,
    "elevation": 20
  },
  {
    "icao": "MKTP",
    "iata": "KTP",
    "name": "Tinson Pen Airport",
    "city": "Tinson Pen",
    "country": "JM",
    "lat": 17.98859977722168,
    "lon": -76.82379913330078,
    "elevation": 16
  },
  {
    "icao": "MMAA",
    "iata": "ACA",
    "name": "General Juan N. Álvarez International Airport",
    "city": "Acapulco",
    "country": "MX",
    "lat": 16.757126,
    "lon": -99.753113,
    "elevation": 16
  },
  {
    "icao": "MMAN",
    "iata": "NTR",
    "name": "Del Norte International Airport",
    "city": "Monterrey",
    "country": "MX",
    "lat": 25.865601,
    "lon": -100.237,
    "elevation": 1476
  },
  {
    "icao": "MMAS",
    "iata": "AGU",
    "name": "Jesús Terán Peredo International Airport",
    "city": "Aguascalientes",
    "country": "MX",
    "lat": 21.699589,
    "lon": -102.318372,
    "elevation": 6112
  },
  {
    "icao": "MMBT",
    "iata": "HUX",
    "name": "Bahías de Huatulco International Airport",
    "city": "Huatulco",
    "country": "MX",
    "lat": 15.774909,
    "lon": -96.260319,
    "elevation": 464
  },
  {
    "icao": "MMCB",
    "iata": "CVJ",
    "name": "General Mariano Matamoros International Airport",
    "city": "Temixco",
    "country": "MX",
    "lat": 18.833922,
    "lon": -99.261818,
    "elevation": 4277
  },
  {
    "icao": "MMCE",
    "iata": "CME",
    "name": "Ciudad del Carmen International Airport",
    "city": "Ciudad del Carmen",
    "country": "MX",
    "lat": 18.65369987487793,
    "lon": -91.79900360107422,
    "elevation": 10
  },
  {
    "icao": "MMCL",
    "iata": "CUL",
    "name": "Bachigualato Federal International Airport",
    "city": "Culiacán",
    "country": "MX",
    "lat": 24.76504,
    "lon": -107.475228,
    "elevation": 108
  },
  {
    "icao": "MMCM",
    "iata": "CTM",
    "name": "Chetumal International Airport",
    "city": "Chetumal",
    "country": "MX",
    "lat": 18.504985,
    "lon": -88.328018,
    "elevation": 39
  },
  {
    "icao": "MMCN",
    "iata": "CEN",
    "name": "Ciudad Obregón International Airport",
    "city": "Ciudad Obregón",
    "country": "MX",
    "lat": 27.39259910583496,
    "lon": -109.83300018310547,
    "elevation": 243
  },
  {
    "icao": "MMCP",
    "iata": "CPE",
    "name": "Ingeniero Alberto Acuña Ongay International Airport",
    "city": "Campeche",
    "country": "MX",
    "lat": 19.816799163800003,
    "lon": -90.5002975464,
    "elevation": 34
  },
  {
    "icao": "MMCS",
    "iata": "CJS",
    "name": "Abraham González International Airport",
    "city": "Ciudad Juárez",
    "country": "MX",
    "lat": 31.63610076904297,
    "lon": -106.42900085449219,
    "elevation": 3904
  },
  {
    "icao": "MMCU",
    "iata": "CUU",
    "name": "General Roberto Fierro Villalobos International Airport",
    "city": "Chihuahua",
    "country": "MX",
    "lat": 28.7029,
    "lon": -105.964996,
    "elevation": 4462
  },
  {
    "icao": "MMCV",
    "iata": "CVM",
    "name": "General Pedro Jose Mendez International Airport",
    "city": "Ciudad Victoria",
    "country": "MX",
    "lat": 23.7033004761,
    "lon": -98.9564971924,
    "elevation": 761
  },
  {
    "icao": "MMCY",
    "iata": "CYW",
    "name": "Captain Rogelio Castillo National Airport",
    "city": "Celaya",
    "country": "MX",
    "lat": 20.545998,
    "lon": -100.886539,
    "elevation": 5709
  },
  {
    "icao": "MMCZ",
    "iata": "CZM",
    "name": "Cozumel International Airport",
    "city": "Cozumel",
    "country": "MX",
    "lat": 20.514922,
    "lon": -86.928538,
    "elevation": 15
  },
  {
    "icao": "MMDO",
    "iata": "DGO",
    "name": "General Guadalupe Victoria International Airport",
    "city": "Durango",
    "country": "MX",
    "lat": 24.125468,
    "lon": -104.527938,
    "elevation": 6104
  },
  {
    "icao": "MMEP",
    "iata": "TPQ",
    "name": "Amado Nervo National Airport",
    "city": "Tepic",
    "country": "MX",
    "lat": 21.419833,
    "lon": -104.842472,
    "elevation": 3020
  },
  {
    "icao": "MMGL",
    "iata": "GDL",
    "name": "Guadalajara International Airport",
    "city": "Guadalajara",
    "country": "MX",
    "lat": 20.523342,
    "lon": -103.310108,
    "elevation": 5016
  },
  {
    "icao": "MMGM",
    "iata": "GYM",
    "name": "General José María Yáñez International Airport",
    "city": "Guaymas",
    "country": "MX",
    "lat": 27.9689998626709,
    "lon": -110.92500305175781,
    "elevation": 59
  },
  {
    "icao": "MMHO",
    "iata": "HMO",
    "name": "General Ignacio P. Garcia International Airport",
    "city": "Hermosillo",
    "country": "MX",
    "lat": 29.093527,
    "lon": -111.049891,
    "elevation": 627
  },
  {
    "icao": "MMIA",
    "iata": "CLQ",
    "name": "Licenciado Miguel de la Madrid International Airport",
    "city": "Colima",
    "country": "MX",
    "lat": 19.277,
    "lon": -103.577002,
    "elevation": 2467
  },
  {
    "icao": "MMIO",
    "iata": "SLW",
    "name": "Plan De Guadalupe International Airport",
    "city": "Saltillo",
    "country": "MX",
    "lat": 25.544145,
    "lon": -100.930195,
    "elevation": 4778
  },
  {
    "icao": "MMIT",
    "iata": "IZT",
    "name": "General Antonio Cárdenas Rodríguez National Airport / Ixtepec Air Base",
    "city": "Ixtepec",
    "country": "MX",
    "lat": 16.445961,
    "lon": -95.093708,
    "elevation": 164
  },
  {
    "icao": "MMJA",
    "iata": "JAL",
    "name": "El Lencero Airport",
    "city": "Emiliano Zapata",
    "country": "MX",
    "lat": 19.475107,
    "lon": -96.797008,
    "elevation": 3127
  },
  {
    "icao": "MMLC",
    "iata": "LZC",
    "name": "Lázaro Cárdenas Airport",
    "city": "Lázaro Cárdenas",
    "country": "MX",
    "lat": 18.001672,
    "lon": -102.220316,
    "elevation": 39
  },
  {
    "icao": "MMLM",
    "iata": "LMM",
    "name": "Valle del Fuerte International Airport",
    "city": "Los Mochis",
    "country": "MX",
    "lat": 25.685447,
    "lon": -109.081055,
    "elevation": 16
  },
  {
    "icao": "MMLO",
    "iata": "BJX",
    "name": "Del Bajío International Airport",
    "city": "Silao",
    "country": "MX",
    "lat": 20.992695,
    "lon": -101.480284,
    "elevation": 5956
  },
  {
    "icao": "MMLP",
    "iata": "LAP",
    "name": "Manuel Márquez de León International Airport",
    "city": "La Paz",
    "country": "MX",
    "lat": 24.072701,
    "lon": -110.362,
    "elevation": 69
  },
  {
    "icao": "MMLT",
    "iata": "LTO",
    "name": "Loreto International Airport",
    "city": "Loreto",
    "country": "MX",
    "lat": 25.989200592041016,
    "lon": -111.3479995727539,
    "elevation": 34
  },
  {
    "icao": "MMMA",
    "iata": "MAM",
    "name": "General Servando Canales International Airport",
    "city": "Matamoros",
    "country": "MX",
    "lat": 25.7698993683,
    "lon": -97.5252990723,
    "elevation": 25
  },
  {
    "icao": "MMMD",
    "iata": "MID",
    "name": "Manuel Crescencio Rejón International Airport",
    "city": "Mérida",
    "country": "MX",
    "lat": 20.930485,
    "lon": -89.645462,
    "elevation": 38
  },
  {
    "icao": "MMML",
    "iata": "MXL",
    "name": "General Rodolfo Sánchez Taboada International Airport",
    "city": "Mexicali",
    "country": "MX",
    "lat": 32.630629,
    "lon": -115.242805,
    "elevation": 74
  },
  {
    "icao": "MMMM",
    "iata": "MLM",
    "name": "General Francisco J. Mujica International Airport",
    "city": "Morelia",
    "country": "MX",
    "lat": 19.849899,
    "lon": -101.025002,
    "elevation": 6033
  },
  {
    "icao": "MMMT",
    "iata": "MTT",
    "name": "Minatitlán/Coatzacoalcos International Airport",
    "city": "Cosoleacaque",
    "country": "MX",
    "lat": 18.103399,
    "lon": -94.580704,
    "elevation": 36
  },
  {
    "icao": "MMMV",
    "iata": "LOV",
    "name": "Monclova International Airport",
    "city": "Monclova",
    "country": "MX",
    "lat": 26.9557,
    "lon": -101.470001,
    "elevation": 1864
  },
  {
    "icao": "MMMX",
    "iata": "MEX",
    "name": "Benito Juárez International Airport",
    "city": "Ciudad de México",
    "country": "MX",
    "lat": 19.435137,
    "lon": -99.071328,
    "elevation": 7316
  },
  {
    "icao": "MMMY",
    "iata": "MTY",
    "name": "Monterrey International Airport",
    "city": "Monterrey",
    "country": "MX",
    "lat": 25.778521,
    "lon": -100.106989,
    "elevation": 1278
  },
  {
    "icao": "MMMZ",
    "iata": "MZT",
    "name": "General Rafael Buelna International Airport",
    "city": "Mazatlàn",
    "country": "MX",
    "lat": 23.161474,
    "lon": -106.264572,
    "elevation": 38
  },
  {
    "icao": "MMNL",
    "iata": "NLD",
    "name": "Quetzalcóatl International Airport",
    "city": "Nuevo Laredo",
    "country": "MX",
    "lat": 27.443899,
    "lon": -99.570503,
    "elevation": 484
  },
  {
    "icao": "MMOX",
    "iata": "OAX",
    "name": "Xoxocotlán International Airport",
    "city": "Oaxaca",
    "country": "MX",
    "lat": 17.000814,
    "lon": -96.72197,
    "elevation": 4989
  },
  {
    "icao": "MMPA",
    "iata": "PAZ",
    "name": "El Tajín National Airport",
    "city": "Poza Rica",
    "country": "MX",
    "lat": 20.6026992798,
    "lon": -97.46080017090001,
    "elevation": 497
  },
  {
    "icao": "MMPB",
    "iata": "PBC",
    "name": "Hermanos Serdán International Airport",
    "city": "Puebla",
    "country": "MX",
    "lat": 19.158465,
    "lon": -98.371582,
    "elevation": 7361
  },
  {
    "icao": "MMPG",
    "iata": "PDS",
    "name": "Piedras Negras International Airport",
    "city": "Piedras Negras",
    "country": "MX",
    "lat": 28.627873,
    "lon": -100.53524,
    "elevation": 901
  },
  {
    "icao": "MMPN",
    "iata": "UPN",
    "name": "Uruapan - Licenciado y General Ignacio Lopez Rayon International Airport",
    "city": "Uruapan",
    "country": "MX",
    "lat": 19.3967,
    "lon": -102.039001,
    "elevation": 5258
  },
  {
    "icao": "MMPR",
    "iata": "PVR",
    "name": "Puerto Vallarta International Airport",
    "city": "Puerto Vallarta",
    "country": "MX",
    "lat": 20.679913,
    "lon": -105.254391,
    "elevation": 23
  },
  {
    "icao": "MMPS",
    "iata": "PXM",
    "name": "Puerto Escondido International Airport",
    "city": "Puerto Escondido",
    "country": "MX",
    "lat": 15.876808,
    "lon": -97.0891,
    "elevation": 294
  },
  {
    "icao": "MMQT",
    "iata": "QRO",
    "name": "Querétaro Intercontinental Airport",
    "city": "Querétaro",
    "country": "MX",
    "lat": 20.6173,
    "lon": -100.185997,
    "elevation": 6296
  },
  {
    "icao": "MMRX",
    "iata": "REX",
    "name": "General Lucio Blanco International Airport",
    "city": "Reynosa",
    "country": "MX",
    "lat": 26.0089,
    "lon": -98.2285,
    "elevation": 139
  },
  {
    "icao": "MMSD",
    "iata": "SJD",
    "name": "Los Cabos International Airport",
    "city": "San José del Cabo",
    "country": "MX",
    "lat": 23.151919,
    "lon": -109.720731,
    "elevation": 374
  },
  {
    "icao": "MMSM",
    "iata": "NLU",
    "name": "General Felipe Ángeles International Airport",
    "city": "Mexico City",
    "country": "MX",
    "lat": 19.7357,
    "lon": -99.0257,
    "elevation": 7369
  },
  {
    "icao": "MMSP",
    "iata": "SLP",
    "name": "Ponciano Arriaga International Airport",
    "city": "San Luis Potosí",
    "country": "MX",
    "lat": 22.254299163800003,
    "lon": -100.930999756,
    "elevation": 6035
  },
  {
    "icao": "MMTC",
    "iata": "TRC",
    "name": "Francisco Sarabia Tinoco International Airport",
    "city": "Torreón",
    "country": "MX",
    "lat": 25.5683,
    "lon": -103.411003,
    "elevation": 3688
  },
  {
    "icao": "MMTG",
    "iata": "TGZ",
    "name": "Angel Albino Corzo International Airport",
    "city": "Tuxtla Gutiérrez",
    "country": "MX",
    "lat": 16.5636005402,
    "lon": -93.02249908450001,
    "elevation": 1499
  },
  {
    "icao": "MMTJ",
    "iata": "TIJ",
    "name": "General Abelardo L. Rodriguez International Airport",
    "city": "Tijuana",
    "country": "MX",
    "lat": 32.541043,
    "lon": -116.969976,
    "elevation": 489
  },
  {
    "icao": "MMTL",
    "iata": "TQO",
    "name": "Felipe Carrillo Puerto International Airport",
    "city": "Tulum",
    "country": "MX",
    "lat": 20.172098,
    "lon": -87.660272,
    "elevation": 66
  },
  {
    "icao": "MMTM",
    "iata": "TAM",
    "name": "General Francisco Javier Mina International Airport",
    "city": "Tampico",
    "country": "MX",
    "lat": 22.2964000702,
    "lon": -97.8658981323,
    "elevation": 80
  },
  {
    "icao": "MMTO",
    "iata": "TLC",
    "name": "Adolfo López Mateos International Airport",
    "city": "Toluca",
    "country": "MX",
    "lat": 19.3369,
    "lon": -99.56583,
    "elevation": 8466
  },
  {
    "icao": "MMTP",
    "iata": "TAP",
    "name": "Tapachula International Airport",
    "city": "Tapachula",
    "country": "MX",
    "lat": 14.794549,
    "lon": -92.369871,
    "elevation": 97
  },
  {
    "icao": "MMUN",
    "iata": "CUN",
    "name": "Cancún International Airport",
    "city": "Cancún",
    "country": "MX",
    "lat": 21.039444,
    "lon": -86.874304,
    "elevation": 22
  },
  {
    "icao": "MMVA",
    "iata": "VSA",
    "name": "Carlos Rovirosa Pérez International Airport",
    "city": "Villahermosa",
    "country": "MX",
    "lat": 17.997,
    "lon": -92.817398,
    "elevation": 46
  },
  {
    "icao": "MMVR",
    "iata": "VER",
    "name": "General Heriberto Jara International Airport",
    "city": "Veracruz",
    "country": "MX",
    "lat": 19.1459007263,
    "lon": -96.1873016357,
    "elevation": 90
  },
  {
    "icao": "MMZC",
    "iata": "ZCL",
    "name": "General Leobardo C. Ruiz International Airport",
    "city": "Zacatecas",
    "country": "MX",
    "lat": 22.8971,
    "lon": -102.686996,
    "elevation": 7141
  },
  {
    "icao": "MMZH",
    "iata": "ZIH",
    "name": "Ixtapa-Zihuatanejo International Airport",
    "city": "Ixtapa",
    "country": "MX",
    "lat": 17.601771,
    "lon": -101.460629,
    "elevation": 26
  },
  {
    "icao": "MMZO",
    "iata": "ZLO",
    "name": "Playa de Oro International Airport",
    "city": "Manzanillo",
    "country": "MX",
    "lat": 19.1448,
    "lon": -104.558998,
    "elevation": 30
  },
  {
    "icao": "MNBL",
    "iata": "BEF",
    "name": "Bluefields Airport",
    "city": "Bluefields",
    "country": "NI",
    "lat": 11.991,
    "lon": -83.774101,
    "elevation": 20
  },
  {
    "icao": "MNMG",
    "iata": "MGA",
    "name": "Augusto C. Sandino (Managua) International Airport",
    "city": "Managua",
    "country": "NI",
    "lat": 12.141500473022461,
    "lon": -86.16819763183594,
    "elevation": 194
  },
  {
    "icao": "MNPC",
    "iata": "PUZ",
    "name": "Puerto Cabezas Airport",
    "city": "Puerto Cabezas",
    "country": "NI",
    "lat": 14.047200202941895,
    "lon": -83.38670349121094,
    "elevation": 52
  },
  {
    "icao": "MPBO",
    "iata": "BOC",
    "name": "Bocas del Toro International Airport",
    "city": "Isla Colón",
    "country": "PA",
    "lat": 9.34085,
    "lon": -82.250801,
    "elevation": 10
  },
  {
    "icao": "MPCE",
    "iata": "CTD",
    "name": "Alonso Valderrama Airport",
    "city": "Chitré",
    "country": "PA",
    "lat": 7.98784,
    "lon": -80.409837,
    "elevation": 33
  },
  {
    "icao": "MPCH",
    "iata": "CHX",
    "name": "Changuinola Captain Manuel Niño International Airport",
    "city": "Changuinola",
    "country": "PA",
    "lat": 9.458962,
    "lon": -82.515062,
    "elevation": 19
  },
  {
    "icao": "MPDA",
    "iata": "DAV",
    "name": "Enrique Malek International Airport",
    "city": "David",
    "country": "PA",
    "lat": 8.391,
    "lon": -82.434998,
    "elevation": 89
  },
  {
    "icao": "MPEJ",
    "iata": "ONX",
    "name": "Enrique Adolfo Jimenez Airport",
    "city": "Colón",
    "country": "PA",
    "lat": 9.35664,
    "lon": -79.867401,
    "elevation": 25
  },
  {
    "icao": "MPMG",
    "iata": "PAC",
    "name": "Marcos A. Gelabert International Airport",
    "city": "Albrook",
    "country": "PA",
    "lat": 8.97334,
    "lon": -79.555603,
    "elevation": 31
  },
  {
    "icao": "MPSA",
    "iata": "SYP",
    "name": "Ruben Cantu Airport",
    "city": "Santiago",
    "country": "PA",
    "lat": 8.085599899291992,
    "lon": -80.94529724121094,
    "elevation": 272
  },
  {
    "icao": "MPTO",
    "iata": "PTY",
    "name": "Tocumen International Airport",
    "city": "Tocumen",
    "country": "PA",
    "lat": 9.07136,
    "lon": -79.383499,
    "elevation": 135
  },
  {
    "icao": "MRBA",
    "iata": "BAI",
    "name": "Buenos Aires Airport",
    "city": "Punta Arenas",
    "country": "CR",
    "lat": 9.163949,
    "lon": -83.330171,
    "elevation": 1214
  },
  {
    "icao": "MRBC",
    "iata": "BCL",
    "name": "Barra del Colorado Airport",
    "city": "Pococi",
    "country": "CR",
    "lat": 10.7687,
    "lon": -83.585602,
    "elevation": 3
  },
  {
    "icao": "MRCC",
    "iata": "OTR",
    "name": "Coto 47 Airport",
    "city": "Corredores",
    "country": "CR",
    "lat": 8.60156,
    "lon": -82.968754,
    "elevation": 26
  },
  {
    "icao": "MRGF",
    "iata": "GLF",
    "name": "Golfito Airport",
    "city": "Golfito",
    "country": "CR",
    "lat": 8.65401,
    "lon": -83.182198,
    "elevation": 49
  },
  {
    "icao": "MRGP",
    "iata": "GPL",
    "name": "Guapiles Airport",
    "city": "Pococi",
    "country": "CR",
    "lat": 10.2172002792,
    "lon": -83.79699707030001,
    "elevation": 883
  },
  {
    "icao": "MRLB",
    "iata": "LIR",
    "name": "Guanacaste Airport",
    "city": "Liberia",
    "country": "CR",
    "lat": 10.5933,
    "lon": -85.544403,
    "elevation": 270
  },
  {
    "icao": "MRLC",
    "iata": "LSL",
    "name": "Los Chiles Airport",
    "city": "Los Chiles",
    "country": "CR",
    "lat": 11.0353,
    "lon": -84.7061,
    "elevation": 131
  },
  {
    "icao": "MRLM",
    "iata": "LIO",
    "name": "Limon International Airport",
    "city": "Puerto Limon",
    "country": "CR",
    "lat": 9.95796012878418,
    "lon": -83.02200317382812,
    "elevation": 7
  },
  {
    "icao": "MRNS",
    "iata": "NOB",
    "name": "Nosara Airport",
    "city": "Nicoya",
    "country": "CR",
    "lat": 9.976490020750001,
    "lon": -85.65299987790002,
    "elevation": 33
  },
  {
    "icao": "MROC",
    "iata": "SJO",
    "name": "Juan Santamaría International Airport",
    "city": "San José (Alajuela)",
    "country": "CR",
    "lat": 9.99386,
    "lon": -84.208801,
    "elevation": 3021
  },
  {
    "icao": "MRPJ",
    "iata": "PJM",
    "name": "Puerto Jimenez Airport",
    "city": "Puerto Jimenez",
    "country": "CR",
    "lat": 8.533329963684082,
    "lon": -83.30000305175781,
    "elevation": 7
  },
  {
    "icao": "MRPM",
    "iata": "PMZ",
    "name": "Palmar Sur Airport",
    "city": "Palmar Sur",
    "country": "CR",
    "lat": 8.95103,
    "lon": -83.468597,
    "elevation": 49
  },
  {
    "icao": "MRPV",
    "iata": "SYQ",
    "name": "Tobías Bolaños International Airport",
    "city": "San Jose",
    "country": "CR",
    "lat": 9.95705,
    "lon": -84.139801,
    "elevation": 3287
  },
  {
    "icao": "MRQP",
    "iata": "XQP",
    "name": "Quepos Managua Airport",
    "city": "Quepos",
    "country": "CR",
    "lat": 9.44316,
    "lon": -84.129799,
    "elevation": 85
  },
  {
    "icao": "MRUP",
    "iata": "UPL",
    "name": "Upala Airport",
    "city": "Upala",
    "country": "CR",
    "lat": 10.8922,
    "lon": -85.016197,
    "elevation": 184
  },
  {
    "icao": "MSLP",
    "iata": "SAL",
    "name": "Monseñor Óscar Arnulfo Romero International Airport",
    "city": "San Salvador (San Luis Talpa)",
    "country": "SV",
    "lat": 13.4409,
    "lon": -89.055702,
    "elevation": 101
  },
  {
    "icao": "MSSS",
    "iata": "ILS",
    "name": "Ilopango International Airport",
    "city": "San Salvador",
    "country": "SV",
    "lat": 13.6995,
    "lon": -89.119904,
    "elevation": 2027
  },
  {
    "icao": "MTCA",
    "iata": "CYA",
    "name": "Antoine-Simon International Airport",
    "city": "Les Cayes",
    "country": "HT",
    "lat": 18.271099,
    "lon": -73.7883,
    "elevation": 203
  },
  {
    "icao": "MTCH",
    "iata": "CAP",
    "name": "Cap Haitien International Airport",
    "city": "Cap Haitien",
    "country": "HT",
    "lat": 19.726734,
    "lon": -72.199576,
    "elevation": 10
  },
  {
    "icao": "MTJA",
    "iata": "JAK",
    "name": "Jacmel Airport",
    "city": "Jacmel",
    "country": "HT",
    "lat": 18.2411,
    "lon": -72.518501,
    "elevation": 167
  },
  {
    "icao": "MTJE",
    "iata": "JEE",
    "name": "Jérémie Airport",
    "city": "Carrefour Sanon",
    "country": "HT",
    "lat": 18.663099,
    "lon": -74.170303,
    "elevation": 147
  },
  {
    "icao": "MTPP",
    "iata": "PAP",
    "name": "Toussaint Louverture International Airport",
    "city": "Port-au-Prince",
    "country": "HT",
    "lat": 18.580023,
    "lon": -72.292596,
    "elevation": 122
  },
  {
    "icao": "MTPX",
    "iata": "PAX",
    "name": "Port-de-Paix Airport",
    "city": "Port-de-Paix",
    "country": "HT",
    "lat": 19.934045,
    "lon": -72.84801,
    "elevation": 9
  },
  {
    "icao": "MUBA",
    "iata": "BCA",
    "name": "Gustavo Rizo Airport",
    "city": "Baracoa",
    "country": "CU",
    "lat": 20.365299224853516,
    "lon": -74.5062026977539,
    "elevation": 26
  },
  {
    "icao": "MUBY",
    "iata": "BYM",
    "name": "Carlos Manuel de Cespedes Airport",
    "city": "Bayamo",
    "country": "CU",
    "lat": 20.3964,
    "lon": -76.621399,
    "elevation": 203
  },
  {
    "icao": "MUCA",
    "iata": "AVI",
    "name": "Máximo Gómez Airport",
    "city": "Ciro Redondo",
    "country": "CU",
    "lat": 22.0271,
    "lon": -78.789597,
    "elevation": 335
  },
  {
    "icao": "MUCC",
    "iata": "CCC",
    "name": "Jardines Del Rey Airport",
    "city": "Cayo Coco",
    "country": "CU",
    "lat": 22.461000442499998,
    "lon": -78.32839965820001,
    "elevation": 13
  },
  {
    "icao": "MUCF",
    "iata": "CFG",
    "name": "Jaime Gonzalez Airport",
    "city": "Cienfuegos",
    "country": "CU",
    "lat": 22.149999618530273,
    "lon": -80.41419982910156,
    "elevation": 102
  },
  {
    "icao": "MUCL",
    "iata": "CYO",
    "name": "Vilo Acuña International Airport",
    "city": "Cayo Largo del Sur",
    "country": "CU",
    "lat": 21.6165008545,
    "lon": -81.5459976196,
    "elevation": 10
  },
  {
    "icao": "MUCM",
    "iata": "CMW",
    "name": "Ignacio Agramonte International Airport",
    "city": "Camaguey",
    "country": "CU",
    "lat": 21.420299530029297,
    "lon": -77.84750366210938,
    "elevation": 413
  },
  {
    "icao": "MUCU",
    "iata": "SCU",
    "name": "Antonio Maceo International Airport",
    "city": "Santiago",
    "country": "CU",
    "lat": 19.96980094909668,
    "lon": -75.83540344238281,
    "elevation": 249
  },
  {
    "icao": "MUGM",
    "iata": "NBW",
    "name": "Leeward Point Field",
    "city": "Guantanamo Bay Naval Station",
    "country": "CU",
    "lat": 19.9065,
    "lon": -75.2071,
    "elevation": 56
  },
  {
    "icao": "MUGT",
    "iata": "GAO",
    "name": "Mariana Grajales Airport",
    "city": "Guantánamo",
    "country": "CU",
    "lat": 20.0853,
    "lon": -75.158302,
    "elevation": 56
  },
  {
    "icao": "MUHA",
    "iata": "HAV",
    "name": "José Martí International Airport",
    "city": "Havana",
    "country": "CU",
    "lat": 22.989200592041016,
    "lon": -82.40910339355469,
    "elevation": 210
  },
  {
    "icao": "MUHG",
    "iata": "HOG",
    "name": "Frank Pais International Airport",
    "city": "Holguin",
    "country": "CU",
    "lat": 20.785600662231445,
    "lon": -76.31510162353516,
    "elevation": 361
  },
  {
    "icao": "MUKW",
    "iata": "VRO",
    "name": "Kawama Airport",
    "city": "Santa Marta",
    "country": "CU",
    "lat": 23.124001,
    "lon": -81.301598,
    "elevation": 16
  },
  {
    "icao": "MULM",
    "iata": "LCL",
    "name": "La Coloma Airport",
    "city": "Pinar del Rio",
    "country": "CU",
    "lat": 22.3361,
    "lon": -83.641899,
    "elevation": 131
  },
  {
    "icao": "MUMO",
    "iata": "MOA",
    "name": "Orestes Acosta Airport",
    "city": "Moa",
    "country": "CU",
    "lat": 20.653900146484375,
    "lon": -74.92220306396484,
    "elevation": 16
  },
  {
    "icao": "MUMZ",
    "iata": "MZO",
    "name": "Sierra Maestra International Airport",
    "city": "Manzanillo",
    "country": "CU",
    "lat": 20.288605,
    "lon": -77.087545,
    "elevation": 112
  },
  {
    "icao": "MUNG",
    "iata": "GER",
    "name": "Rafael Cabrera Airport",
    "city": "Nueva Gerona",
    "country": "CU",
    "lat": 21.834699630737305,
    "lon": -82.78379821777344,
    "elevation": 79
  },
  {
    "icao": "MUPB",
    "iata": "UPB",
    "name": "Playa Baracoa Airport",
    "city": "Havana",
    "country": "CU",
    "lat": 23.032801,
    "lon": -82.579399,
    "elevation": 102
  },
  {
    "icao": "MUSC",
    "iata": "SNU",
    "name": "Abel Santamaria Airport",
    "city": "Santa Clara",
    "country": "CU",
    "lat": 22.492201,
    "lon": -79.943604,
    "elevation": 338
  },
  {
    "icao": "MUSJ",
    "iata": "SNJ",
    "name": "San Julián Air Base",
    "city": "Sandino",
    "country": "CU",
    "lat": 22.100525,
    "lon": -84.157376,
    "elevation": 98
  },
  {
    "icao": "MUSN",
    "iata": "SZJ",
    "name": "Siguanea Airport",
    "city": "Isla de la Juventud",
    "country": "CU",
    "lat": 21.6425,
    "lon": -82.955101,
    "elevation": 39
  },
  {
    "icao": "MUTD",
    "iata": "TND",
    "name": "Alberto Delgado Airport",
    "city": "Trinidad",
    "country": "CU",
    "lat": 21.7883,
    "lon": -79.9972,
    "elevation": 125
  },
  {
    "icao": "MUVR",
    "iata": "VRA",
    "name": "Juan Gualberto Gomez International Airport",
    "city": "Matanzas",
    "country": "CU",
    "lat": 23.034401,
    "lon": -81.435303,
    "elevation": 210
  },
  {
    "icao": "MUVT",
    "iata": "VTU",
    "name": "Hermanos Ameijeiras Airport",
    "city": "Las Tunas",
    "country": "CU",
    "lat": 20.9876,
    "lon": -76.935799,
    "elevation": 328
  },
  {
    "icao": "MWCB",
    "iata": "CYB",
    "name": "Charles Kirkconnell International Airport",
    "city": "West End",
    "country": "KY",
    "lat": 19.687,
    "lon": -79.882797,
    "elevation": 8
  },
  {
    "icao": "MWCL",
    "iata": "LYB",
    "name": "Edward Bodden Little Cayman Airfield",
    "city": "Blossom Village",
    "country": "KY",
    "lat": 19.660161,
    "lon": -80.088826,
    "elevation": 3
  },
  {
    "icao": "MWCR",
    "iata": "GCM",
    "name": "Owen Roberts International Airport",
    "city": "George Town",
    "country": "KY",
    "lat": 19.292801,
    "lon": -81.357697,
    "elevation": 8
  },
  {
    "icao": "MYAB",
    "iata": "MAY",
    "name": "Clarence A. Bain Airport",
    "city": "Mangrove Cay",
    "country": "BS",
    "lat": 24.287701,
    "lon": -77.684601,
    "elevation": 19
  },
  {
    "icao": "MYAF",
    "iata": "ASD",
    "name": "Andros Town Airport",
    "city": "Andros Town",
    "country": "BS",
    "lat": 24.697901,
    "lon": -77.795601,
    "elevation": 5
  },
  {
    "icao": "MYAK",
    "iata": "TZN",
    "name": "Congo Town Airport",
    "city": "Andros",
    "country": "BS",
    "lat": 24.158701,
    "lon": -77.589798,
    "elevation": 15
  },
  {
    "icao": "MYAM",
    "iata": "MHH",
    "name": "Leonard M Thompson International Airport",
    "city": "Marsh Harbour",
    "country": "BS",
    "lat": 26.510711,
    "lon": -77.084262,
    "elevation": 6
  },
  {
    "icao": "MYAN",
    "iata": "SAQ",
    "name": "San Andros Airport",
    "city": "Andros Island",
    "country": "BS",
    "lat": 25.053800582885742,
    "lon": -78.04900360107422,
    "elevation": 5
  },
  {
    "icao": "MYAP",
    "iata": "AXP",
    "name": "Spring Point Airport",
    "city": "Spring Point",
    "country": "BS",
    "lat": 22.441799,
    "lon": -73.970901,
    "elevation": 11
  },
  {
    "icao": "MYAT",
    "iata": "TCB",
    "name": "Treasure Cay Airport",
    "city": "Treasure Cay",
    "country": "BS",
    "lat": 26.745300293,
    "lon": -77.3912963867,
    "elevation": 8
  },
  {
    "icao": "MYBC",
    "iata": "CCZ",
    "name": "Chub Cay Airport",
    "city": "Chub Cay",
    "country": "BS",
    "lat": 25.417101,
    "lon": -77.880898,
    "elevation": 5
  },
  {
    "icao": "MYBG",
    "iata": "GHC",
    "name": "Great Harbour Cay Airport",
    "city": "Bullocks Harbour",
    "country": "BS",
    "lat": 25.7383,
    "lon": -77.840103,
    "elevation": 18
  },
  {
    "icao": "MYBS",
    "iata": "BIM",
    "name": "South Bimini Airport",
    "city": "South Bimini",
    "country": "BS",
    "lat": 25.6998996735,
    "lon": -79.2647018433,
    "elevation": 10
  },
  {
    "icao": "MYCA",
    "iata": "ATC",
    "name": "Arthur's Town Airport",
    "city": "Arthur's Town",
    "country": "BS",
    "lat": 24.6294,
    "lon": -75.673797,
    "elevation": 18
  },
  {
    "icao": "MYCB",
    "iata": "TBI",
    "name": "New Bight Airport",
    "city": "Cat Island",
    "country": "BS",
    "lat": 24.3153,
    "lon": -75.452301,
    "elevation": 5
  },
  {
    "icao": "MYCI",
    "iata": "CRI",
    "name": "Colonel Hill Airport",
    "city": "Colonel Hill",
    "country": "BS",
    "lat": 22.7456,
    "lon": -74.182404,
    "elevation": 5
  },
  {
    "icao": "MYEF",
    "iata": "GGT",
    "name": "Exuma International Airport",
    "city": "Moss Town",
    "country": "BS",
    "lat": 23.562599,
    "lon": -75.877998,
    "elevation": 9
  },
  {
    "icao": "MYEH",
    "iata": "ELH",
    "name": "North Eleuthera Airport",
    "city": "North Eleuthera",
    "country": "BS",
    "lat": 25.474899292,
    "lon": -76.6835021973,
    "elevation": 13
  },
  {
    "icao": "MYEM",
    "iata": "GHB",
    "name": "Governor's Harbour Airport",
    "city": "Governor's Harbour",
    "country": "BS",
    "lat": 25.2847,
    "lon": -76.331001,
    "elevation": 26
  },
  {
    "icao": "MYEN",
    "iata": "NMC",
    "name": "Normans Cay Airport",
    "city": "Normans Cay",
    "country": "BS",
    "lat": 24.594299,
    "lon": -76.820198,
    "elevation": 8
  },
  {
    "icao": "MYER",
    "iata": "RSD",
    "name": "Rock Sound Airport",
    "city": "Rock Sound",
    "country": "BS",
    "lat": 24.8950787333,
    "lon": -76.1768817902,
    "elevation": 10
  },
  {
    "icao": "MYES",
    "iata": "TYM",
    "name": "Staniel Cay Airport",
    "city": "Staniel Cay",
    "country": "BS",
    "lat": 24.1691,
    "lon": -76.439102,
    "elevation": 5
  },
  {
    "icao": "MYGF",
    "iata": "FPO",
    "name": "Grand Bahama International Airport",
    "city": "Freeport",
    "country": "BS",
    "lat": 26.5587005615,
    "lon": -78.695602417,
    "elevation": 7
  },
  {
    "icao": "MYIG",
    "iata": "IGA",
    "name": "Inagua Airport",
    "city": "Matthew Town",
    "country": "BS",
    "lat": 20.975,
    "lon": -73.666901,
    "elevation": 8
  },
  {
    "icao": "MYLD",
    "iata": "LGI",
    "name": "Deadman's Cay Airport",
    "city": "Deadman's Cay",
    "country": "BS",
    "lat": 23.1790008545,
    "lon": -75.09359741210001,
    "elevation": 9
  },
  {
    "icao": "MYLS",
    "iata": "SML",
    "name": "Stella Maris Airport",
    "city": "Stella Maris",
    "country": "BS",
    "lat": 23.582317,
    "lon": -75.268621,
    "elevation": 10
  },
  {
    "icao": "MYMM",
    "iata": "MYG",
    "name": "Mayaguana Airport",
    "city": "Abraham Bay Settlement",
    "country": "BS",
    "lat": 22.379499,
    "lon": -73.013494,
    "elevation": 11
  },
  {
    "icao": "MYNN",
    "iata": "NAS",
    "name": "Lynden Pindling International Airport",
    "city": "Nassau",
    "country": "BS",
    "lat": 25.039,
    "lon": -77.466202,
    "elevation": 16
  },
  {
    "icao": "MYRD",
    "iata": "DCT",
    "name": "Duncan Town Airport",
    "city": "Duncan Town",
    "country": "BS",
    "lat": 22.181801,
    "lon": -75.7295,
    "elevation": 6
  },
  {
    "icao": "MYSM",
    "iata": "ZSA",
    "name": "San Salvador Airport",
    "city": "San Salvador",
    "country": "BS",
    "lat": 24.063299,
    "lon": -74.524002,
    "elevation": 24
  },
  {
    "icao": "MZBZ",
    "iata": "BZE",
    "name": "Philip S. W. Goldson International Airport",
    "city": "Belize City",
    "country": "BZ",
    "lat": 17.539951,
    "lon": -88.303556,
    "elevation": 15
  },
  {
    "icao": "MZPL",
    "iata": "PLJ",
    "name": "Placencia Airport",
    "city": "Placencia",
    "country": "BZ",
    "lat": 16.536957,
    "lon": -88.361511,
    "elevation": 3
  },
  {
    "icao": "NCRG",
    "iata": "RAR",
    "name": "Rarotonga International Airport",
    "city": "Avarua",
    "country": "CK",
    "lat": -21.2027,
    "lon": -159.806,
    "elevation": 19
  },
  {
    "icao": "NFFN",
    "iata": "NAN",
    "name": "Nadi International Airport",
    "city": "Nadi",
    "country": "FJ",
    "lat": -17.755399703979492,
    "lon": 177.4429931640625,
    "elevation": 59
  },
  {
    "icao": "NFNA",
    "iata": "SUV",
    "name": "Nausori International Airport",
    "city": "Nausori",
    "country": "FJ",
    "lat": -18.04330062866211,
    "lon": 178.5590057373047,
    "elevation": 17
  },
  {
    "icao": "NFNL",
    "iata": "LBS",
    "name": "Labasa Airport",
    "city": "Labasa",
    "country": "FJ",
    "lat": -16.4667,
    "lon": 179.339996,
    "elevation": 44
  },
  {
    "icao": "NFTF",
    "iata": "TBU",
    "name": "Fua'amotu International Airport",
    "city": "Nuku'alofa",
    "country": "TO",
    "lat": -21.241199493408203,
    "lon": -175.14999389648438,
    "elevation": 126
  },
  {
    "icao": "NFTL",
    "iata": "HPA",
    "name": "Lifuka Island Airport",
    "city": "Lifuka",
    "country": "TO",
    "lat": -19.777000427246094,
    "lon": -174.34100341796875,
    "elevation": 31
  },
  {
    "icao": "NFTV",
    "iata": "VAV",
    "name": "Vava'u International Airport",
    "city": "Vava'u Island",
    "country": "TO",
    "lat": -18.58530044555664,
    "lon": -173.96200561523438,
    "elevation": 236
  },
  {
    "icao": "NGFU",
    "iata": "FUN",
    "name": "Funafuti International Airport",
    "city": "Funafuti",
    "country": "TV",
    "lat": -8.525,
    "lon": 179.195999,
    "elevation": 9
  },
  {
    "icao": "NGTA",
    "iata": "TRW",
    "name": "Bonriki International Airport",
    "city": "Tarawa",
    "country": "KI",
    "lat": 1.38164,
    "lon": 173.147003,
    "elevation": 9
  },
  {
    "icao": "NGTE",
    "iata": "TBF",
    "name": "Tabiteuea North Airport",
    "city": "",
    "country": "KI",
    "lat": -1.22447,
    "lon": 174.776001,
    "elevation": 7
  },
  {
    "icao": "NIUE",
    "iata": "IUE",
    "name": "Niue International Airport",
    "city": "Alofi",
    "country": "NU",
    "lat": -19.079030990600586,
    "lon": -169.92559814453125,
    "elevation": 209
  },
  {
    "icao": "ZPNL",
    "iata": "NLH",
    "name": "Ninglang Luguhu Airport",
    "city": "Ninglang",
    "country": "CN",
    "lat": 27.5403,
    "lon": 100.7593,
    "elevation": 10804
  },
  {
    "icao": "NLWW",
    "iata": "WLS",
    "name": "Hihifo Airport",
    "city": "Wallis Island",
    "country": "WF",
    "lat": -13.2383003235,
    "lon": -176.199005127,
    "elevation": 79
  },
  {
    "icao": "VNPR",
    "iata": "PHH",
    "name": "Pokhara International Airport",
    "city": "Pokhara",
    "country": "NP",
    "lat": 28.1838,
    "lon": 84.0147,
    "elevation": 2595
  },
  {
    "icao": "NSFA",
    "iata": "APW",
    "name": "Faleolo International Airport",
    "city": "Apia",
    "country": "WS",
    "lat": -13.829999923706055,
    "lon": -172.00799560546875,
    "elevation": 58
  },
  {
    "icao": "NSTU",
    "iata": "PPG",
    "name": "Pago Pago International Airport",
    "city": "Pago Pago",
    "country": "AS",
    "lat": -14.331,
    "lon": -170.710007,
    "elevation": 32
  },
  {
    "icao": "NTAA",
    "iata": "PPT",
    "name": "Faa'a International Airport",
    "city": "Papeete",
    "country": "PF",
    "lat": -17.553699,
    "lon": -149.606995,
    "elevation": 5
  },
  {
    "icao": "NTAR",
    "iata": "RUR",
    "name": "Rurutu Airport",
    "city": "",
    "country": "PF",
    "lat": -22.434099197387695,
    "lon": -151.36099243164062,
    "elevation": 18
  },
  {
    "icao": "NTAT",
    "iata": "TUB",
    "name": "Tubuai Airport",
    "city": "",
    "country": "PF",
    "lat": -23.365400314331055,
    "lon": -149.5240020751953,
    "elevation": 7
  },
  {
    "icao": "NTGA",
    "iata": "AAA",
    "name": "Anaa Airport",
    "city": "Anaa",
    "country": "PF",
    "lat": -17.3526,
    "lon": -145.509995,
    "elevation": 10
  },
  {
    "icao": "NTGB",
    "iata": "FGU",
    "name": "Fangatau Airport",
    "city": "Fangatau",
    "country": "PF",
    "lat": -15.820044,
    "lon": -140.888071,
    "elevation": 9
  },
  {
    "icao": "NTGC",
    "iata": "TIH",
    "name": "Tikehau Airport",
    "city": "Tuherahera",
    "country": "PF",
    "lat": -15.1196,
    "lon": -148.231003,
    "elevation": 6
  },
  {
    "icao": "NTGE",
    "iata": "REA",
    "name": "Reao Airport",
    "city": "Reao",
    "country": "PF",
    "lat": -18.46652,
    "lon": -136.43855,
    "elevation": 12
  },
  {
    "icao": "NTGF",
    "iata": "FAV",
    "name": "Fakarava Airport",
    "city": "",
    "country": "PF",
    "lat": -16.054100036621094,
    "lon": -145.65699768066406,
    "elevation": 13
  },
  {
    "icao": "NTGI",
    "iata": "XMH",
    "name": "Manihi Airport",
    "city": "",
    "country": "PF",
    "lat": -14.436800003051758,
    "lon": -146.07000732421875,
    "elevation": 14
  },
  {
    "icao": "NTGJ",
    "iata": "GMR",
    "name": "Totegegie Airport",
    "city": "",
    "country": "PF",
    "lat": -23.07990074157715,
    "lon": -134.88999938964844,
    "elevation": 7
  },
  {
    "icao": "NTGK",
    "iata": "KKR",
    "name": "Kaukura Airport",
    "city": "Raitahiti",
    "country": "PF",
    "lat": -15.6633,
    "lon": -146.884995,
    "elevation": 11
  },
  {
    "icao": "NTGM",
    "iata": "MKP",
    "name": "Makemo Airport",
    "city": "Makemo",
    "country": "PF",
    "lat": -16.5839,
    "lon": -143.658005,
    "elevation": 3
  },
  {
    "icao": "NTGT",
    "iata": "TKP",
    "name": "Takapoto Airport",
    "city": "",
    "country": "PF",
    "lat": -14.709500312805176,
    "lon": -145.24600219726562,
    "elevation": 12
  },
  {
    "icao": "NTGU",
    "iata": "AXR",
    "name": "Arutua Airport",
    "city": "",
    "country": "PF",
    "lat": -15.248299598693848,
    "lon": -146.61700439453125,
    "elevation": 9
  },
  {
    "icao": "NTGV",
    "iata": "MVT",
    "name": "Mataiva Airport",
    "city": "",
    "country": "PF",
    "lat": -14.8681001663208,
    "lon": -148.7169952392578,
    "elevation": 11
  },
  {
    "icao": "NTHE",
    "iata": "AHE",
    "name": "Ahe Airport",
    "city": "Ahe Atoll",
    "country": "PF",
    "lat": -14.428099632263184,
    "lon": -146.2570037841797,
    "elevation": 11
  },
  {
    "icao": "NTKR",
    "iata": "TKX",
    "name": "Takaroa Airport",
    "city": "",
    "country": "PF",
    "lat": -14.45580005645752,
    "lon": -145.02499389648438,
    "elevation": 13
  },
  {
    "icao": "NTMD",
    "iata": "NHV",
    "name": "Nuku Hiva Airport",
    "city": "Nuku Hiva",
    "country": "PF",
    "lat": -8.7956,
    "lon": -140.229004,
    "elevation": 220
  },
  {
    "icao": "NTMN",
    "iata": "AUQ",
    "name": "Hiva Oa-Atuona Airport",
    "city": "Hiva Oa Island",
    "country": "PF",
    "lat": -9.76879024506,
    "lon": -139.011001587,
    "elevation": 1481
  },
  {
    "icao": "NTTB",
    "iata": "BOB",
    "name": "Bora Bora Airport",
    "city": "Motu Mute",
    "country": "PF",
    "lat": -16.444400787353516,
    "lon": -151.75100708007812,
    "elevation": 10
  },
  {
    "icao": "NTTG",
    "iata": "RGI",
    "name": "Rangiroa Airport",
    "city": "",
    "country": "PF",
    "lat": -14.954299926757812,
    "lon": -147.66099548339844,
    "elevation": 10
  },
  {
    "icao": "NTTH",
    "iata": "HUH",
    "name": "Huahine-Fare Airport",
    "city": "Fare",
    "country": "PF",
    "lat": -16.687084,
    "lon": -151.021593,
    "elevation": 7
  },
  {
    "icao": "NTTM",
    "iata": "MOZ",
    "name": "Moorea Temae Airport",
    "city": "Moorea-Maiao",
    "country": "PF",
    "lat": -17.48979,
    "lon": -149.761777,
    "elevation": 9
  },
  {
    "icao": "NTTO",
    "iata": "HOI",
    "name": "Hao Airport",
    "city": "Otepa",
    "country": "PF",
    "lat": -18.0748,
    "lon": -140.945999,
    "elevation": 10
  },
  {
    "icao": "NTTP",
    "iata": "MAU",
    "name": "Maupiti Airport",
    "city": "",
    "country": "PF",
    "lat": -16.42650032043457,
    "lon": -152.24400329589844,
    "elevation": 15
  },
  {
    "icao": "NTTR",
    "iata": "RFP",
    "name": "Raiatea Airport",
    "city": "Uturoa",
    "country": "PF",
    "lat": -16.7229,
    "lon": -151.466003,
    "elevation": 3
  },
  {
    "icao": "NVSQ",
    "iata": "ZGU",
    "name": "Gaua Island Airport",
    "city": "Gaua Island",
    "country": "VU",
    "lat": -14.2181,
    "lon": 167.587006,
    "elevation": 100
  },
  {
    "icao": "NVSS",
    "iata": "SON",
    "name": "Santo Pekoa International Airport",
    "city": "Luganville",
    "country": "VU",
    "lat": -15.505000114399998,
    "lon": 167.220001221,
    "elevation": 184
  },
  {
    "icao": "NVVV",
    "iata": "VLI",
    "name": "Bauerfield International Airport",
    "city": "Port Vila",
    "country": "VU",
    "lat": -17.699301,
    "lon": 168.320007,
    "elevation": 70
  },
  {
    "icao": "NVVW",
    "iata": "TAH",
    "name": "Whitegrass Airport",
    "city": "Tanna Island",
    "country": "VU",
    "lat": -19.455099,
    "lon": 169.223999,
    "elevation": 19
  },
  {
    "icao": "NWWA",
    "iata": "TGJ",
    "name": "Tiga Airport",
    "city": "Tiga",
    "country": "NC",
    "lat": -21.096407,
    "lon": 167.80379,
    "elevation": 128
  },
  {
    "icao": "NWWD",
    "iata": "KNQ",
    "name": "Koné Airport",
    "city": "Koné",
    "country": "NC",
    "lat": -21.053551,
    "lon": 164.838768,
    "elevation": 23
  },
  {
    "icao": "NWWE",
    "iata": "ILP",
    "name": "Île des Pins Airport",
    "city": "Île des Pins",
    "country": "NC",
    "lat": -22.588899612426758,
    "lon": 167.45599365234375,
    "elevation": 315
  },
  {
    "icao": "NWWL",
    "iata": "LIF",
    "name": "Lifou Airport",
    "city": "Lifou",
    "country": "NC",
    "lat": -20.774563,
    "lon": 167.239328,
    "elevation": 92
  },
  {
    "icao": "NWWM",
    "iata": "GEA",
    "name": "Nouméa Magenta Airport",
    "city": "Nouméa",
    "country": "NC",
    "lat": -22.25812,
    "lon": 166.472783,
    "elevation": 10
  },
  {
    "icao": "NWWR",
    "iata": "MEE",
    "name": "Maré Airport",
    "city": "Maré",
    "country": "NC",
    "lat": -21.482438,
    "lon": 168.038465,
    "elevation": 141
  },
  {
    "icao": "NWWU",
    "iata": "TOU",
    "name": "Touho Airport",
    "city": "Touho",
    "country": "NC",
    "lat": -20.790127,
    "lon": 165.259524,
    "elevation": 10
  },
  {
    "icao": "NWWV",
    "iata": "UVE",
    "name": "Ouvéa Airport",
    "city": "Ouvéa",
    "country": "NC",
    "lat": -20.640932,
    "lon": 166.573024,
    "elevation": 23
  },
  {
    "icao": "NWWW",
    "iata": "NOU",
    "name": "La Tontouta International Airport",
    "city": "Nouméa (La Tontouta)",
    "country": "NC",
    "lat": -22.014601,
    "lon": 166.212997,
    "elevation": 52
  },
  {
    "icao": "NZAA",
    "iata": "AKL",
    "name": "Auckland International Airport",
    "city": "Auckland",
    "country": "NZ",
    "lat": -37.01199,
    "lon": 174.786331,
    "elevation": 23
  },
  {
    "icao": "NZAP",
    "iata": "TUO",
    "name": "Taupo Airport",
    "city": "Taupo",
    "country": "NZ",
    "lat": -38.73970031738281,
    "lon": 176.08399963378906,
    "elevation": 1335
  },
  {
    "icao": "NZAR",
    "iata": "AMZ",
    "name": "Ardmore Airport",
    "city": "Manurewa",
    "country": "NZ",
    "lat": -37.029701232910156,
    "lon": 174.97300720214844,
    "elevation": 111
  },
  {
    "icao": "NZCH",
    "iata": "CHC",
    "name": "Christchurch International Airport",
    "city": "Christchurch",
    "country": "NZ",
    "lat": -43.489029,
    "lon": 172.532065,
    "elevation": 123
  },
  {
    "icao": "NZCI",
    "iata": "CHT",
    "name": "Chatham Islands / Tuuta Airport",
    "city": "Te One",
    "country": "NZ",
    "lat": -43.81189,
    "lon": -176.46514,
    "elevation": 43
  },
  {
    "icao": "NZDN",
    "iata": "DUD",
    "name": "Dunedin International Airport",
    "city": "Dunedin",
    "country": "NZ",
    "lat": -45.928101,
    "lon": 170.197998,
    "elevation": 4
  },
  {
    "icao": "NZGS",
    "iata": "GIS",
    "name": "Gisborne Airport",
    "city": "Gisborne",
    "country": "NZ",
    "lat": -38.6633,
    "lon": 177.977997,
    "elevation": 15
  },
  {
    "icao": "NZGT",
    "iata": "GTN",
    "name": "Glentanner Airport",
    "city": "Glentanner Station",
    "country": "NZ",
    "lat": -43.906700134277344,
    "lon": 170.1280059814453,
    "elevation": 1824
  },
  {
    "icao": "NZHK",
    "iata": "HKK",
    "name": "Hokitika Airfield",
    "city": "",
    "country": "NZ",
    "lat": -42.713600158691406,
    "lon": 170.98500061035156,
    "elevation": 146
  },
  {
    "icao": "NZHN",
    "iata": "HLZ",
    "name": "Hamilton International Airport",
    "city": "Hamilton",
    "country": "NZ",
    "lat": -37.8666992188,
    "lon": 175.332000732,
    "elevation": 172
  },
  {
    "icao": "NZKK",
    "iata": "KKE",
    "name": "Kerikeri Airport",
    "city": "Kerikeri",
    "country": "NZ",
    "lat": -35.259148,
    "lon": 173.913317,
    "elevation": 492
  },
  {
    "icao": "NZKT",
    "iata": "KAT",
    "name": "Kaitaia Airport",
    "city": "Awanui",
    "country": "NZ",
    "lat": -35.069837,
    "lon": 173.287053,
    "elevation": 270
  },
  {
    "icao": "NZLX",
    "iata": "ALR",
    "name": "Alexandra Aerodrome",
    "city": "Alexandra",
    "country": "NZ",
    "lat": -45.210495,
    "lon": 169.371113,
    "elevation": 752
  },
  {
    "icao": "NZMC",
    "iata": "MON",
    "name": "Mount Cook Airport",
    "city": "",
    "country": "NZ",
    "lat": -43.764999,
    "lon": 170.132996,
    "elevation": 2153
  },
  {
    "icao": "NZMO",
    "iata": "TEU",
    "name": "Manapouri Airport",
    "city": "",
    "country": "NZ",
    "lat": -45.5331,
    "lon": 167.649994,
    "elevation": 687
  },
  {
    "icao": "NZMS",
    "iata": "MRO",
    "name": "Hood Airport",
    "city": "Masterton",
    "country": "NZ",
    "lat": -40.974634,
    "lon": 175.63454,
    "elevation": 364
  },
  {
    "icao": "NZNP",
    "iata": "NPL",
    "name": "New Plymouth Airport",
    "city": "New Plymouth",
    "country": "NZ",
    "lat": -39.00859832763672,
    "lon": 174.1790008544922,
    "elevation": 97
  },
  {
    "icao": "NZNR",
    "iata": "NPE",
    "name": "Hawke's Bay Airport",
    "city": "Napier",
    "country": "NZ",
    "lat": -39.465801,
    "lon": 176.869995,
    "elevation": 6
  },
  {
    "icao": "NZNS",
    "iata": "NSN",
    "name": "Nelson Airport",
    "city": "Nelson",
    "country": "NZ",
    "lat": -41.298302,
    "lon": 173.220993,
    "elevation": 17
  },
  {
    "icao": "NZNV",
    "iata": "IVC",
    "name": "Invercargill Airport",
    "city": "Invercargill",
    "country": "NZ",
    "lat": -46.41239929199219,
    "lon": 168.31300354003906,
    "elevation": 5
  },
  {
    "icao": "NZOH",
    "iata": "OHA",
    "name": "RNZAF Base Ohakea",
    "city": "",
    "country": "NZ",
    "lat": -40.20600128173828,
    "lon": 175.38800048828125,
    "elevation": 164
  },
  {
    "icao": "NZOU",
    "iata": "OAM",
    "name": "Oamaru Airport",
    "city": "",
    "country": "NZ",
    "lat": -44.970001,
    "lon": 171.082001,
    "elevation": 99
  },
  {
    "icao": "NZPM",
    "iata": "PMR",
    "name": "Palmerston North Airport",
    "city": "Palmerston North",
    "country": "NZ",
    "lat": -40.320599,
    "lon": 175.617004,
    "elevation": 151
  },
  {
    "icao": "NZPP",
    "iata": "PPQ",
    "name": "Paraparaumu Airport",
    "city": "",
    "country": "NZ",
    "lat": -40.904701232910156,
    "lon": 174.98899841308594,
    "elevation": 22
  },
  {
    "icao": "NZQN",
    "iata": "ZQN",
    "name": "Queenstown International Airport",
    "city": "Queenstown",
    "country": "NZ",
    "lat": -45.021099,
    "lon": 168.738998,
    "elevation": 1171
  },
  {
    "icao": "NZRO",
    "iata": "ROT",
    "name": "Rotorua Regional Airport",
    "city": "Rotorua",
    "country": "NZ",
    "lat": -38.1092,
    "lon": 176.317001,
    "elevation": 935
  },
  {
    "icao": "NZTG",
    "iata": "TRG",
    "name": "Tauranga Airport",
    "city": "Tauranga",
    "country": "NZ",
    "lat": -37.67190170288086,
    "lon": 176.1959991455078,
    "elevation": 13
  },
  {
    "icao": "NZTU",
    "iata": "TIU",
    "name": "Timaru Airport",
    "city": "",
    "country": "NZ",
    "lat": -44.302799224853516,
    "lon": 171.22500610351562,
    "elevation": 89
  },
  {
    "icao": "NZUK",
    "iata": "TWZ",
    "name": "Pukaki Airport",
    "city": "Twitzel",
    "country": "NZ",
    "lat": -44.2350006104,
    "lon": 170.117996216,
    "elevation": 1575
  },
  {
    "icao": "NZWB",
    "iata": "BHE",
    "name": "Woodbourne Airport",
    "city": "Blenheim",
    "country": "NZ",
    "lat": -41.5182991027832,
    "lon": 173.8699951171875,
    "elevation": 109
  },
  {
    "icao": "NZWF",
    "iata": "WKA",
    "name": "Wanaka Airport",
    "city": "Wanaka",
    "country": "NZ",
    "lat": -44.722954,
    "lon": 169.248419,
    "elevation": 1142
  },
  {
    "icao": "NZWK",
    "iata": "WHK",
    "name": "Whakatane Airport",
    "city": "",
    "country": "NZ",
    "lat": -37.92060089111328,
    "lon": 176.91400146484375,
    "elevation": 20
  },
  {
    "icao": "NZWN",
    "iata": "WLG",
    "name": "Wellington International Airport",
    "city": "Wellington",
    "country": "NZ",
    "lat": -41.327202,
    "lon": 174.804993,
    "elevation": 41
  },
  {
    "icao": "NZWO",
    "iata": "WIR",
    "name": "Wairoa Airport",
    "city": "Wairoa",
    "country": "NZ",
    "lat": -39.012118,
    "lon": 177.404395,
    "elevation": 42
  },
  {
    "icao": "NZWR",
    "iata": "WRE",
    "name": "Whangarei Airport",
    "city": "Whangarei",
    "country": "NZ",
    "lat": -35.769253,
    "lon": 174.363713,
    "elevation": 133
  },
  {
    "icao": "NZWS",
    "iata": "WSZ",
    "name": "Westport Airport",
    "city": "Westport",
    "country": "NZ",
    "lat": -41.737111,
    "lon": 171.579033,
    "elevation": 13
  },
  {
    "icao": "NZWU",
    "iata": "WAG",
    "name": "Wanganui Airport",
    "city": "Wanganui",
    "country": "NZ",
    "lat": -39.963467,
    "lon": 175.02444,
    "elevation": 27
  },
  {
    "icao": "OAHR",
    "iata": "HEA",
    "name": "Herat - Khwaja Abdullah Ansari International Airport",
    "city": "Guzara",
    "country": "AF",
    "lat": 34.209999,
    "lon": 62.228298,
    "elevation": 3206
  },
  {
    "icao": "OAIX",
    "iata": "OAI",
    "name": "Bagram Airfield",
    "city": "Bagram",
    "country": "AF",
    "lat": 34.946098,
    "lon": 69.264999,
    "elevation": 4895
  },
  {
    "icao": "OAJL",
    "iata": "JAA",
    "name": "Jalalabad Airport",
    "city": "Jalalabad",
    "country": "AF",
    "lat": 34.399799,
    "lon": 70.498596,
    "elevation": 1814
  },
  {
    "icao": "OAKB",
    "iata": "KBL",
    "name": "Kabul International Airport",
    "city": "Kabul",
    "country": "AF",
    "lat": 34.565899,
    "lon": 69.212303,
    "elevation": 5877
  },
  {
    "icao": "OAKN",
    "iata": "KDH",
    "name": "Ahmad Shah Baba International Airport / Kandahar Airfield",
    "city": "Khvoshab",
    "country": "AF",
    "lat": 31.5058,
    "lon": 65.847801,
    "elevation": 3337
  },
  {
    "icao": "OAKS",
    "iata": "KHT",
    "name": "Khost International Airport",
    "city": "Khost",
    "country": "AF",
    "lat": 33.284605,
    "lon": 69.80734,
    "elevation": 4204
  },
  {
    "icao": "OAMN",
    "iata": "MMZ",
    "name": "Maymana Zahiraddin Faryabi Airport",
    "city": "Maymana",
    "country": "AF",
    "lat": 35.930801,
    "lon": 64.760902,
    "elevation": 2743
  },
  {
    "icao": "OAMS",
    "iata": "MZR",
    "name": "Mazar-i-Sharif International Airport",
    "city": "Mazar-i-Sharif",
    "country": "AF",
    "lat": 36.706902,
    "lon": 67.209702,
    "elevation": 1284
  },
  {
    "icao": "OAUZ",
    "iata": "UND",
    "name": "Kunduz Airport",
    "city": "Kunduz",
    "country": "AF",
    "lat": 36.6651,
    "lon": 68.910797,
    "elevation": 1457
  },
  {
    "icao": "OBBI",
    "iata": "BAH",
    "name": "Bahrain International Airport",
    "city": "Manama",
    "country": "BH",
    "lat": 26.267295,
    "lon": 50.63764,
    "elevation": 6
  },
  {
    "icao": "OEAB",
    "iata": "AHB",
    "name": "Abha International Airport",
    "city": "Abha",
    "country": "SA",
    "lat": 18.2404,
    "lon": 42.656601,
    "elevation": 6858
  },
  {
    "icao": "OEAH",
    "iata": "HOF",
    "name": "Al-Ahsa International Airport",
    "city": "Hofuf",
    "country": "SA",
    "lat": 25.285299,
    "lon": 49.485199,
    "elevation": 588
  },
  {
    "icao": "OEAO",
    "iata": "ULH",
    "name": "Majeed Bin Abdulaziz Airport",
    "city": "Al Ula",
    "country": "SA",
    "lat": 26.483333,
    "lon": 38.116944,
    "elevation": 2050
  },
  {
    "icao": "OEBA",
    "iata": "ABT",
    "name": "King Saud Bin Abdulaziz (Al Baha) Airport",
    "city": "Al-Baha",
    "country": "SA",
    "lat": 20.298506,
    "lon": 41.636153,
    "elevation": 5486
  },
  {
    "icao": "OEBH",
    "iata": "BHH",
    "name": "Bisha Airport",
    "city": "Bisha",
    "country": "SA",
    "lat": 19.9844,
    "lon": 42.620899,
    "elevation": 3887
  },
  {
    "icao": "OEDF",
    "iata": "DMM",
    "name": "King Fahd International Airport",
    "city": "Ad Dammam",
    "country": "SA",
    "lat": 26.471201,
    "lon": 49.797901,
    "elevation": 72
  },
  {
    "icao": "OEDM",
    "iata": "DWD",
    "name": "King Salman Abdulaziz Airport",
    "city": "Dawadmi",
    "country": "SA",
    "lat": 24.4499,
    "lon": 44.121201,
    "elevation": 3026
  },
  {
    "icao": "OEDR",
    "iata": "DHA",
    "name": "King Abdulaziz Air Base",
    "city": "Dhahran",
    "country": "SA",
    "lat": 26.2654,
    "lon": 50.152,
    "elevation": 84
  },
  {
    "icao": "OEGN",
    "iata": "GIZ",
    "name": "Jizan Regional Airport / King Abdullah bin Abdulaziz Airport",
    "city": "Jizan",
    "country": "SA",
    "lat": 16.9011,
    "lon": 42.5858,
    "elevation": 20
  },
  {
    "icao": "OEGS",
    "iata": "ELQ",
    "name": "Gassim Airport",
    "city": "Buraidah",
    "country": "SA",
    "lat": 26.302799,
    "lon": 43.774399,
    "elevation": 2126
  },
  {
    "icao": "OEGT",
    "iata": "URY",
    "name": "Gurayat Domestic Airport",
    "city": "Gurayat",
    "country": "SA",
    "lat": 31.412413,
    "lon": 37.278898,
    "elevation": 1672
  },
  {
    "icao": "OEHL",
    "iata": "HAS",
    "name": "Ha'il Airport",
    "city": "Ha'il",
    "country": "SA",
    "lat": 27.437901,
    "lon": 41.686298,
    "elevation": 3331
  },
  {
    "icao": "OEJB",
    "iata": "QJB",
    "name": "Jubail Airport",
    "city": "Jubail",
    "country": "SA",
    "lat": 27.039,
    "lon": 49.405102,
    "elevation": 26
  },
  {
    "icao": "OEJN",
    "iata": "JED",
    "name": "King Abdulaziz International Airport",
    "city": "Jeddah",
    "country": "SA",
    "lat": 21.6796,
    "lon": 39.156502,
    "elevation": 48
  },
  {
    "icao": "OEKK",
    "iata": "KMC",
    "name": "King Khaled Military City Airport",
    "city": "King Khaled Military City",
    "country": "SA",
    "lat": 27.9009,
    "lon": 45.528198,
    "elevation": 1352
  },
  {
    "icao": "OEKM",
    "iata": "KMX",
    "name": "King Khalid Air Base",
    "city": "Khamis Mushait",
    "country": "SA",
    "lat": 18.2973,
    "lon": 42.803501,
    "elevation": 6778
  },
  {
    "icao": "OEMA",
    "iata": "MED",
    "name": "Prince Mohammad Bin Abdulaziz Airport",
    "city": "Medina",
    "country": "SA",
    "lat": 24.5534,
    "lon": 39.705101,
    "elevation": 2151
  },
  {
    "icao": "OENG",
    "iata": "EAM",
    "name": "Najran Domestic Airport",
    "city": "Najran",
    "country": "SA",
    "lat": 17.611401,
    "lon": 44.419201,
    "elevation": 3982
  },
  {
    "icao": "OENN",
    "iata": "NUM",
    "name": "Neom Bay Airport",
    "city": "Sharma",
    "country": "SA",
    "lat": 27.927598,
    "lon": 35.28874,
    "elevation": 29
  },
  {
    "icao": "OEPA",
    "iata": "AQI",
    "name": "Al Qaisumah/Hafr Al Batin Airport",
    "city": "Qaisumah",
    "country": "SA",
    "lat": 28.335199,
    "lon": 46.125099,
    "elevation": 1174
  },
  {
    "icao": "OEPS",
    "iata": "AKH",
    "name": "Prince Sultan Air Base",
    "city": "Al Kharj",
    "country": "SA",
    "lat": 24.0627,
    "lon": 47.580502,
    "elevation": 1651
  },
  {
    "icao": "OERF",
    "iata": "RAH",
    "name": "Rafha Domestic Airport",
    "city": "Rafha",
    "country": "SA",
    "lat": 29.626399993896484,
    "lon": 43.4906005859375,
    "elevation": 1474
  },
  {
    "icao": "OERK",
    "iata": "RUH",
    "name": "King Khaled International Airport",
    "city": "Riyadh",
    "country": "SA",
    "lat": 24.9576,
    "lon": 46.698799,
    "elevation": 2049
  },
  {
    "icao": "OERR",
    "iata": "RAE",
    "name": "Arar Domestic Airport",
    "city": "Arar",
    "country": "SA",
    "lat": 30.906600952148438,
    "lon": 41.13819885253906,
    "elevation": 1813
  },
  {
    "icao": "OESH",
    "iata": "SHW",
    "name": "Sharurah Domestic Airport",
    "city": "Sharurah",
    "country": "SA",
    "lat": 17.4669,
    "lon": 47.121399,
    "elevation": 2363
  },
  {
    "icao": "OESK",
    "iata": "AJF",
    "name": "Al-Jawf Domestic Airport",
    "city": "Al-Jawf",
    "country": "SA",
    "lat": 29.78510093688965,
    "lon": 40.099998474121094,
    "elevation": 2261
  },
  {
    "icao": "OETB",
    "iata": "TUU",
    "name": "Tabuk Airport",
    "city": "Tabuk",
    "country": "SA",
    "lat": 28.3654,
    "lon": 36.6189,
    "elevation": 2551
  },
  {
    "icao": "OETF",
    "iata": "TIF",
    "name": "Ta’if Regional Airport",
    "city": "Ta’if",
    "country": "SA",
    "lat": 21.483001,
    "lon": 40.543442,
    "elevation": 4848
  },
  {
    "icao": "OETR",
    "iata": "TUI",
    "name": "Turaif Domestic Airport",
    "city": "Turaif",
    "country": "SA",
    "lat": 31.692188,
    "lon": 38.731544,
    "elevation": 2803
  },
  {
    "icao": "OEWD",
    "iata": "WAE",
    "name": "Wadi Al Dawasir Domestic Airport",
    "city": "Wadi Al Dawasir",
    "country": "SA",
    "lat": 20.504299,
    "lon": 45.1996,
    "elevation": 2062
  },
  {
    "icao": "OEWJ",
    "iata": "EJH",
    "name": "Al Wajh Domestic Airport",
    "city": "Al Wajh",
    "country": "SA",
    "lat": 26.198601,
    "lon": 36.476398,
    "elevation": 66
  },
  {
    "icao": "OEYN",
    "iata": "YNB",
    "name": "Prince Abdul Mohsin bin Abdulaziz International Airport / Yanbu Airport",
    "city": "Yanbu",
    "country": "SA",
    "lat": 24.144199,
    "lon": 38.0634,
    "elevation": 26
  },
  {
    "icao": "OIAA",
    "iata": "ABD",
    "name": "Abadan Airport",
    "city": "Abadan",
    "country": "IR",
    "lat": 30.367887,
    "lon": 48.230075,
    "elevation": 10
  },
  {
    "icao": "OIAD",
    "iata": "DEF",
    "name": "Dezful Airport",
    "city": "Dezful",
    "country": "IR",
    "lat": 32.434399,
    "lon": 48.397598,
    "elevation": 474
  },
  {
    "icao": "OIAG",
    "iata": "AKW",
    "name": "Aghajari Airport",
    "city": "Aghajari",
    "country": "IR",
    "lat": 30.7444,
    "lon": 49.6772,
    "elevation": 88
  },
  {
    "icao": "OIAH",
    "iata": "GCH",
    "name": "Gachsaran Airport",
    "city": "Gachsaran",
    "country": "IR",
    "lat": 30.333869,
    "lon": 50.833796,
    "elevation": 2414
  },
  {
    "icao": "OIAI",
    "iata": "QMJ",
    "name": "Shahid Asiyaee Airport",
    "city": "Masjed Soleyman",
    "country": "IR",
    "lat": 32.001719,
    "lon": 49.268599,
    "elevation": 1206
  },
  {
    "icao": "OIAM",
    "iata": "MRX",
    "name": "Mahshahr Airport",
    "city": "Mahshahr",
    "country": "IR",
    "lat": 30.5562,
    "lon": 49.151901,
    "elevation": 8
  },
  {
    "icao": "OIAW",
    "iata": "AWZ",
    "name": "Lieutenant General Qasem Soleimani International Airport",
    "city": "Ahvaz",
    "country": "IR",
    "lat": 31.3374,
    "lon": 48.762001,
    "elevation": 66
  },
  {
    "icao": "OIBA",
    "iata": "AEU",
    "name": "Abu Musa Island Airport",
    "city": "Abu Musa",
    "country": "IR",
    "lat": 25.8757,
    "lon": 55.033001,
    "elevation": 23
  },
  {
    "icao": "OIBB",
    "iata": "BUZ",
    "name": "Bushehr Airport",
    "city": "Bushehr",
    "country": "IR",
    "lat": 28.9447994232,
    "lon": 50.8345985413,
    "elevation": 68
  },
  {
    "icao": "OIBJ",
    "iata": "KNR",
    "name": "Jam Airport",
    "city": "Jam",
    "country": "IR",
    "lat": 27.820499,
    "lon": 52.3522,
    "elevation": 2173
  },
  {
    "icao": "OIBK",
    "iata": "KIH",
    "name": "Kish International Airport",
    "city": "Kish Island",
    "country": "IR",
    "lat": 26.5261993408,
    "lon": 53.980201721200004,
    "elevation": 101
  },
  {
    "icao": "OIBL",
    "iata": "BDH",
    "name": "Bandar Lengeh International Airport",
    "city": "Bandar Lengeh",
    "country": "IR",
    "lat": 26.532283,
    "lon": 54.82484,
    "elevation": 67
  },
  {
    "icao": "OIBP",
    "iata": "PGU",
    "name": "Persian Gulf International Airport",
    "city": "Khiyaroo",
    "country": "IR",
    "lat": 27.379601,
    "lon": 52.737701,
    "elevation": 27
  },
  {
    "icao": "OIBQ",
    "iata": "KHK",
    "name": "Khark Airport",
    "city": "Khark",
    "country": "IR",
    "lat": 29.260503,
    "lon": 50.322193,
    "elevation": 17
  },
  {
    "icao": "OIBS",
    "iata": "SXI",
    "name": "Siri Airport",
    "city": "Siri",
    "country": "IR",
    "lat": 25.908899,
    "lon": 54.539398,
    "elevation": 43
  },
  {
    "icao": "OIBV",
    "iata": "LVP",
    "name": "Lavan Airport",
    "city": "Lavan Airport",
    "country": "IR",
    "lat": 26.810742,
    "lon": 53.354302,
    "elevation": 76
  },
  {
    "icao": "OICC",
    "iata": "KSH",
    "name": "Shahid Ashrafi Esfahani Airport",
    "city": "Kermanshah",
    "country": "IR",
    "lat": 34.3459014893,
    "lon": 47.1581001282,
    "elevation": 4307
  },
  {
    "icao": "OICI",
    "iata": "IIL",
    "name": "Ilam Airport",
    "city": "Ilam",
    "country": "IR",
    "lat": 33.58660125732422,
    "lon": 46.40480041503906,
    "elevation": 4404
  },
  {
    "icao": "OICK",
    "iata": "KHD",
    "name": "Khoram Abad Airport",
    "city": "",
    "country": "IR",
    "lat": 33.43539810180664,
    "lon": 48.282901763916016,
    "elevation": 3782
  },
  {
    "icao": "OICS",
    "iata": "SDG",
    "name": "Sanandaj Airport",
    "city": "",
    "country": "IR",
    "lat": 35.24589920043945,
    "lon": 47.00920104980469,
    "elevation": 4522
  },
  {
    "icao": "OIFK",
    "iata": "KKS",
    "name": "Kashan Airport",
    "city": "Kashan",
    "country": "IR",
    "lat": 33.895302,
    "lon": 51.577,
    "elevation": 3465
  },
  {
    "icao": "OIFM",
    "iata": "IFN",
    "name": "Isfahan Shahid Beheshti International Airport",
    "city": "Isfahan",
    "country": "IR",
    "lat": 32.750755,
    "lon": 51.861483,
    "elevation": 5059
  },
  {
    "icao": "OIFS",
    "iata": "CQD",
    "name": "Shahrekord Airport",
    "city": "Shahrekord",
    "country": "IR",
    "lat": 32.2971992493,
    "lon": 50.842201232899995,
    "elevation": 6723
  },
  {
    "icao": "OIGG",
    "iata": "RAS",
    "name": "Sardar-e-Jangal Airport",
    "city": "Rasht",
    "country": "IR",
    "lat": 37.323333,
    "lon": 49.617778,
    "elevation": -40
  },
  {
    "icao": "OIHH",
    "iata": "HDM",
    "name": "Hamadan Airport",
    "city": "Hamadan",
    "country": "IR",
    "lat": 34.869202,
    "lon": 48.552502,
    "elevation": 5755
  },
  {
    "icao": "OIHS",
    "iata": "NUJ",
    "name": "Nojeh Air Base",
    "city": "Amirabad",
    "country": "IR",
    "lat": 35.211601,
    "lon": 48.6534,
    "elevation": 5609
  },
  {
    "icao": "OIIE",
    "iata": "IKA",
    "name": "Imam Khomeini International Airport",
    "city": "Tehran",
    "country": "IR",
    "lat": 35.416099548339844,
    "lon": 51.152198791503906,
    "elevation": 3305
  },
  {
    "icao": "OIII",
    "iata": "THR",
    "name": "Mehrabad International Airport",
    "city": "Tehran",
    "country": "IR",
    "lat": 35.68920135498047,
    "lon": 51.31340026855469,
    "elevation": 3962
  },
  {
    "icao": "OIIK",
    "iata": "GZW",
    "name": "Qazvin Airport",
    "city": "Qazvin",
    "country": "IR",
    "lat": 36.240101,
    "lon": 50.0471,
    "elevation": 4184
  },
  {
    "icao": "OIIP",
    "iata": "PYK",
    "name": "Payam Karaj International Airport",
    "city": "Karaj",
    "country": "IR",
    "lat": 35.7761,
    "lon": 50.826698,
    "elevation": 4170
  },
  {
    "icao": "OIKB",
    "iata": "BND",
    "name": "Bandar Abbas International Airport",
    "city": "Bandar Abbas",
    "country": "IR",
    "lat": 27.218299865722656,
    "lon": 56.37779998779297,
    "elevation": 22
  },
  {
    "icao": "OIKJ",
    "iata": "JYR",
    "name": "Jiroft Airport",
    "city": "Jiroft",
    "country": "IR",
    "lat": 28.723519,
    "lon": 57.675037,
    "elevation": 2663
  },
  {
    "icao": "OIKK",
    "iata": "KER",
    "name": "Ayatollah Hashemi Rafsanjani International Airport",
    "city": "Kerman",
    "country": "IR",
    "lat": 30.271276,
    "lon": 56.949692,
    "elevation": 5741
  },
  {
    "icao": "OIKM",
    "iata": "BXR",
    "name": "Bam Airport",
    "city": "Bam",
    "country": "IR",
    "lat": 29.0842,
    "lon": 58.450001,
    "elevation": 3231
  },
  {
    "icao": "OIKR",
    "iata": "RJN",
    "name": "Rafsanjan Airport",
    "city": "Rafsanjan",
    "country": "IR",
    "lat": 30.298345,
    "lon": 56.048979,
    "elevation": 5298
  },
  {
    "icao": "OIKY",
    "iata": "SYJ",
    "name": "Sirjan Airport",
    "city": "Sirjan",
    "country": "IR",
    "lat": 29.5509,
    "lon": 55.672699,
    "elevation": 5846
  },
  {
    "icao": "OIMB",
    "iata": "XBJ",
    "name": "Birjand International Airport",
    "city": "Birjand",
    "country": "IR",
    "lat": 32.896525,
    "lon": 59.281258,
    "elevation": 4952
  },
  {
    "icao": "OIMC",
    "iata": "CKT",
    "name": "Sarakhs Airport",
    "city": "Sarakhs",
    "country": "IR",
    "lat": 36.501202,
    "lon": 61.064899,
    "elevation": 945
  },
  {
    "icao": "OIMM",
    "iata": "MHD",
    "name": "Mashhad International Airport",
    "city": "Mashhad",
    "country": "IR",
    "lat": 36.235198974609375,
    "lon": 59.64099884033203,
    "elevation": 3263
  },
  {
    "icao": "OIMN",
    "iata": "BJB",
    "name": "Bojnord Airport",
    "city": "Bojnord",
    "country": "IR",
    "lat": 37.49300003051758,
    "lon": 57.30820083618164,
    "elevation": 3499
  },
  {
    "icao": "OIMS",
    "iata": "AFZ",
    "name": "Sabzevar National Airport",
    "city": "Sabzevar",
    "country": "IR",
    "lat": 36.16809844970703,
    "lon": 57.59519958496094,
    "elevation": 3010
  },
  {
    "icao": "OIMT",
    "iata": "TCX",
    "name": "Tabas Airport",
    "city": "Tabas",
    "country": "IR",
    "lat": 33.667801,
    "lon": 56.8927,
    "elevation": 2312
  },
  {
    "icao": "OING",
    "iata": "GBT",
    "name": "Gorgan Airport",
    "city": "Gorgan",
    "country": "IR",
    "lat": 36.909400939899996,
    "lon": 54.4012985229,
    "elevation": -24
  },
  {
    "icao": "OINN",
    "iata": "NSH",
    "name": "Nowshahr Airport",
    "city": "Nowshahr",
    "country": "IR",
    "lat": 36.664286,
    "lon": 51.46273,
    "elevation": -61
  },
  {
    "icao": "OINR",
    "iata": "RZR",
    "name": "Ramsar Airport",
    "city": "Ramsar",
    "country": "IR",
    "lat": 36.90701,
    "lon": 50.687316,
    "elevation": -70
  },
  {
    "icao": "OINZ",
    "iata": "SRY",
    "name": "Sari Dasht-e Naz International Airport",
    "city": "Sari",
    "country": "IR",
    "lat": 36.644408,
    "lon": 53.188761,
    "elevation": 35
  },
  {
    "icao": "OISF",
    "iata": "FAZ",
    "name": "Fasa Airport",
    "city": "Fasa",
    "country": "IR",
    "lat": 28.8918,
    "lon": 53.723301,
    "elevation": 4261
  },
  {
    "icao": "OISL",
    "iata": "LRR",
    "name": "Lar Airport",
    "city": "Lar",
    "country": "IR",
    "lat": 27.6747,
    "lon": 54.383301,
    "elevation": 2641
  },
  {
    "icao": "OISR",
    "iata": "LFM",
    "name": "Lamerd Airport",
    "city": "Lamerd",
    "country": "IR",
    "lat": 27.3727,
    "lon": 53.188801,
    "elevation": 1337
  },
  {
    "icao": "OISS",
    "iata": "SYZ",
    "name": "Shiraz Shahid Dastghaib International Airport",
    "city": "Shiraz",
    "country": "IR",
    "lat": 29.5392,
    "lon": 52.589802,
    "elevation": 4927
  },
  {
    "icao": "OISY",
    "iata": "YES",
    "name": "Yasuj Airport",
    "city": "Yasuj",
    "country": "IR",
    "lat": 30.702238,
    "lon": 51.542988,
    "elevation": 5939
  },
  {
    "icao": "OITL",
    "iata": "ADU",
    "name": "Ardabil Airport",
    "city": "Ardabil",
    "country": "IR",
    "lat": 38.3256988525,
    "lon": 48.4244003296,
    "elevation": 4315
  },
  {
    "icao": "OITR",
    "iata": "OMH",
    "name": "Urmia Airport",
    "city": "Urmia",
    "country": "IR",
    "lat": 37.6680984497,
    "lon": 45.0686988831,
    "elevation": 4343
  },
  {
    "icao": "OITT",
    "iata": "TBZ",
    "name": "Tabriz International Airport",
    "city": "Tabriz",
    "country": "IR",
    "lat": 38.1339,
    "lon": 46.235001,
    "elevation": 4459
  },
  {
    "icao": "OITU",
    "iata": "IMQ",
    "name": "Maku National Airport",
    "city": "Showt",
    "country": "IR",
    "lat": 39.191293,
    "lon": 44.928505,
    "elevation": 3136
  },
  {
    "icao": "OITZ",
    "iata": "JWN",
    "name": "Zanjan Airport",
    "city": "Zanjan",
    "country": "IR",
    "lat": 36.7737007141,
    "lon": 48.3594017029,
    "elevation": 5382
  },
  {
    "icao": "OIYY",
    "iata": "AZD",
    "name": "Shahid Sadooghi Airport",
    "city": "Yazd",
    "country": "IR",
    "lat": 31.9048995972,
    "lon": 54.2765007019,
    "elevation": 4054
  },
  {
    "icao": "OIZB",
    "iata": "ACZ",
    "name": "Zabol Airport",
    "city": "Zabol",
    "country": "IR",
    "lat": 31.098301,
    "lon": 61.5439,
    "elevation": 1628
  },
  {
    "icao": "OIZC",
    "iata": "ZBR",
    "name": "Chabahar Konarak International Airport",
    "city": "Konarak",
    "country": "IR",
    "lat": 25.44319,
    "lon": 60.382167,
    "elevation": 13
  },
  {
    "icao": "OIZH",
    "iata": "ZAH",
    "name": "Zahedan International Airport",
    "city": "Zahedan",
    "country": "IR",
    "lat": 29.47570037841797,
    "lon": 60.90620040893555,
    "elevation": 4564
  },
  {
    "icao": "OIZI",
    "iata": "IHR",
    "name": "Iranshahr Airport",
    "city": "Iranshahr",
    "country": "IR",
    "lat": 27.236099,
    "lon": 60.720001,
    "elevation": 2040
  },
  {
    "icao": "OJAI",
    "iata": "AMM",
    "name": "Queen Alia International Airport",
    "city": "Amman",
    "country": "JO",
    "lat": 31.7226009369,
    "lon": 35.9931983948,
    "elevation": 2395
  },
  {
    "icao": "OJAM",
    "iata": "ADJ",
    "name": "Amman Civil (Marka International) Airport",
    "city": "Amman",
    "country": "JO",
    "lat": 31.9727,
    "lon": 35.9916,
    "elevation": 2555
  },
  {
    "icao": "OJAQ",
    "iata": "AQJ",
    "name": "Aqaba King Hussein International Airport",
    "city": "Aqaba",
    "country": "JO",
    "lat": 29.611600875854492,
    "lon": 35.01810073852539,
    "elevation": 175
  },
  {
    "icao": "OKAJ",
    "iata": "XIJ",
    "name": "Ahmed Al Jaber Air Base",
    "city": "Ahmed Al Jaber AB",
    "country": "KW",
    "lat": 28.9347991943,
    "lon": 47.791900634799994,
    "elevation": 409
  },
  {
    "icao": "OKKK",
    "iata": "KWI",
    "name": "Kuwait International Airport",
    "city": "Kuwait City",
    "country": "KW",
    "lat": 29.226601,
    "lon": 47.968899,
    "elevation": 206
  },
  {
    "icao": "OLBA",
    "iata": "BEY",
    "name": "Beirut Rafic Hariri International Airport",
    "city": "Beirut",
    "country": "LB",
    "lat": 33.820899963378906,
    "lon": 35.488399505615234,
    "elevation": 87
  },
  {
    "icao": "OLKA",
    "iata": "KYE",
    "name": "Rene Mouawad Air Base / Kleyate Airport",
    "city": "Tripoli",
    "country": "LB",
    "lat": 34.589298,
    "lon": 36.011299,
    "elevation": 75
  },
  {
    "icao": "OODQ",
    "iata": "DQM",
    "name": "Duqm International Airport",
    "city": "Duqm",
    "country": "OM",
    "lat": 19.501944,
    "lon": 57.634167,
    "elevation": 364
  },
  {
    "icao": "OOMN",
    "iata": "MNH",
    "name": "Mussanah Airport",
    "city": "Al Masna'ah",
    "country": "OM",
    "lat": 23.640556,
    "lon": 57.4875,
    "elevation": 372
  },
  {
    "icao": "OMAA",
    "iata": "AUH",
    "name": "Zayed International Airport",
    "city": "Abu Dhabi",
    "country": "AE",
    "lat": 24.443764,
    "lon": 54.651718,
    "elevation": 88
  },
  {
    "icao": "OMAD",
    "iata": "AZI",
    "name": "Al Bateen Executive Airport",
    "city": "Abu Dhabi",
    "country": "AE",
    "lat": 24.428301,
    "lon": 54.458099,
    "elevation": 16
  },
  {
    "icao": "OMAL",
    "iata": "AAN",
    "name": "Al Ain International Airport",
    "city": "Al Ain",
    "country": "AE",
    "lat": 24.261699676513672,
    "lon": 55.60919952392578,
    "elevation": 869
  },
  {
    "icao": "OMAM",
    "iata": "DHF",
    "name": "Al Dhafra Air Base",
    "city": "",
    "country": "AE",
    "lat": 24.248199462900004,
    "lon": 54.547698974599996,
    "elevation": 77
  },
  {
    "icao": "OMBY",
    "iata": "XSB",
    "name": "Sir Bani Yas Airport",
    "city": "Sir Bani Yas",
    "country": "AE",
    "lat": 24.283611,
    "lon": 52.580278,
    "elevation": 25
  },
  {
    "icao": "OMDB",
    "iata": "DXB",
    "name": "Dubai International Airport",
    "city": "Dubai",
    "country": "AE",
    "lat": 25.2527999878,
    "lon": 55.3643989563,
    "elevation": 62
  },
  {
    "icao": "OMDM",
    "iata": "NHD",
    "name": "Al Minhad Air Base",
    "city": "Dubai",
    "country": "AE",
    "lat": 25.0268001556,
    "lon": 55.3661994934,
    "elevation": 165
  },
  {
    "icao": "OMDW",
    "iata": "DWC",
    "name": "Al Maktoum International Airport",
    "city": "Jebel Ali",
    "country": "AE",
    "lat": 24.896356,
    "lon": 55.161389,
    "elevation": 114
  },
  {
    "icao": "OMFJ",
    "iata": "FJR",
    "name": "Fujairah International Airport",
    "city": "Fujairah",
    "country": "AE",
    "lat": 25.1122,
    "lon": 56.324001,
    "elevation": 152
  },
  {
    "icao": "OMRK",
    "iata": "RKT",
    "name": "Ras Al Khaimah International Airport",
    "city": "Ras Al Khaimah",
    "country": "AE",
    "lat": 25.613500595092773,
    "lon": 55.93880081176758,
    "elevation": 102
  },
  {
    "icao": "OMSJ",
    "iata": "SHJ",
    "name": "Sharjah International Airport",
    "city": "Sharjah",
    "country": "AE",
    "lat": 25.3286,
    "lon": 55.5172,
    "elevation": 111
  },
  {
    "icao": "OOKB",
    "iata": "KHS",
    "name": "Khasab Airport",
    "city": "Khasab",
    "country": "OM",
    "lat": 26.171,
    "lon": 56.240601,
    "elevation": 100
  },
  {
    "icao": "OOMA",
    "iata": "MSH",
    "name": "RAFO Masirah",
    "city": "Masirah",
    "country": "OM",
    "lat": 20.6754,
    "lon": 58.890499,
    "elevation": 64
  },
  {
    "icao": "OOMS",
    "iata": "MCT",
    "name": "Muscat International Airport",
    "city": "Muscat",
    "country": "OM",
    "lat": 23.5933,
    "lon": 58.284401,
    "elevation": 48
  },
  {
    "icao": "OOSA",
    "iata": "SLL",
    "name": "Salalah Airport",
    "city": "Salalah",
    "country": "OM",
    "lat": 17.038700103759766,
    "lon": 54.09130096435547,
    "elevation": 73
  },
  {
    "icao": "OOTH",
    "iata": "TTH",
    "name": "Thumrait Air Base",
    "city": "Thumrait",
    "country": "OM",
    "lat": 17.666,
    "lon": 54.024601,
    "elevation": 1570
  },
  {
    "icao": "OPBW",
    "iata": "BHV",
    "name": "Bahawalpur Airport",
    "city": "Bahawalpur",
    "country": "PK",
    "lat": 29.348100662231445,
    "lon": 71.71800231933594,
    "elevation": 392
  },
  {
    "icao": "OPCH",
    "iata": "CJL",
    "name": "Chitral Airport",
    "city": "Chitral",
    "country": "PK",
    "lat": 35.886213,
    "lon": 71.799922,
    "elevation": 4920
  },
  {
    "icao": "OPDG",
    "iata": "DEA",
    "name": "Dera Ghazi Khan Airport",
    "city": "Dera Ghazi Khan",
    "country": "PK",
    "lat": 29.961000442504883,
    "lon": 70.48590087890625,
    "elevation": 492
  },
  {
    "icao": "OPDI",
    "iata": "DSK",
    "name": "Dera Ismael Khan Airport [IN-ACTIVE]",
    "city": "Dera Ismael Khan",
    "country": "PK",
    "lat": 31.909401,
    "lon": 70.896599,
    "elevation": 594
  },
  {
    "icao": "OPFA",
    "iata": "LYP",
    "name": "Faisalabad International Airport",
    "city": "Faisalabad",
    "country": "PK",
    "lat": 31.364999771118164,
    "lon": 72.99479675292969,
    "elevation": 591
  },
  {
    "icao": "OPGW",
    "iata": "GWD",
    "name": "New Gwadar International Airport",
    "city": "Gurandani",
    "country": "PK",
    "lat": 25.296733,
    "lon": 62.498822,
    "elevation": 61
  },
  {
    "icao": "OPGT",
    "iata": "GIL",
    "name": "Gilgit Airport",
    "city": "Gilgit",
    "country": "PK",
    "lat": 35.918800354003906,
    "lon": 74.33360290527344,
    "elevation": 4796
  },
  {
    "icao": "OPIS",
    "iata": "ISB",
    "name": "Islamabad International Airport",
    "city": "Attock",
    "country": "PK",
    "lat": 33.549,
    "lon": 72.82566,
    "elevation": 1761
  },
  {
    "icao": "OPJA",
    "iata": "JAG",
    "name": "Shahbaz Air Base",
    "city": "Jacobabad",
    "country": "PK",
    "lat": 28.28420066833496,
    "lon": 68.44969940185547,
    "elevation": 185
  },
  {
    "icao": "OPKC",
    "iata": "KHI",
    "name": "Jinnah International Airport",
    "city": "Karachi",
    "country": "PK",
    "lat": 24.9065,
    "lon": 67.160797,
    "elevation": 100
  },
  {
    "icao": "OPLA",
    "iata": "LHE",
    "name": "Allama Iqbal International Airport",
    "city": "Lahore",
    "country": "PK",
    "lat": 31.521601,
    "lon": 74.403603,
    "elevation": 712
  },
  {
    "icao": "OPMA",
    "iata": "XJM",
    "name": "Mangla Airport",
    "city": "Mangla",
    "country": "PK",
    "lat": 33.05009841918945,
    "lon": 73.63839721679688,
    "elevation": 902
  },
  {
    "icao": "OPMF",
    "iata": "MFG",
    "name": "Muzaffarabad Airport",
    "city": "Muzaffarabad",
    "country": "PK",
    "lat": 34.339001,
    "lon": 73.508598,
    "elevation": 2691
  },
  {
    "icao": "OPMI",
    "iata": "MWD",
    "name": "Mianwali Air Base",
    "city": "Mianwali",
    "country": "PK",
    "lat": 32.5630989074707,
    "lon": 71.5707015991211,
    "elevation": 690
  },
  {
    "icao": "OPMJ",
    "iata": "MJD",
    "name": "Moenjodaro Airport",
    "city": "Moenjodaro",
    "country": "PK",
    "lat": 27.335199,
    "lon": 68.143097,
    "elevation": 154
  },
  {
    "icao": "OPMS",
    "iata": "ATG",
    "name": "Minhas Air Base",
    "city": "Kamra",
    "country": "PK",
    "lat": 33.8690986633,
    "lon": 72.4009017944,
    "elevation": 1023
  },
  {
    "icao": "OPMT",
    "iata": "MUX",
    "name": "Multan International Airport",
    "city": "Multan",
    "country": "PK",
    "lat": 30.20319938659668,
    "lon": 71.41909790039062,
    "elevation": 403
  },
  {
    "icao": "OPNH",
    "iata": "WNS",
    "name": "Shaheed Benazirabad Airport",
    "city": "Nawabashah",
    "country": "PK",
    "lat": 26.2194,
    "lon": 68.390099,
    "elevation": 95
  },
  {
    "icao": "OPPG",
    "iata": "PJG",
    "name": "Panjgur Airport",
    "city": "Panjgur",
    "country": "PK",
    "lat": 26.9545,
    "lon": 64.1325,
    "elevation": 3289
  },
  {
    "icao": "OPPI",
    "iata": "PSI",
    "name": "Pasni Airport",
    "city": "Pasni",
    "country": "PK",
    "lat": 25.290501,
    "lon": 63.3451,
    "elevation": 33
  },
  {
    "icao": "OPPS",
    "iata": "PEW",
    "name": "Peshawar International Airport",
    "city": "Peshawar",
    "country": "PK",
    "lat": 33.993900299072266,
    "lon": 71.51460266113281,
    "elevation": 1158
  },
  {
    "icao": "OPQT",
    "iata": "UET",
    "name": "Quetta International Airport",
    "city": "Quetta",
    "country": "PK",
    "lat": 30.251399993896484,
    "lon": 66.93779754638672,
    "elevation": 5267
  },
  {
    "icao": "OPRK",
    "iata": "RYK",
    "name": "Shaikh Zaid Airport",
    "city": "Rahim Yar Khan",
    "country": "PK",
    "lat": 28.383899688720703,
    "lon": 70.27960205078125,
    "elevation": 271
  },
  {
    "icao": "OPRT",
    "iata": "RAZ",
    "name": "Rawalakot Airport",
    "city": "Rawalakot",
    "country": "PK",
    "lat": 33.849701,
    "lon": 73.798103,
    "elevation": 5479
  },
  {
    "icao": "OPSD",
    "iata": "KDU",
    "name": "Skardu Airport",
    "city": "Skardu",
    "country": "PK",
    "lat": 35.33549880981445,
    "lon": 75.53600311279297,
    "elevation": 7316
  },
  {
    "icao": "OPSK",
    "iata": "SKZ",
    "name": "Sukkur Airport",
    "city": "Mirpur Khas",
    "country": "PK",
    "lat": 27.722000122070312,
    "lon": 68.79170227050781,
    "elevation": 196
  },
  {
    "icao": "OPSN",
    "iata": "SYW",
    "name": "Sehwan Sharif Airport",
    "city": "Sehwan Sharif",
    "country": "PK",
    "lat": 26.473101,
    "lon": 67.717201,
    "elevation": 121
  },
  {
    "icao": "OPSR",
    "iata": "SGI",
    "name": "Mushaf Air Base",
    "city": "Sargodha",
    "country": "PK",
    "lat": 32.04859924316406,
    "lon": 72.66500091552734,
    "elevation": 614
  },
  {
    "icao": "OPSS",
    "iata": "SDT",
    "name": "Saidu Sharif Airport",
    "city": "Saidu Sharif",
    "country": "PK",
    "lat": 34.813599,
    "lon": 72.352798,
    "elevation": 3183
  },
  {
    "icao": "OPST",
    "iata": "SKT",
    "name": "Sialkot International Airport",
    "city": "Sialkot",
    "country": "PK",
    "lat": 32.535557,
    "lon": 74.363892,
    "elevation": 837
  },
  {
    "icao": "OPSU",
    "iata": "SUL",
    "name": "Sui Airport",
    "city": "Sui",
    "country": "PK",
    "lat": 28.645099639892578,
    "lon": 69.1769027709961,
    "elevation": 763
  },
  {
    "icao": "OPTU",
    "iata": "TUK",
    "name": "Turbat International Airport",
    "city": "Turbat",
    "country": "PK",
    "lat": 25.986400604248047,
    "lon": 63.03020095825195,
    "elevation": 498
  },
  {
    "icao": "OPZB",
    "iata": "PZH",
    "name": "Zhob Airport",
    "city": "Fort Sandeman",
    "country": "PK",
    "lat": 31.358400344848633,
    "lon": 69.4636001586914,
    "elevation": 4728
  },
  {
    "icao": "ORAA",
    "iata": "IQA",
    "name": "Al Asad Air Base",
    "city": "Hīt",
    "country": "IQ",
    "lat": 33.7855987549,
    "lon": 42.4412002563,
    "elevation": 618
  },
  {
    "icao": "ORAT",
    "iata": "TQD",
    "name": "Al Taqaddum Air Base",
    "city": "Al Habbaniyah",
    "country": "IQ",
    "lat": 33.33810043335,
    "lon": 43.597099304199,
    "elevation": 275
  },
  {
    "icao": "ORBI",
    "iata": "BGW",
    "name": "Baghdad International Airport / New Al Muthana Air Base",
    "city": "Baghdad",
    "country": "IQ",
    "lat": 33.262501,
    "lon": 44.2346,
    "elevation": 114
  },
  {
    "icao": "ORBM",
    "iata": "OSM",
    "name": "Mosul International Airport",
    "city": "Mosul",
    "country": "IQ",
    "lat": 36.305801,
    "lon": 43.1474,
    "elevation": 719
  },
  {
    "icao": "ORER",
    "iata": "EBL",
    "name": "Erbil International Airport",
    "city": "Arbil",
    "country": "IQ",
    "lat": 36.23759841918945,
    "lon": 43.963199615478516,
    "elevation": 1341
  },
  {
    "icao": "ORKK",
    "iata": "KIK",
    "name": "Kirkuk Air Base",
    "city": "Kirkuk",
    "country": "IQ",
    "lat": 35.469501,
    "lon": 44.3489,
    "elevation": 1061
  },
  {
    "icao": "ORMM",
    "iata": "BSR",
    "name": "Basra International Airport",
    "city": "Basra",
    "country": "IQ",
    "lat": 30.549101,
    "lon": 47.662102,
    "elevation": 11
  },
  {
    "icao": "ORNI",
    "iata": "NJF",
    "name": "Al Najaf International Airport",
    "city": "Najaf",
    "country": "IQ",
    "lat": 31.989853,
    "lon": 44.404317,
    "elevation": 103
  },
  {
    "icao": "ORQW",
    "iata": "RQW",
    "name": "Qayyarah West Airport",
    "city": "Qayyarah",
    "country": "IQ",
    "lat": 35.7672,
    "lon": 43.125099,
    "elevation": 749
  },
  {
    "icao": "ORSU",
    "iata": "ISU",
    "name": "Sulaymaniyah International Airport",
    "city": "Sulaymaniyah",
    "country": "IQ",
    "lat": 35.5617485046,
    "lon": 45.316738128699996,
    "elevation": 2494
  },
  {
    "icao": "ORTL",
    "iata": "XNH",
    "name": "Ali Air Base",
    "city": "Nasiriyah",
    "country": "IQ",
    "lat": 30.935801,
    "lon": 46.090099,
    "elevation": 20
  },
  {
    "icao": "OSAP",
    "iata": "ALP",
    "name": "Aleppo International Airport",
    "city": "Aleppo",
    "country": "SY",
    "lat": 36.180698,
    "lon": 37.2244,
    "elevation": 1276
  },
  {
    "icao": "OSDI",
    "iata": "DAM",
    "name": "Damascus International Airport",
    "city": "Damascus",
    "country": "SY",
    "lat": 33.4114990234375,
    "lon": 36.51559829711914,
    "elevation": 2020
  },
  {
    "icao": "OSDZ",
    "iata": "DEZ",
    "name": "Deir ez-Zor Airport",
    "city": "Deir ez-Zor",
    "country": "SY",
    "lat": 35.2854,
    "lon": 40.175999,
    "elevation": 700
  },
  {
    "icao": "OSKL",
    "iata": "KAC",
    "name": "Qamishli Airport",
    "city": "Qamishly",
    "country": "SY",
    "lat": 37.020599,
    "lon": 41.191399,
    "elevation": 1480
  },
  {
    "icao": "OSLK",
    "iata": "LTK",
    "name": "Hmeimim Air Base",
    "city": "Latakia",
    "country": "SY",
    "lat": 35.4011,
    "lon": 35.9487,
    "elevation": 157
  },
  {
    "icao": "OSPR",
    "iata": "PMS",
    "name": "Palmyra Airport",
    "city": "Tadmur",
    "country": "SY",
    "lat": 34.5574,
    "lon": 38.316898,
    "elevation": 1322
  },
  {
    "icao": "OTBD",
    "iata": "DIA",
    "name": "Doha International Airport",
    "city": "Doha",
    "country": "QA",
    "lat": 25.261101,
    "lon": 51.565102,
    "elevation": 35
  },
  {
    "icao": "OTBH",
    "iata": "XJD",
    "name": "Al Udeid Air Base",
    "city": "Ar Rayyan",
    "country": "QA",
    "lat": 25.1173000336,
    "lon": 51.3149986267,
    "elevation": 130
  },
  {
    "icao": "OTHH",
    "iata": "DOH",
    "name": "Hamad International Airport",
    "city": "Doha",
    "country": "QA",
    "lat": 25.273056,
    "lon": 51.608056,
    "elevation": 13
  },
  {
    "icao": "OYAA",
    "iata": "ADE",
    "name": "Aden International Airport",
    "city": "Aden",
    "country": "YE",
    "lat": 12.8295,
    "lon": 45.028801,
    "elevation": 7
  },
  {
    "icao": "OYAT",
    "iata": "AXK",
    "name": "Ataq Airport",
    "city": "Ataq",
    "country": "YE",
    "lat": 14.5513,
    "lon": 46.826199,
    "elevation": 3735
  },
  {
    "icao": "OYGD",
    "iata": "AAY",
    "name": "Al Ghaydah International Airport",
    "city": "Al Ghaydah",
    "country": "YE",
    "lat": 16.193341,
    "lon": 52.174186,
    "elevation": 134
  },
  {
    "icao": "OYRN",
    "iata": "RIY",
    "name": "Riyan Mukalla International Airport",
    "city": "Riyan",
    "country": "YE",
    "lat": 14.6626,
    "lon": 49.375,
    "elevation": 54
  },
  {
    "icao": "OYSN",
    "iata": "SAH",
    "name": "Sanaa International Airport",
    "city": "Sanaa",
    "country": "YE",
    "lat": 15.4763,
    "lon": 44.2197,
    "elevation": 7216
  },
  {
    "icao": "OYSQ",
    "iata": "SCT",
    "name": "Socotra International Airport",
    "city": "Mori",
    "country": "YE",
    "lat": 12.6307,
    "lon": 53.9058,
    "elevation": 146
  },
  {
    "icao": "OYSY",
    "iata": "GXF",
    "name": "Seiyun Hadhramaut International Airport",
    "city": "Seiyun",
    "country": "YE",
    "lat": 15.9661,
    "lon": 48.7883,
    "elevation": 2097
  },
  {
    "icao": "OYTZ",
    "iata": "TAI",
    "name": "Ta'izz International Airport",
    "city": "Ta'izz",
    "country": "YE",
    "lat": 13.6859998703,
    "lon": 44.139099121099996,
    "elevation": 4838
  },
  {
    "icao": "PAAQ",
    "iata": "PAQ",
    "name": "Warren \"Bud\" Woods Palmer Municipal Airport",
    "city": "Palmer",
    "country": "US",
    "lat": 61.594898,
    "lon": -149.08901,
    "elevation": 242
  },
  {
    "icao": "PABA",
    "iata": "BTI",
    "name": "Barter Island Long Range Radar Station Airport",
    "city": "Barter Island",
    "country": "US",
    "lat": 70.134003,
    "lon": -143.582001,
    "elevation": 2
  },
  {
    "icao": "PABE",
    "iata": "BET",
    "name": "Bethel Airport",
    "city": "Bethel",
    "country": "US",
    "lat": 60.77980042,
    "lon": -161.8379974,
    "elevation": 126
  },
  {
    "icao": "PABI",
    "iata": "BIG",
    "name": "Allen Army Airfield",
    "city": "Delta Junction Ft Greely",
    "country": "US",
    "lat": 63.9944992065,
    "lon": -145.722000122,
    "elevation": 1291
  },
  {
    "icao": "PABR",
    "iata": "BRW",
    "name": "Wiley Post Will Rogers Memorial Airport",
    "city": "Utqiaġvik",
    "country": "US",
    "lat": 71.285402,
    "lon": -156.766008,
    "elevation": 44
  },
  {
    "icao": "PACD",
    "iata": "CDB",
    "name": "Cold Bay Airport",
    "city": "Cold Bay",
    "country": "US",
    "lat": 55.207871,
    "lon": -162.725029,
    "elevation": 96
  },
  {
    "icao": "PACV",
    "iata": "CDV",
    "name": "Merle K (Mudhole) Smith Airport",
    "city": "Cordova",
    "country": "US",
    "lat": 60.491798,
    "lon": -145.477997,
    "elevation": 54
  },
  {
    "icao": "PACZ",
    "iata": "CZF",
    "name": "Cape Romanzof LRRS Airport",
    "city": "Cape Romanzof",
    "country": "US",
    "lat": 61.78030014,
    "lon": -166.0390015,
    "elevation": 464
  },
  {
    "icao": "PADE",
    "iata": "DRG",
    "name": "Deering Airport",
    "city": "Deering",
    "country": "US",
    "lat": 66.068901,
    "lon": -162.766914,
    "elevation": 21
  },
  {
    "icao": "PADK",
    "iata": "ADK",
    "name": "Adak Airport",
    "city": "Adak",
    "country": "US",
    "lat": 51.883564,
    "lon": -176.642783,
    "elevation": 18
  },
  {
    "icao": "PADL",
    "iata": "DLG",
    "name": "Dillingham Airport",
    "city": "Dillingham",
    "country": "US",
    "lat": 59.04470062,
    "lon": -158.5050049,
    "elevation": 81
  },
  {
    "icao": "PADQ",
    "iata": "ADQ",
    "name": "Kodiak Airport",
    "city": "Kodiak",
    "country": "US",
    "lat": 57.75,
    "lon": -152.4940033,
    "elevation": 78
  },
  {
    "icao": "PADU",
    "iata": "DUT",
    "name": "Tom Madsen (Dutch Harbor) Airport",
    "city": "Unalaska",
    "country": "US",
    "lat": 53.89881,
    "lon": -166.544996,
    "elevation": 22
  },
  {
    "icao": "PAED",
    "iata": "EDF",
    "name": "Elmendorf Air Force Base",
    "city": "Anchorage",
    "country": "US",
    "lat": 61.251709,
    "lon": -149.807097,
    "elevation": 212
  },
  {
    "icao": "PAEH",
    "iata": "EHM",
    "name": "Cape Newenham LRRS Airport",
    "city": "Cape Newenham",
    "country": "US",
    "lat": 58.646400451699996,
    "lon": -162.06300354,
    "elevation": 541
  },
  {
    "icao": "PAEI",
    "iata": "EIL",
    "name": "Eielson Air Force Base",
    "city": "Fairbanks",
    "country": "US",
    "lat": 64.66570282,
    "lon": -147.102005,
    "elevation": 547
  },
  {
    "icao": "PAEM",
    "iata": "EMK",
    "name": "Emmonak Airport",
    "city": "Emmonak",
    "country": "US",
    "lat": 62.78609848,
    "lon": -164.4909973,
    "elevation": 13
  },
  {
    "icao": "PAEN",
    "iata": "ENA",
    "name": "Kenai Municipal Airport",
    "city": "Kenai",
    "country": "US",
    "lat": 60.570946,
    "lon": -151.245174,
    "elevation": 99
  },
  {
    "icao": "PAFA",
    "iata": "FAI",
    "name": "Fairbanks International Airport",
    "city": "Fairbanks",
    "country": "US",
    "lat": 64.815102,
    "lon": -147.856003,
    "elevation": 439
  },
  {
    "icao": "PAFB",
    "iata": "FBK",
    "name": "Ladd Army Airfield",
    "city": "Fairbanks",
    "country": "US",
    "lat": 64.837502,
    "lon": -147.613998,
    "elevation": 454
  },
  {
    "icao": "PAFM",
    "iata": "ABL",
    "name": "Ambler Airport",
    "city": "Ambler",
    "country": "US",
    "lat": 67.105529,
    "lon": -157.855339,
    "elevation": 334
  },
  {
    "icao": "PAGA",
    "iata": "GAL",
    "name": "Edward G. Pitka Sr Airport",
    "city": "Galena",
    "country": "US",
    "lat": 64.736198,
    "lon": -156.936997,
    "elevation": 153
  },
  {
    "icao": "PAGK",
    "iata": "GKN",
    "name": "Gulkana Airport",
    "city": "Gulkana",
    "country": "US",
    "lat": 62.155859,
    "lon": -145.454662,
    "elevation": 1586
  },
  {
    "icao": "PAGM",
    "iata": "GAM",
    "name": "Gambell Airport",
    "city": "Gambell",
    "country": "US",
    "lat": 63.767694,
    "lon": -171.733303,
    "elevation": 27
  },
  {
    "icao": "PAGS",
    "iata": "GST",
    "name": "Gustavus Airport",
    "city": "Gustavus",
    "country": "US",
    "lat": 58.4253006,
    "lon": -135.7070007,
    "elevation": 35
  },
  {
    "icao": "PAHC",
    "iata": "HCR",
    "name": "Holy Cross Airport",
    "city": "Holy Cross",
    "country": "US",
    "lat": 62.18830108642578,
    "lon": -159.77499389648438,
    "elevation": 70
  },
  {
    "icao": "PAHL",
    "iata": "HSL",
    "name": "Huslia Airport",
    "city": "Huslia",
    "country": "US",
    "lat": 65.697899,
    "lon": -156.350998,
    "elevation": 220
  },
  {
    "icao": "PAHN",
    "iata": "HNS",
    "name": "Haines Airport",
    "city": "Haines",
    "country": "US",
    "lat": 59.243921,
    "lon": -135.523925,
    "elevation": 15
  },
  {
    "icao": "PAHO",
    "iata": "HOM",
    "name": "Homer Airport",
    "city": "Homer",
    "country": "US",
    "lat": 59.644456,
    "lon": -151.479235,
    "elevation": 84
  },
  {
    "icao": "PAII",
    "iata": "EGX",
    "name": "Egegik Airport",
    "city": "Egegik",
    "country": "US",
    "lat": 58.184386,
    "lon": -157.374873,
    "elevation": 92
  },
  {
    "icao": "PAIK",
    "iata": "IAN",
    "name": "Bob Baker Memorial Airport",
    "city": "Kiana",
    "country": "US",
    "lat": 66.976128,
    "lon": -160.439014,
    "elevation": 166
  },
  {
    "icao": "PAIL",
    "iata": "ILI",
    "name": "Iliamna Airport",
    "city": "Iliamna",
    "country": "US",
    "lat": 59.754398,
    "lon": -154.910996,
    "elevation": 192
  },
  {
    "icao": "PAIM",
    "iata": "UTO",
    "name": "Indian Mountain LRRS Airport",
    "city": "Utopia Creek",
    "country": "US",
    "lat": 65.992798,
    "lon": -153.703995,
    "elevation": 1273
  },
  {
    "icao": "PAJN",
    "iata": "JNU",
    "name": "Juneau International Airport",
    "city": "Juneau",
    "country": "US",
    "lat": 58.355,
    "lon": -134.576004,
    "elevation": 21
  },
  {
    "icao": "PAKN",
    "iata": "AKN",
    "name": "King Salmon Airport",
    "city": "King Salmon",
    "country": "US",
    "lat": 58.677845,
    "lon": -156.651965,
    "elevation": 73
  },
  {
    "icao": "PAKP",
    "iata": "AKP",
    "name": "Anaktuvuk Pass Airport",
    "city": "Anaktuvuk Pass",
    "country": "US",
    "lat": 68.133598,
    "lon": -151.742996,
    "elevation": 2102
  },
  {
    "icao": "PAKT",
    "iata": "KTN",
    "name": "Ketchikan International Airport",
    "city": "Ketchikan",
    "country": "US",
    "lat": 55.35559845,
    "lon": -131.7140045,
    "elevation": 89
  },
  {
    "icao": "PAKW",
    "iata": "KLW",
    "name": "Klawock Airport",
    "city": "Klawock",
    "country": "US",
    "lat": 55.579201,
    "lon": -133.076004,
    "elevation": 80
  },
  {
    "icao": "PALU",
    "iata": "LUR",
    "name": "Cape Lisburne LRRS Airport",
    "city": "Cape Lisburne",
    "country": "US",
    "lat": 68.875099,
    "lon": -166.110001,
    "elevation": 16
  },
  {
    "icao": "PAMC",
    "iata": "MCG",
    "name": "McGrath Airport",
    "city": "McGrath",
    "country": "US",
    "lat": 62.95289993,
    "lon": -155.6060028,
    "elevation": 341
  },
  {
    "icao": "PAMR",
    "iata": "MRI",
    "name": "Merrill Field",
    "city": "Anchorage",
    "country": "US",
    "lat": 61.212792,
    "lon": -149.843988,
    "elevation": 137
  },
  {
    "icao": "PAMY",
    "iata": "MYU",
    "name": "Mekoryuk Airport",
    "city": "Mekoryuk",
    "country": "US",
    "lat": 60.372338,
    "lon": -166.269751,
    "elevation": 48
  },
  {
    "icao": "PANC",
    "iata": "ANC",
    "name": "Ted Stevens Anchorage International Airport",
    "city": "Anchorage",
    "country": "US",
    "lat": 61.179004,
    "lon": -149.992561,
    "elevation": 152
  },
  {
    "icao": "PANI",
    "iata": "ANI",
    "name": "Aniak Airport",
    "city": "Aniak",
    "country": "US",
    "lat": 61.581600189208984,
    "lon": -159.54299926757812,
    "elevation": 88
  },
  {
    "icao": "PANN",
    "iata": "ENN",
    "name": "Nenana Municipal Airport",
    "city": "Nenana",
    "country": "US",
    "lat": 64.548772,
    "lon": -149.074516,
    "elevation": 362
  },
  {
    "icao": "PANT",
    "iata": "ANN",
    "name": "Annette Island Airport",
    "city": "Metlakatla",
    "country": "US",
    "lat": 55.037663,
    "lon": -131.572609,
    "elevation": 119
  },
  {
    "icao": "PANV",
    "iata": "ANV",
    "name": "Anvik Airport",
    "city": "Anvik",
    "country": "US",
    "lat": 62.646702,
    "lon": -160.190994,
    "elevation": 291
  },
  {
    "icao": "PAOM",
    "iata": "OME",
    "name": "Nome Airport",
    "city": "Nome",
    "country": "US",
    "lat": 64.51219940185547,
    "lon": -165.44500732421875,
    "elevation": 37
  },
  {
    "icao": "PAOR",
    "iata": "ORT",
    "name": "Northway Airport",
    "city": "Northway",
    "country": "US",
    "lat": 62.9613,
    "lon": -141.929001,
    "elevation": 1715
  },
  {
    "icao": "PAOT",
    "iata": "OTZ",
    "name": "Ralph Wien Memorial Airport",
    "city": "Kotzebue",
    "country": "US",
    "lat": 66.88469696,
    "lon": -162.598999,
    "elevation": 14
  },
  {
    "icao": "PAPB",
    "iata": "STG",
    "name": "St George Airport",
    "city": "St George",
    "country": "US",
    "lat": 56.577345,
    "lon": -169.663823,
    "elevation": 125
  },
  {
    "icao": "PAPC",
    "iata": "KPC",
    "name": "Port Clarence Coast Guard Station",
    "city": "Port Clarence",
    "country": "US",
    "lat": 65.2537002563,
    "lon": -166.85899353,
    "elevation": 10
  },
  {
    "icao": "PAPG",
    "iata": "PSG",
    "name": "Petersburg James A Johnson Airport",
    "city": "Petersburg",
    "country": "US",
    "lat": 56.80170059,
    "lon": -132.9450073,
    "elevation": 111
  },
  {
    "icao": "PAPH",
    "iata": "PTH",
    "name": "Port Heiden Airport",
    "city": "Port Heiden",
    "country": "US",
    "lat": 56.957893,
    "lon": -158.630219,
    "elevation": 95
  },
  {
    "icao": "PAPM",
    "iata": "PTU",
    "name": "Platinum Airport",
    "city": "Platinum",
    "country": "US",
    "lat": 59.017675,
    "lon": -161.827927,
    "elevation": 15
  },
  {
    "icao": "PAQT",
    "iata": "NUI",
    "name": "Nuiqsut Airport",
    "city": "Nuiqsut",
    "country": "US",
    "lat": 70.209999,
    "lon": -151.005998,
    "elevation": 38
  },
  {
    "icao": "PARC",
    "iata": "ARC",
    "name": "Arctic Village Airport",
    "city": "Arctic Village",
    "country": "US",
    "lat": 68.1147,
    "lon": -145.578995,
    "elevation": 2092
  },
  {
    "icao": "PARY",
    "iata": "RBY",
    "name": "Ruby Airport",
    "city": "Ruby",
    "country": "US",
    "lat": 64.727203,
    "lon": -155.470001,
    "elevation": 658
  },
  {
    "icao": "PASA",
    "iata": "SVA",
    "name": "Savoonga Airport",
    "city": "Savoonga",
    "country": "US",
    "lat": 63.686401,
    "lon": -170.492996,
    "elevation": 53
  },
  {
    "icao": "PASC",
    "iata": "SCC",
    "name": "Deadhorse Airport",
    "city": "Deadhorse",
    "country": "US",
    "lat": 70.19470215,
    "lon": -148.4649963,
    "elevation": 65
  },
  {
    "icao": "PASD",
    "iata": "SDP",
    "name": "Sand Point Airport",
    "city": "Sand Point",
    "country": "US",
    "lat": 55.313908,
    "lon": -160.522099,
    "elevation": 21
  },
  {
    "icao": "PASI",
    "iata": "SIT",
    "name": "Sitka Rocky Gutierrez Airport",
    "city": "Sitka",
    "country": "US",
    "lat": 57.04710006713867,
    "lon": -135.36199951171875,
    "elevation": 21
  },
  {
    "icao": "PASN",
    "iata": "SNP",
    "name": "St Paul Island Airport",
    "city": "St Paul Island",
    "country": "US",
    "lat": 57.166311,
    "lon": -170.222555,
    "elevation": 63
  },
  {
    "icao": "PASV",
    "iata": "SVW",
    "name": "Sparrevohn LRRS Airport",
    "city": "Sparrevohn",
    "country": "US",
    "lat": 61.09740067,
    "lon": -155.5740051,
    "elevation": 1585
  },
  {
    "icao": "PASX",
    "iata": "SXQ",
    "name": "Soldotna Airport",
    "city": "Soldotna",
    "country": "US",
    "lat": 60.474935,
    "lon": -151.038471,
    "elevation": 113
  },
  {
    "icao": "PASY",
    "iata": "SYA",
    "name": "Eareckson Air Station",
    "city": "Shemya",
    "country": "US",
    "lat": 52.71229935,
    "lon": 174.1139984,
    "elevation": 95
  },
  {
    "icao": "PATK",
    "iata": "TKA",
    "name": "Talkeetna Airport",
    "city": "Talkeetna",
    "country": "US",
    "lat": 62.320499420166,
    "lon": -150.09399414062,
    "elevation": 358
  },
  {
    "icao": "PATL",
    "iata": "TLJ",
    "name": "Tatalina LRRS Airport",
    "city": "Takotna",
    "country": "US",
    "lat": 62.894401550299996,
    "lon": -155.977005005,
    "elevation": 964
  },
  {
    "icao": "PATQ",
    "iata": "ATK",
    "name": "Atqasuk Edward Burnell Sr Memorial Airport",
    "city": "Atqasuk",
    "country": "US",
    "lat": 70.46704,
    "lon": -157.436013,
    "elevation": 96
  },
  {
    "icao": "PAUN",
    "iata": "UNK",
    "name": "Unalakleet Airport",
    "city": "Unalakleet",
    "country": "US",
    "lat": 63.888401,
    "lon": -160.798996,
    "elevation": 27
  },
  {
    "icao": "PAVD",
    "iata": "VDZ",
    "name": "Valdez Pioneer Field",
    "city": "Valdez",
    "country": "US",
    "lat": 61.132712,
    "lon": -146.246567,
    "elevation": 121
  },
  {
    "icao": "PAWD",
    "iata": "SWD",
    "name": "Seward Airport",
    "city": "Seward",
    "country": "US",
    "lat": 60.130478,
    "lon": -149.418612,
    "elevation": 22
  },
  {
    "icao": "PAWG",
    "iata": "WRG",
    "name": "Wrangell Airport",
    "city": "Wrangell",
    "country": "US",
    "lat": 56.48429871,
    "lon": -132.3699951,
    "elevation": 49
  },
  {
    "icao": "PAWI",
    "iata": "AIN",
    "name": "Wainwright Airport",
    "city": "Wainwright",
    "country": "US",
    "lat": 70.638,
    "lon": -159.994995,
    "elevation": 41
  },
  {
    "icao": "PAWS",
    "iata": "WWA",
    "name": "Wasilla Airport",
    "city": "Wasilla",
    "country": "US",
    "lat": 61.571701,
    "lon": -149.539993,
    "elevation": 354
  },
  {
    "icao": "PAYA",
    "iata": "YAK",
    "name": "Yakutat Airport",
    "city": "Yakutat",
    "country": "US",
    "lat": 59.508717,
    "lon": -139.660435,
    "elevation": 33
  },
  {
    "icao": "PCIS",
    "iata": "CIS",
    "name": "Canton Island Airport",
    "city": "Abariringa",
    "country": "KI",
    "lat": -2.7681200504300003,
    "lon": -171.710006714,
    "elevation": 9
  },
  {
    "icao": "PFYU",
    "iata": "FYU",
    "name": "Fort Yukon Airport",
    "city": "Fort Yukon",
    "country": "US",
    "lat": 66.571651,
    "lon": -145.249987,
    "elevation": 433
  },
  {
    "icao": "PGRO",
    "iata": "ROP",
    "name": "Rota International Airport",
    "city": "Rota Island",
    "country": "MP",
    "lat": 14.1743,
    "lon": 145.242996,
    "elevation": 607
  },
  {
    "icao": "PGSN",
    "iata": "SPN",
    "name": "Saipan International Airport",
    "city": "I Fadang, Saipan",
    "country": "MP",
    "lat": 15.119,
    "lon": 145.729004,
    "elevation": 215
  },
  {
    "icao": "PGUA",
    "iata": "UAM",
    "name": "Andersen Air Force Base",
    "city": "Yigo",
    "country": "GU",
    "lat": 13.584,
    "lon": 144.929998,
    "elevation": 627
  },
  {
    "icao": "PGUM",
    "iata": "GUM",
    "name": "Antonio B. Won Pat International Airport",
    "city": "Hagåtña",
    "country": "GU",
    "lat": 13.485,
    "lon": 144.797282,
    "elevation": 298
  },
  {
    "icao": "PGWT",
    "iata": "TIQ",
    "name": "Tinian International Airport",
    "city": "Tinian Island",
    "country": "MP",
    "lat": 14.998101,
    "lon": 145.61923,
    "elevation": 271
  },
  {
    "icao": "PHBK",
    "iata": "BKH",
    "name": "Barking Sands Airport",
    "city": "Kekaha",
    "country": "US",
    "lat": 22.0228,
    "lon": -159.785004,
    "elevation": 23
  },
  {
    "icao": "PHHN",
    "iata": "HNM",
    "name": "Hana Airport",
    "city": "Hana",
    "country": "US",
    "lat": 20.795601,
    "lon": -156.014008,
    "elevation": 78
  },
  {
    "icao": "PHIK",
    "iata": "HIK",
    "name": "Hickam Air Force Base",
    "city": "Honolulu",
    "country": "US",
    "lat": 21.335278,
    "lon": -157.948333,
    "elevation": 13
  },
  {
    "icao": "PHJH",
    "iata": "JHM",
    "name": "Kapalua Airport",
    "city": "Lahaina",
    "country": "US",
    "lat": 20.9629,
    "lon": -156.673004,
    "elevation": 256
  },
  {
    "icao": "PHJR",
    "iata": "JRF",
    "name": "Kalaeloa Airport",
    "city": "Kapolei",
    "country": "US",
    "lat": 21.3074,
    "lon": -158.070009,
    "elevation": 30
  },
  {
    "icao": "PHKO",
    "iata": "KOA",
    "name": "Ellison Onizuka Kona International Airport at Keahole",
    "city": "Kailua-Kona",
    "country": "US",
    "lat": 19.738783,
    "lon": -156.045603,
    "elevation": 47
  },
  {
    "icao": "PHLI",
    "iata": "LIH",
    "name": "Lihue Airport",
    "city": "Lihue",
    "country": "US",
    "lat": 21.976,
    "lon": -159.339005,
    "elevation": 153
  },
  {
    "icao": "PHMK",
    "iata": "MKK",
    "name": "Molokai Airport",
    "city": "Kaunakakai",
    "country": "US",
    "lat": 21.152901,
    "lon": -157.095993,
    "elevation": 454
  },
  {
    "icao": "PHMU",
    "iata": "MUE",
    "name": "Waimea Kohala Airport",
    "city": "Waimea (Kamuela)",
    "country": "US",
    "lat": 20.001301,
    "lon": -155.667999,
    "elevation": 2671
  },
  {
    "icao": "PHNG",
    "iata": "NGF",
    "name": "Kaneohe Bay MCAS (Marion E. Carl Field) Airport",
    "city": "Kaneohe",
    "country": "US",
    "lat": 21.4505,
    "lon": -157.768005,
    "elevation": 24
  },
  {
    "icao": "PHNL",
    "iata": "HNL",
    "name": "Daniel K Inouye International Airport",
    "city": "Honolulu, Oahu",
    "country": "US",
    "lat": 21.32062,
    "lon": -157.924228,
    "elevation": 13
  },
  {
    "icao": "PHNY",
    "iata": "LNY",
    "name": "Lanai Airport",
    "city": "Lanai City",
    "country": "US",
    "lat": 20.785675,
    "lon": -156.951324,
    "elevation": 1308
  },
  {
    "icao": "PHOG",
    "iata": "OGG",
    "name": "Kahului International Airport",
    "city": "Kahului",
    "country": "US",
    "lat": 20.896263,
    "lon": -156.431837,
    "elevation": 54
  },
  {
    "icao": "PHTO",
    "iata": "ITO",
    "name": "Hilo International Airport",
    "city": "Hilo",
    "country": "US",
    "lat": 19.721399,
    "lon": -155.048004,
    "elevation": 38
  },
  {
    "icao": "PKMJ",
    "iata": "MAJ",
    "name": "Marshall Islands International Airport",
    "city": "Majuro Atoll",
    "country": "MH",
    "lat": 7.06476,
    "lon": 171.272003,
    "elevation": 6
  },
  {
    "icao": "PKWA",
    "iata": "KWA",
    "name": "Bucholz Army Air Field",
    "city": "Kwajalein",
    "country": "MH",
    "lat": 8.720120429992676,
    "lon": 167.73199462890625,
    "elevation": 9
  },
  {
    "icao": "PLCH",
    "iata": "CXI",
    "name": "Cassidy International Airport",
    "city": "Kiritimati",
    "country": "KI",
    "lat": 1.986278,
    "lon": -157.350011,
    "elevation": 5
  },
  {
    "icao": "PMDY",
    "iata": "MDY",
    "name": "Henderson Field",
    "city": "Sand Island",
    "country": "UM",
    "lat": 28.2017,
    "lon": -177.380997,
    "elevation": 13
  },
  {
    "icao": "PPIZ",
    "iata": "PIZ",
    "name": "Point Lay LRRS Airport",
    "city": "Point Lay",
    "country": "US",
    "lat": 69.732903,
    "lon": -163.005005,
    "elevation": 22
  },
  {
    "icao": "PTKK",
    "iata": "TKK",
    "name": "Chuuk International Airport",
    "city": "Weno Island",
    "country": "FM",
    "lat": 7.461870193481445,
    "lon": 151.84300231933594,
    "elevation": 11
  },
  {
    "icao": "PTPN",
    "iata": "PNI",
    "name": "Pohnpei International Airport",
    "city": "Pohnpei Island",
    "country": "FM",
    "lat": 6.985099792480469,
    "lon": 158.20899963378906,
    "elevation": 10
  },
  {
    "icao": "PTRO",
    "iata": "ROR",
    "name": "Palau International Airport",
    "city": "Babelthuap Island",
    "country": "PW",
    "lat": 7.36731,
    "lon": 134.544236,
    "elevation": 176
  },
  {
    "icao": "PTSA",
    "iata": "KSA",
    "name": "Kosrae International Airport",
    "city": "Okat",
    "country": "FM",
    "lat": 5.35698,
    "lon": 162.957993,
    "elevation": 11
  },
  {
    "icao": "PTYA",
    "iata": "YAP",
    "name": "Yap International Airport",
    "city": "Yap Island",
    "country": "FM",
    "lat": 9.49891,
    "lon": 138.082993,
    "elevation": 91
  },
  {
    "icao": "PWAK",
    "iata": "AWK",
    "name": "Wake Island Airfield",
    "city": "Wake Island",
    "country": "UM",
    "lat": 19.282437,
    "lon": 166.636637,
    "elevation": 14
  },
  {
    "icao": "RCBS",
    "iata": "KNH",
    "name": "Kinmen Airport",
    "city": "Shang-I",
    "country": "TW",
    "lat": 24.4279,
    "lon": 118.359001,
    "elevation": 93
  },
  {
    "icao": "RCFG",
    "iata": "LZN",
    "name": "Matsu Nangan Airport",
    "city": "Matsu (Nangan)",
    "country": "TW",
    "lat": 26.159656,
    "lon": 119.958376,
    "elevation": 232
  },
  {
    "icao": "RCFN",
    "iata": "TTT",
    "name": "Taitung Airport",
    "city": "Taitung City",
    "country": "TW",
    "lat": 22.7549991607666,
    "lon": 121.10199737548828,
    "elevation": 143
  },
  {
    "icao": "RCKH",
    "iata": "KHH",
    "name": "Kaohsiung International Airport",
    "city": "Kaohsiung (Xiaogang)",
    "country": "TW",
    "lat": 22.577101,
    "lon": 120.349998,
    "elevation": 31
  },
  {
    "icao": "RCKU",
    "iata": "CYI",
    "name": "Chiayi Airport",
    "city": "Shuishang",
    "country": "TW",
    "lat": 23.462577,
    "lon": 120.390544,
    "elevation": 85
  },
  {
    "icao": "RCKW",
    "iata": "HCN",
    "name": "Hengchun Airport",
    "city": "Hengchun",
    "country": "TW",
    "lat": 22.0411,
    "lon": 120.730003,
    "elevation": 46
  },
  {
    "icao": "RCLY",
    "iata": "KYD",
    "name": "Lanyu Airport",
    "city": "Orchid Island",
    "country": "TW",
    "lat": 22.027000427246094,
    "lon": 121.53500366210938,
    "elevation": 44
  },
  {
    "icao": "RCMQ",
    "iata": "RMQ",
    "name": "Taichung International Airport / Ching Chuang Kang Air Base",
    "city": "Taichung (Qingshui)",
    "country": "TW",
    "lat": 24.2647,
    "lon": 120.621002,
    "elevation": 663
  },
  {
    "icao": "RCMT",
    "iata": "MFK",
    "name": "Matsu Beigan Airport",
    "city": "Matsu (Beigan)",
    "country": "TW",
    "lat": 26.224199,
    "lon": 120.002998,
    "elevation": 41
  },
  {
    "icao": "RCNN",
    "iata": "TNN",
    "name": "Tainan International Airport / Tainan Air Base",
    "city": "Tainan (Rende)",
    "country": "TW",
    "lat": 22.950399,
    "lon": 120.206001,
    "elevation": 63
  },
  {
    "icao": "RCPO",
    "iata": "HSZ",
    "name": "Hsinchu Air Base",
    "city": "Hsinchu City",
    "country": "TW",
    "lat": 24.8180007935,
    "lon": 120.939002991,
    "elevation": 26
  },
  {
    "icao": "RCQC",
    "iata": "MZG",
    "name": "Penghu Magong Airport",
    "city": "Huxi",
    "country": "TW",
    "lat": 23.568701,
    "lon": 119.627998,
    "elevation": 103
  },
  {
    "icao": "RCSQ",
    "iata": "PIF",
    "name": "Pingtung Air Force Base North",
    "city": "Pingtung",
    "country": "TW",
    "lat": 22.700199,
    "lon": 120.482002,
    "elevation": 97
  },
  {
    "icao": "RCSS",
    "iata": "TSA",
    "name": "Taipei Songshan Airport",
    "city": "Taipei (Songshan)",
    "country": "TW",
    "lat": 25.069401,
    "lon": 121.552002,
    "elevation": 18
  },
  {
    "icao": "RCTP",
    "iata": "TPE",
    "name": "Taiwan Taoyuan International Airport",
    "city": "Taoyuan",
    "country": "TW",
    "lat": 25.0777,
    "lon": 121.233002,
    "elevation": 106
  },
  {
    "icao": "RCYU",
    "iata": "HUN",
    "name": "Hualien Airport",
    "city": "Hualien City",
    "country": "TW",
    "lat": 24.023099899291992,
    "lon": 121.61799621582031,
    "elevation": 52
  },
  {
    "icao": "RJAA",
    "iata": "NRT",
    "name": "Narita International Airport",
    "city": "Narita",
    "country": "JP",
    "lat": 35.764702,
    "lon": 140.386002,
    "elevation": 141
  },
  {
    "icao": "RJAF",
    "iata": "MMJ",
    "name": "Shinshu-Matsumoto Airport",
    "city": "Matsumoto",
    "country": "JP",
    "lat": 36.166801,
    "lon": 137.923004,
    "elevation": 2182
  },
  {
    "icao": "RJAH",
    "iata": "IBR",
    "name": "Ibaraki Airport / JASDF Hyakuri Air Base",
    "city": "Omitama",
    "country": "JP",
    "lat": 36.181099,
    "lon": 140.414993,
    "elevation": 105
  },
  {
    "icao": "RJAW",
    "iata": "IWO",
    "name": "Ioto (Iwo Jima) Airbase",
    "city": "Ogasawara",
    "country": "JP",
    "lat": 24.784153,
    "lon": 141.32261,
    "elevation": 384
  },
  {
    "icao": "RJBB",
    "iata": "KIX",
    "name": "Kansai International Airport",
    "city": "Osaka",
    "country": "JP",
    "lat": 34.427299,
    "lon": 135.244003,
    "elevation": 26
  },
  {
    "icao": "RJBD",
    "iata": "SHM",
    "name": "Nanki Shirahama Airport",
    "city": "Shirahama",
    "country": "JP",
    "lat": 33.6622009277,
    "lon": 135.363998413,
    "elevation": 298
  },
  {
    "icao": "RJBE",
    "iata": "UKB",
    "name": "Kobe Airport",
    "city": "Kobe",
    "country": "JP",
    "lat": 34.6328010559082,
    "lon": 135.2239990234375,
    "elevation": 22
  },
  {
    "icao": "RJBT",
    "iata": "TJH",
    "name": "Konotori Tajima Airport",
    "city": "Toyooka",
    "country": "JP",
    "lat": 35.512798,
    "lon": 134.787003,
    "elevation": 584
  },
  {
    "icao": "RJCB",
    "iata": "OBO",
    "name": "Tokachi-Obihiro Airport",
    "city": "Obihiro",
    "country": "JP",
    "lat": 42.7332992554,
    "lon": 143.216995239,
    "elevation": 505
  },
  {
    "icao": "RJCC",
    "iata": "CTS",
    "name": "New Chitose Airport",
    "city": "Sapporo",
    "country": "JP",
    "lat": 42.7752,
    "lon": 141.692001,
    "elevation": 82
  },
  {
    "icao": "RJCH",
    "iata": "HKD",
    "name": "Hakodate Airport",
    "city": "Hakodate",
    "country": "JP",
    "lat": 41.77,
    "lon": 140.822006,
    "elevation": 151
  },
  {
    "icao": "RJCK",
    "iata": "KUH",
    "name": "Kushiro Airport",
    "city": "Kushiro",
    "country": "JP",
    "lat": 43.041,
    "lon": 144.192993,
    "elevation": 327
  },
  {
    "icao": "RJCM",
    "iata": "MMB",
    "name": "Memanbetsu Airport",
    "city": "Ōzora",
    "country": "JP",
    "lat": 43.8805999756,
    "lon": 144.164001465,
    "elevation": 135
  },
  {
    "icao": "RJCN",
    "iata": "SHB",
    "name": "Nakashibetsu Airport",
    "city": "Nakashibetsu",
    "country": "JP",
    "lat": 43.5774993896,
    "lon": 144.960006714,
    "elevation": 234
  },
  {
    "icao": "RJCO",
    "iata": "OKD",
    "name": "Sapporo Okadama Airport",
    "city": "Sapporo",
    "country": "JP",
    "lat": 43.117447,
    "lon": 141.38134,
    "elevation": 25
  },
  {
    "icao": "RJCW",
    "iata": "WKJ",
    "name": "Wakkanai Airport",
    "city": "Wakkanai",
    "country": "JP",
    "lat": 45.4042015076,
    "lon": 141.800994873,
    "elevation": 30
  },
  {
    "icao": "RJDB",
    "iata": "IKI",
    "name": "Iki Airport",
    "city": "Iki",
    "country": "JP",
    "lat": 33.7490005493,
    "lon": 129.785003662,
    "elevation": 41
  },
  {
    "icao": "RJDC",
    "iata": "UBJ",
    "name": "Yamaguchi Ube Airport",
    "city": "Ube",
    "country": "JP",
    "lat": 33.930000305200004,
    "lon": 131.279006958,
    "elevation": 23
  },
  {
    "icao": "RJDT",
    "iata": "TSJ",
    "name": "Tsushima Airport",
    "city": "Tsushima",
    "country": "JP",
    "lat": 34.2849006653,
    "lon": 129.330993652,
    "elevation": 213
  },
  {
    "icao": "RJEB",
    "iata": "MBE",
    "name": "Monbetsu Airport",
    "city": "Monbetsu",
    "country": "JP",
    "lat": 44.303901672399995,
    "lon": 143.404006958,
    "elevation": 80
  },
  {
    "icao": "RJEC",
    "iata": "AKJ",
    "name": "Asahikawa Airport",
    "city": "Higashikagura",
    "country": "JP",
    "lat": 43.670799,
    "lon": 142.447006,
    "elevation": 721
  },
  {
    "icao": "RJEO",
    "iata": "OIR",
    "name": "Okushiri Airport",
    "city": "Okushiri Island",
    "country": "JP",
    "lat": 42.0717010498,
    "lon": 139.432998657,
    "elevation": 161
  },
  {
    "icao": "RJER",
    "iata": "RIS",
    "name": "Rishiri Airport",
    "city": "Rishiri",
    "country": "JP",
    "lat": 45.2420005798,
    "lon": 141.186004639,
    "elevation": 112
  },
  {
    "icao": "RJFC",
    "iata": "KUM",
    "name": "Yakushima Airport",
    "city": "Yakushima",
    "country": "JP",
    "lat": 30.385599,
    "lon": 130.658997,
    "elevation": 124
  },
  {
    "icao": "RJFE",
    "iata": "FUJ",
    "name": "Fukue Airport",
    "city": "Goto",
    "country": "JP",
    "lat": 32.666302,
    "lon": 128.832993,
    "elevation": 273
  },
  {
    "icao": "RJFF",
    "iata": "FUK",
    "name": "Fukuoka Airport",
    "city": "Fukuoka",
    "country": "JP",
    "lat": 33.585899353027344,
    "lon": 130.4510040283203,
    "elevation": 32
  },
  {
    "icao": "RJFG",
    "iata": "TNE",
    "name": "New Tanegashima Airport",
    "city": "Tanegashima",
    "country": "JP",
    "lat": 30.605100631699997,
    "lon": 130.990997314,
    "elevation": 768
  },
  {
    "icao": "RJFK",
    "iata": "KOJ",
    "name": "Kagoshima Airport",
    "city": "Kagoshima",
    "country": "JP",
    "lat": 31.8034,
    "lon": 130.718994,
    "elevation": 906
  },
  {
    "icao": "RJFM",
    "iata": "KMI",
    "name": "Miyazaki Airport",
    "city": "Miyazaki",
    "country": "JP",
    "lat": 31.877199173,
    "lon": 131.449005127,
    "elevation": 20
  },
  {
    "icao": "RJFO",
    "iata": "OIT",
    "name": "Oita Airport",
    "city": "Oita",
    "country": "JP",
    "lat": 33.479400634799994,
    "lon": 131.736999512,
    "elevation": 19
  },
  {
    "icao": "RJFR",
    "iata": "KKJ",
    "name": "Kitakyushu Airport",
    "city": "Kitakyushu",
    "country": "JP",
    "lat": 33.845901,
    "lon": 131.035004,
    "elevation": 21
  },
  {
    "icao": "RJFS",
    "iata": "HSG",
    "name": "Saga Airport",
    "city": "Saga",
    "country": "JP",
    "lat": 33.149700164799995,
    "lon": 130.302001953,
    "elevation": 6
  },
  {
    "icao": "RJFT",
    "iata": "KMJ",
    "name": "Kumamoto Airport",
    "city": "Kumamoto",
    "country": "JP",
    "lat": 32.83729934692383,
    "lon": 130.85499572753906,
    "elevation": 642
  },
  {
    "icao": "RJFU",
    "iata": "NGS",
    "name": "Nagasaki Airport",
    "city": "Nagasaki",
    "country": "JP",
    "lat": 32.916901,
    "lon": 129.914001,
    "elevation": 15
  },
  {
    "icao": "RJGG",
    "iata": "NGO",
    "name": "Chubu Centrair International Airport",
    "city": "Tokoname",
    "country": "JP",
    "lat": 34.858398,
    "lon": 136.804993,
    "elevation": 15
  },
  {
    "icao": "RJKA",
    "iata": "ASJ",
    "name": "Amami Airport",
    "city": "Amami",
    "country": "JP",
    "lat": 28.430599212646484,
    "lon": 129.71299743652344,
    "elevation": 27
  },
  {
    "icao": "RJKB",
    "iata": "OKE",
    "name": "Okinoerabu Airport",
    "city": "Wadomari",
    "country": "JP",
    "lat": 27.431604,
    "lon": 128.705564,
    "elevation": 101
  },
  {
    "icao": "RJKI",
    "iata": "KKX",
    "name": "Kikai Airport",
    "city": "Kikai",
    "country": "JP",
    "lat": 28.321300506599997,
    "lon": 129.927993774,
    "elevation": 21
  },
  {
    "icao": "RJKN",
    "iata": "TKN",
    "name": "Tokunoshima Airport",
    "city": "Amagi",
    "country": "JP",
    "lat": 27.836382,
    "lon": 128.881356,
    "elevation": 17
  },
  {
    "icao": "RJNA",
    "iata": "NKM",
    "name": "Nagoya Airport / JASDF Komaki Air Base",
    "city": "Nagoya",
    "country": "JP",
    "lat": 35.255759,
    "lon": 136.924095,
    "elevation": 52
  },
  {
    "icao": "RJNF",
    "iata": "FKJ",
    "name": "Fukui Airport",
    "city": "Fukui",
    "country": "JP",
    "lat": 36.142799,
    "lon": 136.223999,
    "elevation": 19
  },
  {
    "icao": "RJNG",
    "iata": "QGU",
    "name": "Gifu Airport",
    "city": "Gifu",
    "country": "JP",
    "lat": 35.3941,
    "lon": 136.869995,
    "elevation": 128
  },
  {
    "icao": "RJNK",
    "iata": "KMQ",
    "name": "Komatsu Airport / JASDF Komatsu Air Base",
    "city": "Kanazawa",
    "country": "JP",
    "lat": 36.3946,
    "lon": 136.406998,
    "elevation": 36
  },
  {
    "icao": "RJNO",
    "iata": "OKI",
    "name": "Oki Global Geopark Airport",
    "city": "Okinoshima",
    "country": "JP",
    "lat": 36.178388,
    "lon": 133.323566,
    "elevation": 311
  },
  {
    "icao": "RJNS",
    "iata": "FSZ",
    "name": "Mount Fuji Shizuoka Airport",
    "city": "Makinohara / Shimada",
    "country": "JP",
    "lat": 34.796043,
    "lon": 138.187752,
    "elevation": 433
  },
  {
    "icao": "RJNT",
    "iata": "TOY",
    "name": "Toyama Airport",
    "city": "Toyama",
    "country": "JP",
    "lat": 36.64830017089844,
    "lon": 137.18800354003906,
    "elevation": 95
  },
  {
    "icao": "RJNW",
    "iata": "NTQ",
    "name": "Noto Satoyama Airport",
    "city": "Wajima",
    "country": "JP",
    "lat": 37.293098,
    "lon": 136.962006,
    "elevation": 718
  },
  {
    "icao": "RJOA",
    "iata": "HIJ",
    "name": "Hiroshima Airport",
    "city": "Hiroshima",
    "country": "JP",
    "lat": 34.4361,
    "lon": 132.919006,
    "elevation": 1088
  },
  {
    "icao": "RJOB",
    "iata": "OKJ",
    "name": "Okayama Momotaro Airport",
    "city": "Okayama",
    "country": "JP",
    "lat": 34.756901,
    "lon": 133.854996,
    "elevation": 806
  },
  {
    "icao": "RJOC",
    "iata": "IZO",
    "name": "Izumo Enmusubi Airport",
    "city": "Izumo",
    "country": "JP",
    "lat": 35.413601,
    "lon": 132.889999,
    "elevation": 15
  },
  {
    "icao": "RJOH",
    "iata": "YGJ",
    "name": "Yonago Kitaro Airport / JASDF Miho Air Base",
    "city": "Yonago",
    "country": "JP",
    "lat": 35.492199,
    "lon": 133.235992,
    "elevation": 20
  },
  {
    "icao": "RJOI",
    "iata": "IWK",
    "name": "Iwakuni Kintaikyo Airport / Marine Corps Air Station Iwakuni",
    "city": "Iwakuni",
    "country": "JP",
    "lat": 34.146333,
    "lon": 132.247238,
    "elevation": 7
  },
  {
    "icao": "RJOK",
    "iata": "KCZ",
    "name": "Kochi Ryoma Airport",
    "city": "Nankoku",
    "country": "JP",
    "lat": 33.546101,
    "lon": 133.669006,
    "elevation": 42
  },
  {
    "icao": "RJOM",
    "iata": "MYJ",
    "name": "Matsuyama Airport",
    "city": "Matsuyama",
    "country": "JP",
    "lat": 33.82720184326172,
    "lon": 132.6999969482422,
    "elevation": 25
  },
  {
    "icao": "RJOO",
    "iata": "ITM",
    "name": "Osaka International Airport",
    "city": "Osaka",
    "country": "JP",
    "lat": 34.7855,
    "lon": 135.438004,
    "elevation": 50
  },
  {
    "icao": "RJOR",
    "iata": "TTJ",
    "name": "Tottori Sand Dunes Conan Airport",
    "city": "Tottori",
    "country": "JP",
    "lat": 35.530102,
    "lon": 134.167007,
    "elevation": 65
  },
  {
    "icao": "RJOS",
    "iata": "TKS",
    "name": "Tokushima Awaodori Airport / JMSDF Tokushima Air Base",
    "city": "Tokushima",
    "country": "JP",
    "lat": 34.132801,
    "lon": 134.606995,
    "elevation": 26
  },
  {
    "icao": "RJOT",
    "iata": "TAK",
    "name": "Takamatsu Airport",
    "city": "Takamatsu",
    "country": "JP",
    "lat": 34.214199066199996,
    "lon": 134.01600647,
    "elevation": 607
  },
  {
    "icao": "RJOW",
    "iata": "IWJ",
    "name": "Iwami Airport",
    "city": "Masuda",
    "country": "JP",
    "lat": 34.676399231,
    "lon": 131.789993286,
    "elevation": 184
  },
  {
    "icao": "RJSA",
    "iata": "AOJ",
    "name": "Aomori Airport",
    "city": "Aomori",
    "country": "JP",
    "lat": 40.73469924926758,
    "lon": 140.6909942626953,
    "elevation": 664
  },
  {
    "icao": "RJSC",
    "iata": "GAJ",
    "name": "Yamagata Airport",
    "city": "Higashine",
    "country": "JP",
    "lat": 38.4119,
    "lon": 140.371002,
    "elevation": 353
  },
  {
    "icao": "RJSD",
    "iata": "SDS",
    "name": "Sado Airport",
    "city": "Sado",
    "country": "JP",
    "lat": 38.0601997375,
    "lon": 138.414001465,
    "elevation": 88
  },
  {
    "icao": "RJSF",
    "iata": "FKS",
    "name": "Fukushima Airport",
    "city": "Sukagawa",
    "country": "JP",
    "lat": 37.22740173339844,
    "lon": 140.43099975585938,
    "elevation": 1221
  },
  {
    "icao": "RJSH",
    "iata": "HHE",
    "name": "JMSDF Hachinohe Air Base / Hachinohe Airport",
    "city": "Hachinohe",
    "country": "JP",
    "lat": 40.551181,
    "lon": 141.465428,
    "elevation": 152
  },
  {
    "icao": "RJSI",
    "iata": "HNA",
    "name": "Iwate Hanamaki Airport",
    "city": "Hanamaki",
    "country": "JP",
    "lat": 39.4286,
    "lon": 141.134995,
    "elevation": 297
  },
  {
    "icao": "RJSK",
    "iata": "AXT",
    "name": "Akita Airport",
    "city": "Akita",
    "country": "JP",
    "lat": 39.615601,
    "lon": 140.218994,
    "elevation": 313
  },
  {
    "icao": "RJSM",
    "iata": "MSJ",
    "name": "Misawa Airport / Misawa Air Base",
    "city": "Misawa",
    "country": "JP",
    "lat": 40.703201,
    "lon": 141.367996,
    "elevation": 119
  },
  {
    "icao": "RJSN",
    "iata": "KIJ",
    "name": "Niigata Airport",
    "city": "Niigata",
    "country": "JP",
    "lat": 37.9558982849,
    "lon": 139.121002197,
    "elevation": 29
  },
  {
    "icao": "RJSR",
    "iata": "ONJ",
    "name": "Odate Noshiro Airport",
    "city": "Kitaakita",
    "country": "JP",
    "lat": 40.191898,
    "lon": 140.371002,
    "elevation": 292
  },
  {
    "icao": "RJSS",
    "iata": "SDJ",
    "name": "Sendai Airport",
    "city": "Natori",
    "country": "JP",
    "lat": 38.139702,
    "lon": 140.917007,
    "elevation": 15
  },
  {
    "icao": "RJSY",
    "iata": "SYO",
    "name": "Shonai Airport",
    "city": "Shonai",
    "country": "JP",
    "lat": 38.812199,
    "lon": 139.787003,
    "elevation": 86
  },
  {
    "icao": "RJTA",
    "iata": "NJA",
    "name": "JMSDF Atsugi Air Base / Naval Air Facility Atsugi",
    "city": "Ayase / Yamato",
    "country": "JP",
    "lat": 35.454601,
    "lon": 139.449997,
    "elevation": 205
  },
  {
    "icao": "RJTH",
    "iata": "HAC",
    "name": "Hachijojima Airport",
    "city": "Hachijojima",
    "country": "JP",
    "lat": 33.115002,
    "lon": 139.785995,
    "elevation": 303
  },
  {
    "icao": "RJTO",
    "iata": "OIM",
    "name": "Oshima Airport",
    "city": "Izu Oshima",
    "country": "JP",
    "lat": 34.782001495399996,
    "lon": 139.36000061,
    "elevation": 130
  },
  {
    "icao": "RJTQ",
    "iata": "MYE",
    "name": "Miyakejima Airport",
    "city": "Miyakejima",
    "country": "JP",
    "lat": 34.073600769,
    "lon": 139.559997559,
    "elevation": 67
  },
  {
    "icao": "RJTT",
    "iata": "HND",
    "name": "Tokyo Haneda International Airport",
    "city": "Tokyo",
    "country": "JP",
    "lat": 35.552299,
    "lon": 139.779999,
    "elevation": 35
  },
  {
    "icao": "RJTY",
    "iata": "OKO",
    "name": "Yokota Air Base",
    "city": "Fussa",
    "country": "JP",
    "lat": 35.748501,
    "lon": 139.348007,
    "elevation": 463
  },
  {
    "icao": "RKJB",
    "iata": "MWX",
    "name": "Muan International Airport",
    "city": "Muan (Piseo-ri)",
    "country": "KR",
    "lat": 34.991406,
    "lon": 126.382814,
    "elevation": 35
  },
  {
    "icao": "RKJJ",
    "iata": "KWJ",
    "name": "Gwangju Airport",
    "city": "Gwangju",
    "country": "KR",
    "lat": 35.123173,
    "lon": 126.805444,
    "elevation": 39
  },
  {
    "icao": "RKJK",
    "iata": "KUV",
    "name": "Gunsan Airport / Gunsan Air Base",
    "city": "Gunsan",
    "country": "KR",
    "lat": 35.903801,
    "lon": 126.615997,
    "elevation": 29
  },
  {
    "icao": "RKJY",
    "iata": "RSU",
    "name": "Yeosu Airport",
    "city": "Yeosu",
    "country": "KR",
    "lat": 34.84230041503906,
    "lon": 127.61699676513672,
    "elevation": 53
  },
  {
    "icao": "RKNN",
    "iata": "KAG",
    "name": "Gangneung Airport (K-18)",
    "city": "Gangneung",
    "country": "KR",
    "lat": 37.753601,
    "lon": 128.943915,
    "elevation": 35
  },
  {
    "icao": "RKNW",
    "iata": "WJU",
    "name": "Wonju Airport / Hoengseong Air Base (K-38/K-46)",
    "city": "Wonju",
    "country": "KR",
    "lat": 37.437113,
    "lon": 127.960051,
    "elevation": 329
  },
  {
    "icao": "RKNY",
    "iata": "YNY",
    "name": "Yangyang International Airport",
    "city": "Gonghang-ro",
    "country": "KR",
    "lat": 38.061298,
    "lon": 128.669006,
    "elevation": 241
  },
  {
    "icao": "RKPC",
    "iata": "CJU",
    "name": "Jeju International Airport",
    "city": "Jeju City",
    "country": "KR",
    "lat": 33.512058,
    "lon": 126.492548,
    "elevation": 118
  },
  {
    "icao": "RKPD",
    "iata": "JDG",
    "name": "Jeongseok Airport",
    "city": "Jeju Island",
    "country": "KR",
    "lat": 33.3996009827,
    "lon": 126.711997986,
    "elevation": 1171
  },
  {
    "icao": "RKPK",
    "iata": "PUS",
    "name": "Gimhae International Airport",
    "city": "Busan",
    "country": "KR",
    "lat": 35.179501,
    "lon": 128.938004,
    "elevation": 6
  },
  {
    "icao": "RKPS",
    "iata": "HIN",
    "name": "Sacheon Airport / Sacheon Air Base",
    "city": "Sacheon",
    "country": "KR",
    "lat": 35.088591,
    "lon": 128.071747,
    "elevation": 25
  },
  {
    "icao": "RKPU",
    "iata": "USN",
    "name": "Ulsan Airport",
    "city": "Ulsan",
    "country": "KR",
    "lat": 35.59349823,
    "lon": 129.352005005,
    "elevation": 45
  },
  {
    "icao": "RKSI",
    "iata": "ICN",
    "name": "Incheon International Airport",
    "city": "Seoul",
    "country": "KR",
    "lat": 37.469101,
    "lon": 126.450996,
    "elevation": 23
  },
  {
    "icao": "RKSM",
    "iata": "SSN",
    "name": "Seoul Air Base (K-16)",
    "city": "Seongnam",
    "country": "KR",
    "lat": 37.444744,
    "lon": 127.112718,
    "elevation": 92
  },
  {
    "icao": "RKSO",
    "iata": "OSN",
    "name": "Osan Air Base",
    "city": "Pyeongtaek",
    "country": "KR",
    "lat": 37.091457,
    "lon": 127.029448,
    "elevation": 38
  },
  {
    "icao": "RKSS",
    "iata": "GMP",
    "name": "Gimpo International Airport",
    "city": "Seoul",
    "country": "KR",
    "lat": 37.5583,
    "lon": 126.791,
    "elevation": 59
  },
  {
    "icao": "RKSW",
    "iata": "SWU",
    "name": "Suwon Airport",
    "city": "Suwon",
    "country": "KR",
    "lat": 37.239399,
    "lon": 127.007004,
    "elevation": 88
  },
  {
    "icao": "RKTH",
    "iata": "KPO",
    "name": "Pohang Airport (G-815/K-3)",
    "city": "Pohang",
    "country": "KR",
    "lat": 35.987955,
    "lon": 129.420383,
    "elevation": 70
  },
  {
    "icao": "RKTI",
    "iata": "JWO",
    "name": "Jungwon Air Base/Chungju Airport",
    "city": "Gimseang-ro",
    "country": "KR",
    "lat": 37.03024,
    "lon": 127.886353,
    "elevation": 281
  },
  {
    "icao": "RKTN",
    "iata": "TAE",
    "name": "Daegu Airport",
    "city": "Daegu",
    "country": "KR",
    "lat": 35.896872,
    "lon": 128.65531,
    "elevation": 116
  },
  {
    "icao": "RKTU",
    "iata": "CJJ",
    "name": "Cheongju International Airport/Cheongju Air Base (K-59/G-513)",
    "city": "Cheongju",
    "country": "KR",
    "lat": 36.717008,
    "lon": 127.498741,
    "elevation": 191
  },
  {
    "icao": "RKTY",
    "iata": "YEC",
    "name": "Yecheon Airbase",
    "city": "Yecheon-ri",
    "country": "KR",
    "lat": 36.630373,
    "lon": 128.34971,
    "elevation": 354
  },
  {
    "icao": "ROAH",
    "iata": "OKA",
    "name": "Naha Airport / JASDF Naha Air Base",
    "city": "Naha",
    "country": "JP",
    "lat": 26.195801,
    "lon": 127.646004,
    "elevation": 12
  },
  {
    "icao": "RODN",
    "iata": "DNA",
    "name": "Kadena Air Base",
    "city": "Okinawa",
    "country": "JP",
    "lat": 26.351667,
    "lon": 127.769444,
    "elevation": 143
  },
  {
    "icao": "ROIG",
    "iata": "ISG",
    "name": "New Ishigaki Airport",
    "city": "Ishigaki",
    "country": "JP",
    "lat": 24.396389,
    "lon": 124.245,
    "elevation": 102
  },
  {
    "icao": "ROKJ",
    "iata": "UEO",
    "name": "Kumejima Airport",
    "city": "Kumejima",
    "country": "JP",
    "lat": 26.363445,
    "lon": 126.71384,
    "elevation": 23
  },
  {
    "icao": "ROMD",
    "iata": "MMD",
    "name": "Minamidaito Airport",
    "city": "Minamidaito",
    "country": "JP",
    "lat": 25.8465,
    "lon": 131.263,
    "elevation": 167
  },
  {
    "icao": "ROMY",
    "iata": "MMY",
    "name": "Miyako Airport",
    "city": "Miyakojima",
    "country": "JP",
    "lat": 24.782801,
    "lon": 125.294998,
    "elevation": 150
  },
  {
    "icao": "RORE",
    "iata": "IEJ",
    "name": "Iejima Airport",
    "city": "Ie",
    "country": "JP",
    "lat": 26.722537,
    "lon": 127.786801,
    "elevation": 246
  },
  {
    "icao": "RORK",
    "iata": "KTD",
    "name": "Kitadaito Airport",
    "city": "Kitadaitōjima",
    "country": "JP",
    "lat": 25.9447002411,
    "lon": 131.32699585,
    "elevation": 80
  },
  {
    "icao": "RORS",
    "iata": "SHI",
    "name": "Shimojishima Airport",
    "city": "Miyakojima",
    "country": "JP",
    "lat": 24.8267,
    "lon": 125.144997,
    "elevation": 54
  },
  {
    "icao": "RORT",
    "iata": "TRA",
    "name": "Tarama Airport",
    "city": "Tarama",
    "country": "JP",
    "lat": 24.653793,
    "lon": 124.675453,
    "elevation": 36
  },
  {
    "icao": "RORY",
    "iata": "RNJ",
    "name": "Yoron Airport",
    "city": "Yoron",
    "country": "JP",
    "lat": 27.043847,
    "lon": 128.401648,
    "elevation": 52
  },
  {
    "icao": "ROYN",
    "iata": "OGN",
    "name": "Yonaguni Airport",
    "city": "Yonaguni",
    "country": "JP",
    "lat": 24.467298,
    "lon": 122.979827,
    "elevation": 70
  },
  {
    "icao": "RPLB",
    "iata": "SFS",
    "name": "Subic Bay International Airport / Naval Air Station Cubi Point",
    "city": "Olongapo",
    "country": "PH",
    "lat": 14.7944,
    "lon": 120.271004,
    "elevation": 64
  },
  {
    "icao": "RPLC",
    "iata": "CRK",
    "name": "Clark International Airport / Clark Air Base",
    "city": "Mabalacat",
    "country": "PH",
    "lat": 15.186,
    "lon": 120.559998,
    "elevation": 484
  },
  {
    "icao": "RPLH",
    "iata": "LLC",
    "name": "Cagayan North International Airport",
    "city": "Lal-lo",
    "country": "PH",
    "lat": 18.182388,
    "lon": 121.745853,
    "elevation": 148
  },
  {
    "icao": "RPLI",
    "iata": "LAO",
    "name": "Laoag International Airport",
    "city": "Laoag City",
    "country": "PH",
    "lat": 18.176121,
    "lon": 120.531034,
    "elevation": 25
  },
  {
    "icao": "RPLK",
    "iata": "DRP",
    "name": "Bicol International Airport",
    "city": "Legazpi",
    "country": "PH",
    "lat": 13.111915,
    "lon": 123.676829,
    "elevation": 319
  },
  {
    "icao": "RPLL",
    "iata": "MNL",
    "name": "Ninoy Aquino International Airport",
    "city": "Manila (Pasay)",
    "country": "PH",
    "lat": 14.5086,
    "lon": 121.019997,
    "elevation": 75
  },
  {
    "icao": "RPLS",
    "iata": "SGL",
    "name": "Danilo Atienza Air Base",
    "city": "Cavite",
    "country": "PH",
    "lat": 14.4954,
    "lon": 120.903999,
    "elevation": 8
  },
  {
    "icao": "RPLU",
    "iata": "LBX",
    "name": "Lubang Airport",
    "city": "Lubang",
    "country": "PH",
    "lat": 13.8554,
    "lon": 120.105003,
    "elevation": 43
  },
  {
    "icao": "RPMA",
    "iata": "AAV",
    "name": "Allah Valley Airport",
    "city": "Surallah",
    "country": "PH",
    "lat": 6.367903,
    "lon": 124.752431,
    "elevation": 659
  },
  {
    "icao": "RPMC",
    "iata": "CBO",
    "name": "Cotabato (Awang) Airport",
    "city": "Datu Odin Sinsuat",
    "country": "PH",
    "lat": 7.164753,
    "lon": 124.209938,
    "elevation": 189
  },
  {
    "icao": "RPMD",
    "iata": "DVO",
    "name": "Francisco Bangoy International Airport",
    "city": "Davao",
    "country": "PH",
    "lat": 7.12552,
    "lon": 125.646004,
    "elevation": 96
  },
  {
    "icao": "RPME",
    "iata": "BXU",
    "name": "Bancasi Airport",
    "city": "Butuan",
    "country": "PH",
    "lat": 8.9515,
    "lon": 125.4788,
    "elevation": 141
  },
  {
    "icao": "RPMF",
    "iata": "BPH",
    "name": "Bislig Airport",
    "city": "Bislig",
    "country": "PH",
    "lat": 8.195052,
    "lon": 126.321015,
    "elevation": 12
  },
  {
    "icao": "RPMG",
    "iata": "DPL",
    "name": "Dipolog Airport",
    "city": "Dipolog",
    "country": "PH",
    "lat": 8.601983,
    "lon": 123.341875,
    "elevation": 12
  },
  {
    "icao": "RPMH",
    "iata": "CGM",
    "name": "Camiguin Airport",
    "city": "Mambajao",
    "country": "PH",
    "lat": 9.253894,
    "lon": 124.709115,
    "elevation": 53
  },
  {
    "icao": "RPMJ",
    "iata": "JOL",
    "name": "Jolo Airport",
    "city": "Jolo",
    "country": "PH",
    "lat": 6.05367,
    "lon": 121.011002,
    "elevation": 118
  },
  {
    "icao": "RPMN",
    "iata": "TWT",
    "name": "Sanga Sanga Airport",
    "city": "Bongao",
    "country": "PH",
    "lat": 5.048196,
    "lon": 119.743338,
    "elevation": 15
  },
  {
    "icao": "RPMO",
    "iata": "OZC",
    "name": "Labo Airport",
    "city": "Ozamiz",
    "country": "PH",
    "lat": 8.17851,
    "lon": 123.842003,
    "elevation": 75
  },
  {
    "icao": "RPMP",
    "iata": "PAG",
    "name": "Pagadian Airport",
    "city": "Pagadian",
    "country": "PH",
    "lat": 7.825632,
    "lon": 123.459635,
    "elevation": 5
  },
  {
    "icao": "RPMQ",
    "iata": "MXI",
    "name": "Mati National Airport",
    "city": "Mati",
    "country": "PH",
    "lat": 6.949091,
    "lon": 126.27368,
    "elevation": 156
  },
  {
    "icao": "RPMR",
    "iata": "GES",
    "name": "General Santos International Airport",
    "city": "General Santos",
    "country": "PH",
    "lat": 6.05800008774,
    "lon": 125.096000671,
    "elevation": 505
  },
  {
    "icao": "RPMS",
    "iata": "SUG",
    "name": "Surigao Airport",
    "city": "Surigao City",
    "country": "PH",
    "lat": 9.755838325629998,
    "lon": 125.480947495,
    "elevation": 20
  },
  {
    "icao": "RPMW",
    "iata": "TDG",
    "name": "Tandag Airport",
    "city": "Tandag",
    "country": "PH",
    "lat": 9.072002,
    "lon": 126.17132,
    "elevation": 16
  },
  {
    "icao": "RPMY",
    "iata": "CGY",
    "name": "Laguindingan International Airport",
    "city": "Laguindingan",
    "country": "PH",
    "lat": 8.612203,
    "lon": 124.456496,
    "elevation": 190
  },
  {
    "icao": "RPMZ",
    "iata": "ZAM",
    "name": "Zamboanga International Airport",
    "city": "Zamboanga",
    "country": "PH",
    "lat": 6.92242,
    "lon": 122.059998,
    "elevation": 33
  },
  {
    "icao": "RPSP",
    "iata": "TAG",
    "name": "Bohol-Panglao International Airport",
    "city": "Panglao",
    "country": "PH",
    "lat": 9.573045,
    "lon": 123.770143,
    "elevation": 42
  },
  {
    "icao": "RPUB",
    "iata": "BAG",
    "name": "Loakan Airport",
    "city": "Baguio",
    "country": "PH",
    "lat": 16.375034,
    "lon": 120.619949,
    "elevation": 4251
  },
  {
    "icao": "RPUD",
    "iata": "DTE",
    "name": "Daet Airport",
    "city": "Daet",
    "country": "PH",
    "lat": 14.1292,
    "lon": 122.980003,
    "elevation": 10
  },
  {
    "icao": "RPUH",
    "iata": "SJI",
    "name": "San Jose Airport",
    "city": "San Jose",
    "country": "PH",
    "lat": 12.361499786399998,
    "lon": 121.04699707,
    "elevation": 14
  },
  {
    "icao": "RPUM",
    "iata": "MBO",
    "name": "Mamburao Airport",
    "city": "Mamburao",
    "country": "PH",
    "lat": 13.208048,
    "lon": 120.605457,
    "elevation": 13
  },
  {
    "icao": "RPUN",
    "iata": "WNP",
    "name": "Naga Airport",
    "city": "Naga",
    "country": "PH",
    "lat": 13.58489990234375,
    "lon": 123.2699966430664,
    "elevation": 142
  },
  {
    "icao": "RPUO",
    "iata": "BSO",
    "name": "Basco Airport",
    "city": "Basco",
    "country": "PH",
    "lat": 20.4513,
    "lon": 121.980003,
    "elevation": 291
  },
  {
    "icao": "RPUR",
    "iata": "BQA",
    "name": "Dr Juan C Angara Airport",
    "city": "Baler",
    "country": "PH",
    "lat": 15.729309,
    "lon": 121.500034,
    "elevation": 108
  },
  {
    "icao": "RPUS",
    "iata": "SFE",
    "name": "San Fernando Airport",
    "city": "San Fernando",
    "country": "PH",
    "lat": 16.5956,
    "lon": 120.303001,
    "elevation": 13
  },
  {
    "icao": "RPUT",
    "iata": "TUG",
    "name": "Tuguegarao Airport",
    "city": "Tuguegarao City",
    "country": "PH",
    "lat": 17.6433676823,
    "lon": 121.733150482,
    "elevation": 70
  },
  {
    "icao": "RPUV",
    "iata": "VRC",
    "name": "Virac Airport",
    "city": "Virac",
    "country": "PH",
    "lat": 13.576399803161621,
    "lon": 124.20600128173828,
    "elevation": 121
  },
  {
    "icao": "RPUW",
    "iata": "MRQ",
    "name": "Marinduque Airport",
    "city": "Gasan",
    "country": "PH",
    "lat": 13.361000061035156,
    "lon": 121.82599639892578,
    "elevation": 32
  },
  {
    "icao": "RPUY",
    "iata": "CYZ",
    "name": "Cauayan Airport",
    "city": "Cauayan City",
    "country": "PH",
    "lat": 16.9298992157,
    "lon": 121.752998352,
    "elevation": 200
  },
  {
    "icao": "RPVA",
    "iata": "TAC",
    "name": "Daniel Z. Romualdez Airport",
    "city": "Tacloban City",
    "country": "PH",
    "lat": 11.227761,
    "lon": 125.027783,
    "elevation": 10
  },
  {
    "icao": "RPVB",
    "iata": "BCD",
    "name": "Bacolod-Silay Airport",
    "city": "Bacolod City",
    "country": "PH",
    "lat": 10.7764,
    "lon": 123.014999,
    "elevation": 82
  },
  {
    "icao": "RPVC",
    "iata": "CYP",
    "name": "Calbayog Airport",
    "city": "Calbayog City",
    "country": "PH",
    "lat": 12.072574,
    "lon": 124.54508,
    "elevation": 12
  },
  {
    "icao": "RPVD",
    "iata": "DGT",
    "name": "Sibulan Airport",
    "city": "Dumaguete City",
    "country": "PH",
    "lat": 9.334183,
    "lon": 123.30191,
    "elevation": 15
  },
  {
    "icao": "RPVE",
    "iata": "MPH",
    "name": "Godofredo P. Ramos Airport",
    "city": "Caticlan",
    "country": "PH",
    "lat": 11.9245,
    "lon": 121.954002,
    "elevation": 7
  },
  {
    "icao": "RPVF",
    "iata": "CRM",
    "name": "Catarman National Airport",
    "city": "Catarman",
    "country": "PH",
    "lat": 12.50161,
    "lon": 124.635258,
    "elevation": 6
  },
  {
    "icao": "RPVI",
    "iata": "ILO",
    "name": "Iloilo International Airport",
    "city": "Cabatuan",
    "country": "PH",
    "lat": 10.833017,
    "lon": 122.493358,
    "elevation": 27
  },
  {
    "icao": "RPVJ",
    "iata": "MBT",
    "name": "Moises R. Espinosa Airport",
    "city": "Masbate",
    "country": "PH",
    "lat": 12.369682,
    "lon": 123.630095,
    "elevation": 49
  },
  {
    "icao": "RPVK",
    "iata": "KLO",
    "name": "Kalibo International Airport",
    "city": "Kalibo",
    "country": "PH",
    "lat": 11.679400444,
    "lon": 122.375999451,
    "elevation": 14
  },
  {
    "icao": "RPVM",
    "iata": "CEB",
    "name": "Mactan Cebu International Airport",
    "city": "Lapu-Lapu City",
    "country": "PH",
    "lat": 10.309261,
    "lon": 123.97974,
    "elevation": 31
  },
  {
    "icao": "RPVO",
    "iata": "OMC",
    "name": "Ormoc Airport",
    "city": "Ormoc City",
    "country": "PH",
    "lat": 11.057715,
    "lon": 124.565622,
    "elevation": 83
  },
  {
    "icao": "RPVP",
    "iata": "PPS",
    "name": "Puerto Princesa International Airport / PAF Antonio Bautista Air Base",
    "city": "Puerto Princesa",
    "country": "PH",
    "lat": 9.74212,
    "lon": 118.759003,
    "elevation": 71
  },
  {
    "icao": "RPVR",
    "iata": "RXS",
    "name": "Roxas Airport",
    "city": "Roxas City",
    "country": "PH",
    "lat": 11.597700119018555,
    "lon": 122.75199890136719,
    "elevation": 10
  },
  {
    "icao": "RPVS",
    "iata": "EUQ",
    "name": "Evelio Javier Airport",
    "city": "San Jose",
    "country": "PH",
    "lat": 10.766644,
    "lon": 121.932506,
    "elevation": 23
  },
  {
    "icao": "RPVU",
    "iata": "TBH",
    "name": "Tugdan Airport",
    "city": "Tablas Island",
    "country": "PH",
    "lat": 12.3109998703,
    "lon": 122.084999084,
    "elevation": 10
  },
  {
    "icao": "RPVV",
    "iata": "USU",
    "name": "Francisco B. Reyes (Busuanga) Airport",
    "city": "Coron",
    "country": "PH",
    "lat": 12.121865,
    "lon": 120.100801,
    "elevation": 148
  },
  {
    "icao": "OERS",
    "iata": "RSI",
    "name": "Red Sea International Airport",
    "city": "Hanak",
    "country": "SA",
    "lat": 25.627975,
    "lon": 37.088914,
    "elevation": 140
  },
  {
    "icao": "RU-0089",
    "iata": "NOI",
    "name": "Krymsk Air Base",
    "city": "Krymsk",
    "country": "RU",
    "lat": 44.962905,
    "lon": 37.999071,
    "elevation": 66
  },
  {
    "icao": "RU-10076",
    "iata": "LNX",
    "name": "Smolensk North Airport",
    "city": "Smolensk",
    "country": "RU",
    "lat": 54.824,
    "lon": 32.025,
    "elevation": 820
  },
  {
    "icao": "RU-10077",
    "iata": "EIK",
    "name": "Yeysk Airport",
    "city": "Yeysk",
    "country": "RU",
    "lat": 46.68,
    "lon": 38.21,
    "elevation": 60
  },
  {
    "icao": "SAAC",
    "iata": "COC",
    "name": "Comodoro Pierrestegui Airport",
    "city": "Concordia",
    "country": "AR",
    "lat": -31.2969,
    "lon": -57.9966,
    "elevation": 112
  },
  {
    "icao": "SAAG",
    "iata": "GHU",
    "name": "Gualeguaychu Airport",
    "city": "Gualeguaychu",
    "country": "AR",
    "lat": -33.005567,
    "lon": -58.612833,
    "elevation": 75
  },
  {
    "icao": "SAAP",
    "iata": "PRA",
    "name": "General Urquiza Airport",
    "city": "Parana",
    "country": "AR",
    "lat": -31.7948,
    "lon": -60.4804,
    "elevation": 242
  },
  {
    "icao": "SAAR",
    "iata": "ROS",
    "name": "Rosario Islas Malvinas International Airport",
    "city": "Rosario",
    "country": "AR",
    "lat": -32.9036,
    "lon": -60.785,
    "elevation": 85
  },
  {
    "icao": "SAAV",
    "iata": "SFN",
    "name": "Sauce Viejo Airport",
    "city": "Santa Fe",
    "country": "AR",
    "lat": -31.7117,
    "lon": -60.8117,
    "elevation": 55
  },
  {
    "icao": "SABE",
    "iata": "AEP",
    "name": "Jorge Newbery Airpark",
    "city": "Buenos Aires",
    "country": "AR",
    "lat": -34.5592,
    "lon": -58.4156,
    "elevation": 18
  },
  {
    "icao": "SACO",
    "iata": "COR",
    "name": "Ingeniero Ambrosio Taravella Airport",
    "city": "Cordoba",
    "country": "AR",
    "lat": -31.323601,
    "lon": -64.208,
    "elevation": 1604
  },
  {
    "icao": "SADL",
    "iata": "LPG",
    "name": "La Plata Airport",
    "city": "La Plata",
    "country": "AR",
    "lat": -34.9722,
    "lon": -57.8947,
    "elevation": 72
  },
  {
    "icao": "SADP",
    "iata": "EPA",
    "name": "El Palomar Airport",
    "city": "El Palomar",
    "country": "AR",
    "lat": -34.6099,
    "lon": -58.6126,
    "elevation": 59
  },
  {
    "icao": "SAEZ",
    "iata": "EZE",
    "name": "Minister Pistarini International Airport",
    "city": "Buenos Aires (Ezeiza)",
    "country": "AR",
    "lat": -34.8222,
    "lon": -58.5358,
    "elevation": 67
  },
  {
    "icao": "SAHS",
    "iata": "RDS",
    "name": "Rincon De Los Sauces Airport",
    "city": "Rincon de los Sauces",
    "country": "AR",
    "lat": -37.390598,
    "lon": -68.904198,
    "elevation": 1968
  },
  {
    "icao": "SAHZ",
    "iata": "APZ",
    "name": "Zapala Airport",
    "city": "Zapala",
    "country": "AR",
    "lat": -38.975498,
    "lon": -70.113602,
    "elevation": 3330
  },
  {
    "icao": "SAME",
    "iata": "MDZ",
    "name": "El Plumerillo Airport",
    "city": "Mendoza",
    "country": "AR",
    "lat": -32.8316993713,
    "lon": -68.7929000854,
    "elevation": 2310
  },
  {
    "icao": "SAMM",
    "iata": "LGS",
    "name": "Comodoro D.R. Salomón Airport",
    "city": "Malargue",
    "country": "AR",
    "lat": -35.493599,
    "lon": -69.574303,
    "elevation": 4685
  },
  {
    "icao": "SAMR",
    "iata": "AFA",
    "name": "Suboficial Ay Santiago Germano Airport",
    "city": "San Rafael",
    "country": "AR",
    "lat": -34.588299,
    "lon": -68.4039,
    "elevation": 2470
  },
  {
    "icao": "SANC",
    "iata": "CTC",
    "name": "Coronel Felipe Varela International Airport",
    "city": "Catamarca",
    "country": "AR",
    "lat": -28.593117,
    "lon": -65.7512,
    "elevation": 1522
  },
  {
    "icao": "SANE",
    "iata": "SDE",
    "name": "Vicecomodoro Angel D. La Paz Aragonés Airport",
    "city": "Santiago del Estero",
    "country": "AR",
    "lat": -27.765556335399996,
    "lon": -64.3099975586,
    "elevation": 656
  },
  {
    "icao": "SANL",
    "iata": "IRJ",
    "name": "Capitan V A Almonacid Airport",
    "city": "La Rioja",
    "country": "AR",
    "lat": -29.381599,
    "lon": -66.795799,
    "elevation": 1437
  },
  {
    "icao": "SANR",
    "iata": "RHD",
    "name": "Termas de Río Hondo international Airport",
    "city": "Termas de Río Hondo",
    "country": "AR",
    "lat": -27.4966,
    "lon": -64.93595,
    "elevation": 935
  },
  {
    "icao": "SANT",
    "iata": "TUC",
    "name": "Teniente Benjamin Matienzo Airport",
    "city": "San Miguel de Tucumán",
    "country": "AR",
    "lat": -26.8409,
    "lon": -65.104897,
    "elevation": 1493
  },
  {
    "icao": "SANU",
    "iata": "UAQ",
    "name": "Domingo Faustino Sarmiento Airport",
    "city": "San Juan",
    "country": "AR",
    "lat": -31.571501,
    "lon": -68.418198,
    "elevation": 1958
  },
  {
    "icao": "SAOC",
    "iata": "RCU",
    "name": "Area De Material Airport",
    "city": "Rio Cuarto",
    "country": "AR",
    "lat": -33.085098,
    "lon": -64.261299,
    "elevation": 1380
  },
  {
    "icao": "SAOD",
    "iata": "VDR",
    "name": "Villa Dolores Airport",
    "city": "Villa Dolores",
    "country": "AR",
    "lat": -31.9452,
    "lon": -65.146301,
    "elevation": 1847
  },
  {
    "icao": "SAOR",
    "iata": "VME",
    "name": "Villa Reynolds Airport",
    "city": "Villa Mercedes",
    "country": "AR",
    "lat": -33.7299003601,
    "lon": -65.3873977661,
    "elevation": 1591
  },
  {
    "icao": "SAOU",
    "iata": "LUQ",
    "name": "Brigadier Mayor D Cesar Raul Ojeda Airport",
    "city": "San Luis",
    "country": "AR",
    "lat": -33.273201,
    "lon": -66.3564,
    "elevation": 2328
  },
  {
    "icao": "SARC",
    "iata": "CNQ",
    "name": "Corrientes Airport",
    "city": "Corrientes",
    "country": "AR",
    "lat": -27.4455,
    "lon": -58.7619,
    "elevation": 202
  },
  {
    "icao": "SARE",
    "iata": "RES",
    "name": "Resistencia International Airport",
    "city": "Resistencia",
    "country": "AR",
    "lat": -27.45,
    "lon": -59.0561,
    "elevation": 173
  },
  {
    "icao": "SARF",
    "iata": "FMA",
    "name": "Formosa National Airport",
    "city": "Formosa",
    "country": "AR",
    "lat": -26.2127,
    "lon": -58.2281,
    "elevation": 193
  },
  {
    "icao": "SARI",
    "iata": "IGR",
    "name": "Cataratas Del Iguazú International Airport",
    "city": "Puerto Iguazu",
    "country": "AR",
    "lat": -25.737301,
    "lon": -54.4734,
    "elevation": 916
  },
  {
    "icao": "SARL",
    "iata": "AOL",
    "name": "Paso De Los Libres Airport",
    "city": "Paso de los Libres",
    "country": "AR",
    "lat": -29.6894,
    "lon": -57.1521,
    "elevation": 230
  },
  {
    "icao": "SARM",
    "iata": "MCS",
    "name": "Monte Caseros Airport",
    "city": "Monte Caseros",
    "country": "AR",
    "lat": -30.2719,
    "lon": -57.6402,
    "elevation": 170
  },
  {
    "icao": "SARP",
    "iata": "PSS",
    "name": "Libertador Gral D Jose De San Martin Airport",
    "city": "Posadas",
    "country": "AR",
    "lat": -27.3858,
    "lon": -55.9707,
    "elevation": 430
  },
  {
    "icao": "SASA",
    "iata": "SLA",
    "name": "Martin Miguel De Guemes International Airport",
    "city": "Salta",
    "country": "AR",
    "lat": -24.856000900299996,
    "lon": -65.4861984253,
    "elevation": 4088
  },
  {
    "icao": "SASJ",
    "iata": "JUJ",
    "name": "Gobernador Horacio Guzman International Airport",
    "city": "San Salvador de Jujuy",
    "country": "AR",
    "lat": -24.392799,
    "lon": -65.097801,
    "elevation": 3019
  },
  {
    "icao": "SASO",
    "iata": "ORA",
    "name": "Orán Airport",
    "city": "Orán",
    "country": "AR",
    "lat": -23.1528,
    "lon": -64.329201,
    "elevation": 1171
  },
  {
    "icao": "SAST",
    "iata": "TTG",
    "name": "General Enrique Mosconi Airport",
    "city": "Tartagal",
    "country": "AR",
    "lat": -22.616877,
    "lon": -63.793015,
    "elevation": 1472
  },
  {
    "icao": "SATG",
    "iata": "OYA",
    "name": "Goya Airport",
    "city": "Goya",
    "country": "AR",
    "lat": -29.1058,
    "lon": -59.2189,
    "elevation": 128
  },
  {
    "icao": "SATR",
    "iata": "RCQ",
    "name": "Reconquista Airport",
    "city": "Reconquista",
    "country": "AR",
    "lat": -29.210278,
    "lon": -59.683333,
    "elevation": 160
  },
  {
    "icao": "SATU",
    "iata": "UZU",
    "name": "Curuzu Cuatia Airport",
    "city": "Curuzu Cuatia",
    "country": "AR",
    "lat": -29.7706,
    "lon": -57.9789,
    "elevation": 229
  },
  {
    "icao": "SAVB",
    "iata": "EHL",
    "name": "El Bolsón Airfield",
    "city": "El Bolsón",
    "country": "AR",
    "lat": -41.943199,
    "lon": -71.532303,
    "elevation": 1141
  },
  {
    "icao": "SAVC",
    "iata": "CRD",
    "name": "General E. Mosconi Airport",
    "city": "Comodoro Rivadavia",
    "country": "AR",
    "lat": -45.7853,
    "lon": -67.4655,
    "elevation": 189
  },
  {
    "icao": "SAVE",
    "iata": "EQS",
    "name": "Esquel Brigadier Antonio Parodi International Airport",
    "city": "Esquel",
    "country": "AR",
    "lat": -42.908001,
    "lon": -71.139503,
    "elevation": 2621
  },
  {
    "icao": "SAVH",
    "iata": "LHS",
    "name": "Las Heras Airport",
    "city": "Las Heras",
    "country": "AR",
    "lat": -46.538517,
    "lon": -68.965323,
    "elevation": 1082
  },
  {
    "icao": "SAVT",
    "iata": "REL",
    "name": "Almirante Marco Andres Zar Airport",
    "city": "Rawson",
    "country": "AR",
    "lat": -43.2105,
    "lon": -65.2703,
    "elevation": 141
  },
  {
    "icao": "SAVV",
    "iata": "VDM",
    "name": "Gobernador Castello Airport",
    "city": "Viedma / Carmen de Patagones",
    "country": "AR",
    "lat": -40.8692,
    "lon": -63.0004,
    "elevation": 20
  },
  {
    "icao": "SAVY",
    "iata": "PMY",
    "name": "El Tehuelche Airport",
    "city": "Puerto Madryn",
    "country": "AR",
    "lat": -42.7592,
    "lon": -65.1027,
    "elevation": 427
  },
  {
    "icao": "SAWC",
    "iata": "FTE",
    "name": "El Calafate - Commander Armando Tola International Airport",
    "city": "El Calafate",
    "country": "AR",
    "lat": -50.2803,
    "lon": -72.053101,
    "elevation": 669
  },
  {
    "icao": "SAWD",
    "iata": "PUD",
    "name": "Puerto Deseado Airport",
    "city": "Puerto Deseado",
    "country": "AR",
    "lat": -47.7353,
    "lon": -65.9041,
    "elevation": 268
  },
  {
    "icao": "SAWE",
    "iata": "RGA",
    "name": "Gobernador Ramón Trejo Noel International Airport",
    "city": "Rio Grande",
    "country": "AR",
    "lat": -53.7777,
    "lon": -67.7494,
    "elevation": 65
  },
  {
    "icao": "SAWG",
    "iata": "RGL",
    "name": "Piloto Civil N. Fernández Airport",
    "city": "Rio Gallegos",
    "country": "AR",
    "lat": -51.6089,
    "lon": -69.3126,
    "elevation": 61
  },
  {
    "icao": "SAWH",
    "iata": "USH",
    "name": "Ushuaia - Malvinas Argentinas International Airport",
    "city": "Ushuaia",
    "country": "AR",
    "lat": -54.8433,
    "lon": -68.2958,
    "elevation": 102
  },
  {
    "icao": "SAWJ",
    "iata": "ULA",
    "name": "Capitan D Daniel Vazquez Airport",
    "city": "San Julian",
    "country": "AR",
    "lat": -49.306816,
    "lon": -67.802596,
    "elevation": 203
  },
  {
    "icao": "SAWP",
    "iata": "PMQ",
    "name": "Perito Moreno Jalil Hamer Airport",
    "city": "Perito Moreno",
    "country": "AR",
    "lat": -46.537899,
    "lon": -70.978699,
    "elevation": 1410
  },
  {
    "icao": "SAWU",
    "iata": "RZA",
    "name": "Santa Cruz Airport",
    "city": "Puerto Santa Cruz",
    "country": "AR",
    "lat": -50.0165,
    "lon": -68.5792,
    "elevation": 364
  },
  {
    "icao": "SAZB",
    "iata": "BHI",
    "name": "Comandante Espora Airport",
    "city": "Bahía Blanca",
    "country": "AR",
    "lat": -38.725,
    "lon": -62.1693,
    "elevation": 246
  },
  {
    "icao": "SAZG",
    "iata": "GPO",
    "name": "General Pico Airport",
    "city": "General Pico",
    "country": "AR",
    "lat": -35.696201,
    "lon": -63.758301,
    "elevation": 459
  },
  {
    "icao": "SAZH",
    "iata": "OYO",
    "name": "Tres Arroyos Airport",
    "city": "Tres Arroyos",
    "country": "AR",
    "lat": -38.3869,
    "lon": -60.3297,
    "elevation": 400
  },
  {
    "icao": "SAZL",
    "iata": "SST",
    "name": "Santa Teresita Airport",
    "city": "Santa Teresita",
    "country": "AR",
    "lat": -36.5423,
    "lon": -56.7218,
    "elevation": 9
  },
  {
    "icao": "SAZM",
    "iata": "MDQ",
    "name": "Ástor Piazzola International Airport",
    "city": "Mar del Plata",
    "country": "AR",
    "lat": -37.9342,
    "lon": -57.5733,
    "elevation": 72
  },
  {
    "icao": "SAZN",
    "iata": "NQN",
    "name": "Presidente Peron Airport",
    "city": "Neuquen",
    "country": "AR",
    "lat": -38.949001,
    "lon": -68.155701,
    "elevation": 895
  },
  {
    "icao": "SAZO",
    "iata": "NEC",
    "name": "Necochea Airport",
    "city": "Necochea",
    "country": "AR",
    "lat": -38.490746,
    "lon": -58.816337,
    "elevation": 72
  },
  {
    "icao": "SAZP",
    "iata": "PEH",
    "name": "Comodoro Pedro Zanni Airport",
    "city": "Pehuajó",
    "country": "AR",
    "lat": -35.8446,
    "lon": -61.8576,
    "elevation": 278
  },
  {
    "icao": "SAZR",
    "iata": "RSA",
    "name": "Santa Rosa Airport",
    "city": "Santa Rosa",
    "country": "AR",
    "lat": -36.588299,
    "lon": -64.275703,
    "elevation": 630
  },
  {
    "icao": "SAZS",
    "iata": "BRC",
    "name": "San Carlos de Bariloche Airport",
    "city": "San Carlos de Bariloche",
    "country": "AR",
    "lat": -41.151199,
    "lon": -71.157501,
    "elevation": 2774
  },
  {
    "icao": "SAZT",
    "iata": "TDL",
    "name": "Héroes de Malvinas Airport",
    "city": "Tandil",
    "country": "AR",
    "lat": -37.234634,
    "lon": -59.228647,
    "elevation": 574
  },
  {
    "icao": "SAZV",
    "iata": "VLG",
    "name": "Villa Gesell Airport",
    "city": "Villa Gesell",
    "country": "AR",
    "lat": -37.2354,
    "lon": -57.0292,
    "elevation": 32
  },
  {
    "icao": "SAZW",
    "iata": "CUT",
    "name": "Cutral-Co Airport",
    "city": "Cutral-Co",
    "country": "AR",
    "lat": -38.939701,
    "lon": -69.264603,
    "elevation": 2132
  },
  {
    "icao": "SAZY",
    "iata": "CPC",
    "name": "Aviador C. Campos Airport",
    "city": "Chapelco/San Martin de los Andes",
    "country": "AR",
    "lat": -40.075401,
    "lon": -71.137299,
    "elevation": 2569
  },
  {
    "icao": "SBAA",
    "iata": "CDJ",
    "name": "Conceição do Araguaia Airport",
    "city": "Conceição do Araguaia",
    "country": "BR",
    "lat": -8.34835,
    "lon": -49.301498,
    "elevation": 653
  },
  {
    "icao": "SBAC",
    "iata": "ARX",
    "name": "Aracati Dragão do Mar Regional Airport",
    "city": "Aracati",
    "country": "BR",
    "lat": -4.568896,
    "lon": -37.805135,
    "elevation": 128
  },
  {
    "icao": "SBAE",
    "iata": "JTC",
    "name": "Bauru/Arealva–Moussa Nakhal Tobias State Airport",
    "city": "Bauru",
    "country": "BR",
    "lat": -22.160755,
    "lon": -49.070325,
    "elevation": 1962
  },
  {
    "icao": "SBAQ",
    "iata": "AQA",
    "name": "Araraquara Airport",
    "city": "Araraquara",
    "country": "BR",
    "lat": -21.812,
    "lon": -48.132999,
    "elevation": 2334
  },
  {
    "icao": "SBAR",
    "iata": "AJU",
    "name": "Aracaju - Santa Maria International Airport",
    "city": "Aracaju",
    "country": "BR",
    "lat": -10.984,
    "lon": -37.070301,
    "elevation": 139
  },
  {
    "icao": "SBAT",
    "iata": "AFL",
    "name": "Piloto Osvaldo Marques Dias Airport",
    "city": "Alta Floresta",
    "country": "BR",
    "lat": -9.866389,
    "lon": -56.106298,
    "elevation": 948
  },
  {
    "icao": "SBAU",
    "iata": "ARU",
    "name": "Araçatuba Airport",
    "city": "Araçatuba",
    "country": "BR",
    "lat": -21.141479,
    "lon": -50.424575,
    "elevation": 1361
  },
  {
    "icao": "SBAX",
    "iata": "AAX",
    "name": "Romeu Zema Airport",
    "city": "Araxá",
    "country": "BR",
    "lat": -19.5632,
    "lon": -46.9604,
    "elevation": 3276
  },
  {
    "icao": "SBBE",
    "iata": "BEL",
    "name": "Val de Cans/Júlio Cezar Ribeiro International Airport",
    "city": "Belém",
    "country": "BR",
    "lat": -1.379279,
    "lon": -48.476207,
    "elevation": 54
  },
  {
    "icao": "SBBG",
    "iata": "BGX",
    "name": "Comandante Gustavo Kraemer Airport",
    "city": "Bagé",
    "country": "BR",
    "lat": -31.390499,
    "lon": -54.112202,
    "elevation": 600
  },
  {
    "icao": "SBBH",
    "iata": "PLU",
    "name": "Pampulha - Carlos Drummond de Andrade Airport",
    "city": "Belo Horizonte",
    "country": "BR",
    "lat": -19.85074,
    "lon": -43.950316,
    "elevation": 2589
  },
  {
    "icao": "SBBI",
    "iata": "BFH",
    "name": "Bacacheri Airport",
    "city": "Curitiba",
    "country": "BR",
    "lat": -25.4051,
    "lon": -49.231998,
    "elevation": 3057
  },
  {
    "icao": "SBBR",
    "iata": "BSB",
    "name": "Presidente Juscelino Kubitschek International Airport",
    "city": "Brasília",
    "country": "BR",
    "lat": -15.869167,
    "lon": -47.920834,
    "elevation": 3497
  },
  {
    "icao": "SNBA",
    "iata": "BAT",
    "name": "Chafei Amsei Airport",
    "city": "Barretos",
    "country": "BR",
    "lat": -20.584631,
    "lon": -48.594125,
    "elevation": 1903
  },
  {
    "icao": "SBBV",
    "iata": "BVB",
    "name": "Atlas Brasil Cantanhede Airport",
    "city": "Boa Vista",
    "country": "BR",
    "lat": 2.845855,
    "lon": -60.690944,
    "elevation": 276
  },
  {
    "icao": "SBBW",
    "iata": "BPG",
    "name": "Barra do Garças Airport",
    "city": "Barra do Garças",
    "country": "BR",
    "lat": -15.861417,
    "lon": -52.389008,
    "elevation": 1147
  },
  {
    "icao": "SSBZ",
    "iata": "BZC",
    "name": "Umberto Modiano Airport",
    "city": "Cabo Frio",
    "country": "BR",
    "lat": -22.770881,
    "lon": -41.96308,
    "elevation": 10
  },
  {
    "icao": "SBCA",
    "iata": "CAC",
    "name": "Coronel Adalberto Mendes da Silva Airport",
    "city": "Cascavel",
    "country": "BR",
    "lat": -25.000323,
    "lon": -53.501208,
    "elevation": 2481
  },
  {
    "icao": "SBCF",
    "iata": "CNF",
    "name": "Tancredo Neves International Airport",
    "city": "Belo Horizonte",
    "country": "BR",
    "lat": -19.63571,
    "lon": -43.966928,
    "elevation": 2721
  },
  {
    "icao": "SBCG",
    "iata": "CGR",
    "name": "Campo Grande Airport",
    "city": "Campo Grande",
    "country": "BR",
    "lat": -20.469998,
    "lon": -54.673988,
    "elevation": 1833
  },
  {
    "icao": "SBCH",
    "iata": "XAP",
    "name": "Serafin Enoss Bertaso Airport",
    "city": "Chapecó",
    "country": "BR",
    "lat": -27.134199,
    "lon": -52.656601,
    "elevation": 2154
  },
  {
    "icao": "SBCI",
    "iata": "CLN",
    "name": "Brig. Lysias Augusto Rodrigues Airport",
    "city": "Carolina",
    "country": "BR",
    "lat": -7.32044,
    "lon": -47.458698,
    "elevation": 565
  },
  {
    "icao": "SBCJ",
    "iata": "CKS",
    "name": "Carajás Airport",
    "city": "Parauapebas",
    "country": "BR",
    "lat": -6.117841,
    "lon": -50.003372,
    "elevation": 2064
  },
  {
    "icao": "SSIM",
    "iata": "CCM",
    "name": "Forquilhinha - Criciúma  Airport",
    "city": "Criciúma",
    "country": "BR",
    "lat": -28.725743,
    "lon": -49.424475,
    "elevation": 92
  },
  {
    "icao": "SBCO",
    "iata": "QNS",
    "name": "Canoas Air Force Base",
    "city": "Porto Alegre",
    "country": "BR",
    "lat": -29.945928,
    "lon": -51.144413,
    "elevation": 26
  },
  {
    "icao": "SBCP",
    "iata": "CAW",
    "name": "Bartolomeu Lisandro Airport",
    "city": "Campos dos Goytacazes",
    "country": "BR",
    "lat": -21.698299,
    "lon": -41.301701,
    "elevation": 59
  },
  {
    "icao": "SBCR",
    "iata": "CMG",
    "name": "Corumbá International Airport",
    "city": "Corumbá",
    "country": "BR",
    "lat": -19.01193,
    "lon": -57.672772,
    "elevation": 463
  },
  {
    "icao": "SBCT",
    "iata": "CWB",
    "name": "Afonso Pena Airport",
    "city": "Curitiba",
    "country": "BR",
    "lat": -25.5285,
    "lon": -49.1758,
    "elevation": 2988
  },
  {
    "icao": "SSCV",
    "iata": "CRQ",
    "name": "Caravelas Airport",
    "city": "Caravelas",
    "country": "BR",
    "lat": -17.6523,
    "lon": -39.253101,
    "elevation": 36
  },
  {
    "icao": "SBCX",
    "iata": "CXJ",
    "name": "Hugo Cantergiani Regional Airport",
    "city": "Caxias Do Sul",
    "country": "BR",
    "lat": -29.197183,
    "lon": -51.187647,
    "elevation": 2472
  },
  {
    "icao": "SBCY",
    "iata": "CGB",
    "name": "Marechal Rondon Airport",
    "city": "Cuiabá",
    "country": "BR",
    "lat": -15.6529,
    "lon": -56.116699,
    "elevation": 617
  },
  {
    "icao": "SBCZ",
    "iata": "CZS",
    "name": "Cruzeiro do Sul Airport",
    "city": "Cruzeiro Do Sul",
    "country": "BR",
    "lat": -7.59991,
    "lon": -72.769501,
    "elevation": 637
  },
  {
    "icao": "SBDN",
    "iata": "PPB",
    "name": "Presidente Prudente Airport",
    "city": "Presidente Prudente",
    "country": "BR",
    "lat": -22.1751,
    "lon": -51.424599,
    "elevation": 1477
  },
  {
    "icao": "SBEG",
    "iata": "MAO",
    "name": "Eduardo Gomes International Airport",
    "city": "Manaus",
    "country": "BR",
    "lat": -3.03861,
    "lon": -60.049702,
    "elevation": 264
  },
  {
    "icao": "SBEK",
    "iata": "JCR",
    "name": "Jacareacanga Airport",
    "city": "Jacareacanga",
    "country": "BR",
    "lat": -6.23316,
    "lon": -57.776901,
    "elevation": 295
  },
  {
    "icao": "SBFI",
    "iata": "IGU",
    "name": "Cataratas International Airport",
    "city": "Foz do Iguaçu",
    "country": "BR",
    "lat": -25.594167,
    "lon": -54.489444,
    "elevation": 786
  },
  {
    "icao": "SBFL",
    "iata": "FLN",
    "name": "Hercílio Luz International Airport",
    "city": "Florianópolis",
    "country": "BR",
    "lat": -27.670279,
    "lon": -48.552502,
    "elevation": 16
  },
  {
    "icao": "SBFN",
    "iata": "FEN",
    "name": "Fernando de Noronha Airport",
    "city": "Fernando de Noronha",
    "country": "BR",
    "lat": -3.854471,
    "lon": -32.423302,
    "elevation": 193
  },
  {
    "icao": "SBFZ",
    "iata": "FOR",
    "name": "Pinto Martins International Airport",
    "city": "Fortaleza",
    "country": "BR",
    "lat": -3.775833,
    "lon": -38.532222,
    "elevation": 83
  },
  {
    "icao": "SBGL",
    "iata": "GIG",
    "name": "Rio Galeão – Tom Jobim International Airport",
    "city": "Rio De Janeiro",
    "country": "BR",
    "lat": -22.809999,
    "lon": -43.250557,
    "elevation": 28
  },
  {
    "icao": "SBGM",
    "iata": "GJM",
    "name": "Guajará-Mirim Airport",
    "city": "Guajará-Mirim",
    "country": "BR",
    "lat": -10.78641,
    "lon": -65.28486,
    "elevation": 478
  },
  {
    "icao": "SBGO",
    "iata": "GYN",
    "name": "Santa Genoveva Airport",
    "city": "Goiânia",
    "country": "BR",
    "lat": -16.632,
    "lon": -49.220699,
    "elevation": 2450
  },
  {
    "icao": "SBGR",
    "iata": "GRU",
    "name": "Guarulhos - Governador André Franco Montoro International Airport",
    "city": "São Paulo",
    "country": "BR",
    "lat": -23.431944,
    "lon": -46.467778,
    "elevation": 2461
  },
  {
    "icao": "SBGV",
    "iata": "GVR",
    "name": "Coronel Altino Machado Airport",
    "city": "Governador Valadares",
    "country": "BR",
    "lat": -18.895882,
    "lon": -41.982869,
    "elevation": 561
  },
  {
    "icao": "SBGW",
    "iata": "GUJ",
    "name": "Edu Chaves Field",
    "city": "Guaratinguetá",
    "country": "BR",
    "lat": -22.791599,
    "lon": -45.2048,
    "elevation": 1761
  },
  {
    "icao": "SBHT",
    "iata": "ATM",
    "name": "Altamira Interstate Airport",
    "city": "Altamira",
    "country": "BR",
    "lat": -3.253144,
    "lon": -52.253938,
    "elevation": 368
  },
  {
    "icao": "SBIC",
    "iata": "ITA",
    "name": "Itacoatiara Airport",
    "city": "Itacoatiara",
    "country": "BR",
    "lat": -3.126539,
    "lon": -58.481668,
    "elevation": 142
  },
  {
    "icao": "SBIH",
    "iata": "ITB",
    "name": "Itaituba Airport",
    "city": "Itaituba",
    "country": "BR",
    "lat": -4.242131,
    "lon": -56.000651,
    "elevation": 110
  },
  {
    "icao": "SBIL",
    "iata": "IOS",
    "name": "Bahia - Jorge Amado Airport",
    "city": "Ilhéus",
    "country": "BR",
    "lat": -14.815929,
    "lon": -39.033458,
    "elevation": 15
  },
  {
    "icao": "SBIP",
    "iata": "IPN",
    "name": "Usiminas Airport",
    "city": "Ipatinga",
    "country": "BR",
    "lat": -19.470699,
    "lon": -42.487598,
    "elevation": 786
  },
  {
    "icao": "SBIZ",
    "iata": "IMP",
    "name": "Prefeito Renato Moreira Airport",
    "city": "Imperatriz",
    "country": "BR",
    "lat": -5.53129,
    "lon": -47.459999,
    "elevation": 430
  },
  {
    "icao": "SBJE",
    "iata": "JJD",
    "name": "Comandante Ariston Pessoa Airport",
    "city": "Cruz",
    "country": "BR",
    "lat": -2.906425,
    "lon": -40.357338,
    "elevation": 89
  },
  {
    "icao": "SBJF",
    "iata": "JDF",
    "name": "Francisco de Assis Airport",
    "city": "Juiz de Fora",
    "country": "BR",
    "lat": -21.791482,
    "lon": -43.386072,
    "elevation": 2989
  },
  {
    "icao": "SBJH",
    "iata": "JHF",
    "name": "São Paulo Catarina Executive Airport",
    "city": "São Roque",
    "country": "BR",
    "lat": -23.426886,
    "lon": -47.165658,
    "elevation": 2547
  },
  {
    "icao": "SBJP",
    "iata": "JPA",
    "name": "Presidente Castro Pinto International Airport",
    "city": "João Pessoa",
    "country": "BR",
    "lat": -7.148691,
    "lon": -34.950554,
    "elevation": 217
  },
  {
    "icao": "SBJV",
    "iata": "JOI",
    "name": "Lauro Carneiro de Loyola Airport",
    "city": "Joinville",
    "country": "BR",
    "lat": -26.224501,
    "lon": -48.797401,
    "elevation": 15
  },
  {
    "icao": "SBKG",
    "iata": "CPV",
    "name": "Presidente João Suassuna Airport",
    "city": "Campina Grande",
    "country": "BR",
    "lat": -7.269662,
    "lon": -35.896057,
    "elevation": 1646
  },
  {
    "icao": "SBKP",
    "iata": "VCP",
    "name": "Viracopos International Airport",
    "city": "Campinas",
    "country": "BR",
    "lat": -23.007404,
    "lon": -47.134502,
    "elevation": 2170
  },
  {
    "icao": "SBLJ",
    "iata": "LAJ",
    "name": "Lages Airport",
    "city": "Lages",
    "country": "BR",
    "lat": -27.782101,
    "lon": -50.281502,
    "elevation": 3065
  },
  {
    "icao": "SWXQ",
    "iata": "LIP",
    "name": "Lins Airport",
    "city": "Lins",
    "country": "BR",
    "lat": -21.663491,
    "lon": -49.729954,
    "elevation": 1575
  },
  {
    "icao": "SBLO",
    "iata": "LDB",
    "name": "Governor José Richa Airport",
    "city": "Londrina",
    "country": "BR",
    "lat": -23.334375,
    "lon": -51.128365,
    "elevation": 1867
  },
  {
    "icao": "SBLP",
    "iata": "LAZ",
    "name": "Bom Jesus da Lapa Airport",
    "city": "Bom Jesus da Lapa",
    "country": "BR",
    "lat": -13.2621,
    "lon": -43.4081,
    "elevation": 1454
  },
  {
    "icao": "SBMA",
    "iata": "MAB",
    "name": "João Correa da Rocha Airport",
    "city": "Marabá",
    "country": "BR",
    "lat": -5.36859,
    "lon": -49.138,
    "elevation": 357
  },
  {
    "icao": "SWIQ",
    "iata": "MQH",
    "name": "Minaçu Airport",
    "city": "Minaçu",
    "country": "BR",
    "lat": -13.5491,
    "lon": -48.195301,
    "elevation": 1401
  },
  {
    "icao": "SBMD",
    "iata": "MEU",
    "name": "Monte Dourado - Serra do Areão Airport",
    "city": "Almeirim",
    "country": "BR",
    "lat": -0.889839,
    "lon": -52.6022,
    "elevation": 677
  },
  {
    "icao": "SBME",
    "iata": "MEA",
    "name": "Macaé Benedito Lacerda Airport",
    "city": "Macaé",
    "country": "BR",
    "lat": -22.343,
    "lon": -41.765999,
    "elevation": 8
  },
  {
    "icao": "SBMG",
    "iata": "MGF",
    "name": "Regional de Maringá - Sílvio Name Júnior Airport",
    "city": "Maringá",
    "country": "BR",
    "lat": -23.47606,
    "lon": -52.016187,
    "elevation": 1801
  },
  {
    "icao": "SBMK",
    "iata": "MOC",
    "name": "Mário Ribeiro Airport",
    "city": "Montes Claros",
    "country": "BR",
    "lat": -16.706919,
    "lon": -43.818901,
    "elevation": 2191
  },
  {
    "icao": "SBML",
    "iata": "MII",
    "name": "Frank Miloye Milenkowichi–Marília State Airport",
    "city": "Marília",
    "country": "BR",
    "lat": -22.196899,
    "lon": -49.926485,
    "elevation": 2134
  },
  {
    "icao": "SBMN",
    "iata": "PLL",
    "name": "Ponta Pelada Airport / Manaus Air Base",
    "city": "Manaus",
    "country": "BR",
    "lat": -3.14604,
    "lon": -59.986301,
    "elevation": 267
  },
  {
    "icao": "SBMO",
    "iata": "MCZ",
    "name": "Zumbi dos Palmares Airport",
    "city": "Maceió",
    "country": "BR",
    "lat": -9.51081,
    "lon": -35.791698,
    "elevation": 387
  },
  {
    "icao": "SBMQ",
    "iata": "MCP",
    "name": "Macapá - Alberto Alcolumbre International Airport",
    "city": "Macapá",
    "country": "BR",
    "lat": 0.050664,
    "lon": -51.072201,
    "elevation": 56
  },
  {
    "icao": "SBMS",
    "iata": "MVF",
    "name": "Dix-Sept Rosado Airport",
    "city": "Mossoró",
    "country": "BR",
    "lat": -5.20192,
    "lon": -37.3643,
    "elevation": 76
  },
  {
    "icao": "SBMT",
    "iata": "RTE",
    "name": "Campo de Marte Airport",
    "city": "São Paulo",
    "country": "BR",
    "lat": -23.5091,
    "lon": -46.637798,
    "elevation": 2371
  },
  {
    "icao": "SBMY",
    "iata": "MNX",
    "name": "Manicoré Airport",
    "city": "Manicoré",
    "country": "BR",
    "lat": -5.81138,
    "lon": -61.278301,
    "elevation": 174
  },
  {
    "icao": "SBNF",
    "iata": "NVT",
    "name": "Ministro Victor Konder International Airport",
    "city": "Navegantes",
    "country": "BR",
    "lat": -26.879431,
    "lon": -48.650979,
    "elevation": 18
  },
  {
    "icao": "SBNM",
    "iata": "GEL",
    "name": "Santo Ângelo Airport",
    "city": "Santo Ângelo",
    "country": "BR",
    "lat": -28.282503,
    "lon": -54.169623,
    "elevation": 1056
  },
  {
    "icao": "SBOI",
    "iata": "OYK",
    "name": "Oiapoque Airport",
    "city": "Oiapoque",
    "country": "BR",
    "lat": 3.85412,
    "lon": -51.797056,
    "elevation": 53
  },
  {
    "icao": "SBPA",
    "iata": "POA",
    "name": "Salgado Filho International Airport",
    "city": "Porto Alegre",
    "country": "BR",
    "lat": -29.994712,
    "lon": -51.166592,
    "elevation": 11
  },
  {
    "icao": "SBPB",
    "iata": "PHB",
    "name": "Parnaíba - Prefeito Doutor João Silva Filho International Airport",
    "city": "Parnaíba",
    "country": "BR",
    "lat": -2.89375,
    "lon": -41.731998,
    "elevation": 23
  },
  {
    "icao": "SBPC",
    "iata": "POO",
    "name": "Poços de Caldas - Embaixador Walther Moreira Salles Airport",
    "city": "Poços De Caldas",
    "country": "BR",
    "lat": -21.842529,
    "lon": -46.569768,
    "elevation": 4138
  },
  {
    "icao": "SBPF",
    "iata": "PFB",
    "name": "Lauro Kurtz Airport",
    "city": "Passo Fundo",
    "country": "BR",
    "lat": -28.243976,
    "lon": -52.32777,
    "elevation": 2380
  },
  {
    "icao": "SBPG",
    "iata": "PGZ",
    "name": "Ponta Grossa Airport - Comandante Antonio Amilton Beraldo",
    "city": "Ponta Grossa",
    "country": "BR",
    "lat": -25.184476,
    "lon": -50.143822,
    "elevation": 2588
  },
  {
    "icao": "SBPJ",
    "iata": "PMW",
    "name": "Brigadeiro Lysias Rodrigues Airport",
    "city": "Palmas",
    "country": "BR",
    "lat": -10.2915,
    "lon": -48.356998,
    "elevation": 774
  },
  {
    "icao": "SBPK",
    "iata": "PET",
    "name": "João Simões Lopes Neto International Airport",
    "city": "Pelotas",
    "country": "BR",
    "lat": -31.717253,
    "lon": -52.327952,
    "elevation": 59
  },
  {
    "icao": "SBPL",
    "iata": "PNZ",
    "name": "Senador Nilo Coelho Airport",
    "city": "Petrolina",
    "country": "BR",
    "lat": -9.362422,
    "lon": -40.569098,
    "elevation": 1263
  },
  {
    "icao": "SDPE",
    "iata": "PNB",
    "name": "Porto Nacional Airport",
    "city": "Porto Nacional",
    "country": "BR",
    "lat": -10.719402,
    "lon": -48.3997,
    "elevation": 870
  },
  {
    "icao": "SBPP",
    "iata": "PMG",
    "name": "Ponta Porã Airport",
    "city": "Ponta Porã",
    "country": "BR",
    "lat": -22.549601,
    "lon": -55.702599,
    "elevation": 2156
  },
  {
    "icao": "SBPS",
    "iata": "BPS",
    "name": "Porto Seguro Airport",
    "city": "Porto Seguro",
    "country": "BR",
    "lat": -16.438426,
    "lon": -39.080584,
    "elevation": 169
  },
  {
    "icao": "SBPV",
    "iata": "PVH",
    "name": "Governador Jorge Teixeira de Oliveira Airport",
    "city": "Porto Velho",
    "country": "BR",
    "lat": -8.707854,
    "lon": -63.90242,
    "elevation": 295
  },
  {
    "icao": "SBRB",
    "iata": "RBR",
    "name": "Rio Branco-Plácido de Castro International Airport",
    "city": "Rio Branco",
    "country": "BR",
    "lat": -9.869031,
    "lon": -67.893984,
    "elevation": 633
  },
  {
    "icao": "SBRD",
    "iata": "ROO",
    "name": "Maestro Marinho Franco Airport",
    "city": "Rondonópolis",
    "country": "BR",
    "lat": -16.584292,
    "lon": -54.724803,
    "elevation": 1467
  },
  {
    "icao": "SBRF",
    "iata": "REC",
    "name": "Recife/Guararapes - Gilberto Freyre International Airport",
    "city": "Recife",
    "country": "BR",
    "lat": -8.125984,
    "lon": -34.923316,
    "elevation": 33
  },
  {
    "icao": "SBRJ",
    "iata": "SDU",
    "name": "Santos Dumont Airport",
    "city": "Rio de Janeiro",
    "country": "BR",
    "lat": -22.9105,
    "lon": -43.163101,
    "elevation": 11
  },
  {
    "icao": "SBRP",
    "iata": "RAO",
    "name": "Leite Lopes Airport",
    "city": "Ribeirão Preto",
    "country": "BR",
    "lat": -21.134314,
    "lon": -47.774053,
    "elevation": 1805
  },
  {
    "icao": "SBSC",
    "iata": "SNZ",
    "name": "Santa Cruz Air Force Base",
    "city": "Rio de Janeiro",
    "country": "BR",
    "lat": -22.9324,
    "lon": -43.719101,
    "elevation": 10
  },
  {
    "icao": "SBSG",
    "iata": "NAT",
    "name": "São Gonçalo do Amarante - Governador Aluízio Alves International Airport",
    "city": "Natal",
    "country": "BR",
    "lat": -5.769804,
    "lon": -35.366578,
    "elevation": 272
  },
  {
    "icao": "SBSJ",
    "iata": "SJK",
    "name": "Professor Urbano Ernesto Stumpf Airport",
    "city": "São José Dos Campos",
    "country": "BR",
    "lat": -23.2292,
    "lon": -45.8615,
    "elevation": 2120
  },
  {
    "icao": "SBSL",
    "iata": "SLZ",
    "name": "Marechal Cunha Machado International Airport",
    "city": "São Luís",
    "country": "BR",
    "lat": -2.58536,
    "lon": -44.2341,
    "elevation": 178
  },
  {
    "icao": "SBSM",
    "iata": "RIA",
    "name": "Santa Maria Airport",
    "city": "Santa Maria",
    "country": "BR",
    "lat": -29.711399,
    "lon": -53.688202,
    "elevation": 287
  },
  {
    "icao": "SBSN",
    "iata": "STM",
    "name": "Santarém - Maestro Wilson Fonseca International Airport",
    "city": "Santarém",
    "country": "BR",
    "lat": -2.422423,
    "lon": -54.79306,
    "elevation": 198
  },
  {
    "icao": "SBSP",
    "iata": "CGH",
    "name": "Congonhas Airport",
    "city": "São Paulo",
    "country": "BR",
    "lat": -23.627657,
    "lon": -46.654601,
    "elevation": 2631
  },
  {
    "icao": "SBSR",
    "iata": "SJP",
    "name": "Prof. Eribelto Manoel Reino State Airport",
    "city": "São José do Rio Preto",
    "country": "BR",
    "lat": -20.817113,
    "lon": -49.406963,
    "elevation": 1784
  },
  {
    "icao": "SBST",
    "iata": "SSZ",
    "name": "Santos Nero Moura Air Base / Guarujá Airport",
    "city": "Guarujá",
    "country": "BR",
    "lat": -23.928192,
    "lon": -46.300195,
    "elevation": 13
  },
  {
    "icao": "SBSV",
    "iata": "SSA",
    "name": "Deputado Luiz Eduardo Magalhães International Airport",
    "city": "Salvador",
    "country": "BR",
    "lat": -12.908611,
    "lon": -38.322498,
    "elevation": 64
  },
  {
    "icao": "SBTB",
    "iata": "TMT",
    "name": "Trombetas Airport",
    "city": "Oriximiná",
    "country": "BR",
    "lat": -1.4896,
    "lon": -56.396801,
    "elevation": 167
  },
  {
    "icao": "SBTE",
    "iata": "THE",
    "name": "Senador Petrônio Portela Airport",
    "city": "Teresina",
    "country": "BR",
    "lat": -5.06025,
    "lon": -42.823712,
    "elevation": 219
  },
  {
    "icao": "SBTF",
    "iata": "TFF",
    "name": "Tefé Airport",
    "city": "Tefé",
    "country": "BR",
    "lat": -3.38294,
    "lon": -64.724098,
    "elevation": 186
  },
  {
    "icao": "SBTK",
    "iata": "TRQ",
    "name": "Tarauacá Airport",
    "city": "Tarauacá",
    "country": "BR",
    "lat": -8.155534,
    "lon": -70.782985,
    "elevation": 646
  },
  {
    "icao": "SSVL",
    "iata": "TEC",
    "name": "Telêmaco Borba Airport",
    "city": "Telêmaco Borba",
    "country": "BR",
    "lat": -24.317801,
    "lon": -50.6516,
    "elevation": 2610
  },
  {
    "icao": "SBTT",
    "iata": "TBT",
    "name": "Tabatinga Airport",
    "city": "Tabatinga",
    "country": "BR",
    "lat": -4.25567,
    "lon": -69.935799,
    "elevation": 263
  },
  {
    "icao": "SBTU",
    "iata": "TUR",
    "name": "Tucuruí Airport",
    "city": "Tucuruí",
    "country": "BR",
    "lat": -3.78601,
    "lon": -49.720299,
    "elevation": 830
  },
  {
    "icao": "SBUA",
    "iata": "SJL",
    "name": "São Gabriel da Cachoeira Airport",
    "city": "São Gabriel da Cachoeira",
    "country": "BR",
    "lat": -0.14835,
    "lon": -66.9855,
    "elevation": 249
  },
  {
    "icao": "SBUF",
    "iata": "PAV",
    "name": "Paulo Afonso Airport",
    "city": "Paulo Afonso",
    "country": "BR",
    "lat": -9.40088,
    "lon": -38.250599,
    "elevation": 883
  },
  {
    "icao": "SBUG",
    "iata": "URG",
    "name": "Rubem Berta Airport",
    "city": "Uruguaiana",
    "country": "BR",
    "lat": -29.7822,
    "lon": -57.0382,
    "elevation": 256
  },
  {
    "icao": "SBUL",
    "iata": "UDI",
    "name": "Ten. Cel. Aviador César Bombonato Airport",
    "city": "Uberlândia",
    "country": "BR",
    "lat": -18.883579,
    "lon": -48.225936,
    "elevation": 3094
  },
  {
    "icao": "SBUR",
    "iata": "UBA",
    "name": "Mário de Almeida Franco Airport",
    "city": "Uberaba",
    "country": "BR",
    "lat": -19.765036,
    "lon": -47.964805,
    "elevation": 2655
  },
  {
    "icao": "SBVG",
    "iata": "VAG",
    "name": "Major Brigadeiro Trompowsky Airport",
    "city": "Varginha",
    "country": "BR",
    "lat": -21.591375,
    "lon": -45.474116,
    "elevation": 3025
  },
  {
    "icao": "SBVH",
    "iata": "BVH",
    "name": "Brigadeiro Camarão Airport",
    "city": "Vilhena",
    "country": "BR",
    "lat": -12.6944,
    "lon": -60.098301,
    "elevation": 2018
  },
  {
    "icao": "SBVT",
    "iata": "VIX",
    "name": "Eurico de Aguiar Salles Airport",
    "city": "Vitória",
    "country": "BR",
    "lat": -20.258,
    "lon": -40.285,
    "elevation": 34
  },
  {
    "icao": "SBYS",
    "iata": "QPS",
    "name": "Campo Fontenelle",
    "city": "Pirassununga",
    "country": "BR",
    "lat": -21.984692,
    "lon": -47.341207,
    "elevation": 1968
  },
  {
    "icao": "SBZM",
    "iata": "IZA",
    "name": "Presidente Itamar Franco Airport",
    "city": "Juiz de Fora",
    "country": "BR",
    "lat": -21.513086,
    "lon": -43.173069,
    "elevation": 1348
  },
  {
    "icao": "SCAR",
    "iata": "ARI",
    "name": "Chacalluta Airport",
    "city": "Arica",
    "country": "CL",
    "lat": -18.348499,
    "lon": -70.338699,
    "elevation": 167
  },
  {
    "icao": "SCAT",
    "iata": "CPO",
    "name": "Desierto de Atacama Airport",
    "city": "Copiapo",
    "country": "CL",
    "lat": -27.2611999512,
    "lon": -70.7791976929,
    "elevation": 670
  },
  {
    "icao": "SCBA",
    "iata": "BBA",
    "name": "Balmaceda Airport",
    "city": "Balmaceda",
    "country": "CL",
    "lat": -45.915968,
    "lon": -71.689499,
    "elevation": 1722
  },
  {
    "icao": "SCBE",
    "iata": "TOQ",
    "name": "Barriles Airport",
    "city": "Tocopilla",
    "country": "CL",
    "lat": -22.1411,
    "lon": -70.062897,
    "elevation": 3475
  },
  {
    "icao": "SCCC",
    "iata": "CCH",
    "name": "Chile Chico Airport",
    "city": "Chile Chico",
    "country": "CL",
    "lat": -46.5831,
    "lon": -71.686323,
    "elevation": 1070
  },
  {
    "icao": "SCCF",
    "iata": "CJC",
    "name": "El Loa Airport",
    "city": "Calama",
    "country": "CL",
    "lat": -22.498199,
    "lon": -68.903603,
    "elevation": 7543
  },
  {
    "icao": "SCCH",
    "iata": "YAI",
    "name": "Gral. Bernardo O´Higgins Airport",
    "city": "Chillan",
    "country": "CL",
    "lat": -36.5825,
    "lon": -72.031403,
    "elevation": 495
  },
  {
    "icao": "SCCI",
    "iata": "PUQ",
    "name": "President Carlos Ibañez del Campo International Airport",
    "city": "Punta Arenas",
    "country": "CL",
    "lat": -53.002602,
    "lon": -70.854599,
    "elevation": 139
  },
  {
    "icao": "SCCY",
    "iata": "GXQ",
    "name": "Teniente Vidal Airport",
    "city": "Coyhaique",
    "country": "CL",
    "lat": -45.5942,
    "lon": -72.106102,
    "elevation": 1020
  },
  {
    "icao": "SCDA",
    "iata": "IQQ",
    "name": "Diego Aracena Airport",
    "city": "Iquique",
    "country": "CL",
    "lat": -20.5352,
    "lon": -70.181297,
    "elevation": 155
  },
  {
    "icao": "SCEL",
    "iata": "SCL",
    "name": "Comodoro Arturo Merino Benítez International Airport",
    "city": "Santiago",
    "country": "CL",
    "lat": -33.393001556396484,
    "lon": -70.78579711914062,
    "elevation": 1555
  },
  {
    "icao": "SCES",
    "iata": "ESR",
    "name": "Ricardo García Posada Airport",
    "city": "El Salvador",
    "country": "CL",
    "lat": -26.3111,
    "lon": -69.765198,
    "elevation": 5240
  },
  {
    "icao": "SCFA",
    "iata": "ANF",
    "name": "Andrés Sabella Gálvez International Airport",
    "city": "Antofagasta",
    "country": "CL",
    "lat": -23.444501,
    "lon": -70.445099,
    "elevation": 455
  },
  {
    "icao": "SCFM",
    "iata": "WPR",
    "name": "Captain Fuentes Martinez Airport",
    "city": "Porvenir",
    "country": "CL",
    "lat": -53.2537,
    "lon": -70.319199,
    "elevation": 104
  },
  {
    "icao": "SCGZ",
    "iata": "WPU",
    "name": "Guardia Marina Zañartu Airport",
    "city": "Puerto Williams",
    "country": "CL",
    "lat": -54.931099,
    "lon": -67.626297,
    "elevation": 88
  },
  {
    "icao": "SCHR",
    "iata": "LGR",
    "name": "Cochrane Airport",
    "city": "Cochrane",
    "country": "CL",
    "lat": -47.243591,
    "lon": -72.58815,
    "elevation": 643
  },
  {
    "icao": "SCIE",
    "iata": "CCP",
    "name": "Carriel Sur Airport",
    "city": "Concepcion",
    "country": "CL",
    "lat": -36.772701,
    "lon": -73.063103,
    "elevation": 26
  },
  {
    "icao": "SCIP",
    "iata": "IPC",
    "name": "Mataveri Airport",
    "city": "Isla De Pascua",
    "country": "CL",
    "lat": -27.1648006439,
    "lon": -109.42199707,
    "elevation": 227
  },
  {
    "icao": "SCJO",
    "iata": "ZOS",
    "name": "Cañal Bajo Carlos Hott Siebert Airport",
    "city": "Osorno",
    "country": "CL",
    "lat": -40.611198,
    "lon": -73.060997,
    "elevation": 187
  },
  {
    "icao": "SCLL",
    "iata": "VLR",
    "name": "Vallenar Airport",
    "city": "Vallenar",
    "country": "CL",
    "lat": -28.596399,
    "lon": -70.755997,
    "elevation": 1725
  },
  {
    "icao": "SCNT",
    "iata": "PNT",
    "name": "Lieutenant Julio Gallardo Airport",
    "city": "Puerto Natales",
    "country": "CL",
    "lat": -51.67067,
    "lon": -72.529078,
    "elevation": 217
  },
  {
    "icao": "SCQP",
    "iata": "ZCO",
    "name": "La Araucanía Airport",
    "city": "Temuco",
    "country": "CL",
    "lat": -38.9259,
    "lon": -72.6515,
    "elevation": 333
  },
  {
    "icao": "SCRA",
    "iata": "CNR",
    "name": "Chañaral Airport",
    "city": "Chañaral",
    "country": "CL",
    "lat": -26.3325,
    "lon": -70.6073,
    "elevation": 97
  },
  {
    "icao": "SCSE",
    "iata": "LSC",
    "name": "La Florida Airport",
    "city": "La Serena-Coquimbo",
    "country": "CL",
    "lat": -29.916201,
    "lon": -71.199501,
    "elevation": 481
  },
  {
    "icao": "SCTC",
    "iata": "PZS",
    "name": "Maquehue Airport",
    "city": "Temuco",
    "country": "CL",
    "lat": -38.766799926758,
    "lon": -72.637100219727,
    "elevation": 304
  },
  {
    "icao": "SCTE",
    "iata": "PMC",
    "name": "El Tepual Airport",
    "city": "Puerto Montt",
    "country": "CL",
    "lat": -41.438899993896484,
    "lon": -73.09400177001953,
    "elevation": 294
  },
  {
    "icao": "SCTL",
    "iata": "TLX",
    "name": "Panguilemo Airport",
    "city": "Talca",
    "country": "CL",
    "lat": -35.3778,
    "lon": -71.6017,
    "elevation": 371
  },
  {
    "icao": "SCTN",
    "iata": "WCH",
    "name": "Nuevo Chaitén Airport",
    "city": "Chaitén",
    "country": "CL",
    "lat": -42.781943,
    "lon": -72.834999,
    "elevation": 95
  },
  {
    "icao": "SCTO",
    "iata": "ZIC",
    "name": "Victoria Airport",
    "city": "Victoria",
    "country": "CL",
    "lat": -38.245602,
    "lon": -72.348602,
    "elevation": 1148
  },
  {
    "icao": "SCTT",
    "iata": "TTC",
    "name": "Las Breas Airport",
    "city": "Taltal",
    "country": "CL",
    "lat": -25.564301,
    "lon": -70.3759,
    "elevation": 2580
  },
  {
    "icao": "SCVD",
    "iata": "ZAL",
    "name": "Pichoy Airport",
    "city": "Valdivia",
    "country": "CL",
    "lat": -39.6500015259,
    "lon": -73.0860977173,
    "elevation": 59
  },
  {
    "icao": "SCVM",
    "iata": "KNA",
    "name": "Viña del Mar Airport",
    "city": "Viña del Mar",
    "country": "CL",
    "lat": -32.9496,
    "lon": -71.4786,
    "elevation": 461
  },
  {
    "icao": "SEAM",
    "iata": "ATF",
    "name": "Chachoán Regional Airport",
    "city": "Ambato",
    "country": "EC",
    "lat": -1.21207,
    "lon": -78.5746,
    "elevation": 8502
  },
  {
    "icao": "SECO",
    "iata": "OCC",
    "name": "Francisco De Orellana Airport",
    "city": "Coca",
    "country": "EC",
    "lat": -0.462886,
    "lon": -76.986801,
    "elevation": 834
  },
  {
    "icao": "SECU",
    "iata": "CUE",
    "name": "Mariscal Lamar Airport",
    "city": "Cuenca",
    "country": "EC",
    "lat": -2.88947,
    "lon": -78.984398,
    "elevation": 8306
  },
  {
    "icao": "SEGU",
    "iata": "GYE",
    "name": "José Joaquín de Olmedo International Airport",
    "city": "Guayaquil",
    "country": "EC",
    "lat": -2.15742,
    "lon": -79.883598,
    "elevation": 19
  },
  {
    "icao": "SEJD",
    "iata": "TNW",
    "name": "Jumandy Airport",
    "city": "Ahuano",
    "country": "EC",
    "lat": -1.060185,
    "lon": -77.580525,
    "elevation": 1234
  },
  {
    "icao": "SELT",
    "iata": "LTX",
    "name": "Cotopaxi International Airport",
    "city": "Latacunga",
    "country": "EC",
    "lat": -0.906833,
    "lon": -78.615799,
    "elevation": 9205
  },
  {
    "icao": "SEMA",
    "iata": "MRR",
    "name": "Jose Maria Velasco Ibarra Airport",
    "city": "Macará",
    "country": "EC",
    "lat": -4.37823009491,
    "lon": -79.94100189210002,
    "elevation": 1508
  },
  {
    "icao": "SEMC",
    "iata": "XMS",
    "name": "Coronel E Carvajal Airport",
    "city": "Macas",
    "country": "EC",
    "lat": -2.2991700172424316,
    "lon": -78.12079620361328,
    "elevation": 3452
  },
  {
    "icao": "SEMT",
    "iata": "MEC",
    "name": "Eloy Alfaro International Airport",
    "city": "Manta",
    "country": "EC",
    "lat": -0.9460780024528503,
    "lon": -80.67880249023438,
    "elevation": 48
  },
  {
    "icao": "SEPV",
    "iata": "PVO",
    "name": "Reales Tamarindos Airport",
    "city": "Portoviejo",
    "country": "EC",
    "lat": -1.04165,
    "lon": -80.472198,
    "elevation": 130
  },
  {
    "icao": "SEQM",
    "iata": "UIO",
    "name": "Mariscal Sucre International Airport",
    "city": "Quito",
    "country": "EC",
    "lat": -0.125399,
    "lon": -78.354306,
    "elevation": 7841
  },
  {
    "icao": "SERO",
    "iata": "ETR",
    "name": "Santa Rosa - Artillery Colonel Victor Larrea International Airport",
    "city": "Santa Rosa",
    "country": "EC",
    "lat": -3.441986,
    "lon": -79.996957,
    "elevation": 20
  },
  {
    "icao": "SESA",
    "iata": "SNC",
    "name": "General Ulpiano Paez Airport",
    "city": "Salinas",
    "country": "EC",
    "lat": -2.210057,
    "lon": -80.985067,
    "elevation": 18
  },
  {
    "icao": "SETN",
    "iata": "ESM",
    "name": "Carlos Concha Torres International Airport",
    "city": "Tachina",
    "country": "EC",
    "lat": 0.978519,
    "lon": -79.626602,
    "elevation": 32
  },
  {
    "icao": "SETR",
    "iata": "TPC",
    "name": "Tarapoa Airport",
    "city": "Tarapoa",
    "country": "EC",
    "lat": -0.122956,
    "lon": -76.337799,
    "elevation": 814
  },
  {
    "icao": "SETU",
    "iata": "TUA",
    "name": "Lieutenant Colonel Luis A. Mantilla International Airport",
    "city": "Tulcán",
    "country": "EC",
    "lat": 0.809506,
    "lon": -77.708099,
    "elevation": 9649
  },
  {
    "icao": "SFAL",
    "iata": "PSY",
    "name": "Port Stanley Airport",
    "city": "Stanley",
    "country": "FK",
    "lat": -51.685699462891,
    "lon": -57.777599334717,
    "elevation": 75
  },
  {
    "icao": "SGAS",
    "iata": "ASU",
    "name": "Aeropuerto Internacional Silvio Pettirossi",
    "city": "Asunción",
    "country": "PY",
    "lat": -25.240156,
    "lon": -57.519227,
    "elevation": 292
  },
  {
    "icao": "SGAY",
    "iata": "AYO",
    "name": "Aeropuerto Nacional Juan de Ayolas",
    "city": "Ayolas",
    "country": "PY",
    "lat": -27.378379,
    "lon": -56.856791,
    "elevation": 223
  },
  {
    "icao": "SGCO",
    "iata": "CIO",
    "name": "Aeropuerto Nacional Tte. Cnel. Carmelo Peralta",
    "city": "Concepción",
    "country": "PY",
    "lat": -23.440334,
    "lon": -57.429206,
    "elevation": 253
  },
  {
    "icao": "SGEN",
    "iata": "ENO",
    "name": "Aeropuerto Internacional Tte. Amín Ayub González",
    "city": "Encarnación",
    "country": "PY",
    "lat": -27.227537,
    "lon": -55.837584,
    "elevation": 659
  },
  {
    "icao": "SGES",
    "iata": "AGT",
    "name": "Aeropuerto Internacional Guaraní",
    "city": "Ciudad del Este",
    "country": "PY",
    "lat": -25.457186,
    "lon": -54.839544,
    "elevation": 846
  },
  {
    "icao": "SGME",
    "iata": "ESG",
    "name": "Aeropuerto Internacional Dr. Luis Maria Argaña",
    "city": "Mariscal Estigarribia",
    "country": "PY",
    "lat": -22.046499,
    "lon": -60.6217,
    "elevation": 553
  },
  {
    "icao": "SGPI",
    "iata": "PIL",
    "name": "Aeródromo Don Carlos Miguel Gimenez",
    "city": "Pilar",
    "country": "PY",
    "lat": -26.881981,
    "lon": -58.319067,
    "elevation": 249
  },
  {
    "icao": "SGPJ",
    "iata": "PJC",
    "name": "Aeropuerto Nacional Dr. Augusto Roberto Fuster",
    "city": "Pedro Juan Caballero",
    "country": "PY",
    "lat": -22.641427,
    "lon": -55.829993,
    "elevation": 1873
  },
  {
    "icao": "SKAP",
    "iata": "API",
    "name": "Gomez Nino Apiay Air Base",
    "city": "Apiay",
    "country": "CO",
    "lat": 4.07607,
    "lon": -73.5627,
    "elevation": 1207
  },
  {
    "icao": "SKAR",
    "iata": "AXM",
    "name": "El Eden Airport",
    "city": "Armenia",
    "country": "CO",
    "lat": 4.45278,
    "lon": -75.7664,
    "elevation": 3990
  },
  {
    "icao": "SKAS",
    "iata": "PUU",
    "name": "Tres De Mayo Airport",
    "city": "Puerto Asís",
    "country": "CO",
    "lat": 0.505228,
    "lon": -76.5008,
    "elevation": 815
  },
  {
    "icao": "SKBC",
    "iata": "ELB",
    "name": "Las Flores Airport",
    "city": "El Banco",
    "country": "CO",
    "lat": 9.04554,
    "lon": -73.9749,
    "elevation": 111
  },
  {
    "icao": "SKBG",
    "iata": "BGA",
    "name": "Palonegro Airport",
    "city": "Bucaramanga",
    "country": "CO",
    "lat": 7.1265,
    "lon": -73.1848,
    "elevation": 3897
  },
  {
    "icao": "SKBO",
    "iata": "BOG",
    "name": "El Dorado International Airport",
    "city": "Bogota",
    "country": "CO",
    "lat": 4.70159,
    "lon": -74.1469,
    "elevation": 8361
  },
  {
    "icao": "SKBQ",
    "iata": "BAQ",
    "name": "Ernesto Cortissoz International Airport",
    "city": "Barranquilla",
    "country": "CO",
    "lat": 10.8896,
    "lon": -74.7808,
    "elevation": 98
  },
  {
    "icao": "SKBS",
    "iata": "BSC",
    "name": "José Celestino Mutis Airport",
    "city": "Bahía Solano",
    "country": "CO",
    "lat": 6.20292,
    "lon": -77.3947,
    "elevation": 80
  },
  {
    "icao": "SKBU",
    "iata": "BUN",
    "name": "Gerardo Tobar López Airport",
    "city": "Buenaventura",
    "country": "CO",
    "lat": 3.81963,
    "lon": -76.9898,
    "elevation": 48
  },
  {
    "icao": "SKCC",
    "iata": "CUC",
    "name": "Camilo Daza International Airport",
    "city": "Cúcuta",
    "country": "CO",
    "lat": 7.92757,
    "lon": -72.5115,
    "elevation": 1096
  },
  {
    "icao": "SKCG",
    "iata": "CTG",
    "name": "Rafael Nuñez International Airport",
    "city": "Cartagena",
    "country": "CO",
    "lat": 10.4424,
    "lon": -75.513,
    "elevation": 4
  },
  {
    "icao": "SKCL",
    "iata": "CLO",
    "name": "Alfonso Bonilla Aragon International Airport",
    "city": "Cali",
    "country": "CO",
    "lat": 3.54322,
    "lon": -76.3816,
    "elevation": 3162
  },
  {
    "icao": "SKCO",
    "iata": "TCO",
    "name": "La Florida Airport",
    "city": "Tumaco",
    "country": "CO",
    "lat": 1.81442,
    "lon": -78.7492,
    "elevation": 8
  },
  {
    "icao": "SKCU",
    "iata": "CAQ",
    "name": "Juan H White Airport",
    "city": "Caucasia",
    "country": "CO",
    "lat": 7.96847,
    "lon": -75.1985,
    "elevation": 174
  },
  {
    "icao": "SKCV",
    "iata": "CVE",
    "name": "Coveñas Airport",
    "city": "Coveñas",
    "country": "CO",
    "lat": 9.40092,
    "lon": -75.6913,
    "elevation": 31
  },
  {
    "icao": "SKCZ",
    "iata": "CZU",
    "name": "Las Brujas Airport",
    "city": "Corozal",
    "country": "CO",
    "lat": 9.33274,
    "lon": -75.2856,
    "elevation": 528
  },
  {
    "icao": "SKEB",
    "iata": "EBG",
    "name": "El Bagre Airport",
    "city": "El Bagre",
    "country": "CO",
    "lat": 7.59647,
    "lon": -74.8089,
    "elevation": 180
  },
  {
    "icao": "SKEJ",
    "iata": "EJA",
    "name": "Yariguíes Airport",
    "city": "Barrancabermeja",
    "country": "CO",
    "lat": 7.02433,
    "lon": -73.8068,
    "elevation": 412
  },
  {
    "icao": "SKFL",
    "iata": "FLA",
    "name": "Gustavo Artunduaga Paredes Airport",
    "city": "Florencia",
    "country": "CO",
    "lat": 1.58919,
    "lon": -75.5644,
    "elevation": 803
  },
  {
    "icao": "SKGI",
    "iata": "GIR",
    "name": "Santiago Vila Airport",
    "city": "Girardot",
    "country": "CO",
    "lat": 4.27624,
    "lon": -74.7967,
    "elevation": 900
  },
  {
    "icao": "SKGO",
    "iata": "CRC",
    "name": "Santa Ana Airport",
    "city": "Cartago",
    "country": "CO",
    "lat": 4.75818,
    "lon": -75.9557,
    "elevation": 2979
  },
  {
    "icao": "SKGP",
    "iata": "GPI",
    "name": "Juan Casiano Airport",
    "city": "Guapi",
    "country": "CO",
    "lat": 2.57013,
    "lon": -77.897969,
    "elevation": 164
  },
  {
    "icao": "SKIB",
    "iata": "IBE",
    "name": "Perales Airport",
    "city": "Ibagué",
    "country": "CO",
    "lat": 4.42161,
    "lon": -75.1333,
    "elevation": 2999
  },
  {
    "icao": "SKIP",
    "iata": "IPI",
    "name": "San Luis Airport",
    "city": "Ipiales",
    "country": "CO",
    "lat": 0.861946,
    "lon": -77.671783,
    "elevation": 9765
  },
  {
    "icao": "SKLC",
    "iata": "APO",
    "name": "Antonio Roldán Betancur Airport",
    "city": "Carepa",
    "country": "CO",
    "lat": 7.81196,
    "lon": -76.7164,
    "elevation": 46
  },
  {
    "icao": "SKLM",
    "iata": "MCJ",
    "name": "Jorge Isaac Airport",
    "city": "La Mina-Maicao",
    "country": "CO",
    "lat": 11.2325,
    "lon": -72.4901,
    "elevation": 281
  },
  {
    "icao": "SKLT",
    "iata": "LET",
    "name": "Alfredo Vásquez Cobo International Airport",
    "city": "Leticia",
    "country": "CO",
    "lat": -4.19355,
    "lon": -69.9432,
    "elevation": 277
  },
  {
    "icao": "SKMD",
    "iata": "EOH",
    "name": "Enrique Olaya Herrera Airport",
    "city": "Medellín",
    "country": "CO",
    "lat": 6.219686,
    "lon": -75.590597,
    "elevation": 4949
  },
  {
    "icao": "SKMG",
    "iata": "MGN",
    "name": "Baracoa Airport",
    "city": "Magangué",
    "country": "CO",
    "lat": 9.28474,
    "lon": -74.8461,
    "elevation": 178
  },
  {
    "icao": "SKMR",
    "iata": "MTR",
    "name": "Los Garzones Airport",
    "city": "Montería",
    "country": "CO",
    "lat": 8.82374,
    "lon": -75.8258,
    "elevation": 41
  },
  {
    "icao": "SKMU",
    "iata": "MVP",
    "name": "Fabio Alberto Leon Bentley Airport",
    "city": "Mitú",
    "country": "CO",
    "lat": 1.25366,
    "lon": -70.2339,
    "elevation": 680
  },
  {
    "icao": "SKMZ",
    "iata": "MZL",
    "name": "La Nubia Airport",
    "city": "Manizales",
    "country": "CO",
    "lat": 5.0296,
    "lon": -75.4647,
    "elevation": 6871
  },
  {
    "icao": "SKNV",
    "iata": "NVA",
    "name": "Benito Salas Airport",
    "city": "Neiva",
    "country": "CO",
    "lat": 2.95015,
    "lon": -75.294,
    "elevation": 1464
  },
  {
    "icao": "SKOC",
    "iata": "OCV",
    "name": "Aguas Claras Airport",
    "city": "Ocaña",
    "country": "CO",
    "lat": 8.31506,
    "lon": -73.3583,
    "elevation": 3850
  },
  {
    "icao": "SKPC",
    "iata": "PCR",
    "name": "German Olano Airport",
    "city": "Puerto Carreño",
    "country": "CO",
    "lat": 6.18472,
    "lon": -67.4932,
    "elevation": 177
  },
  {
    "icao": "SKPD",
    "iata": "PDA",
    "name": "Obando Cesar Gaviria Trujillo Airport",
    "city": "Puerto Inírida",
    "country": "CO",
    "lat": 3.85353,
    "lon": -67.9062,
    "elevation": 460
  },
  {
    "icao": "SKPE",
    "iata": "PEI",
    "name": "Matecaña International Airport",
    "city": "Pereira",
    "country": "CO",
    "lat": 4.81267,
    "lon": -75.7395,
    "elevation": 4416
  },
  {
    "icao": "SKPI",
    "iata": "PTX",
    "name": "Pitalito Airport",
    "city": "Pitalito",
    "country": "CO",
    "lat": 1.85777,
    "lon": -76.0857,
    "elevation": 4212
  },
  {
    "icao": "SKPP",
    "iata": "PPN",
    "name": "Guillermo León Valencia Airport",
    "city": "Popayán",
    "country": "CO",
    "lat": 2.4544,
    "lon": -76.6093,
    "elevation": 5687
  },
  {
    "icao": "SKPQ",
    "iata": "PAL",
    "name": "German Olano Air Base",
    "city": "La Dorada",
    "country": "CO",
    "lat": 5.48361,
    "lon": -74.6574,
    "elevation": 566
  },
  {
    "icao": "SKPS",
    "iata": "PSO",
    "name": "Antonio Nariño Airport",
    "city": "Chachagüí",
    "country": "CO",
    "lat": 1.39625,
    "lon": -77.2915,
    "elevation": 5951
  },
  {
    "icao": "SKPV",
    "iata": "PVA",
    "name": "El Embrujo Airport",
    "city": "Providencia",
    "country": "CO",
    "lat": 13.357461,
    "lon": -81.357977,
    "elevation": 10
  },
  {
    "icao": "SKPZ",
    "iata": "PZA",
    "name": "Paz De Ariporo Airport",
    "city": "Paz De Ariporo",
    "country": "CO",
    "lat": 5.87615,
    "lon": -71.8866,
    "elevation": 900
  },
  {
    "icao": "SKQU",
    "iata": "MQU",
    "name": "Mariquita Airport",
    "city": "Mariquita",
    "country": "CO",
    "lat": 5.21256,
    "lon": -74.8836,
    "elevation": 1531
  },
  {
    "icao": "SKRG",
    "iata": "MDE",
    "name": "Jose Maria Córdova International Airport",
    "city": "Medellín",
    "country": "CO",
    "lat": 6.16454,
    "lon": -75.4231,
    "elevation": 6955
  },
  {
    "icao": "SKRH",
    "iata": "RCH",
    "name": "Almirante Padilla Airport",
    "city": "Riohacha",
    "country": "CO",
    "lat": 11.5262,
    "lon": -72.926,
    "elevation": 43
  },
  {
    "icao": "SKSJ",
    "iata": "SJE",
    "name": "Jorge E. Gonzalez Torres Airport",
    "city": "San José Del Guaviare",
    "country": "CO",
    "lat": 2.57969,
    "lon": -72.6394,
    "elevation": 605
  },
  {
    "icao": "SKSM",
    "iata": "SMR",
    "name": "Simón Bolívar International Airport",
    "city": "Santa Marta",
    "country": "CO",
    "lat": 11.1196,
    "lon": -74.2306,
    "elevation": 22
  },
  {
    "icao": "SKSP",
    "iata": "ADZ",
    "name": "Gustavo Rojas Pinilla International Airport",
    "city": "San Andrés",
    "country": "CO",
    "lat": 12.5836,
    "lon": -81.7112,
    "elevation": 19
  },
  {
    "icao": "SKSV",
    "iata": "SVI",
    "name": "Eduardo Falla Solano Airport",
    "city": "San Vicente Del Caguán",
    "country": "CO",
    "lat": 2.15217,
    "lon": -74.7663,
    "elevation": 920
  },
  {
    "icao": "SKTM",
    "iata": "TME",
    "name": "Gustavo Vargas Airport",
    "city": "Tame",
    "country": "CO",
    "lat": 6.45108,
    "lon": -71.7603,
    "elevation": 1050
  },
  {
    "icao": "SKTQ",
    "iata": "TQS",
    "name": "Captain Ernesto Esguerra Cubides Air Base",
    "city": "Tres Esquinas",
    "country": "CO",
    "lat": 0.7459,
    "lon": -75.234,
    "elevation": 585
  },
  {
    "icao": "SKUC",
    "iata": "AUC",
    "name": "Santiago Perez Airport",
    "city": "Arauca",
    "country": "CO",
    "lat": 7.06888,
    "lon": -70.7369,
    "elevation": 420
  },
  {
    "icao": "SKUI",
    "iata": "UIB",
    "name": "El Caraño Airport",
    "city": "Quibdó",
    "country": "CO",
    "lat": 5.69076,
    "lon": -76.6412,
    "elevation": 204
  },
  {
    "icao": "SKUL",
    "iata": "ULQ",
    "name": "Heriberto Gíl Martínez Airport",
    "city": "Tuluá",
    "country": "CO",
    "lat": 4.08836,
    "lon": -76.2351,
    "elevation": 3132
  },
  {
    "icao": "SKVP",
    "iata": "VUP",
    "name": "Alfonso López Pumarejo Airport",
    "city": "Valledupar",
    "country": "CO",
    "lat": 10.435,
    "lon": -73.2495,
    "elevation": 483
  },
  {
    "icao": "SKVV",
    "iata": "VVC",
    "name": "Vanguardia Airport",
    "city": "Villavicencio",
    "country": "CO",
    "lat": 4.16787,
    "lon": -73.6138,
    "elevation": 1394
  },
  {
    "icao": "SKYP",
    "iata": "EYP",
    "name": "El Alcaravan - Yopal Airport",
    "city": "Yopal",
    "country": "CO",
    "lat": 5.31911,
    "lon": -72.384,
    "elevation": 1028
  },
  {
    "icao": "SLAL",
    "iata": "SRE",
    "name": "Alcantarí Airport",
    "city": "Yamparaez",
    "country": "BO",
    "lat": -19.246835,
    "lon": -65.149611,
    "elevation": 10184
  },
  {
    "icao": "SLBJ",
    "iata": "BJO",
    "name": "Bermejo Airport",
    "city": "Bermejo",
    "country": "BO",
    "lat": -22.7733001709,
    "lon": -64.31289672850001,
    "elevation": 1249
  },
  {
    "icao": "SLCB",
    "iata": "CBB",
    "name": "Jorge Wilsterman International Airport",
    "city": "Cochabamba",
    "country": "BO",
    "lat": -17.421100616455078,
    "lon": -66.1771011352539,
    "elevation": 8360
  },
  {
    "icao": "SLCO",
    "iata": "CIJ",
    "name": "Capitán Aníbal Arab Airport",
    "city": "Cobija",
    "country": "BO",
    "lat": -11.040399551400002,
    "lon": -68.7829971313,
    "elevation": 889
  },
  {
    "icao": "SLET",
    "iata": "SRZ",
    "name": "El Trompillo Airport",
    "city": "Santa Cruz",
    "country": "BO",
    "lat": -17.8115997314,
    "lon": -63.1715011597,
    "elevation": 1371
  },
  {
    "icao": "SLGM",
    "iata": "GYA",
    "name": "Guayaramerín Airport",
    "city": "Guayaramerín",
    "country": "BO",
    "lat": -10.88856,
    "lon": -65.380955,
    "elevation": 456
  },
  {
    "icao": "SLLP",
    "iata": "LPB",
    "name": "El Alto International Airport",
    "city": "La Paz / El Alto",
    "country": "BO",
    "lat": -16.5132999420166,
    "lon": -68.19229888916016,
    "elevation": 13355
  },
  {
    "icao": "SLOR",
    "iata": "ORU",
    "name": "Juan Mendoza Airport",
    "city": "Oruro",
    "country": "BO",
    "lat": -17.962601,
    "lon": -67.076202,
    "elevation": 12152
  },
  {
    "icao": "SLPO",
    "iata": "POI",
    "name": "Capitan Nicolas Rojas Airport",
    "city": "Potosí",
    "country": "BO",
    "lat": -19.543331,
    "lon": -65.723734,
    "elevation": 12922
  },
  {
    "icao": "SLPS",
    "iata": "PSZ",
    "name": "Capitán Av. Salvador Ogaya G. airport",
    "city": "Puerto Suárez",
    "country": "BO",
    "lat": -18.975301,
    "lon": -57.820599,
    "elevation": 440
  },
  {
    "icao": "SLRI",
    "iata": "RIB",
    "name": "Capitán Av. Selin Zeitun Lopez Airport",
    "city": "Riberalta",
    "country": "BO",
    "lat": -11.009355,
    "lon": -66.075468,
    "elevation": 462
  },
  {
    "icao": "SLSA",
    "iata": "SBL",
    "name": "Santa Ana Del Yacuma Airport",
    "city": "Santa Ana del Yacuma",
    "country": "BO",
    "lat": -13.762200355500001,
    "lon": -65.4352035522,
    "elevation": 472
  },
  {
    "icao": "SLTJ",
    "iata": "TJA",
    "name": "Capitan Oriel Lea Plaza Airport",
    "city": "Tarija",
    "country": "BO",
    "lat": -21.5557,
    "lon": -64.701302,
    "elevation": 6079
  },
  {
    "icao": "SLTR",
    "iata": "TDD",
    "name": "Teniente Av. Jorge Henrich Arauz Airport",
    "city": "Trinidad",
    "country": "BO",
    "lat": -14.8187,
    "lon": -64.917999,
    "elevation": 509
  },
  {
    "icao": "SLVM",
    "iata": "VLM",
    "name": "Teniente Coronel Rafael Pabón Airport",
    "city": "Villamontes",
    "country": "BO",
    "lat": -21.255199432399998,
    "lon": -63.4056015015,
    "elevation": 1305
  },
  {
    "icao": "SLVR",
    "iata": "VVI",
    "name": "Viru Viru International Airport",
    "city": "Santa Cruz",
    "country": "BO",
    "lat": -17.6448,
    "lon": -63.135399,
    "elevation": 1224
  },
  {
    "icao": "SLYA",
    "iata": "BYC",
    "name": "Yacuiba Airport",
    "city": "Yacuíba",
    "country": "BO",
    "lat": -21.960899353027344,
    "lon": -63.65169906616211,
    "elevation": 2112
  },
  {
    "icao": "SMJP",
    "iata": "PBM",
    "name": "Johan Adolf Pengel International Airport",
    "city": "Zandery",
    "country": "SR",
    "lat": 5.45283,
    "lon": -55.187801,
    "elevation": 59
  },
  {
    "icao": "SN6L",
    "iata": "JSO",
    "name": "Dr. Luciano de Arruda Coelho Regional Airport",
    "city": "Sobral",
    "country": "BR",
    "lat": -3.614488,
    "lon": -40.231426,
    "elevation": 299
  },
  {
    "icao": "SNCP",
    "iata": "EEA",
    "name": "Planalto Serrano Regional Airport",
    "city": "Correia Pinto",
    "country": "BR",
    "lat": -27.634128,
    "lon": -50.358253,
    "elevation": 2887
  },
  {
    "icao": "SNLN",
    "iata": "LHN",
    "name": "Linhares Municipal Airport",
    "city": "Linhares",
    "country": "BR",
    "lat": -19.355202,
    "lon": -40.07128,
    "elevation": 138
  },
  {
    "icao": "SOCA",
    "iata": "CAY",
    "name": "Cayenne – Félix Eboué Airport",
    "city": "Matoury",
    "country": "GF",
    "lat": 4.819964,
    "lon": -52.361326,
    "elevation": 26
  },
  {
    "icao": "SOOG",
    "iata": "OYP",
    "name": "Saint-Georges-de-l'Oyapock Airport",
    "city": "Saint-Georges-de-l'Oyapock",
    "country": "GF",
    "lat": 3.8976,
    "lon": -51.8041,
    "elevation": 46
  },
  {
    "icao": "SPAY",
    "iata": "AYX",
    "name": "Teniente General Gerardo Pérez Pinedo Airport",
    "city": "Atalaya",
    "country": "PE",
    "lat": -10.7291,
    "lon": -73.766502,
    "elevation": 751
  },
  {
    "icao": "SPBR",
    "iata": "IBP",
    "name": "Iberia Airport",
    "city": "Iberia",
    "country": "PE",
    "lat": -11.4116,
    "lon": -69.488701,
    "elevation": 750
  },
  {
    "icao": "SPCL",
    "iata": "PCL",
    "name": "Cap FAP David Abenzur Rengifo International Airport",
    "city": "Pucallpa",
    "country": "PE",
    "lat": -8.37794017791748,
    "lon": -74.57430267333984,
    "elevation": 513
  },
  {
    "icao": "SPEO",
    "iata": "CHM",
    "name": "FAP Lieutenant Jaime Andres de Montreuil Morales Airport",
    "city": "Chimbote",
    "country": "PE",
    "lat": -9.14961,
    "lon": -78.523804,
    "elevation": 69
  },
  {
    "icao": "SPHI",
    "iata": "CIX",
    "name": "Air Force Captain Jose A Quinones Gonzales International Airport",
    "city": "Chiclayo",
    "country": "PE",
    "lat": -6.78748,
    "lon": -79.828102,
    "elevation": 97
  },
  {
    "icao": "SPHO",
    "iata": "AYP",
    "name": "Air Force Colonel Alfredo Mendivil Duarte Airport",
    "city": "Ayacucho",
    "country": "PE",
    "lat": -13.1548,
    "lon": -74.204399,
    "elevation": 8917
  },
  {
    "icao": "SPHZ",
    "iata": "ATA",
    "name": "Comandante FAP German Arias Graziani Airport",
    "city": "Anta",
    "country": "PE",
    "lat": -9.347439765930176,
    "lon": -77.59839630126953,
    "elevation": 9097
  },
  {
    "icao": "SPJC",
    "iata": "LIM",
    "name": "Jorge Chávez International Airport",
    "city": "Lima",
    "country": "PE",
    "lat": -12.0219,
    "lon": -77.114305,
    "elevation": 113
  },
  {
    "icao": "SPJA",
    "iata": "RIJ",
    "name": "Juan Simons Vela Airport",
    "city": "Rioja",
    "country": "PE",
    "lat": -6.06786,
    "lon": -77.160004,
    "elevation": 2707
  },
  {
    "icao": "SPJE",
    "iata": "JAE",
    "name": "Shumba Airport",
    "city": "Jaén",
    "country": "PE",
    "lat": -5.59248,
    "lon": -78.774002,
    "elevation": 2477
  },
  {
    "icao": "SPJI",
    "iata": "JJI",
    "name": "Juanjui Airport",
    "city": "Juanjuí",
    "country": "PE",
    "lat": -7.1691,
    "lon": -76.7286,
    "elevation": 1148
  },
  {
    "icao": "SPJJ",
    "iata": "JAU",
    "name": "Francisco Carle Airport",
    "city": "Jauja",
    "country": "PE",
    "lat": -11.7831001282,
    "lon": -75.47339630130001,
    "elevation": 11034
  },
  {
    "icao": "SPJL",
    "iata": "JUL",
    "name": "Inca Manco Capac International Airport",
    "city": "Juliaca",
    "country": "PE",
    "lat": -15.467100143432617,
    "lon": -70.158203125,
    "elevation": 12552
  },
  {
    "icao": "SPJR",
    "iata": "CJA",
    "name": "Mayor General FAP Armando Revoredo Iglesias Airport",
    "city": "Cajamarca",
    "country": "PE",
    "lat": -7.13918,
    "lon": -78.489403,
    "elevation": 8781
  },
  {
    "icao": "SPLO",
    "iata": "ILQ",
    "name": "General Jorge Fernandez Maldon Airport",
    "city": "Ilo",
    "country": "PE",
    "lat": -17.695,
    "lon": -71.344002,
    "elevation": 72
  },
  {
    "icao": "SPME",
    "iata": "TBP",
    "name": "Captain Pedro Canga Rodríguez International Airport",
    "city": "Tumbes",
    "country": "PE",
    "lat": -3.552074,
    "lon": -80.381086,
    "elevation": 115
  },
  {
    "icao": "SPMS",
    "iata": "YMS",
    "name": "Moises Benzaquen Rengifo Airport",
    "city": "Yurimaguas",
    "country": "PE",
    "lat": -5.89377,
    "lon": -76.118202,
    "elevation": 587
  },
  {
    "icao": "SPNC",
    "iata": "HUU",
    "name": "Alferez Fap David Figueroa Fernandini Airport",
    "city": "Huánuco",
    "country": "PE",
    "lat": -9.878809928894043,
    "lon": -76.20480346679688,
    "elevation": 6070
  },
  {
    "icao": "SPPY",
    "iata": "CHH",
    "name": "Chachapoyas Airport",
    "city": "Chachapoyas",
    "country": "PE",
    "lat": -6.201911,
    "lon": -77.856195,
    "elevation": 8333
  },
  {
    "icao": "SPQT",
    "iata": "IQT",
    "name": "Coronel FAP Francisco Secada Vignetta International Airport",
    "city": "Iquitos",
    "country": "PE",
    "lat": -3.78474,
    "lon": -73.3088,
    "elevation": 306
  },
  {
    "icao": "SPQU",
    "iata": "AQP",
    "name": "Rodríguez Ballón International Airport",
    "city": "Arequipa",
    "country": "PE",
    "lat": -16.3411006927,
    "lon": -71.5830993652,
    "elevation": 8405
  },
  {
    "icao": "SPRU",
    "iata": "TRU",
    "name": "Capitan FAP Carlos Martinez De Pinillos International Airport",
    "city": "Trujillo",
    "country": "PE",
    "lat": -8.08141040802002,
    "lon": -79.10880279541016,
    "elevation": 106
  },
  {
    "icao": "SPSO",
    "iata": "PIO",
    "name": "Captain Renán Elías Olivera International Airport",
    "city": "Pisco",
    "country": "PE",
    "lat": -13.7449,
    "lon": -76.220299,
    "elevation": 39
  },
  {
    "icao": "SPST",
    "iata": "TPP",
    "name": "Cadete FAP Guillermo Del Castillo Paredes Airport",
    "city": "Tarapoto",
    "country": "PE",
    "lat": -6.508739948272705,
    "lon": -76.37319946289062,
    "elevation": 869
  },
  {
    "icao": "SPTN",
    "iata": "TCQ",
    "name": "Coronel FAP Carlos Ciriani Santa Rosa International Airport",
    "city": "Tacna",
    "country": "PE",
    "lat": -18.053300857500002,
    "lon": -70.2758026123,
    "elevation": 1538
  },
  {
    "icao": "SPTU",
    "iata": "PEM",
    "name": "Padre Aldamiz International Airport",
    "city": "Puerto Maldonado",
    "country": "PE",
    "lat": -12.6135997772,
    "lon": -69.2285995483,
    "elevation": 659
  },
  {
    "icao": "SPUR",
    "iata": "PIU",
    "name": "Capitán FAP Guillermo Concha Iberico International Airport",
    "city": "Piura",
    "country": "PE",
    "lat": -5.20574998856,
    "lon": -80.61640167239999,
    "elevation": 120
  },
  {
    "icao": "SPYL",
    "iata": "TYL",
    "name": "Captain Victor Montes Arias International Airport",
    "city": "Talara",
    "country": "PE",
    "lat": -4.57664,
    "lon": -81.254097,
    "elevation": 282
  },
  {
    "icao": "SPZA",
    "iata": "NZC",
    "name": "Maria Reiche Neuman Airport",
    "city": "Nazca",
    "country": "PE",
    "lat": -14.854,
    "lon": -74.961502,
    "elevation": 1860
  },
  {
    "icao": "SPZO",
    "iata": "CUZ",
    "name": "Alejandro Velasco Astete International Airport",
    "city": "Cusco",
    "country": "PE",
    "lat": -13.535699844400002,
    "lon": -71.9387969971,
    "elevation": 10860
  },
  {
    "icao": "SUDU",
    "iata": "DZO",
    "name": "Santa Bernardina International Airport",
    "city": "Durazno",
    "country": "UY",
    "lat": -33.358898,
    "lon": -56.499199,
    "elevation": 305
  },
  {
    "icao": "SULS",
    "iata": "PDP",
    "name": "Capitan Corbeta CA Curbelo International Airport",
    "city": "Punta del Este",
    "country": "UY",
    "lat": -34.855099,
    "lon": -55.094299,
    "elevation": 95
  },
  {
    "icao": "SUMU",
    "iata": "MVD",
    "name": "Carrasco General Cesáreo L. Berisso International Airport",
    "city": "Ciudad de la Costa",
    "country": "UY",
    "lat": -34.835647,
    "lon": -56.026497,
    "elevation": 105
  },
  {
    "icao": "SUPU",
    "iata": "PDU",
    "name": "Tydeo Larre Borges Airport",
    "city": "Paysandú",
    "country": "UY",
    "lat": -32.3633,
    "lon": -58.061901,
    "elevation": 138
  },
  {
    "icao": "SUSO",
    "iata": "STY",
    "name": "Nueva Hesperides International Airport",
    "city": "Salto",
    "country": "UY",
    "lat": -31.438499,
    "lon": -57.985298,
    "elevation": 187
  },
  {
    "icao": "SVVA",
    "iata": "VLN",
    "name": "Arturo Michelena International Airport",
    "city": "Valencia",
    "country": "VE",
    "lat": 10.149733,
    "lon": -67.928367,
    "elevation": 1411
  },
  {
    "icao": "SVAC",
    "iata": "AGV",
    "name": "Oswaldo Guevara Mujica Airport",
    "city": "Acarigua",
    "country": "VE",
    "lat": 9.553375,
    "lon": -69.237869,
    "elevation": 640
  },
  {
    "icao": "SVAN",
    "iata": "AAO",
    "name": "Anaco Airport",
    "city": "Anaco",
    "country": "VE",
    "lat": 9.430225,
    "lon": -64.470726,
    "elevation": 721
  },
  {
    "icao": "SVBC",
    "iata": "BLA",
    "name": "General José Antonio Anzoategui International Airport",
    "city": "Barcelona",
    "country": "VE",
    "lat": 10.111111,
    "lon": -64.692222,
    "elevation": 30
  },
  {
    "icao": "SVBI",
    "iata": "BNS",
    "name": "Barinas Airport",
    "city": "Barinas",
    "country": "VE",
    "lat": 8.615,
    "lon": -70.214167,
    "elevation": 615
  },
  {
    "icao": "SVBM",
    "iata": "BRM",
    "name": "Barquisimeto International Airport",
    "city": "Barquisimeto",
    "country": "VE",
    "lat": 10.042747,
    "lon": -69.35862,
    "elevation": 2042
  },
  {
    "icao": "SVBS",
    "iata": "MYC",
    "name": "Escuela Mariscal Sucre Airport",
    "city": "Maracay",
    "country": "VE",
    "lat": 10.249978,
    "lon": -67.649422,
    "elevation": 1338
  },
  {
    "icao": "SVCB",
    "iata": "CBL",
    "name": "General Tomas de Heres Airport",
    "city": "Ciudad Bolivar",
    "country": "VE",
    "lat": 8.122161,
    "lon": -63.536957,
    "elevation": 197
  },
  {
    "icao": "SVCD",
    "iata": "CXA",
    "name": "Caicara del Orinoco Airport",
    "city": "",
    "country": "VE",
    "lat": 7.62551,
    "lon": -66.162804,
    "elevation": 141
  },
  {
    "icao": "SVCL",
    "iata": "CLZ",
    "name": "Calabozo Airport",
    "city": "Guarico",
    "country": "VE",
    "lat": 8.924656,
    "lon": -67.417091,
    "elevation": 328
  },
  {
    "icao": "SVCN",
    "iata": "CAJ",
    "name": "Canaima Airport",
    "city": "Canaima",
    "country": "VE",
    "lat": 6.231989,
    "lon": -62.85485,
    "elevation": 1450
  },
  {
    "icao": "SVCP",
    "iata": "CUP",
    "name": "General Francisco Bermúdez Airport",
    "city": "Carúpano",
    "country": "VE",
    "lat": 10.660014,
    "lon": -63.261681,
    "elevation": 33
  },
  {
    "icao": "SVCR",
    "iata": "CZE",
    "name": "José Leonardo Chirinos Airport",
    "city": "Coro",
    "country": "VE",
    "lat": 11.414944,
    "lon": -69.680901,
    "elevation": 52
  },
  {
    "icao": "SVCS",
    "iata": "CCS",
    "name": "Simón Bolívar International Airport",
    "city": "Caracas",
    "country": "VE",
    "lat": 10.601194,
    "lon": -66.991222,
    "elevation": 235
  },
  {
    "icao": "SVCU",
    "iata": "CUM",
    "name": "Cumaná (Antonio José de Sucre) Airport",
    "city": "",
    "country": "VE",
    "lat": 10.450333,
    "lon": -64.13047,
    "elevation": 14
  },
  {
    "icao": "SVED",
    "iata": "EOR",
    "name": "El Dorado Airport",
    "city": "Bolivar",
    "country": "VE",
    "lat": 6.71573,
    "lon": -61.638786,
    "elevation": 318
  },
  {
    "icao": "SVEZ",
    "iata": "EOZ",
    "name": "Elorza Airport",
    "city": "",
    "country": "VE",
    "lat": 7.059677,
    "lon": -69.4967,
    "elevation": 295
  },
  {
    "icao": "SVGD",
    "iata": "GDO",
    "name": "Guasdualito Airport",
    "city": "Guasdualito",
    "country": "VE",
    "lat": 7.210834,
    "lon": -70.756386,
    "elevation": 427
  },
  {
    "icao": "SVGI",
    "iata": "GUI",
    "name": "Guiria Airport",
    "city": "",
    "country": "VE",
    "lat": 10.574077606200001,
    "lon": -62.3126678467,
    "elevation": 42
  },
  {
    "icao": "SVGU",
    "iata": "GUQ",
    "name": "Guanare Airport",
    "city": "Guanare",
    "country": "VE",
    "lat": 9.026944,
    "lon": -69.75515,
    "elevation": 606
  },
  {
    "icao": "SVJC",
    "iata": "LSP",
    "name": "Josefa Camejo International Airport",
    "city": "Paraguaná",
    "country": "VE",
    "lat": 11.780775,
    "lon": -70.151497,
    "elevation": 75
  },
  {
    "icao": "SVLF",
    "iata": "LFR",
    "name": "La Fria Airport",
    "city": "",
    "country": "VE",
    "lat": 8.239167,
    "lon": -72.271027,
    "elevation": 305
  },
  {
    "icao": "SVMC",
    "iata": "MAR",
    "name": "La Chinita International Airport",
    "city": "Maracaibo",
    "country": "VE",
    "lat": 10.5582084656,
    "lon": -71.7278594971,
    "elevation": 239
  },
  {
    "icao": "SVMD",
    "iata": "MRD",
    "name": "Alberto Carnevalli Airport",
    "city": "Mérida",
    "country": "VE",
    "lat": 8.582078,
    "lon": -71.161041,
    "elevation": 5007
  },
  {
    "icao": "SVMG",
    "iata": "PMV",
    "name": "Del Caribe Santiago Mariño International Airport",
    "city": "Isla Margarita",
    "country": "VE",
    "lat": 10.912603378295898,
    "lon": -63.96659851074219,
    "elevation": 74
  },
  {
    "icao": "SVMI",
    "iata": "CCS",
    "name": "Maiquetía Simón Bolívar International Airport",
    "city": "Maiquetía",
    "country": "VE",
    "lat": 10.601194,
    "lon": -66.991222,
    "elevation": 234
  },
  {
    "icao": "SVMT",
    "iata": "MUN",
    "name": "José Tadeo Monagas International Airport",
    "city": "Maturín",
    "country": "VE",
    "lat": 9.749023,
    "lon": -63.153348,
    "elevation": 224
  },
  {
    "icao": "SVPA",
    "iata": "PYH",
    "name": "Cacique Aramare Airport",
    "city": "Puerto Ayacucho",
    "country": "VE",
    "lat": 5.61999,
    "lon": -67.606102,
    "elevation": 245
  },
  {
    "icao": "SVPC",
    "iata": "PBL",
    "name": "General Bartolome Salom International Airport",
    "city": "Puerto Cabello",
    "country": "VE",
    "lat": 10.4805,
    "lon": -68.072998,
    "elevation": 32
  },
  {
    "icao": "SVPM",
    "iata": "SCI",
    "name": "Paramillo Airport",
    "city": "San Cristóbal",
    "country": "VE",
    "lat": 7.80132,
    "lon": -72.202904,
    "elevation": 3314
  },
  {
    "icao": "SVPR",
    "iata": "PZO",
    "name": "General Manuel Carlos Piar International Airport",
    "city": "Puerto Ordaz-Ciudad Guayana",
    "country": "VE",
    "lat": 8.28853,
    "lon": -62.760399,
    "elevation": 472
  },
  {
    "icao": "SVPT",
    "iata": "PTM",
    "name": "Palmarito Airport",
    "city": "Palmarito",
    "country": "VE",
    "lat": 7.575479,
    "lon": -70.174435,
    "elevation": 347
  },
  {
    "icao": "SVSA",
    "iata": "SVZ",
    "name": "San Antonio Del Tachira Airport",
    "city": "",
    "country": "VE",
    "lat": 7.84083,
    "lon": -72.439697,
    "elevation": 1312
  },
  {
    "icao": "SVSE",
    "iata": "SNV",
    "name": "Santa Elena de Uairen Airport",
    "city": "Santa Elena de Uairén",
    "country": "VE",
    "lat": 4.554699,
    "lon": -61.145234,
    "elevation": 2938
  },
  {
    "icao": "SVSO",
    "iata": "STD",
    "name": "Mayor Buenaventura Vivas International Airport",
    "city": "Santo Domingo",
    "country": "VE",
    "lat": 7.56538,
    "lon": -72.035103,
    "elevation": 1083
  },
  {
    "icao": "SVSP",
    "iata": "SNF",
    "name": "Sub Teniente Nestor Arias Airport",
    "city": "San Felipe",
    "country": "VE",
    "lat": 10.2787,
    "lon": -68.755203,
    "elevation": 761
  },
  {
    "icao": "SVSR",
    "iata": "SFD",
    "name": "San Fernando de Apure Las Flecheras National Airport",
    "city": "San Fernando de Apure",
    "country": "VE",
    "lat": 7.88332,
    "lon": -67.444,
    "elevation": 154
  },
  {
    "icao": "SVST",
    "iata": "SOM",
    "name": "San Tomé Airport",
    "city": "El Tigre",
    "country": "VE",
    "lat": 8.9451465606689,
    "lon": -64.151084899902,
    "elevation": 861
  },
  {
    "icao": "SVSZ",
    "iata": "STB",
    "name": "Miguel Urdaneta Fernández Airport",
    "city": "San Carlos del Zulia",
    "country": "VE",
    "lat": 8.97455,
    "lon": -71.943253,
    "elevation": 32
  },
  {
    "icao": "SVTC",
    "iata": "TUV",
    "name": "Tucupita Airport",
    "city": "Tucupita",
    "country": "VE",
    "lat": 9.088994,
    "lon": -62.094173,
    "elevation": 16
  },
  {
    "icao": "SVTM",
    "iata": "TMO",
    "name": "Tumeremo Airport",
    "city": "",
    "country": "VE",
    "lat": 7.24938,
    "lon": -61.52893,
    "elevation": 345
  },
  {
    "icao": "SVVA",
    "iata": "VLN",
    "name": "Arturo Michelena International Airport",
    "city": "Valencia",
    "country": "VE",
    "lat": 10.14973258972168,
    "lon": -67.92839813232422,
    "elevation": 1411
  },
  {
    "icao": "SVVG",
    "iata": "VIG",
    "name": "Juan Pablo Pérez Alfonso Airport",
    "city": "El Vigía",
    "country": "VE",
    "lat": 8.624139,
    "lon": -71.672668,
    "elevation": 250
  },
  {
    "icao": "SVVL",
    "iata": "VLV",
    "name": "Dr. Antonio Nicolás Briceño Airport",
    "city": "Valera",
    "country": "VE",
    "lat": 9.340478,
    "lon": -70.584061,
    "elevation": 2060
  },
  {
    "icao": "SVVP",
    "iata": "VDP",
    "name": "Valle de La Pascua Airport",
    "city": "",
    "country": "VE",
    "lat": 9.22202777863,
    "lon": -65.9935836792,
    "elevation": 410
  },
  {
    "icao": "SWGN",
    "iata": "AUX",
    "name": "Araguaína Airport",
    "city": "Araguaína",
    "country": "BR",
    "lat": -7.22787,
    "lon": -48.240501,
    "elevation": 771
  },
  {
    "icao": "SYCJ",
    "iata": "GEO",
    "name": "Cheddi Jagan International Airport",
    "city": "Georgetown",
    "country": "GY",
    "lat": 6.49855,
    "lon": -58.254101,
    "elevation": 95
  },
  {
    "icao": "SYEC",
    "iata": "OGL",
    "name": "Eugene F. Correia International Airport",
    "city": "Ogle",
    "country": "GY",
    "lat": 6.80628,
    "lon": -58.1059,
    "elevation": 10
  },
  {
    "icao": "SYKA",
    "iata": "KAI",
    "name": "Kaieteur International Airport",
    "city": "Kaieteur Falls",
    "country": "GY",
    "lat": 5.177349,
    "lon": -59.48898,
    "elevation": 1520
  },
  {
    "icao": "SYLT",
    "iata": "LTM",
    "name": "Lethem Airport",
    "city": "Lethem",
    "country": "GY",
    "lat": 3.37276,
    "lon": -59.789398,
    "elevation": 351
  },
  {
    "icao": "TAPA",
    "iata": "ANU",
    "name": "V C Bird International Airport",
    "city": "Osbourn",
    "country": "AG",
    "lat": 17.1367,
    "lon": -61.792702,
    "elevation": 62
  },
  {
    "icao": "TAPH",
    "iata": "BBQ",
    "name": "Codrington Airport",
    "city": "Codrington",
    "country": "AG",
    "lat": 17.635799,
    "lon": -61.828602,
    "elevation": 15
  },
  {
    "icao": "TBPB",
    "iata": "BGI",
    "name": "Grantley Adams International Airport",
    "city": "Bridgetown",
    "country": "BB",
    "lat": 13.0746,
    "lon": -59.4925,
    "elevation": 169
  },
  {
    "icao": "TDCF",
    "iata": "DCF",
    "name": "Canefield Airport",
    "city": "Canefield",
    "country": "DM",
    "lat": 15.336693,
    "lon": -61.392108,
    "elevation": 13
  },
  {
    "icao": "TDPD",
    "iata": "DOM",
    "name": "Douglas-Charles Airport",
    "city": "Marigot",
    "country": "DM",
    "lat": 15.547,
    "lon": -61.299999,
    "elevation": 73
  },
  {
    "icao": "TFFF",
    "iata": "FDF",
    "name": "Martinique Aimé Césaire International Airport",
    "city": "Fort-de-France",
    "country": "MQ",
    "lat": 14.591,
    "lon": -61.003201,
    "elevation": 16
  },
  {
    "icao": "TFFG",
    "iata": "SFG",
    "name": "Grand Case-l'Espérance Airport",
    "city": "Grand Case",
    "country": "MF",
    "lat": 18.100057,
    "lon": -63.047444,
    "elevation": 7
  },
  {
    "icao": "TFFJ",
    "iata": "SBH",
    "name": "Saint Barthélemy - Gustaf III Airport",
    "city": "Gustavia",
    "country": "BL",
    "lat": 17.9044,
    "lon": -62.843601,
    "elevation": 49
  },
  {
    "icao": "TFFM",
    "iata": "GBJ",
    "name": "Marie-Galante Airport",
    "city": "Grand-Bourg",
    "country": "GP",
    "lat": 15.868925,
    "lon": -61.270087,
    "elevation": 16
  },
  {
    "icao": "TFFR",
    "iata": "PTP",
    "name": "Guadeloupe - Maryse Condé International Airport",
    "city": "Pointe-à-Pitre",
    "country": "GP",
    "lat": 16.265301,
    "lon": -61.531799,
    "elevation": 36
  },
  {
    "icao": "TGPY",
    "iata": "GND",
    "name": "Maurice Bishop International Airport",
    "city": "Saint George's",
    "country": "GD",
    "lat": 12.0042,
    "lon": -61.786201,
    "elevation": 41
  },
  {
    "icao": "TIST",
    "iata": "STT",
    "name": "Cyril E. King Airport",
    "city": "Charlotte Amalie",
    "country": "VI",
    "lat": 18.337091,
    "lon": -64.977251,
    "elevation": 23
  },
  {
    "icao": "TISX",
    "iata": "STX",
    "name": "Henry E Rohlsen Airport",
    "city": "Christiansted",
    "country": "VI",
    "lat": 17.701413,
    "lon": -64.802608,
    "elevation": 74
  },
  {
    "icao": "TJAB",
    "iata": "ARE",
    "name": "Antonio Nery Juarbe Pol Airport",
    "city": "Arecibo",
    "country": "PR",
    "lat": 18.45085,
    "lon": -66.675768,
    "elevation": 23
  },
  {
    "icao": "TJBQ",
    "iata": "BQN",
    "name": "Rafael Hernández International Airport",
    "city": "Aguadilla",
    "country": "PR",
    "lat": 18.4949,
    "lon": -67.129402,
    "elevation": 237
  },
  {
    "icao": "TJCP",
    "iata": "CPX",
    "name": "Benjamin Rivera Noriega Airport",
    "city": "Culebra",
    "country": "PR",
    "lat": 18.312954,
    "lon": -65.303893,
    "elevation": 49
  },
  {
    "icao": "TJIG",
    "iata": "SIG",
    "name": "Fernando Luis Ribas Dominicci Airport",
    "city": "San Juan",
    "country": "PR",
    "lat": 18.45680046081543,
    "lon": -66.09809875488281,
    "elevation": 10
  },
  {
    "icao": "TJMZ",
    "iata": "MAZ",
    "name": "Eugenio Maria De Hostos Airport",
    "city": "Mayaguez",
    "country": "PR",
    "lat": 18.255699157714844,
    "lon": -67.14849853515625,
    "elevation": 28
  },
  {
    "icao": "TJPS",
    "iata": "PSE",
    "name": "Mercedita Airport",
    "city": "Ponce",
    "country": "PR",
    "lat": 18.00830078125,
    "lon": -66.56300354003906,
    "elevation": 29
  },
  {
    "icao": "TJRV",
    "iata": "NRR",
    "name": "José Aponte de la Torre Airport",
    "city": "Ceiba",
    "country": "PR",
    "lat": 18.2453,
    "lon": -65.643402,
    "elevation": 38
  },
  {
    "icao": "TJSJ",
    "iata": "SJU",
    "name": "Luis Munoz Marin International Airport",
    "city": "San Juan",
    "country": "PR",
    "lat": 18.4394,
    "lon": -66.001801,
    "elevation": 9
  },
  {
    "icao": "TJVQ",
    "iata": "VQS",
    "name": "Antonio Rivera Rodriguez Airport",
    "city": "Vieques",
    "country": "PR",
    "lat": 18.1348,
    "lon": -65.493599,
    "elevation": 49
  },
  {
    "icao": "TKPK",
    "iata": "SKB",
    "name": "Robert L. Bradshaw International Airport",
    "city": "Basseterre",
    "country": "KN",
    "lat": 17.311199188232422,
    "lon": -62.71870040893555,
    "elevation": 170
  },
  {
    "icao": "TKPN",
    "iata": "NEV",
    "name": "Vance W. Amory International Airport",
    "city": "Charlestown",
    "country": "KN",
    "lat": 17.205699920654297,
    "lon": -62.589900970458984,
    "elevation": 14
  },
  {
    "icao": "TLPC",
    "iata": "SLU",
    "name": "George F. L. Charles Airport",
    "city": "Castries",
    "country": "LC",
    "lat": 14.0202,
    "lon": -60.992901,
    "elevation": 22
  },
  {
    "icao": "TLPL",
    "iata": "UVF",
    "name": "Hewanorra International Airport",
    "city": "Vieux Fort",
    "country": "LC",
    "lat": 13.7332,
    "lon": -60.952599,
    "elevation": 14
  },
  {
    "icao": "TNCA",
    "iata": "AUA",
    "name": "Queen Beatrix International Airport",
    "city": "Oranjestad",
    "country": "AW",
    "lat": 12.5014,
    "lon": -70.015198,
    "elevation": 60
  },
  {
    "icao": "TNCB",
    "iata": "BON",
    "name": "Flamingo International Airport",
    "city": "Kralendijk",
    "country": "BQ",
    "lat": 12.131,
    "lon": -68.268501,
    "elevation": 20
  },
  {
    "icao": "TNCC",
    "iata": "CUR",
    "name": "Hato International Airport",
    "city": "Willemstad",
    "country": "CW",
    "lat": 12.1889,
    "lon": -68.959801,
    "elevation": 29
  },
  {
    "icao": "TNCE",
    "iata": "EUX",
    "name": "F. D. Roosevelt Airport",
    "city": "Oranjestad",
    "country": "BQ",
    "lat": 17.4965,
    "lon": -62.979401,
    "elevation": 129
  },
  {
    "icao": "TNCM",
    "iata": "SXM",
    "name": "Princess Juliana International Airport",
    "city": "Sint Maarten",
    "country": "SX",
    "lat": 18.041,
    "lon": -63.108898,
    "elevation": 13
  },
  {
    "icao": "TNCS",
    "iata": "SAB",
    "name": "Juancho E. Yrausquin Airport",
    "city": "Zion's Hill",
    "country": "BQ",
    "lat": 17.645351,
    "lon": -63.220571,
    "elevation": 60
  },
  {
    "icao": "TQPF",
    "iata": "AXA",
    "name": "Clayton J Lloyd International Airport",
    "city": "The Valley",
    "country": "AI",
    "lat": 18.204773,
    "lon": -63.05383,
    "elevation": 127
  },
  {
    "icao": "TRPG",
    "iata": "MNI",
    "name": "John A. Osborne Airport",
    "city": "Gerald's Park",
    "country": "MS",
    "lat": 16.791401,
    "lon": -62.193298,
    "elevation": 550
  },
  {
    "icao": "TTCP",
    "iata": "TAB",
    "name": "A.N.R. Robinson International Airport",
    "city": "Scarborough",
    "country": "TT",
    "lat": 11.1497,
    "lon": -60.832199,
    "elevation": 38
  },
  {
    "icao": "TTPP",
    "iata": "POS",
    "name": "Piarco International Airport",
    "city": "Port of Spain",
    "country": "TT",
    "lat": 10.5954,
    "lon": -61.3372,
    "elevation": 58
  },
  {
    "icao": "TUPJ",
    "iata": "EIS",
    "name": "Terrance B. Lettsome International Airport",
    "city": "Beef Island",
    "country": "VG",
    "lat": 18.445492,
    "lon": -64.541707,
    "elevation": 15
  },
  {
    "icao": "TVSA",
    "iata": "SVD",
    "name": "Argyle International Airport",
    "city": "Kingstown",
    "country": "VC",
    "lat": 13.156695,
    "lon": -61.149945,
    "elevation": 136
  },
  {
    "icao": "TVSB",
    "iata": "BQU",
    "name": "J F Mitchell Airport",
    "city": "Bequia",
    "country": "VC",
    "lat": 12.9884,
    "lon": -61.262001,
    "elevation": 15
  },
  {
    "icao": "TVSC",
    "iata": "CIW",
    "name": "Canouan Airport",
    "city": "Canouan",
    "country": "VC",
    "lat": 12.699,
    "lon": -61.3424,
    "elevation": 11
  },
  {
    "icao": "TVSM",
    "iata": "MQS",
    "name": "Mustique Airport",
    "city": "Lovell",
    "country": "VC",
    "lat": 12.8879,
    "lon": -61.180199,
    "elevation": 8
  },
  {
    "icao": "TVSU",
    "iata": "UNI",
    "name": "Union Island International Airport",
    "city": "Union Island",
    "country": "VC",
    "lat": 12.600135,
    "lon": -61.411945,
    "elevation": 16
  },
  {
    "icao": "TXKF",
    "iata": "BDA",
    "name": "L.F. Wade International Airport",
    "city": "Hamilton",
    "country": "BM",
    "lat": 32.363998,
    "lon": -64.678703,
    "elevation": 12
  },
  {
    "icao": "UAAA",
    "iata": "ALA",
    "name": "Almaty International Airport",
    "city": "Almaty",
    "country": "KZ",
    "lat": 43.354267,
    "lon": 77.042828,
    "elevation": 2234
  },
  {
    "icao": "UAAH",
    "iata": "BXH",
    "name": "Balkhash Airport",
    "city": "Balkhash",
    "country": "KZ",
    "lat": 46.894246,
    "lon": 75.004533,
    "elevation": 1446
  },
  {
    "icao": "UAAT",
    "iata": "TDK",
    "name": "Taldykorgan Airport",
    "city": "Taldykorgan",
    "country": "KZ",
    "lat": 45.12255,
    "lon": 78.442758,
    "elevation": 1925
  },
  {
    "icao": "UACC",
    "iata": "NQZ",
    "name": "Nursultan Nazarbayev International Airport",
    "city": "Astana",
    "country": "KZ",
    "lat": 51.027035,
    "lon": 71.467094,
    "elevation": 1165
  },
  {
    "icao": "UACK",
    "iata": "KOV",
    "name": "Kokshetau Airport",
    "city": "Kokshetau",
    "country": "KZ",
    "lat": 53.329102,
    "lon": 69.594597,
    "elevation": 900
  },
  {
    "icao": "UACP",
    "iata": "PPK",
    "name": "Petropavl Airport",
    "city": "Petropavl",
    "country": "KZ",
    "lat": 54.774702,
    "lon": 69.183273,
    "elevation": 453
  },
  {
    "icao": "UADD",
    "iata": "DMB",
    "name": "Taraz Airport",
    "city": "Taraz",
    "country": "KZ",
    "lat": 42.853599548339844,
    "lon": 71.30359649658203,
    "elevation": 2184
  },
  {
    "icao": "UCFM",
    "iata": "BSZ",
    "name": "Manas International Airport",
    "city": "Bishkek",
    "country": "KG",
    "lat": 43.061298,
    "lon": 74.4776,
    "elevation": 2058
  },
  {
    "icao": "UCFO",
    "iata": "OSS",
    "name": "Osh Airport",
    "city": "Osh",
    "country": "KG",
    "lat": 40.609001,
    "lon": 72.793297,
    "elevation": 2927
  },
  {
    "icao": "UAII",
    "iata": "CIT",
    "name": "Shymkent Airport",
    "city": "Shymkent",
    "country": "KZ",
    "lat": 42.364200592041016,
    "lon": 69.47889709472656,
    "elevation": 1385
  },
  {
    "icao": "UAIT",
    "iata": "HSA",
    "name": "Hazrat Sultan International Airport",
    "city": "Turkıstan",
    "country": "KZ",
    "lat": 43.313126,
    "lon": 68.549881,
    "elevation": 951
  },
  {
    "icao": "UAKD",
    "iata": "DZN",
    "name": "Zhezkazgan National Airport",
    "city": "Zhezkazgan",
    "country": "KZ",
    "lat": 47.708953,
    "lon": 67.738094,
    "elevation": 1250
  },
  {
    "icao": "UAKK",
    "iata": "KGF",
    "name": "Sary-Arka Airport",
    "city": "Karaganda",
    "country": "KZ",
    "lat": 49.670799,
    "lon": 73.334396,
    "elevation": 1765
  },
  {
    "icao": "UAOL",
    "iata": "BXY",
    "name": "Baikonur Krayniy Airport",
    "city": "Baikonur",
    "country": "KZ",
    "lat": 45.621994,
    "lon": 63.210773,
    "elevation": 317
  },
  {
    "icao": "UARR",
    "iata": "URA",
    "name": "Uralsk Airport",
    "city": "Uralsk",
    "country": "KZ",
    "lat": 51.15079879760742,
    "lon": 51.54309844970703,
    "elevation": 125
  },
  {
    "icao": "UASB",
    "iata": "EKB",
    "name": "Ekibastuz Airport",
    "city": "Ekibastuz",
    "country": "KZ",
    "lat": 51.590999603271484,
    "lon": 75.21499633789062,
    "elevation": 621
  },
  {
    "icao": "UASK",
    "iata": "UKK",
    "name": "Ust-Kamenogorsk Airport",
    "city": "Ust-Kamenogorsk (Oskemen)",
    "country": "KZ",
    "lat": 50.036571,
    "lon": 82.493477,
    "elevation": 939
  },
  {
    "icao": "UASP",
    "iata": "PWQ",
    "name": "Pavlodar Airport",
    "city": "Pavlodar",
    "country": "KZ",
    "lat": 52.19499969482422,
    "lon": 77.07389831542969,
    "elevation": 410
  },
  {
    "icao": "UASS",
    "iata": "PLX",
    "name": "Semey Airport",
    "city": "Semey",
    "country": "KZ",
    "lat": 50.351295,
    "lon": 80.234398,
    "elevation": 761
  },
  {
    "icao": "UATE",
    "iata": "SCO",
    "name": "Aktau Airport",
    "city": "Aktau",
    "country": "KZ",
    "lat": 43.860093,
    "lon": 51.09086,
    "elevation": 73
  },
  {
    "icao": "UATG",
    "iata": "GUW",
    "name": "Atyrau International Airport",
    "city": "Atyrau",
    "country": "KZ",
    "lat": 47.122559,
    "lon": 51.819321,
    "elevation": -72
  },
  {
    "icao": "UATT",
    "iata": "AKX",
    "name": "Aktobe Airport",
    "city": "Aktobe",
    "country": "KZ",
    "lat": 50.2458,
    "lon": 57.206699,
    "elevation": 738
  },
  {
    "icao": "UAUU",
    "iata": "KSN",
    "name": "Kostanay West Airport",
    "city": "Kostanay",
    "country": "KZ",
    "lat": 53.20690155029297,
    "lon": 63.55030059814453,
    "elevation": 595
  },
  {
    "icao": "UBBB",
    "iata": "GYD",
    "name": "Heydar Aliyev International Airport",
    "city": "Baku",
    "country": "AZ",
    "lat": 40.467498779296875,
    "lon": 50.04669952392578,
    "elevation": 10
  },
  {
    "icao": "UBBG",
    "iata": "GNJ",
    "name": "Ganja International Airport",
    "city": "Ganja",
    "country": "AZ",
    "lat": 40.738935,
    "lon": 46.320067,
    "elevation": 1083
  },
  {
    "icao": "UBBN",
    "iata": "NAJ",
    "name": "Nakhchivan Airport",
    "city": "Nakhchivan",
    "country": "AZ",
    "lat": 39.18880081176758,
    "lon": 45.45840072631836,
    "elevation": 2863
  },
  {
    "icao": "UBBQ",
    "iata": "GBB",
    "name": "Gabala International Airport",
    "city": "Gabala",
    "country": "AZ",
    "lat": 40.808617,
    "lon": 47.725389,
    "elevation": 935
  },
  {
    "icao": "UBBY",
    "iata": "ZTU",
    "name": "Zaqatala International Airport",
    "city": "Zaqatala",
    "country": "AZ",
    "lat": 41.557823,
    "lon": 46.669464,
    "elevation": 1279
  },
  {
    "icao": "UCFL",
    "iata": "IKU",
    "name": "Issyk-Kul International Airport",
    "city": "Tamchy",
    "country": "KG",
    "lat": 42.585584,
    "lon": 76.701181,
    "elevation": 5425
  },
  {
    "icao": "UDSG",
    "iata": "LWN",
    "name": "Shirak International Airport",
    "city": "Gyumri",
    "country": "AM",
    "lat": 40.750401,
    "lon": 43.859299,
    "elevation": 5000
  },
  {
    "icao": "UDYZ",
    "iata": "EVN",
    "name": "Zvartnots International Airport",
    "city": "Yerevan",
    "country": "AM",
    "lat": 40.1473007202,
    "lon": 44.3959007263,
    "elevation": 2838
  },
  {
    "icao": "UEEE",
    "iata": "YKS",
    "name": "Yakutsk Airport",
    "city": "Yakutsk",
    "country": "RU",
    "lat": 62.093299865722656,
    "lon": 129.77099609375,
    "elevation": 325
  },
  {
    "icao": "UELL",
    "iata": "NER",
    "name": "Chulman Airport",
    "city": "Neryungri",
    "country": "RU",
    "lat": 56.913898468018,
    "lon": 124.91400146484,
    "elevation": 2812
  },
  {
    "icao": "UEMA",
    "iata": "MQJ",
    "name": "Moma Airport",
    "city": "Khonuu",
    "country": "RU",
    "lat": 66.450861,
    "lon": 143.261551,
    "elevation": 656
  },
  {
    "icao": "UEMM",
    "iata": "GYG",
    "name": "Magan Airport",
    "city": "Magan",
    "country": "RU",
    "lat": 62.103484,
    "lon": 129.545288,
    "elevation": 577
  },
  {
    "icao": "UEMO",
    "iata": "OLZ",
    "name": "Olyokminsk Airport",
    "city": "Olyokminsk",
    "country": "RU",
    "lat": 60.401833,
    "lon": 120.476094,
    "elevation": 656
  },
  {
    "icao": "UEMT",
    "iata": "USR",
    "name": "Ust-Nera Airport",
    "city": "Ust-Nera",
    "country": "RU",
    "lat": 64.550003,
    "lon": 143.115005,
    "elevation": 1805
  },
  {
    "icao": "UENW",
    "iata": "VYI",
    "name": "Vilyuisk Airport",
    "city": "Vilyuisk",
    "country": "RU",
    "lat": 63.756668,
    "lon": 121.693336,
    "elevation": 361
  },
  {
    "icao": "UERL",
    "iata": "ULK",
    "name": "Lensk Airport",
    "city": "Lensk",
    "country": "RU",
    "lat": 60.7206001282,
    "lon": 114.825996399,
    "elevation": 801
  },
  {
    "icao": "UERP",
    "iata": "PYJ",
    "name": "Polyarny Airport",
    "city": "Yakutia",
    "country": "RU",
    "lat": 66.400398,
    "lon": 112.029999,
    "elevation": 1660
  },
  {
    "icao": "UERR",
    "iata": "MJZ",
    "name": "Mirny Airport",
    "city": "Mirny",
    "country": "RU",
    "lat": 62.534698486328125,
    "lon": 114.03900146484375,
    "elevation": 1156
  },
  {
    "icao": "UERS",
    "iata": "SYS",
    "name": "Saskylakh Airport",
    "city": "Saskylakh",
    "country": "RU",
    "lat": 71.927902,
    "lon": 114.080002,
    "elevation": 0
  },
  {
    "icao": "UESG",
    "iata": "BGN",
    "name": "Belaya Gora Airport",
    "city": "Belaya Gora",
    "country": "RU",
    "lat": 68.556227,
    "lon": 146.22784,
    "elevation": 118
  },
  {
    "icao": "UESK",
    "iata": "SEK",
    "name": "Srednekolymsk Airport",
    "city": "Srednekolymsk",
    "country": "RU",
    "lat": 67.4805,
    "lon": 153.7364,
    "elevation": 60
  },
  {
    "icao": "UESO",
    "iata": "CKH",
    "name": "Chokurdakh Airport",
    "city": "Chokurdah",
    "country": "RU",
    "lat": 70.6231,
    "lon": 147.901993,
    "elevation": 151
  },
  {
    "icao": "UESS",
    "iata": "CYX",
    "name": "Cherskiy Airport",
    "city": "Cherskiy",
    "country": "RU",
    "lat": 68.7406005859375,
    "lon": 161.33799743652344,
    "elevation": 20
  },
  {
    "icao": "UEST",
    "iata": "IKS",
    "name": "Tiksi Airport",
    "city": "Tiksi",
    "country": "RU",
    "lat": 71.697700500488,
    "lon": 128.90299987793,
    "elevation": 26
  },
  {
    "icao": "UESU",
    "iata": "ZKP",
    "name": "Zyryanka Airport",
    "city": "Zyryanka",
    "country": "RU",
    "lat": 65.7485,
    "lon": 150.8889,
    "elevation": 140
  },
  {
    "icao": "UEVV",
    "iata": "ZIX",
    "name": "Zhigansk Airport",
    "city": "Zhigansk",
    "country": "RU",
    "lat": 66.7965011597,
    "lon": 123.361000061,
    "elevation": 292
  },
  {
    "icao": "UGKO",
    "iata": "KUT",
    "name": "David the Builder Kutaisi International Airport",
    "city": "Kopitnari",
    "country": "GE",
    "lat": 42.176768,
    "lon": 42.482393,
    "elevation": 223
  },
  {
    "icao": "UGSB",
    "iata": "BUS",
    "name": "Batumi International Airport",
    "city": "Batumi",
    "country": "GE",
    "lat": 41.610298,
    "lon": 41.599701,
    "elevation": 105
  },
  {
    "icao": "UGSS",
    "iata": "SUI",
    "name": "Sukhumi Babushara /  Vladislav Ardzinba International Airport",
    "city": "Sukhumi",
    "country": "GE",
    "lat": 42.8582,
    "lon": 41.128101,
    "elevation": 53
  },
  {
    "icao": "UGTB",
    "iata": "TBS",
    "name": "Tbilisi International Airport",
    "city": "Tbilisi",
    "country": "GE",
    "lat": 41.669201,
    "lon": 44.9547,
    "elevation": 1624
  },
  {
    "icao": "UHBB",
    "iata": "BQS",
    "name": "Ignatyevo Airport",
    "city": "Blagoveschensk",
    "country": "RU",
    "lat": 50.42539978027344,
    "lon": 127.41200256347656,
    "elevation": 638
  },
  {
    "icao": "UHHH",
    "iata": "KHV",
    "name": "Khabarovsk Novy Airport",
    "city": "Khabarovsk",
    "country": "RU",
    "lat": 48.528338,
    "lon": 135.188588,
    "elevation": 244
  },
  {
    "icao": "UHKK",
    "iata": "KXK",
    "name": "Komsomolsk-on-Amur Airport",
    "city": "Komsomolsk-on-Amur",
    "country": "RU",
    "lat": 50.409000396728516,
    "lon": 136.9340057373047,
    "elevation": 92
  },
  {
    "icao": "UHKM",
    "iata": "GVN",
    "name": "Sovetskaya Gavan (Maygatka) Airport",
    "city": "Sovetskaya Gavan",
    "country": "RU",
    "lat": 48.925067,
    "lon": 140.035348,
    "elevation": 768
  },
  {
    "icao": "UHMA",
    "iata": "DYR",
    "name": "Ugolny Yuri Ryktheu Airport",
    "city": "Anadyr",
    "country": "RU",
    "lat": 64.734902,
    "lon": 177.740997,
    "elevation": 194
  },
  {
    "icao": "UHMD",
    "iata": "PVS",
    "name": "Provideniya Bay Airport",
    "city": "Chukotka",
    "country": "RU",
    "lat": 64.37809753417969,
    "lon": -173.2429962158203,
    "elevation": 72
  },
  {
    "icao": "UHMK",
    "iata": "KPW",
    "name": "Keperveem Airport",
    "city": "Keperveem",
    "country": "RU",
    "lat": 67.845001,
    "lon": 166.139999,
    "elevation": 623
  },
  {
    "icao": "UHMM",
    "iata": "GDX",
    "name": "Sokol Airport",
    "city": "Magadan",
    "country": "RU",
    "lat": 59.9109992980957,
    "lon": 150.72000122070312,
    "elevation": 574
  },
  {
    "icao": "UHMP",
    "iata": "PWE",
    "name": "Pevek Airport",
    "city": "Apapelgino",
    "country": "RU",
    "lat": 69.783302,
    "lon": 170.597,
    "elevation": 11
  },
  {
    "icao": "UHMW",
    "iata": "SWV",
    "name": "Severo-Evensk Airport",
    "city": "Evensk",
    "country": "RU",
    "lat": 61.921786,
    "lon": 159.229059,
    "elevation": 32
  },
  {
    "icao": "UHNN",
    "iata": "NLI",
    "name": "Nikolayevsk-na-Amure Airport",
    "city": "Nikolayevsk-na-Amure Airport",
    "country": "RU",
    "lat": 53.154999,
    "lon": 140.649994,
    "elevation": 170
  },
  {
    "icao": "UHOO",
    "iata": "OHO",
    "name": "Okhotsk Airport",
    "city": "Okhotsk",
    "country": "RU",
    "lat": 59.410065,
    "lon": 143.056503,
    "elevation": 45
  },
  {
    "icao": "UHPP",
    "iata": "PKC",
    "name": "Yelizovo Airport",
    "city": "Petropavlovsk-Kamchatsky",
    "country": "RU",
    "lat": 53.16764,
    "lon": 158.451863,
    "elevation": 131
  },
  {
    "icao": "UHSS",
    "iata": "UUS",
    "name": "Yuzhno-Sakhalinsk Airport",
    "city": "Yuzhno-Sakhalinsk",
    "country": "RU",
    "lat": 46.885461,
    "lon": 142.717466,
    "elevation": 59
  },
  {
    "icao": "UHWW",
    "iata": "VVO",
    "name": "Vladivostok International Airport",
    "city": "Artyom",
    "country": "RU",
    "lat": 43.396256,
    "lon": 132.148155,
    "elevation": 59
  },
  {
    "icao": "UIAA",
    "iata": "HTA",
    "name": "Chita-Kadala International Airport",
    "city": "Chita",
    "country": "RU",
    "lat": 52.026299,
    "lon": 113.306,
    "elevation": 2272
  },
  {
    "icao": "UIBB",
    "iata": "BTK",
    "name": "Bratsk Airport",
    "city": "Bratsk",
    "country": "RU",
    "lat": 56.370601654052734,
    "lon": 101.697998046875,
    "elevation": 1610
  },
  {
    "icao": "UIII",
    "iata": "IKT",
    "name": "Irkutsk International Airport",
    "city": "Irkutsk",
    "country": "RU",
    "lat": 52.268002,
    "lon": 104.389,
    "elevation": 1675
  },
  {
    "icao": "UITT",
    "iata": "UKX",
    "name": "Ust-Kut Airport",
    "city": "Ust-Kut",
    "country": "RU",
    "lat": 56.856701,
    "lon": 105.730003,
    "elevation": 2188
  },
  {
    "icao": "UIUU",
    "iata": "UUD",
    "name": "Baikal International Airport",
    "city": "Ulan Ude",
    "country": "RU",
    "lat": 51.808614,
    "lon": 107.439652,
    "elevation": 1690
  },
  {
    "icao": "UKBB",
    "iata": "KBP",
    "name": "Boryspil International Airport",
    "city": "Boryspil",
    "country": "UA",
    "lat": 50.345001,
    "lon": 30.894699,
    "elevation": 427
  },
  {
    "icao": "UKCM",
    "iata": "MPW",
    "name": "Mariupol International Airport",
    "city": "Mariupol",
    "country": "UA",
    "lat": 47.07609939575195,
    "lon": 37.44960021972656,
    "elevation": 251
  },
  {
    "icao": "UKDB",
    "iata": "ERD",
    "name": "Berdyansk Airport",
    "city": "Berdyansk",
    "country": "UA",
    "lat": 46.814999,
    "lon": 36.758099,
    "elevation": 171
  },
  {
    "icao": "UKDD",
    "iata": "DNK",
    "name": "Dnipro International Airport",
    "city": "Dnipro",
    "country": "UA",
    "lat": 48.357201,
    "lon": 35.100601,
    "elevation": 481
  },
  {
    "icao": "UKDE",
    "iata": "OZH",
    "name": "Zaporizhzhia International Airport",
    "city": "Zaporizhia",
    "country": "UA",
    "lat": 47.867000579833984,
    "lon": 35.31570053100586,
    "elevation": 373
  },
  {
    "icao": "UKDR",
    "iata": "KWG",
    "name": "Kryvyi Rih International Airport",
    "city": "Kryvyi Rih",
    "country": "UA",
    "lat": 48.04330062866211,
    "lon": 33.209999084472656,
    "elevation": 408
  },
  {
    "icao": "UKFB",
    "iata": "UKS",
    "name": "Sevastopol International Airport / Belbek Air Base",
    "city": "Sevastopol",
    "country": "UA",
    "lat": 44.691822,
    "lon": 33.57462,
    "elevation": 344
  },
  {
    "icao": "UKFF",
    "iata": "SIP",
    "name": "Simferopol International Airport",
    "city": "Simferopol",
    "country": "UA",
    "lat": 45.0522,
    "lon": 33.975101,
    "elevation": 639
  },
  {
    "icao": "UKHH",
    "iata": "HRK",
    "name": "Kharkiv International Airport",
    "city": "Kharkiv",
    "country": "UA",
    "lat": 49.926943,
    "lon": 36.290814,
    "elevation": 508
  },
  {
    "icao": "UKKE",
    "iata": "CKC",
    "name": "Cherkasy International Airport",
    "city": "Cherkasy",
    "country": "UA",
    "lat": 49.4156,
    "lon": 31.9953,
    "elevation": 375
  },
  {
    "icao": "UKKK",
    "iata": "IEV",
    "name": "Ihor Sikorsky Kyiv International Airport (Zhuliany)",
    "city": "Kyiv",
    "country": "UA",
    "lat": 50.40194,
    "lon": 30.45194,
    "elevation": 587
  },
  {
    "icao": "UKLH",
    "iata": "HMJ",
    "name": "Khmelnytskyi Airport",
    "city": "Khmelnytskyi",
    "country": "UA",
    "lat": 49.359699,
    "lon": 26.933399,
    "elevation": 1150
  },
  {
    "icao": "UKLI",
    "iata": "IFO",
    "name": "Ivano-Frankivsk International Airport",
    "city": "Ivano-Frankivsk",
    "country": "UA",
    "lat": 48.88420104980469,
    "lon": 24.686100006103516,
    "elevation": 919
  },
  {
    "icao": "UKLL",
    "iata": "LWO",
    "name": "Lviv International Airport",
    "city": "Lviv",
    "country": "UA",
    "lat": 49.8125,
    "lon": 23.9561,
    "elevation": 1071
  },
  {
    "icao": "UKLN",
    "iata": "CWC",
    "name": "Chernivtsi International Airport",
    "city": "Chernivtsi",
    "country": "UA",
    "lat": 48.259300231933594,
    "lon": 25.98080062866211,
    "elevation": 826
  },
  {
    "icao": "UKLR",
    "iata": "RWN",
    "name": "Rivne International Airport",
    "city": "Rivne",
    "country": "UA",
    "lat": 50.60710144042969,
    "lon": 26.141599655151367,
    "elevation": 755
  },
  {
    "icao": "UKLU",
    "iata": "UDJ",
    "name": "Uzhhorod International Airport",
    "city": "Uzhhorod",
    "country": "UA",
    "lat": 48.6343,
    "lon": 22.263399,
    "elevation": 383
  },
  {
    "icao": "UKOH",
    "iata": "KHE",
    "name": "Kherson International Airport",
    "city": "Kherson",
    "country": "UA",
    "lat": 46.6758,
    "lon": 32.506401,
    "elevation": 148
  },
  {
    "icao": "UKON",
    "iata": "NLV",
    "name": "Mykolaiv International Airport",
    "city": "Nikolayev",
    "country": "UA",
    "lat": 47.057899,
    "lon": 31.9198,
    "elevation": 184
  },
  {
    "icao": "UKOO",
    "iata": "ODS",
    "name": "Odessa International Airport",
    "city": "Odessa",
    "country": "UA",
    "lat": 46.4268,
    "lon": 30.6765,
    "elevation": 172
  },
  {
    "icao": "UKWW",
    "iata": "VIN",
    "name": "Vinnytsia/Gavyryshivka International Airport",
    "city": "Vinnitsa",
    "country": "UA",
    "lat": 49.242531,
    "lon": 28.613778,
    "elevation": 961
  },
  {
    "icao": "ULAA",
    "iata": "ARH",
    "name": "Talagi Airport",
    "city": "Archangelsk",
    "country": "RU",
    "lat": 64.60030364990234,
    "lon": 40.71670150756836,
    "elevation": 62
  },
  {
    "icao": "ULAH",
    "iata": "VKV",
    "name": "Vaskovo Airport",
    "city": "Arkhangelsk",
    "country": "RU",
    "lat": 64.441704,
    "lon": 40.4217,
    "elevation": 82
  },
  {
    "icao": "ULAM",
    "iata": "NNM",
    "name": "Naryan Mar Airport",
    "city": "Naryan Mar",
    "country": "RU",
    "lat": 67.639999,
    "lon": 53.121899,
    "elevation": 36
  },
  {
    "icao": "ULDD",
    "iata": "AMV",
    "name": "Amderma Airport",
    "city": "Amderma",
    "country": "RU",
    "lat": 69.76329803466797,
    "lon": 61.556400299072266,
    "elevation": 13
  },
  {
    "icao": "ULKK",
    "iata": "KSZ",
    "name": "Kotlas Airport",
    "city": "Kotlas",
    "country": "RU",
    "lat": 61.235801696777344,
    "lon": 46.6974983215332,
    "elevation": 184
  },
  {
    "icao": "ULLI",
    "iata": "LED",
    "name": "Pulkovo Airport",
    "city": "St. Petersburg",
    "country": "RU",
    "lat": 59.800301,
    "lon": 30.262501,
    "elevation": 78
  },
  {
    "icao": "ULMM",
    "iata": "MMK",
    "name": "Murmansk Airport",
    "city": "Murmansk",
    "country": "RU",
    "lat": 68.78170013427734,
    "lon": 32.75080108642578,
    "elevation": 266
  },
  {
    "icao": "ULOO",
    "iata": "PKV",
    "name": "Pskov Airport",
    "city": "Pskov",
    "country": "RU",
    "lat": 57.78390121459961,
    "lon": 28.395599365234375,
    "elevation": 154
  },
  {
    "icao": "ULPB",
    "iata": "PES",
    "name": "Petrozavodsk Airport",
    "city": "Petrozavodsk",
    "country": "RU",
    "lat": 61.88520050048828,
    "lon": 34.154701232910156,
    "elevation": 151
  },
  {
    "icao": "ULWC",
    "iata": "CEE",
    "name": "Cherepovets Airport",
    "city": "Cherepovets",
    "country": "RU",
    "lat": 59.273601532,
    "lon": 38.015800476100004,
    "elevation": 377
  },
  {
    "icao": "ULWU",
    "iata": "VUS",
    "name": "Velikiy Ustyug Airport",
    "city": "Velikiy Ustyug",
    "country": "RU",
    "lat": 60.7883,
    "lon": 46.259998,
    "elevation": 331
  },
  {
    "icao": "ULWW",
    "iata": "VGD",
    "name": "Vologda Airport",
    "city": "Vologda",
    "country": "RU",
    "lat": 59.282501,
    "lon": 39.944401,
    "elevation": 387
  },
  {
    "icao": "UMBB",
    "iata": "BQT",
    "name": "Brest Airport",
    "city": "Brest",
    "country": "BY",
    "lat": 52.108299,
    "lon": 23.8981,
    "elevation": 468
  },
  {
    "icao": "UMGG",
    "iata": "GME",
    "name": "Gomel Airport",
    "city": "Gomel",
    "country": "BY",
    "lat": 52.527000427246094,
    "lon": 31.016700744628906,
    "elevation": 472
  },
  {
    "icao": "UMII",
    "iata": "VTB",
    "name": "Vitebsk Vostochny Airport",
    "city": "Vitebsk",
    "country": "BY",
    "lat": 55.126499176025,
    "lon": 30.349599838257,
    "elevation": 682
  },
  {
    "icao": "UMKK",
    "iata": "KGD",
    "name": "Khrabrovo Airport",
    "city": "Kaliningrad",
    "country": "RU",
    "lat": 54.88999938964844,
    "lon": 20.592599868774414,
    "elevation": 42
  },
  {
    "icao": "UMMG",
    "iata": "GNA",
    "name": "Hrodna Airport",
    "city": "Hrodna",
    "country": "BY",
    "lat": 53.602001,
    "lon": 24.053801,
    "elevation": 443
  },
  {
    "icao": "UMMS",
    "iata": "MSQ",
    "name": "Minsk National Airport",
    "city": "Minsk",
    "country": "BY",
    "lat": 53.888071,
    "lon": 28.039964,
    "elevation": 670
  },
  {
    "icao": "UMOO",
    "iata": "MVQ",
    "name": "Mogilev Airport",
    "city": "Mogilev",
    "country": "BY",
    "lat": 53.954898834228516,
    "lon": 30.09510040283203,
    "elevation": 637
  },
  {
    "icao": "UNAA",
    "iata": "ABA",
    "name": "Abakan International Airport",
    "city": "Abakan",
    "country": "RU",
    "lat": 53.740002,
    "lon": 91.385002,
    "elevation": 831
  },
  {
    "icao": "UNBB",
    "iata": "BAX",
    "name": "Barnaul Airport",
    "city": "Barnaul",
    "country": "RU",
    "lat": 53.363800048828125,
    "lon": 83.53849792480469,
    "elevation": 837
  },
  {
    "icao": "UNBG",
    "iata": "RGK",
    "name": "Gorno-Altaysk Airport",
    "city": "Gorno-Altaysk",
    "country": "RU",
    "lat": 51.969204,
    "lon": 85.836539,
    "elevation": 965
  },
  {
    "icao": "UNEE",
    "iata": "KEJ",
    "name": "Kemerovo Airport",
    "city": "Kemerovo",
    "country": "RU",
    "lat": 55.27009963989258,
    "lon": 86.1072006225586,
    "elevation": 863
  },
  {
    "icao": "UNIB",
    "iata": "BKA",
    "name": "Baykit Airport",
    "city": "Baykit",
    "country": "RU",
    "lat": 61.676701,
    "lon": 96.355003,
    "elevation": 853
  },
  {
    "icao": "UNII",
    "iata": "EIE",
    "name": "Yeniseysk Airport",
    "city": "Yeniseysk",
    "country": "RU",
    "lat": 58.474201,
    "lon": 92.112503,
    "elevation": 253
  },
  {
    "icao": "UNIP",
    "iata": "TGP",
    "name": "Podkamennaya Tunguska Airport",
    "city": "Bor",
    "country": "RU",
    "lat": 61.589699,
    "lon": 89.994003,
    "elevation": 213
  },
  {
    "icao": "UNIS",
    "iata": "VEO",
    "name": "Severo-Yeniseysk Airport",
    "city": "Severo-Yeniseysk",
    "country": "RU",
    "lat": 60.373299,
    "lon": 93.011703,
    "elevation": 1706
  },
  {
    "icao": "UNIW",
    "iata": "VAQ",
    "name": "Vanavara Airport",
    "city": "Vanavara",
    "country": "RU",
    "lat": 60.356229,
    "lon": 102.309641,
    "elevation": 892
  },
  {
    "icao": "UNKL",
    "iata": "KJA",
    "name": "Krasnoyarsk International Airport",
    "city": "Krasnoyarsk",
    "country": "RU",
    "lat": 56.173077,
    "lon": 92.492437,
    "elevation": 942
  },
  {
    "icao": "UNKM",
    "iata": "KCY",
    "name": "Krasnoyarsk Cheremshanka Airport",
    "city": "Krasnoyarsk",
    "country": "RU",
    "lat": 56.177584,
    "lon": 92.545881,
    "elevation": 833
  },
  {
    "icao": "UNKS",
    "iata": "ACS",
    "name": "Achinsk Airport",
    "city": "Achinsk",
    "country": "RU",
    "lat": 56.269185,
    "lon": 90.57511,
    "elevation": 1033
  },
  {
    "icao": "UNKY",
    "iata": "KYZ",
    "name": "Kyzyl Airport",
    "city": "Kyzyl",
    "country": "RU",
    "lat": 51.669399,
    "lon": 94.400597,
    "elevation": 2123
  },
  {
    "icao": "UNNT",
    "iata": "OVB",
    "name": "Novosibirsk Tolmachevo Airport",
    "city": "Novosibirsk",
    "country": "RU",
    "lat": 55.019756,
    "lon": 82.618675,
    "elevation": 365
  },
  {
    "icao": "UNOO",
    "iata": "OMS",
    "name": "Omsk Central Airport",
    "city": "Omsk",
    "country": "RU",
    "lat": 54.96699905395508,
    "lon": 73.31050109863281,
    "elevation": 311
  },
  {
    "icao": "UNSS",
    "iata": "SWT",
    "name": "Strezhevoy Airport",
    "city": "Strezhevoy",
    "country": "RU",
    "lat": 60.7094,
    "lon": 77.660004,
    "elevation": 164
  },
  {
    "icao": "UNTT",
    "iata": "TOF",
    "name": "Bogashevo Airport",
    "city": "Tomsk",
    "country": "RU",
    "lat": 56.380298614502,
    "lon": 85.208297729492,
    "elevation": 597
  },
  {
    "icao": "UNWW",
    "iata": "NOZ",
    "name": "Spichenkovo Airport",
    "city": "Novokuznetsk",
    "country": "RU",
    "lat": 53.811401,
    "lon": 86.877197,
    "elevation": 1024
  },
  {
    "icao": "UODD",
    "iata": "DKS",
    "name": "Dikson Airport",
    "city": "Dikson",
    "country": "RU",
    "lat": 73.517807,
    "lon": 80.379669,
    "elevation": 47
  },
  {
    "icao": "UOHH",
    "iata": "HTG",
    "name": "Khatanga Airport",
    "city": "Khatanga",
    "country": "RU",
    "lat": 71.97810363769531,
    "lon": 102.49099731445312,
    "elevation": 95
  },
  {
    "icao": "UOIG",
    "iata": "SES",
    "name": "Svetlogorsk Airport",
    "city": "Svetlogorsk",
    "country": "RU",
    "lat": 66.839996,
    "lon": 88.403336,
    "elevation": 394
  },
  {
    "icao": "UOII",
    "iata": "IAA",
    "name": "Igarka Airport",
    "city": "Igarka",
    "country": "RU",
    "lat": 67.437202,
    "lon": 86.621902,
    "elevation": 82
  },
  {
    "icao": "UOOO",
    "iata": "NSK",
    "name": "Norilsk-Alykel Airport",
    "city": "Norilsk",
    "country": "RU",
    "lat": 69.31109619140625,
    "lon": 87.33219909667969,
    "elevation": 574
  },
  {
    "icao": "URKA",
    "iata": "AAQ",
    "name": "Anapa Vityazevo Airport",
    "city": "Krasnyi Kurgan",
    "country": "RU",
    "lat": 45.002102,
    "lon": 37.347301,
    "elevation": 174
  },
  {
    "icao": "URKG",
    "iata": "GDZ",
    "name": "Gelendzhik Airport",
    "city": "Gelendzhik",
    "country": "RU",
    "lat": 44.5820926295,
    "lon": 38.0124807358,
    "elevation": 98
  },
  {
    "icao": "URKK",
    "iata": "KRR",
    "name": "Krasnodar Pashkovsky International Airport",
    "city": "Krasnodar",
    "country": "RU",
    "lat": 45.034698,
    "lon": 39.170502,
    "elevation": 118
  },
  {
    "icao": "URMG",
    "iata": "GRV",
    "name": "Grozny Airport",
    "city": "Grozny",
    "country": "RU",
    "lat": 43.388106,
    "lon": 45.699772,
    "elevation": 548
  },
  {
    "icao": "URML",
    "iata": "MCX",
    "name": "Makhachkala Uytash International Airport",
    "city": "Makhachkala",
    "country": "RU",
    "lat": 42.816799,
    "lon": 47.652302,
    "elevation": 12
  },
  {
    "icao": "URMM",
    "iata": "MRV",
    "name": "Mineralnyye Vody Airport",
    "city": "Mineralnyye Vody",
    "country": "RU",
    "lat": 44.225101470947266,
    "lon": 43.08190155029297,
    "elevation": 1054
  },
  {
    "icao": "URMN",
    "iata": "NAL",
    "name": "Nalchik Airport",
    "city": "Nalchik",
    "country": "RU",
    "lat": 43.512901306152344,
    "lon": 43.636600494384766,
    "elevation": 1461
  },
  {
    "icao": "URMO",
    "iata": "OGZ",
    "name": "Vladikavkaz Beslan International Airport",
    "city": "Beslan",
    "country": "RU",
    "lat": 43.205101,
    "lon": 44.606602,
    "elevation": 1673
  },
  {
    "icao": "URMS",
    "iata": "IGT",
    "name": "Magas Airport",
    "city": "Sunzha",
    "country": "RU",
    "lat": 43.323268,
    "lon": 45.012568,
    "elevation": 1165
  },
  {
    "icao": "URMT",
    "iata": "STW",
    "name": "Stavropol Shpakovskoye Airport",
    "city": "Stavropol",
    "country": "RU",
    "lat": 45.10919952392578,
    "lon": 42.11280059814453,
    "elevation": 1486
  },
  {
    "icao": "URRP",
    "iata": "ROV",
    "name": "Platov International Airport",
    "city": "Rostov-on-Don",
    "country": "RU",
    "lat": 47.493888,
    "lon": 39.924722,
    "elevation": 213
  },
  {
    "icao": "URRT",
    "iata": "TGK",
    "name": "Taganrog Yuzhny Airport",
    "city": "Taganrog",
    "country": "RU",
    "lat": 47.1983333,
    "lon": 38.8491667,
    "elevation": 117
  },
  {
    "icao": "URSS",
    "iata": "AER",
    "name": "Sochi International Airport",
    "city": "Sochi",
    "country": "RU",
    "lat": 43.449902,
    "lon": 39.9566,
    "elevation": 89
  },
  {
    "icao": "URWA",
    "iata": "ASF",
    "name": "Astrakhan Narimanovo Boris M. Kustodiev International Airport",
    "city": "Astrakhan",
    "country": "RU",
    "lat": 46.282843,
    "lon": 48.010511,
    "elevation": -65
  },
  {
    "icao": "URWI",
    "iata": "ESL",
    "name": "Elista Airport",
    "city": "Elista",
    "country": "RU",
    "lat": 46.3739013671875,
    "lon": 44.33089828491211,
    "elevation": 501
  },
  {
    "icao": "URWW",
    "iata": "VOG",
    "name": "Volgograd International Airport",
    "city": "Volgograd",
    "country": "RU",
    "lat": 48.782501220703125,
    "lon": 44.34550094604492,
    "elevation": 482
  },
  {
    "icao": "USCC",
    "iata": "CEK",
    "name": "Chelyabinsk Balandino Airport",
    "city": "Chelyabinsk",
    "country": "RU",
    "lat": 55.305801,
    "lon": 61.5033,
    "elevation": 769
  },
  {
    "icao": "USCM",
    "iata": "MQF",
    "name": "Magnitogorsk International Airport",
    "city": "Magnitogorsk",
    "country": "RU",
    "lat": 53.39310073852539,
    "lon": 58.755699157714844,
    "elevation": 1430
  },
  {
    "icao": "USDA",
    "iata": "SBT",
    "name": "Sabetta International Airport",
    "city": "Sabetta",
    "country": "RU",
    "lat": 71.219167,
    "lon": 72.052222,
    "elevation": 46
  },
  {
    "icao": "USDB",
    "iata": "BVJ",
    "name": "Bovanenkovo Airport",
    "city": "Bovanenkovo",
    "country": "RU",
    "lat": 70.315278,
    "lon": 68.333611,
    "elevation": 24
  },
  {
    "icao": "USDD",
    "iata": "SLY",
    "name": "Salekhard Airport",
    "city": "Salekhard",
    "country": "RU",
    "lat": 66.5907974243164,
    "lon": 66.61100006103516,
    "elevation": 218
  },
  {
    "icao": "USHB",
    "iata": "EZV",
    "name": "Berezovo Airport",
    "city": "",
    "country": "RU",
    "lat": 63.92100143432617,
    "lon": 65.03050231933594,
    "elevation": 98
  },
  {
    "icao": "USHH",
    "iata": "HMA",
    "name": "Khanty Mansiysk Airport",
    "city": "Khanty-Mansiysk",
    "country": "RU",
    "lat": 61.0285,
    "lon": 69.086098,
    "elevation": 76
  },
  {
    "icao": "USHN",
    "iata": "NYA",
    "name": "Nyagan Airport",
    "city": "Nyagan",
    "country": "RU",
    "lat": 62.110001,
    "lon": 65.614998,
    "elevation": 361
  },
  {
    "icao": "USHQ",
    "iata": "EYK",
    "name": "Beloyarskiy Airport",
    "city": "",
    "country": "RU",
    "lat": 63.686901,
    "lon": 66.698601,
    "elevation": 82
  },
  {
    "icao": "USHS",
    "iata": "OVS",
    "name": "Sovetskiy Airport",
    "city": "Sovetskiy",
    "country": "RU",
    "lat": 61.326622009277344,
    "lon": 63.60191345214844,
    "elevation": 351
  },
  {
    "icao": "USHU",
    "iata": "URJ",
    "name": "Uray Airport",
    "city": "Uray",
    "country": "RU",
    "lat": 60.103298,
    "lon": 64.826698,
    "elevation": 190
  },
  {
    "icao": "USII",
    "iata": "IJK",
    "name": "Izhevsk Airport",
    "city": "Izhevsk",
    "country": "RU",
    "lat": 56.82809829711914,
    "lon": 53.45750045776367,
    "elevation": 531
  },
  {
    "icao": "USKK",
    "iata": "KVX",
    "name": "Pobedilovo Airport",
    "city": "Kirov",
    "country": "RU",
    "lat": 58.503883,
    "lon": 49.347831,
    "elevation": 479
  },
  {
    "icao": "USMM",
    "iata": "NYM",
    "name": "Nadym Airport",
    "city": "Nadym",
    "country": "RU",
    "lat": 65.48090362548828,
    "lon": 72.69889831542969,
    "elevation": 49
  },
  {
    "icao": "USMU",
    "iata": "NUX",
    "name": "Novy Urengoy Airport",
    "city": "Novy Urengoy",
    "country": "RU",
    "lat": 66.06939697265625,
    "lon": 76.52030181884766,
    "elevation": 210
  },
  {
    "icao": "USNN",
    "iata": "NJC",
    "name": "Nizhnevartovsk Airport",
    "city": "Nizhnevartovsk",
    "country": "RU",
    "lat": 60.949299,
    "lon": 76.483597,
    "elevation": 177
  },
  {
    "icao": "USPP",
    "iata": "PEE",
    "name": "Perm International Airport",
    "city": "Perm",
    "country": "RU",
    "lat": 57.914501,
    "lon": 56.021198,
    "elevation": 404
  },
  {
    "icao": "USRK",
    "iata": "KGP",
    "name": "Kogalym International Airport",
    "city": "Kogalym",
    "country": "RU",
    "lat": 62.190399169921875,
    "lon": 74.53379821777344,
    "elevation": 220
  },
  {
    "icao": "USRN",
    "iata": "NFG",
    "name": "Nefteyugansk Airport",
    "city": "Nefteyugansk",
    "country": "RU",
    "lat": 61.108299,
    "lon": 72.650002,
    "elevation": 115
  },
  {
    "icao": "USRO",
    "iata": "NOJ",
    "name": "Noyabrsk Airport",
    "city": "Noyabrsk",
    "country": "RU",
    "lat": 63.18330001831055,
    "lon": 75.2699966430664,
    "elevation": 446
  },
  {
    "icao": "USRR",
    "iata": "SGC",
    "name": "Surgut Airport",
    "city": "Surgut",
    "country": "RU",
    "lat": 61.34370040893555,
    "lon": 73.40180206298828,
    "elevation": 200
  },
  {
    "icao": "USSS",
    "iata": "SVX",
    "name": "Koltsovo Airport",
    "city": "Yekaterinburg",
    "country": "RU",
    "lat": 56.743099212646,
    "lon": 60.802700042725,
    "elevation": 764
  },
  {
    "icao": "USTJ",
    "iata": "RMZ",
    "name": "Remezov Airport",
    "city": "Tobolsk",
    "country": "RU",
    "lat": 58.058427,
    "lon": 68.348801,
    "elevation": 167
  },
  {
    "icao": "USTR",
    "iata": "TJM",
    "name": "Roshchino International Airport",
    "city": "Tyumen",
    "country": "RU",
    "lat": 57.16833,
    "lon": 65.31611,
    "elevation": 378
  },
  {
    "icao": "USUU",
    "iata": "KRO",
    "name": "Kurgan Airport",
    "city": "Kurgan",
    "country": "RU",
    "lat": 55.4753,
    "lon": 65.415604,
    "elevation": 240
  },
  {
    "icao": "UTAA",
    "iata": "ASB",
    "name": "Ashgabat International Airport",
    "city": "Ashgabat",
    "country": "TM",
    "lat": 37.986801,
    "lon": 58.361,
    "elevation": 692
  },
  {
    "icao": "UTAK",
    "iata": "KRW",
    "name": "Turkmenbashi International Airport",
    "city": "Turkmenbashi",
    "country": "TM",
    "lat": 40.063301,
    "lon": 53.007198,
    "elevation": 279
  },
  {
    "icao": "UTAM",
    "iata": "MYP",
    "name": "Mary International Airport",
    "city": "Mary",
    "country": "TM",
    "lat": 37.62353,
    "lon": 61.895668,
    "elevation": 728
  },
  {
    "icao": "UTAT",
    "iata": "TAZ",
    "name": "Daşoguz Airport",
    "city": "Daşoguz",
    "country": "TM",
    "lat": 41.759853,
    "lon": 59.836149,
    "elevation": 272
  },
  {
    "icao": "UTAV",
    "iata": "CRZ",
    "name": "Türkmenabat International Airport",
    "city": "Türkmenabat",
    "country": "TM",
    "lat": 38.930662,
    "lon": 63.563982,
    "elevation": 649
  },
  {
    "icao": "UTDD",
    "iata": "DYU",
    "name": "Dushanbe International Airport",
    "city": "Dushanbe",
    "country": "TJ",
    "lat": 38.543746,
    "lon": 68.822977,
    "elevation": 2575
  },
  {
    "icao": "UTDK",
    "iata": "TJU",
    "name": "Kulob Airport",
    "city": "Kulyab",
    "country": "TJ",
    "lat": 37.98809814453125,
    "lon": 69.80500030517578,
    "elevation": 2293
  },
  {
    "icao": "UTDL",
    "iata": "LBD",
    "name": "Khujand Airport",
    "city": "Khujand",
    "country": "TJ",
    "lat": 40.215401,
    "lon": 69.694702,
    "elevation": 1450
  },
  {
    "icao": "UTDT",
    "iata": "KQT",
    "name": "Qurghonteppa International Airport",
    "city": "Kurgan-Tyube",
    "country": "TJ",
    "lat": 37.86640167236328,
    "lon": 68.86470031738281,
    "elevation": 1473
  },
  {
    "icao": "UZFA",
    "iata": "AZN",
    "name": "Andizhan Airport",
    "city": "Andizhan",
    "country": "UZ",
    "lat": 40.727699,
    "lon": 72.293999,
    "elevation": 1515
  },
  {
    "icao": "UZFF",
    "iata": "FEG",
    "name": "Fergana International Airport",
    "city": "Fergana",
    "country": "UZ",
    "lat": 40.358799,
    "lon": 71.745003,
    "elevation": 1980
  },
  {
    "icao": "UTNN",
    "iata": "NCU",
    "name": "Nukus Airport",
    "city": "Nukus",
    "country": "UZ",
    "lat": 42.4884,
    "lon": 59.623299,
    "elevation": 246
  },
  {
    "icao": "UTNU",
    "iata": "UGC",
    "name": "Urgench Airport",
    "city": "Urgench",
    "country": "UZ",
    "lat": 41.584301,
    "lon": 60.641701,
    "elevation": 320
  },
  {
    "icao": "UTSA",
    "iata": "NVI",
    "name": "Navoi Airport",
    "city": "Navoi",
    "country": "UZ",
    "lat": 40.117199,
    "lon": 65.170799,
    "elevation": 1140
  },
  {
    "icao": "UZSB",
    "iata": "BHK",
    "name": "Bukhara International Airport",
    "city": "Bukhara",
    "country": "UZ",
    "lat": 39.775002,
    "lon": 64.483299,
    "elevation": 751
  },
  {
    "icao": "UZSS",
    "iata": "SKD",
    "name": "Samarkand Airport",
    "city": "Samarkand",
    "country": "UZ",
    "lat": 39.7005,
    "lon": 66.983803,
    "elevation": 2224
  },
  {
    "icao": "UTST",
    "iata": "TMJ",
    "name": "Termez Airport",
    "city": "Termez",
    "country": "UZ",
    "lat": 37.287261,
    "lon": 67.311869,
    "elevation": 1027
  },
  {
    "icao": "UZTT",
    "iata": "TAS",
    "name": "Tashkent International Airport",
    "city": "Tashkent",
    "country": "UZ",
    "lat": 41.2579,
    "lon": 69.281197,
    "elevation": 1417
  },
  {
    "icao": "UTTZ",
    "iata": "OMN",
    "name": "Zomin Airport",
    "city": "Zaamin",
    "country": "UZ",
    "lat": 40.01402,
    "lon": 68.41103,
    "elevation": 1760
  },
  {
    "icao": "UUBA",
    "iata": "KMW",
    "name": "Kostroma Sokerkino Airport",
    "city": "Kostroma",
    "country": "RU",
    "lat": 57.796902,
    "lon": 41.019402,
    "elevation": 446
  },
  {
    "icao": "UUBC",
    "iata": "KLF",
    "name": "Grabtsevo Airport",
    "city": "Kaluga",
    "country": "RU",
    "lat": 54.5499992371,
    "lon": 36.3666687012,
    "elevation": 656
  },
  {
    "icao": "UUBI",
    "iata": "IWA",
    "name": "Ivanovo South Airport",
    "city": "Ivanovo",
    "country": "RU",
    "lat": 56.93939971923828,
    "lon": 40.940799713134766,
    "elevation": 410
  },
  {
    "icao": "UUBK",
    "iata": "RYB",
    "name": "Staroselye Airport",
    "city": "Rybinsk",
    "country": "RU",
    "lat": 58.104198,
    "lon": 38.929401,
    "elevation": 423
  },
  {
    "icao": "UUBP",
    "iata": "BZK",
    "name": "Bryansk Airport",
    "city": "Bryansk",
    "country": "RU",
    "lat": 53.214199,
    "lon": 34.176399,
    "elevation": 663
  },
  {
    "icao": "UUBW",
    "iata": "ZIA",
    "name": "Zhukovsky International Airport",
    "city": "Moscow",
    "country": "RU",
    "lat": 55.553299,
    "lon": 38.150002,
    "elevation": 377
  },
  {
    "icao": "UUDD",
    "iata": "DME",
    "name": "Domodedovo International Airport",
    "city": "Moscow",
    "country": "RU",
    "lat": 55.408798,
    "lon": 37.9063,
    "elevation": 588
  },
  {
    "icao": "UUEE",
    "iata": "SVO",
    "name": "Sheremetyevo International Airport",
    "city": "Moscow",
    "country": "RU",
    "lat": 55.972599,
    "lon": 37.4146,
    "elevation": 622
  },
  {
    "icao": "UUEM",
    "iata": "KLD",
    "name": "Migalovo Air Base",
    "city": "Tver",
    "country": "RU",
    "lat": 56.82469940185547,
    "lon": 35.7577018737793,
    "elevation": 469
  },
  {
    "icao": "UUMO",
    "iata": "OSF",
    "name": "Ostafyevo International Airport",
    "city": "Moscow",
    "country": "RU",
    "lat": 55.511667,
    "lon": 37.507222,
    "elevation": 568
  },
  {
    "icao": "UUMU",
    "iata": "CKL",
    "name": "Chkalovskiy Air Base",
    "city": "Moscow",
    "country": "RU",
    "lat": 55.8783,
    "lon": 38.061699,
    "elevation": 499
  },
  {
    "icao": "UUOB",
    "iata": "EGO",
    "name": "Belgorod International Airport",
    "city": "Belgorod",
    "country": "RU",
    "lat": 50.643798828125,
    "lon": 36.5900993347168,
    "elevation": 735
  },
  {
    "icao": "UUOK",
    "iata": "URS",
    "name": "Kursk East Airport",
    "city": "Kursk",
    "country": "RU",
    "lat": 51.7505989074707,
    "lon": 36.29560089111328,
    "elevation": 686
  },
  {
    "icao": "UUOL",
    "iata": "LPK",
    "name": "Lipetsk Airport",
    "city": "Lipetsk",
    "country": "RU",
    "lat": 52.70280075073242,
    "lon": 39.53779983520508,
    "elevation": 584
  },
  {
    "icao": "UUOO",
    "iata": "VOZ",
    "name": "Voronezh International Airport",
    "city": "Voronezh",
    "country": "RU",
    "lat": 51.81420135498047,
    "lon": 39.22959899902344,
    "elevation": 514
  },
  {
    "icao": "UUOT",
    "iata": "TBW",
    "name": "Donskoye Airport",
    "city": "Tambov",
    "country": "RU",
    "lat": 52.806099,
    "lon": 41.4828,
    "elevation": 413
  },
  {
    "icao": "UUWW",
    "iata": "VKO",
    "name": "Vnukovo International Airport",
    "city": "Moscow",
    "country": "RU",
    "lat": 55.591499,
    "lon": 37.261501,
    "elevation": 685
  },
  {
    "icao": "UUYH",
    "iata": "UCT",
    "name": "Ukhta Airport",
    "city": "Ukhta",
    "country": "RU",
    "lat": 63.566898,
    "lon": 53.804699,
    "elevation": 482
  },
  {
    "icao": "UUYI",
    "iata": "INA",
    "name": "Inta Airport",
    "city": "Inta",
    "country": "RU",
    "lat": 66.053372,
    "lon": 60.105786,
    "elevation": 184
  },
  {
    "icao": "UUYP",
    "iata": "PEX",
    "name": "Pechora Airport",
    "city": "Pechora",
    "country": "RU",
    "lat": 65.121101,
    "lon": 57.130798,
    "elevation": 98
  },
  {
    "icao": "UUYS",
    "iata": "USK",
    "name": "Usinsk Airport",
    "city": "Usinsk",
    "country": "RU",
    "lat": 66.0047,
    "lon": 57.367199,
    "elevation": 262
  },
  {
    "icao": "UUYW",
    "iata": "VKT",
    "name": "Vorkuta Airport",
    "city": "Vorkuta",
    "country": "RU",
    "lat": 67.488602,
    "lon": 63.993099,
    "elevation": 604
  },
  {
    "icao": "UUYX",
    "iata": "UTS",
    "name": "Ust-Tsylma Airport",
    "city": "Ust-Tsylma",
    "country": "RU",
    "lat": 65.437294,
    "lon": 52.200336,
    "elevation": 262
  },
  {
    "icao": "UUYY",
    "iata": "SCW",
    "name": "Syktyvkar Airport",
    "city": "Syktyvkar",
    "country": "RU",
    "lat": 61.64699935913086,
    "lon": 50.84510040283203,
    "elevation": 342
  },
  {
    "icao": "UWGG",
    "iata": "GOJ",
    "name": "Nizhny Novgorod / Strigino International Airport",
    "city": "Nizhny Novgorod",
    "country": "RU",
    "lat": 56.228254,
    "lon": 43.785197,
    "elevation": 256
  },
  {
    "icao": "UWKB",
    "iata": "UUA",
    "name": "Bugulma Airport",
    "city": "Bugulma",
    "country": "RU",
    "lat": 54.641184,
    "lon": 52.800229,
    "elevation": 991
  },
  {
    "icao": "UWKD",
    "iata": "KZN",
    "name": "Kazan International Airport",
    "city": "Kazan",
    "country": "RU",
    "lat": 55.606201,
    "lon": 49.278702,
    "elevation": 411
  },
  {
    "icao": "UWKE",
    "iata": "NBC",
    "name": "Begishevo Airport",
    "city": "Nizhnekamsk",
    "country": "RU",
    "lat": 55.564701,
    "lon": 52.092499,
    "elevation": 643
  },
  {
    "icao": "UWKJ",
    "iata": "JOK",
    "name": "Yoshkar-Ola Airport",
    "city": "Yoshkar-Ola",
    "country": "RU",
    "lat": 56.7006,
    "lon": 47.904701,
    "elevation": 348
  },
  {
    "icao": "UWKS",
    "iata": "CSY",
    "name": "Cheboksary Airport",
    "city": "Cheboksary",
    "country": "RU",
    "lat": 56.090302,
    "lon": 47.347301,
    "elevation": 558
  },
  {
    "icao": "UWLL",
    "iata": "ULV",
    "name": "Ulyanovsk Baratayevka Airport",
    "city": "Ulyanovsk",
    "country": "RU",
    "lat": 54.268299,
    "lon": 48.2267,
    "elevation": 449
  },
  {
    "icao": "UWLW",
    "iata": "ULY",
    "name": "Ulyanovsk East Airport",
    "city": "Cherdakly",
    "country": "RU",
    "lat": 54.401001,
    "lon": 48.8027,
    "elevation": 252
  },
  {
    "icao": "UWOO",
    "iata": "REN",
    "name": "Orenburg Central Airport",
    "city": "Orenburg",
    "country": "RU",
    "lat": 51.795799255371094,
    "lon": 55.45669937133789,
    "elevation": 387
  },
  {
    "icao": "UWOR",
    "iata": "OSW",
    "name": "Orsk Airport",
    "city": "Orsk",
    "country": "RU",
    "lat": 51.072498,
    "lon": 58.5956,
    "elevation": 909
  },
  {
    "icao": "UWPP",
    "iata": "PEZ",
    "name": "Penza Airport",
    "city": "Penza",
    "country": "RU",
    "lat": 53.110599517822266,
    "lon": 45.02109909057617,
    "elevation": 614
  },
  {
    "icao": "UWPS",
    "iata": "SKX",
    "name": "Saransk Airport",
    "city": "Saransk",
    "country": "RU",
    "lat": 54.12512969970703,
    "lon": 45.212257385253906,
    "elevation": 676
  },
  {
    "icao": "UWSB",
    "iata": "BWO",
    "name": "Balakovo Airport",
    "city": "Balakovo",
    "country": "RU",
    "lat": 51.858299,
    "lon": 47.745602,
    "elevation": 95
  },
  {
    "icao": "UWSG",
    "iata": "GSV",
    "name": "Gagarin International Airport",
    "city": "Saratov",
    "country": "RU",
    "lat": 51.712778,
    "lon": 46.171111,
    "elevation": 103
  },
  {
    "icao": "UWUU",
    "iata": "UFA",
    "name": "Ufa International Airport",
    "city": "Ufa",
    "country": "RU",
    "lat": 54.557498931885,
    "lon": 55.874401092529,
    "elevation": 449
  },
  {
    "icao": "UWWW",
    "iata": "KUF",
    "name": "Kurumoch International Airport",
    "city": "Samara",
    "country": "RU",
    "lat": 53.504902,
    "lon": 50.164299,
    "elevation": 477
  },
  {
    "icao": "VA1G",
    "iata": "REW",
    "name": "Rewa Airport, Chorhata, REWA",
    "city": "Rewa",
    "country": "IN",
    "lat": 24.503401,
    "lon": 81.220299,
    "elevation": 1000
  },
  {
    "icao": "VAGD",
    "iata": "GDB",
    "name": "Gondia Airport",
    "city": "Gondia",
    "country": "IN",
    "lat": 21.526817,
    "lon": 80.290347,
    "elevation": 987
  },
  {
    "icao": "VAAH",
    "iata": "AMD",
    "name": "Sardar Vallabh Bhai Patel International Airport",
    "city": "Ahmedabad",
    "country": "IN",
    "lat": 23.0772,
    "lon": 72.634697,
    "elevation": 189
  },
  {
    "icao": "VAAK",
    "iata": "AKD",
    "name": "Akola Airport",
    "city": "Akola",
    "country": "IN",
    "lat": 20.698931,
    "lon": 77.056883,
    "elevation": 999
  },
  {
    "icao": "VAAU",
    "iata": "IXU",
    "name": "Aurangabad Airport",
    "city": "Aurangabad",
    "country": "IN",
    "lat": 19.862699508666992,
    "lon": 75.39810180664062,
    "elevation": 1911
  },
  {
    "icao": "VABB",
    "iata": "BOM",
    "name": "Chhatrapati Shivaji International Airport",
    "city": "Mumbai",
    "country": "IN",
    "lat": 19.0886993408,
    "lon": 72.8678970337,
    "elevation": 39
  },
  {
    "icao": "VABJ",
    "iata": "BHJ",
    "name": "Bhuj Airport",
    "city": "Bhuj",
    "country": "IN",
    "lat": 23.2877998352,
    "lon": 69.6701965332,
    "elevation": 268
  },
  {
    "icao": "VOBM",
    "iata": "IXG",
    "name": "Belagavi Airport",
    "city": "Belgaum",
    "country": "IN",
    "lat": 15.8593,
    "lon": 74.618301,
    "elevation": 2487
  },
  {
    "icao": "VABO",
    "iata": "BDQ",
    "name": "Vadodara Airport",
    "city": "Vadodara",
    "country": "IN",
    "lat": 22.336201,
    "lon": 73.226303,
    "elevation": 129
  },
  {
    "icao": "VABP",
    "iata": "BHO",
    "name": "Raja Bhoj International Airport",
    "city": "Bhopal",
    "country": "IN",
    "lat": 23.2875003815,
    "lon": 77.3374023438,
    "elevation": 1711
  },
  {
    "icao": "VABV",
    "iata": "BHU",
    "name": "Bhavnagar Airport",
    "city": "Bhavnagar",
    "country": "IN",
    "lat": 21.752199173,
    "lon": 72.1852035522,
    "elevation": 44
  },
  {
    "icao": "VADN",
    "iata": "NMB",
    "name": "Daman Airport",
    "city": "Daman",
    "country": "IN",
    "lat": 20.434401,
    "lon": 72.843201,
    "elevation": 33
  },
  {
    "icao": "VOHB",
    "iata": "HBX",
    "name": "Hubli Airport",
    "city": "Hubli",
    "country": "IN",
    "lat": 15.3617,
    "lon": 75.0849,
    "elevation": 2171
  },
  {
    "icao": "VAHS",
    "iata": "HSR",
    "name": "Rajkot International Airport",
    "city": "Rajkot",
    "country": "IN",
    "lat": 22.378824,
    "lon": 71.039391,
    "elevation": 647
  },
  {
    "icao": "VAID",
    "iata": "IDR",
    "name": "Devi Ahilyabai Holkar Airport",
    "city": "Indore",
    "country": "IN",
    "lat": 22.7217998505,
    "lon": 75.8011016846,
    "elevation": 1850
  },
  {
    "icao": "VAJB",
    "iata": "JLR",
    "name": "Jabalpur Airport",
    "city": "Jabalpur",
    "country": "IN",
    "lat": 23.177799,
    "lon": 80.052002,
    "elevation": 1624
  },
  {
    "icao": "VAJM",
    "iata": "JGA",
    "name": "Jamnagar Airport",
    "city": "Jamnagar",
    "country": "IN",
    "lat": 22.465499877929688,
    "lon": 70.01260375976562,
    "elevation": 69
  },
  {
    "icao": "VAKE",
    "iata": "IXY",
    "name": "Kandla Airport",
    "city": "Kandla",
    "country": "IN",
    "lat": 23.1127,
    "lon": 70.100304,
    "elevation": 96
  },
  {
    "icao": "VEKO",
    "iata": "HJR",
    "name": "Khajuraho Airport",
    "city": "Khajuraho",
    "country": "IN",
    "lat": 24.8172,
    "lon": 79.918602,
    "elevation": 728
  },
  {
    "icao": "VAKP",
    "iata": "KLH",
    "name": "Kolhapur Airport",
    "city": "Kolhapur",
    "country": "IN",
    "lat": 16.6647,
    "lon": 74.289398,
    "elevation": 1996
  },
  {
    "icao": "VAKS",
    "iata": "IXK",
    "name": "Keshod Airport",
    "city": "Keshod",
    "country": "IN",
    "lat": 21.317101,
    "lon": 70.270401,
    "elevation": 167
  },
  {
    "icao": "VALT",
    "iata": "LTU",
    "name": "Murod Kond Airport",
    "city": "Latur",
    "country": "IN",
    "lat": 18.411501,
    "lon": 76.464699,
    "elevation": 2136
  },
  {
    "icao": "VOND",
    "iata": "NDC",
    "name": "Nanded Airport",
    "city": "Nanded",
    "country": "IN",
    "lat": 19.1833,
    "lon": 77.316704,
    "elevation": 1250
  },
  {
    "icao": "VANP",
    "iata": "NAG",
    "name": "Dr. Babasaheb Ambedkar International Airport",
    "city": "Nagpur",
    "country": "IN",
    "lat": 21.092199,
    "lon": 79.047203,
    "elevation": 1033
  },
  {
    "icao": "VAOZ",
    "iata": "ISK",
    "name": "Nashik Airport",
    "city": "Nasik",
    "country": "IN",
    "lat": 20.119101,
    "lon": 73.912903,
    "elevation": 1900
  },
  {
    "icao": "VAPO",
    "iata": "PNQ",
    "name": "Pune Airport / Lohagaon Air Force Station",
    "city": "Pune",
    "country": "IN",
    "lat": 18.5821,
    "lon": 73.919701,
    "elevation": 1942
  },
  {
    "icao": "VAPR",
    "iata": "PBD",
    "name": "Porbandar Airport",
    "city": "Porbandar",
    "country": "IN",
    "lat": 21.649524,
    "lon": 69.656405,
    "elevation": 23
  },
  {
    "icao": "VARG",
    "iata": "RTC",
    "name": "Ratnagiri Airport",
    "city": "",
    "country": "IN",
    "lat": 17.013599,
    "lon": 73.327797,
    "elevation": 305
  },
  {
    "icao": "VARK",
    "iata": "RAJ",
    "name": "Rajkot Airport",
    "city": "Rajkot",
    "country": "IN",
    "lat": 22.3092,
    "lon": 70.779503,
    "elevation": 441
  },
  {
    "icao": "VERP",
    "iata": "RPR",
    "name": "Swami Vivekananda Airport",
    "city": "Raipur",
    "country": "IN",
    "lat": 21.180401,
    "lon": 81.7388,
    "elevation": 1041
  },
  {
    "icao": "VASD",
    "iata": "SAG",
    "name": "Shirdi Airport",
    "city": "Kakadi",
    "country": "IN",
    "lat": 19.688752,
    "lon": 74.377354,
    "elevation": 1926
  },
  {
    "icao": "VASL",
    "iata": "SSE",
    "name": "Solapur Airport",
    "city": "Solapur",
    "country": "IN",
    "lat": 17.6280002594,
    "lon": 75.93479919430001,
    "elevation": 1584
  },
  {
    "icao": "VASU",
    "iata": "STV",
    "name": "Surat Airport",
    "city": "Surat",
    "country": "IN",
    "lat": 21.1141,
    "lon": 72.741798,
    "elevation": 16
  },
  {
    "icao": "VAUD",
    "iata": "UDR",
    "name": "Maharana Pratap Airport",
    "city": "Udaipur",
    "country": "IN",
    "lat": 24.617700576799997,
    "lon": 73.89610290530001,
    "elevation": 1684
  },
  {
    "icao": "VCBI",
    "iata": "CMB",
    "name": "Bandaranaike International Colombo Airport",
    "city": "Colombo",
    "country": "LK",
    "lat": 7.180759906768799,
    "lon": 79.88410186767578,
    "elevation": 30
  },
  {
    "icao": "VCCA",
    "iata": "ACJ",
    "name": "Anuradhapura Airport",
    "city": "Anuradhapura",
    "country": "LK",
    "lat": 8.301542,
    "lon": 80.42848,
    "elevation": 324
  },
  {
    "icao": "VCCB",
    "iata": "BTC",
    "name": "Batticaloa Airport",
    "city": "Batticaloa",
    "country": "LK",
    "lat": 7.70576,
    "lon": 81.678802,
    "elevation": 20
  },
  {
    "icao": "VCCC",
    "iata": "RML",
    "name": "Colombo Ratmalana Airport",
    "city": "Colombo",
    "country": "LK",
    "lat": 6.821990013122559,
    "lon": 79.88619995117188,
    "elevation": 22
  },
  {
    "icao": "VCCG",
    "iata": "ADP",
    "name": "Ampara Airport",
    "city": "Ampara",
    "country": "LK",
    "lat": 7.336745,
    "lon": 81.623869,
    "elevation": 150
  },
  {
    "icao": "VCCH",
    "iata": "HIM",
    "name": "Hingurakgoda Air Force Base",
    "city": "Polonnaruwa Town",
    "country": "LK",
    "lat": 8.04981,
    "lon": 80.9814,
    "elevation": 170
  },
  {
    "icao": "VCCJ",
    "iata": "JAF",
    "name": "Jaffna International Airport",
    "city": "Jaffna",
    "country": "LK",
    "lat": 9.79233,
    "lon": 80.070099,
    "elevation": 33
  },
  {
    "icao": "VCCK",
    "iata": "KCT",
    "name": "Koggala Airport",
    "city": "Galle",
    "country": "LK",
    "lat": 5.993680000305176,
    "lon": 80.32029724121094,
    "elevation": 10
  },
  {
    "icao": "VCCT",
    "iata": "TRR",
    "name": "China Bay Airport",
    "city": "Trincomalee",
    "country": "LK",
    "lat": 8.539159,
    "lon": 81.18128,
    "elevation": 6
  },
  {
    "icao": "VCRI",
    "iata": "HRI",
    "name": "Mattala Rajapaksa International Airport",
    "city": "Mattala",
    "country": "LK",
    "lat": 6.284467,
    "lon": 81.124128,
    "elevation": 157
  },
  {
    "icao": "VDBG",
    "iata": "BBM",
    "name": "Battambang Airport",
    "city": "Battambang",
    "country": "KH",
    "lat": 13.0956,
    "lon": 103.223999,
    "elevation": 59
  },
  {
    "icao": "VDKH",
    "iata": "KZC",
    "name": "Kampong Chhnang Airport",
    "city": "Kampong Chhnang",
    "country": "KH",
    "lat": 12.255032,
    "lon": 104.564657,
    "elevation": 56
  },
  {
    "icao": "VDPP",
    "iata": "PNH",
    "name": "Phnom Penh International Airport",
    "city": "Phnom Penh (Pou Senchey)",
    "country": "KH",
    "lat": 11.5466,
    "lon": 104.844002,
    "elevation": 40
  },
  {
    "icao": "VDRK",
    "iata": "RBE",
    "name": "Ratanakiri Airport",
    "city": "Ratanakiri",
    "country": "KH",
    "lat": 13.729999542236328,
    "lon": 106.98699951171875,
    "elevation": 0
  },
  {
    "icao": "VDSA",
    "iata": "SAI",
    "name": "Siem Reap-Angkor International Airport",
    "city": "Siem Reap",
    "country": "KH",
    "lat": 13.369167,
    "lon": 104.223056,
    "elevation": 191
  },
  {
    "icao": "VEAN",
    "iata": "IXV",
    "name": "Along Airport",
    "city": "",
    "country": "IN",
    "lat": 28.17530059814453,
    "lon": 94.802001953125,
    "elevation": 900
  },
  {
    "icao": "VEAT",
    "iata": "IXA",
    "name": "Agartala - Maharaja Bir Bikram Airport",
    "city": "Agartala",
    "country": "IN",
    "lat": 23.886999,
    "lon": 91.240402,
    "elevation": 46
  },
  {
    "icao": "VEBD",
    "iata": "IXB",
    "name": "Bagdogra Airport",
    "city": "Siliguri",
    "country": "IN",
    "lat": 26.68120002746582,
    "lon": 88.32859802246094,
    "elevation": 412
  },
  {
    "icao": "VEBI",
    "iata": "SHL",
    "name": "Shillong Airport",
    "city": "Shillong",
    "country": "IN",
    "lat": 25.70359992980957,
    "lon": 91.97869873046875,
    "elevation": 2910
  },
  {
    "icao": "VEBN",
    "iata": "VNS",
    "name": "Lal Bahadur Shastri Airport",
    "city": "Varanasi",
    "country": "IN",
    "lat": 25.452129,
    "lon": 82.861805,
    "elevation": 266
  },
  {
    "icao": "VEBS",
    "iata": "BBI",
    "name": "Biju Patnaik International Airport",
    "city": "Bhubaneswar",
    "country": "IN",
    "lat": 20.2444,
    "lon": 85.817802,
    "elevation": 138
  },
  {
    "icao": "VEBU",
    "iata": "PAB",
    "name": "Bilaspur Airport",
    "city": "Bilaspur",
    "country": "IN",
    "lat": 21.9884,
    "lon": 82.111,
    "elevation": 899
  },
  {
    "icao": "VECC",
    "iata": "CCU",
    "name": "Netaji Subhash Chandra Bose International Airport",
    "city": "Kolkata",
    "country": "IN",
    "lat": 22.654699,
    "lon": 88.446701,
    "elevation": 16
  },
  {
    "icao": "VEDB",
    "iata": "DBD",
    "name": "Dhanbad Airport",
    "city": "",
    "country": "IN",
    "lat": 23.834,
    "lon": 86.425301,
    "elevation": 847
  },
  {
    "icao": "VEDG",
    "iata": "RDP",
    "name": "Kazi Nazrul Islam Airport",
    "city": "Durgapur",
    "country": "IN",
    "lat": 23.6225,
    "lon": 87.243,
    "elevation": 300
  },
  {
    "icao": "VEDH",
    "iata": "DBR",
    "name": "Darbhanga Airport",
    "city": "Darbhanga",
    "country": "IN",
    "lat": 26.192801,
    "lon": 85.916901,
    "elevation": 156
  },
  {
    "icao": "VEGK",
    "iata": "GOP",
    "name": "Gorakhpur Airport",
    "city": "Gorakhpur",
    "country": "IN",
    "lat": 26.739700317399997,
    "lon": 83.4496994019,
    "elevation": 259
  },
  {
    "icao": "VEGT",
    "iata": "GAU",
    "name": "Lokpriya Gopinath Bordoloi International Airport",
    "city": "Guwahati",
    "country": "IN",
    "lat": 26.10610008239746,
    "lon": 91.58589935302734,
    "elevation": 162
  },
  {
    "icao": "VEGY",
    "iata": "GAY",
    "name": "Gaya Airport",
    "city": "Gaya",
    "country": "IN",
    "lat": 24.744301,
    "lon": 84.951202,
    "elevation": 380
  },
  {
    "icao": "VEIM",
    "iata": "IMF",
    "name": "Imphal Airport",
    "city": "Imphal",
    "country": "IN",
    "lat": 24.7600002289,
    "lon": 93.896697998,
    "elevation": 2540
  },
  {
    "icao": "VEJS",
    "iata": "IXW",
    "name": "Sonari Airport",
    "city": "Jamshedpur",
    "country": "IN",
    "lat": 22.813706,
    "lon": 86.168981,
    "elevation": 475
  },
  {
    "icao": "VEJT",
    "iata": "JRH",
    "name": "Jorhat Airport",
    "city": "Jorhat",
    "country": "IN",
    "lat": 26.730456,
    "lon": 94.175416,
    "elevation": 311
  },
  {
    "icao": "VEKI",
    "iata": "KBK",
    "name": "Kushinagar International Airport",
    "city": "Kushinagar",
    "country": "IN",
    "lat": 26.776534,
    "lon": 83.889214,
    "elevation": 266
  },
  {
    "icao": "VEKR",
    "iata": "IXH",
    "name": "Kailashahar Airport",
    "city": "Kailashahar",
    "country": "IN",
    "lat": 24.308657,
    "lon": 92.00768,
    "elevation": 79
  },
  {
    "icao": "VEKU",
    "iata": "IXS",
    "name": "Silchar Airport",
    "city": "Silchar",
    "country": "IN",
    "lat": 24.9129009247,
    "lon": 92.97869873050001,
    "elevation": 352
  },
  {
    "icao": "VELP",
    "iata": "AJL",
    "name": "Lengpui Airport",
    "city": "Aizawl (Lengpui)",
    "country": "IN",
    "lat": 23.840599,
    "lon": 92.619698,
    "elevation": 1398
  },
  {
    "icao": "VELR",
    "iata": "IXI",
    "name": "Lilabari North Lakhimpur Airport",
    "city": "Lilabari",
    "country": "IN",
    "lat": 27.295682,
    "lon": 94.097266,
    "elevation": 330
  },
  {
    "icao": "VEMN",
    "iata": "DIB",
    "name": "Dibrugarh Airport",
    "city": "Dibrugarh",
    "country": "IN",
    "lat": 27.4839000702,
    "lon": 95.0168991089,
    "elevation": 362
  },
  {
    "icao": "VEMR",
    "iata": "DMU",
    "name": "Dimapur Airport",
    "city": "Dimapur",
    "country": "IN",
    "lat": 25.883899688699998,
    "lon": 93.77110290530001,
    "elevation": 487
  },
  {
    "icao": "VEMZ",
    "iata": "MZU",
    "name": "Muzaffarpur Airport",
    "city": "Muzaffarpur",
    "country": "IN",
    "lat": 26.119101,
    "lon": 85.313698,
    "elevation": 174
  },
  {
    "icao": "VEPT",
    "iata": "PAT",
    "name": "Jay Prakash Narayan Airport",
    "city": "Patna",
    "country": "IN",
    "lat": 25.591299,
    "lon": 85.087997,
    "elevation": 170
  },
  {
    "icao": "VERC",
    "iata": "IXR",
    "name": "Birsa Munda Airport",
    "city": "Ranchi",
    "country": "IN",
    "lat": 23.314300537100003,
    "lon": 85.3217010498,
    "elevation": 2148
  },
  {
    "icao": "VERK",
    "iata": "RRK",
    "name": "Rourkela Airport",
    "city": "Rourkela",
    "country": "IN",
    "lat": 22.256571,
    "lon": 84.815193,
    "elevation": 659
  },
  {
    "icao": "VETZ",
    "iata": "TEZ",
    "name": "Tezpur Airport",
    "city": "",
    "country": "IN",
    "lat": 26.7091007232666,
    "lon": 92.78469848632812,
    "elevation": 240
  },
  {
    "icao": "VOVZ",
    "iata": "VTZ",
    "name": "Visakhapatnam Airport",
    "city": "Visakhapatnam",
    "country": "IN",
    "lat": 17.723506,
    "lon": 83.227729,
    "elevation": 15
  },
  {
    "icao": "VEZO",
    "iata": "ZER",
    "name": "Ziro Airport",
    "city": "Ziro",
    "country": "IN",
    "lat": 27.588301,
    "lon": 93.828102,
    "elevation": 5403
  },
  {
    "icao": "VGBR",
    "iata": "BZL",
    "name": "Barisal Airport",
    "city": "Barisal",
    "country": "BD",
    "lat": 22.801001,
    "lon": 90.301201,
    "elevation": 23
  },
  {
    "icao": "VGCB",
    "iata": "CXB",
    "name": "Cox's Bazar Airport",
    "city": "Cox's Bazar",
    "country": "BD",
    "lat": 21.457517,
    "lon": 91.963263,
    "elevation": 12
  },
  {
    "icao": "VGEG",
    "iata": "CGP",
    "name": "Shah Amanat International Airport",
    "city": "Chattogram (Chittagong)",
    "country": "BD",
    "lat": 22.249599,
    "lon": 91.813301,
    "elevation": 12
  },
  {
    "icao": "VGHS",
    "iata": "DAC",
    "name": "Hazrat Shahjalal International Airport",
    "city": "Dhaka",
    "country": "BD",
    "lat": 23.843347,
    "lon": 90.397783,
    "elevation": 30
  },
  {
    "icao": "VGIS",
    "iata": "IRD",
    "name": "Ishurdi Airport",
    "city": "Ishurdi",
    "country": "BD",
    "lat": 24.1525,
    "lon": 89.0494,
    "elevation": 45
  },
  {
    "icao": "VGJR",
    "iata": "JSR",
    "name": "Jessore Airport",
    "city": "Jashore (Jessore)",
    "country": "BD",
    "lat": 23.1838,
    "lon": 89.160797,
    "elevation": 20
  },
  {
    "icao": "VGRJ",
    "iata": "RJH",
    "name": "Shah Mokhdum Airport",
    "city": "Rajshahi",
    "country": "BD",
    "lat": 24.437201,
    "lon": 88.616501,
    "elevation": 64
  },
  {
    "icao": "VGSD",
    "iata": "SPD",
    "name": "Saidpur Airport",
    "city": "Saidpur",
    "country": "BD",
    "lat": 25.759199,
    "lon": 88.908897,
    "elevation": 125
  },
  {
    "icao": "VGSY",
    "iata": "ZYL",
    "name": "Osmany International Airport",
    "city": "Sylhet",
    "country": "BD",
    "lat": 24.963832,
    "lon": 91.864843,
    "elevation": 50
  },
  {
    "icao": "VHHH",
    "iata": "HKG",
    "name": "Hong Kong International Airport",
    "city": "Hong Kong",
    "country": "HK",
    "lat": 22.308901,
    "lon": 113.915001,
    "elevation": 28
  },
  {
    "icao": "VIAG",
    "iata": "AGR",
    "name": "Agra Airport / Agra Air Force Station",
    "city": "Agra",
    "country": "IN",
    "lat": 27.157683,
    "lon": 77.960942,
    "elevation": 551
  },
  {
    "icao": "VEAB",
    "iata": "IXD",
    "name": "Prayagraj Airport",
    "city": "Allahabad",
    "country": "IN",
    "lat": 25.4401,
    "lon": 81.733902,
    "elevation": 322
  },
  {
    "icao": "VIAR",
    "iata": "ATQ",
    "name": "Sri Guru Ram Dass Jee International Airport",
    "city": "Amritsar",
    "country": "IN",
    "lat": 31.7096,
    "lon": 74.797302,
    "elevation": 756
  },
  {
    "icao": "VIBK",
    "iata": "BKB",
    "name": "Nal Airport",
    "city": "Bikaner",
    "country": "IN",
    "lat": 28.070601,
    "lon": 73.207199,
    "elevation": 750
  },
  {
    "icao": "VIBR",
    "iata": "KUU",
    "name": "Kullu Manali Airport",
    "city": "Bhuntar",
    "country": "IN",
    "lat": 31.876699,
    "lon": 77.154404,
    "elevation": 3573
  },
  {
    "icao": "VIBT",
    "iata": "BUP",
    "name": "Bhatinda Air Force Station",
    "city": "",
    "country": "IN",
    "lat": 30.2701,
    "lon": 74.755798,
    "elevation": 662
  },
  {
    "icao": "VIBY",
    "iata": "BEK",
    "name": "Bareilly Air Force Station",
    "city": "Bareilly",
    "country": "IN",
    "lat": 28.4221,
    "lon": 79.450798,
    "elevation": 580
  },
  {
    "icao": "VICG",
    "iata": "IXC",
    "name": "Chandigarh International Airport",
    "city": "Chandigarh",
    "country": "IN",
    "lat": 30.6735,
    "lon": 76.788498,
    "elevation": 1012
  },
  {
    "icao": "VEKA",
    "iata": "KNU",
    "name": "Kanpur Airport",
    "city": "Kanpur",
    "country": "IN",
    "lat": 26.404301,
    "lon": 80.410103,
    "elevation": 410
  },
  {
    "icao": "VIDN",
    "iata": "DED",
    "name": "Dehradun Jolly Grant Airport",
    "city": "Dehradun (Jauligrant)",
    "country": "IN",
    "lat": 30.189243,
    "lon": 78.176651,
    "elevation": 1831
  },
  {
    "icao": "VIDP",
    "iata": "DEL",
    "name": "Indira Gandhi International Airport",
    "city": "New Delhi",
    "country": "IN",
    "lat": 28.55563,
    "lon": 77.09519,
    "elevation": 777
  },
  {
    "icao": "VIGG",
    "iata": "DHM",
    "name": "Kangra Airport",
    "city": "Kangra",
    "country": "IN",
    "lat": 32.164902,
    "lon": 76.263018,
    "elevation": 2525
  },
  {
    "icao": "VIGR",
    "iata": "GWL",
    "name": "Gwalior Airport",
    "city": "Gwalior",
    "country": "IN",
    "lat": 26.29330062866211,
    "lon": 78.22779846191406,
    "elevation": 617
  },
  {
    "icao": "VIHR",
    "iata": "HSS",
    "name": "Hisar Airport",
    "city": "Hisar",
    "country": "IN",
    "lat": 29.179399,
    "lon": 75.755302,
    "elevation": 700
  },
  {
    "icao": "VIJO",
    "iata": "JDH",
    "name": "Jodhpur Airport",
    "city": "Jodhpur",
    "country": "IN",
    "lat": 26.251100540161133,
    "lon": 73.04889678955078,
    "elevation": 717
  },
  {
    "icao": "VIJP",
    "iata": "JAI",
    "name": "Jaipur International Airport",
    "city": "Jaipur",
    "country": "IN",
    "lat": 26.8242,
    "lon": 75.812202,
    "elevation": 1263
  },
  {
    "icao": "VIJR",
    "iata": "JSA",
    "name": "Jaisalmer Airport",
    "city": "",
    "country": "IN",
    "lat": 26.8887,
    "lon": 70.864998,
    "elevation": 751
  },
  {
    "icao": "VIJU",
    "iata": "IXJ",
    "name": "Jammu Airport",
    "city": "Jammu",
    "country": "IN",
    "lat": 32.688849,
    "lon": 74.838152,
    "elevation": 996
  },
  {
    "icao": "VIKG",
    "iata": "KQH",
    "name": "Kishangarh Airport Ajmer",
    "city": "Ajmer (Kishangarh)",
    "country": "IN",
    "lat": 26.591007,
    "lon": 74.812956,
    "elevation": 0
  },
  {
    "icao": "VIKO",
    "iata": "KTU",
    "name": "Kota Airport",
    "city": "Kota",
    "country": "IN",
    "lat": 25.160200119,
    "lon": 75.84559631350001,
    "elevation": 896
  },
  {
    "icao": "VILD",
    "iata": "LUH",
    "name": "Ludhiana Airport",
    "city": "",
    "country": "IN",
    "lat": 30.854700088500977,
    "lon": 75.95259857177734,
    "elevation": 834
  },
  {
    "icao": "VILH",
    "iata": "IXL",
    "name": "Leh Kushok Bakula Rimpochee Airport",
    "city": "Leh",
    "country": "IN",
    "lat": 34.135899,
    "lon": 77.546501,
    "elevation": 10682
  },
  {
    "icao": "VILK",
    "iata": "LKO",
    "name": "Chaudhary Charan Singh International Airport",
    "city": "Lucknow",
    "country": "IN",
    "lat": 26.7605991364,
    "lon": 80.8892974854,
    "elevation": 410
  },
  {
    "icao": "VIMB",
    "iata": "MZS",
    "name": "Moradabad Airport",
    "city": "Moradabad",
    "country": "IN",
    "lat": 28.81746,
    "lon": 78.92187,
    "elevation": 637
  },
  {
    "icao": "VIPK",
    "iata": "IXP",
    "name": "Pathankot Airport",
    "city": "Pathankot",
    "country": "IN",
    "lat": 32.233611,
    "lon": 75.634444,
    "elevation": 1017
  },
  {
    "icao": "VIPT",
    "iata": "PGH",
    "name": "Pantnagar Airport",
    "city": "Pantnagar",
    "country": "IN",
    "lat": 29.0334,
    "lon": 79.473701,
    "elevation": 769
  },
  {
    "icao": "VISR",
    "iata": "SXR",
    "name": "Sheikh ul Alam International Airport",
    "city": "Srinagar",
    "country": "IN",
    "lat": 33.987099,
    "lon": 74.7742,
    "elevation": 5429
  },
  {
    "icao": "VLLB",
    "iata": "LPQ",
    "name": "Luang Phabang International Airport",
    "city": "Luang Phabang",
    "country": "LA",
    "lat": 19.897300720214844,
    "lon": 102.16100311279297,
    "elevation": 955
  },
  {
    "icao": "VLPS",
    "iata": "PKZ",
    "name": "Pakse International Airport",
    "city": "Pakse",
    "country": "LA",
    "lat": 15.132100105285645,
    "lon": 105.78099822998047,
    "elevation": 351
  },
  {
    "icao": "VLSK",
    "iata": "ZVK",
    "name": "Savannakhet Airport",
    "city": "",
    "country": "LA",
    "lat": 16.55660057067871,
    "lon": 104.76000213623047,
    "elevation": 509
  },
  {
    "icao": "VLSN",
    "iata": "NEU",
    "name": "Sam Neua Airport",
    "city": "",
    "country": "LA",
    "lat": 20.4184,
    "lon": 104.067001,
    "elevation": 3281
  },
  {
    "icao": "VLVT",
    "iata": "VTE",
    "name": "Wattay International Airport",
    "city": "Vientiane",
    "country": "LA",
    "lat": 17.988300323500003,
    "lon": 102.56300354,
    "elevation": 564
  },
  {
    "icao": "SGVM",
    "iata": "VMI",
    "name": "Aeropuerto Nacional Doctor Juan Plate",
    "city": "Puerto Vallemi",
    "country": "PY",
    "lat": -22.159371,
    "lon": -57.942395,
    "elevation": 280
  },
  {
    "icao": "VMMC",
    "iata": "MFM",
    "name": "Macau International Airport",
    "city": "Nossa Senhora do Carmo",
    "country": "MO",
    "lat": 22.149599,
    "lon": 113.592003,
    "elevation": 20
  },
  {
    "icao": "VNBW",
    "iata": "BWA",
    "name": "Gautam Buddha International Airport",
    "city": "Siddharthanagar (Bhairahawa)",
    "country": "NP",
    "lat": 27.505328,
    "lon": 83.412594,
    "elevation": 358
  },
  {
    "icao": "VNJP",
    "iata": "JKR",
    "name": "Janakpur Airport",
    "city": "Janakpur",
    "country": "NP",
    "lat": 26.708799,
    "lon": 85.922401,
    "elevation": 256
  },
  {
    "icao": "VNKT",
    "iata": "KTM",
    "name": "Tribhuvan International Airport",
    "city": "Kathmandu",
    "country": "NP",
    "lat": 27.6966,
    "lon": 85.3591,
    "elevation": 4390
  },
  {
    "icao": "VNNG",
    "iata": "KEP",
    "name": "Nepalgunj Airport",
    "city": "Nepalgunj",
    "country": "NP",
    "lat": 28.1036,
    "lon": 81.667,
    "elevation": 540
  },
  {
    "icao": "VNPK",
    "iata": "PKR",
    "name": "Pokhara Airport",
    "city": "Pokhara",
    "country": "NP",
    "lat": 28.200621,
    "lon": 83.981203,
    "elevation": 2712
  },
  {
    "icao": "VNTJ",
    "iata": "TPJ",
    "name": "Taplejung Airport",
    "city": "Taplejung",
    "country": "NP",
    "lat": 27.3509,
    "lon": 87.69525,
    "elevation": 7990
  },
  {
    "icao": "VNVT",
    "iata": "BIR",
    "name": "Biratnagar Airport",
    "city": "Biratnagar",
    "country": "NP",
    "lat": 26.48150062561035,
    "lon": 87.26399993896484,
    "elevation": 236
  },
  {
    "icao": "VOAT",
    "iata": "AGX",
    "name": "Agatti Airport",
    "city": "Agatti",
    "country": "IN",
    "lat": 10.8237,
    "lon": 72.176003,
    "elevation": 14
  },
  {
    "icao": "VOBI",
    "iata": "BEP",
    "name": "Bellary Airport",
    "city": "Bellary",
    "country": "IN",
    "lat": 15.162799835205078,
    "lon": 76.88279724121094,
    "elevation": 30
  },
  {
    "icao": "VOBL",
    "iata": "BLR",
    "name": "Kempegowda International Airport",
    "city": "Bangalore",
    "country": "IN",
    "lat": 13.1979,
    "lon": 77.706299,
    "elevation": 3000
  },
  {
    "icao": "VOBR",
    "iata": "IXX",
    "name": "Bidar Airport / Bidar Air Force Station",
    "city": "Bidar",
    "country": "IN",
    "lat": 17.9081,
    "lon": 77.487099,
    "elevation": 2178
  },
  {
    "icao": "VOBZ",
    "iata": "VGA",
    "name": "Vijayawada Airport",
    "city": "Gannavaram",
    "country": "IN",
    "lat": 16.530399,
    "lon": 80.796799,
    "elevation": 82
  },
  {
    "icao": "VOCB",
    "iata": "CJB",
    "name": "Coimbatore International Airport",
    "city": "Coimbatore",
    "country": "IN",
    "lat": 11.029999733,
    "lon": 77.0434036255,
    "elevation": 1324
  },
  {
    "icao": "VOCI",
    "iata": "COK",
    "name": "Cochin International Airport",
    "city": "Kochi",
    "country": "IN",
    "lat": 10.151047,
    "lon": 76.400838,
    "elevation": 30
  },
  {
    "icao": "VOCL",
    "iata": "CCJ",
    "name": "Calicut International Airport",
    "city": "Calicut",
    "country": "IN",
    "lat": 11.1368,
    "lon": 75.955299,
    "elevation": 342
  },
  {
    "icao": "VOCP",
    "iata": "CDP",
    "name": "Kadapa Airport",
    "city": "Kadapa",
    "country": "IN",
    "lat": 14.513154,
    "lon": 78.769183,
    "elevation": 430
  },
  {
    "icao": "VOCX",
    "iata": "CBD",
    "name": "Car Nicobar Air Force Base",
    "city": "IAF Camp",
    "country": "IN",
    "lat": 9.153056,
    "lon": 92.819273,
    "elevation": 5
  },
  {
    "icao": "VOGA",
    "iata": "GOX",
    "name": "Manohar International Airport",
    "city": "Mopa",
    "country": "IN",
    "lat": 15.744257,
    "lon": 73.860625,
    "elevation": 552
  },
  {
    "icao": "VOGO",
    "iata": "GOI",
    "name": "Dabolim Airport",
    "city": "Vasco da Gama",
    "country": "IN",
    "lat": 15.3808,
    "lon": 73.831398,
    "elevation": 150
  },
  {
    "icao": "VOHS",
    "iata": "HYD",
    "name": "Rajiv Gandhi International Airport",
    "city": "Hyderabad",
    "country": "IN",
    "lat": 17.231318,
    "lon": 78.429855,
    "elevation": 2024
  },
  {
    "icao": "VOHY",
    "iata": "BPM",
    "name": "Begumpet Airport",
    "city": "Hyderabad",
    "country": "IN",
    "lat": 17.4531,
    "lon": 78.467598,
    "elevation": 1742
  },
  {
    "icao": "VOKN",
    "iata": "CNN",
    "name": "Kannur International Airport",
    "city": "Kannur",
    "country": "IN",
    "lat": 11.918614,
    "lon": 75.547211,
    "elevation": 330
  },
  {
    "icao": "VOKU",
    "iata": "KJB",
    "name": "Kurnool Airport",
    "city": "Orvakal",
    "country": "IN",
    "lat": 15.716288,
    "lon": 78.16923,
    "elevation": 920
  },
  {
    "icao": "VOMD",
    "iata": "IXM",
    "name": "Madurai Airport",
    "city": "Madurai",
    "country": "IN",
    "lat": 9.83450984955,
    "lon": 78.09339904790001,
    "elevation": 459
  },
  {
    "icao": "VOML",
    "iata": "IXE",
    "name": "Mangalore International Airport",
    "city": "Mangalore",
    "country": "IN",
    "lat": 12.9612998962,
    "lon": 74.8900985718,
    "elevation": 337
  },
  {
    "icao": "VOMM",
    "iata": "MAA",
    "name": "Chennai International Airport",
    "city": "Chennai",
    "country": "IN",
    "lat": 12.990005,
    "lon": 80.169296,
    "elevation": 52
  },
  {
    "icao": "VOPB",
    "iata": "IXZ",
    "name": "Veer Savarkar International Airport / INS Utkrosh",
    "city": "Port Blair",
    "country": "IN",
    "lat": 11.641208,
    "lon": 92.729643,
    "elevation": 13
  },
  {
    "icao": "VOPC",
    "iata": "PNY",
    "name": "Pondicherry Airport",
    "city": "Puducherry (Pondicherry)",
    "country": "IN",
    "lat": 11.968,
    "lon": 79.812,
    "elevation": 134
  },
  {
    "icao": "VOPN",
    "iata": "PUT",
    "name": "Sri Sathya Sai Airport",
    "city": "Puttaparthi",
    "country": "IN",
    "lat": 14.1492996216,
    "lon": 77.7910995483,
    "elevation": 1558
  },
  {
    "icao": "VORY",
    "iata": "RJA",
    "name": "Rajahmundry Airport",
    "city": "Madhurapudi",
    "country": "IN",
    "lat": 17.105799,
    "lon": 81.813204,
    "elevation": 151
  },
  {
    "icao": "VOSM",
    "iata": "SXV",
    "name": "Salem Airport",
    "city": "Salem",
    "country": "IN",
    "lat": 11.78330039978,
    "lon": 78.06559753418,
    "elevation": 1008
  },
  {
    "icao": "VOTR",
    "iata": "TRZ",
    "name": "Tiruchirappalli International Airport",
    "city": "Tiruchirappalli",
    "country": "IN",
    "lat": 10.766223,
    "lon": 78.71774,
    "elevation": 288
  },
  {
    "icao": "VOTV",
    "iata": "TRV",
    "name": "Thiruvananthapuram International Airport",
    "city": "Thiruvananthapuram",
    "country": "IN",
    "lat": 8.48212,
    "lon": 76.920097,
    "elevation": 15
  },
  {
    "icao": "VQGP",
    "iata": "GLU",
    "name": "Gelephu Airport",
    "city": "Gelephu",
    "country": "BT",
    "lat": 26.88456,
    "lon": 90.46412,
    "elevation": 980
  },
  {
    "icao": "VQPR",
    "iata": "PBH",
    "name": "Paro International Airport",
    "city": "Paro",
    "country": "BT",
    "lat": 27.4032,
    "lon": 89.424599,
    "elevation": 7364
  },
  {
    "icao": "VRDA",
    "iata": "NMF",
    "name": "Maafaru International Airport",
    "city": "Noonu Atoll",
    "country": "MV",
    "lat": 5.818394,
    "lon": 73.469181,
    "elevation": 6
  },
  {
    "icao": "VRMG",
    "iata": "GAN",
    "name": "Gan International Airport",
    "city": "Gan",
    "country": "MV",
    "lat": -0.692694,
    "lon": 73.151557,
    "elevation": 6
  },
  {
    "icao": "VRMH",
    "iata": "HAQ",
    "name": "Hanimaadhoo Airport",
    "city": "Haa Dhaalu Atoll",
    "country": "MV",
    "lat": 6.744229793548584,
    "lon": 73.17050170898438,
    "elevation": 4
  },
  {
    "icao": "VRMK",
    "iata": "KDO",
    "name": "Kadhdhoo Airport",
    "city": "Kadhdhoo",
    "country": "MV",
    "lat": 1.8591699600219727,
    "lon": 73.52189636230469,
    "elevation": 4
  },
  {
    "icao": "VRMM",
    "iata": "MLE",
    "name": "Malé International Airport",
    "city": "Malé",
    "country": "MV",
    "lat": 4.191830158233643,
    "lon": 73.52909851074219,
    "elevation": 6
  },
  {
    "icao": "VRMT",
    "iata": "KDM",
    "name": "Kaadedhdhoo Airport",
    "city": "Huvadhu Atoll",
    "country": "MV",
    "lat": 0.488131,
    "lon": 72.996902,
    "elevation": 2
  },
  {
    "icao": "VRMV",
    "iata": "VAM",
    "name": "Villa International Airport Maamigili",
    "city": "Maamigili",
    "country": "MV",
    "lat": 3.470556,
    "lon": 72.835833,
    "elevation": 6
  },
  {
    "icao": "VTBD",
    "iata": "DMK",
    "name": "Don Mueang International Airport",
    "city": "Bangkok",
    "country": "TH",
    "lat": 13.9126,
    "lon": 100.607002,
    "elevation": 9
  },
  {
    "icao": "VTBK",
    "iata": "KDT",
    "name": "Kamphaeng Saen Airport",
    "city": "Nakhon Pathom",
    "country": "TH",
    "lat": 14.1020002365,
    "lon": 99.9171981812,
    "elevation": 30
  },
  {
    "icao": "VTBL",
    "iata": "KKM",
    "name": "Khok Kathiam Airport",
    "city": "Lop Buri",
    "country": "TH",
    "lat": 14.87462,
    "lon": 100.663397,
    "elevation": 123
  },
  {
    "icao": "VTBO",
    "iata": "TDX",
    "name": "Trat Airport",
    "city": "Laem Ngop",
    "country": "TH",
    "lat": 12.2746,
    "lon": 102.319,
    "elevation": 105
  },
  {
    "icao": "VTBS",
    "iata": "BKK",
    "name": "Suvarnabhumi Airport",
    "city": "Bangkok",
    "country": "TH",
    "lat": 13.6811,
    "lon": 100.747002,
    "elevation": 5
  },
  {
    "icao": "VTBU",
    "iata": "UTP",
    "name": "U-Tapao International Airport",
    "city": "Rayong",
    "country": "TH",
    "lat": 12.679900169372559,
    "lon": 101.00499725341797,
    "elevation": 42
  },
  {
    "icao": "VTCC",
    "iata": "CNX",
    "name": "Chiang Mai International Airport",
    "city": "Chiang Mai",
    "country": "TH",
    "lat": 18.766799926799997,
    "lon": 98.962600708,
    "elevation": 1036
  },
  {
    "icao": "VTCH",
    "iata": "HGN",
    "name": "Mae Hong Son Airport",
    "city": "Mae Hong Son",
    "country": "TH",
    "lat": 19.3013,
    "lon": 97.9758,
    "elevation": 929
  },
  {
    "icao": "VTCL",
    "iata": "LPT",
    "name": "Lampang Airport",
    "city": "",
    "country": "TH",
    "lat": 18.27090072631836,
    "lon": 99.50420379638672,
    "elevation": 811
  },
  {
    "icao": "VTCN",
    "iata": "NNT",
    "name": "Nan Airport",
    "city": "",
    "country": "TH",
    "lat": 18.807899475097656,
    "lon": 100.78299713134766,
    "elevation": 685
  },
  {
    "icao": "VTCP",
    "iata": "PRH",
    "name": "Phrae Airport",
    "city": "",
    "country": "TH",
    "lat": 18.1322,
    "lon": 100.165001,
    "elevation": 538
  },
  {
    "icao": "VTCT",
    "iata": "CEI",
    "name": "Mae Fah Luang - Chiang Rai International Airport",
    "city": "Chiang Rai",
    "country": "TH",
    "lat": 19.952299,
    "lon": 99.882896,
    "elevation": 1280
  },
  {
    "icao": "VTPB",
    "iata": "PHY",
    "name": "Phetchabun Airport",
    "city": "",
    "country": "TH",
    "lat": 16.6760005951,
    "lon": 101.194999695,
    "elevation": 450
  },
  {
    "icao": "VTPH",
    "iata": "HHQ",
    "name": "Hua Hin Airport",
    "city": "Hua Hin",
    "country": "TH",
    "lat": 12.6361999512,
    "lon": 99.951499939,
    "elevation": 62
  },
  {
    "icao": "VTPI",
    "iata": "TKH",
    "name": "Takhli Airport",
    "city": "",
    "country": "TH",
    "lat": 15.277299881,
    "lon": 100.29599762,
    "elevation": 107
  },
  {
    "icao": "VTPM",
    "iata": "MAQ",
    "name": "Mae Sot Airport",
    "city": "",
    "country": "TH",
    "lat": 16.699899673461914,
    "lon": 98.54509735107422,
    "elevation": 690
  },
  {
    "icao": "VTPO",
    "iata": "THS",
    "name": "Sukhothai Airport",
    "city": "",
    "country": "TH",
    "lat": 17.238000869750977,
    "lon": 99.81819915771484,
    "elevation": 179
  },
  {
    "icao": "VTPP",
    "iata": "PHS",
    "name": "Phitsanulok Airport",
    "city": "Phitsanulok",
    "country": "TH",
    "lat": 16.7829,
    "lon": 100.278999,
    "elevation": 154
  },
  {
    "icao": "VTPT",
    "iata": "TKT",
    "name": "Tak Airport",
    "city": "",
    "country": "TH",
    "lat": 16.896,
    "lon": 99.253304,
    "elevation": 478
  },
  {
    "icao": "VTSB",
    "iata": "URT",
    "name": "Surat Thani Airport",
    "city": "Surat Thani",
    "country": "TH",
    "lat": 9.13259983063,
    "lon": 99.135597229,
    "elevation": 20
  },
  {
    "icao": "VTSC",
    "iata": "NAW",
    "name": "Narathiwat Airport",
    "city": "",
    "country": "TH",
    "lat": 6.5199198722839355,
    "lon": 101.74299621582031,
    "elevation": 16
  },
  {
    "icao": "VTSE",
    "iata": "CJM",
    "name": "Chumphon Airport",
    "city": "Chumphon",
    "country": "TH",
    "lat": 10.7112,
    "lon": 99.361702,
    "elevation": 18
  },
  {
    "icao": "VTSF",
    "iata": "NST",
    "name": "Nakhon Si Thammarat Airport",
    "city": "Nakhon Si Thammarat",
    "country": "TH",
    "lat": 8.539620399475098,
    "lon": 99.9447021484375,
    "elevation": 13
  },
  {
    "icao": "VTSG",
    "iata": "KBV",
    "name": "Krabi Airport",
    "city": "Krabi",
    "country": "TH",
    "lat": 8.09912014008,
    "lon": 98.9861984253,
    "elevation": 82
  },
  {
    "icao": "VTSH",
    "iata": "SGZ",
    "name": "Songkhla Airport",
    "city": "",
    "country": "TH",
    "lat": 7.186560153961182,
    "lon": 100.60800170898438,
    "elevation": 12
  },
  {
    "icao": "VTSK",
    "iata": "PAN",
    "name": "Pattani Airport",
    "city": "",
    "country": "TH",
    "lat": 6.78546,
    "lon": 101.153999,
    "elevation": 8
  },
  {
    "icao": "VTSM",
    "iata": "USM",
    "name": "Samui Airport",
    "city": "Na Thon (Ko Samui Island)",
    "country": "TH",
    "lat": 9.54779,
    "lon": 100.061996,
    "elevation": 64
  },
  {
    "icao": "VTSP",
    "iata": "HKT",
    "name": "Phuket International Airport",
    "city": "Phuket",
    "country": "TH",
    "lat": 8.1132,
    "lon": 98.316902,
    "elevation": 82
  },
  {
    "icao": "VTSR",
    "iata": "UNN",
    "name": "Ranong Airport",
    "city": "Ranong",
    "country": "TH",
    "lat": 9.77762,
    "lon": 98.585503,
    "elevation": 57
  },
  {
    "icao": "VTSS",
    "iata": "HDY",
    "name": "Hat Yai International Airport",
    "city": "Hat Yai",
    "country": "TH",
    "lat": 6.93320989609,
    "lon": 100.392997742,
    "elevation": 90
  },
  {
    "icao": "VTST",
    "iata": "TST",
    "name": "Trang Airport",
    "city": "Trang",
    "country": "TH",
    "lat": 7.50874,
    "lon": 99.6166,
    "elevation": 67
  },
  {
    "icao": "VTUD",
    "iata": "UTH",
    "name": "Udon Thani Airport",
    "city": "Udon Thani",
    "country": "TH",
    "lat": 17.386400222800003,
    "lon": 102.788002014,
    "elevation": 579
  },
  {
    "icao": "VTUI",
    "iata": "SNO",
    "name": "Sakon Nakhon Airport",
    "city": "",
    "country": "TH",
    "lat": 17.195100784301758,
    "lon": 104.11900329589844,
    "elevation": 529
  },
  {
    "icao": "VTUJ",
    "iata": "PXR",
    "name": "Surin Airport",
    "city": "Surin",
    "country": "TH",
    "lat": 14.868300437927,
    "lon": 103.49800109863,
    "elevation": 478
  },
  {
    "icao": "VTUK",
    "iata": "KKC",
    "name": "Khon Kaen Airport",
    "city": "Khon Kaen",
    "country": "TH",
    "lat": 16.466600418099997,
    "lon": 102.783996582,
    "elevation": 670
  },
  {
    "icao": "VTUL",
    "iata": "LOE",
    "name": "Loei Airport",
    "city": "",
    "country": "TH",
    "lat": 17.43910026550293,
    "lon": 101.72200012207031,
    "elevation": 860
  },
  {
    "icao": "VTUO",
    "iata": "BFV",
    "name": "Buri Ram Airport",
    "city": "Buriram",
    "country": "TH",
    "lat": 15.2295,
    "lon": 103.252998,
    "elevation": 590
  },
  {
    "icao": "VTUQ",
    "iata": "NAK",
    "name": "Nakhon Ratchasima Airport",
    "city": "Chaloem Phra Kiat",
    "country": "TH",
    "lat": 14.9495,
    "lon": 102.313004,
    "elevation": 765
  },
  {
    "icao": "VTUU",
    "iata": "UBP",
    "name": "Ubon Ratchathani Airport",
    "city": "Ubon Ratchathani",
    "country": "TH",
    "lat": 15.2512998581,
    "lon": 104.870002747,
    "elevation": 406
  },
  {
    "icao": "VTUV",
    "iata": "ROI",
    "name": "Roi Et Airport",
    "city": "Roi Et",
    "country": "TH",
    "lat": 16.1168,
    "lon": 103.774002,
    "elevation": 451
  },
  {
    "icao": "VTUW",
    "iata": "KOP",
    "name": "Nakhon Phanom Airport",
    "city": "Nakhon Phanom",
    "country": "TH",
    "lat": 17.383801,
    "lon": 104.642998,
    "elevation": 587
  },
  {
    "icao": "VVBM",
    "iata": "BMV",
    "name": "Buon Ma Thuot Airport",
    "city": "Buon Ma Thuot",
    "country": "VN",
    "lat": 12.668299675,
    "lon": 108.120002747,
    "elevation": 1729
  },
  {
    "icao": "VVCI",
    "iata": "HPH",
    "name": "Cat Bi International Airport",
    "city": "Haiphong (Hai An)",
    "country": "VN",
    "lat": 20.81686,
    "lon": 106.722994,
    "elevation": 6
  },
  {
    "icao": "VVCM",
    "iata": "CAH",
    "name": "Cà Mau Airport",
    "city": "Ca Mau City",
    "country": "VN",
    "lat": 9.177667,
    "lon": 105.177778,
    "elevation": 6
  },
  {
    "icao": "VVCR",
    "iata": "CXR",
    "name": "Cam Ranh International Airport / Cam Ranh Air Base",
    "city": "Cam Ranh",
    "country": "VN",
    "lat": 11.9982,
    "lon": 109.219002,
    "elevation": 40
  },
  {
    "icao": "VVCS",
    "iata": "VCS",
    "name": "Con Dao Airport",
    "city": "Con Dao",
    "country": "VN",
    "lat": 8.73183,
    "lon": 106.633003,
    "elevation": 20
  },
  {
    "icao": "VVCT",
    "iata": "VCA",
    "name": "Can Tho International Airport",
    "city": "Can Tho",
    "country": "VN",
    "lat": 10.0851,
    "lon": 105.711998,
    "elevation": 9
  },
  {
    "icao": "VVDB",
    "iata": "DIN",
    "name": "Dien Bien Phu Airport",
    "city": "Dien Bien Phu",
    "country": "VN",
    "lat": 21.3974990845,
    "lon": 103.008003235,
    "elevation": 1611
  },
  {
    "icao": "VVDH",
    "iata": "VDH",
    "name": "Dong Hoi Airport",
    "city": "Dong Hoi",
    "country": "VN",
    "lat": 17.515,
    "lon": 106.590556,
    "elevation": 59
  },
  {
    "icao": "VVDL",
    "iata": "DLI",
    "name": "Lien Khuong Airport",
    "city": "Da Lat",
    "country": "VN",
    "lat": 11.750556,
    "lon": 108.366997,
    "elevation": 3156
  },
  {
    "icao": "VVDN",
    "iata": "DAD",
    "name": "Da Nang International Airport",
    "city": "Da Nang",
    "country": "VN",
    "lat": 16.0439,
    "lon": 108.198997,
    "elevation": 33
  },
  {
    "icao": "VVNB",
    "iata": "HAN",
    "name": "Noi Bai International Airport",
    "city": "Hanoi (Soc Son)",
    "country": "VN",
    "lat": 21.221201,
    "lon": 105.806999,
    "elevation": 39
  },
  {
    "icao": "VVPB",
    "iata": "HUI",
    "name": "Phu Bai International Airport",
    "city": "Huế",
    "country": "VN",
    "lat": 16.400628,
    "lon": 107.703094,
    "elevation": 48
  },
  {
    "icao": "VVPC",
    "iata": "UIH",
    "name": "Phu Cat Airport",
    "city": "Quy Nohn",
    "country": "VN",
    "lat": 13.955,
    "lon": 109.042,
    "elevation": 80
  },
  {
    "icao": "VVPK",
    "iata": "PXU",
    "name": "Pleiku Airport",
    "city": "Pleiku",
    "country": "VN",
    "lat": 14.004500389099121,
    "lon": 108.01699829101562,
    "elevation": 2434
  },
  {
    "icao": "VVPQ",
    "iata": "PQC",
    "name": "Phu Quoc International Airport",
    "city": "Phu Quoc Island",
    "country": "VN",
    "lat": 10.1698,
    "lon": 103.9931,
    "elevation": 37
  },
  {
    "icao": "VVRG",
    "iata": "VKG",
    "name": "Rach Gia Airport",
    "city": "Rach Gia",
    "country": "VN",
    "lat": 9.95802997234,
    "lon": 105.132379532,
    "elevation": 7
  },
  {
    "icao": "VVTH",
    "iata": "TBB",
    "name": "Dong Tac Airport",
    "city": "Tuy Hoa",
    "country": "VN",
    "lat": 13.0496,
    "lon": 109.334,
    "elevation": 20
  },
  {
    "icao": "VVTS",
    "iata": "SGN",
    "name": "Tan Son Nhat International Airport",
    "city": "Ho Chi Minh City",
    "country": "VN",
    "lat": 10.8188,
    "lon": 106.652,
    "elevation": 33
  },
  {
    "icao": "VVVD",
    "iata": "VDO",
    "name": "Van Don International Airport",
    "city": "Van Don",
    "country": "VN",
    "lat": 21.120693,
    "lon": 107.41539,
    "elevation": 24
  },
  {
    "icao": "VVVH",
    "iata": "VII",
    "name": "Vinh Airport",
    "city": "Vinh",
    "country": "VN",
    "lat": 18.7376003265,
    "lon": 105.67099762,
    "elevation": 23
  },
  {
    "icao": "VYDW",
    "iata": "TVY",
    "name": "Dawei Airport",
    "city": "Dawei",
    "country": "MM",
    "lat": 14.103899955749512,
    "lon": 98.20359802246094,
    "elevation": 84
  },
  {
    "icao": "VYKG",
    "iata": "KET",
    "name": "Kengtung Airport",
    "city": "Kengtung",
    "country": "MM",
    "lat": 21.301599502563477,
    "lon": 99.63600158691406,
    "elevation": 2798
  },
  {
    "icao": "VYKP",
    "iata": "KYP",
    "name": "Kyaukpyu Airport",
    "city": "Kyaukpyu",
    "country": "MM",
    "lat": 19.42639923095703,
    "lon": 93.53479766845703,
    "elevation": 20
  },
  {
    "icao": "VYKT",
    "iata": "KAW",
    "name": "Kawthoung Airport",
    "city": "Kawthoung",
    "country": "MM",
    "lat": 10.049300193786621,
    "lon": 98.53800201416016,
    "elevation": 180
  },
  {
    "icao": "VYLK",
    "iata": "LIW",
    "name": "Loikaw Airport",
    "city": "Loikaw",
    "country": "MM",
    "lat": 19.691499710083008,
    "lon": 97.21479797363281,
    "elevation": 2940
  },
  {
    "icao": "VYLS",
    "iata": "LSH",
    "name": "Lashio Airport",
    "city": "Lashio",
    "country": "MM",
    "lat": 22.9778995513916,
    "lon": 97.752197265625,
    "elevation": 2450
  },
  {
    "icao": "VYMD",
    "iata": "MDL",
    "name": "Mandalay International Airport",
    "city": "Mandalay",
    "country": "MM",
    "lat": 21.702199935913086,
    "lon": 95.97789764404297,
    "elevation": 300
  },
  {
    "icao": "VYME",
    "iata": "MGZ",
    "name": "Myeik Airport",
    "city": "Mkeik",
    "country": "MM",
    "lat": 12.439800262451172,
    "lon": 98.62149810791016,
    "elevation": 75
  },
  {
    "icao": "VYMK",
    "iata": "MYT",
    "name": "Myitkyina Airport",
    "city": "Myitkyina",
    "country": "MM",
    "lat": 25.3836,
    "lon": 97.351898,
    "elevation": 475
  },
  {
    "icao": "VYMO",
    "iata": "MOE",
    "name": "Momeik Airport",
    "city": "",
    "country": "MM",
    "lat": 23.092500686645508,
    "lon": 96.64530181884766,
    "elevation": 600
  },
  {
    "icao": "VYMS",
    "iata": "MOG",
    "name": "Mong Hsat Airport",
    "city": "Mong Hsat",
    "country": "MM",
    "lat": 20.516799926757812,
    "lon": 99.25679779052734,
    "elevation": 1875
  },
  {
    "icao": "VYNS",
    "iata": "NMS",
    "name": "Namsang Airport",
    "city": "Namsang",
    "country": "MM",
    "lat": 20.890499114990234,
    "lon": 97.73590087890625,
    "elevation": 3100
  },
  {
    "icao": "VYNT",
    "iata": "NYT",
    "name": "Nay Pyi Taw International Airport",
    "city": "Pyinmana",
    "country": "MM",
    "lat": 19.623501,
    "lon": 96.200996,
    "elevation": 302
  },
  {
    "icao": "VYPT",
    "iata": "PBU",
    "name": "Putao Airport",
    "city": "Putao",
    "country": "MM",
    "lat": 27.32990074157715,
    "lon": 97.42630004882812,
    "elevation": 1500
  },
  {
    "icao": "VYSW",
    "iata": "AKY",
    "name": "Sittwe Airport",
    "city": "Sittwe",
    "country": "MM",
    "lat": 20.133165,
    "lon": 92.870693,
    "elevation": 27
  },
  {
    "icao": "VYTD",
    "iata": "SNW",
    "name": "Thandwe Airport",
    "city": "Thandwe",
    "country": "MM",
    "lat": 18.4606990814209,
    "lon": 94.30010223388672,
    "elevation": 20
  },
  {
    "icao": "VYTL",
    "iata": "THL",
    "name": "Tachileik Airport",
    "city": "Tachileik",
    "country": "MM",
    "lat": 20.483800888061523,
    "lon": 99.9354019165039,
    "elevation": 1280
  },
  {
    "icao": "VYYY",
    "iata": "RGN",
    "name": "Yangon International Airport",
    "city": "Yangon",
    "country": "MM",
    "lat": 16.907300949099998,
    "lon": 96.1332015991,
    "elevation": 109
  },
  {
    "icao": "WAAA",
    "iata": "UPG",
    "name": "Hasanuddin International Airport",
    "city": "Ujung Pandang",
    "country": "ID",
    "lat": -5.06163,
    "lon": 119.554001,
    "elevation": 47
  },
  {
    "icao": "WABB",
    "iata": "BIK",
    "name": "Frans Kaisiepo Airport",
    "city": "Biak",
    "country": "ID",
    "lat": -1.19002,
    "lon": 136.108002,
    "elevation": 46
  },
  {
    "icao": "WABI",
    "iata": "NBX",
    "name": "Douw Aturure Airport",
    "city": "Nabire",
    "country": "ID",
    "lat": -3.397973,
    "lon": 135.393071,
    "elevation": 22
  },
  {
    "icao": "WABO",
    "iata": "ZRI",
    "name": "Stevanus Rumbewas Airport",
    "city": "Serui",
    "country": "ID",
    "lat": -1.82842,
    "lon": 136.062402,
    "elevation": 20
  },
  {
    "icao": "WAYY",
    "iata": "TIM",
    "name": "Mozes Kilangin Airport",
    "city": "Timika",
    "country": "ID",
    "lat": -4.52978,
    "lon": 136.887388,
    "elevation": 103
  },
  {
    "icao": "WADD",
    "iata": "DPS",
    "name": "Denpasar I Gusti Ngurah Rai International Airport",
    "city": "Kuta, Badung",
    "country": "ID",
    "lat": -8.748409,
    "lon": 115.167123,
    "elevation": 14
  },
  {
    "icao": "WADL",
    "iata": "LOP",
    "name": "Lombok International Airport",
    "city": "Mataram (Pujut, Lombok Tengah)",
    "country": "ID",
    "lat": -8.759962,
    "lon": 116.278169,
    "elevation": 319
  },
  {
    "icao": "WAEE",
    "iata": "TTE",
    "name": "Sultan Babullah Airport",
    "city": "Ternate",
    "country": "ID",
    "lat": 0.831012,
    "lon": 127.381611,
    "elevation": 49
  },
  {
    "icao": "WAEW",
    "iata": "OTI",
    "name": "Pitu Airport",
    "city": "Gotalalamo-Morotai Island",
    "country": "ID",
    "lat": 2.04599,
    "lon": 128.324997,
    "elevation": 49
  },
  {
    "icao": "WAFB",
    "iata": "TRT",
    "name": "Toraja Airport",
    "city": "Toraja",
    "country": "ID",
    "lat": -3.185833,
    "lon": 119.91775,
    "elevation": 2884
  },
  {
    "icao": "WAFF",
    "iata": "PLW",
    "name": "Mutiara - SIS Al-Jufrie Airport",
    "city": "Palu",
    "country": "ID",
    "lat": -0.916462,
    "lon": 119.908647,
    "elevation": 284
  },
  {
    "icao": "WAFP",
    "iata": "PSJ",
    "name": "Kasiguncu Airport",
    "city": "Poso-Celebes Island",
    "country": "ID",
    "lat": -1.414121,
    "lon": 120.659241,
    "elevation": 174
  },
  {
    "icao": "WAFW",
    "iata": "LUW",
    "name": "Syukuran Aminuddin Amir Airport",
    "city": "Luwok",
    "country": "ID",
    "lat": -1.035893,
    "lon": 122.773934,
    "elevation": 56
  },
  {
    "icao": "WAGG",
    "iata": "PKY",
    "name": "Tjilik Riwut Airport",
    "city": "Palangkaraya",
    "country": "ID",
    "lat": -2.227146,
    "lon": 113.943388,
    "elevation": 82
  },
  {
    "icao": "WAHI",
    "iata": "YIA",
    "name": "Yogyakarta International Airport",
    "city": "Yogyakarta",
    "country": "ID",
    "lat": -7.905338,
    "lon": 110.057264,
    "elevation": 24
  },
  {
    "icao": "WAHL",
    "iata": "CXP",
    "name": "Tunggul Wulung Airport",
    "city": "Cilacap",
    "country": "ID",
    "lat": -7.64506,
    "lon": 109.033997,
    "elevation": 69
  },
  {
    "icao": "WAJJ",
    "iata": "DJJ",
    "name": "Dortheys Hiyo Eluay International Airport",
    "city": "Sentani",
    "country": "ID",
    "lat": -2.579627,
    "lon": 140.519857,
    "elevation": 289
  },
  {
    "icao": "WAJO",
    "iata": "OKL",
    "name": "Oksibil Airport",
    "city": "Oksibil",
    "country": "ID",
    "lat": -4.9071,
    "lon": 140.6277,
    "elevation": 4315
  },
  {
    "icao": "WAKK",
    "iata": "MKQ",
    "name": "Mopah International Airport",
    "city": "Merauke",
    "country": "ID",
    "lat": -8.523898,
    "lon": 140.419693,
    "elevation": 10
  },
  {
    "icao": "WAKT",
    "iata": "TMH",
    "name": "Tanah Merah Airport",
    "city": "Tanah Merah",
    "country": "ID",
    "lat": -6.09669,
    "lon": 140.303521,
    "elevation": 57
  },
  {
    "icao": "WALL",
    "iata": "BPN",
    "name": "Sultan Aji Muhammad Sulaiman Sepinggan International Airport",
    "city": "Balikpapan",
    "country": "ID",
    "lat": -1.268342,
    "lon": 116.89452,
    "elevation": 12
  },
  {
    "icao": "WAQQ",
    "iata": "TRK",
    "name": "Juwata International Airport / Suharnoko Harbani AFB",
    "city": "Tarakan",
    "country": "ID",
    "lat": 3.325145,
    "lon": 117.564169,
    "elevation": 23
  },
  {
    "icao": "WALS",
    "iata": "AAP",
    "name": "Aji Pangeran Tumenggung Pranoto International Airport",
    "city": "Samarinda",
    "country": "ID",
    "lat": -0.374478,
    "lon": 117.250128,
    "elevation": 82
  },
  {
    "icao": "WAMH",
    "iata": "NAH",
    "name": "Naha Airport",
    "city": "Tabukan Utara, Sangihe Islands",
    "country": "ID",
    "lat": 3.68478,
    "lon": 125.527162,
    "elevation": 16
  },
  {
    "icao": "WAMM",
    "iata": "MDC",
    "name": "Sam Ratulangi Airport",
    "city": "Manado",
    "country": "ID",
    "lat": 1.549266,
    "lon": 124.926319,
    "elevation": 264
  },
  {
    "icao": "WAON",
    "iata": "TJG",
    "name": "Warukin Airport",
    "city": "Tanta-Tabalong",
    "country": "ID",
    "lat": -2.21656,
    "lon": 115.435997,
    "elevation": 197
  },
  {
    "icao": "WAOO",
    "iata": "BDJ",
    "name": "Syamsudin Noor International Airport",
    "city": "Landasan Ulin",
    "country": "ID",
    "lat": -3.44236,
    "lon": 114.763,
    "elevation": 66
  },
  {
    "icao": "WAPF",
    "iata": "LUV",
    "name": "Karel Sadsuitubun Airport",
    "city": "Langgur",
    "country": "ID",
    "lat": -5.760278,
    "lon": 132.759444,
    "elevation": 78
  },
  {
    "icao": "WAPN",
    "iata": "NAM",
    "name": "Namniwel Airport",
    "city": "Namniwel",
    "country": "ID",
    "lat": -3.143159,
    "lon": 126.976469,
    "elevation": 7
  },
  {
    "icao": "WAPP",
    "iata": "AMQ",
    "name": "Pattimura International Airport",
    "city": "Ambon",
    "country": "ID",
    "lat": -3.71026,
    "lon": 128.089005,
    "elevation": 33
  },
  {
    "icao": "WAQT",
    "iata": "BEJ",
    "name": "Kalimarau Airport",
    "city": "Tanjung Redeb - Borneo Island",
    "country": "ID",
    "lat": 2.14776,
    "lon": 117.430705,
    "elevation": 59
  },
  {
    "icao": "WARA",
    "iata": "MLG",
    "name": "Abdul Rachman Saleh Airport",
    "city": "Malang",
    "country": "ID",
    "lat": -7.929099,
    "lon": 112.714233,
    "elevation": 1726
  },
  {
    "icao": "WAHH",
    "iata": "JOG",
    "name": "Adisutjipto Airport",
    "city": "Yogyakarta",
    "country": "ID",
    "lat": -7.78818,
    "lon": 110.431999,
    "elevation": 379
  },
  {
    "icao": "WAHQ",
    "iata": "SOC",
    "name": "Adisumarmo Airport",
    "city": "Surakarta",
    "country": "ID",
    "lat": -7.516044,
    "lon": 110.757492,
    "elevation": 421
  },
  {
    "icao": "WARR",
    "iata": "SUB",
    "name": "Juanda International Airport",
    "city": "Surabaya",
    "country": "ID",
    "lat": -7.37983,
    "lon": 112.787003,
    "elevation": 9
  },
  {
    "icao": "WAHS",
    "iata": "SRG",
    "name": "Achmad Yani Airport",
    "city": "Semarang",
    "country": "ID",
    "lat": -6.970732,
    "lon": 110.373244,
    "elevation": 10
  },
  {
    "icao": "WASF",
    "iata": "FKQ",
    "name": "Fakfak Airport",
    "city": "Fakfak",
    "country": "ID",
    "lat": -2.920508,
    "lon": 132.267011,
    "elevation": 462
  },
  {
    "icao": "WASK",
    "iata": "KNG",
    "name": "Utarom Airport",
    "city": "Kaimana",
    "country": "ID",
    "lat": -3.6446,
    "lon": 133.695116,
    "elevation": 19
  },
  {
    "icao": "WASO",
    "iata": "BXB",
    "name": "Babo Airport",
    "city": "Babo",
    "country": "ID",
    "lat": -2.53224,
    "lon": 133.438995,
    "elevation": 10
  },
  {
    "icao": "WAUU",
    "iata": "MKW",
    "name": "Rendani Airport",
    "city": "Manokwari",
    "country": "ID",
    "lat": -0.891833,
    "lon": 134.048996,
    "elevation": 23
  },
  {
    "icao": "WASS",
    "iata": "SOQ",
    "name": "Domine Eduard Osok Airport",
    "city": "Sorong",
    "country": "ID",
    "lat": -0.894,
    "lon": 131.287,
    "elevation": 10
  },
  {
    "icao": "WAVV",
    "iata": "WMX",
    "name": "Wamena Airport",
    "city": "Wamena",
    "country": "ID",
    "lat": -4.097324,
    "lon": 138.952417,
    "elevation": 5435
  },
  {
    "icao": "WAWD",
    "iata": "WNI",
    "name": "Matahora Airport",
    "city": "Wangi-wangi Island",
    "country": "ID",
    "lat": -5.293996,
    "lon": 123.634,
    "elevation": 88
  },
  {
    "icao": "WAWP",
    "iata": "KXB",
    "name": "Sangia Nibandera Airport",
    "city": "Kolaka",
    "country": "ID",
    "lat": -4.338158,
    "lon": 121.524047,
    "elevation": 40
  },
  {
    "icao": "WBGB",
    "iata": "BTU",
    "name": "Bintulu Airport",
    "city": "Bintulu",
    "country": "MY",
    "lat": 3.12385010719,
    "lon": 113.019996643,
    "elevation": 74
  },
  {
    "icao": "WBGG",
    "iata": "KCH",
    "name": "Kuching International Airport",
    "city": "Kuching",
    "country": "MY",
    "lat": 1.487364,
    "lon": 110.352859,
    "elevation": 89
  },
  {
    "icao": "WBGJ",
    "iata": "LMN",
    "name": "Limbang Airport",
    "city": "Limbang",
    "country": "MY",
    "lat": 4.808300018310547,
    "lon": 115.01000213623047,
    "elevation": 14
  },
  {
    "icao": "WBGK",
    "iata": "MKM",
    "name": "Mukah Airport",
    "city": "Mukah",
    "country": "MY",
    "lat": 2.881944,
    "lon": 112.043333,
    "elevation": 20
  },
  {
    "icao": "WBGM",
    "iata": "MUR",
    "name": "Marudi Airport",
    "city": "Marudi",
    "country": "MY",
    "lat": 4.178734,
    "lon": 114.330318,
    "elevation": 103
  },
  {
    "icao": "WBGR",
    "iata": "MYY",
    "name": "Miri Airport",
    "city": "Miri",
    "country": "MY",
    "lat": 4.32201,
    "lon": 113.987,
    "elevation": 59
  },
  {
    "icao": "WBGS",
    "iata": "SBW",
    "name": "Sibu Airport",
    "city": "Sibu",
    "country": "MY",
    "lat": 2.2616,
    "lon": 111.985001,
    "elevation": 122
  },
  {
    "icao": "WBGZ",
    "iata": "BBN",
    "name": "Bario Airport",
    "city": "Bario",
    "country": "MY",
    "lat": 3.734648,
    "lon": 115.478548,
    "elevation": 3350
  },
  {
    "icao": "WBKD",
    "iata": "LDU",
    "name": "Lahad Datu Airport",
    "city": "Lahad Datu",
    "country": "MY",
    "lat": 5.03241,
    "lon": 118.32376,
    "elevation": 45
  },
  {
    "icao": "WBKK",
    "iata": "BKI",
    "name": "Kota Kinabalu International Airport",
    "city": "Kota Kinabalu",
    "country": "MY",
    "lat": 5.932743,
    "lon": 116.049324,
    "elevation": 10
  },
  {
    "icao": "WBKL",
    "iata": "LBU",
    "name": "Labuan Airport",
    "city": "Labuan",
    "country": "MY",
    "lat": 5.301667,
    "lon": 115.248333,
    "elevation": 101
  },
  {
    "icao": "WBKS",
    "iata": "SDK",
    "name": "Sandakan Airport",
    "city": "Sandakan",
    "country": "MY",
    "lat": 5.900899887084961,
    "lon": 118.05899810791016,
    "elevation": 46
  },
  {
    "icao": "WBKW",
    "iata": "TWU",
    "name": "Tawau Airport",
    "city": "Tawau",
    "country": "MY",
    "lat": 4.31338,
    "lon": 118.12152,
    "elevation": 57
  },
  {
    "icao": "WBMU",
    "iata": "MZV",
    "name": "Mulu Airport",
    "city": "Mulu",
    "country": "MY",
    "lat": 4.048329830169678,
    "lon": 114.80500030517578,
    "elevation": 80
  },
  {
    "icao": "WBSB",
    "iata": "BWN",
    "name": "Brunei International Airport",
    "city": "Bandar Seri Begawan",
    "country": "BN",
    "lat": 4.9442,
    "lon": 114.928001,
    "elevation": 73
  },
  {
    "icao": "WIBB",
    "iata": "PKU",
    "name": "Sultan Syarif Kasim II International Airport / Roesmin Nurjadin AFB",
    "city": "Pekanbaru",
    "country": "ID",
    "lat": 0.458647,
    "lon": 101.444321,
    "elevation": 102
  },
  {
    "icao": "WIBD",
    "iata": "DUM",
    "name": "Pinang Kampai Airport",
    "city": "Dumai",
    "country": "ID",
    "lat": 1.609114,
    "lon": 101.433492,
    "elevation": 55
  },
  {
    "icao": "WIBJ",
    "iata": "RGT",
    "name": "Japura Airport",
    "city": "Rengat-Sumatra Island",
    "country": "ID",
    "lat": -0.352808,
    "lon": 102.334999,
    "elevation": 62
  },
  {
    "icao": "WICA",
    "iata": "KJT",
    "name": "Kertajati International Airport",
    "city": "Kertajati",
    "country": "ID",
    "lat": -6.647384,
    "lon": 108.165561,
    "elevation": 134
  },
  {
    "icao": "WICC",
    "iata": "BDO",
    "name": "Husein Sastranegara International Airport",
    "city": "Bandung",
    "country": "ID",
    "lat": -6.90063,
    "lon": 107.575996,
    "elevation": 2436
  },
  {
    "icao": "WIDD",
    "iata": "BTH",
    "name": "Hang Nadim International Airport",
    "city": "Batam",
    "country": "ID",
    "lat": 1.12103,
    "lon": 104.119003,
    "elevation": 126
  },
  {
    "icao": "WIHH",
    "iata": "HLP",
    "name": "Halim Perdanakusuma International Airport",
    "city": "Jakarta",
    "country": "ID",
    "lat": -6.266610145568848,
    "lon": 106.89099884033203,
    "elevation": 84
  },
  {
    "icao": "WIII",
    "iata": "CGK",
    "name": "Soekarno-Hatta International Airport",
    "city": "Jakarta",
    "country": "ID",
    "lat": -6.12557,
    "lon": 106.655998,
    "elevation": 34
  },
  {
    "icao": "WILL",
    "iata": "TKG",
    "name": "Radin Inten II International Airport",
    "city": "Bandar Lampung",
    "country": "ID",
    "lat": -5.246803,
    "lon": 105.182531,
    "elevation": 282
  },
  {
    "icao": "WIMB",
    "iata": "GNS",
    "name": "Binaka Airport",
    "city": "Gunungsitoli",
    "country": "ID",
    "lat": 1.16628,
    "lon": 97.704327,
    "elevation": 20
  },
  {
    "icao": "WIME",
    "iata": "AEG",
    "name": "Aek Godang Airport",
    "city": "Padang Sidempuan",
    "country": "ID",
    "lat": 1.4001,
    "lon": 99.430496,
    "elevation": 922
  },
  {
    "icao": "WIMK",
    "iata": "MES",
    "name": "Soewondo Air Force Base",
    "city": "Medan",
    "country": "ID",
    "lat": 3.558425,
    "lon": 98.672275,
    "elevation": 114
  },
  {
    "icao": "WIMM",
    "iata": "KNO",
    "name": "Kualanamu International Airport",
    "city": "Beringin",
    "country": "ID",
    "lat": 3.637847,
    "lon": 98.870566,
    "elevation": 23
  },
  {
    "icao": "WIMS",
    "iata": "FLZ",
    "name": "Dr. Ferdinand Lumban Tobing Airport",
    "city": "Sibolga (Pinangsori)",
    "country": "ID",
    "lat": 1.557127,
    "lon": 98.887145,
    "elevation": 33
  },
  {
    "icao": "WIMU",
    "iata": "LSR",
    "name": "Alas Leuser Airport",
    "city": "Kutacane",
    "country": "ID",
    "lat": 3.391456,
    "lon": 97.863726,
    "elevation": 419
  },
  {
    "icao": "WIOG",
    "iata": "NPO",
    "name": "Nanga Pinoh Airport",
    "city": "Nanga Pinoh-Borneo Island",
    "country": "ID",
    "lat": -0.34864,
    "lon": 111.746155,
    "elevation": 123
  },
  {
    "icao": "WIOK",
    "iata": "KTG",
    "name": "Rahadi Osman Airport",
    "city": "Ketapang",
    "country": "ID",
    "lat": -1.817165,
    "lon": 109.963469,
    "elevation": 46
  },
  {
    "icao": "WIDO",
    "iata": "NTX",
    "name": "Ranai Airport",
    "city": "Ranai-Natuna Besar Island",
    "country": "ID",
    "lat": 3.90871,
    "lon": 108.388,
    "elevation": 7
  },
  {
    "icao": "WIOO",
    "iata": "PNK",
    "name": "Supadio Airport",
    "city": "Pontianak",
    "country": "ID",
    "lat": -0.150711,
    "lon": 109.403999,
    "elevation": 10
  },
  {
    "icao": "WIOP",
    "iata": "PSU",
    "name": "Pangsuma Airport",
    "city": "Putussibau-Borneo Island",
    "country": "ID",
    "lat": 0.834579,
    "lon": 112.940217,
    "elevation": 297
  },
  {
    "icao": "WIOS",
    "iata": "SQG",
    "name": "Tebelian Airport",
    "city": "Sintang",
    "country": "ID",
    "lat": -0.045214,
    "lon": 111.458049,
    "elevation": 97
  },
  {
    "icao": "WIKK",
    "iata": "PGK",
    "name": "Depati Amir Airport",
    "city": "Pangkal Pinang",
    "country": "ID",
    "lat": -2.1622,
    "lon": 106.139,
    "elevation": 109
  },
  {
    "icao": "WIGG",
    "iata": "BKS",
    "name": "Fatmawati Soekarno Airport",
    "city": "Bengkulu",
    "country": "ID",
    "lat": -3.8637,
    "lon": 102.338997,
    "elevation": 50
  },
  {
    "icao": "WIPP",
    "iata": "PLM",
    "name": "Sultan Mahmud Badaruddin II Airport",
    "city": "Palembang",
    "country": "ID",
    "lat": -2.897653,
    "lon": 104.698147,
    "elevation": 49
  },
  {
    "icao": "WIPQ",
    "iata": "PDO",
    "name": "Pendopo Airport",
    "city": "Talang Gudang-Sumatra Island",
    "country": "ID",
    "lat": -3.2860701084136963,
    "lon": 103.87999725341797,
    "elevation": 184
  },
  {
    "icao": "WIEE",
    "iata": "PDG",
    "name": "Minangkabau International Airport",
    "city": "Padang (Katapiang)",
    "country": "ID",
    "lat": -0.786917,
    "lon": 100.280998,
    "elevation": 18
  },
  {
    "icao": "WITC",
    "iata": "MEQ",
    "name": "Cut Nyak Dhien Airport",
    "city": "Kuala Pesisir",
    "country": "ID",
    "lat": 4.040998,
    "lon": 96.253312,
    "elevation": 10
  },
  {
    "icao": "WITK",
    "iata": "TXE",
    "name": "Rembele Airport",
    "city": "Takengon",
    "country": "ID",
    "lat": 4.72113,
    "lon": 96.851943,
    "elevation": 4648
  },
  {
    "icao": "WITL",
    "iata": "LSX",
    "name": "Lhok Sukon Airport",
    "city": "Lhok Sukon-Sumatra Island",
    "country": "ID",
    "lat": 5.06951,
    "lon": 97.259201,
    "elevation": 28
  },
  {
    "icao": "WITT",
    "iata": "BTJ",
    "name": "Sultan Iskandar Muda International Airport",
    "city": "Banda Aceh",
    "country": "ID",
    "lat": 5.525087,
    "lon": 95.41997,
    "elevation": 65
  },
  {
    "icao": "WMBT",
    "iata": "TOD",
    "name": "Tioman Airport",
    "city": "Tioman Island",
    "country": "MY",
    "lat": 2.81818,
    "lon": 104.160004,
    "elevation": 15
  },
  {
    "icao": "WMKA",
    "iata": "AOR",
    "name": "Sultan Abdul Halim Airport",
    "city": "Alor Satar",
    "country": "MY",
    "lat": 6.189670085906982,
    "lon": 100.39800262451172,
    "elevation": 15
  },
  {
    "icao": "WMKB",
    "iata": "BWH",
    "name": "RMAF Butterworth Air Base",
    "city": "Butterworth",
    "country": "MY",
    "lat": 5.46592,
    "lon": 100.390999,
    "elevation": 11
  },
  {
    "icao": "WMKC",
    "iata": "KBR",
    "name": "Sultan Ismail Petra Airport",
    "city": "Kota Baharu",
    "country": "MY",
    "lat": 6.1668500900268555,
    "lon": 102.29299926757812,
    "elevation": 16
  },
  {
    "icao": "WMKD",
    "iata": "KUA",
    "name": "Kuantan Airport",
    "city": "Kuantan",
    "country": "MY",
    "lat": 3.7753899097442627,
    "lon": 103.20899963378906,
    "elevation": 58
  },
  {
    "icao": "WMKE",
    "iata": "KTE",
    "name": "Kerteh Airport",
    "city": "Kerteh",
    "country": "MY",
    "lat": 4.53722,
    "lon": 103.427002,
    "elevation": 18
  },
  {
    "icao": "WMKI",
    "iata": "IPH",
    "name": "Sultan Azlan Shah Airport",
    "city": "Ipoh",
    "country": "MY",
    "lat": 4.567969799041748,
    "lon": 101.09200286865234,
    "elevation": 130
  },
  {
    "icao": "WMKJ",
    "iata": "JHB",
    "name": "Senai International Airport",
    "city": "Johor Bahru",
    "country": "MY",
    "lat": 1.64131,
    "lon": 103.669998,
    "elevation": 135
  },
  {
    "icao": "WMKK",
    "iata": "KUL",
    "name": "Kuala Lumpur International Airport",
    "city": "Sepang",
    "country": "MY",
    "lat": 2.74558,
    "lon": 101.709999,
    "elevation": 69
  },
  {
    "icao": "WMKL",
    "iata": "LGK",
    "name": "Langkawi International Airport",
    "city": "Langkawi",
    "country": "MY",
    "lat": 6.329730033874512,
    "lon": 99.72869873046875,
    "elevation": 29
  },
  {
    "icao": "WMKM",
    "iata": "MKZ",
    "name": "Malacca International Airport",
    "city": "Malacca",
    "country": "MY",
    "lat": 2.265613,
    "lon": 102.252778,
    "elevation": 35
  },
  {
    "icao": "WMKN",
    "iata": "TGG",
    "name": "Sultan Mahmud Airport",
    "city": "Kuala Terengganu",
    "country": "MY",
    "lat": 5.3826398849487305,
    "lon": 103.10299682617188,
    "elevation": 21
  },
  {
    "icao": "WMKP",
    "iata": "PEN",
    "name": "Penang International Airport",
    "city": "Penang",
    "country": "MY",
    "lat": 5.297140121459961,
    "lon": 100.2770004272461,
    "elevation": 11
  },
  {
    "icao": "WMSA",
    "iata": "SZB",
    "name": "Sultan Abdul Aziz Shah International Airport",
    "city": "Subang",
    "country": "MY",
    "lat": 3.130579948425293,
    "lon": 101.54900360107422,
    "elevation": 90
  },
  {
    "icao": "WPDB",
    "iata": "UAI",
    "name": "Suai Airport",
    "city": "Suai",
    "country": "TL",
    "lat": -9.30331039428711,
    "lon": 125.28700256347656,
    "elevation": 96
  },
  {
    "icao": "WPDL",
    "iata": "DIL",
    "name": "Presidente Nicolau Lobato International Airport",
    "city": "Dili",
    "country": "TL",
    "lat": -8.546562,
    "lon": 125.524507,
    "elevation": 154
  },
  {
    "icao": "WPEC",
    "iata": "BCH",
    "name": "Cakung Airport",
    "city": "Baucau",
    "country": "TL",
    "lat": -8.486479,
    "lon": 126.399981,
    "elevation": 1771
  },
  {
    "icao": "WPOC",
    "iata": "OEC",
    "name": "Rota Do Sândalo Oecusse Airport",
    "city": "Oecussi-Ambeno",
    "country": "TL",
    "lat": -9.19806,
    "lon": 124.343002,
    "elevation": 0
  },
  {
    "icao": "WSAP",
    "iata": "QPG",
    "name": "Paya Lebar Air Base",
    "city": "Paya Lebar",
    "country": "SG",
    "lat": 1.36042,
    "lon": 103.910004,
    "elevation": 65
  },
  {
    "icao": "WSAT",
    "iata": "TGA",
    "name": "Tengah Air Base",
    "city": "Western Water Catchment",
    "country": "SG",
    "lat": 1.387561,
    "lon": 103.708291,
    "elevation": 50
  },
  {
    "icao": "WSSL",
    "iata": "XSP",
    "name": "Seletar Airport",
    "city": "Seletar",
    "country": "SG",
    "lat": 1.41555,
    "lon": 103.86673,
    "elevation": 36
  },
  {
    "icao": "WSSS",
    "iata": "SIN",
    "name": "Singapore Changi Airport",
    "city": "Singapore",
    "country": "SG",
    "lat": 1.35019,
    "lon": 103.994003,
    "elevation": 22
  },
  {
    "icao": "YABA",
    "iata": "ALH",
    "name": "Albany Airport",
    "city": "Albany",
    "country": "AU",
    "lat": -34.944519,
    "lon": 117.808896,
    "elevation": 233
  },
  {
    "icao": "YARA",
    "iata": "ARY",
    "name": "Ararat Airport",
    "city": "Ararat",
    "country": "AU",
    "lat": -37.309978,
    "lon": 142.988688,
    "elevation": 1008
  },
  {
    "icao": "YARM",
    "iata": "ARM",
    "name": "Armidale Airport",
    "city": "Armidale",
    "country": "AU",
    "lat": -30.528099060099997,
    "lon": 151.617004395,
    "elevation": 3556
  },
  {
    "icao": "YAYE",
    "iata": "AYQ",
    "name": "Ayers Rock Connellan Airport",
    "city": "Yulara",
    "country": "AU",
    "lat": -25.185913,
    "lon": 130.97703,
    "elevation": 1626
  },
  {
    "icao": "YBAR",
    "iata": "BCI",
    "name": "Barcaldine Airport",
    "city": "Barcaldine",
    "country": "AU",
    "lat": -23.566268,
    "lon": 145.302086,
    "elevation": 878
  },
  {
    "icao": "YBAS",
    "iata": "ASP",
    "name": "Alice Springs Airport",
    "city": "Alice Springs",
    "country": "AU",
    "lat": -23.806588,
    "lon": 133.903427,
    "elevation": 1789
  },
  {
    "icao": "YBBN",
    "iata": "BNE",
    "name": "Brisbane International Airport",
    "city": "Brisbane",
    "country": "AU",
    "lat": -27.384199142456055,
    "lon": 153.11700439453125,
    "elevation": 13
  },
  {
    "icao": "YBCG",
    "iata": "OOL",
    "name": "Gold Coast Airport",
    "city": "Gold Coast",
    "country": "AU",
    "lat": -28.165962,
    "lon": 153.506641,
    "elevation": 21
  },
  {
    "icao": "YBCK",
    "iata": "BKQ",
    "name": "Blackall Airport",
    "city": "Blackall",
    "country": "AU",
    "lat": -24.431678,
    "lon": 145.429716,
    "elevation": 928
  },
  {
    "icao": "YBCS",
    "iata": "CNS",
    "name": "Cairns International Airport",
    "city": "Cairns",
    "country": "AU",
    "lat": -16.878921,
    "lon": 145.74948,
    "elevation": 10
  },
  {
    "icao": "YBCV",
    "iata": "CTL",
    "name": "Charleville Airport",
    "city": "Charleville",
    "country": "AU",
    "lat": -26.4132995605,
    "lon": 146.261993408,
    "elevation": 1003
  },
  {
    "icao": "YBDV",
    "iata": "BVI",
    "name": "Birdsville Airport",
    "city": "",
    "country": "AU",
    "lat": -25.897499084472656,
    "lon": 139.34800720214844,
    "elevation": 159
  },
  {
    "icao": "YBHI",
    "iata": "BHQ",
    "name": "Broken Hill Airport",
    "city": "Broken Hill",
    "country": "AU",
    "lat": -32.0013999939,
    "lon": 141.472000122,
    "elevation": 958
  },
  {
    "icao": "YBHM",
    "iata": "HTI",
    "name": "Hamilton Island Airport",
    "city": "Hamilton Island",
    "country": "AU",
    "lat": -20.3581008911,
    "lon": 148.95199585,
    "elevation": 15
  },
  {
    "icao": "YBIE",
    "iata": "BEU",
    "name": "Bedourie Airport",
    "city": "Bedourie",
    "country": "AU",
    "lat": -24.3461,
    "lon": 139.460007,
    "elevation": 300
  },
  {
    "icao": "YBKE",
    "iata": "BRK",
    "name": "Bourke Airport",
    "city": "",
    "country": "AU",
    "lat": -30.039199829101562,
    "lon": 145.95199584960938,
    "elevation": 352
  },
  {
    "icao": "YBLA",
    "iata": "BLN",
    "name": "Benalla Airport",
    "city": "Benalla",
    "country": "AU",
    "lat": -36.551899,
    "lon": 146.007004,
    "elevation": 569
  },
  {
    "icao": "YBMA",
    "iata": "ISA",
    "name": "Mount Isa Airport",
    "city": "Mount Isa",
    "country": "AU",
    "lat": -20.66638,
    "lon": 139.488468,
    "elevation": 1121
  },
  {
    "icao": "YBMK",
    "iata": "MKY",
    "name": "Mackay Airport",
    "city": "Mackay",
    "country": "AU",
    "lat": -21.170816,
    "lon": 149.182588,
    "elevation": 19
  },
  {
    "icao": "YBNA",
    "iata": "BNK",
    "name": "Ballina Byron Gateway Airport",
    "city": "Ballina",
    "country": "AU",
    "lat": -28.833236,
    "lon": 153.561471,
    "elevation": 7
  },
  {
    "icao": "YBNS",
    "iata": "BSJ",
    "name": "Bairnsdale Airport",
    "city": "Bairnsdale",
    "country": "AU",
    "lat": -37.887539,
    "lon": 147.569379,
    "elevation": 165
  },
  {
    "icao": "YBOK",
    "iata": "OKY",
    "name": "Oakey Army Aviation Centre",
    "city": "",
    "country": "AU",
    "lat": -27.409262,
    "lon": 151.736727,
    "elevation": 1335
  },
  {
    "icao": "YBOU",
    "iata": "BQL",
    "name": "Boulia Airport",
    "city": "",
    "country": "AU",
    "lat": -22.913299560546875,
    "lon": 139.89999389648438,
    "elevation": 542
  },
  {
    "icao": "YBPN",
    "iata": "PPP",
    "name": "Proserpine Whitsunday Coast Airport",
    "city": "Proserpine",
    "country": "AU",
    "lat": -20.494416,
    "lon": 148.553583,
    "elevation": 82
  },
  {
    "icao": "YBRK",
    "iata": "ROK",
    "name": "Rockhampton Airport",
    "city": "Rockhampton",
    "country": "AU",
    "lat": -23.380019,
    "lon": 150.475359,
    "elevation": 34
  },
  {
    "icao": "YBRM",
    "iata": "BME",
    "name": "Broome International Airport",
    "city": "Broome",
    "country": "AU",
    "lat": -17.948789,
    "lon": 122.227407,
    "elevation": 56
  },
  {
    "icao": "YBRN",
    "iata": "BZD",
    "name": "Balranald Airport",
    "city": "",
    "country": "AU",
    "lat": -34.624834,
    "lon": 143.577114,
    "elevation": 210
  },
  {
    "icao": "YBRW",
    "iata": "BWQ",
    "name": "Brewarrina Airport",
    "city": "",
    "country": "AU",
    "lat": -29.975792,
    "lon": 146.81438,
    "elevation": 414
  },
  {
    "icao": "YBSU",
    "iata": "MCY",
    "name": "Sunshine Coast Airport",
    "city": "Maroochydore",
    "country": "AU",
    "lat": -26.593324,
    "lon": 153.08319,
    "elevation": 15
  },
  {
    "icao": "YBTH",
    "iata": "BHS",
    "name": "Bathurst Airport",
    "city": "Bathurst",
    "country": "AU",
    "lat": -33.406817,
    "lon": 149.651161,
    "elevation": 2435
  },
  {
    "icao": "YBTI",
    "iata": "BRT",
    "name": "Bathurst Island Airport",
    "city": "Wurrumiyanga",
    "country": "AU",
    "lat": -11.764966,
    "lon": 130.615774,
    "elevation": 67
  },
  {
    "icao": "YBTL",
    "iata": "TSV",
    "name": "Townsville Airport / RAAF Base Townsville",
    "city": "Townsville",
    "country": "AU",
    "lat": -19.252904,
    "lon": 146.766512,
    "elevation": 18
  },
  {
    "icao": "YBTR",
    "iata": "BLT",
    "name": "Blackwater Airport",
    "city": "",
    "country": "AU",
    "lat": -23.6031,
    "lon": 148.807007,
    "elevation": 657
  },
  {
    "icao": "YBUD",
    "iata": "BDB",
    "name": "Bundaberg Airport",
    "city": "Bundaberg",
    "country": "AU",
    "lat": -24.905039,
    "lon": 152.322612,
    "elevation": 107
  },
  {
    "icao": "YBWP",
    "iata": "WEI",
    "name": "Weipa Airport",
    "city": "Weipa",
    "country": "AU",
    "lat": -12.677493,
    "lon": 141.922618,
    "elevation": 63
  },
  {
    "icao": "YBWW",
    "iata": "WTB",
    "name": "Toowoomba Wellcamp Airport",
    "city": "Toowoomba",
    "country": "AU",
    "lat": -27.558332,
    "lon": 151.793335,
    "elevation": 1509
  },
  {
    "icao": "YCAR",
    "iata": "CVQ",
    "name": "Carnarvon Airport",
    "city": "Carnarvon",
    "country": "AU",
    "lat": -24.880091,
    "lon": 113.670752,
    "elevation": 13
  },
  {
    "icao": "YCBA",
    "iata": "CAZ",
    "name": "Cobar Airport",
    "city": "",
    "country": "AU",
    "lat": -31.538299560546875,
    "lon": 145.79400634765625,
    "elevation": 724
  },
  {
    "icao": "YCBB",
    "iata": "COJ",
    "name": "Coonabarabran Airport",
    "city": "",
    "country": "AU",
    "lat": -31.3325,
    "lon": 149.266998,
    "elevation": 2117
  },
  {
    "icao": "YCBP",
    "iata": "CPD",
    "name": "Coober Pedy Airport",
    "city": "Coober Pedy",
    "country": "AU",
    "lat": -29.038312,
    "lon": 134.722166,
    "elevation": 740
  },
  {
    "icao": "YCCA",
    "iata": "CCL",
    "name": "Chinchilla Airport",
    "city": "Chinchilla",
    "country": "AU",
    "lat": -26.771947,
    "lon": 150.617571,
    "elevation": 1028
  },
  {
    "icao": "YCCY",
    "iata": "CNJ",
    "name": "Cloncurry Airport",
    "city": "Cloncurry",
    "country": "AU",
    "lat": -20.668600082399998,
    "lon": 140.503997803,
    "elevation": 616
  },
  {
    "icao": "YCDU",
    "iata": "CED",
    "name": "Ceduna Airport",
    "city": "",
    "country": "AU",
    "lat": -32.13059997558594,
    "lon": 133.7100067138672,
    "elevation": 77
  },
  {
    "icao": "YCEE",
    "iata": "CVC",
    "name": "Cleve Airport",
    "city": "",
    "country": "AU",
    "lat": -33.709702,
    "lon": 136.505005,
    "elevation": 589
  },
  {
    "icao": "YCFS",
    "iata": "CFS",
    "name": "Coffs Harbour Airport",
    "city": "Coffs Harbour",
    "country": "AU",
    "lat": -30.320601,
    "lon": 153.115997,
    "elevation": 18
  },
  {
    "icao": "YCIN",
    "iata": "DCN",
    "name": "RAAF Base Curtin",
    "city": "Derby",
    "country": "AU",
    "lat": -17.580458,
    "lon": 123.828449,
    "elevation": 300
  },
  {
    "icao": "YCKN",
    "iata": "CTN",
    "name": "Cooktown Airport",
    "city": "",
    "country": "AU",
    "lat": -15.443649,
    "lon": 145.183221,
    "elevation": 26
  },
  {
    "icao": "YCMT",
    "iata": "CMQ",
    "name": "Clermont Airport",
    "city": "",
    "country": "AU",
    "lat": -22.7731,
    "lon": 147.621002,
    "elevation": 908
  },
  {
    "icao": "YCMU",
    "iata": "CMA",
    "name": "Cunnamulla Airport",
    "city": "",
    "country": "AU",
    "lat": -28.030000686645508,
    "lon": 145.6219940185547,
    "elevation": 630
  },
  {
    "icao": "YCNM",
    "iata": "CNB",
    "name": "Coonamble Airport",
    "city": "",
    "country": "AU",
    "lat": -30.980946,
    "lon": 148.377833,
    "elevation": 604
  },
  {
    "icao": "YCOE",
    "iata": "CUQ",
    "name": "Coen Airport",
    "city": "Coen",
    "country": "AU",
    "lat": -13.761133,
    "lon": 143.113311,
    "elevation": 532
  },
  {
    "icao": "YCOM",
    "iata": "OOM",
    "name": "Cooma Snowy Mountains Airport",
    "city": "Cooma",
    "country": "AU",
    "lat": -36.300445,
    "lon": 148.972408,
    "elevation": 3088
  },
  {
    "icao": "YCOR",
    "iata": "CWW",
    "name": "Corowa Airport",
    "city": "",
    "country": "AU",
    "lat": -35.994701,
    "lon": 146.356995,
    "elevation": 469
  },
  {
    "icao": "YCRG",
    "iata": "CYG",
    "name": "Corryong Airport",
    "city": "",
    "country": "AU",
    "lat": -36.18280029296875,
    "lon": 147.88800048828125,
    "elevation": 963
  },
  {
    "icao": "YCTM",
    "iata": "CMD",
    "name": "Cootamundra Airport",
    "city": "",
    "country": "AU",
    "lat": -34.624283,
    "lon": 148.036641,
    "elevation": 1110
  },
  {
    "icao": "YCWR",
    "iata": "CWT",
    "name": "Cowra Airport",
    "city": "",
    "country": "AU",
    "lat": -33.846894,
    "lon": 148.648007,
    "elevation": 966
  },
  {
    "icao": "YDBI",
    "iata": "DRN",
    "name": "Dirranbandi Airport",
    "city": "",
    "country": "AU",
    "lat": -28.587912,
    "lon": 148.217161,
    "elevation": 567
  },
  {
    "icao": "YDBY",
    "iata": "DRB",
    "name": "Derby Airport",
    "city": "Derby",
    "country": "AU",
    "lat": -17.37193,
    "lon": 123.66221,
    "elevation": 24
  },
  {
    "icao": "YDLQ",
    "iata": "DNQ",
    "name": "Deniliquin Airport",
    "city": "Deniliquin",
    "country": "AU",
    "lat": -35.5593986511,
    "lon": 144.945999146,
    "elevation": 316
  },
  {
    "icao": "YDPO",
    "iata": "DPO",
    "name": "Devonport Airport",
    "city": "Devonport",
    "country": "AU",
    "lat": -41.1697006226,
    "lon": 146.429992676,
    "elevation": 33
  },
  {
    "icao": "YDYS",
    "iata": "DYA",
    "name": "Dysart Airport",
    "city": "",
    "country": "AU",
    "lat": -22.6222,
    "lon": 148.363998,
    "elevation": 670
  },
  {
    "icao": "YECH",
    "iata": "ECH",
    "name": "Echuca Airport",
    "city": "",
    "country": "AU",
    "lat": -36.15719985961914,
    "lon": 144.76199340820312,
    "elevation": 323
  },
  {
    "icao": "YELD",
    "iata": "ELC",
    "name": "Elcho Island Airport",
    "city": "Elcho Island",
    "country": "AU",
    "lat": -12.019399642899998,
    "lon": 135.570999146,
    "elevation": 101
  },
  {
    "icao": "YEML",
    "iata": "EMD",
    "name": "Emerald Airport",
    "city": "Emerald",
    "country": "AU",
    "lat": -23.5674991608,
    "lon": 148.179000854,
    "elevation": 624
  },
  {
    "icao": "YESP",
    "iata": "EPR",
    "name": "Esperance Airport",
    "city": "Esperance",
    "country": "AU",
    "lat": -33.684399,
    "lon": 121.822998,
    "elevation": 470
  },
  {
    "icao": "YEWA",
    "iata": "WHB",
    "name": "Eliwana",
    "city": "",
    "country": "AU",
    "lat": -22.428395,
    "lon": 116.887879,
    "elevation": 1576
  },
  {
    "icao": "YFBS",
    "iata": "FRB",
    "name": "Forbes Airport",
    "city": "Forbes",
    "country": "AU",
    "lat": -33.363602,
    "lon": 147.934998,
    "elevation": 760
  },
  {
    "icao": "YFRT",
    "iata": "FOS",
    "name": "Forrest Airport",
    "city": "",
    "country": "AU",
    "lat": -30.83662,
    "lon": 128.112811,
    "elevation": 511
  },
  {
    "icao": "YFTZ",
    "iata": "FIZ",
    "name": "Fitzroy Crossing Airport",
    "city": "",
    "country": "AU",
    "lat": -18.183596,
    "lon": 125.559783,
    "elevation": 368
  },
  {
    "icao": "YGDH",
    "iata": "GUH",
    "name": "Gunnedah Airport",
    "city": "",
    "country": "AU",
    "lat": -30.957511,
    "lon": 150.248981,
    "elevation": 863
  },
  {
    "icao": "YGEL",
    "iata": "GET",
    "name": "Geraldton Airport",
    "city": "Moonyoonooka",
    "country": "AU",
    "lat": -28.796101,
    "lon": 114.707001,
    "elevation": 121
  },
  {
    "icao": "YGFN",
    "iata": "GFN",
    "name": "Clarence Valley Regional Airport",
    "city": "Grafton",
    "country": "AU",
    "lat": -29.754795,
    "lon": 153.031234,
    "elevation": 110
  },
  {
    "icao": "YGLA",
    "iata": "GLT",
    "name": "Gladstone Airport",
    "city": "Gladstone",
    "country": "AU",
    "lat": -23.869763,
    "lon": 151.225439,
    "elevation": 64
  },
  {
    "icao": "YGLB",
    "iata": "GUL",
    "name": "Goulburn Airport",
    "city": "",
    "country": "AU",
    "lat": -34.810298919677734,
    "lon": 149.7259979248047,
    "elevation": 2141
  },
  {
    "icao": "YGLI",
    "iata": "GLI",
    "name": "Glen Innes Airport",
    "city": "Glen Innes",
    "country": "AU",
    "lat": -29.676029,
    "lon": 151.691156,
    "elevation": 3433
  },
  {
    "icao": "YGPT",
    "iata": "GPN",
    "name": "Garden Point Airport",
    "city": "Pirlangimpi",
    "country": "AU",
    "lat": -11.399686,
    "lon": 130.425568,
    "elevation": 90
  },
  {
    "icao": "YGTE",
    "iata": "GTE",
    "name": "Groote Eylandt Airport",
    "city": "Groote Eylandt",
    "country": "AU",
    "lat": -13.972405,
    "lon": 136.458553,
    "elevation": 53
  },
  {
    "icao": "YGTH",
    "iata": "GFF",
    "name": "Griffith Airport",
    "city": "Griffith",
    "country": "AU",
    "lat": -34.2508010864,
    "lon": 146.067001343,
    "elevation": 439
  },
  {
    "icao": "YHAY",
    "iata": "HXX",
    "name": "Hay Airport",
    "city": "",
    "country": "AU",
    "lat": -34.531399,
    "lon": 144.830002,
    "elevation": 305
  },
  {
    "icao": "YHBA",
    "iata": "HVB",
    "name": "Hervey Bay Airport",
    "city": "Hervey Bay",
    "country": "AU",
    "lat": -25.320127,
    "lon": 152.880662,
    "elevation": 60
  },
  {
    "icao": "YHID",
    "iata": "HID",
    "name": "Horn Island Airport",
    "city": "Horn",
    "country": "AU",
    "lat": -10.585628,
    "lon": 142.292653,
    "elevation": 43
  },
  {
    "icao": "YHLC",
    "iata": "HCQ",
    "name": "Halls Creek Airport",
    "city": "",
    "country": "AU",
    "lat": -18.2339,
    "lon": 127.669998,
    "elevation": 1346
  },
  {
    "icao": "YHML",
    "iata": "HLT",
    "name": "Hamilton Airport",
    "city": "",
    "country": "AU",
    "lat": -37.64889907836914,
    "lon": 142.06500244140625,
    "elevation": 803
  },
  {
    "icao": "YHOT",
    "iata": "MHU",
    "name": "Mount Hotham Airport",
    "city": "Mount Hotham",
    "country": "AU",
    "lat": -37.0475006104,
    "lon": 147.333999634,
    "elevation": 4260
  },
  {
    "icao": "YHPN",
    "iata": "HTU",
    "name": "Hopetoun Airport",
    "city": "",
    "country": "AU",
    "lat": -35.715302,
    "lon": 142.360001,
    "elevation": 256
  },
  {
    "icao": "YHSM",
    "iata": "HSM",
    "name": "Horsham Airport",
    "city": "",
    "country": "AU",
    "lat": -36.669700622558594,
    "lon": 142.17300415039062,
    "elevation": 445
  },
  {
    "icao": "YIVL",
    "iata": "IVR",
    "name": "Inverell Airport",
    "city": "Inverell",
    "country": "AU",
    "lat": -29.888299942,
    "lon": 151.143997192,
    "elevation": 2667
  },
  {
    "icao": "YKER",
    "iata": "KRA",
    "name": "Kerang Airport",
    "city": "",
    "country": "AU",
    "lat": -35.751399993896484,
    "lon": 143.93899536132812,
    "elevation": 254
  },
  {
    "icao": "YKII",
    "iata": "KNS",
    "name": "King Island Airport",
    "city": "",
    "country": "AU",
    "lat": -39.877498626708984,
    "lon": 143.8780059814453,
    "elevation": 132
  },
  {
    "icao": "YKMP",
    "iata": "KPS",
    "name": "Kempsey Airport",
    "city": "",
    "country": "AU",
    "lat": -31.07232,
    "lon": 152.765313,
    "elevation": 54
  },
  {
    "icao": "YKOW",
    "iata": "KWM",
    "name": "Kowanyama Airport",
    "city": "Kowanyama",
    "country": "AU",
    "lat": -15.485369,
    "lon": 141.752572,
    "elevation": 35
  },
  {
    "icao": "YKRY",
    "iata": "KGY",
    "name": "Kingaroy Airport",
    "city": "",
    "country": "AU",
    "lat": -26.581077,
    "lon": 151.839927,
    "elevation": 1492
  },
  {
    "icao": "YKSC",
    "iata": "KGC",
    "name": "Kingscote Airport",
    "city": "",
    "country": "AU",
    "lat": -35.71390151977539,
    "lon": 137.52099609375,
    "elevation": 24
  },
  {
    "icao": "YLEC",
    "iata": "LGH",
    "name": "Leigh Creek Airport",
    "city": "",
    "country": "AU",
    "lat": -30.598301,
    "lon": 138.425995,
    "elevation": 856
  },
  {
    "icao": "YLEO",
    "iata": "LNO",
    "name": "Leonora Airport",
    "city": "Leonora",
    "country": "AU",
    "lat": -28.87809944152832,
    "lon": 121.31500244140625,
    "elevation": 1217
  },
  {
    "icao": "YLHR",
    "iata": "IRG",
    "name": "Lockhart River Airport",
    "city": "Lockhart River",
    "country": "AU",
    "lat": -12.7869,
    "lon": 143.304993,
    "elevation": 77
  },
  {
    "icao": "YLIS",
    "iata": "LSY",
    "name": "Lismore Airport",
    "city": "Lismore",
    "country": "AU",
    "lat": -28.830689,
    "lon": 153.258419,
    "elevation": 35
  },
  {
    "icao": "YLRD",
    "iata": "LHG",
    "name": "Lightning Ridge Airport",
    "city": "",
    "country": "AU",
    "lat": -29.452857,
    "lon": 147.977146,
    "elevation": 540
  },
  {
    "icao": "YLRE",
    "iata": "LRE",
    "name": "Longreach Airport",
    "city": "Longreach",
    "country": "AU",
    "lat": -23.4342,
    "lon": 144.279999,
    "elevation": 627
  },
  {
    "icao": "YLST",
    "iata": "LER",
    "name": "Leinster Airport",
    "city": "",
    "country": "AU",
    "lat": -27.843299865722656,
    "lon": 120.7030029296875,
    "elevation": 1631
  },
  {
    "icao": "YLTV",
    "iata": "TGN",
    "name": "Latrobe Valley Airport",
    "city": "Morwell",
    "country": "AU",
    "lat": -38.211004,
    "lon": 146.470817,
    "elevation": 180
  },
  {
    "icao": "YMAV",
    "iata": "AVV",
    "name": "Avalon Airport",
    "city": "Lara",
    "country": "AU",
    "lat": -38.039398,
    "lon": 144.468994,
    "elevation": 35
  },
  {
    "icao": "YMAY",
    "iata": "ABX",
    "name": "Albury Airport",
    "city": "East Albury",
    "country": "AU",
    "lat": -36.066758,
    "lon": 146.959148,
    "elevation": 539
  },
  {
    "icao": "YMBA",
    "iata": "MRG",
    "name": "Mareeba Airport",
    "city": "Mareeba",
    "country": "AU",
    "lat": -17.070277,
    "lon": 145.424228,
    "elevation": 1560
  },
  {
    "icao": "YMDG",
    "iata": "DGE",
    "name": "Mudgee Airport",
    "city": "Mudgee",
    "country": "AU",
    "lat": -32.564794,
    "lon": 149.609452,
    "elevation": 1545
  },
  {
    "icao": "YMEK",
    "iata": "MKR",
    "name": "Meekatharra Airport",
    "city": "",
    "country": "AU",
    "lat": -26.6117000579834,
    "lon": 118.5479965209961,
    "elevation": 1713
  },
  {
    "icao": "YMEN",
    "iata": "MEB",
    "name": "Melbourne Essendon Airport",
    "city": "Essendon Fields",
    "country": "AU",
    "lat": -37.7281,
    "lon": 144.901993,
    "elevation": 282
  },
  {
    "icao": "YMER",
    "iata": "MIM",
    "name": "Merimbula Airport",
    "city": "Merimbula",
    "country": "AU",
    "lat": -36.9085998535,
    "lon": 149.901000977,
    "elevation": 7
  },
  {
    "icao": "YMGD",
    "iata": "MNG",
    "name": "Maningrida Airport",
    "city": "Maningrida",
    "country": "AU",
    "lat": -12.0560998917,
    "lon": 134.23399353,
    "elevation": 123
  },
  {
    "icao": "YMHB",
    "iata": "HBA",
    "name": "Hobart International Airport",
    "city": "Hobart (Cambridge)",
    "country": "AU",
    "lat": -42.8371,
    "lon": 147.51295,
    "elevation": 13
  },
  {
    "icao": "YMIA",
    "iata": "MQL",
    "name": "Mildura Airport",
    "city": "Mildura",
    "country": "AU",
    "lat": -34.229198455799995,
    "lon": 142.085998535,
    "elevation": 167
  },
  {
    "icao": "YMLT",
    "iata": "LST",
    "name": "Launceston Airport",
    "city": "Launceston (Western Junction)",
    "country": "AU",
    "lat": -41.544935,
    "lon": 147.210785,
    "elevation": 562
  },
  {
    "icao": "YMMB",
    "iata": "MBW",
    "name": "Melbourne Moorabbin Airport",
    "city": "Melbourne",
    "country": "AU",
    "lat": -37.975799560546875,
    "lon": 145.1020050048828,
    "elevation": 50
  },
  {
    "icao": "YMML",
    "iata": "MEL",
    "name": "Melbourne Airport",
    "city": "Melbourne",
    "country": "AU",
    "lat": -37.661548,
    "lon": 144.836432,
    "elevation": 434
  },
  {
    "icao": "YMNE",
    "iata": "WME",
    "name": "Mount Keith Airport",
    "city": "",
    "country": "AU",
    "lat": -27.28733,
    "lon": 120.554937,
    "elevation": 1792
  },
  {
    "icao": "YMOG",
    "iata": "MMG",
    "name": "Mount Magnet Airport",
    "city": "",
    "country": "AU",
    "lat": -28.116100311279297,
    "lon": 117.84200286865234,
    "elevation": 1354
  },
  {
    "icao": "YMOR",
    "iata": "MRZ",
    "name": "Moree Airport",
    "city": "Moree",
    "country": "AU",
    "lat": -29.498899459799997,
    "lon": 149.845001221,
    "elevation": 701
  },
  {
    "icao": "YMRB",
    "iata": "MOV",
    "name": "Moranbah Airport",
    "city": "Moranbah",
    "country": "AU",
    "lat": -22.057800293,
    "lon": 148.07699585,
    "elevation": 770
  },
  {
    "icao": "YMRY",
    "iata": "MYA",
    "name": "Moruya Airport",
    "city": "Moruya",
    "country": "AU",
    "lat": -35.8978004456,
    "lon": 150.143997192,
    "elevation": 14
  },
  {
    "icao": "YMTG",
    "iata": "MGB",
    "name": "Mount Gambier Airport",
    "city": "Mount Gambier",
    "country": "AU",
    "lat": -37.744382,
    "lon": 140.780561,
    "elevation": 0
  },
  {
    "icao": "YNAR",
    "iata": "NRA",
    "name": "Narrandera Airport",
    "city": "Narrandera",
    "country": "AU",
    "lat": -34.7022018433,
    "lon": 146.511993408,
    "elevation": 474
  },
  {
    "icao": "YNBR",
    "iata": "NAA",
    "name": "Narrabri Airport",
    "city": "Narrabri",
    "country": "AU",
    "lat": -30.3192005157,
    "lon": 149.82699585,
    "elevation": 788
  },
  {
    "icao": "YNGU",
    "iata": "RPM",
    "name": "Ngukurr Airport",
    "city": "",
    "country": "AU",
    "lat": -14.7228,
    "lon": 134.746994,
    "elevation": 45
  },
  {
    "icao": "YNRM",
    "iata": "QRM",
    "name": "Narromine Airport",
    "city": "",
    "country": "AU",
    "lat": -32.214699,
    "lon": 148.225006,
    "elevation": 782
  },
  {
    "icao": "YNTN",
    "iata": "NTN",
    "name": "Normanton Airport",
    "city": "Normanton",
    "country": "AU",
    "lat": -17.68409,
    "lon": 141.069664,
    "elevation": 73
  },
  {
    "icao": "YNWN",
    "iata": "ZNE",
    "name": "Newman Airport",
    "city": "Newman",
    "country": "AU",
    "lat": -23.417800903299998,
    "lon": 119.803001404,
    "elevation": 1724
  },
  {
    "icao": "YORG",
    "iata": "OAG",
    "name": "Orange Airport",
    "city": "Orange",
    "country": "AU",
    "lat": -33.382014,
    "lon": 149.131262,
    "elevation": 3115
  },
  {
    "icao": "YPAD",
    "iata": "ADL",
    "name": "Adelaide International Airport",
    "city": "Adelaide",
    "country": "AU",
    "lat": -34.947512,
    "lon": 138.533393,
    "elevation": 20
  },
  {
    "icao": "YPAG",
    "iata": "PUG",
    "name": "Port Augusta Airport",
    "city": "",
    "country": "AU",
    "lat": -32.506900787353516,
    "lon": 137.7169952392578,
    "elevation": 56
  },
  {
    "icao": "YPBO",
    "iata": "PBO",
    "name": "Paraburdoo Airport",
    "city": "Paraburdoo",
    "country": "AU",
    "lat": -23.1711006165,
    "lon": 117.745002747,
    "elevation": 1406
  },
  {
    "icao": "YPCC",
    "iata": "CCK",
    "name": "Cocos (Keeling) Islands Airport",
    "city": "West Island",
    "country": "CC",
    "lat": -12.19134,
    "lon": 96.833696,
    "elevation": 10
  },
  {
    "icao": "YPDN",
    "iata": "DRW",
    "name": "Darwin International Airport / RAAF Darwin",
    "city": "Darwin",
    "country": "AU",
    "lat": -12.41497,
    "lon": 130.88185,
    "elevation": 103
  },
  {
    "icao": "YPGV",
    "iata": "GOV",
    "name": "Gove Airport",
    "city": "Nhulunbuy",
    "country": "AU",
    "lat": -12.269399642899998,
    "lon": 136.817993164,
    "elevation": 192
  },
  {
    "icao": "YPIR",
    "iata": "PPI",
    "name": "Port Pirie Airport",
    "city": "",
    "country": "AU",
    "lat": -33.238899,
    "lon": 137.994995,
    "elevation": 40
  },
  {
    "icao": "YPJT",
    "iata": "JAD",
    "name": "Perth Jandakot Airport",
    "city": "Perth",
    "country": "AU",
    "lat": -32.09749984741211,
    "lon": 115.88099670410156,
    "elevation": 99
  },
  {
    "icao": "YPKA",
    "iata": "KTA",
    "name": "Karratha Airport",
    "city": "Karratha",
    "country": "AU",
    "lat": -20.712200164799995,
    "lon": 116.773002625,
    "elevation": 29
  },
  {
    "icao": "YPKG",
    "iata": "KGI",
    "name": "Kalgoorlie Boulder Airport",
    "city": "Broadwood",
    "country": "AU",
    "lat": -30.791543,
    "lon": 121.464586,
    "elevation": 1203
  },
  {
    "icao": "YPKS",
    "iata": "PKE",
    "name": "Parkes Airport",
    "city": "Parkes",
    "country": "AU",
    "lat": -33.131401062,
    "lon": 148.238998413,
    "elevation": 1069
  },
  {
    "icao": "YPKT",
    "iata": "PKT",
    "name": "Port Keats Airport",
    "city": "Wadeye",
    "country": "AU",
    "lat": -14.249701,
    "lon": 129.529538,
    "elevation": 91
  },
  {
    "icao": "YPKU",
    "iata": "KNX",
    "name": "East Kimberley Regional (Kununurra) Airport",
    "city": "Kununurra",
    "country": "AU",
    "lat": -15.7781,
    "lon": 128.707993,
    "elevation": 145
  },
  {
    "icao": "YPLC",
    "iata": "PLO",
    "name": "Port Lincoln Airport",
    "city": "Port Lincoln",
    "country": "AU",
    "lat": -34.6053009033,
    "lon": 135.880004883,
    "elevation": 36
  },
  {
    "icao": "YPLM",
    "iata": "LEA",
    "name": "Learmonth Airport",
    "city": "Exmouth",
    "country": "AU",
    "lat": -22.235201,
    "lon": 114.090024,
    "elevation": 19
  },
  {
    "icao": "YPMQ",
    "iata": "PQQ",
    "name": "Port Macquarie Airport",
    "city": "Port Macquarie",
    "country": "AU",
    "lat": -31.4358005524,
    "lon": 152.863006592,
    "elevation": 12
  },
  {
    "icao": "YPOD",
    "iata": "PTJ",
    "name": "Portland Airport",
    "city": "",
    "country": "AU",
    "lat": -38.31809997558594,
    "lon": 141.4709930419922,
    "elevation": 265
  },
  {
    "icao": "YPPD",
    "iata": "PHE",
    "name": "Port Hedland International Airport",
    "city": "Port Hedland",
    "country": "AU",
    "lat": -20.3777999878,
    "lon": 118.625999451,
    "elevation": 33
  },
  {
    "icao": "YPPH",
    "iata": "PER",
    "name": "Perth International Airport",
    "city": "Perth",
    "country": "AU",
    "lat": -31.94029998779297,
    "lon": 115.96700286865234,
    "elevation": 67
  },
  {
    "icao": "YPTN",
    "iata": "KTR",
    "name": "Tindal Airport",
    "city": "",
    "country": "AU",
    "lat": -14.521100044250488,
    "lon": 132.3780059814453,
    "elevation": 443
  },
  {
    "icao": "YPXM",
    "iata": "XCH",
    "name": "Christmas Island Airport",
    "city": "Flying Fish Cove",
    "country": "CX",
    "lat": -10.449382,
    "lon": 105.690931,
    "elevation": 916
  },
  {
    "icao": "YQLP",
    "iata": "ULP",
    "name": "Quilpie Airport",
    "city": "",
    "country": "AU",
    "lat": -26.609176,
    "lon": 144.253746,
    "elevation": 655
  },
  {
    "icao": "YREN",
    "iata": "RMK",
    "name": "Renmark Airport",
    "city": "",
    "country": "AU",
    "lat": -34.1964,
    "lon": 140.673996,
    "elevation": 115
  },
  {
    "icao": "YROM",
    "iata": "RMA",
    "name": "Roma Airport",
    "city": "Roma",
    "country": "AU",
    "lat": -26.545000076300003,
    "lon": 148.774993896,
    "elevation": 1032
  },
  {
    "icao": "YSBK",
    "iata": "BWU",
    "name": "Sydney Bankstown Airport",
    "city": "Sydney",
    "country": "AU",
    "lat": -33.923618,
    "lon": 150.990792,
    "elevation": 29
  },
  {
    "icao": "YSCB",
    "iata": "CBR",
    "name": "Canberra Airport",
    "city": "Canberra",
    "country": "AU",
    "lat": -35.3069,
    "lon": 149.195007,
    "elevation": 1886
  },
  {
    "icao": "YSCN",
    "iata": "CDU",
    "name": "Camden Airport",
    "city": "Cobbitty",
    "country": "AU",
    "lat": -34.038338,
    "lon": 150.686406,
    "elevation": 230
  },
  {
    "icao": "YSDU",
    "iata": "DBO",
    "name": "Dubbo City Regional Airport",
    "city": "Dubbo",
    "country": "AU",
    "lat": -32.2167015076,
    "lon": 148.574996948,
    "elevation": 935
  },
  {
    "icao": "YSHK",
    "iata": "MJK",
    "name": "Shark Bay Airport",
    "city": "Denham",
    "country": "AU",
    "lat": -25.897294,
    "lon": 113.575802,
    "elevation": 111
  },
  {
    "icao": "YSHL",
    "iata": "WOL",
    "name": "Shellharbour Airport",
    "city": "Albion Park Rail",
    "country": "AU",
    "lat": -34.5611,
    "lon": 150.789001,
    "elevation": 31
  },
  {
    "icao": "YSHT",
    "iata": "SHT",
    "name": "Shepparton Airport",
    "city": "",
    "country": "AU",
    "lat": -36.428341,
    "lon": 145.391473,
    "elevation": 374
  },
  {
    "icao": "YSMI",
    "iata": "SIO",
    "name": "Smithton Airport",
    "city": "",
    "country": "AU",
    "lat": -40.834999084472656,
    "lon": 145.08399963378906,
    "elevation": 31
  },
  {
    "icao": "YSNK",
    "iata": "SNB",
    "name": "Snake Bay Airport",
    "city": "Milikapiti",
    "country": "AU",
    "lat": -11.417674,
    "lon": 130.648481,
    "elevation": 173
  },
  {
    "icao": "YSNF",
    "iata": "NLK",
    "name": "Norfolk Island International Airport",
    "city": "Burnt Pine",
    "country": "NF",
    "lat": -29.041887,
    "lon": 167.939616,
    "elevation": 371
  },
  {
    "icao": "YSNW",
    "iata": "NOA",
    "name": "Naval Air Station Nowra - HMAS Albatross",
    "city": "Nowra Hill",
    "country": "AU",
    "lat": -34.9466,
    "lon": 150.542451,
    "elevation": 400
  },
  {
    "icao": "YSRI",
    "iata": "XRH",
    "name": "RAAF Base Richmond",
    "city": "Richmond",
    "country": "AU",
    "lat": -33.604652,
    "lon": 150.783051,
    "elevation": 67
  },
  {
    "icao": "YSSY",
    "iata": "SYD",
    "name": "Sydney Kingsford Smith International Airport",
    "city": "Sydney (Mascot)",
    "country": "AU",
    "lat": -33.946098,
    "lon": 151.177002,
    "elevation": 21
  },
  {
    "icao": "YSTW",
    "iata": "TMW",
    "name": "Tamworth Airport",
    "city": "Tamworth",
    "country": "AU",
    "lat": -31.077898,
    "lon": 150.845484,
    "elevation": 1334
  },
  {
    "icao": "YSWG",
    "iata": "WGA",
    "name": "Wagga Wagga Airport",
    "city": "Forest Hill",
    "country": "AU",
    "lat": -35.163484,
    "lon": 147.46832,
    "elevation": 724
  },
  {
    "icao": "YSWH",
    "iata": "SWH",
    "name": "Swan Hill Airport",
    "city": "",
    "country": "AU",
    "lat": -35.37580108642578,
    "lon": 143.5330047607422,
    "elevation": 234
  },
  {
    "icao": "YSWL",
    "iata": "SWC",
    "name": "Stawell Airport",
    "city": "",
    "country": "AU",
    "lat": -37.07170104980469,
    "lon": 142.74099731445312,
    "elevation": 807
  },
  {
    "icao": "YTEF",
    "iata": "TEF",
    "name": "Telfer Airport",
    "city": "",
    "country": "AU",
    "lat": -21.715,
    "lon": 122.228996,
    "elevation": 970
  },
  {
    "icao": "YTEM",
    "iata": "TEM",
    "name": "Temora Airport",
    "city": "Temora",
    "country": "AU",
    "lat": -34.421398,
    "lon": 147.511993,
    "elevation": 921
  },
  {
    "icao": "YTGM",
    "iata": "XTG",
    "name": "Thargomindah Airport",
    "city": "Thargomindah",
    "country": "AU",
    "lat": -27.986368,
    "lon": 143.812065,
    "elevation": 433
  },
  {
    "icao": "YTIB",
    "iata": "TYB",
    "name": "Tibooburra Airport",
    "city": "",
    "country": "AU",
    "lat": -29.451099,
    "lon": 142.057999,
    "elevation": 584
  },
  {
    "icao": "YTMU",
    "iata": "TUM",
    "name": "Tumut Aerodrome",
    "city": "Tumut",
    "country": "AU",
    "lat": -35.26832,
    "lon": 148.240526,
    "elevation": 878
  },
  {
    "icao": "YTNG",
    "iata": "THG",
    "name": "Thangool Airport",
    "city": "Biloela",
    "country": "AU",
    "lat": -24.494863,
    "lon": 150.577967,
    "elevation": 644
  },
  {
    "icao": "YTNK",
    "iata": "TCA",
    "name": "Tennant Creek Airport",
    "city": "Tennant Creek",
    "country": "AU",
    "lat": -19.6343994140625,
    "lon": 134.18299865722656,
    "elevation": 1236
  },
  {
    "icao": "YTRE",
    "iata": "TRO",
    "name": "Taree Airport",
    "city": "Taree",
    "country": "AU",
    "lat": -31.888599,
    "lon": 152.514008,
    "elevation": 38
  },
  {
    "icao": "YWDH",
    "iata": "WNR",
    "name": "Windorah Airport",
    "city": "Windorah",
    "country": "AU",
    "lat": -25.410641,
    "lon": 142.668428,
    "elevation": 452
  },
  {
    "icao": "YWGT",
    "iata": "WGT",
    "name": "Wangaratta Airport",
    "city": "Laceby",
    "country": "AU",
    "lat": -36.417914,
    "lon": 146.306896,
    "elevation": 504
  },
  {
    "icao": "YWHA",
    "iata": "WYA",
    "name": "Whyalla Airport",
    "city": "Whyalla",
    "country": "AU",
    "lat": -33.05889892578125,
    "lon": 137.51400756835938,
    "elevation": 41
  },
  {
    "icao": "YWKB",
    "iata": "WKB",
    "name": "Warracknabeal Airport",
    "city": "",
    "country": "AU",
    "lat": -36.32109832763672,
    "lon": 142.41900634765625,
    "elevation": 397
  },
  {
    "icao": "YWLG",
    "iata": "WGE",
    "name": "Walgett Airport",
    "city": "",
    "country": "AU",
    "lat": -30.032801,
    "lon": 148.126007,
    "elevation": 439
  },
  {
    "icao": "YWLM",
    "iata": "NTL",
    "name": "Newcastle Airport",
    "city": "Williamtown",
    "country": "AU",
    "lat": -32.79499816894531,
    "lon": 151.83399963378906,
    "elevation": 31
  },
  {
    "icao": "YWLU",
    "iata": "WUN",
    "name": "Wiluna Airport",
    "city": "",
    "country": "AU",
    "lat": -26.629199981689453,
    "lon": 120.22100067138672,
    "elevation": 1649
  },
  {
    "icao": "YWSL",
    "iata": "SXE",
    "name": "West Sale Airport",
    "city": "Sale",
    "country": "AU",
    "lat": -38.090827,
    "lon": 146.965335,
    "elevation": 72
  },
  {
    "icao": "YWTN",
    "iata": "WIN",
    "name": "Winton Airport",
    "city": "",
    "country": "AU",
    "lat": -22.36359977722168,
    "lon": 143.08599853515625,
    "elevation": 638
  },
  {
    "icao": "YWWL",
    "iata": "WWY",
    "name": "West Wyalong Airport",
    "city": "West Wyalong",
    "country": "AU",
    "lat": -33.9371986389,
    "lon": 147.190994263,
    "elevation": 859
  },
  {
    "icao": "YWYY",
    "iata": "BWT",
    "name": "Wynyard Airport",
    "city": "Burnie",
    "country": "AU",
    "lat": -40.997039,
    "lon": 145.726,
    "elevation": 62
  },
  {
    "icao": "YYNG",
    "iata": "NGA",
    "name": "Young Airport",
    "city": "",
    "country": "AU",
    "lat": -34.255576,
    "lon": 148.247118,
    "elevation": 1267
  },
  {
    "icao": "ZBAA",
    "iata": "PEK",
    "name": "Beijing Capital International Airport",
    "city": "Beijing",
    "country": "CN",
    "lat": 40.080101013183594,
    "lon": 116.58499908447266,
    "elevation": 116
  },
  {
    "icao": "ZBAD",
    "iata": "PKX",
    "name": "Beijing Daxing International Airport",
    "city": "Beijing",
    "country": "CN",
    "lat": 39.509945,
    "lon": 116.41092,
    "elevation": 98
  },
  {
    "icao": "ZBCD",
    "iata": "CDE",
    "name": "Chengde Puning Airport",
    "city": "Chengde",
    "country": "CN",
    "lat": 41.1225,
    "lon": 118.073889,
    "elevation": 0
  },
  {
    "icao": "ZBCF",
    "iata": "CIF",
    "name": "Chifeng Yulong Airport",
    "city": "Chifeng",
    "country": "CN",
    "lat": 42.159723,
    "lon": 118.840971,
    "elevation": 2018
  },
  {
    "icao": "ZBDH",
    "iata": "BPE",
    "name": "Qinhuangdao Beidaihe Airport",
    "city": "Qinhuangdao (Changli)",
    "country": "CN",
    "lat": 39.666384,
    "lon": 119.061384,
    "elevation": 46
  },
  {
    "icao": "ZBDS",
    "iata": "DSN",
    "name": "Ordos Ejin Horo Airport",
    "city": "Ordos",
    "country": "CN",
    "lat": 39.493514,
    "lon": 109.8599,
    "elevation": 4557
  },
  {
    "icao": "ZBER",
    "iata": "ERL",
    "name": "Erenhot Saiwusu International Airport",
    "city": "Erenhot",
    "country": "CN",
    "lat": 43.4225,
    "lon": 112.096667,
    "elevation": 3301
  },
  {
    "icao": "ZBES",
    "iata": "YIE",
    "name": "Arxan Yi'ershi Airport",
    "city": "Arxan",
    "country": "CN",
    "lat": 47.3106,
    "lon": 119.9117,
    "elevation": 2925
  },
  {
    "icao": "ZBHD",
    "iata": "HDG",
    "name": "Handan Airport",
    "city": "Handan",
    "country": "CN",
    "lat": 36.525833,
    "lon": 114.425556,
    "elevation": 229
  },
  {
    "icao": "ZBHH",
    "iata": "HET",
    "name": "Hohhot Baita International Airport",
    "city": "Hohhot",
    "country": "CN",
    "lat": 40.849658,
    "lon": 111.824598,
    "elevation": 3556
  },
  {
    "icao": "ZBHZ",
    "iata": "HUO",
    "name": "Holingol Huolinhe Airport",
    "city": "Holingol",
    "country": "CN",
    "lat": 45.487222,
    "lon": 119.407222,
    "elevation": 0
  },
  {
    "icao": "ZBLA",
    "iata": "HLD",
    "name": "Hulunbuir Hailar Airport",
    "city": "Hailar",
    "country": "CN",
    "lat": 49.205002,
    "lon": 119.824997,
    "elevation": 2169
  },
  {
    "icao": "ZBLF",
    "iata": "LFQ",
    "name": "Linfen Yaodu Airport",
    "city": "Linfen (Yaodu)",
    "country": "CN",
    "lat": 36.132629,
    "lon": 111.641236,
    "elevation": 1483
  },
  {
    "icao": "ZBLL",
    "iata": "LLV",
    "name": "Lüliang Dawu Airport",
    "city": "Lüliang",
    "country": "CN",
    "lat": 37.683333,
    "lon": 111.142778,
    "elevation": 0
  },
  {
    "icao": "ZBMZ",
    "iata": "NZH",
    "name": "Manzhouli Xijiao Airport",
    "city": "Manzhouli",
    "country": "CN",
    "lat": 49.566667,
    "lon": 117.33,
    "elevation": 2231
  },
  {
    "icao": "ZBOW",
    "iata": "BAV",
    "name": "Baotou Donghe Airport",
    "city": "Baotou",
    "country": "CN",
    "lat": 40.560001,
    "lon": 109.997002,
    "elevation": 3321
  },
  {
    "icao": "ZBSJ",
    "iata": "SJW",
    "name": "Shijiazhuang Zhengding International Airport",
    "city": "Shijiazhuang",
    "country": "CN",
    "lat": 38.280701,
    "lon": 114.696999,
    "elevation": 233
  },
  {
    "icao": "ZBTJ",
    "iata": "TSN",
    "name": "Tianjin Binhai International Airport",
    "city": "Tianjin",
    "country": "CN",
    "lat": 39.124401092499994,
    "lon": 117.346000671,
    "elevation": 10
  },
  {
    "icao": "ZBTL",
    "iata": "TGO",
    "name": "Tongliao Airport",
    "city": "Tongliao",
    "country": "CN",
    "lat": 43.556702,
    "lon": 122.199997,
    "elevation": 2395
  },
  {
    "icao": "ZBUC",
    "iata": "UCB",
    "name": "Ulanqab Jining Airport",
    "city": "Ulanqab",
    "country": "CN",
    "lat": 41.130266,
    "lon": 113.107274,
    "elevation": 0
  },
  {
    "icao": "ZBXH",
    "iata": "XIL",
    "name": "Xilinhot Airport",
    "city": "Xilinhot",
    "country": "CN",
    "lat": 43.91559982299805,
    "lon": 115.96399688720703,
    "elevation": 0
  },
  {
    "icao": "ZBYC",
    "iata": "YCU",
    "name": "Yuncheng Zhangxiao Airport",
    "city": "Yuncheng (Yanhu)",
    "country": "CN",
    "lat": 35.116391,
    "lon": 111.031389,
    "elevation": 1242
  },
  {
    "icao": "ZBYN",
    "iata": "TYN",
    "name": "Taiyuan Wusu International Airport",
    "city": "Taiyuan",
    "country": "CN",
    "lat": 37.746899,
    "lon": 112.627998,
    "elevation": 2575
  },
  {
    "icao": "ZBYZ",
    "iata": "RLK",
    "name": "Bayannur Tianjitai Airport",
    "city": "Bavannur",
    "country": "CN",
    "lat": 40.926,
    "lon": 107.7428,
    "elevation": 3400
  },
  {
    "icao": "ZBZJ",
    "iata": "ZQZ",
    "name": "Zhangjiakou Ningyuan Airport",
    "city": "Zhangjiakou",
    "country": "CN",
    "lat": 40.738602,
    "lon": 114.930278,
    "elevation": 2347
  },
  {
    "icao": "ZBZL",
    "iata": "NZL",
    "name": "Zhalantun Genghis Khan Airport",
    "city": "Zhalantun",
    "country": "CN",
    "lat": 47.865942,
    "lon": 122.768662,
    "elevation": 928
  },
  {
    "icao": "ZGBH",
    "iata": "BHY",
    "name": "Beihai Fucheng Airport",
    "city": "Beihai (Yinhai)",
    "country": "CN",
    "lat": 21.5394,
    "lon": 109.293999,
    "elevation": 75
  },
  {
    "icao": "ZGBS",
    "iata": "AEB",
    "name": "Baise (Bose) Bama Airport",
    "city": "Baise (Tianyang)",
    "country": "CN",
    "lat": 23.7206,
    "lon": 106.959999,
    "elevation": 490
  },
  {
    "icao": "ZGCD",
    "iata": "CGD",
    "name": "Changde Taohuayuan Airport",
    "city": "Changde (Dingcheng)",
    "country": "CN",
    "lat": 28.9189,
    "lon": 111.639999,
    "elevation": 128
  },
  {
    "icao": "ZGCJ",
    "iata": "HJJ",
    "name": "Huaihua Zhijiang Airport",
    "city": "Huaihua",
    "country": "CN",
    "lat": 27.443087,
    "lon": 109.704666,
    "elevation": 882
  },
  {
    "icao": "ZGCZ",
    "iata": "HCZ",
    "name": "Chenzhou Beihu Airport",
    "city": "Chenzhou",
    "country": "CN",
    "lat": 25.753419,
    "lon": 112.845404,
    "elevation": 1071
  },
  {
    "icao": "ZGFS",
    "iata": "FUO",
    "name": "Foshan Shadi Airport",
    "city": "Foshan (Nanhai)",
    "country": "CN",
    "lat": 23.0825,
    "lon": 113.070833,
    "elevation": 6
  },
  {
    "icao": "ZGGG",
    "iata": "CAN",
    "name": "Guangzhou Baiyun International Airport",
    "city": "Guangzhou (Huadu)",
    "country": "CN",
    "lat": 23.392401,
    "lon": 113.299004,
    "elevation": 50
  },
  {
    "icao": "ZGHA",
    "iata": "CSX",
    "name": "Changsha Huanghua International Airport",
    "city": "Changsha (Changsha)",
    "country": "CN",
    "lat": 28.189199,
    "lon": 113.220001,
    "elevation": 217
  },
  {
    "icao": "ZGHC",
    "iata": "HCJ",
    "name": "Hechi Jinchengjiang Airport",
    "city": "Hechi (Jinchengjiang)",
    "country": "CN",
    "lat": 24.804344,
    "lon": 107.710819,
    "elevation": 2221
  },
  {
    "icao": "ZGHZ",
    "iata": "HUZ",
    "name": "Huizhou Pingtan Airport",
    "city": "Huizhou (Pingtan)",
    "country": "CN",
    "lat": 23.049999,
    "lon": 114.599998,
    "elevation": 50
  },
  {
    "icao": "ZGKL",
    "iata": "KWL",
    "name": "Guilin Liangjiang International Airport",
    "city": "Guilin (Lingui)",
    "country": "CN",
    "lat": 25.219828,
    "lon": 110.039553,
    "elevation": 570
  },
  {
    "icao": "ZGLG",
    "iata": "LLF",
    "name": "Yongzhou Lingling Airport",
    "city": "Yongzhou",
    "country": "CN",
    "lat": 26.338661,
    "lon": 111.610043,
    "elevation": 340
  },
  {
    "icao": "ZGNN",
    "iata": "NNG",
    "name": "Nanning Wuxu Airport",
    "city": "Nanning (Jiangnan)",
    "country": "CN",
    "lat": 22.608544,
    "lon": 108.175335,
    "elevation": 421
  },
  {
    "icao": "ZGOW",
    "iata": "SWA",
    "name": "Jieyang Chaoshan International Airport",
    "city": "Jieyang (Rongcheng)",
    "country": "CN",
    "lat": 23.552,
    "lon": 116.5033,
    "elevation": 0
  },
  {
    "icao": "ZGSD",
    "iata": "ZUH",
    "name": "Zhuhai Jinwan Airport",
    "city": "Zhuhai (Jinwan)",
    "country": "CN",
    "lat": 22.006399,
    "lon": 113.375999,
    "elevation": 23
  },
  {
    "icao": "ZGSY",
    "iata": "WGN",
    "name": "Shaoyang Wugang Airport",
    "city": "Shaoyang (Wugang)",
    "country": "CN",
    "lat": 26.806123,
    "lon": 110.641042,
    "elevation": 1444
  },
  {
    "icao": "ZGSZ",
    "iata": "SZX",
    "name": "Shenzhen Bao'an International Airport",
    "city": "Shenzhen (Bao'an)",
    "country": "CN",
    "lat": 22.639299,
    "lon": 113.810997,
    "elevation": 13
  },
  {
    "icao": "ZGWZ",
    "iata": "WUZ",
    "name": "Wuzhou Xijiang Airport",
    "city": "Tangbu",
    "country": "CN",
    "lat": 23.40316,
    "lon": 111.09331,
    "elevation": 357
  },
  {
    "icao": "ZGYL",
    "iata": "YLX",
    "name": "Yulin Fumian Airport",
    "city": "Yùlín",
    "country": "CN",
    "lat": 22.438056,
    "lon": 110.120833,
    "elevation": 328
  },
  {
    "icao": "ZGYY",
    "iata": "YYA",
    "name": "Yueyang Sanhe Airport",
    "city": "Yueyang (Yueyanglou)",
    "country": "CN",
    "lat": 29.311699,
    "lon": 113.281574,
    "elevation": 230
  },
  {
    "icao": "ZGZH",
    "iata": "LZH",
    "name": "Liuzhou Bailian Airport / Bailian Air Base",
    "city": "Liuzhou (Liujiang)",
    "country": "CN",
    "lat": 24.2075,
    "lon": 109.390999,
    "elevation": 295
  },
  {
    "icao": "ZGZJ",
    "iata": "ZHA",
    "name": "Zhanjiang Wuchuan Airport",
    "city": "Zhanjiang",
    "country": "CN",
    "lat": 21.481667,
    "lon": 110.590278,
    "elevation": 0
  },
  {
    "icao": "ZHCC",
    "iata": "CGO",
    "name": "Zhengzhou Xinzheng International Airport",
    "city": "Zhengzhou",
    "country": "CN",
    "lat": 34.526497,
    "lon": 113.849165,
    "elevation": 495
  },
  {
    "icao": "ZHEC",
    "iata": "EHU",
    "name": "Ezhou Huahu Airport",
    "city": "Ezhou",
    "country": "CN",
    "lat": 30.341178,
    "lon": 115.03926,
    "elevation": 86
  },
  {
    "icao": "ZHES",
    "iata": "ENH",
    "name": "Enshi Xujiaping Airport",
    "city": "Enshi (Enshi)",
    "country": "CN",
    "lat": 30.320299,
    "lon": 109.485001,
    "elevation": 1605
  },
  {
    "icao": "ZHGH",
    "iata": "LHK",
    "name": "Guangzhou MR Air Base / Guanghua Airport",
    "city": "Xiangyang (Laohekou)",
    "country": "CN",
    "lat": 32.38866,
    "lon": 111.69425,
    "elevation": 0
  },
  {
    "icao": "ZHHH",
    "iata": "WUH",
    "name": "Wuhan Tianhe International Airport",
    "city": "Wuhan (Huangpi)",
    "country": "CN",
    "lat": 30.774798,
    "lon": 114.213723,
    "elevation": 113
  },
  {
    "icao": "ZHJZ",
    "iata": "SHS",
    "name": "Jingzhou Shashi Airport",
    "city": "Jingzhou (Shashi)",
    "country": "CN",
    "lat": 30.29281,
    "lon": 112.44854,
    "elevation": 95
  },
  {
    "icao": "ZHLY",
    "iata": "LYA",
    "name": "Luoyang Beijiao Airport",
    "city": "Luoyang (Laocheng)",
    "country": "CN",
    "lat": 34.7411,
    "lon": 112.388,
    "elevation": 840
  },
  {
    "icao": "ZHSN",
    "iata": "HPG",
    "name": "Shennongjia Hongping Airport",
    "city": "Shennongjia (Hongping)",
    "country": "CN",
    "lat": 31.626,
    "lon": 110.34,
    "elevation": 8365
  },
  {
    "icao": "ZHSY",
    "iata": "WDS",
    "name": "Shiyan Wudangshan Airport",
    "city": "Shiyan (Maojian)",
    "country": "CN",
    "lat": 32.592889,
    "lon": 110.906296,
    "elevation": 0
  },
  {
    "icao": "ZHXF",
    "iata": "XFN",
    "name": "Xiangyang Liuji Airport",
    "city": "Xiangyang (Xiangzhou)",
    "country": "CN",
    "lat": 32.152222,
    "lon": 112.291666,
    "elevation": 234
  },
  {
    "icao": "ZHXY",
    "iata": "XAI",
    "name": "Xinyang Minggang Airport",
    "city": "Xinyang",
    "country": "CN",
    "lat": 32.540819,
    "lon": 114.079141,
    "elevation": 312
  },
  {
    "icao": "ZHYC",
    "iata": "YIH",
    "name": "Yichang Sanxia Airport",
    "city": "Yichang (Xiaoting)",
    "country": "CN",
    "lat": 30.554132,
    "lon": 111.482563,
    "elevation": 673
  },
  {
    "icao": "ZJHK",
    "iata": "HAK",
    "name": "Haikou Meilan International Airport",
    "city": "Haikou (Meilan)",
    "country": "CN",
    "lat": 19.9349,
    "lon": 110.459,
    "elevation": 75
  },
  {
    "icao": "ZJQH",
    "iata": "BAR",
    "name": "Qionghai Bo'ao Airport",
    "city": "Qionghai (Basuo)",
    "country": "CN",
    "lat": 19.140951,
    "lon": 110.452766,
    "elevation": 30
  },
  {
    "icao": "ZJSY",
    "iata": "SYX",
    "name": "Sanya Phoenix International Airport",
    "city": "Sanya (Tianya)",
    "country": "CN",
    "lat": 18.3029,
    "lon": 109.412003,
    "elevation": 92
  },
  {
    "icao": "ZKHM",
    "iata": "RGO",
    "name": "Orang (Chongjin) Airport",
    "city": "Hoemun-ri",
    "country": "KP",
    "lat": 41.428538,
    "lon": 129.647555,
    "elevation": 12
  },
  {
    "icao": "ZKPY",
    "iata": "FNJ",
    "name": "Pyongyang Sunan International Airport",
    "city": "Pyongyang",
    "country": "KP",
    "lat": 39.224098,
    "lon": 125.669998,
    "elevation": 117
  },
  {
    "icao": "ZKSD",
    "iata": "DSO",
    "name": "Sondok Airport",
    "city": "Sŏndŏng-ni",
    "country": "KP",
    "lat": 39.745201,
    "lon": 127.473999,
    "elevation": 12
  },
  {
    "icao": "ZKWS",
    "iata": "WOS",
    "name": "Wonsan Kalma International Airport",
    "city": "Wonsan",
    "country": "KP",
    "lat": 39.166801,
    "lon": 127.486,
    "elevation": 7
  },
  {
    "icao": "ZLDH",
    "iata": "DNH",
    "name": "Dunhuang Mogao International Airport",
    "city": "Dunhuang",
    "country": "CN",
    "lat": 40.161098,
    "lon": 94.809196,
    "elevation": 0
  },
  {
    "icao": "ZLGL",
    "iata": "GMQ",
    "name": "Golog Maqên Airport",
    "city": "Golog (Maqên)",
    "country": "CN",
    "lat": 34.418066,
    "lon": 100.301144,
    "elevation": 12426
  },
  {
    "icao": "ZLGM",
    "iata": "GOQ",
    "name": "Golmud Airport",
    "city": "Golmud",
    "country": "CN",
    "lat": 36.4006,
    "lon": 94.786102,
    "elevation": 9334
  },
  {
    "icao": "ZLGY",
    "iata": "GYU",
    "name": "Guyuan Liupanshan Airport",
    "city": "Guyuan (Yuanzhou)",
    "country": "CN",
    "lat": 36.078889,
    "lon": 106.216944,
    "elevation": 5727
  },
  {
    "icao": "ZLHX",
    "iata": "HTT",
    "name": "Huatugou Airport",
    "city": "Mengnai",
    "country": "CN",
    "lat": 38.201645,
    "lon": 90.837843,
    "elevation": 2945
  },
  {
    "icao": "ZLIC",
    "iata": "INC",
    "name": "Yinchuan Hedong International Airport",
    "city": "Yinchuan",
    "country": "CN",
    "lat": 38.322758,
    "lon": 106.393214,
    "elevation": 3743
  },
  {
    "icao": "ZLLL",
    "iata": "LHW",
    "name": "Lanzhou Zhongchuan International Airport",
    "city": "Lanzhou (Yongdeng)",
    "country": "CN",
    "lat": 36.515202,
    "lon": 103.620003,
    "elevation": 6388
  },
  {
    "icao": "ZLLN",
    "iata": "LNL",
    "name": "Longnan Chengzhou Airport",
    "city": "Longnan (Cheng)",
    "country": "CN",
    "lat": 33.789918,
    "lon": 105.790014,
    "elevation": 3707
  },
  {
    "icao": "ZLQY",
    "iata": "IQN",
    "name": "Qingyang Xifeng Airport",
    "city": "Qingyang (Xifeng)",
    "country": "CN",
    "lat": 35.802638,
    "lon": 107.598896,
    "elevation": 0
  },
  {
    "icao": "ZLSN",
    "iata": "SIA",
    "name": "Xi'an Xiguan Airport",
    "city": "Xi'an (Baqiao)",
    "country": "CN",
    "lat": 34.376701,
    "lon": 109.120003,
    "elevation": 0
  },
  {
    "icao": "ZLTS",
    "iata": "THQ",
    "name": "Tianshui Maijishan Airport",
    "city": "Tianshui (Maiji)",
    "country": "CN",
    "lat": 34.5601,
    "lon": 105.860343,
    "elevation": 3590
  },
  {
    "icao": "ZLXH",
    "iata": "GXH",
    "name": "Gannan Xiahe Airport",
    "city": "Gannan (Xiahe)",
    "country": "CN",
    "lat": 34.819014,
    "lon": 102.622261,
    "elevation": 10510
  },
  {
    "icao": "ZLXN",
    "iata": "XNN",
    "name": "Xining Caojiabao International Airport",
    "city": "Haidong (Huzhu Tu Autonomous County)",
    "country": "CN",
    "lat": 36.530093,
    "lon": 102.040062,
    "elevation": 7119
  },
  {
    "icao": "ZLXY",
    "iata": "XIY",
    "name": "Xi'an Xianyang International Airport",
    "city": "Xianyang (Weicheng)",
    "country": "CN",
    "lat": 34.447102,
    "lon": 108.751999,
    "elevation": 1572
  },
  {
    "icao": "ZLYA",
    "iata": "ENY",
    "name": "Yan'an Nanniwan Airport",
    "city": "Yan'an (Baota)",
    "country": "CN",
    "lat": 36.479413,
    "lon": 109.464083,
    "elevation": 0
  },
  {
    "icao": "ZLYS",
    "iata": "YUS",
    "name": "Yushu Batang Airport",
    "city": "Yushu (Batang)",
    "country": "CN",
    "lat": 32.836389,
    "lon": 97.036389,
    "elevation": 12816
  },
  {
    "icao": "ZLZW",
    "iata": "ZHY",
    "name": "Zhongwei Shapotou Airport",
    "city": "Zhongwei (Shapotou)",
    "country": "CN",
    "lat": 37.573125,
    "lon": 105.154454,
    "elevation": 4088
  },
  {
    "icao": "ZM-0045",
    "iata": "UMB",
    "name": "Kalumbila Airport",
    "city": "Kalumbila",
    "country": "ZM",
    "lat": -12.25358,
    "lon": 25.44432,
    "elevation": 4354
  },
  {
    "icao": "ZMAH",
    "iata": "AVK",
    "name": "Arvaikheer Airport",
    "city": "Arvaikheer",
    "country": "MN",
    "lat": 46.250301361083984,
    "lon": 102.802001953125,
    "elevation": 5932
  },
  {
    "icao": "ZMAT",
    "iata": "LTI",
    "name": "Altai Airport",
    "city": "Altai",
    "country": "MN",
    "lat": 46.376399993896484,
    "lon": 96.22109985351562,
    "elevation": 7260
  },
  {
    "icao": "ZMBH",
    "iata": "BYN",
    "name": "Bayankhongor Airport",
    "city": "Bayankhongor",
    "country": "MN",
    "lat": 46.163299560546875,
    "lon": 100.7040023803711,
    "elevation": 6085
  },
  {
    "icao": "ZMBN",
    "iata": "UGA",
    "name": "Bulgan Airport",
    "city": "Bulgan",
    "country": "MN",
    "lat": 48.85499954223633,
    "lon": 103.47599792480469,
    "elevation": 4311
  },
  {
    "icao": "ZMBU",
    "iata": "UUN",
    "name": "Baruun Urt Airport",
    "city": "",
    "country": "MN",
    "lat": 46.660301208496094,
    "lon": 113.28500366210938,
    "elevation": 3205
  },
  {
    "icao": "ZMCD",
    "iata": "COQ",
    "name": "Choibalsan Airport",
    "city": "",
    "country": "MN",
    "lat": 48.13570022583008,
    "lon": 114.64600372314453,
    "elevation": 2457
  },
  {
    "icao": "ZMCK",
    "iata": "UBN",
    "name": "Ulaanbaatar Chinggis Khaan International Airport",
    "city": "Ulaanbaatar (Sergelen)",
    "country": "MN",
    "lat": 47.646916,
    "lon": 106.819833,
    "elevation": 4482
  },
  {
    "icao": "ZMDZ",
    "iata": "DLZ",
    "name": "Dalanzadgad Airport",
    "city": "Dalanzadgad",
    "country": "MN",
    "lat": 43.608628,
    "lon": 104.367734,
    "elevation": 4787
  },
  {
    "icao": "ZMKD",
    "iata": "HVD",
    "name": "Khovd Airport",
    "city": "Khovd",
    "country": "MN",
    "lat": 47.9541015625,
    "lon": 91.6281967163086,
    "elevation": 4898
  },
  {
    "icao": "ZMMN",
    "iata": "MXV",
    "name": "Mörön Airport",
    "city": "Mörön",
    "country": "MN",
    "lat": 49.663299560546875,
    "lon": 100.0989990234375,
    "elevation": 4272
  },
  {
    "icao": "ZMUB",
    "iata": "ULN",
    "name": "Buyant-Ukhaa International Airport",
    "city": "Ulaanbaatar",
    "country": "MN",
    "lat": 47.843102,
    "lon": 106.766998,
    "elevation": 4364
  },
  {
    "icao": "ZPBS",
    "iata": "BSD",
    "name": "Baoshan Yunrui Airport",
    "city": "Baoshan (Longyang)",
    "country": "CN",
    "lat": 25.053301,
    "lon": 99.168297,
    "elevation": 5453
  },
  {
    "icao": "ZPCW",
    "iata": "CWJ",
    "name": "Cangyuan Washan Airport",
    "city": "Lincang (Cangyuan)",
    "country": "CN",
    "lat": 23.276331,
    "lon": 99.373169,
    "elevation": 0
  },
  {
    "icao": "ZPDL",
    "iata": "DLU",
    "name": "Dali Fengyi Airport",
    "city": "Dali (Xiaguan)",
    "country": "CN",
    "lat": 25.649401,
    "lon": 100.319,
    "elevation": 7050
  },
  {
    "icao": "ZPDQ",
    "iata": "DIG",
    "name": "Diqing Shangri-La Airport",
    "city": "Diqing (Shangri-La)",
    "country": "CN",
    "lat": 27.7936,
    "lon": 99.6772,
    "elevation": 10761
  },
  {
    "icao": "ZPJH",
    "iata": "JHG",
    "name": "Xishuangbanna Gasa International Airport",
    "city": "Jinghong (Gasa)",
    "country": "CN",
    "lat": 21.974648,
    "lon": 100.762224,
    "elevation": 1815
  },
  {
    "icao": "ZPJM",
    "iata": "JMJ",
    "name": "Lancang Jingmai Airport",
    "city": "Pu'er (Lancang)",
    "country": "CN",
    "lat": 22.417733,
    "lon": 99.784012,
    "elevation": 0
  },
  {
    "icao": "ZPLC",
    "iata": "LNJ",
    "name": "Lincang Boshang Airport",
    "city": "Lincang",
    "country": "CN",
    "lat": 23.7381,
    "lon": 100.025002,
    "elevation": 6230
  },
  {
    "icao": "ZPLJ",
    "iata": "LJG",
    "name": "Lijiang Sanyi International Airport",
    "city": "Lijiang (Gucheng)",
    "country": "CN",
    "lat": 26.68,
    "lon": 100.246002,
    "elevation": 7359
  },
  {
    "icao": "ZPMS",
    "iata": "LUM",
    "name": "Dehong Mangshi Airport",
    "city": "Dehong (Mangshi)",
    "country": "CN",
    "lat": 24.4011,
    "lon": 98.5317,
    "elevation": 2890
  },
  {
    "icao": "ZPPP",
    "iata": "KMG",
    "name": "Kunming Changshui International Airport",
    "city": "Kunming",
    "country": "CN",
    "lat": 25.110313,
    "lon": 102.936743,
    "elevation": 6903
  },
  {
    "icao": "ZPYM",
    "iata": "YUA",
    "name": "Yuanmou Air Base",
    "city": "Chuxiong (Yuanmou)",
    "country": "CN",
    "lat": 25.737499,
    "lon": 101.882004,
    "elevation": 3810
  },
  {
    "icao": "ZSAM",
    "iata": "XMN",
    "name": "Xiamen Gaoqi International Airport",
    "city": "Xiamen",
    "country": "CN",
    "lat": 24.54400062561035,
    "lon": 118.12799835205078,
    "elevation": 59
  },
  {
    "icao": "ZSAQ",
    "iata": "AQG",
    "name": "Anqing Tianzhushan Airport / Anqing North Air Base",
    "city": "Anqing",
    "country": "CN",
    "lat": 30.582199,
    "lon": 117.050003,
    "elevation": 0
  },
  {
    "icao": "ZSBB",
    "iata": "BFU",
    "name": "Bengbu Tenghu Airport",
    "city": "Bengbu",
    "country": "CN",
    "lat": 32.847733,
    "lon": 117.320244,
    "elevation": 100
  },
  {
    "icao": "ZSCG",
    "iata": "CZX",
    "name": "Changzhou Benniu International Airport",
    "city": "Changzhou",
    "country": "CN",
    "lat": 31.920485,
    "lon": 119.77546,
    "elevation": 33
  },
  {
    "icao": "ZSCN",
    "iata": "KHN",
    "name": "Nanchang Changbei International Airport",
    "city": "Nanchang",
    "country": "CN",
    "lat": 28.864815,
    "lon": 115.90271,
    "elevation": 143
  },
  {
    "icao": "ZSDY",
    "iata": "DOY",
    "name": "Dongying Shengli Airport",
    "city": "Dongying (Kenli)",
    "country": "CN",
    "lat": 37.50137,
    "lon": 118.789863,
    "elevation": 15
  },
  {
    "icao": "ZSFY",
    "iata": "FUG",
    "name": "Fuyang Xiguan Airport",
    "city": "Yingzhou, Fuyang",
    "country": "CN",
    "lat": 32.882157,
    "lon": 115.734364,
    "elevation": 104
  },
  {
    "icao": "ZSFZ",
    "iata": "FOC",
    "name": "Fuzhou Changle International Airport",
    "city": "Fuzhou (Changle)",
    "country": "CN",
    "lat": 25.934669,
    "lon": 119.66318,
    "elevation": 46
  },
  {
    "icao": "ZSHC",
    "iata": "HGH",
    "name": "Hangzhou Xiaoshan International Airport",
    "city": "Hangzhou",
    "country": "CN",
    "lat": 30.23609,
    "lon": 120.428865,
    "elevation": 23
  },
  {
    "icao": "ZSHZ",
    "iata": "HZA",
    "name": "Heze Mudan Airport",
    "city": "Heze (Dingtao)",
    "country": "CN",
    "lat": 35.212972,
    "lon": 115.736748,
    "elevation": 0
  },
  {
    "icao": "ZSJD",
    "iata": "JDZ",
    "name": "Jingdezhen Luojia Airport",
    "city": "Jingdezhen",
    "country": "CN",
    "lat": 29.3386,
    "lon": 117.176003,
    "elevation": 112
  },
  {
    "icao": "ZSJG",
    "iata": "JNG",
    "name": "Jining Da'an Airport",
    "city": "Jining",
    "country": "CN",
    "lat": 35.647358,
    "lon": 116.743269,
    "elevation": 171
  },
  {
    "icao": "ZSJN",
    "iata": "TNA",
    "name": "Jinan Yaoqiang International Airport",
    "city": "Jinan (Licheng)",
    "country": "CN",
    "lat": 36.857201,
    "lon": 117.216003,
    "elevation": 76
  },
  {
    "icao": "ZSJU",
    "iata": "JUZ",
    "name": "Quzhou Airport",
    "city": "Quzhou (Kezheng)",
    "country": "CN",
    "lat": 28.96613,
    "lon": 118.898793,
    "elevation": 213
  },
  {
    "icao": "ZSLG",
    "iata": "LYG",
    "name": "Lianyungang Huaguoshan International Airport",
    "city": "Lianyungang",
    "country": "CN",
    "lat": 34.41406,
    "lon": 119.17899,
    "elevation": 0
  },
  {
    "icao": "ZSLO",
    "iata": "LCX",
    "name": "Liancheng Guanzhishan Airport",
    "city": "Longyan (Liancheng)",
    "country": "CN",
    "lat": 25.67592,
    "lon": 116.745907,
    "elevation": 1225
  },
  {
    "icao": "ZSLQ",
    "iata": "HYN",
    "name": "Taizhou Luqiao Airport",
    "city": "Taizhou (Luqiao)",
    "country": "CN",
    "lat": 28.562201,
    "lon": 121.429001,
    "elevation": 0
  },
  {
    "icao": "ZSLY",
    "iata": "LYI",
    "name": "Linyi Qiyang Airport",
    "city": "Linyi (Hedong)",
    "country": "CN",
    "lat": 35.052918,
    "lon": 118.411828,
    "elevation": 177
  },
  {
    "icao": "ZSNB",
    "iata": "NGB",
    "name": "Ningbo Lishe International Airport",
    "city": "Ningbo",
    "country": "CN",
    "lat": 29.82670021057129,
    "lon": 121.46199798583984,
    "elevation": 13
  },
  {
    "icao": "ZSNJ",
    "iata": "NKG",
    "name": "Nanjing Lukou International Airport",
    "city": "Nanjing",
    "country": "CN",
    "lat": 31.735032,
    "lon": 118.865949,
    "elevation": 49
  },
  {
    "icao": "ZSNT",
    "iata": "NTG",
    "name": "Nantong Xingdong International Airport",
    "city": "Nantong (Tongzhou)",
    "country": "CN",
    "lat": 32.073566,
    "lon": 120.980076,
    "elevation": 16
  },
  {
    "icao": "ZSOF",
    "iata": "HFE",
    "name": "Hefei Xinqiao International Airport",
    "city": "Hefei",
    "country": "CN",
    "lat": 31.98779,
    "lon": 116.9769,
    "elevation": 207
  },
  {
    "icao": "ZSPD",
    "iata": "PVG",
    "name": "Shanghai Pudong International Airport",
    "city": "Shanghai (Pudong)",
    "country": "CN",
    "lat": 31.1434,
    "lon": 121.805,
    "elevation": 13
  },
  {
    "icao": "ZSQD",
    "iata": "TAO",
    "name": "Qingdao Jiaodong International Airport",
    "city": "Qingdao (Jiaozhou)",
    "country": "CN",
    "lat": 36.361953,
    "lon": 120.088171,
    "elevation": 30
  },
  {
    "icao": "ZSQZ",
    "iata": "JJN",
    "name": "Quanzhou Jinjiang International Airport",
    "city": "Quanzhou",
    "country": "CN",
    "lat": 24.796587,
    "lon": 118.588883,
    "elevation": 39
  },
  {
    "icao": "ZSRG",
    "iata": "RUG",
    "name": "Rugao Air Base",
    "city": "Rugao (Nantong)",
    "country": "CN",
    "lat": 32.258341,
    "lon": 120.501131,
    "elevation": 0
  },
  {
    "icao": "ZSRZ",
    "iata": "RIZ",
    "name": "Rizhao Shanzihe Airport",
    "city": "Rizhao (Donggang)",
    "country": "CN",
    "lat": 35.405033,
    "lon": 119.324403,
    "elevation": 121
  },
  {
    "icao": "ZSSH",
    "iata": "HIA",
    "name": "Huai'an Lianshui International Airport",
    "city": "Huai'an",
    "country": "CN",
    "lat": 33.790833,
    "lon": 119.125,
    "elevation": 28
  },
  {
    "icao": "ZSSM",
    "iata": "SQJ",
    "name": "Sanming Shaxian Airport",
    "city": "Sanming (Sha)",
    "country": "CN",
    "lat": 26.4263,
    "lon": 117.8336,
    "elevation": 830
  },
  {
    "icao": "ZSSR",
    "iata": "SQD",
    "name": "Shangrao Sanqingshan Airport",
    "city": "Shangrao (Hengfeng)",
    "country": "CN",
    "lat": 28.3797,
    "lon": 117.9643,
    "elevation": 340
  },
  {
    "icao": "ZSSS",
    "iata": "SHA",
    "name": "Shanghai Hongqiao International Airport",
    "city": "Shanghai (Minhang)",
    "country": "CN",
    "lat": 31.198104,
    "lon": 121.33426,
    "elevation": 10
  },
  {
    "icao": "ZSSZ",
    "iata": "SZV",
    "name": "Suzhou Guangfu Airport",
    "city": "Suzhou",
    "country": "CN",
    "lat": 31.2631,
    "lon": 120.401001,
    "elevation": 0
  },
  {
    "icao": "ZSTX",
    "iata": "TXN",
    "name": "Tunxi International Airport",
    "city": "Huangshan",
    "country": "CN",
    "lat": 29.733299255371094,
    "lon": 118.25599670410156,
    "elevation": 0
  },
  {
    "icao": "ZSWA",
    "iata": "WHA",
    "name": "Wuhu Xuanzhou Airport",
    "city": "Wuhu",
    "country": "CN",
    "lat": 31.1045,
    "lon": 118.66687,
    "elevation": 80
  },
  {
    "icao": "ZSWF",
    "iata": "WEF",
    "name": "Weifang Nanyuan Airport",
    "city": "Weifang (Kuiwen)",
    "country": "CN",
    "lat": 36.646702,
    "lon": 119.119003,
    "elevation": 0
  },
  {
    "icao": "ZSWH",
    "iata": "WEH",
    "name": "Weihai Dashuibo Airport",
    "city": "Weihai",
    "country": "CN",
    "lat": 37.187099,
    "lon": 122.228996,
    "elevation": 145
  },
  {
    "icao": "ZSWX",
    "iata": "WUX",
    "name": "Sunan Shuofang International Airport",
    "city": "Wuxi",
    "country": "CN",
    "lat": 31.494400024399997,
    "lon": 120.429000854,
    "elevation": 24
  },
  {
    "icao": "ZSWY",
    "iata": "WUS",
    "name": "Nanping Wuyishan Airport",
    "city": "Wuyishan",
    "country": "CN",
    "lat": 27.7019,
    "lon": 118.000999,
    "elevation": 614
  },
  {
    "icao": "ZSWZ",
    "iata": "WNZ",
    "name": "Wenzhou Longwan International Airport",
    "city": "Wenzhou (Longwan)",
    "country": "CN",
    "lat": 27.910572,
    "lon": 120.853465,
    "elevation": 13
  },
  {
    "icao": "ZSXZ",
    "iata": "XUZ",
    "name": "Xuzhou Guanyin International Airport",
    "city": "Xuzhou",
    "country": "CN",
    "lat": 34.059056,
    "lon": 117.555278,
    "elevation": 108
  },
  {
    "icao": "ZSYA",
    "iata": "YTY",
    "name": "Yangzhou Taizhou Airport",
    "city": "Yangzhou",
    "country": "CN",
    "lat": 32.5634,
    "lon": 119.7198,
    "elevation": 7
  },
  {
    "icao": "ZSYC",
    "iata": "YIC",
    "name": "Yichun Mingyueshan Airport",
    "city": "Yichun",
    "country": "CN",
    "lat": 27.8025,
    "lon": 114.3062,
    "elevation": 430
  },
  {
    "icao": "ZSYN",
    "iata": "YNZ",
    "name": "Yancheng Nanyang International Airport",
    "city": "Yancheng (Tinghu)",
    "country": "CN",
    "lat": 33.425833,
    "lon": 120.203056,
    "elevation": 10
  },
  {
    "icao": "ZSYT",
    "iata": "YNT",
    "name": "Yantai Penglai International Airport",
    "city": "Yantai",
    "country": "CN",
    "lat": 37.659724,
    "lon": 120.978124,
    "elevation": 154
  },
  {
    "icao": "ZSYW",
    "iata": "YIW",
    "name": "Yiwu Airport",
    "city": "Jinhua (Yiwu)",
    "country": "CN",
    "lat": 29.342095,
    "lon": 120.03116,
    "elevation": 262
  },
  {
    "icao": "ZSZS",
    "iata": "HSN",
    "name": "Zhoushan Putuoshan Airport",
    "city": "Zhoushan",
    "country": "CN",
    "lat": 29.9342,
    "lon": 122.362,
    "elevation": 3
  },
  {
    "icao": "ZUAL",
    "iata": "NGQ",
    "name": "Ngari Gunsa Airport",
    "city": "Shiquanhe",
    "country": "CN",
    "lat": 32.09794,
    "lon": 80.053971,
    "elevation": 14022
  },
  {
    "icao": "ZUAS",
    "iata": "AVA",
    "name": "Anshun Huangguoshu Airport",
    "city": "Anshun (Xixiu)",
    "country": "CN",
    "lat": 26.260556,
    "lon": 105.873333,
    "elevation": 4812
  },
  {
    "icao": "ZUBD",
    "iata": "BPX",
    "name": "Qamdo Bangda Airport",
    "city": "Bangda",
    "country": "CN",
    "lat": 30.553600311279297,
    "lon": 97.1082992553711,
    "elevation": 14219
  },
  {
    "icao": "ZUBJ",
    "iata": "BFJ",
    "name": "Bijie Feixiong Airport",
    "city": "Bijie",
    "country": "CN",
    "lat": 27.267066,
    "lon": 105.472097,
    "elevation": 4751
  },
  {
    "icao": "ZUCK",
    "iata": "CKG",
    "name": "Chongqing Jiangbei International Airport",
    "city": "Chongqing",
    "country": "CN",
    "lat": 29.712254,
    "lon": 106.651895,
    "elevation": 1365
  },
  {
    "icao": "ZUDA",
    "iata": "DZH",
    "name": "Dazhou Jinya Airport",
    "city": "Dazhou (Dachuan)",
    "country": "CN",
    "lat": 31.048815,
    "lon": 107.435646,
    "elevation": 1342
  },
  {
    "icao": "ZUDC",
    "iata": "DCY",
    "name": "Daocheng Yading Airport",
    "city": "Garzê (Daocheng)",
    "country": "CN",
    "lat": 29.31632,
    "lon": 100.060317,
    "elevation": 14472
  },
  {
    "icao": "ZUDJ",
    "iata": "DEJ",
    "name": "Tongren Dejiang Airport (Under Construction)",
    "city": "Tongren",
    "country": "CN",
    "lat": 28.121,
    "lon": 108.1631,
    "elevation": 3542
  },
  {
    "icao": "ZUGU",
    "iata": "GYS",
    "name": "Guangyuan Panlong Airport",
    "city": "Guangyuan (Lizhou)",
    "country": "CN",
    "lat": 32.390254,
    "lon": 105.694571,
    "elevation": 0
  },
  {
    "icao": "ZUGY",
    "iata": "KWE",
    "name": "Guiyang Longdongbao International Airport",
    "city": "Guiyang (Nanming)",
    "country": "CN",
    "lat": 26.541466,
    "lon": 106.803331,
    "elevation": 3736
  },
  {
    "icao": "ZUHY",
    "iata": "AHJ",
    "name": "Hongyuan Airport",
    "city": "Ngawa (Hongyuan)",
    "country": "CN",
    "lat": 32.53154,
    "lon": 102.35224,
    "elevation": 11600
  },
  {
    "icao": "ZUJZ",
    "iata": "JZH",
    "name": "Jiuzhai Huanglong Airport",
    "city": "Ngawa (Songpan)",
    "country": "CN",
    "lat": 32.853333,
    "lon": 103.682222,
    "elevation": 11327
  },
  {
    "icao": "ZUKD",
    "iata": "KGT",
    "name": "Kangding Airport",
    "city": "Garzê (Kangding)",
    "country": "CN",
    "lat": 30.142464,
    "lon": 101.73872,
    "elevation": 14042
  },
  {
    "icao": "ZUKJ",
    "iata": "KJH",
    "name": "Kaili Huangping Airport",
    "city": "Kaili  (Huangping)",
    "country": "CN",
    "lat": 26.972,
    "lon": 107.988,
    "elevation": 3115
  },
  {
    "icao": "ZULS",
    "iata": "LXA",
    "name": "Lhasa Gonggar Airport",
    "city": "Shannan (Gonggar)",
    "country": "CN",
    "lat": 29.298001,
    "lon": 90.911951,
    "elevation": 11713
  },
  {
    "icao": "ZULZ",
    "iata": "LZO",
    "name": "Luzhou Yunlong Airport",
    "city": "Luzhou (Yunlong)",
    "country": "CN",
    "lat": 29.030357,
    "lon": 105.468407,
    "elevation": 0
  },
  {
    "icao": "ZUMT",
    "iata": "WMT",
    "name": "Zunyi Maotai Airport",
    "city": "Zunyi",
    "country": "CN",
    "lat": 27.961837,
    "lon": 106.435416,
    "elevation": 4068
  },
  {
    "icao": "ZUMY",
    "iata": "MIG",
    "name": "Mianyang Nanjiao Airport",
    "city": "Mianyang (Fucheng)",
    "country": "CN",
    "lat": 31.428101,
    "lon": 104.740997,
    "elevation": 7874
  },
  {
    "icao": "ZUNP",
    "iata": "HZH",
    "name": "Liping Airport",
    "city": "Liping",
    "country": "CN",
    "lat": 26.32217,
    "lon": 109.1499,
    "elevation": 1620
  },
  {
    "icao": "ZUNZ",
    "iata": "LZY",
    "name": "Nyingchi Mainling Airport",
    "city": "Nyingchi (Mainling)",
    "country": "CN",
    "lat": 29.303301,
    "lon": 94.335297,
    "elevation": 9675
  },
  {
    "icao": "ZUPS",
    "iata": "LPF",
    "name": "Liupanshui Yuezhao Airport",
    "city": "Liupanshui (Zhongshan)",
    "country": "CN",
    "lat": 26.609417,
    "lon": 104.979,
    "elevation": 0
  },
  {
    "icao": "ZUQJ",
    "iata": "JIQ",
    "name": "Qianjiang Wulingshan Airport",
    "city": "Qianjiang",
    "country": "CN",
    "lat": 29.5133333333,
    "lon": 108.831111111,
    "elevation": 2075
  },
  {
    "icao": "ZURK",
    "iata": "RKZ",
    "name": "Xigaze Peace Airport / Shigatse Air Base",
    "city": "Xigazê (Samzhubzê)",
    "country": "CN",
    "lat": 29.3519,
    "lon": 89.311401,
    "elevation": 3782
  },
  {
    "icao": "ZPTC",
    "iata": "TCZ",
    "name": "Tengchong Tuofeng Airport",
    "city": "Baoshan (Tengchong)",
    "country": "CN",
    "lat": 24.938056,
    "lon": 98.485833,
    "elevation": 6250
  },
  {
    "icao": "ZUTF",
    "iata": "TFU",
    "name": "Chengdu Tianfu International Airport",
    "city": "Chengdu (Jianyang)",
    "country": "CN",
    "lat": 30.31252,
    "lon": 104.441284,
    "elevation": 1440
  },
  {
    "icao": "ZUTR",
    "iata": "TEN",
    "name": "Tongren Fenghuang Airport",
    "city": "Tongren (Daxing)",
    "country": "CN",
    "lat": 27.883333,
    "lon": 109.308889,
    "elevation": 0
  },
  {
    "icao": "ZUUU",
    "iata": "CTU",
    "name": "Chengdu Shuangliu International Airport",
    "city": "Chengdu (Shuangliu)",
    "country": "CN",
    "lat": 30.558257,
    "lon": 103.945966,
    "elevation": 1625
  },
  {
    "icao": "ZUWL",
    "iata": "CQW",
    "name": "Chongqing Xiannüshan Airport",
    "city": "Wulong",
    "country": "CN",
    "lat": 29.465658,
    "lon": 107.693664,
    "elevation": 1747
  },
  {
    "icao": "ZUXC",
    "iata": "XIC",
    "name": "Xichang Qingshan Airport",
    "city": "Liangshan (Xichang)",
    "country": "CN",
    "lat": 27.9891,
    "lon": 102.183998,
    "elevation": 5112
  },
  {
    "icao": "ZUYB",
    "iata": "YBP",
    "name": "Yibin Wuliangye Airport",
    "city": "Yibin (Cuiping)",
    "country": "CN",
    "lat": 28.858431,
    "lon": 104.526157,
    "elevation": 1378
  },
  {
    "icao": "ZUYI",
    "iata": "ACX",
    "name": "Xingyi Wanfenglin Airport",
    "city": "Xingyi",
    "country": "CN",
    "lat": 25.083423,
    "lon": 104.960804,
    "elevation": 4150
  },
  {
    "icao": "ZUZH",
    "iata": "PZI",
    "name": "Panzhihua Bao'anying Airport",
    "city": "Panzhihua (Renhe)",
    "country": "CN",
    "lat": 26.54,
    "lon": 101.79852,
    "elevation": 1620
  },
  {
    "icao": "ZUZY",
    "iata": "ZYI",
    "name": "Zunyi Xinzhou Airport",
    "city": "Zunyi",
    "country": "CN",
    "lat": 27.810723,
    "lon": 107.247189,
    "elevation": 2723
  },
  {
    "icao": "ZWAK",
    "iata": "AKU",
    "name": "Aksu Hongqipo Airport",
    "city": "Aksu (Onsu)",
    "country": "CN",
    "lat": 41.262501,
    "lon": 80.291702,
    "elevation": 3816
  },
  {
    "icao": "ZWAT",
    "iata": "AAT",
    "name": "Altay Xuedu Airport",
    "city": "Altay",
    "country": "CN",
    "lat": 47.749886,
    "lon": 88.085808,
    "elevation": 2460
  },
  {
    "icao": "ZWBL",
    "iata": "BPL",
    "name": "Bole Alashankou Airport",
    "city": "Bole",
    "country": "CN",
    "lat": 44.895461,
    "lon": 82.30007,
    "elevation": 1253
  },
  {
    "icao": "ZWCM",
    "iata": "IQM",
    "name": "Qiemo Yudu Airport",
    "city": "Qiemo",
    "country": "CN",
    "lat": 38.234516,
    "lon": 85.465462,
    "elevation": 0
  },
  {
    "icao": "ZWFY",
    "iata": "FYN",
    "name": "Fuyun Koktokay Airport",
    "city": "Fuyun",
    "country": "CN",
    "lat": 46.804169,
    "lon": 89.512006,
    "elevation": 3081
  },
  {
    "icao": "ZWHM",
    "iata": "HMI",
    "name": "Hami Airport",
    "city": "Hami",
    "country": "CN",
    "lat": 42.8414,
    "lon": 93.669197,
    "elevation": 2703
  },
  {
    "icao": "ZWKL",
    "iata": "KRL",
    "name": "Korla Licheng Airport",
    "city": "Korla",
    "country": "CN",
    "lat": 41.614979,
    "lon": 86.140817,
    "elevation": 3041
  },
  {
    "icao": "ZWKN",
    "iata": "KJI",
    "name": "Burqin Kanas Airport",
    "city": "Burqin",
    "country": "CN",
    "lat": 48.2223,
    "lon": 86.9959,
    "elevation": 3921
  },
  {
    "icao": "ZWNL",
    "iata": "NLT",
    "name": "Xinyuan Nalati Airport",
    "city": "Xinyuan",
    "country": "CN",
    "lat": 43.4318,
    "lon": 83.3786,
    "elevation": 3050
  },
  {
    "icao": "ZWRQ",
    "iata": "RQA",
    "name": "Ruoqiang Loulan Airport",
    "city": "Ruoqiang Town",
    "country": "CN",
    "lat": 38.974722,
    "lon": 88.008333,
    "elevation": 2916
  },
  {
    "icao": "ZWSC",
    "iata": "QSZ",
    "name": "Shache Airport",
    "city": "Shache",
    "country": "CN",
    "lat": 38.24542,
    "lon": 77.056149,
    "elevation": 4232
  },
  {
    "icao": "ZWSH",
    "iata": "KHG",
    "name": "Kashgar Laining International Airport",
    "city": "Kashgar",
    "country": "CN",
    "lat": 39.5429,
    "lon": 76.019997,
    "elevation": 4529
  },
  {
    "icao": "ZWSS",
    "iata": "SXJ",
    "name": "Shanshan Airport",
    "city": "Shanshan",
    "country": "CN",
    "lat": 42.911701,
    "lon": 90.247498,
    "elevation": 0
  },
  {
    "icao": "ZWTL",
    "iata": "TLQ",
    "name": "Turpan Jiaohe Airport",
    "city": "Turpan",
    "country": "CN",
    "lat": 43.0308,
    "lon": 89.0987,
    "elevation": 934
  },
  {
    "icao": "ZWTN",
    "iata": "HTN",
    "name": "Hotan Airport",
    "city": "Hotan",
    "country": "CN",
    "lat": 37.03850173950195,
    "lon": 79.86489868164062,
    "elevation": 4672
  },
  {
    "icao": "ZWWW",
    "iata": "URC",
    "name": "Ürümqi Tianshan International Airport",
    "city": "Ürümqi",
    "country": "CN",
    "lat": 43.907101,
    "lon": 87.474197,
    "elevation": 2125
  },
  {
    "icao": "ZYAS",
    "iata": "AOG",
    "name": "Anshan Teng'ao Airport / Anshan Air Base",
    "city": "Anshan",
    "country": "CN",
    "lat": 41.105301,
    "lon": 122.853996,
    "elevation": 0
  },
  {
    "icao": "ZYBA",
    "iata": "DBC",
    "name": "Baicheng Chang'an Airport",
    "city": "Baicheng",
    "country": "CN",
    "lat": 45.505278,
    "lon": 123.019722,
    "elevation": 480
  },
  {
    "icao": "ZYBS",
    "iata": "NBS",
    "name": "Changbaishan Airport",
    "city": "Baishan",
    "country": "CN",
    "lat": 42.066944,
    "lon": 127.602222,
    "elevation": 2874
  },
  {
    "icao": "ZYCC",
    "iata": "CGQ",
    "name": "Changchun Longjia International Airport",
    "city": "Changchun",
    "country": "CN",
    "lat": 43.996201,
    "lon": 125.684998,
    "elevation": 706
  },
  {
    "icao": "ZYCH",
    "iata": "CNI",
    "name": "Changhai Airport",
    "city": "Dalian (Changhai)",
    "country": "CN",
    "lat": 39.266667,
    "lon": 122.666944,
    "elevation": 80
  },
  {
    "icao": "ZYCY",
    "iata": "CHG",
    "name": "Chaoyang Airport",
    "city": "Shuangta, Chaoyang",
    "country": "CN",
    "lat": 41.538101,
    "lon": 120.434998,
    "elevation": 568
  },
  {
    "icao": "ZYDD",
    "iata": "DDG",
    "name": "Dandong Langtou Airport",
    "city": "Dandong (Zhenxing)",
    "country": "CN",
    "lat": 40.025453,
    "lon": 124.28669,
    "elevation": 30
  },
  {
    "icao": "ZYDU",
    "iata": "DTU",
    "name": "Wudalianchi Dedu Airport",
    "city": "Heihe",
    "country": "CN",
    "lat": 48.441037,
    "lon": 126.128374,
    "elevation": 984
  },
  {
    "icao": "ZYFY",
    "iata": "FYJ",
    "name": "Fuyuan Dongji Airport",
    "city": "Fuyuan",
    "country": "CN",
    "lat": 48.197219,
    "lon": 134.36298,
    "elevation": 0
  },
  {
    "icao": "ZYHB",
    "iata": "HRB",
    "name": "Harbin Taiping International Airport",
    "city": "Harbin",
    "country": "CN",
    "lat": 45.623402,
    "lon": 126.25,
    "elevation": 457
  },
  {
    "icao": "ZYHE",
    "iata": "HEK",
    "name": "Heihe Aihui Airport",
    "city": "Heihe",
    "country": "CN",
    "lat": 50.171621,
    "lon": 127.308884,
    "elevation": 1047
  },
  {
    "icao": "ZYJD",
    "iata": "JGD",
    "name": "Daxing'anling Elunchun Airport",
    "city": "Jiagedaqi",
    "country": "CN",
    "lat": 50.371389,
    "lon": 124.1175,
    "elevation": 1205
  },
  {
    "icao": "ZYJM",
    "iata": "JMU",
    "name": "Jiamusi Dongjiao Airport",
    "city": "Jiamusi",
    "country": "CN",
    "lat": 46.843399,
    "lon": 130.464996,
    "elevation": 262
  },
  {
    "icao": "ZYJS",
    "iata": "JSJ",
    "name": "Jiansanjiang Shidi Airport",
    "city": "Jiansanjiang",
    "country": "CN",
    "lat": 47.108248,
    "lon": 132.65792,
    "elevation": 0
  },
  {
    "icao": "ZYJX",
    "iata": "JXA",
    "name": "Jixi Xingkaihu Airport",
    "city": "Jixi",
    "country": "CN",
    "lat": 45.293,
    "lon": 131.193,
    "elevation": 760
  },
  {
    "icao": "ZYJZ",
    "iata": "JNZ",
    "name": "Jinzhou Bay Airport",
    "city": "Jinzhou (Linghai)",
    "country": "CN",
    "lat": 40.936032,
    "lon": 121.277114,
    "elevation": 0
  },
  {
    "icao": "ZYLD",
    "iata": "LDS",
    "name": "Yichun Lindu Airport",
    "city": "Yichun",
    "country": "CN",
    "lat": 47.752056,
    "lon": 129.019125,
    "elevation": 791
  },
  {
    "icao": "ZYMD",
    "iata": "MDG",
    "name": "Mudanjiang Hailang International Airport",
    "city": "Mudanjiang",
    "country": "CN",
    "lat": 44.5241012573,
    "lon": 129.569000244,
    "elevation": 883
  },
  {
    "icao": "ZYMH",
    "iata": "OHE",
    "name": "Mohe Gulian Airport",
    "city": "Mohe",
    "country": "CN",
    "lat": 52.916871,
    "lon": 122.422759,
    "elevation": 1836
  },
  {
    "icao": "ZYQQ",
    "iata": "NDG",
    "name": "Qiqihar Sanjiazi Airport",
    "city": "Qiqihar",
    "country": "CN",
    "lat": 47.239601135253906,
    "lon": 123.91799926757812,
    "elevation": 477
  },
  {
    "icao": "ZYSQ",
    "iata": "YSQ",
    "name": "Songyuan Chaganhu Airport",
    "city": "Qian Gorlos Mongol Autonomous County",
    "country": "CN",
    "lat": 44.931143,
    "lon": 124.552121,
    "elevation": 459
  },
  {
    "icao": "ZYTL",
    "iata": "DLC",
    "name": "Dalian Zhoushuizi International Airport",
    "city": "Dalian (Ganjingzi)",
    "country": "CN",
    "lat": 38.965719,
    "lon": 121.538477,
    "elevation": 107
  },
  {
    "icao": "ZYTN",
    "iata": "TNH",
    "name": "Tonghua Sanyuanpu Airport",
    "city": "Tonghua",
    "country": "CN",
    "lat": 42.048435,
    "lon": 125.733963,
    "elevation": 1347
  },
  {
    "icao": "ZYTX",
    "iata": "SHE",
    "name": "Shenyang Taoxian International Airport",
    "city": "Hunnan, Shenyang",
    "country": "CN",
    "lat": 41.639801,
    "lon": 123.483002,
    "elevation": 198
  },
  {
    "icao": "ZYXC",
    "iata": "XEN",
    "name": "Xingcheng Air Base",
    "city": "Huludao (Xingcheng)",
    "country": "CN",
    "lat": 40.580328,
    "lon": 120.700374,
    "elevation": 30
  },
  {
    "icao": "ZYYJ",
    "iata": "YNJ",
    "name": "Yanji Chaoyangchuan Airport",
    "city": "Yanji",
    "country": "CN",
    "lat": 42.8828010559,
    "lon": 129.451004028,
    "elevation": 624
  },
  {
    "icao": "ZYYK",
    "iata": "YKH",
    "name": "Yingkou Lanqi Airport",
    "city": "Yingkou (Laobian)",
    "country": "CN",
    "lat": 40.542524,
    "lon": 122.3586,
    "elevation": 0
  }
];


/**
 * Trouve l'aéroport le plus proche d'une position donnée
 * @param lat Latitude en degrés
 * @param lon Longitude en degrés
 * @param maxDistance Distance maximale en km (défaut: 50km)
 * @returns L'aéroport le plus proche ou null
 */
export function findNearestAirport(lat: number, lon: number, maxDistance: number = 50): Airport | null {
  let nearest: Airport | null = null;
  let minDistance = maxDistance;

  for (const airport of AIRPORTS) {
    const distance = calculateDistance(lat, lon, airport.lat, airport.lon);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = airport;
    }
  }

  return nearest;
}

/**
 * Calcule la distance entre deux points GPS (formule de Haversine)
 * @param lat1 Latitude du point 1 en degrés
 * @param lon1 Longitude du point 1 en degrés
 * @param lat2 Latitude du point 2 en degrés
 * @param lon2 Longitude du point 2 en degrés
 * @returns Distance en kilomètres
 */
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Rayon de la Terre en km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Recherche un aéroport par son code ICAO
 * @param icao Code ICAO (ex: LFPG)
 * @returns L'aéroport correspondant ou null
 */
export function findAirportByICAO(icao: string): Airport | null {
  return AIRPORTS.find(a => a.icao.toUpperCase() === icao.toUpperCase()) || null;
}

/**
 * Recherche un aéroport par son code IATA
 * @param iata Code IATA (ex: CDG)
 * @returns L'aéroport correspondant ou null
 */
export function findAirportByIATA(iata: string): Airport | null {
  return AIRPORTS.find(a => a.iata.toUpperCase() === iata.toUpperCase()) || null;
}

/**
 * Recherche des aéroports par ville
 * @param city Nom de la ville
 * @returns Liste des aéroports correspondants
 */
export function findAirportsByCity(city: string): Airport[] {
  const cityLower = city.toLowerCase();
  return AIRPORTS.filter(a => a.city.toLowerCase().includes(cityLower));
}

/**
 * Recherche des aéroports par pays
 * @param country Code pays ISO (ex: FR, US, GB)
 * @returns Liste des aéroports correspondants
 */
export function findAirportsByCountry(country: string): Airport[] {
  return AIRPORTS.filter(a => a.country.toUpperCase() === country.toUpperCase());
}
