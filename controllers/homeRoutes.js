const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Language, Word } = require("../models")
const selectedLanguage = "";
const googleTTS = require('google-tts-api');
const translate = require('@vitalets/google-translate-api');

router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  })
});

router.get("/login", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.redirect("/startpage");
});



router.get("/startpage", withAuth, async (req, res) => {
  const language = await Language.findAll(
    { raw: true,}
  )
  
  res.render("startpage", {
    language,
  });
});

router.get("/learningpage/:id", async (req, res) => {
 
  const displayLanguage = await Language.findByPk(req.params.id, {
    raw: true,
  });

  const dispalyWord = await Word.findOne({
    raw: true,
    where: {
      id: 1,
    }
  })
  //Transforms the english word to the desired language
  const engToLan = await translate(dispalyWord.word_name, {to: displayLanguage.name});
  //Use the desired language to pronounce the converted word
  const audioBase64 = await googleTTS.getAudioBase64(engToLan.text, {
    lang: displayLanguage.short, 
    slow: false, 
    host: 'https://translate.google.com', 
    timeout: 10000,
})
  const audioSource = `data:audio/wav;base64,${audioBase64}`;
  res.render("learningpage", {
    displayLanguage,
    dispalyWord,
    audioSource
    
  })
});

router.get("/logout", async (req, res) => {
  res.render("homepage")
});

router.get("/learningcard/:id", async (req, res) => {

  const dispalyWord = await Word.findByPk(req.params.id, {
    raw: true,
  
  })
  console.log(dispalyWord)
  res.render("learningcard", {
    dispalyWord,
    
  })
});

router.get("/logout", async (req, res) => {
  res.render("homepage")
});

module.exports = router;