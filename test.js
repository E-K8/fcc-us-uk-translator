// test.js

const Translator = require('./components/translator');
const translator = new Translator();

const textAm = 'I need vacay and some fries';
const textBr = 'There is a car park at the back';
const translatedToBritish = translator.translateToBritish(textAm);
const translatedToAmerican = translator.translateToAmerican(textBr);

console.log(translatedToBritish); // Should output: "I need hols and some chips."
console.log(translatedToAmerican); // Should output: "There is a parking lot at the back"
