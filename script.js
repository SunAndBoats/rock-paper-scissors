document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World");

    // Crear elementos dinámicamente
    const title = document.createElement("h1");
    title.textContent = "Rock Paper Scissors";
    document.body.appendChild(title);

    const btnContainer = document.createElement("div");
    document.body.appendChild(btnContainer);

    const choices = ["Rock", "Paper", "Scissors"];
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => playRound(choice));
        btnContainer.appendChild(button);
    });

    const resultsDiv = document.createElement("div");
    resultsDiv.style.marginTop = "20px";
    resultsDiv.style.fontSize = "20px";
    document.body.appendChild(resultsDiv);

    let humanScore = 0;
    let computerScore = 0;

    const getComputerChoice = () => {
        return choices[Math.floor(Math.random() * choices.length)];
    };

    const playRound = (humanChoice) => {
        if (humanScore === 5 || computerScore === 5) return;

        const computerChoice = getComputerChoice();

        let resultText = `You chose: ${humanChoice} <br> Computer chose: ${computerChoice} <br>`;

        if (humanChoice === computerChoice) {
            resultText += "It's a tie!";
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            resultText += `You win this round! ${humanChoice} beats ${computerChoice}.`;
        } else {
            computerScore++;
            resultText += `You lose this round! ${computerChoice} beats ${humanChoice}.`;
        }

        resultText += `<br><br> Score - You: ${humanScore} | Computer: ${computerScore}`;

        if (humanScore === 5) {
            resultText += "<br><br> 🏆 You win the game!";
        } else if (computerScore === 5) {
            resultText += "<br><br> 💻 Computer wins the game!";
        }

        resultsDiv.innerHTML = resultText;
    };
});
