//promise structure
// const promise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Data received!");
//   } else {
//     reject("Error occurred.");
//   }
// });

// //usage promise 
// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.error(error);
//   });


//fetch api with js
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

//ex1
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) throw new Error("HTTP error " + response.status);
    return response.json();
  })
  .then(post => {
    console.log("Post title:", post.title);
  })
  .catch(err => {
    console.error("Error fetching post:", err);
  });
