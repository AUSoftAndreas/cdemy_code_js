"use strict"

function calculate() {
    let x = document.getElementById("wert1").value;
    let y = document.getElementById("wert2").value;
    let z = x * y;
    document.getElementById("summe").innerHTML = z;
};