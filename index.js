const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');


// Serve static files from the "public" directory
app.use(express.static('public'));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.listen(port, () => {
  console.log("Node application listening on port " + port);
});