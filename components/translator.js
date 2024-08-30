const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  constructor() {
    this.americanToBritishTitlesMap = this._toTitleCaseMap(
      americanToBritishTitles
    );
    this.britishToAmericanTitlesMap = this._reverseMap(
      this.americanToBritishTitlesMap
    );
  }

  _toTitleCaseMap(obj) {
    const result = {};
    for (const key in obj) {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      const capitalizedValue =
        obj[key].charAt(0).toUpperCase() + obj[key].slice(1);
      result[key] = obj[key];
      result[capitalizedKey] = capitalizedValue;
    }
    return result;
  }

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

      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${britishWord}</span>`
      );
    }

    // American to British spellings
    for (const [americanSpelling, britishSpelling] of Object.entries(
      americanToBritishSpelling
    )) {
      const regex = new RegExp(`\\b${americanSpelling}\\b`, 'gi');
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${britishSpelling}</span>`
      );
    }

    // American to British tltles
    for (const [americanTitles, britishTitles] of Object.entries(
      americanToBritishTitles
    )) {
      const regex = new RegExp(`\\b${americanTitles}`, 'gi'); // Titles might not be whole words (e.g., Mr.);
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${britishTitles}</span>`
      );
    }

    return translatedText;
  }

  translateToAmerican(text) {
    let translatedText = text;

    // Loop through the british-only dictionary and replace words
    for (const [britishWord, americanWord] of Object.entries(britishOnly)) {
      const regex = new RegExp(`\\b${britishWord}\\b`, 'gi'); // Match whole word

      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${americanWord}</span>`
      );
    }

    // British to American spellings
    for (const [americanSpelling, britishSpelling] of Object.entries(
      americanToBritishSpelling
    )) {
      const regex = new RegExp(`\\b${britishSpelling}\\b`, 'gi');
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${americanSpelling}</span>`
      );
    }

    // British to American titles
    for (const [britishTitle, americanTitle] of Object.entries(
      this._reverseMap(americanToBritishTitles)
    )) {
      const regex = new RegExp(`\\b${britishTitle}`, 'gi');
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${americanTitle}</span>`
      );
    }
    return translatedText;
  }
}

module.exports = Translator;
