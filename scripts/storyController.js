'use strict';

const messagePrinter = require("./messagesView.js");


module.exports.loadScene = function(scene){
    $("#message-area").scrollTop($("#message-area")[0].scrollHeight); 


    messagePrinter.printSection(scene.openingLines);
    let currentSection = scene.openingLines;
    let nextSection = "";

    // player tells the truth
    $('.send-truth').click(function () {
        tellTheTruth();

    });

    $(".truth-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            tellTheTruth();
        }
    });

    // player lies
    $('.send-lie').click(function () {
       tellALie();
    });

    

    $(".lie-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            tellALie();
        }
    });

    function tellALie() {
        messagePrinter.printLie();
        printNextSection("lie");
    }

    function tellTheTruth() {
        messagePrinter.printTruth();
        printNextSection("truth");
    }

    function printNextSection(truthOrLie) {
        nextSection = currentSection.options[truthOrLie].nextSection;
        messagePrinter.printSection(nextSection);
        currentSection = nextSection;
    }

 
};



