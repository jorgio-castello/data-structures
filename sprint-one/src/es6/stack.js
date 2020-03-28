class Stack {
  constructor() {
    this.storage = {};
  }
  push(value) {
    let key = this.size();
    this.storage[key] = value;
  }
  pop() {
    let popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return popped;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}