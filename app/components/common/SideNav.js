var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var MainSide = require('./SideNavMain.js');
var SideNavProjects = require('./SideNavProjects.js');

var SideNav = React.createClass({
	mixins: [mixin],
	cursors: {
		windowW: ['resize', 'currentWidth'],
		isHovering: ['menu', 'isHovering'],
		menuIsActive: ['menu', 'isOpen'],
		projSideOpen: ['menu', 'projSideOpen'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop']
	},
	mobileStyles: function() {
		var styleObj = {
			left: null,
			width: null,
			opacity: null
		}

		if (!this.state.menuIsActive) {
			styleObj.left = '-100%';
			styleObj.width = '100%';
			styleObj.opacity = 0;
		} else if (this.state.menuIsActive) {

			styleObj.opacity = 1;

			if (!this.state.projSideOpen) {
				styleObj.left = '0%';
				styleObj.width = this.state.windowW * 0.9;
			} else {
				styleObj.left = -(this.state.windowW * 0.8);
				styleObj.width = this.state.windowW * 1.8;
			}

		}

		return styleObj
	},
	tabletStyles: function() {
		var styleObj = {
			left: null,
			opacity: null
		}

		if (!this.state.isHovering && !this.state.menuIsActive) {
			styleObj.left = '-50%'
			styleObj.opacity = 0;
		} else if (this.state.menuIsActive) {
			styleObj.opacity = 1;
			styleObj.left = '0%'
		}

		return styleObj
	},
	desktopStyles: function() {
		var styleObj = {
			left: null,
			opacity: null
		}

		if (!this.state.isHovering && !this.state.menuIsActive) {
			styleObj.opacity = 0;
			styleObj.left = '-50%'
		} else if (this.state.menuIsActive) {
			styleObj.opacity = 1;
			styleObj.left = '0%'
		}

		return styleObj
	},
	getStyles: function() {
		if (this.state.isDesktop) {
			var desktopStyles = this.desktopStyles();
			return desktopStyles
		} else if (this.state.isTablet) {
			var tabletStyles = this.tabletStyles();
			return tabletStyles
		} else if (this.state.isMobile) {
			var mobileStyles = this.mobileStyles();
			return mobileStyles
		}
	},
	getClasses: function() {
		var classObj = {
			projectMenu: null
		}

		if (this.state.projSideOpen && this.state.menuIsActive) {
			classObj.projectMenu = true
		} else {
			classObj.projectMenu = false
		}

		return classObj
	},
	render: function() {
		return (
			<nav id="side-nav" className={ classNames(this.getClasses()) } style={ this.getStyles() }>
				<MainSide />
				<SideNavProjects projects={this.props.projects}/>
			</nav>
		)
	}
});

module.exports = SideNav;