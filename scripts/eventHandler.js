'use strict';

const printToDOM = require("./printToDOM.js");
const clearAll = require("./clearAll.js");
const messageMaker = require("./messageMaker.js");

const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-button");

module.exports.activateEventListeners = function(){

    sendButton.addEventListener("click", function () {
        console.log("you clicked the send button!");
        printToDOM.printMessage();
       
    });

    clearButton.addEventListener("click", function () {
        clearAll.clearMessages();
    });
};



