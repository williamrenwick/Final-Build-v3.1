var React = require('react');

var mixin = require('baobab-react/mixins').branch
var classNames = require('classnames');

var AppActions = require('../../actions/appActions.js')

var Loader = React.createClass({
	mixins: [mixin], 
	cursors: {
		isPreloaded: ['general', 'isPreloaded']
	},
	componentDidMount: function() {
		setTimeout(function() {
			AppActions.isPreloaded();
		}, 4000)
	},
	render: function() {
		console.log(this.state.isPreloaded)
		return (
			<div id="loader" className={classNames({loaded: this.state.isPreloaded})}>
				<div id='loader-logo'></div>
			</div>
		)
	}
})
module.exports = Loader;