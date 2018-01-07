'use strict';

const sceneTwo = require("./act1scene2");
const endings = require("./endings");
const characters = require("./characters");
const characterController = require("./characterController");

let brabantioIsPissed= {
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "That worked. He's pissed.", name: "Roderigo" }, 
        { text: "Ha! He he says he wishes I'd married her.", name: "Roderigo" }, 
        { text: "He's going to look for Othello", name: "Roderigo" },
        { text: "I'm gonna go with him", name: "Roderigo" }],
    narration: "You really can't be seen working against your boss.",
    options: {
        truth: {
            truthPrompt: "Tell Roderigo to delete his text history.",
            truthDefault: "I can't be seen working against Othello, can you delete these texts?",
            consequences: "consequences function",
            nextSection: function () {
                return sceneTwo.warnOthello;
            }
        },
        lie: {
            liePrompt: "Tell Roderigo where Othello will be and THEN to delete his text history.",
            lieDefault: "Othello will be at the Sagittarius Inn. Don't tell him I told you. Delete your texts.",
            consequences: "consequences function",
            nextSection: function () {
                return sceneTwo.warnOthello;
            }
        }
    }
};

let tellHerDad = {
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "Omg, Brabantio will flip", name: "Roderigo" }, 
        { text: "You're a genius", name: "Roderigo" }, 
        { text: "Texting him now", name: "Roderigo" },
        { text: "Okay, he REALLY doesn't want to talk to me", name: "Roderigo" }, 
        { text: "Thinks I'm still after Desdemona", name: "Roderigo" }],
    narration: "Desdemona's father, Brabantio, is a powerful man with powerful friends. He'll make life difficult for Othello once he learns that his daughter has eloped.",
    options: {
        truth: {
            truthPrompt: "Stick to the truth. He'll figure it all out eventually anyway.",
            truthDefault: "Tell him to go look for Desdemona in her bedroom",
            consequences: "consequences function",
            nextSection: function () {
                return brabantioIsPissed;
            }
        },
        lie: {
            liePrompt: "Might as well go the whole nine yards.",
            lieDefault: "Oooh tell him you heard she was preggo",
            consequences: "consequences function",
            nextSection: function () {
                return brabantioIsPissed;
            }
        }
    }
};



let maybeTheEnd = {
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "Ugh, you're right. She has weird teeth anyway.", name: "Roderigo" }],
    narration: "Well, that's that. Better move on with your life, right?",
    options: {
        truth: {
            truthPrompt: "Totally. Time to move on. No reason to hold a grudge.",
            truthDefault: "Gotta go. You should look into Tinder.",
            consequences: "consequences function",
            nextSection: function () {
                return endings.tinderEnder;
            }
        },
        lie: {
            liePrompt: "Just kidding, that was lame. Stir the pot! Let's tell her dad!",
            lieDefault: "On second thought, we might owe it to her dad to let him know. Man to man.",
            consequences: "consequences function",
            nextSection: function () {
                return tellHerDad;
            }
        }
    }
};

let suggestSnitching= {
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "There has to be a way to stop the marraige!", name: "Roderigo" }],
    narration: "You're pretty sure they're already married.",
    options: {
        truth: {
            truthPrompt: "Tell Roderigo to cut his losses and move on.",
            truthDefault: "I think it's a done deal, bro. There's plenty of other fish in the sea.",
            consequences: "consequences function",
            nextSection: function () {
                return maybeTheEnd;
            }
        },
        lie: {
            liePrompt: "Suggest that Roderigo tell Desdemona's father, Brabantio, about the elopement.",
            lieDefault: "Let's tell her dad that they eloped!",
            consequences: "consequences function",
            nextSection: function () {
                return tellHerDad;
            }
        }
    }
};

let youShouldQuit= {
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "If you hate him, you should quit.", name: "Roderigo" }],
    narration: "But hey, you have a comfortable job and Othello totally loves you.",
    options: {
        truth: {
            truthPrompt: "Say you're just sticking around to cause trouble.",
            truthDefault: "We can't all run the show. I'd rather stay behind the scenes. Othello trusts me, and I want to screw him over.",
            consequences: "consequences function",
            nextSection: function () {
                return suggestSnitching;
            }
        },
        lie: {
            liePrompt: "Say you're leaving.",
            lieDefault: "I'll leave the first chance I get!",
            consequences: "consequences function",
            nextSection: function () {
                return suggestSnitching;
            }
        }
    }
};

let whyHelpMe = {
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "If you don't hate him, why are you helping me?", name: "Roderigo" }],
    narration: "That's a really good question. Seriously, scholars will labor over your motivations for hundreds of years.",
    options: {
        truth: {
            truthPrompt: "Say you're just in it for the drama.",
            truthDefault: "Othello's gullible and it'll be fun to mess with him.",
            consequences: "consequences function",
            nextSection: function () {
                return suggestSnitching;
            }
        },
        lie: {
            liePrompt: "Say you believe that Roderigo really deserves the girl.",
            lieDefault: "You and Desdemona were made for each other!",
            consequences: "consequences function",
            nextSection: function () {
                return suggestSnitching;
            }
        }
    }
};

let doYouHateHim = {
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "I thought you hated him.", name: "Roderigo" }],
    narration: "You don't really hate Othello, but he is, after all, your boss. Othello recently passed you over for a promotion in favor of Michael Cassio, a math major straight out of school. Not cool.",
    options: {
        truth: {
            truthPrompt: "Explain the situation in emotionally reasonable terms.",
            truthDefault: "Hate's a strong word, but it pissed me off when he promoted Michael Cassio over me.",
            consequences: "consequences function",
            nextSection: function () {
                return whyHelpMe;
            }
        },
        lie: {
            liePrompt: "Say you totally hate him.",
            lieDefault: "I hate his guts! The bastard passed me over for a promotion! You'll see, I'll screw him over!",
            consequences: "consequences function",
            nextSection: function () {
                return youShouldQuit;
            }
        }
    }
};

let openingLines = {
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages:[{text: "Tell me you didn't know about this.", name: "Roderigo"}],
    narration: "Your friend, Roderigo, is in love with a young woman named Desdemona. He's just learned that she has eloped with your commanding officer, Othello.",
    options: {
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
    }
};


module.exports = {openingLines};









