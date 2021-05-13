const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

  describe('Game', function() {

    let game;

    beforeEach(function() {
      game = new Game();
    });

    it('should be a function', function() {
      expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', function() {
      expect(game).to.be.an.instanceof(Game);
    });

    it('should keep track of currentRound', function() {
      expect(game.currentRound).to.be.an.instanceof(Round);
    });

    it('should start the game with new cards in deck', function() {
      expect(game.start).to.be.a('function');
    });

  });
