const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Deck', function() {

  beforeEach(function() {
    let round = new Round();

    let card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    let card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    let deck = new Deck([card1, card2, card3]);

    let turn = new Turn('Rollie Pollie', card);
  })

  it.skip('should be a function', function() {
    round = new Round();
    expect(round).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card in play', function() {
    // const round = new Round(deck);
    //
    // const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    // const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    //
    // const deck = new Deck([card1, card2, card3]);


    expect(round.returnCurrentCard).to.equal(card1);
  });

  it('should keep track of how many turns have been taken', function() {
    // const round = new Round();

    expect(round.turns).to.equal(0);

    round.takeTurn();
    round.takeTurn();
    round.takeTurn();

    expect(round.turns).to.equal(3);
  });

  it('should should evaluate a guess when a turn is taken', function() {
    const round = new Round(deck);

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    const turn = new Turn('Dust Bunny', card);

    expect(round.takeTurn()).to.equal(false);
  });

  it('should give feedback when it a turn is taken', function() {
    const round = new Round();

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    const turn = new Turn('Rollie Pollie', card);

    expect(round.takeTurn()).to.equal('Incorrect!');
  });

  it('should store the id of incorrect guesses', function() {
    const round = new Round();

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    const turn = new Turn('Rollie Pollie', card);

    round.takeTurn();

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should store the id of incorrect guesses', function() {
    const round = new Round();

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    const turn = new Turn('Rollie Pollie', card);

    round.takeTurn();

    expect(round.takeTurn()).to.equal('Incorrect!');

});
