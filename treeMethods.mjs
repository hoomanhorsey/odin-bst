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

function levelOrderMethod(callback) {}

export { insert, deleteItem, buildTree, findValue, levelOrderMethod };
