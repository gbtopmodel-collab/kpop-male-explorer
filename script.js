// ── 상태 변수 및 초기화 ──
let selectedSong = null;
let radarChart = null;
let authorName = '익명';
let authorMode = 'anonymous'; // anonymous | name
let adminMode = false;
let adminClickCount = 0;
let adminClickTimer = null;

const COMMENT_API = 'https://api.jsonblob.com/api/jsonBlob/019f56ea-4cf8-72f0-9f82-3c7c698440e8';

// 가중치 정의
const WEIGHTS = {
  energy: 1.8,
  valence: 2.0,
  tempo: 1.2,
  danceability: 1.5,
  acousticness: 0.6,
  loudness: 0.5
};

// 🎯 취향 확장 탐색 기준 범위 (적당히 다른 범위를 노출하기 위한 최소/최대 임계값)
const EXPANSION_MIN_DIST = 0.30;
const EXPANSION_MAX_DIST = 0.75;

// 🌐 영문명 아이돌의 한글 검색 지원 매핑 사전
const ARTIST_TRANSLATIONS = {
  "hot": ["hot", "에이치오티", "에이치 오 티"],
  "god": ["god", "지오디", "지 오 디"],
  "tvxq": ["tvxq", "동방신기"],
  "ss501": ["ss501", "더블에스오공일"],
  "super junior": ["super junior", "슈퍼주니어", "슈주"],
  "bigbang": ["bigbang", "빅뱅"],
  "shinee": ["shinee", "샤이니"],
  "2pm": ["2pm", "투피엠"],
  "2am": ["2am", "투에이엠"],
  "u-kiss": ["u-kiss", "유키스"],
  "beast": ["beast", "비스트", "하이라이트", "highlight"],
  "mblaq": ["mblaq", "엠블랙"],
  "infinite": ["infinite", "인피니트"],
  "teen top": ["teen top", "틴탑"],
  "block b": ["block b", "블락비"],
  "b1a4": ["b1a4", "비원에이포"],
  "boyfriend": ["boyfriend", "보이프렌드"],
  "btob": ["btob", "비투비"],
  "vixx": ["vixx", "빅스"],
  "nu'est": ["nu'est", "뉴이스트"],
  "cnblue": ["cnblue", "씨엔블루"],
  "exo": ["exo", "엑소"],
  "bts": ["bts", "방탄소년단", "방탄"],
  "winner": ["winner", "위너"],
  "ikon": ["ikon", "아이콘"],
  "monsta x": ["monsta x", "몬스타엑스", "몬엑"],
  "seventeen": ["seventeen", "세븐틴"],
  "astro": ["astro", "아스트로"],
  "pentagon": ["pentagon", "펜타곤"],
  "sf9": ["sf9", "에스에프나인"],
  "n.flying": ["n.flying", "엔플라잉"],
  "day6": ["day6", "데이식스"],
  "golden child": ["golden child", "골든차일드", "골차"],
  "the boyz": ["the boyz", "더보이즈"],
  "onf": ["onf", "온앤오프"],
  "up10tion": ["up10tion", "업텐션"],
  "victon": ["victon", "빅톤"],
  "knk": ["knk", "크나큰"],
  "masc": ["masc", "마스크"],
  "imfact": ["imfact", "임팩트"],
  "snuper": ["snuper", "스누퍼"],
  "map6": ["map6", "맵식스"],
  "halo": ["halo", "헤일로"],
  "wanna one": ["wanna one", "워너원"],
  "stray kids": ["stray kids", "스트레이 키즈", "스키즈"],
  "txt": ["txt", "투모로우바이투게더", "투바투"],
  "ateez": ["ateez", "에이티즈"],
  "oneus": ["oneus", "원어스"],
  "verivery": ["verivery", "베리베리"],
  "cix": ["cix", "씨아이엑스"],
  "ab6ix": ["ab6ix", "에이비식스"],
  "mcnd": ["mcnd", "엠씨엔디"],
  "cravity": ["cravity", "크래비티"],
  "wei": ["wei", "위아이"],
  "drippin": ["drippin", "드리핀"],
  "p1harmony": ["p1harmony", "피원하모니", "피원"],
  "enhypen": ["enhypen", "엔하이픈"],
  "treasure": ["treasure", "트레저"],
  "tempest": ["tempest", "템페스트"],
  "epex": ["epex", "이펙스"],
  "mirae": ["mirae", "미래소년"],
  "to1": ["to1", "티오원"],
  "ghost9": ["ghost9", "고스트나인"],
  "just b": ["just b", "저스트비"],
  "kingdom": ["kingdom", "킹덤"],
  "the new six": ["the new six", "더뉴식스", "티엔엑스", "tnx"],
  "dkb": ["dkb", "다크비"],
  "lucy": ["lucy", "루시"],
  "hoppipolla": ["hoppipolla", "호피폴라"],
  "riize": ["riize", "라이즈"],
  "zerobaseone": ["zerobaseone", "제로베이스원", "제베원", "zb1"],
  "boynextdoor": ["boynextdoor", "보이넥스트도어", "보네도", "보넥도"],
  "tws": ["tws", "투어스"],
  "evnne": ["evnne", "이븐"],
  "ampers&one": ["ampers&one", "앰퍼샌드원"],
  "fantasy boys": ["fantasy boys", "판타지보이즈"],
  "xodiac": ["xodiac", "소디엑"],
  "lun8": ["lun8", "루네이트"],
  "all(h)ours": ["all(h)ours", "올아워즈"],
  "nexz": ["nexz", "넥스지"],
  "pow": ["pow", "파우"],
  "nowadays": ["nowadays", "나우어데이즈"],
  "dxmon": ["dxmon", "다이몬"],
  "arrc": ["arrc", "아크"],
  "one pact": ["one pact", "원팩트"],
  "82major": ["82major", "팔이메이저", "82메이저"],
  "waker": ["waker", "웨이커"],
  "tiot": ["tiot", "티아이오티"],
  "nomad": ["nomad", "노마드"]
};

