const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  constructor() {
      this.array = []
  }
  push(element) {
      this.array.push(element);
      return this
  }
  pop() {
      if(this.array.length){
          return this.array.pop();
      }
      else {
          return undefined
      }
  }
  peek() {
      if (this.array.length) {
          // or return this.array[this.array.length-1];
           return this.array.at(-1)
      }
      else {
          return undefined
      }
  }
}
module.exports = {
  Stack
};
