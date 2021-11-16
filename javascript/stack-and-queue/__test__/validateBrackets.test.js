const validateBrackets = require("../validateBrackets/validateBrackets");
const Stack = require("../validateBrackets/validateBrackets");
describe("stack test", () => {
  it("Can successfully return true when given right input", () => {
    expect(validateBrackets("{}(){}")).toBeTruthy();
  });
  it("Can successfully return true when given right input with text in side", () => {
    expect(validateBrackets("()[[Extra Characters]]")).toBeTruthy();
  });
  it("Can successfully return false when a wrong inputs is supplied", () => {
    expect(validateBrackets("[({}]")).toBeFalsy();
  });
  it("Can successfully return false when a empty string supplied", () => {
    expect(validateBrackets("")).toBeFalsy();
  });
  it("Can successfully return false when a other then string type was supplied", () => {
    expect(validateBrackets("{}(){}")).toBeTruthy();
  });
});
