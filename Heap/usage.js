const { MaxHeap } = require('./MaxHeap');

const heap = new MaxHeap();

heap.add(10);
heap.add(30);
heap.add(20);
heap.add(40);
heap.add(70);
heap.add(60);
heap.add(90);

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());

heap.log();