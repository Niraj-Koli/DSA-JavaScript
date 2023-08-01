// Linked List //

// 2 --> 10 --> 7 --> 73 --> 47 --> 21 //

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 7,
//             next: {
//                 value: 21,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        };

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        if (value === undefined) {
            return;
        }

        const newNode = {
            value: value,
            next: null,
            prev: null,
        };

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value) {
        if (value === undefined) {
            return;
        }

        const newNode = {
            value: value,
            next: null,
            prev: null,
        };

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;

        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = {
            value: value,
            next: null,
            prev: null,
        };

        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;

        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;

        return this;
    }

    remove(index) {
        if (index >= this.length) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.length--;

            return this;
        }

        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;

        leader.next = unwantedNode.next;
        this.length--;

        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(7);
myLinkedList.append(21);

console.log(myLinkedList.printList());

myLinkedList.prepend(2);

console.log(myLinkedList.printList());

myLinkedList.insert(3, 73);

console.log(myLinkedList.printList());

myLinkedList.insert(4, 47);

console.log(myLinkedList.printList());

myLinkedList.remove(0);

console.log(myLinkedList.printList());

myLinkedList.remove(3);

console.log(myLinkedList.printList());
