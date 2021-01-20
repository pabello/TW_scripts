// Send attact to come in at a specific time
var interval = setInterval(() => {
    var entering_time = document.getElementById("date_arrival").getElementsByClassName("relative_time")[0].innerText.split(" ")[2];
    if (entering_time == '23:30:31') {
        document.getElementById("troop_confirm_go").click();
        clearInterval(interval);
    }
}, 200);