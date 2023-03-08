// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const charA = mapping(stringA);
  const charB = mapping(stringB);

  if(Object.keys(charA).length !== Object.keys(charB).length){
    return false;
  }

  for(let char in charA){
    if(charA[char] !== charB[char]){
      return false
    }
  }
  
  return true
}


function mapping(str){
  let charMap = {}
  for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    if(!charMap[char]){
      charMap[char] = 1
    }else{
      charMap[char]++
    }
  }
  return charMap
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let word1 = stringA.split('').sort().join('').replace(/[^\w]/g, "").toLowerCase();
//   let word2 = stringB.split('').sort().join('').replace(/[^\w]/g, "").toLowerCase();
//   if(word1 === word2){
//     return true
//   }else{
//     return false
//   }
// }

// function anagrams(stringA, stringB) {
//   let wordA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   let wordB = stringB.replace(/[^\w]/g, "").toLowerCase();
//   let charA = {}
//   let charB = {}
  
//   if(wordA.length !== wordB.length){
//     return false
//   }
  
//   for(let char of wordA) {
//     if(!charA[char]){
//       charA[char] = 1
//     }else{
//       charA[char]++
//     }
//   }
  
//   for(let char of wordB) {
//     if(!charB[char]){
//       charB[char] = 1
//     }else{
//       charB[char]++
//     }
//   }

//   for(let char in charA){
//     if(charA[char]!== charB[char]){
//       return false;
//     }
//   }

//   return true
// }