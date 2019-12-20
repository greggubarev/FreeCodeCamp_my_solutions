// First solution

function toUpper(match) {
    return match.toUpperCase();
  }
function titleCase(str) {
  str = str.toLowerCase();
  return str.replace(/^\w{1}|\s\w{1}/g, toUpper);
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


// Jumba solution

let str = "HERE IS MY HANDLE HERE IS MY SPOUT";
    let arr = str.split(/\s/);
    for (let i = 0; i < arr.length;i++){
        let temp = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
        console.log(temp);
    }
