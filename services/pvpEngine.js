// MəktəbPlus - 1v1 PvP Mühərriki
// QEYD: Real olmayan şəxs adları daxil edilmir. Tək oyunçu rejimi üçün şəffaf AI Məşqçi Botları təqdim olunur.

export const BOT_OPPONENTS = [
  {
    name: 'AI Zəka Botu (Təlimçi)',
    grade: 10,
    avatar: '🤖',
    school: 'Süni İntellekt Simulyatoru',
    rating: 1500,
    accuracy: 0.75
  },
  {
    name: 'AI Məşqçi (Sürətli)',
    grade: 10,
    avatar: '⚡',
    school: 'Süni İntellekt Simulyatoru',
    rating: 1650,
    accuracy: 0.82
  },
  {
    name: 'AI Çempion (Yüksək Dərəcə)',
    grade: 11,
    avatar: '🧠',
    school: 'Süni İntellekt Simulyatoru',
    rating: 1850,
    accuracy: 0.88
  }
];

export const PvpEngine = {
  generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  getRandomBot() {
    return BOT_OPPONENTS[Math.floor(Math.random() * BOT_OPPONENTS.length)];
  },

  calculateScore(isCorrect, timeSpentSeconds, currentStreak) {
    if (!isCorrect) return 0;

    let baseScore = 100;
    let speedBonus = 0;
    if (timeSpentSeconds <= 3) {
      speedBonus = 50;
    } else if (timeSpentSeconds <= 6) {
      speedBonus = 35;
    } else if (timeSpentSeconds <= 10) {
      speedBonus = 20;
    } else {
      speedBonus = 5;
    }

    const streakBonus = Math.min(currentStreak * 15, 60);
    return baseScore + speedBonus + streakBonus;
  },

  simulateBotAnswer(question, botProfile) {
    const minTime = 3.5;
    const maxTime = 11.0;
    const timeSpent = parseFloat((Math.random() * (maxTime - minTime) + minTime).toFixed(1));
    const isCorrect = Math.random() <= botProfile.accuracy;

    let chosenKey;
    if (isCorrect) {
      chosenKey = question.correctKey;
    } else {
      const wrongOptions = question.options
        .map(o => o.key)
        .filter(k => k !== question.correctKey);
      chosenKey = wrongOptions[Math.floor(Math.random() * wrongOptions.length)] || 'A';
    }

    return {
      timeSpent,
      isCorrect,
      chosenKey
    };
  }
};
