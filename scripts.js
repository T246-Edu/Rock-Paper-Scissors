let possibleChoices = document.querySelectorAll("img");
let userScoreEL = document.getElementById("user-score");
let computerScoreEL = document.getElementById("computer-score");
let userChoiceEL = document.getElementsByClassName("userchoice")[0];
let ComputerChoiceEL = document.getElementsByClassName("computerchoice")[0];
let StatusEL = document.getElementsByClassName("status")[0];

let userChoice = "";
let status = "Draw!";
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * items.length)];
}

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceEL.innerHTML = ` <i class="fa-solid fa-user"></i>&nbsp; ${userChoice}`;
    let computerChoice = getComputerChoice();
    ComputerChoiceEL.innerHTML = `<i class="fa-solid fa-computer"></i>&nbsp; ${computerChoice}`;
    getTheWinner(computerChoice, userChoice);
    userScoreEL.innerText = userScore;
    computerScoreEL.innerText = computerScore;
    StatusEL.innerText = status;
  })
);

function setScore(won) {
  if (won == "computer") {
    computerScore += 1;
    if (userScore > 0) {
      userScore -= 1;
    }
  } else if (won == "user") {
    userScore += 1;
    if (computerScore > 0) {
      computerScore -= 1;
    }
  }
}

function getTheWinner(computer, user) {
  if (computer == "paper" && user == "rock") {
    status = "computer won!";
    setScore("computer");
  } else if (computer == user) {
    status = "it's a draw";
  } else if (computer == "paper" && user == "scissors") {
    status = "user won!";
    setScore("user");
  } else if (computer == "rock" && user == "paper") {
    setScore("user");
    status = "user won!";
  } else if (computer == "rock" && user == "scissors") {
    setScore("computer");
    status = "computer won!";
  } else if (computer == "scissors" && user == "paper") {
    setScore("computer");
    status = "computer won!";
  } else if (computer == "scissors" && user == "rock") {
    setScore("user");
    status = "user won!";
  }
}
