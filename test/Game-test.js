const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of currentRound', () => {
    expect(game.currentRound).to.be.a('object');
  });

  it('should start the game with new cards in deck', () => {
    expect(game.start) .to.be.a('function');
  });

});
