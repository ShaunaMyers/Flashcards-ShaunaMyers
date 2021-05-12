const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.turn = {};
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    this.turn = new Turn(guess, this.currentCard);
    return this.turn.evaluateGuess();
  }
}

module.exports = Round;
