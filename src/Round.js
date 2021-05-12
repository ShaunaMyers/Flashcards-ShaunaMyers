const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.turn = {};
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turn = new Turn(guess, this.currentCard);
    const evaluation = this.turn.evaluateGuess();
    if (!evaluation) {
     this.incorrectGuesses.push(this.currentCard.id);
   } else {
     this.correctGuesses ++;
   }

   this.deck.cards.shift();
   this.currentCard = this.deck.cards[0];
   this.turns ++;
   return this.turn.giveFeedback();;
  }
}

module.exports = Round;
