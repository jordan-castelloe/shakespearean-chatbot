'use strict';

const messagePrinter = require("./messagesView.js");
const characterController = require("./characterController.js");
const charactersView = require("./charactersView");
const storyLogger = require("./storyLogger.js");

// loads an entire scene at a time... maybe there's a better way to do this?
module.exports.loadScene = function(scene){
   
    let currentSection = scene.openingLines;
    let nextSection = "";

    messagePrinter.printSection(scene.openingLines);
    
    // EVENT LISTNERS FOR SENDING PLAYER MESSAGES
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

    $("#character-menu").click(function(){
        $("#character-states").toggle();
    });

    $("#back-arrow").click(function(){
        let storyLog  = storyLogger.getPreviousSections();
        let previousSection = storyLog[storyLog.length-1];
        let messagesToDelete = $(`.${previousSection.name}`);
        console.log(messagesToDelete);
        messagesToDelete.remove();
        messagePrinter.printSection(previousSection);
        
        // delete last messages from message div
        // reverse character function
    });

    // this is the big kahuna!
    function printNextSection(truthOrLie) {
        nextSection = currentSection[truthOrLie].nextSection(); // grabs a reference to the nextSection and stores it in a variable
        if ('newCharacter' in nextSection) {
            messagePrinter.clearMessageArea(); // if the next section starts with a new character, it clears the message area from the old character
        }
        messagePrinter.printSection(nextSection); // prints the next section
        currentSection[truthOrLie].consequences(); // runs the consequences function for the last section
        charactersView.updateCharacterMenu(); 
        storyLogger.logSection(currentSection);
        currentSection = nextSection; // resets variable
    }

    function tellALie() {
        messagePrinter.printLie(currentSection);
        printNextSection("lie");
    }

    function tellTheTruth() {
        messagePrinter.printTruth(currentSection);
        printNextSection("truth");
    }

    
};








