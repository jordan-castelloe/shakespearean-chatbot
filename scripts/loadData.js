'use strict';

module.exports.loadMessages = function() {
    console.log("the real load message function was fired!");
    let messageRequest = new XMLHttpRequest();
    messageRequest.addEventListener("load", function(){
        let data = JSON.parse(event.target.responseText);
        let initialMessages = data.messages;
        console.log("initial messages", initialMessages);
        return initialMessages;
    });
    messageRequest.addEventListener("error", errorMessage);
    messageRequest.open("GET", "./scripts/messages.json");
    messageRequest.send();
};



function errorMessage(){
    console.log("There was an error loading the data!");
}