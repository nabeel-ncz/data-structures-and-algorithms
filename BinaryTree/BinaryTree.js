class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            let queue = [this.root];
            while (queue.length > 0) {
                let curr = queue.shift();
                if (curr.left) {
                    queue.push(curr.left);
                } else {
                    curr.left = new TreeNode(value);
                    break;
                }
                if (curr.right) {
                    queue.push(curr.right);
                } else {
                    curr.right = new TreeNode(value);
                    break;
                }
            }
        }
    }
    removeHelper(root, value) {
        if (!root) {
            return null;
        }

        if (root.value === value) {
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            } else {
                let lastNode = this.findLastNode(root.right);
                root.value = lastNode.value;
                root.right = this.removeHelper(root.right, lastNode.value);
                
                return root;
            }
        }
        if (root.left) {
            root.left = this.removeHelper(root.left, value);
        }
        if (root.right) {
            root.right = this.removeHelper(root.right, value);
        }
        return root;
    }
    findLastNode(node) {
        while (node.right) {
            node = node.right;
        }
        return node;
    }
    remove(value) {
        this.root = this.removeHelper(this.root, value);
    }


    getTreeHeight(root = this.root) {
        if (!root) return -1;
        return 1 + this.getTreeHeight(root.left);
    }

    getNumberOfNodes(root = this.root) {
        if (!root) return 0;
        return 1 + this.getNumberOfNodes(root.left) + this.getNumberOfNodes(root.right);
    }

    isFullTree(root = this.root) {
        if (!root) {
            return true;
        }
        if (!root.left && root.right || !root.right && root.left) {
            return false;
        }
        return this.isFullTree(root.left) && this.isFullTree(root.right);
    }

    isCompleteTree() {
        let queue = [this.root];
        let isNon = false;
        while (queue.length > 0) {
            let curr = queue.shift();
            if (curr === null) {
                isNon = true;
            } else {
                if (isNon) {
                    return false;
                }
                queue.push(curr.left);
                queue.push(curr.right);
            }
        }
        return true;
    }

    isPerfectTree() {
        let totalNumberOfNodes = this.getNumberOfNodes(this.root);
        let treeHeight = this.getTreeHeight(this.root);

        let expectedNumberOfNodes = Math.pow(2, treeHeight + 1) - 1;
        return totalNumberOfNodes === expectedNumberOfNodes;
    }

    log() {
        console.log(JSON.stringify(this.root, null, 2));
    }

}

module.exports = { BinaryTree };

