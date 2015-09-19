var StateTree = require('../data/stateTree.js');
var cursor = StateTree.select('posts');

var postActions = {
	pushPostData: function(liPosition) {
		cursor.push(liPosition)
		StateTree.commit();
	},
	removePostDataAndReset: function() {
		cursor.unset();
		cursor.set([]);
		StateTree.commit();
	},
}

module.exports = postActions;