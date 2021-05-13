const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('guess', card);
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', () => {
    expect(turn.guess).to.equal('guess');
  });

  it('should store the current card in play', () => {
    expect(turn.card).to.equal(card);
  });

  it('should return the user\'s guess', () => {
    expect(turn.returnGuess()).to.equal('guess');
  });

  it('should return the card in play', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate if the user\'s guess is correct', () => {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should let the user know if their guess is correct', () => {
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  })
});
