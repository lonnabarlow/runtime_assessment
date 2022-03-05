function addToZero(arr, num) {
    let obj = {}
    let diff
  
    for (let i = 0; i < arr.length; i++) {
      diff = num - arr[i]
  
      if (obj[diff]) {
        return true
      } else {
        obj[arr[i]] = true
      }
    }
    return false
  }
//   let addToZeroResult = addToZero([2, 7, 1, -2, 8], 0)
//   console.log(addToZeroResult)

//   let addToZeroResult = addToZero([5, 3, 6, 1, 4], 0)
//   console.log(addToZeroResult)
//runtime O(n)
//space O(1)


const checkUnique = (str) => { 
	const list = new Set(); 
	for (const character of str.split("")) { 
	
		list.add(character); 
	} 
	return str.length === list.size; 
}; 
// console.log(checkUnique("Friday")); 
// console.log(checkUnique("Lonna")); 
//runtime O(n)
//space O(n)

function pangram(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram";
     }
    }
   
   return "pangram";
 }
//  console.log(pangram("the quick brown fox jumps over the lazy dog"))
// console.log(pangram("should i be worried about this assessment"))
//runtime O(1)
//space O(1)


 function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
 }  
//  console.log(findLongestWord("did you have breakfast today"))
// console.log(findLongestWord("we need more caffiene for this"))
// runtime O(n)
//space O(n)