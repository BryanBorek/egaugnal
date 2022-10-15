async function nextCardHandler(e) {
    e.preventDefault();
    console.log("clickclikcljdkshfkjdshafkadskj")
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
        // document.location.reload()
    }
    console.log(id)
};

const nextBtn = document.querySelector("#nextBtn2");

nextBtn.addEventListener("click", nextCardHandler)