# My personal site

Built with [Astro](https://astro.build). Static output, deploys to GitHub Pages.

## Run it locally

You need [Node.js](https://nodejs.org) (v18+). Then, in this folder:

```bash
npm install      # once, to download Astro
npm run dev      # starts a live-reloading server
```

Open the URL it prints (usually http://localhost:4321). Edits to any file
refresh the browser automatically. Ctrl-C to stop.

## Add a blog post

Drop a new `.md` file in `src/content/blog/`. Copy an existing one for the
format. The filename becomes the URL (`my-post.md` -> `/blog/my-post`).
Front-matter (the part between `---`) needs at least a `title` and `date`.

## Edit your content

- Home text:        `src/pages/index.astro`
- Projects:         `src/pages/projects.astro` (edit the `projects` array)
- Your name / nav:  `src/layouts/Base.astro`
- Colors & fonts:   `src/styles/global.css` (the `:root` block at the top)

## Deploy to GitHub Pages

1. Create a GitHub repo. Easiest: name it `yourname.github.io`.
2. In `astro.config.mjs`, set `site` to `https://yourname.github.io`.
   (If you named the repo something else, also uncomment and set `base`.)
3. Push this folder to the repo's `main` branch.
4. On GitHub: **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
5. The included workflow (`.github/workflows/deploy.yml`) builds and publishes
   on every push. First deploy takes a minute; watch it under the **Actions** tab.

## Project map

```
src/
  layouts/Base.astro        shared shell: <head>, nav, footer
  pages/index.astro         home
  pages/blog/index.astro    blog list (auto-generated from posts)
  pages/blog/[...slug].astro renders each post
  pages/projects.astro      projects
  content/blog/*.md         <- your writing lives here
  content.config.ts         defines the blog post schema
  styles/global.css         all styling
```
