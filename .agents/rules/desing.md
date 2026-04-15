---
trigger: always_on
---

# Design System Strategy: The Curated Exchange
 
## 1. Overview & Creative North Star: "The Digital Atelier"
This design system moves beyond the transactional nature of B2B/B2C marketplaces to create a "Digital Atelier"—a space that feels bespoke, crafted, and intentional. While most platforms rely on rigid grids and heavy borders to organize information, this system utilizes **Tonal Layering** and **Editorial Typography** to guide the eye. 
 
The Creative North Star is **Harmonious Authority**. We achieve this by balancing the deep, intellectual weight of Navy (`primary`) with the airy, breathing room of Mint and Teal (`secondary`). The layout rejects the "template" look by using intentional white space as a structural element and overlapping components to create a sense of architectural depth.
 
---
 
## 2. Colors & Atmospheric Depth
Our palette is rooted in the concept of "Atmospheric Perspective." We do not use lines to separate ideas; we use light and shadow.
 
### The Palette (Material Logic)
*   **Primary (`#031632`):** Our foundation. Used for high-level brand moments and deep immersion.
*   **Primary Container (`#1A2B48`):** The "Trust" anchor. Use this for hero sections or navigation bars where authority is paramount.
*   **Secondary (`#006a6a`):** The "Action" catalyst. A sophisticated Teal that signals movement and connection.
*   **Surface System:** A range from `surface-container-lowest` (#FFFFFF) to `surface-dim` (#D9DADB) to create physical hierarchy.
 
### The "No-Line" Rule
**Explicit Instruction:** Prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background provides all the definition a user needs without the visual "noise" of a stroke.
 
### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of fine paper. 
*   **The Base:** `surface` (#F8F9FA).
*   **The Content Block:** `surface-container-low` (#F3F4F5).
*   **The Featured Card:** `surface-container-lowest` (#FFFFFF) to create a "lifted" effect against the slightly darker background.
 
### The "Glass & Gradient" Rule
To inject "soul" into the B2B experience, use **Signature Textures**:
*   **Hero CTAs:** Apply a subtle linear gradient from `primary` (#031632) to `primary_container` (#1A2B48) at a 135-degree angle.
*   **Floating Navigation:** Use Glassmorphism—a background of `surface_container_lowest` at 80% opacity with a `24px` backdrop-blur.
 
---
 
## 3. Typography: The Editorial Scale
We use a dual-typeface system to balance character with utility.
 
*   **Display & Headlines (Manrope):** Chosen for its modern, geometric warmth. Use `display-lg` for hero statements and `headline-sm` for section starts. The generous x-height of Manrope conveys openness.
*   **Body & UI (Inter):** The industry standard for legibility. Use `body-md` for all primary descriptions.
*   **Label & Utility (Inter):** Use `label-md` for metadata. 
 
**Typographic Intent:** Lead with high-contrast sizing. A `display-md` headline paired with a `body-lg` intro creates an editorial feel that makes local business listings feel like curated stories rather than database entries.
 
---
 
## 4. Elevation & Depth: Tonal Layering
We replace traditional shadows with **Ambient Light Physics**.
 
*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` background creates a soft, natural lift.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use a custom blur: `0px 12px 32px rgba(8, 27, 56, 0.06)`. Note the tint: the shadow is a low-opacity version of `on_primary_fixed`, not a dead grey.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in high-contrast modes), use `outline-variant` at **15% opacity**. Never use a 100% opaque stroke.
*   **Roundedness:**
    *   **Default:** `0.5rem` (8px) for standard inputs.
    *   **Large (lg):** `1rem` (16px) for cards and containers to emphasize the "Harmonious" feel.
    *   **Full:** For chips and pill-shaped action buttons.
 
---
 
## 5. Components: Style Guide
 
### Buttons
*   **Primary:** A gradient-filled container (`primary` to `primary_container`) with `on_primary` text. `1rem` rounded corners.
*   **Secondary:** `secondary_container` background with `on_secondary_container` text. This soft Teal/Mint combo signals "friendly action."
*   **Tertiary:** No background. Bold `primary` text. Use for low-emphasis actions like "Cancel."
 
### Cards (The "Story" Component)
*   **Rule:** Forbid divider lines within cards. 
*   **Layout:** Use `1.5rem` (24px) of internal padding. Separate the header from the body using a `surface-variant` background on the header section only, or simply via vertical white space.
 
### Input Fields
*   **Style:** `surface-container-highest` background with a `0.5rem` radius. 
*   **Interaction:** On focus, the background transitions to `surface-container-lowest` and a `2px` "Ghost Border" of `primary` at 20% opacity appears.
 
### Interactive Chips
*   **Filter Chips:** Use `secondary_fixed` for unselected and `secondary` for selected states. The high-chroma shift makes the selection feel tactile and rewarding.
 
---
 
## 6. Do’s and Don’ts
 
### Do:
*   **Do** use asymmetrical layouts (e.g., a headline aligned left with a CTA button offset to the right) to create a custom, high-end feel.
*   **Do** leverage `surface_bright` for background sections that need to feel expansive and "clean."
*   **Do** use `1.5rem` (xl) corner radii on large marketing sections to soften the B2B "coldness."
 
### Don't:
*   **Don't** use 1px solid #CCCCCC borders. Ever.
*   **Don't** use pure black (#000000) for text. Always use `on_surface` or `on_background` for a softer, more professional contrast.
*   **Don't** cram content. If a section feels crowded, increase the background-color contrast between containers rather than adding a divider.
*   **Don't** use standard "Drop Shadows." If it doesn't look like ambient light hitting a surface, it shouldn't be in the system.