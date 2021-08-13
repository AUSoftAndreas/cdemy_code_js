"use strict"

var players = [
    ["Neuer", "TW"],
    ["Upamecano", "V"],
    ["Hernandez", "V"],
    ["Davies", "V"],
    ["Parvard", "V"],
    ["Kimmich", "M"],
    ["Goretzka", "M"],
    ["Müller", "M"],
    ["Sane", "A"],
    ["Gnabry", "A"],
    ["Lewandowski", "A"]
];

chance();

function chance() {
    let player1 = getPlayer();
    let player2 = getPlayerOffensiv();
    let player3 = getPlayerOffensiv();
    console.log(player1[0] + " gibt den Ball weiter an " + player2[0] + ". Der leitet weiter an " + player3[0]);
    if (getTor()) {
        console.log("--> TOOOOOOR!!!!");
    } else {
        console.log("---> Leider vorbei");
    }
}

function getPlayer() {
    let rnd = Math.floor(Math.random() * players.length);
    return players[rnd];
}

function getPlayerOffensiv() {
    let player = getPlayer();
    if (player[1] == "A" || player[1] == "M") {
        return player;
    } else {
        return getPlayerOffensiv();
    }
}

function getTor() {
    let rnd = Math.random();
    return (rnd < 0.5);
}