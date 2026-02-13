# React Birthday Card Builder, with no registration needed.

## Tarjetagratis – React Birthday Card Builder

This project started as a simple personal need: I wanted to create a birthday card for my son.
Instead of using existing tools, I built a small card builder as an excuse to keep learning and experimenting.

No registration required — create, customize, generate, and share a card in just a few clicks.

**Key focus:** simplicity, fast UX, and minimal backend requirements.

### Features

- Create and customize birthday cards
- No user registration required
- Shareable short-code based cards
- Live preview before generation
- Optional deep customization

[Visit tarjetagratis.com](https://tarjetagratis.com)

### What I Learned

- Client-side React alone is not SEO-friendly; this project helped me understand when CSR is enough and when it isn’t.
- Early i18n implementations without a clear structure can become hard to maintain.
- Overusing AI tools without solid fundamentals leads to shallow understanding; today I use AI mainly for reasoning, validation, and learning.
- For many products, a simple monolithic backend is more effective than prematurely adopting microservices.

**Technologies Used**
React, TypeScript, and Laravel
PrimeReact: component library.
Animate.css: text animations. Animate.css
Card 3D effect: inspired by the WebDev Diaries video - Bird Hover Effect. Video
Fonts: all from Google Fonts Google Fonts
Images and backgrounds: generated with Google AI Studio Google AI Studio

### Local Setup

```bash
npm install
npm run dev

```

The backend is included in this repository and must be set up in order to generate the cards.
Once configured, you can preview the full card in the React application. The backend is only required when clicking the "Generate Card" button.

<!-- PORTFOLIO_DATA_START
**Stack:** React, TypeScript, PrimeFlex, PrimeReact, Laravel APIs.
**Description:** Tarjetagratis – a birthday card creation tool.
**What I've learned and tested:**
- Client-side React is not SEO-friendly by default, and this project helped me better understand when CSR is sufficient and when it isn’t.
- Early i18n implementations without a clear structure can become hard to maintain over time.
- At the time, I used AI tools with less experience; it’s easy to follow the hype and implement solutions without fully understanding them.
- This project helped me shift my mindset: today I use AI primarily as a learning and reasoning tool, not just for code generation.
- For many products, a simple monolithic backend is more effective and maintainable than prematurely adopting a microservices architecture.
PORTFOLIO_DATA_END -->
