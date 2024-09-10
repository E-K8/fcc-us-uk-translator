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

    // American to British titles (with space, highlight, and removing the dot)
    for (const [americanTitle, britishTitle] of Object.entries(
      this.americanToBritishTitlesMap
    )) {
      // Match titles followed by a period and a space or a word boundary
      const regex = new RegExp(
        `\\b${americanTitle.replace('.', '\\.')}\\b`,
        'gi'
      );

      // Replace "Mr." with "Mr " (no dot) and add highlighting
      translatedText = translatedText.replace(regex, (match) => {
        // Remove the period and wrap the title in a span for highlighting
        const withoutPeriod = match.replace('.', '');
        return `<span class="highlight">${withoutPeriod}</span>`;
      });
    }

    // Time format translation (American to British)
    translatedText = translatedText.replace(
      /(\d{1,2}):(\d{2})/g,
      `<span class="highlight">$1.$2</span>`
    );

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

    return translatedText;
  }

  translateToAmerican(text) {
    let translatedText = text;

    // Time format translation (British to American)
    translatedText = translatedText.replace(
      /(\d{1,2})\.(\d{2})/g,
      `<span class="highlight">$1:$2</span>`
    );

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
      this.britishToAmericanTitlesMap
    )) {
      const regex = new RegExp(`\\b${britishTitle}(?!\\.)\\b`, 'gi');
      translatedText = translatedText.replace(regex, (match) => {
        // Preserve the original case of the first letter
        const replacement = match.charAt(0) + americanTitle.slice(1);
        return `<span class="highlight">${replacement}</span>`;
      });
    }

    return translatedText;
  }
}

module.exports = Translator;
