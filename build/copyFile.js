const filecopy = require('filecopy')

filecopy('js/flexible.js', 'dist/js/flexible.js', {
  mkdirp: true
})
