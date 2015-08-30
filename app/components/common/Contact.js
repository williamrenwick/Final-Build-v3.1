var React = require('react')


var Contact = React.createClass({
	render: function() {
		return (
			<section id="contact">
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