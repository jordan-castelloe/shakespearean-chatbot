'use strict';

module.exports.adjustTrust = function(characterOne, characterTwo, adjuster){
    characterOne.relationships[characterTwo].trust += adjuster;
};

module.exports.adjustAnger = function(characterOne, characterTwo, adjuster){
    characterOne.relationships[characterTwo].anger += adjuster;
};

module.exports.killCharacter = function(character){
    character.isAlive = false;
};

