# Build Tasks — Abhishek Garg Excel-Themed Portfolio

Source spec: `Abhishek_Garg_Excel_Theme_Portfolio_Master_Prompt.md`
Git is used for local commit tracking so any breaking change can be reverted. Publishing happens later.

> **Target platform (confirmed):** the site will be published to **GitHub Pages (`github.io`)**.
> Design constraints that follow: static HTML/CSS/vanilla JS only, no backend, all asset paths
> relative (not absolute/root-anchored), and the canonical/Open Graph absolute URLs get their final
> `https://<user>.github.io/<repo>/` value in one obvious place at publish time.

> **Missing inputs (as of start):** profile photograph, CV PDF, and Excel reference image were not
> present in the workspace. The site is built with placeholder-safe asset handling: the HTML
> references `assets/profile/abhishek-profile.jpg` and `cv/Abhishek_Garg_CV_Final.pdf`; a neutral
> SVG placeholder avatar and a generated CV PDF (built strictly from documented data in spec §24)
> fill the gap until the owner supplies the real files.

## Task 1 — Repo & structure setup
- [x] `git init`, `.gitignore`, folder skeleton (`portfolio/`, `assets/…`, `cv/`, `data/`)
- [x] This TASKS.md

## Task 2 — Data layer (spec §24, §25, §26, §27)
- [x] `SITE_CONFIG` (email, phone, empty configurable `linkedinUrl`)
- [x] All content values (the 4 documented KPIs, experience, education, certifications, skills,
      the 2 documented awards, projects, toolkit, search index) stored as **hardcoded static
      values inside a configurable JSON file** in the code structure
      (`portfolio/data/portfolio.json`) — easy to edit without touching code
- [x] `script.js` fetches that JSON at load and renders KPIs, timeline, projects, toolkit,
      achievements, about cards from it — content never hardcoded into markup
- [x] Caveat handled: `fetch()` of a local JSON only works over HTTP — local testing runs through
      a static server, and it works as-is on GitHub Pages (documented in README)

## Task 3 — index.html
- [x] Semantic structure: header → ribbon → formula bar → grid → hero → KPIs → about →
      journey → projects → toolkit → achievements → contact → sheet tabs/footer
- [x] SVG sprite (Lucide-style, 1.5–2px stroke, no emojis), aria-labels on icon buttons
- [x] SEO: title, description, canonical, Open Graph, favicon (AG. green/cream/gold);
      absolute URLs templated for the final `github.io` address (single place to fill at publish)
- [x] Spreadsheet column-letter strip + decorative grid backdrop

## Task 4 — styles.css
- [x] Exact palette + typography stack from spec §3
- [x] Light + dark mode (`data-theme` attribute, subtle dark gridlines, accessible contrast)
- [x] Spreadsheet visuals: ribbon, name box, formula bar, gridlines, cells, KPI cells, sheet tabs
- [x] Mobile layouts for 320/360/375/390/414/430px, bottom nav, 44px touch targets,
      collapsed ribbon, doodles hidden/repositioned
- [x] Animation per spec §20 + `prefers-reduced-motion: reduce` support

## Task 5 — Interactions (script.js)
- [x] Smooth-scroll nav + active-section sync (nav, sheet tabs, formula bar text)
- [x] Ribbon: File dropdown, Home, Insert action panel, Formulas panel, Data → KPI highlight,
      Review → achievements highlight, View toggles (gridlines / compact / focus)
- [x] Header search with live results → scroll + highlight matching sections; `Ctrl+K` focuses it
- [x] KPI counters animate once on viewport entry (instant under reduced motion)
- [x] Theme toggle with `localStorage` persistence, honors `prefers-color-scheme`
- [x] Mobile bottom nav + menu drawer

## Task 6 — Assets
- [x] Favicon SVG, doodle SVGs (handwritten-style, subtle, no emoji)
- [x] Neutral placeholder profile avatar (no fabricated face); real photo auto-picked up when
      dropped at `assets/profile/abhishek-profile.jpg`
- [x] CV PDF generated from documented data only
- [x] No fabricated brand logos: neutral SVG symbols in containers with readable names

## Task 7 — Verification (spec §32)
- [ ] Local static server + real browser checks: desktop, 320px, 390px, 430px
- [ ] portfolio.json loads correctly over HTTP (fetch path verified)
- [ ] Dark mode, all navigation, CV download, image loading, SVG rendering
- [ ] Browser console clean, all relative paths, GitHub Pages compatibility
- [ ] Visual screenshot review at each breakpoint

## Task 8 — Fix & polish loop
- [ ] Fix every issue found in verification, re-verify until clean
- [ ] Final commit with clean working tree

## Commit log
Tracked in git (`git log` in this repo). One commit per task/stable state; revert instead of patch-forward
if a change breaks something.
