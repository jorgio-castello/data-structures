class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    let keys = Object.keys(this.storage);
    for (let i = 0; i < keys.length; i++) {
      this.storage[i + 1] = this.storage[i];
    }
    this.storage[0] = value;
  }
  dequeue() {
    let popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return popped;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}
