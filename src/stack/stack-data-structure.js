class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
    
  }

  push(item) {
    if (canPush()) {
      return this.stackControl.push(item)
    } else {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {
    // ... your code goes here
  }

  display() {
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
