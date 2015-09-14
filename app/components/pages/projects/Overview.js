var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var ScrollActions = require('../../../actions/scrollActions.js');

var Overview = React.createClass({
	mixins: [mixin],
	cursors: {
		scrollPos: ['scrolling', 'scrollPosition'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation'],
		textTranslate: ['scrolling', 'textTranslateAmount']
	},
	mobileTabletStyles: function() {
		var styleObj = {
			WebkitTransform: 'translateY(' + -40 + 'px)',
			MozTransform: 'translateY(' + -40 + 'px)',
			OTransform: 'translateY(' + -40 + 'px)',
			msTransform: 'translateY(' + -40 + 'px)',
			transform: 'translateY(' + -40 + 'px)'
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
		} else if (!this.state.isDesktop) {
			var mobileTabletStyles = this.mobileTabletStyles();
			return mobileTabletStyles
		}
	},
	render: function() {
		var activeProject = this.props.activeProject;
		
		return (
			<div id="overview-text" style={ this.getTextStyles() }>
				<h2 className="project-subhead">Brief</h2>
				<p>{activeProject.text.brief}</p>
			</div>
		)
	}
});

module.exports = Overview;