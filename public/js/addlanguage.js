//List of all languages
const availableTags = [
    'Afrikaans',
    'Albanian',
    'Amharic',
    'Arabic',
    'Armenian',
    'Assamese',
    'Aymara',
    'Azerbaijani',
    'Bambara',
    'Basque',
    'Belarusian',
    'Bengali',
    'Bhojpuri',
    'Bosnian',
    'Bulgarian',
    'Catalan',
    'Cebuano',
    'Chichewa',
    'Chinese (Simplified)',
    'Chinese (Traditional)',
    'Corsican',
    'Croatian',
    'Czech',
    'Danish',
    'Dhivehi',
    'Dogri',
    'Dutch',
    'English',
    'Esperanto',
    'Estonian',
    'Ewe',
    'Filipino',
    'Finnish',
    'French',
    'Frisian',
    'Galician',
    'Georgian',
    'German',
    'Greek',
    'Guarani',
    'Gujarati',
    'Haitian Creole',
    'Hausa',
    'Hawaiian',
    'Hebrew',
    'Hindi',
    'Hmong',
    'Hungarian',
    'Icelandic',
    'Igbo',
    'Ilocano',
    'Indonesian',
    'Irish',
    'Italian',
    'Japanese',
    'Javanese',
    'Kannada',
    'Kazakh',
    'Khmer',
    'Korean',
    'Krio',
    'Kurdish (Kurmanji)',
    'Kurdish (Sorani)',
    'Kyrgyz',
    'Lao',
    'Latin',
    'Latvian',
    'Lingala',
    'Lithuanian',
    'Luganda',
    'Luxembourgish',
    'Macedonian',
    'Maithili',
    'Malagasy',
    'Malay',
    'Malayalam',
    'Maltese',
    'Maori',
    'Marathi',
    'Meiteilon (Manipuri)',
    'Mizo',
    'Mongolian',
    'Myanmar (Burmese)',
    'Nepali',
    'Norwegian',
    'Pashto',
    'Persian',
    'Polish',
    'Portuguese',
    'Punjabi',
    'Quechua',
    'Romanian',
    'Russian',
    'Samoan',
    'Sanskrit',
    'Scots Gaelic',
    'Sepedi',
    'Serbian',
    'Sesotho',
    'Shona',
    'Sindhi',
    'Sinhala',
    'Slovak',
    'Slovenian',
    'Somali',
    'Spanish',
    'Sundanese',
    'Swahili',
    'Swedish',
    'Tajik',
    'Tamil',
    'Tatar',
    'Telugu',
    'Thai',
    'Tigrinya',
    'Tsonga',
    'Turkish',
    'Turkmen',
    'Twi',
    'Ukrainian',
    'Urdu',
    'Uyghur',
    'Uzbek',
    'Vietnamese',
    'Welsh',
    'Xhosa',
    'Yiddish',
    'Yoruba',
    'Zulu'
];

