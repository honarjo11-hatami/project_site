# هنرستان حاتمی — وب‌سایت

## Overview
Static HTML/CSS/JS website (Persian, RTL) for هنرستان فنی و حرفه‌ای دولتی حاتمی ورزنه.

## Tech Stack
- Pure HTML/CSS/JS (no framework, no build step)
- Vazirmatn font via CDN
- Served by nginx in Docker

## Structure
- `index.html` — Home page (hero, features, about, majors, works, stats, news, CTA)
- `about.html` — About the school (intro, values, team, facilities, gallery)
- `majors.html` — All 8 majors listing
- `major-detail.html?id=N` — Individual major page (loads by query param)
- `student-works.html` — Student works gallery with filters, search, pagination
- `student-detail.html?id=N` — Individual student profile
- `news.html` — News listing with category filter and search
- `news-detail.html?id=N` — Individual news article
- `contact.html` — Contact info + validated contact form
- `admin.html` — Admin panel mockup (login + dashboard)
- `css/style.css` — Complete design system (navy/gold, RTL, responsive)
- `js/data.js` — All sample data (majors, students, news, icons)
- `js/components.js` — Shared header/footer, mobile nav, helpers

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
Site available at http://localhost:3000

## Notes
- All data is sample/placeholder (نمونه) and editable
- Admin panel is a front-end mockup; real CRUD needs a backend
- Contact form validates client-side; real email sending needs server config
- No external secrets required
