const timeOffset = 0;
const datetimeInterval = 100;
const tabKeyCode = 9;
const escapeKeyCode = 27;
const searchBarElement = document.getElementById('search-bar');
const clockElement = document.getElementById('clock');

/**
 * Return a string containing the formatted current date and time.
 */
function getDateTime() {
    let dateTime = new Date();
    let day = dateTime.getDate();
    let month = dateTime.getMonth() + 1;
    let hour = dateTime.getHours() + timeOffset;
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    if (hour < 0) {
        hour = 24 + hour;
    }
    let date = (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + dateTime.getFullYear();
    let time = (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

    return date + '\n' + time;
}

window.onload = () => {
    setInterval(() => {
        clockElement.innerText = getDateTime();
    }, datetimeInterval);

    searchBarElement.focus();
    searchBarElement.value = '';

    document.addEventListener('keydown', (event) => {
        if (event.keyCode == escapeKeyCode) {
            searchBarElement.blur();
            searchBarElement.value = '';
        } else if (event.keyCode != tabKeyCode) {
            searchBarElement.focus();
        } 
    });
}