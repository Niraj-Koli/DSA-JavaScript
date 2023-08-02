// Breadth First Search //

// O(n) - Breadth First Search //

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
            return false;
        }

        return current;
    }

    BFSIterative() {
        let node = this.root;
        const queue = [];
        const data = [];

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return data;
    }

    BFSRecursive(queue, data) {
        if (!queue.length) {
            return data;
        }

        const node = queue.shift();
        data.push(node.value);

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }

        return this.BFSRecursive(queue, data);
    }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);

console.log(tree.find(47));
console.log(tree.find(73));

console.log(tree.BFSIterative());

console.log(tree.BFSRecursive([tree.root], []));
