'use strict';

module.exports.changeTheme = function(){
    let body = document.getElementsByTagName("body")[0];
    let themeButton = document.getElementById("theme-button");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themeButton.innerText = "Light Theme";
    } else {
        themeButton.innerText = "Dark Theme";
    }

};

module.exports.changeTextSize = function(){
    let messageArea = document.getElementById("message-area");
    let textButton = document.getElementById("text-size-button");

    messageArea.classList.toggle("large-text");

    if (messageArea.classList.contains("large-text")){
        textButton.innerText = "Small Text";
    } else {
        textButton.innerText = "Large Text";
    }
};