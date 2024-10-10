import { testInsert, buildTree } from "./treeMethods.mjs";
import { delDuplicates, mergeSort } from "./arrayClean.mjs";
import { prettyPrint } from "./prettyPrint.mjs";

const pracArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const pracArray = [
//   1, 2, 5, 6, 7, 4, 23, 8, 234, 43, 234, 3422, 987, 2344, 9, 4, 3, 5, 7, 9, 67,
//   345, 3453, 223, 678, 4353, 657, 768768, 234, 34, 3456, 56, 56756, 23, 2,
//   3453535, 5464, 6345, 324,
// ];

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }
  insertMethod(value) {
    console.log("called from class");
    testInsert(value, this.root);
  }
}

function insert(value, tree) {
  console.log(tree);
  console.log(testTree.root);
  //that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not. If you need additional resources, check out these two articles on inserting and deleting, or this video on BST inserting/removing with several visual examples.
  console.log("insert function called");
  console.log("value: " + value + ", tree.data: " + tree.data);

  if (tree === null) {
    console.log("inserting new node");
    return new Node(value);
  } else {
    if (value < tree.data) {
      if (tree.left === null) {
        console.log("its null");
        tree.left = new Node(value);
      }
      console.log("new node lower");
      console.log(tree.left.data);

      return insert(value, tree.left);
    }

    if (value > tree.data) {
      if (tree.right === null) {
        console.log("its null");
        tree.right = new Node(value);
      }
      console.log("new node higher");
      console.log(tree.right.data);

      return insert(value, tree.right);
    }
    if (value === tree.data) {
      console.log("duplicate value. Cannot insert");
      return;
    }
  }
}

//******
function deleteItem(value) {
  //that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not. If you need additional resources, check out these two articles on inserting and deleting, or this video on BST inserting/removing with several visual examples.
}

function find(value) {
  // function that returns the node with the given value.
}

function levelOrder(callback) {
  // that accepts a callback function as its parameter. levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays. levelOrder may be implemented using either iteration or recursion (try implementing both!). If no callback function is provided, throw an Error reporting that a callback is required. Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (video on level order traversal).
}

function inOrder(callback) {
  //  that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
}
function preOrder(callback) {
  //   that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
}
function postOrder(callback) {
  //that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
}

function height(node) {
  //unction that returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.
}

function depth(node) {
  //function that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.
}

function isBalanced() {
  //function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
}

function rebalance() {
  // function that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
}

// get rid of duplicates
let unDupeArray = delDuplicates(pracArray);

// sort in consecutive order
let sortedArray = mergeSort(unDupeArray);

// create Tree
let testTree = new Tree(sortedArray);

// console.log(testTree);

// console.log("tree");

// console.log(tree);

// prettyPrint(testTree.root);

// insert(0, testTree.root);

// insert(9999, testTree.root);
// insert(324, testTree.root);

// prettyPrint(testTree.root);

// testInsert(669);

testTree.insertMethod(667);
testTree.insertMethod(666);
testTree.insertMethod(70);

prettyPrint(testTree.root);

// exports
export { Tree, testTree, Node };
