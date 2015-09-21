var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var ScrollActions = require('../../../actions/scrollActions.js');


var Solution = React.createClass({
	mixins: [mixin],
	cursors: {
		scrollPos: ['scrolling', 'scrollPosition'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation'],
		textTranslate: ['scrolling', 'textTranslateAmount'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop'],
	},
	mobileStyles: function() {
		var amount = -150;
		var styleObj = {
			WebkitTransform: 'translateY(' + amount + 'px)',
			MozTransform: 'translateY(' + amount + 'px)',
			OTransform: 'translateY(' + amount + 'px)',
			msTransform: 'translateY(' + amount + 'px)',
			transform: 'translateY(' + amount + 'px)'
		}
		return styleObj		
	},
	tabletStyles: function() {
		var amount = -80;
		var styleObj = {
			WebkitTransform: 'translateY(' + amount + 'px)',
			MozTransform: 'translateY(' + amount + 'px)',
			OTransform: 'translateY(' + amount + 'px)',
			msTransform: 'translateY(' + amount + 'px)',
			transform: 'translateY(' + amount + 'px)'
		}
		return styleObj		
	},
	desktopStyles: function() {
		var styleObj = {
			WebkitTransform: 'translateY(' + this.state.textTranslate + 'px)',
			MozTransform: 'translateY(' + this.state.textTranslate + 'px)',
			OTransform: 'translateY(' + this.state.textTranslate + 'px)',
			msTransform: 'translateY(' + this.state.textTranslate + 'px)',
			transform: 'translateY(' + this.state.textTranslate + 'px)'
		}
		return styleObj
	},
	getTextStyles: function() {
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
		var activeProject = this.props.activeProject;

		return (
			<div id="solution-text" style={ this.getTextStyles() } >
				<h2 className="project-subhead">Solution</h2>
				<p>{this.props.activeProject.text.solution}</p>
			</div>
		)
	}
});

module.exports = Solution;