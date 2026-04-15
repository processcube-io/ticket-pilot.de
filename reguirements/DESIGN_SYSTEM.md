# ProcessCube Studio Design System

This document describes the design system used in ProcessCube Studio. Use this as a reference when building applications that should match the Studio's visual style.

---

## Color Palette

### Primary Brand Colors

| Token | Light Theme | Dark Theme | Usage |
|-------|-------------|------------|-------|
| Highlight/Accent | `rgb(248, 181, 68)` | `rgb(248, 181, 68)` | Active states, primary buttons, status bar |
| Highlight Hover | `rgb(228, 161, 48)` | `rgb(228, 161, 48)` | Hover on highlight elements |
| Primary Blue | `#3b82f6` | `#60a5fa` | Focus rings, links, selections |
| Focus Blue | `#2563eb` | `#60a5fa` | Input focus borders |

### Background Colors

| Token | Light Theme | Dark Theme |
|-------|-------------|------------|
| Main Background | `#f3f4f6` | `#111827` |
| Surface Primary | `#ffffff` | `#1f2937` |
| Surface Secondary | `#f3f4f6` | `#374151` |
| Surface Tertiary | `#e5e7eb` | `#4b5563` |

### Text Colors

| Token | Light Theme | Dark Theme |
|-------|-------------|------------|
| Primary | `#1f2937` | `#e5e7eb` |
| Secondary | `#6b7280` | `#9ca3af` |
| Tertiary | `#9ca3af` | `#6b7280` |
| Muted | `#6b7280` | `#6b7280` |

### Border Colors

| Token | Light Theme | Dark Theme |
|-------|-------------|------------|
| Default | `#e5e7eb` | `#374151` |
| Hover | `#d1d5db` | `#4b5563` |
| Focus | `#3b82f6` | `#60a5fa` |

### Semantic Colors

| State | Light Theme | Dark Theme |
|-------|-------------|------------|
| Success | `#16a34a` | `#34d399` |
| Error | `#dc2626` | `#f87171` |
| Warning | `#ea580c` | `#fb923c` |
| Info | `#2563eb` | `#60a5fa` |

### Status Badge Colors

```scss
// Running
light: { text: #2563eb, bg: #e3f2fd }
dark:  { text: #60a5fa, bg: #1a3346 }

// Finished/Success
light: { text: #16a34a, bg: #e8f5e9 }
dark:  { text: #34d399, bg: #0c3c10 }

// Terminated/Warning
light: { text: #ea580c, bg: #ffe5ce }
dark:  { text: #fb923c, bg: #3e2611 }

// Error
light: { text: #dc2626, bg: #f8bbd0 }
dark:  { text: #f87171, bg: #4c1d2e }
```

---

## Typography

### Font Families

```css
/* System Font Stack (Primary) */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* Monospace */
font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
```

### Font Sizes

| Token | Size | Pixels (base 14px) |
|-------|------|-------------------|
| xs | `0.625rem` | 10px |
| sm | `0.75rem` | 12px |
| sm-md | `0.8125rem` | 13px |
| md | `0.875rem` | 14px |
| lg | `1rem` | 16px |
| xl | `1.15rem` | 18px |
| 2xl | `1.25rem` | 20px |
| 3xl | `1.75rem` | 28px |
| 4xl | `2.2rem` | 35px |

### Font Weights

| Token | Value |
|-------|-------|
| Normal | `400` |
| Medium | `450` |
| Semi-Bold | `500` |
| Bold | `600` |

### Line Heights

| Token | Value |
|-------|-------|
| Compact | `1rem` |
| Normal | `1.4` |
| Relaxed | `1.5` |

---

## Spacing

Base unit: `14px` (1rem)

