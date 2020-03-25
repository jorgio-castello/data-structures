var Queue = function() {
	storage = {}
	Object.assign( storage, queueMethods );
	return storage;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  'size': function(){},
  'enqueue': function(){},
  'dequeue': function(){}	
};


