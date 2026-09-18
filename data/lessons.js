// MəktəbPlus - Bütün Fənlər və Siniflər Üzrə Genişləndirilmiş Dərslər Kataloqu
// 9 Fənn: Riyaziyyat, Fizika, Kimya, Biologiya, Coğrafiya, Tarix, Azərbaycan dili, İngilis dili, İnformatika
// Bütün Siniflər: 6, 7, 8, 9, 10, 11

export const MOCK_LESSONS = [
  // ==========================================
  // 1. RİYAZİYYAT - 6-CI SİNİF
  // ==========================================
  {
    id: 'lesson-math-6-fractions',
    subjectId: 'riyaziyyat',
    grade: 6,
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
  },
{
  "id": "lesson-math-6-proportion",
  "subjectId": "riyaziyyat",
  "grade": 6,
  "unit": "Nisbət, Tənasüb və Faiz",
  "unitOrder": 2,
  "title": "Tənasüb və Onun Əsas Xassəsi",
  "order": 2,
  "readTimeMinutes": 8,
  "difficulty": 1,
  "summary": "İki nisbətin bərabərliyi, tənasübün kənar və orta hədləri, naməlum həddin tapılması.",
  "theoryMarkdown": "\n### 1. Nisbət Nədir?\nİki ədədin qismətinə onların **nisbəti** deyilir. Nisbət bir ədədin digərindən neçə dəfə böyük olduğunu və ya bir ədədin digərinin hansı hissəsini təşkil etdiyini göstərir:\n$$\\\\frac{a}{b} \\\\quad (b \\\\neq 0)$$\n\n### 2. Tənasüb və Onun Əsas Xassəsi\nİki nisbətin bərabərliyinə **tənasüb** deyilir:\n$$\\\\frac{a}{b} = \\\\frac{c}{d} \\\\quad \\\\text{və ya} \\\\quad a : b = c : d$$\nBurada $a$ və $d$ kənar hədlər, $b$ və $c$ isə orta hədlərdir.\n\n**Tənasübün əsas xassəsi:** Kənar hədlərin hasili orta hədlərin hasilinə bərabərdir:\n$$a \\\\cdot d = b \\\\cdot c$$\nBuradan naməlum kənar hədd: $x = \\\\frac{b \\\\cdot c}{a}$.\n    ",
  "keyFormulas": [
    {
      "id": "f-m6-prop-1",
      "name": "Tənasübün Əsas Xassəsi",
      "latex": "a \\\\cdot d = b \\\\cdot c",
      "description": "Kənar hədlərin hasili orta hədlərin hasilinə bərabərdir."
    }
  ],
  "glossary": [
    {
      "term": "Kənar hədlər",
      "definition": "Tənasübdə başlanğıcda və sonda duran hədlər (a və d)."
    },
    {
      "term": "Orta hədlər",
      "definition": "Tənasübdə ortada yerləşən hədlər (b və c)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m6-prop-1",
      "question": "$\\\\frac{x}{6} = \\\\frac{10}{15}$ tənasübündən $x$-i tapın.",
      "solution": "Tənasübün əsas xassəsinə görə: $15 \\\\cdot x = 6 \\\\cdot 10 \\\\implies 15x = 60 \\\\implies x = 4$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m6-prop-1",
      "question": "$\\\\frac{3}{4} = \\\\frac{9}{x}$ tənasübündə $x$ nəyə bərabərdir?",
      "options": [
        {
          "key": "A",
          "text": "12"
        },
        {
          "key": "B",
          "text": "16"
        },
        {
          "key": "C",
          "text": "15"
        },
        {
          "key": "D",
          "text": "27"
        }
      ],
      "correctKey": "A",
      "explanation": "3 * x = 4 * 9 = 36 => x = 36 / 3 = 12."
    }
  ]
},
{
  "id": "lesson-math-9-trig",
  "subjectId": "riyaziyyat",
  "grade": 9,
  "unit": "Düzbucaqlı Üçbucaq və Triqonometriya",
  "unitOrder": 1,
  "title": "İti Bucağın Triqonometrik Funksiyaları",
  "order": 1,
  "readTimeMinutes": 11,
  "difficulty": 3,
  "summary": "Sinus, kosinus, tangens və kotangens tərifləri, əsas triqonometrik eynilik və standart bucaqların qiymətləri.",
  "theoryMarkdown": "\n### 1. Düzbucaqlı Üçbucaqda Nisbətlər\nİti bucağı $\\\\alpha$ olan düzbucaqlı üçbucaqda ($a$ - qarşı katet, $b$ - bitişik katet, $c$ - hipotenuz):\n- **Sinus:** Qarşı katetin hipotenuza nisbəti:\n  $$\\\\sin \\\\alpha = \\\\frac{a}{c}$$\n- **Kosinus:** Bitişik katetin hipotenuza nisbəti:\n  $$\\\\cos \\\\alpha = \\\\frac{b}{c}$$\n- **Tangens:** Qarşı katetin bitişik katetə nisbəti:\n  $$\\\\tan \\\\alpha = \\\\frac{a}{b} = \\\\frac{\\\\sin \\\\alpha}{\\\\cos \\\\alpha}$$\n- **Kotangens:** Bitişik katetin qarşı katetə nisbəti:\n  $$\\\\cot \\\\alpha = \\\\frac{b}{a} = \\\\frac{\\\\cos \\\\alpha}{\\\\sin \\\\alpha}$$\n\n### 2. Əsas Triqonometrik Eynilik\nPifaqor teoreminə ($a^2 + b^2 = c^2$) əsasən:\n$$\\\\sin^2 \\\\alpha + \\\\cos^2 \\\\alpha = 1$$\n    ",
  "keyFormulas": [
    {
      "id": "f-m9-t1",
      "name": "Əsas Eynilik",
      "latex": "\\\\sin^2 \\\\alpha + \\\\cos^2 \\\\alpha = 1",
      "description": "Sinus və kosinusun kvadratları cəmi 1-ə bərabərdir."
    },
    {
      "id": "f-m9-t2",
      "name": "Tangens və Kotangens Hasili",
      "latex": "\\\\tan \\\\alpha \\\\cdot \\\\cot \\\\alpha = 1",
      "description": "Tangens və kotangens qarşılıqlı tərs kəmiyyətlərdir."
    }
  ],
  "glossary": [
    {
      "term": "Hipotenuz (c)",
      "definition": "Düz bucaq qarşısında duran ən böyük tərəf."
    },
    {
      "term": "Sinus",
      "definition": "İti bucağın qarşısındakı katetin hipotenuza nisbəti."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m9-t1",
      "question": "Əgər $\\\\sin \\\\alpha = \\\\frac{3}{5}$ olarsa, $\\\\cos \\\\alpha$-nı tapın ($0^\\\\circ < \\\\alpha < 90^\\\\circ$).",
      "solution": "$$\\\\cos^2 \\\\alpha = 1 - \\\\sin^2 \\\\alpha = 1 - \\\\frac{9}{25} = \\\\frac{16}{25} \\\\implies \\\\cos \\\\alpha = \\\\frac{4}{5}$$$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m9-t1",
      "question": "$\\\\sin 30^\\\\circ$ qiyməti nəyə bərabərdir?",
      "options": [
        {
          "key": "A",
          "text": "$\\\\frac{1}{2}$"
        },
        {
          "key": "B",
          "text": "$\\\\frac{\\\\sqrt{3}}{2}$"
        },
        {
          "key": "C",
          "text": "$\\\\frac{\\\\sqrt{2}}{2}$"
        },
        {
          "key": "D",
          "text": "1"
        }
      ],
      "correctKey": "A",
      "explanation": "30 dərəcəli bucaq qarşısındakı katet hipotenuzun yarısına bərabərdir, yəni sin 30° = 1/2."
    }
  ]
},
{
  "id": "lesson-math-11-cylinder-cone",
  "subjectId": "riyaziyyat",
  "grade": 11,
  "unit": "Fəza Həndəsəsi (Stereometriya)",
  "unitOrder": 2,
  "title": "Fırlanma Cisimləri: Silindr və Konus",
  "order": 2,
  "readTimeMinutes": 12,
  "difficulty": 4,
  "summary": "Silindr və konusun ox kəsiyi, yan səth, tam səth sahələri və həcm düsturları.",
  "theoryMarkdown": "\n### 1. Dairəvi Silindr\nDüzbucaqlının bir tərəfi ətrafında fırlanmasından alınan cismə **düz dairəvi silindr** deyilir ($R$ - oturacağın radiusu, $h$ - hündürlük):\n- Yan səthinin sahəsi: $$S_{\\\\text{yan}} = 2\\\\pi R h$$\n- Tam səthinin sahəsi: $$S_{\\\\text{tam}} = 2\\\\pi R h + 2\\\\pi R^2 = 2\\\\pi R(h + R)$$\n- Həcmi: $$V = S_{\\\\text{ot}} \\\\cdot h = \\\\pi R^2 h$$\n\n### 2. Dairəvi Konus\nDüzbucaqlı üçbucağın kateti ətrafında fırlanmasından alınan cismə **konus** deyilir ($l$ - doğuran, $h$ - hündürlük, $R$ - radius):\n- Pifaqor əlaqəsi: $$l^2 = h^2 + R^2$$\n- Yan səthi: $$S_{\\\\text{yan}} = \\\\pi R l$$\n- Həcmi: $$V = \\\\frac{1}{3} \\\\pi R^2 h$$\n    ",
  "keyFormulas": [
    {
      "id": "f-m11-c1",
      "name": "Silindrin Həcmi",
      "latex": "V = \\\\pi R^2 h",
      "description": "Oturacağın sahəsi vurulsun hündürlük."
    },
    {
      "id": "f-m11-c2",
      "name": "Konusun Həcmi",
      "latex": "V = \\\\frac{1}{3} \\\\pi R^2 h",
      "description": "Eyni oturacaqlı və hündürlüklü silindrin həcminin üçdə biri."
    }
  ],
  "glossary": [
    {
      "term": "Doğuran (l)",
      "definition": "Konusun təpəsini oturacaq çevrəsinin ixtiyari nöqtəsi ilə birləşdirən düz xətt parçası."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m11-c1",
      "question": "Oturacağının radiusu $R = 3 \\\\text{ sm}$, hündürlüyü $h = 4 \\\\text{ sm}$ olan silindrin həcmini tapın ($\\\\pi$ ilə).",
      "solution": "$$V = \\\\pi R^2 h = \\\\pi \\\\cdot 3^2 \\\\cdot 4 = 36\\\\pi \\\\text{ sm}^3$$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m11-c1",
      "question": "Konusun hündürlüyü və radiusu dəyişmədən silindrlə müqayisə edildikdə, konusun həcmi silindrin həcmindən neçə dəfə azdır?",
      "options": [
        {
          "key": "A",
          "text": "2 dəfə"
        },
        {
          "key": "B",
          "text": "3 dəfə"
        },
        {
          "key": "C",
          "text": "4 dəfə"
        },
        {
          "key": "D",
          "text": "Bərabərdir"
        }
      ],
      "correctKey": "B",
      "explanation": "V_konus = (1/3) * V_silindr, yəni tam 3 dəfə azdır."
    }
  ]
},
{
  "id": "lesson-phys-7-levers",
  "subjectId": "fizika",
  "grade": 7,
  "unit": "Sadə Mexanizmlər və İş",
  "unitOrder": 2,
  "title": "Sadə Mexanizmlər: Lingin Tarazlıq Şərti",
  "order": 2,
  "readTimeMinutes": 9,
  "difficulty": 2,
  "summary": "Tərpənməz dayaq ətrafında fırlana bilən bərk cisim (ling), qüvvə qolu və Arximedin tarazlıq qaydası.",
  "theoryMarkdown": "\n### 1. Sadə Mexanizmlər Nədir?\nQüvvənin istiqamətini və ya modulunu dəyişmək üçün istifadə olunan qurğulara **sadə mexanizmlər** deyilir (ling, blok, mail müstəvi, bucurqad, paz).\n\n### 2. Lingin Tarazlıq Şərti\nTərpənməz dayaq nöqtəsi ətrafında fırlana bilən bərk cismə **ling** deyilir.\nDayaq nöqtəsindən qüvvənin təsir xəttinə qədər olan ən qısa məsafəyə **qüvvə qolu** ($l$) deyilir.\n\n**Lingin tarazlıq qaydası (Arximed qanunu):**\nLing o zaman tarazlıqda olar ki, ona təsir edən qüvvələrin modulları onların qolları ilə tərs mütənasib olsun:\n$$\\\\frac{F_1}{F_2} = \\\\frac{l_2}{l_1} \\\\implies F_1 \\\\cdot l_1 = F_2 \\\\cdot l_2$$\n\n### 3. Mexanikanın \"Qızıl Qaydası\"\nHeç bir sadə mexanizm işdə qazanc vermir: qüvvədə neçə dəfə qazansaq, məsafədə bir o qədər uduzuruq:\n$$A_1 = A_2 \\\\implies F_1 s_1 = F_2 s_2$$\n    ",
  "keyFormulas": [
    {
      "id": "f-p7-l1",
      "name": "Lingin Tarazlıq Şərti",
      "latex": "F_1 l_1 = F_2 l_2",
      "description": "Qüvvə momentlərinin bərabərliyi."
    },
    {
      "id": "f-p7-l2",
      "name": "Qüvvə Momenti",
      "latex": "M = F \\\\cdot l",
      "description": "Qüvvə ilə onun qolunun hasili."
    }
  ],
  "glossary": [
    {
      "term": "Qüvvə qolu (l)",
      "definition": "Fırlanma oxundan qüvvənin təsir xəttinə çəkilmiş perpendikulyarın uzunluğu."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-p7-l1",
      "question": "Lingin qolları $l_1 = 20 \\\\text{ sm}$ və $l_2 = 80 \\\\text{ sm}$-dir. Qısa qola $F_1 = 400 \\\\text{ N}$ yük qoyularsa, onu tarazlaşdırmaq üçün uzun qola hansı qüvvə tətbiq olunmalıdır?",
      "solution": "$$F_2 = \\\\frac{F_1 \\\\cdot l_1}{l_2} = \\\\frac{400 \\\\cdot 20}{80} = 100 \\\\text{ N}$$. Qüvvədə 4 dəfə qazanc əldə edilir."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-p7-l1",
      "question": "Sadə mexanizmlərdən istifadə edərək işdə neçə dəfə qazanc əldə etmək olar?",
      "options": [
        {
          "key": "A",
          "text": "2 dəfə"
        },
        {
          "key": "B",
          "text": "4 dəfə"
        },
        {
          "key": "C",
          "text": "Heç bir qazanc əldə etmək olmaz"
        },
        {
          "key": "D",
          "text": "Lingin qolundan asılıdır"
        }
      ],
      "correctKey": "C",
      "explanation": "Mexanikanın qızıl qaydasına görə heç bir sadə mexanizm işdə qazanc vermir."
    }
  ]
},
{
  "id": "lesson-phys-8-coulomb",
  "subjectId": "fizika",
  "grade": 8,
  "unit": "Elektrik Hadisələri və Elektrostatika",
  "unitOrder": 2,
  "title": "Elektrik Yükləri və Kulon Qanunu",
  "order": 2,
  "readTimeMinutes": 10,
  "difficulty": 2,
  "summary": "Müsbət və mənfi yüklər, yükün saxlanması qanunu və nöqtəvi yüklərin qarşılıqlı təsir qanunu.",
  "theoryMarkdown": "\n### 1. Elektrik Yükü və Növləri\nTəbiətdə iki növ elektrik yükü mövcuddur: **müsbət ($+$)** və **mənfi ($-$)**.\nEyni işarəli yüklər bir-birini itələyir, əks işarəli yüklər isə cəzb edir.\nBütün yüklər elementar yükün ($e = 1.6 \\\\cdot 10^{-19} \\\\text{ Kl}$) tam misllərinə bərabərdir:\n$$q = \\\\pm N \\\\cdot e$$\n\n### 2. Kulon Qanunu\nVakuumda iki sükunətdə olan nöqtəvi yükün qarşılıqlı təsir qüvvəsi bu yüklərin modulları hasili ilə düz, aralarındakı məsafənin kvadratı ilə tərs mütənasibdir:\n$$F = k \\\\frac{|q_1 \\\\cdot q_2|}{r^2}$$\nBurada $k = 9 \\\\cdot 10^9 \\\\frac{\\\\text{N} \\\\cdot \\\\text{m}^2}{\\\\text{Kl}^2}$ mütənasiblik əmsalıdır.\n    ",
  "keyFormulas": [
    {
      "id": "f-p8-c1",
      "name": "Kulon Qanunu",
      "latex": "F = k \\\\frac{|q_1 q_2|}{r^2}",
      "description": "Nöqtəvi elektrik yükləri arasındakı qarşılıqlı təsir qüvvəsi."
    },
    {
      "id": "f-p8-c2",
      "name": "Elementar Yük",
      "latex": "e = 1.6 \\\\cdot 10^{-19} \\\\text{ Kl}",
      "description": "Təbiətdə ən kiçik bölünməz elektrik yükü (elektron və proton)."
    }
  ],
  "glossary": [
    {
      "term": "Nöqtəvi yük",
      "definition": "Ölçüləri qarşılıqlı təsir məsafəsindən dəfələrlə kiçik olan yüklü cisim."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-p8-c1",
      "question": "İki nöqtəvi yük arasındakı məsafə 2 dəfə azaldılsa, onlar arasındakı Kulon qüvvəsi necə dəyişər?",
      "solution": "$F \\\\sim 1/r^2$ olduğundan, məsafə 2 dəfə azaldıqda qüvvə $2^2 = 4$ dəfə artar."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-p8-c1",
      "question": "Elektrik yükünün Beynəlxalq Vahidlər Sistemində (BS) vahidi nədir?",
      "options": [
        {
          "key": "A",
          "text": "Amper"
        },
        {
          "key": "B",
          "text": "Volt"
        },
        {
          "key": "C",
          "text": "Kulon"
        },
        {
          "key": "D",
          "text": "Om"
        }
      ],
      "correctKey": "C",
      "explanation": "Elektrik yükünün BS-də vahidi Kulondur (Kl)."
    }
  ]
},
{
  "id": "lesson-phys-11-induction",
  "subjectId": "fizika",
  "grade": 11,
  "unit": "Elektromaqnit Sahəsi və Dalğalar",
  "unitOrder": 1,
  "title": "Elektromaqnit İnduksiyası və Faradey Qanunu",
  "order": 1,
  "readTimeMinutes": 12,
  "difficulty": 4,
  "summary": "Maqnit seli, qapalı konturda induksiya cərəyanının yaranması, Faradey qanunu və Lents qaydası.",
  "theoryMarkdown": "\n### 1. Maqnit Seli ($\\\\Phi$)\nSahəsi $S$ olan müstəvi səthdən keçən bircins maqnit sahəsinin induksiya xətlərinin sıxlığını xarakterizə edən kəmiyyətə **maqnit seli** deyilir:\n$$\\\\Phi = B \\\\cdot S \\\\cdot \\\\cos \\\\alpha$$\nVahidi **Veberdir** ($1 \\\\text{ Vb} = 1 \\\\text{ Tl} \\\\cdot \\\\text{m}^2$).\n\n### 2. Faradeyin Elektromaqnit İnduksiyası Qanunu\nQapalı konturu əhatə edən maqnit selinin hər hansı dəyişməsi zamanı konturda elektrik cərəyanı (induksiya cərəyanı) yaranır.\nYaranan induksiya EHQ-si maqnit selinin dəyişmə yeyinliyi ilə düz mütənasibdir:\n$$\\\\mathcal{E}_i = -\\\\frac{\\\\Delta \\\\Phi}{\\\\Delta t} = -\\\\Phi'(t)$$\n\n### 3. Lents Qaydası\nDüsturdakı mənfi işarəsi **Lents qaydası** ilə izah olunur: İnduksiya cərəyanı həmişə elə istiqamətlənir ki, onun yaratdığı xüsusi maqnit sahəsi onu doğuran maqnit selinin dəyişməsinə mane olsun.\n    ",
  "keyFormulas": [
    {
      "id": "f-p11-i1",
      "name": "Faradey Qanunu",
      "latex": "\\\\mathcal{E}_i = -\\\\frac{\\\\Delta \\\\Phi}{\\\\Delta t}",
      "description": "İnduksiya EHQ maqnit selinin zamana görə birinci törəməsinə bərabərdir."
    },
    {
      "id": "f-p11-i2",
      "name": "Maqnit Seli",
      "latex": "\\\\Phi = B S \\\\cos \\\\alpha",
      "description": "İnduksiya vektoru, sahə və bucaq əlaqəsi."
    }
  ],
  "glossary": [
    {
      "term": "Veber (Vb)",
      "definition": "Maqnit selinin BS sistemindəki əsas vahidi."
    },
    {
      "term": "Lents qaydası",
      "definition": "İnduksiya cərəyanının maqnit sahəsinin əks təsir istiqamətini müəyyən edən fundamental prinsip."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-p11-i1",
      "question": "Konturu kəsən maqnit seli $0.2 \\\\text{ saniyə}$ ərzində $0.8 \\\\text{ Vb}$-dən $0.2 \\\\text{ Vb}$-yə qədər müntəzəm azalmışdır. Konturda yaranan induksiya EHQ-ni tapın.",
      "solution": "$$|\\\\mathcal{E}_i| = \\\\frac{|0.2 - 0.8|}{0.2} = \\\\frac{0.6}{0.2} = 3 \\\\text{ Volt}$$$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-p11-i1",
      "question": "Maqnit selinin vahidi hansıdır?",
      "options": [
        {
          "key": "A",
          "text": "Tesla"
        },
        {
          "key": "B",
          "text": "Veber"
        },
        {
          "key": "C",
          "text": "Henri"
        },
        {
          "key": "D",
          "text": "Farad"
        }
      ],
      "correctKey": "B",
      "explanation": "Maqnit selinin vahidi Veberdir (Vb). Tesla isə maqnit induksiyasının vahididir."
    }
  ]
},
{
  "id": "lesson-chem-7-mixtures",
  "subjectId": "kimya",
  "grade": 7,
  "unit": "İlkin Kimyəvi Anlayışlar",
  "unitOrder": 1,
  "title": "Saf Maddələr və Qarışıqların Ayrılması Üsulları",
  "order": 1,
  "readTimeMinutes": 9,
  "difficulty": 1,
  "summary": "Bircinsli və müxtəlifcinsli qarışıqlar, fiziki xassələr və durultma, süzmə, buxarlandırma, distillə üsulları.",
  "theoryMarkdown": "\n### 1. Saf Maddələr və Qarışıqlar\n- **Saf maddə:** Sabit fiziki xassələrə (sabit qaynama, ərimə temperaturu, sıxlıq) malik olan maddədir (məs: distillə olunmuş su, qlükoza, dəmir).\n- **Qarışıq:** İki və ya daha çox maddənin ixtiyari nisbətdə mexaniki birləşməsidir. Qarışıqlar iki yerə bölünür:\n  - **Bircinsli (Homogen):** Hissəcikləri adi gözlə və mikroskopla görünmür (məs: duzlu su, hava).\n  - **Müxtəlifcinsli (Heterogen):** Hissəcikləri asanlıqla seçilir (məs: su + qum, su + duru yağ).\n\n### 2. Qarışıqların Ayrılma Üsulları\n1. **Süzmə:** Suda həll olmayan bərk maddə ilə mayeni ayırmaq üçün (qum və su).\n2. **Durultma:** Sıxlıqları fərqli olan qarışmayan mayeləri ayırmaq üçün bölücü qıfdan istifadə (su və yağ).\n3. **Buxarlandırma və Kristallaşdırma:** Mayedə həll olmuş bərk maddəni ayırmaq üçün (duzlu su).\n4. **Distillə:** Qaynama temperaturları fərqli olan bircinsli maye qarışıqlarını ayırmaq üçün (su və spirt).\n    ",
  "keyFormulas": [
    {
      "id": "f-c7-1",
      "name": "Kütlə Payı",
      "latex": "\\\\omega = \\\\frac{m_{\\\\text{maddə}}}{m_{\\\\text{məhlul}}} \\\\cdot 100\\\\%",
      "description": "Həll olan maddənin məhluldakı faiz nisbəti."
    }
  ],
  "glossary": [
    {
      "term": "Distillə",
      "definition": "Mayenin buxarlandırılması və ardınca buxarın soyudularaq kondensasiya olunması prosesi."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-c7-1",
      "question": "Su ilə bitki yağı qarışığını hansı üsulla ən səliqəli şəkildə ayırmaq olar?",
      "solution": "Su və yağ bir-birində həll olmayan müxtəlifcinsli qarışıq əmələ gətirir və sıxlıqları fərqlidir. Onları bölücü qıf vasitəsilə durultma üsulu ilə asanlıqla ayırmaq olar."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-c7-1",
      "question": "Aşağıdakılardan hansı saf maddədir?",
      "options": [
        {
          "key": "A",
          "text": "Dəniz suyu"
        },
        {
          "key": "B",
          "text": "Hava"
        },
        {
          "key": "C",
          "text": "Distillə olunmuş su ($H_2O$)"
        },
        {
          "key": "D",
          "text": "Süd"
        }
      ],
      "correctKey": "C",
      "explanation": "Distillə olunmuş su təmiz kimyəvi birləşmədir və heç bir kənar qarışığı yoxdur."
    }
  ]
},
{
  "id": "lesson-chem-10-alkanes",
  "subjectId": "kimya",
  "grade": 10,
  "unit": "Üzvi Kimya: Karbohidrogenlər",
  "unitOrder": 1,
  "title": "Doymuş Karbohidrogenlər (Alkanlar)",
  "order": 1,
  "readTimeMinutes": 11,
  "difficulty": 3,
  "summary": "Alkanların homoloji sırası ($C_n H_{2n+2}$), $sp^3$ hibridləşmə, izomerlik və əvəzetmə reaksiyaları.",
  "theoryMarkdown": "\n### 1. Alkanların Ümumi Formulu\nMolekullarında karbon atomları bir-biri ilə yalnız təkqat $\\\\sigma$-rabitələrlə birləşmiş karbohidrogenlərə **alkanlar (parafinlər)** deyilir:\n$$C_n H_{2n+2} \\\\quad (n \\\\ge 1)$$\nİlk nümayəndələri: Metan ($CH_4$), Etan ($C_2H_6$), Propan ($C_3H_8$), Butan ($C_4H_{10}$).\n\n### 2. Molekulun Fəza Quruluşu\nAlkanlarda bütün karbon atomları **$sp^3$ hibridləşmə** vəziyyətindədir. Valent bucağı $109^\\\\circ 28'$ təşkil edir və tetraedrik quruluşa malikdir. $C-C$ rabitəsinin uzunluğu $0.154 \\\\text{ nm}$-dir.\n\n### 3. Kimyəvi Xassələri\nDoymuş olduqları üçün birləşmə reaksiyasına daxil olmurlar:\n- **Radikal əvəzetmə (Xlorlaşma):**\n  $$CH_4 + Cl_2 \\\\xrightarrow{h\\\\nu} CH_3Cl + HCl$$\n- **Tam yanma reaksiyası:**\n  $$C_n H_{2n+2} + \\\\frac{3n+1}{2} O_2 \\\\to n CO_2 + (n+1) H_2O$$\n    ",
  "keyFormulas": [
    {
      "id": "f-c10-1",
      "name": "Alkanların Ümumi Formulu",
      "latex": "C_n H_{2n+2}",
      "description": "Açıq zəncirli doymuş karbohidrogenlərin homoloji sırası."
    }
  ],
  "glossary": [
    {
      "term": "Homoloji fərq",
      "definition": "Qonşu homoloqların bir-birindən fərqləndiyi $-CH_2-$ (metilen) qrupu."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-c10-1",
      "question": "Tərkibində 5 karbon atomu olan alkanın ($C_5H_{12}$) nisbi molekul kütləsini tapın ($Ar(C)=12, Ar(H)=1$).",
      "solution": "$$M_r(C_5H_{12}) = 5 \\\\cdot 12 + 12 \\\\cdot 1 = 60 + 12 = 72$$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-c10-1",
      "question": "Metan molekulunda ($CH_4$) karbon atomunun hibridləşmə növü hansıdır?",
      "options": [
        {
          "key": "A",
          "text": "$sp$"
        },
        {
          "key": "B",
          "text": "$sp^2$"
        },
        {
          "key": "C",
          "text": "$sp^3$"
        },
        {
          "key": "D",
          "text": "Hibridləşməyib"
        }
      ],
      "correctKey": "C",
      "explanation": "Bütün alkanlarda karbon atomları dörd tək rabitə əmələ gətirdiyinə görə sp3 hibridləşmə vəziyyətindədir."
    }
  ]
},
{
  "id": "lesson-bio-7-arthropods",
  "subjectId": "biologiya",
  "grade": 7,
  "unit": "Heyvanlar Aləmi: Onurğasızlar",
  "unitOrder": 1,
  "title": "Buğumayaqlılar Tipi və Əsas Sinifləri",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 2,
  "summary": "Xitin skelet, buğumlu ətraflar, açıq qan dövranı və xərçəngkimilər, hörümçəkkimilər, həşəratlar müqayisəsi.",
  "theoryMarkdown": "\n### 1. Buğumayaqlıların Ümumi Əlamətləri\nYer kürəsində növ sayına görə ən zəngin heyvan tipidir (1 milyondan çox növ). Əsas xüsusiyyətləri:\n- Bədənləri və ətrafları **buğumludur**.\n- Bədən xaricdən möhkəm **xitin örtüklə** (xarici skeletlə) örtülmüşdür. Xitin elastik olmadığı üçün heyvanlar qabıq dəyişməklə böyüyürlər.\n- Qan-damar sistemi **açıqdır** (qan bədən boşluğuna tökülür).\n\n### 2. Əsas Siniflərin Müqayisəsi\n1. **Xərçəngkimilər:** Baş-döş və qarıncıq. 5 cüt (10 ədəd) yeriş ayağı. Qəlsəmələrlə tənəffüs edir.\n2. **Hörümçəkkimilər:** Baş-döş və buğumsuz qarıncıq. 4 cüt (8 ədəd) yeriş ayağı. Bığcıqları yoxdur. Tor vəziləri var.\n3. **Həşəratlar:** Baş, döş və qarıncıq. 3 cüt (6 ədəd) yeriş ayağı. 1 cüt bığcıq. Traxeyalarla tənəffüs edir, əksəriyyətində qanadlar var.\n    ",
  "keyFormulas": [
    {
      "id": "f-b7-1",
      "name": "Yeriş Ayaqları Sayı",
      "latex": "\\\\text{Həşərat (6)} < \\\\text{Hörümçək (8)} < \\\\text{Xərçəng (10)}",
      "description": "Sinifləri fərqləndirən əsas morfoloji xüsusiyyət."
    }
  ],
  "glossary": [
    {
      "term": "Xitin",
      "definition": "Buğumayaqlıların xarici skeletini təşkil edən möhkəm polisaxarid qat."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-b7-1",
      "question": "May böcəyinin döş hissəsində neçə ədəd yeriş ayağı birləşmişdir?",
      "solution": "May böcəyi həşəratlar sinfinə aiddir, bütün yetkin həşəratlarda 3 cüt, yəni 6 ədəd yeriş ayağı olur."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-b7-1",
      "question": "Hörümçəkkimilər sinfinə aid olan canlılarda neçə cüt yeriş ayağı olur?",
      "options": [
        {
          "key": "A",
          "text": "2 cüt"
        },
        {
          "key": "B",
          "text": "3 cüt"
        },
        {
          "key": "C",
          "text": "4 cüt"
        },
        {
          "key": "D",
          "text": "5 cüt"
        }
      ],
      "correctKey": "C",
      "explanation": "Hörümçəkkimilərdə 4 cüt (8 ədəd) yeriş ayağı olur."
    }
  ]
},
{
  "id": "lesson-bio-10-cytology",
  "subjectId": "biologiya",
  "grade": 10,
  "unit": "Sitologiya: Hüceyrə Biologiyası",
  "unitOrder": 1,
  "title": "Hüceyrənin Quruluşu və Orqanoidləri",
  "order": 1,
  "readTimeMinutes": 12,
  "difficulty": 3,
  "summary": "Prokariot və eukariot hüceyrələr, plazmatik membran, mitoxondri, ribosom, endoplazmatik şəbəkə və nüvənin funksiyaları.",
  "theoryMarkdown": "\n### 1. Hüceyrə Nəzəriyyəsinin Əsasları\nHüceyrə - bütün canlıların ən kiçik quruluş, inkişaf və funksional vahididir (Şvan və Şleyden).\nBütün orqanizmlər iki böyük qrupa bölünür:\n- **Prokariotlar:** Formalaşmış nüvəsi olmayanlar (bakteriyalar və göy-yaşıl yosunlar).\n- **Eukariotlar:** Əsl formalaşmış nüvəyə malik olanlar (bitkilər, heyvanlar, göbələklər).\n\n### 2. Əsas Orqanoidlər və Onların Funksiyaları\n- **Mitoxondri:** Hüceyrənin \"enerji stansiyası\". Daxili membranı (kristlər) üzərində ATF (adenozintrifosfat) sintez olunur.\n- **Ribosom:** Zülal sintezini həyata keçirən membransız orqanoid.\n- **Endoplazmatik şəbəkə (EPŞ):** Maddələrin hüceyrədaxili daşınma sistemi (dənəvər EPŞ zülal, hamar EPŞ lipid/karbohidrat sintez edir).\n- **Holci kompleksi:** Sintez olunmuş maddələrin qablaşdırılması və lizosomların yaranması.\n- **Lizosom:** Hüceyrədaxili həzm fermentlərini saxlayır.\n    ",
  "keyFormulas": [
    {
      "id": "f-b10-1",
      "name": "ATF Enerji Parçalanması",
      "latex": "\\\\text{ATF} + H_2O \\\\to \\\\text{ADF} + H_3PO_4 + 40 \\\\text{ kC/mol}",
      "description": "Mitoxondridə yaranan makroerqik rabitənin enerji ayrılması."
    }
  ],
  "glossary": [
    {
      "term": "Kristlər",
      "definition": "Mitoxondrinin daxili membranının əmələ gətirdiyi qatlar."
    },
    {
      "term": "Xromatin",
      "definition": "Nüvədə DNT və zülallardan ibarət irsi material sapları."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-b10-1",
      "question": "Hüceyrədə zülalların biosintezi hansı orqanoiddə baş verir?",
      "solution": "Zülal molekullarının amin turşularından yığılması bilavasitə ribosomlarda baş verir."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-b10-1",
      "question": "Hüceyrənin energetik stansiyası adlanan və ATF sintez edən iki membranlı orqanoid hansıdır?",
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
          "text": "Holci kompleksi"
        }
      ],
      "correctKey": "B",
      "explanation": "Bioloji oksidləşmə və ATF sintezi mitoxondrinin kristlərində baş verir."
    }
  ]
},
{
  "id": "lesson-geog-8-lithosphere",
  "subjectId": "cografiya",
  "grade": 8,
  "unit": "Litosfer və Yer Səthinin Relyefi",
  "unitOrder": 1,
  "title": "Litosfer Plitələri, Vulkanlar və Zəlzələlər",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 2,
  "summary": "Yer qabığının hərəkəti, plitələrin toqquşması və aralanması, Sakit okean 'Alov halqası' və seysmik qurşaqlar.",
  "theoryMarkdown": "\n### 1. Litosfer Plitələri Nəzəriyyəsi\nYer qabığı və yuxarı mantiyanın bərk hissəsi vahid deyil, nəhəng **litosfer plitələrinə** bölünmüşdür (Avrasiya, Şimali Amerika, Cənubi Amerika, Afrika, Hind-Avstraliya, Sakit okean, Antarktida).\nBu plitələr astenosfer qatı üzərində ildə bir neçə santimetr sürətlə hərəkət edirlər:\n- **Konvergent sərhəd (Toqquşma):** Qırışıq dağlar, dərin okean novları və vulkanik adalar qövsləri yaranır (məs: Himalay, Qafqaz dağları).\n- **Divergent sərhəd (Aralanma):** Orta okean sıra dağları və rift dərələri yaranır (məs: Orta Atlantika silsiləsi).\n\n### 2. Zəlzələlər və Seysmik Qurşaqlar\nZəlzələ ocağının yerin dərinliyindəki mərkəzinə **hipomərkəz**, onun bilavasitə yer səthindəki proyeksiyasına **epimərkəz** deyilir.\nDünyada iki nəhəng seysmik qurşaq var:\n1. **Sakit okean 'Alov halqası':** Dünyadakı zəlzələ və fəaliyyətdə olan vulkanların 80%-i buradadır.\n2. **Alp-Himalay seysmik qurşağı:** Azərbaycan ərazisi də bu aktiv zolaqda yerləşir.\n    ",
  "keyFormulas": [
    {
      "id": "f-g8-1",
      "name": "Rixter Şkalası",
      "latex": "M = \\\\log_{10}(A) - \\\\log_{10}(A_0)",
      "description": "Zəlzələnin maqnitudasının (enerjisinin) loqarifmik ölçüsü."
    }
  ],
  "glossary": [
    {
      "term": "Epimərkəz",
      "definition": "Zəlzələ ocağının yer səthində ən güclü dağıntı törədən mərkəzi nöqtəsi."
    },
    {
      "term": "Qeyzer",
      "definition": "Vulkanik zonalarda dövri olaraq fontan vuran qaynar su və buxar mənbəyi."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-g8-1",
      "question": "Azərbaycan hansı nəhəng seysmik qurşağın tərkibinə daxildir?",
      "solution": "Azərbaycan Avrasiya və Ərəbistan litosfer plitələrinin toqquşma zonasında - Alp-Himalay qırışıqlıq və seysmik qurşağında yerləşir."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-g8-1",
      "question": "Yer səthində fəaliyyətdə olan vulkanların və güclü zəlzələlərin ən çox cəmləşdiyi bölgə hansıdır?",
      "options": [
        {
          "key": "A",
          "text": "Qərbi Sibir düzənliyi"
        },
        {
          "key": "B",
          "text": "Sakit okean 'Alov halqası'"
        },
        {
          "key": "C",
          "text": "Şərqi Afrika yarığı"
        },
        {
          "key": "D",
          "text": "Skandinaviya qalxması"
        }
      ],
      "correctKey": "B",
      "explanation": "Sakit okeanın kənarları boyunca plitələrin fəal toqquşması nəticəsində 'Alov halqası' yaranmışdır."
    }
  ]
},
{
  "id": "lesson-geog-9-azerbaijan-climate",
  "subjectId": "cografiya",
  "grade": 9,
  "unit": "Azərbaycanın Fiziki Coğrafiyası",
  "unitOrder": 1,
  "title": "Azərbaycanın İqlim Tipləri və Landşaftları",
  "order": 1,
  "readTimeMinutes": 11,
  "difficulty": 2,
  "summary": "Dünyadakı 11 iqlim tipindən 9-nun Azərbaycanda rast gəlinməsi səbəbləri, günəş radiasiyası və yağıntıların paylanması.",
  "theoryMarkdown": "\n### 1. İqliməmələgətirən Amillər\nAzərbaycan subtropik və mülayim iqlim qurşaqlarının qovuşuğunda yerləşir. Ərazidə mütləq hündürlük $-28 \\\\text{ m}$-dən (Xəzər sahili) $+4466 \\\\text{ m}$-ə qədər (Bazardüzü zirvəsi) dəyişdiyi üçün şaquli qurşaqlıq güclü inkişaf etmişdir.\nƏrazidə illik günəş parıltısının müddəti $2200 - 2700$ saatdır.\n\n### 2. Əsas İqlim Tipləri\nDünyada mövcud olan 11 iqlim tipindən 9-u Azərbaycanda müşahidə edilir:\n1. **Quru çöl və yarımsəhra iqlimi:** Kür-Araz ovalığı, Abşeron və Qobustanda (yağıntı az, yay çox isti).\n2. **Qışı mülayim, yayı quraq keçən mülayim-isti:** Lənkəran ovalığı (yağıntı ən çox buradadır - 1400-1700 mm).\n3. **Qışı quraq keçən mülayim-isti:** Qanıx-Əyriçay, Kiçik Qafqazın ətəkləri.\n4. **Soyuq və dağ-tundra iqlimi:** Böyük və Kiçik Qafqazın yüksək dağlıq zirvələrində.\n    ",
  "keyFormulas": [
    {
      "id": "f-g9-1",
      "name": "Rütubətlənmə Əmsalı",
      "latex": "K = \\\\frac{Q}{E_0}",
      "description": "İllik yağıntı miqdarının (Q) mümkün buxarlanmaya (E0) nisbəti."
    }
  ],
  "glossary": [
    {
      "term": "Şaquli qurşaqlıq",
      "definition": "Dağlarda hündürlüyə qalxdıqca temperaturun azalması ilə təbiət komplekslərinin qanunauyğun dəyişməsi."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-g9-1",
      "question": "Azərbaycanda ən çox yağıntı alan təbii vilayət hansıdır?",
      "solution": "Lənkəran təbii vilayətidir (Talış dağlarının ətəkləri), burada illik yağıntı 1400-1700 mm-ə çatır."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-g9-1",
      "question": "Kür-Araz ovalığı və Abşeron yarımadasında hansı iqlim tipi üstünlük təşkil edir?",
      "options": [
        {
          "key": "A",
          "text": "Dağ-tundra"
        },
        {
          "key": "B",
          "text": "Quru çöl və yarımsəhra"
        },
        {
          "key": "C",
          "text": "Rütubətli subtropik"
        },
        {
          "key": "D",
          "text": "Soyuq meşə iqlimi"
        }
      ],
      "correctKey": "B",
      "explanation": "Kür-Araz ovalığı və Abşeronda yayı isti və quraq, qışı mülayim keçən yarımsəhra və quru çöl iqlimi hakimdir."
    }
  ]
},
{
  "id": "lesson-hist-10-manna",
  "subjectId": "tarix",
  "grade": 10,
  "unit": "Qədim Şərq və Azərbaycan Dövlətləri",
  "unitOrder": 1,
  "title": "Qədim Azərbaycan: Manna Dövləti",
  "order": 1,
  "readTimeMinutes": 11,
  "difficulty": 2,
  "summary": "Urmiya gölü hövzəsi, e.ə. IX əsr, paytaxt İzirtu, İranzu və Ullusunun islahatları, Həsənli və Ziyviyə tapıntıları.",
  "theoryMarkdown": "\n### 1. Manna Dövlətinin Yaranması\nAzərbaycanın cənubunda (Urmiya gölü ətrafında) e.ə. IX əsrdə yaranmış ilk mərkəzləşdirilmiş dövlət **Mannadır**.\nİlk dəfə e.ə. 843-cü ildə III Salmanasarın mixi yazılı kitabəsində adı çəkilir.\nPaytaxtı **İzirtu** şəhəri olmuşdur.\n\n### 2. İranzunun Dövlətçilik İslahatları\nHökmdar **İranzunun** (e.ə. 740 - 719) dövründə Manna ən qüdrətli çağını yaşadı:\n- Ölkə canişinliklər sisteminə bölündü və mərkəzi hakimiyyət gücləndirildi.\n- Urartunun təcavüzlərinə qarşı Assuriya ilə hərbi-siyasi ittifaq yaradıldı.\n- Sənətkarlıq və metallurgiya yüksək inkişaf etdi (Həsənli qızıl camı və Ziyviyə gümüş qabı).\n\n### 3. Manna Mədəniyyəti və Süqutu\nMannalılar mixi və yerli heroqlif yazılardan istifadə etmişlər. Dövlət e.ə. 590-cı ildə güclənən Midiya imperiyası tərəfindən süquta uğradılmışdır.\n    ",
  "keyFormulas": [
    {
      "id": "f-h10-1",
      "name": "Tarixi Mərhələ",
      "latex": "\\\\text{e.ə. IX əsr (Yaranma)} \\\\to \\\\text{e.ə. 590 (Midiya tərəfindən süqut)}",
      "description": "Manna dövlətinin mövcudluq dövrü."
    }
  ],
  "glossary": [
    {
      "term": "İzirtu",
      "definition": "Qədim Manna dövlətinin möhkəm qala divarları ilə əhatələnmiş paytaxt şəhəri."
    },
    {
      "term": "Canişinlik",
      "definition": "Ölkənin mərkəzə tabe olan əyalət hakimləri vasitəsilə idarə edilmə sistemi."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-h10-1",
      "question": "Həsənli təpəsindən tapılmış məşhur qızıl cam hansı qədim Azərbaycan dövlətinin mədəniyyətinə aiddir?",
      "solution": "Manna dövlətinin yüksək zərgərlik və metalişləmə sənətini əks etdirən Həsənli qızıl camı e.ə. I minilliyin əvvəllərinə aiddir."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-h10-1",
      "question": "Manna dövlətinin paytaxtı hansı şəhər olmuşdur?",
      "options": [
        {
          "key": "A",
          "text": "Qəbələ"
        },
        {
          "key": "B",
          "text": "İzirtu"
        },
        {
          "key": "C",
          "text": "Təbriz"
        },
        {
          "key": "D",
          "text": "Bərdə"
        }
      ],
      "correctKey": "B",
      "explanation": "Manna dövlətinin paytaxtı Urmiya gölünün cənub-şərqində yerləşən İzirtu şəhəri idi."
    }
  ]
},
{
  "id": "lesson-hist-11-axc",
  "subjectId": "tarix",
  "grade": 11,
  "unit": "Yeni Dövr Azərbaycan Tarixi",
  "unitOrder": 1,
  "title": "Azərbaycan Xalq Cümhuriyyəti (1918–1920)",
  "order": 1,
  "readTimeMinutes": 13,
  "difficulty": 3,
  "summary": "28 may 1918 İstiqlal Bəyannaməsi, Şərqdə ilk parlamentli demokratik respublika, milli ordu, Bakı Dövlət Universiteti və diplomatik uğurlar.",
  "theoryMarkdown": "\n### 1. İstiqlal Bəyannaməsi (28 May 1918)\n28 may 1918-ci ildə Tiflisdə Azərbaycan Milli Şurası Məhəmməd Əmin Rəsulzadənin sədrliyi ilə **İstiqlal Bəyannaməsini** qəbul etdi. Bununla müsəlman Şərqində ilk demokratik və parlamentli respublika yaradıldı.\nBəyannamədə milliyyətindən, dinindən və cinsindən asılı olmayaraq bütün vətəndaşlara bərabər hüquqlar (o cümlədən qadınlara səsvermə hüququ) təsbit edildi.\n\n### 2. Dövlət Quruculuğu və İslahatlar\n- **Paytaxt:** Əvvəlcə Gəncə, 15 sentyabr 1918-ci ildə Qafqaz İslam Ordusunun köməyi ilə Bakı azad edildikdən sonra paytaxt Bakıya köçürüldü.\n- **Dövlət atributları:** Üçrəngli bayraq (9 noyabr 1918), dövlət himni və gerbi qəbul edildi.\n- **Maarif:** 1919-cu ildə ilk milli ali məktəb - Bakı Dövlət Universiteti təsis edildi, yüzlərlə gənc Avropaya təhsil almağa göndərildi.\n\n### 3. Beynəlxalq Tanınma\n11 yanvar 1920-ci ildə Paris Sülh Konfransında Əlimərdan bəy Topçubaşovun rəhbərlik etdiyi nümayəndə heyətinin səyi nəticəsində AXC-nin müstəqilliyi Antanta Ali Şurası tərəfindən **de-fakto** tanındı.\nRespublika 23 aylıq fəaliyyətdən sonra 28 aprel 1920-ci ildə XI Qırmızı Ordunun hərbi təcavüzü nəticəsində süqut etdi.\n    ",
  "keyFormulas": [
    {
      "id": "f-h11-1",
      "name": "AXC Xronologiyası",
      "latex": "1918 \\\\text{ (28 May)} \\\\to 1920 \\\\text{ (28 Aprel - 23 ay)}",
      "description": "Azərbaycan Xalq Cümhuriyyətinin fəaliyyət müddəti."
    }
  ],
  "glossary": [
    {
      "term": "Milli Şura",
      "definition": "1918-ci ildə Azərbaycan xalqı adından müstəqilliyi elan edən ilk qanunverici ali orqan."
    },
    {
      "term": "De-fakto",
      "definition": "Beynəlxalq hüquqda dövlətin faktiki olaraq rəsmən tanınması forması."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-h11-1",
      "question": "Müsəlman Şərqində qadınlara seçki hüququ verən ilk dövlət hansı olmuşdur?",
      "solution": "1918-ci ildə Azərbaycan Xalq Cümhuriyyəti bir çox Qərb dövlətlərindən belə əvvəl qadınlara seçmək və seçilmək hüququ vermişdir."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-h11-1",
      "question": "Azərbaycan Xalq Cümhuriyyətinin İstiqlal Bəyannaməsi neçənci ildə qəbul edilmişdir?",
      "options": [
        {
          "key": "A",
          "text": "28 may 1918"
        },
        {
          "key": "B",
          "text": "15 sentyabr 1918"
        },
        {
          "key": "C",
          "text": "28 aprel 1920"
        },
        {
          "key": "D",
          "text": "9 noyabr 1919"
        }
      ],
      "correctKey": "A",
      "explanation": "28 may 1918-ci ildə Tiflisdə İstiqlal Bəyannaməsi qəbul edilmiş və Respublika elan olunmuşdur."
    }
  ]
},
{
  "id": "lesson-azeri-6-phonetics",
  "subjectId": "azerbaycan_dili",
  "grade": 6,
  "unit": "Fonetika və Orfoepiya",
  "unitOrder": 1,
  "title": "Ahəng Qanunu və Saitlərin Bölgüsü",
  "order": 1,
  "readTimeMinutes": 8,
  "difficulty": 1,
  "summary": "Qalın və incə, dodaqlanan və dodaqlanmayan saitlər, ahəng qanununun morfoloji mahiyyəti və şəkilçilərin calanması.",
  "theoryMarkdown": "\n### 1. Sait Səslərin Təsnifatı\nAzərbaycan əlifbasında 9 sait səs var:\n- **Dilin arxa və ya ön hissəsində deyilməsinə görə:**\n  - Qalın saitlər: **a, ı, o, u**\n  - İncə saitlər: **e, ə, i, ö, ü**\n- **Dodaqların vəziyyətinə görə:**\n  - Dodaqlanan: **o, u, ö, ü**\n  - Dodaqlanmayan: **a, e, ə, ı, i**\n- **Çənənin və dilin şaquli vəziyyətinə görə:**\n  - Açıq saitlər: **a, e, ə, o, ö**\n  - Qapalı saitlər: **ı, i, u, ü**\n\n### 2. Ahəng Qanunu\nSözdə qalın və ya incə saitlərin bir-birini izləməsinə **ahəng qanunu** deyilir.\nAhəng qanunu türk dillərinin \"dəmir qanunudur\". Şəkilçilər sözün son hecasındakı saitin ahənginə uyğun olaraq calanır:\n- Əgər son sait qalındırsa: *-lar, -da, -dan, -a* (məs: *kitab-lar, otaq-da*)\n- Əgər son sait incədirsə: *-lər, -də, -dən, -ə* (məs: *ev-lər, məktəb-də*)\n    ",
  "keyFormulas": [
    {
      "id": "f-az6-1",
      "name": "Ahəng Qanunu Sxemi",
      "latex": "\\\\text{Qalın} \\\\to \\\\text{Qalın} \\\\quad (a, ı, o, u), \\\\quad \\\\text{İncə} \\\\to \\\\text{İncə} \\\\quad (e, ə, i, ö, ü)",
      "description": "Söz kökündə və şəkilçidə saitlərin həmahəngliyi."
    }
  ],
  "glossary": [
    {
      "term": "Ahəng qanunu",
      "definition": "Sözdə eynicinsli (yalnız qalın və ya yalnız incə) saitlərin bir-birini izləməsi xüsusiyyəti."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-az6-1",
      "question": "\"Dənizçilər\" sözündə ahəng qanunu gözlənilibmi?",
      "solution": "Sözdəki saitlər: ə, i, i, ə. Hamısı incə saitlərdir, buna görə ahəng qanunu tam gözlənilmişdir."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-az6-1",
      "question": "Aşağıdakı sözlərdən hansında ahəng qanunu pozulmuşdur?",
      "options": [
        {
          "key": "A",
          "text": "Qələm"
        },
        {
          "key": "B",
          "text": "Kitab"
        },
        {
          "key": "C",
          "text": "Uşaqlar"
        },
        {
          "key": "D",
          "text": "Dəftərxana"
        }
      ],
      "correctKey": "B",
      "explanation": "\"Kitab\" sözündə həm incə (i), həm də qalın (a) sait işləndiyi üçün ahəng qanunu pozulub."
    }
  ]
},
{
  "id": "lesson-azeri-9-compound-sentences",
  "subjectId": "azerbaycan_dili",
  "grade": 9,
  "unit": "Sintaksis: Mürəkkəb Cümlə",
  "unitOrder": 1,
  "title": "Tabesiz və Tabeli Mürəkkəb Cümlələr",
  "order": 1,
  "readTimeMinutes": 11,
  "difficulty": 3,
  "summary": "İki və daha artıq qrammatik əsas, bərabərhüquqlu və tabe komponentlər, bağlayıcılar və intonasiya əlaqəsi.",
  "theoryMarkdown": "\n### 1. Mürəkkəb Cümlə Nədir?\nİki və ya daha artıq sadə cümlənin məna və qrammatik cəhətdən birləşməsindən yaranan cümlələrə **mürəkkəb cümlə** deyilir. Hər komponentin öz mübtədası və xəbəri (qrammatik əsası) olur.\n\n### 2. Tabesiz Mürəkkəb Cümlələr\nKomponentləri bərabərhüquqlu olur, biri digərindən asılı olmur. Yalnız intonasiya və ya tabesizlik bağlayıcıları (*və, amma, ancaq, lakin, ya... ya da*) ilə bağlanır:\n- *\"Zəng vuruldu və şagirdlər sinfə daxil oldular.\"* $[\\\\quad], \\\\text{ və } [\\\\quad].$\n\n### 3. Tabeli Mürəkkəb Cümlələr\nKomponentlərdən biri digərindən qrammatik asılı olur. Əsas fikir **baş cümlədə**, onu aydınlaşdıran fikir isə **budaq cümlədə** verilir.\nBağlayıcı vasitələr: tabelilik bağlayıcıları (*çünki, ona görə ki, ki, əgər, hərçənd*) və bağlayıcı sözlər (*kim ki, hara ki*).\n- *\"Müəllim bildirdi ki, sabah sınaq imtahanı olacaq.\"* $[\\\\text{Baş}], \\\\text{ ki, } (\\\\text{Budaq}).$\n    ",
  "keyFormulas": [
    {
      "id": "f-az9-1",
      "name": "Mürəkkəb Cümlə Sxemi",
      "latex": "[\\\\quad] \\\\leftrightarrow [\\\\quad] \\\\text{ (Tabesiz)}, \\\\quad [\\\\text{Baş}] \\\\to (\\\\text{Budaq}) \\\\text{ (Tabeli)}",
      "description": "Komponentlərin sintaktik asılılıq modeli."
    }
  ],
  "glossary": [
    {
      "term": "Baş cümlə",
      "definition": "Tabeli mürəkkəb cümlədə müstəqil olan və budaq cümlə tərəfindən izah edilən komponent."
    },
    {
      "term": "Budaq cümlə",
      "definition": "Baş cümlənin buraxılmış üzvünü və ya bütövlükdə məzmununu izah edən asılı komponent."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-az9-1",
      "question": "\"Yağış yağırdı, külək isə yarpaqları qovurdu\" cümləsinin növünü təyin edin.",
      "solution": "İki sadə cümlədən ibarətdir, komponentlər bərabərhüquqludur və qarşılaşdırma münasibəti var. Tabesiz mürəkkəb cümlədir."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-az9-1",
      "question": "\"Hamı bilirdi ki, o, çox istedadlı şagirddir\" cümləsi hansı növ mürəkkəb cümlədir?",
      "options": [
        {
          "key": "A",
          "text": "Tabesiz mürəkkəb cümlə"
        },
        {
          "key": "B",
          "text": "Tabeli mürəkkəb cümlə"
        },
        {
          "key": "C",
          "text": "Həmcins xəbərli sadə cümlə"
        },
        {
          "key": "D",
          "text": "Ümumi şəxsli cümlə"
        }
      ],
      "correctKey": "B",
      "explanation": "\"ki\" aydınlaşdırma bağlayıcısı ilə bağlanmış tamamlıq budaq cümləli tabeli mürəkkəb cümlədir."
    }
  ]
},
{
  "id": "lesson-eng-9-conditionals",
  "subjectId": "xarici_dil",
  "grade": 9,
  "unit": "Grammar: Complex Sentences",
  "unitOrder": 1,
  "title": "Conditionals: Zero, First & Second Conditional",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 3,
  "summary": "Real and unreal conditions, scientific facts, future possibilities, hypothetical scenarios and 'If clauses'.",
  "theoryMarkdown": "\n### 1. Zero Conditional (Faktlar və Təbii Qanunlar)\nHəmişə doğru olan ümumi həqiqətlər və elmi faktlar üçün:\n$$\\\\text{If} + \\\\text{Present Simple}, \\\\quad \\\\text{Present Simple}$$\n- *\"If you heat water to 100°C, it boils.\"*\n\n### 2. First Conditional (Gələcəkdə Real Şərt)\nGələcəkdə baş verməsi tamamilə mümkün olan real şərtlər:\n$$\\\\text{If} + \\\\text{Present Simple}, \\\\quad \\\\text{Future Simple (will + V1)}$$\n- *\"If it rains tomorrow, we will stay at home.\"*\n*(Qeyd: 'If' olan hissədə heç vaxt 'will' işlənməz!)*\n\n### 3. Second Conditional (Xəyali / Qeyri-real Şərt)\nİndiki və ya gələcək zamanda qeyri-real, xəyali vəziyyətlər üçün:\n$$\\\\text{If} + \\\\text{Past Simple}, \\\\quad \\\\text{would} + V_1$$\n- *\"If I had a million dollars, I would travel around the world.\"*\n*(Bütün şəxslərdə 'to be' feli üçün 'were' işlənir: If I were you...)*\n    ",
  "keyFormulas": [
    {
      "id": "f-e9-1",
      "name": "First Conditional Formula",
      "latex": "\\\\text{If} + V_1 \\\\implies \\\\text{will} + V_1",
      "description": "Real gələcək şərt formulu."
    },
    {
      "id": "f-e9-2",
      "name": "Second Conditional Formula",
      "latex": "\\\\text{If} + V_2 \\\\implies \\\\text{would} + V_1",
      "description": "İndiki zamana aid xəyali vəziyyət."
    }
  ],
  "glossary": [
    {
      "term": "Hypothetical",
      "definition": "Hələ baş verməmiş, xəyalda canlandırılan qeyri-real vəziyyət."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-e9-1",
      "question": "\"If she ____ (study) hard, she will pass the exam.\" Boşluğu düzgün zamanla doldurun.",
      "solution": "Nəticə hissəsində 'will pass' (First Conditional) olduğu üçün If budaq cümləsində Present Simple tələb olunur: \"studies\"."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-e9-1",
      "question": "Choose the correct sentence in Second Conditional:",
      "options": [
        {
          "key": "A",
          "text": "If I study, I will get high marks."
        },
        {
          "key": "B",
          "text": "If I had wings, I would fly."
        },
        {
          "key": "C",
          "text": "If you freeze water, it turns into ice."
        },
        {
          "key": "D",
          "text": "If it will rain, we cancel the match."
        }
      ],
      "correctKey": "B",
      "explanation": "'If I had wings, I would fly' indiki zamana aid qeyri-real xəyali arzudur (Second Conditional)."
    }
  ]
},
{
  "id": "lesson-eng-10-passive-voice",
  "subjectId": "xarici_dil",
  "grade": 10,
  "unit": "Grammar: Advanced Voice",
  "unitOrder": 1,
  "title": "The Passive Voice (Məchul Növ)",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 3,
  "summary": "Məchul növün mahiyyəti, 'to be + V3' ümumi formulu, müxtəlif zamanlarda dəyişməsi və 'by' sözönü ilə icraçı.",
  "theoryMarkdown": "\n### 1. Passive Voice Nədir?\nCümlədə hərəkəti kimin etdiyi bilinmədikdə və ya hərəkətin obyekti icraçıdan daha vacib olduqda **məchul növ (Passive Voice)** işlədilir.\n- **Məlum (Active):** *\"Alexander Bell invented the telephone in 1876.\"*\n- **Məchul (Passive):** *\"The telephone was invented by Alexander Bell in 1876.\"*\n\n### 2. Ümumi Düzəlmə Qaydası\n$$\\\\text{Obyekt} + \\\\mathbf{to \\\\; be} + \\\\mathbf{V_3 / V_{ed}} + (\\\\text{by} + \\\\text{İcraçı})$$\n\n### 3. Zamanlara Görə Cədvəl\n- **Present Simple:** $$am / is / are + V_3$$ (*English is spoken here.*)\n- **Past Simple:** $$was / were + V_3$$ (*The bridge was built in 1995.*)\n- **Future Simple:** $$will \\\\; be + V_3$$ (*The results will be announced tomorrow.*)\n- **Present Perfect:** $$have / has \\\\; been + V_3$$ (*The room has been cleaned.*)\n- **Modallar:** $$can / must / should + be + V_3$$ (*Rules must be obeyed.*)\n    ",
  "keyFormulas": [
    {
      "id": "f-e10-p1",
      "name": "Passive Voice Formula",
      "latex": "S + \\\\text{to be} + V_3",
      "description": "Bütün məchul cümlələrin əsas nüvə formulu."
    }
  ],
  "glossary": [
    {
      "term": "Agent (by ...)",
      "definition": "Məchul cümlədə işi görən şəxsi göstərmək üçün istifadə olunan ifadə."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-e10-p1",
      "question": "\"They clean the rooms every day.\" cümləsini məchul növə çevirin.",
      "solution": "\"The rooms are cleaned every day.\" (Present Simple cümləsi 'are + V3' ilə məchula keçir)."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-e10-p1",
      "question": "Which sentence is correctly written in Passive Voice?",
      "options": [
        {
          "key": "A",
          "text": "The letter was written yesterday."
        },
        {
          "key": "B",
          "text": "He has wrote a letter."
        },
        {
          "key": "C",
          "text": "They were built a house."
        },
        {
          "key": "D",
          "text": "She was painted the wall."
        }
      ],
      "correctKey": "A",
      "explanation": "'The letter was written yesterday' cümləsində was + V3 düzgün işlənmişdir."
    }
  ]
},
{
  "id": "lesson-inf-9-networks-ip",
  "subjectId": "informatika",
  "grade": 9,
  "unit": "Kompüter Şəbəkələri və İnternet",
  "unitOrder": 1,
  "title": "Kompüter Şəbəkələri, IP Ünvan və Domen Sistemi (DNS)",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 2,
  "summary": "Lokal (LAN) və qlobal (WAN) şəbəkələr, IPv4 ünvan strukturu, 4 bayt/32 bitlik quruluş və URL tərkibi.",
  "theoryMarkdown": "\n### 1. Kompüter Şəbəkələrinin Növləri\nİnformasiya mübadiləsi üçün rabitə xətləri ilə birləşdirilmiş kompüterlər sisteminə **şəbəkə** deyilir:\n- **LAN (Local Area Network):** Bir otaq, məktəb və ya bina daxilindəki lokal şəbəkə.\n- **WAN (Wide Area Network):** Şəhərləri, ölkələri və qitələri birləşdirən qlobal şəbəkə (ən böyüyü İnternetdir).\n\n### 2. IP Ünvan Strukturu (IPv4)\nŞəbəkəyə qoşulmuş hər bir qurğuya unikal 32 bitlik (4 baytlıq) rəqəmsal **IP ünvan** verilir.\nNöqtələrlə ayrılmış 4 onluq ədəddən ibarətdir:\n$$A . B . C . D \\\\quad (0 \\\\le A, B, C, D \\\\le 255)$$\nMəsələn: `192.168.1.1` və ya `8.8.8.8`. Heç bir ədəd 255-dən böyük və ya mənfi ola bilməz.\n\n### 3. Domen Adları Sistemi (DNS)\nİnsanların rəqəmlərdən ibarət IP ünvanları yadda saxlaması çətin olduğundan **DNS** sistemi yaradılmışdır. O, hərfli adları (`google.com`) IP ünvanına çevirir:\n- URL strukturu: `https://` (protokol) `www.mektebplus.az` (domen adı) `/dersler` (fayl yolu).\n    ",
  "keyFormulas": [
    {
      "id": "f-inf9-1",
      "name": "IPv4 Həcmi",
      "latex": "4 \\\\text{ Bayt} = 32 \\\\text{ bit} \\\\implies 2^{32} \\\\approx 4.3 \\\\text{ milyard ünvan}",
      "description": "IPv4 standartında mümkün olan maksimum ünvan sayı."
    }
  ],
  "glossary": [
    {
      "term": "DNS (Domain Name System)",
      "definition": "Domen adlarını avtomatik olaraq IP ünvanlarına çevirən paylanmış qovluq xidməti."
    },
    {
      "term": "Protokol",
      "definition": "Şəbəkədə məlumatların ötürülmə və qəbul edilmə qaydalarını müəyyən edən standart (məs: HTTP, TCP/IP)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-inf9-1",
      "question": "`205.112.280.14` IP ünvanı düzgündürmü?",
      "solution": "Xeyr, səhvdir. Çünki üçüncü hissədəki 280 ədədi icazə verilən maksimum 255 həddini aşır."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-inf9-1",
      "question": "IPv4 ünvanı yaddaşda neçə bayt yer tutur?",
      "options": [
        {
          "key": "A",
          "text": "2 bayt"
        },
        {
          "key": "B",
          "text": "4 bayt"
        },
        {
          "key": "C",
          "text": "8 bayt"
        },
        {
          "key": "D",
          "text": "16 bayt"
        }
      ],
      "correctKey": "B",
      "explanation": "IPv4 ünvanı 32 bit, yəni 4 baytdan ibarətdir."
    }
  ]
},
{
  "id": "lesson-inf-11-databases-sql",
  "subjectId": "informatika",
  "grade": 11,
  "unit": "İnformasiya Sistemləri və Verilənlər Bazası",
  "unitOrder": 1,
  "title": "Relyasiyalı Verilənlər Bazası və SQL Əsasları",
  "order": 1,
  "readTimeMinutes": 12,
  "difficulty": 3,
  "summary": "Cədvəl modeli, sətir (yazı/record), sütun (sahə/field), ilkin açar (primary key) və əsas SQL sorğuları (SELECT, WHERE).",
  "theoryMarkdown": "\n### 1. Relyasiyalı Verilənlər Bazası Modeli\nVerilənlərin bir-biri ilə əlaqəli ikiölçülü cədvəllər şəklində saxlandığı bazaya **relyasiyalı verilənlər bazası (RDBMS)** deyilir:\n- **Sahə (Field / Sütun):** Eyni növ məlumatın atributunu saxlayır (məs: *Ad*, *Soyad*, *Doğum_Tarixi*).\n- **Yazı (Record / Sətir):** Konkret bir obyektə aid bütün məlumatlar toplusu.\n- **İlkin Açar (Primary Key):** Cədvəldə hər bir sətri unikal şəkildə fərqləndirən təkrarlanmayan sahə (məs: *Şagirdin Şəxsiyyət Vəsiqəsi FİN kodu*).\n\n### 2. SQL (Structured Query Language) Əsasları\nVerilənlər bazasından məlumat axtarmaq və idarə etmək üçün standart dildir:\n- **Bütün cədvəli seçmək:**\n  ```sql\n  SELECT * FROM Sagirdler;\n  ```\n- **Filtrləmə (WHERE şərti):**\n  ```sql\n  SELECT Ad, Soyad, Bal FROM Sagirdler WHERE Bal >= 90 ORDER BY Bal DESC;\n  ```\n- **Yeni məlumat əlavə etmək:**\n  ```sql\n  INSERT INTO Sagirdler (Ad, Sinif) VALUES ('Leyla', 10);\n  ```\n    ",
  "keyFormulas": [
    {
      "id": "f-inf11-1",
      "name": "SQL Standart Sintaksisi",
      "latex": "\\\\text{SELECT } [\\\\text{sütunlar}] \\\\text{ FROM } [\\\\text{cədvəl}] \\\\text{ WHERE } [\\\\text{şərt}]",
      "description": "Relyasiyalı bazalarda filtrasiya sorğusunun əsas strukturu."
    }
  ],
  "glossary": [
    {
      "term": "Primary Key (İlkin Açar)",
      "definition": "Cədvəldəki hər bir sətrin təkrarsızlığını təmin edən unikal identifikator."
    },
    {
      "term": "RDBMS",
      "definition": "Relyasiyalı verilənlər bazasının idarəetmə sistemi (məs: PostgreSQL, MySQL, SQLite)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-inf11-1",
      "question": "`SELECT Ad FROM Kitablar WHERE Qiymet < 15;` sorğusu nəyi qaytaracaq?",
      "solution": "Qiyməti 15 manatdan ucuz olan bütün kitabların yalnız adlarından ibarət siyahını qaytaracaq."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-inf11-1",
      "question": "Verilənlər bazasında cədvəlin bir sətri nə adlanır?",
      "options": [
        {
          "key": "A",
          "text": "Sahə (Field)"
        },
        {
          "key": "B",
          "text": "Yazı (Record)"
        },
        {
          "key": "C",
          "text": "İndeks"
        },
        {
          "key": "D",
          "text": "Açar"
        }
      ],
      "correctKey": "B",
      "explanation": "Cədvəldə hər bir sətir bir obyektə aid məlumatları əks etdirən Yazı (Record) adlanır."
    }
  ]
},
{
  "id": "lesson-math-6-geometry-perimeter",
  "subjectId": "riyaziyyat",
  "grade": 6,
  "unit": "Həndəsi Fiqurlar və Ölçmələr",
  "unitOrder": 2,
  "title": "Düzbucaqlı və Kvadrat. Perimetr və Sahə",
  "order": 2,
  "readTimeMinutes": 8,
  "difficulty": 1,
  "summary": "Düzbucaqlı və kvadratın xassələri, perimetr düsturu, sahə anlayışı və sahə vahidləri.",
  "theoryMarkdown": "\n### 1. Düzbucaqlı və Kvadrat\nBütün bucaqları düz bucaq ($90^\\\\circ$) olan paraleloqrama **düzbucaqlı** deyilir. Qarşı tərəfləri bərabər və paraleldir:\n- Tərəfləri $a$ və $b$ olan düzbucaqlının **perimetri**:\n  $$P = 2(a + b)$$\n- **Sahəsi**:\n  $$S = a \\\\cdot b$$\n\nBütün tərəfləri bərabər olan düzbucaqlıya **kvadrat** deyilir ($a = b$):\n- **Perimetri**: $$P = 4a$$\n- **Sahəsi**: $$S = a^2$$\n\n### 2. Sahə Vahidləri\n$$1 \\\\text{ m}^2 = 100 \\\\text{ dm}^2 = 10\\\\,000 \\\\text{ sm}^2$$\n$$1 \\\\text{ ar (sot)} = 100 \\\\text{ m}^2, \\\\quad 1 \\\\text{ ha (hektar)} = 10\\\\,000 \\\\text{ m}^2$$\n    ",
  "keyFormulas": [
    {
      "id": "f-m5-geo-1",
      "name": "Düzbucaqlının Sahəsi",
      "latex": "S = a \\\\cdot b",
      "description": "Eni vurulsun uzunluğu."
    },
    {
      "id": "f-m5-geo-2",
      "name": "Düzbucaqlının Perimetri",
      "latex": "P = 2(a + b)",
      "description": "Bütün tərəflərinin cəmi."
    }
  ],
  "glossary": [
    {
      "term": "Perimetr",
      "definition": "Həndəsi fiqurun bütün tərəflərinin uzunluqları cəmi."
    },
    {
      "term": "Kvadrat",
      "definition": "Bütün tərəfləri və bütün bucaqları bərabər olan düzgün dördbucaqlı."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m5-geo-1",
      "question": "Eni $a = 6 \\\\text{ sm}$, uzunluğu $b = 9 \\\\text{ sm}$ olan düzbucaqlının perimetrini və sahəsini tapın.",
      "solution": "$P = 2(6 + 9) = 2 \\\\cdot 15 = 30 \\\\text{ sm}$. Sahə: $S = 6 \\\\cdot 9 = 54 \\\\text{ sm}^2$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m5-geo-1",
      "question": "Tərəfi 8 sm olan kvadratın sahəsi neçə kvadrat santimetrdir?",
      "options": [
        {
          "key": "A",
          "text": "32 sm²"
        },
        {
          "key": "B",
          "text": "64 sm²"
        },
        {
          "key": "C",
          "text": "16 sm²"
        },
        {
          "key": "D",
          "text": "48 sm²"
        }
      ],
      "correctKey": "B",
      "explanation": "Kvadratın sahəsi S = a^2 = 8^2 = 64 sm²."
    }
  ]
},
{
  "id": "lesson-math-6-circle-pi",
  "subjectId": "riyaziyyat",
  "grade": 6,
  "unit": "Həndəsi Xətlər və Çevrə",
  "unitOrder": 3,
  "title": "Dairə və Çevrə. Pi (π) Ədədi və Sahə Düsturu",
  "order": 3,
  "readTimeMinutes": 9,
  "difficulty": 1,
  "summary": "Mərkəz, radius, diametr, çevrənin uzunluğu ($C=2\\pi R$), dairənin sahəsi ($S=\\pi R^2$) və $\\pi \\approx 3.14$ sabiti.",
  "theoryMarkdown": "\n### 1. Çevrə və Onun Əsas Elementləri\nMüstəvidə verilmiş nöqtədən (mərkəzdən) bərabər məsafədə olan nöqtələrin həndəsi yerinə **çevrə** deyilir:\n- **Radius ($R$):** Mərkəzi çevrənin ixtiyari nöqtəsi ilə birləşdirən parça.\n- **Vətər:** Çevrənin iki nöqtəsini birləşdirən parça.\n- **Diametr ($D$):** Mərkəzdən keçən ən böyük vətər ($D = 2R$).\n\n### 2. Pi ($\\\\pi$) Ədədi və Çevrənin Uzunluğu\nİxtiyari çevrənin uzunluğunun ($C$) onun diametrinə ($D$) nisbəti bütün çevrələr üçün sabit kəmiyyətdir və **$\\\\pi$ (pi)** adlanır:\n$$\\\\pi = \\\\frac{C}{D} \\\\approx 3.14159 \\\\dots \\\\approx 3.14$$\nBuradan çevrənin uzunluğu:\n$$C = 2\\\\pi R = \\\\pi D$$\n\n### 3. Dairənin Sahəsi\nÇevrə ilə hüdudlanmış müstəvi hissəsinə **dairə** deyilir. Dairənin sahəsi:\n$$S = \\\\pi R^2$$\n    ",
  "keyFormulas": [
    {
      "id": "f-m6-c1",
      "name": "Çevrənin Uzunluğu",
      "latex": "C = 2\\\\pi R",
      "description": "İki vurulsun pi vurulsun radius."
    },
    {
      "id": "f-m6-c2",
      "name": "Dairənin Sahəsi",
      "latex": "S = \\\\pi R^2",
      "description": "Pi vurulsun radiusun kvadratı."
    }
  ],
  "glossary": [
    {
      "term": "Pi (π) ədədi",
      "definition": "Çevrə uzunluğunun onun diametrinə nisbətini ifadə edən irrasional riyazi sabit (təqribən 3.14)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m6-c1",
      "question": "Radiusu $R = 5 \\\\text{ sm}$ olan dairənin sahəsini tapın ($\\\\pi = 3.14$).",
      "solution": "$$S = \\\\pi R^2 = 3.14 \\\\cdot 5^2 = 3.14 \\\\cdot 25 = 78.5 \\\\text{ sm}^2$$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m6-c1",
      "question": "Diametri $D = 10 \\\\text{ sm}$ olan çevrənin uzunluğu neçə sm-dir? ($\\pi = 3.14$ götürün)",
      "options": [
        {
          "key": "A",
          "text": "31.4 sm"
        },
        {
          "key": "B",
          "text": "62.8 sm"
        },
        {
          "key": "C",
          "text": "15.7 sm"
        },
        {
          "key": "D",
          "text": "100 sm"
        }
      ],
      "correctKey": "A",
      "explanation": "C = pi * D = 3.14 * 10 = 31.4 sm."
    }
  ]
},
{
  "id": "lesson-math-7-triangle-angles",
  "subjectId": "riyaziyyat",
  "grade": 7,
  "unit": "Üçbucaqlar və Əsas Xassələri",
  "unitOrder": 2,
  "title": "Üçbucağın Daxili və Xarici Bucaqlarının Cəmi",
  "order": 2,
  "readTimeMinutes": 9,
  "difficulty": 2,
  "summary": "Daxili bucaqların cəmi ($180^\\circ$), xarici bucaq xassəsi və bərabəryanlı üçbucaqda bucaqlar.",
  "theoryMarkdown": "\n### 1. Üçbucağın Daxili Bucaqlarının Cəmi Teoremi\nİxtiyari üçbucağın daxili bucaqlarının cəmi **$180^\\\\circ$**-yə bərabərdir:\n$$\\\\alpha + \\\\beta + \\\\gamma = 180^\\\\circ$$\n\n### 2. Üçbucağın Xarici Bucağı\nÜçbucağın bir təpəsindəki daxili bucağı ilə qonşu olan bucağa **xarici bucaq** deyilir.\n**Əsas Teorem:** Üçbucağın hər hansı xarici bucağı ona qonşu olmayan iki daxili bucağın cəminə bərabərdir:\n$$\\\\alpha_{\\\\text{xarici}} = \\\\beta + \\\\gamma$$\nİxtiyari qabarıq çoxbucaqlının (o cümlədən üçbucağın) hər təpəsindən biri götürülməklə xarici bucaqlarının cəmi **$360^\\\\circ$**-dir.\n    ",
  "keyFormulas": [
    {
      "id": "f-m7-tri-1",
      "name": "Daxili Bucaqlar Cəmi",
      "latex": "\\\\alpha + \\\\beta + \\\\gamma = 180^\\\\circ",
      "description": "İxtiyari üçbucağın daxili bucaqları cəmi."
    },
    {
      "id": "f-m7-tri-2",
      "name": "Xarici Bucaq Teoremi",
      "latex": "\\\\phi = \\\\alpha + \\\\beta",
      "description": "Qonşu olmayan daxili bucaqların cəmi."
    }
  ],
  "glossary": [
    {
      "term": "Xarici bucaq",
      "definition": "Üçbucağın daxili bucağı ilə qonşu bucaq əmələ gətirən bucaq."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m7-tri-1",
      "question": "Üçbucağın iki daxili bucağı $50^\\\\circ$ və $70^\\\\circ$-dir. Üçüncü bucağı və üçüncü təpədəki xarici bucağı tapın.",
      "solution": "Üçüncü daxili bucaq: $\\\\gamma = 180^\\\\circ - (50^\\\\circ + 70^\\\\circ) = 60^\\\\circ$. Xarici bucaq: $50^\\\\circ + 70^\\\\circ = 120^\\\\circ$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m7-tri-1",
      "question": "Bərabərtərəfli üçbucağın hər bir xarici bucağı neçə dərəcədir?",
      "options": [
        {
          "key": "A",
          "text": "60°"
        },
        {
          "key": "B",
          "text": "90°"
        },
        {
          "key": "C",
          "text": "120°"
        },
        {
          "key": "D",
          "text": "150°"
        }
      ],
      "correctKey": "C",
      "explanation": "Bərabərtərəfli üçbucağın daxili bucağı 60°-dir. Qonşu xarici bucaq: 180° - 60° = 120°."
    }
  ]
},
{
  "id": "lesson-math-8-pythagoras",
  "subjectId": "riyaziyyat",
  "grade": 8,
  "unit": "Düzbucaqlı Üçbucaq və Metrik Münasibətlər",
  "unitOrder": 2,
  "title": "Pifaqor Teoremi və Tətbiqləri",
  "order": 2,
  "readTimeMinutes": 10,
  "difficulty": 2,
  "summary": "Katetlərin kvadratları cəmi və hipotenuzun kvadratı ($a^2+b^2=c^2$), Pifaqor üçlükləri və hündürlük xassələri.",
  "theoryMarkdown": "\n### 1. Pifaqor Teoremi\nDüzbucaqlı üçbucaqda katetlərin kvadratları cəmi hipotenuzun kvadratına bərabərdir:\n$$a^2 + b^2 = c^2$$\nBuradan hipotenuz və katetlər:\n$$c = \\\\sqrt{a^2 + b^2}, \\\\quad a = \\\\sqrt{c^2 - b^2}$$\n\n### 2. Məşhur Pifaqor Üçlükləri (Misir Üçbucağı)\nTərəfləri tam ədədlərdən ibarət olan düzbucaqlı üçbucaqlar:\n- $(3, 4, 5)$ və onun mislləri: $(6, 8, 10), (9, 12, 15)$\n- $(5, 12, 13)$\n- $(8, 15, 17)$\n- $(7, 24, 25)$\n\n### 3. Düz Bucaq Təpəsindən Çəkilmiş Hündürlük\n$$h_c^2 = a_c \\\\cdot b_c, \\\\quad h_c = \\\\frac{a \\\\cdot b}{c}$$\nBurada $a_c$ və $b_c$ katetlərin hipotenuz üzərindəki proyeksiyalarıdır.\n    ",
  "keyFormulas": [
    {
      "id": "f-m8-pyth-1",
      "name": "Pifaqor Teoremi",
      "latex": "a^2 + b^2 = c^2",
      "description": "Katetlərin kvadratları cəmi hipotenuzun kvadratıdır."
    },
    {
      "id": "f-m8-pyth-2",
      "name": "Hündürlük Düsturu",
      "latex": "h_c = \\\\frac{a \\\\cdot b}{c}",
      "description": "Katetlərin hasili bölünmüş hipotenuz."
    }
  ],
  "glossary": [
    {
      "term": "Misir üçbucağı",
      "definition": "Tərəfləri 3, 4 və 5 nisbətində olan düzbucaqlı üçbucaq."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m8-pyth-1",
      "question": "Katetləri $a = 5 \\\\text{ sm}$ və $b = 12 \\\\text{ sm}$ olan düzbucaqlı üçbucağın hipotenuzunu tapın.",
      "solution": "$$c = \\\\sqrt{5^2 + 12^2} = \\\\sqrt{25 + 144} = \\\\sqrt{169} = 13 \\\\text{ sm}$$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m8-pyth-1",
      "question": "Düzbucaqlı üçbucağın hipotenuzu 10 sm, bir kateti 6 sm olarsa, digər katet neçə sm-dir?",
      "options": [
        {
          "key": "A",
          "text": "4 sm"
        },
        {
          "key": "B",
          "text": "8 sm"
        },
        {
          "key": "C",
          "text": "7 sm"
        },
        {
          "key": "D",
          "text": "9 sm"
        }
      ],
      "correctKey": "B",
      "explanation": "b = sqrt(10^2 - 6^2) = sqrt(100 - 36) = sqrt(64) = 8 sm."
    }
  ]
},
{
  "id": "lesson-math-9-sequences",
  "subjectId": "riyaziyyat",
  "grade": 9,
  "unit": "Ədədi Ardıcıllıqlar və Silsilələr",
  "unitOrder": 2,
  "title": "Ədədi və Həndəsi Silsilə",
  "order": 2,
  "readTimeMinutes": 11,
  "difficulty": 3,
  "summary": "Silsilə fərqi ($d$) və vuruğu ($q$), n-ci hədd düsturu və ilk n həddin cəm düsturları.",
  "theoryMarkdown": "\n### 1. Ədədi Silsilə\nİkincidən başlayaraq hər bir həddi özündən əvvəlki hədlə eyni bir $d$ ədədinin (silsilə fərqinin) cəminə bərabər olan ardıcıllığa **ədədi silsilə** deyilir:\n- $n$-ci hədd: $$a_n = a_1 + (n - 1)d$$\n- İlk $n$ həddin cəmi: $$S_n = \\\\frac{a_1 + a_n}{2} \\\\cdot n = \\\\frac{2a_1 + (n - 1)d}{2} \\\\cdot n$$\n\n### 2. Həndəsi Silsilə\nBirinci həddi sıfırdan fərqli olub, ikincidən başlayaraq hər bir həddi özündən əvvəlki hədlə eyni bir $q$ ədədinin (silsilə vuruğunun, $q \\\\neq 0$) hasilinə bərabər olan ardıcıllıqdır:\n- $n$-ci hədd: $$b_n = b_1 \\\\cdot q^{n - 1}$$\n- İlk $n$ həddin cəmi ($q \\\\neq 1$): $$S_n = \\\\frac{b_1(q^n - 1)}{q - 1}$$\n- Sonsuz azalan həndəsi silsilənin cəmi ($|q| < 1$): $$S = \\\\frac{b_1}{1 - q}$$\n    ",
  "keyFormulas": [
    {
      "id": "f-m9-s1",
      "name": "Ədədi Silsilə n-ci Hədd",
      "latex": "a_n = a_1 + (n-1)d",
      "description": "İstənilən n-ci həddin tapılması."
    },
    {
      "id": "f-m9-s2",
      "name": "Sonsuz Azalan Silsilə Cəmi",
      "latex": "S = \\\\frac{b_1}{1 - q}",
      "description": "|q| < 1 olduqda sonsuz həndəsi silsilənin cəmi."
    }
  ],
  "glossary": [
    {
      "term": "Silsilə fərqi (d)",
      "definition": "Ədədi silsilədə qonşu hədlər arasındakı sabit fərq (an - an-1)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m9-s1",
      "question": "Birinci həddi $a_1 = 3$, fərqi $d = 4$ olan ədədi silsilənin 10-cu həddini tapın.",
      "solution": "$$a_{10} = a_1 + 9d = 3 + 9 \\\\cdot 4 = 3 + 36 = 39$$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m9-s1",
      "question": "Həndəsi silsilədə $b_1 = 2$ və silsilə vuruğu $q = 3$ olarsa, üçüncü hədd ($b_3$) neçə olar?",
      "options": [
        {
          "key": "A",
          "text": "6"
        },
        {
          "key": "B",
          "text": "12"
        },
        {
          "key": "C",
          "text": "18"
        },
        {
          "key": "D",
          "text": "24"
        }
      ],
      "correctKey": "C",
      "explanation": "b3 = b1 * q^2 = 2 * 3^2 = 2 * 9 = 18."
    }
  ]
},
{
  "id": "lesson-math-10-logarithms",
  "subjectId": "riyaziyyat",
  "grade": 10,
  "unit": "Üstlü və Loqarifmik Funksiyalar",
  "unitOrder": 2,
  "title": "Loqarifm Anlayışı və Əsas Xassələri",
  "order": 2,
  "readTimeMinutes": 11,
  "difficulty": 3,
  "summary": "Əsas loqarifmik eynilik, hasillərin və qismətlərin loqarifmi, əsasın dəyişdirilməsi düsturu.",
  "theoryMarkdown": "\n### 1. Loqarifmin Tərifi\n$b$ müsbət ədədini almaq üçün $a$ əsasını yüksəltmək lazım gələn qüvvət üstünə $b$ ədədinin $a$ əsasına görə **loqarifmi** deyilir ($a > 0, a \\\\neq 1, b > 0$):\n$$\\\\log_a b = c \\\\iff a^c = b$$\nƏsas loqarifmik eynilik:\n$$a^{\\\\log_a b} = b$$\n\n### 2. Əsas Loqarifmik Xassələr\n1. **Əsasın öz loqarifmi:** $\\\\log_a a = 1, \\\\quad \\\\log_a 1 = 0$\n2. **Hasilin loqarifmi:** $\\\\log_a(x \\\\cdot y) = \\\\log_a x + \\\\log_a y$\n3. **Qismətin loqarifmi:** $\\\\log_a\\\\left(\\\\frac{x}{y}\\\\right) = \\\\log_a x - \\\\log_a y$\n4. **Qüvvətin loqarifmi:** $\\\\log_a(x^p) = p \\\\cdot \\\\log_a x$\n5. **Əsasın dəyişdirilməsi:** $\\\\log_a b = \\\\frac{\\\\log_c b}{\\\\log_c a}$\n    ",
  "keyFormulas": [
    {
      "id": "f-m10-log-1",
      "name": "Hasilin Loqarifmi",
      "latex": "\\\\log_a(xy) = \\\\log_a x + \\\\log_a y",
      "description": "Vuruqların loqarifmləri cəminə bərabərdir."
    },
    {
      "id": "f-m10-log-2",
      "name": "Əsas Loqarifmik Eynilik",
      "latex": "a^{\\\\log_a b} = b",
      "description": "Əsas və loqarifm əsası eyni olduqda qiymət b-yə bərabərdir."
    }
  ],
  "glossary": [
    {
      "term": "Onluq loqarifm (lg)",
      "definition": "Əsası 10 olan loqarifm (lg x = log_10 x)."
    },
    {
      "term": "Natural loqarifm (ln)",
      "definition": "Əsası e ≈ 2.718 olan loqarifm (ln x = log_e x)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m10-log-1",
      "question": "$\\\\log_2 32 + \\\\log_3 9$ cəmini hesablayın.",
      "solution": "$$2^5 = 32 \\\\implies \\\\log_2 32 = 5$$. $$3^2 = 9 \\\\implies \\\\log_3 9 = 2$$. Cəm: $5 + 2 = 7$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m10-log-1",
      "question": "$\\log_5 125$ qiyməti nəyə bərabərdir?",
      "options": [
        {
          "key": "A",
          "text": "2"
        },
        {
          "key": "B",
          "text": "3"
        },
        {
          "key": "C",
          "text": "5"
        },
        {
          "key": "D",
          "text": "25"
        }
      ],
      "correctKey": "B",
      "explanation": "5^3 = 125 olduğundan, log_5 125 = 3."
    }
  ]
},
{
  "id": "lesson-phys-7-density",
  "subjectId": "fizika",
  "grade": 7,
  "unit": "Maddənin Quruluşu və Xassələri",
  "unitOrder": 3,
  "title": "Maddənin Sıxlığı və Kütlə",
  "order": 3,
  "readTimeMinutes": 8,
  "difficulty": 1,
  "summary": "Vahid həcmdəki kütlə, sıxlıq düsturu ($\\rho = m/V$), sıxlıq vahidləri və maddələrin müqayisəsi.",
  "theoryMarkdown": "\n### 1. Sıxlıq Nədir?\nCismin kütləsinin onun həcminə olan nisbətinə bərabər olan fiziki kəmiyyətə **maddənin sıxlığı** deyilir və $\\\\rho$ (ro) ilə işarə olunur:\n$$\\\\rho = \\\\frac{m}{V}$$\nBuradan kütlə və həcm:\n$$m = \\\\rho \\\\cdot V, \\\\quad V = \\\\frac{m}{\\\\rho}$$\n\n### 2. Sıxlıq Vahidləri\nBS-də vahidi: $[\\\\rho] = 1 \\\\text{ kq/m}^3$. Praktikada $\\\\text{q/sm}^3$ də istifadə olunur:\n$$1 \\\\text{ q/sm}^3 = 1000 \\\\text{ kq/m}^3$$\nMəsələn: Təmiz suyun sıxlığı $\\\\rho_{\\\\text{su}} = 1000 \\\\text{ kq/m}^3 = 1 \\\\text{ q/sm}^3$.\nDəmirin sıxlığı $\\\\rho = 7800 \\\\text{ kq/m}^3$.\n    ",
  "keyFormulas": [
    {
      "id": "f-p7-d1",
      "name": "Sıxlıq Düsturu",
      "latex": "\\\\rho = \\\\frac{m}{V}",
      "description": "Kütlənin həcmə nisbəti."
    }
  ],
  "glossary": [
    {
      "term": "Sıxlıq (ρ)",
      "definition": "Maddənin 1 kub metr həcmindəki kütləsini göstərən skalyar fiziki kəmiyyət."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-p7-d1",
      "question": "Həcmi $V = 2 \\\\text{ m}^3$ olan ağac kötüyünün kütləsi $m = 1200 \\\\text{ kq}$-dır. Ağacın sıxlığını tapın.",
      "solution": "$$\\\\rho = \\\\frac{m}{V} = \\\\frac{1200}{2} = 600 \\\\text{ kq/m}^3$$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-p7-d1",
      "question": "Həcmi $0.5 \\\\text{ m}^3$ olan suyun kütləsi neçə kiloqramdır? ($\\rho = 1000 \\\\text{ kq/m}^3$)",
      "options": [
        {
          "key": "A",
          "text": "200 kq"
        },
        {
          "key": "B",
          "text": "500 kq"
        },
        {
          "key": "C",
          "text": "1000 kq"
        },
        {
          "key": "D",
          "text": "2000 kq"
        }
      ],
      "correctKey": "B",
      "explanation": "m = rho * V = 1000 kq/m³ * 0.5 m³ = 500 kq."
    }
  ]
},
{
  "id": "lesson-phys-8-ohms-law",
  "subjectId": "fizika",
  "grade": 8,
  "unit": "Daimi Elektrik Cərəyanı",
  "unitOrder": 3,
  "title": "Dövrə Hissəsi üçün Om Qanunu və Müqavimət",
  "order": 3,
  "readTimeMinutes": 10,
  "difficulty": 2,
  "summary": "Cərəyan şiddəti, gərginlik, naqilin müqaviməti ($R=\\rho l/S$) və Om qanunu ($I=U/R$).",
  "theoryMarkdown": "\n### 1. Dövrə Hissəsi üçün Om Qanunu\nDövrə hissəsindəki cərəyan şiddəti ($I$) bu hissənin uclarındakı gərginliklə ($U$) düz, onun elektrik müqaviməti ($R$) ilə tərs mütənasibdir:\n$$I = \\\\frac{U}{R}$$\nBuradan: $U = I \\\\cdot R, \\\\quad R = \\\\frac{U}{I}$\nVahidləri: $[I] = 1 \\\\text{ Amper (A)}, \\\\quad [U] = 1 \\\\text{ Volt (V)}, \\\\quad [R] = 1 \\\\text{ Om } (\\\\Omega)$.\n\n### 2. Naqilin Müqavimətinin Həndəsi Parametrlərdən Asılılığı\nNaqilin müqaviməti onun uzunluğu ($l$) ilə düz, en kəsiyinin sahəsi ($S$) ilə tərs mütənasibdir və hazırlandığı materialın xüsusi müqavimətindən ($\\\\rho$) asılıdır:\n$$R = \\\\rho \\\\frac{l}{S}$$\n    ",
  "keyFormulas": [
    {
      "id": "f-p8-ohm-1",
      "name": "Om Qanunu",
      "latex": "I = \\\\frac{U}{R}",
      "description": "Cərəyan şiddəti, gərginlik və müqavimət əlaqəsi."
    },
    {
      "id": "f-p8-ohm-2",
      "name": "Naqilin Müqaviməti",
      "latex": "R = \\\\rho \\\\frac{l}{S}",
      "description": "Uzunluq, sahə və xüsusi müqavimət asılılığı."
    }
  ],
  "glossary": [
    {
      "term": "Xüsusi müqavimət (ρ)",
      "definition": "Uzunluğu 1 m və en kəsiyinin sahəsi 1 m² olan naqilin elektrik müqaviməti."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-p8-ohm-1",
      "question": "Müqaviməti $R = 20 \\\\text{ Om}$ olan naqilin uclarına $U = 220 \\\\text{ V}$ gərginlik verilmişdir. Naqildən keçən cərəyan şiddətini tapın.",
      "solution": "$$I = \\\\frac{U}{R} = \\\\frac{220}{20} = 11 \\\\text{ Amper}$$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-p8-ohm-1",
      "question": "Naqilin uzunluğunu 3 dəfə artırsaq, onun elektrik müqaviməti necə dəyişər?",
      "options": [
        {
          "key": "A",
          "text": "3 dəfə azalar"
        },
        {
          "key": "B",
          "text": "3 dəfə artar"
        },
        {
          "key": "C",
          "text": "9 dəfə artar"
        },
        {
          "key": "D",
          "text": "Dəyişməz"
        }
      ],
      "correctKey": "B",
      "explanation": "R = rho * l / S düsturuna görə müqavimət uzunluqla düz mütənasibdir. Uzunluq 3 dəfə artarsa, müqavimət də 3 dəfə artar."
    }
  ]
},
{
  "id": "lesson-phys-9-momentum",
  "subjectId": "fizika",
  "grade": 9,
  "unit": "Dinamikanın Əsas Qanunları",
  "unitOrder": 2,
  "title": "Cismin İmpulsu və İmpulsun Saxlanması Qanunu",
  "order": 2,
  "readTimeMinutes": 10,
  "difficulty": 3,
  "summary": "Hərəkət miqdarı (vektor kəmiyyət $p=mv$), qüvvə impulsu və qapalı sistemdə impulsun saxlanması qanunu.",
  "theoryMarkdown": "\n### 1. Cismin İmpulsu (Hərəkət Miqdarı)\nCismin kütləsinin onun sürətinə hasilinə bərabər olan və sürət istiqamətində yönələn vektorial kəmiyyətə **cismin impulsu** deyilir:\n$$\\\\vec{p} = m \\\\vec{v}$$\nBS-də vahidi: $[p] = 1 \\\\text{ kq} \\\\cdot \\\\text{m/s}$.\n\nQüvvə impulsu ilə əlaqə (Nyutonun II qanununun impuls forması):\n$$\\\\vec{F} \\\\cdot \\\\Delta t = \\\\Delta \\\\vec{p} = m\\\\vec{v} - m\\\\vec{v}_0$$\n\n### 2. İmpulsun Saxlanması Qanunu\nXarici qüvvələrin təsir etmədiyi (və ya əvəzləyicisi sıfra bərabər olan) cisimlər sisteminə **qapalı sistem** deyilir.\nQapalı sistemə daxil olan cisimlərin impulslarının həndəsi (vektorial) cəmi dəyişməz qalır:\n$$m_1 \\\\vec{v}_1 + m_2 \\\\vec{v}_2 = m_1 \\\\vec{v}_1' + m_2 \\\\vec{v}_2'$$\n    ",
  "keyFormulas": [
    {
      "id": "f-p9-m1",
      "name": "İmpuls Düsturu",
      "latex": "p = mv",
      "description": "Kütlə vurulsun sürət vektoru."
    },
    {
      "id": "f-p9-m2",
      "name": "İmpulsun Saxlanması",
      "latex": "m_1 v_1 + m_2 v_2 = (m_1 + m_2)u",
      "description": "Qeyri-elastiki toqquşma üçün saxlanma tənliyi."
    }
  ],
  "glossary": [
    {
      "term": "Qapalı sistem",
      "definition": "Yalnız öz daxilində qarşılıqlı təsirdə olan və xarici qüvvə təsir etməyən sistem."
    },
    {
      "term": "Reaktiv hərəkət",
      "definition": "Cismin özündən bir hissənin müəyyən sürətlə ayrılması nəticəsində əks istiqamətdə aldığı hərəkət (raketlər)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-p9-m1",
      "question": "Kütləsi $m = 800 \\\\text{ kq}$ olan avtomobil $v = 20 \\\\text{ m/s}$ sürətlə hərəkət edir. Onun impulsunu hesablayın.",
      "solution": "$$p = m \\\\cdot v = 800 \\\\cdot 20 = 16\\\\,000 \\\\text{ kq}\\\\cdot\\\\text{m/s}$$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-p9-m1",
      "question": "Cismin kütləsi 2 dəfə artırılsa və sürəti 2 dəfə azaldılsa, onun impulsu necə dəyişər?",
      "options": [
        {
          "key": "A",
          "text": "4 dəfə artar"
        },
        {
          "key": "B",
          "text": "2 dəfə azalar"
        },
        {
          "key": "C",
          "text": "Dəyişməz"
        },
        {
          "key": "D",
          "text": "2 dəfə artar"
        }
      ],
      "correctKey": "C",
      "explanation": "p = m * v. Kütlə 2 dəfə artıb, sürət 2 dəfə azaldıqda hasil sabit qalır (dəyişməz)."
    }
  ]
},
{
  "id": "lesson-phys-10-thermodynamics",
  "subjectId": "fizika",
  "grade": 10,
  "unit": "Molekulyar Fizika və Termodinamika",
  "unitOrder": 2,
  "title": "İdeal Qazın Daxili Enerjisi və Termodinamikanın I Qanunu",
  "order": 2,
  "readTimeMinutes": 12,
  "difficulty": 3,
  "summary": "Biratomlu ideal qazın daxili enerjisi, qazın gördüyü iş ($A=P\\Delta V$) və enerjinin saxlanma qanunu.",
  "theoryMarkdown": "\n### 1. Biratomlu İdeal Qazın Daxili Enerjisi\nMolekulları ancaq irəliləmə hərəkəti edən qazın daxili enerjisi yalnız onun mütləq temperaturundan ($T$) asılıdır:\n$$U = \\\\frac{3}{2} \\\\frac{m}{M} R T = \\\\frac{3}{2} \\\\nu R T$$\n\n### 2. Qazın Genişlənmə Zamanı Gördüyü İş\nİzobar prosesdə ($P = \\\\text{const}$):\n$$A = P \\\\cdot \\\\Delta V = P (V_2 - V_1)$$\n\n### 3. Termodinamikanın I Qanunu\nSistemə verilən istilik miqdarı ($Q$) onun daxili enerjisinin dəyişməsinə ($\\\\Delta U$) və xarici cisimlər üzərində iş görməsinə ($A$) sərf olunur:\n$$Q = \\\\Delta U + A$$\n- **İzotermik proses ($T=\\\\text{const}$):** $\\\\Delta U = 0 \\\\implies Q = A$\n- **İzoxor proses ($V=\\\\text{const}$):** $A = 0 \\\\implies Q = \\\\Delta U$\n- **Adiabatik proses ($Q=0$):** $A = -\\\\Delta U$ (istilik mübadiləsi olmadan baş verən proses)\n    ",
  "keyFormulas": [
    {
      "id": "f-p10-t1",
      "name": "Termodinamikanın I Qanunu",
      "latex": "Q = \\\\Delta U + A",
      "description": "Sistemə verilən istiliyin daxili enerjiyə və işə paylanması."
    },
    {
      "id": "f-p10-t2",
      "name": "Daxili Enerji",
      "latex": "U = \\\\frac{3}{2} \\\\nu R T",
      "description": "Biratomlu ideal qazın daxili enerjisi."
    }
  ],
  "glossary": [
    {
      "term": "Adiabatik proses",
      "definition": "Ətraf mühitlə istilik mübadiləsi olmadan (Q = 0) baş verən termodinamik proses."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-p10-t1",
      "question": "İzoxor qızma zamanı qaza $Q = 500 \\\\text{ C}$ istilik miqdarı verilmişdir. Qazın daxili enerjisi nə qədər dəyişmişdir?",
      "solution": "İzoxor prosesdə həcm dəyişmədiyi üçün iş görülmür ($A = 0$). Termodinamikanın I qanununa görə: $\\\\Delta U = Q = 500 \\\\text{ C}$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-p10-t1",
      "question": "Ətraf mühitlə heç bir istilik mübadiləsi olmadan ($Q = 0$) baş verən proses necə adlanır?",
      "options": [
        {
          "key": "A",
          "text": "İzotermik"
        },
        {
          "key": "B",
          "text": "İzoxor"
        },
        {
          "key": "C",
          "text": "İzobar"
        },
        {
          "key": "D",
          "text": "Adiabatik"
        }
      ],
      "correctKey": "D",
      "explanation": "Q = 0 olan proses adiabatik proses adlanır."
    }
  ]
},
{
  "id": "lesson-chem-8-classes",
  "subjectId": "kimya",
  "grade": 8,
  "unit": "Qeyri-üzvi Birləşmələrin Əsas Sinifləri",
  "unitOrder": 2,
  "title": "Oksidlər, Əsaslar, Turşular və Duzlar",
  "order": 2,
  "readTimeMinutes": 11,
  "difficulty": 2,
  "summary": "Birləşmələrin təsnifatı, adlandırılması, indikatorların təsiri və neytrallaşma reaksiyaları.",
  "theoryMarkdown": "\n### 1. Qeyri-üzvi Birləşmələrin 4 Əsas Sinfi\n1. **Oksidlər:** Biri oksigen olan iki elementdən ibarət mürəkkəb maddələr ($CaO, CO_2, SO_3$). Əsasi, turşu və amfoter oksidlərə bölünür.\n2. **Əsaslar:** Metal atomundan və hidroksid ($OH^-$) qrupundan ibarətdir ($NaOH, Ca(OH)_2$). Suda həll olan əsaslara **qələvilər** deyilir (lakmusu göyərir).\n3. **Turşular:** Metal ilə əvəz oluna bilən hidrogen atomundan və turşu qalığından ibarətdir ($HCl, H_2SO_4, HNO_3$). Lakmusu qızardır.\n4. **Duzlar:** Metal atomu və turşu qalığından ibarət maddələr ($NaCl, CaCO_3, CuSO_4$).\n\n### 2. Neytrallaşma Reaksiyası\nTurşu ilə əsasın qarşılıqlı təsirindən duz və suyun yaranması reaksiyasıdır:\n$$\\\\text{Turşu} + \\\\text{Əsas} \\\\to \\\\text{Duz} + \\\\text{Su}$$\n$$HCl + NaOH \\\\to NaCl + H_2O$$\n    ",
  "keyFormulas": [
    {
      "id": "f-c8-class-1",
      "name": "Neytrallaşma Reaksiyası",
      "latex": "H^+ + OH^- \\\\to H_2O",
      "description": "Turşu və əsasın ion tənliyi."
    }
  ],
  "glossary": [
    {
      "term": "Qələvi",
      "definition": "Suda yaxşı həll olan qüvvətli əsas (məs: NaOH, KOH, Ba(OH)2)."
    },
    {
      "term": "İndikator",
      "definition": "Mühitin turşu və ya qələvi olmasından asılı olaraq rəngini dəyişən maddə (lakmus, fenolftalein)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-c8-class-1",
      "question": "$H_2SO_4 + 2KOH \\\\to$ reaksiyasının məhsullarını tamamlayın.",
      "solution": "Neytrallaşma nəticəsində kalium sulfat duzu və su alınır: $K_2SO_4 + 2H_2O$."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-c8-class-1",
      "question": "Aşağıdakı maddələrdən hansı duzdur?",
      "options": [
        {
          "key": "A",
          "text": "$CaO$"
        },
        {
          "key": "B",
          "text": "$HNO_3$"
        },
        {
          "key": "C",
          "text": "$CaSO_4$"
        },
        {
          "key": "D",
          "text": "$KOH$"
        }
      ],
      "correctKey": "C",
      "explanation": "CaSO4 metal atomu (Ca) və turşu qalığından (SO4) ibarət olan duzdur."
    }
  ]
},
{
  "id": "lesson-chem-11-alkenes",
  "subjectId": "kimya",
  "grade": 11,
  "unit": "Doymamış Karbohidrogenlər",
  "unitOrder": 1,
  "title": "Alkenlər: Quruluşu, Xassələri və Polimerləşmə",
  "order": 1,
  "readTimeMinutes": 11,
  "difficulty": 3,
  "summary": "Etilen sırası ($C_n H_{2n}$), $sp^2$ hibridləşmə, $\\pi$-rabitə, bromlu suyun rəngsizləşməsi və polietilen istehsalı.",
  "theoryMarkdown": "\n### 1. Alkenlərin Quruluşu\nMolekullarında karbon atomları arasında bir ikiqat rabitə ($-\\\\text{C}=\\\\text{C}-$) olan açıq zəncirli karbohidrogenlərə **alkenlər (olefinlər)** deyilir:\n$$C_n H_{2n} \\\\quad (n \\\\ge 2)$$\nİlk nümayəndəsi: Etilen (eten) - $C_2H_4$ ($CH_2 = CH_2$).\nİkiqat rabitəli karbonlar **$sp^2$ hibridləşmə** vəziyyətindədir. Rabitələrdən biri möhkəm $\\\\sigma$, digəri isə asan qırılan $\\\\pi$-rabitədir. Valent bucağı $120^\\\\circ$-dir.\n\n### 2. Xarakterik Kimyəvi Xassələri\n$\\\\pi$-rabitənin asanlıqla qırılması hesabına alkenlər birləşmə reaksiyalarına çox meyllidir:\n- **Bromlu suyun rəngsizləşməsi (Keyfiyyət reaksiyası):**\n  $$CH_2 = CH_2 + Br_2 \\\\to CH_2Br - CH_2Br \\\\text{ (1,2-dibrometan)}$$\n- **Polimerləşmə reaksiyası (Polietilen alınması):**\n  $$n (CH_2 = CH_2) \\\\xrightarrow{P, t, kat} (-CH_2 - CH_2-)_n$$\n    ",
  "keyFormulas": [
    {
      "id": "f-c11-alk-1",
      "name": "Alkenlərin Formulu",
      "latex": "C_n H_{2n} \\\\quad (n \\\\ge 2)",
      "description": "Bir ikiqat rabitə saxlayan doymamış karbohidrogenlər."
    }
  ],
  "glossary": [
    {
      "term": "Monomer",
      "definition": "Polimerləşmə reaksiyasına daxil olan ilkin alçaqmolekullu maddə (məs: etilen)."
    },
    {
      "term": "Polimer",
      "definition": "Çoxlu sayda monomer manqalarının birləşməsindən yaranan nəhəng makromolekul (məs: polietilen)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-c11-alk-1",
      "question": "Etilenin hidrogenləşməsi ($+ H_2$) nəticəsində hansı maddə alınır?",
      "solution": "$$CH_2 = CH_2 + H_2 \\\\xrightarrow{Ni, t} CH_3 - CH_3 \\\\text{ (etan)}$$. Doymamış alken doymuş alkana çevrilir."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-c11-alk-1",
      "question": "Doymamış karbohidrogenləri təyin etmək üçün hansı məhlulun rəngsizləşməsindən istifadə olunur?",
      "options": [
        {
          "key": "A",
          "text": "Xörək duzu məhlulu"
        },
        {
          "key": "B",
          "text": "Bromlu su və ya kalium-permanqanat"
        },
        {
          "key": "C",
          "text": "Əhəng suyu"
        },
        {
          "key": "D",
          "text": "Distillə suyu"
        }
      ],
      "correctKey": "B",
      "explanation": "Bromlu suyun və ya KMnO4 məhlulunun rəngsizləşməsi ikiqat və üçqat rabitənin keyfiyyət reaksiyasıdır."
    }
  ]
},
{
  "id": "lesson-bio-8-nervous-system",
  "subjectId": "biologiya",
  "grade": 8,
  "unit": "Orqanizmin Tənzimi: Sinir Sistemi",
  "unitOrder": 2,
  "title": "Sinir Sistemi və Refleks Qövsü",
  "order": 2,
  "readTimeMinutes": 10,
  "difficulty": 2,
  "summary": "Neyronun quruluşu (akson, dendrit), mərkəzi və periferik sinir sistemi, refleks qövsünün 5 həlqəsi.",
  "theoryMarkdown": "\n### 1. Sinir Toxuması və Neyron\nSinir sisteminin əsas struktur və funksional vahidi **neyrondur** (sinir hüceyrəsi).\nNeyron ibarətdir:\n- **Hüceyrə cismi:** Nüvə və sitoplazmadan ibarətdir.\n- **Dendritlər:** Qısa, ağacvari şaxələnmiş çıxıntılar (oyanmanı qəbul edir).\n- **Akson:** Tək və uzun çıxıntı (oyanmanı digər hüceyrələrə ötürür, üzəri mielin qişası ilə örtülüdür).\n\n### 2. Refleks və Refleks Qövsü\nOrqanizmin mərkəzi sinir sisteminin iştirakı ilə xarici və ya daxili qıcıqlara verdiyi cavab reaksiyasına **refleks** deyilir.\nRefleksin baş verdiyi yol **refleks qövsü** adlanır və 5 həlqədən ibarətdir:\n1. **Reseptor:** Qıcığı qəbul edib sinir impulsuna çevirir.\n2. **Hissiyyat (mərkəzəqaçan) sinir yolu:** İmpulsu MSS-ə daşıyır.\n3. **Mərkəzi sinir şöbəsi (arakəsmə neyron):** Məlumatı təhlil edir.\n4. **Hərəki (mərkəzdənqaçan) sinir yolu:** Əmri işçi orqana çatdırır.\n5. **İşçi orqan (effektor):** Əzələ və ya vəzi cavab reaksiyası verir.\n    ",
  "keyFormulas": [
    {
      "id": "f-b8-ref-1",
      "name": "Refleks Qövsü Sxemi",
      "latex": "\\\\text{Reseptor} \\\\to \\\\text{Hissi yol} \\\\to \\\\text{Sinir mərkəzi} \\\\to \\\\text{Hərəki yol} \\\\to \\\\text{İşçi orqan}",
      "description": "Sinir impulsunun 5 ardıcıl həlqəsi."
    }
  ],
  "glossary": [
    {
      "term": "Sinaps",
      "definition": "İki neyron arasında və ya neyronla əzələ hüceyrəsi arasında sinir impulsunun ötürüldüyü kontakt sahəsi."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-b8-ref-1",
      "question": "Qaynar çaydana əl toxunduqda dərhal əlin geri çəkilməsi hansı növ refleksə aiddir?",
      "solution": "Anadangəlmə, qeyri-ixtiyari müdafiə refleksidir (şərtsiz refleks)."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-b8-ref-1",
      "question": "Neyronda oyanmanı hüceyrə cisminə gətirən qısa çıxıntılar necə adlanır?",
      "options": [
        {
          "key": "A",
          "text": "Akson"
        },
        {
          "key": "B",
          "text": "Dendrit"
        },
        {
          "key": "C",
          "text": "Sinaps"
        },
        {
          "key": "D",
          "text": "Mielin"
        }
      ],
      "correctKey": "B",
      "explanation": "Dendritlər qısa şaxəli çıxıntılardır və impulsu hüceyrə cisminə doğru istiqamətləndirir."
    }
  ]
},
{
  "id": "lesson-geog-6-earth-motions",
  "subjectId": "cografiya",
  "grade": 6,
  "unit": "Kainat və Planetimiz Yer",
  "unitOrder": 1,
  "title": "Yer Kürəsinin Hərəkətləri: Gün və Fəsillər",
  "order": 1,
  "readTimeMinutes": 8,
  "difficulty": 1,
  "summary": "Öz oxu ətrafında sutkalıq fırlanma (24 saat) və Günəş ətrafında illik hərəkət (365 gün 6 saat), fəsillərin yaranması.",
  "theoryMarkdown": "\n### 1. Yerin Öz Oxu Ətrafında Fırlanması\nYer öz xəyali oxu ətrafında qərbdən şərqə doğru 24 saat (1 sutka) ərzində bir tam dövr edir:\n- Nəticədə **gecə və gündüz** bir-birini əvəz edir.\n- Günəşin səmada görünən hərəkəti (şərqdən çıxıb qərbdə batması) baş verir.\n- Qabarma və çəkilmə ritmləri yaranır.\n\n### 2. Yerin Günəş Ətrafında İllik Hərəkəti\nYer Günəş ətrafında ellips orbit üzrə 365 gün 6 saat ərzində dövr edir:\n- Yerin fırlanma oxu orbit müstəvisinə nəzərən **$66.5^\\\\circ$** meyllidir.\n- Oxun meylliyi səbəbindən il ərzində Günəş şüalarının düşmə bucağı dəyişir və **ilin 4 fəsli** (yaz, yay, payız, qış) yaranır.\n- Əsas tarixlər:\n  - **21 mart:** Yaz gecə-gündüz bərabərliyi\n  - **22 iyun:** Yay günəşduruşu (Şimalda ən uzun gün)\n  - **23 sentyabr:** Payız gecə-gündüz bərabərliyi\n  - **22 dekabr:** Qış günəşduruşu (Şimalda ən qısa gün)\n    ",
  "keyFormulas": [
    {
      "id": "f-g6-1",
      "name": "Yerin Meyllik Bucağı",
      "latex": "66.5^\\\\circ \\\\text{ (Orbitə)} \\\\iff 23.5^\\\\circ \\\\text{ (Perpendikulyara)}",
      "description": "Fəsillərin yaranmasına səbəb olan daimi ox meylliyi."
    }
  ],
  "glossary": [
    {
      "term": "Gecə-gündüz bərabərliyi",
      "definition": "Günəş şüalarının ekvatora 90° bucaqla düşdüyü və bütün Yer kürəsində gecə ilə gündüzün bərabər olduğu günlər (21 mart və 23 sentyabr)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-g6-1",
      "question": "Yerin fırlanma oxu orbit müstəvisinə perpendikulyar ($90^\\\\circ$) olsaydı, nə baş verərdi?",
      "solution": "Fəsillər yaranmazdı, ilboyu hər bir enlikdə hava şəraiti və gecə-gündüz uzunluğu dəyişməz qalardı."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-g6-1",
      "question": "Şimal yarımkürəsində ən uzun gün və ən qısa gecə hansı tarixdə müşahidə olunur?",
      "options": [
        {
          "key": "A",
          "text": "21 mart"
        },
        {
          "key": "B",
          "text": "22 iyun"
        },
        {
          "key": "C",
          "text": "23 sentyabr"
        },
        {
          "key": "D",
          "text": "22 dekabr"
        }
      ],
      "correctKey": "B",
      "explanation": "22 iyun yay günəşduruşu günüdür və Şimal yarımkürəsində ən uzun gündüz qeydə alınır."
    }
  ]
},
{
  "id": "lesson-hist-8-atabays",
  "subjectId": "tarix",
  "grade": 8,
  "unit": "Azərbaycan İntibah Dövrü Mədəniyyəti",
  "unitOrder": 1,
  "title": "Azərbaycan Atabəylər (Eldəgizlər) Dövləti və İntibah",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 2,
  "summary": "Şəmsəddin Eldəgiz, Naxçıvan, Təbriz və Həmədan paytaxtları, memar Əcəmi Naxçıvani və Nizami Gəncəvi irsi.",
  "theoryMarkdown": "\n### 1. Eldəgizlər Dövlətinin Qurulması (1136–1225)\nXII əsrdə Böyük Səlcuq imperiyasının zəifləməsi nəticəsində Şəmsəddin Eldəgiz tərəfindən **Azərbaycan Atabəylər dövləti** yaradıldı:\n- İdarəetmə mərkəzləri: Naxçıvan, Təbriz və Həmədan şəhərləri.\n- Məhəmməd Cahan Pəhləvan və Qızıl Arslanın dövründə dövlət Yaxın Şərqin ən qüdrətli imperiyasına çevrildi (1191-ci ildə Qızıl Arslan ilk dəfə Sultan titulunu qəbul etdi).\n\n### 2. Azərbaycan İntibah Mədəniyyəti\nXII əsr Azərbaycan mədəniyyətinin \"Qızıl Dövrü\" (İntibah) hesab olunur:\n- **Memarlıq:** Naxçıvan memarlıq məktəbinin banisi **Əcəmi Əbubəkr oğlu Naxçıvani** Möminə Xatun türbəsini (1186) və Yusif ibn Küseyr türbəsini inşa etdi.\n- **Ədəbiyyat:** Dünya poeziyasının dühası **Nizami Gəncəvi** ölməz \"Xəmsə\"sini (\"Sirlər xəzinəsi\", \"Xosrov və Şirin\", \"Leyli və Məcnun\", \"Yeddi gözəl\", \"İsgəndərnamə\") bu dövrdə yaratdı.\n    ",
  "keyFormulas": [
    {
      "id": "f-h8-1",
      "name": "Eldəgizlər Dövrü",
      "latex": "1136 \\\\to \\\\text{Yaranma}, \\\\quad 1186 \\\\to \\\\text{Möminə Xatun Türbəsi}, \\\\quad 1225 \\\\to \\\\text{Süqut}",
      "description": "Atabəylər dövlətinin və İntibah memarlığının əsas tarixləri."
    }
  ],
  "glossary": [
    {
      "term": "Atabəy",
      "definition": "Səlcuq şahzadələrinin tərbiyəçisi və dövlət canişininə verilən fəxri titul."
    },
    {
      "term": "Xəmsə",
      "definition": "Nizami Gəncəvinin yaratdığı 5 möhtəşəm poemadan ibarət toplu (beşlik)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-h8-1",
      "question": "Naxçıvanda yerləşən Möminə Xatun türbəsinin memarı kimdir?",
      "solution": "Orta əsr Azərbaycan memarlığının dahi sənətkarı Əcəmi Əbubəkr oğlu Naxçıvanidir."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-h8-1",
      "question": "Nizami Gəncəvinin poemalarından ibarət toplu necə adlanır?",
      "options": [
        {
          "key": "A",
          "text": "Divan"
        },
        {
          "key": "B",
          "text": "Xəmsə"
        },
        {
          "key": "C",
          "text": "Təzkirə"
        },
        {
          "key": "D",
          "text": "Siyasətnamə"
        }
      ],
      "correctKey": "B",
      "explanation": "Nizami Gəncəvinin 5 məşhur poeması birlikdə 'Xəmsə' (Beşlik) adlanır."
    }
  ]
},
{
  "id": "lesson-azeri-6-lexicon",
  "subjectId": "azerbaycan_dili",
  "grade": 6,
  "unit": "Leksika: Dilin Lüğət Tərkibi",
  "unitOrder": 1,
  "title": "Sözün Mənaları: Omonimlər, Sinonimlər və Antonimlər",
  "order": 1,
  "readTimeMinutes": 8,
  "difficulty": 1,
  "summary": "Həqiqi və məcazi məna, çoxmənalı sözlər, səs tərkibi eyni mənaları fərqli omonimlər və əks mənalı antonimlər.",
  "theoryMarkdown": "\n### 1. Həqiqi və Məcazi Məna\n- **Həqiqi (ilkin) məna:** Sözün ilk yada düşən birbaşa mənasıdır (*dəmir qapı, şirin alma*).\n- **Məcazi (törəmə) məna:** Əlamətin oxşarlıq əsasında başqa əşyaya köçürülməsidir (*dəmir iradə, şirin söhbət*).\n\n### 2. Omonimlər, Sinonimlər və Antonimlər\n- **Omonimlər:** Deyilişi və yazılışı eyni, lakin leksik mənaları tamamilə fərqli olan sözlərdir:\n  - *Qol* (insan bədən üzvü / futbol qolu / imza)\n  - *Çay* (axar su / içki)\n  - *Yaz* (fəsil / fel: yazmaq)\n- **Sinonimlər:** Yazılışı fərqli, lakin mənaları yaxın və ya eyni olan sözlərdir (*böyük - iri - nəhəng*, *gözəl - qəşəng*).\n- **Antonimlər:** Bir-birinə tamamilə zidd, əks məna bildirən sözlərdir (*ağ - qara*, *gecə - gündüz*, *doğru - yalan*).\n    ",
  "keyFormulas": [
    {
      "id": "f-az5-1",
      "name": "Söz Qrupları",
      "latex": "\\\\text{Omonim (Eyni forma, fərqli məna)} \\\\quad \\\\text{Sinonim (Fərqli forma, yaxın məna)}",
      "description": "Leksik mənaya görə söz qrupları."
    }
  ],
  "glossary": [
    {
      "term": "Leksika",
      "definition": "Dildəki bütün sözlərin məcmusu, dilin lüğət tərkibi haqqında elm."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-az5-1",
      "question": "\"Ağır yük\" və \"ağır xasiyyət\" birləşmələrində \"ağır\" sözünün mənalarını fərqləndirin.",
      "solution": "\"Ağır yük\" birləşməsində çəkini bildirdiyi üçün həqiqi məna, \"ağır xasiyyət\" birləşməsində isə məcazi mənadadır."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-az5-1",
      "question": "Aşağıdakı söz cütlərindən hansı antonimdir?",
      "options": [
        {
          "key": "A",
          "text": "Hündür - uca"
        },
        {
          "key": "B",
          "text": "Dost - düşmən"
        },
        {
          "key": "C",
          "text": "Bulaq - çeşmə"
        },
        {
          "key": "D",
          "text": "Qaçmaq - yüyürmək"
        }
      ],
      "correctKey": "B",
      "explanation": "'Dost' və 'düşmən' bir-birinə zidd əks mənalar bildirdiyi üçün antonimdir."
    }
  ]
},
{
  "id": "lesson-eng-6-adjectives-comparison",
  "subjectId": "xarici_dil",
  "grade": 6,
  "unit": "Grammar: Adjectives & Adverbs",
  "unitOrder": 1,
  "title": "Degrees of Comparison of Adjectives (Müqayisə Dərəcələri)",
  "order": 1,
  "readTimeMinutes": 8,
  "difficulty": 1,
  "summary": "Positive, Comparative (-er / more) and Superlative (-est / the most) degrees, irregular adjectives (good, bad, far).",
  "theoryMarkdown": "\n### 1. Sifətin 3 Müqayisə Dərəcəsi\n1. **Adi Dərəcə (Positive Degree):** Sifətin ilkin forması (*tall, big, beautiful*).\n2. **Müqayisə Dərəcəsi (Comparative Degree):** İki əşyanı müqayisə edərkən işlənir (adətən *than* ilə):\n   - Qısa (təkhecalı) sifətlər: **-er** şəkilçisi qəbul edir (*taller, faster, bigger*).\n   - Çoxhecalı sifətlər: qarşısına **more** artırılır (*more beautiful, more interesting*).\n3. **Üstünlük Dərəcəsi (Superlative Degree):** Bir əşyanı qrupdakı hamısından üstün tutarkən (qarşısında həmişə *the* artikli olur):\n   - Qısa sifətlər: **the ... -est** (*the tallest, the fastest*).\n   - Çoxhecalı sifətlər: **the most ...** (*the most beautiful*).\n\n### 2. Qaydasız Sifətlər (Irregular Adjectives)\n- **good** $\\\\to$ **better** $\\\\to$ **the best** (yaxşı - daha yaxşı - ən yaxşı)\n- **bad** $\\\\to$ **worse** $\\\\to$ **the worst** (pis - daha pis - ən pis)\n- **little** $\\\\to$ **less** $\\\\to$ **the least** (az - daha az - ən az)\n- **many / much** $\\\\to$ **more** $\\\\to$ **the most** (çox)\n- **far** $\\\\to$ **farther / further** $\\\\to$ **the farthest / furthest** (uzaq)\n    ",
  "keyFormulas": [
    {
      "id": "f-e6-adj-1",
      "name": "Comparative Formula",
      "latex": "\\\\text{Adj} + \\\\text{er than} \\\\quad \\\\text{or} \\\\quad \\\\text{more } \\\\text{Adj than}",
      "description": "İki obyekti müqayisə etmək üçün."
    },
    {
      "id": "f-e6-adj-2",
      "name": "Superlative Formula",
      "latex": "\\\\text{the } \\\\text{Adj} + \\\\text{est} \\\\quad \\\\text{or} \\\\quad \\\\text{the most } \\\\text{Adj}",
      "description": "Qrupda ən üstün əlaməti bildirmək üçün."
    }
  ],
  "glossary": [
    {
      "term": "Comparative",
      "definition": "Müqayisə dərəcəsi (-er / more)."
    },
    {
      "term": "Superlative",
      "definition": "Üstünlük dərəcəsi (the -est / the most)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-e6-adj-1",
      "question": "\"Baku is ____ (large) than Ganja.\" Boşluğu düzgün forma ilə doldurun.",
      "solution": "\"than\" olduğu üçün müqayisə dərəcəsi tələb olunur: \"larger\"."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-e6-adj-1",
      "question": "What is the superlative degree of 'good'?",
      "options": [
        {
          "key": "A",
          "text": "gooder"
        },
        {
          "key": "B",
          "text": "better"
        },
        {
          "key": "C",
          "text": "the best"
        },
        {
          "key": "D",
          "text": "the most good"
        }
      ],
      "correctKey": "C",
      "explanation": "'Good' qaydasız sifətdir, üstünlük dərəcəsi 'the best'-dir."
    }
  ]
},
{
  "id": "lesson-inf-7-algorithms-flowchart",
  "subjectId": "informatika",
  "grade": 7,
  "unit": "Alqoritmləşdirmənin Əsasları",
  "unitOrder": 1,
  "title": "Alqoritmin Növləri və Blok-Sxem Təsviri",
  "order": 1,
  "readTimeMinutes": 9,
  "difficulty": 2,
  "summary": "Məsələnin həlli ardıcıllığı, xassələri (diskretlik, müəyyənlik, kütləvilik, nəticəvilik) və blok fiqurları.",
  "theoryMarkdown": "\n### 1. Alqoritm Nədir?\nQarşıya qoyulmuş məqsədə çatmaq üçün icraçıya verilən sonlu sayda dəqiq əmrlər ardıcıllığına **alqoritm** deyilir.\nAlqoritmin 4 əsas xassəsi var:\n1. **Müəyyənlik:** Hər bir əmr birmənalı və aydın başa düşülməlidir.\n2. **Diskretlik:** Mürəkkəb proses ayrı-ayrı sadə addımlara bölünməlidir.\n3. **Nəticəvilik:** Sonlu sayda addımdan sonra mütləq nəticə əldə olunmalıdır.\n4. **Kütləvilik:** Eyni tipli bütün məsələlərin həlli üçün yararlı olmalıdır.\n\n### 2. Blok-Sxem Quruluşu\nAlqoritmin qrafik fiqurlarla təsvirinə **blok-sxem** deyilir:\n- **Oval (Ellips):** Alqoritmin *Başlanğıcı* və *Sonu*.\n- **Paraleloqram:** İlkin verilənlərin *Daxil edilməsi* və nəticənin *Çıxarılması*.\n- **Düzbucaqlı:** Hesablama əməliyyatları və düsturlar (*İcra bloku*).\n- **Romb:** Şərtin yoxlanması (*Budaqlanma bloku*: \"Hə\" və ya \"Yox\").\n\n### 3. Alqoritmin 3 Əsas Növü\n- **Xətti:** Əmrlər heç bir şərt olmadan ardıcıl yerinə yetirilir.\n- **Budaqlanan:** Müəyyən şərtdən asılı olaraq yollardan biri seçilir.\n- **Dövri:** Eyni əmrlər bloku bir neçə dəfə təkrar icra olunur.\n    ",
  "keyFormulas": [
    {
      "id": "f-inf7-1",
      "name": "Alqoritm Növləri",
      "latex": "\\\\text{Xətti} \\\\to \\\\text{Budaqlanan (Şərt)} \\\\to \\\\text{Dövri (Təkrarlanma)}",
      "description": "Kompüter elmlərində alqoritmlərin 3 baza strukturu."
    }
  ],
  "glossary": [
    {
      "term": "İcraçı",
      "definition": "Alqoritmi yerinə yetirməyə qadir olan subyekt (insan, kompüter, robot)."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-inf7-1",
      "question": "Blok-sxemdə şərtin yoxlanması hansı həndəsi fiqurla təsvir olunur?",
      "solution": "Şərtin yoxlanması və budaqlanma prosesi romb fiquru vasitəsilə təsvir edilir."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-inf7-1",
      "question": "Alqoritmin sonlu sayda addımdan sonra mütləq nəticə verməsi hansı xassədir?",
      "options": [
        {
          "key": "A",
          "text": "Diskretlik"
        },
        {
          "key": "B",
          "text": "Kütləvilik"
        },
        {
          "key": "C",
          "text": "Nəticəvilik"
        },
        {
          "key": "D",
          "text": "Müəyyənlik"
        }
      ],
      "correctKey": "C",
      "explanation": "Alqoritmin sona çataraq nəticə verməsi nəticəvilik xassəsidir."
    }
  ]
},
{
  "id": "lesson-math-11-complex-numbers",
  "subjectId": "riyaziyyat",
  "grade": 11,
  "unit": "Kompleks Ədədlər",
  "unitOrder": 3,
  "title": "Kompleks Ədədlər və Onların Triqonometrik Şəkli",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 3,
  "summary": "Xəyali vahid i, kompleks ədədin cəbri və triqonometrik forması, modul və arqument anlayışları.",
  "theoryMarkdown": "\n### 1. Xəyali Vahid və Kompleks Ədəd Anlayışı\nMənfi ədədlərin kvadrat kökü həqiqi ədədlər çoxluğunda mövcud deyil. Bu məqsədlə kvadratı $-1$-ə bərabər olan yeni ədəd — **xəyali vahid ($i$)** daxil edilir:\n$$i^2 = -1, \\quad i = \\sqrt{-1}$$\n\n$a, b \\in \\mathbb{R}$ olduqda, $z = a + bi$ şəkilli ədədə **kompleks ədəd** deyilir:\n- $a = \\text{Re}(z)$ — həqiqi hissə\n- $b = \\text{Im}(z)$ — xəyali hissə\n- $\\bar{z} = a - bi$ — $z$ ədədinin **qoşması** adlanır.\n\n### 2. Kompleks Ədədin Modulu və Arqumenti\nKompleks müstəvidə $z = a + bi$ nöqtəsinin koordinat başlanğıcından məsafəsinə **modul** deyilir:\n$$|z| = r = \\sqrt{a^2 + b^2}$$\n\nMüsbət həqiqi ox ilə radius-vektor arasındakı bucağa **arqument** ($\\varphi$) deyilir:\n$$\\cos\\varphi = \\frac{a}{r}, \\quad \\sin\\varphi = \\frac{b}{r} \\implies \\tan\\varphi = \\frac{b}{a}$$\n\n### 3. Triqonometrik Şəkil və Muavr Düsturu\nKompleks ədədin triqonometrik şəkli:\n$$z = r(\\cos\\varphi + i\\sin\\varphi)$$\n\n**Muavr düsturu** (qüvvətə yüksəltmə):\n$$z^n = r^n(\\cos(n\\varphi) + i\\sin(n\\varphi))$$\n        ",
  "keyFormulas": [
    {
      "id": "f-m11-comp-1",
      "name": "Kompleks Ədədin Modulu",
      "latex": "|z| = \\sqrt{a^2 + b^2}",
      "description": "Həqiqi və xəyali hissələrin kvadratları cəminin kökü."
    },
    {
      "id": "f-m11-comp-2",
      "name": "Muavr Düsturu",
      "latex": "z^n = r^n(\\cos n\\varphi + i\\sin n\\varphi)",
      "description": "Kompleks ədədin n dərəcədən qüvvətə yüksəldilməsi."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m11-comp-1",
      "title": "Misal: z = 1 + i ədədini triqonometrik şəkildə yazın",
      "problem": "$z = 1 + i$ kompleks ədədinin modulunu və arqumentini taparaq triqonometrik şəkildə ifadə edin.",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Modulun hesablanması",
          "content": "$$r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$$"
        },
        {
          "stepNumber": 2,
          "title": "Arqumentin tapılması",
          "content": "$$\\cos\\varphi = \\frac{1}{\\sqrt{2}}, \\sin\\varphi = \\frac{1}{\\sqrt{2}} \\implies \\varphi = \\frac{\\pi}{4} (45^\\circ)$$"
        },
        {
          "stepNumber": 3,
          "title": "Triqonometrik şəklin qurulması",
          "content": "$$z = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$$"
        }
      ],
      "finalAnswer": "$z = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m11-comp-1",
      "question": "$i^{20}$ ifadəsinin qiymətini tapın.",
      "options": [
        {
          "key": "A",
          "text": "1"
        },
        {
          "key": "B",
          "text": "-1"
        },
        {
          "key": "C",
          "text": "i"
        },
        {
          "key": "D",
          "text": "-i"
        }
      ],
      "correctKey": "A",
      "explanation": "$i^4 = 1$ olduğu üçün $i^{20} = (i^4)^5 = 1^5 = 1$."
    }
  ]
},
{
  "id": "lesson-math-9-circle-geometry",
  "subjectId": "riyaziyyat",
  "grade": 9,
  "unit": "Həndəsə: Çevrə və Dairə",
  "unitOrder": 3,
  "title": "Çevrədə Bucaqlar, Vətərlər və Toxunanlar",
  "order": 1,
  "readTimeMinutes": 9,
  "difficulty": 2,
  "summary": "Mərkəzi və daxilə çəkilmiş bucaqlar, kəsişən vətərlərin xassəsi, toxunan və kəsən teoremi.",
  "theoryMarkdown": "\n### 1. Mərkəzi və Daxilə Çəkilmiş Bucaqlar\n- **Mərkəzi bucaq**: Təpəsi çevrə mərkəzində olan bucaqdır və söykəndiyi qövsün dərəcə ölçüsünə bərabərdir:\n  $$\\angle AOB = \\cup AB$$\n- **Daxilə çəkilmiş bucaq**: Təpəsi çevrə üzərində olan və tərəfləri çevrəni kəsən bucaqdır. Söykəndiyi qövsün yarısına bərabərdir:\n  $$\\angle ACB = \\frac{1}{2} \\cup AB$$\n- **Nəticə**: Diametrə söykənən daxilə çəkilmiş bucaq həmişə **düz bucaqdır** ($90^\\circ$).\n\n### 2. Kəsişən Vətərlər Teoremi\nBir nöqtədə kəsişən iki vətərin parçalarının hasilləri bərabərdir:\n$$AP \\cdot PB = CP \\cdot PD$$\n\n### 3. Toxunan və Kəsən Teoremi\nÇevrə xaricindəki nöqtədən çəkilən toxunanın kvadratı həmin nöqtədən çəkilən kəsənin xarici hissəsi ilə ümumi uzunluğunun hasilinə bərabərdir:\n$$PT^2 = PA \\cdot PB$$\n        ",
  "keyFormulas": [
    {
      "id": "f-m9-circ-1",
      "name": "Daxilə Çəkilmiş Bucaq",
      "latex": "\\angle ACB = \\frac{1}{2}\\cup AB",
      "description": "Söykəndiyi qövsün yarısına bərabərdir."
    },
    {
      "id": "f-m9-circ-2",
      "name": "Kəsişən Vətərlər",
      "latex": "AP \\cdot PB = CP \\cdot PD",
      "description": "Kəsişən vətər seqmentlərinin hasili bərabərdir."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-m9-circ-1",
      "title": "Misal: Diametrə söykənən bucaq",
      "problem": "Çevrənin $AB$ diametrinə söykənən $\\angle ACB$ bucağının dərəcə ölçüsü neçədir?",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Diametrin qövs ölçüsü",
          "content": "Diametr çevrəni hər biri $180^\\circ$ olan iki bərabər qövsə bölür."
        },
        {
          "stepNumber": 2,
          "title": "Daxilə çəkilmiş bucaq teoremi",
          "content": "$$\\angle ACB = \\frac{180^\\circ}{2} = 90^\\circ$$"
        }
      ],
      "finalAnswer": "$90^\\circ$"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-m9-circ-1",
      "question": "Qövsün ölçüsü 80 dərəcədirsə, bu qövsə söykənən daxilə çəkilmiş bucaq neçə dərəcə olar?",
      "options": [
        {
          "key": "A",
          "text": "40°"
        },
        {
          "key": "B",
          "text": "80°"
        },
        {
          "key": "C",
          "text": "160°"
        },
        {
          "key": "D",
          "text": "90°"
        }
      ],
      "correctKey": "A",
      "explanation": "Daxilə çəkilmiş bucaq söykəndiyi qövsün yarısına bərabərdir: 80 / 2 = 40°."
    }
  ]
},
{
  "id": "lesson-phys-11-photoelectric",
  "subjectId": "fizika",
  "grade": 11,
  "unit": "Kvant Fizikası və Optika",
  "unitOrder": 3,
  "title": "İşıq Kvantları və Fotoeffekt Hadisəsi",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 3,
  "summary": "Plank hipotezi, fotonun enerjisi və impulsu, Eynşteynin fotoeffekt tənliyi, qırmızı sərhəd.",
  "theoryMarkdown": "\n### 1. Kvant Hipotezi və Foton\n1900-cü ildə Maks Plank göstərdi ki, işıq fasiləsiz dalğa kimi deyil, diskret porsiyalarla — **kvantlarla (fotonlarla)** şüalanır və udulur:\n$$E = h\\nu = \\frac{hc}{\\lambda}$$\nBurada $h \\approx 6.63 \\cdot 10^{-34} \\text{ C}\\cdot\\text{san}$ — Plank sabitidir.\n\nFoton sükunət kütləsinə malik deyil ($m_0 = 0$), lakin enerji və impulsa malikdir:\n$$p = \\frac{h}{\\lambda} = \\frac{E}{c}$$\n\n### 2. Xarici Fotoeffekt və Eynşteyn Tənliyi\nİşığın təsiri ilə maddədən elektronların qopması hadisəsinə **xarici fotoeffekt** deyilir. \nEnerjinin saxlanması qanununa əsaslanan **Eynşteyn tənliyi**:\n$$h\\nu = A_{cix} + \\frac{mv_{max}^2}{2}$$\n\n- $h\\nu$ — düşən fotonun enerjisi\n- $A_{cix}$ — elektrona maddəni tərk etməsi üçün tələb olunan **çıxış işi**\n- $\\frac{mv_{max}^2}{2} = eU_l$ — qopan fotoelektronların maksimal kinetik enerjisi ($U_l$ — ləngidici gərginlik).\n\n### 3. Fotoeffektin Qırmızı Sərhədi\nFotoeffektin baş verməsi üçün minimal tezlik (və maksimal dalğa uzunluğu):\n$$\\nu_{min} = \\frac{A_{cix}}{h}, \\quad \\lambda_{max} = \\frac{hc}{A_{cix}}$$\n        ",
  "keyFormulas": [
    {
      "id": "f-p11-pe-1",
      "name": "Eynşteynin Fotoeffekt Tənliyi",
      "latex": "h\\nu = A_{cix} + E_k",
      "description": "Foton enerjisi çıxış işi və kinetik enerjiyə sərf olunur."
    },
    {
      "id": "f-p11-pe-2",
      "name": "Fotonun İmpulsu",
      "latex": "p = \\frac{h}{\\lambda}",
      "description": "İmpuls və dalğa uzunluğu arasındakı de Broyl asılılığı."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-p11-pe-1",
      "title": "Misal: Fotoelektronların maksimal kinetik enerjisi",
      "problem": "Metal üçün çıxış işi $A_{cix} = 2.5 \\text{ eV}$-dir. Enerjisi $4.0 \\text{ eV}$ olan foton düşdükdə qopan elektronların maksimal kinetik enerjisini tapın.",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Eynşteyn düsturunun tətbiqi",
          "content": "$$E_k = h\\nu - A_{cix}$$"
        },
        {
          "stepNumber": 2,
          "title": "Hesablama",
          "content": "$$E_k = 4.0 \\text{ eV} - 2.5 \\text{ eV} = 1.5 \\text{ eV}$$"
        }
      ],
      "finalAnswer": "$1.5 \\text{ eV}$"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-p11-pe-1",
      "question": "Fotonun enerjisi hansı kəmiyyətdən xətti asılıdır?",
      "options": [
        {
          "key": "A",
          "text": "Rəqs tezliyindən (nu)"
        },
        {
          "key": "B",
          "text": "Dalğa uzunluğundan"
        },
        {
          "key": "C",
          "text": "İşığın intensivliyindən"
        },
        {
          "key": "D",
          "text": "Sürətin kvadratından"
        }
      ],
      "correctKey": "A",
      "explanation": "E = h * nu düsturuna əsasən foton enerjisi birbaşa tezliklə mütənasibdir."
    }
  ]
},
{
  "id": "lesson-phys-10-ideal-gas-laws",
  "subjectId": "fizika",
  "grade": 10,
  "unit": "Molekulyar Fizika və Termodinamika",
  "unitOrder": 2,
  "title": "İdeal Qaz Qanunları və İzoproseslər",
  "order": 1,
  "readTimeMinutes": 9,
  "difficulty": 2,
  "summary": "Mendeleyev-Klapeyron tənliyi, Boyl-Mariott, Şarl və Gey-Lüssak qanunları və qrafikləri.",
  "theoryMarkdown": "\n### 1. İdeal Qaz Hal Tənliyi (Mendeleyev-Klapeyron)\nMolekulları arasındakı qarşılıqlı təsir qüvvələri nəzərə alınmayan və zərbələri mütləq elastik olan qaz **ideal qaz** adlanır:\n$$PV = \\nu RT = \\frac{m}{M} RT$$\nBurada $R \\approx 8.31 \\frac{\\text{C}}{\\text{mol}\\cdot\\text{K}}$ — universal qaz sabitidir, $T$ — Kelvin şkalasında mütləq temperaturdur ($T = t^\\circ \\text{C} + 273$).\n\n### 2. İzoproseslər\nQazın kütləsi sabit qaldıqda ($m = \\text{const}$):\n1. **İzotermik proses** ($T = \\text{const}$, Boyl-Mariott qanunu):\n   $$P \\cdot V = \\text{const} \\implies P_1V_1 = P_2V_2$$\n   Qrafiki $P(V)$ koordinatında **hiperboladır**.\n2. **İzobarik proses** ($P = \\text{const}$, Gey-Lüssak qanunu):\n   $$\\frac{V}{T} = \\text{const} \\implies \\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$\n3. **İzooxorik proses** ($V = \\text{const}$, Şarl qanunu):\n   $$\\frac{P}{T} = \\text{const} \\implies \\frac{P_1}{T_1} = \\frac{P_2}{T_2}$$\n        ",
  "keyFormulas": [
    {
      "id": "f-p10-gas-1",
      "name": "Mendeleyev-Klapeyron Tənliyi",
      "latex": "PV = \\frac{m}{M}RT",
      "description": "İdeal qazın təzyiqi, həcmi və temperaturu arasındakı əsas əlaqə."
    },
    {
      "id": "f-p10-gas-2",
      "name": "Boyl-Mariott Qanunu",
      "latex": "P_1V_1 = P_2V_2 \\quad (T = \\text{const})",
      "description": "Sabit temperaturda təzyiq həcmlə tərs mütənasibdir."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-p10-gas-1",
      "title": "Misal: İzotermik sıxılma",
      "problem": "Sabit temperaturda qazın həcmini 4 litrdən 2 litrə qədər azaltdıqda təzyiq necə dəyişər?",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Boyl-Mariott qanununun tətbiqi",
          "content": "$$P_1 \\cdot V_1 = P_2 \\cdot V_2 \\implies P_2 = P_1 \\cdot \\frac{V_1}{V_2}$$"
        },
        {
          "stepNumber": 2,
          "title": "Nəticə",
          "content": "$$P_2 = P_1 \\cdot \\frac{4}{2} = 2P_1$$ Təzyiq 2 dəfə artar."
        }
      ],
      "finalAnswer": "Təzyiq 2 dəfə artar"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-p10-gas-1",
      "question": "Həcmin sabit qaldığı proses necə adlanır?",
      "options": [
        {
          "key": "A",
          "text": "İzooxorik"
        },
        {
          "key": "B",
          "text": "İzobarik"
        },
        {
          "key": "C",
          "text": "İzotermik"
        },
        {
          "key": "D",
          "text": "Adiabatik"
        }
      ],
      "correctKey": "A",
      "explanation": "V = const prosesinə izooxorik proses deyilir."
    }
  ]
},
{
  "id": "lesson-chem-10-alkanes",
  "subjectId": "kimya",
  "grade": 10,
  "unit": "Üzvi Kimya: Karbohidrogenlər",
  "unitOrder": 2,
  "title": "Doymuş Karbohidrogenlər: Alkanlar",
  "order": 1,
  "readTimeMinutes": 9,
  "difficulty": 2,
  "summary": "Ümumi formula CnH2n+2, sp3 hibridləşməsi, IUPAC nomenklaturası və radikal əvəzetmə reaksiyaları.",
  "theoryMarkdown": "\n### 1. Alkanların Quruluşu və Homoloji Sırası\nMolekulunda karbon atomları arasında yalnız tək (birqat $\\sigma$) rabitələr olan açıq zəncirli karbohidrogenlərə **alkanlar (parafinlər)** deyilir.\n- Ümumi formulu: **$C_nH_{2n+2}$** ($n \\ge 1$)\n- Karbon atomlarının hibridləşmə vəziyyəti: **$sp^3$**\n- Valent bucağı: **$109^\\circ 28'$**\n- Karbon-karbon rabitə uzunluğu: **$0.154 \\text{ nm}$**\n\nIlk 4 nümayəndə:\n- $CH_4$ — Metan\n- $C_2H_6$ — Etan\n- $C_3H_8$ — Propan\n- $C_4H_{10}$ — Butan\n\n### 2. Kimyəvi Xassələri\nAlkanlar kimyəvi cəhətdən passivdir (birləşmə reaksiyasına girmirlər):\n1. **Əvəzetmə (Xlorlaşma)** — sərbəst radikal mexanizmi ilə ($h\\nu$ işıq təsiri ilə):\n   $$CH_4 + Cl_2 \\xrightarrow{h\\nu} CH_3Cl + HCl$$\n2. **Yanma**:\n   $$C_nH_{2n+2} + \\frac{3n+1}{2}O_2 \\to nCO_2 + (n+1)H_2O + Q$$\n3. **Dehidrogenləşmə** (hidrogen ayrılması):\n   $$C_2H_6 \\xrightarrow{t, Ni} C_2H_4 + H_2$$\n        ",
  "keyFormulas": [
    {
      "id": "f-c10-alk-1",
      "name": "Alkanların Ümumi Formulu",
      "latex": "C_nH_{2n+2}",
      "description": "Doymuş alifatik karbohidrogenlər üçün ümumi tərkib."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-c10-alk-1",
      "title": "Misal: 5 karbonlu alkanın molyar kütləsi",
      "problem": "$n = 5$ olan alkanın (pentan) formulunu və molyar kütləsini tapın ($A_r(C)=12, A_r(H)=1$).",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Formulun müəyyən edilməsi",
          "content": "$$C_5H_{2 \\cdot 5 + 2} = C_5H_{12}$$"
        },
        {
          "stepNumber": 2,
          "title": "Molyar kütlə",
          "content": "$$M(C_5H_{12}) = 5 \\cdot 12 + 12 \\cdot 1 = 60 + 12 = 72 \\text{ q/mol}$$"
        }
      ],
      "finalAnswer": "C5H12, M = 72 q/mol"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-c10-alk-1",
      "question": "Alkanlarda karbon atomları hansı hibrid vəziyyətindədir?",
      "options": [
        {
          "key": "A",
          "text": "sp3"
        },
        {
          "key": "B",
          "text": "sp2"
        },
        {
          "key": "C",
          "text": "sp"
        },
        {
          "key": "D",
          "text": "sp3d"
        }
      ],
      "correctKey": "A",
      "explanation": "Alkanların bütün karbon atomları sp3 hibridləşməsindədir və bucaq 109°28'-dir."
    }
  ]
},
{
  "id": "lesson-chem-9-solutions",
  "subjectId": "kimya",
  "grade": 9,
  "unit": "Məhlullar və Həllolma",
  "unitOrder": 2,
  "title": "Məhlulların Qatılığı və Kütlə Payı",
  "order": 1,
  "readTimeMinutes": 8,
  "difficulty": 2,
  "summary": "Həllolma əmsalı, həll olan maddənin kütlə payı (faiz qatılığı) və məhlulların qarışdırılması.",
  "theoryMarkdown": "\n### 1. Məhlul Anlayışı\nMəhlul — həlledici, həll olan maddə və onların qarşılıqlı təsir məhsullarından ibarət **bircinsli (homogen)** sistemdir.\n\nMəhlulun kütləsi:\n$$m_{meh} = m_{mad} + m_{su}$$\n\n### 2. Həll Olan Maddənin Kütlə Payı (Faiz Qatılığı)\nHəll olan maddə kütləsinin ümumi məhlul kütləsinə nisbətinin faizlə ifadəsinə **kütlə payı ($\\omega$)** deyilir:\n$$\\omega = \\frac{m_{mad}}{m_{meh}} \\cdot 100\\% = \\frac{m_{mad}}{m_{mad} + m_{su}} \\cdot 100\\%$$\n\n### 3. Məhlulların Qarışdırılması Qaydası\nİki məhlul qarışdırıldıqda alınan yeni qatılıq:\n$$\\omega_{son} = \\frac{m_1\\omega_1 + m_2\\omega_2}{m_1 + m_2}$$\n        ",
  "keyFormulas": [
    {
      "id": "f-c9-sol-1",
      "name": "Kütlə Payı Düsturu",
      "latex": "\\omega = \\frac{m_{mad}}{m_{meh}} \\cdot 100\\%",
      "description": "Maddə kütləsinin məhlul kütləsinə nisbəti."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-c9-sol-1",
      "title": "Misal: Duzlu suyun faiz qatılığı",
      "problem": "30 qram xörək duzunu 120 qram suda həll etdikdə alınan məhlulun faiz qatılığını tapın.",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Ümumi məhlul kütləsi",
          "content": "$$m_{meh} = 30 + 120 = 150 \\text{ q}$$"
        },
        {
          "stepNumber": 2,
          "title": "Kütlə payı",
          "content": "$$\\omega = \\frac{30}{150} \\cdot 100\\% = \\frac{1}{5} \\cdot 100\\% = 20\\%$$"
        }
      ],
      "finalAnswer": "20%"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-c9-sol-1",
      "question": "100 q 10%-li məhlulda neçə qram həll olan maddə var?",
      "options": [
        {
          "key": "A",
          "text": "10 q"
        },
        {
          "key": "B",
          "text": "90 q"
        },
        {
          "key": "C",
          "text": "1 q"
        },
        {
          "key": "D",
          "text": "20 q"
        }
      ],
      "correctKey": "A",
      "explanation": "m = 100 * 0.10 = 10 qram."
    }
  ]
},
{
  "id": "lesson-bio-10-protein-synthesis",
  "subjectId": "biologiya",
  "grade": 10,
  "unit": "Hüceyrənin Molekulyar Biologiyası",
  "unitOrder": 2,
  "title": "Zülalların Biosintezi və Genetik Kod",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 3,
  "summary": "Transkripsiya, m-RNT, t-RNT, kodon-antikodon qarşılıqlı təsiri və ribosomda translyasiya mərhələsi.",
  "theoryMarkdown": "\n### 1. Genetik Kodun Xassələri\nGenetik informasiya DNT molekulunda nukleotid ardıcıllığı şəklində yazılmışdır:\n1. **Tripletlik**: Hər bir aminturşunu 3 nukleotid (1 kodon) kodlaşdırır. Məsələn: $AUG$ — Metionin və start kodondur.\n2. **Cırlaşmışlıq (artıqlıq)**: 20 aminturşunu 61 mənalı kodon kodlaşdırır (bəzi aminturşular bir neçə kodonla kodlanır).\n3. **Stop kodonlar**: $UAA, UAG, UGA$ zülal sintezini dayandırır.\n4. **Universallıq**: Genetik kod yerdəki bütün canlılar üçün eynidir.\n\n### 2. Transkripsiya (Nüvədə)\nRNT-polimeraza fermenti vasitəsilə DNT matrisindən məlumat RNT-sinin (m-RNT) sintez olunması prosesidir:\n$$A \\to U, \\quad T \\to A, \\quad G \\to C, \\quad C \\to G$$\n\n### 3. Translyasiya (Sitoplazmada və Ribosomda)\nm-RNT ribosomun kiçik və böyük hissəcikləri arasına daxil olur. Nəqliyyat RNT-ləri (t-RNT) aminturşuları ribosomun funksional mərkəzinə gətirir. Kodon və antikodon komplementar birləşdikdə aminturşular arasında **peptid rabitəsi** yaranır və polipeptid zənciri uzanır.\n        ",
  "keyFormulas": [
    {
      "id": "f-b10-prot-1",
      "name": "Nukleotid və Aminturşu Əlaqəsi",
      "latex": "N_{nukleotid} = 3 \\cdot N_{amintursu}",
      "description": "1 aminturşuya 1 triplet (3 nukleotid) uyğundur."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-b10-prot-1",
      "title": "Misal: 90 nukleotidlik m-RNT",
      "problem": "90 nukleotiddən ibarət m-RNT zəncirinin kodlaşdırdığı zülal neçə aminturşudan ibarət olar (stop kodon nəzərə alınmır)?",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Triplet qaydası",
          "content": "$$N_{amintursu} = \\frac{90}{3} = 30$$"
        }
      ],
      "finalAnswer": "30 aminturşu"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-b10-prot-1",
      "question": "Zülal biosintezinin bilavasitə getdiyi hüceyrə orqanoidi hansıdır?",
      "options": [
        {
          "key": "A",
          "text": "Ribosom"
        },
        {
          "key": "B",
          "text": "Lizosom"
        },
        {
          "key": "C",
          "text": "Qolci kompleksi"
        },
        {
          "key": "D",
          "text": "Vakuol"
        }
      ],
      "correctKey": "A",
      "explanation": "Zülal translyasiyası sitoplazmada yerləşən ribosomlarda baş verir."
    }
  ]
},
{
  "id": "lesson-bio-11-evolution",
  "subjectId": "biologiya",
  "grade": 11,
  "unit": "Ümumi Biologiya: Təkamül Təlimi",
  "unitOrder": 2,
  "title": "Çarlz Darvinin Təkamül Nəzəriyyəsi və Təbii Seçmə",
  "order": 1,
  "readTimeMinutes": 9,
  "difficulty": 2,
  "summary": "İrsi dəyişkənlik, yaşamaq uğrunda mübarizə, təbii seçmə və adaptasiyaların yaranması.",
  "theoryMarkdown": "\n### 1. Darvinizmin Hərəkətverici Qüvvələri\n1859-cu ildə Çarlz Darvin 'Növlərin Mənşəyi' əsərində üzvi aləmin təkamülünün əsas amillərini göstərdi:\n1. **İrsi dəyişkənlik (Mutasiyalar və kombinativ)**: Nəsildən-nəslə ötürülən fərdi fərqlər.\n2. **Yaşamaq uğrunda mübarizə**:\n   - *Növdaxili*: Ən kəskin mübarizə formasıdır (eyni qida və yaşayış sahəsi uğrunda).\n   - *Növlərarası*: Yırtıcı-şikar, rəqabət münasibətləri.\n   - *Əlverişsiz mühit şəraitinə qarşı*: Quraqlıq, şaxta və s.\n3. **Təbii seçmə**: Mühit şəraitinə daha yaxşı uyğunlaşan fərdlərin sağ qalaraq nəsil verməsi, uyğunlaşmayanların isə sıradan çıxması prosesidir.\n\n### 2. Uyğunlaşmaların Nisbi Xarakteri\nHər hansı bir adaptasiya yalnız müəyyən konkret mühit şəraitində faydalıdır. Mühit dəyişdikdə həmin əlamət zərərli və ya neytral ola bilər (məsələn, qarın əriməsi zamanı ağ kəkliyin ağ rəngi yırtıcılar üçün onu aşkar edir).\n        ",
  "keyFormulas": [
    {
      "id": "f-b11-evo-1",
      "name": "Təkamülün Əsas Triadası",
      "latex": "\\text{İrsi Dəyişkənlik} + \\text{Mübarizə} \\implies \\text{Təbii Seçmə}",
      "description": "Darvinə görə növlərin təkamül dinamikası."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-b11-evo-1",
      "title": "Misal: Növdaxili mübarizə",
      "problem": "Niyə növdaxili mübarizə növlərarası mübarizədən daha kəskin xarakter daşıyır?",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Tələbatların eyniliyi",
          "content": "Eyni növə aid fərdlərin qida mənbəyi, yaşayış ərazisi və çoxalma tərəfdaşı tam eynidir."
        }
      ],
      "finalAnswer": "Fərdlərin eyni həyati ehtiyaclar uğrunda rəqabət aparması səbəbindən"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-b11-evo-1",
      "question": "Təkamülün ən əsas yönəldici amili hansıdır?",
      "options": [
        {
          "key": "A",
          "text": "Təbii seçmə"
        },
        {
          "key": "B",
          "text": "Modifikasiya dəyişkənliyi"
        },
        {
          "key": "C",
          "text": "Süni seçmə"
        },
        {
          "key": "D",
          "text": "Populyasiya dalğaları"
        }
      ],
      "correctKey": "A",
      "explanation": "Təkamülü müəyyən istiqamətə yönəldən yeganə amil təbii seçmədir."
    }
  ]
},
{
  "id": "lesson-inf-10-algorithms",
  "subjectId": "informatika",
  "grade": 10,
  "unit": "Alqoritmləşdirmə və Proqramlaşdırma",
  "unitOrder": 2,
  "title": "Axtarış və Çeşidləmə Alqoritmləri (Python)",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 3,
  "summary": "Xətti və ikilik (binary) axtarış, Bubble sort çeşidləməsi, asimptotik zaman mürəkkəbliyi O(n) və O(log n).",
  "theoryMarkdown": "\n### 1. İkilik Axtarış (Binary Search)\nYalnız **çeşidlənmiş (sıralanmış)** massivlərdə işləyən ən sürətli axtarış alqoritmidir. Hər addımda axtarış sahəsini yarıya bölür:\n- Zaman mürəkkəbliyi: **$O(\\log_2 n)$**\n\n```python\ndef binary_search(arr, target):\n    low = 0\n    high = len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n```\n\n### 2. Qabarcıqlı Çeşidləmə (Bubble Sort)\nQonşu elementləri ardıcıl müqayisə edərək böyüyü sağa doğru 'üzdürən' sadə çeşidləmə üsuludur:\n- Zaman mürəkkəbliyi: **$O(n^2)$**\n\n```python\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n```\n        ",
  "keyFormulas": [
    {
      "id": "f-i10-alg-1",
      "name": "İkilik Axtarış Addım Sayı",
      "latex": "k = \\lceil \\log_2 n \\rceil",
      "description": "n elementli massivdə ən pis halda maksimum müqayisə sayı."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-i10-alg-1",
      "title": "Misal: 1024 elementli massivdə ikilik axtarış",
      "problem": "1024 elementdən ibarət sıralanmış siyahıda axtarılan ədədi tapmaq üçün ən çox neçə müqayisə tələb olunar?",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Loqarifmik hesablama",
          "content": "$$\\log_2(1024) = 10$$"
        }
      ],
      "finalAnswer": "Maksimum 10 müqayisə"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-i10-alg-1",
      "question": "İkilik axtarışın (Binary Search) işləməsi üçün əsas şərt nədir?",
      "options": [
        {
          "key": "A",
          "text": "Siyahının sıralanmış (çeşidlənmiş) olması"
        },
        {
          "key": "B",
          "text": "Bütün elementlərin cüt ədəd olması"
        },
        {
          "key": "C",
          "text": "Siyahının ölçüsünün 10-dan kiçik olması"
        },
        {
          "key": "D",
          "text": "Yalnız mənfi ədədlərdən ibarət olması"
        }
      ],
      "correctKey": "A",
      "explanation": "Binary search yalnız əvvəlcədən nizamlanmış massivdə işləyə bilər."
    }
  ]
},
{
  "id": "lesson-geo-10-economic-regions",
  "subjectId": "cografiya",
  "grade": 10,
  "unit": "Azərbaycanın İqtisadi Coğrafiyası",
  "unitOrder": 2,
  "title": "Azərbaycanın Yeni İqtisadi Rayonları və Təbii Ehtiyatları",
  "order": 1,
  "readTimeMinutes": 9,
  "difficulty": 2,
  "summary": "14 iqtisadi rayon bölgüsü, Qarabağ və Şərqi Zəngəzurun bərpası, faydalı qazıntılar və aqroiqlim potensialı.",
  "theoryMarkdown": "\n### 1. Yeni İqtisadi Bölgü (7 İyul 2021 Fərmanı)\nAzərbaycan Respublikası Prezidentinin 2021-ci il 7 iyul tarixli fərmanı ilə ölkəmiz **14 iqtisadi rayona** bölünmüşdür:\n1. **Bakı** (neft-qaz sənayesi, xidmət sektoru)\n2. **Abşeron-Xızı** (kimya, maşınqayırma, quşçuluq)\n3. **Qarabağ** (tikinti materialları, turizm, kənd təsərrüfatı — taxılçılıq və üzümçülük)\n4. **Şərqi Zəngəzur** (qızıl, civə, polimetal ehtiyatları, hidroenergetika, yaylaq heyvandarlığı)\n5. **Gəncə-Daşkəsən** (dəmir filizi, alunit, əlvan metallurgiya)\n6. **Qazax-Tovuz** (üzümçülük, bağçılıq, şərabçılıq)\n7. **Şəki-Zaqatala** (fındıqçılıq, tütünçülük, ipəkçilik, meşə ehtiyatları)\n8. **Quba-Xaçmaz** (meyvəçilik, tərəvəzçilik, neft emalı)\n9. **Mərkəzi Aran** (pambıqçılıq, taxılçılıq, meliorasiya qovşağı)\n10. **Mil-Muğan**, 11. **Şirvan-Salyan**\n12. **Lənkəran-Astara** (sitrusçuluq, çayçılıq, çəltikçilik)\n13. **Dağlıq Şirvan** (şərabçılıq, arıçılıq)\n14. **Naxçıvan** (duz mədənləri, mineral sular, sement, günəş enerjisi)\n        ",
  "keyFormulas": [
    {
      "id": "f-g10-reg-1",
      "name": "İqtisadi İxtisaslaşma Əmsalı",
      "latex": "K_i = \\frac{E_r / E_o}{Ü_r / Ü_o}",
      "description": "Rayonun milli iqtisadiyyatda ixtisaslaşma dərəcəsini müəyyən edən indeks."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-g10-reg-1",
      "title": "Misal: Daşkəsən dəmir filizi",
      "problem": "Azərbaycanın yeganə sənaye əhəmiyyətli dəmir filizi yatağı hansı iqtisadi rayonda yerləşir?",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Coğrafi yerləşmə",
          "content": "Daşkəsən yatağı Gəncə-Daşkəsən iqtisadi rayonunun ərazisində yerləşir."
        }
      ],
      "finalAnswer": "Gəncə-Daşkəsən iqtisadi rayonu"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-g10-reg-1",
      "question": "Azərbaycanda çayçılıq və sitrusçuluq üzrə ixtisaslaşmış iqtisadi rayon hansıdır?",
      "options": [
        {
          "key": "A",
          "text": "Lənkəran-Astara"
        },
        {
          "key": "B",
          "text": "Quba-Xaçmaz"
        },
        {
          "key": "C",
          "text": "Mərkəzi Aran"
        },
        {
          "key": "D",
          "text": "Naxçıvan"
        }
      ],
      "correctKey": "A",
      "explanation": "Rütubətli subtropik iqlimə malik Lənkəran-Astara rayonunda sitrus meyvələri və çay becərilir."
    }
  ]
},
{
  "id": "lesson-hist-10-safavids",
  "subjectId": "tarix",
  "grade": 10,
  "unit": "Azərbaycan Orta Əsrlərdə",
  "unitOrder": 2,
  "title": "Səfəvilər Dövlətinin Yaranması və Şah İsmayıl Xətai",
  "order": 1,
  "readTimeMinutes": 10,
  "difficulty": 2,
  "summary": "1501-ci il Təbriz tacqoyması, Azərbaycan torpaqlarının vahid dövlətdə birləşdirilməsi və Çaldıran döyüşü.",
  "theoryMarkdown": "\n### 1. Dövlətin Yaranması (1501)\nXV əsrin sonunda Ərdəbil hakimi İsmayıl Səfəvi qızılbaş tayfalarının dəstəyi ilə hərbi yürüşlərə başladı:\n- **1500-cü il**: Cabanı döyüşündə Şirvanşah Fərrux Yasar məğlub edildi.\n- **1501-ci il**: Şərur döyüşündə Ağqoyunlu Əlvənd Mirzə məğlub edildi. İsmayıl Təbrizə daxil olaraq özünü Şah elan etdi. Beləliklə, paytaxtı Təbriz olan vahid **Azərbaycan Səfəvi Dövləti** yarandı.\n- **Dövlət dili**: Azərbaycan türk dili ilk dəfə sarayda, orduda və diplomatik yazışmalarda rəsmi dövlət dili səviyyəsinə yüksəldi.\n\n### 2. Azərbaycan Torpaqlarının Birləşdirilməsi\n- **1503-cü il**: Almaqulağı döyüşündə Ağqoyunlu Murad Mirzə məğlub edildi və ikinci Ağqoyunlu qolu süqut etdi.\n- **1510-cu il**: Mərv döyüşündə Şeybani xanın qoşunları darmadağın edildi, Xorasan Səfəvilərə qatıldı.\n\n### 3. Çaldıran Döyüşü (1514)\n23 avqust 1514-cü ildə Osmanlı sultanı I Səlim ilə Şah İsmayıl arasında Çaldıran düzündə qanlı döyüş baş verdi. Osmanlı ordusunun sayca üstünlüyü və 300 topdan ibarət odlu silah üstünlüyü nəticəsində Səfəvilər məğlub oldu.\n        ",
  "keyFormulas": [
    {
      "id": "f-h10-saf-1",
      "name": "Əsas Tarixi Xronologiya",
      "latex": "1500 (\\text{Cabanı}) \\to 1501 (\\text{Təbriz}) \\to 1510 (\\text{Mərv}) \\to 1514 (\\text{Çaldıran})",
      "description": "Şah İsmayılın əsas döyüşləri və dövlət quruculuğu mərhələləri."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-h10-saf-1",
      "title": "Misal: Səfəvilər dövlətinin ilk paytaxtı",
      "problem": "Səfəvilər dövlətinin 1501-1555-ci illərdə paytaxtı hansı şəhər olmuşdur?",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Paytaxt xronologiyası",
          "content": "İlk paytaxt Təbriz olmuş, 1555-ci ildə Şah Təhmasib paytaxtı Qəzvinə, 1598-ci ildə I Şah Abbas İsfahana köçürmüşdür."
        }
      ],
      "finalAnswer": "Təbriz"
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-h10-saf-1",
      "question": "Səfəvilər dövlətinin əsası neçənci ildə və harada qoyulmuşdur?",
      "options": [
        {
          "key": "A",
          "text": "1501-ci ildə Təbrizdə"
        },
        {
          "key": "B",
          "text": "1468-ci ildə Ərdəbildə"
        },
        {
          "key": "C",
          "text": "1514-cü ildə Çaldıranda"
        },
        {
          "key": "D",
          "text": "1555-ci ildə Amasiyada"
        }
      ],
      "correctKey": "A",
      "explanation": "1501-ci ildə Şah İsmayıl Təbrizdə taxta çıxaraq dövlətin əsasını qoymuşdur."
    }
  ]
},
{
  "id": "lesson-eng-10-conditionals",
  "subjectId": "ingilis_dili",
  "grade": 10,
  "unit": "Advanced English Grammar",
  "unitOrder": 2,
  "title": "Conditionals (Type 0, 1, 2, 3) & Mixed Conditionals",
  "order": 1,
  "readTimeMinutes": 9,
  "difficulty": 2,
  "summary": "Real və qeyri-real şərt budaq cümlələrinin zaman formaları və cümlədə işlənmə qaydaları.",
  "theoryMarkdown": "\n### 1. Types of Conditional Sentences\nConditionals consist of an **If-clause** (condition) and a **Main clause** (result):\n\n| Type | Meaning | If-clause | Main clause | Example |\n|---|---|---|---|---|\n| **Zero (0)** | Universal truth, scientific law | Present Simple | Present Simple | *If you heat ice, it melts.* |\n| **First (1)** | Real possibility in the future | Present Simple | will + V1 | *If it rains tomorrow, we will stay at home.* |\n| **Second (2)**| Unreal / hypothetical present | Past Simple (were) | would + V1 | *If I had a million dollars, I would travel the world.* |\n| **Third (3)** | Regret / impossible past | Past Perfect (had + V3) | would have + V3 | *If she had studied harder, she would have passed the exam.* |\n\n### 2. Important Rules\n- Second conditional-da bütün şəxslər üçün 'was' əvəzinə **'were'** işlədilməsi ədəbi dildə qəbul olunur:\n  *If I were you, I would consult a doctor.*\n- **Unless** = *If ... not* (inkarlıq daxilindədir):\n  *Unless you hurry, you will miss the train.*\n        ",
  "keyFormulas": [
    {
      "id": "f-e10-cond-1",
      "name": "Second Conditional Formula",
      "latex": "\\text{If} + \\text{Past Simple}, \\quad \\text{would} + V_1",
      "description": "İndiki zamana aid qeyri-real xəyali vəziyyətlər."
    },
    {
      "id": "f-e10-cond-2",
      "name": "Third Conditional Formula",
      "latex": "\\text{If} + \\text{Past Perfect}, \\quad \\text{would have} + V_3",
      "description": "Keçmişdə baş verməmiş və dəyişdirilməsi qeyri-mümkün olan hallar."
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-e10-cond-1",
      "title": "Example: Third Conditional formation",
      "problem": "Put the verbs into the correct tense: 'If they (leave) earlier, they (not miss) the high-speed train.'",
      "solutionSteps": [
        {
          "stepNumber": 1,
          "title": "Identify time reference",
          "content": "The sentence refers to a completed past regret -> Third Conditional."
        },
        {
          "stepNumber": 2,
          "title": "Apply formula",
          "content": "'had left' in If-clause, 'would not have missed' in Main clause."
        }
      ],
      "finalAnswer": "If they had left earlier, they would not have missed the high-speed train."
    }
  ],
  "miniQuiz": [
    {
      "questionId": "mq-e10-cond-1",
      "question": "Which sentence expresses an imaginary situation in the present (Type 2)?",
      "options": [
        {
          "key": "A",
          "text": "If I knew his phone number, I would call him right now."
        },
        {
          "key": "B",
          "text": "If it rains, we get wet."
        },
        {
          "key": "C",
          "text": "If he comes, I will tell him."
        },
        {
          "key": "D",
          "text": "If I had seen her, I would have said hello."
        }
      ],
      "correctKey": "A",
      "explanation": "Past simple (knew) + would + V1 (would call) represents Type 2 conditional."
    }
  ]
}
];
