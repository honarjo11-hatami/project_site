/* ===== Shared Header & Footer Components ===== */

function renderHeader(activePage) {
  const navItems = [
    { label: 'صفحه اصلی', href: 'index.html', key: 'home' },
    {
      label: 'درباره هنرستان', key: 'about', href: 'about.html',
      children: [
        { label: 'معرفی هنرستان', href: 'about.html' },
        { label: 'اهداف و چشم‌انداز', href: 'about.html#vision' },
        { label: 'کادر مدیریت و هنرآموزان', href: 'about.html#team' },
        { label: 'امکانات و کارگاه‌ها', href: 'about.html#facilities' }
      ]
    },
    {
      label: 'رشته‌های تحصیلی', key: 'majors', href: 'majors.html',
      children: MAJORS.map(m => ({ label: m.title, href: `major-detail.html?id=${m.id}` }))
    },
    {
      label: 'آثار هنرجویان', key: 'works', href: 'student-works.html',
      children: MAJORS.map(m => ({ label: `آثار رشته ${m.title}`, href: `student-works.html?major=${m.id}` }))
    },
    { label: 'اخبار و اطلاعیه‌ها', href: 'news.html', key: 'news' },
    { label: 'افتخارات و فعالیت‌ها', href: 'index.html#stats', key: 'honors' },
    { label: 'ارتباط با ما', href: 'contact.html', key: 'contact' }
  ];

  const navHtml = navItems.map(item => {
    const isActive = item.key === activePage ? 'active' : '';
    if (item.children) {
      return `<li class="nav-item">
        <a class="nav-link ${isActive}" href="${item.href}">${item.label}
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="dropdown-menu">
          ${item.children.map(c => `<a href="${c.href}">${c.label}</a>`).join('')}
        </div>
      </li>`;
    }
    return `<li class="nav-item">
      <a class="nav-link ${isActive}" href="${item.href}">${item.label}</a>
    </li>`;
  }).join('');

  const mobileNavHtml = navItems.map(item => {
    if (item.children) {
      return `<li class="mobile-nav-item">
        <a class="mobile-nav-link" href="${item.href}" data-toggle="sub-${item.key}">
          ${item.label}
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="mobile-submenu" id="sub-${item.key}">
          ${item.children.map(c => `<a href="${c.href}">${c.label}</a>`).join('')}
        </div>
      </li>`;
    }
    return `<li class="mobile-nav-item">
      <a class="mobile-nav-link" href="${item.href}">${item.label}</a>
    </li>`;
  }).join('');

  return `
  <!-- Top Bar -->
  <div class="topbar">
    <div class="container">
      <div class="topbar-info">
        <span>${ICONS.location} ورزنه، استان اصفهان</span>
        <span>${ICONS.phone} ${SCHOOL.phone}</span>
        <span>${ICONS.mail} ${SCHOOL.email}</span>
      </div>
      <div class="topbar-links">
        <a href="admin.html">پنل مدیریت</a>
        <a href="admin.html">ورود هنرآموزان</a>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="header" id="siteHeader">
    <div class="container header-inner">
      <a href="index.html" class="logo-wrap">
        <div class="logo-icon">${ICONS.graduation}</div>
        <div class="logo-text">
          <h1>هنرستان حاتمی</h1>
          <p>${SCHOOL.department}</p>
        </div>
      </a>
      <nav class="main-nav">
        <ul style="display:flex;align-items:center;gap:4px;">${navHtml}</ul>
        <a href="index.html#cta" class="btn btn-gold" style="margin-right:12px;">ثبت‌نام و پذیرش</a>
      </nav>
      <button class="hamburger" id="hamburgerBtn" aria-label="منو">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Nav -->
  <div class="overlay" id="navOverlay"></div>
  <nav class="mobile-nav" id="mobileNav">
    <div class="mobile-nav-header">
      <div class="logo-wrap">
        <div class="logo-icon" style="width:40px;height:40px;">${ICONS.graduation}</div>
        <div class="logo-text">
          <h1 style="font-size:15px;">هنرستان حاتمی</h1>
          <p>ورزنه، اصفهان</p>
        </div>
      </div>
      <button class="mobile-nav-close" id="mobileNavClose">✕</button>
    </div>
    <ul>${mobileNavHtml}</ul>
    <a href="index.html#cta" class="btn btn-gold">ثبت‌نام و پذیرش</a>
  </nav>
  `;
}

