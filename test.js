// test.js

const Translator = require('./components/translator');
const translator = new Translator();

// const text = 'I need vacay and some fries';
const text = 'There is a car park at the back';
// const translated = translator.translateToBritish(text);
const translated = translator.translateToAmerican(text);

// console.log(translated); // Should output: "I need hols and some chips."
console.log(translated); // Should output: "I need hols and some chips."
