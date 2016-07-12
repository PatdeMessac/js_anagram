//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

//'use strict';

//function Anagram(word) {
 // this.word = word;
//}

//Anagram.prototype.matches = function (words) {

function anagram(s1, s2){
  if (s1.length !== s2.length) {
    // not the same length, can't be anagram  (poser les bases ! )
    return false;
  }
  if (s1 === s2) {
    // same string must be anagram   (évidence : niche est l'anagramme de ... niche !)
    return true;
  }

  var c = '',
    i = 0,
    limit = s1.length,
    match = 0,
    idx;
    
  while(i < s1.length){
    // chomp the next character
    c = s1.substr(i++, 1);
    // find it in the second string
    idx = s2.indexOf(c);
    if (idx > -1) {
      // found it, add to the match
      match++;
      // assign the second string to remove the character we just matched
      s2 = s2.substr(0, idx) + s2.substr(idx + 1);
    } else {
      // not found, not the same
      return false;
    }
  }
  return match === s1.length;
}


//
// YOUR CODE GOES HERE
//
//}
