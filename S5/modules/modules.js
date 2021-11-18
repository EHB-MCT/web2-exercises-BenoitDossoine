// Run as a module --> can use await without async
import * as fs from 'fs/promises';

let result = await fs.readFile('./boardgames.json')
let data = JSON.parse(result);

makeFiles(data);

function makeFiles(data) {
    for (let id in data) {
        let filename = `${id}.json`
        let content = JSON.stringify(data[id])
        fs.writeFile(filename, content);
    }
}