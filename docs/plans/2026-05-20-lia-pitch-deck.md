# Lia Pitch Deck Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Create a static multi-page pitch deck presentation for Lia Diagnostics in `presentation.html` using the **Impact.** design system, complete with print/PDF styling.

**Architecture:** A single scrollable HTML page styling individual slides as cards, separated by spacing and optimized for vertical reading on desktop and full-page layout on printing/PDF export.

**Tech Stack:** HTML5, CSS3, Google Fonts (Barlow Condensed, DM Sans, DM Mono), Font styling matching `impact-design-system.html`.

---

### Task 1: Set up presentation boilerplate & core styles

**Files:**
- Create: `presentation.html`

**Step 1: Write HTML boilerplate and include fonts**
Create `presentation.html` with basic document structure, Google Fonts, reset styling, and printing styles.
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lia. — Investor Pitch Deck</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  :root {
    --color-accent:       #E84B0C;
    --color-accent-dark:  #C23D08;
    --color-ink:          #1A1A1A;
    --color-ink-mid:      #3D3D3D;
    --color-ink-muted:    #888888;
    --color-surface:      #EBEBEB;
    --color-card:         #FAFAFA;
    --color-white:        #FFFFFF;
    --color-border:       #1A1A1A;
    --font-display:  'Barlow Condensed', sans-serif;
    --font-body:     'DM Sans', sans-serif;
    --font-mono:     'DM Mono', monospace;
    --text-display:  48px;
    --text-heading:  22px;
    --text-subhead:  17px;
    --text-label:    12px;
    --text-body:     14px;
    --text-micro:    11px;
    --space-1:  4px;
    --space-2:  8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 24px;
    --space-6: 32px;
    --space-7: 48px;
    --space-8: 64px;
    --border-weight: 2px;
    --radius-card:   14px;
    --shadow-card:   0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.07);
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background-color: var(--color-surface);
    font-family: var(--font-body);
    color: var(--color-ink);
    min-height: 100vh;
    padding: var(--space-6) 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
  }
  .slide-card {
    width: 800px;
    height: 500px;
    background: var(--color-card);
    border: var(--border-weight) solid var(--color-border);
    border-radius: var(--radius-card);
    overflow: hidden;
    box-shadow: var(--shadow-card);
    display: flex;
    flex-direction: column;
  }
  @media print {
    body {
      background: none !important;
      padding: 0 !important;
      gap: 0 !important;
    }
    .slide-card {
      width: 100% !important;
      height: 100vh !important;
      page-break-after: always;
      break-after: page;
      box-shadow: none !important;
      border: 2px solid #000 !important;
      border-radius: 0 !important;
    }
  }
</style>
</head>
<body>
</body>
</html>
```

**Step 2: Verify the file exists and is populated**
Run: `Test-Path "presentation.html"`
Expected: `True`

---

### Task 2: Build Slides 1–4 (Intro, Problem, Solution, Market Size)

**Files:**
- Modify: `presentation.html`

**Step 1: Write content for Slides 1 to 4**
Implement the CSS classes and HTML content inside the body of `presentation.html`:
- Slide 1: Logo, title, knob widget.
- Slide 2: Accent sidebar, hatch panel, waste facts.
- Slide 3: Accuracy score block, flushable design benefits.
- Slide 4: Market metrics, TAM/SAM/SOM metric pills, progress bars.

Code styles to include:
- `.brand-header`, `.brand-name`, `.period`, `.knob` (metallic dial), `.hatch-panel`.
- `.score-block`, `.score-value`, `.score-badge`.
- `.metric-pill`, `.progress-bar`.

**Step 2: Verify the tags are written**
Run: `Select-String -Path "presentation.html" -Pattern "score-value", "metric-pill"`
Expected: Matches found for the class names.

---

### Task 3: Build Slides 5–8 (Business Model, Tech, Competition, Team & Ask)

**Files:**
- Modify: `presentation.html`

**Step 1: Write content for Slides 5 to 8**
Implement the HTML content for:
- Slide 5: Data table for margins and retail comparison.
- Slide 6: Patent count metric pill, FDA approval callouts.
- Slide 7: Competitor comparison table (Lia vs traditional plastic).
- Slide 8: Team profiles, capital ask progress bar, contact details.

Code styles to include:
- `.data-table`, `.callout`, `.callout--accent`, `.badge`.

**Step 2: Verify the presentation file size and content completeness**
Run: `(Get-Item "presentation.html").Length`
Expected: Greater than 10,000 bytes.
Check that "Slide 8" exists inside the file.
