'use strict';

const printer = require("./printToDOM.js");


module.exports.loadScene = function(scene){
    printer.printSection(scene.openingLines);
    let currentSection = scene.openingLines;
    let nextSection = "";

    // player tells the truth
    $('.send-truth').click(function () {
        printer.printTruth();
        printNextSection("truth");

    });

    $(".truth-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            printer.printTruth();
            printNextSection("truth");
        }
    });

    // player lies
    $('.send-lie').click(function () {
        printer.printLie();
        printNextSection("lie");
    });

    

    $(".lie-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            printer.printLie();
            printNextSection("lie");
            console.log("this should be the whole scene???", scene);
            console.log("this should be the opening lines section", currentSection);
        }
    });

    function printNextSection(truthOrLie) {
        if (truthOrLie === "truth"){
            nextSection = currentSection.options.truth.nextSection;
        } else if (truthOrLie === "lie"){
            nextSection = currentSection.options.lie.nextSection;
        }
        console.log(nextSection);
        console.log("this should be the next section name for the opening lines section", currentSection.options.truth.nextSection);
        printer.printSection(nextSection);
        currentSection = nextSection;
    }

};



