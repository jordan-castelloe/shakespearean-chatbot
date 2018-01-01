'use strict';
const sceneThree = require("./act1scene3");

let skipGroupText = {
    characters: ["Othello", "You"],
    messages: [
        { text: "Okay, I'll fill you in.", name: "Othello" },
        { text: "Brabantio is in the group and he's pitching a fit", name: "Othello" },
        { text: "Okay, we're fine. The Duke took my side. I knew he would.", name: "Othello" },
        { text: "Pack your bags, we're going to Cyprus!", name: "Othello" },
    ],
    narration: "Looks like you're going to Cyprus.",
    options: {
        truth: {
            truthPrompt: "Play it straight",
            truthDefault: "Good deal. See you tomorrow.",
            consequences: "consequences function -- trust increases",
            nextSection: sceneThree.roderigoIsAMess
        },
        lie: {
            liePrompt: "Suck up to Othello",
            lieDefault: "So glad you got off the hook with the Duke! The Turks won't even know what hit em!",
            consequences: "consequences function-- trust increases more",
            nextSection: sceneThree.roderigoIsAMess
        }
    }
};
let groupText = {
    characters: ["Othello", "Brabantio", "The Duke", "You", "Desdemona"],
    newCharacter: true,
    messages: [
        { text: "You wanted to talk to me?", name: "Othello" },
        { text: "Bad news in Cyprus. The Turks outnumber us three to one.", name: "The Duke" },
        { text: "I'm sending you in, Othello. You're the only man for the job", name: "The Duke" },
        { text: "Hang a second!", name: "Brabantio" },
        { text: "Do you have thoughts on Cyprus, Brabantio?", name: "The Duke" },
        { text: "No, I want to talk about my daughter!", name: "Brabantio" },
        { text: "Is she dead?", name: "The Duke" },
        { text: "To me, yes! She was stolen away from me with witchcraft!", name: "Brabantio" },
        { text: "Witchcraft! No! Name the person and I'll let you decide their punishment.", name: "The Duke" },
        { text: "It was Othello!", name: "Brabantio" },
        { text: "On second thought, withcraft isn't really a thing.", name: "The Duke" },
        { text: "I know Desdemon and she would never have eloped with this man on her own free will.", name: "Brabantio" },
        { text: "Othello, what do you have to say?", name: "The Duke" },
        { text: "It's true that I've married Desdemona.", name: "Othello" },
        { text: "You see!", name: "Brabantio" },
        { text: "But there was no witchcraft involved. I'm not very good at talking. I've been a soldier all my life, and fighting's what I know best. But if you let me, I'll tell you the story of how we fell in love.", name: "Othello" },
        { text: "Go ahead.", name: "The Duke" },
        { text: "It started when Brabantio used to have me around for dinner. He'd ask me about different battles and I'd tell stories about my adventures in and out of wartime. Cannibals, caves, deserts, being sold as a slave, escaping.", name: "Othello" },
        { text: "Desdemona always listened so carefully. She asked wonderful questions. She seemed genuinely sad that I'd had to endure so much.", name: "Othello" },
        { text: "There's no witchcraft. She loves me for everything I've been through and I love her for caring about it so deeply. You can ask her yourself.", name: "Othello" },
        { text: "I think a story like that would win my own daughter over. Desdemona, what do you have to say?", name: "The Duke" },
        { text: "Dad, I love you, but I've chosen to marry Othello. I want to go with him to Cyprus.", name: "Desdemona" },
        { text: "Good riddance! You'll never be welcome under my roof again!", name: "Brabantio" },
        { text: "Keep an eye on her, Othello. She lied to me. She might lie to you too.", name: "Brabantio" },
        { text: "Brabantio, don't look so glum. Your son-in-law is a good man.", name: "The Duke" },
        { text: "Iago and Cassio, you guys are going too Cyprus too.", name: "The Duke" },
    ],
    narration: "Well, looks like you're going to Cyprus.",
    options: {
        truth: {
            truthPrompt: "Play it straight",
            truthDefault: "I'll pack my bags!",
            consequences: "consequences function -- trust increases",
            nextSection: sceneThree.roderigoIsAMess
        },
        lie: {
            liePrompt: "Suck up to Othello",
            lieDefault: "Of course, sir! I'd go anywhere with Othello.",
            consequences: "consequences function-- trust increases more",
            nextSection: sceneThree.roderigoIsAMess
        }
    }
};

let brabantioCanSuckMyDick = {
    characters: ["Othello", "You"],
    messages: [
        { text: "Brabantio can whine all he wants. I've done enough for the Venetian government that it won't make a dent", name: "Othello" },
        { text: "Speaking of, Cassio just texted and says the Duke wants to talk to us about the war in Cyprus", name: "Othello" },
        { text: "I'm gonna start a group text, want me to include you?", name: "Othello" }],
    narration: "On the one hand, you love knowing everybody's business. On the other hand, group texts are the actual worst.",
    options: {
        truth: {
            truthPrompt: "Get in on the group text.",
            truthDefault: "Yes please! Count me in!",
            consequences: "consequences function -- trust increases",
            nextSection: groupText
        },
        lie: {
            liePrompt: "Skip the group text.",
            lieDefault: "Nah, fill me in later.",
            consequences: "consequences function-- trust increases more",
            nextSection: skipGroupText
        }
    }
};

let imGladYouDidnt = {
    characters: ["Othello", "You"],
    messages: [{ text: "I'm glad you didn't kill him.", name: "Othello" },
    { text: "Oh, hey. Cassio just texted. He said the Duke wants to talk to us about the war in Cyprus", name: "Othello" },
    { text: "I'm gonna start a group text, do you want in?", name: "Othello" }],
    narration: "On the one hand, you love knowing everybody's business. On the other hand, group texts are the actual worst.",
    options: {
        truth: {
            truthPrompt: "Get in on the group text.",
            truthDefault: "Yes, please, count me in!.",
            consequences: "consequences function -- trust increases",
            nextSection: groupText
        },
        lie: {
            liePrompt: "Skip the group text.",
            lieDefault: "Fill me in later.",
            consequences: "consequences function-- trust increases more",
            nextSection: "skip the groupText"
        }
    }
};

let warnOthello = {
    characters: ["Othello", "You"],
    newCharacter: true,
    messages: [{ text: "Hey, Iago. Are you going to make it to the wedding party tomorrow?", name: "Othello" }],
    narration: "You need Othello to trust you.",
    options: {
        truth: {
            truthPrompt: "Warn Othello that Brabantio is coming.",
            truthDefault: "Do you have all your marriage paperwork together? Brabantio's found out about the marraige and he's not pleased.",
            consequences: "consequences function -- trust increases",
            nextSection: brabantioCanSuckMyDick
        },
        lie: {
            liePrompt: "Shit talk Roderigo.",
            lieDefault: "Dude, you should have heard the shit Roderigo was saying about you! I almost had to kill him!",
            consequences: "consequences function-- trust increases more",
            nextSection: imGladYouDidnt
        }
    }
};

module.exports = {warnOthello};