'use strict';


// begin scene 3, ends with them all leaving and Iago convincing Roderigo to give him $$

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

let askRoderigoForMoney= {
    characters: ["Roderigo", "You"],
    messages: [{ text: "What should I do?.", name: "Roderigo" }],
    narration: "She probably won't.",
    options: {
        truth: {
            truthPrompt: "Tell him to wait patiently.",
            truthDefault: "Just wait it out and be nice to her. She'll come around.",
            consequences: "consequences function",
            nextSection: "act 2"
        },
        lie: {
            liePrompt: "Tell him to raise a bunch of money.",
            lieDefault: "Sell all your land and raise a bunch of cash. That way you can elope with her when the time comes!",
            consequences: "consequences function",
            nextSection: "act 2"
        }
    }
};

let reassureRoderigo = {
    characters: ["Roderigo", "You"],
    messages: [{ text: "Desdemona will never go for me.", name: "Roderigo" }],
    narration: "She probably won't.",
    options: {
        truth: {
            truthPrompt: "Tell him to move on.",
            truthDefault: "I'm sure you'll get over her.",
            consequences: "consequences function",
            nextSection: theEnd
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
    newCharacter: true,
    characters: ["Roderigo", "You"],
    messages: [{ text: "I want to drown myself.", name: "Roderigo" }],
    narration: "Roderigo is an idiot, but he's a rich idiot. He might still come in handy.",
    options: {
        truth: {
            truthPrompt: "Tell him to man up.",
            truthDefault: "You're acting like an idiot. Drown yourself? Who says stuff like that?",
            consequences: "consequences function -- trust increases",
            nextSection: reassureRoderigo
        },
        lie: {
            liePrompt: "Tell him you're his friend",
            lieDefault: "Come on, man. I've got your back. We'll figure this out.",
            consequences: "consequences function-- trust increases more",
            nextSection: reassureRoderigo
        }
    }
};
let skipGroupText = {
    characters: ["Othello", "You"],
    messages: [
        { text: "Okay, I'll fill you in.", name: "Othello" },
        { text: "Brabantio is in the group and he's pitching a fit", name: "Othello" },
        { text: "Okay, we're fine. The Duke took my side. I knew he would.", name: "Othello" },
        { text: "Pack your bags, we're going to Cyprus!" },
    ],
    narration: "Looks like you're going to Cyprus.",
    options: {
        truth: {
            truthPrompt: "Play it straight",
            truthDefault: "Good deal. See you tomorrow.",
            consequences: "consequences function -- trust increases",
            nextSection: roderigoIsAMess
        },
        lie: {
            liePrompt: "Suck up to Othello",
            lieDefault: "So glad you got off the hook with the Duke! The Turks won't even know what hit em!",
            consequences: "consequences function-- trust increases more",
            nextSection: roderigoIsAMess
        }
    }
};
let groupText= {
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
            nextSection: roderigoIsAMess
        },
        lie: {
            liePrompt: "Suck up to Othello",
            lieDefault: "Of course, sir! I'd go anywhere with Othello.",
            consequences: "consequences function-- trust increases more",
            nextSection: roderigoIsAMess
        }
    }
};

let brabantioCanSuckMyDick= {
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

let imGladYouDidnt= {
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

// begin scene two
let warnOthello= {
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
            nextSection: warnOthello
        },
        lie: {
            liePrompt: "Tell Roderigo where Othello will be and THEN to delete his text history.",
            lieDefault: "Othello will be at the Sagittarius Inn. Don't tell him I told you. Delete your texts.",
            consequences: "consequences function",
            nextSection: warnOthello
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


module.exports = {openingLines};









