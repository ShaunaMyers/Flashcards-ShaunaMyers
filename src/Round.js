class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck[0];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
}

module.exports = Round;
