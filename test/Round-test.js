const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let currentTurn;
  let round;

  beforeEach(function() {

    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);

    currentTurn = new Turn('sea otter', card1);

    round = new Round(deck);

  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card in play', function() {
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

  it('should keep track of how many turns have been taken', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn();

    expect(round.turns).to.equal(1);
  });

  it.skip('should evaluate a guess when a turn is taken', function() {
    expect(round.takeTurn()).to.equal(false);
  });

  it.skip('should give feedback when it a turn is taken', function() {
    expect(round.takeTurn()).to.equal('Incorrect!');
  });

  it.skip('should store the id of incorrect guesses', function() {
    round.takeTurn();

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it.skip('should create a new instance of Turn when a guess is made', function() {
    round.takeTurn();
    round.takeTurn();

    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it.skip('should calculate and return percentage of correct guesses', function() {
    round.takeTurn();
    round.takeTurn();

    expect(round.calculatePercentageCorrect()).to.equal(50);
  });

  it.skip('should end round with a message showing percentage correct', function() {
    expect(round.endRound()).to.equal('**Round over!** You answered 50% of the questions correctly!');
  })
});
