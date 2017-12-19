'use strict';

const messageMaker = require("./messageMaker.js");
const messageLoader = require("./loadData.js");

const messageContainer = document.getElementById("message-area");
const messageTextArea = document.getElementById("message-textarea");

let user = "You";

module.exports.printMessage = function(){
    let messageText = messageTextArea.value;
    createMessageDiv(messageText, user, Date.now());
    messageMaker.saveMessage(messageText, user, Date.now());
    clearMessageTextArea();
};

module.exports.loadMessages = function(){
    messageLoader.loadMessages();
    
};

function createMessageDiv(text, user, timestamp){
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message-div");
    messageDiv.classList.add(`${user}`);
    messageDiv.id = Date.now();
    messageDiv.innerText = `${user}: ${text}`;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("delete-button");
    deleteButton.id = "delete-button";

    messageDiv.appendChild(deleteButton);
    messageContainer.appendChild(messageDiv);
}

function clearMessageTextArea(){
    messageTextArea.value= "";
    
}
