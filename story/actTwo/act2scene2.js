// A herald announces that Othello plans revelry for the evening in celebration of Cyprus’s safety from the Turks, and also in celebration of his marriage to Desdemona.

// add into consequence functions if next scene has a property of new character or if something changes about the next scene

let roderigoWantsOut = {
  name: "roderigoWantsOut",
  scene: "Act Two, Scene Two",
  newCharacter: true,
  characters: ["Roderigo", "You"],
  messages: [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I spend all my money, and look what I get.", name: "Roderigo" }],
  narration: "Roderigo has every right to be pissed at you, but you might still need him.",
  truth: {
    truthPrompt: "Apologize and tell him to cut his losses.",
    truthDefault: "You're right, I'm sorry. No hard feelings if you want to go on back to Venice.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
      characterController.deactivateCharacter(characters.roderigo);
    },
    nextSection: function () {
      return endings.tempEnding;
    }
  },
  lie: {
    liePrompt: "Tell him to keep going.",
    lieDefault: "Don't give up now! Nothing worth having comes easy, bro. Look how far we've gotten already! Othello and Desdemona are in the palm of our hand.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      return endings.tempEnding;
    }
  }
};

let thatsAGreatIdea= {
  name: "thatsAGreatIdea",
  scene: "Act Two, Scene Two",
  characters: ["Cassio", "You"],
  messages: [{ text: "That's a great idea", name: "Cassio" }],
  narration: "You laugh maniacally to yourself. Everything is going according to plan!",
  truth: {
    truthPrompt: "Tell him how nice Desdemona is.",
    truthDefault: "Desdemona's such a softie, she'll totally go for it.",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "othello", 1);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      roderioWantsOut.messages = [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I get my ass kicked by Cassio, and nothing came of it.", name: "Roderigo" }, { text: "Desdemona will never go for me.", name: "Roderigo" }];
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "Tell him what a great guy he is.",
    lieDefault: "You're such a good officer, Othello will totally regret firing you.",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 2);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      roderioWantsOut.messages = [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I get my ass kicked by Cassio, and nothing came of it.", name: "Roderigo" }, { text: "Desdemona will never go for me.", name: "Roderigo" }];
      return roderigoWantsOut;
    }
  }
};

let cassioIsDepressed = {
  name: "cassioIsDepressed",
  scene: "Act Two, Scene Two",
  characters: ["Cassio", "You"],
  messages: [{ text: "I can't believe I got so drunk last night", name: "Cassio" }, { text: "I'm ashamed of myself", name: "Cassio" }, { text: "Othello was right to fire me", name: "Cassio" }],
  narration: "Realistically, Othello probably won't give Cassio his job back. But if you can convince Cassio to appeal to Desdemona for support, you can probably convince Othello that Desdemona is unfaithful.",
  truth: {
    truthPrompt: "Tell him to cut his losses",
    truthDefault: "I'm sorry bro. I'm sure you'll find another job in Venice, you're very employable.",
    consequences: function () {
      characterController.deactivateCharacter(characters.cassio);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      roderioWantsOut.messages = [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I get my ass kicked by Cassio, and nothing came of it.", name: "Roderigo" }, {text: "Desdemona will never go for me.", name: "Roderigo"}];
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "Tell him to go to Desdemona",
    lieDefault: "Listen, you should talk to Desdemona. I bet she can get you back on Othello's good side.",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 2);
    },
    nextSection: function () {
      return thatsAGreatIdea;
    }
  }
};


