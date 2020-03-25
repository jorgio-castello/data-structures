var Stack = function () {
	var someInstance = Object.create(stackMethods); //This will allow it to use a prototypal chain 
	someInstance.storage = {}
	return someInstance;
};

var stackMethods = {
	'push': function( value ) {
		let nextKey = this.size();
		this.storage[nextKey] = value;
	},
	'pop': function() {
		let lastKey = this.size() -1;
		if ( lastKey > -1 ) {
			let poppedValue = this.storage[lastKey];
			delete this.storage[lastKey];
			return poppedValue;
		}
	},
	'size': function(){ 
		return Object.keys(this.storage).length;
	},
};