function renderFooter() {
  const year = new Intl.DateTimeFormat('fa-IR', { year: 'numeric' }).format(new Date());
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-about">
            <div class="logo-icon">${ICONS.graduation}</div>
            <div>
              <h3>هنرستان حاتمی</h3>
              <p>${SCHOOL.department}</p>
            </div>
          </div>
          <p class="footer-desc">هنرستان فنی و حرفه‌ای دولتی حاتمی ورزنه، با هدف پرورش استعدادها و تقویت مهارت‌های تخصصی هنرجویان دختر در محیطی پویا و خلاق فعالیت می‌کند.</p>
          <div class="footer-social">
            <a href="#" aria-label="اینستاگرام">${ICONS.instagram}</a>
            <a href="#" aria-label="تلگرام">${ICONS.telegram}</a>
            <a href="#" aria-label="فیسبوک">${ICONS.facebook}</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>لینک‌های سریع</h4>
          <ul>
            <li><a href="index.html">صفحه اصلی</a></li>
            <li><a href="about.html">درباره هنرستان</a></li>
            <li><a href="majors.html">رشته‌های تحصیلی</a></li>
            <li><a href="student-works.html">آثار هنرجویان</a></li>
            <li><a href="news.html">اخبار</a></li>
            <li><a href="contact.html">ارتباط با ما</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>خدمات</h4>
          <ul>
            <li><a href="index.html#cta">راهنمای ثبت‌نام</a></li>
            <li><a href="news.html">تقویم آموزشی</a></li>
            <li><a href="news.html">اطلاعیه‌ها</a></li>
            <li><a href="about.html#facilities">معرفی کارگاه‌ها</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>ارتباط با ما</h4>
          <div class="footer-contact-item">${ICONS.location}<span>${SCHOOL.address}</span></div>
          <div class="footer-contact-item">${ICONS.phone}<span>${SCHOOL.phone}</span></div>
          <div class="footer-contact-item">${ICONS.mail}<span>${SCHOOL.email}</span></div>
          <div class="footer-contact-item">${ICONS.clock}<span>${SCHOOL.officeHours}</span></div>
        </div>
        <div class="footer-col">
          <h4>خبرنامه</h4>
          <p class="footer-desc" style="margin-bottom:12px;">برای دریافت اطلاعیه‌ها و اخبار هنرستان عضو خبرنامه شوید.</p>
          <div class="footer-newsletter">
            <form onsubmit="event.preventDefault(); this.querySelector('input').value=''; this.querySelector('button').innerHTML='✓';">
              <input type="email" placeholder="ایمیل شما" required>
              <button type="submit">${ICONS.send}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <p>هنرستان فنی و حرفه‌ای دولتی حاتمی ورزنه | تمامی حقوق محفوظ است. ${year}</p>
        <p>طراحی و توسعه با عشق برای هنرجویان حاتمی</p>
      </div>
    </div>
  </footer>
  `;
}

/* ===== Init Header/Footer + Mobile Nav ===== */
function initComponents(activePage) {
  const headerSlot = document.getElementById('header-slot');
  const footerSlot = document.getElementById('footer-slot');
  if (headerSlot) headerSlot.innerHTML = renderHeader(activePage);
  if (footerSlot) footerSlot.innerHTML = renderFooter();

  // Mobile nav
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('navOverlay');
  const closeBtn = document.getElementById('mobileNavClose');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.add('active');
      mobileNav.classList.add('open');
      overlay.classList.add('show');
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      overlay.classList.remove('show');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  // Mobile submenu toggles
  document.querySelectorAll('.mobile-nav-link[data-toggle]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const subId = link.dataset.toggle;
      const sub = document.getElementById(subId);
      if (sub) sub.classList.toggle('open');
      const chevron = link.querySelector('.chevron');
      if (chevron) chevron.style.transform = sub && sub.classList.contains('open') ? 'rotate(180deg)' : '';
    });
  });

  // Sticky header shrink
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(15,23,42,.1)';
      } else {
        header.style.boxShadow = '';
      }
    });
  }

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ===== Helper: get URL param ===== */
function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

/* ===== Helper: Persian number ===== */
function toPersian(num) {
  return String(num).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}
