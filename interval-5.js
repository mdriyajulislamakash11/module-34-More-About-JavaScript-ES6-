console.log(1);
console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 3000);

console.log(4);
console.log(5);
console.log(6);

let sum = 0;
const clockId = setInterval(() => {
  sum++;
  if (sum > 6) {
    clearInterval(clockId);
  }
  console.log(clockId, sum);
}, 1000);
