var React = require('react');

var mixin = require('baobab-react/mixins').branch
var classNames = require('classnames');

var Contact = React.createClass({
	mixins: [mixin],
	cursors: {
		windowHeight: ['resize', 'currentHeight'],
		isInProjects: ['project', 'isInProjects'],
		scrollPos: ['scrolling', 'scrollPosition']
	},
	willBeActive: function() {
		var windowH = $(window).height();
		var docH = $(document).height();
		var scrollBtmPos = this.state.scrollPos + windowH;
		var btmTrigger = docH - (windowH/2);

		if (scrollBtmPos < btmTrigger) {
			return false
		} else if (scrollBtmPos > btmTrigger) {
			return true
		}
	},
	render: function() {
		var isActive = this.willBeActive();

		return (
			<section id="contact" className={ classNames({isInProjects: this.state.isInProjects, notActive: !isActive }) } style={{height: this.state.windowHeight}}>
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