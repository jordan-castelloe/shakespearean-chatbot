'use strict';

let previousSections = [];
module.exports.logSection = function(section){
    previousSections.push(section);
    return previousSections;
    // needs to log the character's choice
};

module.exports.getPreviousSections = function(){
    return previousSections;
};