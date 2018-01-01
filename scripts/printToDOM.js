'use strict';

const messageMaker = require("./messageMaker.js");


const messageContainer = document.getElementById("message-area");


let user = "You";

module.exports.printTruth = function(){
    let messageText= $(".truth-textarea").val();
    console.log('this should be the truth', messageText);
    printMessage(messageText);
    
};

module.exports.printLie = function(){
    let messageText = $(".lie-textarea").val();
    console.log('this should be the lie', messageText);
    printMessage(messageText);
};

module.exports.printOldMessages = function(array){
    for(let i = 0; i < array.length; i++){
        let currentMessage = array[i];
        createMessageDiv(currentMessage.text, currentMessage.user);
    }
};

function printMessage(messageText){
    createMessageDiv(messageText, user);
    messageMaker.saveMessage(messageText);
    clearTextArea();
}

function createMessageDiv(text, user){
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message-div");
    messageDiv.classList.add("container");
    messageDiv.classList.add(`${user}`);
    let messageText = document.createElement("p");
    messageText.innerText = `${user}: ${text}`;
    messageDiv.appendChild(messageText);
    messageContainer.appendChild(messageDiv);
    messageDiv.scrollIntoView(false);
}

function clearTextArea (){
    $(".message-textarea").val("");
}
