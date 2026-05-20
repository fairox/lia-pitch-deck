# Lia Pitch Deck - Presentation Design

A static multi-page presentation built on the **Impact.** design system for Lia Diagnostics (biodegradable home pregnancy tests).

## Overview
The presentation will display as a vertical stack of slide cards centered on the screen, optimized for both desktop viewing and PDF export/printing.

## Page Layout & Navigation
- **Scrolling Feed:** Slides are stacked vertically with spacing (`--space-6`) between cards.
- **Print Optimization:** Media query styles are injected to force slide breaks when printed:
  ```css
  @media print {
    body { background: none; }
    .slide-card {
      page-break-after: always;
      break-after: page;
      box-shadow: none !important;
      border: 2px solid #000 !important;
      width: 100% !important;
      margin: 0 !important;
    }
  }
  ```

## Slide Component Mapping
1. **Slide 1: Intro / Vision** - Brand header + knob + display title.
2. **Slide 2: The Problem** - Accent sidebar + hatch pattern (metaphor for status quo waste) + facts.
3. **Slide 3: The Solution** - Accent score block (solid orange) showing Lia's key metrics (accuracy/disperse time) + narrative.
4. **Slide 4: Market Size** - Metric pills showing TAM/SAM/SOM + progress bar for target customer breakdown.
5. **Slide 5: Business Model** - Structured data table showing unit pricing, margin split, and retail cost comparison.
6. **Slide 6: Technology & IP** - Callout cards for FDA approval status and patent counts.
7. **Slide 7: Competitive Matrix** - Data table comparing Lia to digital and analog plastic tests.
8. **Slide 8: Team & Ask** - Funding progress bar + founder bios with mono labels.
