const fs = require("fs");

let weapons = [];

let weaponArr = []
readFiles("./weapons/", onWeaponRead)
function readFiles(dirname, onFileContent) {
    fs.readdirSync(dirname).forEach(function (filename) {
        let content = fs.readFileSync(dirname + filename, 'utf-8');

        onFileContent(filename, content);
    });
}

if (fs.existsSync("./convertPlaylist.txt"))
    fs.readFile("./convertPlaylist.txt", function (err, contents) {
        contents = string.replace(/\s+/g, ' ').trim();

        contents.split("\n").forEach(line => {
            let key, value;
            let split = line.split(" ")
            key = split[0]
            value = split[1]
            if (value[0] == "\"") {

            }
        });
    })

function onWeaponRead(filename, content) {
    weapons.push(content)
}

let result = ""
for (let i = 0; i < weapons.length; i++) {
    result += `"scripts/weapons/custom_weapon_${i}.txt"\n{\n`
    result += weapons[i]
    result += `\n}\n`
}


fs.writeFileSync("./result.txt", result)


console.log(`Written KVFileOverrides to result.txt, copy paste it into your playlist file.
NOTE: WEAPON FILES ARE NOT CHECKED FOR VADILITY.
If you get a playlist error - the weapon files might be the cause.`)