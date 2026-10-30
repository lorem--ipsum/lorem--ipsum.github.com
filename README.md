# fragnaud.fr

Personal résumé site. React 18 + TypeScript, built with Vite, styled with CSS Modules.

## Scripts

- `npm start` – dev server
- `npm run build` – type-check and build to `build/`
- `npm run preview` – serve the production build
- `npm run deploy` – build and publish `build/` to the `master` branch (GitHub Pages)

The `CNAME` lives in `public/` so that `gh-pages` doesn't wipe it on deploy.
Two pages: the résumé (`index.html`) and `/projects/` (`projects/index.html`), each its own Vite entry so the projects page does not load `oud`.
Content is in `src/career.json`, `src/skills.json` and `src/projects.json`.

`.npmrc` sets `legacy-peer-deps` because `oud` pulls in Material-UI v4, which predates React 18.
