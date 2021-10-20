var http = require('http'),
	PORT = 8000;

var server = http.createServer(function(req, res) {});
var io = require('socket.io').listen(server);

io.on('connection', (socket) => {
  
  io.emit('new user', "New User!");
  console.log("New User!");
/*
  socket.on('noti message', msg => {
    io.emit('new message', msg);
  });
*/

});

// Define MySQL listener
var MysqlEvents = require('mysql-events');
var dsn = {
    host: 'localhost',
    user: 'admin',
    password: '1150'
}
var MysqlEventWatcher = MysqlEvents(dsn);

// Set watcher to database
var watcher = MysqlEventWatcher.add('test.users', function(oldRow, newRow) {
    if(oldRow === null) {
       // io.emit('new_data', newRow.fields.value);
        io.emit('new_data', newRow);
    }
});

server.listen(PORT, function() {
	console.log('Server is running on port ' + PORT + '...');
});
