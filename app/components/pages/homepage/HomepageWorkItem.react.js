var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var ViewBtn = require('./HomepageViewBtn.react.js');

var classNames = require('classnames');
var HpColorAnim = require('../../../animations/hpColorAnim.js');
var hpPostActions = require('../../../actions/hpPostActions.js');

var HpWorkItem = React.createClass({
	mixins: [mixin],
	cursors: {
		windowHeight: ['resize', 'currentHeight'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop'],
		scrollPos: ['scrolling', 'scrollPosition'],
		posts: ['posts']
	},
	getInitialState: function() {
		return {
			isActive: false
		}
	},
	componentWillMount: function() {
		$(window).on({
			scroll: this.handleScroll,
			resize: this.pushPosToState
		})
	},
	componentWillUnmount: function() {
		$(window).off('scroll', this.handleScroll)
	},
	componentDidMount: function() {
		this.pushPosToState();

		var self = this;

		setTimeout(function() {
			self.checkPosition();
		}, 300)
	},
	handleScroll: function() {
		var self = this;
		var timer = null;

		if (timer !== null) {
	        clearTimeout(timer);        
	    }
	    timer = setTimeout(function() {
	        self.checkPosition();
	    }, 300);
	},
	getPosForState: function() {
		var node = React.findDOMNode(this.refs.hpWorkItem);
		var height = node.clientHeight;
		var topPos = node.offsetTop;
		var bottomPos = topPos + height;

		console.log('sending pos to state', this.state.posts)

		return {
			id: this.props.project.index,
			height: height,
			topPos: topPos,
			bottomPos: bottomPos
		}
	},
	pushPosToState: function() {
		var liPosition = this.getPosForState();

		hpPostActions.updatePosts(liPosition);
	},
	checkPosition: function() {
		var midWindowScroll = this.state.scrollPos + (this.state.windowHeight / 2)
		var myPosition = this.state.posts[this.props.project.index];

		if (midWindowScroll > myPosition.topPos && midWindowScroll < myPosition.bottomPos) {
			console.log(myPosition.id + 'is active');
			this.setState({isActive: true});
		} else {
			this.setState({isActive: false});
		}
	},
	getStyles: function() {
		var styles = {
			backgroundImage: null
		}

		if (this.state.isActive) {
			styles.backgroundImage ='url(' + this.props.project.images.header + ')'
		} else {
			styles.backgroundImage = 'none'
		}
		return styles
	},
	getClasses: function() {
		var classes = {
			hpWorkItem: true,
			active: this.state.isActive
		}
		return classes
	},
	render: function() {
		if (!this.state.isActive)	
			return (
				<section ref="hpWorkItem" className={ classNames(this.getClasses())} style={this.getStyles()} onMouseEnter={this.hover} onMouseLeave={this.notHovering}>
				  <div className="work-info">
					  <div className="work-text">
					  	    <h1>{this.props.project.text.title}<span className="project-number">{(this.props.project.index + 1) + '/' + (this.props.totalProjects)}</span></h1>
	                        <h3>Fields</h3>
	                        <h2>{this.props.project.text.fields}</h2>
					  </div>
				  </div>
				</section>
			)
		else if (this.state.isActive) {
			return (
				<section ref="hpWorkItem" className={ classNames(this.getClasses())} style={this.getStyles()} onMouseEnter={this.hover} onMouseLeave={this.notHovering}>
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