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
        let characterBlock = $("<div>", { id: `character-block-${character.name}`, class: "character-block"});
        let characterName = $("<h5>", { class: "character-name" }).text(character.name);
        let characterRelationship = $("<div>", { class: "character-relationships" }).css('display', 'none');
        let relationshipArray = Object.keys(character.relationships);

        relationshipArray.forEach(name => {
            let relationshipName = $("<div>").addClass("relationship-name").text(`Relationship with ${name.charAt(0).toUpperCase() + name.slice(1) }`);
            let trust = $("<p>").attr("id", `trust-${character.name}-${name}`).text(`Trust: ${character.relationships[name].trust}`).css('display', 'none');
            let anger = $("<p>").attr("id", `anger-${character.name}-${name}`).text(`Anger: ${character.relationships[name].anger}`).css('display', 'none');
            relationshipName.append(trust).append(anger);
            relationshipName.appendTo(characterRelationship);
            relationshipName.click(function () {
                trust.toggle();
                anger.toggle();
            });
        });

        characterBlock.appendTo($("#character-states"));
        characterName.appendTo(characterBlock);
        characterRelationship.appendTo(characterBlock);
        
       characterName.click(function(){
           characterRelationship.toggle();
       });
    });

};

module.exports.updateCharacterMenu = function(){
    characterArray.forEach(character => {
        if (character.isAlive == false) {
            $(`#character-block-${character.name}`).css('background-color', 'rgb(148, 148, 148)');
        }
        let relationshipArray = Object.keys(character.relationships);
        relationshipArray.forEach(name => {
            $(`#trust-${character.name}-${name}`).text(`Trust: ${character.relationships[name].trust}`);
            $(`#anger-${character.name}-${name}`).text(`Anger: ${character.relationships[name].anger}`);
        });
    });
};



