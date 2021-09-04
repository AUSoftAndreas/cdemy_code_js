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

var tn1 = new Teilnehmer();
tn1.name = "Mustermann";
tn1.vorname = "Max";
tn1.geburtsdatum = new Date(1980, 1, 1);
tn1.showAnwesenheit();

var tn2 = new Teilnehmer();
tn2.nachname = "Musterfrau";
tn2.vorname = "Mia";
tn2.geburtsdatum = new Date(1990, 1, 1);
tn2.showAnwesenheit();