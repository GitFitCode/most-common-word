const paragraph = document.getElementById('paragraph');
const banned = document.getElementById('banned');
const enter = document.getElementById('enter');
const mcw = document.getElementById('mcw');


enter.addEventListener('click', function() { 
  if(paragraph.value === '') alert('Please enter a paragraph.');
  mcw.innerText = mostCommonWord(paragraph.value, banned.value);
})