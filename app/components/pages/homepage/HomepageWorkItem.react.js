var React = require('react');
var TweenMax = require('gsap');
var classNames = require('classnames');
var Router = require('react-router');
var Link = Router.Link;

var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;

var ResizeActions = require('../../../actions/ResizeActions.js');

var HomepageWorkText = require('./HomepageWorkText.js');


var HpWorkItem = React.createClass({
propTypes: {
		isActive: React.PropTypes.bool.isRequired,
	},
	mixins: [mixin, PureMixin],
	cursors: {
		windowH: ['resize', 'currentHeight'],
		docH: ['resize', 'currentDocHeight'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop'],
	},
	getInitialState: function () {
		return {
			isAnimating: false
		}
	},
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.isActive && !this.props.isActive) {
			this.runActivateAnim();
		} else if (!nextProps.isActive && this.props.isActive) {
			this.runDeactivateAnim();
		}
	},
	runActivateAnim: function() {
		var node = React.findDOMNode(this),
			height = this.getActiveHeight();

		this.setState({isAnimating: true})

		TweenMax.to(node, 1, {
			ease: Back.easeOut.config(2),
			height: height,
			onComplete: this.setState({isAnimating: false})
		});
	},
	runDeactivateAnim: function() {
		var node = React.findDOMNode(this),
			height = this.getInactiveHeight();

			TweenMax.to(node, 0, {
				height: height
			});

		this.setState({isAnimating: false})
	},
	getActiveHeight: function() {
		var height;

		if (this.state.isDesktop || this.state.isTablet) {
			height = this.convertHeightToViewportUnits(40);
		} else if (this.state.isMobile) {
			height = this.convertHeightToViewportUnits(65);
		}
		return height
	},
	getInactiveHeight: function() {
		var height;

		if (this.state.isDesktop || this.state.isTablet) {
			height = this.convertHeightToViewportUnits(25);
		} else if (this.state.isMobile) {
			height = this.convertHeightToViewportUnits(40);
		}
		return height
	},
	convertHeightToViewportUnits: function(val) {
		return this.state.windowH * (val/100)
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
			return  (
				<Link to={this.props.project.link}>
					  	<div className="work-info">
						  	<HomepageWorkText 
						  		project={this.props.project}
						  		totalProjects={this.props.totalProjects}
						  	/>
					  	</div>
				</Link>
			)
		} else {
			return (
				<div className="work-info">
					<HomepageWorkText 
				  		project={this.props.project}
				  		totalProjects={this.props.totalProjects}
				  	/> 
				</div>
			)
		}
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
					{this.renderInner()}
				</section>
		)
	}
});

module.exports = HpWorkItem