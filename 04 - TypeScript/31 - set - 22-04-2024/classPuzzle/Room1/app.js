let set = new Set();
set.add(1);
set.add(2);
set.add(1);
set.add("hello");
set.add("hello");

//clear all the elements in set
set.clear();

//adding new element 
set.add(1);
set.add(2);

//size
console.log('the size is', set.size);

//delete one element from set
set.delete(1);

//difference between two sets
const set1 = new Set([1,2,3]);
const set2 = new Set([2,3,4]);

console.log('differnce ',set1.difference(set2));
// console.log(set1)

//run for each element in the set and print it
set.add("hello");
set.forEach(el => console.log(el))

//intersection between two sets
// console.log(set1.intersection(set2));

// union sets
const setUnion = set1.union(set2);
console.log(setUnion);




console.log(set); //Set { 1, 2 }

console.log(set.has(1)); //true



