var StateTree = require('../data/stateTree.js');
var HpCursor = StateTree.select('homepage');

var homePageActions = {
	updateBGColor: function(newColor) {
		HpCursor.set('workBGColor', newColor)
	},
	isInHomepage: function() {
		HpCursor.set('isInHomepage', true)
	},
	notInHomepage: function() {
		HpCursor.set('isInHomepage', false)
	},
	insideWorkPosts: function() {
		HpCursor.set('insideWorkPosts', true)
	},
	outsideWorkPosts: function() {
		HpCursor.set('insideWorkPosts', false)
	}
}

module.exports = homePageActions;