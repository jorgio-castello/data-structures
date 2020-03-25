var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    let keyName = someInstance.size();
    console.log( "Key:" + keyName );
    storage[keyName] = value;
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    console.log( "size is running" );
    return Object.keys(storage).length;
  };
  return someInstance;
};
