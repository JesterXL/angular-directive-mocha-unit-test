module.exports = function (grunt) {
    'use strict';
    
    var pkg                            = grunt.file.readJSON('package.json');
    
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-concat');

    var tasks = {


        karma: {
            test: {
                configFile: 'karma.configuration.js',
                singleRun: true
            }
        },


        watch: {
            options: {
                livereload: true
            },

            dev: {
                files: ['src/*', 'src/**/*'],
                tasks: ['build_dev']
            }
        },

        express: {
            localServer:
            {
                options:
                {
                    port: 8626,
                    bases: './',
                    debug: true,
                    open: true,
                    server: 'server.js'
                }
            }
        },

        clean: {
            dev: {
                src: 'build'
            }
        },

        copy: {
            devJS: {
                expand: true,
                cwd: 'src',
                src: ['index.html', '**/*.html'],
                dest: 'build'
            }
        },

        concat: {
            prod: {
                cwd: '.',
                expand: true,
                flatten: true,
                files: {
                    'build/app.js': [
                        'src/*.module.js',
                        'src/*.js',
                        'src/**/*.module.js',
                        'src/**/*.js']
                }
                
            }
        }


    };

    grunt.initConfig(tasks);

    grunt.registerTask('build_dev', 'Builds dev',
        [
            'clean', 'concat', 'copy'
    ]);

    grunt.registerTask('build', 'Builds all the things.', [
    	'build_dev', 'express', 'watch'
    ]);

    grunt.registerTask('test',
        'Runs all unit tests based on the karm.conf.js configurations.', [
            'karma'
    ]);

    grunt.registerTask('default', 'You got served.', [
    	'express', 'express-keepalive']);

};