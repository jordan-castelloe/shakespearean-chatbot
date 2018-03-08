(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
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


},{}],2:[function(require,module,exports){
'use strict';

const characters = require('../story/characters/characters.js');


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
            $(`#character-block-${character.name}`).css('background-color', '#ca9494');
        } else if (character.isActive == false){
            $(`#character-block-${character.name}`).css('background-color', 'rgb(148, 148, 148)');
        }
        let relationshipArray = Object.keys(character.relationships);
        relationshipArray.forEach(name => {
            $(`#trust-${character.name}-${name}`).text(`Trust: ${character.relationships[name].trust}`);
            $(`#anger-${character.name}-${name}`).text(`Anger: ${character.relationships[name].anger}`);
        });
    });
};




},{"../story/characters/characters.js":13}],3:[function(require,module,exports){
'use strict';
const storyController = require("./storyController");
const act1scene1 = require("../story/actOne/act1scene1");
const charactersView = require("./charactersView");
const sceneFactory = require('./sceneFactory');

// loads scene 1
charactersView.populateCharacterMenu(); 
storyController.loadScene(act1scene1);






},{"../story/actOne/act1scene1":8,"./charactersView":2,"./sceneFactory":5,"./storyController":6}],4:[function(require,module,exports){
'use strict';
// prints new section 
// fired when the player sends a message

module.exports.printSection = function (section) {
    // if the player writes first, leave hte message field blank
    // otherwise, do this stuff:
    if(section.messages != "playerWritesFirst"){
        for (let i = 0; i < section.messages.length; i++) {
            let typingIndicator = createTypingIndicator(section.messages[i].name);
            let messageDiv = createMessageDiv(section.name, section.messages[i].text, section.messages[i].name);
            startMessageSequence(typingIndicator, messageDiv, i);
        }
    }
    $('.narration').text(section.narration);
    $('.truth-text').text(section.truth.truthPrompt);
    $('.truth-textarea').attr('placeholder', section.truth.truthDefault);
    $('.lie-text').text(section.lie.liePrompt);
    $('.lie-textarea').attr('placeholder', section.lie.lieDefault);
    $('#character-list').text(section.characters.join(', '));
    $('#scene-title').text(section.scene);
};

// prints typing indicator and replaces it with message div after 2 seconds
function startMessageSequence(typingIndicator, messageDiv, messageIndex){
    let offset = 2000;
    if (messageIndex == 0){
        appendTypingIndicator(typingIndicator);
        setTimeout(switchMessageDiv, offset, typingIndicator, messageDiv);
    } else if (messageIndex > 0){
        let typingOffset = messageIndex * offset;
        let messageOffset = typingOffset + offset;
        setTimeout(appendTypingIndicator, typingOffset, typingIndicator);
        setTimeout(switchMessageDiv, messageOffset, typingIndicator, messageDiv);
    }
}

// appends typingIndicator to bottom of message area
function appendTypingIndicator(typingIndicator){
    typingIndicator.appendTo($("#message-area"));
    scrollToBottom();
}

// switches typing indicator out for text message
function switchMessageDiv(typingIndicator, messageDiv) {
    typingIndicator.remove();
    messageDiv.appendTo("#message-area");
}

// grabs value from truth input field and prints it to the DOM
module.exports.printTruth = function (currentSection) {
    let messageText = $(".truth-textarea").val();
    if(messageText == ""){
        messageText = currentSection.truth.truthDefault;
    }
    printPlayerMessage(messageText, currentSection.name);

};

// grabs value from lie input field and prints it to the DOM
module.exports.printLie = function (currentSection) {
    let messageText = $(".lie-textarea").val();
    if (messageText == "") {
        messageText = currentSection.lie.lieDefault;
    }
    console.log("this should be message text", messageText);
    printPlayerMessage(messageText, currentSection.name);
};

// prints the player's message and clears the message area so the next section can load
function printPlayerMessage (text, currentSectionName) {
    createMessageDiv(currentSectionName, text, "You").appendTo($("#message-area"));
    clearTextArea();
    scrollToBottom();
}

// creates a new message div
function createMessageDiv(sectionName, text, character) {
    let messageDiv = $("<div>").addClass('message-div').addClass(character).addClass(sectionName).text(`${character}: ${text}`);
    return messageDiv;
}

// creates typing indicator in DOM
function createTypingIndicator(character){
    let typingIndicator = $("<div>", {class: `typing-indicator message-div ${character}`});
    let dotOne = $("<span>").appendTo(typingIndicator);
    let dotTwo = $("<span>").appendTo(typingIndicator);
    let dotThree = $("<span>").appendTo(typingIndicator);
    return typingIndicator;
}

// clears text area
function clearTextArea() {
    $(".message-textarea").val("");
}

// scrolls to bottom of message area - called every time a new message gets posted
function scrollToBottom(){
    $('#message-area').scrollTop($('#message-area')[0].scrollHeight);
}

// clears message area-- > do we ever actually use this?
module.exports.clearMessageArea= function(){
    $("#message-area").text("");
};











},{}],5:[function(require,module,exports){
'use strict';

module.exports.uploadSection = function(section) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://othello-af74b.firebaseio.com/allSections.json",
                method: "POST",
                data: JSON.stringify(section)
            })
                .done(tripObject => {
                    resolve(tripObject);
                })
                .fail(error => {
                    console.log("uh-oh", error.statusText);
                    reject(error);
                });
        });
};

},{}],6:[function(require,module,exports){
'use strict';

const messagePrinter = require("./messagesView.js");
const characterController = require("./characterController.js");
const charactersView = require("./charactersView");
const storyLogger = require("./storyLogger.js");

// loads an entire scene at a time... maybe there's a better way to do this?
module.exports.loadScene = function(scene){
   
    let currentSection = scene.openingLines;
    let nextSection = "";

    messagePrinter.printSection(scene.openingLines);
    
    // EVENT LISTNERS FOR SENDING PLAYER MESSAGES
    $('.send-truth').click(function () {
        tellTheTruth();
    });

    $(".truth-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            tellTheTruth();
        }
    });

    $('.send-lie').click(function () {
       tellALie();
    });


    $(".lie-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            tellALie();
        }
    });

    $("#character-menu").click(function(){
        $("#character-states").toggle();
    });

    
    $("#back-arrow").click(function(){
        let storyLog  = storyLogger.getPreviousSections(); // grab previous scenes
        let previousSection = storyLog[storyLog.length-1]; // set the previous scene
        $(`.${previousSection.name}`).remove(); // remove the last messages from the character
        $(`.${currentSection.name}`).remove(); // remove the last messages from the player
        charactersView.updateCharacterMenu();
        messagePrinter.printSection(previousSection); // print the previous section
        currentSection = previousSection; // reset the current section counter
    });

    // this is the big kahuna!
    function printNextSection(truthOrLie) {
        nextSection = currentSection[truthOrLie].nextSection(); // grabs a reference to the nextSection and stores it in a variable
        if ('newCharacter' in nextSection) {
            messagePrinter.clearMessageArea(); // if the next section starts with a new character, it clears the message area from the old character
        }
        messagePrinter.printSection(nextSection); // prints the next section
        currentSection[truthOrLie].consequences(); // runs the consequences function for the last section
        charactersView.updateCharacterMenu(); 
        storyLogger.logSection(currentSection);
        storyLogger.logConsequences(currentSection[truthOrLie].consequences);
        currentSection = nextSection; // resets variable
    }

    function tellALie() {
        messagePrinter.printLie(currentSection);
        printNextSection("lie");
    }

    function tellTheTruth() {
        messagePrinter.printTruth(currentSection);
        printNextSection("truth");
    }

    
};









},{"./characterController.js":1,"./charactersView":2,"./messagesView.js":4,"./storyLogger.js":7}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
'use strict';

