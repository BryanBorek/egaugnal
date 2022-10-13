const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Language, Word } = require("../models")

router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  })
});

router.get("/login", async (req, res) => {
  res.render("startpage", {
    loggedIn: req.session.loggedIn,
  })
});

router.get("/signup", async (req, res) => {
  res.render("startpage")
});

router.get("/dashboard", withAuth, async (req, res) => {
  res.render("dashboard");
});

router.get("/logout", async (req, res) => {
  res.render("homepage")
});

module.exports = router;