(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const sceneTwo = require("./act1scene2");
const endings = require("./endings");

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
            nextSection: brabantioIsPissed
        },
        lie: {
            liePrompt: "Might as well go the whole nine yards.",
            lieDefault: "Oooh tell him you heard she was preggo",
            consequences: "consequences function",
            nextSection: brabantioIsPissed
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
            nextSection: endings.tinderEnder
        },
        lie: {
            liePrompt: "Just kidding, that was lame. Stir the pot! Let's tell her dad!",
            lieDefault: "On second thought, we might owe it to her dad to let him know. Man to man.",
            consequences: "consequences function",
            nextSection: tellHerDad
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
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "If you hate him, you should quit.", name: "Roderigo" }],
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
    scene: "Act One, Scene One",
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
    scene: "Act One, Scene One",
    characters: ["Roderigo", "You"],
    messages: [{ text: "I thought you hated him.", name: "Roderigo" }],
    narration: "You don't really hate Othello, but he is, after all, your boss. Othello recently passed you over for a promotion in favor of Michael Cassio, a math major straight out of school. Not cool.",
    options: {
        truth: {
            truthPrompt: "Explain the situation in emotionally reasonable terms.",
            truthDefault: "Hate's a strong word, but it pissed me off when he promoted Michael Cassio over me.",
            consequences: "consequences function",
            nextSection: whyHelpMe
        },
        lie: {
            liePrompt: "Say you totally hate him.",
            lieDefault: "I hate his guts! The bastard passed me over for a promotion! You'll see, I'll screw him over!",
            consequences: "consequences function",
            nextSection: youShouldQuit
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
            consequences: "",
            nextSection: function(){
                let nextSection = doYouHateHim;
                if (2+2 == 4){nextSection = whyHelpMe;}
                return nextSection;
            }
        }, 
        lie: {
            liePrompt: "Tell him you had no idea.",
            lieDefault: "I didn't, I swear!",
            consequences: "",
            nextSection: doYouHateHim
        }
    }
};