| Token | Value | Pixels |
|-------|-------|--------|
| 0.5 | `0.125rem` | 2px |
| 1 | `0.25rem` | 4px |
| 1.5 | `0.375rem` | 6px |
| 2 | `0.5rem` | 8px |
| 2.5 | `0.625rem` | 10px |
| 3 | `0.75rem` | 12px |
| 3.5 | `0.875rem` | 14px |
| 4 | `1rem` | 16px |
| 6 | `1.5rem` | 24px |
| 8 | `2rem` | 32px |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | `6px` | Small components, badges |
| md | `8px` | Default (buttons, inputs, cards) |
| lg | `12px` | Large components, modals |
| xl | `16px` | Extra large components |
| full | `50%` | Circles, avatars |

---

## Shadows

### Light Theme

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
```

### Dark Theme

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4);
```

### Focus Rings

```css
/* Blue focus (inputs, links) */
box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);

/* Gold focus (highlight elements) */
box-shadow: 0 0 0 3px rgba(248, 181, 68, 0.15);
```

---

## Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Components

### Buttons

#### Primary Button (Gold/Highlight)

```css
/* Light & Dark Theme */
background: linear-gradient(135deg, rgb(248, 181, 68), rgb(228, 161, 48));
color: #1f2937;
border: none;
border-radius: 8px;
padding: 0.5rem 1rem;
font-weight: 500;
transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

/* Hover */
filter: brightness(1.05);
box-shadow: 0 2px 4px rgba(248, 181, 68, 0.3);
```

#### Secondary Button

```css
/* Light Theme */
background: #f3f4f6;
color: #1f2937;
border: 1px solid #e5e7eb;

/* Dark Theme */
background: #374151;
color: #e5e7eb;
border: 1px solid #4b5563;

/* Hover */
background: #e5e7eb; /* light */
background: #4b5563; /* dark */
```

#### Danger Button

```css
background: linear-gradient(135deg, #ef4444, #dc2626);
color: white;
```

### Form Controls (Inputs, Selects, Textareas)

```css
/* Light Theme */
background: #ffffff;
border: 1px solid #e5e7eb;
border-radius: 8px;
padding: 0.5rem 0.75rem;
font-size: 0.875rem;
color: #1f2937;

/* Focus */
border-color: #3b82f6;
box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);

/* Dark Theme */
background: #374151;
border-color: #4b5563;
color: #e5e7eb;

/* Focus Dark */
border-color: #60a5fa;
box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);

/* Placeholder */
color: #6b7280;

/* Disabled */
background: #1f2937;
color: #6b7280;
opacity: 0.5;
```

### Tables

```css
/* Light Theme */
background: #ffffff;
border-collapse: collapse;

th, td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
}

tr:hover {
  background: #f3f4f6;
}

tr.active {
  background: #dbeafe;
}

/* Dark Theme */
background: #1f2937;
border-color: #111827;

tr:hover {
  background: #111827;
}

tr.active {
  background: #1e3a5f;
}
```

### Tabs

```css
/* Tab Container */
height: 36px;
display: flex;
gap: 2px;

/* Tab Item */
padding: 6px 12px;
font-size: 0.8125rem;
font-weight: 450;
border-radius: 8px 8px 0 0;
transition: all 150ms;

/* Light Theme Inactive */
background: #f3f4f6;
color: #6b7280;

/* Dark Theme Inactive */
background: #1f2937;
color: #9ca3af;

/* Active Tab (Both Themes) */
background: linear-gradient(135deg, rgb(248, 181, 68), rgb(228, 161, 48));
color: #1f2937;

/* Hover */
background: #e5e7eb; /* light */
background: #374151; /* dark */
```

### Panes/Cards

```css
/* Light Theme */
background: #ffffff;
border-radius: 8px;
padding: 0.75rem 1rem;

/* Dark Theme */
background: #1f2937;

/* Pane Header */
min-height: 36px;
padding: 0.375rem 0.875rem;
font-size: 0.7rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
color: #6b7280;
```

### Dropdowns/Menus

