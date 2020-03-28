describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should sum all of the values in the tree', function() {
    let func = (a, b) => a + b;
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    let result = binarySearchTree.reduce(func);
    expect(result).to.equal(17);
  });
  it('should return a boolean indicating whether a value exists', function() {
    let target = 3;
    let func = function (wasFound, value) {
      if ( wasFound ) {
        return true;
      }
      return value === target;
    };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    let result = binarySearchTree.reduce(func, false);
    expect(result).to.equal(true);
  });

  it('should determine that every value is odd (returning true)', function() {
    let isOdd = function( noEvenNumbers, num ) {
      if ( noEvenNumbers ) {
        return num % 2 === 1;
      }
      return false;
    };
    binarySearchTree.insert(3);
    binarySearchTree.insert(5);
    binarySearchTree.insert(7);
    binarySearchTree.insert(33);
    let result = binarySearchTree.reduce(isOdd, true);
    expect(result).to.equal(true);
  });
  it('should determine that not every value is odd (returning false)', function() {
    let isOdd = function( noEvenNumbers, num ) {
      if ( noEvenNumbers ) {
        return num % 2 === 1;
      }
      return false;
    };
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    let result = binarySearchTree.reduce(isOdd, true );
    expect(result).to.equal(false);
  });
});
