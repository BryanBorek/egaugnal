const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { User, Language, Word, Scores } = require("../../models");

// Log in existing user
router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                name: req.body.username,
            },
        });
        if (!userData) {
            res
                .status(400)
                .json({ message: "Incorrect username or password. Please try again!" });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: "Incorrect username or password. Please try again!" });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userID = userData.id;
            res
                .status(200)
                .json({ user: userData, message: "You are now logged in!" });
            });
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Create a new user
router.post("/signup", async (req, res) => {
    try {
        const userData = await User.create({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Submit to scoreboard
router.post("/scorepage", async (req, res) => {
    try {
        const userScore = await Scores.create({
            lesson_score: req.body.lesson_score,
            user_id: req.session.userID,
        });
        res.status(200).json(userScore)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Logout
router.post("/logout", (req, res) => {
    console.log(req.session)
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
            console.log("logged out")
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;