"Strict mode"

class Teilnehmer {
    
    #name;
    #vorname;

    constructor(name, vorname) {
        this.#vorname = vorname;
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        console.log('Der Name wurde geändert');
        this.#name = name;
    }

    get vorname() {
        return this.#vorname;
    }

    set vorname(vorname) {
        this.#vorname = vorname;
    }

    showAnwesenheit() {
        // Methode zum Anzeigen der Anwesenheit
        console.log('Der TN namens ' + this.#vorname + ' ' + this.#name + ' war nie da');
    }
}

var tn1 = new Teilnehmer('Mustermann', 'Max');
tn1.showAnwesenheit();

var tn2 = new Teilnehmer();
tn2.showAnwesenheit();

var tn3 = new Teilnehmer('Mustermann', 'Mia');
tn3.name = 'Musterfrau';
tn3.showAnwesenheit();
console.log('Wir können direkt auf public Attribute bzw. Getter zugreifen: ' + tn3.name);