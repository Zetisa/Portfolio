---
title: "My Experience with Visual Studio Code During Internship"
date: "2026-04-28"
description: "Sharing my personal experience using VS Code during my AirNav Indonesia internship, how I use it daily, and why it became my go-to editor."
category: "blog"
---

## My Journey with Visual Studio Code
When I first started my internship at AirNav Indonesia, I had no idea what a proper code editor was. I was using basic Notepad for everything! Someone recommended VS Code, and honestly, it changed how I work completely. It's free, it's fast, and it just works.

## What I Use It For
VS Code became my daily driver for the entire internship. I used it to:
- Write all 9 of these blog posts you're reading right now
- Build and edit my Nuxt 3 portfolio website
- Run commands without leaving the editor
- Keep track of my code changes

It's not just a text editor — it's like a complete workspace where I can do everything in one place.

## How I Set It Up (What Worked for Me)
Getting started was pretty straightforward:

1. Downloaded it from [code.visualstudio.com](https://code.visualstudio.com/)
2. Made sure to check "Add to PATH" during install (this lets me open it from terminal with `code` command)
3. Launched it and opened my project folder

[Picture: VS Code welcome screen when you first open it]

The interface looked overwhelming at first, but I quickly learned that the left sidebar is for files, the middle is where I write, and there's a terminal at the bottom that became my best friend.

## Extensions I Actually Use
I tried installing tons of extensions at first and crashed VS Code (don't do that!). Now I keep it simple with just these:

1. **Vue extension** - Since my portfolio uses Nuxt 3, this helps with Vue code
2. **Prettier** - Automatically formats my code so it looks neat
3. **ESLint** - Underlines errors in red so I catch them early

That's it. Simple is better.

[Picture: VS Code Extensions marketplace showing the three extensions I mentioned]

## My Daily Workflow
This is what a typical day looks like for me:

1. I open my portfolio project using the `code` command in my WSL terminal
2. Write or edit blog posts in the `content/blog/` folder
3. Press `` Ctrl+` `` to open the terminal inside VS Code
4. Type `npm run dev` to preview my site live
5. When I'm done, I use the Source Control tab (left sidebar) to save my changes

It's become second nature now, but it took me about two weeks to get comfortable.

## Why I Love the Integrated Terminal
Before discovering this feature, I used to Alt-Tab between a separate terminal window and my editor. Such a waste of time! Now I just press `` Ctrl+` `` and I have a terminal right there at the bottom.

I run all my commands here:
- `npm run dev` to start my dev server
- Git commands to save my work
- Any Linux commands since I use WSL

[Picture: VS Code with integrated terminal showing a running dev server]

## WSL Integration (Game Changer for Me)
Since I use Windows Subsystem for Linux, the Remote - WSL extension has been amazing. I can open my Linux project folder directly in Windows VS Code. My files are at `/mnt/c/Users/Joel/OneDrive/` but I can edit them seamlessly from Windows. No file syncing issues, no dual-boot hassle.

## Keyboard Shortcuts I Actually Use
I'm not a keyboard shortcut wizard, but these three save me time every day:

1. `Ctrl+P` - Quickly jump to any file (I use this 50+ times a day!)
2. `Ctrl+Shift+P` - Opens command palette for any VS Code feature
3. `` Ctrl+` `` - Toggle terminal on and off

## What I Learned (The Hard Way)
A few things I wish someone told me earlier:

1. **Enable Auto Save** - I lost work twice before enabling this in File menu. Do it now!
2. **Don't overload extensions** - Start with 3-4 extensions max. I crashed VS Code with 20 extensions on Day 1.
3. **Terminal path matters** - If your terminal opens in the wrong folder, click the dropdown arrow next to "+" in terminal panel to change default profile.

## Why It Matters
VS Code went from "scary interface with too many buttons" to my daily companion in just two weeks. It handled everything from blog posts to running dev servers without crashing once during my entire 3-month internship. If you're just starting out with coding, this is the editor I'd recommend — it grows with you from beginner to professional.
