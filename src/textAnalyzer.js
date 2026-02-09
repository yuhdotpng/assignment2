const fs = require('fs');
const content = fs.readFileSync('./data/quotes.txt', 'utf8');
const lines = content.split('\n');
const words = content.split(' ');

//console.log(lines.length)
console.log(words.length)
console.log(words)
