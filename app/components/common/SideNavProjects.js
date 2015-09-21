var React = require('react');
var SideNavProject = require('./SideNavProject.js');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');


var SideNavProjects = React.createClass({
	renderProjects: function() {
		var totalAmount = this.props.projects.length;
		return this.props.projects.map((project) => {
			return <SideNavProject totalAmount={totalAmount} project={project}/>;
		})
	},
	render: function() {
		return (
			<div id="project-side">
				<ul id="proj-all">
					{this.renderProjects()}
				</ul>
			</div>
		)
	}
})

module.exports = SideNavProjects;