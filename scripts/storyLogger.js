'use strict';

let previousSections = [];
module.exports.logSection = function(section){
    previousSections.push(section);
    return previousSections;
};

module.exports.getPreviousSections = function(){
    return previousSections;
};