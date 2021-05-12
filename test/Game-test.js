const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

  describe('Game', function() {

      let card1;
      let card2;
      let card3;
      let deck;
      let round1;
      let game;

    beforeEach(function() {

      card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

      deck = new Deck([card1, card2, card3]);

      round1 = new Round(deck);

      game = new Game(round1);

    });

    it.skip('should be a function', function() {
      expect(Game).to.be.a('function');
    });

    it.skip('should be an instance of Game', function() {
      game.start();
      game.start();
      expect(game.currentRound).to.equal(2);
    });

    it.skip('should keep track of the currentRound', function() {
      expect(game.currentRound).to.be.an.instanceof(Round);
    });

    it.skip('should start the game', function() {
      expect(game.start())to.be.a('function');
    });

  });
