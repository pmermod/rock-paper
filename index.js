(function () {
  const options = ["rock", "paper", "scissors"];

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", runGame);
  });

  // This function defines the computer selection and player selection for the function that will determine who is the winner. It sets the result of the future getOutcome function equal to outcome
  const runGame = (e) => {
    const playerSelection = e.target.id;
    const computerSelection = getComputerSelection();
    const outcome = getOutcome(playerSelection, computerSelection);
  };

  // Continue here with displaying the outcome and define getOutcome function

  const getComputerSelection = () => {
    return options[Math.floor(Math.random() * options.length)];
  };
})();
