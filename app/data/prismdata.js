var directory = 'img/prism/';

var images = {
	header: directory + 'main.jpg',
	overview: directory + '2.jpg',
	brief1: directory + '3.jpg',
	brief2: directory + '4.jpg',
	section3: directory + '5.jpg'
}


var brief = "Our clients had kept coming to us with a request for us to supply them with an application that would allow them to send rich, user specific content to their employees - we set out to do just that."
var solution = "Prism is an application that diseminates content from one source to many different users. It allows the section chiefs or managers to link to or upload content to their employees, depending on your security clearences it'll show you different content relevant to you specifically."

var text = {
	title: 'Prism',
	client: 'Innocellence',
	fields: 'Branding, UX, Design',
	brief: brief,
	solution: solution
}

module.exports = {
	images: images,
	text: text
}