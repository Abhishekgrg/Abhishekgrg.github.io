/* ============================================================
   Abhishek Garg — Excel-Themed Portfolio
   script.js — data fetch, rendering & interactions
   Content lives in data/portfolio.json (GitHub Pages friendly).
   ============================================================ */
(function () {
  'use strict';

  /* ------------------------------------------------------------
     Site configuration — edit here
  ------------------------------------------------------------ */
  var SITE_CONFIG = {
    linkedinUrl: '', // add your LinkedIn profile URL here, e.g. "https://www.linkedin.com/in/..."
    email: 'abrgarg0302@gmail.com',
    phone: '+91 7014850962',
    cvPath: 'cv/Abhishek_Garg_CV_Final.pdf',
    profilePhoto: 'assets/profile/abhishek-profile.jpg',
    profilePlaceholder: 'assets/profile/abhishek-placeholder.svg'
  };

  /* ------------------------------------------------------------
     Small helpers
  ------------------------------------------------------------ */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function icon(name, extra) {
    return '<svg class="icon ' + (extra || '') + '" aria-hidden="true" focusable="false">' +
      '<use href="#i-' + name + '"></use></svg>';
  }

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------
     State
  ------------------------------------------------------------ */
  var DATA = null;
  var viewState = { grid: true, compact: false, focus: false };
  var searchResults = [];
  var searchActive = -1;

  var SECTIONS = ['home', 'kpis', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
  var COLS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];

  /* ------------------------------------------------------------
     Boot
  ------------------------------------------------------------ */
  function boot() {
    fetch('data/portfolio.json', { credentials: 'same-origin' })
      .then(function (res) {
        if (!res.ok) { throw new Error('HTTP ' + res.status); }
        return res.json();
      })
      .then(function (json) {
        DATA = json;
        renderAll();
        initAll();
      })
      .catch(function (err) {
        var banner = $('#data-error');
        if (banner) { banner.hidden = false; }
        if (window.console) { console.error('portfolio.json failed to load:', err); }
      });
  }

  /* ------------------------------------------------------------
     Rendering
  ------------------------------------------------------------ */
  function renderAll() {
    renderProfile();
    renderStats();
    renderAbout();
    renderTimeline();
    renderProjects();
    renderToolkit();
    renderSkills();
    renderAchievements();
    renderSheetTabs();
    applyContactConfig();
  }

  function renderProfile() {
    var p = DATA.profile;
    var heading = $('#hero-heading');
    if (heading) {
      heading.innerHTML = 'Hey, I\u2019m<br><span class="hero-name">' + esc(p.name) + '.</span>';
    }
    var desc = $('#hero-description');
    if (desc) { desc.textContent = p.heroDescription; }
    var eyebrow = $('#hero-eyebrow');
    if (eyebrow) { eyebrow.textContent = p.eyebrow; }
    var role = $('#meta-role-text');
    if (role) { role.textContent = p.role + ' at ' + p.company; }
    var loc = $('#meta-location-text');
    if (loc) { loc.textContent = p.location; }
    var avail = $('#meta-availability-text');
    if (avail) { avail.textContent = p.availability; }
    var brand = $('#brand-mark');
    if (brand) {
      brand.innerHTML = esc(p.initials.replace(/\./g, '')) + '<span class="brand-dot">.</span>';
    }
    var statusCompany = $('#status-company');
    if (statusCompany) { statusCompany.textContent = 'Currently at ' + p.company; }
    var statusLoc = $('#status-location');
    if (statusLoc) { statusLoc.textContent = p.location; }
    var formula = $('#formula-text');
    if (formula) { formula.textContent = p.tagline; }
    var img = $('#profile-img');
    if (img) {
      img.onerror = function () {
        img.onerror = null;
        img.src = SITE_CONFIG.profilePlaceholder;
      };
      img.src = SITE_CONFIG.profilePhoto;
      img.alt = 'Portrait of ' + p.name;
    }
    document.title = p.name + ' | ' + p.role;
  }

  function renderStats() {
    var grid = $('#kpi-grid');
    if (!grid) { return; }
    grid.innerHTML = DATA.stats.map(function (s, i) {
      return '' +
        '<article class="kpi-cell reveal" style="--reveal-delay:' + (i * 70) + 'ms">' +
        '<span class="kpi-cellref" aria-hidden="true">' + esc(s.cell) + '</span>' +
        '<div class="kpi-icon">' + icon(s.icon) + '</div>' +
        '<div class="kpi-value" data-target="' + esc(s.value) + '" data-suffix="' + esc(s.suffix) + '">0' + esc(s.suffix) + '</div>' +
        '<div class="kpi-label">' + esc(s.label) + '</div>' +
        '</article>';
    }).join('');
  }

  function renderAbout() {
    var about = DATA.about;
    var body = $('#about-body');
    if (body) {
      body.innerHTML = about.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    }
    var cards = $('#about-cards');
    if (cards) {
      cards.innerHTML = about.cards.map(function (c, i) {
        return '' +
          '<article class="about-card reveal" style="--reveal-delay:' + (i * 70) + 'ms">' +
          '<div class="card-icon">' + icon(c.icon) + '</div>' +
          '<h3>' + esc(c.title) + '</h3>' +
          '<p>' + esc(c.body) + '</p>' +
          '<span class="tag tag-green">' + esc(c.tag) + '</span>' +
          '</article>';
      }).join('');
    }
  }

  function renderTimeline() {
    var wrap = $('#timeline');
    if (!wrap) { return; }
    wrap.innerHTML = DATA.timeline.map(function (t) {
      var logo = t.logo ? '<span class="tl-logo" aria-hidden="true">' + esc(t.logo) + '</span>' : '';
      var points = (t.points || []).map(function (pt) {
        return '<li>' + icon('check', 'li-icon') + '<span>' + esc(pt) + '</span></li>';
      }).join('');
      return '' +
        '<article class="tl-item reveal ' + (t.type === 'education' ? 'tl-education' : '') + '">' +
        '<div class="tl-marker">' + icon(t.icon) + '</div>' +
        '<div class="tl-card">' +
        '<div class="tl-head">' +
        '<span class="tl-period">' + icon('calendar') + esc(t.period) + '</span>' +
        logo +
        '</div>' +
        '<h3>' + esc(t.title) + '</h3>' +
        '<p class="tl-sub">' + esc(t.subtitle) + '</p>' +
        (points ? '<ul class="tl-points">' + points + '</ul>' : '') +
        '</div>' +
        '</article>';
    }).join('');

    var certs = $('#certs-list');
    if (certs) {
      certs.innerHTML = DATA.certifications.map(function (c) {
        return '<li class="cert-chip">' + icon('shield') + '<span>' + esc(c) + '</span></li>';
      }).join('');
    }
  }

  function workflowSVG() {
    var steps = ['Input', 'Validation', 'Billing', 'Review', 'Invoice'];
    var w = 132, gap = 36, x0 = 14, y = 34, h = 44;
    var parts = [];
    steps.forEach(function (s, i) {
      var x = x0 + i * (w + gap);
      parts.push('<rect class="wf-box" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8"/>');
      parts.push('<text class="wf-label" x="' + (x + w / 2) + '" y="' + (y + h / 2 + 1) + '" text-anchor="middle" dominant-baseline="middle">' + s + '</text>');
      if (i < steps.length - 1) {
        var ax = x + w + 6, ay = y + h / 2;
        parts.push('<path class="wf-arrow" d="M' + ax + ' ' + ay + ' h' + (gap - 12) + '"/>');
        parts.push('<path class="wf-arrow-head" d="M' + (ax + gap - 12) + ' ' + (ay - 5) + ' l7 5 l-7 5"/>');
      }
    });
    return '<svg class="wf-diagram" viewBox="0 0 760 112" role="img" aria-label="Workflow: Input, Validation, Billing, Review, Invoice">' + parts.join('') + '</svg>';
  }

  function renderProjects() {
    var grid = $('#projects-grid');
    if (!grid) { return; }
    grid.innerHTML = DATA.projects.map(function (pr, i) {
      var impact = '';
      if (pr.impact) {
        impact = '<div class="impact-chip">' + icon('trending-down') +
          '<strong>' + esc(pr.impact.value) + '</strong><span>' + esc(pr.impact.label) + '</span></div>';
      }
      var diagram = pr.diagram === 'workflow' ? workflowSVG() : '';
      var outcomes = (pr.outcomes || []).map(function (o) {
        return '<li>' + icon('check', 'li-icon') + '<span>' + esc(o) + '</span></li>';
      }).join('');
      return '' +
        '<article class="project-card reveal" style="--reveal-delay:' + (i * 90) + 'ms">' +
        '<div class="project-top">' +
        '<span class="tag tag-gold">' + esc(pr.tag) + '</span>' +
        (pr.impact ? impact : '') +
        '</div>' +
        '<h3>' + esc(pr.title) + '</h3>' +
        '<p>' + esc(pr.description) + '</p>' +
        (diagram) +
        (outcomes ? '<ul class="outcome-list">' + outcomes + '</ul>' : '') +
        '</article>';
    }).join('');
  }

  function renderToolkit() {
    var grid = $('#tools-grid');
    if (!grid) { return; }
    grid.innerHTML = DATA.toolkit.map(function (t, i) {
      return '' +
        '<article class="tool-card reveal" style="--reveal-delay:' + (i * 60) + 'ms">' +
        '<div class="tool-icon">' + icon(t.icon) + '</div>' +
        '<h3>' + esc(t.name) + '</h3>' +
        '<p>' + esc(t.category) + '</p>' +
        '</article>';
    }).join('');
  }

  function renderSkills() {
    var chips = $('#skills-chips');
    if (chips) {
      chips.innerHTML = DATA.skills.map(function (s) {
        return '<li class="skill-chip">' + esc(s) + '</li>';
      }).join('');
    }
  }

  function renderAchievements() {
    var grid = $('#achievements-grid');
    if (!grid) { return; }
    grid.innerHTML = DATA.achievements.map(function (a, i) {
      return '' +
        '<article class="award-card reveal" style="--reveal-delay:' + (i * 90) + 'ms">' +
        '<div class="award-trophy">' + icon('trophy') + '</div>' +
        '<div class="award-head"><h3>' + esc(a.title) + '</h3>' +
        '<span class="award-date">' + icon('calendar') + esc(a.date) + '</span></div>' +
        '<p>' + esc(a.description) + '</p>' +
        '<a class="text-link" href="mailto:' + esc(SITE_CONFIG.email) +
        '?subject=' + encodeURIComponent('Certificate request — ' + a.title + ' ' + a.date) + '">View certificate ' +
        icon('arrow-right') + '</a>' +
        '</article>';
    }).join('');
  }

  function renderSheetTabs() {
    var tabs = $('#sheet-tabs');
    if (!tabs) { return; }
    var defs = [
      { label: 'About Me', hash: '#about' },
      { label: 'Experience', hash: '#experience' },
      { label: 'Projects', hash: '#projects' },
      { label: 'Skills', hash: '#skills' },
      { label: 'Achievements', hash: '#achievements' },
      { label: 'Contact', hash: '#contact' }
    ];
    tabs.innerHTML = defs.map(function (d) {
      return '<a class="sheet-tab" href="' + d.hash + '" data-sheet="' + d.hash + '">' + esc(d.label) + '</a>';
    }).join('') +
      '<button class="sheet-tab sheet-tab-add" type="button" title="New sheets coming soon" aria-label="Add sheet (coming soon)">' + icon('plus') + '</button>';
    $all('.sheet-tab', tabs).forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        if (tab.dataset.sheet) { e.preventDefault(); goToSection(tab.dataset.sheet); }
      });
    });
  }

  function applyContactConfig() {
    var email = SITE_CONFIG.email;
    $all('[data-cv-link]').forEach(function (a) {
      a.setAttribute('href', SITE_CONFIG.cvPath);
      a.setAttribute('download', '');
    });
    var btnEmail = $('#btn-email');
    if (btnEmail) { btnEmail.setAttribute('href', 'mailto:' + email); }
    var heroConnect = $('#btn-hero-connect');
    if (heroConnect) { heroConnect.setAttribute('href', '#contact'); }
    var phoneLink = $('#contact-phone-link');
    if (phoneLink) {
      phoneLink.setAttribute('href', 'tel:' + SITE_CONFIG.phone.replace(/[^+\d]/g, ''));
      phoneLink.textContent = SITE_CONFIG.phone;
    }
    var emailText = $('#contact-email-text');
    if (emailText) {
      emailText.textContent = email;
      emailText.setAttribute('href', 'mailto:' + email);
    }
    var li = $('#btn-linkedin');
    if (li) {
      if (SITE_CONFIG.linkedinUrl) {
        li.setAttribute('href', SITE_CONFIG.linkedinUrl);
        li.setAttribute('target', '_blank');
        li.setAttribute('rel', 'noopener noreferrer');
      } else {
        li.setAttribute('href', '#contact');
        li.setAttribute('aria-disabled', 'true');
        li.setAttribute('title', 'LinkedIn URL not configured yet — set it in script.js (SITE_CONFIG)');
        li.classList.add('is-disabled');
        li.addEventListener('click', function (e) {
          if (!SITE_CONFIG.linkedinUrl) { e.preventDefault(); }
        });
      }
    }
  }

  /* ------------------------------------------------------------
     Section navigation, scroll-spy, formula bar
  ------------------------------------------------------------ */
  function goToSection(hash, flash) {
    var target = $(hash);
    if (!target) { return; }
    target.scrollIntoView({
      behavior: reduceMotion.matches ? 'auto' : 'smooth',
      block: 'start'
    });
    if (history.replaceState) { history.replaceState(null, '', hash); }
    if (flash) { flashSection(target); }
  }

  function flashSection(el) {
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
    window.setTimeout(function () { el.classList.remove('flash'); }, 1800);
  }

  function setActiveSection(id) {
    $all('.nav-link').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
    $all('.sheet-tab[data-sheet]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-sheet') === '#' + id);
    });
    $all('.bottom-link[data-section]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-section') === id);
    });
    var idx = SECTIONS.indexOf(id);
    if (idx >= 0) {
      var nameBox = $('#name-box');
      if (nameBox) { nameBox.textContent = COLS[idx] + (idx + 1); }
      var formula = $('#formula-text');
      if (formula && DATA.formulas[id]) { formula.textContent = DATA.formulas[id]; }
    }
  }

  function initScrollSpy() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { setActiveSection(entry.target.id); }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    SECTIONS.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { observer.observe(el); }
    });
  }

  function initReveal() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    $all('.reveal').forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------
     KPI counters
  ------------------------------------------------------------ */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduceMotion.matches) {
      el.textContent = target + suffix;
      return;
    }
    var duration = 1000;
    var start = null;
    function frame(ts) {
      if (start === null) { start = ts; }
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) { window.requestAnimationFrame(frame); }
    }
    window.requestAnimationFrame(frame);
  }

  function initCounters() {
    var grid = $('#kpi-grid');
    if (!grid) { return; }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $all('.kpi-value', grid).forEach(animateCounter);
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(grid);
  }

  /* ------------------------------------------------------------
     Ribbon
  ------------------------------------------------------------ */
  var panelActions = {
    file: function () {
      return '' +
        '<p class="panel-title">' + icon('file-text') + 'File</p>' +
        '<a class="panel-action" data-cv-link href="' + SITE_CONFIG.cvPath + '">' + icon('download') + 'Download CV</a>' +
        '<a class="panel-action" href="mailto:' + SITE_CONFIG.email + '">' + icon('mail') + 'Email Abhishek</a>' +
        '<button class="panel-action" type="button" data-panel-go="#home">' + icon('home') + 'Back to top</button>';
    },
    insert: function () {
      return '' +
        '<p class="panel-title">' + icon('plus') + 'Insert</p>' +
        '<button class="panel-action" type="button" data-panel-go="#home">' + icon('home') + 'Go to hero</button>' +
        '<button class="panel-action" type="button" data-panel-go="#projects">' + icon('folder') + 'Open projects</button>' +
        '<button class="panel-action" type="button" data-panel-go="#achievements">' + icon('trophy') + 'View achievements</button>' +
        '<a class="panel-action" data-cv-link href="' + SITE_CONFIG.cvPath + '">' + icon('download') + 'Download CV</a>';
    },
    formulas: function () {
      return '' +
        '<p class="panel-title">' + icon('sigma') + 'Formulas</p>' +
        '<div class="formula-chips">' +
        DATA.ribbonFormulas.map(function (f) {
          return '<button class="formula-chip" type="button" data-panel-go="' + esc(f.hash) + '">' + esc(f.formula) + '</button>';
        }).join('') +
        '</div>' +
        '<p class="panel-note">Portfolio metaphors — not real financial calculations.</p>';
    },
    view: function () {
      return '' +
        '<p class="panel-title">' + icon('eye') + 'View</p>' +
        '<button class="panel-toggle" type="button" role="switch" aria-checked="' + viewState.grid + '" data-view="grid">' +
        '<span>' + icon('table') + 'Gridlines</span><span class="switch" aria-hidden="true"></span></button>' +
        '<button class="panel-toggle" type="button" role="switch" aria-checked="' + viewState.compact + '" data-view="compact">' +
        '<span>' + icon('filter') + 'Compact mode</span><span class="switch" aria-hidden="true"></span></button>' +
        '<button class="panel-toggle" type="button" role="switch" aria-checked="' + viewState.focus + '" data-view="focus">' +
        '<span>' + icon('eye') + 'Focus mode</span><span class="switch" aria-hidden="true"></span></button>';
    }
  };

  function closePanel() {
    var panel = $('#ribbon-panel');
    if (panel) { panel.hidden = true; }
    $all('.ribbon-btn').forEach(function (b) { b.classList.remove('open'); });
  }

  function openPanel(name, btn) {
    var panel = $('#ribbon-panel');
    var content = $('#ribbon-panel-content');
    if (!panel || !content || !panelActions[name]) { return; }
    content.innerHTML = panelActions[name]();
    panel.hidden = false;
    var left = btn ? btn.offsetLeft : 12;
    var maxLeft = window.innerWidth - panel.offsetWidth - 16;
    panel.style.left = Math.max(8, Math.min(left, maxLeft)) + 'px';
    $all('.ribbon-btn').forEach(function (b) { b.classList.toggle('open', b === btn); });
    wirePanel(panel);
  }

  function wirePanel(panel) {
    $all('[data-panel-go]', panel).forEach(function (el) {
      el.addEventListener('click', function () {
        closePanel();
        goToSection(el.getAttribute('data-panel-go'));
      });
    });
    $all('.panel-toggle', panel).forEach(function (t) {
      t.addEventListener('click', function () {
        var key = t.getAttribute('data-view');
        viewState[key] = !viewState[key];
        applyViewState();
        t.setAttribute('aria-checked', String(viewState[key]));
      });
    });
  }

  function applyViewState() {
    document.body.classList.toggle('no-grid', !viewState.grid);
    document.body.classList.toggle('compact', viewState.compact);
    document.body.classList.toggle('focus-mode', viewState.focus);
  }

  function initRibbon() {
    $all('.ribbon-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var name = btn.getAttribute('data-ribbon');
        if (name === 'home') { closePanel(); goToSection('#home'); return; }
        if (name === 'data') { closePanel(); goToSection('#kpis', true); return; }
        if (name === 'review') { closePanel(); goToSection('#achievements', true); return; }
        if (name === 'pagelayout') {
          viewState.compact = !viewState.compact;
          applyViewState();
          btn.classList.toggle('open', viewState.compact);
          btn.setAttribute('aria-pressed', String(viewState.compact));
          return;
        }
        var panel = $('#ribbon-panel');
        if (panel && !panel.hidden && btn.classList.contains('open')) { closePanel(); }
        else { openPanel(name, btn); }
      });
    });
    document.addEventListener('click', function (e) {
      var panel = $('#ribbon-panel');
      if (panel && !panel.hidden && !panel.contains(e.target)) { closePanel(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closePanel(); closeSearch(); closeMobileMenu(); }
    });
  }

  /* ------------------------------------------------------------
     Search
  ------------------------------------------------------------ */
  function runSearch(q) {
    var resultsBox = $('#search-results');
    if (!resultsBox) { return; }
    var query = (q || '').trim().toLowerCase();
    if (!query) { closeSearch(); return; }
    searchResults = DATA.searchIndex.filter(function (item) {
      var hay = (item.title + ' ' + item.keywords).toLowerCase();
      return query.split(/\s+/).every(function (word) { return hay.indexOf(word) !== -1; });
    });
    searchActive = -1;
    if (!searchResults.length) {
      resultsBox.innerHTML = '<p class="search-empty">No matching sheets. Try "projects", "excel" or "contact".</p>';
    } else {
      resultsBox.innerHTML = searchResults.map(function (r, i) {
        return '<button class="search-result" type="button" data-idx="' + i + '">' +
          icon('arrow-right') + '<span>' + esc(r.title) + '</span></button>';
      }).join('');
    }
    resultsBox.hidden = false;
    $all('.search-result', resultsBox).forEach(function (b) {
      b.addEventListener('click', function () { selectSearchResult(parseInt(b.getAttribute('data-idx'), 10)); });
    });
  }

  function selectSearchResult(idx) {
    var r = searchResults[idx];
    if (!r) { return; }
    closeSearch();
    var input = $('#search-input');
    if (input) { input.value = r.title; input.blur(); }
    goToSection(r.hash, true);
  }

  function closeSearch() {
    var box = $('#search-results');
    if (box) { box.hidden = true; }
    searchActive = -1;
  }

  function initSearch() {
    var input = $('#search-input');
    var box = $('#search-results');
    if (!input || !box) { return; }
    input.addEventListener('input', function () { runSearch(input.value); });
    input.addEventListener('focus', function () { if (input.value.trim()) { runSearch(input.value); } });
    input.addEventListener('keydown', function (e) {
      if (box.hidden) { return; }
      var items = $all('.search-result', box);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!items.length) { return; }
        searchActive = e.key === 'ArrowDown'
          ? (searchActive + 1) % items.length
          : (searchActive - 1 + items.length) % items.length;
        items.forEach(function (b, i) { b.classList.toggle('active', i === searchActive); });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        selectSearchResult(searchActive >= 0 ? searchActive : 0);
      }
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search-wrap')) { closeSearch(); }
    });
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
  }

  /* ------------------------------------------------------------
     Theme
  ------------------------------------------------------------ */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = $('#theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  function initTheme() {
    applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
    $all('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('ag-theme', next); } catch (e) { /* private mode */ }
      });
    });
  }

  /* ------------------------------------------------------------
     Mobile menu / bottom nav
  ------------------------------------------------------------ */
  function openMobileMenu() {
    var menu = $('#mobile-menu');
    if (menu) {
      menu.hidden = false;
      window.requestAnimationFrame(function () { menu.classList.add('open'); });
      var first = $('a, button', menu);
      if (first) { first.focus(); }
    }
  }

  function closeMobileMenu() {
    var menu = $('#mobile-menu');
    if (menu && !menu.hidden) {
      menu.classList.remove('open');
      window.setTimeout(function () { menu.hidden = true; }, 250);
    }
  }

  function initMobileMenu() {
    var menu = $('#mobile-menu');
    if (!menu) { return; }
    var toggle = $('#menu-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        if (menu.hidden) { openMobileMenu(); } else { closeMobileMenu(); }
      });
    }
    $all('#mobile-menu .mobile-menu-link').forEach(function (a) {
      a.addEventListener('click', function () {
        closeMobileMenu();
        goToSection(a.getAttribute('href'));
      });
    });
    var close = $('#mobile-menu-close');
    if (close) { close.addEventListener('click', closeMobileMenu); }
    var more = $('#bottom-nav-more');
    if (more) { more.addEventListener('click', openMobileMenu); }
  }

  /* ------------------------------------------------------------
     Navigation wiring
  ------------------------------------------------------------ */
  function initNav() {
    $all('.nav-link, .bottom-link[data-section]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        goToSection(a.getAttribute('href') || ('#' + a.getAttribute('data-section')));
      });
    });
    var heroWork = $('#btn-hero-work');
    if (heroWork) {
      heroWork.addEventListener('click', function (e) {
        e.preventDefault();
        goToSection('#projects');
      });
    }
    var heroConnect = $('#btn-hero-connect');
    if (heroConnect) {
      heroConnect.addEventListener('click', function (e) {
        e.preventDefault();
        goToSection('#contact');
      });
    }
    if (location.hash && $(location.hash)) {
      window.setTimeout(function () { goToSection(location.hash); }, 350);
    }
  }

  /* ------------------------------------------------------------
     Decorative grid rails
  ------------------------------------------------------------ */
  function initGridRails() {
    var strip = $('#col-strip');
    if (strip) {
      var letters = '';
      for (var i = 0; i < COLS.length; i++) { letters += '<span>' + COLS[i] + '</span>'; }
      strip.innerHTML = letters;
    }
    var rail = $('#row-rail');
    if (rail) {
      var rows = '';
      for (var r = 1; r <= 40; r++) { rows += '<span>' + r + '</span>'; }
      rail.innerHTML = rows;
    }
  }

  /* ------------------------------------------------------------
     Init everything
  ------------------------------------------------------------ */
  function initAll() {
    initNav();
    initScrollSpy();
    initReveal();
    initCounters();
    initRibbon();
    initSearch();
    initTheme();
    initMobileMenu();
    initGridRails();
    setActiveSection('home');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
