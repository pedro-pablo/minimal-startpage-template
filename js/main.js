const GMT = 0;

const TAB_KEYCODE = 9;
const ESCAPE_KEYCODE = 27;

function getDateTime() {
    let dateTime = new Date();
    let day = dateTime.getDate();
    let month = dateTime.getMonth() + 1;
    let hour = dateTime.getHours() + GMT;
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
    var searchBar = document.getElementById('search-bar');
    searchBar.focus();
    searchBar.value = '';

    setInterval(() => {
        document.getElementById('clock').innerText = getDateTime();
    }, 50);
    
    document.addEventListener("keydown", (event) => {
        if (event.keyCode == ESCAPE_KEYCODE) {
            searchBar.blur();
            searchBar.value = '';
        } else if (event.keyCode != TAB_KEYCODE) {
            searchBar.focus();
        } 
    });
}