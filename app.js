const express = require('express');

const app = express();

app.get('/', async (req, res) => {
   res.end("Alive 1.1.3");
});

app.listen(5055, async () => {
   console.log('Listening on port 5055!');
});