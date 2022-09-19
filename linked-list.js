/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  /* 1. if the list is empty, we add the value to the head and the tail, increment the length
  2. if list is not empty, then we take the current head and set that equal to the new node's next
  3. set head to that new node and increment the length
  */
  unshift(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    } else {
      let temp = this.head;
      this.head = new Node(val);
      this.head.next = temp;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */
  /* 1. walk to end of the list because we can't go backwards and get the penultimate node
  2. as we walk, check current.next.next === null, this. tail = current, this.tail.next = null

  5 -> 10 -> null
  5 -> null
  null

   */

  pop() {
    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length --;
      return current.val;
    } else if (current === null) {
      return undefined;
    }

    while (current.next !== null) {
      if (current.next.next === null) {
        let removed = this.tail.val;
        this.tail = current;
        this.tail.next = null;
        this.length--;
        return removed;
      }
      current = current.next;
    }

  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;

// let current = this.head;
// console.log('current', current);

// while (current !== null) {
//   console.log("entered loop", val, current);
//   if (current.next === null) {
//       current.next = new Node(val);
//       this.tail = current.next;
//       this.length++;
//       current = current.next;
//   }
// }

// if (this.length === 0) {
//     this.head = new Node(val);
//     this.tail = this.head;
//     this.length++;
//     current = this.tail;
//   }