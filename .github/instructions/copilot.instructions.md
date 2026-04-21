# iStudio by UFicon — Copilot Instructions

> Apple Premium Partner e-commerce storefront.
> Vite 8 + React 18 + TypeScript (strict) + Custom CSS (no Tailwind).
> Production: Docker + Nginx on Coolify/PVE behind Cloudflare.

## Project Identity

| Key | Value |
|-----|-------|
| Name | iStudio by UFicon |
| Stack | React 18, TypeScript strict, Vite 8, Custom CSS |
| Language | Thai (UI) + English (code) |
| Fonts | `SF Pro Text` (Latin) + `SFProThai` (Thai) — self-hosted woff2 |
| Design tokens | `src/styles/vars.css` |
| Domain | `https://istudio.uficon.com` |
| Dev | `http://localhost:5173` |

## Architecture — Atomic Design

```
src/
├── App.tsx                      # Pathname-based router
├── index.tsx                    # Entry: StrictMode → <App />
├── styles/                      # fonts.css, global.css, vars.css, homepage.css
│
├── components/
│   ├── atoms/                   # Primitives
│   │   ├── icons/               # 10 icon components + index.ts barrel
│   │   ├── logos/               # LogoPartner, LogoWipApp + index.ts barrel
│   │   ├── CtaButtonPrimaryStateDefault/
│   │   ├── CtaButtonSecondaryStateDefault/
│   │   └── MapPinScenarioDefault/
│   ├── molecules/               # Composed atoms
│   │   ├── AnnouncementBar/
│   │   ├── BentoBoxTileBig/
│   │   ├── PLPProductRow/
│   │   ├── SearchInput/
│   │   ├── StoreLocator/
│   │   └── ...12 components
│   ├── organisms/               # Complex blocks
│   │   ├── GlobalNav/
│   │   ├── GlobalFooter/
│   │   ├── Layout/
│   │   ├── ProductStripe/
│   │   ├── FamilyStripe/
│   │   ├── HeroBannerCarousel/
│   │   └── ...13 components
│   └── ToggleRow/               # PDP-specific toggle
│
├── sections/                    # 15 homepage sections
├── pages/                       # 5 route pages
│   ├── HomePage/
│   ├── PDPPage/    (+ AddOnNavbarMobile, HeadBanner)
│   ├── PLPPage/
│   ├── LOBPage/
│   └── StoreLocatorPage/
│
├── data/                        # Mock JSON (navMenu, products/, banners/)
├── api/                         # Fetch layer + index.ts barrel
├── hooks/                       # useProducts, useBanners + index.ts barrel
├── types/                       # index.ts (shared) + shopify.ts
└── utils/                       # formatPrice
```

## Import Convention

```tsx
// Absolute with @/ alias (configured in tsconfig + vite)
import { ProductStripe } from '@/components/organisms/ProductStripe/ProductStripe';
import type { Product } from '@/types';

// Barrel imports for high-usage directories
import { IconFacebook, IconInstagram } from '@/components/atoms/icons';
import { LogoPartner } from '@/components/atoms/logos';
import { useProducts } from '@/hooks';
import { fetchProducts } from '@/api';
```

## Component Rules

- **One folder per component**: `Name/Name.tsx` + `Name.css`
- **Named exports only**: `export const Button = () => {}`
- **Props interface** above component in same file
- **No inline styles** except dynamic values
- **No `any`** — TypeScript strict enforced

## CSS (Custom — No Tailwind)

- Co-located `.css` per component, BEM naming
- Font: `'SF Pro Text', 'SFProThai', -apple-system, sans-serif`
- Colors: `#1d1d1f` / `#6e6e73` / `#0071e3` / `#d2d2d7` / `#f5f5f7`
- Breakpoints: `< 734px` (mobile), `734–1068px` (tablet), `> 1068px` (desktop)
- Max width: `76.25rem` → `calc((100% - 76.25rem) / 2)` (Apple centering — load-bearing)
- Transitions: `0.3s cubic-bezier(0.4, 0, 0.2, 1)`

## Data Flow

```
data/*.json → api/*.ts → hooks/use*.ts → Component
```

- Components never import JSON directly
- Hooks return `{ data, loading, error }`
- Price format: THB via `formatPrice()` — never hardcode

## State

- `useState` + props — no global state library
- `useReducer` for multi-value changes
- `localStorage` with TTL for persistence
- No Context unless 3+ levels prop drilling

## Key Patterns

### Apple centering
```css
max-width: 76.25rem;
padding: 0 calc((100% - 76.25rem) / 2);
```

### Carousel peek mode (react-slick)
```tsx
{ infinite: slidesToShow >= 2, slidesToShow: 1.15 }
```

### Scroll threshold
```tsx
const NAV_HEIGHT = 52;
const shouldShow = scrollY > NAV_HEIGHT; // constant, not offsetTop
```

## DevOps

| Env | Host |
|-----|------|
| Dev | `localhost:5173` (Vite) |
| Staging | Coolify on `pve01.prod.uficon.com` |
| Prod | Docker (node:20-alpine → nginx:alpine) + Cloudflare |

- SPA fallback: `try_files $uri $uri/ /index.html`
- Git: branch from `main`, never `push --force`
- Never commit `.env`, `node_modules/`, `dist/`

## Do NOT

- Use Tailwind CSS
- Add state libraries without approval
- Use `any` type in new code
- Create components without `.css` file
- Hardcode prices
- Use `px` for font-size (use `rem`)
- Skip ARIA attributes on interactive elements
- Put components at `src/` root level (use components/ hierarchy)
