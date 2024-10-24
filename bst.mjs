import {
  insert,
  deleteItem,
  buildTree,
  findValue,
  levelOrderMethod,
  levelOrderCallback,
  inOrderMethod,
  inOrderCallback,
  preOrderMethod,
  preOrderCallback,
  postOrderMethod,
  postOrderCallback,
  heightMethod,
  depthMethod,
  isBalancedMethod,
} from "./treeMethods.mjs";
import { delDuplicates, mergeSort } from "./arrayClean.mjs";
import { prettyPrint } from "./prettyPrint.mjs";

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
    console.log(
      "****Insert Method function called from class. Insering value of: " +
        value
    );
    insert(value, this.root);
  }

  deleteItemMethod(value) {
    //that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not. If you need additional resources, check out these two articles on inserting and deleting, or this video on BST inserting/removing with several visual examples.
    if (!value) {
      console.log("Error with deleteItemMethod: No value given");
      return;
    } else {
      console.log(
        "****Delete Method function called from class. Deleting value of: " +
          value
      );
      deleteItem(value, this.root);
    }
  }

  find(value) {
    // function that returns the node with the given value.
    console.log(
      "****Find Method function called from class. Finding value of: " + value
    );
    return findValue(value, this.root);
  }

  levelOrder(callback) {
    // that accepts a callback function as its parameter.
    //levelOrder should traverse the tree in breadth-first level order and
    //call the callback on each node as it traverses, passing the whole node
    //as an argument, similarly to how Array.prototype.forEach might work for
    //arrays. levelOrder may be implemented using either iteration or recursion
    //(try implementing both!). If no callback function is provided,
    //throw an Error reporting that a callback is required.
    // Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (video on level order traversal).
    if (!callback) {
      console.log(
        "Error with levelOrder. No callback function given as parameter."
      );
      return;
    } else {
      console.log("****LevelOrder method called from Class****");
      // Placing head node into array
      console.log("Level Order");
      this.levelOrderQueueArray.push(this.root, null);
      return levelOrderMethod(callback, this.levelOrderQueueArray);
    }
  }

  inOrder(callback) {
    if (!callback) {
      console.log(
        "Error with inOrder. No callback function given as parameter."
      );
      return;
      //  that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
    } else {
      console.log("****inOrder method called from Class****");
      console.log("inOrder");

      return inOrderMethod(callback, this.root);
    }
  }
  preOrder(callback) {
    //   that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
    if (!callback) {
      console.log(
        "Error with preOrder. No callback function given as parameter."
      );
      return;
      //  that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
    } else {
      console.log("****preOrder method called from Class****");
      console.log("preOrder");
      return preOrderMethod(callback, this.root);
    }
  }
  postOrder(callback) {
    //that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
    //   that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
    if (!callback) {
      console.log(
        "Error with postOrder. No callback function given as parameter."
      );
      return;
      //  that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.
    } else {
      console.log("****postOrder method called from Class****");
      console.log("postOrder");
      return postOrderMethod(callback, this.root);
    }
  }

  height(value) {
    console.log("****height method called from Class****");

    let node = this.find(value);
    return heightMethod(node);
    //function that returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.
  }

  depth(node) {
    console.log("****depth method called from Class****");

    return depthMethod(node, this.root);
    //function that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.
  }

  isBalanced() {
    //function that checks if the tree is balanced.
    //A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.

    console.log("****isBalanced Method function called from class. ");

    if (!isBalancedMethod(this.root)) {
      return "The tree is unbalanced";
    } else {
      return "The tree is balanced";
    }
  }

  rebalance() {
    console.log("****rebalance method called from Class****");

    let rebuiltArray = testTree.inOrder(inOrderCallback);
    const newerTree = new Tree(rebuiltArray);
    return newerTree;

    // function that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
  }
}

// Driver Script

// **** ARRAY PREPARATION*****
//Declare random array
const testArray = [];
for (let i = 0; i < 200; i++) {
  testArray.push(Math.floor(Math.random() * 100));
}
// get rid of duplicates
let unDupeArray = delDuplicates(testArray);
// sort in consecutive order
let sortedArray = mergeSort(unDupeArray);
// log to console to check
console.log("Length of Array: " + sortedArray.length);
console.log("Sorted Array");
console.log(sortedArray);

// declare new tree + pretty print
const testTree = new Tree(sortedArray);
prettyPrint(testTree.root);
// check balance
console.log(testTree.isBalanced());

// printing out elements in order:
// Level Order
console.log(testTree.levelOrder(levelOrderCallback));

// Preoder
console.log(testTree.preOrder(preOrderCallback));

// Postorder
console.log(testTree.postOrder(postOrderCallback));

// Inorder
console.log(testTree.inOrder(postOrderCallback));

//insert new items to unbalance tree, print tree, test for balance
testTree.insertMethod(667);
testTree.insertMethod(666);
testTree.insertMethod(665);
testTree.insertMethod(669);
testTree.insertMethod(663);
prettyPrint(testTree.root);
console.log("isBalanced() called on testTree");

console.log(testTree.isBalanced());

// rebalance tree

const newerTree = testTree.rebalance();
prettyPrint(newerTree.root);

console.log(newerTree.isBalanced());

// printing out elements in order:
// Level Order
console.log(newerTree.levelOrder(levelOrderCallback));

// Preoder
console.log(newerTree.preOrder(preOrderCallback));

// Postorder
console.log(newerTree.postOrder(postOrderCallback));

// Inorder
console.log(newerTree.inOrder(postOrderCallback));

// exports
export { Tree, testTree, Node };
