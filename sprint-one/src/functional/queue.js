var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var storageSize = someInstance.size();
    if( storageSize > 0 ){ 
      for( var i = storageSize; i >= 0; i-- ) {
        storage[i] = storage[i -1]
      }
    }
    storage[0] = value;
    console.log( storage );
  };

  someInstance.dequeue = function() {
    var storageSize = someInstance.size();
    if( storageSize > 0 ) {
      let i = storageSize - 1;
      let dequeuedValue = storage[i];
      delete storage[i];
      return dequeuedValue;
    }
    return undefined;
  };

  someInstance.size = function() {
    return Object.keys( storage ).length;
  };

  return someInstance;
};
