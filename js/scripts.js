var gamer1 = new Gamer();
var gamer2 = new Gamer();

function Gamer(turn) {
  this.diceRandom = 0;
  this.ongoingScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.gamerName;
}

Gamer.prototype.froll = function() {
  var diceRandom = Math.floor((Math.random() * 6) + 1);
  if (diceRandom === 1) {
    this.ongoingScore = 0;
  } else {
    this.ongoingScore += diceRandom;
  };
  return diceRandom;

  /*var die = document.getElementById("#die-result");
  if (diceRandom === 1) pic.setAttribute("src", "die1.png");
  else if (diceRandom === 2) pic.setAttribute("src", "die2.png");
  else if (diceRandom === 3) pic.setAttribute("src", "die3.png");
  else if (diceRandom === 4) pic.setAttribute("src", "die4.png");
  else if (diceRandom === 5) pic.setAttribute("src", "die5.png");
  else pic.setAttribute("src", "die1.png");*/

}
Gamer.prototype.score = function() {

}
Gamer.prototype.hold = function() {
  this.totalScore += this.ongoingScore;
  this.ongoingScore = 0;
  return this.totalScore;
}

Gamer.prototype.checkWinner = function() {
  if (this.totalScore >= 100) {}
}
Gamer.prototype.newGame = function() {
  this.score = 0;
  this.ongoingScore = 0;
  this.totalScore = 0;
  this.gamerName = "";
}
var clearValues = function() {
  $(".gamer1Name").val("newgamer");
  $(".gamer2Name").val("newgamer");
}


//user
$(document).ready(function() {
  clearValues();
  $(".btn-new").click(function(event) {
    gamer1.newGame();
    gamer2.newGame();
    $(".gamer1Score").empty();
    $(".gamer1OngoingScore").empty();
    $(".gamer1TotalScore").empty();
    $(".gamer2Score").empty();
    $(".gamer2OngoingScore").empty();
    $(".gamer2TotalScore").empty();
    event.preventDefault();
  });

  $(".btn-roll1").click(function(event) {
    $(".gamer1Score").text(gamer1.froll());
    $(".gamer1OngoingScore").text(gamer1.ongoingScore);
  });

  $(".btn-roll2").click(function(event) {
    $(".gamer2Score").text(gamer2.froll());
    $(".gamer2OngoingScore").text(gamer2.ongoingScore);
  });

  $(".btn-hold1").click(function(event) {
    $(".gamer1TotalScore").text(gamer1.hold());
    $(".gamer1OngoingScore").empty();
    $(".gamer1Score").empty();
    gamer1.checkWinner();
  });

  $(".btn-hold2").click(function(event) {
    gamer2.hold;
    $(".gamer2TotalScore").text(gamer2.hold());
    $(".gamer2OngoingScore").empty();
    $(".gamer2Score").empty();
    gamer2.checkWinner();

  });

});