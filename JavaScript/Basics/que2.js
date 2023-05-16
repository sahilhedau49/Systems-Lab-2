const a = new Set();
console.log("Enter Array Elements: ");
const prompt = require("prompt-sync")();

for (let index = 0; index < 5; index++) {
  a.add(prompt(`Element ${index + 1} : `));
}

console.log(a);
