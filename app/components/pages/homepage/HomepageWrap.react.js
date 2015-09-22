var React = require('react');
var Intro = require('./HomepageIntro.react.js')
var WorkItems = require('./HomepageWorkItems.react.js')
var Contact = require('../../common/Contact.js')

var mixin = require('baobab-react/mixins').branch
var classNames = require('classnames');
var Animations = require('../../../animations/animations.js');
var HpColorAnim = require('../../../animations/hpColorAnim.js');
var HomepageActions = require('../../../actions/hpActions.js');
var ResizeActions = require('../../../actions/ResizeActions.js');
var MenuActions = require('../../../actions/actions.js');
var ProjectActions = require('../../../actions/projectActions.js');
var ScrollActions = require('../../../actions/scrollActions.js');
var ScrollFns = require('../../../event-controllers/ScrollFns.js');

var PROJECTS = require('../../../data/projects.js');
var totalProjAmount = PROJECTS.length;

var HomepageWrap = React.createClass({
	mixins: [mixin],
	cursors: {
		windowHeight: ['resize', 'currentHeight'],
		documentHeight: ['resize', 'currentDocHeight'],
		isInHomepage: ['homepage', 'isInHomepage'],
		isInProjects: ['project', 'isInProjects'],
		scrollPos: ['scrolling', 'scrollPosition'],
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
		setTimeout(this.initiateAfterState, 20)
	},
	initiateAfterState: function() {
		this.whereInHomepage();
	},
	calculateBGColor: function() {
		return HpColorAnim.workInfoBg(this.state.scrollPos);
	},
	handleScroll: function() {
		this.whereInHomepage();
	},
	whereInHomepage: function() {
		var triggerAmount = 150;
		var topTrigger = this.state.windowHeight - triggerAmount;
		var contactMid = this.state.documentHeight - (this.state.windowHeight / 2);
		var scrollBtm = this.state.scrollPos + this.state.windowHeight;

        if ((this.state.scrollPos > topTrigger) && (scrollBtm < contactMid)) {
            HomepageActions.insideWorkPosts();
        } else {
            HomepageActions.outsideWorkPosts();
        }
	},
	otherStyles: function() {
		return {
			backgroundColor: this.calculateBGColor(),
		};
	},
	mobileStyles: function() {
		var styleObj = {
			backgroundColor: this.calculateBGColor(),
			transform: null,
		};

		if (this.state.projSideOpen) {
			styleObj.transform = 'translateX(10%)'
		}

		return styleObj;
	},
	getStyles: function() {
		if (this.state.isMobile) {
			var mobileStyles = this.mobileStyles();

			return mobileStyles
		} else {
			var otherStyles = this.otherStyles();

			return otherStyles
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
