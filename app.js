/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const removePunctuationAndLowerCase = paragraph => {
  newParagraph = paragraph.replace(/[!?',;.]/g,"").toLowerCase();
  return newParagraph;
}

 const paragraphToArray = paragraph => {
  // Splitting string into array
  const arr = paragraph.split(" ");
  return arr; // Return the array
}

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

const getWorkableArray = (paragraph, banned) => {
  // remove punctiations and lowercase
  const newParagraph = removePunctuationAndLowerCase(paragraph);
  // convert paragraph to array
  const paragraphArray = paragraphToArray(newParagraph);
  // remove banned from array
  const bannedRemoved = removeBanWord(paragraphArray, banned);
  
  return bannedRemoved;
}

const getWordsObject = (paragraph, banned) => {
  // fetch a workable array with all lower case and punctuations stripped
  const workableArray = getWorkableArray(paragraph, banned);
  // create empty object to populate
  const words = {};
  // iterate over workable array and add to object
  workableArray.forEach(element => {
    !words[element] ? words[element] = 1 : words[element] += 1;
  });

  return words;
}

const mostCommonWord = (paragraph, banned) => {
  // get a words object from paragraph
  words = getWordsObject(paragraph, banned);
  // iterate through whole object and reduce to find the max word
  return Object.keys(words).reduce((a, b) => words[a] > words[b] ? a : b);
}