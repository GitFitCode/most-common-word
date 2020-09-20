/**
Purpose: write one or more methods that returns the most common words
The answer is unique, and written in lowercase (even if its occurrences in paragraph may have uppercase symbols, 
  and even if it is a proper noun.)
Paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
There are no hyphens or hyphenated words.
Words only consist of letters, never apostrophes or other punctuation symbols.
 */

 /**
  Plan Of Action: 
  - remove punctuation and make lowercase 
  - remove banned word from paragraph 
  - identify most frequent word and return 
  */

 var nDictionary = Object.create(null);

 function setDictionary(index, value) {
     nDictionary[index] = value;
 }
 
 function getDictionary(index) {
     return nDictionary[index];
 }

 getDictWithFrequencies(paragraphArr, bannedWordsArr) { 
    var frequencyDict = new Object(); 
 }

 /**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
  var noPunctuationParagraph = paragraph.toLowerCase().replace(/(!|;|'|,|\.|\?)/g,"").trim();
  var wordsInPargrphArr = noPunctuationParagraph.split(" "); 
 
  var bannedArray = []; 
  bannedArray.push(banned); 

  //method retrieves the word with the highest frequency 
  getWordWithHighestFreq(wordsInPargrphArr,bannedArray); 


  console.log(noPunctuationParagraph);
  console.log(wordsInPargrphArr)
  console.log(bannedArray); 
};

mostCommonWord("THE CAT IS HERE, and dog is here?", "cat"); 