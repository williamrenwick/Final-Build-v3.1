var React = require('react');
var HomepageWorkItem = require('./HomepageWorkItem.react.js');
var throttle = require('lodash.throttle');
var mixin = require('baobab-react/mixins').branch;
var hpPostActions = require('../../../actions/hpPostActions.js');

var HomepageWorkItems = React.createClass({
	mixins: [mixin],
    cursors: {
        windowHeight: ['resize', 'currentHeight'],
        insideWorkPosts: ['homepage', 'insideWorkPosts'],
        isMobile: ['resize', 'isMobile'],
        isTablet: ['resize', 'isTablet'],
        isDesktop: ['resize', 'isDesktop'],
        scrollPos: ['scrolling', 'scrollPosition'],
        posts: ['posts'],
    },
    getWindowEventHandlers: function() {
        return {
            scroll: this.throttledHandleScroll,
            resize: this.handleResize,
        };
    },
    listenToWindowEvents: function() {
        $(window).on(this.getWindowEventHandlers());
    },
    stopListeningToWindowEvents: function() {
        $(window).off(this.getWindowEventHandlers());
    },
    componentWillMount: function() {
        this.throttledHandleScroll = throttle(this.handleScroll, 300);
    },
    componentDidMount: function() {
        this.listenToWindowEvents();
        this.updateWorkItemPositions();
    },
    componentWillUnmount: function() {
        this.stopListeningToWindowEvents();
    },
    handleScroll: function() {
        this.updateWorkItemPositions();
    },
    handleResize: function() {
        this.updateWorkItemPositions();
    },
    updateWorkItemPositions: function() {
        var workItemsWrapper = React.findDOMNode(this.refs.workItemsWrapper);
        var workItems = [...workItemsWrapper.childNodes]; // convert NodeList to array

        var workItemPositions = workItems.map((workItem) => {
            var height = workItem.clientHeight;
            var topPos = workItem.offsetTop;
            return {
                height,
                topPos,
                bottomPos: topPos + height,
            };
        });

        hpPostActions.updatePositions(workItemPositions);
    },
	projectTitleStyle: function() {
		return {
			opacity: this.state.insideWorkPosts ? 1 : 0
		};
	},
    renderWorkItems: function() {
        var midWindowScroll = this.state.scrollPos + (this.state.windowHeight / 2);
        return this.props.projects.map((project, i, array) => {
            var workItemPosition = this.state.posts[i];

            // Have to check that the workItemPosition exists because on the
            // initial render we don't have the position of any of the items
            // yet, have to wait for the mount
            var workItemIsInCentre = !!workItemPosition &&
                midWindowScroll > workItemPosition.topPos &&
                midWindowScroll < workItemPosition.bottomPos;

            return (
                <HomepageWorkItem
                    key={i}
                    project={project}
                    totalProjects={array.length}
                    isActive={workItemIsInCentre}
                />
            );
        });
    },
	render: function() {
		return (
			<div id="workItems" style={{height: '100%', padding: '10% 10%'}}>
				<div id="hp-project-title" style={this.projectTitleStyle()}>Projects</div>
                <div ref="workItemsWrapper">
    				{this.renderWorkItems()}
                </div>
			</div>
		)

	}
});

module.exports = HomepageWorkItems