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
var ScrollFns = require('../../../event-controllers/ScrollFns.js');

var PROJECTS = require('../../../data/projects.js');
var totalProjAmount = PROJECTS.length;

var HomepageWrap = React.createClass({
	mixins: [mixin],
	cursors: {
		isInHomepage: ['homepage', 'isInHomepage'],
		isInProjects: ['project', 'isInProjects'],
		scrollPos: ['scrolling', 'scrollPosition'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		projSideOpen: ['menu', 'projSideOpen'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop']
	},
	componentWillMount: function() {
		HomepageActions.isInHomepage();
		ProjectActions.notInProjects();
		$(window).on('scroll', this.handleScroll)
	},
	componentWillUnmount: function() {
		$(window).off('scroll', this.handleScroll);
	},
	componentDidMount: function() {
		Animations.init();
		this.initaliseAfterState();
	},
	componentDidUnmount: function() {
		Animations.destroy();
	},
	initaliseAfterState: function() {
		var self = this;
		
		setTimeout(function() {
			self.whereInHomepage();
		}, 20)
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
	render: function() {
		return (
			<div data-page='hp' id="wrap" className={ classNames({ menuHover: this.state.menuHover, sideMenuActive: this.state.menuActive }) } style={ this.getStyles() }>
				<Intro />
				<WorkItems projects={this.props.projects}/>
				<Contact />
			</div>
		)
	}
});

module.exports = HomepageWrap
