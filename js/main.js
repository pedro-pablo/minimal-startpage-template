/**
 * Interval which the clock will be updated (in milliseconds).
 */
const clockInterval = 100;

/**
 * Search engine query url
 */
const searchEngineUrl = 'https://duckduckgo.com/?q=';

const tabKeyCode = 9;
const enterKeyCode = 13;
const escapeKeyCode = 27;
const searchBarElement = document.getElementById('search-bar');
const clockElement = document.getElementById('clock');
const formElement = document.getElementById('search-form');

/**
 * Return a string containing the formatted current date and time.
 */
function getDateTime() {
    const dateTime = new Date();
    let day = dateTime.getDate();
    let month = dateTime.getMonth() + 1;
    let hour = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    if (hour < 0) {
        hour = 24 + hour;
    }

    let date = (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + dateTime.getFullYear();
    let time = (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

    return date + '\n' + time;
}

function setClock() {
    clockElement.innerText = getDateTime();
}

function search() {
    let value = searchBarElement.value;
    if (!value) {
        return;
    }

    if (value.startsWith('https://') || value.startsWith('http://')) {
        window.location = value;
    } else {
        window.location = searchEngineUrl + encodeURIComponent(value);
    }
}


setClock();

setInterval(() => {
    setClock();
}, clockInterval);

searchBarElement.focus();
searchBarElement.value = '';

formElement.addEventListener('submit', (ev) => {
    ev.preventDefault();
    search();
});

document.addEventListener('keypress', (event) => {
    if (event.keyCode == escapeKeyCode) {
        searchBarElement.blur();
        searchBarElement.value = '';
    } else if (event.keyCode != tabKeyCode && event.keyCode != enterKeyCode) {
        searchBarElement.focus();
    }
});