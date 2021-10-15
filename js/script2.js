
/****************************************************************************/
/****************************************************************************/
/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi
fino a quando ne avrà tanti quanti l’altro.*/


const array1 = [15, 2, 7];
const array2 = [5];

/* const array1 = ['ciao'];
const array2 = ['hola', 'hello'];
 */


while (array1.length != array2.length){

    insert = Math.ceil(Math.random());

    if (array1.length < array2.length){
        array1.push(insert);
    } else {
        array2.push(insert);
    }

}

console.log("Array 1: " + array1, "Array 2: " + array2);