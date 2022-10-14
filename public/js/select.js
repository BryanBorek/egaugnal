async function selectCard(e) {
    e.preventDefault();
    document.location.replace("/learningpage");
}


// document.querySelectorAll("#foreign_language").addEventListener("click", selectCard);
const languages = document.querySelectorAll("#foreign_language")
console.log(languages)
languages.on("click", selectCard)