//function that takes a phrase and returns an object with each of the letters
//in the phrase and how many times they appear
function countLetters(phrase) {
  //sets the input phrase to a string variable, removes spaces and joins the remaining letters
  var phraseAsString = phrase.split(" ").join("");
  //creates an empty object lettercount
  var letterCount = {};
  //for each letter in the phrase string
  for (var i = 0; i < phraseAsString.length; i++) {
    //set individual letter to variabe "letter"
    var letter = phraseAsString[i];
    //set indexPos as i
    var indexPos = i;

    //if letter is a key in letterCount object
    if (letter in letterCount) {
      //push the index value to the letter array
      letterCount[letter].push(indexPos)

    } else {
      //add the letter to the object as an empty array
      letterCount[letter] = [];
      //push the index value to the letter array
      letterCount[letter].push(indexPos)

    }
  }
//return the letterCount object
return letterCount;
}
console.log(countLetters("Lighthouse in the house"));
console.log(countLetters("Here is a test phrase to try"));

/* Expected outcome: 

{ L: [ 0 ],
  i: [ 1, 10 ],
  g: [ 2 ],
  h: [ 3, 5, 13, 15 ],
  t: [ 4, 12 ],
  o: [ 6, 16 ],
  u: [ 7, 17 ],
  s: [ 8, 18 ],
  e: [ 9, 14, 19 ],
  n: [ 11 ] }
{ H: [ 0 ],
  e: [ 1, 3, 8, 16 ],
  r: [ 2, 13, 20 ],
  i: [ 4 ],
  s: [ 5, 9, 15 ],
  a: [ 6, 14 ],
  t: [ 7, 10, 17, 19 ],
  p: [ 11 ],
  h: [ 12 ],
  o: [ 18 ],
  y: [ 21 ] }
*/