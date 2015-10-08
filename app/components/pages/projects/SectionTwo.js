var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var Overview = require('./Overview.js');
var Solution = require('./Solution.js')


var SectionTwo = React.createClass({
	mixins: [mixin],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation'],
		isMobile: ['resize', 'isMobile'],
		isTablet: ['resize', 'isTablet'],
		isDesktop: ['resize', 'isDesktop']
	},
	renderInner: function() {
		var activeProject = this.props.activeProject;

		if (this.state.isDesktop || this.state.isMobile) {
			return (
				<div>
					<div id="s2-img1-wrap" className="s2-img-wrap">
						<div id="s2-img1">
							<div style={{backgroundImage: 'url(' + activeProject.images.brief1 + ')'}}></div>
						</div>
					</div>
					<Solution activeProject={activeProject}/>
					<div id="s2-img2-wrap" className="s2-img-wrap">
						<div id="s2-img2">
							<div style={{backgroundImage: 'url(' + activeProject.images.brief2 + ')'}}></div>
						</div>
					</div>
				</div>
			)
		} else if (this.state.isTablet) {
			return (
				<div>
					<div id="s2-img1-wrap" className="s2-img-wrap">
						<div id="s2-img1">
							<div style={{backgroundImage: 'url(' + activeProject.images.brief1 + ')'}}></div>
						</div>
					</div>
					<div id="s2-img2-wrap" className="s2-img-wrap">
						<div id="s2-img2">
							<div style={{backgroundImage: 'url(' + activeProject.images.brief2 + ')'}}></div>
						</div>
					</div>
				</div>	
			)
		}
	},
	render: function() {
		return (
			<div id="section2" className="project-section">
				{this.renderInner()}
			</div>	
		)
	}
});

module.exports = SectionTwo;