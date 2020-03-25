var Stack = function() {
	this.storage = {};
};

Stack.prototype = {
	'push' : function(){},
	'pop': function(){},
	'size': function(){
		return Object.keys( this.storage ).length;
	}
};

var myStack = new Stack;