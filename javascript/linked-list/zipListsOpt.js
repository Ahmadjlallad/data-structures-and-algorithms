/**
 *
 * @param {LinkedList} list1
 * @param {LinkedList} list2
 * @returns LinkedList
 * @example
 *   head -> [1] -> [3] -> [2] -> X head -> [5] -> [9] -> [4] -> X head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X
 */
const zipListsOpt = (list1, list2) => {
  let current = list1.head;
  let current2 = list2.head;
  let prev = current2;
  current2 = current2.next;
  while (current2) {
    if (!current.next) {
      current.next = prev;
      list1.tail = list2.tail;
      return list1;
    }
    prev.next = null;
    prev.next = current.next;
    current.next = prev;
    prev = current2;
    current2 = current2.next;
    current = current.next.next;
  }
  prev.next = current.next;
  current.next = prev;
  if (list1.length === list2.length) list1.tail = current.next;
  return list1;
};
/**
 *
 * @param {LinkedList} list1
 * @param {LinkedList} list2
 * @returns LinkedList
 * @example
 *   head -> [1] -> [3] -> [2] -> X head -> [5] -> [9] -> [4] -> X head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X
 */
const zipLists = (list1, list2) => {
  let counter = list2.length > list1.length ? list2.length : list1.length;
  let current = list1.head;
  let current2 = list2.head;
  let newList = new LinkedList();

  while (counter >= 1) {
    if (current?.value) newList.appendNode(current.value);
    if (current2?.value) newList.appendNode(current2.value);
    current = current?.next;
    current2 = current2?.next;
    counter--;
  }
  return newList;
};
module.exports = {
  zipLists,
  zipListsOpt,
};