let othelloInvestigates= {
  newCharacter = true;
  name: "othelloInvestigates",
  scene: "Act Two, Scene Two",
  characters: ["Othello", "You", "Cassio"],
  messages: [{ text: "Okay, what's up with this guy named Roderigo?", name: "Othello" }],
  narration: "Should you throw Roderigo under the bus to gain Othello's trust, or stick up for Roderigo?",
  truth: {
    truthPrompt: "Stick up for Roderigo",
    truthDefault: "Sorry, he's just drunk. I'll get him home.",
    consequences: function () {
      characterController.adjustTrust(characters.othello, "iago", -1);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "Throw Roderigo under the bus",
    lieDefault: "This asshole is trying to flirt with Desdemona!",
    consequences: function () {
      characterController.adjustTrust(characters.othello, "iago", 4);
    },
    nextSection: function () {
      roderigoGetsFired.newCharacter = true;
      return roderigoGetsFired;
    }
  }
};


let roderigoStartsAFight = {
  name: "roderigoStartsAFight",
  scene: "Act Two, Scene Two",
  characters: ["Roderigo", "You"],
  messages: [{ text: "Well your plan worked, Cassio just beat my ass", name: "Roderigo" }, { text: "Othello's coming down to investigate", name: "Roderigo" }, { text: "WTF, Othello just fired him for drinking on the job!", name: "Roderigo" }],
  narration: "Your sinister plot worked! Woohoo!",
  truth: {
    truthPrompt: "Gloat in your victory",
    truthDefault: "Hell yeah! I'm a genius!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", -1);
    },
    nextSection: function () {
      if (roderigo.iago.trust > 7){
        return endings.tempEnding // move on to next scene without roderigo wanting out
      } else {
        return roderigoWantsOut;
      }
    }
  },
  lie: {
    liePrompt: "Tell Roderigo that he's a genius",
    lieDefault: "You're a genius, bro! Now Desdemona's all yours!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      if (roderigo.iago.trust > 7) {
        return endings.tempEnding // move on to next scene without roderigo wanting out
      } else {
        return roderigoWantsOut;
      }
    }
  }
};


let roderigoGetsFired = {
  name: "roderigoGetsFired",
  scene: "Act Two, Scene Two",
  characters: ["Roderigo", "You"],
  messages: [{ text: "Welp, Othello just fired me", name: "Roderigo" }],
  narration: "Drat.",
  truth: {
    truthPrompt: "Apologize and tell him to go home.",
    truthDefault: "Sorry man, that sucks. You should go back to Venice, I'll hit you up when we get back.",
    consequences: function () {
      characterController.deactivateCharacter(characters.roderigo);
    },
    nextSection: function () {
      return endings.tempEnding;
    }
  },
  lie: {
    liePrompt: "Tell him to stick around.",
    lieDefault: "Bummer dude! Well, you might as well stay in Cyprus and see what happens.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", -3);
      characterController.adjustTrust(characters.othello, "roderigo", -3);
    },
    nextSection: function () {
        return roderigoWantsOut;
      }
    }
};


let roderigoTalksToHer = {
  name: "roderigoTalksToHer",
  scene: "Act Two, Scene Two",
  characters: ["Roderigo", "You"],
  messages: [{ text: "Okay, I'm about to go talk to her", name: "Roderigo" }, { text: "It's not going great", name: "Roderigo" }, { text: "Oh crap, Othelleo just sat down. I'm screwed.", name: "Roderigo" }],
  narration: "Roderigo will totally get fired if Othello catches him flirting with Desdemona.",
  truth: {
    truthPrompt: "Tell him to cut his losses.",
    truthDefault: "Dude, get out of there. You don't want Othello to hear you talking to her.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "#YOLO.",
    lieDefault: "Who cares if Othello hears you! Don't miss your chance, dude!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", -1);
      characterController.adjustAnger(characters.othello, "roderigo",5);
    },
    nextSection: function () {
      return roderigoGetsFired;
    }
  }
};


let cassioTellsOthello = {
  name: "cassioTellsOthello",
  scene: "Act Two, Scene Two",
  characters: ["Cassio", "You"],
  messages: [{ text: "I think I better tell Othello that he's trying to start trouble", name: "Cassio" }],
  narration: "If Othello fires Roderigo, you've lost your henchman. On the other hand, Roderigo is a total pain.",
  truth: {
    truthPrompt: "Encourage Cassio to tell Othello.",
    truthDefault: "That's a good idea, Othello should definitely hear about it",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 2);
    },
    nextSection: function () {
      roderigoGetsFired.newCharacter = true;
      return othelloInvestigates;
    }
  },
  lie: {
    liePrompt: "Tell him you'll talk to Roderigo.",
    lieDefault: "Nah, don't tell Othello yet. I'll try talking to Roderigo first.",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 1);
    },
    nextSection: function () {
      return roderigoWantsOut;
    }
  }
};

