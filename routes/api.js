'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  app.route('/api/translate').post((req, res) => {
    const { text, locale } = req.body;

    if (!text || !locale) {
      return res.json({
        error: 'Required field(s) missing',
      });
    }

    if (text === '') {
      return res.json({
        error: 'No text to translate',
      });
    }

    let translation;
    if (locale === 'american-to-british') {
      translation = translator.translateToBritish(text);
    } else if (locale === 'british-to-american') {
      translation = translator.translateToAmerican(text);
    } else {
      return res.json({
        error: 'Invalid value for locale field',
      });
    }

    if (translation === text) {
      return res.json({
        text,
        translation: 'Everything looks good to me!',
      });
    }

    return res.json({ text, translation });
  });
};
