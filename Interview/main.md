# Git and Github
- Git is a tool that helps you track changes in your code.
- GitHub is a website where you can store your code and share it with others.
- Git helps you manage different versions of your code.
- GitHub makes it easy to collaborate with other developers.

# Explain the difference between git pull and git fetch.
- git pull fetches changes from a remote repository and merges them into your current branch.
- git fetch only downloads the changes without merging them.

# What is the difference between git rebase and git merge?
- git rebase: Moves your commits to the tip of another branch, rewriting history to create a clean, straight line. Use it to make your commit history look tidy.
- git merge: Combines changes from one branch into another without changing history, showing a full record of all commits. Use it to preserve the complete development history.

# What is a repository in Git?
- A repository is a directory or storage space where your code and its history are stored.

# What are the different types of branches in Git?

Main branches (main, master).
Feature branches (e.g., feature/new-feature).
Release branches (e.g., release/v1.0).
Hotfix branches (e.g., hotfix/critical-bug).

# What is the purpose of git stash?
- Temporarily saves changes in the working directory without committing them, allowing you to work on something else.

# What is the difference between git reset and git revert?
- git reset rewrites commit history, potentially removing commits.
- git revert creates a new commit to undo the changes introduced by a previous commit.

# Explain the three states of a Git file.
- Modified: The file has been changed but not staged.
- Staged: The file is prepared for the next commit.
- Committed: The file is safely stored in the repository.

# What is a detached HEAD state in Git?
- It occurs when HEAD points to a specific commit instead of a branch, often used for reviewing past commits.

# What is a git tag, and how is it different from a branch?
- A tag is a reference to a specific commit (usually used for releases).
Unlike a branch, a tag does not move with new commits.

# Section 2: Troubleshooting Questions
# These questions test your ability to identify and resolve common Git issues.
# Merge Conflicts
# What is a merge conflict, and how do you resolve it?
- A merge conflict happens when Git can't combine changes because two people edited the same part of a file differently. You fix it by choosing or combining the changes and saving the file

# How do you abort a merge in Git?
- git merge --abort

# How do you check for conflicts before merging?
- git fetch => Fetch the latest changes from the remote branch
- git diff <branch-name> => Check for differences between branches using
- git merge --no-commit --no-ff <branch-name> =>Run a dry-run merge to test for conflicts without actually merging
- git merge --abort => Cancel the dry-run merge if conflicts are found

# Accidental Commits
# How do you undo the last commit?
# To keep changes:
- git reset --soft HEAD~1
# To discard changes:
- git reset --hard HEAD~1

# How do you recover a deleted branch?
- git reflog
- git checkout -b <branch-name> <commit-hash>


# Lost Changes
# What happens if you lose changes after a hard reset?
- You can recover changes using git reflog to find the previous commit.

# Untracked Files
# How do you clean up untracked files and directories?
- git clean -f -d

# Push and Pull Issues
# What do you do if you accidentally push to the wrong branch?
- Undo the push with:
- git reset --hard origin/main
- git push --force

# How do you resolve conflicts when pulling changes from a remote repository?
# Use:
- git pull --rebase origin main
- Resolve conflicts and continue the rebase:
- git rebase --continue

# Section 3: Scenario-Based Questions
# These questions focus on applying Git commands to real-world situations.
# Collaboration
# Scenario: Multiple developers are working on the same file. How would you manage and integrate their changes without conflicts?
To manage and integrate changes from multiple developers on the same file:

- Use feature branches for each developer to work independently.
- Pull changes regularly from the main branch to stay updated and avoid conflicts.
- Rebase frequently to keep the commit history clean and avoid unnecessary merge commits.
- Create pull requests (PRs) for code review before merging into the main branch.
- Communicate within the team to avoid overlapping work on the same parts of the code.
- Automate testing using CI/CD to catch issues early.

# Scenario: You need to test an experimental feature without affecting the main branch.
- Create a new branch from the main branch: git checkout -b experimental-feature
- Work on the feature in the new branch.
- Test the feature without changing the main branch.
- If it’s not working, delete the branch without affecting the main branch

# Scenario: You accidentally delete a branch. How do you recover it?
- Find the commit where the branch was before deletion using the reflog: git reflog
- Locate the commit hash of the deleted branch in the reflog output.
- Create a new branch from that commit: git checkout -b <branch-name> <commit-hash>

# Scenario: You commit sensitive information (e.g., API keys). How do you remove it from history?
# Solution:
- git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch <file>" --prune-empty --tag-name-filter cat -- --all
- Force push the changes:
- git push --force


# Version Control
# Scenario: You need to apply a specific commit from another branch to the current branch.
# Solution:
- use git log <branch name>  
- Use git cherry-pick:
- git cherry-pick <commit-hash>

# Release Management
# Scenario: You want to create a release version for your project.
# Solution:
# Create a tag:
- git tag -a v1.0 -m "Release version 1.0"
- Push the tag to the remote:
- git push origin v1.0

# Difference between tag and branch
- A tag is a fixed pointer to a specific commit, often used for releases (e.g., v1.0).
- A branch is a movable pointer used for ongoing development, changing as new commits are added.

+===============================================================================================+

# Difference between github actions and jenkins and gitlab ci/cd
- GitHub Actions is tightly integrated with GitHub, making it easy to automate workflows directly within the GitHub ecosystem.
- Jenkins is an open-source, standalone CI/CD tool with high customization but requires more setup and maintenance.
- GitLab CI/CD is built into GitLab, offering seamless integration with GitLab repositories and additional DevOps tools.