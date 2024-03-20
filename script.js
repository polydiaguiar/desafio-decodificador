const textArea = document.querySelector('#input-textarea');
const message = document.querySelector('.message');
const output = document.querySelector('.output');
const outputText = document.querySelector('.output-text');
const criptografarButton = document.querySelector('#crip-button');
const descriptografarButton = document.querySelector('#decrip-button');
const copiarButton = document.querySelector('#copy-button');


function criptografar() {
    let text = textArea.value;

    if (text.trim() == '') {
        output.style.display = 'none';
        message.style.display = 'block';
    } else {
        text = text.replaceAll('a', 'arm')
        text = text.replaceAll('e', 'endy')
        text = text.replaceAll('i', 'ivsh')
        text = text.replaceAll('o', 'ot')
        text = text.replaceAll('u', 'uify')

        message.style.display = 'none';
        output.style.display = 'block';

        outputText.innerHTML = text;
    }
}


function descriptografar() {
    let text = textArea.value;

    if (text.trim() == '') {
        output.style.display = 'none';
        message.style.display = 'block';
    } else {
        text = text.replaceAll('arm', 'a')
        text = text.replaceAll('endy', 'e')
        text = text.replaceAll('ivsh', 'i')
        text = text.replaceAll('ot', 'o')
        text = text.replaceAll('uify', 'u')


        message.style.display = 'none';
        output.style.display = 'block';
        
        outputText.innerHTML = text;
    }
}


function copyText() {
    let output = outputText.innerHTML;
    navigator.clipboard.writeText(output);
}

output.style.display = 'none';


criptografarButton.onclick = criptografar;
descriptografarButton.onclick = descriptografar;
copiarButton.onclick = copyText;
