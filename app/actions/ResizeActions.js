var StateTree = require('../data/stateTree.js');
var ResizeCursor = StateTree.select('resize');

var ResizeActions = {
	updateWidth: function(windowWidth) {
		ResizeCursor.set('currentWidth', windowWidth);
	},
	updateHeight: function(windowHeight) {
		ResizeCursor.set('currentHeight', windowHeight);
	},
	isMobile: function(value) {
		var self = this;

		ResizeCursor.set('isMobile', value);
	},
	isTablet: function(value) {
		var self = this;

		ResizeCursor.set('isTablet', value);
	},
	isDesktop: function(value) {
		var self = this;

		ResizeCursor.set('isDesktop', value);
	}
}

module.exports = ResizeActions;