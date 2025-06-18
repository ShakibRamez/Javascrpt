// for each method with arrow function
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   console.log(num * 2);
// });

//sum function 

// function sum(numbers) {
//   let total = 0;
//   numbers.forEach(num => {
//     total += num;
//   });
//   return total;
// }

// const myNumbers = [1, 2, 3, 4, 5];
// const result = sum(myNumbers);
// console.log(result); 


//map array method
// const products = [
//   {
//     name: 'laptop',
//     price: 1000,
//     count: 5
//   },
//   {
//     name: 'desktop',
//     price: 1500,
//     count: 2
//   },
//   {
//     name: 'phone',
//     price: 500,
//     count: 10
//   }
// ];

// const totalProductsValue = products.map(item => ({
//   name: item.name,
//   totalValue: item.price * item.count
// }));

// console.log(totalProductsValue);


//filter method
// const products = [
//   {
//     name: 'laptop',
//     price: 1000,
//     count: 5
//   },
//   {
//     name: 'desktop',
//     price: 1500,
//     count: 2
//   },
//   {
//     name: 'phone',
//     price: 500,
//     count: 10
//   }
// ];

// const expensiveProducts = products.filter(item => item.price > 1000);

// console.log(expensiveProducts);

//reduce array method

//ex1
// const numbers =[10, 2, 3, 4, 5, 6, 7];

// const max = numbers.reduce(callback, -Infinity);

// function callback(accumullattor, value){
//     if(accumullattor > value){
//         return accumullattor;
//     }else{
//         return value;
//     }
// }

// console.log(max);

// //ex2
// const products = [
//   {
//     name: 'laptop',
//     price: 1000,
//     count: 5
//   },
//   {
//     name: 'desktop',
//     price: 1500,
//     count: 2
//   },
//   {
//     name: 'phone',
//     price: 500,
//     count: 10
//   }
// ];

// const totalValueStore = products.reduce(
// (acc, item) => + item.value * item.count,
// 0
// );

// console.log(totalValueStore);

//slice array method 

// const fruits = ['apple', 'banana', 'cherry', 'date'];
// const citrus = fruits.slice(1, 3);

// console.log(citrus);


//splice method array 
// const numbers = [1, 2, 3, 4, 5];
// const deleted = numbers.splice(2, 0, 6, 7, 20, 100);

// console.log(numbers);
// console.log(deleted);

//sort method array
// const nums = [40, 100, 1, 5, 25];
// nums.sort((a, b) => a - b);
// console.log(nums);

// //contact method array
// const a = [1, 2];
// const b = [3, 4];
// const c = a.concat(b);
// console.log(c);

//fill method array
// const arr = [1, 2, 3, 4];
// arr.fill(0, 1, 3);
// console.log(arr);

//includes method array

// const fruits = ['apple', 'banana'];
// console.log(fruits.includes('banana'));

//join method array 
// const words = ['Hello', 'World'];
// console.log(words.join(' ')); 

//reverse method array
// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); 

//push method array
// const arr = [1, 2];
// arr.push(3);
// console.log(arr);

//pop method array
// const arr = [1, 2, 3];
// arr.pop();
// console.log(arr);


// //unshift method array
// const arr = [2, 3];
// arr.unshift(1);
// console.log(arr); 

// //shift method array
// const arr = [1, 2, 3];
// arr.shift();
// console.log(arr);

// //index of method array
// const arr = ['a', 'b', 'c'];
// console.log(arr.indexOf('b'));

// //every method array
// const ages = [22, 30, 25];
// console.log(ages.every(age => age > 18));

//some method array
// const ages = [16, 21, 15];
// console.log(ages.some(age => age >= 18)); 

//find method array
// const arr = [5, 12, 8, 130];
// const result = arr.find(x => x > 10);
// console.log(result);

//findindex method array
// const arr = [5, 12, 8, 130];
// const index = arr.findIndex(x => x > 10);
// console.log(index);

//array.form
// const str = "hello";
// const arr = Array.from(str);
// console.log(arr); 

//array is array method
// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray("hello")); 


//flat method array 
const arr = [1, 2, [3, 4, [5]]];
console.log(arr.flat());