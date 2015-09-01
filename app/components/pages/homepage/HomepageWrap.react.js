var React = require('react');
var Intro = require('./HomepageIntro.react.js')
var WorkItems = require('./HomepageProjects.react.js')
var Contact = require('../../common/Contact.js')

var mixin = require('baobab-react/mixins').branch
var classNames = require('classnames');
var Animations = require('../../../animations/animations.js')
var HomepageActions = require('../../../actions/hpActions.js');
var MenuActions = require('../../../actions/actions.js');
var ProjectActions = require('../../../actions/projectActions.js');
var ScrollActions = require('../../../actions/scrollActions.js');

var PROJECTS = require('../../../data/projects.js');
var totalProjAmount = PROJECTS.length;

var HomepageWrap = React.createClass({
	mixins: [mixin],
	cursors: {
		isInHomepage: ['homepage', 'isInHomepage'],
		isInProjects: ['project', 'isInProjects'],
		scrollPos: ['scrolling', 'scrollPosition'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen']
	},
	componentWillMount: function() {
		HomepageActions.isInHomepage();
		ProjectActions.notInProjects();

		console.log(this.state.isInProjects)

		var scrollTop = $(window).scrollTop();
		ScrollActions.scrollPosUpdate(scrollTop);

		this.whereInHomepage();
		Animations.init();

		$(window).on('scroll', this.handleScroll);
	},
	componentWillUnmount: function() {
		$(window).off('scroll', this.handleScroll);

		Animations.destroy();
	},
	handleScroll: function() {
		var timer = null,
			self = this;

		self.whereInHomepage();

		$(window).on('scroll', function() {
			if(timer !== null) {
				clearTimeout(timer);
			}
			timer = setTimeout(function() {
				self.whereInHomepage();
			}, 150)
		});
	},
	whereInHomepage: function() {
		var windowH = $(window).height(),
			delta = 5,
			workCoord = {
				top: windowH - delta,
				bottom:  (windowH * totalProjAmount) + (windowH - delta)
			};

		if (this.state.scrollPos < workCoord.top || this.state.scrollPos > workCoord.bottom) {
			MenuActions.isOnLight();
		} else {
			MenuActions.isOnDark();
		}
	},
	render: function() {
		return (
			<div data-page='hp' id="wrap" className={ classNames({ menuHover: this.state.menuHover, sideMenuActive: this.state.menuActive }) }>
				<Intro />
				<WorkItems projects={this.props.projects}/>
				<Contact />
			</div>
		)
	}
});

module.exports = HomepageWrap
