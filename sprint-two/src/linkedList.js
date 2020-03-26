var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

// 1

  list.addToTail = function(value) {
    var nextNode = Node( value );  // { 'value': 1, 'next': null }

    if( list.head === null ) {
      list.head = nextNode;  // List: { 'head': { 'value': 1, 'next': null } , tail: null  }
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
    //Re-assign the previous node.next to nextNode

    //Re-assign the tail to nextNode - done
    //Add nextNode to list - done? Because it's list.tail

    //Empty list
    //Add a value
    //We update the head and tail
    //How we define the key of nextNode?

   //list[list.tail.next] = nextNode;
   //list.tail = nextNode;
   //debugger;
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
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
