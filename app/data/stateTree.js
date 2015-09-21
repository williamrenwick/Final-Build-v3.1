var Baobab = require('baobab');

var stateTree = new Baobab({
	resize: {
		currentWidth: null,
		currentHeight: null,
		currentDocHeight: null,
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
		isScrolling: null,
		textTranslateAmount: null
	},
	homepage: {
		isInHomepage: null,
		insideWorkPosts: null
	},
	project: {
		isInProjects: null,
		nextProjectLink: null,
		prevProjectLink: null
	},
	posts: []
})



module.exports = stateTree;