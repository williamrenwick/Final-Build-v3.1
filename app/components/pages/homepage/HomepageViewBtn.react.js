var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var ViewBtn = React.createClass({
	render: function() {
		return (
			<Link to={this.props.project.link}>
				<div className="view-proj">
				    <div className="view-plus"></div>
				    <p>View Project</p>
				</div>
			</Link>
		)
	}
});

module.exports = ViewBtn