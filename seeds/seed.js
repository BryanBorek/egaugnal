const sequelize = require('../config/connection');
const { User, Language, Word } = require('../models');

const userData = require('./userData.json');
const languageData = require('./languageData.json');
const wordData = require('./wordData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Language.bulkCreate(languageData);
    await Word.bulkCreate(wordData);


    process.exit(0);
};

seedDatabase();