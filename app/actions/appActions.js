var StateTree = require('../data/stateTree.js');
var GeneralCursor = StateTree.select('general');


var appActions = {
	isInProjects: function() {
		GeneralCursor.set('isInProjects', true);
	},
	notInProjects: function() {
		GeneralCursor.set('isInProjects', false);
	},
	isInHomepage: function() {
		GeneralCursor.set('isInHomepage', true);
	},
	notInHomepage: function() {
		GeneralCursor.set('isInHomepage', false);
	}
}

module.exports = appActions;