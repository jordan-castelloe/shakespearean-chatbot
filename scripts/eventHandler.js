'use strict';

const printToDOM = require("./printToDOM.js");
let loader = require("./loadData.js");
const clearAll = require("./clearAll.js");
const messageMaker = require("./messageMaker.js");
const deleteIndividual = require("./deleteIndividual.js");
const themeChanger = require("./themeChanger.js");

const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-button");
const themeButton = document.getElementById("theme-button");
const textSizeButton = document.getElementById("text-size-button");
const messageTextArea = document.getElementById("message-textarea");
const messageContainer = document.getElementById("message-area");

module.exports.activateEventListeners = function(){

    messageContainer.scrollTop = messageContainer.scrollHeight;

    loader.loadMessages();
    
    sendButton.addEventListener("click", function () {
        printToDOM.printMessage();
       
    });

    messageTextArea.addEventListener("keydown", function () {
        if (event.keyCode == 13) {
            event.preventDefault();
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

    themeButton.addEventListener("click", function(){
        themeChanger.changeTheme();
    });

    textSizeButton.addEventListener("click", function(){
        themeChanger.changeTextSize();
    });

    

    

};


