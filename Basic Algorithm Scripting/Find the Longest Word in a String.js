/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  str = str.split(" ");
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > maxLength) {
      maxLength = str[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
