### Shortcut Keys

- `ctrl+shift+p` - Opening search
- `alt+arrow` - Move line
- `ctrl+/` - Commemting
- `ctrl+,` - Open settings
- `ctrl+` ` - Open terminal
- `ctrl+d` - Mutiple cursor

### Steps to push code in github for new Repository

- **git init**
- **git config --global user.name "esaseetha"**
- **git config --global user.email** "esaseethapathi@gmail.com"
- Go to **Source control** in the left side panel. Select the **'+'** near the files you need to Commit
- Enter a Description related to the Commit
- Select **Commit**
- to verify commited files **'git log'**
- Select **Publish Branch/Sync Changes**.

 <ins>To create a new Branch
  1. **git checkout -b feature-name**
  2. -> Click Branch name at the left bottom  
     -> Click **+ Create new branch**
     -> Enter new branch name

<ins> To delete the branch locally(VS)  
   1. **git branch -D feature-name**

 <ins>To merge the feature branch to master in local(VS)

   1. **git pull** (if we have only one feature branch)

   2. Set your branch to master and **git merge f1** (code in f1 will be merged with master)

   3. **git fetch -all** (to merge multiple feature branch to master)
   
<ins>NOTE:
 >**1↓ 2↑** -> 1 change occur occur in cloud     and
           2 change occur in local git


