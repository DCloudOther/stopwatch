let mins = 0;
let secs = 0;
let tens = 0;
let tens_int;
let secs_int;
let mins_int;

let start = () => {
    // Start the stopwatch
    let update_tens = () => {
        tens++;
        document.getElementById('tens').innerHTML = tens;
    }
    let update_secs = () => {
        tens = 0;
        secs++;
        document.getElementById('secs').innerHTML = secs;
    }
    let update_mins = () => {
        secs = 0;
        mins++;
        document.getElementById('mins').innerHTML = mins;
        document.getElementById('secs').innerHTML = secs;
    }
    tens_int = setInterval(update_tens, 10);
    secs_int = setInterval(update_secs, 1000);
    mins_int = setInterval(update_mins, 60000);

}

let reset = () => {
    // Reset the stopwatch
    document.getElementById('mins').innerHTML = 0;
    document.getElementById('secs').innerHTML = 0;
    document.getElementById('tens').innerHTML = 0;
}

let stop = () => {
    // Stop the stopwatch
    clearInterval(tens_int);
    clearInterval(secs_int);
    clearInterval(mins_int);
    reset();
}