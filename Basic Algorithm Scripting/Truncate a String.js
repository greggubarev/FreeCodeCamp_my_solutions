/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

// Added worked solution as a hint:
//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
//https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string/

function truncateString(str, num) {
  let temp = str.slice(0, num);
  // return temp + "...";
  if (str.length <= num) {
    return str;
  }
  else {
     return temp + "...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Second solution:
function truncateString(str, num) {
  return (str.length <= num) ? str : str.slice(0, num) + "...";
}

// Third solution

function truncateString(str, num) {

  return (str.length > num) ? `${str.slice(0,num)}...` : str;

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
