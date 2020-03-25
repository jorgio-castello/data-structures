class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }

  enqueue( value ){
  	var iMax = this.size() -1;
  	if( iMax !== -1 ) {
  		for ( var i = iMax; i >= 0; i-- ){
  			this.storage[i+1] = this.storage[i];
  		}
  	}
  	this.storage[0] = value;
  }

  dequeue( ){ }

  size(){
  	return Object.keys( this.storage ).length;
  }

}
