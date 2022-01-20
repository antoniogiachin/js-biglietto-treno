//Chiedo all'utente quanti chilometri deve percorrere
let userDistance = parseInt(prompt ('Inserire i Km da percorrere') );
console.log(userDistance)
//Chiedo all'utente quanti anni ha
let userAge = parseInt(prompt('Inserire la propria età'));
console.log(userAge)

//Imposto il prezzo del biglietto standard
let standardPrice= userDistance * 0.21;
console.log(standardPrice)

//Imposto prezzo biglietto over 65
let overPrice = standardPrice - ((standardPrice * 40) / 100 );
console.log(overPrice);

//Imposto prezzo biglietto under 18
let underPrice = standardPrice - ((standardPrice * 20) / 100 );
console.log(underPrice);

//Imposto operatori logici
if(userAge > 65){
    document.getElementById('usrMsg').innerHTML= 'Complimenti lei ha diritto allo sconto Over!';
    document.getElementById('usrTicket').innerHTML= 'Il prezzo del suo biglietto è: ' + overPrice.toFixed(2) + ' &euro; .';
} else if (userAge < 18){
    document.getElementById('usrMsg').innerHTML= 'Complimenti lei ha diritto allo sconto Under!';
    document.getElementById('usrTicket').innerHTML= 'Il prezzo del suo biglietto è: ' + underPrice.toFixed(2) + ' &euro; .';
} else{
    document.getElementById('usrTicket').innerHTML= 'Il prezzo del suo biglietto è: ' + standardPrice.toFixed(2) + ' &euro; . ';
}

