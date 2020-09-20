// Removes punctuation and converts paragraph to lower case
const removePunctuationAndLowerCase = paragraph => {
  newParagraph = paragraph.replace(/[!?',;.]/g,"").toLowerCase();
  return newParagraph;
}

// trasnforms paragraph to an array
const paragraphToArray = paragraph => {
  // Splitting string into array
  const arr = paragraph.split(" ");
  return arr; // Return the array
}

// removes ban word from array
const removeBanWord = (paragraphArray, ban) => {
  // setting arr to paragraph array to not mutate the original array
  let arr = paragraphArray; 
  // iterating over the array
  for (let i = 0; i<arr.length; i++){ 
    // if ban is in array, splice it
    if (arr[i] === ban){
      arr.splice(i , 1);  
    } 
  }
  return arr; // return the array
}

// uses the first three functions to trim down paragraph to a workable array
const getWorkableArray = (paragraph, banned) => {
  // remove punctiations and lowercase
  const newParagraph = removePunctuationAndLowerCase(paragraph);
  // convert paragraph to array
  const paragraphArray = paragraphToArray(newParagraph);
  // remove banned from array
  const bannedRemoved = removeBanWord(paragraphArray, banned);
  
  return bannedRemoved;
}

// converts array to word object with number of occasions for each
const getWordsObject = (paragraph, banned) => {
  // fetch a workable array with all lower case and punctuations stripped and banned removed
  const workableArray = getWorkableArray(paragraph, banned);
  // create empty object to populate
  const words = {};
  // iterate over workable array and add to object
  workableArray.forEach(element => {
    !words[element] ? words[element] = 1 : words[element] += 1;
  });

  return words;
}

// finds all the words with the greatest number of ocassions
const mostCommonWord = (paragraph, banned) => {
    // get a words object from paragraph
  words = getWordsObject(paragraph, banned);
    // array for multiple common words
  const mostCommonWords = []
  // iterate through whole object and reduce to find the max word
  const mostCommonWord = Object.keys(words).reduce((a, b) => words[a] > words[b] ? a : b);
  
  // iterate through object to find other common words
  for (number in words){
    if (words[number] >= words[mostCommonWord]){
      mostCommonWords.push(number)
    }
  }

  return mostCommonWords;
}