var React = require('react');
var PureMixin = require('react-pure-render/mixin');
var Router = require('react-router');
var Link = Router.Link;

var ViewBtn = React.createClass({
	mixins: [PureMixin],
	render: function() {
		return (
			<div className="view-proj">
			    <div className="view-plus"></div>
			    <p>View Project</p>
			</div>
		)
	}
});

module.exports = ViewBtn