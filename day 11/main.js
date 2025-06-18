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

const totalProductsValue = products.map(item => ({
  name: item.name,
  totalValue: item.price * item.count
}));

console.log(totalProductsValue);
