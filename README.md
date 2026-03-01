# My Super App

## Architecture Boundaries

- `components/ui` keeps only low-level shadcn primitives.
- `features/os` owns OS shell and launcher behavior (home grid, dock, app registry, top-level launcher presentation).
- `features/apps` owns per-app behavior and app content modules.
- Shared app container behavior for app lifecycle (open/close shell behavior) lives in `features/apps/shared`.

## Import Rules

- `components/ui/*` can import from framework libs and `@/lib/*` only.
- `components/ui/*` must not import from `@/features/*`.
- `features/os/*` may import from `components/ui` and `features/apps` only through explicit public APIs if needed.
- `features/apps/*` may import from `components/ui` and `features/apps/shared/*`.
- Global providers stay in `components/providers/*`.

## Forbidden Rules

- Do not import any `@/features/*` module inside `components/ui/*`.
- Do not place app-specific business logic in `features/os/*`.
- Do not place OS launcher/shell logic in `features/apps/*`.

## Routing Agreement

- Use `Link` based navigation for app launch (`/apps/[appId]`).
- Do not use Parallel Routes.
- Desktop also opens apps in full-size screen layout.
