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
