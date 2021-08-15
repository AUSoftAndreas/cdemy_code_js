"use strict"

function calculate() {
    let x = document.getElementById("wert11").value;
    let y = document.getElementById("wert12").value;
    let z = x * y;
    let a = document.getElementById("wert21").value;
    let b = document.getElementById("wert22").value;
    let c = a + b;
    let testA = 3;
    let testB = 4;
    let testC = testA + testB;
    document.getElementById("ergebnis1").innerHTML = z;
    document.getElementById("ergebnis2").innerHTML = c;
    document.getElementById("ergebnis3").innerHTML = testC;

};