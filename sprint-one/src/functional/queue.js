var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var initialSize = someInstance.size();
    if( initialSize > 0 ){ 
      for( var i = someInstance.size(); i >= 0; i-- ) {
        storage[i] = storage[i -1]
      }
    }
    storage[0] = value;
    console.log( storage );
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return Object.keys( storage ).length;
  };

  return someInstance;
};
