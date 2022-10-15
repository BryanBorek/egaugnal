const router = require("express").Router();
const withAuth = require("../../utils/auth");
const {Language} = require("../../models");

//ROUTE: api/languages/
router.post('/', withAuth, async (req, res) => {
    try{
        const languageData = await Language.create(req.body);
        res.status(200).json(languageData);
    } catch(err) {
        res.status(400).json(err);
    }

})



module.exports = router;

