# Git

## Terminal Essentials

📌 1. Terminal Essentials

```bash
pwd         # print current directory
ls          # list files
cd folder/  # move into a folder
cd ..       # move back
mkdir test  # make new folder
touch file.txt   # create a file
rm file.txt      # delete a file
```

📌 2. Git Basics

```bash
git init      # initialize a new repository
git status            # see changes
git add file.txt      # stage file
git add .             # add all files to the staging area
git commit -m "initial commit" # commit the changes
git log              # see commit history
 
```

```bash
git checkout file.txt # revert to previous version
git reset file.txt # undo changes
git clone url # clone repository
git remote add origin url # add remote repository
git remote -v # see remote repositories
git remote remove origin # remove remote repository
git remote set-url origin url # set remote repository
```

📌 3. Git Branching

```bash
git branch            # see branches
git branch new-branch # create new branch
git checkout new-branch # switch to new branch
git merge new-branch # merge new branch into main
git push origin main # push changes to remote repository
git pull origin main # pull changes from remote repository
```     

📌 4. Git Rebase
👉 Rebase = reapply commits on top of another branch
```bash
git rebase main # rebase current branch onto main
git rebase -i HEAD~3 # interactively rebase last 3 commits
```

Example:
```bash
# make feature branch
git checkout -b feature

# commit something
echo "hi" > file.txt
git add file.txt
git commit -m "add file"

# go back to main
git checkout main
echo "update" > main.txt
git add main.txt
git commit -m "update main"

# rebase feature onto main
git checkout feature
git rebase main

```

###### 🔎 Explanation:

- You had divergent histories.

- Rebase makes feature branch look like it was built on top of main’s latest commit.

- History looks linear, cleaner.

📌 5. Git Merge

```bash
git merge new-branch # merge new branch into main
```


## Branching Strategies