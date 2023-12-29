## Linked List

**A linked list is a data structure that consists of a collection of nodes. Each node consists of two parts: a data field and a pointer to the next node in the list. The last node in the list points to null. Linked lists are often used to implement stacks and queues.**

#### Advantages

**Linked lists have several advantages over arrays. First, linked lists can be dynamically allocated, which means that they can grow or shrink as needed. Second, linked lists can be inserted and deleted from anywhere in the list, without having to shift all of the other elements in the list**

#### Disadvantages

**However, linked lists also have some disadvantages. First, linked lists can be slower than arrays because they require following the pointers from one node to the next. Second, linked lists can use more memory than arrays because each node contains a pointer.**


#### Applications

- **Operating Systems**
- **Database**
- **Music player** 
- **Browser History**


## Examples

#### Singly linked list

```javascript
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    removeFromFirst() {
        if (!this.head) {
            return null;
        } else {
            if (this.size === 1) {
                this.head = null;
                this.size--;
                return null;
            } else {
                let next = this.head.next;
                this.head = next;
                this.size--;
                return;
            }
        }
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    removeFromLast() {
        if (!this.head) {
            return null;
        } else {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                let curr = this.head;
                while (curr.next.next) {
                    curr = curr.next;
                }
                this.tail = curr;
                curr.next = null;
            }
            this.size--;
            return;
        }
    }
    insertBefore(value, target) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let prev = this.head;
            while (prev.next.value !== target) {
                prev = prev.next;
            }
            let next = prev.next;
            prev.next = node;
            node.next = next;
        }
        this.size++;
    }
    insertAfter(value, target) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            if (target === 0) {
                this.prepend(value);
            } else {
                let curr = this.head;
                while (curr.value !== target) {
                    curr = curr.next;
                }
                let next = curr.next;
                curr.next = node;
                node.next = next;
            }
        }
        this.size++;
    }
    insertAt(value, index) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            let next = curr.next;
            curr.next = node;
            node.next = next;
        }
        this.size++;
    }
    removeAt(index) {
        if (this.size < 0 || index >= this.size) {
            return null;
        } else {
            if (this.size === 1 && index === 0) {
                this.head = null;
                this.tail = null;
                this.size--;
                return null;
            } else if (this.size === 1 && index !== 0) {
                return null;
            }

            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
            this.size--;
        }
    }
    removeElement(target) {
        if (!this.head) {
            return null;
        } else {
            let prev = this.head;
            while (prev.next.value !== target) {
                prev = prev.next;
            }
            prev.next = prev.next.next;
            this.size--;
        }
    }
    removeAfter(target) {
        if (!this.head) {
            return null;
        } else {
            let curr = this.head;
            while (curr.value !== target) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
            this.size--;
        }
    }
    removeBefore(target) {
        if (!this.head) {
            return null;
        } else {
            let prev = this.head;
            let curr1 = this.head.next;
            let curr2 = this.head.next.next;
            if (curr1.value === target) {
                this.removeFromFirst();
                return null;
            }
            while (curr2 !== null) {
                if (curr2.value === target) {
                    prev.next = curr2;
                }
                prev = prev.next;
                curr1 = curr1.next;
                curr2 = curr2.next;
            }
            this.size--;
        }
    }
    printList() {
        if (!this.head) {
            return null;
        } else {
            let curr = this.head;
            while (curr) {
                console.log(curr.value + "  ");
                curr = curr.next;
            }
        }
    }
    reverseList() {
        let prev = null;
        let curr = this.head;

        while (curr) {
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        this.head = prev;
    }
}
```

#### Doubly linked list

```javascript

class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }
    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    removeFromFirst() {
        if (!this.head) {
            return null;
        } else {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.size--;
        }
    }
    removeFromLast() {
        if (!this.head) {
            return null;
        } else {
            if (this.size === 1) {
                this.head = null
                this.tail = null
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            this.size--;
        }
    }
    insertAt(value, index) {
        if (index < 0 || index >= this.size) {
            return null;
        } else {
            if (index === 0) {
                this.prepend(value);
            } else if (index === this.size - 1) {
                this.append(value);
            } else {
                const node = new Node(value);
                let prev = this.head;
                for (let i = 0; i < index - 1; i++) {
                    prev = prev.next;
                }
                let next = prev.next;
                prev.next = node;
                node.prev = prev;
                node.next = next;
                next.prev = node;
                this.size++;
            }
            return null;
        }
    }
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        } else {
            if (index === 0) {
                this.removeFromFirst();
            } else if (index === this.size - 1) {
                this.removeFromLast();
            } else {
                let curr = this.head;
                for (let i = 0; i < index; i++) {
                    curr = curr.next;
                }
                let prev = curr.prev;
                let next = curr.next;
                prev.next = next;
                next.prev = prev;
                this.size--;
            }
            return;
        }
    }
    removeValue(value) {
        if (!this.head) {
            return null;
        } else {
            if (this.head.value === value) {
                this.removeFromFirst(value);
            } else if (this.tail.value === value) {
                this.removeFromLast(value);
            } else {
                let curr = this.head;
                while (curr.value !== value) {
                    curr = curr.next;
                }
                curr.prev.next = curr.next;
                curr.next.prev = curr.prev;
                this.size--;
            }
            return null;
        }
    }
    insertBefore(value, target) {
        if (!this.head) {
            return null;
        } else {
            if (this.head.value === target) {
                this.prepend(value);
            } else {
                const node = new Node(value);
                let curr = this.head;
                while (curr.value !== target) {
                    curr = curr.next;
                    if(!curr){
                        return null;
                    }
                }
                let prev = curr.prev;
                let next = curr;

                prev.next = node;
                node.next = next;
                node.prev = prev;
                next.prev = node;
                this.size++;
            }
            return null;
        }
    }
    insertAfter(value,target){
        if (!this.head) {
            return null;
        } else {
            if (this.tail.value === target) {
                this.append(value);
            } else {
                const node = new Node(value);
                let curr = this.head;
                while (curr.value !== target) {
                    curr = curr.next;
                    if(!curr){
                        return null;
                    }
                }
                let next = curr.next;
                curr.next = node;
                node.prev = curr;
                node.next = next;
                next.prev = node;
                this.size++;
            }
            return null;
        }
    }
    printList() {
        if (!this.head) {
            return null;
        } else {
            let curr = this.head;
            while (curr) {
                console.log(curr.value + "  ");
                curr = curr.next;
            }
        }
    }
    printReverse() {
        if (!this.head) {
            return null;
        }
        else {
            let curr = this.tail;
            while (curr) {
                console.log(curr.value + " ");
                curr = curr.prev;
            }
        }
    }
}
```
