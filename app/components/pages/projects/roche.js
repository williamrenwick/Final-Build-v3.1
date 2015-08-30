var React = require('react');
var ProjectHeader = require('./ProjectHeader.js');
var SectionOne = require('./SectionOne.js');
var SectionTwo = require('./SectionTwo.js');
var SectionThree = require('./SectionThree.js');

var mixin = require('baobab-react/mixins').branch;
var ProjectActions = require('../../../actions/projectActions.js');
var classNames = require('classnames');
var ScrollActions = require('../../../actions/scrollActions.js');
var MenuActions = require('../../../actions/actions.js');
var Router = require('react-router')


var ProjectWrap = React.createClass({
	mixins: [mixin, Router.State],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen']
	},
	getDataIdx: function() {
		var currentPath = '/roche-cms';
		var props = this.props;


		for (var i = 0; i < props.projects.length; i++) {
			var relPath = '/' + props.projects[i].link

			console.log(relPath, currentPath)

			if (relPath == currentPath) {
				return i;
			}
		}
	},
	componentWillMount: function() {
<<<<<<< HEAD
=======
		console.log('roche','componentWillMount');
		$('body').removeClass('noScroll')
	},
	componentWillUnmount: function() {
		console.log('roche','componentWillUnmount');
	},
	componentDidMount: function() {
		var scrollTop = $(window).scrollTop();

		console.log('project mounted')

>>>>>>> origin/bodge-job
		MenuActions.isOnDark();
		ProjectActions.isInProjects();
		ProjectActions.hasAnimated();
	},
	componentDidMount: function() {
		var scrollTop = $(window).scrollTop();

		ScrollActions.scrollPosUpdate(scrollTop);
	},	
	render: function() {
		var idx = this.getDataIdx(),
			activeProject = this.props.projects[idx];

		return (
			<div id="projectWrap" className={ classNames({ menuHover: this.state.menuHover, sideMenuActive: this.state.menuActive }) }>
				<ProjectHeader projects={this.props.projects} activeProject={activeProject}/>
				<SectionOne activeProject={activeProject}/>
				<SectionTwo activeProject={activeProject}/>
				<SectionThree activeProject={activeProject}/>
			</div>
		)
	}
});

module.exports = ProjectWrap;