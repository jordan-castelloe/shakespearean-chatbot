'use strict';

module.exports.adjustTrust = function(characterOne, characterTwo, adjuster){
    console.log("this should be 10", characterOne.relationships[characterTwo].trust);
    characterOne.relationships[characterTwo].trust += adjuster;
    console.log("this should be 9", characterOne.relationships[characterTwo].trust);
};

