var app = require('./server-config.js');

var port = 4568;

app.listen(port);

console.log('Server now listening on port ' + port);

// Team NotAsleep: "no changes seem needed on process.env file (inspected)." //console.log('Process.env:', process.env);