# Declutter checklist

A small checklist app for practicing **React**, **TypeScript**, and **Vite**: add tasks, mark them done, or delete them. State lives in the browser only (nothing is saved after a full page reload unless you add persistence later).

## Live site

**https://dtzul04.github.io/declutter-checklist/**

## Repository

**https://github.com/Dtzul04/declutter-checklist**

## Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and production build
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (often `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: serve the production build locally
```

## Deploy (GitHub Pages)

The site is built and published with **GitHub Actions** when you push to `main`. In this repo, the Vite `base` path for production is set in the workflow so assets load under `/declutter-checklist/`.

Configure the repo under **Settings → Pages** with **Source: GitHub Actions**.
