// Set the target date and time for the countdown (in UTC)
const targetDate = new Date("2023-09-20T01:00:00Z");

function updateCountdown() {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Countdown expired!";
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

updateCountdown(); // Initial call to set the timer display
const timer = setInterval(updateCountdown, 1000); // Update the timer every second

