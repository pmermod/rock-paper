(function () {
  const options = ["rock", "paper", "scissors"];

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", runGame);
  });

  const runGame = (e) => {
    const playerSelection = e.target.id;
    const computerSelection = getComputerSelection();
    const outcome = getOutcome(playerSelection, computerSelection);
  };

  // Continue here with displaying the outcome

  const getComputerSelection = () => {
    return options[Math.floor(Math.random() * options.length)];
  };
})();
