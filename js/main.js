/* ── CUSTOM CURSOR (desktop / fine pointer only) ── */
const cur = document.getElementById('cur');
const cr  = document.getElementById('cur-r');
if (cur && cr && window.matchMedia('(pointer:fine)').matches) {
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function animCursor() {
    cur.style.left = mx + 'px'; cur.style.top = my + 'px';
    rx += (mx - rx) * .11; ry += (my - ry) * .11;
    cr.style.left = rx + 'px'; cr.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  })();
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cr.style.width = '50px'; cr.style.height = '50px';
      cr.style.borderColor = 'rgba(255,255,255,.85)';
    });
    el.addEventListener('mouseleave', () => {
      cr.style.width = '34px'; cr.style.height = '34px';
      cr.style.borderColor = 'rgba(255,255,255,.5)';
    });
  });
}

/* ── NAV SCROLL EFFECT ── */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── MOBILE NAV ── */
const hamburger     = document.getElementById('hamburger');
const mobileDrawer  = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');

function openDrawer() {
  mobileDrawer.classList.add('open');
  drawerOverlay.classList.add('show');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('show');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', () =>
  mobileDrawer.classList.contains('open') ? closeDrawer() : openDrawer()
);
drawerOverlay.addEventListener('click', closeDrawer);
// expose globally so onclick= in HTML works
window.closeDrawer = closeDrawer;

/* ── THEME TOGGLE ── */
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  const icon = isDark ? '🌙' : '☀️';
  document.querySelectorAll('.theme-btn').forEach(b => b.textContent = icon);
}
document.getElementById('thBtn').addEventListener('click', toggleTheme);
const _tmob = document.getElementById('thBtnMob'); if(_tmob) _tmob.addEventListener('click', toggleTheme);
const _tdrw = document.getElementById('thBtnDrawer'); if(_tdrw) _tdrw.addEventListener('click', toggleTheme);

/* ── PARALLAX BLOB ── */
const arc = document.getElementById('heroArc');
if (arc && window.matchMedia('(pointer:fine)').matches) {
  let tbx = 0, tby = 0, bx = 0, by = 0;
  document.addEventListener('mousemove', e => {
    tbx = (e.clientX / window.innerWidth  - .5) * 40;
    tby = (e.clientY / window.innerHeight - .5) * 30;
  });
  (function animBlob() {
    bx += (tbx - bx) * .055;
    by += (tby - by) * .055;
    arc.style.transform = `translate(${bx}px,${by}px)`;
    requestAnimationFrame(animBlob);
  })();
}

/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver(
  es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('v'); }),
  { threshold: .08 }
);
document.querySelectorAll('.rev,.rev-l').forEach(el => obs.observe(el));

/* ── EXPERIENCE DATA ── */
const ED = [
  {
    t: 'Junior Consultant @ Springfive',
    p: 'Jul 2025 — Present',
    b: [
      'Built real-time API integrations using MuleSoft and MCP for enterprise sync across Salesforce, NetSuite, and Azure',
      'Deployed and monitored secure APIs with Windsurf and custom MuleSoft policies',
      'Wrote RAML specs and implemented full API lifecycle management',
      'Led RPA & IDP automation rollouts end-to-end to production',
      'CI/CD pipeline setup and management for Salesforce deployments'
    ],
    tech: ['🔗 MuleSoft','🌩️ Salesforce','☁️ Azure','🔄 CI/CD','📄 RAML','🤖 RPA/IDP','🔌 NetSuite','⚙️ MCP']
  },
  {
    t: 'Associate Engineer Intern @ Springfive',
    p: 'Mar 2025 — Jun 2025',
    b: [
      'Configured Salesforce end-to-end — from Flows and Apex code to full deployment pipelines',
      'Built LWC components and integrated them with Sitetracker for telecom milestone tracking',
      'Integrated MuleSoft with Salesforce, NetSuite, and IDP systems',
      'Automated report generation and milestone workflows for enterprise clients',
      'Earned Agentforce certification during this period'
    ],
    tech: ['⚙️ LWC','🌩️ Salesforce','🔗 MuleSoft','🏗️ Sitetracker','🎓 Agentforce Certified','🔄 Flows','✍️ Apex']
  },
  {
    t: 'AI Intern @ NIT Tiruchirappalli',
    p: 'Jun 2023 — Sept 2023',
    b: [
      'Implemented ML models for aquaponics automation — fish health and plant detection via computer vision',
      'Built real-time data visualization UI for prediction metrics',
      'Applied image classification and sensor fusion for smart agriculture'
    ],
    tech: ['🐍 Python','👁️ Computer Vision','🔬 PyTorch','🌿 AgriAI','📊 Streamlit']
  }
];

