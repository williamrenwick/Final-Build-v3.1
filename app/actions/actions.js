var StateTree = require('../data/stateTree.js');
var MenuCursor = StateTree.select('menu');


var menuActions = {
	isHovering: function() {
		MenuCursor.set('isHovering', true);
	},
	notHovering: function() {
		MenuCursor.set('isHovering', false)
	},
	isClicked: function() {
		MenuCursor.set('isOpen', true)

		//need to refactor to improve maintainability
		$('body').addClass('noScroll');
	},
	notClicked: function() {
		var projSideStatus = MenuCursor.get('isOpen');

		MenuCursor.set('isOpen', false)

		if (projSideStatus) {
			MenuCursor.set('projSideOpen', false);
		}
		//need to refactor to improve maintainability
		$('body').removeClass('noScroll');
	},
	projSideOpen: function() {
		MenuCursor.set('projSideOpen', true)
	},
	projSideClose: function() {
		MenuCursor.set('projSideOpen', false)
	},
	isOnDark: function() {
		MenuCursor.set('isOnDark', true)
		StateTree.commit();
	},
	isOnLight: function() {
		MenuCursor.set('isOnDark', false)
	}
}

module.exports = menuActions;