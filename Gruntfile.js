module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		connect: {
			server: {
				options: {
					hostname: '*',
					base: 'www',
					port: 8888,
					livereload: true,
					open: { 
						target: 'http://localhost:8888'
					}
				}
			}
		},
		watch: {
			scripts: {
				files: [ 'www/**/*.js',
						 'www/**/*.html',
						 'www/**/*.css'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', ['connect', 'watch']);
};
