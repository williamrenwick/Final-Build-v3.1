var React = require('react');

var mixin = require('baobab-react/mixins').branch
var classNames = require('classnames');

var Contact = React.createClass({
	mixins: [mixin],
	cursors: {
		windowHeight: ['resize', 'currentHeight'],
		documentHeight: ['resize', 'currentDocHeight'],
		isInProjects: ['project', 'isInProjects'],
		scrollPos: ['scrolling', 'scrollPosition']
	},
	willBeActive: function() {
		var windowHeight = this.state.windowHeight;
		var docH = this.state.documentHeight;
		var scrollBtmPos = this.state.scrollPos + windowHeight;
		var btmTrigger = docH - (windowHeight/2);

		if (scrollBtmPos < btmTrigger) {
			return false
		} else if (scrollBtmPos > btmTrigger) {
			return true
		}

	},
	render: function() {
		var isActive = this.willBeActive();

		return (
			<section id="contact" className={ classNames({isInProjects: this.state.isInProjects, notActive: !isActive }) }>
			    <div id="contact-wrap">
			        <div id="contact-left">
			            <h3>Telephone</h3>
			            <h2>+44 (0)7850083174</h2>
			            <h3>Email</h3>
			            <h2>william.r.renwick@gmail.com</h2>
			            <h3>Connect With Me</h3>
			            <ul>
			                <li>LinkedIn</li>
			                <li>Facebook</li>
			                <li>Google+</li>
			            </ul>
			        </div>
			        <div id="contact-right">
			            <h1>Let's Talk</h1>
			            <p>© William Renwick. All rights reserved.</p>
			        </div>
			    </div>
			</section>
		)
	}
})
module.exports = Contact