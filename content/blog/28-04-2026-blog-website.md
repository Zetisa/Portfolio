---
title: "Building My Portfolio Blog with Nuxt 3 During Internship"
date: "2025-10-23"
description: "Sharing my journey building a portfolio blog with Nuxt 3 during my AirNav Indonesia internship — from not knowing what Vue was to deploying a live site."
category: "blog"
---

## My "What is Nuxt?" Moment

When my supervisor said "Build a portfolio blog to showcase your internship work," I nodded confidently, then Googled "What is Nuxt 3?" and "How do I build a website?" If you're there too, don't worry — I'll walk you through it!

A portfolio blog is a website where you show off your work (projects, blog posts, resume) to potential employers or clients. During my AirNav Indonesia internship, I built mine with Nuxt 3 — it hosts all 9 tool blog posts I've written, my resume, and project showcases. It's live on the internet, and I update it weekly with new posts.

## Getting the Prerequisites Ready
Here's what I did (and what you can do):

1. **Install Node.js** - Went to [nodejs.org](https://nodejs.org/), downloaded LTS version (even number like 18.x), ran installer with default settings. Stick to LTS!
2. **Verify Node.js** - Opened terminal and typed `node --version`. Saw `v18.19.0` and cheered!
3. **Install Nuxt 3** - Typed `npm install -g nuxt` (installs Nuxt globally)

[Picture: Node.js download page showing LTS version]

## Creating My First Nuxt 3 Project
This was the exciting part:

1. Opened terminal and navigated to where I wanted my project: `cd /mnt/c/Users/Joel/OneDrive/!Projects/!UMN/!Magang/Portofolio/`
2. Ran: `npx nuxi init portfolio-site` (creates a new Nuxt 3 project)
3. Navigated into it: `cd portfolio-site`
4. Installed dependencies: `npm install` (takes a few minutes, grab a coffee!)
5. Ran dev server: `npm run dev`
6. Opened `http://localhost:3000` in browser — saw the default Nuxt 3 page!

I remember thinking "I made a website!" 🎉

[Picture: Browser showing default Nuxt 3 welcome page]

## Understanding the Project Structure
Nuxt 3 has a specific folder structure. Here's what matters:

1. `content/` - Where your Markdown blog posts go (I put all 9 tool posts here!)
2. `pages/` - Vue components for each page (home, about, blog)
3. `components/` - Reusable Vue components (e.g., BlogPostCard)
4. `nuxt.config.ts` - Configuration file (add Markdown support here)

## Adding My First Blog Post
Nuxt 3 can read Markdown files with frontmatter (metadata) — just like these blog posts!

1. Created folder: `mkdir -p content/blog`
2. Created a post: `content/blog/first-post.md` with title, date, description
3. Installed Markdown module: `npm install @nuxt/content`
4. Added to `nuxt.config.ts`: `modules: ['@nuxt/content']`
5. Restarted dev server: `npm run dev` — post appeared!

I literally ran around my room when this worked!

[Picture: VS Code showing Nuxt 3 project structure with content/blog folder]

## Deploying to GitHub Pages (Free Hosting!)
I deployed my portfolio for free using GitHub Pages:

1. Created a GitHub repo for my site
2. Installed gh-pages: `npm install --save-dev gh-pages`
3. Added deploy script to package.json: `"deploy": "gh-pages -d dist"`
4. Built static files: `npm run generate`
5. Deployed: `npm run deploy` — site went live at `username.github.io/portfolio-site`!

I remember the first time I saw my site live on the internet. Pure magic feeling!

## My Daily Blogging Workflow
Every time I updated a blog post:

1. Edited the Markdown file in VS Code
2. Ran `npm run dev` to preview locally (became my morning routine!)
3. Committed post to GitHub: `git add . && git commit -m "Add VS Code post"`
4. Pushed: `git push`
5. GitHub automatically deployed my site — no manual deployment needed!

[Picture: Terminal showing git commands and successful deployment]

## What I Learned (The Hard Way)
Mistakes I made:

1. **Node.js version issues** - Use the LTS version (even number). I installed an odd version first and had issues!
2. **Forgetting to install dependencies** - Always run `npm install` after cloning a project. I forgot this and spent an hour debugging!
3. **Markdown path errors** - Make sure posts are in `content/blog/` exactly. I put them in `blog/` once and nothing showed up!

## Why It Matters
Building a portfolio blog with Nuxt 3 went from "scary unknown technology" to my proudest accomplishment in 3 weeks. It taught me Vue, Markdown, Git, and deployment all at once.

Create a Nuxt 3 project, add a simple blog post, run the dev server, and deploy to GitHub Pages. You'll be amazed at what you build — just like I was!
