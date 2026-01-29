# UI Components Spec

## GrainOverlay

- **Location:** `src/components/ui/GrainOverlay.tsx`
- **Purpose:** Subtle noise/grain effect over the entire site.
- **Implementation:**
  - SVG filter with `feTurbulence` for noise.
  - Covers full viewport: fixed position, full width/height.
  - Opacity: 0.05.
  - `pointer-events: none` so it does not block clicks.
- **Usage:** Rendered once in root layout, above page content.
