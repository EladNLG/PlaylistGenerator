# PlaylistGenerator
A KVFileOverrides generator for the Custom Weapon Framework 3.0, coming soon™

## Install Instructions
1) Download the files.
2) Extract them into an **EMPTY** folder.

## How to use

1) Download Node.js (search it on google or smth, idk)
2) install it lel
3) Paste your **custom** weapon **TXTs** inside the weapons folder (don't paste vanilla weapons - otherwise they'll be included in the result file too!)

**NOTE:** Client-side vscripts are *NOT* supported, and never will be.
You may do server-side modifications to pre-existing vscripts, in your `/platform/scripts/vscripts/weapons/` folder of R5R. 

4) Open Windows PowerShell (or your favorite command line, and make sure the folder selected is the folder where you extracted the files.) by shift+right clicking inside the folder and pressing "Open PowerShell window here"
5) Run the command "node index.js"
6) copy paste the contents of the result.txt file into your KVFileOverrides section in the playlist file.
7) You're done.
