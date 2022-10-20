const translate = require('@vitalets/google-translate-api');

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const mon = new Date()

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
    },
    format_date: (date) => {
        return `${monthNames[mon.getMonth()]}/${new Date(date).getDate()}/${new Date(date).getFullYear()} at ${new Date(date).getHours(date)}:${new Date(date).getMinutes(date)}`;
    },

};