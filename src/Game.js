const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    this.currentRound++;
    const cards = prototypeData.map(card => {
      new Card(cards.id, cards.question, cards.answers, cards.correctAnswer)
    })
  }
//Should keep track of the currentRound
  // start: method that starts everything
  // Creates Cards
  // Puts Cards in a Deck
  // Creates a new Round using the Deck
  // invokes printMessage to display the message in the CLI
  // invokes printQuestion to kick off our helper functions that allow interaction via the CLI

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
