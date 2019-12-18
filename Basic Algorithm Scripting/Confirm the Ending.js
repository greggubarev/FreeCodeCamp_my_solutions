/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

//First solution

function confirmEnding(str, target) {
   let newStr = str.substr(-target.length,target.length);
   if (newStr == target) {
     return true;
   }
    return false;
}
confirmEnding("Bastian", "b");


//Second solution

function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");
