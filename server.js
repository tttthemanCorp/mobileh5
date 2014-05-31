var connect = require('connect');
connect().use(connect.static(__dirname)).listen(8080);
console.log("server listening on port 8080")