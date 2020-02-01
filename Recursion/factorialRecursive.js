function findFactorialRecursive(number) {
  debugger;
  if (number === 1) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));