var React = require('react')
var Data = require('../../../data/projects.js')

var introText = 'WiRe Design is a studio founded and run by William Renwick, it offers bespoke and personal designs tailored to meet each clients needs. Specialised in producing high quality digital solutions';

var HomepageIntro = React.createClass({
	render: function() {
		return (
			<section id="intro">
                <div id="intro-text" className="js-fade-text">
                	<h1>{introText}</h1>
                </div>
                <div id="intro-arrow" className="down-arrow"></div>
        	</section>
        )
	}
});

module.exports = HomepageIntro