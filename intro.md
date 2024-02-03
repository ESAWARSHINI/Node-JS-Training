### Shortcut Keys

- `ctrl+shift+p` - Opening search
- `alt+arrow` - Move line
- `ctrl+/` - Commemting
- `ctrl+,` - Open settings
- `ctrl+` ` - Open terminal
- `ctrl+d` - Mutiple cursor
- `f2` - Rename everywhere

### Steps to push code in github for new Repository

- **git init**
- **git config --global user.name "esaseetha"**
- **git config --global user.email** "esaseethapathi@gmail.com"
- Go to **Source control** in the left side panel. Select the **'+'** near the files you need to Commit or **git add file-name** (**git add .** -> To stage all changes )
- Enter a Description related to the Commit
- Select **Commit** or **git commit -m "Message"**
- to verify commited files **'git log'**
- Select **Publish Branch/Sync Changes**.

<ins>To create a new Branch

1. **git checkout -b feature-name**
2. -> Click Branch name at the left bottom  
   -> Click **+ Create new branch**
   -> Enter new branch name

<ins> To delete the branch locally(VS)

1.  **git branch -D feature-name**

<ins> To go to previous branch

1. **git checkout -**

<ins>To merge the feature branch to master in local(VS)

1.  **git pull** (if we have only one feature branch)

2.  Set your branch to master and **git merge f1** (code in f1 will be merged with master)

3.  **git fetch -all** (to merge multiple feature branch to master)

<ins>NOTE:

> **1↓ 2↑** -> 1 change occur occur in cloud and 2 change occur in local git

<ins>Deleting a commit

1 . Using 'git reset' command

- It completely removes the previous commit.

1. Navigate to the branch where you need to undo a commit
2. **git reset --hard HEAD^** -> To remove the commit
3. **git push origin <branch-name> --force** -> To update in github also

2.Using 'git revert' command

- Creates a new commit to undo changes

1. Use git log to find the commit hash of the commit you want to revert.
2. Copy the commit hash.
3. **git revert commit-hash** -> replace commit-hash with the value you copied
4. Clck 'commit' and 'Sync Changes'

> `git stash` - If the changes should be Temporily available for future use which is not commited to git

> `git stash apply`- To reapply changes back again to the vs code
