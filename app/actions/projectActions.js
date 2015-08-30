var StateTree = require('../data/stateTree.js');
var ProjectCursor = StateTree.select('project');


var projectActions = {
	updateNextLink: function(link) {
		ProjectCursor.set('nextProjectLink', link);
		StateTree.commit();
	},
	updatePrevLink: function(link) {
		ProjectCursor.set('prevProjectLink', link);
		StateTree.commit();
	},
	isInProjects: function() {
		ProjectCursor.set('isInProjects', true);
	},
	notInProjects: function() {
		ProjectCursor.set('isInProjects', false);
	},
	willAnimate:function() {
		ProjectCursor.set('loadAnimation', false);
	},
	hasAnimated: function() {
		ProjectCursor.set('loadAnimation', true);
	}
}

module.exports = projectActions;