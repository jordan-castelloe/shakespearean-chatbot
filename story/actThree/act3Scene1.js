'use strict';
const endings = require("../endings/endings");
const characters = require("../characters/characters");
const characterController = require("../../scripts/characterController");

let emiliaIsSuspicious= {
  name: "emiliaIsSuspicious",
  scene: "Act Three, Scene One",
  newCharacter: true,
  characters: ["Emilia", "You"],
  messages: [{ text: "What did you do?", name: "Emilia" }],
  narration: "You've noticed that Desdemona carries around a hankderchief embroidered with strawberries. You're pretty sure it was a gift from Othello. The hankerchief has inspired yet another one of your genius brainwaves: if you can steal it and plant it on Roderigo | Cassio, Othello will definitely believe that Desdemona is cheating on him. You'd look a little suspicious creeping around Desdemona's room and stealing hankerchiefs, but your wife, Emilia, is Desdemona's serving lady. How convenient!",
  truth: {
    truthPrompt: "Ask Emilia to steal the hankerchief.",
    truthDefault: "Hey Emilia, can you nab Desdemona's hankerchief for me?.",
    consequences: function () {
      characterController.adjustTrust(characters.emilia, "iago", -1);
    },
    nextSection: function () {
      if (characters.emilia.iago.trust > 7) {
        emiliaSaysYes.messages = [{ text: "That's weird but sure", name: "Emilia" }];
        return emiliaSaysYes;
      } else {
        return emiliaSaysNo;
      }
    }
  },
  lie: {
    liePrompt: "Butter Emilia up first.",
    lieDefault: "You look very hot today, my dear.",
    consequences: function () {
      characterController.adjustTrust(characters.emilia, "iago", -1);
    },
    nextSection: function () {
      return emiliaIsSuspicious;
    }
  }
};

let emiliaSaysNo = {
  name: "emiliaSaysNo",
  scene: "Act Three, Scene One",
  newCharacter: true,
  characters: ["Emilia", "You"],
  messages: "playerWritesFirst",
  narration: "You've noticed that Desdemona carries around a hankderchief embroidered with strawberries. You're pretty sure it was a gift from Othello. The hankerchief has inspired yet another one of your genius brainwaves: if you can steal it and plant it on Roderigo | Cassio, Othello will definitely believe that Desdemona is cheating on him. You'd look a little suspicious creeping around Desdemona's room and stealing hankerchiefs, but your wife, Emilia, is Desdemona's serving lady. How convenient!",
  truth: {
    truthPrompt: "Ask Emilia to steal the hankerchief.",
    truthDefault: "Hey Emilia, can you nab Desdemona's hankerchief for me?.",
    consequences: function () {
      characterController.adjustTrust(characters.emilia, "iago", -1);
    },
    nextSection: function () {
      if (characters.emilia.iago.trust > 7){
        emiliaSaysYes.messages = [{text: "That's weird but sure", name: "Emilia"}];
        return emiliaSaysYes;
      } else {
        return emiliaSaysNo;
      }
    }
  },
  lie: {
    liePrompt: "Butter Emilia up first.",
    lieDefault: "You look ravishing today, dear.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      return endings.tempEnding;
    }
  }
};

let emiliaSaysYes = {
  name: "emiliaSaysYes",
  scene: "Act Three, Scene One",
  newCharacter: true,
  characters: ["Emilia", "You"],
  messages: "playerWritesFirst",
  narration: "You've noticed that Desdemona carries around a hankderchief embroidered with strawberries. You're pretty sure it was a gift from Othello. The hankerchief has inspired yet another one of your genius brainwaves: if you can steal it and plant it on Roderigo | Cassio, Othello will definitely believe that Desdemona is cheating on him. You'd look a little suspicious creeping around Desdemona's room and stealing hankerchiefs, but your wife, Emilia, is Desdemona's serving lady. How convenient!",
  truth: {
    truthPrompt: "Ask Emilia to steal the hankerchief.",
    truthDefault: "Hey Emilia, can you nab Desdemona's hankerchief for me?.",
    consequences: function () {
      characterController.adjustTrust(characters.emilia, "iago", -1);
    },
    nextSection: function () {
      if (characters.emilia.iago.trust > 7){
        emiliaSaysYes.messages = [{text: "That's weird but sure", name: "Emilia"}];
        return emiliaSaysYes;
      } else {
        return emiliaSaysNo;
      }
    }
  },
  lie: {
    liePrompt: "Butter Emilia up first.",
    lieDefault: "You look really hot today, dear.",
    consequences: function () {
      characterController.adjustTrust(characters.roderigo, "iago", 2);
    },
    nextSection: function () {
      return endings.tempEnding;
    }
  }
};
let askEmilia = {
  name: "askEmilia",
  scene: "Act Three, Scene One",
  newCharacter: true,
  characters: ["Emilia", "You"],
  messages: "playerWritesFirst",
  narration: "You've noticed that Desdemona carries around a hankderchief embroidered with strawberries. You're pretty sure it was a gift from Othello. The hankerchief has inspired yet another one of your genius brainwaves: if you can steal it and plant it on Roderigo | Cassio, Othello will definitely believe that Desdemona is cheating on him. You'd look a little suspicious creeping around Desdemona's room and stealing hankerchiefs, but your wife, Emilia, is Desdemona's serving lady. How convenient!",
  truth: {
    truthPrompt: "Ask Emilia to steal the hankerchief.",
    truthDefault: "Hey Emilia, can you nab Desdemona's hankerchief for me?.",
    consequences: function () {
      characterController.adjustTrust(characters.emilia, "iago", -1);
    },
    nextSection: function () {
      if (characters.emilia.iago.trust > 7){
        emiliaSaysYes.messages = [{text: "That's weird but sure", name: "Emilia"}];
        return emiliaSaysYes;
      } else {
        return emiliaSaysNo;
      }
    }
  },
  lie: {
    liePrompt: "Butter Emilia up first.",
    lieDefault: "You look very hot today, my dear.",
    consequences: function () {
      characterController.adjustTrust(characters.emilia, "iago", -1);
    },
    nextSection: function () {
      if (characters.emilia.iago.trust > 7) {
        emiliaIsSuspicious.messages = [{ text: "We need to work on your dirty talk, but thanks", name: "Emilia" }]; 
        return emiliaIsSuspicious;
      } else {
        return emiliaIsSuspicious;
      }
    }
  }
};

module.exports = {askEmilia};


// IAGO AND EMILIA
// Iago: I need you to steal me a hankerchief
// Emilia: What's the magic word?
// Iago: Or else?
// Emilia: no.
// // OR: you butter her up, she steals the hankerchief

// CASSIO AND IAGO
// Cassio: Could you send me your wife's number? I want to ask her if she can get me a moment alone with Desdemona
// Iago: I'll introduce you in a group chat OR 
// sure, here
// Cassio: Thanks so much
// Cassio: I've never known someone more kind and honest
// Emilia: Desdemona was just talking about you this morning, and she was defending you.Othello says he has no choice but to fire you, but that he still likes you a lot and he's looking for an opportunity to take you back.
// Cassio: Please find me a way to be alone with Desdemona, if you think that's all right.
// Emilia: Come to my place.I'll get you two alone.
// Emilia: I'll do everthing I can for you. My husband's so upset about your problem, you'd think it was his own.
// Cassio: Thanks!