// MəktəbPlus - 1v1 PvP Viktorina Sualları (15-20 qarışıq fənn sualı)

export const MOCK_PVP_QUESTIONS = [
  {
    id: 'pvp-1',
    subjectId: 'riyaziyyat',
    grade: 9,
    text: 'Ən kiçik sadə ədəd hansıdır?',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '1' },
      { key: 'C', text: '2' },
      { key: 'D', text: '3' }
    ],
    correctKey: 'C',
    explanation: '2 yeganə cüt sadə ədəddir və ən kiçik sadə ədəddir (1 nə sadədir, nə mürəkkəb).',
    difficulty: 1
  },
  {
    id: 'pvp-2',
    subjectId: 'riyaziyyat',
    grade: 10,
    text: '$\\log_3(81)$ ifadəsinin qiyməti neçədir?',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '9' },
      { key: 'D', text: '27' }
    ],
    correctKey: 'B',
    explanation: '$3^4 = 81$ olduğundan $\\log_3(81) = 4$.',
    difficulty: 2
  },
  {
    id: 'pvp-3',
    subjectId: 'fizika',
    grade: 8,
    text: 'Beynəlxalq Sistemdə (BS) təzyiqin əsas vahidi nədir?',
    options: [
      { key: 'A', text: 'Nyuton' },
      { key: 'B', text: 'Coul' },
      { key: 'C', text: 'Paskal' },
      { key: 'D', text: 'Vatt' }
    ],
    correctKey: 'C',
    explanation: 'Təzyiq vahidi Paskaldır ($1 \\text{ Pa} = 1 \\text{ N/m}^2$).',
    difficulty: 1
  },
  {
    id: 'pvp-4',
    subjectId: 'fizika',
    grade: 10,
    text: 'Vakuumda işığın yayılma sürəti təqribən nə qədərdir?',
    options: [
      { key: 'A', text: '$300\\,000 \\text{ km/s}$' },
      { key: 'B', text: '$340 \\text{ m/s}$' },
      { key: 'C', text: '$150\\,000 \\text{ km/s}$' },
      { key: 'D', text: '$3\\cdot 10^6 \\text{ km/s}$' }
    ],
    correctKey: 'A',
    explanation: 'İşığın vakuumda yayılma sürəti $c \\approx 3 \\cdot 10^8 \\text{ m/s} = 300\\,000 \\text{ km/s}$-dir.',
    difficulty: 1
  },
  {
    id: 'pvp-5',
    subjectId: 'kimya',
    grade: 8,
    text: 'D.İ.Mendeleyevin Dövri Cədvəlində 1-ci element hansıdır?',
    options: [
      { key: 'A', text: 'Helium' },
      { key: 'B', text: 'Hidrogen' },
      { key: 'C', text: 'Oksigen' },
      { key: 'D', text: 'Litium' }
    ],
    correctKey: 'B',
    explanation: 'Dövri sistemin ilk elementi atom nömrəsi 1 olan Hidrogendir (H).',
    difficulty: 1
  },
  {
    id: 'pvp-6',
    subjectId: 'kimya',
    grade: 9,
    text: 'Xörək duzunun kimyəvi formulu hansıdır?',
    options: [
      { key: 'A', text: '$CaCO_3$' },
      { key: 'B', text: '$NaCl$' },
      { key: 'C', text: '$KCl$' },
      { key: 'D', text: '$NaOH$' }
    ],
    correctKey: 'B',
    explanation: 'Xörək duzu natrium-xloriddir ($NaCl$).',
    difficulty: 1
  },
  {
    id: 'pvp-7',
    subjectId: 'biologiya',
    grade: 9,
    text: 'İnsan bədənində ən böyük vəzil hansıdır?',
    options: [
      { key: 'A', text: 'Mədəaltı vəzi' },
      { key: 'B', text: 'Qaraciyər' },
      { key: 'C', text: 'Qalxanabənzər vəzi' },
      { key: 'D', text: 'Böyrəküstü vəzi' }
    ],
    correctKey: 'B',
    explanation: 'Qaraciyər insan bədənində kütləsi təqribən 1.5 kq olan ən böyük vəzidir.',
    difficulty: 2
  },
  {
    id: 'pvp-8',
    subjectId: 'biologiya',
    grade: 10,
    text: 'Bitki hüceyrəsində fotosintez prosesi hansı orqanoiddə gedir?',
    options: [
      { key: 'A', text: 'Mitoxondri' },
      { key: 'B', text: 'Xloroplast' },
      { key: 'C', text: 'Ribosom' },
      { key: 'D', text: 'Lizosom' }
    ],
    correctKey: 'B',
    explanation: 'Fotosintez yaşıl piqment olan xlorofil saxlayan xloroplastlarda baş verir.',
    difficulty: 1
  },
  {
    id: 'pvp-9',
    subjectId: 'cografiya',
    grade: 8,
    text: 'Dünyanın ən dərin gölü hansıdır?',
    options: [
      { key: 'A', text: 'Xəzər dənizi' },
      { key: 'B', text: 'Baykal gölü' },
      { key: 'C', text: 'Viktoriya gölü' },
      { key: 'D', text: 'Hurun gölü' }
    ],
    correctKey: 'B',
    explanation: 'Baykal gölü 1642 metr dərinliyi ilə yer kürəsinin ən dərin şirin sulu gölüdür.',
    difficulty: 2
  },
  {
    id: 'pvp-10',
    subjectId: 'cografiya',
    grade: 9,
    text: 'Azərbaycanın ən hündür zirvəsi hansıdır və hündürlüyü neçə metrdir?',
    options: [
      { key: 'A', text: 'Bazardüzü (4466 m)' },
      { key: 'B', text: 'Şahdağ (4243 m)' },
      { key: 'C', text: 'Qapıcıq (3904 m)' },
      { key: 'D', text: 'Tufandağ (4191 m)' }
    ],
    correctKey: 'A',
    explanation: 'Azərbaycanın ən yüksək zirvəsi Baş Qafqaz silsiləsində yerləşən Bazardüzü dağıdır (4466 m).',
    difficulty: 2
  },
  {
    id: 'pvp-11',
    subjectId: 'tarix',
    grade: 8,
    text: 'Azərbaycan Xalq Cümhuriyyəti (AXC) neçənci ildə qurulmuşdur?',
    options: [
      { key: 'A', text: '28 May 1918' },
      { key: 'B', text: '18 Oktyabr 1991' },
      { key: 'C', text: '15 İyun 1993' },
      { key: 'D', text: '31 Mart 1919' }
    ],
    correctKey: 'A',
    explanation: 'AXC müsəlman Şərqində ilk parlamentli respublika olaraq 28 May 1918-ci ildə Tiflisdə elan edilmişdir.',
    difficulty: 1
  },
  {
    id: 'pvp-12',
    subjectId: 'tarix',
    grade: 10,
    text: 'Qədim Atropatena dövlətinin paytaxtı hansı şəhər olmuşdur?',
    options: [
      { key: 'A', text: 'Qəbələ' },
      { key: 'B', text: 'Qazaka' },
      { key: 'C', text: 'Bərdə' },
      { key: 'D', text: 'Şamaxı' }
    ],
    correctKey: 'B',
    explanation: 'Atropatena dövlətinin paytaxtı Qazaka (Qanzaq) şəhəri olmuşdur.',
    difficulty: 2
  },
  {
    id: 'pvp-13',
    subjectId: 'azerbaycan_dili',
    grade: 7,
    text: 'Aşağıdakı cümlələrdən hansında feili bağlama tərkibi işlənmişdir?',
    options: [
      { key: 'A', text: 'Kitab oxuyan şagirdlər uğur qazanırlar.' },
      { key: 'B', text: 'Zəng çalınanda bütün uşaqlar həyətə çıxdı.' },
      { key: 'C', text: 'Yaz gələcək, çiçəklər açacaq.' },
      { key: 'D', text: 'Oxumaq insanın dünyagörüşünü artırır.' }
    ],
    correctKey: 'B',
    explanation: '"çalınanda" sözü "-anda/-əndə" şəkilçisi qəbul etmiş feili bağlamadır.',
    difficulty: 2
  },
  {
    id: 'pvp-14',
    subjectId: 'xarici_dil',
    grade: 8,
    text: 'What is the past tense (V2) of the irregular verb "choose"?',
    options: [
      { key: 'A', text: 'Choosed' },
      { key: 'B', text: 'Chose' },
      { key: 'C', text: 'Chosen' },
      { key: 'D', text: 'Choosing' }
    ],
    correctKey: 'B',
    explanation: 'The past form of choose is "chose" (choose - chose - chosen).',
    difficulty: 2
  },
  {
    id: 'pvp-15',
    subjectId: 'informatika',
    grade: 9,
    text: '1 Kilobayt (KB) neçə bayta bərabərdir?',
    options: [
      { key: 'A', text: '1000 bayt' },
      { key: 'B', text: '1024 bayt' },
      { key: 'C', text: '512 bayt' },
      { key: 'D', text: '2048 bayt' }
    ],
    correctKey: 'B',
    explanation: 'İkilik say sistemində $1 \\text{ KB} = 2^{10} \\text{ bayt} = 1024 \\text{ bayt}$.',
    difficulty: 1
  },
  {
    id: 'pvp-16',
    subjectId: 'informatika',
    grade: 10,
    text: 'Python proqramlaşdırma dilində `len([10, 20, 30, 40])` kodunun nəticəsi nə olar?',
    options: [
      { key: 'A', text: '4' },
      { key: 'B', text: '100' },
      { key: 'C', text: '3' },
      { key: 'D', text: '40' }
    ],
    correctKey: 'A',
    explanation: '`len()` funksiyası massivdəki elementlərin sayını qaytarır, siyahıda 4 element var.',
    difficulty: 1
  },
  {
    id: 'pvp-17',
    subjectId: 'riyaziyyat',
    grade: 11,
    text: '$\\int x^2 dx$ qeyri-müəyyən inteqralı nəyə bərabərdir?',
    options: [
      { key: 'A', text: '$2x + C$' },
      { key: 'B', text: '$\\frac{x^3}{3} + C$' },
      { key: 'C', text: '$x^3 + C$' },
      { key: 'D', text: '$\\frac{x^2}{2} + C$' }
    ],
    correctKey: 'B',
    explanation: 'Qüvvətin inteqral qaydası: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$. Buradan $\\frac{x^3}{3} + C$.',
    difficulty: 2
  },
{
  "id": "pvp-18",
  "subjectId": "riyaziyyat",
  "grade": 7,
  "text": "Üçbucağın daxili bucaqlarının cəmi neçə dərəcədir?",
  "options": [
    {
      "key": "A",
      "text": "90°"
    },
    {
      "key": "B",
      "text": "180°"
    },
    {
      "key": "C",
      "text": "270°"
    },
    {
      "key": "D",
      "text": "360°"
    }
  ],
  "correctKey": "B",
  "explanation": "İxtiyari üçbucağın daxili bucaqlarının cəmi həmişə 180 dərəcədir.",
  "difficulty": 1
},
{
  "id": "pvp-19",
  "subjectId": "riyaziyyat",
  "grade": 8,
  "text": "Katetləri 3 və 4 olan düzbucaqlı üçbucağın hipotenuzu neçədir?",
  "options": [
    {
      "key": "A",
      "text": "5"
    },
    {
      "key": "B",
      "text": "6"
    },
    {
      "key": "C",
      "text": "7"
    },
    {
      "key": "D",
      "text": "25"
    }
  ],
  "correctKey": "A",
  "explanation": "Pifaqor teoreminə əsasən: c = √(3² + 4²) = √(9 + 16) = √25 = 5.",
  "difficulty": 1
},
{
  "id": "pvp-20",
  "subjectId": "fizika",
  "grade": 7,
  "text": "Maddənin vahid həcmdəki kütləsini göstərən fiziki kəmiyyət hansıdır?",
  "options": [
    {
      "key": "A",
      "text": "Çəki"
    },
    {
      "key": "B",
      "text": "Sıxlıq"
    },
    {
      "key": "C",
      "text": "Təzyiq"
    },
    {
      "key": "D",
      "text": "Qüvvə"
    }
  ],
  "correctKey": "B",
  "explanation": "Sıxlıq ρ = m/V düsturu ilə təyin olunur və vahid həcmin kütləsini bildirir.",
  "difficulty": 1
},
{
  "id": "pvp-21",
  "subjectId": "fizika",
  "grade": 8,
  "text": "Elektrik cərəyanı şiddətini ölçən cihaz hansıdır?",
  "options": [
    {
      "key": "A",
      "text": "Voltmetr"
    },
    {
      "key": "B",
      "text": "Manometr"
    },
    {
      "key": "C",
      "text": "Ampermetr"
    },
    {
      "key": "D",
      "text": "Dinamometr"
    }
  ],
  "correctKey": "C",
  "explanation": "Cərəyan şiddəti dövrəyə ardıcıl qoşulan ampermetrlə ölçülür.",
  "difficulty": 1
},
{
  "id": "pvp-22",
  "subjectId": "kimya",
  "grade": 8,
  "text": "Normal şəraitdə 1 mol qaz neçə litr həcm tutur?",
  "options": [
    {
      "key": "A",
      "text": "11.2 litr"
    },
    {
      "key": "B",
      "text": "22.4 litr"
    },
    {
      "key": "C",
      "text": "44.8 litr"
    },
    {
      "key": "D",
      "text": "1.0 litr"
    }
  ],
  "correctKey": "B",
  "explanation": "Avoqadro qanununa görə n.ş.-də 1 mol istənilən qaz 22.4 litr həcm tutur.",
  "difficulty": 1
},
{
  "id": "pvp-23",
  "subjectId": "kimya",
  "grade": 9,
  "text": "Xörək duzunun kimyəvi formulu hansıdır?",
  "options": [
    {
      "key": "A",
      "text": "NaCl"
    },
    {
      "key": "B",
      "text": "KCl"
    },
    {
      "key": "C",
      "text": "CaCl2"
    },
    {
      "key": "D",
      "text": "NaOH"
    }
  ],
  "correctKey": "A",
  "explanation": "Xörək duzu natrium-xloriddir (NaCl).",
  "difficulty": 1
},
{
  "id": "pvp-24",
  "subjectId": "biologiya",
  "grade": 8,
  "text": "İnsan bədənində ən böyük arteriya damarı hansıdır?",
  "options": [
    {
      "key": "A",
      "text": "Yuxu arteriyası"
    },
    {
      "key": "B",
      "text": "Ağciyər arteriyası"
    },
    {
      "key": "C",
      "text": "Aorta"
    },
    {
      "key": "D",
      "text": "Qapı venası"
    }
  ],
  "correctKey": "C",
  "explanation": "Aorta sol mədəcikdən başlayan ən güclü və böyük damardır.",
  "difficulty": 1
},
{
  "id": "pvp-25",
  "subjectId": "biologiya",
  "grade": 10,
  "text": "Hüceyrədə energetik stansiya rolunu oynayan orqanoid hansıdır?",
  "options": [
    {
      "key": "A",
      "text": "Ribosom"
    },
    {
      "key": "B",
      "text": "Mitoxondri"
    },
    {
      "key": "C",
      "text": "Lizosom"
    },
    {
      "key": "D",
      "text": "Vakuol"
    }
  ],
  "correctKey": "B",
  "explanation": "Mitoxondridə ATF sintez olunur və hüceyrə enerji ilə təmin edilir.",
  "difficulty": 1
},
{
  "id": "pvp-26",
  "subjectId": "cografiya",
  "grade": 6,
  "text": "Yerin öz oxu ətrafında bir tam dövrü neçə saata baş verir?",
  "options": [
    {
      "key": "A",
      "text": "12 saat"
    },
    {
      "key": "B",
      "text": "24 saat"
    },
    {
      "key": "C",
      "text": "48 saat"
    },
    {
      "key": "D",
      "text": "365 gün"
    }
  ],
  "correctKey": "B",
  "explanation": "Yer öz oxu ətrafında 24 saata (1 sutka) dövr edir və gecə-gündüz yaranır.",
  "difficulty": 1
},
{
  "id": "pvp-27",
  "subjectId": "cografiya",
  "grade": 8,
  "text": "Azərbaycan ərazisində ən yüksək dağ zirvəsi hansıdır?",
  "options": [
    {
      "key": "A",
      "text": "Şahdağ (4243 m)"
    },
    {
      "key": "B",
      "text": "Bazardüzü (4466 m)"
    },
    {
      "key": "C",
      "text": "Qapıcıq (3904 m)"
    },
    {
      "key": "D",
      "text": "Babadağ (3629 m)"
    }
  ],
  "correctKey": "B",
  "explanation": "Azərbaycanın ən uca zirvəsi Böyük Qafqaz silsiləsindəki Bazardüzüdür (4466 m).",
  "difficulty": 2
},
{
  "id": "pvp-28",
  "subjectId": "tarix",
  "grade": 8,
  "text": "Naxçıvandakı Möminə Xatun türbəsi hansı dahi memarın şah əsəridir?",
  "options": [
    {
      "key": "A",
      "text": "Əcəmi Naxçıvani"
    },
    {
      "key": "B",
      "text": "Memar Sinan"
    },
    {
      "key": "C",
      "text": "Ömər İbn Osman"
    },
    {
      "key": "D",
      "text": "Əbdülməcid Məsud"
    }
  ],
  "correctKey": "A",
  "explanation": "1186-cı ildə ucaldılan Möminə Xatun türbəsinin memarı Əcəmi Əbubəkr oğlu Naxçıvanidir.",
  "difficulty": 1
},
{
  "id": "pvp-29",
  "subjectId": "tarix",
  "grade": 11,
  "text": "Azərbaycan Xalq Cümhuriyyəti hansı tarixdə elan edilmişdir?",
  "options": [
    {
      "key": "A",
      "text": "28 may 1918"
    },
    {
      "key": "B",
      "text": "18 oktyabr 1991"
    },
    {
      "key": "C",
      "text": "15 iyun 1993"
    },
    {
      "key": "D",
      "text": "9 noyabr 1918"
    }
  ],
  "correctKey": "A",
  "explanation": "28 may 1918-ci ildə Tiflisdə İstiqlal Bəyannaməsi ilə AXC elan olundu.",
  "difficulty": 1
},
{
  "id": "pvp-30",
  "subjectId": "azerbaycan_dili",
  "grade": 6,
  "text": "Azərbaycan əlifbasında neçə sait səs var?",
  "options": [
    {
      "key": "A",
      "text": "6"
    },
    {
      "key": "B",
      "text": "8"
    },
    {
      "key": "C",
      "text": "9"
    },
    {
      "key": "D",
      "text": "32"
    }
  ],
  "correctKey": "C",
  "explanation": "Azərbaycan dilində 9 sait səs var (a, e, ə, ı, i, o, ö, u, ü).",
  "difficulty": 1
},
{
  "id": "pvp-31",
  "subjectId": "azerbaycan_dili",
  "grade": 8,
  "text": "\"Mən dünən maraqlı kitab aldım\" cümləsində \"maraqlı\" sözü hansı cümlə üzvüdür?",
  "options": [
    {
      "key": "A",
      "text": "Mübtəda"
    },
    {
      "key": "B",
      "text": "Təyin"
    },
    {
      "key": "C",
      "text": "Tamamlıq"
    },
    {
      "key": "D",
      "text": "Zərflik"
    }
  ],
  "correctKey": "B",
  "explanation": "\"Necə kitab?\" sualına cavab verir və ismi izah etdiyi üçün təyindir.",
  "difficulty": 1
},
{
  "id": "pvp-32",
  "subjectId": "xarici_dil",
  "grade": 8,
  "text": "Choose the correct preposition: \"She is interested ____ music.\"",
  "options": [
    {
      "key": "A",
      "text": "at"
    },
    {
      "key": "B",
      "text": "in"
    },
    {
      "key": "C",
      "text": "on"
    },
    {
      "key": "D",
      "text": "with"
    }
  ],
  "correctKey": "B",
  "explanation": "'To be interested in' sabit sözönü birləşməsidir.",
  "difficulty": 1
},
{
  "id": "pvp-33",
  "subjectId": "xarici_dil",
  "grade": 9,
  "text": "What is the past participle (V3) form of the irregular verb 'write'?",
  "options": [
    {
      "key": "A",
      "text": "wrote"
    },
    {
      "key": "B",
      "text": "written"
    },
    {
      "key": "C",
      "text": "writing"
    },
    {
      "key": "D",
      "text": "writed"
    }
  ],
  "correctKey": "B",
  "explanation": "Write - wrote - written qaydasız fel formasıdır.",
  "difficulty": 1
},
{
  "id": "pvp-34",
  "subjectId": "informatika",
  "grade": 7,
  "text": "1 Bayt neçə bitdən ibarətdir?",
  "options": [
    {
      "key": "A",
      "text": "2 bit"
    },
    {
      "key": "B",
      "text": "4 bit"
    },
    {
      "key": "C",
      "text": "8 bit"
    },
    {
      "key": "D",
      "text": "16 bit"
    }
  ],
  "correctKey": "C",
  "explanation": "1 Bayt = 8 bit-dir.",
  "difficulty": 1
},
{
  "id": "pvp-35",
  "subjectId": "informatika",
  "grade": 10,
  "text": "Python-da ekrana məlumat çıxarmaq üçün hansı funksiyadan istifadə edilir?",
  "options": [
    {
      "key": "A",
      "text": "input()"
    },
    {
      "key": "B",
      "text": "print()"
    },
    {
      "key": "C",
      "text": "write()"
    },
    {
      "key": "D",
      "text": "output()"
    }
  ],
  "correctKey": "B",
  "explanation": "print() funksiyası standart çıxışa (ekrana) məlumat ötürür.",
  "difficulty": 1
},
{
  "id": "pvp-m-8",
  "subjectId": "riyaziyyat",
  "question": "i^2 = -1 olarsa, (1 + i)(1 - i) hasilini hesablayın.",
  "options": [
    {
      "key": "A",
      "text": "2"
    },
    {
      "key": "B",
      "text": "0"
    },
    {
      "key": "C",
      "text": "-2"
    },
    {
      "key": "D",
      "text": "2i"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-m-9",
  "subjectId": "riyaziyyat",
  "question": "Radiusu 6 sm olan çevrənin 60 dərəcəlik mərkəzi bucağına uyğun qövsün uzunluğunu tapın.",
  "options": [
    {
      "key": "A",
      "text": "2π sm"
    },
    {
      "key": "B",
      "text": "4π sm"
    },
    {
      "key": "C",
      "text": "6π sm"
    },
    {
      "key": "D",
      "text": "π sm"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-p-7",
  "subjectId": "fizika",
  "question": "İdeal qazın izotermik genişlənməsi zamanı daxili enerjisi necə dəyişir?",
  "options": [
    {
      "key": "A",
      "text": "Dəyişmir (sabit qalır)"
    },
    {
      "key": "B",
      "text": "Artır"
    },
    {
      "key": "C",
      "text": "Azalır"
    },
    {
      "key": "D",
      "text": "Sıfra bərabər olur"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-p-8",
  "subjectId": "fizika",
  "question": "Fotoeffekt hadisəsində qopan fotoelektronların maksimal kinetik enerjisi nədən asılıdır?",
  "options": [
    {
      "key": "A",
      "text": "Düşən işığın tezliyindən"
    },
    {
      "key": "B",
      "text": "Yalnız işığın intensivliyindən"
    },
    {
      "key": "C",
      "text": "İşıqlanma müddətindən"
    },
    {
      "key": "D",
      "text": "Maddənin həcmindən"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-c-7",
  "subjectId": "kimya",
  "question": "Metanın (CH4) tam yanması zamanı hansı maddələr əmələ gəlir?",
  "options": [
    {
      "key": "A",
      "text": "CO2 və H2O"
    },
    {
      "key": "B",
      "text": "CO və H2"
    },
    {
      "key": "C",
      "text": "C və H2O"
    },
    {
      "key": "D",
      "text": "C2H2 və O2"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-c-8",
  "subjectId": "kimya",
  "question": "Dövri sistemdə ən yüksək elektromənfiliyə malik element hansıdır?",
  "options": [
    {
      "key": "A",
      "text": "Flüor (F)"
    },
    {
      "key": "B",
      "text": "Oksigen (O)"
    },
    {
      "key": "C",
      "text": "Xlor (Cl)"
    },
    {
      "key": "D",
      "text": "Fransium (Fr)"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-b-7",
  "subjectId": "biologiya",
  "question": "DNT-də adenin ilə timin arasında neçə hidrogen rabitəsi yaranır?",
  "options": [
    {
      "key": "A",
      "text": "2 rabitə"
    },
    {
      "key": "B",
      "text": "3 rabitə"
    },
    {
      "key": "C",
      "text": "1 rabitə"
    },
    {
      "key": "D",
      "text": "4 rabitə"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-b-8",
  "subjectId": "biologiya",
  "question": "Mitoz bölünmə nəticəsində bir ana hüceyrədən neçə qız hüceyrə yaranır?",
  "options": [
    {
      "key": "A",
      "text": "2 eyni hüceyrə"
    },
    {
      "key": "B",
      "text": "4 müxtəlif hüceyrə"
    },
    {
      "key": "C",
      "text": "1 iri hüceyrə"
    },
    {
      "key": "D",
      "text": "8 hüceyrə"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-i-7",
  "subjectId": "informatika",
  "question": "Sıralanmış massivdə ikilik axtarışın (Binary Search) zaman mürəkkəbliyi nə qədərdir?",
  "options": [
    {
      "key": "A",
      "text": "O(log n)"
    },
    {
      "key": "B",
      "text": "O(n)"
    },
    {
      "key": "C",
      "text": "O(n^2)"
    },
    {
      "key": "D",
      "text": "O(1)"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-i-8",
  "subjectId": "informatika",
  "question": "Python dilində siyahıya (list) yeni elementi sonuna əlavə edən metod hansıdır?",
  "options": [
    {
      "key": "A",
      "text": "append()"
    },
    {
      "key": "B",
      "text": "push()"
    },
    {
      "key": "C",
      "text": "add()"
    },
    {
      "key": "D",
      "text": "insert_last()"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-g-7",
  "subjectId": "cografiya",
  "question": "Azərbaycanın yeni inzibati bölgüsünə görə neçə iqtisadi rayon vardır?",
  "options": [
    {
      "key": "A",
      "text": "14"
    },
    {
      "key": "B",
      "text": "10"
    },
    {
      "key": "C",
      "text": "12"
    },
    {
      "key": "D",
      "text": "16"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-g-8",
  "subjectId": "cografiya",
  "question": "Şərqi Zəngəzur iqtisadi rayonuna daxil olan inzibati rayonlardan biri hansıdır?",
  "options": [
    {
      "key": "A",
      "text": "Kəlbəcər"
    },
    {
      "key": "B",
      "text": "Ağdam"
    },
    {
      "key": "C",
      "text": "Füzuli"
    },
    {
      "key": "D",
      "text": "Şuşa"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-h-7",
  "subjectId": "tarix",
  "question": "1501-ci ildə Şah İsmayıl Səfəvilər dövlətinin paytaxtı elan etdiyi şəhər hansı idi?",
  "options": [
    {
      "key": "A",
      "text": "Təbriz"
    },
    {
      "key": "B",
      "text": "Ərdəbil"
    },
    {
      "key": "C",
      "text": "Qəzvin"
    },
    {
      "key": "D",
      "text": "İsfahan"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-az-7",
  "subjectId": "azerbaycan_dili",
  "question": "'Əsgərlər cəbhədən qələbə ilə qayıtdılar' cümləsində xəbər hansı şəxsdədir?",
  "options": [
    {
      "key": "A",
      "text": "III şəxsin cəmində"
    },
    {
      "key": "B",
      "text": "III şəxsin təkində"
    },
    {
      "key": "C",
      "text": "II şəxsin cəmində"
    },
    {
      "key": "D",
      "text": "I şəxsin cəmində"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
},
{
  "id": "pvp-en-7",
  "subjectId": "ingilis_dili",
  "question": "'If I were a bird, I would fly across the oceans.' cümləsi hansı conditional tipidir?",
  "options": [
    {
      "key": "A",
      "text": "Second Conditional (Type 2)"
    },
    {
      "key": "B",
      "text": "First Conditional (Type 1)"
    },
    {
      "key": "C",
      "text": "Zero Conditional (Type 0)"
    },
    {
      "key": "D",
      "text": "Third Conditional (Type 3)"
    }
  ],
  "correctKey": "A",
  "timeSeconds": 15
}
];
