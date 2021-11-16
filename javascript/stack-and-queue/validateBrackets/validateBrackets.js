function validateBrackets(string) {
  if (string.length === 0 || string.length === 1 || typeof string !== "string")
    return false;

  let brackets = {
    "{": 0,
    "[": 0,
    "(": 0,
    bracketsCount: 0,
  };

  for (let i = 0; i < string.length; i++) {
    string[i] === "{" || string[i] === "(" || string[i] === "["
      ? (brackets[string[i]]++, brackets.bracketsCount++)
      : null;
    string[i] === "}" ? brackets["{"]-- : null;
    string[i] === ")" ? brackets["("]-- : null;
    string[i] === "]" ? brackets["["]-- : null;
    if (brackets["{"] < 0 || brackets["("] < 0 || brackets["["] < 0)
      return false;
  }
  if (brackets["{"] === 0 && brackets["("] === 0 && brackets["["] === 0)
    if (brackets.bracketsCount > 0) return true;
    else return false;
  else return false;
}
module.exports = validateBrackets;
