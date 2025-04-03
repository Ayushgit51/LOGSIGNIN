Here’s a **GitHub Cheat Sheet** covering how to **push code**, **create pull requests**, and **track changes** effectively. 🚀  

---

# **GitHub Cheat Sheet: Pushing Code & Creating Pull Requests**
## **1. Setting Up GitHub**
### **🔹 Configure Git (One-Time Setup)**
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```
Check configuration:
```bash
git config --list
```

---

## **2. Pushing Code to GitHub**
### **🔹 Step 1: Clone Repository**
```bash
git clone <repository-url>
```
Example:
```bash
git clone https://github.com/username/repo.git
```
Move into the project directory:
```bash
cd repo
```

### **🔹 Step 2: Create a New Branch**
```bash
git checkout -b feature-branch
```

### **🔹 Step 3: Make Changes & Check Status**
- After modifying files, check status:
  ```bash
  git status
  ```
- View differences:
  ```bash
  git diff
  ```

### **🔹 Step 4: Stage & Commit Changes**
- Add all files to staging:
  ```bash
  git add .
  ```
- Commit the changes:
  ```bash
  git commit -m "Added new feature"
  ```

### **🔹 Step 5: Push Changes to GitHub**
```bash
git push origin feature-branch
```

---

## **3. Creating a Pull Request**
### **🔹 Using GitHub CLI**
1. **Login (if not done)**
   ```bash
   gh auth login
   ```
2. **Create the pull request**
   ```bash
   gh pr create --base main --head feature-branch --title "Feature: XYZ" --body "Description of the change"
   ```

### **🔹 Using GitHub Website**
1. Go to the repository on GitHub.
2. Click **Pull Requests** → **New Pull Request**.
3. Select **Base**: `main` and **Compare**: `feature-branch`.
4. Click **Create Pull Request**.

---

## **4. Checking Code Changes**
### **🔹 See What’s Changed Before Commit**
```bash
git diff
```
### **🔹 See Commit History**
```bash
git log --oneline --graph --all
```
### **🔹 See Changes in a File**
```bash
git diff <filename>
```

---

## **5. Syncing Changes from GitHub (Pulling Updates)**
### **🔹 Fetch Latest Updates**
```bash
git fetch origin
```
### **🔹 Pull & Merge Updates**
```bash
git pull origin main
```
### **🔹 Reset Your Branch to Match Remote**
```bash
git reset --hard origin/main
```

---

## **6. Handling Merge Conflicts**
If you get a **merge conflict**, open the conflicting file, fix it manually, then:
```bash
git add .
git commit -m "Resolved merge conflict"
```
Then push the changes:
```bash
git push origin feature-branch
```

---

## **7. Deleting a Branch After Merge**
- Delete locally:
  ```bash
  git branch -d feature-branch
  ```
- Delete remotely:
  ```bash
  git push origin --delete feature-branch
  ```

---

### **🚀 Quick Summary of Common Commands**
| Action | Command |
|--------|---------|
| Clone repo | `git clone <repo-url>` |
| Create branch | `git checkout -b <branch-name>` |
| Check status | `git status` |
| See changes | `git diff` |
| Stage changes | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push branch | `git push origin <branch-name>` |
| Fetch latest updates | `git fetch origin` |
| Pull latest updates | `git pull origin main` |
| Create PR (CLI) | `gh pr create --base main --head <branch-name> --title "Title" --body "Description"` |
| Delete branch locally | `git branch -d <branch-name>` |
| Delete branch remotely | `git push origin --delete <branch-name>` |

---

This cheat sheet will help you manage your GitHub workflow effectively. Let me know if you need modifications! 🚀🔥Here’s a **GitHub Cheat Sheet** covering how to **push code**, **create pull requests**, and **track changes** effectively. 🚀  

---

# **GitHub Cheat Sheet: Pushing Code & Creating Pull Requests**
## **1. Setting Up GitHub**
### **🔹 Configure Git (One-Time Setup)**
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```
Check configuration:
```bash
git config --list
```

---

## **2. Pushing Code to GitHub**
### **🔹 Step 1: Clone Repository**
```bash
git clone <repository-url>
```
Example:
```bash
git clone https://github.com/username/repo.git
```
Move into the project directory:
```bash
cd repo
```

### **🔹 Step 2: Create a New Branch**
```bash
git checkout -b feature-branch
```

### **🔹 Step 3: Make Changes & Check Status**
- After modifying files, check status:
  ```bash
  git status
  ```
- View differences:
  ```bash
  git diff
  ```

### **🔹 Step 4: Stage & Commit Changes**
- Add all files to staging:
  ```bash
  git add .
  ```
- Commit the changes:
  ```bash
  git commit -m "Added new feature"
  ```

