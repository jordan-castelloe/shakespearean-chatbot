'use strict';
let _ = require("lodash");
// characterOne is always the character you want to adjust
// characterTwo is always the character they have a relationship with
// adjuster is a number -- positive if trust or anger increases, negative if it decreases
// for example, if Iago lies about Desdemona to Othello:
//     characterOne is Othello
//     characterTwo is Desdemona
//     adjuster will be a negative number, depending on the strength of the lie
// these functions run in the consequence functions for each player choice

module.exports.adjustTrust = function(characterOne, characterTwo, adjuster){
    characterOne.relationships[characterTwo].trust += adjuster;
};

module.exports.adjustAnger = function(characterOne, characterTwo, adjuster){
    characterOne.relationships[characterTwo].anger += adjuster;
};

module.exports.killCharacter = function(character){
    character.isAlive = false;
};


module.exports.deactivateCharacter = function(character){
    character.isActive = false;
};

module.exports.reverseConsequences = function(previousSection, truthOrLie){
   _.negate(previousSection[truthOrLie].consequences);
};
