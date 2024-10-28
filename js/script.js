// INPUT
const userDistance = prompt("Inserisci numero di kilometri da percorrere");
const userAge = prompt("Inserisce la tua età");
const priceDistance = 0.21;

const userDistanceNum = parseInt(userDistance);
const userAgeNum = parseInt(userAge);

console.log(userDistance);
console.log(userAge);


// ESECUZIONE LOGICA

if (isNaN(userDistance)) {
    alert("Puoi inserire solo valori numerici. Aggiorna la pagina!")
} else if (isNaN(userAge)){
    alert("Puoi inserire solo valori numerici. Aggiorna la pagina!")
} else {
    const priceStandard = userDistanceNum * priceDistance;
    let promo;
    let finalPrice;
    let message; 
    if (userAgeNum < 18) {
        promo = (priceStandard / 100) * 20;
        finalPrice = priceStandard - promo;
        message = `Il prezzo del biglietto è ${finalPrice.toFixed(2)} €`;
    } else if (userAgeNum >= 65) {
        promo = (priceStandard / 100) * 40;
        finalPrice =  priceStandard - promo ;
        message = `Il prezzo del biglietto è ${finalPrice.toFixed(2)} €`;
    } else {
        message = `Il prezzo del biglietto è ${priceStandard.toFixed(2)} €`;
    }

    console.log(message);

}