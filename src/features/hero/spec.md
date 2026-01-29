# Feature Spec: Rura Dance Academy Hero Section

## 1. Metadata

* **Feature Name:** Hero Section
* **Status:** Draft
* **Target Version:** Next.js 16 / Tailwind v4

## 2. Problem Statement

The first screen must immediately communicate the premium, feminine, and professional nature of Rura Dance Academy to convert visitors in the Midlands.

## 3. Goals

* Create a "wow" visual impact using high-quality video.
* Use elegant typography (Angst) to establish brand authority.
* Provide a clear, intuitive Call to Action (CTA).

## 4. Functional Requirements

* **Video Background:** Play a muted, looping video (`/hero-video.mp4`) with a dark overlay.
* **Text Animation:** Use `TextEffect` (fade-in-blur) for the main heading.
* **Smooth Entrance:** Use `AnimatedGroup` to stagger the entrance of the subheadline and buttons.
* **Sticky Header:** The navigation must be integrated or sit transparently above the hero.

## 5. UI / UX Rules

* **Background:** `#323332` with a radial gradient overlay to ensure text readability.
* **Typography:**
* H1: "Ballroom Dance Classes in the Irish Midlands" (Font: `Angst`, Color: `#D8D5D1`, Size: 64px).
* P: Take a free trial class and find out how dance can transform your world. (Font: `Roboto`, Color: `#D8D5D1`, Size: 18px).


* **CTA Button:**
* Shape: Pill (full rounded).
* Background: `#D39380` (Sense Rose).
* Text: "Book a Trial" (Color: `#323332`, All-caps).


* **Responsiveness:**
* Mobile: Stack elements vertically, reduce H1 to 40px.
* Desktop: Centered layout with max-width 1200px.



## 6. Data & Types

```typescript
type HeroProps = {
  title: string;
  description: string;
  videoSrc: string;
  ctaText: string;
}

```

## 7. Acceptance Criteria

* [ ] Video plays automatically and is muted.
* [ ] Heading uses `Angst` font and "fade-in-blur" animation.
* [ ] Button uses the brand Rose color and has a smooth hover scale effect.
* [ ] Layout is perfectly centered on all screen sizes.
