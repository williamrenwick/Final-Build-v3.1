var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var ViewBtn = require('./HomepageViewBtn.react.js');

var classNames = require('classnames');
var HpColorAnim = require('../../../animations/hpColorAnim.js');
var HPActions = require('../../../actions/hpActions.js');

var HpWorkItem = React.createClass({
	mixins: [mixin],
	cursors: {
		windowHeight: ['resize', 'currentHeight'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop'],
		scrollPos: ['scrolling', 'scrollPosition'],
		isScrolling: ['scrolling', 'isScrolling']
	},
	getInitialState: function() {
		return {
			hovering: false,
			isActive: false
		}
	},
	componentDidMount: function() {
		this.getPositions();
	},
	componentDidUpdate: function() {
		if (!this.state.isScrolling) {
			console.log('notScrolling')
		}
	},
	hover: function() {
		this.setState({hovering: true});
	},
	notHovering: function() {
		this.setState({hovering: false});
	},
	getPositions: function() {
		var node = React.findDOMNode(this.refs.hpWorkItem);
		var height = node.offsetHeight;
		var topPos = node.offsetTop;
		var bottomPos = topPos + height;

		this.checkPosition(topPos, bottomPos)

	},
	checkPosition: function(topPos, bottomPos) {
		var midWindowScroll = this.state.scrollPos + (this.state.windowHeight / 2)

		console.log(this.props.project.index, 'topPos', topPos, 'bottomPos', bottomPos)

		if (midWindowScroll > topPos && midWindowScroll < bottomPos) {
			this.setState({ isActive: true })
		} else {
			this.setState({ isActive: false });
		}
	},
	getStyles: function() {
		var styles = {
			backgroundImage: null
		}

		if (this.state.hovering) {
			styles.backgroundImage ='url(' + this.props.project.images.header + ')'
		} else {
			styles.backgroundImage = 'none'
		}
		return styles
	},
	getClasses: function() {
		var classes = {
			hpWorkItem: true,
			active: this.state.hovering
		}
		return classes
	},
	render: function() {
		if (!this.state.hovering)	
			return (
				<section ref="hpWorkItem" className={ classNames(this.getClasses()) } style={this.getStyles()} onMouseEnter={this.hover} onMouseLeave={this.notHovering}>
				  <div className="work-info">
					  <div className="work-text">
					  	    <h1>{this.props.project.text.title}<span className="project-number">{(this.props.project.index + 1) + '/' + (this.props.totalProjects)}</span></h1>
	                        <h3>Fields</h3>
	                        <h2>{this.props.project.text.fields}</h2>
					  </div>
				  </div>
				</section>
			)
		else if (this.state.hovering) {
			return (
				<section ref="hpWorkItem" className={ classNames(this.getClasses()) } style={this.getStyles()} onMouseEnter={this.hover} onMouseLeave={this.notHovering}>
				  <div className="work-info">
					  <div className="work-text">
					  	    <h1>{this.props.project.text.title}<span className="project-number">{(this.props.project.index + 1) + '/' + (this.props.totalProjects)}</span></h1>
					  	    <ViewBtn project={this.props.project}/>
					  </div>
				  </div>
				</section>
			)
		}
	}
});

                        /*<h3>Client</h3>
                        <h2>{this.props.project.text.client}</h2>
                        <h3>Fields</h3>
                        <h2>{this.props.project.text.fields}</h2>*/

module.exports = HpWorkItem