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

function buildTree(array) {
  console.log("calling buildTree function");
  console.log(array);

  if (array.length === 0) {
    return null;
  } else {
    let mid = Math.floor((0 + array.length) / 2);
    console.log(array);
    console.log(array.length);

    console.log("mid of tree - value: " + array[mid]);

    let leftArray = array.slice(0, mid);
    console.log("leftArray");
    console.log(leftArray);

    let rightArray = array.slice(mid + 1, array.length);
    console.log("rightArray");
    console.log(rightArray);

    let node = new Node(array[mid]);
    node.left = buildTree(leftArray);
    node.right = buildTree(rightArray);

    console.log(node);
    console.log(" ");

    return node;
  }
}

class Tree {
  constructor(array) {
    this.root = buildTree(array);
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

      // if (tree === null) {
      //   console.log("inserting new node");
      //   return new Node(value);
      // } else {
      //   if (value < tree.data) {
      //     if (tree.left === null) {
      //       console.log("its null");
      //       tree.left = new Node(value);
      //     }
      //     console.log("new node lower");
      //     console.log(tree.left.data);

      //     return insert(value, tree.left);
      //   }

      //   if (value > tree.data) {
      //     if (tree.right === null) {
      //       console.log("its null");
      //       tree.right = new Node(value);
      //     }
      //     console.log("new node higher");
      //     console.log(tree.right.data);

      //     return insert(value, tree.right);
      //   }
      //   if (value === tree.data) {
      //     console.log("duplicate value. Cannot insert");
      //     return;
    }
  }
}
// console.log(testTree.root.data);

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

function delDuplicates(array) {
  const uniqueSet = new Set(array);
  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let mid = Math.floor(array.length / 2);

    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid, array.length);

    const first = mergeSort(leftArray);
    const second = mergeSort(rightArray);

    let i = 0,
      j = 0,
      k = 0;
    var tempArray = [];

    while (i < first.length || j < second.length) {
      if (first[i] === undefined) {
        tempArray[k++] = second[j++];
      } else if (second[j] === undefined) {
        tempArray[k++] = first[i++];
      } else if (first[i] < second[j]) {
        tempArray[k++] = first[i++];
      } else {
        tempArray[k++] = second[j++];
      }
    }
    return tempArray;
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  // console.log("inside prettyprint");

  // console.log(node);
  if (node === null) {
    return;
  }

  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// get rid of duplicates
let unDupeArray = delDuplicates(pracArray);

// sort in consecutive order
let sortedArray = mergeSort(unDupeArray);

// let tree = buildTree(sortedArray);

let testTree = new Tree(sortedArray);

// console.log(testTree);

// console.log("tree");

// console.log(tree);

prettyPrint(testTree.root);

insert(0, testTree.root);

insert(9999, testTree.root);
insert(324, testTree.root);

prettyPrint(testTree.root);
