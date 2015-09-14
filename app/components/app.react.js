var viewportUnitsBuggyfill = require('viewport-units-buggyfill');

var React = require('react');
var styles = require('../main.css');
var MainNav = require('./common/MainNav.js');
var SideNav = require('./common/SideNav.js');

var rootMixin = require('baobab-react/mixins').root;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var PROJECTS = require('../data/projects.js');
var ScrollActions = require('../actions/scrollActions.js')
var Resize = require('../event-controllers/ResizeFns.js');
var ScrollFns = require('../event-controllers/ScrollFns.js');

var App = React.createClass({
	mixins: [rootMixin], 
	cursors: {
		menuIsActive: ['menu', 'isOpen'],
		isInHomepage: ['homepage', 'isInHomepage'],
		scrollPos: ['scrolling', 'scrollPosition']
	},
	componentWillMount: function() {
		Resize.init();
	},
	componentDidMount: function() {
		viewportUnitsBuggyfill.init();
		ScrollFns.init();
	},
	componentDidUnmount: function() {
		ScrollFns.destroy();
	},
	render: function() {
		return (
			<div id="reactWrap" style={{height: '100%'}}>
				<MainNav ref="main-nav"/>
				<SideNav projects={PROJECTS} ref="side-nav" />
				<RouteHandler projects={PROJECTS} {...this.props} ref="content" />
			</div>
		)
	}
});

module.exports = App;