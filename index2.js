function chardiqka(str){
const myStr = str.toLowerCase();
const charMap = {};
for (let char of myStr){
     if (!charMap[char]) {
       charMap[char] = 1;
      } else {
       charMap[char]++;
      }
  }
  return charMap;
}
console.log(chardiqka("Eniiis"))

// 2) ANAGRAMS
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case

function anagrams(str1,str2){
    if(str1.toLowerCase()===str2.toLowerCase()){
        return true;
    }else{
        return false;
    }
}
console.log(anagrams("enis baab","EnIs baba"))