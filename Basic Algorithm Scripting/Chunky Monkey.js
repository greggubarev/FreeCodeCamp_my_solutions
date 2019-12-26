function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let length = arr.length;
      for (let i = 0; i < length/size; i++) {
          newArr.push(arr.slice(0,size));
          console.log(`newArr is ${newArr}`);
          arr.splice(0,size);
          console.log(`arr is ${arr}`);
      }
        return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
