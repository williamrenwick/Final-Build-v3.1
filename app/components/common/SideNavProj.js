var React = require('react');
var LiProjItem = require('./SideNavProjItem.js');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');


var ProjectSide = React.createClass({

	render: function() {
		var liItems = [];
		var totalAmount = this.props.projects.length;

		this.props.projects.forEach(function(project) {
			liItems.push(<LiProjItem totalAmount={totalAmount} project={project}/>)
		})
		return (
			<div id="project-side">
				<ul id="proj-all">
					{liItems}
				</ul>
			</div>
		)
	}
})

module.exports = ProjectSide;