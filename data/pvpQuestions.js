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
  }
];
