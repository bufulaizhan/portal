var dest =  './dist';
var src =  './app';
module.exports = {
  sass: {
    src:  src + '/style/style.scss',
    dest: dest + '/style.css'
  },
  jade: {
    src: src + '/index.jade',
    dest: dest + '/index.html'
  },
  coffee: {
    src: src + '/scripts/**/*.coffee',
    dest: dest + '/js'
  },
  bower: {
    dest: dest + '/packages'
  }

};
