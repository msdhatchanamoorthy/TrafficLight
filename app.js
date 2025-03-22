var redLight = document.getElementById("red");
var yellowLight = document.getElementById("yellow");
var greenLight = document.getElementById("green");

function red_light() {
    reset();
    redLight.classList.add("red");

}

function yellow_light() {
    reset();
    yellowLight.classList.add("yellow");
}

function green_light() {
    reset();
    greenLight.classList.add("green");
}
function reset() {
    redLight.classList.remove("red");
    yellowLight.classList.remove("yellow");
    greenLight.classList.remove("green");
}