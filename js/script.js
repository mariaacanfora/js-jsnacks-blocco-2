/****************************************************************************/
/****************************************************************************/
/*CInserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici.*/

let number = prompt("Inserisci un numero:");

console.log("numero inserito: " + number);

if (number % 2 === 0){
    console.log("il numero è pari:" + number);
}else{
    number++
    console.log("il numero inserito è dispari. Numero incrementato: " + number);
}
