# Otaku Timeline 🎌

![GitHub last commit](https://img.shields.io/github/last-commit/howlcipher/Otaku-Timeline?style=for-the-badge&color=ff5555)
![GitHub pages](https://img.shields.io/github/actions/workflow/status/howlcipher/Otaku-Timeline/update.yml?branch=main&label=Pages&style=for-the-badge&color=50fa7b)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&color=8be9fd)

![Otaku Timeline Demo](https://howlcipher.github.io/Otaku-Timeline/og-image.jpg)

**Otaku Timeline** is a blazing-fast, visually striking, zero-login required application that fetches and visualizes AniList Anime and Manga libraries.

It is designed to be the ultimate companion app for AniList users, rendering your entire watch/read history into a beautiful, chronological pop-art timeline. The app dynamically color-tints itself based on your most recently completed shows, bringing your profile to life.

👉 **[Live Demo](https://howlcipher.github.io/Otaku-Timeline/)** | 📄 **[View Changelog](./change_log.md)**

---

### ✨ Features

* **⚡ Zero Login Required:** Just type in any AniList username and hit enter. Instantly view their entire public profile.
* **🧠 Smart Memory:** The app automatically saves the last username you searched (and your comparison friend) via LocalStorage, so you don't have to re-type it next time you visit.
* **👯 Friend Comparison Mode:** Type a second username to instantly generate a side-by-side comparison. See what shows you both share, what you both plan to watch, and who is scoring things higher.
* **🎨 Dynamic "Chameleon" Theming:** The entire UI (backgrounds, buttons, scrollbars, text-shadows) dynamically extracts and tints itself to match the official accent color of your most recently completed anime or manga.
* **📚 Anime & Manga Modes:** Seamlessly toggle between your Anime Watchlist and your Manga Reading list with a single click.
* **🕵️ Advanced Live Filtering:** 
  * Fuzzy search by title instantly.
  * Filter your timeline by specific **Genres** or **Release Years**.
  * **★ Masterpiece Filter:** Instantly hide everything except the shows you've rated a perfect 10/10.
* **🖼️ Otaku Aesthetics:** The UI features CSS-generated manga screentone (halftone) effects, cascading staggered load animations, high-contrast typography, and full AniList avatar integration.
* **🌗 Full Dark/Light Mode:** Automatically respects your operating system's color preferences on load, with a manual toggle switch.
* **📱 Responsive & Accessible:** Designed from the ground up to look incredible on both massive desktop monitors and mobile phone screens, with full ARIA accessibility support and a high-contrast Colorblind mode.

---

### 🛠️ Built With

* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="20" alt="HTML5" title="HTML5" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="20" alt="CSS3" title="CSS3" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="20" alt="TypeScript" title="TypeScript" /> **Vanilla HTML, CSS, TypeScript** — No heavy UI frameworks. Extremely lightweight.
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" height="20" alt="Vite" title="Vite" /> **Vite** — Lightning fast build tooling.
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" height="20" alt="GraphQL" title="GraphQL" /> **AniList GraphQL API** — Direct queries to the `graphql.anilist.co` endpoint.
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="20" alt="GitHub Pages" title="GitHub Pages" /> **GitHub Pages** — Automatically deployed via GitHub Actions on every push.

---

### 🚀 Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

*Powered by [AniList.co](https://anilist.co/)*
