# walk-treadmill-client

Android-first PWA for the treadmill workout planner: React 19, TypeScript, Vite, Tailwind v4, shadcn/ui.

> **Status: scaffold.** One placeholder page. The UI mockup is in [mockup/index.html](mockup/index.html).

Product docs live in [walk-treadmil-shared](https://github.com/ammyblabla/walk-treadmil-shared):

- [Task list](https://github.com/ammyblabla/walk-treadmil-shared/blob/main/docs/task-list.md)
- [Frontend requirement](https://github.com/ammyblabla/walk-treadmil-shared/blob/main/docs/requirement/03-frontend-requirement.md)
- [DB schema and REST API](https://github.com/ammyblabla/walk-treadmil-shared/blob/main/docs/requirement/02-db-schema-and-api.md)
- [ADR-0001 tech stack](https://github.com/ammyblabla/walk-treadmil-shared/blob/main/docs/adr/0001-tech-stack.md)

## Run locally

Requires Node 22.20+.

```bash
npm install
npm run dev          # http://localhost:5173
```

## Checks

```bash
npm run typecheck    # tsc -b
npm run lint         # oxlint (warnings fail)
npm test             # vitest run (jsdom + Testing Library)
npm run build        # production build to dist/
```

## Adding UI components

```bash
npx shadcn@latest add card   # copies the component into src/components/ui/
```

## Layout

```
src/
  main.tsx            entry: mounts <App /> into #root
  App.tsx             placeholder page (replaced by the app shell in task 1.7)
  index.css           Tailwind + shadcn theme variables
  components/ui/      shadcn components (generated; edit freely)
  test/setup.ts       Vitest setup (DOM matchers)
```
