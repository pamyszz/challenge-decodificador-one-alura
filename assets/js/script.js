let botaoCriptografar = document.getElementById("encrypt-button");
let botaoDescriptografar = document.getElementById("decrypt-button");
let botaoCopiar = document.getElementById("output-copy-button");
let lightSwitch = document.getElementById("switch");
let body = document.querySelector("body");

function showInitialOutput() {
    let initialOutput = document.querySelector(".content-output-details");
    let hidOutput = document.querySelector(".output-decoded");
    hidOutput.style.display = "none";
    initialOutput.style.display = "block";
}

function copy() {
    let txtToCopy = document.querySelector("#output-text").innerHTML;
    navigator.clipboard.writeText(txtToCopy);
}

function cleanOutputArea() {
    // adiciona display: none no content-output-details
    let initialOutput = document.querySelector(".content-output-details");
    initialOutput.style.display = "none";
}

function getInput() {
    let stringInput = document.querySelector(".content-input-text");
    let string = stringInput.value;
    return string;
}

function addTextOutput() {
    // adiciona display: flex no output-decoded
    let showOutput = document.querySelector(".output-decoded");
    showOutput.style.display = "flex";
}

function showOutputText(stringToShow) {
    // adiciona o resultado de criptografar ou descriptografar no output-text
    let tagOutputText = document.querySelector(".output-text");
    tagOutputText.innerHTML = stringToShow;
}

function encrypt(stringToEncrypt) { 
    
    let encryptedString = 
    stringToEncrypt
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    cleanOutputArea();  
    addTextOutput();
    showOutputText(encryptedString)
    return encryptedString;
}

function decrypt(encryptedString) {

    let decryptedString = 
    encryptedString
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    cleanOutputArea();
    addTextOutput();
    showOutputText(decryptedString)
    return decryptedString;
}

botaoCriptografar.addEventListener("click", (e) => {
    let frase = getInput();
    if (frase != "") {
        encrypt(frase);
    } else {
        showInitialOutput();
    }
});
botaoDescriptografar.addEventListener("click", (e) => {
    let frase = getInput();
    if (frase != "") {
        if (frase.includes("enter")||frase.includes("imes")||frase.includes("ai")||frase.includes("ober")||frase.includes("ufat")) {
            decrypt(frase);
        } else {
            showInitialOutput();
        }        
    } else {
        showInitialOutput();
    }
});

botaoCopiar.addEventListener("click", copy);

lightSwitch.addEventListener("click", (e) => {
    lightSwitch.classList.toggle("dark");
    body.classList.toggle("dark");
});