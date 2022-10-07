// INPUT
// - Il numero di chilometri da percorrere
const kilometresInput = document.getElementById("kilometres");
const kilometres = parseFloat(kilometresInput.value);
console.log(kilometres, typeof kilometres);
// - Età del passeggero
const userAgeInput = document.getElementById("userage");
const userAge = parseInt(userAgeInput.value);
console.log(userAge, typeof userAge);
// BUTTON
const submit = document. getElementById("submit");

// PROCESSING
// PRICE
const price = 0.21;
const bill = kilometres * 0.21;
console.log(bill, typeof bill);
// DISCOUNT
const discountY = bill * 0.8;
console.log(discountY, typeof discountY);
const discountE = bill * 0.6;
console.log(discountE, typeof discountE);
// COMPUTING
let finalPrice = bill
    if (userAge < 18)
        finalPrice = discountY;
    else if (userAge > 65)
        finalPrice = discountE
    console.log(finalPrice, typeof finalPrice);   
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// OUTPUT