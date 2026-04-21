# iStudio by UFicon — Copilot Instructions

> Apple Premium Partner e-commerce storefront.
> Vite + React 18 + TypeScript + Custom CSS (no Tailwind).
> Design source: Figma → Code. Production: Docker + Nginx on Coolify/PVE.

---

## 1. Project Identity

| Key | Value |
|-----|-------|
| Name | iStudio by UFicon |
| Stack | React 18, TypeScript (strict), Vite 8, Custom CSS |
| Language | Thai (UI labels) + English (code, comments) |
| Fonts | `SF Pro Text` (Latin), `SFProThai` (Thai) — self-hosted woff2 |
| Design tokens | `src/vars.css` (CSS custom properties from Figma) |
| Domain | `https://istudio.uficon.com` |
| Dev server | `http://localhost:5173` |

---

## 2. Architecture — Atomic Design + Pages/Sections

```
src/
├── index.tsx              # Entry point, renders <App />
├── App.tsx                # Router / top-level layout
├── styles.css             # Global font-face + resets
├── vars.css               # Figma design tokens (CSS vars)
│
├── components/
│   ├── atoms/             # Smallest UI units (Badge, Button, Divider)
│   │   └── Badge/
│   │       ├── Badge.tsx
│   │       └── Badge.css
│   ├── molecules/         # Composed atoms (ProductCard, SearchInput, StoreLocator)
│   │   └── ProductCard/
│   │       ├── ProductCard.tsx
│   │       └── ProductCard.css
│   └── organisms/         # Complex UI blocks (GlobalNav, GlobalFooter, BannerCarousel, ProductStripe)
│       └── GlobalNav/
│           ├── GlobalNav.tsx
│           └── GlobalNav.css
│
├── sections/              # Homepage section compositions (HeroBannerSection, BentoBoxSection, etc.)
│   └── WhatsNewSection/
│       ├── WhatsNewSection.tsx
│       └── WhatsNewSection.css
│
├── pages/                 # Route-level pages
│   ├── HomePage/
│   ├── PDPPage/
│   ├── PLPPage/
│   ├── LOBPage/
│   └── StoreLocatorPage/
│
├── data/                  # Static JSON (mock data, will be replaced by API)
│   ├── navMenu.json
│   ├── categories.json
│   ├── products/
│   └── banners/
│
├── api/                   # Data fetching layer (swap to real API later)
│   ├── products.ts
│   ├── banners.ts
│   └── navigation.ts
│
├── hooks/                 # Custom React hooks
│   ├── useProducts.ts
│   └── useBanners.ts
│
├── types/                 # Shared TypeScript interfaces
│   ├── index.ts           # Product, NavItem, BannerSlide, etc.
│   └── shopify.ts         # Shopify-specific types (future)
│
├── utils/                 # Pure utility functions
│   └── formatPrice.ts
│
└── [Legacy Figma exports]  # Top-level component folders (AppBlockImageVariant*, Icon*, Logo*, etc.)
                            # These are Figma-exported components — treat as reference, refactor into components/
```

---

## 3. Coding Rules

### 3.1 TypeScript
- `strict: true` — no `any` unless interfacing with Figma exports
- All props must have explicit interfaces (not inline)
- Export types from `src/types/index.ts` for shared types
- Use `type` imports: `import type { Product } from '../types'`

### 3.2 Components
- **One component per folder**: `ComponentName/ComponentName.tsx` + `ComponentName.css`
- **No default exports** — use named exports: `export function Button() {}`
- **Props interface** above the component in the same file
- **No inline styles** unless dynamic (calculated values, conditional colors)
- **Currency**: Always THB, use `formatPrice()` from `src/utils/`

### 3.3 CSS (Custom CSS — NO Tailwind)
- Each component has its own `.css` file, imported directly
- Use **BEM-like naming**: `.gn-category-link`, `.product-card__price`
- Use CSS custom properties from `vars.css` when available
- Font family: always reference `'SF Pro Text', 'SFProThai', -apple-system, sans-serif`
- **Apple design colors**:
  - Primary text: `#1d1d1f`
  - Secondary text: `#6e6e73`
  - Hover / accent: `#0071e3`
  - Background: `#ffffff`
  - Border: `#d2d2d7`
  - Section alt bg: `#f5f5f7`
- **Responsive breakpoints**:
  - Mobile: `< 734px`
  - Tablet: `734px – 1068px`
  - Desktop: `> 1068px`
  - Max content width: `1220px` — use `calc((100% - 76.25rem) / 2)` for Apple centering
- **Transitions**: `0.3s cubic-bezier(0.4, 0, 0.2, 1)` for smooth Apple-feel

### 3.4 Data Flow
```
src/data/*.json  →  src/api/*.ts  →  src/hooks/use*.ts  →  Component
```
- JSON files are mock data (will be replaced by Shopify API)
- API layer simulates async fetch with `Promise` + small delay
- Hooks return `{ data, loading, error }` pattern
- Components never import JSON directly — always go through hooks

### 3.5 Images & Assets
- Product images: external CDN URLs (Shopify/Cloudflare)
- Icons: inline SVG components (e.g., `IconSearch`, `IconChevronRight`)
- Logos: dedicated components (`LogoPartner`, `LogoWipApp`, `LogoAppleCare`)
- Fonts: `/public/fonts/` — SF Pro Text (400/500/600/700) + SFProThai (variable)

### 3.6 State Management
- **No global state library** — local `useState` + props drilling
- Complex state: `useReducer` when needed
- Cross-component: lift state to nearest common parent
- Persistent state: `localStorage` with expiry (see `STORE_STORAGE_KEY` pattern in GlobalNav)

---

