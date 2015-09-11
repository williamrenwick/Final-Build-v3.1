var Baobab = require('baobab');

var stateTree = new Baobab({
	resize: {
		currentWidth: null,
		currentHeight: null,
		isMobile: null,
		isTablet: null,
		isDesktop: null
	},
	menu: {
		isHovering: false,
		isOpen: false,
		projSideOpen: false,
		isOnDark: false
	},
	scrolling: {
		scrollPosition: null,
		textTranslateAmount: null
	},
	homepage: {
		workBGColor: null,
		isInHomepage: null,
		insideWorkPosts: null
	},
	project: {
		isInProjects: null,
		nextProjectLink: null,
		prevProjectLink: null
	}
})



module.exports = stateTree;