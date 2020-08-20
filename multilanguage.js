var languages = {
    'en': {
        text: "Hello"
    },
    'de': {
        text: "Hallo"
    },
    'es': {
        text: "Hola"
    },
    'fr': {
        text: "Salut"
    },
    'nl': {
        text: "Hallo"
    },
    'it': {
        text: "Ciao"
    },
    'pl': {
        text: "Dzień Dobry"
    },
    'pt': {
        text: "Olá"
    },
    'ru': {
        text: "Привет"
    },
    'uk': {
        text: "Вітаю!"
    }
}

var navlang = navigator.language;
var langstr = navlang.substring(0, 2);
var lang = languages[navlang];

if (langstr in languages) {
    document.getElementById('greeting').innerHTML = languages[langstr]['text'];
} else {
    document.getElementById('greeting').innerHTML = languages['en']['text'];
}