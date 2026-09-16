# Broadcasts

Watch multiple live broadcasts in a customizable grid.

## Features

- Watch multiple broadcasts side by side with several grid layouts.
- Add any YouTube broadcast you want.
- Reorder broadcasts by dragging.
- Keep layout and list saved in the browser.
- Use fullscreen on devices with a mouse.

## Install

The app can be installed as a PWA:

- **Desktop (Chrome, Edge, Brave):** Click the install icon at the right end of the address bar.
- **Android (Chrome):** Menu (⋮) → "Add to Home screen".
- **iOS (Safari):** Share Button → "Add to Home Screen".

The installed app opens in its own window, without browser bars.

## Troubleshooting

- If the installed app looks outdated, close it fully and open it again, or hard-refresh the browser tab.
- There is no fullscreen button on phones — it only appears on devices with a mouse.

## Tech Stack

Built with React and Vite — see [`package.json`](package.json) for the full list of dependencies.

## Development

### Prerequisites

- Node 22 or later (see `.nvmrc`).

### Clone

```bash
git clone https://github.com/ivemadestuff/broadcasts.git && cd broadcasts
```

### Commands

```bash
# Install Dependencies
npm ci

# Development Server
npm run dev

# Lint
npm run lint

# Format
npm run format

# Production Build
npm run build
```

The development server prints its address in the terminal.

The build fails on a broken or duplicate id in `src/data/` — see [`validate-data.mjs`](scripts/validate-data.mjs).

## Guides

### [Update Broadcast IDs](docs/guides/update-broadcast-ids.md)

Refresh dead default broadcast ids by updating the playback target.
