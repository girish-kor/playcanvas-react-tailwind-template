# PlayCanvas + React Template

[![CI](https://github.com/girish-kor/playcanvas-react-tailwind-template/actions/workflows/ci.yml/badge.svg)](https://github.com/girish-kor/playcanvas-react-tailwind-template/actions/workflows/ci.yml)
[![CodeQL](https://github.com/girish-kor/playcanvas-react-tailwind-template/actions/workflows/codeql.yml/badge.svg)](https://github.com/girish-kor/playcanvas-react-tailwind-template/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%5E20.19.0%20%7C%7C%20%5E22.13.0%20%7C%7C%20%3E%3D24-339933?logo=node.js&logoColor=white)](./package.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

[![GitHub last commit](https://img.shields.io/github/last-commit/girish-kor/playcanvas-react-tailwind-template)](https://github.com/girish-kor/playcanvas-react-tailwind-template/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/girish-kor/playcanvas-react-tailwind-template)](https://github.com/girish-kor/playcanvas-react-tailwind-template/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/girish-kor/playcanvas-react-tailwind-template)](https://github.com/girish-kor/playcanvas-react-tailwind-template/pulls)
[![GitHub stars](https://img.shields.io/github/stars/girish-kor/playcanvas-react-tailwind-template?style=social)](https://github.com/girish-kor/playcanvas-react-tailwind-template/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/girish-kor/playcanvas-react-tailwind-template?style=social)](https://github.com/girish-kor/playcanvas-react-tailwind-template/network/members)

A starter template for building web applications with `PlayCanvas`, `@playcanvas/react`, `React`, `React DOM`, Tailwind CSS v4, and Vite.

## Getting Started

Requires Node.js `^20.19.0`, `^22.13.0`, or `>=24` (see `engines` in [`package.json`](./package.json)).

```bash
npm install
npm run dev
```

Build and preview the production bundle:

```bash
npm run build
npm run preview
```

Run tests:

```bash
npm run test
```

Run linting, formatting, or the full validation suite:

```bash
npm run lint
npm run format
npm run check
```

## Project Structure

```
src/
├── game/            # Plain JS state & constants — never imports playcanvas or @playcanvas/react
│   ├── constants.js
│   └── GameState.js
├── scene/           # PlayCanvas entities, hooks, and scripts
│   ├── entities/    # Custom entity components
│   ├── gltf/        # Imported GLTF/GLB model wrappers
│   ├── materials/   # Custom materials
│   ├── hooks/
│   │   └── useKeyboard.js
│   ├── scripts/
│   │   └── Rotator.js
│   └── Scene.jsx
├── ui/              # React HUD/menu components
│   ├── Hud.jsx
│   └── StartScreen.jsx
├── App.jsx          # Composes Scene + Hud, owns top-level state
└── main.jsx         # React entry point

public/
├── audio/
├── models/
└── textures/
```

`game/` holds plain JS and never imports `playcanvas` or `@playcanvas/react`. `scene/` and `ui/` may read `game/` state and call its methods, but not the other way around.

## What not to do

1. Do not wrap loading hooks in `<Suspense>`; they are state-based.
2. Do not access physics before `isPhysicsLoaded` is `true`.
3. Use the `destroy` event for cleanup instead of a `destroy()` method.
4. Do not use `'model'`, `'animation'`, `'audiosource'`, `pc.createScript`, or `new pc.Material()`.
5. Do not duplicate game state inside scripts or scene tags.
6. Do not make the HUD's outer container clickable.
7. Do not update moving objects every frame through React state.
8. Do not key spawned objects by array position.
9. Do not ignore console warnings related to configuration or settings.
10. Do not assume `Application` provides keyboard, mouse, or controller input.
11. Use only supported color formats: hex, CSS color names, or `[r,g,b(,a)]`.
12. Test the production build before shipping.
13. Configure HTTPS and the correct `.wasm` MIME type for deployment.
14. Remove `Gizmo` from finished builds.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

This project follows the [Contributor Covenant](./CODE_OF_CONDUCT.md).

## Security

See [`SECURITY.md`](./SECURITY.md) for vulnerability reporting instructions.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=girish-kor/playcanvas-react-tailwind-template&type=Date)](https://star-history.com/#girish-kor/playcanvas-react-tailwind-template&Date)

## License

MIT — see [`LICENSE`](./LICENSE).
