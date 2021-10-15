let number = prompt("Inserisci un numero:");

console.log("numero inserito: " + number);

if (number % 2 === 0){
    console.log("il numero è pari:" + number);
}else{
    number++
    console.log("il numero inserito è dispari. Numero incrementato: " + number);
}
