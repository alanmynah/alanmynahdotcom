---
title: Github from scratch
date: 2021-06-2T18:40:00.000Z
---

This is an cheat-sheet to go along with [the stream I did on Scrimba YouTube channel about git and GitHub](https://www.youtube.com/watch?v=DF_vp2kE2WY).

<!-- more -->

I've recently gone on a Scrimba Livestream to talk about git and Github. I love simple workflows with git and this is my cheat-sheet to use. Feel free to hit me up on twitter or Scrimba Discord if you have any questions. Also if you spot something not right, raise a PR 😉. (Details below)

## Contributing to a repo

Pick a repo, fork it (optional) and clone it.

Alternatively, [create a new one](##Creating-a-repo).

```sh
# replace the below URL with the repo in your accout that you want to work with
git clone https://github.com/alanmynah/alanmynahdotcom.git
```

Then just follow [Branching steps](##Branching)

## Branching

```sh
# create a new branch and switch to it
git checkout -b new-branch
# connect the local new branch to the remote counter part
git push --set-upstream origin new-branch
```

Now follow the steps in [My daily workflow](##My-daily-workflow)

## My daily workflow

```sh
# add all the files
git add .
# commit
# tips on helpful commit messages:
# https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/
git commit -m "type: brief description (<50 chars) of work done"
# push
git push
```

After a few commits, raise a PR.

When done, don't forget to [Pull after a PR](##Pull-after-a-PR)

## Pull after a PR

```sh
git status # should be on the branch
git checkout main
git pull
```

Then pick a new feature and create new branch as described in [Branching section](##Branching)

## Creating a repo

Create a repository locally (like via CRA), go to [github.com](https://github.com/), create a repository via UI.

Copy and paste the steps from the outline in `…or push an existing repository from the command line`.

These are the steps:

```sh
create-react-app my-blog
# these are pasted from `…or push an existing repository from the command line` section when new repo is created.
git remote add origin https://github.com/alanmynah/my-blog.git
git branch -M main
git push -u origin main
```
