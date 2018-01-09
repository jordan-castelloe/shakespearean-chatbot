'use strict';
const sceneThree = require("./act1scene3");
const endings = require("./endings");
const characters = require("./characters");
const characterController = require("./characterController");

let skipGroupText = {
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