'use strict';

let previousSections = [];
let consequences = [];
module.exports.logSection = function(section){
    previousSections.push(section);
    return previousSections;
    // needs to log the character's choice
};

module.exports.logConsequences = function(consequenceFunction){
    consequences.push(consequenceFunction);
};

module.exports.getPreviousSections = function(){
    return previousSections;
};