---
title: "Running Linux on Windows with WSL During My Internship"
date: "2026-04-28"
description: "Sharing my experience discovering and using Windows Subsystem for Linux during my AirNav Indonesia internship, and how it made cross-platform development effortless."
category: "blog"
---

## My "Linux is for Hackers" Phase
Before my internship, I thought: "Linux is for hackers and super geeks." Then I needed to use Linux tools for my portfolio site, but didn't want to dual-boot or run a heavy virtual machine. Enter WSL (Windows Subsystem for Linux) — it lets you run a full Linux system directly on Windows!

During my AirNav Indonesia internship, I used WSL every single day to run my portfolio site, access Linux tools, and edit files that were synced to my Windows OneDrive. It's free, built into Windows 10/11, and honestly, I wish I'd known about it sooner.

## Getting WSL Running
Here's what I did (and what you can do too):

1. Opened PowerShell **as Administrator** (right-click Start > Windows PowerShell (Admin))
2. Typed: `wsl --install` and pressed Enter
3. Waited for it to install (patience — I thought it froze, but it was working!)
4. Restarted my computer when prompted

[Picture: PowerShell running wsl --install command]

**Tip**: If you get an error, you might need to enable "Virtual Machine Platform" in Windows Features. Search "Turn Windows features on or off" in Start menu.

## My First Time with Linux
After restart, I opened Ubuntu from Start menu. It finished installing and asked me to:

1. Create a Linux username (I used `joel`)
2. Create a password (type it, it won't show — that's normal, don't panic!)
3. I saw a terminal prompt: `joel@DESKTOP-XXX:~$` — felt like a hacker!

[Picture: Ubuntu terminal in WSL showing the Linux command prompt]

## Basic Commands I Actually Use Daily
I was intimidated at first, but these commands became second nature:

1. `ls` - List files in current folder (like `dir` in Windows)
2. `cd /mnt/c/Users/Joel` - Navigate to Windows C: drive
3. `pwd` - Show current folder path (used this when I got lost)
4. `code .` - Open current folder in VS Code (magic!)

**Try this now**: Type `cd /mnt/c/Users && ls` to see your Windows Users folder from Linux! I remember thinking "Whoa, I'm in Windows files from Linux!"

## Accessing Windows Files from Linux (Game Changer!)
This was the moment I fell in love with WSL — my portfolio was in OneDrive on Windows:

1. Navigated to my Windows folder: `cd /mnt/c/Users/Joel/OneDrive/!Projects/!UMN/!Magang/Portofolio/`
2. Listed files: `ls` (there were my project files!)
3. Opened in VS Code: `code .` (VS Code launches with my Linux path!)

**Important**: Files edited in Linux at `/mnt/c/` are actually editing your Windows files — changes appear in both places instantly. I didn't realize this and was confused why my Windows files kept changing!

[Picture: WSL terminal showing navigation to Windows OneDrive folder]

## Installing Development Tools
I installed these tools for my portfolio site (took 10 minutes total):

1. Updated package list: `sudo apt update`
2. Installed Node.js: `sudo apt install nodejs npm`
3. Installed Git: `sudo apt install git`
4. Verified: `node --version` and `git --version`

I remember seeing version numbers and feeling like a real developer!

## My Daily Internship Workflow
Every morning became like this:

1. Open Ubuntu from Start menu (WSL terminal)
2. Navigate to portfolio: `cd /mnt/c/Users/Joel/OneDrive/!Projects/!UMN/!Magang/Portofolio/`
3. Run `code .` to open project in VS Code
4. Write blog posts, run `npm run dev` in WSL terminal to preview
5. Commit changes: `git add . && git commit -m "Update post" && git push`

Became second nature after 1 week!

## What I Learned (The Hard Way)
Mistakes I made so you don't:

1. **Case sensitivity** - Linux is case-sensitive (`Documents` ≠ `documents`), Windows isn't. Spent an hour debugging a path issue!
2. **Permission errors** - If you can't edit a file, use `sudo` before the command. I didn't know this and got frustrated for days.
3. **WSL 1 vs 2** - Make sure you're on WSL 2 (type `wsl --list --verbose` in PowerShell). WSL 1 is slower and less compatible!

## Why It Matters
WSL lets you have the best of both worlds: Windows for daily use, Linux for development. During my 3-month internship, it never crashed, handled all my tools, and made cross-platform work effortless.

Enable WSL, launch Ubuntu, try those 5 basic commands I listed, and open your Windows folder in Linux. You'll wonder why you ever used a VM!
