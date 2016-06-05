module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // uglify: {
        //     options: {
        //         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //     },
        //     controllers: {
        //         src: ['client/scripts/controllers/*.js'],
        //         dest: 'server/public/scripts/controllers.min.js'
        //     },
        //     factories: {
        //         src: ['client/scripts/factories/*.js'],
        //         dest: 'server/public/scripts/factories.min.js'
        //     }
        // },
        copy: {
            vendor: {
                expand: true,

                // VENDORS

                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                "dest": "server/public/vendors/"
            },

            css: {
                // STYLES
                expand: true,
                cwd: "client/styles/",
                src: "stylesheet.css",
                "dest": "server/public/styles"
            },
            // IMAGES
            // images: {
            //     expand: true,
            //     cwd: "client/images/",
            //     src: "**",
            //     "dest": "server/public/images"
            // },

            html: {
                // VIEWS
                expand: true,
                cwd: "client/views/",
                src: "**",
                "dest": "server/public/views"
            },

            scripts: {
                // SCRIPTS
                expand: true,
                cwd: "client/scripts/",
                src: ["*.js"],
                "dest": "server/public/scripts"
            }
        },

        watch: {
            options: {
                spawn: false
            },
            scripts: {
                files: ['client/**/*.html', 'client/**/*.js', 'client/**/*.css'],
                // tasks: ['copy', 'uglify']
                tasks: ['copy']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'watch']);

};
