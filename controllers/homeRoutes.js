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

  res.render("login");
});

// router.get("/signup", async (req, res) => {
//   res.render("startpage")
// });

router.get("/startpage", withAuth, async (req, res) => {
  res.render("startpage");
});

router.get("/logout", async (req, res) => {
  res.render("homepage")
});

module.exports = router;