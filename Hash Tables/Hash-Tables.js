class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        let address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);

        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }

    keys() {
        if (!this.data.length) {
            return undefined;
        }

        let keysArray = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length) {
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0]);
                    }
                } else {
                    keysArray.push(this.data[i][0]);
                }
            }
        }
        return keysArray;
    }

    values() {
        if (!this.data.length) {
            return undefined;
        }

        let valuesArray = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length) {
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        valuesArray.push(this.data[i][j][1]);
                    }
                } else {
                    valuesArray.push(this.data[i][0]);
                }
            }
        }
        return valuesArray;
    }

    has(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return true;
                }
            }
        }

        return false;
    }
}

const myHashTable = new HashTable(50);

myHashTable.set("Mangos", 100);
myHashTable.set("Apples", 54);
myHashTable.set("Bananas", 21);

console.log(myHashTable.data);

console.log(myHashTable.get("Mangos"));
console.log(myHashTable.get("Apples"));

console.log(myHashTable.keys());
console.log(myHashTable.values());

console.log(myHashTable.has("Mangos"));
