async function nextCardHandler(e) {
    e.preventDefault();
    
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    
    const response = await fetch(`/learningcard/${id}`, {
        method: "GET",
     
        headers: {
            'Content-Type': 'application/json',
          },
    });
    
    if (response.ok) {
        document.location.replace(`/learningcard/2`);
    }
};

const nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", nextCardHandler)