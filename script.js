var output = new Date("Jul 20, 2020 00:00:00").getTime();
var time = setInterval(function() {
      var input = new Date().getTime();
      var difference = output - input;
      var days = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      if (difference < 0) {
        clearInterval(time);
        document.getElementById("text").innerHTML = "The scheduled Time had crossed.";
      }
    }, 1000);
