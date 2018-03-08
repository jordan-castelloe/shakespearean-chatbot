
module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            "../dist/bundle.js": ["../scripts/main.js"]
        },
        jshint: {
            files: ["../scripts/**/*.js", "../story/**/*.js"],
            options: {
                predef: ["document", "console", "$"],
                esnext: true,
                globalstrict: true,
                globals: {},
                browserify: true
            }
        },
        sass: {
            dist: {
                files: {
                    "../styles/main.css": "../styles/sass/main.scss"
                }
            }
        },
        watch: {
            javascripts: {
                files: ["../scripts/**/*.js", "../story/**/*.js"],
                tasks: ["jshint", "browserify"]
            },
            sass: {
                files: ["../styles/sass/**/*.scss"],
                tasks: ["sass"]
            }
        }
    });

    require("matchdep")
        .filter("grunt-*")
        .forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ["jshint", "sass", "browserify", "watch"]);
};