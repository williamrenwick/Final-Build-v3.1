var React = require('react');

var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;

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
		return (
			<div className='fields'>
				<h3>Fields</h3>
                <h2>{this.props.project.text.fields}</h2>
            </div>
		);
	},
	render: function() {
		return (
			<div className="work-text">
				<div className="hp-project-title-indicator">
					<h3>Project Title</h3>
				</div>
		  	    <h1>
		  	    	<span className="hp-project-title">{this.props.project.text.title}</span>
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
