const Stack = require("../stack/Stack");
describe("stack test", () => {
  it("Can successfully push onto a stack", () => {
    const aStack = new Stack();
    aStack.push(1);
    expect(aStack.top.value).toEqual(1);
  });
  it("Can successfully push multiple values onto a stack", () => {
    const aStack = new Stack();
    aStack.push(1);
    aStack.push(2);
    aStack.push(3);
    expect(aStack.top.value).toEqual(3);
  });
  it("Can successfully empty a stack after multiple pops", () => {
    const aStack = new Stack();
    aStack.push(1);
    aStack.push(2);
    aStack.push(3);
    aStack.pop();
    aStack.pop();
    aStack.pop();
    expect(aStack.top).toEqual(null);
  });
  it("Can successfully peek the next item on the stack", () => {
    const aStack = new Stack();
    aStack.push(1);
    aStack.push(2);
    aStack.push(3);
    expect(aStack.peek()).toEqual(3);
  });
  it("Can successfully instantiate an empty stack", () => {
    const aStack = new Stack();
    expect(aStack.top).toEqual(null);
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    const aStack = new Stack();
    expect(() => aStack.pop()).toThrow();
    expect(() => aStack.peek()).toThrow();
  });
});
