/* global $ */

$("#shoot").click(function () {
  const left = $("#lefthand").val().toLowerCase().trim();
  const right = $("#righthand").val().toLowerCase().trim();

  if (!["rock", "paper", "scissors"].includes(left) || !["rock", "paper", "scissors"].includes(right)) {
    alert("Please enter 'rock', 'paper', or 'scissors' for both hands.");
    return;
  }

  // Reset images and classes
  $(".hand-img").removeClass("faded highlight");
  $("#icon-credit").hide();
  $("#rock-credit, #paper-credit, #scissors-credit").hide();

  // Display user's hand images
  $("#userLeft").attr("src", `images/${left}.png`);
  $("#userRight").attr("src", `images/${right}.png`);

  // Randomly keep one hand
  const userFinal = Math.random() < 0.5 ? left : right;
  const userDropId = userFinal === left ? "#userRight" : "#userLeft";
  const userKeepId = userFinal === left ? "#userLeft" : "#userRight";

  $(userDropId).addClass("faded");
  $(userKeepId).addClass("highlight");

  // AI hands
  const aiLeft = randomHand();
  const aiRight = randomHand();

  $("#aiLeft").attr("src", `images/${aiLeft}.png`);
  $("#aiRight").attr("src", `images/${aiRight}.png`);

  const aiFinal = Math.random() < 0.5 ? aiLeft : aiRight;
  const aiDropId = aiFinal === aiLeft ? "#aiRight" : "#aiLeft";
  const aiKeepId = aiFinal === aiLeft ? "#aiLeft" : "#aiRight";

  $(aiDropId).addClass("faded");
  $(aiKeepId).addClass("highlight");

  // Show final choices
  $("#userChoice").text(userFinal);
  $("#computerChoice").text(aiFinal);
  const resultText = compare(userFinal, aiFinal);
    $("#result").text(resultText);
    $("#modalResultText").text(resultText);
    $("#resultModal").fadeIn();
    // Modal dismiss logic
    $("#dismissBtn, #closeModal").click(function () {
    $("#resultModal").fadeOut();
    });


  // Show proper icon credit
  $("#icon-credit").show();
  if (userFinal === "rock") {
    $("#rock-credit").show();
  } else if (userFinal === "paper") {
    $("#paper-credit").show();
  } else if (userFinal === "scissors") {
    $("#scissors-credit").show();
  }
});

function randomHand() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function compare(user, ai) {
  if (user === ai) return "It's a Tie!";
  if (
    (user === "rock" && ai === "scissors") ||
    (user === "paper" && ai === "rock") ||
    (user === "scissors" && ai === "paper")
  ) return "Player Wins!";
  return "Computer Wins!";
}
