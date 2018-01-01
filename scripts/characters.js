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



  
