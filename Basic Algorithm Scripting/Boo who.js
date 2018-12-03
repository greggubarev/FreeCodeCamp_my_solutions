/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

// Added alternative solution:

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool !== 1) {
  return (bool == true || bool == false) ? true : false;
  }
  return false;
}

booWho(null);
