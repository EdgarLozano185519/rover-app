// Require libraries here
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var getRoverMovement = require('./functions');

console.log("Server started. Visit http://localhost:8080 in a browser to view.");
http.createServer(function(req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = './' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
          <html>
            <head><title>Results</title></head>
            <body>
              <h1>Results</h1>
              <p>These are the results of your file upload</p>
              <ul>
        `);
        let positions = getRoverMovement(fs.readFileSync(files.filetoupload.name, 'utf8'));
        if(!positions.length)
          res.write(`<li>There was an error with the file. It must not be in correct format.</li>`);
        else
          positions.forEach((roverPosition, index) => {
            numEntry = index+1;
            res.write(`
              <li>Rover ${numEntry} is at position ${roverPosition}</li>
            `);
          });
        res.write(`
              </ul>
            </body>
          </html>
        `);
        res.end();
        for(let entry of positions)
          console.log(entry);
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <html>
        <head><title>Rover Movement Calculator</title></head>
        <body>
        <h1>Upload Form</h1>
        <p>Upload a file below in the propper format. Check package readme for formatting instructions.</p>
          <form action="fileupload" method="post" enctype="multipart/form-data">
            <label>Choose file <input type="file" name="filetoupload"></label><br>
            <label>Submit <input type="submit"></label>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }
}).listen(8080);
process.on('uncaughtException', async err => {
  console.error('Uncaught exception', JSON.stringify(err));
});