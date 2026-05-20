# Impact. Design System

A Swiss-graphic industrial design system built around bold compartmentalization, mechanical texture, and decisive orange accents. Every element is intentional — no decoration without function.

---

## Brand Identity

**Name:** Impact.  
**Punctuation:** The trailing period is non-negotiable. It signals finality, confidence, precision.  
**Tone:** Industrial editorial. Numbers speak louder than words. Data is the hero.

---

## Color Palette

| Token | Hex | Role |
|---|---|---|
| `--color-accent` | `#E84B0C` | Primary action, scores, key data |
| `--color-accent-dark` | `#C23D08` | Hover, pressed states |
| `--color-ink` | `#1A1A1A` | Primary text, borders |
| `--color-ink-mid` | `#3D3D3D` | Secondary text, labels |
| `--color-ink-muted` | `#888888` | Descriptive copy, metadata |
| `--color-surface` | `#F2F2F2` | Page background |
| `--color-card` | `#FAFAFA` | Card surfaces |
| `--color-border` | `#1A1A1A` | Structural borders (2px) |
| `--color-hatch-bg` | `#E84B0C` | Hatch pattern background |
| `--color-hatch-line` | `#1A1A1A` | Hatch diagonal lines |

### Color Rules
- Orange is **reserved** for scores, active states, and the brand period. Never use it decoratively.
- Borders are **near-black**, not grey. Structure must be visible.
- Backgrounds stay **near-white**. Let data carry the visual weight.

---

## Typography

### Typefaces
| Role | Family | Weights |
|---|---|---|
| Display / Brand | `Barlow Condensed` | 700 (Bold) |
| Body / UI | `DM Sans` | 400, 500 |
| Data / Mono labels | `DM Mono` | 400, 500 |

### Type Scale
| Token | Size | Line Height | Usage |
|---|---|---|---|
| `--text-display` | 48px | 1.0 | Hero scores, large numerals |
| `--text-heading` | 24px | 1.2 | Card titles, section headers |
| `--text-label` | 13px | 1.4 | Mono labels, client IDs |
| `--text-body` | 15px | 1.6 | Descriptive text, metadata |
| `--text-micro` | 11px | 1.4 | Badges, annotations |

### Typography Rules
- Brand name (`Impact.`) always in **Barlow Condensed 700**, accent period in `--color-accent`
- Client selectors and system labels always in **DM Mono**
- Score numerals are **DM Sans 700** at display scale — they must dominate

---

## Spacing & Grid

```
--space-1:  4px
--space-2:  8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 48px
--space-8: 64px
```

### Layout System
- **Card width:** 340–400px (portrait ratio ~4:5)
- **Grid:** Cards divide into a 2-column internal grid: left sidebar (~35%) + right content (~65%)
- **Border radius:** `12px` for cards, `0px` for internal panels — hard edges inside, soft outside
- **Border weight:** `2px solid var(--color-border)` — structural, not decorative

---

## Component Library

### 1. Brand Header

The header panel spans the card top. Logo left, metallic knob widget top-right.

```html
<div class="brand-header">
  <span class="brand-name">Impact<span class="brand-period">.</span></span>
  <div class="knob"></div>
</div>
```

**Rules:** White background. 2px bottom border. Knob always top-right.

---

### 2. Knob Element

A purely mechanical, decorative element signaling physical-industrial origins. Rendered in CSS using conic gradients.

```css
.knob {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #d0d0d0, #f8f8f8, #b0b0b0, #e8e8e8, #c8c8c8, #f0f0f0, #d0d0d0
  );
  box-shadow:
    0 2px 8px rgba(0,0,0,0.25),
    inset 0 1px 2px rgba(255,255,255,0.8);
}
```

---

### 3. Hatch Panel

A textured visual block using repeating diagonal lines over the accent color. Used as a structural accent, never full-bleed.

```css
.hatch-panel {
  background-color: var(--color-accent);
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 4px,
    rgba(0,0,0,0.55) 4px,
    rgba(0,0,0,0.55) 6px
  );
}
```

**Rules:** Always paired with a solid accent block below it. The hatch is the "loading" state, the solid block is the "active" state.

---

### 4. Score Block

The primary data display. Large numeral + percentage badge on the accent sidebar.

```html
<div class="score-block">
  <span class="score-value">72</span>
  <div class="score-badge">%</div>
</div>
```

**Rules:** Score numeral is always white on orange. Badge is dark circle with white `%`. Score drives layout — it's the focal point of every card.

---

### 5. Client Selector

Monospace label with flanking arrow controls for cycling between clients.

```html
<div class="client-selector">
  <button class="client-nav">←</button>
  <span class="client-label">client: <strong>NOVA</strong></span>
  <button class="client-nav">→</button>
</div>
```

**Rules:** Always DM Mono. Client name in uppercase. Arrows are minimal — no borders, no fill.

---

### 6. Stat Card (Full Component)

The assembled card combining all above components.

```
┌─────────────────────────────┐
│  Impact.          [ knob ]  │  ← brand-header
├──────────┬──────────────────┤
│ ▓▓▓▓▓▓▓▓ │  ← client: NOVA → │  ← client-selector row
│ ▓▓▓▓▓▓▓▓ │                  │
│          │                  │
│  [solid] │   Campaign       │
│    72    │   Success        │
│    (%)   │   Performance    │
│          │   score for Q2.  │
└──────────┴──────────────────┘
```

---

## Texture & Effects

### Hatch Pattern
Used in the upper portion of the left sidebar. Signals "in progress" or "loading" — a mechanical metaphor.

### Metallic Knob
Built from `conic-gradient` and `box-shadow`. Evokes a physical dial or control — references industrial instrumentation.

### Card Shadow
```css
box-shadow:
  0 8px 32px rgba(0,0,0,0.10),
  0 2px 8px rgba(0,0,0,0.08);
```
Soft, diffuse. The card floats slightly — never harsh drop shadows.

---

## Interaction States

| State | Behavior |
|---|---|
| Client nav hover | Arrow brightens, slight scale `1.2` |
| Card hover | Shadow deepens, `translateY(-2px)` |
| Score hover | Subtle pulse animation on numeral |
| Knob hover | Rotation animation `rotate(30deg)` |

---

## Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Use the period after "Impact" | Omit the brand period |
| Keep borders 2px near-black | Use grey borders |
| Reserve orange for data | Use orange as background fill |
| Use DM Mono for all labels | Mix label fonts |
| Let numbers dominate | Center-align body copy |
| Hard corners inside cards | Round internal panel corners |

---

## Voice & Copy

- Labels are lowercase monospace: `client:`, `score:`, `period:`
- Values are UPPERCASE: `NOVA`, `Q2`
- Titles are title case, concise: `Campaign Success`
- Descriptions are one short sentence, grey, never more than 2 lines

---

*Impact. Design System — built for performance dashboards, client reporting, and data-forward interfaces.*
