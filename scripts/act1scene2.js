'use strict';
const sceneThree = require("./act1scene3");

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
    options: {
        truth: {
            truthPrompt: "Play it straight",
            truthDefault: "Good deal. See you tomorrow.",
            consequences: "consequences function",
            nextSection: sceneThree.roderigoIsAMess
        },
        lie: {
            liePrompt: "Suck up to Othello",
            lieDefault: "So glad you got off the hook with the Duke! The Turks won't even know what hit em!",
            consequences: "consequences function",
            nextSection: sceneThree.roderigoIsAMess
        }
    }
};
let groupText = {
    scene: "Act One, Scene Two",
    characters: ["Othello", "Brabantio", "The Duke", "You", "Desdemona"],
    newCharacter: true,
    messages: [
        { text: "You wanted to talk to me?", name: "Othello" },
        { text: "Bad news in Cyprus. The Turks outnumber us three to one.", name: "The Duke" },
        { text: "I'm sending you in, Othello. You're the only man for the job", name: "The Duke" },
        { text: "Hang a second!", name: "Brabantio" },
        { text: "Do you have a better plan, Brabantio?", name: "The Duke" },
        { text: "No, but something terrible has happened my daughter!", name: "Brabantio" },
        { text: "Is she dead?", name: "The Duke" },
        { text: "She's dead to me! She was stolen away from me with witchcraft!", name: "Brabantio" },
        { text: "Witchcraft! No! Name the guy who did it and I'll let you decide their punishment.", name: "The Duke" },
        { text: "It was Othello!", name: "Brabantio" },
        { text: "On second thought, withcraft isn't really a thing.", name: "The Duke" },
        { text: "I know Desdemona and she would never have eloped with this man on her own free will.", name: "Brabantio" },
        { text: "Othello, what do you have to say?", name: "The Duke" },
        { text: "It's true that I've married Desdemona.", name: "Othello" },
        { text: "See!", name: "Brabantio" },
        { text: "But there was no witchcraft involved.", name: "Othello" },
        { text: "I'm not very good at talking. I've been a soldier all my life, and fighting's what I know best.", name: "Othello" },
        { text: "But if you let me, I'll tell you the story of how we fell in love.", name: "Othello" },
        { text: "Go ahead.", name: "The Duke" },
        { text: "It started when Brabantio used to have me around for dinner.", name: "Othello" },
        { text: "He'd ask me about different battles and I'd tell stories about my adventures in and out of wartime.", name: "Othello" },
        { text: "Cannibals, caves, deserts, being sold as a slave, escaping, that kind of thing.", name: "Othello" },
        { text: "Desdemona always listened so carefully.", name: "Othello" },
        { text: "She asked wonderful questions. She seemed genuinely sad that I'd had to endure so much.", name: "Othello" },
        { text: "I guess she loves me for everything I've been through and I love her for caring about it so deeply.", name: "Othello" },
        { text: "No witchcraft to speak of.", name: "Othello" },
        { text: "You can ask her yourself.", name: "Othello" },
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
            truthDefault: "Yes, sir!",
            consequences: "consequences function",
            nextSection: sceneThree.roderigoIsAMess
        },
        lie: {
            liePrompt: "Suck up to Othello",
            lieDefault: "Woohoo! I'm so ready to kick some Turkish butt!",
            consequences: "consequences function",
            nextSection: sceneThree.roderigoIsAMess
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
    scene: "Act One, Scene Two",
    characters: ["Othello", "You"],
    messages: [{ text: "Thanks for watching my back, man.", name: "Othello" },
    { text: "Oh, hey. Cassio just texted. He said the Duke wants to talk to us about the war in Cyprus", name: "Othello" },
    { text: "I'm gonna start a group text, do you want in?", name: "Othello" }],
    narration: "On the one hand, you love knowing everybody's business. On the other hand, group texts are the actual worst.",
    options: {
        truth: {
            truthPrompt: "Get in on the group text.",
            truthDefault: "Yes, please, count me in!.",
            consequences: "consequences function",
            nextSection: groupText
        },
        lie: {
            liePrompt: "Skip the group text.",
            lieDefault: "Fill me in later.",
            consequences: "consequences function",
            nextSection: skipGroupText
        }
    }
};

let warnOthello = {
    scene: "Act One, Scene Two",
    characters: ["Othello", "You"],
    newCharacter: true,
    messages: "playerWritesFirst",
    narration: "You really want Othello to trust you. You could warn him about Brabantio or tell him that Roderigo was insulting him.",
    options: {
        truth: {
            truthPrompt: "Warn him that Brabantio knows about the elopement.",
            truthDefault: "FYI, I think Brabantio found out about you and Desdemona.",
            consequences: "consequences function -- trust increases",
            nextSection: brabantioCanSuckMyDick
        },
        lie: {
            liePrompt: "Shit talk Roderigo.",
            lieDefault: "Dude, you should have heard what Roderigo was saying about you! The only reason I didn't kill him on the spot is because I'm too soft.",
            consequences: "consequences function-- trust increases more",
            nextSection: imGladYouDidnt
        }
    }
};

module.exports = {warnOthello};