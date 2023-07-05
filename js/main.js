/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Usiamo un input in html per inserire la mail da cercare.
*/ 

// creo una costante dell'email dell'user
const userEmailInputElement = document.querySelector("#usere-email");
// creo una costante per il button 
const buttonVerify = document.querySelector("#btn-verify")

// con ".addEventListener" faccio si che quando premo il mio butto "buttonVerify"
// agisce facendo un print in console della mail che inserisco
buttonVerify.addEventListener("click", function () {
    let userEmail = userEmailInputElement.value

    console.log(userEmail)
})