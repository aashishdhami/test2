const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('The server has started listening on port 3000...');
});

app.get('/', (req, res) => {
  //   console.log('A request has been made');
  res.setHeader('Content-type', 'text/html');
  res.write('<p>This is an example paragraph sent from the server 😁</p>');
  res.end();
});
