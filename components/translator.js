const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  constructor() {}

  translateToBritish(text) {
    let translatedText = text;

    // Loop through the americanOnly dictionary and replace words
    for (const [americanWord, britishWord] of Object.entries(americanOnly)) {
      const regex = new RegExp(`\\b${americanWord}\\b`, 'gi'); // Match whole word
      //   console.log(`Replacing ${americanWord} with ${britishWord}`);

      translatedText = translatedText.replace(regex, `${britishWord}`);
    }
    return translatedText;
  }
}

module.exports = Translator;
