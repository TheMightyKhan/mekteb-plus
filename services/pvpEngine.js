// MəktəbPlus - 1v1 PvP Real-time Simulyasiya Mühərriki

export const BOT_OPPONENTS = [
  {
    name: 'Aygün M.',
    grade: 10,
    avatar: '👩‍🎓',
    school: 'Bakı şəhəri 23 nömrəli məktəb-lisey',
    rating: 1840,
    accuracy: 0.82
  },
  {
    name: 'Fərid K.',
    grade: 11,
    avatar: '👨‍🔬',
    school: 'Sumqayıt Təbiət Elmləri Liseyi',
    rating: 1960,
    accuracy: 0.88
  },
  {
    name: 'Sevinc H.',
    grade: 9,
    avatar: '👩‍🏫',
    school: 'Gəncə şəhər Fizika-Riyaziyyat Liseyi',
    rating: 1720,
    accuracy: 0.78
  },
  {
    name: 'Murad Ə.',
    grade: 10,
    avatar: '🧑‍💻',
    school: 'Bakı Avropa Liseyi',
    rating: 1890,
    accuracy: 0.85
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
    // Sürət bonusu
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

    // Kombo/Seriya bonusu
    const streakBonus = Math.min(currentStreak * 15, 60);

    return baseScore + speedBonus + streakBonus;
  },

  // Botun cavab simulyasiyası: sualın çətinliyinə və botun dəqiqliyinə görə vaxt və cavab qaytarır
  simulateBotAnswer(question, botProfile) {
    // 3 ilə 11 saniyə arasında düşünmə müddəti
    const minTime = 3.5;
    const maxTime = 11.5;
    const timeSpent = parseFloat((Math.random() * (maxTime - minTime) + minTime).toFixed(1));

    // Düzgün cavab ehtimalı
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
