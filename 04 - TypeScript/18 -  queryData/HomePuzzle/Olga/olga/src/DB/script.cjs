import { items } from "../model/itemModelModel";

const fs = require('fs');
let rawdata = fs.readFileSync('./itemsCatalog.json');
let itemsJSON = JSON.parse(rawdata);
itemsJSON.push(items);
console.log(items);
let data = JSON.stringify(items);
console.log(data);
fs.writeFileSync('./itemsCatalog.json', data);