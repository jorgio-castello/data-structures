var Queue = function() {
  this.storage = {};
};

Queue.prototype = {
	'constructor': Queue,
	'enqueue': function( value ) {},
	'dequeue': function() {},
	'size': function(){
		return Object.keys(this.storage).length;
	}
}

