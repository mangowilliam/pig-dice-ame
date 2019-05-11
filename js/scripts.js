function gamer(gamerId) {
  this.score = 0;
  this.gamerCurrentTotalScore = 0;
  this.turn = 0;
  this.gamerId = gamerId;
}

function answer() {
  this.gamers = [];
  this.winner = "";
  this.over = 0;
  this.dice = 0;
}
answer.prototype.switchGamer = function() {
  if (this.gamers[0].turn === 1) {
    this.gamers[0].turn = 0;
    this.gamers[1].turn = 1;

  } else if (this.gamers[1].turn === 1) {
    this.gamers[0].turn = 1;
    this.gamers[1].turn = 0;
  }
}

answer.prototype.gamerCurrentTotalScore = function(gamer) {
  gamer.score += gamer.gamerCurrentTotalScore;
  gamerCurrentTotalScore = 0;
}
answer.prototype.throw = function() {
  var outCome = math.floor((math.random() * 6) + 1);
  if (this.over === 0) {
    this.dice = outCome;
  }
  if this.gamers[0].turn === 1 {
    if (outCome !== 1) {
      this.gamers[0].gamerCurrentTotalScore += outCome;
    } else {
      this.gamers[0].gamerCurrentTotalScore = 0;
      this.switchGamer();
    }

  } else if (this.gamers[1].turn === 1) {
    if (outCome !== 1) {
      this.gamers[1].gamerCurrentTotalScore = 0;
    } else {
      this.gamers[1].gamerCurrentTotalScore = 0;
      this.switchGamer();
    }
  }
};
answer.prototype.hold = function() {
  if (this.gamers[0].turn === 1) {
    this.gamerCurrentTotalScore(this.gamers[0]);
    this.switchGamer();
  }
}