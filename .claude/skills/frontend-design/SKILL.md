---
name: frontend-design
description: Design system rules for the Lunessa Florist site (soap flower bouquet brand) — typography, spacing, color tokens, component patterns, and animation feel. Use whenever writing or reviewing any UI code (components, pages, CSS/Tailwind classes) for this project.
---

# Lunessa Florist — Frontend Design Rules

Lunessa Florist sells soap flower bouquets. The brand feel is soft, elegant, and botanical — never generic, corporate, or "default AI-generated." Apply these rules to every component and page in this codebase.

## Typography
- Headings: a clean serif font (elegant, feminine feel) — e.g. `font-serif` in Tailwind, or a Google Font such as Playfair Display / Cormorant / Fraunces.
- Body text: a simple, legible sans-serif — e.g. `font-sans`, Inter or similar.
- Never mix more than these two font families on a page.
- Favor generous line-height for body copy (`leading-relaxed` or looser) — avoid cramped text.

## Spacing
- All margins, padding, and gaps must be multiples of 8px (Tailwind's default 4px scale already aligns to this — stick to `2, 4, 6, 8, 12, 16...` steps, i.e. even multiples, not `1, 3, 5, 7`).
- Prefer generous white space over dense layouts. When in doubt, add more space around content, not less.

## Color Tokens
Define these as design tokens (CSS variables / Tailwind theme colors) once, and reference them everywhere. Never hardcode a raw hex value directly in component markup or one-off styles.

- `primary` — soft pink / rose (main brand color, used for primary actions and key accents)
- `neutral` — warm off-white / cream (backgrounds, surfaces — never stark white `#fff` or cold gray)
- `accent` — a deeper rose or gold (used sparingly for emphasis: hover states, highlights, decorative touches)

If a new color is ever needed, add it to the token set with a semantic name — don't drop a raw hex code into a component.

## Component Patterns
- **Buttons**: consistently rounded corners (e.g. `rounded-full` or `rounded-lg`), soft drop shadows (subtle, never harsh), smooth hover/active transitions.
- **Cards** (product showcases): consistent padding, rounded corners, soft shadow, used for every bouquet/product tile — no one-off card styles.
- **Forms** (contact section): simple, uncluttered fields with soft borders/focus states that match the palette — avoid harsh red-outline browser defaults; use the accent color for focus rings.

## Overall Aesthetic
- Prioritize a soft, elegant, botanical-inspired look. Avoid generic SaaS/dashboard patterns (heavy gradients, bold flat corporate blues, aggressive sans-serif headlines).
- Generous white space throughout — this is a florist brand, not a dense data product.

## Animation
- All motion (via `framer-motion` or CSS transitions) should feel gentle and organic — think petals settling, not UI snapping into place.
- Use eased, slower transitions (e.g. `ease-out` / custom soft cubic-bezier), avoid linear or sharp/bouncy easing.
- Avoid abrupt appearances — prefer fades and gentle slides/scale-ins over instant or jarring reveals.
