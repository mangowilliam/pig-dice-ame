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

function showScore(gamer1, gamer2) {
  $(".gamer1CurrentTotalScore").text("currentTotal:" + gamer1.gamerCurrentTotalScore);
  $(".gamer2CurrentTotalScore").text("currentTotal:" + gamer2.gamerCurrentTotalScore);

  $(".gamer1Total").text("Total: " + gamer1.score);
  $(".gamer2Total").text("Total: " + gamer2.score);
}

function showDice(dice) {
  if (dice >= 1) {
    $("img").attr("src", "img/" + dice + ".png").hide().fadeIn();
  }
  $(document).ready(function() {
    $("#play").click(function() {
      $(".row").show();
      j
    });
  });

}
$(document).ready(function() {
  var gameChoice = $('input:radio[name=gameChoice]:checked').val();
  var player1 = new gamer("mister");
  var player2 = new gamer(gameChoice);
  var totalAnswer = new answer();


  totalAnswer.gamer.push(gamer1, gamer2);
  totalAnswer.pickgamer();

  $("#gameChoice").click(function() {
    gameChoice = $('input:radio[name=gameChoice]:checked').val();
    if (gameChoice === "ai") {
      totalAnswer.gamers[1].gamerId = "ai";
    }

    $(this).parent().parent().fadeOut(700, function() {
      $("#twogamer").fadeIn();
    });
  });

  setInterval(function() {
      if (gamer2.gamerId === "ai" && gamer2.turn === 1) {
        if (gamer2.gamerCurrentTotalScore <= 18) {
          totalAnswer.throw();
          $(".hold").hide();
          $(".roll").hide();
        } else {
          totalAnswer.hold();
          $(".hold").fadeIn();
          $(".roll").fadeIn();
        }
        if (gamer2.turn === 0) {
          $(".hold").fadeIn();
          $(".roll").fadeIn();
        }
        totalAnswer.checkGame();;
        if (totalAnswer.over === 1) {
          $(".winner").show().text(totalAnswer.winnwer + "you won zzzz");

        }
        showDice(totalAnswer.dice);
        showScore(gamer1, gamer2);
        switchClass(gamer1, gamer2);
      }
    },
    900);

  $(".roll").click(function() {
    totalAnswer.checkGame();
    totalAnswer.throw();


    showDice(totalAnswer.dice);
    showScore(gamer1, gamer2);
    switchClass(gamer1, gamer2);

    if (totalAnswer.over === 1) {
      $(".winner").show().text(totalAnswer.winner + "you wons zzzz");
    }


  });

  // press hold to pass section

  $(".hold").click(function() {

    totalAnswer.hold();
    showScore(gamer1, gamer2);
    totalAnswer.checkGame();

    switchClass(gamer1, gamer2);
    showDice(gamer1, gamer2);

    if (toelTheReferee.gameover === 1) {
      $(".winner").show().text(totalAnswer.winner + "you won zzz");
    }
  });
});