var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');
var PROJECTS = require('../../data/projects.js');
var classNames = require('classnames');

var bumpAmount = 0;
var body = $('body');

var MainNav = React.createClass({
	mixins: [mixin],
	cursors: {
		isClicked: ['menu', 'isOpen'],
		isHovering: ['menu', 'isHovering'],
		isOnDark: ['menu', 'isOnDark'],
		projSideOpen: ['menu', 'projSideOpen'],
		scrollPos: ['scrolling', 'scrollPosition'],
		isInHomepage: ['homepage', 'isInHomepage'],
		isInProjects: ['project', 'isInProjects'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop']
	},
	teaseMenu: function(e) {
		if (!this.state.isMobile) {
			menuActions.isHovering();
			bumpAmount = this.inAmount(e);
		}
	},
	unteaseMenu: function(e) {
		menuActions.notHovering();	
	},
	inAmount: function(e) {
		var button = e.target;

		function getOffset( el ) {
		    var _x = 0;
		    var _y = 0;
		    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
		        _x += el.offsetLeft - el.scrollLeft;
		        _y += el.offsetTop - el.scrollTop;
		        el = el.offsetParent;
		    }
		    return { top: _y, left: _x };
		}

		var btnX = getOffset( button ).left;
		var relX = (e.pageX - btnX) / 1.5;

  		if (relX <= 0) {
  			relX = 1;
  		}
		return relX;
	},
	menuToggle: function() {
		if (!this.state.isClicked) {
			menuActions.isClicked();
		} else if (this.state.isClicked) {
			menuActions.notClicked();
		}
	},
	mobileStyles: function() {
		var styleObj = {
			WebkitTransform: null,
			MozTransform: null,
			OTransform: null,
			msTransform: null,
			transform: null,
		}
		if (this.state.isClicked && this.state.projSideOpen) {
			styleObj.WebkitTransform = 'translateX(' + -80 + '%)';
			styleObj.MozTransform = 'translateX(' + -80 + '%)';
			styleObj.OTransform = 'translateX(' + -80 + '%)';
			styleObj.msTransform = 'translateX(' + -80 + '%)';
			styleObj.transform = 'translateX(' + -80 + '%)';
		} 
		return styleObj;
	},
	tabletStyles: function() {
		var styleObj = {
			WebkitTransform: 'translateX(' + 0 + 'px)',
			MozTransform: 'translateX(' + 0 + 'px)',
			OTransform: 'translateX(' + 0 + 'px)',
			msTransform: 'translateX(' + 0 + 'px)',
			transform: 'translateX(' + 0 + 'px)',
		}
		return styleObj;
	},
	desktopStyles: function() {
		var styleObj = {
			WebkitTransform: 'translateX(' + 0 + 'px)',
			MozTransform: 'translateX(' + 0 + 'px)',
			OTransform: 'translateX(' + 0 + 'px)',
			msTransform: 'translateX(' + 0 + 'px)',
			transform: 'translateX(' + 0 + 'px)',
		}
		return styleObj;
	},
	getStyles: function() {
		if (this.state.isDesktop) {
			var desktopStyles = this.desktopStyles();
			return desktopStyles
		} else if (this.state.isTablet) {
			var tabletStyles = this.tabletStyles();
			return tabletStyles
		} else if (this.state.isMobile) {
			var mobileStyles = this.mobileStyles();
			return mobileStyles
		}
	},
	render: function() {
		return (
			<nav className={ classNames({fixedNav: true, menuActive: this.state.isClicked, onDark: this.state.isOnDark || this.state.isInProjects }) } style={ this.getStyles() }>
	          <div id="menu-button" onClick={this.menuToggle} ref="menu-btn">     
	              <span className="menu-line"></span>
	          </div>
	          <div className="site-title"></div>
	        </nav>
		)
	}
})

module.exports = MainNav;