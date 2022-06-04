import numberToWords from 'number-to-words';
import { syllable } from 'syllable';
import wordMap from './wordMap.js';

function letterToSyllable(letter) {
  return letter == 'w' ? 3 : 1;
}

// NOTE: attach to global for browser
global.e25n = e25n;

// NOTE:
// annoying score:
// 1 -- not annoying (no collisions and shorter to say)
// 2 -- kind of annoying (no collisions and equal to say)
// 3 -- starting to get annoying (some collisions, but easier to say) OR (no collisions, but longer to say)
// 4 -- annoying (some collisions, equal to say) OR (some collisions, shorter to say)
// 5 -- super annoying (some collisions, longer to say)
export default function e25n(inputString) {
  const inputChars = inputString.trim().toLowerCase().replaceAll(' ', '').split('');
  if (inputChars.length <= 2) {
    throw new Error('ERROR: input string must have at least 3 alphanumeric characters');
  }

  const oldSyllables = syllable(inputString);
  const first = inputChars[0];
  const last = inputChars[inputChars.length - 1];
  const middle = inputChars.slice(1, inputChars.length - 1).join('');
  const newSyllables = letterToSyllable(first) + syllable(numberToWords.toWords(middle.length)) + letterToSyllable(last);
  const newWord = `${first}${middle.length}${last}`;

  let collisions = wordMap.wordMap[newWord] || [];
  collisions = collisions.filter((w) => w != inputChars.join(''));
  let annoyingScale = 0;
  if (!collisions.length) {
    annoyingScale = newSyllables <= oldSyllables ? (newSyllables == oldSyllables ? 2 : 1) : 3;
  } else {
    annoyingScale = newSyllables <= oldSyllables ? 4 : 5;
  }

  return {
    newWord,
    collisions,
    annoyingScale
  }
};
