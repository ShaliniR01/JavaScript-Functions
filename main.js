import myMap from './map.js';
import myFilter from './filter.js';
import myReduce from './reduce.js';
import myForEach from './foreach.js';

const numbers = [1,2,3,4,5,6,7,8,9]

console.log('ARRAY OF NUMBERS');
console.log(numbers);

console.log('MAP');
console.log(myMap(numbers, number => number*number));

console.log('FILTER');
console.log(myFilter(numbers, number => number%2 == 0));

console.log('REDUCE');
console.log(myReduce(numbers, (sum, number) => sum + number));

console.log('FOREACH');
console.log(myForEach(numbers, number => number));