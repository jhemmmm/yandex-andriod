const express = require('express');
const {
   exec
} = require('child_process');
const app = express();

app.get('/', (req, res) => {
   exec('su -c \'' + req.query.command + '\'', (err, stdout, stderr) => {
      console.log(err);
      console.log(stdout);
      console.log(stderr);
      //check if has error
      if (err) {
         res.end('ERR');
      }

      //check if has std error
      if (stderr) {
         res.end('EST');
      }

      res.end('TEST');
   });
});

app.listen(5055, () => {
   console.log('Listening on port 5055!');
});