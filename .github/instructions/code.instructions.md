---
description: Core coding standards for iStudio. Auto-loaded for all code generation, editing, and review tasks.
applyTo: "**/*.{tsx,ts,css,json}"
---

# iStudio Code Standards

> Apple Premium Partner e-commerce · Vite 8 + React 18 + TypeScript strict + Custom CSS

## Architecture

```
src/
├── App.tsx                    # Pathname router (no react-router)
├── index.tsx                  # Entry → StrictMode → <App />
├── styles/                    # Global CSS (fonts, resets, vars, homepage)
├── components/
│   ├── atoms/                 # Smallest units: icons/, logos/, CTA buttons, MapPin
│   ├── molecules/             # Composed atoms: ProductCard, BentoBox tiles, PLPProductRow
│   └── organisms/             # Complex blocks: GlobalNav, GlobalFooter, Layout, ProductStripe
├── sections/                  # Page sections: HeroBanner, BentoBox, WhyBuy, LOBStripe...
├── pages/                     # Route pages: HomePage, PDPPage, PLPPage, LOBPage, StoreLocatorPage
├── data/                      # Mock JSON (→ Shopify API later)
├── api/                       # Async fetch layer with simulated latency
├── hooks/                     # useProducts, useBanners
├── types/                     # Shared interfaces (index.ts barrel + shopify.ts)
└── utils/                     # formatPrice (THB)
```

## Import Rules

```tsx
// ✅ Use @/ absolute imports
import { ProductStripe } from '@/components/organisms/ProductStripe/ProductStripe';
import { formatPrice } from '@/utils/formatPrice';
import type { Product } from '@/types';

// ✅ Use barrel imports when available
import { IconFacebook, IconInstagram } from '@/components/atoms/icons';
import { LogoPartner } from '@/components/atoms/logos';
import { fetchProducts } from '@/api';
import { useProducts } from '@/hooks';

// ❌ Never relative beyond parent
import { X } from '../../../something';  // WRONG
```

## Component Pattern

```
ComponentName/
├── ComponentName.tsx    # Named export only
└── ComponentName.css    # Co-located, BEM naming
```

- Named exports: `export const Button = () => {}` — no default exports
- Props interface in same file, above component
- No inline styles except dynamic values (calculated, conditional)
- No nested render functions — extract to separate components

## TypeScript

- `strict: true` — zero `any` in new code
- Use `type` imports: `import type { Product } from '@/types'`
- Shared types → `src/types/index.ts`
- Feature-specific types → colocate in component file

## CSS

- **Custom CSS only — NO Tailwind**
- BEM naming: `.product-card__price--sale`
- CSS variables from `@/styles/vars.css`
- Font: `'SF Pro Text', 'SFProThai', -apple-system, sans-serif`

### Apple Design Tokens

| Token | Value |
|-------|-------|
| Text primary | `#1d1d1f` |
| Text secondary | `#6e6e73` |
| Accent/hover | `#0071e3` |
| Background | `#ffffff` |
| Border | `#d2d2d7` |
| Section alt bg | `#f5f5f7` |
| Error | `#de071c` |

### Responsive

| Breakpoint | Width |
|------------|-------|
| Mobile | `< 734px` |
| Tablet | `734px – 1068px` |
| Desktop | `> 1068px` |
| Max content | `1220px` → `calc((100% - 76.25rem) / 2)` |

### Transitions

```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

## Data Flow

```
src/data/*.json → src/api/*.ts → src/hooks/use*.ts → Component
```

- Components never import JSON directly
- API layer returns `Promise<T>` with simulated latency
- Hooks return `{ data, loading, error }`
- Currency: always THB via `formatPrice()`

## State

- Local `useState` + props — no global state library
- `useReducer` for multi-value state changes
- `localStorage` with expiry for persistence (see GlobalNav STORE_STORAGE_KEY)
- URL state via `window.location.pathname` (manual router in App.tsx)

## Accessibility

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`
- ARIA labels on all interactive elements
- `aria-expanded`, `aria-controls` on toggles
- Focus management in modals/drawers
- `prefers-reduced-motion` for animations

## Key Patterns

### Apple centering (1220px)
```css
max-width: 76.25rem;
margin: 0 auto;
padding: 0 calc((100% - 76.25rem) / 2);
```

### Carousel (react-slick peek mode)
```tsx
{ infinite: slidesToShow >= 2, slidesToShow: 1.15 }
```

### Scroll threshold
```tsx
const NAV_HEIGHT = 52;
const shouldShow = scrollY > NAV_HEIGHT; // constant, not offsetTop
```

## Do NOT

- Use Tailwind CSS
- Add state libraries (Redux, Zustand) without approval
- Use `any` type
- Create components without `.css` file
- Hardcode prices — use `formatPrice()`
- Use `px` for font-size — prefer `rem`
- Skip ARIA attributes
- Commit `node_modules/`, `dist/`, `.env`
