//set time out
setTimeout(() => {
  console.log("this runs after 2 seconds");
}, 2000); 

//set interval
setInterval(() => {
  console.log("this runs every 1 second");
}, 1000);

//countdown example 
const timeoutId = setTimeout(() => {
  console.log("will not run");
}, 3000);

clearTimeout(timeoutId); 

const intervalId = setInterval(() => {
  console.log("Repeating...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
