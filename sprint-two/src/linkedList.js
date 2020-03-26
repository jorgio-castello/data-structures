var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var nextNode = Node( value );
    if( list.head === null ) {
      list.head = nextNode;
      list.tail = nextNode;
    }
    else  {
      let addNode = function(parentNode, newNode) {
        if(parentNode.next === null ) {
          parentNode.next = newNode;
          list.tail = newNode;
        } else {
          addNode(parentNode.next, newNode);
        }
      }
      addNode(list.head, nextNode);
    }
  };

  list.removeHead = function() {
    let formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;
  };

  list.contains = function(target) {

    let searchNode = function(node) {
      if(node.value === target) {
        return true;
      } else if (node.next !== null) {
        return searchNode(node.next);
      } else {
        return false;
      }
    }
    return searchNode(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
