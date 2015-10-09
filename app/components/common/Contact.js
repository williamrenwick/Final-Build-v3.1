var React = require('react');

var mixin = require('baobab-react/mixins').branch
var classNames = require('classnames');
var ResizeActions = require('../../actions/ResizeActions.js');

var Contact = React.createClass({
	mixins: [mixin],
	cursors: {
		windowHeight: ['resize', 'currentHeight'],
		documentHeight: ['resize', 'currentDocHeight'],
		isInProjects: ['project', 'isInProjects'],
		scrollPos: ['scrolling', 'scrollPosition']
	},
	componentDidMount: function() {
		var docH = $(document).height();
		ResizeActions.updateDocHeight(docH);
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
			            <h2><a href="mailto:william.r.renwick@gmail.com?Subject=Hello%20">william.r.renwick@gmail.com</a></h2>
			            <h3>Connect With Me</h3>
			            <ul>
			                <li><a href="https://uk.linkedin.com/pub/william-renwick/37/6b2/934">LinkedIn</a></li>
			                <li><a href="https://www.facebook.com/william.renwick">Facebook</a></li>
			                <li><a href="https://plus.google.com/u/0/110911607273359768683/posts">Google+</a></li>
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
module.exports = Contact;