# CLAUDE.md — todo-pwa-vite

> Loaded automatically at the start of every session.

---

## Working Context

**This repo is a downstream mirror of the monorepo.**

All development happens in the monorepo at `jonpham/2026-project-todo-skeleton-monorepo`
under `apps/todo-pwa-vite/`. After merging to monorepo `main`, the `sync-subtrees-push.yml`
workflow pushes changes here automatically via `git subtree split`.

**Do not open Claude in this repo.** Open it in the monorepo instead.
**Do not make changes here directly** — they will be overwritten on the next monorepo push.

---

## Purpose

Standalone Vite + React PWA skeleton — independently deployable template demonstrating
an offline-first PWA with a shared types package, Cloudflare Pages deployment, and
Playwright E2E testing. Usable as a template for future projects of similar type.

**Monorepo:** `github.com/jonpham/2026-project-todo-skeleton-monorepo` (source of truth)
**This repo:** `github.com/jonpham/2026-project-todo-pwa-vite` (deployable mirror)

---

## CI/CD

| Workflow         | Trigger                              | What it does                                 |
| ---------------- | ------------------------------------ | -------------------------------------------- |
| `ci.yml`         | Push / PR to any branch              | Lint, test, build                            |
| `cd-preview.yml` | PR opened / updated targeting `main` | Deploy preview to Cloudflare Pages + run E2E |

Production deployment is handled by the monorepo's `cd-prod.yml` workflow.
