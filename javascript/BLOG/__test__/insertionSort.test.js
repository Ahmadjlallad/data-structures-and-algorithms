const sort = require("../Insertion-Sort/insertionSort");
describe("Insertion-Sort", () => {
  it("sort an Array", () => {
    let array = [5, 12, 7, 5, 5, 7];
    sort(array);
    expect(array).toStrictEqual([5, 5, 5, 7, 7, 12]);
  });
  it("sort an Array with a few uniques", () => {
    let array = [2, 3, 5, 7, 13, 11];
    sort(array);
    expect(array).toStrictEqual([2, 3, 5, 7, 11, 13]);
  });
  it("sort an reverse Array", () => {
    let array = [20, 18, 12, 8, 5, -2];
    sort(array);
    expect(array).toStrictEqual([-2, 5, 8, 12, 18, 20]);
  });
});
