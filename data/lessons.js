// MəktəbPlus - Genişləndirilmiş Nümunəvi Dərslər Kataloqu (Hər sinif üzrə dərslər: 5 - 11-ci siniflər)

export const MOCK_LESSONS = [
  // ==========================================
  // 5-Cİ SİNİF: RİYAZİYYAT
  // ==========================================
  {
    id: 'lesson-math-5-fractions',
    subjectId: 'riyaziyyat',
    grade: 5,
    unit: 'Adi Kəsrlər və Onlar Üzərində Əməllər',
    unitOrder: 1,
    title: 'Adi Kəsrlərin Toplanması və Çıxılması',
    order: 1,
    readTimeMinutes: 8,
    difficulty: 1,
    summary: 'Məxrəcləri eyni və müxtəlif olan adi kəsrlərin müqayisəsi, ortaq məxrəcə gətirilməsi və hesablanması.',
    theoryMarkdown: `
### 1. Kəsrin Əsas Xassəsi
Vahid bir tamın bərabər hissələrindən birini və ya bir neçəsini göstərən ədədə **adi kəsr** deyilir:
$$\\frac{a}{b} \\quad (b \\neq 0)$$
Burada $a$ kəsrin surəti, $b$ isə məxrəcidir.

Kəsrin surət və məxrəcini sıfırdan fərqli eyni bir natural ədədə vursaq və ya bölsək, kəsrin qiyməti dəyişməz:
$$\\frac{a}{b} = \\frac{a \\cdot k}{b \\cdot k} \\quad (k \\neq 0)$$

### 2. Məxrəcləri Eyni Olan Kəsrlərin Toplanması
Məxrəcləri eyni olan kəsrləri toplayarkən məxrəc olduğu kimi qalır, surətlər toplanıb surətdə yazılır:
$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$

### 3. Məxrəcləri Müxtəlif Olan Kəsrlər
Məxrəcləri müxtəlif olan kəsrləri toplamaq üçün əvvəlcə onların məxrəclərinin ƏKOB-u (ən kiçik ortaq bölünəni) tapılır və kəsrlər ortaq məxrəcə gətirilir:
$$\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$$
    `,
    keyFormulas: [
      {
        id: 'f-m5-1',
        name: 'Məxrəcləri Eyni Kəsrlərin Cəmi',
        latex: "\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}",
        description: 'Məxrəc sabit qalır, surətlər toplanır.'
      },
      {
        id: 'f-m5-2',
        name: 'Kəsrin İxtisarı',
        latex: "\\frac{a \\cdot k}{b \\cdot k} = \\frac{a}{b}",
        description: 'Surət və məxrəc eyni ortaq vuruğa bölünür.'
      }
    ],
    glossary: [
      { term: 'Surət (a)', definition: 'Kəsr xəttinin üstündə yazılan və götürülən bərabər hissələrin sayını göstərən ədəd.' },
      { term: 'Məxrəc (b)', definition: 'Tamın neçə bərabər hissəyə bölündüyünü göstərən sıfırdan fərqli ədəd.' }
    ],
    solvedExamples: [
      {
        id: 'ex-m5-1',
        question: '$\\frac{3}{8} + \\frac{1}{4}$ cəmini hesablayın.',
        solution: 'Ortaq məxrəc 8-dir. $\\frac{1}{4} = \\frac{2}{8}$. Buradan: $\\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-m5-1',
        question: '$\\frac{2}{7} + \\frac{3}{7}$ ifadəsinin qiyməti nəyə bərabərdir?',
        options: [
          { key: 'A', text: '$\\frac{5}{14}$' },
          { key: 'B', text: '$\\frac{5}{7}$' },
          { key: 'C', text: '$\\frac{6}{7}$' },
          { key: 'D', text: '1' }
        ],
        correctKey: 'B',
        explanation: 'Məxrəclər bərabər olduğu üçün surətlər toplanır: 2 + 3 = 5, yəni 5/7.'
      }
    ]
  },

  // ==========================================
  // 6-CI SİNİF: RİYAZİYYAT
  // ==========================================
  {
    id: 'lesson-math-6-integers',
    subjectId: 'riyaziyyat',
    grade: 6,
    unit: 'Tam Ədədlər və Koordinat Düz Xətti',
    unitOrder: 1,
    title: 'Mənfi və Müsbət Ədədlər. Ədədin Modulu',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 1,
    summary: 'Əks ədədlər, koordinat oxunda nöqtənin təyini, modul anlayışı və tam ədədlər üzərində əməllər.',
    theoryMarkdown: `
### 1. Tam Ədədlər Çoxluğu
Natural ədədlər, onların əksi olan mənfi ədədlər və sıfır birlikdə **tam ədədlər çoxluğunu** təşkil edir:
$$\\mathbb{Z} = \\{ \\dots, -3, -2, -1, 0, 1, 2, 3, \\dots \\}$$

### 2. Ədədin Modulu (Mütləq Qiyməti)
Koordinat düz xətti üzərində hesablama başlanğıcından (0 nöqtəsindən) verilmiş ədədə qədər olan məsafəyə həmin ədədin **modulu** deyilir və $|a|$ kimi işarə olunur.
$$|a| = \\begin{cases} a, & a \\ge 0 \\\\ -a, & a < 0 \\end{cases}$$
Məsafə mənfi ola bilmədiyi üçün ixtiyari ədədin modulu mənfi olmayan ədəddir:
$$|-7| = 7, \\quad |+5| = 5, \\quad |0| = 0$$

### 3. Mənfi Ədədlərin Toplanması və Vurulması
İki mənfi ədədi toplamaq üçün onların modulları toplanır və qarşısına mənfi işarəsi yazılır:
$$(-4) + (-6) = -(4 + 6) = -10$$
İki mənfi ədədin hasili isə müsbət ədəddir:
$$(-3) \\cdot (-5) = +15$$
    `,
    keyFormulas: [
      {
        id: 'f-m6-1',
        name: 'Modulun Tərifi',
        latex: "|-a| = |a| \\ge 0",
        description: 'Əks ədədlərin modulları bərabərdir və mənfi deyil.'
      },
      {
        id: 'f-m6-2',
        name: 'Mənfi Ədədlərin Hasili',
        latex: "(-a) \\cdot (-b) = a \\cdot b",
        description: 'Eyni işarəli iki ədədin hasili həmişə müsbətdir.'
      }
    ],
    glossary: [
      { term: 'Modul (|a|)', definition: 'Ədədin koordinat başlanğıcından məsafəsini ifadə edən qiymət.' },
      { term: 'Əks ədədlər', definition: 'Yalnız işarəsi ilə fərqlənən iki ədəd (məs: 5 və -5).' }
    ],
    solvedExamples: [
      {
        id: 'ex-m6-1',
        question: '$|-12| - |-5| + |+3|$ ifadəsini hesablayın.',
        solution: '$|-12| = 12$, $|-5| = 5$, $|3| = 3$. İfadə: $12 - 5 + 3 = 10$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-m6-1',
        question: '$(-8) \\cdot (-4)$ hasilini tapın.',
        options: [
          { key: 'A', text: '-32' },
          { key: 'B', text: '32' },
          { key: 'C', text: '-12' },
          { key: 'D', text: '12' }
        ],
        correctKey: 'B',
        explanation: 'İki mənfi ədədin hasili müsbət edir: (-8) * (-4) = +32.'
      }
    ]
  },

  // ==========================================
  // 7-Cİ SİNİF: FİZİKA
  // ==========================================
  {
    id: 'lesson-phys-7-motion',
    subjectId: 'fizika',
    grade: 7,
    unit: 'Mexaniki Hərəkət və Qarşılıqlı Təsir',
    unitOrder: 1,
    title: 'Düzxətli Bərabərsürətli Hərəkət və Sürət',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Mexaniki hərəkət anlayışı, trayektoriya, yol və yerdəyişmə, sürət düsturu və vahidləri.',
    theoryMarkdown: `
### 1. Mexaniki Hərəkət Nədir?
Zaman keçdikcə cismin fəzada digər cisimlərə nəzərən vəziyyətinin dəyişməsinə **mexaniki hərəkət** deyilir.
Cismin hərəkəti zamanı cızdığı xəttə **trayektoriya**, bu xəttin uzunluğuna isə **gedilən yol** ($l$ və ya $s$) deyilir.

### 2. Düzxətli Bərabərsürətli Hərəkət
Cisim ixtiyari bərabər zaman fasilələrində bərabər yollar qət edirsə, belə hərəkətə **düzxətli bərabərsürətli hərəkət** deyilir.
Vahid zamandakı yerdəyişməyə bərabər olan fiziki kəmiyyətə **sürət** deyilir:
$$v = \\frac{s}{t}$$
Buradan gedilən yol və zamanı tapa bilərik:
$$s = v \\cdot t, \\quad t = \\frac{s}{v}$$
BS-də sürət vahidi: $[v] = 1 \\text{ m/s}$. Praktikada həmçinin $\\text{km/saat}$ istifadə olunur:
$$1 \\text{ m/s} = 3.6 \\text{ km/saat}, \\quad 36 \\text{ km/saat} = 10 \\text{ m/s}$$
    `,
    keyFormulas: [
      {
        id: 'f-p7-1',
        name: 'Sürət Düsturu',
        latex: "v = \\frac{s}{t}",
        description: 'Gedilən yolun zamana nisbəti.'
      },
      {
        id: 'f-p7-2',
        name: 'Gedilən Yol',
        latex: "s = v \\cdot t",
        description: 'Bərabərsürətli hərəkətdə sürətin zamana hasili.'
      }
    ],
    glossary: [
      { term: 'Trayektoriya', definition: 'Hərəkət edən cismin fəzada cızdığı xəyali xətt.' },
      { term: 'Yerdəyişmə', definition: 'Hərəkətin başlanğıc və son nöqtələrini birləşdirən istiqamətlənmiş düz xətt parçası (vektorial).' }
    ],
    solvedExamples: [
      {
        id: 'ex-p7-1',
        question: 'Piyada $v = 1.5 \\text{ m/s}$ sabit sürətlə 20 saniyəyə nə qədər yol qət edər?',
        solution: '$$s = v \\cdot t = 1.5 \\text{ m/s} \\cdot 20 \\text{ s} = 30 \\text{ metr}$$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-p7-1',
        question: '$72 \\text{ km/saat}$ sürət neçə $\\text{m/s}$-yə bərabərdir?',
        options: [
          { key: 'A', text: '$15 \\text{ m/s}$' },
          { key: 'B', text: '$20 \\text{ m/s}$' },
          { key: 'C', text: '$25 \\text{ m/s}$' },
          { key: 'D', text: '$36 \\text{ m/s}$' }
        ],
        correctKey: 'B',
        explanation: '72 km/saat / 3.6 = 20 m/s.'
      }
    ]
  },

  // ==========================================
  // 8-Cİ SİNİF: BİOLOGİYA
  // ==========================================
  {
    id: 'lesson-bio-8-circulatory',
    subjectId: 'biologiya',
    grade: 8,
    unit: 'İnsan Orqanizminin Quruluşu və Funksiyaları',
    unitOrder: 1,
    title: 'Qan-Damar Sistemi və Ürəyin Quruluşu',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 2,
    summary: 'Ürəyin 4 kameralı quruluşu, böyük və kiçik qan dövranı, damarların növləri və qan qrupları.',
    theoryMarkdown: `
### 1. Ürəyin Anatomik Quruluşu
İnsan ürəyi döş qəfəsində yerləşən, təqribən yumruq böyüklüyündə əzələvi orqandır. O, arakəsmə ilə sağ və sol yarımhissələrə, hər yarımhissə isə qulaqcıq və mədəciyə bölünür:
- **Sağ qulaqcıq və sağ mədəcik** - Venoz (karbon qazı ilə zəngin) qan saxlayır.
- **Sol qulaqcıq və sol mədəcik** - Arterial (oksigenlə zəngin) qan saxlayır.

### 2. Qan Damarlarının Növləri
1. **Arteriyalar:** Qanı ürəkdən orqanlara daşıyan qalın, elastik divarlı damarlar (ən böyüyü aorta).
2. **Venalar:** Qanı orqanlardan ürəyə gətirən damarlar (daxilində qapaqlar var).
3. **Kapilyarlar:** Ən nazik damarlar (bir qat hüceyrə), qaz və maddələr mübadiləsi burada baş verir.

### 3. Böyük və Kiçik Qan Dövranı
- **Böyük qan dövranı:** Sol mədəcikdən başlayır (aorta vasitəsilə), bütün bədəni gəzərək sağ qulaqcıqda bitir.
- **Kiçik (ağciyər) qan dövranı:** Sağ mədəcikdən başlayır (ağciyər kötüyü ilə), ağciyərlərdə qaz mübadiləsi aparıb sol qulaqcıqda bitir.
    `,
    keyFormulas: [
      {
        id: 'f-b8-1',
        name: 'Ürək Dövrü',
        latex: "0.1\\text{s (qulaqcıq)} + 0.3\\text{s (mədəcik)} + 0.4\\text{s (ümumi pauza)} = 0.8\\text{s}",
        description: 'Sakit halda ürək əzələsinin bir tam yığılma-boşalma dövrü.'
      }
    ],
    glossary: [
      { term: 'Aorta', definition: 'İnsan bədənində ən böyük arteriya damarı, sol mədəcikdən başlayır.' },
      { term: 'Mioqard', definition: 'Ürəyin əsas güclü əzələ qatı.' }
    ],
    solvedExamples: [
      {
        id: 'ex-b8-1',
        question: 'Sol mədəciyin yığılması zamanı qan hansı damara qovulur?',
        solution: 'Sol mədəcik arterial qanı birbaşa ən böyük damar olan aortaya vurur və böyük qan dövranı başlayır.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-b8-1',
        question: 'Kiçik qan dövranı ürəyin hansı kamerasında başlayır?',
        options: [
          { key: 'A', text: 'Sol mədəcik' },
          { key: 'B', text: 'Sağ mədəcik' },
          { key: 'C', text: 'Sağ qulaqcıq' },
          { key: 'D', text: 'Sol qulaqcıq' }
        ],
        correctKey: 'B',
        explanation: 'Kiçik qan dövranı sağ mədəcikdən ağciyər arteriyası ilə başlayır.'
      }
    ]
  },

  // ==========================================
  // 9-CU SİNİF: KİMYA
  // ==========================================
  {
    id: 'lesson-chem-9-bonds',
    subjectId: 'kimya',
    grade: 9,
    unit: 'Kimyəvi Rabitə və Maddənin Quruluşu',
    unitOrder: 1,
    title: 'Kovalent və İon Rabitələri',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Elektromənfilik, polyar və qeyri-polyar kovalent rabitə, ion rabitəsi və oktet qaydası.',
    theoryMarkdown: `
### 1. Kimyəvi Rabitənin Mahiyyəti
Atomlar dayanıqlı elektron konfiqurasiyasına (xarici energetik səviyyədə 8 elektron - oktet qaydası) nail olmaq üçün kimyəvi rabitə əmələ gətirirlər.

### 2. Kovalent Rabitə
Ümumi elektron cütlərinin yaranması hesabına əmələ gələn rabitəyə **kovalent rabitə** deyilir:
- **Qeyri-polyar kovalent:** Eyni qeyri-metal atomları arasında yaranır (məs: $H_2, O_2, N_2, Cl_2$). Elektron cütü simmetrik paylaşılır.
- **Polyar kovalent:** Elektromənfiliyi müxtəlif olan qeyri-metallar arasında yaranır (məs: $HCl, H_2O, NH_3$). Elektron cütü elektromənfiliyi böyük olan atoma meyil edir.

### 3. İon Rabitəsi
Tipik metal və tipik qeyri-metal atomları arasında elektronların tam keçidi nəticəsində yaranan əks yüklü ionların elektrostatik cazibəsi ilə əmələ gəlir (məs: $NaCl, KBr, CaCl_2$).
    `,
    keyFormulas: [
      {
        id: 'cf1',
        name: 'Oktet Qaydası',
        latex: "s^2 p^6 \\quad (8e^-)",
        description: 'Xarici təbəqənin təsirsiz qaz konfiqurasiyasına tamamlanması.'
      }
    ],
    glossary: [
      { term: 'Elektromənfilik', definition: 'Kimyəvi rabitədə atomun ümumi elektron cütünü özünə cəzb etmə qabiliyyəti.' }
    ],
    solvedExamples: [
      {
        id: 'cex1',
        question: '$N_2$ molekulunda azot atomları arasında rabitə qatılığı neçədir?',
        solution: 'Azot atomunun xarici energetik təbəqəsində 3 tək elektron var. Hər iki azot 3 elektron cütü paylaşır və aralarında üçqat rabitə yaranır ($N \\equiv N$).'
      }
    ],
    miniQuiz: [
      {
        questionId: 'cmq1',
        question: 'Aşağıdakı maddələrdən hansında qeyri-polyar kovalent rabitə mövcuddur?',
        options: [
          { key: 'A', text: '$NaCl$' },
          { key: 'B', text: '$H_2O$' },
          { key: 'C', text: '$O_2$' },
          { key: 'D', text: '$CH_4$' }
        ],
        correctKey: 'C',
        explanation: '$O_2$ molekulu eyni elektromənfiliyə malik iki oksigen atomundan ibarətdir, buna görə qeyri-polyar kovalentdir.'
      }
    ]
  },

  // ==========================================
  // 10-CU SİNİF: RİYAZİYYAT
  // ==========================================
  {
    id: 'lesson-math-10-derivative',
    subjectId: 'riyaziyyat',
    grade: 10,
    unit: 'Riyazi Analizin Başlanğıcı',
    unitOrder: 1,
    title: 'Törəmənin Tərifi və Həndəsi Mənası',
    order: 1,
    readTimeMinutes: 12,
    difficulty: 3,
    summary: 'Arqument və funksiya artımı, törəmənin tərifi, toxunanın bucaq əmsalı və törəmə cədvəli.',
    theoryMarkdown: `
### 1. Arqument və Funksiya Artımı
Fərz edək ki, $y = f(x)$ funksiyası $(a, b)$ intervalında təyin olunub və $x_0 \\in (a, b)$.
Arqumentin $x_0$ qiymətindən fərqli $x$ qiymətinə keçdikdə:
$$\\Delta x = x - x_0 \\implies x = x_0 + \\Delta x$$
fərqinə **arqument artımı**, uyğun olaraq $\\Delta y = f(x_0 + \\Delta x) - f(x_0)$ fərqinə **funksiya artımı** deyilir.

### 2. Törəmənin Tərifi
Arqument artımı sıfra yaxınlaşdıqda ($\\Delta x \\to 0$), funksiya artımının arqument artımına nisbətinin sonlu limiti varsa, bu limitə $f(x)$ funksiyasının $x_0$ nöqtəsində **törəməsi** deyilir:
$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$

### 3. Törəmənin Həndəsi Mənası
$y = f(x)$ funksiyasının qrafikinə $(x_0, f(x_0))$ nöqtəsində çəkilmiş toxunanın absis oxunun müsbət istiqaməti ilə əmələ gətirdiyi meyl bucağı $\\alpha$ olarsa:
$$k = \\tan(\\alpha) = f'(x_0)$$
Nöqtədən keçən toxunan düz xəttin tənliyi:
$$y - y_0 = f'(x_0)(x - x_0)$$
    `,
    keyFormulas: [
      {
        id: 'f1',
        name: 'Törəmənin Tərifi',
        latex: "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x) - f(x)}{\\Delta x}",
        description: 'Funksiya artımının arqument artımına nisbətinin limiti.'
      },
      {
        id: 'f2',
        name: 'Toxunanın Bucaq Əmsalı',
        latex: "k = \\tan(\\alpha) = f'(x_0)",
        description: 'Toxunanın absis oxu ilə meyl bucağının tangensi.'
      },
      {
        id: 'f3',
        name: 'Qüvvət Funksiyasının Törəməsi',
        latex: "(x^n)' = n \\cdot x^{n-1}",
        description: 'Qüvvət əmsala keçir və qüvvət vahid azalır.'
      }
    ],
    glossary: [
      { term: 'Bucaq Əmsalı (k)', definition: 'Düz xəttin absis oxunun müsbət istiqaməti ilə əmələ gətirdiyi bucağın tangensi.' },
      { term: 'Diferensiallanan Funksiya', definition: 'Verilmiş nöqtədə və ya aralıqda sonlu törəməsi olan funksiya.' }
    ],
    solvedExamples: [
      {
        id: 'ex1',
        question: '$f(x) = x^3 - 3x^2 + 5$ funksiyasının $x_0 = 2$ nöqtəsində toxunanının bucaq əmsalını tapın.',
        solution: "$f'(x) = 3x^2 - 6x$. $x_0 = 2$ olduqda: $k = f'(2) = 3(4) - 6(2) = 12 - 12 = 0$. Toxunan Ox oxuna paraleldir."
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq1',
        question: '$f(x) = 4x^2 - 5x + 7$ funksiyasının $x = 1$ nöqtəsində törəməsi neçədir?',
        options: [
          { key: 'A', text: '3' },
          { key: 'B', text: '5' },
          { key: 'C', text: '8' },
          { key: 'D', text: '-1' }
        ],
        correctKey: 'A',
        explanation: "$f'(x) = 8x - 5$. $x=1$ olduqda: $8(1) - 5 = 3$."
      }
    ]
  },

  // ==========================================
  // 10-CU SİNİF: FİZİKA
  // ==========================================
  {
    id: 'lesson-phys-10-kinematics',
    subjectId: 'fizika',
    grade: 10,
    unit: 'Klassik Mexanika və Kinematika',
    unitOrder: 1,
    title: 'Düzxətli Dəyişənsürətli Hərəkət və Təcil',
    order: 1,
    readTimeMinutes: 14,
    difficulty: 3,
    summary: 'Təcil anlayışı, sürət və yerdəyişmə tənlikləri, zamansız düstur və qrafik təhlil.',
    theoryMarkdown: `
### 1. Dəyişənsürətli Hərəkət və Təcil
Sürət dəyişməsinin bu dəyişmənin baş verdiyi zaman fasiləsinə nisbətinə bərabər olan kəmiyyətə **təcil** deyilir:
$$\\vec{a} = \\frac{\\vec{v} - \\vec{v}_0}{t}$$
BS-də vahidi: $[a] = \\frac{\\text{m}}{\\text{s}^2}$.

### 2. Sürət və Yerdəyişmə Tənlikləri
- Bərabərtəcilli hərəkətdə son sürət:
$$v = v_0 \\pm at$$
- Gedilən yol (yerdəyişmə):
$$s = v_0 t \\pm \\frac{at^2}{2}$$
- Zaman verilmədikdə son və başlanğıc sürətlər arasındakı əlaqə:
$$v^2 - v_0^2 = 2as \\implies s = \\frac{v^2 - v_0^2}{2a}$$
    `,
    keyFormulas: [
      { id: 'pf1', name: 'Təcil Düsturu', latex: "a = \\frac{v - v_0}{t}", description: 'Vahid zamandakı sürət dəyişməsi.' },
      { id: 'pf2', name: 'Sürət Tənliyi', latex: "v = v_0 + at", description: 'Anlıq sürət.' },
      { id: 'pf3', name: 'Yerdəyişmə Tənliyi', latex: "s = v_0 t + \\frac{at^2}{2}", description: 'Bərabərtəcilli hərəkətdə yol.' }
    ],
    glossary: [
      { term: 'Təcil (a)', definition: 'Sürətin dəyişmə yeyinliyini göstərən vektor kəmiyyət.' },
      { term: 'Bərabəryeyinləşən Hərəkət', definition: 'Sürətin modulunun bərabər zamanlarda eyni qədər artdığı hərəkət.' }
    ],
    solvedExamples: [
      {
        id: 'pex1',
        question: 'Sükunət vəziyyətindən $a = 2 \\text{ m/s}^2$ təcillə hərəkətə başlayan cisim 4 saniyədə nə qədər yol gedər?',
        solution: '$s = \\frac{at^2}{2} = \\frac{2 \\cdot 4^2}{2} = 16 \\text{ metr}$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'pmq1',
        question: 'Sürət tənliyi $v = 10 + 3t$ olan cismin başlanğıc sürəti və təcili neçədir?',
        options: [
          { key: 'A', text: '$v_0 = 10, a = 3$' },
          { key: 'B', text: '$v_0 = 3, a = 10$' },
          { key: 'C', text: '$v_0 = 13, a = 1$' },
          { key: 'D', text: '$v_0 = 10, a = 0$' }
        ],
        correctKey: 'A',
        explanation: 'v = v0 + at standart tənliyi ilə müqayisədən v0 = 10 m/s, a = 3 m/s^2.'
      }
    ]
  },

  // ==========================================
  // 11-Cİ SİNİF: RİYAZİYYAT
  // ==========================================
  {
    id: 'lesson-math-11-integral',
    subjectId: 'riyaziyyat',
    grade: 11,
    unit: 'İnteqral Hesabı və Tətbiqləri',
    unitOrder: 1,
    title: 'İbtidai Funksiya və Müəyyən İnteqral',
    order: 1,
    readTimeMinutes: 13,
    difficulty: 4,
    summary: 'İbtidai funksiyanın tərifi, qeyri-müəyyən inteqral xassələri və Nyuton-Leybnits düsturu ilə əyrixətli trapesiyanın sahəsi.',
    theoryMarkdown: `
### 1. İbtidai Funksiya və Qeyri-müəyyən İnteqral
Verilmiş aralıqda $F'(x) = f(x)$ şərti ödənərsə, $F(x)$ funksiyasına $f(x)$ funksiyasının **ibtidai funksiyası** deyilir.
Funksiyanın bütün ibtidai funksiyaları çoxluğuna onun **qeyri-müəyyən inteqralı** deyilir:
$$\\int f(x) dx = F(x) + C \\quad (C = \\text{const})$$

Əsas inteqral düsturu:
$$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

### 2. Nyuton-Leybnits Düsturu (Müəyyən İnteqral)
Əgər $f(x)$ funksiyası $[a, b]$ parçasında kəsilməzdirsə və $F(x)$ onun ibtidai funksiyasıdırsa:
$$\\int_a^b f(x) dx = F(x)\\Big|_a^b = F(b) - F(a)$$

### 3. Əyrixətli Trapesiyanın Sahəsi
Yuxarıdan $y = f(x)$ ($f(x) \\ge 0$), aşağıdan $Ox$ oxu, soldan və sağdan $x=a, x=b$ düz xətləri ilə hüdudlanmış fiqurun sahəsi:
$$S = \\int_a^b f(x) dx$$
    `,
    keyFormulas: [
      {
        id: 'f-m11-1',
        name: 'Nyuton-Leybnits Düsturu',
        latex: "\\int_a^b f(x) dx = F(b) - F(a)",
        description: 'Müəyyən inteqralın hesablanmasının əsas düsturu.'
      },
      {
        id: 'f-m11-2',
        name: 'Qüvvətin İnteqralı',
        latex: "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C",
        description: 'Qüvvət vahid artır və yeni qüvvətə bölünür.'
      }
    ],
    glossary: [
      { term: 'İbtidai Funksiya', definition: 'Törəməsi verilmiş funksiyaya bərabər olan funksiya.' },
      { term: 'Müəyyən İnteqral', definition: 'İnteqral cəmlərinin limiti və həndəsi olaraq əyrinin altındakı sahə.' }
    ],
    solvedExamples: [
      {
        id: 'ex-m11-1',
        question: '$\\int_0^3 x^2 dx$ müəyyən inteqralını hesablayın.',
        solution: '$$\\int_0^3 x^2 dx = \\frac{x^3}{3}\\Big|_0^3 = \\frac{3^3}{3} - \\frac{0^3}{3} = \\frac{27}{3} = 9$$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-m11-1',
        question: '$\\int 2x dx$ qeyri-müəyyən inteqralı nəyə bərabərdir?',
        options: [
          { key: 'A', text: '$x^2 + C$' },
          { key: 'B', text: '$2x^2 + C$' },
          { key: 'C', text: '$2 + C$' },
          { key: 'D', text: '$\\frac{x^2}{2} + C$' }
        ],
        correctKey: 'A',
        explanation: '2 * (x^2 / 2) + C = x^2 + C.'
      }
    ]
  }
];
