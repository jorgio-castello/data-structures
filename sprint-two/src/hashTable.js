
var HashTable = function() {
  this.limit = 8;
  this.hash = LimitedArray(this.limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  this.hash.storage[index] = [k, v];
   debugger;
  // we need to check if we are at 25% or 75% capacity after adding something
  // reHashTable() is in helper funcs but not defined
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    // we need to check if we are at 25% or 75% capacity after adding something
    // reHashTable() is in helper funcs but not defined
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