## 4. Component Creation Checklist

When creating a new component:

```
1. [ ] Create folder: src/components/{atoms|molecules|organisms}/ComponentName/
2. [ ] Create ComponentName.tsx with named export
3. [ ] Create ComponentName.css with scoped class names
4. [ ] Define Props interface at top of .tsx file
5. [ ] Add TypeScript types to src/types/index.ts if shared
6. [ ] Use semantic HTML + ARIA attributes
7. [ ] Add responsive styles (mobile-first)
8. [ ] Test on 375px, 768px, 1440px viewports
```

---

## 5. Legacy Figma Export Components

The top-level folders in `src/` (e.g., `AppBlockImageVariant1/`, `IconSearch/`, `FamilyStripe/`) are **Figma auto-exports**. Rules:

- Do NOT modify Figma exports in-place for new features
- When building features, create proper components in `components/` that reference or replace these
- Figma exports use `SfProText-*` font-family aliases — these are mapped in `styles.css`
- Some use `styled-components` — migrate to plain CSS when refactoring
- `U+F8FF` () is Apple's private-use char — only renders in SF Pro; replace with text in production components

---

## 6. Key Patterns

### Apple-style centering (1220px container)
```css
.section-inner {
  max-width: 76.25rem; /* 1220px */
  margin: 0 auto;
  padding: 0 calc((100% - 76.25rem) / 2);
}
```

### Carousel (react-slick)
```tsx
// For fractional slides (peek mode):
// infinite: false when slidesToShow is fractional
// CSS media query breakpoint must match calculated width
const settings = {
  infinite: slidesToShow >= 2,
  slidesToShow: 1.15,
  arrows: false,
  dots: false,
};
```

### Scroll threshold (sticky nav add-ons)
```tsx
// Use constant measurements, not element positioning
const NAV_HEIGHT = 52;
const shouldShow = scrollY > NAV_HEIGHT;
// NOT: element.offsetTop (couples trigger to action)
```

### Production file hotfix
```
1. SSH → edit production file directly
2. Verify fix live
3. THEN commit + push to GitHub
// Don't wait for CI/CD when production is down
```

---

## 7. DevOps & Deployment

### Docker Build
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

### Nginx Config
- SPA fallback: `try_files $uri $uri/ /index.html`
- Gzip enabled for text/css/json/js/xml/svg
- Served on port 80

### Infrastructure
| Environment | Host |
|-------------|------|
| Dev | `localhost:5173` (Vite) |
| Staging | Coolify on `pve01.prod.uficon.com` |
| Production | Docker + Nginx behind Cloudflare |

### Allowed Dev Hosts
```
localhost, 127.0.0.1, dev.m2developer.com,
coolify.pve01.prod.uficon.com,
filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com
```

### Git Workflow
- Branch from `main`
- Commit messages: descriptive, English
- Never `git push --force`
- Never commit `.env`, secrets, or `.vscode/`
- `.gitignore` covers: `node_modules/`, `dist/`, `.vite/`, `.history/`, `.vscode/`, `.claude/`

---

## 8. Agent Roles

### Frontend Agent
**Focus**: Components, pages, sections, styling, accessibility

- Follow Atomic Design: atoms → molecules → organisms → sections → pages
- CSS only (no Tailwind) — use vars.css tokens
- Mobile-first responsive design
- All text in Thai for UI, English for code
- ARIA labels on all interactive elements
- Test at 375px / 768px / 1440px
- Carousel libraries: `react-slick`, `embla-carousel-react`, `swiper`
- Image galleries: `@fancyapps/ui` (Fancybox)
- Color extraction: `colorthief` (for dynamic product backgrounds)

### DevOps Agent
**Focus**: Build, deploy, infrastructure, CI/CD

- Dockerfile: multi-stage (node:20-alpine → nginx:alpine)
- Vite build output → `dist/`
- Deploy target: Coolify (PVE) or direct Docker
- Nginx serves SPA with history fallback
- Cloudflare DNS in front
- Monitor: Docker logs, nginx access logs
- SSL: Cloudflare edge certificates
- No secrets in repo — use environment variables

### Data/API Agent
**Focus**: Data layer, mock → real API migration

- Current: static JSON in `src/data/`
- Future: Shopify Storefront API (GraphQL)
- API layer: `src/api/*.ts` — async functions returning typed data
- Hooks: `src/hooks/use*.ts` — `{ data, loading, error }` pattern
- Types: `src/types/index.ts` — Product, BannerSlide, NavItem, etc.
- Price format: THB, `formatPrice()` utility
- Shopify types ready at `src/types/shopify.ts`

### QA Agent
**Focus**: Quality, accessibility, performance

- TypeScript strict mode — no `any` in new code
- Semantic HTML (nav, main, section, article, aside)
- ARIA: labels, roles, expanded states, live regions
- Lighthouse targets: Performance > 90, Accessibility > 95
- Bundle size: watch Vite build output
- Fonts: ensure SFProThai loads for Thai text rendering
- Image optimization: WebP/AVIF from CDN, proper alt text

---

## 9. Do NOT

- Use Tailwind CSS (project uses custom CSS)
- Add global state libraries (Redux, Zustand) without explicit approval
- Modify Figma export folders for new features
- Use `any` type in new code
- Create components without a matching .css file
- Hardcode prices (always use `formatPrice()`)
- Use `px` for font-size in responsive contexts (prefer `rem`)
- Skip ARIA attributes on interactive elements
- Commit `node_modules/`, `dist/`, `.env`, `.vscode/`, `.claude/`
- Use `calc((100% - 76.25rem) / 2)` without understanding it (it's Apple's 1220px centering — load-bearing)
