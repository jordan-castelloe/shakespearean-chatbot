'use strict';

let tellHerDad = {
    messages: [{ text: "There has to be a way to stop the marraige!", name: "Roderigo" }],
    narration: "You're pretty sure they're already married, and happily so.",
    options: {
        truth: {
            truthPrompt: "Tell Roderigo to cut his losses and move on.",
            truthDefault: "I think it's a done deal, bro. There's plenty of other fish in the sea.",
            consequences: "consequences function",
            nextSection: "theEnd"
        },
        lie: {
            liePrompt: "Suggest that Roderigo tell Desdemona's father, Brabantio, about the elopement.",
            lieDefault: "I'll leave the first chance I get!",
            consequences: "consequences function",
            nextSection: "tellBrabantio"
        }
    }
};

let youShouldQuit= {
    messages: [{ text: "If you don't like him, you should quit.", name: "Roderigo" }],
    narration: "But hey, you have a comfortable job and Othello totally loves you.",
    options: {
        truth: {
            truthPrompt: "Say you're just sticking around to cause trouble.",
            truthDefault: "We can't all run the show. I'd rather stay behind the scenes. Othello trusts me, and I want to screw him over.",
            consequences: "consequences function",
            nextSection: tellHerDad
        },
        lie: {
            liePrompt: "Say you're leaving.",
            lieDefault: "I'll leave the first chance I get!",
            consequences: "consequences function",
            nextSection: tellHerDad
        }
    }
};

let doYouHateHim = {
    messages: [{ text: "I thought you hated him.", name: "Roderigo" }],
    narration: "You don't hate Othello but he is, after all, your boss. He recently passed you over for a promotion in favor of Michael Cassio, a math major straight out of school.",
    options: {
        truth: {
            truthPrompt: "Say you don't really hate him.",
            truthDefault: "I don't really hate him, I just love drama.",
            consequences: "consequences function",
            nextSection: youShouldQuit
        },
        lie: {
            liePrompt: "Say you hate him.",
            lieDefault: "I do hate him. The bastard passed me over for a promotion! You'll see, I'll screw him over!",
            consequences: "consequences function",
            nextSection: youShouldQuit
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

module.exports = {openingLines, doYouHateHim, tellHerDad, youShouldQuit};








