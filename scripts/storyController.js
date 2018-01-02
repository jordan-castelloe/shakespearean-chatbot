'use strict';

const messagePrinter = require("./messagesView.js");
const characterController = require("./characterController.js");




module.exports.loadScene = function(scene){
   
    let currentSection = scene.openingLines;
    let nextSection = "";

    messagePrinter.printSection(scene.openingLines);
    
    $('.send-truth').click(function () {
        tellTheTruth();

    });

    $(".truth-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            tellTheTruth();
        }
    });

    $('.send-lie').click(function () {
       tellALie();
    });


    $(".lie-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            tellALie();
        }
    });


    function printNextSection(truthOrLie) {
        nextSection = currentSection.options[truthOrLie].nextSection;
        if ('newCharacter' in nextSection) {
            messagePrinter.clearMessageArea();
        }
        messagePrinter.printSection(nextSection);
        currentSection = nextSection;
    }

    function tellALie() {
        messagePrinter.printLie();
        printNextSection("lie");
    }

    function tellTheTruth() {
        messagePrinter.printTruth();
        printNextSection("truth");
    }
 
};








