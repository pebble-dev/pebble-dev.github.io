
hackathon_start_date = new Date("2022-10-27T19:53:00Z")
hackathon_end_date = new Date("2022-10-27T19:53:10Z")

function init() {
    document.getElementById("countdown").innerHTML = friendlyCountdown()
    document.getElementById("launchpad").src = "https://dev-portal.rebble.io/res/img/" + get_space_image()
}

function friendlyCountdown() {
    var then = hackathon_start_date.getTime()
    var now = new Date().getTime()
    var seconds = then - now;
    seconds = seconds / 1000
    var out = "";
    var days        = Math.floor(seconds/24/60/60);
    var hoursLeft   = Math.floor((seconds) - (days*86400));
    var hours       = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    var minutes     = Math.floor(minutesLeft/60);
    var remainingSeconds = Math.floor(seconds % 60);


    if (now > hackathon_end_date) {
        out = "The hackathon has ended."
        return out
    }

    if (then < now) {
        out = "Lift off! The hackathon has begun."
        return out
    }


    if (days > 0) {
        hoursText = hours == 1 ? "hour" : "hours"
        out = "<strong>" + days + "</strong> days, <strong>" + hours + "</strong> " + hoursText + "."
    } else if (hours > 0) {
        hoursText = hours == 1 ? "hour" : "hours"
        minutesText = minutes == 1 ? "minute" : "minutes"
        out = "<strong>" + hours + "</strong> " + hoursText + ", <strong>" + minutes + "</strong> " + minutesText + "."
    } else if (minutes > 0) {
        minutesText = minutes == 1 ? "minute" : "minutes"
        secondsText = remainingSeconds == 1 ? "second" : "seconds"
        out = "<strong>" + minutes + "</strong> " + minutesText + ", <strong>" + remainingSeconds + "</strong> " + secondsText + "."
    } else {
        secondsText = remainingSeconds == 1 ? "second" : "seconds"
        out = "<strong>" + remainingSeconds + "</strong> " + secondsText + "."
    }
    return "T-Minus: &nbsp;" + out
  
}
function get_space_image() {
    var now = new Date();
    if (now > hackathon_end_date) {
        return "large_icon_landed_animated.svg"
    }

    if (hackathon_start_date < now) {
        return "space.gif"
    }
    
    return "large_icon_launchpad.svg"
}
function pad(n) {
    return (n < 10 ? "0" + n : n);
  }

init()
setInterval(init, 1000)