document.addEventListener('DOMContentLoaded', () => {
  setupGlobalClickHandlers();
  renderComments();
});

// ── 자동완성 검색 제어 ──
window.showSearchSuggestions = function() {
  const titleQuery = document.getElementById('custom-title').value.trim().toLowerCase();
  const artistQuery = document.getElementById('custom-artist').value.trim().toLowerCase();
  const box = document.getElementById('suggestions-box');
  
  if (!titleQuery && !artistQuery) {
    box.style.display = 'none';
    return;
  }
  
  // 제목 또는 가수가 검색어를 포함하는 상위 10개 곡 필터링 (한글 매핑 지원 및 다중 필드 교차 검색)
  const matches = songs.filter(s => {
    let match = true;
    
    // 개별 키워드가 제목이나 가수(한글 매핑 포함)에 매칭되는지 판단하는 헬퍼 함수
    const matchesSingle = (q) => {
      const titleMatch = s.title.toLowerCase().includes(q);
      let artistMatch = s.artist.toLowerCase().includes(q);
      
      const artistKey = s.artist.toLowerCase();
      if (ARTIST_TRANSLATIONS[artistKey]) {
        const translations = ARTIST_TRANSLATIONS[artistKey];
        if (translations.some(t => t.includes(q))) {
          artistMatch = true;
        }
      }
      return titleMatch || artistMatch;
    };
    
    if (titleQuery) {
      match = match && matchesSingle(titleQuery);
    }
    if (artistQuery) {
      match = match && matchesSingle(artistQuery);
    }
    
    return match;
  }).slice(0, 10);
  
  if (matches.length === 0) {
    box.style.display = 'none';
    return;
  }
  
  box.innerHTML = matches.map(s => `
    <div class="suggestion-item" onclick="selectSuggestion(${s.id})">
      <span class="suggestion-title">${s.emoji} ${s.title}</span>
      <span class="suggestion-artist">${s.artist}</span>
    </div>
  `).join('');
  box.style.display = 'block';
}

