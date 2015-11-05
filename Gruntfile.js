module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['app/**/*.js', 'lib/**/*.js', 'public/**/*.js'],//do we need the public files??,
        dest: 'dist/shortyconcat.js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {
        options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    },
    dist: {
        files: {
          'dist/uglified.min.js': ['dist/shortyconcat.js']
        }
      }
    },

    // jshint: {
    //   files: [
    //     // Add filespec list here
    //   ],
    //   options: {
    //     force: 'true',
    //     jshintrc: '.jshintrc',
    //     ignores: [
    //       'public/lib/**/*.js',
    //       'public/dist/**/*.js'
    //     ]
    //   }
    // },

    cssmin: {
        // Add filespec list here
      // target: {
      //   files: [{
      //     expand: true,
      //     cwd: 'release/css',
      //     src: ['*.css'],
      //     dest: 'release/css',
      //     ext: '.min.css'
      //   }]
      // }

      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/minified.css': ['/public/styles.css']
        }
      }
    },

    // watch: {
    //   scripts: {
    //     files: [
    //       'public/client/**/*.js',
    //       'public/lib/**/*.js',
    //     ],
    //     tasks: [
    //       'concat',
    //       'uglify'
    //     ]
    //   },
    //   css: {
    //     files: 'public/*.css',
    //     tasks: ['cssmin']
    //   }
    // },

    // shell: {
    //   prodServer: {
    //   }
    // },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify'); //saved this dependency.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat'); //saved this dependency.
  grunt.loadNpmTasks('grunt-contrib-cssmin'); //saved this dependency.
  grunt.loadNpmTasks('grunt-mocha-test'); //saved this dependency.
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon'); //saved this dependency.

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('concat1', [
    'concat'
  ]); 
  
  grunt.registerTask('uglify1', [
    'uglify'
  ]);

  grunt.registerTask('cssmin1', [
    'cssmin'
  ]);

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', [
  ]);

  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
      // add your production server task here
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
      // add your production server task here
  ]);


};
