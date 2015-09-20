var React = require('react');
var TweenMax = require('gsap');
var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;
var ViewBtn = require('./HomepageViewBtn.react.js');
var classNames = require('classnames');

var HpWorkItem = React.createClass({
	propTypes: {
		isActive: React.PropTypes.bool.isRequired,
	},
	mixins: [mixin, PureMixin],
	cursors: {
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop'],
	},
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.isActive && !this.props.isActive) {
			this.runActivateAnim();
		} else if (!nextProps.isActive && this.props.isActive) {
			this.runDeactivateAnim();
		}
	},
	runActivateAnim: function() {
		var node = React.findDOMNode(this);
		if (this.state.isDesktop || this.state.isTablet) {
			TweenMax.to(node, 1, {
				ease: Back.easeOut.config(2),
				height: '45vh'
			});
		} else if (this.state.isMobile) {
			TweenMax.to(node, 1, {
				ease: Back.easeOut.config(2),
				height: '65vh'
			});
		}
	},
	runDeactivateAnim: function() {
		var node = React.findDOMNode(this);
		if (this.state.isDesktop || this.state.isTablet) {
			TweenMax.to(node, 0, {
				height: '25vh'
			});
		} else if (this.state.isMobile) {
			TweenMax.to(node, 0, {
				height: '45vh'
			});
		}
	},
	getStyles: function() {
		return {
			backgroundImage: this.props.isActive ?
				'url(' + this.props.project.images.header + ')' :
				'none',
		};
	},
	getClasses: function() {
		return {
			hpWorkItem: true,
			active: this.props.isActive
		};
	},
	renderInner: function() {
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
			<section
				ref="hpWorkItem"
				className={classNames(this.getClasses())}
				style={this.getStyles()}
				onMouseEnter={this.hover}
				onMouseLeave={this.notHovering}
			>
			  	<div className="work-info">
				  	<div className="work-text">
				  	    <h1>
				  	    	{this.props.project.text.title}
				  	    	<span className="project-number">
				  	    		{(this.props.project.index + 1) + '/' + (this.props.totalProjects)}
				  	    	</span>
				  	    </h1>
                        {this.renderInner()}
				  	</div>
			  	</div>
			</section>
		)
	}
});

module.exports = HpWorkItem