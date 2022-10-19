async function flipCardHandler(e) {
    e.preventDefault();
    console.log("click")
    let wordToSave = document.querySelector("#wordToLearn").textContent;
    let wordToLearn = document.querySelector("#wordToLearn");
    const englishWord = document.querySelector("#englishWord").textContent;
    localStorage.setItem("foreignWord", wordToSave)
    wordToLearn.textContent = englishWord;
};

const flipBtn = document.querySelector("#flipBtn");

flipBtn.addEventListener("click", flipCardHandler);

//back card function
async function backCardHandler(e) {
    e.preventDefault();
    console.log("click")
    const wordToLearn = localStorage.getItem("foreignWord");
    let englishWord = document.querySelector("#wordToLearn");
    console.log(wordToLearn)
    englishWord.textContent = wordToLearn;
};

const backBtn = document.querySelector("#backBtn");

backBtn.addEventListener("click", backCardHandler)
