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
const numbers =[10, 2, 3, 4, 5, 6, 7];

const max = numbers.reduce(callback, -Infinity);

function callback(accumullattor, value){
    if(accumullattor > value){
        return accumullattor;
    }else{
        return value;
    }
}

console.log(max);

//ex2
const products = [
  {
    name: 'laptop',
    price: 1000,
    count: 5
  },
  {
    name: 'desktop',
    price: 1500,
    count: 2
  },
  {
    name: 'phone',
    price: 500,
    count: 10
  }
];

const totalValueStore = products.reduce(
(acc, item) => + item.value * item.count,
0
);

console.log(totalValueStore);