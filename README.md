# React Portfolio

This repository contains a personal portfolio site built with React and Vite. It showcases projects, experience, and technologies, and is configured for deployment to GitHub Pages.

## Table of contents
- [About](#about)
- [Built with](#built-with)
- [Prerequisites](#prerequisites)
- [Local development](#local-development)
- [Build & Preview](#build--preview)
- [Deploy](#deploy)
- [Project structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)
- [Contact](#contact)

## About
A fast, responsive portfolio site built using React, Vite and Tailwind CSS. The site demonstrates projects, technologies and contact information.

## Built with
- React
- Vite
- Tailwind CSS
- framer-motion
- react-icons

## Prerequisites
- Node.js (recommend v18 or later)
- npm (or yarn)

## Local development
1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

Open http://localhost:5173 (or the port shown by Vite) in your browser.

## Build & Preview
To build the production bundle:

```powershell
npm run build
```

To preview the production build locally:

```powershell
npm run preview
```

The production output is generated to the `build/` directory.

## Deploy
This project includes a simple GitHub Pages deployment flow. The package.json provides two helper scripts: `predeploy` and `deploy`.

To deploy to the configured `homepage` (GitHub Pages):

```powershell
npm run deploy
```

This runs `npm run build` (via `predeploy`) and publishes the `build/` directory using `gh-pages`.

## Project structure (top-level)

- `index.html` - main HTML template for the Vite app
- `src/` - React source files
	- `components/` - React components (Hero, Navbar, Projects, etc.)
	- `assets/` - images and static assets
	- `App.jsx`, `main.jsx` - app entry points
- `public/` - static files copied to the build
- `build/` - production build output (generated)
- `package.json` - scripts and dependencies

## Scripts
The main npm scripts (as defined in `package.json`):

- `npm run dev` — Run the Vite development server
- `npm run build` — Build the app for production (output to `build/`)
- `npm run preview` — Locally preview the production build
- `npm run lint` — Run ESLint across the project
- `npm run deploy` — Build and publish the `build/` folder to GitHub Pages (uses `gh-pages`)

## License
This project is provided under the MIT License. See the LICENSE file for details (if present).

## Contact
If you need to reach the maintainer, check the `package.json` or repository profile for contact details.

---

Generated README for the project root. Adjust or expand sections as needed.
