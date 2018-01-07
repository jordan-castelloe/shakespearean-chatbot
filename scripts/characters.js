'use strict';

module.exports.othello = {
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

module.exports.roderigo = {
    name: "Roderigo",
    relationships: {
        iago: {
            trust: 10,
            anger: 0
        }, 
        othello: {
            trust: 5,
            anger: 7
        },
        cassio: {
            trust: 5,
            anger: 5
        },
        desdemona: {
            trust: 10,
            anger: 0
        }
    }
};

module.exports.desdemona = {
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

module.exports.emilia = {
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

module.exports.cassio = {
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





  
