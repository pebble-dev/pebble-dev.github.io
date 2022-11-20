
hackathon_start_date = new Date("2022-11-18T18:00:00Z")
hackathon_end_date = new Date("2022-11-20T23:59:59Z")

//hackathon_start_date = new Date("2022-11-16T22:19:30Z")
//hackathon_end_date = new Date("2022-11-16T22:20:30Z")

in_progress_link_href = "https://rebble.io/discord"
confetti_already = false

function init() {
    document.getElementById("countdown").innerHTML = "T-Minus: &nbsp;" + friendlyCountdown()
    document.getElementById("countdown").title = "The hackathon begins at " + hackathon_start_date
    document.getElementById("countdown-small").innerHTML = friendlyCountdown()
    document.getElementById("launchpad").src = "https://dev-portal.rebble.io/res/img/" + get_space_image()

    if (friendlyCountdown(true) != false) {
        document.getElementById("hack-status").innerHTML = friendlyCountdown(true)
    }
}

function friendlyCountdown(short = false) {
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
        out = short ? "It's over :'(" : "The hackathon has ended. Thanks for taking part!"
        document.getElementById("cb-wait").innerHTML = '<i class="far fa-check-square"></i> Wait patiently <span id="countdown-small" style="display:none;"></span>'
        return out
    }

    if (then <= now) {
        document.getElementById("cb-wait").innerHTML = '<i class="far fa-check-square"></i> Wait patiently <span id="countdown-small" style="display:none;"></span>'
        if ((now - then) < 10000) {
            tada()
            out = short ? "Hacking in progress!" : "Lift off! The hackathon has begun."
        } else {
            out = short ? "Hacking in progress!" : "<a target=\"_blank\" href=\"" + in_progress_link_href + "\"> The hackathon is in progress! </a>"
        }
        return out
    }


    if (days > 0) {
        hoursText = hours == 1 ? "hour" : "hours"
        daysText = days == 1 ? "day" : "days"
        out = "<strong>" + days + "</strong> " + daysText + ", <strong>" + hours + "</strong> " + hoursText + "."
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
    return short ? false : out
  
}
function get_space_image() {
    var now = new Date();
    if (now > hackathon_end_date) {
        return "large_icon_landed_animated.svg"
    }

    if (hackathon_start_date <= now) {
        return "large_icon_space.svg"
    }
    
    return "large_icon_launchpad.svg"
}
function pad(n) {
    return (n < 10 ? "0" + n : n);
}

function tada() {
    if (! confetti_already) {
        confetti({
                angle: randomInRange(55, 125),
                spread: randomInRange(50, 70),
                particleCount: randomInRange(50, 100),
                origin: { y: 0.6 },
                zIndex: 2000,
                disableForReducedMotion: true,
        });
        confetti_already = true;
    }
}
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

init()
setInterval(init, 1000)

