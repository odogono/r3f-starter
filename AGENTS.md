# Repository Guidelines

## Project Structure & Module Organization
- App entry: `src/main.tsx`; global styles: `src/index.css`.
- Domains: `src/components`, `src/contexts`, `src/helpers`, `src/hooks`, `src/screens`, `src/assets`.
- Public assets served as-is: `public/`.
- Vite/Tailwind/TS config: `vite.config.ts`, `tailwind.config.js`, `tsconfig*.json`.
- Import aliases (via Vite/Vitest): `@components`, `@contexts`, `@helpers`, `@hooks`, `@screens`, `@types`.

## Build, Test, and Development Commands
- `bun run dev` — start Vite dev server.
- `bun run build` — production build (manual chunks for three/r3f/vendor).
- `bun run preview` — preview built app.
- `bun run test` — run Vitest.
- `bun run coverage` — Vitest with coverage (v8 reporters: text/json/html).
- `bun run lint` / `bun run lint:fix` — ESLint check/fix.
- `bun run format` / `bun run format:check` — Prettier write/check.
- `bun run unused` — detect unused files/exports (Knip).
- `bun run outdated` — review dependency updates.

## Coding Style & Naming Conventions
- Language: TypeScript + React; components are function components.
- Files: kebab-case (e.g., `toggle-button.tsx`); exported component identifiers: PascalCase.
- Indent 2 spaces; single quotes; semicolons on; width 80.
- Prettier enforced with sorted imports + Tailwind plugin (`.prettierrc`).
- ESLint config extends `@nkzw/eslint-config` with R3F plugin and strict TS/arrow rules.

## Testing Guidelines
- Framework: Vitest. Place tests near code as `*.test.ts`/`*.test.tsx` inside `src/`.
- Prefer unit tests for `helpers`/`hooks`; mock Three/R3F where heavy.
- Generate coverage via `bun run coverage`; keep meaningful coverage on changed lines.

## Commit & Pull Request Guidelines
- Commits: short, imperative subject; include scope when helpful (e.g., `components:`).
- PRs: clear description, linked issues, screenshots/video for UI or 3D changes, and notes on performance if three.js assets change.
- CI hygiene: run `bun run lint && bun run test` locally before opening/merging.

## R3F/Three Tips & Config
- Heavy deps are code-split (`rthree`, `three`, `vendor`); prefer lazy routes/chunks for large scenes.
- Use aliases for clean imports; avoid deep `three` internals unless necessary.
- Runtime defines: `__APP_VERSION__` and `__API_URL__` are provided via Vite define—do not hardcode secrets; prefer environment-driven configuration.
