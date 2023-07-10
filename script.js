window.onload = function() {
  // Set the countdown date
  var countdownDate = new Date("July 31, 2023 23:59:59").getTime();

  // Update the countdown every second
  var countdown = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    // Calculate remaining time
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the remaining time in HH:MM:SS format
    var countdownElement = document.getElementById("countdown");
    countdownElement.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

    // If countdown is finished, display "Expired"
    if (distance < 0) {
      clearInterval(countdown);
      countdownElement.textContent = "Expired";
    }
  }, 1000);

  // Helper function to format time
  function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
  }
};