module.exports = {openingLines};










},{"./act1scene2":2,"./endings":6}],2:[function(require,module,exports){
'use strict';
const sceneThree = require("./act1scene3");
const endings = require("./endings");

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
    options: {
        truth: {
            truthPrompt: "Play it straight",
            truthDefault: "Yes, sir!",
            consequences: "consequences function",
            nextSection: sceneThree.roderigoIsAMess
        },
        lie: {
            liePrompt: "Suck up to Othello",
            lieDefault: "WOOHOO! Hell yeah! Can't wait to kick some Turkish butt!",
            consequences: "consequences function",
            nextSection: sceneThree.roderigoIsAMess
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
    options: {
        truth: {
            truthPrompt: "Stick to your guns",
            truthDefault: "Don't listen to him, Mr. Duke! He'll witchcraft you!",
            consequences: "consequences function",
            nextSection: endings.youreFired
        },
        lie: {
            liePrompt: "Blame autocorrect.",
            lieDefault: "Damn autocorrect! What I meant was Othello DIDN'T use witchcraft.",
            consequences: "consequences function",
            nextSection: groupTextTwo
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
    options: {
        truth: {
            truthPrompt: "Sieze the opportunity and stick up for Brabantio. Try to get Othello fired.",
            truthDefault: "Mr. Duke, Brabantio is telling the truth. Othello used witchcraft to seduce Desdemona!",
            consequences: "consequences function",
            nextSection: wtfIago
        },
        lie: {
            liePrompt: "Play the long game and stick up for Othello. Try to gain his trust.",
            lieDefault: "Mr. Duke, Othello would never! Brabantio is raving!",
            consequences: "consequences function",
            nextSection: groupTextTwo
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
            consequences: "consequences function",
            nextSection: groupText
        },
        lie: {
            liePrompt: "Skip the group text.",
            lieDefault: "Nah, fill me in later.",
            consequences: "consequences function",
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
},{"./act1scene3":3,"./endings":6}],3:[function(require,module,exports){
'use strict';

const endings = require("./endings");

let askRoderigoForMoney = {
    scene: "Act One, Scene Three",
    characters: ["Roderigo", "You"],
    messages: [{ text: "What should I do?", name: "Roderigo" }],
    narration: "You're hatching a plan: if you really want to screw Othello over, you'll need to ruin his marriage. You'll have to make him think that Desdemona having an affair. It might be nice to have Roderigo around for the dirty work. On the other hand, he's emotional and a pain and you work better alone.",
    options: {
        truth: {
            truthPrompt: "Leave him out of the plan. You can do this on your own.",
            truthDefault: "Just wait it out and be nice to her. She'll come around.",
            consequences: "consequences function",
            nextSection: endings.tempEnding
        },
        lie: {
            liePrompt: "Why not use him? Tell him to raise a bunch of money.",
            lieDefault: "Sell all your land and raise a bunch of cash. That way you can elope with her when the time comes!",
            consequences: "consequences function",
            nextSection: endings.tempEnding
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

},{"./endings":6}],4:[function(require,module,exports){
'use strict';

const characters = require("./characters.js");

},{"./characters.js":5}],5:[function(require,module,exports){
'use strict';

let othello = {
    name: "Othello",
    relationships: {
        desdemona: {
            trust: 10,
            anger: 0
        }, 
        iago: {
            trust: 10,
            anger: 0
        },
        emilia: {
            trust: 10,
            anger: 0
        },  
        cassio: {
            trust: 10,
            anger: 0
        }, 
    
    }
};

let desdemona = {
    name: "Desdemona",
    relationships: {
        othello: {
            trust: 10,
            anger: 0
        }, 
        iago: {
            trust: 10,
            anger: 0
        }, 
        cassio: {
            trust: 10,
            anger: 0
        }, 
        emilia: {
            trust: 10,
            anger: 0
        }, 
        roderigo: {
            trust: 6,
            anger: 0
        }, 
    
    }
};

let emilia = {
    name: "Emilia",
    relationships: {
        othello: {
            trust: 10,
            anger: 0
        }, 
        iago: {
            trust: 5,
            anger: 5
        }, 
        cassio: {
            trust: 10,
            anger: 0
        }, 
        emilia: {
            trust: 10,
            anger: 0
        }, 
        roderigo: {
            trust: 7,
            anger: 0
        }, 
    
    }
};

let cassio = {
    name: "Cassio",
    relationships: {
        desdemona: {
            trust: 10,
            anger: 0
        }, 
        iago: {
            trust: 10,
            anger: 0
        }, 
        othello: {
            trust: 10,
            anger: 0
        },
        roderigo: {
            trust: 10,
            anger: 0
        },
       

    }
};

module.exports.charactersArray = [othello, desdemona, cassio, emilia];



  

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';
const storyController = require("./storyController");
const act1scene1 = require("./act1scene1");



storyController.loadScene(act1scene1);




},{"./act1scene1":1,"./storyController":9}],8:[function(require,module,exports){
'use strict';

module.exports.printSection = function (section) {

    if(section.messages != "playerWritesFirst"){
        for (let i = 0; i < section.messages.length; i++) {
            let typingIndicator = createTypingIndicator(section.messages[i].name);
            let messageDiv = createMessageDiv(section.messages[i].text, section.messages[i].name);
            startMessageSequence(typingIndicator, messageDiv, i);
        }
    }
    $('.narration').text(section.narration);
    $('.truth-text').text(section.options.truth.truthPrompt);
    $('.truth-textarea').attr('placeholder', section.options.truth.truthDefault);
    $('.lie-text').text(section.options.lie.liePrompt);
    $('.lie-textarea').attr('placeholder', section.options.lie.lieDefault);
    $('#character-list').text(section.characters.join(', '));
    $('#scene-title').text(section.scene);
};

function startMessageSequence(typingIndicator, messageDiv, messageIndex){
    let offset = 2000;
    if (messageIndex == 0){
        appendTypingIndicator(typingIndicator);
        setTimeout(switchMessageDiv, offset, typingIndicator, messageDiv);
    } else if (messageIndex > 0){
        let typingOffset = messageIndex * offset;
        let messageOffset = typingOffset + offset;
        setTimeout(appendTypingIndicator, typingOffset, typingIndicator);
        setTimeout(switchMessageDiv, messageOffset, typingIndicator, messageDiv);
    }
}

function appendTypingIndicator(typingIndicator){
    typingIndicator.appendTo($("#message-area"));
    scrollToBottom();
}

function switchMessageDiv(typingIndicator, messageDiv) {
    typingIndicator.remove();
    messageDiv.appendTo("#message-area");
}

module.exports.printTruth = function (currentSection) {
    let messageText = $(".truth-textarea").val();
    if(messageText == ""){
        messageText = currentSection.options.truth.truthDefault;
    }
    printPlayerMessage(messageText);

};

module.exports.printLie = function (currentSection) {
    let messageText = $(".lie-textarea").val();
    if (messageText == "") {
        messageText = currentSection.options.lie.lieDefault;
    }
    printPlayerMessage(messageText);
};

function printPlayerMessage (text) {
    createMessageDiv(text, "You").appendTo($("#message-area"));
    clearTextArea();
    scrollToBottom();
}


function createMessageDiv(text, character) {
    let messageDiv = $("<div>", { class: `message-div ${character}` }).text(`${character}: ${text}`);
    return messageDiv;
}

function createTypingIndicator(character){
    let typingIndicator = $("<div>", {class: `typing-indicator message-div ${character}`});
    let dotOne = $("<span>").appendTo(typingIndicator);
    let dotTwo = $("<span>").appendTo(typingIndicator);
    let dotThree = $("<span>").appendTo(typingIndicator);
    return typingIndicator;
}

function clearTextArea() {
    $(".message-textarea").val("");
}

function scrollToBottom(){
    $('#message-area').scrollTop($('#message-area')[0].scrollHeight);
}

module.exports.clearMessageArea= function(){
    $("#message-area").text("");
};











},{}],9:[function(require,module,exports){
'use strict';

const messagePrinter = require("./messagesView.js");
const characterController = require("./characterController.js");




module.exports.loadScene = function(scene){
   
    let currentSection = scene.openingLines;
    let nextSection = "";

    messagePrinter.printSection(scene.openingLines);
    
    $('.send-truth').click(function () {
        tellTheTruth();

    });

    $(".truth-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            tellTheTruth();
        }
    });

    $('.send-lie').click(function () {
       tellALie();
    });


    $(".lie-textarea").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            tellALie();
        }
    });


    function printNextSection(truthOrLie) {
        nextSection = currentSection.options[truthOrLie].nextSection;
        if ('newCharacter' in nextSection) {
            messagePrinter.clearMessageArea();
        }
        messagePrinter.printSection(nextSection());
        currentSection = nextSection;
    }

    function tellALie() {
        messagePrinter.printLie(currentSection);
        printNextSection("lie");
    }

    function tellTheTruth() {
        messagePrinter.printTruth(currentSection);
        printNextSection("truth");
    }
 
};









},{"./characterController.js":4,"./messagesView.js":8}]},{},[7]);
