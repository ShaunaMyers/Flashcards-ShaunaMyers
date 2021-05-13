const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {

    const cards = prototypeQuestions.map((card, i) => new Card(
      prototypeQuestions[i].id,
      prototypeQuestions[i].question,
      prototypeQuestions[i].answers,
      prototypeQuestions[i].correctAnswer
    ));

    const deck = new Deck(cards);
    const round = new Round(deck)
    this.currentRound = round;

    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
