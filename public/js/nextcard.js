// const flipBtn = document.querySelector("#nextBtn2");

// flipBtn.addEventListener("click", nextCardHandler)
const language = document.querySelector("#targetLanguageID").textContent;
 
localStorage.setItem("target", language);

async function nextCardHandler(e) {
    e.preventDefault();
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    const intID = 4;
    const addToID = intID+1;
    const nextID = addToID.toString();
    console.log(id)
    const response = await fetch(`/learningpage/${nextID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    });
    if (response.ok) {
        document.location.replace(`/learningpage/${nextID}`);
    }
    console.log(id)
};

const nextBtn2 = document.querySelector("#nextBtn2");

nextBtn2.addEventListener("click", nextCardHandler)

