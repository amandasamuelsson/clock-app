window.onload = main;

function main() {
    startClock();
}




function startClock() {
    setInterval (updateClock, 1000);
} 

function updateClock() {
    const date = new Date();
    const timeHolder = document.getElementById('time');
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    timeHolder.innerText = hours + ':' + minutes + ':' + seconds
    
}

