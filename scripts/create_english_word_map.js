const words = require('an-array-of-english-words');
const fs = require('fs');
const a10n = require('../index');

const MAP = {};
(async () => {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 2) {
      const { newWord } = await a10n(word);
      if (MAP[newWord]) {
        MAP[newWord] = [...MAP[newWord], word];
      } else {
        MAP[newWord] = [word];
      }
    }
  }
  fs.writeFileSync("./wordMap.json", JSON.stringify(MAP));
})()
