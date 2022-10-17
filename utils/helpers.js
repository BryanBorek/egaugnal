const translate = require('@vitalets/google-translate-api');

module.exports = {
    next_card: (id) => {
        if (id < 8) {
            return id + 1;
        } else {
            return "../startpage";
        }
    },
    translate_name: async (name) => {
        const translation = await translate(name, { to: name });
        console.log(translation.text);
        return translation.text;
    }
};