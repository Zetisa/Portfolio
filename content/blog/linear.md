---
title: "Managing Tasks with Linear During My Internship"
date: "2026-04-28"
description: "Sharing my experience using Linear to manage my internship tasks at AirNav Indonesia, and how it kept me organized throughout the 3 months."
category: "blog"
---

## My First Day with Linear
On my first day at AirNav Indonesia, my manager said: "Check Linear for your tasks." I nodded confidently, then immediately Googled "What is Linear?" in another tab. If you're there too, don't worry — I've been there!

Linear is like a digital to-do list, but designed for teams. You create "issues" (tasks), assign them to people, set deadlines, and track progress. During my internship, I used it to manage all 14 of my tasks, set priorities, and see what I'd completed.

## How I Got Started
Setting it up was pretty simple:

1. Went to [linear.app](https://linear.app/) and signed up with my internship email
2. Created a workspace: "AirNav Internship"
3. Created a team called "AXL" (short keys like this make issue IDs easy: AXL-1, AXL-2...)

[Picture: Linear workspace creation screen]

That team key (AXL) became part of my issue IDs. I remember thinking "AXL-5" sounded so professional compared to "ISSUE-12345"!

## What Those Terms Mean (I Had to Learn Them!)
Linear uses specific words — here's what they mean in plain English:

1. **Issue** = A task (e.g., "Write VS Code blog post")
2. **Team** = A group of people (my team was "AXL")
3. **Project** = A group of related issues (e.g., "Portfolio Blog")
4. **Cycle** = A time period (e.g., 2 weeks) to complete tasks
5. **Label** = Tags to categorize (e.g., "Documentation", "Bug")

I remember staring at the interface thinking "What's a cycle?" Now I use them daily!

## Creating My First Issue
Let's just say my first issue was "AXL-1: Setup portfolio project." Felt so accomplished seeing it!

1. Clicked the "+" button (or press `C` on keyboard)
2. Filled in title, description, team, assignee (myself)
3. Set priority to Medium (I learned High is for urgent bugs only)
4. Clicked "Create Issue"

[Picture: Linear issue creation form with all fields filled]

## Using the Kanban Board (My Favorite Part!)
This is where Linear shines. Click "Board" in the left sidebar and you'll see columns:

1. Backlog - Ideas and future tasks
2. Todo - Tasks ready to start
3. In Progress - What you're working on now
4. Done - Completed tasks

I'd move 2-3 issues to "In Progress" every morning. So satisfying dragging them to "Done" by evening!

[Picture: Linear Kanban board showing issues in different columns]

## The GraphQL API (I Was Scared Too!)
I discovered Linear has a GraphQL API that lets you automate stuff. Don't worry, you don't need to understand it deeply:

1. Go to [linear.app/settings/api](https://linear.app/settings/api)
2. Create an API key (save it safely!)
3. Use it to update issues programmatically

**Pro tip**: I used Hermes Agent to do this for me. Just said: "Update all my Linear issues to set priority to Medium" and it used the API automatically!

## Managing My 14 Internship Tasks
When I started, I had 14 tasks assigned. Instead of updating them manually (would take 2 hours!):

1. Asked Hermes Agent to load the Linear skill
2. Told it: "Update all 14 AXL team issues to assign to me and set priority to Medium"
3. Hermes used the GraphQL API to update all 14 in 30 seconds
4. Verified in Linear — all tasks were perfectly organized!

I sat there thinking: "That's it? That would have taken me forever manually!"

## What I Learned (The Hard Way)
Mistakes I made so you don't have to:

1. **Don't set everything to High priority** - I did this and nothing was actually high priority. Use High for urgent bugs only!
2. **Always add descriptions** - I had an issue titled "Fix stuff" — 2 weeks later, I had no idea what to fix!
3. **Use labels** - Labels like "Documentation" help filter tasks. I had 11 Todo issues and labels helped me find the right one fast.

## Why I Kept Using It
Linear transformed how I managed my internship tasks — from a messy notebook to an organized, visual system. It's faster than Trello, simpler than Jira, and perfect for internship projects.

Create a Linear account, make 3 issues for your current tasks, and move them through the board. You'll feel that productivity boost I felt — promise!
