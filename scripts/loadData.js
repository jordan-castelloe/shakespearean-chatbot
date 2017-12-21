'use strict';

const printer = require("./printToDOM.js");


module.exports.loadMessages= function(){
    console.log("the load message function was fired from inside hte loadData.js module");
    let messageRequest = new XMLHttpRequest();
    messageRequest.open("GET", "./scripts/messages.json");
    messageRequest.send();
    messageRequest.addEventListener("load", processMessages);
    messageRequest.addEventListener("error", errorMessage);
};



function processMessages () {
    let data = JSON.parse(event.target.responseText);
    let oldMessages = data.messages; 
    printer.printOldMessages(oldMessages);
}

function errorMessage(){
    console.log("There was an error loading the data!");
}


