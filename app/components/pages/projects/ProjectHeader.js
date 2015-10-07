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
		windowHeight: ['resize', 'currentHeight'],
		scrollPos: ['scrolling', 'scrollPosition'],
		showSideClose: ['scrolling', 'showSideClose'],
		textTranslate: ['scrolling', 'textTranslateAmount'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		isInProjects: ['project', 'isInProjects'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop'],
	},
	componentWillMount: function() {
		$(window).on('scroll', this.handleScroll)
	},
	componentWillUnmount: function() {
		$(window).off('scroll', this.handleScroll)
	},
	componentDidMount: function() {
		var self = this;

		setTimeout(function() {
			self.calcTranslate();
		}, 30)
	},
	calcTranslate: function() {
		var translateAmount = -( this.state.scrollPos / 10 );

		ScrollActions.textTranslateAmount(translateAmount);
	},
	handleScroll: function() {
		this.calcTranslate();

		if (this.state.scrollPos > this.state.windowHeight * 0.2) {
			ScrollActions.showSideClose();
		} else {
			ScrollActions.hideSideClose();
		}
	},
	desktopStyles: function() {
		var styleObj = {
			WebkitTransform: 'translateY(' + this.state.textTranslate + 'px)',
			MozTransform: 'translateY(' + this.state.textTranslate + 'px)',
			OTransform: 'translateY(' + this.state.textTranslate + 'px)',
			msTransform: 'translateY(' + this.state.textTranslate + 'px)',
			transform: 'translateY(' + this.state.textTranslate + 'px)'
		}
		return styleObj
	},
	getTextStyles: function() {
		if (this.state.isDesktop) {
			var desktopStyles = this.desktopStyles();
			return desktopStyles
		}
	},
	getArrowStyle: function() {
        var styles = {
            opacity: null
        }

        if (this.state.scrollPos <= 0) {
            styles.opacity = 1;
        } else if (this.state.scrollPos > 0 && this.state.scrollPos < (this.state.windowHeight/2)) {
            var percentageScrolled = this.state.scrollPos / (this.state.windowHeight/2);
            var opacity = 1 - percentageScrolled;

            styles.opacity = opacity;
        } else {
            styles.opacity = 0;
        }
        return styles
	},
	sideCloseText: function() {
		var activeProject = this.props.activeProject;

		if (this.state.isDesktop) {
			return 'Viewing: ' + activeProject.text.title
		} else if (this.state.isTablet) {
			return 'Close'
		} else if (this.state.isMobile) {
			return 'Close'
		}
	},
	render: function() {
		var activeProject = this.props.activeProject;

		return (
			<div id="project-hdr">

				<div id="project-hdr-img" style={{backgroundImage: 'url(' + activeProject.images.headerfade + ')'}}>
					<div id="project-hdr-orig-img" style={{backgroundImage: 'url(' + activeProject.images.header + ')'}}></div>
				</div>

				<div id="closeProjSide" className={classNames({hide: !this.state.showSideClose})}>
			        <Link to="home"><p>{this.sideCloseText()}</p></Link>
				</div>
				<PrevProject projects={this.props.projects} activeProject={activeProject}/>
				<NextProject projects={this.props.projects} activeProject={activeProject}/>

				<div id="project-hdr-text" style={ this.getTextStyles() }>
				    <div className={classNames({closeProj: true, hide: this.state.showSideClose})}>
				        <Link to="home"><p>Close Project</p></Link>
				    </div>
				    <h1>{activeProject.text.title}</h1>
				    <h3>Client</h3>
				    <h2>{activeProject.text.client}</h2>
				    <h3>Fields</h3>
				    <h2>{activeProject.text.fields}</h2>
				</div>

				<div id="header-arrow" className="down-arrow" style={this.getArrowStyle()}></div>
			</div>
		)
	}
});

module.exports = ProjectHdr;