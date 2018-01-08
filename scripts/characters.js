'use strict';

module.exports.othello = {
    name: "Othello",
    isAlive: true,
    isActive: true,
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
        roderigo: {
            trust: 5,
            anger: 5
        }, 
    
    }
};

module.exports.roderigo = {
    name: "Roderigo",
    isAlive: true,
    isActive: true,
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
    isAlive: true,
    isActive: true,
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
    isAlive: true,
    isActive: true,
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
    isAlive: true,
    isActive: true,
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





  
