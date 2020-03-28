
var HashTable = function( size ) {
  if ( size === undefined ) {
    size = 8;
  }
  this.limit = size;
  this.hash = LimitedArray(this.limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  //check the bucket for a tuple that has that key
  var index = getIndexBelowMaxForKey(k, this.limit);
  //k = "Steven", this.limit = 8, returns 3

  var bucket = this.hash.get(index);
  // whatever's at 3 right now, which is empty

  if ( bucket.length === 0 ) { //true
    this.count++; // count is 1
    if (this.checkCapacity() >= .75) {
      this.limit *= 2;
      index = getIndexBelowMaxForKey(k, this.limit);
      this.hash = this.increaseCapacity();
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
    // this.hash.storage[index].push([k, v]);
    bucket.push([k, v]);
    this.hash.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  let bucket = this.hash.get(index);
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  let bucket = this.hash.get(index);
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
  let doubleSizedHash = new HashTable(this.limit);
  this.hash.each( function(bucket) {
    for (let i = 0; i < bucket.length; i++) {
      doubleSizedHash.insert(bucket[i][0], bucket[i][1]);
    }
  });
  return doubleSizedHash.hash;
};

HashTable.prototype.decreaseCapacity = function () {};


/*
 * Complexity: What is the time complexity of the above functions?
 */


