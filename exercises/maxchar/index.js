// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charsMap = {};
  let max = 0;
  let charMax = '';

  for(let char of str) {
    if(!charsMap[char]) {
      charsMap[char] = 1
    }else {
      charsMap[char]++;
    }
  };

  for(let char in charsMap){
    if(charsMap[char] > max){
      max = charsMap[char];
      charMax = char;
    }
  }
  return charMax;
}

module.exports = maxChar;

// function maxChar(str) {
//   const chars = {}
//   for(let char of str) {
//     if(!chars[char]) {
//       chars[char] = 1
//     }else {
//       chars[char]++;
//     }
//   };
//   for(let i in chars){
//     if(i > 0){
//       return i
//     }else {
//       return i;
//     }
//   };
// }

// function maxChar(str) {
//   const chars = {};
//   for(let char of str){
//     chars[char] = chars[char] + 1 || 1;
//   };
//   for(let i in chars){
//     if(i > 0){
//       return i
//     }else {
//       return i;
//     }
//   };
// }