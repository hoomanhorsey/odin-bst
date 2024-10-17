import {
  insert,
  deleteItem,
  buildTree,
  findValue,
  levelOrderMethod,
  levelOrderCallback,
} from "./treeMethods.mjs";
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
    this.levelOrderQueueArray = [];
  }
  insertMethod(value) {
    console.log("called from class");
    insert(value, this.root);
  }

  deleteItemMethod(value) {
    //that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not. If you need additional resources, check out these two articles on inserting and deleting, or this video on BST inserting/removing with several visual examples.
    if (!value) {
      console.log("Error with deleteItemMethod: No value given");
      return;
    } else {
      deleteItem(value, this.root);
    }
  }

  find(value) {
    // function that returns the node with the given value.
    console.log("Result of find()");
    return findValue(value, this.root);
  }

  levelOrder(callback) {
    if (!callback) {
      console.log(
        "Error with levelOrder. No callback function given as parameter."
      );
      return;
    } else {
      console.log("*****<<<CALLING LEVELORDER METHOD FIRST TIME>>>>>******");

      this.levelOrderQueueArray.push(this.root, null);

      levelOrderMethod(callback, this.root, this.levelOrderQueueArray);
    }

    // that accepts a callback function as its parameter. levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays. levelOrder may be implemented using either iteration or recursion (try implementing both!). If no callback function is provided, throw an Error reporting that a callback is required. Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (video on level order traversal).
  }

  inOrder(callback) {
    //  that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
  }
  preOrder(callback) {
    //   that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
  }
  postOrder(callback) {
    //that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
  }

  height(node) {
    //unction that returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.
  }

  depth(node) {
    //function that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.
  }

  isBalanced() {
    //function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
  }

  rebalance() {
    // function that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
  }
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

// insert(324, testTree.root);

// prettyPrint(testTree.root);

// testInsert(669);

console.log("****calling insertMethod*****");
testTree.insertMethod(667);
console.log("****calling insertMethod*****");
testTree.insertMethod(666);
// testTree.insertMethod(70);
testTree.insertMethod(6);

// testTree.deleteItemMethod(1);
prettyPrint(testTree.root);

testTree.deleteItemMethod(67);

prettyPrint(testTree.root);

console.log(testTree.find(9));

testTree.levelOrder(levelOrderCallback);

function callback(node) {
  console.log(node.data);
}

// exports
export { Tree, testTree, Node };
