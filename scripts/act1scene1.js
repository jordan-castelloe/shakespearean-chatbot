'use strict';

const storyController = require("./storyController.js");

let doYouHateHim = {
    messages: [{ text: "I thought you hated him.", name: "Roderigo" }],
    narration: "Your friend, Roderigo, is in love with a young woman named Desmonda and has learned that she has eloped with your commanding officer, Othello.",
    options: {
        truth: {
            truthPrompt: "Say you don't really hate him.",
            truthDefault: "I don't really hate him, I just love drama.",
            consequences: "consequences function",
            nextSection: ""
        },
        lie: {
            liePrompt: "Say you hate him.",
            lieDefault: "I do hate him.",
            consequences: "consequences function",
            nextSection: ""
        }
    }
};

let openingLines = {
    messages:[{text: "Tell me you didn't know about this.", name: "Roderigo"}],
    narration: "Your friend, Roderigo, is in love with a young woman named Desmonda and has learned that she has eloped with your commanding officer, Othello.",
    options: {
        truth: {
            truthPrompt: "Admit that you knew about it.",
            truthDefault: "I knew about it, but I was afraid to tell you",
            consequences: function(){console.log("consequences function fired!");},
            nextSection: doYouHateHim
        }, 
        lie: {
            liePrompt: "Tell him you had no idea.",
            lieDefault: "I didn't, I swear!",
            consequences: function(){console.log("consequences function fired!");},
            nextSection: doYouHateHim
        }
    }
};

module.exports = {openingLines, doYouHateHim};








