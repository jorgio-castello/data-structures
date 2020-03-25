class Stack {
  constructor() {
  	this.storage = {}
  }

  push( value ) {
  	var nextKey = this.size();
  	this.storage[nextKey] = value;
  }

  pop( value ) {
  	var keyToPop = this.size() - 1;
  	if( keyToPop > -1 ) {
  		let poppedValue = this.storage[keyToPop];
  		delete this.storage[keyToPop];
  		return poppedValue;
  	}
  }

  size() {
  	return Object.keys(this.storage).length;
  }
}