'use strict';

const printer = require("./printToDOM.js");
const loader = require("./loadData.js");
const storyController = require("./storyController");
const act1scene1 = require("./act1scene1");


module.exports.activateEventListeners = function(){

    $("#message-area").scrollTop = ("#message-area").scrollHeight;
    printer.printSection(act1scene1.openingLines);

    
    $('.send-truth').click(function(){
        printer.printTruth();
       
    });

    $('.send-lie').click(function(){
        printer.printLie();
    });

    $(".truth-textarea").keydown(function(e){
        if (e.keyCode == 13) {
            event.preventDefault();
            printer.printTruth();
        }
    });

    $(".lie-textarea").keydown(function(e){
        if (e.keyCode == 13) {
            event.preventDefault();
            printer.printLie();
        }      
    });

};


