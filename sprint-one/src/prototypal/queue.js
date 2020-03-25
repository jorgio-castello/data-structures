var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(queueMethods);
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    let keys = Object.keys(this.storage);
    for (let i = keys.length - 1; i >= 0; i--) {
      this.storage[i + 1] = this.storage[i];
    }
    this.storage[0] = value;
  },
  dequeue: function() {
    let popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return popped;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


