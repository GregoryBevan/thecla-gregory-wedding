# Color palette notes

Issue `#10` applies the paper invitation colors to the website.

## Invitation anchor colors

These three values are the source palette:

- `#98a796` — sage
- `#9da598` — misted olive
- `#5c6c63` — evergreen

## Token mapping

The site keeps using shared design tokens in `assets/styles.css`.

- `--color-accent` → `#98a796`
- `--color-panel-soft` → `#9da598`
- `--color-accent-strong` and `--color-text` → `#5c6c63`

Derived neutrals keep the UI readable while staying in the same family:

- `--color-background` uses a very light sage-tinted ivory
- `--color-surface` and `--color-surface-strong` stay nearly white for content readability
- `--color-line`, frame, shadow, and overlay values reuse evergreen/sage with transparency

## Verification

After updating palette tokens, run the contrast check documented in `docs/accessibility.md` and rebuild the site.
