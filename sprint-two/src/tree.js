var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.root;
  _.extend( newTree, treeMethods );
  // your code here
  newTree.children = [];
  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value) {

  // if newTree == {}
  //then add a key called root,
  if(this.value === undefined) {
    this.root = this.children;
  }
  /*
  {
    'root': {
      value: 1234,
      children: []
    }
  }

  */

  let newChild = Tree(value);
  this.children.push(newChild);
};

//let newTree = Tree();
//newTree.addChild
//

// var Node = function(value) {
//   var node = {};
//   node.value = value;
//   node.children = [];
//   return node;
// };


treeMethods.contains = function(target) {
  let foundTarget;
  var traverseTree = function( node ) {
    if( node.value === target ) {
      return true;
    } else {
      if ( node.children ) {
        for(let i = 0; i < node.children.length; i++) {
          return traverseTree( node.children[i] )
        }
      }
    }
    return false;
  }
  return traverseTree( this );
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
