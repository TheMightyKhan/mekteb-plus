// MəktəbPlus - BSQ və KSQ İmtahan Arxiv Məlumatları

export const MOCK_EXAMS = [
  {
    id: 'exam-math-10-bsq-1-a',
    title: '10-cu Sinif Riyaziyyat - I Yarımil Böyük Summativ Qiymətləndirmə (BSQ-1)',
    subjectId: 'riyaziyyat',
    grade: 10,
    examType: 'BSQ',
    semester: 1,
    variant: 'A',
    durationMinutes: 45,
    totalQuestions: 5,
    maxScore: 100,
    schoolMetadata: {
      ministry: 'Azərbaycan Respublikası Elm və Təhsil Nazirliyi',
      schoolName: 'Məktəb-Lisey Kompleksi',
      academicYear: '2025-2026-cı tədris ili',
      teacherSignatureLabel: 'Fənn müəlliminin imzası'
    },
    questions: [
      {
        id: 'q-m10-1',
        text: '$f(x) = 2x^3 - 6x + 9$ funksiyasının böhran nöqtələrini tapın.',
        subjectId: 'riyaziyyat',
        grade: 10,
        topicTags: ['Törəmə', 'Böhran nöqtələri', 'Funksiyanın araşdırılması'],
        difficulty: 2,
        points: 20,
        options: [
          { key: 'A', text: '$x = \\pm 1$' },
          { key: 'B', text: '$x = 1$' },
          { key: 'C', text: '$x = 0; x = 3$' },
          { key: 'D', text: '$x = \\pm \\sqrt{3}$' },
          { key: 'E', text: 'Böhran nöqtəsi yoxdur' }
        ],
        correctKey: 'A',
        explanationCoT: {
          given: 'Funksiya təyin olunub: $f(x) = 2x^3 - 6x + 9$. Funksiyanın təyin oblastı bütün həqiqi ədədlər çoxluğudur: $D(f) = \\mathbb{R}$.',
          formula: 'Funksiyanın törəməsinin sıfra bərabər olduğu və ya mövcud olmadığı daxili nöqtələrə böhran nöqtələri deyilir: $f\'(x) = 0$.',
          steps: [
            {
              stepNumber: 1,
              title: 'Funksiyanın birinci tərtib törəməsini alaq',
              content: "$$f'(x) = (2x^3 - 6x + 9)' = 2 \\cdot 3x^2 - 6 \\cdot 1 + 0 = 6x^2 - 6$$"
            },
            {
              stepNumber: 2,
              title: 'Törəməni sıfra bərabərləşdirib tənliyi həll edək',
              content: "$$6x^2 - 6 = 0 \\implies 6(x^2 - 1) = 0 \\implies x^2 = 1 \\implies x = \\pm 1$$"
            },
            {
              stepNumber: 3,
              title: 'Böhran nöqtələrinin təyin oblastına daxil olmasını yoxlayaq',
              content: 'Həm $x = 1$, həm də $x = -1$ nöqtələri təyin oblastına daxildir.'
            }
          ],
          conclusion: 'Deməli, $f(x)$ funksiyasının böhran nöqtələri $x = \\pm 1$-dir. Düzgün variant: A.'
        }
      },
      {
        id: 'q-m10-2',
        text: '$\\sin^2(\\alpha) + \\cos^2(\\alpha) + \\tan(\\alpha)\\cdot\\cot(\\alpha)$ ifadəsinin qiymətini tapın ($\\alpha \\neq \\frac{\\pi k}{2}$).',
        subjectId: 'riyaziyyat',
        grade: 10,
        topicTags: ['Triqonometriya', 'Əsas eyniliklər'],
        difficulty: 1,
        points: 20,
        options: [
          { key: 'A', text: '0' },
          { key: 'B', text: '1' },
          { key: 'C', text: '2' },
          { key: 'D', text: '-1' },
          { key: 'E', text: '$\\tan^2(\\alpha)$' }
        ],
        correctKey: 'C',
        explanationCoT: {
          given: 'İfadə: $\\sin^2(\\alpha) + \\cos^2(\\alpha) + \\tan(\\alpha)\\cdot\\cot(\\alpha)$, $\\alpha \\neq \\frac{\\pi k}{2}$ şərti ilə.',
          formula: 'Əsas triqonometrik eyniliklər: $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$ və $\\tan(\\alpha) \\cdot \\cot(\\alpha) = 1$.',
          steps: [
            {
              stepNumber: 1,
              title: 'Hər iki eyniliyin qiymətini yerinə yazaq',
              content: '$\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$'
            },
            {
              stepNumber: 2,
              title: 'Hasil eyniliyini əlavə edək',
              content: '$\\tan(\\alpha) \\cdot \\cot(\\alpha) = 1$'
            },
            {
              stepNumber: 3,
              title: 'Toplamı hesablayaq',
              content: '$$1 + 1 = 2$$'
            }
          ],
          conclusion: 'Sadələşdirmə nəticəsində alınan sabit ədəd 2-yə bərabərdir. Düzgün variant: C.'
        }
      },
      {
        id: 'q-m10-3',
        text: '$y = x^2 - 4x + 3$ parabolasının $x_0 = 3$ nöqtəsində çəkilmiş toxunanın bucaq əmsalını ($k$) tapın.',
        subjectId: 'riyaziyyat',
        grade: 10,
        topicTags: ['Törəmənin həndəsi mənası', 'Parabola toxunanı'],
        difficulty: 2,
        points: 20,
        options: [
          { key: 'A', text: '1' },
          { key: 'B', text: '2' },
          { key: 'C', text: '-2' },
          { key: 'D', text: '0' },
          { key: 'E', text: '6' }
        ],
        correctKey: 'B',
        explanationCoT: {
          given: 'Funksiya: $y = x^2 - 4x + 3$, toxunma nöqtəsinin absisi $x_0 = 3$.',
          formula: "Törəmənin həndəsi mənasına əsasən, toxunanın bucaq əmsalı $k = y'(x_0)$-dır.",
          steps: [
            {
              stepNumber: 1,
              title: 'Funksiyanın törəməsini alaq',
              content: "$$y' = (x^2 - 4x + 3)' = 2x - 4$$"
            },
            {
              stepNumber: 2,
              title: '$x_0 = 3$ qiymətini törəmədə yerinə qoyaq',
              content: "$$k = y'(3) = 2 \\cdot 3 - 4 = 6 - 4 = 2$$"
            }
          ],
          conclusion: 'Toxunanın absis oxu ilə əmələ gətirdiyi meylin bucaq əmsalı $k = 2$-dir. Düzgün variant: B.'
        }
      },
      {
        id: 'q-m10-4',
        text: '$\\log_2(x - 3) = 3$ tənliyini həll edin.',
        subjectId: 'riyaziyyat',
        grade: 10,
        topicTags: ['Loqarifmik tənliklər', 'Loqarifma'],
        difficulty: 2,
        points: 20,
        options: [
          { key: 'A', text: '9' },
          { key: 'B', text: '11' },
          { key: 'C', text: '8' },
          { key: 'D', text: '5' },
          { key: 'E', text: '12' }
        ],
        correctKey: 'B',
        explanationCoT: {
          given: 'Tənlik: $\\log_2(x - 3) = 3$. Mümkün qiymətlər çoxluğu: $x - 3 > 0 \\implies x > 3$.',
          formula: 'Loqarifmanın tərifi: $\\log_a(b) = c \\implies b = a^c$ ($a > 0, a \\neq 1$).',
          steps: [
            {
              stepNumber: 1,
              title: 'Loqarifmik tənliyi üstlü formaya çevirək',
              content: '$$x - 3 = 2^3$$'
            },
            {
              stepNumber: 2,
              title: 'Sadələşdirmə və hesablama',
              content: '$$x - 3 = 8 \\implies x = 8 + 3 = 11$$'
            },
            {
              stepNumber: 3,
              title: 'Təyin oblastını yoxlayaq',
              content: '$11 > 3$ şərti ödənir.'
            }
          ],
          conclusion: 'Tənliyin yeganə kökü $x = 11$-dir. Düzgün variant: B.'
        }
      },
      {
        id: 'q-m10-5',
        text: 'Katetləri 6 sm və 8 sm olan düzbucaqlı üçbucağın xaricinə çəkilmiş çevrənin radiusunu ($R$) tapın.',
        subjectId: 'riyaziyyat',
        grade: 10,
        topicTags: ['Həndəsə', 'Düzbucaqlı üçbucaq', 'Çevrə'],
        difficulty: 2,
        points: 20,
        options: [
          { key: 'A', text: '10 sm' },
          { key: 'B', text: '7 sm' },
          { key: 'C', text: '5 sm' },
          { key: 'D', text: '4 sm' },
          { key: 'E', text: '2.5 sm' }
        ],
        correctKey: 'C',
        explanationCoT: {
          given: 'Düzbucaqlı üçbucaqda katetlər: $a = 6 \\text{ sm}$, $b = 8 \\text{ sm}$.',
          formula: 'Pifaqor teoremi: $c^2 = a^2 + b^2$. Düzbucaqlı üçbucağın xaricinə çəkilmiş çevrənin mərkəzi hipotenuzun ortasında yerləşir, yəni $R = \\frac{c}{2}$.',
          steps: [
            {
              stepNumber: 1,
              title: 'Hipotenuzu Pifaqor teoremi ilə tapaq',
              content: '$$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ sm}$$'
            },
            {
              stepNumber: 2,
              title: 'Radiusu hesablayaq',
              content: '$$R = \\frac{c}{2} = \\frac{10}{2} = 5 \\text{ sm}$$'
            }
          ],
          conclusion: 'Xaricə çəkilmiş çevrənin radiusu $R = 5 \\text{ sm}$-dir. Düzgün variant: C.'
        }
      }
    ]
  },
  {
    id: 'exam-phys-9-ksq-1-a',
    title: '9-cu Sinif Fizika - I Yarımil Kiçik Summativ Qiymətləndirmə (KSQ-1)',
    subjectId: 'fizika',
    grade: 9,
    examType: 'KSQ',
    semester: 1,
    ksqNumber: 1,
    variant: 'A',
    durationMinutes: 40,
    totalQuestions: 5,
    maxScore: 100,
    schoolMetadata: {
      ministry: 'Azərbaycan Respublikası Elm və Təhsil Nazirliyi',
      schoolName: 'Məktəb-Lisey Kompleksi',
      academicYear: '2025-2026-cı tədris ili',
      teacherSignatureLabel: 'Fənn müəlliminin imzası'
    },
    questions: [
      {
        id: 'q-p9-1',
        text: 'Kütləsi $m = 4 \\text{ kq}$ olan cismə $F = 12 \\text{ N}$ əvəzləyici qüvvə təsir edir. Cismin aldığı təcili ($a$) hesablayın.',
        subjectId: 'fizika',
        grade: 9,
        topicTags: ['Dinamika', 'Nyutonun II qanunu'],
        difficulty: 1,
        points: 20,
        options: [
          { key: 'A', text: '$2 \\text{ m/s}^2$' },
          { key: 'B', text: '$3 \\text{ m/s}^2$' },
          { key: 'C', text: '$48 \\text{ m/s}^2$' },
          { key: 'D', text: '$0.33 \\text{ m/s}^2$' },
          { key: 'E', text: '$8 \\text{ m/s}^2$' }
        ],
        correctKey: 'B',
        explanationCoT: {
          given: 'Kütlə $m = 4 \\text{ kq}$, Qüvvə $F = 12 \\text{ N}$.',
          formula: 'Nyutonun II qanunu: $F = ma \\implies a = \\frac{F}{m}$.',
          steps: [
            {
              stepNumber: 1,
              title: 'Kəmiyyətləri düsturda yerinə qoyaq',
              content: '$$a = \\frac{12 \\text{ N}}{4 \\text{ kq}} = 3 \\text{ m/s}^2$$'
            }
          ],
          conclusion: 'Cismin aldığı təcil $3 \\text{ m/s}^2$-dir. Düzgün variant: B.'
        }
      },
      {
        id: 'q-p9-2',
        text: 'Kütləsi $2 \\text{ kq}$ olan cisim $5 \\text{ m/s}$ sürətlə düzxətli bərabərsürətli hərəkət edir. Cismin impulsunu ($p$) tapın.',
        subjectId: 'fizika',
        grade: 9,
        topicTags: ['Cismin impulsu', 'Saxlanma qanunları'],
        difficulty: 1,
        points: 20,
        options: [
          { key: 'A', text: '$2.5 \\text{ kq}\\cdot\\text{m/s}$' },
          { key: 'B', text: '$7 \\text{ kq}\\cdot\\text{m/s}$' },
          { key: 'C', text: '$10 \\text{ kq}\\cdot\\text{m/s}$' },
          { key: 'D', text: '$20 \\text{ kq}\\cdot\\text{m/s}$' },
          { key: 'E', text: '$50 \\text{ kq}\\cdot\\text{m/s}$' }
        ],
        correctKey: 'C',
        explanationCoT: {
          given: '$m = 2 \\text{ kq}$, $v = 5 \\text{ m/s}$.',
          formula: 'Cismin impulsu kütlə ilə sürətin hasilinə bərabərdir: $p = mv$.',
          steps: [
            {
              stepNumber: 1,
              title: 'Hesablama',
              content: '$$p = 2 \\cdot 5 = 10 \\text{ kq}\\cdot\\text{m/s}$$'
            }
          ],
          conclusion: 'Cismin impulsu $10 \\text{ kq}\\cdot\\text{m/s}$-dir. Düzgün variant: C.'
        }
      },
      {
        id: 'q-p9-3',
        text: 'Cismin kinetik enerjisi $E_k = \\frac{mv^2}{2}$ düsturu ilə hesablanır. Sürət 3 dəfə artarsa, kinetik enerji necə dəyişər?',
        subjectId: 'fizika',
        grade: 9,
        topicTags: ['Kinetik enerji', 'İş və güc'],
        difficulty: 2,
        points: 20,
        options: [
          { key: 'A', text: '3 dəfə artar' },
          { key: 'B', text: '6 dəfə artar' },
          { key: 'C', text: '9 dəfə artar' },
          { key: 'D', text: 'Dəyişməz' },
          { key: 'E', text: '9 dəfə azar' }
        ],
        correctKey: 'C',
        explanationCoT: {
          given: 'Kinetik enerji $E_k \\sim v^2$ (sürətin kvadratı ilə mütənasibdir).',
          formula: '$$E_k\' = \\frac{m(3v)^2}{2} = \\frac{m \\cdot 9v^2}{2} = 9 E_k$$',
          steps: [
            {
              stepNumber: 1,
              title: 'Nəticənin təyini',
              content: 'Sürət $3$ dəfə artdıqda, onun kvadratı $3^2 = 9$ dəfə artdığı üçün kinetik enerji də 9 dəfə artacaq.'
            }
          ],
          conclusion: 'Kinetik enerji 9 dəfə artar. Düzgün variant: C.'
        }
      },
      {
        id: 'q-p9-4',
        text: 'Yerdən $h = 5 \\text{ m}$ hündürlükdən sərbəst düşən $m = 2 \\text{ kq}$ kütləli cismin yerə çatma anındakı sürətini tapın ($g = 10 \\text{ m/s}^2$, hava müqaviməti nəzərə alınmır).',
        subjectId: 'fizika',
        grade: 9,
        topicTags: ['Mexaniki enerjinin saxlanması', 'Sərbəstdüşmə'],
        difficulty: 3,
        points: 20,
        options: [
          { key: 'A', text: '$5 \\text{ m/s}$' },
          { key: 'B', text: '$10 \\text{ m/s}$' },
          { key: 'C', text: '$20 \\text{ m/s}$' },
          { key: 'D', text: '$50 \\text{ m/s}$' },
          { key: 'E', text: '$100 \\text{ m/s}$' }
        ],
        correctKey: 'B',
        explanationCoT: {
          given: '$h = 5 \\text{ m}$, $g = 10 \\text{ m/s}^2$, $v_0 = 0$.',
          formula: 'Enerjinin saxlanma qanununa görə: $mgh = \\frac{mv^2}{2} \\implies v = \\sqrt{2gh}$.',
          steps: [
            {
              stepNumber: 1,
              title: 'Sürəti hesablayaq',
              content: '$$v = \\sqrt{2 \\cdot 10 \\cdot 5} = \\sqrt{100} = 10 \\text{ m/s}$$'
            }
          ],
          conclusion: 'Cismin yerə dəyən andakı sürəti $10 \\text{ m/s}$-dir. Düzgün variant: B.'
        }
      },
      {
        id: 'q-p9-5',
        text: 'Yayın sərtliyi $k = 200 \\text{ N/m}$, uzanması $x = 0.05 \\text{ m}$-dir. Yayda yaranan elastiklik qüvvəsinin modulunu ($F_{\\text{el}}$) hesablayın.',
        subjectId: 'fizika',
        grade: 9,
        topicTags: ['Huk qanunu', 'Elastiklik qüvvəsi'],
        difficulty: 1,
        points: 20,
        options: [
          { key: 'A', text: '$10 \\text{ N}$' },
          { key: 'B', text: '$100 \\text{ N}$' },
          { key: 'C', text: '$4000 \\text{ N}$' },
          { key: 'D', text: '$4 \\text{ N}$' },
          { key: 'E', text: '$20 \\text{ N}$' }
        ],
        correctKey: 'A',
        explanationCoT: {
          given: '$k = 200 \\text{ N/m}$, $x = 0.05 \\text{ m}$.',
          formula: 'Huk qanunu: $F_{\\text{el}} = k \\cdot |x|$.',
          steps: [
            {
              stepNumber: 1,
              title: 'Hesablama',
              content: '$$F_{\\text{el}} = 200 \\cdot 0.05 = 10 \\text{ N}$$'
            }
          ],
          conclusion: 'Elastiklik qüvvəsi $10 \\text{ N}$-a bərabərdir. Düzgün variant: A.'
        }
      }
    ]
  }
];
