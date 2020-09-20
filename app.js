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
    console.log("The values in the dictioanry are the following: ", frequencyDict); 

    
    //Identify the number of the maximum occurance of a word
    var max = 0;

    for(const [key, value] of Object.entries(frequencyDict)) {
      if(value > max) {
        max = value;
      }
    }
    console.log("The maximum occurance of a word is: ", 2)

    //Parse dictionary to retrieve words of highest count 
    var wordsOfHighFrequency = []

    for(const [key, value] of Object.entries(frequencyDict)) {
      if(value == max) {
        wordsOfHighFrequency.push(key); 
      }
    }
    console.log("The most common words are", wordsOfHighFrequency);

    return wordsOfHighFrequency; 
 }

 /**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
  var noPunctuationParagraph = paragraph.toLowerCase().replace(/(!|;|'|,|\.|\?)/g,"").trim();
  console.log("The paragraph written in lowercase and without punctuation is the following: " ,noPunctuationParagraph);

  var wordsInPargrphArr = noPunctuationParagraph.split(" "); 
  wordsInPargrphArr = wordsInPargrphArr.filter(word => word != banned);
  console.log("The array of words in paragraph without the banned word is the following: ", wordsInPargrphArr); 

  //method retrieves the word with the highest frequency 
  const mostCommonWord = getWordsWithHighestFreq(wordsInPargrphArr);
  return mostCommonWord.values();

};

mostCommonWord("THE CAT IS HERE, and dog is here?", "cat"); 