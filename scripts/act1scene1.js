'use strict';

const sceneTwo = require("./act1scene2");

let theEnd = {
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



let brabantioIsPissed= {
    characters: ["Roderigo", "You"],
    messages: [{ text: "That worked. He's pissed.", name: "Roderigo" }, 
        { text: "Ha! He says he wishes I'd married her.", name: "Roderigo" }, 
        { text: "He's going to look for Othello", name: "Roderigo" },
        { text: "I'm gonna go with him", name: "Roderigo" }],
    narration: "Looks like Othello's wedding night is going to be cut a little short. You really can't be seen working against your boss. You need Roderigo to delete his text history.",
    options: {
        truth: {
            truthPrompt: "Tell Roderigo to delete his text history.",
            truthDefault: "I can't be seen working against Othello, can you delete these texts?",
            consequences: "consequences function",
            nextSection: sceneTwo.warnOthello
        },
        lie: {
            liePrompt: "Tell Roderigo where Othello will be and THEN to delete his text history.",
            lieDefault: "Othello will be at the Sagittarius Inn. Don't tell him I told you. Delete your texts.",
            consequences: "consequences function",
            nextSection: sceneTwo.warnOthello
        }
    }
};

let tellHerDad = {
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
            nextSection: brabantioIsPissed
        },
        lie: {
            liePrompt: "Might as well go the whole nine yards.",
            lieDefault: "Oooh tell him you heard she was pregnant!",
            consequences: "consequences function",
            nextSection: brabantioIsPissed
        }
    }
};



let maybeTheEnd = {
    characters: ["Roderigo", "You"],
    messages: [{ text: "Ugh, you're right. She has weird teeth anyway.", name: "Roderigo" }],
    narration: "Well, that's that. Better move on with your life, right?",
    options: {
        truth: {
            truthPrompt: "Totally. Time to move on. No reason to hold a grudge.",
            truthDefault: "Gotta go. You should look into Tinder.",
            consequences: "consequences function",
            nextSection: theEnd
        },
        lie: {
            liePrompt: "That was lame. Stir the pot! Let's tell her dad!",
            lieDefault: "On second thought, we might owe it to her dad to let him know. Man to man.",
            consequences: "consequences function",
            nextSection: tellHerDad
        }
    }
};

let suggestSnitching= {
    characters: ["Roderigo", "You"],
    messages: [{ text: "There has to be a way to stop the marraige!", name: "Roderigo" }],
    narration: "You're pretty sure they're already married.",
    options: {
        truth: {
            truthPrompt: "Tell Roderigo to cut his losses and move on.",
            truthDefault: "I think it's a done deal, bro. There's plenty of other fish in the sea.",
            consequences: "consequences function",
            nextSection: maybeTheEnd
        },
        lie: {
            liePrompt: "Suggest that Roderigo tell Desdemona's father, Brabantio, about the elopement.",
            lieDefault: "Let's tell her dad that they eloped!",
            consequences: "consequences function",
            nextSection: tellHerDad
        }
    }
};

let youShouldQuit= {
    characters: ["Roderigo", "You"],
    messages: [{ text: "If you hate him, you should just quit.", name: "Roderigo" }],
    narration: "But hey, you have a comfortable job and Othello totally loves you.",
    options: {
        truth: {
            truthPrompt: "Say you're just sticking around to cause trouble.",
            truthDefault: "We can't all run the show. I'd rather stay behind the scenes. Othello trusts me, and I want to screw him over.",
            consequences: "consequences function",
            nextSection: suggestSnitching
        },
        lie: {
            liePrompt: "Say you're leaving.",
            lieDefault: "I'll leave the first chance I get!",
            consequences: "consequences function",
            nextSection: suggestSnitching
        }
    }
};

let whyHelpMe = {
    characters: ["Roderigo", "You"],
    messages: [{ text: "If you don't hate him, why are you helping me?", name: "Roderigo" }],
    narration: "That's a really good question. Seriously, scholars will labor over your motivations for hundreds of years.",
    options: {
        truth: {
            truthPrompt: "Say you're just in it for the drama.",
            truthDefault: "Othello's gullible and it'll be fun to mess with him.",
            consequences: "consequences function",
            nextSection: suggestSnitching
        },
        lie: {
            liePrompt: "Say you believe that Roderigo really deserves the girl.",
            lieDefault: "You and Desdemona were made for each other!",
            consequences: "consequences function",
            nextSection: suggestSnitching
        }
    }
};

let doYouHateHim = {
    characters: ["Roderigo", "You"],
    messages: [{ text: "I thought you hated him.", name: "Roderigo" }],
    narration: "You don't hate Othello but he is, after all, your boss. He recently passed you over for a promotion in favor of Michael Cassio, a math major straight out of school.",
    options: {
        truth: {
            truthPrompt: "Say you don't really hate him.",
            truthDefault: "Hate's a strong word, it pissed me off when he promoted Michael Cassio over me.",
            consequences: "consequences function",
            nextSection: whyHelpMe
        },
        lie: {
            liePrompt: "Say you hate him.",
            lieDefault: "I hate his guts! The bastard passed me over for a promotion! You'll see, I'll screw him over!",
            consequences: "consequences function",
            nextSection: youShouldQuit
        }
    }
};

let openingLines = {
    characters: ["Roderigo", "You"],
    messages:[{text: "Tell me you didn't know about this.", name: "Roderigo"}],
    narration: "Your friend, Roderigo, is in love with a young woman named Desdemona and has learned that she has eloped with your commanding officer, Othello.",
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


module.exports = {openingLines, theEnd};









