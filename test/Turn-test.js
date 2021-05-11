const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a user\'s guess', function() {
    const turn = new Turn('guess', card);
    expect(turn.guess).to.equal('guess');
  });

  it.skip('should store the current card in play', function() {
    const turn = new Turn('guess', card);
    expect(turn.card).to.equal(card);
  });

  it.skip('should return the user\'s guess', function() {
    const turn = new Turn('guess', card);
    expect(turn.returnGuess()).to.equal('guess');
  });

  it.skip('should return the card in play', function() {
    const turn = new Turn('guess', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it.skip('should evaluate if the user\'s guess is correct', function() {
    const turn = new Turn('guess', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should let the user know if their guess is correct', function() {
    const turn = new Turn('guess', card);
    expect(turn.giveFeedback()).to.equal('string');
  })
});
