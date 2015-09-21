var React = require('react');
var TweenMax = require('gsap');
var classNames = require('classnames');
var Router = require('react-router');
var Link = Router.Link;

var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;

var HomepageWorkText = require('./HomepageWorkText.js');


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
	getInitialState: function() {
		return {
			height: null 
		}
	},
	componentDidMount: function() {
		this.waitForState();
	},
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.isActive && !this.props.isActive) {
			this.runActivateAnim();
		} else if (!nextProps.isActive && this.props.isActive) {
			this.setSpecificState();
		}
	},
	waitForState: function() {
		setTimeout(this.setSpecificState, 40);
	},
	setSpecificState: function() {
		if (this.state.isDesktop || this.state.isTablet) {
			this.setState({height: 25});
		} else if (this.state.isMobile) {
			this.setState({height: 40});
		}
	},
	runActivateAnim: function() {
		if (this.state.isDesktop || this.state.isTablet) {
			this.setState({height: 45});
		} else {
			this.setState({height: 65});;
		}
	},
	getStyles: function() {
		return {
			backgroundImage: this.props.isActive ?
				'url(' + this.props.project.images.header + ')' :
				'none',
			height: this.state.height + 'vh'
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