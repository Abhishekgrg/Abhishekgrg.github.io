# Abhishek Garg — Excel-Themed Personal Portfolio
## Master Build Specification & Prompt for Claude

## 1. Mission

Build a production-quality, responsive personal portfolio for **Abhishek Garg**, Senior AR/AP Coordinator at NIIT Limited, Gurugram, India.

The portfolio must feel like:

> **Microsoft Excel + premium personal portfolio + modern editorial design + subtle Gen-Z personality**

It must NOT become a generic resume, SaaS landing page, developer portfolio, neon site, or gradient-heavy dashboard.

The supplied Excel-inspired reference image is the primary visual direction. Recreate its structure and visual language closely while keeping the website functional, accessible, responsive, maintainable, and expandable.

---

## 2. Non-Negotiable Rules

- Do not use Unicode emojis anywhere.
- Use proper SVG icons for every UI icon.
- Use consistent SVG iconography: simple, geometric, minimal, approximately 1.5–2px stroke.
- Use real/legitimate brand assets where appropriate; never fabricate or distort logos.
- Keep the supplied profile photograph exactly as provided.
- Do not regenerate, stylize, retouch, or AI-redesign the face.
- Keep the profile photo small and professional; never let it dominate the hero.
- Do not invent employers, achievements, certifications, statistics, awards, dates, or responsibilities.
- Do not replace the Excel visual concept with a generic dashboard.
- Do not create a backend dependency.
- The final website must work as a static GitHub Pages site.
- Test the final HTML/CSS/JS before delivery.

---

# 3. Visual Direction

## Palette

Use a restrained Excel-inspired palette:

```css
--excel-green: #107C41;
--deep-green: #075E45;
--dark-green: #064C3B;
--cream: #F7F3EA;
--warm-white: #FFFDF8;
--sheet-white: #FFFFFF;
--grid-line: #DDE4DE;
--text-primary: #102A2A;
--text-secondary: #5F6B6A;
--muted: #899390;
--gold-accent: #D7A84B;
--soft-green: #E7F3EC;
--soft-gold: #F6EBD4;
--border: #D9DFDC;
```

Primary visual colors should be:
1. Excel green
2. Cream / white
3. Charcoal
4. Small amounts of warm gold

Avoid excessive colors.

## Typography

Use:

```css
font-family:
  Inter,
  "Segoe UI",
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  sans-serif;
```

Do not bundle Microsoft's proprietary Segoe font as a custom web font.

Use strong editorial hero typography, compact spreadsheet labels, readable body text, and restrained handwritten typography for doodles only.

---

# 4. Desktop Composition

The desktop page should resemble a premium Excel workbook:

```text
Personal Website Header
        ↓
Excel-style Green Ribbon
        ↓
Name Box + Formula Bar
        ↓
Spreadsheet Column/Row Grid
        ↓
Hero
        ↓
KPI Row
        ↓
About
        ↓
Professional Journey
        ↓
Projects
        ↓
Toolkit
        ↓
Achievements
        ↓
Contact
        ↓
Excel Sheet Tabs / Footer
```

Use subtle spreadsheet gridlines behind the content.

Desktop should contain:
- column letters
- row numbers
- gridlines
- formula bar
- Excel-inspired ribbon
- workbook sheet tabs

These should be visual metaphors rather than fake Excel functionality.

---

# 5. Top Website Header

Left:

```text
AG.
```

Use a simple lettermark with a tiny gold dot.

Navigation:

```text
Home
About
Experience
Projects
Skills
Achievements
Contact
```

Right:

```text
Search opportunities...
Ctrl + K
Theme
Download CV
```

Search should actually work and navigate to matching portfolio sections.

---

# 6. Excel Ribbon

Use a dark Excel-green bar.

Display:

```text
File
Home
Insert
Page Layout
Formulas
Data
Review
View
```

Possible interactions:

### Home
Return to main view.

### Insert
Open a small portfolio action panel.

### Formulas
Show portfolio-themed formulas such as:

```text
=SUM(Experience)
=COUNT(Projects)
=AVERAGE(SLA)
=MAX(Impact)
```

These are visual metaphors only.

### Data
Highlight KPI/impact section.

### Review
Highlight achievements.

