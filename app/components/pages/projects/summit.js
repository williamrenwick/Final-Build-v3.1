var React = require('react');
var ProjectHeader = require('./ProjectHeader.js');
var SectionOne = require('./SectionOne.js');
var SectionTwo = require('./SectionTwo.js');
var SectionThree = require('./SectionThree.js');
var Contact = require('../../common/Contact.js');

var mixin = require('baobab-react/mixins').branch;
var StateTree = require('../../../data/stateTree.js');
var ProjectActions = require('../../../actions/projectActions.js');
var classNames = require('classnames');
var ScrollActions = require('../../../actions/scrollActions.js');
var MenuActions = require('../../../actions/actions.js');
var ScrollFns = require('../../../event-controllers/ScrollFns.js');

var Router = require('react-router');


var ProjectWrap = React.createClass({
	mixins: [mixin],
	cursors: {
		isOnDark: ['menu', 'isOnDark'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		isInProjects: ['project', 'isInProjects'],
		projSideOpen: ['menu', 'projSideOpen'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop']
	},
	getDataIdx: function() {
		var currentPath = '/summit';
		var props = this.props;

		for (var i = 0; i < props.projects.length; i++) {
			var relPath = '/' + props.projects[i].link

			if (relPath == currentPath) {
				return i;
			}
		}
	},
	componentDidMount: function() {
		setTimeout(function () {
			ScrollActions.scrollPosUpdate($(window).scrollTop());
			ProjectActions.isInProjects();
		}, 20)	
	},
	mobileStyles: function() {
		var styleObj = {
			transform: null
		}

		if (this.state.projSideOpen) {
			styleObj.transform = 'translateX(10%)'
		}
		return styleObj;
	},
	getStyles: function() {
		if (this.state.isMobile) {
			var mobileStyles = this.mobileStyles();

			return mobileStyles
		}
	},
	getClasses: function() {
		var classes = {
			menuHover: this.state.menuHover,
			sideMenuActive: this.state.menuActive,
			loadAnim: this.state.isInProjects
		}
		return classes
	},
	render: function() {
		var idx = this.getDataIdx(),
			activeProject = this.props.projects[idx];
		
		return (
			<div id="projectWrap" className={ classNames( this.getClasses() ) } style={ this.getStyles() }>
				<ProjectHeader projects={this.props.projects} activeProject={activeProject}/>
				<SectionOne activeProject={activeProject}/>
				<SectionTwo activeProject={activeProject}/>
				<SectionThree activeProject={activeProject}/>
				<Contact />
			</div>
		)
	}
});

module.exports = ProjectWrap;