window.selectSuggestion = function(id) {
  const song = songs.find(s => s.id === id);
  if (song) {
    document.getElementById('custom-title').value = song.title;
    document.getElementById('custom-artist').value = song.artist;
    document.getElementById('suggestions-box').style.display = 'none';
    selectSong(song);
  }
}

function setupGlobalClickHandlers() {
  document.addEventListener('click', () => {
    const box = document.getElementById('suggestions-box');
    if (box) box.style.display = 'none';
    
    // 드롭다운 닫기
    const dropdown = document.getElementById('author-dropdown-content');
    if (dropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  });
}

// ── 커스텀 곡 추가 및 키워드 분석기 ──
window.addCustomSong = function() {
  const titleInput = document.getElementById('custom-title');
  const artistInput = document.getElementById('custom-artist');
  const title = titleInput.value.trim();
  const artist = artistInput.value.trim();
  
  if (!title || !artist) {
    alert("제목과 가수를 모두 입력해 주세요.");
    return;
  }
  
  // 이미 DB에 동일한 조합이 있는지 검사
  const existing = songs.find(s => 
    s.title.toLowerCase() === title.toLowerCase() && 
    s.artist.toLowerCase() === artist.toLowerCase()
  );
  
  if (existing) {
    selectSong(existing);
    return;
  }
  
  // 휴리스틱 분석을 통한 특징 벡터 생성
  const analyzedFeatures = analyzeCustomKeywords(title, artist);
  
  const customSong = {
    id: 9999, // 가상 ID
    title: title,
    artist: artist,
    genre: "커스텀 분석",
    emoji: "🎶",
    features: analyzedFeatures
  };
  
  selectSong(customSong);
}

function analyzeCustomKeywords(title, artist) {
  const combined = (title + " " + artist).toLowerCase();
  
  // 기본 남자아이돌 댄스팝 프로필
  let energy = 0.78;
  let valence = 0.70;
  let tempo = 0.65;
  let danceability = 0.82;
  let acousticness = 0.05;
  let loudness = 0.72;
  
  // 키워드 체크
  if (combined.includes('ballad') || combined.includes('발라드') || combined.includes('이별') || combined.includes('눈물') || combined.includes('rain') || combined.includes('비가') || combined.includes('봄날') || combined.includes('lonely') || combined.includes('별빛') || combined.includes('한숨') || combined.includes('소나기') || combined.includes('낙원')) {
    // 서정적인 발라드/R&B 프로필
    energy = 0.35;
    valence = 0.38;
    tempo = 0.38;
    danceability = 0.35;
    acousticness = 0.75;
    loudness = 0.35;
  } else if (combined.includes('run') || combined.includes('shock') || combined.includes('영웅') || combined.includes('nice') || combined.includes('아주') || combined.includes('god') || combined.includes('menu') || combined.includes('소리꾼') || combined.includes('thunderous') || combined.includes('crayon') || combined.includes('불타오르네') || combined.includes('cypher') || combined.includes('쩔어') || combined.includes('dna') || combined.includes('sherlock') || combined.includes('셜록')) {
    // 에너제틱 댄스/힙합 록 프로필
    energy = 0.93;
    valence = 0.75;
    tempo = 0.82;
    danceability = 0.88;
    acousticness = 0.01;
    loudness = 0.90;
  }
  
  return { energy, valence, tempo, danceability, acousticness, loudness };
}

// ── 곡 선택 메인 로직 ──
function selectSong(song) {
  selectedSong = song;
  
  // 락 풀기
  document.getElementById('sec2').classList.remove('locked');
  document.getElementById('sec3').classList.remove('locked');
  
  // 곡 정보 표시
  const infoBox = document.getElementById('selected-info');
  infoBox.innerHTML = `
    <div class="info-title-row">
      <span class="info-emoji">${song.emoji}</span>
      <div>
        <div class="info-title">${song.title}</div>
        <div class="info-artist">${song.artist} • ${song.genre}</div>
      </div>
    </div>
    <div class="info-desc">
      현재 선택된 기준 곡입니다. 이 곡을 바탕으로 두 개의 알고리즘이 각각 다른 관점에서 추천을 계산합니다.
    </div>
  `;
  
  // 차트 및 알고리즘 계산
  updateChart(song);
  calculateRecommendations(song);
}

// ── 차트 업데이트 ──
function updateChart(song) {
  const ctx = document.getElementById('radarChart').getContext('2d');
  const data = [
    song.features.energy,
    song.features.valence,
    song.features.tempo,
    song.features.danceability,
    song.features.acousticness,
    song.features.loudness
  ];
  
  if (radarChart) {
    radarChart.destroy();
  }
  
  radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['에너지', '밝기 (Valence)', '템포 (Tempo)', '댄서빌리티', '어쿠스틱', '음량 (Loudness)'],
      datasets: [{
        label: song.title,
        data: data,
        backgroundColor: 'rgba(250, 36, 60, 0.1)',
        borderColor: '#fa243c',
        borderWidth: 2,
        pointBackgroundColor: '#fa243c',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 1,
          ticks: {
            stepSize: 0.2,
            display: false
          },
          grid: {
            color: '#e5e5ea'
          },
          angleLines: {
            color: '#e5e5ea'
          },
          pointLabels: {
            font: {
              family: 'Noto Sans KR',
              size: 11,
              weight: 'bold'
            },
            color: '#1d1d1f'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// ── 거리 및 추천 계산 알고리즘 ──
function calculateRecommendations(baseSong) {
  const stdResults = [];
  const propResults = [];
  const logs = [];
  
  // 1. 모든 데이터베이스 대상 거리 계산
  songs.forEach(target => {
    if (target.id === baseSong.id) return; // 자기 자신 제외
    
    // (a) 단순 유클리드 거리 (Standard Euclidean Distance)
    let stdDist = Math.sqrt(
      Math.pow(baseSong.features.energy - target.features.energy, 2) +
      Math.pow(baseSong.features.valence - target.features.valence, 2) +
      Math.pow(baseSong.features.tempo - target.features.tempo, 2) +
      Math.pow(baseSong.features.danceability - target.features.danceability, 2) +
      Math.pow(baseSong.features.acousticness - target.features.acousticness, 2) +
      Math.pow(baseSong.features.loudness - target.features.loudness, 2)
    );
    
    // 1/2/3군 동등성 가중 밀착 적용 (같은 군일 경우 거리 35% 단축하여 우선 추천되도록 조절)
    if (baseSong.tier && target.tier && baseSong.tier === target.tier) {
      stdDist *= 0.65;
    }
    
    // 세대 동등성 가중 밀착 적용 (같은 세대일 경우 거리 추가 25% 단축)
    // 군 보정과 합산 시 같은 세대+같은 군이면 최대 51% 단축 효과
    if (baseSong.gen && target.gen && baseSong.gen > 0 && target.gen > 0 && baseSong.gen === target.gen) {
      stdDist *= 0.75;
    }
    
    // (b) 가중치 유클리드 거리 (Weighted Euclidean Distance)
    const propDist = Math.sqrt(
      WEIGHTS.energy * Math.pow(baseSong.features.energy - target.features.energy, 2) +
      WEIGHTS.valence * Math.pow(baseSong.features.valence - target.features.valence, 2) +
      WEIGHTS.tempo * Math.pow(baseSong.features.tempo - target.features.tempo, 2) +
      WEIGHTS.danceability * Math.pow(baseSong.features.danceability - target.features.danceability, 2) +
      WEIGHTS.acousticness * Math.pow(baseSong.features.acousticness - target.features.acousticness, 2) +
      WEIGHTS.loudness * Math.pow(baseSong.features.loudness - target.features.loudness, 2)
    );
    
    stdResults.push({ song: target, dist: stdDist });
    propResults.push({ song: target, dist: propDist });
    
    logs.push({
      song: target,
      std: stdDist,
      prop: propDist
    });
  });
  
  // ── (1) 기존 추천 알고리즘 정렬 및 추천 (가장 가까운 4곡) ──
  stdResults.sort((a, b) => a.dist - b.dist);
  const stdTop4 = stdResults.slice(0, 4);
  renderResults('result-standard', stdTop4, false);
  
  // ── (2) 취향 확장 알고리즘 계산 (가중치 + 필터버블 격리 범위 탐색) ──
  // 가로막혀 있는 거리 임계값 [0.30 ~ 0.75] 사이의 후보군을 필터링하여 '적당한 낯선 매력'을 유도
  let propCandidates = propResults.filter(r => r.dist >= EXPANSION_MIN_DIST && r.dist <= EXPANSION_MAX_DIST);
  
  // 만약 해당 범위 내 곡이 부족하다면 예외적으로 전체 범위로 확장
  if (propCandidates.length < 4) {
    propCandidates = [...propResults];
  }
  
  // 다양성 보장: 기존 추천 알고리즘(stdTop4)에 노출된 곡과 동일한 곡을 밀어내는 패널티 가산
  const stdTop4Names = stdTop4.map(r => r.song.title.toLowerCase());
  const sameGenrePenalty = 0.25; // 같은 장르에 패널티를 주어 취향을 강제 분산시킴
  const duplicatePenalty = 0.45; // 기존 최단거리 알고리즘 추천 곡에 패널티
  
  propCandidates = propCandidates.map(r => {
    let finalDist = r.dist;
    
    // (a) 동일 장르 분산 패널티
    if (r.song.genre === baseSong.genre) {
      finalDist += sameGenrePenalty;
    }
    // (b) 기존 알고리즘 추천 곡 중복 차단 패널티
    if (stdTop4Names.includes(r.song.title.toLowerCase())) {
      finalDist += duplicatePenalty;
    }
    
    return { ...r, finalDist };
  });
  
  // 최종적으로 패널티가 가미된 정렬 거리를 기준으로 4곡 선별
  propCandidates.sort((a, b) => a.finalDist - b.finalDist);
  const propTop4 = propCandidates.slice(0, 4);
  renderResults('result-proposed', propTop4, true);
  
  // 거리 계산 로그 리스트 렌더링
  renderLogs(logs, stdTop4, propTop4);
}

function renderResults(elementId, list, isProposed) {
  const container = document.getElementById(elementId);
  container.innerHTML = list.map((item, i) => {
    const song = item.song;
    const distanceVal = isProposed ? (item.finalDist || item.dist) : item.dist;
    const ytQuery = encodeURIComponent(`${song.artist} ${song.title}`);
    const ytUrl = `https://www.youtube.com/results?search_query=${ytQuery}`;
    return `
      <div class="feat-track">
        <div class="feat-left" onclick="loadRecommendedSong(${song.id})">
          <span class="feat-idx">${i + 1}</span>
          <div class="feat-info">
            <span class="feat-title">${song.emoji} ${song.title}</span>
            <span class="feat-artist">${song.artist} • ${song.genre}</span>
          </div>
        </div>
        <a class="yt-link-btn" href="${ytUrl}" target="_blank" rel="noopener" title="YouTube에서 듣기" onclick="event.stopPropagation()">▶</a>
        <span class="feat-dist">d=${distanceVal.toFixed(3)}</span>
      </div>
    `;
  }).join('');
}

window.loadRecommendedSong = function(id) {
  const song = songs.find(s => s.id === id);
  if (song) {
    selectSong(song);
  }
}

function renderLogs(logs, stdTop4, propTop4) {
  const container = document.getElementById('distance-log-list');
  const stdIds = stdTop4.map(r => r.song.id);
  const propIds = propTop4.map(r => r.song.id);
  
  // 가시성을 위해 상위 로그 일부만 섞어서 나열
  const displayLogs = logs.sort((a, b) => a.std - b.std).slice(0, 30);
  
  container.innerHTML = displayLogs.map(log => {
    const isStd = stdIds.includes(log.song.id) ? ' [기존 픽]' : '';
    const isProp = propIds.includes(log.song.id) ? ' [제안 픽]' : '';
    const classStr = isProp ? 'log-prop' : 'log-std';
    
    return `
      <li class="${classStr}">
        ${log.song.title} (${log.song.artist}):
        기존거리 = ${log.std.toFixed(4)}${isStd} |
        제안 가중거리 = ${log.prop.toFixed(4)}${isProp}
      </li>
    `;
  }).join('');
}

// ── 익명/이름 드롭다운 제어 ──
window.toggleDropdown = function(event) {
  event.stopPropagation();
  document.getElementById('author-dropdown-content').classList.toggle('show');
}

window.selectAuthorMode = function(mode, event) {
  if (event) event.stopPropagation();
  authorMode = mode;
  
  if (mode === 'anonymous') {
    authorName = '익명';
    document.getElementById('current-author-display').innerText = '익명';
  }
  document.getElementById('author-dropdown-content').classList.remove('show');
}

window.openNameModal = function(event) {
  if (event) event.stopPropagation();
  document.getElementById('author-dropdown-content').classList.remove('show');
  
  const modalInput = document.getElementById('modal-name-input');
  modalInput.value = (authorName !== '익명') ? authorName : '';
  
  document.getElementById('name-modal').style.display = 'flex';
  modalInput.focus();
}

window.closeNameModal = function() {
  document.getElementById('name-modal').style.display = 'none';
}

window.closeNameModalOnOverlay = function(event) {
  if (event.target.id === 'name-modal') {
    closeNameModal();
  }
}

window.saveNameFromModal = function() {
  const input = document.getElementById('modal-name-input');
  const name = input.value.trim();
  
  if (!name) {
    alert("이름을 입력해 주세요.");
    return;
  }
  
  authorName = name;
  authorMode = 'name';
  document.getElementById('current-author-display').innerText = name;
  closeNameModal();
}

// ── 공유 댓글 시스템 (JSONBlob — CORS 완벽 지원 + 답글) ──
function getTimestamp() {
  return new Date().toLocaleString('ko-KR', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });
}

window.addComment = function() {
  const input = document.getElementById('comment-input');
  const text = input.value.trim();
  if (!text) return;
  
  const submitBtn = document.querySelector('#sec4 .cs-btn');
  if (submitBtn) submitBtn.disabled = true;
  
  fetch(COMMENT_API, { headers: { 'Accept': 'application/json' } })
    .then(res => res.json())
    .then(comments => {
      if (!Array.isArray(comments)) comments = [];
      
      comments.unshift({
        id: Date.now(),
        author: authorName,
        text: text,
        date: getTimestamp(),
        replies: []
      });
      
      return fetch(COMMENT_API, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(comments)
      });
    })
    .then(() => {
      input.value = '';
      renderComments();
    })
    .catch(err => {
      console.error("Failed to add comment:", err);
      alert("댓글 등록에 실패했습니다. 네트워크 상태를 확인해주세요.");
    })
    .finally(() => {
      if (submitBtn) submitBtn.disabled = false;
    });
}

// 답글 입력창 토글
window.toggleReplyInput = function(commentId) {
  const existing = document.getElementById('reply-form-' + commentId);
  if (existing) {
    existing.remove();
    return;
  }
  
  // 다른 열린 답글 입력창 닫기
  document.querySelectorAll('.reply-form').forEach(el => el.remove());
  
  const commentItem = document.querySelector(`[data-comment-id="${commentId}"]`);
  if (!commentItem) return;
  
  const replyForm = document.createElement('div');
  replyForm.className = 'reply-form';
  replyForm.id = 'reply-form-' + commentId;
  replyForm.innerHTML = `
    <div class="reply-input-row">
      <div class="reply-author-wrapper">
        <div class="dropdown reply-dropdown" id="reply-dropdown-${commentId}">
          <button class="dropdown-btn" onclick="toggleReplyDropdown(event, ${commentId})">
            <span id="reply-author-display-${commentId}">${authorName}</span> <span class="arrow">∨</span>
          </button>
          <div class="dropdown-content" id="reply-dropdown-content-${commentId}">
            <button onclick="selectReplyAuthor('anonymous', ${commentId}, event)">익명</button>
            <button onclick="openReplyNameModal(${commentId}, event)">이름 설정</button>
          </div>
        </div>
      </div>
      <textarea class="reply-textarea" id="reply-input-${commentId}" placeholder="답글을 입력하세요..." rows="2"></textarea>
      <button class="reply-submit-btn" onclick="submitReply(${commentId})">답글</button>
    </div>
  `;
  commentItem.appendChild(replyForm);
  document.getElementById('reply-input-' + commentId).focus();
}

// 답글 드롭다운 토글
window.toggleReplyDropdown = function(e, commentId) {
  e.stopPropagation();
  const content = document.getElementById('reply-dropdown-content-' + commentId);
  if (content) content.classList.toggle('show');
}

// 답글 작성자 - 익명 선택
window.selectReplyAuthor = function(mode, commentId, e) {
  e.stopPropagation();
  authorName = '익명';
  authorMode = 'anonymous';
  const display = document.getElementById('reply-author-display-' + commentId);
  if (display) display.textContent = '익명';
  // 메인 댓글 드롭다운도 동기화
  const mainDisplay = document.getElementById('current-author-display');
  if (mainDisplay) mainDisplay.textContent = '익명';
  const content = document.getElementById('reply-dropdown-content-' + commentId);
  if (content) content.classList.remove('show');
}

// 답글 작성자 - 이름 설정 모달
let replyNameTargetId = null;
window.openReplyNameModal = function(commentId, e) {
  e.stopPropagation();
  replyNameTargetId = commentId;
  const content = document.getElementById('reply-dropdown-content-' + commentId);
  if (content) content.classList.remove('show');
  document.getElementById('name-modal').style.display = 'flex';
  document.getElementById('modal-name-input').focus();
}

// 기존 saveNameFromModal 오버라이드 (답글용도 지원)
const originalSaveName = window.saveNameFromModal || saveNameFromModal;
window.saveNameFromModal = function() {
  const input = document.getElementById('modal-name-input');
  const name = input.value.trim();
  if (!name) return;
  authorName = name;
  authorMode = 'name';
  // 메인 디스플레이 업데이트
  const mainDisplay = document.getElementById('current-author-display');
  if (mainDisplay) mainDisplay.textContent = name;
  // 답글 디스플레이도 업데이트
  if (replyNameTargetId !== null) {
    const replyDisplay = document.getElementById('reply-author-display-' + replyNameTargetId);
    if (replyDisplay) replyDisplay.textContent = name;
    replyNameTargetId = null;
  }
  closeNameModal();
}

// 답글 등록
window.submitReply = function(parentId) {
  const input = document.getElementById('reply-input-' + parentId);
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  
  const btn = input.parentElement.querySelector('.reply-submit-btn');
  if (btn) btn.disabled = true;
  
  fetch(COMMENT_API, { headers: { 'Accept': 'application/json' } })
    .then(res => res.json())
    .then(comments => {
      if (!Array.isArray(comments)) comments = [];
      
      const parent = comments.find(c => c.id === parentId);
      if (parent) {
        if (!Array.isArray(parent.replies)) parent.replies = [];
        parent.replies.push({
          id: Date.now(),
          author: authorName,
          text: text,
          date: getTimestamp()
        });
      }
      
      return fetch(COMMENT_API, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(comments)
      });
    })
    .then(() => {
      renderComments();
    })
    .catch(err => {
      console.error("Failed to add reply:", err);
      alert("답글 등록에 실패했습니다.");
    })
    .finally(() => {
      if (btn) btn.disabled = false;
    });
}

// ── 관리자 모드 (04 섹션 번호 3번 빠르게 클릭) ──
window.addEventListener('DOMContentLoaded', () => {
  const sec4Num = document.querySelector('#sec4 .sec-num');
  if (sec4Num) {
    sec4Num.style.cursor = 'pointer';
    sec4Num.addEventListener('click', () => {
      adminClickCount++;
      clearTimeout(adminClickTimer);
      adminClickTimer = setTimeout(() => { adminClickCount = 0; }, 800);
      if (adminClickCount >= 3) {
        adminClickCount = 0;
        adminMode = !adminMode;
        sec4Num.style.outline = adminMode ? '2px solid var(--accent)' : 'none';
        renderComments();
      }
    });
  }
});

// 댓글 개별 삭제
window.deleteComment = function(commentId) {
  if (!confirm('이 댓글을 삭제할까요?')) return;
  
  fetch(COMMENT_API, { headers: { 'Accept': 'application/json' } })
    .then(res => res.json())
    .then(comments => {
      if (!Array.isArray(comments)) return;
      const filtered = comments.filter(c => c.id !== commentId);
      return fetch(COMMENT_API, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(filtered)
      });
    })
    .then(() => renderComments())
    .catch(err => console.error('Delete failed:', err));
}

// 답글 개별 삭제
window.deleteReply = function(commentId, replyId) {
  if (!confirm('이 답글을 삭제할까요?')) return;
  
  fetch(COMMENT_API, { headers: { 'Accept': 'application/json' } })
    .then(res => res.json())
    .then(comments => {
      if (!Array.isArray(comments)) return;
      const parent = comments.find(c => c.id === commentId);
      if (parent && Array.isArray(parent.replies)) {
        parent.replies = parent.replies.filter(r => r.id !== replyId);
      }
      return fetch(COMMENT_API, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(comments)
      });
    })
    .then(() => renderComments())
    .catch(err => console.error('Delete reply failed:', err));
}

