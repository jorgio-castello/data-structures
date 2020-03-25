var Stack = function() {
  var someInstance = {};
  var storage = {};
 
  someInstance.push = function(value) {
    let keyName = someInstance.size();
    storage[keyName] = value;
  };

  someInstance.pop = function() {
    let keyToPop = someInstance.size() - 1;
    if( keyToPop >= 0 ){
      var poppedValue = storage[keyToPop];
      delete storage[keyToPop];
      return poppedValue;
    }
    return;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  return someInstance;
};
