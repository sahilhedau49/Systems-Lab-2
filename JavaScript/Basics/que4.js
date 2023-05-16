const t1 = "Hello, I am in SL Lab";
console.log(t1);
vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var count = 0;
for (const key in t1) {
  if (vowel.includes(t1.charAt(key))) {
    count++;
  }
}

console.log(count);
