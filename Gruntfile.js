var path = require('path');
var execFile = require('child_process').execFile;
var packagejson = require('./package.json');

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);


    grunt.initConfig({

        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['LICENSE.md', 'index.html'],
                    dest: 'build/'
                }, {
                    expand: true,
                    cwd: 'vendor/',
                    src: ['**/*'],
                    dest: 'build/vendor/'
                }, {
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*'],
                    dest: 'build/images/'
                }, {
                    expand: true,
                    cwd: 'fonts/',
                    src: ['**/*'],
                    dest: 'build/fonts/'
                }, {
                    cwd: 'node_modules/',
                    src: Object.keys(packagejson.dependencies).map(function(dep) {
                        return dep + '/**/*';
                    }),
                    dest: 'build/node_modules/',
                    expand: true
                }]
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'build/css/main.css': 'styles/main.scss'
                }
            }
        },

        browserify: {
            build: {
                files: {
                    'build/compiled.js': 'src/main.js'
                },
                options: {
                    transform: ['babelify']
                }
            }
        },

        open: {
            build: {
                path: 'build/index.html'
            }
        },

        // livereload
        watchChokidar: {
            options: {
                spawn: true
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['build/**/*']
            },
            js: {
                files: ['src/**/*.js'],
                tasks: ['browserify:build']
            },
            sass: {
                files: ['styles/**/*.scss'],
                tasks: ['sass']
            },
            copy: {
                files: ['images/*', 'index.html', 'fonts/*'],
                tasks: ['newer:copy:dev']
            }
        }
    });

    grunt.registerTask('default', ['bower_clean', 'browserify:build', 'sass', 'newer:copy:dev', 'open', 'watchChokidar']);
};