// Send attact to come in at a specific time
var time = prompt("What time should the military strike?");
if (time != null) {
    var interval = setInterval(() => {
        var attack_clock = document.getElementById("date_arrival").getElementsByClassName("relative_time")[0].innerText.split(" ");
        var entering_time = attack_clock[attack_clock.length-1];
        if (entering_time == time) {
            document.getElementById("troop_confirm_go").click();
            clearInterval(interval);
        }
    }, 200);
}
// TODO: Popup with confirmation of the entering time
// TODO: Allow spaces for better QoL
