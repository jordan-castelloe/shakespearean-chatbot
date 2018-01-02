'use strict';

module.exports.printSection = function (section) {

    if(section.messages != "playerWritesFirst"){
        for (let i = 0; i < section.messages.length; i++) {
            let typingIndicator = createTypingIndicator(section.messages[i].name);
            let messageDiv = createMessageDiv(section.messages[i].text, section.messages[i].name);
            startMessageSequence(typingIndicator, messageDiv, i);
        }
    }
    $('.narration').text(section.narration);
    $('.truth-text').text(section.options.truth.truthPrompt);
    $('.truth-textarea').attr('placeholder', section.options.truth.truthDefault);
    $('.lie-text').text(section.options.lie.liePrompt);
    $('.lie-textarea').attr('placeholder', section.options.lie.lieDefault);
    $('#character-list').text(section.characters.join(', '));
    $('#scene-title').text(section.scene);
};

function startMessageSequence(typingIndicator, messageDiv, messageIndex){
    let offset = 2000;
    if (messageIndex == 0){
        appendTypingIndicator(typingIndicator);
        setTimeout(switchMessageDiv, offset, typingIndicator, messageDiv);
    } else if (messageIndex > 0){
        let typingOffset = messageIndex * offset;
        let messageOffset = typingOffset + offset;
        setTimeout(appendTypingIndicator, typingOffset, typingIndicator);
        setTimeout(switchMessageDiv, messageOffset, typingIndicator, messageDiv);
    }
}

function appendTypingIndicator(typingIndicator){
    typingIndicator.appendTo($("#message-area"));
    scrollToBottom();
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
    scrollToBottom();
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

function scrollToBottom(){
    $('#message-area').scrollTop($('#message-area')[0].scrollHeight);
}

module.exports.clearMessageArea= function(){
    $("#message-area").text("");
};










