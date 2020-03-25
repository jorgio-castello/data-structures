var Queue = function() {
	var queue = {};
	queue.storage = {};
	Object.assign( queue, queueMethods );
	return queue;
 };

var queueMethods = {
  'size': function(){
  	return Object.keys(this.storage).length;
  },
  'getLastIndex' : function () {
  	return this.size() - 1;
  },
  'enqueue': function( value ) {
  	var lastIndex = this.getLastIndex();
  	if( lastIndex > -1 ) {
  		for( var i = lastIndex; i >= 0; i-- ) {
          this.storage[i+1] = this.storage[i];
  		}
  	}
  	this.storage[0] = value;
  },
  'dequeue': function(){
  	var lastIndex = this.getLastIndex();
  	var dequeuedValue = this.storage[lastIndex];
  	delete this.storage[lastIndex];
  	return dequeuedValue;
  }	
};


