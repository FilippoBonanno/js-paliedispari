// PALINDROMA



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

// PARI E DISPARI
function pariOrDispari( numero ) {
	if( numero % 2 == 0 ) {
		let testo = "pari";
		return testo;
	}
	
	return "dispari";
}


// CASUAL NUMBER
//Numero casuale tra due numeri max e minimo
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}