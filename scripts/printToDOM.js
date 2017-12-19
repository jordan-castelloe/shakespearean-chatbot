'use strict';

const messageMaker = require("./messageMaker.js");

const messageContainer = document.getElementById("message-area");
const messageTextArea = document.getElementById("message-textarea");

module.exports.printMessage = function(){
    let messageText = messageTextArea.value;
    createMessageDiv(messageText);
    messageMaker.saveMessage(messageText, "Jordan", Date.now());
    clearMessageTextArea();
};

function createMessageDiv(text){
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message-div");
    messageDiv.classList.add("you");
    messageDiv.id = Date.now();
    messageDiv.innerText = text;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("delete-button");

    messageDiv.appendChild(deleteButton);
    messageContainer.appendChild(messageDiv);
}

function clearMessageTextArea(){
    messageTextArea.value= "";
    
}
