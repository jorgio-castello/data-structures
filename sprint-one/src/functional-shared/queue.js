var Queue = function() {
	queue = {
		storage: {}
	}
	Object.assign( queue, queueMethods );
	return queue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  'size': function(){
  	return Object.keys(this.storage).length;
  },
  'enqueue': function( value ) {
  	var lastIndex = this.size() -1;
  	if( lastIndex > -1 ) {
  		for( var i = lastIndex; i >= 0; i-- ) {
          this.storage[i+1] = this.storage[i];
  		}
  	}
  	this.storage[0] = value;
  },
  'dequeue': function(){}	
};


