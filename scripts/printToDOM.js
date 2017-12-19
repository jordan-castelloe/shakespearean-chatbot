'use strict';

const messageMaker = require("./messageMaker.js");

const messageContainer = document.getElementById("message-area");
const messageTextArea = document.getElementById("message-textarea");

module.exports.printMessage = function(){
    let messageText = messageTextArea.value;
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message-div");
    messageDiv.classList.add("you");
    messageDiv.id = Date.now();
    messageDiv.innerText = messageText;
    messageContainer.appendChild(messageDiv);
    messageMaker.saveMessage(messageText, "Jordan", Date.now());
};