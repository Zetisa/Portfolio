---
title: "Jules: My Automated Code Reviewer During Internship"
date: "2026-04-28"
description: "Sharing my experience using Jules to automatically review my code during my AirNav Indonesia internship, and how it caught mistakes I would have missed."
category: "blog"
---

## My "What is Jules?" Moment
Midway through my internship, someone said: "Run Jules on your PR." I nodded, then frantically Googled "What is Jules?" and "What's a PR?" If you're there too, relax — I'll explain!

Jules is a tool that automatically reviews your code (pull requests) and tells you exactly what's wrong. It catches typos, bad formatting, and even bugs before you merge your code. During my internship, Jules caught 3 formatting issues in my blog posts that I would have missed!

## What You Need to Start
Pretty simple actually:

1. A GitHub account (we covered that in another post!)
2. A repository with some code (your portfolio site)
3. That's it — no deep technical knowledge required!

## Signing Up and Connecting GitHub
This was the easiest signup ever:

1. Went to [jules.app](https://jules.app/)
2. Clicked "Login with GitHub"
3. Authorized Jules to access my repositories
4. Selected my portfolio repo

[Picture: Jules dashboard showing connected repositories]

I was scared to give access at first, but it's safe. Jules just reads and comments!

## Understanding Pull Requests (PRs) First
Jules reviews PRs, so here's what that means (I learned this the hard way):

1. You make changes on a "branch" (think of it as a safe sandbox)
2. You "push" those changes to GitHub
3. You create a "Pull Request" to merge your changes into the main codebase
4. Jules automatically reviews this PR and posts comments!

## My First PR with Jules
Let's walk through what I did for my first blog post:

1. In terminal: `git checkout -b add-vscode-post` (create a new branch)
2. Edited/added the blog post file
3. Committed: `git add . && git commit -m "Add VS Code blog post"`
4. Pushed: `git push origin add-vscode-post`
5. Went to GitHub and clicked "Compare & pull request"
6. Created the PR and waited 10 seconds...

Jules posted a review comment automatically! I was amazed.

[Picture: GitHub PR page showing Jules' automated review comment]

## What Jules Caught in My Code
The review comments were super helpful:

1. "Line 12: Missing semicolon" - Easy fix!
2. "Use double quotes instead of single quotes" - Followed the style guide
3. "Image missing alt text" - Important for accessibility

I remember feeling defensive: "My code is fine!" Then I fixed the issues, pushed again, and Jules re-reviewed automatically. All checks passed!

## Every Blog Post Went Through Jules
This became my workflow:

1. Created a branch for the blog post
2. Wrote the post in VS Code
3. Pushed and created a PR
4. Jules caught formatting issues (I used tabs instead of spaces once!)
5. Fixed issues, merged PR, and the post went live

[Picture: Jules review summary showing passed checks]

## What I Learned (The Hard Way)
Mistakes I made:

1. **Don't ignore feedback** - I ignored one comment once, merged the PR, and broke my site. Never again!
2. **Not configuring rules** - I tried to customize review rules immediately and broke the config. Start with default rules!
3. **Over-relying on it** - Jules catches syntax and style, but not logic bugs. Always test your code yourself!

## Why It Matters
Jules is a safety net for coders. During my internship, it saved me from merging broken code to my portfolio site 3 times. If I could learn to use it (and not break things!), you can too.

Connect your GitHub repo to Jules, create a test branch with a small change, open a PR, and read the review comments. You'll see what I mean about having a patient reviewer!
