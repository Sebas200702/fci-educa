# fci-educa

Static rebuild of colombiaincluyenteeduca.com (Colombia Incluyente Educa, Fundación Colombia Incluyente).
The previous WordPress + LearnPress install was compromised and its courses were offline; this site
keeps the line description, the course catalogue and the downloadable module PDFs.

- `bun install` · `bun run dev` · `bun run check` · `bun run build`
- Production: GitHub Actions builds `dist/`, pushes `ghcr.io/sebas200702/fci-educa`, and triggers the
  Dokploy app `educa` on fci-prod (see `.github/workflows/deploy.yml`).
- Content sources: line copy from fci-landing `src/content/lineas/educa.yaml`; courses from the
  Wayback snapshot of 2024-08-29; PDFs from the Hostinger backup uploads (2024/07).
