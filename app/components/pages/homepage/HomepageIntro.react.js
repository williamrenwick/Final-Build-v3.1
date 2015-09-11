var React = require('react')
var Data = require('../../../data/projects.js')

var introText = "WIRE Design is a studio founded and run by William Renwick. I offer bespoke and personal designs tailored to meet each clients needs, with several years experience working for clients ranging from start-ups to many Fortune 500 companies - there's no project too big or small. I specialise in producing high quality digital solutions with a heavy focus on usability and integration of modern web practises in both design and development.";

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