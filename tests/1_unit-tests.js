const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  test('Translate "Mangoes are my favorite fruit." to British English', () => {
    const input = 'Mangoes are my favorite fruit.';
    const output =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Translate "I ate yogurt for breakfast." to British English', () => {
    const input = 'I ate yogurt for breakfast.';
    const output =
      'I ate <span class="highlight">yoghurt</span> for breakfast.';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Translate "We had a party at my friend\'s condo." to British English', () => {
    const input = "We had a party at my friend's condo.";
    const output =
      'We had a party at my friend\'s <span class="highlight">flat</span>.';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Translate "Can you toss this in the trashcan for me?" to British English', () => {
    const input = 'Can you toss this in the trashcan for me?';
    const output =
      'Can you toss this in the <span class="highlight">bin</span> for me?';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Translate "The parking lot was full." to British English', () => {
    const input = 'The parking lot was full.';
    const output = 'The <span class="highlight">car park</span> was full.';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Translate "Like a high tech Rube Goldberg machine." to British English', () => {
    const input = 'Like a high tech Rube Goldberg machine.';
    const output =
      'Like a high tech <span class="highlight">Heath Robinson device</span>.';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Translate "To play hooky means to skip class or work." to British English', () => {
    const input = 'To play hooky means to skip class or work.';
    const output =
      'To <span class="highlight">bunk off</span> means to skip class or work.';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Translate "No Mr. Bond, I expect you to die." to British English', () => {
    const input = 'No Mr. Bond, I expect you to die.';
    const output =
      'No <span class="highlight">Mr </span>Bond, I expect you to die.';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Translate "Dr. Grosh will see you now." to British English', () => {
    const input = 'Dr. Grosh will see you now.';
    const output = '<span class="highlight">Dr </span>Grosh will see you now.';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Translate "Lunch is at 12:15 today." to British English', () => {
    const input = 'Lunch is at 12:15 today.';
    const output = 'Lunch is at <span class="highlight">12.15</span> today.';
    assert.equal(translator.translateToBritish(input), output);
  });
});