const sceneTwo = require("../actOne/act1scene2");
const endings = require("../endings/endings");
const characters = require("../characters/characters");
const characterController = require("../../scripts/characterController");

let brabantioIsPissed= {
    name: "brabantioIsPissed",
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "That worked. He's pissed.", name: "Roderigo" }, 
        { text: "Ha! He he says he wishes I'd married her.", name: "Roderigo" }, 
        { text: "He's going to look for Othello", name: "Roderigo" },
        { text: "I'm gonna go with him", name: "Roderigo" }],
    narration: "You really can't be seen working against your boss.",
    truth: {
        truthPrompt: "Tell Roderigo to delete his text history.",
        truthDefault: "I can't be seen working against Othello, can you delete these texts?",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", -1);
        },
        nextSection: function () {
            return sceneTwo.warnOthello;
        }
    },
    lie: {
        liePrompt: "Tell Roderigo where Othello will be and THEN to delete his text history.",
        lieDefault: "Othello will be at the Sagittarius Inn. Don't tell him I told you. Delete your texts.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function () {
            return sceneTwo.warnOthello;
        }
    }
};

let tellHerDad = {
    name: "tellHerDad",
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "Omg, Brabantio will flip", name: "Roderigo" }, 
        { text: "You're a genius", name: "Roderigo" }, 
        { text: "Texting him now", name: "Roderigo" },
        { text: "Okay, he REALLY doesn't want to talk to me", name: "Roderigo" }, 
        { text: "Thinks I'm still after Desdemona", name: "Roderigo" }],
    narration: "Desdemona's father, Brabantio, is a powerful man with powerful friends. He'll make life difficult for Othello once he learns that his daughter has eloped.",
    truth: {
        truthPrompt: "Stick to the truth. He'll figure it all out eventually anyway.",
        truthDefault: "Tell him to go look for Desdemona in her bedroom",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function () {
            return brabantioIsPissed;
        }
    },
    lie: {
        liePrompt: "Might as well go the whole nine yards.",
        lieDefault: "Oooh tell him you heard she was preggo",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function () {
            return brabantioIsPissed;
        }
    }
};



let maybeTheEnd = {
    name: "maybeTheEnd",
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "Ugh, you're right. She has weird teeth anyway.", name: "Roderigo" }],
    narration: "Well, that's that. Better move on with your life, right?",
    truth: {
        truthPrompt: "Totally. Time to move on. No reason to hold a grudge.",
        truthDefault: "Gotta go. You should look into Tinder.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", -1);
        },
        nextSection: function () {
            return endings.tinderEnder;
        }
    },
    lie: {
        liePrompt: "Just kidding, that was lame. Stir the pot! Let's tell her dad!",
        lieDefault: "On second thought, we might owe it to her dad to let him know. Man to man.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function () {
            return tellHerDad;
        }
    }
};

let suggestSnitching= {
    name: "suggestSnitching",
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "There has to be a way to stop the marraige!", name: "Roderigo" }],
    narration: "You're pretty sure they're already married.",
    truth: {
        truthPrompt: "Tell Roderigo to cut his losses and move on.",
        truthDefault: "I think it's a done deal, bro. There's plenty of other fish in the sea.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", -1);
        },
        nextSection: function () {
            return maybeTheEnd;
        }
    },
    lie: {
        liePrompt: "Suggest that Roderigo tell Desdemona's father, Brabantio, about the elopement.",
        lieDefault: "Let's tell her dad that they eloped!",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function () {
            return tellHerDad;
        }
    }
};

let youShouldQuit= {
    name: "youShouldQuit",
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "If you hate him, you should quit.", name: "Roderigo" }],
    narration: "But hey, you have a comfortable job and Othello totally loves you.",
    truth: {
        truthPrompt: "Say you're just sticking around to cause trouble.",
        truthDefault: "We can't all run the show. I'd rather stay behind the scenes. Othello trusts me, and I want to screw him over.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", -1);
        },
        nextSection: function () {
            return suggestSnitching;
        }
    },
    lie: {
        liePrompt: "Say you're leaving.",
        lieDefault: "I'll leave the first chance I get!",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function () {
            return suggestSnitching;
        }
    }
};

let whyHelpMe = {
    name: "whyHelpMe",
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "If you don't hate him, why are you helping me?", name: "Roderigo" }],
    narration: "That's a really good question. Seriously, scholars will labor over your motivations for hundreds of years.",
    truth: {
        truthPrompt: "Say you're just in it for the drama.",
        truthDefault: "Othello's gullible and it'll be fun to mess with him.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", -1);
        },
        nextSection: function(){
            return suggestSnitching;
        }
    },
    lie: {
        liePrompt: "Say you believe that Roderigo really deserves the girl.",
        lieDefault: "You and Desdemona were made for each other!",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function(){
            return suggestSnitching;
        }
    }

};

let doYouHateHim = {
    name: "doYouHateHim",
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "I thought you hated him.", name: "Roderigo" }],
    narration: "You don't really hate Othello, but he is, after all, your boss. Othello recently passed you over for a promotion in favor of Michael Cassio, a math major straight out of school. Not cool.",
    truth: {
        truthPrompt: "Explain the situation in emotionally reasonable terms.",
        truthDefault: "Hate's a strong word, but it pissed me off when he promoted Michael Cassio over me.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", -1);  
        },
        nextSection: function(){
            return whyHelpMe;
        }
    },
    lie: {
        liePrompt: "Say you totally hate him.",
        lieDefault: "I hate his guts! The bastard passed me over for a promotion! You'll see, I'll screw him over!",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function(){
            return youShouldQuit;
        }
    }

};

