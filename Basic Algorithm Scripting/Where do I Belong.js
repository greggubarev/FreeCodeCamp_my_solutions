function getIndexToIns(arr, num) {
  let temp = 0;
  let tempArIn;
       if (arr.length != 0) {
         arr.push(num);
       for ( let i = 0; i < arr.length; i++) {
         for (let j = 0; j < arr.length-1; j++) {
          if (arr[j] > arr[j+1]) {
            tempArIn = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tempArIn; 
      }      
            console.log(`El is - ${arr[j]} | tempArIn is - ${tempArIn} | arr[j+1] is ${arr[j+1]}`);
     }
         if (arr[i] == num) {
            temp = arr.indexOf(num);
   } 
  }
 }
      return temp;
}
console.log(getIndexToIns([2, 1, 19, 17, 1], 5));
