# Abhishek Garg — Excel-Themed Portfolio

A static, GitHub Pages–ready personal portfolio themed like a premium Excel workbook.
Plain HTML + CSS + vanilla JS. No backend, no build step, no dependencies.

## Structure

Site lives at the **repo root** (ready for GitHub Pages user site):

```
/
├── index.html              # markup + inline SVG icon sprite (Lucide-style)
├── styles.css              # theme tokens (light/dark), spreadsheet chrome, responsive layouts
├── script.js               # fetches portfolio.json, renders dynamic sections, all interactions
├── data/
│   └── portfolio.json      # ALL content: profile, KPIs, timeline, projects, toolkit, skills,
│                           # achievements, formulas, search index — edit this, not the code
├── assets/
│   ├── profile/
│   │   ├── abhishek-profile.jpg        # real photo, kept exactly as provided
│   │   └── abhishek-placeholder.svg    # neutral avatar fallback if the photo is missing
│   └── icons/favicon.svg
└── cv/
    └── Abhishek_Garg_CV_Final.pdf      # opened by the "CV" / "Download CV" buttons
```

## Run locally

`fetch()` needs HTTP, so serve the folder (opening `index.html` directly via `file://` will show an error banner):

```
python -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages

1. Repo → Settings → Pages → deploy from the `portfolio` branch (root).
2. Uncomment the canonical/Open Graph block in `index.html` `<head>` and set the
   absolute URLs to `https://abhishekgrg.github.io/`.

## Configuring

- **LinkedIn URL** — set `SITE_CONFIG.linkedinUrl` at the top of `script.js`.
  Until it is set, the "Connect on LinkedIn" button stays visibly disabled (no URL is invented).
- **Email / phone / CV path / photo path** — same `SITE_CONFIG` object.
- **All content** — `data/portfolio.json`. Adding a project, award, skill or tool requires only a JSON edit.
- **Theme** — light/dark toggle persists in `localStorage` (`ag-theme`); first visit follows the OS preference.

## Feature map (spec → implementation)

| Spec area | Where |
|---|---|
| Ribbon (File/Home/Insert/Page Layout/Formulas/Data/Review/View) | `index.html` ribbon + panel actions in `script.js` |
| Formula bar, name box, per-section formulas | `data.formulas` in portfolio.json, scroll-spy in `script.js` |
| Column letters / row numbers / gridlines | `.col-strip`, `.row-rail`, `body::before` in `styles.css` |
| KPI counters (the 4 documented metrics only) | `data.stats`, animated once on viewport entry |
| Journey timeline + certifications | `data.timeline`, `data.certifications` |
| Projects incl. Input→Validation→Billing→Review→Invoice SVG | `data.projects`, `workflowSVG()` in `script.js` |
| Toolkit (neutral SVG symbols, no fabricated logos) | `data.toolkit` |
| Two documented Star of the Month awards | `data.achievements` |
| Workbook sheet tabs with URL hashes | `renderSheetTabs()` |
| Search + Ctrl+K | `initSearch()` |
| View toggles (gridlines / compact / focus) | Ribbon → View |
| Dark mode | `[data-theme="dark"]` tokens |
| Reduced motion | `prefers-reduced-motion` support throughout |

Tool names and marks belong to their respective owners.
