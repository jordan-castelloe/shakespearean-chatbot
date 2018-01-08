'use strict';
const storyController = require("./storyController");
const act1scene1 = require("./act1scene1");
const charactersView = require("./charactersView");

// loads scene 1
charactersView.populateCharacterMenu(); 
storyController.loadScene(act1scene1);



