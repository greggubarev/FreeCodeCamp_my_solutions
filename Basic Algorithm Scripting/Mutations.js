function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let check;
    for (let i = 0; i < arr2.length; i++) {
      check = false;
      for ( let j = 0; j < arr1.length; j++) {
        console.log(`arr1[i] is ${arr1[j]} | arr2[j] is ${arr2[i]}`);
          if (arr1[j] == arr2[i]) {
        check = true;
        }
      }
      if (!check) {
          break;
      }
    }
  return check;
}

console.log(mutation(["hello", "hey"]));
