'use strict';

const messageContainer = document.getElementById("message-area");

module.exports.clearMessages = function(){
    messageContainer.innerHTML = "";
};