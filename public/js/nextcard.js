// const translate = require("@vitalets/google-translate-api")

// async function translate('kutya', {from: 'hu', to: 'en'}).then(res => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
// }).catch(err => {
//     console.error(err);
// });

// const flipBtn = document.querySelector("#nextBtn2");

flipBtn.addEventListener("click", nextCardHandler)

const targetLanguage = localStorage.getItem("target")

async function nextCardHandler(e) {
    e.preventDefault();
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    const intID = parseInt(id);
    const addToID = intID+1;
    const nextID = addToID.toString();

    const response = await fetch(`/learningcard/${nextID}`, {
        method: "GET",
     
        headers: {
            'Content-Type': 'application/json',
          },
    });
    if (response.ok) {
        document.location.replace(`/learningcard/${nextID}`);
    }
    console.log(id)
};

const nextBtn = document.querySelector("#nextBtn2");

nextBtn.addEventListener("click", nextCardHandler)