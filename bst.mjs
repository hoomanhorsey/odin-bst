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
} from "./treeMethods.mjs";
import { delDuplicates, mergeSort } from "./arrayClean.mjs";
import { prettyPrint } from "./prettyPrint.mjs";

// const pracArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// const pracArray = [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25];

const pracArray = [1, 2, 3, 4, 5, 6];
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
    if (!callback) {
      console.log(
        "Error with levelOrder. No callback function given as parameter."
      );
      return;
    } else {
      console.log("****LevelOrder method called from Class****");
      // Placing head node into array
      this.levelOrderQueueArray.push(this.root, null);
      levelOrderMethod(callback, this.levelOrderQueueArray);
    }

    // that accepts a callback function as its parameter. levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays. levelOrder may be implemented using either iteration or recursion (try implementing both!). If no callback function is provided, throw an Error reporting that a callback is required. Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (video on level order traversal).
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

      return preOrderMethod(callback, this.root);
    }
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

// testTree.insertMethod(667);
// testTree.insertMethod(666);
// testTree.insertMethod(6);
// prettyPrint(testTree.root);

// testTree.deleteItemMethod(67);
// prettyPrint(testTree.root);

// console.log(testTree.find(9));

testTree.levelOrder(levelOrderCallback);

// console.log(testTree.inOrder(inOrderCallback));
// console.log(testTree.preOrder(preOrderCallback));

console.log(testTree.postOrder(postOrderCallback));

// exports
export { Tree, testTree, Node };
