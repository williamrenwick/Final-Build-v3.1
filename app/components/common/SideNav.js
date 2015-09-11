var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var MainSide = require('./SideNavMain.js');
var ProjectSide = require('./SideNavProj.js');

var SideNav = React.createClass({
	mixins: [mixin],
	cursors: {
		isHovering: ['menu', 'isHovering'],
		menuIsActive: ['menu', 'isOpen'],
		projSideOpen: ['menu', 'projSideOpen'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop']
	},
	mobileStyles: function() {
		var styleObj = {
			left: null
		}

		if (!this.state.menuIsActive) {
			styleObj.left = '-90%'
		} else if (this.state.menuIsActive) {

			if (!this.state.projSideOpen) {
				styleObj.left = '0%'
			} else {
				styleObj.left = '-80%'
			}
			
		}
		
		return styleObj
	},
	tabletStyles: function() {
		var styleObj = {
			left: null
		}

		if (!this.state.isHovering && !this.state.menuIsActive) {
			styleObj.left = '-50%'
		} else if (this.state.menuIsActive) {
			styleObj.left = '0%'
		}

		return styleObj
	},
	desktopStyles: function() {
		var styleObj = {
			left: null
		}

		if (!this.state.isHovering && !this.state.menuIsActive) {
			styleObj.left = '-50%'
		} else if (this.state.isHovering && !this.state.menuIsActive) {
			var moveAmount = (-100 + (20 / (window.innerWidth/2) * 100))/2 ;

			styleObj.left = moveAmount + '%';
		} else if (this.state.menuIsActive) {
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
				<ProjectSide projects={this.props.projects}/>
			</nav>
		)
	}
});

module.exports = SideNav;