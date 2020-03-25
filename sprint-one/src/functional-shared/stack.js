var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {
    storage: {},
  };
  extend(instance, stackMethods);

  return instance;
};

let stackMethods = {
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

let extend = (obj, methods) => {
  for (let method in methods) {
    obj[method] = methods[method];
  }
  return obj;
};

