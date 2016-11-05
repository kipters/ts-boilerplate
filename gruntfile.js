const path = require('path');

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        ts: {
            debug: {
                tsconfig: true
            },
            release: {
                tsconfig: './tsconfig.release.json'
            }
        },
        tslint: {
            options: {
                configuration: 'tslint.json'
            },
            files: {
                src: ['src/**/*.ts']
            }
        },
        watch: {
            ts: {
                files: ['src/**/*.ts'],
                tasks: ['ts:debug', 'tslint']
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.json'],
                    dest: 'build/'
                }]
            }
        },
        clean: {
            build: ['build/**'],
            basedir: ['build/.baseDir.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');

    grunt.registerTask('default', [
        'ts:debug',
        'tslint',
        'copy:main'
    ]);

    grunt.registerTask('build', [
        'clean:build',
        'ts:release',
        'tslint',
        'copy:main',
        'clean:basedir'
    ]);

    grunt.registerTask('clproj', ['clean:build']);

    grunt.registerTask('config', [], function(name) {
        grunt.file.expand(path.join('config', `${name}.json`)).forEach(src => {
            const dest = path.join('src', 'config.json');
            grunt.file.copy(src, dest);
        });
    });
}