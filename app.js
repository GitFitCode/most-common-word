// Convert text to only alphabetic characters and spaces
const removePunctuation = text => {
    return text.replace(/[^ A-Za-z]/g,'');
};

// Convert string of text into an array of individual words
const splitText = text => {
    return text.split(' ');
}

// Remove banned words from an array of words
const removeBannedWords = (words, banned) => {
    const bannedWords = new Set(banned);
    return words.filter(word => !bannedWords.has(word));
}

// Count the frequency of each word in an array of words
const getWordCounts = words => {
    const wordCounts = {};

    for (let word of words) {
        if (typeof wordCounts[word] === 'number') {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }

    return wordCounts;
}

// Given an array of words with their respective frequencies, return
// the word with the highest frequency
const getCommonWord = wordCounts => {
    let highestFrequency = 0;
    let commonWord = '';
    
    for (let [word, count] of Object.entries(wordCounts)) {
        if (count > highestFrequency) {
            highestFrequency = count;
            commonWord = word;
        }
    }

    return commonWord;
} 

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
    // Remove punctuation from paragraph and convert to lowercase
    const text = removePunctuation(paragraph).toLowerCase();

    // Split text into individual words
    words = splitText(text);

    // Remove banned words from text
    words = removeBannedWords(words, banned);
    
    // Count word frequencies
    const wordCounts = getWordCounts(words);

    // Return the word with max frequency
    return getCommonWord(wordCounts);
};
  
const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
const banned = ['hit'];
  
const result = mostCommonWord(paragraph, banned);
console.log(result);