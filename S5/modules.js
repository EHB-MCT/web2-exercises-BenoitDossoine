const fs = require('fs/promises');

let result = fs.readFile('./boardgames.json')
    .then(result => makeFiles(JSON.parse(result)));

function makeFiles(data) {
    for (let id in data) {
        let filename = `${id}.json`
        let content = JSON.stringify(data[id])
        fs.writeFile(filename, content);
    }
}