'use strict';

module.exports.uploadSection = function(section) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://othello-af74b.firebaseio.com/allSections.json",
                method: "POST",
                data: JSON.stringify(section)
            })
                .done(tripObject => {
                    resolve(tripObject);
                })
                .fail(error => {
                    console.log("uh-oh", error.statusText);
                    reject(error);
                });
        });
};
