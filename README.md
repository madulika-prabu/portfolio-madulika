# ✦ Madulika — Personal Portfolio

> **Full Stack AI Engineer** · From backend logic to AI workflows, I turn ideas into live systems.

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit-536CFD?style=for-the-badge)](https://madulika-prabu.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-madulika--prabu-181717?style=for-the-badge&logo=github)](https://github.com/madulika-prabu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-madulikaps-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/madulikaps)
[![Medium](https://img.shields.io/badge/Blog-Medium-000000?style=for-the-badge&logo=medium)](https://medium.com/@madulikaprabusankar)

---

## 📸 Preview

| Home | Experience | Projects |
|------|-----------|---------|
| Hero with floating character card and social icons | 3-ring orbit system with tech stack icons | Interactive orbital + carousel project view |

---

## 🗂 Project Structure

```
portfolio/
├── index.html            
├── css/
│   └── style.css    
├── js/
│   └── main.js       
└── assets/
    ├── svg/
    │   ├── logo.svg                
    │   ├── peep-hero.svg            
    │   ├── peep-bike.svg           
    │   ├── peep-group.svg    
    │   ├── whatsapp.svg
    │   ├── linkedin.svg
    │   ├── medium.svg
    │   ├── icons/                   
    │   │   ├── tensorflow.svg
    │   │   ├── huggingface.svg
    │   │   ├── react.svg
    │   │   ├── python.svg
    │   │   ├── node.svg
    │   │   ├── langchain.svg
    │   │   ├── js.svg
    │   │   ├── css.svg
    │   │   ├── salesforce.svg
    │   │   ├── django.svg
    │   │   ├── next.svg
    │   │   ├── n8n.svg
    │   │   ├── jenkin.svg
    │   │   ├── express.svg
    │   │   ├── mongodb.svg
    │   │   └── git.svg
    └── png/
        ├── photo.png              
        ├── github.png
        └── gmail.png
```

---

## ✨ Features

### 🏠 Home
- Animated floating character card with social icon links orbiting around it
- Parallax blob background that follows the cursor
- Smooth scroll indicator

### 👩‍💻 About
- Photo card with name and bio
- Interest chips grid (Agentic AI, LLMs, Computer Vision, MLOps, and more)
- Featured blog previews linking to Medium
- "More on Medium" CTA button

### 💼 Experience
- 3 clickable experience cards with left accent bar and active indicator
- On hover/click — a glassmorphism popup appears with role details, dates, and bullet points
- 3-ring elliptical orbit system in the background with 17 tech stack icons distributed across rings
- Bike character sits in a glowing purple circle with decorative side arcs
- Canvas fades away when popup is active for a clean focused view

### 🚀 Projects
- **Orbital mode** — 6 project cards spinning on a 3D-tilted orbit; drag or scroll to spin; click a card for full details
- **Carousel mode** — centered card carousel with prev/next navigation and dot indicators
- Toggle button to switch between both views
- Popup with project title, description, tags, GitHub and Demo links

### 🎭 Parade
- Animated scrolling parade of diverse character illustrations

### 📬 Contact
- Quick-access links: Email, LinkedIn, GitHub, Medium, WhatsApp

### 🌙 Dark / Light Theme
- One-click theme toggle in the nav; persists across all sections

---

## 🛠 Tech Stack

This portfolio is **pure vanilla** — no frameworks, no build tools, no dependencies.

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, `cos()`/`sin()` in transforms, animations, backdrop-filter) |
| Logic | Vanilla JavaScript (Canvas API, IntersectionObserver, requestAnimationFrame) |
| Fonts | Google Fonts — Arizonia, Oleo Script, Caveat, DM Sans, Space Mono |
| Icons | SVG tech icons |

---

## 🚀 Getting Started

No build step needed — just open the file.

```bash
# Clone the repo
git clone https://github.com/madulika-prabu/portfolio.git
cd portfolio

# Open directly in browser
open index.html

# Or serve locally (recommended for font loading)
npx serve .
# or
python3 -m http.server 3000
```

Then visit `http://localhost:3000`.

---

## 📋 Customisation Guide

### Update your photo
Drop your photo at `assets/png/photo.png` (recommended: at least 400×500px, portrait crop).

### Update project details
In `js/main.js`, find the `PROJECTS` array near the top of the orbital section:

```js
const PROJECTS = [
  {
    n: '01',
    title: 'Your Project Name',
    desc: 'Short description of what it does.',
    tags: ['Python', 'FastAPI', 'NLP'],
    color: '#536CFD',
    gh: 'https://github.com/your-repo',
    live: 'https://your-demo-url.com'
  },
  // ...
];
```

### Update experience cards
In `js/main.js`, find the `ED` array:

```js
const ED = [
  {
    t: 'Your Role @ Company',
    p: 'Month Year — Present',
    b: [
      'What you did',
      'What you shipped',
      'What you learned'
    ],
    tech: ['🔧 Tool', '☁️ Cloud']
  },
  // ...
];
```

### Update contact links
All contact links are in `index.html` in the `#contact` section and the `#home` social icons.

### Add/remove tech orbit icons
In `index.html`, find the orbit icon blocks inside `<div class="orbit-system">` and add/remove `.oi` divs. Match the `--r` value to the ring you want:

| Ring | `--r` value | Capacity |
|------|------------|---------|
| Inner | `130px` | 4–5 icons |
| Middle | `280px` | 6–8 icons |
| Outer | `460px` | 7–10 icons |

### Blog posts
Update the 3 blog cards in the `#about` section of `index.html` — swap in real titles, descriptions, and `href` links to your actual Medium posts.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--blue` | `#536CFD` | Background (light mode) |
| `--blue2` | `#4055e0` | Accent |
| `--blob1` | `#c9aad8` | Hero gradient blob |
| `--card` | `rgba(255,255,255,0.13)` | Glass card fill |
| `--exp-card` | `rgba(75,85,200,0.65)` | Experience cards |
| `--detail` | `rgba(85,65,175,0.8)` | Detail panel |

Dark mode is toggled by setting `data-theme="dark"` on `<html>`, which overrides the CSS variables.

---

## 📱 Responsive

- Mobile-first breakpoints at `900px`
- About grid collapses to single column
- Hero stacks vertically
- Experience section stacks left panel above orbit

---

## 📄 License

MIT — feel free to fork, adapt, and make it your own. A credit link back is appreciated but not required.

---

<p align="center">Made with ✦ by <a href="https://github.com/madulika-prabu">Madulika Prabu Sankar</a></p>