### View
Toggle:
- grid visibility
- compact mode
- focus mode

---

# 7. Formula Bar

Below the ribbon:

```text
A1 | fx | = Turning data into opportunities()
```

Change the formula text according to the active section:

```text
Hero:
= Turning data into opportunities()

Experience:
= SUM(Experience)

Projects:
= Improve(Process)

Achievements:
= COUNT(Achievements)

Contact:
= CONNECT(Abhishek)
```

Do not imply these are real financial calculations.

---

# 8. Hero

Eyebrow:

```text
FINANCE · BILLING · OPERATIONS
```

Heading:

```text
Hey, I’m
Abhishek Garg.
```

Description:

```text
I turn complex operational processes into
structured, accurate and practical workflows.
```

Metadata:

```text
Senior AR/AP Coordinator
at NIIT Limited

Gurugram, India

Open to opportunities
```

Buttons:

```text
View my work →
Let’s connect
```

Use SVG icons for briefcase, location, status, arrow and connection.

---

# 9. Profile Image

Use the user's original supplied photograph.

Rules:

- Preserve exact photo.
- No AI transformation.
- No face alteration.
- No artificial background.
- No heavy filters.
- No giant portrait.
- No decorative polaroid.
- No oversized circular frame.

Recommended desktop size:
```text
130–180px
```

Recommended mobile size:
```text
90–125px
```

Place it beside the hero content.

Add a small status card:

```text
Currently at NIIT Limited
Gurugram, India
```

Use a CSS/SVG green status dot.

Add a small Excel icon near the image and a small SVG bar chart.

---

# 10. Doodles

Use subtle handwritten SVG doodles, never emojis.

Use examples such as:

```text
Good Processes
Better Results.
```

```text
Same person.
Different tabs.
Bigger goals.
```

```text
Small improvements
create big results.
```

```text
Progress,
not perfection.
```

```text
Right tools.
Smoother workflows.
```

Doodles must:
- be SVG
- be lightweight
- never overlap important text
- be hidden/repositioned when necessary on mobile

---

# 11. KPI Row

Use four spreadsheet-style KPI cells/cards.

### KPI 1

```text
300+
Invoices/month
```

### KPI 2

```text
100%
SLA adherence
```

### KPI 3

```text
20+
Internal clients
```

### KPI 4

```text
25%
Fewer billing discrepancies
```

Animate counters once when the section enters the viewport.

Use proper SVG icons, not emojis.

Do not invent any additional metrics.

---

# 12. About Section

Heading:

```text
More than just
spreadsheets.
```

Body:

```text
I’m a finance and operations professional with
experience in AR/AP, billing, SOW management
and client coordination.

I enjoy solving problems, streamlining processes
and making numbers actually make sense.
```

Create four cards.

### The Work Me

```text
Invoices, billing, SOWs,
client coordination &
operations.
```

Tag:

```text
Process Driven
```

### The Numbers Me

```text
Data-driven,
detail-oriented and
process focused.
```

Tag:

```text
Analytical
```

### The Human Me

```text
Coffee-powered problem solver.
Professional overthinker.
Spreadsheet enthusiast.
```

Tag:

```text
Balanced
```

### The Future Me

```text
Continuously learning,
growing and building
impact.
```

Tag:

```text
Always Learning
```

Use SVG icons for each.

---

# 13. Professional Journey

Heading:

```text
My professional
journey.
```

Subheading:

```text
A timeline of learning,
growth and impact.
```

CTA:

```text
View full resume →
```

## Education

```text
2019 – 2022
B.Com | M.Com
Education

Bachelor of Commerce
Master of Commerce
```

## ICICI Bank

```text
2022 – 2023
ICICI Bank
Relationship Manager
```

Documented points:

```text
Client relationship management
Customer account handling
Financial product support
```

## NIIT Limited

```text
2023 – Present
NIIT Limited
Senior AR/AP Coordinator
```

Documented points:

```text
Billing & invoicing across multiple projects
SOW management & vendor coordination
Process improvements & discrepancy reduction
```

Use legitimate NIIT and ICICI Bank logo assets where available and permitted.

---

# 14. Projects

Heading:

```text
From challenges
to solutions.
```

