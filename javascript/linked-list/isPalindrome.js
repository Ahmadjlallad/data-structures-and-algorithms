const isPalindrome = (list) => {
  let current = list.head;
  let i = list.length;
  if (!(current.value === list.tail.value)) return false;
  while (i > Math.ceil(list.length / 2)) {
    current = list.head;
    current = current.next;
    list.head = current;
    while (current.next?.next) {
      current = current.next;
    }
    current.next = null;
    list.tail.value = current.value;
    if (!(list.head.value === list.tail.value)) return false;
    i--;
  }
  return true;
};
module.exports = isPalindrome;
