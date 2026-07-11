# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-07-10
### Added
- **PWA Support:** Progressive Web App implementation with `manifest.json` and a service worker for offline caching and home-screen installation.
- **Export as Image:** "Export Stats" button using `html2canvas` to easily save and share your statistics banner as a `.png`.
- **Shareable URLs:** The URL automatically updates with query parameters (`?u1=...&u2=...&type=...`) so you can instantly share your exact timeline comparison with friends.
- **Premium UI Enhancements:** 
  - Glassmorphism effects applied to the retro sticky header.
  - Scroll-reveal `IntersectionObserver` micro-animations for cards and banners.
  - Shimmering skeleton loaders during API fetch delays.
  - A sleek bottom-right toast notification system.
- **Genre Distribution Visualizer:** A dynamic horizontal bar chart embedded in the stats banner.

### Fixed
- High Contrast button text now correctly initializes as "👁️ High Contrast".
- The top header menu is now completely collapsible via the hamburger icon on both desktop and mobile viewports.
- Advanced filter rules (Search Query, Genre, Release Year, and Masterpieces Only) now correctly apply to the "Shared" and "Plan to Watch" side-by-side lists in Compare Mode.

### Changed
- The timeline logic now prioritizes fetching the official English title for an anime/manga. It falls back to Japanese Romaji and then user-preferred settings if an English title is unavailable.
- Extracted and decoupled the core API data filtering logic for strict unit testing (Vitest).
