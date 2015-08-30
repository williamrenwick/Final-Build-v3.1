var React = require('react');
var mixin = require('baobab-react/mixins').branch
var Intro = require('./HomepageIntro.react.js')
var classNames = require('classnames');
var WorkItems = require('./HomepageProjects.react.js')
var Contact = require('../../common/Contact.js')
var Animations = require('../../../animations/animations.js')
var HomepageActions = require('../../../actions/hpActions.js');
var menuActions = require('../../../actions/actions.js');
var PROJECTS = require('../../../data/projects.js');
var ScrollActions = require('../../../actions/scrollActions.js');

var totalProjAmount = PROJECTS.length;

var HomepageWrap = React.createClass({
	mixins: [mixin],
	cursors: {
		scrollPos: ['scrolling', 'scrollPosition'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		isInHomepage: ['homepage', 'isInHomepage']
	},
	componentWillMount: function() {
		var scrollTop = $(window).scrollTop();

		ScrollActions.scrollPosUpdate(scrollTop);
		HomepageActions.isInHomepage();
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
			menuActions.isOnLight();
		} else {
			menuActions.isOnDark();
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
