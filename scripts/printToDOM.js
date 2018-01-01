'use strict';

module.exports.printSection = function (section) {
    for (let i = 0; i < section.messages.length; i++) {
        createMessageDiv(section.messages[i].text, section.messages[i].name);
    }
    $('.narration').text(section.narration);
    $('.truth-text').text(section.truthPrompt);
    $('.truth-textarea').attr('placeholder', section.truthDefault);
    $('.lie-text').text(section.liePrompt);
    $('.lie-textarea').attr('placeholder', section.lieDefault);
};


module.exports.printTruth = function () {
    let messageText = $(".truth-textarea").val();
    console.log('this should be the truth', messageText);
    printPlayerMessage(messageText);

};

module.exports.printLie = function () {
    let messageText = $(".lie-textarea").val();
    console.log('this should be the lie', messageText);
    printPlayerMessage(messageText);
};

function printPlayerMessage (text) {
    createMessageDiv(text, "You");
    // save message
    clearTextArea();
}


function createMessageDiv(text, character) {
    let messageDiv = $("<div>", { class: `message-div ${character}` }).text(`${character}: ${text}`).appendTo($("#message-area"));
}

function clearTextArea() {
    $(".message-textarea").val("");
}








