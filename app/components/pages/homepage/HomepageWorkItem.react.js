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
		workBGColor: ['homepage', 'workBGColor']
	},
	componentDidMount: function() {
		window.addEventListener('scroll', this.handleScroll);
	},
	componentDidUnmount: function() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	handleScroll: function(event) {
 		var colorData = HpColorAnim.workInfoBg(this.state.scrollPos);

 		HPActions.updateBGColor(colorData);
	},
	getStyles: function() {
		var styleObj = {
			backgroundImage: 'url(' + this.props.project.images.header + ')'
		}
		return styleObj
	},
	getClasses: function() {

		//if (this.state.isDesktop) {
			var classes = {
				hpWorkItem: true
			}
			return classes
		/*} else {
			var classes = {
				hpWorkItem: true,
				active: null
			}

			var normalisedIndex = this.props.project.index + 1
			var postTop = this.state.windowHeight * normalisedIndex;
			var triggerIn = postTop - (this.state.windowHeight / 2);
			var triggerOut = postTop + (this.state.windowHeight / 2);

			if (this.state.scrollPos >= triggerIn && this.state.scrollPos < triggerOut) {
				classes.active = true
			} else {
				classes.active = false
			}

			return classes
		}*/
		
	},
	render: function() {	
		return (
			<section className={ classNames(this.getClasses()) } style={this.getStyles()}>
			  <div className="work-info" style={{ 'background-color': this.state.workBGColor }} ref="workInfo">
				  <div className="work-text js-fade-text">
					  <div className="worktext-appear-wrap">
						<ViewBtn project={this.props.project}/>
				  	    <h1>{this.props.project.text.title}</h1>
                        <h3>Client</h3>
                        <h2>{this.props.project.text.client}</h2>
                        <h3>Fields</h3>
                        <h2>{this.props.project.text.fields}</h2>
					  </div>
				  </div>
			  </div>
			</section>
		)
	}
});

module.exports = HpWorkItem