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

  test('Translate "We watched the footie match for a while." to American English', () => {
    const input = 'We watched the footie match for a while.';
    const output =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Translate "Paracetamol takes up to an hour to work." to American English', () => {
    const input = 'Paracetamol takes up to an hour to work.';
    const output =
      '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Translate "First, caramelise the onions." to American English', () => {
    const input = 'First, caramelise the onions.';
    const output =
      'First, <span class="highlight">caramelize</span> the onions.';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Translate "I spent the bank holiday at the funfair." to American English', () => {
    const input = 'I spent the bank holiday at the funfair.';
    const output =
      'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Translate "I had a bicky then went to the chippy." to American English', () => {
    const input = 'I had a bicky then went to the chippy.';
    const output =
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', () => {
    const input = "I've just got bits and bobs in my bum bag.";
    const output =
      'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Translate "The car boot sale at Boxted Airfield was called off." to American English', () => {
    const input = 'The car boot sale at Boxted Airfield was called off.';
    const output =
      'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Translate "Have you met Mrs Kalyani?" to American English', () => {
    const input = 'Have you met Mrs Kalyani?';
    const output = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Translate "Prof Joyner of King\'s College, London." to American English', () => {
    const input = "Prof Joyner of King's College, London.";
    const output =
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Translate "Tea time is usually around 4 or 4.30." to American English', () => {
    const input = 'Tea time is usually around 4 or 4.30.';
    const output =
      'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Highlight translation in "Mangoes are my favorite fruit."', () => {
    const input = 'Mangoes are my favorite fruit.';
    const output =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Highlight translation in "I ate yogurt for breakfast."', () => {
    const input = 'I ate yogurt for breakfast.';
    const output =
      'I ate <span class="highlight">yoghurt</span> for breakfast.';
    assert.equal(translator.translateToBritish(input), output);
  });

  test('Highlight translation in "We watched the footie match for a while."', () => {
    const input = 'We watched the footie match for a while.';
    const output =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(translator.translateToAmerican(input), output);
  });

  test('Highlight translation in "Paracetamol takes up to an hour to work."', () => {
    const input = 'Paracetamol takes up to an hour to work.';
    const output =
      '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    assert.equal(translator.translateToAmerican(input), output);
  });
});