let openingLines = {
    name: "openingLines",
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages:[{text: "Tell me you didn't know about this.", name: "Roderigo"}],
    narration: "Your friend, Roderigo, is in love with a young woman named Desdemona. He's just learned that she has eloped with your commanding officer, Othello.",
    truth: {
        truthPrompt: "Admit that you knew about it.",
        truthDefault: "I knew about it, but I was afraid to tell you",
        consequences: function(){
            characterController.adjustTrust(characters.roderigo, "iago", -1);
        },
        nextSection: function(){
            return doYouHateHim;
        }
    }, 
    lie: {
        liePrompt: "Tell him you had no idea.",
        lieDefault: "I didn't, I swear!",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function () {
            return doYouHateHim;
        }
    }

};


module.exports = {openingLines};










},{"../../scripts/characterController":1,"../actOne/act1scene2":9,"../characters/characters":13,"../endings/endings":14}],9:[function(require,module,exports){
'use strict';
const sceneThree = require("./act1scene3");
const endings = require("../endings/endings");
const characters = require("../characters/characters");
const characterController = require("../../scripts/characterController");

let skipGroupText = {
    name: "skipGroupText",
    scene: "Act One, Scene Two",
    characters: ["Othello", "You"],
    messages: [
        { text: "Okay, I'll fill you in.", name: "Othello" },
        { text: "Brabantio is in the group and he's pitching a fit", name: "Othello" },
        { text: "Okay, we're fine. The Duke took my side. I knew he would.", name: "Othello" },
        { text: "Pack your bags, we're going to Cyprus!", name: "Othello" },
    ],
    narration: "Looks like you're going to Cyprus.",
    truth: {
        truthPrompt: "Play it straight",
        truthDefault: "Good deal. See you tomorrow.",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 1);
        },
        nextSection: function () {
            return sceneThree.roderigoIsAMess;
        }
    },
    lie: {
        liePrompt: "Suck up to Othello",
        lieDefault: "So glad you got off the hook with the Duke! The Turks won't even know what hit em!",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 2);
        },
        nextSection: function () {
            return sceneThree.roderigoIsAMess;
        }
    }
};

let groupTextTwo = {
    name: "groupTextTwo",
    scene: "Act One, Scene Two",
    characters: ["Othello", "Brabantio", "The Duke of Venice", "You", "Desdemona"],
    messages: [
        { text: "Sir, there was no witchcraft. I'm in love with Desdemona and she's in love with me. You can ask her yourself.", name: "Othello" },
        { text: "Desdemona, what do you have to say?", name: "The Duke" },
        { text: "Dad, I love you, but I've chosen to marry Othello. I want to go with him to Cyprus.", name: "Desdemona" },
        { text: "Good riddance! You'll never be welcome under my roof again!", name: "Brabantio" },
        { text: "Keep an eye on her, Othello. She lied to me. She might lie to you too.", name: "Brabantio" },
        { text: "Stop whining, Brabantio. Othello, you and your wife are going to Cyprus. Iago and Cassio, you're going too. Meeting adjourned!", name: "The Duke" },    
    ],
    narration: "Looks like you're going to Cyprus.",
    truth: {
        truthPrompt: "Play it straight",
        truthDefault: "Yes, sir!",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 1);
        },
        nextSection: function () {
            return sceneThree.roderigoIsAMess;
        }
    },
    lie: {
        liePrompt: "Suck up to Othello",
        lieDefault: "WOOHOO! Hell yeah! Can't wait to kick some Turkish butt!",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 2);
        },
        nextSection: function () {
            return sceneThree.roderigoIsAMess;
        }
    }
};

let wtfIago = {
    name: "wtfIago",
    scene: "Act One, Scene Two",
    characters: ["Othello", "Brabantio", "The Duke of Venice", "You", "Desdemona"],
    messages: [
        { text: "Wtf, Iago", name: "Othello" },
        { text: "On second thought, withcraft isn't really a thing.", name: "The Duke" },
        { text: "Othello, what do you have to say?", name: "The Duke" }
    ],
    narration: "Uh oh, looks like the Duke's not going for it.",
    truth: {
        truthPrompt: "Stick to your guns",
        truthDefault: "Don't listen to him, Mr. Duke! He'll witchcraft you!",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", -1);
        },
        nextSection: function () {
            return endings.youreFired;
        }
    },
    lie: {
        liePrompt: "Blame autocorrect.",
        lieDefault: "Damn autocorrect! What I meant was Othello DIDN'T use witchcraft.",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 1);
        },
        nextSection: function () {
            return groupTextTwo;
        }
    }
};


let groupText = {
    name: "groupText",
    scene: "Act One, Scene Two",
    characters: ["Othello", "Brabantio", "The Duke of Venice", "You", "Desdemona"],
    newCharacter: true,
    messages: [
        { text: "You wanted to talk to me?", name: "Othello" },
        { text: "Bad news in Cyprus. The Turks outnumber us three to one.", name: "The Duke" },
        { text: "I'm sending you in, Othello. You're the only man for the job", name: "The Duke" },
        { text: "Hang on a second, Duke! My daughter's been stolen away by witchcraft!", name: "Brabantio" },
        { text: "Witchcraft! No way! Name the guy who did it and I'll let you decide their punishment.", name: "The Duke" },
        { text: "It was Othello!", name: "Brabantio" }
    ],
    narration: "If you stick up for Othello in front of the whole group, he'll trust you even more than he already does. On the other hand, your ultimate goal is to ruin Othello's life. Do you play the long game or sieze the opportunity?",
    truth: {
        truthPrompt: "Sieze the opportunity and stick up for Brabantio. Try to get Othello fired.",
        truthDefault: "Mr. Duke, Brabantio is telling the truth. Othello used witchcraft to seduce Desdemona!",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", -5);
        },
        nextSection: function () {
            return wtfIago;
        }
    },
    lie: {
        liePrompt: "Play the long game and stick up for Othello. Try to gain his trust.",
        lieDefault: "Mr. Duke, Othello would never! Brabantio is raving!",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 5);
        },
        nextSection: function () {
            return groupTextTwo;
        }
    }
};

let brabantioCanSuckMyDick = {
    name: "brabantioCanSuckMyDick",
    scene: "Act One, Scene Two",
    characters: ["Othello", "You"],
    messages: [
        { text: "Brabantio can whine all he wants. I've done enough for the Venetian government that it won't make a dent", name: "Othello" },
        { text: "Speaking of, Cassio just texted and says the Duke wants to talk to us about the war in Cyprus", name: "Othello" },
        { text: "I'm gonna start a group text, want me to include you?", name: "Othello" }],
    narration: "On the one hand, you love knowing everybody's business. On the other hand, group texts are the actual worst.",
    truth: {
        truthPrompt: "Get in on the group text.",
        truthDefault: "Yes please! Count me in!",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 1);
        },
        nextSection: function () {
            return groupText;
        }
    },
    lie: {
        liePrompt: "Skip the group text.",
        lieDefault: "Nah, fill me in later.",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 1);
        },
        nextSection: function () {
            return skipGroupText;
        }
    }
};

