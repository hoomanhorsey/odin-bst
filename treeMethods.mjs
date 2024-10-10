import { Tree, testTree, Node } from "./bst.mjs";

function buildTree(array) {
  console.log("calling buildTree function");

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
function testInsert(value, tree) {
  console.log("***test INsert called****");
  console.log(tree);

  //   // console.log(tree);
  //   console.log(testTree.root);
  //   let tree = testTree.root;
  //   console.log(tree);

  console.log("insert function called");
  console.log("value: " + value + ", testTree.root.data: " + tree.data);

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

      return testInsert(value, tree.left);
    }

    if (value > tree.data) {
      if (tree.right === null) {
        console.log("its null");
        tree.right = new Node(value);
      }
      console.log("new node higher");
      console.log(tree.right.data);

      return testInsert(value, tree.right);
    }
    if (value === tree.data) {
      console.log("duplicate value. Cannot insert");
      return;
    }
  }
}

export { testInsert, buildTree };
