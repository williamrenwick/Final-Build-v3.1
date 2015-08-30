var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');

var Router = require('react-router');
var Link = Router.Link;
var ProjectActions = require('../../../actions/projectActions.js')

var PrevProject = React.createClass({
	mixins: [mixin],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation'],
		prevLink: ['project', 'prevProjectLink']
	},
	componentWillMount: function() {
		this.setLink();
	},
	determineLink: function() {
		var currentIdx = this.props.activeProject.index;
		var normalisedLength = this.props.projects.length - 1;
		var nextIdx;

		if ( currentIdx !== 0 ) {
			nextIdx = currentIdx - 1;
		} else if ( currentIdx == 0 ){
			nextIdx = normalisedLength;
		}

		var nextLink = this.props.projects[nextIdx].link;

		return nextLink
	},
	setLink: function() {
		var link = this.determineLink();

		ProjectActions.updatePrevLink(link);
	},
	render: function() {
		var activeProject = this.props.activeProject;
		
		return (
			<Link to={this.state.prevLink}>
				<div id="prev-project" className='project-nav'>
					<h1>Prev Project</h1>
				</div>
			</Link>
		)
	}
});

module.exports = PrevProject;