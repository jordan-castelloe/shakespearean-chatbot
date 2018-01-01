'use strict';

let openingLines = {
    messages:[{text: "Tell me you didn't know about this.", user: "Roderigo"}],
    narration: "Your friend, Roderigo, is in love with a young woman named Desmonda and has learned that she has eloped with your commanding officer, Othello.",
    options: {
        truth: {
            truthPrompt: "Admit that you knew about it.",
            truthDefault: "I knew about it, but I was afraid to tell you",
            nextSection: "next section"
        }, 
        lie: {
            liePrompt: "Tell him you had no idea.",
            lieDefault: "I didn't, I swear!",
            nextSection: "next section"
        }
    }
};