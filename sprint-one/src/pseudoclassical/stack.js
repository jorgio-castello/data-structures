var Stack = function() {
	this.storage = {};
};

Stack.prototype = {
	'constructor': Stack,
	'push' : function( value ){
		let nextKey = this.size();
		this.storage[nextKey] = value;
	},
	'pop': function(){
		var keyToRemove = this.size() - 1;
		if( keyToRemove > -1 ) {
			let poppedValue = this.storage[keyToRemove];
			delete this.storage[keyToRemove];
			return poppedValue;
		}
	},
	'size': function(){
		return Object.keys( this.storage ).length;
	}
};