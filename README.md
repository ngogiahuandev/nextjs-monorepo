# Next.js + shadcn/ui Dynamic Data Table

---

## Overview

This project is a modern web application built with [Next.js](https://nextjs.org/) and [shadcn/ui](https://ui.shadcn.com/), featuring a dynamic data table and a rich set of reusable UI components. It leverages the latest React (v19), TypeScript, Tailwind CSS, and Radix UI primitives for accessibility and design consistency.

---

## Features

- **Next.js 15** with App Router and Server Components
- **shadcn/ui**: Customizable, accessible UI components
- **Radix UI**: Low-level UI primitives for building high-quality design systems
- **Tailwind CSS 4**: Utility-first CSS framework for rapid UI development
- **TypeScript**: Type-safe codebase
- **Prettier & ESLint**: Automated code formatting and linting
- **Dark/Light Theme**: Theme switching with `next-themes`
- **Reusable Components**: Buttons, forms, dialogs, tables, charts, and more
- **Form Handling**: Integrated with `react-hook-form` and `zod` for schema validation
- **Animations**: Smooth UI transitions with `tw-animate-css`
- **Responsive Design**: Mobile-first, adaptive layouts

---

## Project Structure

```
src/
  app/           # Next.js app directory (routing, layout, pages)
  components/    # UI and provider components (shadcn/ui-based)
  hooks/         # Custom React hooks
  lib/           # Utilities and environment config
  public/        # Static assets (SVGs, icons)
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Customization

- **UI Components**: All UI components are located in `src/components/ui/` and are fully customizable.
- **Theme**: Easily switch between dark and light mode using the theme toggle.
- **Tailwind Config**: Customize your design system in `src/app/globals.css` and Tailwind settings.

---

## Scripts

- `dev`: Start the development server
- `build`: Build for production
- `start`: Start the production server
- `lint`: Run ESLint
- `lint:fix`: Auto-fix lint issues
- `format`: Format code with Prettier
- `type-check`: Run TypeScript type checks

---

## Major Dependencies

- [`next`](https://nextjs.org/)
- [`react`](https://react.dev/)
- [`shadcn/ui`](https://ui.shadcn.com/)
- [`@radix-ui`](https://www.radix-ui.com/)
- [`tailwindcss`](https://tailwindcss.com/)
- [`react-hook-form`](https://react-hook-form.com/)
- [`zod`](https://zod.dev/)
- [`lucide-react`](https://lucide.dev/)
- [`sonner`](https://sonner.emilkowal.ski/) (toasts)
- [`date-fns`](https://date-fns.org/) (date utilities)
- [`cmdk`](https://cmdk.paco.me/) (command menu)
- [`embla-carousel-react`](https://www.embla-carousel.com/) (carousel)
- [`recharts`](https://recharts.org/) (charts)

---

## Contributing

Feel free to open issues or pull requests for improvements and bug fixes!

---

## License

[MIT](LICENSE) (or your preferred license)
