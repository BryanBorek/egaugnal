const router = require("express").Router();
const withAuth = require("../utils/auth");
const hasAudio = require("../utils/audioSupport");
const { User, Language, Word, Scores } = require("../models")
const googleTTS = require('google-tts-api');
const translate = require('@vitalets/google-translate-api');

router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  })
});

router.get("/login", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/startpage");
    return;
  }

  res.render("startpage");
});

router.get("/startpage", withAuth, async (req, res) => {
  const language = await Language.findAll(
    { raw: true, }
  )
  res.render("startpage", {
    language,
  });
});


router.get("/languageform", withAuth, async(req, res) => {
  res.render("languageform");
})

router.get("/learningpage/languageId/:languageId/wordIndex/:wordIndex", async (req, res) => {
  const languageId = parseInt(req.params.languageId);
  const wordIndex = parseInt(req.params.wordIndex);
  const selectedLanguage = await Language.findByPk(languageId, {
    raw: true,
  });
  //find all words in database and count them
  const wordResponse = await Word.findAndCountAll({
    raw: true,
    offset: wordIndex,
    limit: 1,
  })
  const displayWord = wordResponse.rows[0]
  //Do not show Next button if there are no more words
  let nextBtnURL;
  const nextIndex = wordIndex + 1;
  const maximumIndex = wordResponse.count - 1;
  // Check if there are still words in the database
  if (nextIndex <= maximumIndex) {
    nextBtnURL = `/learningpage/languageId/${languageId}/wordIndex/${wordIndex + 1}`;
  }
  //Transforms the english word to the desired language
  const transformWord = await translate(displayWord.word_name, { to: selectedLanguage.short });
  const foreignWord = transformWord.text;

  //If the selected language has audio, create an audio for it
  let audioSource;
  if(hasAudio(selectedLanguage.name)){
    //Use the desired language to pronounce the converted word
    const audioBase64 = await googleTTS.getAudioBase64(foreignWord, {
      lang: selectedLanguage.short,
      slow: false,
      host: 'https://translate.google.com',
      timeout: 10000,
    })
    //Create the audio
    audioSource = `data:audio/wav;base64,${audioBase64}`;
  }else {
    //If the language does not have audio support, leave it as an empty string
    audioSource = "";
  }

  res.render("learningpage", {
    displayWord,
    foreignWord,
    audioSource,
    selectedLanguage,
    languageId,
    transformWord,
    nextBtnURL,
  })
});

// Submit lesson score to the scoreboard
router.get("/scorepage", async (req, res) => {
  const userScores = await User.findByPk(req.session.userID,
    { 
      attributes: {
        exclude: [
          "password",
        ]
      },
      include: [{
        model: Scores
      }]
    }
  );
  const score = userScores.get({ plain: true })
  console.log(userScores)
  res.render("scorepage", {
    
    score,
    display: score.scores
  })
})

router.get("/logout", async (req, res) => {
  res.render("homepage")
});
module.exports = router;