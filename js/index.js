let player = "";
let numberOfPlays = 0;
let playerScore = 0;
let computerScore = 0;
let aiChoiceArray = ["Rock", "Paper", "Scissors"];

document.getElementById("modal").addEventListener("submit", function (e) {
  // Prevent page from reloading
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
  numberOfPlays = parseInt(document.querySelector('input[name="nb_of_plays"]:checked').value);

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
  const userChoice = document.querySelector('input[name="user_choice"]:checked').value;
  const rand = Math.floor(Math.random() * 3);
  const aiChoice = aiChoiceArray[rand];
  let playWinner = "";
  let finalWinner = "";

  if (userChoice !== aiChoice) {
    // Player loses
    if (
      (userChoice === "Rock" && aiChoice === "Paper") ||
      (userChoice === "Paper" && aiChoice === "Scissors") ||
      (userChoice === "Scissors" && aiChoice === "Rock")
    ) {
      playWinner = "Computer";
      computerScore++;
      // Player wins
    } else {
      playWinner = player;
      playerScore++;
    }
    // Computer and Player both play the same hand
  } else {
    playWinner = "Nobody";
  }

  // Update score board
  document.getElementById("player_score").innerText = playerScore;
  document.getElementById("ai_score").innerText = computerScore;

  // Display result
  document.getElementById("player_choice").innerText = userChoice;
  document.getElementById("ai_choice").innerText = aiChoice;
  document.getElementById("winner").innerText = playWinner;

  // **TODO: add an if() condition instead of changing it at every iteration
  document.getElementById("result_section").style.display = "block";

  if (playerScore === numberOfPlays || computerScore === numberOfPlays) {
    const gameWinner = document.getElementById("game_winner");
    if (playerScore > computerScore) {
      finalWinner = player;
      gameWinner.classList.add("green");
    } else {
      finalWinner = "Computer";
      gameWinner.classList.add("red");
    }
    gameWinner.style.display = "block";
    document.getElementById("choices").style.display = "none";
    document.getElementById("game_winner_name").innerText = finalWinner;
  }
};
