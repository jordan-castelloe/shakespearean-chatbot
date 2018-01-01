'use strict';

const eventHandler = require("./eventHandler.js");
const storyController = require("./storyController");
const act1scene1 = require("./act1scene1");

$("#message-area").scrollTop = ("#message-area").scrollHeight; // where else should this go?

storyController.loadScene(act1scene1);
