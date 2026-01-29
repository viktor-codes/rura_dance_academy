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

# Spec Update: Mobile Overlay Navigation

## 1. Visual Behavior
- **Animation**: Menu drops down from the top (Y-axis: -100% to 0).
- **Layout**: 
  - Logo stays fixed in its top-left position.
  - Burger icon stays fixed in its top-right position.
  - Menu items are vertically and horizontally centered in the screen.
- **Burger Transformation**: Animated transition from 3 lines to an "X" shape.

## 2. Technical Requirements
- Use `AnimatePresence` from `framer-motion` for mounting/unmounting.
- Menu overlay must have `backdrop-blur-md` and `bg-sense-light/95`.
- Font: Links in `var(--font-sans)`, uppercase, tracked-wider.

## 3. Interaction
- Burger click triggers `isOpen` state.
- Clicking a link or the "X" closes the menu.