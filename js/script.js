// INPUT
const userDistance = prompt("Inserisci numero di kilometri da percorrere");
const userAge = prompt("Inserisce la tua età");
const priceDistance = 0.21;

const userDistanceNum = parseInt(userDistance);
const userAgeNum = parseInt(userAge);

console.log(userDistance);
console.log(userAge);


// ESECUZIONE LOGICA

if (isNaN(userDistance, userAge)) {
    alert("Puoi inserire solo valori numerici. Aggiorna la pagina!")
} else {
    const priceStandard = userDistanceNum * priceDistance;
    let = message; 
    if (userAgeNum < 18) {
        const promo = (priceStandard / 100) * 20;
        const finalPrice = priceStandard - promo;
        message = `Il prezzo del biglietto è ${finalPrice} €`;
    } else if (userAgeNum >= 65) {
        const promo = (priceStandard / 100) * 40;
        const finalPrice =  priceStandard - promo ;
        message = `Il prezzo del biglietto è ${finalPrice} €`;
    } else {
        console.log(priceStandard);
    }

    console.log(message);

}