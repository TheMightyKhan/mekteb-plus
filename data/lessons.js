// MəktəbPlus - Bütün Fənlər və Siniflər Üzrə Genişləndirilmiş Dərslər Kataloqu
// 9 Fənn: Riyaziyyat, Fizika, Kimya, Biologiya, Coğrafiya, Tarix, Azərbaycan dili, İngilis dili, İnformatika
// Bütün Siniflər: 6, 7, 8, 9, 10, 11
// Riyaziyyat Fənni: AR Elm və Təhsil Nazirliyi e-Dərslik (6-11-ci siniflər) 100% rəsmi proqramına uyğun bölmələrə ayrılmışdır.

export const MOCK_LESSONS = [
  // =========================================================================
  // RİYAZİYYAT (AR Elm və Təhsil Nazirliyi e-Dərslik: 6, 7, 8, 9, 10, 11)
  // =========================================================================
  {
    id: 'lesson-math-6-u1-fractions',
    subjectId: 'riyaziyyat',
    grade: 6,
    unit: 'Bölmə 1: Adi kəsrlər və onlar üzərində əməllər',
    unitOrder: 1,
    title: 'Adi kəsrlərin toplanması, çıxılması və ixtisarı',
    order: 1,
    readTimeMinutes: 8,
    difficulty: 1,
    summary: 'Məxrəcləri eyni və müxtəlif olan adi kəsrlərin müqayisəsi, ortaq məxrəcə (ƏKOB) gətirilməsi və hesablanması.',
    theoryMarkdown: `
### 1. Kəsrin Əsas Xassəsi
Vahid bir tamın bərabər hissələrindən birini və ya bir neçəsini göstərən ədədə **adi kəsr** deyilir:
$$\frac{a}{b} \quad (b \neq 0)$$
Burada $a$ kəsrin surəti, $b$ isə məxrəcidir.

Kəsrin surət və məxrəcini sıfırdan fərqli eyni bir natural ədədə vursaq və ya bölsək, kəsrin qiyməti dəyişməz:
$$\frac{a}{b} = \frac{a \cdot k}{b \cdot k} \quad (k \neq 0)$$

### 2. Məxrəcləri Eyni Olan Kəsrlərin Toplanması və Çıxılması
Məxrəcləri eyni olan kəsrləri toplayarkən (və ya çıxarkən) məxrəc olduğu kimi qalır, surətlər toplanır (və ya çıxılır):
$$\frac{a}{c} + \frac{b}{c} = \frac{a + b}{c}, \qquad \frac{a}{c} - \frac{b}{c} = \frac{a - b}{c}$$

### 3. Məxrəcləri Müxtəlif Olan Kəsrlər
Məxrəcləri müxtəlif olan kəsrləri toplamaq üçün əvvəlcə onların məxrəclərinin ƏKOB-u tapılır və kəsrlər ortaq məxrəcə gətirilir:
$$\frac{1}{3} + \frac{1}{6} = \frac{2}{6} + \frac{1}{6} = \frac{3}{6} = \frac{1}{2}$$
    `,
    keyFormulas: [
      {
            "id": "f-m6-u1-1",
            "name": "Məxrəcləri Eyni Kəsrlərin Cəmi",
            "latex": "\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}",
            "description": "Məxrəc sabit qalır, surətlər cəmlənir."
      },
      {
            "id": "f-m6-u1-2",
            "name": "Kəsrin İxtisarı",
            "latex": "\\frac{a \\cdot k}{b \\cdot k} = \\frac{a}{b}",
            "description": "Surət və məxrəc eyni ortaq vuruğa bölünür."
      }
],
    glossary: [
      {
            "term": "Surət (a)",
            "definition": "Kəsr xəttinin üstündə yazılan və götürülən bərabər hissələrin sayını göstərən ədəd."
      },
      {
            "term": "Məxrəc (b)",
            "definition": "Tamın neçə bərabər hissəyə bölündüyünü göstərən sıfırdan fərqli ədəd."
      },
      {
            "term": "ƏKOB",
            "definition": "Ən Kiçik Ortaq Bölünən - kəsrlərin ən kiçik ortaq məxrəcidir."
      }
],
    solvedExamples: [
      {
            "id": "ex-m6-u1-1",
            "question": "$\\frac{3}{8} + \\frac{1}{4}$ cəmini hesablayın.",
            "solution": "Ortaq məxrəc ƏKOB(8, 4) = 8-dir. $\\frac{1}{4} = \\frac{2}{8}$. Buradan: $\\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m6-u1-1",
            "question": "$\\frac{2}{7} + \\frac{3}{7}$ ifadəsinin qiyməti nəyə bərabərdir?",
            "options": [
                  {
                        "key": "A",
                        "text": "$\\frac{5}{14}$"
                  },
                  {
                        "key": "B",
                        "text": "$\\frac{5}{7}$"
                  },
                  {
                        "key": "C",
                        "text": "$\\frac{6}{7}$"
                  },
                  {
                        "key": "D",
                        "text": "1"
                  }
            ],
            "correctKey": "B",
            "explanation": "Məxrəclər bərabər olduğu üçün surətlər toplanır: 2 + 3 = 5, yəni 5/7."
      }
]
  },

  {
    id: 'lesson-math-6-u2-ratio',
    subjectId: 'riyaziyyat',
    grade: 6,
    unit: 'Bölmə 2: Nisbət. Tənasüb. Faiz',
    unitOrder: 2,
    title: 'Nisbət, tənasüb və faiz anlayışı',
    order: 1,
    readTimeMinutes: 8,
    difficulty: 1,
    summary: 'Tənasübün əsas xassəsi, düz və tərs mütənasib kəmiyyətlər, ədədin faizinin tapılması.',
    theoryMarkdown: `
### 1. Nisbət və Tənasüb
İki ədədin qismətinə onların **nisbəti** deyilir: $\frac{a}{b}$ və ya $a : b$.

İki nisbətin bərabərliyinə **tənasüb** deyilir:
$$\frac{a}{b} = \frac{c}{d} \quad \text{və ya} \quad a : b = c : d$$
Burada $a$ və $d$ kənar hədlər, $b$ və $c$ isə orta hədlər adlanır.

### 2. Tənasübün Əsas Xassəsi
Tənasübdə kənar hədlərin hasili orta hədlərin hasilinə bərabərdir:
$$a \cdot d = b \cdot c$$

### 3. Faiz
Ədədin yüzdə bir hissəsinə **faiz** deyilir ($1\% = 0.01$).
- **Ədədin faizinin tapılması:** $a$ ədədinin $p\%$-ni tapmaq üçün:
$$A = \frac{a \cdot p}{100}$$
- **Faizinə görə ədədin tapılması:** $p\%$-i $b$ olan ədədi tapmaq üçün:
$$a = \frac{b \cdot 100}{p}$$
    `,
    keyFormulas: [
      {
            "id": "f-m6-u2-1",
            "name": "Tənasübün Əsas Xassəsi",
            "latex": "a \\cdot d = b \\cdot c",
            "description": "Kənar hədlərin hasili orta hədlərin hasilinə bərabərdir."
      },
      {
            "id": "f-m6-u2-2",
            "name": "Ədədin Faizi",
            "latex": "A = \\frac{a \\cdot p}{100}",
            "description": "a ədədinin p faizinin hesablanması."
      }
],
    glossary: [
      {
            "term": "Tənasüb",
            "definition": "İki nisbətin bərabərliyi."
      },
      {
            "term": "Faiz",
            "definition": "Hər hansı kəmiyyətin yüzdə bir (1/100) hissəsi."
      }
],
    solvedExamples: [
      {
            "id": "ex-m6-u2-1",
            "question": "$\\frac{x}{6} = \\frac{10}{15}$ tənasübündən $x$-i tapın.",
            "solution": "Tənasübün əsas xassəsinə görə: $15 \\cdot x = 6 \\cdot 10 \\Rightarrow 15x = 60 \\Rightarrow x = 4$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m6-u2-1",
            "question": "200 ədədinin $25\\%$-i neçədir?",
            "options": [
                  {
                        "key": "A",
                        "text": "25"
                  },
                  {
                        "key": "B",
                        "text": "40"
                  },
                  {
                        "key": "C",
                        "text": "50"
                  },
                  {
                        "key": "D",
                        "text": "75"
                  }
            ],
            "correctKey": "C",
            "explanation": "200 * 25 / 100 = 50."
      }
]
  },

  {
    id: 'lesson-math-6-u3-integers',
    subjectId: 'riyaziyyat',
    grade: 6,
    unit: 'Bölmə 3: Tam ədədlər',
    unitOrder: 3,
    title: 'Mənfi və müsbət ədədlər. Ədədin modulu',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 1,
    summary: 'Tam ədədlər çoxluğu, koordinat oxu, əks ədədlər, ədədin mütləq qiyməti (modul) və tam ədədlərin toplanması.',
    theoryMarkdown: `
### 1. Tam Ədədlər Çoxluğu
Natural ədədlər, onların əksi olan mənfi ədədlər və sıfır birlikdə **tam ədədlər çoxluğunu** təşkil edir:
$$\mathbb{Z} = \{ \dots, -3, -2, -1, 0, 1, 2, 3, \dots \}$$

### 2. Ədədin Modulu (Mütləq Qiyməti)
Koordinat düz xətti üzərində hesablama başlanğıcından ($0$ nöqtəsindən) verilmiş ədədə qədər olan məsafəyə həmin ədədin **modulu** deyilir:
$$|a| = \begin{cases} a, & a \ge 0 \\ -a, & a < 0 \end{cases}$$
Məsafə mənfi ola bilmədiyi üçün modul həmişə qeyri-mənfidir: $|-7| = 7$, $|+5| = 5$, $|0| = 0$.

### 3. Mənfi Ədədlər Üzərində Əməllər
- İki mənfi ədədin cəmi mənfidir: $(-4) + (-6) = -(4+6) = -10$.
- Müxtəlif işarəli ədədləri toplayarkən modulu böyük olandan kiçik çıxılır və böyüyün işarəsi yazılır: $(-9) + 4 = -(9-4) = -5$.
- İki mənfi ədədin hasili müsbətdir: $(-3) \cdot (-5) = +15$.
    `,
    keyFormulas: [
      {
            "id": "f-m6-u3-1",
            "name": "Modulun Xassəsi",
            "latex": "|-a| = |a| \\ge 0",
            "description": "Əks ədədlərin modulları bərabərdir və qeyri-mənfidir."
      },
      {
            "id": "f-m6-u3-2",
            "name": "Mənfi Ədədlərin Hasili",
            "latex": "(-a) \\cdot (-b) = a \\cdot b",
            "description": "Eyni işarəli ədədlərin hasili həmişə müsbətdir."
      }
],
    glossary: [
      {
            "term": "Modul (|a|)",
            "definition": "Koordinat başlanğıcından ədədə qədər olan məsafə."
      },
      {
            "term": "Əks ədədlər",
            "definition": "Yalnız işarələri ilə fərqlənən iki ədəd (məsələn, 5 və -5)."
      }
],
    solvedExamples: [
      {
            "id": "ex-m6-u3-1",
            "question": "$|-15| - |-8| + |3|$ ifadəsini hesablayın.",
            "solution": "$|-15| = 15$, $|-8| = 8$, $|3| = 3$. Buradan: $15 - 8 + 3 = 10$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m6-u3-1",
            "question": "$(-12) \\cdot (-3)$ hasilini tapın.",
            "options": [
                  {
                        "key": "A",
                        "text": "-36"
                  },
                  {
                        "key": "B",
                        "text": "36"
                  },
                  {
                        "key": "C",
                        "text": "-15"
                  },
                  {
                        "key": "D",
                        "text": "15"
                  }
            ],
            "correctKey": "B",
            "explanation": "İki mənfi ədədin hasili müsbətdir: (-12) * (-3) = +36."
      }
]
  },

  {
    id: 'lesson-math-6-u4-equations',
    subjectId: 'riyaziyyat',
    grade: 6,
    unit: 'Bölmə 4: Riyazi ifadə. Tənlik. Bərabərsizlik',
    unitOrder: 4,
    title: 'Sadə xətti tənliklər və onların həlli',
    order: 1,
    readTimeMinutes: 8,
    difficulty: 1,
    summary: 'Tənlik anlayışı, oxşar hədlərin islahı, hədlərin tənliyin bir tərəfindən digər tərəfinə işarəsini dəyişərək keçirilməsi.',
    theoryMarkdown: `
### 1. Tənlik Nədir?
Tərkibində dəyişən (məchul hərf) olan bərabərliyə **tənlik** deyilir. Tənliyi doğru bərabərliyə çevirən dəyişənin qiymətinə tənliyin **kökü** deyilir.

### 2. Tənliyin Əsas Xassələri
- Tənliyin hər iki tərəfinə eyni bir ədədi əlavə etmək və ya çıxmaq olar.
- Tənliyin hər iki tərəfini sıfırdan fərqli eyni bir ədədə vurmaq və ya bölmək olar.
- Tənliyin istənilən həddini işarəsini əksinə dəyişməklə bərabərliyin bir tərəfindən digər tərəfinə keçirmək olar:
$$ax + b = c \implies ax = c - b \implies x = \frac{c - b}{a} \quad (a \neq 0)$$

### 3. Mötərizəli Tənliklərin Həlli
Əvvəlcə vurmanın paylama xassəsi ilə mötərizələr açılır, oxşar hədlər islah edilir, məchullar sol tərəfə, məlumlar sağ tərəfə yığılır.
    `,
    keyFormulas: [
      {
            "id": "f-m6-u4-1",
            "name": "Xətti Tənliyin Kökü",
            "latex": "ax = b \\implies x = \\frac{b}{a} \\quad (a \\neq 0)",
            "description": "Vuruğu tapmaq üçün hasil məlum vuruğa bölünür."
      }
],
    glossary: [
      {
            "term": "Tənliyin kökü",
            "definition": "Dəyişənin tənliyi doğru bərabərliyə çevirən qiyməti."
      },
      {
            "term": "Oxşar hədlər",
            "definition": "Yalnız əmsalları ilə fərqlənən hərfi ifadələr."
      }
],
    solvedExamples: [
      {
            "id": "ex-m6-u4-1",
            "question": "$3x - 7 = 14$ tənliyini həll edin.",
            "solution": "$3x = 14 + 7 \\implies 3x = 21 \\implies x = \\frac{21}{3} = 7$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m6-u4-1",
            "question": "$5x + 10 = 35$ tənliyinin kökü neçədir?",
            "options": [
                  {
                        "key": "A",
                        "text": "5"
                  },
                  {
                        "key": "B",
                        "text": "7"
                  },
                  {
                        "key": "C",
                        "text": "9"
                  },
                  {
                        "key": "D",
                        "text": "25"
                  }
            ],
            "correctKey": "A",
            "explanation": "5x = 35 - 10 = 25 -> x = 25 / 5 = 5."
      }
]
  },

  {
    id: 'lesson-math-6-u5-coordinates',
    subjectId: 'riyaziyyat',
    grade: 6,
    unit: 'Bölmə 5: Düzbucaqlı koordinat sistemi',
    unitOrder: 5,
    title: 'Düzbucaqlı koordinat sistemi və nöqtənin koordinatları',
    order: 1,
    readTimeMinutes: 8,
    difficulty: 1,
    summary: 'Koordinat başlanğıcı, absis ($Ox$) və ordinat ($Oy$) oxları, koordinat rübləri və müstəvidə nöqtənin qurulması.',
    theoryMarkdown: `
### 1. Koordinat Müstəvisi
Hesablama başlanğıcı eyni olan iki qarşılıqlı perpendikulyar koordinat düz xəttinə **düzbucaqlı koordinat sistemi** deyilir:
- Üfüqi ox: **absis oxu** ($Ox$)
- Şaquli ox: **ordinat oxu** ($Oy$)
- Kəsişmə nöqtəsi: **koordinat başlanğıcı** $O(0; 0)$

### 2. Nöqtənin Koordinatları
Müstəvidəki hər bir $A$ nöqtəsi nizamlı ədədlər cütü ilə ifadə edilir: $A(x; y)$.
- $x$ — nöqtənin absisi (üfüqi mövqeyi)
- $y$ — nöqtənin ordinatı (şaquli mövqeyi)

### 3. Koordinat Rübləri
Oxlar müstəvini 4 rübə bölür:
- I rüb: $x > 0, y > 0$
- II rüb: $x < 0, y > 0$
- III rüb: $x < 0, y < 0$
- IV rüb: $x > 0, y < 0$
    `,
    keyFormulas: [
      {
            "id": "f-m6-u5-1",
            "name": "Nöqtənin Koordinat Cütü",
            "latex": "M(x; y)",
            "description": "Birinci yerdə absis (x), ikinci yerdə ordinat (y) yazılır."
      }
],
    glossary: [
      {
            "term": "Absis oxu",
            "definition": "Üfüqi Ox oxu."
      },
      {
            "term": "Ordinat oxu",
            "definition": "Şaquli Oy oxu."
      },
      {
            "term": "Koordinat başlanğıcı",
            "definition": "Oxların kəsişdiyi O(0; 0) nöqtəsi."
      }
],
    solvedExamples: [
      {
            "id": "ex-m6-u5-1",
            "question": "$B(-3; 5)$ nöqtəsi neçənci koordinat rübündə yerləşir?",
            "solution": "Absis $x = -3 < 0$, ordinat $y = 5 > 0$ olduğundan, nöqtə II koordinat rübündə yerləşir."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m6-u5-1",
            "question": "$C(4; -2)$ nöqtəsi koordinat müstəvisinin hansı rübünə aiddir?",
            "options": [
                  {
                        "key": "A",
                        "text": "I rüb"
                  },
                  {
                        "key": "B",
                        "text": "II rüb"
                  },
                  {
                        "key": "C",
                        "text": "III rüb"
                  },
                  {
                        "key": "D",
                        "text": "IV rüb"
                  }
            ],
            "correctKey": "D",
            "explanation": "x müsbət (+4) və y mənfi (-2) olduqda nöqtə IV rübə düşür."
      }
]
  },

  {
    id: 'lesson-math-6-u6-angles',
    subjectId: 'riyaziyyat',
    grade: 6,
    unit: 'Bölmə 6: Bucaqlar və Üçbucaqlar',
    unitOrder: 6,
    title: 'Qonşu və qarşılıqlı bucaqlar. Üçbucağın bucaqları',
    order: 1,
    readTimeMinutes: 8,
    difficulty: 1,
    summary: 'Qonşu bucaqların cəmi (180°), qarşılıqlı bucaqların bərabərliyi və üçbucağın daxili bucaqlarının cəmi teoremi.',
    theoryMarkdown: `
### 1. Qonşu və Qarşılıqlı Bucaqlar
- **Qonşu bucaqlar:** Bir tərəfi ortaq, digər tərəfləri isə bir-birini tamamlayan əks şüalar olan bucaqlardır.
$$\alpha + \beta = 180^\circ$$
- **Qarşılıqlı bucaqlar:** Birinin tərəfləri digərinin tərəflərinin əks şüaları olan iki bucaqdır. Qarşılıqlı bucaqlar bərabərdir:
$$\alpha = \gamma$$

### 2. Üçbucağın Daxili Bucaqlarının Cəmi
İxtiyari üçbucağın daxili bucaqlarının cəmi $180^\circ$-yə bərabərdir:
$$\angle A + \angle B + \angle C = 180^\circ$$

### 3. Üçbucağın Xarici Bucağı
Üçbucağın hər hansı təpəsindəki xarici bucaq ona qonşu olmayan iki daxili bucağın cəminə bərabərdir:
$$\varphi = \angle A + \angle B$$
    `,
    keyFormulas: [
      {
            "id": "f-m6-u6-1",
            "name": "Qonşu Bucaqların Cəmi",
            "latex": "\\alpha + \\beta = 180^\\circ",
            "description": "Qonşu bucaqların cəmi açıq bucağa bərabərdir."
      },
      {
            "id": "f-m6-u6-2",
            "name": "Üçbucağın Daxili Bucaqlarının Cəmi",
            "latex": "\\angle A + \\angle B + \\angle C = 180^\\circ",
            "description": "İxtiyari üçbucaqda daxili bucaqların cəmi 180 dərəcədir."
      }
],
    glossary: [
      {
            "term": "Qonşu bucaqlar",
            "definition": "Cəmi 180 dərəcə olan və bir tərəfi ortaq olan bucaqlar."
      },
      {
            "term": "Qarşılıqlı bucaqlar",
            "definition": "Tərəfləri qarşılıqlı əks şüalar olan və bərabər olan bucaqlar."
      }
],
    solvedExamples: [
      {
            "id": "ex-m6-u6-1",
            "question": "Üçbucağın iki bucağı $45^\\circ$ və $65^\\circ$-dir. Üçüncü bucağı tapın.",
            "solution": "$\\angle C = 180^\\circ - (45^\\circ + 65^\\circ) = 180^\\circ - 110^\\circ = 70^\\circ$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m6-u6-1",
            "question": "Qonşu bucaqlardan biri $70^\\circ$ olarsa, o biri bucaq neçə dərəcədir?",
            "options": [
                  {
                        "key": "A",
                        "text": "70°"
                  },
                  {
                        "key": "B",
                        "text": "90°"
                  },
                  {
                        "key": "C",
                        "text": "110°"
                  },
                  {
                        "key": "D",
                        "text": "120°"
                  }
            ],
            "correctKey": "C",
            "explanation": "Qonşu bucaqların cəmi 180° olduğundan: 180° - 70° = 110°."
      }
]
  },

  {
    id: 'lesson-math-6-u7-volume',
    subjectId: 'riyaziyyat',
    grade: 6,
    unit: 'Bölmə 7: Sahə və Həcm ölçmələri',
    unitOrder: 7,
    title: 'Düzbucaqlı paralelepiped və kubun səthi və həcmi',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 1,
    summary: 'Düzbucaqlının və kvadratın sahəsi, kub və düzbucaqlı paralelepipedin tam səthinin sahəsi və həcm hesablamaları.',
    theoryMarkdown: `
### 1. Düzbucaqlı və Kvadratın Sahəsi
- Tərəfləri $a$ və $b$ olan düzbucaqlının sahəsi: $S = a \cdot b$
- Tərəfi $a$ olan kvadratın sahəsi: $S = a^2$

### 2. Düzbucaqlı Paralelepiped
Ölçüləri $a$, $b$, $c$ (uzunluq, en, hündürlük) olan düzbucaqlı paralelepipedin:
- **Tam səthinin sahəsi:**
$$S = 2(ab + bc + ac)$$
- **Həcmi:**
$$V = a \cdot b \cdot c$$

### 3. Kub
Bütün tilləri bərabər ($a$) olan paralelepiped kubdur:
- Tam səthi: $S = 6a^2$
- Həcmi: $V = a^3$
- $1 \text{ l} = 1 \text{ dm}^3 = 1000 \text{ sm}^3$
    `,
    keyFormulas: [
      {
            "id": "f-m6-u7-1",
            "name": "Paralelepipedin Həcmi",
            "latex": "V = a \\cdot b \\cdot c",
            "description": "Həcm üç ölçünün (en, uzunluq, hündürlük) hasilinə bərabərdir."
      },
      {
            "id": "f-m6-u7-2",
            "name": "Kubun Həcmi",
            "latex": "V = a^3",
            "description": "Kubun həcmi tilinin kubuna bərabərdir."
      }
],
    glossary: [
      {
            "term": "Həcm",
            "definition": "Cismin fəzada tutduğu yerin kəmiyyət ölçüsü."
      },
      {
            "term": "Düzbucaqlı paralelepiped",
            "definition": "Altı üzünün hamısı düzbucaqlı olan fəza cismi."
      }
],
    solvedExamples: [
      {
            "id": "ex-m6-u7-1",
            "question": "Ölçüləri 4 sm, 5 sm və 10 sm olan düzbucaqlı paralelepipedin həcmini tapın.",
            "solution": "$V = a \\cdot b \\cdot c = 4 \\cdot 5 \\cdot 10 = 200 \\text{ sm}^3$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m6-u7-1",
            "question": "Tili 3 sm olan kubun həcmi neçə $\\text{sm}^3$-dir?",
            "options": [
                  {
                        "key": "A",
                        "text": "9"
                  },
                  {
                        "key": "B",
                        "text": "18"
                  },
                  {
                        "key": "C",
                        "text": "27"
                  },
                  {
                        "key": "D",
                        "text": "54"
                  }
            ],
            "correctKey": "C",
            "explanation": "V = a^3 = 3 * 3 * 3 = 27 sm^3."
      }
]
  },

  {
    id: 'lesson-math-6-u8-stats',
    subjectId: 'riyaziyyat',
    grade: 6,
    unit: 'Bölmə 8: Statistika və Ehtimal',
    unitOrder: 8,
    title: 'Ədədi orta, moda, median və ehtimalın əsasları',
    order: 1,
    readTimeMinutes: 8,
    difficulty: 1,
    summary: 'Verilənlər sırası, ədədi orta, ən çox təkrarlanan ədəd (moda), orta hədd (median) və təsadüfi hadisənin ehtimalı.',
    theoryMarkdown: `
### 1. Statistik Göstəricilər
Verilmiş ədədlər sırası üçün:
- **Ədədi orta:** Ədədlərin cəminin onların sayına bölünməsi ilə tapılır:
$$\bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n}$$
- **Moda:** Verilənlər sırasında ən çox təkrarlanan ədəddir.
- **Median:** Artan ardıcıllıqla düzülmüş sırada tən ortada duran ədəddir (say cüt olduqda ortadakı iki ədədin ədədi ortasıdır).
- **Ən böyük fərq (diapazon):** Ən böyük qiymətlə ən kiçik qiymətin fərqidir.

### 2. Hadisənin Ehtimalı
Təsadüfi hadisənin baş vermə ehtimalı əlverişli halların sayının ($m$) mümkün bütün halların sayına ($n$) nisbətinə bərabərdir:
$$P(A) = \frac{m}{n} \quad (0 \le P(A) \le 1)$$
- Yəqin hadisə üçün: $P = 1$
- Qeyri-mümkün hadisə üçün: $P = 0$
    `,
    keyFormulas: [
      {
            "id": "f-m6-u8-1",
            "name": "Ədədi Orta",
            "latex": "\\bar{x} = \\frac{\\sum x_i}{n}",
            "description": "Ədədlərin cəminin onların sayına nisbəti."
      },
      {
            "id": "f-m6-u8-2",
            "name": "Klassik Ehtimal Düsturu",
            "latex": "P(A) = \\frac{m}{n}",
            "description": "Əlverişli halların bütün bərabərimkanlı hallara nisbəti."
      }
],
    glossary: [
      {
            "term": "Moda",
            "definition": "Verilənlər sırasında ən böyük tezliklə təkrarlanan qiymət."
      },
      {
            "term": "Median",
            "definition": "Çeşidlənmiş məlumatlar toplusunun tam ortasındakı dəyər."
      }
],
    solvedExamples: [
      {
            "id": "ex-m6-u8-1",
            "question": "4, 7, 7, 8, 9 ədədlərinin ədədi ortasını və modasını tapın.",
            "solution": "Cəm: $4 + 7 + 7 + 8 + 9 = 35$. Say: $5$. Ədədi orta: $35 / 5 = 7$. Ən çox təkrarlanan ədəd 7 olduğundan, Moda = 7."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m6-u8-1",
            "question": "Bir zər atıldıqda tək ədədin (1, 3, 5) düşmə ehtimalı neçədir?",
            "options": [
                  {
                        "key": "A",
                        "text": "1/6"
                  },
                  {
                        "key": "B",
                        "text": "1/3"
                  },
                  {
                        "key": "C",
                        "text": "1/2"
                  },
                  {
                        "key": "D",
                        "text": "2/3"
                  }
            ],
            "correctKey": "C",
            "explanation": "Əlverişli hallar m = 3, ümumi hallar n = 6. P = 3/6 = 1/2."
      }
]
  },

  {
    id: 'lesson-math-7-u1-rational',
    subjectId: 'riyaziyyat',
    grade: 7,
    unit: 'Bölmə 1: Rasional ədədlər',
    unitOrder: 1,
    title: 'Rasional ədədlər çoxluğu və dövri onluq kəsrlər',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 1,
    summary: 'Rasional ədədlər çoxluğu $\mathbb{Q}$, dövri onluq kəsrlər və onların adi kəsrə çevrilməsi qaydası.',
    theoryMarkdown: `
### 1. Rasional Ədədlər Çoxluğu
$\frac{m}{n}$ ($m \in \mathbb{Z}, n \in \mathbb{N}$) şəklində göstərilə bilən bütün ədədlərə **rasional ədədlər** deyilir və $\mathbb{Q}$ ilə işarə olunur:
$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}$$

### 2. Dövri Onluq Kəsrlər
İxtiyari adi kəsri onluq kəsrə çevirdikdə ya sonlu, ya da sonsuz dövri onluq kəsr alınır:
- **Saf dövri onluq kəsr:** Dövriyyə vergüldən dərhal sonra başlayır:
$$0,(3) = \frac{3}{9} = \frac{1}{3}, \qquad 0,(27) = \frac{27}{99} = \frac{3}{11}$$
- **Qarışıq dövri onluq kəsr:** Vergüllə dövr arasında başqa rəqəmlər də olur:
$$0,1(6) = \frac{16 - 1}{90} = \frac{15}{90} = \frac{1}{6}$$

Məxrəcə dövrdəki rəqəmlərin sayı qədər $9$, vergüllə dövr arasındakı rəqəmlərin sayı qədər $0$ yazılır.
    `,
    keyFormulas: [
      {
            "id": "f-m7-u1-1",
            "name": "Saf Dövri Kəsrin Adi Kəsrə Çevrilməsi",
            "latex": "0,(a) = \\frac{a}{9}",
            "description": "Surətdə dövrdəki ədəd, məxrəcdə həmin sayda 9 yazılır."
      },
      {
            "id": "f-m7-u1-2",
            "name": "Qarışıq Dövri Kəsr",
            "latex": "0,a(b) = \\frac{ab - a}{90}",
            "description": "Surətdə bütün ədəddən dövrə qədərki ədəd çıxılır."
      }
],
    glossary: [
      {
            "term": "Rasional ədəd",
            "definition": "İki tam ədədin nisbəti şəklində yazıla bilən hər hansı ədəd."
      },
      {
            "term": "Dövr",
            "definition": "Sonsuz onluq kəsrdə təkrarlanan rəqəm və ya rəqəmlər qrupu."
      }
],
    solvedExamples: [
      {
            "id": "ex-m7-u1-1",
            "question": "$0,(45)$ saf dövri kəsrini adi kəsrə çevirin.",
            "solution": "$0,(45) = \\frac{45}{99}$. Hər iki tərəfi 9-a ixtisar etsək: $\\frac{5}{11}$ alınır."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m7-u1-1",
            "question": "$0,(7)$ kəsri hansı adi kəsrə bərabərdir?",
            "options": [
                  {
                        "key": "A",
                        "text": "7/10"
                  },
                  {
                        "key": "B",
                        "text": "7/9"
                  },
                  {
                        "key": "C",
                        "text": "7/99"
                  },
                  {
                        "key": "D",
                        "text": "1/7"
                  }
            ],
            "correctKey": "B",
            "explanation": "Saf dövri kəsr olduğundan məxrəcə 9 yazılır: 7/9."
      }
]
  },

  {
    id: 'lesson-math-7-u2-real',
    subjectId: 'riyaziyyat',
    grade: 7,
    unit: 'Bölmə 2: Həqiqi ədədlər və Kvadrat köklər',
    unitOrder: 2,
    title: 'İrrasional ədədlər və hesabi kvadrat kök anlayışı',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 2,
    summary: 'Sonsuz dövri olmayan onluq kəsrlər (irrasional ədədlər $\mathbb{I}$), həqiqi ədədlər $\mathbb{R}$ və hesabi kvadrat kök anlayışı.',
    theoryMarkdown: `
### 1. İrrasional Ədədlər
Dövri olmayan sonsuz onluq kəsr şəklində göstərilən ədədlərə **irrasional ədədlər** deyilir və $\mathbb{I}$ ilə işarə olunur.
Məsələn:
$$\sqrt{2} \approx 1.4142\dots, \quad \sqrt{3} \approx 1.7320\dots, \quad \pi \approx 3.14159\dots$$

### 2. Həqiqi Ədədlər Çoxluğu
Rasional və irrasional ədədlər birlikdə **həqiqi ədədlər çoxluğunu** ($\mathbb{R}$) əmələ gətirir:
$$\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$$

### 3. Hesabi Kvadrat Kök
Kvadratı $a$-ya bərabər olan qeyri-mənfi ədədə $a$ ədədinin **hesabi kvadrat kökü** deyilir:
$$\sqrt{a} = b \iff b \ge 0 \quad \text{və} \quad b^2 = a \quad (a \ge 0)$$
- Menfi ədədin kvadrat kökü həqiqi ədədlər çoxluğunda mövcud deyil: $\sqrt{-9}$ mənasızdır.
    `,
    keyFormulas: [
      {
            "id": "f-m7-u2-1",
            "name": "Hesabi Kvadrat Kök",
            "latex": "(\\sqrt{a})^2 = a \\quad (a \\ge 0)",
            "description": "Qeyri-mənfi ədədin kvadrat kökünün kvadratı ədədin özünə bərabərdir."
      }
],
    glossary: [
      {
            "term": "İrrasional ədəd",
            "definition": "Adi kəsr şəklində göstərilə bilməyən sonsuz dövri olmayan onluq kəsr."
      },
      {
            "term": "Hesabi kvadrat kök",
            "definition": "Kvadratı verilmiş ədədə bərabər olan mənfi olmayan ədəd."
      }
],
    solvedExamples: [
      {
            "id": "ex-m7-u2-1",
            "question": "$\\sqrt{49} + \\sqrt{100}$ cəmini hesablayın.",
            "solution": "$\\sqrt{49} = 7$ çünki $7^2 = 49$. $\\sqrt{100} = 10$ çünki $10^2 = 100$. Cəm: $7 + 10 = 17$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m7-u2-1",
            "question": "Aşağıdakılardan hansı irrasional ədəddir?",
            "options": [
                  {
                        "key": "A",
                        "text": "0.5"
                  },
                  {
                        "key": "B",
                        "text": "$\\sqrt{16}$"
                  },
                  {
                        "key": "C",
                        "text": "$\\sqrt{5}$"
                  },
                  {
                        "key": "D",
                        "text": "3/4"
                  }
            ],
            "correctKey": "C",
            "explanation": "Kök 5 dəqiq kökdən çıxmır və dövri olmayan sonsuz onluq kəsrdir, yəni irrasionaldır."
      }
]
  },

  {
    id: 'lesson-math-7-u3-monomials',
    subjectId: 'riyaziyyat',
    grade: 7,
    unit: 'Bölmə 3: Birhədlilər və Çoxhədlilər',
    unitOrder: 3,
    title: 'Natural üstlü qüvvətin xassələri və birhədlilər',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 1,
    summary: 'Qüvvətlərin vurulması, bölünməsi, qüvvətə yüksəldilməsi, birhədlinin standart şəkli və dərəcəsi.',
    theoryMarkdown: `
### 1. Natural Üstlü Qüvvətin Xassələri
Əsasları eyni olan qüvvətlər üçün:
- **Vurma:** $a^m \cdot a^n = a^{m+n}$
- **Bölmə:** $a^m : a^n = a^{m-n} \quad (a \neq 0, m \ge n)$
- **Qüvvətin qüvvətə yüksəldilməsi:** $(a^m)^n = a^{m \cdot n}$
- **Hasilin qüvvəti:** $(a \cdot b)^n = a^n \cdot b^n$
- **Nisbətin qüvvəti:** $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n} \quad (b \neq 0)$
- **Sıfırıncı qüvvət:** $a^0 = 1 \quad (a \neq 0)$

### 2. Birhədli və Standart Şəkli
Ədədi vuruqla dəyişənlərin qüvvətlərinin hasilinə **birhədli** deyilir: məsələn, $5a^2b^3$.
- Birinci yerdə yazılan ədədi vuruğa birhədlinin **əmsalı** deyilir.
- Dəyişənlərin üstlərinin cəminə birhədlinin **dərəcəsi (qüvvəti)** deyilir. Məsələn, $5a^2b^3$-ün dərəcəsi $2 + 3 = 5$-dir.
    `,
    keyFormulas: [
      {
            "id": "f-m7-u3-1",
            "name": "Qüvvətlərin Vurulması",
            "latex": "a^m \\cdot a^n = a^{m+n}",
            "description": "Əsaslar eyni olduqda üstlər toplanır."
      },
      {
            "id": "f-m7-u3-2",
            "name": "Qüvvətin Qüvvəti",
            "latex": "(a^m)^n = a^{m \\cdot n}",
            "description": "Qüvvəti qüvvətə yüksəldərkən üstlər vurulur."
      }
],
    glossary: [
      {
            "term": "Birhədli",
            "definition": "Ədəd, dəyişən və onların qüvvətlərinin hasilindən ibarət cəbri ifadə."
      },
      {
            "term": "Əmsal",
            "definition": "Standart şəkildə yazılmış birhədlinin ədədi vuruğu."
      }
],
    solvedExamples: [
      {
            "id": "ex-m7-u3-1",
            "question": "$(2x^2y)^3 \\cdot 3xy^2$ ifadəsini sadələşdirin.",
            "solution": "$(2x^2y)^3 = 8x^6y^3$. İndi vuraq: $8x^6y^3 \\cdot 3xy^2 = (8 \\cdot 3) \\cdot (x^6 \\cdot x) \\cdot (y^3 \\cdot y^2) = 24x^7y^5$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m7-u3-1",
            "question": "$a^4 \\cdot a^3 : a^2$ ifadəsinin qiyməti nəyə bərabərdir?",
            "options": [
                  {
                        "key": "A",
                        "text": "$a^5$"
                  },
                  {
                        "key": "B",
                        "text": "$a^6$"
                  },
                  {
                        "key": "C",
                        "text": "$a^9$"
                  },
                  {
                        "key": "D",
                        "text": "$a^7$"
                  }
            ],
            "correctKey": "A",
            "explanation": "Üstləri toplayıb çıxırıq: 4 + 3 - 2 = 5, cavab a^5."
      }
]
  },

  {
    id: 'lesson-math-7-u4-multiplication',
    subjectId: 'riyaziyyat',
    grade: 7,
    unit: 'Bölmə 4: Müxtəsər vurma düsturları',
    unitOrder: 4,
    title: 'Müxtəsər vurma düsturları və vuruqlara ayırma',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'İki ifadənin cəminin və fərqinin kvadratı, kvadratlar fərqi, kublar cəmi və fərqi düsturları.',
    theoryMarkdown: `
### 1. Əsas Müxtəsər Vurma Düsturları
- **Kvadratlar Fərqi:**
$$a^2 - b^2 = (a - b)(a + b)$$
- **İki İfadənin Cəminin Kvadratı:**
$$(a + b)^2 = a^2 + 2ab + b^2$$
- **İki İfadənin Fərqinin Kvadratı:**
$$(a - b)^2 = a^2 - 2ab + b^2$$

### 2. Kub Düsturları
- **Kublar Fərqi və Cəmi:**
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
- **Cəmin və Fərqin Kubu:**
$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$

### 3. Vuruqlara Ayırma Üsulları
- Ortaq vuruğun mötərizə xaricinə çıxarılması: $ma + mb = m(a + b)$
- Qruplaşdırma üsulu
- Müxtəsər vurma düsturlarının tətbiqi
    `,
    keyFormulas: [
      {
            "id": "f-m7-u4-1",
            "name": "Kvadratlar Fərqi",
            "latex": "a^2 - b^2 = (a - b)(a + b)",
            "description": "İki ədədin kvadratlarının fərqi onların fərqi ilə cəminin hasilinə bərabərdir."
      },
      {
            "id": "f-m7-u4-2",
            "name": "İkihədlinin Kvadratı",
            "latex": "(a \\pm b)^2 = a^2 \\pm 2ab + b^2",
            "description": "Birincinin kvadratı, iki misli hasili və ikincinin kvadratı."
      }
],
    glossary: [
      {
            "term": "Müxtəsər vurma",
            "definition": "Çoxhədlilərin xüsusi vurma hallarını asanlıqla hesablamağa imkan verən cəbri eyniliklər."
      },
      {
            "term": "Vuruqlara ayırma",
            "definition": "Çoxhədlinin iki və ya daha çox çoxhədlinin hasili şəklində göstərilməsi."
      }
],
    solvedExamples: [
      {
            "id": "ex-m7-u4-1",
            "question": "$49^2 - 39^2$ ifadəsini müxtəsər vurma düsturu ilə hesablayın.",
            "solution": "Kvadratlar fərqinə görə: $(49 - 39)(49 + 39) = 10 \\cdot 88 = 880$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m7-u4-1",
            "question": "$(x + 3)^2$ ifadəsinin açılışı hansıdır?",
            "options": [
                  {
                        "key": "A",
                        "text": "$x^2 + 9$"
                  },
                  {
                        "key": "B",
                        "text": "$x^2 + 3x + 9$"
                  },
                  {
                        "key": "C",
                        "text": "$x^2 + 6x + 9$"
                  },
                  {
                        "key": "D",
                        "text": "$x^2 + 6x + 6$"
                  }
            ],
            "correctKey": "C",
            "explanation": "(x+3)^2 = x^2 + 2*x*3 + 3^2 = x^2 + 6x + 9."
      }
]
  },

  {
    id: 'lesson-math-7-u5-linear-function',
    subjectId: 'riyaziyyat',
    grade: 7,
    unit: 'Bölmə 5: Xətti funksiya və onun qrafiki',
    unitOrder: 5,
    title: 'Xətti funksiya və onun qrafiki',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 2,
    summary: '$y = kx + b$ şəkilli funksiya, bucaq əmsalı $k$, sərbəst hədd $b$ və düz xətlərin qarşılıqlı vəziyyəti.',
    theoryMarkdown: `
### 1. Xətti Funksiyanın Tərifi
$y = kx + b$ ($k$ və $b$ həqiqi ədədlərdir) şəklində verilmiş funksiyaya **xətti funksiya** deyilir.
- $k$ — **bucaq əmsalı** adlanır ($k = \text{tg} \alpha$, düz xəttin $Ox$ oxunun müsbət istiqaməti ilə əmələ gətirdiyi bucağın tangensidir).
- $b$ — qrafikin ordinat oxunu kəsdiyi nöqtənin koordinatıdır: $(0; b)$.

### 2. Funksiyanın Xassələri
- Əgər $k > 0$ olarsa, funksiya **artandır** (bucağı itidir).
- Əgər $k < 0$ olarsa, funksiya **azalandır** (bucağı kordur).
- Əgər $b = 0$ olarsa, $y = kx$ düz mütənasiblik asılılığıdır və qrafik koordinat başlanğıcından $O(0; 0)$ keçir.

### 3. İki Düz Xəttin Qarşılıqlı Vəziyyəti
İki düz xətt $y = k_1x + b_1$ və $y = k_2x + b_2$:
- $k_1 = k_2$ və $b_1 \neq b_2$ olduqda **paraleldir**.
- $k_1 \neq k_2$ olduqda tək bir nöqtədə **kəsişir**.
- $k_1 \cdot k_2 = -1$ olduqda **perpendikulyardır**.
    `,
    keyFormulas: [
      {
            "id": "f-m7-u5-1",
            "name": "Xətti Funksiya",
            "latex": "y = kx + b",
            "description": "Qrafiki düz xətdir, k bucaq əmsalı, b şaquli sürüşmədir."
      },
      {
            "id": "f-m7-u5-2",
            "name": "Düz Xətlərin Paralellik Şərti",
            "latex": "k_1 = k_2 \\quad (b_1 \\neq b_2)",
            "description": "Bucaq əmsalları bərabər olan düz xətlər paraleldir."
      }
],
    glossary: [
      {
            "term": "Bucaq əmsalı (k)",
            "definition": "Xətti funksiyanın mailliyini və istiqamətini müəyyən edən əmsal."
      },
      {
            "term": "Artan funksiya",
            "definition": "Arqumentin böyük qiymətinə funksiyanın daha böyük qiyməti uyğun gələn funksiya."
      }
],
    solvedExamples: [
      {
            "id": "ex-m7-u5-1",
            "question": "$y = 2x - 4$ düz xəttinin koordinat oxları ilə kəsişmə nöqtələrini tapın.",
            "solution": "$Ox$ oxu ilə kəsişmə üçün $y = 0 \\implies 2x - 4 = 0 \\implies x = 2$, nöqtə: $(2; 0)$. $Oy$ oxu ilə kəsişmə üçün $x = 0 \\implies y = -4$, nöqtə: $(0; -4)$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m7-u5-1",
            "question": "$y = -3x + 5$ funksiyasında bucaq əmsalı $k$ neçəyə bərabərdir?",
            "options": [
                  {
                        "key": "A",
                        "text": "5"
                  },
                  {
                        "key": "B",
                        "text": "-3"
                  },
                  {
                        "key": "C",
                        "text": "3"
                  },
                  {
                        "key": "D",
                        "text": "-5"
                  }
            ],
            "correctKey": "B",
            "explanation": "y = kx + b formulunda x-in əmsalı k-dır, yəni k = -3."
      }
]
  },

  {
    id: 'lesson-math-7-u6-congruence',
    subjectId: 'riyaziyyat',
    grade: 7,
    unit: 'Bölmə 6: Həndəsənin ilkin anlayışları və Üçbucaqlar',
    unitOrder: 6,
    title: 'Üçbucaqların konqruyentlik əlamətləri və bərabəryanlı üçbucaq',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 2,
    summary: 'Üçbucaqların bərabərlik (konqruyentlik) əlamətləri (TBT, BTT, TTT), median, tənbölən və hündürlük xassələri.',
    theoryMarkdown: `
### 1. Üçbucaqların Konqruyentlik Əlamətləri
İki üçbucağın uyğun tərəfləri və uyğun bucaqları bərabərdirsə, bu üçbucaqlar **konqruyentdir** (bərabərdir): $\Delta ABC \cong \Delta A_1B_1C_1$.
- **I Əlamət (TBT — Tərəf-Bucaq-Tərəf):** Bir üçbucağın iki tərəfi və onlar arasındakı bucaq o biri üçbucağın uyğun iki tərəfi və onlar arasındakı bucağa bərabərdirsə.
- **II Əlamət (BTT — Bucaq-Tərəf-Bucaq):** Bir üçbucağın bir tərəfi və ona bitişik iki bucağı o birinin uyğun tərəfi və bucaqlarına bərabərdirsə.
- **III Əlamət (TTT — Tərəf-Tərəf-Tərəf):** Bir üçbucağın üç tərəfi o biri üçbucağın uyğun üç tərəfinə bərabərdirsə.

### 2. Bərabəryanlı Üçbucağın Əsas Xassələri
- Oturacağına bitişik bucaqları bərabərdir: $\angle A = \angle C$.
- Təpədən oturacağa çəkilmiş median həm tənbölən, həm də hündürlükdür:
$$m_b = l_b = h_b$$
    `,
    keyFormulas: [
      {
            "id": "f-m7-u6-1",
            "name": "Bərabəryanlı Üçbucaqda Median-Hündürlük",
            "latex": "h_b = m_b = l_b",
            "description": "Təpədən oturacağa çəkilmiş hündürlük, median və tənbölən üst-üstə düşür."
      }
],
    glossary: [
      {
            "term": "Konqruyentlik",
            "definition": "Həndəsi fiqurların üst-üstə qoyulduqda tam bərabər olması."
      },
      {
            "term": "Median",
            "definition": "Üçbucağın təpəsini qarşı tərəfin ortası ilə birləşdirən parça."
      },
      {
            "term": "Tənbölən",
            "definition": "Bucağı iki bərabər hissəyə bölən şüa."
      }
],
    solvedExamples: [
      {
            "id": "ex-m7-u6-1",
            "question": "Bərabəryanlı üçbucağın təpə bucağı $50^\\circ$-dir. Oturacağa bitişik bucaqları tapın.",
            "solution": "Oturacağa bitişik bucaqlar bərabərdir. Daxili bucaqların cəmi $180^\\circ$ olduğundan: $2\\alpha = 180^\\circ - 50^\\circ = 130^\\circ \\implies \\alpha = 65^\\circ$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m7-u6-1",
            "question": "Bərabəryanlı üçbucağın perimetri 20 sm, yan tərəfi 7 sm olarsa, oturacağı neçə sm-dir?",
            "options": [
                  {
                        "key": "A",
                        "text": "6 sm"
                  },
                  {
                        "key": "B",
                        "text": "7 sm"
                  },
                  {
                        "key": "C",
                        "text": "8 sm"
                  },
                  {
                        "key": "D",
                        "text": "13 sm"
                  }
            ],
            "correctKey": "A",
            "explanation": "Yan tərəflər 7 sm və 7 sm-dir. Cəm = 14 sm. Oturacaq = 20 - 14 = 6 sm."
      }
]
  },

  {
    id: 'lesson-math-7-u7-system-equations',
    subjectId: 'riyaziyyat',
    grade: 7,
    unit: 'Bölmə 7: İkidəyişənli xətti tənliklər sistemi',
    unitOrder: 7,
    title: 'İkidəyişənli xətti tənliklər sisteminin həlli üsulları',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 2,
    summary: 'Xətti tənliklər sistemi, əvəzetmə üsulu, cəbri toplama üsulu və sistemin həndəsi mənası.',
    theoryMarkdown: `
### 1. İkidəyişənli Xətti Tənliklər Sistemi
Standart şəkli:
$$\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$$
Sistemin həlli hər iki tənliyi eyni zamanda doğru bərabərliyə çevirən $(x; y)$ ədədlər cütüdür.

### 2. Həll Üsulları
- **Əvəzetmə üsulu:** Tənliklərin birindən bir dəyişən digəri ilə ifadə olunur və digər tənlikdə yerinə yazılır.
- **Cəbri toplama üsulu:** Dəyişənlərdən birinin əmsalları əks ədədlərə gətirilir və tənliklər tərəf-tərəfə toplanaraq birdəyişənli tənlik alınır.

### 3. Həllərin Sayı
- $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ olarsa, sistemin **yeganə həlli** var (düz xətlər kəsişir).
- $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$ olarsa, sistemin **həlli yoxdur** (düz xətlər paraleldir).
- $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$ olarsa, sistemin **sonsuz sayda həlli** var (düz xətlər üst-üstə düşür).
    `,
    keyFormulas: [
      {
            "id": "f-m7-u7-1",
            "name": "Sistemin Yeganə Həll Şərti",
            "latex": "\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}",
            "description": "Əmsallar qeyri-mütənasib olduqda sistemin yeganə həlli mövcuddur."
      }
],
    glossary: [
      {
            "term": "Tənliklər sistemi",
            "definition": "Bir neçə naməlum dəyişəni olan və eyni zamanda ödənməli olan bərabərliklər qrupu."
      },
      {
            "term": "Cəbri toplama",
            "definition": "Tənlikləri tərəf-tərəfə toplayaraq naməlumlardan birini yox etmə metodu."
      }
],
    solvedExamples: [
      {
            "id": "ex-m7-u7-1",
            "question": "$\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$ sistemini həll edin.",
            "solution": "Tərəf-tərəfə toplasaq: $(x + x) + (y - y) = 10 + 4 \\implies 2x = 14 \\implies x = 7$. Buradan: $y = 10 - 7 = 3$. Cavab: $(7; 3)$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m7-u7-1",
            "question": "$\\begin{cases} 2x + y = 7 \\\\ y = 1 \\end{cases}$ sistemindən $x$-i tapın.",
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
                        "text": "4"
                  },
                  {
                        "key": "D",
                        "text": "5"
                  }
            ],
            "correctKey": "B",
            "explanation": "2x + 1 = 7 -> 2x = 6 -> x = 3."
      }
]
  },

  {
    id: 'lesson-math-8-u1-roots',
    subjectId: 'riyaziyyat',
    grade: 8,
    unit: 'Bölmə 1: Kvadrat köklər və Həqiqi ədədlər',
    unitOrder: 1,
    title: 'Hesabi kvadrat kökün xassələri və kökaltı ifadələr',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 2,
    summary: 'Kvadrat kökün əsas xassələri, vuruğun kök altına salınması və kökdən çıxarılması, məxrəcin irrasionallıqdan azad edilməsi.',
    theoryMarkdown: `
### 1. Kvadrat Kökün Əsas Xassələri
$a \ge 0$ və $b \ge 0$ olduqda:
- **Hasilin kökü:** $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$
- **Nisbətin kökü:** $\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} \quad (b > 0)$
- **Dəyişənin kvadratının kökü:** $\sqrt{a^2} = |a|$

### 2. Vuruğun Kök İşarəsi Xaricinə Çıxarılması və Daxil Edilməsi
- Kökdən çıxarma: $\sqrt{a^2 b} = |a|\sqrt{b} = a\sqrt{b} \quad (a \ge 0)$
- Kök altına salma: $a\sqrt{b} = \sqrt{a^2 b} \quad (a \ge 0)$

### 3. Məxrəcin İrrasionallıqdan Azad Edilməsi
Kəsrin məxrəcini qoşma ifadəyə vuraraq kökdən azad edirlər:
$$\frac{1}{\sqrt{a} - \sqrt{b}} = \frac{\sqrt{a} + \sqrt{b}}{(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b})} = \frac{\sqrt{a} + \sqrt{b}}{a - b}$$
    `,
    keyFormulas: [
      {
            "id": "f-m8-u1-1",
            "name": "Hasilin Kvadrat Kökü",
            "latex": "\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b} \\quad (a, b \\ge 0)",
            "description": "Vuruqların hasillərinin kökü onların köklərinin hasilinə bərabərdir."
      },
      {
            "id": "f-m8-u1-2",
            "name": "Kök və Modul Əlaqəsi",
            "latex": "\\sqrt{a^2} = |a|",
            "description": "İxtiyari ədədin kvadratının kökü onun moduluna bərabərdir."
      }
],
    glossary: [
      {
            "term": "Qoşma ifadə",
            "definition": "(√a - √b) üçün (√a + √b) ifadəsi, hasili rasional ədəd verən ifadə cütü."
      },
      {
            "term": "İrrasionallıq",
            "definition": "Kökdən tam çıxmayan ifadələrin varlığı."
      }
],
    solvedExamples: [
      {
            "id": "ex-m8-u1-1",
            "question": "$\\sqrt{50}$ ifadəsindən vuruğu kök xaricinə çıxarın.",
            "solution": "$\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m8-u1-1",
            "question": "$\\sqrt{12} \\cdot \\sqrt{3}$ hasilini hesablayın.",
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
                        "text": "36"
                  },
                  {
                        "key": "D",
                        "text": "$\\sqrt{15}$"
                  }
            ],
            "correctKey": "A",
            "explanation": "√12 * √3 = √(12 * 3) = √36 = 6."
      }
]
  },

  {
    id: 'lesson-math-8-u2-quadrilaterals',
    subjectId: 'riyaziyyat',
    grade: 8,
    unit: 'Bölmə 2: Dördbucaqlılar',
    unitOrder: 2,
    title: 'Paraleleqram, romb, düzbucaqlı və trapesiya',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Qabarıq dördbucaqlılar, daxili bucaqların cəmi (360°), paraleleqramın xassələri və əlamətləri, trapesiyanın orta xətti.',
    theoryMarkdown: `
### 1. Paraleleqram və Onun Xassələri
Qarşı tərəfləri cüt-cüt paralel olan dördbucaqlıya **paraleleqram** deyilir.
- Qarşı tərəfləri və qarşı bucaqları bərabərdir: $AB = CD$, $\angle A = \angle C$.
- Bir tərəfə bitişik bucaqların cəmi $180^\circ$-dir: $\angle A + \angle B = 180^\circ$.
- Diaqonalları kəsişmə nöqtəsində yarıya bölünür.
- Diaqonallarla tərəflər arasında münasibət: $d_1^2 + d_2^2 = 2(a^2 + b^2)$.

### 2. Romb və Düzbucaqlı
- **Düzbucaqlı:** Bütün bucaqları düz bucaq ($90^\circ$) olan paraleleqramdır. Diaqonalları bərabərdir: $d_1 = d_2$.
- **Romb:** Bütün tərəfləri bərabər olan paraleleqramdır. Diaqonalları perpendikulyardır ($d_1 \perp d_2$) və tənböləndir.

### 3. Trapesiyanın Orta Xətti
Yalnız iki qarşı tərəfi paralel olan dördbucaqlıya **trapesiyanın** deyilir.
- Yan tərəflərin ortasını birləşdirən parçaya **orta xətt** deyilir.
- Orta xətt oturacaqlara paralel olub, onların cəminin yarısına bərabərdir:
$$l = \frac{a + b}{2}$$
    `,
    keyFormulas: [
      {
            "id": "f-m8-u2-1",
            "name": "Trapesiyanın Orta Xətti",
            "latex": "l = \\frac{a + b}{2}",
            "description": "Orta xətt oturacaqların ədədi ortasına bərabərdir."
      },
      {
            "id": "f-m8-u2-2",
            "name": "Paraleleqramın Diaqonalları",
            "latex": "d_1^2 + d_2^2 = 2(a^2 + b^2)",
            "description": "Diaqonalların kvadratları cəmi tərəflərin kvadratları cəminin iki mislidir."
      }
],
    glossary: [
      {
            "term": "Paraleleqram",
            "definition": "Qarşı tərəfləri paralel olan qabarıq dördbucaqlı."
      },
      {
            "term": "Trapesiyanın orta xətti",
            "definition": "Yan tərəflərin orta nöqtələrini birləşdirən xətt parçası."
      }
],
    solvedExamples: [
      {
            "id": "ex-m8-u2-1",
            "question": "Trapesiyanın oturacaqları 8 sm və 14 sm-dir. Onun orta xəttinin uzunluğunu tapın.",
            "solution": "$l = \\frac{a + b}{2} = \\frac{8 + 14}{2} = \\frac{22}{2} = 11 \\text{ sm}$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m8-u2-1",
            "question": "Paraleleqramın bucaqlarından biri $60^\\circ$ olarsa, onunla qonşu olan bucağı tapın.",
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
            "explanation": "Bir tərəfə bitişik bucaqların cəmi 180°-dir: 180° - 60° = 120°."
      }
]
  },

  {
    id: 'lesson-math-8-u3-rational-fractions',
    subjectId: 'riyaziyyat',
    grade: 8,
    unit: 'Bölmə 3: Rasional kəsrlər',
    unitOrder: 3,
    title: 'Rasional kəsrlər və onlar üzərində əməllər',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 2,
    summary: 'Cəbri kəsrlər, kəsrin mənası olan qiymətlər çoxluğu, kəsrlərin ixtisarı, toplanması və vurulması.',
    theoryMarkdown: `
### 1. Rasional Kəsr Nədir?
Surət və məxrəci çoxhədli olan ifadəyə **rasional kəsr** deyilir:
$$\frac{P(x)}{Q(x)} \quad (Q(x) \neq 0)$$
Məxrəci sıfıra çevirən qiymətlərdə kəsrin mənası yoxdur.

### 2. Kəsrlərin İxtisarı
Kəsri ixtisar etmək üçün surət və məxrəc vuruqlara ayrılır və ortaq vuruqlar silinir:
$$\frac{x^2 - 4}{x + 2} = \frac{(x - 2)(x + 2)}{x + 2} = x - 2 \quad (x \neq -2)$$

### 3. Kəsrlərin Toplanması və Çıxılması
Əvvəlcə məxrəclər vuruqlara ayrılır, ƏKOB tapılaraq ortaq məxrəcə gətirilir:
$$\frac{A}{C} \pm \frac{B}{D} = \frac{A \cdot D \pm B \cdot C}{C \cdot D}$$
    `,
    keyFormulas: [
      {
            "id": "f-m8-u3-1",
            "name": "Kəsrlərin Vurulması",
            "latex": "\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{A \\cdot C}{B \\cdot D}",
            "description": "Surət surətə, məxrəc məxrəcə vurulur."
      },
      {
            "id": "f-m8-u3-2",
            "name": "Kəsrlərin Bölünməsi",
            "latex": "\\frac{A}{B} : \\frac{C}{D} = \\frac{A \\cdot D}{B \\cdot C}",
            "description": "Bölünən kəsr bölənin tərsinə vurulur."
      }
],
    glossary: [
      {
            "term": "Rasional kəsr",
            "definition": "Məxrəcində dəyişən olan cəbri kəsr."
      },
      {
            "term": "Mümkün qiymətlər çoxluğu",
            "definition": "Kəsrin məxrəcini sıfır etməyən dəyişənin qiymətləri."
      }
],
    solvedExamples: [
      {
            "id": "ex-m8-u3-1",
            "question": "$\\frac{x^2 - 9}{2x - 6}$ kəsrini ixtisar edin.",
            "solution": "Surəti müxtəsər vurma ilə açaq: $(x - 3)(x + 3)$. Məxrəcdən 2 çıxaraq: $2(x - 3)$. Ortaq $(x-3)$-ü ixtisar etsək: $\\frac{x + 3}{2}$ qalır."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m8-u3-1",
            "question": "$\\frac{5}{x - 4}$ kəsrinin hansı qiymətdə mənası yoxdur?",
            "options": [
                  {
                        "key": "A",
                        "text": "x = 0"
                  },
                  {
                        "key": "B",
                        "text": "x = -4"
                  },
                  {
                        "key": "C",
                        "text": "x = 4"
                  },
                  {
                        "key": "D",
                        "text": "x = 5"
                  }
            ],
            "correctKey": "C",
            "explanation": "Məxrəc sıfır ola bilməz: x - 4 = 0 -> x = 4 qiymətində kəsrin mənası yoxdur."
      }
]
  },

  {
    id: 'lesson-math-8-u4-quadratic',
    subjectId: 'riyaziyyat',
    grade: 8,
    unit: 'Bölmə 4: Kvadrat tənliklər',
    unitOrder: 4,
    title: 'Kvadrat tənliyin kök düsturu və Viyet teoremi',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Kvadrat tənlik $ax^2 + bx + c = 0$, diskriminant $D$, köklər düsturu və köklərlə əmsallar arasındakı əlaqə (Viyet teoremi).',
    theoryMarkdown: `
### 1. Kvadrat Tənliyin Tərifi
$a \neq 0$ olduqda $ax^2 + bx + c = 0$ şəklində olan tənliyə **kvadrat tənlik** deyilir.
- $a$ — birinci əmsal, $b$ — ikinci əmsal, $c$ — sərbəst hədd.

### 2. Diskriminant və Köklərin Sayı
Tənliyin diskriminantı:
$$D = b^2 - 4ac$$
- **$D > 0$ olduqda:** Tənliyin iki müxtəlif həqiqi kökü var:
$$x_{1, 2} = \frac{-b \pm \sqrt{D}}{2a}$$
- **$D = 0$ olduqda:** Tənliyin iki bərabər kökü var (tək kök):
$$x_1 = x_2 = -\frac{b}{2a}$$
- **$D < 0$ olduqda:** Tənliyin həqiqi kökü yoxdur.

### 3. Viyet Teoremi
Çevrilmiş kvadrat tənliyin ($x^2 + px + q = 0$) kökləri üçün:
$$\begin{cases} x_1 + x_2 = -p \\ x_1 \cdot x_2 = q \end{cases}$$
Ümumi tənlikdə ($ax^2 + bx + c = 0$): $x_1 + x_2 = -\frac{b}{a}$, $x_1 \cdot x_2 = \frac{c}{a}$.
    `,
    keyFormulas: [
      {
            "id": "f-m8-u4-1",
            "name": "Diskriminant Düsturu",
            "latex": "D = b^2 - 4ac",
            "description": "Köklərin sayını və xarakterini müəyyən edir."
      },
      {
            "id": "f-m8-u4-2",
            "name": "Viyet Teoremi",
            "latex": "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}",
            "description": "Kvadrat tənliyin köklərinin cəmi və hasili əmsallarla ifadə olunur."
      }
],
    glossary: [
      {
            "term": "Diskriminant",
            "definition": "Kvadrat tənliyin köklərinin varlığını və sayını təyin edən b^2 - 4ac ifadəsi."
      },
      {
            "term": "Viyet teoremi",
            "definition": "Kvadrat tənliyin kökləri ilə əmsalları arasındakı birbaşa asılılıq qaydası."
      }
],
    solvedExamples: [
      {
            "id": "ex-m8-u4-1",
            "question": "$x^2 - 5x + 6 = 0$ tənliyini həll edin.",
            "solution": "Viyet teoreminə görə: $x_1 + x_2 = 5$, $x_1 \\cdot x_2 = 6$. Bu şərti ödəyən ədədlər $2$ və $3$-dür. Köklər: $x_1 = 2, x_2 = 3$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m8-u4-1",
            "question": "$x^2 - 7x + 12 = 0$ tənliyinin kökləri hasilini tapın.",
            "options": [
                  {
                        "key": "A",
                        "text": "7"
                  },
                  {
                        "key": "B",
                        "text": "-7"
                  },
                  {
                        "key": "C",
                        "text": "12"
                  },
                  {
                        "key": "D",
                        "text": "-12"
                  }
            ],
            "correctKey": "C",
            "explanation": "Viyet teoreminə görə çevrilmiş kvadrat tənlikdə x1 * x2 = q = 12."
      }
]
  },

  {
    id: 'lesson-math-8-u5-similarity',
    subjectId: 'riyaziyyat',
    grade: 8,
    unit: 'Bölmə 5: Həndəsi çevrilmələr və Oxşarlıq',
    unitOrder: 5,
    title: 'Fiqurların oxşarlığı və üçbucaqların oxşarlıq əlamətləri',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 2,
    summary: 'Mütənasib parçalar, Fales teoremi, üçbucaqların oxşarlıq əlamətləri (BB, TBT, TTT) və sahələrin nisbəti.',
    theoryMarkdown: `
### 1. Oxşar Fiqurlar və Fales Teoremi
- **Fales teoremi:** Bucağın tərəflərini kəsən paralel düz xətlər onun tərəfləri üzərində mütənasib parçalar ayırır:
$$\frac{AB}{BC} = \frac{A_1B_1}{B_1C_1}$$
- Uyğun bucaqları bərabər və uyğun tərəfləri mütənasib olan fiqurlar **oxşardır**: $\Delta ABC \sim \Delta A_1B_1C_1$.
$$\frac{AB}{A_1B_1} = \frac{BC}{B_1C_1} = \frac{AC}{A_1C_1} = k \quad (k - \text{oxşarlıq əmsalı})$$

### 2. Üçbucaqların Oxşarlıq Əlamətləri
- **I Əlamət (BB — İki bucağa görə):** Bir üçbucağın iki bucağı o birinin iki bucağına bərabərdirsə.
- **II Əlamət (TBT — İki tərəf və bucaq):** İki tərəf mütənasib və onlar arasındakı bucaqlar bərabərdirsə.
- **III Əlamət (TTT — Üç tərəf):** Üç tərəfin üçü də mütənasibdirsə.

### 3. Perimetrlər və Sahələr Nisbəti
- Oxşar fiqurların perimetrlərinin nisbəti: $\frac{P_1}{P_2} = k$
- Oxşar fiqurların sahələrinin nisbəti oxşarlıq əmsalının kvadratına bərabərdir:
$$\frac{S_1}{S_2} = k^2$$
    `,
    keyFormulas: [
      {
            "id": "f-m8-u5-1",
            "name": "Oxşar Üçbucaqların Sahələr Nisbəti",
            "latex": "\\frac{S_1}{S_2} = k^2",
            "description": "Sahələrin nisbəti oxşarlıq əmsalının kvadratına bərabərdir."
      }
],
    glossary: [
      {
            "term": "Oxşarlıq əmsalı (k)",
            "definition": "Oxşar fiqurların uyğun xətti ölçülərinin nisbəti."
      },
      {
            "term": "Fales teoremi",
            "definition": "Bucaq tərəflərini kəsən paralel düz xətlərin mütənasibliyi haqqında həndəsi teorem."
      }
],
    solvedExamples: [
      {
            "id": "ex-m8-u5-1",
            "question": "İki oxşar üçbucağın oxşarlıq əmsalı $k = 3$-dür. Birinci üçbucağın sahəsi $45 \\text{ sm}^2$ olarsa, ikinci üçbucağın sahəsini tapın.",
            "solution": "$\\frac{S_1}{S_2} = k^2 = 3^2 = 9 \\implies S_2 = \\frac{45}{9} = 5 \\text{ sm}^2$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m8-u5-1",
            "question": "Oxşarlıq əmsalı $k = 2$ olan iki üçbucağın sahələri nisbəti nəyə bərabərdir?",
            "options": [
                  {
                        "key": "A",
                        "text": "2"
                  },
                  {
                        "key": "B",
                        "text": "4"
                  },
                  {
                        "key": "C",
                        "text": "8"
                  },
                  {
                        "key": "D",
                        "text": "16"
                  }
            ],
            "correctKey": "B",
            "explanation": "Sahələr nisbəti k^2 = 2^2 = 4-dür."
      }
]
  },

  {
    id: 'lesson-math-8-u6-pythagoras',
    subjectId: 'riyaziyyat',
    grade: 8,
    unit: 'Bölmə 6: Pifaqor teoremi və Fiqurların sahəsi',
    unitOrder: 6,
    title: 'Pifaqor teoremi və çoxbucaqlıların sahə düsturları',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Pifaqor teoremi $a^2 + b^2 = c^2$, düzbucaqlı üçbucaqda hündürlük və proyeksiyalar, paraleleqram, trapesiya və üçbucağın sahəsi.',
    theoryMarkdown: `
### 1. Pifaqor Teoremi
Düzbucaqlı üçbucaqda hipotenuzun kvadratı katetlərin kvadratları cəminə bərabərdir:
$$c^2 = a^2 + b^2 \implies c = \sqrt{a^2 + b^2}$$
Burada $a$ və $b$ katetlər, $c$ isə hipotenuzdur.
- Məşhur Pifaqor üçlükləri: $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$.

### 2. Düzbucaqlı Üçbucaqda Metrik Münasibətlər
Hipotenuza çəkilmiş $h_c$ hündürlüyü üçün:
$$h_c^2 = a_c \cdot b_c, \qquad a^2 = c \cdot a_c, \qquad b^2 = c \cdot b_c$$

### 3. Fiqurların Sahə Düsturları
- **Üçbucaq:** $S = \frac{1}{2} a \cdot h_a$
- **Paraleleqram:** $S = a \cdot h_a = a \cdot b \cdot \sin \alpha$
- **Romb:** $S = a \cdot h = \frac{1}{2} d_1 d_2$
- **Trapesiyanın sahəsi:** $S = \frac{a + b}{2} \cdot h$
    `,
    keyFormulas: [
      {
            "id": "f-m8-u6-1",
            "name": "Pifaqor Teoremi",
            "latex": "a^2 + b^2 = c^2",
            "description": "Katetlərin kvadratları cəmi hipotenuzun kvadratına bərabərdir."
      },
      {
            "id": "f-m8-u6-2",
            "name": "Trapesiyanın Sahəsi",
            "latex": "S = \\frac{a + b}{2} \\cdot h",
            "description": "Orta xətlə hündürlüyün hasilinə bərabərdir."
      }
],
    glossary: [
      {
            "term": "Hipotenuz",
            "definition": "Düzbucaqlı üçbucaqda düz bucağın qarşısındakı ən böyük tərəf."
      },
      {
            "term": "Katet",
            "definition": "Düz bucağı əmələ gətirən iki tərəfdən biri."
      }
],
    solvedExamples: [
      {
            "id": "ex-m8-u6-1",
            "question": "Katetləri 6 sm və 8 sm olan düzbucaqlı üçbucağın hipotenuzunu tapın.",
            "solution": "$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ sm}$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m8-u6-1",
            "question": "Oturacaqları 4 sm və 8 sm, hündürlüyü 5 sm olan trapesiyanın sahəsi neçə $\\text{sm}^2$-dir?",
            "options": [
                  {
                        "key": "A",
                        "text": "20"
                  },
                  {
                        "key": "B",
                        "text": "30"
                  },
                  {
                        "key": "C",
                        "text": "60"
                  },
                  {
                        "key": "D",
                        "text": "40"
                  }
            ],
            "correctKey": "B",
            "explanation": "S = (4 + 8) / 2 * 5 = 12 / 2 * 5 = 6 * 5 = 30 sm^2."
      }
]
  },

  {
    id: 'lesson-math-8-u7-inequalities',
    subjectId: 'riyaziyyat',
    grade: 8,
    unit: 'Bölmə 7: Bərabərsizliklər',
    unitOrder: 7,
    title: 'Birdəyişənli xətti bərabərsizliklər və bərabərsizliklər sistemi',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 2,
    summary: 'Ədədi bərabərsizliklərin xassələri, ədədi aralıqlar, mənfi ədədə vurulduqda işarənin dəyişməsi və bərabərsizliklər sistemi.',
    theoryMarkdown: `
### 1. Bərabərsizliklərin Əsas Xassələri
- Əgər $a > b$ və $b > c$ olarsa, onda $a > c$.
- Bərabərsizliyin hər iki tərəfinə eyni bir ədədi əlavə etdikdə və ya çıxdıqda bərabərsizliyin işarəsi dəyişməz.
- Bərabərsizliyin hər iki tərəfini **müsbət ədədə** vurduqda və ya böldükdə işarə dəyişməz:
$$a > b \quad \text{və} \quad c > 0 \implies ac > bc$$
- **Ən Vacib Qayda:** Bərabərsizliyin hər iki tərəfini **mənfi ədədə** vurduqda və ya böldükdə bərabərsizliyin işarəsi **əksinə dəyişir**:
$$a > b \quad \text{və} \quad c < 0 \implies ac < bc$$

### 2. Xətti Bərabərsizliklər Sistemi
Sistemə daxil olan hər iki bərabərsizlik ayrı-ayrılıqda həll olunur və həll çoxluqlarının **kəsişməsi** ($A \cap B$) tapılır.
    `,
    keyFormulas: [
      {
            "id": "f-m8-u7-1",
            "name": "Mənfiyə Vurma Qaydası",
            "latex": "-x < a \\implies x > -a",
            "description": "Mənfi birə böldükdə işarə istiqamətini dəyişir."
      }
],
    glossary: [
      {
            "term": "Ədədi aralıq",
            "definition": "Koordinat düz xətti üzərində iki nöqtə arasındakı nöqtələr çoxluğu (məsələn: [a; b], (a; b))."
      },
      {
            "term": "Qeyri-ciddi bərabərsizlik",
            "definition": "Bərabərlik halı da mümkün olan bərabərsizlik (≥ və ya ≤)."
      }
],
    solvedExamples: [
      {
            "id": "ex-m8-u7-1",
            "question": "$-3x + 9 \\le 0$ bərabərsizliyini həll edin.",
            "solution": "$-3x \\le -9$. Hər iki tərəfi $-3$-ə böldüyümüz üçün işarə dəyişir: $x \\ge \\frac{-9}{-3} \\implies x \\ge 3$. Cavab: $[3; +\\infty)$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m8-u7-1",
            "question": "$-2x > 8$ bərabərsizliyinin həlli hansıdır?",
            "options": [
                  {
                        "key": "A",
                        "text": "$x > -4$"
                  },
                  {
                        "key": "B",
                        "text": "$x < -4$"
                  },
                  {
                        "key": "C",
                        "text": "$x > 4$"
                  },
                  {
                        "key": "D",
                        "text": "$x < 4$"
                  }
            ],
            "correctKey": "B",
            "explanation": "Mənfi 2-yə böldükdə bərabərsizlik işarəsi dəyişir: x < -4."
      }
]
  },

  {
    id: 'lesson-math-9-u1-quadratic-function',
    subjectId: 'riyaziyyat',
    grade: 9,
    unit: 'Bölmə 1: Funksiyalar və Qrafiklər',
    unitOrder: 1,
    title: 'Kvadratik funksiya və onun qrafiki (Parabola)',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Kvadratik funksiya $y = ax^2 + bx + c$, təpə nöqtəsi $(m; n)$, simmetriya oxu, parabolanın qollarının istiqaməti və ən böyük/ən kiçik qiyməti.',
    theoryMarkdown: `
### 1. Kvadratik Funksiyanın Tərifi
$a \neq 0$ olduqda $y = ax^2 + bx + c$ şəkilli funksiyaya **kvadratik funksiya** deyilir. Qrafiki **parabola** adlanır.
- $a > 0$ olduqda parabolanın qolları **yuxarı** yönəlir, funksiyanın ən kiçik qiyməti var.
- $a < 0$ olduqda parabolanın qolları **aşağı** yönəlir, funksiyanın ən böyük qiyməti var.

### 2. Parabolanın Təpə Nöqtəsi
Parabolanın təpə nöqtəsi $M(m; n)$:
$$m = -\frac{b}{2a}, \qquad n = -\frac{D}{4a} = c - \frac{b^2}{4a} = y(m)$$
- Simmetriya oxunun tənliyi: $x = m = -\frac{b}{2a}$
- Parabolanın tam kvadrat ayrılmış şəkli: $y = a(x - m)^2 + n$
    `,
    keyFormulas: [
      {
            "id": "f-m9-u1-1",
            "name": "Parabolanın Təpə Nöqtəsinin Absisi",
            "latex": "m = -\\frac{b}{2a}",
            "description": "Simmetriya oxunun tənliyi və təpə nöqtəsinin x koordinatıdır."
      },
      {
            "id": "f-m9-u1-2",
            "name": "Təpə Nöqtəsinin Ordinatı",
            "latex": "n = \\frac{4ac - b^2}{4a}",
            "description": "Funksiyanın minimum (a>0) və ya maksimum (a<0) qiymətidir."
      }
],
    glossary: [
      {
            "term": "Parabola",
            "definition": "İkinci dərəcəli əyri xətt, kvadratik funksiyanın qrafiki."
      },
      {
            "term": "Simmetriya oxu",
            "definition": "Parabolanı iki simmetrik hissəyə ayıran şaquli x = m düz xətti."
      }
],
    solvedExamples: [
      {
            "id": "ex-m9-u1-1",
            "question": "$y = x^2 - 4x + 3$ parabolanın təpə nöqtəsinin koordinatlarını tapın.",
            "solution": "$a = 1, b = -4, c = 3$. $m = -\\frac{-4}{2 \\cdot 1} = 2$. $n = y(2) = 2^2 - 4(2) + 3 = 4 - 8 + 3 = -1$. Təpə nöqtəsi: $M(2; -1)$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m9-u1-1",
            "question": "$y = -2x^2 + 8x - 1$ parabolanın qolları hansı istiqamətə yönəlib?",
            "options": [
                  {
                        "key": "A",
                        "text": "Yuxarı"
                  },
                  {
                        "key": "B",
                        "text": "Aşağı"
                  },
                  {
                        "key": "C",
                        "text": "Sağa"
                  },
                  {
                        "key": "D",
                        "text": "Sola"
                  }
            ],
            "correctKey": "B",
            "explanation": "a = -2 < 0 olduğu üçün parabolanın qolları aşağı yönəlir."
      }
]
  },

  {
    id: 'lesson-math-9-u2-circles',
    subjectId: 'riyaziyyat',
    grade: 9,
    unit: 'Bölmə 2: Çevrə və Dairə',
    unitOrder: 2,
    title: 'Çevrədə bucaqlar, vətərlər və kəsənlər',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Mərkəzi və daxilə çəkilmiş bucaqlar, çevrəyə toxunan və kəsən xassələri, kəsişən vətərlər teoremi.',
    theoryMarkdown: `
### 1. Mərkəzi və Daxilə Çəkilmiş Bucaqlar
- **Mərkəzi bucaq:** Təpəsi çevrə mərkəzində olan bucaqdır və söykəndiyi qövsün dərəcə ölçüsünə bərabərdir: $\angle AOB = \cup AB$.
- **Daxilə çəkilmiş bucaq:** Təpəsi çevrə üzərində olub tərəfləri vətərlər olan bucaqdır və söykəndiyi qövsün yarısına bərabərdir:
$$\angle ACB = \frac{1}{2} \cup AB$$
- Eyni qövsə söykənən daxilə çəkilmiş bucaqlar bərabərdir.
- Diametrə söykənən daxilə çəkilmiş bucaq düz bucaqdır ($90^\circ$).

### 2. Kəsişən Vətərlərin Xassəsi
Çevrə daxilində kəsişən iki $AB$ və $CD$ vətəri üçün parçaların hasili bərabərdir:
$$AP \cdot PB = CP \cdot PD$$

### 3. Toxunan və Kəsən Teoremi
Eyni nöqtədən çəkilmiş $AK$ toxunanı və $AB$ kəsəni üçün:
$$AK^2 = AB \cdot AC$$
    `,
    keyFormulas: [
      {
            "id": "f-m9-u2-1",
            "name": "Daxilə Çəkilmiş Bucaq",
            "latex": "\\angle ACB = \\frac{1}{2} \\cup AB",
            "description": "Daxilə çəkilmiş bucaq söykəndiyi qövsün yarısına bərabərdir."
      },
      {
            "id": "f-m9-u2-2",
            "name": "Toxunan və Kəsən Əlaqəsi",
            "latex": "AK^2 = AB \\cdot AC",
            "description": "Toxunanın kvadratı kəsənlə onun xarici hissəsinin hasilinə bərabərdir."
      }
],
    glossary: [
      {
            "term": "Vətər",
            "definition": "Çevrə üzərindəki iki ixtiyari nöqtəni birləşdirən düz xətt parçası."
      },
      {
            "term": "Toxunan",
            "definition": "Çevrə ilə yalnız bir ortaq nöqtəsi olan düz xətt."
      }
],
    solvedExamples: [
      {
            "id": "ex-m9-u2-1",
            "question": "Çevrədə daxilə çəkilmiş bucaq $35^\\circ$-dir. Onun söykəndiyi qövsün dərəcə ölçüsünü tapın.",
            "solution": "Daxilə çəkilmiş bucaq qövsün yarısına bərabər olduğundan: $\\cup AB = 2 \\cdot 35^\\circ = 70^\\circ$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m9-u2-1",
            "question": "Diametrə söykənən daxilə çəkilmiş bucaq neçə dərəcədir?",
            "options": [
                  {
                        "key": "A",
                        "text": "45°"
                  },
                  {
                        "key": "B",
                        "text": "60°"
                  },
                  {
                        "key": "C",
                        "text": "90°"
                  },
                  {
                        "key": "D",
                        "text": "180°"
                  }
            ],
            "correctKey": "C",
            "explanation": "Diametr çevrəni 180°-lik yarımçevrəyə bölür, onun yarısı 90°-dir."
      }
]
  },

  {
    id: 'lesson-math-9-u3-systems-intervals',
    subjectId: 'riyaziyyat',
    grade: 9,
    unit: 'Bölmə 3: Tənliklər və Bərabərsizliklər sistemi',
    unitOrder: 3,
    title: 'İkidərəcəli tənliklər sistemi və intervallar üsulu',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'İkidərəcəli tənliklər sistemi, kvadrat bərabərsizliklər və rasional bərabərsizliklərin intervallar üsulu ilə həlli.',
    theoryMarkdown: `
### 1. İkidərəcəli Tənliklər Sistemi
Biri xətti, digəri ikidərəcəli olan tənliklər sistemində xətti tənlikdən bir dəyişən digəri ilə ifadə olunub ikidərəcəli tənlikdə yerinə yazılır (əvəzetmə üsulu).

### 2. Kvadrat Bərabərsizliklər
$ax^2 + bx + c > 0$ və ya $< 0$ şəkilli bərabərsizlikləri həll etmək üçün:
1. $ax^2 + bx + c = 0$ tənliyinin $x_1, x_2$ kökləri tapılır.
2. Ədəd oxu $x_1$ və $x_2$ nöqtələri ilə intervallara bölünür.
3. Hər intervalda funksiyanın işarəsi yoxlanılır.

### 3. İntervallar Üsulu
$\frac{P(x)}{Q(x)} > 0$ şəklində olan bərabərsizliklərdə surət və məxrəcin sıfırları ədəd oxunda qeyd edilir. Tək dərəcəli sıfırlardan keçdikdə işarə əksinə dəyişir, cüt dərəcəli köklərdə isə işarə sabit qalır.
    `,
    keyFormulas: [
      {
            "id": "f-m9-u3-1",
            "name": "Kvadrat Üçhədlinin Vuruqlara Ayrılması",
            "latex": "ax^2 + bx + c = a(x - x_1)(x - x_2)",
            "description": "Köklər məlum olduqda üçhədli xətti vuruqlara parçalanır."
      }
],
    glossary: [
      {
            "term": "İntervallar üsulu",
            "definition": "Bərabərsizlikləri həll etmək üçün ədəd oxunu sıfır nöqtələri ilə hissələrə bölmə metodu."
      },
      {
            "term": "Qeyri-xətti sistem",
            "definition": "Heç olmasa bir tənliyi ikidərəcəli və ya daha yüksək dərəcəli olan sistem."
      }
],
    solvedExamples: [
      {
            "id": "ex-m9-u3-1",
            "question": "$(x - 2)(x - 5) < 0$ bərabərsizliyini həll edin.",
            "solution": "Sıfırlar: $x_1 = 2, x_2 = 5$. İntervallar: $(-\\infty; 2), (2; 5), (5; +\\infty)$. İşarələr sıra ilə: $+ , - , +$. Mənfi aralıq $(2; 5)$-dir."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m9-u3-1",
            "question": "$x^2 - 9 \\le 0$ bərabərsizliyinin həlli hansıdır?",
            "options": [
                  {
                        "key": "A",
                        "text": "[-3; 3]"
                  },
                  {
                        "key": "B",
                        "text": "(-∞; -3] ∪ [3; +∞)"
                  },
                  {
                        "key": "C",
                        "text": "[0; 3]"
                  },
                  {
                        "key": "D",
                        "text": "(-3; 3)"
                  }
            ],
            "correctKey": "A",
            "explanation": "(x-3)(x+3) <= 0 parabolanın qolları yuxarıdır, sıfırdan kiçik və bərabər hissə [-3; 3] parçasıdır."
      }
]
  },

  {
    id: 'lesson-math-9-u4-progressions',
    subjectId: 'riyaziyyat',
    grade: 9,
    unit: 'Bölmə 4: Ədədi ardıcıllıqlar. Silsilələr',
    unitOrder: 4,
    title: 'Ədədi və həndəsi silsilə düsturları',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Ədədi silsilənin fərqi $d$, $n$-ci həddi və cəm düsturu $S_n$; həndəsi silsilənin vuruğu $q$ və sonsuz azalan həndəsi silsilənin cəmi.',
    theoryMarkdown: `
### 1. Ədədi Silsilə
İkincidən başlayaraq hər bir həddi özündən əvvəlki hədlə eyni bir $d$ ədədinin (silsilə fərqi) cəminə bərabər olan ardıcıllığa **ədədi silsilə** deyilir.
- **$n$-ci həddin düsturu:**
$$a_n = a_1 + (n - 1)d$$
- **Əsas xassə:** $a_n = \frac{a_{n-1} + a_{n+1}}{2}$
- **İlk $n$ həddin cəmi:**
$$S_n = \frac{a_1 + a_n}{2} \cdot n = \frac{2a_1 + (n - 1)d}{2} \cdot n$$

### 2. Həndəsi Silsilə
Hər bir həddi özündən əvvəlki həddin sıfırdan fərqli eyni bir $q$ ədədinə (silsilə vuruğu) hasilinə bərabər olan ardıcıllıqdır:
- **$n$-ci həddin düsturu:**
$$b_n = b_1 \cdot q^{n-1}$$
- **İlk $n$ həddin cəmi:**
$$S_n = \frac{b_1(q^n - 1)}{q - 1} \quad (q \neq 1)$$
- **Sonsuz azalan həndəsi silsilənin cəmi ($|q| < 1$):**
$$S = \frac{b_1}{1 - q}$$
    `,
    keyFormulas: [
      {
            "id": "f-m9-u4-1",
            "name": "Ədədi Silsilənin N-ci Həddi",
            "latex": "a_n = a_1 + (n - 1)d",
            "description": "İstənilən hədd birinci hədd və fərq vasitəsilə tapılır."
      },
      {
            "id": "f-m9-u4-2",
            "name": "Sonsuz Azalan Həndəsi Silsilə Cəmi",
            "latex": "S = \\frac{b_1}{1 - q} \\quad (|q| < 1)",
            "description": "Vuruğu birdən kiçik olduqda sonsuz hədlərin limit cəmidir."
      }
],
    glossary: [
      {
            "term": "Silsilə fərqi (d)",
            "definition": "Ədədi silsilənin qonşu hədlərinin sabit fərqi."
      },
      {
            "term": "Silsilə vuruğu (q)",
            "definition": "Həndəsi silsilənin qonşu hədlərinin nisbəti."
      }
],
    solvedExamples: [
      {
            "id": "ex-m9-u4-1",
            "question": "İlk həddi $a_1 = 3$, fərqi $d = 4$ olan ədədi silsilənin 10-cu həddini tapın.",
            "solution": "$a_{10} = a_1 + 9d = 3 + 9 \\cdot 4 = 3 + 36 = 39$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m9-u4-1",
            "question": "$b_1 = 6, q = \\frac{1}{2}$ olan sonsuz azalan həndəsi silsilənin cəmini tapın.",
            "options": [
                  {
                        "key": "A",
                        "text": "3"
                  },
                  {
                        "key": "B",
                        "text": "6"
                  },
                  {
                        "key": "C",
                        "text": "12"
                  },
                  {
                        "key": "D",
                        "text": "18"
                  }
            ],
            "correctKey": "C",
            "explanation": "S = b1 / (1 - q) = 6 / (1 - 0.5) = 6 / 0.5 = 12."
      }
]
  },

  {
    id: 'lesson-math-9-u5-trigonometry',
    subjectId: 'riyaziyyat',
    grade: 9,
    unit: 'Bölmə 5: Triqonometriyanın əsasları',
    unitOrder: 5,
    title: 'İti bucağın triqonometrik funksiyaları və əsas eyniliklər',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Düzbucaqlı üçbucaqda $\sin, \cos, \text{tg}, \text{ctg}$ tərifləri, əsas triqonometrik eynilik və xüsusi bucaqlar ($30^\circ, 45^\circ, 60^\circ$).',
    theoryMarkdown: `
### 1. Triqonometrik Funksiyaların Tərifi
Düzbucaqlı üçbucaqda $\alpha$ iti bucağı üçün:
- **Sinus ($\sin \alpha$):** Qarşıdakı katetin hipotenuza nisbəti: $\sin \alpha = \frac{a}{c}$
- **Kosinus ($\cos \alpha$):** Bitişik katetin hipotenuza nisbəti: $\cos \alpha = \frac{b}{c}$
- **Tangens ($\text{tg} \alpha$):** Qarşıdakı katetin bitişik katetə nisbəti: $\text{tg} \alpha = \frac{a}{b} = \frac{\sin \alpha}{\cos \alpha}$
- **Kotangens ($\text{ctg} \alpha$):** Bitişik katetin qarşıdakı katetə nisbəti: $\text{ctg} \alpha = \frac{b}{a} = \frac{\cos \alpha}{\sin \alpha}$

### 2. Əsas Triqonometrik Eyniliklər
- $\sin^2 \alpha + \cos^2 \alpha = 1$
- $\text{tg} \alpha \cdot \text{ctg} \alpha = 1$
- $1 + \text{tg}^2 \alpha = \frac{1}{\cos^2 \alpha}$

### 3. Xüsusi Bucaqların Qiymətləri
- $\sin 30^\circ = \frac{1}{2}, \quad \cos 30^\circ = \frac{\sqrt{3}}{2}, \quad \text{tg} 30^\circ = \frac{\sqrt{3}}{3}$
- $\sin 45^\circ = \frac{\sqrt{2}}{2}, \quad \cos 45^\circ = \frac{\sqrt{2}}{2}, \quad \text{tg} 45^\circ = 1$
- $\sin 60^\circ = \frac{\sqrt{3}}{2}, \quad \cos 60^\circ = \frac{1}{2}, \quad \text{tg} 60^\circ = \sqrt{3}$
    `,
    keyFormulas: [
      {
            "id": "f-m9-u5-1",
            "name": "Əsas Triqonometrik Eynilik",
            "latex": "\\sin^2 \\alpha + \\cos^2 \\alpha = 1",
            "description": "Eyni bucağın sinusunun və kosinusunun kvadratları cəmi vahidə bərabərdir."
      },
      {
            "id": "f-m9-u5-2",
            "name": "Tangens və Kotangens Hasilinin Eyniliyi",
            "latex": "\\text{tg} \\alpha \\cdot \\text{ctg} \\alpha = 1",
            "description": "Tangens və kotangens qarşılıqlı tərs kəmiyyətlərdir."
      }
],
    glossary: [
      {
            "term": "Sinus",
            "definition": "Qarşıdakı katetin hipotenuza olan nisbəti."
      },
      {
            "term": "Kosinus",
            "definition": "Bitişik katetin hipotenuza olan nisbəti."
      }
],
    solvedExamples: [
      {
            "id": "ex-m9-u5-1",
            "question": "İti bucaq üçün $\\sin \\alpha = \\frac{3}{5}$ olarsa, $\\cos \\alpha$-nı tapın.",
            "solution": "$\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - \\left(\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{16}{25} \\implies \\cos \\alpha = \\frac{4}{5}$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m9-u9-1",
            "question": "$\\sin^2 40^\\circ + \\cos^2 40^\\circ$ ifadəsinin qiyməti nəyə bərabərdir?",
            "options": [
                  {
                        "key": "A",
                        "text": "0"
                  },
                  {
                        "key": "B",
                        "text": "1"
                  },
                  {
                        "key": "C",
                        "text": "2"
                  },
                  {
                        "key": "D",
                        "text": "0.5"
                  }
            ],
            "correctKey": "B",
            "explanation": "Əsas triqonometrik eyniliyə görə istənilən bucaq üçün sin^2(x) + cos^2(x) = 1."
      }
]
  },

  {
    id: 'lesson-math-9-u6-vectors',
    subjectId: 'riyaziyyat',
    grade: 9,
    unit: 'Bölmə 6: Vektorlar və Hərəkət',
    unitOrder: 6,
    title: 'Vektorlar və onlar üzərində əməllər. Skalyar hasil',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 2,
    summary: 'İstiqamətlənmiş parça (vektor), vektorun modulu, toplanması (üçbucaq və paraleleqram qaydası), skalyar hasil və perpendikulyarlıq şərti.',
    theoryMarkdown: `
### 1. Vektor Anlayışı
Ədədi qiyməti və istiqaməti olan istiqamətlənmiş parçaya **vektor** deyilir: $\vec{a}$ və ya $\vec{AB}$.
- Başlanğıcı $A(x_1; y_1)$ və sonu $B(x_2; y_2)$ olan vektorun koordinatları:
$$\vec{AB} = (x_2 - x_1; y_2 - y_1)$$
- **Vektorun uzunluğu (modulu):**
$$|\vec{a}| = \sqrt{x^2 + y^2}$$

### 2. Vektorların Toplanması və Çıxılması
- $\vec{a}(x_1; y_1) + \vec{b}(x_2; y_2) = (x_1 + x_2; y_1 + y_2)$
- Ədədə vurma: $k \cdot \vec{a} = (k x_1; k y_1)$

### 3. Skalyar Hasil
İki vektorun skalyar hasili onların modulları ilə aralarındakı bucağın kosinusu hasilinə bərabərdir:
$$\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos \varphi = x_1 x_2 + y_1 y_2$$
- **Perpendikulyarlıq şərti:** İki vektor yalnız və yalnız o zaman perpendikulyardır ki, onların skalyar hasili sıfıra bərabər olsun:
$$\vec{a} \perp \vec{b} \iff x_1 x_2 + y_1 y_2 = 0$$
    `,
    keyFormulas: [
      {
            "id": "f-m9-u6-1",
            "name": "Vektorun Uzunluğu",
            "latex": "|\\vec{a}| = \\sqrt{x^2 + y^2}",
            "description": "Koordinatlarının kvadratları cəminin köküdür."
      },
      {
            "id": "f-m9-u6-2",
            "name": "Skalyar Hasil",
            "latex": "\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2",
            "description": "Uyğun koordinatların hasillərinin cəmidir."
      }
],
    glossary: [
      {
            "term": "Vektor",
            "definition": "Həm modulu, həm də fəzada istiqaməti olan yönəlmiş parça."
      },
      {
            "term": "Skalyar hasil",
            "definition": "İki vektorun hasilindən alınan həqiqi ədəd."
      }
],
    solvedExamples: [
      {
            "id": "ex-m9-u6-1",
            "question": "$\\vec{a}(3; 4)$ vektorunun uzunluğunu tapın.",
            "solution": "$|\\vec{a}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m9-u6-1",
            "question": "$\\vec{a}(2; -3)$ və $\\vec{b}(3; 2)$ vektorlarının skalyar hasili neçədir?",
            "options": [
                  {
                        "key": "A",
                        "text": "0"
                  },
                  {
                        "key": "B",
                        "text": "6"
                  },
                  {
                        "key": "C",
                        "text": "12"
                  },
                  {
                        "key": "D",
                        "text": "-12"
                  }
            ],
            "correctKey": "A",
            "explanation": "a · b = 2*3 + (-3)*2 = 6 - 6 = 0 (vektorlar perpendikulyardır)."
      }
]
  },

  {
    id: 'lesson-math-9-u7-combinatorics',
    subjectId: 'riyaziyyat',
    grade: 9,
    unit: 'Bölmə 7: Birləşmələr nəzəriyyəsi və Ehtimal',
    unitOrder: 7,
    title: 'Permutasiya, kombinezon və ehtimal nəzəriyyəsi',
    order: 1,
    readTimeMinutes: 9,
    difficulty: 2,
    summary: 'Faktorial $n!$, vurma və toplama qaydaları, yerdəyişmələr (permutasiya $P_n$), qruplaşdırmalar (kombinezon $C_n^k$) və klassik ehtimal.',
    theoryMarkdown: `
### 1. Faktorial və Kombinatorika Qaydaları
$n$ natural ədədinin faktorialı 1-dən $n$-ə qədər olan natural ədədlərin hasilidir:
$$n! = 1 \cdot 2 \cdot 3 \dots n, \qquad 0! = 1$$
- **Toplama qaydası:** Əgər $A$ elementi $m$ üsulla, $B$ elementi $k$ üsulla seçilə bilərsə, "$A$ və ya $B$" elementi $m + k$ üsulla seçilə bilər.
- **Vurma qaydası:** Əgər $A$ $m$ üsulla, onun ardınca $B$ $k$ üsulla seçilirsə, "$A$ və $B$" cütü $m \cdot k$ üsulla seçilə bilər.

### 2. Yerdəyişmə və Qrup
- **Permutasiya ($P_n$):** $n$ elementli çoxluğun elementlərinin nizamlı düzülüşlərinin sayıdır:
$$P_n = n!$$
- **Kombinezon ($C_n^k$):** $n$ elementdən sırası nəzərə alınmadan seçilən $k$ elementli alt çoxluqların sayıdır:
$$C_n^k = \frac{n!}{k!(n - k)!}$$

### 3. Klassik Ehtimal
$$P(A) = \frac{m}{n} = \frac{\text{əlverişli hallar}}{\text{bütün mümkün hallar}}$$
    `,
    keyFormulas: [
      {
            "id": "f-m9-u7-1",
            "name": "Kombinezon Düsturu",
            "latex": "C_n^k = \\frac{n!}{k!(n - k)!}",
            "description": "n elementdən sırasız k elementi seçmə üsullarının sayı."
      },
      {
            "id": "f-m9-u7-2",
            "name": "Permutasiya Düsturu",
            "latex": "P_n = n!",
            "description": "n müxtəlif elementin yerdəyişmələrinin sayı."
      }
],
    glossary: [
      {
            "term": "Faktorial",
            "definition": "1-dən n-ə qədər bütün natural ədədlərin hasili."
      },
      {
            "term": "Kombinezon",
            "definition": "Elementlərin düzülüş sırası vacib olmayan seçim birləşməsi."
      }
],
    solvedExamples: [
      {
            "id": "ex-m9-u7-1",
            "question": "5 nəfərdən 2 nəfərlik növbətçi qrupunu neçə müxtəlif üsulla seçmək olar?",
            "solution": "Sıra vacib olmadığı üçün kombinezon tətbiq olunur: $C_5^2 = \\frac{5!}{2! \\cdot 3!} = \\frac{5 \\cdot 4}{2 \\cdot 1} = 10$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m9-u7-1",
            "question": "3 kitab rəfə neçə müxtəlif ardıcıllıqla düzülə bilər?",
            "options": [
                  {
                        "key": "A",
                        "text": "3"
                  },
                  {
                        "key": "B",
                        "text": "6"
                  },
                  {
                        "key": "C",
                        "text": "9"
                  },
                  {
                        "key": "D",
                        "text": "12"
                  }
            ],
            "correctKey": "B",
            "explanation": "P3 = 3! = 1 * 2 * 3 = 6."
      }
]
  },

  {
    id: 'lesson-math-10-u1-functions',
    subjectId: 'riyaziyyat',
    grade: 10,
    unit: 'Bölmə 1: Funksiyalar və onların xassələri',
    unitOrder: 1,
    title: 'Təyin oblastı, qiymətlər çoxluğu, tək və cüt funksiyalar',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Funksiyanın təyin oblastı $D(f)$, qiymətlər çoxluğu $E(f)$, tək və cüt funksiyaların qrafik simmetriyası, mürəkkəb və tərs funksiya.',
    theoryMarkdown: `
### 1. Təyin Oblastı və Qiymətlər Çoxluğu
- **Təyin oblastı $D(f)$:** Arqumentin ($x$) funksiyanın mənası olduğu bütün mümkün qiymətlər çoxluğudur. Kökaltı ($2n$ dərəcə) ifadələr qeyri-mənfi, məxrəclər sıfırdan fərqli olmalıdır.
- **Qiymətlər çoxluğu $E(f)$:** Dəyişən $x$ bütün təyin oblastını aşarkən funksiyanın ($y$) aldığı qiymətlər toplusudur.

### 2. Tək və Cüt Funksiyalar
Simmetrik təyin oblastında verilmiş funksiya üçün:
- **Cüt funksiya:** $f(-x) = f(x)$. Qrafiki **ordinat oxuna ($Oy$) nəzərən simmetrikdir** (məsələn, $y = x^2, y = \cos x$).
- **Tək funksiya:** $f(-x) = -f(x)$. Qrafiki **koordinat başlanğıcına ($O$) nəzərən simmetrikdir** (məsələn, $y = x^3, y = \sin x$).

### 3. Tərs Funksiya
Əgər $y = f(x)$ funksiyası öz təyin oblastında ciddi monotondursa (yalnız artan və ya yalnız azalan), onun tərs funksiyası $x = f^{-1}(y)$ mövcuddur. Funksiyanın və onun tərs funksiyasının qrafikləri $y = x$ düz xəttinə nəzərən simmetrikdir.
    `,
    keyFormulas: [
      {
            "id": "f-m10-u1-1",
            "name": "Cüt Funksiya Şərti",
            "latex": "f(-x) = f(x)",
            "description": "Ordinat oxuna nəzərən simmetriya təmin olunur."
      },
      {
            "id": "f-m10-u1-2",
            "name": "Tək Funksiya Şərti",
            "latex": "f(-x) = -f(x)",
            "description": "Koordinat başlanğıcına nəzərən mərkəzi simmetriya təmin olunur."
      }
],
    glossary: [
      {
            "term": "Təyin oblastı (D(f))",
            "definition": "Funksiyanın təyin olunduğu bütün x arqumentlər çoxluğu."
      },
      {
            "term": "Tərs funksiya",
            "definition": "Verilmiş funksiyanın asılılığını əksinə çevirən funksiya (y=f(x) -> x=f⁻¹(y))."
      }
],
    solvedExamples: [
      {
            "id": "ex-m10-u1-1",
            "question": "$f(x) = x^4 + 3x^2$ funksiyasının tək və ya cüt olduğunu müəyyən edin.",
            "solution": "$f(-x) = (-x)^4 + 3(-x)^2 = x^4 + 3x^2 = f(x)$. $f(-x) = f(x)$ şərti ödəndiyindən, funksiya cütdür."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m10-u1-1",
            "question": "$y = \\frac{1}{x - 3}$ funksiyasının təyin oblastı hansıdır?",
            "options": [
                  {
                        "key": "A",
                        "text": "R"
                  },
                  {
                        "key": "B",
                        "text": "x ≠ 3"
                  },
                  {
                        "key": "C",
                        "text": "x > 3"
                  },
                  {
                        "key": "D",
                        "text": "x < 3"
                  }
            ],
            "correctKey": "B",
            "explanation": "Məxrəc x - 3 ≠ 0 olmalıdır, buna görə də x ≠ 3 (bütün həqiqi ədədlər x=3 istisna olmaqla)."
      }
]
  },

  {
    id: 'lesson-math-10-u2-trig-eq',
    subjectId: 'riyaziyyat',
    grade: 10,
    unit: 'Bölmə 2: Triqonometrik funksiyalar və Triqonometrik tənliklər',
    unitOrder: 2,
    title: 'Triqonometrik funksiyaların qrafikləri və tənliklər',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 3,
    summary: 'Sinusoid və kosinusoid, triqonometrik funksiyaların periodiklik xassəsi ($2\pi, \pi$), $\sin x = a, \cos x = a, \text{tg} x = a$ tənliklərinin həlli.',
    theoryMarkdown: `
### 1. Triqonometrik Funksiyaların Periodikliyi
- $y = \sin x$ və $y = \cos x$ üçün ən kiçik müsbət dövr: $T = 2\pi$.
- $y = \text{tg} x$ və $y = \text{ctg} x$ üçün ən kiçik müsbət dövr: $T = \pi$.
- Ümumi halda $y = \sin(kx + b)$ üçün $T = \frac{2\pi}{|k|}$.

### 2. Sadə Triqonometrik Tənliklərin Ümumi Həlli
- **$\sin x = a$ ($|a| \le 1$):**
$$x = (-1)^k \arcsin a + \pi k, \quad k \in \mathbb{Z}$$
- **$\cos x = a$ ($|a| \le 1$):**
$$x = \pm \arccos a + 2\pi k, \quad k \in \mathbb{Z}$$
- **$\text{tg} x = a$:**
$$x = \text{arctg} a + \pi k, \quad k \in \mathbb{Z}$$

### 3. Xüsusi Hallar
- $\sin x = 0 \implies x = \pi k$; $\quad \sin x = 1 \implies x = \frac{\pi}{2} + 2\pi k$; $\quad \sin x = -1 \implies x = -\frac{\pi}{2} + 2\pi k$
- $\cos x = 0 \implies x = \frac{\pi}{2} + \pi k$; $\quad \cos x = 1 \implies x = 2\pi k$; $\quad \cos x = -1 \implies x = \pi + 2\pi k$
    `,
    keyFormulas: [
      {
            "id": "f-m10-u2-1",
            "name": "Sinus Tənliyinin Kökü",
            "latex": "x = (-1)^k \\arcsin a + \\pi k, \\quad k \\in \\mathbb{Z}",
            "description": "sin x = a üçün ümumi həll çoxluğudur."
      },
      {
            "id": "f-m10-u2-2",
            "name": "Kosinus Tənliyinin Kökü",
            "latex": "x = \\pm \\arccos a + 2\\pi k, \\quad k \\in \\mathbb{Z}",
            "description": "cos x = a üçün ümumi həll çoxluğudur."
      }
],
    glossary: [
      {
            "term": "Period (Dövr)",
            "definition": "Funksiyanın qiymətlərinin təkrarlanma aralığı."
      },
      {
            "term": "Arkkosinus",
            "definition": "[0; π] parçasında kosinusu a-ya bərabər olan bucaq."
      }
],
    solvedExamples: [
      {
            "id": "ex-m10-u2-1",
            "question": "$\\cos x = \\frac{1}{2}$ tənliyini həll edin.",
            "solution": "$\\arccos\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{3}$. Ümumi düstur: $x = \\pm \\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m10-u2-1",
            "question": "$\\sin x = 0$ tənliyinin həllər çoxluğu hansıdır?",
            "options": [
                  {
                        "key": "A",
                        "text": "x = 2πk"
                  },
                  {
                        "key": "B",
                        "text": "x = π/2 + πk"
                  },
                  {
                        "key": "C",
                        "text": "x = πk, k ∈ Z"
                  },
                  {
                        "key": "D",
                        "text": "x = π + 2πk"
                  }
            ],
            "correctKey": "C",
            "explanation": "Sinus vahid çevrədə 0, π, 2π və s. nöqtələrində sıfıra bərabər olur, yəni x = πk."
      }
]
  },

  {
    id: 'lesson-math-10-u3-stereometry',
    subjectId: 'riyaziyyat',
    grade: 10,
    unit: 'Bölmə 3: Fəzada düz xətlər və müstəvilər (Stereometriya)',
    unitOrder: 3,
    title: 'Stereometriyanın aksiomları və üç perpendikulyar teoremi',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Stereometriyanın əsas aksiomları, düz xətt və müstəvinin paralellik və perpendikulyarlıq əlaməti, üç perpendikulyar teoremi.',
    theoryMarkdown: `
### 1. Stereometriyanın Əsas Aksiomları
- Bir düz xətt üzərində olmayan üç nöqtədən yalnız və yalnız bir müstəvi keçir.
- Düz xəttin iki nöqtəsi müstəvi üzərindədirsə, bu düz xəttin bütün nöqtələri həmin müstəvi üzərindədir.
- İki müxtəlif müstəvinin ortaq nöqtəsi varsa, onlar həmin nöqtədən keçən düz xətt boyunca kəsişir.

### 2. Düz Xətt və Müstəvinin Qarşılıqlı Vəziyyəti
- **Paralellik əlaməti:** Müstəvidən kənardakı düz xətt bu müstəvidə yerləşən hər hansı düz xəttə paraleldirsə, həmin müstəvinin özünə də paraleldir.
- **Perpendikulyarlıq əlaməti:** Düz xətt müstəvinin kəsişən iki düz xəttinə perpendikulyardırsa, o, həmin müstəvinin özünə perpendikulyardır.

### 3. Üç Perpendikulyar Teoremi
Müstəvi üzərindəki düz xətt mailin proyeksiyasına perpendikulyardırsa, mailin özünə də perpendikulyardır (və tərsinə).
    `,
    keyFormulas: [
      {
            "id": "f-m10-u3-1",
            "name": "Perpendikulyar və Proyeksiya Əlaqəsi",
            "latex": "l^2 = h^2 + d^2",
            "description": "Mailin kvadratı perpendikulyarın kvadratı ilə proyeksiyanın kvadratı cəminə bərabərdir."
      }
],
    glossary: [
      {
            "term": "Mail",
            "definition": "Verilmiş nöqtədən müstəviyə perpendikulyar olmayan çəkilmiş parça."
      },
      {
            "term": "Proyeksiya",
            "definition": "Mailin oturacağı ilə perpendikulyarın oturacağını birləşdirən parça."
      }
],
    solvedExamples: [
      {
            "id": "ex-m10-u3-1",
            "question": "Nöqtədən müstəviyə uzunluğu 10 sm olan mail çəkilmişdir. Mailin proyeksiyası 6 sm olarsa, perpendikulyarın uzunluğunu tapın.",
            "solution": "$h = \\sqrt{l^2 - d^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8 \\text{ sm}$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m10-u3-1",
            "question": "Bir düz xətt üzərində olmayan neçə nöqtədən yeganə müstəvi keçirmək olar?",
            "options": [
                  {
                        "key": "A",
                        "text": "1"
                  },
                  {
                        "key": "B",
                        "text": "2"
                  },
                  {
                        "key": "C",
                        "text": "3"
                  },
                  {
                        "key": "D",
                        "text": "4"
                  }
            ],
            "correctKey": "C",
            "explanation": "Stereometriyanın I aksiomuna görə bir düz xətt üzərində olmayan 3 nöqtədən yeganə müstəvi keçir."
      }
]
  },

  {
    id: 'lesson-math-10-u4-logarithms',
    subjectId: 'riyaziyyat',
    grade: 10,
    unit: 'Bölmə 4: Qüvvət, Üstlü və Loqarifmik funksiyalar',
    unitOrder: 4,
    title: 'Üstlü və loqarifmik tənliklər, loqarifmin xassələri',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 2,
    summary: 'Loqarifmin tərifi $\log_a b$, əsas loqarifmik eynilik, cəmin və hasilin loqarifmi, üstlü tənliklərin həlli.',
    theoryMarkdown: `
### 1. Loqarifmin Tərifi
$b$ ədədini almaq üçün $a$ əsasını yüksəltmək lazım gələn qüvvət üstünə $b$ ədədinin $a$ əsasına görə **loqarifmi** deyilir:
$$\log_a b = c \iff a^c = b \quad (a > 0, a \neq 1, b > 0)$$
- **Əsas loqarifmik eynilik:**
$$a^{\log_a b} = b$$

### 2. Loqarifmin Əsas Xassələri
- $\log_a (x \cdot y) = \log_a x + \log_a y$
- $\log_a \left(\frac{x}{y}\right) = \log_a x - \log_a y$
- $\log_a (x^p) = p \cdot \log_a x$
- $\log_{a^k} x = \frac{1}{k} \log_a x$
- **Yeni əsasa keçid düsturu:** $\log_a b = \frac{\log_c b}{\log_c a}$
- Natural loqarifm: $\ln x = \log_e x$ ($e \approx 2.71828$)
- Onluq loqarifm: $\lg x = \log_{10} x$
    `,
    keyFormulas: [
      {
            "id": "f-m10-u4-1",
            "name": "Hasilin Loqarifmi",
            "latex": "\\log_a (x \\cdot y) = \\log_a x + \\log_a y",
            "description": "Hasilin loqarifmi vuruqların loqarifmləri cəminə bərabərdir."
      },
      {
            "id": "f-m10-u4-2",
            "name": "Əsas Loqarifmik Eynilik",
            "latex": "a^{\\log_a b} = b",
            "description": "Eyni əsaslı dərəcə və loqarifm bir-birini kompensasiya edir."
      }
],
    glossary: [
      {
            "term": "Loqarifm",
            "definition": "Verilmiş ədədi almaq üçün əsası yüksəltmək lazım olan qüvvət üstü."
      },
      {
            "term": "Əsas eynilik",
            "definition": "a üstü log_a(b) = b münasibəti."
      }
],
    solvedExamples: [
      {
            "id": "ex-m10-u4-1",
            "question": "$\\log_2 16 + \\log_3 27$ cəmini hesablayın.",
            "solution": "$\\log_2 16 = 4$ (çünki $2^4 = 16$), $\\log_3 27 = 3$ (çünki $3^3 = 27$). Cəm: $4 + 3 = 7$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m10-u4-1",
            "question": "$\\log_5 25$ ifadəsinin qiyməti nəyə bərabərdir?",
            "options": [
                  {
                        "key": "A",
                        "text": "1"
                  },
                  {
                        "key": "B",
                        "text": "2"
                  },
                  {
                        "key": "C",
                        "text": "5"
                  },
                  {
                        "key": "D",
                        "text": "10"
                  }
            ],
            "correctKey": "B",
            "explanation": "5-in 2-ci qüvvəti 25 edir (5^2 = 25), buna görə loqarifm 2-yə bərabərdir."
      }
]
  },

  {
    id: 'lesson-math-10-u5-polyhedra',
    subjectId: 'riyaziyyat',
    grade: 10,
    unit: 'Bölmə 5: Çoxüzlülər və Fiqurların həcmi',
    unitOrder: 5,
    title: 'Prizma və piramidanın səthi və həcmi',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Düzgün prizma və piramida, yan və tam səthin sahəsi, həcm düsturları $V = S_{\text{ot}} \cdot h$ və $V = \frac{1}{3} S_{\text{ot}} \cdot h$.',
    theoryMarkdown: `
### 1. Prizma
İki üzü konqruyent çoxbucaqlı (oturacaqlar), qalan üzləri isə paraleloqramlar olan çoxüzlüyə **prizma** deyilir.
- **Yan səthin sahəsi:** $S_{\text{yan}} = P_{\text{ot}} \cdot h$ (düz prizmada)
- **Tam səthin sahəsi:** $S_{\text{tam}} = S_{\text{yan}} + 2S_{\text{ot}}$
- **Həcmi:**
$$V = S_{\text{ot}} \cdot h$$

### 2. Piramida
Oturacağı çoxbucaqlı, qalan üzləri ortaq təpəyə malik üçbucaqlar olan çoxüzlüyə **piramida** deyilir.
- **Düzgün piramidanın yan səthi:** $S_{\text{yan}} = \frac{1}{2} P_{\text{ot}} \cdot h_a$ ($h_a$ — apofemdir)
- **Tam səthin sahəsi:** $S_{\text{tam}} = S_{\text{yan}} + S_{\text{ot}}$
- **Həcmi:**
$$V = \frac{1}{3} S_{\text{ot}} \cdot h$$
    `,
    keyFormulas: [
      {
            "id": "f-m10-u5-1",
            "name": "Prizmanın Həcmi",
            "latex": "V = S_{\\text{ot}} \\cdot h",
            "description": "Oturacağın sahəsi ilə hündürlüyün hasilidir."
      },
      {
            "id": "f-m10-u5-2",
            "name": "Piramidanın Həcmi",
            "latex": "V = \\frac{1}{3} S_{\\text{ot}} \\cdot h",
            "description": "Prizma həcminin üçdə bir hissəsidir."
      }
],
    glossary: [
      {
            "term": "Apofem",
            "definition": "Düzgün piramidanın yan üzünün təpədən çəkilmiş hündürlüyü."
      },
      {
            "term": "Çoxüzlü",
            "definition": "Səthi sonlu sayda çoxbucaqlılardan ibarət qapalı həndəsi cisim."
      }
],
    solvedExamples: [
      {
            "id": "ex-m10-u5-1",
            "question": "Oturacağının sahəsi $24 \\text{ sm}^2$, hündürlüyü 9 sm olan piramidanın həcmini tapın.",
            "solution": "$V = \\frac{1}{3} S_{\\text{ot}} \\cdot h = \\frac{1}{3} \\cdot 24 \\cdot 9 = 8 \\cdot 9 = 72 \\text{ sm}^3$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m10-u5-1",
            "question": "Oturacağının sahəsi 15 və hündürlüyü 6 olan düz prizmanın həcmi neçədir?",
            "options": [
                  {
                        "key": "A",
                        "text": "30"
                  },
                  {
                        "key": "B",
                        "text": "45"
                  },
                  {
                        "key": "C",
                        "text": "90"
                  },
                  {
                        "key": "D",
                        "text": "120"
                  }
            ],
            "correctKey": "C",
            "explanation": "V = Sot * h = 15 * 6 = 90."
      }
]
  },

  {
    id: 'lesson-math-10-u6-derivative',
    subjectId: 'riyaziyyat',
    grade: 10,
    unit: 'Bölmə 6: Törəmə və onun tətbiqləri',
    unitOrder: 6,
    title: 'Törəmənin tərifi, cədvəli, həndəsi və fiziki mənası',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 3,
    summary: 'Arqument və funksiya artımı, törəmənin tərifi limit kimi, cəmin, hasilin və qismətin törəməsi, toxunanın bucaq əmsalı $k = f\'(x_0)$ və ani sürət $v(t) = s\'(t)$.',
    theoryMarkdown: `
### 1. Törəmənin Tərifi
Funksiya artımının arqument artımına nisbətinin arqument artımı sıfıra yaxınlaşarkən limitinə funksiyanın verilmiş nöqtədə **törəməsi** deyilir:
$$f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}$$

### 2. Törəmə Cədvəli
- $c' = 0$ ($c - \text{sabitdir}$)
- $(x^n)' = n \cdot x^{n-1}$
- $(\sin x)' = \cos x$
- $(\cos x)' = -\sin x$
- $(e^x)' = e^x, \qquad (\ln x)' = \frac{1}{x}$

### 3. Diferensiallama Qaydaları
- $(u \pm v)' = u' \pm v'$
- $(u \cdot v)' = u'v + uv'$
- $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2} \quad (v \neq 0)$

### 4. Həndəsi və Fiziki Məna
- **Həndəsi məna:** Qrafikə $x_0$ nöqtəsində çəkilmiş toxunanın bucaq əmsalı:
$$k = \text{tg} \alpha = f'(x_0)$$
Toxunanın tənliyi: $y - f(x_0) = f'(x_0)(x - x_0)$
- **Fiziki məna:** Gedilən yolun zamana görə törəməsi ani sürəti verir:
$$v(t) = s'(t), \qquad a(t) = v'(t) = s''(t)$$
    `,
    keyFormulas: [
      {
            "id": "f-m10-u6-1",
            "name": "Qüvvət Funksiyasının Törəməsi",
            "latex": "(x^n)' = n \\cdot x^{n-1}",
            "description": "Üst qabağa düşür və dərəcə bir vahid azalır."
      },
      {
            "id": "f-m10-u6-2",
            "name": "Törəmənin Həndəsi Mənası",
            "latex": "k = f'(x_0) = \\text{tg} \\alpha",
            "description": "Nöqtədəki törəmə həmin nöqtədə toxunanın bucaq əmsalıdır."
      }
],
    glossary: [
      {
            "term": "Törəmə",
            "definition": "Funksiyanın ani dəyişmə sürətini xarakterizə edən riyazi analiz anlayışı."
      },
      {
            "term": "Toxunan",
            "definition": "Əyriyə verilmiş nöqtədə ən yaxınlaşan düz xətt."
      }
],
    solvedExamples: [
      {
            "id": "ex-m10-u6-1",
            "question": "$f(x) = x^3 - 4x + 5$ funksiyasının $x_0 = 2$ nöqtəsində törəməsini hesablayın.",
            "solution": "Törəməni tapaq: $f'(x) = 3x^2 - 4$. $x = 2$ qiymətini qoysaq: $f'(2) = 3(2^2) - 4 = 12 - 4 = 8$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m10-u6-1",
            "question": "$f(x) = 5x^2$ funksiyasının törəməsi nəyə bərabərdir?",
            "options": [
                  {
                        "key": "A",
                        "text": "5x"
                  },
                  {
                        "key": "B",
                        "text": "10x"
                  },
                  {
                        "key": "C",
                        "text": "10"
                  },
                  {
                        "key": "D",
                        "text": "2x"
                  }
            ],
            "correctKey": "B",
            "explanation": "(5x^2)' = 5 * 2x = 10x."
      }
]
  },

  {
    id: 'lesson-math-11-u1-investigation',
    subjectId: 'riyaziyyat',
    grade: 11,
    unit: 'Bölmə 1: Törəmənin tətbiqi ilə funksiyaların araşdırılması',
    unitOrder: 1,
    title: 'Artma-azalma intervalları, ekstremumlar və ən böyük/kiçik qiymət',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 3,
    summary: 'Funksiyanın monotonluq əlamətləri ($f\'(x) > 0$ artan, $f\'(x) < 0$ azalan), stasionar və böhran nöqtələri, maksimum və minimum nöqtələri, parçada ən böyük və ən kiçik qiymət.',
    theoryMarkdown: `
### 1. Funksiyanın Artma və Azalma Şərti
- Əgər intervalda $f'(x) > 0$ olarsa, funksiya həmin intervalda **ciddi artandır**.
- Əgər intervalda $f'(x) < 0$ olarsa, funksiya həmin intervalda **ciddi azalandır**.

### 2. Ekstremum Nöqtələri (Ferma Teoremi)
Törəmənin sıfıra bərabər olduğu nöqtələrə **stasionar nöqtələr** deyilir ($f'(x) = 0$).
- **Maksimum nöqtəsi:** Əgər $x_0$ stasionar nöqtəsindən keçərkən törəmə işarəsini **müsbətdən mənfiyə ($+ \to -$)** dəyişərsə, $x_0$ lokal maksimum nöqtəsidir.
- **Minimum nöqtəsi:** Əgər törəmə işarəsini **mənfidən müsbətə ($- \to +$)** dəyişərsə, $x_0$ lokal minimum nöqtəsidir.

### 3. Parçada Ən Böyük və Ən Kiçik Qiymətlər
$[a; b]$ parçasında kəsilməz funksiyanın ən böyük (ƏBQ) və ən kiçik (ƏKQ) qiymətini tapmaq üçün:
1. Parçaya daxil olan bütün stasionar nöqtələrdəki qiymətlər hesablanır.
2. Parçanın uc nöqtələrindəki qiymətlər ($f(a)$ və $f(b)$) hesablanır.
3. Alınan qiymətlərin ən böyüyü və ən kiçiyi seçilir.
    `,
    keyFormulas: [
      {
            "id": "f-m11-u1-1",
            "name": "Monotonluq Əlaməti",
            "latex": "f'(x) > 0 \\implies f(x) \\uparrow, \\quad f'(x) < 0 \\implies f(x) \\downarrow",
            "description": "Müsbət törəmə artmanı, mənfi törəmə azalmanı bildirir."
      },
      {
            "id": "f-m11-u1-2",
            "name": "Ekstremumun Zəruri Şərti",
            "latex": "f'(x_0) = 0",
            "description": "Ekstremum nöqtələrində törəmə sıfıra çevrilir və ya mövcud deyil."
      }
],
    glossary: [
      {
            "term": "Stasionar nöqtə",
            "definition": "Funksiyanın törəməsinin sıfıra bərabər olduğu daxili nöqtə."
      },
      {
            "term": "Ekstremum",
            "definition": "Funksiyanın lokal maksimum və ya minimum qiymətlərinin ümumi adı."
      }
],
    solvedExamples: [
      {
            "id": "ex-m11-u1-1",
            "question": "$f(x) = x^2 - 6x + 8$ funksiyasının minimum nöqtəsini tapın.",
            "solution": "Törəməni sıfıra bərabər edək: $f'(x) = 2x - 6 = 0 \\implies 2x = 6 \\implies x = 3$. $x < 3$ üçün $f' < 0$, $x > 3$ üçün $f' > 0$ olduğundan, $x = 3$ minimum nöqtəsidir."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m11-u1-1",
            "question": "Nöqtədən keçərkən törəmə '+' işarəsindən '-' işarəsinə dəyişirsə, bu hansı nöqtədir?",
            "options": [
                  {
                        "key": "A",
                        "text": "Minimum nöqtəsi"
                  },
                  {
                        "key": "B",
                        "text": "Maksimum nöqtəsi"
                  },
                  {
                        "key": "C",
                        "text": "Əyilmə nöqtəsi"
                  },
                  {
                        "key": "D",
                        "text": "Kəsilmə nöqtəsi"
                  }
            ],
            "correctKey": "B",
            "explanation": "Funksiya artmadan azalmaya keçirsə, həmin təpə nöqtəsi lokal maksimumdur."
      }
]
  },

  {
    id: 'lesson-math-11-u2-integral',
    subjectId: 'riyaziyyat',
    grade: 11,
    unit: 'Bölmə 2: İbtidai funksiya və İnteqral',
    unitOrder: 2,
    title: 'İbtidai funksiya, müəyyən inteqral və sahə hesablanması',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 3,
    summary: 'İbtidai funksiyanın tərifi $F\'(x) = f(x)$, qeyri-müəyyən və müəyyən inteqral, Nyuton-Leybnits düsturu, əyrixətli trapesiyanın sahəsi.',
    theoryMarkdown: `
### 1. İbtidai Funksiya
Verilmiş aralıqda $F'(x) = f(x)$ şərti ödənərsə, $F(x)$ funksiyasına $f(x)$ üçün **ibtidai funksiya** deyilir.
- İbtidai funksiyaların ümumi şəkli: $F(x) + C$ ($C$ ixtiyari sabitdir).

### 2. İnteqral Cədvəli
- $\int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$
- $\int \frac{1}{x} dx = \ln|x| + C$
- $\int e^x dx = e^x + C$
- $\int \sin x dx = -\cos x + C$
- $\int \cos x dx = \sin x + C$

### 3. Müəyyən İnteqral və Nyuton-Leybnits Düsturu
$$\int_a^b f(x) dx = F(b) - F(a)$$

### 4. Əyrixətli Trapesiyanın Sahəsi
Yuxarıdan $y = f(x) \ge 0$ əyrisi ilə, aşağıdan $Ox$ oxu ilə ($y = 0$), soldan $x = a$ və sağdan $x = b$ düz xətləri ilə hüdudlanmış fiqurun sahəsi:
$$S = \int_a^b f(x) dx$$
    `,
    keyFormulas: [
      {
            "id": "f-m11-u2-1",
            "name": "Nyuton-Leybnits Düsturu",
            "latex": "\\int_a^b f(x) dx = F(b) - F(a)",
            "description": "Müəyyən inteqral ibtidai funksiyanın sərhədlərdəki qiymətlərinin fərqinə bərabərdir."
      },
      {
            "id": "f-m11-u2-2",
            "name": "Əyrixətli Trapesiyanın Sahəsi",
            "latex": "S = \\int_a^b [f(x) - g(x)] dx",
            "description": "İki əyri arasındakı fiqurun sahəsinin inteqral ifadəsidir."
      }
],
    glossary: [
      {
            "term": "İbtidai funksiya",
            "definition": "Törəməsi verilmiş funksiyanı verən funksiya."
      },
      {
            "term": "Müəyyən inteqral",
            "definition": "İnteqral cəminin limiti, əyri altındakı həndəsi sahəni bildirir."
      }
],
    solvedExamples: [
      {
            "id": "ex-m11-u2-1",
            "question": "$\\int_1^3 2x dx$ müəyyən inteqralını hesablayın.",
            "solution": "$2x$-in ibtidai funksiyası $x^2$-dir. Nyuton-Leybnits düsturuna görə: $\\int_1^3 2x dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m11-u2-1",
            "question": "$f(x) = 3x^2$ funksiyasının ibtidai funksiyası hansıdır?",
            "options": [
                  {
                        "key": "A",
                        "text": "6x + C"
                  },
                  {
                        "key": "B",
                        "text": "x^3 + C"
                  },
                  {
                        "key": "C",
                        "text": "3x^3 + C"
                  },
                  {
                        "key": "D",
                        "text": "x^2 + C"
                  }
            ],
            "correctKey": "B",
            "explanation": "(x^3)' = 3x^2 olduğundan ibtidai funksiya x^3 + C olar."
      }
]
  },

  {
    id: 'lesson-math-11-u3-revolution-solids',
    subjectId: 'riyaziyyat',
    grade: 11,
    unit: 'Bölmə 3: Fırlanma cisimləri',
    unitOrder: 3,
    title: 'Silindr, konus və kürənin səthi və həcmi',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 2,
    summary: 'Fırlanma cisimləri, silindr, konus və kəsik konusun açılışı, yan və tam səthi, kürə və sferanın sahə və həcm düsturları.',
    theoryMarkdown: `
### 1. Silindr
Düzbucaqlının bir tərəfi ətrafında fırlanmasından alınan cisimdir.
- **Yan səthinin sahəsi:** $S_{\text{yan}} = 2\pi R h$
- **Tam səthinin sahəsi:** $S_{\text{tam}} = 2\pi R(R + h)$
- **Həcmi:**
$$V = \pi R^2 h$$

### 2. Konus
Düzbucaqlı üçbucağın bir kateti ətrafında fırlanmasından alınan cisimdir ($l$ — doğurandır, $l = \sqrt{R^2 + h^2}$).
- **Yan səthinin sahəsi:** $S_{\text{yan}} = \pi R l$
- **Tam səthinin sahəsi:** $S_{\text{tam}} = \pi R(R + l)$
- **Həcmi:**
$$V = \frac{1}{3} \pi R^2 h$$

### 3. Kürə və Sfera
Yarımçevrənin diametri ətrafında fırlanmasından **sfera**, yarım dairənin fırlanmasından **kürə** alınır.
- **Sferanın sahəsi:**
$$S = 4\pi R^2$$
- **Kürənin həcmi:**
$$V = \frac{4}{3}\pi R^3$$
    `,
    keyFormulas: [
      {
            "id": "f-m11-u3-1",
            "name": "Silindrin Həcmi",
            "latex": "V = \\pi R^2 h",
            "description": "Dairəvi oturacağın sahəsi ilə hündürlüyün hasilidir."
      },
      {
            "id": "f-m11-u3-2",
            "name": "Kürənin Həcmi",
            "latex": "V = \\frac{4}{3}\\pi R^3",
            "description": "Radiusun kubu ilə mütənasib həcm düsturu."
      }
],
    glossary: [
      {
            "term": "Doğuran (l)",
            "definition": "Fırlanma cisminin yan səthini əmələ gətirən hərəkət edən parça."
      },
      {
            "term": "Sfera",
            "definition": "Fəzada verilmiş mərkəzdən eyni məsafədə olan nöqtələr çoxluğu (kürənin səthi)."
      }
],
    solvedExamples: [
      {
            "id": "ex-m11-u3-1",
            "question": "Radiusu $R = 3$ sm və hündürlüyü $h = 5$ sm olan silindrin həcmini tapın ($\\pi$ saxlanılsın).",
            "solution": "$V = \\pi R^2 h = \\pi \\cdot 3^2 \\cdot 5 = \\pi \\cdot 9 \\cdot 5 = 45\\pi \\text{ sm}^3$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m11-u3-1",
            "question": "Radiusu 3 sm olan sferanın səthinin sahəsi neçə $\\pi \\text{ sm}^2$-dir?",
            "options": [
                  {
                        "key": "A",
                        "text": "12π"
                  },
                  {
                        "key": "B",
                        "text": "27π"
                  },
                  {
                        "key": "C",
                        "text": "36π"
                  },
                  {
                        "key": "D",
                        "text": "54π"
                  }
            ],
            "correctKey": "C",
            "explanation": "S = 4 * π * R^2 = 4 * π * 3^2 = 4 * 9 * π = 36π."
      }
]
  },

  {
    id: 'lesson-math-11-u4-complex-numbers',
    subjectId: 'riyaziyyat',
    grade: 11,
    unit: 'Bölmə 4: Kompleks ədədlər',
    unitOrder: 4,
    title: 'Kompleks ədədlərin cəbri və triqonometrik şəkli',
    order: 1,
    readTimeMinutes: 11,
    difficulty: 3,
    summary: 'Xəyali vahid $i^2 = -1$, kompleks ədədin cəbri şəkli $z = a + bi$, modul $|z|$ və arqument $\varphi$, triqonometrik şəkil və Muavr düsturu.',
    theoryMarkdown: `
### 1. Kompleks Ədədin Cəbri Şəkli
$i^2 = -1$ şərtini ödəyən $i$ simvoluna **xəyali vahid** deyilir.
$z = a + bi$ ($a, b \in \mathbb{R}$) şəkilli ifadəyə **kompleks ədəd** deyilir:
- $a = \text{Re}(z)$ — həqiqi hissə
- $b = \text{Im}(z)$ — xəyali hissə
- **Qoşma kompleks ədəd:** $\bar{z} = a - bi$. Hasilləri həqiqi ədəddir: $z \cdot \bar{z} = a^2 + b^2$.

### 2. Modul və Arqument
Kompleks müstəvidə $z(a; b)$ nöqtəsi üçün:
- **Modul:** $|z| = r = \sqrt{a^2 + b^2}$
- **Arqument ($\varphi$):** $\cos \varphi = \frac{a}{r}, \quad \sin \varphi = \frac{b}{r}$

### 3. Triqonometrik Şəkil və Muavr Düsturu
- **Triqonometrik şəkil:**
$$z = r(\cos \varphi + i \sin \varphi)$$
- **Qüvvətə yüksəltmə (Muavr düsturu):**
$$z^n = r^n(\cos(n\varphi) + i \sin(n\varphi))$$
    `,
    keyFormulas: [
      {
            "id": "f-m11-u4-1",
            "name": "Kompleks Ədədin Modulu",
            "latex": "|z| = \\sqrt{a^2 + b^2}",
            "description": "Koordinat başlanğıcından həmin nöqtəyə qədər olan məsafədir."
      },
      {
            "id": "f-m11-u4-2",
            "name": "Muavr Düsturu",
            "latex": "z^n = r^n(\\cos(n\\varphi) + i\\sin(n\\varphi))",
            "description": "Kompleks ədədin n-ci qüvvətə yüksəldilməsi qaydası."
      }
],
    glossary: [
      {
            "term": "Xəyali vahid (i)",
            "definition": "Kvadratı -1 olan xəyali riyazi kəmiyyət."
      },
      {
            "term": "Qoşma kompleks ədəd",
            "definition": "Yalnız xəyali hissəsinin işarəsi ilə fərqlənən ədəd (a + bi və a - bi)."
      }
],
    solvedExamples: [
      {
            "id": "ex-m11-u4-1",
            "question": "$z = 3 + 4i$ kompleks ədədinin modulunu tapın.",
            "solution": "$|z| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m11-u4-1",
            "question": "$i^4$ ifadəsinin qiyməti nəyə bərabərdir?",
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
            "explanation": "i^2 = -1 olduğundan, i^4 = (i^2)^2 = (-1)^2 = 1."
      }
]
  },

  {
    id: 'lesson-math-11-u5-bernoulli',
    subjectId: 'riyaziyyat',
    grade: 11,
    unit: 'Bölmə 5: Birləşmələr nəzəriyyəsi və Ehtimal paylanmaları',
    unitOrder: 5,
    title: 'Bernulli sınaqları və təsadüfi kəmiyyətin paylanma qanunu',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 3,
    summary: 'Müstəqil sınaqlar ardıcıllığı, Bernulli düsturu $P_n(k) = C_n^k p^k q^{n-k}$, diskret təsadüfi kəmiyyət, riyazi gözləmə $M(X)$ və dispersiya $D(X)$.',
    theoryMarkdown: `
### 1. Bernulli Sınaqları
Eyni şəraitdə aparılan və bir-birindən asılı olmayan $n$ sayda sınağın hər birində $A$ hadisəsinin baş vermə ehtimalı sabit $p$-yə bərabərdirsə ($q = 1 - p$ baş verməmə ehtimalı), bu sınaqlara **Bernulli sınaqları** deyilir.
- $n$ sınaqda hadisənin dəqiq $k$ dəfə baş verməsi ehtimalı **Bernulli düsturu** ilə hesablanır:
$$P_n(k) = C_n^k p^k q^{n-k} = \frac{n!}{k!(n-k)!} p^k (1-p)^{n-k}$$

### 2. Diskret Təsadüfi Kəmiyyətin Xarakteristikaları
Təsadüfi kəmiyyətin ala biləcəyi qiymətlər $x_1, x_2, \dots, x_n$ və uyğun ehtimallar $p_1, p_2, \dots, p_n$ olduqda ($\sum p_i = 1$):
- **Riyazi gözləmə (orta qiymət):**
$$M(X) = \sum_{i=1}^n x_i p_i = x_1 p_1 + x_2 p_2 + \dots + x_n p_n$$
Bernulli paylanması üçün: $M(X) = n \cdot p$.
- **Dispersiya (səpələnmə ölçüsü):**
$$D(X) = M(X^2) - [M(X)]^2$$
Bernulli paylanması üçün: $D(X) = n \cdot p \cdot q$.
    `,
    keyFormulas: [
      {
            "id": "f-m11-u5-1",
            "name": "Bernulli Düsturu",
            "latex": "P_n(k) = C_n^k p^k q^{n-k}",
            "description": "n müstəqil sınaqda hadisənin k dəfə baş vermə ehtimalıdır."
      },
      {
            "id": "f-m11-u5-2",
            "name": "Riyazi Gözləmə",
            "latex": "M(X) = \\sum x_i p_i",
            "description": "Təsadüfi kəmiyyətin orta qiymətidir."
      }
],
    glossary: [
      {
            "term": "Bernulli sxemi",
            "definition": "Hər addımda yalnız iki mümkün nəticəsi (uğur və ya uğursuzluq) olan müstəqil sınaqlar ardıcıllığı."
      },
      {
            "term": "Riyazi gözləmə",
            "definition": "Təsadüfi kəmiyyətin mümkün qiymətlərinin ehtimallara görə çəkili ortası."
      }
],
    solvedExamples: [
      {
            "id": "ex-m11-u5-1",
            "question": "Qəpik 4 dəfə atılır. Dəqiq 2 dəfə xəritə (rəqəm) üzünün düşmə ehtimalını tapın.",
            "solution": "$n = 4, k = 2, p = 0.5, q = 0.5$. $P_4(2) = C_4^2 (0.5)^2 (0.5)^2 = 6 \\cdot \\frac{1}{4} \\cdot \\frac{1}{4} = \\frac{6}{16} = \\frac{3}{8} = 0.375$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m11-u5-1",
            "question": "Hər atışda hədəfi vurma ehtimalı p=0.8 olarsa, 10 atışda riyazi gözləmə M(X) neçədir?",
            "options": [
                  {
                        "key": "A",
                        "text": "5"
                  },
                  {
                        "key": "B",
                        "text": "8"
                  },
                  {
                        "key": "C",
                        "text": "0.8"
                  },
                  {
                        "key": "D",
                        "text": "1.6"
                  }
            ],
            "correctKey": "B",
            "explanation": "Bernulli paylanmasında riyazi gözləmə M(X) = n * p = 10 * 0.8 = 8."
      }
]
  },

  {
    id: 'lesson-math-11-u6-space-vectors',
    subjectId: 'riyaziyyat',
    grade: 11,
    unit: 'Bölmə 6: Fəzada koordinatlar və Vektorlar',
    unitOrder: 6,
    title: 'Fəzada düzbucaqlı koordinat sistemi və vektorlar',
    order: 1,
    readTimeMinutes: 10,
    difficulty: 3,
    summary: 'Fəzada nöqtə $M(x, y, z)$, iki nöqtə arasındakı məsafə, parçanın ortasının koordinatları, fəzada vektorun modulu və skalyar hasili.',
    theoryMarkdown: `
### 1. Fəzada Koordinat Sistemi
Fəzada bir nöqtədə kəsişən üç qarşılıqlı perpendikulyar koordinat oxu:
- $Ox$ — absis oxu
- $Oy$ — ordinat oxu
- $Oz$ — aplikat oxu
Fəzadakı istənilən nöqtə üçlüklə təyin olunur: $M(x; y; z)$.

### 2. İki Nöqtə Arasındakı Məsafə
$A(x_1; y_1; z_1)$ və $B(x_2; y_2; z_2)$ nöqtələri arasındakı məsafə:
$$d = |AB| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$
- Parçanın ortasının koordinatları: $x_0 = \frac{x_1 + x_2}{2}, y_0 = \frac{y_1 + y_2}{2}, z_0 = \frac{z_1 + z_2}{2}$.

### 3. Fəzada Vektorlar
$\vec{a}(x_1; y_1; z_1)$ və $\vec{b}(x_2; y_2; z_2)$ vektorları üçün:
- **Uzunluq (modul):** $|\vec{a}| = \sqrt{x_1^2 + y_1^2 + z_1^2}$
- **Skalyar hasil:**
$$\vec{a} \cdot \vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2 = |\vec{a}| \cdot |\vec{b}| \cdot \cos \varphi$$
- **Vektorlar arasındakı bucağın kosinusu:**
$$\cos \varphi = \frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\sqrt{x_1^2 + y_1^2 + z_1^2} \cdot \sqrt{x_2^2 + y_2^2 + z_2^2}}$$
- **Perpendikulyarlıq şərti:** $x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$.
    `,
    keyFormulas: [
      {
            "id": "f-m11-u6-1",
            "name": "Fəzada İki Nöqtə Arasındakı Məsafə",
            "latex": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}",
            "description": "Pifaqor teoreminin 3 ölçülü fəzaya ümumiləşməsidir."
      },
      {
            "id": "f-m11-u6-2",
            "name": "Fəzada Skalyar Hasil",
            "latex": "\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2",
            "description": "Fəza vektorlarının uyğun koordinatlarının hasillərinin cəmidir."
      }
],
    glossary: [
      {
            "term": "Aplikat oxu",
            "definition": "Fəzada üçüncü şaquli z oxu."
      },
      {
            "term": "Fəzada skalyar hasil",
            "definition": "Fəzada iki vektorun koordinatlarının bir-birinə hasillərinin cəmi."
      }
],
    solvedExamples: [
      {
            "id": "ex-m11-u6-1",
            "question": "$A(1; 2; 3)$ və $B(3; 2; 5)$ nöqtələri arasındakı məsafəni tapın.",
            "solution": "$d = \\sqrt{(3-1)^2 + (2-2)^2 + (5-3)^2} = \\sqrt{2^2 + 0^2 + 2^2} = \\sqrt{4 + 0 + 4} = \\sqrt{8} = 2\\sqrt{2}$."
      }
],
    miniQuiz: [
      {
            "questionId": "mq-m11-u6-1",
            "question": "$\\vec{a}(1; 2; 2)$ vektorunun uzunluğunu tapın.",
            "options": [
                  {
                        "key": "A",
                        "text": "3"
                  },
                  {
                        "key": "B",
                        "text": "5"
                  },
                  {
                        "key": "C",
                        "text": "9"
                  },
                  {
                        "key": "D",
                        "text": "√5"
                  }
            ],
            "correctKey": "A",
            "explanation": "|a| = √(1^2 + 2^2 + 2^2) = √(1 + 4 + 4) = √9 = 3."
      }
]
  }
,

  // =========================================================================
  // DİGƏR FƏNLƏR (Fizika, Kimya, Biologiya, Tarix, Coğrafiya, Azərbaycan dili, İngilis dili, İnformatika)
  // =========================================================================
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
    subjectId: 'xarici_dil',
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