/*
  Code provided by vitalets, 08-18-2022
  Program/source title: google-translate-api
  Source of code: https://github.com/vitalets/google-translate-api/blob/master/languages.js
*/
const langs = {
  'auto': 'Automatic',
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'am': 'Amharic',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'as': 'Assamese',
  'ay': 'Aymara',
  'az': 'Azerbaijani',
  'bm': 'Bambara',
  'eu': 'Basque',
  'be': 'Belarusian',
  'bn': 'Bengali',
  'bho': 'Bhojpuri',
  'bs': 'Bosnian',
  'bg': 'Bulgarian',
  'ca': 'Catalan',
  'ceb': 'Cebuano',
  'ny': 'Chichewa',
  'zh-CN': 'Chinese (Simplified)',
  'zh-TW': 'Chinese (Traditional)',
  'co': 'Corsican',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'dv': 'Dhivehi',
  'doi': 'Dogri',
  'nl': 'Dutch',
  'en': 'English',
  'eo': 'Esperanto',
  'et': 'Estonian',
  'ee': 'Ewe',
  'tl': 'Filipino',
  'fi': 'Finnish',
  'fr': 'French',
  'fy': 'Frisian',
  'gl': 'Galician',
  'ka': 'Georgian',
  'de': 'German',
  'el': 'Greek',
  'gn': 'Guarani',
  'gu': 'Gujarati',
  'ht': 'Haitian Creole',
  'ha': 'Hausa',
  'haw': 'Hawaiian',
  'iw': 'Hebrew',
  'hi': 'Hindi',
  'hmn': 'Hmong',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'ig': 'Igbo',
  'ilo': 'Ilocano',
  'id': 'Indonesian',
  'ga': 'Irish',
  'it': 'Italian',
  'ja': 'Japanese',
  'jw': 'Javanese',
  'kn': 'Kannada',
  'kk': 'Kazakh',
  'km': 'Khmer',
  'ko': 'Korean',
  'kri': 'Krio',
  'ku': 'Kurdish (Kurmanji)',
  'ckb': 'Kurdish (Sorani)',
  'ky': 'Kyrgyz',
  'lo': 'Lao',
  'la': 'Latin',
  'lv': 'Latvian',
  'ln': 'Lingala',
  'lt': 'Lithuanian',
  'lg': 'Luganda',
  'lb': 'Luxembourgish',
  'mk': 'Macedonian',
  'mai': 'Maithili',
  'mg': 'Malagasy',
  'ms': 'Malay',
  'ml': 'Malayalam',
  'mt': 'Maltese',
  'mi': 'Maori',
  'mr': 'Marathi',
  'mni-Mtei': 'Meiteilon (Manipuri)',
  'lus': 'Mizo',
  'mn': 'Mongolian',
  'my': 'Myanmar (Burmese)',
  'ne': 'Nepali',
  'no': 'Norwegian',
  'ps': 'Pashto',
  'fa': 'Persian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pa': 'Punjabi',
  'qu': 'Quechua',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sm': 'Samoan',
  'sa': 'Sanskrit',
  'gd': 'Scots Gaelic',
  'nso': 'Sepedi',
  'sr': 'Serbian',
  'st': 'Sesotho',
  'sn': 'Shona',
  'sd': 'Sindhi',
  'si': 'Sinhala',
  'sk': 'Slovak',
  'sl': 'Slovenian',
  'so': 'Somali',
  'es': 'Spanish',
  'su': 'Sundanese',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'tg': 'Tajik',
  'ta': 'Tamil',
  'tt': 'Tatar',
  'te': 'Telugu',
  'th': 'Thai',
  'ti': 'Tigrinya',
  'ts': 'Tsonga',
  'tr': 'Turkish',
  'tk': 'Turkmen',
  'ak': 'Twi',
  'uk': 'Ukrainian',
  'ur': 'Urdu',
  'ug': 'Uyghur',
  'uz': 'Uzbek',
  'vi': 'Vietnamese',
  'cy': 'Welsh',
  'xh': 'Xhosa',
  'yi': 'Yiddish',
  'yo': 'Yoruba',
  'zu': 'Zulu'
};
/*
  getCode function provided by vitalets, 08-18-2022
  Program/source title: google-translate-api
  Source of code: https://github.com/vitalets/google-translate-api/blob/master/languages.js
*/
function getCode(desiredLang) {
  if (!desiredLang) {
      return false;
  }

  if (langs[desiredLang]) {
      return desiredLang;
  }

  var keys = Object.keys(langs).filter(function (key) {
      if (typeof langs[key] !== 'string') {
          return false;
      }

      return langs[key].toLowerCase() === desiredLang.toLowerCase();
  });

  return keys[0] || false;
}

/*
  isSupported function provided by vitalets, 08-18-2022
  Program/source title: google-translate-api
  Source of code: https://github.com/vitalets/google-translate-api/blob/master/languages.js
*/
function isSupported(desiredLang) {
  return Boolean(getCode(desiredLang));
}

//Need to use jquery in order to run the autocomplete function
$( "#tags" ).autocomplete({
  source: availableTags,
});

//returns the word with the first letter uppercase
const upperCaseFirst = (word) => {
  const wordArr = word.split("");
  wordArr[0] = wordArr[0].toUpperCase();

  return wordArr.join("");
}

const addLanguage = async (event) => {
  event.preventDefault();
  const newLanguage = document.querySelector('#tags').value.trim();

  //If the user input is blank, show error
  if(newLanguage === ""){
    window.alert("Input cannot be left blank");
  }else if(!isSupported(newLanguage)){//If the language is not supported, show error
    window.alert("Error: Language may not be supported. Please check spelling or select from auto suggestions");
  }else{
    const short = getCode(newLanguage);
    const name = upperCaseFirst(newLanguage);
    const response = await fetch('api/languages/', {
      method: 'POST',
      body: JSON.stringify({name, short}),
      headers: {'Content-Type': 'application/json'},
    });

    if (response.ok){
      window.alert("Language succesfully added to the database!")
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".language-form").addEventListener('submit', addLanguage);
