class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            let newNode = new TreeNode(value);
            addHelper(this.root, newNode);
            function addHelper(root, newNode) {
                if (newNode.value <= root.value) {
                    if (!root.left) {
                        root.left = newNode;
                    } else {
                        addHelper(root.left, newNode);
                    }
                } else {
                    if (!root.right) {
                        root.right = newNode;
                    } else {
                        addHelper(root.right, newNode);
                    }
                }
            }
        }
    }

    log() {
        console.log(JSON.stringify(this.root, null, 2));
    }

    delete(value) {
        this.root = this.deleteHelper(this.root, value);
    }

    deleteHelper(root, value) {
        if (!root) {
            return null;
        }
        if (value < root.value) {
            root.left = this.deleteHelper(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteHelper(root.right, value);
        } else {
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            root.value = this.findRightMinimum(root.right);
            root.right = this.deleteHelper(root.right, root.value);
        }
        return root;
    }

    findRightMinimum(node) {
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }

    preOrder(){
        let str = '';
        function helper(root){
            if(!root) return '';

            str += root.value + ' ';
            helper(root.left);
            helper(root.right);
        }
        helper(this.root);
        console.log(str);
    }

    inOrder(){
        let str = '';
        function helper(root){
            if(!root) return '';

            helper(root.left);
            str += root.value + ' ';
            helper(root.right);
        }
        helper(this.root);
        console.log(str);
    }

    postOrder(){
        let str = '';
        function helper(root){
            if(!root) return '';

            helper(root.left);
            helper(root.right);
            str += root.value + ' ';
        }
        helper(this.root);
        console.log(str);
    }

}


module.exports = { BinarySearchTree }