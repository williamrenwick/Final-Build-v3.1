var StateTree = require('../data/stateTree.js');
var cursor = StateTree.select('posts');

var postActions = {
	updatePositions: function(positions) {
		cursor.set(positions);
		StateTree.commit();
	},
};

module.exports = postActions;