Subheading:

```text
Real problems. Practical solutions. Measurable impact.
```

CTA:

```text
View all projects →
```

## Project 1

```text
Multi-Project Invoicing
Workflow Optimization
```

Description:

```text
Streamlined invoicing across multiple projects,
reducing manual work and discrepancies.
```

Tag:

```text
Process Improvement
```

Impact:

```text
↓ 25%
Discrepancies
```

Create an SVG workflow illustration:

```text
Input → Validation → Billing → Review → Invoice
```

## Project 2

```text
Centralized SOW Documentation
& Vendor Tracking
```

Description:

```text
Implemented a structured tracking system for
SOWs and vendor agreements.
```

Tag:

```text
Operations
```

Show:

```text
Better tracking
Faster turnaround
Improved compliance
```

Use SVG check icons.

---

# 15. Toolkit

Heading:

```text
Tools that keep
things moving.
```

Subtext:

```text
Right tools.
Smoother workflows.
```

Tools:

```text
Microsoft Excel
Tally
BUSY
Finacle
TeckNowPark
Symphony
```

Each card should have:

```text
[SVG / official logo]

Tool Name
Category
```

Examples:

```text
Excel
Reporting & Analysis

Tally
Accounting

BUSY
Accounting

Finacle
Banking System

TeckNowPark
Operations

Symphony
Project Management
```

Use exact legitimate logos when available.

If an official logo cannot be obtained, use a neutral SVG symbol rather than fabricating a logo.

Do not distort or recolor official marks.

---

# 16. Achievements

Heading:

```text
Milestones
that motivate.
```

CTA:

```text
View certificate →
```

Use exactly these two awards:

### Award 1

```text
Star of the Month
May 2024

Recognized for consistent
performance and contribution.
```

### Award 2

```text
Star of the Month
May 2025

Recognized for consistent
performance and contribution.
```

Use an SVG trophy.

Do not add a third award unless the portfolio owner later changes the data.

---

# 17. Contact

Use a deep Excel-green section.

Heading:

```text
Have a question or
opportunity in mind?
```

Body:

```text
I’m always open to discussing new opportunities,
collaborations or just a good conversation.
```

Buttons:

```text
Email me
Connect on LinkedIn
Download CV
```

Contact data:

```text
Email:
abrgarg0302@gmail.com

Phone:
+91 7014850962
```

Do not invent a LinkedIn URL. Make it configurable:

```js
const SITE_CONFIG = {
  linkedinUrl: "",
  email: "abrgarg0302@gmail.com",
  phone: "+91 7014850962"
};
```

---

# 18. Excel Sheet Tabs

At the bottom, create workbook-style tabs:

```text
About Me
Experience
Projects
Skills
Achievements
Contact
+
```

Active tab gets a subtle Excel-green underline.

Tabs should navigate to sections.

Use URL hashes:

```text
#about
#experience
#projects
#skills
#achievements
#contact
```

---

# 19. Mobile Experience

Do not simply shrink desktop.

Create a dedicated mobile layout for:

```text
320px
360px
375px
390px
414px
430px
```

Mobile header:

```text
AG.                         Theme  CV  Menu
```

Collapse the Excel ribbon.

Use a bottom navigation:

```text
Home
Work
Projects
Tools
More
```

Use proper SVG icons.

Touch targets must be at least:

```text
44px × 44px
```

Mobile hero order:

```text
FINANCE · BILLING · OPERATIONS

Hey, I’m
Abhishek Garg.

Description

Small profile photo

Currently at NIIT Limited

View my work
Let’s connect
```

Do not let the profile photo fill the screen.

Mobile KPI layout:

```text
300+      100%
20+       25%
```

Mobile sections can become accordions:

```text
About Me       >
My Journey    >
Projects      >
Tools         >
Achievements >
Let’s Connect >
```

Spreadsheet grid should become very subtle or disappear on mobile.

---

# 20. Animation

Use smooth, restrained motion.

Section reveal:

```css
opacity: 0 → 1;
transform: translateY(20px) → translateY(0);
duration: 500–700ms;
easing: cubic-bezier(0.22, 1, 0.36, 1);
```

Cards:
- translateY(-3px) on hover
- slightly stronger shadow
- subtle green border

