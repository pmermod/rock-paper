(function () {
  const options = ["rock", "paper", "scissors"];

  const getComputerChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", playGame);
  });
})();
