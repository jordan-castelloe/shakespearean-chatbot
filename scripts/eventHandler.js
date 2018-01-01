'use strict';

const printToDOM = require("./printToDOM.js");
let loader = require("./loadData.js");
const messageMaker = require("./messageMaker.js");


const sendButton = document.getElementById("send-button");
const messageContainer = document.getElementById("message-area");

module.exports.activateEventListeners = function(){

    messageContainer.scrollTop = messageContainer.scrollHeight;

    loader.loadMessages();
    
    $('.send-truth').click(function(){
        printToDOM.printTruth();
       
    });

    $('.send-lie').click(function(){
        printToDOM.printLie();
    });

    $(".truth-textarea").keydown(function(e){
        if (e.keyCode == 13) {
            console.log("you hit the enter key");
            event.preventDefault();
            printToDOM.printTruth();
        }
    });

    $(".lie-textarea").keydown(function(e){
        if (e.keyCode == 13) {
            console.log("you hit the enter key");
            event.preventDefault();
            printToDOM.printLie();
        }
            
    });

        
    

};


