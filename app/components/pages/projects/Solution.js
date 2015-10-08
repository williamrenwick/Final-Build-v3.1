var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var ScrollActions = require('../../../actions/scrollActions.js');
var ProjectActions = require('../../../actions/projectActions.js');


var Solution = React.createClass({
	mixins: [mixin],
	cursors: {
		scrollPos: ['scrolling', 'scrollPosition'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation'],
		viewingSolution: ['project', 'viewingSolution'],
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
		var styleObj = {
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
	handleClick: function() {
		if (this.state.viewingSolution) {
			ProjectActions.isViewingBrief();
		} else {
			ProjectActions.isViewingSolution();
		}
	},
	render: function() {
		var activeProject = this.props.activeProject;

		return (
			<div id="solution-text" className={ classNames({ hide: !this.state.viewingSolution }) } onClick={this.handleClick} style={ this.getTextStyles() } >
				<h2 className="project-subhead"><span>Solution</span></h2>
				<p>{this.props.activeProject.text.solution}</p>
			</div>
		)
	}
});

module.exports = Solution;