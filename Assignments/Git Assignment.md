### <ins>DELETING COMMITS IN GIT

1 . Using 'git reset' command

- It completely removes the previous commit.

1. Navigate to the branch where you need to undo a commit
2. **git reset --hard HEAD^** or **git reset --soft HEAD~1**(delete 1 latest commit) -> To remove the commit
3. **git push origin <branch-name> --force** -> To update in github also

**--hard** -> Deleted commit will not be in staged changes

**--soft** -> Deleted commit will be in staged changes

2.Using 'git revert' command

- Creates a new commit to undo changes

1. Use git log to find the commit hash of the commit you want to revert.
2. Copy the commit hash.
3. **git revert commit-hash** -> replace commit-hash with the value you copied
4. Clck 'commit' and 'Sync Changes'

### <ins> FORK IN GIT

By copying the original repository to our personal GitHub account, Git Fork enables us to make changes to the source code without affecting the original repository. where the developer can freely create without concern for the original source code.

- Go to the repository you need to fork
- Click on **fork** on top right corner
- Now you will get clone of the repository in your git account
- Now you can make changes and also you can give pull request to the original repo if the changes has to be commited in original repository.

### <ins>GIT REBASE

Git Merge

- When you merge one branch into another, Git creates a new commit that combines the changes from both branches. This new commit represents the merge and has two parent commits, one from each branch.

> git merge feature-1

Git rebase

- Instead of creating a new commit, rebase integrates changes by moving or combining commits from the current branch onto the target branch. This results in a linear commit history with a single, continuous line of commits.

> git rebase master

### <ins>Git Rebase -i

The **git rebase -i** interface is, as its long form --interactive flag implies, an interactive interface. It provides a list of commits, and then you choose what actions you want Git to take on each of them

- p, pick — Pick this commit to keep.
- e, edit — Edit this commit to amend the commit message.
- r, reword — Use this commit, but also edit it.
- s, squash — Squash this commit into a previous commit. When performing a git rebase -i, you must have at least one commit marked as squash.
- d, drop — Delete this commit.
