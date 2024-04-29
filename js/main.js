

// chiedo all'utente di inserire una parola
let userInput = prompt("Inserisci una parola:");

// Funzione per controllare se la parola è un palindromo
function isPalindrome(word) {
    // con tolowercase trasformo la parola in una parola con lettere minuscole
    word = word.toLowerCase();
    
    
    
    // itero le lettere della parola fino a metà di essa
    for (let i = 0; i < word.length / 2; i++) {
        // se le lettere alla posizione i e alla posizione (word.leght - i -1) non corrispondono
        // allora non è una parola palindroma
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }
    // se alla fine del ciclo non ci sono "false" allora è palindroma
    return true;
}

// in questo modo richiamo e utilizzo la funzione appena creata
if (isPalindrome(userInput)) {
    console.log("La parola inserita è un palindromo.");
} else {
    console.log("La parola inserita non è un palindromo.");
}
