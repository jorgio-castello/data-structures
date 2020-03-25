var Stack = function() {
	var someInstance = {};
	var storage = {};

	someInstance.push = function ( value ) {
		var nextKey = someInstance.size();
		storage[nextKey] = value;
	}

	someInstance.pop = function () {
	  var indexToDelete = someInstance.size() -1;
	  if ( indexToDelete > -1 ) {
	  	let poppedValue = storage[indexToDelete];
	  	delete storage[indexToDelete];
	  	return poppedValue;
	  }
	} 

	someInstance.size = function () {
		return Object.keys(storage).length;
	}
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var stackMethods = {};


