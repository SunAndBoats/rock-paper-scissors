// Step 6: Write the logic to play the entire game

const playGame = () => {
    let computerScore = 0;
    let humanScore = 0;

    // Función para que la máquina elija Rock, Paper o Scissors
    const getComputerChoice = () => {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    };

    // Función para obtener la elección del usuario
    const getHumanChoice = () => {
        const choice = prompt("Choose Rock, Paper, or Scissors:").trim().toLowerCase();
        return choice.charAt(0).toUpperCase() + choice.slice(1);
    };

    // Función para jugar una ronda
    const playRound = () => {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
        }

        console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
    };

    // Jugar 5 rondas
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);
        playRound();
    }

    // Determinar ganador final
    if (humanScore > computerScore) {
        console.log("🏆 You win the game!");
    } else if (humanScore < computerScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
};

// Llamar a la función para jugar
playGame();
