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
         return res.end({
            error: true,
            message: err.message
         });
      }

      //check if has std error
      if (stderr) {
         return res.end({
            error: true,
            message: stderr
         });
      }

      res.end({
         error: false,
         message: stdout
      });
   });
});

app.listen(5055, () => {
   console.log('Listening on port 5055!');
});