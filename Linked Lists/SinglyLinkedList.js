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
        };

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
        };

        newNode.next = this.head;
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
        };

        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;
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

    reverse() {
        if (!this.head.next) {
            return this.head;
        }

        let first = this.head; // 10
        this.tail = this.head; // 10
        let second = first.next; // 7

        while (second) {
            let temp = second.next; // 21 // 73 // null
            second.next = first; // 10 // 7 // 21
            first = second; // 7 // 21 // 73
            second = temp; // 21 // 73 // null
        }

        this.head.next = null;
        this.head = first;

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
// myLinkedList.append(73);

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

// myLinkedList.reverse();

console.log(myLinkedList.printList());
