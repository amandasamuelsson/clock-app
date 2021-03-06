window.onload = main;

function main() {
    startClock();
}

function startClock() {
    setInterval (updateClock, 1000);
} 

function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours = formatValue(hours);
    minutes = formatValue(minutes);
    seconds = formatValue(seconds);
    
    //update time 
    const timeHolder = document.getElementById('time');
    timeHolder.innerText = hours + ':' + minutes + ':' + seconds

    //update weekday 
    const weekdayHolder = document.getElementById('weekday')
    weekdayHolder.innerText = getWeekday(date);

    //update date
    const monthHolder = document.getElementById('month');
    monthHolder.innerText = getMonth(date);
}

function getMonth(date) {
    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth();

    const prefix = dayOfMonth + ' ';

    switch (monthIndex) {
        case 0: return prefix + 'Januari';
        case 1: return prefix + 'Februari';
        case 2: return prefix + 'Mars';
        case 3: return prefix + 'April';
        case 4: return prefix + 'Maj';
        case 5: return prefix + 'Juni';
        case 6: return prefix + 'Juli';
        case 7: return prefix + 'Augusti';
        case 8: return prefix + 'September';
        case 9: return prefix + 'Oktober';
        case 10: return prefix + 'November';
        case 11: return prefix + 'December';
    }
}

function getWeekday(date) {
    const weekdayIndex = date.getDay();
    switch (weekdayIndex) {
        case 0: return 'Söndag';
        case 1: return 'Måndag';
        case 2: return 'Tisdag';
        case 3: return 'Onsdag';
        case 4: return 'Torsdag';
        case 5: return 'Fredag';
        case 6: return 'Lördag';
    }
    
}

function formatValue(value) {
    if ( value < 10) {
        return '0' + value;
    }
    return value;
}

