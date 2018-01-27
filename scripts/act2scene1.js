'use strict';
const sceneTwo = require("./act2scene2");
const endings = require("./endings");
const characters = require("./characters");
const characterController = require("./characterController");

let insultEmilia = {
  name: "wheresOthello",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Does anyone know when Othello is supposed to get here?", name: "Desdemona" }],
  narration: "The war is over! You won. You're regrouping in Cyprus after the battle. Othello's ship was caught in a storm and hasn't made it back yet.",
  truth: {
    truthPrompt: "Reassure Desdemona",
    truthDefault: "His ship hit some rough weather, but I'm sure he'll be here soon.",
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
    liePrompt: "Drop hints that he might be cheating on her.",
    lieDefault: "Don't worry, Othello always takes a while to make it back from battle! He has to stop and celebrate in town first.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "othello", -1);
      characterController.adjustAnger(characters.emilia, "iago", 4);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return emiliaCallsBullshit;
    }
  }
};

let emiliaCallsBullshit = {
  name: "emiliaCallsBullshit",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Don't listen to him, Desdemona. Othello's ship got delayed, that's all. Iago's just trying to make trouble.", name: "Emilia" }],
  narration: "Whoops. You forgot your wife was included in the group text. And she's terrifyingly good at seeing through your bullshit.",
  truth: {
    truthPrompt: "Apologize",
    truthDefault: "Emilia's right, I'",
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
    liePrompt: "Drop hints that he might be cheating on her.",
    lieDefault: "Don't worry, Othello always takes a while to make it back from battle! He has to stop and celebrate in town first.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "othello", -1);
      characterController.adjustAnger(characters.emilia, "iago", 4);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return emiliaCallsBullshit;
    }
  }
};

let wheresOthello = {
  name: "wheresOthello",
  scene: "Act Two, Scene One",
  characters: ["Desdemona", "Emilia", "Cassio", "You"],
  messages: [{ text: "Does anyone know when Othello is supposed to get here?", name: "Desdemona" }],
  narration: "The war is over! You won. You're regrouping in Cyprus after the battle. Othello's ship was caught in a storm and hasn't made it back yet.",
  truth: {
    truthPrompt: "Reassure Desdemona",
    truthDefault: "His ship hit some rough weather, but I'm sure he'll be here soon.",
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
    liePrompt: "Drop hints that he might be cheating on her.",
    lieDefault: "Don't worry, Othello always takes a while to make it back from battle! He has to stop and celebrate in town first.",
    consequences: function () {
      characterController.adjustTrust(characters.desdemona, "othello", -1);
      characterController.adjustAnger(characters.emilia, "iago", 4);
      characterController.adjustTrust(characters.cassio, "iago", -1);
    },
    nextSection: function () {
      return emiliaCallsBullshit;
    }
  }
};


// Othello talks Roderigo into provoking Michael Cassio
// Desdemona:
// I'm looking for Othello. Has anyone seen him.
// you notice that Cassio is being extra nice to Desdemona. Useful info. 
// Cassio:
// I don't think his ship is back yet

// Emilia:
// He'll be back soon, Desdemona!

// Insult your wife-- > Desdemona says you're an asshole, asks you to say a nice thing about her
// --> say a compliment(scene ends) OR say you're critical by nature
// OR
// Reassure Desdemona-- > scene ends, Othello arrives

// WITH RODERIGO
// Ugh, you should have seen the happy couple's reunion. Made me want to puke.

// Tell him that Desdemona's completely in love with him OR
// --> tell him to approach Desdemona at the party that night
// Tell him that Desdemona's completely in love with Cassio
// --> tell him to provoke Cassio at the party that night, to ruin his reputation
