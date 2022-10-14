const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Language, Word } = require("../models")

router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  })
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/startpage");
    return;
  }

  res.render("startpage");
});



router.get("/startpage", withAuth, async (req, res) => {
  const language = await Language.findAll(
    { raw: true,}
  )
  res.render("startpage", {
    language,
    selectedLanguage: language.name,
  });
});

router.get("/learningpage", async (req, res) => {
  res.render("learningpage")
});

router.get("/logout", async (req, res) => {
  res.render("homepage")
});

module.exports = router;