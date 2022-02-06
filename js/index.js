let player = "";
let numberOfPlays = 0;
let currentPlays = 0;
let playerScore = 0;
let aiScore = 0;
let aiChoiceArray = ["Rock", "Paper", "Scissors"];

document.getElementById("modal").addEventListener("submit", function (e) {
  // Prevent from page reloading
  e.preventDefault();

  // Add player's name to page
  const playerInput = document.getElementById("player_name_input").value;

  if (playerInput === "") {
    alert("Player's name can not be empty");
    return null;
  }

  player = playerInput;
  document.getElementById("player_name").innerText = playerInput;

  // Initialize play count
  numberOfPlays = document.querySelector('input[name="nb_of_plays"]:checked').value;

  // Change html & #root CSS properties
  const root = document.getElementById("root");
  root.style.opacity = 1;
  root.style.filter = "blur(0px)";
  root.style.backgroundColor = "transparent";

  // Get rid of modal
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});

const getValueFromRadio = () => {
  // if (currentPlays === numberOfPlays) {
  //   alert('This game has ended')
  // }

  const userChoice = document.querySelector(
    'input[name="user_choice"]:checked'
  ).value;
  const rand = Math.floor(Math.random() * 3);
  const aiChoice = aiChoiceArray[rand];
  let winner = "";

  if (userChoice === "Rock") {
    switch (aiChoice) {
      case "Paper":
        winner = "AI";
        aiScore++;
        break;
      case "Scissors":
        winner = player;
        playerScore++;
        break;
      default:
        winner = "Nobody";
        break;
    }
  } else if (userChoice === "Paper") {
    switch (aiChoice) {
      case "Rock":
        winner = player;
        playerScore++;
        break;
      case "Scissors":
        winner = "AI";
        aiScore++;
        break;
      default:
        winner = "Nobody";
        break;
    }
  } else {
    switch (aiChoice) {
      case "Rock":
        winner = "AI";
        aiScore++;
        break;
      case "Paper":
        winner = player;
        playerScore++;
        break;
      default:
        winner = "Nobody";
        break;
    }
  }

  document.getElementById("player_score").innerText = playerScore;
  document.getElementById("ai_score").innerText = aiScore;

  document.getElementById("player_choice").innerText = userChoice;
  document.getElementById("ai_choice").innerText = aiChoice;
  document.getElementById("winner").innerText = winner;

  currentPlays++;
};
