const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Deck', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(round).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('', function() {

  })
});
