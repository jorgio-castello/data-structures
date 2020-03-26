
// Instantiate a new graph
var Graph = function() {
  //Default property / properties
  this.nodes = [];
  this.nextID = 0;
};

var graphNode = function(value, id) {
  this.id = id;
  this.value = value;
  this.pointsTo = [];
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  let newNode = new graphNode( node, this.nextID );
  this.nodes.push(newNode);
  this.nextID++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.findNode = function(node) {
  for ( let i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i].value === node ) {
      return this.nodes[i].id;
    }
  }
  return -1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // TODO: do we want to cascade through what points to this?
  var nodeId = this.findNode(node);
  for ( var i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i].id === nodeId ) {
      this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeId = this.findNode( fromNode );
  var toNodeId = this.findNode( toNode );

  for ( var i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i].id === fromNodeId ) {
      return this.nodes[i].pointsTo.includes( toNodeId );
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add the id of the "toNode" to the pointsTo key of the "fromNode"
  let fromNodeId = this.findNode(fromNode);
  let toNodeId = this.findNode(toNode);

  //Iterate over the nodes - when we find the node with fromNodeId
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].id === fromNodeId) {
      //push toNodeId into the found node's pointsTo array
      this.nodes[i].pointsTo.push(toNodeId);
    }
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


