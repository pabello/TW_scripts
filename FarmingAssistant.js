// Farming assistant - currently works for #1 pack containing light and #2 pack containing axe, both packs contain scouts
(function (){$("a.farm_icon_c, a.farm_icon_b, a.farm_icon_a").click(function() {$(this).closest("tr").remove();});})();

(function () {
    var scout_in_light_pack = parseInt(document.getElementsByClassName("vis")[1].getElementsByTagName("td")[5].getElementsByTagName("input")[0].value);
    var light_in_pack = parseInt(document.getElementsByClassName("vis")[1].getElementsByTagName("td")[6].getElementsByTagName("input")[0].value);
    
    var scout_in_axe_pack = parseInt(document.getElementsByClassName("vis")[2].getElementsByTagName("td")[5].getElementsByTagName("input")[0].value);
    var axe_in_pack = parseInt(document.getElementsByClassName("vis")[2].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value);
    
    
    var interval = setInterval(() => {
        var village = document.querySelectorAll('[id^=village]')[3];
        if(village == undefined) {
            console.log("No more villages. Stopping the script...")
            clearInterval(interval)
            return;
        }
    
        var scout_left = parseInt(document.getElementById("spy").innerText);
        var light_left = parseInt(document.getElementById("light").innerText);
        var axe_left = parseInt(document.getElementById("axe").innerText);
    
        var wall_level = parseInt(village.getElementsByTagName("td")[6].innerText);
        var farm_button_a =  village.getElementsByClassName("farm_icon_a")[0];
        var farm_button_b =  village.getElementsByClassName("farm_icon_b")[0];
    
        if((scout_left >= scout_in_light_pack) && (light_left >= light_in_pack)) {
            farm_button_a.click();
        }
    
        if( wall_level < 1 && ( (scout_left >= scout_in_axe_pack) && (axe_left >= axe_in_pack) ) ) {
            setTimeout(() => {farm_button_b.click()}, getRandomInt(210, 310));
        }
    
    }, getRandomInt(520, 550));
})();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}