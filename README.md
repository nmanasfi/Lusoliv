# Lusoliv — Website v0.1

A fast, multilingual-ready landing site for Lusoliv built with Next.js 14 and Tailwind CSS.

## Structure
- `app/`, `components/`, `public/` at the **repo root**.
- Keep them at the root so Vercel finds the app.

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push this folder to your GitHub repo (root contains `app/`, `components/`, `public/`, and `package.json`).
2. In Vercel → **New Project** → import the repo → **Deploy**.

## Domain (Namecheap → Vercel)
- A record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`

## Contact form
- Optional: add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` env var in Vercel for Formspree; otherwise mailto fallback opens your email client.
