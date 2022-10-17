async function firstCardHandler(e) {
    e.preventDefault();
    const language = document.querySelector("#targetLanguage").textContent;
 
    localStorage.setItem("target", language);
    
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    const response = await fetch(`/learningpage/2`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
          },
    });
    // console.log(langID)
    if (response.ok) {
        document.location.replace("/learningpage/2");
    }
};

const nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", firstCardHandler)


