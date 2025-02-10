// gettime=>get time by milliseconds
let countdowndate = new Date("Feb 4 ,2025 20:27:59").getTime();

let counter = setInterval(() => {
    //get data NOW 
    let datenow = new Date().getTime();
    // find the difference between now and countdown date
    let diff = countdowndate - datenow;
    // get time units
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML = days;
    let hours = diff % (1000 * 60 * 60 * 24);
    document.querySelector(".hours").innerHTML = Math.floor(hours / 1000 / 60 / 60);
    let minutes = diff % (1000 * 60 * 60);
    document.querySelector(".minutes").innerHTML = Math.floor(minutes / 1000 / 60);
    let seconds = (diff % (1000 * 60));
    document.querySelector(".seconds").innerHTML = Math.floor(seconds / 1000);
    if (diff < 0) {
        clearInterval(counter);
          document.querySelector(".days").innerHTML = "0";
          document.querySelector(".hours").innerHTML = "0";
          document.querySelector(".minutes").innerHTML = "0";
          document.querySelector(".seconds").innerHTML = "0";
    }
}
    , 1000);
