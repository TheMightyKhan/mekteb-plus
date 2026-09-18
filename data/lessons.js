// MəktəbPlus - Bütün Fənlər və Siniflər Üzrə Genişləndirilmiş Dərslər Kataloqu
// 9 Fənn: Riyaziyyat, Fizika, Kimya, Biologiya, Coğrafiya, Tarix, Azərbaycan dili, İngilis dili, İnformatika
// Bütün Siniflər: 5, 6, 7, 8, 9, 10, 11

export const MOCK_LESSONS = [
  // ==========================================
  // 1. RİYAZİYYAT - 5-Cİ SİNİF
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
Məxrəcləri müxtəlif olan kəsrləri toplamaq üçün əvvəlcə onların məxrəclərinin ƏKOB-u tapılır və kəsrlər ortaq məxrəcə gətirilir:
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
  // 2. RİYAZİYYAT - 6-CI SİNİF
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
Koordinat düz xətti üzərində hesablama başlanğıcından (0 nöqtəsindən) verilmiş ədədə qədər olan məsafəyə həmin ədədin **modulu** deyilir:
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
  // 3. RİYAZİYYAT - 7-Cİ SİNİF
  // ==========================================
  {
    id: 'lesson-math-7-multiplication-formulas',
    subjectId: 'riyaziyyat',
    grade: 7,
    unit: 'Çoxhədlilər və Cəbri İfadələrin Şəkildəyişməsi',
    unitOrder: 1,
    title: 'Müxtəsər Vurma Düsturları',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'İki ifadənin cəminin və fərqinin kvadratı, kvadratlar fərqi, kublar cəmi və vuruqlara ayırma.',
    theoryMarkdown: `
### 1. Cəmin və Fərqin Kvadratı
İki ifadənin cəminin kvadratı: birinci ifadənin kvadratı, üstəgəl onların hasilinin iki misli, üstəgəl ikinci ifadənin kvadratına bərabərdir:
$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$

### 2. Kvadratlar Fərqi Düsturu
İki ədədin kvadratları fərqi onların fərqi ilə cəminin hasilinə bərabərdir:
$$a^2 - b^2 = (a - b)(a + b)$$

### 3. Kublar Cəmi və Fərqi
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$
    `,
    keyFormulas: [
      { id: 'f-m7-1', name: 'Cəmin Kvadratı', latex: "(a+b)^2 = a^2 + 2ab + b^2", description: 'İki həddin cəminin kvadratı.' },
      { id: 'f-m7-2', name: 'Kvadratlar Fərqi', latex: "a^2 - b^2 = (a-b)(a+b)", description: 'Fərq ilə cəmin hasili.' }
    ],
    glossary: [
      { term: 'Müxtəsər vurma', definition: 'Çoxhədliləri bir-birinə tez və standart qaydada vurmaq üçün istifadə edilən eyniliklər.' }
    ],
    solvedExamples: [
      {
        id: 'ex-m7-1',
        question: '$51^2 - 49^2$ fərqini şifahi hesablayın.',
        solution: '$a^2 - b^2 = (a-b)(a+b)$ düsturuna əsasən: $(51 - 49)(51 + 49) = 2 \\cdot 100 = 200$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-m7-1',
        question: '$(x - 4)^2$ ifadəsinin açılışı necədir?',
        options: [
          { key: 'A', text: '$x^2 - 16$' },
          { key: 'B', text: '$x^2 - 8x + 16$' },
          { key: 'C', text: '$x^2 - 4x + 16$' },
          { key: 'D', text: '$x^2 + 8x + 16$' }
        ],
        correctKey: 'B',
        explanation: '(x - 4)^2 = x^2 - 2*(x)*(4) + 4^2 = x^2 - 8x + 16.'
      }
    ]
  },

  // ==========================================
  // 4. RİYAZİYYAT - 8-Cİ SİNİF
  // ==========================================
  {
    id: 'lesson-math-8-quadratic',
    subjectId: 'riyaziyyat',
    grade: 8,
    unit: 'Kvadrat Tənliklər və Tətbiqləri',
    unitOrder: 1,
    title: 'Kvadrat Tənliyin Kök Düsturu və Viyet Teoremi',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 2,
    summary: 'Diskriminant, köklərin tapılması düsturu, natamam kvadrat tənliklər və köklər cəmi/hasili (Viyet teoremi).',
    theoryMarkdown: `
### 1. Kvadrat Tənliyin Ümumi Şəkli
$$ax^2 + bx + c = 0 \\quad (a \\neq 0)$$
Burada $a$ birinci əmsal, $b$ ikinci əmsal, $c$ sərbəst həddir.

### 2. Diskriminant və Köklər
$$D = b^2 - 4ac$$
- **$D > 0$ olduqda:** Tənliyin iki müxtəlif həqiqi kökü var:
  $$x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$$
- **$D = 0$ olduqda:** Tənliyin bir-birinə bərabər iki kökü var ($x_1 = x_2 = -\\frac{b}{2a}$).
- **$D < 0$ olduqda:** Həqiqi kökləri yoxdur.

### 3. Viyet Teoremi
Gətirilmiş kvadrat tənlikdə ($x^2 + px + q = 0$):
$$x_1 + x_2 = -p, \\quad x_1 \\cdot x_2 = q$$
    `,
    keyFormulas: [
      { id: 'f-m8-1', name: 'Diskriminant Düsturu', latex: "D = b^2 - 4ac", description: 'Kökün sayını təyin edən kəmiyyət.' },
      { id: 'f-m8-2', name: 'Viyet Teoremi', latex: "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}", description: 'Köklər ilə əmsallar arasındakı əlaqə.' }
    ],
    glossary: [
      { term: 'Diskriminant (D)', definition: 'Kvadrat tənliyin həqiqi köklərinin sayını və xarakterini müəyyən edən ifadə.' }
    ],
    solvedExamples: [
      {
        id: 'ex-m8-1',
        question: '$x^2 - 7x + 10 = 0$ tənliyinin köklərini Viyet teoremi ilə tapın.',
        solution: '$x_1 + x_2 = 7$ və $x_1 \\cdot x_2 = 10$. Hasili 10, cəmi 7 olan ədədlər 2 və 5-dir. Köklər: $x_1 = 2, x_2 = 5$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-m8-1',
        question: '$2x^2 - 4x - 6 = 0$ tənliyinin diskriminantı ($D$) neçədir?',
        options: [
          { key: 'A', text: '16' },
          { key: 'B', text: '64' },
          { key: 'C', text: '-32' },
          { key: 'D', text: '48' }
        ],
        correctKey: 'B',
        explanation: 'D = b^2 - 4ac = (-4)^2 - 4*(2)*(-6) = 16 + 48 = 64.'
      }
    ]
  },

  // ==========================================
  // 5. RİYAZİYYAT - 10-CU SİNİF
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
Arqument artımı sıfra yaxınlaşdıqda ($\\Delta x \\to 0$), funksiya artımının arqument artımına nisbətinin sonlu limiti varsa:
$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$

### 3. Törəmənin Həndəsi Mənası
$y = f(x)$ funksiyasının qrafikinə $(x_0, f(x_0))$ nöqtəsində çəkilmiş toxunanın absis oxu ilə əmələ gətirdiyi meyl bucağı $\\alpha$ olarsa:
$$k = \\tan(\\alpha) = f'(x_0)$$
Toxunan düz xəttin tənliyi:
$$y - y_0 = f'(x_0)(x - x_0)$$
    `,
    keyFormulas: [
      { id: 'f1', name: 'Törəmənin Tərifi', latex: "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x) - f(x)}{\\Delta x}", description: 'Funksiya artımının arqument artımına nisbətinin limiti.' },
      { id: 'f2', name: 'Toxunanın Bucaq Əmsalı', latex: "k = \\tan(\\alpha) = f'(x_0)", description: 'Toxunanın absis oxu ilə meyl bucağının tangensi.' },
      { id: 'f3', name: 'Qüvvət Funksiyasının Törəməsi', latex: "(x^n)' = n \\cdot x^{n-1}", description: 'Qüvvət əmsala keçir və vahid azalır.' }
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
  // 6. RİYAZİYYAT - 11-Cİ SİNİF
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
$$\\int f(x) dx = F(x) + C \\quad (C = \\text{const})$$

Əsas inteqral düsturu:
$$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

### 2. Nyuton-Leybnits Düsturu
$$\\int_a^b f(x) dx = F(x)\\Big|_a^b = F(b) - F(a)$$

### 3. Əyrixətli Trapesiyanın Sahəsi
Yuxarıdan $y = f(x)$ ($f(x) \\ge 0$), aşağıdan $Ox$ oxu, soldan və sağdan $x=a, x=b$ düz xətləri ilə hüdudlanmış fiqurun sahəsi:
$$S = \\int_a^b f(x) dx$$
    `,
    keyFormulas: [
      { id: 'f-m11-1', name: 'Nyuton-Leybnits Düsturu', latex: "\\int_a^b f(x) dx = F(b) - F(a)", description: 'Müəyyən inteqralın hesablanmasının əsas düsturu.' },
      { id: 'f-m11-2', name: 'Qüvvətin İnteqralı', latex: "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C", description: 'Qüvvət vahid artır və yeni qüvvətə bölünür.' }
    ],
    glossary: [
      { term: 'İbtidai Funksiya', definition: 'Törəməsi verilmiş funksiyaya bərabər olan funksiya.' },
      { term: 'Müəyyən İnteqral', definition: 'İnteqral cəmlərinin limiti və həndəsi olaraq əyrinin altındakı sahə.' }
    ],
    solvedExamples: [
      {
        id: 'ex-m11-1',
        question: '$\\int_0^3 x^2 dx$ müəyyən inteqralını hesablayın.',
        solution: '$$\\int_0^3 x^2 dx = \\frac{x^3}{3}\\Big|_0^3 = \\frac{3^3}{3} - \\frac{0^3}{3} = 9$$.'
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
  },

  // ==========================================
  // 7. FİZİKA - 7-Cİ SİNİF
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
Cismin hərəkəti zamanı cızdığı xəttə **trayektoriya**, bu xəttin uzunluğuna isə **gedilən yol** ($s$) deyilir.

### 2. Düzxətli Bərabərsürətli Hərəkət
Cisim bərabər zaman fasilələrində bərabər yollar qət edirsə:
$$v = \\frac{s}{t}$$
Buradan: $s = v \\cdot t, \\quad t = \\frac{s}{v}$
BS-də vahidi: $[v] = 1 \\text{ m/s}$. Əlaqə: $1 \\text{ m/s} = 3.6 \\text{ km/saat}$.
    `,
    keyFormulas: [
      { id: 'f-p7-1', name: 'Sürət Düsturu', latex: "v = \\frac{s}{t}", description: 'Gedilən yolun zamana nisbəti.' },
      { id: 'f-p7-2', name: 'Gedilən Yol', latex: "s = v \\cdot t", description: 'Bərabərsürətli hərəkətdə sürətin zamana hasili.' }
    ],
    glossary: [
      { term: 'Trayektoriya', definition: 'Hərəkət edən cismin fəzada cızdığı xəyali xətt.' },
      { term: 'Yerdəyişmə', definition: 'Başlanğıc və son nöqtələri birləşdirən istiqamətlənmiş düz xətt parçası.' }
    ],
    solvedExamples: [
      {
        id: 'ex-p7-1',
        question: 'Piyada $v = 1.5 \\text{ m/s}$ sürətlə 20 saniyəyə nə qədər yol qət edər?',
        solution: '$$s = v \\cdot t = 1.5 \\cdot 20 = 30 \\text{ metr}$$.'
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
        explanation: '72 / 3.6 = 20 m/s.'
      }
    ]
  },

  // ==========================================
  // 8. FİZİKA - 8-Cİ SİNİF
  // ==========================================
  {
    id: 'lesson-phys-8-heat',
    subjectId: 'fizika',
    grade: 8,
    unit: 'İstilik Hadisələri və Daxili Enerji',
    unitOrder: 1,
    title: 'İstilik Miqdarı və Xüsusi İstilik Tutumu',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 2,
    summary: 'Daxili enerjinin dəyişmə üsulları, istilikvermə növləri və istilik miqdarının hesablanması düsturları.',
    theoryMarkdown: `
### 1. Daxili Enerji və İstilikvermə
Cismi təşkil edən zərrəciklərin hərəkət və qarşılıqlı təsir enerjilərinin cəminə **daxili enerji** deyilir.
İstilikvermənin 3 növü var:
1. **İstilikkeçirmə:** Zərrəciklərin bir-birinə toxunması ilə enerjinin ötürülməsi (metallarda ən yüksəkdir).
2. **Konveksiya:** Maye və qaz laylarının axınları ilə istiliyin daşınması.
3. **Şüalanma:** İstiliyin elektromaqnit dalğaları vasitəsilə (hətta vakuumda da) yayılması.

### 2. İstilik Miqdarının Hesablanması
Cismi qızdırdıqda udulan və ya soyutduqda ayrılan istilik miqdarı:
$$Q = c \\cdot m \\cdot (t_2 - t_1) = c \\cdot m \\cdot \\Delta t$$
Burada $c$ maddənin **xüsusi istilik tutumudur** (vahidi: $\\frac{\\text{C}}{\\text{kq} \\cdot ^\\circ\\text{C}}$), $m$ kütlədir.
    `,
    keyFormulas: [
      { id: 'f-p8-1', name: 'İstilik Miqdarı', latex: "Q = c \\cdot m \\cdot \\Delta t", description: 'Qızma/soyuma zamanı istilik miqdarı.' },
      { id: 'f-p8-2', name: 'Yanacağın Yanma İstiliyi', latex: "Q = q \\cdot m", description: 'Yanacaq tam yandıqda ayrılan enerji.' }
    ],
    glossary: [
      { term: 'Xüsusi istilik tutumu (c)', definition: '1 kq maddənin temperaturunu 1 dərəcə artırmaq üçün tələb olunan istilik miqdarı.' }
    ],
    solvedExamples: [
      {
        id: 'ex-p8-1',
        question: 'Kütləsi $2 \\text{ kq}$ olan suyun temperaturunu $20^\\circ\\text{C}$-dən $50^\\circ\\text{C}$-yə qədər artırmaq üçün nə qədər istilik lazımdır? ($c_{su} = 4200 \\text{ C/(kq}\\cdot^\\circ\\text{C)}$)',
        solution: '$Q = 4200 \\cdot 2 \\cdot (50 - 20) = 4200 \\cdot 2 \\cdot 30 = 252\\,000 \\text{ C} = 252 \\text{ kC}$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-p8-1',
        question: 'İstiliyin vakuumda yayılması hansı istilikvermə növü ilə mümkündür?',
        options: [
          { key: 'A', text: 'Yalnız konveksiya' },
          { key: 'B', text: 'Yalnız istilikkeçirmə' },
          { key: 'C', text: 'Şüalanma' },
          { key: 'D', text: 'Vakuumda heç cür yayıla bilməz' }
        ],
        correctKey: 'C',
        explanation: 'Şüalanma elektromaqnit dalğaları vasitəsilə maddəsiz mühitdə (vakuumda) belə yayılır (məsələn, Günəş şüaları).'
      }
    ]
  },

  // ==========================================
  // 9. FİZİKA - 9-CU SİNİF
  // ==========================================
  {
    id: 'lesson-phys-9-gravity',
    subjectId: 'fizika',
    grade: 9,
    unit: 'Qravitasiya Sahəsi və Qanunları',
    unitOrder: 1,
    title: 'Nyutonun Ümumdünya Cazibə Qanunu',
    order: 1,
    readTimeMinutes: 12,
    difficulty: 3,
    summary: 'Qravitasiya qarşılıqlı təsiri, cazibə qüvvəsinin kütlələrdən və məsafədən asılılığı, sərbəstdüşmə təcili.',
    theoryMarkdown: `
### 1. Ümumdünya Cazibə Qanunu
Kainatdakı bütün cisimlər bir-birini kütlələrinin hasili ilə düz, aralarındakı məsafənin kvadratı ilə tərs mütənasib olan qüvvə ilə cəzb edir:
$$F = G \\frac{m_1 \\cdot m_2}{R^2}$$
Burada $G = 6.67 \\cdot 10^{-11} \\frac{\\text{N} \\cdot \\text{m}^2}{\\text{kq}^2}$ qravitasiya sabitidir.

### 2. Sərbəstdüşmə Təcili ($g$)
Yerin səthində kütləsi $M$ olan planetin yaratdığı cazibə təcili:
$$g = \\frac{GM}{R^2} \\approx 9.8 \\text{ m/s}^2$$
Hündürlüyə qalxdıqca məsafə artdığı üçün təcil azalır:
$$g_h = \\frac{GM}{(R + h)^2}$$
    `,
    keyFormulas: [
      { id: 'f-p9-1', name: 'Ümumdünya Cazibə Qanunu', latex: "F = G \\frac{m_1 m_2}{R^2}", description: 'Cisimlər arasındakı cazibə qüvvəsi.' },
      { id: 'f-p9-2', name: 'Qravitasiya Təcili', latex: "g = \\frac{GM}{R^2}", description: 'Planet səthində sərbəstdüşmə təcili.' }
    ],
    glossary: [
      { term: 'Qravitasiya sabiti (G)', definition: 'Kütlələri 1 kq olan iki maddi nöqtənin 1 metr məsafədən bir-birini cəzb etdiyi qüvvəyə bərabər fundamental sabit.' }
    ],
    solvedExamples: [
      {
        id: 'ex-p9-1',
        question: 'İki cisim arasındakı məsafə 3 dəfə artarsa, aralarındakı cazibə qüvvəsi necə dəyişər?',
        solution: 'Cazibə qüvvəsi məsafənin kvadratı ilə tərs mütənasibdir ($F \\sim 1/R^2$). Məsafə 3 dəfə artarsa, qüvvə $3^2 = 9$ dəfə azalar.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-p9-1',
        question: 'Cismin kütlələrindən biri 2 dəfə artırılsa, cazibə qüvvəsi necə dəyişər?',
        options: [
          { key: 'A', text: '4 dəfə artar' },
          { key: 'B', text: '2 dəfə artar' },
          { key: 'C', text: 'Dəyişməz' },
          { key: 'D', text: '2 dəfə azar' }
        ],
        correctKey: 'B',
        explanation: 'Qüvvə kütlələrin hasili ilə düz mütənasibdir. Kütlə 2 dəfə artdıqda qüvvə də 2 dəfə artır.'
      }
    ]
  },

  // ==========================================
  // 10. FİZİKA - 10-CU SİNİF
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
- Bərabərtəcilli hərəkətdə anlıq sürət:
$$v = v_0 \\pm at$$
- Gedilən yol (yerdəyişmə):
$$s = v_0 t \\pm \\frac{at^2}{2}$$
- Zamansız sürət düsturu:
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
        explanation: 'v = v0 + at tənliyi ilə müqayisədən v0 = 10 m/s, a = 3 m/s^2.'
      }
    ]
  },

  // ==========================================
  // 11. KİMYA - 8-Cİ SİNİF
  // ==========================================
  {
    id: 'lesson-chem-8-amount',
    subjectId: 'kimya',
    grade: 8,
    unit: 'Kimyanın Əsas Stexiometrik Qanunları',
    unitOrder: 1,
    title: 'Maddə Miqdarı. Molyar Kütlə və Avoqadro Qanunu',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Mol anlayışı, Avoqadro sabiti, molyar kütlə və normal şəraitdə qazların molyar həcmi düsturları.',
    theoryMarkdown: `
### 1. Maddə Miqdarı və Mol
Maddəni təşkil edən zərrəciklərin (atom, molekul) sayını xarakterizə edən kəmiyyətə **maddə miqdarı** deyilir və $n$ (və ya $\\nu$) ilə işarə olunur. Vahidi **moldur**.
1 mol maddədə $N_A = 6.02 \\cdot 10^{23}$ sayda zərrəcik var (Avoqadro sabiti).

### 2. Molyar Kütlə ($M$)
1 mol maddənin kütləsinə **molyar kütlə** deyilir:
$$M = \\frac{m}{n} \\quad [M] = \\text{q/mol}$$

### 3. Avoqadro Qanunu və Qazların Molyar Həcmi
Eyni şəraitdə (eyni temperatur və təzyiqdə) müxtəlif qazların bərabər həcmlərində bərabər sayda molekul olur.
Normal şəraitdə (n.ş. $T=0^\\circ\\text{C}, P=101.3 \\text{ kPa}$) istənilən qazın 1 molu $V_m = 22.4 \\text{ litr}$ həcm tutur:
$$n = \\frac{m}{M} = \\frac{N}{N_A} = \\frac{V}{V_m}$$
    `,
    keyFormulas: [
      { id: 'f-c8-1', name: 'Maddə Miqdarı Düsturu', latex: "n = \\frac{m}{M} = \\frac{N}{N_A} = \\frac{V}{V_m}", description: 'Mol, kütlə, zərrəcik sayı və həcm əlaqəsi.' },
      { id: 'f-c8-2', name: 'Molyar Həcm', latex: "V_m = 22.4 \\text{ l/mol (n.ş.)}", description: 'Normal şəraitdə qazların 1 molunun həcmi.' }
    ],
    glossary: [
      { term: 'Avoqadro sabiti (N_A)', definition: '1 mol maddədə olan struktur zərrəciklərin sayı ($6.02 \\cdot 10^{23}$).' },
      { term: 'Normal şərait (n.ş.)', definition: 'Temperaturun 0°C və təzyiqin 1 atmosfer olduğu fiziki şərait.' }
    ],
    solvedExamples: [
      {
        id: 'ex-c8-1',
        question: 'Normal şəraitdə $44.8 \\text{ litr}$ $CO_2$ qazı neçə moldur?',
        solution: '$$n = \\frac{V}{V_m} = \\frac{44.8}{22.4} = 2 \\text{ mol}$$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-c8-1',
        question: '0.5 mol oksigen qazı ($O_2$) neçə qramdır? ($M(O_2) = 32 \\text{ q/mol}$)',
        options: [
          { key: 'A', text: '16 qram' },
          { key: 'B', text: '32 qram' },
          { key: 'C', text: '64 qram' },
          { key: 'D', text: '8 qram' }
        ],
        correctKey: 'A',
        explanation: 'm = n * M = 0.5 mol * 32 q/mol = 16 qram.'
      }
    ]
  },

  // ==========================================
  // 12. KİMYA - 9-CU SİNİF
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
- **Polyar kovalent:** Elektromənfiliyi müxtəlif olan qeyri-metallar arasında yaranır (məs: $HCl, H_2O, NH_3$).

### 3. İon Rabitəsi
Tipik metal və tipik qeyri-metal atomları arasında elektronların tam keçidi nəticəsində yaranan əks yüklü ionların elektrostatik cazibəsi ilə əmələ gəlir (məs: $NaCl, KBr, CaCl_2$).
    `,
    keyFormulas: [
      { id: 'cf1', name: 'Oktet Qaydası', latex: "s^2 p^6 \\quad (8e^-)", description: 'Xarici təbəqənin təsirsiz qaz konfiqurasiyasına tamamlanması.' }
    ],
    glossary: [
      { term: 'Elektromənfilik', definition: 'Kimyəvi rabitədə atomun ümumi elektron cütünü özünə cəzb etmə qabiliyyəti.' }
    ],
    solvedExamples: [
      {
        id: 'cex1',
        question: '$N_2$ molekulunda azot atomları arasında rabitə qatılığı neçədir?',
        solution: 'Azot atomunun xarici təbəqəsində 3 tək elektron var. Hər iki azot 3 elektron cütü paylaşır və aralarında üçqat rabitə yaranır ($N \\equiv N$).'
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
  // 13. BİOLOGİYA - 8-Cİ SİNİF
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
İnsan ürəyi arakəsmə ilə sağ və sol yarımhissələrə, hər yarımhissə isə qulaqcıq və mədəciyə bölünür:
- **Sağ qulaqcıq və sağ mədəcik:** Venoz (karbon qazı ilə zəngin) qan saxlayır.
- **Sol qulaqcıq və sol mədəcik:** Arterial (oksigenlə zəngin) qan saxlayır.

### 2. Qan Damarlarının Növləri
1. **Arteriyalar:** Qanı ürəkdən orqanlara daşıyan qalın, elastik divarlı damarlar (ən böyüyü aorta).
2. **Venalar:** Qanı orqanlardan ürəyə gətirən damarlar (daxilində geriyə axını önləyən qapaqlar var).
3. **Kapilyarlar:** Ən nazik damarlar (bir qat epitel hüceyrəsi), qaz və qida mübadiləsi burada baş verir.

### 3. Böyük və Kiçik Qan Dövranı
- **Böyük qan dövranı:** Sol mədəcikdən başlayır (aorta ilə), bütün bədəni təmin edərək sağ qulaqcıqda bitir.
- **Kiçik (ağciyər) qan dövranı:** Sağ mədəcikdən başlayır (ağciyər arteriyası ilə), ağciyərlərdə oksigenlə zənginləşib sol qulaqcıqda bitir.
    `,
    keyFormulas: [
      { id: 'f-b8-1', name: 'Ürək Dövrü', latex: "0.1\\text{s} + 0.3\\text{s} + 0.4\\text{s} = 0.8\\text{s}", description: 'Qulaqcıqların yığılması (0.1s) + mədəciklərin yığılması (0.3s) + ümumi pauza (0.4s).' }
    ],
    glossary: [
      { term: 'Aorta', definition: 'İnsan bədənində ən böyük arteriya damarı, sol mədəcikdən başlayır.' },
      { term: 'Mioqard', definition: 'Ürəyin əsas güclü eninəzolaqlı əzələ qatı.' }
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
  // 14. BİOLOGİYA - 9-CU SİNİF
  // ==========================================
  {
    id: 'lesson-bio-9-genetics',
    subjectId: 'biologiya',
    grade: 9,
    unit: 'Genetika və İrsiyyət Qanunauyğunluqları',
    unitOrder: 1,
    title: 'Mendel Qanunları: Monohibrid Çarpazlaşma',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 3,
    summary: 'Genotip və fenotip, dominant və resessiv allellər, Mendelin birinci (eynicinslilik) və ikinci (parçalanma) qanunu.',
    theoryMarkdown: `
### 1. Əsas Genetik Anlayışlar
- **Gen:** İrsi əlamətin inkişafını təyin edən DNT sahəsi.
- **Allel genlər:** Homoloji xromosomların eyni sahələrində yerləşən və alternativ əlamətləri təyin edən genlər ($A$ və ya $a$).
- **Dominant əlamət ($A$):** Birinci nəsildə özünü biruzə verən üstün əlamət (məs: sarı noxud).
- **Resessiv əlamət ($a$):** Dominant tərəfindən gizlədilən əlamət (məs: yaşıl noxud).

### 2. Mendelin I Qanunu (Hibridlərin Eynicinsliliyi)
Dominant və resessiv təmiz xətlərin çarpazlaşmasından alınan birinci nəsil ($F_1$) hibridləri genotip və fenotipcə eynicinsli olur:
$$P: AA \\times aa \\implies F_1: Aa \\quad (100\\% \\text{ sarı})$$

### 3. Mendelin II Qanunu (Əlamətlərin Parçalanması)
$F_1$ nəsli öz aralarında çarpazlaşdıqda ($Aa \\times Aa$), $F_2$ nəslində parçalanma baş verir:
- **Fenotip üzrə nisbət:** $3 : 1$ (üç sarı, bir yaşıl)
- **Genotip üzrə nisbət:** $1AA : 2Aa : 1aa \\implies 1 : 2 : 1$
    `,
    keyFormulas: [
      { id: 'f-bio9-1', name: 'Monohibrid Parçalanma', latex: "3:1 \\text{ (Fenotip)}, \\quad 1:2:1 \\text{ (Genotip)}", description: 'İkinci nəsil hibridlərində parçalanma nisbətləri.' }
    ],
    glossary: [
      { term: 'Fenotip', definition: 'Orqanizmin bütün xarici və daxili əlamətlərinin cəmi.' },
      { term: 'Genotip', definition: 'Orqanizmin valideynlərdən aldığı genlərin cəmi.' }
    ],
    solvedExamples: [
      {
        id: 'ex-bio9-1',
        question: 'Heteroziqot sarı noxud ($Aa$) ilə yaşıl noxudun ($aa$) çarpazlaşmasından hansı fenotipik nəsil alınar?',
        solution: '$Aa \\times aa \\implies 50\\% Aa$ (sarı) və $50\\% aa$ (yaşıl). Nisbət $1 : 1$-dir.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-bio9-1',
        question: 'İki heteroziqot orqanizmin ($Aa \\times Aa$) çarpazlaşmasından homoziqot resessiv fərdlərin ($aa$) yaranma ehtimalı neçə faizdir?',
        options: [
          { key: 'A', text: '25%' },
          { key: 'B', text: '50%' },
          { key: 'C', text: '75%' },
          { key: 'D', text: '100%' }
        ],
        correctKey: 'A',
        explanation: 'Genotip nisbəti 1AA : 2Aa : 1aa olduğundan, aa genotipinin payı 1/4, yəni 25%-dir.'
      }
    ]
  },

  // ==========================================
  // 15. COĞRAFİYA - 7-Cİ SİNİF
  // ==========================================
  {
    id: 'lesson-geog-7-scale',
    subjectId: 'cografiya',
    grade: 7,
    unit: 'Kartoqrafik Təsvirlər və Xəritələr',
    unitOrder: 1,
    title: 'Xəritə, Miqyas və Coğrafi Koordinatlar',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Miqyasın növləri (ədədi, izahlı, xətti), məsafənin hesablanması, meridian və paralellər, coğrafi enlik və uzunluq.',
    theoryMarkdown: `
### 1. Miqyas Nədir?
Yerdəki həqiqi məsafənin kağız (plan və ya xəritə) üzərində neçə dəfə kiçildildiyini göstərən kəsrin qiymətinə **miqyas** deyilir:
$$M = \\frac{L_{\\text{xəritə}}}{L_{\\text{həqiqi}}}$$

Miqyasın 3 əsas növü var:
1. **Ədədi miqyas:** Surəti 1 olan kəsr (məs: $1 : 100\\,000$).
2. **İzahlı miqyas:** Sözlə yazılış (məs: *1 sm-də 1 km*). Çevirmək üçün 5 sıfır silinir ($100\\,000 \\text{ sm} = 1000 \\text{ m} = 1 \\text{ km}$).
3. **Xətti miqyas:** Xətkeş şəklində bölgülənmiş qrafik xətt.

### 2. Coğrafi Koordinat Şəbəkəsi
- **Paralellər:** Ekvatora paralel çəkilmiş xəyali çevrələr. Ekvator ($0^\\circ$) ən böyük paraleldir. Coğrafi **enliyi** təyin edir ($0^\\circ$-dən $90^\\circ$-yə qədər şimal və cənub enlikləri).
- **Meridianlar:** Qütbləri birləşdirən bərabər uzunluqlu xətlər. Başlanğıc Qrinviç meridianıdır ($0^\\circ$). Coğrafi **uzunluğu** təyin edir ($0^\\circ$-dən $180^\\circ$-yə qədər şərq və qərb uzunluqları).
- Meridian qövsü üzrə hər $1^\\circ \\approx 111.1 \\text{ km}$-dir.
    `,
    keyFormulas: [
      { id: 'f-g7-1', name: 'Həqiqi Məsafə Düsturu', latex: "L_{\\text{həqiqi}} = L_{\\text{xəritə}} \\cdot M", description: 'Xəritədəki santimetri izahlı miqyasa vurmaqla həqiqi məsafə tapılır.' },
      { id: 'f-g7-2', name: '1 Dərəcəlik Meridian Qövsü', latex: "1^\\circ \\approx 111.1 \\text{ km} \\approx 111 \\text{ km}", description: 'Bütün meridianlar üzrə 1 dərəcəlik qövsün orta uzunluğu.' }
    ],
    glossary: [
      { term: 'Ekvator', definition: 'Yeri Şimal və Cənub yarımkürələrinə bölən 0 dərəcəlik ən uzun paralel.' },
      { term: 'Qrinviç meridianı', definition: 'London yaxınlığındakı rəsədxanadan keçən 0 dərəcəlik başlanğıc meridianı.' }
    ],
    solvedExamples: [
      {
        id: 'ex-g7-1',
        question: 'Miqyası $1 : 2\\,000\\,000$ olan xəritədə iki şəhər arasındakı məsafə 4 sm-dir. Həqiqi məsafə neçə km-dir?',
        solution: 'Ədədi miqyasdan 5 sıfır silsək: 1 sm-də 20 km. Həqiqi məsafə: $L = 4 \\text{ sm} \\cdot 20 \\text{ km/sm} = 80 \\text{ km}$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-g7-1',
        question: '$1 : 500\\,000$ ədədi miqyasının izahlı miqyası hansıdır?',
        options: [
          { key: 'A', text: '1 sm-də 500 km' },
          { key: 'B', text: '1 sm-də 50 km' },
          { key: 'C', text: '1 sm-də 5 km' },
          { key: 'D', text: '1 sm-də 0.5 km' }
        ],
        correctKey: 'C',
        explanation: '500,000 sm-dən 5 sıfır sildikdə 5 km qalır (1 sm-də 5 km).'
      }
    ]
  },

  // ==========================================
  // 16. TARİX - 9-CU SİNİF
  // ==========================================
  {
    id: 'lesson-hist-9-safavids',
    subjectId: 'tarix',
    grade: 9,
    unit: 'Orta Əsrlər Azərbaycan Tarixi',
    unitOrder: 1,
    title: 'Səfəvilər Dövləti və I Şah İsmayıl',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 2,
    summary: '1501-ci il Təbriz tacqoyması, Azərbaycan torpaqlarının vahid mərkəzdə birləşdirilməsi, Çaldıran döyüşü (1514) və dövlət quruluşu.',
    theoryMarkdown: `
### 1. Səfəvilər Dövlətinin Yaranması
XV əsrin sonunda Ərdəbil hakimi Şeyx Heydərin oğlu İsmayıl ətrafına sadiq Qızılbaş tayfalarını toplayaraq mübarizəyə başladı:
- **1500-cü il:** Cabanı döyüşündə Şirvanşah Fərrux Yasar məğlub edildi.
- **1501-ci il:** Şərur düzündə Ağqoyunlu Əlvənd Mirzə məğlub edildi. İsmayıl Təbrizə daxil olaraq özünü **Şah** elan etdi və paytaxtı Təbriz olan vahid Azərbaycan Səfəvilər dövlətinin əsasını qoydu.
- **1503-cü il:** Almaqulağı döyüşündə Murad Mirzənin qoşunları darmadağın edildi və Ağqoyunlu dövlətinə tamamilə son qoyuldu.

### 2. Azərbaycan Torpaqlarının Vahid Mərkəzdə Birləşdirilməsi
I Şah İsmayıl bütün tarixi Azərbaycan torpaqlarını vahid mərkəzləşdirilmiş dövlət tərkibində birləşdirdi. Azərbaycan dili sarayda və orduda dövlət dili səviyyəsinə yüksəldi.

### 3. Çaldıran Döyüşü (1514)
23 avqust 1514-cü ildə I Şah İsmayıl ilə Osmanlı sultanı I Səlim arasında Çaldıran döyüşü baş verdi. Osmanlı ordusunun say üstünlüyü və toplardan istifadə etməsi nəticəsində Səfəvilər məğlub oldu, lakin dövlət öz müstəqilliyini qoruyub saxladı.
    `,
    keyFormulas: [
      { id: 'f-h9-1', name: 'Əsas Tarixi Xronologiya', latex: "1501 \\to \\text{Təbriz Tacqoyma}, \\quad 1514 \\to \\text{Çaldıran Döyüşü}", description: 'Səfəvilər dövlətinin qurulması və ən böyük hərbi sınağı.' }
    ],
    glossary: [
      { term: 'Qızılbaşlar', definition: 'Başlarına 12 zolaqlı qırmızı çalma bağlayan və Səfəvilər dövlətinin hərbi əsasını təşkil edən türk tayfaları.' },
      { term: 'Əmir əl-üməra', definition: 'Səfəvilər dövlətində ordunun baş komandanına verilən ali hərbi rütbə.' }
    ],
    solvedExamples: [
      {
        id: 'ex-h9-1',
        question: 'Səfəvilər dövlətinin ilk paytaxtı hansı şəhər olmuşdur?',
        solution: '1501-ci ildə I Şah İsmayılın tacqoyma mərasimi Təbrizdə keçirilmiş və Təbriz dövlətin ilk paytaxtı olmuşdur (sonralar Qəzvin və İsfahan olmuşdur).'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-h9-1',
        question: 'Səfəvilər dövlətinin əsası neçənci ildə qoyulmuşdur?',
        options: [
          { key: 'A', text: '1499-cu ildə' },
          { key: 'B', text: '1501-ci ildə' },
          { key: 'C', text: '1514-cü ildə' },
          { key: 'D', text: '1524-cü ildə' }
        ],
        correctKey: 'B',
        explanation: '1501-ci ildə I Şah İsmayıl Təbrizdə taxta çıxaraq dövlətin əsasını qoymuşdur.'
      }
    ]
  },

  // ==========================================
  // 17. AZƏRBAYCAN DİLİ - 8-Cİ SİNİF
  // ==========================================
  {
    id: 'lesson-azeri-8-sentence-members',
    subjectId: 'azerbaycan_dili',
    grade: 8,
    unit: 'Sintaksis və Cümlə Üzvləri',
    unitOrder: 1,
    title: 'Cümlənin Baş və İkinci Dərəcəli Üzvləri',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Mübtəda və xəbər (qrammatik əsas), tamamlıq, təyin və zərflik, onların sualları və sintaktik əlaqələri.',
    theoryMarkdown: `
### 1. Cümlənin Baş Üzvləri (Qrammatik Əsas)
Cümlənin qrammatik əsasını **baş üzvlər** təşkil edir:
1. **Mübtəda:** Cümlədə haqqında danışılan şəxsi və ya əşyanı bildirir. *Kim? Nə? Hara?* suallarına cavab verir. Adlıq halda olur.
2. **Xəbər:** Mübtədanın hərəkətini, halını və ya kimliyini təsdiq/inkar edir. *Nə edir? Kimdir? Necədir? Neçədir?* suallarına cavab verir. Feli və ismi xəbər olur.

### 2. İkinci Dərəcəli Üzvlər
Baş üzvləri izah edən və tamamlayan üzvlərdir:
1. **Tamamlıq:** Əşya məzmunu bildirir, adlıq və yiyəlikdən başqa digər halların suallarına cavab verir (*Kimi? Nəyi? Kimə? Nəyə? Kimdə? Nədə? Kimdən? Nədən?*).
2. **Təyin:** Əşyanın əlamətini, keyfiyyətini və ya miqdarını bildirir. *Necə? Nə cür? Hansı? Neçənci? Neçə?* suallarına cavab verir (dalğalı xətlə işarələnir).
3. **Zərflik:** Hərəkətin icra tərzini, zamanını, yerini, kəmiyyətini, səbəbini və məqsədini bildirir (*Necə? Nə vaxt? Haraya? Niyə? Nə qədər?*).
    `,
    keyFormulas: [
      { id: 'f-az8-1', name: 'Cümlənin Strukturu', latex: "\\text{Təyin} \\to \\text{Mübtəda} \\to \\text{Zərflik} \\to \\text{Tamamlıq} \\to \\text{Xəbər}", description: 'Azərbaycan dilində adi sintaktik cümlə sırası.' }
    ],
    glossary: [
      { term: 'Feli Xəbər', definition: 'Təsriflənən fellərlə ifadə olunan və bilavasitə hərəkət bildirən xəbər.' },
      { term: 'İsmi Xəbər', definition: 'Adlarla (isim, sifət, say, əvəzlik) və ismi birləşmələrlə ifadə olunan xəbər.' }
    ],
    solvedExamples: [
      {
        id: 'ex-az8-1',
        question: '"Çalışqan şagirdlər imtahanı uğurla verdilər" cümləsində cümlə üzvlərini müəyyən edin.',
        solution: 'Şagirdlər (mübtəda), çalışqan (təyin), verdilər (feli xəbər), imtahanı (tamamlıq), uğurla (tərzi-hərəkət zərfliyi).'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-az8-1',
        question: '"Kitabı rəfə qoydu" cümləsində "kitabı" sözü hansı cümlə üzvüdür?',
        options: [
          { key: 'A', text: 'Mübtəda' },
          { key: 'B', text: 'Tamamlıq' },
          { key: 'C', text: 'Təyin' },
          { key: 'D', text: 'Zərflik' }
        ],
        correctKey: 'B',
        explanation: '"Nəyi qoydu?" sualına cavab verir və təsirlik haldadır, deməli vasitəsiz tamamlıqdır.'
      }
    ]
  },

  // ==========================================
  // 18. İNGİLİS DİLİ - 8-Cİ SİNİF
  // ==========================================
  {
    id: 'lesson-eng-8-present-perfect',
    subjectId: 'xarici_dil',
    grade: 8,
    unit: 'Grammar & Verb Tenses',
    unitOrder: 1,
    title: 'Present Perfect vs Past Simple Tense',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Structure of Present Perfect, life experiences, connection to present, comparison with Past Simple and key time markers.',
    theoryMarkdown: `
### 1. Present Perfect Tense (İndiki Bitmiş Zaman)
Geçmişdə baş vermiş, lakin nəticəsi indiki zamanla bağlı olan və ya həyat təcrübəsini bildirən hərəkətlər üçün istifadə olunur:
- **Təsdiq:** $$S + \\text{have / has} + V_3 \\text{ (və ya } V_{ed})$$
- **İnkar:** $$S + \\text{have not (haven't) / has not (hasn't)} + V_3$$
- **Sual:** $$\\text{Have / Has} + S + V_3?$$
*He / She / It* üçün **has**, digər şəxslər üçün **have** işlənir.

### 2. Zaman Zərfləri (Signal Words)
- **already:** artıq (təsdiq cümlələrdə)
- **yet:** hələ ki (inkar və sual cümlələrinin sonunda)
- **just:** indicə (köməkçi fel ilə əsas fel arasında)
- **ever / never:** heç vaxt / heç vaxt (həyat təcrübəsi)
- **since:** -dən bəri (dəqiq başlanğıc anı: *since 2020, since morning*)
- **for:** ərzində (müddət: *for 3 years, for 2 hours*)

### 3. Present Perfect və Past Simple Fərqi
- **Past Simple ($V_2$):** Hərəkət keçmişdə dəqiq vaxtda olub bitib (*yesterday, in 2018, 2 days ago, last week*).
- **Present Perfect:** Dəqiq vaxt göstərilmir, nəticə önəmlidir.
    `,
    keyFormulas: [
      { id: 'f-e8-1', name: 'Present Perfect Formula', latex: "S + \\text{have/has} + V_3", description: 'İndiki bitmiş zamanın standart formulu.' },
      { id: 'f-e8-2', name: 'Past Simple Formula', latex: "S + V_2 / V_{ed} \\quad (\\text{exact past time})", description: 'Dəqiq keçmiş zaman bildirdikdə istifadə olunur.' }
    ],
    glossary: [
      { term: 'V3 (Past Participle)', definition: 'Qaydasız fellərin 3-cü forması (məs: go - went - gone).' },
      { term: 'Since vs For', definition: 'Since başlanğıc nöqtəsini (since Monday), For isə zaman müddətini (for 5 days) göstərir.' }
    ],
    solvedExamples: [
      {
        id: 'ex-e8-1',
        question: '"I ____ (live) in Baku since 2015." Cümləsini düzgün zaman formasında tamamlayın.',
        solution: '"since 2015" başlanğıc nöqtəsi göstərdiyi üçün Present Perfect tələb olunur: "I have lived in Baku since 2015".'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-e8-1',
        question: 'Choose the correct option: "She has not finished her homework ____."',
        options: [
          { key: 'A', text: 'already' },
          { key: 'B', text: 'yet' },
          { key: 'C', text: 'yesterday' },
          { key: 'D', text: 'ago' }
        ],
        correctKey: 'B',
        explanation: 'Inkar cümlələrinin sonunda "hələ də" mənasında "yet" istifadə olunur.'
      }
    ]
  },

  // ==========================================
  // 19. İNFORMATİKA - 8-Cİ SİNİF
  // ==========================================
  {
    id: 'lesson-inf-8-encoding',
    subjectId: 'informatika',
    grade: 8,
    unit: 'İnformasiyanın Ölçülməsi və Kodlaşdırılması',
    unitOrder: 1,
    title: 'İnformasiyanın Miqdarı və Xartli Düsturu',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'İkili kodlaşdırma, bit və bayt anlayışları, informasiya ölçü vahidləri və Xartli düsturu ilə yaddaş hesablama.',
    theoryMarkdown: `
### 1. Ən Kiçik İnformasiya Vahidi: Bit və Bayt
Kompüterdə bütün məlumatlar 0 və 1 rəqəmlərindən ibarət ikili kodlarla saxlanılır.
- **Bit (Binary Digit):** İnformasiyanın ən kiçik vahididir (yalnız 0 və ya 1 qiymətini ala bilər).
- **Bayt:** 8 bitdən ibarət əsas ölçü vahididir ($1 \\text{ Bayt} = 8 \\text{ bit}$). Klaviaturadakı bir simvol yaddaşda 1 Bayt yer tutur (ASCII standartında).

### 2. Xartli Düsturu
Əgər sistemdə $N$ sayda bərabər ehtimallı mümkün hal və ya əlifbada $N$ sayda simvol varsa, bir simvolun informasiya tutumu ($i$ bit) Xartli düsturu ilə tapılır:
$$N = 2^i \\implies i = \\log_2 N$$

### 3. İnformasiyanın Ölçü Vahidləri Cədvəli
- $1 \\text{ Bayt} = 8 \\text{ bit} = 2^3 \\text{ bit}$
- $1 \\text{ KB (Kilobayt)} = 1024 \\text{ Bayt} = 2^{10} \\text{ Bayt}$
- $1 \\text{ MB (Meqabayt)} = 1024 \\text{ KB} = 2^{20} \\text{ Bayt}$
- $1 \\text{ GB (Qiqabayt)} = 1024 \\text{ MB} = 2^{30} \\text{ Bayt}$
- $1 \\text{ TB (Terabayt)} = 1024 \\text{ GB} = 2^{40} \\text{ Bayt}$
    `,
    keyFormulas: [
      { id: 'f-inf8-1', name: 'Xartli Düsturu', latex: "N = 2^i", description: 'Mümkün halların sayı ilə bit tutumu arasındakı əlaqə.' },
      { id: 'f-inf8-2', name: 'Mətnin Həcmi Düsturu', latex: "I = K \\cdot i", description: 'Ümumi həcm = simvolların sayı * bir simvolun bit həcmi.' }
    ],
    glossary: [
      { term: 'ASCII', definition: '1 simvolun 1 bayt (8 bit) ilə kodlaşdırıldığı 256 simvolluq beynəlxalq kod cədvəli.' },
      { term: 'Unicode', definition: 'Bütün dünya dillərinin simvollarını əhatə edən və 1 simvolu 2 bayt (16 bit) yer tutan standart.' }
    ],
    solvedExamples: [
      {
        id: 'ex-inf8-1',
        question: '64 simvollu əlifba ilə yazılmış 500 simvolluq mətnin həcmi neçə baytdır?',
        solution: '$N = 64 = 2^6 \\implies i = 6 \\text{ bit}$. Ümumi bit: $I = 500 \\cdot 6 = 3000 \\text{ bit}$. Bayta çevirək: $3000 / 8 = 375 \\text{ Bayt}$.'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-inf8-1',
        question: '2 Kilobayt neçə Bayta bərabərdir?',
        options: [
          { key: 'A', text: '2000 Bayt' },
          { key: 'B', text: '2048 Bayt' },
          { key: 'C', text: '1024 Bayt' },
          { key: 'D', text: '16384 Bayt' }
        ],
        correctKey: 'B',
        explanation: '1 KB = 1024 Bayt olduğundan, 2 KB = 2 * 1024 = 2048 Baytdır.'
      }
    ]
  },

  // ==========================================
  // 20. İNFORMATİKA - 10-CU SİNİF
  // ==========================================
  {
    id: 'lesson-inf-10-python',
    subjectId: 'informatika',
    grade: 10,
    unit: 'Alqoritmlər və Python Proqramlaşdırma',
    unitOrder: 1,
    title: 'Python-da Şərt Operatorları və Dövrlər',
    order: 1,
    readTimeMinutes: 12,
    difficulty: 3,
    summary: 'Struktur proqramlaşdırma, budaqlanma (if-elif-else), for və while dövrləri, range() funksiyası və alqoritm optimizasiyası.',
    theoryMarkdown: `
### 1. Budaqlanan Alqoritmlər: if - elif - else
Python dilində şərt yoxlanışı girintilər (indentation - adətən 4 boşluq) ilə təşkil olunur:
\`\`\`python
bal = int(input("Balı daxil edin: "))

if bal >= 90:
    print("Qiymət: 5 (Əla)")
elif bal >= 70:
    print("Qiymət: 4 (Yaxşı)")
elif bal >= 50:
    print("Qiymət: 3 (Kafi)")
else:
    print("Qiymət: 2 (Qeyri-kafi)")
\`\`\`

### 2. Təkrarlanan Alqoritmlər: for Dövrü
Məlum sayda təkrarlanmalar üçün \`for\` və \`range()\` funksiyasından istifadə olunur:
- \`range(5)\` $\\implies 0, 1, 2, 3, 4$
- \`range(1, 10, 2)\` $\\implies 1, 3, 5, 7, 9$ (başlanğıc, son, addım)
\`\`\`python
cem = 0
for i in range(1, 11):
    cem += i
print("1-dən 10-a qədər ədədlərin cəmi:", cem)  # Nəticə: 55
\`\`\`

### 3. while Dövrü
Müəyyən şərt doğru (\`True\`) olduğu müddətcə təkrarlanır:
\`\`\`python
saygac = 5
while saygac > 0:
    print(saygac)
    saygac -= 1
\`\`\`
    `,
    keyFormulas: [
      { id: 'f-inf10-1', name: 'range(start, stop, step)', latex: "\\text{range}(a, b, k) \\implies a, a+k, a+2k, \\dots < b", description: 'Python ardıcıllıq generatoru.' }
    ],
    glossary: [
      { term: 'İndentation (Girinti)', definition: 'Python-da kod bloklarını (şərt, dövr, funksiya) müəyyən edən məcburi boşluqlar.' },
      { term: 'İterasiya', definition: 'Dövr daxilindəki əmrlərin bir dəfə tam icra olunması addımı.' }
    ],
    solvedExamples: [
      {
        id: 'ex-inf10-1',
        question: '`for x in range(2, 10, 3): print(x)` kodu ekrana hansı ədədləri çıxaracaq?',
        solution: '2-dən başlayaraq 3 vahid addımla 10-dan kiçik ədədlər: 2, 5, 8 çap olunacaq (cəmi 3 ədəd).'
      }
    ],
    miniQuiz: [
      {
        questionId: 'mq-inf10-1',
        question: 'Python-da `len("Məktəb")` funksiyasının qaytardığı nəticə nədir?',
        options: [
          { key: 'A', text: '5' },
          { key: 'B', text: '6' },
          { key: 'C', text: '7' },
          { key: 'D', text: 'Məktəb' }
        ],
        correctKey: 'B',
        explanation: '"Məktəb" sözündə 6 hərf var, len() sətirdəki simvolların sayını qaytarır.'
      }
    ]
  }
];
