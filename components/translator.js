const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  constructor() {}

  _reverseMap(obj) {
    const result = {};
    for (const key in obj) {
      result[obj[key]] = key;
    }
    return result;
  }

  translateToBritish(text) {
    let translatedText = text;

    // Loop through the american-only dictionary and replace words
    for (const [americanWord, britishWord] of Object.entries(americanOnly)) {
      const regex = new RegExp(`\\b${americanWord}\\b`, 'gi'); // Match whole word

      translatedText = translatedText.replace(regex, `${britishWord}`);
    }

    // American to British spellings
    for (const [americanSpelling, britishSpelling] of Object.entries(
      americanToBritishSpelling
    )) {
      const regex = new RegExp(`\\b${americanSpelling}\\b`, 'gi');
      translatedText = translatedText.replace(regex, `${britishSpelling}`);
    }

    // American to British tltles
    for (const [americanTitles, britishTitles] of Object.entries(
      americanToBritishTitles
    )) {
      const regex = new RegExp(`\\b${americanTitles}`, 'gi'); // Titles might not be whole words (e.g., Mr.);
      translatedText = translatedText.replace(regex, `${britishTitles}`);
    }

    return translatedText;
  }

  translateToAmerican(text) {
    let translatedText = text;

    // Loop through the british-only dictionary and replace words
    for (const [britishWord, americanWord] of Object.entries(britishOnly)) {
      const regex = new RegExp(`\\b${britishWord}\\b`, 'gi'); // Match whole word

      translatedText = translatedText.replace(regex, `${americanWord}`);
    }

    // British to American spellings
    for (const [americanSpelling, britishSpelling] of Object.entries(
      americanToBritishSpelling
    )) {
      const regex = new RegExp(`\\b${britishSpelling}\\b`, 'gi');
      translatedText = translatedText.replace(regex, `${americanSpelling}`);
    }

    // British to American titles
    for (const [britishTitle, americanTitle] of Object.entries(
      this._reverseMap(americanToBritishTitles)
    )) {
      const regex = new RegExp(`\\b${britishTitle}`, 'gi');
      translatedText = translatedText.replace(regex, `${americanTitle}`);
    }
    return translatedText;
  }
}

module.exports = Translator;
