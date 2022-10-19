const supportedAudios = [
    'Afrikaans',
    'Albanian',
    'Arabic',
    'Bengali',
    'Bosnian',
    'Bulgarian',
    'Catalan',
    'Chinese (Simplified)',
    'Chinese (Traditional)',
    'Croatian',
    'Czech',
    'Danish',
    'Dutch',
    'English',
    'Estonian',
    'Filipino',
    'Finnish',
    'French',
    'German',
    'Greek',
    'Gujarati',
    'Hebrew',
    'Hindi',
    'Hungarian',
    'Icelandic',
    'Indonesian',
    'Italian',
    'Japanese',
    'Javanese',
    'Kannada',
    'Khmer',
    'Korean',
    'Latvian',
    'Malay',
    'Malayalam',
    'Marathi',
    'Myanmar (Burmese)',
    'Nepali',
    'Norwegian',
    'Polish',
    'Portuguese',
    'Romanian',
    'Russian',
    'Serbian',
    'Sinhala',
    'Slovak',
    'Spanish',
    'Sundanese',
    'Swahili',
    'Swedish',
    'Tamil',
    'Telugu',
    'Thai',
    'Turkish',
    'Ukrainian',
    'Urdu',
    'Vietnamese',

];

//Function to check if a language contains audio
const hasAudio = (language) => {
    for(const lang of supportedAudios){
        if (lang === language){
            return true;
        }
    }

    return false;
}

module.exports = hasAudio;