/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Usiamo un input in html per inserire la mail da cercare.
*/

// creo una costante dell'email dell'user
const userEmailInputElement = document.querySelector("#usere-email");

// creo le costanti per i button 
const buttonVerify = document.querySelector("#btn-verify");
const buttonReload = document.querySelector("#btn-reload");

// creo un array per le mie varie email
const allEmail = ["vane@g.com", "luigi@g.com", "piero@g.com", "marco@g.com"];

// con ".addEventListener" faccio si che quando premo il mio butto "buttonVerify"
// agisce facendo un print in console della mail che inserisco
buttonVerify.addEventListener("click", function () {
    let userEmail = userEmailInputElement.value;
    const mailVerification = userEmail;
    // creo la costante per cambiare colore alla validation 
    const titleDanger = document.querySelector("#validation-answer");
    // creo una variabile per far si che la condizione sia false
    let emailFound = false;

    // creo un ciclo for per verificare se la mia mail si trova all'interno
    // del mi array, quindi controllo che sia valida
    for (let i = 0; i < allEmail.length; i++) {
        const currentEmail = allEmail[i];

        if (currentEmail === mailVerification) {
            emailFound = true;
        }
    }

    if (emailFound === true) {
        document.getElementById("validation-answer").innerHTML = `La tua e-mail è valida`;
        titleDanger.classList.remove("text-danger");
    } else {
        document.getElementById("validation-answer").innerHTML = `La tua e-mail non è valida`;
        titleDanger.classList.add("text-danger");
    }
})

buttonReload.addEventListener("click", function () {
    location.reload();
})