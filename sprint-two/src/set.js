var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'function') {
    return 'Error: this set does not allow for functions';
  }
  let nextKey = JSON.stringify(item);
  if ( !this.storage[nextKey]) {
    this.storage[nextKey] = item;
  }
};

setPrototype.contains = function(item) {
  var key = JSON.stringify(item);
  return Boolean(this.storage[key]);
};

setPrototype.remove = function(item) {
  let key = JSON.stringify(item);
  delete this.storage[key];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
