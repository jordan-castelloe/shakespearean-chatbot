'use strict';

const endings = require("./endings");

let askRoderigoForMoney = {
    scene: "Act One, Scene Three",
    characters: ["Roderigo", "You"],
    messages: [{ text: "What should I do?.", name: "Roderigo" }],
    narration: "You're hatching a plan: if you really want to screw Othello over, you'll need to ruin his marriage. You'll have to make him think that Desdemona having an affair. It might be nice to have Roderigo around for the dirty work. On the other hand, he's emotional and a pain and you work better alone.",
    options: {
        truth: {
            truthPrompt: "Leave him out of the plan. You can do this on your own.",
            truthDefault: "Just wait it out and be nice to her. She'll come around.",
            consequences: "consequences function",
            nextSection: "act 2"
        },
        lie: {
            liePrompt: "Why not use him? Tell him to raise a bunch of money.",
            lieDefault: "Sell all your land and raise a bunch of cash. That way you can elope with her when the time comes!",
            consequences: "consequences function",
            nextSection: "act 2"
        }
    }
};

let reassureRoderigo = {
    scene: "Act One, Scene Three",
    characters: ["Roderigo", "You"],
    messages: [{ text: "Desdemona will never go for me.", name: "Roderigo" }],
    narration: "She probably won't.",
    options: {
        truth: {
            truthPrompt: "Tell him to move on.",
            truthDefault: "I'm sure you'll get over her.",
            consequences: "consequences function",
            nextSection: endings.tinderEnder
        },
        lie: {
            liePrompt: "Tell him that Desdemona will get tired of Othello",
            lieDefault: "She'll get tired of Othello, and then she'll go looking for an affair with a younger man.",
            consequences: "consequences function-- trust increases",
            nextSection: askRoderigoForMoney
        }
    }
};

let roderigoIsAMess = {
    scene: "Act One, Scene Three",
    newCharacter: true,
    characters: ["Roderigo", "You"],
    messages: [{ text: "I want to drown myself.", name: "Roderigo" }],
    narration: "Roderigo is an idiot, but he's a rich idiot. He might still come in handy.",
    options: {
        truth: {
            truthPrompt: "Tell him to man up.",
            truthDefault: "You're acting like an idiot. Drown yourself? Who says stuff like that?",
            consequences: "consequences function",
            nextSection: reassureRoderigo
        },
        lie: {
            liePrompt: "Tell him you're his friend",
            lieDefault: "Come on, man. I've got your back. We'll figure this out.",
            consequences: "consequences function",
            nextSection: reassureRoderigo
        }
    }
};

module.exports = {roderigoIsAMess};
