---
title: "My GitHub Journey: From Confusion to Confidence"
date: "2025-10-17"
description: "Sharing my personal experience learning and using GitHub during my AirNav Indonesia internship, and how it became essential for my portfolio project."
category: "blog"
---

## My "What is GitHub?" Moment
On my first day at AirNav Indonesia, my manager said: "Push your changes to GitHub." I nodded confidently, then immediately Googled "What is GitHub?" in another tab. If you're there too, don't worry — I've been there!

GitHub is basically like Google Drive but specifically for code. It tracks every change you make, lets you collaborate with others, and even hosts your website for free. During my internship, it stored all 9 blog posts, my portfolio config, and automatically deployed my site.

## How I Got Started
Here's what I did (and what you can do too):

1. Signed up at [github.com](https://github.com/) using my internship email
2. Created a repository (think of it as a project folder in the cloud) called `portfolio-site`
3. Made it Private during development, switched to Public later

[Picture: GitHub new repository creation page]

I remember thinking: "That's it? It's on the cloud now?" Yep, that easy.

## Installing Git (The Engine Behind GitHub)
I used to think Git and GitHub were the same thing. They're not! Git is the tool that tracks changes; GitHub is where you store them.

1. Downloaded Git from [git-scm.com](https://git-scm.com/)
2. Ran the installer with all default settings (beginners: just keep clicking Next!)
3. Verified by typing `git --version` in terminal — saw `git version 2.39.0` and felt like a pro!

## My First Repository Clone
"Cloning" sounds sci-fi, but it just means downloading your GitHub project to your computer:

1. Clicked the green "Code" button on my GitHub repo
2. Copied the URL
3. In terminal: `git clone https://github.com/myusername/portfolio-site.git`
4. Waited for it to download — and there it was, a new folder with my project!

## How I Save My Work (The "Save Point" Concept)
This took me a while to understand, but now it's second nature. When I make changes, I:

1. Type `git add .` to tell Git "Hey, track these changes"
2. Type `git commit -m "Add new blog post"` to create a save point
3. Type `git push` to upload everything to GitHub

I remember my first commit message was just "update" — don't do that! Write descriptive messages so future you knows what changed.

[Picture: Terminal showing git add, commit, and push commands]

## My Daily Workflow
Every time I update a blog post, here's what I do:

1. Edit the Markdown file in VS Code
2. Run `git add content/blog/updated-post.md`
3. Commit with a message: `git commit -m "Update blog post with examples"`
4. Push to GitHub: `git push`

Then GitHub automatically deploys my site. I remember the first time I saw my update live on the internet — pure magic feeling!

## GitHub CLI (Optional But Awesome)
After a couple weeks, I discovered the `gh` CLI tool. It lets you manage GitHub from terminal:

1. Installed from [cli.github.com](https://cli.github.com/)
2. Logged in with `gh auth login`
3. Now I can type `gh repo view` to open my repo in browser, or `gh issue list` to see all issues

It's not necessary, but it's pretty cool once you're comfortable with the basics.

## What I Learned (The Hard Way)
Mistakes I made so you don't have to:

1. **Forgetting to pull** - If you make changes on GitHub website, always run `git pull` before starting work locally. I didn't do this and spent an hour fixing merge conflicts!
2. **Vague commit messages** - Don't write `git commit -m "update"`. I did this and couldn't remember what I updated two days later.
3. **Pushing to main** - Always create a branch for changes. I once almost broke my site by pushing directly to main! Use: `git checkout -b update-posts`.

## Why It Matters
GitHub went from "scary command line tool" to my daily companion in three weeks. It saved my internship work when my laptop crashed (thank you, cloud backup!), and deployed my portfolio automatically. If I could learn it, you can too.

Create a test repo, clone it, make a few changes with commits, and push them. You'll get the hang of it in 15 minutes!
