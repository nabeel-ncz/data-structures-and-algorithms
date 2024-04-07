const { LinkedList, detectCycle } = require('./linkedlist')


const list1 = new LinkedList();

list1.prepend(10);
list1.prepend(20);
list1.prepend(30);
list1.prepend(40);
list1.prepend(50);

list1.iterate();

list1.removeFirst();

list1.prepend(60);
list1.prepend(70);
list1.prepend(80);

list1.iterate();

console.log(list1.findMiddle());

list1.reverse();

list1.iterate();

console.log(detectCycle(list1.getHead()));