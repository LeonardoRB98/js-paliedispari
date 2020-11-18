// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// 1. chiedo all'utente una parola
var parola = prompt('inserisci una parola');
console.log(parola);
if (palindroma(parola) == true) {
  alert('parola palindroma');
} else {
  alert('parola non palindroma')
}





function palindroma(parola) {
  // 2 scompongo la parola in lettere e pusho le lettere nell'array parolaLettere
  var parolaScomposta = parola.split('');

  // 3 creo array con il contenuto dell'array parolaScomposta ma al contrario
  var parolaReverse = [];
  for (var i = 0; i < parolaScomposta.length; i++) {
    parolaReverse.push(parolaScomposta[i]);
  }
  parolaReverse.reverse();
  var parola1 = parolaScomposta.toString();
  var parola2 = parolaReverse.toString();
  if ( parola1 == parola2 ) {
    return true;
  } else {
    return false;
  }
}
