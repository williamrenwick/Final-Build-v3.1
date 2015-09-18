var StateTree = require('../data/stateTree.js');
var cursor = StateTree.select('posts');

var postActions = {
	updatePosts: function(liPositions) {
		cursor.push(liPositions);
		StateTree.commit();
	}
}

module.exports = postActions;