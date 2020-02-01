function findFactorialIterative(number) {
  debugger;
  let factorial = number;
  while(number > 1) {
    number--;
    factorial = factorial * number;
  }
  return factorial;
}

console.log(findFactorialIterative(5));