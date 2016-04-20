const path = require('path');
const util = require('util');
const express = require('express');
const compress = require('compression');

const server = express();
const port = process.env.PORT || 3000;

server
  .use(compress({threshold: 0}))
  .use('/', express.static(path.join(__dirname, 'dist')))
  .get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });


server.listen(port, err => {
  if (err) {
    console.info('Error: ' + util.inspect(err));
  } else {
    console.info('Server started listening on http://localhost:' + port);
  }
});
