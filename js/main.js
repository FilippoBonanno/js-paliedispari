// POLINDROMA

// chiedo all'utente di inserire una parola
let userInput = prompt("Inserisci una parola:");

// in questo modo richiamo e utilizzo la funzione appena creata
if (isPalindrome(userInput)) {
    alert("La parola inserita è un palindromo.");
} else {
    alert("La parola inserita non è un palindromo.");
}










// PARI E DISPARI
const evenButton = document.getElementById("even");
const oddButton = document.getElementById("odd");

evenButton.addEventListener("click", function() {

    let userNumber;

    do {
        // Chieedo all'utente di inserire un numero tra 1 e 5
        userNumber = prompt("Inserisci un numero tra 1 e 5:");

        // Converto l'input da stringa a numero
        userNumber = parseInt(userNumber);

        // Verifico se l'input non è un numero o non è compreso tra 1 e 5
        if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
            // Alert per notificare l'errore
            alert("Inserisci un numero valido compreso tra 1 e 5.");
        }
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

    // stampo il numero utente in cosole
    console.log("Numero Utente:", userNumber);

    // stampo il numero PC in cosole
    let pcNumber = getRandomNumber(1, 5);
    console.log("Numero PC:", pcNumber);

    // sommo i due risultati
    let somma = userNumber + pcNumber;

    let risultato = pariOrDispari( somma );
    console.log("La somma dei due numeri è:", risultato);

    if (risultato === "pari") {
        alert("Hai vinto!");
    } else {
        alert("Hai perso!");
    }


    

});

oddButton.addEventListener("click", function() {
    let userNumber;

    do {
        // Chieedo all'utente di inserire un numero tra 1 e 5
        userNumber = prompt("Inserisci un numero tra 1 e 5:");

        // Converto l'input da stringa a numero
        userNumber = parseInt(userNumber);

        // Verifico se l'input non è un numero o non è compreso tra 1 e 5
        if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
            // Alert per notificare l'errore
            alert("Inserisci un numero valido compreso tra 1 e 5.");
        }
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

    // stampo il numero utente in cosole
    console.log("Numero Utente:", userNumber);

    // stampo il numero PC in cosole
    let pcNumber = getRandomNumber(1, 5);
    console.log("Numero PC:", pcNumber);

    // sommo i due risultati
    let somma = userNumber + pcNumber;

    let risultato = pariOrDispari( somma );
    console.log("La somma dei due numeri è:", risultato);

    if (risultato === "pari") {
        alert("Hai perso!");
    } else {
        alert("Hai vinto!");
    }


});

