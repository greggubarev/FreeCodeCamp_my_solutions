/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
The built-in repeat()-method should not be used.
*/

// First solution:

function repeatStringNumTimes(str, num) {
    if (num > 0) {
         var rpt = '';
         for (var i = 0; i < num; i++) {
         rpt += str;
         }
         return rpt;
         }
     else {
         return "";
    }
}

// Second soluiton:

function repeatStringNumTimes(str, num) {
     if (num > 0) {
         return (num === 1) ? str : (str + repeatStringNumTimes (str, num - 1));
     }
     else {
         return "";
    }
}

// Third solution:

function repeatStringNumTimes(str, num) {
    return num > 0 ? (str + repeatStringNumTimes(str, num - 1)) : '';
}

repeatStringNumTimes("abc", 3);
