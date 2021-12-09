const HashTable = require("../hashTable");

test("Adding a key/value to your hashTable results in the value being in the data structure", () => {
  let ht = new HashTable();
  ht.add("key", "value");
  expect(ht.get("key")).toBe("value");
});

test("contains", () => {
  let ht = new HashTable();
  ht.add("key", "value");
  expect(ht.contains("key")).toBe(true);
});
test("Retrieving based on a key returns the value stored", () => {
  let ht = new HashTable();
  ht.add("key", "value");
  expect(ht.get("key")).toBe("value");
});
test("Successfully returns null for a key that does not exist in the hashtable", () => {
  let ht = new HashTable();
  expect(ht.get("key")).toBe(undefined);
});
test("Successfully handle a collision within the hashtable", () => {
  let ht = new HashTable();
  ht.add("key", "value");
  ht.add("key", "value2");
  expect(ht.get("key")).toStrictEqual([
    ["key", "value"],
    ["key", "value2"],
  ]);
});
test("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
  let ht = new HashTable();
  ht.add("key", "value");
  ht.add("key", "value2");
  expect(ht.get("key", "value2")).toStrictEqual("value2");
});
test("Successfully hash a key to an in-range value", () => {
  let ht = new HashTable();
  ht.add("key", "value");
  expect(ht.get("key")).toBe("value");
});
