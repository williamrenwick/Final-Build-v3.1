var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');

var Router = require('react-router');
var Link = Router.Link;
var ProjectActions = require('../../../actions/projectActions.js')

var NextProject = React.createClass({
	mixins: [mixin],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation'],
		nextLink: ['project', 'nextProjectLink']
	},
	componentWillMount: function() {
		this.setLink();
	},
	determineLink: function() {
		var currentIdx = this.props.activeProject.index;
		var normalisedLength = this.props.projects.length - 1;
		var nextIdx;


		if ( currentIdx !== normalisedLength ) {
			nextIdx = currentIdx + 1;
		} else if ( currentIdx == normalisedLength ){
			nextIdx = 0;
		}

		var nextLink = this.props.projects[nextIdx].link;

		return nextLink
	},
	setLink: function() {
		var link = this.determineLink();

		ProjectActions.updateNextLink(link);
	},
	render: function() {
		return (
			<Link to={this.state.nextLink}>
				<div id="next-project" className='project-nav'>
					<h1>Next Project</h1>
				</div>
			</Link>
		)
	}
});

module.exports = NextProject;