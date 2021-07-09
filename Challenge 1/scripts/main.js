//Distance traveled
function distanceTraveled() {
    var days = parseFloat(document.getElementById("days").value);
        var distanceTraveled = days * 960000;
        document.getElementById("distance_traveled").innerHTML = "The amount of distance traveled is currently: " + distanceTraveled + " kilometers.";
}

//Atmosphere
function atmosphere() {
    document.getElementById("temperature_inside").innerHTML = "Temperature inside: " + Math.floor(Math.random() * 6) + 1 + "°C";
    document.getElementById("temperature_outside").innerHTML = "Temperature outside: -" + Math.floor(Math.random() * 25) + 1 + "°C";
}

//Speed
function speed() {
    document.getElementById("speed").innerHTML = Math.floor(Math.random() * 69) + "." + Math.floor(Math.random() * 420) + " Km/h";
}

//Fuel
function fuel() {
    document.getElementById("fuel").innerHTML = Math.floor(Math.random() * 69420) + Math.floor(Math.random() * 69420) + " L";
}

//Supplies
function food() {
    var code = parseFloat(document.getElementById("code").value);
    var foodLeft = Math.floor(Math.random() * code);
     document.getElementById("food").innerHTML = "You have " + foodLeft + " kg of food on your name.";
    if(foodLeft < 500)  {
        document.getElementById("warningFood").innerHTML = "Order more food, otherwise you're gonna die of starvation.";
    }
    else{
        document.getElementById("warningFood").innerHTML = "You have more than enough food for the rest of the journey.";
    }
}

function water() {
    var code = parseFloat(document.getElementById("code").value);
    var waterLeft = Math.floor(Math.random() * 1001);
     document.getElementById("water").innerHTML = "You have " + waterLeft + " L of water on your name.";
    if(waterLeft < 500)  {
        document.getElementById("warningWater").innerHTML = "Order more water, otherwise you're gonna die of dehydration.";
    }
    else{
        document.getElementById("warningWater").innerHTML = "You have more than enough water for the rest of the journey.";
    }
}

//Gravity converter
function gravityConverter() {
    var gravity = parseFloat(document.getElementById("gravityEarth").value);
        var gravityConverter = gravity * 4.20;
        document.getElementById("gravity").innerHTML = gravity + " m/s2 Earth gravity is equal to " + gravityConverter.toFixed(2) + " m/s2 Mars gravity.";
}

//Miles converter
function milesConverter() {
    var miles = parseFloat(document.getElementById("milesEarth").value);
        var milesConverter = miles * 6.9;
        document.getElementById("miles").innerHTML = miles + " Earth miles is equal to " + milesConverter.toFixed(2) + " Mars miles.";
}