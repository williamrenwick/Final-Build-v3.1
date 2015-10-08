var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var Overview = require('./Overview.js');
var Solution = require('./Solution.js')

var SectionOne = React.createClass({
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
					<Overview activeProject={activeProject}/>
					<div className="overview-img-wrap">
						<div id="overview-img">
							<div style={{backgroundImage: 'url(' + activeProject.images.overview + ')'}}></div>
						</div>
					</div>
				</div>
			)
		} else if (this.state.isTablet) {
			return (
				<div>
					<div id="all-text">
						<Overview activeProject={activeProject}/>
						<Solution activeProject={activeProject}/>
					</div>
					<div className="overview-img-wrap">
						<div id="overview-img">
							<div style={{backgroundImage: 'url(' + activeProject.images.overview + ')'}}></div>
						</div>
					</div>
				</div>
			)
		}
	},
	render: function() {

		return (
			<div id="section1" className="project-section">
				{this.renderInner()}
			</div>
		)
	}
});

module.exports = SectionOne;