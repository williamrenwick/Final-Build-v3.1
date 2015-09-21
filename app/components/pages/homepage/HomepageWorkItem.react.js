var React = require('react');
const {Spring} = require("react-motion");
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
	/*componentWillReceiveProps: function(nextProps) {
		if (nextProps.isActive && !this.props.isActive) {
			this.runActivateAnim();
		} else if (!nextProps.isActive && this.props.isActive) {
			this.runDeactivateAnim();
		}
	},
	runActivateAnim: function() {
		var activeHeight;

		if (this.state.isDesktop || this.state.isTablet) {
			activeHeight = 45;
		} else {
			activeHeight = 65;
		}

	},
	runDeactivateAnim: function() {
		
	},*/
	getStyles: function() {
		return {
			backgroundImage: this.props.isActive ?
				'url(' + this.props.project.images.header + ')' :
				'none',
			height: this.state.height + 'vh'
		};
	},
	getClasses: function(val) {
		console.log(val)

		return {
			hpWorkItem: true,
			active: this.props.isActive
		};
	},
	startHeight: function() {
		var startHeight;

		if (this.state.isDesktop || this.state.isTablet) {
			startHeight = 25
		} else if (this.state.isMobile) {
			startHeight = 40
		}
		return {
			height: startHeight
		}
	},
	endHeight: function() {
		var endHeight;

		if (this.props.isActive) {
			if (this.state.isDesktop || this.state.isTablet) {
				endHeight = 40
			} else if (this.state.isMobile) {
				endHeight = 65
			}
		} else if (!this.props.isActive) {
			var startHeight = this.startHeight()

			endHeight = startHeight.height;
		}
		
		return {
			height: endHeight
		}
	},
	renderInner: function() {
		if (this.props.isActive) {
			return  (
				<Link to={this.props.project.link}>
					  	<div className="work-info">
						  	<HomepageWorkText 
						  		project={this.props.project}
						  		totalProjects={this.props.totalProjects}
						  		isActive={this.props.isActive}
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
				  		isActive={this.props.isActive}
				  	/> 
				</div>
			)
		}
	},
	render: function() {
		return (
			<Spring defaultValue={this.startHeight()} endValue={this.endHeight()}>
			    {interpolated =>
					<section
						className={classNames(this.getClasses(interpolated))}
						style={{
							backgroundImage: this.props.isActive ? 'url(' + this.props.project.images.header + ')' : 'none', 
							height: interpolated.height + 'vh'
						}}
						onMouseEnter={this.hover}
						onMouseLeave={this.notHovering}
					>
						{this.renderInner()}
					</section>
				}
			</Spring>
		)
	}
});

module.exports = HpWorkItem