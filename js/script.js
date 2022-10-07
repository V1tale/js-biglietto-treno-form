// INPUT
// - Il numero di chilometri da percorrere
const kilometresInput = document.getElementById("kilometres");
const kilometres = parseFloat(kilometresInput.value);
console.log(kilometresInput, typeof kilometresInput);
// - Età del passeggero
const userAgeInput = document.getElementById("userage");
const userAge = parseInt(userAgeInput.value);
console.log(userAgeInput, typeof userAgeInput);
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

const priceResult = finalPrice.toFixed(2);
    
let discountPerAge = "0"
if (userAge < 18)
    discountPerAge = "20%"
else if (userAge > 65)
    discountPerAge = "40%"

const ticketNumber = parseInt(Math.random() * (10000));
// OUTPUT
 submit. addEventListener("click", function refreshPage() {
 document. getElementById("km").innerHTML = `Chilometri da percorrere: ${kilometres}`;
document. getElementById("age").innerHTML = `La tua età: ${userAge}`;
document. getElementById("finalbill").innerHTML = `Il prezzo: € ${priceResult}`
document. getElementById ("discount"). innerHTML = `Sconto applicato ${discountPerAge}`
document. getElementById ("ticket") .innerHTML = `il numero del tuo biglietto: ${ticketNumber}`      
})