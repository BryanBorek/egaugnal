const userScore = document.querySelector("#userScore");

const lessonScore = localStorage.getItem("score");

userScore.textContent = `Your score on the last session was ${lessonScore}`

async function submitNewScoreHandler(e) {
    e.preventDefault();
    const lesson_score = document.querySelector("#newScore").value;
    localStorage.clear();
    const response = await fetch("/api/users/scorepage", {
        method: "POST",
        body: JSON.stringify({ lesson_score }),
        headers: { "Content-Type": "application/json" },
    });
    console.log("body"+response.body)
    if (response.ok) {
          console.log("submit")
        document.location.reload();
      } else {
        alert("Failed to log score.");
      }
};

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", submitNewScoreHandler)