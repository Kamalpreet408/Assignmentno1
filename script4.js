$(document).ready(function() {
    const hoursFirst = $('.hours .first .number');
    const hoursSecond = $('.hours .second .number');
    const minutesFirst = $('.minutes .first .number');
    const minutesSecond = $('.minutes .second .number');
    const secondsFirst = $('.seconds .first .number');
    const secondsSecond = $('.seconds .second .number');

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        hoursFirst.text(hours[0]);
        hoursSecond.text(hours[1]);
        minutesFirst.text(minutes[0]);
        minutesSecond.text(minutes[1]);
        secondsFirst.text(seconds[0]);
        secondsSecond.text(seconds[1]);
    }
    setInterval(updateClock, 1000);
    updateClock();
});
