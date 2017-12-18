
module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            "dist/bundle.js": ["scripts/main.js"]
        },
        jshint: {
            files: ["scripts/**/*.js"],
            options: {
                predef: ["document", "console"],
                esnext: true,
                globalstrict: true,
                globals: {},
                browserify: true
            }
        },
        sass: {
            dist: {
                files: {
                    "main.css": "sass/main.scss"
                }
            }
        },
        watch: {
            javascripts: {
                files: ["javascripts/**/*.js"],
                tasks: ["jshint", "browserify"]
            },
            sass: {
                files: ["sass/**/*.scss"],
                tasks: ["sass"]
            }
        }
    });

    require("matchdep")
        .filter("grunt-*")
        .forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ["jshint", "sass", "browserify", "watch"]);
};