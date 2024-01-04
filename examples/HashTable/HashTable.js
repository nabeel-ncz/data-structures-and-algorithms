class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(capacity) {
        this.table = new Array(capacity);
        this.capacity = capacity;
        this.size = 0;
    }

    computeHash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.capacity;
    }

    put(key, value) {
        let index = this.computeHash(key);
        if (!this.table[index]) {
            this.table[index] = new Node(key, value);
        } else {
            let curr = this.table[index];
            while (curr) {
                if (curr.key === key) {
                    curr.value = value;
                    return;
                }
                curr = curr.next;
            }
            const newNode = new Node(key, value);
            newNode.next = this.table[index];
            this.table[index] = newNode;
        }
        this.size++;
    }

    get(key) {
        let index = this.computeHash(key);
        if (!this.table[index]) {
            return undefined;
        } else {
            let curr = this.table[index];
            while (curr) {
                if (curr.key === key) {
                    return curr.value;
                }
                curr = curr.next;
            }
            return undefined;
        };
    }

    remove(key) {
        let index = this.computeHash(key);
        if (!this.table[index]) {
            return undefined;
        } else {
            let curr = this.table[index];
            if(curr.key === key){
                this.table[index] = curr.next;
            } else {
                while(curr.next){
                    if(curr.next.key === key){
                        let removed = curr.next.value;
                        curr.next = curr.next.next;
                        this.size--;
                        return removed;
                    }
                    curr = curr.next;
                }
            }
            return undefined;
        }
    }

    print() {
        let str = ``
        for (let bucket of this.table) {
            while (bucket) {
                str += `${bucket.value} ->`;
                bucket = bucket.next;
            }
            str += `
            `
        }
        console.log(str);
    }
    log(){
        console.log(JSON.stringify(this.table, null, 2));
    }
}

module.exports = { HashTable }