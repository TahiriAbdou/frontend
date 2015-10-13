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
                    src: ['LICENSE.md', 'package.json', 'index.html'],
                    dest: 'build/'
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

        // styles
        less: {
            options: {
                sourceMapFileInline: true
            },
            dist: {
                files: {
                    'build/css/main.css': 'styles/main.less'
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

        shell: {


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
                tasks: ['newer:babel']
            },
            less: {
                files: ['styles/**/*.less'],
                tasks: ['less']
            },
            copy: {
                files: ['images/*', 'index.html', 'fonts/*'],
                tasks: ['newer:copy:dev']
            }
        }
    });

    grunt.registerTask('default', ['browserify:build', 'less', 'newer:copy:dev', 'watchChokidar']);
};