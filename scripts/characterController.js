'use strict';

const characters = require("./characters.js");
const charactersPrinter = require("./charactersView.js");

module.exports.showCharacterList = function(){
    charactersPrinter.printList(characters);
};