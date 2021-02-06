/* This script will tell you how long it will take to get back the resources used to level up resource buildings. */
/* Adjust the world_speed variable to your world's speed and run it form browser console on wiki page of the resource building. */

window.world_speed = 1.25;

window.resource_revenue = 0;
[...$('.wikitable')[0].rows].slice(2).map((e) => {
    var cost = 0;
    var cells = [...e.cells];
    var revenue = parseInt(cells[6].innerText.trim()) * window.world_speed;
    var revenue_gain = revenue - window.resource_revenue;
    window.resource_revenue = revenue;
    cost += parseInt(cells[1].innerText.trim().replace('.', ''));
    cost += parseInt(cells[2].innerText.trim().replace('.', ''));
    cost += parseInt(cells[3].innerText.trim().replace('.', ''));
    var break_even_time = cost/revenue_gain;

    console.log('Cost:', cost, ',revenue:', revenue, 'revenue gain:', revenue_gain, 'ratio:', (revenue_gain/cost).toPrecision(5), 'break even after', break_even_time.toPrecision(5), 'hours');
});