let imGladYouDidnt = {
    name: "imGladYouDidnt",
    scene: "Act One, Scene Two",
    characters: ["Othello", "You"],
    messages: [{ text: "Thanks for watching my back, man.", name: "Othello" },
    { text: "Oh, hey. Cassio just texted. He said the Duke wants to talk to us about the war in Cyprus", name: "Othello" },
    { text: "I'm gonna start a group text, do you want in?", name: "Othello" }],
    narration: "On the one hand, you love knowing everybody's business. On the other hand, group texts are the actual worst.",
    truth: {
        truthPrompt: "Get in on the group text.",
        truthDefault: "Yes, please, count me in!.",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 1);
        },
        nextSection: function () {
            return groupText;
        }
    },
    lie: {
        liePrompt: "Skip the group text.",
        lieDefault: "Fill me in later.",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 1);
        },
        nextSection: function () {
            return skipGroupText;
        }
    }
};

let warnOthello = {
    name: "warnOthello",
    scene: "Act One, Scene Two",
    characters: ["Othello", "You"],
    newCharacter: true,
    messages: "playerWritesFirst",
    narration: "You really want Othello to trust you. You could warn him about Brabantio or tell him that Roderigo was insulting him.",
    truth: {
        truthPrompt: "Warn him that Brabantio knows about the elopement.",
        truthDefault: "FYI, I think Brabantio found out about you and Desdemona.",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 1);
        },
        nextSection: function () {
            return brabantioCanSuckMyDick;
        }
    },
    lie: {
        liePrompt: "Shit talk Roderigo.",
        lieDefault: "Dude, you should have heard what Roderigo was saying about you! The only reason I didn't kill him on the spot is because I'm too soft.",
        consequences: function () {
            characterController.adjustTrust(characters.othello, "iago", 2);
            characterController.adjustTrust(characters.othello, "roderigo", -2);
        },
        nextSection: function () {
            return imGladYouDidnt;
        }
    }
};

module.exports = {warnOthello};
},{"../../scripts/characterController":1,"../characters/characters":13,"../endings/endings":14,"./act1scene3":10}],10:[function(require,module,exports){
'use strict';

const actTwo = require("../actTwo/act2scene1");
const endings = require("../endings/endings");
const characters = require("../characters/characters");
const characterController = require("../../scripts/characterController");

let askRoderigoForMoney = {
    name: "askRoderigoForMoney",
    scene: "Act One, Scene Three",
    characters: ["Roderigo", "You"],
    messages: [{ text: "What should I do?", name: "Roderigo" }],
    narration: "You're hatching a plan: if you really want to screw Othello over, you'll need to ruin his marriage. You'll have to make him think that Desdemona having an affair. It might be nice to have Roderigo around for the dirty work. On the other hand, he's emotional and a pain and you work better alone.",
    truth: {
        truthPrompt: "Leave him out of the plan. You can do this on your own.",
        truthDefault: "Just wait it out and be nice to her. She'll come around.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", -1);
            characterController.deactivateCharacter(characters.roderigo);
        },
        nextSection: function () {
            return actTwo.wheresOthello;
        }
    },
    lie: {
        liePrompt: "Why not use him? Tell him to raise a bunch of money.",
        lieDefault: "Sell all your land and raise a bunch of cash. That way you can elope with her when the time comes!",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function () {
            return actTwo.wheresOthello;
        }
    }
};

let reassureRoderigo = {
    name: "reassureRoderigo",
    scene: "Act One, Scene Three",
    characters: ["Roderigo", "You"],
    messages: [{ text: "Desdemona will never go for me.", name: "Roderigo" }],
    narration: "She probably won't.",
    truth: {
        truthPrompt: "Tell him to move on.",
        truthDefault: "I'm sure you'll get over her.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", -1);
        },
        nextSection: function () {
            return endings.tinderEnder;
        }
    },
    lie: {
        liePrompt: "Tell him that Desdemona will get tired of Othello",
        lieDefault: "She'll get tired of Othello, and then she'll go looking for an affair with a younger man.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 2);
        },
        nextSection: function () {
            return askRoderigoForMoney;
        }
    }
};

let roderigoIsAMess = {
    name: "roderigoIsAMess",
    scene: "Act One, Scene Three",
    newCharacter: true,
    characters: ["Roderigo", "You"],
    messages: [{ text: "I want to drown myself.", name: "Roderigo" }],
    narration: "Roderigo is an idiot, but he's a rich idiot. He might still come in handy.",
    truth: {
        truthPrompt: "Tell him to man up.",
        truthDefault: "You're acting like an idiot. Drown yourself? Who says stuff like that?",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 1);
        },
        nextSection: function () {
            return reassureRoderigo;
        }
    },
    lie: {
        liePrompt: "Tell him you're his friend",
        lieDefault: "Come on, man. I've got your back. We'll figure this out.",
        consequences: function () {
            characterController.adjustTrust(characters.roderigo, "iago", 2);
        },
        nextSection: function () {
            return reassureRoderigo;
        }
    }
};

module.exports = {roderigoIsAMess};

},{"../../scripts/characterController":1,"../actTwo/act2scene1":11,"../characters/characters":13,"../endings/endings":14}],11:[function(require,module,exports){
'use strict';
const sceneTwo = require("./act2scene2");
const endings = require("../endings/endings");
const characters = require("../characters/characters");
const characterController = require("../../scripts/characterController");


let getCassioDrunk = {
  name: "getCassioDrunk",
  scene: "Act Two, Scene One",
  characters: ["Roderigo", "You"],
  messages: [{ text: "Oh shit, really?", name: "Roderigo"}, {text: "I knew she'd never go for me.", name: "Roderigo"}],
  narration: "Here's the plan: you need to get Cassio in trouble. That way Desdemona will feel sorry for him and you can convince Othello that her pity is really unfaithfulness.",
  truth: {
    truthPrompt: "Tell Roderigo to start a fight with Cassio.",
    truthDefault: "Just say his mom's a ho. He'll start a fight and the Othello will fire him. No sweat.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
    },
    nextSection: function () {
      return sceneTwo.cassioIsNotDrunk;
    }
  },
  lie: {
    liePrompt: "Tell Roderigo to get Cassio drunk and THEN start a fight with him.",
    lieDefault: "Buy him some drinks and then insult his mom!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
    },
    nextSection: function () {
     return sceneTwo.cassioIsDrunk;
    }
  }
};

