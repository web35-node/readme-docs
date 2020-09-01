# Using the Terminal for git functions

git clone <file-name> = This will  clone the git repo onto your machine for editing
git checkout -b <branch-name> = This will create a new branch.
git status - This will show you what files in the repo that you are in have changes or are not being tracked
git add <file-name> = This will add the desiered file to the commit.
git commit -m "<enter-comments-here>" = This will create the physical commit record.  Be sure to add the relevant comments. Something like what you changed.
git push origin <branch-name> = This will push or upload all saved commits to github into the branch you have selected
git pull origin <branch-name> = This will pull or download everything in the branch that you chose from github
git fetch && git reset --hard origin/lecture

# Other Terminal Commands

cd <folder-name> =  this is the same as double clicking on a folder on a pc to open the folder
cd <folder-name>/<folder-name> = you can drill down as many folders as you like this.
ls = this lets you see what is in the folder you are in
ls -a = this will show you everything that is in the folder including hidden files/folders
cd .. = This will move you up one folder (current location Home/Documents/Lambda ---- enter cd .. ----- new location Home/Documents/)
cd ../../ = How you would move more than 1 folder up (new location from above would be Home/)

# Tips/Tricks

Tab key in terminal = when typing a folder or file name you can type the first few letters and click the tab button and it will fill the rest in....if there is multiple files like file01.txt and file02.txt after typing fi and then hitting tab it will fill in up to file0 just fill in the version so to speak.
    This will work with git commands and basic terminal commands

Commit your code often = Any major changes or when a task is complete be sure to git add and git commit this can and will save you in the long run.  You don't have to push the code to github.  Just commit it locally.  It will upload all the commits to github and you can see the changes each commit.