var StateTree = require('../data/stateTree.js');
var ResizeCursor = StateTree.select('resize');

var ResizeActions = {
	updateWidth: function(windowWidth) {
		ResizeCursor.set('currentWidth', windowWidth);
	},
	updateHeight: function(windowHeight) {
		ResizeCursor.set('currentHeight', windowHeight);
	},
	updateDocHeight: function(documentHeight) {
		console.log('updating documentHeight', documentHeight)
		ResizeCursor.set('currentDocHeight', documentHeight);
	},
	updateWindowDimensions: function(windowWidth,windowHeight,documentHeight) {
		ResizeCursor.set('currentWidth', windowWidth);
		ResizeCursor.set('currentHeight', windowHeight);
		ResizeCursor.set('currentDocHeight', documentHeight);
		StateTree.commit();
	},
	isMobile: function(value) {
		ResizeCursor.set('isMobile', value);
	},
	isTablet: function(value) {
		ResizeCursor.set('isTablet', value);
	},
	isDesktop: function(value) {
		ResizeCursor.set('isDesktop', value);
	}
}

module.exports = ResizeActions;