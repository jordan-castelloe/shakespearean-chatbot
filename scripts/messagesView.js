'use strict';

module.exports.printSection = function (section) {
    // let typingIndicator = "";
    // let messageDiv = "";

    for (let i = 0; i < section.messages.length; i++) {
        let typingIndicator = createTypingIndicator(section.messages[i].name);
        let messageDiv = createMessageDiv(section.messages[i].text, section.messages[i].name);
        console.log("this is the messageDiv from within the loop", messageDiv);
        typingIndicator.appendTo($("#message-area"));
        setTimeout(switchMessageDiv, 1500, typingIndicator, messageDiv); 
    }
    $('.narration').text(section.narration);
    $('.truth-text').text(section.options.truth.truthPrompt);
    $('.truth-textarea').attr('placeholder', section.options.truth.truthDefault);
    $('.lie-text').text(section.options.lie.liePrompt);
    $('.lie-textarea').attr('placeholder', section.options.lie.lieDefault);
    $('#character-list').text(section.characters.join(', '));

  
};

function switchMessageDiv(typingIndicator, messageDiv) {
    typingIndicator.remove();
    console.log("this is the message div from the switch message function", messageDiv);
    messageDiv.appendTo($("#message-area"));
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








