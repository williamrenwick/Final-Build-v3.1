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
		StateTree.commit();
	},
	notInProjects: function() {
		ProjectCursor.set('isInProjects', false);
		StateTree.commit();
	},
	isViewingBrief: function() {
		ProjectCursor.set('viewingBrief', true);
		ProjectCursor.set('viewingSolution', false);
	}, 
	isViewingSolution: function() {
		ProjectCursor.set('viewingBrief', false);
		ProjectCursor.set('viewingSolution', true);
	}
}

module.exports = projectActions;