# Feature Spec: Site Navigation

## 1. Goals
- Provide a persistent, elegant navigation bar.
- Support "Rura Dance Academy" branding (Angst font).
- Responsive: Sticky top, transparent background that blurs on scroll.

## 2. UI Requirements
- **Logo:** "Rura Dance Academy" (Font: Angst, Size: 24px).
- **Links:** Home, Programs, About, FAQ, Contact (Font: Sans, Weight: Regular).
- **CTA:** "Book Now" button (Pill-shaped, Sense Rose bg).
- **Behavior:** On light sections (bg-sense-light), text is bg-sense-dark. On dark sections (Hero), text is bg-sense-light.

## 3. Implementation Details
- Component: `src/features/navigation/components/Navbar.tsx`
- Use `framer-motion` for subtle hover effects.
- Mobile: Hamburger menu (using Shadcn Sheet).