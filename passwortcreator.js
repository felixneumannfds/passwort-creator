// alle wörter in der wordlist
let wordsList = [];

// Wort Hinzufügen
function addWord() {
    const inputWord = document.getElementById('inputword').value.trim();

    if (inputWord !== '') {
        wordsList.push(inputWord);
        updateWordList();
        document.getElementById('inputword').value = '';
    }
}

// alle eingaben werden sichtbar unterhalb der buttons
function updateWordList() {
    const userWordsList = document.getElementById('userwords');
    userWordsList.innerHTML = '';

    wordsList.forEach(word => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(word));
        userWordsList.appendChild(li);
    });
}

// Liste löschen
function clearList() {
    wordsList = [];
    updateWordList();
    document.getElementById('password').innerText = '';
}

// Passwort generieren
function encrypt() {
    const leetspeakMap = {
        'a': '4',
        'A': '4',
        'b': '8',
        'B': '8',
        'e': '3',
        'E': '3',
        'g': '9',
        'G': '9',
        'i': '1',
        'I': '1',
        'o': '0',
        'O': '0',
        's': '$',
        'S': '$',
        't': '7',
        'T': '7'

    };


    // random Sonderzeichen
    const generateRandomCharacter = () => {
        const characters = '!@#$%&*()-=_+[]{};:,.<>?/§';
        return characters[Math.floor(Math.random() * characters.length)];
    };

    const strongPassword = wordsList.map(word => {
        return word.split('').map(char => leetspeakMap[char] || char).join('') + generateRandomCharacter();
    }).join('');

    document.getElementById('password').innerText = strongPassword;
}

// copy funktion von pw-copy-button
function copyToClipboard() {
    var password = document.querySelector("#password");
    var range = document.createRange();
    range.selectNode(password);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}