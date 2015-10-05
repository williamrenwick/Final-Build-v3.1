var directory = 'img/roche/';

var images = {
	headerfade: directory + 'maindfade.jpg',
	header: directory + 'maind.jpg',
	overview: directory + '1.jpg',
	brief1: directory + '2.jpg',
	brief2: directory + '3.jpg',
	section3: directory + '4.jpg',
	arrayForPreload: function() {
		var self = this;

		return [
			self.headerfade,
			self.header,
			self.overview,
			self.brief1,
			self.brief2,
			self.section3
		]
	}
}


var brief = "A fortune 500 company came to us with a business problem that's understandable for an organisation with over 85,000 employees; they wanted to make it easier for all their workers to find out what promotions or transfers they could take from their current position."
var solution = "The solution was to create a dynamic 'map' of all the roles with the system able to automatically tell what role you were currently placed in upon login. The application then allows the user to view 3 different types of paths of career progression - In Family, Cross Family and Cross Department. This allowed the system to be as simple as possible whilst also encapsulating the organisations prodigious and complex structure."

var text = {
	title: 'Roche CMS',
	client: 'Innocellence',
	fields: 'UX, Design',
	brief: brief,
	solution: solution
}

module.exports = {
	images: images,
	text: text
}