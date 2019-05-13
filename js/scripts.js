var gamer1 = new gamer();
var gamer2 = new gamer();

function gamer(turn) {
  this.diceRandom = 0;
  this.score = 0;
  this.ongoingScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.gamerName;
}
gamer.prototype.froll = function() {
  var diceRandom = Math.floor(Math.random() * 6) + 1
  return diceRandom;
  this.score += diceRandom;
  if (this.diceRandom === 1) {
    this.ongoingScore = 0;
    alert("sorry " + this.gamerName + "you scored a one");
  } else {
    this.ongoingScore += this.score;
  }
}

gamer.prototype.hold = function() {
  this.totalscore += this.ongoingScore;
  this.ongoingScore = 0;
  alert(this.gamerName + ", next!");
}

gamer.prototype.checkWinner = function() {
  if (this.totalScore >= 100) {
    alert(this.gamerName + " You won!!!");
  }
}
gamer.prototype.newGame = function() {
  this.score = 0;
  this.ongoingScore = 0;
  this.totalScore = 0;
  this.gamerName = "";
}

$(document).ready(function() {

  $(".btn-new").click(function(event) {

    gamer1.newGame();
    gamer2.newGame();
    $(".gamer1Score").empty();
    $(".gamer1OngoingScore").empty();
    $(".gamer1TotalScore").empty();
    $(".gamer2Score").empty();
    $(".gamer2OngoingScore").empty();
    $(".gamer2TotalScore").empty();
  });

  $(".btn-roll1").click(function(event) {
    gamer.froll;
    $(".gamer1Score").text(gamer1.froll);
    $(".gamer1OngoingScore").text(gamer1.ongoingScore);
    $(".gamer1TotalScore").text(gamer1.totalScore);
  });

  $(".btn-roll2").click(function(event) {
    $(".gamer2Score").text(gamer1.froll);
    $(".gamer2OngoingScore").text(gamer2.ongoingScore);
    $(".gamer2TotalScore").text(gamer2.totalScore);
  });

  $(".btn-hold1").click(function(event) {
    gamer1.hold();
    $(".gamer1TotalScore").text(gamer1.totalScore);
    $(".gamer1OngoingScore").empty();
    $(".gamer1Score").empty();
    gamer1.checkWinner();
  });

  $(".btn-hold2").click(function(event) {
    gamer2.hold();
    $(".gamer2TotalScore").text(gamer2.totalScore);
    $(".gamer2OngoingScore").empty();
    $(".gamer2Score").empty();
    gamer2.checkWinner();
  });

});