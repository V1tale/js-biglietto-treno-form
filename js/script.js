// INPUT
const kilometresInput = document.getElementById("kilometres");
const userAgeInput = document.getElementById("userage");
const submit = document. getElementById("submit");
// PROCESSING
submit. addEventListener("click", function () {
    
    const kilometres = parseFloat(kilometresInput.value);
    console.log(kilometres, typeof kilometres);
    const userAge = parseInt(userAgeInput.value);
    console.log(userAge, typeof userAge);
    // DISCOUNT
    let price = kilometres * 0.21;
    console.log(price, typeof price); 
    if (userAge < 18)
    price = price * 0.8;
    else if (userAge > 65)
    price = price * 0.6;
    console.log(price, typeof price);
    const priceResult = parseFloat(price.toFixed(2));
    console.log(priceResult, typeof priceResult);
// DISCOUNT STRING
    let discountPerAge = "0";
    if (userAge < 18)
    discountPerAge = "20%";
    else if (userAge > 65)
    discountPerAge = "40%";
    // TICKET NUMBER
    const ticketNumber = parseInt(Math.random() * (10000));
// OUTPUT
    document. getElementById("km").innerHTML = `Chilometri da percorrere: ${kilometres}`;
    document. getElementById("age").innerHTML = `La tua età: ${userAge}`;
    document. getElementById("finalbill").innerHTML = `Il prezzo: € ${priceResult}`;
    document. getElementById ("discount"). innerHTML = `Sconto applicato ${discountPerAge}`;
    document. getElementById ("ticket") .innerHTML = `il numero del tuo biglietto: ${ticketNumber}`;    
})