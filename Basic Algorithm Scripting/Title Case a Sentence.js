// First solution

function toUpper(match) {
    return match.toUpperCase();
  }
function titleCase(str) {
  str = str.toLowerCase();
  return str.replace(/^\w{1}|\s\w{1}/g, toUpper);
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
