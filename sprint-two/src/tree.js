var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.root;
  _.extend( newTree, treeMethods );
  // your code here
  newTree.children = [];
  return newTree;
};

/*
var Node = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.children = [];
  return newNode;
}
*/

// We are creating an object with a children array:
// That children array stores new invocatins of an additional Tree object
// Every node can have a value but also children.
// So we don't have to define a root, because there's only one Tree object
// Any invocations of a new Tree is stored within the children key of the original Tree at some nested point

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var traverseTree = function( node ) {
    if ( node.value === target ) {
      return true;
    } else {
      if ( node.children ) {
        for (let i = 0; i < node.children.length; i++) {
          if (traverseTree( node.children[i] )) {
            return true;
          }
        }
      }
    }
    return false;
  };
  return traverseTree( this );
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
