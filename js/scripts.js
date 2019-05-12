var gamer1 = "";
var gamer2 = "";

var diceRandom = function() {
  return math.floor(6 * math.random()) + 1;
}

function gamer(turn) {
  this.score = 0;
  this.ongoingScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.gamerName;
}

gamer.prototype.froll = function() {
  if (this.score === 1) {
    this.ongoingScore = 0;
    alert("sorry " + this.gamerName + you scored a one);
  } else {
    this.ongoingScore += this.score;
  }
}
gamer.prototype.checkWinner = function() {
  if (this.totalscore >= 100) {
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
  $("button#play").click(function(event) {
    gamer1 = new gamer(true);
    gamer2 = new gamer(false);
    $("#gameOn").show();
    $("#login").hide();

    var gamer1Name = $(".gamer1Name").val();
    $(".gamer1Name").text(gamer1Name);

    var gamer2Name = $(".gamer2Name").val();
    $(".gamer2Name").text(gamer2Name);

    gamer1.gamerName = gamer1Name;
    gamer2.gamerName = pgamer2Name;
  });

  $("button.btn-new").click(function(event) {
    clearValues();
    gamer1.newGame();
    gamer2.newGame();
    $(".gamer1Score").empty();
    $(".gamer1OngoingScore").empty();
    $(".gamer1TotalScore").empty();
    $(".gamer2Score").empty();
    $(".gamer2OngoingScore").empty();
    $(".gamer2TotalScore").empty();
  });
  $("button.btn-roll").click(function(event) {
    gamer1.score = diceRandom();
    $(".gamer1OngoingScore").text(gamer1.score);
    gamer1.froll();
    $(".gamer1TotalScore").text(gamer1.OngoingScore);
  });

  $("button.btn-roll").click(function(event) {
    gamer2.score = diceRandom();
    $(".gamer2OngoingScore").text(gamer2.score);
    gamer2.froll();
    $(".gamer2TotalScore").text(gamer2.OngoingScore);
  });

  $("button.btn-hold").click(function(event) {
    gamer1.hold();
    $(".gamer1TotalScore").text(gamer1.totalScore);
    $(".gamer1OngoingScore").empty();
    $(".gamer1Score").empty();
    gamer1.checkWinner();
  });

  $("button.btn-hold").click(function(event) {
    gamer2.hold();
    $(".gamer2TotalScore").text(gamer2.totalScore);
    $(".gamer2OngoingScore").empty();
    $(".gamer2Score").empty();
    gamer2.checkWinner();
  });

});