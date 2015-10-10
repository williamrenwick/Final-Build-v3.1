var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var ScrollActions = require('../../../actions/scrollActions.js');
var ProjectActions = require('../../../actions/projectActions.js');

var Overview = React.createClass({
	mixins: [mixin],
	cursors: {
		scrollPos: ['scrolling', 'scrollPosition'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation'],
		viewingBrief: ['project', 'viewingBrief'],
		textTranslate: ['scrolling', 'textTranslateAmount'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop'],
	},
	mobileStyles: function() {
		var amount = -40;
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
		var amount = 0;
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
			return mobileTabletStyles
		} else if (this.state.isMobile) {
			var tabletStyles = this.mobileStyles();
			return mobileTabletStyles
		}
	},
	handleClick: function() {
		if (this.state.viewingBrief) {
			ProjectActions.isViewingSolution();
		} else {
			ProjectActions.isViewingBrief();
		}
	},
	render: function() {
		var activeProject = this.props.activeProject;
		
		return (
			<div id="overview-text" className={ classNames({ hide: !this.state.viewingBrief }) } onClick={this.handleClick} style={ this.getTextStyles() }>
				<h2 className="project-subhead"><span>Brief</span></h2>
				<p>{activeProject.text.brief}</p>
			</div>
		)
	}
});

module.exports = Overview;