let liquidCourage= {
  name: "liquidCourage",
  scene: "Act Two, Scene One",
  characters: ["Roderigo", "You"],
  messages: [{ text: "You think so??", name: "Roderigo"}],
  narration: "You need Roderigo to flirt with Desdemona. That way you can convince Othello that Desdemona is cheating on him.",
  truth: {
    truthPrompt: "Tell him to turn on the charm.",
    truthDefault: "Yeah man just use your natural charm!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      return endings.roderigoIsNotDrunk;
    }
  },
  lie: {
    liePrompt: "Tell him to get smashed.",
    lieDefault: "Hell yeah bro! You just need some liquid courage!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
    },
    nextSection: function () {
     return sceneTwo.roderigoIsDrunk;
    }
  }
};

let happyCouplesMakeMeSick = {
  name: "happyCouplesMakeMeSick",
  scene: "Act Two, Scene One",
  newCharacter: true,
  characters: ["Roderigo", "You"],
  messages: [{ text: "Ugh, you should have seen the happy couple's reunion", name: "Roderigo"}, {text: "Made me want to puke", name: "Roderigo"}],
  narration: "You know they'll be a party tonight to celebrate your victory against the Turks. This could be a perfect opportunity to make your move.",
  truth: {
    truthPrompt: "Tell Roderigo to approach Desdemona at the party that night.",
    truthDefault: "Bro, she's TOTALLY already over Othello. Tonight's your night!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
    },
    nextSection: function () {
      return liquidCourage;
    }
  },
  lie: {
    liePrompt: "Tell Roderigo that Desdemona is in love with Cassio.",
    lieDefault: "Bad news, bro. I think she's into Michael Cassio.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
      characterController.adjustAnger(characters.roderigo, "cassio", 3);
    },
    nextSection: function () {
     return getCassioDrunk;
    }
  }
};

let isntHeHorrible = {
  name: "isntHeHorrible",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "You're horrible", name: "Desdemona" }, {text: "Isn't he horrible?", name: "Desdemona"}, {text: "He's just talking crap. He's more of a soldier than a smooth-talker.", name: "Cassio"}],
  narration: "You are, admittedly, horrible.",
  truth: {
    truthPrompt: "Own it!",
    truthDefault: "I'm just brutally honest!",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
    },
    nextSection: function () {
      if(characters.roderigo.isActive){
        return happyCouplesMakeMeSick;
      } else {
        return endings.tempEnding;
      }
    }
  },
  lie: {
    liePrompt: "Play it off as a joke",
    lieDefault: "Cassios right, I'm all talk.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 2);
      characterController.adjustAnger(characters.desdemona, "iago", -2);
      characterController.adjustAnger(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.cassio, "iago", -1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
    },
    nextSection: function () {
      if (characters.roderigo.isActive) {
        return happyCouplesMakeMeSick;
      } else {
        return endings.tempEnding;
      }
    }
  }
};


let whatWouldYouSayAboutMe = {
  name: "whatWouldYouSayAboutMe ",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "If you had to say something nice about me, what would you say?", name: "Desdemona" }],
  narration: "You're not totally sure what Desdemona is doing. Is she flirting with you? Testing you?",
  truth: {
    truthPrompt: "Tell the truth.",
    truthDefault: "I hardly ever have anything good to say about anyone, especially women",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", -1);
      characterController.adjustAnger(characters.desdemona, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return isntHeHorrible;
    }
  },
  lie: {
    liePrompt: "Play it safe, say something nice.",
    lieDefault: "I'd say you were very pretty and the most devoted wife I've ever seen.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 2);
      characterController.adjustAnger(characters.desdemona, "iago", -2);
      characterController.adjustAnger(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.cassio, "iago", -1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
    },
    nextSection: function () {
      if (characters.roderigo.isActive) {
        return happyCouplesMakeMeSick;
      } else {
        return endings.tempEnding;
      }
    }
  }
};


let nothingNiceToSay = {
  name: "nothingNiceToSay",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Wow", name: "Desdemona" }, { text: "Way to be a jerk, Iago", name: "Desdemona" }, { text: "Just ignore him. He has nothing good to say about me.", name: "Emilia" }],
  narration: "On the one hand, you love arguing with Emilia more than almost anything else. On the other hand, you might need Cassio or Desdemona to vouch for you later, once your plan has progressed. Maybe it'd be better not do this in front of them.",
  truth: {
    truthPrompt: "Lay off, you'll have plenty of opportunities to needle Emilia in private.",
    truthDefault: "I'm just kidding. Jeez, lighten up!",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", -1);

    },
    nextSection: function () {
      if (characters.roderigo.isActive) {
        return happyCouplesMakeMeSick;
      } else {
        return endings.tempEnding;
      }
    }
  },
  lie: {
    liePrompt: "You can't help yourself. Keep going!",
    lieDefault: "No, I don't.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", -1);
      characterController.adjustAnger(characters.desdemona, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return whatWouldYouSayAboutMe;
    }
  }
};


let insultEmilia = {
  name: "insultEmilia",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Don't worry about Othello, Des. You'll be happily reunited within an hour.", name: "Emilia" }, { text: "Thanks, Emilia, you're the best", name: "Desdemona" }],
  narration: "Here's the thing: everything Emilia says automatically pisses you off. You usually respond with a snappy insult, which usually devolves into an argument.",
  truth: {
    truthPrompt: "Let this one slide. You don't want Desdemona and Cassio to see you insulting your wife.",
    truthDefault: "Emilia knows best!",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", -1);

    },
    nextSection: function () {
      if (characters.roderigo.isActive) {
        return happyCouplesMakeMeSick;
      } else {
        return endings.tempEnding;
      }
    }
  },
  lie: {
    liePrompt: "Insult Emilia.",
    lieDefault: "If she gave you as much lip as she gives me, you'd be sick of her by now.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", -1);
      characterController.adjustAnger(characters.desdemona, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return nothingNiceToSay;
    }
  }
};


let emiliaCallsBullshit = {
  name: "emiliaCallsBullshit",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Hang on. I definitely didn't see his ship come in.", name: "Cassio" }, { text: "That's because Iago is full of shit", name: "Emilia" }, { text: "Don't listen to him, Des.", name: "Emilia" }],
  narration: "Unfortunately, your wife has a terrifying gift for seeing through your nonsense.",
  truth: {
    truthPrompt: "Try to play it off as a joke.",
    truthDefault: "JK! I got you so good! LOOOOOOL!",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", -4);
      characterController.adjustTrust(characters.desdemona, "othello", 4); 
      characterController.adjustAnger(characters.desdemona, "othello", -4);
      characterController.adjustTrust(characters.cassio, "iago", -2);
      characterController.adjustAnger(characters.emilia, "iago", 2);
    },
    nextSection: function () {
      return insultEmilia;
    }
  },
  lie: {
    liePrompt: "Stick to your guns, but leave it up in the air.",
    lieDefault: "Suit yourself. I'm just repeating what I heard.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "othello", -2);
      characterController.adjustAnger(characters.emilia, "iago", 4);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return insultEmilia;
    }
  }
};

