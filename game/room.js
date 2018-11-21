const Player = require('./player');
const Room = function () {
	var that = {};
	var _playerList = [];
	that.createPlayer = function(uid, socket){
		console.log('create player = '+ uid);
		_playerList.push(Player(uid, socket));
	}
	that.getPlayerCount = function(){
		return _playerList.length;
	}
	return that;
};
module.exports = Room;
