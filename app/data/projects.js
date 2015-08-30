var Forward = require('./forwarddata.js');
var Mei = require('./meidata.js');
var Roche = require('./rochedata.js');

var DATA = [Forward, Roche, Mei];
var PROJECTS = [];

//Define Project Class
function Project(index, link, images, text) {
	this.index = index;
	this.images = images;
	this.text = text;
	this.link = determineLink(this.text);

	function determineLink(text) {
		var str = text.title,
			link = str.replace(/\s+/g, '-').toLowerCase();

		return link
	}
}


//Define Project Parameters
for (var i = 0; i < DATA.length; i++) {
	PROJECTS.push( new Project(i, DATA[i].link, DATA[i].images, DATA[i].text) )
}

module.exports = PROJECTS;