let whatsHeDoing = {
  name: "whatsHeDoing",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "What would he be doing in town?", name: "Desdemona" }],
  narration: "This is a risky lie. Too many people involved, too easy to be found out.",
  truth: {
    truthPrompt: "Backtrack. Try again later.",
    truthDefault: "Maybe it wasn't his ship after all. I could be wrong.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 1);
      characterController.adjustTrust(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", -1);
    },
    nextSection: function () {
      return insultEmilia;
    }
  },
  lie: {
    liePrompt: "Risk it! #YOLO",
    lieDefault: "I hate to tell you this, but I heard one of the soldiers saying he'd stopped over at a brothel.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "othello", -4);
      characterController.adjustAnger(characters.desdemona, "othello", 4);
      characterController.adjustTrust(characters.desdemona, "iago", 2);
      characterController.adjustAnger(characters.emilia, "iago", 4);
      characterController.adjustTrust(characters.emilia, "iago", -3);
      characterController.adjustTrust(characters.cassio, "iago", -4);
    },
    nextSection: function () {
      return emiliaCallsBullshit;
    }
  }
};

let wheresOthello = {
  newCharacter: true,
  name: "wheresOthello",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Does anyone know when Othello is supposed to get here?", name: "Desdemona" }],
  narration: "The war is over! You won! The troops are regrouping in Cyprus. You, your wife (Emilia) and Cassio have just arrived. Othello is late.",
  truth: {
    truthPrompt: "You're pretty sure his ship caught some bad weather.",
    truthDefault: "I think he got caught in a storm.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.emilia, "iago", 1);
    },
    nextSection: function () {
      return insultEmilia;
    }
  },
  lie: {
    liePrompt: "What if you could turn Desdemona against Othello? What if you could convince her that he's cheating on her?",
    lieDefault: "I saw his ship make port. He must have gotten held up in town.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "othello", -1);
      characterController.adjustAnger(characters.emilia, "iago", 3);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return whatsHeDoing;
    }
  }
};

module.exports = {wheresOthello};




},{"../../scripts/characterController":1,"../characters/characters":13,"../endings/endings":14,"./act2scene2":12}],12:[function(require,module,exports){
// A herald announces that Othello plans revelry for the evening in celebration of Cyprus’s safety from the Turks, and also in celebration of his marriage to Desdemona.

// add into consequence functions if next scene has a property of new character or if something changes about the next scene
'use strict'; 
const endings = require("../endings/endings");
const characters = require("../characters/characters");
const characterController = require("../../scripts/characterController");
const actThree = "../actThree/act3Scene1";

let roderigoWantsOut = {
  name: "roderigoWantsOut",
  scene: "Act Two, Scene Two",
  newCharacter: true,
  characters: ["Roderigo", "You"],
  messages: [{ text: "Listen dude, I think I'm done.", name: "Roderigo" }, { text: "I spend all my money and I really don't think Desdemona will go for me.", name: "Roderigo" }],
  narration: "Roderigo has every right to be pissed at you, but you might still need him.",
  truth: {
    truthPrompt: "Apologize and tell him to cut his losses.",
    truthDefault: "You're right, I'm sorry. No hard feelings if you want to go on back to Venice.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
      characterController.deactivateCharacter(characters.roderigo);
    },
    nextSection: function () {
      return actThree.askEmilia; // TODO: change to act 3
    }
  },
  lie: {
    liePrompt: "Tell him to keep going.",
    lieDefault: "Don't give up now! Nothing worth having comes easy, bro. Look how far we've gotten already! Othello and Desdemona are in the palm of our hand.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      return actThree.askEmilia; // TODO: change to act 3
    }
  }
};

let thatsAGreatIdea= {
  name: "thatsAGreatIdea",
  scene: "Act Two, Scene Two",
  characters: ["Cassio", "You"],
  messages: [{ text: "That's a great idea", name: "Cassio" }],
  narration: "You laugh maniacally to yourself. Everything is going according to plan!",
  truth: {
    truthPrompt: "Tell him how nice Desdemona is.",
    truthDefault: "Desdemona's such a softie, she'll totally go for it.",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "othello", 1);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      roderigoWantsOut.messages = [{ text: "Bro, I'm kind of exahusted.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I get my ass kicked by Cassio, and nothing came of it.", name: "Roderigo" }, { text: "Desdemona will never go for me.", name: "Roderigo" }];
      roderigoWantsOut.lie.lieDefault = "Look how far we've come! We got Cassio fired! Now the path is clear!";
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "Tell him what a great guy he is.",
    lieDefault: "You're such a good officer, Othello will totally regret firing you.",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 2);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      roderigoWantsOut.messages = [{ text: "Bro, I'm kind of exhausted.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I get my ass kicked by Cassio, and nothing came of it.", name: "Roderigo" }, { text: "Desdemona will never go for me.", name: "Roderigo" }];
      roderigoWantsOut.lie.lieDefault = "Look how far we've come! We got Cassio fired! Now the path is clear!";
      return roderigoWantsOut;
    }
  }
};

let cassioIsDepressed = {
  newCharacter: true,
  name: "cassioIsDepressed",
  scene: "Act Two, Scene Two",
  characters: ["Cassio", "You"],
  messages: [{ text: "I can't believe I got so drunk last night", name: "Cassio" }, { text: "I'm ashamed of myself", name: "Cassio" }, { text: "Othello was right to fire me", name: "Cassio" }],
  narration: "Realistically, Othello probably won't give Cassio his job back. But if you can convince Cassio to appeal to Desdemona for support, you can probably convince Othello that Desdemona is unfaithful.",
  truth: {
    truthPrompt: "Tell him to cut his losses",
    truthDefault: "I'm sorry bro. I'm sure you'll find another job in Venice, you're very employable.",
    consequences: function () {
      characterController.deactivateCharacter(characters.cassio);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      roderigoWantsOut.messages = [{ text: "Bro, I'm kind of exhausted.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I get my ass kicked by Cassio, and nothing came of it.", name: "Roderigo" }, { text: "Desdemona will never go for me.", name: "Roderigo" }];
      roderigoWantsOut.lie.lieDefault = "Look how far we've come! We got Cassio fired! Now the path is clear!";
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "Tell him to go to Desdemona",
    lieDefault: "Listen, you should talk to Desdemona. I bet she can get you back on Othello's good side.",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 2);
    },
    nextSection: function () {
      return thatsAGreatIdea;
    }
  }
};


