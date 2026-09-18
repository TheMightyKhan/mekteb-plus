// MəktəbPlus - Bütün Fənlər və Siniflər Üzrə Genişləndirilmiş Dərslər Kataloqu
// 9 Fənn: Riyaziyyat, Azərbaycan dili, Fizika, Kimya, Biologiya, Coğrafiya, Tarix, İngilis dili, İnformatika
// Bütün Siniflər: 6, 7, 8, 9, 10, 11
// AR Elm və Təhsil Nazirliyi e-Dərslik (6-11-ci siniflər) 100% rəsmi proqramına uyğun təşkil edilmişdir.

export const MOCK_LESSONS = [
  // =========================================================================
  // 1. RİYAZİYYAT (AR Elm və Təhsil Nazirliyi e-Dərslik: 6, 7, 8, 9, 10, 11 - 41 Bölmə)
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
  // 2. AZƏRBAYCAN DİLİ (AR Elm və Təhsil Nazirliyi e-Dərslik: 6, 7, 8, 9, 10, 11 - 35 Bölmə)
  // =========================================================================
  {
            id: 'lesson-azeri-6-u1-lexicon',
            subjectId: 'azerbaycan_dili',
            grade: 6,
            unit: 'Bölmə 1: Sözün leksik və qrammatik mənası. Omonimlər, sinonimlər, antonimlər',
            unitOrder: 1,
            title: 'Sözün mənaları: Təkmənalı və çoxmənalı sözlər, omonimlər, sinonimlər, antonimlər',
            order: 1,
            readTimeMinutes: 9,
            difficulty: 1,
            summary: 'Sözün leksik və qrammatik mənası, həqiqi və məcazi məna, çoxmənalılıq, omonimlər, sinonimlər və antonimlər.',
            theoryMarkdown: `
        ### 1. Sözün Leksik və Qrammatik Mənası
        - **Leksik məna:** Sözün birbaşa ifadə etdiyi məzmun, ilkin anlayışdır. Sözün leksik mənası izahlı lüğətdə verilir.
        - **Qrammatik məna:** Sözün hansı nitq hissəsinə aid olması, hansı qrammatik şəkilçiləri qəbul etməsi və cümlədə hansı üzv olmasıdır.

        ### 2. Təkmənalı və Çoxmənalı Sözlər
        - **Təkmənalı sözlər:** Yalnız bir leksik mənası olan sözlərdir (məsələn: *kompüter, kərgədan, biologiya*).
        - **Çoxmənalı sözlər:** İlkin həqiqi məna ilə yanaşı, oxşarlıq əsasında yeni məcazi mənalar qazanan sözlərdir (məsələn: *göz:* insanın gözü, bulağın gözü, şkafın gözü). Çoxmənalı sözlərin bütün mənaları eyni nitq hissəsinə aid olur.

        ### 3. Omonimlər, Sinonimlər və Antonimlər
        - **Omonimlər:** Deyilişi və yazılışı eyni, lakin leksik mənaları tamamilə fərqli olan sözlərdir (məsələn: *bağ* — meyvə bağı / bağlamaq üçün ip; *çay* — axar su / içki). Omonimlər həm eyni, həm də fərqli nitq hissələrinə aid ola bilər.
        - **Sinonimlər:** Yazılışı və deyilişi fərqli, mənaları yaxın olan sözlərdir (məsələn: *gözəl — qəşəng — göyçək*). Yalnız eyni nitq hissəsinə aid olurlar.
        - **Antonimlər:** Bir-birinə əks mənalı sözlərdir (məsələn: *ağ — qara, böyük — kiçik, gecə — gündüz*). Yalnız eyni nitq hissəsinə aid olurlar.
            `,
            keyFormulas: [
              {
                    "id": "f-az6-u1-1",
                    "name": "Omonimlə Çoxmənalı Sözün Fərqi",
                    "latex": "\\text{Çoxmənalı} \\implies \\text{Məcazilik və əlaqə var}; \\quad \\text{Omonim} \\implies \\text{Tam fərqli mənalar}",
                    "description": "Çoxmənalı sözlər arasında məna bağlılığı qalır, omonimlərdə isə mənalar tamamilə ayrıdır."
              }
        ],
            glossary: [
              {
                    "term": "Leksika",
                    "definition": "Dildəki bütün sözlərin məcmusu, lüğət tərkibi."
              },
              {
                    "term": "Omonim",
                    "definition": "Yazılışı və tələffüzü eyni, leksik mənaları tamamilə müxtəlif olan sözlər."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az6-u1-1",
                    "question": "\"Dəmir qapı\" və \"dəmir iradə\" birləşmələrində \"dəmir\" sözünün mənasını təhlil edin.",
                    "solution": "\"Dəmir qapı\" birləşməsində maddə həqiqətən dəmirdir (həqiqi məna). \"Dəmir iradə\" birləşməsində isə möhkəmlik mənasında məcazi işlənmiş çoxmənalı sözdür."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az6-u1-1",
                    "question": "Aşağıdakı cütlüklərdən hansı antonimdir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Hündür — Uca"
                          },
                          {
                                "key": "B",
                                "text": "Geniş — Dar"
                          },
                          {
                                "key": "C",
                                "text": "Kök — Şəkilçi"
                          },
                          {
                                "key": "D",
                                "text": "Ağac — Yarpaq"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Geniş və dar sözləri bir-birinə əks məna bildirən antonimlərdir."
              }
        ]
          },

  {
            id: 'lesson-azeri-6-u2-morphology-roots',
            subjectId: 'azerbaycan_dili',
            grade: 6,
            unit: 'Bölmə 2: Sözün tərkibi və söz yaradıcılığı',
            unitOrder: 2,
            title: 'Kök və şəkilçi, leksik və qrammatik şəkilçilər, eyniköklü sözlər',
            order: 1,
            readTimeMinutes: 9,
            difficulty: 1,
            summary: 'Sözün tərkibi (kök və şəkilçi), leksik və qrammatik şəkilçilərin fərqi, şəkilçilərin variantları və eyniköklü sözlərin xüsusiyyətləri.',
            theoryMarkdown: `
        ### 1. Kök və Şəkilçi
        - **Kök:** Sözün mənalı və ayrılmaz əsas hissəsidir (simvolu: $\cap$).
        - **Şəkilçi:** Sözün kökünə qoşularaq ya yeni söz düzəldən, ya da sözü digər sözlərlə əlaqələndirən hissəcikdir.

        ### 2. Leksik və Qrammatik Şəkilçilər
        - **Leksik (sözdüzəldici) şəkilçilər:** Sözün kökünə qoşularaq yeni leksik mənalı söz yaradır: *dəniz \to dənizçi, duz \to duzlu*.
        - **Qrammatik (sözdəyişdirici) şəkilçilər:** Sözün leksik mənasını dəyişmir, yalnız formasını dəyişib cümlədə digər sözlərlə əlaqələndirir: cəm (-lar/-lər), mənsubiyyət, hal və xəbərlik şəkilçiləri.

        ### 3. Şəkilçilərin Variantları və Ahəng Qanunu
        Ahəng qanununa uyğun olaraq şəkilçilər:
        - **Birvariantlı:** Adətən alınma şəkilçilərdir (-bi, -na, -keş, -dar, -pərəst, -xana).
        - **İkivariantlı:** Qalın və incə saitlərə görə: *-lar / -lər, -da / -də*.
        - **Dördvariantlı:** Qapalı saitlərin ahənginə görə: *-çı / -çi / -çu / -çü, -lı / -li / -lu / -lü*.

        ### 4. Eyniköklü Sözlər
        Eyni bir kökdən leksik şəkilçilər vasitəsilə yaranmış düzəltmə sözlərə **eyniköklü sözlər** deyilir. Eyniköklü sözlərin kökü mütləq eyni nitq hissəsi və eyni leksik məna olmalıdır (məsələn: *gül-çü, gül-dan, gül-lük* eyniköklüdür; lakin *gülmək* feli ilə *gül* ismi eyniköklü deyil).
            `,
            keyFormulas: [
              {
                    "id": "f-az6-u2-1",
                    "name": "Sözün Quruluş Sxemi",
                    "latex": "\\text{Kök} + \\text{Leksik şəkilçi} + \\text{Qrammatik şəkilçi}",
                    "description": "Azərbaycan dilində adi ardıcıllıq kök, leksik və ən sonda qrammatik şəkilçilərdir."
              }
        ],
            glossary: [
              {
                    "term": "Eyniköklü sözlər",
                    "definition": "Kökü eyni nitq hissəsinə aid olan və leksik şəkilçilərlə yaranan düzəltmə sözlər qrupu."
              },
              {
                    "term": "Ahəng qanunu",
                    "definition": "Sözdə qalın və ya incə saitlərin bir-birini izləməsi qanunu."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az6-u2-1",
                    "question": "\"Bağbanlarımızdan\" sözünü tərkibinə (kök və şəkilçilərə) görə təhlil edin.",
                    "solution": "bağ (kök) + -ban (leksik şəkilçi) + -lar (cəm qrammatik) + -ımız (mənsubiyyət qrammatik) + -dan (çıxışlıq hal qrammatik)."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az6-u2-1",
                    "question": "Aşağıdakı sözlərdən hansı \"yağ\" (yağlamaq) feli ilə eyniköklü deyil?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Yağlı"
                          },
                          {
                                "key": "B",
                                "text": "Yağsız"
                          },
                          {
                                "key": "C",
                                "text": "Yağış"
                          },
                          {
                                "key": "D",
                                "text": "Yağla"
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "Yağış sözünün kökü 'yağmaq' təbiət hadisəsi felidir, sürtülən yağ ismi deyil."
              }
        ]
          },

  {
            id: 'lesson-azeri-6-u3-noun',
            subjectId: 'azerbaycan_dili',
            grade: 6,
            unit: 'Bölmə 3: İsim. İsimlərin qrammatik xüsusiyyətləri',
            unitOrder: 3,
            title: 'İsim: Quruluşca növləri, mənsubiyyət, hal və xəbərlik kateqoriyaları',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 1,
            summary: 'Konkret və mücərrəd, ümumi və xüsusi isimlər, ismin halları (6 hal), mənsubiyyət və şəxs (xəbərlik) şəkilçiləri.',
            theoryMarkdown: `
        ### 1. İsmin Əsas Əlamətləri
        Əşyanın adını bildirən, *Kim? Nə? Hara?* suallarına cavab verən əsas nitq hissəsinə **isim** deyilir.
        - **Konkret isimlər:** Gözlə görünən, toxunula bilən (kitab, su, ağac).
        - **Mücərrəd isimlər:** Duyğular, anlayışlar, toxunulmaz (arzu, xəyal, ağıl, sevgi).
        - **Ümumi və xüsusi isimlər:** Eynicinsli əşyaların adı ümumi, tək olan varlıqlara verilən fərdi adlar isə xüsusi isimlərdir (böyük hərflə yazılır).

        ### 2. İsmin Quruluşca Növləri
        - **Sadə:** Yalnız kökdən və ya kök+qrammatik şəkilçidən ibarət olur (*ev, qələmlər*).
        - **Düzəltmə:** Leksik şəkilçilər vasitəsilə yaranır (*dənizçi, yaxşılıq, meşəlik*).
        - **Mürəkkəb:** İki və ya daha artıq sözün birləşməsindən yaranır (*dəvədabanı, tozsoran, günəbaxan*).

        ### 3. İsmin Halları (6 Hal)
        1. **Adlıq hal:** Şəkilçisi yoxdur (*kitab*).
        2. **Yiyəlik hal:** *-ın⁴, -nın⁴* (*kitabın*). Müəyyən və qeyri-müəyyən olur.
        3. **Yönlük hal:** *-a², -ya²* (*kitaba*).
        4. **Təsirlik hal:** *-ı⁴, -nı⁴* (*kitabı*). Müəyyən və qeyri-müəyyən olur.
        5. **Yerlik hal:** *-da², -də²* (*kitabda*).
        6. **Çıxışlıq hal:** *-dan², -dən²* (*kitabdan*).
            `,
            keyFormulas: [
              {
                    "id": "f-az6-u3-1",
                    "name": "İsmin Hal Şəkilçiləri Cədvəli",
                    "latex": "\\text{Yiyəlik: } -ın^4; \\quad \\text{Yönlük: } -a^2; \\quad \\text{Təsirlik: } -ı^4; \\quad \\text{Yerlik: } -da^2; \\quad \\text{Çıxışlıq: } -dan^2",
                    "description": "Altı halın qrammatik göstəriciləridir."
              }
        ],
            glossary: [
              {
                    "term": "Mənsubiyyət",
                    "definition": "Əşyanın hansı şəxsə aid olduğunu bildirən qrammatik kateqoriya."
              },
              {
                    "term": "Təsirlik hal",
                    "definition": "Hərəkətin bilavasitə obyektini bildirən və vasitəsiz tamamlıq vəzifəsində çıxış edən hal."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az6-u3-1",
                    "question": "\"Dünən kənddən gəldim\" cümləsində \"kənddən\" sözünün halını və sintaktik rolunu müəyyən edin.",
                    "solution": "\"Kənd-dən\" — -dən çıxışlıq hal şəkilçisidir. Haradan? sualına cavab verdiyi üçün cümlədə yer zərfliyidir."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az6-u3-1",
                    "question": "\"Qapının dəstəyi\" birləşməsində \"qapının\" sözü ismin hansı halındadır?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Adlıq hal"
                          },
                          {
                                "key": "B",
                                "text": "Yiyəlik hal"
                          },
                          {
                                "key": "C",
                                "text": "Təsirlik hal"
                          },
                          {
                                "key": "D",
                                "text": "Yerlik hal"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "-nın şəkilçisi müəyyən yiyəlik hal şəkilçisidir."
              }
        ]
          },

  {
            id: 'lesson-azeri-6-u4-adjective',
            subjectId: 'azerbaycan_dili',
            grade: 6,
            unit: 'Bölmə 4: Sifət və onun dərəcələri',
            unitOrder: 4,
            title: 'Sifət: Əlamət və keyfiyyət, müqayisə dərəcələri, isimləşmə',
            order: 1,
            readTimeMinutes: 9,
            difficulty: 1,
            summary: 'Əlamət və keyfiyyət bildirən sifətlər, sifətin 3 müqayisə dərəcəsi (adi, azaltma, çoxaltma) və substantivləşmə (isimləşmə).',
            theoryMarkdown: `
        ### 1. Sifətin Əsas Əlamətləri
        Əşyanın əlamətini və ya keyfiyyətini bildirən, *Necə? Nə cür? Hansı?* suallarına cavab verən əsas nitq hissəsinə **sifət** deyilir.
        - **Əlamət:** Xaricdən gözlə görünən forma, rəng, həcm (qırmızı, girdə, hündür).
        - **Keyfiyyət:** Daxili xüsusiyyət, mənəvi xasiyyət (ağıllı, çalışqan, tənbəl, xeyirxah).

        ### 2. Sifətin Müqayisə Dərəcələri
        1. **Adi dərəcə:** Əlamətin normada olduğunu bildirir, xüsusi şəkilçisi yoxdur (*ağ, böyük, şirin*).
        2. **Azaltma dərəcəsi:** Əlamətin normadan az olduğunu bildirir:
           - Morfoloji üsul: *-ımtıl, -sov, -şın, -raq* (*sarımtıl, uzunsov, qarayanız*).
           - Sintaktik üsul: *açıq, kəm, ala, təhər* sözləri ilə (*açıq-qırmızı, kəmşirin, alababt*).
        3. **Çoxaltma dərəcəsi:** Əlamətin normadan çox olduğunu bildirir:
           - Morfoloji üsul: *m, p, r, s* samitləri ilə (*qıpqırmızı, tərtəmiz, sap-sarı*), *-ca²* şəkilçisi (*xırdaca*).
           - Sintaktik üsul: *ən, lap, daha, olduqca, çox, dümdüz* sözləri ilə (*ən gözəl, lap yaxşı*).

        ### 3. Sifətin İsimləşməsi (Substantivləşmə)
        Sifət cümlədə təyin etdiyi ismi itirdikdə ismin sualına (*Kim? Nə?*) cavab verir, ismin şəkilçilərini qəbul edir və cümlədə mübtəda və ya tamamlıq olur:
        *Qocalar (kim?) parkda dincəlirdilər.*
            `,
            keyFormulas: [
              {
                    "id": "f-az6-u4-1",
                    "name": "Çoxaltma Dərəcəsi Qaydası",
                    "latex": "\\text{İlk heca} + [m, p, r, s] + \\text{Söz} \\implies \\text{Qıp-qırmızı, Düm-ağ}",
                    "description": "Sözün ilk hecasına m, p, r, s samitlərindən biri artırılaraq yaranır."
              }
        ],
            glossary: [
              {
                    "term": "Substantivləşmə",
                    "definition": "Sifətin cümlədə ismi əvəz edərək ismin qrammatik xüsusiyyətlərini qazanması."
              },
              {
                    "term": "Azaltma dərəcəsi",
                    "definition": "Əlamət və ya keyfiyyətin adi normadan az olduğunu bildirən dərəcə."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az6-u4-1",
                    "question": "\"Açıq-sarı\", \"qırmızımtıl\" və \"lap maraqlı\" sözlərinin dərəcələrini təyin edin.",
                    "solution": "\"Açıq-sarı\" — azaltma (sintaktik); \"qırmızımtıl\" — azaltma (morfoloji); \"lap maraqlı\" — çoxaltma (sintaktik)."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az6-u4-1",
                    "question": "Aşağıdakı sifətlərdən hansı çoxaltma dərəcəsindədir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Qaraşın"
                          },
                          {
                                "key": "B",
                                "text": "Açıq-yaşıl"
                          },
                          {
                                "key": "C",
                                "text": "Tərtəmiz"
                          },
                          {
                                "key": "D",
                                "text": "Uzunsov"
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "Tərtəmiz sözü 'r' samiti vasitəsilə çoxaltma dərəcəsində yaranmışdır."
              }
        ]
          },

  {
            id: 'lesson-azeri-6-u5-numeral',
            subjectId: 'azerbaycan_dili',
            grade: 6,
            unit: 'Bölmə 5: Say. Sayın məna növləri və orfoqrafiyası',
            unitOrder: 5,
            title: 'Say: Məna növləri, numerativ sözlər və yazılış qaydaları',
            order: 1,
            readTimeMinutes: 9,
            difficulty: 1,
            summary: 'Sayın məna növləri (miqdar, sıra), numerativ sözlər, ərəb və roma rəqəmlərinin yazılışı və defis qaydası.',
            theoryMarkdown: `
        ### 1. Sayın Məna Növləri
        Əşyanın miqdarını və ya sırasını bildirən, *Neçə? Nə qədər? Neçənci?* suallarına cavab verən əsas nitq hissəsinə **say** deyilir.
        1. **Müəyyən miqdar sayları:** Əşyanın dəqiq sayını bildirir (*beş, on iki, yüz*). Özündən sonra gələn isim həmişə tək halda olur (*beş kitab*, beş kitablar deyilməz).
        2. **Qeyri-müəyyən miqdar sayları:** Təxmini miqdar bildirir (*çox, az, xeyli, bir qədər, 5-6*).
        3. **Sıra sayları:** Əşyanın sırasını bildirir, *-ıncı⁴* şəkilçisi ilə düzəlir (*birinci, beşinci*).
        4. **Kəsr sayları:** Hissə bildirir (*üçdə bir, sıfır tam onda beş*).

        ### 2. Numerativ Sözlər
        Müəyyən miqdar sayları ilə isimlər arasında kəmiyyət fərqini dəqiqləşdirmək üçün işlənən sözlərdir:
        *nəfər, baş, ədəd, dənə, cüt, dəst, göz, tikə, damcı, ton*.

        ### 3. Sayların Orfoqrafiyası
        - Sıra sayları ərəb rəqəmləri ilə yazıldıqda şəkilçi defislə yazılır: *5-ci, 10-cu*.
        - Roma rəqəmlərindən sonra şəkilçi və ya defis yazılmır: *IX sinif, XXI əsr*.
        - Təxmini saylar defislə yazılır: *üç-dörd, yeddi-səkkiz*.
            `,
            keyFormulas: [
              {
                    "id": "f-az6-u5-1",
                    "name": "Sıra Saylarının Rəqəmlə Yazılışı",
                    "latex": "\\text{Ərəb: } 5\\text{-ci}; \\quad \\text{Roma: } V \\text{ (defissiz)}",
                    "description": "Ərəb rəqəmlərindən sonra defis və şəkilçi, Roma rəqəmlərində isə birbaşa yazılır."
              }
        ],
            glossary: [
              {
                    "term": "Numerativ söz",
                    "definition": "Sayla isim arasında işlənərək əşyanın sayılma vahidini bildirən köməkçi söz."
              },
              {
                    "term": "Kəsr sayı",
                    "definition": "Tamın hissələrini ifadə edən say növü."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az6-u5-1",
                    "question": "\"O, 3-cü sırada əyləşmişdi\" və \"VI əsr abidəsi\" cümlələrindəki sayların orfoqrafiyasını izah edin.",
                    "solution": "3-cü: Ərəb rəqəmindən sonra defis və -cü yazılması düzgündür. VI: Roma rəqəmindən sonra şəkilçi artırılmır, düzgün yazılışdır."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az6-u5-1",
                    "question": "Aşağıdakılardan hansında sayın yazılışında səhvə yol verilmişdir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "7-ci sinif"
                          },
                          {
                                "key": "B",
                                "text": "IX-cu əsr"
                          },
                          {
                                "key": "C",
                                "text": "Beş-altı nəfər"
                          },
                          {
                                "key": "D",
                                "text": "On iki kitab"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Roma rəqəmlərindən sonra şəkilçi və defis işlədilməz, yalnız IX əsr yazılmalıdır."
              }
        ]
          },

  {
            id: 'lesson-azeri-6-u6-pronoun',
            subjectId: 'azerbaycan_dili',
            grade: 6,
            unit: 'Bölmə 6: Əvəzlik və onun məna növləri',
            unitOrder: 6,
            title: 'Əvəzlik: Məna növləri, o və bu əvəzliklərindən sonra vergülün işlənməsi',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 1,
            summary: 'Əsas nitq hissələrini əvəz edən əvəzliklər (şəxs, qeyri-müəyyən, təyini, işarə, sual) və o, bu əvəzliklərindən sonra vergül qoyulması qaydaları.',
            theoryMarkdown: `
        ### 1. Əvəzliyin Məna Növləri
        İsim, sifət, say və digər nitq hissələrinin yerində işlənən əsas nitq hissəsinə **əvəzlik** deyilir.
        1. **Şəxs əvəzlikləri:** Mən, sən, o, biz, siz, onlar (yalnız ismin yerində işlənir).
        2. **İşarə əvəzlikləri:** O, bu, elə, belə, həmin (əlamət və əşyaya işarə edir).
        3. **Qeyri-müəyyən əvəzliklər:** Biri, kimsə, nəsə, hər kəs, hamı, bəzi, heç kim.
        4. **Təyini əvəzliklər:** Hər, öz, bütün, filan, eyni.
        5. **Sual əvəzlikləri:** Kim? Nə? Hara? Necə? Neçə? Hansı?

        ### 2. "O" və "Bu" Əvəzliklərindən Sonra Vergül Qaydası
        "O" və "bu" cümlədə **mübtəda** vəzifəsində çıxış etdikdə (*Kim? Nə?* sualına cavab verdikdə):
        - Özündən sonra **isim, sifət, say, zərf, feli sifət** və ya **modal söz** gələrsə, **vergül qoyulur**:
          *O, çalışqan şagirddir (sifət).*
          *Bu, məktəb binasıdır (isim).*
        - Özündən sonra **fel (feli xəbər), əvəzlik** və ya **köməkçi nitq hissələri** (qoşma, bağlayıcı, ədat) gələrsə, **vergül qoyulmaz**:
          *O gəldi (fel).*
          *O da bilir (ədat).*
          *Bu mənim qələmimdir (əvəzlik).*
            `,
            keyFormulas: [
              {
                    "id": "f-az6-u6-1",
                    "name": "O, Bu Mübtədadan Sonra Vergül",
                    "latex": "\\text{O / Bu (mübtəda)} + [\\text{İsim, Sifət, Say, Zərf}] \\implies \\text{Vergül qoyulur}",
                    "description": "Əsas adlar gəldikdə vergül qoyulur, fel və əvəzlik gəldikdə qoyulmur."
              }
        ],
            glossary: [
              {
                    "term": "Təyini əvəzlik",
                    "definition": "Öz, hər, bütün kimi əşyanı ümumi şəkildə təyin edən əvəzliklər."
              },
              {
                    "term": "Mübtəda vəzifəsində əvəzlik",
                    "definition": "Cümlədə kim? nə? sualına cavab verən və hərəkətin icraçısını bildirən əvəzlik."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az6-u6-1",
                    "question": "\"O məktəbə tələsirdi\" və \"O, məktəb direktorudur\" cümlələrində vergülün işlənməsini əsaslandırın.",
                    "solution": "Birinci cümlədə 'o' işarə əvəzliyidir (hansı məktəbə?) və təyindir, vergül qoyulmaz. İkinci cümlədə 'o' mübtədadır (kim?) və ardınca isim ('məktəb') gəldiyi üçün vergül qoyulur."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az6-u6-1",
                    "question": "Aşağıdakı cümlələrin hansında \"o\" əvəzliyindən sonra vergül qoyulmalıdır?",
                    "options": [
                          {
                                "key": "A",
                                "text": "O oxumağı çox sevir."
                          },
                          {
                                "key": "B",
                                "text": "O gələndə biz evdə idik."
                          },
                          {
                                "key": "C",
                                "text": "O maraqlı bir kitab aldı."
                          },
                          {
                                "key": "D",
                                "text": "O da dərslərini hazırladı."
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "C bəndində 'O' mübtədadır və özündən sonra sifət ('maraqlı') gəldiyi üçün vergül qoyulmalıdır."
              }
        ]
          },

  {
            id: 'lesson-azeri-7-u1-verbs-tenses',
            subjectId: 'azerbaycan_dili',
            grade: 7,
            unit: 'Bölmə 1: Fel. Felin quruluşca növləri və təsriflənməsi',
            unitOrder: 1,
            title: 'Felin quruluşca növləri, təsdiq və inkar, felin zamanları',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Hərəkət bildirən fellər, quruluşca növləri, -ma/-mə inkar şəkilçisi və felin üç zamanı (keçmiş, indiki, gələcək).',
            theoryMarkdown: `
        ### 1. Felin Əsas Əlamətləri
        İş, hal, hərəkət bildirən, *Nə etdi? Nə edir? Nə edəcək?* suallarına cavab verən əsas nitq hissəsinə **fel** deyilir.
        - **Təsdiq və inkar:** Felin inkarı *-ma², -mə²* şəkilçisi ilə düzəlir (*yazdı — yazmadı*). Qeyd: İnkarlıq şəkilçisi vurğu qəbul etmir!

        ### 2. Felin Quruluşca Növləri
        - **Sadə fellər:** Yalnız bir kökdən ibarət olur (*get, bax, oxu*).
        - **Düzəltmə fellər:** Adlardan və ya fellərdən leksik şəkilçilərlə yaranır:
          *-la² (başla), -lan² (həyəcanlan), -laş² (birləş), -t (oxut), -dır⁴ (yazdır)*.
        - **Mürəkkəb fellər:**
          - Bitişik yazılanlar: *-etmək, -eləmək, -olmaq* köməkçi felləri ilə (*kömək etmək, qəbul olmaq*).
          - Defislə yazılanlar: Yaxın və əks mənalı fellərin birləşməsi (*atıb-tutmaq, gedib-gəlmək*).

        ### 3. Felin Zamanları
        1. **Keçmiş zaman:**
           - Şühudi (gözlə görülən): *-dı⁴* (*yazdı, gördü*).
           - Nəqli (eşidilən): *-mış⁴* və ya *-ıb⁴* (*yazmışdır, gəlibdir*).
        2. **İndiki zaman:** *-ır⁴* (*yazır, oxuyur*).
        3. **Gələcək zaman:**
           - Qəti gələcək: *-acaq²* (*yazacaq, gələcək*).
           - Qeyri-qəti gələcək: *-ar²* (*yazar, gələr*).
            `,
            keyFormulas: [
              {
                    "id": "f-az7-u1-1",
                    "name": "Felin Zaman Şəkilçiləri",
                    "latex": "\\text{Keçmiş: } -dı^4, -mış^4; \\quad \\text{İndiki: } -ır^4; \\quad \\text{Gələcək: } -acaq^2, -ar^2",
                    "description": "Felin üç əsas qrammatik zamanının göstəriciləridir."
              }
        ],
            glossary: [
              {
                    "term": "Şühudi keçmiş",
                    "definition": "Danışanın bilavasitə şahidi olduğu hərəkəti bildirən -dı⁴ şəkilçili keçmiş zaman."
              },
              {
                    "term": "Təsriflənən fel",
                    "definition": "Şəxsə və kəmiyyətə görə dəyişə bilən feli formalar."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az7-u1-1",
                    "question": "\"Şagirdlər sabah gələcəklər\" cümləsindəki felin zamanını və şəxsini müəyyən edin.",
                    "solution": "\"gəl-əcək-lər\": -əcək qəti gələcək zaman şəkilçisidir, -lər III şəxsin cəmidir."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az7-u1-1",
                    "question": "Aşağıdakı fellərdən hansı qeyri-qəti gələcək zamandadır?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Oxuyacaq"
                          },
                          {
                                "key": "B",
                                "text": "Yazır"
                          },
                          {
                                "key": "C",
                                "text": "Baxar"
                          },
                          {
                                "key": "D",
                                "text": "Gəlmişdir"
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "-ar² şəkilçisi qeyri-qəti gələcək zaman şəkilçisidir (bax-ar)."
              }
        ]
          },

  {
            id: 'lesson-azeri-7-u2-verb-voices',
            subjectId: 'azerbaycan_dili',
            grade: 7,
            unit: 'Bölmə 2: Felin qrammatik məna növləri',
            unitOrder: 2,
            title: 'Felin qrammatik məna növləri: Məlum, məchul, qayıdış, qarşılıqlı-birgəlik, icbar',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Subyekt və obyekt münasibəti: məlum, məchul (-ıl⁴, -ın⁴), qayıdış (-ın⁴), şəxssiz, qarşılıqlı-birgəlik (-ış⁴) və icbar (-dır⁴, -t) növlər.',
            theoryMarkdown: `
        ### 1. Qrammatik Məna Növləri Nədir?
        Hərəkəti icra edən (subyekt) ilə üzərində iş görülən (obyekt) arasındakı münasibəti ifadə edən kateqoriyadır.

        ### 2. Növlərin Xüsusiyyətləri və Şəkilçiləri
        1. **Məlum növ:** İşi görən subyekt məlumdur. Xüsusi şəkilçisi yoxdur (*Əli məktubu yazdı*).
        2. **Məchul növ:** İşi görən qrammatik subyekt məlum deyil, obyekt cümlənin mübtədası olur. Şəkilçiləri: *-ıl⁴, -ın⁴* (*Məktub yazıldı, qapı açıldı*).
        3. **Qayıdış növ:** Hərəkəti görən subyekt işi öz üzərində icra edir. Şəkilçiləri: *-ın⁴, -ıl⁴* (*Duman çəkildi, hava açıldı, qız bəzəndi*).
        4. **Şəxssiz növ:** Həm subyekti olmur, həm də mübtəda tələb etmir (*Məsələyə baxıldı, sənədlərə qol çəkildi*).
        5. **Qarşılıqlı-birgəlik növ:** Hərəkət qarşı-qarşıya və ya müştərək icra edilir. Şəkilçisi: *-ış⁴* (*məktublaşmaq, vuruşmaq, gülüşmək*).
        6. **İcbar növ:** Hərəkəti danışan və ya icraçı yox, başqası icra edir. Şəkilçisi: *-dır⁴, -t* (*yazdırmaq, təmizlətmək*).
            `,
            keyFormulas: [
              {
                    "id": "f-az7-u2-1",
                    "name": "Qayıdış və Məchul Fərqi",
                    "latex": "\\text{Məchul} \\implies \\text{İşi başqası görür}; \\quad \\text{Qayıdış} \\implies \\text{Öz üzərində icra olunur}",
                    "description": "-ın⁴ şəkilçisi hər iki növü düzəldə bilər, məna fərqinə görə ayrılır."
              }
        ],
            glossary: [
              {
                    "term": "Məchul növ",
                    "definition": "İşi icra edənin qrammatik cəhətdən məlum olmadığı feli forma."
              },
              {
                    "term": "İcbar növ",
                    "definition": "İşin başqa bir şəxsə gördürülməsini bildirən növ."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az7-u2-1",
                    "question": "\"Paltar yuyuldu\" və \"Uşaq yuyundu\" fellərinin qrammatik məna növlərini müqayisə edin.",
                    "solution": "\"Paltar yuyuldu\" — məchul növdür, çünki paltarı kimsə başqası yuyub. \"Uşaq yuyundu\" — qayıdış növdür, çünki uşaq özü-özünü yuyub."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az7-u2-1",
                    "question": "\"Müəllim mətni şagirdə oxutdurdu\" cümləsindəki fel hansı növdədir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Məlum növ"
                          },
                          {
                                "key": "B",
                                "text": "Məchul növ"
                          },
                          {
                                "key": "C",
                                "text": "Qarşılıqlı növ"
                          },
                          {
                                "key": "D",
                                "text": "İcbar növ"
                          }
                    ],
                    "correctKey": "D",
                    "explanation": "Hərəkət başqasına gördürülür və -dur şəkilçisi var, yəni icbar növdür."
              }
        ]
          },

  {
            id: 'lesson-azeri-7-u3-verb-moods',
            subjectId: 'azerbaycan_dili',
            grade: 7,
            unit: 'Bölmə 3: Felin şəkilləri',
            unitOrder: 3,
            title: 'Felin şəkilləri: Əmr, xəbər, arzu, vacib, lazım, şərt',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Felin 6 qrammatik şəkli, onların şəkilçiləri, idi, imiş, isə hissəcikləri ilə işlənməsi.',
            theoryMarkdown: `
        ### 1. Felin Şəkilləri Nədir?
        Danışanın icra edilən işə, hərəkətə münasibətini bildirən qrammatik kateqoriyadır.

        ### 2. 6 Feli Şəkil
        1. **Əmr şəkli:** Əmr, xahiş, məsləhət bildirir. Xüsusi şəkilçisi yoxdur, birbaşa şəxs şəkilçiləri ilə düzəlir: *yazım, yaz, yazsın, yazaq, yazın, yazsınlar*.
        2. **Xəbər şəkli:** Hərəkətin üç zamandan birində icra edildiyini bildirir. Xüsusi şəkilçisi yoxdur, zaman şəkilçiləri ilə formalaşır: *yazır, oxudu, gələcək*.
        3. **Arzu şəkli:** Arzu, istək bildirir. Şəkilçisi: *-a², -yə²* (*yazam, oxuyasan*). Yanında *kaş, gərək* ədatları işlənir.
        4. **Vacib şəkli:** İcra edilməsinin zəruriliyini bildirir. Şəkilçisi: *-malı², -məli²* (*oxumalıyam, yazmalısan*).
        5. **Lazım şəkli:** Hərəkətin lazım olduğunu bildirir. Şəkilçisi: *-ası², -əsi²* (*gedəsiyəm, oxuyasısan*). İnkarı *deyil* sözü ilə düzəlir (*gedəsi deyiləm*).
        6. **Şərt şəkli:** Hərəkətin icrasını şərtə bağlayır. Şəkilçisi: *-sa², -sə²* (*yazsam, bilsən*).

        ### 3. İdi, İmiş, İsə Hissəcikləri
        Felin şəkillərinə qoşularaq mürəkkəb zaman və şərt formaları yaradır: *yazırdı (yazır idi), oxumalıymış (oxumalı imiş), gəlsəydi (gəlsə idi)*.
            `,
            keyFormulas: [
              {
                    "id": "f-az7-u3-1",
                    "name": "Feli Şəkillərin Şəkilçiləri",
                    "latex": "\\text{Arzu: } -a^2; \\quad \\text{Vacib: } -malı^2; \\quad \\text{Lazım: } -ası^2; \\quad \\text{Şərt: } -sa^2",
                    "description": "Felin dörd şəklinin xüsusi morfoloji şəkilçiləridir."
              }
        ],
            glossary: [
              {
                    "term": "Felin şəkli",
                    "definition": "Danışanın hərəkətin gerçəkləşməsinə münasibətini bildirən qrammatik forma."
              },
              {
                    "term": "Hissəcik",
                    "definition": "Fellərə qoşulan idi, imiş, isə qısaldılmış köməkçi sözləri."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az7-u3-1",
                    "question": "\"Gərək bu kitabı oxuyasan\" cümləsindəki fel hansı şəkildədir?",
                    "solution": "\"oxu-ya-san\": -ya arzu şəklinin şəkilçisidir, cümlədə 'gərək' arzu ədatı da var. Arzu şəkli."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az7-u3-1",
                    "question": "\"Vətəni qorumalıyıq\" cümləsində fel hansı şəkildədir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Əmr şəkli"
                          },
                          {
                                "key": "B",
                                "text": "Vacib şəkli"
                          },
                          {
                                "key": "C",
                                "text": "Lazım şəkli"
                          },
                          {
                                "key": "D",
                                "text": "Xəbər şəkli"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "-malı² şəkilçisi vacib şəklinin göstəricisidir."
              }
        ]
          },

  {
            id: 'lesson-azeri-7-u4-non-finite-verbs',
            subjectId: 'azerbaycan_dili',
            grade: 7,
            unit: 'Bölmə 4: Felin təsriflənməyən formaları',
            unitOrder: 4,
            title: 'Məsdər, feli sifət və feli bağlama',
            order: 1,
            readTimeMinutes: 11,
            difficulty: 2,
            summary: 'Felin təsriflənməyən (şəxsə və zamana görə dəyişməyən) formaları: məsdər, feli sifət və feli bağlama, onların ikili nitq xüsusiyyətləri.',
            theoryMarkdown: `
        ### 1. Təsriflənməyən Formalar Nədir?
        Şəxsə və zamana görə dəyişməyən, həm felin, həm də başqa bir nitq hissəsinin xüsusiyyətini daşıyan formalardır.

        ### 2. Məsdər (Fel + İsim)
        Hərəkətin adını bildirir, *-maq², -mək²* şəkilçisi ilə düzəlir (*oxumaq, yazmaq*).
        - **Feli xüsusiyyətləri:** Təsdiq/inkar olur (*oxumamaq*), növ bildirir (*yazılmaq*), obyekt tələb edir.
        - **İsmi xüsusiyyətləri:** İsmin sualına (*Nə?*) cavab verir, hallanır (*oxumağın, oxumağa*), mənsubiyyətə görə dəyişir (*oxumağım*).

        ### 3. Feli Sifət (Fel + Sifət)
        Həm felin, həm də sifətin əlamətlərini daşıyır.
        - Şəkilçiləri: *-an²* (gələn), *-mış⁴* (yazılmış), *-acaq²* (oxunacaq), *-ası²* (deyiləsi), *-malı²* (görülməli), *-dıq⁴ + mənsubiyyət* (oxuduğum).
        - **Sifət kimi:** Əşyanın əlamətini bildirir, cümlədə təyin olur (*ağlayan uşaq*), isimləşə bilir.

        ### 4. Feli Bağlama (Fel + Zərf)
        Həm felin, həm də zərfin xüsusiyyətlərini daşıyaraq əsas hərəkətin tərzini, zamanını və ya səbəbini bildirir. Cümlədə həmişə **zərflik** olur.
        - Şəkilçiləri: *-ıb⁴* (gəlib), *-araq²* (qaçaraq), *-anda²* (görəndə), *-dıqda⁴* (oxuduqda), *-arkən* (gedərkən), *-armac* (çatar-çatmaz).
            `,
            keyFormulas: [
              {
                    "id": "f-az7-u4-1",
                    "name": "Feli Bağlama Şəkilçiləri",
                    "latex": "-ıb^4, \\quad -araq^2, \\quad -anda^2, \\quad -dıqda^4, \\quad -arkən",
                    "description": "Əsas hərəkəti izah edən zərflik vəzifəli feli formalardır."
              }
        ],
            glossary: [
              {
                    "term": "Məsdər",
                    "definition": "Hərəkətin ilkin adını bildirən və isim xüsusiyyəti daşıyan feli forma."
              },
              {
                    "term": "Feli bağlama",
                    "definition": "Hərəkətin icra tərzini və ya zamanını zərf kimi bildirən feli forma."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az7-u4-1",
                    "question": "\"Zəng vurulanda şagirdlər sinfə daxil oldular\" cümləsindəki feli təsriflənməyən formanı tapın.",
                    "solution": "\"vur-ul-anda\": -anda feli bağlama şəkilçisidir, cümlədə zaman zərfliyi vəzifəsindədir."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az7-u4-1",
                    "question": "Aşağıdakılardan hansı feli sifətdir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Yazaraq"
                          },
                          {
                                "key": "B",
                                "text": "Oxuyan"
                          },
                          {
                                "key": "C",
                                "text": "Gülmək"
                          },
                          {
                                "key": "D",
                                "text": "Gələndə"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "-an² şəkilçisi feli sifət şəkilçisidir (oxu-yan)."
              }
        ]
          },

  {
            id: 'lesson-azeri-7-u5-adverb',
            subjectId: 'azerbaycan_dili',
            grade: 7,
            unit: 'Bölmə 5: Zərf və onun məna növləri',
            unitOrder: 5,
            title: 'Zərfin məna növləri: Tərzi-hərəkət, zaman, yer, kəmiyyət',
            order: 1,
            readTimeMinutes: 9,
            difficulty: 2,
            summary: 'Hərəkətin icra tərzini, zamanını, yerini və kəmiyyətini bildirən zərflər, zərflə sifətin fərqləndirilməsi.',
            theoryMarkdown: `
        ### 1. Zərfin Əsas Əlamətləri
        Hərəkətin tərzini, zamanını, yerini, kəmiyyətini bildirən əsas nitq hissəsinə **zərf** deyilir. Əsasən fellərə aid olur və cümlədə **zərflik** vəzifəsində çıxış edir.

        ### 2. Zərfin Məna Növləri
        1. **Tərzi-hərəkət zərfi:** Hərəkətin necə, nə cür icra olunduğunu bildirir (*sürətlə, yaxşı, cəld, qəfildən, yavaş-yavaş*).
        2. **Zaman zərfi:** Hərəkətin nə vaxt baş verdiyini bildirir (*dünən, bu gün, səhər, axşam, bildir, indicə*).
        3. **Yer zərfi:** Hərəkətin harada baş verdiyini və ya istiqamətini bildirir (*irəli, geri, yuxarı, aşağı, içəri, sağa-sola*).
        4. **Kəmiyyət zərfi:** Hərəkətin nə dərəcədə icra olunduğunu bildirir (*çox, az, xeyli, tamamilə, bir qədər*).

        ### 3. Zərflə Sifətin Fərqləndirilməsi
        Eyni söz həm sifət, həm də zərf kimi işlənə bilər:
        - İsmə aid olduqda **sifətdir**: *Yaxşı (hansı?) insan*.
        - Felə aid olduqda **zərfdir**: *Yaxşı (necə?) oxuyur*.
            `,
            keyFormulas: [
              {
                    "id": "f-az7-u5-1",
                    "name": "Zərf və Sifət Fərqi",
                    "latex": "\\text{Söz} + \\text{İsim} \\implies \\text{Sifət}; \\qquad \\text{Söz} + \\text{Fel} \\implies \\text{Zərf}",
                    "description": "Əşyaya aid olanda sifət, hərəkətə aid olanda zərf olur."
              }
        ],
            glossary: [
              {
                    "term": "Tərzi-hərəkət zərfi",
                    "definition": "İşin və ya hərəkətin icra olunma qaydasını və keyfiyyətini bildirən zərf."
              },
              {
                    "term": "Kəmiyyət zərfi",
                    "definition": "Hərəkətin və ya əlamətin dərəcəsini, miqdarını bildirən zərf."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az7-u5-1",
                    "question": "\"O, sürətlə irəli qaçdı\" cümləsindəki zərfləri və onların məna növünü tapın.",
                    "solution": "\"sürətlə\" — tərzi-hərəkət zərfi (necə qaçdı?); \"irəli\" — yer zərfi (haraya qaçdı?)."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az7-u5-1",
                    "question": "\"Dünən xeyli danışdıq\" cümləsində \"dünən\" və \"xeyli\" sözləri zərfin hansı növləridir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Zaman və tərzi-hərəkət"
                          },
                          {
                                "key": "B",
                                "text": "Zaman və kəmiyyət"
                          },
                          {
                                "key": "C",
                                "text": "Yer və zaman"
                          },
                          {
                                "key": "D",
                                "text": "Tərzi-hərəkət və yer"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Dünən nə vaxt? sualına cavab verir (zaman), xeyli isə nə qədər? sualına cavab verir (kəmiyyət)."
              }
        ]
          },

  {
            id: 'lesson-azeri-7-u6-auxiliary-parts',
            subjectId: 'azerbaycan_dili',
            grade: 7,
            unit: 'Bölmə 6: Köməkçi nitq hissələri',
            unitOrder: 6,
            title: 'Köməkçi nitq hissələri: Qoşma, bağlayıcı, ədat, modal sözlər, nida',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Leksik mənası olmayan, suala cavab verməyən köməkçi nitq hissələri, onların orfoqrafiyası və durğu işarələri qaydaları.',
            theoryMarkdown: `
        ### 1. Köməkçi Nitq Hissələrinin Ümumi Əlamətləri
        - Müstəqil leksik mənaya malik deyillər.
        - Heç bir suala cavab vermirlər.
        - Ayrılıqda cümlə üzvü ola bilmirlər.

        ### 2. Köməkçi Nitq Hissələrinin Xüsusiyyətləri
        1. **Qoşma:** İsmin adlıq, yiyəlik, yönlük və çıxışlıq hallarına qoşularaq müxtəlif məna çalarları yaradır:
           - Şəkilçiləşən qoşmalar: *-can, -tək, -dək* (bitişik yazılır).
           - Söz kimi: *üçün, kimi, qədər, sarı, ötrü, qarşı, əvvəl, sonra*.
        2. **Bağlayıcı:** Sözlər və ya cümlələr arasında sintaktik əlaqə yaradır:
           - Tabesizlik: *və, ilə, amma, ancaq, lakin, ya, ya da, gah, gah da, həm, həm də*.
           - Tabelilik: *ki, çünki, əgər, hərçənd, madam ki*.
        3. **Ədat:** Cümlənin və ya sözün təsir gücünü artıran hissəcikdir (*axı, məhz, ancaq, tək, ən, lap, daha, bəs, kaş*).
        4. **Modal sözlər:** Danışanın fikrə münasibətini (yəqinlik, güman, təəssüf) bildirir (*əlbəttə, şübhəsiz, görünür, təəssüf ki, bəlkə*). Cümlədə hər iki tərəfindən **vergüllə** ayrılır.
        5. **Nida:** Hiss və həyəcan bildirir (*ah, ox, vay, ura, bəh-bəh, ey, ay*). Nidadan sonra nida işarəsi və ya vergül qoyulur.
            `,
            keyFormulas: [
              {
                    "id": "f-az7-u6-1",
                    "name": "Modal Sözlərdə Vergül Qaydası",
                    "latex": "\\text{Əvvəldə: } M, \\dots; \\quad \\text{Ortada: } \\dots, M, \\dots; \\quad \\text{Sonda: } \\dots, M.",
                    "description": "Modal sözlər cümlənin harasında gəlməsindən asılı olaraq vergüllə təcrid olunur."
              }
        ],
            glossary: [
              {
                    "term": "Qoşma",
                    "definition": "İsmin müxtəlif hallarına qoşularaq məsafə, bənzətmə, zaman və s. mənaları bildirən köməkçi söz."
              },
              {
                    "term": "Modal söz",
                    "definition": "Danışanın söylədiyi fikrə inamını, şübhəsini və ya təəssüfünü bildirən söz."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az7-u6-1",
                    "question": "\"Əlbəttə biz bu yarışda qalib gələcəyik\" cümləsində durğu işarəsini bərpa edin.",
                    "solution": "\"Əlbəttə\" modal sözdür və cümlənin əvvəlində gəldiyi üçün ondan sonra vergül qoyulmalıdır: \"Əlbəttə, biz bu yarışda qalib gələcəyik.\""
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az7-u6-1",
                    "question": "Aşağıdakılardan hansı tabesizlik bağlayıcısıdır?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Çünki"
                          },
                          {
                                "key": "B",
                                "text": "Əgər"
                          },
                          {
                                "key": "C",
                                "text": "Lakin"
                          },
                          {
                                "key": "D",
                                "text": "Ki"
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "'Lakin' qarşılaşdırma bildirən tabesizlik bağlayıcısıdır. Çünki, əgər, ki isə tabelilik bağlayıcılarıdır."
              }
        ]
          },

  {
            id: 'lesson-azeri-8-u1-syntactic-relations',
            subjectId: 'azerbaycan_dili',
            grade: 8,
            unit: 'Bölmə 1: Sintaktik əlaqələr və Söz birləşmələri',
            unitOrder: 1,
            title: 'Tabesizlik və tabelilik əlaqələri: Uzlaşma, idarə və yanaşma',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Söz birləşmələri, asılı və əsas tərəf, tabelilik əlaqəsinin 3 növü: uzlaşma, idarə və yanaşma əlaqələri.',
            theoryMarkdown: `
        ### 1. Sintaktik Əlaqələr
        Sözlər və cümlələr arasında iki növ sintaktik əlaqə var:
        - **Tabesizlik əlaqəsi:** Bərabərhüquqlu komponentlər arasında olur (həmcins üzvlər və tabesiz mürəkkəb cümlə tərəfləri).
        - **Tabelilik əlaqəsi:** Biri digərinə tabe olan tərəflər arasında olur (asılı tərəf birinci, əsas tərəf ikinci gəlir).

        ### 2. Tabelilik Əlaqəsinin Üç Növü
        1. **Uzlaşma əlaqəsi:** Asılı tərəfin şəxsə və kəmiyyətə görə əsas tərəflə uyğunlaşmasıdır. Qrammatik göstəricisi **mənsubiyyət və şəxs şəkilçiləridir**:
           - Mübtəda ilə xəbər arasında: *Biz yazırıq*.
           - II və III növ təyini söz birləşmələrində: *məktəb direktoru, bizim məktəbimiz*.
        2. **İdarə əlaqəsi:** Əsas tərəfin tələbi ilə asılı tərəfin müəyyən hal şəkilçisi qəbul etməsidir. Qrammatik göstəricisi **ismin hal şəkilçiləridir** (*kitabı oxumaq, evə getmək, meşədən qayıtmaq*).
        3. **Yanaşma əlaqəsi:** Heç bir qrammatik şəkilçi olmadan, yalnız məna və söz sırası ilə bağlanan əlaqədir (*maraqlı kitab, cəld qaçmaq, çox oxumaq*).
            `,
            keyFormulas: [
              {
                    "id": "f-az8-u1-1",
                    "name": "Tabelilik Əlaqələrinin Qrammatik Göstəriciləri",
                    "latex": "\\text{Uzlaşma} \\implies \\text{Mənsubiyyət / Şəxs}; \\quad \\text{İdarə} \\implies \\text{Hal şəkilçisi}; \\quad \\text{Yanaşma} \\implies \\text{Şəkilçisiz}",
                    "description": "Əlaqə növlərini tapmaq üçün şəkilçilərə diqqət yetirilir."
              }
        ],
            glossary: [
              {
                    "term": "Uzlaşma əlaqəsi",
                    "definition": "Asılı tərəfin əsas tərəflə şəxsdə və kəmiyyətdə bərabərləşməsi əlaqəsi."
              },
              {
                    "term": "İdarə əlaqəsi",
                    "definition": "Əsas tərəfin tələbi ilə asılı tərəfin ismin qeyri-adlıq hallarında işlənməsi."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az8-u1-1",
                    "question": "\"Dərsləri yaxşı oxumaq\" birləşməsindəki sintaktik əlaqələri müəyyən edin.",
                    "solution": "\"dərsləri oxumaq\" — idarə əlaqəsidir (-i təsirlik hal şəkilçisi ilə). \"yaxşı oxumaq\" — yanaşma əlaqəsidir (şəkilçisiz, yalnız məna ilə yanaşır)."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az8-u1-1",
                    "question": "\"Qələmlə yazmaq\" birləşməsində asılı və əsas tərəf arasında hansı sintaktik əlaqə var?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Uzlaşma"
                          },
                          {
                                "key": "B",
                                "text": "İdarə"
                          },
                          {
                                "key": "C",
                                "text": "Yanaşma"
                          },
                          {
                                "key": "D",
                                "text": "Tabesizlik"
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "Qələmlə (qələm ilə) qoşmalı sözdür və hal şəkilçisi deyil, felə şəkilçisiz yanaşdığı üçün yanaşma əlaqəsidir."
              }
        ]
          },

  {
            id: 'lesson-azeri-8-u2-noun-compounds',
            subjectId: 'azerbaycan_dili',
            grade: 8,
            unit: 'Bölmə 2: İsmi və feli birləşmələr. Təyini söz birləşmələri',
            unitOrder: 2,
            title: 'I, II və III növ təyini söz birləşmələri və feli tərkiblər',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Təyini söz birləşmələri (I, II, III növ), onların yaranma qaydaları, tərəflər arasına söz daxil edilməsi və feli tərkiblər.',
            theoryMarkdown: `
        ### 1. İsmi Birləşmələr və Təyini Söz Birləşmələri
        Əsas tərəfi adlarla (isim, sifət, say, əvəzlik) ifadə olunan birləşmələr ismi birləşmələrdir. Ən geniş növü təyini söz birləşmələridir.

        ### 2. Təyini Söz Birləşmələrinin Növləri
        1. **I növ təyini söz birləşməsi:**
           - I tərəf: şəkilçisiz; II tərəf: şəkilçisiz (*dəmir qapı, yeni məktəb, beş şagird*).
           - Əlaqə: Yalnız **yanaşma əlaqəsi**.
           - Arasına söz daxil etmək olmur. Tərəfləri ayrı-ayrı cümlə üzvü olur.
        2. **II növ təyini söz birləşməsi:**
           - I tərəf: qeyri-müəyyən yiyəlik hal (şəkilçisiz); II tərəf: III şəxs mənsubiyyət (*məktəb həyəti, sinif otağı, dərs ili*).
           - Əlaqə: **Qismən uzlaşma və idarə**.
           - Arasına müstəqil söz daxil etmək olmur. Cümlənin bütöv bir mürəkkəb üzvü olur.
        3. **III növ təyini söz birləşməsi:**
           - I tərəf: müəyyən yiyəlik hal (*-ın⁴*); II tərəf: mənsubiyyət (*məktəbin həyəti, mənim kitabım*).
           - Əlaqə: **Tam uzlaşma və idarə**.
           - Arasına istənilən sayda söz daxil etmək olar (*məktəbin böyük və abad həyəti*). Bütövlükdə bir cümlə üzvü olur.

        ### 3. Feli Birləşmələr (Feli Tərkiblər)
        Əsas tərəfi məsdər, feli sifət və ya feli bağlama ilə ifadə olunan birləşmələrdir:
        *kitab oxumaq (məsdər tərkibi), dərsi bilən (feli sifət tərkibi), evə çatanda (feli bağlama tərkibi)*.
            `,
            keyFormulas: [
              {
                    "id": "f-az8-u2-1",
                    "name": "Təyini Birləşmələrin Sxemi",
                    "latex": "\\text{I növ: } [ - \\; ; \\; - ]; \\quad \\text{II növ: } [ - \\; ; \\; -ı^4 ]; \\quad \\text{III növ: } [ -ın^4 \\; ; \\; -ı^4 ]",
                    "description": "Tərəflərin qəbul etdiyi şəkilçilərə görə təsnifat sxemidir."
              }
        ],
            glossary: [
              {
                    "term": "Təyini söz birləşməsi",
                    "definition": "Asılı tərəfi əsas tərəfi təyin edən ismi birləşmə növü."
              },
              {
                    "term": "Feli tərkib",
                    "definition": "Məsdər, feli sifət və feli bağlamanın ətrafına söz toplayaraq əmələ gətirdiyi bütöv sintaktik vahid."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az8-u2-1",
                    "question": "\"Dəniz kənarı\" və \"dənizin kənarı\" birləşmələrinin fərqini izah edin.",
                    "solution": "\"Dəniz kənarı\" II növdür (I tərəf şəkilçisizdir, arasına söz girmir). \"Dənizin kənarı\" III növdür (-in yiyəlik və -ı mənsubiyyət var, arasına söz daxil etmək olar)."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az8-u2-1",
                    "question": "Aşağıdakılardan hansı III növ təyini söz birləşməsidir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Daş bina"
                          },
                          {
                                "key": "B",
                                "text": "İmtahan zalı"
                          },
                          {
                                "key": "C",
                                "text": "Məktəbin direktoru"
                          },
                          {
                                "key": "D",
                                "text": "Tez oxumaq"
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "Məktəb-in (müəyyən yiyəlik) direktor-u (mənsubiyyət) III növ təyini söz birləşməsidir."
              }
        ]
          },

  {
            id: 'lesson-azeri-8-u3-sentence-types',
            subjectId: 'azerbaycan_dili',
            grade: 8,
            unit: 'Bölmə 3: Cümlə və onun məqsəd və intonasiyaya görə növləri',
            unitOrder: 3,
            title: 'Məqsəd və intonasiyaya görə cümlənin növləri: Nəqli, sual, əmr, nida',
            order: 1,
            readTimeMinutes: 9,
            difficulty: 2,
            summary: 'Cümlənin 4 növü, sual cümlələrinin yaranma vasitələri, məntiqi vurğu və intonasiya xüsusiyyətləri.',
            theoryMarkdown: `
        ### 1. Cümlə Nədir?
        Bitmiş bir fikri ifadə edən və qrammatik cəhətdən formalaşmış nitq vahidinə **cümlə** deyilir.

        ### 2. Məqsəd və İntonasiyaya Görə Növləri
        1. **Nəqli cümlə:** Hər hansı bir hadisə, əşya haqqında məlumat vermək məqsədilə işlədilir. Adi intonasiya ilə deyilir, sonunda nöqtə qoyulur:
           *Bahar gəldi, təbiət oyandı.*
        2. **Sual cümləsi:** Bir şey haqqında məlumat almaq məqsədilə işlədilir. Üç yolla yaranır:
           - Sual intonasiyası ilə (*Dərsi öyrəndin?*).
           - Sual əvəzlikləri ilə (*Kimi axtarırsınız?*).
           - Sual ədatları ilə (*-mı⁴, bəs, məgər*): *Bunu sən etdinmi?*
        3. **Əmr cümləsi:** İstək, əmr, xahiş, məsləhət, nəsihət bildirir. Xəbəri felin əmr şəkli ilə ifadə olunur:
           *Dərslərinizi vaxtında hazırlayın.*
        4. **Nida cümləsi:** Yüksək hiss-həyəcan, sevinc, qəzəb, kədər bildirir. Sonunda nida işarəsi (!) qoyulur:
           *Necə də gözəl mənzərədir!*

        ### 3. Məntiqi Vurğu
        Cümlədə danışanın xüsusi olaraq nəzərə çatdırmaq istədiyi sözün daha qüvvətli səslə tələffüz edilməsidir. Azərbaycan dilində məntiqi vurğulu söz adətən **xəbərin bilavasitə qarşısında** gəlir:
        *Əli dünən kitabı **kitabxanadan** aldı.* (Vurğu kitabxanadan sözündədir).
            `,
            keyFormulas: [
              {
                    "id": "f-az8-u3-1",
                    "name": "Məntiqi Vurğu Qaydası",
                    "latex": "\\dots + [\\text{Məntiqi Vurğulu Söz}] + [\\text{Xəbər}].",
                    "description": "Cümlədə vurğulanan söz xəbərdən bilavasitə əvvəl yerləşir."
              }
        ],
            glossary: [
              {
                    "term": "Məntiqi vurğu",
                    "definition": "Cümlədəki sözlərdən birinin digərlərinə nisbətən daha qabarıq tələffüz olunması."
              },
              {
                    "term": "Nəqli cümlə",
                    "definition": "Məlumat vermək məqsədilə söylənilən ən geniş yayılmış cümlə növü."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az8-u3-1",
                    "question": "\"Məgər sən bu hadisəni eşitməmisən\" cümləsinin məqsədə görə növünü və yaranma vasitəsini tapın.",
                    "solution": "Sual cümləsidir. Yaranmasında həm 'məgər' sual ədatı, həm də sual intonasiyası iştirak etmişdir. Sonunda sual işarəsi (?) qoyulmalıdır."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az8-u3-1",
                    "question": "Aşağıdakı cümlələrdən hansı əmr cümləsidir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Hər kəs öz yerini tutsun."
                          },
                          {
                                "key": "B",
                                "text": "Bu gün hava çox soyuqdur."
                          },
                          {
                                "key": "C",
                                "text": "Sən niyə gecikdin?"
                          },
                          {
                                "key": "D",
                                "text": "Yaşasın Azərbaycan!"
                          }
                    ],
                    "correctKey": "A",
                    "explanation": "A bəndində xəbər felin əmr şəklindədir (tut-sun) və tələb/əmr bildirir."
              }
        ]
          },

  {
            id: 'lesson-azeri-8-u4-principal-parts',
            subjectId: 'azerbaycan_dili',
            grade: 8,
            unit: 'Bölmə 4: Cümlənin baş üzvləri (Mübtəda və Xəbər)',
            unitOrder: 4,
            title: 'Qrammatik əsas: Mübtəda və Xəbər, uzlaşma qaydaları',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Cümlənin qrammatik əsası, mübtədanın və xəbərin ifadə vasitələri, feli və ismi xəbər, mübtəda ilə xəbər arasında kəmiyyət və şəxs uzlaşması.',
            theoryMarkdown: `
        ### 1. Cümlənin Qrammatik Əsası
        Cümlənin baş üzvləri — **mübtəda** və **xəbər** birlikdə cümlənin qrammatik əsasını təşkil edir.

        ### 2. Mübtəda
        Cümlədə haqqında danışılan şəxsi və ya əşyanı bildirən baş üzvdür. *Kim? Nə? Hara?* suallarına cavab verir. Adlıq halda olur.
        - **İfadə vasitələri:** İsim, əvəzlik, məsdər, feli sifət, substantivləşmiş digər nitq hissələri və təyini söz birləşmələri (*Bizim məqsədimiz oxumaqdır*).

        ### 3. Xəbər
        Mübtədanın işini, hərəkətini, halını və ya kimliyini təsdiq və ya inkar edən baş üzvdür.
        - **Feli xəbər:** Felin təsriflənən formaları və frazeoloji birləşmələrlə ifadə olunur (*Şagirdlər inşa yazdılar*).
        - **İsmi xəbər:** Adlarla (isim, sifət, say, əvəzlik, zərf, məsdər, feli sifət) və ismi birləşmələrlə ifadə olunur (*Bakı gözəl şəhərdir*).

        ### 4. Mübtəda ilə Xəbərin Uzlaşması
        - **Şəxsə görə uzlaşma:** Həmişə tam olur: *Mən oxuyuram, sən oxuyursan, o oxuyur*.
        - **Kəmiyyətə görə uzlaşma:**
          - İnsan anlayışı bildirən mübtəda cəmdə olduqda, xəbər də **cəmdə olur**: *Uşaqlar gəldilər*.
          - Heyvan və quş anlayışı bildirən mübtəda cəmdə olduqda, xəbər **həm təkdə, həm cəmdə** ola bilər: *Quşlar uçdu / uçdular*.
          - Cansız əşya bildirən mübtəda cəmdə olduqda, xəbər ədəbi dildə adətən **təkdə olur**: *Yarpaqlar töküldü* (töküldülər qeyri-ədəbidir).
            `,
            keyFormulas: [
              {
                    "id": "f-az8-u4-1",
                    "name": "Kəmiyyət Uzlaşması Qaydası",
                    "latex": "\\text{Cansız mübtəda (cəm)} \\implies \\text{Xəbər təkdə qalır} \\quad (\\text{Qapılar açıldı})",
                    "description": "Cansız varlıqlarda xəbərin cəmlənməsi qrammatik normanın pozulmasıdır."
              }
        ],
            glossary: [
              {
                    "term": "Qrammatik əsas",
                    "definition": "Cümlənin sintaktik strukturunu müəyyən edən mübtəda və xəbər cütü."
              },
              {
                    "term": "İsmi xəbər",
                    "definition": "Xəbərlik şəkilçisi qəbul etmiş adlarla ifadə olunan xəbər növü."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az8-u4-1",
                    "question": "\"Ağacın budaqları küləkdən qırıldılar\" cümləsindəki qrammatik səhvi tapın və düzəldin.",
                    "solution": "\"Budaqlar\" cansız varlıq olduğu üçün xəbər cəmdə ola bilməz. Düzgün variant: \"Ağacın budaqları küləkdən qırıldı\"."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az8-u4-1",
                    "question": "Aşağıdakı cümlələrdən hansının xəbəri feli xəbərdir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Hava çox sərindir."
                          },
                          {
                                "key": "B",
                                "text": "O, məktəbin ən fəal şagirdidir."
                          },
                          {
                                "key": "C",
                                "text": "Külək qapını bağladı."
                          },
                          {
                                "key": "D",
                                "text": "Əsas məqsədimiz qalib gəlməkdir."
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "'Bağladı' təsriflənən feldir və feli xəbərdir. Digər variantlar isə ismi xəbərdir."
              }
        ]
          },

  {
            id: 'lesson-azeri-8-u5-secondary-parts',
            subjectId: 'azerbaycan_dili',
            grade: 8,
            unit: 'Bölmə 5: Cümlənin ikinci dərəcəli üzvləri',
            unitOrder: 5,
            title: 'İkinci dərəcəli üzvlər: Tamamlıq, Təyin və Zərflik',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Baş üzvləri izah edən üzvlər: vasitəli və vasitəsiz tamamlıq, təyin və zərflik, onların sualları və sintaktik qrafik işarələri.',
            theoryMarkdown: `
        ### 1. İkinci Dərəcəli Üzvlər Nədir?
        Cümlənin baş üzvlərini müxtəlif cəhətdən izah edən, aydınlaşdıran və tamamlayan üzvlərdir.

        ### 2. Tamamlıq (Qırıq-qırıq xətlə işarələnir: _ _ _)
        Əşya məzmunu bildirir, adlıq və yiyəlikdən başqa digər halların suallarına cavab verir:
        - **Vasitəsiz tamamlıq:** Təsirlik halda olur, hərəkətin birbaşa obyektidir. *Kimi? Nəyi? Nə?* (*Kitabı oxudum, çörək aldım*).
        - **Vasitəli tamamlıq:** Yönlük, yerlik, çıxışlıq hallarında və qoşmalı sözlərlə ifadə olunur. *Kimə? Nəyə? Kimdə? Nədə? Kimdən? Nədən? Kim ilə? Nə üçün?* (*Dostuma yazdım, qələmdən danışdıq*).

        ### 3. Təyin (Dalğalı xətlə işarələnir)
        Əşyanın əlamətini, keyfiyyətini və ya miqdarını bildirir. *Necə? Nə cür? Hansı? Neçənci? Neçə?* suallarına cavab verir. Əsasən sifət, say, feli sifət və işarə əvəzliyi ilə ifadə olunur (*Gözəl bağ, beşinci sinif, oxunan kitab*).

        ### 4. Zərflik (Düz xətt və kəsik xətlə işarələnir)
        Hərəkətin icra tərzini, zamanını, yerini, kəmiyyətini, səbəbini və məqsədini bildirir. Xəbərə aid olur.
        - Tərzi-hərəkət zərfliyi (*Necə? Nə tərzdə?*)
        - Zaman zərfliyi (*Nə vaxt? Nə zaman?*)
        - Yer zərfliyi (*Haraya? Harada? Haradan?*)
        - Kəmiyyət zərfliyi (*Nə qədər?*)
        - Səbəb və məqsəd zərflikləri (*Niyə? Nə məqsədlə?*)
            `,
            keyFormulas: [
              {
                    "id": "f-az8-u5-1",
                    "name": "Standart Cümlə Sırası",
                    "latex": "\\text{Təyin} \\to \\text{Mübtəda} \\to \\text{Zərflik} \\to \\text{Tamamlıq} \\to \\text{Xəbər}",
                    "description": "Azərbaycan dilində cümlə üzvlərinin normal düzülüş qaydasıdır."
              }
        ],
            glossary: [
              {
                    "term": "Vasitəsiz tamamlıq",
                    "definition": "Təsirlik halda olub hərəkətin birbaşa təsir etdiyi əşyanı bildirən tamamlıq."
              },
              {
                    "term": "Təyin",
                    "definition": "İsmi və ya isimləşmiş üzvü izah edən cümlə üzvü."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az8-u5-1",
                    "question": "\"Dünən çalışqan şagirdlər müəllimə maraqlı suallar verdilər\" cümləsini üzvlərinə görə təhlil edin.",
                    "solution": "Verdilər (feli xəbər), şagirdlər (mübtəda), dünən (zaman zərfliyi), çalışqan (təyin), müəllimə (vasitəli tamamlıq), maraqlı (təyin), suallar (vasitəsiz tamamlıq)."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az8-u5-1",
                    "question": "\"Əli qələmi çantaya qoydu\" cümləsində \"qələmi\" sözü hansı cümlə üzvüdür?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Mübtəda"
                          },
                          {
                                "key": "B",
                                "text": "Vasitəsiz tamamlıq"
                          },
                          {
                                "key": "C",
                                "text": "Vasitəli tamamlıq"
                          },
                          {
                                "key": "D",
                                "text": "Zərflik"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "'Nəyi qoydu?' sualına cavab verir və müəyyən təsirlik haldadır, deməli vasitəsiz tamamlıqdır."
              }
        ]
          },

  {
            id: 'lesson-azeri-8-u6-homogeneous-parts',
            subjectId: 'azerbaycan_dili',
            grade: 8,
            unit: 'Bölmə 6: Həmcins üzvlər və cümlədə söz sırası',
            unitOrder: 6,
            title: 'Həmcins üzvlər, ümumiləşdirici sözlər və durğu işarələri',
            order: 1,
            readTimeMinutes: 9,
            difficulty: 2,
            summary: 'Eyni suala cavab verən, eyni üzvə aid olan həmcins üzvlər, tabesizlik əlaqəsi, ümumiləşdirici sözlər və iki nöqtə, tire durğu işarələri.',
            theoryMarkdown: `
        ### 1. Həmcins Üzvlər Nədir?
        Cümlədə eyni bir üzvlə bağlı olan, eyni suala cavab verən və bərabərhüquqlu olan üzvlərə **həmcins üzvlər** deyilir.
        - Həmcins üzvlər arasında **tabesizlik əlaqəsi** olur.
        - Aralarında sadalama intonasiyası və ya tabesizlik bağlayıcıları (*və, ilə, amma, lakin, ya, gah*) işlənir:
          *Bağda almalar, armudlar və heyvalar yetişmişdi.*

        ### 2. Ümumiləşdirici Sözlər və Durğu İşarələri
        Həmcins üzvlərin hamısına aid olan və onların ümumi adını bildirən sözlərə **ümumiləşdirici sözlər** deyilir:
        1. **Ümumiləşdirici söz həmcins üzvlərdən əvvəl gəldikdə:** Ondan sonra **iki nöqtə (:)** qoyulur:
           *Masada hər şey var idi: dəftər, qələm, kitab.*
        2. **Ümumiləşdirici söz həmcins üzvlərdən sonra gəldikdə:** Ondan əvvəl **tire (—)** qoyulur:
           *Dəftər, qələm, kitab — hər şey masanın üstündə idi.*
            `,
            keyFormulas: [
              {
                    "id": "f-az8-u6-1",
                    "name": "Ümumiləşdirici Söz Sxemləri",
                    "latex": "\\text{ÜS}: \\; O, \\; O, \\; O; \\qquad O, \\; O, \\; O \\; — \\; \\text{ÜS}.",
                    "description": "Əvvəl gələndə iki nöqtə, sonra gələndə tire işarəsi qoyulur."
              }
        ],
            glossary: [
              {
                    "term": "Həmcins üzvlər",
                    "definition": "Eyni sintaktik funksiya daşıyan və eyni suala cavab verən cümlə üzvləri qrupu."
              },
              {
                    "term": "Ümumiləşdirici söz",
                    "definition": "Həmcins üzvlərin ümumi mənasını ifadə edən söz və ya ifadə."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az8-u6-1",
                    "question": "\"Meşədə hər tərəf meşə kənarı dərə təpə qarla örtülmüşdü\" cümləsində durğu işarələrini qoyun.",
                    "solution": "\"Meşədə hər tərəf: meşə kənarı, dərə, təpə qarla örtülmüşdü.\" ('Hər tərəf' ümumiləşdirici sözdür, ardınca həmcins üzvlər gəldiyi üçün iki nöqtə qoyulur)."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az8-u6-1",
                    "question": "Ümumiləşdirici söz həmcins üzvlərdən sonra gələrsə, hansı durğu işarəsi qoyulur?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Vergül"
                          },
                          {
                                "key": "B",
                                "text": "İki nöqtə"
                          },
                          {
                                "key": "C",
                                "text": "Tire"
                          },
                          {
                                "key": "D",
                                "text": "Nöqtəli vergül"
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "Həmcins üzvlərdən sonra ümumiləşdirici söz gəldikdə tire (—) işarəsi qoyulur."
              }
        ]
          },

  {
            id: 'lesson-azeri-8-u7-vocatives-parenthesis',
            subjectId: 'azerbaycan_dili',
            grade: 8,
            unit: 'Bölmə 7: Qrammatik cəhətdən cümlə üzvləri ilə əlaqədar olmayan sözlər',
            unitOrder: 7,
            title: 'Xitab və Ara sözlər: İntonasiyası və durğu işarələri',
            order: 1,
            readTimeMinutes: 9,
            difficulty: 2,
            summary: 'Cümlə üzvü olmayan sözlər: xitab (müraciət), ara sözlər (münasibət), onların cümlədə yeri və vergül işarəsi qaydaları.',
            theoryMarkdown: `
        ### 1. Cümlə Üzvləri İlə Əlaqədar Olmayan Sözlər
        Bu sözlər cümlə üzvləri ilə sintaktik əlaqəyə girmir, heç bir cümlə üzvü olmur və suala cavab vermir.

        ### 2. Xitab (Müraciət Bildirən Sözlər)
        Cümlədə müraciət olunan şəxsi və ya əşyanı bildirir. Əsasən adlıq halda olan isimlərlə və ismi birləşmələrlə ifadə olunur.
        - **Xitabda durğu işarələri:**
          - Əvvəldə gəldikdə: *Xitab, ...* (*Uşaqlar, dərsi diqqətlə dinləyin.*)
          - Ortada gəldikdə: *..., xitab, ...* (*Dərsi, uşaqlar, diqqətlə dinləyin.*)
          - Sonda gəldikdə: *..., xitab.* (*Dərsi diqqətlə dinləyin, uşaqlar.*)

        ### 3. Ara Sözlər və Ara Cümlələr
        Danışanın ifadə olunan fikrə münasibətini (yəqinlik, güman, təəssüf, nəticə, ümumiləşdirmə) bildirir. Modal sözlərlə ifadə olunur (*əlbəttə, şübhəsiz, görünür, məncə, sözün düzü*).
        - Cümlənin harasında gəlməsindən asılı olmayaraq hər iki tərəfdən **vergüllə** ayrılır:
          *Məncə, bu məsələ tezliklə həll olunacaq.*
          *Bu məsələ, məncə, tezliklə həll olunacaq.*
            `,
            keyFormulas: [
              {
                    "id": "f-az8-u7-1",
                    "name": "Xitab və Ara Sözlərdə Vergül Sxemi",
                    "latex": "X, \\dots \\qquad \\dots, X, \\dots \\qquad \\dots, X.",
                    "description": "Əvvəldə sonrasında, ortada hər iki tərəfində, sonda isə önündə vergül qoyulur."
              }
        ],
            glossary: [
              {
                    "term": "Xitab",
                    "definition": "Müraciət olunan şəxsi və ya varlığı bildirən cümləxarici vahid."
              },
              {
                    "term": "Ara söz",
                    "definition": "Danışanın fikrə subyektiv münasibətini bildirən və cümlə üzvü olmayan söz."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az8-u7-1",
                    "question": "\"Dostlar gəlin bir-birimizə dəstək olaq\" cümləsində durğu işarəsini bərpa edin.",
                    "solution": "\"Dostlar\" xitabdır və cümlənin əvvəlində gəldiyi üçün vergül qoyulmalıdır: \"Dostlar, gəlin bir-birimizə dəstək olaq.\""
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az8-u7-1",
                    "question": "Aşağıdakı cümlələrdən hansında xitab işlənmişdir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Əli dünən bizə gəlmişdi."
                          },
                          {
                                "key": "B",
                                "text": "Əli, sən bu kitabı oxumusan?"
                          },
                          {
                                "key": "C",
                                "text": "Məncə, hava yaxşı olacaq."
                          },
                          {
                                "key": "D",
                                "text": "Uşaqlar həyətdə oynayırlar."
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "B bəndində 'Əli' sözü müraciət bildirən xitabdır və ardınca vergül qoyulmuşdur."
              }
        ]
          },

  {
            id: 'lesson-azeri-9-u1-simple-sentence-types',
            subjectId: 'azerbaycan_dili',
            grade: 9,
            unit: 'Bölmə 1: Sadə cümlənin şəxsə görə növləri',
            unitOrder: 1,
            title: 'Müəyyən şəxsli, qeyri-müəyyən şəxsli, ümumi şəxsli, şəxssiz və adlıq cümlələr',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Sadə cümlənin şəxsə görə 5 əsas növü, mübtədanın varlığı və ya təsəvvür olunması, şəxssiz və adlıq cümlələrin xüsusiyyətləri.',
            theoryMarkdown: `
        ### 1. Sadə Cümlənin Şəxsə Görə Növləri
        Mübtədanın olub-olmamasına və xəbərin şəxs şəkilçisinə görə sadə cümlələr 5 növə bölünür:

        1. **Müəyyən şəxsli cümlə:** Mübtədası olan və ya xəbərin şəxs şəkilçisinə görə asanlıqla bərpa edilə bilən cümlələrdir (*Biz sabah imtahan verəcəyik / Sabah imtahan verəcəyik*).
        2. **Qeyri-müəyyən şəxsli cümlə:** Hərəkəti icra edən qeyri-müəyyən şəxs və ya qrupdur. Xəbəri **III şəxsin cəmində** olur (*Qapını döyürlər. Radioda təzə xəbər dedilər*).
        3. **Ümumi şəxsli cümlə:** Hərəkət hamıya, bütün cəmiyyətə aid olur. Əsasən atalar sözləri, məsəllər və aforizmlərdir. Xəbəri adətən **II şəxsin təkində** və ya **III şəxsin cəmində** olur:
           *Yüz ölç, bir biç. Cücəni payızda sayarlar.*
        4. **Şəxssiz cümlə:** Mübtədası olmur və onu bərpa etmək qeyri-mümkündür. Xəbəri həmişə **III şəxsin təkində** olur:
           *Gecədir. Hadisəyə baxıldı. Bu gün mənim növbəmdir.*
        5. **Adlıq cümlə:** Xəbəri olmur, varlığın mövcudluğunu yalnız adlandırmaqla bildirir. Əsasən bədii təsvirlərdə işlənir:
           *Sakit gecə. Dəniz sahili. Xəzri mehi.*
            `,
            keyFormulas: [
              {
                    "id": "f-az9-u1-1",
                    "name": "Şəxsə Görə Cümlə Növləri Şifrəsi",
                    "latex": "\\text{Müəyyən} \\implies \\text{Mübtəda var}; \\quad \\text{Qeyri-müəyyən} \\implies \\text{III cəm}; \\quad \\text{Şəxssiz} \\implies \\text{Mübtəda yoxdur (III tək)}",
                    "description": "Xəbərin şəxs göstəricisi cümlə növünü təyin etməyə imkan verir."
              }
        ],
            glossary: [
              {
                    "term": "Qeyri-müəyyən şəxsli cümlə",
                    "definition": "İşi görənin dəqiq bilinmədiyi və xəbəri III şəxsin cəmində olan cümlə."
              },
              {
                    "term": "Şəxssiz cümlə",
                    "definition": "Mübtədası olmayan və bərpası qrammatik cəhətdən mümkün olmayan cümlə."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az9-u1-1",
                    "question": "\"Kənddə təzə məktəb tikirlər\" cümləsinin şəxsə görə növünü müəyyən edin.",
                    "solution": "Xəbər 'tikirlər' III şəxsin cəmindədir. Mübtəda yoxdur və işi görənlər qeyri-müəyyəndir. Bu, qeyri-müəyyən şəxsli cümlədir."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az9-u1-1",
                    "question": "\"İgid basılmaz, vətən bölünməz\" atalar sözü sadə cümlənin hansı növünə aiddir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Qeyri-müəyyən şəxsli"
                          },
                          {
                                "key": "B",
                                "text": "Müəyyən şəxsli"
                          },
                          {
                                "key": "C",
                                "text": "Şəxssiz cümlə"
                          },
                          {
                                "key": "D",
                                "text": "Adlıq cümlə"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Cümlənin mübtədası var: igid basılmaz (nə basılmaz? igid), vətən bölünməz (nə? vətən), yəni müəyyən şəxsli cümlələrdir."
              }
        ]
          },

  {
            id: 'lesson-azeri-9-u2-complete-incomplete',
            subjectId: 'azerbaycan_dili',
            grade: 9,
            unit: 'Bölmə 2: Bütöv və natamam cümlələr',
            unitOrder: 2,
            title: 'Bütöv və natamam cümlələr, dialoqlarda buraxılmış üzvlər',
            order: 1,
            readTimeMinutes: 9,
            difficulty: 2,
            summary: 'Fikrin ifadəsi üçün bütün üzvləri olan bütöv cümlələr və təkrara yol verməmək üçün üzvləri buraxılan natamam cümlələr.',
            theoryMarkdown: `
        ### 1. Bütöv Cümlələr
        Cümlədə ifadə olunan fikir üçün zəruri olan bütün baş və ikinci dərəcəli üzvləri iştirak edən cümlələrə **bütöv cümlələr** deyilir:
        *Mən dünən maraqlı bir filmə baxdım.*

        ### 2. Natamam Cümlələr
        Nitqdə təkrara yol verməmək və ya fikri yığcam ifadə etmək üçün bu və ya digər cümlə üzvü buraxılan cümlələrə **natamam cümlələr** deyilir.
        - Buraxılmış üzv əvvəlki cümlədən və ya ümumi situasiyadan asanlıqla bərpa olunur.
        - Ən çox **dialoqlarda** və cavab replikalarında işlənir:
          *— Haraya gedirsən?*
          *— Məktəbə.* ("Gedirəm" xəbəri və "Mən" mübtədası buraxılmışdır).

        ### 3. Natamam Cümlələrdə Durğu İşarələri
        Əgər natamam cümlədə xəbər buraxılıbsa və yerində fasilə yaranırsa, xəbərin yerinə **tire (—)** qoyulur:
        *Biz kəndə yollandıq, onlar isə — şəhərə.*
            `,
            keyFormulas: [
              {
                    "id": "f-az9-u2-1",
                    "name": "Xəbəri Buraxılmış Natamam Cümlədə Tire",
                    "latex": "\\dots \\text{ isə } — \\dots \\implies \\text{Buraxılmış xəbərin yerinə tire qoyulur}",
                    "description": "Fasilə yarandıqda buraxılmış üzv tire ilə əvəzlənir."
              }
        ],
            glossary: [
              {
                    "term": "Natamam cümlə",
                    "definition": "Üzvlərindən biri və ya bir neçəsi buraxılmış, lakin kontekstdən asanlıqla anlaşılan cümlə."
              },
              {
                    "term": "Bütöv cümlə",
                    "definition": "Məzmunun anlaşılması üçün bütün sintaktik üzvləri cümlədə mövcud olan cümlə."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az9-u2-1",
                    "question": "\"Aydan riyaziyyatı sevir, Leyla isə tarixisun\" cümləsində xəbəri buraxılmış natamam hissəni bərpa edin.",
                    "solution": "\"Leyla isə — tarixi (sevir)\". Burada 'sevir' xəbəri buraxılmış və yerinə tire qoyulmuşdur."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az9-u2-1",
                    "question": "Natamam cümlələr ən çox hansı nitq formasında istifadə olunur?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Elmi məqalələrdə"
                          },
                          {
                                "key": "B",
                                "text": "Dialoqlarda və canlı danışıqda"
                          },
                          {
                                "key": "C",
                                "text": "Rəsmi sənədlərdə"
                          },
                          {
                                "key": "D",
                                "text": "Lüğətlərdə"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Natamam cümlələr yığcamlıq təmin etdiyi üçün ən çox dialoqlarda işlənir."
              }
        ]
          },

  {
            id: 'lesson-azeri-9-u3-compound-coordinate',
            subjectId: 'azerbaycan_dili',
            grade: 9,
            unit: 'Bölmə 3: Tabesiz mürəkkəb cümlələr',
            unitOrder: 3,
            title: 'Tabesiz mürəkkəb cümlələrdə məna əlaqələri və durğu işarələri',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Tabesiz mürəkkəb cümlələrdə 6 məna əlaqəsi (ardıcıllıq, eynizamanlılıq, qarşılaşdırma, aydınlaşdırma, bölüşdürmə, səbəb-nəticə), bağlayıcılar və intonasiya.',
            theoryMarkdown: `
        ### 1. Mürəkkəb Cümlə və Tabesizlik Əlaqəsi
        İki və ya daha artıq qrammatik əsası (sadə cümləsi) olan vahidə **mürəkkəb cümlə** deyilir.
        - Tərkib hissələri bərabərhüquqlu olan, biri digərindən asılı olmayan mürəkkəb cümlələrə **tabesiz mürəkkəb cümlələr** deyilir.
        - Birləşmə vasitələri: Tabesizlik bağlayıcıları və ya yalnız intonasiya.

        ### 2. Tabesiz Mürəkkəb Cümlələrdə Məna Əlaqələri
        1. **Zaman (Eynizamanlılıq) əlaqəsi:** Hadisələr eyni zamanda baş verir (*Yağış yağır, külək uğuldayırdı*).
        2. **Ardıcıllıq əlaqəsi:** Hadisələr bir-birinin ardınca baş verir (*Qapı açıldı və qonaqlar içəri daxil oldular*).
        3. **Səbəb-nəticə əlaqəsi:** Birinci cümlədəki hadisə ikincinin səbəbi olur (*Zəng çalındı, uşaqlar sinfə tələsdilər*).
        4. **Qarşılaşdırma əlaqəsi:** Hadisələr bir-biri ilə qarşılaşdırılır (*amma, ancaq, lakin* bağlayıcıları ilə):
           *Hava soyuq idi, lakin biz üşümürdük.*
        5. **Bölüşdürmə əlaqəsi:** Hadisələrdən yalnız birinin mümkünlüyü bildirilir (*ya... ya da, gah... gah da*):
           *Gah yağış yağırdı, gah da gün çıxırdı.*
        6. **Aydınlaşdırma əlaqəsi:** İkinci cümlə birincini aydınlaşdırır, izah edir (*yəni* bağlayıcısı və ya iki nöqtə ilə):
           *Mənzil çox rahat idi: hər otaqda kondisioner quraşdırılmışdı.*
            `,
            keyFormulas: [
              {
                    "id": "f-az9-u3-1",
                    "name": "Tabesiz Cümlələrdə Vergül Qaydası",
                    "latex": "[S_1], \\; [S_2]; \\qquad [S_1], \\; \\text{lakin} \\; [S_2]",
                    "description": "Tabesiz mürəkkəb cümlə komponentləri arasında həmişə vergül qoyulur."
              }
        ],
            glossary: [
              {
                    "term": "Tabesiz mürəkkəb cümlə",
                    "definition": "Tərkib hissələri qrammatik cəhətdən bərabərhüquqlu olan mürəkkəb cümlə."
              },
              {
                    "term": "Eynizamanlılıq",
                    "definition": "Bir neçə işin eyni vaxt kəsiyində cərəyan etdiyini bildirən sintaktik məna əlaqəsi."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az9-u3-1",
                    "question": "\"Elektrik kəsildi, kompüter söndü\" cümləsindəki məna əlaqəsini müəyyən edin.",
                    "solution": "Birinci hissə səbəbdir (elektrikin kəsilməsi), ikinci hissə isə nəticədir (kompüterin sönməsi). Səbəb-nəticə əlaqəli tabesiz mürəkkəb cümlədir."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az9-u3-1",
                    "question": "\"Gah külək əsirdi, gah da leysan yağırdı\" cümləsində hansı məna əlaqəsi var?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Qarşılaşdırma"
                          },
                          {
                                "key": "B",
                                "text": "Bölüşdürmə"
                          },
                          {
                                "key": "C",
                                "text": "Səbəb-nəticə"
                          },
                          {
                                "key": "D",
                                "text": "Aydınlaşdırma"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "'Gah... gah da' bölüşdürmə bağlayıcılarıdır və bölüşdürmə məna əlaqəsi yaradır."
              }
        ]
          },

  {
            id: 'lesson-azeri-9-u4-compound-subordinate',
            subjectId: 'azerbaycan_dili',
            grade: 9,
            unit: 'Bölmə 4: Tabeli mürəkkəb cümlələr',
            unitOrder: 4,
            title: 'Tabeli mürəkkəb cümlələr: Baş və budaq cümlə, bağlama vasitələri',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Baş və budaq cümlə qarşılıqlı münasibəti, tabelilik bağlayıcıları (ki), bağlayıcı sözlər, intonasiya və cümlə sxemləri.',
            theoryMarkdown: `
        ### 1. Tabeli Mürəkkəb Cümlə Nədir?
        Tərkib hissələrindən biri digərindən qrammatik və məna cəhətdən asılı olan mürəkkəb cümlədir.
        - **Baş cümlə:** Müstəqil olan, izah edilən tərəfdir (sxemi: $[\;]$).
        - **Budaq cümlə:** Baş cümlədən asılı olub onu izah edən tərəfdir (sxemi: $(\;)$).

        ### 2. Əsas Bağlayıcı Vasitələr və Sxemlər
        1. **"Ki" tabelilik bağlayıcısı ilə:** Adətən əvvəl baş cümlə, sonra budaq cümlə gəlir:
           $$[\text{Baş}], \; \text{ki} \; (\text{Budaq})$$
           *Mən bilirəm ki, sən qalib gələcəksən.*
        2. **Şərt şəkilçisi (-sa², -sə²) və ya bağlayıcı sözlərlə:** Adətən əvvəl budaq cümlə, sonra baş cümlə gəlir:
           $$(\text{Budaq}), \; [\text{Baş}]$$
           *Kim çox çalışsa, o uğur qazanar.*
           *Yağış kəssə, yola düşərik.*

        ### 3. Əvəzlik-Qəlib (Baş cümlədə) və Bağlayıcı Söz (Budaq cümlədə)
        - **Bağlayıcı söz:** Budaq cümlədə işlənən sual əvəzlikləridir (*kim, nə, hara, necə*).
        - **Əvəzlik-qəlib:** Baş cümlədə işlənən işarə əvəzlikləridir (*o, bu, onu, onda*).
          *(Kim tez gəlsə), [mükafatı o alacaq].*
            `,
            keyFormulas: [
              {
                    "id": "f-az9-u4-1",
                    "name": "Tabeli Cümlənin Əsas Sxemləri",
                    "latex": "[\\text{Baş}] \\to (\\text{Budaq}) \\quad (\\text{ki ilə}); \\qquad (\\text{Budaq}) \\to [\\text{Baş}] \\quad (-\\text{sa, bağlayıcı söz ilə})",
                    "description": "Tabeli mürəkkəb cümlələrdə komponentlərin yerləşmə qaydasıdır."
              }
        ],
            glossary: [
              {
                    "term": "Baş cümlə",
                    "definition": "Tabeli mürəkkəb cümlədə budaq cümlənin tabe olduğu əsas tərəf."
              },
              {
                    "term": "Bağlayıcı söz",
                    "definition": "Budaq cümləni baş cümləyə bağlayan sual əvəzliyi."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az9-u4-1",
                    "question": "\"Hamı inanır ki, sülh bərqərar olacaq\" cümləsinin tərkib hissələrini və sxemini müəyyən edin.",
                    "solution": "Birinci tərəf baş cümlədir: \"Hamı inanır\" [ ], ikinci tərəf budaq cümlədir: \"sülh bərqərar olacaq\" ( ). Sxem: [Baş], ki (Budaq)."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az9-u4-1",
                    "question": "\"Kim yaxşı oxusa, yüksək bal toplayacaq\" cümləsində hansı hissə birinci gəlmişdir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Baş cümlə"
                          },
                          {
                                "key": "B",
                                "text": "Budaq cümlə"
                          },
                          {
                                "key": "C",
                                "text": "Tabesiz cümlə"
                          },
                          {
                                "key": "D",
                                "text": "Müstəqil cümlə"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "'Kim' bağlayıcı sözü və '-sa' şərt şəkilçisi budaq cümlənin göstəricisidir, yəni budaq cümlə birinci gəlmişdir (Budaq, Baş)."
              }
        ]
          },

  {
            id: 'lesson-azeri-9-u5-clause-types',
            subjectId: 'azerbaycan_dili',
            grade: 9,
            unit: 'Bölmə 5: Budaq cümlənin növləri',
            unitOrder: 5,
            title: 'Budaq cümlənin növləri: Mübtəda, xəbər, tamamlıq, təyin və zərflik budaq cümlələri',
            order: 1,
            readTimeMinutes: 11,
            difficulty: 3,
            summary: 'Baş cümlənin buraxılmış üzvünü və ya əvəzlik-qəlibini izah edən budaq cümlə növləri və onların sadə cümləyə çevrilməsi.',
            theoryMarkdown: `
        ### 1. Budaq Cümlənin Növləri Nədir?
        Budaq cümlə baş cümlənin hansı üzvünü əvəz edirsə və ya izah edirsə, həmin üzvün adı ilə adlanır.

        ### 2. Əsas Budaq Cümlə Növləri
        1. **Mübtəda budaq cümləsi:** Baş cümlənin mübtədasını izah edir. *Kim? Nə?* sualına cavab verir:
           *[Məlumdur ki], (hava dəyişəcək).* $\to$ Havanın dəyişəcəyi məlumdur.
        2. **Xəbər budaq cümləsi:** Baş cümlənin ismi xəbərini izah edir:
           *[Məqsədimiz odur ki], (imtahanı uğurla verək).* $\to$ Məqsədimiz imtahanı uğurla verməkdir.
        3. **Tamamlıq budaq cümləsi:** Baş cümlənin tamamlığını izah edir. *Kimi? Nəyi? Nəyə?*:
           *[Gördüm ki], (qapı açıqdır).* $\to$ Qapının açıq olduğunu gördüm.
        4. **Təyin budaq cümləsi:** Baş cümlədəki isimlə ifadə olunmuş üzvü təyin edir. *Hansı?*:
           *[Mən elə bir kitab axtarıram ki], (orada qədim xəritələr olsun).*
        5. **Zərflik budaq cümlələri:**
           - **Zaman:** *(Qonaqlar gələndə), [biz çay içirdik].*
           - **Məkan (Yer):** *(Harada birlik var), [orada dirilik olar].*
           - **Səbəb:** *[Ona görə sevinirdi ki], (əla qiymət almışdı).*
           - **Şərt:** *(Hava xoş olsa), [gəzməyə gedərik].*
            `,
            keyFormulas: [
              {
                    "id": "f-az9-u5-1",
                    "name": "Budaq Cümlənin Sadə Cümləyə Çevrilməsi",
                    "latex": "\\text{Budaq cümlə xəbəri} + [-an^2, -dıq^4, -anda^2] \\implies \\text{Sadə cümlə tərkibi}",
                    "description": "Feli tərkiblərlə mürəkkəb cümlə asanlıqla sadə cümləyə transformasiya edilir."
              }
        ],
            glossary: [
              {
                    "term": "Tamamlıq budaq cümləsi",
                    "definition": "Baş cümlənin feli və ya ismi xəbərinin tələb etdiyi tamamlığı əvəz edən budaq cümlə."
              },
              {
                    "term": "Əvəzlik-qəlib",
                    "definition": "Baş cümlədə budaq cümlənin yerini tutan işarə əvəzliyi (o, onu, ona, onda)."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az9-u5-1",
                    "question": "\"Müəllim bildirdi ki, sabah yarış keçiriləcək\" cümləsində budaq cümlənin növünü tapın.",
                    "solution": "\"Müəllim nəyi bildirdi?\" — sualına cavab verir. Baş cümlənin feli xəbərinin tamamlığını izah etdiyi üçün tamamlıq budaq cümləsidir."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az9-u5-1",
                    "question": "\"Biz çalışırıq ki, dərslərimizi əla oxuyaq\" cümləsində budaq cümlə hansı növdür?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Mübtəda budaq cümləsi"
                          },
                          {
                                "key": "B",
                                "text": "Tamamlıq budaq cümləsi"
                          },
                          {
                                "key": "C",
                                "text": "Təyin budaq cümləsi"
                          },
                          {
                                "key": "D",
                                "text": "Xəbər budaq cümləsi"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Çalışırıq (nəyə? nəyə nail olmağa?) sualına cavab verdiyi üçün tamamlıq budaq cümləsidir."
              }
        ]
          },

  {
            id: 'lesson-azeri-9-u6-direct-indirect-speech',
            subjectId: 'azerbaycan_dili',
            grade: 9,
            unit: 'Bölmə 6: Vasitəsiz və vasitəli nitq',
            unitOrder: 6,
            title: 'Vasitəsiz və vasitəli nitq: Sxemlər, sitatlar və durğu işarələri',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 2,
            summary: 'Başqasının nitqinin verilmə üsulları: dəyişdirilmədən verilən vasitəsiz nitq (dırnaqlar, tire), məzmunu saxlanmaqla verilən vasitəli nitq və sitat qaydaları.',
            theoryMarkdown: `
        ### 1. Vasitəsiz Nitq
        Başqasının sözlərinin forma və məzmunca heç bir dəyişiklik edilmədən eynilə verilməsidir.
        - Müəllifin sözləri ($M, m$) və Vasitəsiz nitq ($V, v$).
        - **Əsas Durğu İşarələri Sxemləri:**
          1. $M: "V"$ — *Müəllim dedi: "Dərslərinizə yaxşı hazırlaşın".*
          2. $M: "V!" / "V?"$ — *Anası soruşdu: "Yeməyini yedinmi?"*
          3. "$V$", — $m.$ — *"Sabah görüşərik", — deyə Əli bildirdi.*
          4. "$V$", — $m,$ — "$v$." — *"Gəlin", — dedi o, — "birlikdə gedək".*

        ### 2. Vasitəli Nitq
        Başqasının nitqinin yalnız məzmununun dəyişdirilərək söylənilməsidir. Vasitəli nitq həmişə **tabeli mürəkkəb cümlə** şəklində qurulur:
        *Müəllim bildirdi ki, sabah yarış olacaq.*

        ### 3. Sitatlar
        Fikri təsdiq etmək üçün mötəbər mənbədən, müəllifdən dəqiq götürülmüş cümlələrdir. Sitatlar dırnaq içində və ya müəllifin adı göstərilməklə verilir.
            `,
            keyFormulas: [
              {
                    "id": "f-az9-u6-1",
                    "name": "Vasitəsiz Nitq Dörd Əsas Sxemi",
                    "latex": "M: \"V.\" \\qquad \"V\", — m. \\qquad \"V!\" — m. \\qquad \"V\", — m, — \"v.\"",
                    "description": "Vasitəsiz nitqin müəllif sözü ilə qarşılıqlı vəziyyətləridir."
              }
        ],
            glossary: [
              {
                    "term": "Vasitəsiz nitq",
                    "definition": "Özgə nitqinin eynilə, heç bir qrammatik dəyişiklik edilmədən verilməsi."
              },
              {
                    "term": "Sitat",
                    "definition": "Hər hansı əsərdən və ya şəxsin nitqindən eynilə gətirilən nümunə cümlə."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az9-u6-1",
                    "question": "\"O dedi: Mən mütləq qalib gələcəyəm\" cümləsində buraxılmış durğu işarələrini qoyun.",
                    "solution": "M: \"V.\" sxeminə uyğun olaraq: O dedi: \"Mən mütləq qalib gələcəyəm\"."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az9-u6-1",
                    "question": "\"V\", — m. sxeminə uyğun gələn cümlə hansıdır?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Müəllim dedi: \"Kitabları açın\"."
                          },
                          {
                                "key": "B",
                                "text": "\"Mən sabah gələcəyəm\", — dedi Əli."
                          },
                          {
                                "key": "C",
                                "text": "O söylədi ki, işlər qaydasındadır."
                          },
                          {
                                "key": "D",
                                "text": "\"Dayan\", — qışqırdı o, — \"tələsmə\"."
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "B bəndində vasitəsiz nitq əvvəl gəlmiş, sonra vergül, tire və müəllifin sözləri yazılmışdır."
              }
        ]
          },

  {
            id: 'lesson-azeri-10-u1-phonetics-orthoepy',
            subjectId: 'azerbaycan_dili',
            grade: 10,
            unit: 'Bölmə 1: Azərbaycan dilinin fonetik sistemi və orfoepiya normaları',
            unitOrder: 1,
            title: 'Fonetik sistem, orfoepiya və orfoqrafiya normaları, vurğu',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 3,
            summary: 'Səs və hərf fərqi, saitlərin və samitlərin tələffüz qanunauyğunluqları, orfoepiya lüğəti normaları və vurğunun növləri (heca, məntiqi, həyəcanlı).',
            theoryMarkdown: `
        ### 1. Səs və Hərf Fərqi
        - Səsləri tələffüz edirik və eşidirik (transkripsiyada göstərilir: $[a]$).
        - Hərfləri yazırıq və görürük.
        - Azərbaycan əlifbasında **32 hərf**, lakin **34 səs** var ($[k']$, $[x']$ səslərinin xüsusi hərfi yoxdur).

        ### 2. Əsas Orfoepiya (Tələffüz) Normaları
        1. **Saitlərin tələffüzü:**
           - İki yanaşı sait gəldikdə: *ailə \to [ayilə], təbiət \to [təbiyət], saat \to [sa:t]*.
           - $o$ saiti alınma sözlərdə: *kompüter \to [kampüter], motor \to [mator]*.
        2. **Samitlərin tələffüzü:**
           - Sonu $b, d, g, c$ ilə bitən sözlərdə təklikdə və samitdən əvvəl karlaşır: *kitab \to [kitap], kənd \to [kənt]*. Saitlə başlayan şəkilçi artırıldıqda cingiltili qalır: *kitaba \to [kitaba]*.
           - Sonu $q$ ilə bitən çoxhecalı milli sözlərdə: *qonaq \to [qonax]*. Saitlə başladıqda $ğ$-ya keçir: *qonağa*.
           - Sonu $k$ ilə bitən çoxhecalı sözlərdə: *çiçək \to [çiçəx']*. Saitlə başladıqda $y$-ə keçir: *çiçəyə*.

        ### 3. Vurğu
        Sözdə hecalardan birinin digərlərinə nisbətən qüvvətli deyilməsinə **heca vurğusu** deyilir. Azərbaycan dilində vurğu əsasən **sonuncu hecaya** düşür.
        - Vurğu qəbul etməyən şəkilçilər: *-ma²* (inkarlıq), *-ca²* (zərf düzəldən), şəxs (xəbərlik) şəkilçiləri, *-gil, -raq*.
            `,
            keyFormulas: [
              {
                    "id": "f-az10-u1-1",
                    "name": "Sonu Q və K ilə Bitən Sözlərin Tələffüz Qaydası",
                    "latex": "\\text{Qonaq} \\to [\\text{qonax}]; \\quad \\text{Qonağa} \\to [\\text{qonağa}]; \\qquad \\text{Çiçək} \\to [\\text{çiçəx'}]; \\quad \\text{Çiçəyə} \\to [\\text{çiçəyə}]",
                    "description": "Söz sonu q və k samitlərinin mövqedən asılı tələffüz qanunudur."
              }
        ],
            glossary: [
              {
                    "term": "Orfoepiya",
                    "definition": "Dildəki sözlərin ədəbi tələffüz qaydalarının məcmusu."
              },
              {
                    "term": "Orfoqrafiya",
                    "definition": "Sözlərin düzgün yazılış qaydaları sistemi."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az10-u1-1",
                    "question": "\"Kəpənək\" sözünün tələffüz transkripsiyasını yazın.",
                    "solution": "Sözün sonundakı 'k' samiti kar tələffüz olunur: [kəpənəx']."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az10-u1-1",
                    "question": "Aşağıdakı sözlərdən hansında vurğu birinci hecaya düşür?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Qələm"
                          },
                          {
                                "key": "B",
                                "text": "Dünən"
                          },
                          {
                                "key": "C",
                                "text": "Kitabça"
                          },
                          {
                                "key": "D",
                                "text": "Dənizçi"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "'Dünən' zaman zərfində vurğu birinci hecaya düşür ('dü-nən)."
              }
        ]
          },

  {
            id: 'lesson-azeri-10-u2-lexicology-idioms',
            subjectId: 'azerbaycan_dili',
            grade: 10,
            unit: 'Bölmə 2: Leksikologiya və Frazeologiya',
            unitOrder: 2,
            title: 'Leksik laylar: Terminlər, arxaizmlər, neologizmlər və frazeologizmlər',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 3,
            summary: 'Milli və alınma sözlər, köhnəlmiş sözlər (arxaizmlər və tarixi sözlər), neologizmlər (yeni sözlər) və sabit söz birləşmələri (frazeoloji birləşmələr).',
            theoryMarkdown: `
        ### 1. Dilin Lüğət Tərkibinin Zənginləşməsi
        Dilin lüğət tərkibi daxili imkanlar (yeni söz yaratma) və xarici mənbələr (alınma sözlər) hesabına zənginləşir.

        ### 2. Müasir Dildə İşlənmə Dərəcəsinə Görə Sözlər
        - **Fəal sözlər:** Gündəlik nitqdə müntəzəm istifadə olunan sözlər.
        - **Qeyri-fəal sözlər:**
          - **Tarixi sözlər:** Keçmişdə mövcud olmuş, lakin həmin əşya və ya vəzifə aradan qalxdığı üçün köhnəlmiş sözlər (*darğa, yasavul, çarx, arşın*).
          - **Arxaizmlər:** Əşya yaşayır, lakin onun adı başqa sözlə əvəzlənib (*ayaq — qədəh, əsən — sağ-salamat, tanıq — şahid*).
          - **Neologizmlər:** Elmin, texnologiyanın inkişafı ilə dilə yeni daxil olmuş sözlər (*çat, dron, smartfon, ekosistem*).

        ### 3. Frazeoloji Birləşmələr (Sabit Söz Birləşmələri)
        Tərkib hissələrinə parçalanmayan, mənaca bütöv bir sözə bərabər olan sabit ifadələrdir:
        - Tərkibindəki sözlər öz həqiqi mənasını tam itirir (*gözdən düşmək, burnunun ucu göynəmək, qulaq asmaq*).
        - Cümlənin **tək bir mürəkkəb üzvü** olur.
        - Frazeoloji omonimlik, sinonimlik və antonimlik mövcuddur:
          *Can vermək* (omonim: ölmək / dirilmək).
          *Dil-dil ötmək = ağzına su almaq* (antonim).
            `,
            keyFormulas: [
              {
                    "id": "f-az10-u2-1",
                    "name": "Frazeoloji Birləşmələrin Sintaktik Xassəsi",
                    "latex": "\\text{Frazeologizm} = \\text{Bölünməz vahid} \\implies \\text{Cümlədə tək bir üzv kimi götürülür}",
                    "description": "Cümlə təhlili zamanı frazeoloji birləşmə tərkib hissələrinə ayrılmır."
              }
        ],
            glossary: [
              {
                    "term": "Frazeologizm",
                    "definition": "Məcazi məna daşıyan və bütövlükdə bir anlayışı ifadə edən sabit söz birləşməsi."
              },
              {
                    "term": "Arxaizm",
                    "definition": "Müasir dildə başqa sözlə əvəz olunmuş köhnəlmiş söz."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az10-u2-1",
                    "question": "\"Şagird müəllimin izahatına qulaq asırdı\" cümləsindəki frazeologizmi tapın və cümlə üzvünü təyin edin.",
                    "solution": "\"qulaq asırdı\" frazeoloji birləşmədir (dinləyirdi mənasında) və bütövlükdə cümlənin feli xəbəridir."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az10-u2-1",
                    "question": "Aşağıdakı cütlüklərdən hansı frazeoloji sinonimdir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Cin atına minmək — Zəhləsi getmək"
                          },
                          {
                                "key": "B",
                                "text": "Gözünün odunu almaq — Qorxutmaq"
                          },
                          {
                                "key": "C",
                                "text": "Burnunun ucu göynəmək — Əldən düşmək"
                          },
                          {
                                "key": "D",
                                "text": "Ağzına su almaq — Dinib-danışmamaq"
                          }
                    ],
                    "correctKey": "D",
                    "explanation": "'Ağzına su almaq' və 'dinib-danışmamaq' eyni mənanı (susmağı) ifadə edən frazeoloji qarşılıqdır."
              }
        ]
          },

  {
            id: 'lesson-azeri-10-u3-orthography-rules',
            subjectId: 'azerbaycan_dili',
            grade: 10,
            unit: 'Bölmə 3: Morfologiya və orfoqrafiya qaydaları',
            unitOrder: 3,
            title: 'Mürəkkəb sözlərin və hissəciklərin yazılış qaydaları (Bitişik, defis və ayrı)',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 3,
            summary: 'Mürəkkəb isimlərin, sifətlərin, sayların və zərflərin yazılışı, -mı⁴, da/də, idi/imiş hissəciklərinin və qoşmaların orfoqrafiyası.',
            theoryMarkdown: `
        ### 1. Bitişik Yazılan Mürəkkəb Sözlər
        - Müxtəlif mənalı sözlərin birləşməsindən yarananlar: *dəvədabanı, tozsoran, suiti, günəbaxan*.
        - İki sadə sözün arasında bitişdirici -a² şəkilçisi olduqda: *qaçaqaç, basabas, vurhavur*.
        - Birinci tərəfi kontr-, vitse- kimi olmayan mürəkkəb adlar.

        ### 2. Defislə Yazılan Mürəkkəb Sözlər
        - Eyni sözün təkrarı ilə yarananlar: *tez-tez, asta-asta, səhər-səhər*.
        - Yaxın və ya əks mənalı sözlərin birləşməsi: *dərə-təpə, gecə-gündüz, qohum-əqrəba*.
        - Tərəflərindən biri və ya hər ikisi ayrılıqda işlənməyən sözlər: *kağız-kuğuz, əzik-üzük, kələ-kötür*.
        - İzafət tərkibləri: *tərzi-hərəkət, nöqteyi-nəzər*.
        - Əks-, qeyri-, vitse-, ober- ön şəkilçili sözlər: *qeyri-maddi, vitse-prezident, əks-inqilab*.

        ### 3. Köməkçi Sözlərin Yazılışı
        - **Da, də:** Bağlayıcı olduqda **ayrı** (*Əli də gəldi*), yerlik hal və ya ədat olduqda **bitişik** yazılır (*evdə, gəlsənə*).
        - **Mı, mi, mu, mü:** Sual ədatı həmişə sözdən **ayrı** yazılır: *Gəldin mi? Oxudun mu?*
        - **İdi, imiş, isə:** Qısaldılmış formaları *-dı⁴, -mış⁴, -sa²* bitişik, tam formaları isə ayrı yazılır (*oxuyurdu / oxuyur idi*).
            `,
            keyFormulas: [
              {
                    "id": "f-az10-u3-1",
                    "name": "Qeyri və İzafət Birləşmələrinin Yazılışı",
                    "latex": "\\text{qeyri-} + \\text{Söz} \\implies \\text{Defis}; \\qquad \\text{tərzi-} + \\text{hərəkət} \\implies \\text{Defis}",
                    "description": "Qeyri- hissəciyi və tərzi-, nöqteyi- tipli ərəb tərkibləri defislə yazılır."
              }
        ],
            glossary: [
              {
                    "term": "Orfoqrafiya norması",
                    "definition": "Sözlərin qəbul edilmiş vahid və düzgün yazılış qanunauyğunluğu."
              },
              {
                    "term": "İzafət",
                    "definition": "Klassik ərəb-fars mənşəli tərzi-hərəkət tipli defisli sintaktik birləşmə."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az10-u3-1",
                    "question": "\"Qeyri adi\" və \"qaça qaç\" sözlərinin orfoqrafik düzəlişini verin.",
                    "solution": "\"Qeyri-adi\" defislə yazılmalıdır. \"Qaçaqaç\" isə bitişdirici -a saiti ilə düzəldiyi üçün bitişik yazılmalıdır."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az10-u3-1",
                    "question": "Aşağıdakı sözlərdən hansının yazılışı düzgündür?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Qeyri adi"
                          },
                          {
                                "key": "B",
                                "text": "Dəvə dabanı"
                          },
                          {
                                "key": "C",
                                "text": "Nöqteyi-nəzər"
                          },
                          {
                                "key": "D",
                                "text": "Gecə gündüz"
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "Nöqteyi-nəzər izafət tərkibidir və defislə düzgün yazılmışdır."
              }
        ]
          },

  {
            id: 'lesson-azeri-10-u4-literary-norms',
            subjectId: 'azerbaycan_dili',
            grade: 10,
            unit: 'Bölmə 4: Ədəbi dilin normaları',
            unitOrder: 4,
            title: 'Ədəbi dilin normaları: Fonetik, leksik və qrammatik normalar',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 3,
            summary: 'Müasir Azərbaycan ədəbi dilinin 3 əsas norması (fonetik, leksik, qrammatik), normanın pozulması halları və redaktə prinsipləri.',
            theoryMarkdown: `
        ### 1. Ədəbi Dilin Normaları Nədir?
        Ədəbi dil ümumxalq dilinin cilalanmış, hamı tərəfindən qəbul edilmiş qayda-qanunlara tabe olan ən yüksək formasıdır. 3 əsas norması var:

        ### 2. Üç Əsas Norma
        1. **Fonetik norma:**
           - Sözlərin mövcud orfoepiya və orfoqrafiya qaydalarına uyğun tələffüzü və yazılışıdır.
           - Ahəng qanununa əməl olunması, səslərin düzgün yazılışı.
           - *Pozulma halı:* "təxəllüs" əvəzinə "təxəllüz", "getmişik" əvəzinə "getmişux" yazmaq və ya demək.
        2. **Leksik norma:**
           - Hər bir sözün öz dəqiq mənasında və yerində işlədilməsidir.
           - Dialekt, jarqon və loru sözlərin ədəbi dildə işlədilməməsi.
           - *Pozulma halı:* "Həkim xəstəni müalicə etdi" əvəzinə "Həkim xəstəni təmir etdi" işlətmək.
        3. **Qrammatik norma:**
           - Sözlərin morfoloji quruluşunun və cümlədə sintaktik sırasının düzgün qurulmasıdır.
           - Şəkilçilərin düzgün ardıcıllığı, mübtəda ilə xəbərin uzlaşması, söz sırası.
           - *Pozulma halı:* "Uşaqlar gəldi" (yerinə gəldilər), "kitablar çoxdur" yerinə "çox kitablar oxudular" (çox sayından sonra isim təkdə olmalıdır).
            `,
            keyFormulas: [
              {
                    "id": "f-az10-u4-1",
                    "name": "Norma Təsnifatı",
                    "latex": "\\text{Fonetik} \\implies \\text{Səs/Yazı}; \\quad \\text{Leksik} \\implies \\text{Sözün mənası}; \\quad \\text{Qrammatik} \\implies \\text{Söz sırası/Şəkilçi}",
                    "description": "Xətanın xarakterinə görə normanın növü təyin olunur."
              }
        ],
            glossary: [
              {
                    "term": "Ədəbi norma",
                    "definition": "Ümumxalq tərəfindən qəbul olunmuş və dövlət dili səviyyəsində qorunan dil qanunauyğunluğu."
              },
              {
                    "term": "Qrammatik norma",
                    "definition": "Sözlərin və cümlələrin morfoloji-sintaktik quruluş qaydaları toplusu."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az10-u4-1",
                    "question": "\"Onlar xeyli kitablar aldılar\" cümləsində hansı ədəbi dil norması pozulmuşdur?",
                    "solution": "'Xeyli' qeyri-müəyyən miqdar sayından sonra gələn isim təkdə olmalıdır (kitab). Cəm şəkilçisi (-lar) artırıldığı üçün qrammatik norma pozulmuşdur."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az10-u4-1",
                    "question": "\"O, həyatın bütün çətinliklərinə dözdü\" əvəzinə \"uddu\" işlədilərsə, hansı norma pozular?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Fonetik norma"
                          },
                          {
                                "key": "B",
                                "text": "Leksik norma"
                          },
                          {
                                "key": "C",
                                "text": "Qrammatik norma"
                          },
                          {
                                "key": "D",
                                "text": "Heç biri"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Söz öz həqiqi və ya düzgün məcazi mənasında işlədilmədiyi üçün leksik norma pozulmuşdur."
              }
        ]
          },

  {
            id: 'lesson-azeri-10-u5-functional-styles',
            subjectId: 'azerbaycan_dili',
            grade: 10,
            unit: 'Bölmə 5: Azərbaycan dilinin üslubları və funksional üslublar',
            unitOrder: 5,
            title: 'Funksional üslublar: Bədii, elmi, publisistik, məişət və rəsmi-işgüzar',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 3,
            summary: 'Azərbaycan dilinin 5 funksional üslubu, onların leksik-qrammatik xüsusiyyətləri, obrazlılıq və standartlıq göstəriciləri.',
            theoryMarkdown: `
        ### 1. Funksional Üslub Nədir?
        Milli ədəbi dilin ictimai həyatın müəyyən bir sahəsində işlənən və tarixi olaraq formalaşmış qollarına **funksional üslublar** deyilir.

        ### 2. Beş Əsas Funksional Üslub
        1. **Bədii üslub:**
           - Ən qədim və zəngin üslubdur.
           - Əsas xüsusiyyəti: **obrazlılıq, emosionallıq, bədii təsvir və ifadə vasitələri** (təşbeh, istiarə, epitet, mübaliğə).
           - Şeir dili və nəsr dilində təzahür edir.
        2. **Elmi üslub:**
           - Elmi əsərlərin, dərsliklərin və monoqrafiyaların dilidir.
           - Əsas xüsusiyyəti: **məntiqlilik, ardıcıllıq, dəqiqlik, terminlərin zənginliyi**.
           - Məcaziliyə və emosionallığa yol verilmir.
        3. **Publisistik üslub:**
           - Qəzet, televiziya, radio və internet mediasının dilidir.
           - Əsas xüsusiyyəti: **kütləvilik, aydınlıq, ictimai-siyasi leksika və təsiredicilik**.
        4. **Məişət üslubu:**
           - İnsanların gündəlik canlı ünsiyyət dilidir.
           - Əsas xüsusiyyəti: **sərbəstlik, dialoq forması, jest və mimikalardan istifadə**.
        5. **Rəsmi-işgüzar üslub:**
           - Dövlət sənədlərinin, qanunların və rəsmi yazışmaların dilidir.
           - Əsas xüsusiyyəti: **standart formullar, şablonluq, arxaik sözlər və birmənalılıq**.
            `,
            keyFormulas: [
              {
                    "id": "f-az10-u5-1",
                    "name": "Üslubların Əsas Ayırıcı Xassələri",
                    "latex": "\\text{Bədii} \\to \\text{Məcaz}; \\quad \\text{Elmi} \\to \\text{Termin}; \\quad \\text{Publisistik} \\to \\text{Kütləvi}; \\quad \\text{Rəsmi} \\to \\text{Şablon}",
                    "description": "Hər üslubun leksik dominant xüsusiyyətidir."
              }
        ],
            glossary: [
              {
                    "term": "Funksional üslub",
                    "definition": "Dilin ictimai fəaliyyət sferasına görə fərqlənən ədəbi qolu."
              },
              {
                    "term": "Publisistika",
                    "definition": "Cəmiyyət üçün aktual olan siyasi və ictimai məsələləri işıqlandıran mətbuat dili."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az10-u5-1",
                    "question": "\"Gülərüz səma ulduzlarla bəzənmişdi\" və \"Fotosintez zamanı qlükoza və oksigen sintez olunur\" cümlələrinin üslubunu təyin edin.",
                    "solution": "Birinci cümlə obrazlı məcazlar ehtiva etdiyi üçün bədii üslubdur. İkinci cümlə isə elmi terminlər və dəqiq fakt ehtiva etdiyi üçün elmi üslubdur."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az10-u5-1",
                    "question": "Aşağıdakılardan hansı rəsmi-işgüzar üslubun xüsusiyyətidir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Geniş məcazilik və bədii suallar"
                          },
                          {
                                "key": "B",
                                "text": "Standart formalar və şablon ifadələr"
                          },
                          {
                                "key": "C",
                                "text": "Jest və mimikaların üstünlüyü"
                          },
                          {
                                "key": "D",
                                "text": "Təşbeh və epitetlərin çoxluğu"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Rəsmi-işgüzar üslub dövlət sənədlərinin dilidir və standart şablon formalarla xarakterizə olunur."
              }
        ]
          },

  {
            id: 'lesson-azeri-11-u1-text-syntax',
            subjectId: 'azerbaycan_dili',
            grade: 11,
            unit: 'Bölmə 1: Mürəkkəb sintaktik bütövlər və Mətn sintaksisi',
            unitOrder: 1,
            title: 'Mətnin abzas quruluşu, cümlələr arası əlaqələr: Zəncirvari və paralel',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 3,
            summary: 'Mətnin strukturu, abzaslar, mikromövzu, açar sözlər və mətndə cümlələrin zəncirvari və paralel əlaqə vasitələri.',
            theoryMarkdown: `
        ### 1. Mətn və Mürəkkəb Sintaktik Bütöv
        Mətn — müəyyən bir mövzu ətrafında birləşən, məna və qrammatik cəhətdən əlaqəli cümlələrin yaratdığı bitkin nitq parçasıdır.
        - **Abzas:** Mətndə bir mikromövzunu əhatə edən və yeni sətirdən başlayan hissədir.
        - **Açar sözlər:** Mətnin əsas ideyasını və məzmununu daşıyan ən vacib sözlərdir.

        ### 2. Mətndə Cümlələrarası Əlaqə Növləri
        1. **Zəncirvari əlaqə:**
           - Hər sonrakı cümlə özündən əvvəlki cümlə ilə birbaşa əlaqələnir.
           - Birinci cümlədəki məlumat növbəti cümlənin başlanğıcı (istinad nöqtəsi) olur.
           - Əlaqələndirici vasitələr: Əvəzliklər, sinonimlər, təkrar olunan sözlər:
             *Şuşa qədim şəhərdir. Bu şəhər həm də musiqi beşiyimizdir. Orada dahi bəstəkarlar yetişmişdir.*
        2. **Paralel əlaqə:**
           - Bütün cümlələr bilavasitə birinci cümləyə (əsas fikrə) bağlanır və onu müxtəlif cəhətdən izah edir.
           - Cümlələrin sintaktik quruluşu adətən eyni tipli (paralel) olur:
             *Gözəl bir yaz səhəri idi. Quşlar cəh-cəh vururdu. Çəmənliklər şehlə parıldayırdı. Meh zərifcə əsirdi.*
            `,
            keyFormulas: [
              {
                    "id": "f-az11-u1-1",
                    "name": "Zəncirvari və Paralel Əlaqə Sxemi",
                    "latex": "\\text{Zəncirvari: } C_1 \\to C_2 \\to C_3; \\qquad \\text{Paralel: } C_1 \\begin{cases} \\to C_2 \\\\ \\to C_3 \\\\ \\to C_4 \\end{cases}",
                    "description": "Zəncirvari ardıcıl həlqələrlə, paralel isə mərkəzi cümləyə eyni anda bağlanır."
              }
        ],
            glossary: [
              {
                    "term": "Mətn",
                    "definition": "Mövzu və ideya vəhdəti olan ən böyük sintaktik vahid."
              },
              {
                    "term": "Zəncirvari əlaqə",
                    "definition": "Cümlələrin bir-birinə əvəzlik və təkrar sözlərlə ardıcıl bağlanması."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az11-u1-1",
                    "question": "\"Dəniz dalğalanırdı. Sahildə balıqçılar tor çəkirdilər. Qağayılar havada dövrə vururdu\" parçasında əlaqə növünü təyin edin.",
                    "solution": "Cümlələrin hər biri ümumi mənzərəni (dəniz sahilini) paralel təsvir edir. Cümlələr bir-birindən yox, ümumi fikirdən asılıdır. Əlaqə növü: paralel əlaqə."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az11-u1-1",
                    "question": "Mətndə hər sonrakı cümlənin əvvəlki cümlədəki sözü əvəzliklə əvəz etməsi hansı əlaqə növünə aiddir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Paralel əlaqə"
                          },
                          {
                                "key": "B",
                                "text": "Zəncirvari əlaqə"
                          },
                          {
                                "key": "C",
                                "text": "Tabesizlik əlaqəsi"
                          },
                          {
                                "key": "D",
                                "text": "Qarışıq əlaqə"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Əvvəlki cümlənin üzvünə istinad edərək irəliləyən əlaqə zəncirvari əlaqədir."
              }
        ]
          },

  {
            id: 'lesson-azeri-11-u2-rhetoric-speech-culture',
            subjectId: 'azerbaycan_dili',
            grade: 11,
            unit: 'Bölmə 2: Nitq mədəniyyəti və Ritorika',
            unitOrder: 2,
            title: 'Nitq mədəniyyətinin şərtləri: Düzgünlük, dəqiqlik, aydınlıq, yığcamlıq və zənginlik',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 3,
            summary: 'Mədəni nitqin 5 əsas keyfiyyəti, ritorika və natiqlik sənəti, dinləmə və replika mədəniyyəti.',
            theoryMarkdown: `
        ### 1. Nitq Mədəniyyəti Nədir?
        Fikrin ədəbi dilin normalarına tam uyğun, dinləyici üçün anlaşıqlı, məntiqli və estetik şəkildə çatdırılması mədəniyyətidir.

        ### 2. Yaxşı Nitqin Əsas Məziyyətləri
        1. **Düzgünlük:** Ədəbi dilin fonetik, leksik və qrammatik normalarına ciddi əməl olunmasıdır. Nitq mədəniyyətinin ilkin təməl şərtidir.
        2. **Dəqiqlik:** Sözlərin ifadə olunan fikrə tam uyğun seçilməsi, çoxmənalılıq və dolaşıqlığa yol verilməməsidir.
        3. **Aydınlıq:** Dinləyicinin nitqi heç bir əlavə izahat olmadan asanlıqla başa düşməsidir. Həddindən artıq anlaşılmaz əcnəbi sözlərdən çəkinmək tələb olunur.
        4. **Yığcamlıq:** Fikrin minimum sözlə, lakonik və dolğun çatdırılmasıdır (artıq sözçülükdən — pleonazmdan qaçmaq).
        5. **Zənginlik:** Natiqin geniş söz ehtiyatına, zəngin sinonimik sıraya, atalar sözlərinə və frazeoloji ifadələrə malik olmasıdır.

        ### 3. Ritorika (Natiqlik Sənəti)
        Kütlə qarşısında inandırıcı, təsirli və cəlbedici çıxış etmə nəzəriyyəsi və sənətidir.
        - Natiqin intonasiyası, səs tonu, fasilələri (pauza), jest və mimikaları, göz təması əsas amillərdir.
            `,
            keyFormulas: [
              {
                    "id": "f-az11-u2-1",
                    "name": "Nitq Mədəniyyətinin 5 Qızıl Şərti",
                    "latex": "\\text{Nitq} = \\text{Düzgünlük} + \\text{Dəqiqlik} + \\text{Aydınlıq} + \\text{Yığcamlıq} + \\text{Zənginlik}",
                    "description": "Uğurlu ünsiyyətin təməl meyarlarıdır."
              }
        ],
            glossary: [
              {
                    "term": "Ritorika",
                    "definition": "Gözəl, məntiqli və inandırıcı danışma sənəti haqqında elm."
              },
              {
                    "term": "Pleonazm",
                    "definition": "Eyni mənanı verən sözlərin lüzumsuz yerə yanaşı işlədilməsi (məsələn: 'geriyə qayıtmaq')."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az11-u2-1",
                    "question": "\"O, geriyə qayıtdı və öz şəxsi fikrini bildirdi\" cümləsindəki nitq qüsurunu müəyyən edin.",
                    "solution": "\"Qayıtmaq\" zatən geriyə hərəkətdir, \"öz\" və \"şəxsi\" sözləri eyni mənanı təkrar edir. Düzgün yığcam variant: \"O qayıtdı və fikrini bildirdi\"."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az11-u2-1",
                    "question": "Fikrin artıq sözlər işlətmədən, lakonik ifadə olunması nitqin hansı məziyyətidir?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Zənginlik"
                          },
                          {
                                "key": "B",
                                "text": "Yığcamlıq"
                          },
                          {
                                "key": "C",
                                "text": "Təmizlik"
                          },
                          {
                                "key": "D",
                                "text": "Münasiblik"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Artıq sözlərdən qaçaraq lakonik danışmaq nitqin yığcamlığıdır."
              }
        ]
          },

  {
            id: 'lesson-azeri-11-u3-punctuation-system',
            subjectId: 'azerbaycan_dili',
            grade: 11,
            unit: 'Bölmə 3: Durğu işarələri sistemi və orfoqrafiya lüğəti qaydaları',
            unitOrder: 3,
            title: 'Müasir Azərbaycan dilində durğu işarələri sistemi və orfoqrafik prinsiplər',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 3,
            summary: '10 əsas durğu işarəsi (nöqtə, sual, nida, üç nöqtə, vergül, nöqtəli vergül, iki nöqtə, tire, dırnaq, mötərizə), onların məntiqi və sintaktik funksiyaları.',
            theoryMarkdown: `
        ### 1. Durğu İşarələrinin Funksiyaları
        Durğu işarələri yazılı nitqdə fikrin düzgün anlaşılmasına, intonasiyanın və sintaktik əlaqələrin ifadəsinə xidmət edir:
        1. **Ayırıcı işarələr:** Cümlələri və ya bitmiş fikirləri bir-birindən ayırır (nöqtə, sual işarəsi, nida işarəsi, üç nöqtə).
        2. **Birləşdirici və fərqləndirici işarələr:** Cümlə daxilində üzvləri, budaq cümlələri, xitab və ara sözləri təcrid edir (vergül, nöqtəli vergül, iki nöqtə, tire).
        3. **Məhdudlaşdırıcı işarələr:** Başqasının sözünü və ya əlavə məlumatı ayıran qoşa işarələrdir (dırnaqlar, mötərizələr).

        ### 2. Çətin Məqamlar və Xüsusi Qaydalar
        - **Nöqtəli vergül (;):** Mürəkkəb cümlənin tərkib hissələri daxilində artıq vergül olduqda və ya tərəflər məzmunca bir qədər uzaq olduqda qoyulur.
        - **İki nöqtə (:):** İzah, aydınlaşdırma, səbəb bildirdikdə və ya vasitəsiz nitqdən əvvəl qoyulur.
        - **Tire (—):** Xitab sonda olduqda, vasitəsiz nitqdən sonra, buraxılmış xəbərin yerində və dialoqlarda istifadə olunur.
            `,
            keyFormulas: [
              {
                    "id": "f-az11-u3-1",
                    "name": "Nöqtəli Vergül Tətbiqi",
                    "latex": "[\\dots, \\dots]; \\qquad [\\dots, \\dots].",
                    "description": "Daxilində vergül olan müstəqil bloklar nöqtəli vergüllə ayrılır."
              }
        ],
            glossary: [
              {
                    "term": "Punktuasiya",
                    "definition": "Durğu işarələrinin işlənmə qaydaları haqqında dilçilik bəhsi."
              },
              {
                    "term": "Təcrid",
                    "definition": "Müəyyən söz və ya cümlənin durğu işarələri ilə xüsusi ayrılması."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az11-u3-1",
                    "question": "\"Bağda meyvələr alma armud heyva yetişmişdi lakin onları yığan yox idi\" cümləsində durğu işarələrini təyin edin.",
                    "solution": "\"Bağda meyvələr: alma, armud, heyva yetişmişdi; lakin onları yığan yox idi.\" (Həmcins üzvlər üçün iki nöqtə və vergül, birinci hissə mürəkkəb olduğu üçün qarşılaşdırmadan əvvəl nöqtəli vergül)."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az11-u3-1",
                    "question": "Dialoqlarda hər bir şəxsin nitqinin əvvəlində hansı durğu işarəsi qoyulur?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Dırnaq"
                          },
                          {
                                "key": "B",
                                "text": "Tire"
                          },
                          {
                                "key": "C",
                                "text": "İki nöqtə"
                          },
                          {
                                "key": "D",
                                "text": "Vergül"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Dialoqlarda replikaların qarşısında tire (—) işarəsi qoyulur."
              }
        ]
          },

  {
            id: 'lesson-azeri-11-u4-official-documents',
            subjectId: 'azerbaycan_dili',
            grade: 11,
            unit: 'Bölmə 4: Rəsmi və işgüzar sənədlər',
            unitOrder: 4,
            title: 'İşgüzar sənədlər: Ərizə, arayış, tərcümeyi-hal, akt, protokol, elan',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 3,
            summary: 'Rəsmi-işgüzar sənədlərin standart rekvizitləri, hüquqi əhəmiyyəti, ərizə, tərcümeyi-hal, akt, protokol və elan yazılış qaydaları.',
            theoryMarkdown: `
        ### 1. İşgüzar Sənədlər və Rekvizitlər
        Vətəndaşların təşkilatlarla və ya təşkilatların bir-biri ilə hüquqi münasibətlərini tənzimləyən sənədlərdir. Hər bir sənədin dəqiq **rekvizitləri** (standart forması) olmalıdır.

        ### 2. Əsas İşgüzar Sənəd Növləri
        1. **Ərizə:** Şəxsin hər hansı təşkilat rəhbərliyinə rəsmi müraciətidir (xahiş, şikayət, təklif).
           - Başlıq (kimə), kimdən, sözün mərkəzində "Ərizə", mətn, tarix (sağda/solda) və imza.
        2. **Tərcümeyi-hal (CV / Avtobioqrafiya):** Şəxsin öz həyat yolunu xronoloji ardıcıllıqla qələmə aldığı sənəddir.
           - Doğum tarixi, yeri, təhsili, əmək fəaliyyəti, ailə vəziyyəti ardıcıl qeyd olunur.
        3. **Arayış:** Şəxsin kimliyini, təhsil və ya iş yerini, yaşayış ünvanını təsdiq edən rəsmi sənəddir.
        4. **Akt:** Hər hansı baş vermiş faktı, hadisəni bir neçə nəfərin (komissiyanın) iştirakı ilə təsdiq edən sənəddir.
        5. **Protokol:** İclas, müşavirə və ya konfransın gedişatını, çıxışları və qəbul olunmuş qərarları dəqiq əks etdirən sənəddir.
        6. **Elan:** Qarşıda duran hər hansı tədbir, hadisə barədə ictimaiyyətə qabaqcadan verilən qısa xəbərdarlıq sənədidir.
            `,
            keyFormulas: [
              {
                    "id": "f-az11-u4-1",
                    "name": "Ərizənin Standart Strukturu",
                    "latex": "\\text{[Ünvanlanan Rəhbər]} \\to \\text{[Ərizəçi]} \\to \\text{\"Ərizə\"} \\to \\text{[Məzmun]} \\to \\text{[Tarix və İmza]}",
                    "description": "Rəsmi ərizənin dəyişməz struktur ardıcıllığıdır."
              }
        ],
            glossary: [
              {
                    "term": "Rekvizit",
                    "definition": "Rəsmi sənədin hüquqi qüvvəyə malik olması üçün tələb olunan zəruri elementlər (tarix, imza, möhür və s.)."
              },
              {
                    "term": "Protokol",
                    "definition": "Toplantının gedişatını və qəbul olunmuş qərarları rəsmiləşdirən sənəd."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az11-u4-1",
                    "question": "Məktəb kitabxanasında kitabların sayını yoxlayan komissiya hansı sənədi tərtib etməlidir?",
                    "solution": "Bir neçə nəfərin iştirakı ilə faktı qeydə almaq və təsdiq etmək üçün 'Akt' tərtib olunmalıdır."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az11-u4-1",
                    "question": "İnsanın öz həyatını doğumundan bu günə qədər xronoloji ardıcıllıqla təsvir etdiyi sənəd hansıdır?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Ərizə"
                          },
                          {
                                "key": "B",
                                "text": "Arayış"
                          },
                          {
                                "key": "C",
                                "text": "Tərcümeyi-hal"
                          },
                          {
                                "key": "D",
                                "text": "Protokol"
                          }
                    ],
                    "correctKey": "C",
                    "explanation": "Şəxsin öz həyat yolunu xronoloji ardıcıllıqla yazdığı sənəd tərcümeyi-haldır (autobioqrafiya)."
              }
        ]
          },

  {
            id: 'lesson-azeri-11-u5-essay-writing',
            subjectId: 'azerbaycan_dili',
            grade: 11,
            unit: 'Bölmə 5: Mətn üzərində iş və esse/məqalə yazma texnikası',
            unitOrder: 5,
            title: 'Esse və məqalə yazma texnikası: Giriş, əsas hissə və nəticə, arqumentasiya',
            order: 1,
            readTimeMinutes: 10,
            difficulty: 3,
            summary: 'Esse janrının xüsusiyyətləri, struktur bölmələri (tezis, arqument, fakt, nəticə), paraqraf keçidləri və yaradıcı yazı bacarıqları.',
            theoryMarkdown: `
        ### 1. Esse Nədir?
        Esse — müəllifin hər hansı mövzu, fəlsəfi, əxlaqi və ya ictimai problem haqqında sərbəst, fərdi düşüncələrini əks etdirən yaradıcı nəsr janrıdır.

        ### 2. Essenin Kompozisiya Strukturu
        1. **Giriş hissə:**
           - Mövzuya maraq oyadan cümlə (qarmaq / hook).
           - Problemin aktuallığının qısa izahı.
           - **Tezis cümləsi:** Müəllifin müdafiə edəcəyi əsas fikir (essenin onurğa sütunu).
        2. **Əsas hissə (2-3 abzas):**
           - Hər abzasda bir alt-fikir irəli sürülür.
           - **Arqumentasiya:** Fikri sübut edən faktlar, sitatlar, tarixi nümunələr və ya statistik məlumatlar.
           - Əks arqumentlərin təkzib edilməsi.
        3. **Nəticə hissə:**
           - Tezis başqa sözlərlə yenidən xatırladılır.
           - Bütün arqumentlər ümumiləşdirilir və son təsirli tövsiyə və ya çağırışla tamamlanır.

        ### 3. Yazı Prosesinin Mərhələləri
        1. **Planlaşdırma (Brainstorming):** Fikirlərin toplanması və xəritələnməsi.
        2. **Qaralama (Drafting):** Fikirlərin fasiləsiz yazılması.
        3. **Redaktə və korreksiya (Editing):** Qrammatik, orfoqrafik və durğu işarələri xətalarının düzəldilməsi.
            `,
            keyFormulas: [
              {
                    "id": "f-az11-u5-1",
                    "name": "Essenin Klassik Triadası",
                    "latex": "\\text{Giriş (Tezis)} \\to \\text{Əsas Hissə (Arqument + Fakt)} \\to \\text{Nəticə (Ümumiləşdirmə)}",
                    "description": "Akademik və yaradıcı essenin standart kompozisiya modelidir."
              }
        ],
            glossary: [
              {
                    "term": "Tezis",
                    "definition": "Müəllifin doğruluğunu sübut etməyə çalışdığı əsas müddəa, ana fikir."
              },
              {
                    "term": "Arqument",
                    "definition": "Tezisi əsaslandırmaq üçün gətirilən məntiqi dəlil və ya sübut."
              }
        ],
            solvedExamples: [
              {
                    "id": "ex-az11-u5-1",
                    "question": "\"Kitab oxumaq insanın dünyagörüşünü genişləndirir\" tezisi üçün iki inandırıcı arqument gətirin.",
                    "solution": "1. Kitab mütaliəsi insanın lüğət ehtiyatını və nitq mədəniyyətini zənginləşdirir. 2. Tarixi və bədii əsərlər insanı müxtəlif dövrlərin təcrübəsi ilə tanış edərək tənqidi təfəkkürü inkişaf etdirir."
              }
        ],
            miniQuiz: [
              {
                    "questionId": "mq-az11-u5-1",
                    "question": "Essenin giriş hissəsində müəllifin sübut etmək istədiyi əsas müddəa necə adlanır?",
                    "options": [
                          {
                                "key": "A",
                                "text": "Epiloq"
                          },
                          {
                                "key": "B",
                                "text": "Tezis"
                          },
                          {
                                "key": "C",
                                "text": "Məcaz"
                          },
                          {
                                "key": "D",
                                "text": "Pleonazm"
                          }
                    ],
                    "correctKey": "B",
                    "explanation": "Müəllifin esse boyu müdafiə etdiyi əsas fikir tezis adlanır."
              }
        ]
          }
,

  // =========================================================================
  // 3. FİZİKA (AR Elm və Təhsil Nazirliyi e-Dərslik: 7, 8, 9, 10, 11 - 34 Bölmə)
  // =========================================================================
  {
          id: 'lesson-phys-7-u1-measurement',
          subjectId: 'fizika',
          grade: 7,
          unit: 'Bölmə 1: Fizika — təbiət haqqında elmdir. Maddə və sahə. Ölçmələr',
          unitOrder: 1,
          title: 'Fiziki kəmiyyətlər, ölçmə cihazları və mütləq xəta',
          order: 1,
          readTimeMinutes: 8,
          difficulty: 1,
          summary: 'Maddə və fiziki sahə, Beynəlxalq Vahidlər Sistemi (BS / SI), cihazın bir bölgüsünün qiyməti və ölçmə xətası.',
          theoryMarkdown: `
      ### 1. Materiya, Maddə və Sahə
      Ətrafımızda mövcud olan bütün maddi aləm **materiya** adlanır. Materiya iki şəkildə mövcuddur:
      - **Maddə:** Kütləsi və həcmi olan varlıqlardır (su, dəmir, hava, ağac).
      - **Fiziki sahə:** Maddələrin qarşılıqlı təsirini ötürən xüsusi materiya növüdür (qravitasiya, elektrik və maqnit sahələri).

      ### 2. Beynəlxalq Vahidlər Sistemi (BS / SI)
      Əsas fiziki kəmiyyətlər və vahidləri:
      - Uzunluq: metr ($m$)
      - Kütlə: kiloqram ($kq$)
      - Zaman: saniyə ($san$)
      - Cərəyan şiddəti: amper ($A$)
      - Temperatur: kelvin ($K$)
      - İşıq şiddəti: kandela ($kd$)
      - Maddə miqdarı: mol ($mol$)

      ### 3. Ölçmə Cihazının Bölgü Qiyməti və Xəta
      Cihazın şkalasında iki ən yaxın rəqəmli xətt arasındakı fərq tapılır və aradakı bölgülərin sayına bölünür:
      $$C = \frac{a - b}{N}$$
      - **Mütləq xəta:** Cihazın ən kiçik bölgü qiymətinin yarısına bərabərdir:
      $$\Delta x = \frac{C}{2}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p7-u1-1",
                  "name": "Bölgü Qiyməti Düsturu",
                  "latex": "C = \\frac{a - b}{N}",
                  "description": "Şkala üzərində iki qonşu rəqəm fərqinin aradakı bölgü sayına nisbətidir."
            },
            {
                  "id": "f-p7-u1-2",
                  "name": "Cihazın Mütləq Xətası",
                  "latex": "\\Delta x = \\frac{C}{2}",
                  "description": "Ölçmənin mütləq xətası bölgü qiymətinin yarısı qədər qəbul edilir."
            }
      ],
          glossary: [
            {
                  "term": "Fiziki kəmiyyət",
                  "definition": "Cismin və ya hadisənin ölçülə bilən xassəsi (uzunluq, kütlə, zaman və s.)."
            },
            {
                  "term": "Materiya",
                  "definition": "Şüurumuzdan kənarda və ondan asılı olmayaraq mövcud olan bütün obyektiv aləm."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p7-u1-1",
                  "question": "Xətkeşdə 10 sm və 20 sm bölgüləri arasında 20 xırda bölgü vardır. Xətkeşin bir bölgüsünün qiymətini və xətasını tapın.",
                  "solution": "$C = \\frac{20 - 10}{20} = \\frac{10}{20} = 0.5 \\text{ sm} = 5 \\text{ mm}$. Mütləq xəta: $\\Delta x = \\frac{5}{2} = 2.5 \\text{ mm}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p7-u1-1",
                  "question": "Beynəlxalq Sistemdə (BS) zamanın əsas vahidi hansıdır?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Dəqiqə"
                        },
                        {
                              "key": "B",
                              "text": "Saat"
                        },
                        {
                              "key": "C",
                              "text": "Saniyə"
                        },
                        {
                              "key": "D",
                              "text": "Sutka"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "BS-də zamanın əsas vahidi saniyədir (san)."
            }
      ]
        },

  {
          id: 'lesson-phys-7-u2-uniform-motion',
          subjectId: 'fizika',
          grade: 7,
          unit: 'Bölmə 2: Mexaniki hərəkət. Düzxətli bərabərsürətli hərəkət',
          unitOrder: 2,
          title: 'Düzxətli bərabərsürətli hərəkət, sürət və yol düsturu',
          order: 1,
          readTimeMinutes: 9,
          difficulty: 1,
          summary: 'Maddi nöqtə, trayektoriya, gedilən yol və yerdəyişmə, sürət anlayışı və $s = v \cdot t$ asılılığı.',
          theoryMarkdown: `
      ### 1. Mexaniki Hərəkət və Əsas Anlayışlar
      Zaman keçdikcə cismin fəzada digər cisimlərə nəzərən vəziyyətinin dəyişməsinə **mexaniki hərəkət** deyilir.
      - **Maddi nöqtə:** Verilmiş şəraitdə ölçüləri nəzərə alınmayacaq qədər kiçik olan cisimdir.
      - **Trayektoriya:** Maddi nöqtənin hərəkət zamanı cızdığı xəttdir.
      - **Yol ($l$):** Trayektoriyanın uzunluğudur (skalyar kəmiyyətdir).
      - **Yerdəyişmə ($\vec{s}$):** Hərəkətin başlanğıc və son nöqtələrini birləşdirən istiqamətlənmiş düz xətt parçasıdır (vektorial kəmiyyətdir).

      ### 2. Düzxətli Bərabərsürətli Hərəkət
      Cismin ixtiyari bərabər zaman fasilələrində bərabər yerdəyişmələr icra etdiyi hərəkətdir.
      - **Sürət:** Yerdəyişmənin bu yerdəyişməyə sərf olunan zamana nisbətinə bərabər olan vektorial kəmiyyətdir:
      $$v = \frac{s}{t}, \qquad [v] = 1 \text{ m/san}$$
      - **Gedilən yol:**
      $$s = v \cdot t$$
      - $1 \text{ m/san} = 3.6 \text{ km/saat}$
          `,
          keyFormulas: [
            {
                  "id": "f-p7-u2-1",
                  "name": "Bərabərsürətli Hərəkətdə Sürət",
                  "latex": "v = \\frac{s}{t}",
                  "description": "Sürət yolun zamana nisbətinə bərabərdir."
            },
            {
                  "id": "f-p7-u2-2",
                  "name": "Gedilən Yol",
                  "latex": "s = v \\cdot t",
                  "description": "Gedilən yol sürətlə zamanın hasilidir."
            }
      ],
          glossary: [
            {
                  "term": "Yerdəyişmə",
                  "definition": "Hərəkətin başlanğıc və son nöqtələrini birləşdirən yönəlmiş xətt parçası."
            },
            {
                  "term": "Trayektoriya",
                  "definition": "Hərəkət edən cismin fəzada buraxdığı xəyali iz və ya xətt."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p7-u2-1",
                  "question": "Avtomobil $72 \\text{ km/saat}$ sürətlə 10 saniyə hərəkət etmişdir. Onun getdiyi yolu metrlə hesablayın.",
                  "solution": "Əvvəlcə sürəti m/san-yə çevirək: $v = 72 : 3.6 = 20 \\text{ m/san}$. Yol: $s = v \\cdot t = 20 \\cdot 10 = 200 \\text{ metr}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p7-u2-1",
                  "question": "$54 \\text{ km/saat}$ neçə $\\text{m/san}$-yə bərabərdir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "10 m/san"
                        },
                        {
                              "key": "B",
                              "text": "15 m/san"
                        },
                        {
                              "key": "C",
                              "text": "20 m/san"
                        },
                        {
                              "key": "D",
                              "text": "25 m/san"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "54 / 3.6 = 15 m/san."
            }
      ]
        },

  {
          id: 'lesson-phys-7-u3-density',
          subjectId: 'fizika',
          grade: 7,
          unit: 'Bölmə 3: Maddənin quruluşu və xassələri. Kütlə və sıxlıq',
          unitOrder: 3,
          title: 'Maddənin quruluşu, cismin kütləsi və sıxlıq düsturu',
          order: 1,
          readTimeMinutes: 9,
          difficulty: 1,
          summary: 'Molekullar və atomlar, diffuziya, cismin kütləsi ($m$), həcmi ($V$) və maddənin sıxlığı ($\rho = m/V$).',
          theoryMarkdown: `
      ### 1. Maddənin Quruluşu və Diffuziya
      Bütün maddələr atom və molekul adlanan çox kiçik zərrəciklərdən təşkil olunmuşdur.
      - Molekullar fasiləsiz və xaotik (nizamsız) istilik hərəkətindədir.
      - **Diffuziya:** Bir maddənin molekullarının digər maddənin molekulları arasına öz-özünə daxil olmasıdır. Temperatur artdıqca diffuziya sürətlənir.

      ### 2. Kütlə
      Cismin ətalətlilik və qravitasiya xassələrini xarakterizə edən skalyar fiziki kəmiyyətdir. İşarəsi $m$, BS-də vahidi kiloqramdır ($1 \text{ kq} = 1000 \text{ q}$).

      ### 3. Maddənin Sıxlığı
      Vahid həcmdəki maddənin kütləsinə bərabər olan fiziki kəmiyyətə **maddənin sıxlığı** deyilir:
      $$\rho = \frac{m}{V}$$
      - BS-də vahidi: $\text{kq/m}^3$ ($1 \text{ q/sm}^3 = 1000 \text{ kq/m}^3$).
      - Suyun sıxlığı: $\rho_{\text{su}} = 1000 \text{ kq/m}^3 = 1 \text{ q/sm}^3$.
      - Kütlə: $m = \rho \cdot V$; $\quad$ Həcm: $V = \frac{m}{\rho}$.
          `,
          keyFormulas: [
            {
                  "id": "f-p7-u3-1",
                  "name": "Maddənin Sıxlığı",
                  "latex": "\\rho = \\frac{m}{V}",
                  "description": "Kütlənin həcmə olan nisbətidir."
            },
            {
                  "id": "f-p7-u3-2",
                  "name": "Cismin Kütləsi",
                  "latex": "m = \\rho \\cdot V",
                  "description": "Kütlə sıxlıqla həcmin hasilinə bərabərdir."
            }
      ],
          glossary: [
            {
                  "term": "Sıxlıq",
                  "definition": "Maddənin vahid həcmdəki kütləsini xarakterizə edən skalyar fiziki kəmiyyət."
            },
            {
                  "term": "Diffuziya",
                  "definition": "Molekulların istilik hərəkəti nəticəsində təmasda olan maddələrin bir-birinə qarışması."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p7-u3-1",
                  "question": "Həcmi $2 \\text{ m}^3$ olan daş parçasının kütləsi 5000 kq-dır. Daşın sıxlığını tapın.",
                  "solution": "$\\rho = \\frac{m}{V} = \\frac{5000}{2} = 2500 \\text{ kq/m}^3$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p7-u3-1",
                  "question": "Sıxlığı $800 \\text{ kq/m}^3$ olan kerosinin $0.5 \\text{ m}^3$ həcminin kütləsi nə qədərdir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "400 kq"
                        },
                        {
                              "key": "B",
                              "text": "800 kq"
                        },
                        {
                              "key": "C",
                              "text": "1600 kq"
                        },
                        {
                              "key": "D",
                              "text": "200 kq"
                        }
                  ],
                  "correctKey": "A",
                  "explanation": "m = ρ * V = 800 * 0.5 = 400 kq."
            }
      ]
        },

  {
          id: 'lesson-phys-7-u4-forces',
          subjectId: 'fizika',
          grade: 7,
          unit: 'Bölmə 4: Qüvvə və qarşılıqlı təsir',
          unitOrder: 4,
          title: 'Ağırlıq qüvvəsi, elastiklik qüvvəsi və sürtünmə qüvvəsi',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 1,
          summary: 'Qüvvə anlayışı, dinamometr, ağırlıq qüvvəsi $F = mg$, Huk qanunu $F_{\text{el}} = k\Delta l$ və sürtünmə növləri.',
          theoryMarkdown: `
      ### 1. Qüvvə Nədir?
      Cisimlərin qarşılıqlı təsirinin kəmiyyət ölçüsünə **qüvvə** deyilir (vektorial kəmiyyətdir: $\vec{F}$).
      - BS-də vahidi **nyutondur** ($N$).
      - Qüvvə **dinamometrlə** ölçülür. Tətbiq nöqtəsi, ədədi qiyməti və istiqaməti ilə xarakterizə olunur.

      ### 2. Ağırlıq Qüvvəsi
      Yerin cisimləri öz mərkəzinə doğru cəzb etdiyi qüvvəyə **ağırlıq qüvvəsi** deyilir:
      $$F_{\text{ağ}} = m \cdot g$$
      Burada $g \approx 9.8 \text{ N/kq} \approx 10 \text{ N/kq}$ qravitasiya sahəsinin intensivliyidir (sərbəstdüşmə təcili).

      ### 3. Elastiklik Qüvvəsi və Huk Qanunu
      Deformasiya zamanı yaranan və cismi əvvəlki vəziyyətinə qaytarmağa çalışan qüvvədir:
      $$F_{\text{el}} = k \cdot |\Delta l| = k \cdot x$$
      - $k$ — yayın sərtliyidir (N/m), $x = \Delta l$ — mütləq uzanmadır.

      ### 4. Sürtünmə Qüvvəsi
      Toxunan səthlərin nisbi hərəkəti zamanı hərəkət istiqamətinin əksinə yaranan qüvvədir:
      $$F_{\text{sür}} = \mu \cdot N$$
      - Üç növü var: sükunət sürtünməsi, sürüşmə sürtünməsi və diyirlənmə sürtünməsi (diyirlənmə sürtünməsi sürüşmədən qat-qat kiçikdir).
          `,
          keyFormulas: [
            {
                  "id": "f-p7-u4-1",
                  "name": "Ağırlıq Qüvvəsi",
                  "latex": "F_{\\text{ağ}} = m \\cdot g",
                  "description": "Kütlə ilə sərbəstdüşmə təcilinin hasilinə bərabərdir."
            },
            {
                  "id": "f-p7-u4-2",
                  "name": "Huk Qanunu",
                  "latex": "F_{\\text{el}} = k \\cdot \\Delta l",
                  "description": "Elastiklik qüvvəsi yayın uzanması ilə düz mütənasibdir."
            }
      ],
          glossary: [
            {
                  "term": "Qüvvə (F)",
                  "definition": "Cisimlərin qarşılıqlı təsirini xarakterizə edən vektorial kəmiyyət."
            },
            {
                  "term": "Dinamometr",
                  "definition": "Qüvvənin qiymətini ölçmək üçün istifadə olunan yaylı cihaz."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p7-u4-1",
                  "question": "Kütləsi 60 kq olan şagirdə Yerin tətbiq etdiyi ağırlıq qüvvəsini tapın ($g = 10 \\text{ N/kq}$).",
                  "solution": "$F_{\\text{ağ}} = m \\cdot g = 60 \\cdot 10 = 600 \\text{ N}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p7-u4-1",
                  "question": "Sərtliyi $k = 200 \\text{ N/m}$ olan yay 0.05 m uzandıqda yaranan elastiklik qüvvəsi neçə N olar?",
                  "options": [
                        {
                              "key": "A",
                              "text": "5 N"
                        },
                        {
                              "key": "B",
                              "text": "10 N"
                        },
                        {
                              "key": "C",
                              "text": "20 N"
                        },
                        {
                              "key": "D",
                              "text": "40 N"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Fel = k * x = 200 * 0.05 = 10 N."
            }
      ]
        },

  {
          id: 'lesson-phys-7-u5-pressure-archimedes',
          subjectId: 'fizika',
          grade: 7,
          unit: 'Bölmə 5: Təzyiq. Paskal və Arximed qanunları',
          unitOrder: 5,
          title: 'Təzyiq, hidrostatik təzyiq, Paskal və Arximed qanunları',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'Bərk cisimlərin təzyiqi ($p = F/S$), mayelərin hidrostatik təzyiqi ($p = \rho gh$), Paskal qanunu, Arximed (itələmə) qüvvəsi və cisimlərin üzmə şərti.',
          theoryMarkdown: `
      ### 1. Bərk Cisimlərin Təzyiqi
      Səthə perpendikulyar təsir edən təzyiq qüvvəsinin bu səthin sahəsinə olan nisbətinə **təzyiq** deyilir:
      $$p = \frac{F}{S}$$
      - BS-də vahidi: **paskaldır** ($1 \text{ Pa} = 1 \text{ N/m}^2$).

      ### 2. Paskal Qanunu və Hidrostatik Təzyiq
      - **Paskal qanunu:** Qaz və ya maye üzərinə düşən xarici təzyiq dəyişmədən bütün istiqamətlərə bərabər ötürülür.
      - **Hidrostatik təzyiq:** Mayenin öz ağırlığı ilə qabın dibinə və divarlarına göstərdiyi təzyiqdir:
      $$p = \rho \cdot g \cdot h$$
      Burada $\rho$ — mayenin sıxlığı, $h$ — maye sütununun hündürlüyüdür.

      ### 3. Arximed Qanunu və İtələmə Qüvvəsi
      Mayeyə (və ya qaza) batırılmış cismə onun sıxışdırıb çıxardığı mayenin ağırlığına bərabər itələyici qüvvə təsir edir:
      $$F_A = \rho_{\text{maye}} \cdot g \cdot V_{\text{batan}}$$

      ### 4. Cisimlərin Üzmə Şərti
      - $\rho_{\text{cisim}} < \rho_{\text{maye}} \implies$ cisim üzür (səthə qalxır).
      - $\rho_{\text{cisim}} = \rho_{\text{maye}} \implies$ cisim mayenin daxilində asılı qalır.
      - $\rho_{\text{cisim}} > \rho_{\text{maye}} \implies$ cisim dibə batır.
          `,
          keyFormulas: [
            {
                  "id": "f-p7-u5-1",
                  "name": "Hidrostatik Təzyiq",
                  "latex": "p = \\rho \\cdot g \\cdot h",
                  "description": "Təzyiq mayenin sıxlığı və dərinliyi ilə düz mütənasibdir."
            },
            {
                  "id": "f-p7-u5-2",
                  "name": "Arximed Qüvvəsi",
                  "latex": "F_A = \\rho_{\\text{maye}} \\cdot g \\cdot V_{\\text{batan}}",
                  "description": "Mayeyə batan cismə şaquli yuxarı təsir edən itələmə qüvvəsidir."
            }
      ],
          glossary: [
            {
                  "term": "Paskal (Pa)",
                  "definition": "1 kvadrat metr səthə 1 nyuton qüvvənin göstərdiyi təzyiq vahidi."
            },
            {
                  "term": "Arximed qüvvəsi",
                  "definition": "Mayeyə batırılmış cismə təsir edən qaldırıcı hidrostatik qüvvə."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p7-u5-1",
                  "question": "Sıxlığı $1000 \\text{ kq/m}^3$ olan suyun 5 metr dərinlikdə yaratdığı hidrostatik təzyiqi tapın ($g = 10 \\text{ N/kq}$).",
                  "solution": "$p = \\rho \\cdot g \\cdot h = 1000 \\cdot 10 \\cdot 5 = 50\\,000 \\text{ Pa} = 50 \\text{ kPa}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p7-u5-1",
                  "question": "Dəmir parçasının sıxlığı $7800 \\text{ kq/m}^3$, suyun sıxlığı $1000 \\text{ kq/m}^3$-dir. Dəmir suya atıldıqda nə baş verər?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Su üzərində üzər"
                        },
                        {
                              "key": "B",
                              "text": "Su daxilində asılı qalar"
                        },
                        {
                              "key": "C",
                              "text": "Dibə batar"
                        },
                        {
                              "key": "D",
                              "text": "Buxarlanar"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Dəmirin sıxlığı suyun sıxlığından böyük olduğu üçün (7800 > 1000) dibə batar."
            }
      ]
        },

  {
          id: 'lesson-phys-7-u6-work-power-machines',
          subjectId: 'fizika',
          grade: 7,
          unit: 'Bölmə 6: Mexaniki iş və güc. Sadə mexanizmlər',
          unitOrder: 6,
          title: 'Mexaniki iş, güc və sadə mexanizmlər (Lingin tarazlıq şərti)',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 1,
          summary: 'Mexaniki iş $A = F \cdot s$, güc $N = A/t$, mexanikanın qızıl qaydası, ling və bloklar, faydalı iş əmsalı (F.İ.Ə.).',
          theoryMarkdown: `
      ### 1. Mexaniki İş
      Qüvvənin təsiri altında cisim müəyyən yerdəyişmə icra etdikdə **mexaniki iş** görülür:
      $$A = F \cdot s$$
      - BS-də vahidi **couldur** ($1 \text{ C} = 1 \text{ N} \cdot \text{m}$).
      - Əgər qüvvə yerdəyişməyə perpendikulyardırsa, iş görülmür ($A = 0$).

      ### 2. Güc
      İşin görülmə yeyinliyini xarakterizə edən kəmiyyətə **güc** deyilir:
      $$N = \frac{A}{t} = F \cdot v$$
      - BS-də vahidi **vatdır** ($1 \text{ Vt} = 1 \text{ C/san}$, $1 \text{ kVt} = 1000 \text{ Vt}$).

      ### 3. Sadə Mexanizmlər və Mexanikanın "Qızıl Qaydası"
      Qüvvənin istiqamətini və ya qiymətini dəyişmək üçün istifadə olunan qurğulardır (ling, blok, mail müstəvi, vint).
      - **Mexanikanın Qızıl Qaydası:** Heç bir mexanizm işdə qazanc vermir! Qüvvədə neçə dəfə qazanırıqsa, məsafədə bir o qədər dəfə itiririk.
      - **Lingin tarazlıq şərti (Momentlər qaydası):**
      $$F_1 \cdot l_1 = F_2 \cdot l_2 \implies \frac{F_1}{F_2} = \frac{l_2}{l_1}$$
      - **Faydalı İş Əmsalı (F.İ.Ə.):**
      $$\eta = \frac{A_{\text{faydalı}}}{A_{\text{tam}}} \cdot 100\%$$
          `,
          keyFormulas: [
            {
                  "id": "f-p7-u6-1",
                  "name": "Mexaniki Güc",
                  "latex": "N = \\frac{A}{t} = F \\cdot v",
                  "description": "Görülən işin zamana nisbətidir."
            },
            {
                  "id": "f-p7-u6-2",
                  "name": "Lingin Tarazlıq Şərti",
                  "latex": "F_1 \\cdot l_1 = F_2 \\cdot l_2",
                  "description": "Qüvvələrin qollarına hasilləri (momentləri) bərabər olmalıdır."
            }
      ],
          glossary: [
            {
                  "term": "Coul (C)",
                  "definition": "1 nyuton qüvvənin cismi öz istiqamətində 1 metr hərəkət etdirdikdə gördüyü iş."
            },
            {
                  "term": "F.İ.Ə. (η)",
                  "definition": "Görülən faydalı işin sərf olunan ümumi tam işə nisbətinin faizlə ifadəsi."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p7-u6-1",
                  "question": "Mühərrik 20 saniyədə 4000 Coul iş görür. Mühərrikin gücünü hesablayın.",
                  "solution": "$N = \\frac{A}{t} = \\frac{4000}{20} = 200 \\text{ Vt}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p7-u6-1",
                  "question": "Mexanikanın qızıl qaydasına görə sadə mexanizmlər hansı kəmiyyətdə heç vaxt qazanc vermir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Qüvvədə"
                        },
                        {
                              "key": "B",
                              "text": "İşdə"
                        },
                        {
                              "key": "C",
                              "text": "Yolda"
                        },
                        {
                              "key": "D",
                              "text": "Sürətdə"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Mexanikanın qızıl qaydasına görə heç bir sadə mexanizm işdə qazanc vermir."
            }
      ]
        },

  {
          id: 'lesson-phys-8-u1-thermal-energy',
          subjectId: 'fizika',
          grade: 8,
          unit: 'Bölmə 1: İstilik hadisələri və Daxili enerji',
          unitOrder: 1,
          title: 'Daxili enerji, istilikvermə növləri və istilik miqdarı',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'Molekulların hərəkət və qarşılıqlı təsir enerjisi (daxili enerji), istilikkeçirmə, konveksiya, şüalanma, $Q = cm\Delta t$ və yanacağın yanma istiliyi $Q = qm$.',
          theoryMarkdown: `
      ### 1. Daxili Enerji
      Cismin təşkil olunduğu zərrəciklərin xaotik hərəkətinin kinetik və qarşılıqlı təsirinin potensial enerjilərinin cəminə **daxili enerji** deyilir.
      - Daxili enerjini iki üsulla dəyişmək olar: **iş görməklə** və **istilikvermə ilə**.

      ### 2. İstilikvermənin Üç Növü
      1. **İstilikkeçirmə:** Zərrəciklərin bir-biri ilə təması nəticəsində enerjinin ötürülməsi (metallarda ən böyükdür).
      2. **Konveksiya:** Maye və qaz laylarının axını ilə enerjinin köçürülməsi (vakuumda və bərk cisimlərdə baş vermir).
      3. **Şüalanma:** İstiliyin elektromaqnit dalğaları vasitəsilə yayılması (vakuumda da yayılır, Günəş enerjisi kimi).

      ### 3. İstilik Miqdarı Düsturları
      - **Qızma və ya soyuma zamanı ayrılan/udulan istilik:**
      $$Q = c \cdot m \cdot (t_2 - t_1) = c \cdot m \cdot \Delta t$$
      $c$ — maddənin xüsusi istilik tutumudur ($\text{C/(kq} \cdot ^\circ\text{C)}$). Suyun: $c = 4200 \text{ C/(kq} \cdot ^\circ\text{C)}$.
      - **Yanacağın yanması zamanı ayrılan istilik:**
      $$Q = q \cdot m$$
      $q$ — yanacağın xüsusi yanma istiliyidir (C/kq).
          `,
          keyFormulas: [
            {
                  "id": "f-p8-u1-1",
                  "name": "Qızdırılma İstiliyi",
                  "latex": "Q = c \\cdot m \\cdot \\Delta t",
                  "description": "İstilik miqdarı kütlə, temperatur dəyişməsi və xüsusi istilik tutumu ilə mütənasibdir."
            },
            {
                  "id": "f-p8-u1-2",
                  "name": "Yanma İstiliyi",
                  "latex": "Q = q \\cdot m",
                  "description": "m kütləli yanacaq yandıqda ayrılan tam istilik miqdarıdır."
            }
      ],
          glossary: [
            {
                  "term": "Xüsusi istilik tutumu (c)",
                  "definition": "1 kq maddəni 1 dərəcə qızdırmaq üçün tələb olunan istilik miqdarı."
            },
            {
                  "term": "Konveksiya",
                  "definition": "Maye və ya qaz axınlarının yerdəyişməsi ilə istiliyin köçürülməsi."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p8-u1-1",
                  "question": "2 kq suyu $20^\\circ\\text{C}$-dən $50^\\circ\\text{C}$-yə qədər qızdırmaq üçün nə qədər istilik lazımdır? ($c = 4200 \\text{ C/(kq} \\cdot ^\\circ\\text{C)}$).",
                  "solution": "$\\Delta t = 50 - 20 = 30^\\circ\\text{C}$. $Q = c \\cdot m \\cdot \\Delta t = 4200 \\cdot 2 \\cdot 30 = 252\\,000 \\text{ C} = 252 \\text{ kC}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p8-u1-1",
                  "question": "İstilikvermənin hansı növü tam vakuumda (havasız mühitdə) baş verə bilir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "İstilikkeçirmə"
                        },
                        {
                              "key": "B",
                              "text": "Konveksiya"
                        },
                        {
                              "key": "C",
                              "text": "Şüalanma"
                        },
                        {
                              "key": "D",
                              "text": "Diffuziya"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Şüalanma elektromaqnit dalğaları ilə yayıldığı üçün vakuumda da ötürülür."
            }
      ]
        },

  {
          id: 'lesson-phys-8-u2-phase-transitions',
          subjectId: 'fizika',
          grade: 8,
          unit: 'Bölmə 2: Maddənin aqreqat hallarının dəyişməsi',
          unitOrder: 2,
          title: 'Ərimə, bərkimə, buxarlanma, qaynama və istilik balansı',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'Aqreqat hallarının keçidləri, ərimə istiliyi $Q = \lambda m$, buxarlanma istiliyi $Q = L m$, doymuş buxar və istilik balansı tənliyi.',
          theoryMarkdown: `
      ### 1. Maddənin Aqreqat Halları
      Bərk, maye və qaz halları. Hal dəyişiklikləri zamanı temperatur sabit qalır!

      ### 2. Ərimə və Bərkimə
      - Bərk cismin mayeyə çevrilməsi prosesinə **ərimə**, əks prosesə **bərkimə** (kristallaşma) deyilir.
      - Ərimə temperaturunda 1 kq kristallik maddəni əritmək üçün lazım olan istilik:
      $$Q = \lambda \cdot m$$
      $\lambda$ — xüsusi ərimə istiliyidir (C/kq).

      ### 3. Buxarlanma və Qaynama
      - **Buxarlanma:** Mayenin sərbəst səthində ixtiyari temperaturda baş verən buxarəmələgəlmədir.
      - **Qaynama:** Mayenin bütün həcmində buxar qabarcıqlarının yaranması ilə gedən intensiv buxarlanmadır (qaynama temperaturunda baş verir).
      - Qaynama temperaturunda 1 kq mayeni buxara çevirmək üçün lazım olan istilik:
      $$Q = L \cdot m$$
      $L$ — xüsusi buxarlanma istiliyidir (C/kq).

      ### 4. İstilik Balansı Tənliyi
      Təcrid olunmuş sistemdə isti cisimlərin verdiyi istilik miqdarı soyuq cisimlərin aldığı istilik miqdarına bərabərdir:
      $$Q_{\text{verilən}} = Q_{\text{alınan}}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p8-u2-1",
                  "name": "Ərimə İstiliyi",
                  "latex": "Q = \\lambda \\cdot m",
                  "description": "Ərimə temperaturunda maddənin əriməsi üçün tələb olunan istilikdir."
            },
            {
                  "id": "f-p8-u2-2",
                  "name": "Buxarlanma İstiliyi",
                  "latex": "Q = L \\cdot m",
                  "description": "Qaynama temperaturunda mayeni buxara çevirmək üçün lazım olan istilikdir."
            }
      ],
          glossary: [
            {
                  "term": "Xüsusi ərimə istiliyi (λ)",
                  "definition": "Ərimə temperaturunda 1 kq bərk maddəni mayeyə çevirmək üçün tələb olunan enerji."
            },
            {
                  "term": "Doymuş buxar",
                  "definition": "Öz mayesi ilə dinamik tarazlıqda olan buxar."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p8-u2-1",
                  "question": "$0^\\circ\\text{C}$ temperaturda olan 3 kq buzu əritmək üçün nə qədər istilik lazımdır? (Buz üçün $\\lambda = 3.3 \\cdot 10^5 \\text{ C/kq}$).",
                  "solution": "$Q = \\lambda \\cdot m = 3.3 \\cdot 10^5 \\cdot 3 = 9.9 \\cdot 10^5 \\text{ C} = 990 \\text{ kC}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p8-u2-1",
                  "question": "Kristallik maddənin əriməsi prosesi boyunca onun temperaturu necə dəyişir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Ardıcıl artır"
                        },
                        {
                              "key": "B",
                              "text": "Azalır"
                        },
                        {
                              "key": "C",
                              "text": "Sabit qalır"
                        },
                        {
                              "key": "D",
                              "text": "Əvvəl artır, sonra azalır"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Bütün maddə əriyib qurtarana qədər verilən istilik kristallik qəfəsin dağılmasına sərf olunur, temperatur sabit qalır."
            }
      ]
        },

  {
          id: 'lesson-phys-8-u3-heat-engines',
          subjectId: 'fizika',
          grade: 8,
          unit: 'Bölmə 3: İstilik mühərrikləri və onların F.İ.Ə.-sı',
          unitOrder: 3,
          title: 'İstilik mühərrikləri, daxiliyanma mühərriki və F.İ.Ə.',
          order: 1,
          readTimeMinutes: 9,
          difficulty: 2,
          summary: 'İstilik mühərriklərinin iş prinsipi (qızdırıcı, işçi cisim, soyuducu), dörd taktlı daxiliyanma mühərriki (DYM) və F.İ.Ə. düsturları.',
          theoryMarkdown: `
      ### 1. İstilik Mühərriki Nədir?
      Yanacağın daxili enerjisini mexaniki enerjiyə çevirən qurğulara **istilik mühərrikləri** deyilir.
      - Üç əsas hissədən ibarətdir:
        1. **Qızdırıcı:** $Q_1$ istilik miqdarını verir (yanacağın yanması).
        2. **İşçi cisim:** Qaz və ya buxar genişlənərək $A$ işini görür.
        3. **Soyuducu:** Artıq qalan $Q_2$ istiliyini qəbul edir (ətraf mühit).

      ### 2. Dörd Taktlı Daxiliyanma Mühərriki (DYM)
      Porshenin bir gedişinə **takt** deyilir:
      1. Takt: **Sorulma** (yanacaq qarışığı silindrə daxil olur).
      2. Takt: **Sıxılma** (klapanlar bağlanır, qarışıq sıxılır).
      3. Takt: **İşçi gediş** (qığılcım alışır, qaz genişlənərək porşeni itələyir və faydalı iş görülür).
      4. Takt: **Xaricetmə** (yanmış qazlar xaricə atılır).

      ### 3. Faydalı İş Əmsalı (F.İ.Ə.)
      Görülən mexaniki işin ($A = Q_1 - Q_2$) qızdırıcıdan alınan istilik miqdarına olan nisbətidir:
      $$\eta = \frac{A}{Q_1} = \frac{Q_1 - Q_2}{Q_1} = 1 - \frac{Q_2}{Q_1}$$
      Faizlə: $\eta = \frac{Q_1 - Q_2}{Q_1} \cdot 100\%$.
          `,
          keyFormulas: [
            {
                  "id": "f-p8-u3-1",
                  "name": "İstilik Mühərrikinin F.İ.Ə.",
                  "latex": "\\eta = \\frac{Q_1 - Q_2}{Q_1} \\cdot 100\\%",
                  "description": "Qızdırıcıdan alınan və soyuducuya verilən istilik fərqinin qızdırıcı istiliyinə nisbətidir."
            }
      ],
          glossary: [
            {
                  "term": "Daxiliyanma mühərriki",
                  "definition": "Yanacağın birbaşa silindrin daxilində yandığı istilik mühərriki növü."
            },
            {
                  "term": "İşçi gediş",
                  "definition": "Qazın genişlənərək faydalı mexaniki iş gördüyü takt."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p8-u3-1",
                  "question": "İstilik mühərriki qızdırıcıdan 500 C istilik almış, soyuducuya 300 C istilik vermişdir. Mühərrikin F.İ.Ə.-nı tapın.",
                  "solution": "$A = Q_1 - Q_2 = 500 - 300 = 200 \\text{ C}$. $\\eta = \\frac{A}{Q_1} = \\frac{200}{500} = 0.4 = 40\\%$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p8-u3-1",
                  "question": "Dördtaktlı daxiliyanma mühərrikində hansı takt zamanı faydalı iş görülür?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Sorulma"
                        },
                        {
                              "key": "B",
                              "text": "Sıxılma"
                        },
                        {
                              "key": "C",
                              "text": "İşçi gediş"
                        },
                        {
                              "key": "D",
                              "text": "Xaricetmə"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Yalnız III taktda (işçi gediş) qaz genişlənərək mexaniki iş görür."
            }
      ]
        },

  {
          id: 'lesson-phys-8-u4-electrostatics',
          subjectId: 'fizika',
          grade: 8,
          unit: 'Bölmə 4: Elektrik hadisələri və Elektrostatika',
          unitOrder: 4,
          title: 'Elektrik yükləri, elektriklənmə, Kulon qanunu və elektrik sahəsi',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'İki növ elektrik yükü (müsbət və mənfi), elementar yük $e$, elektrik yükünün saxlanması qanunu, Kulon qanunu və elektrik sahəsinin intensivliyi.',
          theoryMarkdown: `
      ### 1. Elektrik Yükləri və Elektriklənmə
      Təbiətdə iki növ elektrik yükü var: **müsbət ($+$)** və **mənfi ($-$)**.
      - Eyni işarəli yüklər bir-birini **itələyir**, əks işarəli yüklər isə **cəzb edir**.
      - Ən kiçik bölünməz yük **elementar elektrik yüküdür** (elektron və protonun yükü):
      $$e = 1.6 \cdot 10^{-19} \text{ Kl}$$
      - **Elektrik yükünün saxlanması qanunu:** Qapalı sistemdə bütün zərrəciklərin yüklərinin cəbri cəmi sabit qalır:
      $$q_1 + q_2 + \dots + q_n = \text{const}$$

      ### 2. Kulon Qanunu
      Vakuumda sükunətdə olan iki nöqtəvi elektrik yükü arasındakı qarşılıqlı təsir qüvvəsi yüklərin modulları hasili ilə düz, aralarındakı məsafənin kvadratı ilə tərs mütənasibdir:
      $$F = k \cdot \frac{|q_1| \cdot |q_2|}{r^2}$$
      $k = 9 \cdot 10^9 \text{ N} \cdot \text{m}^2 / \text{Kl}^2$.

      ### 3. Elektrik Sahəsinin İntensivliyi
      Yüklü zərrəciklər ətrafında yaranan xüsusi materiya növü elektrik sahəsidir.
      - Sahənin qüvvə xarakteristikası **intensivlikdir** ($\vec{E}$):
      $$E = \frac{F}{q_0} = k \cdot \frac{|q|}{r^2}, \qquad [E] = 1 \text{ N/Kl} = 1 \text{ V/m}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p8-u4-1",
                  "name": "Kulon Qanunu",
                  "latex": "F = k \\cdot \\frac{|q_1| \\cdot |q_2|}{r^2}",
                  "description": "Nöqtəvi yüklər arasındakı elektrostatik qüvvədir."
            },
            {
                  "id": "f-p8-u4-2",
                  "name": "Elektrik Sahəsinin İntensivliyi",
                  "latex": "E = \\frac{F}{q}",
                  "description": "Sahə tərəfindən sınaq yükünə təsir edən qüvvənin həmin yükə nisbətidir."
            }
      ],
          glossary: [
            {
                  "term": "Kulon (Kl)",
                  "definition": "BS-də elektrik yükünün əsas vahidi."
            },
            {
                  "term": "Elektroskop",
                  "definition": "Cisimlərin elektriklənməsini və elektrik yükünü aşkar edən sadə cihaz."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p8-u4-1",
                  "question": "İki nöqtəvi yük arasındakı məsafəni 2 dəfə artırdıqda onlar arasındakı Kulon cazibə qüvvəsi necə dəyişər?",
                  "solution": "Kulon qüvvəsi məsafənin kvadratı ilə tərs mütənasibdir ($F \\sim 1/r^2$). Məsafə 2 dəfə artarsa, qüvvə $2^2 = 4$ dəfə azalar."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p8-u4-1",
                  "question": "Bir-birinə toxundurulan $q_1 = +6 \\text{ nKl}$ və $q_2 = -2 \\text{ nKl}$ eyni kürəcikləri araladıqdan sonra hər birinin yükü nə qədər olar?",
                  "options": [
                        {
                              "key": "A",
                              "text": "+4 nKl"
                        },
                        {
                              "key": "B",
                              "text": "+2 nKl"
                        },
                        {
                              "key": "C",
                              "text": "-4 nKl"
                        },
                        {
                              "key": "D",
                              "text": "0 nKl"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Yükün saxlanması qanununa görə q = (q1 + q2) / 2 = (6 - 2) / 2 = +2 nKl."
            }
      ]
        },

  {
          id: 'lesson-phys-8-u5-ohms-law',
          subjectId: 'fizika',
          grade: 8,
          unit: 'Bölmə 5: Daimi elektrik cərəyanı',
          unitOrder: 5,
          title: 'Cərəyan şiddəti, gərginlik, dövrə hissəsi üçün Om qanunu və müqavimət',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'Yüklü zərrəciklərin nizamlı hərəkəti (cərəyan), cərəyan şiddəti $I = q/t$, gərginlik $U = A/q$, Om qanunu $I = U/R$ və naqilin müqaviməti $R = \rho l/S$.',
          theoryMarkdown: `
      ### 1. Elektrik Cərəyanı Nədir?
      Yüklü zərrəciklərin istiqamətlənmiş (nizamlı) hərəkətinə **elektrik cərəyanı** deyilir.
      - Cərəyanın istiqaməti kimi müsbət yüklərin hərəkət istiqaməti qəbul edilmişdir ($+$ qütbdən $-$ qütbə).
      - **Cərəyan şiddəti ($I$):** Naqilin en kəsiyindən vahid zamanda keçən elektrik yükünə deyilir:
      $$I = \frac{q}{t}, \qquad [I] = 1 \text{ Amper} = 1 \text{ A}$$
      Ampermetrlə ölçülür və dövrəyə **ardıcıl** qoşulur.

      ### 2. Elektrik Gərginliyi ($U$)
      Elektrik sahəsinin vahid yükün yerdəyişməsi zamanı gördüyü işə bərabərdir:
      $$U = \frac{A}{q}, \qquad [U] = 1 \text{ Volt} = 1 \text{ V}$$
      Voltmetrlə ölçülür və dövrəyə **paralel** qoşulur.

      ### 3. Dövrə Hissəsi Üçün Om Qanunu
      Dövrə hissəsindəki cərəyan şiddəti həmin hissənin uclarındakı gərginliklə düz, müqaviməti ilə tərs mütənasibdir:
      $$I = \frac{U}{R} \implies U = I \cdot R, \quad R = \frac{U}{I}$$

      ### 4. Naqilin Müqaviməti
      Naqilin cərəyana göstərdiyi əks-təsirdir:
      $$R = \rho_0 \cdot \frac{l}{S}$$
      $\rho_0$ — naqilin xüsusi müqavimətidir ($\Omega \cdot \text{m}$ və ya $\Omega \cdot \text{mm}^2/\text{m}$), $l$ — uzunluğu, $S$ — en kəsiyinin sahəsidir.
          `,
          keyFormulas: [
            {
                  "id": "f-p8-u5-1",
                  "name": "Dövrə Hissəsi üçün Om Qanunu",
                  "latex": "I = \\frac{U}{R}",
                  "description": "Cərəyan şiddəti gərginliklə düz, müqavimətlə tərs mütənasibdir."
            },
            {
                  "id": "f-p8-u5-2",
                  "name": "Naqilin Müqaviməti",
                  "latex": "R = \\rho_0 \\cdot \\frac{l}{S}",
                  "description": "Müqavimət uzunluqla düz, en kəsiyi sahəsi ilə tərs mütənasibdir."
            }
      ],
          glossary: [
            {
                  "term": "Om (Ω)",
                  "definition": "BS-də elektrik müqavimətinin vahidi (1 V / 1 A)."
            },
            {
                  "term": "Xüsusi müqavimət",
                  "definition": "1 metr uzunluqlu və 1 m² en kəsikli naqilin müqavimətini xarakterizə edən parametr."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p8-u5-1",
                  "question": "Müqaviməti $20 \\; \\Omega$ olan qızdırıcının uclarındakı gərginlik 220 V-dur. Ondan keçən cərəyan şiddətini tapın.",
                  "solution": "$I = \\frac{U}{R} = \\frac{220}{20} = 11 \\text{ A}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p8-u5-1",
                  "question": "Ampermetr elektrik dövrəsinə necə qoşulur?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Yalnız paralel"
                        },
                        {
                              "key": "B",
                              "text": "Ardıcıl"
                        },
                        {
                              "key": "C",
                              "text": "Qarışıq"
                        },
                        {
                              "key": "D",
                              "text": "Cərəyan mənbəyinə birbaşa"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Ampermetr çox kiçik müqavimətə malikdir və dövrəyə ardıcıl qoşulur."
            }
      ]
        },

  {
          id: 'lesson-phys-8-u6-electric-power-work',
          subjectId: 'fizika',
          grade: 8,
          unit: 'Bölmə 6: Elektrik cərəyanının işi və gücü. Coul-Lens qanunu',
          unitOrder: 6,
          title: 'Cərəyanın işi, gücü və Coul-Lens qanunu',
          order: 1,
          readTimeMinutes: 9,
          difficulty: 2,
          summary: 'Elektrik cərəyanının gördüyü iş $A = UIt$, elektrik gücü $P = UI$ və naqildən cərəyan keçərkən ayrılan istilik miqdarı (Coul-Lens qanunu: $Q = I^2Rt$).',
          theoryMarkdown: `
      ### 1. Elektrik Cərəyanının İşi
      Cərəyanın naqildə gördüyü iş yükün hərəkəti zamanı sahənin gördüyü işə bərabərdir:
      $$A = q \cdot U = I \cdot U \cdot t$$
      - Om qanununu nəzərə alsaq:
      $$A = I^2 \cdot R \cdot t = \frac{U^2}{R} \cdot t$$
      - BS-də vahidi **couldur** ($C$). Məişətdə sayğaclar enerjini **kilovat-saatla** ölçür:
      $$1 \text{ kVt} \cdot \text{saat} = 1000 \text{ Vt} \cdot 3600 \text{ san} = 3.6 \cdot 10^6 \text{ C} = 3.6 \text{ MC}$$

      ### 2. Elektrik Cərəyanının Gücü
      Vahid zamandakı elektrik işinə bərabərdir:
      $$P = \frac{A}{t} = U \cdot I = I^2 \cdot R = \frac{U^2}{R}$$
      - BS-də vahidi **vatdır** ($Vt$).

      ### 3. Coul-Lens Qanunu
      Tərpənməz naqildən cərəyan keçərkən ayrılan istilik miqdarı cərəyan şiddətinin kvadratı, naqilin müqaviməti və cərəyanın keçmə müddətinin hasilinə bərabərdir:
      $$Q = I^2 \cdot R \cdot t$$
          `,
          keyFormulas: [
            {
                  "id": "f-p8-u6-1",
                  "name": "Coul-Lens Qanunu",
                  "latex": "Q = I^2 \\cdot R \\cdot t",
                  "description": "Naqildən ayrılan istilik miqdarının fundamental qanunudur."
            },
            {
                  "id": "f-p8-u6-2",
                  "name": "Elektrik Gücü",
                  "latex": "P = U \\cdot I = \\frac{U^2}{R}",
                  "description": "Gərginliklə cərəyan şiddətinin hasilidir."
            }
      ],
          glossary: [
            {
                  "term": "Kilovat-saat (kVt·saat)",
                  "definition": "Məişətdə işlədilən elektrik enerjisinin ölçü vahidi (3.6 MC)."
            },
            {
                  "term": "Coul-Lens qanunu",
                  "definition": "Cərəyan keçən naqildə ayrılan istilik miqdarını təyin edən qanun."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p8-u6-1",
                  "question": "220 V şəbəkəyə qoşulmuş və 2 A cərəyan keçən elektrik lampasının gücünü tapın.",
                  "solution": "$P = U \\cdot I = 220 \\cdot 2 = 440 \\text{ Vt}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p8-u6-1",
                  "question": "Naqildən keçən cərəyan şiddətini 2 dəfə artırdıqda ayrılan istilik miqdarı necə dəyişər?",
                  "options": [
                        {
                              "key": "A",
                              "text": "2 dəfə artar"
                        },
                        {
                              "key": "B",
                              "text": "4 dəfə artar"
                        },
                        {
                              "key": "C",
                              "text": "2 dəfə azalar"
                        },
                        {
                              "key": "D",
                              "text": "Dəyişməz"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Coul-Lens qanununa görə Q ~ I^2 olduğundan, cərəyan 2 dəfə artanda istilik 2^2 = 4 dəfə artar."
            }
      ]
        },

  {
          id: 'lesson-phys-8-u7-electromagnetism',
          subjectId: 'fizika',
          grade: 8,
          unit: 'Bölmə 7: Elektromaqnit hadisələri',
          unitOrder: 7,
          title: 'Daimi maqnitlər, Ersted təcrübəsi və elektromaqnitlər',
          order: 1,
          readTimeMinutes: 9,
          difficulty: 2,
          summary: 'Daimi maqnitlər və qütbləri (N və S), Ersted təcrübəsi (cərəyanın maqnit sahəsi), sağ əl qaydası və elektromaqnitin tətbiqləri.',
          theoryMarkdown: `
      ### 1. Daimi Maqnitlər
      Öz xassələrini uzun müddət saxlayan maqnitlənmiş cisimlərdir.
      - İki qütbü var: **şimal ($N$)** və **cənub ($S$)**.
      - Eyni adlı qütblər bir-birini **itələyir**, müxtəlif adlı qütblər **cəzb edir**.
      - Tək maqnit qütbü mövcud deyil: maqniti nə qədər bölsək də, hər parçanın yenə $N$ və $S$ qütbləri yaranır.

      ### 2. Ersted Təcrübəsi və Cərəyanın Maqnit Sahəsi
      1820-ci ildə H.Ersted aşkar etdi ki, cərəyanlı naqilin yaxınlığında maqnit əqrəbi meyil edir. Bu sübut etdi ki, **hərəkət edən elektrik yükləri ətrafında maqnit sahəsi yaranır**.
      - **Sağ əl (vint) qaydası:** Əgər sağ əlin baş barmağı naqildəki cərəyan istiqamətinə yönələrsə, bükülmüş dörd barmaq maqnit qüvvə xətlərinin istiqamətini göstərər.

      ### 3. Elektromaqnitlər
      Daxilinə dəmir içlik qoyulmuş sarğaca (solenoidə) **elektromaqnit** deyilir.
      - Cərəyan şiddətini və sarğıların sayını artırdıqda elektromaqnitin qüvvəsi artır.
      - Texnikada tətbiqləri: teleqraf, elektrik zəngi, qaldırıcı kranlar, relelər.
          `,
          keyFormulas: [
            {
                  "id": "f-p8-u7-1",
                  "name": "Elektromaqnit Qüvvəsi Asılılığı",
                  "latex": "B \\sim I \\cdot n \\quad (\\text{içliklə kəskin artır})",
                  "description": "Maqnit sahəsi cərəyan şiddəti və vahid uzunluqdakı sarğı sayı ilə mütənasibdir."
            }
      ],
          glossary: [
            {
                  "term": "Maqnit sahəsi",
                  "definition": "Hərəkət edən elektrik yükləri və maqnitlər tərəfindən yaradılan xüsusi fiziki sahə."
            },
            {
                  "term": "Elektromaqnit",
                  "definition": "Cərəyan keçdikdə güclü maqnit sahəsi yaradan dəmir içlikli sarğac."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p8-u7-1",
                  "question": "Elektromaqnitin cəzbetmə qabiliyyətini artırmaq üçün nə etmək lazımdır?",
                  "solution": "1. Sarğacdan keçən cərəyan şiddətini artırmaq. 2. Sarğıların sayını artırmaq. 3. Daxilinə ferromaqnit (dəmir) içlik yerləşdirmək."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p8-u7-1",
                  "question": "Ersted təcrübəsi fizika tarixində nəyi kəşf etdi?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Elektronun yükünü"
                        },
                        {
                              "key": "B",
                              "text": "Elektrik cərəyanının maqnit sahəsi yaratmasını"
                        },
                        {
                              "key": "C",
                              "text": "İşığın sürətini"
                        },
                        {
                              "key": "D",
                              "text": "Atomun nüvəsini"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Ersted elektrik cərəyanının ətrafında maqnit sahəsinin mövcud olduğunu sübut etdi."
            }
      ]
        },

  {
          id: 'lesson-phys-9-u1-kinematics-acceleration',
          subjectId: 'fizika',
          grade: 9,
          unit: 'Bölmə 1: Kinematika. Düzxətli bərabərtəcilli hərəkət',
          unitOrder: 1,
          title: 'Bərabərtəcilli hərəkət, təcil, son sürət və yerdəyişmə düsturları',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'Təcil anlayışı $\vec{a} = (\vec{v} - \vec{v}_0)/t$, bərabəryeyinləşən və bərabəryavaşıyan hərəkət, sürət və yerdəyişmə tənlikləri, sərbəstdüşmə.',
          theoryMarkdown: `
      ### 1. Təcil Nədir?
      Sürət dəyişməsinin bu dəyişmənin baş verdiyi zamana nisbətinə bərabər olan vektorial kəmiyyətə **təcil** deyilir:
      $$\vec{a} = \frac{\vec{v} - \vec{v}_0}{t}, \qquad [a] = 1 \text{ m/san}^2$$
      - Əgər $\vec{a}$ və $\vec{v}$ eyni istiqamətlidirsə ($a > 0$), hərəkət **bərabəryeyinləşəndir**.
      - Əgər $\vec{a}$ və $\vec{v}$ əks istiqamətlidirsə ($a < 0$), hərəkət **bərabəryavaşıyandır**.

      ### 2. Sürət və Yerdəyişmə Tənlikləri
      - **Son sürət düsturu:**
      $$v = v_0 \pm a \cdot t$$
      - **Yerdəyişmə düsturları:**
      $$s = v_0 t \pm \frac{at^2}{2}, \qquad s = \frac{v^2 - v_0^2}{\pm 2a}, \qquad s = \frac{v_0 + v}{2} \cdot t$$

      ### 3. Sərbəstdüşmə Hərəkəti
      Havasız mühitdə cismin yalnız ağırlıq qüvvəsinin təsiri altında təcillə düşməsidir ($v_0 = 0, a = g \approx 10 \text{ m/san}^2$):
      $$v = g \cdot t, \qquad h = \frac{gt^2}{2} = \frac{v^2}{2g}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p9-u1-1",
                  "name": "Bərabərtəcilli Yerdəyişmə",
                  "latex": "s = v_0 t + \\frac{at^2}{2}",
                  "description": "Başlanğıc sürətli bərabəryeyinləşən hərəkətdə yerdəyişmə düsturudur."
            },
            {
                  "id": "f-p9-u1-2",
                  "name": "Zamansız Yerdəyişmə Düsturu",
                  "latex": "s = \\frac{v^2 - v_0^2}{2a}",
                  "description": "Zaman verilmədikdə sürətlər və təcil vasitəsilə yol tapılır."
            }
      ],
          glossary: [
            {
                  "term": "Təcil (a)",
                  "definition": "Sürətin dəyişmə yeyinliyini bildirən vektorial fiziki kəmiyyət."
            },
            {
                  "term": "Sərbəstdüşmə",
                  "definition": "Yalnız cazibə qüvvəsinin təsiri altında baş verən bərabərtəcilli hərəkət."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p9-u1-1",
                  "question": "Sükunət vəziyyətindən ($v_0 = 0$) $a = 2 \\text{ m/san}^2$ təcillə hərəkətə başlayan cisim 4 saniyədə neçə metr yol gedər?",
                  "solution": "$s = \\frac{at^2}{2} = \\frac{2 \\cdot 4^2}{2} = 16 \\text{ metr}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p9-u1-1",
                  "question": "Hündürlükdən sərbəst buraxılan cisim 3 saniyə sonra yerə çatır. Düşmə hündürlüyü nə qədərdir? ($g = 10 \\text{ m/san}^2$).",
                  "options": [
                        {
                              "key": "A",
                              "text": "15 m"
                        },
                        {
                              "key": "B",
                              "text": "30 m"
                        },
                        {
                              "key": "C",
                              "text": "45 m"
                        },
                        {
                              "key": "D",
                              "text": "90 m"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "h = gt^2 / 2 = 10 * 3^2 / 2 = 10 * 9 / 2 = 45 m."
            }
      ]
        },

  {
          id: 'lesson-phys-9-u2-newton-laws',
          subjectId: 'fizika',
          grade: 9,
          unit: 'Bölmə 2: Dinamika və Qravitasiya',
          unitOrder: 2,
          title: 'Nyuton qanunları və Ümumdünya cazibə qanunu',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'İnersial hesablama sistemləri, Nyutonun I, II və III qanunları, Ümumdünya cazibə qanunu $F = G(m_1 m_2)/r^2$ və kosmik sürətlər.',
          theoryMarkdown: `
      ### 1. Nyutonun Üç Qanunu
      - **I Qanun (Ətalət Qanunu):** Əgər cismə digər cisimlər təsir etmirsə və ya onların təsiri kompensasiya olunursa, cisim öz sükunət və ya düzxətli bərabərsürətli hərəkət vəziyyətini saxlayır.
      - **II Qanun:** Cismin aldığı təcil ona təsir edən əvəzləyici qüvvə ilə düz, kütləsi ilə tərs mütənasibdir:
      $$\vec{a} = \frac{\vec{F}}{m} \implies \vec{F} = m \cdot \vec{a}$$
      - **III Qanun (Təsir və Əks-Təsir):** İki cisim bir-birinə həmişə qiymətcə bərabər, istiqamətcə əks olan eyni təbiətli qüvvələrlə təsir göstərir:
      $$\vec{F}_1 = -\vec{F}_2$$

      ### 2. Ümumdünya Cazibə Qanunu
      Kainatdakı bütün cisimlər bir-birini kütlələrinin hasili ilə düz, aralarındakı məsafənin kvadratı ilə tərs mütənasib qüvvə ilə cəzb edir:
      $$F = G \cdot \frac{m_1 \cdot m_2}{r^2}$$
      $G = 6.67 \cdot 10^{-11} \text{ N} \cdot \text{m}^2 / \text{kq}^2$ (qravitasiya sabiti).

      ### 3. I Kosmik Sürət
      Yerin süni peykinə çevrilmək üçün tələb olunan minimum sürətdir:
      $$v_1 = \sqrt{g R_Y} \approx 7.9 \text{ km/san}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p9-u2-1",
                  "name": "Nyutonun İkinci Qanunu",
                  "latex": "F = m \\cdot a",
                  "description": "Əvəzləyici qüvvə kütlə ilə təcilin hasilinə bərabərdir."
            },
            {
                  "id": "f-p9-u2-2",
                  "name": "Ümumdünya Cazibə Qanunu",
                  "latex": "F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}",
                  "description": "Kainatın bütün kütlələri arasındakı qravitasiya cazibə qanunudur."
            }
      ],
          glossary: [
            {
                  "term": "İnersial hesablama sistemi",
                  "definition": "Nyutonun I qanununun ödəndiyi hesablama sistemi."
            },
            {
                  "term": "Qravitasiya sabiti (G)",
                  "definition": "Aralarındakı məsafə 1 m olan 1 kq kütləli iki nöqtəvi kütlə arasındakı cazibə qüvvəsi."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p9-u2-1",
                  "question": "Kütləsi 5 kq olan cismə 15 N qüvvə təsir edir. Cismin aldığı təcili tapın.",
                  "solution": "$a = \\frac{F}{m} = \\frac{15}{5} = 3 \\text{ m/san}^2$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p9-u2-1",
                  "question": "İki cisim arasındakı məsafəni 3 dəfə azaltdıqda onlar arasındakı cazibə qüvvəsi necə dəyişər?",
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
                              "text": "9 dəfə azalar"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Cazibə qüvvəsi r^2 ilə tərs mütənasibdir. Məsafə 3 dəfə azaldıqda qüvvə 3^2 = 9 dəfə artar."
            }
      ]
        },

  {
          id: 'lesson-phys-9-u3-conservation-laws',
          subjectId: 'fizika',
          grade: 9,
          unit: 'Bölmə 3: Saxlanma qanunları',
          unitOrder: 3,
          title: 'İmpuls və mexaniki enerjinin saxlanması qanunu, reaktiv hərəkət',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'Cismin impulsu $\vec{p} = m\vec{v}$, qüvvə impulsu $\vec{F}\Delta t$, qapalı sistemdə impulsun saxlanması, kinetik və potensial enerji, enerjinin saxlanması qanunu.',
          theoryMarkdown: `
      ### 1. Cismin İmpulsu və Qüvvə İmpulsu
      - **Cismin impulsu:** Kütləsi ilə sürətinin hasilinə bərabər olan vektorial kəmiyyətdir:
      $$\vec{p} = m \cdot \vec{v}, \qquad [p] = 1 \text{ kq} \cdot \text{m/san}$$
      - **Qüvvə impulsu:** $\vec{F} \cdot \Delta t = \Delta \vec{p} = m\vec{v} - m\vec{v}_0$

      ### 2. İmpulsun Saxlanması Qanunu
      Qapalı sistem təşkil edən cisimlərin impulslarının həndəsi (vektorial) cəmi qarşılıqlı təsirdən asılı olmayaraq sabit qalır:
      $$m_1 \vec{v}_1 + m_2 \vec{v}_2 = m_1 \vec{v}_1' + m_2 \vec{v}_2'$$
      - **Reaktiv hərəkət:** Cismin bir hissəsinin ondan müəyyən sürətlə ayrılması nəticəsində əks istiqamətdə qazandığı hərəkətdir (raketlər impulsun saxlanması əsasında uçur).

      ### 3. Mexaniki Enerji və Saxlanma Qanunu
      - **Kinetik enerji:** Hərəkət enerjisidir: $E_k = \frac{mv^2}{2}$.
      - **Potensial enerji:** Qarşılıqlı təsir enerjisidir: $E_p = mgh$ (cazibə), $E_p = \frac{kx^2}{2}$ (deformasiya).
      - **Tam mexaniki enerjinin saxlanması:** Sürtünmə olmayan qapalı sistemdə tam mexaniki enerji sabit qalır:
      $$E = E_k + E_p = \text{const}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p9-u3-1",
                  "name": "İmpulsun Saxlanması Qanunu",
                  "latex": "m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = \\text{const}",
                  "description": "Qapalı sistemdə impulsun cəmi zaman keçdikcə dəyişmir."
            },
            {
                  "id": "f-p9-u3-2",
                  "name": "Tam Mexaniki Enerji",
                  "latex": "E_k + E_p = \\text{const}",
                  "description": "Kinetik və potensial enerjilərin cəmi sürtünməsiz mühitdə sabitdir."
            }
      ],
          glossary: [
            {
                  "term": "İmpuls",
                  "definition": "Cismin hərəkət miqdarını bildirən kütlə və sürət hasili."
            },
            {
                  "term": "Reaktiv hərəkət",
                  "definition": "Qaz axınının çıxması nəticəsində təkan alan hərəkət forması."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p9-u3-1",
                  "question": "Kütləsi 2 kq olan cisim $10 \\text{ m/san}$ sürətlə hərəkət edir. Onun kinetik enerjisini tapın.",
                  "solution": "$E_k = \\frac{m v^2}{2} = \\frac{2 \\cdot 10^2}{2} = 100 \\text{ C}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p9-u3-1",
                  "question": "Raketlərin və reaktiv təyyarələrin hərəkəti hansı fiziki qanuna əsaslanır?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Paskal qanununa"
                        },
                        {
                              "key": "B",
                              "text": "İmpulsun saxlanması qanununa"
                        },
                        {
                              "key": "C",
                              "text": "Arximed qanununa"
                        },
                        {
                              "key": "D",
                              "text": "Om qanununa"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Qazların arxaya atılması ilə raket irəli impuls qazanır (impulsun saxlanması qanunu)."
            }
      ]
        },

  {
          id: 'lesson-phys-9-u4-oscillations-waves',
          subjectId: 'fizika',
          grade: 9,
          unit: 'Bölmə 4: Mexaniki rəqslər və dalğalar',
          unitOrder: 4,
          title: 'Rəqs periodu, tezlik, yaylı və riyazi rəqqas, səs dalğaları',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'Dövri təkrarlanan rəqsi hərəkət, period $T$, tezlik $\nu$, riyazi rəqqas $T = 2\pi\sqrt{l/g}$, yaylı rəqqas $T = 2\pi\sqrt{m/k}$, rezonans və səs dalğaları.',
          theoryMarkdown: `
      ### 1. Mexaniki Rəqslər
      Tarazlıq vəziyyəti ətrafında dəqiq və ya təxmini təkrarlanan hərəkətlərə **rəqsi hərəkət** deyilir.
      - **Amplitud ($x_m, A$):** Tarazlıq vəziyyətindən ən böyük meyil məsafəsidir.
      - **Period ($T$):** Bir tam rəqsə sərf olunan zamandır:
      $$T = \frac{t}{N}, \qquad [T] = 1 \text{ san}$$
      - **Tezlik ($\nu$):** Vahid zamandakı rəqslərin sayıdır:
      $$\nu = \frac{N}{t} = \frac{1}{T}, \qquad [\nu] = 1 \text{ Hs (Hers)}$$

      ### 2. Rəqqaslar
      - **Riyazi rəqqas:** Çəkisiz və uzanmayan sapdan asılmış maddi nöqtədir:
      $$T = 2\pi \sqrt{\frac{l}{g}}$$
      - **Yaylı rəqqas:** Yaydan asılmış $m$ kütləli yükün rəqsləridir:
      $$T = 2\pi \sqrt{\frac{m}{k}}$$

      ### 3. Mexaniki Dalğalar və Səs
      Rəqslərin elastik mühitdə yayılmasına **mexaniki dalğa** deyilir.
      - **Dalğa uzunluğu ($\lambda$):** Bir period ərzində dalğanın yayıldığı məsafədir:
      $$\lambda = v \cdot T = \frac{v}{\nu}$$
      - **Səs dalğaları:** İnsan qulağının eşidə bildiyi $16 \text{ Hs} - 20\,000 \text{ Hs}$ tezlikli uzununa mexaniki dalğalardır (vakuumda səs yayılmır).
          `,
          keyFormulas: [
            {
                  "id": "f-p9-u4-1",
                  "name": "Riyazi Rəqqasın Periodu",
                  "latex": "T = 2\\pi \\sqrt{\\frac{l}{g}}",
                  "description": "Period sapın uzunluğundan və sərbəstdüşmə təcilindən asılıdır."
            },
            {
                  "id": "f-p9-u4-2",
                  "name": "Dalğa Uzunluğu",
                  "latex": "\\lambda = \\frac{v}{\\nu}",
                  "description": "Dalğanın yayılma sürətinin rəqs tezliyinə nisbətidir."
            }
      ],
          glossary: [
            {
                  "term": "Hers (Hs)",
                  "definition": "1 saniyədə 1 tam rəqsə uyğun gələn tezlik vahidi."
            },
            {
                  "term": "Rezonans",
                  "definition": "Məcburedici qüvvənin tezliyi sistemin xüsusi tezliyinə bərabər olduqda rəqs amplitudunun kəskin artması."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p9-u4-1",
                  "question": "Səs dalğasının havadakı sürəti $340 \\text{ m/san}$, tezliyi $170 \\text{ Hs}$-dir. Bu səsin dalğa uzunluğunu tapın.",
                  "solution": "$\\lambda = \\frac{v}{\\nu} = \\frac{340}{170} = 2 \\text{ metr}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p9-u4-1",
                  "question": "Riyazi rəqqasın sapının uzunluğunu 4 dəfə artırdıqda onun rəqs periodu necə dəyişər?",
                  "options": [
                        {
                              "key": "A",
                              "text": "2 dəfə artar"
                        },
                        {
                              "key": "B",
                              "text": "4 dəfə artar"
                        },
                        {
                              "key": "C",
                              "text": "2 dəfə azalar"
                        },
                        {
                              "key": "D",
                              "text": "Dəyişməz"
                        }
                  ],
                  "correctKey": "A",
                  "explanation": "T ~ √l olduğundan, uzunluq 4 dəfə artarsa, period √4 = 2 dəfə artar."
            }
      ]
        },

  {
          id: 'lesson-phys-9-u5-induction-waves',
          subjectId: 'fizika',
          grade: 9,
          unit: 'Bölmə 5: Elektromaqnit sahəsi və dalğaları',
          unitOrder: 5,
          title: 'Elektromaqnit induksiyası, Faradey qanunu və elektromaqnit dalğaları',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'Maqnit seli $\Phi = B S \cos\alpha$, induksiya EHQ-si, Faradey qanunu $\varepsilon_i = -\Delta\Phi/\Delta t$, Lens qaydası, Maksvell nəzəriyyəsi və işıq sürəti $c$.',
          theoryMarkdown: `
      ### 1. Maqnit Seli ($\Phi$)
      Konturla hüdudlanmış səthdən keçən maqnit induksiya xətlərinin sayını xarakterizə edən kəmiyyətdir:
      $$\Phi = B \cdot S \cdot \cos \alpha, \qquad [\Phi] = 1 \text{ Veber} = 1 \text{ Vb}$$

      ### 2. Elektromaqnit İnduksiyası və Faradey Qanunu
      Qapalı keçirici konturdan keçən maqnit seli dəyişdikdə konturda elektrik cərəyanı yaranır.
      - **Faradey qanunu:** Qapalı konturda yaranan induksiya EHQ-si maqnit selinin dəyişmə yeyinliyi ilə mütənasibdir:
      $$\varepsilon_i = -\frac{\Delta \Phi}{\Delta t}$$
      - **Lens qaydası ("−" işarəsi):** İnduksiya cərəyanı həmişə elə istiqamətlənir ki, onun maqnit sahəsi onu doğuran maqnit selinin dəyişməsinə mane olsun.

      ### 3. Elektromaqnit Dalğaları (Maksvell Nəzəriyyəsi)
      Dəyişən maqnit sahəsi fəzada dəyişən burulğanlı elektrik sahəsi yaradır, o da öz növbəsində dəyişən maqnit sahəsi doğurur. Beləliklə, elektromaqnit sahəsi fəzada dalğa şəklində yayılır:
      - Vakuumda yayılma sürəti **işıq sürətinə** bərabərdir:
      $$c = 3 \cdot 10^8 \text{ m/san}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p9-u5-1",
                  "name": "Faradey Qanunu",
                  "latex": "\\varepsilon_i = -\\frac{\\Delta \\Phi}{\\Delta t}",
                  "description": "İnduksiya EHQ-si maqnit selinin zamana görə dəyişmə sürətidir."
            },
            {
                  "id": "f-p9-u5-2",
                  "name": "Elektromaqnit Dalğasının Sürəti",
                  "latex": "c = \\lambda \\cdot \\nu = 3 \\cdot 10^8 \\text{ m/san}",
                  "description": "Vakuumda bütün elektromaqnit dalğaları işıq sürəti ilə yayılır."
            }
      ],
          glossary: [
            {
                  "term": "Veber (Vb)",
                  "definition": "BS-də maqnit selinin vahidi (1 Tl · m²)."
            },
            {
                  "term": "Lens qaydası",
                  "definition": "İnduksiya cərəyanının istiqamətini təyin edən qanunauyğunluq."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p9-u5-1",
                  "question": "Konturdan keçən maqnit seli 0.2 saniyədə 0.8 Vb-dən 0.2 Vb-yə qədər azalmışdır. İnduksiya EHQ-nin modulunu tapın.",
                  "solution": "$\\Delta \\Phi = 0.2 - 0.8 = -0.6 \\text{ Vb}$. $|\\varepsilon_i| = \\frac{|\\Delta \\Phi|}{\\Delta t} = \\frac{0.6}{0.2} = 3 \\text{ V}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p9-u5-1",
                  "question": "Vakuumda elektromaqnit dalğalarının yayılma sürəti nəyə bərabərdir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "340 m/san"
                        },
                        {
                              "key": "B",
                              "text": "3000 m/san"
                        },
                        {
                              "key": "C",
                              "text": "3 · 10^8 m/san"
                        },
                        {
                              "key": "D",
                              "text": "Sonsuzdur"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Elektromaqnit dalğaları vakuumda işıq sürəti ilə (c = 3 · 10^8 m/san) yayılır."
            }
      ]
        },

  {
          id: 'lesson-phys-9-u6-geometric-optics',
          subjectId: 'fizika',
          grade: 9,
          unit: 'Bölmə 6: Həndəsi optika və işıq hadisələri',
          unitOrder: 6,
          title: 'İşığın qayıtması və sınması, linzalar və linza düsturu',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'İşığın düzxətli yayılması, qayıtma qanunu, sınma qanunu (Snellius), nazik linzalar və optik qüvvə $D = 1/F = 1/d + 1/f$.',
          theoryMarkdown: `
      ### 1. İşığın Qayıtması Qanunu
      Düşən şüa, qayıdan şüa və düşmə nöqtəsindən səthə qaldırılmış perpendikulyar bir müstəvi üzərindədir.
      - **Qayıtma bucağı düşmə bucağına bərabərdir:**
      $$\alpha = \beta$$

      ### 2. İşığın Sınması Qanunu (Snellius Qanunu)
      İşıq bir mühitdən digərinə keçdikdə yayılma sürəti dəyişir və sərhəddə sınır:
      $$\frac{\sin \alpha}{\sin \gamma} = \frac{n_2}{n_1} = n_{21}$$
      - $n = \frac{c}{v}$ — mühitin mütləq sındırma əmsalıdır ($n \ge 1$).

      ### 3. Nazik Linzalar və Linza Düsturu
      - **Optik qüvvə ($D$):** Fokus məsafəsinin tərsi olan kəmiyyətdir:
      $$D = \frac{1}{F}, \qquad [D] = 1 \text{ dptr (dioptriya)}$$
      (Toplayıcı linza üçün $D > 0$, səpici linza üçün $D < 0$).
      - **Nazik linza düsturu:**
      $$\frac{1}{F} = \frac{1}{d} + \frac{1}{f}$$
      $d$ — cisimdən linzaya qədər məsafə, $f$ — linzadan xəyalə qədər məsafədir.
          `,
          keyFormulas: [
            {
                  "id": "f-p9-u6-1",
                  "name": "Nazik Linza Düsturu",
                  "latex": "\\frac{1}{F} = \\frac{1}{d} + \\frac{1}{f} = D",
                  "description": "Fokus məsafəsi ilə cisim və xəyal məsafələri arasındakı əlaqədir."
            },
            {
                  "id": "f-p9-u6-2",
                  "name": "Sınma Qanunu",
                  "latex": "\\frac{\\sin \\alpha}{\\sin \\gamma} = \\frac{n_2}{n_1}",
                  "description": "Düşmə bucağının sinusunun sınma bucağının sinusuna nisbətidir."
            }
      ],
          glossary: [
            {
                  "term": "Dioptriya (dptr)",
                  "definition": "Fokus məsafəsi 1 metr olan linzanın optik qüvvəsi."
            },
            {
                  "term": "Fokus məsafəsi (F)",
                  "definition": "Linzaya paralel gələn şüaların sındıqdan sonra kəsişdiyi nöqtəyə qədər olan məsafə."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p9-u6-1",
                  "question": "Fokus məsafəsi $F = 0.2 \\text{ m}$ olan toplayıcı linzanın optik qüvvəsini tapın.",
                  "solution": "$D = \\frac{1}{F} = \\frac{1}{0.2} = +5 \\text{ dptr}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p9-u6-1",
                  "question": "İşığın qayıtması qanununa görə düşmə bucağı $40^\\circ$ olarsa, qayıtma bucağı neçə dərəcə olar?",
                  "options": [
                        {
                              "key": "A",
                              "text": "20°"
                        },
                        {
                              "key": "B",
                              "text": "40°"
                        },
                        {
                              "key": "C",
                              "text": "50°"
                        },
                        {
                              "key": "D",
                              "text": "90°"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Qayıtma bucağı həmişə düşmə bucağına bərabərdir: β = α = 40°."
            }
      ]
        },

  {
          id: 'lesson-phys-9-u7-atomic-nuclear',
          subjectId: 'fizika',
          grade: 9,
          unit: 'Bölmə 7: Atom və nüvə fizikası',
          unitOrder: 7,
          title: 'Atomun planetar modeli, radioaktivlik və nüvə reaksiyaları',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'Rezerford təcrübəsi, atomun nüvə-planetar modeli, proton-neytron modeli $^A_Z X$, radioaktiv şüalanma ($\alpha, \beta, \gamma$) və nüvə parçalanması.',
          theoryMarkdown: `
      ### 1. Rezerford Təcrübəsi və Atom Modeli
      1911-ci ildə E.Rezerford qızıl folqanın alfa-zərrəciklərlə bombardman edilməsi təcrübəsi ilə sübut etdi ki:
      - Atomun mərkəzində müsbət yüklü, kiçik ölçülü, lakin kütlənin $99.9\%$-ni təşkil edən **nüvə** yerləşir.
      - Mənfi yüklü elektronlar planetlər kimi nüvə ətrafında qapalı orbitlər üzrə fırlanır (**planetar model**).

      ### 2. Nüvənin Tərkibi
      Atom nüvəsi **nuklonlardan** (proton və neytronlardan) ibarətdir:
      - Proton ($p$): yükü $+e$, kütləsi $1 \text{ a.k.v.}$
      - Neytron ($n$): yüksüzdür ($0$), kütləsi $1 \text{ a.k.v.}$
      - İşarəsi: $_Z^A X$. Burada $Z$ — protonların sayı (sıra nömrəsi), $A$ — kütlə ədədi (nuklonların ümumi sayı: $A = Z + N$).

      ### 3. Təbii Radioaktivlik
      Qeyri-stabil nüvələrin öz-özünə şüalanaraq digər nüvələrə çevrilməsidir:
      - **$\alpha$ (alfa) şüaları:** Helium nüvələri axınıdır ($^4_2 \text{He}$).
      - **$\beta$ (beta) şüaları:** Sürətli elektronlar axınıdır ($^0_{-1} e$).
      - **$\gamma$ (qamma) şüaları:** Çox böyük nüfuzetmə qabiliyyətinə malik yüksək enerjili elektromaqnit dalğalarıdır.
          `,
          keyFormulas: [
            {
                  "id": "f-p9-u7-1",
                  "name": "Kütlə Ədədi Düsturu",
                  "latex": "A = Z + N",
                  "description": "Nuklonların sayı protonların və neytronların sayının cəminə bərabərdir."
            },
            {
                  "id": "f-p9-u7-2",
                  "name": "Soddi Yerdəyişmə Qaydası (Alfa Çevrilmə)",
                  "latex": "_Z^A X \\to \\; _{Z-2}^{A-4} Y + \\; _2^4 \\text{He}",
                  "description": "Alfa çevrilmədə kütlə ədədi 4 vahid, sıra nömrəsi 2 vahid azalır."
            }
      ],
          glossary: [
            {
                  "term": "Nuklon",
                  "definition": "Atom nüvəsini təşkil edən zərrəciklərin (proton və neytronların) ümumi adı."
            },
            {
                  "term": "Radioaktivlik",
                  "definition": "Atom nüvələrinin öz-özünə şüalanaraq yeni nüvələrə parçalanması hadisəsi."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p9-u7-1",
                  "question": "$^{238}_{92} \\text{U}$ uran izotopunda neçə proton və neçə neytron vardır?",
                  "solution": "Proton sayı $Z = 92$. Neytron sayı: $N = A - Z = 238 - 92 = 146$ neytron."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p9-u7-1",
                  "question": "Nüvə alfa-çevrilməyə məruz qaldıqda onun kütlə ədədi (A) necə dəyişir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "2 vahid azalır"
                        },
                        {
                              "key": "B",
                              "text": "4 vahid azalır"
                        },
                        {
                              "key": "C",
                              "text": "Dəyişməz qalır"
                        },
                        {
                              "key": "D",
                              "text": "1 vahid artır"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Alfa-hissəcik helium nüvəsidir (4/2 He), buna görə kütlə ədədi 4 vahid azalır."
            }
      ]
        },

  {
          id: 'lesson-phys-10-u1-relativity',
          subjectId: 'fizika',
          grade: 10,
          unit: 'Bölmə 1: Klassik mexanika və nisbilik nəzəriyyəsi',
          unitOrder: 1,
          title: 'Eynşteynin xüsusi nisbilik nəzəriyyəsi və postulatları',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 3,
          summary: 'Qaliley nisbilik prinsipi, Eynşteynin iki postulatı, zamanın ləngiməsi, uzunluğun relyativistik qısalması və kütlə-enerji əlaqəsi $E = mc^2$.',
          theoryMarkdown: `
      ### 1. Eynşteynin Xüsusi Nisbilik Nəzəriyyəsinin Postulatları
      İşıq sürətinə yaxın sürətlərdə klassik Nyuton mexanikası qüvvədən düşür və Relyativistik mexanika tətbiq olunur.
      - **I Postulat (Nisbilik Prinsipi):** Bütün fiziki hadisələr (həm mexaniki, həm də elektromaqnit) bütün inersial hesablama sistemlərində eyni cür baş verir.
      - **II Postulat (İşıq Sürətinin Sabitliyi):** Vakuumda işığın yayılma sürəti mənbəyin və ya qəbuledicinin hərəkət sürətindən asılı olmayaraq bütün inersial sistemlərdə eynidir ($c = 3 \cdot 10^8 \text{ m/san}$).

      ### 2. Relyativistik Nəticələr
      - **Zamanın ləngiməsi:** Hərəkət edən hesablama sistemində zaman hərəkətsiz sistemə nəzərən daha yavaş axır:
      $$\Delta t = \frac{\Delta t_0}{\sqrt{1 - \frac{v^2}{c^2}}}$$
      - **Uzunluğun qısalması (Lorens qısalması):** Hərəkət istiqamətində cismin xətti ölçüsü kiçilir:
      $$l = l_0 \sqrt{1 - \frac{v^2}{c^2}}$$

      ### 3. Kütlə və Enerji Əlaqəsi
      Sükunət kütləsi $m_0$ olan cismin tam enerjisi:
      $$E = m c^2 = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p10-u1-1",
                  "name": "Eynşteynin Kütlə-Enerji Əlaqəsi",
                  "latex": "E = m c^2",
                  "description": "Kütlə və enerjinin fundamental ekvivalentlik qanunudur."
            },
            {
                  "id": "f-p10-u1-2",
                  "name": "Zamanın Relyativistik Ləngiməsi",
                  "latex": "\\Delta t = \\frac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}}",
                  "description": "Sürət artdıqca xarici müşahidəçiyə nəzərən zamanın gedişi zəifləyir."
            }
      ],
          glossary: [
            {
                  "term": "Xüsusi Nisbilik Nəzəriyyəsi (XNN)",
                  "definition": "A.Eynşteyn tərəfindən işıq sürətinə yaxın sürətlərdə məkan və zamanın xassələrini təsvir edən nəzəriyyə."
            },
            {
                  "term": "Sükunət enerjisi",
                  "definition": "Cismin hərəkətsiz vəziyyətdə malik olduğu daxili enerji ehtiyatı (E₀ = m₀c²)."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p10-u1-1",
                  "question": "1 qram maddənin tam parçalanması nəticəsində ayrıla biləcək maksimal enerjini hesablayın.",
                  "solution": "$m = 1 \\text{ q} = 10^{-3} \\text{ kq}$. $E = m c^2 = 10^{-3} \\cdot (3 \\cdot 10^8)^2 = 10^{-3} \\cdot 9 \\cdot 10^{16} = 9 \\cdot 10^{13} \\text{ C} = 90 \\text{ Teracoul}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p10-u1-1",
                  "question": "Eynşteynin II postulatına görə vakuumda işıq sürəti nədən asılıdır?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Yalnız mənbəyin hərəkət sürətindən"
                        },
                        {
                              "key": "B",
                              "text": "Müşahidəçinin koordinat sistemindən"
                        },
                        {
                              "key": "C",
                              "text": "Heç nədən asılı deyil, mütləq sabitdir"
                        },
                        {
                              "key": "D",
                              "text": "İşığın dalğa uzunluğundan"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Vakuumda işıq sürəti bütün inersial sistemlərdə invariant və mütləq sabitdir (c = 3 · 10^8 m/san)."
            }
      ]
        },

  {
          id: 'lesson-phys-10-u2-mkt-ideal-gas',
          subjectId: 'fizika',
          grade: 10,
          unit: 'Bölmə 2: Molekulyar-kinetik nəzəriyyə və İdeal qaz qanunları',
          unitOrder: 2,
          title: 'MKT-nin əsas tənliyi, mütləq temperatur və izoproseslər',
          order: 1,
          readTimeMinutes: 11,
          difficulty: 3,
          summary: 'Molekulyar-kinetik nəzəriyyənin əsas müddəaları, MKT-nin əsas tənliyi $p = \frac{1}{3}nm_0 v^2 = nkT$, Klapeyron-Mendeleyev tənliyi və izoproseslər.',
          theoryMarkdown: `
      ### 1. İdeal Qaz Modeli
      Molekulları arasındakı qarşılıqlı təsir qüvvələri nəzərə alınmayan və molekulları maddi nöqtə hesab edilən qaz modelinə **ideal qaz** deyilir.

      ### 2. MKT-nin Əsas Tənliyi
      $$p = \frac{1}{3} n m_0 \overline{v^2} = \frac{2}{3} n \overline{E_k}$$
      - $n = \frac{N}{V}$ — molekulların konsentrasiyası, $\overline{E_k} = \frac{3}{2} k T$ — irəliləmə hərəkətinin orta kinetik enerjisidir ($k = 1.38 \cdot 10^{-23} \text{ C/K}$ Boltsman sabiti).
      - Buradan qaz təzyiqi:
      $$p = n \cdot k \cdot T$$

      ### 3. Mendeleyev-Klapeyron Tənliyi
      $$p \cdot V = \frac{m}{M} \cdot R \cdot T = \nu \cdot R \cdot T$$
      $R = 8.31 \text{ C/(mol} \cdot \text{K)}$ — universal qaz sabitidir.

      ### 4. Üç Əsas Qaz Qanunu (İzoproseslər)
      1. **İzotermik proses ($T = \text{const}$ — Boyl-Mariott qanunu):**
      $$p \cdot V = \text{const} \implies \frac{p_1}{p_2} = \frac{V_2}{V_1}$$
      2. **İzobar proses ($p = \text{const}$ — Gey-Lüssak qanunu):**
      $$\frac{V}{T} = \text{const} \implies \frac{V_1}{V_2} = \frac{T_1}{T_2}$$
      3. **İzoxor proses ($V = \text{const}$ — Şarl qanunu):**
      $$\frac{p}{T} = \text{const} \implies \frac{p_1}{p_2} = \frac{T_1}{T_2}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p10-u2-1",
                  "name": "Mendeleyev-Klapeyron Tənliyi",
                  "latex": "p V = \\frac{m}{M} R T",
                  "description": "İdeal qazın hal tənliyidir."
            },
            {
                  "id": "f-p10-u2-2",
                  "name": "Boyl-Mariott Qanunu",
                  "latex": "p_1 V_1 = p_2 V_2 \\quad (T = \\text{const})",
                  "description": "Sabit temperaturda təzyiq həcmlə tərs mütənasibdir."
            }
      ],
          glossary: [
            {
                  "term": "İzoproses",
                  "definition": "Qazın parametrlərindən birinin sabit qalması ilə gedən proses."
            },
            {
                  "term": "Mütləq sıfır (0 K)",
                  "definition": "Molekulların istilik hərəkətinin dayandığı hipotetik minimal temperatur (-273.15 °C)."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p10-u2-1",
                  "question": "İzotermik prosesdə qazın həcmini 3 dəfə azaltdıqda onun təzyiqi necə dəyişər?",
                  "solution": "Boyl-Mariott qanununa görə $T = \\text{const}$ olduqda $p \\cdot V = \\text{const}$. Həcm 3 dəfə azaldıqda təzyiq 3 dəfə artar."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p10-u2-1",
                  "question": "Sabit həcmdə (izoxor prosesdə) ideal qazın mütləq temperaturunu 2 dəfə artırdıqda təzyiqi necə dəyişər?",
                  "options": [
                        {
                              "key": "A",
                              "text": "2 dəfə azalar"
                        },
                        {
                              "key": "B",
                              "text": "2 dəfə artar"
                        },
                        {
                              "key": "C",
                              "text": "4 dəfə artar"
                        },
                        {
                              "key": "D",
                              "text": "Dəyişməz"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Şarl qanununa görə V = const olduqda p ~ T. Temperatur 2 dəfə artarsa, təzyiq də 2 dəfə artar."
            }
      ]
        },

  {
          id: 'lesson-phys-10-u3-thermodynamics',
          subjectId: 'fizika',
          grade: 10,
          unit: 'Bölmə 3: Termodinamikanın əsasları',
          unitOrder: 3,
          title: 'İdeal qazın daxili enerjisi, Termodinamikanın I qanunu və Karno dövrəsi',
          order: 1,
          readTimeMinutes: 11,
          difficulty: 3,
          summary: 'Biratomlu qazın daxili enerjisi $U = \frac{3}{2}\nu RT$, qazın gördüyü iş $A = p\Delta V$, Termodinamikanın I qanunu $Q = \Delta U + A$ və ideal Karno maşını $\eta = (T_1 - T_2)/T_1$.',
          theoryMarkdown: `
      ### 1. Biratomlu İdeal Qazın Daxili Enerjisi
      Yalnız molekulların irəliləmə hərəkətinin kinetik enerjisindən ibarətdir:
      $$U = \frac{3}{2} \frac{m}{M} R T = \frac{3}{2} \nu R T = \frac{3}{2} p V$$

      ### 2. Qazın Genişlənərkən Gördüyü İş
      İzobar prosesdə xarici qüvvələrə qarşı görülən iş:
      $$A = p \cdot \Delta V = p \cdot (V_2 - V_1)$$
      - Qaz genişləndikdə ($V_2 > V_1$): $A > 0$ (müsbət iş görür).
      - Qaz sıxıldıqda ($V_2 < V_1$): $A < 0$ (xarici qüvvələr qaz üzərində iş görür).

      ### 3. Termodinamikanın I Qanunu
      Sistemə verilən istilik miqdarı onun daxili enerjisinin dəyişməsinə və xarici cisimlər üzərində iş görməsinə sərf olunur:
      $$Q = \Delta U + A$$
      - **İzoxor proses ($V = \text{const}$):** $\Delta V = 0 \implies A = 0 \implies Q = \Delta U$.
      - **İzotermik proses ($T = \text{const}$):** $\Delta T = 0 \implies \Delta U = 0 \implies Q = A$.
      - **Adiabatik proses ($Q = 0$):** Ətraf mühitlə istilik mübadiləsi olmayan prosesdir: $A = -\Delta U$ (qaz genişlənərkən daxili enerjisi hesabına iş görür və soyuyur).

      ### 4. Karno Dövrəsi və Maksimal F.İ.Ə.
      İki izoterm və iki adiabatdan ibarət ideal istilik maşınının maksimal F.İ.Ə.-sı:
      $$\eta_{\max} = \frac{T_1 - T_2}{T_1} = 1 - \frac{T_2}{T_1}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p10-u3-1",
                  "name": "Termodinamikanın Birinci Qanunu",
                  "latex": "Q = \\Delta U + A",
                  "description": "Enerjinin saxlanması qanununun istilik hadisələrinə tətbiqidir."
            },
            {
                  "id": "f-p10-u3-2",
                  "name": "Karno Maşınının Maksimal F.İ.Ə.",
                  "latex": "\\eta_{\\max} = \\frac{T_1 - T_2}{T_1}",
                  "description": "Yalnız qızdırıcı və soyuducunun mütləq temperaturlarından asılıdır."
            }
      ],
          glossary: [
            {
                  "term": "Adiabatik proses",
                  "definition": "Sistemin ətraf mühitlə istilik mübadiləsi olmadan baş verən proses (Q = 0)."
            },
            {
                  "term": "Karno dövrəsi",
                  "definition": "Faydalı iş əmsalı ən yüksək olan ideal qapalı termodinamik tsikl."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p10-u3-1",
                  "question": "İdeal istilik maşınında qızdırıcının temperaturu $T_1 = 500 \\text{ K}$, soyuducunun temperaturu $T_2 = 300 \\text{ K}$-dir. Maksimal F.İ.Ə.-nı tapın.",
                  "solution": "$\\eta = \\frac{T_1 - T_2}{T_1} = \\frac{500 - 300}{500} = \\frac{200}{500} = 0.4 = 40\\%$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p10-u3-1",
                  "question": "Adiabatik genişlənmə zamanı ideal qazın temperaturu və daxili enerjisi necə dəyişir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Artır"
                        },
                        {
                              "key": "B",
                              "text": "Azalır"
                        },
                        {
                              "key": "C",
                              "text": "Sabit qalır"
                        },
                        {
                              "key": "D",
                              "text": "Sıfır olur"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Q = 0 olduqda A = -ΔU olur. Qaz iş gördükcə daxili enerjisi və temperaturu azalır (soyuyur)."
            }
      ]
        },

  {
          id: 'lesson-phys-10-u4-vapors-surface-tension',
          subjectId: 'fizika',
          grade: 10,
          unit: 'Bölmə 4: Doymuş buxarlar, Səthi gərilmə və Kapillyarlıq',
          unitOrder: 4,
          title: 'Doymuş və doymamış buxar, mayelərin səthi gərilməsi və kapillyarlıq',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 2,
          summary: 'Doymuş buxarın xassələri, havanın mütləq və nisbi rütubəti, səthi gərilmə əmsalı $\sigma = F/l$ və kapillyar borularda mayenin qalxma hündürlüyü.',
          theoryMarkdown: `
      ### 1. Doymuş Buxar və Xassələri
      Öz mayesi ilə dinamik tarazlıqda olan buxara **doymuş buxar** deyilir.
      - Doymuş buxarın təzyiqi və sıxlığı **həcmdən asılı deyil** (Boyl-Mariott qanununa tabe olmur).
      - Doymuş buxarın təzyiqi yalnız **temperaturdan asılıdır** (temperatur artdıqca kəskin artır).

      ### 2. Havanın Rütubəti
      - **Mütləq rütubət ($\rho$):** $1 \text{ m}^3$ havada olan su buxarının kütləsidir (q/m³).
      - **Nisbi rütubət ($\varphi$):** Havadakı su buxarının parsial təzyiqinin eyni temperaturdakı doymuş buxarın təzyiqinə olan nisbətinin faizlə ifadəsidir:
      $$\varphi = \frac{p}{p_0} \cdot 100\% = \frac{\rho}{\rho_0} \cdot 100\%$$
      Hiqrometr və psixrometrlə ölçülür.

      ### 3. Səthi Gərilmə və Kapillyarlıq
      Maye səthindəki molekullara daxilə doğru kompensasiya olunmamış qüvvə təsir edir.
      - **Səthi gərilmə əmsalı:** Səthi hüdudlayan xəttin vahid uzunluğuna düşən qüvvədir:
      $$\sigma = \frac{F_{\text{səth}}}{l}, \qquad [\sigma] = 1 \text{ N/m}$$
      - **Kapillyarlıq:** Nazik borularda mayenin islatma və ya islatmama nəticəsində qalxması və ya enməsidir:
      $$h = \frac{2\sigma}{\rho g r}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p10-u4-1",
                  "name": "Nisbi Rütubət",
                  "latex": "\\varphi = \\frac{p}{p_0} \\cdot 100\\%",
                  "description": "Havadakı buxar təzyiqinin doymuş buxar təzyiqinə nisbətidir."
            },
            {
                  "id": "f-p10-u4-2",
                  "name": "Kapillyarda Mayenin Qalxma Hündürlüyü",
                  "latex": "h = \\frac{2\\sigma}{\\rho g r}",
                  "description": "Kapillyarın radiusu nə qədər kiçik olarsa, maye bir o qədər hündürə qalxar."
            }
      ],
          glossary: [
            {
                  "term": "Şeh nöqtəsi",
                  "definition": "Havadakı su buxarının doymuş hala keçdiyi temperatur."
            },
            {
                  "term": "Səthi gərilmə",
                  "definition": "Mayenin öz səthinin sahəsini minimuma endirməyə çalışan xassəsi."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p10-u4-1",
                  "question": "Havadakı su buxarının parsial təzyiqi 1.2 kPa, eyni temperaturda doymuş buxarın təzyiqi 2 kPa olarsa, nisbi rütubəti tapın.",
                  "solution": "$\\varphi = \\frac{p}{p_0} \\cdot 100\\% = \\frac{1.2}{2.0} \\cdot 100\\% = 60\\%$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p10-u4-1",
                  "question": "Sabit temperaturda qapalı qabda doymuş buxarın həcmini 2 dəfə azaltdıqda onun təzyiqi necə dəyişər?",
                  "options": [
                        {
                              "key": "A",
                              "text": "2 dəfə artar"
                        },
                        {
                              "key": "B",
                              "text": "2 dəfə azalar"
                        },
                        {
                              "key": "C",
                              "text": "Dəyişməz qalar"
                        },
                        {
                              "key": "D",
                              "text": "Sıfır olar"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Doymuş buxarın təzyiqi sabit temperaturda həcmdən asılı deyildir, buxarın bir hissəsi mayeyə çevrilir və təzyiq sabit qalır."
            }
      ]
        },

  {
          id: 'lesson-phys-10-u5-solids-elasticity',
          subjectId: 'fizika',
          grade: 10,
          unit: 'Bölmə 5: Bərk cisimlər və onların xassələri',
          unitOrder: 5,
          title: 'Kristallik və amorf cisimlər, mexaniki gərginlik və Huk qanunu',
          order: 1,
          readTimeMinutes: 9,
          difficulty: 2,
          summary: 'Monokristallar, polikristallar, anizotropiya və izotropiya, amorf maddələr, mexaniki gərginlik $\sigma = F/S$, nisbi uzanma $\varepsilon = \Delta l/l_0$ və Yunq modulu.',
          theoryMarkdown: `
      ### 1. Kristallik və Amorf Cisimlər
      - **Kristallik cisimlər:** Zərrəcikləri nizamlı fəza qəfəsi əmələ gətirir. Dəqiq ərimə temperaturuna malikdir.
        - **Monokristallar:** Vahid bütöv kristaldır, **anizotropdur** (fiziki xassələri istiqamətdən asılıdır).
        - **Polikristallar:** Çoxlu sayda xırda kristallardan ibarətdir, **izotropdur** (bütün istiqamətlərdə xassələri eynidir, məs: metallar).
      - **Amorf cisimlər:** Qəfəs quruluşu yoxdur (qısamənzilli nizamlılıq). Dəqiq ərimə temperaturu yoxdur, qızdırıldıqda tədricən yumşalır (şüşə, qatran, plastik).

      ### 2. Deformasiya və Mexaniki Gərginlik
      Xarici qüvvənin təsiri ilə cismin forma və ölçülərinin dəyişməsinə **deformasiya** deyilir (elastiki və plastik).
      - **Mexaniki gərginlik ($\sigma$):** En kəsiyin vahid sahəsinə düşən elastiklik qüvvəsidir:
      $$\sigma = \frac{F_{\text{el}}}{S}, \qquad [\sigma] = 1 \text{ Pa}$$
      - **Nisbi uzanma ($\varepsilon$):**
      $$\varepsilon = \frac{\Delta l}{l_0}$$

      ### 3. Bərk Cisimlər Üçün Huk Qanunu
      Kiçik elastiki deformasiyalarda mexaniki gərginlik nisbi uzanma ilə düz mütənasibdir:
      $$\sigma = E \cdot |\varepsilon|$$
      $E$ — maddənin elastiklik moduludur (**Yunq modulu**, vahidi Pa).
          `,
          keyFormulas: [
            {
                  "id": "f-p10-u5-1",
                  "name": "Mexaniki Gərginlik üçün Huk Qanunu",
                  "latex": "\\sigma = E \\cdot \\varepsilon = E \\cdot \\frac{\\Delta l}{l_0}",
                  "description": "Gərginlik nisbi uzanma və Yunq modulu ilə mütənasibdir."
            },
            {
                  "id": "f-p10-u5-2",
                  "name": "Yayın Sərtliyi",
                  "latex": "k = \\frac{E \\cdot S}{l_0}",
                  "description": "Sərtlik Yunq modulu və en kəsiyi ilə düz, uzunluqla tərs mütənasibdir."
            }
      ],
          glossary: [
            {
                  "term": "Yunq modulu (E)",
                  "definition": "Maddənin elastiklik xassəsini xarakterizə edən material sabiti."
            },
            {
                  "term": "Anizotropiya",
                  "definition": "Maddənin fiziki xassələrinin müxtəlif istiqamətlərdə fərqli olması."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p10-u5-1",
                  "question": "En kəsiyinin sahəsi $2 \\text{ mm}^2$ ($2 \\cdot 10^{-6} \\text{ m}^2$) olan polad məftilə 400 N elastiklik qüvvəsi təsir edir. Mexaniki gərginliyi hesablayın.",
                  "solution": "$\\sigma = \\frac{F}{S} = \\frac{400}{2 \\cdot 10^{-6}} = 200 \\cdot 10^6 \\text{ Pa} = 200 \\text{ MPa}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p10-u5-1",
                  "question": "Aşağıdakılardan hansı amorf maddədir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Dəmir"
                        },
                        {
                              "key": "B",
                              "text": "Buz"
                        },
                        {
                              "key": "C",
                              "text": "Şüşə"
                        },
                        {
                              "key": "D",
                              "text": "Xörək duzu"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Şüşə dəqiq kristal qəfəsi və dəqiq ərimə temperaturu olmayan amorf maddədir."
            }
      ]
        },

  {
          id: 'lesson-phys-10-u6-electrostatic-potential',
          subjectId: 'fizika',
          grade: 10,
          unit: 'Bölmə 6: Elektrostatika. Potensial və Kondensatorlar',
          unitOrder: 6,
          title: 'Elektrik potensialı, potensiallar fərqi, kondensator və elektrik tutumu',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 3,
          summary: 'Elektrostatik sahənin enerjisi, potensial $\varphi = W_p/q$, gərginlik və intensivlik əlaqəsi $U = Ed$, kondensatorun tutumu $C = q/U$ və elektrik sahəsinin enerjisi $W = CU^2/2$.',
          theoryMarkdown: `
      ### 1. Elektrik Sahəsinin Potensialı
      Elektrik sahəsinin enerji xarakteristikasıdır:
      $$\varphi = \frac{W_p}{q} = k \cdot \frac{q}{r}, \qquad [\varphi] = 1 \text{ Volt}$$
      - **Potensiallar fərqi (Gərginlik):** $U = \varphi_1 - \varphi_2 = \frac{A}{q}$.
      - **İntensivlik və gərginlik əlaqəsi:**
      $$E = \frac{U}{d} \implies U = E \cdot d$$

      ### 2. Elektrik Tutumu və Kondensator
      Elektrik yüklərini və enerjisini toplamaq üçün istifadə olunan qurğuya **kondensator** deyilir.
      - **Elektrik tutumu ($C$):**
      $$C = \frac{q}{U}, \qquad [C] = 1 \text{ Farad} = 1 \text{ F}$$
      - **Müstəvi kondensatorun tutumu:**
      $$C = \frac{\varepsilon \varepsilon_0 S}{d}$$
      $\varepsilon$ — dielektrik nüfuzluğudur, $S$ — lövhələrin sahəsi, $d$ — lövhələr arasındakı məsafədir.

      ### 3. Yüklənmiş Kondensatorun Enerjisi
      $$W = \frac{q U}{2} = \frac{C U^2}{2} = \frac{q^2}{2C}$$
          `,
          keyFormulas: [
            {
                  "id": "f-p10-u6-1",
                  "name": "Müstəvi Kondensatorun Tutumu",
                  "latex": "C = \\frac{\\varepsilon \\varepsilon_0 S}{d}",
                  "description": "Tutum lövhələrin sahəsi ilə düz, məsafə ilə tərs mütənasibdir."
            },
            {
                  "id": "f-p10-u6-2",
                  "name": "Kondensatorun Enerjisi",
                  "latex": "W = \\frac{C U^2}{2}",
                  "description": "Kondensatorda toplanan elektrostatik sahənin enerjisidir."
            }
      ],
          glossary: [
            {
                  "term": "Farad (F)",
                  "definition": "1 volt gərginlikdə 1 kulon yük toplayan kondensatorun tutum vahidi."
            },
            {
                  "term": "Ekvipotensial səth",
                  "definition": "Bütün nöqtələrində elektrik potensialı eyni olan səth."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p10-u6-1",
                  "question": "Tutumu $10 \\; \\mu\\text{F}$ ($10^{-5} \\text{ F}$) olan kondensator 200 V gərginliyə qədər yüklənmişdir. Onun enerjisini tapın.",
                  "solution": "$W = \\frac{C U^2}{2} = \\frac{10^{-5} \\cdot 200^2}{2} = \\frac{10^{-5} \\cdot 40\\,000}{2} = 0.2 \\text{ C}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p10-u6-1",
                  "question": "Müstəvi kondensatorun lövhələri arasındakı məsafəni 2 dəfə artırdıqda onun elektrik tutumu necə dəyişər?",
                  "options": [
                        {
                              "key": "A",
                              "text": "2 dəfə artar"
                        },
                        {
                              "key": "B",
                              "text": "2 dəfə azalar"
                        },
                        {
                              "key": "C",
                              "text": "4 dəfə azalar"
                        },
                        {
                              "key": "D",
                              "text": "Dəyişməz"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "C ~ 1/d olduğundan məsafə 2 dəfə artdıqda tutum 2 dəfə azalar."
            }
      ]
        },

  {
          id: 'lesson-phys-10-u7-electric-current-media',
          subjectId: 'fizika',
          grade: 10,
          unit: 'Bölmə 7: Müxtəlif mühitlərdə elektrik cərəyanı',
          unitOrder: 7,
          title: 'Müxtəlif mühitlərdə elektrik cərəyanı: Metallar, elektrolitlər, qazlar, yarımkeçiricilər',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 3,
          summary: 'Metallar (sərbəst elektronlar), elektrolit məhlulları (ionlar və Faradey qanunu $m = kIt$), qaz boşalması və yarımkeçiricilər (elektron-deşik keçidi, p-n keçid).',
          theoryMarkdown: `
      ### 1. Metallarda Elektrik Cərəyanı
      - **Yükdaşıyıcılar:** Sərbəst elektronlar.
      - Metalları qızdırdıqda kristallik qəfəsin rəqsləri artır, elektronların toqquşması çoxalır, ona görə **müqavimət artır**:
      $$R = R_0 (1 + \alpha t)$$
      $\alpha$ — müqavimətin temperatur əmsalıdır.
      - **İfratkeçiricilik:** Kritik aşağı temperaturda müqavimətin sıçrayışla sıfıra düşməsi hadisəsidir.

      ### 2. Elektrolitlərdə Cərəyan (Elektroliz)
      - **Yükdaşıyıcılar:** Müsbət və mənfi ionlar. Elektrolitik dissosiasiya nəticəsində yaranır.
      - **Faradeyin I Qanunu:** Elektrod üzərində ayrılan maddənin kütləsi elektrolitdən keçən elektrik yükü ilə düz mütənasibdir:
      $$m = k \cdot q = k \cdot I \cdot t$$
      $k$ — maddənin elektrokimyəvi ekvivalentidir (kq/Kl).

      ### 3. Yarımkeçiricilər və p-n Keçid
      - **Yükdaşıyıcılar:** Sərbəst elektronlar və **deşiklər**.
      - Temperatur artdıqda yarımkeçiricilərin müqaviməti metalların əksinə olaraq **kəskin azalır**.
      - Aşqar keçiriciliyi: donor (elektron — $n$-tip), akseptor (deşik — $p$-tip).
      - **p-n keçid:** Cərəyanı yalnız bir istiqamətdə (düz istiqamətdə) yaxşı buraxan birtərəfli keçiricilik zonasıdır (diod, tranzistor).
          `,
          keyFormulas: [
            {
                  "id": "f-p10-u7-1",
                  "name": "Faradeyin Elektroliz Qanunu",
                  "latex": "m = k \\cdot I \\cdot t",
                  "description": "Elektrod üzərində ayrılan maddənin kütləsidir."
            },
            {
                  "id": "f-p10-u7-2",
                  "name": "Metalda Müqavimətin Temperatur Asılılığı",
                  "latex": "R = R_0 (1 + \\alpha \\Delta t)",
                  "description": "Temperatur artdıqca metalın müqaviməti xətti artır."
            }
      ],
          glossary: [
            {
                  "term": "Elektroliz",
                  "definition": "Elektrolit məhlulundan cərəyan keçərkən elektrodlar üzərində maddə ayrılması prosesi."
            },
            {
                  "term": "Deşik",
                  "definition": "Yarımkeçiricidə elektronun yerini tərk etməsi nəticəsində yaranan şərti müsbət yük daşıyıcısı."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p10-u7-1",
                  "question": "Elektroliz zamanı $k = 0.3 \\text{ mq/Kl}$ olan maddədən 1000 Kl yük keçdikdə ayrılan kütləni tapın.",
                  "solution": "$m = k \\cdot q = 0.3 \\cdot 1000 = 300 \\text{ mq} = 0.3 \\text{ qram}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p10-u7-1",
                  "question": "Yarımkeçiriciləri qızdırdıqda onların elektrik müqaviməti necə dəyişir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Artır"
                        },
                        {
                              "key": "B",
                              "text": "Kəskin azalır"
                        },
                        {
                              "key": "C",
                              "text": "Sabit qalır"
                        },
                        {
                              "key": "D",
                              "text": "Sıfıra bərabər olur"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Qızdırıldıqda sərbəst elektron və deşiklərin sayı sürətlə artdığı üçün yarımkeçiricinin müqaviməti kəskin azalır."
            }
      ]
        },

  {
          id: 'lesson-phys-11-u1-lorentz-ampere',
          subjectId: 'fizika',
          grade: 11,
          unit: 'Bölmə 1: Maqnit sahəsi və Lorens qüvvəsi',
          unitOrder: 1,
          title: 'Amper qüvvəsi, Lorens qüvvəsi və yüklü zərrəciklərin hərəkəti',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 3,
          summary: 'Amper qüvvəsi $F_A = I B l \sin\alpha$, Lorens qüvvəsi $F_L = q v B \sin\alpha$, sol əl qaydası və yüklü zərrəciyin çevrə üzrə fırlanma radiusu $r = mv/(qB)$.',
          theoryMarkdown: `
      ### 1. Amper Qüvvəsi
      Maqnit sahəsinin cərəyanlı naqilə göstərdiyi təsir qüvvəsidir:
      $$F_A = I \cdot B \cdot l \cdot \sin \alpha$$
      - $B$ — maqnit sahəsinin induksiyasıdır (vahidi: **Tesla**, $1 \text{ Tl} = 1 \text{ N/(A} \cdot \text{m)}$).
      - İstiqaməti **sol əl qaydası** ilə tapılır: Dörd barmaq cərəyan istiqamətinə yönəlir, maqnit xətləri ovuca daxil olur, $90^\circ$ açılmış baş barmaq Amper qüvvəsini göstərir.

      ### 2. Lorens Qüvvəsi
      Maqnit sahəsinin hərəkət edən yüklü zərrəciyə göstərdiyi qüvvədir:
      $$F_L = |q| \cdot v \cdot B \cdot \sin \alpha$$
      - Lorens qüvvəsi hərəkət sürətinə həmişə perpendikulyardır ($\vec{F}_L \perp \vec{v}$), buna görə də **iş görmür** ($A = 0$) və sürətin modulunu dəyişmir, yalnız istiqamətini dəyişir.

      ### 3. Zərrəciyin Maqnit Sahəsində Çevrə Üzrə Hərəkəti
      Əgər zərrəcik sahəyə perpendikulyar daxil olarsa ($\alpha = 90^\circ$), Lorens qüvvəsi mərkəzəqaçma qüvvəsi rolunu oynayır ($F_L = F_{\text{mq}}$):
      $$|q| v B = \frac{m v^2}{r} \implies r = \frac{m v}{|q| B}$$
      - **Fırlanma periodu:**
      $$T = \frac{2\pi r}{v} = \frac{2\pi m}{|q| B} \quad (\text{sürətdən asılı deyil!})$$
          `,
          keyFormulas: [
            {
                  "id": "f-p11-u1-1",
                  "name": "Lorens Qüvvəsi",
                  "latex": "F_L = |q| v B \\sin \\alpha",
                  "description": "Maqnit sahəsində hərəkət edən yükə təsir edən qüvvədir."
            },
            {
                  "id": "f-p11-u1-2",
                  "name": "Cismin Trayektoriya Radiusu",
                  "latex": "r = \\frac{m v}{|q| B}",
                  "description": "Zərrəciyin cızdığı çevrənin radiusudur."
            }
      ],
          glossary: [
            {
                  "term": "Tesla (Tl)",
                  "definition": "BS-də maqnit sahəsinin induksiya vahidi."
            },
            {
                  "term": "Lorens qüvvəsi",
                  "definition": "Maqnit sahəsi tərəfindən hərəkətdə olan yükə təsir edən və iş görməyən qüvvə."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p11-u1-1",
                  "question": "Uzunluğu 0.5 m olan naqildən 4 A cərəyan keçir. O, $B = 0.2 \\text{ Tl}$ olan bircins maqnit sahəsinə perpendikulyar yerləşdirilib. Amper qüvvəsini tapın.",
                  "solution": "$F_A = I \\cdot B \\cdot l \\cdot \\sin 90^\\circ = 4 \\cdot 0.2 \\cdot 0.5 \\cdot 1 = 0.4 \\text{ N}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p11-u1-1",
                  "question": "Lorens qüvvəsinin gördüyü mexaniki iş nəyə bərabərdir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "q · v · B"
                        },
                        {
                              "key": "B",
                              "text": "mv^2 / 2"
                        },
                        {
                              "key": "C",
                              "text": "0"
                        },
                        {
                              "key": "D",
                              "text": "I · B · l"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Lorens qüvvəsi həmişə sürət vektoruna perpendikulyar olduğu üçün gördüyü iş sıfıra bərabərdir (A = 0)."
            }
      ]
        },

  {
          id: 'lesson-phys-11-u2-self-induction-transformers',
          subjectId: 'fizika',
          grade: 11,
          unit: 'Bölmə 2: Elektromaqnit induksiyası və Öz-özünə induksiya',
          unitOrder: 2,
          title: 'Öz-özünə induksiya, induktivlik, maqnit enerjisi və transformator',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 3,
          summary: 'Öz-özünə induksiya hadisəsi, sarğacın induktivliyi $L$, maqnit sahəsinin enerjisi $W = L I^2 / 2$ və transformatorun iş prinsipi.',
          theoryMarkdown: `
      ### 1. Öz-özünə İnduksiya və İnduktivlik
      Dövrədən keçən cərəyan şiddəti dəyişdikdə həmin naqildə yaranan dəyişən maqnit selinin naqilin özündə induksiya EHQ-si doğurması hadisəsinə **öz-özünə induksiya** deyilir.
      - **Xüsusi maqnit seli:** $\Phi = L \cdot I$.
      - $L$ — sarğacın **induktivliyidir**. BS-də vahidi **henridir** ($1 \text{ Hn} = 1 \text{ Vb/A}$).
      - **Öz-özünə induksiya EHQ-si:**
      $$\varepsilon_{si} = -L \cdot \frac{\Delta I}{\Delta t}$$

      ### 2. Maqnit Sahəsinin Enerjisi
      Cərəyanlı sarğacın daxilindəki maqnit sahəsinin enerjisi:
      $$W_m = \frac{L \cdot I^2}{2} = \frac{\Phi \cdot I}{2} = \frac{\Phi^2}{2L}$$

      ### 3. Transformator
      Dəyişən cərəyanın tezliyini dəyişmədən gərginliyini artıran və ya azaldan qurğudur.
      - **Transformasiya əmsalı:**
      $$k = \frac{U_1}{U_2} \approx \frac{N_1}{N_2} \approx \frac{I_2}{I_1}$$
      - $k > 1$ olduqda alçaldıcı, $k < 1$ olduqda yüksəldici transformatordur.
          `,
          keyFormulas: [
            {
                  "id": "f-p11-u2-1",
                  "name": "Sarğacın Maqnit Enerjisi",
                  "latex": "W_m = \\frac{L \\cdot I^2}{2}",
                  "description": "Cərəyanlı induktiv sarğacın maqnit sahəsində toplanan enerjidir."
            },
            {
                  "id": "f-p11-u2-2",
                  "name": "Transformasiya Əmsalı",
                  "latex": "k = \\frac{U_1}{U_2} = \\frac{N_1}{N_2}",
                  "description": "Gərginliklərin nisbəti sarğılar sayının nisbətinə bərabərdir."
            }
      ],
          glossary: [
            {
                  "term": "Henri (Hn)",
                  "definition": "Cərəyan 1 saniyədə 1 A dəyişdikdə 1 V öz-özünə induksiya EHQ-si yaradan sarğacın induktivliyi."
            },
            {
                  "term": "Transformator",
                  "definition": "Elektromaqnit induksiyası əsasında dəyişən gərginliyi çevirən statik elektromaqnit qurğusu."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p11-u2-1",
                  "question": "İnduktivliyi $0.4 \\text{ Hn}$ olan sarğacdan 5 A cərəyan keçir. Maqnit sahəsinin enerjisini tapın.",
                  "solution": "$W_m = \\frac{L \\cdot I^2}{2} = \\frac{0.4 \\cdot 5^2}{2} = \\frac{0.4 \\cdot 25}{2} = 5 \\text{ C}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p11-u2-1",
                  "question": "Transformatorun birinci dolağında 1000 sarğı, ikinci dolağında 200 sarğı var. Transformasiya əmsalı k neçədir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "0.2"
                        },
                        {
                              "key": "B",
                              "text": "5"
                        },
                        {
                              "key": "C",
                              "text": "200"
                        },
                        {
                              "key": "D",
                              "text": "10"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "k = N1 / N2 = 1000 / 200 = 5 (alçaldıcı transformatordur)."
            }
      ]
        },

  {
          id: 'lesson-phys-11-u3-ac-circuits',
          subjectId: 'fizika',
          grade: 11,
          unit: 'Bölmə 3: Elektromaqnit rəqsləri və Dəyişən cərəyan',
          unitOrder: 3,
          title: 'Rəqs konturu, Tomson düsturu və dəyişən cərəyan müqavimətləri',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 3,
          summary: 'İdeal rəqs konturu (kondensator və sarğac), Tomson düsturu $T = 2\pi\sqrt{LC}$, dəyişən cərəyanın təsiredici qiymətləri, induktiv ($X_L = \omega L$) və tutum ($X_C = 1/(\omega C)$) müqaviməti.',
          theoryMarkdown: `
      ### 1. İdeal Rəqs Konturu
      Kondensator ($C$) və induktiv sarğacdan ($L$) ibarət qapalı elektrik dövrəsinə **rəqs konturu** deyilir.
      - Dövrədə elektrik sahəsi enerjisi ilə maqnit sahəsi enerjisi bir-birinə çevrilir:
      $$W = \frac{q^2}{2C} + \frac{L i^2}{2} = \text{const}$$
      - **Tomson düsturu:** Sərbəst elektromaqnit rəqslərinin periodu:
      $$T = 2\pi \sqrt{L \cdot C}$$
      - Xüsusi dövri tezlik: $\omega_0 = \frac{2\pi}{T} = \frac{1}{\sqrt{LC}}$.

      ### 2. Dəyişən Cərəyan və Təsiredici Qiymətlər
      Zaman keçdikcə həm qiyməti, həm də istiqaməti harmonik qanunla dəyişən cərəyandır:
      - **Təsiredici cərəyan və gərginlik:**
      $$I_{\text{təs}} = \frac{I_m}{\sqrt{2}} \approx 0.707 \cdot I_m, \qquad U_{\text{təs}} = \frac{U_m}{\sqrt{2}}$$

      ### 3. Dəyişən Cərəyan Dövrəsində Müqavimətlər
      - **Aktiv müqavimət ($R$):** Naqilin elektrik müqavimətidir, fazaca gərginliklə eynidir.
      - **İnduktiv müqavimət ($X_L$):** Sarğacın göstərdiyi müqavimətdir: $X_L = \omega L$.
      - **Tutum müqaviməti ($X_C$):** Kondensatorun göstərdiyi müqavimətdir: $X_C = \frac{1}{\omega C}$.
          `,
          keyFormulas: [
            {
                  "id": "f-p11-u3-1",
                  "name": "Tomson Düsturu",
                  "latex": "T = 2\\pi \\sqrt{L \\cdot C}",
                  "description": "Rəqs konturunda sərbəst elektromaqnit rəqslərinin periodudur."
            },
            {
                  "id": "f-p11-u3-2",
                  "name": "Təsiredici Gərginlik",
                  "latex": "U_{\\text{təs}} = \\frac{U_m}{\\sqrt{2}}",
                  "description": "Amplitud qiymətinin kök altında ikiyə nisbətidir (məişətdəki 220 V təsiredici qiymətdir)."
            }
      ],
          glossary: [
            {
                  "term": "Rəqs konturu",
                  "definition": "Kondensator və sarğacın birləşməsindən ibarət rəqsi sistem."
            },
            {
                  "term": "Təsiredici qiymət",
                  "definition": "Dəyişən cərəyanın eyni vaxtda ayrılan istiliyə görə sabit cərəyana ekvivalent qiyməti."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p11-u3-1",
                  "question": "Rəqs konturunda kondensatorun tutumu 4 dəfə artırılarsa, rəqs periodu necə dəyişər?",
                  "solution": "Tomson düsturuna görə $T = 2\\pi\\sqrt{LC}$. Tutum 4 dəfə artarsa, period $\\sqrt{4} = 2$ dəfə artar."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p11-u3-1",
                  "question": "Məişətdəki şəbəkə gərginliyinin təsiredici qiyməti $U_{\\text{təs}} = 220 \\text{ V}$ olarsa, amplitud qiyməti $U_m$ təxminən neçə voltdur?",
                  "options": [
                        {
                              "key": "A",
                              "text": "110 V"
                        },
                        {
                              "key": "B",
                              "text": "220 V"
                        },
                        {
                              "key": "C",
                              "text": "311 V"
                        },
                        {
                              "key": "D",
                              "text": "440 V"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Um = U_təs * √2 = 220 * 1.414 ≈ 311 V."
            }
      ]
        },

  {
          id: 'lesson-phys-11-u4-wave-optics',
          subjectId: 'fizika',
          grade: 11,
          unit: 'Bölmə 4: Dalğa optikası',
          unitOrder: 4,
          title: 'İşığın dispersiyası, interferensiyası, difraksiyası və difraksiya qəfəsi',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 3,
          summary: 'Nyuton təcrübəsi (ağ işığın rənglərə ayrılması), koherent mənbələr, dalğaların üst-üstə düşməsi (interferensiya), difraksiya qəfəsi düsturu $d \sin\varphi = k\lambda$.',
          theoryMarkdown: `
      ### 1. İşığın Dispersiyası
      Mühitin sındırma əmsalının işığın tezliyindən (rəngindən) asılılığı hadisəsinə **işığın dispersiyası** deyilir.
      - İ.Nyuton prizma vasitəsilə ağ işığı 7 əsas spektrə ayırmışdır: qırmızı, narıncı, sarı, yaşıl, mavi, göy, bənövşəyi.
      - Qırmızı işığın dalğa uzunluğu ən böyük, tezliyi və sındırma əmsalı ən kiçikdir ($n_q < n_b$). Ən çox sınan bənövşəyi şüadır.

      ### 2. İşığın İnterferensiyası
      Eyni tezlikli və fazalar fərqi sabit olan iki və ya daha artıq **koherent dalğanın** fəzada görüşərək bir-birini gücləndirməsi və ya zəiflətməsi hadisəsidir.
      - **Maksimum şərti (güclənmə):** Yollar fərqi dalğa uzunluğunun tam mislinə bərabər olduqda:
      $$\Delta d = k \cdot \lambda \quad (k = 0, \pm 1, \pm 2, \dots)$$
      - **Minimum şərti (zəifləmə):** Yollar fərqi tək sayda yarım dalğa uzunluğuna bərabər olduqda:
      $$\Delta d = (2k + 1) \frac{\lambda}{2}$$

      ### 3. İşığın Difraksiyası və Difraksiya Qəfəsi
      İşığın maneələrin kənarından əyilərək həndəsi kölgə sahəsinə keçməsi hadisəsinə **difraksiya** deyilir.
      - **Difraksiya qəfəsi:** Bir-birinə paralel çoxlu sayda xırda yarıqlardan ibarət spektral sistemdir.
      - **Difraksiya qəfəsi düsturu:**
      $$d \cdot \sin \varphi = k \cdot \lambda$$
      $d = a + b$ — qəfəs sabiti (periodu), $\varphi$ — difraksiya bucağı, $k$ — spektrin tərtibidir.
          `,
          keyFormulas: [
            {
                  "id": "f-p11-u4-1",
                  "name": "Difraksiya Qəfəsi Düsturu",
                  "latex": "d \\cdot \\sin \\varphi = k \\cdot \\lambda",
                  "description": "Əsas maksimumların bucaq vəziyyətini müəyyən edən şərtdir."
            },
            {
                  "id": "f-p11-u4-2",
                  "name": "İnterferensiya Maksimum Şərti",
                  "latex": "\\Delta d = k \\cdot \\lambda",
                  "description": "Yollar fərqi tam sayda dalğa uzunluğuna bərabər olduqda aydın parlaq zolaq alınır."
            }
      ],
          glossary: [
            {
                  "term": "Dispersiya",
                  "definition": "İşığın dalğa uzunluğundan asılı olaraq mühitdə fərqli sürətlə yayılması və sınması."
            },
            {
                  "term": "Koherentlik",
                  "definition": "Tezlikləri eyni və fazalar fərqi zaman keçdikcə sabit qalan dalğalar."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p11-u4-1",
                  "question": "Periodu $d = 2 \\cdot 10^{-6} \\text{ m}$ olan difraksiya qəfəsi üzərinə $\\lambda = 500 \\text{ nm}$ ($5 \\cdot 10^{-7} \\text{ m}$) dalğalı işıq düşür. Birinci tərtib ($k = 1$) maksimum üçün $\\sin \\varphi$-ni tapın.",
                  "solution": "$\\sin \\varphi = \\frac{k \\lambda}{d} = \\frac{1 \\cdot 5 \\cdot 10^{-7}}{2 \\cdot 10^{-6}} = 0.25$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p11-u4-1",
                  "question": "Ağ işıq şüşə prizmadan keçərkən ən çox meyil edən (sınan) rəng hansıdır?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Qırmızı"
                        },
                        {
                              "key": "B",
                              "text": "Sarı"
                        },
                        {
                              "key": "C",
                              "text": "Yaşıl"
                        },
                        {
                              "key": "D",
                              "text": "Bənövşəyi"
                        }
                  ],
                  "correctKey": "D",
                  "explanation": "Bənövşəyi şüanın tezliyi ən böyük və sındırma əmsalı ən yüksək olduğu üçün prizmada ən çox sınır."
            }
      ]
        },

  {
          id: 'lesson-phys-11-u5-quantum-photoelectric',
          subjectId: 'fizika',
          grade: 11,
          unit: 'Bölmə 5: Kvant fizikası və İşıq kvantları',
          unitOrder: 5,
          title: 'Kvant hipotezi, fotoeffekt hadisəsi və Eynşteyn tənliyi',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 3,
          summary: 'Plank hipotezi $E = h\nu$, fotonun enerjisi və impulsu $p = h/\lambda$, fotoeffekt qanunları, çıxış işi və Eynşteyn tənliyi $h\nu = A_{\text{çıx}} + E_k$.',
          theoryMarkdown: `
      ### 1. Plank Hipotezi və Foton
      1900-cü ildə M.Plank irəli sürdü ki, atomlar elektromaqnit şüalarını kəsilməz deyil, ayrı-ayrı paylarla — **kvantlarla** (fotonlarla) şüalandırır və udur.
      - **Fotonun enerjisi:**
      $$E = h \cdot \nu = \frac{h c}{\lambda}$$
      $h = 6.63 \cdot 10^{-34} \text{ C} \cdot \text{san}$ — Plank sabitidir.
      - Fotonun sükunət kütləsi sıfırdır ($m_0 = 0$).
      - **Fotonun impulsu:**
      $$p = \frac{E}{c} = \frac{h}{\lambda}$$

      ### 2. Xarici Fotoeffekt və Qanunları
      İşığın təsiri altında maddədən (əsasən metallardan) elektronların qopması hadisəsinə **xarici fotoeffekt** deyilir.
      - **I Qanun (Stoletov qanunu):** Doyma fotocərəyanının şiddəti katodun vahid zamanda udduğu işıq enerjisi ilə düz mütənasibdir.
      - **II Qanun:** Qopan fotoelektronların maksimal kinetik enerjisi işığın tezliyi ilə xətti artır, lakin işığın intensivliyindən asılı deyil.
      - **III Qanun (Fotoeffektin qırmızı sərhədi):** Fotoeffekt yalnız işığın tezliyi metal üçün xarakterik olan müəyyən minimal $\nu_0$ tezliyindən böyük olduqda baş verir:
      $$\nu \ge \nu_0 = \frac{A_{\text{çıx}}}{h}, \qquad \lambda \le \lambda_0 = \frac{h c}{A_{\text{çıx}}}$$

      ### 3. Fotoeffekt üçün Eynşteyn Tənliyi
      Enerjinin saxlanması qanununa əsasən, udulan fotonun enerjisi elektronun metaldan çıxış işinə və ona kinetik enerji verilməsinə sərf olunur:
      $$h \nu = A_{\text{çıx}} + \frac{m v_{\max}^2}{2} = A_{\text{çıx}} + e U_t$$
      $U_t$ — ləngidici gərginlikdir.
          `,
          keyFormulas: [
            {
                  "id": "f-p11-u5-1",
                  "name": "Fotoeffekt üçün Eynşteyn Tənliyi",
                  "latex": "h \\nu = A_{\\text{çıx}} + \\frac{m v_{\\max}^2}{2}",
                  "description": "Foton enerjisinin çıxış işi və maksimal kinetik enerjiyə paylanması qanunudur."
            },
            {
                  "id": "f-p11-u5-2",
                  "name": "Fotoeffektin Qırmızı Sərhədi",
                  "latex": "\\lambda_0 = \\frac{h c}{A_{\\text{çıx}}}",
                  "description": "Fotoeffektin baş verə bildiyi maksimal dalğa uzunluğudur."
            }
      ],
          glossary: [
            {
                  "term": "Foton",
                  "definition": "İşıq şüalanmasının ən kiçik elementar zərrəciyi, işıq kvantı."
            },
            {
                  "term": "Çıxış işi",
                  "definition": "Elektronu metalın səthindən qoparmaq üçün tələb olunan minimum iş."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p11-u5-1",
                  "question": "Fotonun enerjisi $E = 5 \\text{ eV}$, metalın çıxış işi $A_{\\text{çıx}} = 3 \\text{ eV}$-dir. Qopan elektronların maksimal kinetik enerjisini tapın.",
                  "solution": "Eynşteyn tənliyinə görə: $E_k = h\\nu - A_{\\text{çıx}} = 5 - 3 = 2 \\text{ eV}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p11-u5-1",
                  "question": "Fotoelektronların maksimal kinetik enerjisi hansı parametrdən asılıdır?",
                  "options": [
                        {
                              "key": "A",
                              "text": "İşığın intensivliyindən"
                        },
                        {
                              "key": "B",
                              "text": "Düşən işığın tezliyindən"
                        },
                        {
                              "key": "C",
                              "text": "İşıqlanma müddətindən"
                        },
                        {
                              "key": "D",
                              "text": "Mənbəyə qədər olan məsafədən"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Eynşteyn tənliyinə görə maksimal kinetik enerji işığın intensivliyindən deyil, yalnız düşən işığın tezliyindən xətti asılıdır."
            }
      ]
        },

  {
          id: 'lesson-phys-11-u6-bohr-postulates-lasers',
          subjectId: 'fizika',
          grade: 11,
          unit: 'Bölmə 6: Atom fizikası və Kvant postulatları',
          unitOrder: 6,
          title: 'Bor postulatları, hidrogen atomunun spektri və lazerlər',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 3,
          summary: 'Nils Borun iki kvant postulatı, stasionar hallar, şüalanma və udulma tezliyi $h\nu = E_k - E_n$, optik kvant generatorları (lazerlər).',
          theoryMarkdown: `
      ### 1. Bor Postulatları
      Klassik elektrodinamikaya görə təcillə hərəkət edən elektron fasiləsiz şüalanmalı və nüvəyə düşməli idi. N.Bor 1913-cü ildə iki dahi postulatla bunu izah etdi:
      - **I Postulat (Stasionar hallar):** Atom yalnız xüsusi stasionar (şüalanmayan) hallarda ola bilər. Bu hallarda hərəkət edən elektron şüalanmır. Elektronun impuls momenti kvantlanır:
      $$m_e v r = n \cdot \frac{h}{2\pi} \quad (n = 1, 2, 3, \dots)$$
      - **II Postulat (Şüalanma və udulma):** Atom bir stasionar haldan ($E_k$) digər stasionar hala ($E_n$) keçdikdə bir foton şüalandırır və ya udur:
      $$h \nu = |E_k - E_n|$$
        - $E_k > E_n$ olduqda: **şüalanma** baş verir.
        - $E_n > E_k$ olduqda: **udulma** baş verir.

      ### 2. Hidrogen Atomunun Enerji Səviyyələri
      Əsas hal ($n=1$): $E_1 = -13.6 \text{ eV}$.
      İxtiyari səviyyə:
      $$E_n = -\frac{13.6}{n^2} \text{ eV}$$

      ### 3. Məcburi Şüalanma və Lazerlər
      Fotonun təsiri altında həyəcanlanmış atomun ilkin fotonla eyni tezlikli, eyni fazalı və eyni istiqamətli ikinci bir foton şüalandırmasına **məcburi şüalanma** deyilir.
      - **Lazer (Optik Kvant Generatoru):** Məcburi şüalanma əsasında işləyən yüksək koherent, monoxromatik və dar istiqamətli güclü işıq mənbəyidir.
          `,
          keyFormulas: [
            {
                  "id": "f-p11-u6-1",
                  "name": "Borun İkinci Postulatı",
                  "latex": "h \\nu = E_k - E_n",
                  "description": "Şüalanan fotonun enerjisi iki stasionar halın enerji fərqinə bərabərdir."
            },
            {
                  "id": "f-p11-u6-2",
                  "name": "Hidrogen Atomunun Enerji Səviyyələri",
                  "latex": "E_n = -\\frac{13.6}{n^2} \\text{ eV}",
                  "description": "n-ci kvant səviyyəsində elektronun enerjisidir."
            }
      ],
          glossary: [
            {
                  "term": "Stasionar hal",
                  "definition": "Atomun enerji şüalandırmadığı dayanıqlı kvant vəziyyəti."
            },
            {
                  "term": "Lazer",
                  "definition": "Məcburi şüalanma prinsipi ilə işləyən güclü monoxromatik və koherent işıq şüalandırıcısı."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p11-u6-1",
                  "question": "Atom $E_3 = -1.5 \\text{ eV}$ səviyyəsindən $E_1 = -13.6 \\text{ eV}$ əsas səviyyəsinə keçdikdə şüalanan fotonun enerjisini tapın.",
                  "solution": "$E_{\\text{foton}} = E_3 - E_1 = -1.5 - (-13.6) = 13.6 - 1.5 = 12.1 \\text{ eV}$."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p11-u6-1",
                  "question": "Atom elektronun aşağı enerji səviyyəsindən yuxarı enerji səviyyəsinə keçməsi zamanı nə baş verir?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Foton şüalandırır"
                        },
                        {
                              "key": "B",
                              "text": "Foton udur"
                        },
                        {
                              "key": "C",
                              "text": "Elektron itirir"
                        },
                        {
                              "key": "D",
                              "text": "Heç bir enerji dəyişmir"
                        }
                  ],
                  "correctKey": "B",
                  "explanation": "Aşağı səviyyədən yuxarı səviyyəyə keçmək üçün atom mütləq foton udmalıdır."
            }
      ]
        },

  {
          id: 'lesson-phys-11-u7-nuclear-binding-energy',
          subjectId: 'fizika',
          grade: 11,
          unit: 'Bölmə 7: Nüvə və elementar zərrəciklər fizikası',
          unitOrder: 7,
          title: 'Nüvənin rabitə enerjisi, kütlə qüsuru və radioaktiv parçalanma qanunu',
          order: 1,
          readTimeMinutes: 10,
          difficulty: 3,
          summary: 'Güclü qarşılıqlı təsir (nüvə qüvvələri), kütlə qüsuru $\Delta m$, rabitə enerjisi $E_r = \Delta m c^2$, radioaktiv parçalanma qanunu $N = N_0 2^{-t/T}$ və 4 fundamental qarşılıqlı təsir.',
          theoryMarkdown: `
      ### 1. Nüvə Qüvvələri və Kütlə Qüsuru
      Protonları və neytronları nüvədə bir yerdə saxlayan qüvvələr **nüvə qüvvələridir** (güclü qarşılıqlı təsir). Təbiətin ən güclü, lakin qısamənzilli ($10^{-15} \text{ m}$) qüvvələridir.
      - **Kütlə qüsuru ($\Delta m$):** Nüvəni təşkil edən sərbəst proton və neytronların kütlələri cəmi ilə həmin nüvənin bütöv kütləsi arasındakı fərqdir:
      $$\Delta m = (Z \cdot m_p + N \cdot m_n) - M_{\text{nüvə}} > 0$$

      ### 2. Nüvənin Rabitə Enerjisi
      Nüvəni ayrı-ayrı sərbəst nuklonlara parçalamaq üçün lazım olan minimum enerjiyə **rabitə enerjisi** deyilir:
      $$E_r = \Delta m \cdot c^2 = [(Z m_p + N m_n) - M_{\text{nüvə}}] \cdot c^2$$
      - Xüsusi rabitə enerjisi: $\varepsilon = \frac{E_r}{A}$ (bir nuklona düşən rabitə enerjisi). Maksimum qiyməti dəmir ($^{56}\text{Fe}$) nüvəsindədir ($\approx 8.8 \text{ MeV/nuklon}$).

      ### 3. Radioaktiv Parçalanma Qanunu
      Radioaktiv atomların ilkin sayının yarısının parçalanmasına sərf olunan zamana **yarımparçalanma periodu** ($T$) deyilir:
      $$N(t) = N_0 \cdot 2^{-\frac{t}{T}}$$

      ### 4. Dörd Fundamental Qarşılıqlı Təsir
      Kainatda bütün proseslər 4 fundamental qüvvə ilə idarə olunur:
      1. **Qravitasiya qarşılıqlı təsiri** (ən zəif, sonsuz mənzilli).
      2. **Elektromaqnit qarşılıqlı təsiri** (sonsuz mənzilli, yüklər arasında).
      3. **Güclü (nüvə) qarşılıqlı təsiri** (ən güclü, nüvədə nuklonlar arasında).
      4. **Zəif qarşılıqlı təsir** (beta-parçalanma və neytrino proseslərində).
          `,
          keyFormulas: [
            {
                  "id": "f-p11-u7-1",
                  "name": "Nüvənin Rabitə Enerjisi",
                  "latex": "E_r = \\Delta m \\cdot c^2",
                  "description": "Kütlə qüsurunun işıq sürətinin kvadratı ilə hasilidir."
            },
            {
                  "id": "f-p11-u7-2",
                  "name": "Radioaktiv Parçalanma Qanunu",
                  "latex": "N = N_0 \\cdot 2^{-t/T}",
                  "description": "Parçalanmamış radioaktiv nüvələrin sayının zamandan asılılığıdır."
            }
      ],
          glossary: [
            {
                  "term": "Kütlə qüsuru (Δm)",
                  "definition": "Nuklonların fərdi kütlələri cəminin bütöv nüvənin kütləsindən böyük olması fərqi."
            },
            {
                  "term": "Yarımparçalanma periodu (T)",
                  "definition": "Radioaktiv nüvələrin tən yarısının parçalanması üçün keçən zaman fasiləsi."
            }
      ],
          solvedExamples: [
            {
                  "id": "ex-p11-u7-1",
                  "question": "Yarımparçalanma periodu $T = 5$ gün olan maddənin 15 gün sonra hansı hissəsi parçalanmamış qalar?",
                  "solution": "Zaman $t = 15$ gün. $t / T = 15 / 5 = 3$. Qalan hissə: $\\frac{N}{N_0} = 2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$ hissəsi qalar ($87.5\\%$-i parçalanar)."
            }
      ],
          miniQuiz: [
            {
                  "questionId": "mq-p11-u7-1",
                  "question": "Təbiətdəki dörd fundamental qarşılıqlı təsirdən ən güclüsü hansıdır?",
                  "options": [
                        {
                              "key": "A",
                              "text": "Qravitasiya qarşılıqlı təsiri"
                        },
                        {
                              "key": "B",
                              "text": "Elektromaqnit qarşılıqlı təsiri"
                        },
                        {
                              "key": "C",
                              "text": "Güclü qarşılıqlı təsir"
                        },
                        {
                              "key": "D",
                              "text": "Zəif qarşılıqlı təsir"
                        }
                  ],
                  "correctKey": "C",
                  "explanation": "Nuklonları bir yerdə saxlayan güclü (nüvə) qarşılıqlı təsiri kainatın ən güclü qüvvəsidir."
            }
      ]
        }
,

  // =========================================================================
  // 4. KİMYA (AR Elm və Təhsil Nazirliyi e-Dərslik: 7, 8, 9, 10, 11 - 29 Bölmə)
  // =========================================================================
  {
        id: 'kimya-7-1',
        subjectId: 'kimya',
        grade: 7,
        unit: 'Bölmə 1: Giriş və İlkin Kimyəvi Anlayışlar',
        unitOrder: 1,
        title: 'Maddə, cisim və qarışıqların ayrılma üsulları',
        order: 1,
        readTimeMinutes: 14,
        difficulty: 1,
        summary: 'Fiziki cisimlər və maddələr, saf maddələr və qarışıqlar, bircinsli və müxtəlifcinsli qarışıqlar, ayrılma metodları.',
        theoryMarkdown: `
    ### Kimya Nəyi Öyrənir?
    Kimya — maddələr, onların tərkibi, quruluşu, xassələri, bir-birinə çevrilməsi və bu çevrilmələr zamanı baş verən hadisələr haqqında təbiət elmidir.

    #### 1. Cisim və Maddə
    * **Fiziki cisim:** Bizi əhatə edən, müəyyən forma və həcmə malik olan varlıqlardır (məsələn: şüşə stəkan, dəmir mismar, taxta qələm).
    * **Maddə:** Fiziki cisimləri təşkil edən materialdır (şüşə, dəmir, sellüloza, su, xörək duzu).
    * **Maddənin xassələri:**
      - *Fiziki xassələr:* Aqreqat halı, rəngi, iyi, dadı, sıxlığı, ərimə və qaynama temperaturu, istilik və elektrik keçiriciliyi.
      - *Kimyəvi xassələr:* Maddənin başqa maddələrlə qarşılıqlı təsirdə olub yeni maddələrə çevrilmə qabiliyyəti.

    #### 2. Saf Maddələr və Qarışıqlar
    * **Saf maddə:** Sabit fiziki sabitlərə (ərimə və qaynama temperaturu, sıxlıq) malik olan, eyni növ zərrəciklərdən təşkil olunmuş maddədir (məsələn: distillə olunmuş su, təmiz oksigen, qızıl).
    * **Qarışıq:** İki və ya daha çox fərdi maddənin kimyəvi qarşılıqlı təsirdə olmadan fiziki birləşməsidir. Tərkib hissələri öz fərdi xassələrini saxlayır:
      1. **Bircinsli (Homogen) qarışıqlar:** Tərkib hissələrini adi gözlə və ya mikroskopla ayırd etmək olmur (məsələn: şəkərin suda məhlulu, hava, bürünc).
      2. **Müxtəlifcinsli (Heterogen) qarışıqlar:** Tərkib hissələrini adi gözlə və ya mikroskopla görmək mümkündür (məsələn: qum ilə su, süd, təbaşir ilə su).

    #### 3. Qarışıqların Ayrılma Üsulları
    * **Heterogen qarışıqların ayrılması:**
      - *Çökdürmə (durultma):* Sıxlıqları fərqli olan bərk-maye və ya maye-maye (ayırıcı qıfla yağ və su) sistemlər üçün.
      - *Süzmə:* Mayedə həll olmayan bərk maddələri ayırmaq üçün (kağız filtr vasitəsilə).
      - *Maqnitlə təsir etmə:* Tərkibində maqnitlənən metal (məsələn: dəmir tozu ilə kükürd tozu) olduqda.
    * **Homogen qarışıqların ayrılması:**
      - *Buxarlandırma və kristallaşdırma:* Mayedə həll olmuş bərk maddəni (duzlu su) ayırmaq üçün.
      - *Distillə:* Qaynama temperaturları müxtəlif olan bir-birində həll olan mayeləri (su ilə etil spirti) ayırmaq üçün.
        `,
        keyFormulas: [
          {
                "formula": "\\rho = \\frac{m}{V}",
                "name": "Sıxlıq düsturu",
                "desc": "Maddənin kütləsinin onun həcminə nisbəti (kq/m³ və ya q/sm³)"
          },
          {
                "formula": "T_{qaynama}, T_{erime} = \\text{const}",
                "name": "Saf maddənin sabiti",
                "desc": "Saf maddələr sabit fiziki sabitlərə malikdir"
          }
    ],
        glossary: [
          {
                "term": "Saf maddə",
                "definition": "Eyni növ zərrəciklərdən ibarət sabit fiziki xassələrə malik maddə."
          },
          {
                "term": "Homogen qarışıq",
                "definition": "Komponentlərinin sərhədi mikroskopla belə seçilməyən bircinsli sistem."
          },
          {
                "term": "Distillə",
                "definition": "Mayenin buxarlandırılması və ardınca buxarın kondensasiyası ilə ayrılma üsulu."
          }
    ],
        solvedExamples: [
          {
                "problem": "Dəmir tozları, xörək duzu və qumdan ibarət qarışığı tərkib hissələrinə ayırmaq üçün hansı ardıcıllıqla hərəkət etmək lazımdır?",
                "solution": "1) Əvvəlcə maqnit yaxınlaşdıraraq dəmir tozlarını qarışıqdan ayırırıq. 2) Qalan duz və qum qarışığına su əlavə edib qarışdırırıq (duz həll olur, qum həll olmur). 3) Süzgəcdən süzərək qumu ayırırıq. 4) Filtratdakı duzlu suyu buxarlandıraraq xörək duzu kristallarını əldə edirik."
          }
    ],
        miniQuiz: [
          {
                "q": "Aşağıdakılardan hansı homogen (bircinsli) qarışıqdır?",
                "options": [
                      "Süd",
                      "Şəkərin suda məhlulu",
                      "Duman",
                      "Qum ilə su"
                ],
                "a": 1,
                "exp": "Şəkər suda tam molekulyar səviyyədə həll olaraq bircinsli məhlul əmələ gətirir."
          },
          {
                "q": "Bir-birində həll olan iki mayeni (məsələn, spirt və su) ayırmaq üçün hansı üsul tətbiq edilir?",
                "options": [
                      "Süzmə",
                      "Distillə",
                      "Durultma",
                      "Maqnitlə təsir"
                ],
                "a": 1,
                "exp": "Spirt (78°C) və suyun (100°C) qaynama temperaturları fərqli olduğundan distillə üsulu tətbiq edilir."
          }
    ]
      },

  {
        id: 'kimya-7-2',
        subjectId: 'kimya',
        grade: 7,
        unit: 'Bölmə 2: Kimyəvi Formul və Valentlik. Maddə Miqdarı',
        unitOrder: 2,
        title: 'Valentlik, kimyəvi formulların tərtibi və mol anlayışı',
        order: 2,
        readTimeMinutes: 16,
        difficulty: 2,
        summary: 'Kimyəvi element, nisbi atom və molekul kütləsi, valentlik qaydaları, maddə miqdarı (mol), Avoqadro qanunu və molyar kütlə.',
        theoryMarkdown: `
    ### Kimyəvi Formul və Valentlik

    #### 1. Kimyəvi Simvollar və Nisbi Atom Kütləsi
    Hər bir kimyəvi element latınca adının baş hərfi (və ya ilk iki hərfi) ilə işarə olunur (İ.Berselius tərəfindən təklif edilmişdir: $H, O, C, Fe, Na$).
    * **Nisbi atom kütləsi ($A_r$):** Element atomunun kütləsinin karbon atomu ($^{12}C$) kütləsinin $1/12$-nə olan nisbətidir (ölçüsüz kəmiyyətdir). Məsələn: $A_r(H) = 1, A_r(O) = 16, A_r(C) = 12$.
    * **Nisbi molekul kütləsi ($M_r$):** Molekulu təşkil edən atomların nisbi atom kütlələrinin cəmidir. Məsələn: $M_r(H_2O) = 2 \times 1 + 16 = 18$.

    #### 2. Valentlik və Formulların Tərtibi
    * **Valentlik:** Kimyəvi element atomunun müəyyən sayda başqa atomları özünə birləşdirmək və ya əvəz etmək qabiliyyətidir. Hidrogen həmişə **I**, Oksigen isə demək olar ki, həmişə **II** valentlidir.
    * **Sabit valentli elementlər:**
      - I valentli: $H, F, Na, K, Li$
      - II valentli: $O, Ca, Ba, Mg, Zn$
      - III valentli: $Al, B$
    * **Dəyişkən valentli elementlər:** $Fe$ (II, III), $Cu$ (I, II), $P$ (III, V), $S$ (II, IV, VI), $N$ (I, II, III, IV).
    * **Formulun tərtibi:** $A_x B_y$ birləşməsində indekslər valentliklərin ən kiçik ortaq bölünəni (ƏKOB) tapılaraq təyin edilir:
      $$x = \frac{\text{ƏKOB}}{V_A}, \quad y = \frac{\text{ƏKOB}}{V_B}$$

    #### 3. Maddə Miqdarı — Mol
    * **Mol:** Tərkibində $12$ qram karbonda ($^{12}C$) olan atomların sayı qədər ($6.02 \times 10^{23}$) zərrəcik saxlayan maddə miqdarıdır.
    * **Avoqadro sabiti ($N_A$):** $N_A = 6.02 \times 10^{23} \text{ mol}^{-1}$.
    * **Molyar kütlə ($M$):** $1$ mol maddənin qramlarla kütləsidir ($M = m / \nu$, vahidi: q/mol). Ədədi qiymətcə $M_r$-ə bərabərdir.
    * **Qazların molyar həcmi ($V_m$):** Normal şəraitdə (n.ş. $0^\circ C$, $101.3$ kPa) istənilən qazın $1$ molu $V_m = 22.4 \text{ l/mol}$ həcm tutur.
        `,
        keyFormulas: [
          {
                "formula": "\\nu = \\frac{m}{M} = \\frac{N}{N_A} = \\frac{V}{V_m}",
                "name": "Maddə miqdarı düsturları",
                "desc": "Kütlə, hissəcik sayı və qaz həcmi ilə molun əlaqəsi"
          },
          {
                "formula": "N_A = 6.02 \\times 10^{23} \\text{ mol}^{-1}",
                "name": "Avoqadro sabiti",
                "desc": "1 moldakı struktur vahidlərinin sayı"
          },
          {
                "formula": "V_m = 22.4 \\text{ l/mol (n.ş.)}",
                "name": "Molyar həcm",
                "desc": "Normal şəraitdə qazların 1 molunun tutduğu həcm"
          }
    ],
        glossary: [
          {
                "term": "Valentlik",
                "definition": "Atomun müəyyən sayda kimyəvi rabitə əmələ gətirmək qabiliyyəti."
          },
          {
                "term": "Mol",
                "definition": "6.02 × 10²³ sayda struktur vahid saxlayan maddə miqdarı vahidi."
          },
          {
                "term": "Molyar kütlə",
                "definition": "Maddənin bir molunun kütləsi (q/mol)."
          }
    ],
        solvedExamples: [
          {
                "problem": "44 qram karbon qazının ($CO_2$) maddə miqdarını və normal şəraitdəki həcmini hesablayın ($A_r(C)=12, A_r(O)=16$).",
                "solution": "1) M(CO₂) = 12 + 2×16 = 44 q/mol. 2) Maddə miqdarı: ν = m / M = 44 / 44 = 1 mol. 3) Həcm: V = ν × V_m = 1 × 22.4 = 22.4 litr."
          }
    ],
        miniQuiz: [
          {
                "q": "Fosfor(V) oksidin kimyəvi formulu necə yazılır?",
                "options": [
                      "PO₂",
                      "P₂O₅",
                      "P₅O₂",
                      "P₂O₃"
                ],
                "a": 1,
                "exp": "Fosfor V, oksigen II valentlidir. ƏKOB(5, 2) = 10. İndekslər: P üçün 10/5=2, O üçün 10/2=5 -> P₂O₅."
          },
          {
                "q": "Normal şəraitdə 0.5 mol oksigen qazı neçə litr həcm tutur?",
                "options": [
                      "11.2 l",
                      "22.4 l",
                      "44.8 l",
                      "5.6 l"
                ],
                "a": 0,
                "exp": "V = ν × V_m = 0.5 × 22.4 = 11.2 litr."
          }
    ]
      },

  {
        id: 'kimya-7-3',
        subjectId: 'kimya',
        grade: 7,
        unit: 'Bölmə 3: Fiziki və Kimyəvi Hadisələr. Kimyəvi Tənliklər',
        unitOrder: 3,
        title: 'Kimyəvi reaksiyalar və maddə kütləsinin saxlanması qanunu',
        order: 3,
        readTimeMinutes: 15,
        difficulty: 2,
        summary: 'Fiziki və kimyəvi hadisələrin fərqi, reaksiyanın əlamətləri, kütlənin saxlanması qanunu, tənliklərin əmsallaşdırılması və istilik effekti.',
        theoryMarkdown: `
    ### Kimyəvi Reaksiyalar və Tənliklər

    #### 1. Fiziki və Kimyəvi Hadisələr
    * **Fiziki hadisələr:** Maddənin tərkibi dəyişmir, yalnız forması, aqreqat halı və ya ölçüsü dəyişir (şüşənin sınması, suyun buxarlanması, dəmirin əriməsi).
    * **Kimyəvi hadisələr (kimyəvi reaksiyalar):** Bir maddədən başqa tərkib və xassəli yeni maddələrin əmələ gəlməsi prosesidir (odunun yanması, dəmirin paslanması, südün qıcqırması).
    * **Kimyəvi reaksiyanın əlamətləri:**
      1. İstiliyin ayrılması və ya udulması (işıq saçma).
      2. Çöküntünün əmələ gəlməsi və ya həll olması.
      3. Qaz ayrılması.
      4. Rəngin dəyişməsi.
      5. İy çıxması.

    #### 2. Maddə Kütləsinin Saxlanması Qanunu
    > **M.V.Lomonosov (1748) və A.Lavuazye (1789):** Reaksiyaya daxil olan maddələrin kütlələrinin cəmi reaksiya nəticəsində alınan maddələrin kütlələrinin cəminə bərabərdir.
    $$\sum m_{\text{başlanğıc}} = \sum m_{\text{son}}$$
    Bu qanunun mahiyyəti ondan ibarətdir ki, kimyəvi reaksiyalarda atomlar itmir və yenidən yaranmır, yalnız yenidən qruplaşır. Buna görə kimyəvi tənliklərin sol və sağ tərəfindəki hər bir element atomunun sayı bərabər olmalıdır (əmsallaşdırma).

    #### 3. Kimyəvi Reaksiyaların İstilik Effekti
    * **Ekzotermik reaksiyalar ($+Q$):** İstiliyin ayrılması ilə gedən reaksiyalardır (məsələn, bütün yanma reaksiyaları):
      $$C + O_2 \rightarrow CO_2 + Q$$
    * **Endotermik reaksiyalar ($-Q$):** İstiliyin udulması ilə gedən reaksiyalardır (məsələn, əhəngdaşının parçalanması, azotun oksigenlə reaksiyası):
      $$CaCO_3 \xrightarrow{t} CaO + CO_2 - Q$$
        `,
        keyFormulas: [
          {
                "formula": "\\sum m_{\\text{reagent}} = \\sum m_{\\text{məhsul}}",
                "name": "Kütlənin saxlanması qanunu",
                "desc": "Reaksiyaya daxil olan kütlələrin cəmi məhsulların kütlələri cəminə bərabərdir"
          },
          {
                "formula": "Q",
                "name": "İstilik effekti",
                "desc": "Reaksiya zamanı ayrılan (+Q) və ya udulan (-Q) istilik miqdarı (kCoul)"
          }
    ],
        glossary: [
          {
                "term": "Kimyəvi reaksiya",
                "definition": "Maddələrin atom rabitələrinin qırılması və yeni maddələrin formalaşması prosesi."
          },
          {
                "term": "Ekzotermik reaksiya",
                "definition": "İstilik ayrılması ilə müşayiət olunan kimyəvi proses."
          },
          {
                "term": "Endotermik reaksiya",
                "definition": "Ətrafdan istiliyin udulması ilə baş verən reaksiya."
          }
    ],
        solvedExamples: [
          {
                "problem": "12 qram karbon oksigendə tam yandıqda 44 qram karbon qazı əmələ gəlmişdir. Reaksiyaya daxil olan oksigenin kütləsini tapın.",
                "solution": "Kütlənin saxlanması qanununa görə: m(C) + m(O₂) = m(CO₂). 12 q + m(O₂) = 44 q => m(O₂) = 44 - 12 = 32 qram."
          }
    ],
        miniQuiz: [
          {
                "q": "Aşağıdakılardan hansı fiziki hadisədir?",
                "options": [
                      "Dəmirin paslanması",
                      "Südün turşuması",
                      "Buzun əriməsi",
                      "Kömürün yanması"
                ],
                "a": 2,
                "exp": "Buzun əriməsi aqreqat halının dəyişməsidir, suyun kimyəvi tərkibi dəyişməz qalır."
          },
          {
                "q": "2H₂ + O₂ → 2H₂O + Q reaksiyası hansı növ reaksiyadır?",
                "options": [
                      "Endotermik",
                      "Ekzotermik",
                      "Parçalanma",
                      "Əvəzetmə"
                ],
                "a": 1,
                "exp": "İstilik ayrılması (+Q) ilə getdiyindən ekzotermik reaksiyadır."
          }
    ]
      },

  {
        id: 'kimya-7-4',
        subjectId: 'kimya',
        grade: 7,
        unit: 'Bölmə 4: Oksigen. Hava və Yanma Prosesi',
        unitOrder: 4,
        title: 'Oksigenin alınması, allatropiyası və havanın tərkibi',
        order: 4,
        readTimeMinutes: 14,
        difficulty: 1,
        summary: 'Oksigen elementi və bəsit maddəsi, laboratoriya və sənaye alınma üsulları, ozon ($O_3$), havanın qaz tərkibi və yanma.',
        theoryMarkdown: `
    ### Oksigen və Hava

    #### 1. Oksigenin Ümumi Xarakteristikası
    Oksigen ($O$) yer qabığında ən çox yayılmış kimyəvi elementdir (kütləcə təxminən $49\%$-ni təşkil edir). Bəsit maddə kimi ikiatomlu qazdır ($O_2$), havanın həcmcə $21\%$-ni təşkil edir.
    * **Fiziki xassələri:** Rəngsiz, dadsız, iysiz, havadan bir qədər ağır ($M_r(O_2)=32, M_r(\text{hava})=29$), suda az həll olan qazdır.

    #### 2. Oksigenin Alınması
    * **Laboratoriyada:** Oksigenli mürəkkəb maddələrin parçalanmasından alınır:
      - Kalium-permanqanatın parçalanması:
        $$2KMnO_4 \xrightarrow{t} K_2MnO_4 + MnO_2 + O_2\uparrow$$
      - Hidrogen-peroksidin katalitik parçalanması ($MnO_2$ katalizator kimi):
        $$2H_2O_2 \xrightarrow{MnO_2} 2H_2O + O_2\uparrow$$
      - Kalium-xloratın (Bertolet duzu) parçalanması:
        $$2KClO_3 \xrightarrow{MnO_2, t} 2KCl + 3O_2\uparrow$$
    * **Sənayedə:** Maye havanın fraksiyalı distilləsindən və suyun elektrolizindən alınır:
      $$2H_2O \xrightarrow{\text{cərəyan}} 2H_2\uparrow + O_2\uparrow$$

    #### 3. Allatropiya — Ozon ($O_3$)
    * **Allatropiya:** Eyni kimyəvi elementin bir neçə müxtəlif bəsit maddə əmələ gətirməsi hadisəsidir.
    * Oksigenin iki allatropik şəkildəyişməsi var: **Oksigen ($O_2$)** və **Ozon ($O_3$)**.
    * Ozon şimşək çaxdıqda və ultrabənövşəyi şüaların təsiri ilə yaranır ($3O_2 \xrightarrow{h\nu} 2O_3$). Yer kürəsini zərərli kosmik UB şüalardan qoruyan ozon təbəqəsi yaradır.

    #### 4. Havanın Tərkibi və Yanma
    Hava qazlar qarışığıdır: Həcmcə təxminən **$78\%$ Azot ($N_2$)**, **$21\%$ Oksigen ($O_2$)**, **$0.93\%$ Arqon**, **$0.04\%$ Karbon qazı ($CO_2$)** və su buxarı.
    * **Yanma:** İşıq və istilik ayrılması ilə gedən sürətli oksidləşmə prosesidir. Yanğını söndürmək üçün oksigenin daxil olmasının qarşısı alınmalı və ya temperatur alışma nöqtəsindən aşağı salınmalıdır.
        `,
        keyFormulas: [
          {
                "formula": "\\varphi(O_2) = \\frac{V(O_2)}{V_{\\text{hava}}} \\approx 21\\%",
                "name": "Oksigenin havadakı həcm payı",
                "desc": "Havanın həcmcə 21%-ni oksigen təşkil edir"
          },
          {
                "formula": "3O_2 \\rightleftharpoons 2O_3",
                "name": "Ozonun əmələ gəlməsi",
                "desc": "Oksigenin ozona çevrilmə reaksiyası"
          }
    ],
        glossary: [
          {
                "term": "Allatropiya",
                "definition": "Eyni kimyəvi elementin fərqli bəsit maddələr əmələ gətirməsi hadisəsi."
          },
          {
                "term": "Katalizator",
                "definition": "Kimyəvi reaksiyanı sürətləndirən, lakin prosesin sonunda sərf olunmayan maddə."
          },
          {
                "term": "Oksid",
                "definition": "İki elementdən ibarət olub, biri oksigen olan mürəkkəb maddə."
          }
    ],
        solvedExamples: [
          {
                "problem": "100 litr havada neçə litr oksigen və neçə litr azot qazı vardır?",
                "solution": "Havanın tərkibində təxminən 21% O₂ və 78% N₂ vardır. Deməli, 100 litr havada: V(O₂) = 100 × 0.21 = 21 litr, V(N₂) = 100 × 0.78 = 78 litr olar."
          }
    ],
        miniQuiz: [
          {
                "q": "Laboratoriyada hidrogen-peroksiddən oksigen alarkən prosesi sürətləndirmək üçün hansı maddə əlavə edilir?",
                "options": [
                      "MnO₂ (katalizator)",
                      "NaCl",
                      "Təbaşir",
                      "Kükürd"
                ],
                "a": 0,
                "exp": "Manqan(IV) oksid (MnO₂) reaksiyanı sürətləndirən katalizatordur."
          },
          {
                "q": "Ozon molekulu neçə oksigen atomundan ibarətdir?",
                "options": [
                      "1",
                      "2",
                      "3",
                      "4"
                ],
                "a": 2,
                "exp": "Ozon molekulunun kimyəvi formulu O₃-dür (3 atomdan ibarətdir)."
          }
    ]
      },

  {
        id: 'kimya-7-5',
        subjectId: 'kimya',
        grade: 7,
        unit: 'Bölmə 5: Hidrogen. Su və Məhlullar',
        unitOrder: 5,
        title: 'Hidrogen, suyun xassələri və məhlulda maddənin kütlə payı',
        order: 5,
        readTimeMinutes: 16,
        difficulty: 2,
        summary: 'Hidrogen qazının alınması və xassələri, suyun təbiətdə rolu, doymuş və doymamış məhlullar, kütlə payı (faizli qatılıq) düsturları.',
        theoryMarkdown: `
    ### Hidrogen, Su və Məhlullar

    #### 1. Hidrogen ($H_2$)
    Kainatda ən çox yayılmış elementdir (ulduzların və Günəşin əsas kütləsini təşkil edir).
    * **Fiziki xassələri:** Ən yüngül qazdır ($M_r(H_2)=2$), rəngsiz, iysiz, suda pis həll olur.
    * **Laboratoriyada alınması:** Metalların (sink, dəmir) durulaşdırılmış turşularla qarşılıqlı təsirindən (Kipp aparatında):
      $$Zn + 2HCl \rightarrow ZnCl_2 + H_2\uparrow$$
    * **Kimyəvi xassələri:** Oksigendə yanaraq su əmələ gətirir ($2H_2 + O_2 \rightarrow 2H_2O$), güclü reduksiyaedicidir (metal oksidlərdən metalları reduksiya edir: $CuO + H_2 \xrightarrow{t} Cu + H_2O$). $2:1$ həcm nisbətində $H_2$ və $O_2$ qarışığı **partlayıcı qaz** adlanır.

    #### 2. Su ($H_2O$)
    Həyatın əsası olan universal həlledicidir. Hidrogen rabitələri sayəsində anomallıqlara malikdir: ən böyük sıxlığı $+4^\circ C$-dədir ($\rho = 1 \text{ q/sm}^3$), donarkən həcmi genişlənir (buz suda üzür).

    #### 3. Məhlullar və Həllolma
    * **Məhlul:** Həlledici, həllolan maddə və onların qarşılıqlı təsir məhsullarından ibarət dəyişən tərkibli bircinsli sistemdir.
    * **Həllolma qabiliyyətinə görə:**
      - *Doymuş məhlul:* Verilmiş temperaturda həmin maddənin daha həll ola bilmədiyi məhlul.
      - *Doymamış məhlul:* Verilmiş temperaturda maddənin əlavə miqdarının həll ola bildiyi məhlul.
    * **Həllolma əmsalı ($k_h$):** $1000$ ml (və ya $1$ litr) suda verilmiş temperaturda həll ola bilən maddənin maksimal qram miqdarıdır.

    #### 4. Həllolan Maddənin Kütlə Payı (Faizli Qatılıq)
    Məhlulun ümumi kütləsi həllolan maddə ilə həlledicinin (suyun) kütlələri cəmidir:
    $$m_{\text{məhlul}} = m_{\text{maddə}} + m_{\text{su}}$$
    Kütlə payı ($\omega$):
    $$\omega = \frac{m_{\text{maddə}}}{m_{\text{məhlul}}} \times 100\%$$
        `,
        keyFormulas: [
          {
                "formula": "\\omega = \\frac{m_{\\text{maddə}}}{m_{\\text{məhlul}}} \\times 100\\%",
                "name": "Kütlə payı düsturu",
                "desc": "Həllolan maddənin kütləsinin məhlulun ümumi kütləsinə nisbəti"
          },
          {
                "formula": "m_{\\text{məhlul}} = m_{\\text{maddə}} + m_{\\text{həlledici}}",
                "name": "Məhlulun kütləsi",
                "desc": "Həllolan maddə və suyun kütlələri cəmi"
          },
          {
                "formula": "k_h = \\frac{m_{\\text{maddə}}}{m_{\\text{su}}} \\times 1000",
                "name": "Həllolma əmsalı",
                "desc": "1000 q suda doymuş məhlul üçün həll olan maddənin kütləsi (q/l)"
          }
    ],
        glossary: [
          {
                "term": "Partlayıcı qaz",
                "definition": "2 həcm hidrogen və 1 həcm oksigendən ibarət güclü partlayış törədən qarışıq."
          },
          {
                "term": "Kütlə payı (ω)",
                "definition": "Maddə kütləsinin ümumi sistem kütləsinə nisbəti ilə ifadə olunan qatılıq vahidi."
          },
          {
                "term": "Doymuş məhlul",
                "definition": "Müəyyən temperaturda maddənin həllolma həddinə çatmış məhlulu."
          }
    ],
        solvedExamples: [
          {
                "problem": "40 qram xörək duzunu 160 qram suda həll etdilər. Alınan məhlulda duzun kütlə payını (%) tapın.",
                "solution": "1) Məhlulun ümumi kütləsi: m(məhlul) = 40 + 160 = 200 qram. 2) Kütlə payı: ω = (40 / 200) × 100% = 0.2 × 100% = 20%."
          }
    ],
        miniQuiz: [
          {
                "q": "Laboratoriyada hidrogen qazı hansı reaksiyadan alınır?",
                "options": [
                      "Zn + 2HCl → ZnCl₂ + H₂↑",
                      "CaCO₃ → CaO + CO₂↑",
                      "2KClO₃ → 2KCl + 3O₂↑",
                      "2H₂O₂ → 2H₂O + O₂↑"
                ],
                "a": 0,
                "exp": "Sinkin xlorid turşusu ilə qarşılıqlı təsirindən hidrogen qazı ayrılır."
          },
          {
                "q": "200 qram 10%-li duz məhlulunda neçə qram duz vardır?",
                "options": [
                      "10 q",
                      "20 q",
                      "30 q",
                      "40 q"
                ],
                "a": 1,
                "exp": "m(duz) = m(məhlul) × ω = 200 × 0.10 = 20 qram."
          }
    ]
      },

  {
        id: 'kimya-8-1',
        subjectId: 'kimya',
        grade: 8,
        unit: 'Bölmə 1: Qeyri-üzvi Birləşmələrin Mühüm Sinifləri',
        unitOrder: 1,
        title: 'Oksidlər, əsaslar, turşular və duzlar. Genetik əlaqə',
        order: 1,
        readTimeMinutes: 18,
        difficulty: 2,
        summary: 'Qeyri-üzvi maddələrin təsnifatı: əsasi, turşu və amfoter oksidlər, qələvilər, oksigenli/oksigensiz turşular, duzlar və aralarındakı genetik əlaqə.',
        theoryMarkdown: `
    ### Qeyri-üzvi Birləşmələrin Dörd Əsas Sinfi

    #### 1. Oksidlər
    Biri oksigen olmaqla iki elementdən ibarət mürəkkəb maddələrdir ($E_x O_y$).
    * **Əsasi oksidlər:** Metalların aşağı oksidləşmə dərəcəli (+1, +2) oksidləridir ($Na_2O, CaO, FeO$). Turşularla reaksiyaya girib duz və su əmələ gətirirlər:
      $$CaO + 2HCl \rightarrow CaCl_2 + H_2O$$
    * **Turşu oksidləri:** Qeyri-metalların və metalların yüksək oksidləşmə dərəcəli (+5, +6, +7) oksidləridir ($SO_2, SO_3, CO_2, P_2O_5, Mn_2O_7$). Əsaslarla reaksiyaya girib duz və su əmələ gətirirlər:
      $$CO_2 + 2NaOH \rightarrow Na_2CO_3 + H_2O$$
    * **Amfoter oksidlər:** Həm turşularla, həm də əsaslarla qarşılıqlı təsirdə olub duz əmələ gətirən oksidlərdir ($ZnO, Al_2O_3, BeO, Cr_2O_3$).
    * **Duzəmələgətirməyən oksidlər:** Nə turşularla, nə də qələvilərlə duz əmələ gətirmir ($CO, NO, N_2O, SiO$).

    #### 2. Əsaslar (Hidroksidlər)
    Tərkibi metal atomundan və bir və ya bir neçə hidroksid ($OH^-$) qrupundan ibarət maddələrdir ($M(OH)_n$).
    * **Suda həll olan əsaslar (Qələvilər):** I və II əsas yarımqrup metallarının hidroksidləridir ($LiOH, NaOH, KOH, Ca(OH)_2, Ba(OH)_2$).
    * **Suda həll olmayan əsaslar:** $Cu(OH)_2, Fe(OH)_2, Fe(OH)_3$. Qızdırıldıqda parçalanırlar:
      $$Cu(OH)_2 \xrightarrow{t} CuO + H_2O$$

    #### 3. Turşular
    Tərkibində metal ilə əvəz oluna bilən hidrogen atomlarından və turşu qalığından ibarət mürəkkəb maddələrdir ($H_n Ac$).
    * **Tərkibinə görə:**
      - Oksigensiz turşular: $HCl, HBr, HI, H_2S$.
      - Oksigenli turşular: $HNO_3, H_2SO_4, H_2CO_3, H_3PO_4$.
    * **Əsaslığına görə:** Birəsaslı ($HCl, HNO_3$), ikiəsaslı ($H_2SO_4, H_2S$), üçəsaslı ($H_3PO_4$).

    #### 4. Duzlar
    Metal atomundan və turşu qalığından ibarət mürəkkəb maddələrdir.
    * **Normal duzlar:** Turşudakı bütün hidrogen atomları metalla tam əvəz olunub ($NaCl, CaCO_3, K_2SO_4$).
    * **Turş duzlar:** Turşu qalığında hidrogen atomu qalmışdır ($NaHCO_3, NaH_2PO_4$).
    * **Əsasi duzlar:** Tərkibində hidroksid qrupu qalmışdır ($(CuOH)_2CO_3, MgOHCl$).

    #### 5. Genetik Əlaqə
    $$Metal \rightarrow Əsasi\ oksid \rightarrow Əsas \rightarrow Duz$$
    $$Qeyri-metal \rightarrow Turşu\ oksidi \rightarrow Turşu \rightarrow Duz$$
        `,
        keyFormulas: [
          {
                "formula": "\\text{Əsas} + \\text{Turşu} \\rightarrow \\text{Duz} + \\text{Su}",
                "name": "Neytrallaşma reaksiyası",
                "desc": "Hidroksid və turşunun qarşılıqlı təsirindən duz və suyun yaranması"
          },
          {
                "formula": "\\text{Əsasi oksid} + \\text{Turşu} \\rightarrow \\text{Duz} + \\text{Su}",
                "name": "Əsasi oksidin reaksiyası",
                "desc": "Metal oksidlərinin turşularla duz əmələ gətirməsi"
          }
    ],
        glossary: [
          {
                "term": "Qələvi",
                "definition": "Suda yaxşı həll olan qüvvətli əsas (məsələn, NaOH, KOH, Ca(OH)₂)."
          },
          {
                "term": "Amfoterlik",
                "definition": "Maddənin şəraitdən asılı olaraq həm turşu, həm də əsasi xassə göstərməsi."
          },
          {
                "term": "Neytrallaşma",
                "definition": "Turşu və əsas arasında gedib duz və su əmələ gətirən reaksiya."
          }
    ],
        solvedExamples: [
          {
                "problem": "Kalsium-oksidin xlorid turşusu ilə reaksiyasının tənliyini yazın və əmsallaşdırın.",
                "solution": "CaO əsasi oksid, HCl turşudur. Reaksiya nəticəsində kalsium-xlorid duzu və su alınır: CaO + 2HCl → CaCl₂ + H₂O."
          }
    ],
        miniQuiz: [
          {
                "q": "Aşağıdakılardan hansı amfoter oksiddir?",
                "options": [
                      "CaO",
                      "SO₃",
                      "ZnO",
                      "Na₂O"
                ],
                "a": 2,
                "exp": "Sink oksid (ZnO) həm turşularla, həm də qələvilərlə reaksiyaya girən amfoter oksiddir."
          },
          {
                "q": "Aşağıdakılardan hansı turş duzdur?",
                "options": [
                      "K₂SO₄",
                      "KHSO₄",
                      "Cu(OH)Cl",
                      "CaCl₂"
                ],
                "a": 1,
                "exp": "KHSO₄ tərkibində əvəz olunmamış H atomu saxladığı üçün turş duzdur."
          }
    ]
      },

  {
        id: 'kimya-8-2',
        subjectId: 'kimya',
        grade: 8,
        unit: 'Bölmə 2: Kimyəvi Reaksiyaların Təsnifatı, Sürəti və Kimyəvi Tarazlıq',
        unitOrder: 2,
        title: 'Reaksiya tipləri, reaksiyanın sürəti və Le Şatelye prinsipi',
        order: 2,
        readTimeMinutes: 16,
        difficulty: 2,
        summary: 'Birləşmə, parçalanma, əvəzetmə və dəyişmə reaksiyaları, kimyəvi reaksiyanın sürəti düsturu, təsir edən amillər, kimyəvi tarazlıq və Le Şatelye.',
        theoryMarkdown: `
    ### Kimyəvi Kinetika və Tarazlıq

    #### 1. Reaksiyaların Başlanğıc və Son Maddələrin Sayına Görə Təsnifatı
    1. **Birləşmə reaksiyaları:** İki və ya daha çox maddədən bir mürəkkəb maddə alınır:
       $$2H_2 + O_2 \rightarrow 2H_2O, \quad CaO + H_2O \rightarrow Ca(OH)_2$$
    2. **Parçalanma reaksiyaları:** Bir mürəkkəb maddədən bir neçə yeni maddə yaranır:
       $$2KMnO_4 \xrightarrow{t} K_2MnO_4 + MnO_2 + O_2$$
    3. **Əvəzetmə reaksiyaları:** Bəsit maddənin atomları mürəkkəb maddənin bir atomunu əvəz edir:
       $$Fe + CuSO_4 \rightarrow FeSO_4 + Cu$$
    4. **Dəyişmə (Mübadilə) reaksiyaları:** İki mürəkkəb maddə öz tərkib hissələrini dəyişir:
       $$AgNO_3 + NaCl \rightarrow AgCl\downarrow + NaNO_3$$

    #### 2. Kimyəvi Reaksiyanın Sürəti
    Homogen reaksiyanın sürəti — vahid zamanda reaksiyaya daxil olan və ya alınan maddələrdən birinin qatılığının dəyişməsidir:
    $$v = \pm \frac{\Delta c}{\Delta t} = \pm \frac{c_2 - c_1}{t_2 - t_1} \quad \left(\frac{\text{mol}}{\text{l} \cdot \text{san}}\right)$$
    * **Reaksiyanın sürətinə təsir edən amillər:**
      1. *Maddələrin təbiəti:* Aktiv metallar və turşular daha sürətlə reaksiyaya girir.
      2. *Qatılıq:* Başlanğıc maddələrin qatılığı artdıqda toqquşmaların sayı artır, sürət yüksəlir ($v = k \cdot [A]^a [B]^b$).
      3. *Temperatur (Vant-Hoff qaydası):* Temperaturu hər $10^\circ C$ artırdıqda reaksiyanın sürəti 2-4 dəfə artır:
         $$v_2 = v_1 \cdot \gamma^{\frac{T_2 - T_1}{10}}$$
      4. *Katalizator:* Aktivləşmə enerjisini azaldaraq reaksiyanı sürətləndirir.
      5. *Toxunma səthi:* Bərk maddələr xırdalandıqda reaksiya sürətlənir.

    #### 3. Kimyəvi Tarazlıq və Le Şatelye Prinsipi
    Düzünə və əksinə reaksiyaların sürətləri bərabərləşdikdə ($v_{\text{düz}} = v_{\text{əks}}$) **kimyəvi tarazlıq** yaranır.
    > **Le Şatelye prinsipi:** Tarazlıqda olan sistemə xaricdən hər hansı təsir göstərildikdə (qatılıq, temperatur, təzyiq), tarazlıq həmin təsiri zəiflədən istiqamətə yönəlir:
    - *Temperatur artırıldıqda:* Tarazlıq endotermik ($-Q$) istiqamətə yerini dəyişir.
    - *Təzyiq artırıldıqda:* Tarazlıq qaz molekullarının sayının (həcmin) azalması istiqamətinə yönəlir.
    - *Qatılıq artırıldıqda:* Həmin maddənin sərf olunduğu tərəfə yönəlir.
        `,
        keyFormulas: [
          {
                "formula": "v = \\pm \\frac{\\Delta c}{\\Delta t}",
                "name": "Reaksiya sürəti",
                "desc": "Vahid zamanda qatılığın dəyişməsi (mol/(l·san))"
          },
          {
                "formula": "v_2 = v_1 \\cdot \\gamma^{\\frac{T_2 - T_1}{10}}",
                "name": "Vant-Hoff qaydası",
                "desc": "Temperaturun reaksiya sürətinə təsiri, γ temperatur əmsalıdır (2-4)"
          }
    ],
        glossary: [
          {
                "term": "Kimyəvi tarazlıq",
                "definition": "Düzünə və əksinə gedən reaksiyaların sürətlərinin bərabərləşdiyi dinamik hal."
          },
          {
                "term": "Le Şatelye prinsipi",
                "definition": "Xarici təsir zamanı tarazlığın bu təsiri kompensasiya edən tərəfə yönəlməsi qanunauyğunluğu."
          }
    ],
        solvedExamples: [
          {
                "problem": "$N_2(q) + 3H_2(q) \\rightleftharpoons 2NH_3(q) + Q$ reaksiyasında tarazlığı ammonyakın alınması (sağa) istiqamətinə yönəltmək üçün təzyiqi və temperaturu necə dəyişmək lazımdır?",
                "solution": "1) Solda 1+3=4 mol qaz, sağda 2 mol qaz var. Təzyiqi artırdıqda tarazlıq həcmin azaldığı tərəfə (sağa, NH₃ tərəfə) yönəlir. 2) Reaksiya ekzotermikdir (+Q). Temperaturu azaltdıqda tarazlıq istilik ayrılan tərəfə (sağa) yönəlir. Cavab: Təzyiqi artırmaq və temperaturu azaltmaq lazımdır."
          }
    ],
        miniQuiz: [
          {
                "q": "Reaksiyanın temperatur əmsalı γ = 2 olarsa, temperaturu 20°C-dən 40°C-yə qaldırdıqda sürət neçə dəfə artar?",
                "options": [
                      "2 dəfə",
                      "4 dəfə",
                      "8 dəfə",
                      "16 dəfə"
                ],
                "a": 1,
                "exp": "v₂/v₁ = 2^((40-20)/10) = 2² = 4 dəfə artar."
          },
          {
                "q": "Fe + CuSO₄ → FeSO₄ + Cu reaksiyası hansı reaksiya tipinə aiddir?",
                "options": [
                      "Birləşmə",
                      "Parçalanma",
                      "Əvəzetmə",
                      "Dəyişmə"
                ],
                "a": 2,
                "exp": "Bəsit maddə (Fe) mürəkkəb maddədəki mis atomunu əvəz etdiyi üçün əvəzetmə reaksiyasıdır."
          }
    ]
      },

  {
        id: 'kimya-8-3',
        subjectId: 'kimya',
        grade: 8,
        unit: 'Bölmə 3: Dövri Qanun, Dövri Sistem və Atomun Quruluşu',
        unitOrder: 3,
        title: 'Dövri sistem, atom nüvəsi və elektron təbəqələri',
        order: 3,
        readTimeMinutes: 18,
        difficulty: 3,
        summary: 'Mendeleyevin dövri qanunu, müasir dövri cədvəl (dövrlər və qruplar), atomun planetar modeli, proton, neytron, elektron və elektron konfiqurasiyası.',
        theoryMarkdown: `
    ### Atomun Quruluşu və Dövri Qanun

    #### 1. Atomun Tərkibi
    Atom müsbət yüklü nüvədən və onun ətrafında hərəkət edən mənfi yüklü elektronlardan ibarət elektroneytral sistemdir.
    * **Nüvə:** Proton ($p^+$) və neytronlardan ($n^0$) ibarətdir. Bunlar birlikdə **nuklonlar** adlanır.
    * **Kütlə ədədi ($A$):** $A = Z + N$ (burada $Z$ — protonların sayı / sıra nömrəsi, $N$ — neytronların sayıdır).
    * **İzotoplar:** Nüvələrində eyni sayda proton, lakin müxtəlif sayda neytron olan eyni kimyəvi element atomlarıdır (məsələn: Hidrogenin izotopları: Protium $^1H$, Deyterium $^2H$ və Tritium $^3H$).

    #### 2. Elektron Təbəqələrinin Quruluşu
    Elektronlar nüvə ətrafında energetik səviyyələrdə (təbəqələrdə) yerləşir ($n = 1, 2, 3, 4...$).
    * Hər bir təbəqədəki maksimal elektron sayı: $N_{\max} = 2n^2$.
      - 1-ci səviyyə ($n=1$): maksimum $2 \times 1^2 = 2$ elektron ($1s^2$).
      - 2-ci səviyyə ($n=2$): maksimum $2 \times 2^2 = 8$ elektron ($2s^2 2p^6$).
      - 3-cü səviyyə ($n=3$): maksimum $2 \times 3^2 = 18$ elektron ($3s^2 3p^6 3d^{10}$).
    * **Orbitalların forması:** $s$-orbital kürəvi, $p$-orbital qantelvari formadadır.

    #### 3. Dövri Qanun və Dövri Sistem
    > **D.İ.Mendeleyev (1869):** Bəsit maddələrin, eləcə də elementlərin birləşmələrinin forma və xassələri elementlərin atom çəkilərindən (müasir tərifdə: **nüvələrinin yükündən - sıra nömrəsindən**) dövri surətdə asılıdır.
    * **Dövrlər:** Atomlarının elektron təbəqələrinin sayı eyni olan elementlərin üfüqi sırasıdır (cəmi 7 dövr var: 1, 2, 3 — kiçik dövrlər; 4, 5, 6, 7 — böyük dövrlər).
    * **Qruplar:** Xarici energetik səviyyəsindəki valent elektronlarının sayı eyni olan elementlərin şaquli sütunudur (8 qrup var, hər biri əsas (A) və əlavə (B) yarımqruplara bölünür).
    * **Dövrlər üzrə soldan sağa getdikcə:** Nüvə yükü artır, atom radiusu azalır, elektromənfilik və qeyri-metallıq xassələri artır, metallıq azalır.
    * **Əsas yarımqruplarda yuxarıdan aşağıya getdikcə:** Təbəqə sayı artır, atom radiusu böyüyür, metallıq xassələri artır, qeyri-metallıq azalır.
        `,
        keyFormulas: [
          {
                "formula": "A = Z + N",
                "name": "Kütlə ədədi",
                "desc": "Proton sayı (Z) ilə neytron sayının (N) cəmi"
          },
          {
                "formula": "N_{\\max} = 2n^2",
                "name": "Səviyyədəki elektron sayı",
                "desc": "n nömrəli energetik səviyyədə ola biləcək maksimal elektron sayı"
          }
    ],
        glossary: [
          {
                "term": "İzotop",
                "definition": "Proton sayı eyni, lakin neytron və kütlə ədədləri fərqli olan atomlar."
          },
          {
                "term": "Elektromənfilik",
                "definition": "Atomun kimyəvi rabitə əmələ gətirən ortaq elektron cütünü özünə cəzbetmə qabiliyyəti."
          },
          {
                "term": "Dövr",
                "definition": "Eyni sayda elektron təbəqəsinə malik elementlərin üfüqi ardıcıllığı."
          }
    ],
        solvedExamples: [
          {
                "problem": "$_{11}^{23}Na$ natrium atomunun tərkibindəki proton, neytron və elektronların sayını və elektron formulunu müəyyən edin.",
                "solution": "Sıra nömrəsi Z = 11, deməli: Proton sayı = 11, Elektron sayı = 11. Neytron sayı: N = A - Z = 23 - 11 = 12. Elektron formulu: 1s² 2s² 2p⁶ 3s¹ (3-cü dövr, IA yarımqrupu)."
          }
    ],
        miniQuiz: [
          {
                "q": "3-cü energetik səviyyədə (n=3) maksimum neçə elektron yerləşə bilər?",
                "options": [
                      "8",
                      "18",
                      "32",
                      "2"
                ],
                "a": 1,
                "exp": "N_max = 2n² = 2 × 3² = 18 elektron."
          },
          {
                "q": "Dövri sistemdə soldan sağa getdikcə atom radiusu və elektromənfilik necə dəyişir?",
                "options": [
                      "Radius artır, elektromənfilik azalır",
                      "Radius azalır, elektromənfilik artır",
                      "Hər ikisi artır",
                      "Hər ikisi azalır"
                ],
                "a": 1,
                "exp": "Nüvənin cəzbetməsi gücləndiyi üçün radius kiçilir, elektronu cəzbetmə (elektromənfilik) isə artır."
          }
    ]
      },

  {
        id: 'kimya-8-4',
        subjectId: 'kimya',
        grade: 8,
        unit: 'Bölmə 4: Kimyəvi Rabitə və Maddənin Quruluşu',
        unitOrder: 4,
        title: 'Kovalent, ion, metal və hidrogen rabitələri. Kristal qəfəslər',
        order: 4,
        readTimeMinutes: 16,
        difficulty: 2,
        summary: 'Kimyəvi rabitənin təbiəti, kovalent (polyar və qeyri-polyar), ion və hidrogen rabitələri, kristal qəfəslərin dörd növü və maddələrin fiziki xassələri.',
        theoryMarkdown: `
    ### Kimyəvi Rabitə və Kristal Qəfəslər

    #### 1. Kimyəvi Rabitə Növləri
    Atomlar oktet və ya duet qaydasına (xarici təbəqədə 8 və ya 2 elektron) nail olaraq daha davamlı hala keçmək üçün kimyəvi rabitə əmələ gətirir.

    1. **Kovalent Rabitə:** Qeyri-metal atomları arasında ortaq elektron cütləri hesabına yaranan rabitədir:
       - *Qeyri-polyar kovalent rabitə:* Eyni növ qeyri-metal atomları arasında yaranır, elektron buludu simmetrik paylanır ($H_2, O_2, N_2, Cl_2$).
       - *Polyar kovalent rabitə:* Elektromənfilikləri fərqli olan müxtəlif növ qeyri-metalların atomları arasında yaranır, elektron cütü daha elektromənfi atoma doğru meyil edir ($HCl, H_2O, NH_3, CH_4$).
    2. **İon Rabitəsi:** Elektromənfilikləri kəskin fərqlənən tipik metallar ilə tipik qeyri-metallar arasında elektronun bir atomdan digərinə keçməsi və əks yüklü ionların elektrostatik cəzbi nəticəsində yaranır ($Na^+ Cl^-, Ca^{2+} O^{2-}, K^+ F^-$).
    3. **Metal Rabitəsi:** Metal atomları, kationları və sərbəst hərəkət edən "elektron qazı" arasındakı elektrostatik cəzb hesabına yaranan rabitədir. Bütün bəsit metallara və ərintilərə xasdır.
    4. **Hidrogen Rabitəsi:** Bir molekulun qismən müsbət yüklü hidrogen atomu ilə digər molekulun yüksək elektromənfiliyə malik atomu ($F, O, N$) arasında yaranan molekullararası rabitədir ($H_2O, HF, NH_3$, spirtlər).

    #### 2. Kristal Qəfəslərin Növləri
    * **İon kristal qəfəsi:** Düyünlərində kation və anionlar yerləşir ($NaCl, KNO_3$). Xassələri: Yüksək ərimə temperaturu, bərklik, kövrəklik, suda məhlulları və ərintiləri cərəyanı keçirir.
    * **Atom kristal qəfəsi:** Düyünlərində kovalent rabitə ilə birləşmiş ayrı-ayrı atomlar yerləşir (Almaz, qrafit, silisium, kvars $SiO_2$). Xassələri: Çox yüksək bərklik və ərimə temperaturu, suda həll olmurlar.
    * **Molekul kristal qəfəsi:** Düyünlərində zəif qüvvələrlə əlaqələnmiş molekullar yerləşir ($H_2O$ buzu, quru buz $CO_2$, $I_2$, şəkər, oksigen). Xassələri: Aşağı ərimə temperaturu, uçuculuq, asan ərimə.
    * **Metal kristal qəfəsi:** Düyünlərdə metal ionları yerləşir. Xassələri: Yüksək istilik və elektrik keçiriciliyi, metal parıltısı, plastiklik.
        `,
        keyFormulas: [
          {
                "formula": "\\Delta \\chi = |\\chi_A - \\chi_B|",
                "name": "Elektromənfilik fərqi",
                "desc": "Δχ = 0 olarsa qeyri-polyar, 0 < Δχ < 2 olarsa polyar kovalent, Δχ > 2 olarsa ion rabitəsi yaranır"
          }
    ],
        glossary: [
          {
                "term": "Kovalent rabitə",
                "definition": "Ortaq elektron cütlərinin yaranması hesabına baş verən rabitə."
          },
          {
                "term": "İon rabitəsi",
                "definition": "Əks işarəli ionların elektrostatik qarşılıqlı cəzbi nəticəsində yaranan rabitə."
          },
          {
                "term": "Molekul kristal qəfəsi",
                "definition": "Düyünlərində fərdi molekullar yerləşən, asan əriyən və uçucu qəfəs növü."
          }
    ],
        solvedExamples: [
          {
                "problem": "$O_2, H_2O, KCl, Fe$ maddələrində kimyəvi rabitənin növünü müəyyən edin.",
                "solution": "1) O₂: eyni qeyri-metallardır -> Qeyri-polyar kovalent. 2) H₂O: müxtəlif qeyri-metallardır -> Polyar kovalent. 3) KCl: tipik metal (K) və tipik qeyri-metal (Cl) -> İon rabitəsi. 4) Fe: bəsit metal -> Metal rabitəsi."
          }
    ],
        miniQuiz: [
          {
                "q": "Almaz hansı növ kristal qəfəsə malikdir və bu ona hansı xassəni verir?",
                "options": [
                      "Molekul — uçuculuq",
                      "Atom — müstəsna bərklik",
                      "İon — kövrəklik",
                      "Metal — yüksək plastiklik"
                ],
                "a": 1,
                "exp": "Almaz atom kristal qəfəsinə malikdir və güclü kovalent rabitələrə görə təbiətdə ən bərk maddədir."
          },
          {
                "q": "Aşağıdakı molekulların hansında hidrogen rabitəsi mövcuddur?",
                "options": [
                      "CH₄",
                      "H₂O",
                      "H₂",
                      "NaCl"
                ],
                "a": 1,
                "exp": "Su molekulları arasında güclü molekullararası hidrogen rabitəsi yaranır."
          }
    ]
      },

  {
        id: 'kimya-8-5',
        subjectId: 'kimya',
        grade: 8,
        unit: 'Bölmə 5: Oksidləşmə-Reduksiya Reaksiyaları (ORR)',
        unitOrder: 5,
        title: 'Oksidləşmə dərəcəsi və elektron balans üsulu',
        order: 5,
        readTimeMinutes: 17,
        difficulty: 3,
        summary: 'Oksidləşmə dərəcəsinin təyini, oksidləşdirici və reduksiyaedici anlayışları, elektron balans metodu ilə kimyəvi reaksiyaların əmsallaşdırılması.',
        theoryMarkdown: `
    ### Oksidləşmə-Reduksiya Reaksiyaları (ORR)

    #### 1. Oksidləşmə Dərəcəsi
    Oksidləşmə dərəcəsi — kovalent polyar və ya ion birləşməsində elektronların daha elektromənfi atoma tam keçdiyi fərz edildikdə atomun qazandığı şərti yükdür.
    * **Əsas qaydalar:**
      1. Bəsit maddələrdə atomların oksidləşmə dərəcəsi həmişə **0**-dır ($H_2^0, O_2^0, Fe^0$).
      2. Birləşmələrdə flüor həmişə **$-1$**, oksigen əksər hallarda **$-2$** (peroksidlərdə $H_2O_2$ **$-1$**, $OF_2$-də **$+2$**), hidrogen qeyri-metallarla **$+1$**, aktiv metallarla hidridlərdə ($NaH, CaH_2$) **$-1$** olur.
      3. Qələvi metallar həmişə **$+1$**, qələvi-torpaq metallar **$+2$**, alüminium **$+3$** göstərir.
      4. Birləşmədə bütün atomların oksidləşmə dərəcələrinin cəbri cəmi **0**-a bərabərdir. Məsələn: $KMn^{+7}O_4^{-2}$: $+1 + x + 4(-2) = 0 \Rightarrow x = +7$.

    #### 2. Oksidləşdirici və Reduksiyaedici
    * **Oksidləşdirici:** Elektron qəbul edən atom, molekul və ya iondur. Proses zamanı oksidləşmə dərəcəsi **azalır** (reduksiya olunur):
      $$S^0 + 2e^- \rightarrow S^{-2} \quad (\text{reduksiya prosesi})$$
    * **Reduksiyaedici:** Elektron verən atom, molekul və ya iondur. Proses zamanı oksidləşmə dərəcəsi **artır** (oksidləşir):
      $$Fe^0 - 2e^- \rightarrow Fe^{+2} \quad (\text{oksidləşmə prosesi})$$

    #### 3. Elektron Balans Metodu ilə Əmsallaşdırma
    Verilən və alınan elektronların sayı bir-birinə bərabər olmalıdır.
    * *Nümunə reaksiya:*
      $$Cu^0 + HN^{+5}O_3(\text{qatı}) \rightarrow Cu^{+2}(NO_3)_2 + N^{+4}O_2\uparrow + H_2O$$
      1. Oksidləşmə dərəcəsi dəyişən elementlər: $Cu$ və $N$.
      2. Elektron tənlikləri:
         $$Cu^0 - 2e^- \rightarrow Cu^{+2} \quad \Big| \times 1 \quad (\text{reduksiyaedici})$$
         $$N^{+5} + 1e^- \rightarrow N^{+4} \quad \Big| \times 2 \quad (\text{oksidləşdirici})$$
      3. Əmsallar: $Cu$-nun qarşısına 1, $NO_2$-nin qarşısına 2 qoyuruq:
         $$Cu + 4HNO_3 \rightarrow Cu(NO_3)_2 + 2NO_2 + 2H_2O$$
        `,
        keyFormulas: [
          {
                "formula": "\\sum (Z_i \\cdot n_i) = 0",
                "name": "Birləşmədə yüklər balansı",
                "desc": "Birləşmədəki atomların oksidləşmə dərəcələrinin cəbri cəmi sıfırdır"
          },
          {
                "formula": "e_{\\text{verilən}} = e_{\\text{alınan}}",
                "name": "Elektron balans şərti",
                "desc": "Reduksiyaedicinin verdiyi elektron sayı oksidləşdiricinin aldığına bərabərdir"
          }
    ],
        glossary: [
          {
                "term": "Oksidləşdirici",
                "definition": "Elektron qəbul edərək oksidləşmə dərəcəsini azaldan maddə."
          },
          {
                "term": "Reduksiyaedici",
                "definition": "Elektron verərək oksidləşmə dərəcəsini artıran maddə."
          },
          {
                "term": "Reduksiya",
                "definition": "Elektron qəbul edilməsi prosesi."
          }
    ],
        solvedExamples: [
          {
                "problem": "$K_2Cr_2O_7$ birləşməsində xromun ($Cr$) oksidləşmə dərəcəsini tapın.",
                "solution": "K həmişə +1, O həmişə -2 oksidləşmə dərəcəsi göstərir. 2×(+1) + 2×(x) + 7×(-2) = 0 => 2 + 2x - 14 = 0 => 2x = 12 => x = +6. Xromun oksidləşmə dərəcəsi +6-dır."
          }
    ],
        miniQuiz: [
          {
                "q": "2Mg + O₂ → 2MgO reaksiyasında hansı maddə reduksiyaedicidir?",
                "options": [
                      "Mg",
                      "O₂",
                      "MgO",
                      "Heç biri"
                ],
                "a": 0,
                "exp": "Maqnezium atomu Mg⁰ halından Mg⁺² halına keçərək 2 elektron verir, yəni reduksiyaedicidir."
          },
          {
                "q": "H₂SO₄ molekulunda kükürdün (S) oksidləşmə dərəcəsi neçədir?",
                "options": [
                      "+2",
                      "+4",
                      "+6",
                      "-2"
                ],
                "a": 2,
                "exp": "2×(+1) + x + 4×(-2) = 0 => 2 + x - 8 = 0 => x = +6."
          }
    ]
      },

  {
        id: 'kimya-8-6',
        subjectId: 'kimya',
        grade: 8,
        unit: 'Bölmə 6: Elektrolitik Dissosiasiya və Məhlulda Reaksiyalar',
        unitOrder: 6,
        title: 'Elektrolitlər, ion mübadilə reaksiyaları və mühit (pH)',
        order: 6,
        readTimeMinutes: 17,
        difficulty: 3,
        summary: 'Suda məhlulda və ərintidə dissosiasiya nəzəriyyəsi (Arrenius), qüvvətli/zəif elektrolitlər, tam və qısa ion tənlikləri, suyun ion hasili və pH şkalası.',
        theoryMarkdown: `
    ### Elektrolitik Dissosiasiya

    #### 1. Elektrolitlər və Qeyri-elektrolitlər
    * **Elektrolitlər:** Suda məhlulları və ya ərintiləri elektrik cərəyanını keçirən maddələrdir (duzlar, turşular, qələvilər). İon və ya güclü polyar kovalent rabitəli maddələrdir.
    * **Qeyri-elektrolitlər:** Məhlulları və ərintiləri cərəyanı keçirməyən maddələrdir (şəkər, qlükoza, spirt, oksigen, azot). Qeyri-polyar və zəif polyar kovalent rabitəlidirlər.
    * **Dissosiasiya:** Elektrolitin suyun polyar molekullarının təsiri ilə ionlara parçalanması prosesidir (S.Arrenius).

    #### 2. Dissosiasiya Dərəcəsi ($lpha$)
    $$\alpha = \frac{N_{\text{ionlaşmış}}}{N_{\text{ümumi}}} \times 100\%$$
    * **Qüvvətli elektrolitlər ($lpha > 30\%$):** Məhlulda tamamilə ionlara ayrılır: Qələvilər ($NaOH, KOH, Ba(OH)_2$), qüvvətli turşular ($HCl, HBr, HI, HNO_3, H_2SO_4$) və bütün suda həll olan duzlar.
    * **Zəif elektrolitlər ($lpha < 3\%$):** Çox cüzi ionlaşır: $H_2O, H_2S, H_2CO_3, CH_3COOH, NH_4OH$.

    #### 3. İon Mübadilə Reaksiyaları
    Elektrolit məhlulları arasındakı reaksiyalar sonadək o zaman gedir ki:
    1. Çöküntü ($AgCl\downarrow, BaSO_4\downarrow, CaCO_3\downarrow$) alınsın.
    2. Qaz ($CO_2\uparrow, SO_2\uparrow, H_2S\uparrow$) ayrılsın.
    3. Az dissosiasiya edən maddə (su $H_2O$) yaransın.
    * *Molekulyar tənlik:* $AgNO_3 + NaCl \rightarrow AgCl\downarrow + NaNO_3$
    * *Tam ion tənliyi:* $Ag^+ + NO_3^- + Na^+ + Cl^- \rightarrow AgCl\downarrow + Na^+ + NO_3^-$
    * *Qısa ion tənliyi:* $Ag^+ + Cl^- \rightarrow AgCl\downarrow$

    #### 4. Mühit və pH Göstəricisi
    Təmiz suda: $[H^+] = [OH^-] = 10^{-7} \text{ mol/l}$ ($25^\circ C$-də).
    * **Neytral mühit:** $[H^+] = [OH^-] = 10^{-7} \Rightarrow \mathbf{pH = 7}$
    * **Turş mühit:** $[H^+] > [OH^-] \Rightarrow \mathbf{pH < 7}$ (lakmus qızarır, metiloranj çəhrayılaşır).
    * **Qələvi mühit:** $[H^+] < [OH^-] \Rightarrow \mathbf{pH > 7}$ (fenolftalein moruğu rəng alır, lakmus göyərir).
        `,
        keyFormulas: [
          {
                "formula": "\\alpha = \\frac{N_{\\text{dissosiasiya}}}{N_{\\text{ümumi}}}",
                "name": "Dissosiasiya dərəcəsi",
                "desc": "İonlara parçalanmış molekulların ümumi molekullara nisbəti"
          },
          {
                "formula": "\\text{pH} = -\\lg [H^+]",
                "name": "Hidrogen göstəricisi (pH)",
                "desc": "Mühitin turşuluq və ya qələviliyinin kəmiyyət ölçüsü (0-14 aralığında)"
          }
    ],
        glossary: [
          {
                "term": "Elektrolit",
                "definition": "Məhlulu və ya ərintisi sərbəst ionlar hesabına elektrik cərəyanını keçirən maddə."
          },
          {
                "term": "pH göstəricisi",
                "definition": "Məhlulda hidrogen ionlarının qatılığını xarakterizə edən loqarifmik şkala."
          },
          {
                "term": "İndikator",
                "definition": "Mühitin xarakterindən (turş, qələvi, neytral) asılı olaraq rəngini dəyişən maddə."
          }
    ],
        solvedExamples: [
          {
                "problem": "$BaCl_2 + Na_2SO_4 \\rightarrow BaSO_4\\downarrow + 2NaCl$ reaksiyasının qısa ion tənliyini yazın.",
                "solution": "Suda həll olan maddələri ionlara ayırırıq: Ba²⁺ + 2Cl⁻ + 2Na⁺ + SO₄²⁻ → BaSO₄↓ + 2Na⁺ + 2Cl⁻. Hər iki tərəfdə eyni olan 2Na⁺ və 2Cl⁻ ionlarını ixtisar etdikdə qısa ion tənliyi alınır: Ba²⁺ + SO₄²⁻ → BaSO₄↓."
          }
    ],
        miniQuiz: [
          {
                "q": "Qələvi mühitdə fenolftalein indikatoru hansı rəngə boyanır?",
                "options": [
                      "Sarı",
                      "Qırmızı / Moruğu",
                      "Mavi",
                      "Rəngsiz qalır"
                ],
                "a": 1,
                "exp": "Fenolftalein yalnız qələvi mühitdə (pH > 8.2) parlaq moruğu-qırmızı rəng alır."
          },
          {
                "q": "Aşağıdakı turşulardan hansı zəif elektrolitdir?",
                "options": [
                      "HCl",
                      "HNO₃",
                      "H₂SO₄",
                      "H₂CO₃"
                ],
                "a": 3,
                "exp": "Karbonat turşusu (H₂CO₃) davamsız və çox zəif elektrolitdir."
          }
    ]
      },

  {
        id: 'kimya-9-1',
        subjectId: 'kimya',
        grade: 9,
        unit: 'Bölmə 1: Qeyri-metalların Ümumi Xarakteristikası və Halogenlər',
        unitOrder: 1,
        title: 'VIIA qrupu halogenləri: Xlor, xlorid turşusu və duzları',
        order: 1,
        readTimeMinutes: 18,
        difficulty: 2,
        summary: 'Dövri sistemdə qeyri-metallar, VIIA qrupu (F, Cl, Br, I), xlorun laboratoriya və sənaye alınması, xassələri, HCl və Ag+ reaktivi.',
        theoryMarkdown: `
    ### Halogenlər (VIIA Qrup Elementləri)

    #### 1. Qeyri-metalların və Halogenlərin Ümumi Xassələri
    Dövri sistemdəki 118 elementdən cəmi 22-si qeyri-metaldır. Onlar yüksək elektromənfiliyə malikdirlər.
    * **VIIA qrupu (Halogenlər — "duz doğuranlar"):** Flüor ($F$), Xlor ($Cl$), Brom ($Br$), Yod ($I$), Astat ($At$).
    * **Xarici elektron konfiqurasiyası:** $ns^2 np^5$. Oktetə çatmaq üçün $1$ elektron çatışmır, birləşmələrdə əsasən $-1$ oksidləşmə dərəcəsi göstərirlər (Flüor həmişə $-1$, digərləri müsbət $+1, +3, +5, +7$ dərəcələri də göstərə bilir).
    * **Aqreqat halları ($F_2 \rightarrow I_2$):** Flüor — açıq sarı qaz; Xlor — sarımtıl-yaşıl boğucu qaz; Brom — tünd qırmızımtıl-qonur ağır maye; Yod — bənövşəyi parıltılı bərk kristal (qızdırıldıqda birbaşa buxarlanır — **süblimasiya**).

    #### 2. Xlor ($Cl_2$)
    * **Laboratoriyada alınması:** Qatı xlorid turşusunun güclü oksidləşdiricilərlə ($MnO_2, KMnO_4$) reaksiyasından:
      $$MnO_2 + 4HCl(\text{qatı}) \xrightarrow{t} MnCl_2 + Cl_2\uparrow + 2H_2O$$
      $$2KMnO_4 + 16HCl \rightarrow 2KCl + 2MnCl_2 + 5Cl_2\uparrow + 8H_2O$$
    * **Sənayedə alınması:** Xörək duzu məhlulunun ($NaCl$) elektrolizindən:
      $$2NaCl + 2H_2O \xrightarrow{\text{elektroliz}} 2NaOH + H_2\uparrow + Cl_2\uparrow$$
    * **Kimyəvi xassələri:** Güclü oksidləşdiricidir. Metallarla reaksiyaya girərək xloridlər əmələ gətirir ($2Fe + 3Cl_2 \xrightarrow{t} 2FeCl_3$).
    * **Xlorlu su:** Xlor suda həll olduqda xlorid və hipoxlorid turşuları yaranır:
      $$Cl_2 + H_2O \rightleftharpoons HCl + HClO$$
      $HClO$ parçalanaraq atomar oksigen ayırır, bu səbəbdən xlorlu su güclü ağardıcı və dezinfeksiyaedici təsirə malikdir.

    #### 3. Xlorid Turşusu ($HCl$) və Xlorid İonunun Təyini
    Xlorid turşusu — hidrogen-xlorid qazının suda məhluludur (təxminən $37\%$-li qatı məhlul tüstülənir).
    * **Keyfiyyət reaksiyası:** Xlorid ionu ($Cl^-$) gümüş kationu ($Ag^+$) ilə südlü-ağ rəngli, nitrat turşusunda həll olmayan çöküntü verir:
      $$AgNO_3 + HCl \rightarrow AgCl\downarrow (\text{ağ}) + HNO_3$$
        `,
        keyFormulas: [
          {
                "formula": "Ag^+ + Cl^- \\rightarrow AgCl\\downarrow (\\text{ağ çöküntü})",
                "name": "Xlorid ionunun təyini",
                "desc": "Ag⁺ ionu xlorid turşusu və duzlarının reaktivdir"
          },
          {
                "formula": "2NaCl + 2H_2O \\xrightarrow{\\text{el}} 2NaOH + H_2 + Cl_2",
                "name": "Xlorun sənaye alınması",
                "desc": "Natrium-xlorid məhlulunun elektrolizi"
          }
    ],
        glossary: [
          {
                "term": "Halogen",
                "definition": "VIIA qrupunda yerləşən duzəmələgətirən aktiv qeyri-metallar (F, Cl, Br, I)."
          },
          {
                "term": "Süblimasiya",
                "definition": "Bərk maddənin mayeləşmədən birbaşa qaz halına keçməsi hadisəsi (məsələn, yod)."
          }
    ],
        solvedExamples: [
          {
                "problem": "Dəmirin xlor qazı ilə reaksiyasından niyə FeCl₂ deyil, FeCl₃ alınır?",
                "solution": "Xlor çox güclü oksidləşdirici olduğu üçün dəmir atomunu birbaşa ən yüksək dayanıqlı oksidləşmə dərəcəsinə (+3) qədər oksidləşdirir: 2Fe + 3Cl₂ → 2FeCl₃."
          }
    ],
        miniQuiz: [
          {
                "q": "Xlorid ionunun (Cl⁻) məhlulda təyini üçün hansı reaktivdən istifadə edilir?",
                "options": [
                      "BaCl₂",
                      "AgNO₃",
                      "NaOH",
                      "H₂SO₄"
                ],
                "a": 1,
                "exp": "Ag⁺ ionu Cl⁻ ilə birləşərək suda həll olmayan ağ rəngli AgCl çöküntüsü verir."
          },
          {
                "q": "Halogenlərdən hansı otaq temperaturunda tünd qırmızı mayedir?",
                "options": [
                      "Flüor",
                      "Xlor",
                      "Brom",
                      "Yod"
                ],
                "a": 2,
                "exp": "Brom (Br₂) qeyri-metallar arasında otaq temperaturunda yeganə maye halda olan bəsit maddədir."
          }
    ]
      },

  {
        id: 'kimya-9-2',
        subjectId: 'kimya',
        grade: 9,
        unit: 'Bölmə 2: Oksigen Yarımqrupu Elementləri (Xalkogenlər) və Kükürd',
        unitOrder: 2,
        title: 'Kükürd, kükürd oksidlər, sulfat turşusu və duzları',
        order: 2,
        readTimeMinutes: 18,
        difficulty: 2,
        summary: 'VIA qrupu xalkogenləri, kükürdün allatropiyası, H2S, SO2, SO3, sulfat turşusunun (H2SO4) sənaye istehsalı, qatı sulfatın xassələri və Ba2+ təyini.',
        theoryMarkdown: `
    ### Kükürd və Sulfat Turşusu

    #### 1. VIA Qrup Elementləri və Kükürd ($S$)
    VIA qrupu xalkogenlər adlanır: Oksigen ($O$), Kükürd ($S$), Selen ($Se$), Tellur ($Te$), Polonium ($Po$). Xarici elektron formulu $ns^2 np^4$-dür.
    * **Kükürdün allatropiyası:**
      - Rombik kükürd ($S_8$, sarı kristallar, ən davamlı formadır).
      - Monoklinik kükürd (iynəvari kristallar).
      - Plastik kükürd (rezinəbənzər amorf kütlə).

    #### 2. Kükürdün Birləşmələri
    * **Hidrogen-sulfid ($H_2S$):** Çürük yumurta iyli, çox zəhərli qazdır. Suda məhlulu zəif sulfid turşusudur. $Pb^{2+}$ ionları ilə qara rəngli $PbS\downarrow$ çöküntüsü verir.
    * **Kükürd-dioksid ($SO_2$):** Kükürdün yanmasından alınır ($S + O_2 \rightarrow SO_2$), kəskin iyli qazdır. Ağardıcı və bakterisid təsirə malikdir.
    * **Kükürd-trioksid ($SO_3$):** Rəngsiz, asan donan mayedir ($T_{\text{ər}} = 17^\circ C$). Güclü turşu oksididir, su ilə reaksiyaya girdikdə sulfat turşusu əmələ gəlir.

    #### 3. Sulfat Turşusu ($H_2SO_4$) — Kimya Sənayesinin "Çörəyi"
    * **Əlaqə (kontakt) üsulu ilə istehsalı (3 mərhələ):**
      1. Piritin ($FeS_2$) yandırılması: $4FeS_2 + 11O_2 \rightarrow 2Fe_2O_3 + 8SO_2$
      2. $SO_2$-nin $V_2O_5$ katalizatoru iştirakında oksidləşməsi: $2SO_2 + O_2 \rightleftharpoons 2SO_3 + Q$
      3. $SO_3$-ün qatı $H_2SO_4$-də absorbsiyası (oleum alınması): $SO_3 + H_2O \rightarrow H_2SO_4$
    * **Qatı Sulfat Turşusunun Xüsusiyyətləri:**
      - Ağır, yağabənzər mayedir ($\rho \approx 1.84 \text{ q/sm}^3$).
      - Güclü suçəkici (hiqroskopik) maddədir: şəkəri, oduncağı və parçanı kömürləşdirir.
      - **Təhlükəsizlik qaydası:** Durulaşdırarkən **heç vaxt turşuya su tökmək olmaz!** Turşunu az-az və qarışdıraraq suya əlavə etmək lazımdır.
      - Güclü oksidləşdiricidir: passiv metallarla ($Cu, Ag$) reaksiyaya girərək $SO_2$ ayırır ($H_2$ ayrılmır!):
        $$Cu + 2H_2SO_4(\text{qatı}) \xrightarrow{t} CuSO_4 + SO_2\uparrow + 2H_2O$$
    * **Sulfat İonunun ($SO_4^{2-}$) Təyini:** Barium duzları ($BaCl_2$) ilə ağ rəngli, turşularda həll olmayan çöküntü əmələ gətirir:
      $$Ba^{2+} + SO_4^{2-} \rightarrow BaSO_4\downarrow (\text{ağ çöküntü})$$
        `,
        keyFormulas: [
          {
                "formula": "Ba^{2+} + SO_4^{2-} \\rightarrow BaSO_4\\downarrow (\\text{ağ çöküntü})",
                "name": "Sulfat ionunun təyini",
                "desc": "Ba²⁺ reaktivi ilə suda və turşuda həll olmayan ağ çöküntü"
          },
          {
                "formula": "Cu + 2H_2SO_4(\\text{qatı}) \\xrightarrow{t} CuSO_4 + SO_2\\uparrow + 2H_2O",
                "name": "Qatı sulfatın mis ilə reaksiyası",
                "desc": "Qatı sulfat turşusu reduksiya olunaraq SO₂ qazı əmələ gətirir"
          }
    ],
        glossary: [
          {
                "term": "Oleum",
                "definition": "Kükürd-trioksidin (SO₃) susuz sulfat turşusunda həll olmuş konsentrat məhlulu."
          },
          {
                "term": "Hiqroskopiklik",
                "definition": "Maddənin ətraf mühitdən su buxarlarını udmaq qabiliyyəti."
          }
    ],
        solvedExamples: [
          {
                "problem": "Niyə sulfat turşusunu durulaşdırarkən suyu turşuya tökmək qəti qadağandır?",
                "solution": "Sulfat turşusu su ilə birləşdikdə külli miqdarda istilik ayrılır. Əgər su turşuya tökülərsə, suyun sıxlığı kiçik olduğundan üzdə qalar, dərhal qaynayar və qızmar turşu damcıları ətrafa sıçrayaraq ağır yanıqlara səbəb olar."
          }
    ],
        miniQuiz: [
          {
                "q": "Sulfat ionunun (SO₄²⁻) laboratoriyada təyini üçün hansı ionun duzundan istifadə edilir?",
                "options": [
                      "Na⁺",
                      "Ag⁺",
                      "Ba²⁺",
                      "Cu²⁺"
                ],
                "a": 2,
                "exp": "Ba²⁺ ionu SO₄²⁻ ilə turşularda həll olmayan ağ BaSO₄ çöküntüsü verir."
          },
          {
                "q": "Qatı sulfat turşusunun mis (Cu) ilə reaksiyasında hansı qaz ayrılır?",
                "options": [
                      "H₂",
                      "SO₂",
                      "O₂",
                      "H₂S"
                ],
                "a": 1,
                "exp": "Qatı sulfat metallarla reaksiyada H₂ deyil, SO₂ qazı ayırır."
          }
    ]
      },

  {
        id: 'kimya-9-3',
        subjectId: 'kimya',
        grade: 9,
        unit: 'Bölmə 3: Azot Yarımqrupu Elementləri və Fosfor',
        unitOrder: 3,
        title: 'Azot, ammonyak, nitrat turşusu, fosfor və mineral gübrələr',
        order: 3,
        readTimeMinutes: 19,
        difficulty: 3,
        summary: 'VA qrupu (N, P), N2 davamlılığı, ammonyakın xassələri və donor-akseptor rabitəsi, HNO3 xüsusiyyətləri, fosforun allatropiyası və kənd təsərrüfatı gübrələri.',
        theoryMarkdown: `
    ### Azot və Fosfor Yarımqrupu

    #### 1. Azot ($N_2$)
    * **Quruluşu:** Azot molekulunda iki atom arasında möhkəm üçqat rabitə ($:N \equiv N:$) mövcuddur. Buna görə adi şəraitdə çox təsirsiz (passiv) qazdır.
    * **Yüksək temperaturda:** Oksigenlə yalnız elektrik qövsündə ($2000-3000^\circ C$) reaksiyaya girir:
      $$N_2 + O_2 \rightleftharpoons 2NO - Q$$

    #### 2. Ammonyak ($NH_3$) və Ammonium Duzları
    * **Quruluşu və Alınması:** Kəskin iyli, havadan yüngül qazdır. Sənayedə Haber-Boş üsulu ilə alınır:
      $$N_2 + 3H_2 \rightleftharpoons 2NH_3 + Q$$
    * **Əsasi xassələri:** Azot atomunda sərbəst elektron cütü olduğundan protonu ($H^+$) **donor-akseptor mexanizmi** ilə birləşdirərək ammonium ionu ($NH_4^+$) əmələ gətirir:
      $$NH_3 + H_2O \rightleftharpoons NH_4^+ + OH^-$$
    * **Keyfiyyət reaksiyası:** Ammonium duzlarına qələvilərlə təsir etdikdə kəskin iyli ammonyak qazı ayrılır:
      $$NH_4Cl + NaOH \xrightarrow{t} NaCl + NH_3\uparrow + H_2O$$

    #### 3. Nitrat Turşusu ($HNO_3$)
    * **Xüsusiyyətləri:** Ən qüvvətli turşu və oksidləşdiricilərdən biridir. İşıqda qonur rəngli $NO_2$ ayıraraq parçalanır ($4HNO_3 \xrightarrow{h\nu} 4NO_2 + O_2 + 2H_2O$).
    * **Metallarla qarşılıqlı təsiri:** **Heç vaxt hidrogen qazı ayırmır!** Metalların təbiətindən və turşunun qatılığından asılı olaraq $NO_2, NO, N_2O, N_2$ və ya $NH_4NO_3$ əmələ gətirir:
      $$Cu + 4HNO_3(\text{qatı}) \rightarrow Cu(NO_3)_2 + 2NO_2\uparrow + 2H_2O$$
      $$3Cu + 8HNO_3(\text{duru}) \rightarrow 3Cu(NO_3)_2 + 2NO\uparrow + 4H_2O$$
    * **"Zər suyu" (Çar arağı):** 1 həcm qatı $HNO_3$ və 3 həcm qatı $HCl$ qarışığıdır, qızıl və platini belə həll edir.

    #### 4. Fosfor ($P$) və Mineral Gübrələr
    * **Allatropiyası:** **Ağ fosfor** ($P_4$, zəhərli, qaranlıqda işıq saçır, havada öz-özünə alışır) və **Qırmızı fosfor** (zəhərsiz, kibrit istehsalında istifadə olunur).
    * **Mineral gübrələr:** Bitkilərin qidalanması üçün torpağa verilən qeyri-üzvi maddələrdir:
      - *Azot gübrələri:* Karbamid $(NH_2)_2CO$, ammonium-nitrat $NH_4NO_3$ (yaşıl kütləni artırır).
      - *Fosfor gübrələri:* Sadə superfosfat $Ca(H_2PO_4)_2 + 2CaSO_4$, ikiqat superfosfat $Ca(H_2PO_4)_2$, presipitat (kök sistemini və meyvə yetişməsini gücləndirir).
      - *Kalium gübrələri:* $KCl, K_2SO_4$ (şaxtaya və xəstəliklərə davamlılığı artırır).
        `,
        keyFormulas: [
          {
                "formula": "Cu + 4HNO_3(\\text{qatı}) \\rightarrow Cu(NO_3)_2 + 2NO_2\\uparrow + 2H_2O",
                "name": "Qatı nitratın reaksiya tənliyi",
                "desc": "Mis ilə reaksiyada qonur rəngli NO₂ qazı ayrılır"
          },
          {
                "formula": "NH_4^+ + OH^- \\xrightarrow{t} NH_3\\uparrow + H_2O",
                "name": "Ammonium ionunun təyini",
                "desc": "Qələvi ilə qızdırdıqda ammonyak qazı ayrılır"
          }
    ],
        glossary: [
          {
                "term": "Donor-akseptor rabitəsi",
                "definition": "Bir atomun bölünməmiş elektron cütü, digərinin isə boş orbitalı hesabına yaranan kovalent rabitə."
          },
          {
                "term": "Mineral gübrə",
                "definition": "Torpağın məhsuldarlığını artıran N, P, K qida elementləri saxlayan sənaye duzları."
          }
    ],
        solvedExamples: [
          {
                "problem": "Ammonium-nitrat ($NH_4NO_3$) gübrəsində azotun kütlə payını hesablayın ($A_r(N)=14, A_r(H)=1, A_r(O)=16$).",
                "solution": "M(NH₄NO₃) = 14 + 4×1 + 14 + 3×16 = 80 q/mol. Birləşmədə 2 ədəd N atomu var: m(N) = 28 q. ω(N) = (28 / 80) × 100% = 35%."
          }
    ],
        miniQuiz: [
          {
                "q": "Qatı nitrat turşusu mis ilə reaksiyaya girdikdə hansı qonur rəngli qaz ayrılır?",
                "options": [
                      "N₂",
                      "NO",
                      "NO₂",
                      "NH₃"
                ],
                "a": 2,
                "exp": "Qatı HNO₃ mislə reaksiyada qonur rəngli azot-dioksid (NO₂) qazı ayırır."
          },
          {
                "q": "Bitkilərin kök sisteminin inkişafı və meyvələrin yetişməsi üçün hansı gübrə elementi əsas rol oynayır?",
                "options": [
                      "Azot",
                      "Fosfor",
                      "Xlor",
                      "Natrium"
                ],
                "a": 1,
                "exp": "Fosfor gübrələri bitkilərdə kök inkişafını, çiçəkləmə və meyvə əmələ gəlməsini stimullaşdırır."
          }
    ]
      },

  {
        id: 'kimya-9-4',
        subjectId: 'kimya',
        grade: 9,
        unit: 'Bölmə 4: Karbon və Silisium Yarımqrupu Elementləri',
        unitOrder: 4,
        title: 'Karbon, karbon oksidlər, silisium və silikat sənayesi',
        order: 4,
        readTimeMinutes: 17,
        difficulty: 2,
        summary: 'IVA qrupu, karbonun allatropik modifikasiyaları (almaz, qrafit, fulleren), dəm qazı (CO) və karbon qazı (CO2), silikatlar, şüşə və sement.',
        theoryMarkdown: `
    ### Karbon və Silisium (IVA Qrup Elementləri)

    #### 1. Karbonun Allatropik Şəkildəyişmələri
    Karbon ($C$) atomu 4 valent elektronuna malikdir ($2s^2 2p^2$) və hibridləşmə növündən asılı olaraq müxtəlif xassəli bəsit maddələr əmələ gətirir:
    * **Almaz:** Karbon atomları $sp^3$-hibrid vəziyyətindədir, tetraedrik atom kristal qəfəsi əmələ gətirir. Təbiətdə ən bərk maddədir, elektrik cərəyanını keçirmir.
    * **Qrafit:** $sp^2$-hibrid vəziyyətindədir, laylı quruluşa malikdir. Laylar arasında sərbəst $\pi$-elektronlar olduğuna görə elektrik cərəyanını yaxşı keçirir, yumşaqdır və kağızda iz qoyur.
    * **Fulleren ($C_{60}$), Qrafen və Karbin:** Nanotexnologiyanın əsasını təşkil edən müasir allatropik formalardır.
    * **Aktivləşdirilmiş kömür:** Çoxlu mikroməsamələrə malikdir, qazları və həll olmuş maddələri səthində udmaq (**adsorbsiya**) qabiliyyətinə malikdir (əleyhqazlarda və tibbdə zəhərlənmələrə qarşı istifadə edilir).

    #### 2. Karbonun Oksidləri
    * **Karbon monooksid (Dəm qazı, $CO$):** Rəngsiz, iysiz, suda həll olmayan çox təhlükəli boğucu qazdır. Duzəmələgətirməyən oksiddir. Qanda hemoqlobinlə birləşərək karboksihemoqlobin əmələ gətirir və oksigenin daşınmasını bloklayır.
    * **Karbon dioksid (Karbon qazı, $CO_2$):** Rəngsiz, iysiz, havadan $1.5$ dəfə ağır qazdır. Yanmır və yanmanı dəstəkləmir. Turşu oksididir.
    * **$CO_2$-nin Təyini:** Əhəng suyunu ($Ca(OH)_2$) bulandırır:
      $$CO_2 + Ca(OH)_2 \rightarrow CaCO_3\downarrow (\text{ağ}) + H_2O$$

    #### 3. Silisium ($Si$) və Silikat Sənayesi
    Silisium yer qabığında oksigendən sonra ən çox yayılmış ikinci elementdir (qum, gil, qranit). Təmiz halda yarımkeçiricidir (kompüter çipləri və günəş panelləri üçün əsas materialdır).
    * **Silisium-dioksid ($SiO_2$, kvars, qum):** Atom kristal qəfəsli, çətinəriyən bərk maddədir.
    * **Silikat turşusu ($H_2SiO_3$):** Suda həll olmayan yeganə qeyri-üzvi turşudur (jelatinəbənzər çöküntü verir).
    * **Silikat Sənayesi Məhsulları:**
      - *Adi şüşə:* Soda, əhəngdaşı və qumun əridilməsindən alınır:
        $$Na_2CO_3 + CaCO_3 + 6SiO_2 \xrightarrow{t} Na_2O \cdot CaO \cdot 6SiO_2 + 2CO_2\uparrow$$
      - *Keramika və çini:* Gilin ($Al_2O_3 \cdot 2SiO_2 \cdot 2H_2O$) bişirilməsindən hazırlanır.
      - *Sement:* Əhəngdaşı və gilin xüsusi sobalarda bişirilib xırdalanmasından alınan bağlayıcı inşaat materialıdır.
        `,
        keyFormulas: [
          {
                "formula": "CO_2 + Ca(OH)_2 \\rightarrow CaCO_3\\downarrow + H_2O",
                "name": "Karbon qazının təyini",
                "desc": "Əhəng suyunun bulanması CO₂ üçün keyfiyyət reaksiyasıdır"
          },
          {
                "formula": "Na_2O \\cdot CaO \\cdot 6SiO_2",
                "name": "Adi pəncərə şüşəsinin formulu",
                "desc": "Silikat sənayesində istehsal olunan adi şüşənin tərkibi"
          }
    ],
        glossary: [
          {
                "term": "Adsorbsiya",
                "definition": "Bərk maddənin (məsələn, aktiv kömürün) səthi tərəfindən qaz və ya mayelərin tutulması hadisəsi."
          },
          {
                "term": "Dəm qazı (CO)",
                "definition": "Yanacağın natamam yanmasından yaranan, hemoqlobinlə birləşən çox zəhərli qaz."
          }
    ],
        solvedExamples: [
          {
                "problem": "Niyə dəm qazı (CO) insan həyatı üçün karbon qazından (CO₂) qat-qat təhlükəlidir?",
                "solution": "CO qazı qandakı hemoqlobin zülalı ilə oksigenə nisbətən 200-300 dəfə güclü birləşir və karboksihemoqlobin yaradır. Nəticədə qan hüceyrələrə oksigen daşıya bilmir və insan boğularaq huşunu itirir."
          }
    ],
        miniQuiz: [
          {
                "q": "Qaz əleyhinə maskalarda (əleyhqazlarda) zəhərli qazları udmaq üçün hansı maddədən istifadə olunur?",
                "options": [
                      "Qrafit",
                      "Aktivləşdirilmiş kömür",
                      "Almaz",
                      "Təbaşir"
                ],
                "a": 1,
                "exp": "Aktivləşdirilmiş kömür yüksək adsorbsiya qabiliyyətinə görə zəhərli qazları tutur."
          },
          {
                "q": "Adi pəncərə şüşəsinin istehsalında hansı əsas xammaldan istifadə olunur?",
                "options": [
                      "Yalnız gil",
                      "Kvars qumu, soda və əhəngdaşı",
                      "Dəmir filizi və koks",
                      "Pirit və kömür"
                ],
                "a": 1,
                "exp": "Şüşə SiO₂ (qum), Na₂CO₃ (soda) və CaCO₃ (əhəngdaşı) qarışığının bişirilməsindən alınır."
          }
    ]
      },

  {
        id: 'kimya-9-5',
        subjectId: 'kimya',
        grade: 9,
        unit: 'Bölmə 5: Metalların Ümumi Xarakteristikası və Əsas Yarımqrup Metalları',
        unitOrder: 5,
        title: 'Metallar, elektrokimyəvi gərginlik sırası, Na, Ca, Al və korroziya',
        order: 5,
        readTimeMinutes: 18,
        difficulty: 2,
        summary: 'Metallik rabitə, fiziki xassələr, Beketovun elektrokimyəvi gərginlik sırası, korroziya növləri, qələvi metallar (Na), qələvi-torpaq metallar (Ca) və amfoter Alüminium.',
        theoryMarkdown: `
    ### Metallar və Əsas Yarımqrup Metalları

    #### 1. Metalların Ümumi Xarakteristikası
    Metalların xarici energetik səviyyəsində az sayda ($1-3$) elektron olur. Bütün kimyəvi reaksiyalarda metallar yalnız **reduksiyaedici** olurlar (yalnız elektron verirlər).
    * **Fiziki xassələri:**
      - Plastiklik (döyülmə qabiliyyəti — ən plastik qızıldır $Au$).
      - Elektrik və istilik keçiriciliyi (ən yüksək: $Ag > Cu > Au > Al$).
      - Metal parıltısı.
      - Sıxlığına görə: Yüngül ($\rho < 5 \text{ q/sm}^3$, məsələn: $Li, Na, Al$) və ağır ($\rho > 5 \text{ q/sm}^3$, ən ağır osmium $Os$).
      - Ərimə temperaturuna görə: Asanəriyən (ən asan $Hg$ $-39^\circ C$, sezyum $Cs$) və çətinəriyən (volfram $W$ $3420^\circ C$).

    #### 2. Metalların Elektrokimyəvi Gərginlik Sırası (N.N.Beketov)
    $$Li, K, Ba, Ca, Na, Mg, Al, Mn, Zn, Cr, Fe, Ni, Sn, Pb, \mathbf{(H)}, Cu, Hg, Ag, Pt, Au$$
    * Sıra üzrə soldan sağa getdikcə metalların reduksiyaedicilik qabiliyyəti azalır.
    * Hidrogendən solda yerləşən metallar duru turşulardan ($HCl, H_2SO_4$) hidrogeni sıxışdırıb çıxarır.
    * Hər bir metal (aktiv qələvi metallardan başqa) özündən sağda duran metalı onun duzunun məhlulundan sıxışdırıb çıxara bilər:
      $$Fe + CuSO_4 \rightarrow FeSO_4 + Cu$$

    #### 3. Qələvi və Qələvi-Torpaq Metalları
    * **Qələvi metallar ($IA$: $Li, Na, K$):** Çox yumşaq, bıçaqla kəsilən aktiv metallardır. Su ilə şiddətlə reaksiyaya girərək qələvi və $H_2$ əmələ gətirirlər:
      $$2Na + 2H_2O \rightarrow 2NaOH + H_2\uparrow$$
      Alovu rəngləməsi: $Na$ — sarı, $K$ — bənövşəyi. Neft və kerosin altında saxlanılırlar.
    * **Kalsium ($Ca$):** Təbiətdə əhəngdaşı, mərmər, təbaşir ($CaCO_3$) və gips ($CaSO_4 \cdot 2H_2O$) şəklində yayılmışdır. Suyun codluğu suda $Ca^{2+}$ və $Mg^{2+}$ ionlarının olmasından irəli gəlir.

    #### 4. Alüminium ($Al$) — Amfoter Metal
    Yüngül, gümüşü-ağ metaldır. Havada dərhal oksid təbəqəsi ilə ($Al_2O_3$) örtülərək passivləşir.
    * **Amfoter xassəsi:** Həm turşularda, həm də qələvi məhlullarında həll olaraq $H_2$ ayırır:
      $$2Al + 6HCl \rightarrow 2AlCl_3 + 3H_2\uparrow$$
      $$2Al + 2NaOH + 6H_2O \rightarrow 2Na[Al(OH)_4] + 3H_2\uparrow$$

    #### 5. Metalların Korroziyası
    Korroziya — metalların ətraf mühitin təsiri ilə öz-özünə dağılması (paslanması) prosesidir.
    * *Kimyəvi korroziya:* Quru qazlar və dielektriklərdə baş verir.
    * *Elektrokimyəvi korroziya:* Elektrolit mühitində iki fərqli metalın təmasından yaranır (daha aktiv metal dağılır).
    * *Mühafizə üsulları:* Boyama, qalvanik örtüklər (sinkləmə, xromlama), ərintilər (paslanmayan polad), protektor mühafizəsi.
        `,
        keyFormulas: [
          {
                "formula": "2Na + 2H_2O \\rightarrow 2NaOH + H_2\\uparrow",
                "name": "Qələvi metalın su ilə reaksiyası",
                "desc": "Aktiv metallar su ilə şiddətlə reaksiyaya girir"
          },
          {
                "formula": "Fe + Cu^{2+} \\rightarrow Fe^{2+} + Cu",
                "name": "Beketov sırası ilə sıxışdırma",
                "desc": "Daha aktiv metal duz məhlulundan passiv metalı sıxışdırıb çıxarır"
          }
    ],
        glossary: [
          {
                "term": "Korroziya",
                "definition": "Metalların ətraf mühit amillərinin təsiri ilə kimyəvi və ya elektrokimyəvi dağılması."
          },
          {
                "term": "Suyun codluğu",
                "definition": "Suda Ca²⁺ və Mg²⁺ duzlarının çoxluğu nəticəsində sabunun köpüklənməməsi halı."
          }
    ],
        solvedExamples: [
          {
                "problem": "Sink lövhəni mis(II) sulfat ($CuSO_4$) məhluluna daxil etdikdə nə baş verər?",
                "solution": "Beketov sırasında Zn misdən (Cu) solda yerləşir, yəni misdən daha aktivdir. Sink lövhə həll olaraq məhlula keçəcək, lövhənin üzərinə isə qırmızımtıl sərbəst mis təbəqəsi çökəcək: Zn + CuSO₄ → ZnSO₄ + Cu."
          }
    ],
        miniQuiz: [
          {
                "q": "Elektrik cərəyanını ən yaxşı keçirən metal hansıdır?",
                "options": [
                      "Dəmir (Fe)",
                      "Alüminium (Al)",
                      "Gümüş (Ag)",
                      "Qurğuşun (Pb)"
                ],
                "a": 2,
                "exp": "Bütün metallar arasında ən yüksək elektrik və istilik keçiriciliyinə gümüş (Ag) malikdir."
          },
          {
                "q": "Alüminium metalının həm turşu, həm də qələvi ilə reaksiyaya girməsi onun hansı xassəsini göstərir?",
                "options": [
                      "Oksidləşdirici",
                      "Amfoter",
                      "Passiv",
                      "Radioaktiv"
                ],
                "a": 1,
                "exp": "Həm turşu, həm qələvi ilə reaksiyaya girərək duz əmələ gətirmək amfoterlik əlamətidir."
          }
    ]
      },

  {
        id: 'kimya-9-6',
        subjectId: 'kimya',
        grade: 9,
        unit: 'Bölmə 6: Əlavə Yarımqrup Metalları (Dəmir, Mis, Sink, Xrom)',
        unitOrder: 6,
        title: 'Dəmir, çuqun və polad metallurgiyası, Cu, Zn və Cr',
        order: 6,
        readTimeMinutes: 18,
        difficulty: 3,
        summary: 'd-elementləri, dəmirin oksidləşmə dərəcələri (+2, +3), domna sobasında çuqun və konverterdə polad istehsalı, mis, sink və xromun tətbiqi.',
        theoryMarkdown: `
    ### Əlavə Yarımqrup Metalları (d-Elementlər)

    #### 1. Dəmir ($Fe$)
    Dövri sistemin VIIIB qrupunda yerləşən $d$-elementidir ($1s^2 2s^2 2p^6 3s^2 3p^6 3d^6 4s^2$). Birləşmələrində əsasən **$+2$** və **$+3$** oksidləşmə dərəcələri göstərir.
    * **Kimyəvi xassələri:**
      - Xlor və qatı turşularla qızdırıldıqda $+3$ dərəcəsinə oksidləşir ($2Fe + 3Cl_2 \xrightarrow{t} 2FeCl_3$).
      - Xlorid və duru sulfat turşuları ilə reaksiyada $+2$ valentli olur ($Fe + 2HCl \rightarrow FeCl_2 + H_2\uparrow$).
      - Qızmar su buxarı ilə: $3Fe + 4H_2O \xrightarrow{t} Fe_3O_4 + 4H_2\uparrow$.
      - Otaq temperaturunda qatı $HNO_3$ və qatı $H_2SO_4$ dəmiri passivləşdirir (reaksiya getmir, buna görə bu turşuları dəmir sisternlərdə daşıyırlar).

    #### 2. Qara Metallurgiya: Çuqun və Polad İstehsalı
    Dəmir filizlərindən (maqnetit $Fe_3O_4$, hematit $Fe_2O_3$) metal ərintilərinin alınmasıdır:
    * **Çuqun:** Dəmirin karbonla ərintisidir (karbonun miqdarı **$2\%-dən 4.5\%$-ə qədərdir**). Kövrəkdir, döyülmür, tökmə işlərində istifadə olunur.
      - *Domna sobasında istehsalı:* Koks ($C$) yanaraq reduksiyaedici qaz olan $CO$ əmələ gətirir. Dəmir filizi mərhələlərlə reduksiya olunur:
        $$Fe_2O_3 \rightarrow Fe_3O_4 \rightarrow FeO \rightarrow Fe$$
    * **Polad:** Karbonun miqdarı **$2\%-dən az ($0.1-2\%$)** olan dəmir ərintisidir. Elastik, möhkəm və döyüləndir. Çuqundakı artıq karbon, kükürd və fosforun oksigenlə yandırılması (oksigen-konverter üsulu) ilə alınır.

    #### 3. Mis ($Cu$), Sink ($Zn$) və Xrom ($Cr$)
    * **Mis ($Cu$):** Qırmızımtıl rəngli, yüksək elektrik keçirici metaldır. Nəm havada yaşıl rəngli patina qatı ilə örtülür ($(CuOH)_2CO_3$). Əsas ərintiləri: **Bürünc** ($Cu + Sn$) və **Pirinç** ($Cu + Zn$).
    * **Sink ($Zn$):** Amfoter metaldır ($ZnO$ və $Zn(OH)_2$ amfoterdir). Dəmiri korroziyadan qorumaq üçün sinkləmə işlərində tətbiq edilir.
    * **Xrom ($Cr$):** Çox bərk (şüşəni cızır), korroziyaya davamlı metaldır. Birləşmələrində $+2$ (əsasi), $+3$ (amfoter), $+6$ (turşu: xrom(VI) oksid $CrO_3$) oksidləşmə dərəcələri göstərir. Paslanmayan poladların tərkibinə daxildir.
        `,
        keyFormulas: [
          {
                "formula": "Fe_2O_3 + 3CO \\xrightarrow{t} 2Fe + 3CO_2",
                "name": "Dəmirin domna reduksiyası",
                "desc": "Koks qazı (CO) vasitəsilə filizdən dəmirin alınması"
          },
          {
                "formula": "\\omega(C)_{\\text{çuqun}} > 2\\%, \\quad \\omega(C)_{\\text{polad}} < 2\\%",
                "name": "Çuqun və poladın fərqi",
                "desc": "Ərintidə karbonun kütlə payı fərqi"
          }
    ],
        glossary: [
          {
                "term": "Çuqun",
                "definition": "Tərkibində 2-4.5% karbon olan bərk və kövrək dəmir ərintisi."
          },
          {
                "term": "Polad",
                "definition": "Tərkibində 2%-dən az karbon olan möhkəm və plastik dəmir ərintisi."
          },
          {
                "term": "Passivləşmə",
                "definition": "Metalı qatı turşuların təsirindən qoruyan sıx oksid təbəqəsinin yaranması."
          }
    ],
        solvedExamples: [
          {
                "problem": "Niyə qatı sulfat turşusunu adi dəmir çənlərdə (sisternlərdə) təhlükəsiz daşımaq mümkündür?",
                "solution": "Adi temperaturda qatı sulfat turşusu dəmirlə reaksiyaya girmir; əksinə, dəmirin səthində dərhal çox sıx, həllolmayan dəmir oksid təbəqəsi yaradır (passivləşdirir). Bu təbəqə daxili təbəqələri turşunun sonrakı təsirindən qoruyur."
          }
    ],
        miniQuiz: [
          {
                "q": "Çuqunu poladdan fərqləndirən əsas tərkib xüsusiyyəti nədir?",
                "options": [
                      "Çuqunda karbon 2%-dən çoxdur",
                      "Poladda dəmir olmur",
                      "Çuqun daha elastikdir",
                      "Polad tökmə üçün yararsızdır"
                ],
                "a": 0,
                "exp": "Çuqunda karbon 2-4.5%, poladda isə 2%-dən azdır."
          },
          {
                "q": "Mis və sinkin (Cu + Zn) ərintisi texnikada necə adlanır?",
                "options": [
                      "Bürünc",
                      "Pirinç (latun)",
                      "Polad",
                      "Melxior"
                ],
                "a": 1,
                "exp": "Mis ilə sinkin ərintisi pirinç (latun), mis ilə qalay ərintisi isə bürünc adlanır."
          }
    ]
      },

  {
        id: 'kimya-10-1',
        subjectId: 'kimya',
        grade: 10,
        unit: 'Bölmə 1: Üzvi Kimyanın Nəzəri Əsasları və Alkanlar (Parafinlər)',
        unitOrder: 1,
        title: 'Butlerov nəzəriyyəsi, izomerlik və doymuş karbohidrogenlər',
        order: 1,
        readTimeMinutes: 19,
        difficulty: 3,
        summary: 'A.M.Butlerovun kimyəvi quruluş nəzəriyyəsi, sp3 hibridləşmə, alkanların ümumi formulu CnH2n+2, Beynəlxalq adlandırma (IUPAC), radikal əvəzetmə və yanma.',
        theoryMarkdown: `
    ### Üzvi Kimyanın Əsasları və Alkanlar

    #### 1. A.M.Butlerovun Kimyəvi Quruluş Nəzəriyyəsi (1861)
    1. Üzvi birləşmələrdə **karbon atomu həmişə IV valentlidir** və bir-biri ilə birləşərək zəncirlər (xətti, şaxəli, qapalı tsiklik) əmələ gətirə bilir.
    2. Molekulu təşkil edən atomlar müəyyən ardıcıllıqla birləşir. Maddənin xassələri təkcə tərkibindən deyil, həm də molekulun kimyəvi quruluşundan asılıdır.
    3. **İzomerlik:** Molekul tərkibi və molekul kütləsi eyni, lakin kimyəvi quruluşu və xassələri fərqli olan maddələrdir (məsələn, butan və izobutan $C_4H_{10}$).

    #### 2. Alkanlar (Doymuş Karbohidrogenlər / Parafinlər)
    Bütün rabitələri təkqat $\sigma$-rabitələrdən ibarət olan açıq zəncirli karbohidrogenlərdir.
    * **Ümumi formulu:** $C_n H_{2n+2}$ ($n \ge 1$).
    * **Hibridləşmə:** Bütün karbon atomları **$sp^3$** hibrid vəziyyətindədir. Valent bucağı **$109^\circ 28'$**, rabitə uzunluğu $C-C$ **$0.154$ nm**, forması tetraedrikdir.
    * **Homoloji sırası:** Metan $CH_4$, Etan $C_2H_6$, Propan $C_3H_8$, Butan $C_4H_{10}$, Pentan $C_5H_{12}$, Heksan $C_6H_{14}$, Heptan $C_7H_{16}$, Oktan $C_8H_{18}$, Nonan $C_9H_{20}$, Dekan $C_{10}H_{22}$.
    * **Adlandırma (IUPAC):** Ən uzun karbon zənciri seçilir, şaxələnməyə yaxın tərəfdən nömrələnir, radikalların yerləri və adları qeyd olunub əsas zəncirin adı "-an" şəkilçisi ilə deyilir.

    #### 3. Alkanların Kimyəvi Xassələri
    Doymuş olduqları üçün birləşmə reaksiyalarına girmirlər. Səciyyəvi reaksiyaları **sərbəst radikal mexanizmli əvəzetmədir**:
    1. **Halogenləşmə (İşıqda):**
       $$CH_4 + Cl_2 \xrightarrow{h\nu} CH_3Cl (\text{xlormetan}) + HCl$$
       Reaksiya $CH_2Cl_2, CHCl_3$ və $CCl_4$ alınana qədər davam edir.
    2. **Yanma:**
       $$C_n H_{2n+2} + \frac{3n+1}{2}O_2 \rightarrow nCO_2 + (n+1)H_2O + Q$$
    3. **Parçalanma (Piroliz) və Krekinq:**
       $$2CH_4 \xrightarrow{1500^\circ C} C_2H_2 (\text{asetilen}) + 3H_2$$
       $$C_8H_{18} \xrightarrow{t, p} C_4H_{10} (\text{butan}) + C_4H_8 (\text{buten})$$
        `,
        keyFormulas: [
          {
                "formula": "C_n H_{2n+2}",
                "name": "Alkanların ümumi formulu",
                "desc": "Doymuş karbohidrogenlərin homoloji sırası (n ≥ 1)"
          },
          {
                "formula": "\\text{Bucaq} = 109^\\circ 28', \\quad l_{C-C} = 0.154 \\text{ nm}",
                "name": "sp³ hibrid parametrləri",
                "desc": "Alkanlarda tetraedrik karbon rabitələri"
          }
    ],
        glossary: [
          {
                "term": "İzomerlik",
                "definition": "Molekul formulu eyni, lakin fəza və ya zəncir quruluşu fərqli olan maddələr."
          },
          {
                "term": "Homoloq",
                "definition": "Eyni kimyəvi xassəyə malik olub bir və ya bir neçə CH₂ qrupu ilə fərqlənən maddələr."
          },
          {
                "term": "Radikal",
                "definition": "Cütləşməmiş elektrona malik yüksək aktivliyə malik hissəcik (məsələn, CH₃•)."
          }
    ],
        solvedExamples: [
          {
                "problem": "Molekulunda 12 hidrogen atomu olan doymuş karbohidrogenin (alkanın) nisbi molekul kütləsini ($M_r$) hesablayın.",
                "solution": "Alkanların formulu C_n H_{2n+2}. 2n + 2 = 12 => 2n = 10 => n = 5 (Pentan, C₅H₁₂). M_r(C₅H₁₂) = 5 × 12 + 12 × 1 = 72."
          }
    ],
        miniQuiz: [
          {
                "q": "Metan molekulunda karbon atomunun hibridləşmə növü və valent bucağı hansıdır?",
                "options": [
                      "sp, 180°",
                      "sp², 120°",
                      "sp³, 109°28'",
                      "Hibridləşmə yoxdur"
                ],
                "a": 2,
                "exp": "Alkanlarda bütün karbon atomları sp³ hibrid vəziyyətindədir və valent bucağı 109°28'-dir."
          },
          {
                "q": "Alkanlar üçün ən səciyyəvi kimyəvi reaksiya növü hansıdır?",
                "options": [
                      "Birləşmə",
                      "Radikal əvəzetmə",
                      "Polimerləşmə",
                      "Hidratlaşma"
                ],
                "a": 1,
                "exp": "Alkanlarda bütün rabitələr doymuş olduğu üçün onlar yalnız əvəzetmə reaksiyalarına girirlər."
          }
    ]
      },

  {
        id: 'kimya-10-2',
        subjectId: 'kimya',
        grade: 10,
        unit: 'Bölmə 2: Alkenlər (Etilen Sırası Karbohidrogenləri)',
        unitOrder: 2,
        title: 'İkiqat rabitəli doymamış karbohidrogenlər və Markovnikov qaydası',
        order: 2,
        readTimeMinutes: 18,
        difficulty: 3,
        summary: 'Alkenlərin ümumi formulu CnH2n, sp2 hibridləşmə, sigma və pi rabitələr, sis-trans həndəsi izomerlik, birləşmə reaksiyaları, Markovnikov qaydası və polietilen.',
        theoryMarkdown: `
    ### Alkenlər (Etilen Karbohidrogenləri)

    #### 1. Alkenlərin Quruluşu və Nomenklaturası
    Molekulunda bir ikiqat ($C=C$) rabitəsi olan açıq zəncirli karbohidrogenlərdir.
    * **Ümumi formulu:** $C_n H_{2n}$ ($n \ge 2$).
    * **Hibridləşmə:** İkiqat rabitəli karbon atomları **$sp^2$** hibrid vəziyyətindədir. Valent bucağı **$120^\circ$**, rabitə uzunluğu $C=C$ **$0.134$ nm**.
    * İkiqat rabitə bir möhkəm $\sigma$ (siqma) və bir asan qırılan $\pi$ (pi) rabitəsindən ibarətdir.
    * **İzomerlik növləri:**
      1. Quruluş (karbon skeletinin) izomerliyi.
      2. İkiqat rabitənin vəziyyət izomerliyi ($CH_2=CH-CH_2-CH_3$ buten-1 və $CH_3-CH=CH-CH_3$ buten-2).
      3. Siniflərarası izomerlik: Tsikloalkanlarla izomerdir ($C_n H_{2n}$).
      4. Fəza (həndəsi / sis-trans) izomerliyi.

    #### 2. Alkenlərin Alınması
    * Neft məhsullarının krekinqindən.
    * Spirtlərin dehidratlaşmasından (su ayrılması):
      $$CH_3-CH_2-OH \xrightarrow{H_2SO_4, >140^\circ C} CH_2=CH_2 + H_2O$$
    * Alkanların dehidrogenləşməsindən ($C_2H_6 \xrightarrow{t, Ni} C_2H_2 + H_2$).

    #### 3. Alkenlərin Kimyəvi Xassələri
    $\pi$-rabitənin asan qırılması səbəbindən alkenlər üçün **birləşmə reaksiyaları** səciyyəvidir:
    1. **Halogenlərin birləşməsi (Keyfiyyət reaksiyası):** Bromlu suyu ($Br_2$) rəngsizləşdirirlər:
       $$CH_2=CH_2 + Br_2(\text{qonur}) \rightarrow CH_2Br-CH_2Br (\text{rəngsiz})$$
    2. **Hidrogenləşmə:** $CH_2=CH_2 + H_2 \xrightarrow{Ni, t} CH_3-CH_3$.
    3. **Markovnikov Qaydası:** Asimmetrik alkenlərə hidrogen-halogenidlərin ($HX$) və ya suyun ($HOH$) birləşməsi zamanı hidrogen atomu ikiqat rabitəli karbon atomlarından **hidrogeni çox olan** karbona, halogen (və ya $-OH$) isə **hidrogeni az olan** karbona birləşir:
       $$CH_3-CH=CH_2 + HCl \rightarrow CH_3-CH(Cl)-CH_3 \quad (\text{2-xlorpropan})$$
    4. **Polimerləşmə reaksiyası:** Çoxlu sayda kiçik molekulun (monomer) birləşərək nəhəng makromolekul (polimer) əmələ gətirməsidir:
       $$n CH_2=CH_2 \xrightarrow{p, t, kat} (-CH_2-CH_2-)_n \quad (\text{Polietilen})$$
        `,
        keyFormulas: [
          {
                "formula": "C_n H_{2n}",
                "name": "Alkenlərin ümumi formulu",
                "desc": "Bireləqəli doymamış karbohidrogenlər (n ≥ 2)"
          },
          {
                "formula": "n M \\xrightarrow{\\text{kat}} (-M-)_n",
                "name": "Polimerləşmə tənliyi",
                "desc": "Monomerin polimerə çevrilməsi prosesi"
          }
    ],
        glossary: [
          {
                "term": "Markovnikov qaydası",
                "definition": "Birləşmə zamanı hidrogenin daha çox hidrogenləşmiş karbon atomuna birləşməsi qanunauyğunluğu."
          },
          {
                "term": "Polimerləşmə",
                "definition": "Eyni monomer molekullarının rabitələrin qırılması hesabına iri molekul əmələ gətirməsi."
          },
          {
                "term": "Keyfiyyət reaksiyası",
                "definition": "Maddənin varlığını təyin edən rəng dəyişməsi, çöküntü və ya qaz ayrılması ilə gedən reaksiya."
          }
    ],
        solvedExamples: [
          {
                "problem": "Propenə ($CH_3-CH=CH_2$) suyun birləşməsindən hansı spirt alınır? Reaksiyanı Markovnikov qaydası ilə əsaslandırın.",
                "solution": "Propendə ikiqat rabitəli karbonlardan birincidə 2 hidrogen (CH₂), ikincidə 1 hidrogen (CH) var. Markovnikov qaydasına görə H⁺ hidrogeni çox olan 1-ci karbona, OH⁻ isə 2-ci karbona birləşir. Nəticədə propanol-2 alınır: CH₃-CH=CH₂ + H₂O → CH₃-CH(OH)-CH₃."
          }
    ],
        miniQuiz: [
          {
                "q": "Qazın tərkibində etilenin (alkenin) olduğunu sübut etmək üçün hansı reaktivdən istifadə edilir?",
                "options": [
                      "Əhəng suyu",
                      "Bromlu su (və ya KMnO₄ məhlulu)",
                      "Lakmus kağızı",
                      "Xörək duzu"
                ],
                "a": 1,
                "exp": "Alkenlər bromlu suyun qonur rəngini və kalium-permanqanat məhlulunu rəngsizləşdirir."
          },
          {
                "q": "Etilenin polimerləşməsindən hansı geniş yayılmış polimer alınır?",
                "options": [
                      "Polistirol",
                      "Polietilen",
                      "Kapron",
                      "Rezin"
                ],
                "a": 1,
                "exp": "n CH₂=CH₂ → (-CH₂-CH₂-)n (Polietilen alınır)."
          }
    ]
      },

  {
        id: 'kimya-10-3',
        subjectId: 'kimya',
        grade: 10,
        unit: 'Bölmə 3: Alkadienlər və Sintetik Kauçuklar',
        unitOrder: 3,
        title: 'Konyuqə olunmuş dienlər, vulkanlaşma və kauçuk istehsalı',
        order: 3,
        readTimeMinutes: 16,
        difficulty: 3,
        summary: 'Alkadienlərin ümumi formulu CnH2n-2, konyuqə olunmuş dienlər (divinil və izopren), 1,4- və 1,2-birləşmə, Lebedev üsulu, təbii kauçuk və vulkanlaşma.',
        theoryMarkdown: `
    ### Alkadienlər və Kauçuklar

    #### 1. Alkadienlərin Təsnifatı və Quruluşu
    Molekulunda iki ədəd ikiqat rabitə olan açıq zəncirli karbohidrogenlərdir.
    * **Ümumi formulu:** $C_n H_{2n-2}$ ($n \ge 3$).
    * **İkiqat rabitələrin qarşılıqlı vəziyyətinə görə:**
      1. *Kumulə olunmuş:* İkiqat rabitələr yanaşı yerləşir ($CH_2=C=CH_2$ propadien).
      2. *Konyuqə olunmuş (əlaqəli):* İkiqat rabitələr bir təkqat rabitə ilə ayrılmışdır ($CH_2=CH-CH=CH_2$ butadien-1,3 və $CH_2=C(CH_3)-CH=CH_2$ 2-metilbutadien-1,3 / izopren). Texnikada ən mühüm olanlar bunlardır.
      3. *Təcrid olunmuş:* İkiqat rabitələr iki və ya daha çox təkqat rabitə ilə ayrılmışdır.

    #### 2. Butadien-1,3 (Divinil) və İzoprenin Alınması
    * **S.V.Lebedev üsulu (1932):** Etil spirtinin eyni vaxtda dehidrogenləşməsi və dehidratlaşması:
      $$2C_2H_5OH \xrightarrow{ZnO, Al_2O_3, 450^\circ C} CH_2=CH-CH=CH_2 + 2H_2O + H_2\uparrow$$

    #### 3. Birləşmə Xüsusiyyətləri: 1,4- və 1,2-Birləşmə
    Konyuqə olunmuş dienlərdə $\pi$-elektron buludu tam delokallaşmışdır. Halogenlərlə reaksiyada temperaturdan asılı olaraq iki cür birləşmə baş verir:
    * Aşağı temperaturda ($-80^\circ C$): **1,2-birləşmə** üstünlük təşkil edir.
    * Otaq və yüksək temperaturda ($+40^\circ C$): **1,4-birləşmə** gedir, kənar rabitələr qırılır və mərkəzdə yeni ikiqat rabitə yaranır:
      $$CH_2=CH-CH=CH_2 + Br_2 \rightarrow CH_2Br-CH=CH-CH_2Br$$

    #### 4. Kauçuklar və Vulkanlaşma
    * **Təbii kauçuk:** Heveya ağacının südşirəsindən (lateks) alınır. İzoprenin xətti requlyar *sis*-polimeridir:
      $$[-CH_2-C(CH_3)=CH-CH_2-]_n$$
    * **Sintetik kauçuklar:** Butadien, xloropren və izoprenin polimerləşməsindən alınır.
    * **Vulkanlaşma:** Xam kauçukun kükürdlə qızdırılması prosesidir. Kükürd atomları polimer zəncirləri arasında disulfid körpüləri ($-S-S-$) yaradaraq fəza toru əmələ gətirir. Nəticədə möhkəm, elastik və temperatur dəyişməsinə davamlı **rezin** alınır (kükürdün miqdarı $30\%$-dən çox olduqda bərk material — **ebonit** yaranır).
        `,
        keyFormulas: [
          {
                "formula": "C_n H_{2n-2}",
                "name": "Alkadienlərin ümumi formulu",
                "desc": "İki ikiqat rabitəli karbohidrogenlər (n ≥ 3)"
          },
          {
                "formula": "n CH_2=CH-CH=CH_2 \\xrightarrow{\\text{Na}} (-CH_2-CH=CH-CH_2-)_n",
                "name": "Butadien kauçuku",
                "desc": "Divinilin polimerləşməsi reaksiyası"
          }
    ],
        glossary: [
          {
                "term": "Konyuqasiya",
                "definition": "Bir təkqat rabitə ilə ayrılmış ikiqat rabitələrin elektron buludlarının vahid örtülmə sistemi yaratması."
          },
          {
                "term": "Vulkanlaşma",
                "definition": "Kauçukun kükürd vasitəsilə tikilərək rezinə çevrilməsi prosesi."
          },
          {
                "term": "Lateks",
                "definition": "Təbii kauçukun su mühitindəki kolloid südşirəsi."
          }
    ],
        solvedExamples: [
          {
                "problem": "Təbii kauçuk xam halda temperatur dəyişəndə necə davranır və vulkanlaşma bunu necə aradan qaldırır?",
                "solution": "Xam təbii kauçuk yayda istidə yapışqan və yumşaq olur, qışda soyuqda isə bərkiyib kövrəkləşir. Kükürdlə vulkanlaşma nəticəsində zəncirlər kükürd körpüləri ilə bağlanır, temperaturdan asılı olmayan yüksək elastik rezin formalaşır."
          }
    ],
        miniQuiz: [
          {
                "q": "Rezin almaq üçün kauçuk hansı maddə ilə qızdırılaraq vulkanlaşdırılır?",
                "options": [
                      "Kükürd (S)",
                      "Xlor (Cl₂)",
                      "Dəmir (Fe)",
                      "Fosfor (P)"
                ],
                "a": 0,
                "exp": "Kauçukun kükürdlə işlənməsi disulfid körpüləri yaradaraq rezin əmələ gətirir."
          },
          {
                "q": "Butadien-1,3-ün 1 moluna 1 mol brom (Br₂) 1,4-vəziyyətində birləşdikdə hansı maddə alınır?",
                "options": [
                      "1,2-dibrombutan",
                      "1,4-dibrombuten-2",
                      "1,1-dibrombutan",
                      "Tetrabrombutan"
                ],
                "a": 1,
                "exp": "1,4-birləşmədə kənarlara brom birləşir və mərkəzdə 2-ci vəziyyətdə ikiqat rabitə yaranır."
          }
    ]
      },

  {
        id: 'kimya-10-4',
        subjectId: 'kimya',
        grade: 10,
        unit: 'Bölmə 4: Alkinlər (Asetilen Sırası Karbohidrogenləri)',
        unitOrder: 4,
        title: 'Üçqat rabitəli karbohidrogenlər, Kuçerov reaksiyası və asetilen',
        order: 4,
        readTimeMinutes: 17,
        difficulty: 3,
        summary: 'Alkinlərin ümumi formulu CnH2n-2, sp hibridləşmə, xətti quruluş, asetilenin sənaye alınması (karbid və metan), Kuçerov reaksiyası və trimerləşmə.',
        theoryMarkdown: `
    ### Alkinlər (Asetilen Karbohidrogenləri)

    #### 1. Quruluşu və Homoloji Sırası
    Molekulunda bir ədəd üçqat ($C\equiv C$) rabitəsi olan açıq zəncirli karbohidrogenlərdir.
    * **Ümumi formulu:** $C_n H_{2n-2}$ ($n \ge 2$). Alkadienlərlə və tsikloalkenlərlə siniflərarası izomerdir.
    * **Hibridləşmə:** Üçqat rabitəli karbon atomları **$sp$** hibrid vəziyyətindədir. Valent bucağı **$180^\circ$**, rabitə uzunluğu $C\equiv C$ **$0.120$ nm**, molekul **xətti** formadadır.
    * Üçqat rabitə bir $\sigma$ və iki qarşılıqlı perpendikulyar $\pi$-rabitədən ibarətdir.

    #### 2. Asetilenin ($C_2H_2$) Alınması
    1. **Karbid üsulu (Wöhler):**
       $$CaC_2 (\text{kalsium-karbid}) + 2H_2O \rightarrow Ca(OH)_2 + C_2H_2\uparrow$$
    2. **Metanın yüksək temperaturda pirolizi:**
       $$2CH_4 \xrightarrow{1500^\circ C} C_2H_2 + 3H_2$$

    #### 3. Kimyəvi Xassələri
    * **Birləşmə Reaksiyaları (İki mərhələdə gedir):**
      - Hidrogenləşmə: $C_2H_2 \xrightarrow{+H_2} C_2H_4 \xrightarrow{+H_2} C_2H_6$.
      - Halogenləşmə: Bromlu suyu rəngsizləşdirir ($C_2H_2 + 2Br_2 \rightarrow CHBr_2-CHBr_2$).
    * **Kuçerov Reaksiyası (Hidratlaşma — 1881):**
      Civə ($Hg^{2+}$) duzları katalizatorluğu ilə asetilenə su birləşdikdə **sirkə aldehidi (asetaldehid)** alınır:
      $$HC\equiv CH + H_2O \xrightarrow{Hg^{2+}, H^+} [CH_2=CH-OH] \rightarrow CH_3-CHO$$
      (Digər alkinlərin hidratlaşmasından isə ketonlar alınır).
    * **Trimerləşmə (Zelinski reaksiyası):** Asetilen aktivləşdirilmiş kömür üzərindən keçirildikdə **benzola** çevrilir:
      $$3C_2H_2 \xrightarrow{C_{\text{akt}}, 600^\circ C} C_6H_6 (\text{benzol})$$
    * **Dimerləşmə:** Vinilasetilen alınır ($2C_2H_2 \xrightarrow{kat} CH_2=CH-C\equiv CH$).
    * **Asetilenin yanması:** Oksigendə yanarkən çox yüksək temperatur ($3000^\circ C$-dək) yaradır, buna görə metalların kəsilməsi və qaynağında istifadə olunur.
        `,
        keyFormulas: [
          {
                "formula": "C_n H_{2n-2}",
                "name": "Alkinlərin ümumi formulu",
                "desc": "Üçqat rabitəli karbohidrogenlər (n ≥ 2)"
          },
          {
                "formula": "C_2H_2 + H_2O \\xrightarrow{Hg^{2+}} CH_3-CHO",
                "name": "Kuçerov reaksiyası",
                "desc": "Asetilenin sirkə aldehidinə hidratlaşması"
          },
          {
                "formula": "3C_2H_2 \\xrightarrow{C_{\\text{akt}}, 600^\\circ C} C_6H_6",
                "name": "Zelinski trimerləşməsi",
                "desc": "Asetilendən benzolun sintezi"
          }
    ],
        glossary: [
          {
                "term": "Kuçerov reaksiyası",
                "definition": "Civə duzları katalizatorluğunda alkinlərə su birləşərək aldehid və ya keton alınması."
          },
          {
                "term": "Trimerləşmə",
                "definition": "Üç molekulun birləşərək tsiklik və ya daha iri vahid molekul əmələ gətirməsi."
          },
          {
                "term": "Xətti quruluş",
                "definition": "sp hibridləşməyə malik 180°-lik valent bucaqlı molekul həndəsəsi."
          }
    ],
        solvedExamples: [
          {
                "problem": "64 qram kalsium-karbidin ($CaC_2$) su ilə tam reaksiyasından normal şəraitdə neçə litr asetilen qazı ayrılar ($M(CaC_2)=64$ q/mol)?",
                "solution": "CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑. ν(CaC₂) = 64 / 64 = 1 mol. Tənliyə görə 1 mol CaC₂-dən 1 mol C₂H₂ ayrılır. V = 1 × 22.4 = 22.4 litr."
          }
    ],
        miniQuiz: [
          {
                "q": "Kuçerov reaksiyasında asetilenə su birləşdirildikdə hansı məhsul alınır?",
                "options": [
                      "Etil spirti",
                      "Sirkə aldehidi",
                      "Aseton",
                      "Etilenqlikol"
                ],
                "a": 1,
                "exp": "Asetilenin hidratlaşmasından davamsız vinil spirti vasitəsilə sirkə aldehidi (CH₃CHO) yaranır."
          },
          {
                "q": "Asetilenin aktiv kömür katalizatoru üzərində trimerləşməsindən hansı aromatik maddə alınır?",
                "options": [
                      "Toluol",
                      "Benzol",
                      "Stirol",
                      "Fenol"
                ],
                "a": 1,
                "exp": "3C₂H₂ → C₆H₆ (Benzol alınır — Zelinski reaksiyası)."
          }
    ]
      },

  {
        id: 'kimya-10-5',
        subjectId: 'kimya',
        grade: 10,
        unit: 'Bölmə 5: Tsikloalkanlar və Aromatik Karbohidrogenlər (Arenlər)',
        unitOrder: 5,
        title: 'Tsikloalkanlar, benzol halqası və elektrofil əvəzetmə',
        order: 5,
        readTimeMinutes: 18,
        difficulty: 3,
        summary: 'Tsikloalkanlar (CnH2n), aromatik karbohidrogenlər (Arenlər CnH2n-6), Kekule formulu, benzolun altıelektronlu vahid pi-sistemi, halogenləşmə və nitrolaşma.',
        theoryMarkdown: `
    ### Tsikloalkanlar və Aromatik Karbohidrogenlər

    #### 1. Tsikloalkanlar (Tsikloparafinlər)
    Qapalı tsiklik quruluşlu doymuş karbohidrogenlərdir.
    * **Ümumi formulu:** $C_n H_{2n}$ ($n \ge 3$). Alkenlərlə siniflərarası izomerdir.
    * Tsiklopropan ($C_3H_6$) və tsiklobutan ($C_4H_8$) gərgin tsikllərdir, buna görə asanlıqla tsiklin qırılması ilə birləşmə reaksiyalarına girirlər.
    * Tsiklopentan ($C_5H_{10}$) və tsikloheksan ($C_6H_{12}$) çox davamlıdır, alkanlar kimi əvəzetmə reaksiyalarına meyil edirlər. Neftin tərkibində geniş yayılmışdır (naftenlər).

    #### 2. Aromatik Karbohidrogenlər (Arenlər) — Benzol Sırası
    Molekulunda davamlı aromatik altıüzvlü benzol halqası saxlayan birləşmələrdir.
    * **Ümumi formulu:** $C_n H_{2n-6}$ ($n \ge 6$).
    * **Benzolun quruluşu ($C_6H_6$):** Bütün 6 karbon atomu **$sp^2$** hibrid vəziyyətindədir və bir müstəvidə yerləşir. Hər bir karbon atomunun hibridləşməmiş $p$-orbitalı qonşu orbitallarla hər iki tərəfdən örtülərək vahid qapalı delokallaşmış **$\pi$-elektron sekti** (aromatik sistem) əmələ gətirir. Valent bucağı $120^\circ$, rabitələrin uzunluğu bərabərdir ($0.140$ nm).
    * **Homoloqları:** Toluol (metilbenzol $C_6H_5-CH_3$), etilbenzol, ksilollar.

    #### 3. Benzolun Kimyəvi Xassələri
    Aromatik sistemin yüksək davamlılığı səbəbindən benzol üçün **əvəzetmə reaksiyaları səciyyəvidir** (birləşmə reaksiyalarına çətinliklə daxil olur):
    1. **Halogenləşmə (Katalitik elektrofil əvəzetmə):**
       $$C_6H_6 + Cl_2 \xrightarrow{FeCl_3} C_6H_5Cl (\text{xlorbenzol}) + HCl$$
       *(İşıqda qeyri-katalitik şəraitdə isə birləşmə gedir: heksaxlorsikloheksan $C_6H_6Cl_6$ yaranır).*
    2. **Nitrolaşma:** Nitrolaşdırıcı qarışıq ($HNO_3 + H_2SO_4(\text{qatı})$) ilə nitrobenzol alınır:
       $$C_6H_6 + HNO_3 \xrightarrow{H_2SO_4, t} C_6H_5NO_2 (\text{nitrobenzol}) + H_2O$$
       *(N.N.Zinin bu reaksiyadan alınan nitrobenzolu reduksiya edərək ilk dəfə sənaye miqyasında **anilin** almışdır).*
    3. **Alkilləşmə (Fridel-Krafts reaksiyası):** Toluolun sintezi:
       $$C_6H_6 + CH_3Cl \xrightarrow{AlCl_3} C_6H_5-CH_3 + HCl$$
    4. **Oksidləşmə:** Benzol kalium-permanqanat ($KMnO_4$) məhlulu ilə oksidləşmir. Lakin homoloqu olan toluolun yan zənciri oksidləşərək **benzoy turşusu** əmələ gətirir:
       $$C_6H_5-CH_3 + 3[O] \xrightarrow{KMnO_4} C_6H_5-COOH + H_2O$$
        `,
        keyFormulas: [
          {
                "formula": "C_n H_{2n-6}",
                "name": "Arenlərin ümumi formulu",
                "desc": "Benzol sırası aromatik karbohidrogenlər (n ≥ 6)"
          },
          {
                "formula": "C_6H_6 + HNO_3 \\xrightarrow{H_2SO_4} C_6H_5NO_2 + H_2O",
                "name": "Benzolun nitrolaşması",
                "desc": "Nitrobenzolun sintezi"
          }
    ],
        glossary: [
          {
                "term": "Aromatiklik",
                "definition": "Davamlı, delokallaşmış qapalı π-elektron sisteminə malik tsiklik molekulların xassəsi."
          },
          {
                "term": "Nitrolaşdırıcı qarışıq",
                "definition": "Elektrofil NO₂⁺ kationu yaradan qatı nitrat və sulfat turşularının qarışığı."
          }
    ],
        solvedExamples: [
          {
                "problem": "Niyə doymamış rabitəyə malik olmasına baxmayaraq benzol adi şəraitdə bromlu suyu rəngsizləşdirmir?",
                "solution": "Benzolda klassik mənada təcrid olunmuş ikiqat rabitələr yoxdur. 6 ədəd π-elektron vahid davamlı aromatik bulud əmələ gətirir. Bu simmetrik davamlı sistemin pozulması enerjicə əlverişsiz olduğundan benzol adi şəraitdə birləşmə reaksiyalarına girmir və bromlu suyu rəngsizləşdirmir."
          }
    ],
        miniQuiz: [
          {
                "q": "Benzol molekulunda karbon atomlarının hibridləşmə vəziyyəti hansıdır?",
                "options": [
                      "sp",
                      "sp²",
                      "sp³",
                      "dsp²"
                ],
                "a": 1,
                "exp": "Benzol halqasındakı bütün 6 karbon atomu sp² hibridləşmə vəziyyətindədir."
          },
          {
                "q": "Toluolun (metilbenzolun) KMnO₄ ilə oksidləşməsindən hansı aromatik turşu alınır?",
                "options": [
                      "Qarışqa turşusu",
                      "Benzoy turşusu",
                      "Sirkə turşusu",
                      "Ftal turşusu"
                ],
                "a": 1,
                "exp": "Yan zəncirdəki metil (-CH₃) qrupu oksidləşərək benzoy turşusuna (C₆H₅COOH) çevrilir."
          }
    ]
      },

  {
        id: 'kimya-10-6',
        subjectId: 'kimya',
        grade: 10,
        unit: 'Bölmə 6: Karbohidrogenlərin Təbii Mənbələri və Neft Emalı',
        unitOrder: 6,
        title: 'Təbii qaz, neftin fraksiyalı distilləsi, krekinq və riforminq',
        order: 6,
        readTimeMinutes: 17,
        difficulty: 2,
        summary: 'Təbii qaz və səmt qazları, xam neftin tərkibi, borulu sobada fraksiyalı qovulma, termiki və katalitik krekinq, benzinin oktan ədədi və kokslaşma.',
        theoryMarkdown: `
    ### Karbohidrogenlərin Təbii Mənbələri

    #### 1. Təbii Qaz və Səmt Qazları
    * **Təbii qaz:** $80-98\%$-i **metandan ($CH_4$)** ibarətdir. Qalan hissəsi etan, propan, butan və az miqdarda qeyri-üzvi qazlardır ($N_2, CO_2, H_2S$). Ən səmərəli və ekoloji təmiz yanacaqdır.
    * **Neftlə çıxan səmt qazları:** Metanla yanaşı çoxlu miqdarda etan, propan, butan və qaz benzini saxlayır. Fraksiyalara ayrılaraq qaz benzini, propan-butan qarışığı (məişət qaz balonları) və quru qaz əldə edilir.

    #### 2. Neft və Onun İlkin Emalı (Fiziki Fraksiyalı Distillə)
    Neft — müxtəlif karbohidrogenlərin (alkanlar, tsikloalkanlar, arenlər) mürəkkəb maye qarışığıdır.
    * İlkin emal borulu sobalarda və rektifikasiya kolonunda qaynayan fraksiyalara ayrılmadır:
      1. **Qaz fraksiyası:** $40^\circ C$-dək qaynayan karbohidrogenlər ($C_1 - C_4$).
      2. **Benzin fraksiyası:** $40 - 200^\circ C$ arasında qaynayan karbohidrogenlər ($C_5 - C_{11}$, avtomobil yanacağı).
      3. **Liqroin fraksiyası:** $150 - 250^\circ C$ ($C_8 - C_{14}$, traktor yanacağı və həlledici).
      4. **Kerosin (ağ neft) fraksiyası:** $180 - 300^\circ C$ ($C_{12} - C_{18}$, reaktiv təyyarə yanacağı).
      5. **Qazoyl (dizel yanacağı):** $270 - 350^\circ C$ (dizel mühərrikləri üçün).
      6. **Mazut:** Qovulmadan qalan ağır qalıqdır. Mazut vakuum altında distillə edilərək sürtkü yağları, vazelin, parafin və qara qudron (asfalt örtüyü) alınır.

    #### 3. Neftin Təkrar Emalı (Kimyəvi Proseslər)
    İlkin distillədə cəmi $15-20\%$ benzin alınır. Benzinin çıxımını və keyfiyyətini artırmaq üçün təkrar emal tətbiq olunur:
    * **Krekinq:** Ağır karbohidrogenlərin yüksək temperatur və təzyiqdə qızdırılaraq daha kiçik molekullu yanacaq fraksiyalarına parçalanmasıdır:
      $$C_{16}H_{34} \xrightarrow{t} C_8H_{18} (\text{benzin}) + C_8H_{16} (\text{okten})$$
      - *Termiki krekinq ($450-550^\circ C$):* Sərbəst radikal mexanizmi ilə gedir.
      - *Katalitik krekinq ($450-500^\circ C$, alümosilikat katalizatoru):* İon mexanizmi ilə gedir, şaxəli quruluşlu yüksək keyfiyyətli benzin verir.
    * **Riforminq (Aromatlaşdırma):** Xətti alkanların və tsikloalkanların aromatik karbohidrogenlərə (benzol, toluol) çevrilməsidir. Benzinin detonasiyaya qarşı davamlılığını artırır.
    * **Oktan Ədədi:** Motor benzininin detonasiyaya qarşı davamlılıq göstəricisidir. İzoktanın ($2,2,4$-trimetilpentan) oktan ədədi **100**, normal heptanın ($n-C_7H_{16}$) isə **0** qəbul edilmişdir.

    #### 4. Daş Kömürün Kokslaşdırılması
    Daş kömürün havasız mühitdə $1000-1100^\circ C$-də termiki parçalanmasıdır:
    * **Koks:** Metallurgiyada dəmirin reduksiyası üçün bərk təmiz karbon kütləsi.
    * **Daş kömür qətranı:** Aromatik birləşmələrin (benzol, fenol, naftalin) ən zəngin mənbəyi.
    * **Koks qazı:** Hidrogen ($H_2$) və metanla zəngin qaz qarışığı.
        `,
        keyFormulas: [
          {
                "formula": "\\text{Oktan ədədi (İzoktan)} = 100, \\quad \\text{Oktan ədədi (n-heptan)} = 0",
                "name": "Oktan şkalası",
                "desc": "Benzinin detonasiyaya davamlılıq etalonları"
          },
          {
                "formula": "C_{16}H_{34} \\xrightarrow{t, p} C_8H_{18} + C_8H_{16}",
                "name": "Krekinq prosesi",
                "desc": "Ağır karbohidrogenlərin benzin fraksiyasına parçalanması"
          }
    ],
        glossary: [
          {
                "term": "Krekinq",
                "definition": "Böyük molekullu neft fraksiyalarının yüksək temperaturda kiçik zəncirli molekullara parçalanması."
          },
          {
                "term": "Oktan ədədi",
                "definition": "Benzin yanacağının daxili yanma mühərrikində detonasiyaya (vaxtından əvvəl partlayışa) qarşı davamlılıq dərəcəsi."
          },
          {
                "term": "Kokslaşdırma",
                "definition": "Daş kömürün havasız şəraitdə 1000°C-də termiki emalı."
          }
    ],
        solvedExamples: [
          {
                "problem": "Niyə katalitik krekinqlə alınan benzin termiki krekinq benzinindən daha keyfiyyətli sayılır?",
                "solution": "Katalizator iştirakı ilə gedən krekinq prosesində xətti karbohidrogenlər şaxələnir (izomerləşir) və aromatikləşir. Şaxəli və aromatik karbohidrogenlərin oktan ədədi xətti olanlardan qat-qat yüksək olduğu üçün belə benzin mühərrikdə səssiz və detonasiyasız yanır."
          }
    ],
        miniQuiz: [
          {
                "q": "Təbii qazın əsas tərkib hissəsini hansı karbohidrogen təşkil edir?",
                "options": [
                      "Metan (80-98%)",
                      "Propan",
                      "Asetilen",
                      "Benzol"
                ],
                "a": 0,
                "exp": "Təbii qazın 80-98%-ni metan (CH₄) qazı təşkil edir."
          },
          {
                "q": "Neftin ilkin fraksiyalı distilləsi hansı prosesdir?",
                "options": [
                      "Kimyəvi parçalanma",
                      "Fiziki ayrılma (qaynama temperaturlarına görə)",
                      "Oksidləşmə",
                      "Polimerləşmə"
                ],
                "a": 1,
                "exp": "İlkin distillə zamanı heç bir kimyəvi rabitə qırılmır, maddələr yalnız qaynama temperaturlarına görə fraksiyalara ayrılır."
          }
    ]
      },

  {
        id: 'kimya-11-1',
        subjectId: 'kimya',
        grade: 11,
        unit: 'Bölmə 1: Doymuş və Çoxatomlu Spirtlər, Fenollar',
        unitOrder: 1,
        title: 'Biratomlu və çoxatomlu spirtlər, fenol və onların keyfiyyət reaksiyaları',
        order: 1,
        readTimeMinutes: 19,
        difficulty: 3,
        summary: 'Spirtlərin ümumi formulu CnH2n+1OH, hidrogen rabitəsi, metanol və etanol, çoxatomlu spirtlər (etilenqlikol, qliserin) və Cu(OH)2 təyini, fenol.',
        theoryMarkdown: `
    ### Spirtlər və Fenollar

    #### 1. Doymuş Biratomlu Spirtlər
    Karbohidrogen radikalı ilə birləşmiş bir hidroksil ($-OH$) qrupu saxlayan üzvi birləşmələrdir.
    * **Ümumi formulu:** $C_n H_{2n+1}OH$ və ya $R-OH$ ($n \ge 1$). Sadə efirlərlə ($R-O-R'$) siniflərarası izomerdir.
    * **Fiziki xassələri:** Hidroksil qrupları arasında möhkəm molekullararası **hidrogen rabitələri** yarandığından spirtlər arasında qaz nümayəndə yoxdur (metanol artıq mayedir) və qaynama temperaturları müvafiq alkanlardan qat-qat yüksəkdir. Metanol və etanol su ilə istənilən nisbətdə qarışır.
    * **Metanol ($CH_3OH$):** Ağacın quru qovulmasından və ya su qazından ($CO + 2H_2 \xrightarrow{t, p, kat} CH_3OH$) alınır. Çox güclü zəhərdir, 10-15 ml-i görmə sinirini kor edir, 30-50 ml-i ölümlə nəticələnir!
    * **Etanol ($C_2H_5OH$):** Qlükozanın qıcqırmasından ($C_6H_{12}O_6 \xrightarrow{\text{maya}} 2C_2H_5OH + 2CO_2\uparrow$) və etilenin hidratlaşmasından alınır.
    * **Kimyəvi xassələri:**
      - Aktiv metallarla reaksiyaya girərək alkoqolyatlar və $H_2$ əmələ gətirir ($2C_2H_5OH + 2Na \rightarrow 2C_2H_5ONa + H_2\uparrow$).
      - Molekuldaxili dehidratlaşma ($>140^\circ C$): Alken alınır ($C_2H_5OH \rightarrow C_2H_4 + H_2O$).
      - Molekullararası dehidratlaşma ($<140^\circ C$): Sadə efir alınır ($2C_2H_5OH \rightarrow C_2H_5-O-C_2H_5 + H_2O$).

    #### 2. Çoxatomlu Spirtlər
    Molekulunda iki və ya daha çox hidroksil qrupu saxlayan spirtlərdir:
    * **Etilenqlikol ($CH_2OH-CH_2OH$, etandiol-1,2):** İkiatomlu spirt, şirintəhər zəhərli maye. Suda məhlulu çox aşağı temperaturda donduğundan **antifriz** kimi istifadə olunur.
    * **Qliserin ($CH_2OH-CHOH-CH_2OH$, propantriol-1,2,3):** Üçatomlu şirintəhər özlü maye. Kosmetikada, dərmanlarda və partlayıcı nitroqliserin istehsalında istifadə olunur.
    * **Keyfiyyət Reaksiyası:** Çoxatomlu spirtlər təzə çökmüş mis(II) hidroksidlə ($Cu(OH)_2$) qarşılıqlı təsirdə olub çöküntünü həll edir və **şəffaf parlaq göy rəngli kompleks məhlul** əmələ gətirir.

    #### 3. Fenollar ($C_6H_5OH$)
    Hidroksil qrupu bilavasitə aromatik benzol halqası ilə birləşmiş birləşmələrdir.
    * **Xüsusiyyətləri:** Xarakterik iyli, zəhərli kristaldır (karbol turşusu). Benzol halqasının təsiri ilə $O-H$ rabitəsi zəifləyir, ona görə fenol spirtlərdən fərqli olaraq **zəif turşu xassəsi** göstərir və qələvilərlə reaksiyaya girir ($C_6H_5OH + NaOH \rightarrow C_6H_5ONa + H_2O$).
    * **Keyfiyyət reaksiyası:** Dəmir(III) xloridlə ($FeCl_3$) bənövşəyi rəng verir; bromlu su ilə ağ rəngli $2,4,6$-tribromfenol çöküntüsü əmələ gətirir.
        `,
        keyFormulas: [
          {
                "formula": "C_n H_{2n+1}OH",
                "name": "Biratomlu spirtlərin formulu",
                "desc": "Doymuş biratomlu spirtlərin homoloji sırası"
          },
          {
                "formula": "Cu(OH)_2 + \\text{Çoxatomlu spirt} \\rightarrow \\text{Parlaq göy rəngli məhlul}",
                "name": "Qliserinin təyini",
                "desc": "Mis(II) hidroksidlə çoxatomlu spirtlərin keyfiyyət reaksiyası"
          }
    ],
        glossary: [
          {
                "term": "Antifriz",
                "definition": "Aşağı donma temperaturuna malik daxili yanma mühərriklərinin soyutma mayesi (etilenqlikol məhlulu)."
          },
          {
                "term": "Fenolyat",
                "definition": "Fenolun qələvilərlə əmələ gətirdiyi duzabənzər birləşmə (məsələn, C₆H₅ONa)."
          }
    ],
        solvedExamples: [
          {
                "problem": "Sınaq şüşəsindəki qliserini etil spirtindən laboratoriyada necə fərqləndirmək olar?",
                "solution": "Hər iki sınaq şüşəsinə təzə hazırlanmış mavi rəngli mis(II) hidroksid (Cu(OH)₂) çöküntüsü əlavə edirik. Etil spirti ilə heç bir reaksiya baş vermir (çöküntü qalır). Qliserin olan sınaq şüşəsində isə çöküntü tam həll olaraq parlaq göy rəngli şəffaf məhlul əmələ gətirir."
          }
    ],
        miniQuiz: [
          {
                "q": "Çoxatomlu spirtlərin (qliserin, etilenqlikol) təyini üçün hansı reaktivdən istifadə edilir?",
                "options": [
                      "Bromlu su",
                      "Təzə çökmüş Cu(OH)₂",
                      "Dəmir(III) xlorid",
                      "Gümüş-güzgü reaktivi"
                ],
                "a": 1,
                "exp": "Çoxatomlu spirtlər Cu(OH)₂ ilə parlaq göy rəngli xelat kompleksi əmələ gətirir."
          },
          {
                "q": "Aşağıdakı spirtlərdən hansı hətta az miqdarda qəbul edildikdə belə tam korluğa və ölümə səbəb olan güclü zəhərdir?",
                "options": [
                      "Metanol (ağac spirti)",
                      "Etanol",
                      "Qliserin",
                      "Butanol"
                ],
                "a": 0,
                "exp": "Metanol (CH₃OH) orqanizmdə formaldehid və qarışqa turşusuna çevrilərək görmə sinirini məhv edən dəhşətli zəhərdir."
          }
    ]
      },

  {
        id: 'kimya-11-2',
        subjectId: 'kimya',
        grade: 11,
        unit: 'Bölmə 2: Aldehidlər və Ketonlar (Karbonil Birləşmələri)',
        unitOrder: 2,
        title: 'Karbonil qrupu, gümüş-güzgü reaksiyası və aseton',
        order: 2,
        readTimeMinutes: 17,
        difficulty: 3,
        summary: 'Aldehidlərin ümumi formulu CnH2nO, karbonil qrupu (>C=O), formaldehid və asetaldehid, \'gümüş güzgü\' və Cu(OH)2 ilə oksidləşmə, ketonlar.',
        theoryMarkdown: `
    ### Aldehidlər və Ketonlar

    #### 1. Karbonil Birləşmələrinin Quruluşu
    Tərkibində ikiqat rabitəli karbonil qrupu ($>C=O$) saxlayan üzvi maddələrdir:
    * **Aldehidlər:** Karbonil qrupu ən azı bir hidrogen atomu və bir karbohidrogen radikalı ilə birləşmişdir ($R-CH=O$). Ümumi formulu: **$C_n H_{2n} O$** ($n \ge 1$).
    * **Ketonlar:** Karbonil qrupu iki karbohidrogen radikalı ilə birləşmişdir ($R-CO-R'$). Ümumi formulu: **$C_n H_{2n} O$** ($n \ge 3$). Aldehidlərlə ketonlar siniflərarası izomerdirlər.

    #### 2. Mühüm Nümayəndələri
    * **Formaldehid (Qarışqa aldehidi, $HCHO$):** Kəskin iyli qazdır. $40\%$-li sulu məhlulu **formalin** adlanır (anatomik preparatların saxlanmasında və dezinfeksiyada istifadə olunur).
    * **Asetaldehid (Sirkə aldehidi, $CH_3CHO$):** Kəskin iyli, asan qaynayan mayedir.
    * **Aseton ($CH_3-CO-CH_3$, dimetilketon):** Ən sadə keton, xarakterik iyli uçucu maye, universal üzvi həlledici.

    #### 3. Aldehidlərin Kimyəvi Xassələri
    Karbonil qrupundakı hidrogen atomunun hesabına aldehidlər çox asanlıqla turşulara qədər oksidləşirlər:
    1. **"Gümüş-güzgü" Reaksiyası (Tollens reaktivi — Keyfiyyət reaksiyası):**
       Aldehidlər gümüş(I) oksidinin ammonyakda məhlulu ilə qızdırıldıqda sınaq şüşəsinin divarlarına parlaq güzgü təbəqəsi şəklində xalis gümüş çökür:
       $$R-CHO + Ag_2O \xrightarrow{NH_3, t} R-COOH + 2Ag\downarrow (\text{gümüş güzgü})$$
    2. **Mis(II) Hidroksidlə Oksidləşmə (Felinq reaktivi):**
       Mavi rəngli $Cu(OH)_2$ qızdırıldıqda əvvəlcə sarı mis(I) hidroksidə ($CuOH$), sonra isə kərpic-qırmızı rəngli mis(I) oksidə ($Cu_2O$) çevrilir:
       $$R-CHO + 2Cu(OH)_2 \xrightarrow{t} R-COOH + Cu_2O\downarrow (\text{kərpic-qırmızı}) + 2H_2O$$
    3. **Reduksiya (Hidrogenləşmə):** Aldehidlər hidrogenlə reduksiya olunduqda ilkin biratomlu spirtlər alınır:
       $$CH_3-CHO + H_2 \xrightarrow{Ni, t} CH_3-CH_2-OH$$
        `,
        keyFormulas: [
          {
                "formula": "C_n H_{2n} O",
                "name": "Aldehid və ketonların ümumi formulu",
                "desc": "Karbonil birləşmələrinin homoloji sırası"
          },
          {
                "formula": "R-CHO + 2[Ag(NH_3)_2]OH \\xrightarrow{t} R-COONH_4 + 2Ag\\downarrow + 3NH_3 + H_2O",
                "name": "Gümüş-güzgü reaksiyası",
                "desc": "Aldehidlərin əsas keyfiyyət analizi reaksiyası"
          }
    ],
        glossary: [
          {
                "term": "Formalin",
                "definition": "Formaldehidin kəskin iyli 40%-li sulu dezinfeksiyaedici məhlulu."
          },
          {
                "term": "Gümüş-güzgü reaksiyası",
                "definition": "Aldehidlərin gümüş(I) birləşmələrini metal gümüşə qədər reduksiya etməsi reaksiyası."
          }
    ],
        solvedExamples: [
          {
                "problem": "4.4 qram asetaldehid ($CH_3CHO$) gümüş-güzgü reaksiyasına daxil olduqda neçə qram təmiz metal gümüş ayrılar ($M(CH_3CHO)=44, A_r(Ag)=108$)?",
                "solution": "Tənlik: CH₃CHO + Ag₂O → CH₃COOH + 2Ag↓. ν(aldehid) = 4.4 / 44 = 0.1 mol. Tənliyə görə 1 mol aldehiddən 2 mol Ag ayrılır. Deməli, ν(Ag) = 0.2 mol. m(Ag) = 0.2 × 108 = 21.6 qram gümüş çökər."
          }
    ],
        miniQuiz: [
          {
                "q": "Aldehidlərin sınaq şüşəsində mis(II) hidroksidlə (Cu(OH)₂) qızdırılması zamanı hansı rəngli çöküntü alınır?",
                "options": [
                      "Ağ",
                      "Göy",
                      "Kərpic-qırmızı (Cu₂O)",
                      "Qara"
                ],
                "a": 2,
                "exp": "Aldehidlər Cu(OH)₂-ni kərpic-qırmızı rəngli Cu₂O çöküntüsünə qədər reduksiya edir."
          },
          {
                "q": "Formaldehidin 40%-li sulu məhlulu tibb və biologiyada necə adlanır?",
                "options": [
                      "Xloroform",
                      "Formalin",
                      "Aseton",
                      "Efirlər"
                ],
                "a": 1,
                "exp": "Formaldehidin 40%-li sulu məhlulu formalin adlanır."
          }
    ]
      },

  {
        id: 'kimya-11-3',
        subjectId: 'kimya',
        grade: 11,
        unit: 'Bölmə 3: Karbon Turşuları, Mürəkkəb Efirlər və Yağlar',
        unitOrder: 3,
        title: 'Karbon turşuları, efirləşmə reaksiyası, yağlar və sabun',
        order: 3,
        readTimeMinutes: 18,
        difficulty: 3,
        summary: 'Karbon turşularının karboksil qrupu (-COOH), qarışqa və sirkə turşusu, ali yağ turşuları, efirləşmə reaksiyası, mürəkkəb efirlər, triqliseridlər və sabunlaşma.',
        theoryMarkdown: `
    ### Karbon Turşuları, Mürəkkəb Efirlər və Yağlar

    #### 1. Karbon Turşuları
    Molekulunda karbohidrogen radikalı ilə birləşmiş bir və ya bir neçə karboksil ($-COOH$) qrupu saxlayan birləşmələrdir.
    * **Doymuş birəsaslı karbon turşuları:** Ümumi formulu: **$C_n H_{2n+1}COOH$** və ya $C_n H_{2n} O_2$ ($n \ge 1$). Mürəkkəb efirlərlə siniflərarası izomerdirlər.
    * **Qarışqa turşusu ($HCOOH$):** Molekulunda həm karboksil, həm də aldehid qrupu saxlayır! Buna görə karbon turşuları arasında **yeganə turşudur ki, "gümüş-güzgü" reaksiyası verir**.
    * **Sirkə turşusu ($CH_3COOH$):** $70-80\%$-li məhlulu sirkə esensiyası, $3-9\%$-li məhlulu süfrə sirkəsidir. Təmiz susuz sirkə turşusu $16.6^\circ C$-də buzabənzər kristallara çevrilir ("buzlu sirkə turşusu").
    * **Ali Karbon Turşuları (Yağ turşuları):**
      - Doymuş: Palmitin turşusu ($C_{15}H_{31}COOH$), Stearin turşusu ($C_{17}H_{35}COOH$). Bərk maddələrdir.
      - Doymamış: Olein turşusu ($C_{17}H_{33}COOH$, bir ikiqat rabitəli), Linol ($C_{17}H_{31}COOH$), Linolen ($C_{17}H_{29}COOH$). Mayedirlər.

    #### 2. Mürəkkəb Efirlər və Efirləşmə Reaksiyası
    Karbon turşuları ilə spirtlərin qatı sulfat turşusu iştirakında qarşılıqlı təsirindən **mürəkkəb efirlər** və su alınır:
    $$R-COOH + R'-OH \xrightleftharpoons{H_2SO_4, t} R-COO-R' (\text{mürəkkəb efir}) + H_2O$$
    * Mürəkkəb efirlər xoş meyvə və çiçək ətrinə malik uçucu mayelərdir (ətiriyyatda və qida essensiyalarında geniş istifadə olunur).
    * Efirin su ilə parçalanması prosesi **hidroliz** adlanır (efirləşmənin əksi).

    #### 3. Yağlar (Triqliseridlər) və Sabun
    Yağlar — üçatomlu spirt olan qliserin ilə ali karbon turşularının əmələ gətirdiyi mürəkkəb efirlərdir.
    * **Bərk yağlar (Heyvan mənşəli):** Tərkibində doymuş turşuların (palmitin, stearin) qalıqları üstünlük təşkil edir (kərə yağı, qoyun piyi).
    * **Maye yağlar (Bitki mənşəli — duru yağlar):** Tərkibində doymamış turşuların (olein) qalıqları üstünlük təşkil edir (günəbaxan, zeytun, qarğıdalı yağı).
    * **Maye yağların bərkidilməsi (Hidrogenləşmə):** Doymamış maye yağlara $Ni$ katalizatoru ilə hidrogen birləşdirdikdə doymuş bərk piyə (**marqarin**) çevrilir.
    * **Sabunlaşma reaksiyası:** Yağların qələvilərlə ($NaOH, KOH$) hidrolizindən qliserin və ali turşuların duzları — **sabunlar** alınır:
      - $C_{17}H_{35}COONa$ — Bərk sabun (natrium duzu).
      - $C_{17}H_{35}COOK$ — Maye sabun (kalium duzu).
        `,
        keyFormulas: [
          {
                "formula": "R-COOH + R'-OH \\rightleftharpoons R-COOR' + H_2O",
                "name": "Efirləşmə reaksiyası",
                "desc": "Turşu və spirtdən mürəkkəb efirin alınması"
          },
          {
                "formula": "C_{17}H_{35}COONa \\text{ (bərk sabun)}, \\quad C_{17}H_{35}COOK \\text{ (maye sabun)}",
                "name": "Sabunların formulları",
                "desc": "Stearin turşusunun natrium və kalium duzları"
          }
    ],
        glossary: [
          {
                "term": "Efirləşmə",
                "definition": "Karbon turşusu ilə spirtin reaksiyasından mürəkkəb efir və suyun əmələ gəlməsi."
          },
          {
                "term": "Sabunlaşma",
                "definition": "Yağların qələvi mühitdə hidroliz olunaraq sabun və qliserin verməsi prosesi."
          },
          {
                "term": "Triqliserid",
                "definition": "Qliserin spirtinin üç yağ turşusu qalığı ilə birləşməsindən yaranan təbii yağ molekulu."
          }
    ],
        solvedExamples: [
          {
                "problem": "Niyə qarışqa turşusu ($HCOOH$) digər karbon turşularından fərqli olaraq gümüş-güzgü reaksiyası verir?",
                "solution": "Qarışqa turşusunun molekul quruluşuna diqqət yetirdikdə (H-C(=O)-OH), onun tərkibində karboksil qrupu ilə yanaşı aldehid qrupunun da (H-C=O) olduğu görünür. Məhz bu aldehid qrupunun olması ona aldehidlər kimi gümüş(I) oksidini metal gümüşə qədər reduksiya etmək qabiliyyəti verir."
          }
    ],
        miniQuiz: [
          {
                "q": "Stearin turşusunun natrium duzu (C₁₇H₃₅COONa) məişətdə nə kimi istifadə olunur?",
                "options": [
                      "Sürtkü yağı",
                      "Bərk tualet sabunu",
                      "Sintetik kauçuk",
                      "Yeyinti boyası"
                ],
                "a": 1,
                "exp": "Ali karbon turşularının natrium duzları adi bərk sabunlardır."
          },
          {
                "q": "Bitki mənşəli maye yağları bərk marqarinə çevirmək üçün hansı kimyəvi proses tətbiq edilir?",
                "options": [
                      "Xlorlaşma",
                      "Katalitik hidrogenləşmə",
                      "Hidroliz",
                      "Polimerləşmə"
                ],
                "a": 1,
                "exp": "Maye yağlardakı doymamış olein turşusu qalıqlarına H₂ birləşdirərək doymuş bərk piyə çevirirlər."
          }
    ]
      },

  {
        id: 'kimya-11-4',
        subjectId: 'kimya',
        grade: 11,
        unit: 'Bölmə 4: Karbohidratlar (Sadə və Mürəkkəb Şəkərlər)',
        unitOrder: 4,
        title: 'Monosaxaridlər, saxaroza, nişasta və sellüloza',
        order: 4,
        readTimeMinutes: 18,
        difficulty: 2,
        summary: 'Karbohidratların ümumi formulu Cn(H2O)m, qlükozanın ikili təbiəti, fotosintez, qıcqırma növləri, saxarozanın hidrolizi, nişastanın yodla təyini və sellüloza lifləri.',
        theoryMarkdown: `
    ### Karbohidratlar (Şəkərlər)

    #### 1. Karbohidratların Təsnifatı
    Ümumi formulu əksər nümayəndələr üçün **$C_n(H_2O)_m$** kimidir. Təbiətdə yaşıl bitkilərdə **fotosintez** nəticəsində yaranır:
    $$6CO_2 + 6H_2O \xrightarrow{h\nu, \text{xlorofil}} C_6H_{12}O_6 + 6O_2\uparrow$$
    1. **Monosaxaridlər:** Hidrolizə uğramayan ən sadə karbohidratlardır: Qlükoza ($C_6H_{12}O_6$), Fruktoza ($C_6H_{12}O_6$), Riboza ($C_5H_{10}O_5$), Dezoksiriboza ($C_5H_{10}O_4$).
    2. **Disaxaridlər:** Hidroliz olunduqda 2 monosaxarid molekulu verirlər: Saxaroza ($C_{12}H_{22}O_{11}$, çuğundur və qamış şəkəri), Maltoza.
    3. **Polisaxaridlər:** Yüzlərlə və minlərlə monosaxarid halqalarından ibarət polimerlərdir: Nişasta ($(C_6H_{10}O_5)_n$) və Sellüloza ($(C_6H_{10}O_5)_n$).

    #### 2. Qlükoza ($C_6H_{12}O_6$) — Üzüm Şəkəri
    * **Quruluşu:** Həm çoxatomlu spirt (5 ədəd $-OH$ qrupu), həm də aldehiddir (1 ədəd $-CHO$ qrupu) — **aldehidospirtdir**.
    * **Xassələri:**
      - $Cu(OH)_2$ ilə otaq temperaturunda parlaq göy məhlul verir (çoxatomlu spirt kimi).
      - Qızdırıldıqda $Cu(OH)_2$ və ya $Ag_2O$ ilə qırmızı $Cu_2O$ və gümüş güzgü çökdürür (aldehid kimi).
    * **Qıcqırma Növləri:**
      - *Spirtə qıcqırma:* $C_6H_{12}O_6 \xrightarrow{\text{maya}} 2C_2H_5OH + 2CO_2\uparrow$
      - *Süd turşusuna qıcqırma:* $C_6H_{12}O_6 \xrightarrow{\text{bakteriyalar}} 2CH_3-CH(OH)-COOH$ (qatıq və turşu hazırlanmasında).

    #### 3. Disaxaridlər: Saxaroza ($C_{12}H_{22}O_{11}$)
    Qlükoza və fruktoza qalıqlarından təşkil olunmuşdur. Tərkibində sərbəst aldehid qrupu olmadığından **"gümüş-güzgü" reaksiyası vermir** (qeyri-reduksiyaedici şəkərdir). Turş mühitdə hidroliz olunduqda bərabər miqdarda qlükoza və fruktoza qarışığı (süni bal) alınır.

    #### 4. Polisaxaridlər: Nişasta və Sellüloza ($(C_6H_{10}O_5)_n$)
    Hər ikisi qlükoza qalıqlarından təşkil olunmuş təbii polimerlərdir:
    * **Nişasta:** Bitkilərdə ehtiyat qida maddəsidir (kartof, buğda). $\alpha$-qlükoza qalıqlarından ibarətdir, spiralvari quruluşludur.
      - **Keyfiyyət reaksiyası:** Yod məhlulu ($I_2$) ilə xarakterik **tünd göy rəng** verir (qızdırıldıqda itir, soyuduqda bərpa olur).
    * **Sellüloza (Kletçatka):** Bitki hüceyrələrinin qılafını (skeletini) təşkil edir (pambıqda $98\%$, oduncaqda $50\%$). $\beta$-qlükoza qalıqlarından təşkil olunmuş xətti möhkəm lifli polimerdir. Kağız, pambıq parça, süni ipək (viskoz) və tüstüsüz barıt (piroksilin) istehsalında istifadə edilir.
        `,
        keyFormulas: [
          {
                "formula": "(C_6H_{10}O_5)_n + nH_2O \\xrightarrow{H^+, t} nC_6H_{12}O_6",
                "name": "Nişastanın hidrolizi",
                "desc": "Polisaxaridin tam hidrolizindən qlükoza alınması"
          },
          {
                "formula": "\\text{Nişasta} + I_2 \\rightarrow \\text{Tünd göy rəng}",
                "name": "Nişastanın yodla təyini",
                "desc": "Nişastanın əsas keyfiyyət reaksiyası"
          }
    ],
        glossary: [
          {
                "term": "Fotosintez",
                "definition": "Günəş işığı enerjisi hesabına xlorofilli bitkilərdə CO₂ və sudan qlükozanın sintezi."
          },
          {
                "term": "Aldehidospirt",
                "definition": "Molekulunda həm spirt (-OH), həm də aldehid (-CHO) funksional qrupları saxlayan maddə (qlükoza)."
          }
    ],
        solvedExamples: [
          {
                "problem": "Kartof kəsiyinin üzərinə bir damcı yod məhlulu damcılatdıqda nə baş verir və bu nəyi sübut edir?",
                "solution": "Kartof kəsiyinin üzərində dərhal tünd göy rəngli ləkə yaranır. Bu reaksiya kartofun tərkibində külli miqdarda ehtiyat qida maddəsi olan nişastanın olduğunu sübut edir."
          }
    ],
        miniQuiz: [
          {
                "q": "Qlükoza molekulunda eyni vaxtda hansı funksional qruplar mövcuddur?",
                "options": [
                      "Yalnız hidroksil (-OH)",
                      "5 ədəd hidroksil (-OH) və 1 ədəd aldehid (-CHO)",
                      "Karboksil (-COOH) və amin (-NH₂)",
                      "Yalnız keton qrupu"
                ],
                "a": 1,
                "exp": "Qlükoza aldehidospirtdir: 5 hidroksil və 1 aldehid qrupuna malikdir."
          },
          {
                "q": "Nişastanın varlığını təyin etmək üçün hansı məhluldan istifadə edilir?",
                "options": [
                      "Gümüş nitrat",
                      "Yod məhlulu (göy rəng)",
                      "Xlorid turşusu",
                      "Qələvi"
                ],
                "a": 1,
                "exp": "Yod məhlulu nişasta ilə parlaq tünd göy rəngli kompleks verir."
          }
    ]
      },

  {
        id: 'kimya-11-5',
        subjectId: 'kimya',
        grade: 11,
        unit: 'Bölmə 5: Azotlu Üzvi Birləşmələr: Aminlər, Amin Turşuları və Zülallar',
        unitOrder: 5,
        title: 'Aminlər, anilin, amfoter amin turşuları, peptid rabitəsi və zülallar',
        order: 5,
        readTimeMinutes: 19,
        difficulty: 3,
        summary: 'Üzvi əsaslar kimi aminlər, anilin (Zinin reaksiyası), amfoter amin turşuları, peptid rabitəsi (-CO-NH-), zülalların 4 dərəcəli quruluşu və rəngli reaksiyaları.',
        theoryMarkdown: `
    ### Azotlu Üzvi Birləşmələr və Zülallar

    #### 1. Aminlər
    Ammonyak molekulundakı ($NH_3$) hidrogen atomlarının karbohidrogen radikalları ilə əvəz olunmasından yaranan üzvi törəmələrdir ($R-NH_2$).
    * Azot atomunda bölünməmiş elektron cütü olduğuna görə aminlər **üzvi əsaslardır** (turşularla duzlar əmələ gətirirlər: $CH_3NH_2 + HCl \rightarrow [CH_3NH_3]Cl$).
    * **Anilin (Fenilamin, $C_6H_5NH_2$):** Ən sadə aromatik amindir. Yağabənzər zəhərli mayedir. İlk dəfə N.N.Zinin tərəfindən nitrobenzolun reduksiyasından alınmışdır:
      $$C_6H_5NO_2 + 3(NH_4)_2S \rightarrow C_6H_5NH_2 + 6NH_3 + 3S + 2H_2O$$
      Anilin sintetik boyaqlar (anilin boyaları) və dərman preparatları istehsalının təməl xammalıdır.

    #### 2. Amin Turşuları
    Molekulunda eyni vaxtda əsasi xassəli **amin qrupu ($-NH_2$)** və turşu xassəli **karboksil qrupu ($-COOH$)** saxlayan heterofunksional birləşmələrdir ($NH_2-CH(R)-COOH$).
    * **Amfoter xassəsi:** Həm turşularla, həm də qələvilərlə qarşılıqlı təsirdə olurlar. Sulu məhlulda daxili dipolyar ion (svitter-ion) halında olurlar:
      $$NH_2-CH_2-COOH + HCl \rightarrow [Cl^- \cdot ^+NH_3-CH_2-COOH]$$
      $$NH_2-CH_2-COOH + NaOH \rightarrow NH_2-CH_2-COONa + H_2O$$
    * **Polikondensləşmə və Peptid Rabitəsi:** $\alpha$-amin turşuları bir-biri ilə qarşılıqlı təsirdə olduqda bir molekulun karboksil qrupu ilə digərinin amin qrupu arasında su ayrılır və **peptid (amid) rabitəsi** ($-CO-NH-$) yaranır:
      $$H_2N-CH_2-COOH + H_2N-CH_2-COOH \rightarrow H_2N-CH_2-\mathbf{CO-NH}-CH_2-COOH + H_2O$$

    #### 3. Zülallar (Proteinlər) — Həyatın Əsası
    Zülallar — müxtəlif $\alpha$-amin turşularının (20 növ standart amin turşusu) peptid rabitələri ilə birləşməsindən yaranmış yüksəkmolekullu təbii biopolimerlərdir.
    * **Quruluş səviyyələri:**
      1. *Birincili quruluş:* Amin turşusu qalıqlarının ciddi müəyyən ardıcıllıqla peptid rabitələri ilə xətti düzülüşü (zülalın genetik kodu).
      2. *İkincili quruluş:* Peptid zəncirinin hidrogen rabitələri hesabına $\alpha$-spiral və ya $\beta$-qatlara bükülməsi.
      3. *Üçüncülü quruluş:* Spiralın fəzada yumaq (qlobula) şəkilli forması (disulfid $-S-S-$, ion və hidrofob rabitələr hesabına).
      4. *Dördüncülü quruluş:* Bir neçə qlobulanın vahid funksional kompleksdə birləşməsi (məsələn, qanın hemoqlobini 4 zəncirdən ibarətdir).
    * **Denaturasiya:** Temperaturun, şüalanmanın, ağır metalların ($Pb, Hg$) və ya qatı turşuların təsiri ilə zülalın ikincili, üçüncülü və dördüncülü quruluşunun dağılması (məsələn, yumurtanın bişməsi).
    * **Zülalların Rəngli Keyfiyyət Reaksiyaları:**
      - *Biuret reaksiyası:* Zülala $CuSO_4$ və $NaOH$ ilə təsir etdikdə peptid rabitələri hesabına **bənövşəyi rəng** alınır.
      - *Ksantoprotein reaksiyası:* Aromatik amin turşusu saxlayan zülallara qatı $HNO_3$ ilə təsir etdikdə **sarı rəng** yaranır.
        `,
        keyFormulas: [
          {
                "formula": "-CO-NH-",
                "name": "Peptid rabitəsi",
                "desc": "Amin turşusu qalıqlarını zülal zəncirində bağlayan əsas rabitə"
          },
          {
                "formula": "\\text{Zülal} + \\text{qatı } HNO_3 \\xrightarrow{t} \\text{Sarı rəng}",
                "name": "Ksantoprotein reaksiyası",
                "desc": "Aromatik amin turşularının nitrat turşusu ilə keyfiyyət analizi"
          }
    ],
        glossary: [
          {
                "term": "Peptid rabitəsi",
                "definition": "Bir amin turşusunun -COOH qrupu ilə digərinin -NH₂ qrupu arasında su ayrılması ilə yaranan -CO-NH- qrupu."
          },
          {
                "term": "Denaturasiya",
                "definition": "Xarici amillərin təsiri ilə zülalın ali (2-ci, 3-cü, 4-cü) fəza quruluşunun dönməz dağılması."
          },
          {
                "term": "Amfoterlik",
                "definition": "Molekulun eyni vaxtda həm turşu, həm də əsas xassəsi daşıması."
          }
    ],
        solvedExamples: [
          {
                "problem": "İki molekul qlisindən ($NH_2-CH_2-COOH$) dipeptid əmələ gəlməsi tənliyini yazın və peptid rabitəsini göstərin.",
                "solution": "NH₂-CH₂-COOH + NH₂-CH₂-COOH → NH₂-CH₂-CO-NH-CH₂-COOH + H₂O. Yaranan birləşmə qlisil-qlisin adlanır və mərkəzində -CO-NH- peptid qrupu saxlayır."
          }
    ],
        miniQuiz: [
          {
                "q": "Zülallarda peptid rabitəsini təyin etmək üçün hansı rəngli reaksiya tətbiq olunur?",
                "options": [
                      "Biuret reaksiyası (bənövşəyi rəng)",
                      "Gümüş-güzgü reaksiyası",
                      "Yod reaksiyası",
                      "Neytrallaşma"
                ],
                "a": 0,
                "exp": "Qələvi mühitdə CuSO₄ təsiri ilə peptid rabitələri bənövşəyi rəngli biuret kompleksi verir."
          },
          {
                "q": "Zülalların yüksək temperatur və ya ağır metal duzlarının təsiri ilə təbii quruluşunun dağılması necə adlanır?",
                "options": [
                      "Hidroliz",
                      "Denaturasiya",
                      "Polimerləşmə",
                      "Esterifikasiya"
                ],
                "a": 1,
                "exp": "Zülalın fəza konfiqurasiyasının dağılması prosesi denaturasiya adlanır."
          }
    ]
      },

  {
        id: 'kimya-11-6',
        subjectId: 'kimya',
        grade: 11,
        unit: 'Bölmə 6: Yüksəkmolekullu Birləşmələr (Polimerlər) və Kimya Sənayesi',
        unitOrder: 6,
        title: 'Sintetik polimerlər, plastik kütlələr, liflər və yaşıl kimya',
        order: 6,
        readTimeMinutes: 17,
        difficulty: 2,
        summary: 'Polimerləşmə və polikondensləşmə reaksiyaları, termoplastik və termoreaktiv plastiklər, təbii/süni/sintetik liflər (kapron, lavsan) və Yaşıl kimya.',
        theoryMarkdown: `
    ### Yüksəkmolekullu Birləşmələr (Polimerlər)

    #### 1. Yüksəkmolekullu Birləşmələrin Əsas Anlayışları
    Polimerlər — bir-biri ilə kimyəvi rabitələrlə birləşmiş minlərlə təkrarlanan elementar manqadan ibarət nəhəng molekul kütləsinə ($10^4 - 10^7$) malik maddələrdir:
    * **Monomer:** Polimeri əmələ gətirən ilkin kiçikmolekullu maddə.
    * **Elementar manqa:** Polimer zəncirində dövri təkrarlanan qrup.
    * **Polimerləşmə dərəcəsi ($n$):** Makromolekuldakı monomer qalıqlarının sayıdır.
    * **Sintez üsulları:**
      1. *Polimerləşmə:* İkiqat rabitələrin qırılması hesabına əlavə maddə ayrılmadan monomerlərin birləşməsi (Polietilen, Polipropilen, Teflon, Polistirol).
      2. *Polikondensləşmə:* Monomerlərin birləşməsi zamanı kiçikmolekullu əlavə maddənin (su $H_2O$, spirt, $HCl$) ayrılması ilə gedən proses (Lavsan, Kapron, Fenolformaldehid qətranı).

    #### 2. Plastik Kütlələr (Plastmaslar)
    * **Termoplastik plastiklər:** Qızdırıldıqda yumşalır, forma alır, soyuduqda bərkiyir və bu proses dəfələrlə təkrar oluna bilir (təkrar emala yararlıdır: Polietilen, Polipropilen, Polivinilxlorid - PVC, Pleksiklas).
    * **Termoreaktiv plastiklər:** İlk dəfə qızdırıldıqda əriyib forma alır, lakin sonradan zəncirlər bir-biri ilə kimyəvi bağlanaraq fəza toru yaradır; sonrakı qızdırmada ərimir, yalnız kömürləşir (təkrar emal olunmur: Fenolformaldehid, Epoksid qətranları).
    * **Teflon (Politetraflüoretilen, $(-CF_2-CF_2-)_n$):** "Üzvi platin" adlanır. Hətta qızmar zər suyuna belə davamlıdır, sürtünmə əmsalı çox aşağıdır (tavalarda yapışmayan örtük kimi).

    #### 3. Kimyəvi Liflər
    * **Təbii liflər:** Pambıq, kətan (sellüloza mənşəli); İpək, yun (zülal mənşəli).
    * **Süni liflər:** Təbii polimerlərin (əsasən sellülozanın) kimyəvi emalından alınır: Viskoz ipəyi, Asetat ipəyi.
    * **Sintetik liflər:** Neft-qaz karbohidrogenlərindən tam sintetik yolla sintez olunan polimerlərdir:
      - *Kapron (Poliamid lifi):* Aminokapron turşusunun polikondensləşməsindən alınır. Çox yüksək mexaniki möhkəmliyə və sürtünməyə davamlılığa malikdir (kanatlar, balıq torları, paraşütlər).
      - *Lavsan (Poliefir lifi):* Tereftal turşusu ilə etilenqlikolun polikondensləşməsindən alınır. Qırışmır, möhkəmdir, yuna bənzəyir.

    #### 4. "Yaşıl Kimya" (Green Chemistry) və Ətraf Mühit
    Müasir kimya sənayesinin əsas prioriteti tullantısız və təbiətə zərərsiz texnologiyaların tətbiqidir:
    * Bərpa olunan xammallardan istifadə.
    * Bioloji parçalanan (biodegradable) polimerlərin istehsalı.
    * Plastik tullantıların təkrar emalı (resayklinq).
    * Zəhərli üzvi həlledicilərin sudan və ya superkritik $CO_2$-dən istifadə ilə əvəz edilməsi.
        `,
        keyFormulas: [
          {
                "formula": "n CF_2=CF_2 \\xrightarrow{p, t, kat} (-CF_2-CF_2-)_n",
                "name": "Teflonun polimerləşməsi",
                "desc": "Politetraflüoretilenin alınması reaksiyası"
          },
          {
                "formula": "M = n \\cdot M_{\\text{manqa}}",
                "name": "Polimerin molekul kütləsi",
                "desc": "Polimerləşmə dərəcəsi ilə manqanın molyar kütləsinin hasili"
          }
    ],
        glossary: [
          {
                "term": "Termoplastiklik",
                "definition": "Polimerin qızdırıldıqda yumşalma və soyuduqda bərkimə xassəsini dəfələrlə saxlama qabiliyyəti."
          },
          {
                "term": "Polikondensləşmə",
                "definition": "Polimerlə yanaşı su və ya başqa kiçikmolekullu maddənin ayrılması ilə gedən sintez prosesi."
          },
          {
                "term": "Yaşıl kimya",
                "definition": "Tullantıları minimuma endirən, enerjiyə qənaət edən və ekoloji təmiz kimyəvi istehsal fəlsəfəsi."
          }
    ],
        solvedExamples: [
          {
                "problem": "Viskoz lifi ilə Kapron lifi arasındakı təsnifat fərqini izah edin.",
                "solution": "Viskoz lifi süni lifdir, çünki o hazır təbii polimer olan sellülozanın kimyəvi emalından alınır. Kapron isə tam sintetik lifdir, çünki o neft məhsullarından sintetik yolla alınan monomerin (aminokapron turşusu) polikondensləşməsindən sintez olunur."
          }
    ],
        miniQuiz: [
          {
                "q": "Qızdırıldıqda əriyən, forma alan və soyuduqda bərkiyən təkrar emala yararlı polimerlər necə adlanır?",
                "options": [
                      "Termoreaktiv",
                      "Termoplastik",
                      "Vulkanlaşmış",
                      "Təbii zülallar"
                ],
                "a": 1,
                "exp": "Bu xassəyə malik polimerlər termoplastiklər adlanır (məsələn, polietilen)."
          },
          {
                "q": "Kimya sənayesində təbiəti çirkləndirməyən tullantısız və bioparçalanan texnologiyaların inkişafı hansı konsepsiya adlanır?",
                "options": [
                      "Ağır metallurgiya",
                      "Yaşıl kimya (Green Chemistry)",
                      "Termiki krekinq",
                      "Riforminq"
                ],
                "a": 1,
                "exp": "Ətraf mühiti qoruyan ekoloji təmiz kimyəvi istehsal Yaşıl kimya adlanır."
          }
    ]
      }
,

  // =========================================================================
  // 5. BİOLOGİYA (AR Elm və Təhsil Nazirliyi e-Dərslik: 6, 7, 8, 9, 10, 11 - 33 Bölmə)
  // =========================================================================
  {
      id: 'biologiya-6-1',
      subjectId: 'biologiya',
      grade: 6,
      unit: 'Bölmə 1: Canlı Orqanizmlərin Quruluşu və Tədqiqat Metodları',
      unitOrder: 1,
      title: 'Canlıların əsas xassələri və mikroskopla tanışlıq',
      order: 1,
      readTimeMinutes: 14,
      difficulty: 1,
      summary: 'Biologiyanın tədqiqat obyektləri, canlıların xassələri (qidalanma, tənəffüs, ifrazat, böyümə, çoxalma), böyüdücü cihazlar: lupa və mikroskop.',
      theoryMarkdown: `
  ### Canlı Orqanizmlər və Onların Öyrənilməsi
  Biologiya (yunanca *bios* — həyat, *logos* — elm) canlı təbiət haqqında elmdir.

  #### 1. Canlıların Əsas Xassələri
  Bütün canlı orqanizmləri cansız təbiətdən fərqləndirən mühüm həyati xassələr:
  * **Hüceyrəvi quruluş:** Viruslardan başqa bütün canlılar hüceyrələrdən təşkil olunmuşdur.
  * **Maddələr və enerji mübadiləsi:** Qidalanma, tənəffüs və ifrazat prosesləri.
  * **Qıcıqlanma və hərəkət:** Ətraf mühit dəyişikliklərinə cavab vermək reaksiyası.
  * **Böyümə və inkişaf:** Ölçülərin böyüməsi və keyfiyyət dəyişiklikləri.
  * **Çoxalma və irsiyyət:** Özünəbənzər nəsillər törətmək və əlamətləri nəslə ötürmək.

  #### 2. Böyüdücü Cihazlar: Lupa və İşıq Mikroskopu
  * **Əl lupası:** Əşyanı 2-5 dəfə, ştativli lupa 10-25 dəfə böyüdür.
  * **İşıq mikroskopu:** Əsas hissələri: tubus, okulyar (gözlə baxılan linza), obyektiv (əşyaya tərəf yönələn linza), əşya masacığı, güzgü və vintlər.
  * **Böyütmə dərəcəsi:** Okulyardakı rəqəmin obyektivdəki rəqəmə hasilinə bərabərdir:
    $$\	ext{Böyütmə} = \	ext{Okulyar} \times \	ext{Obyektiv}$$
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Böyütmə} = N_{\\\text{okulyar}} \\times N_{\\\text{obyektiv}}",
              "name": "Mikroskopun böyütmə düsturu",
              "desc": "Görüntünün neçə dəfə böyüdülməsini təyin edir"
        }
  ],
      glossary: [
        {
              "term": "Hüceyrə",
              "definition": "Bütün canlıların ən kiçik quruluş, funksional və inkişaf vahidi."
        },
        {
              "term": "Tubus",
              "definition": "Mikroskopun okulyar və obyektiv linzalarını saxlayan metal borusu."
        }
  ],
      solvedExamples: [
        {
              "problem": "Okulyarın böyütməsi 15×, obyektivin böyütməsi 40× olan mikroskop hüceyrəni neçə dəfə böyüdər?",
              "solution": "Böyütmə = 15 × 40 = 600 dəfə."
        }
  ],
      miniQuiz: [
        {
              "q": "Aşağıdakılardan hansı bütün canlılara aid əsas xassə deyil?",
              "options": [
                    "Hüceyrəvi quruluş",
                    "Maddələr mübadiləsi",
                    "Sərbəst qanadlarla uçma",
                    "Çoxalma"
              ],
              "a": 2,
              "exp": "Uçmaq yalnız bəzi heyvanlara xasdır, bütün canlıların universal xassəsi deyil."
        },
        {
              "q": "Okulyarı 10× və obyekti 20× olan mikroskop təsviri neçə dəfə böyüdür?",
              "options": [
                    "30 dəfə",
                    "200 dəfə",
                    "100 dəfə",
                    "2000 dəfə"
              ],
              "a": 1,
              "exp": "Böyütmə = 10 × 20 = 200 dəfə."
        }
  ]
    },

  {
      id: 'biologiya-6-2',
      subjectId: 'biologiya',
      grade: 6,
      unit: 'Bölmə 2: Hüceyrə və Toxumalar',
      unitOrder: 2,
      title: 'Bitki hüceyrəsinin quruluşu və bitki toxumaları',
      order: 2,
      readTimeMinutes: 15,
      difficulty: 1,
      summary: 'Bitki hüceyrəsinin əsas hissələri (qılaf, sitoplazma, nüvə, vakuol, plastidlər) və bitki toxumaları: törədici, örtük, əsas, mexaniki, ötürücü.',
      theoryMarkdown: `
  ### Hüceyrə və Toxumalar

  #### 1. Bitki Hüceyrəsinin Quruluşu
  * **Qılaf (Sellüloza qat):** Hüceyrəyə forma və möhkəmlik verir.
  * **Sitoplazma:** Hüceyrənin daxili yarımmaye mühitidir, bütün orqanoidləri birləşdirir.
  * **Nüvə:** İrsi məlumatı saxlayır və hüceyrənin fəaliyyətini idarə edir.
  * **Vakuol:** Hüceyrə şirəsi ilə dolu qovuqcuqdur (su və həll olmuş şəkərlər, piqmentlər).
  * **Plastidlər (yalnız bitkilərdə):**
    - *Xloroplastlar:* Yaşıl plastidlərdir, fotosintezi həyata keçirir (tərkibində xlorofil var).
    - *Xromoplastlar:* Sarı, narıncı və qırmızı rəng verən plastidlərdir (payız yarpaqları, güllər, meyvələr).
    - *Leykoplastlar:* Rəngsiz plastidlərdir, ehtiyat nişasta toplayır (kartof yumruları).

  #### 2. Bitki Toxumaları
  Toxuma — eyni mənşəli, oxşar quruluşlu və eyni funksiyanı yerinə yetirən hüceyrələr və hüceyrəarası maddələr qrupudur.
  1. **Törədici toxuma (Meristema):** Daim bölünən cavan hüceyrələrdir, bitkinin böyüməsini təmin edir (kök və gövdənin uclarında).
  2. **Örtük toxuması:** Xaricdən orqanları örtür, quruma və zədələnmədən qoruyur (dərini və mantar).
  3. **Əsas toxuma (Assimilasiya və ehtiyat):** Fotosintez edir və ya qida toplayır.
  4. **Mexaniki toxuma:** Bitkiyə dayaq və elastiklik verir (liflər, daşlaşmış hüceyrələr).
  5. **Ötürücü toxuma:** Maddələrin daşınmasını təmin edir:
     - *Ksilena (Borular):* Su və mineral duzları kökdən yarpağa aparır (ölü hüceyrələr).
     - *Floema (Ələkvari borular):* Üzvi maddələri yarpaqdan kökə aparır (canlı hüceyrələr).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Ksilena} = \\\text{Su və minerallar (aşağıdan yuxarıya)}",
              "name": "Ksilena axını",
              "desc": "Borular vasitəsilə qalxan su axını"
        },
        {
              "formula": "\\\text{Floema} = \\\text{Üzvi maddələr (yuxarıdan aşağıya)}",
              "name": "Floema axını",
              "desc": "Ələkvari borularla üzvi qida axını"
        }
  ],
      glossary: [
        {
              "term": "Xlorofil",
              "definition": "Xloroplastlarda olan və işıq enerjisini udan yaşıl piqment."
        },
        {
              "term": "Toxuma",
              "definition": "Mənşəyi, quruluşu və funksiyası eyni olan hüceyrələr toplusu."
        }
  ],
      solvedExamples: [
        {
              "problem": "Bitkilərdə xloroplastlar hansı şəraitdə xromoplastlara çevrilir?",
              "solution": "Payızda temperaturun aşağı düşməsi və işığın azalması ilə xlorofil dağılır və yaşıl xloroplastlar sarı-qırmızı xromoplastlara çevrilir (yarpaqların saralması)."
        }
  ],
      miniQuiz: [
        {
              "q": "Bitki hüceyrəsində fotosintez prosesi hansı orqanoiddə baş verir?",
              "options": [
                    "Nüvə",
                    "Vakuol",
                    "Xloroplast",
                    "Leykoplast"
              ],
              "a": 2,
              "exp": "Fotosintez xlorofillə zəngin xloroplastlarda həyata keçirilir."
        },
        {
              "q": "Kökdən gövdə və yarpaqlara su və mineralları hansı toxuma daşıyır?",
              "options": [
                    "Mexaniki toxuma",
                    "Ötürücü toxuma (ksilena boruları)",
                    "Örtük toxuması",
                    "Törədici toxuma"
              ],
              "a": 1,
              "exp": "Ksilena boruları suyu və həll olmuş mineralları kökdən yuxarıya qaldırır."
        }
  ]
    },

  {
      id: 'biologiya-6-3',
      subjectId: 'biologiya',
      grade: 6,
      unit: 'Bölmə 3: Bitkilərin Vegetativ Orqanları',
      unitOrder: 3,
      title: 'Kök, gövdə və yarpaq: quruluşu və funksiyaları',
      order: 3,
      readTimeMinutes: 16,
      difficulty: 2,
      summary: 'Kök sistemləri (mil və saçaqlı kök), kökün zonaları, gövdənin daxili quruluşu (qabıq, kambi, oduncaq, özək) və yarpağın quruluşu.',
      theoryMarkdown: `
  ### Bitkilərin Vegetativ Orqanları
  Vegetativ orqanlar bitkinin qidalanmasını, böyüməsini və mühitə uyğunlaşmasını təmin edir: Kök, gövdə və yarpaq.

  #### 1. Kök və Kök Sistemləri
  * **Kökün növləri:** Əsas kök (rüşeym kökcüyündən inkişaf edir), əlavə köklər (gövdə və yarpaqdan çıxır), yan köklər (digər köklərdən şaxələnir).
  * **Kök sistemləri:**
    - *Mil kök sistemi:* Əsas kök aydın seçilir (ikiləpəli bitkilər: noxud, palıd).
    - *Saçaqlı kök sistemi:* Əsas kök zəif inkişaf edir və ya tez quruyur, əlavə və yan köklər dəstəsi yaranır (birləpəlilər: buğda, arpa).
  * **Kökün zonaları:** Kök üsküyü, bölünmə zonası, böyümə zonası, sorucu zona (kök telləri ilə) və ötürücü zona.

  #### 2. Gövdə və Zoğ
  Zoğ — üzərində yarpaq və tumurcuqlar olan cavan gövdədir.
  * **Gövdənin eninə kəsiyi (xaricdən daxilə):**
    1. *Qabıq:* Dəri və ya mantar (mühafizə), lub qatı (ələkvari borular və lub lifləri).
    2. *Kambi:* Törədici toxuma qatıdır, gövdənin eninə (yoğunluğuna) böyüməsini və illik halqaların yaranmasını təmin edir.
    3. *Oduncaq:* Borulardan ibarətdir, suyu kökdən yuxarı ötürür.
    4. *Özək:* Mərkəzdə yerləşir, ehtiyat qida maddələri toplayır.

  #### 3. Yarpaq
  Fotosintez, qaz mübadiləsi və transpirasiya (suyun buxarlandırılması) orqanıdır.
  * Əsas hissələri: Yarpaq ayası və saplaq.
  * Yarpağın daxili quruluşu: Üst dəricik, sütunvarı toxuma (əsas fotosintez edən), süngərvarı toxuma və alt dəricikdəki **ağızcıqlar** (qaz və su tənzimləyici hüceyrələr).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{İllik halqa sayı} = \\\text{Ağacın yaşı (illərlə)}",
              "name": "Kambinin fəaliyyəti",
              "desc": "Kambi hər il bir qat oduncaq törədərək illik halqa yaradır"
        }
  ],
      glossary: [
        {
              "term": "Kambi",
              "definition": "Gövdənin qabıqla oduncaq arasında yerləşən və ağacın eninə böyüməsini təmin edən törədici toxuma qatı."
        },
        {
              "term": "Ağızcıq",
              "definition": "Yarpaq dəriciyində qaz mübadiləsini və su buxarlanmasını tənzimləyən qapayıcı hüceyrə cütü."
        }
  ],
      solvedExamples: [
        {
              "problem": "Ağac kötüyündə 25 illik halqa sayılmışdırsa, bu ağacın yaşı neçədir?",
              "solution": "Hər bir illik halqa bir vegetasiya ilinə bərabərdir. Deməli, ağacın təxminən 25 yaşı var."
        }
  ],
      miniQuiz: [
        {
              "q": "Gövdənin eninə (yoğunluğuna) böyüməsini hansı qat təmin edir?",
              "options": [
                    "Özək",
                    "Mantar",
                    "Kambi",
                    "Yarpaq"
              ],
              "a": 2,
              "exp": "Kambi törədici toxuma qatı olub daima bölünərək gövdəni qalınlaşdırır."
        },
        {
              "q": "Kökün hansı zonası vasitəsilə torpaqdan su və mineral maddələr sorulur?",
              "options": [
                    "Kök üsküyü",
                    "Bölünmə zonası",
                    "Sorucu zona (kök telləri)",
                    "Ötürücü zona"
              ],
              "a": 2,
              "exp": "Sorucu zonada yerləşən mikroskopik kök telləri su və mineralları intensiv sorur."
        }
  ]
    },

  {
      id: 'biologiya-6-4',
      subjectId: 'biologiya',
      grade: 6,
      unit: 'Bölmə 4: Bitkilərin Generativ Orqanları',
      unitOrder: 4,
      title: 'Çiçək, tozlanma, meyvə və toxum',
      order: 4,
      readTimeMinutes: 15,
      difficulty: 2,
      summary: 'Çiçəyin quruluşu (ləçək, kasayarpağı, erkəkcik, dişicik), tozlanma növləri, örtülütoxumlularda ikiqat mayalanma (S.Navaşin), toxum və meyvə növləri.',
      theoryMarkdown: `
  ### Bitkilərin Generativ Orqanları
  Generativ orqanlar bitkinin cinsi çoxalmasını təmin edir: Çiçək, toxum və meyvə.

  #### 1. Çiçəyin Quruluşu
  Çiçək — şəklini dəyişmiş qısalmış generativ zoğdur.
  * **Çiçək yatağı və saplağı.**
  * **Çiçək örtüyü:** Kasayarpaqları (kasa) və ləçəklər (tac).
  * **Əsas çoxalma hissələri:**
    - **Erkəkcik:** Erkəkcik sapı və tozluqdan ibarətdir. Tozluqda tozcuq dənələri (spermilər) yetişir.
    - **Dişicik:** Ağızcıq, sütuncuq və yumurtalıqdan ibarətdir. Yumurtalıqda yumurtahüceyrə və mərkəzi hüceyrə yerləşir.

  #### 2. Tozlanma və İkiqat Mayalanma
  * **Tozlanma:** Tozcuqların erkəkcikdən dişiciyin ağızcığına düşməsidir (öz-özünə tozlanma və çarpaz tozlanma — küləklə və ya həşəratla).
  * **İkiqat mayalanma (S.Q.Navaşin, 1898):**
    - 1-ci spermi ($n$) + Yumurtahüceyrə ($n$) $\rightarrow$ **Ziqot ($2n$) $\rightarrow$ Rüşeym**.
    - 2-ci spermi ($n$) + Mərkəzi hüceyrə ($2n$) $\rightarrow$ **Triploid Endosperm ($3n$, ehtiyat qida)**.

  #### 3. Toxum və Meyvə
  * **Toxumun quruluşu:** Qabıq, rüşeym (rüşeym kökcüyü, gövdəciyi, tumurcuğu və ləpə yarpaqları) və endosperm. İkiləpəli bitkilərdə ehtiyat qida ləpələrdə, birləpəlilərdə endospermdə toplanır.
  * **Meyvələr:** Ətli (giləmeyvə, çəyirdəkli, alma) və quru (paxla, buynuzmeyvə, qoz, dən).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Mayalanma} = \\\text{Spermi}(n) + \\\text{Yumurtahüceyrə}(n) \\rightarrow \\\text{Ziqot}(2n)",
              "name": "Ziqotun yaranması",
              "desc": "Diploid xromosomlu rüşeym başlanğıcı"
        },
        {
              "formula": "\\\text{Endosperm} = \\\text{Spermi}(n) + \\\text{Mərkəzi hüceyrə}(2n) \\rightarrow \\\text{Endosperm}(3n)",
              "name": "Triploid endosperm",
              "desc": "Örtülütoxumlularda ehtiyat qida toxuması"
        }
  ],
      glossary: [
        {
              "term": "İkiqat mayalanma",
              "definition": "Örtülütoxumlularda iki sperminin eyni vaxtda yumurtahüceyrəni və mərkəzi hüceyrəni mayalandırması hadisəsi."
        },
        {
              "term": "Endosperm",
              "definition": "Toxumda rüşeymin qidalanması üçün triploid (3n) ehtiyat qida maddəsi."
        }
  ],
      solvedExamples: [
        {
              "problem": "Noxud və buğda toxumlarının quruluşundakı əsas fərq nədir?",
              "solution": "Noxud ikiləpəli bitkidir və ehtiyat qidası iki ləpə yarpağında toplanır. Buğda isə birləpəli bitkidir, bir ləpəsi var və əsas ehtiyat qidası ayrıca toxuma olan endospermdə yerləşir."
        }
  ],
      miniQuiz: [
        {
              "q": "Örtülütoxumlu bitkilərdə ikiqat mayalanmanı kim kəşf etmişdir?",
              "options": [
                    "R.Quk",
                    "Ç.Darvin",
                    "S.Q.Navaşin",
                    "Q.Mendel"
              ],
              "a": 2,
              "exp": "İkiqat mayalanmanı 1898-ci ildə rus alimi S.Q.Navaşin kəşf etmişdir."
        },
        {
              "q": "Çiçəkdə erkək cinsiyyət hüceyrələri (spermilər) harada yetişir?",
              "options": [
                    "Dişiciyin ağızcığında",
                    "Ləçəklərdə",
                    "Erkəkciyin tozluğunda",
                    "Çiçək saplağında"
              ],
              "a": 2,
              "exp": "Erkəkciyin tozluq hissəsində tozcuqlar daxilində spermilər yetişir."
        }
  ]
    },

  {
      id: 'biologiya-6-5',
      subjectId: 'biologiya',
      grade: 6,
      unit: 'Bölmə 5: Bakteriyalar və Göbələklər Aləmi',
      unitOrder: 5,
      title: 'Prokariot bakteriyalar, göbələklər və şibyələr',
      order: 5,
      readTimeMinutes: 15,
      difficulty: 2,
      summary: 'Bakteriyaların hüceyrə quruluşu (nüvəsiz prokariotlar), spor əmələgətirmə, papaqcıqlı və kif göbələkləri, simbioz şibyələr.',
      theoryMarkdown: `
  ### Bakteriyalar, Göbələklər və Şibyələr

  #### 1. Bakteriyalar (Quruluşca Prokariotlar)
  Bakteriyalar Yerdə ən qədim və sadə quruluşlu birhüceyrəli canlılardır.
  * **Quruluşu:** Formaca formalı **nüvəsi yoxdur (prokariotdur)**. DNT molekulu sitoplazmada sərbəst həlqəvi şəkildə yerləşir (nukleoid). Xaricdən bərk qılafla və bəzən selikli kapsulla örtülüdür. Bəzilərinin qamçıları var.
  * **Spor:** Əlverişsiz mühit şəraitində (quraqlıq, soyuq) bakteriyalar sıx qılafla örtülərək **spora** çevrilir. Spor çoxalma üçün deyil, **sağ qalmaq üçündür**.
  * **Əhəmiyyəti:** Çürüntü bakteriyaları (redusentlər), qatıq bakteriyaları, azotbirləşdirici yumrucuq bakteriyaları və xəstəliktörədici bakteriyalar.

  #### 2. Göbələklər Aləmi (Eukariotlar)
  Həm bitki, həm heyvan xassələrinə malik xüsusi canlılar aləmidir:
  * *Bitkilərə oxşar xassələri:* Hərəkətsizdirlər, qidanı soraraq qəbul edirlər, sınırsız böyüyürlər, hüceyrə divarı var.
  * *Heyvanlara oxşar xassələri:* **Xlorofilləri yoxdur**, hazır üzvi maddələrlə qidalanırlar (**heterotrof**), hüceyrə divarında **xitin** maddəsi var, ehtiyat qida kimi **qlikogen** toplayırlar.
  * **Növləri:** Papaqlı göbələklər (mitseli və meyvə cismi), kif göbələkləri (mukor, penisillium — ilk antibiotik mənbəyi), maya göbələkləri.
  * **Mikoriza (Göbələk-kök simbiozu):** Göbələk mitselilərinin ağac kökləri ilə faydalı birgəyaşayışıdır.

  #### 3. Şibyələr (Likenlər)
  Göbələk və birhüceyrəli yaşıl yosunun (və ya sianobakteriyanın) **simbiozundan** (şəriklik) ibarət bütöv orqanizmdir. Ən təmiz havalı yerlərdə bitir (havanın təmizliyinin bioloji indikatorudur).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Şibyə} = \\\text{Göbələk (su və duz verir)} + \\\text{Yosun (üzvi qida sintez edir)}",
              "name": "Simbioz tənliyi",
              "desc": "İki canlının qarşılıqlı faydalı birgəyaşayışı"
        }
  ],
      glossary: [
        {
              "term": "Prokariot",
              "definition": "Formalaşmış nüvəsi və membranlı orqanoidləri olmayan ibtidai hüceyrəli canlı (bakteriya)."
        },
        {
              "term": "Simbioz",
              "definition": "Müxtəlif növlərə aid orqanizmlərin birgə faydalı yaşayış forması."
        },
        {
              "term": "Mikoriza",
              "definition": "Göbələk tellərinin bitki kökləri ilə əmələ gətirdiyi simbiotik əlaqə."
        }
  ],
      solvedExamples: [
        {
              "problem": "Göbələklər niyə bitkilər aləminə deyil, ayrıca müstəqil canlılar aləminə aid edilir?",
              "solution": "Çünki göbələklərdə xloroplastlar yoxdur, fotosintez edə bilmirlər və heyvanlar kimi heterotrof qidalanırlar. Həmçinin hüceyrə divarlarında bitkilərdəki sellüloza deyil, buğumayaqlılara xas olan xitin maddəsi vardır."
        }
  ],
      miniQuiz: [
        {
              "q": "Bakteriyalar sporları hansı məqsədlə əmələ gətirirlər?",
              "options": [
                    "Sürətlə çoxalmaq üçün",
                    "Əlverişsiz şəraitdə sağ qalmaq üçün",
                    "Fotosintez etmək üçün",
                    "Hərəkət etmək üçün"
              ],
              "a": 1,
              "exp": "Bakteriya sporu çoxalma deyil, dözülməz xarici mühitdə sağ qalmaq vasitəsidir."
        },
        {
              "q": "Şibyə orqanizmində göbələyin əsas vəzifəsi nədir?",
              "options": [
                    "Fotosintez edərək qlükoza hazırlamaq",
                    "Yosunu su və mineral maddələrlə təmin etmək",
                    "Uçmaq",
                    "Toxum yaratmaq"
              ],
              "a": 1,
              "exp": "Göbələk suyu və mineralları sorub yosuna verir, yosun isə fotosintezlə göbələyi üzvi qida ilə təmin edir."
        }
  ]
    },

  {
      id: 'biologiya-6-6',
      subjectId: 'biologiya',
      grade: 6,
      unit: 'Bölmə 6: Canlıların Həyat Fəaliyyəti və Fotosintez',
      unitOrder: 6,
      title: 'Fotosintez, tənəffüs, su buxarlandırma və maddələr dövranı',
      order: 6,
      readTimeMinutes: 16,
      difficulty: 2,
      summary: 'Bitkilərdə hava qidalanması (fotosintez), tənəffüs və qaz mübadiləsi, transpirasiya prosesi, avtotrof və heterotrof orqanizmlər.',
      theoryMarkdown: `
  ### Canlıların Həyat Fəaliyyəti

  #### 1. Hava Qidalanması — Fotosintez
  Fotosintez — yaşıl bitkilərin xloroplastlarında günəş işığı enerjisinin təsiri ilə qeyri-üzvi maddələrdən ($CO_2$ və $H_2O$) üzvi maddələrin (qlükoza) və sərbəst oksigenin ($O_2$) sintez olunması prosesidir:
  $$6CO_2 + 6H_2O \xrightarrow{\	ext{işıq, xlorofil}} C_6H_{12}O_6 + 6O_2\uparrow$$
  * **Fotosintezin şərtləri:** Günəş işığı, xlorofil, karbon qazı, su və optimal temperatur.
  * **Fotosintezin əhəmiyyəti:** Bütün yer kürəsini oksigenlə təmin edir, ozon qatını yaradır və canlılar üçün ilkin üzvi qida bazası formalaşdırır.

  #### 2. Bitkilərdə Tənəffüs
  Bütün canlılar kimi bitkilər də **daima (həm gündüz, həm gecə)** tənəffüs edir.
  * Tənəffüs zamanı bitki oksigeni ($O_2$) udur, karbon qazını ($CO_2$) xaric edir.
  * Udulan oksigen hüceyrələrdə üzvi maddələri parçalayaraq həyat fəaliyyəti üçün zəruri olan enerjini sərbəst buraxır.
  * *Fotosintez və tənəffüsün müqayisəsi:*
    - *Fotosintez:* Yalnız işıqda gedir, $CO_2$ udulur, $O_2$ ayrılır, üzvi maddə və enerji toplanır.
    - *Tənəffüs:* Həm işıqda, həm qaranlıqda daima gedir, $O_2$ udulur, $CO_2$ ayrılır, üzvi maddə parçalanır və enerji ayrılır.

  #### 3. Transpirasiya (Suyun Buxarlandırılması)
  Bitkilər kökləri ilə sorduqları suyun cəmi $1-2\%$-ni fotosintez və böyüməyə sərf edir, qalan $98\%$-i yarpaq ağızcıqları vasitəsilə buxarlandırırlar (**transpirasiya**).
  * Bu proses bitkini yay istisində qızmaqdan qoruyur və kökdən yarpağa su axınını fasiləsiz saxlayır.
      `,
      keyFormulas: [
        {
              "formula": "6CO_2 + 6H_2O \\xrightarrow{h\\nu} C_6H_{12}O_6 + 6O_2\\uparrow",
              "name": "Fotosintezin cəmi tənliyi",
              "desc": "Karbon qazı və sudan günəş işığı ilə qlükoza və oksigen yaranması"
        }
  ],
      glossary: [
        {
              "term": "Fotosintez",
              "definition": "İşıq enerjisi hesabına qeyri-üzvi maddələrdən üzvi maddələrin sintezi prosesi."
        },
        {
              "term": "Transpirasiya",
              "definition": "Bitkinin yarpaq ağızcıqları vasitəsilə suyu buxarlandırması hadisəsi."
        },
        {
              "term": "Avtotrof",
              "definition": "Qeyri-üzvi maddələrdən özü üçün üzvi qida sintez edən canlı (yaşıl bitkilər)."
        }
  ],
      solvedExamples: [
        {
              "problem": "Qaranlıq otaqda saxlanılan yaşıl bitki oksigen ayırarmı?",
              "solution": "Xeyr. Fotosintez yalnız işıq olduqda baş verir. Qaranlıqda fotosintez dayanır, bitki yalnız tənəffüs edir, yəni oksigeni udur və karbon qazı ayırır."
        }
  ],
      miniQuiz: [
        {
              "q": "Fotosintez prosesində əlavə məhsul kimi atmosferə hansı qaz xaric olunur?",
              "options": [
                    "Karbon qazı (CO₂)",
                    "Oksigen (O₂)",
                    "Azot (N₂)",
                    "Ammonyak"
              ],
              "a": 1,
              "exp": "Fotosintez nəticəsində suyun fotolizindən sərbəst oksigen (O₂) ayrılır."
        },
        {
              "q": "Bitkinin yarpaqları vasitəsilə artıq suyun buxarlandırılması prosesi necə adlanır?",
              "options": [
                    "Fotosintez",
                    "Transpirasiya",
                    "Mayalanma",
                    "İnkişaf"
              ],
              "a": 1,
              "exp": "Suyun yarpaqlardan buxarlandırılması transpirasiya adlanır."
        }
  ]
    },

  {
      id: 'biologiya-7-1',
      subjectId: 'biologiya',
      grade: 7,
      unit: 'Bölmə 1: İbtidai və Ali Sporlu Bitkilər. Toxumlu Bitkilər',
      unitOrder: 1,
      title: 'Yosunlar, mamırlar, qıjılar və çılpaqtoxumlular',
      order: 1,
      readTimeMinutes: 17,
      difficulty: 2,
      summary: 'İbtidai bitkilər (tallomlu yosunlar), ali sporlu bitkilər (mamırlar, qıjıkimilər), çılpaqtoxumlular (şam, küknar) və örtülütoxumluların üstünlükləri.',
      theoryMarkdown: `
  ### Bitkilər Aləminin Təkamülü və Müxtəlifliyi

  #### 1. İbtidai Bitkilər — Yosunlar
  Həqiqi kök, gövdə və yarpaqları yoxdur. Bədənləri **tallom (qatmar)** adlanır.
  * Xromotoforlarında xlorofil saxlayırlar.
  * Birhüceyrəli (xlorella, xlamidomonada) və çoxhüceyrəli (ulotriks, spirogira, laminariya / dəniz kələmi).
  * Təbiətdə su hövzələrini oksigenlə zənginləşdirir və qida zəncirinin əsasını təşkil edirlər.

  #### 2. Ali Sporlu Bitkilər
  Quruya çıxmış ilk bitkilərdir. Toxumaları və orqanları formalaşmışdır, lakin **mayalanmaları üçün mütləq su damcısı tələb olunur**:
  * **Mamırlar:** Kök yoxdur, torpağa **rizoidlərlə** yapışırlar (yaşıl quş mamırı, sfaqnum — torf əmələ gətirir). Nəsil növbələşməsində qamətli nəsil (qametofit) üstünlük təşkil edir.
  * **Qıjıkimilər:** Həqiqi kök, gövdə və yarpaqlara malikdirlər. Yarpaqlarının altında sporangilər qrupu (**soruslar**) yerləşir. Qədim ağacvari qıjıların qalıqlarından daş kömür yataqları yaranmışdır.

  #### 3. Toxumlu Bitkilər
  * **Çılpaqtoxumlular (Şam, küknar, qaraçöhrə):** Toxum əmələ gətirən ilk bitkilərdir. Mayalanmaları üçün **su tələb olunmur** (tozcuq borusu yaranır). Toxumları qozanın pulcuqları üzərində açıqda (çılpaq) yerləşir, meyvə əmələ gətirmirlər. İynəyarpaqlıdırlar, qatran və fitonsid (bakteriya öldürücü maddə) ifraz edirlər.
  * **Örtülütoxumlular (Çiçəkli bitkilər):** Bitkilər aləminin ən ali pilləsidir. Çiçək, toxum və **meyvə** əmələ gətirirlər (toxum meyvə yanlığı ilə qorunur). İki sinfə bölünür: **İkiləpəlilər** və **Birləpəlilər**.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Nəsil növbələşməsi} = \\\text{Qametofit}(n) \\leftrightarrow \\\text{Sporofit}(2n)",
              "name": "Sporlu bitkilərdə tsikl",
              "desc": "Cinsi və qeyri-cinsi nəsillərin bir-birini əvəz etməsi"
        }
  ],
      glossary: [
        {
              "term": "Tallom",
              "definition": "Kök, gövdə və yarpağa differensiasiya etməmiş bütöv bitki bədəni (yosunlarda)."
        },
        {
              "term": "Rizoid",
              "definition": "Mamırlarda və yosunlarda kökü əvəz edən sapşəkilli bərkimə çıxıntıları."
        },
        {
              "term": "Fitonsid",
              "definition": "İynəyarpaqlı bitkilərin ifraz etdiyi mikrob və bakteriyaları məhv edən uçucu maddələr."
        }
  ],
      solvedExamples: [
        {
              "problem": "Niyə şam və küknar kimi çılpaqtoxumlu bitkilər mamır və qıjılardan daha quraq yerlərdə yaşaya bilirlər?",
              "solution": "Mamır və qıjılarda spermilərin yumurtahüceyrəyə çatması üçün mütləq su damcısı tələb olunur. Çılpaqtoxumlularda isə tozcuq küləklə daşınır və mayalanma su mühiti olmadan tozcuq borusu vasitəsilə daxildə baş verir."
        }
  ],
      miniQuiz: [
        {
              "q": "Ağacvari qədim qıjıkimilərin milyon illər əvvəl torpaq altında qalmış qalıqlarından hansı faydalı qazıntı yaranmışdır?",
              "options": [
                    "Torf",
                    "Daş kömür",
                    "Qranit",
                    "Neft"
              ],
              "a": 1,
              "exp": "Daş kömür karbon dövründə yaşamış nəhəng qıjıkimilərin havasız şəraitdə kömürləşməsindən yaranmışdır."
        },
        {
              "q": "Çılpaqtoxumlu bitkilərin toxumları harada yerləşir?",
              "options": [
                    "Meyvənin içində",
                    "Qozanın pulcuqları üzərində açıqda",
                    "Yarpağın altında",
                    "Torpaqda"
              ],
              "a": 1,
              "exp": "Çılpaqtoxumlularda meyvə olmur, toxumlar qozanın pulcuqları üzərində çılpaq yerləşir."
        }
  ]
    },

  {
      id: 'biologiya-7-2',
      subjectId: 'biologiya',
      grade: 7,
      unit: 'Bölmə 2: Birhüceyrəli Heyvanlar və Bağırsaqboşluqlular',
      unitOrder: 2,
      title: 'İbtidailər (Amöb, Yaşıl evqlena, İnfuzor-tərlik) və Hidra',
      order: 2,
      readTimeMinutes: 16,
      difficulty: 2,
      summary: 'Birhüceyrəlilər yarımaləmi (kökayaqlılar, qamçılılar, infuzorlar), yığılıb-açılan vakuollar, sist əmələgəlmə, bağırsaqboşluqlular (hidra, dalayıcı hüceyrələr, regenerasiya).',
      theoryMarkdown: `
  ### Birhüceyrəlilər və İlk Çoxhüceyrəlilər

  #### 1. Birhüceyrəli Heyvanlar (İbtidailər)
  Bədənləri tək bir müstəqil hüceyrədən ibarətdir:
  * **Adi amöb (Kökayaqlılar):** Sabit bədən forması yoxdur. **Yalançı ayaqları (psevdopodilər)** vasitəsilə hərəkət edir və qidanı tutur (faqositoz). Artıq suyu və zərərli maddələri yığılıb-açılan vakuolla xaric edir.
  * **Yaşıl evqlena (Qamçılılar):** İkili qidalanma təbiətinə (**miksotrof**) malikdir: işıqda xromatoforları ilə fotosintez edir (avtotrof), qaranlıqda hazır üzvi maddələri sorur (heterotrof). Bir ədəd qamçısı və qırmızı gözcüyü (stiğma) var.
  * **İnfuzor-tərlik (Kipriklilər):** Sabit ayaqqabı altlığı formasına malikdir. Minlərlə kipriklə üzür. İki nüvəsi var: iri vegetativ nüvə (makronukleus — maddələr mübadiləsini idarə edir) və kiçik generativ nüvə (mikronukleus — cinsi konyuqasiyanı təmin edir).
  * **Sista:** Əlverişsiz mühitdə ibtidailər sıx qoruyucu qabıqla örtülərək sistaya çevrilir.

  #### 2. Bağırsaqboşluqlular Tipi (Şirin su hidrası, meduzalar, mərcanlar)
  * **İkitəbəqəli bədən quruluşu:** Xarici qat (**ektoderma**) və daxili qat (**endoderma**). Aralarında canlı olmayan mezoqley qatı yerləşir.
  * **Şüalı simmetriya:** Bədəndən bir neçə simmetriya müstəvisi keçirmək olar.
  * **Dalayıcı hüceyrələr:** Ektodermada yerləşir, içərisində zəhərli sap olan kapsul var; müdafiə və şikarı iflic etmək üçün xidmət edir.
  * **Regenerasiya:** İtirilmiş və ya zədələnmiş bədən hissələrinin aralıq hüceyrələr hesabına bərpası qabiliyyətidir (hidra bir neçə hissəyə kəsildikdə hər hissədən yeni tam hidra inkişaf edir).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Miksotrof} = \\\text{İşıqda avtotrof} + \\\text{Qaranlıqda heterotrof}",
              "name": "Evqlenanın qidalanması",
              "desc": "İkili qidalanma rejimi"
        }
  ],
      glossary: [
        {
              "term": "Faqositoz",
              "definition": "Hüceyrənin bərk qida hissəciklərini yalançı ayaqları ilə əhatə edərək udması prosesi."
        },
        {
              "term": "Regenerasiya",
              "definition": "Canlının zədələnmiş və ya kəsilmiş orqanlarını yenidən bərpa etməsi qabiliyyəti."
        },
        {
              "term": "Sista",
              "definition": "İbtidailərin əlverişsiz mühitdə əmələ gətirdiyi qalın qoruyucu qabıq."
        }
  ],
      solvedExamples: [
        {
              "problem": "İnfuzor-tərliyin bədənində iki fərqli nüvənin olması nəyə xidmət edir?",
              "solution": "Böyük nüvə (makronukleus) gündəlik həyat fəaliyyətini, tənəffüs, qidalanma və maddələr mübadiləsini idarə edir; kiçik nüvə (mikronukleus) isə cinsi proses (konyuqasiya) zamanı irsi məlumatların mübadiləsini təmin edir."
        }
  ],
      miniQuiz: [
        {
              "q": "Yaşıl evqlenanın qaranlıq mühitdə qidalanma tərzi necə dəyişir?",
              "options": [
                    "Məhv olur",
                    "Heterotrof qidalanmaya keçir",
                    "Yalnız su içir",
                    "Kök atır"
              ],
              "a": 1,
              "exp": "Yaşıl evqlenada qaranlıqda fotosintez dayanır və o hazır üzvi qidanı soraraq heterotrof qidalanır."
        },
        {
              "q": "Hidranın dalayıcı hüceyrələri bədənin hansı qatında yerləşir?",
              "options": [
                    "Yalnız daxili bağırsaqda",
                    "Xarici ektoderma qatında",
                    "Hüceyrə nüvəsində",
                    "Yalançı ayaqlarda"
              ],
              "a": 1,
              "exp": "Dalayıcı hüceyrələr xarici ektoderma qatında yerləşir və düşmənlərdən qorunmağa xidmət edir."
        }
  ]
    },

  {
      id: 'biologiya-7-3',
      subjectId: 'biologiya',
      grade: 7,
      unit: 'Bölmə 3: Qurdlar və Buğumayaqlılar',
      unitOrder: 3,
      title: 'Yastı, sap, həlqəvi qurdlar və buğumayaqlılar (Xərçənglər, hörümçəklər, həşəratlar)',
      order: 3,
      readTimeMinutes: 18,
      difficulty: 2,
      summary: 'Qurd tipləri (ağ planari, askarid, soxulcan), parazitlik uyğunlaşmaları, buğumayaqlıların xitin örtüyü, xərçəngkimilər, hörümçəkkimilər və həşəratların metamorfozu.',
      theoryMarkdown: `
  ### Qurdlar və Buğumayaqlılar

  #### 1. Qurd Tipləri
  Üçrüşeym vərəqəli (ektoderma, entoderma və **mezoderma**) ilk heyvanlardır. İkitərəfli (bilateral) simmetriyaya malikdirlər.
  * **Yastı qurdlar:** Bədənləri bel-qarın istiqamətində yastılaşıb. Bədən boşluğu yoxdur (parenxima ilə doludur). Anal dəliyi yoxdur (həzm olunmamış qalıqlar ağızdan çıxır). Məsələn: Ağ planari (sərbəst), Qaraciyər sorucusu və Öküz soliteri (parazit, qarmaq və sormacları var).
  * **Sap qurdlar (Dəyirmi qurdlar):** İlk dəfə **ilkin bədən boşluğu** və **anal dəliyi** yaranmışdır (həzm sistemi tam boru kimidir). Məsələn: İnsan askaridi, uşaq bizquyruğu.
  * **Həlqəvi qurdlar (Yağış qurdu / Soxulcan, zəli):** Ən ali qurdlardır. **İkinci bədən boşluğu (selom)** və **ilk dəfə qapalı qan-damar sistemi** yaranmışdır (qırmızı qan). Bədənləri buğumludur.

  #### 2. Buğumayaqlılar Tipi
  Heyvanlar aləminin ən zəngin tipidir (1 milyondan çox növ). Xarici skelet rolunu oynayan **xitin örtüyə** və buğumlu ətraflara malikdirlər. Qan-damar sistemi **açıqdır** (hemofausa).
  1. **Xərçəngkimilər (Çay xərçəngi):** Baş-döş və qarıncıq; 2 cüt bığcıq, 5 cüt yeriş ayağı (birincisi qısqacdır), qəlsəmələrlə tənəffüs edir.
  2. **Hörümçəkkimilər (Xaçlı hörümçək, əqrəb, gənə):** Baş-döş və qarıncıq; bığcıqları yoxdur, 4 cüt yeriş ayağı, tor vəziləri, traxeya və ağciyər kisələri ilə tənəffüs edir.
  3. **Həşəratlar (May böcəyi, bal arısı, kəpənək):** Baş, döş və qarıncıq; 1 cüt bığcıq, döşdə 3 cüt ayaq və adətən 2 cüt qanad. Traxeyalarla tənəffüs edirlər.
  * **Həşəratların İnkişafı (Metamorfoz):**
    - *Qeyri-tam çevrilmə (3 mərhələ):* Yumurta $\rightarrow$ Sürfə $\rightarrow$ Yetkin fərd (çəyirtkə, tarakan).
    - *Tam çevrilmə (4 mərhələ):* Yumurta $\rightarrow$ Sürfə $\rightarrow$ **Pupa** $\rightarrow$ Yetkin fərd (kəpənək, milçək, arı).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Tam çevrilmə} = \\\text{Yumurta} \\rightarrow \\\text{Sürfə} \\rightarrow \\\text{Pupa} \\rightarrow \\\text{İmaqo (yetkin)}",
              "name": "Tam metamorfoz mərhələləri",
              "desc": "Həşəratlarda pupa mərhələsi olan tam inkişaf"
        }
  ],
      glossary: [
        {
              "term": "Xitin",
              "definition": "Buğumayaqlıların xarici möhkəm örtüyünü təşkil edən yüngül üzvi polisaxarid skelet."
        },
        {
              "term": "Soxulcanın selomu",
              "definition": "Xüsusi mezoderma mənşəli epitellə örtülmüş ikinci bədən boşluğu."
        },
        {
              "term": "Metamorfoz",
              "definition": "Orqanizmin quruluşunun köklü dəyişməsi ilə gedən fərdi inkişaf prosesi."
        }
  ],
      solvedExamples: [
        {
              "problem": "Çay xərçəngi, hörümçək və may böcəyinin yeriş ayaqlarının sayını müqayisə edin.",
              "solution": "Çay xərçəngində 5 cüt (10 ədəd), hörümçəkdə 4 cüt (8 ədəd), may böcəyində (həşəratda) isə 3 cüt (6 ədəd) yeriş ayağı vardır."
        }
  ],
      miniQuiz: [
        {
              "q": "İlk dəfə qapalı qan-damar sistemi hansı heyvanlar qrupunda yaranmışdır?",
              "options": [
                    "Yastı qurdlarda",
                    "Sap qurdlarda",
                    "Həlqəvi qurdlarda (soxulcan)",
                    "Bağırsaqboşluqlularda"
              ],
              "a": 2,
              "exp": "Həlqəvi qurdlarda ilk dəfə qapalı qan-damar sistemi formalaşmışdır."
        },
        {
              "q": "Tam çevrilmə ilə inkişaf edən həşəratlarda qeyri-tam çevrilmədən fərqli olaraq hansı əlavə mərhələ mövcuddur?",
              "options": [
                    "Yumurta",
                    "Pupa mərhələsi",
                    "Sürfə",
                    "Qanad çıxarma"
              ],
              "a": 1,
              "exp": "Tam çevrilmədə sürfə pupa mərhələsinə keçir və daxili toxumaları yenidən formalaşır."
        }
  ]
    },

  {
      id: 'biologiya-7-4',
      subjectId: 'biologiya',
      grade: 7,
      unit: 'Bölmə 4: Xordalılar: Balıqlar və Suda-Quruda Yaşayanlar',
      unitOrder: 4,
      title: 'Kəlləsizlər (Neştərçə), Qığırdaqlı və Sümüklü balıqlar, Amfibiyalar',
      order: 4,
      readTimeMinutes: 18,
      difficulty: 2,
      summary: 'Xordalılar tipinin əlamətləri, neştərçə, balıqların xarici və daxili quruluşu (üzmə qovuğu, yan xətt, 2 kameralı ürək), suda-quruda yaşayanların (qurbağa) quruya çıxış uyğunlaşmaları.',
      theoryMarkdown: `
  ### Xordalılar: Balıqlar və Amfibiyalar

  #### 1. Xordalılar Tipinin Əsas Əlamətləri
  * Daxili ox skeleti — **Xordanın** olması (ali formalarda onurğa ilə əvəz olunur).
  * Mərkəzi sinir sisteminin xordanın üzərində yerləşən **sinir borusundan** ibarət olması.
  * Udlağın yanlarında qəlsəmə yarıqlarının olması.
  * Qan-damar sisteminin qapalı olması və ürəyin bədənin qarın tərəfində yerləşməsi.
  * **Neştərçə (Kəlləsizlər):** Xordalıların bütün əsas əlamətlərini ömrü boyu saxlayan canlı keçid formasıdır.

  #### 2. Balıqlar Sinfi (Suda Yaşayan Onurğalılar)
  * **Quruluşu:** Baş, gövdə və quyruq. Üzgəclər (tək və cüt), pulcuqlar və selik qatı.
  * **Yan xətt orqanı:** Suyun axın istiqamətini, təzyiqini və maneələri hiss edən xüsusi hiss orqanıdır.
  * **Üzmə qovuğu:** Balığın su qatlarında batmadan qalmasını və şaquli hərəkətini tənzimləyir (akula və skatlarda yoxdur).
  * **Qan dövranı:** **1 qan dövranı və 2 kameralı ürək** (1 qulaqcıq, 1 mədəcik). Ürəkdə yalnız **venoz qan** olur.
  * **Tənəffüs:** Qəlsəmələrlə. Bədən temperaturu sabit deyil (**soyuqqanlı / poykiloterm**).

  #### 3. Suda-Quruda Yaşayanlar (Amfibiyalar — Qurbağalar, tritonlar)
  Quruda yaşayan ilk dördayaqlı onurğalılardır, lakin çoxalma və inkişafları su ilə bağlıdır.
  * **Quruya uyğunlaşmalar:** Beşbarmaqlı ətraflar, göz qapaqları, orta qulaq təbili, ağciyərlər.
  * **Tənəffüs:** Ağciyərlər zəif inkişaf etdiyindən **dəri tənəffüsü** böyük rol oynayır (dəri həmişə nəm olmalıdır).
  * **Qan dövranı:** **2 qan dövranı (böyük və kiçik) və 3 kameralı ürək** (2 qulaqcıq, 1 mədəcik). Mədəcikdə qan qarışır. Soyuqqanlıdırlar.
  * **Çoxalma:** Mayalanma xaricidir (suda kürü tökürlər). Yumurtadan qəlsəməli və quyruqlu balığa bənzər **çömçəquyruq** çıxır (metamorfozla yetkin qurbağaya çevrilir).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Balıq ürəyi} = 1 \\\text{ Qulaqcıq} + 1 \\\text{ Mədəcik (cəmi 2 kamera, venoz qan)}",
              "name": "Balığın qan dövranı",
              "desc": "Tək qan dövranı sistemi"
        },
        {
              "formula": "\\\text{Qurbağa ürəyi} = 2 \\\text{ Qulaqcıq} + 1 \\\text{ Mədəcik (cəmi 3 kamera, qarışıq qan)}",
              "name": "Amfibiya ürəyi",
              "desc": "İki qan dövranı sistemi"
        }
  ],
      glossary: [
        {
              "term": "Xorda",
              "definition": "Xordalı heyvanların rüşeym dövründə bədən oxunu təşkil edən elastik elastik qığırdaq teli."
        },
        {
              "term": "Yan xətt",
              "definition": "Balıqlara suyun dalğalanmasını və təzyiq dəyişməsini duymağa imkan verən xüsusi hiss orqanı."
        },
        {
              "term": "Poykiloterm",
              "definition": "Bədən temperaturu xarici mühitin temperaturundan asılı olan soyuqqanlı heyvan."
        }
  ],
      solvedExamples: [
        {
              "problem": "Niyə qurbağanın dərisi quruduqda o boğularaq tələf olur?",
              "solution": "Qurbağanın ağciyərləri çox sadə kisə şəklindədir və bədənin oksigen tələbatının yalnız üçdə birini ödəyir. Qalan oksigen nəm dəri vasitəsilə həll olaraq qana keçir. Dəri quruduqda dəri tənəffüsü dayanır və qurbağa boğulur."
        }
  ],
      miniQuiz: [
        {
              "q": "Balığın ürəyində hansı növ qan axır?",
              "options": [
                    "Yalnız arterial (təmiz oksigenli)",
                    "Yalnız venoz (CO₂ ilə zəngin)",
                    "Qarışıq qan",
                    "Ürəyində qan olmur"
              ],
              "a": 1,
              "exp": "Balığın 2 kameralı ürəyinə yalnız bədəndən toplanan venoz qan daxil olur."
        },
        {
              "q": "Qurbağanın yumurtasından (kürüsündən) çıxan quyruqlu sürfə necə adlanır?",
              "options": [
                    "Triton",
                    "Çömçəquyruq",
                    "Pupa",
                    "Neştərçə"
              ],
              "a": 1,
              "exp": "Qurbağanın sürfəsi çömçəquyruq adlanır və balıqlar kimi quyruğa və qəlsəmələrə malikdir."
        }
  ]
    },

  {
      id: 'biologiya-7-5',
      subjectId: 'biologiya',
      grade: 7,
      unit: 'Bölmə 5: Sürünənlər və Quşlar',
      unitOrder: 5,
      title: 'Sürünənlərin quruya tam uyğunlaşması və quşların uçma adaptasiyaları',
      order: 5,
      readTimeMinutes: 18,
      difficulty: 2,
      summary: 'Sürünənlər (kərtənkələ, ilan, tısbağa, timsah), buynuz pulcuqlar, daxili mayalanma, quşların uçma uyğunlaşmaları (lələk örtüyü, boş sümüklər, hava kisələri, ikiqat tənəffüs, 4 kameralı ürək).',
      theoryMarkdown: `
  ### Sürünənlər və Quşlar

  #### 1. Sürünənlər Sinfi (Kərtənkələlər, İlanlar, Tısbağalar, Timsahlar)
  Sudan tamamilə asılılığını itirmiş ilk həqiqi quru onurğalılarıdır (**amniotlar**).
  * **Dəri:** Vəzilərdən məhrumdur, quru **buynuz pulcuqlarla** örtülmüşdür (bədəni qurumaqdan qoruyur). Böyümə dövründə qabıq qoyurlar (**tüləmə**).
  * **Tənəffüs:** Yalnız hüceyrəli ağciyərlərlə tənəffüs edirlər (dəri tənəffüsü yoxdur).
  * **Qan dövranı:** 3 kameralı ürək, lakin mədəcikdə **natamam arakəsmə** var (timsahlarda ürək artıq tam 4 kameralıdır). Bədənə qarışıq qan gedir, soyuqqanlıdırlar.
  * **Çoxalma:** Mayalanma daxilidir. Quruya iri, zülal və sarılıqla zəngin, dəricikli və ya əhəng qabıqlı yumurta qoyurlar.

  #### 2. Quşlar Sinfi (Uçmağa Uyğunlaşmış İstiqanlı Canlılar)
  * **Uçma ilə bağlı skelet və orqan adaptasiyaları:**
    - Ön ətraflar qanadlara çevrilmişdir.
    - Bədən yüngül və möhkəm lələk örtüyü ilə örtülmüşdür.
    - Sümüklərin içi hava ilə doludur (yüngüllük).
    - Döş sümüyündə uçma əzələlərinin bağlandığı hündür tin — **tilov (tir)** inkişaf etmişdir.
    - Çənələrdə dişlər yoxdur, yüngül buynuz dimdik var. Sidik kisəsi yoxdur (bədəni yüngülləşdirmək üçün).
  * **İkiqat tənəffüs:** Quşlarda ağciyərlərlə yanaşı **hava kisələri** vardır. Həm nəfəsalmada, həm də nəfəsvermədə ağciyərlərdən oksigenlə zəngin hava keçir (ikiqat tənəffüs).
  * **Qan dövranı:** **Tam 4 kameralı ürək** (2 qulaqcıq, 2 mədəcik). Arterial və venoz qan heç vaxt qarışmır. Sağ mədəcikdən sağ aorta qövsü çıxır.
  * **İstiqanlılıq (Homoyoterm):** Sabit bədən temperaturuna ($40-42^\circ C$) və intensiv maddələr mübadiləsinə malikdirlər.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Quş ürəyi} = 2 \\\text{ Qulaqcıq} + 2 \\\text{ Mədəcik (tam 4 kamera, qan qarışmır)}",
              "name": "Quşların 4 kameralı ürəyi",
              "desc": "Arterial və venoz qanın tam ayrılması"
        },
        {
              "formula": "T_{\\\text{bədən}} = \\\text{const} \\approx 41^\\circ C",
              "name": "Homoyotermlik",
              "desc": "Sabit bədən temperaturu (istiqanlılıq)"
        }
  ],
      glossary: [
        {
              "term": "İkiqat tənəffüs",
              "definition": "Quşlarda uçuş zamanı havanın həm daxil olarkən, həm də xaric olarkən ağciyərlərdə qaz mübadiləsi etməsi hadisəsi."
        },
        {
              "term": "Tilov (Tir)",
              "definition": "Quşların döş sümüyündə qanad əzələlərinin bərkidiyi xüsusi hündür daraqvari çıxıntı."
        },
        {
              "term": "Homoyoterm",
              "definition": "Xarici mühitin istiliyindən asılı olmayaraq sabit bədən temperaturunu qoruyan istiqanlı orqanizm."
        }
  ],
      solvedExamples: [
        {
              "problem": "Niyə sürünənlər soyuqqanlı, quşlar isə istiqanlı heyvanlardır?",
              "solution": "Sürünənlərin ürək mədəciyində tam arakəsmə olmadığından qan qarışır və hüceyrələrə az oksigen daşınır (maddələr mübadiləsi zəifdir). Quşlarda isə ürək tam 4 kameralıdır, qan qarışmır, hüceyrələr bol oksigenlə təmin olunur və intensiv enerji ayrılması sabit yüksək bədən temperaturu (istiqanlılıq) yaradır."
        }
  ],
      miniQuiz: [
        {
              "q": "Quşların uçuş zamanı fasiləsiz oksigen təminatını həyata keçirən xüsusi tənəffüs adaptasiyası hansıdır?",
              "options": [
                    "Dəri tənəffüsü",
                    "Hava kisələri və ikiqat tənəffüs",
                    "Geniş traxeyalar",
                    "Əlavə qəlsəmələr"
              ],
              "a": 1,
              "exp": "Ağciyərlərə bağlı hava kisələri qanad çalarkən havanı ağciyərlərdən iki dəfə keçirir."
        },
        {
              "q": "Aşağıdakı sürünənlərdən hansının ürəyi digərlərindən fərqli olaraq tam 4 kameralıdır?",
              "options": [
                    "Gürzə ilanı",
                    "Xamelyon",
                    "Timsah",
                    "Bataqlıq tısbağası"
              ],
              "a": 2,
              "exp": "Sürünənlər arasında yalnız timsahların ürəyində tam arakəsmə var və 4 kameralıdır."
        }
  ]
    },

  {
      id: 'biologiya-7-6',
      subjectId: 'biologiya',
      grade: 7,
      unit: 'Bölmə 6: Məməlilər Sinfi',
      unitOrder: 6,
      title: 'Ali onurğalılar: quruluşu, çoxalması və plasenta',
      order: 6,
      readTimeMinutes: 18,
      difficulty: 2,
      summary: 'Məməlilərin əsas əlamətləri (tük örtüyü, süd vəziləri, qulaq seyvanı, 7 boyun fəqərəsi, diafraqma, sol aorta qövsü), ilk məməlilər, kisəlilər və plasentalılar.',
      theoryMarkdown: `
  ### Məməlilər Sinfi (Zoosferanın Ən Ali Qrupu)

  #### 1. Məməlilərin Əsas Proqressiv Əlamətləri (Aromorfozları)
  * Balalarını **südlə bəsləmək** üçün süd vəzilərinin olması.
  * Bədənin **tük örtüyü** ilə örtülməsi (istilik izolyasiyası).
  * Dəridə çoxlu vəzilərin olması: tər, piy, süd və qoxu vəziləri.
  * Başda hərəkətli **qulaq seyvanının** və orta qulaqda **üç eşitmə sümüyünün** (çəkic, zindan, üzəngi) olması.
  * Döş və qarın boşluqlarını ayıran əzələvi arakəsmənin — **diafraqmanın** olması.
  * Boyun fəqərələrinin sayının demək olar ki, bütün məməlilərdə (hətta zürafədə və balinada) **həmişə 7 ədəd** olması.
  * Dişlərin yuvalarda (alveollarda) yerləşməsi və differensiasiyası: **kəsici, köpək və azı dişləri**.
  * **Qan dövranı:** Tam 4 kameralı ürək və sol mədəcikdən çıxan **sol aorta qövsü**. Yetkin eritrositlərdə nüvə yoxdur (daha çox oksigen daşıyır). İstiqanlıdırlar.

  #### 2. Məməlilərin Təsnifatı
  1. **Yumurtayan məməlilər (İlk vəhşilər / Kloakalılar):** Yumurta qoyurlar, lakin balalarını südlə bəsləyirlər; məmə ucluqları yoxdur, süd dəriyə süzülür (ördəkburun, yexidna).
  2. **Kisəlilər:** Plasenta inkişaf etmədiyindən bala çox zəif, yarımçıq doğulur və ananın qarnındakı kisədə süd əmərək inkişafını tamamlayır (kenquru, koala).
  3. **Plasentalı məməlilər (Ali məməlilər):** Embrion ana bətnində xüsusi orqan — **plasenta (cift)** vasitəsilə qidalanır və tam formalaşmış vəziyyətdə doğulur:
     - Həşəratyeyənlər (kirpi, köstəbək).
     - Yarasalar (əsl uçan məməlilər, exolokasiya).
     - Gəmiricilər (dovşan, siçan, qunduz).
     - Yırtıcılar (canavar, şir, ayı).
     - Pərayaqlılar və balinakimilər (su məməliləri: suitilər, delfinlər, mavi balina).
     - Dırnaqlılar (təkdırnaqlılar və cütdırnaqlılar).
     - Primatlar (meymunlar və insan).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Məməlilərdə boyun fəqərəsi} = 7 \\\text{ (sabit say)}",
              "name": "Boyun skeleti qanunauyğunluğu",
              "desc": "Bütün məməlilərdə 7 ədəd boyun fəqərəsi var"
        },
        {
              "formula": "\\\text{Eritrositlər} = \\\text{Nüvəsiz, ikitərəfi basıq disk}",
              "name": "Məməli qan hüceyrəsi",
              "desc": "Maksimal oksigen tutumu üçün nüvəsini itirmiş qırmızı qan kürəcikləri"
        }
  ],
      glossary: [
        {
              "term": "Plasenta (Cift)",
              "definition": "Rüşeymlə ana orqanizmi arasında maddələr və qaz mübadiləsini təmin edən bətn orqanı."
        },
        {
              "term": "Diafraqma",
              "definition": "Məməlilərdə döş və qarın boşluğunu ayıran, tənəffüsdə iştirak edən əzələ arakəsməsi."
        },
        {
              "term": "Exolokasiya",
              "definition": "Yarasaların və delfinlərin ultrasəs siqnalları göndərib əks-sədanı tutaraq istiqamət təyin etməsi."
        }
  ],
      solvedExamples: [
        {
              "problem": "Zürafənin boynu çox uzun, balinanın boynu isə olduqca qısa olmasına baxmayaraq onların hər ikisində neçə boyun fəqərəsi vardır?",
              "solution": "Bütün plasentalı məməlilərdə (bircə lenivets və lamantindən başqa) boyun fəqərələrinin sayı həmişə sabitdir və 7 ədəddir. Zürafədə fəqərələr çox uzanmış, balinada isə yastılaşmışdır."
        }
  ],
      miniQuiz: [
        {
              "q": "Balalarını südlə bəsləyən, lakin quşlar kimi yumurta qoyan məməli hansıdır?",
              "options": [
                    "Kenquru",
                    "Ördəkburun",
                    "Yarasa",
                    "Delfin"
              ],
              "a": 1,
              "exp": "Ördəkburun və yexidna yumurtayan ibtidai məməlilərdir (kloakalılardır)."
        },
        {
              "q": "Məməlilərin qanında olan yetkin eritrositlərin digər onurğalılardan əsas fərqi nədir?",
              "options": [
                    "Həcmləri çox böyükdür",
                    "Nüvəyə malik deyillər",
                    "Ağ rəngdədirlər",
                    "Bölünərək çoxalırlar"
              ],
              "a": 1,
              "exp": "Məməlilərdə eritrositlər yetkinləşərkən nüvələrini itirir ki, daha çox hemoqlobin və oksigen daşıya bilsinlər."
        }
  ]
    },

  {
      id: 'biologiya-8-1',
      subjectId: 'biologiya',
      grade: 8,
      unit: 'Bölmə 1: İnsan Orqanizmi, Toxumalar və Daxili Mühit',
      unitOrder: 1,
      title: 'İnsanın hüceyrəvi quruluşu, 4 əsas toxuma və homeostaz',
      order: 1,
      readTimeMinutes: 17,
      difficulty: 2,
      summary: 'İnsan orqanizminin toxuma növləri (epitel, birləşdirici, əzələ, sinir), orqanizmin daxili mühiti (qan, limfa, toxuma mayesi) və homeostaz.',
      theoryMarkdown: `
  ### İnsan Orqanizmi və Daxili Mühit

  #### 1. İnsanın Dörd Əsas Toxuma Qrupu
  İnsan orqanizmi trilyonlarla hüceyrədən və 4 əsas toxuma növündən ibarətdir:
  1. **Epitel toxuması:** Bədən səthini örtür, daxili orqanların və damarların selikli qişasını təşkil edir, vəziləri (ifrazat) formalaşdırır. Hüceyrələri bir-birinə çox sıx yerləşir, hüceyrəarası maddəsi demək olar ki, yoxdur.
  2. **Birləşdirici toxuma:** Ən geniş yayılmış toxumadır. Hüceyrələri az, **hüceyrəarası maddəsi çoxdur**:
     - Bərk: Sümük toxuması (ossein və kalsium-fosfat) və qığırdaq.
     - Lifli: Vətərlər, bağlar və dərialtı piy qatı.
     - Maye: **Qan və limfa** toxuması (maddələrin daşınması).
  3. **Əzələ toxuması:** Yığılma və oyanma qabiliyyətinə malikdir:
     - *Eninəzolaqlı skelet əzələsi:* Skeletə birləşir, iradidir (beyin qabığı idarə edir), çoxnüvəlidir, sürətlə yığılır və tez yorulur.
     - *Eninəzolaqlı ürək əzələsi (miokard):* Yalnız ürəkdədir, hüceyrələri bir-biri ilə körpücüklərlə bağlıdır, avtomatizmə malikdir, qeyri-iradidir.
     - *Saya əzələ toxuması:* Daxili orqanların (mədə, bağırsaq, damarlar) divarındadır, təknüvəli iyvari hüceyrələrdir, qeyri-iradidir, yavaş yığılır və yorulmur.
  4. **Sinir toxuması:** Oyanma və oyanmanı nəql etmə xassəsinə malikdir. Əsas vahidi **neyrondur** (cisim, qısa çıxıntılar — **dendritlər**, uzun çıxıntı — **akson**). Köməkçi qidalandırıcı hüceyrələri isə **neyroqliya** adlanır.

  #### 2. Orqanizmin Daxili Mühiti və Homeostaz
  Hüceyrələr bilavasitə xarici mühitlə deyil, orqanizmin daxili maye mühiti ilə təmasdadır:
  $$\	ext{Daxili Mühit} = \	ext{Qan} + \	ext{Limfa} + \	ext{Toxuma mayesi}$$
  * **Homeostaz:** Daxili mühitin kimyəvi tərkibinin və fiziki parametrlərinin (temperatur, təzyiq, pH, qlükoza səviyyəsi) sabit qalması mexanizmidir (sinir və endokrin sistem tərəfindən idarə olunur).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Daxili Mühit} = \\\text{Qan} + \\\text{Limfa} + \\\text{Toxuma mayesi}",
              "name": "Daxili mühitin tərkibi",
              "desc": "Hüceyrələrin bilavasitə təmasda olduğu daxili mühit sistemi"
        },
        {
              "formula": "\\\text{pH(qan)} \\approx 7.36 - 7.42",
              "name": "Qanın homeostaz sabiti",
              "desc": "İnsan qanının sabit zəif qələvi mühiti"
        }
  ],
      glossary: [
        {
              "term": "Neyron",
              "definition": "Sinir sisteminin impuls qəbul edən və ötürən əsas morfoloji və funksional vahidi."
        },
        {
              "term": "Homeostaz",
              "definition": "Orqanizmin daxili mühitinin nisbi dinamik sabitliyini qoruyub saxlamaq xassəsi."
        },
        {
              "term": "Akson",
              "definition": "Neyronun sinir impulsunu hüceyrə cisminin xaricinə doğru aparan tək uzun çıxıntısı."
        }
  ],
      solvedExamples: [
        {
              "problem": "Niyə skelet əzələləri tez yorulduğu halda, daxili orqanların divarındakı saya əzələlər sutkalarla yorulmadan işləyir?",
              "solution": "Skelet əzələləri böyük güc və sürətli hərəkət yaratmaq üçün çoxlu ATF enerjisi sərf edir və süd turşusu toplayaraq yorulur. Saya əzələlər isə ritmik, çox zəif və qənaətcil enerji sərfiyyatı ilə yığıldığından praktiki olaraq yorulmur."
        }
  ],
      miniQuiz: [
        {
              "q": "Qan və sümük toxuması insanın 4 əsas toxumasından hansı növə aiddir?",
              "options": [
                    "Epitel toxuması",
                    "Birləşdirici toxuma",
                    "Əzələ toxuması",
                    "Sinir toxuması"
              ],
              "a": 1,
              "exp": "Qan maye, sümük isə bərk birləşdirici toxumadır."
        },
        {
              "q": "Ürək əzələsinin (miokardın) skelet əzələsindən fərqi nədir?",
              "options": [
                    "Saya hüceyrələrdən ibarətdir",
                    "Qeyri-iradi işləyir və avtomatizmə malikdir",
                    "Çox tez yorulur",
                    "Beyin qabığı tərəfindən şüurlu idarə olunur"
              ],
              "a": 1,
              "exp": "Ürək əzələsi eninəzolaqlı olsa da, avtomatik və iradəmizdən asılı olmayaraq qeyri-iradi döyünür."
        }
  ]
    },

  {
      id: 'biologiya-8-2',
      subjectId: 'biologiya',
      grade: 8,
      unit: 'Bölmə 2: Qan Dövranı və İmmunitet Sistemi',
      unitOrder: 2,
      title: 'Qanın tərkibi, qan qrupları, ürəyin işi və immunitet',
      order: 2,
      readTimeMinutes: 19,
      difficulty: 2,
      summary: 'Qan plazması və formalı elementlər (eritrositlər, leykositlər, trombositlər), AB0 qan qrupları və rezus-faktor, qan dövranları və İ.Meçnikovun faqositoz təlimi.',
      theoryMarkdown: `
  ### Qan Dövranı və İmmunitet

  #### 1. Qanın Tərkibi
  Qan — maye birləşdirici toxumadır (yetkin insanda təxminən 5 litr):
  * **Qan plazması ($55-60\%$):** $90-92\%$-i su, $7-8\%$-i zülallar (albumin, qlobulin, fibrinogen — laxtalanmanı təmin edir), qlükoza və mineral duzlar.
  * **Qanın formalı elementləri ($40-45\%$):**
    - **Eritrositlər (Qırmızı qan kürəcikləri):** 1 mm³ qanda $4.5-5$ milyon. Nüvəsiz, diskşəkilli hüceyrələrdir. Tərkibindəki **hemoqlobin ($Hb$)** vasitəsilə oksigen və karbon qazını daşıyır. Qırmızı sümük iliyində yaranır, 120 gün yaşayır, dalaqda və qaraciyərdə parçalanır.
    - **Leykositlər (Ağ qan hüceyrələri):** 1 mm³ qanda $4000-9000$. Nüvəli, hərəkətli hüceyrələrdir. Bədəni yad mikroblardan qoruyur (**İ.İ.Meçnikov — Faqositoz təlimi**).
    - **Trombositlər (Qan lövhəcikləri):** 1 mm³ qanda $150000-400000$. Qanın laxtalanmasında iştirak edərək qanaxmanı dayandırır.

  #### 2. Qan Qrupları (AB0 Sistemi) və Qanköçürmə
  Qan eritrositlərdəki **aqlütinogenlərdən ($A$ və $B$)** və plazmadakı **aqlütininlərdən ($\alpha$ və $\beta$)** asılı olaraq 4 qrupa bölünür:
  * **I (0) qrupu:** Aqlütinogen yoxdur, plazmada $\alpha, \beta$ var.
  * **II (A) qrupu:** Eritrositdə $A$, plazmada $\beta$ var.
  * **III (B) qrupu:** Eritrositdə $B$, plazmada $\alpha$ var.
  * **IV (AB) qrupu:** Eritrositdə $A$ və $B$ var, aqlütinin yoxdur.
  * **Rezus-faktor ($Rh$):** İnsanların $85\%$-nin qanında xüsusi zülal var ($Rh^+$), $15\%$-də yoxdur ($Rh^-$).

  #### 3. İmmunitet Sistemi
  Orqanizmin xəstəliktörədici amillərdən və yad zülallardan qorunmaq qabiliyyətidir.
  * **Təbii immunitet:** Anadangəlmə və qazanılmış (xəstəlik keçirdikdən sonra yaranan).
  * **Süni immunitet:**
    - *Fəal (Aktiv):* **Vaksin (peyvənd)** vurulduqda orqanizmin özü anticisimlər hazırlayır (məsələn, çiçək, qızılca).
    - *Qeyri-fəal (Passiv):* Hazır **müalicəvi zərdab** (başqa canlının anticisimləri) yeridildikdə (ilan sancması, difteriya zamanı təcili yardım).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Ürək tsikli} = 0.8 \\\text{ san} (0.1 \\\text{ qulaqcıq} + 0.3 \\\text{ mədəcik} + 0.4 \\\text{ ümumi pauza})",
              "name": "Ürək tsiklinin fazaları",
              "desc": "Ürəyin 0.8 saniyəlik iş və dincəlmə dövrü"
        },
        {
              "formula": "\\\text{Qan təzyiqi (norma)} \\approx 120 / 80 \\\text{ mm c.st.}",
              "name": "Normal arterial təzyiq",
              "desc": "Sistolik (maksimal) və diastolik (minimal) təzyiq"
        }
  ],
      glossary: [
        {
              "term": "Faqositoz",
              "definition": "Leykositlərin yad mikrobları əhatə edərək daxilində həzm edib məhv etməsi."
        },
        {
              "term": "Vaksin",
              "definition": "Orqanizmdə fəal süni immunitet yaratmaq üçün yeridilən zəiflədilmiş və ya öldürülmüş mikrob preparatı."
        },
        {
              "term": "Müalicə zərdabı",
              "definition": "Xəstəyə təcili kömək üçün yeridilən hazır anticisimlər saxlayan qan preparatı."
        }
  ],
      solvedExamples: [
        {
              "problem": "İnsanın ürək döyüntülərinin sayı dəqiqədə 75 olarsa, onun ürək mədəcikləri 1 saat ərzində cəmi neçə dəqiqə işləyər və neçə dəqiqə istirahət edər?",
              "solution": "Bir ürək tsikli 0.8 saniyədir: mədəciklər 0.3 saniyə yığılır (işləyir), 0.5 saniyə dincəlir. 1 saat = 60 dəqiqə. Mədəciklərin iş vaxtı: 60 × (0.3 / 0.8) = 22.5 dəqiqə. Dincəlmə vaxtı: 60 × (0.5 / 0.8) = 37.5 dəqiqə."
        }
  ],
      miniQuiz: [
        {
              "q": "Qanda oksigen qazını daşıyan hemoqlobin zülalı hansı qan hüceyrəsində yerləşir?",
              "options": [
                    "Leykositlərdə",
                    "Eritrositlərdə",
                    "Trombositlərdə",
                    "Qan plazmasında"
              ],
              "a": 1,
              "exp": "Eritrositlərin daxilində külli miqdarda hemoqlobin zülalı cəmlənmişdir."
        },
        {
              "q": "İlan və ya əqrəb sancması zamanı insana təcili olaraq nə vurulmalıdır?",
              "options": [
                    "Vaksin",
                    "Müalicəvi zərdab (hazır anticisimlər)",
                    "Vitamin C",
                    "Antibiotik"
              ],
              "a": 1,
              "exp": "Təcili vəziyyətlərdə orqanizmin özünün anticism yaratmasını gözləməyə vaxt olmadığından hazır zərdab yeridilir."
        }
  ]
    },

  {
      id: 'biologiya-8-3',
      subjectId: 'biologiya',
      grade: 8,
      unit: 'Bölmə 3: Tənəffüs və Həzm Sistemləri',
      unitOrder: 3,
      title: 'Ağciyər tənəffüsü, həzm orqanları və fermentlər',
      order: 3,
      readTimeMinutes: 18,
      difficulty: 2,
      summary: 'Tənəffüs yolları və ağciyər alveolları, qazlar mübadiləsi, həzm traktı (ağız, mədə, bağırsaqlar), həzm vəziləri (qaraciyər, mədəaltı vəzi) və fermentlərin rolu.',
      theoryMarkdown: `
  ### Tənəffüs və Həzm Sistemləri

  #### 1. Tənəffüs Sistemi
  * **Tənəffüs yolları:** Burun boşluğu (hava isidilir, nəmləndirilir və mikroblardan təmizlənir), udlaq, qırtlaq (səs telləri), nəfəs borusu (traxeya) və bronxlar.
  * **Ağciyərlər və Alveollar:** Bronxlar şaxələnərək ağciyərlərdə bronxiollar və sıx kapilyar şəbəkəsi ilə örtülmüş mikroskopik hava qovuqcuqları — **alveollar** (təxminən 700 milyon) əmələ gətirir. Qaz mübadiləsi diffuziya yolu ilə alveol qılafından keçərək baş verir.
  * **Tənəffüs hərəkətləri:** Qabırğaarası əzələlər və **diafraqma** tərəfindən həyata keçirilir. Nəfəsalmada diafraqma yastılaşır, döş qəfəsi genişlənir. Tənəffüs mərkəzi **uzunsov beyindədir** (qanda $CO_2$ qatılığı artdıqda oyanır).

  #### 2. Həzm Sistemi və Qidanın Parçalanması
  Həzm — mürəkkəb qida maddələrinin (zülal, yağ, karbohidrat) fermentlərin təsiri ilə qana sorula bilən sadə monomerlərə parçalanmasıdır.
  * **Ağız boşluğu:** Dişlər (böyüklərdə 32 ədəd), dil və tüpürcək vəziləri. Tüpürcəkdəki **ptialin (amilaza)** fermenti nişastanı qlükozaya parçalamağa başlayır, **lizosim** isə mikrobları məhv edir.
  * **Mədə:** Mədə şirəsi (pepsin fermenti və xlorid turşusu $HCl$). **Pepsin** zülalları qismən parçalayır.
  * **Onikibarmaq bağırsaq:**
    - **Qaraciyər:** **Öd** ifraz edir. Öd ferment deyil, yağları xırda damcılara parçalayır (**emulsiyalaşdırır**) və bağırsaq fermentlərini aktivləşdirir.
    - **Mədəaltı vəzi:** Əsas həzm fermentlərini ifraz edir: *tripsin* (zülalları aminturşulara), *lipaza* (yağları qliserin və yağ turşularına), *amilaza* (karbohidratları qlükozaya parçalayır).
  * **Nazik bağırsaq:** Qida maddələrinin son tam parçalanması və divardakı **xovlar** vasitəsilə qana (aminturşular, qlükoza) və limfaya (yağlar) **sorulması** baş verir.
  * **Yoğun bağırsaq:** Suyun geriyə sorulması və nəcis kütlələrinin formalaşması (simbiotik bakteriyalar B və K vitaminləri sintez edir).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Zülallar} \\xrightarrow{\\\text{fermentlər}} \\\text{Amin turşuları}",
              "name": "Zülalların həzmi",
              "desc": "Pepsin və tripsin fermentləri ilə parçalanma"
        },
        {
              "formula": "\\\text{Karbohidratlar} \\rightarrow \\\text{Qlükoza}, \\\\quad \\\text{Yağlar} \\rightarrow \\\text{Qliserin və yağ turşuları}",
              "name": "Monomerlər",
              "desc": "Həzm məhsulları"
        }
  ],
      glossary: [
        {
              "term": "Alveol",
              "definition": "Ağciyərlərdə qaz mübadiləsini həyata keçirən sıx kapilyarlarla əhatəli hava qovuqcuğu."
        },
        {
              "term": "Öd",
              "definition": "Qaraciyərin hazırladığı, yağları emulsiyalaşdıran və fermentləri aktivləşdirən həzm mayesi."
        },
        {
              "term": "Xov",
              "definition": "Nazik bağırsağın selikli qişasında sorulma səthini minlərlə dəfə artıran mikroskopik çıxıntılar."
        }
  ],
      solvedExamples: [
        {
              "problem": "İnsan bir parça çörəyi ağzında uzun müddət çeynədikdə niyə şirin dad hiss etməyə başlayır?",
              "solution": "Çörəyin tərkibindəki dadsız nişasta tüpürcəyin tərkibindəki amilaza (ptialin) fermentinin təsiri ilə dərhal sadə şəkərlərə (maltoza və qlükoza) parçalanır və şirin dad duyulur."
        }
  ],
      miniQuiz: [
        {
              "q": "Qaraciyərin hazırladığı ödün həzmdəki əsas rolu nədir?",
              "options": [
                    "Zülalları birbaşa parçalamaq",
                    "Yağları xırda damcılara parçalamaq (emulsiyalaşdırmaq)",
                    "Şəkərləri udmaq",
                    "Xlorid turşusu ifraz etmək"
              ],
              "a": 1,
              "exp": "Öd yağları emulsiyalaşdıraraq lipaza fermentinin təsir səthini artırır."
        },
        {
              "q": "Tənəffüs mərkəzi baş beynin hansı şöbəsində yerləşir?",
              "options": [
                    "Beyincikdə",
                    "Böyük yarımkürələrdə",
                    "Uzunsov beyində",
                    "Orta beyində"
              ],
              "a": 2,
              "exp": "Həyati vacib tənəffüs və qan-damar mərkəzləri uzunsov beyində yerləşir."
        }
  ]
    },

  {
      id: 'biologiya-8-4',
      subjectId: 'biologiya',
      grade: 8,
      unit: 'Bölmə 4: Dayaq-Hərəkət və İfrazat Sistemləri',
      unitOrder: 4,
      title: 'İnsanın skeleti, əzələ sistemi, böyrəklər və nefron',
      order: 4,
      readTimeMinutes: 18,
      difficulty: 2,
      summary: 'İnsan skeletinin şöbələri (kəllə, gövdə, ətraflar), onurğanın 4 əyriliyi, sümüklərin birləşməsi, böyrəyin quruluşu, nefron və sidiyin əmələ gəlməsi.',
      theoryMarkdown: `
  ### Dayaq-Hərəkət və İfrazat Sistemləri

  #### 1. İnsan Skeleti və Əzələlər
  İnsan skeleti 200-dən artıq sümükdən ibarətdir:
  * **Kəllə skeleti:** Beyin şöbəsi və üz şöbəsi (yeganə hərəkətli sümük alt çənədir).
  * **Gövdə skeleti:**
    - Onurğa sütunu: 33-34 fəqərə (7 boyun, 12 döş, 5 bel, 5 oma, 4-5 büzdüm). İnsanın düzqamətli yeriməsi ilə əlaqədar **4 fizioloji əyrilik** yaranmışdır: boyun və bel lordozu (irəli), döş və oma kifozu (geri). Bu əyriliklər tullanarkən və qaçarkən zərbələri amortizasiya edir.
    - Döş qəfəsi: 12 cüt qabırğa, döş sümüyü və 12 döş fəqərəsi.
  * **Ətraflar skeleti:** Qurşaq və sərbəst ətraflar (çanaq sümükləri bədən ağırlığını saxlamaq üçün kasaşəkilli genişlənmişdir; ayaq pəncəsi tağvaridir).
  * **Sümüklərin birləşməsi:** Hərəkətsiz (kəllə tikişləri), yarımhərəkətli (fəqərələrarası qığırdaq disklər) və hərəkətli (**oynaqlar**).

  #### 2. İfrazat Sistemi — Böyrəklər
  İfrazat orqanları maddələr mübadiləsinin son zərərli məhsullarını (sidik cövhəri, sidik turşusu, artıq duzlar və su) bədəndən kənarlaşdırır.
  * **Böyrəklər:** Qarın boşluğunun arxa divarında bel nahiyəsində yerləşən bir cüt paxlaşəkilli orqandır.
  * **Nefron — Böyrəyin struktur və funksional vahididir** (hər böyrəkdə 1 milyondan çox):
    - Kapsul və damar yumaqçığı (böyrək cisimciyi).
    - Qıvrım sidik kanalcıqları və Henle ilgəyi.
  * **Sidiyin Əmələgəlmə Mərhələləri:**
    1. **Filtrasiya (Süzülmə):** Qan təzyiq altında yumaqcıqdan kapsula süzülür və **ilkin sidik** yaranır (gündə təxminən **150-170 litr**). İlkin sidikdə qan hüceyrələri və iri zülallardan başqa plazmanın bütün maddələri (qlükoza, amin turşuları, su) olur.
    2. **Reabsorbsiya (Geri sorulma):** Qıvrım kanalcıqlardan keçərkən orqanizm üçün faydalı maddələr (bütün qlükoza, amin turşuları, suyun $99\%$-i) yenidən qana sorulur. Qalan qatı tullantı məhlulu **son sidikdir** (gündə təxminən **1.5 litr**).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{İlkin sidik} \\approx 150 - 170 \\\text{ litr/gün}, \\\\quad \\\text{Son sidik} \\approx 1.5 \\\text{ litr/gün}",
              "name": "Böyrəklərin fəaliyyət göstəricisi",
              "desc": "Suyun 99%-i geri sorulur"
        },
        {
              "formula": "\\\text{Onurğa fəqərələri} = 7 + 12 + 5 + 5 + (4-5) = 33 - 34",
              "name": "İnsan fəqərə bölgüsü",
              "desc": "Boyun, döş, bel, oma və büzdüm şöbələri"
        }
  ],
      glossary: [
        {
              "term": "Nefron",
              "definition": "Böyrəyin qanı süzən və sidik hazırlayan mikroskopik funksional vahidi."
        },
        {
              "term": "Reabsorbsiya",
              "definition": "İlkin sidikdəki su və faydalı qida maddələrinin kanalcıqlardan yenidən qana geri sorulması."
        },
        {
              "term": "Amortizasiya",
              "definition": "Onurğa əyriliklərinin və pəncə tağının hərəkət zamanı beyini silkələnmədən qoruması."
        }
  ],
      solvedExamples: [
        {
              "problem": "Sağlam insanın son sidiyində qlükoza aşkar edilərsə, bu hansı xəstəliyin əlamətidir?",
              "solution": "Sağlam insanda ilkin sidikdəki qlükoza kanalcıqlarda 100% geri sorulur və son sidikdə qlükoza olmur. Əgər son sidikdə şəkər çıxarsa, bu mədəaltı vəzinin insulin çatışmazlığından qaynaqlanan Şəkərli Diabet xəstəliyinin əlamətidir."
        }
  ],
      miniQuiz: [
        {
              "q": "İnsanın düzqamətli yeriməsi ilə əlaqədar onurğasında neçə əyrilik formalaşmışdır?",
              "options": [
                    "2 əyrilik",
                    "4 əyrilik (2 lordoz, 2 kifoz)",
                    "Heç bir əyrilik yoxdur",
                    "1 böyük əyrilik"
              ],
              "a": 1,
              "exp": "İnsanda boyun və bel irəli (lordoz), döş və oma geri (kifoz) olmaqla 4 əyrilik var."
        },
        {
              "q": "Böyrəklərdə sutka ərzində təxminən neçə litr ilkin sidik yaranır?",
              "options": [
                    "1.5 litr",
                    "15-20 litr",
                    "150-170 litr",
                    "500 litr"
              ],
              "a": 2,
              "exp": "Yumaqcıqlarda gündə 150-170 litr ilkin sidik süzülür, lakin onun 99%-i geri sorulur."
        }
  ]
    },

  {
      id: 'biologiya-8-5',
      subjectId: 'biologiya',
      grade: 8,
      unit: 'Bölmə 5: Sinir Sistemi və Analizatorlar (Hiss Orqanları)',
      unitOrder: 5,
      title: 'Baş və onurğa beyni, vegetativ sinir sistemi, göz və qulaq',
      order: 5,
      readTimeMinutes: 19,
      difficulty: 3,
      summary: 'Mərkəzi və periferik sinir sistemi, baş beynin şöbələri, simpatik və parasimpatik sistemlər, gözün optik aparatı, torlu qişa və eşitmə analizatoru.',
      theoryMarkdown: `
  ### Sinir Sistemi və Analizatorlar

  #### 1. Sinir Sisteminin Şöbələri
  * **Mərkəzi Sinir Sistemi (MSS):** Baş beyin və Onurğa beyni.
  * **Periferik Sinir Sistemi:** Sinirlər, sinir düyünləri və sinir ucları (reseptorlar).
  * **Funksional bölgü:**
    - *Somatik sinir sistemi:* Skelet əzələlərini idarə edir, iradidir.
    - *Vegetativ (Muxtar) sinir sistemi:* Daxili orqanların işini idarə edir, qeyri-iradidir:
      * **Simpatik sistem (Həyəcan/Stres):** Ürək döyüntülərini artırır, qan təzyiqini qaldırır, bəbəkləri genişləndirir, lakin həzmi zəiflədir.
      * **Parasimpatik sistem (İstirahət/Bərpa):** Ürək döyüntülərini yavaşladır, təzyiqi salır, həzmi və bağırsaq peristaltikasını gücləndirir.

  #### 2. Baş Beynin Şöbələri
  1. **Uzunsov beyin:** Qan dövranı, tənəffüs, qoruyucu reflekslər (asqırma, öskürmə, qusma).
  2. **Körpü və Beyincik:** Hərəkətlərin koordinasiyası və bədən müvazinətinin saxlanması.
  3. **Orta beyin:** Əzələ tonusu, ilkin görmə və eşitmə səmtlənmə refleksləri.
  4. **Aralıq beyin (Talamus və Hipotalamus):** Bütün duyğuların qabıqaltı mərkəzi, maddələr mübadiləsi, istilik tənzimi, aclıq və susuzluq mərkəzi.
  5. **Böyük yarımkürələr qabığı:** Ali sinir fəaliyyəti, düşüncə, nitq, yaddaş və şüur:
     - Ənsə payı: Görmə zonası.
     - Gicgah payı: Eşitmə zonası.
     - Təpə payı: Dəri-əzələ duyğusu.
     - Alın payı: Hərəki zona, iradi davranış və təfəkkür.

  #### 3. Analizatorlar: Görmə və Eşitmə
  İ.P.Pavlova görə analizator 3 hissədən ibarətdir: **Reseptor $\rightarrow$ Nəqledici yol $\rightarrow$ Beyin qabığındakı mərkəz**.
  * **Göz (Görmə analizatoru):**
    - Qişalar: Ağlı qişa (ön hissəsi şəffaf buynuz qişa), damarlı qişa (əlvan qişa və bəbək), **torlu qişa (retina)**.
    - Fotoreseptorlar: **Çöpcüklər** (alatoran və gecə görmə, rodopsin piqmenti) və **Kolbacıqlar** (rəngli və parlaq gündüz görmə, yodopsin piqmenti).
    - Optik sistem: Buynuz qişa, göz bülluru (akomodasiya — qabarıqlığını dəyişmə) və şüşəyəbənzər cisim.
  * **Qulaq (Eşitmə və müvazinət analizatoru):**
    - Xarici qulaq: Qulaq seyvanı, xarici qulaq keçəcəyi və təbil pərdəsi.
    - Orta qulaq: Üç eşitmə sümüyü (**çəkic, zindan, üzəngi**) və Yevstaxi borusu (təzyiqi bərabərləşdirir).
    - Daxili qulaq: Eşitmə orqanı olan **ilbiz** (Korti orqanı reseptorları) və müvazinət orqanı olan **üç yarımdairəvi kanal**.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Analizator} = \\\text{Reseptor} + \\\text{Nəqledici sinir} + \\\text{Beyin qabığı zonası}",
              "name": "Pavlov analizator prinsipi",
              "desc": "Hiss orqanlarının 3 bütöv komponenti"
        }
  ],
      glossary: [
        {
              "term": "Beyincik",
              "definition": "Bədənin müvazinətini, hərəkətlərin dəqiqliyini və koordinasiyasını tənzimləyən beyin şöbəsi."
        },
        {
              "term": "Kolbacıqlar",
              "definition": "Torlu qişada yerləşən və rəngləri fərqləndirməyə cavabdeh olan həssas reseptorlar."
        },
        {
              "term": "Yevstaxi borusu",
              "definition": "Orta qulaq boşluğunu udlaqla birləşdirərək təbil pərdəsinin hər iki tərəfində hava təzyiqini bərabərləşdirən boru."
        }
  ],
      solvedExamples: [
        {
              "problem": "Spirtli içki qəbul etmiş insanın yerişi niyə səndələyir və hərəkətləri nizamsızlaşır?",
              "solution": "Alkoqol baş beynin hərəkətlərin koordinasiyasına və müvazinətə cavabdeh olan beyincik şöbəsinin neyronlarını tormozlayır. Nəticədə insan bədənini düz saxlaya bilmir və hərəkət koordinasiyası pozulur."
        }
  ],
      miniQuiz: [
        {
              "q": "Gözün torlu qişasında rəngli görməni təmin edən reseptorlar hansılardır?",
              "options": [
                    "Çöpcüklər",
                    "Kolbacıqlar",
                    "Göz bülluru",
                    "Göz siniri"
              ],
              "a": 1,
              "exp": "Kolbacıqlar parlaq işıqda rəngli görməni (qırmızı, yaşıl, mavi) təmin edir."
        },
        {
              "q": "Bədənin qorxu və stres anında qan təzyiqini artıran və bəbəkləri genişləndirən sinir sistemi hansıdır?",
              "options": [
                    "Parasimpatik sistem",
                    "Simpatik sistem",
                    "Yalnız onurğa beyni",
                    "Somatik sistem"
              ],
              "a": 1,
              "exp": "Simpatik sinir sistemi 'döyüş və ya qaç' rejimini aktivləşdirir."
        }
  ]
    },

  {
      id: 'biologiya-8-6',
      subjectId: 'biologiya',
      grade: 8,
      unit: 'Bölmə 6: Endokrin Vəzilər və Orqanizmin Humoral Tənzimi',
      unitOrder: 6,
      title: 'Hormonlar, daxili sekresiya vəziləri və qarışıq vəzilər',
      order: 6,
      readTimeMinutes: 17,
      difficulty: 2,
      summary: 'Daxili, xarici və qarışıq sekresiya vəziləri, hipofiz (\'vəzilərin rəisi\'), qalxanabənzər vəzi (tiroksin), böyrəküstü vəzilər (adrenalin), insulin və qlükaqon.',
      theoryMarkdown: `
  ### Endokrin Sistem və Humoral Tənzim

  #### 1. Vəzilərin Təsnifatı
  * **Xarici sekresiya vəziləri (Ekzokrin):** Xüsusi axacaqları var, ifrazatlarını bədən səthinə və ya daxili orqanların boşluğuna tökürlər (tər, piy, tüpürcək, göz yaşı, süd vəziləri).
  * **Daxili sekresiya vəziləri (Endokrin):** Axacaqları yoxdur, hazırladıqları bioloji aktiv maddələri — **hormonları** bilavasitə **qana və limfaya** ifraz edirlər (hipofiz, epifiz, qalxanabənzər, qalxanabənzər ətraf, timus, böyrəküstü vəzilər).
  * **Qarışıq sekresiya vəziləri:** Həm xarici axacaqlara malikdir, həm də qana hormon ifraz edir:
    - **Mədəaltı vəzi:** Xarici — onikibarmaq bağırsağa həzm şirəsi tökür; Daxili — qana **insulin** (şəkəri azaldır) və **qlükaqon** (şəkəri artırır) ifraz edir.
    - **Cinsiyyət vəziləri (Toxumluq və yumurtalıq):** Xarici — qametlər (spermatozoid və yumurtahüceyrə); Daxili — cinsi hormonlar (testosteron, estrogen).

  #### 2. Əsas Daxili Sekresiya Vəziləri və Xəstəliklər
  * **Hipofiz vəzisi:** Beyin əsasında yerləşir, digər endokrin vəzilərin fəaliyyətini idarə edir.
    - *Böyümə hormonu (Somatotrop):* Uşaqlıqda çatışmadıqda **cırtdanboyluq (nanizm)**, artıq olduqda **nəhənglik (giqantizm)** yaranır. Yetkin insanda çoxaldıqda bədən çıxıntıları böyüyür (**akromeqaliya**).
  * **Qalxanabənzər vəzi:** Qırtlağın önündə yerləşir, tərkibində yod olan **tiroksin** hormonu ifraz edir (maddələr mübadiləsini tənzimləyir):
    - Uşaqlıqda çatışmadıqda: **Kretinizm** (zehni və fiziki inkişafdan qalma).
    - Yetkinlikdə çatışmadıqda: **Miksedema** (selikli şiş, süstlük).
    - Qidada yod çatışmadıqda: Vəzi böyüyür (**endemik ur**).
    - Funksiyası normadan artıq olduqda: **Bazedov xəstəliyi** (arıqlama, gözlərin bərəlməsi, əsəbilik).
  * **Böyrəküstü vəzilər:** Qabıq qatında mineralokortikoidlər; Beyin qatında **adrenalin** və noradrenalin ifraz olunur (təhlükə anında qanda şəkəri qaldırır, ürəyi sürətləndirir).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Qlükoza homeostazı} = \\\text{İnsulin (şəkəri salır)} \\leftrightarrow \\\text{Qlükaqon (şəkəri qaldırır)}",
              "name": "Şəkər tənzimi",
              "desc": "Mədəaltı vəzi hormonlarının antaqonist fəaliyyəti"
        }
  ],
      glossary: [
        {
              "term": "Hormon",
              "definition": "Daxili sekresiya vəzilərinin qana ifraz etdiyi yüksək bioloji aktivliyə malik maddə."
        },
        {
              "term": "İnsulin",
              "definition": "Qanda qlükozanın səviyyəsini azaldaraq onu qaraciyərdə qlikogenə çevirən mədəaltı vəzi hormonu."
        },
        {
              "term": "Tiroksin",
              "definition": "Qalxanabənzər vəzinin tərkibində yod saxlayan və maddələr mübadiləsini sürətləndirən hormonu."
        }
  ],
      solvedExamples: [
        {
              "problem": "Niyə dağlıq rayonlarda yaşayan insanlarda endemik ur xəstəliyinə daha tez-tez rast gəlinir və bunun qarşısı necə alınır?",
              "solution": "Dağlıq ərazilərdə torpaqda və içməli suda yod elementi az olur. Tiroksin hormonunu sintez etmək üçün yod çatışmadıqda qalxanabənzər vəzi kompensasiya məqsədilə həddən artıq böyüyərək endemik ur yaradır. Bunun qarşısını almaq üçün xörək duzuna yod əlavə edilir (yodlaşdırılmış duz)."
        }
  ],
      miniQuiz: [
        {
              "q": "Qanda qlükozanın miqdarını azaldan yeganə hormon hansıdır?",
              "options": [
                    "Adrenalin",
                    "İnsulin",
                    "Tiroksin",
                    "Qlükaqon"
              ],
              "a": 1,
              "exp": "Mədəaltı vəzinin hormonu olan insulin artıq qlükozanı hüceyrələrə yönəldərək qanda şəkəri azaldır."
        },
        {
              "q": "Böyümə hormonunun (somatotrop) yetkin yaşda həddindən artıq ifraz olunması hansı xəstəliyə səbəb olur?",
              "options": [
                    "Giqantizm",
                    "Akromeqaliya (burun, çənə və əl pəncələrinin böyüməsi)",
                    "Kretinizm",
                    "Şəkərli diabet"
              ],
              "a": 1,
              "exp": "Yetkin insanlarda sümüklər uzuna böyüyə bilmədiyi üçün hormon bədən çıxıntılarının böyüməsinə (akromeqaliyaya) səbəb olur."
        }
  ]
    },

  {
      id: 'biologiya-9-1',
      subjectId: 'biologiya',
      grade: 9,
      unit: 'Bölmə 1: Canlı Orqanizmlərin Kimyəvi Tərkibi',
      unitOrder: 1,
      title: 'Hüceyrənin biopolimerləri: Karbohidratlar, lipidlər, zülallar və DNT',
      order: 1,
      readTimeMinutes: 18,
      difficulty: 3,
      summary: 'Makro və mikroelementlər, su və mineral duzlar, lipidlər, zülalların 4 quruluşu, fermentativ təsir, nuklein turşuları (DNT, RNT) və Çarqaff qaydası.',
      theoryMarkdown: `
  ### Hüceyrənin Kimyəvi Təşkili

  #### 1. Hüceyrənin Kimyəvi Elementləri
  * **Biogen makroelementlər ($98\%$):** Oksigen ($65-75\%$), Karbon ($15-18\%$), Hidrogen ($8-10\%$) və Azot ($2-3\%$).
  * **Digər makroelementlər ($1.9\%$):** $P, S, K, Na, Ca, Mg, Fe, Cl$.
  * **Mikroelementlər ($0.1\%$-dən az):** $Zn, Cu, I, F, Co, Mn$ (fermentlərin, hormonların və vitaminlərin tərkibində).

  #### 2. Qeyri-üzvi Birləşmələr
  * **Su ($70-80\%$):** Universal polyar həlledicidir, hidrofil maddələri həll edir, hidrofob maddələri (yağlar) həll etmir. Yüksək istilik tutumu ilə temperatur sabitliyini təmin edir.

  #### 3. Üzvi Birləşmələr — Biopolimerlər
  * **Karbohidratlar:** Monosaxaridlər (qlükoza, fruktoza, riboza, dezoksiriboza) və polimerlər (nişasta, qlikogen, sellüloza, xitin). Əsas funksiyası: **Energetik** ($1 \	ext{ q} \rightarrow 17.6 \	ext{ kC}$).
  * **Lipidlər (Yağlar):** Hidrofobdurlar. Ən yüksək enerji verən birləşmələrdir ($1 \	ext{ q} \rightarrow 38.9 \	ext{ kC}$). Hüceyrə membranının əsasını (fosfolipid cüt qatını) təşkil edirlər.
  * **Zülallar:** Hüceyrənin əsas quruluş və funksional materialıdır. Monomerləri **20 növ amin turşusudur**. Funksiyaları: fermentativ (katalitik), qoruyucu (anticisimlər), hərəki (aktin, miozin), nəqliyyat (hemoqlobin). $1 \	ext{ q} \rightarrow 17.6 \	ext{ kC}$.
  * **Nuklein Turşuları (Genetik informasiya daşıyıcıları):**
    - **DNT (Dezoksiribonuklein turşusu):** İkizəncirli spiraldır (Uotson və Krik, 1953). Monomerləri 4 nukleotiddir: A (adenin), T (timin), Q (quanin), S (sitozin).
    - **Komplementarlıq və Çarqaff qaydası:**
      $$A = T \quad (2 \	ext{ hidrogen rabitəsi}), \quad Q \equiv S \quad (3 \	ext{ hidrogen rabitəsi})$$
    - **RNT (Ribonuklein turşusu):** Birzəncirlidir. Timinin əvəzinə **Urasil (U)** olur: $A, U, Q, S$. Növləri: məlumat RNT (m-RNT), nəqliyyat RNT (n-RNT), ribosom RNT (r-RNT).
      `,
      keyFormulas: [
        {
              "formula": "A = T, \\\\quad Q = S, \\\\quad A + Q = T + S",
              "name": "Çarqaff qaydası",
              "desc": "DNT molekulunda nukleotidlərin nisbət qanunauyğunluğu"
        },
        {
              "formula": "E = 17.6 \\\text{ kC (Zülal, Karbohidrat)}, \\\\quad E = 38.9 \\\text{ kC (Yağ)}",
              "name": "Enerji çıxımı",
              "desc": "1 qram üzvi maddənin tam parçalanma enerjisi"
        }
  ],
      glossary: [
        {
              "term": "Komplementarlıq",
              "definition": "Nuklein turşularında nukleotidlərin qarşı-qarşıya ciddi kimyəvi uyğunluqla (A-T və Q-S) cütləşməsi prinsipi."
        },
        {
              "term": "Biopolimer",
              "definition": "Çoxlu sayda təkrarlanan monomer manqalardan ibarət canlı hüceyrənin nəhəng üzvi molekulu."
        }
  ],
      solvedExamples: [
        {
              "problem": "İkizəncirli DNT molekulunda 600 adenin və 400 quanin nukleotidi vardır. DNT-dəki ümumi nukleotidlərin sayını və hidrogen rabitələrinin cəmini tapın.",
              "solution": "Komplementarlıq qaydasına görə: T = A = 600, S = Q = 400. Ümumi nukleotid sayı = A + T + Q + S = 600 + 600 + 400 + 400 = 2000 nukleotid. A və T arasında 2, Q və S arasında 3 hidrogen rabitəsi var: H = 2×600 + 3×400 = 1200 + 1200 = 2400 hidrogen rabitəsi."
        }
  ],
      miniQuiz: [
        {
              "q": "DNT molekulunda Quanin (Q) nukleotidinin qarşısında hansı komplementar nukleotid durur?",
              "options": [
                    "Adenin",
                    "Timin",
                    "Sitozin (3 rabitə ilə)",
                    "Urasil"
              ],
              "a": 2,
              "exp": "Çarqaff qaydasına görə quaninlə sitozin 3 hidrogen rabitəsi ilə birləşir."
        },
        {
              "q": "1 qram yağ tam parçalandıqda neçə kiloCoul enerji ayrılır?",
              "options": [
                    "17.6 kC",
                    "38.9 kC",
                    "100 kC",
                    "4.2 kC"
              ],
              "a": 1,
              "exp": "Yağlar ən yüksək enerjili birləşmələrdir və 1 qramı 38.9 kC enerji verir."
        }
  ]
    },

  {
      id: 'biologiya-9-2',
      subjectId: 'biologiya',
      grade: 9,
      unit: 'Bölmə 2: Hüceyrə Canlının Quruluş və İnkişaf Vahididir',
      unitOrder: 2,
      title: 'Hüceyrə nəzəriyyəsi, orqanoidlər, mitoz və meyoz bölünmə',
      order: 2,
      readTimeMinutes: 19,
      difficulty: 3,
      summary: 'Hüceyrə nəzəriyyəsi (Şliden, Şvann, Virxov), bir və ikimembranlı orqanoidlər, hüceyrə tsikli, mitoz fazaları və cinsi hüceyrələrin meyoz bölünməsi.',
      theoryMarkdown: `
  ### Hüceyrənin Quruluşu və Bölünməsi

  #### 1. Hüceyrə Nəzəriyyəsi (T.Şvann, M.Şleyden, R.Virxov)
  1. Bütün canlı orqanizmlər hüceyrələrdən təşkil olunmuşdur.
  2. Bütün orqanizmlərin hüceyrələri quruluş və kimyəvi tərkibcə oxşardır.
  3. Hər bir yeni hüceyrə ilkin ana hüceyrənin bölünməsindən yaranır ("Hər bir hüceyrə hüceyrədən yaranır").

  #### 2. Eukariot Hüceyrənin Orqanoidləri
  * **Membransız orqanoidlər:**
    - *Ribosomlar:* Zülalların biosintezini həyata keçirir.
    - *Hüceyrə mərkəzi (Sentriollar):* Bölünmə vətərlərini formalaşdırır (ali bitkilərdə olmur).
  * **Birmembranlı orqanoidlər:**
    - *Endoplazmatik şəbəkə (EPŞ):* Maddələrin sintezi və hüceyrədaxili daşınması.
    - *Qolci kompleksi:* Maddələrin toplanması, qablaşdırılması və lizosomların yaranması.
    - *Lizosomlar:* Hüceyrədaxili həzm (hidrolitik fermentlər saxlayır).
  * **İkimembranlı orqanoidlər (Öz DNT, RNT və ribosomları var, müstəqil bölünə bilirlər):**
    - *Mitoxondrilər:* Hüceyrənin "güc stansiyası" — ATF enerjisi sintez edir (kristlər).
    - *Plastidlər:* Yalnız bitki hüceyrələrində (xloroplastlar, tilakoidlər, qranlar).

  #### 3. Hüceyrənin Bölünməsi: Mitoz və Meyoz
  * **Mitoz (Qeyri-düz bölünmə — somatik hüceyrələrdə):**
    - Nəticədə ana hüceyrə ilə tam eyni xromosom yığımına ($2n$) malik **2 diploid hüceyrə** yaranır.
    - 4 fazası var: **Profaza** (xromosomlar spirallaşır, nüvə qişası əriyir), **Metafaza** (xromosomlar ekvatorda düzülür), **Anafaza** (bacı xromatidlər qütblərə çəkilir), **Telofaza** (nüvələr bərpa olur, sitoplazma bölünür).
  * **Meyoz (Reduksion bölünmə — cinsiyyət hüceyrələrində):**
    - Bir-birinin ardınca gedən iki bölünmədən ibarətdir.
    - I Profazada homoloji xromosomların yaxınlaşması (**konyuqasiya**) və sahə mübadiləsi (**krossinqover**) baş verir (kombinativ dəyişkənlik mənbəyi).
    - Nəticədə xromosom sayı 2 dəfə azalmış ($n$) **4 haploid qamet** əmələ gəlir.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Mitoz} \\rightarrow 2 \\\text{ hüceyrə } (2n), \\\\quad \\\text{Meyoz} \\rightarrow 4 \\\text{ hüceyrə } (n)",
              "name": "Bölünmə nəticəsi",
              "desc": "Somatik və generativ bölünmələrin müqayisəsi"
        }
  ],
      glossary: [
        {
              "term": "Krossinqover",
              "definition": "Meyozun I profazasında homoloji xromosomların gen sahələrini qarşılıqlı dəyişməsi hadisəsi."
        },
        {
              "term": "Mitoxondri",
              "definition": "Oksigenli tənəffüslə ATF enerjisi istehsal edən ikimembranlı hüceyrə orqanoidi."
        }
  ],
      solvedExamples: [
        {
              "problem": "İnsanın bədən (somatik) hüceyrəsində 46 xromosom ($2n$) vardırsa, mitoz və meyoz bölünmələrdən sonra yaranan hüceyrələrdə neçə xromosom olar?",
              "solution": "Mitoz bölünmədən sonra yaranan 2 hüceyrənin hər birində xromosom sayı dəyişməz qalır (46 xromosom, 2n). Meyoz bölünmədən sonra isə xromosom sayı 2 dəfə azalaraq qametlərdə 23 xromosom (n) təşkil edir."
        }
  ],
      miniQuiz: [
        {
              "q": "Hüceyrədə zülal biosintezini hansı orqanoid həyata keçirir?",
              "options": [
                    "Lizosom",
                    "Ribosom",
                    "Vakuol",
                    "Qolci kompleksi"
              ],
              "a": 1,
              "exp": "Ribosomlar m-RNT məlumatı əsasında aminturşulardan zülal sintez edir."
        },
        {
              "q": "Meyoz bölünmə zamanı xromosomların sahə mübadiləsi (krossinqover) hansı fazada baş verir?",
              "options": [
                    "I Profazada",
                    "II Metafazada",
                    "Anafazada",
                    "Telofazada"
              ],
              "a": 0,
              "exp": "Homoloji xromosomların konyuqasiyası və krossinqover meyoz I-in profazasında baş verir."
        }
  ]
    },

  {
      id: 'biologiya-9-3',
      subjectId: 'biologiya',
      grade: 9,
      unit: 'Bölmə 3: Orqanizm Tam Bir Sistemdir. Çoxalma və Ontogenez',
      unitOrder: 3,
      title: 'Çoxalma formaları, qametogenez və embrional inkişaf',
      order: 3,
      readTimeMinutes: 17,
      difficulty: 2,
      summary: 'Qeyri-cinsi və cinsi çoxalma, qametogenez mərhələləri (çoxalma, böyümə, yetişmə), ontogenez: blastula, qastrula, neyrula və orqanogenez.',
      theoryMarkdown: `
  ### Çoxalma və Fərdi İnkişaf (Ontogenez)

  #### 1. Çoxalma Formaları
  * **Qeyri-cinsi çoxalma:** Yalnız bir valideyn iştirak edir, nəsildə genetik müxtəliflik yaranmır (klonlaşma):
    - Bölünmə (amöb, bakteriya).
    - Tumurcuqlanma (maya göbələyi, hidra).
    - Sporəmələgəlmə (yosun, mamır, qıjı).
    - Vegetativ çoxalma (bitkilərdə zoğ, qələm, kök yumrusu ilə).
  * **Cinsi çoxalma:** Qametlərin birləşməsi (mayalanma) ilə baş verir, nəsildə genetik zənginlik və yüksək uyğunlaşma təmin edilir.
  * **Partenogenez:** Mayalanmamış yumurtahüceyrədən yeni orqanizmin inkişafıdır (erkək bal arıları, mənənələr).

  #### 2. Qametogenez (Cinsiyyət Hüceyrələrinin Yaranması)
  * **Spermatoqenez (Toxumluqlarda):** 1 ilkin hüceyrədən **4 bərabər hərəkətli spermatozoid** ($n$) yaranır.
  * **Oogenez (Yumurtalıqlarda):** 1 ilkin hüceyrədən qeyri-bərabər bölünmə nəticəsində **1 iri yumurtahüceyrə ($n$) və 3 istiqamətləndirici qütb cisimciyi** (məhv olurlar) yaranır.

  #### 3. Ontogenez — Fərdi İnkişaf
  Ziqotun yaranmasından orqanizmin ölümünə qədər keçən fərdi inkişaf yoludur:
  * **Embrional mərhələ (Rüşeym inkişafı):**
    1. *Bölünmə (Xırdalanma):* Ziqot mitozla bölünür və hüceyrə ölçüsü böyümədən içi boş birqatlı kürə — **Blastula** yaranır.
    2. *Qastrulyasiya:* Hüceyrələrin içəri çökməsi ilə ikitəbəqəli rüşeym — **Qastrula** yaranır (ektoderma və endoderma).
    3. *Neyrula və Orqanogenez:* Üçüncü qat (**mezoderma**) yaranır, xorda və sinir borusu formalaşır:
       - *Ektodermadan:* Sinir sistemi, hiss orqanları, dərinin üst qatı (epidermis).
       - *Endodermadan:* Həzm traktı, ağciyərlər, qaraciyər, mədəaltı vəzi.
       - *Mezodermadan:* Skelet, əzələlər, ürək-damar sistemi, böyrəklər və cinsiyyət orqanları.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Ziqot} \\rightarrow \\\text{Morula} \\rightarrow \\\text{Blastula} \\rightarrow \\\text{Qastrula} \\rightarrow \\\text{Neyrula}",
              "name": "Embriogenez mərhələləri",
              "desc": "Rüşeymin ardıcıl inkişaf pillələri"
        }
  ],
      glossary: [
        {
              "term": "Ontogenez",
              "definition": "Canlının ziqotdan ömrünün sonunadək keçdiyi fərdi inkişaf tarixi."
        },
        {
              "term": "Blastula",
              "definition": "Ziqotun bölünməsindən yaranan divarı bir qat hüceyrədən ibarət içi boş rüşeym kürəsi."
        },
        {
              "term": "Partenogenez",
              "definition": "Mayalanmamış yumurtahüceyrədən yeni orqanizmin inkişaf etməsi cinsi çoxalma forması."
        }
  ],
      solvedExamples: [
        {
              "problem": "İnsanın ürəyi və sinir sistemi rüşeymin hansı vərəqələrindən inkişaf edir?",
              "solution": "Sinir sistemi və beyin xarici rüşeym vərəqəsindən (ektoderma), ürək və qan-damar sistemi isə orta rüşeym vərəqəsindən (mezoderma) formalaşır."
        }
  ],
      miniQuiz: [
        {
              "q": "Bal arısı pətəyində erkək arıların mayalanmamış yumurtadan inkişaf etməsi necə adlanır?",
              "options": [
                    "Tumurcuqlanma",
                    "Vegetativ çoxalma",
                    "Partenogenez",
                    "Klonlaşma"
              ],
              "a": 2,
              "exp": "Mayalanmamış yumurtadan inkişaf partenogenez adlanır."
        },
        {
              "q": "Rüşeymin hansı vərəqəsindən skelet və əzələ toxumaları inkişaf edir?",
              "options": [
                    "Ektoderma",
                    "Endoderma",
                    "Mezoderma",
                    "Xloroplast"
              ],
              "a": 2,
              "exp": "Mezodermadan (orta vərəqə) dayaq-hərəkət skeleti və əzələlər yaranır."
        }
  ]
    },

  {
      id: 'biologiya-9-4',
      subjectId: 'biologiya',
      grade: 9,
      unit: 'Bölmə 4: Populyasiya, Növ və Təkamül Amilləri',
      unitOrder: 4,
      title: 'Növün kriteriləri, Ç.Darvin təlimi və təbii seçmə',
      order: 4,
      readTimeMinutes: 18,
      difficulty: 3,
      summary: 'Növ anlayışı və kriteriləri (morfoloji, fizioloji, biokimyəvi, genetik, coğrafi, ekoloji), Çarlz Darvinin təkamül təlimi, yaşamaq uğrunda mübarizə və təbii seçmə.',
      theoryMarkdown: `
  ### Növ, Populyasiya və Təkamülün Əsasları

  #### 1. Növ və Onun Kriteriləri
  Növ — morfoloji, fizioloji və biokimyəvi əlamətlərinə görə oxşar olan, sərbəst çarpazlaşaraq döllü nəsil verən, təbiətdə müəyyən arealı tutan fərdlər toplusudur.
  * **Növün 6 əsas kriterisi:**
    1. *Morfoloji:* Xarici və daxili quruluş oxşarlığı (lakin əkiz növlər bu kriteri ilə seçilmir).
    2. *Fizioloji:* Həyat fəaliyyəti və çoxalma proseslərinin oxşarlığı.
    3. *Biokimyəvi:* Zülal və DNT tərkibinin xüsusiyyətləri.
    4. *Genetik:* Ən dəqiq kriteridir — xromosomların sayı, forması və ölçüsü (karyotip).
    5. *Coğrafi:* Növün təbiətdə yayıldığı müəyyən ərazi (areal).
    6. *Ekoloji:* Növün ekosistemdə tutduğu yer və ekoloji amillərə tələbatı.
  * Heç bir kriteri təkbaşına növü tam xarakterizə edə bilməz, növün müəyyənləşdirilməsi üçün bütün kriterilərin məcmusu lazımdır.
  * **Populyasiya — Təkamülün ən kiçik elementar vahididir.**

  #### 2. Çarlz Darvinin Təkamül Təlimi (1859)
  Ç.Darvin "Növlərin təbii seçmə yolu ilə yaranması" əsərində üzvi aləmin təkamülünün hərəkətverici qüvvələrini kəşf etmişdir:
  1. **İrsi dəyişkənlik:** Fərdlər arasında təbii fərqlərin yaranması və nəslə ötürülməsi.
  2. **Yaşamaq uğrunda mübarizə:** Nəsillərin sayının həndəsi silsilə ilə artması ilə məhdud həyat resursları arasındakı ziddiyyət:
     - *Növdaxili mübarizə:* Ən kəskin və amansız mübarizədir (eyni qida, ərazi və dişi fərd uğrunda).
     - *Növlərarası mübarizə:* Yırtıcı və şikar, parazit və sahib.
     - *Əlverişsiz mühitlə mübarizə:* Quraqlıq, şiddətli şaxta, su qıtlığı.
  3. **Təbii seçmə — Təkamülün əsas istiqamətləndirici amilidir:** Mühit şəraitinə daha yaxşı uyğunlaşmış fərdlərin sağ qalaraq nəsil verməsi, uyğunlaşa bilməyənlərin isə məhv olması prosesidir.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Təkamül amilləri} = \\\text{İrsi dəyişkənlik} + \\\text{Mübarizə} + \\\text{Təbii seçmə}",
              "name": "Darvin təkamül triadası",
              "desc": "Təbii seçmə yolu ilə uyğunlaşmaların yaranması"
        }
  ],
      glossary: [
        {
              "term": "Populyasiya",
              "definition": "Növün müəyyən arealda uzun müddət sərbəst cütləşən fərdlər qrupu."
        },
        {
              "term": "Təbii seçmə",
              "definition": "Mühitə faydalı irsi dəyişkənlikləri olan fərdlərin sağ qalıb çoxalması prosesi."
        },
        {
              "term": "Areal",
              "definition": "Müəyyən növün yer kürəsində yayıldığı coğrafi ərazi."
        }
  ],
      solvedExamples: [
        {
              "problem": "Niyə növdaxili mübarizə növlərarası mübarizədən daha kəskin xarakter daşıyır?",
              "solution": "Eyni növün fərdləri eyni qida növünə, eyni sığınacaq yerlərinə və eyni çoxalma tərəfdaşına tam eyni ehtiyac duyurlar. Ehtiyaclar tam üst-üstə düşdüyü üçün aralarındakı rəqabət ən yüksək həddə çatır."
        }
  ],
      miniQuiz: [
        {
              "q": "Təkamülün ən kiçik elementar vahidi nə sayılır?",
              "options": [
                    "Fərd",
                    "Populyasiya",
                    "Ailə",
                    "Sinif"
              ],
              "a": 1,
              "exp": "Ayrı-ayrı fərdlər təkamül etmir, genofondu dəyişən bütöv populyasiyalar təkamül edir."
        },
        {
              "q": "Növün xromosom dəstini (sayını, formasını və ölçüsünü) öyrənən ən etibarlı kriteri hansıdır?",
              "options": [
                    "Morfoloji",
                    "Genetik kriteri",
                    "Coğrafi",
                    "Ekoloji"
              ],
              "a": 1,
              "exp": "Genetik kriteri növün xromosom sayını (karyotipini) dəqiq təyin edir."
        }
  ]
    },

  {
      id: 'biologiya-9-5',
      subjectId: 'biologiya',
      grade: 9,
      unit: 'Bölmə 5: Ali Sinir Fəaliyyəti və Psixologiya',
      unitOrder: 5,
      title: 'Şərtsiz və şərti reflekslər, yuxu, yaddaş və ali sinir tipləri',
      order: 5,
      readTimeMinutes: 17,
      difficulty: 2,
      summary: 'İ.M.Seçenov və İ.P.Pavlov təlimi, anadangəlmə şərtsiz və qazanılmış şərti reflekslər, tormozlanma, I və II siqnal sistemləri, temperament tipləri.',
      theoryMarkdown: `
  ### Ali Sinir Fəaliyyəti (ASF)

  #### 1. Şərtsiz və Şərti Reflekslər (İ.P.Pavlov)
  * **Şərtsiz reflekslər:** Anadangəlmədir, irsən nəslə ötürülür, növün bütün fərdlərində eynidir, daimidir (itmir). Mərkəzləri onurğa beynində və qabıqaltı şöbələrdə yerləşir (əmmə, udma, göz qırpma, diz refleksi).
  * **Şərti reflekslər:** Fərdi həyat prosesində qazanılır, irsən ötürülmür, müvəqqətidir (möhkəmləndirilmədikdə sönür). Mərkəzi **baş beyin yarımkürələri qabığındadır**. Şərtsiz qıcıqlandırıcı ilə şərti qıcıqlandırıcının dəfələrlə üst-üstə düşməsindən yaranır (Pavlovun it təcrübəsində zəng səsi və ət verilməsi).

  #### 2. I və II Siqnal Sistemləri
  * **I Siqnal sistemi:** Ətraf aləmin bilavasitə duyğu üzvlərinə təsir edən real siqnallarıdır (işıq, səs, qoxu, dad). Həm heyvanlarda, həm də insanda var.
  * **II Siqnal sistemi:** Yalnız **insana xasdır** — söz, nitq və yazı vasitəsilə qavrama sistemidir ("siqnalların siqnalı"). İnsanın mücərrəd təfəkkürünün, məntiqinin və şüurunun əsasını təşkil edir.

  #### 3. Sinir Sisteminin Tipləri (Temperamentlər — Hippokrat və Pavlov)
  Qıcıqlanma və tormozlanma proseslərinin gücü, tarazlığı və mütəhərrikliyinə görə:
  1. **Sanqvinik (Canlı tip):** Qüvvətli, tarazlı, mütəhərrik (cəld, ünsiyyətcil, enerjili).
  2. **Fleqmatik (Sakit tip):** Qüvvətli, tarazlı, süst (təmkinli, dözümlü, gec uyğunlaşan).
  3. **Xolerik (Coşqun tip):** Qüvvətli, **qeyri-tarazlı** (oyanma tormozlanmadan üstündür, tez özündən çıxan).
  4. **Melanxolik (Zəif tip):** Zəif sinir sistemi (həssas, tez inciyən, tez yorulan).

  #### 4. Yuxu və Əhəmiyyəti
  Yuxu baş beyin qabığının qoruyucu tormozlanma halıdır:
  * **Ləng yuxu (Dərin yuxu):** Nəbz və tənəffüs yavaşlayır, orqanizm dincəlir və toxumalar bərpa olunur.
  * **Sürətli yuxu (Qısa yuxu):** Göz alması sürətlə hərəkət edir, beyin fəal işləyir, bu fazada yuxugörmələr baş verir.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{II Siqnal Sistemi} = \\\text{Söz} + \\\text{Nitq} + \\\text{Mücərrəd təfəkkür (yalnız insan)}",
              "name": "İnsanın fərqləndirici xüsusiyyəti",
              "desc": "İ.P.Pavlovun II siqnal sistemi formulu"
        }
  ],
      glossary: [
        {
              "term": "Şərti refleks",
              "definition": "Həyat boyunca xarici mühitə uyğunlaşma üçün qazanılan müvəqqəti sinir əlaqəsi."
        },
        {
              "term": "II Siqnal sistemi",
              "definition": "İnsanın söz və nitq vasitəsilə gerçəkliyi ümumiləşdirilmiş şəkildə dərk etmə sistemi."
        }
  ],
      solvedExamples: [
        {
              "problem": "Niyə uşaq əlini isti çaydana toxundurduqda dərhal çəkir, lakin 'isti çaydana toxunma' sözünü eşidəndə də ehtiyat edir?",
              "solution": "Əlini dərhal çəkməsi anadangəlmə şərtsiz qoruyucu refleksdir (I siqnal sistemi). Sözü eşidib qorunması isə yalnız insana xas olan sözün mənasını dərk etməkdən qaynaqlanan II siqnal sistemidir."
        }
  ],
      miniQuiz: [
        {
              "q": "Yalnız insana xas olub söz və məntiqli nitqlə əlaqədar olan sistem necə adlanır?",
              "options": [
                    "I siqnal sistemi",
                    "II siqnal sistemi",
                    "Şərtsiz refleks qövsü",
                    "Vegetativ sistem"
              ],
              "a": 1,
              "exp": "II siqnal sistemi nitq və mücərrəd düşüncə ilə bağlı olub yalnız insana xasdır."
        },
        {
              "q": "Qüvvətli, tarazlı və mütəhərrik sinir proseslərinə malik temperament tipi hansıdır?",
              "options": [
                    "Xolerik",
                    "Fleqmatik",
                    "Sanqvinik",
                    "Melanxolik"
              ],
              "a": 2,
              "exp": "Sanqviniklər yüksək enerjili, tarazlı və cəld uyğunlaşan sinir tipinə malikdirlər."
        }
  ]
    },

  {
      id: 'biologiya-10-1',
      subjectId: 'biologiya',
      grade: 10,
      unit: 'Bölmə 1: Biosferdə Maddələr və Enerji Mübadiləsi',
      unitOrder: 1,
      title: 'Assimilasiya, dissimilasiya, qlikoliz və ATF sintezi',
      order: 1,
      readTimeMinutes: 19,
      difficulty: 3,
      summary: 'Metabolizm: plastik və energetik mübadilə, ATF molekulu və makroerqik rabitələr, qlükozanın parçalanma mərhələləri (qeyri-oksigenli və oksigenli), fotosintez və xemosintez.',
      theoryMarkdown: `
  ### Hüceyrədə Maddələr və Enerji Mübadiləsi

  #### 1. Metabolizm: Plastik və Energetik Mübadilə
  * **Plastik mübadilə (Assimilasiya / Anabolizm):** Sadə maddələrdən hüceyrəyə xas mürəkkəb maddələrin sintezi prosesidir. Enerji udulur (məsələn: zülalların biosintezi, fotosintez).
  * **Energetik mübadilə (Dissimilasiya / Katabolizm):** Mürəkkəb üzvi maddələrin parçalanaraq enerjinin ayrılması prosesidir (tənəffüs, qlikoliz).

  #### 2. ATF — Hüceyrənin Universal Enerji Valyutası
  Adenozintrifosfat turşusu ($ATF$) adenin azot əsasından, riboza şəkərindən və 3 qalıq fosfat turşusundan ibarətdir.
  * Fosfat qalıqları arasında **2 ədəd yüksək enerjili makroerqik rabitə** vardır:
    $$ATF + H_2O 
  ightleftharpoons ADF + H_3PO_4 + 40 \	ext{ kC enerji}$$

  #### 3. Energetik Mübadilənin Üç Mərhələsi (Qlükozanın Parçalanması)
  1. **I Mərhələ — Hazırlıq mərhələsi:** Həzm traktında və ya lizosomlarda biopolimerlər monomerlərə parçalanır. Ayrılan enerji bütövlükdə istilik şəklində yayılır ($ATF$ sintez olunmur).
  2. **II Mərhələ — Oksigensiz mərhələ (Qlikoliz):** Sitoplazmada oksigensiz mühitdə 1 mol qlükoza 2 mol piroüzüm turşusuna ($PÜT$) parçalanır və **2 mol ATF** sintez olunur:
     $$C_6H_{12}O_6 + 2ADF + 2H_3PO_4 
  ightarrow 2C_3H_4O_3 + 2ATF + 2H_2O + 200 \	ext{ kC}$$
  3. **III Mərhələ — Oksigenli tənəffüs (Mitoxondrilərdə):** Kreps dövrü və tənəffüs zənciri vasitəsilə $PÜT$ tamamilə $CO_2$ və $H_2O$-ya qədər oksidləşir və **36 mol ATF** sintez olunur:
     $$2C_3H_4O_3 + 6O_2 + 36ADF + 36H_3PO_4 
  ightarrow 6CO_2 + 42H_2O + 36ATF + 2600 \	ext{ kC}$$
  * **Cəmi energetik tənlik:** 1 mol qlükozanın tam parçalanmasından **38 mol ATF** əldə edilir:
    $$C_6H_{12}O_6 + 6O_2 + 38ADF + 38H_3PO_4 
  ightarrow 6CO_2 + 44H_2O + 38ATF$$

  #### 4. Xemosintez (S.N.Vinoqradski, 1887)
  Bəzi bakteriyaların (azot, dəmir, kükürd bakteriyaları) qeyri-üzvi maddələrin oksidləşməsindən ayrılan kimyəvi rabitə enerjisi hesabına üzvi maddə sintez etməsidir (işıq enerjisi tələb olunmur).
      `,
      keyFormulas: [
        {
              "formula": "C_6H_{12}O_6 + 6O_2 + 38ADF \rightarrow 6CO_2 + 6H_2O + 38ATF",
              "name": "Qlükozanın tam parçalanması",
              "desc": "1 mol qlükozadan 38 mol ATF enerjisi yaranır (2 qlikolizdə + 36 mitoxondridə)"
        }
  ],
      glossary: [
        {
              "term": "Makroerqik rabitə",
              "definition": "ATF molekulunda qırıldıqda 40 kC enerji ayıran fosfatlararası yüksək enerjili rabitə."
        },
        {
              "term": "Xemosintez",
              "definition": "Qeyri-üzvi reaksiyaların kimyəvi enerjisi hesabına üzvi maddə sintezi edən bakteriya qidalanması."
        }
  ],
      solvedExamples: [
        {
              "problem": "Əzələ hüceyrələrində 5 mol qlükoza tam oksidləşərsə, cəmi neçə mol ATF sintez olunar?",
              "solution": "1 mol qlükozanın tam parçalanmasından 38 mol ATF yaranır. Deməli, 5 mol qlükozadan: 5 × 38 = 190 mol ATF sintez olunar."
        }
  ],
      miniQuiz: [
        {
              "q": "1 mol qlükozanın oksigenli tənəffüslə tam parçalanması zamanı mitoxondridə cəmi neçə mol ATF sintez edilir?",
              "options": [
                    "2 mol",
                    "36 mol",
                    "38 mol",
                    "100 mol"
              ],
              "a": 1,
              "exp": "Mitoxondrinin daxilində oksigenli mərhələdə 36 mol ATF yaranır (qlikolizdəki 2 mol ilə birlikdə cəmi 38 mol olur)."
        },
        {
              "q": "Xemosintez prosesini hansı orqanizmlər həyata keçirə bilir?",
              "options": [
                    "Yaşıl yosunlar",
                    "Xüsusi kükürd və azot bakteriyaları",
                    "Göbələklər",
                    "Məməli heyvanlar"
              ],
              "a": 1,
              "exp": "Xemosintez yalnız kimyəvi reaksiyaların enerjisindən istifadə edən bəzi bakteriyalara xasdır."
        }
  ]
    },

  {
      id: 'biologiya-10-2',
      subjectId: 'biologiya',
      grade: 10,
      unit: 'Bölmə 2: İrsi Məlumatlar və Genetikanın Qanunauyğunluqları',
      unitOrder: 2,
      title: 'Mendel qanunları, monohibrid və dihibrid çarpazlaşma',
      order: 2,
      readTimeMinutes: 19,
      difficulty: 3,
      summary: 'Qreqor Mendel və hibridoloji metod, I qanun (eynicinslilik), II qanun (parçalanma), III qanun (müstəqil paylanma), genotip və fenotip nisbətləri.',
      theoryMarkdown: `
  ### Genetikanın Əsas Qanunları

  #### 1. Qreqor Mendelin Qanunları (1865)
  Genetika — canlıların irsiyyət və dəyişkənliyini öyrənən elmdir. Q.Mendel noxud bitkisi üzərində apardığı təcrübələrlə genetikanın təməlini qoymuşdur:
  * **I Qanun — Birinci Nəsil Hibridlərinin Eynicinsliliyi (Dominantlıq Qanunu):**
    Homoziqot dominant ($AA$, sarı) ilə homoziqot resessiv ($aa$, yaşıl) fərdləri çarpazlaşdırdıqda $F_1$ nəslindəki bütün fərdlər fenotipcə eynicinsli və sarı olur:
    $$P: AA 	imes aa \implies F_1: Aa \quad (100\% \	ext{ dominant sarı})$$
  * **II Qanun — Əlamətlərin Parçalanması Qanunu:**
    $F_1$ heteroziqot fərdləri ($Aa 	imes Aa$) öz aralarında çarpazlaşdırdıqda $F_2$ nəslində parçalanma baş verir:
    - *Fenotipə görə:* **$3:1$** ($75\%$ sarı, $25\%$ yaşıl).
    - *Genotipə görə:* **$1:2:1$** ($1 AA : 2 Aa : 1 aa$).
  * **III Qanun — Əlamətlərin Müstəqil İrsi Keçməsi Qanunu (Dihibrid Çarpazlaşma):**
    İki cüt alternativ əlamətə görə fərqlənən fərdlərin çarpazlaşmasıdır ($AaBb 	imes AaBb$). Müxtəlif cüt xromosomlarda yerləşən genlər bir-birindən asılı olmadan müstəqil paylanır.
    - $F_2$-də fenotip üzrə parçalanma: **$9 : 3 : 3 : 1$** (9 sarı-hamar, 3 sarı-qırışıq, 3 yaşıl-hamar, 1 yaşıl-qırışıq).
    - Pennet barmaqlığı üsulu ilə kombinasiyalar müəyyən edilir.

  #### 2. T.Morqanın Xromosom Nəzəriyyəsi və İlişikli İrsiyyət
  Eyni xromosomda yerləşən genlər bir yerdə, ilişikli şəkildə irsən keçir (**Morqan qanunu**). İlişiklik meyozun profazasında baş verən **krossinqoverlə** pozula bilər.
  * **Cinsiyyətlə ilişikli irsiyyət:** Xromosom xəstəlikləri (hemofiliya və daltonizm) resessiv genlə $X$-xromosomunda daşınır, kişilərdə ($XY$) daha çox təzahür edir.
      `,
      keyFormulas: [
        {
              "formula": "F_2 \\text{ (Monohibrid)} = 3:1 \\text{ (fenotip)}, \\quad 1:2:1 \\text{ (genotip)}",
              "name": "Mendelin II qanunu",
              "desc": "Heteroziqotların parçalanma nisbətləri"
        },
        {
              "formula": "F_2 \\text{ (Dihibrid)} = 9:3:3:1",
              "name": "Mendelin III qanunu",
              "desc": "Müstəqil paylanma nisbəti"
        }
  ],
      glossary: [
        {
              "term": "Allel genlər",
              "definition": "Homoloji xromosomların eyni lokuslarında yerləşən və eyni əlamətin inkişafına cavabdeh olan cüt genlər."
        },
        {
              "term": "Homoziqot",
              "definition": "Allel genləri eyni olan orqanizm (AA və ya aa)."
        },
        {
              "term": "Heteroziqot",
              "definition": "Allel genləri müxtəlif olan orqanizm (Aa)."
        }
  ],
      solvedExamples: [
        {
              "problem": "İki heteroziqot qara dovşanın ($Aa \times Aa$) çarpazlaşmasından 120 bala doğulmuşdur. Onlardan təxminən neçəsi resessiv ağ rəngli ($aa$) olar?",
              "solution": "Mendelin II qanununa görə parçalanma 3:1 nisbətindədir, yəni nəsildən 1/4 hissəsi (25%) resessiv (aa) olur. Ağ dovşanların sayı = 120 × (1/4) = 30 bala."
        }
  ],
      miniQuiz: [
        {
              "q": "Monohibrid çarpazlaşmada heteroziqot valideynlərin (Aa × Aa) nəslində fenotipə görə parçalanma hansı nisbətdə olur?",
              "options": [
                    "1:1",
                    "3:1",
                    "9:3:3:1",
                    "1:2:1"
              ],
              "a": 1,
              "exp": "Fenotipə görə 3 hissə dominant, 1 hissə resessiv (3:1) alınır."
        },
        {
              "q": "Genetikada daltonizm və hemofiliya xəstəliklərinin geni hansı xromosomda yerləşir?",
              "options": [
                    "Y-xromosomunda",
                    "X-xromosomunda",
                    "Autosomlarda",
                    "Mitoxondridə"
              ],
              "a": 1,
              "exp": "Bu əlamətlər resessiv olaraq cinsi X-xromosomunda ilişikli daşınır."
        }
  ]
    },

  {
      id: 'biologiya-10-3',
      subjectId: 'biologiya',
      grade: 10,
      unit: 'Bölmə 3: Dəyişkənlik Formaları və Genetik Xəstəliklər',
      unitOrder: 3,
      title: 'Modifikasiya dəyişkənliyi, mutasiyalar və xromosom sindromları',
      order: 3,
      readTimeMinutes: 18,
      difficulty: 3,
      summary: 'Qeyri-irsi modifikasiya dəyişkənliyi və reaksiya norması, irsi mutasiyalar (gen, xromosom, genom), poliploidiya, Daun və Klaynfelter sindromları.',
      theoryMarkdown: `
  ### Dəyişkənlik Formaları

  #### 1. Qeyri-irsi (Modifikasiya / Fenotipik) Dəyişkənlik
  Xarici mühit amillərinin təsiri ilə fenotipin dəyişməsidir. Genotip dəyişmir və **irsən nəslə ötürülmür** (məsələn: günəşdə dərinin qaralması, idman edəndə əzələlərin böyüməsi, eyni bitkinin kölgədə və günəşdə müxtəlif boy atması).
  * **Reaksiya norması:** Əlamətin modifikasiya dəyişkənliyinin genotip tərəfindən müəyyən edilmiş sərhədləridir (geniş və dar reaksiya norması).

  #### 2. İrsi (Genotipik) Dəyişkənlik
  * **Kombinativ dəyişkənlik:** Mayalanma zamanı və krossinqoverdə genlərin yeni kombinasiyalarının yaranması hesabına baş verir (yeni gen yaranmır).
  * **Mutasiya dəyişkənliyi (Hüqo de Friz):** Genetik aparatın qəfil, sıçrayışlı dəyişməsidir:
    1. **Gen (Nöqtəvi) mutasiyaları:** DNT-də nukleotidlərin itməsi, əlavə olunması və ya əvəzlənməsi (orpaqvari hüceyrə anemiyası).
    2. **Xromosom mutasiyaları:** Xromosomun quruluşunun dəyişməsi: sahənin itməsi (delesiya), təkrarlanması (duplikasiya), 180° çevrilməsi (inversiya), başqa xromosoma keçməsi (translokasiya).
    3. **Genom mutasiyaları:** Xromosomların sayının dəyişməsi:
       - *Aneuploidiya:* Tək-tək xromosomların artması və ya azalması:
         * **Daun sindromu:** 21-ci cüt xromosomda 3 xromosom olur (trisomiya: cəmi 47 xromosom).
         * **Klaynfelter sindromu:** Kişilərdə əlavə X xromosomu ($47, XXY$).
         * **Şereşevski-Terner sindromu:** Qadınlarda tək X xromosomu ($45, X0$).
       - *Poliploidiya:* Xromosom dəstinin bütöv qat-qat artması ($3n, 4n...$). Kənd təsərrüfatında iri meyvəli məhsuldar bitkilərin alınmasında tətbiq olunur.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Daun sindromu} = 47 \\\text{ xromosom } (21 \\\text{-ci trisomiya})",
              "name": "Daun sindromu formulası",
              "desc": "Genom xəstəliyinin xromosom sayı"
        },
        {
              "formula": "\\\text{Poliploidiya} = 3n, 4n, 6n...",
              "name": "Xromosom dəstinin artması",
              "desc": "Bitki seleksiyasında məhsuldarlıq amili"
        }
  ],
      glossary: [
        {
              "term": "Reaksiya norması",
              "definition": "Mühit amillərinin təsiri ilə əlamətin dəyişə biləcəyi genetik hədlər."
        },
        {
              "term": "Mutasiya",
              "definition": "Canlının genetik materialında (DNT və ya xromosom) qəfil baş verən irsi dəyişiklik."
        },
        {
              "term": "Poliploidiya",
              "definition": "Hüceyrədə xromosom dəstinin dəfələrlə qat-qat artması halı."
        }
  ],
      solvedExamples: [
        {
              "problem": "Niyə dağda yetişdirilən qarahınyanın çiçəkləri qırmızı, düzənlikdə isə ağ rəngdə açır və bu dəyişkənlik nəslə keçirmi?",
              "solution": "Bu, temperatur və mühitdən asılı olan modifikasiya dəyişkənliyidir. Genotip dəyişməz qalır, buna görə həmin bitkinin toxumunu düzənlikdə əkdikdə yenidən ağ çiçəklər açacaq (irsən nəslə keçmir)."
        }
  ],
      miniQuiz: [
        {
              "q": "Daun sindromlu insanın somatik hüceyrələrində neçə xromosom olur?",
              "options": [
                    "46",
                    "47 (21-ci cüt 3 ədəd)",
                    "45",
                    "92"
              ],
              "a": 1,
              "exp": "Daun sindromunda 21-ci cüt xromosomda trisomiya baş verir və ümumi say 47 olur."
        },
        {
              "q": "Modifikasiya dəyişkənliyinin mutasiyadan əsas fərqi nədir?",
              "options": [
                    "Həmişə zərərlidir",
                    "İrsən nəslə keçmir, yalnız fenotipi dəyişir",
                    "Xromosom sayını artırır",
                    "DNT-ni məhv edir"
              ],
              "a": 1,
              "exp": "Modifikasiya mühit reaksiyasıdır və genotipi dəyişmədiyi üçün nəslə keçmir."
        }
  ]
    },

  {
      id: 'biologiya-10-4',
      subjectId: 'biologiya',
      grade: 10,
      unit: 'Bölmə 4: Seleksiya Metodları və Biotexnologiya',
      unitOrder: 4,
      title: 'Süni seçmə, hibridləşmə, heterozis effekti və gen mühəndisliyi',
      order: 4,
      readTimeMinutes: 18,
      difficulty: 2,
      summary: 'N.İ.Vavilovun mədəni bitkilərin mənşə mərkəzləri, süni seçmə formaları, heterozis (hibrid gücü), klonlaşdırma, gen və hüceyrə mühəndisliyi.',
      theoryMarkdown: `
  ### Seleksiya və Biotexnologiya

  #### 1. Seleksiyanın Əsas Metodları
  Seleksiya — insan tələbatını ödəmək üçün bitki sortları, heyvan cinsləri və mikroorqanizm şammlarının yaradılması və təkmilləşdirilməsi elmidir.
  * **N.İ.Vavilov:** İrsi dəyişkənliyin homoloji sıralar qanununu və mədəni bitkilərin 7 əsas mənşə mərkəzini müəyyən etmişdir.
  * **Süni seçmə:**
    - *Kütləvi seçmə:* Fenotipə görə çoxlu sayda fərd seçilir (bitkilərdə çarpaz tozlananlar üçün).
    - *Fərdi seçmə:* Ayrı-ayrı fərdlərin nəsli öyrənilir (öz-özünə tozlanan bitkilər və heyvanlar).
  * **Hibridləşmə növləri:**
    - *Qohum hibridləşmə (İnbredinq):* Əlamətlərin homoziqot hala salınıb təmiz xətlərin alınması üçün tətbiq olunur (lakin nəsildə zəifləmə yaradır).
    - *Qohum olmayan hibridləşmə (Autbridinq):* Heteroziqotluğu artırır.
  * **Heterozis effekti (Hibrid qüvvəsi):** Müxtəlif təmiz xətlərin çarpazlaşmasından alınan $F_1$ hibridlərinin valideynlərə nisbətən daha güclü, məhsuldar və dözümlü olmasıdır. Sonrakı nəsillərdə parçalanma nəticəsində effekt sönür.

  #### 2. Biotexnologiya və Gen Mühəndisliyi
  Biotexnologiya — sənaye miqyasında bioloji obyektlərdən (mikrob, hüceyrə kulturaları) qiymətli məhsulların alınmasıdır.
  * **Gen Mühəndisliyi:** Bir canlının geninin laboratoriyada kəsilib (restriktaza ilə) digər canlının DNT-sinə (plazmid vektor vasitəsilə) köçürülməsidir. Məsələn: İnsan insulin geninin bağırsaq çöplərinə ($E. coli$) köçürülməsi ilə süni təmiz tibbi insulin istehsalı.
  * **Hüceyrə Mühəndisliyi:** Toxuma kulturası metodu və klonlaşdırma (məsələn, Dolli qoyununun somatik hüceyrə nüvəsindən klonlaşdırılması).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Heterozis} = F_1 \\\text{ nəslində maksimal məhsuldarlıq (sonrakı nəsildə sönür)}",
              "name": "Heterozis qanunauyğunluğu",
              "desc": "Hibrid gücünün birinci nəsildə təzahürü"
        }
  ],
      glossary: [
        {
              "term": "Heterozis",
              "definition": "F1 hibridlərinin boy, məhsuldarlıq və dözümlülükcə valideyn formaları xeyli üstələməsi hadisəsi."
        },
        {
              "term": "Gen mühəndisliyi",
              "definition": "DNT molekullarının yenidən qurulması və rekombinant genlərin yaradılması texnologiyası."
        },
        {
              "term": "Plazmid",
              "definition": "Bakteriyalarda əsas DNT-dən kənarda yerləşən kiçik həlqəvi gen daşıyıcısı (vektor)."
        }
  ],
      solvedExamples: [
        {
              "problem": "Niyə birinci nəsildə yüksək məhsul verən heterozis toxumlarından ikinci il üçün toxum kimi istifadə etmək sərfəli deyil?",
              "solution": "Mendelin parçalanma qanununa görə ikinci nəsildə ($F_2$) homoziqot formalar ayrılır və heteroziqotluq 50% azalır. Nəticədə hibrid gücü (heterozis) sönür və məhsuldarlıq kəskin aşağı düşür."
        }
  ],
      miniQuiz: [
        {
              "q": "İnsan insulin hormonunun mikroblar vasitəsilə sənaye miqyasında ucuz alınması biotexnologiyanın hansı sahəsinin nailiyyətidir?",
              "options": [
                    "Kütləvi seçmə",
                    "Gen mühəndisliyi",
                    "İnbredinq",
                    "Poliploidiya"
              ],
              "a": 1,
              "exp": "Gen mühəndisliyi ilə insan genləri bakteriyalara köçürülərək insulin sintez etdirilir."
        },
        {
              "q": "F₁ nəslində alınan hibridlərin valideynlərə nisbətən qat-qat məhsuldar və dözümlü olması hadisəsi necə adlanır?",
              "options": [
                    "Heterozis",
                    "Mutasiya",
                    "İnbredinq",
                    "Degenerasiya"
              ],
              "a": 0,
              "exp": "Bu hadisə heterozis və ya 'hibrid qüvvəsi' adlanır."
        }
  ]
    },

  {
      id: 'biologiya-10-5',
      subjectId: 'biologiya',
      grade: 10,
      unit: 'Bölmə 5: Təkamül Təlimi: Mikro və Makrotəkamül',
      unitOrder: 5,
      title: 'A.N.Severtsov təlimi: Aromorfoz, idioadaptasiya və ümumi degenerasiya',
      order: 5,
      readTimeMinutes: 18,
      difficulty: 3,
      summary: 'Mikrotəkamül (növləşmə yolları: allopatrik və simpatrik), makrotəkamülün əsas yolları: bioloji tərəqqi (aromorfoz, idioadaptasiya, degenarasiya) və bioloji tənəzzül.',
      theoryMarkdown: `
  ### Təkamülün İstiqamətləri və Yolları

  #### 1. Mikrotəkamül və Yeni Növlərin Yaranması
  Populyasiya daxilində baş verən və yeni növün yaranması ilə başa çatan təkamül prosesidir:
  * **Coğrafi (Allopatrik) növləşmə:** Coğrafi maneələrin (dağlar, dənizlər, çaylar) populyasiyanı parçalaması və təcrid etməsi ilə baş verir (məsələn, vadilərdə müxtəlif inciçiçəyi növləri).
  * **Ekoloji (Simpatrik) növləşmə:** Eyni ərazidə qidalanma və ya çoxalma vaxtının dəyişməsi ilə təcridin yaranması (məsələn, Sevan gölündə müxtəlif vaxtlarda kürü tökən forel balıqları).

  #### 2. Makrotəkamül — Bioloji Tərəqqinin Yolları (A.N.Severtsov)
  Bioloji tərəqqi — fərdlərin sayının artması, arealın genişlənməsi və yeni tabeli taksonların yaranmasıdır. Təbiətdə bioloji tərəqqi 3 əsas yolla əldə edilir:
  1. **Aromorfoz (Arogenez):** Canlıların quruluş və funksiyalarını kökündən yüksəldən, ümumi həyat fəaliyyətini gücləndirən böyük təkamül dəyişiklikləridir. Canlılara yeni mühitləri fəth etməyə imkan verir (məsələn: fotosintezin yaranması, çoxhüceyrəlilik, onurğalılarda 4 kameralı ürək və istiqanlılıq, bitkilərdə toxum və çiçəyin yaranması).
  2. **İdioadaptasiya (Allogenez):** Orqanizmin ümumi təşkilat səviyyəsini dəyişmədən konkret mühit şəraitinə xüsusi xırda uyğunlaşmasıdır (məsələn: quşlarda dimdiyin forması, qoruyucu rəng, yarasada qanadların formalaşması, kaktusda yarpağın tikana çevrilməsi).
  3. **Ümumi Degenerasiya (Katamorfoz):** Passiv və ya parazit həyat tərzi ilə əlaqədar bir sıra orqanların və sistemlərin reduksiyaya uğraması (sadələşməsi). Məsələn: parazit öküz soliterində həzm sisteminin, gözlərin və hərəkət orqanlarının tam itməsi (əvəzində sormaclar və nəhəng çoxalma qabiliyyəti inkişaf etmişdir).
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Bioloji tərəqqi yolları} = \\\text{Aromorfoz (səviyyə qalxır)} + \\\text{İdioadaptasiya (uyğunlaşma)} + \\\text{Degenerasiya (sadələşmə)}",
              "name": "Severtsovun tərəqqi sxemi",
              "desc": "Təkamüldə morfo-fizioloji inkişaf formaları"
        }
  ],
      glossary: [
        {
              "term": "Aromorfoz",
              "definition": "Canlının ümumi təşkilat səviyyəsini kökündən yüksəldən böyük miqyaslı təkamül sıçrayışı."
        },
        {
              "term": "İdioadaptasiya",
              "definition": "Ümumi səviyyəni qaldırmadan dar mühitə xüsusi uyğunlaşma qazandıran dəyişiklik."
        },
        {
              "term": "Degenerasiya",
              "definition": "Parazit həyatla əlaqədar bəzi orqan və sistemlərin itirilməsi ilə gedən təkamül tərəqqisi."
        }
  ],
      solvedExamples: [
        {
              "problem": "İstiqanlılığın yaranması və kaktusun yarpaqlarının tikanlara çevrilməsi Severtsova görə hansı təkamül yollarına aiddir?",
              "solution": "İstiqanlılığın yaranması orqanizmin ümumi enerji səviyyəsini və təşkilatını yüksəltdiyi üçün AROMORFOZDUR. Kaktusun tikanları isə quraq səhra mühitində su itkisini azaltmaq üçün xüsusi yerli uyğunlaşma olduğundan İDİOADAPTASİYADIR."
        }
  ],
      miniQuiz: [
        {
              "q": "Onurğalılarda 4 kameralı ürəyin və istiqanlılığın yaranması hansı təkamül yoluna aiddir?",
              "options": [
                    "İdioadaptasiya",
                    "Aromorfoz",
                    "Degenerasiya",
                    "Konvergensiya"
              ],
              "a": 1,
              "exp": "Bu cür qlobal mütərəqqi dəyişikliklər aromorfoz adlanır."
        },
        {
              "q": "Parazit öküz soliterində həzm sisteminin və hiss orqanlarının itməsi təkamülün hansı yoludur?",
              "options": [
                    "Aromorfoz",
                    "Ümumi degenerasiya",
                    "İdioadaptasiya",
                    "Bioloji tənəzzül"
              ],
              "a": 1,
              "exp": "Parazitizmlə əlaqədar sistemlərin sadələşməsi ümumi degenerasiyadır."
        }
  ]
    },

  {
      id: 'biologiya-11-1',
      subjectId: 'biologiya',
      grade: 11,
      unit: 'Bölmə 1: Həyatın Əmələ Gəlməsi və Yerin Geoloji Tarixi',
      unitOrder: 1,
      title: 'A.İ.Oparin nəzəriyyəsi, koaservatlar və geoloji eralar',
      order: 1,
      readTimeMinutes: 18,
      difficulty: 3,
      summary: 'Həyatın mənşəyi fərziyyələri, A.İ.Oparin abiogenez nəzəriyyəsi və Miller-Yuri təcrübəsi, koaservat damcıları, Yerin geoloji eraları (Arxey, Proterozoy, Paleozoy, Mezozoy, Kaynozoy).',
      theoryMarkdown: `
  ### Həyatın Yaranması və Yerin Geoloji İnkişafı

  #### 1. Həyatın Yaranması Nəzəriyyələri
  * **Kreatsionizm:** Həyat fövqəltəbii qüvvə (Yaradan) tərəfindən yaradılmışdır.
  * **Biogenez (L.Paster):** Canlı yalnız canlıdan törəyə bilər (öz-özünə cansızdan canlı yaranma inkar olundu).
  * **Abiogen nəzəriyyə (A.İ.Oparin və C.Holden):** İlkin Yerdə qeyri-üzvi maddələrdən kimyəvi təkamüllə üzvi maddələrin və ilkin hüceyrələrin yaranması:
    1. *İlkin atmosferdə:* Metan ($CH_4$), ammonyak ($NH_3$), su buxarı və hidrogen qazı var idi (sərbəst oksigen yox idi).
    2. *Miller-Yuri təcrübəsi (1953):* Bu qaz qarışığından elektrik qığılcımı keçirərək süni şəkildə amin turşuları sintez etdilər.
    3. *Koaservat damcıları:* Zülalların suda ayrılaraq damcılar əmələ gətirməsi (maddələr mübadiləsi edən ilk sistemlər — probiontlar).

  #### 2. Yerin Geoloji Eraları və Həyatın İnkişafı
  1. **Arxey erası (Ən qədim era — 1 milyard il):** Həyatın başlanğıcı; ilk prokariotlar, fotosintezin və qeyri-cinsi çoxalmanın yaranması.
  2. **Proterozoy erası (İlk həyat):** Eukariotların, çoxhüceyrəliliyin, cinsi çoxalmanın və ikitərəfli simmetriyanın yaranması.
  3. **Paleozoy erası (Qədim həyat — 6 dövr):**
     - Kembri, Ordovik, Silur: Bitkilərin (psilofitlər) və əqrəblərin quruya çıxması.
     - Devon: Balıqlar əsri, ilk amfibiyaların (steqosefallar) quruya çıxışı.
     - Karbon (Daş kömür): Nəhəng qıjı meşələri, ilk sürünənlər və qanadlı həşəratlar.
     - Perm: Çılpaqtoxumluların yayılması.
  4. **Mezozoy erası (Orta həyat — Sürünənlər erası):**
     - Trias, Yura, Tabaşir: Nəhəng dinozavrların hakimiyyəti. İlk məməlilərin, ilk quşların (**arxeopteriks** — keçid forması) və **çiçəkli (örtülütoxumlu) bitkilərin** yaranması.
  5. **Kaynozoy erası (Yeni həyat — Müasir era):**
     - Paleogen, Neogen, Dördüncü dövr (Antropogen): Məməlilərin, quşların və çiçəkli bitkilərin çiçəklənməsi; **İnsanın yaranması**.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Eralar sırası} = \\\text{Arxey} \\rightarrow \\\text{Proterozoy} \\rightarrow \\\text{Paleozoy} \\rightarrow \\\text{Mezozoy} \\rightarrow \\\text{Kaynozoy}",
              "name": "Geoloji eralar ardıcıllığı",
              "desc": "Yerin 4.5 milyard illik inkişaf tarixi"
        }
  ],
      glossary: [
        {
              "term": "Koaservat",
              "definition": "Məhluldan ayrılan və maddələr mübadiləsinə bənzər xassə göstərən ilkin üzvi damcılar."
        },
        {
              "term": "Arxeopteriks",
              "definition": "Sürünənlərlə quşlar arasında aralıq keçid təşkil edən qədim qazıntı canlısı."
        }
  ],
      solvedExamples: [
        {
              "problem": "Niyə örtülütoxumlu (çiçəkli) bitkilər və məməlilər Mezozoyun sonunda yaranmalarına baxmayaraq məhz Kaynozoyda qlobal hökmranlığa çatdılar?",
              "solution": "Mezozoyun sonunda baş verən qlobal iqlim soyuması və quraqlıq nəticəsində istiqanlı məməlilər və toxumları meyvə daxilində qorunan çiçəkli bitkilər böyük adaptasiya üstünlüyü qazandılar, soyuqqanlı nəhəng dinozavrlar isə məhv oldu."
        }
  ],
      miniQuiz: [
        {
              "q": "Tarixdə ilk dəfə bitkilərin və heyvanların quruya çıxması hansı geoloji erada baş vermişdir?",
              "options": [
                    "Arxey",
                    "Proterozoy",
                    "Paleozoy",
                    "Kaynozoy"
              ],
              "a": 2,
              "exp": "Paleozoyun Silur dövründə psilofit bitkiləri və ilk buğumayaqlılar quruya çıxmışdır."
        },
        {
              "q": "Sürünənlərlə quşlar arasında keçid forma sayılan qədim canlı hansıdır?",
              "options": [
                    "İxtiosteq",
                    "Arxeopteriks",
                    "Neştərçə",
                    "Trilobit"
              ],
              "a": 1,
              "exp": "Arxeopteriks dişləri və uzun quyruğu ilə sürünənə, lələkləri ilə quşa bənzəyirdi."
        }
  ]
    },

  {
      id: 'biologiya-11-2',
      subjectId: 'biologiya',
      grade: 11,
      unit: 'Bölmə 2: Antropogenez: İnsanın Təkamülü',
      unitOrder: 2,
      title: 'İnsanın mənşəyi mərhələləri, sosial amillər və insan irqləri',
      order: 2,
      readTimeMinutes: 18,
      difficulty: 2,
      summary: 'İnsanın heyvanlar aləmində mövqeyi (rudimentlər və atavizmlər), antropogenezin mərhələləri (avstralopitek, arxantrop, paleoantrop, neoantrop), ictimai əmək və nitq, bəşəriyyətin vahidliyi.',
      theoryMarkdown: `
  ### Antropogenez — İnsanın Mənşəyi

  #### 1. İnsanın Təbiətdə Mövqeyi və Sübutlar
  * **Sistematik mövqeyi:** Xordalılar tipi, Məməlilər sinfi, Primatlar dəstəsi, Hominidlər fəsiləsi, İnsan (*Homo*) cinsi, Düşüncəli insan (*Homo sapiens*) növü.
  * **Rudimentlər (Qalıq orqanlar):** Təkamül boyu əhəmiyyətini itirmiş orqanlar (kor bağırsağın çıxıntısı — appendiks, büzdüm sümükləri, ağıl dişləri, qulağı tərpədən əzələlər).
  * **Atavizmlər:** Əcdadlara xas olan əlamətlərin tək-tək fərdlərdə qəfil təzahürü (bütün bədənin tüklənməsi, çoxməməlilik, xarici quyruğun olması).

  #### 2. Antropogenezin Hərəkətverici Qüvvələri (F.Engels)
  * **Bioloji amillər:** İrsi dəyişkənlik, yaşamaq uğrunda mübarizə və təbii seçmə (bütün canlılar kimi).
  * **Sosial amillər (Yalnız insana xasdır və üstün rol oynayır):** **İctimai əmək fəaliyyəti**, əmək alətlərinin hazırlanması, **sürü halında yaşayış**, **şüur və rabitəli nitq**.

  #### 3. İnsanın Təkamül Mərhələləri
  1. **Meymun-insanlar (Avstralopiteklər):** İkiaşaqla düz yeriyirdilər, əlləri sərbəst idi, lakin beyin həcmi kiçik idi ($500-600 \	ext{ sm}^3$). Bacarıqlı insan (*Homo habilis*) ilk daş alətlər yonmuşdur.
  2. **Ən qədim insanlar (Arxantroplar — Pitekantrop, Sinantrop):** Beyin həcmi $900-1100 \	ext{ sm}^3$. Oddan istifadə etməyi öyrənmişlər, ibtidai nitq cücərtiləri yaranmışdır.
  3. **Qədim insanlar (Paleoantroplar — Neandertallar):** Beyin həcmi $1400 \	ext{ sm}^3$. Qrup halında ov edir, süni od əldə edir, mağaralarda yaşayır və ölülərini basdırırdılar.
  4. **Müasir tipli insanlar (Neoantroplar — Kromanyonlar / *Homo sapiens*):** Beyin həcmi $1400-1600 \	ext{ sm}^3$. Əsl rabitəli nitq, incəsənət (qayaüstü rəsmlər — Qobustan), qəbilə quruluşu, heyvanların əhliləşdirilməsi.

  #### 4. İnsan İrqləri
  Bütün müasir bəşəriyyət vahid bir növə — *Homo sapiens*-ə aiddir. 3 əsas irq vardır: **Avropoid, Monqoloid və Neqroid**. İrqlər arasındakı xarici fərqlər (dəri rəngi, saç forması, göz quruluşu) qədim dövrlərdə müxtəlif iqlim şəraitlərinə yaranmış morfoloji adaptasiyalardır; zehni, psixoloji və bioloji cəhətdən bütün irqlər tamamilə bərabərhüquqludur.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Antropogenez} = \\\text{Bioloji amillər} + \\\text{Sosial amillər (Əmək, Nitq, Şüur)}",
              "name": "İnsanın təkamül hərəkətvericiləri",
              "desc": "Sosial amillərin bioloji amilləri üstələməsi"
        }
  ],
      glossary: [
        {
              "term": "Rudiment",
              "definition": "Təkamül prosesində öz ilkin vacib funksiyasını itirmiş qalıq orqan (məsələn, appendiks)."
        },
        {
              "term": "Atavizm",
              "definition": "Uzaq əcdadlara xas olan əlamətin tək-tək müasir fərdlərdə qəfil meydana çıxması (məsələn, quyruqluluq)."
        },
        {
              "term": "Kromanyon",
              "definition": "Təxminən 40 min il əvvəl yaşamış müasir tipli ilk düşüncəli insan (Homo sapiens)."
        }
  ],
      solvedExamples: [
        {
              "problem": "İnsanda appendiks çıxıntısı ilə quyruğun doğulması arasındakı fərq nədir?",
              "solution": "Appendiks istisnasız olaraq bütün sağlam insanlarda olan rudiment orqandır (həzmdə rolunu itirib, limfoid müdafiə edir). Quyruqla doğulmaq isə normadan kənar, çox nadir hallarda qəfil baş verən atavizmdir."
        }
  ],
      miniQuiz: [
        {
              "q": "F.Engelsə görə meymunun insana çevrilməsində həlledici rol oynamış əsas amil nədir?",
              "options": [
                    "İqlimin soyuması",
                    "İctimai əmək fəaliyyəti və alət hazırlama",
                    "Su qıtlığı",
                    "Ağacdan yerə düşmə"
              ],
              "a": 1,
              "exp": "Əmək fəaliyyəti və alət hazırlama şüurun və nitqin inkişafının əsas hərəkətverici qüvvəsi olmuşdur."
        },
        {
              "q": "İnsanın kor bağırsaq çıxıntısı (appendiks) və ağıl dişləri təkamülün hansı sübutlarına aiddir?",
              "options": [
                    "Atavizmlərə",
                    "Rudimentlərə",
                    "Aromorfozlara",
                    "İdioadaptasiyaya"
              ],
              "a": 1,
              "exp": "Appendiks və ağıl dişləri bütün insanlarda qalan rudiment (qalıq) orqanlardır."
        }
  ]
    },

  {
      id: 'biologiya-11-3',
      subjectId: 'biologiya',
      grade: 11,
      unit: 'Bölmə 3: Ekoloji Amillər və Populyasiyaların Dinamikası',
      unitOrder: 3,
      title: 'Abiotik, biotik və antropogen amillər, ekoloji qanunlar',
      order: 3,
      readTimeMinutes: 17,
      difficulty: 2,
      summary: 'Ekoloji amillərin təsnifatı, Yu.Libixin \'Minimum qanunu\', Şelfordun \'Tolerantlıq qanunu\', populyasiyanın demoqrafik strukturu və sağ qalma əyriləri.',
      theoryMarkdown: `
  ### Ekoloji Amillər və Populyasiya Ekologiyası

  #### 1. Ekoloji Amillərin Təsnifatı
  Ekologiya — canlıların bir-biri və ətraf mühitlə qarşılıqlı əlaqələrini öyrənən elmdir (E.Hekkel, 1866).
  1. **Abiotik amillər:** Cansız təbiət amilləri: işıq, temperatur, rütubət, suyun və torpağın tərkibi, relyef.
  2. **Biotik amillər:** Canlı orqanizmlərin bir-birinə qarşılıqlı təsiri:
     - *Simbioz (Mutualizm):* Qarşılıqlı faydalı əlaqə ($+,+$).
     - *Kommensalizm:* Bir tərəf faydalanır, digərinə zərərsizdir ($+,0$).
     - *Yırtıcılıq və Parazitizm:* Bir tərəf qazanır, digəri zərər çəkir ($+,-$).
     - *Rəqabət:* Eyni resurs uğrunda hər iki tərəfə mənfi təsir ($-,-$).
  3. **Antropogen amillər:** İnsanın canlı təbiətə birbaşa və ya dolayı təsiri (meşələrin qırılması, ovçuluq, zavod tullantıları).

  #### 2. Ekoloji Qanunlar
  * **Optimum qanunu:** Hər bir amilin canlı üçün ən əlverişli təsir dərəcəsi vardır (**optimum zona**). Optimumdan kənara çıxdıqda orqanizmin həyat fəaliyyəti zəifləyir (depressiya zonası) və dözümlülük həddini aşdıqda ölüm baş verir.
  * **Yu.Libixin "Məhdudlaşdırıcı (Minimum) Qanunu":**
    Orqanizmin məhsuldarlığı və sağ qalması mühitdə ehtiyaca nisbətən ən az miqdarda (minimumda) olan amildən asılıdır ("Libix çəlləyi").
  * **V.Şelfordun "Tolerantlıq Qanunu":**
    Canlı üçün amilin təkcə çatışmazlığı deyil, həm də həddindən artıq çoxluğu məhdudlaşdırıcı təsir göstərir.

  #### 3. Populyasiyanın Əsas Xarakteristikaları
  * **Sayı və Sıxlığı:** Vahid sahəyə və ya həcmə düşən fərdlərin sayı.
  * **Doğum və Ölüm:** Populyasiyanın artım sürətini təyin edir.
  * **Cinsi və Yaş strukturu:** Cavan, yetkin və qoca fərdlərin nisbəti.
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Populyasiya sıxlığı} = \\frac{N \\\text{ (fərd sayı)}}{S \\\text{ (sahə və ya həcm)}}",
              "name": "Sıxlıq düsturu",
              "desc": "Vahid sahəyə düşən orqanizm sayı"
        },
        {
              "formula": "\\\text{Artım} = (\\\text{Doğum} + \\\text{İmmiqrasiya}) - (\\\text{Ölüm} + \\\text{Emiqrasiya})",
              "name": "Populyasiya dinamikası",
              "desc": "Fərdlərin say balansının dəyişməsi"
        }
  ],
      glossary: [
        {
              "term": "Tolerantlıq",
              "definition": "Canlının ekoloji amilin dəyişmə diapazonuna dözümlülük qabiliyyəti."
        },
        {
              "term": "Məhdudlaşdırıcı amil",
              "definition": "Mühitdə optimumdan ən çox uzaqlaşaraq növün yaşamasını məhdudlaşdıran amil."
        },
        {
              "term": "Mutualizm",
              "definition": "İki növün bir-biri olmadan yaşaya bilmədiyi sıx faydalı birgəyaşayış forması."
        }
  ],
      solvedExamples: [
        {
              "problem": "Bitkinin böyüməsi üçün torpaqda bütün gübrələr bol miqdardadır, lakin təkcə sink (Zn) elementi çatışmır. Bitkinin inkişafı necə olacaq?",
              "solution": "Libixin minimum qanununa görə, digər bütün amillər bol olsa belə, inkişaf ən minimumda olan elementlə (sinklə) məhdudlaşacaq və bitki yaxşı böyüməyəcək."
        }
  ],
      miniQuiz: [
        {
              "q": "Canlı orqanizmin həyat fəaliyyəti üçün ən əlverişli olan amil dozası necə adlanır?",
              "options": [
                    "Minimum",
                    "Maksimum",
                    "Optimum zona",
                    "Pesimum"
              ],
              "a": 2,
              "exp": "Ən yüksək məhsuldarlıq və həyat fəaliyyəti optimum zonada müşahidə olunur."
        },
        {
              "q": "İnsanın təsərrüfat fəaliyyətinin ətraf mühitə və canlılara təsiri hansı ekoloji amillərə aiddir?",
              "options": [
                    "Biotik",
                    "Abiotik",
                    "Antropogen amillər",
                    "İqlim amilləri"
              ],
              "a": 2,
              "exp": "İnsanın fəaliyyəti nəticəsində yaranan bütün amillər antropogen adlanır."
        }
  ]
    },

  {
      id: 'biologiya-11-4',
      subjectId: 'biologiya',
      grade: 11,
      unit: 'Bölmə 4: Biogeosenozlar, Ekosistemlər və Qida Zəncirləri',
      unitOrder: 4,
      title: 'Produsentlər, konsumentlər, redusentlər və ekoloji piramidalar',
      order: 4,
      readTimeMinutes: 18,
      difficulty: 2,
      summary: 'Biogeosenozun strukturu, trofik səviyyələr (istehsalçılar, istehlakçılar, parçalayıcılar), qida şəbəkələri, Lindemanın 10% enerji piramidası qaydası və süksessiya.',
      theoryMarkdown: `
  ### Biogeosenozlar və Ekosistemlər

  #### 1. Biogeosenozun Funksional Qrupları (V.N.Sukaçev)
  Biogeosenoz — eyni ərazidə yaşayan canlıların (biosenoz) və cansız mühitin (biotop) qarşılıqlı əlaqədə olduğu təbii sistemdir:
  1. **Produsentlər (İstehsalçılar):** Günəş enerjisi hesabına qeyri-üzvi maddələrdən ilkin üzvi maddə yaradan avtotroflardır (yaşıl bitkilər, xemosintezedici bakteriyalar).
  2. **Konsumentlər (İstehlakçılar):** Hazır üzvi maddələrlə qidalanan heterotrof canlılardır:
     - *I dərəcəli konsumentlər:* Ot yeyən heyvanlar (dovşan, maral, qoyun).
     - *II dərəcəli konsumentlər:* Yırtıcılar (canavar, tülkü).
     - *III dərəcəli konsumentlər:* Yüksək yırtıcılar (qartal, şir).
  3. **Redusentlər (Parçalayıcılar):** Ölü üzvi qalıqları (leş, tökülmüş yarpaqlar) mineral maddələrə qədər parçalayaraq torpağa qaytaran canlılardır (çürüntü bakteriyaları və göbələklər).

  #### 2. Qida Zəncirləri və Trofik Səviyyələr
  Maddələr dövranı və enerji axını qida zəncirləri vasitəsilə həyata keçirilir:
  * **Otlaq qida zənciri (Yayılma):** Yaşıl bitkidən başlayır:
    $$\	ext{Ot (Produsent)} \rightarrow \	ext{Çəyirtkə (Konsument I)} \rightarrow \	ext{Qurbağa (Konsument II)} \rightarrow \	ext{İlan (Konsument III)} \rightarrow \	ext{Qartal}$$
  * **Detrit qida zənciri (Parçalanma):** Ölü üzvi qalıqdan başlayır:
    $$\	ext{Tökülmüş yarpaq} \rightarrow \	ext{Soxulcan} \rightarrow \	ext{Qaratoyuq} \rightarrow \	ext{Yırtıcı quş}$$

  #### 3. R.Lindemanın 10% Enerji Piramidası Qaydası (1942)
  Qida zəncirində bir trofik səviyyədən növbəti səviyyəyə keçdikdə **enerjinin təxminən yalnız $10\%$-i** ötürülür, qalan $90\%$-i istilik şəklində ayrılır və həyat fəaliyyətinə sərf olunur.
  * Buna görə qida zəncirində halqaların sayı adətən **4-5-dən çox ola bilmir** (çünki enerji tükənir).

  #### 4. Ekosistemlərin Dəyişməsi — Süksessiya
  Ekosistemlərin ardıcıl və qanunauyğun olaraq bir-birini əvəz etməsi prosesidir:
  * *İlkin süksessiya:* Həyat olmayan çılpaq qaya və ya qumsallıqda başlayır (Şibyələr $\rightarrow$ Mamırlar $\rightarrow$ Otlar $\rightarrow$ Meşə).
  * *İkinci süksessiya:* Yanğın və ya qırılmadan sonra meşənin bərpası.
      `,
      keyFormulas: [
        {
              "formula": "E_{n+1} \\approx 0.10 \\times E_n",
              "name": "10% enerji qaydası (Lindeman)",
              "desc": "Hər sonrakı trofik səviyyəyə enerjinin yalnız onda biri keçir"
        }
  ],
      glossary: [
        {
              "term": "Produsent",
              "definition": "Qeyri-üzvi maddələrdən ilkin üzvi maddə sintez edən avtotrof canlı (bitki)."
        },
        {
              "term": "Redusent",
              "definition": "Ölü üzvi qalıqları mineral duzlara parçalayan destruktor orqanizm (bakteriya, göbələk)."
        },
        {
              "term": "Süksessiya",
              "definition": "Müəyyən ərazidə biosenozların ardıcıl və dönməz şəkildə bir-birini əvəz etməsi prosesi."
        }
  ],
      solvedExamples: [
        {
              "problem": "Biokütləsi 20 kq olan tülkünün böyüməsi üçün Lindeman qaydasına görə neçə kq ot (produsent) tələb olunar (Zəncir: Ot → Dovşan → Tülkü)?",
              "solution": "1) 20 kq tülkünün yetişməsi üçün 10 dəfə çox dovşan lazımdır: 20 × 10 = 200 kq dovşan. 2) 200 kq dovşanın qidalanması üçün 10 dəfə çox ot tələb olunur: 200 × 10 = 2000 kq (2 ton) ot tələb olunar."
        }
  ],
      miniQuiz: [
        {
              "q": "Qida zəncirində bir səviyyədən digərinə keçərkən enerjinin neçə faizi növbəti səviyyəyə ötürülür?",
              "options": [
                    "50%",
                    "100%",
                    "Təxminən 10%",
                    "1%"
              ],
              "a": 2,
              "exp": "Lindemanın ekoloji piramida qaydasına görə enerjinin yalnız təxminən 10%-i ötürülür."
        },
        {
              "q": "Qida zəncirində ölü üzvi qalıqları parçalayıb minerallara çevirən canlılar hansı qrupa aiddir?",
              "options": [
                    "Produsentlər",
                    "Konsumentlər",
                    "Redusentlər",
                    "Ot yeyənlər"
              ],
              "a": 2,
              "exp": "Redusentlər (bakteriya və göbələklər) ölü üzvi kütləni minerallaşdırırlar."
        }
  ]
    },

  {
      id: 'biologiya-11-5',
      subjectId: 'biologiya',
      grade: 11,
      unit: 'Bölmə 5: Biosfer və Qlobal Ekoloji Problemlər',
      unitOrder: 5,
      title: 'V.İ.Vernadski təlimi, canlı maddə və Noosfer',
      order: 5,
      readTimeMinutes: 18,
      difficulty: 2,
      summary: 'V.İ.Vernadskinin biosfer təlimi, biosferin sərhədləri (atmosfer, hidrosfer, litosfer), canlı maddənin funksiyaları, Noosfer (ağıl sferası), istixana effekti və biomüxtəlifliyin qorunması.',
      theoryMarkdown: `
  ### Biosfer Təlimi və Qlobal Ekologiya

  #### 1. V.İ.Vernadskinin Biosfer Haqqında Təlimi (1926)
  Biosfer — Yerin canlı orqanizmlər məskunlaşmış və onların həyat fəaliyyətinin məhsullarını saxlayan qlobal təbəqəsidir.
  * **Biosferin Sərhədləri:**
    - *Atmosferdə:* Təxminən $20-25 \	ext{ km}$ hündürlüyə qədər (**ozon təbəqəsinə** qədər, çünki ondan yuxarıda sərt UB şüalar həyatı məhv edir).
    - *Hidrosferdə:* Bütün okean və dənizləri əhatə edir ($11 \	ext{ km}$ dərinliyədək — Marian çökəkliyi daxil).
    - *Litosferdə:* Yer qabığında təxminən $3-4.5 \	ext{ km}$ dərinliyədək (neft laylarında bakteriyalar, yüksək temperatur həddinədək).

  #### 2. Biosferdə Maddələrin Növləri və Canlı Maddənin Funksiyaları
  * **Maddələrin təsnifatı:**
    - *Canlı maddə:* Bütün canlı orqanizmlərin biokütləsi.
    - *Biogen maddə:* Canlıların yaratdığı maddələr (daş kömür, torf, neft, əhəngdaşı, təbaşir, oksigen).
    - *Köz maddə:* Canlıların iştirakı olmadan yaranan cansız geoloji süxurlar (qranit, bazalt).
    - *Bioköz maddə:* Canlılarla cansız təbiətin birgə məhsulu (**torpaq**, təbii sular).
  * **Canlı Maddənin Geokimyəvi Funksiyaları:**
    1. *Qaz funksiyası:* Atmosferin tərkibini ($O_2, CO_2, N_2$) tənzimləyir.
    2. *Konsentrasiya funksiyası:* Kimyəvi elementləri bədəndə toplayır (dəmir, kalsium, silisium, yod).
    3. *Oksidləşmə-reduksiya funksiyası:* Maddələrin çevrilməsi.

  #### 3. Noosfer — Ağıl Sferası
  V.İ.Vernadskiyə görə biosferin təkamülünün ən yüksək mərhələsi **Noosferdir (idrak / ağıl sferası)**. Bu mərhələdə insan cəmiyyəti elmi idrak və humanist məsuliyyətlə təbiətlə harmoniyada inkişaf edir.

  #### 4. Qlobal Ekoloji Problemlər
  * **İstixana effekti və Qlobal İstiləşmə:** Atmosferdə $CO_2$ və metanın artması nəticəsində istiliyin kosmosa buraxılmaması və buzlaqların əriməsi.
  * **Ozon qatının seyrəlməsi:** Freon qazlarının təsiri ilə UB şüalardan qoruyan ozon təbəqəsinin dağılması.
  * **Turşulu yağışlar:** Kükürd və azot oksidləri ($SO_2, NO_2$) hesabına meşələrin və su hövzələrinin zəhərlənməsi.
  * **Biomüxtəlifliyin azalması:** Nadir bitki və heyvanların məhvi ("Qırmızı Kitab").
      `,
      keyFormulas: [
        {
              "formula": "\\\text{Biosfer} \\xrightarrow{\\\text{İdrak və Elmi Əmək}} \\\text{Noosfer (Ağıl Sferası)}",
              "name": "Vernadskinin noosfer konsepsiyası",
              "desc": "Biosferin ən yüksək təkamül mərhələsi"
        }
  ],
      glossary: [
        {
              "term": "Noosfer",
              "definition": "İnsan zəkasının və elminin təbiətin inkişafında həlledici qüvvəyə çevrildiyi biosfer mərhələsi."
        },
        {
              "term": "Biogen maddə",
              "definition": "Canlı orqanizmlərin həyat fəaliyyətinin məhsulu kimi formalaşan maddə (neft, daş kömür, torf)."
        },
        {
              "term": "İstixana effekti",
              "definition": "CO₂ və digər istixana qazlarının istilik şüalarını tutaraq planetin orta temperaturunu qaldırması hadisəsi."
        }
  ],
      solvedExamples: [
        {
              "problem": "Biosferin yuxarı sərhədini məhdudlaşdıran hansı amildir və bu hündürlük nə qədərdir?",
              "solution": "Biosferin yuxarı sərhədi atmosferdə təxminən 20-25 km hündürlükdə yerləşən ozon təbəqəsidir. Bu təbəqədən yuxarıda günəşin öldürücü ultrabənövşəyi şüaları bütün canlı hüceyrələri məhv edir."
        }
  ],
      miniQuiz: [
        {
              "q": "Biosfer haqqında geniş elmi təlimi və Noosfer konsepsiyasını kim yaratmışdır?",
              "options": [
                    "Ç.Darvin",
                    "V.İ.Vernadski",
                    "L.Paster",
                    "İ.Meçnikov"
              ],
              "a": 1,
              "exp": "Biosfer və Noosfer təliminin banisi akademik V.İ.Vernadskidir."
        },
        {
              "q": "Atmosferdə karbon qazının (CO₂) artması nəticəsində yer səthinin qızması hansı qlobal ekoloji problemə səbəb olur?",
              "options": [
                    "Ozon deşiyi",
                    "İstixana effekti və iqlim istiləşməsi",
                    "Torpağın şoranlaşması",
                    "Zəlzələlər"
              ],
              "a": 1,
              "exp": "CO₂ qazının çoxalması istilik şüalarını tutaraq istixana effektinə və qlobal istiləşməyə səbəb olur."
        }
  ]
    }
,

  // =========================================================================
  // 6. COĞRAFİYA (AR Elm və Təhsil Nazirliyi e-Dərslik: 6, 7, 8, 9, 10, 11 - 34 Bölmə)
  // =========================================================================
  {
    id: 'cografiya-6-1',
    subjectId: 'cografiya',
    grade: 6,
    unit: 'Bölmə 1: Yer Haqqında Biliklərin İnkişafı və Coğrafi Kəşflər',
    unitOrder: 1,
    title: 'Qədim səyyahlar və Böyük Coğrafi Kəşflər dövrü',
    order: 1,
    readTimeMinutes: 15,
    difficulty: 1,
    summary: 'Coğrafiya elminin yaranması (Eratosfen), qədim dövr tədqiqatçıları, Böyük coğrafi kəşflər: X.Kolumb, Vasko da Qama, F.Magellan və ilk dünya səyahəti.',
    theoryMarkdown: `
### Coğrafiyanın İnkişaf Tarixi

#### 1. Coğrafiya Elminin Yaranması
"Coğrafiya" sözünü ilk dəfə e.ə. III əsrdə qədim yunan alimi **Eratosfen** işlətmişdir ("geo" — Yer, "qrafo" — yazıram, yəni "Yeri təsvir edirəm").
* Qədim dövrdə insanlar Yeri yastı disk, dörd filin və nəhəng tısbağanın belində təsəvvür edirdilər.
* Yerin kürə şəklində olmasını ilk dəfə filosof **Pifaqor**, elmi cəhətdən isə **Aristotel** (Ay tutulması zamanı Yerin Ay üzərinə düşən kölgəsinə əsaslanaraq) sübut etmişdir.

#### 2. Böyük Coğrafi Kəşflər Dövrü (XV–XVII əsrlər)
* **Xristofor Kolumb (1492):** İspaniyadan qərbə üzərək Hindistana dəniz yolu axtararkən **Amerikanı (Yeni Dünyanı)** kəşf etdi, lakin ömrünün sonunadək oranı Hindistan zənn etdi.
* **Vasko da Qama (1498):** Afrikanın cənubundakı Ümid burnunu dolanaraq **Hindistana gedən dəniz yolunu** açdı.
* **Fernan Magellan (1519–1522):** İlk dəfə **Dünya səyahətini** həyata keçirdi:
  - Yerin kürə şəklində olduğunu əməli olaraq sübut etdi.
  - Vahid Dünya okeanının mövcudluğunu göstərdi.
  - Sakit okeanı kəşf etdi və adlandırdı.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Yer çevrəsi (Eratosfen)} \\approx 40000 \\text{ km}",
            "name": "Eratosfen hesablaması",
            "desc": "Yerin meridian çevrəsinin ilk dəqiq ölçülməsi"
      }
],
    glossary: [
      {
            "term": "Böyük Coğrafi Kəşflər",
            "definition": "XV-XVII əsrlərdə Avropa dənizçilərinin yeni qitələri və dəniz yollarını kəşf etdiyi tarixi dövr."
      },
      {
            "term": "Eratosfen",
            "definition": "Coğrafiya elminin banisi və ilk coğrafiya kitabının müəllifi olan qədim yunan alimi."
      }
],
    solvedExamples: [
      {
            "problem": "Fernan Magellanın dünya səyahətinin əsas coğrafi nəticəsi nə oldu?",
            "solution": "Magellanın ekspedisiyası qərbə doğru üzərək şərqdən İspaniyaya qayıtdı. Bu, Yerin kürə şəklində olmasını və bütün okeanların bir-biri ilə bağlı vahid Dünya okeanı təşkil etdiyini əməli sübut etdi."
      }
],
    miniQuiz: [
      {
            "q": "Tarixdə ilk dəfə dünya səyahətini hansı səyyahın ekspedisiyası həyata keçirmişdir?",
            "options": [
                  "Xristofor Kolumb",
                  "Fernan Magellan",
                  "Vasko da Qama",
                  "Marko Polo"
            ],
            "a": 1,
            "exp": "1519-1522-ci illərdə Magellanın başçılığı ilə ilk dəfə dünya dolanılmışdır."
      },
      {
            "q": "Yerin kürə şəklində olduğunu Ay tutulması zamanı kölgəyə əsasən ilk dəfə kim sübut etmişdir?",
            "options": [
                  "Aristotel",
                  "Eratosfen",
                  "Ptolemey",
                  "Herodot"
            ],
            "a": 0,
            "exp": "Aristotel Ay tutulmasında Yerin qövsşəkilli kölgəsinə əsaslanaraq onun kürə olduğunu göstərmişdir."
      }
]
  },

  {
    id: 'cografiya-6-2',
    subjectId: 'cografiya',
    grade: 6,
    unit: 'Bölmə 2: Yer Kürəsinin Kartoqrafik Təsviri',
    unitOrder: 2,
    title: 'Plan, miqyas, qlobus və coğrafi xəritə',
    order: 2,
    readTimeMinutes: 16,
    difficulty: 1,
    summary: 'Yer səthinin təsvir vasitələri, qlobus, topoqrafik plan, miqyas növləri (ədədi, adlı, xətti), şərti işarələr, meridianlar, paralellər və coğrafi koordinatlar.',
    theoryMarkdown: `
### Kartoqrafiya və Təsvir Vasitələri

#### 1. Plan, Xəritə və Qlobus
* **Qlobus:** Yerin ən dəqiq, təhrifsiz, kiçildilmiş üçölçülü modelidir.
* **Topoqrafik Plan:** Kiçik bir yer səthinin böyük miqyasla ($1:10000$ və daha böyük) kağız üzərində təsviridir. Yerin əyriliyi nəzərə alınmır.
* **Coğrafi Xəritə:** Yer səthinin dərəcə şəbəkəsi əsasında, miqyasla müstəvi üzərində kiçildilmiş təsviridir.

#### 2. Miqyas və Onun Növləri
Miqyas — xəritədəki xəttin uzunluğunun yer üzərindəki həqiqi məsafəyə nisbətidir:
* **Ədədi miqyas:** Kəsr şəklində göstərilir: $1 : 100000$ (1 sm-də 100 000 sm var).
* **Adlı miqyas:** Sözlə yazılır: 1 sm-də 1 km (santimetri metrə çevirmək üçün 2 sıfır, kilometrə çevirmək üçün 5 sıfır silinir).
* **Xətti miqyas:** Qrafik xətkeş şəklində təsvir olunur.

#### 3. Dərəcə Şəbəkəsi: Paralellər və Meridianlar
* **Ekvator:** Yeri Şimal və Cənub yarımkürələrinə ayıran ən uzun paraleldir ($0^\circ$, uzunluğu təxminən $40075 \text{ km}$).
* **Paralellər:** Ekvatora paralel çəkilmiş çevrələrdir ($0^\circ$-dən $90^\circ$-yə qədər).
* **Meridianlar:** Şimal və Cənub qütblərini birləşdirən qövs xətləridir. Hamısının uzunluğu eynidir (təxminən $20000 \text{ km}$, $1^\circ$-lik qövsü $\approx 111 \text{ km}$). Başlanğıc meridian Qrinviç meridianıdır ($0^\circ$).
* **Coğrafi koordinatlar:** Hər bir nöqtənin **enliyi** (Şimal və ya Cənub) və **uzunluğu** (Şərq və ya Qərb) ilə təyin olunur.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Həqiqi məsafə} = \\text{Xəritədəki məsafə} \\times \\text{Miqyas kəmiyyəti}",
            "name": "Məsafənin hesablanması",
            "desc": "Xəritə üzərindəki santimetrlərin həqiqi kilometrə çevrilməsi"
      },
      {
            "formula": "1^\\circ \\text{ meridian qövsü} \\approx 111.1 \\text{ km}",
            "name": "1 dərəcəlik meridian qövsü",
            "desc": "Meridian üzrə məsafə sabiti"
      }
],
    glossary: [
      {
            "term": "Miqyas",
            "definition": "Yer səthindəki məsafələrin xəritədə neçə dəfə kiçildildiyini göstərən kəsr ədəd."
      },
      {
            "term": "Ekvator",
            "definition": "Qütblərdən bərabər məsafədə keçən ən böyük xəyali çevrə (0° paralel)."
      },
      {
            "term": "Azimut",
            "definition": "Şimal istiqaməti ilə verilmiş obyektə olan istiqamət arasındakı saat əqrəbi üzrə dərəcə bucağı (0°-360°)."
      }
],
    solvedExamples: [
      {
            "problem": "1 : 2 000 000 miqyaslı xəritədə iki şəhər arasındakı məsafə 6 sm-dir. Şəhərlər arasındakı həqiqi məsafə neçə kilometrdir?",
            "solution": "Ədədi miqyası adlı miqyasa çeviririk: 5 sıfır silirik -> 1 sm-də 20 km. Həqiqi məsafə = 6 sm × 20 km/sm = 120 km."
      }
],
    miniQuiz: [
      {
            "q": "1 : 500 000 miqyaslı xəritədə 1 sm neçə kilometrə uyğundur?",
            "options": [
                  "500 km",
                  "50 km",
                  "5 km",
                  "0.5 km"
            ],
            "a": 2,
            "exp": "5 sıfır sildikdə: 500 000 sm = 5 km alınır."
      },
      {
            "q": "Yerin Şimal və Cənub qütblərini birləşdirən xəyali xətlər necə adlanır?",
            "options": [
                  "Paralellər",
                  "Ekvator",
                  "Meridianlar",
                  "Horizontallar"
            ],
            "a": 2,
            "exp": "Qütbləri birləşdirən qövsşəkilli xətlər meridianlardır."
      }
]
  },

  {
    id: 'cografiya-6-3',
    subjectId: 'cografiya',
    grade: 6,
    unit: 'Bölmə 3: Yer Günəş Sistemində',
    unitOrder: 3,
    title: 'Yerin forma və ölçüləri, xəyali oxu və Günəş ətrafında hərəkəti',
    order: 3,
    readTimeMinutes: 16,
    difficulty: 1,
    summary: 'Günəş sisteminin planetləri, Yerin geoid forması, öz oxu ətrafında fırlanması (gecə-gündüz) və Günəş ətrafında illik hərəkəti (fəsillər, qütb gecə-gündüzləri).',
    theoryMarkdown: `
### Yer — Günəş Sisteminin Planeti

#### 1. Yerin Forması və Ölçüləri
Yer Günəşdən uzaqlığına görə 3-cü planetdir. Qütblərdən basıq, ekvatordan qabarıq xüsusi formaya malikdir — **Geoid** ("Yerəbənzər").
* Ekvator radiusu: $6378 \text{ km}$.
* Qütb radiusu: $6356 \text{ km}$ (qütb radiusu ekvator radiusundan $21 \text{ km}$ qısadır).
* Yerin orta radiusu: $6371 \text{ km}$.
* Yer səthinin ümumi sahəsi: $510 \text{ milyon km}^2$ (bunun $71\%$-i su, $29\%$-i qurudur).

#### 2. Yerin Öz Oxu Ətrafında Fırlanması (Gündəlik Hərəkət)
Yer öz xəyali oxu ətrafında **qərbdən şərqə** doğru 24 saata (1 sutka) tam bir dövr edir.
* **Coğrafi nəticələri:**
  1. Gecə və gündüzün növbələşməsi.
  2. Saat qurşaqlarının və yerli vaxt fərqinin yaranması (Yer $1$ saatda $15^\circ$ dönür).
  3. Koriolis qüvvəsi (hərəkət edən cisimlərin və küləklərin Şimal yarımkürəsində sağa, Cənubda sola meyil etməsi).

#### 3. Yerin Günəş Ətrafında Hərəkəti (İllik Hərəkət)
Yer Günəş ətrafında ellips formalı orbit üzrə 365 gün 6 saata (1 il) dövr edir. Yerin fırlanma oxu orbit müstəvisinə **$66.5^\circ$ bucaq altında meyillidir**.
* **Əsas Tarixlər:**
  - **21 mart (Yaz bərabərliyi):** Günəş ekvatorda zenitdə olur. Bütün Yer kürəsində gecə və gündüz bərabərləşir (12 saat gündüz, 12 saat gecə).
  - **22 iyun (Yay gündönümü):** Günəş Şimal tropikində ($23.5^\circ$ şm.e.) zenitdə olur. Şimal yarımkürəsində ən uzun gündüz, ən qısa gecə.
  - **23 sentyabr (Payız bərabərliyi):** Günəş yenidən ekvatorda zenitdə olur.
  - **22 dekabr (Qış gündönümü):** Günəş Cənub tropikində ($23.5^\circ$ c.e.) zenitdə olur. Şimal yarımkürəsində ən qısa gündüz, ən uzun gecə.
    `,
    keyFormulas: [
      {
            "formula": "\\omega_{\\text{gün}} = \\frac{360^\\circ}{24 \\text{ saat}} = 15^\\circ / \\text{saat}",
            "name": "Yerin fırlanma sürəti",
            "desc": "1 saatda 15 dərəcə, 4 dəqiqədə 1 dərəcə dönmə"
      },
      {
            "formula": "S_{\\text{Yer}} = 510 \\text{ mln km}^2 (361 \\text{ mln su} + 149 \\text{ mln quru})",
            "name": "Yer səthinin sahəsi",
            "desc": "Quru və su sahələrinin bölgüsü"
      }
],
    glossary: [
      {
            "term": "Geoid",
            "definition": "Yerin qütblərdən basıq xüsusi cazibə-həndəsi forması."
      },
      {
            "term": "Zenit",
            "definition": "Günəş şüalarının yer səthinə düz 90 dərəcəlik bucaq altında şaquli düşmə vəziyyəti."
      },
      {
            "term": "Tropiklər",
            "definition": "23.5° Şimal və Cənub paralelləri; Günəşin zenitdə ola bildiyi ən kənar enliklər."
      }
],
    solvedExamples: [
      {
            "problem": "İki məntəqə arasında 45° coğrafi uzunluq fərqi varsa, onlar arasındakı yerli vaxt fərqi neçə saatdır?",
            "solution": "Yer 1 saata 15° dönür. Vaxt fərqi = 45° / 15° = 3 saat olar."
      }
],
    miniQuiz: [
      {
            "q": "Şimal yarımkürəsində ən uzun gündüz və ən qısa gecə hansı tarixdə müşahidə olunur?",
            "options": [
                  "21 mart",
                  "22 iyun",
                  "23 sentyabr",
                  "22 dekabr"
            ],
            "a": 1,
            "exp": "22 iyun yay gündönümündə Şimal yarımkürəsində ən uzun gündüz yaşanır."
      },
      {
            "q": "Yerin öz oxu ətrafında fırlanması hansı əsas təbiət hadisəsinə səbəb olur?",
            "options": [
                  "İlin fəsillərinin yaranmasına",
                  "Gecə və gündüzün növbələşməsinə",
                  "Ay tutulmasına",
                  "Zəlzələlərə"
            ],
            "a": 1,
            "exp": "Gündəlik fırlanma gecə ilə gündüzün bir-birini əvəz etməsini təmin edir."
      }
]
  },

  {
    id: 'cografiya-6-4',
    subjectId: 'cografiya',
    grade: 6,
    unit: 'Bölmə 4: Litosfer — Yerin Bərk Təbəqəsi',
    unitOrder: 4,
    title: 'Yerin daxili quruluşu, süxurlar, vulkanlar və dağlar',
    order: 4,
    readTimeMinutes: 16,
    difficulty: 2,
    summary: 'Yerin daxili qatları (yer qabığı, mantiya, nüvə), süxurların qrupları (püskürmə, çökmə, metamorfik), daxili (endogen) və xarici (ekzogen) qüvvələr, seysmiklik.',
    theoryMarkdown: `
### Litosfer və Yer Relyefi

#### 1. Yerin Daxili Quruluşu
Yer təbəqəli daxili quruluşa malikdir:
* **Yer qabığı:** Ən üstdə yerləşən nazik bərk təbəqədir (okeanlar altında $5-10 \text{ km}$, dağlar altında $70-80 \text{ km}$).
* **Mantiya:** Dərinliyi $2900 \text{ km}$-ə qədərdir. Yuxarı hissəsində ərimiş plastik qat — **astenosfer** yerləşir (maqma ocağı).
* **Nüvə:** $2900 \text{ km}$-dən Yerin mərkəzinədək ($6371 \text{ km}$). Xarici (maye) və daxili (bərk, sıx dəmir-nikel) nüvədən ibarətdir. Temperatur $6000^\circ C$-yə çatır.
* **Litosfer:** Yer qabığı və astenosferə qədər olan üst mantiyadan ibarət bütöv bərk təbəqədir.

#### 2. Süxurlar və Mənşəyi
1. **Püskürmə (Maqmatik) süxurlar:** Maqmanın soyumasından yaranır:
   - Dərində soyuyan (intruziv): Qranit, qabbro.
   - Səthə püskürən (effuziv): Bazalt, obsidian (vulkanik şüşə), pemza.
2. **Çökmə süxurlar:** Yer səthində suyun, küləyin və canlıların fəaliyyəti ilə toplanır:
   - Qırıntı: Qum, çınqıl, gil.
   - Üzvi: Daş kömür, torf, neft, əhəngdaşı, təbaşir.
   - Kimyəvi: Xörək duzu, gips.
3. **Metamorfik süxurlar:** Yüksək temperatur və təzyiq altında dəyişmiş süxurlardır (əhəngdaşı $\rightarrow$ **mərmərə**, qranit $\rightarrow$ **qneysə**, qumdaşı $\rightarrow$ **kvarsitə** çevrilir).

#### 3. Relyefin Əsas Formaları: Dağlar və Düzənliklər
* **Dağlar:** Ətraf ərazilərdən kəskin ucalan, ətək, yamac və zirvədən ibarət kələ-kötür relyef formasıdır (hündürlüyünə görə: alçaq dağlar $<1000$ m, orta dağlar $1000-2000$ m, uca dağlar $>2000$ m; Yerin ən uca zirvəsi: Everest / Comolunqma $8848 \text{ m}$).
* **Düzənliklər:** Səthi hamar və ya zəif dalğalı geniş ərazilərdir:
  - Ovalıqlar ($0-200$ m, dəniz səviyyəsindən aşağıda da ola bilər: Xəzəryanı ovalıq $-27$ m).
  - Yüksəkliklər ($200-500$ m).
  - Yaylalar ($>500$ m).
    `,
    keyFormulas: [
      {
            "formula": "\\text{Litosfer} = \\text{Yer qabığı} + \\text{Üst mantiya}",
            "name": "Litosferin tərkibi",
            "desc": "Yerin bərk daş qatı"
      },
      {
            "formula": "\\text{Nisbi hündürlük} = h_1 - h_2",
            "name": "Nisbi hündürlük",
            "desc": "İki nöqtə arasındakı şaquli hündürlük fərqi"
      }
],
    glossary: [
      {
            "term": "Relyef",
            "definition": "Yer səthinin bütün forma və nahamarlıqlarının cəmi."
      },
      {
            "term": "Maqma",
            "definition": "Yer mantiyasında yüksək temperatur və təzyiq altında yaranan qazlarla zəngin ərinti."
      },
      {
            "term": "Horizontallar",
            "definition": "Xəritədə eyni mütləq hündürlüyə malik nöqtələri birləşdirən qapalı qəhvəyi əyri xətlər."
      }
],
    solvedExamples: [
      {
            "problem": "Mütləq hündürlüyü 2400 m olan dağın ətəyi dəniz səviyyəsindən 300 m hündürlükdə yerləşir. Dağın nisbi hündürlüyünü tapın.",
            "solution": "Nisbi hündürlük = Zirvənin mütləq hündürlüyü - Ətəyin mütləq hündürlüyü = 2400 m - 300 m = 2100 metr."
      }
],
    miniQuiz: [
      {
            "q": "Əhəngdaşı yüksək temperatur və təzyiq altında hansı metamorfik süxura çevrilir?",
            "options": [
                  "Qranitə",
                  "Bazalta",
                  "Mərmərə",
                  "Gipsə"
            ],
            "a": 2,
            "exp": "Əhəngdaşının metamorfizmə uğramasından bərk mərmər süxuru yaranır."
      },
      {
            "q": "Yer kürəsinin ən hündür zirvəsi hansıdır və hündürlüyü nə qədərdir?",
            "options": [
                  "Qazbek (5033 m)",
                  "Comolunqma / Everest (8848 m)",
                  "Monblan (4810 m)",
                  "Bazardüzü (4466 m)"
            ],
            "a": 1,
            "exp": "Himalay dağlarındakı Comolunqma (Everest) zirvəsi 8848 metr hündürlüklə dünyanın ən uca nöqtəsidir."
      }
]
  },

  {
    id: 'cografiya-6-5',
    subjectId: 'cografiya',
    grade: 6,
    unit: 'Bölmə 5: Atmosfer — Yerin Hava Təbəqəsi',
    unitOrder: 5,
    title: 'Havanın temperaturu, təzyiq, külək və yağıntılar',
    order: 5,
    readTimeMinutes: 16,
    difficulty: 2,
    summary: 'Atmosferin tərkibi və qatları (troposfer, stratosfer), temperaturun hündürlükdən asılılığı, atmosfer təzyiqi (barometr), mehi və musson küləkləri, buludlar və yağıntı növləri.',
    theoryMarkdown: `
### Atmosfer və Hava Hadisələri

#### 1. Atmosferin Quruluşu
Atmosfer — Yerin qaz qatıdır: $78\%$ Azot ($N_2$), $21\%$ Oksigen ($O_2$), $1\%$ digər qazlar.
* **Troposfer:** Atmosferin ən alt və ən sıx qatıdır (bütün qazların $80\%$-i buradadır). Bütün hava hadisələri (bulud, külək, yağış) burada baş verir. Qalınlığı qütblərdə $8-10 \text{ km}$, ekvatorda $18 \text{ km}$-dir.
* **Stratosfer:** $50-55 \text{ km}$-dək uzanır. Tərkibində $20-25 \text{ km}$ hündürlükdə **ozon ekranı ($O_3$)** yerləşir.

#### 2. Temperatur və Təzyiq Qanunauyğunluqları
* **Temperatur:** Troposferdə yuxarı qalxdıqca **hər 1000 metrə temperatur $6^\circ C$ aşağı düşür** (və ya hər 100 metrə $0.6^\circ C$).
* **Atmosfer təzyiqi:** Havanın yer səthinə göstərdiyi ağırlıq qüvvəsidir. Normal atmosfer təzyiqi (dəniz səviyyəsində, $0^\circ C$-də) **$760 \text{ mm c.st.}$** qəbul edilmişdir. Yuxarı qalxdıqca **hər 10 metrə təzyiq $1 \text{ mm c.st.}$ azalır** (hər 100 metrə $10 \text{ mm c.st.}$).

#### 3. Küləklər
Havanın yüksək təzyiq sahəsindən alçaq təzyiq sahəsinə üfüqi istiqamətdə hərəkətidir:
* **Briz (Meh):** Sutkalıq küləkdir (dəniz və göl sahillərində):
  - *Gündüz brizi:* Dənizdən sahilə əsir (dənizdə təzyiq yüksəkdir).
  - *Gecə brizi:* Sahildən dənizə əsir (quru tez soyuyub yüksək təzyiq yaradır).
* **Musson:** Fəsli küləkdir (okean və materik arasında):
  - *Yay mussonu:* Okeandan quruya əsir (bol yağış gətirir).
  - *Qış mussonu:* Qurudan okeana əsir (quru və soyuq).
* **Passatlar:** Tropiklərdən ekvatora doğru daima əsən sabit küləklərdir.
    `,
    keyFormulas: [
      {
            "formula": "\\Delta T = \\frac{\\Delta h}{1000} \\times 6^\\circ C",
            "name": "Temperatur qradiyenti",
            "desc": "Hər 1000 m hündürlükdə temperatur 6°C azalır"
      },
      {
            "formula": "\\Delta P = \\frac{\\Delta h}{10} \\text{ mm c.st.}",
            "name": "Təzyiq qradiyenti",
            "desc": "Hər 10 m hündürlükdə təzyiq 1 mm civə sütunu azalır"
      }
],
    glossary: [
      {
            "term": "Atmosfer təzyiqi",
            "definition": "Vahid sahəyə düşən havanın ağırlıq qüvvəsi (barometrlə ölçülür)."
      },
      {
            "term": "Briz",
            "definition": "Gündüz və gecə istiqamətini dəyişən yerli dəniz-sahil küləyi."
      },
      {
            "term": "Rütubət",
            "definition": "Havadakı su buxarının miqdarı (mütləq və nisbi rütubət, hiqrometrlə ölçülür)."
      }
],
    solvedExamples: [
      {
            "problem": "Dağın ətəyində (dəniz səviyyəsində) temperatur +18°C olarsa, 3000 metr hündürlükdə yerləşən zirvəsində temperatur neçə dərəcə olar?",
            "solution": "Hündürlük fərqi 3000 metrdir. Temperatur azalması: (3000 / 1000) × 6°C = 18°C azalar. Zirvədə temperatur: +18°C - 18°C = 0°C olar."
      }
],
    miniQuiz: [
      {
            "q": "Hündürlüyə qalxdıqca hər 100 metrə temperatur neçə dərəcə aşağı düşür?",
            "options": [
                  "1°C",
                  "0.6°C",
                  "6°C",
                  "10°C"
            ],
            "a": 1,
            "exp": "Troposferdə hər 100 metrə temperatur 0.6°C (hər 1000 metrə 6°C) azalır."
      },
      {
            "q": "Gündüz dənizdən quruya, gecə isə qurudan dənizə doğru əsən yerli külək hansıdır?",
            "options": [
                  "Musson",
                  "Passat",
                  "Briz (Meh)",
                  "Föhn"
            ],
            "a": 2,
            "exp": "Brizlər sutkada istiqamətini iki dəfə dəyişən sahil küləkləridir."
      }
]
  },

  {
    id: 'cografiya-6-6',
    subjectId: 'cografiya',
    grade: 6,
    unit: 'Bölmə 6: Hidrosfer və Biosfer',
    unitOrder: 6,
    title: 'Dünya okeanı, quru suları, canlı aləm və torpaq',
    order: 6,
    readTimeMinutes: 16,
    difficulty: 1,
    summary: 'Hidrosferin tərkibi, 4 okean (Sakit, Atlantik, Hind, Şimal Buzlu), Dünya okeanında suyun şorluğu (promil), çaylar və göllər, biosfer və V.Dokuçayevin torpaq təlimi.',
    theoryMarkdown: `
### Hidrosfer və Biosfer

#### 1. Hidrosfer — Yerin Su Təbəqəsi
Hidrosfer Yerdəki bütün suların (okeanlar, dənizlər, çaylar, göllər, buzlaqlar və yeraltı sular) cəmidir.
* **Dünya Okeanı (4 okean):**
  1. *Sakit okean:* Ən böyük və ən dərin okeandır (Marian çökəkliyi $11022 \text{ m}$).
  2. *Atlantik okean:* Sahəsinə görə 2-ci, ən çox gəmi işləyən okeandır.
  3. *Hind okeanı:* Əsasən cənub yarımkürəsində yerləşən ən isti okeandır.
  4. *Şimal Buzlu okean:* Ən kiçik və ən dayaz soyuq okeandır.
* **Suyun Şorluğu:** 1 litr okean suyunda həll olmuş duzların qramlarla miqdarıdır, **promil (‰)** ilə ölçülür. Dünya okeanının orta şorluğu **$35‰$**-dir (ən şor dəniz Qırmızı dənizdir $42‰$, ən az şor Baltik dənizidir $6-8‰$).

#### 2. Quru Suları: Çaylar və Göllər
* **Çay:** Özünün əmələ gətirdiyi yataq üzrə axan təbii su axınıdır:
  - *Mənbə:* Çayın başlandığı yer (bulaq, buzlaq, göl).
  - *Mənsəb:* Çayın töküldüyü yer (dəniz, göl, başqa çay). Əmələ gətirə bilər: **Delta** (qollara ayrılan mənsəb) və ya **Estuari** (qıfvari tək qol).
* **Göl:** Təbii çökəklikdə yerləşən və Dünya okeanı ilə birbaşa əlaqəsi olmayan su hövzəsidir (dünyada sahəsinə görə ən böyük göl Xəzər dənizi, ən dərin göl isə Baykal gölüdür $1620 \text{ m}$).

#### 3. Biosfer və Torpaq
* Biosfer — Yerin canlı orqanizmlər məskunlaşmış təbəqəsidir.
* **Torpaq:** Yer qabığının canlı orqanizmlərin, iqlimin və suyun birgə təsiri ilə yaranmış ən üst münbit qatıdır. Torpağın əsas xassəsi **münbitlikdir** (tərkibindəki çürüntü — **humusun** miqdarından asılıdır). V.V.Dokuçayev elmi torpaqşünaslığın banisidir.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Orta okean şorluğu} = 35‰ = 35 \\text{ qram duz} / 1 \\text{ litr su}",
            "name": "Okean şorluğu sabiti",
            "desc": "1 litr dəniz suyundakı orta duz kütləsi"
      }
],
    glossary: [
      {
            "term": "Promil (‰)",
            "definition": "Ədədin mində bir hissəsi; suyun şorluq dərəcəsini göstərən ölçü vahidi."
      },
      {
            "term": "Humus",
            "definition": "Torpağa tünd rəng və yüksək münbitlik verən üzvi çürüntü qatı."
      },
      {
            "term": "Delta",
            "definition": "Çayın gətirdiyi çöküntülər hesabına mənsəbdə çoxlu qollara ayrılaraq yaratdığı relyef forması."
      }
],
    solvedExamples: [
      {
            "problem": "Dünya okeanından götürülmüş 4 litr suyu buxarlandırdıqda neçə qram duz qalar?",
            "solution": "Dünya okeanının orta şorluğu 35‰-dir (1 litr suda 35 qram duz var). 4 litr suda: 4 × 35 = 140 qram duz qalar."
      }
],
    miniQuiz: [
      {
            "q": "Dünyanın ən dərin çökəkliyi olan Marian çökəkliyi (11 022 m) hansı okeanda yerləşir?",
            "options": [
                  "Atlantik okeanında",
                  "Sakit okeanda",
                  "Hind okeanında",
                  "Şimal Buzlu okeanda"
            ],
            "a": 1,
            "exp": "Marian çökəkliyi Sakit okeanın qərbində yerləşir."
      },
      {
            "q": "Torpağın əsas və ən qiymətli xassəsi hansıdır?",
            "options": [
                  "Qumlu olması",
                  "Münbitliyi (bitkiləri qida ilə təmin etməsi)",
                  "Bərkliyi",
                  "Rəngi"
            ],
            "a": 1,
            "exp": "Münbitlik torpağı süxurdan fərqləndirən əsas bioloji xassədir."
      }
]
  },

  {
    id: 'cografiya-7-1',
    subjectId: 'cografiya',
    grade: 7,
    unit: 'Bölmə 1: Materiklər, Okeanlar və Litosfer Tavaları',
    unitOrder: 1,
    title: 'Pangeya, Lavrasiya, Qondvana və litosfer tavaları nəzəriyyəsi',
    order: 1,
    readTimeMinutes: 17,
    difficulty: 2,
    summary: 'Alfred Veqenerin materiklərin dreyfi hipotezi, Pangeyanın Lavrasiya və Qondvanaya parçalanması, konvergent və divergent sərhədlər, rift dərələri.',
    theoryMarkdown: `
### Materiklər və Litosfer Tavaları Nəzəriyyəsi

#### 1. Materiklərin Dreyfi Hipotezi (Alfred Veqener, 1912)
Alman alimi A.Veqener materiklərin sahil xətlərinin (xüsusilə Cənubi Amerika ilə Afrikanın) uyğun gəlməsinə və eyni fosillərin müxtəlif qitələrdə tapılmasına əsaslanaraq sübut etdi ki:
* Təxminən 250 milyon il əvvəl Yerdə tək bir nəhəng quru — **Pangeya** və onu əhatə edən nəhəng okean — **Pantalas** mövcud idi.
* Mezozoy erasında Pangeya iki quruya parçalandı:
  - **Lavrasiya (Şimal qrupu):** Şimali Amerika və Avrasiya.
  - **Qondvana (Cənub qrupu):** Cənubi Amerika, Afrika, Antarktida, Avstraliya və Hindistan yarımadası.
  - Aralarında qədim **Tetis okeanı** yarandı (müasir Aralıq, Qara və Xəzər dənizləri onun qalıqlarıdır).

#### 2. Litosfer Tavaları və Onların Hərəkəti
Litosfer astenosfer qatı üzərində ildə bir neçə santimetr ($1-10 \text{ sm/il}$) sürətlə hərəkət edən nəhəng bloklardan — **litosfer tavalarından** ibarətdir:
* **7 nəhəng tava:** Sakit okean, Avrasiya, Şimali Amerika, Cənubi Amerika, Afrika, Hind-Avstraliya, Antarktida.
* **Tavaların Sərhədlərinin Tipləri:**
  1. **Divergent sərhədlər (Ayrılma zonaları):** Tavaların bir-birindən uzaqlaşdığı zonalardır. Okean ortası sıra dağları və dərin **rift dərələri** yaranır, yeni okean dibi formalaşır (məsələn, Orta Atlantik silsiləsi).
  2. **Konvergent sərhədlər (Toqquşma zonaları):**
     - İki materik tavası toqquşduqda: Nəhəng qırışıq dağlar ucalır (məsələn: Avrasiya və Hindistan tavası toqquşub **Himalay dağlarını** yaratmışdır).
     - Okean və materik tavası toqquşduqda: Ağır okean tavası yüngül materik tavasının altına batır (**subduksiya**); dəniz çökəklikləri (novlar) və ada qövsləri yaranır.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Pangeya} \\rightarrow \\text{Lavrasiya (Şimal)} + \\text{Qondvana (Cənub)}",
            "name": "Materiklərin parçalanma sxemi",
            "desc": "Mezozoyda superqitənin parçalanması"
      }
],
    glossary: [
      {
            "term": "Subduksiya",
            "definition": "Okean litosfer tavasının materik tavasının altına bataraq mantiyada əriməsi prosesi."
      },
      {
            "term": "Rift",
            "definition": "Litosfer tavalarının ayrılma zonasında yaranan nəhəng tektonik çat və çökəklik."
      }
],
    solvedExamples: [
      {
            "problem": "Cənubi Amerika və Afrika materiklərində tamamilə eyni qədim bitki və kərtənkələ fosillərinin tapılması nəyi sübut edir?",
            "solution": "Bu tapıntılar vaxtilə Cənubi Amerika və Afrikanın vahid bir qitə — Qondvananın tərkib hissəsi olduğunu və sonradan tektonik hərəkətlərlə ayrılaraq aralarında Atlantik okeanının açıldığını sübut edir."
      }
],
    miniQuiz: [
      {
            "q": "Qədim Qondvana materikinin parçalanmasından hansı müasir materiklər yaranmışdır?",
            "options": [
                  "Şimali Amerika və Avrasiya",
                  "Cənubi Amerika, Afrika, Avstraliya, Antarktida",
                  "Yalnız Avropa",
                  "Bütün okeanlar"
            ],
            "a": 1,
            "exp": "Cənub yarımkürəsi qitələri (və Hindistan) Qondvananın parçalanmasından əmələ gəlmişdir."
      },
      {
            "q": "İki materik litosfer tavası toqquşduqda yer səthində nə yaranır?",
            "options": [
                  "Dərin dəniz novu",
                  "Nəhəng qırışıq dağlar (məsələn, Himalay)",
                  "Rift dərəsi",
                  "Yeni okean"
            ],
            "a": 1,
            "exp": "İki quru tavasının toqquşması nəhəng dağ sistemləri ucaldır."
      }
]
  },

  {
    id: 'cografiya-7-2',
    subjectId: 'cografiya',
    grade: 7,
    unit: 'Bölmə 2: İqlim və İqlim Qurşaqları',
    unitOrder: 2,
    title: 'İqliməmələgətirən amillər və 13 iqlim qurşağı',
    order: 2,
    readTimeMinutes: 18,
    difficulty: 3,
    summary: 'İqlim amilləri (radiasiya, hava kütlələri, relyef), atmosferin ümumi sirkulyasiyası, 7 əsas və 6 keçid iqlim qurşağı (B.P.Alisov təsnifatı).',
    theoryMarkdown: `
### İqlim və İqlim Qurşaqları

#### 1. İqlim və Onu Yaradan Əsas Amillər
İqlim — müəyyən ərazi üçün səciyyəvi olan hava tiplərinin çoxillik təkrar olunma rejimidir.
* **Üç əsas amil:**
  1. *Günəş radiasiyası:* Coğrafi enlikdən asılı olaraq günəş şüalarının düşmə bucağı.
  2. *Hava kütlələri və atmosfer sirkulyasiyası:* Daimi təzyiq qurşaqları və daimi küləklər (passatlar, qərb küləkləri, qütb küləkləri).
  3. *Səth örtüyü (Relyef, okean cərəyanları və dənizə yaxınlıq).*

#### 2. B.P.Alisovun İqlim Qurşaqları Təsnifatı (Cəmi 13 Qurşaq)
Hava kütlələrinin xüsusiyyətlərinə görə yer kürəsi **7 əsas** və **6 keçid** iqlim qurşağına bölünür:
* **Əsas İqlim Qurşaqları (İlboyu tək bir hava kütləsi hakimdir):**
  1. **Ekvatorial qurşaq:** İlboyu isti və bol yağıntılı ($>2000 \text{ mm}$), fəsillər yoxdur, daimi alçaq təzyiq.
  2. **Tropik qurşaqlar (Şimal və Cənub):** İlboyu isti və çox quraq (yüksək təzyiq, enən hava axınları, Böyük Səhra).
  3. **Mülayim qurşaqlar (Şimal və Cənub):** 4 fəsil aydın seçilir, qərb küləkləri hakimdir.
  4. **Qütb qurşaqları (Arktik və Antarktik):** İlboyu kəskin soyuq və quraq (daimi buzlaqlar).
* **Keçid İqlim Qurşaqları (Adında "sub-" önşəkilçisi olur; fəsillər üzrə hava kütlələri növbələşir):**
  - **Subekvatorial:** Yayda ekvatorial (isti-rütubətli), qışda tropik (isti-quraq) hava.
  - **Subtropik:** Yayda tropik (isti-quru), qışda mülayim (sərin-yağışlı) hava (Aralıq dənizi iqlimi).
  - **Subarktik və Subantarktik:** Yayda mülayim, qışda arktik hava hakimdir.
    `,
    keyFormulas: [
      {
            "formula": "\\text{İqlim qurşaqları} = 7 \\text{ Əsas} + 6 \\text{ Keçid (sub-)} = 13 \\text{ qurşaq}",
            "name": "Alisov iqlim bölgüsü",
            "desc": "Yer kürəsinin ümumi iqlim qurşaqları sayı"
      }
],
    glossary: [
      {
            "term": "Hava kütləsi",
            "definition": "Troposferin eyni xassələrə (temperatur, rütubət, şəffaflıq) malik olan böyük həcmli hava təbəqəsi."
      },
      {
            "term": "Subtropik",
            "definition": "Mülayim və tropik qurşaqlar arasında yerləşən, yayı quraq və qışı mülayim-yağışlı keçid iqlim qurşağı."
      }
],
    solvedExamples: [
      {
            "problem": "Niyə keçid iqlim qurşaqlarında (məsələn, subtropikdə) fəsillər üzrə yağıntı kəskin dəyişir?",
            "solution": "Çünki keçid qurşaqlarında özünəməxsus hava kütləsi olmur. Yerin meyilliyi səbəbindən yayda ora cənubdan quru tropik hava gəlir (isti və quraq olur), qışda isə şimaldan rütubətli mülayim hava daxil olur (sərin və yağışlı keçir)."
      }
],
    miniQuiz: [
      {
            "q": "İlboyu yüksək temperatur və bol yağıntı ilə xarakterizə olunan fəsilsiz iqlim qurşağı hansıdır?",
            "options": [
                  "Tropik",
                  "Ekvatorial",
                  "Mülayim",
                  "Arktik"
            ],
            "a": 1,
            "exp": "Ekvatorial qurşaqda ilboyu temperatur +26-28°C və yağıntı 2000-3000 mm olur."
      },
      {
            "q": "Adında 'sub-' sözü olan keçid iqlim qurşaqlarının əsas xüsusiyyəti nədir?",
            "options": [
                  "Həmişə şaxtalı olması",
                  "Hava kütlələrinin fəsillər üzrə növbələşməsi",
                  "Heç vaxt külək əsməməsi",
                  "Yalnız okeanda yerləşməsi"
            ],
            "a": 1,
            "exp": "Keçid qurşaqlarında yayda qonşu cənub, qışda qonşu şimal hava kütləsi hakim olur."
      }
]
  },

  {
    id: 'cografiya-7-3',
    subjectId: 'cografiya',
    grade: 7,
    unit: 'Bölmə 3: Dünya Okeanının Su Kütlələri və Axınları',
    unitOrder: 3,
    title: 'Okean suyunun xassələri, Qolfstrim və axınların iqlimə təsiri',
    order: 3,
    readTimeMinutes: 17,
    difficulty: 2,
    summary: 'Su kütlələri (şorluq, temperatur), qabarma və çəkilmə hadisəsi, isti və soyuq okean cərəyanları (Qolfstrim, Kurosio, Labrador, Peru) və iqlimə təsiri.',
    theoryMarkdown: `
### Dünya Okeanı və Okean Axınları

#### 1. Okean Suyunun Xassələri
* **Temperatur:** Ekvatordan qütblərə doğru günəş radiasiyasının azalması ilə səth sularının temperaturu $+28^\circ C$-dən $-2^\circ C$-yə qədər enir. $1000 	ext{ m}$-dən dərində suyun temperaturu bütün okeanlarda sabit $+2^\circ C$-yə yaxındır.
* **Şorluq:** Buxarlanmanın intensivliyindən və yağıntıların/çay sularının miqdarından asılıdır. Ən yüksək şorluq buxarlanmanın güclü, yağıntının az olduğu **tropik enliklərdədir ($37‰$)**. Ekvatorda bol yağışlar şorluğu azaldır ($34‰$), mülayim və qütblərdə isə zəif buxarlanma və buzlaqlar hesabına $32-33‰$-dir.

#### 2. Qabarma və Çəkilmə
Ayın və Günəşin cazibə qüvvəsinin təsiri ilə okean səviyyəsinin sutkalıq ritmik qalxıb-enməsidir. Ən hündür qabarma Şimali Amerikadakı **Fandi körfəzində ($18 	ext{ metr}$)** müşahidə olunur.

#### 3. Okean Cərəyanları — "Okeanların Çayları"
Küləklərin təsiri ilə su kütlələrinin minlərlə kilometr məsafəyə üfüqi yerdəyişməsidir:
* **İsti cərəyanlar:** Ətrafındakı sudan isti olan sulardır (xəritədə qırmızı oxla göstərilir). Sahildə havanı isidir və **bol yağıntı gətirir**:
  - **Qolfstrim (Atlantik okeanı):** Dünyanın ən güclü isti cərəyanıdır, Şimali Qərbi Avropanın iqlimini kəskin yumşaldır (Murmansk limanı qışda donmur).
  - **Kurosio (Sakit okean):** Asiyanın şərq sahillərini isidir.
  - Mozambik, Braziliya isti cərəyanları.
* **Soyuq cərəyanlar:** Ətrafındakı sudan soyuq olan sulardır (göy oxla göstərilir). Havanı soyudur, buxarlanmanı zəiflədir və sahildə **quraq səhraların yaranmasına səbəb olur**:
  - **Peru (Humboldt) cərəyanı:** Cənubi Amerikada dünyanın ən quraq səhrası olan **Atakama səhrasını** yaratmışdır.
  - **Benqel cərəyanı:** Afrikada **Namib səhrasını** formalaşdırmışdır.
  - Labrador, Qərbi Avstraliya soyuq cərəyanları.
    `,
    keyFormulas: [
      {
            "formula": "\\text{İsti cərəyan} \\rightarrow \\text{Rütubət və yağış artır}, \\quad \\text{Soyuq cərəyan} \\rightarrow \\text{Quraqlıq və səhra yaradır}",
            "name": "Cərəyanların iqlim qanunu",
            "desc": "Okean axınlarının sahil iqliminə təsiri"
      }
],
    glossary: [
      {
            "term": "Qolfstrim",
            "definition": "Meksika körfəzindən başlayaraq Avropanın şimal-qərbinə istilik gətirən nəhəng isti okean cərəyanı."
      },
      {
            "term": "Atakama",
            "definition": "Soyuq Peru cərəyanının təsiri ilə Cənubi Amerikada yaranmış Yerin ən quraq səhrası."
      }
],
    solvedExamples: [
      {
            "problem": "Eyni enlikdə yerləşməsinə baxmayaraq Londonda qış mülayim keçir və Temza çayı donmur, lakin Şərqi Sibirdə həmin enlikdə -40°C şaxtalar olur. Səbəb nədir?",
            "solution": "Londonun və Qərbi Avropanın sahillərindən güclü isti Qolfstrim cərəyanı keçir və qərb küləkləri isti dəniz havasını quruya gətirərək qışı kəskin yumşaldır. Şərqi Sibir isə okeanlardan uzaqda yerləşir və kəskin kontinental quru hava hakimdir."
      }
],
    miniQuiz: [
      {
            "q": "Cənubi Amerika sahillərində dünyanın ən quraq Atakama səhrasının yaranmasına hansı okean cərəyanı səbəb olmuşdur?",
            "options": [
                  "Qolfstrim",
                  "Soyuq Peru cərəyanı",
                  "İsti Braziliya cərəyanı",
                  "Kurosio"
            ],
            "a": 1,
            "exp": "Soyuq Peru cərəyanı sahil havasını soyudub buxarlanmanı dayandıraraq Atakama səhrasını yaratmışdır."
      },
      {
            "q": "Dünya okeanında ən hündür qabarma dalğası (18 metr) harada qeydə alınmışdır?",
            "options": [
                  "Xəzər dənizində",
                  "Fandi körfəzində (Şimali Amerika)",
                  "Baltik dənizində",
                  "Qırmızı dənizdə"
            ],
            "a": 1,
            "exp": "Şimali Amerikanın şərqindəki Fandi körfəzində qabarma 18 metrə çatır."
      }
]
  },

  {
    id: 'cografiya-7-4',
    subjectId: 'cografiya',
    grade: 7,
    unit: 'Bölmə 4: Təbii Zonalar və Coğrafi Təbəqə',
    unitOrder: 4,
    title: 'Coğrafi təbəqənin qanunauyğunluqları, enlik zonallığı və şaquli qurşaqlıq',
    order: 4,
    readTimeMinutes: 17,
    difficulty: 2,
    summary: 'Coğrafi təbəqənin bütövlüyü, ritmikliyi və dövranı, ekvatorial meşələr (selva/hileya), savannalar, tropik səhralar, çöllər, tayqa, tundra və şaquli qurşaqlıq.',
    theoryMarkdown: `
### Coğrafi Təbəqə və Təbii Zonalar

#### 1. Coğrafi Təbəqənin Əsas Qanunauyğunluqları
Coğrafi təbəqə — litosferin üst hissəsi, bütün hidrosfer, biosfer və troposferin qarşılıqlı təmasda və vəhdətdə olduğu mürəkkəb qabıqdır:
1. **Bütövlük qanunu:** Coğrafi təbəqənin bütün komponentləri bir-biri ilə sıx bağlıdır. Bir komponentin (məsələn, meşə örtüyünün) dəyişməsi zəncirvari olaraq iqlimin, çayların, torpağın və canlıların dəyişməsinə səbəb olur.
2. **Ritmiklik:** Təbiət hadisələrinin müəyyən zaman fasiləsindən sonra təkrar olunmasıdır (sutkalıq ritmlər: gecə-gündüz; illik ritmlər: fəsillər; çoxillik ritmlər: günəş fəallığı).
3. **Maddələr və enerji dövranı:** Suyun təbiətdə böyük dövranı, bioloji dövran və hava kütlələrinin dövranı.

#### 2. Təbii Zonalar (Enlik Zonallığı)
İstilik və rütubətin ekvatordan qütblərə doğru qanunauyğun paylanması nəticəsində formalaşan iri təbii komplekslərdir:
* **Rütubətli ekvatorial meşələr (Hileya, Selva):** Çoxmərtəbəli həmişəyaşıl meşələr, qırmızı-sarı ferrallit torpaqlar, ən zəngin biomüxtəliflik.
* **Savannalar və seyrək meşələr:** Hündür otlar və tək-tək baobab, akasiya ağacları; qırmızı-qonur torpaqlar; zəngin otyeyən heyvanlar (zebra, zürafə, antilop) və yırtıcılar (şir, hepard).
* **Tropik səhralar:** Quraq, kəskin temperatur amplitudu, seyrək bitkilər (dəvətikanı, kaktus), boz torpaqlar (Saxara, Ərəbistan).
* **Çöllər (Pampa, prerilər):** Ağacsız ot örtüyü, ən münbit **qara torpaqlar (qaratorpaq)**.
* **Tayqa:** İynəyarpaqlı meşələr (şam, küknar, qaraşam), podzol torpaqlar.
* **Tundra və Meşə-tundra:** Mamır, şibyə, cırtdan qayın və söyüdlər, daimi donuşluq torpaqları.
* **Arktika və Antarktika səhraları:** Qarla və buzla örtülü səhra.

#### 3. Şaquli Qurşaqlıq
Dağlarda hündürlüyə qalxdıqca temperaturun və rütubətin dəyişməsi nəticəsində təbii zonaların bir-birini əvəz etməsidir. Dağ nə qədər hündür və ekvatora nə qədər yaxın olarsa, şaquli qurşaqların sayı bir o qədər çox olar.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Şaquli qurşaq sayı} \\sim \\text{Dağın mütləq hündürlüyü} + \\text{Ekvatora yaxınlıq}",
            "name": "Şaquli qurşaqlıq qanunu",
            "desc": "Zirvə nə qədər uca və enlik nə qədər alçaq olarsa qurşaqlar zəngin olar"
      }
],
    glossary: [
      {
            "term": "Coğrafi təbəqə",
            "definition": "Litosfer, hidrosfer, atmosfer və biosferin qarşılıqlı təsirdə olduğu vahid təbii qabıq."
      },
      {
            "term": "Tayqa",
            "definition": "Mülayim qurşağın iynəyarpaqlı sıx meşə zonası (Sibir, Kanada)."
      },
      {
            "term": "Ferrallit torpaq",
            "definition": "Ekvatorial meşələrdə dəmir və alüminium oksidləri ilə zəngin qırmızımtıl-sarı torpaq."
      }
],
    solvedExamples: [
      {
            "problem": "Skandinaviya dağlarında, yoxsa Ekvatorda yerləşən And dağlarında şaquli qurşaqların sayı daha çox olar?",
            "solution": "Ekvatordakı And dağlarında qurşaqların sayı xeyli çox olar. Çünki And dağları həm çox hündürdür (6960 m), həm də ən isti ekvator enliyində yerləşir (ətəkdən zirvəyədək ekvatorial meşədən əbədi qarlığadək bütün zonalar keçir)."
      }
],
    miniQuiz: [
      {
            "q": "Təbiətdə ən münbit, çürüntü (humus) ilə ən zəngin olan torpaq tipi hansıdır?",
            "options": [
                  "Podzol torpaq",
                  "Qara torpaq (qaratorpaq)",
                  "Ferrallit torpaq",
                  "Boz səhra torpağı"
            ],
            "a": 1,
            "exp": "Çöl zonasının qara torpaqları (qaratorpaq) dünyanın ən münbit torpaqlarıdır."
      },
      {
            "q": "Coğrafi təbəqədə bir komponentin dəyişməsinin bütün digər komponentlərə təsir etməsi hansı qanunauyğunluqdur?",
            "options": [
                  "Ritmiklik",
                  "Bütövlük qanunu",
                  "Zonallıq",
                  "Dövrilik"
            ],
            "a": 1,
            "exp": "Bütün komponentlərin qarşılıqlı əlaqəsi bütövlük qanunudur."
      }
]
  },

  {
    id: 'cografiya-7-5',
    subjectId: 'cografiya',
    grade: 7,
    unit: 'Bölmə 5: Qitələr və Materiklər: Avrasiya, Afrika və Amerika',
    unitOrder: 5,
    title: 'Dünya materiklərinin təbiəti, relyefi və çay sistemləri',
    order: 5,
    readTimeMinutes: 18,
    difficulty: 2,
    summary: 'Avrasiya (ən böyük materik), Afrika (ən isti materik), Şimali və Cənubi Amerika (Kordilyer və And dağları, Amazon çayı), Avstraliya və Antarktida xüsusiyyətləri.',
    theoryMarkdown: `
### Materiklərin Fiziki-Coğrafi Təsviri

#### 1. Avrasiya — Ən Nəhəng Materik ($54 \text{ mln km}^2$)
* Bütün coğrafi və iqlim qurşaqları mövcuddur.
* Ən hündür dağ sistemi: Himalay (Comolunqma $8848 	ext{ m}$).
* Ən alçaq quru nöqtəsi: Ölü dəniz səviyyəsi ($-427 	ext{ m}$).
* Ən böyük gölü: Xəzər dənizi; Ən dərin gölü: Baykal ($1620 	ext{ m}$).
* Ən uzun çayı: Yanszı ($6300 	ext{ km}$); Avropada ən uzun çay: Volqa ($3530 	ext{ km}$).

#### 2. Afrika — Ən İsti Materik ($30.3 \text{ mln km}^2$)
* Ekvator xətti tərəfindən tən ortadan bölünür. Ən böyük tropik səhra: Böyük Səhra (Saxara).
* Dünyanın ən uzun çaylarından biri: **Nil çayı ($6671 	ext{ km}$)**. Ən bolsulu çayı: Konqo çayı (ekvatoru iki dəfə kəsir).
* Şərqi Afrika rift zonası, Kilimancaro vulkanı ($5895 	ext{ m}$). Viktoriya gölü (sahəsinə görə şirin sulu 2-ci göl).

#### 3. Şimali və Cənubi Amerika
* **Şimali Amerika:** Qərbdə Kordilyer dağları, mərkəzdə Böyük Düzənliklər, qədim Appalaç dağları. Ən böyük şirin su sistemi: Böyük Göllər (Yuxarı, Huron, Miçiqan, Eri, Ontario) və Niaqara şəlaləsi. Ən uzun çay sistemi: Missisipi-Missuri.
* **Cənubi Amerika (Ən Rütubətli Materik):** Qərbdə dünyanın ən uzun dağ zənciri: **And dağları (Akonkaqua $6960 	ext{ m}$)**.
* **Amazon çayı:** Dünyanın **ən bolsulu və ən böyük hövzəyə malik çayıdır** (okeana axan bütün suların $15-20\%$-ni verir).
* Ən hündür şəlalə: **Anxel şəlaləsi ($1054 	ext{ m}$, Çurun çayında)**.

#### 4. Avstraliya və Antarktida
* **Avstraliya:** Ən kiçik və ən quraq materikdir. Heç bir fəaliyyətdə olan vulkan və müasir buzlaq yoxdur. Endemik canlılar: Kenquru, koala, ördəkburun, evkalipt ağacları. Böyük Sədd rifi (ən nəhəng mərcan qurğusu).
* **Antarktida:** Ən soyuq və ən hündür (orta hündürlüyü $2040 	ext{ m}$) materikdir. Bütün Yer kürəsindəki şirin suların $80\%$-i onun buz qalxanında cəmlənmişdir (mütləq minimum temperatur Vostok stansiyasında: $-89.2^\circ C$).
    `,
    keyFormulas: [
      {
            "formula": "\\text{Amazon} = \\text{Dünyanın ən bolsulu çayı}, \\quad \\text{Nil} = \\text{Dünyanın ən uzun çaylarından biri}",
            "name": "Dünya hidroqrafiya rekordları",
            "desc": "Su ehtiyatlarının qlobal liderləri"
      }
],
    glossary: [
      {
            "term": "Amazon",
            "definition": "Cənubi Amerikada yerləşən, dünyanın ən bolsulu və ən nəhəng hövzəli çayı."
      },
      {
            "term": "Endemik",
            "definition": "Yalnız müəyyən məhdud coğrafi ərazidə yaşayan və başqa heç yerdə rast gəlinməyən canlı növü."
      }
],
    solvedExamples: [
      {
            "problem": "Niyə Avstraliya materikində qədim kisəli məməlilər (kenquru, koala) indiyədək qorunub saxlanmışdır?",
            "solution": "Avstraliya Qondvanadan ən tez ayrılmış və digər materiklərdən uzun geoloji dövr boyu tam təcrid olunmuşdur. Bura daha güclü rəqib olan plasentalı yırtıcılar daxil ola bilməmiş və ibtidai kisəli fauna sağ qalmışdır."
      }
],
    miniQuiz: [
      {
            "q": "Dünyanın ən hündür şəlaləsi olan Anxel şəlaləsi (1054 m) hansı materikdə yerləşir?",
            "options": [
                  "Şimali Amerikada",
                  "Cənubi Amerikada",
                  "Afrikada",
                  "Avrasiyada"
            ],
            "a": 1,
            "exp": "Anxel şəlaləsi Cənubi Amerikada Venesuela ərazisində Orinoko hövzəsindədir."
      },
      {
            "q": "Yer kürəsində fəaliyyətdə olan vulkanı və müasir dağ buzlaqları olmayan yeganə materik hansıdır?",
            "options": [
                  "Afrika",
                  "Avstraliya",
                  "Avrasiya",
                  "Antarktida"
            ],
            "a": 1,
            "exp": "Avstraliya ən sakit və qədim platforma üzərində yerləşdiyindən fəal vulkanı yoxdur."
      }
]
  },

  {
    id: 'cografiya-7-6',
    subjectId: 'cografiya',
    grade: 7,
    unit: 'Bölmə 6: Dünya Əhalisi və Siyasi Xəritə',
    unitOrder: 6,
    title: 'Əhali artımı, sıxlıq, dillər, dinlər və dövlət formaları',
    order: 6,
    readTimeMinutes: 17,
    difficulty: 2,
    summary: 'Dünya əhalisinin dinamikası (8 milyard), əhalinin orta sıxlığı, ən sıx və seyrək məskunlaşmış regionlar, dünya dinləri (İslam, Xristianlıq, Buddizm) və dövlətlərin siyasi xəritəsi.',
    theoryMarkdown: `
### Dünya Əhalisi və Siyasi Xəritə

#### 1. Dünya Əhalisinin Sayı və Artımı
Yer kürəsinin əhalisi 2022-ci ilin sonunda **8 milyard nəfəri** aşmışdır.
* Əhali qeyri-bərabər məskunlaşmışdır: Quru səthinin cəmi $7\%$-də əhalinin $70\%$-i yaşayır.
* **Orta sıxlıq:** Təxminən $55 	ext{ nəfər/km}^2$.
* **Ən sıx məskunlaşmış regionlar:** Cənubi və Şərqi Asiya (Çin, Hindistan, Banqladeş), Qərbi Avropa, Şimali Amerikanın şərqi.
* **Ən seyrək məskunlaşmış regionlar:** Qütb əraziləri (Qrenlandiya, Antarktida), səhralar (Saxara, Avstraliya daxili) və uca dağlar.

#### 2. Dillər və Dünya Dinləri
* **Ən çox danışılan dillər:** Çin, İngilis, İspan, Ərəb, Hindi, Rus, Fransız, Portuqal, Bengal.
* **Dünya Dinləri:**
  1. **Xristianlıq:** Katoliklər, Pravoslavlar və Protestantlar (Avropa, Amerika, Avstraliya).
  2. **İslam:** Sünnilər və Şiələr (Yaxın və Orta Şərq, Şimali Afrika, Mərkəzi Asiya, Azərbaycan).
  3. **Buddizm:** Şərqi və Cənub-Şərqi Asiya (Tibet, Monqolustan, Tailand, Yaponiya).
* **Milli dinlər:** İudaizm (İsrail), Hinduizm (Hindistan), Şintoizm (Yaponiya), Konfutsiçilik (Çin).

#### 3. Dünyanın Siyasi Xəritəsi
Dünyada 230-dan çox ölkə var (onlardan 193-ü BMT üzvüdür):
* **İdarəetmə formasına görə:**
  - *Respublika:* Hakimiyyət orqanları xalq tərəfindən seçilir (dünyanın əksər ölkələri: Azərbaycan, Türkiyə, ABŞ, Fransa).
  - *Monarxiya:* Dövlət başçısı səlahiyyətləri irsən ötürülür (Böyük Britaniya, Yaponiya, İspaniya, Səudiyyə Ərəbistanı).
* **Ərazi quruluşuna görə:**
  - *Unitar:* Tərkibində muxtar dövlət qurumu olmayan vahid dövlətlər (Azərbaycan, Fransa, İtaliya).
  - *Federativ:* Tərkibində müəyyən müstəqilliyə malik ştatlar, respublikalar, torpaqlar olan dövlətlər (Rusiya, ABŞ, Almaniya, Braziliya, Hindistan).
    `,
    keyFormulas: [
      {
            "formula": "\\text{Əhali sıxlığı} = \\frac{\\text{Əhali sayı (nəfər)}}{\\text{Ərazi sahəsi (km}^2)}",
            "name": "Orta sıxlıq düsturu",
            "desc": "1 kvadrat kilometrə düşən sakinlərin sayı"
      }
],
    glossary: [
      {
            "term": "Demoqrafiya",
            "definition": "Əhalinin sayını, tərkibini, artımını və yerdəyişməsini öyrənən elm sahəsi."
      },
      {
            "term": "Unitar dövlət",
            "definition": "Bütün ərazisində vahid qanunvericilik və icra hakimiyyəti olan mərkəzləşdirilmiş dövlət."
      },
      {
            "term": "Monarxiya",
            "definition": "Dövlət başçısının (kral, sultan, imperator) hakimiyyəti irsi yolla əldə etdiyi idarəetmə forması."
      }
],
    solvedExamples: [
      {
            "problem": "Ərazisi 86.6 min km² və əhalisi 10.2 milyon nəfər olan Azərbaycan Respublikasında əhalinin orta sıxlığını hesablayın.",
            "solution": "Əhali sıxlığı = 10 200 000 / 86 600 ≈ 118 nəfər/km²."
      }
],
    miniQuiz: [
      {
            "q": "Dünya dinləri sırasına hansı üç böyük din daxildir?",
            "options": [
                  "İslam, Xristianlıq, Buddizm",
                  "Hinduizm, İudaizm, Şintoizm",
                  "Yalnız İslam və Xristianlıq",
                  "Zərdüştilik, Manilik, Totemizm"
            ],
            "a": 0,
            "exp": "Bütün dünyada müxtəlif millətlər tərəfindən qəbul olunan 3 qlobal din: İslam, Xristianlıq və Buddizmdir."
      },
      {
            "q": "Dövlət başçısının seçkilərlə deyil, irsi olaraq təyin edildiyi idarəetmə forması necə adlanır?",
            "options": [
                  "Respublika",
                  "Monarxiya",
                  "Federasiya",
                  "Konfederasiya"
            ],
            "a": 1,
            "exp": "Monarxiya dövlətlərində hakimiyyət nəsildən-nəslə irsən ötürülür."
      }
]
  },

  {
    id: 'cografiya-8-1',
    subjectId: 'cografiya',
    grade: 8,
    unit: 'Bölmə 1: Coğrafi Tədqiqatlar və Xəritə Proyeksiyaları',
    unitOrder: 1,
    title: 'Kartoqrafik proyeksiyalar, təhriflər və horizontallar',
    order: 1,
    readTimeMinutes: 18,
    difficulty: 3,
    summary: 'Kürə səthinin müstəviyə köçürülməsi, silindrik, konik və azimutal proyeksiyalar, xəritədə təhrif növləri, horizontallarla relyefin təsviri və relyef profili.',
    theoryMarkdown: `
### Kartoqrafik Proyeksiyalar və Relyefin Təsviri

#### 1. Xəritə Proyeksiyaları və Təhriflər
Kürəvi Yer səthini yırtmadan və qırışdırmadan müstəvi (kağız) üzərinə tam dəqiq köçürmək riyazi cəhətdən qeyri-mümkündür. Buna görə istənilən xəritədə mütləq **təhriflər (xətalar)** yaranır:
* **Təhrif növləri:** Sahə təhrifi, bucaq təhrifi, forma təhrifi və uzunluq təhrifi.
* **Əsas Proyeksiya Növləri:**
  1. **Silindrik proyeksiya (Merkator):** Qlobus xəyali silindrin içinə salınır. Ekvator boyu təhrif sıfırdır, qütblərə getdikcə sahə təhrifi həddən artıq böyüyür (Qrenlandiya xəritədə Afrikadan böyük görünür). Dəniz naviqasiya xəritələri üçün əlverişlidir.
  2. **Konik proyeksiya:** Qlobusun üzərinə xəyali konus geyindirilir. Orta (mülayim) enliklərin xəritələri üçün idealdır.
  3. **Azimutal proyeksiya:** Müstəvi qütb nöqtəsinə toxunur. Qütb və yarımkürələr xəritələri üçün istifadə edilir.

#### 2. Horizontallarla Relyefin Təsviri
* **Horizontallar (İzohipslər):** Eyni mütləq hündürlüyə malik nöqtələri birləşdirən qapalı qəhvəyi xətlərdir:
  - Horizontallar bir-birinə **nə qədər yaxındırsa, yamac o qədər dikdir**.
  - Horizontallar seyrəkdirsə, yamac mailidir.
* **Kəsmə hündürlüyü:** İki qonşu horizontal arasındakı sabit şaquli hündürlük fərqidir.
* **Berqştrix:** Horizontal xətlərinə perpendikulyar çəkilmiş qısa cizgilərdir; həmişə **suyun axın və yamacın eniş istiqamətini** göstərir (dağda xaricə, çökəklikdə daxilə yönəlir).
    `,
    keyFormulas: [
      {
            "formula": "\\text{Kəsmə hündürlüyü} = \\frac{h_2 - h_1}{n \\text{ (aralıq sayı)}}",
            "name": "Kəsmə hündürlüyü düsturu",
            "desc": "Qonşu horizontallar arasındakı metr fərqi"
      }
],
    glossary: [
      {
            "term": "Horizontal",
            "definition": "Xəritədə eyni mütləq hündürlüyə malik nöqtələri birləşdirən şərti xətt."
      },
      {
            "term": "Berqştrix",
            "definition": "Yamacın eniş istiqamətini göstərən kiçik qısa xətkeş cizgisi."
      },
      {
            "term": "Kəsmə hündürlük",
            "definition": "Xəritədə iki qonşu horizontal arasındakı hündürlük fərqi."
      }
],
    solvedExamples: [
      {
            "problem": "Xəritədə kəsmə hündürlüyü 20 metrdir. Dağın ətəyindən keçən horizontal 140 m olarsa, 3 horizontal yuxarıda yerləşən horizontalın hündürlüyü neçə metr olar?",
            "solution": "Hündürlük = 140 m + (3 × 20 m) = 140 + 60 = 200 metr."
      }
],
    miniQuiz: [
      {
            "q": "Xəritədə horizontalların bir-birinə çox yaxın yerləşməsi yamacın hansı xüsusiyyətini göstərir?",
            "options": [
                  "Yamac çox mailidir",
                  "Yamac olduqca dikdir",
                  "Ora bataqlıqdır",
                  "Çökəklikdir"
            ],
            "a": 1,
            "exp": "Horizontalların sıxlaşması yamacın sıldırım və dik olduğunu bildirir."
      },
      {
            "q": "Qütb ərazilərinin xəritələrini tərtib etmək üçün ən əlverişli proyeksiya hansıdır?",
            "options": [
                  "Silindrik",
                  "Konik",
                  "Azimutal proyeksiya",
                  "Polikonik"
            ],
            "a": 2,
            "exp": "Azimutal proyeksiya qütblərdə təhrifi minimuma endirir."
      }
]
  },

  {
    id: 'cografiya-8-2',
    subjectId: 'cografiya',
    grade: 8,
    unit: 'Bölmə 2: Yerin Tektonik Quruluşu və Relyef Formaları',
    unitOrder: 2,
    title: 'Geoxronologiya, qırışıqlıq mərhələləri və morfoloji strukturlar',
    order: 2,
    readTimeMinutes: 18,
    difficulty: 3,
    summary: 'Geoloji zaman şkalası (eralar və dövrlər), süxurların nisbi və mütləq yaşı, Baykal, Kaledon, Hersin, Mezozoy və Alp dağəmələgəlmə mərhələləri, platforma və geosinklinal.',
    theoryMarkdown: `
### Geoloji Zaman və Dağəmələgəlmə

#### 1. Geoxronoloji Cədvəl və Süxurların Yaşı
Yerin təxminən $4.5-4.6$ milyard illik geoloji inkişaf tarixi Geoxronoloji cədvəldə əks olunur:
* **Nisbi yaş:** Süxur laylarının yatım ardıcıllığına və rəhbər daşlaşmış orqanizm qalıqlarına görə müəyyən edilir (altdakı lay üstdəkindən qədimdir).
* **Mütləq yaş:** Radioaktiv elementlərin ($U^{238}, C^{14}$) yarımparçalanma dövrünə əsasən süxurun neçə milyon il əvvəl yarandığını dəqiq göstərir.

#### 2. Dağəmələgəlmə (Qırışıqlıq) Mərhələləri
Yer qabığı zəif hərəkətli **Platformalara** və fəal vulkanik hərəkətli **Geosinklinal (mütəhərrik) qurşaqlara** bölünür.
* **Tarixi Qırışıqlıqlar:**
  1. *Baykal qırışıqlığı (Proterozoy):* Ən qədim dağəmələgəlmə.
  2. *Kaledon qırışıqlığı (Erkən Paleozoy):* Skandinaviya dağları, Şotlandiya, Sayan dağları.
  3. *Hersin qırışıqlığı (Son Paleozoy):* Ural dağları, Tyan-Şan, Altay, Appalaç.
  4. *Mezozoy qırışıqlığı (Mezozoy):* Verxoyansk, Çerski, Kordilyer dağlarının şərqi.
  5. *Alp qırışıqlığı (Kaynozoy — müasir cavan dağlar):* Ən uca, şiş zirvəli seysmik fəal dağlar: **Alp, Qafqaz, Pireney, Karpat, Krım, Kopetdağ, Pamir, Himalay və And dağları**.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Alp qırışıqlığı (Kaynozoy)} = \\text{Ən cavan, uca və zəlzələli dağlar (Qafqaz, Himalay, Alplar)}",
            "name": "Alp qurşağı xüsusiyyəti",
            "desc": "Müasir fəal seysmik qurşaq"
      }
],
    glossary: [
      {
            "term": "Platforma",
            "definition": "Yer qabığının zəif hərəkətli, tektonik cəhətdən sabit, düzənlik relyefli qədim özəyi."
      },
      {
            "term": "Geosinklinal",
            "definition": "Yer qabığının dağəmələgəlmə, güclü zəlzələ və vulkanizmlə səciyyələnən mütəhərrik fəal zonası."
      },
      {
            "term": "Mütləq yaş",
            "definition": "Radioaktiv mineralların parçalanmasına əsasən süxurun yarandığı vaxtdan keçən illərin dəqiq sayı."
      }
],
    solvedExamples: [
      {
            "problem": "Niyə Ural dağlarının zirvələri hamar və alçaq, Qafqaz və Alp dağlarının zirvələri isə şişqayalı və çox ucadır?",
            "solution": "Ural dağları çox qədimdir (Paleozoyun Hersin qırışıqlığında yaranıb) və yüz milyon illər boyu xarici qüvvələr tərəfindən aşınaraq alçalmışdır. Qafqaz və Alplar isə ən cavan (Kaynozoyun Alp qırışıqlığı) dağlar olduğundan hələ də ucalmaqda davam edir və aşınmağa vaxt tapmamışdır."
      }
],
    miniQuiz: [
      {
            "q": "Qafqaz və Himalay dağları hansı dağəmələgəlmə (qırışıqlıq) mərhələsində yaranmışdır?",
            "options": [
                  "Kaledon",
                  "Hersin",
                  "Mezozoy",
                  "Alp qırışıqlığı (Kaynozoy)"
            ],
            "a": 3,
            "exp": "Qafqaz və Himalay ən cavan dağ sistemləri olub Alp qırışıqlığına aiddir."
      },
      {
            "q": "Yer qabığının ikiqatlı (qranit qatı olmayan) nazik növü hansıdır?",
            "options": [
                  "Materik qabığı",
                  "Okean qabığı (5-10 km)",
                  "Platforma qalxanı",
                  "Astenosfer"
            ],
            "a": 1,
            "exp": "Okean qabığında qranit qatı olmur, yalnız çökmə və bazalt qatlarından ibarətdir."
      }
]
  },

  {
    id: 'cografiya-8-3',
    subjectId: 'cografiya',
    grade: 8,
    unit: 'Bölmə 3: İqlim Ehtiyatları və Sinoptik Xəritələr',
    unitOrder: 3,
    title: 'Atmosfer cəbhələri, siklonlar, antisiklonlar və günəş radiasiyası',
    order: 3,
    readTimeMinutes: 18,
    difficulty: 3,
    summary: 'Günəş radiasiyası növləri (düz, səpələnən, ümumi, udulan, qayıdan), atmosfer cəbhələri (isti və soyuq), siklon (alçaq təzyiq) və antisiklon (yüksək təzyiq) burulğanları.',
    theoryMarkdown: `
### İqlim Ehtiyatları və Sinoptik Proseslər

#### 1. Günəş Radiasiyasının Balansı
Günəşdən yer səthinə gələn istilik və işıq enerjisidir:
* **Düz radiasiya:** Buludsuz açıq səmada şüaların birbaşa yerə çatmasıdır.
* **Səpələnən radiasiya:** Qazlar, toz və buludlar tərəfindən səpələnmiş radiasiyadır.
* **Ümumi radiasiya:** Düz və səpələnən radiasiyaların cəmidir:
  $$Q_{\text{ümumi}} = Q_{\text{düz}} + Q_{\text{səpələnən}}$$
* **Albedo:** Səthin günəş şüalarını əksetdirmə qabiliyyətidir (təzə qar şüaların $85-90\%$-ni, su $5-10\%$-ni, qara torpaq $10-15\%$-ni əks etdirir).

#### 2. Atmosfer Cəbhələri
Müxtəlif xassəli iki hava kütləsi qarşılaşdıqda aralarında ensiz keçid zolağı — **atmosfer cəbhəsi** yaranır:
* **İsti cəbhə:** İsti hava soyuq havanın üzərinə doğru hərəkət edir. Laylı buludlar və uzunmüddətli xırda dənəli leysanlar yaranır, keçdikdən sonra hava istiləşir.
* **Soyuq cəbhə:** Ağır soyuq hava paz kimi isti havanın altına soxulur. Güclü külək, qısa müddətli şiddətli leysan və şimşək çaxması baş verir; keçdikdən sonra hava kəskin soyuyur və təzyiq qalxır.

#### 3. Siklon və Antisiklon
* **Siklon (Alçaq Təzyiq Burulğanı):**
  - Mərkəzində **alçaq təzyiq ($A$)** olur.
  - Hava kənardan mərkəzə doğru burularaq daxil olur və mərkəzdə **qalxan hava axını** yaranır.
  - Hava buludlu, küləkli və yağıntılı keçir.
* **Antisiklon (Yüksək Təzyiq Burulğanı):**
  - Mərkəzində **yüksək təzyiq ($Y$)** olur.
  - Hava mərkəzdən kənarlara doğru axır və mərkəzdə **enən hava axını** yaranır.
  - Hava buludsuz, aydın, sakit və quru keçir (yayda çox isti, qışda sərt şaxtalı).
    `,
    keyFormulas: [
      {
            "formula": "Q_{\\text{ümumi}} = Q_{\\text{düz}} + Q_{\\text{səpələnən}}",
            "name": "Ümumi günəş radiasiyası",
            "desc": "Düz və səpələnən radiasiyanın cəmi"
      },
      {
            "formula": "\\text{Siklon} = \\text{Mərkəzdə alçaq təzyiq (yağıntı)}, \\quad \\text{Antisiklon} = \\text{Mərkəzdə yüksək təzyiq (aydın hava)}",
            "name": "Sinoptik burulğanlar",
            "desc": "Hava rejimlərinin fərqi"
      }
],
    glossary: [
      {
            "term": "Albedo",
            "definition": "Səthin üzərinə düşən günəş radiasiyasını faizlə əksetdirmə dərəcəsi."
      },
      {
            "term": "Siklon",
            "definition": "Mərkəzində alçaq təzyiq olan, saat əqrəbinin əksi istiqamətində (Şimalda) burulan hava qasırğası."
      },
      {
            "term": "Antisiklon",
            "definition": "Mərkəzində yüksək təzyiq olan, aydın və yağıntısız hava gətirən atmosfer burulğanı."
      }
],
    solvedExamples: [
      {
            "problem": "Niyə qışda antisiklon daxil olanda havanın aydın və buludsuz olmasına baxmayaraq kəskin şaxta olur?",
            "solution": "Antisiklonda enən hava axınları bulud əmələ gəlməsinə imkan vermir. Bulud örtüyü olmadıqda gecə yer səthi istiliyini maneəsiz kosmosa şüalandırır və səth kəskin soyuyaraq quru şaxta yaradır."
      }
],
    miniQuiz: [
      {
            "q": "Təzə yağmış ağ qarın albedosu (əksetdirmə qabiliyyəti) təxminən neçə faizdir?",
            "options": [
                  "10-15%",
                  "50%",
                  "85-90%",
                  "0%"
            ],
            "a": 2,
            "exp": "Ağ qar səthi günəş şüalarının 85-90%-ni birbaşa kosmosa əks etdirir."
      },
      {
            "q": "Mərkəzində yüksək təzyiq olan, buludsuz, aydın və sakit hava şəraiti yaradan atmosfer burulğanı hansıdır?",
            "options": [
                  "Siklon",
                  "Antisiklon",
                  "Trombo",
                  "Tayfun"
            ],
            "a": 1,
            "exp": "Antisiklon yüksək təzyiq mərkəzli sabit aydın hava gətirir."
      }
]
  },

  {
    id: 'cografiya-8-4',
    subjectId: 'cografiya',
    grade: 8,
    unit: 'Bölmə 4: Quru Suları və Su Ehtiyatları',
    unitOrder: 4,
    title: 'Çayların meyilliyi və düşməsi, göllər, buzlaqlar və bataqlıqlar',
    order: 4,
    readTimeMinutes: 17,
    difficulty: 2,
    summary: 'Çayın düşməsi ($h_1 - h_2$) və meyilliyi ($M = D/L$), çay rejimi (gursululuq, qısməhsulluq), göllərin mənşəyi (tektonik, relikt, vulkanik), yeraltı suların növləri.',
    theoryMarkdown: `
### Quru Suları və Hidroloji Hesablamalar

#### 1. Çayın Əsas Kəmiyyət Göstəriciləri
* **Çayın düşməsi ($D$):** Mənbəyin mütləq hündürlüyü ($h_1$) ilə mənsəbin mütləq hündürlüyü ($h_2$) arasındakı metr fərqidir:
  $$D = h_1 - h_2 \quad (\text{metrlə})$$
* **Çayın meyilliyi ($M$):** Çayın düşməsinin onun uzunluğuna ($L$) nisbətidir:
  $$M = \frac{D}{L} \quad (\text{m/km və ya sm/km})$$
  - Dağ çaylarında meyillik böyük olur (sürətli axır, astanalar və şəlalələr yaradır, kanyonlar qazır).
  - Düzənlik çaylarında meyillik kiçik olur (yavaş axır, qıvrılır — meandrlar yaradır).
* **Çayın su sərfi ($Q$):** Çayın en kəsiyindən 1 saniyədə keçən suyun həcmidir ($Q = v \cdot S$, $\text{m}^3/\text{san}$).

#### 2. Göllərin Mənşəyi
1. **Tektonik göllər:** Yer qabığının qırılma və çökəkliklərində yaranan çox dərin göllərdir (Baykal, Tanqanika, Tyan-Şandakı İssık-Kul).
2. **Qalıq (Relikt) göllər:** Qədim dənizlərin okeandan ayrılmış qalıqlarıdır (Xəzər dənizi, Aral dənizi).
3. **Bənd (Uçqun) gölləri:** Zəlzələ nəticəsində dağ uçqununun çay dərəsinin qabağını kəsməsindən yaranır (1139-cu il zəlzələsində Kəpəz dağının uçması ilə yaranan **Göygöl, Maralgöl**).
4. **Vulkanik göllər:** Sönmüş vulkan kraterində suyun yığılması ilə yaranır.
5. **Buzlaq gölləri:** Qədim buzlağın qazdığı çalada yerləşən göllər (Ladoga, Oneqa).

#### 3. Yeraltı Sular və Buzlaqlar
* **Qrunt suları:** Yer səthindən birinci sukeçirməyən layın üstündə toplanan təzyiqsiz sulardır.
* **Artezian suları:** İki sukeçirməyən lay arasında təzyiq altında yerləşən dərin təmiz sulardır (qazıldıqda fəvvarə vurur).
* **Buzlaqlar:** Qarın əriməyə macal tapmayıb sıxlaşaraq firnə və buzlağa çevrilməsindən yaranır. Qarın ərimədiyi ən aşağı sərhəd **qar xətti** adlanır.
    `,
    keyFormulas: [
      {
            "formula": "D = h_{\\text{mənbə}} - h_{\\text{mənsəb}}",
            "name": "Çayın düşməsi",
            "desc": "Mənbə və mənsəb arasındakı metr fərqi"
      },
      {
            "formula": "M = \\frac{D}{L}",
            "name": "Çayın meyilliyi",
            "desc": "Düşmənin çayın uzunluğuna nisbəti (m/km)"
      }
],
    glossary: [
      {
            "term": "Düşmə",
            "definition": "Çayın mənbəyi ilə mənsəbi arasındakı mütləq hündürlük fərqi."
      },
      {
            "term": "Meyillik",
            "definition": "Çayın vahid uzunluğuna (1 km-ə) düşən şaquli düşmə miqdarı."
      },
      {
            "term": "Artezian",
            "definition": "İki sukeçirməyən lay arasında böyük hidrostatik təzyiq altında yerləşən yeraltı sular."
      }
],
    solvedExamples: [
      {
            "problem": "Uzunluğu 1500 km olan çayın mənbəyi 2200 m, mənsəbi isə dəniz səviyyəsindən -20 m hündürlükdədir. Çayın düşməsini və meyilliyini hesablayın.",
            "solution": "1) Düşmə: D = 2200 - (-20) = 2220 metr. 2) Meyillik: M = D / L = 2220 m / 1500 km = 1.48 m/km."
      }
],
    miniQuiz: [
      {
            "q": "1139-cu ildə Kəpəz dağının uçaraq Ağsu çayının qabağını kəsməsindən hansı məşhur təbiət incisi göl yaranmışdır?",
            "options": [
                  "Xəzər",
                  "Göygöl",
                  "Baykal",
                  "Urmiya"
            ],
            "a": 1,
            "exp": "Göygöl zəlzələ nəticəsində yaranmış uçqun-bənd mənşəli göldür."
      },
      {
            "q": "Çayın mənbəyinin hündürlüyü 1800 m, töküldüyü gölün səviyyəsi 300 m olarsa, çayın düşməsi nə qədərdir?",
            "options": [
                  "2100 m",
                  "1500 m",
                  "6 m",
                  "600 m"
            ],
            "a": 1,
            "exp": "Düşmə = 1800 m - 300 m = 1500 metr."
      }
]
  },

  {
    id: 'cografiya-8-5',
    subjectId: 'cografiya',
    grade: 8,
    unit: 'Bölmə 5: Torpaq, Bitki və Heyvanat Aləmi',
    unitOrder: 5,
    title: 'Torpaqəmələgəlmə, torpaq xəritələri və canlı aləmin mühafizəsi',
    order: 5,
    readTimeMinutes: 17,
    difficulty: 2,
    summary: 'Torpaqəmələgətirən amillər (ana süxur, iqlim, relyef, orqanizmlər, zaman), torpaq profili (A, B, C qatları), meşə ehtiyatları və qoruqlar.',
    theoryMarkdown: `
### Torpaq Örtüyü və Canlı Aləm

#### 1. Torpaqəmələgətirən Amillər (V.V.Dokuçayev)
Torpaq canlı və cansız təbiətin kəsişməsində yerləşən unikal təbii cisimdir:
* **5 əsas amil:** Ana süxur, İqlim (istilik və rütubət), Canlı orqanizmlər (bitkilər, heyvanlar, mikroblar), Relyef və Zaman.
* **Torpaq Profili:**
  - $A_0$ qatı: Meşə döşənəyi və ya çim qatı.
  - $A_1$ qatı: **Humus (çürüntü) qatı** — ən zəngin və münbit qatdır.
  - $A_2$ qatı: Yuyulma qatı (podzol torpaqlarda küləbənzər açıq rəngli qat).
  - $B$ qatı: Yuyulub gətirilən maddələrin toplandığı illüvial qat.
  - $C$ qatı: Torpağın yarandığı ana süxur qatı.

#### 2. Əsas Torpaq Tipləri
* **Tundra-qley torpaqları:** Həddindən artıq rütubət və oksigensiz mühitdə göyümtül rəngli qley qatı yaranır.
* **Podzol torpaqlar:** Tayqa iynəyarpaqlı meşələrində, qələvi və mineralların yuyulduğu külrəngli kasıb torpaqlardır.
* **Qəhvəyi və qonur meşə torpaqları:** Enliyarpaqlı meşələrdə (fıstıq, palıd) zəngin xəzəl örtüyü hesabına formalaşır.
* **Qara torpaqlar (Qaratorpaq):** Çöllərdə, zəngin kök kütləsinin çürüməsindən yaranan ən yüksək humuslu ($8-12\%$) torpaqlardır.
* **Boz və boz-qonur torpaqlar:** Quraq yarımsəhralarda seyrək bitkilər altında yaranan zəif humuslu ($1-2\%$) torpaqlardır (Azərbaycanın düzənliklərində geniş yayılmışdır).

#### 3. Meşə Ehtiyatları və Təbiəti Mühafizə
Meşələr "planetin ağciyərləri"dir. İki əsas meşə qurşağı var:
* **Şimal meşə qurşağı:** İynəyarpaqlı və qarışıq meşələr (Rusiya, Kanada, Skandinaviya).
* **Cənub meşə qurşağı:** Ekvatorial və tropik yağış meşələri (Amazoniya, Konqo hövzəsi, İndoneziya).
* **Qoruqlar və Milli Parklar:** Canlılar aləmini və nadir ekosistemləri qorumaq üçün təsərrüfat fəaliyyətinin qadağan olunduğu xüsusi mühafizə olunan təbiət əraziləridir.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Humus (Çürüntü)} \\sim \\text{Münbitlik səviyyəsi}",
            "name": "Torpaq münbitliyi qanunu",
            "desc": "Humusun çoxluğu kənd təsərrüfatı məhsuldarlığını təmin edir"
      }
],
    glossary: [
      {
            "term": "Qley",
            "definition": "Həddən artıq bataqlıqlaşmış və oksigensiz torpaqlarda yaranan xarakterik göyümtül-boz mineral qat."
      },
      {
            "term": "Qoruq",
            "definition": "Təbiət komplekslərinin ilkin təbii vəziyyətində toxunulmaz saxlandığı ən ciddi mühafizə kateqoriyası."
      }
],
    solvedExamples: [
      {
            "problem": "Ekvatorial meşələrdə üzvi kütlə dünyanın hər yerindən bol olmasına baxmayaraq, niyə oradakı torpaqlarda humus qatı çöllərdəki qara torpaqlar qədər qalın deyil?",
            "solution": "Ekvatorial meşələrdə ilboyu yüksək rütubət və istilik səbəbindən tökülən bütün yarpaq və budaqlar mikroorqanizmlər tərəfindən dərhal tam parçalanır və şiddətli leysan yağışları ilə dərin qatlara yuyulub aparılır. Çöllərdə isə quru yay və soyuq qış mikrobların işini ləngidir və humus torpaqda toplanıb qalır."
      }
],
    miniQuiz: [
      {
            "q": "Azərbaycanın Kür-Araz ovalığında hansı torpaq tipi üstünlük təşkil edir?",
            "options": [
                  "Qara torpaqlar",
                  "Podzol torpaqlar",
                  "Boz və boz-çəmən torpaqları",
                  "Tundra torpağı"
            ],
            "a": 2,
            "exp": "Kür-Araz ovalığının quraq yarımsəhra iqlimində boz və boz-çəmən torpaqları formalaşmışdır."
      },
      {
            "q": "Torpaq profilində çürüntünün ən çox cəmləndiyi ən münbit üst qat necə adlanır?",
            "options": [
                  "Ana süxur (C qatı)",
                  "Humus qatı (A qatı)",
                  "İllüvial B qatı",
                  "Bazalt layı"
            ],
            "a": 1,
            "exp": "A qatı bitki qalıqlarının çürüməsindən yaranmış humus qatıdır."
      }
]
  },

  {
    id: 'cografiya-8-6',
    subjectId: 'cografiya',
    grade: 8,
    unit: 'Bölmə 6: Təbii Ehtiyatlar və Ətraf Mühitin Mühafizəsi',
    unitOrder: 6,
    title: 'Tükənən və tükənməyən təbii sərvətlər, alternativ enerji',
    order: 6,
    readTimeMinutes: 17,
    difficulty: 2,
    summary: 'Təbii ehtiyatların təsnifatı (tükənən: bərpa olunan və olunmayan; tükənməyən), faydalı qazıntılar, alternativ enerji mənbələri (günəş, külək, geotermal, qabarma) və ekoloji böhran.',
    theoryMarkdown: `
### Təbii Ehtiyatlar və Qlobal Ekoloji Balans

#### 1. Təbii Ehtiyatların Təsnifatı
Təbii ehtiyatlar — insanın həyat və təsərrüfat fəaliyyətində istifadə etdiyi təbiət cisimləri və hadisələridir:
* **Tükənən Təbii Ehtiyatlar:**
  - *Bərpa olunmayanlar:* Geoloji dövrlər ərzində yaranmış və tükəndikdə yenidən bərpa olunmayan faydalı qazıntılar (neft, təbii qaz, daş kömür, dəmir filizi, uran).
  - *Bərpa olunanlar:* Düzgün və səmərəli istifadə edildikdə təbiətdə özünü bərpa edə bilən sərvətlər (torpaq münbitliyi, şirin su ehtiyatları, meşələr, bitki və heyvanat aləmi).
* **Tükənməyən Təbii Ehtiyatlar:**
  - İqlim ehtiyatları (Günəş radiasiyası, külək enerjisi).
  - Su enerjisi (çayların axın enerjisi, okean dalğaları, qabarma-çəkilmə).
  - Geotermal enerji (Yerin daxili istiliyi, qeyzerlər).

#### 2. Alternativ (Bərpa Olunan) Enerji Sahələri
Ənənəvi yanacaqların (kömür, neft) yandırılması atmosferi $CO_2$ ilə çirkləndirib istixana effekti yaratdığı üçün bəşəriyyət yaşıl enerjiyə keçir:
* **Külək Enerjisi:** Xəzər sahili və Abşeron yarımadası güclü küləklər zonasıdır.
* **Günəş Enerjisi:** Naxçıvan Muxtar Respublikası və Kür-Araz ovalığı günəşli saatların sayına ($2600-2800 	ext{ saat/il}$) görə yüksək potensiala malikdir.
* **Geotermal Enerji:** İslandiya, İtaliya, Kamçatka və Yeni Zelandiyada geniş istifadə edilir.

#### 3. Ətraf Mühitin Mühafizəsi və Ekoloji Monitorinq
* Təbiətdən səmərəli istifadə — resursların israf edilmədən, tullantısız və ya az tullantılı texnologiyalarla emalıdır.
* Təkrar emal (resayklinq): Metal qırıntılarının, kağızın, şüşə və plastmasın yenidən istehsala cəlb olunması təbiəti zibillənmədən və tükənmədən qoruyur.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Ehtiyatla təminat} = \\frac{\\text{Təbii ehtiyatın həcmi}}{\\text{İllik hasilat (və ya əhali sayı)}}",
            "name": "Resurs təminatı düsturu",
            "desc": "Ehtiyatın bəşəriyyətə neçə il çatacağını göstərən indeks"
      }
],
    glossary: [
      {
            "term": "Resurs təminatı",
            "definition": "Təbii ehtiyatların mövcud ehtiyatları ilə onların illik istifadə miqdarı arasındakı nisbət."
      },
      {
            "term": "Geotermal enerji",
            "definition": "Yerin daxilindəki qızmar süxurların və qaynar yeraltı suların istilik enerjisi."
      },
      {
            "term": "Resayklinq",
            "definition": "İstifadə edilmiş xammal və tullantıların yenidən təkrar emal dövriyyəsinə qaytarılması."
      }
],
    solvedExamples: [
      {
            "problem": "Ölkədə 50 milyard ton daş kömür ehtiyatı var və ildə 250 milyon ton kömür hasil edilir. Bu ölkə daş kömürlə neçə il təmin olunmuşdur?",
            "solution": "Resurs təminatı = 50 000 000 000 / 250 000 000 = 200 il təmin olunmuşdur."
      }
],
    miniQuiz: [
      {
            "q": "Aşağıdakı təbii sərvətlərdən hansı tükənməyən təbii ehtiyatlara aiddir?",
            "options": [
                  "Daş kömür",
                  "Külək və Günəş enerjisi",
                  "Neft",
                  "Dəmir filizi"
            ],
            "a": 1,
            "exp": "Günəş və külək heç vaxt tükənməyən alternativ enerji mənbələridir."
      },
      {
            "q": "Təbii qaz və neft hansı ehtiyatlar qrupuna aiddir?",
            "options": [
                  "Tükənməyən",
                  "Tükənən və bərpa olunmayan",
                  "Tükənən və bərpa olunan",
                  "Yalnız kosmik"
            ],
            "a": 1,
            "exp": "Qazıntı yanacaqları milyon illərə yaranır və tükəndikdə bərpa olunmur."
      }
]
  },

  {
    id: 'cografiya-9-1',
    subjectId: 'cografiya',
    grade: 9,
    unit: 'Bölmə 1: Azərbaycanın Coğrafi Mövqeyi və Sərhədləri',
    unitOrder: 1,
    title: 'Azərbaycan Respublikasının İCM-i, sərhədləri və geosiyasəti',
    order: 1,
    readTimeMinutes: 17,
    difficulty: 2,
    summary: 'Azərbaycanın Avropa və Asiyanın qovşağında mövqeyi, sahəsi (86.6 min km²), quru və su sərhədləri, İpək Yolu və geosiyasi üstünlükləri.',
    theoryMarkdown: `
### Azərbaycan Respublikasının Coğrafi Mövqeyi

#### 1. Coğrafi və Geosiyasi Mövqeyi
Azərbaycan Respublikası Cənubi Qafqazın şərqində, Xəzər dənizinin qərb sahilində yerləşir.
* **Koordinatları:** Təxminən $38^\circ 25'$ və $41^\circ 54'$ Şimal enlikləri, $44^\circ 46'$ və $50^\circ 51'$ Şərq uzunluqları arasında yerləşir. Şimal mülayim və subtropik işıqlanma qurşağındadır.
* **Sahəsi:** **$86.6 	ext{ min km}^2$** (Cənubi Qafqaz ərazisinin $46\%$-dən çoxunu təşkil edir).
* **İqtisadi-Coğrafi Mövqeyinin (İCM) Üstünlükləri:**
  - Avropa ilə Asiyanın, Şimal ilə Cənubun qovşağında strateji tranzit dəhlizidir ("Tarixi İpək Yolu", TRACECA, Şimal-Cənub dəhlizi).
  - Neft və qaz ehtiyatları ilə zəngin Xəzər dənizinə geniş çıxışı vardır.
  - Mənfi cəhəti: Dünya okeanına birbaşa çıxışının olmamasıdır.

#### 2. Sərhədləri
Ümumi sərhəd xəttinin uzunluğu təxminən **$3472 	ext{ km}$**-dir (bunun $2647 	ext{ km}$-i quru, $825 	ext{ km}$-i Xəzər dənizi sərhədidir):
* **Qonşuları:**
  - Şimalda: Rusiya Federasiyası ($391 	ext{ km}$, Samur çayı və Baş Qafqaz silsiləsi boyunca).
  - Şimal-qərbdə: Gürcüstan ($471 	ext{ km}$, Qanıx-Əyriçay və Ceyrançöl).
  - Qərbdə və cənub-qərbdə: Ermənistan ($1007 	ext{ km}$, ən uzun quru sərhədi).
  - Cənub-qərbdə: Türkiyə (Naxçıvan MR ilə həmsərhəddir, $15 	ext{ km}$, Araz çayı boyunca).
  - Cənubda: İran İslam Respublikası ($765 	ext{ km}$, Araz və Astaraçay boyunca).
  - Şərqdə: Xəzər dənizi vasitəsilə Rusiya, Qazaxıstan, Türkmənistan və İranla həmsərhəddir.
    `,
    keyFormulas: [
      {
            "formula": "S_{\\text{Azərbaycan}} = 86.6 \\text{ min km}^2, \\quad L_{\\text{sərhəd}} = 3472 \\text{ km} (2647 \\text{ quru} + 825 \\text{ su})",
            "name": "Azərbaycanın ərazi parametrləri",
            "desc": "Ölkənin rəsmi ərazi və sərhəd göstəriciləri"
      }
],
    glossary: [
      {
            "term": "İCM (İqtisadi-coğrafi mövqe)",
            "definition": "Ölkənin təbii sərvətlərə, dünya ticarət yollarına və iqtisadi mərkəzlərə nisbətən mövqeyi."
      },
      {
            "term": "Geosiyasət",
            "definition": "Dövlətin xarici siyasətinin onun coğrafi mövqeyi və strateji məkanı ilə əlaqəsi."
      }
],
    solvedExamples: [
      {
            "problem": "Azərbaycanın quru sərhədlərinin ən uzun və ən qısa olduğu dövlətlər hansılardır?",
            "solution": "Ən uzun quru sərhədi Ermənistanla (1007 km), ən qısa quru sərhədi isə Türkiyə Cümhuriyyəti ilədir (Naxçıvan Sədərək rayonu, Araz çayı boyunca 15 km)."
      }
],
    miniQuiz: [
      {
            "q": "Azərbaycan Respublikasının ümumi ərazi sahəsi neçə min kvadrat kilometrdir?",
            "options": [
                  "86.6 min km²",
                  "100 min km²",
                  "29.8 min km²",
                  "69.7 min km²"
            ],
            "a": 0,
            "exp": "Azərbaycanın beynəlxalq səviyyədə tanınmış rəsmi ərazisi 86.6 min km²-dir."
      },
      {
            "q": "Azərbaycanın qonşu dövlətlərlə ən qısa (15 km) quru sərhədi hansı ölkə ilədir?",
            "options": [
                  "Rusiya",
                  "Gürcüstan",
                  "Türkiyə",
                  "İran"
            ],
            "a": 2,
            "exp": "Naxçıvan Muxtar Respublikası ilə Türkiyə arasında Araz çayı üzərində 'Ümid körpüsü' vasitəsilə 15 km sərhəd vardır."
      }
]
  },

  {
    id: 'cografiya-9-2',
    subjectId: 'cografiya',
    grade: 9,
    unit: 'Bölmə 2: Azərbaycanın Geoloji Quruluşu, Relyefi və Faydalı Qazıntıları',
    unitOrder: 2,
    title: 'Böyük və Kiçik Qafqaz, Kür-Araz ovalığı və palçıq vulkanları',
    order: 2,
    readTimeMinutes: 18,
    difficulty: 3,
    summary: 'Azərbaycanın Alp qırışıqlığı zonası relyefi, Baş Qafqaz və Yan silsilə, Bazardüzü (4466 m), Kiçik Qafqaz (Qapıcıq 3904 m), Talış dağları, Kür-Araz ovalığı, palçıq vulkanları və faydalı qazıntılar.',
    theoryMarkdown: `
### Azərbaycanın Relyefi və Faydalı Qazıntıları

#### 1. Relyefin Əsas Xüsusiyyətləri
Azərbaycan Alp-Himalay qırışıqlıq qurşağında yerləşir, dağlıq və seysmik cəhətdən fəal ölkədir. Ərazisinin təxminən $60\%$-i dağlıq, $40\%$-i düzənlikdir.
* Ən uca nöqtəsi: **Bazardüzü zirvəsi ($4466 	ext{ m}$)** — Baş Qafqaz silsiləsində.
* Ən alçaq nöqtəsi: **Xəzər dənizi sahili ($-27 	ext{ m}$)**.
* Amplitud (ən uca və ən alçaq nöqtə fərqi): $4466 - (-27) = \mathbf{4493 	ext{ metr}}$.

#### 2. Dörd Əsas Oroqrafik Şöbə
1. **Böyük Qafqaz:** Baş Qafqaz silsiləsi (Bazardüzü $4466 	ext{ m}$, Tufandağ, Şahdağ $4243 	ext{ m}$), Yan silsilə, Qusar mailli düzənliyi, Qobustan və Abşeron yarımadası.
2. **Kiçik Qafqaz və Qarabağ:** Şahdağ, Murovdağ (Gamışdağ $3724 	ext{ m}$), Qarabağ silsiləsi və Qarabağ vulkanik yaylası (Qızılboğaz, Böyük İşıqlı). Naxçıvanda Zəngəzur silsiləsi (ən uca nöqtəsi **Qapıcıq $3904 	ext{ m}$**) və Dərələyəz silsiləsi.
3. **Kür-Araz Ovalığı:** Ən böyük allüvial düzənlikdir. Şirvan, Mil, Muğan, Qarabağ və Cənub-Şərqi Şirvan düzləri.
4. **Talış Dağları və Lənkəran Ovalığı:** Kömürgöy ($2493 	ext{ m}$) və Qızyurdu zirvələri.

#### 3. Palçıq Vulkanları
Dünyada mövcud olan 800-dən çox palçıq vulkanının **350-dən çoxu (demək olar ki, yarısı) Azərbaycandadır** (Qobustan, Abşeron və Cənub-Şərqi Şirvan). Onlar dərinlikdə zəngin neft və qaz yataqlarının mövcudluğunun birbaşa təbii göstəricisidir (Torağay, Kənizədağ, Lökbatan).

#### 4. Faydalı Qazıntılar
* **Yanacaq (Çökmə süxurlarda):** Neft və təbii qaz (Abşeron, Qobustan, Cənub-Şərqi Şirvan, Xəzər şelfi — "Şahdəniz", "Azəri-Çıraq-Günəşli").
* **Filiz (Püskürmə süxurlarda, Kiçik Qafqaz):** Dəmir filizi (Daşkəsən), Alunit (Zəylik), Mis və Qızıl (Gədəbəy, Çovdar, Kəlbəcərdə Söyüdlü/Zod, Vejnəli), Polimetal (Filizçay — Balakən).
* **Qeyri-filiz:** Kvars qumu, gips, sement xammalı (Şahbulaq, Qaradağ), mineral sular (İstisu, Badamlı, Sirab, Vayxır).
    `,
    keyFormulas: [
      {
            "formula": "\\Delta h_{\\text{Azərbaycan}} = 4466 \\text{ m (Bazardüzü)} - (-27 \\text{ m (Xəzər)}) = 4493 \\text{ metr}",
            "name": "Mütləq hündürlük amplitudu",
            "desc": "Ölkənin ən hündür və ən alçaq nöqtə fərqi"
      }
],
    glossary: [
      {
            "term": "Palçıq vulkanı",
            "definition": "Yer qabığından qaz, palçıq və su püskürən təbii geoloji təzahür (Azərbaycan dünyada 1-ci yerdədir)."
      },
      {
            "term": "Alunit",
            "definition": "Alüminium və kalium gübrəsi istehsalı üçün Daşkəsəndə zəngin ehtiyatı olan xammal."
      }
],
    solvedExamples: [
      {
            "problem": "Azərbaycanın ən uca dağ zirvəsi hansıdır və o hansı dağ sistemində yerləşir?",
            "solution": "Bazardüzü zirvəsi (4466 m) Böyük Qafqazın Baş Suayrıcı silsiləsində, Rusiya (Dağıstan) ilə sərhəddə yerləşir."
      }
],
    miniQuiz: [
      {
            "q": "Dünyada mövcud olan palçıq vulkanlarının təxminən neçə faizi Azərbaycanda cəmlənmişdir?",
            "options": [
                  "10%",
                  "Demək olar ki, 50%-i (350-dən çox)",
                  "1%",
                  "Hamısı"
            ],
            "a": 1,
            "exp": "Dünyanın 800-dən çox palçıq vulkanından 350-dən çoxu Qobustan, Abşeron və Xəzərdədir."
      },
      {
            "q": "Azərbaycanda zəngin dəmir filizi yataqları hansı rayonda yerləşir?",
            "options": [
                  "Quba",
                  "Daşkəsən",
                  "Lənkəran",
                  "Qazax"
            ],
            "a": 1,
            "exp": "Cənubi Qafqazın ən böyük dəmir filizi yatağı Daşkəsəndədir."
      }
]
  },

  {
    id: 'cografiya-9-3',
    subjectId: 'cografiya',
    grade: 9,
    unit: 'Bölmə 3: Azərbaycanın İqlimi və İqlim Tipləri',
    unitOrder: 3,
    title: 'Hava kütlələri, günəş radiasiyası, 9 iqlim tipi və küləklər',
    order: 3,
    readTimeMinutes: 18,
    difficulty: 3,
    summary: 'Azərbaycana daxil olan hava kütlələri (Arktik, Mülayim, Tropik), günəşli saatlar, İ.V.Fiqurovskinin 9 iqlim tipi, yerli küləklər: Xəzri (şimal) və Gilavar (cənub).',
    theoryMarkdown: `
### Azərbaycanın İqlimi

#### 1. İqliməmələgətirən Amillər
* **Günəş radiasiyası:** Cənub mövqeyinə görə illik günəş radiasiyası yüksəkdir ($120-160 	ext{ kkal/sm}^2$). İllik günəşli saatların ən çox olduğu ərazi **Naxçıvan Arazboyu düzənliyidir ($2800-2900 	ext{ saat}$)**, ən az olduğu yer isə buludlu Lənkəran ovalığı və dağ ətəkləridir ($1800-2000 	ext{ saat}$).
* **Azərbaycana Daxil Olan Hava Kütlələri:**
  1. *Arktik hava kütlələri (şimaldan):* Temperaturu kəskin aşağı salır, soyuq və şaxta gətirir.
  2. *Mülayim dəniz və kontinental hava (şimal-qərb və şimal-şərqdən):* Yağıntı və külək gətirir.
  3. *Tropik hava kütlələri (cənubdan — İran və Ərəbistandan):* Quru isti və bürkülü hava gətirir.

#### 2. Küləklər
* **Xəzri (Şimal küləyi):** Şimal və şimal-şərqdən Abşeron yarımadasına əsən güclü soyuq dəniz küləyidir. Yayda havanı sərinləşdirir, qışda dondurucu şaxta gətirir.
* **Gilavar (Cənub küləyi):** Cənubdan əsən quru və isti küləkdir. Yayda havanı boğucu bürkülü edir, qışda qarları əridir.
* **Ağ yellər və Qara yellər:** Gəncə-Qazax və Qarabağ düzlərində əkinlərə ziyan vuran quru isti küləklərdir.

#### 3. Azərbaycanın 9 İqlim Tipi (Dünyadakı 11 iqlim tipindən 9-u)
1. **Yarımsəhra və quru çöl iqlimi (Ən geniş yayılan tipdir):**
   - *Qışı mülayim keçən:* Kür-Araz ovalığı, Abşeron, Qobustan.
   - *Qışı soyuq keçən:* Naxçıvanın Arazboyu düzənlikləri.
2. **Mülayim-isti iqlim:**
   - *Qışı quraq keçən:* Qanıx-Əyriçay, Kiçik Qafqazın ətəkləri.
   - *Yayı quraq keçən:* Lənkəran ovalığı və Talış dağlarının ətəkləri (Azərbaycanın ən bol yağıntılı yeri: Lənkəranda **$1400-1800 	ext{ mm}$**).
   - *Bərabər yağıntılı:* Böyük Qafqazın cənub yamacları.
3. **Soyuq iqlim:**
   - *Qışı quraq keçən:* Kiçik Qafqazın orta və yüksək dağlığı.
   - *Yayı quraq keçən:* Naxçıvanın yüksək dağlığı.
   - *Bütün fəsillərdə bol yağıntılı:* Böyük Qafqazın şimal-şərq yamacları.
4. **Dağ-tundra iqlimi:** $3000 	ext{ m}$-dən yuxarıda (əbədi qarlar və buzlaqlar zonası).
    `,
    keyFormulas: [
      {
            "formula": "\\text{Azərbaycanda iqlim tipləri} = 9 \\text{ tip (11 tipdən)}",
            "name": "İqlim zənginliyi",
            "desc": "Mürəkkəb relyef və mövqeyin yaratdığı unikal iqlim müxtəlifliyi"
      }
],
    glossary: [
      {
            "term": "Xəzri",
            "definition": "Abşeron yarımadasında şimaldan əsən güclü soyuq dəniz küləyi."
      },
      {
            "term": "Gilavar",
            "definition": "Cənubdan əsən və Abşeronda yayı bürkülü, qışı mülayim edən isti külək."
      }
],
    solvedExamples: [
      {
            "problem": "Azərbaycanda illik yağıntının ən çox və ən az düşdüyü ərazilər hansılardır?",
            "solution": "Ən çox yağıntı Lənkəran ovalığında və Talış dağlarının ətəklərində düşür (ildə 1400-1800 mm). Ən az yağıntı isə Abşeronun cənubu və Qobustanda müşahidə olunur (ildə cəmi 150-200 mm)."
      }
],
    miniQuiz: [
      {
            "q": "Abşeron yarımadasında şimaldan əsən və havanı kəskin soyudan dəniz küləyi necə adlanır?",
            "options": [
                  "Gilavar",
                  "Xəzri",
                  "Briz",
                  "Musson"
            ],
            "a": 1,
            "exp": "Xəzri Abşerona şimaldan daxil olan güclü soyuq küləkdir."
      },
      {
            "q": "Azərbaycanda illik günəşli saatların sayının ən çox olduğu (2900 saat) bölgə hansıdır?",
            "options": [
                  "Lənkəran",
                  "Naxçıvan Arazboyu düzənliyi",
                  "Quba",
                  "Kəlbəcər"
            ],
            "a": 1,
            "exp": "Naxçıvanın Arazboyu düzənliyi buludsuz günlərin çoxluğuna görə günəşli saatların rekord yeridir."
      }
]
  },

  {
    id: 'cografiya-9-4',
    subjectId: 'cografiya',
    grade: 9,
    unit: 'Bölmə 4: Azərbaycanın Daxili Suları',
    unitOrder: 4,
    title: 'Kür və Araz çay hövzəsi, dağ gölləri və su anbarları',
    order: 4,
    readTimeMinutes: 18,
    difficulty: 2,
    summary: 'Azərbaycanın çay şəbəkəsi, Kür çayı ($1515 	ext{ km}$), Araz çayı ($1072 	ext{ km}$), tranzit çaylar, su anbarları (Mingəçevir, Şəmkir), relikt və dağ gölləri.',
    theoryMarkdown: `
### Azərbaycanın Daxili Suları

#### 1. Çay Şəbəkəsi
Azərbaycanın bütün çayları vahid **Xəzər dənizi hövzəsinə** aiddir. Çaylar iki böyük qrupa bölünür:
1. **Kür hövzəsinin çayları (ərazinin $70\%$-dən çoxu):**
   - **Kür çayı:** Cənubi Qafqazın ən böyük çayıdır. Ümumi uzunluğu **$1515 	ext{ km}$** (Azərbaycanda $906 	ext{ km}$). Türkiyədə Qızılyar dağından başlayır, Gürcüstandan keçib Azərbaycana daxil olur və Xəzərə delta yaradaraq tökülür. Əsas qolları: Qanıx, Qabırlı, Alazan, Türyan, Tərtər.
   - **Araz çayı:** Kürün ən böyük sağ qoludur. Uzunluğu **$1072 	ext{ km}$**. Türkiyədə Bingöl silsiləsindən başlayır, Türkiyə-Ermənistan, Azərbaycan (Naxçıvan)-İran və Azərbaycan-İran sərhədi boyunca axır, Sabirabad şəhərində (Suqovuşanda) Kürə birləşir.
2. **Bilavasitə Xəzərə tökülən çaylar:**
   - Şimal-şərq çayları: Samur (tranzit), Qusarçay, Qudiyalçay, Vəlvələçay.
   - Qobustan çayları: Sumqayıtçay, Pirsaat.
   - Lənkəran zonası çayları: Viləşçay, Lənkərançay, Astaraçay (yağış suları ilə qidalanır, payızda daşır).

#### 2. Su Anbarları və Kanallar
* **Mingəçevir su anbarı:** Qafqazın ən böyük su anbarıdır ("Azərbaycan dənizi", sahəsi $605 	ext{ km}^2$, həcmi $16 	ext{ mlrd m}^3$). Energetika, suvarmada və daşqınların qarşısının alınmasında mühüm rol oynayır.
* Şəmkir, Yenikənd, Araz, Sərsəng, Taxtakörpü su anbarları.
* **Böyük magistral kanallar:** Yuxarı Qarabağ kanalı, Yuxarı Şirvan kanalı, Samur-Abşeron kanalı (Bakının içməli su təminatı).

#### 3. Göllər
* **Uçqun-bənd mənşəli:** Göygöl, Maralgöl (Kiçik Qafqaz).
* **Tektonik və relikt:** Ağgöl, Sarısu (Azərbaycanın ən böyük şirin sulu gölü), Candargöl.
* **Buzlaq gölləri:** Tufangöl (Böyük Qafqazda $3200 	ext{ m}$ hündürlükdə).
* **Şor göllər:** Abşeronda Masazır (xörək duzu çıxarılır), Böyükşor.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Kür} = 1515 \\text{ km (Qafqazın ən uzunu)}, \\quad \\text{Araz} = 1072 \\text{ km (Kürün sağ qolu)}",
            "name": "Azərbaycanın əsas çay arteriyaları",
            "desc": "Ölkənin ən mühüm su ehtiyatları"
      }
],
    glossary: [
      {
            "term": "Tranzit çay",
            "definition": "Mənbəyi və axarının bir hissəsi başqa dövlətin ərazisində olan, ölkəyə kənardan daxil olan çay (Kür, Araz, Samur)."
      },
      {
            "term": "Suqovuşan",
            "definition": "Sabirabad rayonunda Araz çayının Kür çayı ilə birləşdiyi tarixi coğrafi məntəqə."
      }
],
    solvedExamples: [
      {
            "problem": "Araz çayı Kür çayına harada birləşir və birlikdə hara tökülürlər?",
            "solution": "Araz çayı Sabirabad şəhəri yaxınlığında (Suqovuşan adlanan yerdə) Kür çayı ilə birləşir və Kür adı altında axaraq Neftçala rayonunda delta yaradıb Xəzər dənizinə tökülür."
      }
],
    miniQuiz: [
      {
            "q": "Qafqazın ən böyük süni su anbarı hansıdır?",
            "options": [
                  "Şəmkir su anbarı",
                  "Mingəçevir su anbarı",
                  "Araz su anbarı",
                  "Sərsəng su anbarı"
            ],
            "a": 1,
            "exp": "Mingəçevir su anbarı sahəsinə və su tutumuna görə Qafqazın ən böyüyüdür."
      },
      {
            "q": "Abşeron yarımadasında sənaye üsulu ilə xörək duzu çıxarılan göl hansıdır?",
            "options": [
                  "Böyükşor",
                  "Göygöl",
                  "Masazır gölü",
                  "Sarısu"
            ],
            "a": 2,
            "exp": "Masazır gölündən zəngin xörək duzu xammalı hasil edilir."
      }
]
  },

  {
    id: 'cografiya-9-5',
    subjectId: 'cografiya',
    grade: 9,
    unit: 'Bölmə 5: Azərbaycanın Torpaq-Bitki Örtüyü və Təbii Zonaları',
    unitOrder: 5,
    title: 'Şaquli qurşaqlıq, endemik relikt bitkilər və Milli Parklar',
    order: 5,
    readTimeMinutes: 18,
    difficulty: 2,
    summary: 'Azərbaycanda şaquli təbii qurşaqlar (yarımsəhra, dağ-çöl, dağ-meşə, subalp, alp, nival), Hirkan relikt meşələri (dəmir ağacı), qoruqlar və Milli Parklar.',
    theoryMarkdown: `
### Torpaq, Bitki Örtüyü və Mühafizə Olunan Ərazilər

#### 1. Şaquli Təbii Qurşaqlıq
Azərbaycan relyefinin dağlıq olması səbəbindən düzənlikdən uca zirvələrə doğru təbii zonalar şaquli istiqamətdə bir-birini əvəz edir:
1. **Yarımsəhra və quru çöl qurşağı (Dəniz səviyyəsindən $500-600 	ext{ m}$-dək):** Boz və boz-çəmən torpaqları, yovşan, qışlaqlar (Kür-Araz ovalığı).
2. **Dağ-çöl qurşağı ($500-1200 	ext{ m}$):** Şabalıdı və dağ-şabalıdı torpaqlar, taxıllı-müxtəlifotlu çöllər, dəmyə əkinçiliyi.
3. **Dağ-meşə qurşağı ($1200-2000 	ext{ m}$):** Qonur və qəhvəyi dağ-meşə torpaqları. Fıstıq, vələs, palıd meşələri.
4. **Dağ-çəmən qurşağı ($2000-3000 	ext{ m}$):**
   - *Subalp çəmənlikləri:* Hündür otlar, zəngin yaylaqlar və otlaqlar.
   - *Alp çəmənlikləri ("Alp xalıları"):* Qısa boylu parlaq rəngli otlar.
5. **Nival (Qarlı-buzluq) qurşaq ($>3000 	ext{ m}$):** Qayalıqlar, əbədi qarlar və dağ buzlaqları.

#### 2. Nadir və Relikt Təbiət Abidələri
* **Hirkan meşələri (Talış dağları):** Buzlaşma dövründən toxunulmaz qalmış üçüncü dövr relikt ağacları: **Dəmir ağac**, şabalıdyarpaq palıd, Lənkəran akasiyası (ipək akasiya), azat ağacı.
* **Eldar şamı:** Ceyrançöldə Eldar oyuğunda bitən nadir şam meşəliyidir.

#### 3. Milli Parklar və Qoruqlar
* **Milli Parklar (Xalq üçün turizm və mühafizə):**
  - *Ağgöl və Şirvan MP:* Ceyranların və su quşlarının (qızılqaz) qorunması.
  - *Göygöl MP:* Dağ-meşə və füsunkar dağ gölü ekosistemi.
  - *Hirkan MP:* Relikt enliyarpaqlı meşələr və bəbirin mühafizəsi.
  - *Şahdağ MP:* Azərbaycanın ən böyük milli parkıdır (Böyük Qafqaz dağları).
  - Zəngəzur MP (Naxçıvan), Altıağac MP, Samur-Yalama MP, Qızılağac MP.
* **Qoruqlar:** Zaqatala qoruğu (ən qədim qoruq — 1929-cu il), Türyançay, Bəsitçay (çinar meşəliyi), Qaragöl, Eldar şamı qoruğu.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Şaquli profil} = \\text{Yarımsəhra} \\rightarrow \\text{Dağ-çöl} \\rightarrow \\text{Dağ-meşə} \\rightarrow \\text{Subalp/Alp} \\rightarrow \\text{Nival}",
            "name": "Azərbaycanın şaquli qurşaqları",
            "desc": "Hündürlük üzrə landşaft ardıcıllığı"
      }
],
    glossary: [
      {
            "term": "Relikt bitki",
            "definition": "Qədim geoloji dövrlərdən dəyişmədən günümüzədək gəlib çatmış canlı 'təbiət yadigarı' (dəmir ağac)."
      },
      {
            "term": "Milli Park",
            "definition": "Xüsusi təbiət komplekslərinin mühafizəsi ilə yanaşı ekoloji turizm üçün də açıq olan ərazi."
      }
],
    solvedExamples: [
      {
            "problem": "Talış dağlarında şaquli qurşaqlıqda dağ-çəmən qurşağının olmamasının səbəbi nədir?",
            "solution": "Talış dağlarının mütləq hündürlüyü (ən uca zirvəsi Kömürgöy 2493 m) subalp və alp çəmənliklərinin formalaşması üçün tələb olunan hündürlüyə (adətən 2500-3000 m-dən yuxarı) çatmır. Buna görə meşə qurşağından dərhal sonra quraq dağ-kserofit çöl bitkiləri gəlir (inversiya)."
      }
],
    miniQuiz: [
      {
            "q": "Suda batmayan və fövqəladə möhkəmliyə malik relikt 'Dəmir ağac' Azərbaycanın hansı bölgəsində bitir?",
            "options": [
                  "Qubada",
                  "Lənkəran-Talış zonasında (Hirkan meşələri)",
                  "Abşeronda",
                  "Gəncədə"
            ],
            "a": 1,
            "exp": "Dəmir ağac (Parrotia persica) Talış dağlarının Hirkan relikt meşələrinə xasdır."
      },
      {
            "q": "Ceyranların qorunması məqsədilə hansı Milli Park yaradılmışdır?",
            "options": [
                  "Şahdağ MP",
                  "Şirvan Milli Parkı",
                  "Göygöl MP",
                  "Altıağac MP"
            ],
            "a": 1,
            "exp": "Şirvan Milli Parkı Cənub-Şərqi Şirvanda zərif ceyranların təbii artımı üçün təşkil edilmişdir."
      }
]
  },

  {
    id: 'cografiya-9-6',
    subjectId: 'cografiya',
    grade: 9,
    unit: 'Bölmə 6: Azərbaycanın Əhalisi və İqtisadi Rayonları',
    unitOrder: 6,
    title: 'Demoqrafiya, şəhərlər və 14 İqtisadi Rayon',
    order: 6,
    readTimeMinutes: 19,
    difficulty: 2,
    summary: 'Azərbaycan əhalisinin sayı (10.2 mln), urbanizasiya səviyyəsi ($53\%$), 2021-ci il fərmanı ilə təsdiqlənmiş 14 iqtisadi rayon (Qarabağ, Şərqi Zəngəzur və s.), sənaye və aqrar ixtisaslaşma.',
    theoryMarkdown: `
### Azərbaycanın Əhalisi və İqtisadi Rayonları

#### 1. Əhali və Demoqrafik Göstəricilər
* Əhalinin sayı: **$10.2 	ext{ milyondan çox}$**.
* Təbii artım: Doğumun ölümdən çox olması hesabına müsbət təbii artım müşahidə olunur.
* Şəhər əhalisi təxminən $53\%$, kənd əhalisi $47\%$-dir.
* Ən böyük aqlomerasiya: **Bakı aqlomerasiyası** (əhalinin $30\%$-dən çoxu burada cəmlənmişdir). İkinci böyük şəhər: Gəncə, üçüncü: Sumqayıt.

#### 2. Azərbaycanın 14 İqtisadi Rayonu (7 İyul 2021-ci il Fərmanı)
Vətən müharibəsindən sonra tarixi torpaqların azad olunması ilə iqtisadi rayonların yeni şəbəkəsi təsdiqlənmişdir:
1. **Bakı iqtisadi rayonu:** Paytaxt Bakı şəhəri; ən güclü sənaye, neft emalı, maliyyə və elm mərkəzi.
2. **Abşeron-Xızı iqtisadi rayonu:** Sumqayıt, Abşeron, Xızı; kimya, metallurgiya, polimerlər.
3. **Qarabağ iqtisadi rayonu:** Xankəndi, Şuşa, Ağdam, Bərdə, Füzuli, Tərtər, Ağcabədi, Xocalı, Xocavənd; aqrar-sənaye, tikinti, turizm, ipəkçilik.
4. **Şərqi Zəngəzur iqtisadi rayonu:** Kəlbəcər, Laçın, Zəngilan, Qubadlı, Cəbrayıl; qızıl, mineral sular ("İstisu"), dağ-mədən, hidroenerji ("Xudafərin"), dağ turizmi.
5. **Gəncə-Daşkəsən:** Gəncə, Daşkəsən, Samux, Göygöl, Goranboy; qara və əlvan metallurgiya, kənd təsərrüfatı maşınqayırması.
6. **Qazax-Tovuz:** Qazax, Ağstafa, Tovuz, Şəmkir, Gədəbəy; üzümçülük, şərabçılıq, tranzit nəqliyyat.
7. **Şəki-Zaqatala:** Şəki, Zaqatala, Balakən, Qax, Qəbələ, Oğuz; fındıqçılıq, tütünçülük, ipəkçilik, turizm.
8. **Quba-Xaçmaz:** Quba, Qusar, Xaçmaz, Şabran, Siyəzən; meyvəçilik (alma), tərəvəzçilik, turizm (Şahdağ, Nabran).
9. **Lənkəran-Astara:** Lənkəran, Astara, Masallı, Lerik, Yardımlı, Cəlilabad; çayçılıq, sitrusçuluq (mandarin, feyxoa), tərəvəzçilik.
10. **Mərkəzi Aran:** Mingəçevir, Yevlax, Ağdaş, Göyçay, Kürdəmir, Ucar, Zərdab; pambıqçılıq, taxılçılıq, narçılıq (Göyçay).
11. **Şirvan-Salyan:** Şirvan, Salyan, Neftçala, Biləsuvar; neft hasilatı, pambıqçılıq, balıqçılıq.
12. **Mil-Muğan:** İmişli, Beyləqan, Saatlı, Sabirabad; pambıqçılıq, şəkər çuğunduru (İmişli şəkər zavodu).
13. **Dağlıq Şirvan:** Şamaxı, İsmayıllı, Ağsu, Qobustan; üzümçülük, şərabçılıq, arıçılıq, xalçaçılıq (Lahıc).
14. **Naxçıvan iqtisadi rayonu:** Naxçıvan şəhəri və 7 rayonu; mineral sular (Sirab, Badamlı), travertin, duz, günəş enerjisi.
    `,
    keyFormulas: [
      {
            "formula": "\\text{Təbii artım} = \\text{Doğum sayı} - \\text{Ölüm sayı} \\quad (\\text{hər 1000 nəfərə / promillə})",
            "name": "Demoqrafik artım düsturu",
            "desc": "Əhalinin təbii çoxalma göstəricisi"
      }
],
    glossary: [
      {
            "term": "Urbanizasiya",
            "definition": "Şəhərlərin sayının, əhalisinin və şəhər həyat tərzinin cəmiyyətdə rolunun artması prosesi."
      },
      {
            "term": "Aqlomerasiya",
            "definition": "Böyük bir mərkəz şəhərin ətrafında sıx iqtisadi və nəqliyyat əlaqələri olan peyk qəsəbə və şəhərlər toplusu."
      }
],
    solvedExamples: [
      {
            "problem": "2021-ci il inzibati islahatına əsasən işğaldan azad edilmiş Kəlbəcər, Laçın və Zəngilan hansı yeni iqtisadi rayona daxildir?",
            "solution": "Bu rayonlar Azərbaycan Respublikası Prezidentinin 7 iyul 2021-ci il tarixli Fərmanı ilə yaradılmış Şərqi Zəngəzur iqtisadi rayonunun tərkibinə daxildirlər."
      }
],
    miniQuiz: [
      {
            "q": "Azərbaycan Respublikasında hazırda rəsmi olaraq neçə iqtisadi rayon mövcuddur?",
            "options": [
                  "10",
                  "11",
                  "14 iqtisadi rayon",
                  "20"
            ],
            "a": 2,
            "exp": "2021-ci il iyul fərmanına əsasən Azərbaycanda 14 iqtisadi rayon təsdiq olunmuşdur."
      },
      {
            "q": "Sitrus meyvəçiliyi (mandarin, portağal, feyxoa) və çayçılıq hansı iqtisadi rayonun əsas ixtisaslaşma sahəsidir?",
            "options": [
                  "Quba-Xaçmaz",
                  "Lənkəran-Astara",
                  "Mərkəzi Aran",
                  "Qarabağ"
            ],
            "a": 1,
            "exp": "Lənkəran-Astara rütubətli subtropik iqliminə görə sitrus və çayçılıq üzrə ixtisaslaşmışdır."
      }
]
  },

  {
    id: 'cografiya-10-1',
    subjectId: 'cografiya',
    grade: 10,
    unit: 'Bölmə 1: Dünyanın Siyasi Xəritəsi və Dövlət Quruluşları',
    unitOrder: 1,
    title: 'Siyasi xəritənin inkişafı, idarəetmə və dövlət quruluşu formaları',
    order: 1,
    readTimeMinutes: 18,
    difficulty: 2,
    summary: 'Dünyanın siyasi xəritəsinin formalaşma mərhələləri, suveren dövlətlər, idarəetmə formaları (respublika, monarxiya) və dövlət quruluşları (unitar, federativ).',
    theoryMarkdown: `
### Dünyanın Siyasi Xəritəsi və Dövlət Quruluşları

#### 1. Siyasi Xəritənin Formalaşma Mərhələləri
Dünyanın siyasi xəritəsi tarixi dövrlər ərzində dinamik şəkildə dəyişmişdir:
* **Qədim dövr (e.ə. V əsrədək):** Quldarlıq dövlətləri (Qədim Misir, Karfagen, Qədim Yunanıstan, Roma imperiyası).
* **Orta əsrlər dövrü (V - XV əsrlər):** Feodal dövlətləri, Böyük İpək yolu boyu imperiyalar, Səfəvilər, Osmanlı imperiyası, Böyük Britaniya.
* **Yeni dövr (XV əsrin sonu — 1914):** Böyük Coğrafi kəşflər, müstəmləkə imperiyalarının yaranması.
* **Ən yeni dövr (1914-cü ildən bu günədək):**
  - I və II Dünya müharibələrindən sonrakı dəyişikliklər.
  - 1960-cı il — "Afrika ili" (17 Afrika ölkəsi müstəqillik qazandı).
  - 1991-ci il — SSRİ-nin, Yuqoslaviyanın və Çexoslovakiyanın dağılması, yeni suveren dövlətlərin (o cümlədən müstəqil Azərbaycanın) yaranması.

#### 2. İdarəetmə Formaları
Dövlətlər ali hakimiyyətin təşkilinə görə iki yerə bölünür:
1. **Respublikalar (Dünya dövlətlərinin təxminən 75%-i):** Ali hakimiyyət orqanları xalq tərəfindən müəyyən müddətə seçilir.
   - *Prezident respublikaları:* ABŞ, Braziliya, Azərbaycan, Türkiyə.
   - *Parlament respublikaları:* Almaniya, İtaliya, Hindistan, İsrail.
   - *Qarışıq respublika:* Fransa.
2. **Monarxiyalar (Təxminən 30 dövlət):** Dövlət başçısının səlahiyyəti irsən keçir və müddətsizdir.
   - *Konstitusiyalı (məhdud) monarxiya:* Monarxın səlahiyyətləri qanunvericiliklə məhdudlaşır ("Monarx hökmranlıq edir, lakin idarə etmir") — Böyük Britaniya, Yaponiya, İsveç, Norveç, İspaniya.
   - *Mütləq monarxiya:* Monarxın təkbaşına mütləq səlahiyyəti var — Səudiyyə Ərəbistanı, Oman, Qətər.
   - *Teokratik monarxiya:* Dövlət və din başçısı eyni şəxsdir — Vatikan, Səudiyyə Ərəbistanı.

#### 3. Dövlət Ərazi Quruluşu
* **Unitar dövlətlər (Bütöv):** Ölkə daxilində vahid konstitusiya, vahid vətəndaşlıq və vahid ali orqanlar sistemi mövcuddur (Azərbaycan, Fransa, Yaponiya, Türkiyə).
* **Federativ dövlətlər:** Tərkibində müəyyən dərəcədə siyasi və qanunvericilik müstəqilliyi olan subyektlər (ştatlar, vilayətlər, respublikalar) birləşir (Rusiya, ABŞ, Almaniya, Hindistan, Braziliya, Kanada).
* **Konfederasiya:** Dövlətlərin müəyyən məqsədlər üçün müvəqqəti ittifaqı (tarixən İsveçrə konfederasiya olmuşdur, indi federasiyadır).
    `,
    keyFormulas: [
      {
            "formula": "\\text{Dövlət formaları} = \\text{İdarəetmə (Respublika / Monarxiya)} + \\text{Ərazi quruluşu (Unitar / Federativ)}",
            "name": "Dövlət təsnifatı",
            "desc": "Siyasi coğrafiyanın fundamental bölüşdürülməsi"
      }
],
    glossary: [
      {
            "term": "Suveren dövlət",
            "definition": "Daxili və xarici siyasətində tam müstəqil olan beynəlxalq hüququn subyekti."
      },
      {
            "term": "Konstitusiyalı monarxiya",
            "definition": "Dövlət başçısı monarx olsa da, real qanunverici hakimiyyətin parlamentdə olduğu idarəetmə forması (Böyük Britaniya, Yaponiya)."
      }
],
    solvedExamples: [
      {
            "problem": "Böyük Britaniya və Yaponiya idarəetmə forması və ərazi quruluşuna görə necə təsnif olunur?",
            "solution": "Hər iki dövlət idarəetmə formasına görə konstitusiyalı monarxiya, ərazi quruluşuna görə isə unitar dövlətdir."
      }
],
    miniQuiz: [
      {
            "q": "Tarixdə hansı il müstəmləkə zülmündən 17 dövlətin azad olunması ilə 'Afrika ili' elan edilmişdir?",
            "options": [
                  "1945",
                  "1960-cı il",
                  "1991",
                  "2000"
            ],
            "a": 1,
            "exp": "1960-cı ildə 17 Afrika dövləti müstəqilliyə qovuşaraq 'Afrika ili' adını almışdır."
      },
      {
            "q": "Aşağıdakılardan hansı federativ dövlət quruluşuna malikdir?",
            "options": [
                  "Fransa",
                  "Azərbaycan",
                  "Yaponiya",
                  "Almaniya"
            ],
            "a": 3,
            "exp": "Almaniya Federativ Respublikası 16 federal torpaqdan ibarət federasiyadır."
      }
]
  },

  {
    id: 'cografiya-10-2',
    subjectId: 'cografiya',
    grade: 10,
    unit: 'Bölmə 2: Qlobal Təbii Ehtiyatlar və Resurs Təminatı',
    unitOrder: 2,
    title: 'Mineral, torpaq, su, meşə ehtiyatları və resurs təminatı göstəricisi',
    order: 2,
    readTimeMinutes: 18,
    difficulty: 3,
    summary: 'Tükənən və tükənməyən sərvətlər, mineral xammal zolaqları, şirin su çatışmazlığı, meşə qurşaqları (şimal və cənub) və resurs təminatı hesablama düsturu.',
    theoryMarkdown: `
### Qlobal Təbii Ehtiyatlar və Resurs Təminatı

#### 1. Təbii Sərvətlərin Təsnifatı
Təbii ehtiyatlar tükənmə dərəcəsinə görə bölünür:
1. **Tükənməyən ehtiyatlar:** Günəş enerjisi, külək, qabarma-çəkilmə, dəniz dalğaları, geotermal enerji və iqlim resursları.
2. **Tükənən ehtiyatlar:**
   - *Bərpa olunan:* Torpaq, bioloji (bitki və heyvanlar), su resursları (təbii dövranla yenilənir).
   - *Bərpa olunmayan:* Mineral ehtiyatlar (faydalı qazıntılar — neft, qaz, kömür, filizlər).

#### 2. Resurs Təminatı Anlayışı və Hesablanması
Resurs təminatı — təbii ehtiyatların mövcud ehtiyatı ilə onlardan istifadə miqyası arasındakı nisbətdir. İki üsulla hesablanır:
1. **İllərlə (ehtiyatın neçə ilə çatacağı):**
   $$R = rac{E}{H}$$
   Burada: $R$ — resurs təminatı (il), $E$ — kəşf edilmiş ümumi ehtiyat, $H$ — illik hasilat (istehlak) həcmi.
2. **Adambaşına düşən ehtiyat miqdarı ilə:**
   $$R = rac{E}{	ext{Əhali}}$$

#### 3. Əsas Təbii Ehtiyat Növləri
* **Mineral (Yanacaq) Ehtiyatları:**
  - *Neft və Təbii Qaz:* Fars körfəzi hövzəsi (Səudiyyə Ərəbistanı, İraq, İran, BƏƏ, Qətər), Qərbi Sibir (Rusiya), Xəzər dənizi hövzəsi, Meksika körfəzi, Şimal dənizi.
  - *Daş kömür:* Rusiya (Kuzbas), ABŞ (Appalaç), Çin, Avstraliya, CAR, Almaniya (Rur).
* **Su Ehtiyatları:** Planetin şirin su ehtiyatı ümumi suyun cəmi $2.5\%$-ni təşkil edir və onun da $70\%$-ə qədəri buzlaqlardadır (Antarktida və Qrenlandiya). Ən böyük şirin su çay axını Braziliya, Rusiya, Kanada, ABŞ və Çindədir.
* **Meşə Ehtiyatları:**
  - *Şimal meşə qurşağı (İnəyarpaqlı tayqa):* Rusiya, Kanada, İsveç, Finlandiya, ABŞ.
  - *Cənub meşə qurşağı (Rütubətli ekvatorial və tropik):* Braziliya (Amazon meşələri), Konqo, İndoneziya.
    `,
    keyFormulas: [
      {
            "formula": "R = \frac{E}{H} \\quad (\text{il}) \\quad \text{və ya} \\quad R = \frac{E}{\text{Əhali}} \\quad (\text{vahidin nəfərə nisbəti})",
            "name": "Resurs təminatı düsturu",
            "desc": "Sərvətin mövcud ehtiyatı və hasilat sürəti arasındakı nisbət"
      }
],
    glossary: [
      {
            "term": "Resurs təminatı",
            "definition": "Ölkənin və ya dünyanın təbii ehtiyatlarla təmin olunma dərəcəsini göstərən iqtisadi-coğrafi göstərici."
      },
      {
            "term": "Təbii resurs potensialı",
            "definition": "Müəyyən ərazidə təsərrüfat fəaliyyətində istifadə oluna bilən bütün təbii sərvətlərin məcmusu."
      }
],
    solvedExamples: [
      {
            "problem": "Bir ölkənin kəşf olunmuş neft ehtiyatı 45 milyard tondur. İllik hasilat 300 milyon ton olarsa, bu ölkənin neftlə resurs təminatı neçə ildir?",
            "solution": "R = E / H = 45 000 000 000 ton / 300 000 000 ton/il = 150 il. Ölkənin neft ehtiyatı hasilatın bu tempi ilə 150 ilə yetəcəkdir."
      }
],
    miniQuiz: [
      {
            "q": "Aşağıdakılardan hansı tükənməyən təbii ehtiyatlar qrupuna daxildir?",
            "options": [
                  "Daş kömür",
                  "Qabarma-çəkilmə və günəş enerjisi",
                  "Meşə ağacları",
                  "Şirin su"
            ],
            "a": 1,
            "exp": "Günəş, külək və qabarma-çəkilmə enerjisi planetin tükənməyən təbii sərvətləridir."
      },
      {
            "q": "Dünyanın ən zəngin neft və qaz ehtiyatlarına malik Fars körfəzi hövzəsinə hansı ölkə daxildir?",
            "options": [
                  "Səudiyyə Ərəbistanı",
                  "Monqolustan",
                  "İsveç",
                  "Ukrayna"
            ],
            "a": 0,
            "exp": "Səudiyyə Ərəbistanı Fars körfəzində dünyanın ən böyük neft ehtiyatlarına malik ölkələrindəndir."
      }
]
  },

  {
    id: 'cografiya-10-3',
    subjectId: 'cografiya',
    grade: 10,
    unit: 'Bölmə 3: Qlobal Demoqrafik Proseslər və Məskunlaşma',
    unitOrder: 3,
    title: 'Təkrar istehsal tipləri, demoqrafik siyasət, miqrasiya və urbanizasiya',
    order: 3,
    readTimeMinutes: 19,
    difficulty: 2,
    summary: 'Əhalinin təkrar istehsalının I və II tipləri, \'demoqrafik partlayış\' və \'demoqrafik qocalma\', qlobal miqrasiya axınları, meqalopolislər və yalançı urbanizasiya.',
    theoryMarkdown: `
### Qlobal Demoqrafik Proseslər və Məskunlaşma

#### 1. Əhalinin Təkrar İstehsalı Tipləri
Dünyada əhalinin çoxalması (doğum, ölüm və təbii artım nisbəti) iki əsas tipə bölünür:
1. **I tip təkrar istehsal ("Demoqrafik qış / qocalma"):**
   - Aşağı doğum, aşağı ölüm və aşağı təbii artım ($<10‰$ və ya mənfi).
   - Nəticə: Əhali qocalır (ahılların xüsusi çəkisi artır), bəzi ölkələrdə depopulyasiya (əhalinin azalması) baş verir.
   - Ölkələr: Qərbi Avropa (Almaniya, İtaliya), Yaponiya, Şimali Amerika.
   - *Demoqrafik siyasət:* Doğumu həvəsləndirmək (uşaq müavinətləri, vergi güzəştləri).
2. **II tip təkrar istehsal ("Demoqrafik partlayış"):**
   - Yüksək doğum, nisbətən aşağı ölüm və çox yüksək təbii artım ($>15-20‰$).
   - Nəticə: Əhali sürətlə artır, uşaq və gənclərin payı yüksəkdir, işsizlik və ərzaq problemi yaranır.
   - Ölkələr: Afrika (Nigeriya, Çad), Cənubi Asiya (Hindistan, Pakistan), Yaxın Şərq.
   - *Demoqrafik siyasət:* Doğumu məhdudlaşdırmaq və ailə planlaşdırılması (məsələn, Çində vaxtilə tətbiq olunmuş 'bir ailə - bir uşaq' siyasəti).

#### 2. Beynəlxalq Miqrasiya
* Əmək miqrasiyasının əsas cəlb mərkəzləri: Qərbi Avropa (Almaniya, Fransa, Böyük Britaniya), Şimali Amerika (ABŞ, Kanada), Fars körfəzi ölkələri (Səudiyyə Ərəbistanı, BƏƏ).
* "Beyin axını" (Brain drain): Yüksək ixtisaslı alimlərin və mühəndislərin inkişaf etməkdə olan ölkələrdən inkişaf etmiş dövlətlərə miqrasiyası.

#### 3. Urbanizasiya və Formaları
* **Urbanizasiya:** Şəhərlərin sayının və şəhər əhalisinin xüsusi çəkisinin artmasıdır (Dünya üzrə urbanizasiya səviyyəsi 56%-i keçmişdir).
* **Meqalopolis (Nəhəng şəhər zolağı):** Onlarla aqlomerasiyanın qovuşması nəticəsində yaranan yüzlərlə kilometrlik urbanizasiya zolağıdır:
  - *Tokaydo (Tokaido):* Dünyanın ən böyüyü (Tokio, Naqoya, Osaka — 60 milyondan çox əhali).
  - *BosVaş (BosWash):* ABŞ-ın şimal-şərq sahilində (Boston, Nyu-York, Filadelfiya, Baltimor, Vaşinqton).
  - *Çipitts (ChiPitts):* Böyük Göllər sahili (Çikaqo, Detroyt, Pittsburq).
  - *Göy Banan:* Qərbi Avropada (London - Benilüks - Reyn boyu - Milan).
* **Yalançı urbanizasiya (Psevdo-urbanizasiya):** İnkişaf etməkdə olan ölkələrdə (Latın Amerikası, Asiya) kəndlilərin işsizlikdən şəhərlərə axışması, lakin iş və mənzillə təmin olunmayaraq şəhər kənarında gecəqondularda (favela) məskunlaşmasıdır.
    `,
    keyFormulas: [
      {
            "formula": "\text{Təbii artım (‰)} = \frac{\text{Doğulanlar} - \text{Ölənlər}}{\text{Əhalinin orta sayı}} \times 1000",
            "name": "Təbii artım promillə düsturu",
            "desc": "Əhalinin hər 1000 nəfərinə düşən xalis artımı"
      }
],
    glossary: [
      {
            "term": "Demoqrafik partlayış",
            "definition": "İnkişaf etməkdə olan ölkələrdə ölümün kəskin azalması fonunda doğumun yüksək qalması nəticəsində əhalinin sıçrayışlı artımı."
      },
      {
            "term": "Meqalopolis",
            "definition": "Bir-biri ilə sıx bitişən nəhəng şəhər aqlomerasiyaları sistemi (Tokaydo, BosVaş)."
      }
],
    solvedExamples: [
      {
            "problem": "İnkişaf etmiş Qərbi Avropa ölkələrində əhali təkrar istehsalının hansı tipi xarakterikdir və orada demoqrafik siyasət hansı istiqamətdə aparılır?",
            "solution": "I tip təkrar istehsal xarakterikdir (aşağı doğum, əhalinin qocalması). Buna görə dövlət gənc ailələrə təşviqlər və uşaq müavinətləri verərək doğumu artırmaq siyasəti yeridir."
      }
],
    miniQuiz: [
      {
            "q": "Dünyanın ən böyük meqalopolisi sayılan və Tokio, Osaka, Naqoya aqlomerasiyalarını birləşdirən zolaq hansıdır?",
            "options": [
                  "BosVaş",
                  "Tokaydo",
                  "Çipitts",
                  "San-San"
            ],
            "a": 1,
            "exp": "Tokaydo meqalopolisi Yaponiyada 60 milyondan çox sakini birləşdirən nəhəng zolaqdır."
      },
      {
            "q": "Yüksək doğum və sürətli əhali artımı ilə fərqlənən 'II tip təkrar istehsal' hansı region üçün daha xarakterikdir?",
            "options": [
                  "Qərbi Avropa",
                  "Yaponiya",
                  "Afrika və Cənubi Asiya",
                  "Şimali Avropa"
            ],
            "a": 2,
            "exp": "Afrika və Cənubi Asiya yüksək doğum və gənc əhali strukturuna malik ikinci tip ölkələrdir."
      }
]
  },

  {
    id: 'cografiya-10-4',
    subjectId: 'cografiya',
    grade: 10,
    unit: 'Bölmə 4: Dünya Təsərrüfatı və Elmi-Texniki İnqilab (ETİ)',
    unitOrder: 4,
    title: 'Beynəlxalq coğrafi əmək bölgüsü, ETİ və təsərrüfatın strukturu',
    order: 4,
    readTimeMinutes: 18,
    difficulty: 3,
    summary: 'Dünya təsərrüfatının yaranma mərhələləri, Beynəlxalq Coğrafi Əmək Bölgüsü (BCƏB), Elmi-Texniki İnqilabın (ETİ) 4 tərkib hissəsi, post-industrial cəmiyyət və xidmət sferası.',
    theoryMarkdown: `
### Dünya Təsərrüfatı və Elmi-Texniki İnqilab

#### 1. Dünya Təsərrüfatı və Beynəlxalq Coğrafi Əmək Bölgüsü
* **Dünya təsərrüfatı:** Beynəlxalq iqtisadi münasibətlər sistemi ilə bir-biri ilə sıx bağlanan milli təsərrüfatların tarixi birliyidir.
* **Beynəlxalq Coğrafi Əmək Bölgüsü (BCƏB):** Müxtəlif ölkələrin müəyyən məhsul və ya xidmətlərin istehsalı üzrə ixtisaslaşması və onların beynəlxalq mübadiləsidir. İxtisaslaşmanın yaranma səbəbləri:
  - Təbii sərvətlər və əlverişli coğrafi mövqe.
  - Tarixi ənənələr və ixtisaslı işçi qüvvəsi.
  - Elmi-texniki nailiyyətlər və texnoloji üstünlük.
* **Məsələn:** Səudiyyə Ərəbistanı neft hasilatı, Yaponiya elektronika və avtomobil, İsveçrə saat və bank işi, Azərbaycan neft-qaz və neft-kimya sənayesi üzrə ixtisaslaşmışdır.

#### 2. Elmi-Texniki İnqilab (ETİ)
XX əsrin ortalarında başlamış cəmiyyətin məhsuldar qüvvələrinin elmin bilavasitə istehsal qüvvəsinə çevrilməsi əsasında köklü keyfiyyət sıçrayışıdır.
* **ETİ-nin 4 tərkib hissəsi:**
  1. *Elm:* Elmtutumlu sahələrin, nanotexnologiyaların, biotexnologiya və süni intellektin ön plana çıxması.
  2. *Texnika və texnologiya:* Avtomatlaşdırma, robototexnika, mikroelektronika, lazer texnologiyaları.
  3. *İstehsalat:* Əmək məhsuldarlığının kəskin artması, enerjiyə və materiala qənaət edən texnologiyalar.
  4. *İdarəetmə:* Kibernetika, informasiya şəbəkələri, rəqəmsal logistika.

#### 3. Təsərrüfatın Sahəvi Strukturu
1. **Aqrar struktur (İlkin):** Kənd təsərrüfatı üstünlük təşkil edir (Əfqanıstan, Somali, Efiopiya).
2. **Sənaye strukturu (İndustrial):** Ağır sənaye, metallurgiya, maşınqayırma aparıcı rola malikdir (Çin, Rusiya, Ukrayna).
3. **Postindustrial struktur (İnformasiya cəmiyyəti):** ÜDM-də və məşğulluqda **xidmət sahələrinin payı $60-75\%$-dən çoxdur** (ABŞ, Böyük Britaniya, Almaniya, Yaponiya).
    `,
    keyFormulas: [
      {
            "formula": "\text{BCƏB} \\implies \text{Milli İxtisaslaşma} + \text{Beynəlxalq Əmtəə Mübadiləsi}",
            "name": "BCƏB prinsipi",
            "desc": "Ölkələrarası iqtisadi inteqrasiyanın təməl mexanizmi"
      }
],
    glossary: [
      {
            "term": "Beynəlxalq Coğrafi Əmək Bölgüsü (BCƏB)",
            "definition": "Ayrı-ayrı ölkələrin müəyyən əmtəə və ya xidmət növlərinin istehsalı üzrə ixtisaslaşması."
      },
      {
            "term": "Postindustrial cəmiyyət",
            "definition": "İqtisadiyyatında elm, informasiya texnologiyaları və xidmət sektorunun maddi istehsaldan üstün olduğu inkişaf mərhələsi."
      }
],
    solvedExamples: [
      {
            "problem": "İsveçrənin dünya təsərrüfatında dəqiq saatlar, dərman və beynəlxalq bankçılıq üzrə tanınması hansı iqtisadi hadisənin nəticəsidir?",
            "solution": "Bu, Beynəlxalq Coğrafi Əmək Bölgüsünün (BCƏB) birbaşa təzahürüdür; ölkə özünün yüksək ixtisaslı ənənələri və kapital potensialı sayəsində həmin sahələrdə beynəlxalq miqyasda ixtisaslaşmışdır."
      }
],
    miniQuiz: [
      {
            "q": "Postindustrial inkişaf mərhələsində olan dövlətlərdə iqtisadiyyatın hansı sferası üstünlük təşkil edir?",
            "options": [
                  "Kənd təsərrüfatı",
                  "Hasilat sənayesi",
                  "Xidmət və informasiya sferası (ÜDM-də 60-70%-dən çox)",
                  "Metallurgiya"
            ],
            "a": 2,
            "exp": "Postindustrial dövlətlərdə təhsil, maliyyə, İKT və xidmət sahələri iqtisadiyyatın əsas sütunudur."
      },
      {
            "q": "Aşağıdakılardan hansı Elmi-Texniki İnqilabın (ETİ) 4 əsas tərkib hissəsindən biridir?",
            "options": [
                  "Elm, Texnika, İstehsalat, İdarəetmə",
                  "Yalnız ordu",
                  "Yalnız kənd təsərrüfatı",
                  "Faydalı qazıntılar"
            ],
            "a": 0,
            "exp": "ETİ dörd qarşılıqlı əlaqəli hissədən — Elm, Texnika, İstehsalat və İdarəetmədən ibarətdir."
      }
]
  },

  {
    id: 'cografiya-10-5',
    subjectId: 'cografiya',
    grade: 10,
    unit: 'Bölmə 5: Qlobal Sənaye və Kənd Təsərrüfatı Coğrafiyası',
    unitOrder: 5,
    title: 'Yanacaq-energetika, metallurgiya, maşınqayırma və aqrar sektor',
    order: 5,
    readTimeMinutes: 19,
    difficulty: 3,
    summary: 'Qlobal enerji balansı, elektrik stansiyaları (İES, SES, AES, alternativlər), \'yaşıl inqilab\', qlobal taxılçılıq (buğda, çəltik, qarğıdalı) və ətlik-südlük heyvandarlıq.',
    theoryMarkdown: `
### Qlobal Sənaye və Kənd Təsərrüfatı Coğrafiyası

#### 1. Qlobal Yanacaq-Energetika Sənayesi
* **Elektroenergetika:** Dünyada istehsal olunan elektrik enerjisinin:
  - Təxminən $60-65\%$-i **İES-lərdə** (İstilik elektrik stansiyaları — kömür, qaz, mazut).
  - Təxminən $16-17\%$-i **SES-lərdə** (Su elektrik stansiyaları — Norveç elektrik enerjisinin $96\%$-dən çoxunu SES-lərdə alır; Braziliya, Kanada, Çin — "Üç dərə" SES dünyanın ən böyüyüdür).
  - Təxminən $10\%$-i **AES-lərdə** (Atom elektrik stansiyaları — Fransa elektrik enerjisinin $70\%$-ə qədərini AES-lərdə hasil edir).
  - Qalan hissəsi alternativ (günəş, külək, geotermal — İslandiya geotermal enerjidən geniş istifadə edir).

#### 2. Metallurgiya və Maşınqayırma
* **Qara metallurgiya:** Dəmir filizi hasilatı və polad əritmə (Çin liderdir — dünya poladının $50\%$-dən çoxunu istehsal edir; Yaponiya, Hindistan, ABŞ).
* **Əlvan metallurgiya:** Boksit və alüminium (Avstraliya, Qvineya, Braziliya, Çin, Rusiya), mis sənayesi (Çili — dünyada 1-ci, Peru, Zambiya — "Mis qurşağı").
* **Maşınqayırma:** Bütün sənaye məhsulunun dəyərinin $1/3$-ni verir. Əsas mərkəzlər: Şimali Amerika (ABŞ), Qərbi Avropa (Almaniya), Şərqi və Cənub-Şərqi Asiya (Yaponiya, Çin, Cənubi Koreya).

#### 3. Qlobal Kənd Təsərrüfatı və "Yaşıl İnqilab"
* **"Yaşıl inqilab":** XX əsrin ikinci yarısında inkişaf etməkdə olan ölkələrdə yüksək məhsuldar toxum sortlarının yaradılması, suvarma və kimyalaşdırma sayəsində ərzaq təminatının kəskin artmasıdır.
* **Dünyanın Üç Əsas Çörək Bitkisi (Taxılçılıq):**
  1. *Buğda:* Əsas ərzaq bitkisidir. Mülayim və subtropik qurşaqlar (Çin, Hindistan, Rusiya, ABŞ, Kanada, Fransa, Avstraliya).
  2. *Çəltik (Düyü):* Musson iqlimi, rütubətli və isti subtropik/tropik zonalar (Dünya çəltik istehsalının $90\%$-i Asiyadadır: Çin, Hindistan, İndoneziya, Vyetnam).
  3. *Qarğıdalı:* Yem və texniki bitkidir (Lider: ABŞ — "Qarğıdalı qurşağı", Braziliya, Çin).
* **Heyvandarlıq:**
  - *İri buynuzlu mal-qara:* Hindistan (dünyada baş sayına görə 1-ci, lakin dini inanclara görə ət üçün istifadə olunmur), Braziliya, ABŞ, Çin.
  - *Qoyunçuluq:* Avstraliya və Yeni Zelandiya (merinos qoyunları, zərif yun), Çin.
    `,
    keyFormulas: [
      {
            "formula": "\text{Qlobal Taxıl Üçlüyü} = \text{Buğda} + \text{Çəltik (Düyü)} + \text{Qarğıdalı}",
            "name": "Taxıl istehsalının əsas dayaqları",
            "desc": "Bəşəriyyətin kalori tələbatının böyük hissəsini ödəyən 3 bitki"
      }
],
    glossary: [
      {
            "term": "Yaşıl inqilab",
            "definition": "Kənd təsərrüfatında seleksiya, suvarma və mexanikləşdirmə vasitəsilə məhsuldarlığın yüksəldilməsi."
      },
      {
            "term": "İES, SES, AES",
            "definition": "İstilik, su və atom enerjisindən istifadə edərək elektrik hasil edən stansiyalar."
      }
],
    solvedExamples: [
      {
            "problem": "Elektrik enerjisi istehsalında atom stansiyalarının (AES) xüsusi çəkisinə görə dünyada birinci yerdə duran ölkə hansıdır?",
            "solution": "Fransa Respublikası; ölkədə elektrik enerjisinin təxminən 70%-i AES-lərdə hasil edilir."
      }
],
    miniQuiz: [
      {
            "q": "Dünya çəltik (düyü) məhsulunun təxminən 90%-i hansı coğrafi regionda yetişdirilir?",
            "options": [
                  "Şimali Amerika",
                  "Asiya (Şərqi, Cənub və Cənub-Şərqi Asiya)",
                  "Avropa",
                  "Avstraliya"
            ],
            "a": 1,
            "exp": "Çəltik yüksək istilik və bol su tələb etdiyinə görə Musson Asiyasında yetişdirilir."
      },
      {
            "q": "Elektrik enerjisinin 96%-dən çoxunu SES-lərdə (Su elektrik stansiyalarında) əldə edən Avropa ölkəsi hansıdır?",
            "options": [
                  "Almaniya",
                  "Norveç",
                  "Böyük Britaniya",
                  "Polşa"
            ],
            "a": 1,
            "exp": "Norveç zəngin və gur axan dağ çaylarının bol enerjisindən istifadə edərək elektriki SES-lərdə hasil edir."
      }
]
  },

  {
    id: 'cografiya-11-1',
    subjectId: 'cografiya',
    grade: 11,
    unit: 'Bölmə 1: Beynəlxalq Nəqliyyat Sistemi və Ticarət Dəhlizləri',
    unitOrder: 1,
    title: 'Dünya dəniz yolları, strateji boğazlar və beynəlxalq tranzit dəhlizləri',
    order: 1,
    readTimeMinutes: 19,
    difficulty: 3,
    summary: 'Dəniz ticarət yolları, strateji boğazlar və kanallar (Süveyş, Panama, Hörmüz, Malakka), konteyner limanları, Şimal-Cənub, TRACECA və Orta Dəhliz.',
    theoryMarkdown: `
### Beynəlxalq Nəqliyyat Sistemi və Dəhlizlər

#### 1. Dünya Dəniz Nəqliyyatı və Strateji Keçidlər
Dəniz nəqliyyatı beynəlxalq yük dövriyyəsinin $80\%$-ə qədərini təmin edir və ən ucuz daşıma növüdür.
* **Mühüm Beynəlxalq Kanallar:**
  - **Süveyş kanalı (Misir):** Aralıq dənizi ilə Qırmızı dənizi (və Hind okeanını) birləşdirir. Avropa ilə Asiya arasındakı dəniz yolunu Afrika qitəsini dolanmaqla müqayisədə 8-10 min km qısaldır.
  - **Panama kanalı (Panama):** Atlantik və Sakit okeanlarını birləşdirir. Şlüzlü sistemə malikdir.
  - **Kil kanalı (Almaniya):** Şimal dənizi ilə Baltik dənizini birləşdirir.
* **Dünya İqtisadiyyatının Strateji Boğazları ("Boğucu nöqtələr"):**
  - **Hörmüz boğazı:** Fars körfəzini Ərəbistan dənizi ilə birləşdirir; dünya dəniz neft daşımalarının $20-30\%$-i bu dar boğazdan keçir.
  - **Malakka boğazı:** Hind və Sakit okeanları arasında; Şərqi Asiyaya (Çin, Yaponiya) gedən əsas ticarət qapısıdır.
  - **Bosfor və Dardanel boğazları (Türkiyə):** Qara dənizlə Aralıq dənizini birləşdirir.
  - **Cəbəllütariq və Babülməndəb boğazları.**

#### 2. Ən Böyük Dəniz Limanları
Dünyanın ən böyük konteyner limanları Asiyada cəmlənmişdir: **Şanxay (dünyada 1-ci)**, Sinqapur, Ninbo-Çjouşan, Şençjen, Busan. Avropada ən böyük liman Niderlanddakı **Rotterdam limanıdır**.

#### 3. Beynəlxalq Nəqliyyat Dəhlizləri və Azərbaycanın Tranzit Rolu
Azərbaycan strateji coğrafi mövqeyindən istifadə edərək Avrasiyanın əsas logistika qovşağına çevrilmişdir:
* **Şimal-Cənub dəhlizi:** Rusiya - Azərbaycan - İran - Hindistan (Fars körfəzi) marşrutu.
* **TRACECA (Tarixi İpək Yolu):** Avropa - Qafqaz - Asiya nəqliyyat dəhlizi.
* **Orta Dəhliz (Transxəzər Beynəlxalq Nəqliyyat Marşrutu):** Çin - Qazaxıstan - Xəzər dənizi - Ələt Beynəlxalq Limanı - Bakı-Tbilisi-Qars dəmir yolu - Türkiyə - Avropa.
* **Zəngəzur Dəhlizi:** Azərbaycanın əsas hissəsini Naxçıvan Muxtar Respublikası və Türkiyə ilə birbaşa birləşdirəcək strateji nəqliyyat və kommunikasiya xəttidir.
    `,
    keyFormulas: [
      {
            "formula": "\text{Tranzit Dəhliz} = \text{Avtomobil} + \text{Dəmir yolu} + \text{Dəniz bərələri (Ro-Ro)} + \text{Boru kəmərləri}",
            "name": "Multimodal nəqliyyat qovşağı",
            "desc": "Fərqli nəqliyyat növlərinin inteqrasiyası"
      }
],
    glossary: [
      {
            "term": "Konteynerləşdirmə",
            "definition": "Yüklərin standartlaşdırılmış metal konteynerlərlə daşınması sayəsində aşırılmanın sürətləndirilməsi."
      },
      {
            "term": "Orta Dəhliz",
            "definition": "Çindən Avropaya Xəzər dənizi və Azərbaycan üzərindən keçən ən təhlükəsiz və qısa quru-dəniz yolu."
      }
],
    solvedExamples: [
      {
            "problem": "Süveyş kanalının açılması dünya dəniz ticarətində hansı inqilabi dəyişikliyə səbəb olmuşdur?",
            "solution": "Süveyş kanalı Aralıq dənizi ilə Qırmızı dənizi birləşdirərək gəmilərin Afrikanın cənubundakı Ümid burnunu dolanması zərurətini aradan qaldırmış və Avropa ilə Asiya arasındakı məsafəni 8 000 km-dən çox qısaltmışdır."
      }
],
    miniQuiz: [
      {
            "q": "Fars körfəzindən dünya bazarlarına çıxarılan neft tankerlərinin keçdiyi ən mühüm strateji boğaz hansıdır?",
            "options": [
                  "Malakka boğazı",
                  "Hörmüz boğazı",
                  "Bosfor",
                  "Berinq boğazı"
            ],
            "a": 1,
            "exp": "Hörmüz boğazı dünya dəniz neft daşımalarının əsas tranzit arteriyasıdır."
      },
      {
            "q": "Bakı-Tbilisi-Qars dəmir yolu və Ələt Beynəlxalq Dəniz Ticarət Limanı hansı qlobal dəhlizin mühüm tərkib hissəsidir?",
            "options": [
                  "Şimal Qütb Dəhlizi",
                  "Orta Dəhliz (Transxəzər marşrutu)",
                  "Pan-Amerika magistralı",
                  "Trans-Afrika yolu"
            ],
            "a": 1,
            "exp": "Bakı-Tbilisi-Qars və Ələt limanı Transxəzər Beynəlxalq Nəqliyyat Dəhlizinin (Orta Dəhliz) əsas halqalarıdır."
      }
]
  },

  {
    id: 'cografiya-11-2',
    subjectId: 'cografiya',
    grade: 11,
    unit: 'Bölmə 2: Beynəlxalq İqtisadi İnteqrasiya və Qlobal Təşkilatlar',
    unitOrder: 2,
    title: 'BMT, Avropa İttifaqı, OPEC, Türk Dövlətləri Təşkilatı və İƏT',
    order: 2,
    readTimeMinutes: 18,
    difficulty: 2,
    summary: 'Regional və sahəvi iqtisadi birliklər, Avropa İttifaqı (Aİ), USMCA, OPEC, ASEAN, Qoşulmama Hərəkatı və Türk Dövlətləri Təşkilatının (TDT) geosiyasi rolu.',
    theoryMarkdown: `
### Beynəlxalq İqtisadi İnteqrasiya və Qlobal Təşkilatlar

#### 1. İqtisadi İnteqrasiya Nədir?
İqtisadi inteqrasiya — ayrı-ayrı dövlətlərin milli təsərrüfatlarının bir-birinə yaxınlaşması, gömrük və ticarət maneələrinin aradan qaldırılması və vahid iqtisadi məkanın yaradılması prosesidir. Mərhələləri:
1. Azad ticarət zonası (gömrük rüsumlarının ləğvi).
2. Gömrük ittifaqı (üçüncü ölkələrə qarşı vahid gömrük tarifi).
3. Vahid daxili bazar (malların, xidmətlərin, kapitalın və işçi qüvvəsinin sərbəst hərəkəti).
4. İqtisadi və valyuta ittifaqı (vahid valyuta — Avro və ümumi iqtisadi siyasət).

#### 2. Əsas Regional və Qlobal Birliklər
* **Birləşmiş Millətlər Təşkilatı (BMT):** 1945-ci ildə yaradılmış universal qlobal təşkilatdır (193 üzv). Məqsədi dünyada sülh və təhlükəsizliyi təmin etməkdir (Təhlükəsizlik Şurasının 5 daimi üzvü: ABŞ, Rusiya, Çin, Böyük Britaniya, Fransa).
* **Avropa İttifaqı (Aİ):** Dünyanın ən yüksək inteqrasiya olunmuş iqtisadi və siyasi birliyidir (27 dövlət). Vahid valyuta zonası (Avrozon) və Şengen vizasız məkanı mövcuddur.
* **USMCA (keçmiş NAFTA):** Şimali Amerika Azad Ticarət zonası (ABŞ, Kanada, Meksika).
* **ASEAN:** Cənub-Şərqi Asiya Dövlətləri Assosiasiyası (Sinqapur, İndoneziya, Malayziya və s.).
* **OPEC:** Neft İxrac Edən Ölkələr Təşkilatı (Səudiyyə Ərəbistanı, İraq, BƏƏ, Küveyt və s. — qlobal neft hasilatını və qiymətləri tənzimləyir; "OPEC+" formatında Azərbaycan da iştirak edir).

#### 3. Azərbaycanın Fəal Üzv Olduğu Təşkilatlar
* **Türk Dövlətləri Təşkilatı (TDT):** Azərbaycan, Türkiyə, Qazaxıstan, Özbəkistan, Qırğızıstan (Müşahidəçilər: Macarıstan, Türkmənistan). Türk dünyasının siyasi, iqtisadi, hərbi və mədəni inteqrasiyasını təmin edir.
* **Qoşulmama Hərəkatı:** BMT-dən sonra dünyanın ikinci ən böyük siyasi təsisatıdır (120 dövlət). Azərbaycan 2019-2023-cü illərdə təşkilata uğurla sədrlik etmişdir.
* **İslam Əməkdaşlıq Təşkilatı (İƏT), GUAM, İqtisadi Əməkdaşlıq Təşkilatı (ECO).**
    `,
    keyFormulas: [
      {
            "formula": "\text{İnteqrasiya mərhələləri} = \text{Azad ticarət} \rightarrow \text{Gömrük ittifaqı} \rightarrow \text{Vahid bazar} \rightarrow \text{Valyuta ittifaqı}",
            "name": "İqtisadi inteqrasiya nərdivanı",
            "desc": "Dövlətlərarası iqtisadi birləşmənin təkamülü"
      }
],
    glossary: [
      {
            "term": "İnteqrasiya",
            "definition": "Ayrı-ayrı dövlətlərin iqtisadiyyatlarının birləşməsi və qarşılıqlı asılılığı prosesi."
      },
      {
            "term": "Şengen zonası",
            "definition": "Avropa İttifaqının əksər ölkələri arasında daxili sərhəd nəzarətinin ləğv edildiyi vahid vizasız məkan."
      }
],
    solvedExamples: [
      {
            "problem": "Türk Dövlətləri Təşkilatının (TDT) əsas məqsədi və təsisçi dövlətləri hansılardır?",
            "solution": "TDT-nin məqsədi türkdilli dövlətlər arasında hərtərəfli əməkdaşlıq, nəqliyyat və ticarət əlaqələrini dərinləşdirməkdir. 2009-cu ildə Naxçıvan Sazişi ilə əsası qoyulmuşdur. Təsisçiləri: Azərbaycan, Türkiyə, Qazaxıstan və Qırğızıstandır (sonradan Özbəkistan qoşulmuşdur)."
      }
],
    miniQuiz: [
      {
            "q": "Qlobal neft bazarında hasilat kvotalarını və qiymət siyasətini tənzimləyən beynəlxalq kartel hansıdır?",
            "options": [
                  "Aİ",
                  "OPEC",
                  "ASEAN",
                  "NATO"
            ],
            "a": 1,
            "exp": "OPEC (Neft İxrac Edən Ölkələr Təşkilatı) qlobal neft bazarlarını tənzimləyir."
      },
      {
            "q": "2009-cu ildə Naxçıvan Sazişi ilə əsası qoyulmuş və türkdilli dövlətləri birləşdirən təşkilat hansıdır?",
            "options": [
                  "Varşava Müqaviləsi",
                  "Türk Dövlətləri Təşkilatı (TDT)",
                  "Aİ",
                  "MERCOSUR"
            ],
            "a": 1,
            "exp": "Türk Dövlətləri Təşkilatının əsası 2009-cu ildə tarixi Naxçıvan Zirvə Görüşündə qoyulmuşdur."
      }
]
  },

  {
    id: 'cografiya-11-3',
    subjectId: 'cografiya',
    grade: 11,
    unit: 'Bölmə 3: Müasir Qlobal Problemlər',
    unitOrder: 3,
    title: 'İqlim dəyişməsi, istixana effekti, səhralaşma və qlobal ərzaq problemi',
    order: 3,
    readTimeMinutes: 18,
    difficulty: 2,
    summary: 'Qlobal problemlərin təsnifatı, istixana qazları ($CO_2, CH_4$) və qlobal istiləşmə, ozon qatının deşilməsi, torpaqların səhralaşması, demoqrafik və ərzaq böhranı.',
    theoryMarkdown: `
### Müasir Qlobal Problemlər

#### 1. Qlobal Problemlər Nədir?
Qlobal problemlər — bütün bəşəriyyətin həyatı maraqlarına toxunan, planetar miqyas alan və həlli bütün dünya dövlətlərinin birgə səyini tələb edən problemlərdir. Təsnifatı:
1. *Ümumbəşəri və ictimai-siyasi problemlər:* Sülhün qorunması, nüvə müharibəsi təhlükəsinin aradan qaldırılması, beynəlxalq terrorizm.
2. *İnsan və təbiət arasındakı problemlər:* Ekoloji böhran, qlobal istiləşmə, ozon təbəqəsinin seyrəlməsi, biomüxtəlifliyin azalması, Dünya okeanının çirklənməsi.
3. *Sosial-iqtisadi problemlər:* Yoxsulluq, aclıq və ərzaq təhlükəsizliyi, qlobal epidemiya və xəstəliklər, resurs və enerji qıtlığı.

#### 2. Əsas Ekoloji Problemlər
* **Qlobal İqlim Dəyişmələri və "İstixana Effekti":**
  - Kömür, neft və qazın yandırılması atmosferdə karbon qazının ($CO_2$), metanın ($CH_4$) və digər istixana qazlarının konsentrasiyasını artırır.
  - İstilik şüaları kosmosa yayıla bilmir və planetin səthi istiləşir.
  - Fəsadları: Qütb buzlaqlarının əriməsi, Dünya okeanının səviyyəsinin qalxması, quraqlıqlar, sellər və təbii kataklizmlər.
* **Ozon Qatının Seyrəlməsi:** Xlor-flüor-karbon (freon) qazlarının təsirindən stratosferdə Günəşin öldürücü ultrabənövşəyi şüalarını udan ozon ($O_3$) təbəqəsinin zədələnməsi.
* **Səhralaşma:** Meşələrin qırılması, həddindən artıq otarma və quraqlıq nəticəsində məhsuldar torpaqların səhraya çevrilməsi (Sahel zonası — Afrikada Böyük Səhranın cənub kənarı).

#### 3. Qlobal Ərzaq Problemi
Planetdə 800 milyondan çox insan xroniki aclıq və qida çatışmazlığından əziyyət çəkir. Əsas səbəbləri: məhsuldarlığın aşağı olması, kəskin demoqrafik artım, müharibələr və iqlim quraqlıqlarıdır.
    `,
    keyFormulas: [
      {
            "formula": "\text{İstixana Qazları} = CO_2 + CH_4 + N_2O + \text{Su buxarı} \\implies \\Delta T > 0",
            "name": "İstixana effekti mexanizmi",
            "desc": "Temperaturun süni yüksəlməsi və qlobal istiləşmə"
      }
],
    glossary: [
      {
            "term": "İstixana effekti",
            "definition": "Atmosferdə istixana qazlarının Günəşdən gələn istiliyi saxlayaraq planetin temperaturunu yüksəltməsi prosesi."
      },
      {
            "term": "Səhralaşma",
            "definition": "İqlim dəyişikliyi və antropogen təsirlər nəticəsində quraq ərazilərdə torpağın münbitliyini tam itirməsi."
      }
],
    solvedExamples: [
      {
            "problem": "İstixana effektinin yaranmasında ən böyük paya sahib olan başlıca antropogen amil nədir?",
            "solution": "Sənayedə, nəqliyyatda və elektrik stansiyalarında qazıntı yanacaqlarının (daş kömür, neft məhsulları və təbii qaz) kütləvi yandırılması nəticəsində atmosferə buraxılan CO2 (karbon qazı) tullantılarıdır."
      }
],
    miniQuiz: [
      {
            "q": "Atmosferin stratosfer qatında Günəşin öldürücü ultrabənövşəyi şüalarından canlıları qoruyan qaz təbəqəsi hansıdır?",
            "options": [
                  "Ozon qatı (O3)",
                  "Azot qatı",
                  "Karbon qatı",
                  "Kükürd qatı"
            ],
            "a": 0,
            "exp": "Ozon təbəqəsi ultrabənövşəyi radiasiyanı udaraq Yerdəki canlı aləmi mühafizə edir."
      },
      {
            "q": "Afrikada Böyük Səhranın cənubu boyunca yerləşən və ən ağır səhralaşma və aclıq böhranı ilə üzləşən təbii keçid zonası necə adlanır?",
            "options": [
                  "Savanna",
                  "Sahel zonası",
                  "Tayqa",
                  "Pampa"
            ],
            "a": 1,
            "exp": "Sahel zonası Afrikada quraqlıq və fəlakətli səhralaşmanın ən kəskin yaşandığı bölgədir."
      }
]
  },

  {
    id: 'cografiya-11-4',
    subjectId: 'cografiya',
    grade: 11,
    unit: 'Bölmə 4: Davamlı İnkişaf və Yaşıl Enerji Keçidi',
    unitOrder: 4,
    title: 'BMT-nin 17 Davamlı İnkişaf Məqsədi, alternativ enerji və COP29',
    order: 4,
    readTimeMinutes: 19,
    difficulty: 2,
    summary: 'Davamlı inkişaf konsepsiyası (DİM), ekoloji tarazlıq, yaşıl enerji (günəş, külək, hidrogen), karbon neytrallığı və Bakıda keçirilən BMT COP29 İqlim Konfransı.',
    theoryMarkdown: `
### Davamlı İnkişaf və Yaşıl İqtisadiyyat

#### 1. Davamlı İnkişaf Konsepsiyası
* **Tərifi:** İndiki nəsillərin ehtiyaclarını gələcək nəsillərin öz ehtiyaclarını ödəmək imkanlarını təhlükə altına qoymadan təmin edən inkişaf modelidir. Üç təməl sütunu vardır:
  1. *İqtisadi inkişaf:* Resurslara qənaət edən səmərəli istehsal.
  2. *Sosial ədalət:* Yoxsulluğun aradan qaldırılması, bərabərhüquqlu təhsil və səhiyyə.
  3. *Ekoloji təhlükəsizlik:* Ətraf mühitin qorunması və biomüxtəlifliyin bərpası.
* **BMT-nin 17 Davamlı İnkişaf Məqsədi (DİM — 2030 Gündəliyi):** Yoxsulluğa son, aclığa son, keyfiyyətli təhsil, təmiz su, əlçatan və təmiz enerji, iqlim dəyişikliyi ilə mübarizə və s.

#### 2. "Yaşıl Enerji" və Karbon Neytrallığı
* Ənənəvi qalıq yanacaqlardan (kömür, mazut, qaz) bərpa olunan "təmiz" enerji mənbələrinə keçid:
  - **Günəş Enerjisi (Fotoelektrik stansiyalar):** Ən tükənməz mənbədir.
  - **Külək Enerjisi:** Quruda və dənizdə (offshore) quraşdırılan külək turbinləri.
  - **Yaşıl Hidrogen:** Suyun elektrolizi yolu ilə təmiz elektrik enerjisindən hidrogen yanacağının alınması.
* **Karbon Neytrallığı (Net Zero):** İstehsal olunan istixana qazları emissiyaları ilə təbiət (meşələr, okeanlar) və texnologiyalar tərəfindən udulan karbonun bərabərləşdirilməsi.

#### 3. BMT-nin İqlim Dəyişmələri üzrə Çərçivə Konvensiyası və Bakı COP29
* **Paris İqlim Sazişi (2015):** Qlobal orta temperatur artımını sənaye öncəsi dövrlə müqayisədə **$1.5^\circ C$** həddində saxlamağı hədəfləyir.
* **COP29 Bakı Zirvəsi (2024):** BMT-nin İqlim Dəyişmələri üzrə 29-cu Tərəflər Konfransına Azərbaycan Respublikası ev sahibliyi etmişdir. Bu, Azərbaycanın qlobal iqlim diplomatiyasında, "Yaşıl dünya naminə həmrəylik ili" elan edilməsində və qlobal yaşıl enerji keçidində tarixi nüfuzunun təntənəsidir.
    `,
    keyFormulas: [
      {
            "formula": "\\Delta T \\le +1.5^\\circ C \\quad (\text{Paris İqlim Sazişinin Qlobal Hədəfi})",
            "name": "Qlobal iqlim hədəfi",
            "desc": "Temperatur artımının məhdudlaşdırılması meyarı"
      }
],
    glossary: [
      {
            "term": "Davamlı inkişaf",
            "definition": "Gələcək nəsillərin həyat keyfiyyətini təhlükəyə atmadan müasir tələbatları ödəyən balanslaşdırılmış tərəqqi."
      },
      {
            "term": "COP29",
            "definition": "2024-cü ildə Bakıda keçirilən BMT-nin Qlobal İqlim Dəyişmələri üzrə 29-cu Tərəflər Konfransı."
      }
],
    solvedExamples: [
      {
            "problem": "BMT-nin Davamlı İnkişaf Konsepsiyasının 3 təməl dayaq sütunu hansılardır?",
            "solution": "İqtisadi inkişaf (səmərəlilik), sosial təminat (ədalət və inklüzivlik) və ekoloji tarazlıq (təbiətin və resursların mühafizəsi)."
      }
],
    miniQuiz: [
      {
            "q": "2024-cü ildə BMT-nin Qlobal İqlim Konfransı (COP29) hansı tarixi şəhərdə keçirilmişdir?",
            "options": [
                  "London",
                  "Bakı",
                  "Tokio",
                  "Nyu-York"
            ],
            "a": 1,
            "exp": "COP29 iqlim sammiti Azərbaycanda — Bakı şəhərində uğurla təşkil olunmuşdur."
      },
      {
            "q": "Paris İqlim Sazişinə əsasən dünya üzrə qlobal orta temperatur artımının hansı kritik səviyyədən yuxarı qalxmamasına çalışılır?",
            "options": [
                  "+1.5°C",
                  "+5°C",
                  "+10°C",
                  "+0.1°C"
            ],
            "a": 0,
            "exp": "Qlobal istiləşmənin fəlakətli təsirlərini önləmək üçün temperatur artımının 1.5 dərəcə ilə məhdudlaşdırılması əsas hədəfdir."
      }
]
  },

  {
    id: 'cografiya-11-5',
    subjectId: 'cografiya',
    grade: 11,
    unit: 'Bölmə 5: Azərbaycan Respublikasının Qlobal Məkanda Yeri',
    unitOrder: 5,
    title: 'Neft-qaz strategiyası, Cənub Qaz Dəhlizi və Qarabağda Yaşıl Enerji Zonası',
    order: 5,
    readTimeMinutes: 19,
    difficulty: 2,
    summary: 'Əsrin Müqaviləsi, BTC, Cənub Qaz Dəhlizi (TANAP, TAP), Avropanın enerji təhlükəsizliyi, Qarabağ və Şərqi Zəngəzurda \'Ağıllı şəhər\', \'Ağıllı kənd\' və \'Yaşıl enerji zonası\'.',
    theoryMarkdown: `
### Azərbaycan Respublikasının Qlobal Məkanda Yeri

#### 1. Azərbaycanın Enerji Diplomatiyası və Qlobal Əhəmiyyəti
* **"Əsrin Müqaviləsi" (20 sentyabr 1994-cü il):** Ümummilli lider Heydər Əliyevin təşəbbüsü ilə imzalanmış Xəzər dənizinin Azərbaycan sektorundakı "Azəri-Çıraq-Günəşli" yataqlarının birgə işlənməsi üzrə beynəlxalq sazişdir.
* **Strateji Neft İxrac Kəmərləri:**
  - **Bakı-Tbilisi-Ceyhan (BTC):** Azərbaycan neftini Gürcüstandan keçməklə Türkiyənin Aralıq dənizi sahilindəki Ceyhan limanına çatdıran əsas ixrac boru kəməridir.
  - Bakı-Novorossiysk (Şimal marşrutu), Bakı-Supsa (Qərb marşrutu).
* **Cənub Qaz Dəhlizi (CQD):**
  - "Şahdəniz" qazını Avropa bazarlarına nəql edən **$3500 \text{ km}$-lik meqalayihədir**.
  - Tərkib hissələri: Cənubi Qafqaz Boru Kəməri (SCP) $\rightarrow$ Trans-Anadolu Qaz Kəməri (TANAP — Türkiyə) $\rightarrow$ Trans-Adriatik Boru Kəməri (TAP — Yunanıstan, Albaniya, İtaliya).
  - Bu layihə Avropanın enerji təhlükəsizliyində strateji təminatçıdır.

#### 2. Qarabağ və Şərqi Zəngəzur — "Yaşıl Enerji Zonası"
44 günlük Vətən müharibəsində qazanılmış tarixi Zəfərdən sonra azad edilmiş ərazilər yüksək texnoloji əsasda yenidən qurulur:
* **"Ağıllı şəhər" və "Ağıllı kənd" (Smart City / Smart Village):** İlk layihə Zəngilanın Ağalı kəndində uğurla reallaşdırılmışdır (alternativ enerji, rəqəmsal idarəetmə, ekoloji evlər).
* **Yaşıl Enerji Zonası:** Qarabağ və Şərqi Zəngəzur rəsmi olaraq "Yaşıl enerji zonası" elan edilmişdir:
  - *Hidroenerji:* Tərtər çayı ("Sərsəng", "Suqovuşan"), Həkəri və Bərgüşad çayları, Araz çayı üzərində "Xudafərin" və "Qız Qalası" hidroqovşaqları.
  - *Günəş və Külək:* Cəbrayıl və Füzulidə nəhəng günəş elektrik stansiyaları ("Şəfəq" GES layihəsi), Laçın və Kəlbəcərdə dağ külək stansiyaları.

#### 3. Xəzər - Avropa Yaşıl Enerji Dəhlizi
Azərbaycan, Gürcüstan, Rumıniya və Macarıstan arasında imzalanmış sazişə əsasən, Xəzər dənizinin külək enerjisindən hasil edilən elektrik enerjisi Qara dənizin dibi ilə çəkiləcək sualtı elektrik kabeli vasitəsilə birbaşa Avropa İttifaqı ölkələrinə ixrac olunacaqdır.
    `,
    keyFormulas: [
      {
            "formula": "\text{Cənub Qaz Dəhlizi} = \text{SCP (Bakı-Tbilisi-Ərzurum)} + \text{TANAP (Türkiyə)} + \text{TAP (Yunanıstan-Albaniya-İtaliya)}",
            "name": "CQD arxitekturası",
            "desc": "Avropaya qaz tədarük edən 3500 km-lik zəncir"
      }
],
    glossary: [
      {
            "term": "Əsrin Müqaviləsi",
            "definition": "1994-cü ildə imzalanaraq Azərbaycanın müstəqil iqtisadiyyatının və neft diplomatiyasının əsasını qoyan tarixi saziş."
      },
      {
            "term": "Ağıllı kənd (Smart village)",
            "definition": "İnternet texnologiyaları, bərpa olunan yaşıl enerji və avtomatlaşdırılmış xidmətlərlə təchiz edilmiş innovativ yaşayış məskəni."
      }
],
    solvedExamples: [
      {
            "problem": "Azərbaycanın təbii qazını Türkiyə ərazisindən keçirərək Avropanın sərhədinə çatdıran boru kəməri necə adlanır?",
            "solution": "TANAP (Trans-Anadolu Təbii Qaz Boru Kəməri); o, Cənub Qaz Dəhlizinin Türkiyə ərazisindən keçən ən böyük hissəsidir."
      }
],
    miniQuiz: [
      {
            "q": "Azərbaycan neftini birbaşa Aralıq dənizi sahilindəki Ceyhan limanına çatdıran əsas ixrac boru kəməri hansıdır?",
            "options": [
                  "Bakı-Novorossiysk",
                  "Bakı-Tbilisi-Ceyhan (BTC)",
                  "Bakı-Supsa",
                  "Dostluq kəməri"
            ],
            "a": 1,
            "exp": "Bakı-Tbilisi-Ceyhan Heydər Əliyev adına əsas ixrac neft kəməridir."
      },
      {
            "q": "Azad edilmiş ərazilərdə ilk 'Ağıllı kənd' (Smart Village) pilot layihəsi hansı rayonda istifadəyə verilmişdir?",
            "options": [
                  "Zəngilan (Ağalı kəndi)",
                  "Şuşa",
                  "Ağdam",
                  "Kəlbəcər"
            ],
            "a": 0,
            "exp": "Zəngilan rayonunun Ağalı kəndi ən müasir texnologiyalarla qurulmuş ilk ağıllı kənddir."
      }
]
  }
,

  // =========================================================================
  // 7. DİGƏR FƏNLƏR (Tarix, İngilis dili, İnformatika)
  // =========================================================================
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
