'use strict';

const characters = require('./characters');

const characterArray = [];

for (let prop in characters) {
    characterArray.push(characters[prop]);
}

// console logs character states for testing purposes
module.exports.logCharacters = function(){
    characterArray.forEach((character) => {
        console.log("Character Name:", character.name);
        console.log("Character Relationships", character.relationships);
        return characterArray;
    });
};

module.exports.populateCharacterMenu = function(){
    characterArray.forEach((character) => {
        let characterBlock = $("<div>", { class: "character-block"});
        let characterName = $("<h5>", { class: "character-name" }).text(character.name);
        let characterRelationships = $("<div>", {class: "character-relationships"}).text(character.relationships).css('display', 'none');
        characterBlock.appendTo($("#character-states"));
        characterName.appendTo(characterBlock);
        characterRelationships.appendTo(characterName);
        if (character.isAlive){
            characterBlock.css('background-color', 'green');
        } else {
            characterBlock.css('background-color', 'red');
        }
        characterName.click(function(){
            characterRelationships.toggle();
        });
    });

};



