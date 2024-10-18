import { Tree, testTree, Node } from "./bst.mjs";

function buildTree(array) {
  if (array.length === 0) {
    return null;
  } else {
    let mid = Math.floor((0 + array.length) / 2);

    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid + 1, array.length);

    let node = new Node(array[mid]);
    node.left = buildTree(leftArray);
    node.right = buildTree(rightArray);

    return node;
  }
}
function insert(value, tree) {
  if (tree === null) {
    return new Node(value);
  } else {
    if (value < tree.data) {
      tree.left = insert(value, tree.left);
    }
    if (value > tree.data) {
      tree.right = insert(value, tree.right);
    }
    return tree;
  }
}

function deleteItem(value, tree) {
  if (tree.data === null) {
    return tree;
  } else {
    if (value < tree.data) {
      tree.left = deleteItem(value, tree.left);
    } else if (value > tree.data) {
      tree.right = deleteItem(value, tree.right);
    } else {
      // when root has 0 children, or only right child. 2 scenarios, left is null, and right.child is returned with it's content. Or left is null and right is also returned, which is also null.
      if (tree.left === null) {
        return tree.right;
      }
      // when root has only left child.
      if (tree.right === null) {
        return tree.left;
      }

      // when both children are present
      // get successor node.
      let current = tree.right;
      while (current !== null && current.left !== null) {
        current = current.left;
      }
      // replace current value with successor (current) - makes a copy
      tree.data = current.data;
      // delete original position of successor.
      deleteItem(current.data, tree.right);
    }
    return tree;
  }
}

function findValue(value, tree) {
  if (tree.data === value) {
    return tree;
  }
  if (value < tree.data) {
    tree = findValue(value, tree.left);
  } else if (value > tree.data) {
    tree = findValue(value, tree.right);
  }
  return tree;
}

function levelOrderMethod(callback, levelOrderQueueArray) {
  const callbackResultArray = [];
  let breadthCounter = 0;

  while (levelOrderQueueArray.length !== 0) {
    if (levelOrderQueueArray[0] === null) {
      console.log("****DIS THE LAST ERROR ONE");
      console.log(levelOrderQueueArray[0]);

      console.log(callbackResultArray);
      console.log("breadthCounter " + breadthCounter);
      return;
    }
    if (levelOrderQueueArray[0].left) {
      levelOrderQueueArray.push(levelOrderQueueArray[0].left);
    }
    if (levelOrderQueueArray[0].right) {
      levelOrderQueueArray.push(levelOrderQueueArray[0].right);
    }

    callback(levelOrderQueueArray[0]);
    callbackResultArray.push(levelOrderQueueArray[0].data);

    levelOrderQueueArray.shift();

    if (levelOrderQueueArray[0] === null) {
      levelOrderQueueArray.shift();
      levelOrderQueueArray.push(null);
      breadthCounter++;
    }
  }
}

function levelOrderCallback(node) {
  console.log(
    "calling levelOrder callback. Callback is logging value: ",
    +node.data
  );
}

function inOrderMethod(callback, tree, inOrderArray) {
  console.log("!!!Starting inorder Method call again!!!");

  if (!inOrderArray) {
    inOrderArray = [];
  }
  //  that also accept a callback as a parameter.
  //Each of these functions should traverse the tree in their respective depth-first order and
  //pass each node to the provided callback. The functions should throw an Error if no callback
  //is given as an argument, like with levelOrder.

  if (tree === null) {
    console.log("tree be null");
    return;
  }

  if (tree.left) {
    console.log("tree.left exists");
    // inOrderCallback(tree.left, inOrderArray);
    inOrderMethod(inOrderCallback, tree.left, inOrderArray);
  }

  console.log("calling inorderCallback on head/mid node");
  callback(tree, inOrderArray);

  if (tree.right) {
    console.log("tree.right exists");

    // inOrderCallback(tree.right, inOrderArray);
    inOrderMethod(inOrderCallback, tree.right, inOrderArray);
  }

  return inOrderArray;
}

function inOrderCallback(tree, inOrderArray) {
  console.log(
    "This is the inorder callback and the value of the node is: " + tree.data
  );
  inOrderArray.push(tree.data);
}

function preOrderMethod(callback, tree, preOrderArray) {
  console.log("!!!Starting preorder Method call again!!!");

  if (!preOrderArray) {
    preOrderArray = [];
  }

  console.log("calling preOrderCallback on head/mid node");
  callback(tree, preOrderArray);

  if (tree.left) {
    console.log("tree.left exists");
    preOrderMethod(preOrderCallback, tree.left, preOrderArray);
  }

  if (tree.right) {
    console.log("tree.right exists");

    preOrderMethod(preOrderCallback, tree.right, preOrderArray);
  }

  return preOrderArray;
}

function preOrderCallback(tree, preOrderArray) {
  console.log(
    "This is the preOrder callback and the value of the node is: " + tree.data
  );
  preOrderArray.push(tree.data);
}

function postOrderMethod(callback, tree, postOrderArray) {
  console.log("!!!Starting preorder Method call again!!!");

  if (!postOrderArray) {
    postOrderArray = [];
  }

  if (tree.left) {
    console.log("tree.left exists");
    postOrderMethod(postOrderCallback, tree.left, postOrderArray);
  }
  if (tree.right) {
    console.log("tree.right exists");

    postOrderMethod(postOrderCallback, tree.right, postOrderArray);
  }
  console.log("calling postOrderCallback on head/mid node");
  callback(tree, postOrderArray);

  return postOrderArray;
}

function postOrderCallback(tree, postOrderArray) {
  console.log(
    "This is the preOrder callback and the value of the node is: " + tree.data
  );
  postOrderArray.push(tree.data);
}

export {
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
};
