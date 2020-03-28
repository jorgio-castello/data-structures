var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let key = someInstance.size();
    someInstance.storage[key] = value;
  };

  someInstance.pop = function() {
    let popped = someInstance.storage[someInstance.size() - 1];
    delete someInstance.storage[someInstance.size() - 1];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };
  return someInstance;
};