let othelloInvestigates= {
  newCharacter: true,
  name: "othelloInvestigates",
  scene: "Act Two, Scene Two",
  characters: ["Othello", "You", "Cassio"],
  messages: [{ text: "Okay, what's up with this guy named Roderigo?", name: "Othello" }],
  narration: "Should you throw Roderigo under the bus to gain Othello's trust, or stick up for Roderigo?",
  truth: {
    truthPrompt: "Stick up for Roderigo",
    truthDefault: "Sorry, he's just drunk. I'll get him home.",
    consequences: function () {
      characterController.adjustTrust(characters.othello, "iago", -1);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "Throw Roderigo under the bus",
    lieDefault: "This asshole is trying to flirt with Desdemona!",
    consequences: function () {
      characterController.adjustTrust(characters.othello, "iago", 4);
    },
    nextSection: function () {
      roderigoGetsFired.newCharacter = true;
      return roderigoGetsFired;
    }
  }
};


let roderigoStartsAFight = {
  newCharacter: true,
  name: "roderigoStartsAFight",
  scene: "Act Two, Scene Two",
  characters: ["Roderigo", "You"],
  messages: [{ text: "Well your plan worked, Cassio just beat my ass", name: "Roderigo" }, { text: "Othello's coming down to investigate", name: "Roderigo" }, { text: "WTF, Othello just fired Cassio for drinking on the job!", name: "Roderigo" }],
  narration: "Your sinister plot worked! Woohoo!",
  truth: {
    truthPrompt: "Gloat in your victory",
    truthDefault: "Hell yeah! I'm a genius!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", -1);
    },
    nextSection: function () {
        return cassioIsDepressed;
      }
  },
  lie: {
    liePrompt: "Tell Roderigo that he's a genius",
    lieDefault: "You're a genius, bro! Now Desdemona's all yours!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
     return cassioIsDepressed;
    }
  }
};


let roderigoGetsFired = {
  name: "roderigoGetsFired",
  scene: "Act Two, Scene Two",
  characters: ["Roderigo", "You"],
  messages: [{ text: "Welp, Othello just fired me", name: "Roderigo" }],
  narration: "Drat.",
  truth: {
    truthPrompt: "Apologize and tell him to go home.",
    truthDefault: "Sorry man, that sucks. You should go back to Venice, I'll hit you up when we get back.",
    consequences: function () {
      characterController.deactivateCharacter(characters.roderigo);
    },
    nextSection: function () {
      return actThree.askEmilia; // TODO: change to act 3
    }
  },
  lie: {
    liePrompt: "Tell him to stick around.",
    lieDefault: "Bummer dude! Well, you might as well stay in Cyprus and see what happens.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", -3);
      characterController.adjustTrust(characters.othello, "roderigo", -3);
    },
    nextSection: function () {
        return roderigoWantsOut;
      }
    }
};


let roderigoTalksToHer = {
  name: "roderigoTalksToHer",
  scene: "Act Two, Scene Two",
  characters: ["Roderigo", "You"],
  messages: [{ text: "Okay, I'm about to go talk to her", name: "Roderigo" }, { text: "It's not going great", name: "Roderigo" }, { text: "Oh crap, Othelleo just sat down. I'm screwed.", name: "Roderigo" }],
  narration: "Roderigo will totally get fired if Othello catches him flirting with Desdemona.",
  truth: {
    truthPrompt: "Tell him to cut his losses.",
    truthDefault: "Dude, get out of there. You don't want Othello to hear you talking to her.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "#YOLO.",
    lieDefault: "Who cares if Othello hears you! Don't miss your chance, dude!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", -1);
      characterController.adjustAnger(characters.othello, "roderigo",5);
    },
    nextSection: function () {
      return roderigoGetsFired;
    }
  }
};


let cassioTellsOthello = {
  name: "cassioTellsOthello",
  scene: "Act Two, Scene Two",
  characters: ["Cassio", "You"],
  messages: [{ text: "I think I better tell Othello that he's trying to start trouble", name: "Cassio" }],
  narration: "If Othello fires Roderigo, you've lost your henchman. On the other hand, Roderigo is a total pain.",
  truth: {
    truthPrompt: "Encourage Cassio to tell Othello.",
    truthDefault: "That's a good idea, Othello should definitely hear about it",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 2);
    },
    nextSection: function () {
      return othelloInvestigates;
    }
  },
  lie: {
    liePrompt: "Tell him you'll talk to Roderigo.",
    lieDefault: "Nah, don't tell Othello yet. I'll try talking to Roderigo first.",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 1);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      roderigoWantsOut.messages = [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I spend all my money, I have a horrible hangover, and nothing came of it", name: "Roderigo" }, { text: "Desdemona will never go for me. I'm going home.", name: "Roderigo" }];
      return roderigoWantsOut;
    }
  }
};

let roderigoIsDrunk = {
  name: "roderigoIsDrunk",
  scene: "Act Two, Scene Two",
  characters: ["Roderigo", "You"],
  messages: [{ text: "THIS WINE IS AMAJING", name: "Roderigo" }],
  narration: "Later that night: you and Roderigo are on guard duty at a party. Roderigo is a sloppy drunk.",
  truth: {
    truthPrompt: "Tell him to go home.",
    truthDefault: "Dude, you're wasted. Go home, I'll take your shift.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 4);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = false;
      roderigoWantsOut.messages = [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I spend all my money, I have a horrible hangover, and nothing came of it", name: "Roderigo" }, { text: "Desdemona will never go for me. I'm going home.", name: "Roderigo" }];
      return roderigoWantsOut; 
    }
  },
  lie: {
    liePrompt: "Tell him to go talk to Desdemona.",
    lieDefault: "Now's your chance! Go tell her how you feel!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      roderigoTalksToHer.messages = [{ text: "Okay, I'm abjout to g talK to her", name: "Roderigo" }, { text: "ITS NOT GOING WELL", name: "Roderigo" }, { text: "red alert SOS Othelleo just sat down. Im screwed.", name: "Roderigo" }];
      return roderigoTalksToHer;
    }
  }
};

