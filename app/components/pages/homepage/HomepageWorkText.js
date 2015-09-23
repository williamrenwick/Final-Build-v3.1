var React = require('react');

var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;

var ViewBtn = require('./HomepageViewBtn.react.js');

var WorkText = React.createClass({
	propTypes: {
		isActive: React.PropTypes.bool.isRequired,
	},
	mixins: [mixin, PureMixin],
	cursors: {
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop'],
	},
	renderInner: function() {
		console.log('renderInner', this.props.isActive)
		if (this.props.isActive) {
			return <ViewBtn project={this.props.project}/>;
		}

		return (
			<div>
				<h3>Fields</h3>
                <h2>{this.props.project.text.fields}</h2>
            </div>
		);
	},
	render: function() {
		return (
			<div className="work-text">
		  	    <h1>
		  	    	{this.props.project.text.title}
		  	    	<span className="project-number">
		  	    		{(this.props.project.index + 1) + '/' + (this.props.totalProjects)}
		  	    	</span>
		  	    </h1>
                {this.renderInner()}
		  	</div>
		)
	}
});

module.exports = WorkText;
