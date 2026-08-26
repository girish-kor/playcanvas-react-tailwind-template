# Contributing

Thanks for considering a contribution to this template.

## Getting set up

```
npm install
npm run dev
```

## Before opening a PR

```
npm run check   # lint + format:check + test
```

Fix anything that fails. If you touched `scene/` or `ui/`, also run
`npm run dev` and check it in a browser — type checking and tests verify
correctness, not that the scene actually renders.

## Project conventions

See the [README](./README.md#project-structure) for the directory layout
and the [What not to do](./README.md#what-not-to-do) list. The short version:

- `game/` is plain JS — never import `playcanvas` or `@playcanvas/react` there.
- `scene/` and `ui/` may read `game/` state and call its methods, not the
  other way around.
- No semicolons, single quotes — Prettier enforces this (`npm run format`).

## Opening a pull request

- Keep PRs focused; unrelated cleanup belongs in its own PR.
- Fill in the PR template — what changed, why, and how you tested it.
- One approving review (or none, for trivial fixes) is fine for this repo's size.

## Reporting bugs / requesting features

Use the [issue templates](./.github/ISSUE_TEMPLATE). General questions go in
[Discussions](https://github.com/girish-kor/playcanvas-react-tailwind-template/discussions),
not Issues.

## Code of conduct

This project follows the [Contributor Covenant](./CODE_OF_CONDUCT.md).
