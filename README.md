# fragnaud.fr

Personal résumé site. React 18 + TypeScript, built with Vite, styled with CSS Modules.

## Scripts

- `npm start` – dev server
- `npm run build` – type-check and build to `build/`
- `npm run preview` – serve the production build
- `npm run deploy` – build and publish `build/` to the `master` branch (GitHub Pages)

The `CNAME` lives in `public/` so that `gh-pages` doesn't wipe it on deploy.
Content is in `src/career.json` and `src/skills.json`.

`.npmrc` sets `legacy-peer-deps` because `oud` pulls in Material-UI v4, which predates React 18.
