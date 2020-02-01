function fibonacciRecursive(index) {
  let fibArray = [0, 1, 1];
  if (index < fibArray.length) return fibArray[index];
  return fibArray.push(fibonacciRecursive(fibArray.length - 2) + fibonacciRecursive(fibArray.length - 1));
}

console.log(fibonacciRecursive(8));