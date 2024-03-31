function changeCase(sentence) {//function which changes the cases of the letters in the sentence
    return sentence.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}


const normalString = 'The Quick Brown Fox';//String to be modified
const newString = changeCase(normalString);
console.log(newString); // Output