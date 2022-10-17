// const addBtn = document.querySelector('#addLanguage');

// const showLanguageForm = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/languageform', {
//         method: "GET",
     
//         headers: {
//             'Content-Type': 'application/json',
//           },
//     });

//     if (response.ok) {
//         document.location.replace(`/languageform`);
//     }
// }

// addBtn.addEventListener('click', showLanguageForm)


$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

// const availableLanguages = [
//     "ActionScript",
//     "AppleScript",
//     "Asp",
//     "BASIC",
//     "C",
//     "C++",
//     "Clojure",
//     "COBOL",
//     "ColdFusion",
//     "Erlang",
//     "Fortran",
//     "Groovy",
//     "Haskell"
// ]

// $( "#tags" ).autocomplete({
//     source: availableLanguages
//   });