// function setExp(i) {
//   document.querySelectorAll('.ec').forEach((c, j) => c.classList.toggle('on', j === i));
//   const popup   = document.getElementById('expPopup');
//   const expRight= document.querySelector('.exp-right');
//   const d = ED[i];
//   document.getElementById('eTitle').textContent = d.t;
//   document.getElementById('ePer').textContent   = d.p;
//   const ul = document.getElementById('eBullets');
//   ul.innerHTML = '';
//   d.b.forEach((b, k) => {
//     const li = document.createElement('li');
//     li.textContent = b;
//     li.style.animationDelay = k * .07 + 's';
//     ul.appendChild(li);
//   });
//   if (popup) {
//     popup.classList.remove('active');
//     if (expRight) expRight.classList.add('popup-open');
//     requestAnimationFrame(() => requestAnimationFrame(() => popup.classList.add('active')));
//   }
// }
function setExp(i) {
  const isMobile = window.innerWidth <= 1024;
  document.querySelectorAll('.ec').forEach((c, j) => c.classList.toggle('on', j === i));

  if (isMobile) {
    // Expand inline detail inside the clicked card
    document.querySelectorAll('.ec').forEach((c, j) => {
      const detail = c.querySelector('.ec-mobile-detail');
      if (!detail) return;
      detail.style.display = (j === i) ? 'block' : 'none';
    });
    return; // never touch the desktop popup on mobile
  }

  if (i < 0) return;

  const popup    = document.getElementById('expPopup');
  const expRight = document.querySelector('.exp-right');
  const canvas   = document.getElementById('expCanvas');
  const d = ED[i];
  document.getElementById('eTitle').textContent = d.t;
  document.getElementById('ePer').textContent   = d.p;
  const ul = document.getElementById('eBullets');
  ul.innerHTML = '';
  d.b.forEach((b, k) => {
    const li = document.createElement('li');
    li.textContent = b;
    li.style.animationDelay = k * .07 + 's';
    ul.appendChild(li);
  });
  if (popup) {
    popup.classList.remove('active');
    if (expRight) expRight.classList.add('popup-open');
    if (canvas)   canvas.classList.add('faded');
    requestAnimationFrame(() => requestAnimationFrame(() => popup.classList.add('active')));
  }
}
/* ── EXPERIENCE INIT ── */
// Inject mobile inline detail into each .ec card
document.querySelectorAll('.ec').forEach((c, i) => {
  const d = ED[i];
  const detail = document.createElement('div');
  detail.className = 'ec-mobile-detail';
  detail.style.display = 'none';
  detail.innerHTML = `
    <ul>${d.b.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="techs">${d.tech.map(t => `<span class="tpill">${t}</span>`).join('')}</div>
  `;
  c.appendChild(detail);
});
setExp(0);

document.querySelectorAll('.ec').forEach((c, i) => {
  c.addEventListener('click', () => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) {
      // Toggle: if already open, close it; else open it
      const isOpen = c.classList.contains('on');
      setExp(isOpen ? -1 : i);
    } else {
      setExp(i);
    }
  });
  // Hover only on desktop
  c.addEventListener('mouseenter', () => {
    if (window.innerWidth > 1024) setExp(i);
  });
});
// document.getElementById('experience')?.addEventListener('mouseleave', () => {
//   document.getElementById('expPopup')?.classList.remove('active');
//   document.querySelector('.exp-right')?.classList.remove('popup-open');
// });
document.getElementById('experience')?.addEventListener('mouseleave', () => {
  document.getElementById('expPopup')?.classList.remove('active');
  document.querySelector('.exp-right')?.classList.remove('popup-open');
  document.getElementById('expCanvas')?.classList.remove('faded');  /* ADD THIS */
});

