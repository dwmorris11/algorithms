function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  for( const letter of string ){
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join("");
 }

 function getNewLetter(letter, key){
   const lowerBound = 'a'.charCodeAt(0) - 1;
    const upperBound = 'z'.charCodeAt(0);
   let newLetterCode = letter.charCodeAt() + key;
   if(newLetterCode > upperBound){
     newLetterCode = (newLetterCode % upperBound) + lowerBound;
   }
   return String.fromCharCode(newLetterCode);
 }