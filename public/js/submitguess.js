// Submit guess and store score if correct

if (!localStorage.getItem("score")) {
    localStorage.setItem("score", 0);
};

async function submitGuessHandler(e) {
    e.preventDefault();

    const userGuess = document.querySelector("#guess").value;
    const correctWord = document.querySelector("#englishWord").textContent;
    if (userGuess.toLowerCase() == correctWord.toLowerCase()) {
        let userScore = localStorage.getItem("score");
        userScore++;
        localStorage.setItem("score", userScore)
    }
};

const guessBtn = document.querySelector("#guessBtn");

guessBtn.addEventListener("click", submitGuessHandler)

