export class Node {
  constructor(item) {
    this.value = item;
    this.next = null;
  }
}

export class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let node = new Node(value);
    
    if (this.head.next === null) {
      this.head.next = node;
      this.tail = this.head.next;
      this.length++;
    } else {
      let currentNode;
      currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.length++;
      this.tail = currentNode.next;
    }
  }
  prepend(value) {
    const currentHead = this.head;
    const newNode = new Node(value);
    newNode.next = currentHead;
    this.head = newNode;
    this.length++;
  }
  insert(passedIndex, value) {
    if (passedIndex < 0 || passedIndex >= this.length) {
      this.append(value);
    } else {
      let previousNode;
      let currentNode;
      currentNode = this.head;
      for (let i = 0; i < passedIndex; i++) {
        if (passedIndex - i === 1) {
          previousNode = currentNode;
        }
        currentNode = currentNode.next;
      }
      const restOfList = previousNode.next;
      const newNode = new Node(value);
      newNode.next = restOfList;
      previousNode.next = newNode;
      this.length++;
    }
  }
  remove(passedIndex) {
    if (passedIndex < 0 || passedIndex >= this.length) {
      return;
    }
    let leaderNode;
    let currentNode;
    currentNode = this.head;
    for (let i = 0; i < passedIndex; i++) {
      if (passedIndex - 1 === 1) {
        leaderNode = currentNode;
      }
      currentNode = currentNode.next;
    }
    const restOfList = currentNode.next;
    leaderNode.next = restOfList;
    this.length--;
  }
  reverse() {
    let currentNode;
    let newNode;
    currentNode = this.head;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      newNode = currentNode.next;

    }
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(40);
myLinkedList.insert(3, 90);
myLinkedList.remove(2);
console.log(myLinkedList);
