/* ===== CURSOR ===== */
const cur = document.getElementById('cur');
const cr  = document.getElementById('cur-r');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animCursor() {
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
  rx += (mx - rx) * .11; ry += (my - ry) * .11;
  cr.style.left = rx + 'px'; cr.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
})();
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => { cr.style.width = '50px'; cr.style.height = '50px'; cr.style.borderColor = 'rgba(255,255,255,.85)'; });
  el.addEventListener('mouseleave', () => { cr.style.width = '34px'; cr.style.height = '34px'; cr.style.borderColor = 'rgba(255,255,255,.5)'; });
});

/* ===== THEME ===== */
document.getElementById('thBtn').addEventListener('click', function() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  this.textContent = isDark ? '🌙' : '☀️';
});

/* ===== PARALLAX BLOB ===== */
const arc = document.getElementById('heroArc');
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

/* ===== SCROLL REVEAL ===== */
const obs = new IntersectionObserver(
  es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('v'); }),
  { threshold: .1 }
);
document.querySelectorAll('.rev,.rev-l').forEach(el => obs.observe(el));

/* ===== EXPERIENCE SWITCHER ===== */
const ED = [
  {
    t: 'Associate Engineer @ Springfive',
    p: 'Jul 2025 — Present',
    b: [
      'Shipped RPA & IDP automations to production',
      'Delivered end-to-end Salesforce–MuleSoft integrations with CI/CD and UI components using LWC',
      'Built APIs connecting Azure, Salesforce, and NetSuite'
    ],
    tech: ['🌩️ Salesforce','🔗 MuleSoft','☁️ Azure','⚙️ LWC','🔄 CI/CD']
  },
  {
    t: 'Intern @ Springfive',
    p: 'Mar 2025 — Jun 2025',
    b: [
      'Built AI agents using MuleSoft and MCP',
      'Developed server-side and client-side MCP components',
      'Contributed to Sitetracker workflows and configurations'
    ],
    tech: ['🔗 MuleSoft','🤖 MCP','⚙️ Sitetracker','🧩 Agents']
  },
  {
    t: 'AI Intern @ NITT',
    p: 'May 2024 — Jul 2024',
    b: [
      'Built ML models for aquaponics-based fish and plant health monitoring',
      'Worked on food detection and soil nutrient detection using AI',
      'Focused on applied AI for smart agriculture systems'
    ],
    tech: ['🐍 Python','👁️ CV','🌿 AgriAI','🔬 Research']
  }
];

function setExp(i) {
  document.querySelectorAll('.ec').forEach((c, j) => c.classList.toggle('on', j === i));
  const popup = document.getElementById('expPopup');
  const d = ED[i];

  document.getElementById('eTitle').textContent = d.t;
  document.getElementById('ePer').textContent = d.p;
  const ul = document.getElementById('eBullets');
  ul.innerHTML = '';
  d.b.forEach((b, k) => {
    const li = document.createElement('li');
    li.textContent = b;
    li.style.animationDelay = k * .07 + 's';
    ul.appendChild(li);
  });

  // Spring pop animation — scale from 0 then bounce to 1
  if (popup) {
    popup.classList.remove('active');
    requestAnimationFrame(() => requestAnimationFrame(() => popup.classList.add('active')));
  }
}

// Click AND hover both trigger
document.querySelectorAll('.ec').forEach((c, i) => {
  c.addEventListener('click', () => setExp(i));
  c.addEventListener('mouseenter', () => setExp(i));
});

// Hide popup when not hovering experience section
document.getElementById('experience')?.addEventListener('mouseleave', () => {
  document.getElementById('expPopup')?.classList.remove('active');
});
document.querySelectorAll('.ec').forEach((c, i) => c.addEventListener('click', () => setExp(i)));

/* ===== BICYCLE + ORBIT CANVAS ===== */


