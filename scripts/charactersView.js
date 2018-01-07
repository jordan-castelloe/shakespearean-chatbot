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
        let characterRelationship = $("<div>", { class: "character-relationships" }).css('display', 'none');
        let relationshipArray = Object.keys(character.relationships);

        relationshipArray.forEach(name => {
            
            let relationshipName = $("<p>").text(`Name : ${name.charAt(0).toUpperCase() + name.slice(1)}`);
            let trust = $("<p>").text(`Trust: ${character.relationships[name].trust}`);
            let anger = $("<p>").text(`Anger: ${character.relationships[name].anger}`);
            characterRelationship.append(relationshipName).append(trust).append(anger);
            characterRelationship.appendTo(characterName);

        });

        characterBlock.appendTo($("#character-states"));
        characterName.appendTo(characterBlock);
        

        if (character.isAlive){
            characterBlock.css('background-color', 'green');
        } else {
            characterBlock.css('background-color', 'red');
        }

        characterName.click(function(){
            characterRelationship.toggle();
        });
    });

};



