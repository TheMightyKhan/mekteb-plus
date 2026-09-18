// MəktəbPlus - Yerli Yaddaş və Məlumat İdarəetmə Xidməti (Storage Service)

import { MOCK_LESSONS } from '../data/lessons.js';
import { MOCK_EXAMS } from '../data/exams.js';
import { MOCK_PVP_QUESTIONS } from '../data/pvpQuestions.js';

const STORAGE_KEYS = {
  LESSONS: 'mekteb_plus_lessons_v9',
  EXAMS: 'mekteb_plus_exams_v1',
  PVP_QUESTIONS: 'mekteb_plus_pvp_questions_v1',
  USER_STATS: 'mekteb_plus_user_stats_v1',
  THEME: 'mekteb_plus_theme_v1'
};

export const StorageService = {
  // Dərsləri oxu
  getLessons() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.LESSONS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage error reading lessons:', e);
    }
    return MOCK_LESSONS;
  },

  // Yeni dərs əlavə et
  saveLesson(newLesson) {
    const lessons = this.getLessons();
    const updated = [newLesson, ...lessons];
    try {
      localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(updated));
    } catch (e) {
      console.error('LocalStorage save lesson error:', e);
    }
    return updated;
  },

  // İmtahanları oxu
  getExams() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EXAMS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage error reading exams:', e);
    }
    return MOCK_EXAMS;
  },

  // İmtahana yeni sual əlavə et və ya yeni imtahan yarat
  saveExam(newExam) {
    const exams = this.getExams();
    const existingIndex = exams.findIndex(e => e.id === newExam.id);
    let updated;
    if (existingIndex >= 0) {
      updated = [...exams];
      updated[existingIndex] = newExam;
    } else {
      updated = [newExam, ...exams];
    }
    try {
      localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(updated));
    } catch (e) {
      console.error('LocalStorage save exam error:', e);
    }
    return updated;
  },

  // Mövcud imtahana yeni sual calaq et
  addQuestionToExam(examId, question) {
    const exams = this.getExams();
    const exam = exams.find(e => e.id === examId);
    if (!exam) return false;

    exam.questions.push(question);
    exam.totalQuestions = exam.questions.length;
    this.saveExam(exam);
    return exam;
  },

  // PvP suallarını oxu
  getPvpQuestions() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PVP_QUESTIONS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage error reading PvP questions:', e);
    }
    return MOCK_PVP_QUESTIONS;
  },

  // PvP sualı əlavə et
  addPvpQuestion(question) {
    const list = this.getPvpQuestions();
    const updated = [question, ...list];
    try {
      localStorage.setItem(STORAGE_KEYS.PVP_QUESTIONS, JSON.stringify(updated));
    } catch (e) {
      console.error('LocalStorage save PvP question error:', e);
    }
    return updated;
  },

  // Bütün bazanı JSON kimi ixrac et
  exportDatabaseJson() {
    const data = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      lessons: this.getLessons(),
      exams: this.getExams(),
      pvpQuestions: this.getPvpQuestions()
    };
    return JSON.stringify(data, null, 2);
  },

  // Xarici JSON-u bazaya idxal et
  importDatabaseJson(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.lessons && Array.isArray(parsed.lessons)) {
        localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(parsed.lessons));
      }
      if (parsed.exams && Array.isArray(parsed.exams)) {
        localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(parsed.exams));
      }
      if (parsed.pvpQuestions && Array.isArray(parsed.pvpQuestions)) {
        localStorage.setItem(STORAGE_KEYS.PVP_QUESTIONS, JSON.stringify(parsed.pvpQuestions));
      }
      return { success: true, message: 'Məlumat bazası uğurla idxal edildi!' };
    } catch (e) {
      return { success: false, message: 'Yanlış JSON formatı: ' + e.message };
    }
  },

  // Standart vəziyyətə sıfırla
  resetToDefault() {
    try {
      localStorage.removeItem(STORAGE_KEYS.LESSONS);
      localStorage.removeItem(STORAGE_KEYS.EXAMS);
      localStorage.removeItem(STORAGE_KEYS.PVP_QUESTIONS);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },

  // İstifadəçi profil və statistikaları
  getUserStats() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER_STATS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}
    return {
      name: 'Şagird',
      grade: 10,
      pvpScore: 1420,
      pvpWins: 12,
      pvpMatches: 15,
      completedLessons: 6,
      examsCompleted: 4,
      xp: 3200
    };
  },

  updateUserStats(updater) {
    const current = this.getUserStats();
    const updated = typeof updater === 'function' ? updater(current) : { ...current, ...updater };
    try {
      localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(updated));
    } catch (e) {}
    return updated;
  },

  // Canlı Liderlər Cədvəli (Yalnız real oynayan istifadəçilər)
  getLeaderboard() {
    try {
      const stored = localStorage.getItem('mekteb_plus_leaderboard_v1');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}
    // Əgər baza boşdursa, yalnız cari real istifadəçini daxil edirik
    const user = this.getUserStats();
    return [
      {
        id: 'real-user-1',
        rank: 1,
        name: user.name || 'Şagird',
        schoolGrade: user.grade || 10,
        avatar: '🧑‍🎓',
        points: user.pvpScore || 1420,
        wins: user.pvpWins || 0,
        winRate: user.pvpMatches > 0 ? Math.round(((user.pvpWins || 0) / user.pvpMatches) * 100) : 100,
        badge: '🎖️ Fəal İştirakçı'
      }
    ];
  },

  recordMatchToLeaderboard(playerName, grade, won, pointsGained) {
    const list = this.getLeaderboard();
    const existing = list.find(u => u.name === playerName);
    if (existing) {
      existing.points += pointsGained;
      if (won) existing.wins += 1;
    } else {
      list.push({
        id: `user-${Date.now()}`,
        rank: list.length + 1,
        name: playerName,
        schoolGrade: grade,
        avatar: '🧑‍🎓',
        points: pointsGained,
        wins: won ? 1 : 0,
        winRate: won ? 100 : 0,
        badge: '⚡ Yeni Oyunçu'
      });
    }

    list.sort((a, b) => b.points - a.points);
    list.forEach((item, index) => { item.rank = index + 1; });
    try {
      localStorage.setItem('mekteb_plus_leaderboard_v1', JSON.stringify(list));
    } catch (e) {}
    return list;
  }
};
