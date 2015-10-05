var StateTree = require('../data/stateTree.js');
var GeneralCursor = StateTree.select('general');


var appActions = {
	isPreloaded: function() {
		GeneralCursor.set('isPreloaded', true);
	}
}

module.exports = appActions;