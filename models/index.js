const User = require("./User");
const Language = require("./Language");
const Word = require("./Word");
const Scores = require("./Scores");

User.hasMany(Scores, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Scores.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = {
    User,
    Language,
    Word,
    Scores,
};