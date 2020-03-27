
var HashTable = function() {
  this.limit = 8;
  this.hash = LimitedArray(this.limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  //check the bucket for a tuple that has that key
  var index = getIndexBelowMaxForKey(k, this.limit);
  //k = "Steven", this.limit = 8, returns 3

  var bucket = this.hash.storage[index];
  // whatever's at 3 right now, which is empty

  if ( bucket.length === 0 ) { //true
    this.count++; // count is 1
    if (this.checkCapacity() > .75) {
      this.limit *= 2;
      this.hash = this.increaseCapacity(this.limit);
    }
  }
  var reassign = false;

  for ( var i = 0; i < bucket.length; i ++ ) { //0
    if ( bucket[i][0] === k ) {
      bucket[i][1] = v;
      reassign = true;
    }
  }
  if ( !reassign ) {
    this.hash.storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  let bucket = this.hash.storage[index];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  let bucket = this.hash.storage[index];
  let bucketIdxToDelete = -1;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucketIdxToDelete = i;
    }
  }
  if (bucketIdxToDelete > -1) {
    bucket.splice(bucketIdxToDelete, 1);
  }
};

HashTable.prototype.checkCapacity = function() {
  return this.count / this.limit;
};
HashTable.prototype.increaseCapacity = function() {
  let doubleSizedHash = LimitedArray(this.limit);
  this.each( function(bucket) {
    for (let i = 0; i < bucket.length; i++) {
      doubleSizeHash.insert(bucket[i][0], bucket[i][1]);
    }
  });
  return doubleSizedHash;
};

HashTable.prototype.decreaseCapacity = function () {};


/*
 * Complexity: What is the time complexity of the above functions?
 */


