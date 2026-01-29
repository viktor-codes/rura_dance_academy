Вот финальная, технически выверенная версия спецификации для твоей фичи **Groups & Styles**. Она учитывает твои пожелания по десктопной сетке, возрастным группам и визуальному стилю «Sense».

Создай или полностью замени содержимое файла `src/features/groups-catalog/spec.md` на этот текст:

---

# Feature Spec: Dynamic Groups Catalog

## 1. Metadata

* **Feature Name:** Groups & Styles Catalog
* **Status:** Approved
* **Target Version:** Next.js 16 / React 19
* **Design Pattern:** Responsive Hybrid (Tabs on Mobile, Grid on Desktop)

## 2. Problem Statement

The user needs to see all available dance groups at a glance. On mobile, we avoid long scrolling using tabs. On desktop, we show the full scale of the academy using a wide grid to fill the space and build authority.

## 3. UI Copy & Content

### 3.1 Section Headers

* **Main Heading (H2):** "Find Your Rhythm"
* **Sub-heading (P):** "From first steps to professional flow — we have a group for every stage of your dance journey."

### 3.2 Group Cards Data

| Age Group | Card Title (Angst) | Description (Roboto) | Key Benefit (Badge) |
| --- | --- | --- | --- |
| **Kids (4-12)** | Intro to Latin | Focus on posture, coordination, and basic rhythm in a fun environment. | Early Development |
| **Teens (13-19)** | Latin Energy | Master Cha-cha and Samba while building stage confidence and speed. | Confidence |
| **Adults (20+)** | Sensual Flow | Embrace femininity through Rumba and Stretching. Your time for self-care. | Self-Care |

## 4. Visual & Interaction Rules

### 4.1 Responsive Logic (Crucial)

* **Mobile (< 768px):** Use a Tab-based navigation to switch between groups. Only one card is visible at a time to maintain focus.
* **Desktop (>= 768px):** Hide Tabs. Display all three cards in a `grid-cols-3` layout within a `max-w-7xl` container.

### 4.2 Styling (Tailwind v4)

* **Container Background:** `bg-sense-light` (#D8D5D1).
* **Card Design:** - Background: White (`bg-white`).
* Typography: Titles in `var(--font-angst)`, Body/Badges in `var(--font-sans)`.
* Badge: Small pill shape, text `sense-rose` (#D39380), subtle border.


* **Hover States (Desktop):**
* Smooth scale: `hover:scale-105`.
* Border highlight: `hover:border-sense-rose`.



### 4.3 Animations (Framer Motion)

* **Grid Entrance:** Staggered fade-in for cards (0.1s delay between items).
* **Tab Switching (Mobile):** Use `AnimatePresence` with a "fade-in-blur" effect when changing groups.

## 5. Technical Implementation

* **Component Path:** `src/features/groups-catalog/components/GroupsGrid.tsx`
* **Data Strategy:** Store card data in a constant array within `src/features/groups-catalog/constants.ts`.
* **State Management:** Use `useState` for active tab on mobile only.
* **React 19:** Rely on React Compiler; do not use `useMemo`.

## 6. Acceptance Criteria

* [ ] On desktop, I see 3 cards in one row.
* [ ] On mobile, I see tabs (4-12, 13-19, 20+) that switch the content.
* [ ] Heading and sub-heading are centered and match the copy exactly.
* [ ] Titles use the Angst font.
