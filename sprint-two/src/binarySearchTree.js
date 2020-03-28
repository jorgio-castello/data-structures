var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {

  //Define a function that checks root to compare whether it is greater or less than the parameter value
  //If greater, check to see if root has something to the right, if so - invoke this inner function on root.right; if not, store value at root.right
  //If less, check to see if root has something to the left, if so - invoke this inner function on root.left: if not, store value at root.left

  let findInsertionPoint = function( treeNode ) {
    if ( treeNode.value >= value ) {
      if ( Boolean( treeNode.left ) ) {
        return findInsertionPoint( treeNode.left );
      } else {
        treeNode.left = new BinarySearchTree( value );
        return treeNode.left;
      }
    } else {
      if ( Boolean( treeNode.right ) ) {
        return findInsertionPoint( treeNode.right );
      } else {
        treeNode.right = new BinarySearchTree( value );
        return treeNode.right;
      }
    }
  };

  return findInsertionPoint(this);
};

BinarySearchTree.prototype.contains = function(value) {

  let findNode = function(treeNode) {
    if ( treeNode.value === value ) {
      return true;
    }
    if ( treeNode.value > value ) {
      if ( Boolean( treeNode.left ) ) {
        return findNode( treeNode.left );
      }
      return false;
    } else { /* treeNode.value is less than value */
      if ( Boolean( treeNode.right ) ) {
        return findNode( treeNode.right );
      }
      return false;
    }
  };
  return findNode(this);
};
BinarySearchTree.prototype.depthFirstLog = function (func) {

  let findNode = function(treeNode) {
    func(treeNode.value);
    if ( Boolean( treeNode.left ) ) {
      findNode( treeNode.left );
    }
    if ( Boolean( treeNode.right ) ) {
      findNode( treeNode.right );
    }
  };
  findNode(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
