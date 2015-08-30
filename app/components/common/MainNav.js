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
		scrollPos: ['scrolling', 'scrollPosition'],
		isInHomepage: ['homepage', 'isInHomepage'],
		isInProjects: ['project', 'isInProjects'],
	},
	teaseMenu: function(e) {
		menuActions.isHovering();
		bumpAmount = this.inAmount(e);
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

		return relX;
	},
	menuToggle: function() {
		if (!this.state.isClicked) {
			menuActions.isClicked();
		} else if (this.state.isClicked) {
			menuActions.notClicked();
		}
	},
	getStyles: function() {
		var styleObj = {
			transform: null
		}

		if (!this.state.isHovering && !this.state.isClicked) {
			styleObj.transform = 'translateX(' + 0 + 'px)';
		} else if (this.state.isHovering && !this.state.isClicked) {
			styleObj.transform = 'translateX(' + bumpAmount + 'px)';
		}

		return styleObj;
	},
	render: function() {

		return (
			<nav className={ classNames({fixedNav: true, menuActive: this.state.isClicked, onDark: this.state.isOnDark }) } style={ this.getStyles() }>
	          <div id="menu-button" onMouseEnter={this.teaseMenu} onMouseLeave={this.unteaseMenu} onClick={this.menuToggle} ref="menu-btn">     
	              <span className="menu-line"></span>
	          </div>
	          <span className="site-title">Lorem Ipsum</span>
	        </nav>
		)
	}
})

module.exports = MainNav;