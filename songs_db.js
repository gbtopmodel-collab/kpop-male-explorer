// ── 음악 데이터베이스 (총 817곡: 엑셀 559곡 + 역사 258곡) ──
let songs = [
  {
    "id": 1,
    "title": "Snow Prince",
    "artist": "SS501",
    "genre": "댄스 팝",
    "emoji": "❄️",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.72,
      "tempo": 0.78,
      "danceability": 0.82,
      "acousticness": 0.1,
      "loudness": 0.75
    }
  },
  {
    "id": 2,
    "title": "네게로",
    "artist": "SS501",
    "genre": "미디엄 팝",
    "emoji": "❄️",
    "gen": 2,
    "features": {
      "energy": 0.7,
      "valence": 0.58,
      "tempo": 0.65,
      "danceability": 0.77,
      "acousticness": 0.03,
      "loudness": 0.7
    }
  },
  {
    "id": 3,
    "title": "데자뷰",
    "artist": "SS501",
    "genre": "펑키 팝",
    "emoji": "❄️",
    "gen": 2,
    "features": {
      "energy": 0.77,
      "valence": 0.77,
      "tempo": 0.75,
      "danceability": 0.89,
      "acousticness": 0.13,
      "loudness": 0.83
    }
  },
  {
    "id": 4,
    "title": "겁쟁이",
    "artist": "SS501",
    "genre": "댄스 팝",
    "emoji": "❄️",
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.8,
      "tempo": 0.67,
      "danceability": 0.79,
      "acousticness": 0.02,
      "loudness": 0.77
    }
  },
  {
    "id": 5,
    "title": "Love Ya",
    "artist": "SS501",
    "genre": "댄스 팝",
    "emoji": "❄️",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.72,
      "tempo": 0.78,
      "danceability": 0.82,
      "acousticness": 0.1,
      "loudness": 0.75
    }
  },
  {
    "id": 6,
    "title": "Fighter",
    "artist": "SS501",
    "genre": "미디엄 팝",
    "emoji": "❄️",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.75,
      "tempo": 0.72,
      "danceability": 0.77,
      "acousticness": 0.02,
      "loudness": 0.69
    }
  },
  {
    "id": 7,
    "title": "내가 갈게",
    "artist": "보이프렌드",
    "genre": "댄스 팝",
    "emoji": "👦",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.72,
      "tempo": 0.78,
      "danceability": 0.82,
      "acousticness": 0.1,
      "loudness": 0.75
    }
  },
  {
    "id": 8,
    "title": "내 여자 손대지마",
    "artist": "보이프렌드",
    "genre": "댄스 팝",
    "emoji": "👦",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.69,
      "tempo": 0.65,
      "danceability": 0.82,
      "acousticness": 0.08,
      "loudness": 0.76
    }
  },
  {
    "id": 9,
    "title": "야누스",
    "artist": "보이프렌드",
    "genre": "댄스 팝",
    "emoji": "👦",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.72,
      "tempo": 0.78,
      "danceability": 0.82,
      "acousticness": 0.1,
      "loudness": 0.75
    }
  },
  {
    "id": 10,
    "title": "아이야",
    "artist": "보이프렌드",
    "genre": "미디엄 팝",
    "emoji": "👦",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.75,
      "tempo": 0.72,
      "danceability": 0.77,
      "acousticness": 0.02,
      "loudness": 0.69
    }
  },
  {
    "id": 11,
    "title": "보이프렌드",
    "artist": "보이프렌드",
    "genre": "댄스 팝",
    "emoji": "👦",
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.55,
      "tempo": 0.73,
      "danceability": 0.77,
      "acousticness": 0.17,
      "loudness": 0.6
    }
  },
  {
    "id": 12,
    "title": "O.k",
    "artist": "B1A4",
    "genre": "펑키 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.67,
      "valence": 0.76,
      "tempo": 0.71,
      "danceability": 0.89,
      "acousticness": 0.06,
      "loudness": 0.66
    }
  },
  {
    "id": 13,
    "title": "못된 것만 배워서",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.68,
      "valence": 0.76,
      "tempo": 0.71,
      "danceability": 0.82,
      "acousticness": 0.05,
      "loudness": 0.8
    }
  },
  {
    "id": 14,
    "title": "Bling Girl",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.83,
      "valence": 0.83,
      "tempo": 0.77,
      "danceability": 0.76,
      "acousticness": 0.11,
      "loudness": 0.71
    }
  },
  {
    "id": 15,
    "title": "Only One",
    "artist": "B1A4",
    "genre": "힙합",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.59,
      "tempo": 0.56,
      "danceability": 0.9,
      "acousticness": 0.05,
      "loudness": 0.63
    }
  },
  {
    "id": 16,
    "title": "Beautiful Target",
    "artist": "B1A4",
    "genre": "발라드",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.2,
      "valence": 0.24,
      "tempo": 0.35,
      "danceability": 0.37,
      "acousticness": 0.6,
      "loudness": 0.23
    }
  },
  {
    "id": 17,
    "title": "My Love",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.83,
      "valence": 0.83,
      "tempo": 0.77,
      "danceability": 0.76,
      "acousticness": 0.11,
      "loudness": 0.71
    }
  },
  {
    "id": 18,
    "title": "Wonderful Tonight",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.73,
      "tempo": 0.76,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.69
    }
  },
  {
    "id": 19,
    "title": "Fooool",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.79,
      "valence": 0.8,
      "tempo": 0.6,
      "danceability": 0.9,
      "acousticness": 0.05,
      "loudness": 0.77
    }
  },
  {
    "id": 20,
    "title": "잘자요 굿나잇",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.8,
      "valence": 0.61,
      "tempo": 0.6,
      "danceability": 0.84,
      "acousticness": 0.03,
      "loudness": 0.79
    }
  },
  {
    "id": 21,
    "title": "Baby I'm Sorry",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.73,
      "tempo": 0.76,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.69
    }
  },
  {
    "id": 22,
    "title": "This Time Is Over",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.78,
      "valence": 0.68,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.12,
      "loudness": 0.69
    }
  },
  {
    "id": 23,
    "title": "So Fine",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.65,
      "tempo": 0.76,
      "danceability": 0.79,
      "acousticness": 0.1,
      "loudness": 0.69
    }
  },
  {
    "id": 24,
    "title": "IF… (너만 있으면)",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.78,
      "tempo": 0.74,
      "danceability": 0.88,
      "acousticness": 0.06,
      "loudness": 0.84
    }
  },
  {
    "id": 25,
    "title": "걸어본다",
    "artist": "B1A4",
    "genre": "미디엄 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.67,
      "valence": 0.59,
      "tempo": 0.7,
      "danceability": 0.78,
      "acousticness": 0.04,
      "loudness": 0.72
    }
  },
  {
    "id": 26,
    "title": "뭐 할래요",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.64,
      "tempo": 0.56,
      "danceability": 0.85,
      "acousticness": 0.05,
      "loudness": 0.66
    }
  },
  {
    "id": 27,
    "title": "별빛의 노래",
    "artist": "B1A4",
    "genre": "발라드",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.22,
      "valence": 0.27,
      "tempo": 0.33,
      "danceability": 0.43,
      "acousticness": 0.72,
      "loudness": 0.38
    }
  },
  {
    "id": 28,
    "title": "이게 무슨 일이야",
    "artist": "B1A4",
    "genre": "펑키 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.84,
      "tempo": 0.79,
      "danceability": 0.89,
      "acousticness": 0.14,
      "loudness": 0.82
    }
  },
  {
    "id": 29,
    "title": "Yesterday",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.79,
      "valence": 0.58,
      "tempo": 0.7,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.73
    }
  },
  {
    "id": 30,
    "title": "없구나",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.67,
      "valence": 0.61,
      "tempo": 0.63,
      "danceability": 0.89,
      "acousticness": 0.09,
      "loudness": 0.78
    }
  },
  {
    "id": 31,
    "title": "사랑 그땐",
    "artist": "B1A4",
    "genre": "발라드",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.34,
      "valence": 0.46,
      "tempo": 0.44,
      "danceability": 0.42,
      "acousticness": 0.65,
      "loudness": 0.44
    }
  },
  {
    "id": 32,
    "title": "길",
    "artist": "B1A4",
    "genre": "발라드",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.22,
      "valence": 0.27,
      "tempo": 0.33,
      "danceability": 0.43,
      "acousticness": 0.72,
      "loudness": 0.38
    }
  },
  {
    "id": 33,
    "title": "Solo Day",
    "artist": "B1A4",
    "genre": "밝은 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.81,
      "tempo": 0.56,
      "danceability": 0.79,
      "acousticness": 0.16,
      "loudness": 0.77
    }
  },
  {
    "id": 34,
    "title": "물 한잔",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.79,
      "valence": 0.58,
      "tempo": 0.7,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.73
    }
  },
  {
    "id": 35,
    "title": "Drive",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.69,
      "valence": 0.67,
      "tempo": 0.6,
      "danceability": 0.81,
      "acousticness": 0.1,
      "loudness": 0.76
    }
  },
  {
    "id": 36,
    "title": "Sweet Girl",
    "artist": "B1A4",
    "genre": "미디엄 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.7,
      "valence": 0.7,
      "tempo": 0.57,
      "danceability": 0.8,
      "acousticness": 0.03,
      "loudness": 0.6
    }
  },
  {
    "id": 37,
    "title": "거짓말이야",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.62,
      "tempo": 0.59,
      "danceability": 0.89,
      "acousticness": 0.11,
      "loudness": 0.77
    }
  },
  {
    "id": 38,
    "title": "Good Timing",
    "artist": "B1A4",
    "genre": "댄스 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.59,
      "tempo": 0.73,
      "danceability": 0.8,
      "acousticness": 0.16,
      "loudness": 0.65
    }
  },
  {
    "id": 39,
    "title": "Rollin'",
    "artist": "B1A4",
    "genre": "미디엄 팝",
    "emoji": "🎀",
    "gen": 2,
    "features": {
      "energy": 0.7,
      "valence": 0.7,
      "tempo": 0.57,
      "danceability": 0.8,
      "acousticness": 0.03,
      "loudness": 0.6
    }
  },
  {
    "id": 40,
    "title": "We Are Bulletproof",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.73,
      "tempo": 0.55,
      "danceability": 0.83,
      "acousticness": 0.17,
      "loudness": 0.67
    }
  },
  {
    "id": 41,
    "title": "No More Dream",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.77,
      "valence": 0.82,
      "tempo": 0.66,
      "danceability": 0.86,
      "acousticness": 0.16,
      "loudness": 0.73
    }
  },
  {
    "id": 42,
    "title": "좋아요",
    "artist": "방탄소년단",
    "genre": "미디엄 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.71,
      "tempo": 0.77,
      "danceability": 0.78,
      "acousticness": 0.05,
      "loudness": 0.61
    }
  },
  {
    "id": 43,
    "title": "N.o",
    "artist": "방탄소년단",
    "genre": "미디엄 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.7,
      "valence": 0.7,
      "tempo": 0.57,
      "danceability": 0.8,
      "acousticness": 0.03,
      "loudness": 0.6
    }
  },
  {
    "id": 44,
    "title": "We On",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.59,
      "tempo": 0.73,
      "danceability": 0.8,
      "acousticness": 0.16,
      "loudness": 0.65
    }
  },
  {
    "id": 45,
    "title": "Coffee",
    "artist": "방탄소년단",
    "genre": "미디엄 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.63,
      "tempo": 0.71,
      "danceability": 0.79,
      "acousticness": 0.09,
      "loudness": 0.84
    }
  },
  {
    "id": 46,
    "title": "If I Ruled The World",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.64,
      "tempo": 0.76,
      "danceability": 0.82,
      "acousticness": 0.1,
      "loudness": 0.74
    }
  },
  {
    "id": 47,
    "title": "진격의 방탄",
    "artist": "방탄소년단",
    "genre": "파워 댄스",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.85,
      "valence": 0.57,
      "tempo": 0.73,
      "danceability": 0.82,
      "acousticness": 0.16,
      "loudness": 0.7
    }
  },
  {
    "id": 48,
    "title": "Miss Right",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.73,
      "tempo": 0.55,
      "danceability": 0.83,
      "acousticness": 0.17,
      "loudness": 0.67
    }
  },
  {
    "id": 49,
    "title": "Danger",
    "artist": "방탄소년단",
    "genre": "파워 댄스",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.83,
      "valence": 0.59,
      "tempo": 0.69,
      "danceability": 0.82,
      "acousticness": 0.16,
      "loudness": 0.7
    }
  },
  {
    "id": 50,
    "title": "호르몬 전쟁",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.84,
      "tempo": 0.59,
      "danceability": 0.86,
      "acousticness": 0.15,
      "loudness": 0.79
    }
  },
  {
    "id": 51,
    "title": "힙합성애자",
    "artist": "방탄소년단",
    "genre": "힙합",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.86,
      "valence": 0.83,
      "tempo": 0.77,
      "danceability": 0.91,
      "acousticness": 0.04,
      "loudness": 0.93
    }
  },
  {
    "id": 52,
    "title": "Let Me Know",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.6,
      "tempo": 0.79,
      "danceability": 0.79,
      "acousticness": 0.09,
      "loudness": 0.82
    }
  },
  {
    "id": 53,
    "title": "Rain",
    "artist": "방탄소년단",
    "genre": "발라드",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.44,
      "valence": 0.4,
      "tempo": 0.37,
      "danceability": 0.33,
      "acousticness": 0.82,
      "loudness": 0.45
    }
  },
  {
    "id": 54,
    "title": "핸드폰 좀 꺼줄래",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.6,
      "tempo": 0.79,
      "danceability": 0.79,
      "acousticness": 0.09,
      "loudness": 0.82
    }
  },
  {
    "id": 55,
    "title": "이불킥",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.73,
      "tempo": 0.55,
      "danceability": 0.83,
      "acousticness": 0.17,
      "loudness": 0.67
    }
  },
  {
    "id": 56,
    "title": "24/7= Heaven",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.78,
      "tempo": 0.79,
      "danceability": 0.81,
      "acousticness": 0.16,
      "loudness": 0.71
    }
  },
  {
    "id": 57,
    "title": "여기 봐",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.71,
      "valence": 0.72,
      "tempo": 0.62,
      "danceability": 0.87,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 58,
    "title": "2학년",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.71,
      "valence": 0.72,
      "tempo": 0.62,
      "danceability": 0.87,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 59,
    "title": "I Need U",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.68,
      "tempo": 0.61,
      "danceability": 0.82,
      "acousticness": 0.06,
      "loudness": 0.82
    }
  },
  {
    "id": 60,
    "title": "잡아줘",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.6,
      "tempo": 0.79,
      "danceability": 0.79,
      "acousticness": 0.09,
      "loudness": 0.82
    }
  },
  {
    "id": 61,
    "title": "Converse High",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.71,
      "valence": 0.7,
      "tempo": 0.69,
      "danceability": 0.82,
      "acousticness": 0.11,
      "loudness": 0.72
    }
  },
  {
    "id": 62,
    "title": "이사",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.74,
      "valence": 0.64,
      "tempo": 0.78,
      "danceability": 0.82,
      "acousticness": 0.03,
      "loudness": 0.79
    }
  },
  {
    "id": 63,
    "title": "흥탄소년단",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.78,
      "tempo": 0.79,
      "danceability": 0.81,
      "acousticness": 0.16,
      "loudness": 0.71
    }
  },
  {
    "id": 64,
    "title": "Run",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.68,
      "tempo": 0.61,
      "danceability": 0.82,
      "acousticness": 0.06,
      "loudness": 0.82
    }
  },
  {
    "id": 65,
    "title": "Whalien 52",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.7,
      "tempo": 0.58,
      "danceability": 0.77,
      "acousticness": 0.07,
      "loudness": 0.82
    }
  },
  {
    "id": 66,
    "title": "Ma City",
    "artist": "방탄소년단",
    "genre": "미디엄 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.73,
      "tempo": 0.8,
      "danceability": 0.8,
      "acousticness": 0.1,
      "loudness": 0.69
    }
  },
  {
    "id": 67,
    "title": "고엽",
    "artist": "방탄소년단",
    "genre": "펑키 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.83,
      "tempo": 0.74,
      "danceability": 0.89,
      "acousticness": 0.04,
      "loudness": 0.74
    }
  },
  {
    "id": 68,
    "title": "House Of Card",
    "artist": "방탄소년단",
    "genre": "펑키 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.7,
      "valence": 0.71,
      "tempo": 0.73,
      "danceability": 0.89,
      "acousticness": 0.08,
      "loudness": 0.73
    }
  },
  {
    "id": 69,
    "title": "Young Forever",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.69,
      "tempo": 0.69,
      "danceability": 0.81,
      "acousticness": 0.15,
      "loudness": 0.64
    }
  },
  {
    "id": 70,
    "title": "Save Me",
    "artist": "방탄소년단",
    "genre": "밝은 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.72,
      "valence": 0.84,
      "tempo": 0.6,
      "danceability": 0.79,
      "acousticness": 0.08,
      "loudness": 0.66
    }
  },
  {
    "id": 71,
    "title": "Love Is Not Over",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.81,
      "valence": 0.56,
      "tempo": 0.76,
      "danceability": 0.8,
      "acousticness": 0.02,
      "loudness": 0.62
    }
  },
  {
    "id": 72,
    "title": "Butterfly",
    "artist": "방탄소년단",
    "genre": "펑키 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.7,
      "valence": 0.71,
      "tempo": 0.73,
      "danceability": 0.89,
      "acousticness": 0.08,
      "loudness": 0.73
    }
  },
  {
    "id": 73,
    "title": "Lost",
    "artist": "방탄소년단",
    "genre": "밝은 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.72,
      "valence": 0.84,
      "tempo": 0.6,
      "danceability": 0.79,
      "acousticness": 0.08,
      "loudness": 0.66
    }
  },
  {
    "id": 74,
    "title": "Am I Wrong",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.81,
      "tempo": 0.57,
      "danceability": 0.81,
      "acousticness": 0.03,
      "loudness": 0.76
    }
  },
  {
    "id": 75,
    "title": "21세기 소녀",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.69,
      "tempo": 0.69,
      "danceability": 0.81,
      "acousticness": 0.15,
      "loudness": 0.64
    }
  },
  {
    "id": 76,
    "title": "둘! 셋!",
    "artist": "방탄소년단",
    "genre": "펑키 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.7,
      "valence": 0.71,
      "tempo": 0.73,
      "danceability": 0.89,
      "acousticness": 0.08,
      "loudness": 0.73
    }
  },
  {
    "id": 77,
    "title": "Wings",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.69,
      "tempo": 0.69,
      "danceability": 0.81,
      "acousticness": 0.15,
      "loudness": 0.64
    }
  },
  {
    "id": 78,
    "title": "You Never Walk Alone",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.79,
      "tempo": 0.64,
      "danceability": 0.88,
      "acousticness": 0.14,
      "loudness": 0.74
    }
  },
  {
    "id": 79,
    "title": "Best Of Me",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.61,
      "tempo": 0.78,
      "danceability": 0.84,
      "acousticness": 0.1,
      "loudness": 0.77
    }
  },
  {
    "id": 80,
    "title": "Pied Piper",
    "artist": "방탄소년단",
    "genre": "미디엄 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.73,
      "tempo": 0.8,
      "danceability": 0.77,
      "acousticness": 0.15,
      "loudness": 0.64
    }
  },
  {
    "id": 81,
    "title": "Outro: Her",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.58,
      "tempo": 0.71,
      "danceability": 0.84,
      "acousticness": 0.12,
      "loudness": 0.69
    }
  },
  {
    "id": 82,
    "title": "I'm Fine",
    "artist": "방탄소년단",
    "genre": "미디엄 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.73,
      "tempo": 0.8,
      "danceability": 0.77,
      "acousticness": 0.15,
      "loudness": 0.64
    }
  },
  {
    "id": 83,
    "title": "Don't Leave Me",
    "artist": "방탄소년단",
    "genre": "밝은 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.72,
      "valence": 0.82,
      "tempo": 0.65,
      "danceability": 0.78,
      "acousticness": 0.14,
      "loudness": 0.79
    }
  },
  {
    "id": 84,
    "title": "Crystal Snow",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.7,
      "tempo": 0.8,
      "danceability": 0.83,
      "acousticness": 0.16,
      "loudness": 0.63
    }
  },
  {
    "id": 85,
    "title": "Let Go",
    "artist": "방탄소년단",
    "genre": "댄스 팝",
    "emoji": "💜",
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.58,
      "tempo": 0.71,
      "danceability": 0.84,
      "acousticness": 0.12,
      "loudness": 0.69
    }
  },
  {
    "id": 86,
    "title": "바보",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.68,
      "valence": 0.61,
      "tempo": 0.76,
      "danceability": 0.83,
      "acousticness": 0.06,
      "loudness": 0.68
    }
  },
  {
    "id": 87,
    "title": "마지막 인사",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.72,
      "tempo": 0.69,
      "danceability": 0.84,
      "acousticness": 0.14,
      "loudness": 0.84
    }
  },
  {
    "id": 88,
    "title": "하루하루",
    "artist": "빅뱅",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.67,
      "valence": 0.6,
      "tempo": 0.72,
      "danceability": 0.77,
      "acousticness": 0.16,
      "loudness": 0.81
    }
  },
  {
    "id": 89,
    "title": "천국",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.69,
      "valence": 0.58,
      "tempo": 0.71,
      "danceability": 0.84,
      "acousticness": 0.12,
      "loudness": 0.69
    }
  },
  {
    "id": 90,
    "title": "오, 아, 오",
    "artist": "빅뱅",
    "genre": "밝은 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.82,
      "tempo": 0.65,
      "danceability": 0.78,
      "acousticness": 0.14,
      "loudness": 0.79
    }
  },
  {
    "id": 91,
    "title": "Wonderful Tonight",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.7,
      "valence": 0.72,
      "tempo": 0.79,
      "danceability": 0.85,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 92,
    "title": "멍청한 사랑",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.69,
      "valence": 0.79,
      "tempo": 0.64,
      "danceability": 0.88,
      "acousticness": 0.14,
      "loudness": 0.74
    }
  },
  {
    "id": 93,
    "title": "Love Song",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.77,
      "valence": 0.61,
      "tempo": 0.79,
      "danceability": 0.89,
      "acousticness": 0.09,
      "loudness": 0.77
    }
  },
  {
    "id": 94,
    "title": "Stupid Liar",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.81,
      "tempo": 0.73,
      "danceability": 0.78,
      "acousticness": 0.07,
      "loudness": 0.78
    }
  },
  {
    "id": 95,
    "title": "Tonight",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.77,
      "valence": 0.61,
      "tempo": 0.79,
      "danceability": 0.89,
      "acousticness": 0.09,
      "loudness": 0.77
    }
  },
  {
    "id": 96,
    "title": "Café",
    "artist": "빅뱅",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.61,
      "tempo": 0.59,
      "danceability": 0.79,
      "acousticness": 0.13,
      "loudness": 0.66
    }
  },
  {
    "id": 97,
    "title": "I Need A Gril",
    "artist": "빅뱅",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.71,
      "valence": 0.69,
      "tempo": 0.69,
      "danceability": 0.77,
      "acousticness": 0.1,
      "loudness": 0.84
    }
  },
  {
    "id": 98,
    "title": "Blue",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.77,
      "valence": 0.61,
      "tempo": 0.79,
      "danceability": 0.89,
      "acousticness": 0.09,
      "loudness": 0.77
    }
  },
  {
    "id": 99,
    "title": "사랑 먼지",
    "artist": "빅뱅",
    "genre": "파워 댄스",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.85,
      "valence": 0.69,
      "tempo": 0.73,
      "danceability": 0.86,
      "acousticness": 0.05,
      "loudness": 0.62
    }
  },
  {
    "id": 100,
    "title": "Bad Boy",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.79,
      "valence": 0.82,
      "tempo": 0.55,
      "danceability": 0.89,
      "acousticness": 0.14,
      "loudness": 0.61
    }
  },
  {
    "id": 101,
    "title": "Monster",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.7,
      "valence": 0.72,
      "tempo": 0.79,
      "danceability": 0.85,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 102,
    "title": "Girlfriend",
    "artist": "빅뱅",
    "genre": "파워 댄스",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.82,
      "valence": 0.61,
      "tempo": 0.79,
      "danceability": 0.82,
      "acousticness": 0.08,
      "loudness": 0.75
    }
  },
  {
    "id": 103,
    "title": "우리 사랑하지 말아요",
    "artist": "빅뱅",
    "genre": "밝은 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.81,
      "tempo": 0.73,
      "danceability": 0.75,
      "acousticness": 0.1,
      "loudness": 0.66
    }
  },
  {
    "id": 104,
    "title": "Loser",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.68,
      "valence": 0.79,
      "tempo": 0.77,
      "danceability": 0.81,
      "acousticness": 0.06,
      "loudness": 0.65
    }
  },
  {
    "id": 105,
    "title": "맨정신",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.7,
      "valence": 0.72,
      "tempo": 0.79,
      "danceability": 0.85,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 106,
    "title": "If You",
    "artist": "빅뱅",
    "genre": "파워 댄스",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.82,
      "valence": 0.61,
      "tempo": 0.79,
      "danceability": 0.82,
      "acousticness": 0.08,
      "loudness": 0.75
    }
  },
  {
    "id": 107,
    "title": "We Like 2 Party",
    "artist": "빅뱅",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.67,
      "valence": 0.73,
      "tempo": 0.65,
      "danceability": 0.89,
      "acousticness": 0.11,
      "loudness": 0.73
    }
  },
  {
    "id": 108,
    "title": "High High",
    "artist": "지디앤탑",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.81,
      "valence": 0.73,
      "tempo": 0.73,
      "danceability": 0.75,
      "acousticness": 0.12,
      "loudness": 0.78
    }
  },
  {
    "id": 109,
    "title": "집에 가지마",
    "artist": "지디앤탑",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.58,
      "tempo": 0.72,
      "danceability": 0.79,
      "acousticness": 0.11,
      "loudness": 0.64
    }
  },
  {
    "id": 110,
    "title": "Oh Yeah",
    "artist": "지디앤탑",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.81,
      "valence": 0.73,
      "tempo": 0.73,
      "danceability": 0.75,
      "acousticness": 0.12,
      "loudness": 0.78
    }
  },
  {
    "id": 111,
    "title": "Baby Good Night",
    "artist": "지디앤탑",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.83,
      "valence": 0.62,
      "tempo": 0.75,
      "danceability": 0.8,
      "acousticness": 0.13,
      "loudness": 0.69
    }
  },
  {
    "id": 112,
    "title": "뻑이가요",
    "artist": "지디앤탑",
    "genre": "강렬 댄스",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.96,
      "valence": 0.49,
      "tempo": 0.77,
      "danceability": 0.8,
      "acousticness": 0.04,
      "loudness": 0.95
    }
  },
  {
    "id": 113,
    "title": "Heartbreaker",
    "artist": "G-DRAGON",
    "genre": "힙합",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.84,
      "valence": 0.71,
      "tempo": 0.59,
      "danceability": 0.89,
      "acousticness": 0.08,
      "loudness": 0.8
    }
  },
  {
    "id": 114,
    "title": "소년이여",
    "artist": "G-DRAGON",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.6,
      "tempo": 0.65,
      "danceability": 0.77,
      "acousticness": 0.08,
      "loudness": 0.63
    }
  },
  {
    "id": 115,
    "title": "Gossip Man",
    "artist": "G-DRAGON",
    "genre": "힙합",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.84,
      "valence": 0.71,
      "tempo": 0.59,
      "danceability": 0.89,
      "acousticness": 0.08,
      "loudness": 0.8
    }
  },
  {
    "id": 116,
    "title": "악몽",
    "artist": "G-DRAGON",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.6,
      "tempo": 0.65,
      "danceability": 0.77,
      "acousticness": 0.08,
      "loudness": 0.63
    }
  },
  {
    "id": 117,
    "title": "One Of A Kind",
    "artist": "G-DRAGON",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.77,
      "valence": 0.78,
      "tempo": 0.62,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.84
    }
  },
  {
    "id": 118,
    "title": "Crayon",
    "artist": "G-DRAGON",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.66,
      "valence": 0.58,
      "tempo": 0.65,
      "danceability": 0.77,
      "acousticness": 0.16,
      "loudness": 0.61
    }
  },
  {
    "id": 119,
    "title": "결국",
    "artist": "G-DRAGON",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.75,
      "valence": 0.61,
      "tempo": 0.79,
      "danceability": 0.85,
      "acousticness": 0.11,
      "loudness": 0.84
    }
  },
  {
    "id": 120,
    "title": "Missing You",
    "artist": "G-DRAGON",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.75,
      "valence": 0.63,
      "tempo": 0.74,
      "danceability": 0.87,
      "acousticness": 0.12,
      "loudness": 0.61
    }
  },
  {
    "id": 121,
    "title": "R.o.d",
    "artist": "G-DRAGON",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.83,
      "valence": 0.62,
      "tempo": 0.75,
      "danceability": 0.8,
      "acousticness": 0.13,
      "loudness": 0.69
    }
  },
  {
    "id": 122,
    "title": "니가 뭔데",
    "artist": "G-DRAGON",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.76,
      "valence": 0.72,
      "tempo": 0.66,
      "danceability": 0.85,
      "acousticness": 0.09,
      "loudness": 0.72
    }
  },
  {
    "id": 123,
    "title": "Black",
    "artist": "G-DRAGON",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.66,
      "valence": 0.74,
      "tempo": 0.69,
      "danceability": 0.76,
      "acousticness": 0.02,
      "loudness": 0.84
    }
  },
  {
    "id": 124,
    "title": "Runaway",
    "artist": "G-DRAGON",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.75,
      "valence": 0.63,
      "tempo": 0.74,
      "danceability": 0.87,
      "acousticness": 0.12,
      "loudness": 0.61
    }
  },
  {
    "id": 125,
    "title": "너무 좋아",
    "artist": "G-DRAGON",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.77,
      "valence": 0.78,
      "tempo": 0.62,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.84
    }
  },
  {
    "id": 126,
    "title": "무제",
    "artist": "G-DRAGON",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.66,
      "valence": 0.74,
      "tempo": 0.69,
      "danceability": 0.76,
      "acousticness": 0.02,
      "loudness": 0.84
    }
  },
  {
    "id": 127,
    "title": "Doom Dada",
    "artist": "T.O.P",
    "genre": "강렬 댄스",
    "emoji": "👑",
    "gen": 0,
    "features": {
      "energy": 0.93,
      "valence": 0.68,
      "tempo": 0.84,
      "danceability": 0.86,
      "acousticness": 0.04,
      "loudness": 0.82
    }
  },
  {
    "id": 128,
    "title": "Miracle",
    "artist": "슈퍼주니어",
    "genre": "댄스 팝",
    "emoji": "💙",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.61,
      "tempo": 0.8,
      "danceability": 0.89,
      "acousticness": 0.13,
      "loudness": 0.81
    }
  },
  {
    "id": 129,
    "title": "Devil",
    "artist": "슈퍼주니어",
    "genre": "댄스 팝",
    "emoji": "💙",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.69,
      "tempo": 0.74,
      "danceability": 0.87,
      "acousticness": 0.07,
      "loudness": 0.74
    }
  },
  {
    "id": 130,
    "title": "U",
    "artist": "슈퍼주니어",
    "genre": "댄스 팝",
    "emoji": "💙",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.63,
      "tempo": 0.74,
      "danceability": 0.87,
      "acousticness": 0.12,
      "loudness": 0.61
    }
  },
  {
    "id": 131,
    "title": "Black Suit",
    "artist": "슈퍼주니어",
    "genre": "댄스 팝",
    "emoji": "💙",
    "gen": 2,
    "features": {
      "energy": 0.8,
      "valence": 0.58,
      "tempo": 0.62,
      "danceability": 0.83,
      "acousticness": 0.03,
      "loudness": 0.78
    }
  },
  {
    "id": 132,
    "title": "Mr. Simple",
    "artist": "슈퍼주니어",
    "genre": "미디엄 팝",
    "emoji": "💙",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.56,
      "tempo": 0.75,
      "danceability": 0.78,
      "acousticness": 0.12,
      "loudness": 0.6
    }
  },
  {
    "id": 133,
    "title": "미인아",
    "artist": "슈퍼주니어",
    "genre": "댄스 팝",
    "emoji": "💙",
    "gen": 2,
    "features": {
      "energy": 0.78,
      "valence": 0.74,
      "tempo": 0.7,
      "danceability": 0.82,
      "acousticness": 0.14,
      "loudness": 0.63
    }
  },
  {
    "id": 134,
    "title": "로꾸거!!!",
    "artist": "슈퍼주니어-T",
    "genre": "댄스 팝",
    "emoji": "💙",
    "gen": 2,
    "features": {
      "energy": 0.65,
      "valence": 0.76,
      "tempo": 0.68,
      "danceability": 0.88,
      "acousticness": 0.16,
      "loudness": 0.76
    }
  },
  {
    "id": 135,
    "title": "Show Me Your Love",
    "artist": "슈퍼주니어 & 동방신기",
    "genre": "댄스 팝",
    "emoji": "🎈",
    "gen": 2,
    "features": {
      "energy": 0.79,
      "valence": 0.8,
      "tempo": 0.79,
      "danceability": 0.84,
      "acousticness": 0.05,
      "loudness": 0.84
    }
  },
  {
    "id": 136,
    "title": "Hug",
    "artist": "동방신기",
    "genre": "미디엄 팝",
    "emoji": "🎈",
    "gen": 2,
    "features": {
      "energy": 0.69,
      "valence": 0.69,
      "tempo": 0.72,
      "danceability": 0.78,
      "acousticness": 0.15,
      "loudness": 0.66
    }
  },
  {
    "id": 137,
    "title": "Love Is…",
    "artist": "동방신기",
    "genre": "댄스 팝",
    "emoji": "🎈",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.69,
      "tempo": 0.79,
      "danceability": 0.86,
      "acousticness": 0.14,
      "loudness": 0.62
    }
  },
  {
    "id": 138,
    "title": "Love In The Ice",
    "artist": "동방신기",
    "genre": "파워 댄스",
    "emoji": "🎈",
    "gen": 2,
    "features": {
      "energy": 0.85,
      "valence": 0.67,
      "tempo": 0.59,
      "danceability": 0.9,
      "acousticness": 0.14,
      "loudness": 0.76
    }
  },
  {
    "id": 139,
    "title": "순수",
    "artist": "동방신기",
    "genre": "댄스 팝",
    "emoji": "🎈",
    "gen": 2,
    "features": {
      "energy": 0.8,
      "valence": 0.58,
      "tempo": 0.62,
      "danceability": 0.83,
      "acousticness": 0.03,
      "loudness": 0.78
    }
  },
  {
    "id": 140,
    "title": "The Way U Are",
    "artist": "동방신기",
    "genre": "파워 댄스",
    "emoji": "🎈",
    "gen": 2,
    "features": {
      "energy": 0.85,
      "valence": 0.67,
      "tempo": 0.59,
      "danceability": 0.9,
      "acousticness": 0.14,
      "loudness": 0.76
    }
  },
  {
    "id": 141,
    "title": "왜",
    "artist": "동방신기",
    "genre": "미디엄 팝",
    "emoji": "🎈",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.56,
      "tempo": 0.75,
      "danceability": 0.78,
      "acousticness": 0.12,
      "loudness": 0.6
    }
  },
  {
    "id": 142,
    "title": "주문",
    "artist": "동방신기",
    "genre": "댄스 팝",
    "emoji": "🎈",
    "gen": 2,
    "features": {
      "energy": 0.83,
      "valence": 0.81,
      "tempo": 0.56,
      "danceability": 0.78,
      "acousticness": 0.06,
      "loudness": 0.78
    }
  },
  {
    "id": 143,
    "title": "Something",
    "artist": "동방신기",
    "genre": "댄스 팝",
    "emoji": "🎈",
    "gen": 2,
    "features": {
      "energy": 0.79,
      "valence": 0.8,
      "tempo": 0.79,
      "danceability": 0.84,
      "acousticness": 0.05,
      "loudness": 0.84
    }
  },
  {
    "id": 144,
    "title": "I'm Your Man",
    "artist": "2PM",
    "genre": "펑키 팝",
    "emoji": "🔥",
    "gen": 2,
    "features": {
      "energy": 0.77,
      "valence": 0.71,
      "tempo": 0.77,
      "danceability": 0.9,
      "acousticness": 0.14,
      "loudness": 0.7
    }
  },
  {
    "id": 145,
    "title": "하.니.뿐.",
    "artist": "2PM",
    "genre": "댄스 팝",
    "emoji": "🔥",
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.82,
      "tempo": 0.6,
      "danceability": 0.8,
      "acousticness": 0.09,
      "loudness": 0.64
    }
  },
  {
    "id": 146,
    "title": "Heartbeat",
    "artist": "2PM",
    "genre": "댄스 팝",
    "emoji": "🔥",
    "gen": 2,
    "features": {
      "energy": 0.69,
      "valence": 0.83,
      "tempo": 0.64,
      "danceability": 0.87,
      "acousticness": 0.09,
      "loudness": 0.6
    }
  },
  {
    "id": 147,
    "title": "I'll Be Back",
    "artist": "2PM",
    "genre": "댄스 팝",
    "emoji": "🔥",
    "gen": 2,
    "features": {
      "energy": 0.79,
      "valence": 0.85,
      "tempo": 0.78,
      "danceability": 0.77,
      "acousticness": 0.08,
      "loudness": 0.79
    }
  },
  {
    "id": 148,
    "title": "Again & Again",
    "artist": "2PM",
    "genre": "댄스 팝",
    "emoji": "🔥",
    "gen": 2,
    "features": {
      "energy": 0.67,
      "valence": 0.65,
      "tempo": 0.59,
      "danceability": 0.84,
      "acousticness": 0.13,
      "loudness": 0.73
    }
  },
  {
    "id": 149,
    "title": "니가 밉다",
    "artist": "2PM",
    "genre": "파워 댄스",
    "emoji": "🔥",
    "gen": 2,
    "features": {
      "energy": 0.85,
      "valence": 0.57,
      "tempo": 0.62,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.74
    }
  },
  {
    "id": 150,
    "title": "10점 만점에 10점",
    "artist": "2PM",
    "genre": "댄스 팝",
    "emoji": "🔥",
    "gen": 2,
    "features": {
      "energy": 0.67,
      "valence": 0.65,
      "tempo": 0.59,
      "danceability": 0.84,
      "acousticness": 0.13,
      "loudness": 0.73
    }
  },
  {
    "id": 151,
    "title": "미친거 아니야?",
    "artist": "2PM",
    "genre": "댄스 팝",
    "emoji": "🔥",
    "gen": 2,
    "features": {
      "energy": 0.79,
      "valence": 0.85,
      "tempo": 0.78,
      "danceability": 0.77,
      "acousticness": 0.08,
      "loudness": 0.79
    }
  },
  {
    "id": 152,
    "title": "Hands Up",
    "artist": "2PM",
    "genre": "댄스 팝",
    "emoji": "🔥",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.75,
      "tempo": 0.61,
      "danceability": 0.88,
      "acousticness": 0.11,
      "loudness": 0.61
    }
  },
  {
    "id": 153,
    "title": "시끄러!!",
    "artist": "UKISS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.77,
      "valence": 0.62,
      "tempo": 0.55,
      "danceability": 0.8,
      "acousticness": 0.05,
      "loudness": 0.8
    }
  },
  {
    "id": 154,
    "title": "만만하니",
    "artist": "UKISS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.77,
      "valence": 0.62,
      "tempo": 0.55,
      "danceability": 0.8,
      "acousticness": 0.05,
      "loudness": 0.8
    }
  },
  {
    "id": 155,
    "title": "0330",
    "artist": "UKISS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.79,
      "valence": 0.85,
      "tempo": 0.78,
      "danceability": 0.77,
      "acousticness": 0.08,
      "loudness": 0.79
    }
  },
  {
    "id": 156,
    "title": "Neverland",
    "artist": "UKISS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.67,
      "valence": 0.64,
      "tempo": 0.79,
      "danceability": 0.82,
      "acousticness": 0.11,
      "loudness": 0.63
    }
  },
  {
    "id": 157,
    "title": "빙글빙글",
    "artist": "UKISS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.67,
      "valence": 0.65,
      "tempo": 0.59,
      "danceability": 0.84,
      "acousticness": 0.13,
      "loudness": 0.73
    }
  },
  {
    "id": 158,
    "title": "어리지 않아",
    "artist": "UKISS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.76,
      "valence": 0.69,
      "tempo": 0.7,
      "danceability": 0.82,
      "acousticness": 0.15,
      "loudness": 0.67
    }
  },
  {
    "id": 159,
    "title": "바람의 유령",
    "artist": "제국의 아이들",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.67,
      "valence": 0.64,
      "tempo": 0.79,
      "danceability": 0.82,
      "acousticness": 0.11,
      "loudness": 0.63
    }
  },
  {
    "id": 160,
    "title": "Mazeltov",
    "artist": "제국의 아이들",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.58,
      "tempo": 0.66,
      "danceability": 0.9,
      "acousticness": 0.14,
      "loudness": 0.78
    }
  },
  {
    "id": 161,
    "title": "숨소리",
    "artist": "제국의 아이들",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.76,
      "valence": 0.69,
      "tempo": 0.7,
      "danceability": 0.82,
      "acousticness": 0.15,
      "loudness": 0.67
    }
  },
  {
    "id": 162,
    "title": "Here I Am",
    "artist": "제국의 아이들",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.81,
      "valence": 0.82,
      "tempo": 0.7,
      "danceability": 0.8,
      "acousticness": 0.06,
      "loudness": 0.67
    }
  },
  {
    "id": 163,
    "title": "이별드립",
    "artist": "제국의 아이들",
    "genre": "미디엄 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.69,
      "valence": 0.73,
      "tempo": 0.66,
      "danceability": 0.8,
      "acousticness": 0.03,
      "loudness": 0.79
    }
  },
  {
    "id": 164,
    "title": "남자가 사랑할 때",
    "artist": "INFINITE",
    "genre": "댄스 팝",
    "emoji": "♾️",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.61,
      "tempo": 0.76,
      "danceability": 0.86,
      "acousticness": 0.16,
      "loudness": 0.72
    }
  },
  {
    "id": 165,
    "title": "추격자",
    "artist": "INFINITE",
    "genre": "댄스 팝",
    "emoji": "♾️",
    "gen": 2,
    "features": {
      "energy": 0.7,
      "valence": 0.58,
      "tempo": 0.66,
      "danceability": 0.9,
      "acousticness": 0.14,
      "loudness": 0.78
    }
  },
  {
    "id": 166,
    "title": "내꺼하자",
    "artist": "INFINITE",
    "genre": "미디엄 팝",
    "emoji": "♾️",
    "gen": 2,
    "features": {
      "energy": 0.7,
      "valence": 0.74,
      "tempo": 0.69,
      "danceability": 0.77,
      "acousticness": 0.14,
      "loudness": 0.69
    }
  },
  {
    "id": 167,
    "title": "Nothing's Over",
    "artist": "INFINITE",
    "genre": "미디엄 팝",
    "emoji": "♾️",
    "gen": 2,
    "features": {
      "energy": 0.68,
      "valence": 0.75,
      "tempo": 0.7,
      "danceability": 0.77,
      "acousticness": 0.1,
      "loudness": 0.66
    }
  },
  {
    "id": 168,
    "title": "파라다이스",
    "artist": "INFINITE",
    "genre": "댄스 팝",
    "emoji": "♾️",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.61,
      "tempo": 0.76,
      "danceability": 0.86,
      "acousticness": 0.16,
      "loudness": 0.72
    }
  },
  {
    "id": 169,
    "title": "Last Lomeo",
    "artist": "INFINITE",
    "genre": "파워 댄스",
    "emoji": "♾️",
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.84,
      "tempo": 0.77,
      "danceability": 0.85,
      "acousticness": 0.13,
      "loudness": 0.68
    }
  },
  {
    "id": 170,
    "title": "하얀 고백",
    "artist": "INFINITE",
    "genre": "댄스 팝",
    "emoji": "♾️",
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.68,
      "tempo": 0.56,
      "danceability": 0.8,
      "acousticness": 0.05,
      "loudness": 0.66
    }
  },
  {
    "id": 171,
    "title": "Y",
    "artist": "엠블랙",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.72,
      "tempo": 0.8,
      "danceability": 0.77,
      "acousticness": 0.11,
      "loudness": 0.83
    }
  },
  {
    "id": 172,
    "title": "전쟁이야",
    "artist": "엠블랙",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.57,
      "tempo": 0.69,
      "danceability": 0.87,
      "acousticness": 0.1,
      "loudness": 0.85
    }
  },
  {
    "id": 173,
    "title": "다칠 준비가 돼 있어",
    "artist": "VIXX",
    "genre": "발라드",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.23,
      "valence": 0.46,
      "tempo": 0.25,
      "danceability": 0.28,
      "acousticness": 0.63,
      "loudness": 0.4
    }
  },
  {
    "id": 174,
    "title": "사슬",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.57,
      "tempo": 0.69,
      "danceability": 0.87,
      "acousticness": 0.1,
      "loudness": 0.85
    }
  },
  {
    "id": 175,
    "title": "Hyde",
    "artist": "VIXX",
    "genre": "파워 댄스",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.84,
      "tempo": 0.77,
      "danceability": 0.85,
      "acousticness": 0.13,
      "loudness": 0.68
    }
  },
  {
    "id": 176,
    "title": "저주인형",
    "artist": "VIXX",
    "genre": "발라드",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.43,
      "valence": 0.27,
      "tempo": 0.46,
      "danceability": 0.21,
      "acousticness": 0.73,
      "loudness": 0.31
    }
  },
  {
    "id": 177,
    "title": "Error",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.77,
      "valence": 0.58,
      "tempo": 0.63,
      "danceability": 0.8,
      "acousticness": 0.05,
      "loudness": 0.68
    }
  },
  {
    "id": 178,
    "title": "기적",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.83,
      "valence": 0.61,
      "tempo": 0.76,
      "danceability": 0.76,
      "acousticness": 0.1,
      "loudness": 0.71
    }
  },
  {
    "id": 179,
    "title": "대답은 너니까",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.83,
      "valence": 0.79,
      "tempo": 0.59,
      "danceability": 0.79,
      "acousticness": 0.11,
      "loudness": 0.72
    }
  },
  {
    "id": 180,
    "title": "Sad Ending",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.77,
      "tempo": 0.59,
      "danceability": 0.83,
      "acousticness": 0.16,
      "loudness": 0.78
    }
  },
  {
    "id": 181,
    "title": "Fantasy",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.69,
      "tempo": 0.7,
      "danceability": 0.84,
      "acousticness": 0.02,
      "loudness": 0.75
    }
  },
  {
    "id": 182,
    "title": "Hot Enough",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.8,
      "valence": 0.79,
      "tempo": 0.77,
      "danceability": 0.83,
      "acousticness": 0.04,
      "loudness": 0.7
    }
  },
  {
    "id": 183,
    "title": "Maze",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.67,
      "tempo": 0.69,
      "danceability": 0.82,
      "acousticness": 0.04,
      "loudness": 0.77
    }
  },
  {
    "id": 184,
    "title": "Spider",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.77,
      "tempo": 0.59,
      "danceability": 0.83,
      "acousticness": 0.16,
      "loudness": 0.78
    }
  },
  {
    "id": 185,
    "title": "대.다.나.다.너",
    "artist": "VIXX",
    "genre": "펑키 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.82,
      "tempo": 0.74,
      "danceability": 0.9,
      "acousticness": 0.1,
      "loudness": 0.73
    }
  },
  {
    "id": 186,
    "title": "어떡하지",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.77,
      "tempo": 0.59,
      "danceability": 0.83,
      "acousticness": 0.16,
      "loudness": 0.78
    }
  },
  {
    "id": 187,
    "title": "Can't Say",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.77,
      "valence": 0.56,
      "tempo": 0.6,
      "danceability": 0.85,
      "acousticness": 0.15,
      "loudness": 0.7
    }
  },
  {
    "id": 188,
    "title": "Heaven",
    "artist": "VIXX",
    "genre": "펑키 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.82,
      "tempo": 0.74,
      "danceability": 0.9,
      "acousticness": 0.1,
      "loudness": 0.73
    }
  },
  {
    "id": 189,
    "title": "Rock Ur Body",
    "artist": "VIXX",
    "genre": "미디엄 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.61,
      "tempo": 0.73,
      "danceability": 0.77,
      "acousticness": 0.15,
      "loudness": 0.67
    }
  },
  {
    "id": 190,
    "title": "Super Hero",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.67,
      "tempo": 0.62,
      "danceability": 0.86,
      "acousticness": 0.02,
      "loudness": 0.77
    }
  },
  {
    "id": 191,
    "title": "Bad Girl",
    "artist": "비스트",
    "genre": "댄스 팝",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.76,
      "tempo": 0.58,
      "danceability": 0.86,
      "acousticness": 0.09,
      "loudness": 0.61
    }
  },
  {
    "id": 192,
    "title": "Mystery",
    "artist": "비스트",
    "genre": "댄스 팝",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.76,
      "tempo": 0.58,
      "danceability": 0.86,
      "acousticness": 0.09,
      "loudness": 0.61
    }
  },
  {
    "id": 193,
    "title": "Shock",
    "artist": "비스트",
    "genre": "댄스 팝",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.59,
      "tempo": 0.56,
      "danceability": 0.78,
      "acousticness": 0.04,
      "loudness": 0.75
    }
  },
  {
    "id": 194,
    "title": "비가 오는 날엔",
    "artist": "비스트",
    "genre": "발라드",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.22,
      "valence": 0.31,
      "tempo": 0.25,
      "danceability": 0.27,
      "acousticness": 0.81,
      "loudness": 0.37
    }
  },
  {
    "id": 195,
    "title": "숨",
    "artist": "비스트",
    "genre": "댄스 팝",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.77,
      "valence": 0.56,
      "tempo": 0.6,
      "danceability": 0.85,
      "acousticness": 0.15,
      "loudness": 0.7
    }
  },
  {
    "id": 196,
    "title": "Beautiful",
    "artist": "비스트",
    "genre": "발라드",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.3,
      "valence": 0.23,
      "tempo": 0.4,
      "danceability": 0.23,
      "acousticness": 0.72,
      "loudness": 0.28
    }
  },
  {
    "id": 197,
    "title": "아름다운 밤이야",
    "artist": "비스트",
    "genre": "미디엄 팝",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.58,
      "tempo": 0.7,
      "danceability": 0.77,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 198,
    "title": "그림자",
    "artist": "비스트",
    "genre": "미디엄 팝",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.61,
      "tempo": 0.73,
      "danceability": 0.77,
      "acousticness": 0.15,
      "loudness": 0.67
    }
  },
  {
    "id": 199,
    "title": "Good Luck",
    "artist": "비스트",
    "genre": "미디엄 팝",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.75,
      "tempo": 0.76,
      "danceability": 0.78,
      "acousticness": 0.04,
      "loudness": 0.77
    }
  },
  {
    "id": 200,
    "title": "12시 30분",
    "artist": "비스트",
    "genre": "댄스 팝",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.65,
      "valence": 0.64,
      "tempo": 0.73,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.84
    }
  },
  {
    "id": 201,
    "title": "리본",
    "artist": "비스트",
    "genre": "댄스 팝",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.8,
      "valence": 0.74,
      "tempo": 0.65,
      "danceability": 0.78,
      "acousticness": 0.12,
      "loudness": 0.84
    }
  },
  {
    "id": 202,
    "title": "얼굴 찌푸리지 말아요",
    "artist": "하이라이트",
    "genre": "밝은 팝",
    "emoji": "⚡",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.84,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.1,
      "loudness": 0.64
    }
  },
  {
    "id": 203,
    "title": "비밀",
    "artist": "비투비",
    "genre": "미디엄 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.58,
      "tempo": 0.7,
      "danceability": 0.77,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 204,
    "title": "Wow",
    "artist": "비투비",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.65,
      "valence": 0.64,
      "tempo": 0.73,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.84
    }
  },
  {
    "id": 205,
    "title": "두 번째 고백",
    "artist": "비투비",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.77,
      "tempo": 0.56,
      "danceability": 0.88,
      "acousticness": 0.11,
      "loudness": 0.76
    }
  },
  {
    "id": 206,
    "title": "스릴러",
    "artist": "비투비",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.71,
      "valence": 0.78,
      "tempo": 0.56,
      "danceability": 0.87,
      "acousticness": 0.06,
      "loudness": 0.74
    }
  },
  {
    "id": 207,
    "title": "뛰뛰빵빵",
    "artist": "비투비",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.75,
      "tempo": 0.73,
      "danceability": 0.81,
      "acousticness": 0.05,
      "loudness": 0.6
    }
  },
  {
    "id": 208,
    "title": "울어도 돼",
    "artist": "비투비",
    "genre": "밝은 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.84,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.1,
      "loudness": 0.64
    }
  },
  {
    "id": 209,
    "title": "울면 안 돼",
    "artist": "비투비",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.66,
      "tempo": 0.62,
      "danceability": 0.83,
      "acousticness": 0.09,
      "loudness": 0.66
    }
  },
  {
    "id": 210,
    "title": "집으로 가는 길",
    "artist": "비투비",
    "genre": "발라드",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.44,
      "valence": 0.28,
      "tempo": 0.31,
      "danceability": 0.26,
      "acousticness": 0.67,
      "loudness": 0.27
    }
  },
  {
    "id": 211,
    "title": "기도",
    "artist": "비투비",
    "genre": "밝은 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.84,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.1,
      "loudness": 0.64
    }
  },
  {
    "id": 212,
    "title": "그리워하다",
    "artist": "비투비",
    "genre": "발라드",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.41,
      "valence": 0.42,
      "tempo": 0.43,
      "danceability": 0.32,
      "acousticness": 0.68,
      "loudness": 0.34
    }
  },
  {
    "id": 213,
    "title": "신바람",
    "artist": "비투비",
    "genre": "밝은 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.83,
      "tempo": 0.57,
      "danceability": 0.79,
      "acousticness": 0.03,
      "loudness": 0.61
    }
  },
  {
    "id": 214,
    "title": "너 없인 안 된다",
    "artist": "비투비",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.62,
      "tempo": 0.63,
      "danceability": 0.75,
      "acousticness": 0.05,
      "loudness": 0.79
    }
  },
  {
    "id": 215,
    "title": "One Shot",
    "artist": "B.A.P",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.81,
      "valence": 0.62,
      "tempo": 0.63,
      "danceability": 0.75,
      "acousticness": 0.05,
      "loudness": 0.79
    }
  },
  {
    "id": 216,
    "title": "No Mercy",
    "artist": "B.A.P",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.72,
      "valence": 0.68,
      "tempo": 0.65,
      "danceability": 0.83,
      "acousticness": 0.1,
      "loudness": 0.77
    }
  },
  {
    "id": 217,
    "title": "Warrior",
    "artist": "B.A.P",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.72,
      "valence": 0.68,
      "tempo": 0.65,
      "danceability": 0.83,
      "acousticness": 0.1,
      "loudness": 0.77
    }
  },
  {
    "id": 218,
    "title": "1004",
    "artist": "B.A.P",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.58,
      "tempo": 0.62,
      "danceability": 0.87,
      "acousticness": 0.05,
      "loudness": 0.79
    }
  },
  {
    "id": 219,
    "title": "대박사건",
    "artist": "B.A.P",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.81,
      "valence": 0.62,
      "tempo": 0.63,
      "danceability": 0.75,
      "acousticness": 0.05,
      "loudness": 0.79
    }
  },
  {
    "id": 220,
    "title": "하지마",
    "artist": "B.A.P",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.81,
      "valence": 0.62,
      "tempo": 0.63,
      "danceability": 0.75,
      "acousticness": 0.05,
      "loudness": 0.79
    }
  },
  {
    "id": 221,
    "title": "품행제로",
    "artist": "블락비 바스타즈",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.61,
      "tempo": 0.57,
      "danceability": 0.83,
      "acousticness": 0.05,
      "loudness": 0.71
    }
  },
  {
    "id": 222,
    "title": "찰리채플린",
    "artist": "블락비 바스타즈",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.81,
      "tempo": 0.69,
      "danceability": 0.84,
      "acousticness": 0.03,
      "loudness": 0.69
    }
  },
  {
    "id": 223,
    "title": "이기적인 걸",
    "artist": "블락비 바스타즈",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.83,
      "valence": 0.76,
      "tempo": 0.61,
      "danceability": 0.78,
      "acousticness": 0.09,
      "loudness": 0.83
    }
  },
  {
    "id": 224,
    "title": "Make It Rain",
    "artist": "블락비 바스타즈",
    "genre": "발라드",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.29,
      "valence": 0.38,
      "tempo": 0.26,
      "danceability": 0.22,
      "acousticness": 0.56,
      "loudness": 0.42
    }
  },
  {
    "id": 225,
    "title": "That's Right",
    "artist": "블락비 바스타즈",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.78,
      "valence": 0.7,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.13,
      "loudness": 0.79
    }
  },
  {
    "id": 226,
    "title": "Help Me",
    "artist": "블락비 바스타즈",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.71,
      "valence": 0.62,
      "tempo": 0.57,
      "danceability": 0.88,
      "acousticness": 0.06,
      "loudness": 0.67
    }
  },
  {
    "id": 227,
    "title": "Halo",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.79,
      "valence": 0.64,
      "tempo": 0.78,
      "danceability": 0.88,
      "acousticness": 0.1,
      "loudness": 0.76
    }
  },
  {
    "id": 228,
    "title": "가서 전해",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.71,
      "valence": 0.62,
      "tempo": 0.57,
      "danceability": 0.88,
      "acousticness": 0.06,
      "loudness": 0.67
    }
  },
  {
    "id": 229,
    "title": "Wanna B",
    "artist": "블락비",
    "genre": "미디엄 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.7,
      "tempo": 0.56,
      "danceability": 0.76,
      "acousticness": 0.02,
      "loudness": 0.82
    }
  },
  {
    "id": 230,
    "title": "그대로 멈춰라!",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.77,
      "valence": 0.82,
      "tempo": 0.79,
      "danceability": 0.87,
      "acousticness": 0.03,
      "loudness": 0.64
    }
  },
  {
    "id": 231,
    "title": "나만 이런거야?",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.58,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.04,
      "loudness": 0.82
    }
  },
  {
    "id": 232,
    "title": "싱크로율 100%",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.82,
      "valence": 0.57,
      "tempo": 0.79,
      "danceability": 0.8,
      "acousticness": 0.11,
      "loudness": 0.73
    }
  },
  {
    "id": 233,
    "title": "Action",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.58,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.04,
      "loudness": 0.82
    }
  },
  {
    "id": 234,
    "title": "닐리리맘보",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.58,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.04,
      "loudness": 0.82
    }
  },
  {
    "id": 235,
    "title": "Movie's Over",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.71,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.09,
      "loudness": 0.74
    }
  },
  {
    "id": 236,
    "title": "로맨틱하게",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.82,
      "valence": 0.57,
      "tempo": 0.79,
      "danceability": 0.8,
      "acousticness": 0.11,
      "loudness": 0.73
    }
  },
  {
    "id": 237,
    "title": "했어 안했어",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.7,
      "tempo": 0.79,
      "danceability": 0.84,
      "acousticness": 0.1,
      "loudness": 0.79
    }
  },
  {
    "id": 238,
    "title": "빛이 되어줘",
    "artist": "블락비",
    "genre": "파워 댄스",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.85,
      "valence": 0.71,
      "tempo": 0.66,
      "danceability": 0.82,
      "acousticness": 0.07,
      "loudness": 0.67
    }
  },
  {
    "id": 239,
    "title": "Nice Day",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.71,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.09,
      "loudness": 0.74
    }
  },
  {
    "id": 240,
    "title": "보기 드문 여자",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.56,
      "tempo": 0.77,
      "danceability": 0.88,
      "acousticness": 0.17,
      "loudness": 0.76
    }
  },
  {
    "id": 241,
    "title": "Jackpot",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.56,
      "tempo": 0.77,
      "danceability": 0.88,
      "acousticness": 0.17,
      "loudness": 0.76
    }
  },
  {
    "id": 242,
    "title": "몇 년 후에",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.56,
      "tempo": 0.77,
      "danceability": 0.88,
      "acousticness": 0.17,
      "loudness": 0.76
    }
  },
  {
    "id": 243,
    "title": "Toy",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.68,
      "valence": 0.69,
      "tempo": 0.66,
      "danceability": 0.87,
      "acousticness": 0.17,
      "loudness": 0.76
    }
  },
  {
    "id": 244,
    "title": "Walkin' In The Rain",
    "artist": "블락비",
    "genre": "발라드",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.28,
      "valence": 0.39,
      "tempo": 0.37,
      "danceability": 0.29,
      "acousticness": 0.67,
      "loudness": 0.26
    }
  },
  {
    "id": 245,
    "title": "Yesterday",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.76,
      "valence": 0.66,
      "tempo": 0.77,
      "danceability": 0.85,
      "acousticness": 0.17,
      "loudness": 0.66
    }
  },
  {
    "id": 246,
    "title": "일방적이야",
    "artist": "블락비",
    "genre": "밝은 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.83,
      "tempo": 0.69,
      "danceability": 0.76,
      "acousticness": 0.03,
      "loudness": 0.66
    }
  },
  {
    "id": 247,
    "title": "떠나지마요",
    "artist": "블락비",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.66,
      "tempo": 0.69,
      "danceability": 0.82,
      "acousticness": 0.08,
      "loudness": 0.72
    }
  },
  {
    "id": 248,
    "title": "하지하지마",
    "artist": "GOT7",
    "genre": "파워 댄스",
    "emoji": "🎵",
    "gen": 3,
    "features": {
      "energy": 0.81,
      "valence": 0.55,
      "tempo": 0.72,
      "danceability": 0.83,
      "acousticness": 0.14,
      "loudness": 0.68
    }
  },
  {
    "id": 249,
    "title": "니가 하면",
    "artist": "GOT7",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.66,
      "tempo": 0.77,
      "danceability": 0.85,
      "acousticness": 0.17,
      "loudness": 0.66
    }
  },
  {
    "id": 250,
    "title": "A",
    "artist": "GOT7",
    "genre": "밝은 팝",
    "emoji": "🎵",
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.83,
      "tempo": 0.69,
      "danceability": 0.76,
      "acousticness": 0.03,
      "loudness": 0.66
    }
  },
  {
    "id": 251,
    "title": "딱 좋아",
    "artist": "GOT7",
    "genre": "미디엄 팝",
    "emoji": "🎵",
    "gen": 3,
    "features": {
      "energy": 0.72,
      "valence": 0.63,
      "tempo": 0.72,
      "danceability": 0.78,
      "acousticness": 0.13,
      "loudness": 0.78
    }
  },
  {
    "id": 252,
    "title": "장난아냐",
    "artist": "틴탑",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.74,
      "tempo": 0.75,
      "danceability": 0.76,
      "acousticness": 0.17,
      "loudness": 0.75
    }
  },
  {
    "id": 253,
    "title": "박수",
    "artist": "틴탑",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.63,
      "tempo": 0.72,
      "danceability": 0.78,
      "acousticness": 0.13,
      "loudness": 0.78
    }
  },
  {
    "id": 254,
    "title": "Supa Luv",
    "artist": "틴탑",
    "genre": "밝은 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.85,
      "tempo": 0.59,
      "danceability": 0.76,
      "acousticness": 0.14,
      "loudness": 0.75
    }
  },
  {
    "id": 255,
    "title": "미치겠어",
    "artist": "틴탑",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.78,
      "valence": 0.57,
      "tempo": 0.78,
      "danceability": 0.81,
      "acousticness": 0.04,
      "loudness": 0.66
    }
  },
  {
    "id": 256,
    "title": "향수 뿌리지마",
    "artist": "틴탑",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.71,
      "valence": 0.71,
      "tempo": 0.67,
      "danceability": 0.8,
      "acousticness": 0.07,
      "loudness": 0.66
    }
  },
  {
    "id": 257,
    "title": "To You",
    "artist": "틴탑",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.71,
      "valence": 0.71,
      "tempo": 0.67,
      "danceability": 0.8,
      "acousticness": 0.07,
      "loudness": 0.66
    }
  },
  {
    "id": 258,
    "title": "쉽지않아",
    "artist": "틴탑",
    "genre": "밝은 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.85,
      "tempo": 0.59,
      "danceability": 0.76,
      "acousticness": 0.14,
      "loudness": 0.75
    }
  },
  {
    "id": 259,
    "title": "나랑 사귈래?",
    "artist": "틴탑",
    "genre": "파워 댄스",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.69,
      "tempo": 0.63,
      "danceability": 0.83,
      "acousticness": 0.07,
      "loudness": 0.78
    }
  },
  {
    "id": 260,
    "title": "아침부터 아침까지",
    "artist": "틴탑",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 2,
    "features": {
      "energy": 0.8,
      "valence": 0.71,
      "tempo": 0.63,
      "danceability": 0.87,
      "acousticness": 0.15,
      "loudness": 0.78
    }
  },
  {
    "id": 261,
    "title": "사.계.한",
    "artist": "SHINee",
    "genre": "파워 댄스",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.69,
      "tempo": 0.63,
      "danceability": 0.83,
      "acousticness": 0.07,
      "loudness": 0.78
    }
  },
  {
    "id": 262,
    "title": "산소 같은 너",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.8,
      "valence": 0.71,
      "tempo": 0.63,
      "danceability": 0.87,
      "acousticness": 0.15,
      "loudness": 0.78
    }
  },
  {
    "id": 263,
    "title": "아.미.고",
    "artist": "SHINee",
    "genre": "미디엄 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.69,
      "valence": 0.68,
      "tempo": 0.64,
      "danceability": 0.77,
      "acousticness": 0.1,
      "loudness": 0.61
    }
  },
  {
    "id": 264,
    "title": "줄리엣",
    "artist": "SHINee",
    "genre": "파워 댄스",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.71,
      "tempo": 0.72,
      "danceability": 0.82,
      "acousticness": 0.05,
      "loudness": 0.7
    }
  },
  {
    "id": 265,
    "title": "Jo Jo",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.82,
      "tempo": 0.74,
      "danceability": 0.84,
      "acousticness": 0.17,
      "loudness": 0.65
    }
  },
  {
    "id": 266,
    "title": "Lucifer",
    "artist": "SHINee",
    "genre": "파워 댄스",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.85,
      "valence": 0.66,
      "tempo": 0.71,
      "danceability": 0.82,
      "acousticness": 0.08,
      "loudness": 0.77
    }
  },
  {
    "id": 267,
    "title": "사.계.후",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.66,
      "tempo": 0.72,
      "danceability": 0.81,
      "acousticness": 0.1,
      "loudness": 0.77
    }
  },
  {
    "id": 268,
    "title": "Sherlock",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.8,
      "valence": 0.8,
      "tempo": 0.69,
      "danceability": 0.81,
      "acousticness": 0.06,
      "loudness": 0.64
    }
  },
  {
    "id": 269,
    "title": "Dream Girl",
    "artist": "SHINee",
    "genre": "파워 댄스",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.83,
      "valence": 0.7,
      "tempo": 0.56,
      "danceability": 0.85,
      "acousticness": 0.12,
      "loudness": 0.69
    }
  },
  {
    "id": 270,
    "title": "방백",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.66,
      "tempo": 0.72,
      "danceability": 0.81,
      "acousticness": 0.1,
      "loudness": 0.77
    }
  },
  {
    "id": 271,
    "title": "Everybody",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.79,
      "tempo": 0.56,
      "danceability": 0.78,
      "acousticness": 0.05,
      "loudness": 0.62
    }
  },
  {
    "id": 272,
    "title": "View",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.8,
      "valence": 0.8,
      "tempo": 0.69,
      "danceability": 0.81,
      "acousticness": 0.06,
      "loudness": 0.64
    }
  },
  {
    "id": 273,
    "title": "재연",
    "artist": "SHINee",
    "genre": "미디엄 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.68,
      "valence": 0.66,
      "tempo": 0.56,
      "danceability": 0.78,
      "acousticness": 0.12,
      "loudness": 0.65
    }
  },
  {
    "id": 274,
    "title": "투명 우산",
    "artist": "SHINee",
    "genre": "파워 댄스",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.83,
      "valence": 0.7,
      "tempo": 0.56,
      "danceability": 0.85,
      "acousticness": 0.12,
      "loudness": 0.69
    }
  },
  {
    "id": 275,
    "title": "데리러 가",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.73,
      "valence": 0.79,
      "tempo": 0.56,
      "danceability": 0.78,
      "acousticness": 0.05,
      "loudness": 0.62
    }
  },
  {
    "id": 276,
    "title": "Stand By Me",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.65,
      "tempo": 0.57,
      "danceability": 0.86,
      "acousticness": 0.08,
      "loudness": 0.82
    }
  },
  {
    "id": 277,
    "title": "누난 너무 예뻐",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.63,
      "tempo": 0.58,
      "danceability": 0.82,
      "acousticness": 0.14,
      "loudness": 0.81
    }
  },
  {
    "id": 278,
    "title": "History",
    "artist": "EXO-K",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.63,
      "tempo": 0.58,
      "danceability": 0.82,
      "acousticness": 0.14,
      "loudness": 0.81
    }
  },
  {
    "id": 279,
    "title": "Mama",
    "artist": "EXO-K",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.83,
      "tempo": 0.67,
      "danceability": 0.88,
      "acousticness": 0.12,
      "loudness": 0.84
    }
  },
  {
    "id": 280,
    "title": "중독",
    "artist": "EXO-K",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.65,
      "valence": 0.63,
      "tempo": 0.66,
      "danceability": 0.89,
      "acousticness": 0.14,
      "loudness": 0.79
    }
  },
  {
    "id": 281,
    "title": "늑대와 미녀",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.65,
      "tempo": 0.57,
      "danceability": 0.86,
      "acousticness": 0.08,
      "loudness": 0.82
    }
  },
  {
    "id": 282,
    "title": "Xoxo",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.77,
      "valence": 0.67,
      "tempo": 0.7,
      "danceability": 0.76,
      "acousticness": 0.07,
      "loudness": 0.82
    }
  },
  {
    "id": 283,
    "title": "인어의 눈물",
    "artist": "EXO",
    "genre": "발라드",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.43,
      "valence": 0.3,
      "tempo": 0.37,
      "danceability": 0.38,
      "acousticness": 0.71,
      "loudness": 0.33
    }
  },
  {
    "id": 284,
    "title": "나비소녀",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.64,
      "tempo": 0.58,
      "danceability": 0.77,
      "acousticness": 0.11,
      "loudness": 0.73
    }
  },
  {
    "id": 285,
    "title": "피터팬",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.64,
      "tempo": 0.58,
      "danceability": 0.77,
      "acousticness": 0.11,
      "loudness": 0.73
    }
  },
  {
    "id": 286,
    "title": "Baby",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.63,
      "tempo": 0.72,
      "danceability": 0.76,
      "acousticness": 0.02,
      "loudness": 0.61
    }
  },
  {
    "id": 287,
    "title": "12월의 기적",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.58,
      "tempo": 0.68,
      "danceability": 0.81,
      "acousticness": 0.09,
      "loudness": 0.75
    }
  },
  {
    "id": 288,
    "title": "첫 눈",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.65,
      "tempo": 0.67,
      "danceability": 0.75,
      "acousticness": 0.06,
      "loudness": 0.74
    }
  },
  {
    "id": 289,
    "title": "Call Me Baby",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.77,
      "valence": 0.65,
      "tempo": 0.55,
      "danceability": 0.8,
      "acousticness": 0.14,
      "loudness": 0.71
    }
  },
  {
    "id": 290,
    "title": "Love Me Right",
    "artist": "EXO",
    "genre": "파워 댄스",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.71,
      "tempo": 0.69,
      "danceability": 0.82,
      "acousticness": 0.05,
      "loudness": 0.61
    }
  },
  {
    "id": 291,
    "title": "불공평해",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.7,
      "tempo": 0.6,
      "danceability": 0.86,
      "acousticness": 0.09,
      "loudness": 0.75
    }
  },
  {
    "id": 292,
    "title": "Monster",
    "artist": "EXO",
    "genre": "미디엄 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.74,
      "tempo": 0.59,
      "danceability": 0.78,
      "acousticness": 0.13,
      "loudness": 0.71
    }
  },
  {
    "id": 293,
    "title": "Heaven",
    "artist": "EXO",
    "genre": "미디엄 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.74,
      "tempo": 0.59,
      "danceability": 0.78,
      "acousticness": 0.13,
      "loudness": 0.71
    }
  },
  {
    "id": 294,
    "title": "Artificial Love",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.84,
      "tempo": 0.64,
      "danceability": 0.87,
      "acousticness": 0.06,
      "loudness": 0.71
    }
  },
  {
    "id": 295,
    "title": "전야",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.83,
      "tempo": 0.64,
      "danceability": 0.85,
      "acousticness": 0.11,
      "loudness": 0.84
    }
  },
  {
    "id": 296,
    "title": "Universe",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.84,
      "tempo": 0.6,
      "danceability": 0.9,
      "acousticness": 0.16,
      "loudness": 0.66
    }
  },
  {
    "id": 297,
    "title": "Tempo",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.79,
      "tempo": 0.67,
      "danceability": 0.82,
      "acousticness": 0.06,
      "loudness": 0.77
    }
  },
  {
    "id": 298,
    "title": "Obsession",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.74,
      "valence": 0.71,
      "tempo": 0.6,
      "danceability": 0.86,
      "acousticness": 0.05,
      "loudness": 0.78
    }
  },
  {
    "id": 299,
    "title": "Electric Kiss",
    "artist": "EXO",
    "genre": "파워 댄스",
    "emoji": "🐺",
    "gen": 3,
    "features": {
      "energy": 0.81,
      "valence": 0.63,
      "tempo": 0.57,
      "danceability": 0.82,
      "acousticness": 0.17,
      "loudness": 0.64
    }
  },
  {
    "id": 300,
    "title": "소방차",
    "artist": "NCT 127",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.71,
      "tempo": 0.69,
      "danceability": 0.82,
      "acousticness": 0.05,
      "loudness": 0.61
    }
  },
  {
    "id": 301,
    "title": "무한적아",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.68,
      "valence": 0.68,
      "tempo": 0.76,
      "danceability": 0.82,
      "acousticness": 0.05,
      "loudness": 0.77
    }
  },
  {
    "id": 302,
    "title": "Back 2 U",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.55,
      "tempo": 0.6,
      "danceability": 0.88,
      "acousticness": 0.05,
      "loudness": 0.78
    }
  },
  {
    "id": 303,
    "title": "롤러코스터",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.64,
      "tempo": 0.72,
      "danceability": 0.83,
      "acousticness": 0.08,
      "loudness": 0.6
    }
  },
  {
    "id": 304,
    "title": "Cherry Bomb",
    "artist": "NCT 127",
    "genre": "힙합",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.87,
      "valence": 0.45,
      "tempo": 0.75,
      "danceability": 0.89,
      "acousticness": 0.01,
      "loudness": 0.84
    }
  },
  {
    "id": 305,
    "title": "0 Mile",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.61,
      "tempo": 0.61,
      "danceability": 0.79,
      "acousticness": 0.11,
      "loudness": 0.82
    }
  },
  {
    "id": 306,
    "title": "Touch",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.61,
      "tempo": 0.61,
      "danceability": 0.79,
      "acousticness": 0.11,
      "loudness": 0.82
    }
  },
  {
    "id": 307,
    "title": "Regular",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.84,
      "tempo": 0.66,
      "danceability": 0.88,
      "acousticness": 0.05,
      "loudness": 0.64
    }
  },
  {
    "id": 308,
    "title": "Simon Says",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.74,
      "valence": 0.76,
      "tempo": 0.65,
      "danceability": 0.78,
      "acousticness": 0.1,
      "loudness": 0.78
    }
  },
  {
    "id": 309,
    "title": "영웅",
    "artist": "NCT 127",
    "genre": "강렬 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.92,
      "valence": 0.49,
      "tempo": 0.79,
      "danceability": 0.83,
      "acousticness": 0.03,
      "loudness": 0.95
    }
  },
  {
    "id": 310,
    "title": "뿔",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.61,
      "tempo": 0.61,
      "danceability": 0.79,
      "acousticness": 0.11,
      "loudness": 0.82
    }
  },
  {
    "id": 311,
    "title": "우산",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.75,
      "tempo": 0.56,
      "danceability": 0.77,
      "acousticness": 0.17,
      "loudness": 0.65
    }
  },
  {
    "id": 312,
    "title": "Punch",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.83,
      "tempo": 0.55,
      "danceability": 0.8,
      "acousticness": 0.14,
      "loudness": 0.8
    }
  },
  {
    "id": 313,
    "title": "Favorite",
    "artist": "NCT 127",
    "genre": "미디엄 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.74,
      "valence": 0.74,
      "tempo": 0.66,
      "danceability": 0.8,
      "acousticness": 0.08,
      "loudness": 0.62
    }
  },
  {
    "id": 314,
    "title": "Sticker",
    "artist": "NCT 127",
    "genre": "미디엄 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.74,
      "valence": 0.74,
      "tempo": 0.66,
      "danceability": 0.8,
      "acousticness": 0.08,
      "loudness": 0.62
    }
  },
  {
    "id": 315,
    "title": "Love On The Floor",
    "artist": "NCT 127",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.65,
      "tempo": 0.59,
      "danceability": 0.88,
      "acousticness": 0.11,
      "loudness": 0.76
    }
  },
  {
    "id": 316,
    "title": "Lemonade",
    "artist": "NCT 127",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.77,
      "tempo": 0.58,
      "danceability": 0.8,
      "acousticness": 0.1,
      "loudness": 0.77
    }
  },
  {
    "id": 317,
    "title": "마지막 첫사랑",
    "artist": "NCT DREAM",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.77,
      "tempo": 0.58,
      "danceability": 0.8,
      "acousticness": 0.1,
      "loudness": 0.77
    }
  },
  {
    "id": 318,
    "title": "덩크슛",
    "artist": "NCT DREAM",
    "genre": "미디엄 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.74,
      "valence": 0.74,
      "tempo": 0.66,
      "danceability": 0.8,
      "acousticness": 0.08,
      "loudness": 0.62
    }
  },
  {
    "id": 319,
    "title": "Chewing Gum",
    "artist": "NCT DREAM",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.64,
      "tempo": 0.63,
      "danceability": 0.81,
      "acousticness": 0.05,
      "loudness": 0.8
    }
  },
  {
    "id": 320,
    "title": "We Young",
    "artist": "NCT DREAM",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.8,
      "tempo": 0.66,
      "danceability": 0.86,
      "acousticness": 0.13,
      "loudness": 0.64
    }
  },
  {
    "id": 321,
    "title": "Go",
    "artist": "NCT DREAM",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.79,
      "tempo": 0.65,
      "danceability": 0.76,
      "acousticness": 0.06,
      "loudness": 0.85
    }
  },
  {
    "id": 322,
    "title": "We Go Up",
    "artist": "NCT DREAM",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.64,
      "tempo": 0.63,
      "danceability": 0.81,
      "acousticness": 0.05,
      "loudness": 0.8
    }
  },
  {
    "id": 323,
    "title": "1, 2, 3",
    "artist": "NCT DREAM",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.64,
      "tempo": 0.63,
      "danceability": 0.81,
      "acousticness": 0.05,
      "loudness": 0.8
    }
  },
  {
    "id": 324,
    "title": "Drippin'",
    "artist": "NCT DREAM",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.65,
      "tempo": 0.59,
      "danceability": 0.88,
      "acousticness": 0.11,
      "loudness": 0.76
    }
  },
  {
    "id": 325,
    "title": "Boom",
    "artist": "NCT DREAM",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.78,
      "tempo": 0.67,
      "danceability": 0.86,
      "acousticness": 0.13,
      "loudness": 0.76
    }
  },
  {
    "id": 326,
    "title": "사랑이 좀 어려워",
    "artist": "NCT DREAM",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.83,
      "valence": 0.72,
      "tempo": 0.77,
      "danceability": 0.81,
      "acousticness": 0.07,
      "loudness": 0.69
    }
  },
  {
    "id": 327,
    "title": "사랑은 또다시",
    "artist": "NCT DREAM",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.66,
      "tempo": 0.8,
      "danceability": 0.76,
      "acousticness": 0.1,
      "loudness": 0.69
    }
  },
  {
    "id": 328,
    "title": "너의 자리",
    "artist": "NCT DREAM",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.7,
      "valence": 0.71,
      "tempo": 0.69,
      "danceability": 0.86,
      "acousticness": 0.08,
      "loudness": 0.6
    }
  },
  {
    "id": 329,
    "title": "Hello Future",
    "artist": "NCT DREAM",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.58,
      "tempo": 0.68,
      "danceability": 0.87,
      "acousticness": 0.04,
      "loudness": 0.67
    }
  },
  {
    "id": 330,
    "title": "Boss",
    "artist": "NCT U",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.66,
      "tempo": 0.8,
      "danceability": 0.76,
      "acousticness": 0.1,
      "loudness": 0.69
    }
  },
  {
    "id": 331,
    "title": "Baby Don't Stop",
    "artist": "NCT U",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.55,
      "tempo": 0.8,
      "danceability": 0.77,
      "acousticness": 0.08,
      "loudness": 0.84
    }
  },
  {
    "id": 332,
    "title": "일곱 번째 감각",
    "artist": "NCT U",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.68,
      "valence": 0.84,
      "tempo": 0.71,
      "danceability": 0.82,
      "acousticness": 0.1,
      "loudness": 0.79
    }
  },
  {
    "id": 333,
    "title": "Without You",
    "artist": "NCT U",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.78,
      "tempo": 0.78,
      "danceability": 0.82,
      "acousticness": 0.03,
      "loudness": 0.73
    }
  },
  {
    "id": 334,
    "title": "90's Love",
    "artist": "NCT U",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.73,
      "tempo": 0.57,
      "danceability": 0.82,
      "acousticness": 0.13,
      "loudness": 0.84
    }
  },
  {
    "id": 335,
    "title": "Misfit",
    "artist": "NCT U",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.58,
      "tempo": 0.68,
      "danceability": 0.87,
      "acousticness": 0.04,
      "loudness": 0.67
    }
  },
  {
    "id": 336,
    "title": "Make A Wish",
    "artist": "NCT U",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.73,
      "tempo": 0.79,
      "danceability": 0.77,
      "acousticness": 0.14,
      "loudness": 0.73
    }
  },
  {
    "id": 337,
    "title": "Universe (let's Play Ball)",
    "artist": "NCT U",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.71,
      "tempo": 0.7,
      "danceability": 0.8,
      "acousticness": 0.06,
      "loudness": 0.76
    }
  },
  {
    "id": 338,
    "title": "Baggy Jeans",
    "artist": "NCT U",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.78,
      "tempo": 0.6,
      "danceability": 0.79,
      "acousticness": 0.15,
      "loudness": 0.62
    }
  },
  {
    "id": 339,
    "title": "Hands Up",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.73,
      "tempo": 0.79,
      "danceability": 0.77,
      "acousticness": 0.14,
      "loudness": 0.73
    }
  },
  {
    "id": 340,
    "title": "We Go",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.58,
      "tempo": 0.77,
      "danceability": 0.89,
      "acousticness": 0.16,
      "loudness": 0.77
    }
  },
  {
    "id": 341,
    "title": "Wish",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.58,
      "tempo": 0.77,
      "danceability": 0.89,
      "acousticness": 0.16,
      "loudness": 0.77
    }
  },
  {
    "id": 342,
    "title": "Sail Away",
    "artist": "NCT WISH",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.83,
      "valence": 0.79,
      "tempo": 0.65,
      "danceability": 0.85,
      "acousticness": 0.12,
      "loudness": 0.84
    }
  },
  {
    "id": 343,
    "title": "Songbird",
    "artist": "NCT WISH",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.83,
      "valence": 0.79,
      "tempo": 0.65,
      "danceability": 0.85,
      "acousticness": 0.12,
      "loudness": 0.84
    }
  },
  {
    "id": 344,
    "title": "Tears Are Falling",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.83,
      "valence": 0.64,
      "tempo": 0.78,
      "danceability": 0.76,
      "acousticness": 0.05,
      "loudness": 0.64
    }
  },
  {
    "id": 345,
    "title": "Steady",
    "artist": "NCT WISH",
    "genre": "파워 댄스",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.83,
      "valence": 0.79,
      "tempo": 0.65,
      "danceability": 0.85,
      "acousticness": 0.12,
      "loudness": 0.84
    }
  },
  {
    "id": 346,
    "title": "3분까진 필요 없어",
    "artist": "NCT WISH",
    "genre": "미디엄 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.68,
      "valence": 0.73,
      "tempo": 0.63,
      "danceability": 0.76,
      "acousticness": 0.1,
      "loudness": 0.73
    }
  },
  {
    "id": 347,
    "title": "Dunk Shot",
    "artist": "NCT WISH",
    "genre": "미디엄 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.68,
      "valence": 0.73,
      "tempo": 0.63,
      "danceability": 0.76,
      "acousticness": 0.1,
      "loudness": 0.73
    }
  },
  {
    "id": 348,
    "title": "On & On",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.58,
      "tempo": 0.57,
      "danceability": 0.86,
      "acousticness": 0.12,
      "loudness": 0.6
    }
  },
  {
    "id": 349,
    "title": "Skate",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.66,
      "tempo": 0.73,
      "danceability": 0.84,
      "acousticness": 0.08,
      "loudness": 0.63
    }
  },
  {
    "id": 350,
    "title": "Nasa",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.66,
      "tempo": 0.73,
      "danceability": 0.84,
      "acousticness": 0.08,
      "loudness": 0.63
    }
  },
  {
    "id": 351,
    "title": "1000",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.58,
      "tempo": 0.57,
      "danceability": 0.86,
      "acousticness": 0.12,
      "loudness": 0.6
    }
  },
  {
    "id": 352,
    "title": "Silly Dance",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.71,
      "tempo": 0.7,
      "danceability": 0.8,
      "acousticness": 0.06,
      "loudness": 0.76
    }
  },
  {
    "id": 353,
    "title": "Surf",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.69,
      "tempo": 0.61,
      "danceability": 0.82,
      "acousticness": 0.09,
      "loudness": 0.74
    }
  },
  {
    "id": 354,
    "title": "Color",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.62,
      "tempo": 0.65,
      "danceability": 0.8,
      "acousticness": 0.05,
      "loudness": 0.62
    }
  },
  {
    "id": 355,
    "title": "Baby Blue",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.81,
      "valence": 0.8,
      "tempo": 0.68,
      "danceability": 0.79,
      "acousticness": 0.03,
      "loudness": 0.81
    }
  },
  {
    "id": 356,
    "title": "Cheat Code",
    "artist": "NCT WISH",
    "genre": "댄스 팝",
    "emoji": "💚",
    "gen": 3,
    "features": {
      "energy": 0.79,
      "valence": 0.83,
      "tempo": 0.74,
      "danceability": 0.79,
      "acousticness": 0.05,
      "loudness": 0.7
    }
  },
  {
    "id": 357,
    "title": "고마워 (아사히 X 하루토)",
    "artist": "TREASURE",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.71,
      "valence": 0.67,
      "tempo": 0.7,
      "danceability": 0.9,
      "acousticness": 0.17,
      "loudness": 0.68
    }
  },
  {
    "id": 358,
    "title": "병",
    "artist": "TREASURE",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.8,
      "valence": 0.62,
      "tempo": 0.65,
      "danceability": 0.8,
      "acousticness": 0.05,
      "loudness": 0.62
    }
  },
  {
    "id": 359,
    "title": "미쳐가네",
    "artist": "TREASURE",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.8,
      "valence": 0.71,
      "tempo": 0.7,
      "danceability": 0.8,
      "acousticness": 0.06,
      "loudness": 0.76
    }
  },
  {
    "id": 360,
    "title": "직진",
    "artist": "TREASURE",
    "genre": "파워 댄스",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.83,
      "valence": 0.59,
      "tempo": 0.74,
      "danceability": 0.81,
      "acousticness": 0.15,
      "loudness": 0.83
    }
  },
  {
    "id": 361,
    "title": "Hello",
    "artist": "TREASURE",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.79,
      "valence": 0.83,
      "tempo": 0.74,
      "danceability": 0.79,
      "acousticness": 0.05,
      "loudness": 0.7
    }
  },
  {
    "id": 362,
    "title": "Bona Bona",
    "artist": "TREASURE",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.67,
      "valence": 0.8,
      "tempo": 0.74,
      "danceability": 0.84,
      "acousticness": 0.06,
      "loudness": 0.83
    }
  },
  {
    "id": 363,
    "title": "King Kong",
    "artist": "TREASURE",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.71,
      "valence": 0.67,
      "tempo": 0.7,
      "danceability": 0.9,
      "acousticness": 0.17,
      "loudness": 0.68
    }
  },
  {
    "id": 364,
    "title": "Yellow",
    "artist": "TREASURE",
    "genre": "펑키 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.8,
      "valence": 0.85,
      "tempo": 0.78,
      "danceability": 0.89,
      "acousticness": 0.06,
      "loudness": 0.61
    }
  },
  {
    "id": 365,
    "title": "Paradise",
    "artist": "TREASURE",
    "genre": "밝은 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.67,
      "valence": 0.84,
      "tempo": 0.74,
      "danceability": 0.79,
      "acousticness": 0.1,
      "loudness": 0.78
    }
  },
  {
    "id": 366,
    "title": "Run",
    "artist": "TREASURE",
    "genre": "힙합",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.83,
      "valence": 0.72,
      "tempo": 0.56,
      "danceability": 0.89,
      "acousticness": 0.04,
      "loudness": 0.75
    }
  },
  {
    "id": 367,
    "title": "Reveal",
    "artist": "더보이즈",
    "genre": "밝은 팝",
    "emoji": "📣",
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.84,
      "tempo": 0.74,
      "danceability": 0.79,
      "acousticness": 0.1,
      "loudness": 0.78
    }
  },
  {
    "id": 368,
    "title": "Salty",
    "artist": "더보이즈",
    "genre": "밝은 팝",
    "emoji": "📣",
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.84,
      "tempo": 0.74,
      "danceability": 0.79,
      "acousticness": 0.1,
      "loudness": 0.78
    }
  },
  {
    "id": 369,
    "title": "Thrill Ride",
    "artist": "더보이즈",
    "genre": "댄스 팝",
    "emoji": "📣",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.71,
      "tempo": 0.74,
      "danceability": 0.85,
      "acousticness": 0.16,
      "loudness": 0.84
    }
  },
  {
    "id": 370,
    "title": "지킬게",
    "artist": "더보이즈",
    "genre": "밝은 팝",
    "emoji": "📣",
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.84,
      "tempo": 0.74,
      "danceability": 0.79,
      "acousticness": 0.1,
      "loudness": 0.78
    }
  },
  {
    "id": 371,
    "title": "The Stealer",
    "artist": "더보이즈",
    "genre": "댄스 팝",
    "emoji": "📣",
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.84,
      "tempo": 0.56,
      "danceability": 0.88,
      "acousticness": 0.06,
      "loudness": 0.65
    }
  },
  {
    "id": 372,
    "title": "Given-taken",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.59,
      "tempo": 0.61,
      "danceability": 0.86,
      "acousticness": 0.07,
      "loudness": 0.79
    }
  },
  {
    "id": 373,
    "title": "Let Me In",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.75,
      "valence": 0.84,
      "tempo": 0.56,
      "danceability": 0.88,
      "acousticness": 0.06,
      "loudness": 0.65
    }
  },
  {
    "id": 374,
    "title": "10 Months",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.59,
      "tempo": 0.61,
      "danceability": 0.86,
      "acousticness": 0.07,
      "loudness": 0.79
    }
  },
  {
    "id": 375,
    "title": "Drunk-dazed",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.8,
      "tempo": 0.65,
      "danceability": 0.8,
      "acousticness": 0.16,
      "loudness": 0.65
    }
  },
  {
    "id": 376,
    "title": "Fever",
    "artist": "엔하이픈",
    "genre": "파워 댄스",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.83,
      "valence": 0.65,
      "tempo": 0.69,
      "danceability": 0.83,
      "acousticness": 0.15,
      "loudness": 0.71
    }
  },
  {
    "id": 377,
    "title": "Not For Sale",
    "artist": "엔하이픈",
    "genre": "파워 댄스",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.66,
      "tempo": 0.64,
      "danceability": 0.87,
      "acousticness": 0.05,
      "loudness": 0.62
    }
  },
  {
    "id": 378,
    "title": "Tamed-dashed",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.78,
      "valence": 0.74,
      "tempo": 0.69,
      "danceability": 0.81,
      "acousticness": 0.05,
      "loudness": 0.72
    }
  },
  {
    "id": 379,
    "title": "Upper Side Dreamin'",
    "artist": "엔하이픈",
    "genre": "미디엄 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.67,
      "valence": 0.67,
      "tempo": 0.75,
      "danceability": 0.75,
      "acousticness": 0.06,
      "loudness": 0.8
    }
  },
  {
    "id": 380,
    "title": "모 아니면 도",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.76,
      "tempo": 0.68,
      "danceability": 0.81,
      "acousticness": 0.17,
      "loudness": 0.61
    }
  },
  {
    "id": 381,
    "title": "Blockbuster",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.75,
      "valence": 0.84,
      "tempo": 0.71,
      "danceability": 0.85,
      "acousticness": 0.04,
      "loudness": 0.83
    }
  },
  {
    "id": 382,
    "title": "Attention, Please!",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.76,
      "tempo": 0.55,
      "danceability": 0.78,
      "acousticness": 0.04,
      "loudness": 0.62
    }
  },
  {
    "id": 383,
    "title": "Polaroid Love",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.72,
      "valence": 0.56,
      "tempo": 0.58,
      "danceability": 0.89,
      "acousticness": 0.12,
      "loudness": 0.85
    }
  },
  {
    "id": 384,
    "title": "Future Perfect",
    "artist": "엔하이픈",
    "genre": "미디엄 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.67,
      "valence": 0.67,
      "tempo": 0.75,
      "danceability": 0.75,
      "acousticness": 0.06,
      "loudness": 0.8
    }
  },
  {
    "id": 385,
    "title": "Paradoxxx Invasion",
    "artist": "엔하이픈",
    "genre": "파워 댄스",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.58,
      "tempo": 0.71,
      "danceability": 0.81,
      "acousticness": 0.1,
      "loudness": 0.7
    }
  },
  {
    "id": 386,
    "title": "Tfw",
    "artist": "엔하이픈",
    "genre": "파워 댄스",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.66,
      "tempo": 0.64,
      "danceability": 0.87,
      "acousticness": 0.05,
      "loudness": 0.62
    }
  },
  {
    "id": 387,
    "title": "Shout Out",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.72,
      "valence": 0.56,
      "tempo": 0.58,
      "danceability": 0.89,
      "acousticness": 0.12,
      "loudness": 0.85
    }
  },
  {
    "id": 388,
    "title": "구해줘",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.76,
      "valence": 0.58,
      "tempo": 0.68,
      "danceability": 0.9,
      "acousticness": 0.16,
      "loudness": 0.73
    }
  },
  {
    "id": 389,
    "title": "Fate",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.69,
      "tempo": 0.7,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.65
    }
  },
  {
    "id": 390,
    "title": "Bite Me",
    "artist": "엔하이픈",
    "genre": "미디엄 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.75,
      "tempo": 0.69,
      "danceability": 0.77,
      "acousticness": 0.08,
      "loudness": 0.69
    }
  },
  {
    "id": 391,
    "title": "Sacrifice",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.76,
      "tempo": 0.55,
      "danceability": 0.78,
      "acousticness": 0.04,
      "loudness": 0.62
    }
  },
  {
    "id": 392,
    "title": "Chaconne",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.76,
      "tempo": 0.55,
      "danceability": 0.78,
      "acousticness": 0.04,
      "loudness": 0.62
    }
  },
  {
    "id": 393,
    "title": "Bills",
    "artist": "엔하이픈",
    "genre": "미디엄 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.67,
      "valence": 0.67,
      "tempo": 0.75,
      "danceability": 0.75,
      "acousticness": 0.06,
      "loudness": 0.8
    }
  },
  {
    "id": 394,
    "title": "Karma",
    "artist": "엔하이픈",
    "genre": "파워 댄스",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.68,
      "tempo": 0.7,
      "danceability": 0.81,
      "acousticness": 0.13,
      "loudness": 0.76
    }
  },
  {
    "id": 395,
    "title": "Sweet Venom",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.84,
      "tempo": 0.73,
      "danceability": 0.87,
      "acousticness": 0.15,
      "loudness": 0.75
    }
  },
  {
    "id": 396,
    "title": "Still Monster",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.68,
      "tempo": 0.79,
      "danceability": 0.79,
      "acousticness": 0.11,
      "loudness": 0.71
    }
  },
  {
    "id": 397,
    "title": "멀어",
    "artist": "엔하이픈",
    "genre": "파워 댄스",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.68,
      "tempo": 0.7,
      "danceability": 0.81,
      "acousticness": 0.13,
      "loudness": 0.76
    }
  },
  {
    "id": 398,
    "title": "Orange Flower",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.68,
      "valence": 0.84,
      "tempo": 0.55,
      "danceability": 0.8,
      "acousticness": 0.17,
      "loudness": 0.77
    }
  },
  {
    "id": 399,
    "title": "Daydream",
    "artist": "엔하이픈",
    "genre": "미디엄 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.73,
      "valence": 0.68,
      "tempo": 0.65,
      "danceability": 0.8,
      "acousticness": 0.04,
      "loudness": 0.61
    }
  },
  {
    "id": 400,
    "title": "No Doubt",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.78,
      "valence": 0.58,
      "tempo": 0.75,
      "danceability": 0.83,
      "acousticness": 0.07,
      "loudness": 0.79
    }
  },
  {
    "id": 401,
    "title": "Moonstruck",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.68,
      "valence": 0.84,
      "tempo": 0.55,
      "danceability": 0.8,
      "acousticness": 0.17,
      "loudness": 0.77
    }
  },
  {
    "id": 402,
    "title": "Xo",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.7,
      "valence": 0.65,
      "tempo": 0.75,
      "danceability": 0.88,
      "acousticness": 0.17,
      "loudness": 0.78
    }
  },
  {
    "id": 403,
    "title": "Your Eyes Only",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.7,
      "valence": 0.55,
      "tempo": 0.69,
      "danceability": 0.85,
      "acousticness": 0.13,
      "loudness": 0.67
    }
  },
  {
    "id": 404,
    "title": "Hundred Broken Hearts",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.76,
      "valence": 0.79,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.12,
      "loudness": 0.7
    }
  },
  {
    "id": 405,
    "title": "Brought The Heat Back",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.73,
      "valence": 0.6,
      "tempo": 0.56,
      "danceability": 0.86,
      "acousticness": 0.13,
      "loudness": 0.74
    }
  },
  {
    "id": 406,
    "title": "Paranormal",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.62,
      "tempo": 0.62,
      "danceability": 0.78,
      "acousticness": 0.1,
      "loudness": 0.79
    }
  },
  {
    "id": 407,
    "title": "Royalty",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.74,
      "tempo": 0.67,
      "danceability": 0.76,
      "acousticness": 0.13,
      "loudness": 0.67
    }
  },
  {
    "id": 408,
    "title": "Highway 1009",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.77,
      "tempo": 0.58,
      "danceability": 0.79,
      "acousticness": 0.13,
      "loudness": 0.62
    }
  },
  {
    "id": 409,
    "title": "Bad Desire",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.71,
      "valence": 0.58,
      "tempo": 0.59,
      "danceability": 0.85,
      "acousticness": 0.06,
      "loudness": 0.8
    }
  },
  {
    "id": 410,
    "title": "Outside",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.7,
      "valence": 0.55,
      "tempo": 0.69,
      "danceability": 0.85,
      "acousticness": 0.13,
      "loudness": 0.67
    }
  },
  {
    "id": 411,
    "title": "Loose",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.62,
      "tempo": 0.62,
      "danceability": 0.78,
      "acousticness": 0.1,
      "loudness": 0.79
    }
  },
  {
    "id": 412,
    "title": "Helium",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.79,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.08,
      "loudness": 0.77
    }
  },
  {
    "id": 413,
    "title": "Too Close",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.78,
      "valence": 0.73,
      "tempo": 0.77,
      "danceability": 0.82,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 414,
    "title": "Big Girls Don't Cry",
    "artist": "엔하이픈",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.75,
      "tempo": 0.57,
      "danceability": 0.87,
      "acousticness": 0.08,
      "loudness": 0.78
    }
  },
  {
    "id": 415,
    "title": "Under The Skin",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.57,
      "tempo": 0.66,
      "danceability": 0.88,
      "acousticness": 0.06,
      "loudness": 0.67
    }
  },
  {
    "id": 416,
    "title": "Scent Of You",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.68,
      "valence": 0.79,
      "tempo": 0.75,
      "danceability": 0.76,
      "acousticness": 0.06,
      "loudness": 0.77
    }
  },
  {
    "id": 417,
    "title": "Buzz Love",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.73,
      "valence": 0.6,
      "tempo": 0.56,
      "danceability": 0.86,
      "acousticness": 0.13,
      "loudness": 0.74
    }
  },
  {
    "id": 418,
    "title": "The Final Countdown",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.73,
      "valence": 0.78,
      "tempo": 0.61,
      "danceability": 0.87,
      "acousticness": 0.06,
      "loudness": 0.76
    }
  },
  {
    "id": 419,
    "title": "W.o.l.f.",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.68,
      "valence": 0.77,
      "tempo": 0.64,
      "danceability": 0.78,
      "acousticness": 0.16,
      "loudness": 0.68
    }
  },
  {
    "id": 420,
    "title": "Firework",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.68,
      "valence": 0.79,
      "tempo": 0.75,
      "danceability": 0.76,
      "acousticness": 0.06,
      "loudness": 0.77
    }
  },
  {
    "id": 421,
    "title": "Road Not Taken",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.72,
      "valence": 0.71,
      "tempo": 0.65,
      "danceability": 0.87,
      "acousticness": 0.02,
      "loudness": 0.71
    }
  },
  {
    "id": 422,
    "title": "The Moon Is Beautiful",
    "artist": "&TEAM",
    "genre": "발라드",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.29,
      "valence": 0.36,
      "tempo": 0.36,
      "danceability": 0.31,
      "acousticness": 0.72,
      "loudness": 0.24
    }
  },
  {
    "id": 423,
    "title": "Blind Love",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.77,
      "valence": 0.75,
      "tempo": 0.57,
      "danceability": 0.87,
      "acousticness": 0.08,
      "loudness": 0.78
    }
  },
  {
    "id": 424,
    "title": "War Cry",
    "artist": "&TEAM",
    "genre": "미디엄 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.59,
      "tempo": 0.59,
      "danceability": 0.78,
      "acousticness": 0.07,
      "loudness": 0.8
    }
  },
  {
    "id": 425,
    "title": "Dropkick",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.77,
      "valence": 0.75,
      "tempo": 0.57,
      "danceability": 0.87,
      "acousticness": 0.08,
      "loudness": 0.78
    }
  },
  {
    "id": 426,
    "title": "Really Crazy",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.76,
      "valence": 0.58,
      "tempo": 0.56,
      "danceability": 0.75,
      "acousticness": 0.17,
      "loudness": 0.71
    }
  },
  {
    "id": 427,
    "title": "Alien",
    "artist": "&TEAM",
    "genre": "파워 댄스",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.84,
      "valence": 0.78,
      "tempo": 0.78,
      "danceability": 0.87,
      "acousticness": 0.02,
      "loudness": 0.71
    }
  },
  {
    "id": 428,
    "title": "Yukiakari",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.73,
      "valence": 0.78,
      "tempo": 0.61,
      "danceability": 0.87,
      "acousticness": 0.06,
      "loudness": 0.76
    }
  },
  {
    "id": 429,
    "title": "Deer Hunter",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.73,
      "valence": 0.64,
      "tempo": 0.62,
      "danceability": 0.88,
      "acousticness": 0.14,
      "loudness": 0.75
    }
  },
  {
    "id": 430,
    "title": "Illumination",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.69,
      "valence": 0.79,
      "tempo": 0.72,
      "danceability": 0.84,
      "acousticness": 0.09,
      "loudness": 0.81
    }
  },
  {
    "id": 431,
    "title": "Crescent Moon's Wish",
    "artist": "&TEAM",
    "genre": "밝은 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.67,
      "valence": 0.83,
      "tempo": 0.76,
      "danceability": 0.77,
      "acousticness": 0.16,
      "loudness": 0.85
    }
  },
  {
    "id": 432,
    "title": "Samidare",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.73,
      "valence": 0.64,
      "tempo": 0.62,
      "danceability": 0.88,
      "acousticness": 0.14,
      "loudness": 0.75
    }
  },
  {
    "id": 433,
    "title": "Scar To Scar",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.71,
      "valence": 0.55,
      "tempo": 0.67,
      "danceability": 0.88,
      "acousticness": 0.13,
      "loudness": 0.76
    }
  },
  {
    "id": 434,
    "title": "Aoarashi",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.69,
      "valence": 0.79,
      "tempo": 0.72,
      "danceability": 0.84,
      "acousticness": 0.09,
      "loudness": 0.81
    }
  },
  {
    "id": 435,
    "title": "Koegawari",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.8,
      "valence": 0.56,
      "tempo": 0.71,
      "danceability": 0.79,
      "acousticness": 0.06,
      "loudness": 0.67
    }
  },
  {
    "id": 436,
    "title": "Imprinted",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.71,
      "valence": 0.55,
      "tempo": 0.67,
      "danceability": 0.88,
      "acousticness": 0.13,
      "loudness": 0.76
    }
  },
  {
    "id": 437,
    "title": "Jyuugoya",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.71,
      "valence": 0.55,
      "tempo": 0.67,
      "danceability": 0.88,
      "acousticness": 0.13,
      "loudness": 0.76
    }
  },
  {
    "id": 438,
    "title": "Big Suki",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.76,
      "valence": 0.62,
      "tempo": 0.65,
      "danceability": 0.9,
      "acousticness": 0.15,
      "loudness": 0.7
    }
  },
  {
    "id": 439,
    "title": "Beat The Odds",
    "artist": "&TEAM",
    "genre": "미디엄 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.66,
      "valence": 0.59,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.03,
      "loudness": 0.79
    }
  },
  {
    "id": 440,
    "title": "Feel The Pulse",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.71,
      "tempo": 0.72,
      "danceability": 0.81,
      "acousticness": 0.12,
      "loudness": 0.81
    }
  },
  {
    "id": 441,
    "title": "Go In Blind",
    "artist": "&TEAM",
    "genre": "미디엄 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.66,
      "valence": 0.59,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.03,
      "loudness": 0.79
    }
  },
  {
    "id": 442,
    "title": "Run Wild",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.69,
      "valence": 0.61,
      "tempo": 0.65,
      "danceability": 0.85,
      "acousticness": 0.11,
      "loudness": 0.65
    }
  },
  {
    "id": 443,
    "title": "Wolf Type",
    "artist": "&TEAM",
    "genre": "미디엄 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.66,
      "valence": 0.59,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.03,
      "loudness": 0.79
    }
  },
  {
    "id": 444,
    "title": "Back To Life",
    "artist": "&TEAM",
    "genre": "파워 댄스",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.83,
      "valence": 0.77,
      "tempo": 0.65,
      "danceability": 0.83,
      "acousticness": 0.11,
      "loudness": 0.66
    }
  },
  {
    "id": 445,
    "title": "Lunatic",
    "artist": "&TEAM",
    "genre": "미디엄 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.66,
      "valence": 0.59,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.03,
      "loudness": 0.79
    }
  },
  {
    "id": 446,
    "title": "Mismatch",
    "artist": "&TEAM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.71,
      "tempo": 0.72,
      "danceability": 0.81,
      "acousticness": 0.12,
      "loudness": 0.81
    }
  },
  {
    "id": 447,
    "title": "Force",
    "artist": "투모로우바이투게더",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.59,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.03,
      "loudness": 0.79
    }
  },
  {
    "id": 448,
    "title": "Blue Orangeade",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.79,
      "valence": 0.78,
      "tempo": 0.69,
      "danceability": 0.83,
      "acousticness": 0.16,
      "loudness": 0.76
    }
  },
  {
    "id": 449,
    "title": "어느날 머리에서 뿔이 자랐다",
    "artist": "투모로우바이투게더",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.69,
      "valence": 0.69,
      "tempo": 0.78,
      "danceability": 0.76,
      "acousticness": 0.15,
      "loudness": 0.8
    }
  },
  {
    "id": 450,
    "title": "Our Summer",
    "artist": "투모로우바이투게더",
    "genre": "파워 댄스",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.78,
      "tempo": 0.73,
      "danceability": 0.81,
      "acousticness": 0.13,
      "loudness": 0.64
    }
  },
  {
    "id": 451,
    "title": "Cat & Dog",
    "artist": "투모로우바이투게더",
    "genre": "파워 댄스",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.78,
      "tempo": 0.73,
      "danceability": 0.81,
      "acousticness": 0.13,
      "loudness": 0.64
    }
  },
  {
    "id": 452,
    "title": "New Rules",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.71,
      "valence": 0.78,
      "tempo": 0.74,
      "danceability": 0.81,
      "acousticness": 0.13,
      "loudness": 0.6
    }
  },
  {
    "id": 453,
    "title": "9와 4분의 3 승강장에서 너를 기다려",
    "artist": "투모로우바이투게더",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.72,
      "valence": 0.57,
      "tempo": 0.64,
      "danceability": 0.77,
      "acousticness": 0.15,
      "loudness": 0.67
    }
  },
  {
    "id": 454,
    "title": "그냥 괴물을 살려두면 안 되는 걸까?",
    "artist": "투모로우바이투게더",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.72,
      "valence": 0.57,
      "tempo": 0.64,
      "danceability": 0.77,
      "acousticness": 0.15,
      "loudness": 0.67
    }
  },
  {
    "id": 455,
    "title": "Angel Or Devil",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.85,
      "valence": 0.66,
      "tempo": 0.7,
      "danceability": 0.78,
      "acousticness": 0.12,
      "loudness": 0.7
    }
  },
  {
    "id": 456,
    "title": "Drama",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.71,
      "valence": 0.78,
      "tempo": 0.74,
      "danceability": 0.81,
      "acousticness": 0.13,
      "loudness": 0.6
    }
  },
  {
    "id": 457,
    "title": "세계가 불타버린 밤, 우린…",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.85,
      "valence": 0.83,
      "tempo": 0.57,
      "danceability": 0.79,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 458,
    "title": "동물원을 빠져나온 퓨마",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.7,
      "valence": 0.64,
      "tempo": 0.61,
      "danceability": 0.85,
      "acousticness": 0.12,
      "loudness": 0.62
    }
  },
  {
    "id": 459,
    "title": "Ghosting",
    "artist": "투모로우바이투게더",
    "genre": "힙합",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.83,
      "valence": 0.59,
      "tempo": 0.6,
      "danceability": 0.9,
      "acousticness": 0.04,
      "loudness": 0.63
    }
  },
  {
    "id": 460,
    "title": "Wishlist",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.7,
      "valence": 0.67,
      "tempo": 0.56,
      "danceability": 0.88,
      "acousticness": 0.1,
      "loudness": 0.68
    }
  },
  {
    "id": 461,
    "title": "LO$ER=LO♡ER",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.85,
      "valence": 0.83,
      "tempo": 0.57,
      "danceability": 0.79,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 462,
    "title": "Anti-romantic",
    "artist": "투모로우바이투게더",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.56,
      "tempo": 0.8,
      "danceability": 0.77,
      "acousticness": 0.16,
      "loudness": 0.69
    }
  },
  {
    "id": 463,
    "title": "0x1=lovesong",
    "artist": "투모로우바이투게더",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.56,
      "tempo": 0.8,
      "danceability": 0.77,
      "acousticness": 0.16,
      "loudness": 0.69
    }
  },
  {
    "id": 464,
    "title": "디어 스푸트니크",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.85,
      "valence": 0.83,
      "tempo": 0.57,
      "danceability": 0.79,
      "acousticness": 0.09,
      "loudness": 0.68
    }
  },
  {
    "id": 465,
    "title": "Good Boy Gone Bad",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.79,
      "valence": 0.69,
      "tempo": 0.66,
      "danceability": 0.77,
      "acousticness": 0.12,
      "loudness": 0.72
    }
  },
  {
    "id": 466,
    "title": "Sugar Rush Ride",
    "artist": "투모로우바이투게더",
    "genre": "댄스 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.73,
      "valence": 0.8,
      "tempo": 0.62,
      "danceability": 0.85,
      "acousticness": 0.09,
      "loudness": 0.79
    }
  },
  {
    "id": 467,
    "title": "내일에서 기다릴게",
    "artist": "투모로우바이투게더",
    "genre": "파워 댄스",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.57,
      "tempo": 0.75,
      "danceability": 0.83,
      "acousticness": 0.09,
      "loudness": 0.85
    }
  },
  {
    "id": 468,
    "title": "Deja Vu",
    "artist": "투모로우바이투게더",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.66,
      "valence": 0.56,
      "tempo": 0.8,
      "danceability": 0.77,
      "acousticness": 0.16,
      "loudness": 0.69
    }
  },
  {
    "id": 469,
    "title": "Beautiful Strangers",
    "artist": "투모로우바이투게더",
    "genre": "발라드",
    "emoji": "👑",
    "gen": 4,
    "features": {
      "energy": 0.4,
      "valence": 0.49,
      "tempo": 0.4,
      "danceability": 0.28,
      "acousticness": 0.88,
      "loudness": 0.25
    }
  },
  {
    "id": 470,
    "title": "리듬 타",
    "artist": "iKON",
    "genre": "미디엄 팝",
    "emoji": "🏹",
    "gen": 3,
    "features": {
      "energy": 0.72,
      "valence": 0.57,
      "tempo": 0.64,
      "danceability": 0.77,
      "acousticness": 0.15,
      "loudness": 0.67
    }
  },
  {
    "id": 471,
    "title": "취향저격",
    "artist": "iKON",
    "genre": "미디엄 팝",
    "emoji": "🏹",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.56,
      "tempo": 0.8,
      "danceability": 0.77,
      "acousticness": 0.16,
      "loudness": 0.69
    }
  },
  {
    "id": 472,
    "title": "죽겠다",
    "artist": "iKON",
    "genre": "미디엄 팝",
    "emoji": "🏹",
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.56,
      "tempo": 0.8,
      "danceability": 0.77,
      "acousticness": 0.16,
      "loudness": 0.69
    }
  },
  {
    "id": 473,
    "title": "뛰어들게",
    "artist": "iKON",
    "genre": "댄스 팝",
    "emoji": "🏹",
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.73,
      "tempo": 0.79,
      "danceability": 0.84,
      "acousticness": 0.15,
      "loudness": 0.82
    }
  },
  {
    "id": 474,
    "title": "Beautiful",
    "artist": "iKON",
    "genre": "발라드",
    "emoji": "🏹",
    "gen": 3,
    "features": {
      "energy": 0.33,
      "valence": 0.31,
      "tempo": 0.35,
      "danceability": 0.4,
      "acousticness": 0.74,
      "loudness": 0.37
    }
  },
  {
    "id": 475,
    "title": "Really Really",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "gen": 3,
    "features": {
      "energy": 0.81,
      "valence": 0.8,
      "tempo": 0.7,
      "danceability": 0.8,
      "acousticness": 0.16,
      "loudness": 0.65
    }
  },
  {
    "id": 476,
    "title": "끼부리지마",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.8,
      "tempo": 0.62,
      "danceability": 0.85,
      "acousticness": 0.09,
      "loudness": 0.79
    }
  },
  {
    "id": 477,
    "title": "Ah Yeah",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.79,
      "tempo": 0.63,
      "danceability": 0.76,
      "acousticness": 0.03,
      "loudness": 0.85
    }
  },
  {
    "id": 478,
    "title": "Island",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.79,
      "tempo": 0.63,
      "danceability": 0.76,
      "acousticness": 0.03,
      "loudness": 0.85
    }
  },
  {
    "id": 479,
    "title": "Everyday",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "gen": 3,
    "features": {
      "energy": 0.68,
      "valence": 0.7,
      "tempo": 0.59,
      "danceability": 0.89,
      "acousticness": 0.07,
      "loudness": 0.7
    }
  },
  {
    "id": 480,
    "title": "Millions",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "gen": 3,
    "features": {
      "energy": 0.81,
      "valence": 0.8,
      "tempo": 0.7,
      "danceability": 0.8,
      "acousticness": 0.16,
      "loudness": 0.65
    }
  },
  {
    "id": 481,
    "title": "공허해",
    "artist": "WINNER",
    "genre": "발라드",
    "emoji": "💖",
    "gen": 3,
    "features": {
      "energy": 0.33,
      "valence": 0.48,
      "tempo": 0.33,
      "danceability": 0.22,
      "acousticness": 0.57,
      "loudness": 0.45
    }
  },
  {
    "id": 482,
    "title": "Love Me Love Me",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.69,
      "tempo": 0.58,
      "danceability": 0.87,
      "acousticness": 0.12,
      "loudness": 0.79
    }
  },
  {
    "id": 483,
    "title": "센치해",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "gen": 3,
    "features": {
      "energy": 0.68,
      "valence": 0.78,
      "tempo": 0.67,
      "danceability": 0.8,
      "acousticness": 0.08,
      "loudness": 0.84
    }
  },
  {
    "id": 484,
    "title": "Air",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "gen": 3,
    "features": {
      "energy": 0.68,
      "valence": 0.7,
      "tempo": 0.59,
      "danceability": 0.89,
      "acousticness": 0.07,
      "loudness": 0.7
    }
  },
  {
    "id": 485,
    "title": "전화해",
    "artist": "아스트로",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 3,
    "features": {
      "energy": 0.81,
      "valence": 0.8,
      "tempo": 0.7,
      "danceability": 0.8,
      "acousticness": 0.16,
      "loudness": 0.65
    }
  },
  {
    "id": 486,
    "title": "숨가빠",
    "artist": "아스트로",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.77,
      "tempo": 0.77,
      "danceability": 0.83,
      "acousticness": 0.1,
      "loudness": 0.67
    }
  },
  {
    "id": 487,
    "title": "Oh Little Girl",
    "artist": "슬레이트(PRODUCE 101)",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.81,
      "valence": 0.83,
      "tempo": 0.69,
      "danceability": 0.79,
      "acousticness": 0.13,
      "loudness": 0.69
    }
  },
  {
    "id": 488,
    "title": "Never",
    "artist": "국민의 아들(PRODUCE 101)",
    "genre": "힙합",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.81,
      "valence": 0.79,
      "tempo": 0.77,
      "danceability": 0.89,
      "acousticness": 0.02,
      "loudness": 0.76
    }
  },
  {
    "id": 489,
    "title": "열어줘",
    "artist": "Knock(PRODUCE 101)",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.75,
      "valence": 0.67,
      "tempo": 0.76,
      "danceability": 0.84,
      "acousticness": 0.11,
      "loudness": 0.74
    }
  },
  {
    "id": 490,
    "title": "I Know You Know",
    "artist": "월하소년(PRODUCE 101)",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.74,
      "valence": 0.72,
      "tempo": 0.75,
      "danceability": 0.86,
      "acousticness": 0.05,
      "loudness": 0.64
    }
  },
  {
    "id": 491,
    "title": "Show Time",
    "artist": "이츠(PRODUCE 101)",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.67,
      "valence": 0.78,
      "tempo": 0.67,
      "danceability": 0.84,
      "acousticness": 0.06,
      "loudness": 0.63
    }
  },
  {
    "id": 492,
    "title": "이뻐이뻐",
    "artist": "크레파스(PRODUCE X 101)",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.79,
      "valence": 0.61,
      "tempo": 0.68,
      "danceability": 0.89,
      "acousticness": 0.05,
      "loudness": 0.76
    }
  },
  {
    "id": 493,
    "title": "U Got It",
    "artist": "갓츄(PRODUCE X 101)",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.81,
      "valence": 0.83,
      "tempo": 0.69,
      "danceability": 0.79,
      "acousticness": 0.13,
      "loudness": 0.69
    }
  },
  {
    "id": 494,
    "title": "Monday To Sunday",
    "artist": "데.비(PRODUCE X 101)",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.79,
      "valence": 0.82,
      "tempo": 0.6,
      "danceability": 0.77,
      "acousticness": 0.04,
      "loudness": 0.75
    }
  },
  {
    "id": 495,
    "title": "Super Special Girl",
    "artist": "맴맴(PRODUCE X 101)",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.65,
      "valence": 0.68,
      "tempo": 0.63,
      "danceability": 0.81,
      "acousticness": 0.16,
      "loudness": 0.7
    }
  },
  {
    "id": 496,
    "title": "움직여",
    "artist": "SIXC(PRODUCE X 101)",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.75,
      "valence": 0.73,
      "tempo": 0.61,
      "danceability": 0.81,
      "acousticness": 0.08,
      "loudness": 0.75
    }
  },
  {
    "id": 497,
    "title": "Hands On Me",
    "artist": "PRODUCE 101",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.75,
      "valence": 0.74,
      "tempo": 0.79,
      "danceability": 0.82,
      "acousticness": 0.06,
      "loudness": 0.69
    }
  },
  {
    "id": 498,
    "title": "Super Hot",
    "artist": "PRODUCE 101",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.8,
      "valence": 0.7,
      "tempo": 0.65,
      "danceability": 0.81,
      "acousticness": 0.06,
      "loudness": 0.66
    }
  },
  {
    "id": 499,
    "title": "Always",
    "artist": "PRODUCE 101",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.74,
      "valence": 0.72,
      "tempo": 0.75,
      "danceability": 0.86,
      "acousticness": 0.05,
      "loudness": 0.64
    }
  },
  {
    "id": 500,
    "title": "에너제틱",
    "artist": "워너원",
    "genre": "미디엄 팝",
    "emoji": "☁️",
    "gen": 3,
    "features": {
      "energy": 0.68,
      "valence": 0.66,
      "tempo": 0.6,
      "danceability": 0.8,
      "acousticness": 0.15,
      "loudness": 0.6
    }
  },
  {
    "id": 501,
    "title": "Beautiful",
    "artist": "워너원",
    "genre": "발라드",
    "emoji": "☁️",
    "gen": 3,
    "features": {
      "energy": 0.38,
      "valence": 0.52,
      "tempo": 0.3,
      "danceability": 0.24,
      "acousticness": 0.6,
      "loudness": 0.35
    }
  },
  {
    "id": 502,
    "title": "약속해요",
    "artist": "워너원",
    "genre": "발라드",
    "emoji": "☁️",
    "gen": 3,
    "features": {
      "energy": 0.24,
      "valence": 0.5,
      "tempo": 0.32,
      "danceability": 0.38,
      "acousticness": 0.65,
      "loudness": 0.4
    }
  },
  {
    "id": 503,
    "title": "Wanna Be",
    "artist": "워너원",
    "genre": "댄스 팝",
    "emoji": "☁️",
    "gen": 3,
    "features": {
      "energy": 0.79,
      "valence": 0.72,
      "tempo": 0.74,
      "danceability": 0.81,
      "acousticness": 0.14,
      "loudness": 0.64
    }
  },
  {
    "id": 504,
    "title": "부메랑",
    "artist": "워너원",
    "genre": "댄스 팝",
    "emoji": "☁️",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.7,
      "tempo": 0.65,
      "danceability": 0.81,
      "acousticness": 0.06,
      "loudness": 0.66
    }
  },
  {
    "id": 505,
    "title": "활활",
    "artist": "워너원",
    "genre": "댄스 팝",
    "emoji": "☁️",
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.7,
      "tempo": 0.65,
      "danceability": 0.81,
      "acousticness": 0.06,
      "loudness": 0.66
    }
  },
  {
    "id": 506,
    "title": "봄바람",
    "artist": "워너원",
    "genre": "발라드",
    "emoji": "☁️",
    "gen": 3,
    "features": {
      "energy": 0.34,
      "valence": 0.43,
      "tempo": 0.37,
      "danceability": 0.23,
      "acousticness": 0.68,
      "loudness": 0.22
    }
  },
  {
    "id": 507,
    "title": "보여",
    "artist": "워너원",
    "genre": "댄스 팝",
    "emoji": "☁️",
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.75,
      "tempo": 0.67,
      "danceability": 0.77,
      "acousticness": 0.07,
      "loudness": 0.62
    }
  },
  {
    "id": 508,
    "title": "켜줘",
    "artist": "워너원",
    "genre": "댄스 팝",
    "emoji": "☁️",
    "gen": 3,
    "features": {
      "energy": 0.79,
      "valence": 0.82,
      "tempo": 0.6,
      "danceability": 0.77,
      "acousticness": 0.04,
      "loudness": 0.75
    }
  },
  {
    "id": 509,
    "title": "꽃이야",
    "artist": "JBJ",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.67,
      "valence": 0.59,
      "tempo": 0.61,
      "danceability": 0.86,
      "acousticness": 0.05,
      "loudness": 0.67
    }
  },
  {
    "id": 510,
    "title": "Duh!",
    "artist": "P1Harmony",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.65,
      "valence": 0.59,
      "tempo": 0.7,
      "danceability": 0.85,
      "acousticness": 0.11,
      "loudness": 0.67
    }
  },
  {
    "id": 511,
    "title": "Sad Song",
    "artist": "P1Harmony",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.8,
      "tempo": 0.68,
      "danceability": 0.79,
      "acousticness": 0.06,
      "loudness": 0.8
    }
  },
  {
    "id": 512,
    "title": "Jump",
    "artist": "P1Harmony",
    "genre": "밝은 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.68,
      "valence": 0.84,
      "tempo": 0.78,
      "danceability": 0.76,
      "acousticness": 0.16,
      "loudness": 0.72
    }
  },
  {
    "id": 513,
    "title": "Unique",
    "artist": "P1Harmony",
    "genre": "강렬 댄스",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.96,
      "valence": 0.77,
      "tempo": 0.83,
      "danceability": 0.82,
      "acousticness": 0.01,
      "loudness": 0.93
    }
  },
  {
    "id": 514,
    "title": "때깔",
    "artist": "P1Harmony",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 4,
    "features": {
      "energy": 0.87,
      "valence": 0.83,
      "tempo": 0.89,
      "danceability": 0.8,
      "acousticness": 0.05,
      "loudness": 0.88
    }
  },
  {
    "id": 515,
    "title": "Beautiful Beautiful",
    "artist": "온앤오프",
    "genre": "발라드",
    "emoji": "🎵",
    "gen": 3,
    "features": {
      "energy": 0.29,
      "valence": 0.44,
      "tempo": 0.31,
      "danceability": 0.3,
      "acousticness": 0.57,
      "loudness": 0.29
    }
  },
  {
    "id": 516,
    "title": "Boom Boom Bass",
    "artist": "RIIZE",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "gen": 5,
    "features": {
      "energy": 0.78,
      "valence": 0.6,
      "tempo": 0.74,
      "danceability": 0.79,
      "acousticness": 0.13,
      "loudness": 0.72
    }
  },
  {
    "id": 517,
    "title": "Love 119",
    "artist": "RIIZE",
    "genre": "미디엄 팝",
    "emoji": "🎸",
    "gen": 5,
    "features": {
      "energy": 0.7,
      "valence": 0.55,
      "tempo": 0.62,
      "danceability": 0.8,
      "acousticness": 0.17,
      "loudness": 0.68
    }
  },
  {
    "id": 518,
    "title": "Talk Saxy",
    "artist": "RIIZE",
    "genre": "파워 댄스",
    "emoji": "🎸",
    "gen": 5,
    "features": {
      "energy": 0.85,
      "valence": 0.61,
      "tempo": 0.56,
      "danceability": 0.81,
      "acousticness": 0.08,
      "loudness": 0.82
    }
  },
  {
    "id": 519,
    "title": "Impossible",
    "artist": "RIIZE",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "gen": 5,
    "features": {
      "energy": 0.81,
      "valence": 0.8,
      "tempo": 0.69,
      "danceability": 0.76,
      "acousticness": 0.09,
      "loudness": 0.78
    }
  },
  {
    "id": 520,
    "title": "Siren",
    "artist": "RIIZE",
    "genre": "파워 댄스",
    "emoji": "🎸",
    "gen": 5,
    "features": {
      "energy": 0.88,
      "valence": 0.4,
      "tempo": 0.79,
      "danceability": 0.84,
      "acousticness": 0.05,
      "loudness": 0.85
    }
  },
  {
    "id": 521,
    "title": "Get A Guitar",
    "artist": "RIIZE",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "gen": 5,
    "features": {
      "energy": 0.69,
      "valence": 0.74,
      "tempo": 0.57,
      "danceability": 0.82,
      "acousticness": 0.13,
      "loudness": 0.83
    }
  },
  {
    "id": 522,
    "title": "One Kiss",
    "artist": "RIIZE",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "gen": 5,
    "features": {
      "energy": 0.78,
      "valence": 0.6,
      "tempo": 0.74,
      "danceability": 0.79,
      "acousticness": 0.13,
      "loudness": 0.72
    }
  },
  {
    "id": 523,
    "title": "In A Loop",
    "artist": "RIIZE",
    "genre": "파워 댄스",
    "emoji": "🎸",
    "gen": 5,
    "features": {
      "energy": 0.83,
      "valence": 0.75,
      "tempo": 0.8,
      "danceability": 0.82,
      "acousticness": 0.07,
      "loudness": 0.73
    }
  },
  {
    "id": 524,
    "title": "Honestly",
    "artist": "RIIZE",
    "genre": "파워 댄스",
    "emoji": "🎸",
    "gen": 5,
    "features": {
      "energy": 0.83,
      "valence": 0.75,
      "tempo": 0.8,
      "danceability": 0.82,
      "acousticness": 0.07,
      "loudness": 0.73
    }
  },
  {
    "id": 525,
    "title": "충돌",
    "artist": "Stray Kids",
    "genre": "파워 댄스",
    "emoji": "⚡",
    "gen": 4,
    "features": {
      "energy": 0.85,
      "valence": 0.61,
      "tempo": 0.56,
      "danceability": 0.81,
      "acousticness": 0.08,
      "loudness": 0.82
    }
  },
  {
    "id": 526,
    "title": "Maniac",
    "artist": "Stray Kids",
    "genre": "파워 댄스",
    "emoji": "⚡",
    "gen": 4,
    "features": {
      "energy": 0.83,
      "valence": 0.75,
      "tempo": 0.8,
      "danceability": 0.82,
      "acousticness": 0.07,
      "loudness": 0.73
    }
  },
  {
    "id": 527,
    "title": "Case 143",
    "artist": "Stray Kids",
    "genre": "미디엄 팝",
    "emoji": "⚡",
    "gen": 4,
    "features": {
      "energy": 0.73,
      "valence": 0.72,
      "tempo": 0.66,
      "danceability": 0.77,
      "acousticness": 0.07,
      "loudness": 0.71
    }
  },
  {
    "id": 528,
    "title": "락",
    "artist": "Stray Kids",
    "genre": "댄스 팝",
    "emoji": "⚡",
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.8,
      "tempo": 0.69,
      "danceability": 0.76,
      "acousticness": 0.09,
      "loudness": 0.78
    }
  },
  {
    "id": 529,
    "title": "신메뉴",
    "artist": "Stray Kids",
    "genre": "강렬 댄스",
    "emoji": "⚡",
    "gen": 4,
    "features": {
      "energy": 0.96,
      "valence": 0.71,
      "tempo": 0.9,
      "danceability": 0.86,
      "acousticness": 0.02,
      "loudness": 0.89
    }
  },
  {
    "id": 530,
    "title": "Chk Chk Boom",
    "artist": "Stray Kids",
    "genre": "강렬 댄스",
    "emoji": "⚡",
    "gen": 4,
    "features": {
      "energy": 0.89,
      "valence": 0.61,
      "tempo": 0.77,
      "danceability": 0.81,
      "acousticness": 0.02,
      "loudness": 0.88
    }
  },
  {
    "id": 531,
    "title": "Back Door",
    "artist": "Stray Kids",
    "genre": "강렬 댄스",
    "emoji": "⚡",
    "gen": 4,
    "features": {
      "energy": 0.89,
      "valence": 0.74,
      "tempo": 0.9,
      "danceability": 0.9,
      "acousticness": 0.04,
      "loudness": 0.94
    }
  },
  {
    "id": 532,
    "title": "Miroh",
    "artist": "Stray Kids",
    "genre": "강렬 댄스",
    "emoji": "⚡",
    "gen": 4,
    "features": {
      "energy": 0.94,
      "valence": 0.68,
      "tempo": 0.83,
      "danceability": 0.91,
      "acousticness": 0.03,
      "loudness": 0.86
    }
  },
  {
    "id": 533,
    "title": "In Bloom",
    "artist": "제로베이스원",
    "genre": "댄스 팝",
    "emoji": "🌹",
    "gen": 5,
    "features": {
      "energy": 0.77,
      "valence": 0.75,
      "tempo": 0.56,
      "danceability": 0.8,
      "acousticness": 0.09,
      "loudness": 0.7
    }
  },
  {
    "id": 534,
    "title": "Doctor! Doctor!",
    "artist": "제로베이스원",
    "genre": "댄스 팝",
    "emoji": "🌹",
    "gen": 5,
    "features": {
      "energy": 0.84,
      "valence": 0.79,
      "tempo": 0.68,
      "danceability": 0.77,
      "acousticness": 0.03,
      "loudness": 0.7
    }
  },
  {
    "id": 535,
    "title": "Good So Bad",
    "artist": "제로베이스원",
    "genre": "댄스 팝",
    "emoji": "🌹",
    "gen": 5,
    "features": {
      "energy": 0.69,
      "valence": 0.82,
      "tempo": 0.77,
      "danceability": 0.85,
      "acousticness": 0.17,
      "loudness": 0.66
    }
  },
  {
    "id": 536,
    "title": "Insomnia",
    "artist": "제로베이스원",
    "genre": "댄스 팝",
    "emoji": "🌹",
    "gen": 5,
    "features": {
      "energy": 0.82,
      "valence": 0.84,
      "tempo": 0.79,
      "danceability": 0.76,
      "acousticness": 0.14,
      "loudness": 0.75
    }
  },
  {
    "id": 537,
    "title": "Redred",
    "artist": "CORTIS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.75,
      "valence": 0.6,
      "tempo": 0.6,
      "danceability": 0.82,
      "acousticness": 0.07,
      "loudness": 0.83
    }
  },
  {
    "id": 538,
    "title": "Youngcreatorcrew",
    "artist": "CORTIS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.74,
      "valence": 0.69,
      "tempo": 0.66,
      "danceability": 0.81,
      "acousticness": 0.16,
      "loudness": 0.73
    }
  },
  {
    "id": 539,
    "title": "Acai",
    "artist": "CORTIS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.75,
      "valence": 0.6,
      "tempo": 0.6,
      "danceability": 0.82,
      "acousticness": 0.07,
      "loudness": 0.83
    }
  },
  {
    "id": 540,
    "title": "Fashion",
    "artist": "CORTIS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.65,
      "valence": 0.67,
      "tempo": 0.77,
      "danceability": 0.86,
      "acousticness": 0.08,
      "loudness": 0.64
    }
  },
  {
    "id": 541,
    "title": "Tnt",
    "artist": "CORTIS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.82,
      "valence": 0.84,
      "tempo": 0.79,
      "danceability": 0.76,
      "acousticness": 0.14,
      "loudness": 0.75
    }
  },
  {
    "id": 542,
    "title": "Go!",
    "artist": "CORTIS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.78,
      "valence": 0.63,
      "tempo": 0.63,
      "danceability": 0.83,
      "acousticness": 0.16,
      "loudness": 0.78
    }
  },
  {
    "id": 543,
    "title": "What You Want",
    "artist": "CORTIS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.69,
      "valence": 0.6,
      "tempo": 0.69,
      "danceability": 0.89,
      "acousticness": 0.04,
      "loudness": 0.7
    }
  },
  {
    "id": 544,
    "title": "Joyride",
    "artist": "CORTIS",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.82,
      "valence": 0.69,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.15,
      "loudness": 0.71
    }
  },
  {
    "id": 545,
    "title": "마음 따라 뛰는 건 멋지지 않아?",
    "artist": "투어스",
    "genre": "댄스 팝",
    "emoji": "👕",
    "gen": 5,
    "features": {
      "energy": 0.8,
      "valence": 0.76,
      "tempo": 0.74,
      "danceability": 0.88,
      "acousticness": 0.03,
      "loudness": 0.63
    }
  },
  {
    "id": 546,
    "title": "Overdrive",
    "artist": "투어스",
    "genre": "미디엄 팝",
    "emoji": "👕",
    "gen": 5,
    "features": {
      "energy": 0.75,
      "valence": 0.6,
      "tempo": 0.64,
      "danceability": 0.78,
      "acousticness": 0.15,
      "loudness": 0.64
    }
  },
  {
    "id": 547,
    "title": "Bff",
    "artist": "투어스",
    "genre": "파워 댄스",
    "emoji": "👕",
    "gen": 5,
    "features": {
      "energy": 0.84,
      "valence": 0.61,
      "tempo": 0.59,
      "danceability": 0.86,
      "acousticness": 0.09,
      "loudness": 0.67
    }
  },
  {
    "id": 548,
    "title": "Face",
    "artist": "뉴이스트",
    "genre": "미디엄 팝",
    "emoji": "🎵",
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.75,
      "tempo": 0.75,
      "danceability": 0.75,
      "acousticness": 0.06,
      "loudness": 0.85
    }
  },
  {
    "id": 549,
    "title": "Beat-boxer",
    "artist": "NEXZ",
    "genre": "파워 댄스",
    "emoji": "🎵",
    "gen": 5,
    "features": {
      "energy": 0.85,
      "valence": 0.8,
      "tempo": 0.69,
      "danceability": 0.83,
      "acousticness": 0.02,
      "loudness": 0.84
    }
  },
  {
    "id": 550,
    "title": "처음 불러보는 노래",
    "artist": "KickFlip",
    "genre": "펑키 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.65,
      "valence": 0.82,
      "tempo": 0.75,
      "danceability": 0.9,
      "acousticness": 0.07,
      "loudness": 0.63
    }
  },
  {
    "id": 551,
    "title": "Moonwalkin'",
    "artist": "LNGSHOT",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 1,
    "features": {
      "energy": 0.77,
      "valence": 0.61,
      "tempo": 0.69,
      "danceability": 0.78,
      "acousticness": 0.05,
      "loudness": 0.69
    }
  },
  {
    "id": 552,
    "title": "Vanilla Days",
    "artist": "LNGSHOT",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 1,
    "features": {
      "energy": 0.75,
      "valence": 0.81,
      "tempo": 0.63,
      "danceability": 0.75,
      "acousticness": 0.16,
      "loudness": 0.83
    }
  },
  {
    "id": 553,
    "title": "Facetime",
    "artist": "LNGSHOT",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 1,
    "features": {
      "energy": 0.8,
      "valence": 0.56,
      "tempo": 0.73,
      "danceability": 0.75,
      "acousticness": 0.16,
      "loudness": 0.82
    }
  },
  {
    "id": 554,
    "title": "Never Let Go",
    "artist": "LNGSHOT",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 1,
    "features": {
      "energy": 0.84,
      "valence": 0.79,
      "tempo": 0.67,
      "danceability": 0.8,
      "acousticness": 0.08,
      "loudness": 0.77
    }
  },
  {
    "id": 555,
    "title": "Moya",
    "artist": "LNGSHOT",
    "genre": "파워 댄스",
    "emoji": "🎵",
    "gen": 1,
    "features": {
      "energy": 0.85,
      "valence": 0.8,
      "tempo": 0.69,
      "danceability": 0.83,
      "acousticness": 0.02,
      "loudness": 0.84
    }
  },
  {
    "id": 556,
    "title": "Are You Ready",
    "artist": "LNGSHOT",
    "genre": "펑키 팝",
    "emoji": "🎵",
    "gen": 1,
    "features": {
      "energy": 0.67,
      "valence": 0.71,
      "tempo": 0.76,
      "danceability": 0.9,
      "acousticness": 0.06,
      "loudness": 0.65
    }
  },
  {
    "id": 557,
    "title": "Yeah! Yeah!",
    "artist": "LNGSHOT",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 1,
    "features": {
      "energy": 0.68,
      "valence": 0.69,
      "tempo": 0.77,
      "danceability": 0.88,
      "acousticness": 0.13,
      "loudness": 0.67
    }
  },
  {
    "id": 558,
    "title": "Jopping",
    "artist": "SuperM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.84,
      "valence": 0.61,
      "tempo": 0.63,
      "danceability": 0.8,
      "acousticness": 0.13,
      "loudness": 0.67
    }
  },
  {
    "id": 559,
    "title": "호랑이",
    "artist": "SuperM",
    "genre": "댄스 팝",
    "emoji": "🎵",
    "gen": 0,
    "features": {
      "energy": 0.77,
      "valence": 0.61,
      "tempo": 0.69,
      "danceability": 0.78,
      "acousticness": 0.05,
      "loudness": 0.69
    }
  },
  {
    "id": 560,
    "title": "Candy",
    "artist": "HOT",
    "genre": "파워 댄스",
    "emoji": "🌈",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.85,
      "valence": 0.76,
      "tempo": 0.61,
      "danceability": 0.87,
      "acousticness": 0.22,
      "loudness": 0.68
    }
  },
  {
    "id": 561,
    "title": "빛 (Hope)",
    "artist": "HOT",
    "genre": "댄스 팝",
    "emoji": "🌈",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.67,
      "valence": 0.54,
      "tempo": 0.57,
      "danceability": 0.88,
      "acousticness": 0.27,
      "loudness": 0.56
    }
  },
  {
    "id": 562,
    "title": "전사의 후예",
    "artist": "HOT",
    "genre": "파워 댄스",
    "emoji": "🌈",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.9,
      "valence": 0.54,
      "tempo": 0.78,
      "danceability": 0.94,
      "acousticness": 0.19,
      "loudness": 0.79
    }
  },
  {
    "id": 563,
    "title": "행복",
    "artist": "HOT",
    "genre": "미디엄 팝",
    "emoji": "🌈",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.66,
      "valence": 0.73,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.27,
      "loudness": 0.52
    }
  },
  {
    "id": 564,
    "title": "아이야!",
    "artist": "HOT",
    "genre": "댄스 팝",
    "emoji": "🌈",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.7,
      "valence": 0.52,
      "tempo": 0.57,
      "danceability": 0.82,
      "acousticness": 0.17,
      "loudness": 0.63
    }
  },
  {
    "id": 565,
    "title": "We Are the Future",
    "artist": "HOT",
    "genre": "미디엄 팝",
    "emoji": "🌈",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.73,
      "valence": 0.51,
      "tempo": 0.58,
      "danceability": 0.77,
      "acousticness": 0.29,
      "loudness": 0.68
    }
  },
  {
    "id": 566,
    "title": "투지",
    "artist": "HOT",
    "genre": "댄스 팝",
    "emoji": "🌈",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.73,
      "valence": 0.83,
      "tempo": 0.63,
      "danceability": 0.83,
      "acousticness": 0.25,
      "loudness": 0.57
    }
  },
  {
    "id": 567,
    "title": "아웃사이드 캐슬",
    "artist": "HOT",
    "genre": "댄스 팝",
    "emoji": "🌈",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.74,
      "valence": 0.61,
      "tempo": 0.56,
      "danceability": 0.85,
      "acousticness": 0.2,
      "loudness": 0.66
    }
  },
  {
    "id": 568,
    "title": "열맞춰!",
    "artist": "HOT",
    "genre": "밝은 팝",
    "emoji": "🌈",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.68,
      "valence": 0.82,
      "tempo": 0.58,
      "danceability": 0.76,
      "acousticness": 0.22,
      "loudness": 0.57
    }
  },
  {
    "id": 569,
    "title": "자유롭게 날 수 있도록",
    "artist": "HOT",
    "genre": "댄스 팝",
    "emoji": "🌈",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.67,
      "valence": 0.69,
      "tempo": 0.75,
      "danceability": 0.82,
      "acousticness": 0.2,
      "loudness": 0.69
    }
  },
  {
    "id": 570,
    "title": "어머님께",
    "artist": "god",
    "genre": "발라드",
    "emoji": "💙",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.29,
      "valence": 0.34,
      "tempo": 0.44,
      "danceability": 0.32,
      "acousticness": 0.94,
      "loudness": 0.24
    }
  },
  {
    "id": 571,
    "title": "애수",
    "artist": "god",
    "genre": "댄스 팝",
    "emoji": "💙",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.84,
      "valence": 0.76,
      "tempo": 0.59,
      "danceability": 0.77,
      "acousticness": 0.21,
      "loudness": 0.66
    }
  },
  {
    "id": 572,
    "title": "길",
    "artist": "god",
    "genre": "발라드",
    "emoji": "💙",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.37,
      "valence": 0.34,
      "tempo": 0.37,
      "danceability": 0.33,
      "acousticness": 0.86,
      "loudness": 0.15
    }
  },
  {
    "id": 573,
    "title": "거짓말",
    "artist": "god",
    "genre": "댄스 팝",
    "emoji": "💙",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.78,
      "valence": 0.58,
      "tempo": 0.7,
      "danceability": 0.84,
      "acousticness": 0.18,
      "loudness": 0.51
    }
  },
  {
    "id": 574,
    "title": "촛불하나",
    "artist": "god",
    "genre": "파워 댄스",
    "emoji": "💙",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.82,
      "valence": 0.76,
      "tempo": 0.69,
      "danceability": 0.84,
      "acousticness": 0.32,
      "loudness": 0.66
    }
  },
  {
    "id": 575,
    "title": "하늘색 풍선",
    "artist": "god",
    "genre": "댄스 팝",
    "emoji": "💙",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.66,
      "valence": 0.62,
      "tempo": 0.66,
      "danceability": 0.87,
      "acousticness": 0.19,
      "loudness": 0.55
    }
  },
  {
    "id": 576,
    "title": "보통날",
    "artist": "god",
    "genre": "댄스 팝",
    "emoji": "💙",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.68,
      "valence": 0.6,
      "tempo": 0.61,
      "danceability": 0.9,
      "acousticness": 0.22,
      "loudness": 0.49
    }
  },
  {
    "id": 577,
    "title": "사랑해 그리고 기억해",
    "artist": "god",
    "genre": "댄스 팝",
    "emoji": "💙",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.7,
      "valence": 0.58,
      "tempo": 0.55,
      "danceability": 0.83,
      "acousticness": 0.25,
      "loudness": 0.47
    }
  },
  {
    "id": 578,
    "title": "니가 있어야 할 곳",
    "artist": "god",
    "genre": "댄스 팝",
    "emoji": "💙",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.72,
      "valence": 0.52,
      "tempo": 0.69,
      "danceability": 0.88,
      "acousticness": 0.25,
      "loudness": 0.69
    }
  },
  {
    "id": 579,
    "title": "편지",
    "artist": "god",
    "genre": "댄스 팝",
    "emoji": "💙",
    "tier": 1,
    "gen": 1,
    "features": {
      "energy": 0.84,
      "valence": 0.74,
      "tempo": 0.64,
      "danceability": 0.8,
      "acousticness": 0.2,
      "loudness": 0.54
    }
  },
  {
    "id": 580,
    "title": "해결사",
    "artist": "신화",
    "genre": "댄스 팝",
    "emoji": "🧡",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.77,
      "valence": 0.72,
      "tempo": 0.75,
      "danceability": 0.76,
      "acousticness": 0.19,
      "loudness": 0.49
    }
  },
  {
    "id": 581,
    "title": "T.O.P. (Twinkling Of Paradise)",
    "artist": "신화",
    "genre": "파워 댄스",
    "emoji": "🧡",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.84,
      "valence": 0.56,
      "tempo": 0.71,
      "danceability": 0.82,
      "acousticness": 0.17,
      "loudness": 0.6
    }
  },
  {
    "id": 582,
    "title": "Only One",
    "artist": "신화",
    "genre": "댄스 팝",
    "emoji": "🧡",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.82,
      "valence": 0.84,
      "tempo": 0.58,
      "danceability": 0.75,
      "acousticness": 0.25,
      "loudness": 0.6
    }
  },
  {
    "id": 583,
    "title": "Brand New",
    "artist": "신화",
    "genre": "미디엄 팝",
    "emoji": "🧡",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.68,
      "valence": 0.55,
      "tempo": 0.66,
      "danceability": 0.78,
      "acousticness": 0.29,
      "loudness": 0.68
    }
  },
  {
    "id": 584,
    "title": "Wild Eyes",
    "artist": "신화",
    "genre": "댄스 팝",
    "emoji": "🧡",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.68,
      "valence": 0.73,
      "tempo": 0.75,
      "danceability": 0.87,
      "acousticness": 0.31,
      "loudness": 0.54
    }
  },
  {
    "id": 585,
    "title": "Perfect Man",
    "artist": "신화",
    "genre": "댄스 팝",
    "emoji": "🧡",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.76,
      "valence": 0.7,
      "tempo": 0.67,
      "danceability": 0.75,
      "acousticness": 0.22,
      "loudness": 0.54
    }
  },
  {
    "id": 586,
    "title": "학원별곡",
    "artist": "젝스키스",
    "genre": "댄스 팝",
    "emoji": "💛",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.8,
      "valence": 0.72,
      "tempo": 0.61,
      "danceability": 0.84,
      "acousticness": 0.31,
      "loudness": 0.65
    }
  },
  {
    "id": 587,
    "title": "폼생폼사",
    "artist": "젝스키스",
    "genre": "댄스 팝",
    "emoji": "💛",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.75,
      "valence": 0.57,
      "tempo": 0.66,
      "danceability": 0.88,
      "acousticness": 0.23,
      "loudness": 0.59
    }
  },
  {
    "id": 588,
    "title": "커플",
    "artist": "젝스키스",
    "genre": "미디엄 팝",
    "emoji": "💛",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.67,
      "valence": 0.54,
      "tempo": 0.6,
      "danceability": 0.79,
      "acousticness": 0.29,
      "loudness": 0.7
    }
  },
  {
    "id": 589,
    "title": "기사도",
    "artist": "젝스키스",
    "genre": "미디엄 팝",
    "emoji": "💛",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.74,
      "valence": 0.52,
      "tempo": 0.7,
      "danceability": 0.78,
      "acousticness": 0.22,
      "loudness": 0.63
    }
  },
  {
    "id": 590,
    "title": "로드 파이터",
    "artist": "젝스키스",
    "genre": "댄스 팝",
    "emoji": "💛",
    "tier": 2,
    "gen": 1,
    "features": {
      "energy": 0.72,
      "valence": 0.68,
      "tempo": 0.76,
      "danceability": 0.9,
      "acousticness": 0.28,
      "loudness": 0.55
    }
  },
  {
    "id": 591,
    "title": "누난 너무 예뻐 (Replay)",
    "artist": "SHINee",
    "genre": "파워 댄스",
    "emoji": "💎",
    "tier": 1,
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.82,
      "tempo": 0.62,
      "danceability": 0.84,
      "acousticness": 0.12,
      "loudness": 0.75
    }
  },
  {
    "id": 592,
    "title": "산소 같은 너",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "tier": 1,
    "gen": 2,
    "features": {
      "energy": 0.69,
      "valence": 0.82,
      "tempo": 0.65,
      "danceability": 0.84,
      "acousticness": 0.0,
      "loudness": 0.91
    }
  },
  {
    "id": 593,
    "title": "아.미.고",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "tier": 1,
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.78,
      "tempo": 0.6,
      "danceability": 0.87,
      "acousticness": 0.03,
      "loudness": 0.84
    }
  },
  {
    "id": 594,
    "title": "Ring Ding Dong",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "tier": 1,
    "gen": 2,
    "features": {
      "energy": 0.67,
      "valence": 0.63,
      "tempo": 0.56,
      "danceability": 0.9,
      "acousticness": 0.07,
      "loudness": 0.75
    }
  },
  {
    "id": 595,
    "title": "Lucifer",
    "artist": "SHINee",
    "genre": "파워 댄스",
    "emoji": "💎",
    "tier": 1,
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.55,
      "tempo": 0.65,
      "danceability": 0.83,
      "acousticness": 0.09,
      "loudness": 0.88
    }
  },
  {
    "id": 596,
    "title": "Sherlock (셜록)",
    "artist": "SHINee",
    "genre": "힙합",
    "emoji": "💎",
    "tier": 1,
    "gen": 2,
    "features": {
      "energy": 0.82,
      "valence": 0.75,
      "tempo": 0.68,
      "danceability": 0.89,
      "acousticness": 0.02,
      "loudness": 0.93
    }
  },
  {
    "id": 597,
    "title": "Dream Girl",
    "artist": "SHINee",
    "genre": "힙합",
    "emoji": "💎",
    "tier": 1,
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.73,
      "tempo": 0.56,
      "danceability": 0.86,
      "acousticness": 0.0,
      "loudness": 0.82
    }
  },
  {
    "id": 598,
    "title": "Everybody",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "tier": 1,
    "gen": 2,
    "features": {
      "energy": 0.7,
      "valence": 0.85,
      "tempo": 0.64,
      "danceability": 0.83,
      "acousticness": 0.0,
      "loudness": 0.86
    }
  },
  {
    "id": 599,
    "title": "View",
    "artist": "SHINee",
    "genre": "힙합",
    "emoji": "💎",
    "tier": 1,
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.67,
      "tempo": 0.64,
      "danceability": 0.89,
      "acousticness": 0.04,
      "loudness": 0.76
    }
  },
  {
    "id": 600,
    "title": "1 of 1",
    "artist": "SHINee",
    "genre": "댄스 팝",
    "emoji": "💎",
    "tier": 1,
    "gen": 2,
    "features": {
      "energy": 0.67,
      "valence": 0.53,
      "tempo": 0.64,
      "danceability": 0.87,
      "acousticness": 0.0,
      "loudness": 0.81
    }
  },
  {
    "id": 601,
    "title": "Shock",
    "artist": "BEAST",
    "genre": "파워 댄스",
    "emoji": "⚡",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.85,
      "valence": 0.78,
      "tempo": 0.61,
      "danceability": 0.82,
      "acousticness": 0.02,
      "loudness": 0.71
    }
  },
  {
    "id": 602,
    "title": "Fiction",
    "artist": "BEAST",
    "genre": "댄스 팝",
    "emoji": "⚡",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.61,
      "tempo": 0.77,
      "danceability": 0.89,
      "acousticness": 0.04,
      "loudness": 0.86
    }
  },
  {
    "id": 603,
    "title": "아름다운 밤이야",
    "artist": "BEAST",
    "genre": "미디엄 팝",
    "emoji": "⚡",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.67,
      "valence": 0.66,
      "tempo": 0.68,
      "danceability": 0.76,
      "acousticness": 0.08,
      "loudness": 0.95
    }
  },
  {
    "id": 604,
    "title": "비가 오는 날엔",
    "artist": "BEAST",
    "genre": "발라드",
    "emoji": "⚡",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.38,
      "valence": 0.34,
      "tempo": 0.27,
      "danceability": 0.39,
      "acousticness": 0.79,
      "loudness": 0.45
    }
  },
  {
    "id": 605,
    "title": "숨",
    "artist": "BEAST",
    "genre": "댄스 팝",
    "emoji": "⚡",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.78,
      "tempo": 0.74,
      "danceability": 0.78,
      "acousticness": 0.07,
      "loudness": 0.82
    }
  },
  {
    "id": 606,
    "title": "괜찮아요",
    "artist": "BTOB",
    "genre": "댄스 팝",
    "emoji": "🎺",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.68,
      "valence": 0.81,
      "tempo": 0.68,
      "danceability": 0.81,
      "acousticness": 0.06,
      "loudness": 0.86
    }
  },
  {
    "id": 607,
    "title": "그리워하다",
    "artist": "BTOB",
    "genre": "발라드",
    "emoji": "🎺",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.3,
      "valence": 0.25,
      "tempo": 0.41,
      "danceability": 0.33,
      "acousticness": 0.66,
      "loudness": 0.4
    }
  },
  {
    "id": 608,
    "title": "뛰뛰빵빵",
    "artist": "BTOB",
    "genre": "댄스 팝",
    "emoji": "🎺",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.79,
      "valence": 0.6,
      "tempo": 0.75,
      "danceability": 0.76,
      "acousticness": 0.09,
      "loudness": 0.8
    }
  },
  {
    "id": 609,
    "title": "아름답고도 아프구나",
    "artist": "BTOB",
    "genre": "댄스 팝",
    "emoji": "🎺",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.8,
      "valence": 0.5,
      "tempo": 0.71,
      "danceability": 0.8,
      "acousticness": 0.02,
      "loudness": 0.7
    }
  },
  {
    "id": 610,
    "title": "너 없인 안 된다",
    "artist": "BTOB",
    "genre": "미디엄 팝",
    "emoji": "🎺",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.72,
      "valence": 0.68,
      "tempo": 0.59,
      "danceability": 0.8,
      "acousticness": 0.1,
      "loudness": 0.81
    }
  },
  {
    "id": 611,
    "title": "다칠 준비가 돼 있어 (On And On)",
    "artist": "VIXX",
    "genre": "발라드",
    "emoji": "👁️",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.3,
      "valence": 0.39,
      "tempo": 0.28,
      "danceability": 0.31,
      "acousticness": 0.59,
      "loudness": 0.32
    }
  },
  {
    "id": 612,
    "title": "저주인형",
    "artist": "VIXX",
    "genre": "발라드",
    "emoji": "👁️",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.37,
      "valence": 0.25,
      "tempo": 0.25,
      "danceability": 0.44,
      "acousticness": 0.72,
      "loudness": 0.36
    }
  },
  {
    "id": 613,
    "title": "사슬 (Chained Up)",
    "artist": "VIXX",
    "genre": "댄스 팝",
    "emoji": "👁️",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.71,
      "valence": 0.83,
      "tempo": 0.65,
      "danceability": 0.85,
      "acousticness": 0.09,
      "loudness": 0.95
    }
  },
  {
    "id": 614,
    "title": "Error",
    "artist": "VIXX",
    "genre": "파워 댄스",
    "emoji": "👁️",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.66,
      "tempo": 0.57,
      "danceability": 0.89,
      "acousticness": 0.1,
      "loudness": 0.92
    }
  },
  {
    "id": 615,
    "title": "도원경 (Shangri-La)",
    "artist": "VIXX",
    "genre": "미디엄 팝",
    "emoji": "👁️",
    "tier": 2,
    "gen": 2,
    "features": {
      "energy": 0.71,
      "valence": 0.55,
      "tempo": 0.66,
      "danceability": 0.79,
      "acousticness": 0.1,
      "loudness": 0.86
    }
  },
  {
    "id": 616,
    "title": "향수 뿌리지마",
    "artist": "TEEN TOP",
    "genre": "미디엄 팝",
    "emoji": "🌟",
    "tier": 3,
    "gen": 2,
    "features": {
      "energy": 0.75,
      "valence": 0.65,
      "tempo": 0.76,
      "danceability": 0.77,
      "acousticness": 0.04,
      "loudness": 0.92
    }
  },
  {
    "id": 617,
    "title": "미치겠어",
    "artist": "TEEN TOP",
    "genre": "댄스 팝",
    "emoji": "🌟",
    "tier": 3,
    "gen": 2,
    "features": {
      "energy": 0.82,
      "valence": 0.76,
      "tempo": 0.76,
      "danceability": 0.77,
      "acousticness": 0.05,
      "loudness": 0.72
    }
  },
  {
    "id": 618,
    "title": "Y",
    "artist": "MBLAQ",
    "genre": "미디엄 팝",
    "emoji": "🖤",
    "tier": 3,
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.72,
      "tempo": 0.71,
      "danceability": 0.78,
      "acousticness": 0.0,
      "loudness": 0.95
    }
  },
  {
    "id": 619,
    "title": "전쟁이야",
    "artist": "MBLAQ",
    "genre": "댄스 팝",
    "emoji": "🖤",
    "tier": 3,
    "gen": 2,
    "features": {
      "energy": 0.74,
      "valence": 0.82,
      "tempo": 0.71,
      "danceability": 0.84,
      "acousticness": 0.0,
      "loudness": 0.8
    }
  },
  {
    "id": 620,
    "title": "난리나",
    "artist": "Block B",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "tier": 3,
    "gen": 2,
    "features": {
      "energy": 0.81,
      "valence": 0.82,
      "tempo": 0.57,
      "danceability": 0.77,
      "acousticness": 0.02,
      "loudness": 0.94
    }
  },
  {
    "id": 621,
    "title": "Her",
    "artist": "Block B",
    "genre": "댄스 팝",
    "emoji": "🐝",
    "tier": 3,
    "gen": 2,
    "features": {
      "energy": 0.84,
      "valence": 0.82,
      "tempo": 0.65,
      "danceability": 0.76,
      "acousticness": 0.03,
      "loudness": 0.87
    }
  },
  {
    "id": 622,
    "title": "이 노래",
    "artist": "2AM",
    "genre": "발라드",
    "emoji": "☔",
    "tier": 3,
    "gen": 2,
    "features": {
      "energy": 0.28,
      "valence": 0.44,
      "tempo": 0.44,
      "danceability": 0.3,
      "acousticness": 0.62,
      "loudness": 0.44
    }
  },
  {
    "id": 623,
    "title": "죽어도 못 보내",
    "artist": "2AM",
    "genre": "발라드",
    "emoji": "☔",
    "tier": 3,
    "gen": 2,
    "features": {
      "energy": 0.32,
      "valence": 0.48,
      "tempo": 0.3,
      "danceability": 0.35,
      "acousticness": 0.6,
      "loudness": 0.51
    }
  },
  {
    "id": 624,
    "title": "외톨이야",
    "artist": "CNBLUE",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "tier": 3,
    "gen": 2,
    "features": {
      "energy": 0.77,
      "valence": 0.74,
      "tempo": 0.72,
      "danceability": 0.82,
      "acousticness": 0.08,
      "loudness": 0.74
    }
  },
  {
    "id": 625,
    "title": "Love",
    "artist": "CNBLUE",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "tier": 3,
    "gen": 2,
    "features": {
      "energy": 0.66,
      "valence": 0.79,
      "tempo": 0.66,
      "danceability": 0.84,
      "acousticness": 0.0,
      "loudness": 0.92
    }
  },
  {
    "id": 626,
    "title": "으르렁 (Growl)",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.77,
      "valence": 0.6,
      "tempo": 0.73,
      "danceability": 0.78,
      "acousticness": 0.09,
      "loudness": 0.78
    }
  },
  {
    "id": 627,
    "title": "중독 (Overdose)",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.61,
      "tempo": 0.68,
      "danceability": 0.84,
      "acousticness": 0.08,
      "loudness": 0.78
    }
  },
  {
    "id": 628,
    "title": "Call Me Baby",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.8,
      "tempo": 0.61,
      "danceability": 0.81,
      "acousticness": 0.04,
      "loudness": 0.67
    }
  },
  {
    "id": 629,
    "title": "Love Me Right",
    "artist": "EXO",
    "genre": "미디엄 팝",
    "emoji": "🐺",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.65,
      "valence": 0.57,
      "tempo": 0.75,
      "danceability": 0.79,
      "acousticness": 0.03,
      "loudness": 0.77
    }
  },
  {
    "id": 630,
    "title": "Monster",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.75,
      "tempo": 0.59,
      "danceability": 0.84,
      "acousticness": 0.1,
      "loudness": 0.81
    }
  },
  {
    "id": 631,
    "title": "Ko Ko Bop",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.71,
      "valence": 0.6,
      "tempo": 0.7,
      "danceability": 0.86,
      "acousticness": 0.09,
      "loudness": 0.62
    }
  },
  {
    "id": 632,
    "title": "Power",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.57,
      "tempo": 0.66,
      "danceability": 0.82,
      "acousticness": 0.11,
      "loudness": 0.76
    }
  },
  {
    "id": 633,
    "title": "Tempo",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.69,
      "tempo": 0.68,
      "danceability": 0.78,
      "acousticness": 0.14,
      "loudness": 0.63
    }
  },
  {
    "id": 634,
    "title": "Love Shot",
    "artist": "EXO",
    "genre": "파워 댄스",
    "emoji": "🐺",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.65,
      "tempo": 0.71,
      "danceability": 0.89,
      "acousticness": 0.11,
      "loudness": 0.7
    }
  },
  {
    "id": 635,
    "title": "Cream Soda",
    "artist": "EXO",
    "genre": "댄스 팝",
    "emoji": "🐺",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.77,
      "valence": 0.76,
      "tempo": 0.67,
      "danceability": 0.8,
      "acousticness": 0.13,
      "loudness": 0.76
    }
  },
  {
    "id": 636,
    "title": "아낀다",
    "artist": "SEVENTEEN",
    "genre": "댄스 팝",
    "emoji": "💟",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.58,
      "tempo": 0.65,
      "danceability": 0.89,
      "acousticness": 0.05,
      "loudness": 0.71
    }
  },
  {
    "id": 637,
    "title": "만세",
    "artist": "SEVENTEEN",
    "genre": "댄스 팝",
    "emoji": "💟",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.7,
      "valence": 0.61,
      "tempo": 0.7,
      "danceability": 0.89,
      "acousticness": 0.06,
      "loudness": 0.65
    }
  },
  {
    "id": 638,
    "title": "예쁘다 (Pretty U)",
    "artist": "SEVENTEEN",
    "genre": "댄스 팝",
    "emoji": "💟",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.79,
      "valence": 0.76,
      "tempo": 0.69,
      "danceability": 0.8,
      "acousticness": 0.08,
      "loudness": 0.65
    }
  },
  {
    "id": 639,
    "title": "아주 Nice",
    "artist": "SEVENTEEN",
    "genre": "댄스 팝",
    "emoji": "💟",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.6,
      "tempo": 0.69,
      "danceability": 0.8,
      "acousticness": 0.1,
      "loudness": 0.78
    }
  },
  {
    "id": 640,
    "title": "울고 싶지 않아 (Don't Wanna Cry)",
    "artist": "SEVENTEEN",
    "genre": "미디엄 팝",
    "emoji": "💟",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.72,
      "valence": 0.63,
      "tempo": 0.6,
      "danceability": 0.75,
      "acousticness": 0.12,
      "loudness": 0.72
    }
  },
  {
    "id": 641,
    "title": "고맙다",
    "artist": "SEVENTEEN",
    "genre": "댄스 팝",
    "emoji": "💟",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.76,
      "tempo": 0.76,
      "danceability": 0.85,
      "acousticness": 0.07,
      "loudness": 0.67
    }
  },
  {
    "id": 642,
    "title": "Left & Right",
    "artist": "SEVENTEEN",
    "genre": "댄스 팝",
    "emoji": "💟",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.81,
      "tempo": 0.63,
      "danceability": 0.89,
      "acousticness": 0.03,
      "loudness": 0.73
    }
  },
  {
    "id": 643,
    "title": "손오공 (Super)",
    "artist": "SEVENTEEN",
    "genre": "댄스 팝",
    "emoji": "💟",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.78,
      "tempo": 0.59,
      "danceability": 0.83,
      "acousticness": 0.16,
      "loudness": 0.65
    }
  },
  {
    "id": 644,
    "title": "음악의 신 (God of Music)",
    "artist": "SEVENTEEN",
    "genre": "파워 댄스",
    "emoji": "💟",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.7,
      "tempo": 0.72,
      "danceability": 0.88,
      "acousticness": 0.13,
      "loudness": 0.72
    }
  },
  {
    "id": 645,
    "title": "어쩌나",
    "artist": "SEVENTEEN",
    "genre": "파워 댄스",
    "emoji": "💟",
    "tier": 1,
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.7,
      "tempo": 0.72,
      "danceability": 0.88,
      "acousticness": 0.13,
      "loudness": 0.72
    }
  },
  {
    "id": 646,
    "title": "공허해",
    "artist": "WINNER",
    "genre": "발라드",
    "emoji": "💖",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.25,
      "valence": 0.46,
      "tempo": 0.3,
      "danceability": 0.44,
      "acousticness": 0.77,
      "loudness": 0.27
    }
  },
  {
    "id": 647,
    "title": "Really Really",
    "artist": "WINNER",
    "genre": "파워 댄스",
    "emoji": "💖",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.83,
      "valence": 0.81,
      "tempo": 0.56,
      "danceability": 0.83,
      "acousticness": 0.11,
      "loudness": 0.66
    }
  },
  {
    "id": 648,
    "title": "Millions",
    "artist": "WINNER",
    "genre": "파워 댄스",
    "emoji": "💖",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.89,
      "tempo": 0.74,
      "danceability": 0.87,
      "acousticness": 0.05,
      "loudness": 0.78
    }
  },
  {
    "id": 649,
    "title": "Everyday",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.77,
      "valence": 0.76,
      "tempo": 0.74,
      "danceability": 0.77,
      "acousticness": 0.08,
      "loudness": 0.75
    }
  },
  {
    "id": 650,
    "title": "센치해 (Sentimental)",
    "artist": "WINNER",
    "genre": "댄스 팝",
    "emoji": "💖",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.79,
      "valence": 0.74,
      "tempo": 0.59,
      "danceability": 0.87,
      "acousticness": 0.07,
      "loudness": 0.62
    }
  },
  {
    "id": 651,
    "title": "취향저격",
    "artist": "iKON",
    "genre": "댄스 팝",
    "emoji": "🎉",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.79,
      "valence": 0.61,
      "tempo": 0.61,
      "danceability": 0.86,
      "acousticness": 0.09,
      "loudness": 0.62
    }
  },
  {
    "id": 652,
    "title": "리듬 타 (Rhythm Ta)",
    "artist": "iKON",
    "genre": "댄스 팝",
    "emoji": "🎉",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.85,
      "tempo": 0.73,
      "danceability": 0.81,
      "acousticness": 0.15,
      "loudness": 0.71
    }
  },
  {
    "id": 653,
    "title": "사랑을 했다 (Love Scenario)",
    "artist": "iKON",
    "genre": "댄스 팝",
    "emoji": "🎉",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.65,
      "valence": 0.83,
      "tempo": 0.73,
      "danceability": 0.86,
      "acousticness": 0.03,
      "loudness": 0.7
    }
  },
  {
    "id": 654,
    "title": "죽겠다 (Killing Me)",
    "artist": "iKON",
    "genre": "댄스 팝",
    "emoji": "🎉",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.88,
      "tempo": 0.62,
      "danceability": 0.86,
      "acousticness": 0.16,
      "loudness": 0.82
    }
  },
  {
    "id": 655,
    "title": "벌떼 (B-DAY)",
    "artist": "iKON",
    "genre": "댄스 팝",
    "emoji": "🎉",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.64,
      "tempo": 0.68,
      "danceability": 0.84,
      "acousticness": 0.1,
      "loudness": 0.83
    }
  },
  {
    "id": 656,
    "title": "신속히 (Rush)",
    "artist": "MONSTA X",
    "genre": "파워 댄스",
    "emoji": "🐾",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.67,
      "tempo": 0.56,
      "danceability": 0.88,
      "acousticness": 0.1,
      "loudness": 0.72
    }
  },
  {
    "id": 657,
    "title": "무단침입 (Trespass)",
    "artist": "MONSTA X",
    "genre": "댄스 팝",
    "emoji": "🐾",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.86,
      "tempo": 0.67,
      "danceability": 0.88,
      "acousticness": 0.05,
      "loudness": 0.62
    }
  },
  {
    "id": 658,
    "title": "Dramarama",
    "artist": "MONSTA X",
    "genre": "펑키 팝",
    "emoji": "🐾",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.76,
      "valence": 0.77,
      "tempo": 0.75,
      "danceability": 0.9,
      "acousticness": 0.12,
      "loudness": 0.72
    }
  },
  {
    "id": 659,
    "title": "Shoot Out",
    "artist": "MONSTA X",
    "genre": "댄스 팝",
    "emoji": "🐾",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.61,
      "tempo": 0.71,
      "danceability": 0.86,
      "acousticness": 0.03,
      "loudness": 0.67
    }
  },
  {
    "id": 660,
    "title": "Love Killa",
    "artist": "MONSTA X",
    "genre": "미디엄 팝",
    "emoji": "🐾",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.65,
      "valence": 0.75,
      "tempo": 0.61,
      "danceability": 0.79,
      "acousticness": 0.04,
      "loudness": 0.61
    }
  },
  {
    "id": 661,
    "title": "소년 (Boy)",
    "artist": "THE BOYZ",
    "genre": "댄스 팝",
    "emoji": "📣",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.81,
      "valence": 0.85,
      "tempo": 0.76,
      "danceability": 0.77,
      "acousticness": 0.02,
      "loudness": 0.76
    }
  },
  {
    "id": 662,
    "title": "Bloom Bloom",
    "artist": "THE BOYZ",
    "genre": "댄스 팝",
    "emoji": "📣",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.83,
      "valence": 0.71,
      "tempo": 0.65,
      "danceability": 0.76,
      "acousticness": 0.08,
      "loudness": 0.74
    }
  },
  {
    "id": 663,
    "title": "The Stealer",
    "artist": "THE BOYZ",
    "genre": "미디엄 팝",
    "emoji": "📣",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.73,
      "tempo": 0.56,
      "danceability": 0.8,
      "acousticness": 0.03,
      "loudness": 0.75
    }
  },
  {
    "id": 664,
    "title": "Reveal",
    "artist": "THE BOYZ",
    "genre": "댄스 팝",
    "emoji": "📣",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.55,
      "tempo": 0.75,
      "danceability": 0.84,
      "acousticness": 0.15,
      "loudness": 0.82
    }
  },
  {
    "id": 665,
    "title": "Maverick",
    "artist": "THE BOYZ",
    "genre": "밝은 팝",
    "emoji": "📣",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.72,
      "valence": 0.87,
      "tempo": 0.58,
      "danceability": 0.79,
      "acousticness": 0.04,
      "loudness": 0.69
    }
  },
  {
    "id": 666,
    "title": "Congratulations",
    "artist": "DAY6",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.73,
      "valence": 0.63,
      "tempo": 0.58,
      "danceability": 0.81,
      "acousticness": 0.08,
      "loudness": 0.69
    }
  },
  {
    "id": 667,
    "title": "예뻤어",
    "artist": "DAY6",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.71,
      "valence": 0.74,
      "tempo": 0.69,
      "danceability": 0.86,
      "acousticness": 0.03,
      "loudness": 0.81
    }
  },
  {
    "id": 668,
    "title": "한 페이지가 될 수 있게",
    "artist": "DAY6",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.79,
      "valence": 0.66,
      "tempo": 0.69,
      "danceability": 0.85,
      "acousticness": 0.1,
      "loudness": 0.8
    }
  },
  {
    "id": 669,
    "title": "Welcome to the Show",
    "artist": "DAY6",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.65,
      "tempo": 0.67,
      "danceability": 0.79,
      "acousticness": 0.1,
      "loudness": 0.65
    }
  },
  {
    "id": 670,
    "title": "녹아내려요 (Melt Down)",
    "artist": "DAY6",
    "genre": "댄스 팝",
    "emoji": "🎸",
    "tier": 2,
    "gen": 3,
    "features": {
      "energy": 0.74,
      "valence": 0.65,
      "tempo": 0.62,
      "danceability": 0.82,
      "acousticness": 0.06,
      "loudness": 0.67
    }
  },
  {
    "id": 671,
    "title": "숨바꼭질",
    "artist": "ASTRO",
    "genre": "댄스 팝",
    "emoji": "🌟",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.85,
      "valence": 0.83,
      "tempo": 0.6,
      "danceability": 0.76,
      "acousticness": 0.07,
      "loudness": 0.74
    }
  },
  {
    "id": 672,
    "title": "고백",
    "artist": "ASTRO",
    "genre": "파워 댄스",
    "emoji": "🌟",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.81,
      "valence": 0.88,
      "tempo": 0.71,
      "danceability": 0.86,
      "acousticness": 0.17,
      "loudness": 0.71
    }
  },
  {
    "id": 673,
    "title": "빛나리",
    "artist": "PENTAGON",
    "genre": "댄스 팝",
    "emoji": "🪐",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.68,
      "valence": 0.55,
      "tempo": 0.61,
      "danceability": 0.83,
      "acousticness": 0.15,
      "loudness": 0.63
    }
  },
  {
    "id": 674,
    "title": "청개구리",
    "artist": "PENTAGON",
    "genre": "댄스 팝",
    "emoji": "🪐",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.68,
      "tempo": 0.68,
      "danceability": 0.77,
      "acousticness": 0.04,
      "loudness": 0.67
    }
  },
  {
    "id": 675,
    "title": "오솔레미오",
    "artist": "SF9",
    "genre": "댄스 팝",
    "emoji": "📣",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.7,
      "valence": 0.74,
      "tempo": 0.58,
      "danceability": 0.82,
      "acousticness": 0.11,
      "loudness": 0.61
    }
  },
  {
    "id": 676,
    "title": "Good Guy",
    "artist": "SF9",
    "genre": "댄스 팝",
    "emoji": "📣",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.79,
      "tempo": 0.59,
      "danceability": 0.78,
      "acousticness": 0.07,
      "loudness": 0.79
    }
  },
  {
    "id": 677,
    "title": "옥탑방 (Rooftop)",
    "artist": "N.Flying",
    "genre": "댄스 팝",
    "emoji": "🥔",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.71,
      "tempo": 0.75,
      "danceability": 0.88,
      "acousticness": 0.07,
      "loudness": 0.65
    }
  },
  {
    "id": 678,
    "title": "아 진짜요 (Oh Really.)",
    "artist": "N.Flying",
    "genre": "댄스 팝",
    "emoji": "🥔",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.64,
      "tempo": 0.56,
      "danceability": 0.78,
      "acousticness": 0.04,
      "loudness": 0.64
    }
  },
  {
    "id": 679,
    "title": "담다디",
    "artist": "Golden Child",
    "genre": "댄스 팝",
    "emoji": "🏆",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.7,
      "valence": 0.84,
      "tempo": 0.67,
      "danceability": 0.81,
      "acousticness": 0.1,
      "loudness": 0.82
    }
  },
  {
    "id": 680,
    "title": "너라고 (It's U)",
    "artist": "Golden Child",
    "genre": "댄스 팝",
    "emoji": "🏆",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.88,
      "tempo": 0.69,
      "danceability": 0.81,
      "acousticness": 0.02,
      "loudness": 0.77
    }
  },
  {
    "id": 681,
    "title": "하얗게 불태웠어",
    "artist": "UP10TION",
    "genre": "댄스 팝",
    "emoji": "🔥",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.57,
      "tempo": 0.75,
      "danceability": 0.8,
      "acousticness": 0.03,
      "loudness": 0.71
    }
  },
  {
    "id": 682,
    "title": "Attention",
    "artist": "UP10TION",
    "genre": "댄스 팝",
    "emoji": "🔥",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.87,
      "tempo": 0.75,
      "danceability": 0.83,
      "acousticness": 0.03,
      "loudness": 0.82
    }
  },
  {
    "id": 683,
    "title": "오월애 (Time Of Sorrow)",
    "artist": "VICTON",
    "genre": "파워 댄스",
    "emoji": "🍂",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.84,
      "valence": 0.59,
      "tempo": 0.62,
      "danceability": 0.89,
      "acousticness": 0.15,
      "loudness": 0.62
    }
  },
  {
    "id": 684,
    "title": "그리운 밤",
    "artist": "VICTON",
    "genre": "댄스 팝",
    "emoji": "🍂",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.84,
      "tempo": 0.72,
      "danceability": 0.87,
      "acousticness": 0.06,
      "loudness": 0.69
    }
  },
  {
    "id": 685,
    "title": "Knock",
    "artist": "KNK",
    "genre": "댄스 팝",
    "emoji": "🚪",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.67,
      "valence": 0.59,
      "tempo": 0.57,
      "danceability": 0.9,
      "acousticness": 0.03,
      "loudness": 0.82
    }
  },
  {
    "id": 686,
    "title": "Back Again",
    "artist": "KNK",
    "genre": "파워 댄스",
    "emoji": "🚪",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.82,
      "valence": 0.63,
      "tempo": 0.7,
      "danceability": 0.81,
      "acousticness": 0.13,
      "loudness": 0.65
    }
  },
  {
    "id": 687,
    "title": "Strange",
    "artist": "MASC",
    "genre": "댄스 팝",
    "emoji": "🎭",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.66,
      "valence": 0.68,
      "tempo": 0.7,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.63
    }
  },
  {
    "id": 688,
    "title": "Tina",
    "artist": "MASC",
    "genre": "댄스 팝",
    "emoji": "🎭",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.55,
      "tempo": 0.6,
      "danceability": 0.86,
      "acousticness": 0.07,
      "loudness": 0.67
    }
  },
  {
    "id": 689,
    "title": "Lollipop",
    "artist": "IMFACT",
    "genre": "댄스 팝",
    "emoji": "🍭",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.78,
      "valence": 0.67,
      "tempo": 0.62,
      "danceability": 0.78,
      "acousticness": 0.05,
      "loudness": 0.63
    }
  },
  {
    "id": 690,
    "title": "Feel So Good",
    "artist": "IMFACT",
    "genre": "댄스 팝",
    "emoji": "🍭",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.75,
      "valence": 0.88,
      "tempo": 0.62,
      "danceability": 0.84,
      "acousticness": 0.16,
      "loudness": 0.72
    }
  },
  {
    "id": 691,
    "title": "Platonic Love (지켜줄게)",
    "artist": "SNUPER",
    "genre": "밝은 팝",
    "emoji": "☔",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.7,
      "valence": 0.89,
      "tempo": 0.75,
      "danceability": 0.79,
      "acousticness": 0.15,
      "loudness": 0.79
    }
  },
  {
    "id": 692,
    "title": "It's Raining",
    "artist": "SNUPER",
    "genre": "발라드",
    "emoji": "☔",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.41,
      "valence": 0.37,
      "tempo": 0.37,
      "danceability": 0.31,
      "acousticness": 0.88,
      "loudness": 0.24
    }
  },
  {
    "id": 693,
    "title": "예쁘니까",
    "artist": "로미오",
    "genre": "댄스 팝",
    "emoji": "💘",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.77,
      "valence": 0.85,
      "tempo": 0.76,
      "danceability": 0.78,
      "acousticness": 0.02,
      "loudness": 0.63
    }
  },
  {
    "id": 694,
    "title": "Miro",
    "artist": "로미오",
    "genre": "댄스 팝",
    "emoji": "💘",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.77,
      "valence": 0.61,
      "tempo": 0.77,
      "danceability": 0.8,
      "acousticness": 0.03,
      "loudness": 0.75
    }
  },
  {
    "id": 695,
    "title": "Storm",
    "artist": "MAP6",
    "genre": "댄스 팝",
    "emoji": "🗺️",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.65,
      "valence": 0.78,
      "tempo": 0.56,
      "danceability": 0.89,
      "acousticness": 0.04,
      "loudness": 0.84
    }
  },
  {
    "id": 696,
    "title": "Swagger Time",
    "artist": "MAP6",
    "genre": "댄스 팝",
    "emoji": "🗺️",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.77,
      "valence": 0.79,
      "tempo": 0.75,
      "danceability": 0.8,
      "acousticness": 0.06,
      "loudness": 0.68
    }
  },
  {
    "id": 697,
    "title": "Fever",
    "artist": "HALO",
    "genre": "댄스 팝",
    "emoji": "😇",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.69,
      "valence": 0.8,
      "tempo": 0.67,
      "danceability": 0.81,
      "acousticness": 0.14,
      "loudness": 0.73
    }
  },
  {
    "id": 698,
    "title": "체온이 뜨거워",
    "artist": "HALO",
    "genre": "댄스 팝",
    "emoji": "😇",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.72,
      "valence": 0.73,
      "tempo": 0.59,
      "danceability": 0.84,
      "acousticness": 0.04,
      "loudness": 0.8
    }
  },
  {
    "id": 699,
    "title": "말로해",
    "artist": "탑독",
    "genre": "댄스 팝",
    "emoji": "🎩",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.8,
      "valence": 0.71,
      "tempo": 0.64,
      "danceability": 0.8,
      "acousticness": 0.16,
      "loudness": 0.76
    }
  },
  {
    "id": 700,
    "title": "들어와",
    "artist": "탑독",
    "genre": "댄스 팝",
    "emoji": "🎩",
    "tier": 3,
    "gen": 3,
    "features": {
      "energy": 0.81,
      "valence": 0.62,
      "tempo": 0.59,
      "danceability": 0.77,
      "acousticness": 0.12,
      "loudness": 0.84
    }
  },
  {
    "id": 701,
    "title": "어느날 머리에서 뿔이 자랐다 (Crown)",
    "artist": "TXT",
    "genre": "파워 댄스",
    "emoji": "👑",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.82,
      "valence": 0.73,
      "tempo": 0.66,
      "danceability": 0.83,
      "acousticness": 0.08,
      "loudness": 0.78
    }
  },
  {
    "id": 702,
    "title": "9와 4분의 3 승강장에서 너를 기다려",
    "artist": "TXT",
    "genre": "댄스 팝",
    "emoji": "👑",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.78,
      "valence": 0.73,
      "tempo": 0.71,
      "danceability": 0.82,
      "acousticness": 0.13,
      "loudness": 0.61
    }
  },
  {
    "id": 703,
    "title": "세계가 불탄 밤 우린...",
    "artist": "TXT",
    "genre": "파워 댄스",
    "emoji": "👑",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.82,
      "valence": 0.58,
      "tempo": 0.82,
      "danceability": 0.85,
      "acousticness": 0.12,
      "loudness": 0.63
    }
  },
  {
    "id": 704,
    "title": "5시 53분의 하늘에서 발견한 너와 나",
    "artist": "TXT",
    "genre": "댄스 팝",
    "emoji": "👑",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.74,
      "valence": 0.74,
      "tempo": 0.82,
      "danceability": 0.87,
      "acousticness": 0.15,
      "loudness": 0.75
    }
  },
  {
    "id": 705,
    "title": "0X1=LOVESONG",
    "artist": "TXT",
    "genre": "미디엄 팝",
    "emoji": "👑",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.74,
      "valence": 0.57,
      "tempo": 0.73,
      "danceability": 0.8,
      "acousticness": 0.12,
      "loudness": 0.63
    }
  },
  {
    "id": 706,
    "title": "LO$ER=LO&ER",
    "artist": "TXT",
    "genre": "파워 댄스",
    "emoji": "👑",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.83,
      "tempo": 0.72,
      "danceability": 0.82,
      "acousticness": 0.05,
      "loudness": 0.82
    }
  },
  {
    "id": 707,
    "title": "Sugar Rush Ride",
    "artist": "TXT",
    "genre": "댄스 팝",
    "emoji": "👑",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.76,
      "valence": 0.54,
      "tempo": 0.81,
      "danceability": 0.85,
      "acousticness": 0.09,
      "loudness": 0.81
    }
  },
  {
    "id": 708,
    "title": "Chasing That Feeling",
    "artist": "TXT",
    "genre": "파워 댄스",
    "emoji": "👑",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.82,
      "valence": 0.71,
      "tempo": 0.77,
      "danceability": 0.88,
      "acousticness": 0.09,
      "loudness": 0.66
    }
  },
  {
    "id": 709,
    "title": "Deja Vu",
    "artist": "TXT",
    "genre": "댄스 팝",
    "emoji": "👑",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.68,
      "tempo": 0.8,
      "danceability": 0.84,
      "acousticness": 0.06,
      "loudness": 0.71
    }
  },
  {
    "id": 710,
    "title": "Over The Line",
    "artist": "TXT",
    "genre": "강렬 댄스",
    "emoji": "👑",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.91,
      "valence": 0.65,
      "tempo": 0.68,
      "danceability": 0.81,
      "acousticness": 0.16,
      "loudness": 0.82
    }
  },
  {
    "id": 711,
    "title": "Given-Taken",
    "artist": "ENHYPEN",
    "genre": "강렬 댄스",
    "emoji": "🍷",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.93,
      "valence": 0.74,
      "tempo": 0.79,
      "danceability": 0.75,
      "acousticness": 0.11,
      "loudness": 0.72
    }
  },
  {
    "id": 712,
    "title": "Drunk-Dazed",
    "artist": "ENHYPEN",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.76,
      "valence": 0.77,
      "tempo": 0.63,
      "danceability": 0.88,
      "acousticness": 0.16,
      "loudness": 0.68
    }
  },
  {
    "id": 713,
    "title": "Fever",
    "artist": "ENHYPEN",
    "genre": "파워 댄스",
    "emoji": "🍷",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.85,
      "valence": 0.67,
      "tempo": 0.67,
      "danceability": 0.88,
      "acousticness": 0.11,
      "loudness": 0.63
    }
  },
  {
    "id": 714,
    "title": "Tamed-Dashed",
    "artist": "ENHYPEN",
    "genre": "강렬 댄스",
    "emoji": "🍷",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.91,
      "valence": 0.82,
      "tempo": 0.74,
      "danceability": 0.86,
      "acousticness": 0.06,
      "loudness": 0.71
    }
  },
  {
    "id": 715,
    "title": "Blessed-Cursed",
    "artist": "ENHYPEN",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.75,
      "valence": 0.52,
      "tempo": 0.67,
      "danceability": 0.86,
      "acousticness": 0.04,
      "loudness": 0.74
    }
  },
  {
    "id": 716,
    "title": "Bite Me",
    "artist": "ENHYPEN",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.76,
      "valence": 0.76,
      "tempo": 0.7,
      "danceability": 0.87,
      "acousticness": 0.02,
      "loudness": 0.76
    }
  },
  {
    "id": 717,
    "title": "Sweet Venom",
    "artist": "ENHYPEN",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.56,
      "tempo": 0.72,
      "danceability": 0.89,
      "acousticness": 0.05,
      "loudness": 0.61
    }
  },
  {
    "id": 718,
    "title": "XO (Only If You Say Yes)",
    "artist": "ENHYPEN",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.76,
      "valence": 0.79,
      "tempo": 0.71,
      "danceability": 0.88,
      "acousticness": 0.14,
      "loudness": 0.81
    }
  },
  {
    "id": 719,
    "title": "Fatal Trouble",
    "artist": "ENHYPEN",
    "genre": "댄스 팝",
    "emoji": "🍷",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.79,
      "valence": 0.67,
      "tempo": 0.82,
      "danceability": 0.85,
      "acousticness": 0.16,
      "loudness": 0.72
    }
  },
  {
    "id": 720,
    "title": "Future Perfect",
    "artist": "ENHYPEN",
    "genre": "펑키 팝",
    "emoji": "🍷",
    "tier": 1,
    "gen": 4,
    "features": {
      "energy": 0.78,
      "valence": 0.82,
      "tempo": 0.68,
      "danceability": 0.89,
      "acousticness": 0.08,
      "loudness": 0.83
    }
  },
  {
    "id": 721,
    "title": "해적왕 (Pirate King)",
    "artist": "ATEEZ",
    "genre": "파워 댄스",
    "emoji": "🏴‍☠️",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.82,
      "valence": 0.54,
      "tempo": 0.65,
      "danceability": 0.87,
      "acousticness": 0.02,
      "loudness": 0.77
    }
  },
  {
    "id": 722,
    "title": "Say My Name",
    "artist": "ATEEZ",
    "genre": "강렬 댄스",
    "emoji": "🏴‍☠️",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.91,
      "valence": 0.62,
      "tempo": 0.75,
      "danceability": 0.88,
      "acousticness": 0.15,
      "loudness": 0.61
    }
  },
  {
    "id": 723,
    "title": "Wonderland",
    "artist": "ATEEZ",
    "genre": "댄스 팝",
    "emoji": "🏴‍☠️",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.79,
      "valence": 0.59,
      "tempo": 0.72,
      "danceability": 0.89,
      "acousticness": 0.07,
      "loudness": 0.67
    }
  },
  {
    "id": 724,
    "title": "Inception",
    "artist": "ATEEZ",
    "genre": "댄스 팝",
    "emoji": "🏴‍☠️",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.78,
      "valence": 0.83,
      "tempo": 0.69,
      "danceability": 0.83,
      "acousticness": 0.1,
      "loudness": 0.8
    }
  },
  {
    "id": 725,
    "title": "Guerrilla",
    "artist": "ATEEZ",
    "genre": "파워 댄스",
    "emoji": "🏴‍☠️",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.87,
      "valence": 0.74,
      "tempo": 0.84,
      "danceability": 0.87,
      "acousticness": 0.05,
      "loudness": 0.62
    }
  },
  {
    "id": 726,
    "title": "Boy",
    "artist": "TREASURE",
    "genre": "댄스 팝",
    "emoji": "💎",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.5,
      "tempo": 0.81,
      "danceability": 0.79,
      "acousticness": 0.08,
      "loudness": 0.65
    }
  },
  {
    "id": 727,
    "title": "사랑해 (I Love You)",
    "artist": "TREASURE",
    "genre": "댄스 팝",
    "emoji": "💎",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.84,
      "tempo": 0.64,
      "danceability": 0.78,
      "acousticness": 0.06,
      "loudness": 0.79
    }
  },
  {
    "id": 728,
    "title": "직진 (Jikjin)",
    "artist": "TREASURE",
    "genre": "힙합",
    "emoji": "💎",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.61,
      "tempo": 0.73,
      "danceability": 0.88,
      "acousticness": 0.03,
      "loudness": 0.81
    }
  },
  {
    "id": 729,
    "title": "Bona Bona",
    "artist": "TREASURE",
    "genre": "강렬 댄스",
    "emoji": "💎",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.9,
      "valence": 0.67,
      "tempo": 0.75,
      "danceability": 0.77,
      "acousticness": 0.06,
      "loudness": 0.81
    }
  },
  {
    "id": 730,
    "title": "KING KONG",
    "artist": "TREASURE",
    "genre": "댄스 팝",
    "emoji": "💎",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.8,
      "valence": 0.61,
      "tempo": 0.81,
      "danceability": 0.8,
      "acousticness": 0.12,
      "loudness": 0.74
    }
  },
  {
    "id": 731,
    "title": "개화 (Flowering)",
    "artist": "LUCY",
    "genre": "강렬 댄스",
    "emoji": "🌸",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.9,
      "valence": 0.56,
      "tempo": 0.79,
      "danceability": 0.81,
      "acousticness": 0.02,
      "loudness": 0.82
    }
  },
  {
    "id": 732,
    "title": "조깅 (Jogging)",
    "artist": "LUCY",
    "genre": "강렬 댄스",
    "emoji": "🌸",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.91,
      "valence": 0.66,
      "tempo": 0.81,
      "danceability": 0.86,
      "acousticness": 0.11,
      "loudness": 0.61
    }
  },
  {
    "id": 733,
    "title": "선잠 (Snooze)",
    "artist": "LUCY",
    "genre": "발라드",
    "emoji": "🌸",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.43,
      "valence": 0.35,
      "tempo": 0.44,
      "danceability": 0.33,
      "acousticness": 0.63,
      "loudness": 0.28
    }
  },
  {
    "id": 734,
    "title": "히어로 (Hero)",
    "artist": "LUCY",
    "genre": "댄스 팝",
    "emoji": "🌸",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.78,
      "valence": 0.67,
      "tempo": 0.71,
      "danceability": 0.79,
      "acousticness": 0.04,
      "loudness": 0.61
    }
  },
  {
    "id": 735,
    "title": "못 죽는 버섯들의 버블",
    "artist": "LUCY",
    "genre": "댄스 팝",
    "emoji": "🌸",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.74,
      "valence": 0.52,
      "tempo": 0.77,
      "danceability": 0.81,
      "acousticness": 0.12,
      "loudness": 0.69
    }
  },
  {
    "id": 736,
    "title": "Break All The Rules",
    "artist": "CRAVITY",
    "genre": "댄스 팝",
    "emoji": "🧩",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.57,
      "tempo": 0.79,
      "danceability": 0.8,
      "acousticness": 0.09,
      "loudness": 0.67
    }
  },
  {
    "id": 737,
    "title": "Flame",
    "artist": "CRAVITY",
    "genre": "강렬 댄스",
    "emoji": "🧩",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.89,
      "valence": 0.69,
      "tempo": 0.7,
      "danceability": 0.79,
      "acousticness": 0.08,
      "loudness": 0.81
    }
  },
  {
    "id": 738,
    "title": "My Turn",
    "artist": "CRAVITY",
    "genre": "강렬 댄스",
    "emoji": "🧩",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.91,
      "valence": 0.66,
      "tempo": 0.75,
      "danceability": 0.89,
      "acousticness": 0.06,
      "loudness": 0.8
    }
  },
  {
    "id": 739,
    "title": "Groovy",
    "artist": "CRAVITY",
    "genre": "강렬 댄스",
    "emoji": "🧩",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.89,
      "valence": 0.66,
      "tempo": 0.8,
      "danceability": 0.75,
      "acousticness": 0.03,
      "loudness": 0.85
    }
  },
  {
    "id": 740,
    "title": "Love or Die",
    "artist": "CRAVITY",
    "genre": "댄스 팝",
    "emoji": "🧩",
    "tier": 2,
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.76,
      "tempo": 0.7,
      "danceability": 0.78,
      "acousticness": 0.06,
      "loudness": 0.6
    }
  },
  {
    "id": 741,
    "title": "가자 (Lit)",
    "artist": "ONEUS",
    "genre": "댄스 팝",
    "emoji": "🌙",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.78,
      "valence": 0.63,
      "tempo": 0.69,
      "danceability": 0.89,
      "acousticness": 0.03,
      "loudness": 0.82
    }
  },
  {
    "id": 742,
    "title": "월하미인 (Luna)",
    "artist": "ONEUS",
    "genre": "강렬 댄스",
    "emoji": "🌙",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.91,
      "valence": 0.5,
      "tempo": 0.73,
      "danceability": 0.78,
      "acousticness": 0.04,
      "loudness": 0.61
    }
  },
  {
    "id": 743,
    "title": "불러줘 (Ring Ring Ring)",
    "artist": "VERIVERY",
    "genre": "파워 댄스",
    "emoji": "🔔",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.83,
      "valence": 0.6,
      "tempo": 0.75,
      "danceability": 0.82,
      "acousticness": 0.06,
      "loudness": 0.84
    }
  },
  {
    "id": 744,
    "title": "Lay Back",
    "artist": "VERIVERY",
    "genre": "펑키 팝",
    "emoji": "🔔",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.82,
      "valence": 0.83,
      "tempo": 0.76,
      "danceability": 0.9,
      "acousticness": 0.14,
      "loudness": 0.69
    }
  },
  {
    "id": 745,
    "title": "Movie Star",
    "artist": "CIX",
    "genre": "강렬 댄스",
    "emoji": "🎬",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.91,
      "valence": 0.59,
      "tempo": 0.8,
      "danceability": 0.81,
      "acousticness": 0.04,
      "loudness": 0.64
    }
  },
  {
    "id": 746,
    "title": "순수의 시대 (Numb)",
    "artist": "CIX",
    "genre": "파워 댄스",
    "emoji": "🎬",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.8,
      "tempo": 0.85,
      "danceability": 0.82,
      "acousticness": 0.11,
      "loudness": 0.65
    }
  },
  {
    "id": 747,
    "title": "Breathe",
    "artist": "AB6IX",
    "genre": "댄스 팝",
    "emoji": "💨",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.76,
      "valence": 0.68,
      "tempo": 0.76,
      "danceability": 0.76,
      "acousticness": 0.04,
      "loudness": 0.83
    }
  },
  {
    "id": 748,
    "title": "Blind For Love",
    "artist": "AB6IX",
    "genre": "강렬 댄스",
    "emoji": "💨",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.92,
      "valence": 0.58,
      "tempo": 0.71,
      "danceability": 0.77,
      "acousticness": 0.1,
      "loudness": 0.67
    }
  },
  {
    "id": 749,
    "title": "Ice Age",
    "artist": "MCND",
    "genre": "댄스 팝",
    "emoji": "❄️",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.72,
      "tempo": 0.79,
      "danceability": 0.79,
      "acousticness": 0.17,
      "loudness": 0.82
    }
  },
  {
    "id": 750,
    "title": "떠 (Spring)",
    "artist": "MCND",
    "genre": "댄스 팝",
    "emoji": "❄️",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.83,
      "valence": 0.79,
      "tempo": 0.64,
      "danceability": 0.77,
      "acousticness": 0.15,
      "loudness": 0.65
    }
  },
  {
    "id": 751,
    "title": "Twilight",
    "artist": "WEi",
    "genre": "댄스 팝",
    "emoji": "🌅",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.75,
      "valence": 0.78,
      "tempo": 0.76,
      "danceability": 0.77,
      "acousticness": 0.16,
      "loudness": 0.78
    }
  },
  {
    "id": 752,
    "title": "모 아님 도 (All Or Nothing)",
    "artist": "WEi",
    "genre": "댄스 팝",
    "emoji": "🌅",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.8,
      "valence": 0.75,
      "tempo": 0.7,
      "danceability": 0.81,
      "acousticness": 0.16,
      "loudness": 0.7
    }
  },
  {
    "id": 753,
    "title": "Nostalgia",
    "artist": "DRIPPIN",
    "genre": "파워 댄스",
    "emoji": "💧",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.82,
      "valence": 0.76,
      "tempo": 0.81,
      "danceability": 0.84,
      "acousticness": 0.09,
      "loudness": 0.63
    }
  },
  {
    "id": 754,
    "title": "Free Pass",
    "artist": "DRIPPIN",
    "genre": "댄스 팝",
    "emoji": "💧",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.85,
      "valence": 0.74,
      "tempo": 0.76,
      "danceability": 0.75,
      "acousticness": 0.07,
      "loudness": 0.75
    }
  },
  {
    "id": 755,
    "title": "Bad News",
    "artist": "TEMPEST",
    "genre": "댄스 팝",
    "emoji": "🌀",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.78,
      "tempo": 0.84,
      "danceability": 0.84,
      "acousticness": 0.17,
      "loudness": 0.73
    }
  },
  {
    "id": 756,
    "title": "Vroom Vroom",
    "artist": "TEMPEST",
    "genre": "강렬 댄스",
    "emoji": "🌀",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.91,
      "valence": 0.76,
      "tempo": 0.72,
      "danceability": 0.86,
      "acousticness": 0.05,
      "loudness": 0.81
    }
  },
  {
    "id": 757,
    "title": "Lock Down",
    "artist": "EPEX",
    "genre": "파워 댄스",
    "emoji": "🏫",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.9,
      "valence": 0.61,
      "tempo": 0.65,
      "danceability": 0.88,
      "acousticness": 0.13,
      "loudness": 0.63
    }
  },
  {
    "id": 758,
    "title": "첫사랑의 법칙",
    "artist": "EPEX",
    "genre": "댄스 팝",
    "emoji": "🏫",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.77,
      "valence": 0.73,
      "tempo": 0.76,
      "danceability": 0.8,
      "acousticness": 0.11,
      "loudness": 0.85
    }
  },
  {
    "id": 759,
    "title": "Killa",
    "artist": "MIRAE",
    "genre": "댄스 팝",
    "emoji": "🛸",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.79,
      "valence": 0.55,
      "tempo": 0.8,
      "danceability": 0.77,
      "acousticness": 0.15,
      "loudness": 0.64
    }
  },
  {
    "id": 760,
    "title": "Splash",
    "artist": "MIRAE",
    "genre": "댄스 팝",
    "emoji": "🛸",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.78,
      "valence": 0.68,
      "tempo": 0.63,
      "danceability": 0.87,
      "acousticness": 0.1,
      "loudness": 0.68
    }
  },
  {
    "id": 761,
    "title": "Magnolia",
    "artist": "TO1",
    "genre": "댄스 팝",
    "emoji": "🦁",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.81,
      "valence": 0.71,
      "tempo": 0.67,
      "danceability": 0.79,
      "acousticness": 0.06,
      "loudness": 0.78
    }
  },
  {
    "id": 762,
    "title": "Son of Beast",
    "artist": "TO1",
    "genre": "파워 댄스",
    "emoji": "🦁",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.86,
      "valence": 0.74,
      "tempo": 0.69,
      "danceability": 0.88,
      "acousticness": 0.11,
      "loudness": 0.61
    }
  },
  {
    "id": 763,
    "title": "Think of Dawn",
    "artist": "GHOST9",
    "genre": "파워 댄스",
    "emoji": "👻",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.54,
      "tempo": 0.64,
      "danceability": 0.86,
      "acousticness": 0.16,
      "loudness": 0.82
    }
  },
  {
    "id": 764,
    "title": "W.ALL",
    "artist": "GHOST9",
    "genre": "미디엄 팝",
    "emoji": "👻",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.73,
      "valence": 0.5,
      "tempo": 0.83,
      "danceability": 0.76,
      "acousticness": 0.17,
      "loudness": 0.77
    }
  },
  {
    "id": 765,
    "title": "Damage",
    "artist": "JUST B",
    "genre": "파워 댄스",
    "emoji": "⚙️",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.89,
      "valence": 0.77,
      "tempo": 0.68,
      "danceability": 0.83,
      "acousticness": 0.11,
      "loudness": 0.74
    }
  },
  {
    "id": 766,
    "title": "RE=LOAD",
    "artist": "JUST B",
    "genre": "강렬 댄스",
    "emoji": "⚙️",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.92,
      "valence": 0.65,
      "tempo": 0.7,
      "danceability": 0.75,
      "acousticness": 0.04,
      "loudness": 0.78
    }
  },
  {
    "id": 767,
    "title": "Excalibur",
    "artist": "KINGDOM",
    "genre": "댄스 팝",
    "emoji": "👑",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.78,
      "valence": 0.81,
      "tempo": 0.78,
      "danceability": 0.82,
      "acousticness": 0.06,
      "loudness": 0.64
    }
  },
  {
    "id": 768,
    "title": "Karma",
    "artist": "KINGDOM",
    "genre": "댄스 팝",
    "emoji": "👑",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.74,
      "valence": 0.62,
      "tempo": 0.85,
      "danceability": 0.89,
      "acousticness": 0.02,
      "loudness": 0.81
    }
  },
  {
    "id": 769,
    "title": "비켜 (Move)",
    "artist": "THE NEW SIX",
    "genre": "댄스 팝",
    "emoji": "🏎️",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.84,
      "valence": 0.62,
      "tempo": 0.84,
      "danceability": 0.77,
      "acousticness": 0.1,
      "loudness": 0.71
    }
  },
  {
    "id": 770,
    "title": "Love or Die",
    "artist": "THE NEW SIX",
    "genre": "파워 댄스",
    "emoji": "🏎️",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.83,
      "valence": 0.78,
      "tempo": 0.7,
      "danceability": 0.88,
      "acousticness": 0.17,
      "loudness": 0.79
    }
  },
  {
    "id": 771,
    "title": "미안해 엄마",
    "artist": "DKB",
    "genre": "힙합",
    "emoji": "🏃",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.85,
      "valence": 0.65,
      "tempo": 0.83,
      "danceability": 0.86,
      "acousticness": 0.05,
      "loudness": 0.83
    }
  },
  {
    "id": 772,
    "title": "Work Hard (난 일해)",
    "artist": "DKB",
    "genre": "댄스 팝",
    "emoji": "🏃",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.74,
      "valence": 0.84,
      "tempo": 0.7,
      "danceability": 0.85,
      "acousticness": 0.14,
      "loudness": 0.79
    }
  },
  {
    "id": 773,
    "title": "About Time",
    "artist": "Hoppipolla",
    "genre": "댄스 팝",
    "emoji": "🎻",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.76,
      "valence": 0.62,
      "tempo": 0.79,
      "danceability": 0.87,
      "acousticness": 0.11,
      "loudness": 0.83
    }
  },
  {
    "id": 774,
    "title": "Let's!",
    "artist": "Hoppipolla",
    "genre": "댄스 팝",
    "emoji": "🎻",
    "tier": 3,
    "gen": 4,
    "features": {
      "energy": 0.85,
      "valence": 0.69,
      "tempo": 0.82,
      "danceability": 0.76,
      "acousticness": 0.06,
      "loudness": 0.65
    }
  },
  {
    "id": 775,
    "title": "돌아버리겠다",
    "artist": "BOYNEXTDOOR",
    "genre": "미디엄 팝",
    "emoji": "🚪",
    "tier": 1,
    "gen": 0,
    "features": {
      "energy": 0.72,
      "valence": 0.75,
      "tempo": 0.69,
      "danceability": 0.75,
      "acousticness": 0.18,
      "loudness": 0.61
    }
  },
  {
    "id": 776,
    "title": "One and Only",
    "artist": "BOYNEXTDOOR",
    "genre": "댄스 팝",
    "emoji": "🚪",
    "tier": 1,
    "gen": 0,
    "features": {
      "energy": 0.63,
      "valence": 0.95,
      "tempo": 0.77,
      "danceability": 0.81,
      "acousticness": 0.15,
      "loudness": 0.58
    }
  },
  {
    "id": 777,
    "title": "Serenade",
    "artist": "BOYNEXTDOOR",
    "genre": "댄스 팝",
    "emoji": "🚪",
    "tier": 1,
    "gen": 0,
    "features": {
      "energy": 0.59,
      "valence": 0.7,
      "tempo": 0.7,
      "danceability": 0.88,
      "acousticness": 0.19,
      "loudness": 0.71
    }
  },
  {
    "id": 778,
    "title": "Earth, Wind & Fire",
    "artist": "BOYNEXTDOOR",
    "genre": "댄스 팝",
    "emoji": "🚪",
    "tier": 1,
    "gen": 0,
    "features": {
      "energy": 0.73,
      "valence": 0.88,
      "tempo": 0.66,
      "danceability": 0.82,
      "acousticness": 0.22,
      "loudness": 0.58
    }
  },
  {
    "id": 779,
    "title": "Nice Guy",
    "artist": "BOYNEXTDOOR",
    "genre": "댄스 팝",
    "emoji": "🚪",
    "tier": 1,
    "gen": 0,
    "features": {
      "energy": 0.77,
      "valence": 0.7,
      "tempo": 0.72,
      "danceability": 0.84,
      "acousticness": 0.1,
      "loudness": 0.55
    }
  },
  {
    "id": 780,
    "title": "ABCDLOVE",
    "artist": "BOYNEXTDOOR",
    "genre": "댄스 팝",
    "emoji": "🚪",
    "tier": 1,
    "gen": 0,
    "features": {
      "energy": 0.6,
      "valence": 0.77,
      "tempo": 0.66,
      "danceability": 0.84,
      "acousticness": 0.17,
      "loudness": 0.64
    }
  },
  {
    "id": 781,
    "title": "Crying",
    "artist": "BOYNEXTDOOR",
    "genre": "댄스 팝",
    "emoji": "🚪",
    "tier": 1,
    "gen": 0,
    "features": {
      "energy": 0.67,
      "valence": 0.61,
      "tempo": 0.7,
      "danceability": 0.86,
      "acousticness": 0.21,
      "loudness": 0.76
    }
  },
  {
    "id": 782,
    "title": "But I Like You",
    "artist": "BOYNEXTDOOR",
    "genre": "댄스 팝",
    "emoji": "🚪",
    "tier": 1,
    "gen": 0,
    "features": {
      "energy": 0.6,
      "valence": 0.76,
      "tempo": 0.61,
      "danceability": 0.83,
      "acousticness": 0.15,
      "loudness": 0.58
    }
  },
  {
    "id": 783,
    "title": "So let's go",
    "artist": "BOYNEXTDOOR",
    "genre": "댄스 팝",
    "emoji": "🚪",
    "tier": 1,
    "gen": 0,
    "features": {
      "energy": 0.64,
      "valence": 0.95,
      "tempo": 0.68,
      "danceability": 0.84,
      "acousticness": 0.14,
      "loudness": 0.63
    }
  },
  {
    "id": 784,
    "title": "Dear. My Darling",
    "artist": "BOYNEXTDOOR",
    "genre": "댄스 팝",
    "emoji": "🚪",
    "tier": 1,
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.77,
      "tempo": 0.72,
      "danceability": 0.83,
      "acousticness": 0.21,
      "loudness": 0.73
    }
  },
  {
    "id": 785,
    "title": "Trouble",
    "artist": "EVNNE",
    "genre": "댄스 팝",
    "emoji": "🛹",
    "tier": 2,
    "gen": 0,
    "features": {
      "energy": 0.6,
      "valence": 0.84,
      "tempo": 0.76,
      "danceability": 0.8,
      "acousticness": 0.2,
      "loudness": 0.64
    }
  },
  {
    "id": 786,
    "title": "Ugly",
    "artist": "EVNNE",
    "genre": "댄스 팝",
    "emoji": "🛹",
    "tier": 2,
    "gen": 0,
    "features": {
      "energy": 0.59,
      "valence": 0.74,
      "tempo": 0.68,
      "danceability": 0.87,
      "acousticness": 0.22,
      "loudness": 0.66
    }
  },
  {
    "id": 787,
    "title": "Badder Love",
    "artist": "EVNNE",
    "genre": "댄스 팝",
    "emoji": "🛹",
    "tier": 2,
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.62,
      "tempo": 0.6,
      "danceability": 0.83,
      "acousticness": 0.14,
      "loudness": 0.64
    }
  },
  {
    "id": 788,
    "title": "Role Model",
    "artist": "EVNNE",
    "genre": "밝은 팝",
    "emoji": "🛹",
    "tier": 2,
    "gen": 0,
    "features": {
      "energy": 0.67,
      "valence": 0.92,
      "tempo": 0.68,
      "danceability": 0.76,
      "acousticness": 0.21,
      "loudness": 0.69
    }
  },
  {
    "id": 789,
    "title": "Rave",
    "artist": "EVNNE",
    "genre": "밝은 팝",
    "emoji": "🛹",
    "tier": 2,
    "gen": 0,
    "features": {
      "energy": 0.62,
      "valence": 0.87,
      "tempo": 0.62,
      "danceability": 0.77,
      "acousticness": 0.11,
      "loudness": 0.72
    }
  },
  {
    "id": 790,
    "title": "On And On",
    "artist": "AMPERS&ONE",
    "genre": "댄스 팝",
    "emoji": "🏁",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.71,
      "valence": 0.79,
      "tempo": 0.68,
      "danceability": 0.75,
      "acousticness": 0.15,
      "loudness": 0.55
    }
  },
  {
    "id": 791,
    "title": "Broken Heart",
    "artist": "AMPERS&ONE",
    "genre": "댄스 팝",
    "emoji": "🏁",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.59,
      "valence": 0.7,
      "tempo": 0.77,
      "danceability": 0.81,
      "acousticness": 0.22,
      "loudness": 0.59
    }
  },
  {
    "id": 792,
    "title": "New Tomorrow",
    "artist": "FANTASY BOYS",
    "genre": "댄스 팝",
    "emoji": "🌌",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.66,
      "valence": 0.8,
      "tempo": 0.67,
      "danceability": 0.88,
      "acousticness": 0.18,
      "loudness": 0.69
    }
  },
  {
    "id": 793,
    "title": "Potential",
    "artist": "FANTASY BOYS",
    "genre": "미디엄 팝",
    "emoji": "🌌",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.75,
      "valence": 0.7,
      "tempo": 0.63,
      "danceability": 0.76,
      "acousticness": 0.11,
      "loudness": 0.59
    }
  },
  {
    "id": 794,
    "title": "Throw A Dice",
    "artist": "XODIAC",
    "genre": "미디엄 팝",
    "emoji": "🍋",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.68,
      "valence": 0.65,
      "tempo": 0.61,
      "danceability": 0.78,
      "acousticness": 0.18,
      "loudness": 0.55
    }
  },
  {
    "id": 795,
    "title": "Lemonade",
    "artist": "XODIAC",
    "genre": "댄스 팝",
    "emoji": "🍋",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.67,
      "valence": 0.81,
      "tempo": 0.62,
      "danceability": 0.87,
      "acousticness": 0.18,
      "loudness": 0.71
    }
  },
  {
    "id": 796,
    "title": "Wild Heart",
    "artist": "LUN8",
    "genre": "댄스 팝",
    "emoji": "🧭",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.59,
      "valence": 0.79,
      "tempo": 0.72,
      "danceability": 0.75,
      "acousticness": 0.21,
      "loudness": 0.55
    }
  },
  {
    "id": 797,
    "title": "Voyager",
    "artist": "LUN8",
    "genre": "댄스 팝",
    "emoji": "🧭",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.74,
      "valence": 0.82,
      "tempo": 0.59,
      "danceability": 0.81,
      "acousticness": 0.12,
      "loudness": 0.68
    }
  },
  {
    "id": 798,
    "title": "Gotcha",
    "artist": "ALL(H)OURS",
    "genre": "밝은 팝",
    "emoji": "🕰️",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.6,
      "valence": 0.85,
      "tempo": 0.64,
      "danceability": 0.76,
      "acousticness": 0.24,
      "loudness": 0.59
    }
  },
  {
    "id": 799,
    "title": "도깨비 (Shock)",
    "artist": "ALL(H)OURS",
    "genre": "밝은 팝",
    "emoji": "🕰️",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.72,
      "valence": 0.93,
      "tempo": 0.59,
      "danceability": 0.79,
      "acousticness": 0.18,
      "loudness": 0.68
    }
  },
  {
    "id": 800,
    "title": "Favorite",
    "artist": "POW",
    "genre": "밝은 팝",
    "emoji": "💥",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.61,
      "valence": 0.89,
      "tempo": 0.63,
      "danceability": 0.75,
      "acousticness": 0.11,
      "loudness": 0.55
    }
  },
  {
    "id": 801,
    "title": "Dazzling",
    "artist": "POW",
    "genre": "밝은 팝",
    "emoji": "💥",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.66,
      "valence": 0.85,
      "tempo": 0.69,
      "danceability": 0.78,
      "acousticness": 0.11,
      "loudness": 0.71
    }
  },
  {
    "id": 802,
    "title": "OoWee",
    "artist": "NOWADAYS",
    "genre": "미디엄 팝",
    "emoji": "🎫",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.68,
      "valence": 0.71,
      "tempo": 0.63,
      "danceability": 0.76,
      "acousticness": 0.24,
      "loudness": 0.52
    }
  },
  {
    "id": 803,
    "title": "Why Not?",
    "artist": "NOWADAYS",
    "genre": "밝은 팝",
    "emoji": "🎫",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.66,
      "valence": 0.87,
      "tempo": 0.69,
      "danceability": 0.79,
      "acousticness": 0.21,
      "loudness": 0.6
    }
  },
  {
    "id": 804,
    "title": "Burn Up",
    "artist": "DXMON",
    "genre": "댄스 팝",
    "emoji": "✂️",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.62,
      "valence": 0.88,
      "tempo": 0.55,
      "danceability": 0.89,
      "acousticness": 0.2,
      "loudness": 0.67
    }
  },
  {
    "id": 805,
    "title": "Girls, Girls, Girls",
    "artist": "DXMON",
    "genre": "댄스 팝",
    "emoji": "✂️",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.68,
      "valence": 0.69,
      "tempo": 0.69,
      "danceability": 0.86,
      "acousticness": 0.2,
      "loudness": 0.73
    }
  },
  {
    "id": 806,
    "title": "S&S (Sour and Sweet)",
    "artist": "ARrC",
    "genre": "댄스 팝",
    "emoji": "🍬",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.76,
      "valence": 0.76,
      "tempo": 0.77,
      "danceability": 0.82,
      "acousticness": 0.24,
      "loudness": 0.53
    }
  },
  {
    "id": 807,
    "title": "dummy",
    "artist": "ARrC",
    "genre": "미디엄 팝",
    "emoji": "🍬",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.62,
      "valence": 0.64,
      "tempo": 0.6,
      "danceability": 0.77,
      "acousticness": 0.1,
      "loudness": 0.75
    }
  },
  {
    "id": 808,
    "title": "멋진 거 (Must Be Nice)",
    "artist": "ONE PACT",
    "genre": "댄스 팝",
    "emoji": "🌙",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.75,
      "valence": 0.87,
      "tempo": 0.59,
      "danceability": 0.82,
      "acousticness": 0.13,
      "loudness": 0.58
    }
  },
  {
    "id": 809,
    "title": "FXXOFF",
    "artist": "ONE PACT",
    "genre": "댄스 팝",
    "emoji": "🌙",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.6,
      "valence": 0.67,
      "tempo": 0.59,
      "danceability": 0.89,
      "acousticness": 0.22,
      "loudness": 0.68
    }
  },
  {
    "id": 810,
    "title": "First Class",
    "artist": "82MAJOR",
    "genre": "미디엄 팝",
    "emoji": "✈️",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.59,
      "valence": 0.62,
      "tempo": 0.73,
      "danceability": 0.76,
      "acousticness": 0.17,
      "loudness": 0.56
    }
  },
  {
    "id": 811,
    "title": "Lighter",
    "artist": "82MAJOR",
    "genre": "밝은 팝",
    "emoji": "✈️",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.67,
      "valence": 0.93,
      "tempo": 0.6,
      "danceability": 0.76,
      "acousticness": 0.11,
      "loudness": 0.66
    }
  },
  {
    "id": 812,
    "title": "Atlantis",
    "artist": "WAKER",
    "genre": "댄스 팝",
    "emoji": "🌅",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.73,
      "valence": 0.8,
      "tempo": 0.68,
      "danceability": 0.88,
      "acousticness": 0.24,
      "loudness": 0.53
    }
  },
  {
    "id": 813,
    "title": "Vanilla",
    "artist": "WAKER",
    "genre": "댄스 팝",
    "emoji": "🌅",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.58,
      "valence": 0.78,
      "tempo": 0.7,
      "danceability": 0.81,
      "acousticness": 0.17,
      "loudness": 0.7
    }
  },
  {
    "id": 814,
    "title": "백전무패 (Unbeatable)",
    "artist": "TIOT",
    "genre": "댄스 팝",
    "emoji": "🍀",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.7,
      "valence": 0.62,
      "tempo": 0.57,
      "danceability": 0.82,
      "acousticness": 0.23,
      "loudness": 0.7
    }
  },
  {
    "id": 815,
    "title": "아기야 (Baby)",
    "artist": "TIOT",
    "genre": "댄스 팝",
    "emoji": "🍀",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.73,
      "valence": 0.74,
      "tempo": 0.74,
      "danceability": 0.84,
      "acousticness": 0.12,
      "loudness": 0.56
    }
  },
  {
    "id": 816,
    "title": "No Pressure",
    "artist": "NOMAD",
    "genre": "댄스 팝",
    "emoji": "🌵",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.72,
      "valence": 0.78,
      "tempo": 0.58,
      "danceability": 0.79,
      "acousticness": 0.25,
      "loudness": 0.72
    }
  },
  {
    "id": 817,
    "title": "California Love",
    "artist": "NOMAD",
    "genre": "댄스 팝",
    "emoji": "🌵",
    "tier": 3,
    "gen": 0,
    "features": {
      "energy": 0.62,
      "valence": 0.66,
      "tempo": 0.63,
      "danceability": 0.86,
      "acousticness": 0.21,
      "loudness": 0.63
    }
  }
];
