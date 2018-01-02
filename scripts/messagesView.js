'use strict';

module.exports.printSection = function (section) {

    for (let i = 0; i < section.messages.length; i++) {
        let typingIndicator = createTypingIndicator(section.messages[i].name);
        let messageDiv = createMessageDiv(section.messages[i].text, section.messages[i].name);
        typingIndicator.appendTo($("#message-area"));
        setTimeout(switchMessageDiv, 1500, typingIndicator, messageDiv, i);
    }
    $('.narration').text(section.narration);
    $('.truth-text').text(section.options.truth.truthPrompt);
    $('.truth-textarea').attr('placeholder', section.options.truth.truthDefault);
    $('.lie-text').text(section.options.lie.liePrompt);
    $('.lie-textarea').attr('placeholder', section.options.lie.lieDefault);
    $('#character-list').text(section.characters.join(', '));

  
};

// var s = ['John', 'Mark', 'Alex'];
// var i = 0;

// (function loop() {
//     x.innerHTML = s[i];
//     if (++i < s.length) {
//         setTimeout(loop, 3000);  // call myself in 3 seconds time if required
//     }
// })();      // above function expression is called immediately to start it off


function switchMessageDiv(typingIndicator, messageDiv, messageIndex) {
    if (messageIndex == 0){
        console.log("the first message", messageDiv);
        setTypingIndicator(typingIndicator, messageDiv);
    } else {
        console.log("the following message", messageDiv);
        setTimeout(setTypingIndicator, 1500, typingIndicator, messageDiv);
    }
}

function setTypingIndicator(typingIndicator, messageDiv){
    typingIndicator.remove();
    messageDiv.appendTo("#message-area");
}








module.exports.printTruth = function () {
    let messageText = $(".truth-textarea").val();
    printPlayerMessage(messageText);

};

module.exports.printLie = function () {
    let messageText = $(".lie-textarea").val();
    printPlayerMessage(messageText);
};

function printPlayerMessage (text) {
    createMessageDiv(text, "You").appendTo($("#message-area"));
    clearTextArea();
}


function createMessageDiv(text, character) {
    let messageDiv = $("<div>", { class: `message-div ${character}` }).text(`${character}: ${text}`);
    return messageDiv;
}

function createTypingIndicator(character){
    let typingIndicator = $("<div>", {class: `typing-indicator message-div ${character}`});
    let dotOne = $("<span>").appendTo(typingIndicator);
    let dotTwo = $("<span>").appendTo(typingIndicator);
    let dotThree = $("<span>").appendTo(typingIndicator);
    return typingIndicator;
}



function clearTextArea() {
    $(".message-textarea").val("");
}

module.exports.clearMessageArea= function(){
    $("#message-area").text("");
};








