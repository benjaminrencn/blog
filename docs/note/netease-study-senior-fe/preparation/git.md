---
lang: zh-CN
description: Git 概念、安装、命令。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,版本管理,Git
---

# Git

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#版本管理#
\#Git#

Git 概念、安装、命令。

* Git
  * 开源
  * 免费
  * 分布式版本控制系统（DVCS）
  * 基于内容寻址的存储系统（区分基于文件）
* 历史
  * linux 开发
    * 1991 - 2002 几乎无版本控制
    * 2002 - 2005 BitKeeper 直至停止授权使用
    * 2005 - 至今 Git
* 优势
  * 快
  * 完全的分布式
  * 轻量级的分支操作
  * 成为标准
  * 社区成熟活跃

## [安装](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

* [Windows](https://gitforwindows.org)
* Mac
  * `brew install git`
* Ubuntu
  * `apt-get install git`

## Git 命令

### [help](https://git-scm.com/docs/git-help)

查看文档

```git
git help <command>
git <command> -h
git <command> --help
man git-<command>
```

### [config](https://git-scm.com/docs/git-config)

配置 Git

```git
git config
```

全局用户配置

```git
git config --global user.name "xxx"
git config --global user.email "xxx@xxx.com"
```

配置级别

* `--local`
  * 默认 高优先级
  * 只影响本仓库
  * .git/config
* `--global`
  * 中优先级
  * 影响当前用户的仓库
  * ~/.gitconfig
* `--system`
  * 低优先级
  * 影响全系统的仓库
  * /etc/gitconfig

### [init](https://git-scm.com/docs/git-init)

初始化仓库

```git
git init [path]
git init [path] --bare
```

```git {5,8,15,17,19}
# 初始化前查看状态
# 提示不是一个 Git 仓库
xxx@xxx MINGW64 ~/Desktop/git-test
$ git status
fatal: not a git repository (or any of the parent directories): .git

xxx@xxx MINGW64 ~/Desktop/git-test
$ git init
Initialized empty Git repository in C:/Users/86157/Desktop/git-test/.git/

# 提示 在 master 分支 
# 提示没有提交 可使用 git add 命令以跟踪
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

### [status](https://git-scm.com/docs/git-status)

查看状态

* 未跟踪 <-> 跟踪
  * 内容状态
    * 工作目录
    * 暂存区
    * 提交区
  * 文件状态
    * 未跟踪
    * 已跟踪
* 工作目录 <-> 暂存区
* 暂存区 <-> 最新提交

```git
git status
```

```git {13,14,16,18}
# 创建文件
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ touch README.md

# 显示未跟踪文件
# 可使用 git add 跟踪
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        README.md

nothing added to commit but untracked files present (use "git add" to track)
```

### [add](https://git-scm.com/docs/git-add)

添加文件到暂存区，文件成已跟踪状态

```git
git add
```

#### 添加

```git {2}
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git add README.md

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   README.md
```

#### 批量添加

```git {5}
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ touch package.json

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git add .

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   README.md
        new file:   package.json
```

### [忽略文件](https://git-scm.com/docs/gitignore)

1.gitignore

* 添加时忽略匹配文件
* 仅作用于**未跟踪**的文件

```git
# 添加 .gitignore 前
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   README.md
        new file:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .history/
        .vscode/
```

``` {4,6}
# .gitignore

# VSCode 文件
.vscode
# VSCode 插件 Local History 文件
.history
```

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git add .gitignore

# 添加 .gitignore 后
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   .gitignore
        new file:   README.md
        new file:   package.json

```

:::tip
* [gitignore 模板 - github](https://github.com/github/gitignore)
:::

### [rm](https://git-scm.com/docs/git-rm)

从暂存区删除文件

```git
# 仅从暂存区删除
git rm --cached
# 从暂存区与工作目录删除
git rm
# 删除所有被跟踪但是在工作目录被删除的文件
git rm $(git ls-files --deleted)
```

### 工作目录与暂存区

```git {14,21}
# 修改 README.md 文件内容
# 工作目录与暂存区同时出现说明根据内容寻址

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   .gitignore
        new file:   README.md
        new file:   package.json

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md
```

### [commit](https://git-scm.com/docs/git-commit)

根据暂存区内容创建一个提交记录

```git
git commit
```

#### 提交

```git {5,19}
# 提交 -m '注释'
# 工作目录内容还存在

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git commit -m 'initial commit'
[master (root-commit) 4af17bc] initial commit
 3 files changed, 4 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 package.json

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

#### 直接提交工作目录

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git commit -a -m 'full commit'
[master f0e8eba] full commit
 1 file changed, 1 insertion(+)

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
nothing to commit, working tree clean
```

### [log](https://git-scm.com/docs/git-log)

查看历史提交信息

```git
git log
```

```git {4,6}
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git log
# SHA-1 编码的 HASH 标志符
commit f0e8eba9432bf30713ac443ab7a6df336629867b (HEAD -> master)
# git-config 配置的提交者信息
Author: xxx <xxx@xxx.com>
Date:   Wed Jan 29 11:25:07 2020 +0800

    full commit

commit 4af17bc8360028dd4c68fa80e420ae8c21a683f3
Author: xxx <xxx@xxx.com>
Date:   Wed Jan 29 11:19:01 2020 +0800

    initial commit

# 简化日志
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git log --oneline
f0e8eba (HEAD -> master) full commit
4af17bc initial commit

# 美化日志
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
* f0e8eba - (HEAD -> master) full commit (13 minutes ago) <xxx>
* 4af17bc - initial commit (19 minutes ago) <xxx>
```

### [aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)

配置别名

```git
git config alias.shortname <fullcommand>
```

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git config --global alias.log-graph "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git log-graph
* f0e8eba - (HEAD -> master) full commit (6 hours ago) <xxx>
* 4af17bc - initial commit (6 hours ago) <xxx>
```

### [diff](https://git-scm.com/docs/git-diff)

显示不同版本差异

```git
# 工作目录与暂存区的差异
git diff

# 暂存区与某次提交差异，默认为 HEAD
git diff -cached [<reference>]

# 工作目录与某次提交的差异
git diff <reference>
```

### 撤销工作目录修改

```git
# 将文件内容从暂存区复制到工作目录
git checkout --<file>
```

```git
# 修改 README.md 文件内容

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git checkout -- README.md

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
nothing to commit, working tree clean
```

### 撤销暂存区内容，工作目录内容存在

将文件内容从上次提交复制到暂存区

```git
git reset HEAD <file>
```

```git
# 修改 README.md 文件内容

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git add README.md

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md


xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git reset HEAD README.md
Unstaged changes after reset:
M       README.md

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

### 撤销暂存区、工作目录内容

将文件内容从上次提交复制到暂存区、工作目录

```git
git checkout HEAD -- <file>
```

```git
# 修改 README.md 文件内容

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git add README.md

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md


xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git checkout HEAD -- README.md

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
nothing to commit, working tree clean
```

### 总结

```
未跟踪     已跟踪
   │ git add │
   ├────────>┼
   │ git rm  │
   ├<────────┼

工作目录                  暂存区              提交区
   │ git add                │ git commit       │
   ├───────────────────────>┼─────────────────>┤
   │ git commit -a                             │
   ├──────────────────────────────────────────>┤
   │ git checkout -- <file> │ git reset <file> │
   ├<───────────────────────┼<─────────────────┤
   │ git checkout HEAD -- <file>               │
   ├<──────────────────────────────────────────┤
```

### [branch](https://git-scm.com/docs/git-branch)

分支操作

```git
# 创建分支
git branch <branchName>
# 删除分支
git branch -d <branchName>
# 查看分支信息
git branch -v
```

``` git
# 创建分支
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git branch next

# 查看 master 分支信息
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ cat .git/refs/heads/master
f0e8eba9432bf30713ac443ab7a6df336629867b

# 修改 README.md 文件内容
# 提交
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$  git commit -a -m 'branch test'
[master c873cf5] branch test
 1 file changed, 2 insertions(+), 1 deletion(-)

# 查看分支信息
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git branch -v
* master c873cf5 branch test
  next   f0e8eba full commit
```

### [checkout](https://git-scm.com/docs/git-checkout)

通过移动 HEAD 检出版本  
可用于分支切换

```git
# 切换分支
git checkout <branchName>
# 创建并切换分支
git checkout -b <branchName>
# 移动到提交引用
git checkout <reference>
```

#### 切换分支

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git checkout next
Switched to branch 'next'

xxx@xxx MINGW64 ~/Desktop/git-test (next)
$ git branch -v
  master c873cf5 branch test
* next   f0e8eba full commit
```

#### 提交

```git
# 修改 README.md 文件内容
# 提交
xxx@xxx MINGW64 ~/Desktop/git-test (next)
$ git commit -a -m 'next branch test'
[next dbec47f] next branch test
 1 file changed, 2 insertions(+), 1 deletion(-)
```

#### 切换到上一个分支

```git
xxx@xxx MINGW64 ~/Desktop/git-test (next)
$ git checkout -
Switched to branch 'master'
```

#### 创建并切换分支

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git checkout -b issue-26
Switched to a new branch 'issue-26'

xxx@xxx MINGW64 ~/Desktop/git-test (issue-26)
$ git branch -v
* issue-26 c873cf5 branch test
  master   c873cf5 branch test
  next     dbec47f next branch test
```

#### 移动到提交引用

```git
xxx@xxx MINGW64 ~/Desktop/git-test ((dbec47f...))
$ git checkout f0e8eba
Previous HEAD position was dbec47f next branch test
HEAD is now at f0e8eba full commit

# 游离状态（detached head）不要进行编辑操作
xxx@xxx MINGW64 ~/Desktop/git-test (issue-26)
$ git checkout f0e8eba
Note: checking out 'f0e8eba'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at f0e8eba full commit

# 切换到 master 分支
xxx@xxx MINGW64 ~/Desktop/git-test ((f0e8eba...))
$ git checkout master
Previous HEAD position was f0e8eba full commit
Switched to branch 'master'
```

### [reset](https://git-scm.com/docs/git-reset)

当前分支回退到某个版本

```git
# 默认
# 复制当前内容到暂存区
git reset --mixed <commit>
# 复制当前内容到暂存区、工作目录
git reset --soft <commit>
# 不复制
git reset --hard <commit>
```

```git
# 修改 README.md 文件内容
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git commit -a -m 'reset test'
[master b063214] reset test
 1 file changed, 2 insertions(+), 1 deletion(-)

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git log-graph
* b063214 - (HEAD -> master) reset test (22 seconds ago) <xxx>
* c873cf5 - (issue-26) branch test (5 weeks ago) <xxx>
* f0e8eba - full commit (5 weeks ago) <xxx>
* 4af17bc - initial commit (5 weeks ago) <xxx>

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git reset --mixed c873cf5
Unstaged changes after reset:
M       README.md

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git log-graph
* c873cf5 - (HEAD -> master, issue-26) branch test (5 weeks ago) <xxx>
* f0e8eba - full commit (5 weeks ago) <xxx>
* 4af17bc - initial commit (5 weeks ago) <xxx>

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

# 查看操作记录
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git reflog
c873cf5 (HEAD -> master, issue-26) HEAD@{0}: reset: moving to c873cf5
b063214 HEAD@{1}: commit: reset test
c873cf5 (HEAD -> master, issue-26) HEAD@{2}: reset: moving to HEAD~
baf8bdf HEAD@{3}: commit: reset test
c873cf5 (HEAD -> master, issue-26) HEAD@{4}: reset: moving to c873cf5
dfade7b HEAD@{5}: reset: moving to dfade7b
dfade7b HEAD@{6}: reset: moving to dfade7b
dfade7b HEAD@{7}: commit: reset test
c873cf5 (HEAD -> master, issue-26) HEAD@{8}: checkout: moving from f0e8eba9432bf30713ac443ab7a6df336629867b to master
f0e8eba HEAD@{9}: checkout: moving from issue-26 to f0e8eba
c873cf5 (HEAD -> master, issue-26) HEAD@{10}: checkout: moving from f0e8eba9432bf30713ac443ab7a6df336629867b to issue-26
f0e8eba HEAD@{11}: checkout: moving from master to f0e8eba
c873cf5 (HEAD -> master, issue-26) HEAD@{12}: checkout: moving from f0e8eba9432bf30713ac443ab7a6df336629867b to master
f0e8eba HEAD@{13}: checkout: moving from dbec47f9101e16efa2f9fec8c4598d3716564a21 to f0e8eba
dbec47f (next) HEAD@{14}: checkout: moving from issue-26 to dbec47f
c873cf5 (HEAD -> master, issue-26) HEAD@{15}: checkout: moving from master to issue-26
c873cf5 (HEAD -> master, issue-26) HEAD@{16}: checkout: moving from issue-26 to master
c873cf5 (HEAD -> master, issue-26) HEAD@{17}: checkout: moving from master to issue-26
c873cf5 (HEAD -> master, issue-26) HEAD@{18}: checkout: moving from next to master
dbec47f (next) HEAD@{19}: commit: next branch test
f0e8eba HEAD@{20}: checkout: moving from master to next
c873cf5 (HEAD -> master, issue-26) HEAD@{21}: commit: branch test
f0e8eba HEAD@{22}: commit: full commit
4af17bc HEAD@{23}: commit (initial): initial commit
```

捷径

* `A^` A 的父提交
* `A~n` A 前 n 次提交

### reset checkout

| 命令                    | 范例                         | 移动（HEAD/branch） | 说明                      |
|-------------------------|-----------------------------|--------------------|---------------------------|
| `git reset <commit>`    | `git reset HEAD^ --soft`    | 是/是               | 完全退回到某提交           |
| `git reset <file>`      | `git reset README.md`       | 否/否               | 恢复暂存区到某提交状态     |
| `git checkout <commit>` | `git checkout master`       | 是/否               | 移动当前指针 HEAD 到某提交 |
| `git checkout <file>`   | `git checkout -- README.md` | 否/否               | 恢复工作目录到某状态       |

### [stash](https://git-scm.com/docs/git-stash)

保存目前的工作目录和暂存区状态，返回到干净的工作目录

```git
# 保存内容
git stash save <message>
# 查看保存记录
git stash list
# 恢复保存内容到工作目录
git stash apply <stash>
# 删除保存记录
git stash drop <stash>
# apply + drop
git stash pop
```

```git
# 修改 README.md 文件内容
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git add README.md

# 修改 README.md 文件内容

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md


xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git stash save 'stash save test'
Saved working directory and index state On master: stash save test

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
nothing to commit, working tree clean

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git stash list
stash@{0}: On master: stash save test

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git stash apply stash@{0}
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git stash drop stash@{0}
Dropped stash@{0} (7f4562e37e59b7540502288ed2f9038bd046bdb8)

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git stash list

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git stash save 'stash pop test'
Saved working directory and index state On master: stash pop test

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
nothing to commit, working tree clean

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git stash list
stash@{0}: On master: stash pop test

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git stash pop
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (2062bd6f2622c2dc4a2f0d35d22c040de6e44b7e)

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git stash list

# 清除修改的内容
```

### [merge](https://git-scm.com/docs/git-merge)

合并分支

```git
git merge <branch> <branch>
```

合并分支

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git checkout -b merge
Switched to a new branch 'merge'

# 修改 merge 分支 README.md 文件内容

xxx@xxx MINGW64 ~/Desktop/git-test (merge)
$ git commit -a -m 'merge test commit'
[merge 1a34406] merge test commit
 1 file changed, 2 insertions(+), 1 deletion(-)

xxx@xxx MINGW64 ~/Desktop/git-test (merge)
$ git checkout master
Switched to branch 'master'

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git merge merge
Updating f0e8eba..1a34406
Fast-forward
 README.md | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)
 
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git cat-file -p HEAD
tree 85175d63eb4a63b923674641c279e0fa32a5abe6
parent f0e8eba9432bf30713ac443ab7a6df336629867b
author xxx <br.github@outlook.com> 1583305929 +0800
committer xxx <br.github@outlook.com> 1583305929 +0800

merge test commit

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git branch -D merge
Deleted branch merge (was 1a34406).
```

合并分支处理冲突

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git checkout -b merge-conflict
Switched to a new branch 'merge-conflict'

# 修改 merge-conflict 分支 README.md 文件内容

xxx@xxx MINGW64 ~/Desktop/git-test (merge-conflict)
$ git commit -a -m 'merge conflict test commit'
[merge-conflict ebc0133] merge conflict test commit
 1 file changed, 2 insertions(+), 1 deletion(-)

xxx@xxx MINGW64 ~/Desktop/git-test (merge-conflict)
$ git checkout master
Switched to branch 'master'

# 修改 master 分支 README.md 文件内容

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git commit -a -m 'merge conflict test master commit'
[master 10937e0] merge conflict test master commit
 1 file changed, 2 insertions(+), 1 deletion(-)

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git merge merge-conflict
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.

xxx@xxx MINGW64 ~/Desktop/git-test (master|MERGING)
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

        both modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

xxx@xxx MINGW64 ~/Desktop/git-test (master|MERGING)
$ cat README.md
# Git Test
git merge test
<<<<<<< HEAD
git merge conflict test 1
=======
git merge conflict test 2
>>>>>>> merge-conflict

# 修改 master 分支 README.md 文件内容解决冲突

xxx@xxx MINGW64 ~/Desktop/git-test (master|MERGING)
$ git commit -a -m 'resolve merge conflict test'
[master 5685637] resolve merge conflict test

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git status
On branch master
nothing to commit, working tree clean

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git branch -D merge-conflict
Deleted branch merge-conflict (was ebc0133).
```

非 fast-forward 方式合并分支

默认 fast-forward 方式，非 fast-forward 方式合并记录合并信息

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git checkout -b merge-no-ff
Switched to a new branch 'merge-no-ff'

# 修改 merge-no-ff 分支 README.md 文件内容

xxx@xxx MINGW64 ~/Desktop/git-test (merge-no-ff)
$ git commit -a -m 'merge no ff commit'
[merge-no-ff cb9e63c] merge no ff commit
 1 file changed, 1 insertion(+), 4 deletions(-)

xxx@xxx MINGW64 ~/Desktop/git-test (merge-no-ff)
$ git checkout master
Switched to branch 'master'

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git merge --no-ff -m 'merge no ff test' merge-no-ff
Merge made by the 'recursive' strategy.
 README.md | 5 +----
 1 file changed, 1 insertion(+), 4 deletions(-)

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git branch -D merge-no-ff
Deleted branch merge-no-ff (was cb9e63c).

```

### [rebase](https://git-scm.com/docs/git-rebase)

剪切提交（重引）历史基线，变基  
勿在公用分支使用 rebase

```git
# 全部重引
git rebase
# 部分重引
git rebase --onto
```

全部重引

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git checkout -b rebase
Switched to a new branch 'rebase'

# 修改 rebase 分支 README.md 文件内容

xxx@xxx MINGW64 ~/Desktop/git-test (rebase)
$ git commit -a -m 'rebase test 1'
[rebase 2adb47c] rebase test 1
 1 file changed, 1 insertion(+), 1 deletion(-)

# 修改 rebase 分支 README.md 文件内容

xxx@xxx MINGW64 ~/Desktop/git-test (rebase)
$ git commit -a -m 'rebase test 2'
[rebase eb3cfc0] rebase test 2
 1 file changed, 2 insertions(+), 1 deletion(-)

xxx@xxx MINGW64 ~/Desktop/git-test (rebase)
$ git checkout master
Switched to branch 'master'

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git rebase rebase
First, rewinding head to replay your work on top of it...
Fast-forwarded master to rebase.

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git log-graph
* eb3cfc0 - (HEAD -> master, rebase) rebase test 2 (24 hours ago) <xxx>
* 2adb47c - rebase test 1 (24 hours ago) <xxx>
*   6dcedf9 - merge no ff test (25 hours ago) <xxx>
|\
| * cb9e63c - merge no ff commit (25 hours ago) <xxx>
|/
*   5685637 - resolve merge conflict test (25 hours ago) <xxx>
|\
| * ebc0133 - merge conflict test commit (26 hours ago) <xxx>
* | 10937e0 - merge conflict test master commit (26 hours ago) <xxx>
|/
* 1a34406 - merge test commit (26 hours ago) <xxx>
* f0e8eba - full commit (5 weeks ago) <xxx>
* 4af17bc - initial commit (5 weeks ago) <xxx>
```

练习失败

### [tag](https://git-scm.com/docs/git-tag)

给提交设置别名

```git
git tag <tag> <commit>
```

```git
xxx@xxx MINGW64 ~/Desktop/git-test (rebase)
$ git checkout master
Switched to branch 'master'

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git commit -a -m 'tag test'
[master 7222038] tag test
 1 file changed, 1 insertion(+), 2 deletions(-)

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git tag v0.1 7222038

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git log-graph
* 7222038 - (HEAD -> master, tag: v0.1) tag test (78 seconds ago) <xxx>
* eb3cfc0 - rebase test 2 (25 hours ago) <xxx>
* 2adb47c - rebase test 1 (25 hours ago) <xxx>
*   6dcedf9 - merge no ff test (25 hours ago) <xxx>
|\
| * cb9e63c - merge no ff commit (25 hours ago) <xxx>
|/
*   5685637 - resolve merge conflict test (26 hours ago) <xxx>
|\
| * ebc0133 - merge conflict test commit (26 hours ago) <xxx>
* | 10937e0 - merge conflict test master commit (26 hours ago) <xxx>
|/
* 1a34406 - merge test commit (27 hours ago) <xxx>
* f0e8eba - full commit (5 weeks ago) <xxx>
* 4af17bc - initial commit (5 weeks ago) <xxx>

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git checkout v0.1
Note: checking out 'v0.1'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at 7222038 tag test

xxx@xxx MINGW64 ~/Desktop/git-test ((v0.1))
$ git checkout 7222038
HEAD is now at 7222038 tag test
```

### 初始化本地远程服务器 [git init --bare](https://git-scm.com/docs/git-init)

初始化本地远程服务器

```git
git init ~/git-server --bare
```

```git
xxx@xxx-7560 MINGW64 ~/Desktop/git-test ((v0.1))
$ cd ..

xxx@xxx-7560 MINGW64 ~/Desktop
$ git init git-server-test --bare
Initialized empty Git repository in C:/Users/86157/Desktop/git-server-test/
```

### [push](https://git-scm.com/docs/git-push)

推送到远程

```git
git push <remote> <branch>
```

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git push ../git-server-test master
Enumerating objects: 32, done.
Counting objects: 100% (32/32), done.
Delta compression using up to 4 threads
Compressing objects: 100% (25/25), done.
Writing objects: 100% (32/32), 3.15 KiB | 322.00 KiB/s, done.
Total 32 (delta 3), reused 0 (delta 0)
To ../git-server-test
 * [new branch]      master -> master
```

### [remote](https://git-scm.com/docs/git-remote)

远程仓库操作

```git
# 添加远程仓库别名
git remote add <alias> <repository>
# 查看远程仓库信息
git remote -v
```

```git
xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git remote add origin ../git-server-test

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ git remote -v
origin  ../git-server-test (fetch)
origin  ../git-server-test (push)

xxx@xxx MINGW64 ~/Desktop/git-test (master)
$ cat .git/config
[core]
        repositoryformatversion = 0
        filemode = false
        bare = false
        logallrefupdates = true
        symlinks = false
        ignorecase = true
[remote "origin"]
        url = ../git-server-test
        fetch = +refs/heads/*:refs/remotes/origin/*
```

### [fetch](https://git-scm.com/docs/git-fetch)

获取远程仓库提交

```git
# 获取远程仓库提交
git fetch <remote> <branch>
# 合并分支
git merge <remote>/<branch>
# 推送到远程
git push <remote> <branch>
```

### [pull](https://git-scm.com/docs/git-pull)

拉取远程仓库提交  
`pull` = `fetch` + `merge`

```git
git pull <remote> <branch>
```

### [clone](https://git-scm.com/docs/git-clone)

克隆远程仓库为本地仓库  
`clone` = `init` + `remote` + `pull`

## 延伸

* [《Pro Git》](https://git-scm.com/book/zh/v2)