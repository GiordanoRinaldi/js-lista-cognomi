//1. chiedi all’utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
var cognomeUtenteMod = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
console.log(cognomeUtenteMod);
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var cognomi = [ 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli' ];
cognomi.push(cognomeUtenteMod);
//3. stampa la lista ordinata alfabeticamente
alert("Questa é la lista dei cognomi: " + cognomi.sort());
console.log(cognomi.sort());
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log(cognomi.indexOf(cognomeUtenteMod) +1 );
alert("il tuo cognome si trova in " + (cognomi.indexOf(cognomeUtenteMod) +1) + " posizione" );
