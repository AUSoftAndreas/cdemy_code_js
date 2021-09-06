// // Kommentar entfernen, um Inhalt zu analysieren

// void onlyPositional(int a, int b) {
//   print(a * b);
// }

// void optionalPositional1(int a, [int? b]) {
//   print(a * (b ?? 3));
// }

// void optionalPositional2(int a, [int b = 3]) {
//   print(a * b);
// }

// void named1({int? a, int? b}) {
//   print((a ?? 1) * (b ?? 2));
// }

// void named2({int a = 1, int b = 2}) {
//   print(a * b);
// }

// void named3({required int a, required int b}) {
//   print(a * b);
// }

// void main() {
//   onlyPositional(1, 2);
//   onlyPositional(1); // Fehler, weil 1 Parameter fehlt
//   optionalPositional1(1, 2);
//   optionalPositional1(1); // geht weil ?
//   optionalPositional2(1, 2);
//   optionalPositional2(1); // geht weil Standardwert
//   named1(a: 1, b: 2);
//   named1(b: 1); // geht weil ?
//   named2(a: 1, b: 2);
//   named2(b: 1); // geht weil Standardwert
//   named3(b: 3, a: 2);
//   named3(a: 1); // geht nicht weil required
// }
