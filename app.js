
var paragraphDummy = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned = ['hit'];


const mostCommonWord = (paragraph, banned) => {
  //pass in 'space' as our split token
  let wordsArray = paragraph.toLowerCase().split(' ');

  wordsArray.forEach(word => {
    /* Steps: 
      1. Get length of word to easily access last element/char
      2. Check if that last char is in the alphabet
      3. If not, slice it from the word. 
    */
    const wordLength = word.length;
    let lastCharacter = word[wordLength - 1];
    let abcString = 'abcdefghijklmnopqrstuvwxyz';

    if (abcString.indexOf(lastCharacter) === -1) {
      word = word.slice(0, wordLength-1);
    }

    //check that word is NOT in banned list first
    if (banned.indexOf(word) === -1) {
      traverseTree(word, mainNode);
    }
  });

  return maxFreqWord;
};

/*
I used a tree structure to store words, 
rather than having to iterate over a whole array every time. (TBH not sure if this is actually optimized).

- Each tree node is an object with references to its 2 children/branches nodes:
- Traversal either goes to Left or Right node (or if not does not exist (dne), creates new node). No need for ref to parent node
- Also has frequency property that is incremeneted if potential node.value === node.value
  - Keep track of any node frequency > 2 (bc API said unique answers only)
  - banned words are simply not catalogued into the tree (the easy method)
*/

let maxFreq = 1;
let maxFreqWord;
//using a starter node to balance the tree (ie so the branches/nodes will be roughly evenly split)
const mainNode = {
  //leftChild: {},
  //rightChild: {},
  stringValue: 'm',
  frequency: 0    
};

//will be called recursively
function traverseTree(value, potentialNode) {
  //use JS built-in comparison on strings (ie alphabetical)

  //left node case
  if (value < potentialNode.stringValue) {
    //LeftChild Node already exists
    if (potentialNode.leftChild) {
      traverseTree(value, potentialNode.leftChild);
    }
    //Left node dne ... yet
    else {
      potentialNode.leftChild = {
        stringValue: value,
        frequency: 1
      };
    }
  }
  
  //right node case
  else if (value > potentialNode.stringValue) {
    //RightChild Node already exists
    if (potentialNode.rightChild) {
      traverseTree(value, potentialNode.rightChild);
    }
    //Right node dne ... yet
    else {
      potentialNode.rightChild = {
        stringValue: value,
        frequency: 1
      };
    }
  }
  
  //equal case
  else {
    potentialNode.frequency ++;
    if (potentialNode.frequency > maxFreq) {
      //set maxFreq to new number to beat and update most common word
      maxFreq = potentialNode.frequency;
      maxFreqWord = value;
    }
  }
}


console.log(paragraphDummy);
console.log(mostCommonWord(paragraphDummy, banned));

