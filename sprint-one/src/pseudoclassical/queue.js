var Queue = function() {
  this.storage = {};
};

Queue.prototype = {
	'constructor': Queue,
	'enqueue': function( value ) {
		let iMax = this.size() -1;
		if ( iMax !== -1 ) {
			for( var i = iMax; i >= 0; i-- ) {
				this.storage[i+1] = this.storage[i];
			}
		}
		this.storage[0] = value;
	},
	'dequeue': function() {
		let i = this.size() -1;
		let dequeuedValue = this.storage[i];
		delete this.storage[i];
		return dequeuedValue;
	},
	'size': function(){
		return Object.keys(this.storage).length;
	}
}

