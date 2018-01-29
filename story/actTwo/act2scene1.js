'use strict';
const sceneTwo = require("./act2scene2");
const endings = require("../endings/endings");
const characters = require("../characters/characters");
const characterController = require("../../scripts/characterController");


let getCassioDrunk = {
  name: "getCassioDrunk",
  scene: "Act Two, Scene One",
  characters: ["Roderigo", "You"],
  messages: [{ text: "Oh shit, really?", name: "Roderigo"}, {text: "I knew she'd never go for me.", name: "Roderigo"}],
  narration: "Here's the plan: you need to get Cassio in trouble. That way Desdemona will feel sorry for him and you can convince Othello that her pity is really unfaithfulness.",
  truth: {
    truthPrompt: "Tell Roderigo to start a fight with Cassio.",
    truthDefault: "Just say his mom's a ho. He'll start a fight and the Othello will fire him. No sweat.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
    },
    nextSection: function () {
      return sceneTwo.cassioIsNotDrunk;
    }
  },
  lie: {
    liePrompt: "Tell Roderigo to get Cassio drunk and THEN start a fight with him.",
    lieDefault: "Buy him some drinks and then insult his mom!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
    },
    nextSection: function () {
     return sceneTwo.cassioIsDrunk;
    }
  }
};

let liquidCourage= {
  name: "liquidCourage",
  scene: "Act Two, Scene One",
  characters: ["Roderigo", "You"],
  messages: [{ text: "You think so??", name: "Roderigo"}],
  narration: "You need Roderigo to flirt with Desdemona. That way you can convince Othello that Desdemona is cheating on him.",
  truth: {
    truthPrompt: "Tell him to turn on the charm.",
    truthDefault: "Yeah man just use your natural charm!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      return endings.roderigoIsNotDrunk;
    }
  },
  lie: {
    liePrompt: "Tell him to get smashed.",
    lieDefault: "Hell yeah bro! You just need some liquid courage!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
    },
    nextSection: function () {
     return sceneTwo.roderigoIsDrunk;
    }
  }
};

let happyCouplesMakeMeSick = {
  name: "happyCouplesMakeMeSick",
  scene: "Act Two, Scene One",
  newCharacter: true,
  characters: ["Roderigo", "You"],
  messages: [{ text: "Ugh, you should have seen the happy couple's reunion", name: "Roderigo"}, {text: "Made me want to puke", name: "Roderigo"}],
  narration: "You know they'll be a party tonight to celebrate your victory against the Turks. This could be a perfect opportunity to make your move.",
  truth: {
    truthPrompt: "Tell Roderigo to approach Desdemona at the party that night.",
    truthDefault: "Bro, she's TOTALLY already over Othello. Tonight's your night!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
    },
    nextSection: function () {
      return liquidCourage;
    }
  },
  lie: {
    liePrompt: "Tell Roderigo that Desdemona is in love with Cassio.",
    lieDefault: "Bad news, bro. I think she's into Michael Cassio.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
      characterController.adjustAnger(characters.roderigo, "cassio", 3);
    },
    nextSection: function () {
     return getCassioDrunk;
    }
  }
};

let isntHeHorrible = {
  name: "isntHeHorrible",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "You're horrible", name: "Desdemona" }, {text: "Isn't he horrible?", name: "Desdemona"}, {text: "He's just talking crap. He's more of a soldier than a smooth-talker.", name: "Cassio"}],
  narration: "You are, admittedly, horrible.",
  truth: {
    truthPrompt: "Own it!",
    truthDefault: "I'm just brutally honest!",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
    },
    nextSection: function () {
      if(characters.roderigo.isActive){
        return happyCouplesMakeMeSick;
      } else {
        return endings.tempEnding;
      }
    }
  },
  lie: {
    liePrompt: "Play it off as a joke",
    lieDefault: "Cassios right, I'm all talk.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 2);
      characterController.adjustAnger(characters.desdemona, "iago", -2);
      characterController.adjustAnger(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.cassio, "iago", -1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
    },
    nextSection: function () {
      if (characters.roderigo.isActive) {
        return happyCouplesMakeMeSick;
      } else {
        return endings.tempEnding;
      }
    }
  }
};


let whatWouldYouSayAboutMe = {
  name: "whatWouldYouSayAboutMe ",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "If you had to say something nice about me, what would you say?", name: "Desdemona" }],
  narration: "You're not totally sure what Desdemona is doing. Is she flirting with you? Testing you?",
  truth: {
    truthPrompt: "Tell the truth.",
    truthDefault: "I hardly ever have anything good to say about anyone, especially women",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", -1);
      characterController.adjustAnger(characters.desdemona, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return isntHeHorrible;
    }
  },
  lie: {
    liePrompt: "Play it safe, say something nice.",
    lieDefault: "I'd say you were very pretty and the most devoted wife I've ever seen.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 2);
      characterController.adjustAnger(characters.desdemona, "iago", -2);
      characterController.adjustAnger(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.cassio, "iago", -1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
    },
    nextSection: function () {
      if (characters.roderigo.isActive) {
        return happyCouplesMakeMeSick;
      } else {
        return endings.tempEnding;
      }
    }
  }
};


