const router = require("express").Router();
const withAuth = require("../../utils/auth");
const {Language} = require("../../models");
const translate = require('@vitalets/google-translate-api');

//ROUTE: api/languages/
//Add a new language to the db
router.post('/', withAuth, async (req, res) => {
    try{
        const languageCheck = await Language.findOne(
            {
                where: {
                    name: req.body.name
                }
            });
        //If the language already exists in the db, do not add it again
        if(languageCheck){
            res.status(400).json({message: "This language already exists in the database!"});
            return;
        }
        const transformWord = await translate(req.body.name, { to: req.body.name });
        const native = transformWord.text;
        const languageData = await Language.create({
            name: req.body.name,
            short: req.body.short,
            native: native
        });
        res.status(200).json(languageData);
    } catch(err) {
        res.status(500).json(err);
    }

})



module.exports = router;

