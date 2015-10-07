var React = require('react');
var SectionThreeVideo = require('./SectionThreeVideo.js');

var Youtube = require('react-youtube');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');



var SectionThree = React.createClass({
	mixins: [mixin],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation']
	},
	render: function() {
		var activeProject = this.props.activeProject;

		if (activeProject.video !== undefined) {
			return (
				<div id="section3" className="project-section">
					<div ref='videowrap' className="s3-img-wrap">
						<SectionThreeVideo activeProject={activeProject} />
					</div>
				</div>
			)
		} else {
			return (
				<div id="section3" className="project-section">
					<div className="s3-img-wrap">
						<div id="s3-img">
							<div style={{backgroundImage: 'url(' + activeProject.images.section3 + ')'}}></div>
						</div>
					</div>
				</div>
			)
		}


	}
});

module.exports = SectionThree;