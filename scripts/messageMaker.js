'use strict';

let messageArray = [];

module.exports.saveMessage = function (text, user, timestamp) {
    console.log("save message function fired!");
    let messageObject = {
        text: text,
        user: user,
        timestamp: timestamp
    };

    addToMessageArray(messageObject);
};

module.exports.messageArray = function (){
    return messageArray;
};

function addToMessageArray(message){
    messageArray.push(message);
}