// MəktəbPlus - Nümunəvi Dərslər və Nəzəriyyə Kataloqu

export const MOCK_LESSONS = [
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
fərqinə **arqument artımı** deyilir. Buna uyğun olaraq funksiyanın artımı:
$$\\Delta y = f(x_0 + \\Delta x) - f(x_0)$$
kimi təyin olunur.

### 2. Törəmənin Tərifi
Arqument artımı sıfra yaxınlaşdıqda ($\\Delta x \\to 0$), funksiya artımının arqument artımına nisbətinin sonlu limiti varsa, bu limitə $f(x)$ funksiyasının $x_0$ nöqtəsində **törəməsi** deyilir:
$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$

### 3. Törəmənin Həndəsi Mənası
$y = f(x)$ funksiyasının qrafikinə $(x_0, f(x_0))$ nöqtəsində çəkilmiş toxunanın absis oxunun müsbət istiqaməti ilə əmələ gətirdiyi bucaq $\\alpha$ olarsa:
$$k = \\tan(\\alpha) = f'(x_0)$$
Burada $k$ toxunanın **bucaq əmsalıdır**.
Nöqtədən keçən toxunan düz xəttin tənliyi:
$$y - y_0 = f'(x_0)(x - x_0)$$
şəklində yazılır.
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
        description: 'Toxunanın absis oxu ilə əmələ gətirdiyi meyl bucağının tangensi.'
      },
      {
        id: 'f3',
        name: 'Toxunanın Tənliyi',
        latex: "y - f(x_0) = f'(x_0)(x - x_0)",
        description: 'Verilmiş (x_0, y_0) nöqtəsində çəkilən toxunanın tənliyi.'
      },
      {
        id: 'f4',
        name: 'Qüvvət Funksiyasının Törəməsi',
        latex: "(x^n)' = n \\cdot x^{n-1} \\quad (n \\in \\mathbb{R})",
        description: 'Qüvvətin dərəcəsi əmsala keçir və qüvvət vahid azalır.'
      }
    ],
    glossary: [
      {
        term: 'Arqument Artımı (\\Delta x)',
        definition: 'Arqumentin son qiyməti ilə başlanğıc qiyməti arasındakı fərq.'
      },
      {
        term: 'Bucaq Əmsalı (k)',
        definition: 'Düz xəttin absis oxunun müsbət istiqaməti ilə əmələ gətirdiyi bucağın tangensi.'
      },
      {
        term: 'Diferensiallanan Funksiya',
        definition: 'Verilmiş nöqtədə və ya aralıqda sonlu törəməsi olan funksiya.'
      }
    ],
    interactiveSim: {
      enabled: true,
      provider: 'phet',
      url: 'https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher_all.html',
      title: 'PhET: Calculus Grapher (Funksiya və Törəmə Əyriləri)',
      description: 'Funksiyanın qrafikini çəkin və onun birinci, ikinci törəmələrinin vizual formalaşmasını real vaxt rejimində izləyin.'
    },
    solvedExamples: [
      {
        id: 'ex1',
        question: '$f(x) = x^3 - 3x^2 + 5$ funksiyasının $x_0 = 2$ nöqtəsində çəkilmiş toxunanın bucaq əmsalını və tənliyini tapın.',
        solution: `
**Addım 1: Törəməni tapaq:**
$$f'(x) = (x^3 - 3x^2 + 5)' = 3x^2 - 6x$$

**Addım 2: $x_0 = 2$ nöqtəsində törəmənin qiymətini hesablayaq:**
$$k = f'(2) = 3(2)^2 - 6(2) = 12 - 12 = 0$$
Bucaq əmsalı $k = 0$-dır. Bu o deməkdir ki, toxunan absis ($Ox$) oxuna paraleldir ($\\alpha = 0^\\circ$).

**Addım 3: $x_0 = 2$ nöqtəsində funksiyanın qiymətini hesablayaq:**
$$y_0 = f(2) = 2^3 - 3(2)^2 + 5 = 8 - 12 + 5 = 1$$

**Addım 4: Toxunanın tənliyini quraq:**
$$y - y_0 = k(x - x_0) \\implies y - 1 = 0 \\cdot (x - 2) \\implies y = 1$$
**Cavab:** Bucaq əmsalı $k = 0$, toxunanın tənliyi $y = 1$.
        `
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq1',
        question: '$f(x) = 4x^2 - 5x + 7$ funksiyasının $x = 1$ nöqtəsində törəməsi neçəyə bərabərdir?',
        options: [
          { key: 'A', text: '3' },
          { key: 'B', text: '5' },
          { key: 'C', text: '8' },
          { key: 'D', text: '-1' }
        ],
        correctKey: 'A',
        explanation: "$f'(x) = 8x - 5$. $x=1$ olduqda: $f'(1) = 8(1) - 5 = 3$."
      },
      {
        questionId: 'mq2',
        question: 'Funksiyanın qrafikinə çəkilmiş toxunan $Ox$ oxu ilə $45^\\circ$ bucaq əmələ gətirirsə, toxunma nöqtəsində törəmə nəyə bərabərdir?',
        options: [
          { key: 'A', text: '0' },
          { key: 'B', text: '1' },
          { key: 'C', text: '\\sqrt{2}/2' },
          { key: 'D', text: '\\sqrt{3}' }
        ],
        correctKey: 'B',
        explanation: "$k = \\tan(45^\\circ) = 1$. Deməli törəmə $f'(x_0) = 1$-dir."
      }
    ]
  },
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
    summary: 'Təcil anlayışı, sürət və yerdəyişmə tənlikləri, sürət qrafikləri və sərbəstdüşmə hərəkəti.',
    theoryMarkdown: `
### 1. Dəyişənsürətli Hərəkət və Təcil
İxtiyari bərabər zaman fasilələrində cismin sürəti müxtəlif qədər dəyişirsə, belə hərəkətə **dəyişənsürətli hərəkət** deyilir.
Sürət dəyişməsinin bu dəyişmənin baş verdiyi zaman fasiləsinə nisbətinə bərabər olan fiziki kəmiyyətə **təcil** deyilir:
$$\\vec{a} = \\frac{\\vec{v} - \\vec{v}_0}{t}$$
Beynəlxalq Sistemdə (BS) təcilin vahidi: $[a] = \\frac{\\text{m}}{\\text{s}^2}$

### 2. Düzxətli Bərabərtəcilli Hərəkətdə Sürət
Əgər təcil vektoru sürət vektoru ilə eyni istiqamətdədirsə, hərəkət **bərabəryeyinləşən** (təcil müsbət), əks istiqamətdədirsə **bərabəryavaşıyan** (təcil mənfi) olur:
$$v = v_0 \\pm at$$

### 3. Yerdəyişmə Tənlikləri
Başlanğıc sürəti $v_0$ və təcili $a$ olan cismin $t$ müddətində icra etdiyi yerdəyişmə:
$$s = v_0 t \\pm \\frac{at^2}{2}$$
Zaman verilmədikdə son və başlanğıc sürətlər arasındakı əlaqə (zamansız düstur):
$$v^2 - v_0^2 = \\pm 2as \\implies s = \\frac{v^2 - v_0^2}{2a}$$
    `,
    keyFormulas: [
      {
        id: 'pf1',
        name: 'Təcil Düsturu',
        latex: "a = \\frac{v - v_0}{t}",
        description: 'Vahid zamandakı sürət dəyişməsi.'
      },
      {
        id: 'pf2',
        name: 'Sürət Tənliyi',
        latex: "v(t) = v_0 \\pm at",
        description: 'Bərabərtəcilli hərəkətdə anlıq sürət.'
      },
      {
        id: 'pf3',
        name: 'Yerdəyişmə Tənliyi',
        latex: "s = v_0 t \\pm \\frac{at^2}{2}",
        description: 'Düzxətli bərabərtəcilli hərəkətdə gedilən yol / yerdəyişmə.'
      },
      {
        id: 'pf4',
        name: 'Zamansız Yerdəyişmə Düsturu',
        latex: "s = \\frac{v^2 - v_0^2}{2a}",
        description: 'Zaman məlum olmadıqda sürət və təcildən asılı yerdəyişmə.'
      }
    ],
    glossary: [
      {
        term: 'Təcil (\\vec{a})',
        definition: 'Sürətin dəyişmə yeyinliyini xarakterizə edən vektor kəmiyyət.'
      },
      {
        term: 'Bərabəryeyinləşən Hərəkət',
        definition: 'İxtiyari bərabər zaman fasilələrində sürəti eyni qədər artan hərəkət (a və v eyni istiqamətdədir).'
      },
      {
        term: 'Bərabəryavaşıyan Hərəkət',
        definition: 'İxtiyari bərabər zaman fasilələrində sürəti eyni qədər azalan hərəkət (a və v əks istiqamətdədir).'
      }
    ],
    interactiveSim: {
      enabled: true,
      provider: 'phet',
      url: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html',
      title: 'PhET: Forces and Motion (Qüvvələr və Hərəkət Əsasları)',
      description: 'Sürtünmə, qüvvə və kütlə parametrlərini tənzimləyərək cismin necə təcilləndiyini və sürətləndiyini canlı təcrübədə sınaqdan keçirin.'
    },
    solvedExamples: [
      {
        id: 'pex1',
        question: 'Sükunət vəziyyətindən hərəkətə başlayan avtomobil $a = 3 \\text{ m/s}^2$ sabit təcillə 6 saniyə hərəkət edir. Bu müddətdə avtomobilin getdiyi yolu və son sürətini hesablayın.',
        solution: `
**Addım 1: Verilənləri qeyd edək:**
- Başlanğıc sürət: $v_0 = 0$ (sükunət vəziyyəti)
- Təcil: $a = 3 \\text{ m/s}^2$
- Zaman: $t = 6 \\text{ s}$

**Addım 2: Son sürəti hesablayaq:**
$$v = v_0 + at = 0 + 3 \\cdot 6 = 18 \\text{ m/s}$$

**Addım 3: Getdiyi yolu hesablayaq:**
$$s = v_0 t + \\frac{at^2}{2} = 0 + \\frac{3 \\cdot 6^2}{2} = \\frac{3 \\cdot 36}{2} = 54 \\text{ m}$$

**Cavab:** Son sürət $v = 18 \\text{ m/s}$, gedilən yol $s = 54 \\text{ m}$.
        `
      }
    ],
    miniQuiz: [
      {
        questionId: 'pmq1',
        question: 'Düzxətli bərabəryavaşıyan hərəkət edən cismin sürət tənliyi $v = 20 - 4t$ şəklindədir. Cismin dayanma müddəti nə qədərdir?',
        options: [
          { key: 'A', text: '4 s' },
          { key: 'B', text: '5 s' },
          { key: 'C', text: '10 s' },
          { key: 'D', text: '80 s' }
        ],
        correctKey: 'B',
        explanation: 'Cisim dayandıqda son sürət sıfır olur: $v = 0 \\implies 20 - 4t = 0 \\implies 4t = 20 \\implies t = 5 \\text{ s}$.'
      }
    ]
  },
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
    summary: 'Elektromənfilik, polyar və qeyri-polyar kovalent rabitə, ion rabitəsi və kristal qəfəslər.',
    theoryMarkdown: `
### 1. Kimyəvi Rabitənin Mahiyyəti
Atomlar dayanıqlı elektron konfiqurasiyasına (adətən xarici energetik səviyyədə 8 elektron - oktet qaydası) nail olmaq üçün kimyəvi rabitə əmələ gətirirlər.

### 2. Kovalent Rabitə
Ümumi elektron cütlərinin yaranması hesabına əmələ gələn rabitəyə **kovalent rabitə** deyilir:
- **Qeyri-polyar kovalent:** Eyni qeyri-metal atomları arasında yaranır (məs: $H_2, O_2, N_2, Cl_2$). Ümumi elektron cütü heç bir atoma tərəf meyil etmir.
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
      {
        term: 'Elektromənfilik',
        definition: 'Kimyəvi rabitədə atomun ümumi elektron cütünü özünə cəzb etmə qabiliyyəti.'
      }
    ],
    solvedExamples: [
      {
        id: 'cex1',
        question: '$N_2$ molekulunda azot atomları arasında neçə qat rabitə var?',
        solution: 'Azot atomunun xarici energetik təbəqəsində 5 elektron var. Oktet üçün 3 elektron çatışmır. Hər iki azot atomu 3 tək elektronunu ortaq istifadə edir və aralarında 3 ümumi elektron cütü yaranır (üçqat rabitə: $N \\equiv N$).'
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
        explanation: '$O_2$ molekulu eyni elektromənfiliyə malik iki oksigen atomundan ibarətdir, buna görə rabitə qeyri-polyar kovalentdir.'
      }
    ]
  }
];