### **🔹 Step 5: Push Changes to GitHub**
```bash
git push origin feature-branch
```

---

## **3. Creating a Pull Request**
### **🔹 Using GitHub CLI**
1. **Login (if not done)**
   ```bash
   gh auth login
   ```
2. **Create the pull request**
   ```bash
   gh pr create --base main --head feature-branch --title "Feature: XYZ" --body "Description of the change"
   ```

### **🔹 Using GitHub Website**
1. Go to the repository on GitHub.
2. Click **Pull Requests** → **New Pull Request**.
3. Select **Base**: `main` and **Compare**: `feature-branch`.
4. Click **Create Pull Request**.

---

## **4. Checking Code Changes**
### **🔹 See What’s Changed Before Commit**
```bash
git diff
```
### **🔹 See Commit History**
```bash
git log --oneline --graph --all
```
### **🔹 See Changes in a File**
```bash
git diff <filename>
```

---

## **5. Syncing Changes from GitHub (Pulling Updates)**
### **🔹 Fetch Latest Updates**
```bash
git fetch origin
```
### **🔹 Pull & Merge Updates**
```bash
git pull origin main
```
### **🔹 Reset Your Branch to Match Remote**
```bash
git reset --hard origin/main
```

---

## **6. Handling Merge Conflicts**
If you get a **merge conflict**, open the conflicting file, fix it manually, then:
```bash
git add .
git commit -m "Resolved merge conflict"
```
Then push the changes:
```bash
git push origin feature-branch
```

---

## **7. Deleting a Branch After Merge**
- Delete locally:
  ```bash
  git branch -d feature-branch
  ```
- Delete remotely:
  ```bash
  git push origin --delete feature-branch
  ```

---

### **🚀 Quick Summary of Common Commands**
| Action | Command |
|--------|---------|
| Clone repo | `git clone <repo-url>` |
| Create branch | `git checkout -b <branch-name>` |
| Check status | `git status` |
| See changes | `git diff` |
| Stage changes | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push branch | `git push origin <branch-name>` |
| Fetch latest updates | `git fetch origin` |
| Pull latest updates | `git pull origin main` |
| Create PR (CLI) | `gh pr create --base main --head <branch-name> --title "Title" --body "Description"` |
| Delete branch locally | `git branch -d <branch-name>` |
| Delete branch remotely | `git push origin --delete <branch-name>` |

---

This cheat sheet will help you manage your GitHub workflow effectively. Let me know if you need modifications! 🚀🔥

# **GitHub Cheat Sheet: Merging Branches** 🚀  

Merging allows you to **combine changes** from one branch into another, typically merging a feature branch into `main`.  

---

## **1. Merging a Pull Request (PR) on GitHub**
### **🔹 Using GitHub Website**
1. Go to your repository on **GitHub**.
2. Click on **Pull Requests** → Select your PR.
3. Click **Merge pull request**.
4. Choose **Merge Type**:
   - **Merge Commit** (default) → Keeps all commits.
   - **Squash and Merge** → Combines commits into one.
   - **Rebase and Merge** → Moves commits without a merge commit.
5. Click **Confirm Merge**.
6. (Optional) Delete the feature branch after merging.

---

## **2. Merging Branches Using Git (Command Line)**
### **🔹 Step 1: Switch to the Target Branch**
```bash
git checkout main
```

### **🔹 Step 2: Pull the Latest Changes**
```bash
git pull origin main
```

### **🔹 Step 3: Merge the Feature Branch**
```bash
git merge feature-branch
```
If there are no conflicts, the merge is successful! 🎉  

---

## **3. Resolving Merge Conflicts**
If a conflict occurs:  
1. Git will show **conflicted files**. Open them and **manually edit**.
2. After resolving conflicts, **stage the files**:
   ```bash
   git add .
   ```
3. Commit the merge:
   ```bash
   git commit -m "Resolved merge conflict"
   ```
4. Push the changes:
   ```bash
   git push origin main
   ```

---

## **4. Deleting a Merged Branch**
- Locally:
  ```bash
  git branch -d feature-branch
  ```
- Remotely:
  ```bash
  git push origin --delete feature-branch
  ```

---

### **🚀 Quick Summary**
| Action | Command |
|--------|---------|
| Switch to `main` branch | `git checkout main` |
| Pull latest changes | `git pull origin main` |
| Merge a branch | `git merge feature-branch` |
| Resolve conflicts | Edit files manually, then `git add .` & `git commit` |
| Delete local branch | `git branch -d feature-branch` |
| Delete remote branch | `git push origin --delete feature-branch` |

This cheat sheet covers all the essentials for **pushing, pulling, PR creation, merging, and conflict resolution**. Let me know if you need more details! 🚀🔥