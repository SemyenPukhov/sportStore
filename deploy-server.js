// const express = require('express');
// const app = express();

// app.use('/', express.static('/app/SportStore'));

// app.get('/', (req, res) => {
//   console.log('get req');
//   res.sendFile('app/SportStore/index.html', { root: __dirname });
// });

// app.listen(4200, function() {
//   console.log('HTTP Server running on port 4200');
// });

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/app/SportStore'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/app/SportStore/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(4200);
