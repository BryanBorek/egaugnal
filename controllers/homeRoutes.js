const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Language, Word } = require("../models")
const selectedLanguage = "";

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
  res.render("learningpage", {
    displayLanguage,
    dispalyWord,
    
  })
});

router.get("/logout", async (req, res) => {
  res.render("homepage")
});

router.get("/learningcard/:id", async (req, res) => {
 
  // const displayLanguage = await Language.findByPk( {
  //   raw: true,
  // });

  const dispalyWord = await Word.findByPk(req.params.id, {
    raw: true,
  
  })
  console.log(dispalyWord)
  res.render("learningcard", {
    // displayLanguage,
    dispalyWord,
    
  })
});

router.get("/logout", async (req, res) => {
  res.render("homepage")
});

module.exports = router;