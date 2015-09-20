var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var PureMixin = require('react-pure-render/mixin');
var menuActions = require('../../actions/actions.js');
var PROJECTS = require('../../data/projects.js');
var classNames = require('classnames');

var MainNav = React.createClass({
	mixins: [mixin, PureMixin],
	cursors: {
		isClicked: ['menu', 'isOpen'],
		isOnDark: ['menu', 'isOnDark'],
		projSideOpen: ['menu', 'projSideOpen'],
		scrollPos: ['scrolling', 'scrollPosition'],
		isInHomepage: ['homepage', 'isInHomepage'],
		isInProjects: ['project', 'isInProjects'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop']
	},
	menuToggle: function() {
		if (!this.state.isClicked) {
			menuActions.isClicked();
		} else if (this.state.isClicked) {
			menuActions.notClicked();
		}
	},
	mobileStyles: function() {
		var styleObj = {
			WebkitTransform: null,
			MozTransform: null,
			OTransform: null,
			msTransform: null,
			transform: null,
		}
		if (this.state.isClicked && this.state.projSideOpen) {
			styleObj.WebkitTransform = 'translateX(' + -80 + '%)';
			styleObj.MozTransform = 'translateX(' + -80 + '%)';
			styleObj.OTransform = 'translateX(' + -80 + '%)';
			styleObj.msTransform = 'translateX(' + -80 + '%)';
			styleObj.transform = 'translateX(' + -80 + '%)';
		}
		return styleObj;
	},
	tabletStyles: function() {
		var styleObj = {
			WebkitTransform: 'translateX(' + 0 + 'px)',
			MozTransform: 'translateX(' + 0 + 'px)',
			OTransform: 'translateX(' + 0 + 'px)',
			msTransform: 'translateX(' + 0 + 'px)',
			transform: 'translateX(' + 0 + 'px)',
		}
		return styleObj;
	},
	desktopStyles: function() {
		var styleObj = {
			WebkitTransform: 'translateX(' + 0 + 'px)',
			MozTransform: 'translateX(' + 0 + 'px)',
			OTransform: 'translateX(' + 0 + 'px)',
			msTransform: 'translateX(' + 0 + 'px)',
			transform: 'translateX(' + 0 + 'px)',
		}
		return styleObj;
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
	render: function() {
		return (
			<nav
				className={classNames({
					fixedNav: true,
					menuActive: this.state.isClicked,
					onDark: this.state.isOnDark || this.state.isInProjects
				})}
				style={this.getStyles()}
			>
	          <div id="menu-button" onClick={this.menuToggle} ref="menu-btn">
	              <span className="menu-line"></span>
	          </div>
	          <div className="site-title"></div>
	        </nav>
		)
	}
})

module.exports = MainNav;