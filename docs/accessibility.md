# Accessibility checks

This page captures development-only accessibility checks for the wedding website.

## Color contrast

Run this check whenever `--color-background`, `--color-text`, or `--color-text-alt` changes.

For normal body text, target WCAG AA `>= 4.5:1`.

```zsh
python3 - <<'PY'
from pathlib import Path
import re

css = Path("assets/styles.css").read_text(encoding="utf-8")

tokens = {}
for raw_line in css.splitlines():
    line = raw_line.strip()
    if not line.startswith("--") or ":" not in line or not line.endswith(";"):
        continue
    name, value = line.split(":", 1)
    tokens[name.strip()] = value[:-1].strip()

def resolve_token(name, depth=0):
    """Recursively resolve CSS variable references."""
    if depth > 10:
        raise ValueError(f"Circular reference detected: {name}")
    if name not in tokens:
        raise ValueError(f"Missing token: {name}")
    
    value = tokens[name]
    
    # Check if value is a var(...) reference
    match = re.match(r"var\(\s*(--[a-z0-9\-]+)\s*\)", value)
    if match:
        return resolve_token(match.group(1), depth + 1)
    
    return value

def hex_to_luminance(hex_color):
    value = hex_color.lstrip("#")
    if len(value) == 8:
        value = value[:6]
    rgb = [int(value[i:i+2], 16) / 255 for i in (0, 2, 4)]

    def linear(channel):
        return channel / 12.92 if channel <= 0.03928 else ((channel + 0.055) / 1.055) ** 2.4

    r, g, b = [linear(channel) for channel in rgb]
    return (0.2126 * r) + (0.7152 * g) + (0.0722 * b)

def contrast_ratio(color_a, color_b):
    lum_a = hex_to_luminance(color_a)
    lum_b = hex_to_luminance(color_b)
    light, dark = sorted((lum_a, lum_b), reverse=True)
    return (light + 0.05) / (dark + 0.05)

background = resolve_token("--color-background")
for text_token in ("--color-text", "--color-text-alt"):
    text_value = resolve_token(text_token)
    ratio = contrast_ratio(background, text_value)
    status = "PASS" if ratio >= 4.5 else "FAIL"
    print(f"{text_token} ({text_value}) on --color-background ({background}): {ratio:.2f}:1 [{status}]")
PY
```

