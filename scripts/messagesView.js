'use strict';

module.exports.printSection = function (section) {

    for (let i = 0; i < section.messages.length; i++) {
        let typingIndicator = createTypingIndicator(section.messages[i].name);
        let messageDiv = createMessageDiv(section.messages[i].text, section.messages[i].name);
        let offset = 1500;
        if (i == 0){
            setTypingIndicator(typingIndicator, messageDiv, offset);
        } else if (i > 0){
            offset = i * 1500;
            setTimeout(setTypingIndicator, offset, typingIndicator, messageDiv);  
        }
    }
    $('.narration').text(section.narration);
    $('.truth-text').text(section.options.truth.truthPrompt);
    $('.truth-textarea').attr('placeholder', section.options.truth.truthDefault);
    $('.lie-text').text(section.options.lie.liePrompt);
    $('.lie-textarea').attr('placeholder', section.options.lie.lieDefault);
    $('#character-list').text(section.characters.join(', '));

  
};


function setTypingIndicator(typingIndicator, messageDiv, offset){
    typingIndicator.appendTo($("#message-area"));
    setTimeout(switchMessageDiv, offset, typingIndicator, messageDiv);
}

function switchMessageDiv(typingIndicator, messageDiv) {
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