function renderComments() {
  fetch(COMMENT_API, { headers: { 'Accept': 'application/json' } })
    .then(res => res.json())
    .then(comments => {
      const listContainer = document.getElementById('comments-list');
      if (!Array.isArray(comments) || comments.length === 0) {
        listContainer.innerHTML = '<li style="color:var(--t3);text-align:center;font-size:0.85rem;padding:20px 0;">아직 댓글이 없습니다. 첫 댓글을 남겨보세요!</li>';
        return;
      }
      
      listContainer.innerHTML = comments.map(c => {
        const replies = Array.isArray(c.replies) ? c.replies : [];
        const delCommentBtn = adminMode ? `<button class="admin-delete-btn" onclick="deleteComment(${c.id})" title="댓글 삭제">✕</button>` : '';
        
        const repliesHtml = replies.length > 0 ? `
          <ul class="reply-list">
            ${replies.map(r => {
              const delReplyBtn = adminMode ? `<button class="admin-delete-btn small" onclick="deleteReply(${c.id},${r.id})" title="답글 삭제">✕</button>` : '';
              return `
              <li class="reply-item">
                <div class="comment-meta">
                  <span class="comment-author">${escapeHtml(r.author || '익명')}</span>
                  <span class="comment-date">${r.date || ''}</span>
                  ${delReplyBtn}
                </div>
                <div class="comment-text">${escapeHtml(r.text)}</div>
              </li>
            `}).join('')}
          </ul>
        ` : '';
        
        const replyCount = replies.length > 0 ? ` (${replies.length})` : '';
        
        return `
          <li class="comment-item" data-comment-id="${c.id}">
            <div class="comment-meta">
              <span class="comment-author">${escapeHtml(c.author || '익명')}</span>
              <span class="comment-date">${c.date || ''}</span>
              ${delCommentBtn}
            </div>
            <div class="comment-text">${escapeHtml(c.text)}</div>
            <button class="reply-toggle-btn" onclick="toggleReplyInput(${c.id})">💬 답글${replyCount}</button>
            ${repliesHtml}
          </li>
        `;
      }).join('');
    })
    .catch(err => {
      console.error("Failed to fetch comments:", err);
    });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
