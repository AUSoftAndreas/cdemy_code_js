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


let player1;
let player2;
let player3;
let rnd = Math.floor(Math.random() * players.length);
player1 = players[rnd];
while (!player2) {
    rnd = Math.floor(Math.random() * players.length);
    if (players[rnd] != player1) {
        if (players[rnd][1] == "M" || players[rnd][1] == "A") {
            player2 = players[rnd];
        }
    }
}
while (!player3) {
    rnd = Math.floor(Math.random() * players.length);
    if (players[rnd] != player1 && players[rnd] != player2) {
        if (players[rnd][1] == "M" || players[rnd][1] == "A") {
            player3 = players[rnd];
        }
    }
}
console.log(player1[0] + " gibt den Ball weiter an " + player2[0] + ". Der leitet weiter an " + player3[0]);
rnd = Math.random();
if (rnd < 0.5) {
    console.log("---> Leider vorbei");
} else {
    console.log("--> TOOOOOOR!!!!");
}