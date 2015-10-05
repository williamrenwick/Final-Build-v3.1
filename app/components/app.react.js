var React = require('react');
var styles = require('../main.css');
var MainNav = require('./common/MainNav.js');
var SideNav = require('./common/SideNav.js');
var Loader = require('./common/Loader.js');

var Preload = require('react-preload').Preload;
var rootMixin = require('baobab-react/mixins').root;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var PROJECTS = require('../data/projects.js');
var PRELOADIMAGES = require('../data/images.js');
var ScrollActions = require('../actions/scrollActions.js')
var Resize = require('../event-controllers/ResizeFns.js');
var ScrollFns = require('../event-controllers/ScrollFns.js');

var App = React.createClass({
	mixins: [rootMixin], 
	cursors: {
		menuIsActive: ['menu', 'isOpen'],
		isInHomepage: ['homepage', 'isInHomepage']
	},
	componentWillMount: function() {
		Resize.init();
		this.preload(PRELOADIMAGES);
	},
	componentDidMount: function() {
		ScrollFns.init();
	},
	componentDidUnmount: function() {
		ScrollFns.destroy();
	},
	preload: function(arrayOfImages) {
		$(arrayOfImages).each(function(){

			for (var i = 0; i < this.length; i++) {
				$('<img/>')[0].src = this[i];
			}
	        
	    });
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