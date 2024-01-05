class MaxHeap {
    constructor() {
        this.heap = [];
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] > this.heap[parentIndex]) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    heapifyDown() {
        let index = 0;

        while (true) {
            let maxIndex = index;
            let leftChild = 2 * maxIndex + 1;
            let rightChild = 2 * maxIndex + 2;

            if (leftChild < this.heap.length &&
                this.heap[leftChild] > this.heap[maxIndex]) {
                maxIndex = leftChild;
            }
            if (rightChild < this.heap.length &&
                this.heap[rightChild] > this.heap[maxIndex]) {
                maxIndex = rightChild;
            }

            if (maxIndex !== index) {
                [this.heap[maxIndex], this.heap[index]] = [this.heap[index], this.heap[maxIndex]];
                index = maxIndex;
            } else {
                break;
            }
        }
    }
    add(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    pop() {
        let deleted = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return deleted;
    }
    log() {
        console.log(this.heap);
    }
}

module.exports = { MaxHeap }