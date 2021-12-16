const mostCommonWord = (str) => {
  const map = new Map();
  const words = str.toLowerCase().split(/\W+/gm);

  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      map.set(words[i], map.get(words[i]) + 1);
    } else {
      map.set(words[i], 1);
    }
  }
  let max = -Infinity;
  let maxKey = "";
  for (const [key, value] of map) {
    if (value > max) {
      max = value;
      maxKey = key;
    }
  }
  return maxKey;
};
console.log(mostCommonWord(`In a galaxy far far away far`));
console.log(mostCommonWord(`Taco cat ate a taco	taco`));
console.log(mostCommonWord(`No. Try not. Do or do not. There is no try.`));
/**
 * In a galaxy far far away	far
Taco cat ate a taco	taco
No. Try not. Do or do not. There is no try.
 */
