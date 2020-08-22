function findLongestWord(string = ' ') {
  let str = string.split(' ');
  let longest = 0;
  let word = '';
  for (var i = 0; i < str.length; i += 1) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}

console.log(findLongestWord('The quick brown fox jumped over the lazd dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
