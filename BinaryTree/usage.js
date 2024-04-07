const { BinaryTree } = require('./BinaryTree');
const { BinarySearchTree } = require('./BinarySearchTree');

const tree = new BinaryTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(14);
tree.insert(59);
tree.insert(17);
tree.insert(90);


const bsTree = new BinarySearchTree();

bsTree.add(10);
bsTree.add(20);
bsTree.add(30);
bsTree.add(40);
bsTree.add(35);
bsTree.add(25);
bsTree.add(15);

bsTree.preOrder();
bsTree.inOrder();
bsTree.postOrder();

bsTree.log()