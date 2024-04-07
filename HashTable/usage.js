const { HashTable } = require('./HashTable');


const table = new HashTable(10);


table.put('name', 'nabeel');
table.put('age', 10);
table.put('place', 'palakkad');
table.put('id', 323);
table.put('loc', 32.3432);
table.put('adrs', 'calicut 848');

table.print();

table.log();

console.log(table.size)

console.log(table.get('name'));
table.remove('name');
console.log(table.get('name'));


console.log(table.size)