var Stack = function() {
	var someInstance = {};
	someInstance.storage = {};
	_.extend( someInstance, stackMethods );
	return someInstance;
};

var stackMethods = {

	'push': function ( value ) {
		var nextKey = this.size();
		this.storage[nextKey] = value;
	},

	'pop': function () {
	  var indexToDelete = this.size() -1;
	  if ( indexToDelete > -1 ) {
	  	let poppedValue = this.storage[indexToDelete];
	  	delete this.storage[indexToDelete];
	  	return poppedValue;
	  }
	},

	'size': function () {
		return Object.keys(this.storage).length;
	}
};