let nothingNiceToSay = {
  name: "nothingNiceToSay",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Wow", name: "Desdemona" }, { text: "Way to be a jerk, Iago", name: "Desdemona" }, { text: "Just ignore him. He has nothing good to say about me.", name: "Emilia" }],
  narration: "On the one hand, you love arguing with Emilia more than almost anything else. On the other hand, you might need Cassio or Desdemona to vouch for you later, once your plan has progressed. Maybe it'd be better not do this in front of them.",
  truth: {
    truthPrompt: "Lay off, you'll have plenty of opportunities to needle Emilia in private.",
    truthDefault: "I'm just kidding. Jeez, lighten up!",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", -1);

    },
    nextSection: function () {
      if (characters.roderigo.isActive) {
        return happyCouplesMakeMeSick;
      } else {
        return endings.tempEnding;
      }
    }
  },
  lie: {
    liePrompt: "You can't help yourself. Keep going!",
    lieDefault: "No, I don't.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", -1);
      characterController.adjustAnger(characters.desdemona, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return whatWouldYouSayAboutMe;
    }
  }
};


let insultEmilia = {
  name: "insultEmilia",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Don't worry about Othello, Des. You'll be happily reunited within an hour.", name: "Emilia" }, { text: "Thanks, Emilia, you're the best", name: "Desdemona" }],
  narration: "Here's the thing: everything Emilia says automatically pisses you off. You usually respond with a snappy insult, which usually devolves into an argument.",
  truth: {
    truthPrompt: "Let this one slide. You don't want Desdemona and Cassio to see you insulting your wife.",
    truthDefault: "Emilia knows best!",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", -1);

    },
    nextSection: function () {
      if (characters.roderigo.isActive) {
        return happyCouplesMakeMeSick;
      } else {
        return endings.tempEnding;
      }
    }
  },
  lie: {
    liePrompt: "Insult Emilia.",
    lieDefault: "If she gave you as much lip as she gives me, you'd be sick of her by now.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", -1);
      characterController.adjustAnger(characters.desdemona, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return nothingNiceToSay;
    }
  }
};


let emiliaCallsBullshit = {
  name: "emiliaCallsBullshit",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Hang on. I definitely didn't see his ship come in.", name: "Cassio" }, { text: "That's because Iago is full of shit", name: "Emilia" }, { text: "Don't listen to him, Des.", name: "Emilia" }],
  narration: "Unfortunately, your wife has a terrifying gift for seeing through your nonsense.",
  truth: {
    truthPrompt: "Try to play it off as a joke.",
    truthDefault: "JK! I got you so good! LOOOOOOL!",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", -4);
      characterController.adjustTrust(characters.desdemona, "othello", 4); 
      characterController.adjustAnger(characters.desdemona, "othello", -4);
      characterController.adjustTrust(characters.cassio, "iago", -2);
      characterController.adjustAnger(characters.emilia, "iago", 2);
    },
    nextSection: function () {
      return insultEmilia;
    }
  },
  lie: {
    liePrompt: "Stick to your guns, but leave it up in the air.",
    lieDefault: "Suit yourself. I'm just repeating what I heard.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "othello", -2);
      characterController.adjustAnger(characters.emilia, "iago", 4);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return insultEmilia;
    }
  }
};

let whatsHeDoing = {
  name: "whatsHeDoing",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "What would he be doing in town?", name: "Desdemona" }],
  narration: "This is a risky lie. Too many people involved, too easy to be found out.",
  truth: {
    truthPrompt: "Backtrack. Try again later.",
    truthDefault: "Maybe it wasn't his ship after all. I could be wrong.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 1);
      characterController.adjustTrust(characters.emilia, "iago", 1);
      characterController.adjustAnger(characters.emilia, "iago", -1);
    },
    nextSection: function () {
      return insultEmilia;
    }
  },
  lie: {
    liePrompt: "Risk it! #YOLO",
    lieDefault: "I hate to tell you this, but I heard one of the soldiers saying he'd stopped over at a brothel.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "othello", -4);
      characterController.adjustAnger(characters.desdemona, "othello", 4);
      characterController.adjustTrust(characters.desdemona, "iago", 2);
      characterController.adjustAnger(characters.emilia, "iago", 4);
      characterController.adjustTrust(characters.emilia, "iago", -3);
      characterController.adjustTrust(characters.cassio, "iago", -4);
    },
    nextSection: function () {
      return emiliaCallsBullshit;
    }
  }
};

let wheresOthello = {
  newCharacter: true,
  name: "wheresOthello",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Does anyone know when Othello is supposed to get here?", name: "Desdemona" }],
  narration: "The war is over! You won! The troops are regrouping in Cyprus. You, your wife (Emilia) and Cassio have just arrived. Othello is late.",
  truth: {
    truthPrompt: "You're pretty sure his ship caught some bad weather.",
    truthDefault: "I think he got caught in a storm.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "iago", 1);
      characterController.adjustTrust(characters.cassio, "iago", 1);
      characterController.adjustTrust(characters.emilia, "iago", 1);
    },
    nextSection: function () {
      return insultEmilia;
    }
  },
  lie: {
    liePrompt: "What if you could turn Desdemona against Othello? What if you could convince her that he's cheating on her?",
    lieDefault: "I saw his ship make port. He must have gotten held up in town.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "othello", -1);
      characterController.adjustAnger(characters.emilia, "iago", 3);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return whatsHeDoing;
    }
  }
};

module.exports = {wheresOthello};