let roderigoIsNotDrunk = {
  name: "roderigoIsNotDrunk",
  scene: "Act Two, Scene Two",
  characters: ["Roderigo", "You"],
  messages: [{ text: "Dude, I'm too scared to talk to her", name: "Roderigo" }],
  narration: "Later that night: you and Roderigo are on guard duty. Roderigo is getting cold feet.",
  truth: {
    truthPrompt: "Give him an easy out.",
    truthDefault: "Yeah, maybe tonight's not your night. Go home, I'll take your shift.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
    },
    nextSection: function () {
      roderigoWantsOut.messages = [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I spend all my money, and nothing happens", name: "Roderigo" }, { text: "Desdemona will never go for me. I'm going home.", name: "Roderigo" }];
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "Tell him to go for it.",
    lieDefault: "Dude, she's totally into you! Just go say hey!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      return roderigoGetsFired;
    }
  }
};

let cassioIsDrunk = {
  newCharacter: true,
  name: "cassioIsDrunk",
  scene: "Act Two, Scene Two",
  characters: ["Cassio", "You"],
  messages: [{ text: "I LOVE YOU MAN", name: "Cassio" }],
  narration: "Later that night: you, Cassio, and Roderigo are on guard duty. Cassio is drunk and generally acting like an idiot, but Roderigo hasn't managed to start a fight with him yet.",
  truth: {
    truthPrompt: "Tell him to go home.",
    truthDefault: "Dude, you're wasted. Go home, I'll take your shift.",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 4);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      roderigoWantsOut.messages = [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I spend all my money, I get Cassio drunk, and then he just flat out goes home!", name: "Roderigo" }, { text: "I didn't even have a chance to get him fired.", name: "Roderigo" }];
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "Tell him that Roderigo was talking shit.",
    lieDefault: "Hey, I just heard Roderigo saying something about your mom",
    consequences: function () {
      console.log(characterController.adjustTrust);
      // characterController.adjustTrust(characters.cassio, "iago", 2); // why is this undefined?
      // characterController.adjustAnger(characters.cassio, "roderigo", 2);
    },
    nextSection: function () {
      return roderigoStartsAFight;
    }
  }
};



let cassioIsNotDrunk = {
  neCharacter: true,
  name: "cassioIsNotDrunk",
  scene: "Act Two, Scene Two",
  characters: ["Cassio", "You"],
  messages: [{ text: "Dude, your friend Roderigo is a jerk", name: "Cassio" }],
  narration: "Later that night: you, Cassio, and Roderigo are on guard duty. Roderigo is doing his darndest to start a fight with Cassio, but apparently Cassio isn't going for it.",
  truth: {
    truthPrompt: "Apologize for Roderigo.",
    truthDefault: "Sorry man, he's a bit rough around the edges",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 2);
    },
    nextSection: function () {
      return cassioTellsOthello;
    }
  },
  lie: {
    liePrompt: "Pretend like you don't know Roderigo.",
    lieDefault: "Roderigo who? Barely know the guy",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", -2);
    },
    nextSection: function () {
      return cassioTellsOthello;
    }
  }
};

module.exports = {cassioIsDrunk, cassioIsNotDrunk, roderigoIsNotDrunk, roderigoIsDrunk};
},{"../../scripts/characterController":1,"../characters/characters":13,"../endings/endings":14}],13:[function(require,module,exports){
'use strict';

module.exports.othello = {
    name: "Othello",
    isAlive: true,
    isActive: true,
    relationships: {
        desdemona: {
            trust: 10,
            anger: 0
        }, 
        iago: {
            trust: 10,
            anger: 0
        },
        emilia: {
            trust: 10,
            anger: 0
        },  
        cassio: {
            trust: 10,
            anger: 0
        }, 
        roderigo: {
            trust: 5,
            anger: 5
        }, 
    
    }
};

module.exports.roderigo = {
    name: "Roderigo",
    isAlive: true,
    isActive: true,
    relationships: {
        iago: {
            trust: 10,
            anger: 0
        }, 
        othello: {
            trust: 3,
            anger: 7
        },
        cassio: {
            trust: 5,
            anger: 5
        },
        desdemona: {
            trust: 10,
            anger: 0
        }
    }
};

module.exports.desdemona = {
    name: "Desdemona",
    isAlive: true,
    isActive: true,
    relationships: {
        othello: {
            trust: 10,
            anger: 0
        }, 
        iago: {
            trust: 10,
            anger: 0
        }, 
        cassio: {
            trust: 10,
            anger: 0
        }, 
        emilia: {
            trust: 10,
            anger: 0
        }, 
        roderigo: {
            trust: 6,
            anger: 4
        }, 
    
    }
};

module.exports.emilia = {
    name: "Emilia",
    isAlive: true,
    isActive: true,
    relationships: {
        othello: {
            trust: 10,
            anger: 0
        }, 
        iago: {
            trust: 5,
            anger: 5
        }, 
        cassio: {
            trust: 10,
            anger: 0
        }, 
        emilia: {
            trust: 10,
            anger: 0
        }, 
        roderigo: {
            trust: 7,
            anger: 3
        }, 
    
    }
};

module.exports.cassio = {
    name: "Cassio",
    isAlive: true,
    isActive: true,
    relationships: {
        desdemona: {
            trust: 10,
            anger: 0
        }, 
        iago: {
            trust: 10,
            anger: 0
        }, 
        othello: {
            trust: 10,
            anger: 0
        },
        roderigo: {
            trust: 10,
            anger: 0
        },
       

    }
};





  

},{}],14:[function(require,module,exports){
'use strict';

module.exports.tinderEnder= {
    scene: "The End",
    characters: ["Roderigo", "You"],
    messages: [{ text: "Downloading tinder as we speak", name: "Roderigo" }],
    narration: "The End! Congratulations, you're a good person. That was a really boring story.",
    options: {
        truth: {
            truthPrompt: "",
            truthDefault: "",
            consequences: "",
            nextSection: ""
        },
        lie: {
            liePrompt: "",
            lieDefault: "",
            consequences: "",
            nextSection: ""
        }
    }
};

module.exports.youreFired= {
    newCharacter: true,
    scene: "The End",
    characters: ["Othello", "You"],
    messages: [{ text: "You're fired", name: "Othello" }],
    narration: "The End! You failed to screw up Othello's entire life. Try again next time!",
    options: {
        truth: {
            truthPrompt: "",
            truthDefault: "",
            consequences: "",
            nextSection: ""
        },
        lie: {
            liePrompt: "",
            lieDefault: "",
            consequences: "",
            nextSection: ""
        }
    }
};

module.exports.tempEnding= {
    scene: "The End",
    newCharacter: true,
    characters: "",
    messages: [{ text: "", name: "" }],
    narration: "Congratulations! This is as far as I've gotten! Stay tuned for more!",
    options: {
        truth: {
            truthPrompt: "",
            truthDefault: "",
            consequences: "",
            nextSection: ""
        },
        lie: {
            liePrompt: "",
            lieDefault: "",
            consequences: "",
            nextSection: ""
        }
    }
};

},{}]},{},[3]);
