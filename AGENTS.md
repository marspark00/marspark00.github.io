# Repository Guidelines

## Project Structure & Module Organization

This repository is an Astro + TypeScript GitHub Pages resume site. The page entry point is `src/pages/index.astro`, reusable UI lives in `src/components/`, and styling lives in `src/styles/global.css`. Resume content is data-driven from `src/data/resume.json`; update that file for profile, experience, projects, skills, education, and certificates. Static public assets belong in `public/`, especially `public/images/profile.jpg` and `public/images/favicon.ico`.

## Build, Test, and Development Commands

- `rtk npm install`: install Node dependencies from `package-lock.json`.
- `rtk npm run dev`: run the local Astro development server.
- `rtk npm run build`: build the static site into `dist/`.
- `rtk npm run preview`: preview the production build locally.

Use `rtk` before shell commands to keep command output compact for automated agents.

## Coding Style & Naming Conventions

Use two-space indentation in JSON, Astro, TypeScript, and CSS. Keep resume copy in `src/data/resume.json`, not inside components. Prefer PascalCase for Astro components, for example `Section.astro`, and lowercase hyphenated names for public assets. Preserve the existing Korean and English content style when editing resume copy.

## Testing Guidelines

There is no formal test suite. Validate changes by running `rtk npm run build` before committing. For visual or content changes, also run `rtk npm run dev` and review desktop, tablet, and narrow mobile widths. Check that `src/data/resume.json` remains valid JSON after content edits.

## Commit & Pull Request Guidelines

Recent history uses very short commit subjects, but future commits should be more descriptive, for example `Update project experience copy` or `Adjust mobile resume spacing`. Keep each commit scoped to one logical change. Pull requests should summarize the change, list manual validation performed, link any related issue, and include screenshots when layout, styling, images, or resume content presentation changes.

## Security & Configuration Tips

Do not commit generated `dist/` output, `node_modules/`, local credentials, analytics secrets, or temporary editor files. Keep public contact and profile information in `src/data/resume.json` intentional, since GitHub Pages publishes it directly.
