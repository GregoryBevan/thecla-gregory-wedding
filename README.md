# Grégory & Thecla wedding website

A static, mobile-first wedding website scaffold with shared design tokens for color, typography, spacing, and layout.

The project now uses Vite for local development and production builds while keeping the site itself simple and framework-free.

## Project structure

```text
.
├── index.html
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── assets/
│   ├── styles.css
│   └── ...
├── theme-preview.js
├── README.md
└── LICENSE
```

## Local development

Prerequisites: Node.js `20.19+` or `22.12+` (Vite `7.x` requirement) and `pnpm` `11+`.

Install dependencies from the repository root:

```zsh
pnpm install
```

Start the development server:

```zsh
pnpm dev
```

Create a production build:

```zsh
pnpm build
```

Preview the production build locally:

```zsh
pnpm preview
```

Vite will print the local URL to open in your browser, typically something like:

- `http://localhost:5173/`

## Design tokens

The source of truth for design tokens lives in `assets/styles.css` under the top-level `:root` block.

### Color tokens

Use these variables to update the palette site-wide:

- `--color-background`
- `--color-surface`
- `--color-surface-strong`
- `--color-white`
- `--color-text`
- `--color-text-alt`
- `--color-text-muted`
- `--color-line`
- `--color-accent`
- `--color-accent-strong`
- `--color-accent-soft`
- `--color-panel-soft`
- `--color-blush`

### Typography tokens

Shared type choices are also defined in `:root`:

- Font families: `--font-family-body`, `--font-family-display`
- Font sizes: `--font-size-body`, `--font-size-ui`, `--font-size-eyebrow`, `--font-size-card-title`, `--font-size-brand`, `--font-size-hero`, `--font-size-section`, `--font-size-highlight`
- Line heights: `--line-height-body`, `--line-height-tight`
- Letter spacing: `--letter-spacing-eyebrow`

### Spacing tokens

Use the spacing scale before introducing new one-off spacing values:

- `--space-2xs`
- `--space-xs`
- `--space-sm`
- `--space-md`
- `--space-lg`
- `--space-xl`
- `--space-section`
- `--space-panel`
- `--container-inline-padding`
- `--container-inline-padding-wide`

### Layout tokens

Shared layout-related variables:

- `--max-width`
- `--header-offset`
- `--breakpoint-tablet`
- `--breakpoint-desktop`
- `--radius-large`
- `--radius-medium`
- `--shadow-soft`

## Theme preview

- Default text color token: `--color-text`
- Alternate text color token: `--color-text-alt`
- Preview modes are available through query params:
  - `?textColor=default`
  - `?textColor=alt`


## Viewport frame

- The default frame style is `frame-style-ornate` on the `<body>` element.
- An alternate candidate style is available as `frame-style-minimal`.
- To preview the alternate candidate without editing markup, use:
  - `?frameStyle=minimal`
  - `?frameStyle=ornate`
- The frame is CSS-only (fixed pseudo-elements) to avoid extra asset requests.

## Tile corner motif

- Decorative tile corners use the default `petal fan` motif.

## Contrast check

For development-time contrast verification (method + command), see `docs/accessibility.md`.

## Updating the background later

When invitation colors are finalized, change only `--color-background` in `assets/styles.css` to a new white/ivory tone. That single variable controls the page background.

## Notes

- The site is built mobile-first, with progressive enhancement for tablet and desktop breakpoints.
- Vite is used only for developer ergonomics and build/preview commands; the site remains a simple static HTML and CSS project.
- If you want to change the overall look later, start with the token values in `assets/styles.css` instead of editing component rules one by one.



