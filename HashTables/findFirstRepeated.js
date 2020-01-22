function findFirstRepeated(arr) {
  const arrMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let mapValue = arrMap.get(arr[i]);
    if (mapValue) {
      mapValue = mapValue += 1;
      arrMap.delete(arr[i]);
      arrMap.set(arr[i], mapValue);
    } else {
      arrMap.set(arr[i], 1);
    }
    if (arrMap.get(arr[i]) > 1) return arr[i];
  }
  return undefined;
}

console.log(findFirstRepeated([2, 5, 1, 2])); // return 2
console.log(findFirstRepeated([2, 1, 1, 2])); // return 1
console.log(findFirstRepeated([2, 3, 4, 5])); // return undefined