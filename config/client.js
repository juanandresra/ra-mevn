var fs = require('fs')
var oldPath = './vue.config.js'
var newPath = '../client/vue.config.js'

fs.copyFile(oldPath, newPath, (err) => {
    if (err) throw err;
});
