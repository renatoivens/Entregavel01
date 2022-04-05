function startTimer(duration, display) {
    var temp = duration, min, sec;
    setInterval(function () {
        min = parseInt(temp / 60, 10);
        sec = parseInt(temp % 60, 10);
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        display.textContent = min + ":" + sec;
        if (--temp < 0) {
            temp = duration;
        }
    }, 1000);
}
window.onload = function () {
    var dur = 60 * 5; 
        display = document.querySelector('#temp'); 
    startTimer(dur, display); 
};