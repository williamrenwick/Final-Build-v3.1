var React = require('react');
var HomepageWorkItem = require('./HomepageWorkItem.react.js')

var mixin = require('baobab-react/mixins').branch

var HomepageWorkItems = React.createClass({
	mixins: [mixin],
    cursors: {
        insideWorkPosts: ['homepage', 'insideWorkPosts'],
        isMobile: ['resize', 'isMobile'],
        isTablet: ['resize', 'isTablet'],
        isDesktop: ['resize', 'isDesktop'],
        scrollPos: ['scrolling', 'scrollPosition'],
    },
	projectTitleStyle: function() {
		var styles = {
			opacity: null
		}

		if (this.state.insideWorkPosts) {
			styles.opacity = 1;
		} else {
			styles.opacity = 0;
		}
		return styles
	},
    renderWorkItems: function() {
        return this.props.projects.map(function(project, i, array) {
            return (
                <HomepageWorkItem
                    project={project}
                    totalProjects={array.length}
                    key={i}
                />
            );
        });
    },
	render: function() {
		return (
			<div id="workItems" style={{height: '100%', padding: '10% 10%'}}>
				<div id="hp-project-title" style={this.projectTitleStyle()}>Projects</div>
				{this.renderWorkItems()}
			</div>
		)

	}
});

module.exports = HomepageWorkItems