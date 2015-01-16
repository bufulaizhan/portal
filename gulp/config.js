var dest =  './dist';
var src =  './app';
module.exports = {
  sass: {
    src:  src + '/style/style.scss',
    dest: dest + '/assets/style.css'
  },
  jade: {
    src: src + '/scripts/**/*.jade',
    dest: dest + '/'
  },
  coffee: {
		dest: dest,
    src: src + '/scripts/**/*.coffee',
    compiledJSDest: dest + '/js',
		targetFile: 'app.min.js',
		compressedDir: dest + '/assets'
  },
  bower: {
    dest: dest + '/packages'
  },
	server: {
		port: 9527,
		path: dest,
		index: 'index.html',
		cache: false 
	},
	browserSync: {
		server:{
			baseDir: dest
		},
		files: dest + '/**'
	},
	vendor: {
		src: './packages/**/*.min.js',
		target: 'vendor.min.js',	
		dest: dest + '/assets'		
	}
};
