var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var Overview = require('./Overview.js');
var Brief = require('./Brief.js')


var SectionTwo = React.createClass({
	mixins: [mixin],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation']
	},
	render: function() {
		var activeProject = this.props.activeProject;

		return (
			<div id="section2" className="project-section">

				<div id="s2-img1-wrap" className="s2-img-wrap">
					<div id="s2-img1">
						<div style={{backgroundImage: 'url(' + activeProject.images.brief1 + ')'}}></div>
					</div>
				</div>

				<Brief activeProject={activeProject}/>

				<div id="s2-img2-wrap" className="s2-img-wrap">
					<div id="s2-img2">
						<div style={{backgroundImage: 'url(' + activeProject.images.brief2 + ')'}}></div>
					</div>
				</div>

			</div>
		)
	}
});

module.exports = SectionTwo;