'use strict';

const printToDOM = require("./printToDOM.js");
const clearAll = require("./clearAll.js");
const messageMaker = require("./messageMaker.js");
const deleteIndividual = require("./deleteIndividual.js");

const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-button");
const messageTextArea = document.getElementById("message-textarea");
const messageContainer = document.getElementById("message-area");

module.exports.activateEventListeners = function(){

    printToDOM.loadMessages();

    sendButton.addEventListener("click", function () {
        printToDOM.printMessage();
       
    });

    messageTextArea.addEventListener("keypress", function () {
        if (event.keyCode == 13) {
            printToDOM.printMessage();
        }
    });

    clearButton.addEventListener("click", function () {
        clearAll.clearMessages();
    });

    messageContainer.addEventListener("click", function(){
        if (event.target.id == "delete-button"){
            let targetMessage = event.target.parentNode;
            deleteIndividual.deleteThisMessage(targetMessage);
        }
    });

    

    

};


