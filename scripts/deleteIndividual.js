'use strict';
const messageMaker = require("./messageMaker.js");

const messageContainer = document.getElementById("message-area");

module.exports.deleteThisMessage = function(targetMessage){
    targetMessage.remove();
    removeFromArray(targetMessage);

};

function removeFromArray(message){
    let messageArray = messageMaker.messageArray();
    for (let i = 0; i < messageArray.length; i++){
        if(message.id == messageArray[i].timestamp){
            messageArray.splice(i, 1);
            
        }
    }
}

