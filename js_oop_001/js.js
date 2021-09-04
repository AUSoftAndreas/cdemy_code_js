"Strict mode"

class Teilnehmer {
    addAbmahnung() {
        // Methode zum Hinzufügen einer Abmahnung
    }

    delete() {
        // Methode zum Löschen des Teilnehmers
    }

    showAnwesenheit() {
        // Methode zum Anzeigen der Anwesenheit
        console.log('Der TN namens ' + this.vorname + ' ' + this.name + ' war nie da');
    }
}

var tn = new Teilnehmer();
tn.name = "Mustermann";
tn.vorname = "Max";
tn.geburtsdatum = new Date(1980, 1, 1);
tn.showAnwesenheit();