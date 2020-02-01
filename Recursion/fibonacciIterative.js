function fibonacciIterative(index) {
  let arrayLength = index + 1;
  let fibArray = [0, 1, 1];
  if (fibArray.length > index) {
    return fibArray[index];
  }
  while(fibArray.length < arrayLength) {
    // get last two items in the array and append their sum to to the end of the array.
    fibArray.push(fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]);
  }
  return fibArray[index];
}

console.log(fibonacciIterative(4));