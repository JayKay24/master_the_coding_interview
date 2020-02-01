class DoublyNode {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyNode(value);
    this.tail = this.head ;
    this.length = 1;
  }
  append(value) {
    let node = new DoublyNode(value);
    
    if (this.head.next === null) {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.length++;
    } else {
      let currentNode;
      currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      node.previous = currentNode;
      currentNode.next = node;
      this.length++;
      this.tail = currentNode.next;
    }
  }
  prepend(value) {
    const currentHead = this.head;
    const newNode = new DoublyNode(value);
    newNode.next = currentHead;
    currentHead.previous = newNode;
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
      const newNode = new DoublyNode(value);
      newNode.next = restOfList;
      previousNode.next = newNode;
      newNode.previous = previousNode;
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
    restOfList.previous = leaderNode;
    this.length--;
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(40);
myLinkedList.insert(3, 90);
myLinkedList.remove(2);
console.log(myLinkedList);