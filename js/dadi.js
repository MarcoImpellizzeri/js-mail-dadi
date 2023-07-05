/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const btnPlay = document.getElementById("btn-play");

btnPlay.addEventListener("click", function () {
    const minNumb = 1;
    const maxNumb = 6;
    let randomNumPlayer = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;
    let randomNumPc = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;
    const titleDanger = document.getElementById("result");
    
    document.getElementById("player").innerHTML = `${randomNumPlayer}`;
    document.getElementById("pc").innerHTML = `${randomNumPc}`;

    if (randomNumPlayer > randomNumPc) {
        document.getElementById("result").innerHTML = `Hai vinto!!`;
        titleDanger.classList.add("text-success");
        titleDanger.classList.remove("text-danger");
        titleDanger.classList.remove("text-primary");
    } else if (randomNumPc > randomNumPlayer) {
        document.getElementById("result").innerHTML = `Hai perso!!`;
        titleDanger.classList.add("text-danger");
        titleDanger.classList.remove("text-primary");
        titleDanger.classList.remove("text-success");
    } else if (randomNumPc === randomNumPlayer) {
        document.getElementById("result").innerHTML = `Pareggio!!`;
        titleDanger.classList.add("text-primary");
        titleDanger.classList.remove("text-danger");
        titleDanger.classList.remove("text-success");
    }
})

