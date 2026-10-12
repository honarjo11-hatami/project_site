# Base44 Setup Notes

## Project Overview
Static HTML/CSS/JS website — a Persian (Farsi, RTL) educational site about web design ("وب کده"). No backend, no database, no build step.

## Structure
- `index.html` — homepage
- `*.html` — course pages (html, css, javascript, jquery, bootstrap, wordpress), about, contact
- `css/style.css` — site styles
- `js/script.js` — site JavaScript
- `images/` — image assets
- `files/` — course materials (notes, PDFs, exercises)

## Running
Served as static files by nginx (in `docker-compose.base44.yml`) on host port 3000. No dependencies, no credentials, no migrations.

## Verification
Open `http://localhost:3000/` — the homepage should render with RTL Persian content, navigation, and course cards.
