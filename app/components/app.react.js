var stateTree = require('../data/stateTree.js');
var rootMixin = require('baobab-react/mixins').root;
var React = require('react');
var Router = require('react-router');
var MainNav = require('./common/MainNav.js');
var SideNav = require('./common/SideNav.js');
var styles = require('../main.css');
var PROJECTS = require('../data/projects.js');
var ScrollActions = require('../actions/scrollActions.js');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	mixins: [rootMixin], 
	cursors: {
		menuIsActive: ['menu', 'isOpen'],
		isInHomepage: ['homepage', 'isInHomepage'],
		scrollPos: ['scrolling', 'scrollPosition']
	},
	componentDidMount: function() {
		var scrollTop = $(window).scrollTop();
		window.addEventListener('scroll', this.handleScroll);

		ScrollActions.scrollPosUpdate(scrollTop);
	},
	componentDidUnmount: function() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	handleScroll: function(event) {
		var scrollTop = event.srcElement.body.scrollTop;

		ScrollActions.scrollPosUpdate(scrollTop);
	},
	render: function() {
		return (
			<div id="reactWrap">
				<MainNav ref="main-nav"/>
				<SideNav projects={PROJECTS} ref="side-nav" />
				<RouteHandler projects={PROJECTS} {...this.props} ref="content" />
			</div>
		)
	}
});

module.exports = App;