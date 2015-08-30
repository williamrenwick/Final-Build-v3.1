var Baobab = require('baobab');

var stateTree = new Baobab({
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
		loadAnimation: false,
		nextProjectLink: null,
		prevProjectLink: null
	}
})



module.exports = stateTree;