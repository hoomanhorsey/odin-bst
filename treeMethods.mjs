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

export {
  insert,
  deleteItem,
  buildTree,
  findValue,
  levelOrderMethod,
  levelOrderCallback,
};
