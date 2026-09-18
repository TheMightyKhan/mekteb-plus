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
  },
{
  "id": "exam-math-8-ksq-1-a",
  "title": "8-ci Sinif Riyaziyyat - I Yarımil Kiçik Summativ Qiymətləndirmə (KSQ-1)",
  "subjectId": "riyaziyyat",
  "grade": 8,
  "examType": "KSQ",
  "semester": 1,
  "variant": "A",
  "durationMinutes": 45,
  "totalQuestions": 5,
  "maxScore": 100,
  "schoolMetadata": {
    "ministry": "Azərbaycan Respublikası Elm və Təhsil Nazirliyi",
    "schoolName": "Təbiət və Dəqiq Elmlər Təmayüllü Lisey",
    "academicYear": "2025-2026-cı tədris ili",
    "teacherSignatureLabel": "Fənn müəlliminin imzası"
  },
  "questions": [
    {
      "id": "q-m8-1",
      "text": "$x^2 - 8x + 15 = 0$ kvadrat tənliyinin köklərini tapın.",
      "subjectId": "riyaziyyat",
      "grade": 8,
      "topicTags": [
        "Kvadrat tənliklər",
        "Viyet teoremi"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "$x_1 = 3; x_2 = 5$"
        },
        {
          "key": "B",
          "text": "$x_1 = -3; x_2 = -5$"
        },
        {
          "key": "C",
          "text": "$x_1 = 2; x_2 = 6$"
        },
        {
          "key": "D",
          "text": "$x_1 = 1; x_2 = 15$"
        },
        {
          "key": "E",
          "text": "Həqiqi kökü yoxdur"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Gətirilmiş kvadrat tənlik: $x^2 - 8x + 15 = 0$.",
        "formula": "Viyet teoremi: $x_1 + x_2 = -p = 8$ və $x_1 \\cdot x_2 = q = 15$.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Köklərin hasili və cəmini təyin edək",
            "content": "$x_1 \\cdot x_2 = 15$, $x_1 + x_2 = 8$."
          },
          {
            "stepNumber": 2,
            "title": "Ədədləri seçək",
            "content": "15-in vuruqları 3 və 5-dir. $3 + 5 = 8$ şərti tam ödənir."
          }
        ],
        "conclusion": "Köklər $x_1 = 3, x_2 = 5$-dir. Düzgün variant: A."
      }
    },
    {
      "id": "q-m8-2",
      "text": "Düzbucaqlı üçbucağın katetləri $6 \\text{ sm}$ və $8 \\text{ sm}$-dir. Hipotenuzun uzunluğunu tapın.",
      "subjectId": "riyaziyyat",
      "grade": 8,
      "topicTags": [
        "Pifaqor teoremi",
        "Həndəsə"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "$14 \\text{ sm}$"
        },
        {
          "key": "B",
          "text": "$10 \\text{ sm}$"
        },
        {
          "key": "C",
          "text": "$12 \\text{ sm}$"
        },
        {
          "key": "D",
          "text": "$9 \\text{ sm}$"
        },
        {
          "key": "E",
          "text": "$48 \\text{ sm}$"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "Katetlər: $a = 6 \\text{ sm}$, $b = 8 \\text{ sm}$.",
        "formula": "Pifaqor teoremi: $c^2 = a^2 + b^2$.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Katetlərin kvadratlarını toplayaq",
            "content": "$$c^2 = 6^2 + 8^2 = 36 + 64 = 100$$"
          },
          {
            "stepNumber": 2,
            "title": "Kvadrat kök alaq",
            "content": "$$c = \\sqrt{100} = 10 \\text{ sm}$$"
          }
        ],
        "conclusion": "Hipotenuz $10 \\text{ sm}$-dir. Düzgün variant: B."
      }
    },
    {
      "id": "q-m8-3",
      "text": "$\\sqrt{144} - \\sqrt{49} + \\sqrt{0.25}$ ifadəsinin qiymətini hesablayın.",
      "subjectId": "riyaziyyat",
      "grade": 8,
      "topicTags": [
        "Kvadrat kök"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "5.5"
        },
        {
          "key": "B",
          "text": "6.5"
        },
        {
          "key": "C",
          "text": "5"
        },
        {
          "key": "D",
          "text": "7.5"
        },
        {
          "key": "E",
          "text": "12"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Hesablanacaq ifadə: $\\sqrt{144} - \\sqrt{49} + \\sqrt{0.25}$.",
        "formula": "Hesabi kvadrat kökün tərifindən istifadə edirik.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Kökaltı qiymətləri tapaq",
            "content": "$\\sqrt{144} = 12$, $\\sqrt{49} = 7$, $\\sqrt{0.25} = 0.5$."
          },
          {
            "stepNumber": 2,
            "title": "Əməlləri icra edək",
            "content": "$$12 - 7 + 0.5 = 5 + 0.5 = 5.5$$"
          }
        ],
        "conclusion": "İfadənin qiyməti 5.5-dir. Düzgün variant: A."
      }
    },
    {
      "id": "q-m8-4",
      "text": "$3x^2 - 5x + 2 = 0$ kvadrat tənliyinin diskriminantını ($D$) hesablayın.",
      "subjectId": "riyaziyyat",
      "grade": 8,
      "topicTags": [
        "Diskriminant",
        "Kvadrat tənlik"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "1"
        },
        {
          "key": "B",
          "text": "49"
        },
        {
          "key": "C",
          "text": "-1"
        },
        {
          "key": "D",
          "text": "25"
        },
        {
          "key": "E",
          "text": "16"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "$a = 3, b = -5, c = 2$.",
        "formula": "$$D = b^2 - 4ac$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Əmsalları yerinə yazaq",
            "content": "$$D = (-5)^2 - 4 \\cdot 3 \\cdot 2 = 25 - 24 = 1$$"
          }
        ],
        "conclusion": "Diskriminant 1-ə bərabərdir. Düzgün variant: A."
      }
    },
    {
      "id": "q-m8-5",
      "text": "Rombun diaqonalları $12 \\text{ sm}$ və $16 \\text{ sm}$-dir. Rombun tərəfini tapın.",
      "subjectId": "riyaziyyat",
      "grade": 8,
      "topicTags": [
        "Romb",
        "Pifaqor"
      ],
      "difficulty": 3,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "$10 \\text{ sm}$"
        },
        {
          "key": "B",
          "text": "$14 \\text{ sm}$"
        },
        {
          "key": "C",
          "text": "$20 \\text{ sm}$"
        },
        {
          "key": "D",
          "text": "$8 \\text{ sm}$"
        },
        {
          "key": "E",
          "text": "$15 \\text{ sm}$"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "$d_1 = 12 \\text{ sm}$, $d_2 = 16 \\text{ sm}$.",
        "formula": "Rombun diaqonalları kəsişmə nöqtəsində yarıya bölünür və perpendikulyardır: $a^2 = (d_1/2)^2 + (d_2/2)^2$.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Yarım diaqonalları tapaq",
            "content": "$$d_1/2 = 6 \\text{ sm}, \\quad d_2/2 = 8 \\text{ sm}$$"
          },
          {
            "stepNumber": 2,
            "title": "Pifaqor teoremi ilə tərəfi hesablayaq",
            "content": "$$a = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ sm}$$"
          }
        ],
        "conclusion": "Rombun tərəfi $10 \\text{ sm}$-dir. Düzgün variant: A."
      }
    }
  ]
},
{
  "id": "exam-geog-7-ksq-1-a",
  "title": "7-ci Sinif Coğrafiya - I Yarımil Kiçik Summativ Qiymətləndirmə (KSQ-1)",
  "subjectId": "cografiya",
  "grade": 7,
  "examType": "KSQ",
  "semester": 1,
  "variant": "A",
  "durationMinutes": 45,
  "totalQuestions": 5,
  "maxScore": 100,
  "schoolMetadata": {
    "ministry": "Azərbaycan Respublikası Elm və Təhsil Nazirliyi",
    "schoolName": "Ümumtəhsil Məktəbi",
    "academicYear": "2025-2026-cı tədris ili",
    "teacherSignatureLabel": "Fənn müəlliminin imzası"
  },
  "questions": [
    {
      "id": "q-g7-1",
      "text": "Xəritənin ədədi miqyası $1 : 1\\,000\\,000$-dur. Xəritədə 5 sm olan məsafə yer səthində neçə km-dir?",
      "subjectId": "cografiya",
      "grade": 7,
      "topicTags": [
        "Miqyas",
        "Xəritə"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "5 km"
        },
        {
          "key": "B",
          "text": "50 km"
        },
        {
          "key": "C",
          "text": "500 km"
        },
        {
          "key": "D",
          "text": "5000 km"
        },
        {
          "key": "E",
          "text": "25 km"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "Ədədi miqyas: $1 : 1\\,000\\,000$, xəritədəki uzunluq $L = 5 \\text{ sm}$.",
        "formula": "1 km = 100,000 sm. İzahlı miqyas = 1 sm-də 10 km.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "İzahlı miqyasa çevirmə",
            "content": "1,000,000 sm-dən 5 sıfır silinir -> 1 sm-də 10 km."
          },
          {
            "stepNumber": 2,
            "title": "Həqiqi məsafəni hesablamaq",
            "content": "$$5 \\text{ sm} \\cdot 10 \\text{ km/sm} = 50 \\text{ km}$$"
          }
        ],
        "conclusion": "Həqiqi məsafə 50 km-dir. Düzgün variant: B."
      }
    },
    {
      "id": "q-g7-2",
      "text": "Ekvator xətti hansı coğrafi xüsusiyyətə malikdir?",
      "subjectId": "cografiya",
      "grade": 7,
      "topicTags": [
        "Ekvator",
        "Paralel"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Ən uzun paraleldir (0° enlik)"
        },
        {
          "key": "B",
          "text": "Başlanğıc meridianıdır"
        },
        {
          "key": "C",
          "text": "Uzunluğu 10,000 km-dir"
        },
        {
          "key": "D",
          "text": "90° enlikdə yerləşir"
        },
        {
          "key": "E",
          "text": "Qütbləri birləşdirir"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Ekvatorun coğrafi koordinatı və parametrləri.",
        "formula": "Ekvator 0 dərəcəlik ən böyük paralel çevrəsidir (təqribən 40,075 km).",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Xassə",
            "content": "Ekvator Yeri Şimal və Cənub yarımkürələrinə bölən 0° enlikdəki ən böyük paraleldir."
          }
        ],
        "conclusion": "Düzgün variant: A."
      }
    },
    {
      "id": "q-g7-3",
      "text": "Meridian qövsü boyunca hər $1^\\circ$-lik məsafə təqribən neçə kilometrə bərabərdir?",
      "subjectId": "cografiya",
      "grade": 7,
      "topicTags": [
        "Meridian",
        "Dərəcə toru"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "100 km"
        },
        {
          "key": "B",
          "text": "111 km"
        },
        {
          "key": "C",
          "text": "120 km"
        },
        {
          "key": "D",
          "text": "80 km"
        },
        {
          "key": "E",
          "text": "40 km"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "Bütün meridianlar bərabər uzunluqludur (təqribən 40,000 km / 360°).",
        "formula": "$$40\\,000 / 360 \\approx 111.1 \\text{ km}$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Bölgü",
            "content": "Meridian çevrəsi 360°-dir. Hər 1° qövs orta hesabla 111 km-dir."
          }
        ],
        "conclusion": "Düzgün variant: B."
      }
    },
    {
      "id": "q-g7-4",
      "text": "Qrinviç rəsədxanasından keçən başlanğıc meridianı neçə dərəcəlikdir?",
      "subjectId": "cografiya",
      "grade": 7,
      "topicTags": [
        "Qrinviç",
        "Meridian"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "0°"
        },
        {
          "key": "B",
          "text": "90°"
        },
        {
          "key": "C",
          "text": "180°"
        },
        {
          "key": "D",
          "text": "360°"
        },
        {
          "key": "E",
          "text": "45°"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Beynəlxalq razılaşma ilə Qrinviç meridianı.",
        "formula": "Başlanğıc meridianı 0° uzunluq qəbul edilmişdir.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Təyinat",
            "content": "London yaxınlığındakı Qrinviç meridianı 0°-dir və Qərb/Şərq yarımkürələrini ayırır."
          }
        ],
        "conclusion": "Düzgün variant: A."
      }
    },
    {
      "id": "q-g7-5",
      "text": "Hansı miqyas daha böyükdür (daha xırdalıqlı təsvir verir)?",
      "subjectId": "cografiya",
      "grade": 7,
      "topicTags": [
        "Miqyas növləri"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "$1 : 10\\,000$"
        },
        {
          "key": "B",
          "text": "$1 : 100\\,000$"
        },
        {
          "key": "C",
          "text": "$1 : 1\\,000\\,000$"
        },
        {
          "key": "D",
          "text": "$1 : 5\\,000\\,000$"
        },
        {
          "key": "E",
          "text": "$1 : 10\\,000\\,000$"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Miqyas bir kəsrdir ($1/M$).",
        "formula": "Məxrəci kiçik olan kəsr daha böyükdür.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Kəsrlərin müqayisəsi",
            "content": "1/10,000 digər bütün kəsrlərdən böyükdür, yəni ərazi ən az kiçildilmişdir və ən böyük miqyasdır."
          }
        ],
        "conclusion": "Düzgün variant: A."
      }
    }
  ]
},
{
  "id": "exam-azeri-8-ksq-1-a",
  "title": "8-ci Sinif Azərbaycan Dili - I Yarımil Kiçik Summativ Qiymətləndirmə (KSQ-1)",
  "subjectId": "azerbaycan_dili",
  "grade": 8,
  "examType": "KSQ",
  "semester": 1,
  "variant": "A",
  "durationMinutes": 45,
  "totalQuestions": 5,
  "maxScore": 100,
  "schoolMetadata": {
    "ministry": "Azərbaycan Respublikası Elm və Təhsil Nazirliyi",
    "schoolName": "Məktəb Kompleksi",
    "academicYear": "2025-2026-cı tədris ili",
    "teacherSignatureLabel": "Fənn müəlliminin imzası"
  },
  "questions": [
    {
      "id": "q-az8-1",
      "text": "\"Vətənini sevən gənclər ölkənin gələcəyini qururlar.\" cümləsində mübtəda hansı sözdür?",
      "subjectId": "azerbaycan_dili",
      "grade": 8,
      "topicTags": [
        "Sintaksis",
        "Mübtəda"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Vətənini"
        },
        {
          "key": "B",
          "text": "gənclər"
        },
        {
          "key": "C",
          "text": "ölkənin"
        },
        {
          "key": "D",
          "text": "qururlar"
        },
        {
          "key": "E",
          "text": "gələcəyini"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "Cümlə: \"Vətənini sevən gənclər ölkənin gələcəyini qururlar.\"",
        "formula": "Mübtəda cümlənin baş üzvüdür, 'Kim? Nə? Hara?' sualına cavab verir və adlıq halda olur.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Sual verək",
            "content": "Qururlar - kim? -> gənclər. \"Vətənini sevən\" isə təyindir."
          }
        ],
        "conclusion": "Mübtəda 'gənclər' sözüdür. Düzgün variant: B."
      }
    },
    {
      "id": "q-az8-2",
      "text": "\"Açar sözləri diqqətlə oxuyun\" cümləsində \"diqqətlə\" sözü hansı cümlə üzvüdür?",
      "subjectId": "azerbaycan_dili",
      "grade": 8,
      "topicTags": [
        "Zərflik",
        "Cümlə üzvləri"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Təyin"
        },
        {
          "key": "B",
          "text": "Tamamlıq"
        },
        {
          "key": "C",
          "text": "Tərzi-hərəkət zərfliyi"
        },
        {
          "key": "D",
          "text": "Xəbər"
        },
        {
          "key": "E",
          "text": "Mübtəda"
        }
      ],
      "correctKey": "C",
      "explanationCoT": {
        "given": "\"diqqətlə oxuyun\".",
        "formula": "Hərəkətin icra tərzini bildirən və 'necə? nə cür?' sualına cavab verən üzv tərzi-hərəkət zərfliyidir.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Sual",
            "content": "Oxuyun - necə? diqqətlə. Feli izah edir."
          }
        ],
        "conclusion": "Tərzi-hərəkət zərfliyidir. Düzgün variant: C."
      }
    },
    {
      "id": "q-az8-3",
      "text": "Aşağıdakı cümlələrdən hansında ismi xəbər işlənmişdir?",
      "subjectId": "azerbaycan_dili",
      "grade": 8,
      "topicTags": [
        "İsmi xəbər",
        "Xəbər"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Şagirdlər həyətdə qaçırdılar."
        },
        {
          "key": "B",
          "text": "Bakı küləklər şəhəridir."
        },
        {
          "key": "C",
          "text": "Müəllim dərsi izah etdi."
        },
        {
          "key": "D",
          "text": "Zəng çalındı."
        },
        {
          "key": "E",
          "text": "Biz yarışda qalib gəldik."
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "İsmi xəbər adlarla və ismi birləşmələrlə ifadə olunur.",
        "formula": "\"şəhəridir\" ismi birləşmə tərkibində isimdir və xəbərlik şəkilçisi (-dir) qəbul etmişdir.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Variantların təhlili",
            "content": "B variantında 'şəhəridir' ismi xəbərdir, digər variantlar isə təsriflənən fellərlə (feli xəbər) ifadə olunub."
          }
        ],
        "conclusion": "Düzgün variant: B."
      }
    },
    {
      "id": "q-az8-4",
      "text": "Vasitəsiz tamamlıq hansı halda olan sözlərlə ifadə olunur?",
      "subjectId": "azerbaycan_dili",
      "grade": 8,
      "topicTags": [
        "Tamamlıq",
        "İsmin halları"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Yalnız adlıq halda"
        },
        {
          "key": "B",
          "text": "Müəyyən və qeyri-müəyyən təsirlik halda"
        },
        {
          "key": "C",
          "text": "Yönlük və yerlik halda"
        },
        {
          "key": "D",
          "text": "Çıxışlıq halda"
        },
        {
          "key": "E",
          "text": "Yiyəlik halda"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "Tamamlığın növləri: vasitəli və vasitəsiz.",
        "formula": "Vasitəsiz tamamlıq 'Kimi? Nəyi? Nə?' suallarına cavab verir və yalnız təsirlik halda olur.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Qayda",
            "content": "Təsirlik halın müəyyən (-ı, -i) və qeyri-müəyyən forması vasitəsiz tamamlıq yaradır."
          }
        ],
        "conclusion": "Düzgün variant: B."
      }
    },
    {
      "id": "q-az8-5",
      "text": "\"Məktəbin həyətində böyük çinar ağacı ucalırdı.\" cümləsində cümlə üzvlərinin düzgün ardıcıllığı hansıdır?",
      "subjectId": "azerbaycan_dili",
      "grade": 8,
      "topicTags": [
        "Sintaktik təhlil"
      ],
      "difficulty": 3,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Zərflik, təyin, mübtəda, xəbər"
        },
        {
          "key": "B",
          "text": "Mübtəda, təyin, zərflik, xəbər"
        },
        {
          "key": "C",
          "text": "Tamamlıq, təyin, mübtəda, xəbər"
        },
        {
          "key": "D",
          "text": "Zərflik, mübtəda, tamamlıq, xəbər"
        },
        {
          "key": "E",
          "text": "Təyin, zərflik, mübtəda, xəbər"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Cümlə: Məktəbin həyətində (harada? - zərflik) böyük (necə? - təyin) çinar ağacı (nə? - mübtəda) ucalırdı (nə edirdi? - xəbər).",
        "formula": "Sintaktik suallar verilir.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Təhlil",
            "content": "1. Məktəbin həyətində -> yer zərfliyi; 2. böyük -> təyin; 3. çinar ağacı -> mübtəda; 4. ucalırdı -> xəbər."
          }
        ],
        "conclusion": "Düzgün variant: A."
      }
    }
  ]
},
{
  "id": "exam-hist-9-bsq-1-a",
  "title": "9-cu Sinif Azərbaycan Tarixi - I Yarımil Böyük Summativ Qiymətləndirmə (BSQ-1)",
  "subjectId": "tarix",
  "grade": 9,
  "examType": "BSQ",
  "semester": 1,
  "variant": "A",
  "durationMinutes": 45,
  "totalQuestions": 5,
  "maxScore": 100,
  "schoolMetadata": {
    "ministry": "Azərbaycan Respublikası Elm və Təhsil Nazirliyi",
    "schoolName": "Məktəb-Lisey Şəbəkəsi",
    "academicYear": "2025-2026-cı tədris ili",
    "teacherSignatureLabel": "Fənn müəlliminin imzası"
  },
  "questions": [
    {
      "id": "q-h9-1",
      "text": "1501-ci il Şərur döyüşündə I İsmayıl hansı hökmdarın qoşunlarını məğlub etmişdir?",
      "subjectId": "tarix",
      "grade": 9,
      "topicTags": [
        "Səfəvilər",
        "Şərur döyüşü"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Əlvənd Mirzə"
        },
        {
          "key": "B",
          "text": "Murad Mirzə"
        },
        {
          "key": "C",
          "text": "Fərrux Yasar"
        },
        {
          "key": "D",
          "text": "Sultan Səlim"
        },
        {
          "key": "E",
          "text": "Uzun Həsən"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "1501-ci il Şərur döyüşü.",
        "formula": "Ağqoyunlu Əlvənd Mirzə məğlub edilmiş və İsmayıl Təbrizə yol açmışdır.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Tarixi fakt",
            "content": "1500-cü ildə Cabanı döyüşündə Fərrux Yasar, 1501-ci ildə Şərurda isə Ağqoyunlu Əlvənd Mirzə məğlub edildi."
          }
        ],
        "conclusion": "Düzgün variant: A."
      }
    },
    {
      "id": "q-h9-2",
      "text": "Səfəvilər dövlətində ordunun ali baş komandanı necə adlanırdı?",
      "subjectId": "tarix",
      "grade": 9,
      "topicTags": [
        "Dövlət quruluşu",
        "Səfəvilər"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Vəkil"
        },
        {
          "key": "B",
          "text": "Əmir əl-üməra"
        },
        {
          "key": "C",
          "text": "Sədr"
        },
        {
          "key": "D",
          "text": "Qorçubaşı"
        },
        {
          "key": "E",
          "text": "Bəylərbəyi"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "Səfəvilər dövlət idarəetmə və ordu sistemi.",
        "formula": "Əmir əl-üməra hərbi qüvvələrin başçısı (baş sərkərdə) idi.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Vəzifələr",
            "content": "Vəkil şahın dini və dünyəvi müavini, Sədr ruhani idarə rəhbəri, Əmir əl-üməra isə baş komandan idi."
          }
        ],
        "conclusion": "Düzgün variant: B."
      }
    },
    {
      "id": "q-h9-3",
      "text": "23 avqust 1514-cü ildə baş vermiş tarixi Çaldıran döyüşünün nəticəsi nə olmuşdur?",
      "subjectId": "tarix",
      "grade": 9,
      "topicTags": [
        "Çaldıran",
        "Osmanlı-Səfəvi"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Səfəvilər qəti qələbə qazandı"
        },
        {
          "key": "B",
          "text": "Osmanlı ordusu odlu silah və artilleriya üstünlüyü ilə qalib gəldi"
        },
        {
          "key": "C",
          "text": "Sülh müqaviləsi imzalandı"
        },
        {
          "key": "D",
          "text": "Səfəvilər dövləti süqut etdi"
        },
        {
          "key": "E",
          "text": "Heç bir tərəf qalib gəlmədi"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "Çaldıran döyüşü (1514).",
        "formula": "Osmanlı sultanı I Səlim 300 top və tüfənglərdən istifadə edərək say üstünlüyü qazandı.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Nəticə",
            "content": "I Şah İsmayılın igidliyinə baxmayaraq odlu silah faktoru Osmanlıların qələbəsini təmin etdi."
          }
        ],
        "conclusion": "Düzgün variant: B."
      }
    },
    {
      "id": "q-h9-4",
      "text": "Şirvanşahlar dövlətinin müstəqilliyinə neçənci ildə və hansı Səfəvi hökmdarı tərəfindən son qoyulmuşdur?",
      "subjectId": "tarix",
      "grade": 9,
      "topicTags": [
        "Şirvanşahlar",
        "I Təhmasib"
      ],
      "difficulty": 3,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "1538-ci ildə I Təhmasib"
        },
        {
          "key": "B",
          "text": "1501-ci ildə I İsmayıl"
        },
        {
          "key": "C",
          "text": "1551-ci ildə I Şah Abbas"
        },
        {
          "key": "D",
          "text": "1578-ci ildə Məhəmməd Xudabəndə"
        },
        {
          "key": "E",
          "text": "1500-cü ildə Cabanı döyüşündə"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Şirvanşahlar dövlətinin Səfəvilər tərəfindən ilhaqı.",
        "formula": "1538-ci ildə I Şah Təhmasib Şirvanı bəylərbəyiliyə çevirdi.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Tarix",
            "content": "1538-ci ildə Şah Təhmasibin qardaşı Əlqas Mirzə Şirvana ilk bəylərbəyi təyin edildi və Şirvanşahlar süqut etdi."
          }
        ],
        "conclusion": "Düzgün variant: A."
      }
    },
    {
      "id": "q-h9-5",
      "text": "1555-ci ildə Səfəvilər ilə Osmanlı imperiyası arasında imzalanmış ilk rəsmi sülh müqaviləsi hansıdır?",
      "subjectId": "tarix",
      "grade": 9,
      "topicTags": [
        "Amasya sülhü"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "İstanbul sülhü"
        },
        {
          "key": "B",
          "text": "Amasya sülh müqaviləsi"
        },
        {
          "key": "C",
          "text": "Qəsri-Şirin müqaviləsi"
        },
        {
          "key": "D",
          "text": "Nəsuh paşa sülhü"
        },
        {
          "key": "E",
          "text": "Gəncə müqaviləsi"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "1555-ci il müqaviləsi.",
        "formula": "Amasya şəhərində imzalanan ilk rəsmi dövlətlərarası sülh sazişi.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Saziş",
            "content": "29 may 1555-ci ildə Amasyada imzalanmış müqavilə ilə birinci Osmanlı-Səfəvi müharibəsi başa çatdı."
          }
        ],
        "conclusion": "Düzgün variant: B."
      }
    }
  ]
},
{
  "id": "exam-inf-8-ksq-1-a",
  "title": "8-ci Sinif İnformatika - I Yarımil Kiçik Summativ Qiymətləndirmə (KSQ-1)",
  "subjectId": "informatika",
  "grade": 8,
  "examType": "KSQ",
  "semester": 1,
  "variant": "A",
  "durationMinutes": 45,
  "totalQuestions": 5,
  "maxScore": 100,
  "schoolMetadata": {
    "ministry": "Azərbaycan Respublikası Elm və Təhsil Nazirliyi",
    "schoolName": "İnformatika Təmayüllü Lisey",
    "academicYear": "2025-2026-cı tədris ili",
    "teacherSignatureLabel": "Fənn müəlliminin imzası"
  },
  "questions": [
    {
      "id": "q-inf8-1",
      "text": "1 Kilobayt (KB) neçə bitə bərabərdir?",
      "subjectId": "informatika",
      "grade": 8,
      "topicTags": [
        "Ölçü vahidləri",
        "Bit və bayt"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "1024 bit"
        },
        {
          "key": "B",
          "text": "8192 bit"
        },
        {
          "key": "C",
          "text": "8000 bit"
        },
        {
          "key": "D",
          "text": "1000 bit"
        },
        {
          "key": "E",
          "text": "2048 bit"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "1 KB = 1024 Bayt, 1 Bayt = 8 bit.",
        "formula": "$$1 \\text{ KB} = 1024 \\times 8 \\text{ bit}$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Vurma əməliyyatı",
            "content": "$$1024 \\times 8 = 8192 \\text{ bit}$$"
          }
        ],
        "conclusion": "1 KB = 8192 bit-dir. Düzgün variant: B."
      }
    },
    {
      "id": "q-inf8-2",
      "text": "Əlifbada 32 simvol varsa, bir simvolun informasiya tutumu Xartli düsturuna görə neçə bitdir?",
      "subjectId": "informatika",
      "grade": 8,
      "topicTags": [
        "Xartli düsturu"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "4 bit"
        },
        {
          "key": "B",
          "text": "5 bit"
        },
        {
          "key": "C",
          "text": "6 bit"
        },
        {
          "key": "D",
          "text": "8 bit"
        },
        {
          "key": "E",
          "text": "32 bit"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "$N = 32$.",
        "formula": "$$N = 2^i \\implies 32 = 2^i$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "2-nin qüvvəti",
            "content": "$$2^5 = 32 \\implies i = 5 \\text{ bit}$$"
          }
        ],
        "conclusion": "Hər simvol 5 bitdir. Düzgün variant: B."
      }
    },
    {
      "id": "q-inf8-3",
      "text": "ASCII kodlaşdırma cədvəlində hər bir simvol yaddaşda neçə bayt yer tutur?",
      "subjectId": "informatika",
      "grade": 8,
      "topicTags": [
        "ASCII",
        "Kodlaşdırma"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "1 bayt (8 bit)"
        },
        {
          "key": "B",
          "text": "2 bayt (16 bit)"
        },
        {
          "key": "C",
          "text": "4 bayt"
        },
        {
          "key": "D",
          "text": "1 bit"
        },
        {
          "key": "E",
          "text": "16 bayt"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "ASCII standartı 256 simvoldan ibarətdir ($2^8 = 256$).",
        "formula": "1 simvol = 8 bit = 1 bayt.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Qayda",
            "content": "ASCII-də hər simvol üçün 1 bayt ayrılır."
          }
        ],
        "conclusion": "Düzgün variant: A."
      }
    },
    {
      "id": "q-inf8-4",
      "text": "Mətn faylında 1024 simvol var. Bu mətn Unicode (hər simvol 2 bayt) ilə kodlaşdırılarsa, faylın həcmi neçə Kilobayt (KB) olar?",
      "subjectId": "informatika",
      "grade": 8,
      "topicTags": [
        "Fayl həcmi",
        "Unicode"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "1 KB"
        },
        {
          "key": "B",
          "text": "2 KB"
        },
        {
          "key": "C",
          "text": "4 KB"
        },
        {
          "key": "D",
          "text": "512 KB"
        },
        {
          "key": "E",
          "text": "8 KB"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "$K = 1024$ simvol, 1 simvol = 2 Bayt.",
        "formula": "$$I = K \\times i = 1024 \\times 2 = 2048 \\text{ Bayt}$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Kilobayta çevirək",
            "content": "$$2048 / 1024 = 2 \\text{ KB}$$"
          }
        ],
        "conclusion": "Həcm 2 KB-dır. Düzgün variant: B."
      }
    },
    {
      "id": "q-inf8-5",
      "text": "Kompüterin mərkəzi prosessorunun (CPU) əsas vəzifəsi nədir?",
      "subjectId": "informatika",
      "grade": 8,
      "topicTags": [
        "Prosessor",
        "Aparat təminatı"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Məlumatları ekranda göstərmək"
        },
        {
          "key": "B",
          "text": "Hesab-məntiq əməliyyatlarını icra etmək və qurğuları idarə etmək"
        },
        {
          "key": "C",
          "text": "Məlumatları uzunmüddətli maqnit diskində saxlamaq"
        },
        {
          "key": "D",
          "text": "Kompüteri elektrik şəbəkəsinə qoşmaq"
        },
        {
          "key": "E",
          "text": "İnternetə qoşulmanı təmin etmək"
        }
      ],
      "correctKey": "B",
      "explanationCoT": {
        "given": "Mərkəzi Prosessor (CPU) kompüterin beynidir.",
        "formula": "Prosessor hesab-məntiq qurğusu (ALU) və idarəetmə qurğusundan (CU) ibarətdir.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Funksiya",
            "content": "Proqram əmrlərini emal edir, riyazi hesablamaları icra edir və daxili qurğuların işini tənzimləyir."
          }
        ],
        "conclusion": "Düzgün variant: B."
      }
    }
  ]
},
{
  "id": "exam-chem-9-ksq-1-a",
  "title": "9-cu Sinif Kimya - I Yarımil Kiçik Summativ Qiymətləndirmə (KSQ-1)",
  "subjectId": "kimya",
  "grade": 9,
  "examType": "KSQ",
  "semester": 1,
  "variant": "A",
  "durationMinutes": 45,
  "totalQuestions": 5,
  "maxScore": 100,
  "schoolMetadata": {
    "ministry": "Azərbaycan Respublikası Elm və Təhsil Nazirliyi",
    "schoolName": "Məktəb-Lisey Kompleksi",
    "academicYear": "2025-2026-cı tədris ili",
    "teacherSignatureLabel": "Fənn müəlliminin imzası"
  },
  "questions": [
    {
      "id": "q-chem9-1",
      "text": "Nisbi molekul kütləsi $M_r(H_2SO_4) = 98$ olan sulfat turşusunda kükürdün ($S$) kütlə payını (faizlə) hesablayın. ($A_r(H)=1, A_r(S)=32, A_r(O)=16$)",
      "subjectId": "kimya",
      "grade": 9,
      "topicTags": [
        "Maddə tərkibi",
        "Kütlə payı",
        "Sulfat turşusu"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "32.65%"
        },
        {
          "key": "B",
          "text": "64.20%"
        },
        {
          "key": "C",
          "text": "2.04%"
        },
        {
          "key": "D",
          "text": "48.10%"
        },
        {
          "key": "E",
          "text": "16.32%"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "$M_r(H_2SO_4) = 2 \\cdot 1 + 32 + 4 \\cdot 16 = 98$. $A_r(S) = 32$.",
        "formula": "$$\\omega(E) = \\frac{n \\cdot A_r(E)}{M_r} \\cdot 100\\%$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Kükürdün kütləsini ümumi molekul kütləsinə nisbət edək",
            "content": "$$\\omega(S) = \\frac{32}{98} \\cdot 100\\% \\approx 32.65\\%$$"
          }
        ],
        "conclusion": "Sulfat turşusunda kükürdün kütlə payı 32.65%-dir. Düzgün variant: A."
      }
    },
    {
      "id": "q-chem9-2",
      "text": "Dövri sistemdə 3-cü dövr, VIA yarımqrupunda yerləşən elementin sıra nömrəsi və xarici energetik təbəqəsindəki elektronların sayı neçədir?",
      "subjectId": "kimya",
      "grade": 9,
      "topicTags": [
        "Dövri Qanun",
        "Atom quruluşu"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Sıra nömrəsi 16, xarici elektron 6"
        },
        {
          "key": "B",
          "text": "Sıra nömrəsi 8, xarici elektron 6"
        },
        {
          "key": "C",
          "text": "Sıra nömrəsi 14, xarici elektron 4"
        },
        {
          "key": "D",
          "text": "Sıra nömrəsi 15, xarici elektron 5"
        },
        {
          "key": "E",
          "text": "Sıra nömrəsi 17, xarici elektron 7"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Dövr nömrəsi = təbəqə sayı (3). Əsas yarımqrup nömrəsi = xarici elektron sayı (6).",
        "formula": "Elektron konfiqurasiyası: $1s^2 2s^2 2p^6 3s^2 3p^4$.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Elektronların ümumi cəmini hesablayaq",
            "content": "$$2 + 2 + 6 + 2 + 4 = 16$$ Bu Kükürd ($S$) elementidir."
          }
        ],
        "conclusion": "Sıra nömrəsi 16, xarici valent elektronlarının sayı isə 6-dır. Düzgün variant: A."
      }
    },
    {
      "id": "q-chem9-3",
      "text": "Normal şəraitdə (n.ş.) 44.8 litr həcm tutan metan ($CH_4$) qazı neçə moldur və neçə molekula malikdir?",
      "subjectId": "kimya",
      "grade": 9,
      "topicTags": [
        "Avoqadro Qanunu",
        "Qazların molyar həcmi"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "$2 \\text{ mol}, 1.204 \\cdot 10^{24} \\text{ molekul}$"
        },
        {
          "key": "B",
          "text": "$1 \\text{ mol}, 6.02 \\cdot 10^{23} \\text{ molekul}$"
        },
        {
          "key": "C",
          "text": "$0.5 \\text{ mol}, 3.01 \\cdot 10^{23} \\text{ molekul}$"
        },
        {
          "key": "D",
          "text": "$4 \\text{ mol}, 2.408 \\cdot 10^{24} \\text{ molekul}$"
        },
        {
          "key": "E",
          "text": "$22.4 \\text{ mol}, 6.02 \\cdot 10^{24} \\text{ molekul}$"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Qazın həcmi $V = 44.8 \\text{ l}$, Molyar həcm $V_m = 22.4 \\text{ l/mol}$, Avoqadro sabiti $N_A = 6.02 \\cdot 10^{23}$.",
        "formula": "$$\\nu = \\frac{V}{V_m}, \\quad N = \\nu \\cdot N_A$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Molların sayını tapaq",
            "content": "$$\\nu = \\frac{44.8}{22.4} = 2 \\text{ mol}$$"
          },
          {
            "stepNumber": 2,
            "title": "Molekulların sayını tapaq",
            "content": "$$N = 2 \\cdot 6.02 \\cdot 10^{23} = 1.204 \\cdot 10^{24}$$"
          }
        ],
        "conclusion": "Metan qazı 2 mol və $1.204 \\cdot 10^{24}$ molekuldur. Düzgün variant: A."
      }
    },
    {
      "id": "q-chem9-4",
      "text": "Aşağıdakı rabitələrdən hansı qeyri-polyar kovalent rabitəyə aiddir?",
      "subjectId": "kimya",
      "grade": 9,
      "topicTags": [
        "Kimyəvi rabitə",
        "Kovalent rabitə"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "$N_2$ molekulu ($N \\equiv N$)"
        },
        {
          "key": "B",
          "text": "$HCl$ molekulu"
        },
        {
          "key": "C",
          "text": "$NaCl$ kristalı"
        },
        {
          "key": "D",
          "text": "$H_2O$ molekulu"
        },
        {
          "key": "E",
          "text": "$NH_3$ molekulu"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Eyni növ qeyri-metal atomları arasında elektromənfilik fərqi sıfırdır.",
        "formula": "Elektromənfilik fərqi $\\Delta \\chi = 0$ olduqda kovalent rabitə qeyri-polyar olur.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Variantları təhlil edək",
            "content": "$N_2$-də iki eyni azot atomu arasında ümumi elektron cütləri mərkəzdə bərabər bölünür, buna görə qeyri-polyar kovalentdir."
          }
        ],
        "conclusion": "$N_2$ qeyri-polyar kovalent rabitəlidir. Düzgün variant: A."
      }
    },
    {
      "id": "q-chem9-5",
      "text": "$200 \\text{ q}$ 20%-li duz məhluluna $50 \\text{ q}$ su əlavə etdikdə alınan yeni məhlulun kütlə payını hesablayın.",
      "subjectId": "kimya",
      "grade": 9,
      "topicTags": [
        "Məhlullar",
        "Qatılığın dəyişməsi"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "16%"
        },
        {
          "key": "B",
          "text": "18%"
        },
        {
          "key": "C",
          "text": "12%"
        },
        {
          "key": "D",
          "text": "15%"
        },
        {
          "key": "E",
          "text": "10%"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "$m_1 = 200 \\text{ q}$, $\\omega_1 = 20\\% = 0.20$. Əlavə edilən su: $m_{su} = 50 \\text{ q}$.",
        "formula": "$$m_{duz} = m_1 \\cdot \\omega_1, \\quad \\omega_2 = \\frac{m_{duz}}{m_1 + m_{su}} \\cdot 100\\%$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Həll olan duzun kütləsini tapaq",
            "content": "$$m_{duz} = 200 \\cdot 0.20 = 40 \\text{ q}$$"
          },
          {
            "stepNumber": 2,
            "title": "Yeni ümumi məhlul kütləsini və faizi tapaq",
            "content": "$$m_{yeni} = 200 + 50 = 250 \\text{ q}$$ $$\\omega_2 = \\frac{40}{250} \\cdot 100\\% = 16\\%$$"
          }
        ],
        "conclusion": "Yeni məhlulun qatılığı 16%-dir. Düzgün variant: A."
      }
    }
  ]
},
{
  "id": "exam-bio-10-bsq-1-a",
  "title": "10-cu Sinif Biologiya - I Yarımil Böyük Summativ Qiymətləndirmə (BSQ-1)",
  "subjectId": "biologiya",
  "grade": 10,
  "examType": "BSQ",
  "semester": 1,
  "variant": "A",
  "durationMinutes": 45,
  "totalQuestions": 5,
  "maxScore": 100,
  "schoolMetadata": {
    "ministry": "Azərbaycan Respublikası Elm və Təhsil Nazirliyi",
    "schoolName": "Məktəb-Lisey Kompleksi",
    "academicYear": "2025-2026-cı tədris ili",
    "teacherSignatureLabel": "Fənn müəlliminin imzası"
  },
  "questions": [
    {
      "id": "q-bio10-1",
      "text": "DNT molekulunda 600 adenin ($A$) nukleotidi olarsa və adenin bütün nukleotidlərin 20%-ni təşkil edərsə, bu DNT-dəki quanin ($G$) nukleotidlərinin sayını tapın.",
      "subjectId": "biologiya",
      "grade": 10,
      "topicTags": [
        "DNT quruluşu",
        "Şarqaff qaydası",
        "Nukleotidlər"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "900"
        },
        {
          "key": "B",
          "text": "600"
        },
        {
          "key": "C",
          "text": "1200"
        },
        {
          "key": "D",
          "text": "1500"
        },
        {
          "key": "E",
          "text": "3000"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "$A = 600$ və $A = 20\\%$. Şarqaff qaydasına görə: $A = T = 20\\%$.",
        "formula": "$$A + T + G + C = 100\\%, \\quad G = C$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Ümumi nukleotidlərin sayını hesablayaq",
            "content": "$$N_{umumi} = \\frac{600}{0.20} = 3000 \\text{ nukleotid}$$"
          },
          {
            "stepNumber": 2,
            "title": "Quanin və sitozin faizini və sayını hesablayaq",
            "content": "$$G + C = 100\\% - (20\\% + 20\\%) = 60\\% \\implies G = 30\\%$$ $$G = 3000 \\cdot 0.30 = 900$$"
          }
        ],
        "conclusion": "DNT molekulunda 900 quanin nukleotidi vardır. Düzgün variant: A."
      }
    },
    {
      "id": "q-bio10-2",
      "text": "Mitoz bölünmənin hansı fazasında xromosomlar hüceyrənin ekvator müstəvisində düzülərək metafaza lövhəsini əmələ gətirir?",
      "subjectId": "biologiya",
      "grade": 10,
      "topicTags": [
        "Hüceyrə bölünməsi",
        "Mitoz fazaları"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Metafaza"
        },
        {
          "key": "B",
          "text": "Profaza"
        },
        {
          "key": "C",
          "text": "Anafaza"
        },
        {
          "key": "D",
          "text": "Telofaza"
        },
        {
          "key": "E",
          "text": "İnterfaza"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Mitoz mərhələləri: Profaza -> Metafaza -> Anafaza -> Telofaza.",
        "formula": "Metafaza mərhələsində bölünmə vətərləri kinetoxorlara birləşir və xromosomlar ekvatorda düzülür.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Metafazanın xarakterik xüsusiyyəti",
            "content": "Xromosomların mikroskop altında ən aydın göründüyü və ekvatora toplaşdığı faza metafazadır."
          }
        ],
        "conclusion": "Düzgün variant: A (Metafaza)."
      }
    },
    {
      "id": "q-bio10-3",
      "text": "Fotosintezin işıq mərhələsində baş verən fotoliz prosesi nəticəsində ətraf mühitə hansı sərbəst qaz xaric olunur?",
      "subjectId": "biologiya",
      "grade": 10,
      "topicTags": [
        "Fotosintez",
        "Suyun fotolizi"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "Oksigen ($O_2$)"
        },
        {
          "key": "B",
          "text": "Karbon qazı ($CO_2$)"
        },
        {
          "key": "C",
          "text": "Azot ($N_2$)"
        },
        {
          "key": "D",
          "text": "Metan ($CH_4$)"
        },
        {
          "key": "E",
          "text": "Hidrogen sulfid ($H_2S$)"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "İşıq mərhələsində tilakoid membranında su molekulu günəş işığı təsirilə parçalanır: $2H_2O \\to 4H^+ + 4e^- + O_2$.",
        "formula": "Fotoliz reaksiyası sərbəst molekulyar oksigen əmələ gətirir.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Prosesin təhlili",
            "content": "Fotosintezdə xaric olunan oksigenin mənbəyi karbon qazı deyil, məhz suyun fotolizidir."
          }
        ],
        "conclusion": "Ətraf mühitə sərbəst oksigen qazı ayrılır. Düzgün variant: A."
      }
    },
    {
      "id": "q-bio10-4",
      "text": "İnsanın somatik (bədən) hüceyrəsində 46 xromosom varsa, qametlərində (cinsiyyət hüceyrələrində) neçə xromosom olar?",
      "subjectId": "biologiya",
      "grade": 10,
      "topicTags": [
        "Xromosom dəsti",
        "Meyoz"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "23 xromosom"
        },
        {
          "key": "B",
          "text": "46 xromosom"
        },
        {
          "key": "C",
          "text": "92 xromosom"
        },
        {
          "key": "D",
          "text": "44 xromosom"
        },
        {
          "key": "E",
          "text": "2 xromosom"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Somatik hüceyrələr diploid ($2n = 46$), cinsi hüceyrələr haploid ($n$) dəstə malikdir.",
        "formula": "$$n = \\frac{2n}{2} = \\frac{46}{2} = 23$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Meyoz bölünmənin nəticəsi",
            "content": "Qametogenez zamanı meyoz nəticəsində xromosom sayı 2 dəfə reduksiya olunur."
          }
        ],
        "conclusion": "Qametlərdə 23 xromosom olur. Düzgün variant: A."
      }
    },
    {
      "id": "q-bio10-5",
      "text": "Zülal molekulunun tərkibində 150 aminturşu qalığı varsa, bu zülalı kodlaşdıran məlumat RNT-sində (m-RNT) neçə nukleotid olar?",
      "subjectId": "biologiya",
      "grade": 10,
      "topicTags": [
        "Genetik kod",
        "Translyasiya",
        "Zülal biosintezi"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "450 nukleotid"
        },
        {
          "key": "B",
          "text": "150 nukleotid"
        },
        {
          "key": "C",
          "text": "300 nukleotid"
        },
        {
          "key": "D",
          "text": "600 nukleotid"
        },
        {
          "key": "E",
          "text": "50 nukleotid"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "1 aminturşunu 1 triplet (yəni 3 nukleotid) kodlaşdırır.",
        "formula": "$$N_{nukleotid} = N_{amintursu} \\cdot 3$$",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Nukleotid sayını hesablayaq",
            "content": "$$N = 150 \\cdot 3 = 450 \\text{ nukleotid}$$"
          }
        ],
        "conclusion": "m-RNT zəncirində 450 nukleotid olar. Düzgün variant: A."
      }
    }
  ]
},
{
  "id": "exam-eng-9-ksq-1-a",
  "title": "9-cu Sinif İngilis Dili - I Yarımil Kiçik Summativ Qiymətləndirmə (KSQ-1)",
  "subjectId": "ingilis_dili",
  "grade": 9,
  "examType": "KSQ",
  "semester": 1,
  "variant": "A",
  "durationMinutes": 45,
  "totalQuestions": 5,
  "maxScore": 100,
  "schoolMetadata": {
    "ministry": "Azərbaycan Respublikası Elm və Təhsil Nazirliyi",
    "schoolName": "Məktəb-Lisey Kompleksi",
    "academicYear": "2025-2026-cı tədris ili",
    "teacherSignatureLabel": "Fənn müəlliminin imzası"
  },
  "questions": [
    {
      "id": "q-eng9-1",
      "text": "Choose the correct Passive Voice form: 'The engineer designed a state-of-the-art laboratory yesterday.'",
      "subjectId": "ingilis_dili",
      "grade": 9,
      "topicTags": [
        "Passive Voice",
        "Past Simple Passive"
      ],
      "difficulty": 2,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "A state-of-the-art laboratory was designed by the engineer yesterday."
        },
        {
          "key": "B",
          "text": "A state-of-the-art laboratory is designed by the engineer yesterday."
        },
        {
          "key": "C",
          "text": "A state-of-the-art laboratory had been designed by the engineer yesterday."
        },
        {
          "key": "D",
          "text": "The engineer was designed a state-of-the-art laboratory yesterday."
        },
        {
          "key": "E",
          "text": "A state-of-the-art laboratory will be designed by the engineer."
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Active cümlə Past Simple zamandadır: Subject + $V_2$ + Object.",
        "formula": "Past Simple Passive: Object + was/were + $V_3$ (Past Participle) + by Subject.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Obyektin və felin müəyyənləşdirilməsi",
            "content": "'A state-of-the-art laboratory' təkdədir, ona görə 'was designed' forması işlənir."
          }
        ],
        "conclusion": "Düzgün variant: A."
      }
    },
    {
      "id": "q-eng9-2",
      "text": "Complete the Conditional sentence: 'If they ______ the flight on time, they will arrive in Baku before sunset.'",
      "subjectId": "ingilis_dili",
      "grade": 9,
      "topicTags": [
        "First Conditional",
        "Grammar"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "catch"
        },
        {
          "key": "B",
          "text": "caught"
        },
        {
          "key": "C",
          "text": "will catch"
        },
        {
          "key": "D",
          "text": "had caught"
        },
        {
          "key": "E",
          "text": "catches"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Baş cümlədə 'will arrive' (Future Simple) işlənib. Bu First Conditional (real şərt) cümləsidir.",
        "formula": "If + Present Simple, will + base verb ($V_1$).",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Mübtəda 'they' olduğu üçün felin forması",
            "content": "'They' şəxsi ilə Present Simple forma 'catch' olur."
          }
        ],
        "conclusion": "Düzgün cavab: A (catch)."
      }
    },
    {
      "id": "q-eng9-3",
      "text": "Choose the correct Relative Pronoun: 'The student ______ won the national Olympiad in Informatics received a scholarship.'",
      "subjectId": "ingilis_dili",
      "grade": 9,
      "topicTags": [
        "Relative Clauses",
        "Pronouns"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "who"
        },
        {
          "key": "B",
          "text": "which"
        },
        {
          "key": "C",
          "text": "whose"
        },
        {
          "key": "D",
          "text": "where"
        },
        {
          "key": "E",
          "text": "when"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Məlum şəxs bildirən isim: 'The student' (şagird - insan).",
        "formula": "İnsanlar üçün mübtəda rolunda 'who' nisbi əvəzliyi işlənir.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Əvəzliyin seçilməsi",
            "content": "İnsan üçün 'who', cansızlar üçün 'which', yer üçün 'where' istifadə olunur."
          }
        ],
        "conclusion": "Düzgün variant: A (who)."
      }
    },
    {
      "id": "q-eng9-4",
      "text": "Choose the correct modal verb for obligation: 'Students ______ wear their safety goggles while conducting chemical experiments in the laboratory.'",
      "subjectId": "ingilis_dili",
      "grade": 9,
      "topicTags": [
        "Modal Verbs",
        "Rules and Obligation"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "must"
        },
        {
          "key": "B",
          "text": "might"
        },
        {
          "key": "C",
          "text": "could"
        },
        {
          "key": "D",
          "text": "may"
        },
        {
          "key": "E",
          "text": "would"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "Laboratoriyada qoruyucu eynək taxmaq qəti təhlükəsizlik qaydası və məcburiyyətdir.",
        "formula": "Qəti tələb və qaydalar üçün 'must' modal feli işlənir.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Məna təhlili",
            "content": "'Must' feli mütləq riayət olunmalı vacib qaydanı bildirir."
          }
        ],
        "conclusion": "Düzgün variant: A (must)."
      }
    },
    {
      "id": "q-eng9-5",
      "text": "Choose the synonym of the underlined word: 'The scientist made a **remarkable** discovery that changed modern medicine.'",
      "subjectId": "ingilis_dili",
      "grade": 9,
      "topicTags": [
        "Vocabulary",
        "Synonyms"
      ],
      "difficulty": 1,
      "points": 20,
      "options": [
        {
          "key": "A",
          "text": "extraordinary"
        },
        {
          "key": "B",
          "text": "ordinary"
        },
        {
          "key": "C",
          "text": "dangerous"
        },
        {
          "key": "D",
          "text": "useless"
        },
        {
          "key": "E",
          "text": "boring"
        }
      ],
      "correctKey": "A",
      "explanationCoT": {
        "given": "'Remarkable' sözü 'qeyri-adi, diqqətəlayiq, möhtəşəm' mənasını verir.",
        "formula": "Remarkable = Extraordinary = Outstanding.",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Sinonim cütü",
            "content": "'Extraordinary' (qeyri-adi, heyrətamiz) 'remarkable' sözünün ən yaxın sinonimidir."
          }
        ],
        "conclusion": "Düzgün variant: A (extraordinary)."
      }
    }
  ]
}
];
