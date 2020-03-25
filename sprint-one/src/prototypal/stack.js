var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(stackMethods);
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    let key = this.size();
    this.storage[key] = value;
  },
  pop: function() {
    let popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return popped;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


