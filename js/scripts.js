function gamer(gamerId) {
  this.score = 0;
  this.gamer1CurrentTotalScore = 0;
  this.turn = 0;
  this.gamerId = gamerId;
}

function answer() {
  this.gamers = [];
  this.winner = "";
  this.over = 0;
  this.dice = 0;
}
answer.prototype.switchGamers = function() {
  if (this.gamers[0].turn === 1) {
    this.gamers[0].turn = 0;
    this.gamers[1].turn = 1;

  } else if (this.gamers[1].turn === 1) {
    this.gamers[0].turn = 1;
    this.gamers[1].turn = 0;
  }
}
}