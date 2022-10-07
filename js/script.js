// INPUT
// - Il numero di chilometri da percorrere
const kilometresInput = document.getElementById("kilometres");
const kilometres = parseInt(kilometresInput.value);
console.log(kilometres, typeof kilometres);
// - Età del passeggero
const userAgeInput = document.getElementById("userage");
const userAge = parseInt(userAgeInput.value);
console.log(userAge, typeof userAge);
// PROCESSING
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// OUTPUT