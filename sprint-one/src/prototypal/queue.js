var Queue = function() {
	var queue = Object.create(queueMethods);
	queue.storage = {};
	return queue;
};

var queueMethods = {
	size(){
		return Object.keys(this.storage).length;
	},

	enqueue( value ){
		var lastIndex = this.size() - 1;
		if( lastIndex >= 0 ) {
			for( var i = lastIndex; i >= 0; i-- ) {
				this.storage[i+1] = this.storage[i];
			}
		}
		this.storage[0] = value;
	},
	dequeue( ){
		var lastIndex = this.size() -1;
		var dequeuedValue = this.storage[lastIndex];
		delete this.storage[lastIndex];
		return dequeuedValue;
	}
};


