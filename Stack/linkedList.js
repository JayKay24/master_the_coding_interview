import { LinkedList, Node } from "../LinkedLists";

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
    this.linkedList = new LinkedList();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  push(value){
    this.data.push(value);
  }
  pop(){
    this.data.pop();
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

const myStack = new Stack();




//Discord
//Udemy
//google
