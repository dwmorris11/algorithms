var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.replace(/[^\w\s]/gi, ' ')
  let paragraphArray = paragraph.toLowerCase().split(" ");
  let words = {}
  for(let word of paragraphArray) {
     if(notBanned(word, banned)){
         if(words.hasOwnProperty(word)) {
             words[word]++;
         }else{
             words[word] = 1;
         }
     }
    }
  return largest(words);
};

function notBanned(word, banned) {
  if(word === '') return false;
  for(let ban of banned) {
      if(word === ban) {
          return false;
      }
  }
  return true;
}

function largest(obj){
  const sortedArray = Object.entries(obj).sort((a,b)=>a[1]-b[1]);
  const letter = sortedArray[sortedArray.length - 1][0];
  return letter;
}