import { Tree, testTree, Node } from "./bst.mjs";

function buildTree(array) {
  // console.log("calling buildTree function");

  if (array.length === 0) {
    return null;
  } else {
    let mid = Math.floor((0 + array.length) / 2);

    console.log("mid of tree - value: " + array[mid]);

    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid + 1, array.length);

    let node = new Node(array[mid]);
    node.left = buildTree(leftArray);
    node.right = buildTree(rightArray);

    return node;
  }
}
function insert(value, tree) {
  // console.log(" ");
  // console.log("***test INsert called****");
  // console.log(tree);

  if (tree === null) {
    console.log("its null, and a node is created, base case");
    console.log(value, tree);
    return new Node(value);
  } else {
    if (value < tree.data) {
      console.log("new node lower");
      tree.left = insert(value, tree.left);
    }
    if (value > tree.data) {
      console.log("new node higher");
      tree.right = insert(value, tree.right);
    }
    return tree;
  }
}

function deleteItem(value, tree) {
  console.log("****calling delete item");
  console.log(value);

  if (tree.data === null) {
    console.log("found a match");
    console.log(value, tree);
    return tree;
  } else {
    if (value < tree.data) {
      console.log("new node lower");
      console.log(tree.data, value);
      tree.left = deleteItem(value, tree.left);

      console.log("recursive function output comes left.");
      console.log(tree);
    } else if (value > tree.data) {
      console.log("new node higher");
      console.log(tree.data, value);
      tree.right = deleteItem(value, tree.right);
    }
    // If root matches with key (as it is neither higher or lower)
    else {
      console.log(
        "recursive conditional now called, as root matches with value"
      );
      console.log(tree);

      // when root has 0 children, or only right child. 2 scenarios, left is null, and right.child is returned with it's content. Or left is null and right is also returned, which is also null.
      if (tree.left === null) {
        console.log("tree.left has no child only, or there are zero children");
        return tree.right;
      }
      // when root has only left child.
      if (tree.right === null) {
        console.log("tree.left has a child only, or there are no children");

        return tree.left;
      }

      // when both children are present

      console.log("both chillun are present!");

      // // PSUEDO CODE

      // get successor node.
      console.log(tree.data);
      let current = tree.right;
      while (current !== null && current.left !== null) {
        current = current.left;
      }
      console.log("successor is");
      console.log(current);
      // replace current value with successor (current) - makes a copy
      tree.data = current.data;
      console.log(tree.right);
      // delete original position of successor.
      deleteItem(current.data, tree.right);
    }
    return tree;
  }
}

function findValue(value, tree) {
  if (tree.data === value) {
    // console.log(tree);
    return tree;
  }
  if (value < tree.data) {
    // console.log("findValue - new node lower");
    tree = findValue(value, tree.left);
  } else if (value > tree.data) {
    // console.log("findValue - new node higher");
    tree = findValue(value, tree.right);
  }

  return tree;
}

function levelOrderMethod(callback, tree, levelOrderQueueArray) {
  console.log("****levelOrderMethod");
  console.log(levelOrderQueueArray);

  const callbackResultArray = [];
  let breadthCounter = 0;

  while (levelOrderQueueArray.length !== 0) {
    console.log("while loop triggered");

    // while (levelOrderQueueArray[0] !== null) {
    console.log("processing arrays");

    if (levelOrderQueueArray[0] === null) {
      console.log("****DIS THE LAST ERROR ONE");
      console.log(levelOrderQueueArray[0]);
      return;
    }
    if (levelOrderQueueArray[0].left) {
      console.log("left");

      levelOrderQueueArray.push(levelOrderQueueArray[0].left);
      p++;
    }
    if (levelOrderQueueArray[0].right) {
      console.log("right");

      levelOrderQueueArray.push(levelOrderQueueArray[0].right);
      p++;
    }

    levelOrderCallback(levelOrderQueueArray[0]);
    callbackResultArray.push(levelOrderQueueArray[0].data);
    console.log(callbackResultArray);

    levelOrderQueueArray.shift();

    if (levelOrderQueueArray[0] === null) {
      levelOrderQueueArray.shift();
      levelOrderQueueArray.push(null);
      breadthCounter++;
    }
    console.log(levelOrderQueueArray);

    console.log("breadthCounter " + breadthCounter);
  }
}
console.log("end processing loop");
// }
// }

// const queueArray = [];

// if (tree === null) {
//   console.log(tree);

//   return null;
// } else {
// while (levelOrderQueueArray[0] !== null) {

// console.log(levelOrderQueueArray);
//   console.log(levelOrderQueueArray);
//   n++;

//   console.log("n: " + n + " + p: " + p);
//   console.log(levelOrderQueueArray[n]);

//   console.log(levelOrderQueueArray);

//   console.log("callback Result Array");
//   console.log(callbackResultArray);
// } while (levelOrderQueueArray[1] !== null);

// // levelOrderQueueArray.push(null);

// console.log("the array has hit a null array[1]");

// console.log(levelOrderQueueArray);
// callback(levelOrderQueueArray[0]);
// levelOrderQueueArray.shift();

// levelOrderQueueArray.push(null); // end of level, so add null to queue
// console.log(levelOrderQueueArray);
// console.log("finished callback");

// console.log("array is empty");

// levelOrderQueueArray.shift();
// console.log(levelOrderQueueArray);

// breadthCounter++;

// }

// return tree;

//Write a levelOrder(callback) function that accepts a callback function as its parameter.
//levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses,
// passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays.
//levelOrder may be implemented using either iteration or recursion (try implementing both!).
//If no callback function is provided, throw an Error reporting that a callback is required.
//Tip: You will want to use an array acting as a queue to keep track of all the child nodes
//that you have yet to traverse and to add new ones to the list (video on level order traversal).

// console.log(tree.data);
// levelOrderQueueArray.push(tree.data);
// console.log(levelOrderQueueArray);
// if (tree.left) {
//   levelOrderQueueArray.push(tree.left.data);
// }
// if (tree.right) {
//   levelOrderQueueArray.push(tree.right.data);
// }
// callback(tree);
// console.log("150 -levelOrderQueueArray");
// console.log(levelOrderQueueArray);
// }

// tree.left = levelOrderMethod(callback, tree.left, levelOrderQueueArray);
// tree.right = levelOrderMethod(callback, tree.right, levelOrderQueueArray);

function levelOrderCallback(node) {
  console.log(
    "calling levelOrder callback. Callback is logging value: ",
    +node.data
  );
}

export {
  insert,
  deleteItem,
  buildTree,
  findValue,
  levelOrderMethod,
  levelOrderCallback,
};
