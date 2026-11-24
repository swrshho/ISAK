# ISAK Web: UI Contributor Guide

This guide is for people and AI coding assistants contributing to the ISAK website. It explains how to set up and run the web app, where UI code lives, and the conventions to follow when making changes.

## What this project is

The website is a right-to-left Persian-language web app built with:

- **Next.js 16** and its App Router for pages and server-side rendering.
- **React 19** for UI components.
- **TypeScript** for application code.
- **Tailwind CSS 4** for most component styling, with shared CSS variables in `app/globals.css`.
- **Sanity** as the content-management system. The separate `studio/` folder contains the Sanity Studio.
- **ESLint** for web-app linting.

The repository root is not the web app. Run web commands from `web/`; the CMS Studio has its own package and commands in `studio/`.

## Get started

### Requirements

- Node.js **20.9 or newer** and npm.
- Access to the repository.
- For pages or features that read Sanity content, the web app's Sanity settings (see [Environment settings](#environment-settings)).

### Install and run the website

In a terminal, move into the web app and install the exact dependencies recorded in its lockfile:

```bash
cd web
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Leave the terminal running while you work; Next.js refreshes the page as files change. Stop the server with `Ctrl+C`.

If you opened a terminal at the repository root, `cd web` first. Do not run `npm ci` at the repository root for web development: the root package is not the web application.

### Useful web commands

Run these from `web/`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Check the web source with ESLint. |
| `npm run build` | Create a production build and catch build-time errors. |
| `npm start` | Serve the production build; run `npm run build` first. |

There is no configured web test script at present. The root package's `npm test` command is only a placeholder and is not the web app's test suite.

### Run the content-management Studio (optional)

The Sanity Studio is a separate application. In another terminal:

```bash
cd studio
npm ci
npm run dev
```

Use the local URL printed by the Sanity CLI. The Studio can require Sanity account access. Its schema is in `studio/schemaTypes/`; do not change the schema just to make a visual-only website change.

## Project map

Paths below are relative to `web/` unless marked otherwise.

| Path | What belongs here |
| --- | --- |
| `app/` | App Router pages, route layouts, global CSS, and API route handlers. |
| `app/page.tsx` | Home route (`/`); currently delegates its page UI to the landing component. |
| `app/blog/page.tsx` | Blog route (`/blog`); currently contains placeholder content. |
| `app/blog/[slug]/page.tsx` | Dynamic blog route (`/blog/<slug>`); currently a placeholder. |
| `app/api/telegram/route.ts` | Telegram webhook endpoint. UI work should not change it. |
| `components/layout/` | Shared page layout, such as the site header and navigation. |
| `components/pages/` | Components composed for a particular page, such as the landing page. |
| `components/ui/` | Reusable visual building blocks, such as buttons and framed cards. |
| `components/ui/Header/` | Smaller pieces used by the header. |
| `lib/` | Shared non-visual utilities and Sanity client, query, and data-fetching code. |
| `public/` | Static images and icons, referenced by their URL under `/`. |
| `app/fonts/` | Font files used by the website. |

At the repository root, `studio/` is the Sanity content editor. Its `schemaTypes/` directory describes content types. The top-level `package.json` is not a monorepo runner; install and run each app from its own directory.

## How the UI is organized

- `app/layout.tsx` is the shared root layout. It loads the site font, global CSS, and shared header.
- `app/page.tsx` is the route entry point for `/`; page-specific composition is in `components/pages/landing/Landing.tsx`.
- Components under `components/ui/` are shared building blocks. Prefer reusing or extending an existing component over copying its markup into another page.
- In the App Router, components are Server Components by default. Keep UI server-rendered unless a component needs browser-only state, event handlers, or browser APIs. For those interactive components, add `"use client"` at the top of the smallest component that needs it.
- The Sanity client and queries are in `lib/sanity/`. Keep content fetching and visual presentation separate where practical.

The current UI is a work in progress: some routes and content are placeholders, and some header links point to routes that do not yet exist. Before adding a feature, check the route files and current behavior rather than assuming every visible link or content area is complete.

## Design and implementation rules

### Direction, language, and layout

- Preserve the current **right-to-left (RTL)** page direction. The root layout and header set RTL direction, and the UI currently uses Persian labels and content.
- Keep Persian text readable and correctly ordered. Use logical layout utilities and test layouts with RTL content; do not assume left-to-right alignment.
- The shared font is **Vazirmatn**, configured in `app/layout.tsx`. Keep using the site font unless a design explicitly calls for another one.
- Make layouts work at narrow mobile widths as well as desktop widths. The header already has separate desktop and mobile navigation patterns; account for the fixed mobile navigation when adding content near the bottom of the page.
- Prefer fluid widths, sensible maximum widths, and responsive Tailwind breakpoints instead of fixed page-wide dimensions.

### Colors and styling

- Use Tailwind utility classes for component layout and styling, following nearby components.
- Shared color variables and Tailwind theme mappings are in `app/globals.css`. Prefer existing, verified theme colors to introducing new one-off colors. Confirm a token is actually defined before using it.
- Keep styling close to the component it affects. Put genuinely global styles or shared design tokens in `app/globals.css`, not page-specific rules.
- Use consistent spacing, rounded corners, borders, and hover/focus states. Existing examples include `components/ui/CardFrame.tsx` and `components/ui/Button.tsx`.
- Avoid adding a second styling system or dependency for a small UI change.

### Accessibility and interaction

- Use semantic HTML: headings in order, `<nav>` for navigation, `<button>` for actions, and links for navigation.
- Give meaningful images useful alternative text. Decorative images should have empty alternative text and must not be announced as content.
- Ensure controls have an accessible name, visible keyboard focus, and sufficient contrast.
- Do not make an element look clickable unless it has a working action or destination.
- Use Next.js `Link` for internal navigation and `Image` for project images when appropriate. For static files in `public/`, use paths such as `/logo.webp`.
- Check the existing component's TypeScript props before using it. For example, the shared `Button` currently accepts children and an optional `className`; it does not define action-specific props.

### Keep changes focused

- Prefer small, clear changes that solve the requested UI task.
- Follow the existing folder structure, naming, formatting, and component patterns.
- Do not edit API handlers, Sanity schemas, deployment configuration, or unrelated pages for a visual-only task.
- Do not add a package unless the task needs it; do not update dependencies as incidental cleanup.
- Do not place credentials, access tokens, or private data in source files or commit them.

## Sanity and environment settings

The web app's Sanity clients read these environment variables in `lib/sanity/clients.ts`:

| Variable | Use |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project identifier used by the web client. |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset used by the web client. |
| `SANITY_API_TOKEN` | Optional server-side token for the write client. Keep this secret; it must not use the `NEXT_PUBLIC_` prefix. |

Create `web/.env.local` for local settings. The Studio currently specifies project `oye5qe7v` and dataset `production` in `studio/sanity.config.ts`; use the values authorized for your work if those settings change. For example:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=oye5qe7v
NEXT_PUBLIC_SANITY_DATASET=production
# Only add this if a task requires authenticated server-side writes:
# SANITY_API_TOKEN=your-private-token
```

