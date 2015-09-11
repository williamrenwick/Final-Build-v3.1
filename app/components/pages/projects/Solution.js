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
		textTranslate: ['scrolling', 'textTranslateAmount']
	},
	getStyles: function() {
		var styleObj = {
			WebkitTransform: 'translateY(' + this.state.textTranslate + 'px)',
			MozTransform: 'translateY(' + this.state.textTranslate + 'px)',
			OTransform: 'translateY(' + this.state.textTranslate + 'px)',
			msTransform: 'translateY(' + this.state.textTranslate + 'px)',
			transform: 'translateY(' + this.state.textTranslate + 'px)'
		}

		return styleObj
	},
	render: function() {
		var activeProject = this.props.activeProject;

		return (
			<div id="solution-text" style={ this.getStyles() } >
				<h2 className="project-subhead">Solution</h2>
				<p>{this.props.activeProject.text.solution}</p>
			</div>
		)
	}
});

module.exports = Solution;