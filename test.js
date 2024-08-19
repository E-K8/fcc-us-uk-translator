// test.js

const Translator = require('./components/translator');
const translator = new Translator();

const text = 'I need vacay and some fries';
const translated = translator.translateToBritish(text);

console.log(translated); // Should output: "I need hols and some chips."
