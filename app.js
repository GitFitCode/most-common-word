/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
var banned = 'hit'

const mostCommonWord = (paragraph, banned) => {
  // filter out punctuation
  var array = paragraph.match(/[a-z]+/gi)

  // loop through array and:
  for (var i=array.length-1; i>=0; i--) {

    // make all string lowercase
    array[i] = array[i].toLowerCase()
  
    // then remove banned word from list
    if (array[i] === banned) {
      array.splice(i, 1)
    }

    // return the new list
    var array2 = array
 }
  // placeholder variables
  var common = {}, // count occurance of item
  max = 0, // compare the max value element
  result = []; // push results to new array

  // return most common word from new array
  array2.forEach(function (i) {

    // compare current index and increment
    common[i] = (common[i] || 0) + 1
    
    // if greater than current max value,
    if (common[i] > max) {
        // max is updated
      max = common[i]
        // max count is pushed to result
      result = [i]
      return
    }
    
    // if the current value is equal to max value,
    if (common[i] === max) {
        // push to results array
      result.push(i)
    }
  })
  console.log(result)
}

mostCommonWord(paragraph, banned);