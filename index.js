var fs = require('fs');
var sass = require('node-sass');

sass.render({
  file: 'test.scss',
}, function(error, result) {
  if(error) return console.log(error)

  fs.writeFile('test-out.css', result.css, (err) => {if(!err) console.log(err)});
});
