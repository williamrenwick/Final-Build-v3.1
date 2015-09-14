var React = require('react');
var HpWorkItem = require('./HomepageWorkItem.react.js')

var HomepageWorkItems = React.createClass({
	render: function() {
		var hpWorkItems = [];
				
		this.props.projects.forEach(function(project) {
			hpWorkItems.push(<HpWorkItem project={project} />);
		})

		return (
			<div id="workItems" style={{height: '100%'}}>
				{hpWorkItems}
			</div>
		)
	}
});

module.exports = HomepageWorkItems