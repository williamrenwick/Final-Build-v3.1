var StateTree = require('../data/stateTree.js');
var GeneralCursor = StateTree.select('general');

var appActions = {
	isLoaded: function() {
		GeneralCursor.set('isNowLoaded', true);
	}
}

module.exports = appActions;