Buttons:
- translateY(-1px)
- icon shifts 2–4px

Spreadsheet cells:
- subtle green focus/hover outline

Charts:
- animate on viewport entry

Do not use:
- bouncing cards
- excessive parallax
- distracting particle effects
- huge page transitions

Support:

```css
@media (prefers-reduced-motion: reduce)
```

and disable non-essential animation.

---

# 21. Dark Mode

Light:
- cream
- white
- Excel green
- charcoal

Dark:

```text
#111817
#16221F
#0F5138
#EAF2ED
```

Gridlines should become subtle dark lines.

Maintain accessible contrast.

---

# 22. Icon System

Use one consistent open-source SVG icon system such as Lucide.

Required icon concepts:

```text
Home
Briefcase
Location
Mail
LinkedIn
Download
Search
Sun
Moon
Chart
Shield
Users
Document
Workflow
Toolbox
Trophy
Graduation
Arrow
Check
Plus
Menu
Close
Settings
Formula
Database
Filter
Calendar
```

No Unicode emoji icons.

Every icon-only button needs an accessible aria-label.

---

# 23. Brand Asset Rules

Brands/products:

```text
NIIT
ICICI Bank
Microsoft Excel
Tally
BUSY
Finacle
TeckNowPark
Symphony
LinkedIn
```

Rules:
- use legitimate assets
- preserve aspect ratio
- do not distort
- do not rotate
- do not randomly recolor
- do not redraw complex marks
- keep logos inside dedicated containers
- include readable product/brand text
- if an exact permitted logo is unavailable, use a neutral SVG symbol

Microsoft documentation emphasizes purposeful, consistent iconography and specific rules around Microsoft product icons; use official/approved assets where appropriate rather than fabricating or altering them. SVG is preferred for scalable UI iconography. citeturn0search1turn0search4

---

# 24. Personal Data

Use only the following professional information.

## Identity

```text
ABHISHEK GARG
Senior AR/AP Coordinator
Gurugram, Haryana, India
```

## Email

```text
abrgarg0302@gmail.com
```

## Phone

```text
+91 7014850962
```

## NIIT

```text
Senior AR/AP Coordinator
NIIT Limited
August 2023 – Present
```

Documented impact:

```text
300+ invoices monthly
100% accuracy/SLA
25% reduction in billing discrepancies
20+ internal clients
50+ SOWs
90%+ client satisfaction
20% turnaround reduction
100% compliance
```

## ICICI Bank

```text
Relationship Manager
ICICI Bank
September 2022 – February 2023
```

Documented:

```text
150+ customers
120% monthly cross-selling target
95%+ first-call query resolution
90%+ CSAT
20% increase in net banking/UPI usage
Priority client handling
Trained junior staff
```

## Education

```text
M.Com
Business Administration & Management
2022 – 2024

B.Com
Accounts & Business Statistics
2019 – 2022

Commerce with Computer Science
2018 – 2019
```

## Certifications

```text
PG Program in Relationship Management – NIIT IFBI
Computer Accounting – Tally ERP & Busy
```

## Skills

```text
Client Relationship Management
Invoicing / Billing
Customer Feedback
Regulatory Compliance
SLA / Time Management
Cross-functional Collaboration
Process Optimization
Data Analysis / Financial Reporting
Problem Solving
Microsoft Excel
Finacle
TeckNowPark
Symphony
CSS
Tally
Busy
```

---

# 25. Future-Expandable Architecture

Do not hardcode all content directly into visual components.

Use a central data object:

```js
const portfolioData = {
  profile: {
    name: "Abhishek Garg",
    role: "Senior AR/AP Coordinator",
    company: "NIIT Limited",
    location: "Gurugram, India"
  },

  stats: [
    { value: 300, suffix: "+", label: "Invoices/month" },
    { value: 100, suffix: "%", label: "SLA adherence" },
    { value: 20, suffix: "+", label: "Internal clients" },
    { value: 25, suffix: "%", label: "Fewer billing discrepancies" }
  ],

  experience: [],
  projects: [],
  skills: [],
  achievements: []
};
```

Future additions must be possible without rebuilding the entire site.

Potential future modules:

