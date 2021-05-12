const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.turn = {};
    this.currentCard = deck[0];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    this.turn = new Turn(guess, this.currentCard);

  }
}

module.exports = Round;
