'use strict';

const characters = require('./characters');

const characterArray = [];

for (let prop in characters) {
    characterArray.push(characters[prop]);
}

module.exports.logCharacters = function(){
    characterArray.forEach((character) => {
        console.log("Character Name:", character.name);
        console.log("Character Relationships", character.relationships);
        return characterArray;
    });
};


