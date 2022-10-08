const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("homepage")
});

router.get("/login", (req, res) => {  
    res.render("startpage");
  });

module.exports = router;