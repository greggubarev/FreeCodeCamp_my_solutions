var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return names[0];
  }
  else if (strokes <= par-2){
    return names[1];
  }
  else if (strokes == par -1){
    return names[2];
  }
  else if (strokes == par){
    return names[3];
  }
  else if (strokes == par +1){
    return names[4];
  }
  else if (strokes == par +2){
    return names[5];
  }
  else {return names[6];}
  // Only change code above this line
}

// Using Multiple Conditional (Ternary) Operators

    function golfScore(par, strokes) {
      return (strokes == 1) ? names[0] : 
      (strokes <= par - 2) ? names[1] : 
      (strokes == par - 1) ? names[2] : 
      (strokes == par) ? names[3] : 
      (strokes == par + 1) ? names[4] : 
      (strokes == par + 2) ? names[5] : 
      (strokes >= par + 3) ? names[6] : 
      "Change Me";
    }


// Change these values to test
golfScore(5, 4);

/*
Exercise: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/golf-code
Guide: https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/golf-code
*/
