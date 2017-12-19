'use strict';

const messageContainer = document.getElementById("message-area");

module.exports.deleteThisMessage = function(eventTarget){
    console.log(eventTarget);
    eventTarget.remove();
    

};