let roderigoIsDrunk = {
  name: "roderigoIsDrunk",
  scene: "Act Two, Scene Two",
  characters: ["Roderigo", "You"],
  messages: [{ text: "THIS WINE IS AMAJING", name: "Roderigo" }],
  narration: "Later that night: you and Roderigo are on guard duty at a party. Roderigo is a sloppy drunk.",
  truth: {
    truthPrompt: "Tell him to go home.",
    truthDefault: "Dude, you're wasted. Go home, I'll take your shift.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 4);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = false;
      roderigoWantsOut.messages = [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I spend all my money, I have a horrible hangover, and nothing came of it", name: "Roderigo" }, { text: "Desdemona will never go for me. I'm going home.", name: "Roderigo" }];
      return roderigoWantsOut; 
    }
  },
  lie: {
    liePrompt: "Tell him to go talk to Desdemona.",
    lieDefault: "Now's your chance! Go tell her how you feel!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      roderigoTalksToHer.messages = [{ text: "Okay, I'm abjout to g talK to her", name: "Roderigo" }, { text: "ITS NOT GOING WELL", name: "Roderigo" }, { text: "red alert SOS Othelleo just sat down. Im screwed.", name: "Roderigo" }];
      return roderigoTalksToHer;
    }
  }
};

let roderigoIsNotDrunk = {
  name: "roderigoIsNotDrunk",
  scene: "Act Two, Scene Two",
  characters: ["Roderigo", "You"],
  messages: [{ text: "Dude, I'm too scared to talk to her", name: "Roderigo" }],
  narration: "Later that night: you and Roderigo are on guard duty. Roderigo is getting cold feet.",
  truth: {
    truthPrompt: "Give him an easy out.",
    truthDefault: "Yeah, maybe tonight's not your night. Go home, I'll take your shift.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 1);
    },
    nextSection: function () {
      roderigoWantsOut.messages = [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I spend all my money, and nothing happens", name: "Roderigo" }, { text: "Desdemona will never go for me. I'm going home.", name: "Roderigo" }];
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "Tell him to go for it.",
    lieDefault: "Dude, she's totally into you! Just go say hey!",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      return roderigoGetsFired;
    }
  }
};

let cassioIsDrunk = {
  name: "cassioIsDrunk",
  scene: "Act Two, Scene Two",
  characters: ["Cassio", "You"],
  messages: [{ text: "I LOVE YOU MAN", name: "Cassio" }],
  narration: "Later that night: you, Cassio, and Roderigo are on guard duty. Cassio is drunk and generally acting like an idiot, but Roderigo hasn't managed to start a fight with him yet.",
  truth: {
    truthPrompt: "Tell him to go home.",
    truthDefault: "Dude, you're wasted. Go home, I'll take your shift.",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 4);
    },
    nextSection: function () {
      roderigoWantsOut.newCharacter = true;
      roderigoWantsOut.messages = [{ text: "I'm done.", name: "Roderigo" }, { text: "I come all the way to Cyprus, I spend all my money, I get Cassio drunk, and then he just flat out goes home!", name: "Roderigo" }, { text: "I didn't even have a chance to get him fired.", name: "Roderigo" }];
      return roderigoWantsOut;
    }
  },
  lie: {
    liePrompt: "Tell him that Roderigo was talking shit.",
    lieDefault: "Hey, I just heard Roderigo saying something about your mom",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 2);
      characterController.adjustAnger(characters.cassio, "roderigo", 2);
    },
    nextSection: function () {
      return roderigoStartsAFight;
    }
  }
};



let cassioIsNotDrunk = {
  name: "cassioIsNotDrunk",
  scene: "Act Two, Scene Two",
  characters: ["Cassio", "You"],
  messages: [{ text: "Dude, your friend Roderigo is a jerk", name: "Cassio" }],
  narration: "Later that night: you, Cassio, and Roderigo are on guard duty. Roderigo is doing his darndest to start a fight with Cassio, but apparently Cassio isn't going for it.",
  truth: {
    truthPrompt: "Apologize for Roderigo.",
    truthDefault: "Sorry man, he's a bit rough around the edges",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", 2);
    },
    nextSection: function () {
      return cassioTellsOthello;
    }
  },
  lie: {
    liePrompt: "Pretend like you don't know Roderigo.",
    lieDefault: "Roderigo who? Barely know the guy",
    consequences: function () {
      characterController.adjustTrust(characters.cassio, "iago", -2);
    },
    nextSection: function () {
      return cassioTellsOthello;
    }
  }
};

module.exports = {cassioIsDrunk, cassioIsNotDrunk, roderigoIsNotDrunk, roderigoIsDrunk};