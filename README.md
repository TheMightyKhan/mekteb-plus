# MəktəbPlus - Milli Təhsil və İmtahan Portalı 🎓

Məktəb səviyyəsində bütün fənləri (Riyaziyyat, Fizika, Kimya, Biologiya, Coğrafiya, Tarix, Azərbaycan dili, Xarici dil, İnformatika) əhatə edən, BSQ/KSQ testlərinin arxivini, KaTeX və PhET dəstəkli interaktiv dərsləri və 1v1 PvP viktorina arenasını birləşdirən müasir EdTech platforması.

---

## 🌟 Əsas Xüsusiyyətlər

- **Dərslər və Nəzəriyyə Kataloqu:**
  - Sinif -> Bölmə -> Mövzu ağac naviqasiyası (Tree View).
  - KaTeX ilə render olunmuş düsturlar və terminlərin xülasəsi.
  - PhET İnteraktiv laboratoriya simulyasiyası.
  - Həlli gizlədilmiş nümunəvi məsələlər və "Özünü yoxla" mini-testləri.
- **BSQ / KSQ İmtahan Arxivi:**
  - Çoxölçülü süzgəc (Fənn, Sinif, Növ, Yarımil).
  - İnteraktiv həll rejimi və Azərbaycan məktəb qiymətləndirmə şkalası (2, 3, 4, 5).
  - AI Chain-of-Thought (Addım-addım həll izahı).
  - Elm və Təhsil Nazirliyi standartlı rəsmi çap və PDF vərəqi (`@media print`).
- **1v1 PvP Viktorina Arenası:**
  - "Dostla oyna" (otaq kodu ilə) və "Təsadüfi Rəqib" (Quick Match).
  - 15 saniyəlik dinamik taymer və sürət/kombo xal sistemi.
  - Qələbə konfettisi və Həftəlik Liderlər Cədvəli.
- **Məzmun İdarəetmə və Skaner Paneli:**
  - Canlı LaTeX önbaxışlı forma ilə yeni sualların daxil edilməsi.
  - OCR xam mətn təhlili və JSON bazasının ixrac/idxal edilməsi.
- **UI & Mövzu:**
  - Tailwind CSS ilə müasir kart dizaynı.
  - Qaranlıq və İşıqlı rejim dəstəyi.

---

## 🚀 Texnoloji Yığın (Tech Stack)

- **Frontend:** React 18, Native ES Modules, Tailwind CSS
- **Riyaziyyat və Düsturlar:** KaTeX
- **İnteraktivlik:** PhET Interactive Simulations iframe konteyneri
- **İkonlar & Animasiya:** FontAwesome 6, Canvas Confetti
- **Deploy:** Vercel

---

## 💻 Quraşdırma və İşə Salma

Layihə zero-build arxitekturasına malikdir və istənilən veb serverdə və ya birbaşa brauzerdə işə düşür:

```bash
# Python ilə lokal server:
python -m http.server 3000

# Brauzerdə açın:
http://localhost:3000
```
