type Next = {
  next: Next | null;
  value: any;
};
interface LinkedList {
  head: { next: Next; value: any };
  tail: Next;
  length: number;
}
const reverse = (node: LinkedList) => {
  let prev = null;
  let current = node.head;
  let next = null;
  let head = node.head;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node.head = prev;
  node.tail = head;
  return node;
};
module.exports = reverse;
