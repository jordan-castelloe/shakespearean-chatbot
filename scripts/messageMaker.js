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

function addToMessageArray(message){
    messageArray.push(message);
    console.log("message array", messageArray);
}