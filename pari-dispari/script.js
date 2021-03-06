// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

// funzione numero casuale
function RandomNumber(max, min) {
  var risultato = Math.floor(Math.random() * max) + min;
  return risultato;
}

// funzione verifica somma di due  numeri è  pari o dispari
function sommaPari (numero1, numero2) {
  var somma = numero1 + numero2;
  if (somma % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// scelta utente ,
do {
  var sceltaUtente = prompt('scegli pari o dispari');
} while (sceltaUtente != 'pari' && sceltaUtente != 'dispari');
console.log('sceltaUtente', sceltaUtente);
do {
  var numeroUtente = parseInt(prompt('scegli un numero tra 1 e 5 compresi'));
} while (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente));
console.log('numeroUtente', numeroUtente);

// numero casuale computer
var numeroComputer = RandomNumber(5, 1);
console.log('numeroComputer', numeroComputer);

// somma numeroUtente + numeroComputer
var risultato = sommaPari(numeroComputer, numeroUtente);
console.log('risultato', risultato);

if ((risultato == true && sceltaUtente == 'pari') || (risultato == false && sceltaUtente == 'dispari')) {
  alert('utente vince!')
} else {
 alert('computer vince!')
}
