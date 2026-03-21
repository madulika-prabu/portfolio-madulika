# Madulika — Portfolio

A personal portfolio website for Madulika, a Full Stack AI Engineer.

## 📁 Project Structure

```
madulika-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # All interactivity (cursor, animations, canvas, parade)
├── assets/
│   └── svg/
│       ├── peep-hero.svg   # Hero section character illustration
│       ├── peep-bike.svg   # Bike rider (experience canvas)
│       └── peep-team.svg   # Team illustration (experience detail)
└── README.md
```

## 🚀 Getting Started

Just open `index.html` in a browser — no build step needed. Pure HTML, CSS, JS.

For local development with proper font loading:
```bash
# Using Python
python -m http.server 8000

# Using Node
npx serve .
```

## 🎨 Customising

### Replace your photo
In `index.html`, find the `photo-wrap` div in the About section and replace the placeholder SVG:
```html
<img src="assets/your-photo.jpg" class="photo-circle" alt="Madulika">
```

### Replace SVG illustrations
Drop your SVG files into `assets/svg/` and update the `src` in `index.html`:
- **Hero peep** → `assets/svg/peep-hero.svg`
- **Team peep** → `assets/svg/peep-team.svg` (uncomment the `<img>` in the experience section)

### Update links
Search for `YOUR_USERNAME` and `YOUR_NUMBER` in `index.html` and replace with your real links.

### Update project cards
Edit the `.pcard` divs in `index.html` — each card has a title, description, tags, and GitHub/Demo links.

## 🌐 Deploy to GitHub Pages

1. Push this folder to a GitHub repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME`

## ✨ Features

- Custom animated cursor
- Blob parallax on mouse move
- Floating social icons with hover effects
- Dark / light theme toggle
- Scroll reveal animations
- Comic-panel About section
- Interactive Experience switcher
- Orbit canvas animation with bike rider
- Infinite character parade footer
- Fully responsive
