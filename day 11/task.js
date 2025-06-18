const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map(num => num * 2);

const evenDoubles = doubled.filter(num => num % 2 === 0);

console.log(evenDoubles);