- more projects
- certifications
- more awards
- skills matrix
- performance dashboard
- billing dashboard
- Excel template downloads
- SOP/checklist downloads
- blog/insights
- multiple CV versions
- contact form
- multilingual support
- PWA support
- portfolio analytics
- command palette
- formula playground

---

# 26. Future Excel Interactions

Design the architecture to eventually support:

## Formula Playground

Example:

```text
=SUM(300,20,25)
```

Output:

```text
345
```

Clearly label it as a portfolio interaction.

## KPI Filters

```text
All
Billing
Operations
Client Management
```

## Workbook Tabs

```text
About Me
Experience
Projects
Skills
Achievements
Analytics
Contact
```

## Command Palette

Keyboard:

```text
Ctrl + K
```

Possible commands:

```text
Go to About
Go to Experience
Open Projects
Open Skills
Download CV
Contact Abhishek
Toggle Theme
```

---

# 27. Search

Implement:

```text
Search opportunities...
```

Search content:

```text
About
Experience
NIIT
ICICI Bank
Projects
Invoicing
SOW
Skills
Excel
Tally
Finacle
Achievements
Star of the Month
Contact
```

Results should scroll/highlight matching sections.

---

# 28. Accessibility

Required:
- semantic HTML
- keyboard navigation
- visible focus states
- proper buttons/anchors
- aria-labels for icon buttons
- alt text
- sufficient contrast
- reduced-motion support
- color must not be the only way to communicate meaning

---

# 29. Performance

GitHub Pages compatible.

Prefer:
- static HTML
- CSS
- vanilla JavaScript
- optimized SVG
- optimized profile image
- local assets
- minimal dependencies

No backend.

No database.

No server-side rendering.

No `/mnt/data` paths.

No localhost references.

Use relative asset paths.

---

# 30. Recommended File Structure

```text
portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── profile/
│   │   └── abhishek-profile.jpg
│   ├── logos/
│   ├── icons/
│   ├── doodles/
│   └── charts/
├── cv/
│   └── Abhishek_Garg_CV_Final.pdf
└── README.md
```

A single HTML file is acceptable if it is more reliable for GitHub Pages, but keep CSS, JavaScript and SVG sections clearly organized.

---

# 31. SEO

Use:

```html
<title>Abhishek Garg | Senior AR/AP Coordinator</title>

<meta
  name="description"
  content="Portfolio of Abhishek Garg, Senior AR/AP Coordinator specializing in billing, operations, SOW management and client coordination."
>
```

Also add:
- canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- favicon

Favicon:

```text
AG.
```

with green, cream and a small gold dot.

---

# 32. Validation Before Delivery

Before giving the final files:

1. Validate HTML.
2. Validate CSS.
3. Validate JavaScript.
4. Check all brackets and braces.
5. Open locally.
6. Check desktop.
7. Check mobile.
8. Check 320px width.
9. Check 390px width.
10. Check 430px width.
11. Check dark mode.
12. Check all navigation.
13. Check CV download.
14. Check image loading.
15. Check every logo.
16. Check SVG rendering.
17. Check no raw HTML appears.
18. Check no raw CSS appears.
19. Check browser console for errors.
20. Check all relative paths.
21. Confirm GitHub Pages compatibility.

Never deliver an untested ZIP.

Especially avoid malformed CSS/JS such as:

```css
.card {{
}}
```

or:

```js
const config = {{
}};
```

Correct syntax must be used.

---

# 33. Final Quality Bar

The finished website should feel like:

> **A beautiful Excel workbook that happens to be Abhishek Garg's professional portfolio.**

It should communicate:

- who he is
- what he does
- where he works
- his experience
- measurable impact
- projects
- tools
- achievements
- how to contact him

The Excel metaphor should be visible throughout:

- ribbon
- formula bar
- cells
- grid
- row/column headers
- KPI cells
- charts
- workbook tabs
- spreadsheet-style navigation

But it must still feel like a premium personal website, not a literal spreadsheet.

The design principle is:

> **Do not make the portfolio look like an Excel spreadsheet. Make it feel like a beautifully designed product inspired by Excel.**

Every visual element must improve clarity, storytelling, usability, or personality. If it does not, remove it.
