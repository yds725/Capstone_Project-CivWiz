import allWords from './multiWords.js'
import allDefs from './multiDefs.js'

export default class GameData {
  constructor() {
    this.words = allWords.split('\n')
    this.defs = allDefs.split('\n')
  }

  getSize() {
    return this.words.length
  }

   getWord(i) {
    return this.words[i];
  }
  
  //Added to grab the definition at the same index as the word
  getDefinition(i) {
    return this.defs[i];
  }

   scramble(w) {
    var word = w;
    var wordLength = word.length;
    var scrambled = "";

    for (var i = 0; i < wordLength; i++) {
      var charIndex = Math.floor(Math.random() * word.length);
      scrambled += word.charAt(charIndex);
      word = word.substr(0, charIndex) + word.substr(charIndex + 1);
    }
    return scrambled.toUpperCase();
  }
}
