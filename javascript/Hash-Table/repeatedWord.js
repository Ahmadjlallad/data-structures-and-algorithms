const hashTable = require("./hashTable");
/*
 * long complicated without any built in func
const repeatedWord = (str) => {
  const storeHashTable = new hashTable(1024);
  let count = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      let index = storeHashTable.hash(count);
      if (storeHashTable.table[index]) return count;
      else storeHashTable.add(count, 1);
      count = "";
    } else {
      if (str[i] === "," || str[i] === "." || str[i] === ";" || str[i] === "_")
        continue;
      else count += str[i].toLowerCase();
    }
  }
};
*/
// easy sol
const repeatedWord = (str) => {
  const storeHashTable = new hashTable(1024);
  let splittedWords = str
    .toLowerCase()
    .replace(/[^((a-z)& )]/gm, "")
    .split(" ");
  console.log(splittedWords);
  for (let i = 0; i < splittedWords.length; i++) {
    const index = storeHashTable.hash(splittedWords[i]);
    if (storeHashTable.table[index]) {
      return splittedWords[i];
    } else storeHashTable.add(splittedWords[i], 1);
  }
};
module.exports = repeatedWord;
