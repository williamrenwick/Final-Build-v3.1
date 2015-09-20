var React = require('react');
var TweenMax = require('gsap');
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
		var self = this
		$(window).on({
			scroll: this.handleScroll,
			resize: function() {
				self.pushPosToState(true)
			}
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
	pushPosToState: function(resize) {
		var liPosition = this.getPosForState();

		if (resize == true && this.props.project.index == 0) {
			hpPostActions.removePostDataAndReset();
		}
		hpPostActions.pushPostData(liPosition);
	},
	checkPosition: function() {
		var midWindowScroll = this.state.scrollPos + (this.state.windowHeight / 2)
		var myPosition = this.state.posts[this.props.project.index];
		var node = React.findDOMNode(this.refs.hpWorkItem);

		if (midWindowScroll > myPosition.topPos && midWindowScroll < myPosition.bottomPos) {
			this.setState({isActive: true});
			this.runActivateAnim(node);
		} else {
			this.setState({isActive: false});
			this.runDeactivateAnim(node);
		}
	},
	runActivateAnim: function(DOMObject) {
		if (this.state.isActive) {
			if (this.state.isDesktop || this.state.isTablet) {
				TweenMax.to(DOMObject, 1, {
					ease: Back.easeOut.config(2),
					height: '45vh'
				});
			} else if (this.state.isMobile) {
				TweenMax.to(DOMObject, 1, {
					ease: Back.easeOut.config(2),
					height: '65vh'
				});
			}
		}
	},
	runDeactivateAnim: function(DOMObject) {
		if (!this.state.isActive) {
			if (this.state.isDesktop || this.state.isTablet) {
				TweenMax.to(DOMObject, 0, {
					height: '25vh'
				});
			} else if (this.state.isMobile) {
				TweenMax.to(DOMObject, 0, {
					height: '45vh'
				});
			}
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
	renderInner: function() {
		if (this.state.isActive) {
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
			<section ref="hpWorkItem" className={ classNames(this.getClasses())} style={this.getStyles()} onMouseEnter={this.hover} onMouseLeave={this.notHovering}>
			  	<div className="work-info">
				  	<div className="work-text">
				  	    <h1>{this.props.project.text.title}<span className="project-number">{(this.props.project.index + 1) + '/' + (this.props.totalProjects)}</span></h1>
                        {this.renderInner()}
				  	</div>
			  	</div>
			</section>
		)
	}
});

module.exports = HpWorkItem