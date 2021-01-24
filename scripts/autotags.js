const fs = require('fs')
const PATH = require('path')
const readlineSync = require('readline-sync');

const obj = {}

const oldTags = JSON.parse(fs.readFileSync('./src/tags.json'));

fs.readdirSync("./icons/", { withFileTypes: true })
  .filter((item) => { return !item.isDirectory() && item.name.split('.')[1] === "svg" })
  .forEach((item) => {
      let keywords = []
    if (oldTags[PATH.parse(item.name).name] === undefined) {
        let keyword = ""
        console.log("Enter keywords for '" + PATH.parse(item.name).name + "' (empty when done)");
        do {
            keyword = readlineSync.question('Keyword: ');
            keywords.push(keyword)
        } while (!keyword.localeCompare(""))
    } else {
        keywords = oldTags[PATH.parse(item.name).name]
    }
    Object.assign(obj, { [PATH.parse(item.name).name]: keywords })
  })

fs.writeFileSync("./src/tags.json", JSON.stringify(obj))

