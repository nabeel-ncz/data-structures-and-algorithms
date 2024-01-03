class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    getHead(){
        return this.head;
    }
    prepend(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    removeFirst() {
        if (!this.head) {
            return new Error('List is empty')
        } else {
            this.head = this.head?.next ?? null;
            this.size--;
        }
    }
    iterate() {
        let curr = this.head;
        let out = "";
        while (curr !== null) {
            out += curr.value + ' -> ';
            curr = curr.next;
        }
        console.log(out);
        return out;
    }
    logJson() {
        console.log(JSON.stringify(this.head, null, 2));
    }
    findMiddle() {
        let fast = this.head;
        let slow = this.head;
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.value;
    }
    reverse() {
        let prev = null;
        let next = null;
        let headNode = this.head;
        while(headNode){
            next = headNode.next;
            headNode.next = prev;
            prev = headNode;
            headNode = next;
        }
        this.head = prev;
    }
}


function detectCycle(head){
    let slow = head;
    let fast = head.next;
    while(fast && fast.next){
        if(slow === fast) return true;

        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
}

module.exports = { LinkedList, detectCycle };