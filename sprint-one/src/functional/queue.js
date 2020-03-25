var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let keys = Object.keys(someInstance.storage);
    for (let i = keys.length - 1; i >= 0; i--) {
      someInstance.storage[i + 1] = someInstance.storage[i];
    }
    someInstance.storage[0] = value;
  };

  someInstance.dequeue = function() {
    let popped = someInstance.storage[someInstance.size() - 1];
    delete someInstance.storage[someInstance.size() - 1];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};
