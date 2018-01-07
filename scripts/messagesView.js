'use strict';
// prints new section 
// fired when the player sends a message

module.exports.printSection = function (section) {
    // if the player writes first, leave hte message field blank
    // otherwise, do this stuff:
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

// prints typing indicator and replaces it with message div after 2 seconds
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

// appends typingIndicator to bottom of message area
function appendTypingIndicator(typingIndicator){
    typingIndicator.appendTo($("#message-area"));
    scrollToBottom();
}

// switches typing indicator out for text message
function switchMessageDiv(typingIndicator, messageDiv) {
    typingIndicator.remove();
    messageDiv.appendTo("#message-area");
}

// grabs value from truth input field and prints it to the DOM
module.exports.printTruth = function (currentSection) {
    let messageText = $(".truth-textarea").val();
    if(messageText == ""){
        messageText = currentSection.options.truth.truthDefault;
    }
    printPlayerMessage(messageText);

};

// grabs value from lie input field and prints it to the DOM
module.exports.printLie = function (currentSection) {
    let messageText = $(".lie-textarea").val();
    if (messageText == "") {
        messageText = currentSection.options.lie.lieDefault;
    }
    printPlayerMessage(messageText);
};

// prints the player's message and clears the message area so the next section can load
function printPlayerMessage (text) {
    createMessageDiv(text, "You").appendTo($("#message-area"));
    clearTextArea();
    scrollToBottom();
}

// creates a new message div
function createMessageDiv(text, character) {
    let messageDiv = $("<div>", { class: `message-div ${character}` }).text(`${character}: ${text}`);
    return messageDiv;
}

// creates typing indicator in DOM
function createTypingIndicator(character){
    let typingIndicator = $("<div>", {class: `typing-indicator message-div ${character}`});
    let dotOne = $("<span>").appendTo(typingIndicator);
    let dotTwo = $("<span>").appendTo(typingIndicator);
    let dotThree = $("<span>").appendTo(typingIndicator);
    return typingIndicator;
}

// clears text area
function clearTextArea() {
    $(".message-textarea").val("");
}

// scrolls to bottom of message area - called every time a new message gets posted
function scrollToBottom(){
    $('#message-area').scrollTop($('#message-area')[0].scrollHeight);
}

// clears message area-- > do we ever actually use this?
module.exports.clearMessageArea= function(){
    $("#message-area").text("");
};










