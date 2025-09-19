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

#### 🔹 Git Flow

- `main` → always stable (production-ready).

- `develop` → for integrating new features.

- `feature/*` → for specific features.

- `release/*` → for preparing a release.

- `hotfix/*` → for urgent bug fixes.


##### 🔹 Branch Based Development

- `main` → always deployable.

- Each feature = short-lived branch `(feature-xyz).`

- `PR` → review → merge → deploy.

👉 Simpler, most common in startups.


##### 🔹 Trunk-Based Development
- Work directly on main (or short-lived branches).

- Deploy often (even daily).

- Uses feature flags if needed.

👉 Modern style, very fast-moving teams.



## Git Merge Conflicts

Conflicts happen when two branches change the same part of a file.

```txt
<<<<<<< HEAD
console.log("Hello from main");
=======
console.log("Hello from feature");
>>>>>>> feature

```

Steps: 

1. git checkout main
2. git merge feature
3. git push origin main

```bash
# while merging feature into main
git merge feature
# conflict occurs
git status        # shows conflicted files
# open file, fix it manually
git add file.js   # mark as resolved
git commit        # finalize merge

```


## History Manipulation
Sometimes your Git history looks messy → too many commits like `"fix bug"`, `"oops typo"`.
We clean it up with interactive rebase.


```bash
git rebase -i HEAD~3 # interactively rebase last 3 commits
git reset HEAD~1 # undo last commit
git reset HEAD # undo all changes
git reset --hard HEAD # undo all changes and discard them
```

👉 `git reset` is powerful but dangerous. Use with caution.


##### 🔹 Squash Commits

You can combine multiple commits into one.

```bash
git rebase -i HEAD~3 # interactively rebase last 3 commits
```
- `pick` = keep commit

- `squash` = merge into previous commit

Example of picking and squashing commits:

```bash
git rebase -i HEAD~3
pick 1234567890
squash 1234567891
squash 1234567892
```

##### 🔹 Reword Commits

- `reword` = change commit message

Example of rewording commits:

```bash
git rebase -i HEAD~3
reword 1234567890
pick 1234567891
pick 1234567892
```

Example of deleting commits:

```bash
git rebase -i HEAD~3
delete 1234567890 # delete commit
pick 1234567891
pick 1234567892
```


## Git Aliases
Git aliases are shortcuts for Git commands. It's like creating your own commands.

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --pretty=format:'%C(bold blue)%h%Creset - %C(italic green)(%cr) %C(bold yellow)%d%Creset %s %Creset%C(cyan)<%an>%Creset %C(#ff6f61)<%ae>%Creset' --abbrev-commit --date=relative"

```
 

Example of using aliases:
```bash
git co # checkout
git br # branch
git ci # commit
git st # status
git lg # log
```

 
