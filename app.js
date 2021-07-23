const express = require('express');
const {
   exec
} = require('child_process');
const app = express();

app.get('/', async (req, res) => {
   console.log(req.query.command);
   exec(req.query.command, (err, stdout, stderr) => {
      if (err)
         return res.end(err);
      if (stderr)
         return res.end(stderr);
      res.end(stdout);
   });
});

app.listen(5055, async () => {
   console.log('Listening on port 5055!');
});