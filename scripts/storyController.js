'use strict';

const printer = require("./printToDOM.js");


module.exports.loadScene = function(scene){
    printer.printSection(scene.openingLines);

    // player tells the truth
    $('.send-truth').click(function () {
        printer.printTruth();
        printer.printSection(scene.openingLines.options.truth.nextSection);

    });

    $(".truth-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            printer.printTruth();
            printer.printSection(scene.openingLines.options.lie.nextSection);
        }
    });

    // player lies
    $('.send-lie').click(function () {
        printer.printLie();
        printer.printSection(scene.openingLines.options.truth.nextSection);
    });

    

    $(".lie-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            printer.printLie();
            printer.printSection(scene.openingLines.options.lie.nextSection);
        }
    });

};