```css
/* Light Theme */
background: #ffffff;
border: 1px solid #e5e7eb;
border-radius: 8px;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);

/* Menu Item */
padding: 0.5rem 0.75rem;
margin: 2px 4px;
border-radius: 6px;

/* Hover */
background: #f3f4f6;

/* Dark Theme */
background: #1f2937;
border-color: #374151;

/* Item Hover Dark */
background: #374151;

/* Selected */
background: #3b82f6;
color: white;
```

### Scrollbars

```css
/* Width/Height */
width: 8px;
height: 8px;

/* Light Theme */
::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 2px;
}

/* Dark Theme */
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.25);
}

::-webkit-scrollbar-track {
  background: transparent;
}
```

---

## Layout Components

### Menu Bar

```css
height: 44px;
padding: 0.375rem 0.5rem;
background: #ffffff;
border-bottom: 1px solid #e5e7eb;
backdrop-filter: blur(8px);
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

/* Dark Theme */
background: #111827;
border-color: #1f2937;
```

### Activity Bar (Sidebar Icons)

```css
width: 52px;
background: #ffffff; /* light */
background: #111827; /* dark */

/* Icon Item */
height: 48px;
margin: 2px 6px;

/* Icon */
width: 22px;
height: 22px;

/* Active/Hover */
background: linear-gradient(135deg, rgb(248, 181, 68), rgb(228, 161, 48));
border-radius: 8px;
```

### Status Bar

```css
height: 26px;
padding: 0 8px;
background: linear-gradient(135deg, rgb(248, 181, 68), rgb(228, 161, 48));
color: #1f2937;
font-size: 12px;
font-weight: 450;
border-top: 1px solid #e5e7eb;
```

---

## Gradients

### Highlight Gradient (Primary Action)

```css
background: linear-gradient(135deg, rgb(248, 181, 68), rgb(228, 161, 48));
```

### Danger Gradient

```css
background: linear-gradient(135deg, #ef4444, #dc2626);
```

### Info Gradient

```css
background: linear-gradient(135deg, #06b6d4, #0891b2);
```

---

## CSS Custom Properties Template

```css
:root {
  /* Colors */
  --color-highlight: rgb(248, 181, 68);
  --color-highlight-hover: rgb(228, 161, 48);
  --color-primary: #3b82f6;
  --color-success: #16a34a;
  --color-error: #dc2626;
  --color-warning: #ea580c;

  /* Backgrounds */
  --bg-main: #f3f4f6;
  --bg-surface: #ffffff;
  --bg-surface-secondary: #f3f4f6;

  /* Text */
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;

  /* Borders */
  --border-color: #e5e7eb;
  --border-color-hover: #d1d5db;
  --border-color-focus: #3b82f6;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  --font-size-base: 14px;
}

/* Dark Theme Override */
.dark {
  --color-primary: #60a5fa;
  --color-success: #34d399;
  --color-error: #f87171;
  --color-warning: #fb923c;

  --bg-main: #111827;
  --bg-surface: #1f2937;
  --bg-surface-secondary: #374151;

  --text-primary: #e5e7eb;
  --text-secondary: #9ca3af;
  --text-muted: #6b7280;

  --border-color: #374151;
  --border-color-hover: #4b5563;
  --border-color-focus: #60a5fa;

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4);
}
```

---

## Design Principles

1. **System Fonts** - Use native OS fonts for performance and familiarity
2. **Consistent Spacing** - All spacing based on rem units (base 14px)
3. **Semantic Colors** - Colors communicate meaning (red=error, green=success)
4. **Accessible Contrast** - WCAG compliant color combinations
5. **Smooth Transitions** - 150-300ms easing for micro-interactions
6. **Subtle Shadows** - Layered elevation for depth perception
7. **Rounded Corners** - Consistent 8px default radius
8. **Focus Indicators** - Clear visual feedback for keyboard navigation
9. **Dark Mode** - Complete theming for both light and dark preferences
10. **Gold Accent** - Signature highlight color for brand identity
