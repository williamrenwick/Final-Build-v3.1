var Summit = require('./summitdata.js');
var Mei = require('./meidata.js');
var Roche = require('./rochedata.js');
var Mount = require('./mountdata.js');
var Snap = require('./snapdata.js');
var Prism = require('./prismdata.js');
var Design = require('./designteamdata.js');
var Homemade = require('./panasonicdata.js');


var DATA = [Summit, Roche, Mei, Mount, Snap, Prism, Design, Homemade];
var PROJECTS = [];

//Define Project Class
function Project(index, link, images, text, video) {

	this.index = index;
	this.text = text;
	this.images = images;
	this.video = video !== undefined ? video : undefined;
	this.link = determineLink(this.text);

	function determineLink(text) {
		var str = text.title,
			link = str.replace(/\s+/g, '-').toLowerCase();

		return link
	}
}


//Define Project Parameters
for (var i = 0; i < DATA.length; i++) {
	PROJECTS.push( new Project(i, DATA[i].link, DATA[i].images, DATA[i].text, DATA[i].video) )
}

module.exports = PROJECTS;

