function frankenSplice(arr1, arr2, n) {
  for (let i = 0; i < arr1.length; i++) {
    arr2.splice(n+i, 0, arr1[i]);
  }
  return arr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
