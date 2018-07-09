module.exports = function(grunt) {
    grunt.initConfig({
      sass: {
        dist: {
          options: {
            style: "expanded",
          },
          files: [
            {
              // C'est ici que l'on définit le dossier que l'on souhaite importer
              expand: true,
              cwd: "src/styles/",
              src: ["*.scss"],
              dest: "dist/styles/",
              ext: ".css",
            },
          ],
        },
      },
      concat: {
        options: {
          separator: ";", // permet d'ajouter un point-virgule entre chaque fichier concaténé.
        },
        dist: {
          src: ["src/script/built.js"], // la source
          dest: "dist/script/built.js", // la destination finale
        },
      },
      uglify: {
        options: {
          separator: ";",
        },
        dist: {
          src: ["src/script/built.js"],
          dest: "dist/built.js",
        },
      },
      watch: {
        scripts: {
          files: '**/*.js', // tous les fichiers JavaScript de n'importe quel dossier
          tasks: ['concat:dist']
        },
        styles: {
          files: '**/*.scss', // tous les fichiers Sass de n'importe quel dossier
          tasks: ['sass:dist']
        },
      },
    });
  
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
  
    grunt.registerTask("default", ["dev", "watch"]);
    grunt.registerTask("dev", ["sass:dist", "concat:dist"]);
    grunt.registerTask("dist", ["sass:dist", "uglify:dist"]);
  };