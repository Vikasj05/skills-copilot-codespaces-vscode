// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
// Create a route
app.get('/api/comments', (req, res) => {
  res.json([
    { id: 1, text: 'This is a comment.' },
    { id: 2, text: 'This is another comment.' },
  ]);
});