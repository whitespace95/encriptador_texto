document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);
    displayOutput(encryptedText);
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    displayOutput(decryptedText);
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    navigator.clipboard.writeText(outputText.innerText).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function displayOutput(text) {
    const placeholderImage = document.getElementById('placeholderImage');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');

    placeholderImage.style.display = 'none';
    outputText.style.display = 'block';
    outputText.innerText = text;
    copyButton.style.display = 'block';
}