/* ===== PARADE ===== */
(function() {
  const track = document.getElementById('paradeTrack');
  if (!track) return;

  const C = [
    {h:'#111',  s:'#f3b98a', t:'#222',    a:'#536CFD'},
    {h:'#553300',s:'#f5c5a0',t:'#fff',    a:'#25D366'},
    {h:'#111',  s:'#7b5244', t:'#333',    a:'#f5a623'},
    {h:'#222',  s:'#f3b98a', t:'#536CFD', a:'#fff'},
    {h:'#664422',s:'#e8a87c',t:'#cc4444', a:'#ffd700'},
    {h:'#111',  s:'#3d2b1f', t:'#fff',    a:'#536CFD'},
    {h:'#224422',s:'#f0c090',t:'#224422', a:'#ff6b6b'},
    {h:'#333',  s:'#f3b98a', t:'#660066', a:'#fff'},
    {h:'#111',  s:'#fddbb4', t:'#1a1a2e', a:'#ff6b9d'},
    {h:'#2c1810',s:'#c68642',t:'#fff',    a:'#00d4aa'},
    {h:'#111',  s:'#ffe0bd', t:'#2d6a4f', a:'#ffd166'},
    {h:'#4a0e0e',s:'#d4a373',t:'#fff',    a:'#06d6a0'},
  ];

  const P = [
    c => `<ellipse cx="50" cy="58" rx="18" ry="20" fill="${c.s}"/>
          <ellipse cx="50" cy="42" rx="14" ry="12" fill="${c.h}"/>
          <rect x="30" y="76" width="40" height="58" rx="10" fill="${c.t}"/>
          <path d="M30 86 Q16 98 26 114" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M70 86 Q84 98 74 114" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/>
          <line x1="26" y1="98" x2="74" y2="98" stroke="${c.s}" stroke-width="8" stroke-linecap="round"/>
          <ellipse cx="44" cy="58" rx="4" ry="4.5" fill="#111"/>
          <ellipse cx="56" cy="58" rx="4" ry="4.5" fill="#111"/>
          <path d="M44 68 Q50 74 56 68" stroke="#c05060" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    c => `<ellipse cx="50" cy="58" rx="18" ry="20" fill="${c.s}"/>
          <ellipse cx="50" cy="40" rx="16" ry="14" fill="${c.h}"/>
          <rect x="30" y="76" width="40" height="58" rx="10" fill="${c.t}"/>
          <path d="M30 86 Q12 80 8 63" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M70 86 Q88 96 80 114" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/>
          <circle cx="8" cy="60" r="12" fill="${c.s}"/>
          <ellipse cx="44" cy="58" rx="4" ry="4.5" fill="#111"/>
          <ellipse cx="56" cy="58" rx="4" ry="4.5" fill="#111"/>
          <path d="M46 69 Q50 73 54 69" stroke="#c05060" stroke-width="2" fill="none"/>`,
    c => `<ellipse cx="50" cy="58" rx="18" ry="20" fill="${c.s}"/>
          <ellipse cx="50" cy="42" rx="16" ry="14" fill="${c.h}"/>
          <rect x="30" y="76" width="40" height="58" rx="10" fill="${c.t}"/>
          <path d="M30 86 Q20 100 32 118" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M70 86 Q80 100 68 118" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/>
          <rect x="30" y="112" width="30" height="20" rx="4" fill="${c.a}"/>
          <ellipse cx="44" cy="56" rx="4" ry="4.5" fill="#111"/>
          <ellipse cx="56" cy="56" rx="4" ry="4.5" fill="#111"/>
          <path d="M44 67 Q50 72 56 67" stroke="#c05060" stroke-width="2" fill="none"/>`,
    c => `<ellipse cx="50" cy="58" rx="18" ry="20" fill="${c.s}"/>
          <ellipse cx="50" cy="40" rx="15" ry="13" fill="${c.h}"/>
          <rect x="30" y="76" width="40" height="58" rx="10" fill="${c.t}"/>
          <path d="M30 86 Q22 108 35 126" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M70 86 Q82 96 76 112" stroke="${c.s}" stroke-width="14" stroke-linecap="round" fill="none"/>
          <rect x="60" y="106" width="20" height="16" rx="4" fill="${c.a}"/>
          <ellipse cx="44" cy="56" rx="4" ry="4.5" fill="#111"/>
          <ellipse cx="56" cy="56" rx="4" ry="4.5" fill="#111"/>
          <path d="M46 67 Q50 71 54 67" stroke="#c05060" stroke-width="2" fill="none"/>`,
  ];

  for (let r = 0; r < 2; r++) {
    for (let i = 0; i < 12; i++) {
      const div = document.createElement('div');
      div.className = 'pf';
      const c = C[i % C.length];
      const body = P[i % P.length](c);
      div.innerHTML = `<svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
      track.appendChild(div);
    }
  }
})();
setExp(0);
/* ===== EXPERIENCE TECH CONNECTION LINES ===== */

function drawTechLines(){

  const svg = document.getElementById("techLines");
  const icons = document.querySelectorAll(".ti img");
  const bike = document.querySelector(".bike-img");

  if(!svg || !bike) return;

  svg.innerHTML = "";

  const bikeRect = bike.getBoundingClientRect();
  const svgRect = svg.getBoundingClientRect();

  const centerX = bikeRect.left + bikeRect.width/2 - svgRect.left;
  const centerY = bikeRect.top + bikeRect.height*0.35 - svgRect.top;

  icons.forEach(icon => {

    const rect = icon.getBoundingClientRect();

    const x = rect.left + rect.width/2 - svgRect.left;
    const y = rect.bottom - svgRect.top;

    const midY = (y + centerY) / 2;

    const path = document.createElementNS("http://www.w3.org/2000/svg","path");

    path.setAttribute(
      "d",
      `M ${x} ${y}
       C ${x} ${midY},
         ${centerX} ${midY},
         ${centerX} ${centerY}`
    );

    svg.appendChild(path);

  });
}

window.addEventListener("load", drawTechLines);
window.addEventListener("resize", drawTechLines);
