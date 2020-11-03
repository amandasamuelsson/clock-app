window.onload = main;

function main() {
    startClock();
}

function startClock() {
    setInterval (updateClock, 1000);
} 

function updateClock() {
    const timeHolder = document.getElementById('time');
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formatValue(hours);
    minutes = formatValue(minutes);
    seconds = formatValue(seconds);

    timeHolder.innerText = hours + ':' + minutes + ':' + seconds
}

function formatValue(value) {
    if ( value < 10) {
        return '0' + value;
    }
    return value;
}

