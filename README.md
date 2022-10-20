# Egaugnal

## Description
As people likes to travel and engage in conversation with localas this app can help to learn a few word before the trip. The application allow the user to learn words in various languages. Users are presented with a word in the chosen foreign language and have the option to play audio to hear the word pronaunced. User also can keep score of the words that were guessed correctly. Besides the languages presented on the main screen additional languages can be added if the user wish to learn those. 

## Installation
`npm install`

## Usage

1. In the repo folder create a .env file in the root directory and add your mysql credentials to the following:

```
DB_NAME = "language_db"
DB_USER = "root"
DB_PASSWORD = "your mysql pw"
```
2. Open server.js in the integrated terminal and run `npm start`. 
3. In your browser, navigate to `http://localhost:3001` to view the web application. Users should be greeted with the following web page:

![alt text](./homescreen.png)

[Heroku Link](https://egaugnal.herokuapp.com/)
## Credit
Styling features were enhanced by https://css.glass

Google-tts api and google-translate api were used in our packages. Credit goes to 
[Vitaliy Potapov](https://github.com/vitalets) (google translate) and [Leon Huang](https://github.com/zlargon) (google text-to-speech).

## Badges
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/BryanBorek/egaugnal">