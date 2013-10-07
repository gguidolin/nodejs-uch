var app = require('http').createServer(handler)
, io = require('socket.io').listen(app,{log:false})
, fs = require('fs')
, i = 0;

app.listen(8080);

function handler (req, res) {
	fs.readFile(__dirname + '/socket.html',
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading index.html');
			}

			res.writeHead(200);
			res.end(data);
		});
}

io.sockets.on('connection', function (socket) {
	socket.on('start',function(){
		setInterval(function(){io.sockets.emit('datos',i++)}, 500);
	});
});