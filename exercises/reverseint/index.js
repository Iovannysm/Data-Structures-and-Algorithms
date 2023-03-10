// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let rev = n.toString();
  let revInt = '';
  for(let char of rev){
    revInt = char + revInt;
  }

  return parseInt(revInt) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//   const revInt = n.toString().split('').reverse().join('');
//   return parseInt(revInt) * Math.sign(n);
// }