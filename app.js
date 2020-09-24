/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

let newParagraphArray = []; 

let counter = {};

// this function counts occurences of the same array items and puts them in an object as key/value pairs
function counterFunction (numberValue) {

  counter[numberValue] = (counter[numberValue] || 0) + 1;

}

function mostCommonWord (paragraph, banned) {

// this allows strings to be broken down into arrays containing seperated words
const stringToArray = (str) => str.trim().split(" "); 

let maxValue = 0;

// this allows all of the words to become lowercase and lose any unwanted values 
let removeUnwantedCharacters = paragraph.toLowerCase().replace(/[^a-zA-Z ]/g, ""); 

// this turns my string into an array 
let editedParagraph = stringToArray(removeUnwantedCharacters); 

// this loop filters out any banned words
  for (let i = 0; i < editedParagraph.length; i++) { 

    if (editedParagraph[i] !== banned) { 

      newParagraphArray.push(editedParagraph[i]);

    }

  }

  // this sends all of the words to get counted
  newParagraphArray.forEach(counterFunction);

  console.log(counter);

  //this for...in loop extracts the key with the highest value of occurences 
  for (let countedWord in counter) {

    let tempValue = parseFloat(counter[countedWord]);
    
    if (maxValue < tempValue) {
      maxValue = tempValue;
      highestKeyValue = countedWord;
    }

  }

  // this logs the final result to the console
  console.log(highestKeyValue);

};

mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", "hit");