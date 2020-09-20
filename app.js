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

 function getWordsWithHighestFreq(paragraphArr) { 
    var frequencyDict = new Object(); 

    //Adds words from paragraph into a dictionary 
    for (var i = 0; i < paragraphArr.length; i++) {
      var key = paragraphArr[i]; 

      if(key in frequencyDict) {
        value = frequencyDict[key]; 
        frequencyDict[key] = value + 1; 
      } else { 
        frequencyDict[key] = 1; 
      }
    }

    //Identify the number of the maximum occurance of a word
    var max = 0;

    for(const [key, value] of Object.entries(frequencyDict)) {
      if(value > max) {
        max = value;
      }
    }

    //Parse dictionary to retrieve words of highest count based on max occurance  
    var wordsOfHighFrequency = []

    for(const [key, value] of Object.entries(frequencyDict)) {
      if(value == max) {
        wordsOfHighFrequency.push(key); 
      }
    }

    return wordsOfHighFrequency; 
 }

 /**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
  var noPunctuationParagraph = paragraph.toLowerCase().replace(/(!|;|'|,|\.|\?)/g,"").trim();

  var wordsInPargrphArr = noPunctuationParagraph.split(" "); 
  wordsInPargrphArr = wordsInPargrphArr.filter(word => word != banned);

  //method retrieves the word with the highest frequency 
  const mostCommonWord = getWordsWithHighestFreq(wordsInPargrphArr);
  console.log("The most common words are: ");
  for (var k = 0; k < mostCommonWord.length; k ++) { 
    console.log(mostCommonWord[k]); 
  }

};

//First Run Module: npm install prompt-sync
function main() { 
  const prompt = require('prompt-sync')();

  const paragraph = prompt('Please enter a paragraph of your choice to find the most common word: ');
  console.log(`The paragraph you entered is: ${paragraph}`);

  const bannedWord = prompt('Please enter a word you choose to ban as it will not be included in identifying the most common word: ');
  console.log(`The bannedWord you entered is: ${bannedWord}`);

  mostCommonWord(paragraph, bannedWord);
}

main(); 