Never commit `.env.local` or a real token. Environment files are ignored by Git. Public project and dataset identifiers are configuration, but tokens and credentials are secrets.

## Beginner-friendly contribution workflow

1. **Start the app.** Follow [Get started](#get-started) and open the local site.
2. **Describe the change before editing.** Identify the page, visible elements, desired behavior, and whether it is mobile, desktop, or both.
3. **Find the existing component.** Start in the route under `app/`, then follow its imports into `components/`. Reuse the shared header, button, card, or other UI where it fits.
4. **Make one focused change.** Keep it small enough to explain. Avoid changing unrelated content or configuration.
5. **Preview the result.** Check the page at the local URL, at both narrow and wide viewport sizes, and with RTL text.
6. **Check the change.** From `web/`, run `npm run lint`. For broader changes or before sharing, run `npm run build` too.
7. **Review what changed.** In your Git client, confirm only intended files changed. Ask for help if a change is unclear or a check fails; do not hide or ignore errors.
8. **Share the result.** Include a short summary, the page/behavior changed, checks run, and a screenshot when the visual change is important.

You do not need to understand the whole codebase before making a small UI contribution. It is important to understand the component you are changing and to ask before changing shared behavior.

## Instructions for an AI coding assistant

When using an AI agent for a UI task, give it this guide and a specific request. It should:

1. Read the relevant route and components before editing. Also check `app/globals.css` for existing tokens and `package.json` for available commands.
2. Treat `web/` as the web-app working directory and preserve the separate `studio/` app.
3. Follow the RTL, Persian-content, Vazirmatn, responsive, accessibility, and existing-component conventions above.
4. Make the smallest complete change. Do not invent routes, APIs, design tokens, CMS fields, or component props; verify them in the source first.
5. Keep changes scoped to the requested UI. Do not replace placeholder content with guessed real content or change backend behavior unless asked.
6. Run `npm run lint` from `web/` after editing. Run `npm run build` when practical, and report any command that could not be run and why.
7. Summarize changed files and behavior, list checks and their outcomes, and call out assumptions or remaining work. Never claim a check passed if it was not run.

### Example request to give an AI agent

> Read `web/README.md` first. On the home page, improve the spacing and responsive layout of the channel feed cards for mobile and desktop. Preserve RTL and Persian text, reuse existing UI components and color tokens, and do not change CMS or API behavior. Inspect the relevant files, make the smallest complete change, run the web lint check, and summarize the files changed and results.

## Useful references in the repository

- App-wide layout and font: `app/layout.tsx`
- Global styles and theme colors: `app/globals.css`
- Home route: `app/page.tsx`
- Landing-page composition: `components/pages/landing/Landing.tsx`
- Shared header: `components/layout/Header.tsx`
- Shared button and card frame: `components/ui/Button.tsx`, `components/ui/CardFrame.tsx`
- Sanity client and queries: `lib/sanity/`
- Sanity Studio schema: `../studio/schemaTypes/`
