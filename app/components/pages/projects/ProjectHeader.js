var React = require('react');
var NextProject = require('./NextProject.js');
var PrevProject = require('./PrevProject.js');

var ScrollActions = require('../../../actions/scrollActions.js');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var Router = require('react-router');
var Link = Router.Link;

var ProjectHdr = React.createClass({
	mixins: [mixin],
	cursors: {
		scrollPos: ['scrolling', 'scrollPosition'],
		textTranslate: ['scrolling', 'textTranslateAmount'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		isInProjects: ['project', 'isInProjects'],
	},
	componentWillMount: function() {
		var scrollPos = $(window).scrollTop();

		ScrollActions.scrollPosUpdate(scrollPos);
		this.calcTranslate();

		$(window).on('scroll', this.handleScroll)
	},
	componentWillUnmount: function() {
		$(window).off('scroll', this.handleScroll)
	},
	calcTranslate: function() {
		var scrollPos = this.state.scrollPos,
			translateAmount = -(scrollPos / 10);

		ScrollActions.textTranslateAmount(translateAmount);
	},
	handleScroll: function() {
		this.calcTranslate();
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
			<div id="project-hdr">
				<div id="project-hdr-img" className={ classNames({ loadAnim: this.state.isInProjects }) } style={{backgroundImage: 'url(' + activeProject.images.header + ')'}}></div>
				<PrevProject projects={this.props.projects} activeProject={activeProject}/>
				<NextProject projects={this.props.projects} activeProject={activeProject}/>
				<div id="project-hdr-text" className={ classNames({ loadAnim: this.state.isInProjects }) } style={ this.getStyles() }>
				    <div className="close-proj">
				        <div className="view-close"></div>
				        <Link to="home"><p>Close Project</p></Link>
				    </div>
				    <h1>{activeProject.text.title}</h1>
				    <h3>Client</h3>
				    <h2>{activeProject.text.client}</h2>
				    <h3>Fields</h3>
				    <h2>{activeProject.text.fields}</h2>
				</div>
			</div>
		)
	}
});

module.exports = ProjectHdr;