var Stack = function () {
	var someInstance = Object.create(stackMethods); //This will allow it to use a prototypal chain 
	someInstance.storage = {}
	return someInstance;
};

var stackMethods = {
	'push': function( value ) {
		let nextKey = this.size();
		this.storage[nextKey] = value;
	//do things
	},
	'pop': function() {
	//do things
	},
	'size': function(){ 
		return Object.keys(this.storage).length;
	},
};


