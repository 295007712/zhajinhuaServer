var Socket = require('socket.io');
const SocketServer = function (server) {
	var that = Socket(server);
	that.on("connection", function(socket){
		console.log('a user connetction');
	});
	return that;
};
module.exports = SocketServer;