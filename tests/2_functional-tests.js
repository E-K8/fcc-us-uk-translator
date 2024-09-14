const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  suite('POST /api/translate', () => {
    test('Translation with text and locale fields', function (done) {
      chai
        .request(server)
        .post('/api/translate')
        .send({
          text: 'Mangoes are my favorite fruit.',
          locale: 'american-to-british',
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, 'text');
          assert.property(res.body, 'translation');
          done();
        });
    });

    test('Translation with text and invalid locale field', function (done) {
      chai
        .request(server)
        .post('/api/translate')
        .send({
          text: 'Mangoes are my favorite fruit.',
          locale: 'invalid-locale',
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error');
          assert.equal(res.body.error, 'Invalid value for locale field');
          done();
        });
    });
  });
});
