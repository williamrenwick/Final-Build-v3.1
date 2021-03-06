var React = require('react');

var mixin = require('baobab-react/mixins').branch
var PureMixin = require('react-pure-render/mixin');
var classNames = require('classnames');

var AppActions = require('../../actions/appActions.js')

var Loader = React.createClass({
	mixins: [mixin, PureMixin], 
	cursors: {
		isLoaded: ['general', 'isNowLoaded']
	},
	componentWillMount: function() {
		setTimeout(function() {
			AppActions.isLoaded();
		}, 4000)
	},
	render: function() {
		return (
			<div id="loader" className={classNames({loaded: this.state.isLoaded})}>
				<div id='loader-logo'></div>
			</div>
		)
	}
})
module.exports = Loader;