/* ── TECH LINES ── */
// function drawTechLines() {
//   const svg  = document.getElementById('techLines');
//   const icons= document.querySelectorAll('.ti img');
//   const bike = document.querySelector('.bike-img');
//   if (!svg || !bike || !icons.length) return;
//   svg.innerHTML = '';
//   const bikeRect = bike.getBoundingClientRect();
//   const svgRect  = svg.getBoundingClientRect();
//   const centerX  = bikeRect.left + bikeRect.width  / 2 - svgRect.left;
//   const centerY  = bikeRect.top  + bikeRect.height * 0.35 - svgRect.top;
//   icons.forEach(icon => {
//     const rect = icon.getBoundingClientRect();
//     const x    = rect.left + rect.width  / 2 - svgRect.left;
//     const y    = rect.bottom - svgRect.top;
//     const midY = (y + centerY) / 2;
//     const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     path.setAttribute('d', `M ${x} ${y} C ${x} ${midY}, ${centerX} ${midY}, ${centerX} ${centerY}`);
//     svg.appendChild(path);
//   });
// }
function drawTechLines() {
  const svg   = document.getElementById('techLines');
  const icons = document.querySelectorAll('.ti img');
  const bike  = document.querySelector('.bike-img');
  if (!svg || !bike || !icons.length) return;
  svg.innerHTML = '';
  const bikeRect = bike.getBoundingClientRect();
  const svgRect  = svg.getBoundingClientRect();
  const centerX  = bikeRect.left + bikeRect.width  / 2 - svgRect.left;
  const centerY  = bikeRect.top  + bikeRect.height * 0.35 - svgRect.top;

  icons.forEach(icon => {
    const rect = icon.getBoundingClientRect();
    const x    = rect.left + rect.width  / 2 - svgRect.left;
    const y    = rect.top  + rect.height / 2 - svgRect.top;  /* center not bottom */
    const midY = (y + centerY) / 2;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${x} ${y} C ${x} ${midY}, ${centerX} ${midY}, ${centerX} ${centerY}`);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'rgba(200,170,255,0.4)');
    path.setAttribute('stroke-width', '1.2');
    path.setAttribute('stroke-linecap', 'round');
    svg.appendChild(path);
  });
}
window.addEventListener('load', () => {
  drawTechLines();
  setTimeout(drawTechLines, 100);  /* ADD THIS — recalculates after layout settles */
});
window.addEventListener('resize', drawTechLines);

/* ── PARADE ── */
(function() {
  const track = document.getElementById('paradeTrack');
  if (!track) return;
  const C = [
    {h:'#111',s:'#f3b98a',t:'#222',a:'#536CFD'},
    {h:'#553300',s:'#f5c5a0',t:'#fff',a:'#25D366'},
    {h:'#111',s:'#7b5244',t:'#333',a:'#f5a623'},
    {h:'#222',s:'#f3b98a',t:'#536CFD',a:'#fff'},
    {h:'#664422',s:'#e8a87c',t:'#cc4444',a:'#ffd700'},
    {h:'#111',s:'#3d2b1f',t:'#fff',a:'#536CFD'},
    {h:'#224422',s:'#f0c090',t:'#224422',a:'#ff6b6b'},
    {h:'#333',s:'#f3b98a',t:'#660066',a:'#fff'},
    {h:'#111',s:'#fddbb4',t:'#1a1a2e',a:'#ff6b9d'},
    {h:'#2c1810',s:'#c68642',t:'#fff',a:'#00d4aa'},
    {h:'#111',s:'#ffe0bd',t:'#2d6a4f',a:'#ffd166'},
    {h:'#4a0e0e',s:'#d4a373',t:'#fff',a:'#06d6a0'},
  ];
  const P = [
    c => `<ellipse cx="50" cy="58" rx="18" ry="20" fill="${c.s}"/><ellipse cx="50" cy="42" rx="14" ry="12" fill="${c.h}"/><rect x="30" y="76" width="40" height="58" rx="10" fill="${c.t}"/><path d="M30 86 Q16 98 26 114" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/><path d="M70 86 Q84 98 74 114" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/><line x1="26" y1="98" x2="74" y2="98" stroke="${c.s}" stroke-width="8" stroke-linecap="round"/><ellipse cx="44" cy="58" rx="4" ry="4.5" fill="#111"/><ellipse cx="56" cy="58" rx="4" ry="4.5" fill="#111"/><path d="M44 68 Q50 74 56 68" stroke="#c05060" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    c => `<ellipse cx="50" cy="58" rx="18" ry="20" fill="${c.s}"/><ellipse cx="50" cy="40" rx="16" ry="14" fill="${c.h}"/><rect x="30" y="76" width="40" height="58" rx="10" fill="${c.t}"/><path d="M30 86 Q12 80 8 63" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/><path d="M70 86 Q88 96 80 114" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/><circle cx="8" cy="60" r="12" fill="${c.s}"/><ellipse cx="44" cy="58" rx="4" ry="4.5" fill="#111"/><ellipse cx="56" cy="58" rx="4" ry="4.5" fill="#111"/><path d="M46 69 Q50 73 54 69" stroke="#c05060" stroke-width="2" fill="none"/>`,
    c => `<ellipse cx="50" cy="58" rx="18" ry="20" fill="${c.s}"/><ellipse cx="50" cy="42" rx="16" ry="14" fill="${c.h}"/><rect x="30" y="76" width="40" height="58" rx="10" fill="${c.t}"/><path d="M30 86 Q20 100 32 118" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/><path d="M70 86 Q80 100 68 118" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/><rect x="30" y="112" width="30" height="20" rx="4" fill="${c.a}"/><ellipse cx="44" cy="56" rx="4" ry="4.5" fill="#111"/><ellipse cx="56" cy="56" rx="4" ry="4.5" fill="#111"/><path d="M44 67 Q50 72 56 67" stroke="#c05060" stroke-width="2" fill="none"/>`,
    c => `<ellipse cx="50" cy="58" rx="18" ry="20" fill="${c.s}"/><ellipse cx="50" cy="40" rx="15" ry="13" fill="${c.h}"/><rect x="30" y="76" width="40" height="58" rx="10" fill="${c.t}"/><path d="M30 86 Q22 108 35 126" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/><path d="M70 86 Q82 96 76 112" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/><rect x="60" y="106" width="20" height="16" rx="4" fill="${c.a}"/><ellipse cx="44" cy="56" rx="4" ry="4.5" fill="#111"/><ellipse cx="56" cy="56" rx="4" ry="4.5" fill="#111"/><path d="M46 67 Q50 71 54 67" stroke="#c05060" stroke-width="2" fill="none"/>`,
  ];
  for (let r = 0; r < 2; r++) {
    for (let i = 0; i < 12; i++) {
      const div  = document.createElement('div');
      div.className = 'pf';
      const c    = C[i % C.length];
      const body = P[i % P.length](c);
      div.innerHTML = `<svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
      track.appendChild(div);
    }
  }
})();

/* ── EXPERIENCE INIT ── */
// Inject mobile inline detail into each .ec card
document.querySelectorAll('.ec').forEach((c, i) => {
  const d = ED[i];
  const detail = document.createElement('div');
  detail.className = 'ec-mobile-detail';
  // Always start hidden via inline style — CSS handles mobile show/hide via .on
  detail.style.display = 'none';
  detail.innerHTML = `
    <ul>${d.b.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="techs">${d.tech.map(t => `<span class="tpill">${t}</span>`).join('')}</div>
  `;
  c.appendChild(detail);
});
setExp(0);

/* ── PROJECTS ORBITAL ── */
(function () {
  const CARD_COLORS = ['#8F87F1','#C68EFD','#E9A5F1','#BDA6CE','#9B8EC7','#C68EFD'];

  const PROJECTS = [
    { n:'01', title:'Multi-Agent Meeting Notes Generator',
      desc:'7-agent LangGraph system: transcribes audio, cleans, summarizes, extracts tasks, and self-reviews with conditional retry logic.',
      tags:['LangGraph','Whisper','LLaMA-3','Python'],
      color:CARD_COLORS[0], gh:'https://github.com/madulika-prabu/Multi-Agent_Meeting_Notes-Generator-Using-LangGraph', live:'#' },
    { n:'02', title:'Tesseract — AI Software Architect',
      desc:'7-agent autonomous system for the full software lifecycle: Plan → Architect → Code → Review → Improve → Test → Refactor.',
      tags:['LangGraph','AST','Python','Agents'],
      color:CARD_COLORS[1], gh:'https://github.com/madulika-prabu/tesseract', live:'#' },
    { n:'03', title:'Roo — Smart Budget Tracker',
      desc:'Full-stack app with Virtual Jars, expense splitting, real-time analytics, and AI-powered financial insights.',
      tags:['React','Django','MongoDB','TensorFlow'],
      color:CARD_COLORS[2], gh:'https://github.com/madulika-prabu/Roo', live:'#' },
    { n:'04', title:'FoundersPal — Startup Network',
      desc:'Platform connecting startups with investors, mentors, and hires via an AI recommendation engine.',
      tags:['React','Node.js','PostgreSQL','Python'],
      color:CARD_COLORS[3], gh:'https://github.com/madulika-prabu/FoundersPal', live:'#' },
    { n:'05', title:'Corelands — Real Estate Platform',
      desc:'SSR real estate marketplace with OTP auth, AI-generated property descriptions, admin approval flow, and SEO-optimised listings.',
      tags:['Next.js','Supabase','Claude API','Tailwind'],
      color:CARD_COLORS[4], gh:'https://github.com/madulika-prabu/Corelands', live:'#' },
    { n:'06', title:'Terravia — AI Bus Ticketing',
      desc:'Android app for dynamic bus rerouting and demand prediction using LSTM and reinforcement learning.',
      tags:['Android','Flask','LSTM','Firebase'],
      color:CARD_COLORS[5], gh:'https://github.com/madulika-prabu/terravia_', live:'#' },
    { n:'07', title:'Accenture Data Analytics Simulation',
      desc:'End-to-end data analysis simulation — cleaning, modelling, and storytelling with business insights.',
      tags:['Python','Pandas','Power BI','Tableau'],
      color:CARD_COLORS[0], gh:'https://github.com/madulika-prabu/Accenture-SocialBuzz-Job-Simulation', live:'#' },
    { n:'08', title:'SatisfAI — Customer Satisfaction Analyzer',
      desc:'Analyzes call recordings via audio diarization, speaker ID, speech-to-text & NLP to extract customer satisfaction insights.',
      tags:['IBM Watson','Python','Django','NLP'],
      color:CARD_COLORS[2], gh:'https://github.com/madulika-prabu/SatisfAI', live:'#' },
    { n:'09', title:'Personal Portfolio',
      desc:'Animated dev portfolio with orbital project viewer, parallax hero, interactive experience cards, tech orbit & character parade.',
      tags:['HTML','CSS','Canvas API','Vanilla JS'],
      color:CARD_COLORS[1], gh:'https://github.com/madulika-prabu/portfolio-madulika', live:'#' }
  ];

  const TILT       = 0.28;
  const CW = 170, CH = 170;
  const AUTO_SPEED = 0.0035;
  const rings = [{ items: PROJECTS, angle: 0 }];
  const vels  = [0];

  const canvas = document.getElementById('projCanvas');
  if (!canvas) return;
  const ctx  = canvas.getContext('2d');
  const wrap = document.getElementById('projWrap');

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = wrap.clientWidth  * dpr;
    canvas.height = wrap.clientHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  const W = () => wrap.clientWidth;
  const H = () => wrap.clientHeight;

  function hexAlpha(hex, a) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a})`;
  }
  function rrect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
    ctx.arcTo(x+w,y,x+w,y+r,r); ctx.lineTo(x+w,y+h-r);
    ctx.arcTo(x+w,y+h,x+w-r,y+h,r); ctx.lineTo(x+r,y+h);
    ctx.arcTo(x,y+h,x,y+h-r,r); ctx.lineTo(x,y+r);
    ctx.arcTo(x,y,x+r,y,r); ctx.closePath();
  }

  function drawCard(p, cx, cy, orbAngle, sc, alpha, hovered) {
    const w = CW * sc, h = CH * sc;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(orbAngle);
    ctx.globalAlpha = Math.max(0.52, alpha);
    ctx.shadowColor   = hovered ? p.color : hexAlpha(p.color, 0.55);
    ctx.shadowBlur    = hovered ? 52 * sc : 24 * sc;
    ctx.shadowOffsetY = 4 * sc;
    rrect(-w/2,-h/2,w,h,14*sc);
    ctx.fillStyle = hovered ? hexAlpha(p.color,0.88) : hexAlpha(p.color,0.68);
    ctx.fill();
    ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
    ctx.strokeStyle = hovered ? '#fff' : hexAlpha(p.color,0.95);
    ctx.lineWidth   = hovered ? 2.5 : 1.8;
    ctx.stroke();
    rrect(-w/2,-h/2,w,5*sc,4*sc);
    ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.fill();
    ctx.rotate(-orbAngle);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `700 ${34*sc}px DM Sans,sans-serif`;
    ctx.fillStyle = 'rgba(255,255,255,0.13)';
    ctx.fillText(p.n, 0, -h*0.14);
    ctx.font = `700 ${13*sc}px DM Sans,sans-serif`;
    ctx.fillStyle = '#fff';
    const words = p.title.split(' ');
    let lines = [], line = '';
    words.forEach(word => {
      const test = line ? line+' '+word : word;
      if (ctx.measureText(test).width > w*0.80 && line) { lines.push(line); line = word; }
      else line = test;
    });
    if (line) lines.push(line);
    lines.forEach((l,i) => ctx.fillText(l, 0, h*0.08 + i*16*sc));
    ctx.restore();
  }

  let hitCards    = [];
  let hoveredCard = null;

  function draw() {
    const w = W(), h = H();
    ctx.clearRect(0, 0, w, h);
    const cx = w/2, cy = h/2 - 80; 
    const maxRx = w/2 - CW/2 - 20;
    const rx = Math.min(w * 0.40, maxRx);
    const ry = rx * TILT;
    hitCards = [];
    const toRender = [];
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6,12]);
    ctx.stroke();
    ctx.setLineDash([]);
    rings.forEach(ring => {
      const n = ring.items.length;
      ring.items.forEach((p, ci) => {
        const angle = ring.angle + (Math.PI*2/n)*ci;
        const px = cx + Math.cos(angle)*rx;
        const py = cy + Math.sin(angle)*ry;
        const depth = (Math.sin(angle)+1)/2;
        const sc    = 0.62 + 0.48*depth;
        const alpha = 0.55 + 0.45*depth;
        toRender.push({p,px,py,angle,sc,alpha,depth});
      });
    });
    toRender.sort((a,b) => a.depth-b.depth);
    toRender.forEach(({p,px,py,angle,sc,alpha}) => {
      const hovered = hoveredCard === p;
      drawCard(p,px,py,angle,sc,alpha,hovered);
      hitCards.push({p,x:px,y:py,hw:(CW*sc)/2+8,hh:(CH*sc)/2+8});
    });
  }

  let orbitRAF = null;
  let dragging = false;

  function tick() {
    rings.forEach((ring,ri) => { ring.angle += AUTO_SPEED+vels[ri]; vels[ri] *= 0.92; });
    draw();
    orbitRAF = requestAnimationFrame(tick);
  }

  canvas.addEventListener('mousedown', e => { dragging = true; e.preventDefault(); });
  window.addEventListener('mouseup',   () => { dragging = false; });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    vels[0] += e.movementX * 0.007;
  });
  canvas.addEventListener('wheel', e => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) * 0.6) {
      e.preventDefault();
      vels[0] += e.deltaX * 0.002;
    }
  }, { passive: false });

  let lastTX = 0;
  canvas.addEventListener('touchstart', e => { lastTX = e.touches[0].clientX; }, { passive:true });
  canvas.addEventListener('touchmove',  e => {
    const dx = e.touches[0].clientX - lastTX;
    if (Math.abs(dx) > 6) { vels[0] += dx*0.007; lastTX = e.touches[0].clientX; }
  }, { passive:true });

  canvas.addEventListener('mousemove', e => {
    if (dragging) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    let found = null;
    for (let i = hitCards.length-1; i >= 0; i--) {
      const c = hitCards[i];
      if (mx >= c.x-c.hw && mx <= c.x+c.hw && my >= c.y-c.hh && my <= c.y+c.hh) { found = c.p; break; }
    }
    hoveredCard = found;
    canvas.style.cursor = found ? 'pointer' : 'grab';
  });
  canvas.addEventListener('mouseleave', e => {
    // Don't reset if the mouse moved to the toggle button (avoids flickering)
    if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.view-toggle-btn, .car-nav-btn, .car-nav-wrap')) return;
    hoveredCard = null;
  });

  /* Project popup */
  const overlay  = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  function openPopup(p) {
    document.getElementById('pAccent').style.background = p.color;
    document.getElementById('pNum').textContent   = p.n;
    document.getElementById('pTitle').textContent = p.title;
    document.getElementById('pDesc').textContent  = p.desc;
    document.getElementById('pTags').innerHTML = p.tags.map(t =>
      `<span class="popup-tag" style="background:${hexAlpha(p.color,0.28)};border:1px solid ${hexAlpha(p.color,0.7)};color:#fff;font-size:13px;padding:5px 14px;border-radius:20px">${t}</span>`
    ).join('');
    document.getElementById('pLinks').innerHTML = `
      <a href="${p.gh}" target="_blank" rel="noopener" class="popup-link gh">GitHub ↗</a>
      ${p.live !== '#' ? `<a href="${p.live}" target="_blank" rel="noopener" class="popup-link" style="background:${p.color};color:#fff">Live Demo ↗</a>` : ''}
    `;
    overlay.classList.add('show');
  }
  closeBtn.addEventListener('click', () => overlay.classList.remove('show'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('show'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.classList.remove('show'); });

  canvas.addEventListener('click', e => {
    if (dragging) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    for (let i = hitCards.length-1; i >= 0; i--) {
      const c = hitCards[i];
      if (mx >= c.x-c.hw && mx <= c.x+c.hw && my >= c.y-c.hh && my <= c.y+c.hh) { openPopup(c.p); return; }
    }
  });

  // Touch tap on canvas for popup
  let touchMoved = false;
  canvas.addEventListener('touchstart', () => { touchMoved = false; }, { passive:true });
  canvas.addEventListener('touchmove',  () => { touchMoved = true;  }, { passive:true });
  canvas.addEventListener('touchend', e => {
    if (touchMoved) return;
    const touch = e.changedTouches[0];
    const rect = canvas.getBoundingClientRect();
    const mx = touch.clientX - rect.left, my = touch.clientY - rect.top;
    for (let i = hitCards.length-1; i >= 0; i--) {
      const c = hitCards[i];
      if (mx >= c.x-c.hw && mx <= c.x+c.hw && my >= c.y-c.hh && my <= c.y+c.hh) { openPopup(c.p); return; }
    }
  });

  /* View toggle: orbital ↔ carousel */
  const toggleBtn   = document.getElementById('viewToggleBtn');
  const centerLabel = document.getElementById('centerLabel');
  const dragHint    = document.getElementById('dragHint');
  const carWrap     = document.getElementById('carWrap');
  const prevBtn     = document.getElementById('carPrev');
  const nextBtn     = document.getElementById('carNext');

  let carouselMode = false;
  let carIdx       = 0;
  let carRAF       = null;
  const CCW = 300, CCH = 360;
  let carOffset    = 0;
  let carTargetOff = 0;

  function carIdxToOffset(idx) { return idx * (CCW + 32); }

  function drawCarousel() {
    if (!carouselMode) return;
    const w = W(), h = H();
    ctx.clearRect(0, 0, w, h);
    const cx = w/2, cy = h/2 - 20;
    carOffset += (carTargetOff - carOffset) * 0.10;

    PROJECTS.forEach((p, i) => {
      const cardCenter   = carIdxToOffset(i);
      const relX         = cardCenter - carOffset;
      const distFromCenter = relX / (CCW + 32);
      if (Math.abs(distFromCenter) > 1.7) return;
      const sc    = 1 - Math.abs(distFromCenter) * 0.20;
      const alpha = 1 - Math.abs(distFromCenter) * 0.45;
      const cw = CCW * sc, ch = CCH * sc;
      const xPos = cx + relX * 0.90;
      ctx.save();
      ctx.translate(xPos, cy);
      ctx.globalAlpha = Math.max(0.3, alpha);
      ctx.shadowColor = hexAlpha(p.color, 0.4);
      ctx.shadowBlur  = Math.abs(distFromCenter) < 0.1 ? 48 : 14;
      rrect(-cw/2,-ch/2,cw,ch,18*sc);
      ctx.fillStyle = Math.abs(distFromCenter) < 0.1 ? hexAlpha(p.color,0.85) : hexAlpha(p.color,0.58);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = Math.abs(distFromCenter) < 0.1 ? '#fff' : hexAlpha(p.color,0.8);
      ctx.lineWidth = Math.abs(distFromCenter) < 0.1 ? 2.5 : 1;
      ctx.stroke();
      rrect(-cw/2,-ch/2,cw,6*sc,4*sc);
      ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.fill();
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = `700 ${80*sc}px DM Sans,sans-serif`;
      ctx.fillStyle = 'rgba(255,255,255,0.09)';
      ctx.fillText(p.n, 0, -ch*0.08);
      ctx.font = `700 ${19*sc}px DM Sans,sans-serif`;
      ctx.fillStyle = '#fff';
      const tw = p.title.split(' ');
      let tlines = [], tl = '';
      tw.forEach(word => {
        const test = tl ? tl+' '+word : word;
        if (ctx.measureText(test).width > cw*0.78 && tl) { tlines.push(tl); tl = word; }
        else tl = test;
      });
      if (tl) tlines.push(tl);
      tlines.forEach((l,li) => ctx.fillText(l, 0, -ch*0.13 + li*24*sc));
      if (Math.abs(distFromCenter) < 0.15) {
        ctx.font = `400 ${12*sc}px DM Sans,sans-serif`;
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        const dwords = p.desc.split(' ');
        let dlines = [], dl = '';
        dwords.forEach(word => {
          const test = dl ? dl+' '+word : word;
          if (ctx.measureText(test).width > cw*0.76 && dl) { dlines.push(dl); dl = word; }
          else dl = test;
        });
        if (dl) dlines.push(dl);
        dlines.slice(0,3).forEach((l,li) => ctx.fillText(l, 0, ch*0.07 + li*17*sc));
      }
      if (Math.abs(distFromCenter) < 0.7) {
        let tagX = -cw/2 + 14*sc;
        const tagY = ch/2 - 46*sc;
        p.tags.forEach(tag => {
          ctx.font = `500 ${11*sc}px DM Sans,sans-serif`;
          const tw2 = ctx.measureText(tag).width + 20*sc;
          if (tagX + tw2 > cw/2 - 10*sc) return;
          rrect(tagX, tagY, tw2, 22*sc, 11*sc);
          ctx.fillStyle = 'rgba(255,255,255,0.22)'; ctx.fill();
          ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 1; ctx.stroke();
          ctx.fillStyle = '#fff';
          ctx.fillText(tag, tagX+tw2/2, tagY+11*sc);
          tagX += tw2 + 8*sc;
        });
      }
      ctx.restore();
    });

    // Dot indicators
    const dotY = cy + CCH/2 + 38;
    PROJECTS.forEach((_,i) => {
      ctx.beginPath();
      ctx.arc(cx + (i-(PROJECTS.length-1)/2)*22, dotY, i === carIdx ? 5.5 : 3.5, 0, Math.PI*2);
      ctx.fillStyle = i === carIdx ? '#fff' : 'rgba(255,255,255,0.3)';
      ctx.globalAlpha = 1;
      ctx.fill();
    });
    carRAF = requestAnimationFrame(drawCarousel);
  }

  function goTo(idx) {
    carIdx = (idx + PROJECTS.length) % PROJECTS.length;
    carTargetOff = carIdxToOffset(carIdx);
  }
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(carIdx-1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(carIdx+1));

  // Drag in carousel
  let carDragStart = null;
  canvas.addEventListener('mousedown', e => { if (carouselMode) carDragStart = e.clientX; });
  canvas.addEventListener('mousemove', e => {
    if (!carouselMode || carDragStart === null) return;
    carTargetOff = carIdxToOffset(carIdx) - (e.clientX - carDragStart) * 1.2;
  });
  canvas.addEventListener('mouseup', e => {
    if (!carouselMode || carDragStart === null) return;
    const dx = e.clientX - carDragStart;
    if (dx < -60) goTo(carIdx+1);
    else if (dx > 60) goTo(carIdx-1);
    else carTargetOff = carIdxToOffset(carIdx);
    carDragStart = null;
  });
  let carTouchStart = null;
  canvas.addEventListener('touchstart', e => { if (carouselMode) carTouchStart = e.touches[0].clientX; }, { passive:true });
  canvas.addEventListener('touchmove',  e => {
    if (!carouselMode || carTouchStart === null) return;
    carTargetOff = carIdxToOffset(carIdx) - (e.touches[0].clientX - carTouchStart) * 1.2;
  }, { passive:true });
  canvas.addEventListener('touchend',   e => {
    if (!carouselMode || carTouchStart === null) return;
    const dx = e.changedTouches[0].clientX - carTouchStart;
    if (dx < -50) goTo(carIdx+1);
    else if (dx > 50) goTo(carIdx-1);
    else carTargetOff = carIdxToOffset(carIdx);
    carTouchStart = null;
  });
  canvas.addEventListener('wheel', e => {
    if (!carouselMode) return;
    e.preventDefault();
    if (e.deltaY > 30 || e.deltaX > 30) goTo(carIdx+1);
    if (e.deltaY < -30 || e.deltaX < -30) goTo(carIdx-1);
  }, { passive: false });
  document.addEventListener('keydown', e => {
    if (!carouselMode) return;
    if (e.key === 'ArrowRight') goTo(carIdx+1);
    if (e.key === 'ArrowLeft')  goTo(carIdx-1);
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      carouselMode = !carouselMode;
      if (carouselMode) {
        if (orbitRAF) { cancelAnimationFrame(orbitRAF); orbitRAF = null; }
        centerLabel.style.display = 'none';
        dragHint.style.display    = 'none';
        if (carWrap) carWrap.style.display = 'flex';
        toggleBtn.textContent = '⟳  Orbital View';
        carOffset    = carIdxToOffset(carIdx);
        carTargetOff = carOffset;
        if (!carRAF) drawCarousel();
      } else {
        if (carRAF) { cancelAnimationFrame(carRAF); carRAF = null; }
        centerLabel.style.display = 'block';
        dragHint.style.display    = 'block';
        if (carWrap) carWrap.style.display = 'none';
        toggleBtn.textContent = '⊞  Carousel View';
        if (!orbitRAF) tick();
      }
    });
  }

  tick();
})();