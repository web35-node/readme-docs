# Using the Terminal for git functions

<ul>
    <li>git clone (file-name) = This will  clone the git repo onto your machine for editing </li>
    <li>git checkout -b (branch-name) = This will create a new branch.</li>
    <li>git status - This will show you what files in the repo that you are in have changes or are not being tracked</li>
    <li>git add (file-name) = This will add the desiered file to the commit.</li>
    <li>git commit -m "(enter-comments-here)" = This will create the physical commit record.  Be sure to add the relevant comments. Something like what you changed.</li>
    <li>git push origin (branch-name) = This will push or upload all saved commits to github into the branch you have selected</li>
    <li>git pull origin (branch-name) = This will pull or download everything in the branch that you chose from github</li>
    <li>git fetch && git reset --hard origin/lecture</li>
</ul>

# Other Terminal Commands

<ul>
    <li>cd (folder-name) =  this is the same as double clicking on a folder on a pc to open the folder</li>
    <li>cd (folder-name)/(folder-name) = you can drill down as many folders as you like this.</li>
    <li>ls = this lets you see what is in the folder you are in</li>
    <li>ls -a = this will show you everything that is in the folder including hidden files/folders</li>
    <li>cd .. = This will move you up one folder (current location Home/Documents/Lambda ---- enter cd .. ----- new location Home/Documents/)</li>
    <li>cd ../../ = How you would move more than 1 folder up (new location from above would be Home/)</li>
</ul>

# Tips/Tricks

<ul>
    <li>Tab key in terminal = when typing a folder or file name you can type the first few letters and click the tab button and it will fill the rest in....if there is multiple files like file01.txt and file02.txt after typing fi and then hitting tab it will fill in up to file0 just fill in the version so to speak.
        <ul>
            <li>This will work with git commands and basic terminal commands</li>
        </ul>
    </li>
    <li>Commit your code often = Any major changes or when a task is complete be sure to git add and git commit this can and will save you in the long run.  You don't have to push the code to github.  Just commit it locally.  It will upload all the commits to github and you can see the changes each commit.</li>
