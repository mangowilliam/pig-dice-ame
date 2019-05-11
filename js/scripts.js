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
  } else if (this.gamers[1].turn === 1) {
    this.gamerCurrentTotalScore(this.gamers[1]);
    this.switchGamer();
  }
}
answer.prototype.pickgamer = function() {
  this.gamers[0].turn = 1;
}
answer.prototype.checkGame = function() {
  if (this.gamers[0].score >= 100) {
    this.gamers[1].turn = 0;
    this.gamers[0].turn = 0;
    this.winner = "gamer 1 ";
    this.over = 1;
  } else if (this.gamers[1].score >= 100) {
    this.gamers[1].turn = 0;
    this.players[0].turn = 0;
    this.winner = "gamer 2 ";
    this.over = 1;
  }
}

function switchClass(gamer1, gamer2) {
  if (gamer1.turn === 1) {
    $("div.gamer1").addClass("display");
    $("div.gamer2").removeClass("display");
  } else if (gamer2.turn === 1) {
    $("div.gamer1").removeClass("display");
    $("div.gamer2").addClass("display");

  }
}