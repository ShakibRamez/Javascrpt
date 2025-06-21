// localStorage.setItem('username', 'shakib');

// const user = localStorage.getItem('username');
// console.log(user); 

// localStorage.removeItem('username');

// localStorage.clear();


//ex save
// const user = { name: 'Shakib', age: 20 };
// localStorage.setItem('user', JSON.stringify(user));

//retrieve
const user = JSON.parse(localStorage.getItem('user'));
console.log(user.name); 
