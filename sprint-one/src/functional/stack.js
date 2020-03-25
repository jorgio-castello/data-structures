var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    console.log( "Push running!" );
    console.log( storage );
    let keyName = someInstance.size();
    storage[keyName] = value;
    console.log( "Push done!" );
    console.log( storage );
  };

  someInstance.pop = function() {
    console.log( "Pop initialized" );
    console.log( storage );
    let keyName = someInstance.size() -1;
    if( keyName < 0 ) {
      console.log( "nothing to pop!" );
      return;
    }
    console.log( "Pop running, we gotta delete " + keyName + " which holds " + storage[keyName]);
    delete storage[keyName];
    console.log( "Pop done~" );
    console.log( storage );
  };

  someInstance.size = function() {
    console.log( "size is running!" );
    return Object.keys(storage).length;
  };
  return someInstance;
};
