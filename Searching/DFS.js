// Depth First Search //

// O(n) - Depth First Search //

// PreOrder // -> [10, 6, 3, 8, 15, 20]

// InOrder // -> [3, 6, 8, 10, 15, 20]

// PostOrder // -> [3, 8, 6, 20, 15, 10]

class Node {
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

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) {
                return undefined;
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (!this.root) {
            return false;
        }

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        if (!found) {
            return undefined;
        }

        return current;
    }

    DFSPreOrder() {
        const list = [];
        let current = this.root;

        function traverse(node) {
            list.push(node.value);

            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(current);

        return list;
    }

    DFSInOrder() {
        const list = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }

            list.push(node.value);

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(current);

        return list;
    }

    DFSPostOrder() {
        const list = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }

            list.push(node.value);
        }

        traverse(current);

        return list;
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(11);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSPreOrder());
console.log(tree.DFSInOrder());
console.log(tree.DFSPostOrder());
