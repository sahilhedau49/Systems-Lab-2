const prompt = require("prompt-sync")();
const a = prompt(`Enter string to be checked for Palindrome: `);
const a2 = a.toLowerCase();
const a1 = a.split("").reverse().join("").toLowerCase();
if (a2 == a1) {
  console.log("Palindorme");
} else {
  console.log("Not a Palindrome");
}
